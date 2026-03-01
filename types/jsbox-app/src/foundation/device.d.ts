// JSBox Device API TypeScript Declaration

declare namespace DeviceTypes {
    interface DeviceInfo {
        model: string;
        language: string;
        version: string;
        name: string;
        screen: {
            width: number;
            height: number;
            scale: number;
            orientation: number;
        };
        battery: {
            state: number; // 0: unknown, 1: uncharging, 2: charging, 3: full
            level: number;
        };
    }

    interface WifiInfo {
        SSIDDATA: any;
        BSSID: string;
        SSID: string;
    }

    interface SpaceInfo {
        disk: {
            free: {
                bytes: number;
                string: string;
            };
            total: {
                bytes: number;
                string: string;
            };
        };
        memory: {
            free: {
                bytes: number;
                string: string;
            };
            total: {
                bytes: number;
                string: string;
            };
        };
    }
}

interface JBDevice {
    info: DeviceTypes.DeviceInfo;
    ssid: DeviceTypes.WifiInfo;
    networkType: number;
    space: DeviceTypes.SpaceInfo;
    taptic(level: number): void;
    wlanAddress: string;
    isDarkMode: boolean;
    isIphoneX: boolean;
    isIphonePlus: boolean;
    isIpad: boolean;
    isIpadPro: boolean;
    hasTouchID: boolean;
    hasFaceID: boolean;
    isJailbroken: boolean;
    isVoiceOverOn: boolean;
}

declare const $device: JBDevice;
