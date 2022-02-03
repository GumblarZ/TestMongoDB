const express = require('express');
const routes = express.Router();

routes.get("/", (resquest, response)=> response.send("Hello wolrd"));

module.exports = routes;