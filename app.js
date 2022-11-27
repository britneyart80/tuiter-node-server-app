import express from "express";
import HelloController from "./controllers/hello-controller.js";
import cors from "cors";

import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING =
  "mongodb+srv://britney:dyK65b0z7UOPYdc0@cluster0.eaq3hdp.mongodb.net/?retryWrites=true&w=majority" ||
  "mongodb://localhost:27017/tuiter";
mongoose.connect(CONNECTION_STRING);
mongoose.connect("mongodb://localhost:27017/tuiter");
const app = express();
app.use(express.json());
app.use(cors());
HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);
