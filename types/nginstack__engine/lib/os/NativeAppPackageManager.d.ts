export = NativeAppPackageManager;
declare function NativeAppPackageManager(key: number, path: string): void;
declare class NativeAppPackageManager {
    constructor(key: number, path: string);
    private _manifestName;
    private _key;
    private _appId;
    private _manifest;
    private _localManifest;
    private _path;
    private logger_;
    private load;
    private loadDiskManifest_;
    private loadBaseManifest_;
    update(): void;
    isUpdated(): boolean;
    isInstalled(): boolean;
    private saveManifest_;
    private downloadBundle_;
    private extractBundle_;
    private verifyBundle_;
    getManifest(): any;
}
