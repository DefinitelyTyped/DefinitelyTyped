export = TestRunner;
declare function TestRunner(suite: any, opt_trackingId?: string): void;
declare class TestRunner {
    constructor(suite: any, opt_trackingId?: string);
    private suite_;
    private isUnitTest_;
    private trackingId_;
    private scriptRunner_;
    private logger_;
    private loadSuite_;
    private clear_;
    runTest(testName: string): TestResult;
}
import TestResult = require('./TestResult.js');
