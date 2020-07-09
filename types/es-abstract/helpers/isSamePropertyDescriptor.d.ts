import { PropertyDescriptor as ESPropertyDescriptor } from '../index';

declare function isSamePropertyDescriptor(
    ES: {
        SameValue(x: unknown, y: unknown): boolean;
    },
    D1: ESPropertyDescriptor,
    D2: ESPropertyDescriptor,
): boolean;

export = isSamePropertyDescriptor;
