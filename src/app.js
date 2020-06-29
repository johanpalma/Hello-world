const express = require('express');
const app = express();

// Imports Routes
const helloWord = require('./routes/hello-word.route');

// Middleware

// use routes
app.use('/helloworld', helloWord);

module.exports = app
