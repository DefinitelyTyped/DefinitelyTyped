import {
	AccessorDescriptor as ESAccessorDescriptor,
	DataDescriptor as ESDataDescriptor,
	PropertyDescriptor as ESPropertyDescriptor,
} from '../index';

declare function IsPropertyDescriptor(
	ES: {
		Type(O: unknown): string | undefined;
		IsAccessorDescriptor(Desc: unknown): Desc is ESAccessorDescriptor;
		IsDataDescriptor(Desc: unknown): Desc is ESDataDescriptor;
	},
	Desc: unknown,
): Desc is ESPropertyDescriptor;

export = IsPropertyDescriptor;
