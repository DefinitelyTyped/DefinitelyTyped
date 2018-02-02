import { Comment } from 'estree';
import { SourceCode, Linter, CLIEngine, RuleTester, AST } from 'eslint';

const SOURCE = `var foo = bar;`;

const AST: AST.Program = {
    type: 'Program',
    sourceType: 'module',
    body: [],
    comments: [],
    tokens: [],
    loc: {
        start: { line: 0, column: 0 },
        end: { line: 0, column: 0 }
    },
    range: [0, 0],
};

const TOKEN: AST.Token = {
    type: 'Identifier',
    value: 'foo',
    loc: {
        start: { line: 0, column: 0 },
        end: { line: 0, column: 3 }
    },
    range: [0, 3]
};

const COMMENT: Comment = {
    type: 'Block',
    value: 'foo',
    loc: {
        start: { line: 0, column: 0 },
        end: { line: 0, column: 0 }
    },
    range: [0, 0],
};

//#region SourceCode

const sourceCode = new SourceCode(SOURCE, AST);

SourceCode.splitLines(SOURCE);

sourceCode.getText();
sourceCode.getText(AST);
sourceCode.getText(AST, 0);
sourceCode.getText(AST, 0, 0);

sourceCode.getLines();

sourceCode.getAllComments();

sourceCode.getComments(AST).leading;
sourceCode.getComments(AST).trailing;

sourceCode.getJSDocComment(AST);

sourceCode.getNodeByRangeIndex(0);

sourceCode.getNodeByRangeIndex(0);

sourceCode.isSpaceBetweenTokens(TOKEN, TOKEN);

sourceCode.getLocFromIndex(0);

sourceCode.getIndexFromLoc({ line: 0, column: 0 });

sourceCode.getTokenByRangeStart(0);
sourceCode.getTokenByRangeStart(0, { includeComments: true });

// TODO: Should accept no second parameter?
sourceCode.getFirstToken(AST, 0);
sourceCode.getFirstToken(AST, { skip: 0 });
sourceCode.getFirstToken(AST, t => t.type === 'Identifier');
sourceCode.getFirstToken(AST, { filter: t => t.type === 'Identifier' });
sourceCode.getFirstToken(AST, { skip: 0, filter: t => t.type === 'Identifier' });
sourceCode.getFirstToken(AST, { includeComments: true });
sourceCode.getFirstToken(AST, { includeComments: true, skip: 0 });
sourceCode.getFirstToken(AST, { includeComments: true, skip: 0, filter: t => t.type === 'Identifier' });

sourceCode.getFirstTokens(AST, 0);
sourceCode.getFirstTokens(AST, { count: 0 });
sourceCode.getFirstTokens(AST, t => t.type === 'Identifier');
sourceCode.getFirstTokens(AST, { filter: t => t.type === 'Identifier' });
sourceCode.getFirstTokens(AST, { count: 0, filter: t => t.type === 'Identifier' });
sourceCode.getFirstTokens(AST, { includeComments: true });
sourceCode.getFirstTokens(AST, { includeComments: true, count: 0 });
sourceCode.getFirstTokens(AST, { includeComments: true, count: 0, filter: t => t.type === 'Identifier' });

sourceCode.getLastToken(AST, 0);
sourceCode.getLastToken(AST, { skip: 0 });
sourceCode.getLastToken(AST, t => t.type === 'Identifier');
sourceCode.getLastToken(AST, { filter: t => t.type === 'Identifier' });
sourceCode.getLastToken(AST, { skip: 0, filter: t => t.type === 'Identifier' });
sourceCode.getLastToken(AST, { includeComments: true });
sourceCode.getLastToken(AST, { includeComments: true, skip: 0 });
sourceCode.getLastToken(AST, { includeComments: true, skip: 0, filter: t => t.type === 'Identifier' });

sourceCode.getLastTokens(AST, 0);
sourceCode.getLastTokens(AST, { count: 0 });
sourceCode.getLastTokens(AST, t => t.type === 'Identifier');
sourceCode.getLastTokens(AST, { filter: t => t.type === 'Identifier' });
sourceCode.getLastTokens(AST, { count: 0, filter: t => t.type === 'Identifier' });
sourceCode.getLastTokens(AST, { includeComments: true });
sourceCode.getLastTokens(AST, { includeComments: true, count: 0 });
sourceCode.getLastTokens(AST, { includeComments: true, count: 0, filter: t => t.type === 'Identifier' });

