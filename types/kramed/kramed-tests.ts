import { KramedOptions, kramed, KramedParser, KramedStatic, KramedRenderer } from 'kramed';

const options: KramedOptions = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    silent: false,
    highlight(code: string, lang: string) {
    	return '';
    },
    langPrefix: 'lang-',
    smartypants: false,
    renderer: new kramed.Renderer()
};

function callback() {
	'callback called';
}

kramed.setOptions(options);

kramed('i am using __kramdown__.');
kramed('i am using __kramdown__.', options);
kramed('i am using __kramdown__.', callback);
kramed('i am using __kramdown__.', options, callback);

kramed.parse('i am using __kramdown__.');
kramed.parse('i am using __kramdown__.', options);
kramed.parse('i am using __kramdown__.', callback);
kramed.parse('i am using __kramdown__.', options, callback);

const text = 'something';
const tokens = kramed.lexer(text, options);
kramed.parser(tokens);

const renderer = new kramed.Renderer();
renderer.heading = (text, level, raw) => text + level.toString() + raw;
