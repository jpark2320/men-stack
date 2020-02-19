const express = require('express');
const PORT = 3000;

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Home');
});

app.listen(PORT, () => console.log(`Running server on port ${PORT}`));
