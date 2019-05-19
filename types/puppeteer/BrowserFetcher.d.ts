/**
 * Definition from BrowserFetcher.js
 * https://github.com/GoogleChrome/puppeteer/blob/master/lib/BrowserFetcher.js
 */

export type Platform = "mac" | "win32" | "win64" | "linux";

/** BrowserFetcher can download and manage different versions of Chromium. */
export interface BrowserFetcher {
    /** The method initiates a HEAD request to check if the revision is available. */
    canDownload(revision: string): Promise<boolean>;
    /** The method initiates a GET request to download the revision from the host. */
    download(revision: string, progressCallback?: (downloadBytes: number, totalBytes: number) => void): Promise<RevisionInfo>;
    localRevisions(): Promise<string[]>;
    platform(): Platform;
    remove(revision: string): Promise<void>;
    revisionInfo(revision: string): RevisionInfo;
}

export interface RevisionInfo {
    /** The revision the info was created from */
    revision: string;
    /** Path to the extracted revision folder */
    folderPath: string;
    /** Path to the revision executable */
    executablePath: string;
    /** URL this revision can be downloaded from */
    url: string;
    /** whether the revision is locally available on disk */
    local: boolean;
}

export interface FetcherOptions {
    /** A download host to be used. Defaults to `https://storage.googleapis.com`. */
    host?: string;
    /** A path for the downloads folder. Defaults to `<root>/.local-chromium`, where `<root>` is puppeteer's package root. */
    path?: string;
    /** Possible values are: `mac`, `win32`, `win64`, `linux`. Defaults to the current platform. */
    platform?: Platform;
}
