import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method returns `true`.
         *
         * @returns Returns `true`.
         */
        stubTrue(): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubTrue
         */
        stubTrue(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubTrue
         */
        stubTrue(): LoDashExplicitWrapper<boolean>;
    }
}