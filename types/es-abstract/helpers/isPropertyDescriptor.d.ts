import { PropertyDescriptor as ESPropertyDescriptor } from '../index';

declare function IsPropertyDescriptor(
    ES: {
        Type(O: unknown): string | undefined;
        IsAccessorDescriptor(Desc: unknown): boolean;
        IsDataDescriptor(Desc: unknown): boolean;
    },
    Desc: unknown,
): Desc is ESPropertyDescriptor;

export = IsPropertyDescriptor;
