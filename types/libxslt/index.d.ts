// Type definitions for node-libxslt 0.9
// Project: https://github.com/albanm/node-libxslt
// Definitions by: Alejandro Sánchez <https://github.com/alejo90>
//                 Daniel Pedersen <https://github.com/daniel-pedersen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as xmljs from 'libxmljs';

import {
    ApplyCallback,
    ApplyStringCallback,
    ApplyDocumentCallback,
    ParseCallback
} from './internal-types';
export const libxmljs: typeof xmljs;

export interface ApplyOptions {
    outputFormat: 'string' | 'document';
    noWrapParams?: boolean;
}

export interface Stylesheet {
    apply(source: string, params?: object): string;
    apply(source: xmljs.Document, params?: object): xmljs.Document;
    apply(source: string | xmljs.Document, params: object, options: { outputFormat: 'string', noWrapParams?: boolean }): string;
    apply(source: string | xmljs.Document, params: object, options: { outputFormat: 'document', noWrapParams?: boolean }): xmljs.Document;
    apply(source: string | xmljs.Document, params?: object, options?: ApplyOptions): string | xmljs.Document;

    apply(source: string, callback: ApplyStringCallback): void;
    apply(source: xmljs.Document, callback: ApplyDocumentCallback): void;
    apply(source: string, params: object, callback: ApplyStringCallback): void;
    apply(source: xmljs.Document, params: object, callback: ApplyDocumentCallback): void;
    apply(source: string | xmljs.Document, params: object, options: { outputFormat: 'string', noWrapParams?: boolean }, callback: ApplyStringCallback): void;
    apply(source: string | xmljs.Document, params: object, options: { outputFormat: 'document', noWrapParams?: boolean }, callback: ApplyDocumentCallback): void;
    apply(source: string | xmljs.Document, params: object, options: ApplyOptions, callback: ApplyCallback): void;

    applyToFile(sourcePath: string, callback: ApplyStringCallback): void;
    applyToFile(sourcePath: string, params: object, callback: ApplyStringCallback): void;
    applyToFile(sourcePath: string, params: object, options: ApplyOptions, callback: ApplyStringCallback): void;
}

export function parse(source: string | xmljs.Document): Stylesheet;
export function parse(source: string | xmljs.Document, callback: ParseCallback): void;

export function parseFile(sourcePath: string, callback: ParseCallback): void;
