/// <reference path="showdown.d.ts" />

// compile: tsc showdown/showdown-tests.ts --noImplicitAny --module commonjs
// run: node showdown/showdown-tests.js

import Showdown = require('showdown');

var exampleMarkdown = '#hello, markdown',
    converter = new Showdown.converter(),
    preloadedExtensions = [ 'github', 'twitter', 'prettify', 'table' ],
    extensionsConverter = new Showdown.converter({ extensions: preloadedExtensions });

console.log(converter.makeHtml(exampleMarkdown));
// should log '<h1 id="hellomarkdown">hello, markdown</h1>'

console.log(extensionsConverter.makeHtml(exampleMarkdown));
// should log '<p><a href="http://twitter.com/search/%23hello">#hello</a>, markdown</p>'

Showdown.forEach(preloadedExtensions, console.log);
// should log each item in the above array
