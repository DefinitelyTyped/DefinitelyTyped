import _ = require("../index");

declare namespace Lodash {
    interface IsWeakMap {
        (): IsWeakMap;
        (value: any): value is WeakMap<object, any>;
    }
}

declare const isWeakMap: Lodash.IsWeakMap;
export = isWeakMap;
