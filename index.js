const __initEnvSettings = require("./src/setting/loadSetting").initializeEnvironmentSettings();
const config = require("./src/config").getConfig();
let express = require("express");
let cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require("cors");
const port = config.PORT || 4000;

let app = express();

app.use(cookieParser());

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
});

app.post("/", (req, res) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
});

const bodyParser = require("body-parser");
app.use(bodyParser.json({limit: "10mb"})); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: true, limit: "10mb"})); // support encoded bodies
app.use(express.static(__dirname + '/public'));

app.use(fileUpload({
  createParentPath: true
}));

app.use('/api', require("./src/routes/api"))

app.listen(port,'0.0.0.0',() => {
  console.log(`Server ready at ${config.SERVER}:${port}`);
});