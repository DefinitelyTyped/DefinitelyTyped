// Type definitions for jsreport-jsrender 1.0
// Project: https://github.com/jsreport/jsreport-jsrender
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ExtensionDefinition, Template } from 'jsreport-core';

declare namespace JsReportJsrender {
    interface JsRenderTemplate extends Template {
        engine: 'jsrender' | string;
    }
}

declare module 'jsreport-core' {
    interface TemplateRegistry {
        JsRenderTemplate: JsReportJsrender.JsRenderTemplate;
    }
}

declare function JsReportJsrender(): ExtensionDefinition;

export = JsReportJsrender;
