import { ExtensionDefinition, Template } from "jsreport-core";

declare namespace JsReportXlsx {
    interface Xlsx {
        shortid: string;
    }

    interface Options {
        addBufferSize: number;
        escapeAmp: boolean;
        numberOfParsedAddIterations: number;
    }
    interface XlsxTemplate extends Template {
        recipe: "xlsx" | string;
    }
}

declare module "jsreport-core" {
    interface TemplateRegistry {
        XlsxTemplate: JsReportXlsx.XlsxTemplate;
    }
}

declare function JsReportXlsx(options?: Partial<JsReportXlsx.Options>): ExtensionDefinition;

export = JsReportXlsx;
