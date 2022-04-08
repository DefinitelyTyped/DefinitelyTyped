export = lazy;

declare function lazy(obj: { [key: string]: PropertyDescriptor }): PropertyDescriptorMap;
