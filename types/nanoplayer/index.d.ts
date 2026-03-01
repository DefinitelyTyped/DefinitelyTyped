// Type definitions for non-npm package nanoplayer 4.20
// Project: https://github.com/nanostream/nanoplayer
// Definitions by: Can Taşdemir <ctasdemir@nanocosmos.net>
//                 Thomas Niedergesäß <tn@nanocosmos.de>
//                 Luiza Sadowska <ls@nanocosmos.de>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace Constants {
    enum NanoPlayerState {
        UNINITIALIZED = 1,
        IDLE,
        READY,
        LOADING,
        PLAYING,
        PAUSED,
        BUFFERING,
        UNKNOWN,
        PLAYBACK_NOT_STARTED,
        PLAYBACK_SUSPENDED,
        PAUSING,
        PLAYBACK_ERROR,
        RECONNECTION_IMMINENT,
        CONNECTION_ERROR,
        DESTROYING,
        PLAYBACK_RESTARTING,
        VISIBILITY_HIDDEN,
        NOT_ENOUGH_DATA,
        SOURCE_STREAM_STOPPED
    }

    type NanoPlayerPauseReason =
        | "normal"
        | "buffer"
        | "connectionclose"
        | "servernotfound"
        | "streamnotfound"
        | "interactionrequired"
        | "playbacksuspended"
        | "playbackerror"
        | "reconnectionimminent"
        | "destroy"
        | "playbackrestart"
        | "visibilityhidden"
        | "notenoughdata"
        | "sourcestreamstopped";

    type NanoPlayerErrorCode =
        | PlayerErrorCode
        | StreamErrorCode
        | MediaErrorCode
        | NetworkErrorCode
        | SetupErrorCode;

    type PlayerErrorCode =
        | 1000
        | 1001
        | 1002
        | 1003
        | 1004
        | 1005
        | 1006
        | 1007
        | 1008
        | 1009
        | 1010;

    type StreamErrorCode =
        | 2001
        | 2002
        | 2003
        | 2004
        | 2011
        | 2012
        | 2013
        | 2014;

    type MediaErrorCode =
        | 3001
        | 3002
        | 3003
        | 3004
        | 3005
        | 3100
        | 3101
        | 3200;

    type NetworkErrorCode =
        | GeneralNetworkErrorCode
        | WebSocketNetworkErrorCode
        | HttpNetworkErrorCode
        | SecurityNetworkErrorCode;

    type GeneralNetworkErrorCode =
        | 4001
        | 4002
        | 4003
        | 4004
        | 4005
        | 4006;

    type WebSocketNetworkErrorCode =
        | 4101
        | 4102
        | 4103
        | 4104
        | 4105
        | 4106
        | 4107
        | 4108
        | 4109
        | 4110
        | 4111
        | 4115;

    type HttpNetworkErrorCode =
        | 4400
        | 4403
        | 4500
        | 4503;

    type SecurityNetworkErrorCode =
        | 4900
        | 4901
        | 4903
        | 4904;

    type SetupErrorCode =
        | GeneralSetupErrorCode
        | BintuSetupErrorCode
        | MetricsSetupErrorCode;

    type GeneralSetupErrorCode =
        | 5001
        | 5002
        | 5003
        | 5004
        | 5005
        | 5006
        | 5007
        | 5008
        | 5009
        | 5010;

    type BintuSetupErrorCode =
        | 5101
        | 5102
        | 5103;

    type MetricsSetupErrorCode =
        | 5201
        | 5202
        | 5203;
}

export namespace Events {
    interface PlayerEvent {
        name: string; // The event name.
        player: string; // The player name (id of the playerDiv).
        id: string; // The unique id of the player instance.
        version: string; // The version of the player.
        state?: Constants.NanoPlayerState; // The player state.
    }

    /**
     * The ready event to pass in the 'config.events' object at the setup call. Fires if the player is ready to play after successful setup.
     */
    interface NanoPlayerReadyEvent extends PlayerEvent {
        data: {
            config: NanoPlayerConfig; // - The config object.
        };
    }

    /**
     * The play event to pass in the 'config.events' object at the setup call. Fires if playout is started.
     */
    interface NanoPlayerPlayEvent extends PlayerEvent {
        data: {
            stats: {
                connecting: number; // The time when 'player.play()' is just called in ms (always zero).
                connected: number; // The time when the connection is established in ms (relative to 'connecting').
                firstFragmentReceived: number; // The time when the first fragment is received in ms (relative to 'connecting').
                firstFrameRendered: number; // The time when the first frame is rendered in ms (relative to 'connecting').
                playable: number; // The time when the buffer has enough data to start in ms (relative to 'connecting').
                playing: number; // The time when the playback is started in ms (relative to 'connecting'). It's the total startup time.
            };
        };
        state: Constants.NanoPlayerState; // The player state.
    }

