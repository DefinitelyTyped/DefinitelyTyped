// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface ZipObject {
    /**
     * This method is like _.fromPairs except that it accepts two arrays, one of property
     * identifiers and one of corresponding values.
     *
     * @param props The property names.
     * @param values The property values.
     * @return Returns the new object.
     */
    (): ZipObject;
    /**
     * This method is like _.fromPairs except that it accepts two arrays, one of property
     * identifiers and one of corresponding values.
     *
     * @param props The property names.
     * @param values The property values.
     * @return Returns the new object.
     */
    (props: _.List<_.PropertyName>): ZipObject1x1;
    /**
     * This method is like _.fromPairs except that it accepts two arrays, one of property
     * identifiers and one of corresponding values.
     *
     * @param props The property names.
     * @param values The property values.
     * @return Returns the new object.
     */
    <T>(props: _.List<_.PropertyName>, values: _.List<T>): _.Dictionary<T>;
}
interface ZipObject1x1 {
    /**
     * This method is like _.fromPairs except that it accepts two arrays, one of property
     * identifiers and one of corresponding values.
     *
     * @param props The property names.
     * @param values The property values.
     * @return Returns the new object.
     */
    (): ZipObject1x1;
    /**
     * This method is like _.fromPairs except that it accepts two arrays, one of property
     * identifiers and one of corresponding values.
     *
     * @param props The property names.
     * @param values The property values.
     * @return Returns the new object.
     */
    <T>(values: _.List<T>): _.Dictionary<T>;
}

declare const zipObj: ZipObject;
export = zipObj;
