const express = require('express');
const charactereController = require('./controllers/charactereController');
const routes = express.Router();

const CharactereController = require("./controllers/charactereController");
const WeaponController = require("./controllers/weaponController");

const CharactereMiddleware = require("./middlewares/select");

routes.get("/characteres", CharactereController.index);
routes.post("/characteres", CharactereController.store);
routes.put("/characteres/:id", CharactereMiddleware.getCharactere , CharactereController.update);
routes.delete("/characteres/:id", CharactereMiddleware.getCharactere, charactereController.delete);


routes.get("/weapons", WeaponController.index);
routes.post("/weapons", WeaponController.store);



module.exports = routes;