export class ExpandAllKeySet<K> extends KeySet<K> {
    constructor();
    add<ExpandAllKeySet>(keys: Set<K>|Array<K>): ExpandAllKeySet
    addAll<ExpandAllKeySet>(): ExpandAllKeySet
    clear<ExpandedKeySet>(): ExpandedKeySet
    delete<ExpandAllKeySet>(keys: Set<K>|Array<K>): ExpandAllKeySet
    deletedValues(): Set<K>;
    has<ExpandAllKeySet>(): ExpandAllKeySet
    isAddAll(): boolean;
  }

export class ExpandedKeySet<K> extends KeySet<K> {
    constructor(keys?: Set<K>|Array<K>);
    add<ExpandedKeySet>(keys: Set<K>|Array<K>): ExpandedKeySet
    addAll<ExpandAllKeySet>(): ExpandAllKeySet
    clear<ExpandedKeySet>(): ExpandedKeySet
    delete<ExpandedKeySet>(keys: Set<K>|Array<K>): ExpandedKeySet
    has(key: K): boolean;
    isAddAll(): boolean;
    values(): Set<K>;
  }

export abstract class KeySet<K> {
    abstract add<KS extends KeySet<K>>(keys: Set<K>|Array<K>): KS
    abstract addAll<KS extends KeySet<K>>(): KS
    abstract clear<KS extends KeySet<K>>(): KS
    abstract delete<KS extends KeySet<K>>(keys: Set<K>|Array<K>): KS
    abstract has(key: K): boolean;
    abstract isAddAll(): boolean;
  }

	export as namespace KeySet;
