// Type definitions for jsreport-scripts 2.6
// Project: https://github.com/jsreport/jsreport-scripts
// Definitions by: pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ExtensionDefinition } from 'jsreport-core';

declare module 'jsreport-core' {
    interface Template {
        scripts?: JsReportScripts.TemplateScript[];
    }
}

declare namespace JsReportScripts {
    interface TemplateScript {
        shortid?: string;
        name?: string;
        content?: string;
    }

    interface Configuration {
        allowedModules?: string[] | "*";
    }
}

declare function JsReportScripts(cfg?: JsReportScripts.Configuration): ExtensionDefinition;

export = JsReportScripts;