    /**
     * The pause event to pass in the 'config.events' object at the setup call. Fires if playout is paused.
     */
    interface NanoPlayerPauseEvent extends PlayerEvent {
        data: {
            reason: Constants.NanoPlayerPauseReason; // The reason of pausing.
        };
        state: Constants.NanoPlayerState; // The player state.
    }

    /**
     * The load event to pass in the 'config.events' object at the setup call. Fires if playout was stopped or player is ready after setup and tries to play.
     */
    interface NanoPlayerOnLoadingEvent extends PlayerEvent {
        data: {
            connectDelay: number; // The time in milliseconds to wait for initializing the connection to the server to get the stream. Is zero if no reconnect is imminent.
        };
    }

    /**
     * The start buffering event to pass in the 'config.events' object at the setup call. Fires if playout is started but no media is available.
     */
    interface NanoPlayerOnStartBufferingEvent extends PlayerEvent {
        data: {}; // The data object (empty).
    }

    /**
     * The stop buffering event to pass in the 'config.events' object at the setup call. Fires if playout resumes after buffering.
     */
    interface NanoPlayerOnStopBufferingEvent extends PlayerEvent {
        data: {}; // The data object (empty).
    }

    /**
     * The error event to pass in the 'config.events' object at the setup call. Fires if any kind of error occurs.
     */
    interface NanoPlayerErrorEvent extends PlayerEvent {
        data: {
            code: Constants.NanoPlayerErrorCode; // - The error code.
            message: string; // - The error cause as human readable string.
        };
    }

    /**
     * The stats event to pass in the 'config.events' object at the setup call. Fires if the player has measured statistics.
     */
    interface NanoPlayerStatsEvent extends PlayerEvent {
        data: {
            stats: {
                currentTime: number; // The current time of the video.
                playout: {
                    start: number; // The start play time of the video.
                    end: number; // The end play time of the video.
                };
                buffer: {
                    start: number; // The start buffer time of the video.
                    end: number; // The end buffer time of the video.
                    delay: {
                        current: number; // The current delay time.
                        avg: number; // The average delay time over the last second.
                        min: number; // The minimum delay time over the last second.
                        max: number; // The maximum delay time over the last second.
                    };
                };
                bitrate: {
                    current: number; // The current bitrate in Bit/s. Is '0' if not available. NOT AVAILABLE FOR IOS.
                    avg: number; // The average bitrate in Bit/s over the last 10 seconds. Is '0' if not available. NOT AVAILABLE FOR IOS.
                    min: number; // The minimum bitrate in Bit/s over the last 10 seconds. Is '0' if not available. NOT AVAILABLE FOR IOS.
                    max: number; // The maximum bitrate in Bit/s over the last 10 seconds. Is '0' if not available. NOT AVAILABLE FOR IOS.
                };
                framerate: {
                    current: number; // The current network framerate. Is '0' if not available. NOT AVAILABLE FOR IOS.
                    avg: number; // The average network framerate over the last 10 seconds. Is '0' if not available. NOT AVAILABLE FOR IOS.
                    min: number; // The minimum network framerate over the last 10 seconds. Is '0' if not available. NOT AVAILABLE FOR IOS.
                    max: number; // The maximum network framerate over the last 10 seconds. Is '0' if not available. NOT AVAILABLE FOR IOS.
                };
                playbackrate: {
                    current: number; // The current video playbackrate. (since 4.14.1)
                    avg: number; // The average video playbackrate over the last 10 seconds. (since 4.14.1)
                    min: number; // The minimum video playbackrate over the last 10 seconds. (since 4.14.1)
                    max: number; // The maximum video playbackrate over the last 10 seconds. (since 4.14.1)
                };
                buffergoal: {
                    base: number; // The suggested calculated buffergoal value depending on the latency control mode and playback conditions (since 4.14.1)
                    real: number; // The final calculated buffergoal value including offsets (since 4.14.1)
                    min: number; // The minimum possible buffergoal value. (since 4.14.1)
                    max: number; // The maximum possible buffergoal value. (since 4.14.1)
                };
                quality: {
                    corruptedVideoFrames: number; // The total number of corrupted video frames.
                    corruptedVideoFramesCurrent: number; // The number of corrupted video frames within the last second.
                    creationTime: number; // The time in miliseconds since the start of the navigation and the creation of the video element.
                    droppedVideoFrames: number; // The total number of dropped video frames.
                    droppedVideoFramesCurrent: number; // The number of dropped video frames within the last second.
                    totalVideoFrames: number; // The total number of created and dropped video frames since creation of the video element.
                }
            }
        };
    }

