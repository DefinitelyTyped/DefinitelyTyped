// Type definitions for pretty-ms 4.0
// Project: https://github.com/sindresorhus/pretty-ms#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 ocboogie <https://github.com/ocboogie>
//                 silh <https://github.com/silh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = prettyMs;

declare function prettyMs(input: number, options?: prettyMs.PrettyMsOptions): string;

declare namespace prettyMs {
    interface PrettyMsOptions {
        secDecimalDigits?: number;
        msDecimalDigits?: number;
        keepDecimalsOnWholeSeconds?: boolean;
        compact?: boolean;
        unitCount?: number;
        verbose?: boolean;
        separateMs?: boolean;
        formatSubMs?: boolean;
    }
}
