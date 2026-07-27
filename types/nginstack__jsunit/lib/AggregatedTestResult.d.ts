export = AggregatedTestResult;
declare function AggregatedTestResult(numTotalTests: number): void;
declare class AggregatedTestResult {
    constructor(numTotalTests: number);
    testResults: Array<import("@nginstack/jsunit/lib/TestResult")>;
    numTotalTests: number;
    numPendingTests: number;
    startTime: number;
    dbName: string;
    success: boolean;
    endTime: number;
    duration: number;
    numFailedTests: number;
    numErrorTests: number;
    numPassedTests: number;
    maxErrorsReached: boolean;
    addResult(testResult: TestResult): void;
    private formatReport_;
    formatTxtReport(): string;
    formatHtmlReport(): string;
    formatJUnitXmlReport(): string;
    assign(obj: Partial<AggregatedTestResult>): void;
}
declare namespace AggregatedTestResult {
    export { ReportSummaryByProduct, TestResult };
}
type TestResult = import("@nginstack/jsunit/lib/TestResult");
interface ReportSummaryByProduct {
    productName: string;
    numTotalTests: number;
    numPassedTests: number;
    numFailedTests: number;
    duration: number;
    failedTests: TestResult[];
}
