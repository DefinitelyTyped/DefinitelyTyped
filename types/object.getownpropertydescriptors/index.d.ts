// Type definitions for object.getownpropertydescriptors 2.1
// Project: https://github.com/ljharb/object.getownpropertydescriptors#readme
// Definitions by: Vitor Luiz Cavalcanti <https://github.com/VitorLuizC>
//                 Jordan Harband <https://github.com/ljharb>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import polyfill = require('./implementation');
import getImpl = require('./polyfill');
import shimImpl = require('./shim');

/**
 * Returns an object containing all own property descriptors of an object
 * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
 */
declare function getOwnPropertyDescriptors<T>(
    o: T,
): {
    -readonly [P in keyof T]: TypedPropertyDescriptor<T[P]>;
} & {
    [property: string]: PropertyDescriptor;
};

declare namespace getOwnPropertyDescriptors {
    function getPolyfill(): ReturnType<typeof getImpl>;
    const implementation: typeof polyfill;
    function shim(): ReturnType<typeof shimImpl>;
}

export = getOwnPropertyDescriptors;
