const mongoose = require("mongoose");
import { Response, Request } from "express";
const asyncHandler = require("express-async-handler");

const Project = require("../models/projectModel");

// @desc Get all projects
// @route GET /api/projects
// @access Public
const getProjects = asyncHandler(async (req: Request, res: Response) => {
  const projects = await Project.find();
  res.status(200).json(projects);
});

// @desc Create a project
// @route POST /api/projects
// @access Private
const createProject = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Project title is required");
  }

  // check for duplicate title
  const projectExists = await Project.findOne({ title: req.body.title });

  if (projectExists) {
    res.status(400);
    throw new Error("Project title already exists");
  }

  const project = await Project.create(req.body);

  if (!project) {
    res.status(400);
    throw new Error("Project not created");
  }

  res.status(201).json(project);
});

// @desc Get a project
// @route GET /api/projects/:id
// @access Public
const getProject = asyncHandler(async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error("Invalid project id");
  }

  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  res.status(200).json(project);
});

// @desc Update a project
// @route PUT /api/projects/:id
// @access Private
const updateProject = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Project title is required");
  }

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error("Invalid project id");
  }

  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  res.status(200).json(project);
});

// @desc Delete a project
// @route DELETE /api/projects/:id
// @access Private
const deleteProject = asyncHandler(async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error("Invalid project id");
  }

  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  res
    .status(200)
    .json({ message: `Project with the ID:${req.params.id} deleted` });
});

module.exports = {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
};
