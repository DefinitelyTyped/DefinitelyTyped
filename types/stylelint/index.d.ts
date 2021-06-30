// Type definitions for stylelint 13.13
// Project: https://github.com/stylelint/stylelint, https://stylelint.io
// Definitions by: Alan Agius <https://github.com/alan-agius4>
//                 Filips Alpe <https://github.com/filipsalpe>
//                 James Garbutt <https://github.com/43081j>
//                 Bob Matcuk <https://github.com/bmatcuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { GlobbyOptions } from 'globby';
import * as postcss from 'postcss';

export type FormatterType =
    | "json"
    | "string"
    | "verbose"
    | "compact"
    | "unix"
    | ((results: LintResult[]) => string);

export type SyntaxType = "css-in-js"
    | "html"
    | "less"
    | "markdown"
    | "sass"
    | "scss"
    | "sugarss";

export type Severity = "warning" | "error";

export interface Configuration {
    rules: Record<string, any>;
    extends: string | string[];
    plugins: string[];
    processors: string[];
    ignoreFiles: string|string[];
    defaultSeverity: Severity;
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
    globbyOptions: GlobbyOptions;
    ignoreDisables: boolean;
    ignorePath: string;
    maxWarnings: number;
    reportDescriptionlessDisables: boolean;
    reportInvalidScopeDisables: boolean;
    reportNeedlessDisables: boolean;
    syntax: SyntaxType;
}

export interface LinterResult {
    errored: boolean;
    output: string;
    results: LintResult[];
}

export interface Warning {
    line: number;
    column: number;
    rule: string;
    severity: Severity;
    text: string;
}

export interface LintResult {
    source: string;
    errored: boolean | undefined;
    ignored: boolean | undefined;
    warnings: Warning[];
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

export type ValidateOptionsAssertion = {
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
        ...options: ValidateOptionsAssertion[]): boolean;

    function checkAgainstRule(options: {
        ruleName: string;
        ruleSettings: any;
        root: any;
    }, callback: (warning: string) => void): void;
}

export type Plugin = (primaryOption: any, secondaryOptions?: object) =>
    (root: postcss.Root, result: postcss.Result) => void|PromiseLike<void>;

export function createPlugin(
    ruleName: string,
    plugin: Plugin
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
): (rule: Plugin, schema: RuleTesterSchema) => void;
