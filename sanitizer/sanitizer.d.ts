// Type definitions for Sanitizer
// Project: https://github.com/theSmaw/Caja-HTML-Sanitizer
// Definitions by: Dave Taylor <http://davetayls.me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface ISaxHandler {
    startTag(name: string, attribs: string[], param: any): void;
    endTag(name: string, param: any): void;
    pcdata(text: string, param: any): void;
    cdata(text: string, param: any): void;
    rcdata(text: string, param: any): void;
    comment(text: string, param: any): void;
    startDoc(param: any): void;
    endDoc(param: any): void;
}

declare export function escape(s: string): string;

declare export function makeSaxParser(yourHandler: ISaxHandler): (...any: any[]) => any;

declare export function normalizeRCData(s: string): string;

declare export function sanitize(s: string): string;

declare export function unescapeEntities(s: string): string;
