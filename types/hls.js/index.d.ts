// Type definitions for hls.js 0.12
// Project: https://github.com/video-dev/hls.js
// Definitions by: John G. Gainfort, Jr. <https://github.com/jgainfort>
//                 Johan Brook <https://github.com/brookback>
//                 Adrián Caballero <https://github.com/adripanico>
//                 Alexey I. Berezin <https://github.com/beraliv>
//                 Arkadiusz Babiarz <https://github.com/drax98>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

// Event Keys
type K_MEDIA_ATTACHING = "hlsMediaAttaching";
type K_MEDIA_ATTACHED = "hlsMediaAttached";
type K_MEDIA_DETACHING = "hlsMediaDetaching";
type K_MEDIA_DETACHED = "hlsMediaDetached";
type K_BUFFER_RESET = "hlsBufferReset";
type K_BUFFER_CODECS = "hlsBufferCodecs";
type K_BUFFER_CREATED = "hlsBufferCreated";
type K_BUFFER_APPENDING = "hlsBufferAppending";
type K_BUFFER_APPENDED = "hlsBufferAppended";
type K_BUFFER_EOS = "hlsBufferEOS";
type K_BUFFER_FLUSHING = "hlsBufferFlushing";
type K_BUFFER_FLUSHED = "hlsBufferFlushed";
type K_MANIFEST_LOADING = "hlsManifestLoading";
type K_MANIFEST_LOADED = "hlsManifestLoaded";
type K_MANIFEST_PARSED = "hlsManifestParsed";
type K_LEVEL_LOADING = "hlsLevelLoading";
type K_LEVEL_LOADED = "hlsLevelLoaded";
type K_LEVEL_UPDATED = "hlsLevelUpdated";
type K_LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated";
type K_LEVEL_SWITCHING = "hlsLevelSwitching";
type K_LEVEL_SWITCHED = "hlsLevelSwitched";
type K_AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated";
type K_AUDIO_TRACK_SWITCH = "hlsAudioTrackSwitch";
type K_AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching";
type K_AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched";
type K_AUDIO_TRACK_LOADING = "hlsAudioTrackLoading";
type K_AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded";
type K_SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated";
type K_SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch";
type K_SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading";
type K_SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded";
type K_SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed";
type K_KEY_LOADING = "hlsKeyLoading";
type K_KEY_LOADED = "hlsKeyLoaded";
type K_INIT_PTS_FOUND = "hlsInitPtsFound";
type K_FRAG_LOADING = "hlsFragLoading";
type K_FRAG_LOAD_PROGRESS = "hlsFragLoadProgress";
type K_FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted";
type K_FRAG_LOADED = "hlsFragLoaded";
type K_FRAG_DECRYPTED = "hlsFragDecrypted";
type K_FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment";
type K_FRAG_PARSING_USERDATA = "hlsFragParsingUserData";
type K_FRAG_PARSING_METADATA = "hlsFragParsingMetadata";
type K_FRAG_PARSING_DATA = "hlsFragParsingData";
type K_FRAG_PARSED = "hlsFragParsed";
type K_FRAG_BUFFERED = "hlsFragBuffered";
type K_FRAG_CHANGED = "hlsFragChanged";
type K_FPS_DROP = "hlsFpsDrop";
type K_FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping";
type K_ERROR = "hlsError";
type K_DESTROYING = "hlsDestroying";
type K_STREAM_STATE_TRANSITION = "hlsStreamStateTransition";

// Error Type Keys
type K_NETWORK_ERROR = "networkError";
type K_MEDIA_ERROR = "mediaError";
type K_KEY_SYSTEM_ERROR = "keySystemError";
type K_MUX_ERROR = "muxError";
type K_OTHER_ERROR = "otherError";

// Error Keys
type K_MANIFEST_LOAD_ERROR = "manifestLoadError";
type K_MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeout";
type K_MANIFEST_PARSING_ERROR = "manifestParsingError";
type K_LEVEL_LOAD_ERROR = "levelLoadError";
type K_LEVEL_LOAD_TIMEOUT = "levelLoadTimeout";
type K_AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError";
type K_AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeout";
type K_FRAG_LOAD_ERROR = "fragLoadError";
type K_FRAG_LOAD_TIMEOUT = "fragLoadTimeout";
type K_KEY_LOAD_ERROR = "keyLoadError";
type K_KEY_LOAD_TIMEOUT = "keyLoadTimeout";
// MEDIA_ERRORS //
type K_MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError";
type K_FRAG_LOOP_LOADING_ERROR = "fragLoopLoadingError";
type K_FRAG_DECRYPT_ERROR = "fragDecryptError";
type K_FRAG_PARSING_ERROR = "fragParsingError";
type K_BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError";
type K_BUFFER_APPEND_ERROR = "bufferAppendError";
type K_BUFFER_APPENDING_ERROR = "bufferAppendingError";
type K_BUFFER_STALLED_ERROR = "bufferStalledError";
type K_BUFFER_FULL_ERROR = "bufferFullError";
type K_BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole";
type K_BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall";
// MUX_ERROR //
type K_REMUX_ALLOC_ERROR = "remuxAllocError";
// OTHER_ERROR //
type K_LEVEL_SWITCH_ERROR = "levelSwitchError";
type K_INTERNAL_EXCEPTION = "interalException";

declare namespace Hls {
    class Loader {
        constructor(config: LoaderConfig);
        /**
         * Start retrieving content located at given URL (HTTP GET).
         */
        load(
            context: LoaderContext,
            config: LoaderConfig,
            callbacks: LoaderCallbacks
        ): void;
        /**
         * Abort any loading in progress.
         */
        abort(): void;
        /**
         * Destroy loading context.
         */
        destroy(): void;
    }

    /**
     * (default: internal ABR controller)
     * Customized Adaptive Bitrate Streaming Controller.
     */
    interface AbrController {
        /**
         * get: capping/max level value that could be used by ABR Controller
         * set: capping/max level value that could be used by ABR Controller
         */
        autoLevelCapping: number;
        /**
         *  accumulated handled events
         */
        handledEvents: string[];
        /**
         * current hls instance
         */
        hls: Hls;
        /**
         * last fragments corresponding level
         */
        lastLoadedFragLevel: number;
        /**
         * get: next auto-quality levele/force next auto-quality level that should be returned
         * set: next auto-quality levele/force next auto-quality level that should be returned
         *  - currently used for emergency switch down
         */
        nextAutoLevel: number;
        useGenericHandler: boolean;
    }

    /**
     *  Customized text track syncronization controller.
     */
    interface TimelineController {
        /**
         * clean-up all used resources
         */
        destroy(): void;
    }

    interface Tracks {
        container: any;
        codec: string;
        levelCodec: any;
        initSegment: any;
        metadata: any;
    }

    interface Stats {
        /**
         * performance.now() just after load() has been called
         */
        trequest: number;
        /**
         * performance.now() of first received byte
         */
        tfirst: number;
        /**
         * performance.now() on load complete
         */
        tload: number;
        mtime: number;
        tbuffered?: number;
        length?: number;
    }

    /**
     * a Level object represents a given quality level and contains quality level related info
     */
    interface Level {
        /**
         * attribute list
         */
        attrs: LevelAttr[];
        /**
         * audio codec
         */
        audioCodec: string;
        /**
         * level bitrate
         */
        bitrate: number;
        /**
         * level details
         */
        details?: LevelDetails;
        /**
         * whether there is any error on the fragment
         */
        fragmentError?: boolean;
        /**
         * video height
         */
        height: number;
        /**
         * index of the level
         */
        level?: number;
        /**
         * error code
         */
        loadError: number;
        /**
         * level name
         */
        name: string;
        /**
         * array of unrecognized codecs
         */
        unkownCodecs: string[];
        /**
         * level url. might contain several items if failover/redundant streams are found in the manifest
         */
        url: string[];
        /**
         * index of current url from url[] array
         */
        urlId: number;
        /**
         * video codec
         */
        videoCodec: string;
        /**
         * video width
         */
        width: number;
    }

    interface LevelAttr {
        [key: string]: string;
    }

    /**
     * a LevelDetails object contains level details retrieved after level playlist parsing
     */
    interface LevelDetails {
        /**
         * protocol version
         */
        version: number;
        /**
         * playlist type
         */
        type: string;
        /**
         * start sequence number
         */
        startSN: number;
        /**
         * end sequence number
         */
        endSN: number;
        /**
         * level total duration
         */
        totalduration: number;
        /**
         * level fragment target duration
         */
        targetduration: number;
        /**
         * average fragment duration
         */
        averagetargetduration: number;
        /**
         * array of fragments info
         */
        fragments: Fragment[];
        /**
         * is this level a live playlist or not?
         */
        live: boolean;
    }

    /**
     * the Fragment object contains fragment related info
     */
    interface Fragment {
        /**
         * fragment duration
         */
        duration: number;
        /**
         * fragment level identifier
         */
        level: number;
        /**
         * fragment sequence number
         */
        sn: number;
        /**
         * fragment start offset
         */
        start: number;
        /**
         * fragment url
         */
        url: string;
        /**
         * stream start date and time
         */
        programDateTime: Date;
        /**
         * continuity count
         */
        cc: number;
        /**
         * list of tags associated with the fragment
         */
        tagList: string[][];
        /**
         * fragment title
         */
        title: string;
    }

    // interface Segment {}

    // interface TimeRange {}

    // interface SubtitleTracks {}

    type CustomLogger = (...args: any[]) => void;

    interface CustomLoggerObject {
        warn?: CustomLogger;
        info?: CustomLogger;
        log?: CustomLogger;
        debug?: CustomLogger;
        error?: CustomLogger;
    }

