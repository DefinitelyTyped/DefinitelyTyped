import _ = require("../index");

declare namespace Lodash {
    interface CloneDeep {
        (): CloneDeep;
        <T>(value: T): T;
    }
}

declare const cloneDeep: Lodash.CloneDeep;
export = cloneDeep;
