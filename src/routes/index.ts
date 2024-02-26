import { Router } from "express";
import builderRoutes from "../components/form-builder/builder.routes";
const applicationV1Routes = Router();

applicationV1Routes.use("/forms", builderRoutes);

export default applicationV1Routes;