sourceCode.getTokenBefore(AST, 0);
sourceCode.getTokenBefore(AST, { skip: 0 });
sourceCode.getTokenBefore(AST, t => t.type === 'Identifier');
sourceCode.getTokenBefore(AST, { filter: t => t.type === 'Identifier' });
sourceCode.getTokenBefore(AST, { skip: 0, filter: t => t.type === 'Identifier' });
sourceCode.getTokenBefore(AST, { includeComments: true });
sourceCode.getTokenBefore(AST, { includeComments: true, skip: 0 });
sourceCode.getTokenBefore(AST, { includeComments: true, skip: 0, filter: t => t.type === 'Identifier' });
sourceCode.getTokenBefore(TOKEN, 0);
sourceCode.getTokenBefore(COMMENT, 0);

sourceCode.getTokensBefore(AST, 0);
sourceCode.getTokensBefore(AST, { count: 0 });
sourceCode.getTokensBefore(AST, t => t.type === 'Identifier');
sourceCode.getTokensBefore(AST, { filter: t => t.type === 'Identifier' });
sourceCode.getTokensBefore(AST, { count: 0, filter: t => t.type === 'Identifier' });
sourceCode.getTokensBefore(AST, { includeComments: true });
sourceCode.getTokensBefore(AST, { includeComments: true, count: 0 });
sourceCode.getTokensBefore(AST, { includeComments: true, count: 0, filter: t => t.type === 'Identifier' });
sourceCode.getTokensBefore(TOKEN, 0);
sourceCode.getTokensBefore(COMMENT, 0);

sourceCode.getTokenAfter(AST, 0);
sourceCode.getTokenAfter(AST, { skip: 0 });
sourceCode.getTokenAfter(AST, t => t.type === 'Identifier');
sourceCode.getTokenAfter(AST, { filter: t => t.type === 'Identifier' });
sourceCode.getTokenAfter(AST, { skip: 0, filter: t => t.type === 'Identifier' });
sourceCode.getTokenAfter(AST, { includeComments: true });
sourceCode.getTokenAfter(AST, { includeComments: true, skip: 0 });
sourceCode.getTokenAfter(AST, { includeComments: true, skip: 0, filter: t => t.type === 'Identifier' });
sourceCode.getTokenAfter(TOKEN, 0);
sourceCode.getTokenAfter(COMMENT, 0);

sourceCode.getTokensAfter(AST, 0);
sourceCode.getTokensAfter(AST, { count: 0 });
sourceCode.getTokensAfter(AST, t => t.type === 'Identifier');
sourceCode.getTokensAfter(AST, { filter: t => t.type === 'Identifier' });
sourceCode.getTokensAfter(AST, { count: 0, filter: t => t.type === 'Identifier' });
sourceCode.getTokensAfter(AST, { includeComments: true });
sourceCode.getTokensAfter(AST, { includeComments: true, count: 0 });
sourceCode.getTokensAfter(AST, { includeComments: true, count: 0, filter: t => t.type === 'Identifier' });
sourceCode.getTokensAfter(TOKEN, 0);
sourceCode.getTokensAfter(COMMENT, 0);

sourceCode.getFirstTokenBetween(AST, AST, 0);
sourceCode.getFirstTokenBetween(AST, AST, { skip: 0 });
sourceCode.getFirstTokenBetween(AST, AST, t => t.type === 'Identifier');
sourceCode.getFirstTokenBetween(AST, AST, { filter: t => t.type === 'Identifier' });
sourceCode.getFirstTokenBetween(AST, AST, { skip: 0, filter: t => t.type === 'Identifier' });
sourceCode.getFirstTokenBetween(AST, AST, { includeComments: true });
sourceCode.getFirstTokenBetween(AST, AST, { includeComments: true, skip: 0 });
sourceCode.getFirstTokenBetween(AST, AST, { includeComments: true, skip: 0, filter: t => t.type === 'Identifier' });

sourceCode.getFirstTokensBetween(AST, AST, 0);
sourceCode.getFirstTokensBetween(AST, AST, { count: 0 });
sourceCode.getFirstTokensBetween(AST, AST, t => t.type === 'Identifier');
sourceCode.getFirstTokensBetween(AST, AST, { filter: t => t.type === 'Identifier' });
sourceCode.getFirstTokensBetween(AST, AST, { count: 0, filter: t => t.type === 'Identifier' });
sourceCode.getFirstTokensBetween(AST, AST, { includeComments: true });
sourceCode.getFirstTokensBetween(AST, AST, { includeComments: true, count: 0 });
sourceCode.getFirstTokensBetween(AST, AST, { includeComments: true, count: 0, filter: t => t.type === 'Identifier' });