    interface AudioTrack {
        buffer: SourceBuffer;
        container: string;
        codec: string;
        id: string;
        initSegment?: Uint8Array;
        levelCodec: string;
    }

    interface Config {
        /**
         * (default: false)
         * if set to true, the adaptive algorithm with limit levels usable in auto-quality by the HTML video element dimensions (width and height)
         * if set to false, levels will not be limited. All available levels could be used in auto-quality mode taking only bandwidth into consideration.
         */
        capLevelToPlayerSize: boolean;
        /**
         * (default: false)
         * setting config.debug = true; will turn on debug logs on JS console.
         * a logger object could also be provided for custom logging: config.debug = customLogger;
         */
        debug: boolean | CustomLoggerObject;
        /**
         * (default: true)
         * if set to true, start level playlist and first fragments will be loaded automatically, after triggering of Hls.Events.MANIFEST_PARSED event
         * if set to false, an explicit API call (hls.startLoad(startPosition=-1)) will be needed to start quality level/fragment loading.
         */
        autoStartLoad: boolean;
        /**
         * (default -1)
         * if set to -1, playback will start from initialTime=0 for VoD and according to liveSyncDuration/liveSyncDurationCount config params for Live
         * otherwise, playback will start from predefined value. (unless stated otherwise in autoStartLoad=false mode : in that case startPosition can be overrided using hls.startLoad(startPosition)).
         */
        startPosition: number;
        /**
         * (default: undefined)
         * if audio codec is not signaled in variant manifest, or if only a stream manifest is provided, hls.js tries to guess audio codec by parsing audio sampling rate in ADTS header.
         * If sampling rate is less or equal than 22050 Hz, then hls.js assumes it is HE-AAC, otherwise it assumes it is AAC-LC.
         * This could result in bad guess, leading to audio decode error, ending up in media error.
         * It is possible to hint default audiocodec to hls.js by configuring this value as below:
         * mp4a.40.2 (AAC-LC) or
         * mp4a.40.5 (HE-AAC) or
         * undefined (guess based on sampling rate)
         */
        defaultAudioCodec: string;
        /**
         * (default: 1)
         * number of segments needed to start a playback of Live stream.
         */
        initialLiveManifestSize: number;
        /**
         * (default: 30 seconds)
         * Maximum buffer length in seconds. If buffer length is/become less than this value, a new fragment will be loaded.
         * This is the guaranteed buffer length hls.js will try to reach, regardless of maxBufferSize.
         */
        maxBufferLength: number;
        /**
         * (default 600s)
         * Maximum buffer length in seconds. Hls.js will never exceed this value, even if maxBufferSize is not reached yet.
         * hls.js tries to buffer up to a maximum number of bytes (60 MB by default) rather than to buffer up to a maximum nb of seconds.
         * This is to mimic the browser behaviour (the buffer eviction algorithm is starting after the browser detects that video buffer size reaches a limit in bytes)
         * maxBufferLength is the minimum guaranteed buffer length that hls.js will try to achieve, even if that value exceeds the amount of bytes 60 MB of memory.
         * maxMaxBufferLength acts as a capping value, as if bitrate is really low, you could need more than one hour of buffer to fill 60 MB.
         */
        maxMaxBufferLength: number;
        /**
         * (default: 60 MB)
         * 'Minimum' maximum buffer size in bytes. If buffer size upfront is bigger than this value, no fragment will be loaded
         */
        maxBufferSize: number;
        /**
         * (default: 0.5 seconds)
         * 'Maximum' inter-fragment buffer hole tolerance that hls.js can cope with when searching for the next fragment to load. When switching between quality level,
         * fragments might not be perfectly aligned.
         * This could result in small overlapping or hole in media buffer. This tolerance factor helps cope with this.
         */
        maxBufferHole: number;
        /**
         * (default: 2s)
         * In case playback is stalled, and a buffered range is available upfront, less than maxSeekHole seconds from current media position,
         * hls.js will jump over this buffer hole to reach the beginning of this following buffered range.
         * maxSeekHole allows to configure this jumpable threshold.
         */
        maxSeekHole: number;
        /**
         * (default: 4s)
         *
         * ABR algorithm will always try to choose a quality level that should avoid rebuffering. In case no quality level with this criteria can
         * be found (lets say for example that buffer length is 1s, but fetching a fragment at lowest quality is predicted to take around 2s ...
         * ie we can forecast around 1s of rebuffering ...) then ABR algorithm will try to find a level that should guarantee less than
         * maxStarvationDelay of buffering.
         */
        maxStarvationDelay: number;
        /**
         * (default 0.2s)
         * This tolerance factor is used during fragment lookup.
         * Instead of checking whether buffered.end is located within [start, end] range, frag lookup will be done by checking within [start-maxFragLookUpTolerance, end-maxFragLookUpTolerance] range.
         * This tolerance factor is used to cope with situations like:
         *      buffered.end = 9.991
         *      frag[0] : [0,10]
         *      frag[1] : [10,20]
         *      buffered.end is within frag[0] range, but as we are close to frag[1], frag[1] should be choosen instead
         * If maxFragLookUpTolerance = 0.2, this lookup will be adjusted to
         *      frag[0] : [-0.2,9.8]
         *      frag[1] : [9.8,19.8]
         *  This time, buffered.end is within frag[1] range, and frag[1] will be the next fragment to be loaded, as expected
         */
        maxLoadingDelay: number;
        /**
         * (default: 0.5s)
         * media element is expected to play and if currentTime has not moved for more than lowBufferWatchdogPeriod and if there are less than maxBufferHole seconds buffered upfront,
         * hls.js will try to nudge playhead to recover playback
         */
        lowBufferWatchdogPeriod: number;
        /**
         * (default: 3s)
         * if media element is expected to play and if currentTime has not moved for more than highBufferWatchdogPeriod and if there are more than maxBufferHole seconds buffered upfront,
         * hls.js will try to nudge playhead to recover playback
         */
        highBufferWatchdogPeriod: number;
        /**
         * (default: 0.1s)
         * In case playback continues to stall after first playhead nudging, currentTime will be nudged evenmore following nudgeOffset to try to restore playback.
         * media.currentTime += (nb nudge retry -1)*nudgeOffset
         */
        nudgeOffset: number;
        /**
         * (default: 3s)
         * In case playback continues to stall after first playhead nudging, currentTime will be nudged evenmore following nudgeOffset to try to restore playback.
         * media.currentTime += (nb nudge retry -1)*nudgeOffset
         */
        nudgeMaxRetry: number;
        /**
         * (default 4s)
         *
         * max video loading delay used in automatic start level selection : in that mode ABR controller will ensure that video loading time (ie
         * the time to fetch the first fragment at lowest quality level + the time to fetch the fragment at the appropriate quality level is less
         * than maxLoadingDelay )
         */
        maxFragLookUpTolerance: number;
        /**
         * (default: 3)
         * edge of live delay, expressed in multiple of EXT-X-TARGETDURATION. if set to 3, playback will start from fragment N-3, N being the last fragment of the live playlist.
         * Decreasing this value is likely to cause playback stalls.
         */
        liveSyncDurationCount: number;
        /**
         * (default: Infinity)
         * maximum delay allowed from edge of live, expressed in multiple of EXT-X-TARGETDURATION.
         * If set to 10, the player will seek back to liveSyncDurationCount whenever the next fragment to be loaded is older than N-10, N being the last fragment of the live playlist.
         * If set, this value must be stricly superior to liveSyncDurationCount a value too close from liveSyncDurationCount is likely to cause playback stalls.
         */
        liveMaxLatencyDurationCount: number;
        /**
         * (default: undefined)
         * Alternative parameter to liveSyncDurationCount, expressed in seconds vs number of segments.
         * If defined in the configuration object, liveSyncDuration will take precedence over the default liveSyncDurationCount.
         * You can't define this parameter and either liveSyncDurationCount or liveMaxLatencyDurationCount in your configuration object at the same time.
         * A value too low (inferior to ~3 segment durations) is likely to cause playback stalls.
         */
        liveSyncDuration: number;
        /**
         * (default: undefined)
         * Alternative parameter to liveMaxLatencyDurationCount, expressed in seconds vs number of segments.
         * If defined in the configuration object, liveMaxLatencyDuration will take precedence over the default liveMaxLatencyDurationCount.
         * If set, this value must be stricly superior to liveSyncDuration which must be defined as well.
         * You can't define this parameter and either liveSyncDurationCount or liveMaxLatencyDurationCount in your configuration object at the same time.
         * A value too close from liveSyncDuration is likely to cause playback stalls.
         */
        liveMaxLatencyDuration: number;
        /**
         * (default: false)
         * Override current Media Source duration to Infinity for a live broadcast. Useful, if you are building a player which relies
         * on native UI capabilities in modern browsers. If you want to have a native Live UI in environments like iOS Safari, Safari,
         * Android Google Chrome, etc. set this value to true.
         */
        liveDurationInfinity: boolean;
        /**
         * (default: Infinity)
         * Sets the maximum length of the buffer, in seconds, to keep during a live stream. Any video
         * buffered past this time will be evicted. Infinity means no restriction on back buffer length;
         * 0 keeps the minimum amount. The minimum amount is equal to the target duration of a segment
         * to ensure that current playback is not interrupted.
         */
        liveBackBufferLength: number;
        /**
         * (default: true)
         * Enable WebWorker (if available on browser) for TS demuxing/MP4 remuxing, to improve performance and avoid lag/frame drops.
         */
        enableWorker: boolean;
        /**
         * (default: true)
         * Enable to use JavaScript version AES decryption for fallback of WebCrypto API.
         */
        enableSoftwareAES: boolean;
        /**
         * (default: undefined)
         * When set, use this level as the default hls.startLevel. Keep in mind that the startLevel set with the API takes precedence over
         * config.startLevel configuration parameter.
         */
        startLevel: number;
        /**
         * (default: 10000ms for level and manifest)
         * URL Loader timeout. A timeout callback will be triggered if loading duration exceeds this timeout. no further action will be done : the load operation will not be cancelled/aborted.
         * It is up to the application to catch this event and treat it as needed.
         */
        manifestLoadingTimeOut: number;
        /**
         * (default: 3)
         * Max number of load retries.
         */
        manifestLoadingMaxRetry: number;
        /**
         * (default: 1000 ms)
         * Initial delay between XMLHttpRequest error and first load retry (in ms).
         * Any I/O error will trigger retries every 500ms,1s,2s,4s,8s, ...
         * capped to fragLoadingMaxRetryTimeout / manifestLoadingMaxRetryTimeout / levelLoadingMaxRetryTimeout value (exponential backoff).
         * Prefetch start fragment although media not attached.
         */
        manifestLoadingRetryDelay: number;
        /**
         * (default: 64000 ms)
         * Maximum frag/manifest/key retry timeout (in milliseconds) in case I/O errors are met.
         */
        manifestLoadingMaxRetryTimeout: number;
        /**
         * (default: 60000ms for fragment)
         * URL Loader timeout. A timeout callback will be triggered if loading duration exceeds this timeout. no further action will be done : the load operation will not be cancelled/aborted.
         * It is up to the application to catch this event and treat it as needed.
         */
        levelLoadingTimeOut: number;
        /**
         * (default: 3)
         * Max number of load retries.
         */
        levelLoadingMaxRetry: number;
        /**
         * (default: 1000 ms)
         * Initial delay between XMLHttpRequest error and first load retry (in ms).
         * Any I/O error will trigger retries every 500ms,1s,2s,4s,8s, ...
         * capped to fragLoadingMaxRetryTimeout / manifestLoadingMaxRetryTimeout / levelLoadingMaxRetryTimeout value (exponential backoff).
         * Prefetch start fragment although media not attached.
         */
        levelLoadingRetryDelay: number;
        /**
         * (default: 64000 ms)
         * Maximum frag/manifest/key retry timeout (in milliseconds) in case I/O errors are met.
         */
        levelLoadingMaxRetryTimeout: number;
        /**
         * (default: 60000ms for fragment)
         * URL Loader timeout. A timeout callback will be triggered if loading duration exceeds this timeout. no further action will be done : the load operation will not be cancelled/aborted.
         * It is up to the application to catch this event and treat it as needed.
         */
        fragLoadingTimeOut: number;
        /**
         * (default: 3)
         * Max number of load retries.
         */
        fragLoadingMaxRetry: number;
        /**
         * (default: 1000 ms)
         * Initial delay between XMLHttpRequest error and first load retry (in ms).
         * Any I/O error will trigger retries every 500ms,1s,2s,4s,8s, ...
         * capped to fragLoadingMaxRetryTimeout / manifestLoadingMaxRetryTimeout / levelLoadingMaxRetryTimeout value (exponential backoff).
         * Prefetch start fragment although media not attached.
         */
        fragLoadingRetryDelay: number;
        /**
         * (default: 64000 ms)
         * Maximum frag/manifest/key retry timeout (in milliseconds) in case I/O errors are met.
         */
        fragLoadingMaxRetryDelay: number;
        /**
         * (default: false)
         * Start prefetching start fragment although media not attached yet. Max number of append retries.
         */
        startFragPrefetch: boolean;
        /**
         * (default: 3)
         * Max number of sourceBuffer.appendBuffer() retry upon error. Such error could happen in loop with UHD streams, when internal buffer is full. (Quota Exceeding Error will be triggered).
         * In that case we need to wait for the browser to evict some data before being able to append buffer correctly.
         */
        appendErrorMaxRetry: number;
        /**
         * (default: standard XMLHttpRequest-based URL loader)
         * Override standard URL loader by a custom one. Could be useful for P2P or stubbing (testing).
         * Use this, if you want to overwrite both the fragment and the playlist loader.
         * Note: If fLoader or pLoader are used, they overwrite loader!
         */
        loader: typeof Loader;
        /**
         * (default: undefined)
         * This enables the manipulation of the fragment loader.
         * Note: This will overwrite the default loader, as well as your own loader function.
         */
        fLoader?: typeof Loader;
        /**
         * (default: undefined)
         * This enables the manipulation of the playlist loader.
         * Note: This will overwrite the default loader, as well as your own loader function.
         */
        pLoader?: typeof Loader;
        /**
         * (default: undefined)
         * XMLHttpRequest customization callback for default XHR based loader.
         * Parameter should be a function with two arguments (xhr: XMLHttpRequest, url: string).
         * If xhrSetup is specified, default loader will invoke it before calling xhr.send(). This allows user to easily modify/setup XHR.
         */
        xhrSetup?(xhr: XMLHttpRequest, url: string): void;
        /**
         * (default: undefined)
         * Fetch customization callback for Fetch based loader.
         * Parameter should be a function with two arguments (context and Request Init Params).
         * If fetchSetup is specified and Fetch loader is used, fetchSetup will be triggered to instantiate Request Object. This allows user to easily tweak Fetch loader.
         */
        fetchSetup?(context: any, initParams: any): Request;
        /**
         * (default: internal ABR controller)
         * Customized Adaptive Bitrate Streaming Controller.
         * Parameter should be a class providing 2 getters, 2 setters and a destroy() method:
         * get/set nextAutoLevel: return next auto-quality level/force next auto-quality level that should be returned (currently used for emergency switch down)
         * get/set autoLevelCapping: capping/max level value that could be used by ABR Controller
         * destroy(): should clean-up all used resources
         */
        abrController: AbrController;
        /**
         * (default: internal track timeline controller)
         * Customized text track syncronization controller.
         * Parameter should be a class with a destroy() method:
         * destroy() : should clean-up all used resources
         */
        timelineController: TimelineController;
        /**
         * (default: true)
         * Whether or not to enable WebVTT captions on HLS
         */
        enableWebVTT?: boolean;
        /**
         * (default: true)
         * whether or not to enable CEA-708 captions
         */
        enableCEA708Captions: boolean;
        /**
         * (default: English)
         * Label for the text track generated for CEA-708 captions track 1. This is how it will appear in the browser's native menu for subtitles and captions.
         */
        captionsTextTrack1Label: string;
        /**
         * (default: en)
         * RFC 3066 language code for the text track generated for CEA-708 captions track 1.
         */
        captionsTextTrack1LanguagedCode: string;
        /**
         * (default: Spanish)
         * Label for the text track generated for CEA-708 captions track 2. This is how it will appear in the browser's native menu for subtitles and captions.
         */
        captionsTextTrack2Label: string;
        /**
         * (default: es)
         * RFC 3066 language code for the text track generated for CEA-708 captions track 2.
         */
        captionsTextTrack2LanguageCode: string;
        /**
         * (default: false)
         * If a segment's video track is shorter than its audio track by > min(maxSeekHole, maxBufferHole), extend the final video frame's duration to match the audio track's duration.
         * This helps playback continue in certain cases that might otherwise get stuck.
         */
        stretchShortVideoTrack: boolean;
        /**
         * (default: 1)
         * Browsers are really strict about audio frames timings. They usually play audio frames one after the other, regardless of
         * the timestamps advertised in the fmp4. If audio timestamps are not consistent (consecutive audio frames too close or too far
         * from each other), audio will easily drift. hls.js is restamping audio frames so that the distance between consecutive audio
         * frame remains constant. If the distance is larger than the max allowed drift, hls.js will either
         *     * drop the next audio frame if distance is too small (if next audio frame timestamp is smaller than expected
         *       timestamp - max allowed drifter)
         *     * insert silent frames if distance is too big (next audio frame timestamp is bigger than expected
         *       timestamp + max allowed drift)
         * Parameter should be an integer representing the max number of audio frames allowed to drifter. Keep in mind that one
         * audio frame is 1024 audio samples (if using AAC), at 44.1 kHz, it gives 1024/44100 = 23ms.
         */
        maxAudioFramesDrift: number;
        /**
         * (default: true)
         * Whether or not to force having a key frame in the first AVC sample after a discontinuity.
         * If set to true, after a discontinuity, the AVC samples without any key frame will be dropped until finding one that contains a key frame.
         * If set to false, all AVC samples will be kept, which can help avoid holes in the stream.
         * Setting this parameter to false can also generate decoding weirdness when switching level or seeking.
         */
        forceKeyFrameOnDiscontinuity: boolean;
        /**
         * (default: 5.0)
         * Fast bitrate Exponential moving average half-life, used to compute average bitrate for Live streams.
         * Half of the estimate is based on the last abrEwmaFastLive seconds of sample history. Each of the sample is weighted by the fragment loading duration.
         * parameter should be a float greater than 0
         */
        abrEwmaFastLive: number;
        /**
         * (default: 9.0)
         * Slow bitrate Exponential moving average half-life, used to compute average bitrate for Live streams.
         * Half of the estimate is based on the last abrEwmaSlowLive seconds of sample history. Each of the sample is weighted by the fragment loading duration.
         * parameter should be a float greater than abrEwmaFastLive
         */
        abrEwmaSlowLive: number;
        /**
         * (default: 4.0)
         * Fast bitrate Exponential moving average half-life, used to compute average bitrate for VoD streams.
         * Half of the estimate is based on the last abrEwmaFastVoD seconds of sample history. Each of the sample is weighted by the fragment loading duration.
         * parameter should be a float greater than 0
         */
        abrEwmaFastVod: number;
        /**
         * (default: 15.0)
         * Slow bitrate Exponential moving average half-life, used to compute average bitrate for VoD streams.
         * Half of the estimate is based on the last abrEwmaSlowVoD seconds of sample history. Each of the sample is weighted by the fragment loading duration.
         * parameter should be a float greater than abrEwmaFastVoD
         */
        abrEwmaSlowVod: number;
        /**
         * (default: 500000)
         * Default bandwidth estimate in bits/second prior to collecting fragment bandwidth samples.
         * parameter should be a float
         */
        abrEwmaDefaultEstimate: number;
        /**
         * (default: 0.8)
         * Scale factor to be applied against measured bandwidth average, to determine whether we can stay on current or lower quality level.
         * If abrBandWidthFactor * bandwidth average < level.bitrate then ABR can switch to that level providing that it is equal or less than current level.
         */
        abrBandWidthFactor: number;
        /**
         * (default: 0.7)
         * Scale factor to be applied against measured bandwidth average, to determine whether we can switch up to a higher quality level.
         * If abrBandWidthUpFactor * bandwidth average < level.bitrate then ABR can switch up to that quality level.
         */
        abrBandWidthUpFactor: number;
        /**
         * (default: false)
         * max bitrate used in ABR by avg measured bitrate i.e. if bitrate signaled in variant manifest for a given level is 2Mb/s but average bitrate measured on this level is 2.5Mb/s,
         * then if config value is set to true, ABR will use 2.5 Mb/s for this quality level.
         */
        abrMaxWithRealBitrate: boolean;
        /**
         * (default: 0)
         * Return the capping/min bandwidth value that could be used by automatic level selection algorithm.
         * Useful when browser or tab of the browser is not in the focus and bandwidth drops
         */
        minAutoBitrate: number;
    }

