// Type definitions for node-xml2js 0.4
// Project: https://github.com/Leonidas-from-XIV/node-xml2js
// Definitions by: Michel Salib <https://github.com/michelsalib>
//                 Jason McNeil <https://github.com/jasonrm>
//                 Christopher Currens <https://github.com/ccurrens>
//                 Edward Hinkle <https://github.com/edwardhinkle>
//                 Behind The Math <https://github.com/BehindTheMath>
//                 Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
import { EventEmitter } from 'events';
import * as processors from './lib/processors';

export function parseString(xml: convertableToString, callback: (err: any, result: any) => void): void;
export function parseString(xml: convertableToString, options: OptionsV2, callback: (err: any, result: any) => void): void;

export const defaults: {
    '0.1': Options;
    '0.2': OptionsV2;
};

export class Builder {
    constructor(options?: OptionsV2);
    buildObject(rootObj: any): string;
}

export class Parser extends EventEmitter {
    constructor(options?: OptionsV2);
    parseString(str: convertableToString, cb?: Function): void;
    reset(): void;
}

export interface Options {
    async?: boolean;
    attrkey?: string;
    attrNameProcessors?: Array<(name: string) => any>;
    attrValueProcessors?: Array<(value: string, name: string) => any>;
    charkey?: string;
    charsAsChildren?: boolean;
    childkey?: string;
    emptyTag?: any;
    explicitArray?: boolean;
    explicitCharkey?: boolean;
    explicitChildren?: boolean;
    explicitRoot?: boolean;
    ignoreAttrs?: boolean;
    includeWhiteChars?: boolean;
    mergeAttrs?: boolean;
    normalize?: boolean;
    normalizeTags?: boolean;
    strict?: boolean;
    tagNameProcessors?: Array<(name: string) => any>;
    trim?: boolean;
    validator?: Function;
    valueProcessors?: Array<(value: string, name: string) => any>;
    xmlns?: boolean;
}

export interface OptionsV2 extends Options {
    preserveChildrenOrder?: boolean;
    rootName?: string;
    xmldec?: {
        version: string;
        encoding?: string;
        standalone?: boolean;
    };
    doctype?: any;
    renderOpts?: {
        pretty?: boolean;
        indent?: string;
        newline?: string;
    };
    headless?: boolean;
    chunkSize?: number;
    cdata?: boolean;
}

export interface convertableToString {
    toString(): string;
}

export { processors };
