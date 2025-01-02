const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Debugging middleware
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

// Serve static files explicitly
app.get('/static/css/:file', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/css', req.params.file));
});

app.get('/static/js/:file', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/js', req.params.file));
});

app.get('/static/:file', (req, res) => {
  const filePath = `/workspaces/Codex/website/public/${req.params.file}`;
  console.log(`Attempting to serve file from: ${filePath}`);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(`Error serving file: ${err.message}`);
      res.status(404).send('File not found');
    }
  });
});

app.get('/test3.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'test3.txt'));
});

console.log('Static files served from:', path.join(__dirname, 'public'));

// Basic route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
