// Type definitions for jsreport-xlsx 1.4
// Project: https://github.com/jsreport/jsreport-xlsx
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ExtensionDefinition } from 'jsreport-core';

declare module 'jsreport-core' {
    interface Template {
        recipe: 'xlsx' | string;
    }
}

declare namespace JsReportXlsx {
    interface Xlsx {
        shortid: string;
    }

    interface Options {
        addBufferSize: number;
        escapeAmp: boolean;
        numberOfParsedAddIterations: number;
    }
}

declare function JsReportXlsx(options?: Partial<JsReportXlsx.Options>): ExtensionDefinition;

export = JsReportXlsx;
