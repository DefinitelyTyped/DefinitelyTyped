declare var soundManager: soundmanager.SoundManager;

declare namespace soundmanager {
    type ScriptAccess = "always" | "sameDomain";

    interface DefaultOptions {
        autoLoad?: boolean | undefined;
        autoPlay?: boolean | undefined;
        from?: number | null | undefined;
        loops?: number | undefined;
        onid3?: (() => void) | null | undefined;
        onerror?: (() => void) | null | undefined;
        onload?: (() => void) | null | undefined;
        whileloading?: (() => void) | null | undefined;
        onplay?: (() => void) | null | undefined;
        onpause?: (() => void) | null | undefined;
        onresume?: (() => void) | null | undefined;
        whileplaying?: (() => void) | null | undefined;
        onposition?: (() => void) | null | undefined;
        onstop?: (() => void) | null | undefined;
        onfinish?: (() => void) | null | undefined;
        multiShot?: boolean | undefined;
        multiShotEvents?: boolean | undefined;
        position?: number | null | undefined;
        pan?: number | undefined;
        playbackRate?: number | undefined;
        stream?: boolean | undefined;
        to?: number | null | undefined;
        type?: string | null | undefined;
        usePolicyFile?: boolean | undefined;
        volume?: number | undefined;
    }

    interface Flash9Options {
        onfailure?: (() => void) | null | undefined;
        isMovieStar?: true | null | undefined;
        usePeakData?: boolean | undefined;
        useWaveformData?: boolean | undefined;
        useEQData?: boolean | undefined;
        onbufferchange?: (() => void) | null | undefined;
        ondataerror?: (() => void) | null | undefined;
    }

    interface MovieStarOptions {
        bufferTime?: number | undefined;
        serverURL?: string | null | undefined;
        onconnect?: (() => void) | null | undefined;
        duration?: number | null | undefined;
    }

    interface SoundManagerAudioFormat {
        type: string[];
        required: boolean;
        related?: string[] | undefined;
    }

    interface SoundManagerProps {
        /**
         * The directory where SM2 can find the flash movies (soundmanager2.swf,
         * soundmanager2_flash9.swf and debug versions etc.) Note that SM2 will
         * append the correct SWF file name, depending on flashVersion and
         * debugMode settings.
         */
        url?: string | undefined;

        allowScriptAccess?: ScriptAccess | undefined;
        altURL?: string | undefined;
        bgColor?: string | undefined;
        consoleOnly?: boolean | undefined;
        debugMode?: boolean | undefined;
        debugFlash?: boolean | undefined;
        /**
         * Some properties are dynamic, determined at initialisation or later
         * during runtime, and should be treated as read-only.
         */
        readonly features?: object | undefined;

        flashVersion?: number | undefined;
        // flashPollingInterval: number;
        forceUseGlobalHTML5Audio?: boolean | undefined;
        readonly html5Only?: boolean | undefined;
        // html5PollingInterval: number;
        // html5Test: string;
        flashLoadTimeout?: number | undefined;
        idPrefix?: string | undefined;
        ignoreMobileRestrications?: boolean | undefined;
        noSWFCache?: boolean | undefined;
        preferFlash?: boolean | undefined;
        useAltURL?: boolean | undefined;
        useConsole?: boolean | undefined;
        useFlashBlock?: boolean | undefined;
        useHighPerformance?: boolean | undefined;
        useHTML5Audio?: boolean | undefined;
        waitForWindowLoad?: false | undefined;
        wmode?: string | null | undefined;

        defaultOptions?: DefaultOptions | undefined;
        flash9Options?: Flash9Options | undefined;
        movieStarOptions?: MovieStarOptions | undefined;

        onready?(): void;
        ontimeout?(): void;
    }

    interface SoundManager extends SoundManagerProps {
        canPlayLink(domElement: HTMLElement): boolean;
        canPlayMIME(MIMEtype: string): boolean;
        canPlayURL(mediaURL: string): boolean;
        clearOnPosition(id: string, msecOffset: number, callback?: () => void): SMSound;
        /**
         * Creates a sound object, supporting an arbitrary number of optional arguments. Returns a SMSound object instance. At minimum, a url parameter is required.
         */
        createSound(properties: SoundProperties): SMSound;
        destroySound(id: string): void;
        getMemoryUse(): number;
        getSoundById(id: string): SMSound;
        load(id: string, options?: object): SMSound;
        mute(id?: string): SMSound;
        ok(): boolean;
        onPosition(id: string, msecOffset: number, callback: (eventPosition: any) => void): SMSound;
        pause(id: string): SMSound;
        pauseAll(): void;
        play(id?: string, options?: DefaultOptions | Flash9Options): SMSound;
        reboot(): void;
        reset(): void;
        resume(id: string): SMSound;
        resumeAll(): void;
        setup(options: SoundManagerProps): SoundManager;
        setPan(id: string, volume: number): SMSound;
        setPlaybackRate(id: string, playbackRate: number): void;
        setPosition(id: string, msecOffset: number): SMSound;
        setVolume(id: string, volume: number): SMSound;
        /**
         * Sets the volume of all sound objects. Accepted values: 0-100. Affects volume property.
         * @param volume Volume of all sound objects. Accepted values: 0 - 100
         */
        setVolume(volume: number): void;
        stop(id: string): SMSound;
        stopAll(): void;
        toggleMute(id: string): SMSound;
        togglePause(id: string): SMSound;
        unload(id: string): SMSound;
        unmute(id?: string): SMSound;
        audioFormats?: { [audioFormat: string]: SoundManagerAudioFormat } | undefined;
    }

    class SMSound {
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
        onbufferchange?: (() => void) | undefined;
        onconnect?: (() => void) | undefined;
        ondataerror?: (() => void) | undefined;
        onerror?: (() => void) | undefined;
        onfinish?: (() => void) | undefined;
        onload?: (() => void) | undefined;
        onpause?: (() => void) | undefined;
        onplay?: (() => void) | undefined;
        onresume?: (() => void) | undefined;
        onsuspend?: (() => void) | undefined;
        onstop?: (() => void) | undefined;
        onid3?: (() => void) | undefined;
        whileloading?: (() => void) | undefined;
        whileplaying?: (() => void) | undefined;

        // Methods
        destruct(): void;
        load(options: object): SMSound;
        // clearOnPosition(): void;
        onPosition(mescOffest: number, callback: object, []): SMSound;
        mute(): SMSound;
        pause(): SMSound;
        play(id?: string, options?: DefaultOptions): SMSound;
        resume(): SMSound;
        setPan(volume: number): SMSound;
        setPosition(msecOffset: number): SMSound;
        setVolume(volume: number): SMSound;
        stop(): SMSound;
        toggleMute(): SMSound;
        togglePause(): SMSound;
        unload(): SMSound;
        unmute(): SMSound;
    }

    interface PeekData {
        left: number;
        right: number;
    }

    interface SoundProperties extends DefaultOptions {
        url: string;
        id?: string | undefined;
    }
}
