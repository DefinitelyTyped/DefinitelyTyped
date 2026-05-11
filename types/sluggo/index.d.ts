declare namespace sluggo {
    interface Options {
        /**
         * The separator character to use. Defaults to "-".
         */
        separator?: string | undefined;
        /**
         * A string or list of strings to permit in the output.
         */
        allow?: string | string[] | undefined;
    }
}

/**
 * Generates a slug.
 * @param input The string to generate a slug for.
 * @param options Customize the slug generator's behavior.
 * @returns The generated slug.
 */
declare function sluggo(input: string, options?: sluggo.Options): string;

export = sluggo;
export as namespace sluggo;
