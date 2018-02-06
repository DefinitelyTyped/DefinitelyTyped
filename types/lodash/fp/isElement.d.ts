import _ = require("../index");

declare namespace Lodash {
    interface IsElement {
        /**
         * Checks if value is a DOM element.
         *
         * @param value The value to check.
         * @return Returns true if value is a DOM element, else false.
         */
        (): IsElement;
        /**
         * Checks if value is a DOM element.
         *
         * @param value The value to check.
         * @return Returns true if value is a DOM element, else false.
         */
        (value: any): boolean;
    }
}

declare const isElement: Lodash.IsElement;
export = isElement;
