import { ESLint } from "eslint";

/**
 * This is our custom ESLint formatter that integrates well with
 * Create React App console output.
 */
declare function eslintFormatter(results: readonly ESLint.LintResult[]): string;

export = eslintFormatter;
