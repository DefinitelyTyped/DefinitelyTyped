// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

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
    (paths: _.List<_.PropertyPath>): ZipObjectDeep1x1;
    /**
     * This method is like _.zipObject except that it supports property paths.
     *
     * @param paths The property names.
     * @param values The property values.
     * @return Returns the new object.
     */
    (paths: _.List<_.PropertyPath>, values: _.List<any>): object;
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
    (values: _.List<any>): object;
}

declare const zipObjectDeep: ZipObjectDeep;
export = zipObjectDeep;
