// Type definitions for node-libxslt
// Project: https://github.com/albanm/node-libxslt
// Definitions by: Alejandro Sánchez <https://github.com/alejo90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="libxmljs" />

import * as xmljs from 'libxmljs';

export const libxmljs: typeof xmljs;

type OutputFormat = 'document' | 'string';

export interface ApplyOptions {
	outputFormat?: OutputFormat;
	noWrapParams?: boolean;
}

type ApplyResult = string | xmljs.XMLDocument;

type ApplyCallback = (err: Error, result: ApplyResult) => void;

type ApplyStringCallback = (err: Error, result: string) => void;

type ApplyDocumentCallback = (err: Error, result: xmljs.XMLDocument) => void;

export interface Stylesheet {
	apply(source: string, params?: Object): string;

	apply(source: string, params: Object, options: ApplyOptions): ApplyResult;

	apply(source: string, params: Object, options: ApplyOptions, callback: ApplyCallback): void;

	apply(source: string, callback: ApplyStringCallback): void;

	apply(source: xmljs.XMLDocument, params?: Object): xmljs.XMLDocument;

	apply(source: xmljs.XMLDocument, params: Object, options: ApplyOptions): ApplyResult;

	apply(source: xmljs.XMLDocument, params: Object, options: ApplyOptions, callback: ApplyCallback): void;

	apply(source: xmljs.XMLDocument, callback: ApplyDocumentCallback): void;

	applyToFile(sourcePath: string, params: Object, options: ApplyOptions, callback: ApplyStringCallback): void;

	applyToFile(sourcePath: string, callback: ApplyStringCallback): void;
}

type ParseCallback = (err: Error, stylesheet: Stylesheet) => void;

export function parse(source: string): Stylesheet;

export function parse(source: string, callback: ParseCallback): void;

export function parse(source: xmljs.XMLDocument): Stylesheet;

export function parse(source: xmljs.XMLDocument, callback: ParseCallback): void;

export function parseFile(sourcePath: string, callback: ParseCallback): void;
