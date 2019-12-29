// Type definitions for coverup 0.1
// Project: https://github.com/jsonmaur/coverup
// Definitions by: Vadim Belorussov <https://github.com/bevalorous>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Coverup;

export = coverup;

declare function coverup(value: string, options?: coverup.Options): string;

declare namespace coverup {
    interface Options {
        char?: string;
        keepLeft?: number;
        keepRight?: number;
        compactTo?: number;
        keepSymbols?: boolean;
    }
}
