export class ExpandAllKeySet<K> extends KeySet<K> {
    constructor();
    add(keys: Set<K> | K[]): ExpandAllKeySet<K>;
    addAll(): ExpandAllKeySet<K>;
    clear(): ExpandedKeySet<K>;
    delete(keys: Set<K> | K[]): ExpandAllKeySet<K>;
    deletedValues(): Set<K>;
    has(key: K): boolean;
    isAddAll(): boolean;
}
export class ExpandedKeySet<K> extends KeySet<K> {
    constructor(keys?: Set<K> | K[]);
    add(keys: Set<K> | K[]): ExpandedKeySet<K>;
    addAll(): ExpandAllKeySet<K>;
    clear(): ExpandedKeySet<K>;
    delete(keys: Set<K> | K[]): ExpandedKeySet<K>;
    has(key: K): boolean;
    isAddAll(): boolean;
    values(): Set<K>;
}
export abstract class KeySet<K> {
    abstract add(keys: Set<K> | K[]): KeySet<K>;
    abstract addAll(): KeySet<K>;
    abstract clear(): KeySet<K>;
    abstract delete(keys: Set<K> | K[]): KeySet<K>;
    abstract has(key: K): boolean;
    abstract isAddAll(): boolean;
}
