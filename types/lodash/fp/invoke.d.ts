// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Invoke {
    /**
    * Invokes the method at path of object.
    * @param object The object to query.
    * @param path The path of the method to invoke.
    * @param args The arguments to invoke the method with.
    **/
    (): Invoke;
    /**
    * Invokes the method at path of object.
    * @param object The object to query.
    * @param path The path of the method to invoke.
    * @param args The arguments to invoke the method with.
    **/
    (path: _.PropertyPath): Invoke1x1;
    /**
    * Invokes the method at path of object.
    * @param object The object to query.
    * @param path The path of the method to invoke.
    * @param args The arguments to invoke the method with.
    **/
    (path: _.PropertyPath, object: any): any;
}
interface Invoke1x1 {
    /**
    * Invokes the method at path of object.
    * @param object The object to query.
    * @param path The path of the method to invoke.
    * @param args The arguments to invoke the method with.
    **/
    (): Invoke1x1;
    /**
    * Invokes the method at path of object.
    * @param object The object to query.
    * @param path The path of the method to invoke.
    * @param args The arguments to invoke the method with.
    **/
    (object: any): any;
}

declare const invoke: Invoke;
export = invoke;
