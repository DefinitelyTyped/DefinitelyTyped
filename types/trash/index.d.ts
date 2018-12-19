// Type definitions for trash 4.3
// Project: https://github.com/sindresorhus/trash#readme
// Definitions by: Matthew James <https://github.com/matthew-matvei>
//                 Keiichiro Amemiya <https://github.com/hoishin>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Move files and folders to the trash
 *
 * @param paths Accepts paths and [glob patterns](https://github.com/sindresorhus/globby#globbing-patterns).
 * @param options.glob Enable globbing when matching file paths
 */
declare function trash(paths: string | string[], options?: trash.Options): Promise<void>;

declare namespace trash {
    interface Options {
        glob: boolean;
    }
}

export = trash;
