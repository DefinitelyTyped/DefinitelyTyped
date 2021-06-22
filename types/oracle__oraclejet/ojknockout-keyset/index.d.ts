import { ExpandedKeySet, ExpandAllKeySet } from '../ojkeyset';
export class ObservableExpandedKeySet<K> {
    constructor(initialValue?: ExpandedKeySet<K> | ExpandAllKeySet<K>);
    add(keys: Set<K> | K[]): ObservableExpandedKeySet<K>;
    addAll(): ObservableExpandedKeySet<K>;
    clear(): ObservableExpandedKeySet<K>;
    delete(keys: Set<K> | K[]): ObservableExpandedKeySet<K>;
}