sourceCode.getLastTokenBetween(AST, AST, 0);
sourceCode.getLastTokenBetween(AST, AST, { skip: 0 });
sourceCode.getLastTokenBetween(AST, AST, t => t.type === 'Identifier');
sourceCode.getLastTokenBetween(AST, AST, { filter: t => t.type === 'Identifier' });
sourceCode.getLastTokenBetween(AST, AST, { skip: 0, filter: t => t.type === 'Identifier' });
sourceCode.getLastTokenBetween(AST, AST, { includeComments: true });
sourceCode.getLastTokenBetween(AST, AST, { includeComments: true, skip: 0 });
sourceCode.getLastTokenBetween(AST, AST, { includeComments: true, skip: 0, filter: t => t.type === 'Identifier' });

sourceCode.getLastTokensBetween(AST, AST, 0);
sourceCode.getLastTokensBetween(AST, AST, { count: 0 });
sourceCode.getLastTokensBetween(AST, AST, t => t.type === 'Identifier');
sourceCode.getLastTokensBetween(AST, AST, { filter: t => t.type === 'Identifier' });
sourceCode.getLastTokensBetween(AST, AST, { count: 0, filter: t => t.type === 'Identifier' });
sourceCode.getLastTokensBetween(AST, AST, { includeComments: true });
sourceCode.getLastTokensBetween(AST, AST, { includeComments: true, count: 0 });
sourceCode.getLastTokensBetween(AST, AST, { includeComments: true, count: 0, filter: t => t.type === 'Identifier' });

sourceCode.getTokensBetween(AST, AST, 0);

sourceCode.getTokens(AST);
sourceCode.getTokens(AST, 0);
sourceCode.getTokens(AST, 0, 0);
sourceCode.getTokens(AST, t => t.type === 'Identifier');
sourceCode.getTokens(AST, { filter: t => t.type === 'Identifier' });
sourceCode.getTokens(AST, { includeComments: true });
sourceCode.getTokens(AST, { includeComments: true, filter: t => t.type === 'Identifier' });

// TODO: Is it token or Node ?
sourceCode.commentsExistBetween(AST, AST);

sourceCode.getCommentsBefore(AST);
sourceCode.getCommentsBefore(TOKEN);

sourceCode.getCommentsAfter(AST);
sourceCode.getCommentsAfter(TOKEN);

// TODO: Should it support also token?
sourceCode.getCommentsInside(AST);

//#endregion

//#region Linter

const linter = new Linter();

linter.verify(SOURCE, {
    rules: {
        eqeqeq: 'off',
        'no-console': 'error',
        quotes: ['error', 'double']
    },
}, {
    filename: 'test.js',
});

linter.verifyAndFix(SOURCE, {
    rules: {
        'no-console': 'error',
    }
}, {
    filename: 'test.js',
});

linter.defineRule('my-fancy-rule', {
    create() {},
});

linter.defineRules({
    'my-fancy-rule': { create() {} },
    'my-fancy-other-rule': { create() {} }
});

linter.getRules();

linter.getSourceCode();

//#endregion

//#region CLIEngine

const cli = new CLIEngine({
    envs: ['browser', 'mocha'],
    useEslintrc: false,
    rules: {
        semi: 2
    }
});

cli.executeOnFiles(['myfile.js', 'lib/']);

const report = cli.executeOnText(SOURCE, 'foo');

cli.resolveFileGlobPatterns(['**/*']);

cli.getConfigForFile('./config.json');

cli.addPlugin('my-fancy-plugin', {});

cli.isPathIgnored('./dist/index.js');

const formatter = cli.getFormatter('codeframe');
formatter(report.results);

CLIEngine.getErrorResults(report.results);

CLIEngine.outputFixes(report);

//#endregion

//#region RuleTester

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run("my-rule", {
    create() {},
}, {
    valid: [
        {
            code: "var foo = true",
            options: [{ allowFoo: true }]
        }
    ],

    invalid: [
        {
            code: "var invalidVariable = true",
            errors: [{ message: "Unexpected invalid variable." }]
        },
        {
            code: "var invalidVariable = true",
            errors: [{ message: /^Unexpected.+variable/ }]
        }
    ]
});

//#endregion
