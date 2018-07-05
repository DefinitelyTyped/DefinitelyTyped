// Type definitions for fs-plus 3.0
// Project: https://github.com/atom/fs-plus
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import { Stats } from "fs";

export * from "fs";

/**
 * Returns the absolute path to the home directory.
 */
export function getHomeDirectory(): string;

/**
 * Make the given path absolute by resolving it against the current working directory.
 */
export function absolute(relativePath: string): string;

/**
 * Normalize the given path treating a leading `~` segment as referring to the home directory. This method does not query the filesystem.
 */
export function normalize(pathToNormalize: string): string;

/**
 * Convert an absolute path to tilde path for Linux and macOS.
 */
export function tildify(pathToTildify: string): string;

/**
 * Get path to store application specific data.
 *
 * * Mac: `~/Library/Application Support/`
 * * Win: `%AppData%`
 * * Linux: `/var/lib`
 */
export function getAppDataDirectory(): string;

/**
 * Returns true if the given path is absolute.
 */
export function isAbsolute(pathToCheck: string): boolean;

/**
 * Returns true if a file or folder at the specified path exists.
 */
export function existsSync(pathToCheck: string): boolean;

/**
 * Returns true if the given path exists and is a directory.
 */
export function isDirectorySync(directoryPath: string): boolean;

/**
 * Asynchronously checks that the given path exists and is a directory.
 */
export function isDirectory(
    directoryPath: string,
    callback: (result: boolean) => void
): void;

/**
 * Returns true if the specified path exists and is a file.
 */
export function isFileSync(filePath: string): boolean;

/**
 * Returns true if the specified path is a symbolic link.
 */
export function isSymbolicLinkSync(symlinkPath: string): boolean;

/**
 * Calls back with true if the specified path is a symbolic link.
 */
export function isSymbolicLink(
    symlinkPath: string,
    callback: (result: boolean) => void
): void;

/**
 * Returns true if the specified path is executable.
 */
export function isExecutableSync(pathToCheck: string): boolean;

/**
 * Returns the size of the specified path.
 */
export function getSizeSync(pathToCheck: string): number;

/**
 * Returns an Array with the paths of the files and directories contained within the directory path. It is not recursive.
 */
export function listSync(rootPath: string, extensions?: string[]): string[];

/**
 * Asynchronously lists the files and directories in the given path. The listing is not recursive.
 */
export function list(
    rootPath: string,
    callback: (err: Error, result: string[]) => void
): void;

/**
 * Asynchronously lists the files and directories in the given path. The listing is not recursive.
 */
export function list(
    rootPath: string,
    extensions: string[],
    callback: (err: Error, result: string[]) => void
): void;

/**
 * Get all paths under the given path.
 */
export function listTreeSync(rootPath: string): string[];

/**
 * Moves the source file or directory to the target.
 */
export function moveSync(source: string, target: string): void;

/**
 * Asynchronously moves the source file or directory to the target.
 */
export function move(
    source: string,
    target: string,
    callback: (err: Error) => void
): void;

/**
 * Removes the file or directory at the given path.
 */
export function removeSync(pathToRemove: string): void;

/**
 * Asynchronously removes the file or directory at the given path.
 */
export function remove(
    pathToRemove: string,
    callback: (err: Error) => void
): void;

/**
 * Open, write, flush, and close a file, writing the given content synchronously.
 */
export function writeFileSync(
    filePath: string,
    content: string,
    options?:
        | { encoding?: string | null; mode?: number | string; flag?: string }
        | string
        | null
): void;

/**
 * Open, write, flush, and close a file, writing the given content asynchronously.
 */
export function writeFile(
    filePath: string,
    content: any,
    callback: (err: any) => void
): void;

/**
 * Open, write, flush, and close a file, writing the given content asynchronously.
 */
export function writeFile(
    filePath: string,
    content: any,
    options:
        | { encoding?: string | null; mode?: number | string; flag?: string }
        | string
        | undefined
        | null,
    callback: (err: any) => void
): void;

/**
 * Copies the given path.
 */
export function copySync(source: string, target: string): void;

/**
 * Asynchronously copies the given path.
 */
export function copy(
    source: string,
    target: string,
    callback: (err: any) => void
): void;

/**
 * Copies the given path synchronously, buffering reads and writes to keep memory footprint to a minimum. If the destination directory doesn't exist, it creates it.
 */
export function copyFileSync(
    source: string,
    target: string,
    bufferSize?: number
): void;

/**
 * Create a directory at the specified path including any missing parent directories.
 */
export function makeTreeSync(directoryPath: string): void;

/**
 * Asynchronously create a directory at the specified path including any missing parent directories.
 */
export function makeTree(
    directoryPath: string,
    callback: (err: any) => void
): void;

/**
 * Recursively walk the given path and execute the given functions.
 */
export function traverseTreeSync(
    rootPath: string,
    onFile: (file: string) => void,
    onDirectory: (dir: string) => boolean | void
): void;

/**
 * Asynchronously walk the given path and execute the given functions.
 */
export function traverseTree(
    rootPath: string,
    onFile: (file: string) => void,
    onDirectory: (dir: string) => boolean | void,
    onDone: (err: any) => void
): void;

/**
 * Hashes the contents of the given file.
 */
export function md5ForPath(pathToDigest: string): string;

/**
 * Finds a relative path among the given array of paths.
 */
export function resolve(
    loadPath: string,
    pathToResolve: string,
    extensions?: string[]
): string | undefined;

/**
 * Finds a relative path using Node's module paths as load paths.
 */
export function resolveOnLoadPath(
    pathToResolve: string,
    extensions?: string[]
): string | undefined;

/**
 * Finds the first file in the given path which matches the extension in the order given.
 */
export function resolveExtension(
    pathToResolve: string,
    extensions: string[]
): string | undefined;

/**
 * Returns true for extensions associated with compressed files.
 */
export function isCompressedExtension(ext: string): boolean;

/**
 * Returns true for extensions associated with image files.
 */
export function isImageExtension(ext: string): boolean;

/**
 * Returns true for extensions associated with PDF files.
 */
export function isPdfExtension(ext: string): boolean;

/**
 * Returns true for extensions associated with binary files.
 */
export function isBinaryExtension(ext: string): boolean;

/**
 * Returns true for files named similarily to `README`.
 */
export function isReadmePath(readmePath: string): boolean;

/**
 * Returns true for extensions associated with Markdown files.
 */
export function isMarkdownExtension(ext: string): boolean;

/**
 * Is the filesystem case insensitive?
 */
export function isCaseInsensitive(): boolean;

/**
 * Is the filesystem case sensitive?
 */
export function isCaseSensitive(): boolean;
