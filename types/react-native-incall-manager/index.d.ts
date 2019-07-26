// Type definitions for react-native-incall-manager 3.2.4
// Project: https://github.com/zxcpoiu/react-native-incall-manager#readme
// Definitions by: Carlos Quiroga <https://github.com/KarlosQ>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface StartSetup {
    media?: string;
    auto?: boolean;
    ringback?: string;
}

interface StopSetup {
    busytone?: string;
}

export default class InCallManager {
    public static start(setup?: StartSetup): void;

    public static stop(setup?: StopSetup): void;

    public static turnScreenOff(): void;

    public static turnScreenOn(): void;

    public static getIsWiredHeadsetPluggedIn(): Promise<any>;

    public static setFlashOn(enable?: boolean, brightness?: number): number;

    public static setKeepScreenOn(enable?: boolean): void;

    public static setSpeakerphoneOn(enable?: boolean): void;

    public static setForceSpeakerphoneOn(_flag?: boolean): void;

    public static setMicrophoneMute(enable?: boolean): void;

    public static startRingtone(
        ringtone?: string,
        vibrate_pattern?: Array<any>,
        ios_category?: string,
        seconds?: number
    ): void;

    public static stopRingtone(): void;

    public static startRingback(ringback?: string): void;

    public static stopRingback(): void;

    public static checkRecordPermission(): Promise<string>;

    public static requestRecordPermission(): Promise<string>;

    public static checkCameraPermission(): Promise<string>;

    public static requestCameraPermission(): Promise<string>;

    public static pokeScreen(_timeout?: number): void;

    public static getAudioUri(audioType: string, fileType: string): any;

    public static chooseAudioRoute(route: any): any;
}
