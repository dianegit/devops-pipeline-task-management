const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI || process.env.MONGO_URL || process.env.DATABASE_URL;
  if (!uri) {
    console.warn("MongoDB URI not set. Skipping DB connection.");
    return;
  }

  try {
    await mongoose.connect(uri); // mongoose v6+ uses sensible defaults
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message || err);
    // do not rethrow here so the app can keep running during development
  }
};

module.exports = connectDB;
