const express = require('express');
const routes = express.Router();

const CharactereController = require("./controllers/charactereController");
const WeaponController = require("./controllers/weaponController");

const CharactereMiddleware = require("./middlewares/selectCharacteres");
const WeaponMiddleware = require("./middlewares/selectWeapon");

routes.get("/characteres", CharactereController.index);
routes.post("/characteres", CharactereController.store);
routes.put("/characteres/:id", CharactereMiddleware.getCharactere , CharactereController.update);
routes.delete("/characteres/:id", CharactereMiddleware.getCharactere, CharactereController.delete);

routes.get("/weapons", WeaponController.index);
routes.post("/weapons", WeaponController.store);
routes.put("/weapons/:id", WeaponMiddleware.getWeapon , WeaponController.update);
routes.delete("/weapons/:id", WeaponMiddleware.getWeapon, WeaponController.delete);




module.exports = routes;