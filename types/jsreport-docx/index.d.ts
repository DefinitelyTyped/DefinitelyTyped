import { ExtensionDefinition, TemplateBase } from "jsreport-core";

declare namespace JsReportDocx {
    interface DocxTemplateModifier extends TemplateBase {
        docx?: DocxTemplate | undefined;
    }

    interface Configuration {
        preview?: {
            enabled: true;
            publicUri: string;
            showWarning: false;
        } | undefined;
    }

    interface DocxTemplate {
        templateAsetShortid?: string | undefined;
        templateAsset?: {
            content: string;
            encoding: string;
        } | undefined;
    }
}

declare module "jsreport-core" {
    interface TemplateRegistry {
        DocxTemplateModifier: JsReportDocx.DocxTemplateModifier;
    }
}

declare function JSReportDocx(cfg?: JsReportDocx.Configuration): ExtensionDefinition;

export = JSReportDocx;
