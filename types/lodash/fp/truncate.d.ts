import _ = require("../index");

declare namespace Lodash {
    interface Truncate {
        (): Truncate;
        (options: TruncateOptions): Truncate1x1;
        (options: TruncateOptions, string: string): string;
    }
    interface Truncate1x1 {
        (): Truncate1x1;
        (string: string): string;
    }
}

declare const truncate: Lodash.Truncate;
export = truncate;
