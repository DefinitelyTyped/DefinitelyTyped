import { ExtensionDefinition, Template } from "jsreport-core";

declare namespace JsReportPdfUtils {
    interface PdfOperation {
        type: "merge" | "append" | "prepend";
        mergeWholeDocument?: boolean | undefined;
        renderForEveryPage?: boolean | undefined;
        templateShortid?: string | undefined;
        template?: Template | undefined;
    }

    interface PdfMeta {
        title?: string | undefined;
        author?: string | undefined;
        subject?: string | undefined;
        keywords?: string | undefined;
        creator?: string | undefined;
        producer?: string | undefined;
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

    interface PdfTemplate extends Template {
        pdfOperations?: PdfOperation[] | undefined;
        pdfMeta?: PdfMeta | undefined;
        pdfSign?: PdfSign | undefined;
        pdfPassword?: PdfPassword | undefined;
    }
}

declare module "jsreport-core" {
    interface TemplateRegistry {
        PdfTemplate: JsReportPdfUtils.PdfTemplate;
    }
}

declare function JsReportPdfUtils(): ExtensionDefinition;

export = JsReportPdfUtils;
