// Type definitions for Apache Cordova File System plugin.
// Project: https://github.com/apache/cordova-plugin-file
// Definitions by: Microsoft Open Technologies, Inc. <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

interface Window {
    /**
     * Requests a filesystem in which to store application data.
     * @param type              Whether the filesystem requested should be persistent, as defined above. Use one of TEMPORARY or PERSISTENT.
     * @param size              This is an indicator of how much storage space, in bytes, the application expects to need.
     * @param successCallback   The callback that is called when the user agent provides a filesystem.
     * @param errorCallback     A callback that is called when errors happen, or when the request to obtain the filesystem is denied.
     */
    requestFileSystem(
        type: number,
        size: number,
        successCallback: (fileSystem: FileSystem) => void,
        errorCallback?: (fileError: FileError) => void): void;
    /**
     * Look up file system Entry referred to by local URL.
     * @param string url       URL referring to a local file or directory
     * @param successCallback  invoked with Entry object corresponding to URL
     * @param errorCallback    invoked if error occurs retrieving file system entry
     */
    resolveLocalFileSystemURL(url: string,
        successCallback: (entry: Entry) => void,
        errorCallback?: (error: FileError) => void): void;
    /**
     * Look up file system Entry referred to by local URI.
     * @param string uri       URI referring to a local file or directory
     * @param successCallback  invoked with Entry object corresponding to URI
     * @param errorCallback    invoked if error occurs retrieving file system entry
     */
    resolveLocalFileSystemURI(uri: string,
        successCallback: (entry: Entry) => void,
        errorCallback?: (error: FileError) => void): void;
    TEMPORARY: number;
    PERSISTENT: number;
}

/** This interface represents a file system. */
interface FileSystem {
    /* The name of the file system, unique across the list of exposed file systems. */
    name: string;
    /** The root directory of the file system. */
    root: DirectoryEntry;
}

/**
 * An abstract interface representing entries in a file system,
 * each of which may be a File or DirectoryEntry.
 */
interface Entry {
    /** Entry is a file. */
    isFile: boolean;
    /** Entry is a directory. */
    isDirectory: boolean;
    /** The name of the entry, excluding the path leading to it. */
    name: string;
    /** The full absolute path from the root to the entry. */
    fullPath: string;
    /** The file system on which the entry resides. */
    fileSystem: FileSystem;
    nativeURL: string;
    /**
     * Look up metadata about this entry.
     * @param successCallback A callback that is called with the time of the last modification.
     * @param errorCallback   A callback that is called when errors happen.
     */
    getMetadata(
        successCallback: (metadata: Metadata) => void,
        errorCallback?: (error: FileError) => void): void;
    /**
     * Move an entry to a different location on the file system. It is an error to try to:
     *     move a directory inside itself or to any child at any depth;move an entry into its parent if a name different from its current one isn't provided;
     *     move a file to a path occupied by a directory;
     *     move a directory to a path occupied by a file;
     *     move any element to a path occupied by a directory which is not empty.
     * A move of a file on top of an existing file must attempt to delete and replace that file.
     * A move of a directory on top of an existing empty directory must attempt to delete and replace that directory.
     * @param parent  The directory to which to move the entry.
     * @param newName The new name of the entry. Defaults to the Entry's current name if unspecified.
     * @param successCallback A callback that is called with the Entry for the new location.
     * @param errorCallback   A callback that is called when errors happen.
     */
    moveTo(parent: DirectoryEntry,
        newName?: string,
        successCallback?: (entry: Entry) => void,
        errorCallback?: (error: FileError) => void): void;
    /**
     * Copy an entry to a different location on the file system. It is an error to try to:
     *     copy a directory inside itself or to any child at any depth;
     *     copy an entry into its parent if a name different from its current one isn't provided;
     *     copy a file to a path occupied by a directory;
     *     copy a directory to a path occupied by a file;
     *     copy any element to a path occupied by a directory which is not empty.
     *     A copy of a file on top of an existing file must attempt to delete and replace that file.
     *     A copy of a directory on top of an existing empty directory must attempt to delete and replace that directory.
     * Directory copies are always recursive--that is, they copy all contents of the directory.
     * @param parent The directory to which to move the entry.
     * @param newName The new name of the entry. Defaults to the Entry's current name if unspecified.
     * @param successCallback A callback that is called with the Entry for the new object.
     * @param errorCallback A callback that is called when errors happen.
     */
    copyTo(parent: DirectoryEntry,
        newName?: string,
        successCallback?: (entry: Entry) => void,
        errorCallback?: (error: FileError) => void): void;
    /**
     * Returns a URL that can be used as the src attribute of a <video> or <audio> tag.
     * If that is not possible, construct a cdvfile:// URL.
     * @return string URL
     */
    toURL(): string;
    /**
     * Return a URL that can be passed across the bridge to identify this entry.
     * @return string URL that can be passed across the bridge to identify this entry
     */
    toInternalURL(): string;
    /**
     * Deletes a file or directory. It is an error to attempt to delete a directory that is not empty. It is an error to attempt to delete the root directory of a filesystem.
     * @param successCallback A callback that is called on success.
     * @param errorCallback   A callback that is called when errors happen.
     */
    remove(successCallback: () => void,
        errorCallback?: (error: FileError) => void): void;
    /**
     * Look up the parent DirectoryEntry containing this Entry. If this Entry is the root of its filesystem, its parent is itself.
     * @param successCallback A callback that is called with the time of the last modification.
     * @param errorCallback   A callback that is called when errors happen.
     */
    getParent(successCallback: (entry: Entry) => void,
        errorCallback?: (error: FileError) => void): void;
}

