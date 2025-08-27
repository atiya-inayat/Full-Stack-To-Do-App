import { body } from "express-validator";

const taskValidationRules = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),
  body("description").isLength({ max: 200 }).optional(),
  body("priority")
    .isIn(["low", "medium", "high"])
    .withMessage("Invalid Priority"),
];

export default taskValidationRules;
