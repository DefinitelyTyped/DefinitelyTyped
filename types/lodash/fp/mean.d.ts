import _ = require("../index");

declare namespace Lodash {
    interface Mean {
        (): Mean;
        (collection: _.List<any> | null | undefined): number;
    }
}

declare const mean: Lodash.Mean;
export = mean;
