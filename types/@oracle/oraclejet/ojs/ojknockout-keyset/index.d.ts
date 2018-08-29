/// <reference types='ojs/ojkeyset'/>
export class ObservableExpandedKeySet<K> {
    constructor(initialValue?: KeySet.ExpandedKeySet<K>|KeySet.ExpandAllKeySet<K>);
    add(keys: Set<K>|Array<K>): ObservableExpandedKeySet<K>;
    addAll(): ObservableExpandedKeySet<K>;
    clear(): ObservableExpandedKeySet<K>;
    delete(keys: Set<K>|Array<K>): ObservableExpandedKeySet<K>;
  }

