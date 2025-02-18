const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// Set Pug as the templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

module.exports = app;
