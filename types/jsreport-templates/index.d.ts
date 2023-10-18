import { ExtensionDefinition, TemplateBase } from "jsreport-core";

declare namespace JsReportTemplates {
    interface NamedTemplate extends TemplateBase {
        name?: string | undefined;
    }
}

declare module "jsreport-core" {
    interface TemplateRegistry {
        NamedTemplate: JsReportTemplates.NamedTemplate;
    }
}

declare function JsReportTemplates(): ExtensionDefinition;

export = JsReportTemplates;
