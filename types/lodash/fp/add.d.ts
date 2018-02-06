import _ = require("../index");

declare namespace Lodash {
    interface Add {
        (): Add;
        (addend: number): Add1x1;
        (addend: number, augend: number): number;
    }
    interface Add1x1 {
        (): Add1x1;
        (augend: number): number;
    }
}

declare const add: Lodash.Add;
export = add;
