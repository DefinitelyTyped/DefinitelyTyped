// Type definitions for err 2.1
// Project: https://github.com/IonicaBizau/err#readme
// Definitions by: Jimmy Cuadra <https://github.com/jimmycuadra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Err;

/** Values required if the only argument to the constructor is an object. */
interface RequiredData {
    message: string;
    code: string;
}

/** Arbitrary data to include in the error. */
type Data = Record<string, string>;

/** Create a custom error object. */
declare class Err extends Error {
    constructor(error: string | Error, code?: string, data?: Data);
    constructor(error: string | Error, data: Data);
    constructor(error: RequiredData & Data);
}
