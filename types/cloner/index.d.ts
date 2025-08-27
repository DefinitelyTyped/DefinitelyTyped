/**
 * Deep-style methods that will perform operations by value, instead of reference.
 */
export namespace deep {
    /**
     * Will loop over all own keys and deeply copy (copy by value) them to a new object.
     *
     * Preserves inheritance and is recursion aware, meaning it shouldn't fail with recursive properties.
     * @param [obj] The object to copy.
     */
    function copy<T>(obj: T): T;
    /**
     * Preserves what's already in the target and merges all own keys found in one or more passed sources.
     *
     * Properties are merged by value.
     * @param [target] Destination object for merged properties.
     * @param [sources] Source object(s) for properties to merge.
     */
    function merge(target: any, ...sources: any[]): any;
}
/**
 * Shallow-style methods that will perform operations by reference, instead of value.
 */
export namespace shallow {
    /**
     * Will loop over all own keys and shallow copy (copy by reference) them to a new object.
     *
     * Preserves inheritance and is recursion aware, meaning it shouldn't fail with recursive properties.
     * @param [obj] The object to copy.
     */
    function copy<T>(obj: T): T;
    /**
     * Preserves what's already in the target and merges all own keys found in one or more passed sources.
     *
     * Properties are merged by reference.
     * @param [target] Destination object for merged properties.
     * @param [sources] Source object(s) for properties to merge.
     */
    function merge(target: any, ...sources: any[]): any;
}
