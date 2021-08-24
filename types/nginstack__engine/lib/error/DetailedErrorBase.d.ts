export = DetailedErrorBase;
declare function DetailedErrorBase(
    name: any,
    error: any,
    solution: any,
    details: any,
    errorCode: any
): void;
declare class DetailedErrorBase {
    constructor(name: any, error: any, solution: any, details: any, errorCode: any);
    private _name;
    private _error;
    private _solution;
    private _details;
    private _sourceLocation;
    private _errorCode;
    toString(): any;
    toHtmlString(): any;
    toSqlString(): any;
}
