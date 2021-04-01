/**
 * Executes the provided `callback` once for each enumerable own property in the
 * object until it finds one where callback returns a falsy value. If such a
 * property is found, `everyObject` immediately returns false. Otherwise, it
 * returns true.
 *
 * The `callback` is invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `everyObject` will not be
 * visited by `callback`. If the values of existing properties are changed, the
 * value passed to `callback` will be the value at the time `everyObject`
 * visits them. Properties that are deleted before being visited are not
 * visited.
 */
declare function everyObject(
    o: object | null,
    callback: (value: any, name: string, o: object) => any,
    context?: any,
): boolean;

declare namespace everyObject {}

export = everyObject;
