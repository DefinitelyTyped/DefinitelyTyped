/// <reference path="showdown.d.ts" />

// compile: tsc showdown/showdown-tests.ts --noImplicitAny --module commonjs
// run: node showdown/showdown-tests.js

import showdown = require('showdown');

var exampleMarkdown = '#hello, markdown',
    converter = new showdown.Converter();

var myExt: showdown.LangExtension = {type: 'lang', filter: (text, converter)=>{return text.replace('#', '*')}};
showdown.extension('my-ext', myExt);
var preloadedExtensions = [ 'my-ext' ],
    extensionsConverter = new showdown.Converter({ extensions: preloadedExtensions });

var configuredConverter = new showdown.Converter();
    configuredConverter.addExtension({type: 'lang', filter: (text, converter)=>{return text.replace('#', '*')}}, 'myext');

console.log(converter.makeHtml(exampleMarkdown));
// should log '<h1 id="hellomarkdown">hello, markdown</h1>'

console.log(extensionsConverter.makeHtml(exampleMarkdown));
// should log '<p>*hello, markdown</p>'

console.log(configuredConverter.makeHtml(exampleMarkdown));
// should log '<p>*hello, markdown</p>'
