// Type definitions for Angularized HTML Reporter with Screenshots for Protractor 1.3
// Project: https://github.com/Evilweed/protractor-beautiful-reporter
// Definitions by: Adam Kwiatek <https://github.com/akwiatek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import jasmine = require('jasmine');

export = HtmlReporter;

declare class HtmlReporter {
    constructor(options: HtmlReporter.HtmlReporterConstructorOptions);
    getJasmine2Reporter(): jasmine.CustomReporter;
}

declare namespace HtmlReporter {
    interface HtmlReporterConstructorOptions {
        baseDirectory: string;
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
        showTotalDurationIn?: 'header' | 'belowHeader' | 'footer';
        totalDurationFormat?: 'h' | 'm' | 's' | 'hm' | 'h:m' | 'hms' | 'h:m:s' | 'ms';
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

    interface MetaData {
        instanceId: number;
        description: string;
        timestamp: number;
    }
}
