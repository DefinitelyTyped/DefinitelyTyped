// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface BindAll {
    /**
     * Binds methods of an object to the object itself, overwriting the existing method. Method names may be
     * specified as individual arguments or as arrays of method names. If no method names are provided all
     * enumerable function properties, own and inherited, of object are bound.
     *
     * Note: This method does not set the "length" property of bound functions.
     *
     * @param object The object to bind and assign the bound methods to.
     * @param methodNames The object method names to bind, specified as individual method names or arrays of
     * method names.
     * @return Returns object.
     */
    (): BindAll;
    /**
     * Binds methods of an object to the object itself, overwriting the existing method. Method names may be
     * specified as individual arguments or as arrays of method names. If no method names are provided all
     * enumerable function properties, own and inherited, of object are bound.
     *
     * Note: This method does not set the "length" property of bound functions.
     *
     * @param object The object to bind and assign the bound methods to.
     * @param methodNames The object method names to bind, specified as individual method names or arrays of
     * method names.
     * @return Returns object.
     */
    (methodNames: _.Many<string>): BindAll1x1;
    /**
     * Binds methods of an object to the object itself, overwriting the existing method. Method names may be
     * specified as individual arguments or as arrays of method names. If no method names are provided all
     * enumerable function properties, own and inherited, of object are bound.
     *
     * Note: This method does not set the "length" property of bound functions.
     *
     * @param object The object to bind and assign the bound methods to.
     * @param methodNames The object method names to bind, specified as individual method names or arrays of
     * method names.
     * @return Returns object.
     */
    <T>(methodNames: _.Many<string>, object: T): T;
}
interface BindAll1x1 {
    /**
     * Binds methods of an object to the object itself, overwriting the existing method. Method names may be
     * specified as individual arguments or as arrays of method names. If no method names are provided all
     * enumerable function properties, own and inherited, of object are bound.
     *
     * Note: This method does not set the "length" property of bound functions.
     *
     * @param object The object to bind and assign the bound methods to.
     * @param methodNames The object method names to bind, specified as individual method names or arrays of
     * method names.
     * @return Returns object.
     */
    (): BindAll1x1;
    /**
     * Binds methods of an object to the object itself, overwriting the existing method. Method names may be
     * specified as individual arguments or as arrays of method names. If no method names are provided all
     * enumerable function properties, own and inherited, of object are bound.
     *
     * Note: This method does not set the "length" property of bound functions.
     *
     * @param object The object to bind and assign the bound methods to.
     * @param methodNames The object method names to bind, specified as individual method names or arrays of
     * method names.
     * @return Returns object.
     */
    <T>(object: T): T;
}

declare const bindAll: BindAll;
export = bindAll;
