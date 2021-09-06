import * as marked from 'marked';

const tokenizer = new marked.Tokenizer();

tokenizer.emStrong = function emStrong(src, _maskedSrc, _prevChar) {
    const token: marked.Tokens.Strong = {
        type: 'strong',
        text: src,
        raw: src,
        tokens: [],
    };

    this.lexer.inline(token.text, token.tokens);

    return token;
};

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
    tokenizer,
    renderer: new marked.Renderer(),
    walkTokens: token => {
        if (token.type === 'heading') {
            token.depth += 1;
        }
    },
};

options.highlight = (code: string, lang: string, callback: (error: any | undefined, code?: string) => void) => {
    callback(new Error());
    callback(null, '');
};

options = marked.getDefaults();
options = marked.defaults;

function callback(err: string, markdown: string) {
    console.log('Callback called!');
    console.log(markdown);
}

let myOldMarked: typeof marked = marked.options(options);
myOldMarked = marked.setOptions(options);

console.log(marked('1) I am using __markdown__.'));
console.log(marked('2) I am using __markdown__.', options));
marked('3) I am using __markdown__.', callback);
marked('4) I am using __markdown__.', options, callback);

console.log(marked.parse('5) I am using __markdown__.'));
console.log(marked.parse('6) I am using __markdown__.', options));
marked.parse('7) I am using __markdown__.', callback);
marked.parse('8) I am using __markdown__.', options, callback);

console.log(marked.parseInline('9) I am using __markdown__.'));
console.log(marked.parseInline('10) I am using __markdown__.', options));

const text = 'Something';
const tokens: marked.TokensList = marked.lexer(text, options);
console.log(marked.parser(tokens));

const lexer = new marked.Lexer(options);
const tokens2 = lexer.lex(text);
console.log(tokens2);
const tokens3 = lexer.inlineTokens(text, tokens);
console.log(tokens3);
const re: RegExp | marked.Rules = marked.Lexer.rules['code'];
const lexerOptions: marked.MarkedOptions = lexer.options;

const renderer = new marked.Renderer();
renderer.heading = (text, level, raw, slugger) => {
    return text + level.toString() + slugger.slug(raw);
};
renderer.hr = () => {
    return `<hr${renderer.options.xhtml ? '/' : ''}>\n`;
};
renderer.checkbox = checked => {
    return checked ? 'CHECKED' : 'UNCHECKED';
};
const rendererOptions: marked.MarkedOptions = renderer.options;

const textRenderer = new marked.TextRenderer();
console.log(textRenderer.strong(text));

const parseTestText = '- list1\n  - list1.1\n\n listend';
const parseTestTokens: marked.TokensList = marked.lexer(parseTestText, options);

const inlineTestText = '- list1\n  - list1.1\n\n listend';
const inlineTestTokens: marked.Token[] = marked.Lexer.lexInline(inlineTestText, options);

/* List type is `list`. */
const listToken = parseTestTokens[0] as marked.Tokens.List;
console.log(listToken.type === 'list');

const parser = new marked.Parser();
console.log(parser.parse(parseTestTokens));
console.log(marked.Parser.parse(parseTestTokens));
const parserOptions: marked.MarkedOptions = parser.options;

const slugger = new marked.Slugger();
console.log(slugger.slug('Test Slug'));
console.log(slugger.slug('Test Slug', { dryrun: true }));

marked.use({ renderer }, { tokenizer });

marked.use({
    renderer: {
        heading(text, level) {
            if (level > 3) {
                return `<p>${text}</p>`;
            }

            return false;
        },
    },
    tokenizer: {
        codespan(src) {
            const match = src.match(/\$+([^\$\n]+?)\$+/);
            if (match) {
                return {
                    type: 'codespan',
                    raw: match[0],
                    text: match[1].trim(),
                };
            }

            // return false to use original codespan tokenizer
            return false;
        },
    },
});

interface NameToken {
    type: 'name';
    raw: string;
    text: string;
    tokens: marked.Token[];
    items: marked.Token[];
}

const tokenizerExtension: marked.TokenizerExtension = {
    name: 'name',
    level: 'block',
    start: (src: string) => src.indexOf('name'),
    tokenizer(src: string): NameToken | void {
        if (src === 'name') {
            const token: NameToken = {
                type: 'name',
                raw: src,
                text: src,
                tokens: [],
                items: [],
            };
            this.lexer.inline(token.text, token.tokens);
            this.lexer.inline(token.text, token.items);
            return token;
        }
    },
    childTokens: ['items'],
};

const rendererExtension: marked.RendererExtension = {
    name: 'name',
    renderer(t) {
        const token = t as NameToken;
        if (token.text === 'name') {
            return this.parser.parse(token.items);
        }
        return false;
    },
};

const tokenizerAndRendererExtension = {
    name: 'name',
    level: 'block',
    tokenizer(src: string) {
        if (src === 'name') {
            const token = {
                type: 'name',
                raw: src,
            };
            return token;
        }
    },
    renderer(token: marked.Tokens.Generic) {
        if (token.raw === 'name') {
            return 'name';
        }

        return false;
    },
};

marked.use({
    extensions: [tokenizerExtension, rendererExtension, tokenizerAndRendererExtension],
});
