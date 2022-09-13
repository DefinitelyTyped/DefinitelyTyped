import { marked } from 'marked';

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

tokenizer.inlineText = function inlineText(...args: Parameters<marked.Tokenizer['inlineText']>) {
    const p = this.inlineText(...args);

    if (p) p.raw = p.text;

    return p;
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

options.highlight = (code: string, lang: string, callback: (error: any, code?: string) => void) => {
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
// verifying that the second param to inlineTokens can be ignored
const tokens3a = lexer.inlineTokens(text);
console.log(tokens3a);
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

class ExtendedRenderer extends marked.Renderer {
    code = (code: string, language: string | undefined, isEscaped: boolean): string => super.code(code, language, isEscaped);
    blockquote = (quote: string): string => super.blockquote(quote);
    html = (html: string): string => super.html(html);
    heading = (text: string, level: 1 | 2 | 3 | 4 | 5 | 6, raw: string, slugger: Slugger): string => super.heading(text, level, raw, slugger);
    hr = (): string => super.hr();
    list = (body: string, ordered: boolean, start: number): string => super.list(body, ordered, start);
    listitem = (text: string, task: boolean, checked: boolean): string => super.listitem(text, task, checked);
    checkbox = (checked: boolean): string => super.checkbox(checked);
    paragraph = (text: string): string => super.paragraph(text);
    table = (header: string, body: string): string => super.table(header, body);
    tablerow = (content: string): string => super.tablerow(content);
    tablecell = (content: string, flags: { header: boolean; align: 'center' | 'left' | 'right' | null }): string => super.tablecell(content, flags);
    strong = (text: string): string => super.strong(text);
    em = (text: string): string => super.em(text);
    codespan = (code: string): string => super.codespan(code);
    br = (): string => super.br();
    del = (text: string): string => super.del(text);
    link = (href: string, title: string, text: string): string => super.link(href, title, text);
    image = (href: string, title: string, text: string): string => super.image(href, title, text);
}

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
        listitem(text, task, checked) {
            if (task) return `<li class="task-list-item ${checked ? 'checked' : ''}">${text}</li>\n`;
            else return `<li>${text}</li>\n`;
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
    start: (src: string) => src.match(/name/)?.index,
    tokenizer(src: string): NameToken | void {
        if (src === 'name') {
            const token: NameToken = {
                type: 'name',
                raw: src,
                text: src,
                tokens: this.lexer.inline(src),
                items: [],
            };
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
            // verifying that the second param to parseInline can be ignored
            console.log(this.parser.parseInline(token.items));
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

const asyncExtension: marked.MarkedExtension = {
    async: true,
    async walkTokens(token) {
        if (token.type === 'code') {
            await Promise.resolve(3);
            token.text += 'foobar';
        }
    },
};

marked.use(asyncExtension);

(async () => {
    const md = '# foobar';
    const asyncMarked: string = await marked(md, { async: true });
    const promiseMarked: Promise<string> = marked(md, { async: true });
    const notAsyncMarked: string = marked(md, { async: false });
    const defaultMarked: string = marked(md);
    // $ExpectType void
    marked(md, (_: any, res: string) => { res; });
    // $ExpectType void
    marked(md, { async: true }, (_: any, res: string) => { res; });
    // $ExpectType void
    marked(md, { async: false }, (_: any, res: string) => { res; });

    const asyncMarkedParse: string = await marked.parse(md, { async: true });
    const promiseMarkedParse: Promise<string> = marked.parse(md, { async: true, headerIds: false });
    const notAsyncMarkedParse: string = marked.parse(md, { async: false });
    const defaultMarkedParse: string = marked.parse(md);
    // $ExpectType void
    marked.parse(md, (_: any, res: string) => { res; });
    // $ExpectType void
    marked(md, { async: true }, (_: any, res: string) => { res; });
    // $ExpectType void
    marked(md, { async: false }, (_: any, res: string) => { res; });
})();

// Tests for List and ListItem
// Dumped from markdown list parsed data

const listAndListItemText: marked.Tokens.List = {
    type: 'list',
    raw: '1. Text ...',
    ordered: true,
    start: 1,
    loose: false,
    items: [
        {
            type: 'list_item',
            raw: '1. Text ...',
            task: false,
            loose: false,
            text: 'Text',
            tokens: [
                {
                    type: 'text',
                    raw: 'Point one',
                    text: 'Point one',
                    tokens: [
                        {
                            type: 'text',
                            raw: 'Point one',
                            text: 'Point one',
                        },
                    ],
                },
                {
                    type: 'list',
                    raw: '',
                    ordered: false,
                    start: '',
                    loose: false,
                    items: [],
                },
            ],
        },
    ],
};

// other exports

// tslint:disable-next-line:no-duplicate-imports
import { Lexer, Parser, Tokenizer, Renderer, TextRenderer, Slugger } from 'marked';

const lexer2 = new Lexer();
const tokens4 = lexer2.lex('# test');
const parser2 = new Parser();
console.log(parser2.parse(tokens4));

const slugger2 = new Slugger();
console.log(slugger2.slug('Test Slug'));

marked.use({ renderer: new Renderer() });
marked.use({ renderer: new TextRenderer() });
marked.use({ tokenizer: new Tokenizer() });
