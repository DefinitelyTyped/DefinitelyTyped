import _ = require("../index");

declare namespace Lodash {
    interface ToPairs {
        (): ToPairs;
        <T>(object: _.Dictionary<T>): Array<[string, T]>;
        (object: object): Array<[string, any]>;
    }
}

declare const toPairs: Lodash.ToPairs;
export = toPairs;
