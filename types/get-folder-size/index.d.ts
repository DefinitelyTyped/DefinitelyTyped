/// <reference types="node" />

import { PathLike } from "fs";

declare namespace getFolderSize {
    /**
     * Returns the size of the folder. If any errors are encountered while traversing the folder, they are silently ignored.
     *
     * The returned folder size might be smaller than the real folder size. It is impossible to know for sure, since errors are ignored.
     *
     * @param itemPath         - Path of the folder.
     * @param [options]        - Options.
     * @param [options.ignore] - If a file's path matches this regex object, its size is not counted.
     * @param [options.fs]     - The filesystem that should be used. Uses node fs by default.
     *
     * @returns - The size of the folder in bytes.
     *
     * @async
     */
    function loose(path: string, options?: Options): Promise<number>;
    /**
     * Returns the size of the folder. If any errors are encountered while traversing the folder, this method will throw an error.
     *
     * Because errors will otherwise make this method fail, the returned folder size will always be accurate.
     *
     * @param itemPath         - Path of the folder.
     * @param [options]        - Options.
     * @param [options.ignore] - If a file's path matches this regex object, its size is not counted.
     * @param [options.fs]     - The filesystem that should be used. Uses node fs by default.
     *
     * @returns - The size of the folder in bytes.
     *
     * @async
     */
    function strict(path: string, options?: Options): Promise<number>;

    interface Options {
        ignore?: RegExp | undefined;
        fs?: FSLike | undefined;
    }

    interface FolderSizeInfo {
        size: number;
        errors: Error[] | null;
    }

    interface FSLike {
        lstat(path: PathLike, ...args: any[]): Promise<FStatsLike>;
        readdir(path: PathLike, ...args: any[]): Promise<string[]>;
    }

    interface FStatsLike {
        ino: number;
        size: number;
        isDirectory(): boolean;
    }
}

/**
 * Returns an object containing the size of the folder and a list of errors encountered while traversing the folder.
 *
 * If any errors are returned, the returned folder size is likely smaller than the real folder size.
 *
 * @param itemPath         - Path of the folder.
 * @param [options]        - Options.
 * @param [options.ignore] - If a file's path matches this regex object, its size is not counted.
 * @param [options.fs]     - The filesystem that should be used. Uses node fs by default.
 *
 * @returns - An object containing the size of the folder in bytes and a list of encountered errors.
 *
 * @async
 */
declare function getFolderSize(
    itemPath: PathLike,
    options?: getFolderSize.Options,
): Promise<getFolderSize.FolderSizeInfo>;

export default getFolderSize;
