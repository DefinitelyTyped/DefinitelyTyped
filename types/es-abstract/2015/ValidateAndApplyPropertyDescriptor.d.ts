import type { PropertyDescriptor, PropertyKey } from '../index';

declare function ValidateAndApplyPropertyDescriptor(
    O: undefined,
    P: unknown,
    extensible: boolean,
    Desc: PropertyDescriptor & ThisType<any>,
    current?: PropertyDescriptor & ThisType<any>,
): boolean;
declare function ValidateAndApplyPropertyDescriptor(
    O: object | undefined,
    P: PropertyKey,
    extensible: boolean,
    Desc: PropertyDescriptor & ThisType<any>,
    current?: PropertyDescriptor & ThisType<any>,
): boolean;
export = ValidateAndApplyPropertyDescriptor;
