const ApiError = require('./ApiError');

module.exports = (err, req, res, next) => {
  if(err instanceof ApiError) {
    return res.status(err.httpStatusCode).json(err);
  }

  res.status(400).json(new ApiError(400, 'E0010002', {}, "Please check your inputs!"));
};
