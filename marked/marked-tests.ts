/// <reference path="marked.d.ts" />

import marked = module('marked');

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  highlight: function(code, lang) {
    if (lang === 'js') {
      return highlighter.javascript(code);
    }
    return code;
  }
});
console.log(marked('i am using __markdown__.'));

var tokens = marked.lexer(text, options);
console.log(marked.parser(tokens));

var lexer = new marked.Lexer(options);
var tokens2 = lexer.lex(text);
console.log(lexer.rules);