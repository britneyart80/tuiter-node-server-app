import * as tuitsDao from "./tuits-dao.js";

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.image = "nasa.png";
  newTuit.handle = "@nasa";
  newTuit.username = "NASA";
  newTuit.time = new Date().getHours().toString() + "h";
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  console.log(insertedTuit);
  res.json(insertedTuit);
};

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
};

const updateTuit = async (req, res) => {
  const tuitIdToUpdate = req.params.tid;
  const updates = req.body;
  await tuitsDao.updateTuit(tuitIdToUpdate, updates);
  const ret = {
    _id: tuitIdToUpdate,
    ...req.body,
  };
  res.json(ret);
};
const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.json(status);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
