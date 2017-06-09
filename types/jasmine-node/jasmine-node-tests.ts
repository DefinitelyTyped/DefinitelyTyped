// Type definitions for jasmine-node v1.14.5
// Project: https://github.com/mhevery/jasmine-node
// Definitions by: Sven Reglitzki <https://github.com/svi3c/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

it("should have a timeout parameter", () => { }, 1000);
it("should have an optional timeout parameter", () => { });

import jasmine = require("jasmine-node");

jasmine.loadHelpersInFolder("root", /\.helper\.ts/);

jasmine.executeSpecsInFolder({
    specFolders: [],
    onComplete: (runner) => { console.log(runner.results().failedCount) },
    isVerbose: true,
    showColors: true,
    teamcity: false,
    useRequireJs: false,
    regExpSpec: /\.spec\.ts/,
    junitreport: {
        report: false,
        savePath: "./reports/",
        useDotNotation: true,
        consolidate: true
    },
    includeStackTrace: true,
    growl: false
});
