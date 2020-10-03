import type { PropertyDescriptor, PropertyKey } from '../index';

declare function DefinePropertyOrThrow<O extends object>(
    O: O,
    P: PropertyKey,
    desc: PropertyDescriptor & ThisType<O>,
): boolean;
export = DefinePropertyOrThrow;
