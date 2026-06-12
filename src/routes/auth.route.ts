import authController from "../controllers/auth.controller";
import { Router } from "express";
import { validateBody } from "../middleware/validation";
import { registerSchema, loginSchema } from "../validations/auth.validate";
const router = Router();

router.post('/register', validateBody(registerSchema), authController.register);
router.post('/login', validateBody(loginSchema), authController.login);

export default router;