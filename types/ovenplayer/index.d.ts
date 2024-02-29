interface OvenPlayer {
    debug(debug: boolean): boolean;
    generateWebrtcUrls(sources: OvenPlayerWebRTCStream | OvenPlayerWebRTCStream[]): OvenPlayerSource[];
    create(container: string, config: OvenPlayerConfig): OvenPlayerInstance;
    getPlayerByContainerId(containerId: string): OvenPlayerInstance | null;
    getPlayerByIndex(index: number): OvenPlayerInstance | null;
    getPlayerList(): OvenPlayerInstance[];
    removePlayer(player: OvenPlayerInstance): void;
}

interface OvenPlayerPlayListItem {
    title?: string;
    image?: string;
    duration?: number;
    adTagUrl?: string;
    sources: OvenPlayerSource | OvenPlayerSource[];
    tracks?: Array<Pick<OvenPlayerTrack, "file" | "kind" | "label">>;
}

type OvenPlayerPlayList = OvenPlayerPlayListItem[];

interface OvenPlayerIceServer {
    urls: string[];
    username?: string;
    credential?: string;
}

interface OvenPlayerConfig {
    aspectRatio?: string;
    title?: string;
    waterMark?: {
        /** @required */
        image?: string;
        /** @required */
        text?: string;
        font?: CSSStyleDeclaration;
        /** @default 'top-left' */
        position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
        /** @default 2.8% */
        x?: string;
        /** @default 5% */
        y?: string;
        /** @default 'auto' */
        width?: string;
        /** @default 'auto' */
        height?: string;
        /** @defaultValue 0.7 */
        opacity?: number;
    };
    /** @default false */
    autoStart?: boolean;
    /** @default true */
    autoFallback?: boolean;
    /** @default true */
    controls?: boolean;
    /** @default false */
    loop?: boolean;
    /** @default true */
    showBigPlayButton?: boolean;
    /** @default true */
    disableSeekUI?: boolean;
    /** @default false */
    showSeekControl?: boolean;
    /** @default 10 */
    seekControlInterval?: number;
    /** @default false */
    expandFullScreenUI?: boolean;
    /** @default false */
    mute?: boolean;
    /** @default true */
    timecode?: boolean;
    /** @default 1 */
    playbackRate?: number;
    /** @default [2, 1.5, 1, 0.5, 0.25] */
    playbackRates?: number[];
    /** @default false */
    currentProtocolOnly?: boolean;
    tracks?: Array<Pick<OvenPlayerTrack, "file" | "kind" | "label">>;
    /** @default 100 */
    volume?: number;
    adTagUrl?: string;
    adClient?: "googleima" | "vast";
    playlist?: OvenPlayerPlayList;
    /** @default false */
    hidePlaylistIcon?: boolean;
    /**
     * Set the timeout from the start of signaling until it is connected with OvenMediaEngine. `connectionTimeout` sets the maximum allowable time until a connection is established. `timeoutMaxRetry` sets the number of times the player will automatically retry the connection when the maximum allowed time has elapsed. When retrying a connection due to a timeout, the player does not display an error message. If the connection fails after retries for `timeoutMaxRetry`, the player throws a timeout error. If `timeoutMaxRetry` is set to 0, no timeout processing is performed.
     */
    webrtcConfig?: {
        /** @default 0 */
        timeoutMaxRetry?: number;
        /** @default 10000 */
        connectionTimeout?: number;
        /**
         * Set the play out delay hint for WebRTC playback. If the browser supports it, the initial playback will be delayed by the set value.
         */
        playoutDelayHint?: number;
        iceServers?: OvenPlayerIceServer[];
        /**
         * - `all` : All candidates will be considered.
         * - `public` : Only public IP candidates will be considered. Removed from the specification's May 13, 2016 working draft.
         * - `relay` : Only ICE candidates whose IP addresses are being relayed, such as those passed through a TURN server, will be considered.
         */
        iceTransportPolicy?: "all" | "public" | "relay";
    };
    /**
     * hls.js detailed tuning options (https://github.com/video-dev/hls.js/blob/master/docs/API.md#fine-tuning).
     */
    hlsConfig?: object;
    /**
     * parameters of Dash.js MediaPlayer (https://cdn.dashjs.org/latest/jsdoc/module-Settings.html).
     */
    dashConfig?: object;
    /** @required */
    sources?: OvenPlayerSource[];
    image?: string;
}

