import type { GenericDescriptor } from '../index';

declare function IsGenericDescriptor(Desc: unknown): Desc is GenericDescriptor;
export = IsGenericDescriptor;
