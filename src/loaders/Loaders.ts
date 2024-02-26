import dotEnv from "dotenv";
import cors from "cors";

class Loaders {
  constructor() {
    dotEnv.config({ path: "../.env" });
  }

  configureCors(app: any) {
    const whitelist = ["http://localhost:5173", "http://localhost:4173", "*"];
    const corsOptions = {
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      origin: function (
        origin: string | undefined,
        callback: (error: Error | null, allow: boolean) => void
      ) {
        if (whitelist.indexOf(origin as string) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"), false);
        }
      },
      optionsSuccessStatus: 200,
    };
    app.use(cors(corsOptions));
    app.options("*", cors());
  }
}
export default Loaders;
