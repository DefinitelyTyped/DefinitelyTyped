import _ = require("../index");

declare namespace Lodash {
    interface Lte {
        (): Lte;
        (other: any): Lte1x1;
        (other: any, value: any): boolean;
    }
    interface Lte1x1 {
        (): Lte1x1;
        (value: any): boolean;
    }
}

declare const lte: Lodash.Lte;
export = lte;