    interface NanoPlayerMetaDataEvent extends PlayerEvent {
        data: {
            handlerName: string; // - The name of the metadata handler.
            message: any; // - The metadata message.
            streamTime: number; // - The timestamp of the metadata in relation to currentTime.
        };
    }

    interface NanoPlayerMuteEvent extends PlayerEvent {
        data: {
            volume: number; //  - The current volume in a range from 0.0 to 1.0.
        };
    }

    interface NanoPlayerUnmuteEvent extends PlayerEvent {
        data: {
            volume: number; // - The current volume in a range from 0.0 to 1.0.
        };
    }

    interface NanoPlayerVolumeChangeEvent extends PlayerEvent {
        data: {
            volume: number; // - The current volume in a range from 0.0 to 1.0.
        };
    }

    interface NanoPlayerStreamInfoEvent extends PlayerEvent {
        data: {
            streamInfo: NanoPlayerStreamInfo
        };
    }

    interface NanoPlayerStreamInfoUpdateEvent extends PlayerEvent {
        data: {
            streamInfo: NanoPlayerStreamInfo
        };
    }

    interface NanoPlayerWarningEvent extends PlayerEvent {
        data: {
            message: string;
        };
    }

    interface NanoPlayerDestroyEvent extends PlayerEvent {
        data: {};
    }

    interface NanoPlayerUpdateSourceInitEvent extends PlayerEvent {
        data: {
            source: object;
            entry: object;
            rule: string;
            options: object;
            tag: string;
            count: number;
            type: string;
            id: number;
        };
    }

    interface NanoPlayerUpdateSourceSuccessEvent extends PlayerEvent {
        data: {
            source: object;
            entry: object;
            rule: string;
            tag: string;
            count: number;
            type: string;
            id: number;
        };
    }

    interface NanoPlayerUpdateSourceFailEvent extends PlayerEvent {
        data: {
            source: object;
            entry: object;
            rule: string;
            code: object;
            message: string;
            tag: string;
            count: number;
            type: string;
            id: number;
        };
    }

    interface NanoPlayerUpdateSourceAbortEvent extends PlayerEvent {
        data: {
            source: object;
            entry: object;
            rule: string;
            reason: string;
            tag: string;
            count: number;
            type: string;
            id: number;
        };
    }

    interface NanoPlayerSwitchStreamInitEvent extends PlayerEvent {
        data: {
            source: object;
            entry: object;
            rule: string;
            options: object;
            tag: string;
            count: number;
            type: string;
            id: number;
        };
    }

    interface NanoPlayerSwitchStreamSuccessEvent extends PlayerEvent {
        data: {
            source: object;
            entry: object;
            rule: string;
            tag: string;
            count: number;
            type: string;
            id: number;
        };
    }

    interface NanoPlayerSwitchStreamFailEvent extends PlayerEvent {
        data: {
            source: object;
            entry: object;
            rule: string;
            code: object;
            message: object;
            tag: string;
            count: number;
            type: string;
            id: number;
        };
    }

    interface NanoPlayerSwitchStreamAbortEvent extends PlayerEvent {
        data: {
            source: object;
            entry: object;
            rule: string;
            reason: string;
            tag: string;
            count: number;
            type: string;
            id: number;
        };
    }

    interface NanoPlayerServerInfoEvent extends PlayerEvent {
        data: {
            serverInfo: {
                applicationServerName: string;
                applicationServerVersion: object;
                hostname: string;
            };
        };
    }

    interface NanoPlayerFullscreenChangeEvent extends PlayerEvent {
        data: {
            entered: boolean;
        };
    }

    interface NanoPlayerActiveVideoElementChangeEvent extends PlayerEvent {
        data: {
            activeVideoElement: HTMLVideoElement;
            videoElementList: HTMLVideoElement[];
        };
    }
}

export interface NanoPlayerAdaption {
    rule?: 'deviationOfMean' | 'deviationOfMean2' | 'none';
    downStep?: number;
}

