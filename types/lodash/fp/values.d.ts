import _ = require("../index");

declare namespace Lodash {
    interface Values {
        /**
         * Creates an array of the own enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns an array of property values.
         */
        (): Values;
        /**
         * Creates an array of the own enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns an array of property values.
         */
        <T>(object: _.Dictionary<T>|_.NumericDictionary<T>|_.List<T> | null | undefined): T[];
        /**
         * Creates an array of the own enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns an array of property values.
         */
        <T extends object>(object: T | null | undefined): Array<T[keyof T]>;
        /**
         * Creates an array of the own enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns an array of property values.
         */
        (object: any): any[];
    }
}

declare const values: Lodash.Values;
export = values;
