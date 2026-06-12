import userService from '../services/auth.service';
import { Request, Response } from 'express';

class AuthController {
    async register(req: Request, res: Response): Promise<void> {
        try {
            const user = await userService.register(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: 'Registration failed' });
        }
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const user = await userService.login(email, password);
            if (user) {
                res.json(user);
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } catch (err) {
            res.status(400).json({ error: 'Login failed' });
        }
    }   
}
export default new AuthController();