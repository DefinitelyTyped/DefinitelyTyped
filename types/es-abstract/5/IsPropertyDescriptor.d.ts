import type { PropertyDescriptor } from '../index';

declare function IsPropertyDescriptor(Desc: unknown): Desc is PropertyDescriptor;
export = IsPropertyDescriptor;
