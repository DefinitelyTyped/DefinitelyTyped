// Type definitions for find-project-root 1.1
// Project: https://github.com/kirstein/find-project-root
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/**
 * Finds the project root by custom markers
 */
declare function findProjectRoot(
    path: string,
    options?: findProjectRoot.Options
): null | string;

declare namespace findProjectRoot {
    interface Options {
        /**
         * total number of levels the algorithm can traverse
         */
        maxDepth?: number;
        /**
         * markers that it will search for
         */
        markers?: string[];
    }
}

export = findProjectRoot;
