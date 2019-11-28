export default class URLSearchParams {
    /**
     * Create a new URLSearchParams object.
     */
    constructor(init?: string | URLSearchParams);

    /**
     * Add a new name/value to the receiver.
     */
    append(name: string, value: string): void;

    /**
     * Remove the given name/value from the receiver.
     */
    delete(name: string): void;

    /**
     * Return the first value with the specified name.
     */
    get(name: string): string | null;

    /**
     * Check if the given name exists.
     */
    has(name: string): boolean;

    /**
     * Return *all* values association with the specified name.
     */
    getAll(name: string): string[];

    /**
     * Iterate through the name/value pairs.
     */
    entries(): IterableIterator<[string, string]>;

    /**
     * Iterate through the names.
     */
    keys(): IterableIterator<string>;

    /**
     * Iterate through the values.
     */
    values(): IterableIterator<string>;

    /**
     * Replace all instances of `name` with a single name/value pair.
     */
    set(name: string, value: string): void;

    /**
     * Return a query string suitable for use in a URL.
     */
    toString(): string;
}
