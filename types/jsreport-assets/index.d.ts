// Type definitions for jsreport-assets 1.7
// Project: https://github.com/jsreport/jsreport-assets
// Definitions by: pofider <https://github.com/pofider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ExtensionDefinition } from "jsreport-core";

declare namespace JsReportAssets {
    interface Configuration {
        allowedFiles?: string | undefined;
        searchOnDiskIfNotFoundInStore?: boolean | undefined;
        rootUrlForLinks?: string | undefined;
        publicAccessEnabled?: boolean | undefined;
    }
}

declare function JsReportAssets(cfg?: JsReportAssets.Configuration): ExtensionDefinition;

export = JsReportAssets;
