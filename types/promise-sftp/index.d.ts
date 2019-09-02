// Type definitions for promise-sftp 1.3
// Project: https://github.com/realtymaps/promise-sftp
// Definitions by: coolreader18 <https://github.com/coolreader18>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="node" />

import * as PromiseFtpCommon from "promise-ftp-common";
import * as Promise from "bluebird";
import * as ssh2 from "ssh2";
import * as ssh2Streams from "ssh2-streams";
import * as fs from "fs";

declare namespace PromiseSftp {
    enum ERROR_CODES {
        OK,
        EOF,
        NO_SUCH_FILE,
        PERMISSION_DENIED,
        FAILURE,
        BAD_MESSAGE,
        NO_CONNECTION,
        CONNECTION_LOST,
        OP_UNSUPPORTED,
        INVALID_HANDLE,
        NO_SUCH_PATH,
        FILE_ALREADY_EXISTS,
        WRITE_PROTECT,
        NO_MEDIA,
        NO_SPACE_ON_FILESYSTEM,
        QUOTA_EXCEEDED,
        UNKNOWN_PRINCIPAL,
        LOCK_CONFLICT,
        DIR_NOT_EMPTY,
        NOT_A_DIRECTORY,
        INVALID_FILENAME,
        LINK_LOOP,
        CANNOT_DELETE,
        INVALID_PARAMETER,
        FILE_IS_A_DIRECTORY,
        BYTE_RANGE_LOCK_CONFLICT,
        BYTE_RANGE_LOCK_REFUSED,
        DELETE_PENDING,
        FILE_CORRUPT,
        OWNER_INVALID,
        GROUP_INVALID,
        NO_MATCHING_BYTE_RANGE_LOCK
    }
    // tslint:disable-next-line strict-export-declare-modifiers
    export import FtpConnectionError = PromiseFtpCommon.FtpConnectionError;
    // tslint:disable-next-line strict-export-declare-modifiers
    export import FtpReconnectError = PromiseFtpCommon.FtpReconnectError;
    // tslint:disable-next-line strict-export-declare-modifiers
    export import STATUSES = PromiseFtpCommon.STATUSES;

    /**
     * Options for SftpPromise#connect()
     */
    type Options = ssh2.ConnectConfig & {
        /**
         * When using password-based user authentication, set this option to
         * handle password change requests. If this option isn't set, and the
         * server requests a password change, I haven't tested what will happen.
         */
        changePassword?: (message: string, language: string) => Promise<string>;

        /**
         * Whether to attempt to automatically reconnect using the existing
         * config if the connection is unexpectedly closed. Auto-reconnection is
         * lazy, and so will wait until a command needs to be issued before
         * attempting to reconnect.
         */
        autoReconnect?: boolean;

        /**
         * Path and name of a file containing a private key as would be passed
         * to the privateKey option. If privateKey is also set, priority is
         * given to the privateKey option.
         */
        privateKeyFile?: string;

        /**
         * Set this option to a function to try keyboard-interactive user
         * authentication if primary user authentication method fails.
         *
         * NOTE: This function may be called more than once, with the same or different prompts.
         * @param name - is generally what you'd use as a header or GUI window
         * title to describe the purpose of the `prompts`
         */
        tryKeyboard?: (
            name: string,
            instructions: string,
            instructionsLang: string,
            prompts: Array<{
                /** The query to pose to the user */
                prompt: string;
                /** Whether the user's input should be displayed on-screen */
                echo: boolean;
            }>
        ) => Array<string | Promise<string>> | Promise<string[]>;

        /** Alias for `username` */
        user?: string;

        /** Alias for `readyTimeout` */
        connTimeout?: number;

        /** Alias for `readyTimeout` */
        pasvTimeout?: number;

        /** Alias for `keepaliveInterval` */
        keepalive?: number;
    };

    /** Output of `PromiseSftp#list()` */
    interface DirectoryListing {
        /** `d` for directory, `-` for file, and `l` for symlink only on *NIX. */
        type: "d" | "-" | "l";

        /** The name of the entry. */
        name: string;

        /** The last modified date of the entry. */
        date: Date;

        /** The various permissions for this entry. *NIX only */
        rights?: {
            user: string;
            group: string;
            other: string;
        };

        /** The user name or ID that this entry belongs to. *NIX only */
        owner?: string;

        /** The group name or ID that this entry belongs to. *NIX only */
        group?: string;

        /** For symlink entries, this is the symlink's target. *NIX only */
        target?: string;

        /** True if the sticky bit is set for this entry */
        sticky?: boolean;
    }

