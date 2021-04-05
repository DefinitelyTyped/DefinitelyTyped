// Type definitions for node-xml2js 0.4
// Project: https://github.com/Leonidas-from-XIV/node-xml2js
// Definitions by: Michel Salib <https://github.com/michelsalib>
//                 Jason McNeil <https://github.com/jasonrm>
//                 Christopher Currens <https://github.com/ccurrens>
//                 Edward Hinkle <https://github.com/edwardhinkle>
//                 Claas Ahlrichs <https://github.com/claasahl>
//                 Grzegorz Redlicki <https://github.com/redlickigrzegorz>
//                 Ryan Ling <https://github.com/72636c>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

/// <reference types="node"/>
import { EventEmitter } from 'events';
import * as processors from './lib/processors';

export function parseString(str: convertableToString, callback: (err: Error, result: any) => void): void;
export function parseString(
    str: convertableToString,
    options: ParserOptions,
    callback: (err: Error, result: any) => void,
): void;
export function parseStringPromise(str: convertableToString, options?: ParserOptions): Promise<any>;

export const defaults: {
    '0.1': Options;
    '0.2': OptionsV2;
};

export interface XmlDeclarationAttributes {
    version: string;
    encoding?: string;
    standalone?: boolean;
}

export interface RenderOptions {
    pretty?: boolean;
    indent?: string;
    newline?: string;
}

export class Builder {
    constructor(options?: BuilderOptions);
    buildObject(rootObj: any): string;
}

export class Parser extends EventEmitter {
    constructor(options?: ParserOptions);
    parseString(str: convertableToString, cb?: Function): void;
    parseStringPromise(str: convertableToString): Promise<any>;
    reset(): void;
}

export interface ParserOptions {
    attrkey?: string;
    charkey?: string;
    explicitCharkey?: boolean;
    trim?: boolean;
    normalizeTags?: boolean;
    normalize?: boolean;
    explicitRoot?: boolean;
    emptyTag?: any;
    explicitArray?: boolean;
    ignoreAttrs?: boolean;
    mergeAttrs?: boolean;
    validator?: Function;
    xmlns?: boolean;
    explicitChildren?: boolean;
    childkey?: string;
    preserveChildrenOrder?: boolean;
    charsAsChildren?: boolean;
    includeWhiteChars?: boolean;
    async?: boolean;
    strict?: boolean;
    attrNameProcessors?: Array<(name: string) => any>;
    attrValueProcessors?: Array<(value: string, name: string) => any>;
    tagNameProcessors?: Array<(name: string) => any>;
    valueProcessors?: Array<(value: string, name: string) => any>;
    chunkSize?: number;
}

export interface BuilderOptions {
    attrkey?: string;
    charkey?: string;
    rootName?: string;
    renderOpts?: RenderOptions;
    xmldec?: XmlDeclarationAttributes;
    doctype?: any;
    headless?: boolean;
    allowSurrogateChars?: boolean;
    cdata?: boolean;
}

export type Options = Omit<ParserOptions, "preserveChildrenOrder" | "chunkSize">;
export type OptionsV2 = ParserOptions & BuilderOptions;

export interface convertableToString {
    toString(): string;
}

export { processors };
