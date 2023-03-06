import htmlEscape = require('html-escape');

htmlEscape; // $ExpectType (str: string) => string
htmlEscape('foo <bar> baz'); // $ExpectType string
