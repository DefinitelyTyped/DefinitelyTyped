// Type definitions for vinyl-file 3.0
// Project: https://github.com/sindresorhus/vinyl-file
// Definitions by: cleanchedFist <https://github.com/cleanchedFist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types="node" />
import * as File from 'vinyl';

export interface VinylFileOptions {
    /** Specifies the working directory the folder is relative to */
    cwd?: string;

    /** Specifies the folder relative to the cwd */
    base?: string;

    /** Setting this to false will retuurn file.contents as a stream */
    buffer?: boolean;

    /** Setting this to false will return file.contents as null and not read the file at all */
    read?: boolean;
}
export interface VinylFile extends File {
    /** Returns true if the file contents are a Buffer, otherwise false */
    isStream: () => boolean;

    /** Returns true if the file contents are a Stream, otherwise false */
    isBuffer: () => boolean;

    /** Returns true if the file contents are null, otherwise false */
    isNull: () => boolean;

    /** Returns true if the file represents a directory, otherwise false */
    isDirectory: () => boolean;

    /** Returns true if the file represents a symbolic link, otherwise false */
    isSymbolic: () => boolean;

    /** Returns a new Vinyl object with all attributes cloned. */
    clone(opts?: { contents?: boolean, deep?: boolean } | boolean): this;

    /** Returns a formatted-string interpretation of the Vinyl object */
    inspect: () => string;

    /** Gets and sets the contents of the file */
    contents: Buffer | NodeJS.ReadableStream | null;

    /** Gets and sets current working directory */
    cwd: string;

    /** Gets and sets base directory */
    base: string;

    /** Gets and sets the absolute pathname string or undefined */
    path: string;

    /** Array of file.path values the Vinyl object has had */
    readonly history: ReadonlyArray<string>;

    /** Gets the result of path.relative(file.base, file.path) */
    relative: string;

    /** Gets and sets the dirname of file.path */
    dirname: string;

    /** Gets and sets the basename of file.path */
    basename: string;

    /** Gets and sets stem (filename without suffix) of file.path */
    stem: string;

    /** Gets and sets extname of file.path */
    extname: string;

    /** Gets and sets the path where the file points to if it's a symbolic link */
    symlink: string;
}
export function read(pth: string, opts?: VinylFileOptions): Promise<VinylFile>;
export function readSync(pth: string, opts?: VinylFileOptions): VinylFile;
