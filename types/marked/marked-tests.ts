import * as marked from 'marked';

const options: marked.MarkedOptions = {
    baseUrl: '',
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

function callback(err: string, markdown: string) {
    console.log("Callback called!");
    return markdown;
}

const myOldMarked: typeof marked = marked.setOptions(options);

console.log(marked('1) I am using __markdown__.'));
console.log(marked('2) I am using __markdown__.', options));
console.log(marked('3) I am using __markdown__.', callback));
console.log(marked('4) I am using __markdown__.', options, callback));

console.log(marked.parse('5) I am using __markdown__.'));
console.log(marked.parse('6) I am using __markdown__.', options));
console.log(marked.parse('7) I am using __markdown__.', callback));
console.log(marked.parse('8) I am using __markdown__.', options, callback));

const text = 'Something';
const tokens: marked.TokensList = marked.lexer(text, options);
console.log(marked.parser(tokens));

const lexer = new marked.Lexer(options);
const tokens2 = lexer.lex(text);
console.log(tokens2);
const re: RegExp | marked.Rules = lexer.rules['code'];

const renderer = new marked.Renderer();
const slugger = new marked.Slugger();
renderer.heading = (text, level, raw, slugger) => {
    return text + level.toString() + slugger.slug(raw);
};
