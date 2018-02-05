import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like _.clone except that it recursively clones value.
         *
         * @param value The value to recursively clone.
         * @return Returns the deep cloned value.
         */
        cloneDeep<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(): TValue;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.cloneDeep
         */
        cloneDeep(): this;
    }
}