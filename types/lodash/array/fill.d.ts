import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        fill<T>(
            array: any[] | null | undefined,
            value: T
        ): T[];

        /**
         * @see _.fill
         */
        fill<T>(
            array: List<any> | null | undefined,
            value: T
        ): List<T>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            array: U[] | null | undefined,
            value: T,
            start?: number,
            end?: number
        ): Array<T | U>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            array: List<U> | null | undefined,
            value: T,
            start?: number,
            end?: number
        ): List<T | U>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.fill
         */
        fill<T>(
            this: LoDashImplicitWrapper<any[] | null | undefined>,
            value: T
        ): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.fill
         */
        fill<T>(
            this: LoDashImplicitWrapper<List<any> | null | undefined>,
            value: T
        ): LoDashImplicitWrapper<List<T>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: LoDashImplicitWrapper<U[] | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashImplicitWrapper<Array<T | U>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: LoDashImplicitWrapper<List<U> | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashImplicitWrapper<List<T | U>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.fill
         */
        fill<T>(
            this: LoDashExplicitWrapper<any[] | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.fill
         */
        fill<T>(
            this: LoDashExplicitWrapper<List<any> | null | undefined>,
            value: T
        ): LoDashExplicitWrapper<List<T>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: LoDashExplicitWrapper<U[] | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashExplicitWrapper<Array<T | U>>;

        /**
         * @see _.fill
         */
        fill<T, U>(
            this: LoDashExplicitWrapper<List<U> | null | undefined>,
            value: T,
            start?: number,
            end?: number
        ): LoDashExplicitWrapper<List<T | U>>;
    }
}