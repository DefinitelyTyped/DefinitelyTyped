/// <reference types="node" />

import events = require("events");
import fs = require("fs");
import net = require("net");
import tls = require("tls");

export const enum LogLevel {
    ERROR = 0,
    WARN = 1,
    INFO = 2,
    DEBUG = 3,
    TRACE = 4,
}

/**
 * Options for FtpServer constructor
 */
export interface FtpServerOptions {
    /**
     * Gets the initial working directory for the user. Called after user is authenticated
     * Typical cases where you would want/need the callback involve retrieving configurations from external datasources and suchlike.
     */
    getInitialCwd: (connection: FtpConnection, callback?: (error: Error, path: string) => void) => void | string;
    /**
     * Gets the root directory for the user relative to the CWD. Called after getInitialCwd. The user is not able to escape this directory.
     * Typical cases where you would want/need the callback involve retrieving configurations from external datasources and suchlike.
     */
    getRoot: (connection: FtpConnection, callback?: (error: Error, path: string) => void) => void | string;
    /**
     * If set to true, then files which the client uploads are buffered in memory and then written to disk using writeFile.
     * If false, files are written using writeStream.
     */
    useWriteFile?: boolean | undefined;
    /**
     * If set to true, then files which the client uploads are slurped using 'readFile'.
     * If false, files are read using readStream.
     */
    useReadFile?: boolean | undefined;
    /**
     * Determines the maximum file size (in bytes) for which uploads are buffered in memory before being written to disk.
     * Has an effect only if useWriteFile is set to true.
     * If uploadMaxSlurpSize is not set, then there is no limit on buffer size.
     */
    uploadMaxSlurpSize?: number | undefined;
    /**
     * The maximum number of concurrent calls to fs.stat which will be made when processing a LIST request. Default 5.
     */
    maxStatsAtOnce?: number | undefined;
    /**
     * A function which can be used as the argument of an array's sort method. Used to sort filenames for directory listings.
     * See [https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/sort] for more info.
     */
    filenameSortFunc?: ((a: string, b: string) => number) | undefined;
    /**
     * A function which is applied to each filename before sorting.
     * If set to false, filenames are unaltered.
     */
    filenameSortMap?: ((a: string) => string) | boolean | undefined;
    /**
     * If this is set, then filenames are not sorted in responses to the LIST and NLST commands.
     */
    dontSortFilenames?: boolean | undefined;
    /**
     * If set to true, then LIST and NLST treat the characters ? and * as literals instead of as wildcards.
     */
    noWildcards?: boolean | undefined;
    /**
     * If this is set, the server will allow explicit TLS authentication. Value should be a dictionary which is suitable as the options argument of tls.createServer.
     */
    tlsOptions?: tls.TlsOptions | undefined;
    /**
     * If this is set to true, and tlsOptions is also set, then the server will not allow logins over non-secure connections.
     * Default false
     */
    tlsOnly?: boolean | undefined;
    /**
     * I obviously set this to true when tlsOnly is on -someone needs to update this.
     */
    allowUnauthorizedTls?: boolean | undefined;
    /**
     * Integer, specifies the lower-bound port (min port) for creating PASV connections
     */
    pasvPortRangeStart?: number | undefined;
    /**
     * Integer, specifies the upper-bound port (max port) for creating PASV connections
     */
    pasvPortRangeEnd?: number | undefined;
    /**
     * Integer from 0-4 representing the Log Level to show.
     */
    logLevel?: LogLevel | undefined;
}

/**
 * Represents one Ftp connection. Incomplete type definition.
 *
 * @event command:user (username: string, success: () => void, failure: () => void)
 * @event command:pass (password: string, success: (username: string, fs?: FtpFileSystem) => void, failure: () => void)
 *                     The server raises a command:pass event which is given pass, success and failure arguments.
 *                     On successful login, success should be called with a username argument. It may also optionally
 *                     be given a second argument, which should be an object providing an implementation of the API for Node's fs module.
 */
export declare class FtpConnection extends events.EventEmitter {
    server: FtpServer;
    socket: net.Socket;
    pasv: net.Server;
    dataSocket: net.Socket; // the actual data socket
    mode: string;
    username: string;
    cwd: string;
    root: string;
    hasQuit: boolean;
    // State for handling TLS upgrades.
    secure: boolean;
    pbszReceived: boolean;
}

/**
 * Optional mock fs implementation to set in the command:pass event of FtpConnection
 */
