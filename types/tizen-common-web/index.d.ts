// Type definitions for @tizentv/tizen-common-web 1.0
// Project: https://docs.tizen.org/application/web/api/5.5/device_api/tv/index.html
// Definitions by: SejoongDeJang <https://github.com/SejoongDeJang>
//                 Dongkeun Nam <https://github.com/capscrom>
//                 Woosik Park <https://github.com/pwsses>
//                 Dayoung Kim <https://github.com/darangkim>
//                 Hyojin Kim <https://github.com/prozanne>
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
        WebAPIException: Tizen.WebAPIException;
        WebAPIError: Tizen.WebAPIException;
    }
}

interface Tizen {
    ApplicationControl: Tizen.ApplicationControlConstructor;
    ApplicationControlData: Tizen.ApplicationControlDataConstructor;
    AttributeFilter: Tizen.AttributeFilterConstructor;
    AttributeRangeFilter: Tizen.AttributeRangeFilterConstructor;
    CompositeFilter: Tizen.CompositeFilterConstructor;
    SortMode: Tizen.SortModeConstructor;
    SimpleCoordinates: Tizen.SimpleCoordinatesConstructor;
    Bundle: Tizen.BundleConstructor;
    filesystem: Tizen.FilesystemManager;
    application: Tizen.ApplicationManager;
    download: Tizen.DownloadManager;
    systeminfo: Tizen.SystemInfoManager;
    websetting: Tizen.WebSettingManager;
    tvaudiocontrol: Tizen.TVAudioControlManager;
    tvdisplaycontrol: Tizen.TVDisplayControlManager;
    tvinfo: Tizen.TVInfoManager;
    tvinputdevice: Tizen.TVInputDeviceManager;
    tvwindow: Tizen.TVWindowManager;
    DownloadRequest: Tizen.DownloadRequestConstructor;
    package: Tizen.PackageManager;
}

export = tizen;
export as namespace tizen;
