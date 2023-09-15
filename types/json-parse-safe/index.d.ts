// Type definitions for json-parse-safe 2.0
// Project: https://github.com/joaquimserafim/json-parse-safe#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

interface OutputSuccess {
    value: any;
}

interface OutputError {
    error: Error;
}

declare function jsonParseSafe(
    text: string,
    reviver?: (this: any, key: string, value: any) => any,
): OutputSuccess | OutputError;

export = jsonParseSafe;
