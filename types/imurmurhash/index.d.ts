/**
 * An incremental implementation of MurmurHash3 for JavaScript
 */
interface MurmurHash3 {
    /**
     * Get the result of the hash as a 32-bit positive integer.
     * This performs the tail and finalizer portions of the algorithm, but does not store the result in the state object.
     * This means that it is perfectly safe to get results and then continue adding strings via hash.
     */
    result(): number;

    /**
     * Reset the state object for reuse, optionally using the given seed (defaults to 0 like the constructor). Returns this so calls can be chained.
     * @default 0
     */
    reset(seed?: number): this;

    /**
     * Incrementally add string to the hash.
     * This can be called as many times as you want for the hash state object, including after a call to result()
     */
    hash(value: string): this;
}
declare var MurmurHash3: {
    /**
     * Get a hash state object, optionally initialized with the given string and seed.
     * Seed must be a positive integer if provided.
     * Calling this function without the new keyword will return a cached state object that has been reset.
     * This is safe to use as long as the object is only used from a single thread and no other hashes are created while operating on this one.
     * If this constraint cannot be met, you can use new to create a new state object
     */
    (text?: string, seed?: number): MurmurHash3;
    /**
     * Get a hash state object, optionally initialized with the given string and seed.
     * Seed must be a positive integer if provided.
     * Calling this function without the new keyword will return a cached state object that has been reset.
     * This is safe to use as long as the object is only used from a single thread and no other hashes are created while operating on this one.
     * If this constraint cannot be met, you can use new to create a new state object
     */
    new(text?: string, seed?: number): MurmurHash3;
};

export as namespace MurmurHash3;
export = MurmurHash3;
