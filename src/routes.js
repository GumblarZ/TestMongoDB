const express = require('express');
const routes = express.Router();

const VideoController = require("./controllers/videoController");
const CharactereController = require("./controllers/charactereController");

routes.get("/videos", VideoController.index);
routes.post("/videos", VideoController.store);

routes.get("/characteres", CharactereController.index);
routes.post("/characteres", CharactereController.store);


module.exports = routes;