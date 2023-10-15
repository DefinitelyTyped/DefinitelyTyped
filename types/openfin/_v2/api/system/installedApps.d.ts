export interface InstalledApps {
    [key: string]: InstallationInfo;
}
export interface InstallationInfo {
    cachedManifest: any;
}
