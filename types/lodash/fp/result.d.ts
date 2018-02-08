// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Result {
    /**
     * This method is like _.get except that if the resolved value is a function it’s invoked with the this binding
     * of its parent object and its result is returned.
     *
     * @param object The object to query.
     * @param path The path of the property to resolve.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Result;
    /**
     * This method is like _.get except that if the resolved value is a function it’s invoked with the this binding
     * of its parent object and its result is returned.
     *
     * @param object The object to query.
     * @param path The path of the property to resolve.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: _.PropertyPath): Result1x1;
    /**
     * This method is like _.get except that if the resolved value is a function it’s invoked with the this binding
     * of its parent object and its result is returned.
     *
     * @param object The object to query.
     * @param path The path of the property to resolve.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TResult>(path: _.PropertyPath, object: any): TResult;
}
interface Result1x1 {
    /**
     * This method is like _.get except that if the resolved value is a function it’s invoked with the this binding
     * of its parent object and its result is returned.
     *
     * @param object The object to query.
     * @param path The path of the property to resolve.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Result1x1;
    /**
     * This method is like _.get except that if the resolved value is a function it’s invoked with the this binding
     * of its parent object and its result is returned.
     *
     * @param object The object to query.
     * @param path The path of the property to resolve.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TResult>(object: any): TResult;
}

declare const result: Result;
declare namespace result {}
export = result;
