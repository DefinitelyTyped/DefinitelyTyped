import { LinterOptions, FormatterType, SyntaxType, lint, LintResult, LinterResult, createPlugin, utils } from "stylelint";

const options: LinterOptions = {
    code: "div { color: red }",
    files: ["**/**.scss"],
    formatter: "json",
    cache: true,
    cacheLocation: "./stylelint.cache.json",
    ignoreDisables: true,
    reportNeedlessDisables: true,
    ignorePath: true,
    syntax: "scss"
};

lint(options).then((x: LinterResult) => {
    const err: boolean = x.errored;
    const output: string = x.output;
    const postcssResults: any[] = x.postcssResults;
    const results: LintResult[] = x.results;
});

const formatter: FormatterType = "json";

const syntax: SyntaxType = "scss";

const ruleName = "sample-rule";
const messages = utils.ruleMessages(ruleName, {
    violation: "This a rule violation message",
    warning: (reason: string) => `This is not allowed because ${reason}`,
});

createPlugin(ruleName, options => {
    return (root, result) => {
        const validOptions = utils.validateOptions(result, ruleName, { actual: options });
        if (!validOptions) {
            return;
        }

        utils.checkAgainstRule({
            ruleName: "at-rule-empty-line-before",
            ruleSettings: ["always"],
            root,
        }, warning => {
            utils.report({
                ruleName,
                result,
                message: messages.warning(warning),
                node: root,
                index: 1,
                word: "foo",
                line: 2,
            });
        });
    };
});
