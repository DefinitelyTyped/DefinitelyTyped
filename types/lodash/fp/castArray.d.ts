import _ = require("../index");

declare namespace Lodash {
    interface CastArray {
        (): CastArray;
        <T>(value: _.Many<T>): T[];
    }
}

declare const castArray: Lodash.CastArray;
export = castArray;
