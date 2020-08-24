import type { PropertyDescriptor } from '../index';

declare function FromPropertyDescriptor<T = unknown>(Desc: PropertyDescriptor<T>): TypedPropertyDescriptor<T>;
export = FromPropertyDescriptor;