    /** Options for `PromiseSftp#fast{Get,Put}` */
    interface FastOptions {
        /**
         * Number of concurrent reads
         * @default 25
         */
        concurrency?: number;

        /**
         * Size of each read in bytes
         * @default 32768
         */
        chunkSize: number;

        /** Called every time a part of a file is transferred */
        step?: (totalTransferred: number, chunk: number, total: number) => void;
    }

    /** From the [statvfs struct](http://linux.die.net/man/2/statvfs). */
    interface Statvfs {
        /** file system block size */
        f_bsize: number;
        /** fragment size */
        f_frsize: number;
        /** size of fs in f_frsize units */
        f_blocks: number;
        /** free blocks */
        f_bfree: number;
        /** free blocks for unprivileged users */
        f_bavail: number;
        /** inodes */
        f_files: number;
        /** free inodes */
        f_ffree: number;
        /** free inodes for unprivileged users */
        f_favail: number;
        /** file system ID */
        f_fsid: number;
        /** mount flags */
        f_flag: number;
        /** maximum filename length */
        f_namemax: number;
    }
}

declare class PromiseSftp {
    /**
     * Connects to an SFTP server; returned promise resolves to the server's
     * greeting message. If multiple authentication methods are available based
     * on the passed config, they are attempted in the following order: Password
     * > Private Key > Agent > keyboard-interactive (if tryKeyboard is set) >
     * Host-based > None. NOTE: many of the config properties below are NOT
     * relevant for promise-ftp. However, all promise-ftp connect options will
     * work here, except for secure, secureOptions, and preserveCwd.
     */
    connect(options: PromiseSftp.Options): null | ssh2.SFTPWrapper;

    /**
     * Connects to an SFTP server using the config from the most recent call to
     * #connect().
     * @returns promise that resolves to the server's greeting message.
     */
    reconnect(): Promise<string>;

    /**
     * Closes the connection to the server after any/all enqueued commands have
     * been executed.
     * @returns a promise that resolves to whether or not there was an error
     * associated with closing the connection.
     */
    end(): Promise<boolean>;

    /** Alias to `#end()` */
    logout(): Promise<boolean>;

    /**
     * Closes the connection to the server immediately.
     * @returns whether the connection was connected prior to the call to **destroy()**.
     */
    destroy(): boolean;

    /**
     * @returns a string describing the current connection state.
     */
    getConnectionStatus(): PromiseSftp.STATUSES;

    /**
     * Retrieves a directory listing.
     * @param path - The path of the directory to get the listing of.
     */
    list(path?: string): Promise<PromiseSftp.DirectoryListing[]>;

    /** Alias to `#list()` */
    listSafe(path: string): Promise<PromiseSftp.DirectoryListing[]>;

    /**
     * Retrieve a file from the server.
     * @param path - The file to retrieve from the server.
     */
    get(path: string): Promise<NodeJS.ReadableStream>;

    /**
     * Sends data to the server.
     * @param destPath - The file to store the data in. If string the path to a
     * local file.
     */
    put(
        input: NodeJS.ReadableStream | Buffer | string,
        destPath: string
    ): Promise<void>;

    /**
     * Same as `#append()`, but appends to `destPath` if it already exists.
     */
    append(
        input: NodeJS.ReadableStream | Buffer | string,
        destPath: string
    ): Promise<void>;

    /**
     * Renames/moves one file/directory to another on the server.
     * @param oldPath - The source file/directory.
     * @param newPath - The destination file/directory.
     */
    rename(oldPath: string, newPath: string): Promise<void>;

    /**
     * Create a new directory.
     * @param path - The path to create a new directory at.
     * @param recursive - Enables a `mkdir -p` algorithm, defaults to false.
     * @param attributes - The attributes to use when creating directories.
     */
    mkdir(
        path: string,
        recursive?: boolean,
        attributes?: ssh2Streams.InputAttributes
    ): Promise<void>;
    mkdir(path: string, attributes: ssh2Streams.InputAttributes): Promise<void>;

    /**
     * Remove a directory on the server.
     * @param path - The path of the directory to remove.
     */
    rmdir(path: string): Promise<void>;

    /**
     * Retrieve the size of a file on the server.
     * @param path - The path to the file to retrieve the size of.
     */
    size(path: string): Promise<number>;

    /**
     * Retrieve the last modified date of a file on the server.
     * @param path - The path to the file to get the last modified date of.
     */
    lastMod(path: string): Date;

    /**
     * Sets the file byte offset for the next file transfer action initiated via
     * #get() or #put() to `byteOffset`.
     */
    restart(byteOffset: number): Promise<void>;

