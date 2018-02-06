import _ = require("../index");

declare namespace Lodash {
    interface Size {
        (): Size;
        (collection: object | string | null | undefined): number;
    }
}

declare const size: Lodash.Size;
export = size;
