export = TestResult;
declare function TestResult(error?: Error): void;
declare class TestResult {
    constructor(error?: Error);
    startTime: number;
    duration: number;
    fileId: any;
    testSuiteName: string;
    testCaseName: string;
    product: number | null;
    memDelta: number;
    passed: boolean;
    errorMessage: string;
    errorStack: string;
    failureCount: number;
    errorCount: number;
    private formatFileName_;
    private initialize_;
}
