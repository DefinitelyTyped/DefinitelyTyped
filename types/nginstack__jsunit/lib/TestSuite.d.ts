export = TestSuite;
declare function TestSuite(fileId: number | string, fileEncoding?: string): void;
declare class TestSuite {
    constructor(fileId: number | string, fileEncoding?: string);
    fileKey: number;
    fileDBKey: DBKey;
    version: number;
    private fileType;
    filePath: string;
    name: string;
    fileId: string | number;
    fileEncoding: string;
    private logger_;
    private testCaseMethods_;
    testCases: TestCase[];
    packageName: string;
    private packageName_;
    product: number | null;
    private product_;
    group: string;
    private group_;
    id: string;
    private loadTestCases_;
    findTestCase(id: string): TestCase;
    getTestCase(id: string): TestCase;
    runTestCase(id: string): void;
    update(): void;
    setUp(): void;
    tearDown(): void;
}
declare namespace TestSuite {
    export { findPackageName, formatSuiteName, formatTestCaseId, TestCase };
}
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");
declare function formatSuiteName(filePath: string): string;
declare function formatTestCaseId(suiteId: string, testCaseName: string): string;
declare function findPackageName(path: string): string;
interface TestCase {
    id: string;
    name: string;
    line: number;
    column: number;
}