    interface mediaAttachingData {
        video: HTMLVideoElement;
        mediaSource: string;
    }

    interface mediaAttachedData {
        video: HTMLVideoElement;
        mediaSource: string;
    }

    // interface mediaDetachingData {}

    // interface mediaDetachedData {}

    // interface bufferResetData {}

    interface bufferCodecsData {
        tracks: Tracks;
    }

    interface bufferCreatedData {
        tracks: Tracks;
    }

    interface bufferAppendingData {
        segment: {};
    }

    interface bufferAppendedData {
        parent: {};
        pending: number;
        timeRanges: {
            video: {};
            audio: {};
        };
    }

    // interface bufferEosData {}

    interface bufferFlushingData {
        startOffset: number;
        endOffset: number;
    }

    interface bufferFlushedData {
        startOffset: number;
        endOffset: number;
    }

    interface manifestLoadingData {
        url: string;
    }

    interface manifestLoadedData {
        levels: number[];
        audioTracks: number[];
        url: string;
        stats: Stats;
    }

    interface manifestParsedData {
        levels: number[];
        firstLevel: number;
    }

    interface levelLoadingData {
        url: string;
        level: number;
    }

    interface levelLoadedData {
        details: LevelDetails;
        levelId: number;
        stats: Stats;
    }

    interface levelUpdatedData {
        details: LevelDetails;
        level: number;
    }

