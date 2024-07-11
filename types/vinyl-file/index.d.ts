/// <reference types="node" />
import File = require("vinyl");

export interface VinylFileOptions {
    /** Specifies the working directory the folder is relative to */
    cwd?: string | undefined;

    /** Specifies the folder relative to the cwd */
    base?: string | undefined;

    /** Setting this to false will retuurn file.contents as a stream */
    buffer?: boolean | undefined;

    /** Setting this to false will return file.contents as null and not read the file at all */
    read?: boolean | undefined;
}
export interface VinylFile extends File {
    /** Returns a new Vinyl object with all attributes cloned. */
    clone(opts?: { contents?: boolean | undefined; deep?: boolean | undefined } | boolean): this;

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
    readonly history: readonly string[];

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
