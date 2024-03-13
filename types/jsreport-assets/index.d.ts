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
