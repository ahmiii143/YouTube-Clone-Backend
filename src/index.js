import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on the port ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("ERROR", err);
  });
// import express from "express";
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.listen(process.env.PORT, () => {
//       console.log("App is listening ");
//     });
//   } catch (error) {
//     console.log("Error", error);
//     throw error;
//   }
// })();
