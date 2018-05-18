// Type definitions for natsort 1.0
// Project: https://github.com/bubkoo/natsort
// Definitions by: Melvin Groenhoff <https://github.com/mgroenhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare function natsort(options?: natsort.Options): (a: any, b: any) => number;

declare namespace natsort {
    interface Options {
        desc?: boolean;
        insensitive?: boolean;
    }
}

export = natsort;
export as namespace nasort;
