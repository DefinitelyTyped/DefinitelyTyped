import _ = require("../index");

declare namespace Lodash {
    interface Gte {
        (): Gte;
        (other: any): Gte1x1;
        (other: any, value: any): boolean;
    }
    interface Gte1x1 {
        (): Gte1x1;
        (value: any): boolean;
    }
}

declare const gte: Lodash.Gte;
export = gte;
