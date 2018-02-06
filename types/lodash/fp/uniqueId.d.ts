import _ = require("../index");

declare namespace Lodash {
    interface UniqueId {
        (): UniqueId;
        (prefix: string): string;
    }
}

declare const uniqueId: Lodash.UniqueId;
export = uniqueId;
