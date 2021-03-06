// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.get('/api/timestamp/:date_string', (req, res) => {
  let date = new Date(isNaN(req.params.date_string)?req.params.date_string:parseInt(req.params.date_string))
  // console.log(isNaN(date.getTime()))
  if (isNaN(date.getTime())) {
    res.json({"error": "Invalid Date"})
  } else {
    // console.log(date.getTime())
    res.json({"unix": date.getTime(), "utc": date.toUTCString()})
  }
})

app.get('/api/timestamp/', (req, res) => {
  res.json({"unix": new Date().getTime(), "utc": new Date().toUTCString()})
})

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
