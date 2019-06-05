// Type definitions for jsreport-jsrender 1.0
// Project: https://github.com/jsreport/jsreport-jsrender
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ExtensionDefinition } from 'jsreport-core';

declare module 'jsreport-core' {
    interface Template {
        engine: 'jsrender' | string;
    }
}

declare function JsReportJsrender(): ExtensionDefinition;

export = JsReportJsrender;
