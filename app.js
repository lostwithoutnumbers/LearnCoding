const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Render the HTML form
app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>User Information Form</title>
    </head>
    <body>
      <h1>User Information Form</h1>
      <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label for="email">Email ID:</label>
        <input type="email" id="email" name="email" required>
        <br>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required>
        <br>
        <input type="submit" value="Submit">
      </form>
    </body>
    </html>
  `);
});

// Handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;

  // You can now use the name, email, and phone variables to process the form data
  // For example, you can store them in a database, send them via email, etc.

  // Send a response back to the user
  res.send(`
    <html>
    <head>
      <title>Form Submission Result</title>
    </head>
    <body>
      <h1>Form Submission Result</h1>
      <p>Name: ${name}</p>
      <p>Email ID: ${email}</p>
      <p>Phone Number: ${phone}</p>
    </body>
    </html>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});


import React, { useState } from 'react';

const RegistrationForm = () => {
  // State variables to store form data
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform validation and submit the form data to a server here
    // ...
    console.log('Form submitted:', { username, email, phone });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
