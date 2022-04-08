// Type definitions for html-parser 0.11
// Project: https://www.npmjs.com/package/html-parser
// Definitions by: Vladimir Grenaderov https://github.com/VladimirGrenaderov,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export type Callback = (arg: any) => any;
export type Token = '>' | '/>' | '?>';

export interface CallbacksOption {
    attribute?(name: string, value: any): void;
    openElement?(tagName: string): void;
    closeOpenedElement?(tagName: string, token: Token, isUnary: boolean): void;
    closeElement?(name: string): void;
    comment?(content: string): void;
    docType?(content: string): void;
    cdata?(content: string): void;
    xmlProlog?(): void;
    text?(value: string): void;
}

export interface RegExpOptions {
    name?: RegExp;
    attribute?: RegExp;
}

export interface RemovalCallback {
    attributes: Callback | string[];
    elements: Callback | string[];
    comments: Callback | boolean;
    docTypes: Callback | boolean;
}

export function parse(htmlString: string, callbacks?: CallbacksOption, regex?: RegExpOptions): void;

export function parseFile(fileName: string, encoding: string | undefined, callbacks: CallbacksOption, callback: Callback): void;

export function sanitize(htmlString: string, removalCallbacks?: RemovalCallback): string;
