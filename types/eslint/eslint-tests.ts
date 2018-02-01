import { SourceCode, Linter, CLIEngine, RuleTester, Ast } from 'eslint';

// =============================================
//                 SourceCode
// =============================================

const SOURCE = `var foo = bar;`;

const ast: Ast = { comments: [], tokens: [], loc: { start: { line: 0, column: 0 }, end: { line: 0, column: 10 } }, range: [0, 17] };
const sourceCode = new SourceCode(SOURCE, ast);

const text: string = sourceCode.getText();

const lines: string[] = sourceCode.getLines();

SourceCode.splitLines(SOURCE);

class Foo {
    foo = 1;
}

// =============================================
//                   Linter
// =============================================

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

// =============================================
//                   CLI
// =============================================

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

// =============================================
//                RuleTester
// =============================================

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
