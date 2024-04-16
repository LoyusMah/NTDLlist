import express from "express";

const router = express.Router();

const fakeDb = [];

//// controller
router.get("/", (req, res) => {
  res.json({
    message: "message from router get",
    data: fakeDb,
  });
});
router.post("/", (req, res) => {
  console.log(req.body);
  fakeDb.push(req.body);
  res.json({
    message: "message from router post",
  });
});
export default router;
