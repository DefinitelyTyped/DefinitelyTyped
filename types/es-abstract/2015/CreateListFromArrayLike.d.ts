declare function CreateListFromArrayLike<T>(
    obj: ArrayLike<T>,
    types?: Array<'Undefined' | 'Null' | 'Boolean' | 'String' | 'Symbol' | 'Number' | 'Object'>,
): T[];
export = CreateListFromArrayLike;
