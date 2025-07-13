export = TestSourceScanner;
declare function TestSourceScanner(source: string): void;
declare class TestSourceScanner {
    constructor(source: string);
    testCasePositions: Record<string, TestCasePosition>;
    source_: string;
    linePositions_: Record<string, number>;
    jsScanner_: JSScanner;
    private createLinePositionMap_;
    private nextToken_;
    private skipBlock_;
    private findTestCasePositions_;
}
declare namespace TestSourceScanner {
    export { TestCasePosition };
}
import JSScanner = require("@nginstack/engine/lib/compiler/ijs/JSScanner.js");
interface TestCasePosition {
    line: number;
    column: number;
}
