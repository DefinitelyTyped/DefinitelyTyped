// Type definitions for @sindresorhus/slugify 0.6
// Project: https://github.com/sindesorhus/slugify
// Definitions by: Carlos Precioso <https://github.com/cprecioso>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace slugify {
    interface Options {
        /**
         * @default "-"
         */
        separator?: string;

        /**
         * Make the slug lowercase.
         * @default true
         */
        lowercase?: boolean;

        /**
         * Convert camelcase to separate words. Internally it does `fooBar` → `foo bar`.
         * @default true
         */
        decamelize?: boolean;

        /**
         * Specifying this only replaces the default if you set an item with the same key, like &.
         * The replacements are run on the original string before any other transformations.
         *
         * Add a leading and trailing space to the replacement to have it separated by dashes.
         *
         * @default [ ['&', ' and '], ['🦄', ' unicorn '], ['♥', ' love '] ]
         */
        customReplacements?: ReadonlyArray<[string, string]>;
    }
}

/**
 * Slugify a string
 */
declare function slugify(input: string, options?: slugify.Options): string;

export = slugify;
