import Task from "../models/task.js";

export const createTask = (req, res) => {
  try {
    const { title, description, dueDate, status } = req.body;

    const newTask = Task.create({ title, description, dueDate, status });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getAllTask = (req, res) => {};

export const getAllTaskById = (req, res) => {};

export const updateTask = (req, res) => {};

export const deleteTask = (req, res) => {};
