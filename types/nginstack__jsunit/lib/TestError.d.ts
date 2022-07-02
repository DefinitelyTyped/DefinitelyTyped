export = TestError;
declare function TestError(msg: string, details: string): void;
declare class TestError {
    constructor(msg: string, details: string);
    private _error;
    private _details;
}
