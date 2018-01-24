import * as _ from "..";
declare module ".." {
    interface LoDashImplicitWrapper<TValue> {
        /**
         * Creates a clone of the chained sequence planting value as the wrapped value.
         * @param value The value to plant as the wrapped value.
         * @return Returns the new lodash wrapper instance.
         */
        plant<T>(value: T): LoDashImplicitWrapper<T>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.plant
         */
        plant<T>(value: T): LoDashExplicitWrapper<T>;
    }
}