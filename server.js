const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const pages = ['', 'about', 'experience', 'projects', 'certifications', 'contact'];
pages.forEach(page => {
  app.get(`/${page}`, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', `${page || 'index'}.html`));
  });
});

// Contact form endpoint
app.post('/contact', (req, res) => {
  console.log('Contact Form Submission:', req.body);
  res.json({ 
    success: true, 
    message: '📬 Your message has been sent successfully!' 
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));



