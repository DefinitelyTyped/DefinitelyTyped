export = NativeAppPackageManager;
declare function NativeAppPackageManager(key: number, path: string): void;
declare class NativeAppPackageManager {
    constructor(key: number, path: string);
    _manifestName: string;
    _key: number;
    _appId: string;
    _manifest: any;
    _localManifest: any;
    _path: string;
    logger_: Logger;
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
import Logger = require('../log/Logger.js');
