import express from "express";
import applicationV1Routes from "./routes";
import dotEnv from "dotenv";
import connectToDatabase from "./config/db";
import errorMiddlware from "./middlewares/error.middleware";
// dotEnv.config({ path: "../.env" });
const app = express();

import cors from "cors";
import Loaders from "./loaders/Loaders";
const loaders = new Loaders();
loaders.configureCors(app);
loaders.configureCors(app);
// const whitelist = ["http://localhost:5173"];
// const corsOptions = {
//   methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
//   origin: function (
//     origin: string | undefined,
//     callback: (error: Error | null, allow: boolean) => void
//   ) {
//     if (whitelist.indexOf(origin as string) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"), false);
//     }
//   },
//   optionsSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
// app.options("*", cors());

connectToDatabase();

app.use(express.json());
app.use("/api/v1", applicationV1Routes);
app.use(errorMiddlware);

app.listen(3000, () => {
  console.log("Server started");
});
