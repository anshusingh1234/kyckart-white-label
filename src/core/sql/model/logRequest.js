/**
* Module specific to logs table
*/

const TABLE_NAME = "logs";
const FIELDS = {
  ID: "id",
  API_KEY: "apiKey",
  TYPE: "type",
  REQUEST_BODY: "requestBody",
  RESPONSE_BODY:"responseBody",
  CARD_NUMBER:"cardNumber",
  CREATED_AT:"createdAt"
}

let logRequest = {};

logRequest.SCHEMA = {
  TABLE_NAME,
  FIELDS
}

module.exports = logRequest;