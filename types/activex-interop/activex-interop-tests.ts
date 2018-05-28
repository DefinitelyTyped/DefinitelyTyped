// copied from the definitions in activex-scripting
interface Dictionary<TKey = any, TItem = any> {
    /** Add a new key and item to the dictionary. */
    Add(Key: TKey, Item: TItem): void;

    /** Get the number of items in the dictionary. */
    readonly Count: number;

    /** Determine if a given key is in the dictionary. */
    Exists(Key: TKey): boolean;
    HashVal(Key: TKey): any;

    /** Set or get the item for a given key */
    Item(Key: TKey): TItem;

    /** Get an array containing all items in the dictionary. */
    Items(): SafeArray<TItem>;

    /** Change a key to a different key. */
    Key(Key: TKey): TKey;

    /** Get an array containing all keys in the dictionary. */
    Keys(): SafeArray<TKey>;

    /** Remove a given key from the dictionary. */
    Remove(Key: TKey): void;

    /** Remove all information from the dictionary. */
    RemoveAll(): void;

    /** Set or get the item for a given key */
    (Key: TKey): TItem;
}

interface ActiveXObjectNameMap {
    'Scripting.Dictionary': Dictionary;
}

const dict: Dictionary<string, number> = new ActiveXObject('Scripting.Dictionary');
dict.Add('one', 1);
dict.Add('two', 2);
dict.Add('three', 3);

const keyEnumerator = new Enumerator(dict.Keys());
keyEnumerator.moveFirst();
while (!keyEnumerator.atEnd()) {
    const item = dict(keyEnumerator.item());
    const power = Math.pow(item, 2);
}
