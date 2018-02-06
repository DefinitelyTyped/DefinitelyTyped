import _ = require("../index");

declare namespace Lodash {
    interface Repeat {
        (): Repeat;
        (n: number): Repeat1x1;
        (n: number, string: string): string;
    }
    interface Repeat1x1 {
        (): Repeat1x1;
        (string: string): string;
    }
}

declare const repeat: Lodash.Repeat;
export = repeat;
