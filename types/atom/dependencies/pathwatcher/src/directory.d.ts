import { Disposable } from '../../../index';
import { File } from './file';

/** Represents a directory on disk that can be watched for changes. */
export class Directory {
    // Construction
    /** Configures a new Directory instance, no files are accessed. */
    constructor(directoryPath: string, symlink?: boolean);

    /**
     *  Creates the directory on disk that corresponds to ::getPath() if no such
     *  directory already exists.
     */
    create(mode?: number): Promise<boolean>;

    // Event Subscription
    /** Invoke the given callback when the directory's contents change. */
    onDidChange(callback: () => void): Disposable;

    // Directory Metadata
    /** Returns a boolean, always false. */
    isFile(): this is File;

    /** Returns a boolean, always true. */
    isDirectory(): this is Directory;

    /** Returns a boolean indicating whether or not this is a symbolic link. */
    isSymbolicLink(): boolean;

    /**
     *  Returns a promise that resolves to a boolean, true if the directory
     *  exists, false otherwise.
     */
    exists(): Promise<boolean>;

    /** Returns a boolean, true if the directory exists, false otherwise. */
    existsSync(): boolean;

    /**
     *  Return a boolean, true if this Directory is the root directory of the
     *  filesystem, or false if it isn't.
     */
    isRoot(): boolean;

    // Managing Paths
    /**
     *  This may include unfollowed symlinks or relative directory entries.
     *  Or it may be fully resolved, it depends on what you give it.
     */
    getPath(): string;

    /**
     *  All relative directory entries are removed and symlinks are resolved to
     *  their final destination.
     */
    getRealPathSync(): string;

    /** Returns the string basename of the directory. */
    getBaseName(): string;

    /** Returns the relative string path to the given path from this directory. */
    relativize(fullPath: string): string;

    // Traversing
    /** Traverse to the parent directory. */
    getParent(): Directory;

    /**
     *  Traverse within this Directory to a child File. This method doesn't actually
     *  check to see if the File exists, it just creates the File object.
     */
    getFile(filename: string): File;

    /**
     *  Traverse within this a Directory to a child Directory. This method doesn't actually
     *  check to see if the Directory exists, it just creates the Directory object.
     */
    getSubdirectory(dirname: string): Directory;

    /** Reads file entries in this directory from disk synchronously. */
    getEntriesSync(): Array<File | Directory>;

    /** Reads file entries in this directory from disk asynchronously. */
    getEntries(callback: (error: Error | null, entries: Array<File | Directory>) => void): void;

    /**
     *  Determines if the given path (real or symbolic) is inside this directory. This
     *  method does not actually check if the path exists, it just checks if the path
     *  is under this directory.
     */
    contains(pathToCheck: string): boolean;
}
