const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    status: { type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo' },
    owner: { type: String }, // adjust to ObjectId if you have users
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
