import { Comment } from 'estree';
import { AST, SourceCode, Rule, Linter, CLIEngine, RuleTester, Scope } from 'eslint';

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

let sourceCode = new SourceCode(SOURCE, AST);

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

//#region Scope

const scopeManager: Scope.ScopeManager = {
    scopes: [],
    globalScope: null,
    acquire(node, inner) {
        return this.scopes[0];
    },
    getDeclaredVariables() {
        return [];
    }
};

const scope = scopeManager.scopes[0];

const variable = scope.variables[0];

variable.name = 'foo';

variable.identifiers[0].type = 'Identifier';

variable.defs[0].name.type = 'Identifier';
variable.defs[0].type;
variable.defs[0].node;
variable.defs[0].parent;

const reference = scope.references[0];

reference.from = scope;
reference.identifier.type = 'Identifier';
reference.resolved = variable;
reference.writeExpr = AST;
reference.init = true;

reference.isRead();
reference.isReadOnly();
reference.isWrite();
reference.isWriteOnly();
reference.isReadWrite();

//#endregion

//#region Rule

let rule: Rule.RuleModule;

rule = { create(context) { return {}; } };
rule = { create(context) { return {}; }, meta: {} };
rule = { create(context) { return {}; }, meta: {
    docs: {
        description: 'disallow the use of `console`',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-console',
    }
}};
rule = { create(context) { return {}; }, meta: { fixable: 'whitespace' }};
rule = { create(context) { return {}; }, meta: { fixable: 'code' }};
rule = { create(context) { return {}; }, meta: { schema: [{ enum: ['always', 'never'] }] }};
rule = { create(context) { return {}; }, meta: { deprecated: true }};

rule = {
    create(context) {
        context.getAncestors();

        context.getDeclaredVariables(AST);

        context.getFilename();

        context.getSourceCode();

        // TODO: Add test for scope
        context.getScope();

        context.markVariableAsUsed('foo');

        context.report({ message: 'foo', node: AST });
        context.report({ message: 'foo', loc: { line: 0, column: 0 } });
        context.report({ message: 'foo', node: AST, data: { foo: 'bar' } });
        context.report({ message: 'foo', node: AST, fix: () => null });
        context.report({ message: 'foo', node: AST, fix: ruleFixer => ruleFixer.replaceText(AST, 'foo') });

        context.report({
            message: 'foo',
            node: AST,
            fix: ruleFixer => {
                ruleFixer.insertTextAfter(AST, 'foo');
                ruleFixer.insertTextAfter(TOKEN, 'foo');

                ruleFixer.insertTextAfterRange([0, 0], 'foo');

                ruleFixer.insertTextBefore(AST, 'foo');
                ruleFixer.insertTextBefore(TOKEN, 'foo');

                ruleFixer.insertTextBeforeRange([0, 0], 'foo');

                ruleFixer.remove(AST);
                ruleFixer.remove(TOKEN);

                ruleFixer.removeRange([0, 0]);

                ruleFixer.replaceText(AST, 'foo');
                ruleFixer.replaceText(TOKEN, 'foo');

                ruleFixer.replaceTextRange([0, 0], 'foo');

                return null;
            }
        });

        return {
            onCodePathStart(codePath, node) {},
            onCodePathEnd(codePath, node) {},
            onCodePathSegmentStart(segment, node) {},
            onCodePathSegmentEnd(segment, node) {},
            onCodePathSegmentLoop(fromSegment, toSegment, node) {},
            'Program:exit'() {},
        };
    },
};

//#endregion

//#region Linter

const linter = new Linter();

linter.version;

linter.verify(SOURCE, {});
linter.verify(new SourceCode(SOURCE, AST), {});

linter.verify(SOURCE, {}, 'test.js');
linter.verify(SOURCE, {}, {});
linter.verify(SOURCE, {}, { filename: 'test.js' });
linter.verify(SOURCE, {}, { allowInlineConfig: false });
linter.verify(SOURCE, {}, { reportUnusedDisableDirectives: true });
linter.verify(SOURCE, {}, { preprocess: input => input.split(' ') });
linter.verify(SOURCE, {}, { postprocess: problemList => problemList[0] });

linter.verify(SOURCE, { parserOptions: { ecmaVersion: 6 } }, 'test.js');
linter.verify(SOURCE, { parserOptions: { ecmaVersion: 6, ecmaFeatures: { globalReturn: true } } }, 'test.js');
linter.verify(SOURCE, { parserOptions: { ecmaVersion: 6, ecmaFeatures: { experimentalObjectRestSpread: true } } }, 'test.js');
linter.verify(SOURCE, { env: { node: true } }, 'test.js');
linter.verify(SOURCE, { globals: { foo: true } }, 'test.js');
linter.verify(SOURCE, { parser: 'custom-parser' }, 'test.js');
linter.verify(SOURCE, { settings: { info: 'foo' } }, 'test.js');

linter.verify(SOURCE, { rules: {} }, 'test.js');
linter.verify(SOURCE, { rules: { quotes: 2 } }, 'test.js');
linter.verify(SOURCE, { rules: { quotes: [2, 'double'] } }, 'test.js');
linter.verify(SOURCE, { rules: { 'no-unused-vars': [2, { vars: "all" }] } }, 'test.js');
linter.verify(SOURCE, { rules: { 'no-console': 1 } }, 'test.js');
linter.verify(SOURCE, { rules: { 'no-console': 0 } }, 'test.js');
linter.verify(SOURCE, { rules: { 'no-console': 'error' } }, 'test.js');
linter.verify(SOURCE, { rules: { 'no-console': 'warn' } }, 'test.js');
linter.verify(SOURCE, { rules: { 'no-console': 'off' } }, 'test.js');

const lintingResult = linter.verify(SOURCE, {});

for (const msg of lintingResult) {
    msg.severity = 1;
    msg.severity = 2;

    msg.ruleId = 'foo';

    msg.fatal = true;

    msg.line = 0;
    msg.endLine = 0;
    msg.column = 0;
    msg.endColumn = 0;

    msg.source = SOURCE;

    if (msg.fix) {
        msg.fix.text = 'foo';
        msg.fix.range = [0, 0];
    }
}

linter.verifyAndFix(SOURCE, {});
linter.verifyAndFix(SOURCE, {}, 'test.js');
linter.verifyAndFix(SOURCE, {}, { fix: false });

const fixResult = linter.verifyAndFix(SOURCE, {});

fixResult.fixed = true;
fixResult.output = 'foo';

for (const msg of fixResult.messages) {
    msg.ruleId = 'foo';
}

sourceCode = linter.getSourceCode();

linter.defineRule('test', rule);

linter.defineRules({
    foo: rule,
    bar: rule,
});

linter.getRules();

linter.defineParser('custom-parser', { parse: (src, opts) => AST });
linter.defineParser('custom-parser', {
    parseForESLint(src, opts) {
        return {
            ast: AST,
            visitorKeys: {},
            parserServices: {},
            scopeManager,
        };
    }
});

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

ruleTester.run("my-rule", rule, {
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