/** This interface supplies information about the state of a file or directory. */
interface Metadata {
    /** This is the time at which the file or directory was last modified. */
    modificationTime: Date;
    /** The size of the file, in bytes. This must return 0 for directories. */
    size: number;
}

/** This interface represents a directory on a file system. */
interface DirectoryEntry extends Entry {
    /**
     * Creates a new DirectoryReader to read Entries from this Directory.
     */
    createReader(): DirectoryReader;
    /**
     * Creates or looks up a file.
     * @param path    Either an absolute path or a relative path from this DirectoryEntry
     *                to the file to be looked up or created.
     *                It is an error to attempt to create a file whose immediate parent does not yet exist.
     * @param options If create and exclusive are both true, and the path already exists, getFile must fail.
     *                If create is true, the path doesn't exist, and no other error occurs, getFile must create it as a zero-length file and return a corresponding FileEntry.
     *                If create is not true and the path doesn't exist, getFile must fail.
     *                If create is not true and the path exists, but is a directory, getFile must fail.
     *                Otherwise, if no other error occurs, getFile must return a FileEntry corresponding to path.
     * @param successCallback A callback that is called to return the File selected or created.
     * @param errorCallback   A callback that is called when errors happen.
     */
    getFile(path: string, options?: Flags,
        successCallback?: (entry: FileEntry) => void,
        errorCallback?: (error: FileError) => void): void;
    /**
     * Creates or looks up a directory.
     * @param path    Either an absolute path or a relative path from this DirectoryEntry
     *                to the directory to be looked up or created.
     *                It is an error to attempt to create a directory whose immediate parent does not yet exist.
     * @param options If create and exclusive are both true and the path already exists, getDirectory must fail.
     *                If create is true, the path doesn't exist, and no other error occurs, getDirectory must create and return a corresponding DirectoryEntry.
     *                If create is not true and the path doesn't exist, getDirectory must fail.
     *                If create is not true and the path exists, but is a file, getDirectory must fail.
     *                Otherwise, if no other error occurs, getDirectory must return a DirectoryEntry corresponding to path.
     * @param successCallback A callback that is called to return the Directory selected or created.
     * @param errorCallback   A callback that is called when errors happen.
     */
    getDirectory(path: string, options?: Flags,
        successCallback?: (entry: DirectoryEntry) => void,
        errorCallback?: (error: FileError) => void): void;
    /**
     * Deletes a directory and all of its contents, if any. In the event of an error (e.g. trying
     * to delete a directory that contains a file that cannot be removed), some of the contents
     * of the directory may be deleted. It is an error to attempt to delete the root directory of a filesystem.
     * @param successCallback A callback that is called on success.
     * @param errorCallback   A callback that is called when errors happen.
     */
    removeRecursively(successCallback: () => void,
        errorCallback?: (error: FileError) => void): void;
}

/**
 * This dictionary is used to supply arguments to methods
 * that look up or create files or directories.
 */
interface Flags {
    /** Used to indicate that the user wants to create a file or directory if it was not previously there. */
    create?: boolean;
    /** By itself, exclusive must have no effect. Used with create, it must cause getFile and getDirectory to fail if the target path already exists. */
    exclusive?: boolean;
}

/**
 * This interface lets a user list files and directories in a directory. If there are
 * no additions to or deletions from a directory between the first and last call to
 * readEntries, and no errors occur, then:
 *     A series of calls to readEntries must return each entry in the directory exactly once.
 *     Once all entries have been returned, the next call to readEntries must produce an empty array.
 *     If not all entries have been returned, the array produced by readEntries must not be empty.
 *     The entries produced by readEntries must not include the directory itself ["."] or its parent [".."].
 */
interface DirectoryReader {
    /**
     * Read the next block of entries from this directory.
     * @param successCallback Called once per successful call to readEntries to deliver the next
     *                        previously-unreported set of Entries in the associated Directory.
     *                        If all Entries have already been returned from previous invocations
     *                        of readEntries, successCallback must be called with a zero-length array as an argument.
     * @param errorCallback   A callback indicating that there was an error reading from the Directory.
     */
    readEntries(
        successCallback: (entries: Entry[]) => void,
        errorCallback?: (error: FileError) => void): void;
}

