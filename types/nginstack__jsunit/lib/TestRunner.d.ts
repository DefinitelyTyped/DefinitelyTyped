export = TestRunner;
declare function TestRunner(
    opt_rootClasses?: number | string,
    opt_products?: number | string
): void;
declare class TestRunner {
    constructor(opt_rootClasses?: number | string, opt_products?: number | string);
    rootClasses: string;
    vfs: any;
    suitesCache: {};
    onProgress: any;
    onFailure: any;
    onAfterTestCase: any;
    private classe_;
    private logger_;
    treeRootKey: number;
    runMode: string;
    private getClasse;
    getRootClassesByProducts(products: string): string;
    private findTestByClass_;
    private isATestsChild_;
    private isRelevantGrouper;
    private readTests_;
    private getClassName;
    private mountTree;
    private getTestSuite_;
    private updateSuiteTestsCache;
    private orderTests;
    private showProgress;
    private updateTreeResults;
    private updateTestResults_;
    tests: DataSet;
    tree: DataSet;
    private testIdsToSuites_;
    runTests(testIds: any[]): void;
    runTestsOnCluster(testIds: string[], cluster: any[], opt_options?: any): any;
    updateClusterStatus(mapReduceJobId: number, total: number): void;
    syncTreeClusterOutput(result: any): void;
    clearLastResults(): void;
    getTestIdsBySuite(suiteKey: number): any[];
    getTestIdsByClass(classKey: number): any[];
}
declare namespace TestRunner {
    export { RunModes, run, runOnCluster, Event, TestSuiteInfo, TestResult, RunResult };
}
declare namespace RunModes {
    let CONTINUE_IF_FAIL: string;
    let BREAK_IF_FAIL: string;
}
type RunModes = string;
declare function run(opt_options?: {
    rootClasses?: number[];
    onFailureFunction?: () => any;
    onAfterTestCase?: () => any;
    cluster?: any[];
}): RunResult;
declare function runOnCluster(tests: any[], cluster: any[], opt_async?: boolean): any;
type Event = any;
interface TestSuiteInfo {
    name: string;
    key?: number;
    fileId: string;
    encoding: number;
    testNames: string[];
}
interface TestResult {
    suite: number;
    product: number;
    testCase: string;
    message: string;
    runTime: number;
    success: boolean;
}
interface RunResult {
    successes: TestResult[];
    fails: TestResult[];
}
