import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
         *
         * @param collection The collection to shuffle.
         * @return Returns the new shuffled array.
         */
        shuffle<T>(collection: List<T> | null | undefined): T[];

        /**
         * @see _.shuffle
         */
        shuffle<T extends object>(collection: T | null | undefined): Array<T[keyof T]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.shuffle
         */
        shuffle<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.shuffle
         */
        shuffle<T extends object>(this: LoDashImplicitWrapper<T | null | undefined>): LoDashImplicitWrapper<Array<T[keyof T]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.shuffle
         */
        shuffle<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.shuffle
         */
        shuffle<T extends object>(this: LoDashExplicitWrapper<T | null | undefined>): LoDashExplicitWrapper<Array<T[keyof T]>>;
    }
}