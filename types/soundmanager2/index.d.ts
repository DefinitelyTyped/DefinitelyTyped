// Type definitions for soundmanager2 V2.97a.20170601
// Project: https://github.com/scottschiller/SoundManager2
// Definitions by: Elton Lee <https://github.com/elton2048>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace soundmanager2;

declare namespace SoundManager2 {
    type ScriptAccess = 'always' | 'sameDomain';
}

export interface DefaultOptions {
    autoLoad: boolean;
    autoPlay: boolean;
    from: number | null;
    loops: number;
    onid3(): void | null;
    onerror(): void | null;
    onload(): void | null;
    whileloading(): void | null;
    onplay(): void | null;
    onpause(): void | null;
    onresume(): void | null;
    whileplaying(): void | null;
    onposition(): void | null;
    onstop(): void | null;
    onfinish(): void | null;
    multiShot: boolean;
    multiShotEvents: boolean;
    position: number | null;
    pan: number;
    playbackRate: number;
    stream: boolean;
    to: number | null;
    type: string | null;
    usePolicyFile: boolean;
    volume: number;
}

export interface Flash9Options {
    onfailure(): void | null;
    isMovieStar: true | null;
    usePeakData: boolean;
    useWaveformData: boolean;
    useEQData: boolean;
    onbufferchange(): void | null;
    ondataerror(): void | null;
}

export interface MovieStartOptions {
    bufferTime: number;
    serverURL: string | null;
    onconnect(): void | null;
    duration: number | null;
}

export interface audioFormats {
    mp3: {
        type: ['audio/mpeg; codecs="mp3"', 'audio/mpeg', 'audio/mp3', 'audio/MPA', 'audio/mpa-robust'];
        required: true;
    },

    mp4: {
        related: ['aac', 'm4a', 'm4b'], // additional formats under the MP4 container
        type: ['audio/mp4; codecs="mp4a.40.2"', 'audio/aac', 'audio/x-m4a', 'audio/MP4A-LATM', 'audio/mpeg4-generic'];
        required: false;
    },

    ogg: {
        type: ['audio/ogg; codecs=vorbis'];
        required: false;
    },

    opus: {
        type: ['audio/ogg; codecs=opus', 'audio/opus'];
        required: false;
    },

    wav: {
        type: ['audio/wav; codecs="1"', 'audio/wav', 'audio/wave', 'audio/x-wav'];
        required: false;
    },

    flac: {
        type: ['audio/flac'];
        required: false;
    }
}

export interface PeekData {
    left: number;
    right: number;
}

export class SoundManager {
    /**
     * The directory where SM2 can find the flash movies (soundmanager2.swf, soundmanager2_flash9.swf and debug versions etc.) Note that SM2 will append the correct SWF file name, depending on flashVersion and debugMode settings.
     * @type {string}
     */
    url: string;
    allowScriptAccess: SoundManager2.ScriptAccess;
    bgColor: string;
    consoleOnly: boolean;
    debugMode: boolean;
    debugFlash: boolean;
    flashVersion: number;
    // flashPollingInterval: number;
    forceUseGlobalHTML5Audio: boolean;
    // html5PollingInterval: number;
    // html5Test: string;
    flashLoadTimeout: number;
    idPrefix: string;
    ignoreMobileRestrications: boolean;
    noSWFCache: boolean;
    preferFlash: boolean;
    useConsole: boolean;
    useFlashBlock: boolean;
    useHighPerformance: boolean;
    useHTML5Audio: boolean;
    waitForWindowLoad: false;
    wmode: string;

    canPlayLink(domElement: HTMLElement): boolean;
    canPlayMIME(MIMEtype: string): boolean;
    canPlayURL(mediaURL: string): boolean;
    // clearOnPosition(): void;
    createSound(properties: DefaultOptions): SMSound;

    getSoundById(id: string): SMSound;

    setup(options: object): void;

}

export class SMSound {
    // Parameters, instance options.
    id: string;
    pan: number;
    peekData: PeekData;
    position: number;
    url: string;
    volume: number;

    // Dynamic Properties
    buffered: object[];
    bytesLoaded: number | null;
    bytesTotal: number | null;
    isBuffering: boolean;
    connected: boolean;
    duration: number | null;
    durationEstimate: number | null;
    isHTML5: boolean;
    loaded: boolean;
    muted: boolean;
    paused: boolean;
    playState: number;
    readyState: number;

    // Events
    onbufferchange(): void;
    onconnect(): void;
    ondataerror(): void;
    onerror(): void;
    onfinish(): void;
    onload(): void;
    onpause(): void;
    onplay(): void;
    onresume(): void;
    onsuspend(): void;
    onstop(): void;
    onid3(): void;
    whileloading(): void;
    whileplaying(): void;

    // Methods
    destruct(): void;
    load(options: void): SMSound;
    // clearOnPosition(): void;
    onPosition(mescOffest: number, callback: void, []): SMSound;
    mute(): SMSound;
    pause(): SMSound;
    play(options?: object): SMSound;
    resume(): SMSound
    setPan(volume: number): SMSound;
    setPosition(msecOffset: number): SMSound;
    setVolume(volume: number): SMSound;
    stop(): SMSound;
    toggleMute(): SMSound;
    togglePause(): SMSound;
    unload(): SMSound;
    unmute(): SMSound;
}

// export const soundmanager: SoundManager;

export const soundManager: SoundManager;

export default soundManager;
