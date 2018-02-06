import _ = require("../index");

declare namespace Lodash {
    interface Gt {
        (): Gt;
        (other: any): Gt1x1;
        (other: any, value: any): boolean;
    }
    interface Gt1x1 {
        (): Gt1x1;
        (value: any): boolean;
    }
}

declare const gt: Lodash.Gt;
export = gt;
