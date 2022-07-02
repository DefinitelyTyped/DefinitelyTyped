import type { PropertyDescriptor } from '../index';

declare function isSamePropertyDescriptor(
    ES: {
        SameValue(x: unknown, y: unknown): boolean;
    },
    D1: PropertyDescriptor,
    D2: PropertyDescriptor,
): boolean;

export = isSamePropertyDescriptor;
