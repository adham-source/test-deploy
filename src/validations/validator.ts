// Parse valadation use zod
import { ZodSchema } from 'zod';

// Middleware to validate request body against a Zod schema
export const validate = (schema: ZodSchema) => {
    return (req: any, res: any, next: any) => {
        try {
            schema.parse(req.body);
            schema.parse(req.query);
            schema.parse(req.params);
            next();
        } catch (error) {
            res.status(400).json({ error: error    });
        }
    };
}