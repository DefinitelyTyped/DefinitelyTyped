// Type definitions for similarity 1.2
// Project: https://github.com/words/similarity
// Definitions by: Christian Murphy <https://github.com/ChristianMurphy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Project by: Titus Wormer <https://github.com/wooorm>
// TypeScript Version: 2.0

declare namespace similarity {
    interface Options {
        /**
         * treat casing differences as differences
         */
        sensitive?: boolean;
    }
}

declare function similarity(left: string, right: string, options?: similarity.Options): number;

export = similarity;
