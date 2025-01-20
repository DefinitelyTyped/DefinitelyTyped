export interface StartSetup {
    media?: "video" | "audio" | undefined;
    auto?: boolean | undefined;
    ringback?: string | undefined;
}

export interface StopSetup {
    busytone?: string | undefined;
}

declare class InCallManager {
    start(setup?: StartSetup): void;

    stop(setup?: StopSetup): void;

    turnScreenOff(): void;

    turnScreenOn(): void;

    getIsWiredHeadsetPluggedIn(): Promise<{ isWiredHeadsetPluggedIn: boolean }>;

    setFlashOn(enable?: boolean, brightness?: number): void;

    setKeepScreenOn(enable?: boolean): void;

    setSpeakerphoneOn(enable?: boolean): void;

    setForceSpeakerphoneOn(_flag?: boolean): void;

    setMicrophoneMute(enable?: boolean): void;

    startRingtone(
        ringtone?: string,
        vibrate_pattern?: number[],
        ios_category?: "playback" | "default",
        seconds?: number,
    ): void;

    stopRingtone(): void;

    startProximitySensor(): void;

    stopProximitySensor(): void;

    startRingback(ringback?: string): void;

    stopRingback(): void;

    pokeScreen(_timeout?: number): void;

    getAudioUri(
        audioType: "ringtone" | "ringback" | "busytone",
        fileType: string,
    ): Promise<string | null>;

    chooseAudioRoute(
        route: "EARPIECE" | "SPEAKER_PHONE" | "WIRED_HEADSET" | "BLUETOOTH",
    ): Promise<{ availableAudioDeviceList: string; selectedAudioDevice: string }>;

    requestAudioFocus(): Promise<string | undefined>;

    abandonAudioFocus(): Promise<string | undefined>;
}

declare const _default: InCallManager;

export default _default;
