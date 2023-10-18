import { Compiler, Plugin } from "webpack";

export = FriendlyErrorsWebpackPlugin;

declare class FriendlyErrorsWebpackPlugin extends Plugin {
    constructor(options?: FriendlyErrorsWebpackPlugin.Options);

    apply(compiler: Compiler): void;
}

declare namespace FriendlyErrorsWebpackPlugin {
    enum Severity {
        Error = "error",
        Warning = "warning",
    }

    interface Options {
        compilationSuccessInfo?: {
            messages: string[];
            notes: string[];
        } | undefined;
        onErrors?(severity: Severity, errors: string): void;
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
