import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method returns `false`.
         *
         * @returns Returns `false`.
         */
        stubFalse(): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubFalse
         */
        stubFalse(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubFalse
         */
        stubFalse(): LoDashExplicitWrapper<boolean>;
    }
}