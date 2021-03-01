import { ReadStream, WriteStream } from 'fs';
import { Disposable } from '../../../index';
import { Directory } from './directory';

/** Represents an individual file that can be watched, read from, and written to. */
export class File {
    // Construction
    /** Configures a new File instance, no files are accessed. */
    constructor(filePath: string, symlink?: boolean);

    /**
     *  Creates the file on disk that corresponds to ::getPath() if no such file
     *  already exists.
     */
    create(): Promise<boolean>;

    // Event Subscription
    /** Invoke the given callback when the file's contents change. */
    onDidChange(callback: () => void): Disposable;

    /** Invoke the given callback when the file's path changes. */
    onDidRename(callback: () => void): Disposable;

    /** Invoke the given callback when the file is deleted. */
    onDidDelete(callback: () => void): Disposable;

    /**
     *  Invoke the given callback when there is an error with the watch. When
     *  your callback has been invoked, the file will have unsubscribed from the
     *  file watches.
     */
    onWillThrowWatchError(callback: (event: PathWatchErrorThrownEvent) => void): Disposable;

    // File Metadata
    /** Returns a boolean, always true. */
    isFile(): this is File;

    /** Returns a boolean, always false. */
    isDirectory(): this is Directory;

    /** Returns a boolean indicating whether or not this is a symbolic link. */
    isSymbolicLink(): boolean;

    /**
     *  Returns a promise that resolves to a boolean, true if the file exists,
     *  false otherwise.
     */
    exists(): Promise<boolean>;

    /** Returns a boolean, true if the file exists, false otherwise. */
    existsSync(): boolean;

    /** Get the SHA-1 digest of this file. */
    getDigest(): Promise<string>;

    /** Get the SHA-1 digest of this file. */
    getDigestSync(): string;

    /** Sets the file's character set encoding name. */
    setEncoding(encoding: string): void;

    /** Returns the string encoding name for this file (default: "utf8"). */
    getEncoding(): string;

    // Managing Paths
    /** Returns the string path for the file. */
    getPath(): string;

    /** Returns this file's completely resolved string path. */
    getRealPathSync(): string;

    /**
     *  Returns a promise that resolves to the file's completely resolved
     *  string path.
     */
    getRealPath(): Promise<string>;

    /** Return the string filename without any directory information. */
    getBaseName(): string;

    // Traversing
    /** Return the Directory that contains this file. */
    getParent(): Directory;

    // Reading and Writing
    /** Reads the contents of the file. */
    read(flushCache?: boolean): Promise<string | null>;

    /** Returns a stream to read the content of the file. */
    createReadStream(): ReadStream;

    /** Overwrites the file with the given text. */
    write(text: string): Promise<undefined>;

    /** Returns a stream to write content to the file. */
    createWriteStream(): WriteStream;

    /** Overwrites the file with the given text. */
    writeSync(text: string): undefined;
}

export interface PathWatchErrorThrownEvent {
    /** The error object. */
    error: Error;

    /**
     *  Call this function to indicate you have handled the error.
     *  The error will not be thrown if this function is called.
     */
    handle(): void;
}
