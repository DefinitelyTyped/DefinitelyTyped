import _ = require("../index");

declare namespace Lodash {
    interface EntriesIn {
        /**
         * @see _.entriesIn
         */
        (): EntriesIn;
        /**
         * @see _.entriesIn
         */
        <T>(object: _.Dictionary<T>): Array<[string, T]>;
        /**
         * @see _.entriesIn
         */
        (object: object): Array<[string, any]>;
    }
}

declare const entriesIn: Lodash.EntriesIn;
export = entriesIn;
