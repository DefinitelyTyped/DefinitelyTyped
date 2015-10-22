/// <reference path="../node/node.d.ts" />
/// <reference path="../express/express.d.ts" />
/// <reference path="express-handlebars.d.ts" />

import express = require('express');
import exphbs = require('express-handlebars');

var app = express();
var hbs: Exphbs = exphbs.create({defaultLayout: 'main'});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(1337);
console.log('Test Express Handlebars app on port 1337..');
console.log('Done');
process.exit(0);
