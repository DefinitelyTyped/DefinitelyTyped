import { ExtensionDefinition, Template } from "jsreport-core";

declare namespace JsReportHtmlEmbeddedInDocx {
    interface HtmlEmbeddedInDocxTemplate extends Template {
        recipe: "html-embedded-in-docx" | string;
    }
}

declare module "jsreport-core" {
    interface TemplateRegistry {
        HtmlEmbeddedInDocxTemplate: JsReportHtmlEmbeddedInDocx.HtmlEmbeddedInDocxTemplate;
    }
}
declare function JsReportHtmlEmbeddedInDocx(): ExtensionDefinition;

export = JsReportHtmlEmbeddedInDocx;
