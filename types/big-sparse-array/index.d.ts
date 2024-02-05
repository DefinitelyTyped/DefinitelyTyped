declare class BigSparseArray<T> {
    /**
     * Insert a new value at an index. `index` must be a integer.
     */
    set(index: number, value: T): T;

    /**
     * Get a value out. Returns `undefined` if the value could not be found.
     */
    get(index: number): undefined | T;
}

export = BigSparseArray;
