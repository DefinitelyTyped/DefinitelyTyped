

import * as marked from 'marked';

var options: MarkedOptions = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    silent: false,
    highlight: function (code: string, lang: string) {
    	return '';
    },
    langPrefix: 'lang-',
    smartypants: false,
    renderer: new marked.Renderer()
};

function callback() {
	console.log('callback called');
}

marked.setOptions(options);

console.log(marked('i am using __markdown__.'));
console.log(marked('i am using __markdown__.', options));
console.log(marked('i am using __markdown__.', callback));
console.log(marked('i am using __markdown__.', options, callback));

console.log(marked.parse('i am using __markdown__.'));
console.log(marked.parse('i am using __markdown__.', options));
console.log(marked.parse('i am using __markdown__.', callback));
console.log(marked.parse('i am using __markdown__.', options, callback));

var text = 'something';
var tokens = marked.lexer(text, options);
console.log(marked.parser(tokens));

var renderer = new marked.Renderer();
renderer.heading = function(text, level, raw) {
    return text + level.toString() + raw;
};
