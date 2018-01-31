import * as _ from "../index";
declare module "../index" {
    interface LoDashWrapper<TValue> {
        /**
         * Reverses the wrapped array so the first element becomes the last, the second element becomes the second to
         * last, and so on.
         *
         * Note: This method mutates the wrapped array.
         *
         * @return Returns the new reversed lodash wrapper instance.
         */
        reverse(): this;
    }
}