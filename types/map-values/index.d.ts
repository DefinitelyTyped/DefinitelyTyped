declare function mapValues<TKey extends string | number | symbol, TValue, TNewValue = TValue>(
    obj: Record<TKey, TValue>,
    mapFn: (value: TValue, key: TKey, obj: Record<TKey, TValue>) => TNewValue,
): Record<TKey, TNewValue>;

export = mapValues;
