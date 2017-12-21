import * as prettier from 'prettier';
import { ExpressionStatement, CallExpression, Identifier } from 'babel-types';

const formatted = prettier.format("foo ( );", { semi: false });

const isFormatted = prettier.check("foo ( );", { semi: false });

const result = prettier.formatWithCursor(" 1", { cursorOffset: 2 });

const customFormatted = prettier.format("lodash ( )", {
    parser(text, { babylon }) {
        const ast = babylon(text);
        const statement = ast.program.body[0] as ExpressionStatement;
        const expression = statement.expression as CallExpression;
        const identifier = expression.callee as Identifier;
        identifier.name = "_";
        return ast;
    }
});

prettier.resolveConfig('path/to/somewhere').then(options => {
    if (options !== null) {
        const formatted = prettier.format('hello world', options);
    }
});

// $ExpectError
prettier.resolveConfig();

const options = prettier.resolveConfig.sync('path/to/somewhere');
if (options !== null) {
    const formatted = prettier.format('hello world', options);
}

prettier.clearConfigCache();

const currentSupportInfo = prettier.getSupportInfo();
const specificSupportInfo = prettier.getSupportInfo("1.8.0");
