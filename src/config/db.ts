import mongoose from "mongoose";
import environmentConfig from "./environment.config";
const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(
      environmentConfig.getDBURL() || "",
      {
        dbName: "google-forms",
        autoCreate: true,
        connectTimeoutMS: 5000,
      }
    );
    console.log(
      "Connected to Database:",
      connection.connections[0].db.databaseName
    );
  } catch (error) {
    console.log("Error while connecting to database:", error);
  }
};
export default connectToDatabase;
