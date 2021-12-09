export = DetailedError;
declare function DetailedError(
    error: string,
    solution?: string,
    details?: string,
    errorCode?: number
): void;
declare class DetailedError {
    constructor(error: string, solution?: string, details?: string, errorCode?: number);
    error: string;
    solution: string;
    details: string;
    sourceLocation: string;
    errorCode: number;
    message: string;
}
