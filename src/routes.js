const express = require('express');
const routes = express.Router();

const CharactereController = require("./controllers/charactereController");

routes.get("/characteres", CharactereController.index);
routes.post("/characteres", CharactereController.store);


module.exports = routes;