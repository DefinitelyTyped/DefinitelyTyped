// Type definitions for ini v1.3.3
// Project: https://github.com/isaacs/ini
// Definitions by: Marcin Porębski <https://github.com/marcinporebski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface EncodeOptions {
    section: string
    whitespace: boolean
}

export function decode(inistring: string): any;
export function parse(initstring: string): any;
export function encode(object: any, options?: EncodeOptions): string;
export function stringify(object: any, options?: EncodeOptions): string;
export function safe(val: string): string;
export function unsafe(val: string): string;
