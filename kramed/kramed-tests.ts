
import { KramedOptions, kramed, KramedParser, KramedStatic, KramedRenderer } from 'kramed';

var options: KramedOptions = {
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
    renderer: new kramed.Renderer()
};

function callback() {
	console.log('callback called');
}

kramed.setOptions(options);

console.log(kramed('i am using __kramdown__.'));
console.log(kramed('i am using __kramdown__.', options));
console.log(kramed('i am using __kramdown__.', callback));
console.log(kramed('i am using __kramdown__.', options, callback));

console.log(kramed.parse('i am using __kramdown__.'));
console.log(kramed.parse('i am using __kramdown__.', options));
console.log(kramed.parse('i am using __kramdown__.', callback));
console.log(kramed.parse('i am using __kramdown__.', options, callback));

var text = 'something';
var tokens = kramed.lexer(text, options);
console.log(kramed.parser(tokens));

var renderer = new kramed.Renderer();
renderer.heading = function(text, level, raw) {
    return text + level.toString() + raw;
};
