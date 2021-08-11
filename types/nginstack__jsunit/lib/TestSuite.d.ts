export = TestSuite;
declare function TestSuite(fileId: number | string, opt_sourceEncoding?: string): void;
declare class TestSuite {
    constructor(fileId: number | string, opt_sourceEncoding?: string);
    key: number | null;
    version: number | null;
    type_: string | number | boolean | Date;
    filePath: string;
    name: string;
    fileId_: string | number;
    sourceEncoding_: string;
    getFileId(): string | number;
    getSourceEncoding(): string;
    _testsByName: {};
    _tests: any[];
    type: number;
    getId(): string;
    private getUfsTestType_;
    displayStringForValue_(aVar: any): string;
    fail_(failureMessage: any): never;
    argumentsIncludeComments_(expectedNumberOfNonCommentArgs: any, args: any): boolean;
    commentArg_(expectedNumberOfNonCommentArgs: any, args: any): any;
    nonCommentArg_(
        desiredNonCommentArgIndex: any,
        expectedNumberOfNonCommentArgs: any,
        args: any
    ): any;
    validateArguments_(expectedNumberOfNonCommentArgs: any, args: any): void;
    assert_(comment: any, booleanValue: any, failureMessage: any): void;
    declareTestMethods(): void;
    deleteTestMethods(): void;
    isTestCase(methodName: any): boolean;
    getTests(): any[];
    getTestByName(name: any): any;
    update(): void;
    setUp(): void;
    tearDown(): void;
    fail(msg: string): never;
    failEquals(expected: any, actual: any, msg: any): void;
    failNotEquals(expected: any, actual: any, msg: any): void;
    check(condition: any, msg: any): void;
    checkEquals(expected: any, actual: any, msg: any): void;
    checkNotEquals(expected: any, actual: any, msg: any): void;
    checkEqualNumbers(expected: any, actual: any, delta: any, msg: any): void;
    checkNotEqualNumbers(expected: any, actual: any, delta: any, msg: any): void;
    removeTime(dt: any): Date;
    checkEqualDates(expected: any, actual: any, msg: any): void;
    checkNotEqualDates(expected: any, actual: any, msg: any): void;
    checkEqualDateTimes(expected: any, actual: any, msg: any): void;
    checkNotEqualDateTimes(expected: any, actual: any, msg: any): void;
    isEqualArrays(ar1: any, ar2: any): boolean;
    checkEqualArrays(expected: any, actual: any, msg: any): void;
    checkNotEqualArrays(expected: any, actual: any, msg: any): void;
    assert(message: any, condition: any, ...args: any[]): void;
    assertTrue(...args: any[]): void;
    assertFalse(...args: any[]): void;
    assertEquals(...args: any[]): void;
    assertNotEquals(...args: any[]): void;
    assertNull(...args: any[]): void;
    assertNotNull(...args: any[]): void;
    assertUndefined(...args: any[]): void;
    assertNotUndefined(...args: any[]): void;
    assertNan(...args: any[]): void;
    assertNotNan(...args: any[]): void;
}
