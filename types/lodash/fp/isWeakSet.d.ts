import _ = require("../index");

declare namespace Lodash {
    interface IsWeakSet {
        (): IsWeakSet;
        (value: any): value is WeakSet<object>;
    }
}

declare const isWeakSet: Lodash.IsWeakSet;
export = isWeakSet;
