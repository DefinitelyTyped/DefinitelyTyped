// Type definitions for p-props 1.0
// Project: https://github.com/sindresorhus/p-props#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = pProps;

declare function pProps<V, M extends { [key: string]: PromiseLike<V> | V }>(input: M): Promise<Record<keyof M, V>>;
declare function pProps<K, V>(input: Map<K, PromiseLike<V> | V>): Promise<Map<K, V>>;
