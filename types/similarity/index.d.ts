declare namespace similarity {
    interface Options {
        /**
         * treat casing differences as differences
         */
        sensitive?: boolean | undefined;
    }
}

declare function similarity(left: string, right: string, options?: similarity.Options): number;

export = similarity;
