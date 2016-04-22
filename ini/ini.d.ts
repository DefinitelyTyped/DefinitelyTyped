// Type definitions for ini v1.3.3
// Project: https://github.com/isaacs/ini
// Definitions by: Marcin Porębski <https://github.com/marcinporebski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface EncodeOptions {
    section: string
    whitespace: boolean
}

declare function decode(inistring: string): any;

declare function parse(initstring: string): any;

declare function encode(object: any, options?: EncodeOptions): string;

declare function stringify(object: any, options?: EncodeOptions): string;

declare function safe(val: string): string;

declare function unsafe(val: string): string;
