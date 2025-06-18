export = TestRunner;
declare function TestRunner(options: {
    localPath?: string | string[];
    vfsDirectory?: number | number[];
    vfsFile?: number | number[];
    products?: number[];
    env?: Record<string, string>;
}): void;
declare class TestRunner {
    constructor(options: {
        localPath?: string | string[];
        vfsDirectory?: number | number[];
        vfsFile?: number | number[];
        products?: number[];
        env?: Record<string, string>;
    });
    env_: Record<string, string>;
    testSuites: TestSuite[];
    testSuitesPerTestCaseId_: Record<string, TestSuite>;
    private logger_;
    breakOnFailure: boolean;
    cluster: import("@nginstack/engine/lib/cluster/EngineCluster");
    private readVfsTests_;
    private readLocalTests_;
    private logAndEmitEvent_;
    private runTestsLocally_;
    private runTestsOnCluster_;
    runTests(testIds: string[]): AggregatedTestResult;
    runAllTests(options: { reverseOrder?: boolean }): AggregatedTestResult;
}
declare namespace TestRunner {
    export { TestCase, TestResult };
}
import TestSuite = require("./TestSuite.js");
import AggregatedTestResult = require("./AggregatedTestResult.js");
type TestResult = import("./TestResult");
type TestCase = import("./TestSuite").TestCase;
