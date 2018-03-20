// Type definitions for find 0.2
// Project: https://github.com/yuanchuan/find#readme
// Definitions by: Andrey Lalev <https://github.com/andypyrope>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface AsyncFindStream {
    /**
     * Handling errors in asynchronous interfaces.
     * @param callback The callback that is called upon an error
     */
    error(callback: (() => void)  | ((err: Error) => void)): void;
}

export interface FindEachStream {
    /**
     * Handling errors in asynchronous interfaces.
     * @param callback The callback that is called upon an error
     */
    error(callback: (() => void) | ((err: Error) => void)): FindEachStream;

    /**
     * Detect end in find.eachfile and find.eachdir.
     * @param callback The callback called at the end of find.eachfile and find.eachdir
     */
    end(callback: () => void): FindEachStream;
}

/**
 * Find all files in a given directory asynchronously.
 * @param root The root directory
 * @param callback A callback that accepts an array of the found files
 */
export function file(root: string, callback: (files: string[]) => void): AsyncFindStream;

/**
 * Find all files that match a glob pattern in a given directory asynchronously.
 * @param pattern The pattern to filter the files with
 * @param root The root directory
 * @param callback A callback that accepts an array of the found files
 */
export function file(pattern: string | RegExp, root: string, callback: (files: string[]) => void): AsyncFindStream;

/**
 * Find all files in a given directory asynchronously.
 * @param root The root directory
 * @param callback A callback that accepts each file separately
 */
export function eachFile(root: string, callback: (file: string) => void): FindEachStream;

/**
 * Find all files that match a glob pattern in a given directory asynchronously.
 * @param pattern The pattern to filter the files with
 * @param root The root directory
 * @param callback A callback that accepts an array of the found files
 */
export function eachFile(pattern: string | RegExp, root: string, callback: (file: string) => void): FindEachStream;

/**
 * Find all files in a given directory synchronously.
 * @param root The root directory
 * @returns The files that have been found
 */
export function fileSync(root: string): string[];

/**
 * Find all files that match a glob pattern in a given directory synchronously.
 * @param pattern The pattern to filter the files with
 * @param root The root directory
 * @returns The files that have been found
 */
export function fileSync(pattern: string | RegExp, root: string): string[];

/**
 * Find all directories in a given directory asynchronously.
 * @param root The root directory
 * @param callback A callback that accepts an array of the found directories
 */
export function dir(root: string, callback: (directories: string[]) => void): AsyncFindStream;

/**
 * Find all directories that match a glob pattern in a given directory asynchronously.
 * @param pattern The pattern to filter the directories with
 * @param root The root directory
 * @param callback A callback that accepts an array of the found directories
 */
export function dir(pattern: RegExp | string, root: string, callback: (directories: string[]) => void): AsyncFindStream;

/**
 * Find all directories in a given directory synchronously.
 * @param root The root directory
 * @returns The directories that have been found
 */
export function dirSync(root: string): string[];

/**
 * Find all directories that match a glob pattern in a given directory synchronously.
 * @param pattern The pattern to filter the directories with
 * @param root The root directory
 * @returns The directories that have been found
 */
export function dirSync(pattern: string | RegExp, root: string): string[];

/**
 * Find all directories in a given directory asynchronously.
 * @param root The root directory
 * @param callback A callback that accepts each of the found directories separately
 */
export function eachDir(root: string, callback: (directory: string) => void): FindEachStream;

/**
 * Find all directories that match a glob pattern in a given directory asynchronously.
 * @param pattern The pattern to filter the directories with
 * @param root The root directory
 * @param callback A callback that accepts each of the found directories separately
 */
export function eachDir(pattern: string | RegExp, root: string, callback: (directory: string) => void): FindEachStream;
