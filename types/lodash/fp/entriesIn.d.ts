import _ = require("../index");

declare namespace Lodash {
    interface EntriesIn {
        (): EntriesIn;
        <T>(object: _.Dictionary<T>): Array<[string, T]>;
        (object: object): Array<[string, any]>;
    }
}

declare const entriesIn: Lodash.EntriesIn;
export = entriesIn;
