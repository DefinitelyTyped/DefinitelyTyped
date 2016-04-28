
import express = require('express');
import restIO = require('rest-io');
import mongoose = require('mongoose');

var app = express();

// register the express app with rest.io
restIO.restIO(app, {
  resources: __dirname + '/resources'
});

mongoose.connect('mongodb://localhost:27017/test');
app.listen(3000, function () {
  console.log('Server has started under port: 3000');
});
module.exports = app;