export interface FtpFileSystem {
    unlink: (path: string, callback?: (err?: NodeJS.ErrnoException) => void) => void;
    readdir: (path: string, callback?: (err?: NodeJS.ErrnoException, files?: string[]) => void) => void;
    mkdir:
        | ((path: string, callback?: (err?: NodeJS.ErrnoException) => void) => void)
        | ((path: string, mode: number, callback?: (err?: NodeJS.ErrnoException) => void) => void)
        | ((path: string, mode: string, callback?: (err?: NodeJS.ErrnoException) => void) => void);
    open:
        | ((path: string, flags: string, callback?: (err?: NodeJS.ErrnoException, fd?: number) => any) => void)
        | ((
            path: string,
            flags: string,
            mode: number,
            callback?: (err?: NodeJS.ErrnoException, fd?: number) => any,
        ) => void)
        | ((
            path: string,
            flags: string,
            mode: string,
            callback?: (err?: NodeJS.ErrnoException, fd?: number) => any,
        ) => void);
    close: (fd: number, callback?: (err?: NodeJS.ErrnoException) => void) => void;
    rmdir: (path: string, callback?: (err?: NodeJS.ErrnoException) => void) => void;
    rename: (oldPath: string, newPath: string, callback?: (err?: NodeJS.ErrnoException) => void) => void;
    /**
     * specific object properties: { mode, isDirectory(), size, mtime }
     */
    stat: (path: string, callback?: (err?: NodeJS.ErrnoException, stats?: fs.Stats) => any) => void;
    /**
     * if useReadFile option is not set or is false
     */
    createReadStream?:
        | ((path: string, options?: {
            flags?: string | undefined;
            encoding?: string | undefined;
            fd?: string | undefined;
            mode?: string | undefined;
            bufferSize?: number | undefined;
        }) => fs.ReadStream)
        | undefined;
    /**
     * if useWriteFile option is not set or is false
     */
    createWriteStream?:
        | ((path: string, options?: {
            flags?: string | undefined;
            encoding?: string | undefined;
            string?: string | undefined;
        }) => fs.WriteStream)
        | undefined;
    /**
     * if useReadFile option is set to 'true'
     */
    readFile?:
        | ((filename: string, encoding: string, callback: (err: NodeJS.ErrnoException, data: string) => void) => void)
        | ((
            filename: string,
            options: { encoding: string; flag?: string | undefined },
            callback: (err: NodeJS.ErrnoException, data: string) => void,
        ) => void)
        | ((
            filename: string,
            options: { flag?: string | undefined },
            callback: (err: NodeJS.ErrnoException, data: Buffer) => void,
        ) => void)
        | ((filename: string, callback: (err: NodeJS.ErrnoException, data: Buffer) => void) => void)
        | undefined;
    /**
     * if useWriteFile option is set to 'true'
     */
    writeFile?:
        | ((filename: string, data: any, callback?: (err: NodeJS.ErrnoException) => void) => void)
        | ((
            filename: string,
            data: any,
            options: { encoding?: string | undefined; mode?: number | undefined; flag?: string | undefined },
            callback?: (err: NodeJS.ErrnoException) => void,
        ) => void)
        | ((
            filename: string,
            data: any,
            options: { encoding?: string | undefined; mode?: string | undefined; flag?: string | undefined },
            callback?: (err: NodeJS.ErrnoException) => void,
        ) => void)
        | undefined;
}

/**
 * FTP server
 *
 * Events:
 * @event close    net.Server close event
 * @event error net.Server error event
 * @event client:connected  (connection: FtpConnection)
 */
export declare class FtpServer extends events.EventEmitter {
    /**
     * @param host host is a string representation of the IP address clients use to connect to the FTP server.
     *             It's imperative that this actually reflects the remote IP the clients use to access the server,
     *             as this IP will be used in the establishment of PASV data connections. If this IP is not the one clients use to connect,
     *             you will see some strange behavior from the client side (hangs).
     * @param options See test.js for a simple example.
     */
    constructor(host: string, options: FtpServerOptions);

    /**
     * Start listening, see net.Server.listen()
     */
    public listen(port: number, host?: string, backlog?: number, listeningListener?: () => void): void;

    /**
     * Stop listening
     */
    public close(callback?: () => void): void;

    /**
     * Change/Retrieve logLevel at runtime.
     */
    public debugging: LogLevel;
}
