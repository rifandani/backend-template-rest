import app from './app';

// constants
const PORT = process.env.PORT || 8000;

// listen
app.listen(PORT, () => console.log(`⚡ on http://localhost:${PORT}/api`));
