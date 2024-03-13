declare function using<T extends any[]>(
    values: using.ValueType<T[]>,
    func: (...data: Array<using.ArrayFuncArgType<T>>) => void,
): void;
declare function using<T>(values: using.ValueType<T[]>, func: (data: T) => void): void;
declare function using<T>(
    values: using.ValueType<Record<string, T>>,
    func: (data: T, description: string) => void,
): void;

declare namespace using {
    type ValueType<T> = T | (() => T);
    type ArrayFuncArgType<T> = T extends Array<infer U> ? U : never;
}

export = using;
