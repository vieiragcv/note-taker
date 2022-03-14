const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const { tasks } = require('./db/db');

app.get('/', (req, res) => {
  res.send('here');
});

app.get('/api/db', (req, res) => {
  let results = tasks;
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`)
});