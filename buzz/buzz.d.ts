// Type definitions for buzz 1.1.0
// Project: http://buzz.jaysalvat.com/
// Definitions by: Bert Verhelst <http://bert.co.nr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface buzz {
    all(): buzz.group;
    isSupported(): boolean;
    isOGGSupported(): boolean;
    isWAVSupported(): boolean;
    isMP3Supported(): boolean;
    isAACSupported(): boolean;
    toTimer(seconds: number, long: number): string;
    fromTimer(timer: string): number;
    toPercent(value: any, total: any, round: number): number;
    fromPercent(value: any, total: any, round: number): number;

    defaults: BuzzDefaults;

    sounds: Array<buzz.sound>;   
}

declare module buzz {

    interface sound {
        constructor(sources: string, settings?: any);
        constructor(sources: string[], settings?: any);

        load(): sound;
        play(): sound;
        pause(): sound;
        togglePlay(): sound;
        isPaused(): boolean;
        stop(): sound;
        isEnded(): boolean;
        loop(): sound;
        unloop(): sound;
        mute(): sound;
        unmute(): sound;
        toggleMute(): sound;
        isMuted(): boolean;
        setVolume(volume: number): sound;
        getVolume(): number;
        increaseVolume(volume?: number): sound;
        decreaseVolume(volume?: number): sound;
        fadeIn(duration?: number, callback?: () => void): sound;
        fadeOut(duration?: number, callback?: () => void): sound;
        fadeTo(volume: number, duration?: number, callback?: () => void): sound;
        fadeWith(sound: sound, duration?: number): sound;
        bind(event: string, callback?): sound;
        bindOnce(event: string, callback?): sound;
        unbind(event: string): sound;
        trigger(event: string): sound;
        setTime(seconds: number): sound;
        getTime(): number;
        setPercent(percent: number): sound;
        getPercent(): number;
        getDuration(): number;
        SetSpeed(speed: number): sound;
        GetSpeed(): number;
        set(property: string, value: any): sound;
        get(): any;
        getPlayed(): any[];
        getBuffered(): any[];
        getSeekable(): any[];
        getErrorCode(): number;
        getErrorMessage(): string;
        getStateCode(): number;
        getStateMessage(): string;
        getNetworkStateCode(): number;
        getNetworkStateMessage(): string;
    }

    export class group {

        constructor(sounds: Array<sound>);
        all(): Array<sound>;
        load(): sound;
        play(): sound;
        pause(): sound;
        togglePlay(): sound;
        stop(): sound;
        loop(): sound;
        unloop(): sound;
        mute(): sound;
        unmute(): sound;
        toggleMute(): sound;
        setVolume(volume: number): sound;
        increaseVolume(volume?: number): sound;
        decreaseVolume(volume?: number): sound;
        fadeIn(duration?: number, callback?: () => void): sound;
        fadeOut(duration?: number, callback?: () => void): sound;
        fadeTo(volume: number, duration?: number, callback?: () => void): sound;
        bind(event: string, callback?): sound;
        bindOnce(event: string, callback?): sound;
        unbind(event: string): sound;
        trigger(event: string): sound;
        setTime(seconds: number): sound;
        setPercent(percent: number): sound;
        SetSpeed(speed: number): sound;
        set(property: string, value: any): sound;
    }
}

interface BuzzDefaults {
    // Preload the sound
    // auto, metadata, none
    preload: string;
    // Play the sound when ready
    // bool
    autoplay: boolean;
    // Loop the sound
    // bool
    loop: boolean;
    // value to display when a time convertion is impossible
    placeholder: string;
    // Duration of a fading effect
    // milliseconds
    duration: number;
    // Audio formats of your files
    formats: string[];
}
