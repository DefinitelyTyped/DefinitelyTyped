// Type definitions for jsreport-docx 2.8
// Project: https://github.com/jsreport/jsreport-docx
// Definitions by: pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ExtensionDefinition } from 'jsreport-core';

declare module 'jsreport-core' {
    interface Template {
        docx?: JsReportDocx.DocxTemplate;
    }
}

declare namespace JsReportDocx {
    interface Configuration {
        preview?: {
            enabled: true;
            publicUri: string;
            showWarning: false;
        };
    }

    interface DocxTemplate {
        templateAsetShortid?: string;
        templateAsset?: {
            content: string;
            encoding: string;
        };
    }
}

declare function JSReportDocx(cfg?: JsReportDocx.Configuration): ExtensionDefinition;

export = JSReportDocx;
