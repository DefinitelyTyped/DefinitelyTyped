// Type definitions for react-native-incall-manager 3.2
// Project: https://github.com/zxcpoiu/react-native-incall-manager#readme
// Definitions by: Carlos Quiroga <https://github.com/KarlosQ>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export interface StartSetup {
    media?: string;
    auto?: boolean;
    ringback?: string;
}

export interface StopSetup {
    busytone?: string;
}

export default class InCallManager {
    static start(setup?: StartSetup): void;

    static stop(setup?: StopSetup): void;

    static turnScreenOff(): void;

    static turnScreenOn(): void;

    static getIsWiredHeadsetPluggedIn(): Promise<any>;

    static setFlashOn(enable?: boolean, brightness?: number): number;

    static setKeepScreenOn(enable?: boolean): void;

    static setSpeakerphoneOn(enable?: boolean): void;

    static setForceSpeakerphoneOn(_flag?: boolean): void;

    static setMicrophoneMute(enable?: boolean): void;

    static startRingtone(
        ringtone?: string,
        vibrate_pattern?: any[],
        ios_category?: string,
        seconds?: number
    ): void;

    static stopRingtone(): void;

    static startRingback(ringback?: string): void;

    static stopRingback(): void;

    static checkRecordPermission(): Promise<string>;

    static requestRecordPermission(): Promise<string>;

    static checkCameraPermission(): Promise<string>;

    static requestCameraPermission(): Promise<string>;

    pokeScreen(_timeout?: number): void;

    static getAudioUri(audioType: string, fileType: string): any;

    chooseAudioRoute(route: any): any;
}
