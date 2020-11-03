// Type definitions for jsreport-pdf-utils 1.9
// Project: https://github.com/jsreport/jsreport-pdf-utils
// Definitions by: pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ExtensionDefinition, Template } from 'jsreport-core';

declare module 'jsreport-core' {
    interface Template {
        pdfOperations?: JsReportPdfUtils.PdfOperation[];
        pdfMeta?: JsReportPdfUtils.PdfMeta;
        pdfSign?: JsReportPdfUtils.PdfSign;
        pdfPassword?: JsReportPdfUtils.PdfPassword;
    }
}

declare namespace JsReportPdfUtils {
    interface PdfOperation {
        type: "merge" | "append" | "prepend";
        mergeWholeDocument?: boolean;
        renderForEveryPage?: boolean;
        templateShortid?: string;
        template?: Template;
    }

    interface PdfMeta {
        title?: string;
        author?: string;
        subject?: string;
        keywords?: string;
        creator?: string;
        producer?: string;
    }

    interface PdfSign {
        certificateAsset: {
            contrent: string;
            encoding: string;
            password: string;
        };
        reason: string;
    }

    interface PdfPassword {
        password: string;
        ownerPassword: string;
        printing: "HighResolution" | "NotAllowed" | "LowResolution";
        modifying: boolean;
        copying: boolean;
        fillingForms: boolean;
        contentAccessibility: boolean;
        documentAssembly: true;
    }
}

declare function JSReportPdfUtils(): ExtensionDefinition;

export = JSReportPdfUtils;
