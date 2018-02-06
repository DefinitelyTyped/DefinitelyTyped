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
        (...sources: any[]): DefaultsDeep1x1;
        /**
         * This method is like _.defaults except that it recursively assigns default properties.
         * @param object The destination object.
         * @param sources The source objects.
         * @return Returns object.
         **/
        (...sources: any[], object: any): any;
    }
    interface DefaultsDeep1x1 {
        /**
         * This method is like _.defaults except that it recursively assigns default properties.
         * @param object The destination object.
         * @param sources The source objects.
         * @return Returns object.
         **/
        (): DefaultsDeep1x1;
        /**
         * This method is like _.defaults except that it recursively assigns default properties.
         * @param object The destination object.
         * @param sources The source objects.
         * @return Returns object.
         **/
        (object: any): any;
    }
}

declare const defaultsDeep: Lodash.DefaultsDeep;
export = defaultsDeep;
