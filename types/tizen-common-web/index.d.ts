// Type definitions for tizen-common-web 1.0
// Project: https://docs.tizen.org/application/web/api/5.5/device_api/tv/index.html
// Definitions by: SejoongDeJang <https://github.com/SejoongDeJang>
//                 Dongkeun Nam <https://github.com/capscrom>
//                 Woosik Park <https://github.com/pwsses>
//                 Dayoung Kim <https://github.com/darangkim>
//                 Hyojin Kim <https://github.com/prozanne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./filesystem.d.ts" />
/// <reference path="./application.d.ts" />
/// <reference path="./download.d.ts" />
/// <reference path="./systeminfo.d.ts" />
/// <reference path="./websetting.d.ts" />
/// <reference path="./tvaudiocontrol.d.ts" />
/// <reference path="./tvdisplaycontrol.d.ts" />
/// <reference path="./tvinfo.d.ts" />
/// <reference path="./tvinputdevice.d.ts" />
/// <reference path="./tvwindow.d.ts" />
/// <reference path="./tizen.d.ts" />
/// <reference path="./package.d.ts" />
/// <reference path="./time.d.ts" />

import {
    WebAPIException,
    AttributeFilterConstructor,
    AttributeRangeFilterConstructor,
    CompositeFilterConstructor,
    SortModeConstructor,
    SimpleCoordinatesConstructor,
    BundleConstructor,
} from './tizen';
import { ApplicationControlConstructor, ApplicationControlDataConstructor, ApplicationManager } from './application';
import { FilesystemManager } from './filesystem';
import { DownloadManager, DownloadRequestConstructor } from './download';
import { SystemInfoManager } from './systeminfo';
import { WebSettingManager } from './websetting';
import { TVAudioControlManager } from './tvaudiocontrol';
import { TVDisplayControlManager } from './tvdisplaycontrol';
import { TVInputDeviceManager } from './tvinputdevice';
import { TVWindowManager } from './tvwindow';
import { PackageManager } from './package';
import { TVInfoManager } from './tvinfo';
import { TimeUtil, TZDateConstructor, TimeDurationConstructor } from './time';

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
    time: TimeUtil;
    TZDate: TZDateConstructor;
    TimeDuration: TimeDurationConstructor;
}

export = tizen;
export as namespace tizen;
