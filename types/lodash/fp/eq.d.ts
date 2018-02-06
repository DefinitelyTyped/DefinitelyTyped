import _ = require("../index");

declare namespace Lodash {
    interface Eq {
        (): Eq;
        (other: any): Eq1x1;
        (other: any, value: any): boolean;
    }
    interface Eq1x1 {
        (): Eq1x1;
        (value: any): boolean;
    }
}

declare const eq: Lodash.Eq;
export = eq;
