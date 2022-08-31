// Type definitions for Jasmine Reporters 2.5
// Project: https://github.com/larrymyers/jasmine-reporters
// Definitions by: Adam Kwiatek <https://github.com/akwiatek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import jasmine = require('jasmine');

// tslint:disable-next-line:no-unnecessary-class
export class AppVeyorReporter implements jasmine.CustomReporter {
    constructor(options?: AppVeyorReporter.ConstructorOptions);
}

export namespace AppVeyorReporter {
    interface ConstructorOptions {
        batchSize?: number;
        color?: boolean;
        verbosity?: 0 | 1 | 2;
    }
}

// tslint:disable-next-line:no-unnecessary-class
export class JUnitXmlReporter implements jasmine.CustomReporter {
    constructor(options?: JUnitXmlReporter.ConstructorOptions);
}

export namespace JUnitXmlReporter {
    interface ConstructorOptions {
        captureStdout?: boolean;
        consolidate?: boolean;
        consolidateAll?: boolean;
        filePrefix?: string;
        modifyReportFileName?: (reportFileName: string, suite: jasmine.SuiteResult) => string;
        modifySuiteName?: (suiteName: string, suite: jasmine.SuiteResult) => string;
        package?: boolean | string | string[];
        savePath?: string;
        stylesheetPath?: boolean | string;
        suppressDisabled?: boolean;
        systemOut?: (spec: jasmine.SpecResult, suiteName: string) => string;
        useDotNotation?: boolean;
        useFullTestName?: boolean;
    }
}

// tslint:disable-next-line:no-unnecessary-class
export class NUnitXmlReporter implements jasmine.CustomReporter {
    constructor(options?: NUnitXmlReporter.ConstructorOptions);
}

export namespace NUnitXmlReporter {
    interface ConstructorOptions {
        filename?: string;
        reportName?: string;
        savePath?: string;
    }
}

export class TapReporter implements jasmine.CustomReporter {}

// tslint:disable-next-line:no-unnecessary-class
export class TeamCityReporter implements jasmine.CustomReporter {
    constructor(options?: TeamCityReporter.ConstructorOptions);
}

export namespace TeamCityReporter {
    interface ConstructorOptions {
        modifySuiteName?: (suiteName: string, suite: jasmine.SuiteResult) => string;
    }
}

// tslint:disable-next-line:no-unnecessary-class
export class TerminalReporter implements jasmine.CustomReporter {
    constructor(options?: TerminalReporter.ConstructorOptions);
}

export namespace TerminalReporter {
    interface ConstructorOptions {
        color?: boolean;
        showStack?: boolean;
        verbosity?: 0 | 1 | 2 | 3;
    }
}
