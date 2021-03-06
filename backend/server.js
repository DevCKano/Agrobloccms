import express from "express";
import color from "colors";
import connectedDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import contactRoute from "./routes/contactRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

connectedDB();

const app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Api is runnung...");
});

app.use("/api/contacts", contactRoute);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server Runnig in ${process.env.NODE_ENV} mode  on Port ${PORT}`.yellow.bold
  )
);
