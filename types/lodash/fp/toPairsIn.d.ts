import _ = require("../index");

declare namespace Lodash {
    interface ToPairsIn {
        (): ToPairsIn;
        <T>(object: _.Dictionary<T>): Array<[string, T]>;
        (object: object): Array<[string, any]>;
    }
}

declare const toPairsIn: Lodash.ToPairsIn;
export = toPairsIn;
