import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import errorHandler from "./handlingError/errorHandler.js";
const app = express();

// connect to DB
connectDB();

// console.log("MONGO_URI:", process.env.MONGODB_URI); // test it here (should not be undefined)

app.use(express.json()); // to parse JSON body
// Routes
app.use("/api/tasks", taskRoutes);

// error - Must be the last middleware
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("hello World!!");
});

app.listen(3300, () => {
  console.log("Running on Post 3300!!!");
});
