// Type definitions for ng-device-detector v1.1.7
// Project: https://github.com/srfrnk/ng-device-detector
// Definitions by: Bernhard Keprt <https://github.com/goosefraba>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module ng.deviceDetector {

    interface IDeviceInfo {
        raw : IRawDeviceInfo;
        os : string;
        browser : string;
        device : string;
        os_version : string;
        browser_version : string;
    }

    interface IRawDeviceInfo {
        userAgent : string;
        os: IOperatingSystemFlags;
        browser : IBrowserFlags;
        device : IDeviceFlags;
        os_version: IOSVersionFlags;
    }

    interface IOperatingSystemFlags {
        windows: boolean;
        mac: boolean;
        ios: boolean;
        android: boolean;
        linux: boolean;
        unix: boolean;
        "firefox-os": boolean;
        "chrome-os": boolean;
        "windows-phone": boolean;
        ps4: boolean;
        vita: boolean;
        unknown: boolean;
    }

    interface IBrowserFlags {
        chrome: boolean;
        firefox: boolean;
        safari: boolean;
        opera: boolean;
        ie: boolean;
        "ms-edge": boolean;
        ps4: boolean;
        vita: boolean;
        unknown: boolean;
    }

    interface IDeviceFlags {
        android: boolean;
        ipad: boolean;
        iphone: boolean;
        ipod: boolean;
        blackberry: boolean;
        "firefox-os": boolean;
        "chrome-book": boolean;
        "windows-phone": boolean;
        ps4: boolean;
        vita: boolean;
        unknown: boolean;
    }

    interface IOSVersionFlags {
        "windows-3-11": boolean;
        "windows-95": boolean;
        "windows-me": boolean;
        "windows-98": boolean;
        "windows-ce": boolean;
        "windows-2000": boolean;
        "windows-xp": boolean;
        "windows-server-2003": boolean;
        "windows-vista": boolean;
        "windows-7": boolean;
        "windows-8-1": boolean;
        "windows-8": boolean;
        "windows-10": boolean;
        "windows-phone-7-5": boolean;
        "windows-phone-10": boolean;
        "windows-nt-4-0": boolean;
        unknown: boolean;
    }
}
