// Type definitions for sax-js 1.x
// Project: https://github.com/isaacs/sax-js
// Definitions by: Vincent Siao (Asana, Inc.) <https://github.com/vsiao>
//                 Evert Pot <https://github.com/evert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export declare var EVENTS: string[];

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

export declare function parser(strict?: boolean, opt?: SAXOptions): SAXParser;
export declare class SAXParser {
    constructor(strict?: boolean, opt?: SAXOptions);

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
    ENTITIES: {[key: string]: string};

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
export declare function createStream(strict?: boolean, opt?: SAXOptions): SAXStream;
export declare class SAXStream extends stream.Duplex {
    constructor(strict?: boolean, opt?: SAXOptions);
    private _parser: SAXParser;
    on(event: "text", listener: (text: string) => void): this;
    on(event: "doctype", listener: (doctype: string) => void): this;
    on(event: "processinginstruction", listener: (node: { name: string; body: string }) => void): this;
    on(event: "opentag", listener: (tag: Tag | QualifiedTag) => void): this;
    on(event: "closetag", listener: (tagName: string) => void): this;
    on(event: "attribute", listener: (attr: { name: string; value: string }) => void): this;
    on(event: "comment", listener: (comment: string) => void): this;
    on(event: "opencdata", listener: () => void): this;
    on(event: "cdata", listener: (cdata: string) => void): this;
    on(event: "closecdata", listener: () => void): this;
    on(event: "opennamespace", listener: (ns: { prefix: string; uri: string }) => void): this;
    on(event: "closenamespace", listener: (ns: { prefix: string; uri: string }) => void): this;
    on(event: "end", listener: () => void): this;
    on(event: "ready", listener: () => void): this;
    on(event: "script", listener: (script: string) => void): this;
    on(event: "close", listener: () => void): this;
    on(event: "data", listener: (chunk: any) => void): this;
    on(event: "readable", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: "drain", listener: () => void): this;
    on(event: "finish", listener: () => void): this;
    on(event: "pipe", listener: (src: stream.Readable) => void): this;
    on(event: "unpipe", listener: (src: stream.Readable) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
}
