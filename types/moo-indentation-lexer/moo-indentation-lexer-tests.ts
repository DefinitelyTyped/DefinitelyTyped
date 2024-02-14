import * as moo from "moo";
import { IndentationLexer } from "moo-indentation-lexer";

const mooLexer = moo.compile({
    ws: /[ \t]+/,
    dot: ".",
    comma: ",",
    openBracket: "[",
    closeBracket: "]",
    openParen: "(",
    closeParen: ")",
    contact: { match: /@[a-zA-Z_][\w-]*/, value: (s) => s.slice(1) },
    string: {
        match: /"(?:\\\\|\\"|\\n|\\r|\\t|\\u[0-9A-Fa-f]{4}|\\U[0-9A-Fa-f]{8}|[^\\"\n\r])+"/,
    },
    float: /[0-9]+\.[0-9]+/,
    integer: /[1-9][0-9]*/,
    boolean: /true|false/,
    operator: /!=|=|>=|<=|>|</,
    ident: /[a-zA-Z_][a-zA-Z0-9_-]*/,
    nl: { match: /\n/, lineBreaks: true },
});

export const lexer = new IndentationLexer({
    lexer: mooLexer,
});

export const nonDefaultLexer = new IndentationLexer({
    lexer: mooLexer,
    indentationType: "WS",
    newlineType: "NL",
    commentType: "comment",
    indentName: "indent",
    dedentName: "dedent",
    enclosingPunctuations: { "[": "]", "<": ">" }, // defaults {}, () and []
    separators: [","], // defaults to , : ;  lexer: mooLexer,
});
