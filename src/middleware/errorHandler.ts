import { ErrorRequestHandler } from 'express';
import * as z from "zod";

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  if (err instanceof z.ZodError) {
    return res.status(400).json({
      error: 'Validation error from zod',
      details: err.issues.map((issue) => ({ message: issue.message, path: issue.path })),
    });
  }
    
    if (err.name === 'MongooseError') {
        console.error('Database error:', err.code);
        return res.status(400).json({
            error: 'Database error',
            details: err.errmsg,
        });
    }


  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
};