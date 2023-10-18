/**
 * findRemoveSync takes any start directory and searches files from there for removal. the selection of files for removal depends on the given options.
 * and at last, it deletes the selected files/directories
 * @param currentDir any directory to search for files and/or directories for deletion (does not delete that directory itself)
 * @return JSON of files/directories that were deleted. For limit option - will only return number of files deleted.
 */
declare function findRemoveSync(
    currentDir: string,
    options: {
        /** can be a string or an array of files you want to delete within dir */
        files?: string | string[] | undefined;
        /** can be a string or an array of directories you want to delete within dir. */
        dir?: string | string[] | undefined;
        /** this too, can be a string or an array of file extentions you want to delete within dir */
        extensions?: string | string[] | undefined;
        /** useful to exclude some files. again, can be a string or an array of file names you do NOT want to delete within dir */
        ignore?: string | string[] | undefined;
        /** can be any float number. findRemoveSync then compares it with the file stats and deletes those with modification times older than age.seconds */
        age?: { seconds: number } | undefined;
        /** can be any integer number. Will limit the number of files to be deleted at single operation to be limit */
        limit?: number | undefined;
        /** can be any string. Will delete any files that start with prefix */
        prefix?: string | undefined;
        /** advanced: limits filtering to a certain level. useful for performance. recommended for crawling huge directory trees */
        maxLevel?: number | undefined;
        /** advanced: set to true for a test run, meaning it does not delete anything but returns a JSON of files/directories it would have deleted. useful for testing. */
        test?: boolean | undefined;
    },
): number | Record<string, boolean>;

export = findRemoveSync;
