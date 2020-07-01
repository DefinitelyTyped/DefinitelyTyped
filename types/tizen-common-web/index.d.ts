// Type definitions for tizen-sdk 0.1,
// Project: https://developer.samsung.com/tv/ (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: 장세중/S/W Platform Lab(VD)/Engineer/삼성전자 <https://github.com/SejoongDeJang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./lib/filesystem.d.ts" />
/// <reference path="./lib/application.d.ts" />
/// <reference path="./lib/download.d.ts" />
/// <reference path="./lib/systeminfo.d.ts" />
/// <reference path="./lib/websetting.d.ts" />
/// <reference path="./lib/tvaudiocontrol.d.ts" />
/// <reference path="./lib/tvdisplaycontrol.d.ts" />
/// <reference path="./lib/tvinfo.d.ts" />
/// <reference path="./lib/tvinputdevice.d.ts" />
/// <reference path="./lib/tvwindow.d.ts" />
/// <reference path="./lib/tizen.d.ts" />
/// <reference path="./lib/package.d.ts" />

declare const tizen: Tizen;

declare global {
    const tizen: Tizen;
    interface Window {
        tizen: Tizen;
        WebAPIException: WebAPIException;
        WebAPIError: WebAPIException;
    }
}

interface Tizen {
    ApplicationControl: ApplicationControlConstructor;
    ApplicationControlData: ApplicationControlDataConstructor;
    AttributeFilter: AttributeFilterConstructor;
    AttributeRangeFilter: AttributeRangeFilterConstructor;
    CompositeFilter: CompositeFilterConstructor;
    SortMode: SortModeConstructor;
    SimpleCoordinates: SimpleCoordinatesConstructor;
    Bundle: BundleConstructor;
    filesystem: FilesystemManager;
    application: ApplicationManager;
    download: DownloadManager;
    systeminfo: SystemInfoManager;
    websetting: WebSettingManager;
    tvaudiocontrol: TVAudioControlManager;
    tvdisplaycontrol: TVDisplayControlManager;
    tvinfo: TVInfoManager;
    tvinputdevice: TVInputDeviceManager;
    tvwindow: TVWindowManager;
    DownloadRequest: DownloadRequestConstructor;
    package: PackageManager;
}

export = tizen;
export as namespace tizen;
