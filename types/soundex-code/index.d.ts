// Type definitions for soundex-code 1.0
// Project: https://words.github.io/soundex-code/
// Definitions by: Darshan Sen <https://github.com/RaisinTen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'soundex-code' {
    export = soundex;
    function soundex(
        value: string,
        maxLength?: number | undefined
    ): string;
}
