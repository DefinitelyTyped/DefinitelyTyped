import * as marked from 'marked';

let options: marked.MarkedOptions = {
    baseUrl: '',
    gfm: true,
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
    renderer: new marked.Renderer(),
};

options = marked.getDefaults();
options = marked.defaults;

function callback(err: string, markdown: string) {
    console.log('Callback called!');
    return markdown;
}

let myOldMarked: typeof marked = marked.options(options);
myOldMarked = marked.setOptions(options);

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
const re: RegExp | marked.Rules = marked.Lexer.rules['code'];
console.log(lexer.token(text, true));
const lexerOptions: marked.MarkedOptions = lexer.options;

const renderer = new marked.Renderer();
renderer.heading = (text, level, raw, slugger) => {
    return text + level.toString() + slugger.slug(raw);
};
renderer.hr = () => {
    return `<hr${renderer.options.xhtml ? '/' : ''}>\n`;
};
renderer.checkbox = (checked) => {
    return checked ? 'CHECKED' : 'UNCHECKED';
};
const rendererOptions: marked.MarkedOptions = renderer.options;

const textRenderer = new marked.TextRenderer();
console.log(textRenderer.strong(text));

const parseTestText = '- list1\n  - list1.1\n\n listend';
const parseTestTokens: marked.TokensList = marked.lexer(parseTestText, options);
const parser = new marked.Parser();
console.log(parser.parse(parseTestTokens));
console.log(marked.Parser.parse(parseTestTokens));
const parserOptions: marked.MarkedOptions = parser.options;

const links = ['http', 'image'];
const inlineLexer = new marked.InlineLexer(links);
console.log(inlineLexer.output('http://'));
console.log(marked.InlineLexer.output('http://', links));
console.log(marked.InlineLexer.rules);
const inlineLexerOptions: marked.MarkedOptions = inlineLexer.options;
