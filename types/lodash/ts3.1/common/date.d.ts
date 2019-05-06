import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        now(): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.now
         */
        now(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.now
         */
        now(): PrimitiveChain<number>;
    }
}
