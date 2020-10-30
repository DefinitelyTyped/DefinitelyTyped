/**
 * Returns the keys of the own properties of an object. The own properties of an object are those that are defined directly
 * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
 *
 * @param target Object that contains the own properties.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
declare function OwnPropertyKeys(target: object): Array<string | symbol>;
export = OwnPropertyKeys;
