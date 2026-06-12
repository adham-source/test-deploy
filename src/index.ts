import app from './app';

const createServer = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
}

createServer();
