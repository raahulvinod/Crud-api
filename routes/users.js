import express from "express";
import { createUser, getUsers, viewUser, editUser, deletetUser } from "../controllers/users.controller.js";

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', viewUser);

router.delete('/:id', deletetUser);

router.patch('/:id', editUser)

export default router;