interface OvenPlayerWebRTCStream {
    host: string;
    application: string;
    stream: string;
    label?: string;
}

interface OvenPlayerSource {
    type: "webrtc" | "llhls" | "hls" | "lldash" | "dash" | "mp4";
    file: string;
    label?: string;
    framerate?: number;
    sectionStart?: number;
    sectionEnd?: number;
}

type OvenPlayerState =
    | "idle"
    | "complete"
    | "paused"
    | "playing"
    | "error"
    | "loading"
    | "stalled"
    | "adLoaded"
    | "adPlaying"
    | "adPaused"
    | "adComplete";

interface OvenPlayerHandler {
    /**
     * Player initialization complete. And you can use API methods.
     */
    (evnetName: "ready", callback: (eventData: OvenPlayerEvents["ready"]) => void): void;
    /**
     * It occurs when new metadata is received.
     */
    (evnetName: "metaChanged", callback: (eventData: OvenPlayerEvents["metaChanged"]) => void): void;
    /**
     * It occurs when the state of a player changes.
     */
    (evnetName: "stateChanged", callback: (eventData: OvenPlayerEvents["stateChanged"]) => void): void;
    /**
     * Fired when the player's size has been changed.
     */
    (evnetName: "resized", callback: (eventData: OvenPlayerEvents["resized"]) => void): void;
    /**
     * Fired when the playback rate has been changed
     */
    (evnetName: "playbackRateChanged", callback: (eventData: OvenPlayerEvents["playbackRateChanged"]) => void): void;
    /**
     * Fired after a seek has been requested either by scrubbing the control bar or through the API.
     */
    (evnetName: "seek", callback: (eventData: OvenPlayerEvents["seek"]) => void): void;
    /**
     * While the player is playing, this event is fired as the playback position gets updated. This may occur as frequently as 10 times per second.
     */
    (evnetName: "time", callback: (eventData: OvenPlayerEvents["time"]) => void): void;
    /**
     * Fired when the currently playing item loads additional data into its buffer.
     */
    (evnetName: "bufferChanged", callback: (eventData: OvenPlayerEvents["bufferChanged"]) => void): void;
    /**
     * Triggered when the player has gone in or out of a mute state.
     */
    (evnetName: "mute", callback: (eventData: OvenPlayerEvents["mute"]) => void): void;
    /**
     * Triggered when the player's volume is changed.
     */
    (evnetName: "volumeChanged", callback: (eventData: OvenPlayerEvents["volumeChanged"]) => void): void;
    /**
     * Fired when the active playlist is changed. It happens in response to, e.g., a user clicking an option in the playlist menu or a script calling `setCurrentPlaylist` or prev playlist has been completed.
     */
    (evnetName: "playlistChanged", callback: (eventData: OvenPlayerEvents["playlistChanged"]) => void): void;
    /**
     * Fired when the active source(protocol) is changed. It happens in response to, e.g., a user clicking an option in the source menu or a script calling `setCurrentSource`.
     */
    (evnetName: "sourceChanged", callback: (eventData: OvenPlayerEvents["sourceChanged"]) => void): void;
    /**
     * Fired when the active quality level is changed. It happens in response to, e.g., a user clicking an option in the quality menu or a script calling `setCurrentQuality`.
     */
    (evnetName: "qualityLevelChanged", callback: (eventData: OvenPlayerEvents["qualityLevelChanged"]) => void): void;
    /**
     * Fired when VTTCue is changed.
     */
    (evnetName: "cueChanged", callback: (eventData: OvenPlayerEvents["cueChanged"]) => void): void;
    /**
     * Fired when timecode mode is changed.
     */
    (
        evnetName: "timeDisplayModeChanged",
        callback: (eventData: OvenPlayerEvents["timeDisplayModeChanged"]) => void,
    ): void;
    /**
     * Fired when Ad is changed.
     */
    (evnetName: "adChanged", callback: (eventData: OvenPlayerEvents["adChanged"]) => void): void;
    /**
     * Fired when Ad is playing.
     */
    (evnetName: "adTime", callback: (eventData: OvenPlayerEvents["adTime"]) => void): void;
    /**
     * Fired when Ad is complete.
     */
    (evnetName: "adComplete", callback: (eventData: OvenPlayerEvents["adComplete"]) => void): void;
    /**
     * Fired when screen mode is changed.
     */
    (evnetName: "fullscreenChanged", callback: (eventData: OvenPlayerEvents["fullscreenChanged"]) => void): void;
    /**
     * Triggered when the player is clicked.
     * If ad clicked, this returns {type : "adclick"}.
     */
    (evnetName: "clicked", callback: (eventData: OvenPlayerEvents["clicked"]) => void): void;
    /**
     * Fired when the all playlist is complete.
     */
    (evnetName: "allPlaylistEnded", callback: (eventData: OvenPlayerEvents["allPlaylistEnded"]) => void): void;
    /**
     * Triggered when HLS object is initialized and ready to use.
     */
    (evnetName: "hlsPrepared", callback: (eventData: OvenPlayerEvents["hlsPrepared"]) => void): void;
    /**
     * Triggered after HLS object is destroyed.
     */
    (evnetName: "hlsDestroyed", callback: (eventData: OvenPlayerEvents["hlsDestroyed"]) => void): void;
    /**
     * Triggered when DASH object is initialized and ready to use.
     */
    (evnetName: "dashPrepared", callback: (eventData: OvenPlayerEvents["dashPrepared"]) => void): void;
    /**
     * Triggered after DASH object is destroyed.
     */
    (evnetName: "dashDestroyed", callback: (eventData: OvenPlayerEvents["dashDestroyed"]) => void): void;
    /**
     * Player is destroyed.
     */
    (evnetName: "destroy", callback: (eventData: OvenPlayerEvents["destroy"]) => void): void;
    /**
     * Error occurred.
     * @internal
     */
    (evnetName: "error", callback: (eventData: OvenPlayerEvents["error"]) => void): void;
}

