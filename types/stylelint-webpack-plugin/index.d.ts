// Type definitions for https://github.com/webpack-contrib/stylelint-webpack-plugin 2.0
// Project: https://github.com/webpack-contrib/stylelint-webpack-plugin#readme
// Definitions by: Arne Bahlo <https://github.com/bahlo>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'webpack';
import { LinterOptions as StylelintOptions, FormatterType } from 'stylelint';

export = StylelintWebpackPlugin;

/**
 * A Stylelint plugin for webpack
 */
declare class StylelintWebpackPlugin extends Plugin {
    constructor(options?: StylelintWebpackPlugin.Options);
}

declare namespace StylelintWebpackPlugin {
    interface Message {
        line: number;
        column: number;
        severity: string;
        text: string;
        rule: string;
    }

    interface Config {
        rules?: object;
        extends?: string | string[];
        plugins?: string[];
        processors?: string[];
        ignoreFiles?: string | string[];
        defaultSeverity?: 'warning' | 'error';
    }

    /**
     * See {@link http://stylelint.io/user-guide/node-api/#options|stylelint's options} for the complete list of options available.
     * These options are passed through to the `stylelint` directly.
     */
    interface Options extends Partial<StylelintOptions> {
        /**
         * Specify the config file location to be used by stylelint.
         */
        configFile?: string;
        /**
         * @default compiler.context
         */
        context?: string;
        /**
         * Will always return errors, if set to true.
         * @default false
         */
        emitError?: boolean;
        /**
         * Will always return warnings, if set to `true`.
         */
        emitWarning?: boolean;
        /**
         * Will cause the module build to fail if there are any errors, if set to true.
         * @default false
         */
        failOnError?: boolean;
        /**
         * Will process and report errors only and ignore warnings, if set to true.
         * @default false
         */
        failOnWarning?: boolean;
        /**
         * Specify the glob pattern for finding files. Must be relative to options.context.
         */
        files?: string | string[];
        /**
         * Specify the formatter that you would like to use to format your results. See formatter option.
         */
        formatter?: FormatterType;
        /**
         * Lint only changed files, skip lint on start.
         * @default false
         */
        lintDirtyModulesOnly?: boolean;
        /**
         * Path to `stylelint` instance that will be used for linting.
         * @default 'stylelint'
         */
        stylelintPath?: string;
        /**
         * Will process and report errors only and ignore warnings, if set to true.
         * @default false
         */
        quiet?: boolean;
    }
}
