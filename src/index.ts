import app from './app';
import { config } from './config';
import { connectDB } from './db';

const createServer = async () => {
    await connectDB();
    app.listen(config.port, () => {
        console.info(`Server is running on http://localhost:${config.port}`);
    });
}

createServer();