export interface NanoPlayerSource {
    entries?: NanoPlayerEntry[];
    startIndex?: number;
    defaults?: {
        service?: 'bintu';
    };
    group?: {
        id?: string;
        apiurl?: string;
        startQuality?: 'high' | 'medium-high' | 'medium' | 'medium-low' | 'low';
        security?: {
            jwtoken?: string;
        };
    };
    general?: {
        serverDomain?: string;
    };
    options?: {
        switch?: {
            method?: 'server' | 'client';
            pauseOnError?: boolean;
            forcePlay?: boolean;
            fastStart?: boolean;
            timeout?: number;
            tag?: string;
        };
        adaption?: NanoPlayerAdaption;
    };
    h5live?: {
        server: {
            websocket?: string;
            progressive?: string;
            hls?: string;
        };
        token?: string;
        rtmp?: {
            url: string;
        };
        security?: {
            token: string;
            expires: string;
            options: string;
            tag: string;
        };
        params?: Record<string, string>;
    };
    bintu?: {
        streamid: string;
        apiurl?: string;
    };
    hls?: string;
}

export interface NanoPlayerConfig {
    source: NanoPlayerSource;
    playback?: {
        autoplay?: boolean;
        automute?: boolean;
        muted?: boolean;
        latencyControlMode?: 'classic' | 'fastadaptive' | 'balancedadaptive';
        metadata?: boolean;
        forceTech?: 'h5live' | 'flash' | 'hls.native';
        flashplayer?: string;
        videoId?: string | string[];
        keepConnection?: boolean;
        allowSafariHlsFallback?: boolean;
        crossOrigin?: 'anonymous' | 'use-credentials' | 'not-set';
        mediaErrorRecoveries?: number;
        metadataLowDelay?: boolean;
        reconnect?: {
            minDelay?: number;
            maxDelay?: number;
            delaySteps?: number;
            maxRetries?: number;
        };
        timeouts?: {
            loading?: number;
            buffering?: number;
            connecting?: number;
        };
    };
    style?: {
        width?: string;
        height?: string;
        aspectratio?: string;
        controls?: boolean;
        interactive?: boolean;
        view?: boolean;
        scaling?: 'letterbox' | 'fill' | 'crop' | 'original' | 'resize';
        keepFrame?: boolean;
    };
    events?: {
        onReady?: (evt: Events.NanoPlayerReadyEvent) => void;
        onPlay?: (evt: Events.NanoPlayerPlayEvent) => void;
        onPause?: (evt: Events.NanoPlayerPauseEvent) => void;
        onLoading?: (evt: Events.NanoPlayerOnLoadingEvent) => void;
        onStartBuffering?: (evt: Events.NanoPlayerOnStartBufferingEvent) => void;
        onStopBuffering?: (evt: Events.NanoPlayerOnStopBufferingEvent) => void;
        onError?: (evt: Events.NanoPlayerErrorEvent) => void;
        onStats?: (evt: Events.NanoPlayerStatsEvent) => void;
        onMetaData?: (evt: Events.NanoPlayerMetaDataEvent) => void;
        onMute?: (evt: Events.NanoPlayerMuteEvent) => void;
        onUnmute?: (evt: Events.NanoPlayerUnmuteEvent) => void;
        onVolumeChange?: (evt: Events.NanoPlayerVolumeChangeEvent) => void;
        onStreamInfo?: (evt: Events.NanoPlayerStreamInfoEvent) => void;
        onStreamInfoUpdate?: (evt: Events.NanoPlayerStreamInfoUpdateEvent) => void;
        onWarning?: (evt: Events.NanoPlayerWarningEvent) => void;
        onDestroy?: (evt: Events.NanoPlayerDestroyEvent) => void;
        onUpdateSourceInit?: (evt: Events.NanoPlayerUpdateSourceInitEvent) => void;
        onUpdateSourceSuccess?: (evt: Events.NanoPlayerUpdateSourceSuccessEvent) => void;
        onUpdateSourceFail?: (evt: Events.NanoPlayerUpdateSourceFailEvent) => void;
        onUpdateSourceAbort?: (evt: Events.NanoPlayerUpdateSourceAbortEvent) => void;
        onSwitchStreamInit?: (evt: Events.NanoPlayerSwitchStreamInitEvent) => void;
        onSwitchStreamSuccess?: (evt: Events.NanoPlayerSwitchStreamSuccessEvent) => void;
        onSwitchStreamFail?: (evt: Events.NanoPlayerSwitchStreamFailEvent) => void;
        onSwitchStreamAbort?: (evt: Events.NanoPlayerSwitchStreamAbortEvent) => void;
        onServerInfo?: (evt: Events.NanoPlayerServerInfoEvent) => void;
        onFullscreenChange?: (evt: Events.NanoPlayerFullscreenChangeEvent) => void;
        onActiveVideoElementChange?: (evt: Events.NanoPlayerActiveVideoElementChangeEvent) => void;
    };
    tweaks?: {
        buffer?: {
            min: number;
            start: number;
            target: number;
            limit: number;
            max: number;
        };
        bufferDynamic?: {
            offsetThreshold: number;
            offsetStep: number;
            cooldownTime: number;
        };
    };
    metrics?: {
        accountId: string;
        accountKey: string;
        userId?: string;
        eventId?: string;
        statsInterval?: number;
        [key: string]: any;
    };
}

