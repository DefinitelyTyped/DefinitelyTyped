// Type definitions for clamscan 2.0
// Project: https://github.com/kylefarris/clamscan
// Definitions by: Viktoria Grechukha <https://github.com/crzdvl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class NodeClam {
    initialized: boolean;
    debugLabel: string;
    defaultScanner: string;
    defaults: Readonly<{
        removeInfected: boolean;
        quarantineInfected: boolean;
        scanLog: string | null;
        debugMode: boolean;
        fileList: string | null;
        scanRecursively: boolean;
        clamscan: {
            path: string;
            scanArchives: boolean;
            db: string;
            active: boolean;
        };
        clamdscan: {
            socket: boolean;
            host: boolean;
            port: boolean;
            timeout: number;
            localFallback: boolean;
            path: string;
            configFile: string | null;
            multiscan: boolean;
            reloadDb: boolean;
            active: boolean;
            bypassRest: boolean;
        };
        preference: string;
    }>;
    settings: {
        removeInfected: boolean;
        quarantineInfected: boolean;
        scanLog: string | null;
        debugMode: boolean;
        fileList: string | null;
        scanRecursively: boolean;
        clamscan: {
            path: string;
            scanArchives: boolean;
            db: string;
            active: boolean;
        };
        clamdscan: {
            socket: boolean;
            host: boolean;
            port: boolean;
            timeout: number;
            localFallback: boolean;
            path: string;
            configFile: string | null;
            multiscan: boolean;
            reloadDb: boolean;
            active: boolean;
            bypassRest: boolean;
        };
        preference: string;
    };

    init(options?: {
        removeInfected?: boolean;
        quarantineInfected?: boolean | string;
        scanLog?: string | null;
        debugMode?: boolean;
        fileList?: string | null;
        scanRecursively?: boolean;
        clamscan?: {
            path?: string;
            db?: string;
            scanArchives?: boolean;
            active?: boolean;
        };
        clamdscan?: {
            socket?: string;
            host?: string;
            port?: string | number;
            timeout?: number;
            localFallback?: boolean;
            path?: string;
            configFile?: string | null;
            multiscan?: boolean;
            reloadDb?: boolean;
            active?: boolean;
            bypassRest?: boolean;
        };
        preference?: string;
    }, cb?: () => void): Promise<NodeClamFunctions>;

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
    reset(options?: Options, cb?: () => void): Promise<NodeClam>;

    getVersion(cb?: (err: Error | null, version: string) => void): Promise<string>;

    isInfected(
      file: string,
      cb?: (err: Error | null, file: string, isInfected: boolean, viruses: string[]) => void
    ): Promise<{
        file: string;
        isInfected: boolean;
        viruses: string[];
    }>;

    passthrough(): {
        isInfected: boolean,
        viruses: string[]
    };

    scanFile(
      file: string,
      cb?: (err: Error | null, file: string, isInfected: boolean, viruses: string[]) => void
    ): Promise<{
        file: string;
        isInfected: boolean;
        viruses: string[];
    }> ;

    scanFiles(
      files: string[],
      endCb?: (err: Error | null, goodFiles: string[], badFiles: string[], viruses: string[]) => void,
      fileCb?: (err: Error | null, file: string, isInfected: boolean, viruses: string[]) => void
    ): Promise<{
        goodFiles: string[];
        badFiles: string[];
        errors: {
            [filename: string]: Error
        };
        viruses: string[]
    }>;

    scanDir(
      path: string,
      endCb?: (err: Error | null, goodFiles: string[], badFiles: string[], viruses: string[]) => void,
      fileCb?: (err: Error | null, file: string, isInfected: boolean, viruses: string[]) => void
    ): Promise<{
        path: string;
        isInfected: boolean;
        goodFiles: string[];
        badFiles: string[];
        viruses: string[];
    }>;

    scanStream(stream: ReadableStream, cb?: (err: Error | null, isInfected: boolean) => void): Promise<{
        file: string;
        isInfected: boolean;
        viruses: string[];
    }>;
}

interface NodeClamScanError extends Error {
    data: {
        is_infected: string;
        viruses: string[];
    };
}

interface NodeClamFileError extends Error {
    is_infected: string;
    viruses: string[];
}

interface Options {
    removeInfected?: boolean; // If true, removes infected files
    quarantineInfected?: boolean | string; // False: Don't quarantine, Path: Moves files to this place.
    scanLog?: string | null; // Path to a writeable log file to write scan results into
    debug_mode?: boolean; // Whether to log info/debug/error msg to the console
    fileList?: string | null; // path to file containing list of files to scan (for scanFiles method)
    scanRecursively?: boolean; // If true, deep scan folders recursively
    clamscan?: {
        path?: string, // Path to clamscan binary on your server
        db?: string, // Path to a custom virus definition database
        scanArchives?: boolean, // If true, scan archives (ex. zip, rar, tar, dmg, iso, etc...)
        active?: boolean // If true, this module will consider using the clamscan binary
    };
    clamdscan?: {
        socket?: string | boolean, // Socket file for connecting via TCP
        host?: string | boolean, // IP of host to connect to TCP interface
        port?: number | boolean, // Port of host to use when connecting via TCP interface
        timeout?: number, // Timeout for scanning files
        localFallback?: boolean, // Do not fail over to binary-method of scanning
        path?: string, // Path to the clamdscan binary on your server
        config_file?: string, // Specify config file if it's in an unusual place
        multiscan?: boolean, // Scan using all available cores! Yay!
        reloadDb?: boolean, // If true, will re-load the DB on every call (slow)
        active?: boolean, // If true, this module will consider using the clamdscan binary
        bypass_test?: boolean, // Check to see if socket is available when applicable
    };
    preference?: string; // If clamdscan is found and active, it will be used by default
}

export = NodeClam;
