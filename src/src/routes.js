const express = require('express');
const routes = express.Router();

const VideoController = require("./controllers/videoController");
const videoMiddleware = require('./middlewares/videoMiddleware');
const VideoMiddleware = require("./middlewares/videoMiddleware");

routes.get("/videos", VideoController.index);

routes.post("/videos", VideoController.store);

routes.put("videos/:id" , videoMiddleware.validateId ,VideoController.update);

module.exports = routes;