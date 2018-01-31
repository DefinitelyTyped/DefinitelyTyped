import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Gets a random element from collection.
         *
         * @param collection The collection to sample.
         * @return Returns the random element.
         */
        sample<T>(
            collection: List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined
        ): T | undefined;

        /**
         * @see _.sample
         */
        sample<T extends object>(
            collection: T
        ): T[keyof T];

        /**
         * @see _.sample
         */
        sample<T extends object>(
            collection: T | null | undefined
        ): T[keyof T] | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sample
         */
        sample<T>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>
        ): T | undefined;

        /**
         * @see _.sample
         */
        sample<T extends object>(
            this: LoDashImplicitWrapper<T>,
        ): T[keyof T];

        /**
         * @see _.sample
         */
        sample<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>
        ): T[keyof T] | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sample
         */
        sample<T>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | NumericDictionary<T> | null | undefined>
        ): LoDashExplicitWrapper<T | undefined>;

        /**
         * @see _.sample
         */
        sample<T extends object>(
            this: LoDashExplicitWrapper<T>,
        ): LoDashExplicitWrapper<T[keyof T]>;

        /**
         * @see _.sample
         */
        sample<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>
        ): LoDashExplicitWrapper<T[keyof T] | undefined>;
    }
}