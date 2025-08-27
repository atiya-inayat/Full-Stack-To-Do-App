import express from "express";

import {
  createTask,
  getAllTask,
  getAllTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getAllTask);
router.get("/:id", getAllTaskById);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
