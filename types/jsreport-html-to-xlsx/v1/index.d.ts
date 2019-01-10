// Type definitions for jsreport-html-to-xlsx 1.4
// Project: https://github.com/jsreport/jsreport-html-to-xlsx
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ExtensionDefinition } from 'jsreport-core';
import { Options as BaseOptions } from 'jsreport-xlsx';

declare module 'jsreport-core' {
	interface Template {
		recipe: 'html-to-xlsx' | string;
	}
}

declare namespace JsReportHtml2Xlsx {
	interface Options extends BaseOptions {
		strategy: string;
	}
}

declare function JsReportHtml2Xlsx(options?: Partial<JsReportHtml2Xlsx.Options>): ExtensionDefinition;

export = JsReportHtml2Xlsx;
