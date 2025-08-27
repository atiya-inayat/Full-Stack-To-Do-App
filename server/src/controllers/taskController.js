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
    res.status(500).json({ message: "Server Error" });
  }
};

export const getAllTask = async (req, res) => {
  try {
    const getAllTask = await Task.find();
    res.status(200).json(getAllTask);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getAllTaskById = async (req, res) => {
  try {
    const getTaskByID = await Task.findById(req.params.id);
    if (!getTaskByID) {
      return res.status(404).json({ message: "Task Not Found" });
    }
    res.status(200).json(getTaskByID);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
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
    res.status(500).json({ message: "Server Error" });
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
    res.status(500).json({ message: "Server Error" });
  }
};
