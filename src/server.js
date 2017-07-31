const express = require('express');
const path = require('path');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/../dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res) {
  var host = req.header("host");
  if (host.match(/^www\..*/i)) {
    next();
  } else {
    res.redirect(301, "http://www." + host);
  }
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});
