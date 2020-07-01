// Type definitions for is-negated-glob 1.0
// Project: https://github.com/jonschlinkert/is-negated-glob
// Definitions by: Klaus Meinhardt <https://github.com/ajafff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function isNegatedGlob(pattern: string): isNegatedGlob.Result;
declare namespace isNegatedGlob {
    interface Result {
        negated: boolean;
        original: string;
        pattern: string;
    }
}
export = isNegatedGlob;
