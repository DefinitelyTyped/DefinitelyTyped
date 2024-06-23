export = DetailedError;
declare function DetailedError(
    error: string,
    solution?: string,
    details?: string,
    code?: string | number
): void;
declare class DetailedError {
    constructor(error: string, solution?: string, details?: string, code?: string | number);
    error: string;
    solution: string;
    details: string;
    sourceLocation: string;
    code: string | number;
    errorCode: string | number;
    message: string;
}
