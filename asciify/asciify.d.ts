// Type definitions for asciify 1.3.5
// Project: https://www.npmjs.org/package/asciify
// Definitions by: Alan Norbauer http://alan.norbauer.com
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

interface AsciifyOptions {
    font?: string;
    maxWidth?: number;
    color?: string;
}

interface AsciifyCallback {
    // err is sometimes a string and sometimes an Error
    (err: any, asciifiedText: string): void
}

declare module "asciify" {
    function asciify(text: string, callback: AsciifyCallback): void;
    function asciify(text: string, options: string, callback: AsciifyCallback): void;
    function asciify(text: string, options: AsciifyOptions, callback: AsciifyCallback): void;

    module asciify {
        function getFonts(callback: (err: Error, fonts: string[]) => void): void;
    }

    export = asciify
}