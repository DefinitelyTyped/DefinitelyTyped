import _ = require("../index");

declare namespace Lodash {
    interface Lt {
        (): Lt;
        (other: any): Lt1x1;
        (other: any, value: any): boolean;
    }
    interface Lt1x1 {
        (): Lt1x1;
        (value: any): boolean;
    }
}

declare const lt: Lodash.Lt;
export = lt;
