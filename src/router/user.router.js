import express from "express";
import userController from "../controller/user.controller.js";
const router = express.Router();
import UserController from "../controller/user.controller.js";

// prefix : /api/user/

router.post("/subscribe", UserController.insertNewUserEmail);

router.post("/contact", UserController.insertNewUserContactInfo);

router.get("/contact", userController.getAllContact);

(() => {})();

export default router;
