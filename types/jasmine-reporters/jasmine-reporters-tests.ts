import jasmineReporters = require('jasmine-reporters');

// https://github.com/larrymyers/jasmine-reporters/tree/master/examples/

function appveyor_reporter_html() {
    jasmine.getEnv().addReporter(new jasmineReporters.AppVeyorReporter());
}

function junit_xml_reporter_html() {
    jasmine.getEnv().addReporter(
        new jasmineReporters.JUnitXmlReporter({
            savePath: '..',
            consolidateAll: false,
        }),
    );
}

function nunit_xml_reporter_html() {
    jasmine.getEnv().addReporter(new jasmineReporters.NUnitXmlReporter({ savePath: '..' }));
}

function tap_reporter_html() {
    jasmine.getEnv().addReporter(new jasmineReporters.TapReporter());
}

function teamcity_reporter_html() {
    jasmine.getEnv().addReporter(new jasmineReporters.TeamCityReporter());
}

function terminal_reporter_html() {
    jasmine.getEnv().addReporter(
        new jasmineReporters.TerminalReporter({
            verbosity: 3,
            color: true,
            showStack: true,
        }),
    );
}

// https://github.com/larrymyers/jasmine-reporters/blob/master/spec/

function JUnitXmlReporterSpec_js() {
    const modification = '-modified';
    const suite: jasmine.SuiteResult = {
        id: 'text',
        description: 'text',
        fullName: 'text',
        failedExpectations: [],
        deprecationWarnings: [],
        status: 'text',
        duration: null,
        properties: null,
    };

    function setupReporterWithOptions(options?: jasmineReporters.JUnitXmlReporter.ConstructorOptions) {
        new jasmineReporters.JUnitXmlReporter(options);
    }

    setupReporterWithOptions();
    setupReporterWithOptions({
        consolidateAll: false,
    });
    setupReporterWithOptions({
        consolidateAll: false,
        filePrefix: 'alt-prefix-',
    });
    setupReporterWithOptions({ package: true });
    setupReporterWithOptions({ package: ['test'] });
    setupReporterWithOptions({ package: 'testPackage' });
    setupReporterWithOptions({ stylesheetPath: true });
    setupReporterWithOptions({ stylesheetPath: '' });
    setupReporterWithOptions({ stylesheetPath: 'mystyle.xslt' });
    setupReporterWithOptions({ consolidate: false, stylesheetPath: 'mystyle.xslt' });
    setupReporterWithOptions({ consolidateAll: true });
    setupReporterWithOptions({ consolidateAll: true, filePrefix: 'results' });
    setupReporterWithOptions({ consolidateAll: false, consolidate: true, filePrefix: 'results-' });
    setupReporterWithOptions({ consolidateAll: true, consolidate: false, filePrefix: 'results-' });
    setupReporterWithOptions({ consolidateAll: true, consolidate: true });
    setupReporterWithOptions({ consolidateAll: true, consolidate: true, useDotNotation: true });
    setupReporterWithOptions({ consolidateAll: true, consolidate: true, useDotNotation: false });
    setupReporterWithOptions({ consolidateAll: true, consolidate: true });
    setupReporterWithOptions({});
    setupReporterWithOptions({ package: 'testPackage' });
    setupReporterWithOptions({ package: 'testPackage <3' });
    setupReporterWithOptions({ consolidateAll: true, consolidate: true });
    setupReporterWithOptions({
        consolidateAll: true,
        consolidate: true,
        modifySuiteName(generatedName, suite) {
            return generatedName + modification;
        },
    });
    setupReporterWithOptions({
        consolidateAll: false,
        modifyReportFileName(generatedName, suite) {
            return generatedName + modification;
        },
    });
    setupReporterWithOptions({ suppressDisabled: true });
    setupReporterWithOptions({ consolidateAll: true, consolidate: true, captureStdout: true });
}

function NUnitXmlReporterSpec_js() {
    function setupReporterWithOptions(options?: jasmineReporters.NUnitXmlReporter.ConstructorOptions) {
        new jasmineReporters.NUnitXmlReporter(options);
    }

    setupReporterWithOptions({ reportName: '<Bad Character Report>' });
    setupReporterWithOptions();
    setupReporterWithOptions({ savePath: '/tmp' });
    setupReporterWithOptions({ filename: 'results.xml' });
    setupReporterWithOptions({ reportName: 'Test Results' });
}

function TeamCityReporterSpec_js() {
    const modification = '-modified';
    function setupReporterWithOptions(options?: jasmineReporters.TeamCityReporter.ConstructorOptions) {
        new jasmineReporters.TeamCityReporter(options);
    }

    setupReporterWithOptions();
    setupReporterWithOptions({
        modifySuiteName(name) {
            return name + modification;
        },
    });
}

// JSDoc from https://github.com/larrymyers/jasmine-reporters/tree/master/src/

function appveyor_reporter_js() {
    // Required options
    jasmine.getEnv().addReporter(new jasmineReporters.AppVeyorReporter());
    jasmine.getEnv().addReporter(new jasmineReporters.AppVeyorReporter({}));
    // All options
    jasmine.getEnv().addReporter(
        new jasmineReporters.AppVeyorReporter({
            batchSize: 1,
            color: true,
            verbosity: 1,
        }),
    );
}

function junit_reporter_js() {
    // Required options
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter());
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({}));
    // All options
    jasmine.getEnv().addReporter(
        new jasmineReporters.JUnitXmlReporter({
            captureStdout: true,
            consolidate: true,
            consolidateAll: true,
            filePrefix: 'text',
            modifyReportFileName: () => 'text',
            modifySuiteName: () => 'text',
            package: 'text',
            savePath: 'text',
            stylesheetPath: 'text',
            suppressDisabled: true,
            systemOut: () => 'text',
            useDotNotation: true,
            useFullTestName: true,
        }),
    );
}

function nunit_reporter_js() {
    // Required options
    jasmine.getEnv().addReporter(new jasmineReporters.NUnitXmlReporter());
    jasmine.getEnv().addReporter(new jasmineReporters.NUnitXmlReporter({}));
    // All options
    jasmine.getEnv().addReporter(
        new jasmineReporters.NUnitXmlReporter({
            filename: 'text',
            reportName: 'text',
            savePath: 'text',
        }),
    );
}

function tap_reporter_js() {
    jasmine.getEnv().addReporter(new jasmineReporters.TapReporter());
}

function teamcity_reporter_js() {
    // Required options
    jasmine.getEnv().addReporter(new jasmineReporters.TeamCityReporter());
    jasmine.getEnv().addReporter(new jasmineReporters.TeamCityReporter({}));
    // All options
    jasmine.getEnv().addReporter(
        new jasmineReporters.TeamCityReporter({
            modifySuiteName: () => 'text',
        }),
    );
}

function terminal_reporter_js() {
    // Required options
    jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter());
    jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter({}));
    // All options
    jasmine.getEnv().addReporter(
        new jasmineReporters.TerminalReporter({
            color: true,
            showStack: true,
            verbosity: 1,
        }),
    );
}
