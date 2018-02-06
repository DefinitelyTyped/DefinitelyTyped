import _ = require("../index");

declare namespace Lodash {
    interface Entries {
        /**
         * @see _.toPairs
         */
        (): Entries;
        /**
         * @see _.toPairs
         */
        <T>(object: _.Dictionary<T>): Array<[string, T]>;
        /**
         * @see _.toPairs
         */
        (object: object): Array<[string, any]>;
    }
}

declare const entries: Lodash.Entries;
export = entries;
