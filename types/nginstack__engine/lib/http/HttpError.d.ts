export = HttpError;
declare function HttpError(
    error: string,
    opt_solution?: string,
    opt_details?: string,
    opt_code?: number
): void;
declare class HttpError {
    constructor(error: string, opt_solution?: string, opt_details?: string, opt_code?: number);
    private _name;
}
declare namespace HttpError {
    function BadRequest(error: string, opt_solution?: string, opt_details?: string): void;
    function Forbidden(error: string, opt_solution?: string, opt_details?: string): void;
    function NotFound(error: string, opt_solution?: string, opt_details?: string): void;
    function Unauthorized(error: string, opt_solution?: string, opt_details?: string): void;
    function ServiceUnavailable(error: string, opt_solution?: string, opt_details?: string): void;
    function NotAcceptable(error: string, opt_solution?: string, opt_details?: string): void;
}
