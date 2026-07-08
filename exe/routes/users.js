const express = require("express");
const router = express.Router();

const users = [
  { id: 1, name: "michael" },
  { id: 2, name: "hanan" },
  { id: 3, name: "chaim" },
  { id: 4, name: "netanel" },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:name", (req, res) => {
  const name = req.params.name;
  const user = users.find((user) => user.name === name);

  if (!user) {
    return res.status(404).json({ error: "user not found." });
  }

  res.json(user);
});

module.exports = router;
