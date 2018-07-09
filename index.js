var express = require('express');
var app = express();
var path = require('path');
// console.log(__dirname +'dist');

const dist = 'build';
app.use(express.static(path.resolve(__dirname, dist)));

// Always return the main index.html, so react-router render the route in the client
app.get(/.*/, (req, res) => {
  return res.sendFile(path.resolve(__dirname, dist, 'index.html'));
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/
console.log('express started')
