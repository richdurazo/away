// Get dependencies
require('dotenv').config()
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mw = require('./middleware/auth')
console.log(mw);

// Get our api routes
const api = require('./routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
console.log("this is the process", process.env.AUTH_SECRET)
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/test', mw.jwtchecker, (req, res) => {
  res.status(200).send('its working bitch');
})
// Set our api routes
app.use('/api', api);
// For the private route, we'll add this authCheck middleware
console.log(path.join(__dirname, '../dist/index.html'));
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));