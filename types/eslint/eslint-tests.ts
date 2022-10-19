import { Comment, WhileStatement } from 'estree';
import { AST, SourceCode, Rule, Linter, ESLint, RuleTester, Scope } from 'eslint';
import { ESLintRules } from 'eslint/rules';

const SOURCE = `var foo = bar;`;

const AST: AST.Program = {
    type: 'Program',
    sourceType: 'module',
    body: [],
    comments: [],
    tokens: [],
    loc: {
        start: { line: 0, column: 0 },
        end: { line: 0, column: 0 },
    },
    range: [0, 0],
};

const TOKEN: AST.Token = {
    type: 'Identifier',
    value: 'foo',
    loc: {
        start: { line: 0, column: 0 },
        end: { line: 0, column: 3 },
    },
    range: [0, 3],
};

const COMMENT: Comment = {
    type: 'Block',
    value: 'foo',
    loc: {
        start: { line: 0, column: 0 },
        end: { line: 0, column: 0 },
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

sourceCode.getJSDocComment(AST); // $ExpectType Comment | null

sourceCode.getNodeByRangeIndex(0);

sourceCode.getNodeByRangeIndex(0);

sourceCode.isSpaceBetweenTokens(TOKEN, TOKEN);

const loc = sourceCode.getLocFromIndex(0);
loc.line; // $ExpectType number
loc.column; // $ExpectType number

sourceCode.getIndexFromLoc({ line: 0, column: 0 });

sourceCode.getTokenByRangeStart(0); // $ExpectType Token | null
sourceCode.getTokenByRangeStart(0, { includeComments: true }); // $ExpectType Comment | Token | null
sourceCode.getTokenByRangeStart(0, { includeComments: false }); // $ExpectType Token | null
sourceCode.getTokenByRangeStart(0, { includeComments: false as boolean }); // $ExpectType Comment | Token | null

sourceCode.getFirstToken(AST); // $ExpectType Token | null
sourceCode.getFirstToken(AST, 0);
sourceCode.getFirstToken(AST, { skip: 0 });
sourceCode.getFirstToken(AST, (t): t is AST.Token & { type: 'Identifier' } => t.type === 'Identifier'); // $ExpectType (Token & { type: "Identifier"; }) | null
sourceCode.getFirstToken(AST, { filter: (t): t is AST.Token & { type: 'Identifier' } => t.type === 'Identifier' }); // $ExpectType (Token & { type: "Identifier"; }) | null
sourceCode.getFirstToken(AST, { skip: 0, filter: t => t.type === 'Identifier' });
sourceCode.getFirstToken(AST, { includeComments: true }); // $ExpectType Comment | Token | null
sourceCode.getFirstToken(AST, { includeComments: true, skip: 0 });
// prettier-ignore
sourceCode.getFirstToken(AST, { // $ExpectType (Token & { type: "Identifier"; }) | null
    includeComments: true,
    skip: 0,
    filter: (t): t is AST.Token & { type: "Identifier" } => t.type === "Identifier",
});

sourceCode.getFirstTokens(AST); // $ExpectType Token[]
sourceCode.getFirstTokens(AST, 0); // $ExpectType Token[]
sourceCode.getFirstTokens(AST, { count: 0 });
sourceCode.getFirstTokens(AST, (t): t is AST.Token & { type: 'Identifier' } => t.type === 'Identifier'); // $ExpectType (Token & { type: "Identifier"; })[]
sourceCode.getFirstTokens(AST, { filter: (t): t is AST.Token & { type: 'Identifier' } => t.type === 'Identifier' }); // $ExpectType (Token & { type: "Identifier"; })[]
// prettier-ignore
sourceCode.getFirstTokens(AST, { // $ExpectType (Token & { type: "Identifier"; })[]
    count: 0,
    filter: (t): t is AST.Token & { type: "Identifier" } => t.type === "Identifier",
});
sourceCode.getFirstTokens(AST, { includeComments: true }); //  $ ExpectType (Comment | Token)[]
sourceCode.getFirstTokens(AST, { includeComments: true, count: 0 }); //  $ ExpectType (Comment | Token)[]
// prettier-ignore
sourceCode.getFirstTokens(AST, {// $ExpectType (Token & { type: "Identifier"; })[]
    includeComments: true,
    count: 0,
    filter: (t): t is AST.Token & { type: "Identifier" } => t.type === "Identifier",
});

sourceCode.getLastToken(AST);
sourceCode.getLastToken(AST, 0);
sourceCode.getLastToken(AST, { skip: 0 });
sourceCode.getLastToken(AST, t => t.type === 'Identifier');
sourceCode.getLastToken(AST, { filter: t => t.type === 'Identifier' });
sourceCode.getLastToken(AST, { skip: 0, filter: t => t.type === 'Identifier' });
sourceCode.getLastToken(AST, { includeComments: true });
sourceCode.getLastToken(AST, { includeComments: true, skip: 0 });
sourceCode.getLastToken(AST, { includeComments: true, skip: 0, filter: t => t.type === 'Identifier' });

sourceCode.getLastTokens(AST);
sourceCode.getLastTokens(AST, 0);
sourceCode.getLastTokens(AST, { count: 0 });
sourceCode.getLastTokens(AST, t => t.type === 'Identifier');
sourceCode.getLastTokens(AST, { filter: t => t.type === 'Identifier' });
sourceCode.getLastTokens(AST, { count: 0, filter: t => t.type === 'Identifier' });
sourceCode.getLastTokens(AST, { includeComments: true });
sourceCode.getLastTokens(AST, { includeComments: true, count: 0 });
sourceCode.getLastTokens(AST, { includeComments: true, count: 0, filter: t => t.type === 'Identifier' });

sourceCode.getTokenBefore(AST);
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

sourceCode.getTokensBefore(AST);
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

sourceCode.getTokenAfter(AST);
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

sourceCode.getTokensAfter(AST);
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

sourceCode.getFirstTokenBetween(AST, AST); // $ExpectType Token | null
sourceCode.getFirstTokenBetween(AST, AST, 0);
sourceCode.getFirstTokenBetween(AST, AST, { skip: 0 });
sourceCode.getFirstTokenBetween(AST, AST, (t): t is AST.Token & { type: 'Identifier' } => t.type === 'Identifier'); // $ExpectType (Token & { type: "Identifier"; }) | null
// prettier-ignore
sourceCode.getFirstTokenBetween(AST, AST, { // $ExpectType (Token & { type: "Identifier"; }) | null
    filter: (t): t is AST.Token & { type: "Identifier" } => t.type === "Identifier",
});
sourceCode.getFirstTokenBetween(AST, AST, {
    skip: 0,
    filter: (t): t is AST.Token & { type: 'Identifier' } => t.type === 'Identifier',
});
sourceCode.getFirstTokenBetween(AST, AST, { includeComments: true }); // $ExpectType Comment | Token | null
sourceCode.getFirstTokenBetween(AST, AST, { includeComments: true, skip: 0 });
// prettier-ignore
sourceCode.getFirstTokenBetween(AST, AST, { // $ExpectType (Token & { type: "Identifier"; }) | null
    includeComments: true,
    skip: 0,
    filter: (t): t is AST.Token & { type: "Identifier" } => t.type === "Identifier",
});

sourceCode.getFirstTokensBetween(AST, AST); // $ExpectType Token[]
sourceCode.getFirstTokensBetween(AST, AST, 0);
sourceCode.getFirstTokensBetween(AST, AST, { count: 0 });
sourceCode.getFirstTokensBetween(AST, AST, (t): t is AST.Token & { type: 'Identifier' } => t.type === 'Identifier'); // $ExpectType (Token & { type: "Identifier"; })[]
// prettier-ignore
sourceCode.getFirstTokensBetween(AST, AST, { // $ExpectType (Token & { type: "Identifier"; })[]
    filter: (t): t is AST.Token & { type: "Identifier" } => t.type === "Identifier",
});
sourceCode.getFirstTokensBetween(AST, AST, { count: 0, filter: t => t.type === 'Identifier' });
sourceCode.getFirstTokensBetween(AST, AST, { includeComments: true }); // $ExpectType (Comment | Token)[]
sourceCode.getFirstTokensBetween(AST, AST, { includeComments: true, count: 0 });
// prettier-ignore
sourceCode.getFirstTokensBetween(AST, AST, { // $ExpectType (Token & { type: "Identifier"; })[]
    includeComments: true,
    count: 0,
    filter: (t): t is AST.Token & { type: "Identifier" } => t.type === "Identifier",
});

sourceCode.getLastTokenBetween(AST, AST);
sourceCode.getLastTokenBetween(AST, AST, 0);
sourceCode.getLastTokenBetween(AST, AST, { skip: 0 });
sourceCode.getLastTokenBetween(AST, AST, t => t.type === 'Identifier');
sourceCode.getLastTokenBetween(AST, AST, { filter: t => t.type === 'Identifier' });
sourceCode.getLastTokenBetween(AST, AST, { skip: 0, filter: t => t.type === 'Identifier' });
sourceCode.getLastTokenBetween(AST, AST, { includeComments: true });
sourceCode.getLastTokenBetween(AST, AST, { includeComments: true, skip: 0 });
sourceCode.getLastTokenBetween(AST, AST, { includeComments: true, skip: 0, filter: t => t.type === 'Identifier' });

sourceCode.getLastTokensBetween(AST, AST);
sourceCode.getLastTokensBetween(AST, AST, 0);
sourceCode.getLastTokensBetween(AST, AST, { count: 0 });
sourceCode.getLastTokensBetween(AST, AST, t => t.type === 'Identifier');
sourceCode.getLastTokensBetween(AST, AST, { filter: t => t.type === 'Identifier' });
sourceCode.getLastTokensBetween(AST, AST, { count: 0, filter: t => t.type === 'Identifier' });
sourceCode.getLastTokensBetween(AST, AST, { includeComments: true });
sourceCode.getLastTokensBetween(AST, AST, { includeComments: true, count: 0 });
sourceCode.getLastTokensBetween(AST, AST, { includeComments: true, count: 0, filter: t => t.type === 'Identifier' });

sourceCode.getTokensBetween(AST, AST);
sourceCode.getTokensBetween(AST, AST, 0);

sourceCode.getTokens(AST); // $ExpectType Token[]
sourceCode.getTokens(AST, 0);
sourceCode.getTokens(AST, 0, 0);
sourceCode.getTokens(AST, (t): t is AST.Token & { type: 'Identifier' } => t.type === 'Identifier'); // $ExpectType (Token & { type: "Identifier"; })[]
sourceCode.getTokens(AST, { filter: (t): t is AST.Token & { type: 'Identifier' } => t.type === 'Identifier' }); // $ExpectType (Token & { type: "Identifier"; })[]
sourceCode.getTokens(AST, { includeComments: true }); // $ExpectType (Comment | Token)[]
// prettier-ignore
sourceCode.getTokens(AST, { // $ExpectType (Token & { type: "Identifier"; })[]
    includeComments: true,
    filter: (t): t is AST.Token & { type: "Identifier" } => t.type === "Identifier",
});

sourceCode.commentsExistBetween(AST, AST);
sourceCode.commentsExistBetween(TOKEN, TOKEN);
sourceCode.commentsExistBetween(COMMENT, COMMENT);

sourceCode.getCommentsBefore(AST);
sourceCode.getCommentsBefore(TOKEN);

sourceCode.getCommentsAfter(AST);
sourceCode.getCommentsAfter(TOKEN);

sourceCode.getCommentsInside(AST);

//#endregion

//#region Scope

const scopeManager: Scope.ScopeManager = {
    scopes: [],
    globalScope: null,
    acquire(node, inner) {
        return scopeManager.scopes[0];
    },
    getDeclaredVariables() {
        return [];
    },
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

rule = {
    create(context) {
        return {};
    },
};
rule = {
    create(context) {
        return {};
    },
    meta: {},
};
rule = {
    create(context) {
        return {};
    },
    meta: {
        docs: {
            description: 'disallow the use of `console`',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-console',
            suggestion: true,
        },
    },
};
rule = {
    create(context) {
        return {};
    },
    meta: { fixable: 'whitespace' },
};
rule = {
    create(context) {
        return {};
    },
    meta: { fixable: 'code' },
};
rule = {
    create(context) {
        return {};
    },
    meta: { schema: [{ enum: ['always', 'never'] }] },
};
rule = {
    create(context) {
        return {};
    },
    meta: { deprecated: true },
};
rule = {
    create(context) {
        return {};
    },
    meta: { type: 'layout' },
};
rule = {
    create(context) {
        return {};
    },
    meta: {
        docs: {
            description: 'disallow the use of `console`',
            category: 'Possible Errors',
            recommended: true,
            url: 'https://eslint.org/docs/rules/no-console',
        },
        hasSuggestions: true,
    },
};

rule = {
    create(context) {
        context.getAncestors();

        context.getDeclaredVariables(AST);

        context.getFilename();

        context.getPhysicalFilename();

        context.getCwd();

        context.getSourceCode();

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
            },
        });

        context.report({
            message: 'foo',
            node: AST,
            fix: ruleFixer => {
                return [ruleFixer.insertTextAfter(AST, 'foo'), ruleFixer.insertTextAfter(TOKEN, 'foo')];
            },
        });

        context.report({
            message: 'foo',
            node: AST,
            suggest: [
                {
                    desc: 'foo',
                    fix: ruleFixer => {
                        return [ruleFixer.insertTextAfter(AST, 'foo'), ruleFixer.insertTextAfter(TOKEN, 'foo')];
                    },
                },
                {
                    messageId: 'foo',
                    fix: ruleFixer => {
                        return [ruleFixer.insertTextAfter(AST, 'foo'), ruleFixer.insertTextAfter(TOKEN, 'foo')];
                    },
                },
                {
                    desc: 'foo',
                    fix: ruleFixer => null,
                },
            ],
        });

        return {
            onCodePathStart(codePath, node) {},
            onCodePathEnd(codePath, node) {},
            onCodePathSegmentStart(segment, node) {},
            onCodePathSegmentEnd(segment, node) {},
            onCodePathSegmentLoop(fromSegment, toSegment, node) {},
            IfStatement(node) {
                node.parent;
            },
            WhileStatement(node: WhileStatement) {},
            Program(node) {
                // @ts-expect-error
                node.parent;
            },
            'Program:exit'() {},
            'MemberExpression[object.name="req"]': (node: Rule.Node) => {
                node.parent;
            },
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

linter.verify(SOURCE, { parserOptions: { ecmaVersion: 2021 } }, 'test.js');
linter.verify(SOURCE, { parserOptions: { ecmaVersion: 2022 } }, 'test.js');
linter.verify(SOURCE, { parserOptions: { ecmaVersion: 'latest' } }, 'test.js');
linter.verify(SOURCE, { parserOptions: { ecmaVersion: 6, ecmaFeatures: { globalReturn: true } } }, 'test.js');
linter.verify(
    SOURCE,
    { parserOptions: { ecmaVersion: 6, ecmaFeatures: { experimentalObjectRestSpread: true } } },
    'test.js',
);
linter.verify(SOURCE, { env: { node: true } }, 'test.js');
linter.verify(SOURCE, { globals: { foo: true } }, 'test.js');
linter.verify(SOURCE, { globals: { foo: 'readonly' } }, 'test.js');
linter.verify(SOURCE, { globals: { foo: 'readable' } }, 'test.js');
linter.verify(SOURCE, { globals: { foo: 'writable' } }, 'test.js');
linter.verify(SOURCE, { globals: { foo: 'writeable' } }, 'test.js');
linter.verify(SOURCE, { parser: 'custom-parser' }, 'test.js');
linter.verify(SOURCE, { settings: { info: 'foo' } }, 'test.js');
linter.verify(SOURCE, { processor: 'a-plugin/a-processor' }, 'test.js');
linter.verify(SOURCE, { plugins: ['a-plugin'] }, 'test.js');
linter.verify(SOURCE, { root: true }, 'test.js');
linter.verify(SOURCE, { extends: 'eslint-config-bad-guy' }, 'test.js');
linter.verify(SOURCE, { extends: ['eslint-config-bad-guy', 'eslint-config-roblox'] }, 'test.js');

linter.verify(SOURCE, { rules: {} }, 'test.js');
linter.verify(SOURCE, { rules: { quotes: 2 } }, 'test.js');
linter.verify(SOURCE, { rules: { quotes: [2, 'double'] } }, 'test.js');
linter.verify(SOURCE, { rules: { 'no-unused-vars': [2, { vars: 'all' }] } }, 'test.js');
linter.verify(SOURCE, { rules: { 'no-console': 1 } }, 'test.js');
linter.verify(SOURCE, { rules: { 'no-console': 0 } }, 'test.js');
linter.verify(SOURCE, { rules: { 'no-console': 'error' } }, 'test.js');
linter.verify(
    SOURCE,
    {
        rules: { 'no-console': 'error' },
        overrides: [
            {
                extends: ['eslint-config-bad-guy'],
                excludedFiles: ['*-test.js', '*.spec.js'],
                files: ['*-test.js', '*.spec.js'],
                rules: {
                    'no-unused-expressions': 'off',
                },
            },
        ],
    },
    'test.js',
);
linter.verify(SOURCE, { rules: { 'no-console': 'warn' } }, 'test.js');
linter.verify(SOURCE, { rules: { 'no-console': 'off' } }, 'test.js');

const lintingResult = linter.verify(SOURCE, {});

for (const msg of lintingResult) {
    msg.severity = 1;
    msg.severity = 2;

    msg.ruleId = 'foo';

    msg.fatal = true;

    msg.message = 'foo';
    msg.messageId = 'foo';

    msg.line = 0;
    msg.endLine = 0;
    msg.column = 0;
    msg.endColumn = 0;

    msg.source = SOURCE;

    if (msg.fix) {
        msg.fix.text = 'foo';
        msg.fix.range = [0, 0];
    }

    if (msg.suggestions) {
        for (const suggestion of msg.suggestions) {
            suggestion.desc = 'foo';
            suggestion.messageId = 'foo';
            suggestion.fix.text = 'foo';
            suggestion.fix.range = [0, 0];
        }
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
    },
});

const _processor: Linter.Processor = {
    supportsAutofix: true,
    preprocess(text, filename) {
        return [
            text,
            {
                text: '',
                filename: '1.js',
            },
        ];
    },
    postprocess(messages, filename) {
        return ([] as Linter.LintMessage[]).concat(...messages);
    },
};

//#endregion

//#region ESLint

let eslint: ESLint;

eslint = new ESLint();
eslint = new ESLint({ allowInlineConfig: false });
eslint = new ESLint({ baseConfig: {} });
eslint = new ESLint({ overrideConfig: {} });
eslint = new ESLint({ overrideConfigFile: 'foo' });
eslint = new ESLint({ cache: true });
eslint = new ESLint({ cacheLocation: 'foo' });
eslint = new ESLint({ cacheStrategy: 'content' });
eslint = new ESLint({ cwd: 'foo' });
eslint = new ESLint({ errorOnUnmatchedPattern: true });
eslint = new ESLint({ extensions: ['js'] });
eslint = new ESLint({ fix: true });
eslint = new ESLint({ fix: message => false });
eslint = new ESLint({ fixTypes: ['problem'] });
eslint = new ESLint({ globInputPaths: true });
eslint = new ESLint({ ignore: true });
eslint = new ESLint({ ignorePath: 'foo' });
eslint = new ESLint({ useEslintrc: false });
eslint = new ESLint({ plugins: { foo: {} } });
eslint = new ESLint({
    plugins: {
        bar: {
            configs: {
                myConfig: {
                    noInlineConfig: true
                }
            },
            environments: {
                production: {
                    parserOptions: {
                        ecmaVersion: 6
                    }
                }
            },
            processors: {
                myProcessor: {
                    supportsAutofix: false
                }
            },
            rules: {
                myRule: {
                    create(context) { return {}; },
                    meta: {},
                }
            }
        }
    }
});
eslint = new ESLint({ reportUnusedDisableDirectives: "error" });
eslint = new ESLint({ resolvePluginsRelativeTo: "test" });
eslint = new ESLint({ rulePaths: ["foo"] });

let resultsPromise = eslint.lintFiles(['myfile.js', 'lib/']);

resultsPromise = eslint.lintText(SOURCE, { filePath: 'foo' });

eslint.calculateConfigForFile('./config.json');

eslint.isPathIgnored('./dist/index.js');

let formatterPromise: Promise<ESLint.Formatter>;

formatterPromise = eslint.loadFormatter('codeframe');
formatterPromise = eslint.loadFormatter();

const customFormatter1: ESLint.Formatter = { format: () => 'ok' };
const customFormatter2: ESLint.Formatter = { format: () => Promise.resolve('ok') };

let data: ESLint.LintResultData;
const meta: Rule.RuleMetaData = {
    type: 'suggestion',
    docs: {
        description: 'disallow unnecessary semicolons',
        category: 'Possible Errors',
        recommended: true,
        url: 'https://eslint.org/docs/rules/no-extra-semi',
    },
    fixable: 'code',
    schema: [],
    messages: {
        unexpected: 'Unnecessary semicolon.',
    },
};

data = { cwd: '/foo/bar', rulesMeta: { 'no-extra-semi': meta } };

const version: string = ESLint.version;

(async () => {
    const results = await resultsPromise;
    const formatter = await formatterPromise;

    const output1: string = await formatter.format(results);
    const output2: string = await formatter.format(results, data);

    eslint.getRulesMetaForResults(results);

    ESLint.getErrorResults(results);

    ESLint.outputFixes(results);

    results[0].errorCount = 0;
    results[0].warningCount = 0;
    results[0].fixableErrorCount = 0;
    results[0].fixableWarningCount = 0;

    for (const file of results) {
        file.filePath = 'foo.js';

        file.errorCount = 0;
        file.warningCount = 0;
        file.fixableErrorCount = 0;
        file.fixableWarningCount = 0;

        file.source = 'foo';
        file.output = 'foo';

        for (const message of file.messages) {
            message.ruleId = 'foo';
        }

        for (const suppressedMessage of file.suppressedMessages) {
            suppressedMessage.suppressions = [
                {
                    kind: 'foo',
                    justification: 'just cuz',
                },
            ];
        }
    }
})();

//#endregion

//#region ESLintRules

let eslintConfig: Linter.Config<ESLintRules>;

eslintConfig = {
    rules: {
        'capitalized-comments': [2, 'always', { ignorePattern: 'const|let' }],
    },
    overrides: [{
        files: '*.json',
        rules: {
            'max-len': 0,
        },
    },
    {
        files: '*.ts',
        rules: {
            '@typescript-eslint/no-invalid-void-type': [2, {allowAsThisParameter: true}],
        },
    }],
};

eslintConfig.rules; // $ExpectType Partial<ESLintRules> | undefined
eslintConfig.overrides?.[0].rules; // $ExpectType Partial<ESLintRules> | undefined

interface TSLinterRules {
    '@typescript-eslint/no-invalid-void-type'?: Linter.RuleEntry<[Partial<{
        allowInGenericTypeArguments: boolean | string[];
        allowAsThisParameter: boolean;
    }>]>;
}

const eslintConfig2: Linter.Config<ESLintRules, ESLintRules & TSLinterRules> = eslintConfig;

eslintConfig2.rules; // $ExpectType Partial<ESLintRules> | undefined
eslintConfig2.overrides?.[1].rules; // $ExpectType Partial<ESLintRules & TSLinterRules> | undefined

const eslintConfig3: Linter.Config<ESLintRules & TSLinterRules> = eslintConfig2;

eslintConfig3.rules; // $ExpectType Partial<ESLintRules & TSLinterRules> | undefined
eslintConfig3.overrides?.[1].rules; // $ExpectType Partial<ESLintRules & TSLinterRules> | undefined

//#endregion

//#region RuleTester

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('my-rule', rule, {
    valid: [
        { code: 'foo' },
        { code: 'foo', options: [{ allowFoo: true }] },
        { code: 'foo', filename: 'test.js' },
        { code: 'foo', parserOptions: {} },
        { code: 'foo', settings: { foo: true } },
        { code: 'foo', parser: 'foo' },
        { code: 'foo', globals: { foo: true } },
        RuleTester.only('foo'),
    ],

    invalid: [
        { code: 'foo', errors: 1 },
        { code: 'foo', errors: 1, output: 'foo' },
        { code: 'foo', errors: ['foo'] },
        { code: 'foo', errors: [{ message: 'foo' }] },
        { code: 'foo', errors: [{ message: 'foo', type: 'foo' }] },
        { code: 'foo', errors: [{ message: 'foo', data: { foo: true } }] },
        { code: 'foo', errors: [{ message: 'foo', line: 0 }] },
        {
            code: 'foo',
            errors: [
                {
                    message: 'foo',
                    suggestions: [
                        {
                            desc: 'foo',
                            output: 'foo',
                        },
                        {
                            messageId: 'foo',
                            output: 'foo',
                        },
                    ],
                },
            ],
        },
        { code: 'foo', errors: 1, only: true },
    ],
});

ruleTester.run('simple-valid-test', rule, {
    valid: ['foo', 'bar', { code: 'foo', options: [{ allowFoo: true }] }],
});

//#endregion
