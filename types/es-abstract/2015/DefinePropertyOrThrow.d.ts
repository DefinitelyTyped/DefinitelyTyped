import type { PropertyDescriptor, PropertyKey } from '../index';

declare function DefinePropertyOrThrow(O: object, P: PropertyKey, desc: PropertyDescriptor & ThisType<any>): boolean;
export = DefinePropertyOrThrow;
