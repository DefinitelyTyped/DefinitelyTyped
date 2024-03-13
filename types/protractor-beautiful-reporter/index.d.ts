import jasmine = require("jasmine");
import { Capabilities } from "selenium-webdriver";

export = HtmlReporter;

declare class HtmlReporter {
    constructor(options: HtmlReporter.HtmlReporterConstructorOptions);
    getJasmine2Reporter(): jasmine.CustomReporter;
    jasmine2MetaDataBuilder(
        spec: null,
        descriptions: string[],
        result: jasmine.SpecResult,
        capabilities: Capabilities,
    ): HtmlReporter.StubMetaData;
}

declare namespace HtmlReporter {
    interface HtmlReporterConstructorOptions {
        baseDirectory: string;
        pathBuilder?: (
            spec: null,
            descriptions: string[],
            result: jasmine.SpecResult,
            capabilities: Capabilities,
        ) => string;
        jasmine2MetaDataBuilder?: HtmlReporter["jasmine2MetaDataBuilder"];
        screenshotsSubfolder?: string;
        jsonsSubfolder?: string;
        excludeSkippedSpecs?: boolean;
        takeScreenShotsForSkippedSpecs?: boolean;
        takeScreenShotsOnlyForFailedSpecs?: boolean;
        disableScreenshots?: boolean;
        docTitle?: string;
        docName?: string;
        cssOverrideFile?: string;
        customCssInline?: string;
        preserveDirectory?: boolean;
        gatherBrowserLogs?: boolean;
        clientDefaults?: ClientDefaults;
        sortFunction?: (a: MetaData, b: MetaData) => number;
    }

    interface ClientDefaults {
        searchSettings?: SearchSettings;
        columnSettings?: ColumnSettings;
        showTotalDurationIn?: "header" | "belowHeader" | "footer";
        totalDurationFormat?: "h" | "m" | "s" | "hm" | "h:m" | "hms" | "h:m:s" | "ms";
        useAjax?: boolean;
    }

    interface SearchSettings {
        allselected?: boolean;
        passed?: boolean;
        failed?: boolean;
        pending?: boolean;
        withLog?: boolean;
    }

    interface ColumnSettings {
        displayTime?: boolean;
        displayBrowser?: boolean;
        displaySessionId?: boolean;
        displayOS?: boolean;
        inlineScreenshots?: boolean;
        warningTime?: number;
        dangerTime?: number;
    }

    interface StubMetaData {
        description: string;
        passed: boolean;
        pending: boolean;
        os: string;
        sessionId: string;
        instanceId: number;
        browser: {
            name: string;
            version: string;
        };
    }

    interface MetaData extends StubMetaData {
        timestamp: number;
        duration: number;
        screenShotFile?: string;
    }
}
