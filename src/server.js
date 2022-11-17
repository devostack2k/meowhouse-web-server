import express from "express";
import configs from "./configs/index.js";
import dotenv from "dotenv";
import initWebRoute from "./router/index.js";
import { sequelize } from "./database/sequelize.js";

dotenv.config();

var app = express();
configs(app);
initWebRoute(app);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Starting server on http://localhost:${port}`);
});
