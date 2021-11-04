// Type definitions for time-limited-regular-expressions 1.0
// Project: https://github.com/apostrophecms/time-limited-regular-expressions#readme
// Definitions by: Glenn <https://github.com/promise>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = TLRE;

declare function TLRE(options?: { limit: number }): TLRE.TLRE;

declare namespace TLRE {
    interface TLRE {
        match(regex: RegExp, string: string): Promise<RegExpMatchArray | null>;
    }
}
