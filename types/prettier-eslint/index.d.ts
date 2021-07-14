// Type definitions for prettier-eslint 12.0.0
// Project: https://github.com/prettier/prettier-eslint
// Definitions by: Munin M. <https://github.com/4086606>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as eslint from "eslint";
import * as prettier from "prettier";

declare namespace format {
    type LogLevel = "error" | "warn" | "info" | "debug" | "trace";

    /**
     * Options to format text with Prettier and Eslint.
     *
     * @member {eslint.Linter.Config} [eslintConfig] The config to use for formatting
     * with ESLint.
     * @member {string} [eslintPath] The path to the eslint module to use.
     * Will default to require.resolve('eslint')
     * @member {prettier.Options} [fallbackPrettierOptions] The options to pass for
     * formatting with `prettier` if the given option is not inferrable from the
     * eslintConfig.
     * @member {string} [filePath] The path of the file being formatted
     * can be used in lieu of `eslintConfig` (eslint will be used to find the
     * relevant config for the file). Will also be used to load the `text` if
     * `text` is not provided.
     * @member {prettier.Options} [prettierOptions] The options to pass for
     * formatting with `prettier`. If not provided, prettier-eslint will attempt
     * to create the options based on the `eslintConfig` value.
     * @member {boolean} [prettierLast] Run Prettier last.
     * @member {string} [prettierPath] The path to the prettier module.
     * Will default to require.resovlve('prettier')
     * @member {string} [logLevel] The level for the logs (error, warn, info,
     * debug, trace)
     * @member {string} text The text (JavaScript code) to format.
     */
    interface Options {
        eslintConfig?: eslint.Linter.Config;
        eslintPath?: string;
        fallbackPrettierOptions?: prettier.Options;
        prettierOptions?: prettier.Options;
        prettierLast?: string;
        filePath?: string;
        logLevel?: LogLevel;
        text: string;
    }
}

/**
 * Formats the text with Prettier and then ESLint while obeying the user's
 * configuration.
 *
 * @param {object} options Options to format text with Prettier and Eslint.
 * @param {eslint.Linter.Config} [options.eslintConfig] The config to use for formatting
 * with ESLint.
 * @param {string} [options.eslintPath] The path to the eslint module to use.
 * Will default to require.resolve('eslint')
 * @param {prettier.Options} [options.fallbackPrettierOptions] The options to pass for
 * formatting with `prettier` if the given option is not inferrable from the
 * eslintConfig.
 * @param {string} [options.filePath] The path of the file being formatted
 * can be used in lieu of `eslintConfig` (eslint will be used to find the
 * relevant config for the file). Will also be used to load the `text` if
 * `text` is not provided.
 * @param {prettier.Options} [options.prettierOptions] The options to pass for
 * formatting with `prettier`. If not provided, prettier-eslint will attempt
 * to create the options based on the `eslintConfig` value.
 * @param {boolean} [options.prettierLast] Run Prettier last.
 * @param {string} [options.prettierPath] The path to the prettier module.
 * Will default to require.resovlve('prettier')
 * @param {PrettierEslintLogLevel} [options.logLevel] The level for the logs (`error`, `warn`,
 * `info`, `debug`, `trace`).
 * @param {string} options.text The text (JavaScript code) to format.
 * @return {string} Auto-formatted text that is mostly compliant with the
 * supplied configuration. The auto-formatting is limited to the issues that
 * Prettier and ESLint can automatically fix.
 */
declare function format(options?: format.Options): string;

export = format;
