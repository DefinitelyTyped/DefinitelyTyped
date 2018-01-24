import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates an array of own enumerable key-value pairs for object.
         *
         * @param object The object to query.
         * @return Returns the new array of key-value pairs.
         */
        toPairs<T>(object?: Dictionary<T>): Array<[string, T]>;

        /**
         * @see _.toPairs
         */
        toPairs(object?: object): Array<[string, any]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPairs
         */
        toPairs<T>(this: LoDashImplicitWrapper<Dictionary<T>>): LoDashImplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairs
         */
        toPairs(): LoDashImplicitWrapper<Array<[string, any]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPairs
         */
        toPairs<T>(this: LoDashExplicitWrapper<Dictionary<T>>): LoDashExplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairs
         */
        toPairs(): LoDashExplicitWrapper<Array<[string, any]>>;
    }
}