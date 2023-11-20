import { ExtensionDefinition, Template } from "jsreport-core";

declare namespace JsReportScripts {
    interface TemplateScript {
        shortid?: string | undefined;
        name?: string | undefined;
        content?: string | undefined;
    }

    interface Configuration {
        allowedModules?: string[] | "*" | undefined;
    }

    interface ScriptsTemplate extends Template {
        scripts?: TemplateScript[] | undefined;
    }
}

declare module "jsreport-core" {
    interface TemplateRegistry {
        ScriptsTemplate: JsReportScripts.ScriptsTemplate;
    }
}

declare function JsReportScripts(cfg?: JsReportScripts.Configuration): ExtensionDefinition;

export = JsReportScripts;
