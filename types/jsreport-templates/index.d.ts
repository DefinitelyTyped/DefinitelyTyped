// Type definitions for jsreport-templates 2.4
// Project: https://github.com/jsreport/jsreport-templates
// Definitions by: pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ExtensionDefinition } from 'jsreport-core';

declare module 'jsreport-core' {
    interface Template {
        name?: string;
    }
}

declare function JsReportTemplates(): ExtensionDefinition;

export = JsReportTemplates;