    interface levelPtsUpdatedData {
        details: LevelDetails;
        level: number;
        drift: number;
    }

    interface levelSwitchingData {
        attrs: any;
        audioCodec: string;
        bitrate: number;
        fragmentError: boolean;
        height: number;
        level: number;
        loadError: number;
        name: string;
        unknownCodecs: string[];
        url: string[];
        urlId: number;
        videoCodec: string;
        width: number;
    }

    interface levelSwitchedData {
        level: number;
    }

    interface audioTracksUpdatedData {
        audioTracks: AudioTrack[];
    }

    interface audioTrackSwitchingData {
        id: string;
    }

    interface audioTrackSwitchedData {
        id: string;
    }

    interface audioTrackLoadingData {
        url: string;
        id: string;
    }

    interface audioTrackLoadedData {
        details: LevelDetails;
        id: string;
        stats: Stats;
    }

    interface subtitleTracksUpdatedData {
        subtitleTracks: {};
    }

    interface subtitleTrackSwitchData {
        id: string;
    }

    interface subtitleTrackLoadingData {
        url: string;
        id: string;
    }

    interface subtitleTrackLoadedData {
        details: LevelDetails;
        id: string;
        stats: Stats;
    }

    interface subtitleFragProcessedData {
        success: boolean;
        frag: Fragment;
    }

    interface initPtsFoundData {
        d: string;
        initPTS: number;
        frag: Fragment;
    }

    interface fragLoadingData {
        frag: Fragment;
    }

    interface fragLoadProgressData {
        frag: Fragment;
        stats: Stats;
    }

    interface fragLoadEmergencyAbortedData {
        frag: Fragment;
    }

    interface fragLoadedData {
        frag: Fragment;
        payload: any;
    }

    interface fragDecryptedData {
        id: string;
        frag: Fragment;
        payload: any;
        stats: Stats;
    }

    interface fragParsingInitSegmentData {
        id: string;
        frag: Fragment;
        moov: any;
        codecs: any;
    }

    interface fragParsingUserData {
        id: string;
        frag: Fragment;
        samples: any[];
    }

    interface fragParsingMetadata {
        id: string;
        frag: Fragment;
        samples: any[];
    }

    interface fragParsingData {
        id: string;
        frag: Fragment;
        moof: any;
        mdat: any;
        startPTS: number;
        endPTS: number;
        startDTS: number;
        endDTS: number;
        type: string;
        nb: number;
    }

    interface fragParsedData {
        id: string;
        frag: Fragment;
    }

    interface fragBufferedData {
        id: string;
        frag: Fragment;
        stats: Stats;
    }

    interface fragChangedData {
        id: string;
        frag: Fragment;
    }

    interface fpsDropData {
        currentDropped: number;
        currentDecoded: number;
        totalDroppedFragmes: number;
    }

    interface fpsDropLevelCappingData {
        level: Level;
        droppedLevel: Level;
    }

    interface errorData {
        type: string;
        details: string;
        fatal: boolean;
        frag?: Fragment;
        networkDetails?: XMLHttpRequest;
        response?: LoaderError;
        context?: LoaderContext;
        levelRetry?: boolean;
        url?: string;
        loader?: Loader;
        buffer?: number;
    }

    // interface destroyingData {}

    interface keyLoadingData {
        frag: Fragment;
    }

    interface keyLoadedData {
        frag: Fragment;
    }

    interface streamStateTransitionData {
        previousState: any;
        nextState: any;
    }

    interface LoaderConfig {
        /**
         * Max number of load retries
         */
        maxRetry: number;
        /**
         * Timeout after which `onTimeOut` callback will be triggered (if loading is still not finished after that delay)
         */
        timeout: number;
        /**
         * Delay between an I/O error and following connection retry (ms). This to avoid spamming the server
         */
        retryDelay: number;
        /**
         * max connection retry delay (ms)
         */
        maxRetryDelay: number;
    }

    interface LoaderResponse {
        url: string;
        data: string | ArrayBuffer;
    }

    interface LoaderError {
        /**
         * error code
         */
        code: number;
        /**
         *  error description
         */
        text: string;
    }

    interface LoaderContext {
        /**
         * target URL
         */
        url: string;
        /**
         * loader response type (arraybuffer or default response type for playlist)
         */
        responseType: string;
        /**
         * start byte range offset
         */
        rangeStart?: number;
        /**
         * end byte range offset
         */
        rangeEnd?: number;
        /**
         * true if onProgress should report partial chunk of loaded content
         */
        progressData?: boolean;
        /**
         * fragment object
         */
        frag: Fragment;
        /**
         * request type
         * - level, manifest
         */
        type: string;
        /**
         * level id
         */
        level: number;
    }

    interface LoaderStats {
        /**
         * performance.now() just after load() has been called
         */
        trequest: number;
        /**
         * performance.now() of first received byte
         */
        tfirst: number;
        /**
         * performance.now() on load complete
         */
        tload: number;
        /**
         * number of loaded bytes
         */
        loaded: number;
        /**
         * download bandwitdh in bit/s
         */
        bw: number;
        /**
         * total nb of bytes
         */
        total: number;
    }

    interface LoaderCallbacks {
        onSuccess(
            response: LoaderResponse,
            stats: LoaderStats,
            context: LoaderContext
        ): void;
        onProgress(
            stats: LoaderStats,
            context: LoaderContext,
            data: string | ArrayBuffer
        ): void;
        onError(error: LoaderError, context: LoaderContext): void;
        onTimeout(stats: LoaderStats, context: LoaderContext): void;
    }
}

declare class Hls {
    /**
     * override Hls default configuration
     * this configuration will be applied by default to all instances
     */
    static DefaultConfig: Hls.Config;
    /**
     * returns hls.js dist version number
     */
    static version: string;
    /**
     * checks whether your browser is supporting MediaSource Extensions
     */
    static isSupported(): boolean;