export interface NanoPlayerEntry {
    index: number; // The index of the stream entry. Have to be the same as the position in the 'entries' array. Begins with '0'.
    label?: string; // A custom label for the stream e.g. 'high'.
    tag?: string; // Custom informations about the stream entry.
    info?: {
        bitrate?: number; // The stream bitrate. Default: 0
        width?: number; // The stream width. Default: 0
        height?: number; // The stream height. Default: 0
        framerate?: number; // The stream framerate. Default: 0
    };
    hls?: string; // An HLS playout URL as a string.
    h5live?: {
        server: {
            websocket: string; // The H5Live WebSocket URL.
            progressive?: string; // The H5Live progressive download URL.
            hls: string; // The H5Live HLS URL. Required for playback on iOS 10 or higher. Not supported on iOS 9 or lower.
        };
        token?: string; // The H5Live server token.
        rtmp: {
            url: string; // The RTMP playout URL. Must include the domain, port, and application. Example: 'rtmp://example.com:80/live'.
            streamname: string; // The RTMP stream name.
        };
        security?: {
            token: string; // The security service token.
            expires: string; // The time the token expires (system time).
            options: string; // The security options.
            tag: string; // The custom tag to decrypt the token.
        };
        params?: Record<string, any>; // The params object to pass custom query parameters over the H5Live server connection. Parameters can be passed as key/value pairs.
    };
    bintu?: {
        streamid: string; // The Bintu stream ID.
        apiurl?: string; // The Bintu API URL. Default: 'https://bintu.nanocosmos.de'
    };
}

export interface NanoPlayerStreamInfo {
    url: string; // - The complete stream url with parameters.
    rtmp?: {
        url: string; // - The rtmp stream url.
        streamname: string; // - The rtmp streamname.
    };
    haveAudio: boolean; // - Indicates if the stream contains audio.
    haveVideo: boolean; // - Indicates if the stream contains video.
    audioInfo: { // - The audio info object. Is 'null' if the stream contains no audio.
        bitsPerSample: number | null; // - The bits per sample. Is 'null' if not available. NOT AVAILABLE FOR IOS.
        sampleRate: number | null; // - The audio sample rate. Is 'null' if not available. NOT AVAILABLE FOR IOS.
        channels: number | null; // - The number of audio channels. Is 'null' if not available. NOT AVAILABLE FOR IOS.
    } | null;
    videoInfo: {
        width: number | null; // - The width of the video. Is 'null' if not available.
        height: number | null; // - The height of the video. Is 'null' if not available.
        frameRate: number | null; // - The video frame rate. Is 'null' if not available. NOT AVAILABLE FOR IOS.
    } | null; // - The video info object. Is 'null' if the stream contains no video.
}

export class NanoPlayer {
    constructor(playerDivId: string)

    readonly version: string;
    readonly coreversion: string;
    readonly viewversion: string;
    readonly type: string;
    readonly id: string;
    readonly capabilities: string[];

    destroy: () => void;
    play: () => void;
    pause: () => void;
    mute: () => void;
    unmute: () => void;
    setup: (config: NanoPlayerConfig) => Promise<(NanoPlayerConfig | Constants.NanoPlayerErrorCode)>;
    updateSource: (source: NanoPlayerSource) => Promise<(NanoPlayerConfig | Constants.NanoPlayerErrorCode)>;
    switchStream: (index: number) => Promise<(NanoPlayerConfig | Constants.NanoPlayerErrorCode)>;
    setAdaption: (adaption: NanoPlayerAdaption) => void;
    requestFullscreen: () => Promise<(undefined | Constants.NanoPlayerErrorCode)>;
    exitFullscreen: () => Promise<(undefined | Constants.NanoPlayerErrorCode)>;
    setVolume: (value: number) => void;
}
