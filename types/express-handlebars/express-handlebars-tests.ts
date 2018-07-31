import express = require('express');
import exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(1337);
console.log('Test Express Handlebars app on port 1337..');
console.log('Done');
process.exit(0);
