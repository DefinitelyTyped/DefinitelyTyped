export = TestCase;
declare function TestCase(testSuite: any, methodName: string, event: any): void;
declare class TestCase {
    constructor(testSuite: any, methodName: string, event: any);
    testSuite: any;
    name: string;
    methodName: string;
    event: any;
    private logger_;
    getId(): string;
}
