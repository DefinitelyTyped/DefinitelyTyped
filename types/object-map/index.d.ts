declare function objectMap<TInput, TOutput, TThis>(
    target: { [k: string]: TInput },
    callback: (this: TThis, currentValue: TInput, key: string, object: { [k: string]: TInput }) => TOutput,
    thisArg?: TThis,
): { [k: string]: TOutput };

export = objectMap;
