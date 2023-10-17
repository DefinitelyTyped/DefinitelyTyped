/**
 * Finds the project root by custom markers
 */
declare function findProjectRoot(path: string, options?: findProjectRoot.Options): null | string;

declare namespace findProjectRoot {
    interface Options {
        /**
         * total number of levels the algorithm can traverse
         */
        maxDepth?: number | undefined;
        /**
         * markers that it will search for
         */
        markers?: string[] | undefined;
    }

    const MAX_DEPTH: 9;
    const MARKERS: [".git", ".hg"];
}

export = findProjectRoot;