interface OvenPlayerEvents {
    ready: undefined;
    metaChanged: {
        /** Current media's duration (In seconds) */
        duration: number;
        /** Does OME operate in P2P mode? */
        isP2P: boolean;
        /** current source type */
        type: string;
    };
    stateChanged: {
        prevstate: OvenPlayerState;
        newstate: OvenPlayerState;
    };
    /** large(>992), medium(<992), small(<768), xsmall(<576) */
    resized: "large" | "medium" | "small" | "xsmall";
    /** The new playback rate */
    playbackRateChanged: number;
    seek: {
        /** The position of the player before the player seeks (in seconds). */
        position: string;
        /** Current media's duration (In seconds) */
        newstate: string;
    };
    time: {
        /** Duration of the current playlist item in seconds. */
        duration: number;
        /** Playback position in seconds. */
        position: number;
    };
    bufferChanged: {
        /** Current media's duration (In seconds) */
        duration: number;
        /** Current position of the media file (In seconds) */
        position: number;
        /** Percentage between 0 and 100 of the current media that is buffered. */
        buffer: number;
    };
    /** New volume percentage (0-100) */
    mute: number;
    /** New volume percentage (0-100) */
    volumeChanged: number;
    /** index of the new playlist index */
    playlistChanged: number;
    /** index of the new quality level in the getSources() array */
    sourceChanged: number;
    qualityLevelChanged: {
        /** index of the new quality level in the getQualityLevels() array */
        currentQuality: number;
        /**
         * "request" : Triggered when a user sets quality level.
         * "render" : Streaming rendered.
         */
        type: "request" | "render";
        /** The player's auto-switching quality state. */
        isAuto: boolean;
    };
    cueChanged: VTTCue;
    /** changed displaying mode */
    timeDisplayModeChanged: boolean;
    adChanged: {
        /** True if the ad is linear, false otherwise. */
        isLinear: boolean;
        /** Returns the duration of the selected creative, or -1 for non-linear creatives. */
        duration: number;
        /** The number of seconds of playback before the ad becomes skippable. */
        skipTimeOffset: number;
    };
    adTime: {
        /** True if the ad is linear, false otherwise. */
        isLinear: boolean;
        /** Returns the duration of the selected creative, or -1 for non-linear creatives. */
        duration: number;
        /** The number of seconds of playback before the ad becomes skippable. */
        skipTimeOffset: number;
        /** Get the remaining time of the current ad that is playing. */
        remaining: number;
        /** Playback position in seconds. */
        position: number;
    };
    adComplete: undefined;
    /** True if the screen is full, false otherwise. */
    fullscreenChanged: boolean;
    clicked: Event;
    allPlaylistEnded: undefined;
    /** Object returned by new Hls() which used internally in OvenPlayer. */
    hlsPrepared: object;
    hlsDestroyed: undefined;
    /** Object returned by dashjs.MediaPlayer().create() which used internally in OvenPlayer. */
    dashPrepared: object;
    dashDestroyed: undefined;
    destroy: undefined;
    error: {
        code: number;
        error?: Error | string;
        message: string;
        reason: string;
    };
}

