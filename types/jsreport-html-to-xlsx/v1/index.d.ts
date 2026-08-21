import { ExtensionDefinition, Template } from "jsreport-core";
import { Options as BaseOptions } from "jsreport-xlsx";

declare namespace JsReportHtml2Xlsx {
    interface Options extends BaseOptions {
        strategy: string;
    }
    interface Html2XlsxTemplate extends Template {
        recipe: "html-to-xlsx" | string;
    }
}

declare module "jsreport-core" {
    interface TemplateRegistry {
        Html2XlsxTemplate: JsReportHtml2Xlsx.Html2XlsxTemplate;
    }
}

declare function JsReportHtml2Xlsx(options?: Partial<JsReportHtml2Xlsx.Options>): ExtensionDefinition;

export = JsReportHtml2Xlsx;
