// Type definitions for jsreport-html-embedded-in-docx 1.0
// Project: https://github.com/jsreport/jsreport-html-embedded-in-docx
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ExtensionDefinition } from 'jsreport-core';

declare module 'jsreport-core' {
	interface Template {
		recipe: 'html-embedded-in-docx' | string;
	}
}

declare function JsReportHtmlEmbeddedInDocx(): ExtensionDefinition;

export = JsReportHtmlEmbeddedInDocx;
