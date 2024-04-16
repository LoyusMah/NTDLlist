import express from "express";
import { IdGenerator } from "../src/utiles.js";

const router = express.Router();

let fakeDb = [];

//// controller
router.get("/", (req, res) => {
  res.json({
    message: "message from router get",
    data: fakeDb,
  });
});
router.post("/", (req, res) => {
  console.log(req.body);
  const id = IdGenerator();
  fakeDb.push({ ...req.body, id });
  res.json({
    message: "message from router post",
  });
});
//lets update tasks
router.patch("/", (req, res) => {
  const { id, type } = req.body;
  fakeDb = fakeDb.map((item) => {
    if (item.id === id) {
      return { ...item, type }; ////item.type == type
    }
    return item;
  });
  res.json({
    message: "yout task has been updated",
  });
});

///delete the file
router.delete("/", (req, res) => {
  const { id } = req.body;
  fakeDb = fakeDb.filter((item) => item.id === id);
  res.json({
    message: "yout task has been updated",
  });
});
export default router;
