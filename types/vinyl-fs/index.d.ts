// Type definitions for vinyl-fs 2.4
// Project: https://github.com/gulpjs/vinyl-fs
// Definitions by: vvakame <https://github.com/vvakame>
//                 remisery <https://github.com/remisery>
//                 TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare global {
    namespace NodeJS {
        interface WritableStream {
            write(buffer: any/* Vinyl.File */, cb?: (err?: Error | null) => void): boolean;
        }
    }
}

import * as _events from 'events';
import * as File from 'vinyl';
import * as globStream from 'glob-stream';

export interface SrcOptions extends globStream.Options {
    /** Prevents stream from emitting an error when file not found. */
    allowEmpty?: boolean | undefined;

    /** Specifies the working directory the folder is relative to */
    cwd?: string | undefined;

    /**
     * Specifies the folder relative to the cwd
     * This is used to determine the file names when saving in .dest()
     * Default: where the glob begins
     */
    base?: string | undefined;

    /**
     * Setting this to false will make file.contents a paused stream
     * If true it will buffer the file contents
     * Default: true
     */
    buffer?: boolean | undefined;

    /**
     * The mode the directory should be created with.
     * Default: the process mode
     */
    dirMode?: number | undefined;

    /**
     * Whether or not you want globs to match on dot files or not
     * (e.g., `.gitignore`).
     */
    dot?: boolean | undefined;

    /**
     * Whether or not to recursively resolve symlinks to their targets.
     * Setting to `false` to preserve them as symlinks and make `file.symlink`
     * equal the original symlink's target path.
     * Default: true
     */
    followSymlinks?: boolean | undefined;

    /**
     * Setting this to false will ignore the contents of the file and disable
     * writing to disk to speed up operations
     * Default: true
     */
    read?: boolean | undefined;

    /**
     * Whether or not the symlink should be relative or absolute.
     * Default: false
     */
    relative?: boolean | undefined;

    /** Only find files that have been modified since the time specified */
    since?: Date | number | undefined;

    /**
     * Causes the BOM to be stripped on UTF-8 encoded files. Set to `false`
     * if you need the BOM for some reason.
     */
    stripBOM?: boolean | undefined;

    /**
     * Setting this to true will create a duplex stream, one that passes
     * through items and emits globbed files.
     * Default: false
     */
    passthrough?: boolean | undefined;

    /**
     * Setting this to true will enable sourcemaps.
     * Default: false
     */
    sourcemaps?: boolean | undefined;

    /**
     * Whether or not to recursively resolve symlinks to their targets. Setting to false to
     * preserve them as symlinks and make file.symlink equal the original symlink's target path.
     * Default: false
     */
    resolveSymlinks?: boolean | undefined;
    /**
     * Causes the BOM to be removed on UTF-8 encoded files. Set to false if you need the BOM for some reason.
     * Default: true
     */
    removeBOM?: boolean | undefined;
}

export interface DestOptions {
    /**
     * Specify the working directory the folder is relative to
     * Default is process.cwd()
     */
    cwd?: string | undefined;

    /**
     * Specify the mode the files should be created with
     * Default is the mode of the input file (file.stat.mode)
     * or the process mode if the input file has no mode property
     */
    mode?: number | string | undefined;

    /** Specify the mode the directory should be created with. Default is the process mode */
    dirMode?: number | string | undefined;

    /** Specify if existing files with the same path should be overwritten or not. Default is true, to always overwrite existing files */
    overwrite?: boolean | undefined;

    /**
     * Enables sourcemap support on files passed through the stream. Will write inline soucemaps if
     * specified as true. Specifying a string path will write external sourcemaps at the given path.
     */
    sourcemaps?: true | string | undefined;

    /**
     * When creating a symlink, whether or not the created symlink should be relative. If false,
     * the symlink will be absolute. Note: This option will be ignored if a junction is being created.
     */
    relativeSymlinks?: boolean | undefined;

    /* When creating a symlink, whether or not a directory symlink should be created as a junction. */
    useJunctions?: boolean | undefined;
}

/**
 * Gets files that match the glob and converts them into the vinyl format
 * @param globs Takes a glob string or an array of glob strings as the first argument
 * Globs are executed in order, so negations should follow positive globs
 * fs.src(['!b*.js', '*.js']) would not exclude any files, but this would: fs.src(['*.js', '!b*.js'])
 * @param opt Options Vinyl source options, changes the way the files are read, found, or stored in the vinyl stream
 */
export function src(globs: string|string[], opt?: SrcOptions): NodeJS.ReadWriteStream;

/**
 * On write the stream will save the vinyl File to disk at the folder/cwd specified.
 * After writing the file to disk, it will be emitted from the stream so you can keep piping these around.
 * The file will be modified after being written to this stream:
 * cwd, base, and path will be overwritten to match the folder
 * stat.mode will be overwritten if you used a mode parameter
 * contents will have it's position reset to the beginning if it is a stream
 * @param folder destination folder
 */
export function dest(folder: string, opt?: DestOptions): NodeJS.ReadWriteStream;

/**
 * On write the stream will save the vinyl File to disk at the folder/cwd specified.
 * After writing the file to disk, it will be emitted from the stream so you can keep piping these around.
 * The file will be modified after being written to this stream:
 * cwd, base, and path will be overwritten to match the folder
 * stat.mode will be overwritten if you used a mode parameter
 * contents will have it's position reset to the beginning if it is a stream
 * @param getFolderPath function that takes in a file and returns a folder path
 */
export function dest(getFolderPath: (file: File) => string): NodeJS.ReadWriteStream;

/**
 * On write the stream will create a symbolic link (i.e. symlink) on disk at the folder/cwd specified.
 * After creating the symbolic link, it will be emitted from the stream so you can keep piping these around.
 * The file will be modified after being written to this stream:
 * cwd, base, and path will be overwritten to match the folder
 */
export function symlink(folder: string, opts?: {
    /**
     * Specify the working directory the folder is relative to
     * Default is process.cwd()
     */
    cwd?: string | undefined;

    /** Specify the mode the directory should be created with. Default is the process mode */
    mode?: number | string | undefined;

    /**
     * Specify the mode the directory should be created with
     * Default is the process mode
     */
    dirMode?: number | undefined
}): NodeJS.ReadWriteStream;

/**
 * On write the stream will create a symbolic link (i.e. symlink) on disk at the folder/cwd generated from getFolderPath.
 * After creating the symbolic link, it will be emitted from the stream so you can keep piping these around.
 * The file will be modified after being written to this stream:
 * cwd, base, and path will be overwritten to match the folder
 */
export function symlink(getFolderPath: (File: File) => string, opts?: {
    /**
     * Specify the working directory the folder is relative to
     * Default is process.cwd()
     */
    cwd?: string | undefined;

    /**
     * Specify the mode the directory should be created with
     * Default is the process mode
     */
    dirMode?: number | undefined
}): NodeJS.ReadWriteStream;
