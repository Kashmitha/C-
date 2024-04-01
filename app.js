// server.js
const express = require('express');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  // Process the form data (e.g., save to the database)
  // Redirect or send a response back to the client
  res.send(`User ${username} signed up successfully!`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
