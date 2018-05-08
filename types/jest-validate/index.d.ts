// Type definitions for jest-validate 21.0
// Project: https://github.com/facebook/jest/tree/master/packages/jest-validate
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export class ValidationError extends Error {
    name: string;
    message: string;
    constructor(name: string, message: string, comment?: string);
}

export function createDidYouMeanMessage(
    unrecognized: string,
    allowedOptions: string[]
): string;

export function format(value: any): string;

export function logValidationWarning(
    name: string,
    message: string,
    commant?: string
): void;

export interface Title {
    deprecation?: string;
    error?: string;
    warning?: string;
}

export interface DeprecatedConfig {
    [key: string]: (config: object) => string;
}

export interface ValidationOptions {
    /**
     * optional string to be rendered below error/warning message.
     */
    comment?: string;
    /**
     * an optional function with validation condition.
     */
    condition?(value: any, exampleValue: any): boolean;
    /**
     * optional object with deprecated config keys.
     */
    deprecatedConfig?: DeprecatedConfig;
    /**
     * the only **required** option with configuration against which you'd like to test.
     */
    exampleConfig: object;
    /**
     * optional object of titles for errors and messages.
     */
    title?: Title;
    /**
     * optional functions responsible for displaying warning and error messages.
     */
    deprecate?(
        config: object,
        key: string,
        deprecatedConfig: DeprecatedConfig,
        options: ValidationOptions
    ): boolean;
    /**
     * optional functions responsible for displaying warning and error messages.
     */
    error?(
        key: string,
        received: any,
        exampleValue: any,
        options: ValidationOptions
    ): void;
    /**
     * optional functions responsible for displaying warning and error messages.
     */
    unknown?(
        config: object,
        exampleConfig: object,
        key: string,
        options: ValidationOptions
    ): void;
}

/**
 * By default jest-validate will print generic warning and error messages.
 * You can however customize this behavior by providing `options: ValidationOptions` object as a second argument:
 *
 * Almost anything can be overwritten to suite your needs.
 */
export function validate(
    config: object,
    options: ValidationOptions
): { hasDeprecationWarnings: boolean; isValid: boolean };
