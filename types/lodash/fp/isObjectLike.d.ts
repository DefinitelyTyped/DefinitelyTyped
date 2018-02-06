import _ = require("../index");

declare namespace Lodash {
    interface IsObjectLike {
        (): IsObjectLike;
        (value: any): boolean;
    }
}

declare const isObjectLike: Lodash.IsObjectLike;
export = isObjectLike;
