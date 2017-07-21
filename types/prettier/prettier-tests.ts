import * as prettier from 'prettier';

const formatted = prettier.format("foo ( );", { semi: false });

const isFormatted = prettier.check("foo ( );", { semi: false });

const result = prettier.formatWithCursor(" 1", { cursorOffset: 2 });

const customFormatted = prettier.format("lodash ( )", {
    parser(text, { babylon }) {
        const ast = babylon(text);
        ast.program.body[0].expression.callee.name = "_";
        return ast;
    }
});
