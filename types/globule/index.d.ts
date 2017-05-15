// Type definitions for globule 1.1
// Project: https://github.com/cowboy/node-globule
// Definitions by: Dusan Radovanovic <https://github.com/durad>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import minimatch = require('minimatch');
import glob = require('glob');

interface FindOptions extends glob.IOptions {
    src?: string;
    filter?: string | ((filepath?: string, options?: any) => boolean);
    nonull?: boolean;
    matchBase?: boolean;
    srcBase?: string;
    prefixBase?: boolean;
}

interface MappingOptions extends FindOptions {
    srcBase?: string;
    destBase?: string;
    ext?: string;
    extDot?: 'first' | 'last';
    flatten?: boolean;
    rename?(p: string): string;
}

interface OneMapping {
    src: string[];
    dest: string;
}

interface GlobuleStatic {
    /**
     * Match one or more globbing patterns against one or more file paths.
     * Returns a uniqued array of all file paths that match any of the specified globbing patterns.
     */
    match(patterns: string | string[], filepaths: string | string[], options?: minimatch.IOptions): string[];

    /**
     * Tests pattern(s) against against one or more file paths and returns true if any files were matched, otherwise false.
     */
    isMatch(patterns: string | string[], filepaths: string | string[], options?: minimatch.IOptions): boolean;

    /**
     * Returns a unique array of all file or directory paths that match the given globbing pattern(s)
     */
    find(pattern: string | string[], options?: FindOptions): string[];

    /**
     * Returns a unique array of all file or directory paths that match the given globbing pattern(s)
     */
    find(options: FindOptions): string[];

    /**
     * Returns a unique array of all file or directory paths that match the given globbing pattern(s)
     */
    find(pattern: string | string[], pattern2: string | string[], options?: FindOptions): string[];

    /**
     * Returns a unique array of all file or directory paths that match the given globbing pattern(s)
     */
    find(pattern: string, pattern2: string, pattern3: string | string[], options?: FindOptions): string[];

    /**
     * Given a set of source file paths, returns an array of src-dest file mapping objects
     */
    mapping(filepaths: string[], options?: MappingOptions): OneMapping[];

    /**
     * Given a set of source file paths, returns an array of src-dest file mapping objects
     */
    mapping(options: MappingOptions): OneMapping[];

    /**
     * Given a set of source file paths, returns an array of src-dest file mapping objects
     */
    mapping(filepaths: string[], filepaths2: string[], options?: MappingOptions): OneMapping[];

    /**
     * Given a set of source file paths, returns an array of src-dest file mapping objects
     */
    mapping(filepaths: string[], filepaths2: string[], filepaths3: string[], options?: MappingOptions): OneMapping[];
}

declare var globule: GlobuleStatic;
export = globule;
