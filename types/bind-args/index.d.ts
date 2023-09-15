// Type definitions for bind-args 0.2
// Project: https://github.com/kerryChen95/bind-args#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TODO: Once TypeScript gets optional length tuples, types can be more accurate
declare function bindArgs<T extends (...args: any) => any>(
    func: T,
    ...params: Array<Parameters<T>[number]>
): (...args: Array<Parameters<T>[number]>) => ReturnType<T>;

export = bindArgs;
