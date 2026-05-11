interface Cordova {
    getAppVersion: {
        getAppName: () => Promise<string>;
        getPackageName: () => Promise<string>;
        getVersionCode: () => Promise<string>;
        getVersionNumber: () => Promise<string>;
    };
}
