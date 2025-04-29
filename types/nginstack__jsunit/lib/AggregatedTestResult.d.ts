export = AggregatedTestResult;
declare function AggregatedTestResult(numTotalTests: number): void;
declare class AggregatedTestResult {
    constructor(numTotalTests: number);
    testResults: Array<import("@nginstack/jsunit/lib/TestResult")>;
    numTotalTests: number;
    numPendingTests: number;
    startTime: number;
    success: boolean;
    endTime: number;
    duration: number;
    numFailedTests: number;
    numErrorTests: number;
    numPassedTests: number;
    addResult(testResult: TestResult): void;
    formatTxtReport(): string;
    formatHtmlReport(): string;
    formatJUnitXmlReport(): string;
}
declare namespace AggregatedTestResult {
    export { TestResult };
}
type TestResult = import("@nginstack/jsunit/lib/TestResult");
