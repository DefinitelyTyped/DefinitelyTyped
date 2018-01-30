import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Converts value to an array.
         *
         * @param value The value to convert.
         * @return Returns the converted array.
         */
        toArray<T>(value: List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined): T[];

        /**
         * @see _.toArray
         */
        toArray<T>(value: T): Array<T[keyof T]>;

        /**
         * @see _.toArray
         */
        toArray(): any[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toArray
         */
        toArray<T>(this: LoDashImplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.toArray
         */
        toArray<T extends object>(this: LoDashImplicitWrapper<T>): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toArray
         */
        toArray<T>(this: LoDashExplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.toArray
         */
        toArray<T extends object>(this: LoDashImplicitWrapper<T>): LoDashExplicitWrapper<Array<T[keyof T]>>;
    }
}