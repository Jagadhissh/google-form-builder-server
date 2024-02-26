import express from "express";
import applicationV1Routes from "./routes";
import connectToDatabase from "./config/db";
import errorMiddlware from "./middlewares/error.middleware";
// dotEnv.config({ path: "../.env" });
const app = express();

import Loaders from "./loaders/Loaders";
const loaders = new Loaders();
loaders.configureCors(app);
loaders.configureCors(app);

connectToDatabase();

app.use(express.json());
app.use("/api/v1", applicationV1Routes);
app.use(errorMiddlware);

app.listen(3000, () => {
  console.log("Server started");
});
