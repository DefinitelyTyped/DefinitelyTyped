import _ = require("../index");

declare namespace Lodash {
    interface Entries {
        (): Entries;
        <T>(object: _.Dictionary<T>): Array<[string, T]>;
        (object: object): Array<[string, any]>;
    }
}

declare const entries: Lodash.Entries;
export = entries;
