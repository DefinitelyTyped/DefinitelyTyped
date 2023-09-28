// Type definitions for pretty-hrtime 1.0
// Project: https://github.com/robrich/pretty-hrtime
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = prettyHrtime;

declare function prettyHrtime(hrTime: [number, number], options?: prettyHrtime.Options): string;

declare namespace prettyHrtime {
    interface Options {
        verbose?: boolean | undefined;
        precise?: boolean | undefined;
    }
}
