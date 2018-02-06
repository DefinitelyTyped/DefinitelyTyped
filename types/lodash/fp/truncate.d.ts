import _ = require("../index");

declare namespace Lodash {
    interface Truncate {
        /** The maximum string length. */
        (): Truncate;
        /** The maximum string length. */
        (options: TruncateOptions): Truncate1x1;
        /** The maximum string length. */
        (options: TruncateOptions, string: string): string;
    }
    interface Truncate1x1 {
        /** The maximum string length. */
        (): Truncate1x1;
        /** The maximum string length. */
        (string: string): string;
    }
}

declare const truncate: Lodash.Truncate;
export = truncate;
