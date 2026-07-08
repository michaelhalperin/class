const express = require("express");
const router = express.Router();

const tasks = [
  { id: 1, text: "one" },
  { id: 2, text: "two" },
];

router.get("/", (req, res) => {
  res.json(tasks);
});

// router.post("/", (req, res) => {
//   const { text } = req.body;
//   if (!text) {
//     return res.status(400).json({ error: "you must enter text" });
//   }
//   const task = { id: tasks.length + 1, text };
//   tasks.push(task);
//   res.status(200).json(task);
// });

// router.post("/:id", (req, res) => {
//   const { text } = req.body;
//   const id = req.params.id;
//   if (!id || !text) {
//     return res.status(400).json({ error: "you must enter text / id" });
//   }

//   const task = { id, text };
//   tasks.push(task);
//   res.status(200).json(task);
// });

module.exports = router;
