const { sequelize } = require("../model/sequelize");
const SqlString = require("sqlstring");
const {
  logRequest: {
    SCHEMA: { FIELDS: LOG_REQUEST_FIELDS, TABLE_NAME: LOG_REQUEST_TABLE_NAME },
  },
} = require("../model");

let logRequest = {};

/**
 * saving user entry in DB
 * @param {*} callback
 */
logRequest.save = (params) => {
  return new Promise((resolve, reject) => {

    sequelize.query(QUERY_BUILDER.SAVE(params), { type: sequelize.QueryTypes.INSERT }).then((result) => {

      return resolve({ result });
    })
    .catch((error) => {
      console.log('SQL ERROR==>>', error);
      resolve({ error })
    });
  });
};

module.exports = logRequest;

const QUERY_BUILDER = {
  SAVE: (params) => {
    const { apiKey, type, requestBody, responseBody, cardNumber} = params;
    const data = {
      [LOG_REQUEST_FIELDS.API_KEY]: apiKey,
      [LOG_REQUEST_FIELDS.TYPE]: type,
      [LOG_REQUEST_FIELDS.REQUEST_BODY]: requestBody,
      [LOG_REQUEST_FIELDS.RESPONSE_BODY]: responseBody,
      [LOG_REQUEST_FIELDS.CARD_NUMBER]: cardNumber
    };

    return SqlString.format(
      `INSERT INTO ${LOG_REQUEST_TABLE_NAME} SET ?`,
      data
    );
  }

};
