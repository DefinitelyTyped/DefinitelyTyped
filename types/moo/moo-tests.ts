import * as moo from 'moo';

let lexer = moo.compile({
    lparen: '(',
    word: /[a-z]+/,
    rparen: ')',
    keyword: ['while', 'if', 'else', 'moo', 'cows']
});

lexer = moo.compile({
    WS: /[ \t]+/,
    comment: /\/\/.*?$/,
    number: /0|[1-9][0-9]*/,
    string: /"(?:\\["\\]|[^\n"\\])*"/,
    lparen: '(',
    rparen: ')',
    keyword: ['while', 'if', 'else', 'moo', 'cows'],
    NL: { match: /\n/, lineBreaks: true },
});

lexer = moo.compile({
    IDEN: {
        match: /[a-zA-Z]+/,
        type: moo.keywords({
            KW: ['while', 'if', 'else', 'moo', 'reloacows']
        })
    },
    SPACE: { match: /\s+/, lineBreaks: true }
});

lexer = moo.compile({
    name: {
        match: /[a-zA-Z]+/, type: moo.keywords({
            'kw-class': 'class',
            'kw-def': 'def',
            'kw-if': 'if',
        })
    }
});

lexer = moo.states({
    main: {
        strstart: { match: '`', push: 'lit' },
        ident: /\w+/,
        lbrace: { match: '{', push: 'main' },
        rbrace: { match: '}', pop: 1 },
        colon: ':',
        space: { match: /\s+/, lineBreaks: true },
    },
    lit: {
        interp: { match: '${', push: 'main' }, // tslint:disable-line no-invalid-template-strings
        escape: /\\./,
        strend: { match: '`', pop: 1 },
        const: { match: /(?:[^$`]|\$(?!\{))+/, lineBreaks: true },
    },
});

moo.compile({
    myError: moo.error
});

moo.compile({
    myError: { match: /[\$?`]/, error: true }
});

for (const here of lexer) {
    const t: string | undefined = here.type;
    const v: string = here.value;
}

const tokens: moo.Token[] = Array.from(lexer);

lexer.reset('some line\n');
const info = lexer.save();
lexer.next();
lexer.next();
lexer.reset('a different line\n', info);
lexer.next();

Array.from(lexer.reset('lex this'));

// Transform: https://github.com/no-context/moo#transform
moo.compile({
    STRING: [
        { match: /"""[^]*?"""/, lineBreaks: true, value: x => x.slice(3, -3) },
        { match: /"(?:\\["\\rn]|[^"\\])*?"/, lineBreaks: true, value: x => x.slice(1, -1) },
        { match: /'(?:\\['\\rn]|[^'\\])*?'/, lineBreaks: true, value: x => x.slice(1, -1) },
    ],
    // ...
});
