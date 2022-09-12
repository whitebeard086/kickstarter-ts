import { Response, Request } from "express";

// @desc Get all projects
// @route GET /api/projects
// @access Public
const getProjects = (req: Request, res: Response) => {
  res.status(200).json({ message: "Get All Projects" });
};

// @desc Create a project
// @route POST /api/projects
// @access Private
const createProject = (req: Request, res: Response) => {
  res.status(201).json({ message: "Create a Project" });
};

// @desc Get a project
// @route GET /api/projects/:id
// @access Public
const getProject = (req: Request, res: Response) => {
  res.status(200).json({ message: `Get Project ${req.params.id}` });
};

// @desc Update a project
// @route PUT /api/projects/:id
// @access Private
const updateProject = (req: Request, res: Response) => {
  res.status(200).json({ message: `Update Project ${req.params.id}` });
};

// @desc Delete a project
// @route DELETE /api/projects/:id
// @access Private
const deleteProject = (req: Request, res: Response) => {
  res.status(200).json({ message: `Delete Project ${req.params.id}` });
};

module.exports = {
  getProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
};
