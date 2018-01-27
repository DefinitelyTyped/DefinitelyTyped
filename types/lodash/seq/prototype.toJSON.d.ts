import * as _ from "../index";
declare module "../index" {
    interface LoDashWrapper<TValue> {
        /**
         * @see _.value
         */
        toJSON(): TValue;
    }
}