import { CLIEngine } from 'eslint';

/**
 * This is our custom ESLint formatter that integrates well with
 * Create React App console output.
 */
declare function eslintFormatter(results: ReadonlyArray<CLIEngine.LintResult>): string;

export = eslintFormatter;
