const express = require("express");
const router = express.Router();

// Example route handlers
router.get("/", (req, res) => {
  res.json({ message: "List of projects" });
});

router.post("/", (req, res) => {
  // create project logic
  res.status(201).json({ message: "Project created" });
});

module.exports = router;