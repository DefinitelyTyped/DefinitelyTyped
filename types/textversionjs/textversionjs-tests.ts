import textVersion = require('textversionjs');

// $ExpectType string
textVersion("<h1>Hello World</h1><p>Hello World</p>");
/*
=>
    Hello World
    ===========
    Hello World
*/

// @ts-expect-error
textVersion(1);
