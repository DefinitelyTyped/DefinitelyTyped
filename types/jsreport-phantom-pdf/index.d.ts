// Type definitions for jsreport-phantom-pdf 1.4
// Project: https://github.com/jsreport/jsreport-phantom-pdf
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ExtensionDefinition } from 'jsreport-core';

declare module 'jsreport-core' {
	interface Template {
		phantom?: Partial<JsReportPhantomPdf.Phantom>;
		recipe: 'phantom-pdf' | string;
	}
}

declare namespace JsReportPhantomPdf {
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

	// const enum PhantomStrategy {
	//   dedicatedProcess = 'dedicated-process',
	//   phantomServer = 'phantom-server'
	// }

	interface Options {
		allowLocalFilesAccess: boolean;
		// appDirectory: string;
		defaultPhantomjsVersion: string;
		strategy: 'dedicated-process' | 'phantom-server';
		timeout: number;
	}

	// without exporting enum, it doesn't include the require('jsreport-core') in the test.js for some reason
	// help welcome
	// export enum Foo { }
}

declare function JsReportPhantomPdf(options?: Partial<JsReportPhantomPdf.Options>): ExtensionDefinition;

export = JsReportPhantomPdf;
