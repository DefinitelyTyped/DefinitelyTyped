// Type definitions for omit-empty 1.0
// Project: https://github.com/jonschlinkert/omit-empty
// Definitions by: Shubham Kanodia <https://github.com/pastelsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface OmitOptions {
    omitZero?: boolean;
}

declare function omitEmpty(obj: object, options?: OmitOptions): object;
export default omitEmpty;
