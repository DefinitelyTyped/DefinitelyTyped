// Type definitions for sax js
// Project: https://github.com/isaacs/sax-js
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference path="../node/node.d.ts" />

declare module "sax" {
    export var EVENTS: string[];

    interface SAXOptions {
        trim?: boolean;
        normalize?: boolean;
        lowercase?: boolean;
        xmlns?: boolean;
        noscript?: boolean;
        position?: boolean;
    }

    export interface QualifiedName {
        name: string;
        prefix: string;
        local: string;
        uri: string;
    }

    export interface QualifiedAttribute extends QualifiedName {
        value: string;
    }

    interface BaseTag {
        name: string;
        isSelfClosing: boolean;
    }

    // Interface used when the xmlns option is set
    export interface QualifiedTag extends QualifiedName, BaseTag {
        ns: { [key: string]: string };
        attributes: { [key: string]: QualifiedAttribute };
    }

    export interface Tag extends BaseTag {
        attributes: { [key: string]: string };
    }

    export function parser(strict: boolean, opt: SAXOptions): SAXParser;
    export class SAXParser {
        constructor(strict: boolean, opt: SAXOptions);

        // Methods
        end(): void;
        write(s: string): SAXParser;
        resume(): SAXParser;
        close(): SAXParser;
        flush(): void;

        // Members
        line: number;
        column: number;
        error: Error;
        position: number;
        startTagPosition: number;
        closed: boolean;
        strict: boolean;
        opt: SAXOptions;
        tag: string;

        // Events
        onerror(e: Error): void;
        ontext(t: string): void;
        ondoctype(doctype: string): void;
        onprocessinginstruction(node: { name: string; body: string }): void;
        onopentag(tag: Tag | QualifiedTag): void;
        onclosetag(tagName: string): void;
        onattribute(attr: { name: string; value: string }): void;
        oncomment(comment: string): void;
        onopencdata(): void;
        oncdata(cdata: string): void;
        onclosecdata(): void;
        onopennamespace(ns: { prefix: string; uri: string }): void;
        onclosenamespace(ns: { prefix: string; uri: string }): void;
        onend(): void;
        onready(): void;
        onscript(script: string): void;
    }

    import stream = require("stream");
    export function createStream(strict: boolean, opt: SAXOptions): SAXStream;
    export class SAXStream extends stream.Duplex {
        constructor(strict: boolean, opt: SAXOptions);
        private _parser: SAXParser;
    }
}
