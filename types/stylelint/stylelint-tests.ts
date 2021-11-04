import {
    createPlugin,
    FormatterType,
    lint,
    LinterOptions,
    LinterResult,
    LintResult,
    Plugin,
    SyntaxType,
    utils,
    Warning,
} from 'stylelint';

const options: Partial<LinterOptions> = {
    allowEmptyInput: true,
    code: 'div { color: red }',
    files: ['**/**.scss'],
    formatter: 'json',
    globbyOptions: {
        cwd: './',
    },
    cache: true,
    cacheLocation: './stylelint.cache.json',
    ignoreDisables: true,
    reportDescriptionlessDisables: true,
    reportInvalidScopeDisables: true,
    reportNeedlessDisables: true,
    ignorePath: 'foo',
    syntax: 'scss',
};

lint(options).then((x: LinterResult) => {
    const err: boolean = x.errored;
    const output: string = x.output;
    const results: LintResult[] = x.results;
    if (results.length > 0) {
        const warnings: Warning[] = results[0].warnings;
    }
});

const formatter: FormatterType = 'json';

const syntax: SyntaxType = 'scss';

const ruleName = 'sample-rule';
const messages = utils.ruleMessages(ruleName, {
    violation: 'This a rule violation message',
    warning: (reason: string) => `This is not allowed because ${reason}`,
});

const testPlugin: Plugin = options => {
    return (root, result) => {
        const validOptions = utils.validateOptions(result, ruleName, { actual: options });
        if (!validOptions) {
            return;
        }

        utils.checkAgainstRule(
            {
                ruleName: 'at-rule-empty-line-before',
                ruleSettings: ['always'],
                root,
            },
            warning => {
                utils.report({
                    ruleName,
                    result,
                    message: messages.warning(warning),
                    node: root,
                    index: 1,
                    word: 'foo',
                    line: 2,
                });
            },
        );
    };
};

createPlugin(ruleName, testPlugin);
