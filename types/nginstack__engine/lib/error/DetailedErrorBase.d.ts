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
    _name: any;
    _error: any;
    _solution: any;
    _details: any;
    _sourceLocation: string;
    _errorCode: any;
    toString(): any;
    toHtmlString(): any;
    toSqlString(): any;
}
