import _ = require("../index");

declare namespace Lodash {
    interface Sum {
        (): Sum;
        (collection: _.List<any> | null | undefined): number;
    }
}

declare const sum: Lodash.Sum;
export = sum;
