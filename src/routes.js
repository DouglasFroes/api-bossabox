const express = require("express");
const validate = require("express-validation");

const authMiddleware = require("./app/middlewares/auth");
const controller = require("./app/controllers");
const validators = require("./app/validators");

const routes = express.Router();

routes.post(
  "/users",
  validate(validators.User),
  controller.UserController.store
);
routes.post(
  "/session",
  validate(validators.Session),
  controller.SessionController.store
);

routes.use(authMiddleware);
/*
  ferramentas
*/
routes.get("/tools", controller.FerramentasController.index);
routes.get("/tools/:id", controller.FerramentasController.show);
routes.post(
  "/tools",
  validate(validators.Ferramenta),
  controller.FerramentasController.store
);
routes.put(
  "/tools/:id",
  validate(validators.Ferramenta),
  controller.FerramentasController.update
);
routes.delete("/tools/:id", controller.FerramentasController.destroy);

module.exports = routes;
