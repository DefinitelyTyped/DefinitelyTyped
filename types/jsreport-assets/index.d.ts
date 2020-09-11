// Type definitions for jsreport-assets 1.7
// Project: https://github.com/jsreport/jsreport-assets
// Definitions by: pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ExtensionDefinition } from 'jsreport-core';

declare namespace JsReportAssets {
    interface Configuration {
        allowedFiles?: string;
        searchOnDiskIfNotFoundInStore?: boolean;
        rootUrlForLinks?: string;
        publicAccessEnabled?: boolean;
    }
}

declare function JsReportAssets(cfg?: JsReportAssets.Configuration): ExtensionDefinition;

export = JsReportAssets;
