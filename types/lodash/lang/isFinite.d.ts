import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if value is a finite primitive number.
         *
         * Note: This method is based on Number.isFinite.
         *
         * @param value The value to check.
         * @return Returns true if value is a finite number, else false.
         */
        isFinite(value?: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isFinite
         */
        isFinite(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isFinite
         */
        isFinite(): LoDashExplicitWrapper<boolean>;
    }
}