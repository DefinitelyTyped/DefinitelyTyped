// Type definitions for domhandler 2.4
// Project: https://github.com/fb55/DomHandler#readme
// Definitions by: Johan Davidsson <https://github.com/johandavidson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface DomHandlerOptions {
    /***
     * Indicates whether the whitespace in text nodes should be normalized
     * (= all whitespace should be replaced with single spaces). The default value is "false".
     */
    normalizeWhitespace?: boolean | undefined;

    /***
     * Adds DOM level 1 properties to all elements.
     */
    withDomLvl1?: boolean | undefined;

    /***
     * Indicates whether a startIndex property will be added to nodes.
     * When the parser is used in a non-streaming fashion, startIndex is an integer
     * indicating the position of the start of the node in the document.
     * The default value is "false".
     */
    withStartIndices?: boolean | undefined;

    /***
     * Indicates whether a endIndex property will be added to nodes.
     * When the parser is used in a non-streaming fashion, endIndex is an integer
     * indicating the position of the end of the node in the document.
     * The default value is "false".
     */
    withEndIndices?: boolean | undefined;
}

export interface DomElement {
    attribs?: {[s: string]: string} | undefined;
    children?: DomElement[] | undefined;
    data?: any;
    name?: string | undefined;
    next?: DomElement | undefined;
    parent?: DomElement | undefined;
    prev?: DomElement | undefined;
    type?: string | undefined;
}

export interface Element extends DomElement {
    name: string;
}

export interface Node extends DomElement {
    readonly firstChild: DomElement;
    readonly lastChild: DomElement;
    readonly nodeType: number;
}

export class DomHandler {
    constructor(callback: (error: any, dom: DomElement[]) => any, options?: DomHandlerOptions);

    onparserinit(parser: any): void;

    /***
     * Resets the handler back to starting state
     */
    onreset(): void;

    /***
     * Signals the handler that parsing is done
     */
    onend(): void;
    onerror(error: Error): void;
    onclosetag(): void;
    onopentag(name: string, attribs: {[s: string]: string}): void;
    ontext(data: string): void;
    oncomment(data: string): void;
    oncdatastart(): void;
    oncommentend(): void;
    onprocessinginstruction(name: string, data: string): void;
}
