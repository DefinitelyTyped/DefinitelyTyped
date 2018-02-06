import _ = require("../index");

declare namespace Lodash {
    interface Union {
        (): Union;
        <T>(...arrays: Array<_.List<T> | null | undefined>): T[];
    }
}

declare const union: Lodash.Union;
export = union;
