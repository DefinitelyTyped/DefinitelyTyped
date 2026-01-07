export = TestSuiteRunner;
declare function TestSuiteRunner(
    suite: TestSuite,
    options: {
        trackerId?: string;
        env?: Record<string, string>;
    },
): void;
declare class TestSuiteRunner {
    constructor(
        suite: TestSuite,
        options: {
            trackerId?: string;
            env?: Record<string, string>;
        },
    );
    private suite_;
    private isUnitTest_;
    private trackerId_;
    private env_;
    private scriptRunner_;
    private logger_;
    private loadSuite_;
    runTest(testName: string): TestResult;
}
declare namespace TestSuiteRunner {
    export { TestSuite };
}
import TestResult = require("./TestResult.js");
type TestSuite = import("./TestSuite");