    /**
     * Download a file from the server using parallel reads for faster throughput.
     * @param remotePath - The path to the remote file to read from.
     * @param localPath - The path to the local file to write to.
     */
    fastGet(
        remotePath: string,
        localPath: string,
        options?: PromiseSftp.FastOptions
    ): Promise<void>;

    /**
     * Upload a file to the server using parallel reads for faster throughput.
     * @param localPath - The path to the local file to read from.
     * @param remotePath - The path to the remote file to write to.
     */
    fastPut(
        localPath: string,
        remotePath: string,
        options?: PromiseSftp.FastOptions
    ): Promise<void>;

    /**
     * Creates a read stream from a file on the server.
     * @param path - The path of the file to create a read stream from.
     * @returns a new `ReadableStream` for `path`.
     */
    createReadStream(
        path: string,
        options?:
            | string
            | {
                  flags?: string;
                  encoding?: string;
                  fd?: number;
                  mode?: number;
                  autoClose?: boolean;
                  start?: number;
                  end?: number;
                  highWaterMark?: number;
              }
    ): Promise<NodeJS.ReadableStream>;

    /**
     * Creates a write stream to a file on the server.
     * @param path - The path of the file to create a write stream to.
     * @returns a new `WriteableStream` for `path`.
     */
    createWriteStream(
        path: string,
        options?:
            | string
            | {
                  flags?: string;
                  encoding?: string;
                  fd?: number;
                  mode?: number;
                  autoClose?: boolean;
                  start?: number;
                  end?: number;
                  highWaterMark?: number;
              }
    ): Promise<NodeJS.WritableStream>;

    /**
     * Opens a file on the server.
     * @param filename - The path of the file to open.
     * @param mode - Any of the modes supported by `fs.open()`.
     * @returns a promise that resolves to a `Buffer` containing a handle to the file.
     */
    open(
        filename: string,
        mode: string | number,
        attributes?: ssh2Streams.InputAttributes
    ): Promise<Buffer>;

    /**
     * Close a resource on the server.
     * @param handle - A file handle returned from `#open()` or `#opendir()`.
     */
    close(handle: Buffer): Promise<void>;

    /**
     * Read binary data from a file on the server to a buffer.
     * @param handle - A file handle returned from `#open()` or `#opendir()`.
     * @param buffer - The buffer to write to.
     * @param offset - The offset from the start of the buffer to begin writing to.
     * @param length - The number of bytes to read from the resource.
     * @param position - The position of the file to begin reading from.
     */
    read(
        handle: Buffer,
        buffer: Buffer,
        offset: number,
        length: number,
        position: number
    ): Promise<{
        /** The number of bytes successfully read */
        bytesRead: number;

        /** The buffer passed to `#read()`, but offset-adjusted */
        buffer: Buffer;

        /** The position passed to `#read()` */
        position: number;
    }>;

    /**
     * Write binary data from a buffer to a file on the server.
     * @param handle - A file handle returned from `#open()` or `#opendir()`.
     * @param buffer - The buffer to read from.
     * @param offset - The offset from the start of the buffer to begin reading from.
     * @param length - The number of bytes to read from the buffer.
     * @param position - The position of the file to begin writing to.
     */
    read(
        handle: Buffer,
        buffer: Buffer,
        offset: number,
        length: number,
        position: number
    ): Promise<void>;

    /**
     * Retrieves attributes from a resource on the server.
     * @param handle - A file handle returned from `#open()` or `#opendir()`
     */
    fstat(handle: Buffer): Promise<ssh2Streams.Stats>;

    /**
     * Set the attributes for a resource on the server.
     * @param handle - A resource handle returned from `#open()` or `#fopen()`.
     */
    fsetstat(handle: Buffer, attributes: ssh2Streams.Attributes): Promise<void>;

    /**
     * Set the access and modified times for a resource on the server.
     * @param handle - A resource handle returned from `#open()` or `#fopen()`.
     * @param atime - A Date or unix timestamp representing the new access time for the resource
     * @param mtime - A Date or unix timestamp representing the new modify time for the resource
     */
    futimes(
        handle: Buffer,
        atime: Date | number,
        mtime: Date | number
    ): Promise<void>;

    /**
     * Set the ownership for a resource on the server.
     * @param handle - A resource handle returned from `#open()` or `#fopen()`.
     * @param uid - The id of the new owner user.
     * @param gid - The id of the new owner group.
     */
    fchown(handle: Buffer, uid: number, gid: number): Promise<void>;

