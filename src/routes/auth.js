const moment = require("moment");

module.exports = async (req, res, next) => {
  console.log(`[${moment().format("YYYY-MM-DD hh:mm:ss")}]`, "URL & PARAMS", req.url, req.query, req.headers["x-api-key"] ? {"api-key": req.headers["x-api-key"]} : {}, req.method, JSON.stringify(req.body));

  const token = req.headers['x-api-key'];  
  if(token) next();
  else return res.status(401).send();
}
