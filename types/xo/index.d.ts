// Type definitions for xo 0.26
// Project: https://github.com/xojs/xo#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import eslint = require('eslint');

/**
 * From T pick a set of properties K
 */
export type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

// eslint.CLIEngine.getErrorResults without modification
// eslint.CLIEngine.getErrorResults redeclared to match input shape

/**
 * Can be used to filter out all the non error messages from the report object.
 */
export const getErrorResults: typeof eslint.CLIEngine.getErrorResults;
/**
 * Used to output fixes from report to disk.
 * It does by looking for files that have an output property in their results
 */
export function outputFixes(report: ResultReport): void;

export function lintText(text: string, options?: Options): ResultReport;
export function lintFiles(patterns: string | string[], options?: Options): ResultReport | Promise<ResultReport>;

export type CLIEngineOptions = Pick<
    eslint.CLIEngine.Options,
    'baseConfig' | 'cwd' | 'envs' | 'extensions' | 'fix' | 'globals' | 'ignore' | 'parser' | 'plugins' | 'rules'
>;
export type ESLintOptions = Pick<eslint.Linter.LintOptions, 'filename'>;
export type ESLintConfig = Pick<eslint.Linter.Config, 'extends' | 'settings'>;

export type Options = {
    /** Enforce ES2015+ rules. Disabling this will make it not enforce ES2015+ syntax and conventions */
    esnext?: boolean;
    /** Some paths are ignored by default, including paths in .gitignore and .eslintignore. Additional ignores can be added here */
    ignores?: string[];
    /** Enable rules specific to the Node.js versions within the configured range */
    nodeVersion?: string | boolean;
    /** Format code with Prettier */
    prettier?: boolean;
    /** Set it to false to enforce no-semicolon style. */
    semicolon?: boolean;
    /** Set it to true to get 2-space indentation or specify the number of spaces. */
    space?: number | string;
} & CLIEngineOptions &
    ESLintConfig &
    ESLintOptions;

export interface ResultReport {
    readonly errorCount: number;
    readonly warningCount: number;
    readonly results: eslint.CLIEngine.LintResult[];
}
