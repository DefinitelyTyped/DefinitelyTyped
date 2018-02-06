import _ = require("../index");

declare namespace Lodash {
    interface ValuesIn {
        /**
         * Creates an array of the own and inherited enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns the array of property values.
         */
        (): ValuesIn;
        /**
         * Creates an array of the own and inherited enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns the array of property values.
         */
        <T>(object: _.Dictionary<T>|_.NumericDictionary<T>|_.List<T> | null | undefined): T[];
        /**
         * Creates an array of the own and inherited enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns the array of property values.
         */
        <T extends object>(object: T | null | undefined): Array<T[keyof T]>;
    }
}

declare const valuesIn: Lodash.ValuesIn;
export = valuesIn;
