interface Options {
    /**
     * Searches inside words.
     *
     * @default false
     */
    insideWords?: boolean;
    /**
     * Finds all occurrences of each match.
     *
     * @default false
     */
    findAllOccurrences?: boolean;
    /**
     * Requires each word of query to be found in text or else returns an empty
     * set.
     *
     * @default false
     */
    requireMatchAll?: boolean;
}

declare function match(text: string, query: string, options?: Options): Array<[number, number]>;

export = match;
