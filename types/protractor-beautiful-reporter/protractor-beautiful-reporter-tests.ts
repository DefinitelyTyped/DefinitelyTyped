import HtmlReporter = require('protractor-beautiful-reporter');
import { Capabilities } from 'selenium-webdriver';

// https://github.com/Evilweed/protractor-beautiful-reporter/blob/master/README.md

// Jasmine 2.x
jasmine.getEnv().addReporter(
    new HtmlReporter({
        baseDirectory: 'tmp/screenshots',
    }).getJasmine2Reporter(),
);

// Base Directory (mandatory)
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
});

// Path Builder (optional)
const path = {
    join: (...paths: readonly string[]) => paths.join('/'),
};

new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    pathBuilder(spec, descriptions, results, capabilities) {
        // Return '<browser>/<specname>' as path for screenshots:
        // Example: 'firefox/list-should work'.
        return path.join('firefox' /*capabilities.caps_.browser*/, descriptions.join('-'));
    },
});

// Jasmine2 Meta Data Builder (optional)
const originalJasmine2MetaDataBuilder = new HtmlReporter({ baseDirectory: './' })['jasmine2MetaDataBuilder'];
jasmine.getEnv().addReporter(
    new HtmlReporter({
        baseDirectory: 'tmp/screenshots',
        jasmine2MetaDataBuilder(spec, descriptions, results, capabilities) {
            // filter for pendings with pending() function and "unfail" them
            if (
                results &&
                results.failedExpectations &&
                results.failedExpectations.length > 0 &&
                'Failed: => marked Pending' === results.failedExpectations[0].message
            ) {
                results.pendingReason = 'Marked Pending with pending()';
                results.status = 'pending';
                results.failedExpectations = [];
            }
            // call the original method after my own mods
            return originalJasmine2MetaDataBuilder(spec, descriptions, results, capabilities);
        },
        preserveDirectory: false,
    }).getJasmine2Reporter(),
);

// Screenshots Subfolder (optional)
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    screenshotsSubfolder: 'images',
});

// JSONs Subfolder (optional)
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    jsonsSubfolder: 'jsons',
});

// Sort function (optional)
interface SortableMetaData extends HtmlReporter.MetaData {
    cachedBase?: string[];
    cachedName?: string;
}

new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    sortFunction(a: SortableMetaData, b: SortableMetaData) {
        if (a.cachedBase === undefined) {
            const aTemp = a.description.split('|').reverse();
            a.cachedBase = aTemp.slice(0).slice(0, -1);
            a.cachedName = aTemp.slice(0).join('');
        }
        if (b.cachedBase === undefined) {
            const bTemp = b.description.split('|').reverse();
            b.cachedBase = bTemp.slice(0).slice(0, -1);
            b.cachedName = bTemp.slice(0).join('');
        }

        const firstBase = a.cachedBase;
        const secondBase = b.cachedBase;

        for (let i = 0; i < firstBase.length || i < secondBase.length; i++) {
            if (firstBase[i] === undefined) {
                return -1;
            }
            if (secondBase[i] === undefined) {
                return 1;
            }
            if (firstBase[i].localeCompare(secondBase[i]) === 0) {
                continue;
            }
            return firstBase[i].localeCompare(secondBase[i]);
        }

        const firstTimestamp = a.timestamp;
        const secondTimestamp = b.timestamp;

        if (firstTimestamp < secondTimestamp) return -1;
        else return 1;
    },
});

new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    sortFunction(a, b) {
        if (a.instanceId < b.instanceId) return -1;
        else if (a.instanceId > b.instanceId) return 1;

        if (a.timestamp < b.timestamp) return -1;
        else if (a.timestamp > b.timestamp) return 1;

        return 0;
    },
});

// Exclude report for skipped test cases (optional)
new HtmlReporter({
    baseDirectory: `tmp/screenshots`,
    excludeSkippedSpecs: true,
});

// Screenshots for skipped test cases (optional)
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    takeScreenShotsForSkippedSpecs: true,
});

