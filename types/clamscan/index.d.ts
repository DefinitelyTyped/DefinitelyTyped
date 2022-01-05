// Type definitions for clamscan 2.0
// Project: https://github.com/kylefarris/clamscan
// Definitions by: Viktoria Grechukha <https://github.com/crzdvl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        path?: string,
        /** Path to a custom virus definition database */
        db?: string,
        /** If true, scan archives (ex. zip, rar, tar, dmg, iso, etc...) */
        scanArchives?: boolean,
        /** If true, this module will consider using the clamscan binary */
        active?: boolean
    };
    clamdscan?: {
        /** Socket file for connecting via TCP */
        socket?: string | boolean,
        /** IP of host to connect to TCP interface */
        host?: string | boolean,
        /** Port of host to use when connecting via TCP interface */
        port?: number | boolean,
        /** Timeout for scanning files */
        timeout?: number,
        /** Do not fail over to binary-method of scanning */
        localFallback?: boolean,
        /** Path to the clamdscan binary on your server */
        path?: string,
        /** Specify config file if it's in an unusual place */
        configFile?: string,
        /** Scan using all available cores! Yay! */
        multiscan?: boolean,
        /** If true, will re-load the DB on every call (slow) */
        reloadDb?: boolean,
        /** If true, this module will consider using the clamdscan binary */
        active?: boolean,
        /** Check to see if socket is available when applicable */
        bypassTest?: boolean,
    };
    /** If clamdscan is found and active, it will be used by default */
    preference?: any;
}

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
    reset(options?: Options, cb?: () => void): Promise<object> | NodeClamScanError | NodeClamFileError;

    getVersion(cb?: () => void): Promise<string> | NodeClamScanError | NodeClamFileError;

    isInfected(file: string, cb?: () => void): Promise<{
        file: string;
        isInfected: boolean;
        viruses: any[];
    }>;

    passthrough(): {
        isInfected: boolean,
        viruses: any[]
    } | NodeClamScanError | NodeClamFileError;

    scanFile(file: string, cb?: () => void): Promise<{
        file: string;
        isInfected: boolean;
        viruses: any[];
    }> | NodeClamScanError | NodeClamFileError;

    scanFiles(files: any[], endCb?: () => void, fileCb?: () => void): Promise<{
        goodFiles: any[];
        badFiles: any[];
        errors: object;
        viruses: any[]
    }> | NodeClamScanError | NodeClamFileError;

    scanDir(path: string, endCb?: () => void, fileCb?: () => void): Promise<{
        path: string;
        isInfected: boolean;
        goodFiles: any[];
        badFiles: any[];
        viruses: any[];
    }> | NodeClamScanError | NodeClamFileError;

    scanStream(stream: ReadableStream, cb?: () => void): Promise<{
        file: string;
        isInfected: boolean;
        viruses: any[];
    }>;
}

interface NodeClamScanError {
    data: {
        isInfected: string;
        viruses: any[];
    };
}

interface NodeClamFileError {
    isInfected: string;
    viruses: any[];
}

export = NodeClam;
