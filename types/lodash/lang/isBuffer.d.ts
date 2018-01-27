import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if value is a buffer.
         *
         * @param value The value to check.
         * @return Returns true if value is a buffer, else false.
         */
        isBuffer(value?: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isBuffer
         */
        isBuffer(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isBuffer
         */
        isBuffer(): LoDashExplicitWrapper<boolean>;
    }
}