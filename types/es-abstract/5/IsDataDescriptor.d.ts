import type { DataDescriptor, PropertyDescriptor } from '../index';

declare function IsDataDescriptor<T = unknown>(Desc: PropertyDescriptor<T>): Desc is DataDescriptor<T>;
declare function IsDataDescriptor(Desc: unknown): Desc is DataDescriptor;
export = IsDataDescriptor;
