type RecursiveWeakMap<K extends readonly object[], V> = WeakMap<K[number], V | RecursiveWeakMap<K, V>>;
export default class ChainMap<K extends readonly object[], V> {
    weakMap: RecursiveWeakMap<K, V>;
    constructor();
    get(keys: K): V | undefined;
    set(keys: K, value: V): V;
    delete(keys: K): boolean;
}
export {};
