// Type definitions for jsreport-docx 2.8
// Project: https://github.com/jsreport/jsreport-docx
// Definitions by: pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ExtensionDefinition, TemplateBase } from 'jsreport-core';

declare namespace JsReportDocx {
    interface DocxTemplateModifier extends TemplateBase {
        docx?: DocxTemplate;
    }

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

declare module 'jsreport-core' {
    interface TemplateRegistry {
        DocxTemplateModifier: JsReportDocx.DocxTemplateModifier;
    }
}

declare function JSReportDocx(cfg?: JsReportDocx.Configuration): ExtensionDefinition;

export = JSReportDocx;
