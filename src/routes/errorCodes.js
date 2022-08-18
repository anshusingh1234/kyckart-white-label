const _errors = {
  E0010001: {
    title: 'Internal Server Error',
    message: 'Oops..!! Something went wrong :(',
    info: {
      type: "fullScreen",
      data: {
        description: "Something went wrong.",
        cta: "retry",
        label: "Retry"
      }
    }
  }

};

module.exports = {
  errors: _errors
};
