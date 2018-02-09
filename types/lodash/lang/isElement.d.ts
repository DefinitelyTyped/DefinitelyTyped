import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Checks if value is a DOM element.
         *
         * @param value The value to check.
         * @return Returns true if value is a DOM element, else false.
         */
        isElement(value?: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isElement
         */
        isElement(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isElement
         */
        isElement(): LoDashExplicitWrapper<boolean>;
    }
}