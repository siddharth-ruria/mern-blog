import { log } from 'console';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user-route.js'
import authRoutes from './routes/auth-route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {
        log('database connected...');
    }
).catch((err) => {
    log(err);
});

const app= express();

app.use(express.json());

app.listen(3000, () => {
    log('server is running on port 3000...');
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes);