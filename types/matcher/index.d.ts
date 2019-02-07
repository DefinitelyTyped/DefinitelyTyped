// Type definitions for matcher 1.1
// Project: https://github.com/sindresorhus/matcher#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = matcher;

declare function matcher(inputs: string[], patterns: string[], options?: matcher.Options): string[];

declare namespace matcher {
    function isMatch(input: string, pattern: string, options?: Options): boolean;

    interface Options {
        caseSensitive?: boolean;
    }
}
