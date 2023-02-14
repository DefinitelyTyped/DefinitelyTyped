export = TestRunner;
declare function TestRunner(suite: TestSuite, opt_trackingId?: string): void;
declare class TestRunner {
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
declare namespace TestRunner {
    export { TestSuite };
}
type TestSuite = import('./TestSuite');
import TestResult = require('./TestResult.js');
