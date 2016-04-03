declare module goog {
    function require(name: 'goog.structs.Trie'): typeof goog.structs.Trie;
}

declare module goog.structs {

    /**
     * Class for a Trie datastructure.  Trie data structures are made out of trees
     * of Trie classes.
     *
     * @param {goog.structs.Trie<VALUE>|Object<string, VALUE>=} opt_trie Optional
     *     goog.structs.Trie or Object to initialize trie with.
     * @constructor
     * @template VALUE
     */
    class Trie<VALUE> {
        constructor(opt_trie?: goog.structs.Trie<VALUE>|{[index: string]: VALUE});
        
        /**
         * Sets the given key/value pair in the trie.  O(L), where L is the length
         * of the key.
         * @param {string} key The key.
         * @param {VALUE} value The value.
         */
        set(key: string, value: VALUE): void;
        
        /**
         * Adds the given key/value pair in the trie.  Throw an exception if the key
         * already exists in the trie.  O(L), where L is the length of the key.
         * @param {string} key The key.
         * @param {VALUE} value The value.
         */
        add(key: string, value: VALUE): void;
        
        /**
         * Adds multiple key/value pairs from another goog.structs.Trie or Object.
         * O(N) where N is the number of nodes in the trie.
         * @param {!Object<string, VALUE>|!goog.structs.Trie<VALUE>} trie Object
         *     containing the data to add.
         */
        setAll(trie: {[index: string]: VALUE}|goog.structs.Trie<VALUE>): void;
        
        /**
         * Retrieves a value from the trie given a key.  O(L), where L is the length of
         * the key.
         * @param {string} key The key to retrieve from the trie.
         * @return {VALUE|undefined} The value of the key in the trie, or undefined if
         *     the trie does not contain this key.
         */
        get(key: string): VALUE|void;
        
        /**
         * Retrieves all values from the trie that correspond to prefixes of the given
         * input key. O(L), where L is the length of the key.
         *
         * @param {string} key The key to use for lookup. The given key as well as all
         *     prefixes of the key are retrieved.
         * @param {?number=} opt_keyStartIndex Optional position in key to start lookup
         *     from. Defaults to 0 if not specified.
         * @return {!Object<string, VALUE>} Map of end index of matching prefixes and
         *     corresponding values. Empty if no match found.
         */
        getKeyAndPrefixes(key: string, opt_keyStartIndex?: number): {[index: string]: VALUE};
        
        /**
         * Gets the values of the trie.  Not returned in any reliable order.  O(N) where
         * N is the number of nodes in the trie.  Calls getValuesInternal_.
         * @return {!Array<VALUE>} The values in the trie.
         */
        getValues(): Array<VALUE>;
        
        /**
         * Gets the keys of the trie.  Not returned in any reliable order.  O(N) where
         * N is the number of nodes in the trie (or prefix subtree).
         * @param {string=} opt_prefix Find only keys with this optional prefix.
         * @return {!Array<string>} The keys in the trie.
         */
        getKeys(opt_prefix?: string): Array<string>;
        
        /**
         * Checks to see if a certain key is in the trie.  O(L), where L is the length
         * of the key.
         * @param {string} key A key that may be in the trie.
         * @return {boolean} Whether the trie contains key.
         */
        containsKey(key: string): boolean;
        
        /**
         * Checks to see if a certain prefix is in the trie. O(L), where L is the length
         * of the prefix.
         * @param {string} prefix A prefix that may be in the trie.
         * @return {boolean} Whether any key of the trie has the prefix.
         */
        containsPrefix(prefix: string): boolean;
        
        /**
         * Checks to see if a certain value is in the trie.  Worst case is O(N) where
         * N is the number of nodes in the trie.
         * @param {VALUE} value A value that may be in the trie.
         * @return {boolean} Whether the trie contains the value.
         */
        containsValue(value: VALUE): boolean;
        
        /**
         * Completely empties a trie of all keys and values.  ~O(1)
         */
        clear(): void;
        
        /**
         * Removes a key from the trie or throws an exception if the key is not in the
         * trie.  O(L), where L is the length of the key.
         * @param {string} key A key that should be removed from the trie.
         * @return {VALUE} The value whose key was removed.
         */
        remove(key: string): VALUE;
        
        /**
         * Clones a trie and returns a new trie.  O(N), where N is the number of nodes
         * in the trie.
         * @return {!goog.structs.Trie<VALUE>} A new goog.structs.Trie with the same
         *     key value pairs.
         */
        clone(): goog.structs.Trie<VALUE>;
        
        /**
         * Returns the number of key value pairs in the trie.  O(N), where N is the
         * number of nodes in the trie.
         * TODO: This could be optimized by storing a weight (count below) in every
         * node.
         * @return {number} The number of pairs.
         */
        getCount(): number;
        
        /**
         * Returns true if this trie contains no elements.  ~O(1).
         * @return {boolean} True iff this trie contains no elements.
         */
        isEmpty(): boolean;
    }
}
