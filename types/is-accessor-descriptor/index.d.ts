/**
 * Returns true if a value has the characteristics of a valid JavaScript accessor descriptor.
 *
 * @param obj - The value to check, or the object containing the property
 * @param key - Optional property key to check on the object
 * @param checkProto - If true, check the prototype chain
 * @returns Whether the value is a valid accessor descriptor
 */
declare function isAccessorDescriptor(obj: unknown, key?: string, checkProto?: boolean): boolean;

export = isAccessorDescriptor;
