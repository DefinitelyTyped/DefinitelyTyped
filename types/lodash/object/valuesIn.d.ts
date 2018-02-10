import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an array of the own and inherited enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns the array of property values.
         */
        valuesIn<T>(object: Dictionary<T>|NumericDictionary<T>|List<T> | null | undefined): T[];

        /**
         * @see _.valuesIn
         */
        valuesIn<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.valuesIn
         */
        valuesIn<T>(this: LoDashImplicitWrapper<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.valuesIn
         */
        valuesIn<T extends object>(this: LoDashImplicitWrapper<T | null | undefined>): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.valuesIn
         */
        valuesIn<T>(this: LoDashExplicitWrapper<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.valuesIn
         */
        valuesIn<T extends object>(this: LoDashExplicitWrapper<T | null | undefined>): LoDashExplicitWrapper<Array<T[keyof T]>>;
    }
}