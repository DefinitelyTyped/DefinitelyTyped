// Type definitions for is-date-object 1.0
// Project: https://github.com/ljharb/is-date-object
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

declare function isDateObject(value: Date): true;
declare function isDateObject(value?: object): boolean;
declare function isDateObject(value?: null | boolean | string | number | symbol | bigint | []): false;

export = isDateObject;
