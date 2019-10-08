// Type definitions for html-parser 0.11
// Project: https://www.npmjs.com/package/html-parser
// Definitions by: Vladimir Grenaderov https://github.com/VladimirGrenaderov,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export type Callback = (arg: any) => any;
export type Token = '>' | '/>' | '?>';

export interface CallbacksOption {
    /*
     * @param {Function} [callbacks.attribute] Takes the name of the attribute and its value
     * @param {Function} [callbacks.openElement] Takes the tag name of the element
     * @param {Function} [callbacks.closeOpenedElement] Takes the tag name of the element, the token used to
     * close it (">", "/>", "?>") and a boolean telling if it is unary or not (i.e., if it doesn't requires
     * another tag closing it later)
     * @param {Function} [callbacks.closeElement] Takes the name of the element
     * @param {Function} [callbacks.comment] Takes the content of the comment
     * @param {Function} [callbacks.docType] Takes the content of the document type declaration
     * @param {Function} [callbacks.cdata] Takes the content of the CDATA
     * @param {Function} [callbacks.xmlProlog] Takes no arguments
     * @param {Function} [callbacks.text] Takes the value of the text node
     */
    attribute?(name: string, value: any): void;
    openElement?(name: string): void;
    closeOpenedElement?(name: string, token: Token, isUnary: boolean): void;
    closeElement?(name: string): void;
    comment?(comment: string): void;
    docType?(doctype: string): void;
    cdata?(cdata: string): void;
    xmlProlog?(): void;
    text?(value: string): void;
}

export interface RegExpOptions {
    name?: RegExp;
    attribute?: RegExp;
}

export interface RemovalCallback {
    /* @param {Function|Array} [removalCallbacks.attributes] Callback or array of specific attributes to strip
     * @param {Function|Array} [removalCallbacks.elements] Callback or array of specific elements to strip
     * @param {Function|Boolean} [removalCallbacks.comments] Callback or boolean indicating to strip comments
     * @param {Function|Boolean} [removalCallbacks.docTypes] Callback or boolean indicating to strip doc type declarations
     */
    attributes: Callback | string[];
    elements: Callback | string[];
    comments: Callback | boolean;
    docTypes: Callback | boolean;
}

export function parse(htmlString: string, callbacks?: CallbacksOption, regex?: RegExpOptions): void;

export function parseFile(fileName: string, encoding: string | undefined, callbacks: CallbacksOption, callback: Callback): void;

export function sanitize(htmlString: string, removalCallbacks?: RemovalCallback): string;
