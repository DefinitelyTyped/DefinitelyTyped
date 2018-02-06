import _ = require("../index");

declare namespace Lodash {
    interface Unset {
        (): Unset;
        (path: _.PropertyPath): Unset1x1;
        (path: _.PropertyPath, object: any): boolean;
    }
    interface Unset1x1 {
        (): Unset1x1;
        (object: any): boolean;
    }
}

declare const unset: Lodash.Unset;
export = unset;
