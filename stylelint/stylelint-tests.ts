import { Options, lint, LintResult, PromiseResult } from "stylelint";

const options: Options = {
    code: "div { color: red }",
    files: ["**/**.scss"],
    formatter: "json",
    ignoreDisables: true,
    reportNeedlessDisables: true,
    ignorePath: true,
    syntax: "scss"
};

lint(options).then((x: PromiseResult) => {
    const err: boolean = x.errored;
    const output: string = x.output;
    const postcssResults: any[] = x.postcssResults;
    const results: LintResult[] = x.results;
});
