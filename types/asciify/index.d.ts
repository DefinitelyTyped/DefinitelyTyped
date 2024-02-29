/// <reference types="node" />

interface AsciifyOptions {
    font?: string | undefined;
    maxWidth?: number | undefined;
    color?: string | undefined;
}

interface AsciifyCallback {
    // err is sometimes a string and sometimes an Error
    (err: any, asciifiedText: string): void;
}

declare module "asciify" {
    function asciify(text: string, callback: AsciifyCallback): void;
    function asciify(text: string, options: string, callback: AsciifyCallback): void;
    function asciify(text: string, options: AsciifyOptions, callback: AsciifyCallback): void;

    namespace asciify {
        function getFonts(callback: (err: Error, fonts: string[]) => void): void;
    }

    export = asciify;
}
