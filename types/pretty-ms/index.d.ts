// Type definitions for pretty-ms 3.0
// Project: https://github.com/sindresorhus/pretty-ms#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = prettyMs;

declare function prettyMs(input: number, options?: prettyMs.PrettyMsOptions): string;

declare namespace prettyMs {
    interface PrettyMsOptions {
        secDecimalDigits?: number;
        msDecimalDigits?: number;
        compact?: boolean;
        verbose?: boolean;
    }
}
