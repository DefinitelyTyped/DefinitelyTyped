// Type definitions for object.getownpropertydescriptors 2.0
// Project: https://github.com/ljharb/object.getownpropertydescriptors#readme
// Definitions by: Vitor Luiz Cavalcanti <https://github.com/VitorLuizC>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * Returns an object containing all own property descriptors of an object
 * @param o - Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
 */
declare function getOwnPropertyDescriptors <T extends object>(o: T): { [K in keyof T]: TypedPropertyDescriptor<T[K]> } & PropertyDescriptorMap;

declare namespace getOwnPropertyDescriptors {
    function shim(): typeof getOwnPropertyDescriptors;
    function getPolyfill(): typeof getOwnPropertyDescriptors;
    function implementation(): typeof getOwnPropertyDescriptors;
}

export = getOwnPropertyDescriptors;
