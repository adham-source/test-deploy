import dotEnv from 'dotenv';

dotEnv.config();
export const config = {
    port: Number(process.env.PORT),
    nodeEnv: process.env.NODE_ENV as string,
    mongoURI: process.env.MONGO_URI as string
};