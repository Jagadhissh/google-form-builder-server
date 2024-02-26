import { Router } from "express";
import builderController from "./builder.controller";
import validate from "../../middlewares/validate";
import validateFormCreation from "./builder.validation";

const builderRoutes = Router();

builderRoutes.get("/", builderController.all);
builderRoutes.post(
  "/create",
  validate(validateFormCreation),
  builderController.create
);
builderRoutes.get("/:id", builderController.view);
builderRoutes.patch("/:id", builderController.update);
builderRoutes.delete("/:id", builderController.delete);

export default builderRoutes;
