// Type definitions for jsreport-core 1.5
// Project: http://jsreport.net
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.6

/// <reference types="node" />

import { Buffer } from 'buffer';
import { Readable } from 'stream';

type helpers = (...args: any[]) => any;

interface RenderOptions {
	template: {
		content: string;
		engine: 'jsrender' | 'handlebars' | 'ejs' | 'jade' | string;
		helpers?: string | { [fun: string]: helpers };
		recipe: 'phantom-pdf' | 'electron-pdf' | 'text' | 'xlsx' | 'html-to-xlsx' | 'phantom-image' | 'html-to-text' | 'fop-pdf' | 'client-html' | 'wrapped-html' | 'wkhtmltopdf' | string;
	};
	data?: any;
}

interface Report {
	content: Buffer;
	stream: Readable;
	headers: {
		[header: string]: string | number | boolean;
	};
}

interface Request {
	template: {
		content: string;
	};
}

// interface Response {
// 	// todo
// }

type Response = any;

interface Listener {
	add(type: string, callback: (req: Request, res: Response, err: any) => void): void;
}

interface Logger {
	add(logger: any, options?: {
		level: 'debug' | 'info' | 'log' | 'warn' | 'error';
	}): void;
}

interface Collection {
	find(query: {
		[field: string]: any;
	}): Promise<any>;
}

interface DocumentStore {
	collection(options: string): Collection;
}

interface JsReporter {
	afterRenderListeners: Listener;
	afterTemplatingEnginesExecutedListeners: Listener;
	beforeRenderListeners: Listener;
	documentStore: DocumentStore;
	initializeListeners: Listener;
	logger: Logger;
	validateRenderListeners: Listener;
	init(): Promise<void>;
	render(options: RenderOptions): Promise<Report>;
	use(extension: any): any;
}

type JsReportStatic = (options?: Partial<{
	autoTempCleanup: boolean;
	dataDirectory: string;
	extensionsLocationCache: boolean;
	loadConfig: boolean;
	logger: {
		silent: boolean;
	};
	rootDirectory: string;
	scripts: {
		allowedModules: string[];
	};
	tasks: {
		[task: string]: any;
	};
	tempDirectory: string;
}>) => JsReporter;

declare const JsReport: JsReportStatic;

export = JsReport;
