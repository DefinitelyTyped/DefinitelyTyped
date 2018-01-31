import * as _ from "../index";
declare module "../index" {
    interface LoDashWrapper<TValue> {
        /**
         * Executes the chained sequence to extract the unwrapped value.
         *
         * @alias _.toJSON, _.valueOf
         *
         * @return Returns the resolved unwrapped value.
         */
        value(): TValue;
    }
}