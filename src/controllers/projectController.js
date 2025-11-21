const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    return res.status(201).json(project);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.json(projects);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Not found' });
    return res.json(project);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: 'Invalid ID' });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!project) return res.status(404).json({ message: 'Not found' });
    return res.json(project);
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: err.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Not found' });
    return res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: 'Invalid ID' });
  }
};
