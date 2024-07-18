declare function isDataDesc(obj: unknown): obj is PropertyDescriptor;
declare function isDataDesc<ObjectType extends object>(obj: ObjectType, key: keyof ObjectType): boolean;

export = isDataDesc;
