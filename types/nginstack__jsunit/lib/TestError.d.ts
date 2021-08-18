export = TestError;
declare function TestError(msg: string, details: string): void;
declare class TestError {
    constructor(msg: string, details: string);
    _error: string;
    _details: string;
}
