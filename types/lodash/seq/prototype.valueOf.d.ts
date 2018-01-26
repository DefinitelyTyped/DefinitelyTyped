import * as _ from "..";
declare module ".." {
    interface LoDashWrapper<TValue> {
        /**
         * @see _.value
         */
        valueOf(): TValue;
    }
}