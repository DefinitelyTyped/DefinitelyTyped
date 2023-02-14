export = EventTypeError;
declare function EventTypeError(
    error: string,
    solution: string,
    details: string,
    code: string | number
): void;
declare class EventTypeError {
    constructor(error: string, solution: string, details: string, code: string | number);
    private _name;
}
