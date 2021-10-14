// Type definitions for xmldoc 1.1.2
// Project: https://github.com/nfarina/xmldoc
// Definitions by:  Xavier Stouder <https://github.com/Xstoudi>
//                  Andrew Sheehan <https://github.com/ajsheehan>
//                  Jordi Bunster <https://github.com/notlaforge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.4.4

export class XmlDocument extends XmlElement {
    constructor(xml: string | Buffer);

    doctype: string;
}

export type XmlNode = XmlElement | XmlTextNode | XmlCDataNode | XmlCommentNode;

export class XmlElement {
    constructor(tag: XmlTag);

    type: 'element';
    name: string;
    attr: XmlAttributes;
    val: string;
    children: XmlNode[];
    firstChild: XmlNode | null;
    lastChild: XmlNode | null;
    line: number;
    column: number;
    position: number;
    startTagPosition: number;

    eachChild(iterator: (child: XmlElement, index: number, array: XmlNode[]) => void): void;
    eachChild<T>(iterator: (this: T, child: XmlElement, index: number, array: XmlNode[]) => void, context: T): void;
    childNamed(name: string): XmlElement | undefined;
    childrenNamed(name: string): XmlElement[];
    childWithAttribute(name: string, value?: string | null): XmlElement | undefined;
    descendantWithPath(path: string): XmlElement | undefined;
    valueWithPath(path: string): string | undefined;
    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export class XmlTextNode {
    constructor(text: string);

    type: 'text';
    text: string;
    name: string;
    val: string;
    attr: XmlAttributes;
    children: XmlNode[];

    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export class XmlCDataNode {
    constructor(cdata: string);

    type: 'cdata';
    cdata: string;
    name: string;
    val: string;
    attr: XmlAttributes;
    children: XmlNode[];

    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export class XmlCommentNode {
    constructor(comment: string);

    type: 'comment';
    comment: string;
    name: string;
    val: string;
    attr: XmlAttributes;
    children: XmlNode[];

    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export interface XmlOptions {
    compressed?: boolean | undefined;
    html?: boolean | undefined;
    preserveWhitespace?: boolean | undefined;
    trimmed?: boolean | undefined;
}

export interface XmlTag {
    name: string;
    attributes: XmlAttributes;
}

export interface XmlAttributes {
    [key: string]: string;
}
