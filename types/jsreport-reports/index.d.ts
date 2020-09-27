// Type definitions for jsreport-reports 2.5
// Project: https://github.com/jsreport/jsreport-reports
// Definitions by: pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ExtensionDefinition } from 'jsreport-core';

declare module 'jsreport-core' {
    interface Options {
        reports?: JsReportReports.ReportsOptions;
    }
}

declare namespace JsReportReports {
    interface Configuration {
        cleanInterval?: string;
        cleanTreshold?: string;
    }

    interface ReportsOptions {
        save?: boolean;
        async?: boolean;
        public?: boolean;
    }
}

declare function JsReportReports(cfg?: JsReportReports.Configuration): ExtensionDefinition;

export = JsReportReports;
