import express = require('express');
import slashes = require('connect-slashes');

var app = express();

// Using default settings...
app.use(slashes());


// Remove slashes instead of adding them...
app.use(slashes(false));


// With additional options defined inline...
app.use(slashes(true, {
    base: '/blog',
    code: 302,
    headers: {
        'Cache-Control': 'public',
        'Accpet': 'application/json'
    }
}));


// Defining an options object and referencing
// it in the constructor...
var options: slashes.Options = {
    base: '/blog',
    code: 302,
    headers: {
        'Cache-Control': 'public',
        'Accpet': 'application/json'
    }
};
app.use(slashes(true, options));


// Defining an options object with only
// some properties...
var options: slashes.Options = {
    base: '/blog'
}
var options: slashes.Options = {
    code: 302
}
var options: slashes.Options = {
    headers: {
        'Cache-Control': 'public',
        'Accpet': 'application/json'
    }
}
