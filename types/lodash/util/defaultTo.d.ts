import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks `value` to determine whether a default value should be returned in
         * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
         * or `undefined`.
         *
         * @param value The value to check.
         * @param defaultValue The default value.
         * @returns Returns the resolved value.
         */
        defaultTo<T>(value: T | null | undefined, defaultValue: T): T;

        /**
         * @see _.defaultTo
         */
        defaultTo<T, TDefault>(
            value: T | null | undefined,
            defaultValue: TDefault
        ): T | TDefault;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.defaultTo
         */
        defaultTo<T>(this: LoDashImplicitWrapper<T | null | undefined>, defaultValue: T): T;

        /**
         * @see _.defaultTo
         */
        defaultTo<T, TDefault>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            defaultValue: TDefault
        ): T | TDefault;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.defaultTo
         */
        defaultTo<T>(this: LoDashExplicitWrapper<T | null | undefined>, defaultValue: T): LoDashExplicitWrapper<T>;

        /**
         * @see _.defaultTo
         */
        defaultTo<T, TDefault>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            defaultValue: TDefault
        ): LoDashExplicitWrapper<T | TDefault>;
    }
}