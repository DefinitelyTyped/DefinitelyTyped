
import mkpath = require('mkpath');

mkpath('red/green/violet', function (err) {
  if (err) throw err;
  console.log('Directory structure red/green/violet created');
});

mkpath.sync('/tmp/blue/orange', 700);
