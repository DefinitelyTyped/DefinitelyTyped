import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates an array of the own enumerable property values of object.
         *
         * @param object The object to query.
         * @return Returns an array of property values.
         */
        values<T>(object: Dictionary<T>|NumericDictionary<T>|List<T> | null | undefined): T[];

        /**
         * @see _.values
         */
        values<T extends object>(object: T | null | undefined): Array<T[keyof T]>;

        /**
         * @see _.values
         */
        values(object: any): any[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.values
         */
        values<T>(this: LoDashImplicitWrapper<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.values
         */
        values<T extends object>(this: LoDashImplicitWrapper<T | null | undefined>): LoDashImplicitWrapper<Array<T[keyof T]>>;

        /**
         * @see _.values
         */
        values(): LoDashImplicitWrapper<any[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.values
         */
        values<T>(this: LoDashExplicitWrapper<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.values
         */
        values<T extends object>(this: LoDashExplicitWrapper<T | null | undefined>): LoDashExplicitWrapper<Array<T[keyof T]>>;

        /**
         * @see _.values
         */
        values(): LoDashExplicitWrapper<any[]>;
    }
}