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
        scanLog: any;
        debugMode: boolean;
        fileList: any;
        scanRecursively: boolean;
        clamscan: {
            path: string;
            scanArchives: boolean;
            db: any;
            active: boolean;
        };
        clamdscan: {
            socket: boolean;
            host: boolean;
            port: boolean;
            timeout: number;
            localFallback: boolean;
            path: string;
            configFile: any;
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
        scanLog: any;
        debugMode: boolean;
        fileList: any;
        scanRecursively: boolean;
        clamscan: {
            path: string;
            scanArchives: boolean;
            db: any;
            active: boolean;
        };
        clamdscan: {
            socket: boolean;
            host: boolean;
            port: boolean;
            timeout: number;
            localFallback: boolean;
            path: string;
            configFile: any;
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
        scanLog?: string;
        debugMode?: boolean;
        fileList?: string;
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
            configFile?: string;
            multiscan?: boolean;
            reloadDb?: boolean;
            active?: boolean;
            bypassRest?: boolean;
        };
        preference?: string | object;
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

    scanFile(file: string,  cb?: () => void): Promise<{
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
        is_infected: string;
        viruses: any[];
    };
}

interface NodeClamFileError {
    is_infected: string;
    viruses: any[];
}

interface Options {
    removeInfected?: boolean; // If true, removes infected files
    quarantineInfected?: boolean | string; // False: Don't quarantine, Path: Moves files to this place.
    scanLog?: string; // Path to a writeable log file to write scan results into
    debug_mode?: boolean; // Whether to log info/debug/error msg to the console
    fileList?: string; // path to file containing list of files to scan (for scanFiles method)
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
    preference?: any; // If clamdscan is found and active, it will be used by default
}

export = NodeClam;
