// Type definitions for node-latex 0.0.1 
// Project: https://github.com/mikolalysenko/node-latex/
// Definitions by: Mariusz Kierski <https://github.com/chaser92/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare function latex(src: string, options: ILatexOptions): NodeJS.ReadableStream;

declare function latex(src: Array<string>, options: ILatexOptions): NodeJS.ReadableStream;

declare function latex(src: Array<Buffer>, options: ILatexOptions): NodeJS.ReadableStream;

declare function latex(src: NodeJS.ReadableStream, options: ILatexOptions): NodeJS.ReadableStream;


interface ILatexOptions {
    command?: string;
    format?: string;
}

declare module "latex" {
    export = latex;
}
