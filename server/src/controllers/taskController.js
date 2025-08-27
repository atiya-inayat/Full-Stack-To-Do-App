import Task from "../models/task.js";

export const createTask = async (req, res, next) => {
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
    next(error);
  }
};

export const getAllTask = async (req, res, next) => {
  try {
    const { completed, priority } = req.query;
    console.log(priority, completed);

    let filter = {};
    if (completed !== undefined) filter.completed = completed === "true";
    if (priority) filter.priority = priority;

    const AllTask = await Task.find(filter);
    res.status(200).json(AllTask);
  } catch (error) {
    next(error);
  }
};

export const getAllTaskById = async (req, res, next) => {
  try {
    const TaskByID = await Task.findById(req.params.id);
    if (!TaskByID) {
      const error = new Error("Task Not Found");
      error.status = 404; // ✅ set proper status

      return next(error);
    }
    res.status(200).json(TaskByID);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { title, description, dueDate, completed, priority } = req.body;

    const updateTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate, completed, priority },
      { new: true, runValidators: true }
    );
    if (!updateTask) {
      const error = new Error("Task Not Found");
      error.status = 404; // ✅ set proper status

      return next(error);
    }
    res.status(200).json(updateTask);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      const error = new Error("Task Not Found");
      error.status = 404; // ✅ set proper status

      return next(error);
    }
    res.status(200).json({ message: "Task Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};
