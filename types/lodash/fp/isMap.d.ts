import _ = require("../index");

declare namespace Lodash {
    interface IsMap {
        (): IsMap;
        (value: any): value is Map<any, any>;
    }
}

declare const isMap: Lodash.IsMap;
export = isMap;
