const express = require("express");
const dot_env = require("dotenv");
const path = require("path");
var cors = require("cors");
const host = "0.0.0.0";

require("./connection.js");
const routes = require("./routes.js");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(routes);

dot_env.config();

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

const port = process.env.PORT || 8080;

app.listen(port, host, () => console.log(`server listening on ${port}`));
