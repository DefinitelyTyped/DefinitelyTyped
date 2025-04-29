export = TestCaseEvent;
declare function TestCaseEvent(...args: any[]): void;
declare class TestCaseEvent {
    constructor(...args: any[]);
    testName: string;
    suiteName: string;
    passed: boolean;
    duration: number;
    errorMessage: string;
    aggregatedResult: AggregatedTestResult;
}
declare namespace TestCaseEvent {
    export { AggregatedTestResult };
}
type AggregatedTestResult = import("./AggregatedTestResult");
