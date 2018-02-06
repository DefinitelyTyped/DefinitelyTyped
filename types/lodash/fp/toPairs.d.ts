import _ = require("../index");

declare namespace Lodash {
    interface ToPairs {
        /**
         * Creates an array of own enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        (): ToPairs;
        /**
         * Creates an array of own enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        <T>(object: _.Dictionary<T>): Array<[string, T]>;
        /**
         * Creates an array of own enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        (object: object): Array<[string, any]>;
    }
}

declare const toPairs: Lodash.ToPairs;
export = toPairs;
