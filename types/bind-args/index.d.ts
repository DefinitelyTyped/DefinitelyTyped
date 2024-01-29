// TODO: Once TypeScript gets optional length tuples, types can be more accurate
declare function bindArgs<T extends (...args: any) => any>(
    func: T,
    ...params: Array<Parameters<T>[number]>
): (...args: Array<Parameters<T>[number]>) => ReturnType<T>;

export = bindArgs;
