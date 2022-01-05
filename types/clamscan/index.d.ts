// Type definitions for clamscan 2.0
// Project: https://github.com/kylefarris/clamscan
// Definitions by: Viktoria Grechukha <https://github.com/crzdvl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class NodeClam {
    initialized: boolean;
    debugLabel: string;
    defaultScanner: string;
    defaults: Readonly<Options>;
    settings: Options;

    init(options?: Options, cb?: () => void): Promise<NodeClamFunctions>;

    private _buildClamArgs;

    private _buildClamFlags;

    private _initSocket;

    private _isClamavBinary;

    private _isLocalHost;

    private _isReadableStream;

    private _ping;

    private _processResult;
}

interface NodeClamFunctions {
    /**
     * Allows one to create a new instances of clamscan with new options.
     */
    reset(options?: Options): Promise<NodeClam>;
    reset(options?: Options, cb?: (clam: NodeClam) => void): void;

    /**
     * This method allows you to determine the version of ClamAV you are
     * interfacing with. It supports a callback and Promise API. If no callback
     * is supplied, a Promise will be returned.
     *
     * @see {@link https://github.com/kylefarris/clamscan#getversioncallback}
     */
    getVersion(): Promise<string>;
    getVersion(cb: (err: Error | null, version: string) => void): void;

    /**
     * This method allows you to scan a single file. It supports a callback and
     * Promise API. If no callback is supplied, a Promise will be returned. This
     * method will likely be the most common use-case for this module.
     *
     * @see {@link https://github.com/kylefarris/clamscan#isinfectedfile_pathcallback}
     */
    isInfected(file: string): Promise<{
        file: string;
        isInfected: boolean;
        viruses: string[];
    }>;
    isInfected(
      file: string,
      cb?: (err: Error | null, file: string, isInfected: boolean, viruses: string[]) => void,
    ): void;

    passthrough(): {
        isInfected: boolean,
        viruses: string[]
    };

    /**
     * Just an alias to `isInfected`.
     */
    scanFile(file: string): Promise<{
        file: string;
        isInfected: boolean;
        viruses: string[];
    }>;
    scanFile(
      file: string,
      cb?: (err: Error | null, file: string, isInfected: boolean, viruses: string[]) => void,
    ): void;

    /**
     * This allows you to scan many files that might be in different
     * directories or maybe only certain files of a single directory. This
     * is essentially a wrapper for isInfected that simplifies the process
     * of scanning many files or directories.
     *
     * @see {@link https://github.com/kylefarris/clamscan#scanfilesfilesend_callbackfile_callback}
     */
    scanFiles(files?: string[]): Promise<{
        goodFiles: string[];
        badFiles: string[];
        errors: {
            [filename: string]: Error;
        };
        viruses: string[];
    }>;
    scanFiles(
      files?: string[],
      endCb?: (err: Error | null, goodFiles: string[], badFiles: string[], viruses: string[]) => void,
      fileCb?: (err: Error | null, file: string, isInfected: boolean, viruses: string[]) => void,
    ): void;

    /**
     * Allows you to scan an entire directory for infected files. This
     * obeys your recursive option even for clamdscan which does not
     * have a native way to turn this feature off. If you have multiple
     * paths, send them in an array to scanFiles.
     *
     * @see {@link https://github.com/kylefarris/clamscan#scanDir}
     */
    scanDir(path: string): Promise<{
        path: string;
        isInfected: boolean;
        goodFiles: string[];
        badFiles: string[];
        viruses: string[];
    }>;
    scanDir(
      path: string,
      endCb?: (err: Error | null, goodFiles: string[], badFiles: string[], viruses: string[]) => void,
      fileCb?: (err: Error | null, file: string, isInfected: boolean, viruses: string[]) => void
    ): void;

    /**
     * This method allows you to scan a binary stream. NOTE:
     * This method will only work if you've configured the
     * module to allow the use of a TCP or UNIX Domain socket.
     * In other words, this will not work if you only have
     * access to a local ClamAV binary.
     *
     * @see {@link https://github.com/kylefarris/clamscan#scanStream}
     */
    scanStream(stream: ReadableStream): Promise<{
        file: string;
        isInfected: boolean;
        viruses: string[];
    }>;
    scanStream(stream: ReadableStream, cb?: (err: Error | null, isInfected: boolean) => void): void;
}

interface Options {
    removeInfected?: boolean; // If true, removes infected files
    quarantineInfected?: boolean | string; // False: Don't quarantine, Path: Moves files to this place.
    scanLog?: string | null; // Path to a writeable log file to write scan results into
    debugMode?: boolean; // Whether to log info/debug/error msg to the console
    fileList?: string | null; // path to file containing list of files to scan (for scanFiles method)
    scanRecursively?: boolean; // If true, deep scan folders recursively
    clamscan?: {
        path?: string; // Path to clamscan binary on your server
        db?: string; // Path to a custom virus definition database
        scanArchives?: boolean; // If true, scan archives (ex. zip, rar, tar, dmg, iso, etc...)
        active?: boolean; // If true, this module will consider using the clamscan binary
    };
    clamdscan?: {
        socket?: string | boolean; // Socket file for connecting via TCP
        host?: string | boolean; // IP of host to connect to TCP interface
        port?: number | boolean; // Port of host to use when connecting via TCP interface
        timeout?: number; // Timeout for scanning files
        localFallback?: boolean; // Do not fail over to binary-method of scanning
        path?: string; // Path to the clamdscan binary on your server
        configFile?: string; // Specify config file if it's in an unusual place
        multiscan?: boolean; // Scan using all available cores! Yay!
        reloadDb?: boolean; // If true, will re-load the DB on every call (slow)
        active?: boolean; // If true, this module will consider using the clamdscan binary
        bypassTest?: boolean; // Check to see if socket is available when applicable
    };
    preference?: string; // If clamdscan is found and active, it will be used by default
}

export = NodeClam;
