import * as _ from "..";
declare module ".." {
    interface LoDashWrapper<TValue> {
        /**
         * Produces the result of coercing the unwrapped value to a string.
         *
         * @return Returns the coerced string value.
         */
        toString(): string;
    }
}