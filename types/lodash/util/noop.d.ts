import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * A no-operation function that returns undefined regardless of the arguments it receives.
         *
         * @return undefined
         */
        noop(...args: any[]): void;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.noop
         */
        noop(...args: any[]): void;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.noop
         */
        noop(...args: any[]): LoDashExplicitWrapper<undefined>;
    }
}