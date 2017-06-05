import * as moo from 'moo';

let lexer = moo.compile({
    lparen: '(',
    word:  /[a-z]+/,
    rparen: ')',
    keyword: ['while', 'if', 'else', 'moo', 'cows']
});

lexer = moo.states({
    main: {
        strstart: {match: '`', push: 'lit'},
        ident:    /\w+/,
        lbrace:   {match: '{', push: 'main'},
        rbrace:   {match: '}', pop: 1},
        colon:    ':',
        space:    {match: /\s+/, lineBreaks: true},
    },
    lit: {
        interp:   {match: '${', push: 'main'},
        escape:   /\\./,
        strend:   {match: '`', pop: 1},
        const:    {match: /(?:[^$`]|\$(?!\{))+/, lineBreaks: true},
    },
});

lexer.reset('some line\n');
let info = lexer.save();
lexer.next();
lexer.next();
lexer.reset('a different line\n', info);
lexer.next();
