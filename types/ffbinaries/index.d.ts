// Type definitions for ffbinaries 1.1
// Project: https://ffbinaries.com
// Definitions by: Andrew Branch <https://github.com/andrewbranch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Component = "ffmpeg" | "ffprobe" | "ffserver" | "ffplay";
export interface LocateResultFound {
    found: true;
    isExecutable: boolean;
    path: string;
    version: string;
}
export interface LocateResultNotFound {
    found: false;
    isExecutable: false;
    path: null;
    version: null;
}
export type LocateResult = LocateResultFound | LocateResultNotFound;
export type Platform = "osx-64" | "linux-32" | "linux-64" | "linux-armel" | "linux-armhf" | "windows-32" | "windows-64";

export interface DownloadOptions {
    /**
     * The path where the binaries will be downloaded to. If not provided it will default to `.`.
     */
    destination?: string;
    /**
     * Defaults to detecting the current platform.
     */
    platform?: Platform;
    /**
     * Version of ffmpeg to download.
     */
    version?: string;
    /**
     * Ignore check for existing binaries in the destination and overwrite them if necessary.
     */
    force?: boolean;
    /**
     * Suppress verbose logs.
     */
    quiet?: boolean;
    /**
     * A progress-update function, triggered with percentage as argument at an interval until download is completed.
     */
    tickerFn?: (tickData: { filename: string; progress: number }) => void;
    /**
     * Frequency at which the ticker progress updates are issued (in ms; defaults to `1000`).
     */
    tickerInterval?: number;
}

export interface DownloadResultFileExists {
    code: "FILE_EXISTS";
    filename: string;
    path: string;
    status: string;
}

export interface DownloadResultFromCache {
    code: "DONE_FROM_CACHE";
    filename: string;
    path: string;
    status: string;
}

export interface DownloadResultClean {
    code: "DONE_CLEAN";
    filename: string;
    path: string;
    size: string;
    status: string;
}

export type DownloadResult = DownloadResultFileExists | DownloadResultFromCache | DownloadResultClean;

export interface VersionData {
    version: string;
    permalink: string;
    bin: {
        [K in Platform]: {
            ffmpeg: string;
            ffprobe: string;
            ffplay?: string;
            ffserver?: string;
        };
    };
}

export interface LocateBinariesOptions {
    /** Locations to check first */
    paths?: string[];
    /** Set executable flag on the file if it's missing */
    ensureExecutable?: boolean;
}

/**
 * Downloads and extracts the requested binaries.
 */
export function downloadBinaries(callback: (error: string | null, results: DownloadResult[]) => void): void;
export function downloadBinaries(
    components: Component | Component[],
    callback: (error: string | null, results: DownloadResult[]) => void,
): void;
export function downloadBinaries(
    components: Component | Component[],
    opts: DownloadOptions,
    callback: (error: string | null, results: DownloadResult[]) => void,
): void;
/**
 * Fetches the full data set without downloading any binaries.
 */
export function getVersionData(
    version: string | null | undefined,
    callback: (error: string | null, data: VersionData) => void,
): void;
/**
 * Fetches the list of available versions from the API.
 */
export function listVersions(callback: (error: string | null, versions: string[]) => void): void;
/**
 * Returns the list of available platforms.
 */
export function listPlatforms(): Platform[];
/**
 * Returns the platform code of the machine as detected by the module.
 */
export function detectPlatform(): Platform;
/**
 * Resolves input to a platform code (matches aliases).
 */
export function resolvePlatform(input: string): Platform | null;
/**
 * Resolves a filename of a binary for a given platform (appends ".exe" in Windows).
 */
export function getBinaryFilename(component: Component, platform: Platform): string;
/**
 * Looks for binaries already existing in the system. Returns object with located binaries, their paths and versions.
 */
export function locateBinariesSync<T extends readonly Component[]>(
    components: T,
    opts?: LocateBinariesOptions,
): { [K in T[number]]: LocateResult };
/**
 * Purges local cache.
 */
export function clearCache(): void;
