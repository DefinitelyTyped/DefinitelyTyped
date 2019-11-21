// Type definitions for node-libxslt 0.7
// Project: https://github.com/albanm/node-libxslt
// Definitions by: Alejandro Sánchez <https://github.com/alejo90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as xmljs from 'libxmljs';

import {
	ApplyCallback,
	ApplyResult,
	ApplyStringCallback,
	OutputFormat,
	ParseCallback
} from './internal-types';
export const libxmljs: typeof xmljs;

export interface ApplyOptions {
	outputFormat?: OutputFormat;
	noWrapParams?: boolean;
}

export interface Stylesheet {
	apply(source: string, params?: object): string;
	apply(source: string|xmljs.Document, params: object, options: ApplyOptions): ApplyResult;
	apply(source: string|xmljs.Document, params: object, options: ApplyOptions, callback: ApplyCallback): void;
	apply(source: string|xmljs.Document, callback: ApplyStringCallback): void;
	apply(source: xmljs.Document, params?: object): xmljs.Document;

	applyToFile(sourcePath: string, params: object, options: ApplyOptions, callback: ApplyStringCallback): void;
	applyToFile(sourcePath: string, callback: ApplyStringCallback): void;
}

export function parse(source: string|xmljs.Document): Stylesheet;
export function parse(source: string|xmljs.Document, callback: ParseCallback): void;

export function parseFile(sourcePath: string, callback: ParseCallback): void;
