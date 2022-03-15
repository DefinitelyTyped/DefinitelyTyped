import { EJSONable } from 'meteor/ejson';

declare module 'meteor/reactive-dict' {
    class ReactiveDict<O = EJSONable> {
        /**
         * Constructor for a ReactiveDict, which represents a reactive dictionary of key/value pairs.
         * @param name When a name is passed, preserves contents across Hot Code Pushes
         * @param initialValue The default values for the dictionary
         */
        constructor(name?: string, initialValue?: Partial<O>);
        /**
         * Set a value for a key if it hasn't been set before.
         * Otherwise works exactly the same as `ReactiveDict.set`.
         * @param key The key to set, eg, `selectedItem`
         * @param value The new value for `key`
         */
        setDefault<P extends keyof O>(key: P, value?: O[P]): void;
        /**
         * Set a value for a key if it hasn't been set before.
         * Otherwise works exactly the same as `ReactiveDict.set`.
         */
        setDefault(object: Partial<O>): void;
        /**
         * Set a value for a key in the ReactiveDict. Notify any listeners
         * that the value has changed (eg: redraw templates, and rerun any
         * `Tracker.autorun` computations, that called
         * `ReactiveDict.get` on this `key`.)
         * @param key The key to set, eg, `selectedItem`
         * @param value The new value for `key`
         */
        set<P extends keyof O>(key: P, value?: O[P]): void;
        /**
         * Set a value for a key in the ReactiveDict. Notify any listeners
         * that the value has changed (eg: redraw templates, and rerun any
         * `Tracker.autorun` computations, that called
         * `ReactiveDict.get` on this `key`.)
         */
        set(object: Partial<O>): void;
        /**
         * Get the value assiciated with a key. If inside a reactive
         * computation, invalidate the computation the next time the
         * value associated with this key is changed by `ReactiveDict.set`.
         * This returns a clone of the value, so if it's an object or an array,
         * mutating the returned value has no effect on the value stored in the
         * ReactiveDict.
         * @param key The key of the element to return
         */
        get<P extends keyof O>(key: P): O[P] | undefined;
        /**
         * Test if the stored entry for a key is equal to a value. If inside a
         * reactive computation, invalidate the computation the next
         * time the variable changes to or from the value.
         * @param key The name of the session variable to test
         * @param value The value to
         * test against
         */
        equals<P extends keyof O>(key: P, value: string | number | boolean | undefined | null): boolean;
        /**
         * Get all key-value pairs as a plain object. If inside a reactive
         * computation, invalidate the computation the next time the
         * value associated with any key is changed by `ReactiveDict.set`.
         * This returns a clone of each value, so if it's an object or an array,
         * mutating the returned value has no effect on the value stored in the
         * ReactiveDict.
         */
        all(): Partial<O>;
        /**
         * remove all key-value pairs from the ReactiveDict. Notify any
         * listeners that the value has changed (eg: redraw templates, and rerun any
         * `Tracker.autorun` computations, that called
         * `ReactiveDict.get` on this `key`.)
         */
        clear(): void;

        /**
         * remove a key-value pair from the ReactiveDict. Notify any listeners
         * that the value has changed (eg: redraw templates, and rerun any
         * `Tracker.autorun` computations, that called
         * `ReactiveDict.get` on this `key`.)
         * @param key The key to delete, eg, `selectedItem`
         * @return did remove
         */
        delete<P extends keyof O>(key: P): boolean;
        /**
         * Clear all values from the reactiveDict and prevent it from being
         * migrated on a Hot Code Pushes. Notify any listeners
         * that the value has changed (eg: redraw templates, and rerun any
         * `Tracker.autorun` computations, that called
         * `ReactiveDict.get` on this `key`.)
         */
        destroy(): void;
    }
}
