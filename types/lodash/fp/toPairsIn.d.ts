import _ = require("../index");

declare namespace Lodash {
    interface ToPairsIn {
        /**
         * Creates an array of own and inherited enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        (): ToPairsIn;
        /**
         * Creates an array of own and inherited enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        <T>(object: _.Dictionary<T>): Array<[string, T]>;
        /**
         * Creates an array of own and inherited enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        (object: object): Array<[string, any]>;
    }
}

declare const toPairsIn: Lodash.ToPairsIn;
export = toPairsIn;
