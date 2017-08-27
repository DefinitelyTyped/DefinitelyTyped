import * as marked from 'marked';

const options: marked.MarkedOptions = {
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
    renderer: new marked.Renderer()
};

function callback() {
    console.log('callback called');
}

const myOldMarked: typeof marked = marked.setOptions(options);

console.log(marked('i am using __markdown__.'));
console.log(marked('i am using __markdown__.', options));
console.log(marked('i am using __markdown__.', callback));
console.log(marked('i am using __markdown__.', options, callback));

console.log(marked.parse('i am using __markdown__.'));
console.log(marked.parse('i am using __markdown__.', options));
console.log(marked.parse('i am using __markdown__.', callback));
console.log(marked.parse('i am using __markdown__.', options, callback));

const text = 'something';
const tokens: marked.TokensList = marked.lexer(text, options);
console.log(marked.parser(tokens));

const lexer = new marked.Lexer(options);
const tokens2 = lexer.lex(text);
console.log(tokens2);
const re: RegExp | marked.Rules = lexer.rules['code'];

const renderer = new marked.Renderer();
renderer.heading = (text, level, raw) => {
    return text + level.toString() + raw;
};
