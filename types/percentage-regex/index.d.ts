// Type definitions for percentage-regex 3.0.0
// Project: https://github.com/arthurvr/percentage-regex

declare namespace percentageRegex {
    interface RegexOptions {
        exact?: boolean | undefined;
    }
}
declare function percentageRegex(opts?: percentageRegex.RegexOptions): RegExp;
export = percentageRegex;
