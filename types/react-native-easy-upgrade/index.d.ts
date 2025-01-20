interface Options {
    iOSAppId: string;
    iOSAppLookupUrl: string;
    downloadTitle: string;
    downloadDescription: string;
    downloadDestDirectory: string;
    downloadApkName: string;
    downloadApkEnd(path: string): any;
    shouldCheckApkHasDownloaded: boolean;
    onError(err: Error): any;
}

declare class AppUpgrade {
    constructor(options: Partial<Options>);
    readonly downloadDestPath: string;
    readonly downloadDestDirectory: string;
    readonly downloading: boolean;

    getNetworkStatus(): Promise<string>;

    getLocalVersionInfo(): {
        VERSION_NAME: string;
        VERSION_CODE: string;
    };

    checkApkHasDownloaded(path?: string): Promise<boolean>;

    /**
     * download file
     * @param fileUrl
     * @param downloadConf
     */
    downloadFile(fileUrl: string, downloadConf?: {
        tempDownloadPath: string;
        downloadTitle?: string | undefined;
        downloadDescription?: string | undefined;
        saveAsName?: string | undefined;
        allowedInRoaming?: boolean | undefined;
        allowedInMetered?: boolean | undefined;
        showInDownloads?: boolean | undefined;
        external?: boolean | undefined;
        path?: string | undefined;
    }): void;

    /**
     * update app and install
     * @param apkUrl
     */
    updateAndroidApp(apkUrl: string): Promise<void>;

    installApk(apkPath?: string): void;

    /**
     * Check the ios app version info from app store.
     */
    checkAppVersionIOS(): Promise<{
        latestVersion: string;
        localVersion: string;
        hasNewVersion: boolean;
        trackViewUrl: string;
        lookupInfo: {
            version: string;
            trackViewUrl: string;
            [key: string]: any;
        };
    }>;

    /**
     * navigate to app store download page.
     */
    navigateToAppStore(trackViewUrl?: string): void;

    startAppUpdate(apkUrl: string, appStoreUrl?: string): void;
}

export default AppUpgrade;
