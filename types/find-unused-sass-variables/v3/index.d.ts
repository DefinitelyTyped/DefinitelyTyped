declare const FindUnusedSassVariables: {
    /**
     * Returns an object with `unused` and `total`.
     * `unused` has the array of unused variables and `total` has the sum of all variables in the files
     * (unused and used ones).
     */
    find: (
        dir: string,
        options?: FindUnusedSassVariables.Options,
    ) => FindUnusedSassVariables.Results;
};

declare namespace FindUnusedSassVariables {
    interface Options {
        /**
         * Array of strings of the variables to ignore, e.g. `['$my-var', '$my-second-var']`
         * @default []
         */
        ignore?: string[] | undefined;
    }

    interface Results {
        /** the array of unused variables */
        readonly unused: string[];
        /** he sum of all variables in the files (unused and used ones) */
        readonly total: number;
    }
}

export = FindUnusedSassVariables;
