const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/hello', (req, res) => res.send('Hello Azure World'));

app.get('/', (req, res) => res.send('OK'));

app.get('/force500', (req, res) => {
  res.status(500).send('Simulated server error');
});

app.listen(port, () => console.log(`App listening on port ${port}`));