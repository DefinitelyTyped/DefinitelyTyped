declare function addLazyProperty(
    object: object,
    name: string,
    initializer: () => any,
    enumerable?: boolean,
): void;

export = addLazyProperty;
