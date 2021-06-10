import type { AccessorDescriptor, PropertyDescriptor } from '../index';

declare function IsAccessorDescriptor<T = unknown>(Desc: PropertyDescriptor<T>): Desc is AccessorDescriptor<T>;
declare function IsAccessorDescriptor(Desc: unknown): Desc is AccessorDescriptor;
export = IsAccessorDescriptor;
