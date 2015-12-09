// Type definitions for ini v1.3.3
// Project: https://github.com/isaacs/ini
// Definitions by: Marcin Porębski <https://github.com/marcinporebski>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "ini"
{
    interface EncodeOptions {
        section: string
        whitespace: boolean
    }

    function decode(inistring: string): any;

    function parse(initstring: string): any;

    function encode(object: any, options?: EncodeOptions): string;

    function stringify(object: any, options?: EncodeOptions): string;

    function safe(val: string): string;

    function unsafe(val: string): string;

}
