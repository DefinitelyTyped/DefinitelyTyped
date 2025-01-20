export = DetailedErrorBase;
declare function DetailedErrorBase(
    name: any,
    error: any,
    solution: any,
    details: any,
    code: any
): void;
declare class DetailedErrorBase {
    constructor(name: any, error: any, solution: any, details: any, code: any);
    private _name;
    private _error;
    private _solution;
    private _details;
    private _code;
    private _sourceLocation;
    toString(): any;
    toHtmlString(): any;
    toSqlString(): any;
}
