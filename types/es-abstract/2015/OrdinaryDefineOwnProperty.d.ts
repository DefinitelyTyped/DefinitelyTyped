import type { PropertyDescriptor, PropertyKey } from '../index';

declare function OrdinaryDefineOwnProperty(
    O: object,
    P: PropertyKey,
    Desc: PropertyDescriptor & ThisType<any>,
): boolean;
export = OrdinaryDefineOwnProperty;
