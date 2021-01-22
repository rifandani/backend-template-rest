'use strict';

const app = require('express')();

// constants
const PORT = process.env.PORT || 8080;

// routes
app.get('/', (req, res) => {
  res.status(200);
  res.json({ msg: 'Home' });
});

// listen
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
