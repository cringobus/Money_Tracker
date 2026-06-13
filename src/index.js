import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/database.js";
import app from "./app.js";

const startServer = async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.log(`Error ${error}`);
      throw error;
    });
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`The server is running on port ${port}`);
    });
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

startServer();
