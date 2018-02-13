import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * The opposite of _.filter; this method returns the elements of collection that predicate does not return
         * truthy for.
         *
         * @param collection The collection to iterate over.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the new filtered array.
         */
        reject(
            collection: string | null | undefined,
            predicate?: StringIterator<boolean>
        ): string[];

        /**
         * @see _.reject
         */
        reject<T>(
            collection: List<T> | null | undefined,
            predicate?: ListIterateeCustom<T, boolean>
        ): T[];

        /**
         * @see _.reject
         */
        reject<T extends object>(
            collection: T | null | undefined,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.reject
         */
        reject(
            this: LoDashImplicitWrapper<string | null | undefined>,
            predicate?: StringIterator<boolean>
        ): LoDashImplicitWrapper<string[]>;

        /**
         * @see _.reject
         */
        reject<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.reject
         */
        reject<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.reject
         */
        reject(
            this: LoDashExplicitWrapper<string | null | undefined>,
            predicate?: StringIterator<boolean>
        ): LoDashExplicitWrapper<string[]>;

        /**
         * @see _.reject
         */
        reject<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            predicate?: ListIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.reject
         */
        reject<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            predicate?: ObjectIterateeCustom<T, boolean>
        ): LoDashExplicitWrapper<Array<T[keyof T]>>;
    }
}