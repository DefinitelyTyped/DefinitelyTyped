import { ExtensionDefinition, Template } from "jsreport-core";

declare namespace JsReportJsrender {
    interface JsRenderTemplate extends Template {
        engine: "jsrender" | string;
    }
}

declare module "jsreport-core" {
    interface TemplateRegistry {
        JsRenderTemplate: JsReportJsrender.JsRenderTemplate;
    }
}

declare function JsReportJsrender(): ExtensionDefinition;

export = JsReportJsrender;
