const ApiError = require("./../ApiError");
const {logRequest} = require("../../core/sql/controller");
const config = require("./../../config").getConfig();
const fetch = require("node-fetch");
const FormData = require("form-data");
const { getType } = require("./../../core/helper");

const api = {};


/**
 * Function to be used to validate api request, all validations will be here only
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
api.validate = async (req, res, next) => {
  const endpoint = req?.params?.[0] || "";
  if (!endpoint) return next(new ApiError(400, "E0010001"));
  else next();
}





/**
 * Function to be used to call KYC Kart APIs, all logic related to body, query or files will be added here
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

api.search = async (req, res, next) => {
  const endpoint = req.params[0];
  const method = req.method;
  let apiURL = `${config.API_ENDPOINT}/api${endpoint}`;
  const headers = {"x-api-key": req.headers["x-api-key"]}

  let options =  { method, headers}

  if(method.toLowerCase() == "post"){
    const formData = new FormData();
    if(req.body && Object.keys(req.body)?.length){
      Object.keys(req.body).forEach(index=>{
        formData.append(index, req.body[index]);
      })
    }
    if(req.files && Object.keys(req.files)?.length){
      Object.keys(req.files).forEach(index=>{
        formData.append(index, req.files[index].data, {
          contentType: req.files[index].mimetype,
          name: index,
          filename: req.files[index].name,
        });
      })
    }
    options = {...options, body: formData}
  }
  else{
    if(req.query && Object.keys(req.query)?.length){
      let queryParams = []
      Object.keys(req.query).forEach(index=>{
        queryParams.push(`${index}=${req.query[index]}`)
      })
      apiURL = `${apiURL}?${queryParams.join('&')}`
    }
  }

  fetch(apiURL, options).then((result) => {
    if(result.status == 200 || result.status == 400){
      result.json().then((json) => {
        req._response = json;
        res.status(result.status).send(json);
        next();
      })
    }
    else res.status(result.status).send(null);
  }).catch((err) => {
    return next(new ApiError(400, "E0010001"));
  });
}



/**
 * This function will be called in background after sending response to end users, won't impact API response time
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
api.setType = async(req, res, next) =>{
  const endpoint = req.params[0];
  const type = getType(endpoint);
  req._type = type
  next();
}


/**
 * This function will be called in background after sending response to end users, won't impact API response time
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
 api.logRequest = async(req, res, next) =>{
  next();

  const { cardNumber } = req.query;
  const { _type } = req;
  const apiKey = req.headers['x-api-key'];
  const params = {
    apiKey: apiKey,
    type: _type,
    requestBody: req.query ? JSON.stringify(req.query): JSON.stringify(req.body),
    responseBody: JSON.stringify(req._response),
    cardNumber: cardNumber
  }
  logRequest.save(params);
}


module.exports = api;