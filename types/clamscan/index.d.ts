/// <reference types="node" />

import { Readable, Transform } from "stream";

declare namespace NodeClam {
    interface Options {
        /** If true, removes infected files */
        removeInfected?: boolean;
        /** False: Don't quarantine, Path: Moves files to this place. */
        quarantineInfected?: boolean | string;
        /** Path to a writeable log file to write scan results into */
        scanLog?: string;
        /** Whether to log info/debug/error msg to the console */
        debugMode?: boolean;
        /** path to file containing list of files to scan (for scanFiles method) */
        fileList?: string;
        /** If true, deep scan folders recursively */
        scanRecursively?: boolean;
        clamscan?: {
            /** Path to clamscan binary on your server */
            path?: string;
            /** Path to a custom virus definition database */
            db?: string;
            /** If true, scan archives (ex. zip, rar, tar, dmg, iso, etc...) */
            scanArchives?: boolean;
            /** If true, this module will consider using the clamscan binary */
            active?: boolean;
        };
        clamdscan?: {
            /** Socket file for connecting via TCP */
            socket?: string | boolean;
            /** IP of host to connect to TCP interface */
            host?: string | boolean;
            /** Port of host to use when connecting via TCP interface */
            port?: number | boolean;
            /** Timeout for scanning files */
            timeout?: number;
            /** Do not fail over to binary-method of scanning */
            localFallback?: boolean;
            /** Path to the clamdscan binary on your server */
            path?: string;
            /** Specify config file if it's in an unusual place */
            configFile?: string;
            /** Scan using all available cores! Yay! */
            multiscan?: boolean;
            /** If true, will re-load the DB on every call (slow) */
            reloadDb?: boolean;
            /** If true, this module will consider using the clamdscan binary */
            active?: boolean;
            /** Check to see if socket is available when applicable */
            bypassTest?: boolean;
        };
        /** If clamdscan is found and active, it will be used by default */
        preference?: any;
    }

    interface NodeClamError extends Error {
        data: {
            is_infected: string;
            viruses: string[];
        };
        date: Date;
    }

    type Response<T> = T & {
        viruses: string[];
    };
}

declare class NodeClam {
    readonly initialized: boolean;
    readonly debugLabel: "node-clam";
    readonly defaultScanner: "clamdscan";
    readonly defaults: Readonly<NodeClam.Options>;
    readonly settings: Readonly<NodeClam.Options>;

    private _buildClamArgs;
    private _buildClamFlags;
    private _initSocket;
    private _isClamavBinary;
    private _isLocalHost;
    private _isReadableStream;
    private _ping;
    private _processResult;

    constructor();

    init(options: NodeClam.Options): Promise<this>;
    init(options: NodeClam.Options, cb: (err: Error | null, instance: this) => void): void;

    /**
     * Allows one to create a new instances of clamscan with new options.
     *
     * @see {@link https://github.com/kylefarris/clamscan/blob/master/index.js#L358}
     */
    reset(options?: NodeClam.Options): Promise<NodeClam>;
    reset(options?: NodeClam.Options, cb?: (err: NodeClam.NodeClamError | null, clam: NodeClam) => void): void;

    /**
     * This method allows you to determine the version of ClamAV you are
     * interfacing with. It supports a callback and Promise API. If no callback
     * is supplied, a Promise will be returned.
     *
     * @see {@link https://github.com/kylefarris/clamscan#getversioncallback}
     */
    getVersion(): Promise<string>;
    getVersion(cb: (err: NodeClam.NodeClamError | null, version: string) => void): void;

    /**
     * This method allows you to scan a single file. It supports a callback and
     * Promise API. If no callback is supplied, a Promise will be returned. This
     * method will likely be the most common use-case for this module.
     *
     * @see {@link https://github.com/kylefarris/clamscan#isinfectedfile_pathcallback}
     */
    isInfected(file?: string): Promise<
        NodeClam.Response<{
            file: string;
            isInfected: boolean | null;
        }>
    >;
    isInfected(
        file?: string,
        cb?: (err: NodeClam.NodeClamError | null, file: string, isInfected: boolean | null, viruses: string[]) => void,
    ): void;

    /**
     * @see {@link https://github.com/kylefarris/clamscan#passthrough}
     */
    passthrough(): Transform;

    /**
     * Just an alias to `isInfected`. See docs for that for usage examples.
     *
     * @see {@link https://github.com/kylefarris/clamscan/blob/master/index.js#L1405}
     */
    scanFile(file?: string): Promise<
        NodeClam.Response<{
            file: string;
            isInfected: boolean;
        }>
    >;
    scanFile(
        file?: string,
        cb?: (err: NodeClam.NodeClamError | null, file: string, isInfected: boolean, viruses: string[]) => void,
    ): void;

    /**
     * This allows you to scan many files that might be in different
     * directories or maybe only certain files of a single directory. This
     * is essentially a wrapper for isInfected that simplifies the process
     * of scanning many files or directories.
     *
     * @see {@link https://github.com/kylefarris/clamscan#scanfilesfilesend_callbackfile_callback}
     */
    scanFiles(files?: string[]): Promise<
        NodeClam.Response<{
            goodFiles: string[];
            badFiles: string[];
            errors: {
                [filename: string]: NodeClam.NodeClamError;
            };
        }>
    >;
    scanFiles(
        files?: string[],
        endCb?: (
            err: NodeClam.NodeClamError | null,
            goodFiles: string[],
            badFiles: string[],
            viruses: string[],
        ) => void,
        fileCb?: (err: NodeClam.NodeClamError | null, file: string, isInfected: boolean, viruses: string[]) => void,
    ): void;

    /**
     * Allows you to scan an entire directory for infected files. This obeys
     * your recursive option even for clamdscan which does not have a native way
     * to turn this feature off. If you have multiple paths, send them in an
     * array to scanFiles.
     *
     * @see {@link https://github.com/kylefarris/clamscan#scandirdir_pathend_callbackfile_callback}
     */
    scanDir(path?: string): Promise<
        NodeClam.Response<{
            path: string;
            isInfected: boolean;
            goodFiles: string[];
            badFiles: string[];
        }>
    >;
    scanDir(
        path?: string,
        endCb?: (
            err: NodeClam.NodeClamError | null,
            goodFiles: string[],
            badFiles: string[],
            viruses: string[],
        ) => void,
        fileCb?: (err: NodeClam.NodeClamError | null, file: string, isInfected: boolean, viruses: string[]) => void,
    ): void;

    /**
     * This method allows you to scan a binary stream. NOTE: This method will
     * only work if you've configured the module to allow the use of a TCP or
     * UNIX Domain socket. In other words, this will not work if you only have
     * access to a local ClamAV binary.
     *
     * @see {@link https://github.com/kylefarris/clamscan#scanstreamstreamcallback}
     */
    scanStream(stream: Readable): Promise<
        NodeClam.Response<{
            file: string;
            isInfected: boolean;
        }>
    >;
    scanStream(stream: Readable, cb?: (err: NodeClam.NodeClamError | null, isInfected: boolean) => void): void;
}

export = NodeClam;
