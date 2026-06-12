import express, {Request, Response} from 'express';
import authRoutes from './routes/auth.route';

const app: express.Application = express();
app.use(express.json());


app.use('/api/auth', authRoutes);

app.get('/', (req:Request, res: Response) => {
  res.json({ message: 'Welcome to the API' });
});

;
export default app;