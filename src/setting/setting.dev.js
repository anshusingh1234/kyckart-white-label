const settings = {
  "config": {
    "ENV": process.env["NODE_ENV"],
    "PORT": process.env["PORT"],
    "SERVER": process.env["SERVER"],
    "API_ENDPOINT": process.env["API_ENDPOINT"],
    "SQL": {
      "HOST": process.env["SQL:HOST"],
      "PORT": process.env["SQL:PORT"],
      "DATABASE": process.env["SQL:DATABASE"],
      "USER": process.env["SQL:USER"],
      "PASSWORD": process.env["SQL:PASSWORD"],
      "CONNECTION_POOL_NAME": process.env["SQL:CONNECTION_POOL_NAME"]
    }
  }
};

module.exports = settings;
