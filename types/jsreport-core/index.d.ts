// Type definitions for jsreport-core 1.5
// Project: http://jsreport.net
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

declare namespace JsReport {
	type Helpers = string | { [fun: string]: (...args: any[]) => any };

	const enum Engine {
		None = "none"
	}

	const enum Recipe {
		Html = "html"
	}

	interface Template {
		content: string;
		engine: Engine | string;
		helpers: Helpers;
		recipe: Recipe | string;
	}

	interface Request {
		template: Partial<Template>;
		options: object;
		data: any;
	}

	interface Response {
		content: Buffer;
		stream: NodeJS.ReadableStream;
		headers: {
			[header: string]: string | number | boolean;
		};
	}

	interface ListenerCollection {
		add(
			type: string,
			callback: (req: Request, res: Response, err?: any) => Promise<any> | void
		): void;
	}

	interface Collection {
		find(query: { [field: string]: any }): Promise<object[]>;
		update(query: { [field: string]: any }, update: object, options?: object): Promise<any>;
		remove(query: { [field: string]: any }): Promise<any>;
		insert(obj: object): Promise<object>;
	}

	interface DocumentStore {
		collection(name: string): Collection;
	}

	type Extension = (reporter: Reporter, definition: object) => void;

	interface ExtensionDefinition {
		options: any;
		main: any;
		directory: string;
	}

	interface Reporter {
		use(extension: Extension | ExtensionDefinition): Reporter;
	}

	interface Reporter {
		afterRenderListeners: ListenerCollection;
		afterTemplatingEnginesExecutedListeners: ListenerCollection;
		beforeRenderListeners: ListenerCollection;
		documentStore: DocumentStore;
		initializeListeners: ListenerCollection;
		// it would be nice to add winston.LoggerInstance here
		// however adding import winston = require('winston') breaks exported enums
		logger: any;
		validateRenderListeners: ListenerCollection;
		version: string;
		init(): Promise<Reporter>;
		render(options: Partial<Request>): Promise<Response>;
		discover(): Reporter;
		createListenerCollection(): ListenerCollection;
	}

	const enum TasksStrategy {
		DedicatedProcess = "dedicated-process",
		HttpServer = "http-server",
		InProcess = "in-process"
	}

	interface Configuration {
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
		tasks: Partial<{
			allowedModules: string[] | string;
			strategy: TasksStrategy;
		}>;
		tempDirectory: string;
	}

	// without exporting enum, it doesn't include the require('jsreport-core') in the test.js for some reason
	// help welcome
	export enum Foo { }
}

declare function JsReport(
	config?: Partial<JsReport.Configuration>
): JsReport.Reporter;

declare module "jsreport-core" {
	export = JsReport;
}

declare namespace JsReport {
	const enum Engine {
		JsRender = 'jsrender'
	}
}

declare namespace JsReportJsrender {
	// without exporting enum, it doesn't include the require('jsreport-core') in the test.js for some reason
	// help welcome
	export enum Foo { }
}

declare function JsReportJsrender(): JsReport.ExtensionDefinition;

declare module 'jsreport-jsrender' {
	export = JsReportJsrender;
}

declare namespace JsReport {
	const enum Recipe {
		PhantomPdf = 'phantom-pdf'
	}

	interface Margin {
		left: number | string;
		right: number | string;
		top: number | string;
		bottom: number | string;
	}

	interface Phantom {
		margin: string | Margin;
		header: string;
		footer: string;
		width: string;
		height: string;
		headerHeight: string;
		footerHeight: string;
		format: string;
		orientation: 'portrait' | 'landscape';
		blockJavaScript: boolean;
		resourceTimeout: number;
		waitForJS: boolean;
		fitToPage: boolean;
		customPhantomJS: boolean;
		phantomjsVersion: string;
	}

	interface Template {
		phantom?: Partial<Phantom>;
	}
}

declare namespace JsReportPhantomPdf {
	const enum PhantomStrategy {
		dedicatedProcess = 'dedicated-process',
		phantomServer = 'phantom-server'
	}

	interface Options {
		allowLocalFilesAccess: boolean;
		// appDirectory: string;
		defaultPhantomjsVersion: string;
		strategy: PhantomStrategy;
		timeout: number;
	}

	// without exporting enum, it doesn't include the require('jsreport-core') in the test.js for some reason
	// help welcome
	export enum Foo { }
}

declare function JsReportPhantomPdf(options?: Partial<JsReportPhantomPdf.Options>): JsReport.ExtensionDefinition;

declare module 'jsreport-phantom-pdf' {
	export = JsReportPhantomPdf;
}

declare namespace JsReport {
	const enum Recipe {
		Xlsx = 'xlsx'
	}

	interface Xlsx {
		shortid: string;
	}

	interface Template {
		xlsxTemplate: Partial<Xlsx>;
	}
}

declare namespace JsReportXlsx {
	interface Options {
		addBufferSize: number;
		escapeAmp: boolean;
		numberOfParsedAddIterations: number;
	}

	// without exporting enum, it doesn't include the require('jsreport-core') in the test.js for some reason
	// help welcome
	export enum Foo { }
}

declare function JsReportXlsx(options?: Partial<JsReportXlsx.Options>): JsReport.ExtensionDefinition;

declare module 'jsreport-xlsx' {
	export = JsReportXlsx;
}

declare namespace JsReport {
	const enum Recipe {
		Html2Xlsx = 'html-to-xlsx'
	}
}

declare namespace JsReportHtml2Xlsx {
	interface Options extends JsReportXlsx.Options {
		strategy: string;
	}

	// without exporting enum, it doesn't include the require('jsreport-core') in the test.js for some reason
	// help welcome
	export enum Foo { }
}

declare function JsReportHtml2Xlsx(options?: Partial<JsReportHtml2Xlsx.Options>): JsReport.ExtensionDefinition;

declare module 'jsreport-html-to-xlsx' {
	export = JsReportHtml2Xlsx;
}
