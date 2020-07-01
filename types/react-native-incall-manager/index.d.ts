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

declare class InCallManager {
    start(setup?: StartSetup): void;

    stop(setup?: StopSetup): void;

    turnScreenOff(): void;

    turnScreenOn(): void;

    getIsWiredHeadsetPluggedIn(): Promise<any>;

    setFlashOn(enable?: boolean, brightness?: number): number;

    setKeepScreenOn(enable?: boolean): void;

    setSpeakerphoneOn(enable?: boolean): void;

    setForceSpeakerphoneOn(_flag?: boolean): void;

    setMicrophoneMute(enable?: boolean): void;

    startRingtone(
        ringtone?: string,
        vibrate_pattern?: any[],
        ios_category?: string,
        seconds?: number
    ): void;

    stopRingtone(): void;

    startRingback(ringback?: string): void;

    stopRingback(): void;

    checkRecordPermission(): Promise<string>;

    requestRecordPermission(): Promise<string>;

    checkCameraPermission(): Promise<string>;

    requestCameraPermission(): Promise<string>;

    pokeScreen(_timeout?: number): void;

    getAudioUri(audioType: string, fileType: string): any;

    chooseAudioRoute(route: any): any;
}

declare const _default: InCallManager;

export default _default;
