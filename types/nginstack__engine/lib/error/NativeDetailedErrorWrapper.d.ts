export = NativeDetailedErrorWrapper;
declare function NativeDetailedErrorWrapper(
    error: any,
    solution: any,
    details: any,
    errorCode: any
): void;
declare class NativeDetailedErrorWrapper {
    constructor(error: any, solution: any, details: any, errorCode: any);
    _name: string;
    _error: any;
    _solution: any;
    _details: any;
    _sourceLocation: string;
    _errorCode: any;
    _setName(value: any): void;
    toString(): any;
    toHtmlString(): any;
    toSqlString(): any;
}
