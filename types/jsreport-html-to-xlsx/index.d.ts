// Type definitions for jsreport-html-to-xlsx 2.0
// Project: https://github.com/jsreport/jsreport-html-to-xlsx
// Definitions by: Tao Quifeng <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ExtensionDefinition, Template } from 'jsreport-core';
import { Options as BaseOptions } from 'jsreport-xlsx';

declare namespace JsReportHtml2Xlsx {
    type htmlEngine = 'phantom' | 'chrome';

    interface Html2XlsxTemplate extends Template {
        htmlToXlsx: { htmlEngine: htmlEngine; };
        recipe: 'html-to-xlsx' | string;
    }

    interface Options extends BaseOptions {
        strategy: string;
    }
}

declare module 'jsreport-core' {
    interface TemplateRegistry {
        Html2XlsxTemplate: JsReportHtml2Xlsx.Html2XlsxTemplate;
    }
}

declare function JsReportHtml2Xlsx(options?: Partial<JsReportHtml2Xlsx.Options>): ExtensionDefinition;

export = JsReportHtml2Xlsx;