/** This interface represents a file on a file system. */
interface FileEntry extends Entry {
    /**
     * Creates a new FileWriter associated with the file that this FileEntry represents.
     * @param successCallback A callback that is called with the new FileWriter.
     * @param errorCallback   A callback that is called when errors happen.
     */
    createWriter(successCallback: (
        writer: FileWriter) => void,
        errorCallback?: (error: FileError) => void): void;
    /**
     * Returns a File that represents the current state of the file that this FileEntry represents.
     * @param successCallback A callback that is called with the File.
     * @param errorCallback   A callback that is called when errors happen.
     */
    file(successCallback: (file: File) => void,
        errorCallback?: (error: FileError) => void): void;
}

/**
 * This interface provides methods to monitor the asynchronous writing of blobs
 * to disk using progress events and event handler attributes.
 */
interface FileSaver extends EventTarget {
    /** Terminate file operation */
    abort(): void;
    /**
     * The FileSaver object can be in one of 3 states. The readyState attribute, on getting,
     * must return the current state, which must be one of the following values:
     *     INIT
     *     WRITING
     *     DONE
     */
    readyState: number;
    /** Handler for writestart events. */
    onwritestart: (event: ProgressEvent) => void;
    /** Handler for progress events. */
    onprogress: (event: ProgressEvent) => void;
    /** Handler for write events. */
    onwrite: (event: ProgressEvent) => void;
    /** Handler for abort events. */
    onabort: (event: ProgressEvent) => void;
    /** Handler for error events. */
    onerror: (event: ProgressEvent) => void;
    /** Handler for writeend events. */
    onwriteend: (event: ProgressEvent) => void;
    /** The last error that occurred on the FileSaver. */
    error: Error;
}

/**
 * This interface expands on the FileSaver interface to allow for multiple write
 * actions, rather than just saving a single Blob.
 */
interface FileWriter extends FileSaver {
    /**
     * The byte offset at which the next write to the file will occur. This always less or equal than length.
     * A newly-created FileWriter will have position set to 0.
     */
    position: number;
    /**
     * The length of the file. If the user does not have read access to the file,
     * this will be the highest byte offset at which the user has written.
     */
    length: number;
    /**
     * Write the supplied data to the file at position.
     * @param {Blob} data The blob to write.
     */
    write(data: Blob): void;
    /**
     * The file position at which the next write will occur.
     * @param offset If nonnegative, an absolute byte offset into the file.
     *               If negative, an offset back from the end of the file.
     */
    seek(offset: number): void;
    /**
     * Changes the length of the file to that specified. If shortening the file, data beyond the new length
     * will be discarded. If extending the file, the existing data will be zero-padded up to the new length.
     * @param size The size to which the length of the file is to be adjusted, measured in bytes.
     */
    truncate(size: number): void;
}

/* FileWriter states */
declare var FileWriter: {
    INIT: number;
    WRITING: number;
    DONE: number
};

interface FileError {
    /** Error code */
    code: number;
}

declare var FileError: {
    new (code: number): FileError;
    NOT_FOUND_ERR: number;
    SECURITY_ERR: number;
    ABORT_ERR: number;
    NOT_READABLE_ERR: number;
    ENCODING_ERR: number;
    NO_MODIFICATION_ALLOWED_ERR: number;
    INVALID_STATE_ERR: number;
    SYNTAX_ERR: number;
    INVALID_MODIFICATION_ERR: number;
    QUOTA_EXCEEDED_ERR: number;
    TYPE_MISMATCH_ERR: number;
    PATH_EXISTS_ERR: number;
};

/*
 * Constants defined in fileSystemPaths
 */
interface Cordova {
    file: {
        /* Read-only directory where the application is installed. */
        applicationDirectory: string;
        /* Root of app's private writable storage */
        applicationStorageDirectory: string;
        /* Where to put app-specific data files. */
        dataDirectory: string;
        /* Cached files that should survive app restarts. Apps should not rely on the OS to delete files in here. */
        cacheDirectory: string;
        /* Android: the application space on external storage. */
        externalApplicationStorageDirectory: string;
        /* Android: Where to put app-specific data files on external storage. */
        externalDataDirectory: string;
        /* Android: the application cache on external storage. */
        externalCacheDirectory: string;
        /* Android: the external storage (SD card) root. */
        externalRootDirectory: string;
        /* iOS: Temp directory that the OS can clear at will. */
        tempDirectory: string;
        /* iOS: Holds app-specific files that should be synced (e.g. to iCloud). */
        syncedDataDirectory: string;
        /* iOS: Files private to the app, but that are meaningful to other applciations (e.g. Office files) */
        documentsDirectory: string;
        /* BlackBerry10: Files globally available to all apps */
        sharedDirectory: string
    }
}

