import _ = require("../index");

declare namespace Lodash {
    interface Unzip {
        /**
         * This method is like _.zip except that it accepts an array of grouped elements and creates an array
         * regrouping the elements to their pre-zip configuration.
         *
         * @param array The array of grouped elements to process.
         * @return Returns the new array of regrouped elements.
         */
        (): Unzip;
        /**
         * This method is like _.zip except that it accepts an array of grouped elements and creates an array
         * regrouping the elements to their pre-zip configuration.
         *
         * @param array The array of grouped elements to process.
         * @return Returns the new array of regrouped elements.
         */
        <T>(array: T[][] | _.List<_.List<T>> | null | undefined): T[][];
    }
}

declare const unzip: Lodash.Unzip;
export = unzip;