interface OvenPlayerInstance {
    getVersion(): string;
    getConfig(): OvenPlayerConfig;
    getContainerElement(): HTMLDivElement;
    getContainerId(): string;
    getMseInstance(): object | null;
    getProviderName(): string | null;
    load(sources: OvenPlayerSource[] | OvenPlayerPlayList): void;
    getMediaElement(): HTMLVideoElement;
    getState(): OvenPlayerState;
    getBrowser(): OvenPlayerBrowser;
    setTimecodeMode(mode: boolean): void;
    isTimecodeMode(): boolean;
    getFramerate(): number;
    seekFrame(frame: number): void;
    getDuration(): number;
    getPosition(): number;
    getVolume(): number;
    setVolume(volume: number): void;
    getMute(): boolean;
    setMute(mute: boolean): void;
    play(): void;
    pause(): void;
    stop(): void;
    seek(position: number): void;
    getPlaybackRate(): number;
    setPlaybackRate(rate: number): void;
    getPlaylist(): OvenPlayerPlayList;
    getCurrentPlaylist(): number;
    setCurrentPlaylist(index: number): void;
    getSources(): OvenPlayerSource[] | OvenPlayerPlayList;
    getCurrentSource(): number;
    setCurrentSource(index: number): void;
    getQualityLevels(): OvenPlayerQuality[];
    getCurrentQuality(): number;
    setCurrentQuality(index: number): void;
    isAutoQuality(): boolean;
    setAutoQuality(auto: boolean): void;
    addCaption(track: Pick<OvenPlayerTrack, "file" | "kind" | "label">): void;
    getCaptionList(): OvenPlayerTrack[];
    getCurrentCaption(): string;
    setCaption?(track: OvenPlayerTrack): void;
    setCurrentCaption(index: string): void;
    removeCaption(index: string): void;
    showControls(show: boolean): void;
    toggleFullScreen(): void;
    on: OvenPlayerHandler;
    once: OvenPlayerHandler;
    off(eventName: keyof OvenPlayerEvents): void;
    remove(): void;
}

interface OvenPlayerQuality {
    bitrate: string;
    height: number;
    index: number;
    label: string;
    width: number;
}

interface OvenPlayerBrowser {
    browser: string;
    browserMajorVersion: number;
    browserVersion: string;
    cookies: boolean;
    mobile: boolean;
    os: string;
    osVersion: string;
    screen: string;
    ua: string;
}

interface OvenPlayerTrack {
    file: string;
    kind: string;
    label: string;
    data: string[];
    id: string;
    name: string;
}

export {
    OvenPlayerBrowser,
    OvenPlayerConfig,
    OvenPlayerEvents,
    OvenPlayerHandler,
    OvenPlayerIceServer,
    OvenPlayerInstance,
    OvenPlayerPlayList,
    OvenPlayerQuality,
    OvenPlayerSource,
    OvenPlayerState,
    OvenPlayerTrack,
    OvenPlayerWebRTCStream,
};

declare const OvenPlayer: OvenPlayer;

export as namespace OvenPlayer;
export default OvenPlayer;
