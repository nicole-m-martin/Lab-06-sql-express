const express = require('express')
const cors = require('cors')
const app = express();
const { animal } = require('./data.js');

app.use(cors());

// Get animal array
app.get('/animal', (req, res) => {
res.json({ animal });
});

// get one animal out of array
app.get('/animal/:id', (req, res) => {
  const id = Number(req.params.id);
  const oneAnimal = animal.find((a) => a.id === id);

  res.json({ oneAnimal });
});

module.exports = {
    app
};