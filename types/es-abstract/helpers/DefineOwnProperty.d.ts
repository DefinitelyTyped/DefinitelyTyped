import type { PropertyDescriptor as ESPropertyDescriptor, PropertyKey as ESPropertyKey } from '../index';

/**
 * Adds a property to an object, or modifies attributes of an existing property.
 *
 * @param O Object on which to add or modify the property. This can be a native JavaScript object
 *        (that is, a user-defined object or a built in object) or a DOM object.
 * @param P The property name.
 * @param desc Descriptor for the property. It can be for a data property or an accessor property.
 */
declare function DefineOwnProperty(
    IsDataDescriptor: (Desc: ESPropertyDescriptor) => boolean,
    SameValue: (x: unknown, y: unknown) => boolean,
    FromPropertyDescriptor: (Desc: ESPropertyDescriptor) => PropertyDescriptor,
    O: object,
    P: ESPropertyKey,
    desc: ESPropertyDescriptor,
): boolean;

export = DefineOwnProperty;
