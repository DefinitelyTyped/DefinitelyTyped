interface SourceMapUrl {
    regex: RegExp;

    /**
     * Returns the source mapping URL from the given code string, or null if not found.
     */
    getFrom(code: string): string | null;

    /**
     * Returns true if a source mapping URL exists in the given code string.
     */
    existsIn(code: string): boolean;

    /**
     * Removes the source mapping URL comment from the given code string.
     */
    removeFrom(code: string): string;

    /**
     * Inserts a string before the source mapping URL comment, or appends it to the end.
     */
    insertBefore(code: string, string: string): string;
}

declare const sourceMappingURL: SourceMapUrl;
export = sourceMappingURL;