// Screenshots only for failed test cases (optional)
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    takeScreenShotsOnlyForFailedSpecs: true,
});

// Disable all screenshots
new HtmlReporter({
    baseDirectory: 'tmp/reports',
    disableScreenshots: true,
});

// Add title for the html report (optional)
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    docTitle: 'my reporter',
});

// Change html report file name (optional)
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    docName: 'index.html',
});

// Option to override CSS file used in reporter (optional)
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    cssOverrideFile: 'css/style.css',
});

// Add custom css inline
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    customCssInline: `
.mediumColumn:not([ng-class]) {
    white-space: pre-wrap;
}
`,
});

// Preserve base directory (optional)
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    preserveDirectory: false,
});

// Store Browser logs (optional)
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    gatherBrowserLogs: false,
});

// Customize default search settings
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    clientDefaults: {
        searchSettings: {
            allselected: false,
            passed: false,
            failed: true,
            pending: true,
            withLog: true,
        },
    },
});

// Customize default column settings
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    clientDefaults: {
        columnSettings: {
            displayTime: true,
            displayBrowser: false,
            displaySessionId: false,
            displayOS: false,
            inlineScreenshots: false,
        },
    },
});

// time values for coloring the time column.
new HtmlReporter({
    baseDirectory: 'tmp/screenshots',
    clientDefaults: {
        columnSettings: {
            warningTime: 1000,
            dangerTime: 1500,
        },
    },
});

// Show total duration of test execution
new HtmlReporter({
    baseDirectory: 'reports',
    clientDefaults: {
        showTotalDurationIn: 'header',
        totalDurationFormat: 'hms',
    },
});

// Load spec results via ajax
new HtmlReporter({
    baseDirectory: 'reports',
    clientDefaults: {
        useAjax: true,
    },
});

// https://github.com/Evilweed/protractor-beautiful-reporter/tree/master/examples/

// protractor.jasmine2.with.sharding.sort2.conf.js
jasmine.getEnv().addReporter(
    new HtmlReporter({
        preserveDirectory: true,
        takeScreenShotsOnlyForFailedSpecs: true,
        screenshotsSubfolder: 'images',
        jsonsSubfolder: 'jsons',
        baseDirectory: 'reports-tmp',
        pathBuilder(spec, descriptions, results, capabilities) {
            // Return '<30-12-2016>/<browser>/<specname>' as path for screenshots:
            // Example: '30-12-2016/firefox/list-should work'.
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear();

            const validDescriptions = descriptions.map(description => {
                return description.replace('/', '@');
            });

            return path.join(
                `${day}-${month}-${year}`,
                // capabilities.get('browserName'),
                validDescriptions.join('-'),
            );
        },
        sortFunction(a, b) {
            if (a.sessionId < b.sessionId) return -1;
            else if (a.sessionId > b.sessionId) return 1;

            if (a.timestamp < b.timestamp) return -1;
            else if (a.timestamp > b.timestamp) return 1;

            return 0;
        },
    }).getJasmine2Reporter(),
);

// https://github.com/Evilweed/protractor-beautiful-reporter/blob/master/app/reporter.js
function app_reporter_js() {
    const screenshotReporter: HtmlReporter.HtmlReporterConstructorOptions = { baseDirectory: 'tmp/screenshots' };
    const descriptions = ['description'];
    const result: jasmine.SpecResult = {
        passedExpectations: [],
        pendingReason: 'text',
        debugLogs: [],
        id: 'text',
        description: 'text',
        fullName: 'text',
        failedExpectations: [],
        deprecationWarnings: [],
        status: 'text',
        duration: 0,
        properties: {},
    };
    const capabilities = new Capabilities();

    // app/reporter.js always passes a null spec.
    const baseName = screenshotReporter.pathBuilder?.(null, descriptions, result, capabilities);
    const metaData = screenshotReporter.jasmine2MetaDataBuilder?.(null, descriptions, result, capabilities);
}
