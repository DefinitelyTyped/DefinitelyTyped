export = EventTypeError;
declare function EventTypeError(
    error: string,
    solution: string,
    details: string,
    errorCode: number
): void;
declare class EventTypeError {
    constructor(error: string, solution: string, details: string, errorCode: number);
    private _name;
}