    /**
     * Hls events
     */
    static Events: {
        /**
         * fired to attach Media to hls instance
         * data: { video , mediaSource }
         */
        MEDIA_ATTACHING: K_MEDIA_ATTACHING;
        /**
         * fired when Media has been succesfully attached to hls instance
         * data: { video , mediaSource }
         */
        MEDIA_ATTACHED: K_MEDIA_ATTACHED;
        /**
         * fired before detaching Media from hls instance
         * data: { }
         */
        MEDIA_DETACHING: K_MEDIA_DETACHING;
        /**
         * fired when Media has been detached from hls instance
         * data: { }
         */
        MEDIA_DETACHED: K_MEDIA_DETACHED;
        /**
         * fired when the buffer is going to be reset
         * data: { }
         */
        BUFFER_RESET: K_BUFFER_RESET;
        /**
         * fired when we know about the codecs that we need buffers for to push into
         * data: { tracks : { container, codec, levelCodec, initSegment, metadata } }
         */
        BUFFER_CODECS: K_BUFFER_CODECS;
        /**
         * fired when sourcebuffers have been created
         * data: { tracks: tracks }
         */
        BUFFER_CREATED: K_BUFFER_CREATED;
        /**
         * fired when we append a segment to the buffer
         * data: { segment: segment object }
         */
        BUFFER_APPENDING: K_BUFFER_APPENDING;
        /**
         * fired when we are done with appending a media segment to the buffer
         * data: { parent : segment parent that triggered BUFFER_APPENDING, pending : nb of segments waiting for appending for this segment parent }
         */
        BUFFER_APPENDED: K_BUFFER_APPENDED;
        /**
         * fired when the stream is finished and we want to notify the media buffer that there will be no more data
         * data: { }
         */
        BUFFER_EOS: K_BUFFER_EOS;
        /**
         * fired when the media buffer should be flushed
         * data: { }
         */
        BUFFER_FLUSHING: K_BUFFER_FLUSHING;
        /**
         * fired when the media buffer has been flushed
         * data: { }
         */
        BUFFER_FLUSHED: K_BUFFER_FLUSHED;
        /**
         * fired to signal that a manifest loading starts
         * data: { url : manifestURL }
         */
        MANIFEST_LOADING: K_MANIFEST_LOADING;
        /**
         * fired after manifest has been loaded
         * data: { levels : [available quality levels] , audioTracks : [ available audio tracks], url : manifestURL, stats : { trequest, tfirst, tload, mtime}}
         */
        MANIFEST_LOADED: K_MANIFEST_LOADED;
        /**
         * fired after manifest has been parsed
         * data: { levels : [ available quality levels ], firstLevel : index of first quality level appearing in Manifest }
         */
        MANIFEST_PARSED: K_MANIFEST_PARSED;
        /**
         * fired when a level playlist loading starts
         * data: { url : level URL, level : id of level being loaded }
         */
        LEVEL_LOADING: K_LEVEL_LOADING;
        /**
         * fired when a level playlist loading finishes
         * data: { details : levelDetails object, levelId : id of loaded level, stats : { trequest, tfirst, tload, mtime } }
         */
        LEVEL_LOADED: K_LEVEL_LOADED;
        /**
         * fired when a level's details have been updated based on previous details, after it has been loaded
         * data: { details : levelDetails object, level : id of updated level }
         */
        LEVEL_UPDATED: K_LEVEL_UPDATED;
        /**
         * fired when a level's PTS information has been updated after parsing a fragment
         * data: { details: levelDetails object, level : id of updated level, drift: PTS drift observed when parsing last fragment }
         */
        LEVEL_PTS_UPDATED: K_LEVEL_PTS_UPDATED;
        /**
         * fired when a level switch is requested
         * data: { level: Level }
         */
        LEVEL_SWITCHING: K_LEVEL_SWITCHING;
        /**
         * fired when a level switch is effective
         * data: { level: level object }
         */
        LEVEL_SWITCHED: K_LEVEL_SWITCHED;
        /**
         * fired to notify that audio track lists has been updated
         * data: { audioTracks : audioTracks }
         */
        AUDIO_TRACKS_UPDATED: K_AUDIO_TRACKS_UPDATED;
        /**
         * fired when an audio track switch occurs. deprecated in favor AUDIO_TRACK_SWITCHING
         * data: { id : audio track id }
         */
        AUDIO_TRACK_SWITCH: K_AUDIO_TRACK_SWITCH;
        /**
         * fired when an audio track switching is requested
         * data: { id : audio track id }
         */
        AUDIO_TRACK_SWITCHING: K_AUDIO_TRACK_SWITCHING;
        /**
         * fired when an audio track switch actually occurs
         * data: { id : audio track id }
         */
        AUDIO_TRACK_SWITCHED: K_AUDIO_TRACK_SWITCHED;
        /**
         * fired when an audio track loading starts
         * data: { url : audio track URL, id : audio track id }
         */
        AUDIO_TRACK_LOADING: K_AUDIO_TRACK_LOADING;
        /**
         * fired when an audio track loading finishes
         * data: { details : levelDetails object, id : audio track id, stats : { trequest, tfirst, tload, mtime } }
         */
        AUDIO_TRACK_LOADED: K_AUDIO_TRACK_LOADED;
        /**
         * fired to notify that subtitle track lists has been updated
         * data: { subtitleTracks : subtitleTracks }
         */
        SUBTITLE_TRACKS_UPDATED: K_SUBTITLE_TRACKS_UPDATED;
        /**
         * fired when an subtitle track switch occurs
         * data: { id : subtitle track id }
         */
        SUBTITLE_TRACK_SWITCH: K_SUBTITLE_TRACK_SWITCH;
        /**
         * fired when a subtitle track loading starts
         * data: { url : subtitle track URL, id : subtitle track id }
         */
        SUBTITLE_TRACK_LOADING: K_SUBTITLE_TRACK_LOADING;
        /**
         * fired when a subtitle track loading finishes
         * data: { details : levelDetails object, id : subtitle track id, stats : { trequest, tfirst, tload, mtime } }
         */
        SUBTITLE_TRACK_LOADED: K_SUBTITLE_TRACK_LOADED;
        /**
         * fired when a subtitle fragment has been processed
         * data: { success : boolean, frag : the processed frag }
         */
        SUBTITLE_FRAG_PROCESSED: K_SUBTITLE_FRAG_PROCESSED;
        /**
         * fired when a decryption key loading starts
         * data: { frag: fragment object }
         */
        KEY_LOADING: K_KEY_LOADING;
        /**
         * fired when a decryption key loading is completed
         * data: { frag: fragment object }
         */
        KEY_LOADED: K_KEY_LOADED;
        /**
         * fired when first timestamp has been found
         * data: { id: demuxer id, frag: fragment object, initPTS: initPTS }
         */
        INIT_PTS_FOUND: K_INIT_PTS_FOUND;
        /**
         * fired when a fragment loading starts
         * data: { frag : fragment object }
         */
        FRAG_LOADING: K_FRAG_LOADING;
        /**
         * fired when a fragment load is in progress
         * data: { frag : fragment object with frag.loaded=stats.loaded, stats : { trequest, tfirst, loaded, total } }
         */
        FRAG_LOAD_PROGRESS: K_FRAG_LOAD_PROGRESS;
        /**
         * identifier for fragment load aborting for emergency switch down
         * data: { frag: fragment object }
         */
        FRAG_LOAD_EMERGENCY_ABORTED: K_FRAG_LOAD_EMERGENCY_ABORTED;
        /**
         * fired when a fragment loading is completed
         * data: { frag : fragment object, payload : fragment payload, stats : { trequest, tfirst, tload, length}}
         */
        FRAG_LOADED: K_FRAG_LOADED;
        /**
         * fired when a fragment decryption is completed
         * data: { id: demuxer id, frag: fragment object, stats: { tstart, tdecrypt } }
         */
        FRAG_DECRYPTED: K_FRAG_DECRYPTED;
        /**
         * fired when Init Segment has been extracted from fragment
         * data: { id: demuxer id, moov : moov MP4 box, codecs : codecs found while parsing fragment}
         */
        FRAG_PARSING_INIT_SEGMENT: K_FRAG_PARSING_INIT_SEGMENT;
        /**
         * fired when parsing sei text is completed
         * data: { id : demuxer id, frag: fragment object, samples : [ sei samples pes ] }
         */
        FRAG_PARSING_USERDATA: K_FRAG_PARSING_USERDATA;
        /**
         * fired when parsing id3 is completed
         * data: { id: demuxer id, samples : [ id3 pes - pts and dts timestamp are relative, values are in seconds]}
         */
        FRAG_PARSING_METADATA: K_FRAG_PARSING_METADATA;
        /**
         * fired when moof/mdat have been extracted from fragment
         * data: { id: demuxer id,
         *        moof : moof MP4 box,
         *        mdat : mdat MP4 box,
         *        startPTS : PTS of first sample,
         *        endPTS : PTS of last sample,
         *        startDTS : DTS of first sample,
         *        endDTS : DTS of last sample,
         *        type : stream type (audio or video),
         *        nb : number of samples}
         */
        FRAG_PARSING_DATA: K_FRAG_PARSING_DATA;
        /**
         * fired when fragment parsing is completed
         * data: { id: demuxer id}
         */
        FRAG_PARSED: K_FRAG_PARSED;
        /**
         * fired when fragment remuxed MP4 boxes have all been appended into SourceBuffer
         * data: { id: demuxer id, frag : fragment object, stats : { trequest, tfirst, tload, tparsed, tbuffered, length} }
         */
        FRAG_BUFFERED: K_FRAG_BUFFERED;
        /**
         * fired when fragment matching with current video position is changing
         * data: { frag : fragment object }
         */
        FRAG_CHANGED: K_FRAG_CHANGED;
        /**
         * triggered when FPS drop in last monitoring period is higher than given threshold
         * data: { curentDropped : nb of dropped frames in last monitoring period,
         *         currentDecoded : nb of decoded frames in last monitoring period,
         *         totalDropped : total dropped frames on this video element }
         */
        FPS_DROP: K_FPS_DROP;
        /**
         * triggered when FPS drop triggers auto level capping
         * data: { level: suggested new auto level capping by fps controller, droppedLevel : level has to much dropped frame will be restricted }
         */
        FPS_DROP_LEVEL_CAPPING: K_FPS_DROP_LEVEL_CAPPING;
        /**
         *  Identifier for an error event
         * data: { type : error type, details : error details, fatal : is error fatal or not, other error specific data }
         */
        ERROR: K_ERROR;
        /**
         * fired when hls.js instance starts destroying. Different from MEDIA_DETACHED as one could want to detach and reattach a video to the instance of hls.js to handle mid-rolls for example.
         * data: { }
         */
        DESTROYING: K_DESTROYING;
        /**
         * fired upon stream controller state transitions
         * data: { previousState, nextState }
         */
        STREAM_STATE_TRANSITION: K_STREAM_STATE_TRANSITION;
    };
    /**
     * Hls error types
     */
    static ErrorTypes: {
        /**
         * Identifier for a network error (loading error / timeout ...)
         */
        NETWORK_ERROR: K_NETWORK_ERROR;
        /**
         * Identifier for a media Error (video/parsing/mediasource error)
         */
        MEDIA_ERROR: K_MEDIA_ERROR;
        /**
         * EME (encrypted media extensions) errors
         */
        KEY_SYSTEM_ERROR: K_KEY_SYSTEM_ERROR;
        /**
         * Identifier for a mux Error (demuxing/remuxing)
         */
        MUX_ERROR: K_MUX_ERROR;
        /**
         * Identifier for all other errors
         */
        OTHER_ERROR: K_OTHER_ERROR;
    };
    /**
     * Hls error details
     */
    static ErrorDetails: {
        // NETWORK_ERRORS //
        /**
         * raised when manifest loading fails because of a network error
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.MANIFEST_LOAD_ERROR, fatal : true, url : manifest URL, response : { code: error code, text: error text }, loader : URL loader }
         */
        MANIFEST_LOAD_ERROR: K_MANIFEST_LOAD_ERROR;
        /**
         * raised when manifest loading fails because of a timeout
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT, fatal : true, url : manifest URL, loader : URL loader }
         */
        MANIFEST_LOAD_TIMEOUT: K_MANIFEST_LOAD_TIMEOUT;
        /**
         * raised when manifest parsing failed to find proper content
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.MANIFEST_PARSING_ERROR, fatal : true, url : manifest URL, reason : parsing error reason }
         */
        MANIFEST_PARSING_ERROR: K_MANIFEST_PARSING_ERROR;
        /**
         * raised when level loading fails because of a network error
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.LEVEL_LOAD_ERROR, fatal : true, url : level URL, response : { code: error code, text: error text }, loader : URL loader }
         */
        LEVEL_LOAD_ERROR: K_LEVEL_LOAD_ERROR;
        /**
         * raised when level loading fails because of a timeout
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.LEVEL_LOAD_TIMEOUT, fatal : true, url : level URL, loader : URL loader }
         */
        LEVEL_LOAD_TIMEOUT: K_LEVEL_LOAD_TIMEOUT;
        /**
         * raised when audio track loading fails because of a network error
         * data: { type: NETWORK_ERROR, details: Hls.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, fatal: false, url: audio URL, loader: URL loader }
         */
        AUDIO_TRACK_LOAD_ERROR: K_AUDIO_TRACK_LOAD_ERROR;
        /**
         * raised when audio track loading fails because of a timeout
         * data: { type: NETWORK_ERROR, details: Hls.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT, fatal: false, url: audio URL, response: { code: error code, text: error text }, loader: URL loader }
         */
        AUDIO_TRACK_LOAD_TIMEOUT: K_AUDIO_TRACK_LOAD_TIMEOUT;
        /**
         * raised when fragment loading fails because of a network error
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.FRAG_LOAD_ERROR, fatal : true or false, frag : fragment object, response : { code: error code, text: error text } }
         */
        FRAG_LOAD_ERROR: K_FRAG_LOAD_ERROR;
        /**
         * raised when fragment loading fails because of a timeout
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal : true or false, frag : fragment object }
         */
        FRAG_LOAD_TIMEOUT: K_FRAG_LOAD_TIMEOUT;
        /**
         * raised when decrypt key loading fails because of a network error
         * data: { type: NETWORK_ERROR, details: Hls.ErrorDetails.KEY_LOAD_ERROR, fatal: false, frag: fragment object }
         */
        KEY_LOAD_ERROR: K_KEY_LOAD_ERROR;
        /**
         * raised when decrypt key loading fails because of timeout
         * data: { type: NETWORK_EROR, details: Hls.ErrorDetails.KEY_LOAD_TIMEOUT, fatal: true, frag: fragment object }
         */
        KEY_LOAD_TIMEOUT: K_KEY_LOAD_TIMEOUT;

        // MEDIA_ERRORS //
        /**
         * raised when manifest only contains quality level with codecs incompatible with MediaSource Engine.
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal : true, url : manifest URL }
         */
        MANIFEST_INCOMPATIBLE_CODECS_ERROR: K_MANIFEST_INCOMPATIBLE_CODECS_ERROR;
        /**
         * raised upon detection of same fragment being requested in loop
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR, fatal : true or false, frag : fragment object }
         */
        FRAG_LOOP_LOADING_ERROR: K_FRAG_LOOP_LOADING_ERROR;
        /**
         * raised when fragment decryption fails
         * data: { type: MEDIA_ERROR, details: Hls.ErrorDetails.FRAG_DECRYPT_ERROR, fatal: true, reason: failure reason }
         */
        FRAG_DECRYPT_ERROR: K_FRAG_DECRYPT_ERROR;
        /**
         * raised when fragment parsing fails
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.FRAG_PARSING_ERROR, fatal : true or false, reason : failure reason }
         */
        FRAG_PARSING_ERROR: K_FRAG_PARSING_ERROR;
        /**
         *  raised when MediaSource fails to add new sourceBuffer
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.BUFFER_ADD_CODEC_ERROR, fatal : false, err : error raised by MediaSource, mimeType: mimeType on which the failure happened }
         */
        BUFFER_ADD_CODEC_ERROR: K_BUFFER_ADD_CODEC_ERROR;
        /**
         * raised when exception is raised while calling buffer append
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.BUFFER_APPEND_ERROR, fatal : true, frag : fragment object }
         */
        BUFFER_APPEND_ERROR: K_BUFFER_APPEND_ERROR;
        /**
         * raised when exception is raised during buffer appending
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.BUFFER_APPENDING_ERROR, fatal : false }
         */
        BUFFER_APPENDING_ERROR: K_BUFFER_APPENDING_ERROR;
        /**
         * raised when playback is stuck because buffer is running out of data
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.BUFFER_STALLED_ERROR, fatal : false }
         */
        BUFFER_STALLED_ERROR: K_BUFFER_STALLED_ERROR;
        /**
         * raised when no data can be appended anymore in media buffer because it is full.
         * This error is recovered automatically by performing a smooth level switching that empty buffers (without disrupting the playback) and reducing the max buffer length.
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.BUFFER_FULL_ERROR, fatal : false }
         */
        BUFFER_FULL_ERROR: K_BUFFER_FULL_ERROR;
        /**
         * raised after hls.js seeks over a buffer hole to unstuck the playback,
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.BUFFER_SEEK_OVER_HOLE, fatal : false, hole : hole duration }
         */
        BUFFER_SEEK_OVER_HOLE: K_BUFFER_SEEK_OVER_HOLE;
        /**
         * raised when playback is stuck although currentTime is in a buffered aread
         * data: { type: MEDIA_ERROR, details: Hls.ErrorDetails.BUFFERED_STALLED_ERROR, fatal: true }
         */
        BUFFER_NUDGE_ON_STALL: K_BUFFER_NUDGE_ON_STALL;

        // MUX_ERROR //
        /**
         * raised when memory allocation fails during remuxing
         * data: { type: MUX_ERROR, details: Hls.ErrorDetails.REMUX_ALLOC_ERROR, fatal: false, bytes: mdat size, reason: failure reason }
         */
        REMUX_ALLOC_ERROR: K_REMUX_ALLOC_ERROR;

        // OTHER_ERROR //
        /**
         * raised when level switching fails
         * data: { type : OTHER_ERROR, details : Hls.ErrorDetails.LEVEL_SWITCH_ERROR, fatal : false, level : failed level index, reason : failure reason }
         */
        LEVEL_SWITCH_ERROR: K_LEVEL_SWITCH_ERROR;
        /**
         * raised when an exception occurs in an internal hls.js event handler
         * data: { type: OTHER_ERROR, details: Hls.ErrorDetails.INTERNAL_EXCEPTION, fatal: true or false, event: event object or string, error: { message: error message } }
         */
        INTERNAL_EXCEPTION: K_INTERNAL_EXCEPTION;
    };
    /**
     * Constructor. Can be provided an HlsConfig object as default properties and or overrides
     */
    constructor(config?: Partial<Hls.Config>);
    /**
     * return array of available quality levels
     */
    readonly levels: Hls.Level[];
    /**
     * get: return current playback quality level
     * set:  trigger an immediate quality level switch to new quality level
     * this will pause the video if it was playing, flush the whole buffer,
     * and fetch fragment matching with current position and requested quality level
     * then resume the video if needed once fetched fragment will have been buffered
     *
     * set to -1 for automatic level selection
     */
    currentLevel: number;
    /**
     * capping/max level (index of level) that could be used by ABR Controller. Defaults to -1
     * which means no limit
     * set: max level value that could be used by the ABR Controller
     */
    autoLevelCapping: number;
    /**
     * return start level index (level of first fragment that will be played back)
     *      if not overrided by user: first level appearing in manifest will be used as start level
     *      if -1: automatic start level selection, playback will start from level matching download bandwidth (determined from download of first segment)
     *
     *  default valus is hls.firstLevel
     */
    startLevel: number;
    /**
     * get: Return the bound videoElement from the hls instance
     */
    readonly media?: HTMLVideoElement | null;
    /**
     *  hls.js config
     */
    config: Hls.Config;
    /**
     * get: return next playback quality level (playback quality level for next buffered fragment)
     * return -1 if next fragment not buffered yet
     * set: trigger a quality level switch for next fragment
     * this could eventually flush already buffered next fragment
     *
     * set to -1 for automatic level selection
     */
    nextLevel: number;
    /**
     * get: return last loaded fragment quality level
     * set: quality level for next loaded fragment
     * set to -1 for automatic level selection
     */
    loadLevel: number;
    /**
     * get: return quality level that will be used to load next fragment
     * set: force quality level for next loaded fragment
     * quality level will be forced only for that fragment
     * after a fragment at this quality level has been loaded, hls.loadLevel will prevail
     */
    nextLoadLevel: number;
    /**
     * first level index (index of first level appearing in Manifest. it is usually defined as start level hint for player)
     */
    firstLevel: number;
    /**
     * array of audio tracks exposed in manifest
     */
    readonly audioTracks: AudioTrack[];
    /**
     * get: returns audio track id
     * set: sets audio track id (returned by)
     */
    audioTrack: number;
    /**
     * position of live sync point (ie edge of live position minus safety delay defined by hls.config.liveSyncDuration)
     */
    readonly liveSyncPosition: number;
    /**
     * get : array of subtitle tracks exposed in manifest
     */
    readonly subtitleTracks: any[];
    /**
     * get/set : subtitle track id (returned by).
     * Returns -1 if no track is visible.
     * Set to -1 to hide all subtitle tracks.
     */
    subtitleTrack: number;
    /**
     * (default: false)
     * get/set : if set to true the active subtitle track mode will be set to showing and the browser will display the active subtitles.
     * If set to false, the mode will be set to hidden.
     */
    subtitleDisplay: boolean;
    /**
     * calling this method will:
     *      bind videoElement and hls instances
     *      create MediaSource and set it as video source
     *      once MediaSource object is successfully created, MEDIA_ATTACHED event will be fired
     */
    attachMedia(videoElement: HTMLVideoElement): void;
    /**
     * calling this method will:
     *      unbind VideoElement from hls instance
     *      signal the end of the stream on MediaSource
     *      reset video source ( video.src = '' )
     */
    detachMedia(): void;
    /**
     * tell whether auto level selection is enabled or not
     */
    readonly autoLevelEnabled: boolean;
    /**
     * loads provided url as media source
     */
    loadSource(source: string): void;
    /**
     * by default, hls.js will automatically start loading quality level playlists, and fragments after Hls.Events.MANIFEST_PARSED event has been triggered (and video element has been attached)
     * however if config.autoStartLoad is set to false, hls.startLoad() needs to be called to manually start playlist and fragments loading
     *
     * start/restart playlist/fragment loading. this is only effective if MANIFEST_PARSED event has been triggered and video element has been attached to hls object
     * startPosition is the initial position in the playlist
     * ff startPosition is not set to -1, it allows to override default startPosition to the one you want
     * (it will bypass hls.config.liveSync* config params for Live for example, so that user can start playback from whatever position)
     */
    startLoad(startPosition?: number): void;
    /**
     * stop playlist/fragment loading. could be resumed later on by calling hls.startLoad()
     */
    stopLoad(): void;
    /**
     * should be invoked to recover media error.
     */
    recoverMediaError(): void;
    /**
     * if media error are still raised after calling hls.recoverMediaError(), calling this method, could be useful to workaround audio codec mismatch.
     * the workflow should be:
     *  on First Media Error : call hls.recoverMediaError()
     *  if another Media Error is raised 'quickly' after this first Media Error : first call hls.swapAudioCodec(), then call hls.recoverMediaError()
     */
    swapAudioCodec(): void;
    /**
     * should be called to free used resources and destroy hls context
     */
    destroy(): void;
    /**
     * hls.js event listener
     */
    on(event: K_MEDIA_ATTACHING, callback: (event: K_MEDIA_ATTACHING, data: Hls.mediaAttachedData) => void): void;
    on(event: K_MEDIA_ATTACHED, callback: (event: K_MEDIA_ATTACHED, data: Hls.mediaAttachedData) => void): void;
    on(event: K_MEDIA_DETACHING, callback: (event: K_MEDIA_DETACHING, data: {}) => void): void;
    on(event: K_MEDIA_DETACHED, callback: (event: K_MEDIA_DETACHED, data: {}) => void): void;
    on(event: K_BUFFER_RESET, callback: (event: K_BUFFER_RESET, data: {}) => void): void;
    on(event: K_BUFFER_CODECS, callback: (event: K_BUFFER_CODECS, data: Hls.bufferCodecsData) => void): void;
    on(event: K_BUFFER_CREATED, callback: (event: K_BUFFER_CREATED, data: Hls.bufferCreatedData) => void): void;
    on(event: K_BUFFER_APPENDING, callback: (event: K_BUFFER_APPENDING, data: Hls.bufferAppendingData) => void): void;
    on(event: K_BUFFER_APPENDED, callback: (event: K_BUFFER_APPENDED, data: Hls.bufferAppendedData) => void): void;
    on(event: K_BUFFER_EOS, callback: (event: K_BUFFER_EOS, data: {}) => void): void;
    on(event: K_BUFFER_FLUSHING, callback: (event: K_BUFFER_FLUSHING, data: Hls.bufferFlushingData) => void): void;
    on(event: K_BUFFER_FLUSHED, callback: (event: K_BUFFER_FLUSHED, data: Hls.bufferFlushedData) => void): void;
    on(event: K_MANIFEST_LOADING, callback: (event: K_MANIFEST_LOADING, data: Hls.manifestLoadingData) => void): void;
    on(event: K_MANIFEST_LOADED, callback: (event: K_MANIFEST_LOADED, data: Hls.manifestLoadedData) => void): void;
    on(event: K_MANIFEST_PARSED, callback: (event: K_MANIFEST_PARSED, data: Hls.manifestParsedData) => void): void;
    on(event: K_LEVEL_SWITCHING, callback: (event: K_LEVEL_SWITCHING, data: Hls.levelSwitchingData) => void): void;
    on(event: K_LEVEL_SWITCHED, callback: (event: K_LEVEL_SWITCHED, data: Hls.levelSwitchedData) => void): void;
    on(event: K_LEVEL_LOADING, callback: (event: K_LEVEL_LOADING, data: Hls.levelLoadingData) => void): void;
    on(event: K_LEVEL_LOADED, callback: (event: K_LEVEL_LOADED, data: Hls.levelLoadedData) => void): void;
    on(event: K_LEVEL_UPDATED, callback: (event: K_LEVEL_UPDATED, data: Hls.levelUpdatedData) => void): void;
    on(event: K_LEVEL_PTS_UPDATED, callback: (event: K_LEVEL_PTS_UPDATED, data: Hls.levelPtsUpdatedData) => void): void;
    on(event: K_AUDIO_TRACKS_UPDATED, callback: (event: K_AUDIO_TRACKS_UPDATED, data: Hls.audioTracksUpdatedData) => void): void;
    on(event: K_AUDIO_TRACK_SWITCHING, callback: (event: K_AUDIO_TRACK_SWITCHING, data: Hls.audioTrackSwitchingData) => void): void;
    on(event: K_AUDIO_TRACK_SWITCHED, callback: (event: K_AUDIO_TRACK_SWITCHED, data: Hls.audioTrackSwitchedData) => void): void;
    on(event: K_AUDIO_TRACK_LOADING, callback: (event: K_AUDIO_TRACK_LOADING, data: Hls.audioTrackLoadingData) => void): void;
    on(event: K_AUDIO_TRACK_LOADED, callback: (event: K_AUDIO_TRACK_LOADED, data: Hls.audioTrackLoadedData) => void): void;
    on(event: K_SUBTITLE_TRACKS_UPDATED, callback: (event: K_SUBTITLE_TRACKS_UPDATED, data: Hls.subtitleTracksUpdatedData) => void): void;
    on(event: K_SUBTITLE_TRACK_SWITCH, callback: (event: K_SUBTITLE_TRACK_SWITCH, data: Hls.subtitleTrackSwitchData) => void): void;
    on(event: K_SUBTITLE_TRACK_LOADING, callback: (event: K_SUBTITLE_TRACK_LOADING, data: Hls.subtitleTrackLoadingData) => void): void;
    on(event: K_SUBTITLE_TRACK_LOADED, callback: (event: K_SUBTITLE_TRACK_LOADED, data: Hls.subtitleTrackLoadedData) => void): void;
    on(event: K_SUBTITLE_FRAG_PROCESSED, callback: (event: K_SUBTITLE_FRAG_PROCESSED, data: Hls.subtitleFragProcessedData) => void): void;
    on(event: K_INIT_PTS_FOUND, callback: (event: K_INIT_PTS_FOUND, data: Hls.initPtsFoundData) => void): void;
    on(event: K_FRAG_LOADING, callback: (event: K_FRAG_LOADING, data: Hls.fragLoadingData) => void): void;
    on(event: K_FRAG_LOAD_PROGRESS, callback: (event: K_FRAG_LOAD_PROGRESS, data: Hls.fragLoadProgressData) => void): void;
    on(event: K_FRAG_LOAD_EMERGENCY_ABORTED, callback: (event: K_FRAG_LOAD_EMERGENCY_ABORTED, data: Hls.fragLoadEmergencyAbortedData) => void): void;
    on(event: K_FRAG_LOADED, callback: (event: K_FRAG_LOADED, data: Hls.fragLoadedData) => void): void;
    on(event: K_FRAG_DECRYPTED, callback: (event: K_FRAG_DECRYPTED, data: Hls.fragDecryptedData) => void): void;
    on(event: K_FRAG_PARSING_INIT_SEGMENT, callback: (event: K_FRAG_PARSING_INIT_SEGMENT, data: Hls.fragParsingInitSegmentData) => void): void;
    on(event: K_FRAG_PARSING_USERDATA, callback: (event: K_FRAG_PARSING_USERDATA, data: Hls.fragParsingUserData) => void): void;
    on(event: K_FRAG_PARSING_METADATA, callback: (event: K_FRAG_PARSING_METADATA, data: Hls.fragParsingMetadata) => void): void;
    on(event: K_FRAG_PARSING_DATA, callback: (event: K_FRAG_PARSING_DATA, data: Hls.fragParsingData) => void): void;
    on(event: K_FRAG_PARSED, callback: (event: K_FRAG_PARSED, data: Hls.fragParsedData) => void): void;
    on(event: K_FRAG_BUFFERED, callback: (event: K_FRAG_BUFFERED, data: Hls.fragBufferedData) => void): void;
    on(event: K_FRAG_CHANGED, callback: (event: K_FRAG_CHANGED, data: Hls.fragChangedData) => void): void;
    on(event: K_FPS_DROP, callback: (event: K_FPS_DROP, data: Hls.fpsDropData) => void): void;
    on(event: K_FPS_DROP_LEVEL_CAPPING, callback: (event: K_FPS_DROP_LEVEL_CAPPING, data: Hls.fpsDropLevelCappingData) => void): void;
    on(event: K_ERROR, callback: (event: K_ERROR, data: Hls.errorData) => void): void;
    on(event: K_DESTROYING, callback: (event: K_DESTROYING, data: {}) => void): void;
    on(event: K_KEY_LOADING, callback: (event: K_KEY_LOADING, data: Hls.keyLoadingData) => void): void;
    on(event: K_KEY_LOADED, callback: (event: K_KEY_LOADED, data: Hls.keyLoadedData) => void): void;
    on(event: K_STREAM_STATE_TRANSITION, callback: (event: K_STREAM_STATE_TRANSITION, data: Hls.streamStateTransitionData) => void): void;
    /**
     * hls.js single event listener
     */
    once(event: K_MEDIA_ATTACHING, callback: (event: K_MEDIA_ATTACHING, data: Hls.mediaAttachedData) => void): void;
    once(event: K_MEDIA_ATTACHED, callback: (event: K_MEDIA_ATTACHED, data: Hls.mediaAttachedData) => void): void;
    once(event: K_MEDIA_DETACHING, callback: (event: K_MEDIA_DETACHING, data: {}) => void): void;
    once(event: K_MEDIA_DETACHED, callback: (event: K_MEDIA_DETACHED, data: {}) => void): void;
    once(event: K_BUFFER_RESET, callback: (event: K_BUFFER_RESET, data: {}) => void): void;
    once(event: K_BUFFER_CODECS, callback: (event: K_BUFFER_CODECS, data: Hls.bufferCodecsData) => void): void;
    once(event: K_BUFFER_CREATED, callback: (event: K_BUFFER_CREATED, data: Hls.bufferCreatedData) => void): void;
    once(event: K_BUFFER_APPENDING, callback: (event: K_BUFFER_APPENDING, data: Hls.bufferAppendingData) => void): void;
    once(event: K_BUFFER_APPENDED, callback: (event: K_BUFFER_APPENDED, data: Hls.bufferAppendedData) => void): void;
    once(event: K_BUFFER_EOS, callback: (event: K_BUFFER_EOS, data: {}) => void): void;
    once(event: K_BUFFER_FLUSHING, callback: (event: K_BUFFER_FLUSHING, data: Hls.bufferFlushingData) => void): void;
    once(event: K_BUFFER_FLUSHED, callback: (event: K_BUFFER_FLUSHED, data: Hls.bufferFlushedData) => void): void;
    once(event: K_MANIFEST_LOADING, callback: (event: K_MANIFEST_LOADING, data: Hls.manifestLoadingData) => void): void;
    once(event: K_MANIFEST_LOADED, callback: (event: K_MANIFEST_LOADED, data: Hls.manifestLoadedData) => void): void;
    once(event: K_MANIFEST_PARSED, callback: (event: K_MANIFEST_PARSED, data: Hls.manifestParsedData) => void): void;
    once(event: K_LEVEL_SWITCHING, callback: (event: K_LEVEL_SWITCHING, data: Hls.levelSwitchingData) => void): void;
    once(event: K_LEVEL_SWITCHED, callback: (event: K_LEVEL_SWITCHED, data: Hls.levelSwitchedData) => void): void;
    once(event: K_LEVEL_LOADING, callback: (event: K_LEVEL_LOADING, data: Hls.levelLoadingData) => void): void;
    once(event: K_LEVEL_LOADED, callback: (event: K_LEVEL_LOADED, data: Hls.levelLoadedData) => void): void;
    once(event: K_LEVEL_UPDATED, callback: (event: K_LEVEL_UPDATED, data: Hls.levelUpdatedData) => void): void;
    once(event: K_LEVEL_PTS_UPDATED, callback: (event: K_LEVEL_PTS_UPDATED, data: Hls.levelPtsUpdatedData) => void): void;
    once(event: K_AUDIO_TRACKS_UPDATED, callback: (event: K_AUDIO_TRACKS_UPDATED, data: Hls.audioTracksUpdatedData) => void): void;
    once(event: K_AUDIO_TRACK_SWITCHING, callback: (event: K_AUDIO_TRACK_SWITCHING, data: Hls.audioTrackSwitchingData) => void): void;
    once(event: K_AUDIO_TRACK_SWITCHED, callback: (event: K_AUDIO_TRACK_SWITCHED, data: Hls.audioTrackSwitchedData) => void): void;
    once(event: K_AUDIO_TRACK_LOADING, callback: (event: K_AUDIO_TRACK_LOADING, data: Hls.audioTrackLoadingData) => void): void;
    once(event: K_AUDIO_TRACK_LOADED, callback: (event: K_AUDIO_TRACK_LOADED, data: Hls.audioTrackLoadedData) => void): void;
    once(event: K_SUBTITLE_TRACKS_UPDATED, callback: (event: K_SUBTITLE_TRACKS_UPDATED, data: Hls.subtitleTracksUpdatedData) => void): void;
    once(event: K_SUBTITLE_TRACK_SWITCH, callback: (event: K_SUBTITLE_TRACK_SWITCH, data: Hls.subtitleTrackSwitchData) => void): void;
    once(event: K_SUBTITLE_TRACK_LOADING, callback: (event: K_SUBTITLE_TRACK_LOADING, data: Hls.subtitleTrackLoadingData) => void): void;
    once(event: K_SUBTITLE_TRACK_LOADED, callback: (event: K_SUBTITLE_TRACK_LOADED, data: Hls.subtitleTrackLoadedData) => void): void;
    once(event: K_SUBTITLE_FRAG_PROCESSED, callback: (event: K_SUBTITLE_FRAG_PROCESSED, data: Hls.subtitleFragProcessedData) => void): void;
    once(event: K_INIT_PTS_FOUND, callback: (event: K_INIT_PTS_FOUND, data: Hls.initPtsFoundData) => void): void;
    once(event: K_FRAG_LOADING, callback: (event: K_FRAG_LOADING, data: Hls.fragLoadingData) => void): void;
    once(event: K_FRAG_LOAD_PROGRESS, callback: (event: K_FRAG_LOAD_PROGRESS, data: Hls.fragLoadProgressData) => void): void;
    once(event: K_FRAG_LOAD_EMERGENCY_ABORTED, callback: (event: K_FRAG_LOAD_EMERGENCY_ABORTED, data: Hls.fragLoadEmergencyAbortedData) => void): void;
    once(event: K_FRAG_LOADED, callback: (event: K_FRAG_LOADED, data: Hls.fragLoadedData) => void): void;
    once(event: K_FRAG_DECRYPTED, callback: (event: K_FRAG_DECRYPTED, data: Hls.fragDecryptedData) => void): void;
    once(event: K_FRAG_PARSING_INIT_SEGMENT, callback: (event: K_FRAG_PARSING_INIT_SEGMENT, data: Hls.fragParsingInitSegmentData) => void): void;
    once(event: K_FRAG_PARSING_USERDATA, callback: (event: K_FRAG_PARSING_USERDATA, data: Hls.fragParsingUserData) => void): void;
    once(event: K_FRAG_PARSING_METADATA, callback: (event: K_FRAG_PARSING_METADATA, data: Hls.fragParsingMetadata) => void): void;
    once(event: K_FRAG_PARSING_DATA, callback: (event: K_FRAG_PARSING_DATA, data: Hls.fragParsingData) => void): void;
    once(event: K_FRAG_PARSED, callback: (event: K_FRAG_PARSED, data: Hls.fragParsedData) => void): void;
    once(event: K_FRAG_BUFFERED, callback: (event: K_FRAG_BUFFERED, data: Hls.fragBufferedData) => void): void;
    once(event: K_FRAG_CHANGED, callback: (event: K_FRAG_CHANGED, data: Hls.fragChangedData) => void): void;
    once(event: K_FPS_DROP, callback: (event: K_FPS_DROP, data: Hls.fpsDropData) => void): void;
    once(event: K_FPS_DROP_LEVEL_CAPPING, callback: (event: K_FPS_DROP_LEVEL_CAPPING, data: Hls.fpsDropLevelCappingData) => void): void;
    once(event: K_ERROR, callback: (event: K_ERROR, data: Hls.errorData) => void): void;
    once(event: K_DESTROYING, callback: (event: K_DESTROYING, data: {}) => void): void;
    once(event: K_KEY_LOADING, callback: (event: K_KEY_LOADING, data: Hls.keyLoadingData) => void): void;
    once(event: K_KEY_LOADED, callback: (event: K_KEY_LOADED, data: Hls.keyLoadedData) => void): void;
    once(event: K_STREAM_STATE_TRANSITION, callback: (event: K_STREAM_STATE_TRANSITION, data: Hls.streamStateTransitionData) => void): void;

    /**
     * remove hls.js event listener
     */
    off(event: string, callback: (...params: any[]) => void): void;
}

export as namespace Hls;
export = Hls;
