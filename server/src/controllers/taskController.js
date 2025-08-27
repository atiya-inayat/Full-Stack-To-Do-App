import Task from "../models/task.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, completed, priority } = req.body;

    const newTask = await Task.create({
      title,
      description,
      dueDate,
      completed,
      priority,
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getAllTask = async (req, res) => {
  try {
    const AllTask = await Task.find();
    res.status(200).json(AllTask);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getAllTaskById = async (req, res) => {
  try {
    const TaskByID = await Task.findById(req.params.id);
    if (!TaskByID) {
      return res.status(404).json({ message: "Task Not Found" });
    }
    res.status(200).json(TaskByID);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, description, dueDate, completed, priority } = req.body;

    const updateTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate, completed, priority },
      { new: true, runValidators: true }
    );
    if (!updateTask) {
      return res.status(404).json({ message: "Task Not Found" });
    }
    res.status(200).json(updateTask);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task Not Found" });
    }
    res.status(200).json({ message: "Task Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
