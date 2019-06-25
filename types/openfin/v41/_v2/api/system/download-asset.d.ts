export interface AppAssetInfo {
    src: string;
    alias: string;
    version: string;
    target?: string;
    args?: string;
    mandatory?: boolean;
}
export interface RuntimeDownloadOptions {
    version: string;
}
export interface AppAssetRequest {
    alias: string;
}
export interface RuntimeDownloadProgress {
    downloadedBytes: number;
    totalBytes: number;
}
