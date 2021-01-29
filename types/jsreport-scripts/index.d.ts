// Type definitions for jsreport-scripts 2.6
// Project: https://github.com/jsreport/jsreport-scripts
// Definitions by: pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ExtensionDefinition, Template } from 'jsreport-core';

declare namespace JsReportScripts {
    interface TemplateScript {
        shortid?: string;
        name?: string;
        content?: string;
    }

    interface Configuration {
        allowedModules?: string[] | "*";
    }

    interface ScriptsTemplate extends Template {
        scripts?: TemplateScript[];
    }
}

declare module 'jsreport-core' {
    interface TemplateRegistry {
        ScriptsTemplate: JsReportScripts.ScriptsTemplate;
    }
}

declare function JsReportScripts(cfg?: JsReportScripts.Configuration): ExtensionDefinition;

export = JsReportScripts;
