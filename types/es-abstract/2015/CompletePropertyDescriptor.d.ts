import type { GenericDescriptor, PropertyDescriptor } from '../index';

declare function CompletePropertyDescriptor<D extends PropertyDescriptor>(
    Desc: D & ThisType<any>,
): Required<
    D extends { '[[Value]]': infer T }
        ? GenericDescriptor & {
            '[[Value]]': T;
            '[[Writable]]': boolean;
        }
        : D extends { '[[Value]]'?: infer T } | { '[[Writable]]'?: boolean }
        ? GenericDescriptor & {
            '[[Value]]': T | undefined;
            '[[Writable]]': boolean;
        }
        : D extends { '[[Get]]'?: () => infer T } | { '[[Set]]'?: (value: infer T) => void }
        ? GenericDescriptor & {
            '[[Get]]': (() => T) | undefined;
            '[[Set]]': ((value: T) => void) | undefined;
        }
        : D & PropertyDescriptor
>;
declare function CompletePropertyDescriptor(Desc: PropertyDescriptor & ThisType<any>): Required<PropertyDescriptor>;
export = CompletePropertyDescriptor;
