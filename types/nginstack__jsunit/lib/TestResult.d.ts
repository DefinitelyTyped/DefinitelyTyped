export = TestResult;
declare function TestResult(opt_error?: Error): void;
declare class TestResult {
    constructor(opt_error?: Error);
    runTime: number;
    testSuiteName: string;
    testCaseName: string;
    memDelta: number;
    wasSuccessful: boolean;
    message: string;
    stackTraceMessage: string;
    failureCount: number;
    errorCount: number;
    private formatFileName_;
    private initialize_;
}
