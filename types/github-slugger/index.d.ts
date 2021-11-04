// Type definitions for github-slugger 1.3
// Project: https://github.com/Flet/github-slugger
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Generate a slug just like GitHub does for markdown headings.
 * It also ensures slugs are unique in the same way GitHub does it. The overall goal of this package is to emulate the way GitHub handles generating markdown heading anchors as close as possible
 */
declare class BananaSlug {
    /**
     *
     * @param value  string of text to slugify
     * @param [maintainCase=false] Keep the current case, otherwise make all lowercase
     */
    static slug(value: string | unknown, maintainCase?: boolean): string;

    /**
     *
     * @param value  string of text to slugify
     * @param [maintainCase=false] Keep the current case, otherwise make all lowercase
     */
    slug(value: string, maintainCase?: boolean): string;
    /**
     * Forget all previous slugs
     */
    reset(): void;
}

export = BananaSlug;
