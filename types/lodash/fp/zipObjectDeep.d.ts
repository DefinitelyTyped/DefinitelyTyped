import _ = require("../index");

declare namespace Lodash {
    interface ZipObjectDeep {
        /**
         * This method is like _.zipObject except that it supports property paths.
         *
         * @param paths The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        (): ZipObjectDeep;
        /**
         * This method is like _.zipObject except that it supports property paths.
         *
         * @param paths The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        (values: _.List<any>): ZipObjectDeep1x1;
        /**
         * This method is like _.zipObject except that it supports property paths.
         *
         * @param paths The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        (values: _.List<any>, paths: _.List<_.PropertyPath>): object;
    }
    interface ZipObjectDeep1x1 {
        /**
         * This method is like _.zipObject except that it supports property paths.
         *
         * @param paths The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        (): ZipObjectDeep1x1;
        /**
         * This method is like _.zipObject except that it supports property paths.
         *
         * @param paths The property names.
         * @param values The property values.
         * @return Returns the new object.
         */
        (paths: _.List<_.PropertyPath>): object;
    }
}

declare const zipObjectDeep: Lodash.ZipObjectDeep;
export = zipObjectDeep;
