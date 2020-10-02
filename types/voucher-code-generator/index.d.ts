// Type definitions for voucher-code-generator 1.1
// Project: http://www.voucherify.io/
// Definitions by: João Moura <https://github.com/JWebCoder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module has methods, declare them as functions like so.
 */
export function charset(name: "numbers" | "alphabetic" | "alphanumeric"): string;
export function generate(config?: generatorConfig): string[];

/*~ You can declare types that are available via importing the module */
export interface generatorConfig {
    length?: number;
    count?: number;
    charset?: string;
    prefix?: string;
    postfix?: string;
    pattern?: string;
}
