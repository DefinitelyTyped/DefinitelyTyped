import express = require('express');
import exphbs = require('express-handlebars');
import assert = require('assert');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const hbs = exphbs.create({defaultLayout: 'main'});

hbs.renderView('test', (err: any) => {});
hbs.renderView('test', (err: any, content: string) => {});
hbs.renderView('test', {
    layout: 'main'
}, (err: any) => {});
hbs.renderView('test', {
    layout: 'main'
}, (err: any, content: string) => {});

app.listen(1337);
console.log('Test Express Handlebars app on port 1337..');
console.log('Done');
process.exit(0);
