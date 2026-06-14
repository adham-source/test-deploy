import express, {Request, Response} from 'express';
import { errorHandler } from './middleware/errorHandler';
import authRoutes from './routes/auth.route';

const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/auth', authRoutes);

app.get('/', (req:Request, res: Response) => {
  res.json({ message: 'Welcome to the API' });
});
// testing
app.get("/team", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the Team API" });
});

// App error handling middleware
app.use(errorHandler);

export default app;