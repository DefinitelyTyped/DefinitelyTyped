export = HttpError;
declare function HttpError(error: string, solution?: string, details?: string, code?: number): void;
declare class HttpError {
    constructor(error: string, solution?: string, details?: string, code?: number);
    private _name;
}
declare namespace HttpError {
    function BadRequest(error: string, solution?: string, details?: string): void;
    function Forbidden(error: string, solution?: string, details?: string): void;
    function NotFound(error: string, solution?: string, details?: string): void;
    function Unauthorized(error: string, solution?: string, details?: string): void;
    function ServiceUnavailable(error: string, solution?: string, details?: string): void;
    function NotAcceptable(error: string, opt_solution?: string, opt_details?: string): void;
}
