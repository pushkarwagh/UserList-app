const express = require('express');
const dot_env = require('dotenv');
const path = require('path');
var cors = require('cors');

require('./connection.js');
const routes = require('./routes.js');

const app = express();

app.use(express.static('public'))
app.use(express.json());
app.use(cors());
app.use(routes);

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build/", "index.html"));
});

dot_env.config();
const port = process.env.PORT;
console.log("dote env ==>",process.env.PORT) 

app.listen(port ,() => 
    console.log( `server listening on ${port}`)
);