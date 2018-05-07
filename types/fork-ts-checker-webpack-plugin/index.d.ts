// Type definitions for fork-ts-checker-webpack-plugin 0.4
// Project: https://github.com/Realytics/fork-ts-checker-webpack-plugin#readme
// Definitions by: JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { RuleFailure } from 'tslint';
import { Diagnostic } from 'typescript';
import { Plugin } from 'webpack';

declare namespace ForkTsCheckerWebpackPlugin {
    type ErrorType = 'diagnostic' | 'lint';
    type Severity = 'error' | 'warning';

    interface NormalizedMessageJson {
        type: ErrorType;
        code: string | number;
        severity: Severity;
        content: string;
        file: string;
        line: number;
        character: number;
    }

    class NormalizedMessage {
        static TYPE_DIAGNOSTIC: ErrorType;
        static TYPE_LINT: ErrorType;
        static SEVERITY_ERROR: Severity;
        static SEVERITY_WARNING: Severity;
        type: ErrorType;
        code: string | number;
        severity: Severity;
        content: string;
        file: string;
        line: number;
        character: number;
        constructor(data: NormalizedMessageJson);
        static createFromDiagnostic(diagnostic: Diagnostic): NormalizedMessage;
        static createFromLint(lint: RuleFailure): NormalizedMessage;
        static createFromJSON(json: NormalizedMessageJson): NormalizedMessage;
        static compare(
            messageA: NormalizedMessage,
            messageB: NormalizedMessage,
        ): number;
        static equals(
            messageA: NormalizedMessage,
            messageB: NormalizedMessage,
        ): boolean;
        static deduplicate(messages: NormalizedMessage[]): NormalizedMessage[];
        static compareTypes(typeA: ErrorType, typeB: ErrorType): number;
        static compareSeverities(
            severityA: Severity,
            severityB: Severity,
        ): number;
        static compareOptionalStrings(stringA: string, stringB: string): number;
        static compareNumbers(numberA: number, numberB: number): number;
        toJSON(): NormalizedMessageJson;
        getType(): ErrorType;
        isDiagnosticType(): boolean;
        isLintType(): boolean;
        getCode(): string | number;
        getFormattedCode(): string | number;
        getSeverity(): Severity;
        isErrorSeverity(): boolean;
        isWarningSeverity(): boolean;
        getContent(): string;
        getFile(): string;
        getLine(): number;
        getCharacter(): number;
    }

    type Formatter = (message: NormalizedMessage, useColors: boolean) => string;

    interface Options {
        tsconfig?: string;
        tslint?: string | true;
        watch?: string | string[];
        async?: boolean;
        ignoreDiagnostics?: number[];
        ignoreLints?: string[];
        colors?: boolean;
        logger?: Console;
        formatter?: 'default' | 'codeframe' | Formatter;
        formatterOptions?: {
            highlightCode?: boolean
            linesAbove?: number
            linesBelow?: number
            forceColor?: boolean
        };
        silent?: boolean;
        checkSyntacticErrors?: boolean;
        memoryLimit?: number;
        workers?: number;
        vue?: boolean;
    }
}

declare class ForkTsCheckerWebpackPlugin extends Plugin {
    constructor(options?: ForkTsCheckerWebpackPlugin.Options);
}

export = ForkTsCheckerWebpackPlugin;
