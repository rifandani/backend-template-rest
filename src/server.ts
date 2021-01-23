import express from 'express';
// files
import router from './router';

// express app
const app: express.Application = express();

// constants
const PORT = process.env.PORT || 8080;

// routes
app.use('/', router);

// listen
app.listen(PORT, () => console.log(`⚡ on http://localhost:${PORT}`));
