// Type definitions for soundmanager2 V2.97a.20170601
// Project: https://github.com/scottschiller/SoundManager2
// Definitions by: Elton Lee <https://github.com/elton2048>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var soundManager: soundmanager.SoundManager;

declare namespace soundmanager {
    type ScriptAccess = 'always' | 'sameDomain';

    export interface DefaultOptions {
        autoLoad?: boolean;
        autoPlay?: boolean;
        from?: number | null;
        loops?: number;
        onid3?(): void | null;
        onerror?(): void | null;
        onload?(): void | null;
        whileloading?(): void | null;
        onplay?(): void | null;
        onpause?(): void | null;
        onresume?(): void | null;
        whileplaying?(): void | null;
        onposition?(): void | null;
        onstop?(): void | null;
        onfinish?(): void | null;
        multiShot?: boolean;
        multiShotEvents?: boolean;
        position?: number | null;
        pan?: number;
        playbackRate?: number;
        stream?: boolean;
        to?: number | null;
        type?: string | null;
        usePolicyFile?: boolean;
        volume?: number;
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

    export interface MovieStarOptions {
        bufferTime: number;
        serverURL: string | null;
        onconnect(): void | null;
        duration: number | null;
    }

    interface SoundManagerProps {
        /**
         * The directory where SM2 can find the flash movies (soundmanager2.swf, soundmanager2_flash9.swf and debug versions etc.) Note that SM2 will append the correct SWF file name, depending on flashVersion and debugMode settings.
         * @type {string}
         */
        url: string;

        allowScriptAccess?: soundmanager.ScriptAccess;
        altURL?: string;
        bgColor?: string;
        consoleOnly?: boolean;
        debugMode?: boolean;
        debugFlash?: boolean;
        /**
         * Some properties are dynamic, determined at initialisation or later during runtime, and should be treated as read-only.
         */
        readonly features?: object;

        flashVersion?: number;
        // flashPollingInterval: number;
        forceUseGlobalHTML5Audio?: boolean;
        readonly html5Only?: boolean;
        // html5PollingInterval: number;
        // html5Test: string;
        flashLoadTimeout?: number;
        idPrefix?: string;
        ignoreMobileRestrications?: boolean;
        noSWFCache?: boolean;
        preferFlash?: boolean;
        useAltURL?: boolean;
        useConsole?: boolean;
        useFlashBlock?: boolean;
        useHighPerformance?: boolean;
        useHTML5Audio?: boolean;
        waitForWindowLoad?: false;
        wmode?: string | null;

        defaultOptions?: DefaultOptions;
        flash9Options?: Flash9Options;
        movieStarOptions?: MovieStarOptions;

        onready?(): void;
        ontimeout?(): void;
    }

    export interface SoundManager extends SoundManagerProps {

        canPlayLink(domElement: HTMLElement): boolean;
        canPlayMIME(MIMEtype: string): boolean;
        canPlayURL(mediaURL: string): boolean;
        // clearOnPosition(): void;
        /**
         * Creates a sound object, supporting an arbitrary number of optional arguments. Returns a SMSound object instance. At minimum, a url parameter is required.
         * @param  {SoundProperties} properties [description]
         * @return {SMSound}                    [description]
         */
        createSound(properties: SoundProperties): SMSound;

        getSoundById(id: string): SMSound;

        setup(options: SoundManagerProps): SoundManager;
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
        play(id?: string, options?: DefaultOptions): SMSound;
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

    interface SoundProperties extends DefaultOptions {
        url: string;
        id?: string;
    }
}
