import { registerSchema, loginSchema } from "../schemas/auth.schema";
import authController from "../controllers/auth.controller";
import { Router } from "express";
import { validate } from "../validations/validator";

const router = Router();

router.post('/register', validate(registerSchema), authController.register);
router.post('/login', validate(loginSchema), authController.login);

export default router;