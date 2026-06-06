export = sortObjectByKeyNameList;

declare function sortObjectByKeyNameList<T>(
    object: T,
    sortWith?: ReadonlyArray<keyof T> | ((a: keyof T, b: keyof T) => number),
): T;
