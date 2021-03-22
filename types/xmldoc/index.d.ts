// Type definitions for xmldoc 1.1
// Project: https://github.com/nfarina/xmldoc
// Definitions by:  Xavier Stouder <https://github.com/Xstoudi>
//                  Andrew Sheehan <https://github.com/ajsheehan>
//                  Jordi Bunster <https://github.com/notlaforge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export class XmlDocument extends XmlElement {
    constructor(xml: string);

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

    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export class XmlCDataNode {
    constructor(cdata: string);

    type: 'cdata';
    cdata: string;

    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export class XmlCommentNode {
    constructor(comment: string);

    type: 'comment';
    comment: string;

    toString(opts?: XmlOptions): string;
    toStringWithIndent(indent: string, opts?: XmlOptions): string;
}

export interface XmlOptions {
    compressed?: boolean;
    html?: boolean;
    preserveWhitespace?: boolean;
    trimmed?: boolean;
}

export interface XmlTag {
    name: string;
    attributes: XmlAttributes;
}

export interface XmlAttributes {
    [key: string]: string;
}
