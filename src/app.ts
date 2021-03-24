import express, { Application } from 'express';
// files
import router from './router';

// express app
const app: Application = express();

// routes
app.use('/api/', router);
// app.use('/api/v2/', router);

export default app;