    /**
     * Set the mode for a resource on the server.
     * @param handle - A resource handle returned from `#open()` or `#fopen()`.
     * @param mode - The new mode, a number or a string with an octal number.
     */
    fchmod(handle: Buffer, mode: number | string): Promise<void>;

    /**
     * Open a directory on the server.
     * @param path - The path of the directory to open.
     * @returns a buffer with the handle of the opened directory.
     */
    opendir(path: string): Promise<Buffer>;

    /**
     * Read a directory on the server.
     * @param location - The path of the directory to read or a handle returned from `#opendir()`.
     */
    readdir(
        location: Buffer | string
    ): Promise<{
        filename: string;
        longname: string;
        attrs: ssh2Streams.Attributes;
    }>;

    /**
     * Remove a file or symlink on the server.
     * @param path - The path of the file/symlink to remove.
     */
    unlink(path: string): Promise<void>;

    /** Alias for `#unlink()` */
    remove(path: string): Promise<void>;

    /**
     * Retrieve attributes for a resource on the server.
     * @param path - The path to the resource to retrieve the attributes of.
     */
    stat(path: string): Promise<ssh2Streams.Stats>;

    /**
     * Retrieve attributes for a resource on the server. If the resource is a
     * symlink, it retrieves the stats for the link itself instead of the
     * resource it refers to.
     * @param path - The path to the resource to retrieve the attributes of.
     */
    lstat(path: string): Promise<ssh2Streams.Stats>;

    /**
     * Set the attributes of a resource on the server.
     * @param path - The path to the resource to set the attributes of.
     * @param attributes - The new attributes for the resource.
     */
    setstat(path: string, attributes: ssh2Streams.Attributes): Promise<void>;

    /**
     * Set the access and modified times for a resource on the server.
     * @param path - The path of the resource to set times of.
     * @param atime - A Date or unix timestamp representing the new access time for the resource
     * @param mtime - A Date or unix timestamp representing the new modify time for the resource
     */
    utimes(
        path: string,
        atime: Date | number,
        mtime: Date | number
    ): Promise<void>;

    /**
     * Set the ownership for a resource on the server.
     * @param path - The path to the resource to change ownership of.
     * @param uid - The id of the new owner user.
     * @param gid - The id of the new owner group.
     */
    chown(path: string, uid: number, gid: number): Promise<void>;

    /**
     * Set the mode for a resource on the server.
     * @param path - The path of the resource to set the mode of.
     * @param mode - The new mode, a number or a string with an octal number.
     */
    chmod(path: string, mode: number | string): Promise<void>;

    /**
     * Read the target of a symlink on the server.
     * @param path - The path of the symlink to read the target of.
     */
    readlink(path: string): Promise<string>;

    /**
     * Create a symlink on the server.
     * @param targetPath - The path to the target of the symlink.
     * @param linkPath - The path of the new symlink.
     */
    symlink(targetPath: string, linkPath: string): Promise<void>;

    /**
     * Get the absolute path from a relative path on the server.
     * @param path - The path to get the absolute path of.
     */
    realpath(path: string): Promise<string>;

    /**
     * **OpenSSH extension**
     * Performs POSIX rename(3) on a resource on the server.
     * @param srcPath - The original path of the resource.
     * @param destPath - The new path to rename the resource to.
     */
    ext_openssh_rename(srcPath: string, destPath: string): Promise<void>;

    /**
     * **OpenSSH extension**
     * Perform POSIX fstatvfs(2) on a resource on the server.
     * @param path - The path to get the statvfs of.
     */
    ext_openssh_statvfs(path: string): Promise<PromiseSftp.Statvfs>;

    /**
     * **OpenSSH extension**
     * Perform POSIX fstatvfs(2) on a resource on the server.
     * @param handle - A resource handle returned from `#open()` or `#fopen()`.
     */
    ext_openssh_fstatvfs(handle: Buffer): Promise<PromiseSftp.Statvfs>;

    /**
     * **OpenSSH extension**
     * Performs POSIX link(2) to create a hard link on the server.
     * @param targetPath - The path of a file to hardlink from.
     * @param linkPath - The path of the newly created hardlink.
     */
    ext_openssh_hardlink(targetPath: string, linkPath: string): Promise<void>;

    /**
     * **OpenSSH extension**
     * Perform POSIX fsync(3) on a resource on the server.
     * @param handle - A resource handle returned from `#open()` or `#fopen()`.
     */
    ext_openssh_fsync(handle: Buffer): Promise<void>;
}

export = PromiseSftp;
