import _ = require("../index");

declare namespace Lodash {
    interface Flip {
        (): Flip;
        (...args: any[]) => any>(func: T): T;
    }
}

declare const flip: Lodash.Flip;
export = flip;
