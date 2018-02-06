import _ = require("../index");

declare namespace Lodash {
    interface DefaultsDeep {
        /**
         * This method is like _.defaults except that it recursively assigns default properties.
         * @param object The destination object.
         * @param sources The source objects.
         * @return Returns object.
         **/
        (): DefaultsDeep;
        /**
         * This method is like _.defaults except that it recursively assigns default properties.
         * @param object The destination object.
         * @param sources The source objects.
         * @return Returns object.
         **/
        (object: ReadonlyArray<any>): any;
    }
}

declare const defaultsDeepAll: Lodash.DefaultsDeep;
export = defaultsDeepAll;
