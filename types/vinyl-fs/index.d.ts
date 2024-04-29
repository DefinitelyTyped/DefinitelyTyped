/// <reference types="node" />

declare global {
    namespace NodeJS {
        interface WritableStream {
            write(buffer: any, /* Vinyl.File */ cb?: (err?: Error | null) => void): boolean;
        }
    }
}

import * as _events from "events";
import * as globStream from "glob-stream";
import * as File from "vinyl";

export interface SrcOptions extends globStream.Options {
    /**
     * Setting this to false will make file.contents a paused stream
     * If true it will buffer the file contents
     * Default: true
     */
    buffer?: boolean | ((file: File) => boolean) | undefined;

    /**
     * Setting this to false will ignore the contents of the file and disable
     * writing to disk to speed up operations
     * Default: true
     */
    read?: boolean | ((file: File) => boolean) | undefined;

    /** Only find files that have been modified since the time specified */
    since?: Date | number | ((file: File) => Date | number) | undefined;

    /**
     * Causes the BOM to be removed on UTF-8 encoded files. Set to false if you need the BOM for some reason.
     * Default: true
     */
    removeBOM?: boolean | ((file: File) => boolean) | undefined;

    /** Optionally transcode from the given encoding. The default is 'utf8'. */
    encoding?: string | false | ((file: File) => string | false) | undefined;

    /**
     * Setting this to true will enable sourcemaps.
     * Default: false
     */
    sourcemaps?: boolean | ((file: File) => boolean) | undefined;

    /**
     * Whether or not to recursively resolve symlinks to their targets. Setting to false to
     * preserve them as symlinks and make file.symlink equal the original symlink's target path.
     * Default: false
     */
    resolveSymlinks?: boolean | ((file: File) => boolean) | undefined;
}

export interface DestOptions {
    /**
     * Specify the working directory the folder is relative to
     * Default is process.cwd()
     */
    cwd?: string | ((file: File) => string) | undefined;

    /**
     * Specify the mode the files should be created with
     * Default is the mode of the input file (file.stat.mode)
     * or the process mode if the input file has no mode property
     */
    mode?: number | ((file: File) => number) | undefined;

    /** Specify the mode the directory should be created with. Default is the process mode */
    dirMode?: number | ((file: File) => number) | undefined;

    /** Specify if existing files with the same path should be overwritten or not. Default is true, to always overwrite existing files */
    overwrite?: boolean | ((file: File) => boolean) | undefined;

    /** Whether or not new data should be appended after existing file contents (if any). Default is false, to always replace existing contents */
    append?: boolean | ((file: File) => boolean) | undefined;

    /** Optionally transcode to the given encoding. The default is 'utf8'. */
    encoding?: string | false | ((file: File) => string | false) | undefined;

    /**
     * Enables sourcemap support on files passed through the stream. Will write inline soucemaps if
     * specified as true. Specifying a string path will write external sourcemaps at the given path.
     */
    sourcemaps?: boolean | string | ((file: File) => string | false | undefined) | undefined;

    /**
     * When creating a symlink, whether or not the created symlink should be relative. If false,
     * the symlink will be absolute. Note: This option will be ignored if a junction is being created.
     */
    relativeSymlinks?: boolean | ((file: File) => boolean) | undefined;

    /* When creating a symlink, whether or not a directory symlink should be created as a junction. */
    useJunctions?: boolean | ((file: File) => boolean) | undefined;
}

/**
 * Gets files that match the glob and converts them into the vinyl format
 * @param globs Takes a glob string or an array of glob strings as the first argument
 * Globs are executed in order, so negations should follow positive globs
 * fs.src(['!b*.js', '*.js']) would not exclude any files, but this would: fs.src(['*.js', '!b*.js'])
 * @param opt Options Vinyl source options, changes the way the files are read, found, or stored in the vinyl stream
 */
export function src(globs: string | string[], opt?: SrcOptions): NodeJS.ReadWriteStream;

/**
 * On write the stream will save the vinyl File to disk at the folder/cwd specified.
 * After writing the file to disk, it will be emitted from the stream so you can keep piping these around.
 * The file will be modified after being written to this stream:
 * cwd, base, and path will be overwritten to match the folder
 * stat.mode will be overwritten if you used a mode parameter
 * contents will have it's position reset to the beginning if it is a stream
 * @param folder destination folder or a function that takes in a file and returns a folder path
 */
export function dest(folder: string | ((file: File) => string), opt?: DestOptions): NodeJS.ReadWriteStream;

/**
 * On write the stream will create a symbolic link (i.e. symlink) on disk at the folder/cwd specified.
 * After creating the symbolic link, it will be emitted from the stream so you can keep piping these around.
 * The file will be modified after being written to this stream:
 * cwd, base, and path will be overwritten to match the folder
 */
export function symlink(folder: string | ((File: File) => string), opts?: {
    /**
     * Specify the working directory the folder is relative to
     * Default is process.cwd()
     */
    cwd?: string | ((file: File) => string) | undefined;

    /**
     * Specify the mode the directory should be created with
     * Default is the process mode
     */
    dirMode?: number | ((file: File) => number) | undefined;

    /** Specify if existing files with the same path should be overwritten or not. Default is true, to always overwrite existing files */
    overwrite?: boolean | ((file: File) => boolean) | undefined;

    /**
     * Specify whether the symlink should be relative or absolute.
     * Default is false.
     */
    relativeSymlinks?: boolean | ((file: File) => boolean) | undefined;

    /* When creating a symlink, whether or not a directory symlink should be created as a junction. */
    useJunctions?: boolean | ((file: File) => boolean) | undefined;
}): NodeJS.ReadWriteStream;
