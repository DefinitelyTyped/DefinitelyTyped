// Type definitions for map-values 1.0
// Project: https://github.com/parshap/js-map-values#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function mapValues<TKey extends string | number | symbol, TValue, TNewValue = TValue>(
  obj: Record<TKey, TValue>,
  mapFn: (value: TValue, key: TKey, obj: Record<TKey, TValue>) => TNewValue
): Record<TKey, TNewValue>;

export = mapValues;
