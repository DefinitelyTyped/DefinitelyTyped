// Type definitions for jsreport-reports 2.5
// Project: https://github.com/jsreport/jsreport-reports
// Definitions by: pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ExtensionDefinition } from "jsreport-core";

declare module "jsreport-core" {
    interface RequestOptions {
        reports?: JsReportReports.ReportsOptions | undefined;
    }
}

declare namespace JsReportReports {
    interface Configuration {
        cleanInterval?: string | undefined;
        cleanTreshold?: string | undefined;
    }

    interface ReportsOptions {
        save?: boolean | undefined;
        async?: boolean | undefined;
        public?: boolean | undefined;
    }
}

declare function JsReportReports(cfg?: JsReportReports.Configuration): ExtensionDefinition;

export = JsReportReports;
