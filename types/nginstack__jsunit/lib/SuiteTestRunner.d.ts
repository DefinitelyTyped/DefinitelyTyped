export = SuiteTestRunner;
declare function SuiteTestRunner(suite: TestSuite, opt_trackingId?: string): void;
declare class SuiteTestRunner {
    constructor(suite: TestSuite, opt_trackingId?: string);
    private suite_;
    private isUnitTest_;
    private trackingId_;
    private scriptRunner_;
    private logger_;
    private loadSuite_;
    private clear_;
    runTest(testName: string): TestResult;
}
declare namespace SuiteTestRunner {
    export { TestSuite };
}
type TestSuite = import("./TestSuite");
import TestResult = require("./TestResult.js");
