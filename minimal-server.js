const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve a test file
app.get('/test', (req, res) => {
  res.send('Hello, this is a test response');
});

// Start server
app.listen(PORT, () => {
  console.log(`Minimal server running on http://localhost:${PORT}`);
});
