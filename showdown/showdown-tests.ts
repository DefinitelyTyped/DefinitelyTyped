/// <reference path="showdown.d.ts" />

// compile: tsc showdown/showdown-tests.ts --noImplicitAny --module commonjs
// run: node showdown/showdown-tests.js

import * as Showdown from 'showdown';

var exampleMarkdown = '#hello, markdown',
    converter = new Showdown.Converter();

console.log(converter.makeHtml(exampleMarkdown));
// should log '<h1 id="hellomarkdown">hello, markdown</h1>'
