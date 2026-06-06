import { Plugin } from "webpack";

export = FriendlyErrorsWebpackPlugin;

declare class FriendlyErrorsWebpackPlugin extends Plugin {
    constructor(options?: FriendlyErrorsWebpackPlugin.Options);
}

declare namespace FriendlyErrorsWebpackPlugin {
    type Severity = "error" | "warning";

    interface Options {
        compilationSuccessInfo?: {
            messages: string[];
            notes: string[];
        } | undefined;

        /**
         * You can listen to errors transformed and prioritized by the plugin.
         */
        onErrors?(severity: Severity, errors: WebpackError[]): void;

        /**
         * Whether the console should be cleared between each compilation.
         * @default true
         */
        clearConsole?: boolean | undefined;

        additionalFormatters?: Array<(errors: WebpackError[], type: Severity) => string[]> | undefined;

        additionalTransformers?: Array<(error: any) => any> | undefined;
    }

    interface WebpackError {
        message: string;
        file: string;
        origin: string;
        name: string;
        severity: Severity;
        webpackError: any;
    }
}
