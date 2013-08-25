/// <reference path="marked.d.ts" />

import marked = require('marked');

marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    highlight: function (code, lang) {
    }
});
console.log(marked('i am using __markdown__.'));

var text = 'something',
    options = {};
var tokens = marked.lexer(text, options);
console.log(marked.parser(tokens));
