// Type definitions for stylelint 9.4
// Project: https://github.com/stylelint/stylelint, https://stylelint.io
// Definitions by: Alan Agius <https://github.com/alan-agius4>
//                 Filips Alpe <https://github.com/filipsalpe>
//                 James Garbutt <https://github.com/43081j>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as postcss from 'postcss';

export type FormatterType = "json" | "string" | "verbose" | "compact" | "unix";

export type SyntaxType = "css-in-js"
    | "html"
    | "less"
    | "markdown"
    | "sass"
    | "scss"
    | "sugarss";

export interface Configuration {
    rules: Record<string, any>;
    extends: string | string[];
    plugins: string[];
    processors: string[];
    ignoreFiles: string|string[];
    defaultSeverity: "warning"|"error";
}

export interface LinterOptions {
    cache: boolean;
    cacheLocation: string;
    code: string;
    codeFilename: string;
    config: Partial<Configuration>;
    configBasedir: string;
    configFile: string;
    configOverrides: Partial<Configuration>;
    customSyntax: string;
    disableDefaultIgnores: boolean;
    files: string | string[];
    fix: boolean;
    formatter: FormatterType;
    ignoreDisables: boolean;
    ignorePath: string;
    maxWarnings: number;
    reportNeedlessDisables: boolean;
    syntax: SyntaxType;
}

export interface LinterResult {
    errored: boolean;
    output: string;
    results: LintResult[];
}

export interface LintResult {
    source: string;
    errored: boolean | undefined;
    ignored: boolean | undefined;
    warnings: string[];
    deprecations: string[];
    invalidOptionWarnings: any[];
}

export namespace formatters {
    function json(results: LintResult[]): string;
    function string(results: LintResult[]): string;
    function compact(results: LintResult[]): string;
    function verbose(results: LintResult[]): string;
    function unix(results: LintResult[]): string;
}

export function lint(options?: Partial<LinterOptions>): Promise<LinterResult>;

export type RuleOption = {
    actual: any;
    possible?: any;
    optional?: false;
} | {
    actual?: any;
    possible: any;
    optional: true;
};

export type RuleMessageValue = string | ((...args: any[]) => string);

export namespace utils {
    function report(violation: {
        ruleName: string;
        result: postcss.Result;
        message: string;
        node: postcss.Node;
        index?: number;
        word?: string;
        line?: number;
    }): void;

    function ruleMessages<T extends {[key: string]: RuleMessageValue}>(
        ruleName: string,
        messages: T): T;

    function validateOptions(result: postcss.Result, ruleName: string,
        ...options: RuleOption[]): boolean;

    function checkAgainstRule(options: {
        ruleName: string;
        ruleSettings: any;
        root: any;
    }, callback: (warning: string) => void): void;
}

export function createPlugin(
    ruleName: string,
    plugin: (primaryOption: any, secondaryOptions: RuleOption[]) =>
        (root: postcss.Root, result: postcss.Result) => void|PromiseLike<void>,
): any;

export interface RuleTesterResult {
    expected: number;
    actual: number;
    description: string;
}

export interface RuleTesterTest {
    code: string;
    description?: string;
}

export interface RuleTesterTestRejected extends RuleTesterTest {
    line?: number;
    column?: number;
    only?: boolean;
    message?: string;
}

export interface RuleTesterSchema {
    ruleName: string;
    syntax?: SyntaxType;
    config?: any;
    accept?: RuleTesterTest[];
    reject?: RuleTesterTestRejected[];
}

export interface RuleTesterContext {
    comparisonCount: number;
    completeAssertionDescription: string;
    caseDescription: string;
    only?: boolean;
}

export function createRuleTester(
    fn: (result: Promise<RuleTesterResult[]>, context: RuleTesterContext) => void
): (rule: any, schema: RuleTesterSchema) => void;
