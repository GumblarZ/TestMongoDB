const express = require('express');
const routes = express.Router();

const VideoController = require("./controllers/videoController");
const VideoMiddleware = require("./middlewares/videoMiddleware");


routes.get("/videos",VideoController.index);

routes.post("/videos",VideoController.store);

routes.put("/videos/:id", VideoMiddleware.getVideo, VideoController.update);

routes.delete("/videos/:id",VideoMiddleware.getVideo,VideoController.delete);

module.exports = routes;