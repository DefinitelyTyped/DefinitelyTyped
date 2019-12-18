// Type definitions for https://github.com/JaKXz/stylelint-webpack-plugin 0.1
// Project: https://github.com/JaKXz/stylelint-webpack-plugin
// Definitions by: Arne Bahlo <https://github.com/bahlo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

export = StylelintWebpackPlugin;

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

    type Formatter = (messages: Message[], source: string) => string;

    interface Config {
        rules?: object;
        extends?: string | string[];
        plugins?: string[];
        processors?: string[];
        ignoreFiles?: string | string[];
        defaultSeverity?: "warning" | "error";
    }

    interface Options {
        config?: Config;
        configFile?: string;
        context?: string;
        emitErrors?: boolean;
        failOnError?: boolean;
        files?: string|string[];
        formatter?: Formatter;
        lintDirtyModulesOnly?: boolean;
        syntax?: string;
        quiet?: boolean;
        fix?: boolean;
    }
}
