declare function cloneDeep<T>(
    val: T,
    instanceClone?: true | ((val: T) => T),
): T;

export = cloneDeep;
