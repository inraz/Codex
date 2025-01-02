const express = require('express');
const path = require('path');
const app = express();
const PORT = 3003;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes for all pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/movies', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'movies.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.listen(PORT, () => {
  console.log(`Website running on http://localhost:${PORT}`);
});
