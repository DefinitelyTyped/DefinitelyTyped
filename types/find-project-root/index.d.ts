// Type definitions for find-project-root 1.1
// Project: https://github.com/kirstein/find-project-root
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Finds the project root by custom markers
 */
declare function findProjectRoot(path: string, options?: findProjectRoot.Options): null | string;

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

    const MAX_DEPTH: 9;
    const MARKERS: [".git", ".hg"];
}

export = findProjectRoot;
