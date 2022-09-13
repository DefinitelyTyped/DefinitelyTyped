// Type definitions for ini v1.3.3
// Project: https://github.com/isaacs/ini
// Definitions by: Marcin Porębski <https://github.com/marcinporebski>
//                 Chris Arnesen <https://github.com/carnesen>
//                 Adaline Simonian <https://github.com/adalinesimonian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface EncodeOptions {
    section?: string;
    whitespace?: boolean;
}

export function decode(str: string): {
    [key: string]: any;
};
export function parse(str: string): {
    [key: string]: any;
};
export function encode(object: any, options?: EncodeOptions | string): string;
export function stringify(object: any, options?: EncodeOptions | string): string;
export function safe(val: string): string;
export function unsafe(val: string): string;
