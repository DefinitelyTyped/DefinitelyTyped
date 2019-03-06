// Type definitions for is-date-object 1.0
// Project: https://github.com/ljharb/is-date-object
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

type InvalidTypes = undefined | null | boolean | string | number | [] | {};

declare function isDateObject(value: Date): true;
declare function isDateObject(value: InvalidTypes | unknown): false;
declare function isDateObject(value?: unknown): false;

export = isDateObject;
