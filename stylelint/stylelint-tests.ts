import { LinterOptions, lint, LintResult, LinterResult } from "stylelint";

const options: LinterOptions = {
    code: "div { color: red }",
    files: ["**/**.scss"],
    formatter: "json",
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
