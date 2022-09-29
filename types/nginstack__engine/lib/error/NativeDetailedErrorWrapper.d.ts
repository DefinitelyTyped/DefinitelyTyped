export = NativeDetailedErrorWrapper;
declare function NativeDetailedErrorWrapper(
    error: any,
    solution: any,
    details: any,
    code: any
): void;
declare class NativeDetailedErrorWrapper {
    constructor(error: any, solution: any, details: any, code: any);
    private _name;
    private _error;
    private _solution;
    private _details;
    private _sourceLocation;
    private _code;
    private _setName;
    toString(): any;
    toHtmlString(): any;
    toSqlString(): any;
}
