import type { PropertyDescriptor } from '../index';

declare function ToPropertyDescriptor<T = unknown>(Desc: TypedPropertyDescriptor<T>): PropertyDescriptor<T>;
export = ToPropertyDescriptor;
