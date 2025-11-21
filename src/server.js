const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const projectsRouter = require("./config/routes/projectRoutes");
console.log("projectsRouter type:", typeof projectsRouter, projectsRouter);
app.use("/api/projects", projectsRouter);

app.get("/", (req, res) => {
  res.send("Project Management API is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
