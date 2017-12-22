// Type definitions for hls.js 0.8
// Project: https://github.com/video-dev/hls.js
// Definitions by: John G. Gainfort, Jr. <https://github.com/jgainfort>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare class Loader {
    constructor(config: Hls.LoaderConfig)
    /**
     * Start retrieving content located at given URL (HTTP GET).
     */
    load(context: Hls.LoaderContext, config: Hls.LoaderConfig, callbacks: Hls.LoaderCallbacks): void;
    /**
     * Abort any loading in progress.
     */
    abort(): void;
    /**
     * Destroy loading context.
     */
    destroy(): void;
}

declare namespace Hls {
    /**
     * Hls events
     */
    namespace Events {
        /**
         * fired to attach Media to hls instance
         * data: { video , mediaSource }
         */
        const MEDIA_ATTACHING: string;
        /**
         * fired when Media has been succesfully attached to hls instance
         * data: { video , mediaSource }
         */
        const MEDIA_ATTACHED: string;
        /**
         * fired before detaching Media from hls instance
         * data: { }
         */
        const MEDIA_DETACHING: string;
        /**
         * fired when Media has been detached from hls instance
         * data: { }
         */
        const MEDIA_DETACHED: string;
        /**
         * fired when the buffer is going to be reset
         * data: { }
         */
        const BUFFER_RESET: string;
        /**
         * fired when we know about the codecs that we need buffers for to push into
         * data: { tracks : { container, codec, levelCodec, initSegment, metadata } }
         */
        const BUFFER_CODECS: string;
        /**
         * fired when sourcebuffers have been created
         * data: { tracks: tracks }
         */
        const BUFFER_CREATED: string;
        /**
         * fired when we append a segment to the buffer
         * data: { segment: segment object }
         */
        const BUFFER_APPENDING: string;
        /**
         * fired when we are done with appending a media segment to the buffer
         * data: { parent : segment parent that triggered BUFFER_APPENDING, pending : nb of segments waiting for appending for this segment parent }
         */
        const BUFFER_APPENDED: string;
        /**
         * fired when the stream is finished and we want to notify the media buffer that there will be no more data
         * data: { }
         */
        const BUFFER_EOS: string;
        /**
         * fired when the media buffer should be flushed
         * data: { }
         */
        const BUFFER_FLUSHING: string;
        /**
         * fired when the media buffer has been flushed
         * data: { }
         */
        const BUFFER_FLUSHED: string;
        /**
         * fired to signal that a manifest loading starts
         * data: { url : manifestURL }
         */
        const MANIFEST_LOADING: string;
        /**
         * fired after manifest has been loaded
         * data: { levels : [available quality levels] , audioTracks : [ available audio tracks], url : manifestURL, stats : { trequest, tfirst, tload, mtime}}
         */
        const MANIFEST_LOADED: string;
        /**
         * fired after manifest has been parsed
         * data: { levels : [ available quality levels ], firstLevel : index of first quality level appearing in Manifest }
         */
        const MANIFEST_PARSED: string;
        /**
         * fired when a level playlist loading starts
         * data: { url : level URL, level : id of level being loaded }
         */
        const LEVEL_LOADING: string;
        /**
         * fired when a level playlist loading finishes
         * data: { details : levelDetails object, levelId : id of loaded level, stats : { trequest, tfirst, tload, mtime } }
         */
        const LEVEL_LOADED: string;
        /**
         * fired when a level's details have been updated based on previous details, after it has been loaded
         * data: { details : levelDetails object, level : id of updated level }
         */
        const LEVEL_UPDATED: string;
        /**
         * fired when a level's PTS information has been updated after parsing a fragment
         * data: { details: levelDetails object, level : id of updated level, drift: PTS drift observed when parsing last fragment }
         */
        const LEVEL_PTS_UPDATED: string;
        /**
         * fired when a level switch is requested
         * data: { level: Level }
         */
        const LEVEL_SWITCHING: string;
        /**
         * fired when a level switch is effective
         * data: { level: level object }
         */
        const LEVEL_SWITCHED: string;
        /**
         * fired to notify that audio track lists has been updated
         * data: { audioTracks : audioTracks }
         */
        const AUDIO_TRACKS_UPDATED: string;
        /**
         * fired when an audio track switch occurs. deprecated in favor AUDIO_TRACK_SWITCHING
         * data: { id : audio track id }
         */
        const AUDIO_TRACK_SWTICH: string;
        /**
         * fired when an audio track switching is requested
         * data: { id : audio track id }
         */
        const AUDIO_TRACK_SWITCHING: string;
        /**
         * fired when an audio track switch actually occurs
         * data: { id : audio track id }
         */
        const AUDIO_TRACK_SWITCHED: string;
        /**
         * fired when an audio track loading starts
         * data: { url : audio track URL, id : audio track id }
         */
        const AUDIO_TRACK_LOADING: string;
        /**
         * fired when an audio track loading finishes
         * data: { details : levelDetails object, id : audio track id, stats : { trequest, tfirst, tload, mtime } }
         */
        const AUDIO_TRACK_LOADED: string;
        /**
         * fired to notify that subtitle track lists has been updated
         * data: { subtitleTracks : subtitleTracks }
         */
        const SUBTITLE_TRACKS_UPDATED: string;
        /**
         * fired when an subtitle track switch occurs
         * data: { id : subtitle track id }
         */
        const SUBTITLE_TRACK_SWITCH: string;
        /**
         * fired when a subtitle track loading starts
         * data: { url : subtitle track URL, id : subtitle track id }
         */
        const SUBTITLE_TRACK_LOADING: string;
        /**
         * fired when a subtitle track loading finishes
         * data: { details : levelDetails object, id : subtitle track id, stats : { trequest, tfirst, tload, mtime } }
         */
        const SUBTITLE_TRACK_LOADED: string;
        /**
         * fired when a subtitle fragment has been processed
         * data: { success : boolean, frag : the processed frag }
         */
        const SUBTITLE_FRAG_PROCESSED: string;
        /**
         * fired when a decryption key loading starts
         * data: { frag: fragment object }
         */
        const KEY_LOADING: string;
        /**
         * fired when a decryption key loading is completed
         * data: { frag: fragment object }
         */
        const KEY_LOADED: string;
        /**
         * fired when first timestamp has been found
         * data: { id: demuxer id, frag: fragment object, initPTS: initPTS }
         */
        const INIT_PTS_FOUND: string;
        /**
         * fired when a fragment loading starts
         * data: { frag : fragment object }
         */
        const FRAG_LOADING: string;
        /**
         * fired when a fragment load is in progress
         * data: { frag : fragment object with frag.loaded=stats.loaded, stats : { trequest, tfirst, loaded, total } }
         */
        const FRAG_LOAD_PROGRESS: string;
        /**
         * identifier for fragment load aborting for emergency switch down
         * data: { frag: fragment object }
         */
        const FRAG_LOAD_ERMERGENCY_ABORTED: string;
        /**
         * fired when a fragment loading is completed
         * data: { frag : fragment object, payload : fragment payload, stats : { trequest, tfirst, tload, length}}
         */
        const FRAG_LOADED: string;
        /**
         * fired when a fragment decryption is completed
         * data: { id: demuxer id, frag: fragment object, stats: { tstart, tdecrypt } }
         */
        const FRAG_DECRYPTED: string;
        /**
         * fired when Init Segment has been extracted from fragment
         * data: { id: demuxer id, moov : moov MP4 box, codecs : codecs found while parsing fragment}
         */
        const FRAG_PARSING_INIT_SEGMENT: string;
        /**
         * fired when parsing id3 is completed
         * data: { id: demuxer id, samples : [ id3 pes - pts and dts timestamp are relative, values are in seconds]}
         */
        const FRAG_PARSING_METADATA: string;
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
        const FRAG_PARSING_DATA: string;
        /**
         * fired when fragment parsing is completed
         * data: { id: demuxer id}
         */
        const FRAG_PARSED: string;
        /**
         * fired when fragment remuxed MP4 boxes have all been appended into SourceBuffer
         * data: { id: demuxer id, frag : fragment object, stats : { trequest, tfirst, tload, tparsed, tbuffered, length} }
         */
        const FRAG_BUFFERED: string;
        /**
         * fired when fragment matching with current video position is changing
         * data: { frag : fragment object }
         */
        const FRAG_CHANGED: string;
        /**
         * triggered when FPS drop in last monitoring period is higher than given threshold
         * data: { curentDropped : nb of dropped frames in last monitoring period,
         *         currentDecoded : nb of decoded frames in last monitoring period,
         *         totalDropped : total dropped frames on this video element }
         */
        const FPS_DROP: string;
        /**
         * triggered when FPS drop triggers auto level capping
         * data: { level: suggested new auto level capping by fps controller, droppedLevel : level has to much dropped frame will be restricted }
         */
        const FPS_DROP_LEVEL_CAPPING: string;
        /**
         *  Identifier for an error event
         * data: { type : error type, details : error details, fatal : is error fatal or not, other error specific data }
         */
        const ERROR: string;
        /**
         * fired when hls.js instance starts destroying. Different from MEDIA_DETACHED as one could want to detach and reattach a video to the instance of hls.js to handle mid-rolls for example.
         * data: { }
         */
        const DESTROYING: string;
        /**
         * fired upon stream controller state transitions
         * data: { previousState, nextState }
         */
        const STREAM_STATE_TRANSITION: string;
    }

    /**
     * Hls error details
     */
    namespace ErrorDetails {
        // NETWORK_ERRORS //
        /**
         * raised when manifest loading fails because of a network error
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.MANIFEST_LOAD_ERROR, fatal : true, url : manifest URL, response : { code: error code, text: error text }, loader : URL loader }
         */
        const MANIFEST_LOAD_ERROR: string;
        /**
         * raised when manifest loading fails because of a timeout
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT, fatal : true, url : manifest URL, loader : URL loader }
         */
        const MANIFEST_LOAD_TIMEOUT: string;
        /**
         * raised when manifest parsing failed to find proper content
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.MANIFEST_PARSING_ERROR, fatal : true, url : manifest URL, reason : parsing error reason }
         */
        const MANIFEST_PARSING_ERROR: string;
        /**
         * raised when level loading fails because of a network error
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.LEVEL_LOAD_ERROR, fatal : true, url : level URL, response : { code: error code, text: error text }, loader : URL loader }
         */
        const LEVEL_LOAD_ERROR: string;
        /**
         * raised when level loading fails because of a timeout
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.LEVEL_LOAD_TIMEOUT, fatal : true, url : level URL, loader : URL loader }
         */
        const LEVEL_LOAD_TIMEOUT: string;
        /**
         * raised when audio track loading fails because of a network error
         * data: { type: NETWORK_ERROR, details: Hls.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, fatal: false, url: audio URL, loader: URL loader }
         */
        const AUDIO_TRACK_LOAD_ERROR: string;
        /**
         * raised when audio track loading fails because of a timeout
         * data: { type: NETWORK_ERROR, details: Hls.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT, fatal: false, url: audio URL, response: { code: error code, text: error text }, loader: URL loader }
         */
        const AUDIO_TRACK_LOAD_TIMEOUT: string;
        /**
         * raised when fragment loading fails because of a network error
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.FRAG_LOAD_ERROR, fatal : true or false, frag : fragment object, response : { code: error code, text: error text } }
         */
        const FRAG_LOAD_ERROR: string;
        /**
         * raised when fragment loading fails because of a timeout
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal : true or false, frag : fragment object }
         */
        const FRAG_LOAD_TIMEOUT: string;
        /**
         * raised when decrypt key loading fails because of a network error
         * data: { type: NETWORK_ERROR, details: Hls.ErrorDetails.KEY_LOAD_ERROR, fatal: false, frag: fragment object }
         */
        const KEY_LOAD_ERROR: string;
        /**
         * raised when decrypt key loading fails because of timeout
         * data: { type: NETWORK_EROR, details: Hls.ErrorDetails.KEY_LOAD_TIMEOUT, fatal: true, frag: fragment object }
         */
        const KEY_LOAD_TIMEOUT: string;

        // MEDIA_ERRORS //
        /**
         * raised when manifest only contains quality level with codecs incompatible with MediaSource Engine.
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal : true, url : manifest URL }
         */
        const MANIFEST_INCOMPATIBLE_CODECS_ERROR: string;
        /**
         * raised upon detection of same fragment being requested in loop
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.FRAG_LOOP_LOADING_ERROR, fatal : true or false, frag : fragment object }
         */
        const FRAG_LOOP_LOADING_ERROR: string;
        /**
         * raised when fragment decryption fails
         * data: { type: MEDIA_ERROR, details: Hls.ErrorDetails.FRAG_DECRYPT_ERROR, fatal: true, reason: failure reason }
         */
        const FRAG_DECRYPT_ERROR: string;
        /**
         * raised when fragment parsing fails
         * data: { type : NETWORK_ERROR, details : Hls.ErrorDetails.FRAG_PARSING_ERROR, fatal : true or false, reason : failure reason }
         */
        const FRAG_PARSING_ERROR: string;
        /**
         *  raised when MediaSource fails to add new sourceBuffer
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.BUFFER_ADD_CODEC_ERROR, fatal : false, err : error raised by MediaSource, mimeType: mimeType on which the failure happened }
         */
        const BUFFER_ADD_CODEC_ERROR: string;
        /**
         * raised when exception is raised while calling buffer append
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.BUFFER_APPEND_ERROR, fatal : true, frag : fragment object }
         */
        const BUFFER_APPEND_ERROR: string;
        /**
         * raised when exception is raised during buffer appending
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.BUFFER_APPENDING_ERROR, fatal : false }
         */
        const BUFFER_APPENDING_ERROR: string;
        /**
         * raised when playback is stuck because buffer is running out of data
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.BUFFER_STALLED_ERROR, fatal : false }
         */
        const BUFFER_STALLED_ERROR: string;
        /**
         * raised when no data can be appended anymore in media buffer because it is full.
         * This error is recovered automatically by performing a smooth level switching that empty buffers (without disrupting the playback) and reducing the max buffer length.
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.BUFFER_FULL_ERROR, fatal : false }
         */
        const BUFFER_FULL_ERROR: string;
        /**
         * raised after hls.js seeks over a buffer hole to unstuck the playback,
         * data: { type : MEDIA_ERROR, details : Hls.ErrorDetails.BUFFER_SEEK_OVER_HOLE, fatal : false, hole : hole duration }
         */
        const BUFFER_SEEK_OVER_HOLE: string;
        /**
         * raised when playback is stuck although currentTime is in a buffered aread
         * data: { type: MEDIA_ERROR, details: Hls.ErrorDetails.BUFFERED_STALLED_ERROR, fatal: true }
         */
        const BUFFER_NUDGE_ON_STALL: string;

        // MUX_ERROR //
        /**
         * raised when memory allocation fails during remuxing
         * data: { type: MUX_ERROR, details: Hls.ErrorDetails.REMUX_ALLOC_ERROR, fatal: false, bytes: mdat size, reason: failure reason }
         */
        const REMUX_ALLOC_ERROR: string;

        // OTHER_ERROR //
        /**
         * raised when level switching fails
         * data: { type : OTHER_ERROR, details : Hls.ErrorDetails.LEVEL_SWITCH_ERROR, fatal : false, level : failed level index, reason : failure reason }
         */
        const LEVEL_SWITCH_ERROR: string;
        /**
         * raised when an exception occurs in an internal hls.js event handler
         * data: { type: OTHER_ERROR, details: Hls.ErrorDetails.INTERNAL_EXCEPTION, fatal: true or false, event: event object or string, error: { message: error message } }
         */
        const INTERNAL_EXCEPTION: string;
    }

    /**
     * Hls error types
     */
    namespace ErrorTypes {
        /**
         * network related errors
         */
        const NETWORK_ERROR: string;
        /**
         * media/video related errors
         */
        const MEDIA_ERROR: string;
        /**
         * muxing related errors
         */
        const MUX_ERROR: string;
        /**
         * all other erros
         */
        const OTHER_ERROR: string;
    }
    /**
     * override Hls default configuration
     * this configuration will be applied by default to all instances
     */
    let DefaultConfig: Config;
    /**
     * checks whether your browser is supporting MediaSource Extensions
     */
    function isSupported(): boolean;
    /**
     * returns hls.js dist version number
     */
    const version: string;

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
        debug: boolean;
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
        startFragPrefech: boolean;
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

    interface OptionalConfig {
        /**
         * (default: false)
         * if set to true, the adaptive algorithm with limit levels usable in auto-quality by the HTML video element dimensions (width and height)
         * if set to false, levels will not be limited. All available levels could be used in auto-quality mode taking only bandwidth into consideration.
         */
        capLevelToPlayerSize?: boolean;
        /**
         * (default: false)
         * setting config.debug = true; will turn on debug logs on JS console.
         * a logger object could also be provided for custom logging: config.debug = customLogger;
         */
        debug?: boolean;
        /**
         * (default: true)
         * if set to true, start level playlist and first fragments will be loaded automatically, after triggering of Hls.Events.MANIFEST_PARSED event
         * if set to false, an explicit API call (hls.startLoad(startPosition=-1)) will be needed to start quality level/fragment loading.
         */
        autoStartLoad?: boolean;
        /**
         * (default -1)
         * if set to -1, playback will start from initialTime=0 for VoD and according to liveSyncDuration/liveSyncDurationCount config params for Live
         * otherwise, playback will start from predefined value. (unless stated otherwise in autoStartLoad=false mode : in that case startPosition can be overrided using hls.startLoad(startPosition)).
         */
        startPosition?: number;
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
        defaultAudioCodec?: string;
        /**
         * (default: 1)
         * number of segments needed to start a playback of Live stream.
         */
        initialLiveManifestSize?: number;
        /**
         * (default: 30 seconds)
         * Maximum buffer length in seconds. If buffer length is/become less than this value, a new fragment will be loaded.
         * This is the guaranteed buffer length hls.js will try to reach, regardless of maxBufferSize.
         */
        maxBufferLength?: number;
        /**
         * (default 600s)
         * Maximum buffer length in seconds. Hls.js will never exceed this value, even if maxBufferSize is not reached yet.
         * hls.js tries to buffer up to a maximum number of bytes (60 MB by default) rather than to buffer up to a maximum nb of seconds.
         * This is to mimic the browser behaviour (the buffer eviction algorithm is starting after the browser detects that video buffer size reaches a limit in bytes)
         * maxBufferLength is the minimum guaranteed buffer length that hls.js will try to achieve, even if that value exceeds the amount of bytes 60 MB of memory.
         * maxMaxBufferLength acts as a capping value, as if bitrate is really low, you could need more than one hour of buffer to fill 60 MB.
         */
        maxMaxBufferLength?: number;
        /**
         * (default: 60 MB)
         * 'Minimum' maximum buffer size in bytes. If buffer size upfront is bigger than this value, no fragment will be loaded
         */
        maxBufferSize?: number;
        /**
         * (default: 0.5 seconds)
         * 'Maximum' inter-fragment buffer hole tolerance that hls.js can cope with when searching for the next fragment to load. When switching between quality level,
         * fragments might not be perfectly aligned.
         * This could result in small overlapping or hole in media buffer. This tolerance factor helps cope with this.
         */
        maxBufferHole?: number;
        /**
         * (default: 2s)
         * In case playback is stalled, and a buffered range is available upfront, less than maxSeekHole seconds from current media position,
         * hls.js will jump over this buffer hole to reach the beginning of this following buffered range.
         * maxSeekHole allows to configure this jumpable threshold.
         */
        maxSeekHole?: number;
        /**
         * (default: 4s)
         *
         * ABR algorithm will always try to choose a quality level that should avoid rebuffering. In case no quality level with this criteria can
         * be found (lets say for example that buffer length is 1s, but fetching a fragment at lowest quality is predicted to take around 2s ...
         * ie we can forecast around 1s of rebuffering ...) then ABR algorithm will try to find a level that should guarantee less than
         * maxStarvationDelay of buffering.
         */
        maxStarvationDelay?: number;
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
        maxLoadingDelay?: number;
        /**
         * (default: 0.5s)
         * media element is expected to play and if currentTime has not moved for more than lowBufferWatchdogPeriod and if there are less than maxBufferHole seconds buffered upfront,
         * hls.js will try to nudge playhead to recover playback
         */
        lowBufferWatchdogPeriod?: number;
        /**
         * (default: 3s)
         * if media element is expected to play and if currentTime has not moved for more than highBufferWatchdogPeriod and if there are more than maxBufferHole seconds buffered upfront,
         * hls.js will try to nudge playhead to recover playback
         */
        highBufferWatchdogPeriod?: number;
        /**
         * (default: 0.1s)
         * In case playback continues to stall after first playhead nudging, currentTime will be nudged evenmore following nudgeOffset to try to restore playback.
         * media.currentTime += (nb nudge retry -1)*nudgeOffset
         */
        nudgeOffset?: number;
        /**
         * (default: 3s)
         * In case playback continues to stall after first playhead nudging, currentTime will be nudged evenmore following nudgeOffset to try to restore playback.
         * media.currentTime += (nb nudge retry -1)*nudgeOffset
         */
        nudgeMaxRetry?: number;
        /**
         * (default 4s)
         *
         * max video loading delay used in automatic start level selection : in that mode ABR controller will ensure that video loading time (ie
         * the time to fetch the first fragment at lowest quality level + the time to fetch the fragment at the appropriate quality level is less
         * than maxLoadingDelay )
         */
        maxFragLookUpTolerance?: number;
        /**
         * (default: 3)
         * edge of live delay, expressed in multiple of EXT-X-TARGETDURATION. if set to 3, playback will start from fragment N-3, N being the last fragment of the live playlist.
         * Decreasing this value is likely to cause playback stalls.
         */
        liveSyncDurationCount?: number;
        /**
         * (default: Infinity)
         * maximum delay allowed from edge of live, expressed in multiple of EXT-X-TARGETDURATION.
         * If set to 10, the player will seek back to liveSyncDurationCount whenever the next fragment to be loaded is older than N-10, N being the last fragment of the live playlist.
         * If set, this value must be stricly superior to liveSyncDurationCount a value too close from liveSyncDurationCount is likely to cause playback stalls.
         */
        liveMaxLatencyDurationCount?: number;
        /**
         * (default: undefined)
         * Alternative parameter to liveSyncDurationCount, expressed in seconds vs number of segments.
         * If defined in the configuration object, liveSyncDuration will take precedence over the default liveSyncDurationCount.
         * You can't define this parameter and either liveSyncDurationCount or liveMaxLatencyDurationCount in your configuration object at the same time.
         * A value too low (inferior to ~3 segment durations) is likely to cause playback stalls.
         */
        liveSyncDuration?: number;
        /**
         * (default: undefined)
         * Alternative parameter to liveMaxLatencyDurationCount, expressed in seconds vs number of segments.
         * If defined in the configuration object, liveMaxLatencyDuration will take precedence over the default liveMaxLatencyDurationCount.
         * If set, this value must be stricly superior to liveSyncDuration which must be defined as well.
         * You can't define this parameter and either liveSyncDurationCount or liveMaxLatencyDurationCount in your configuration object at the same time.
         * A value too close from liveSyncDuration is likely to cause playback stalls.
         */
        liveMaxLatencyDuration?: number;
        /**
         * (default: false)
         * Override current Media Source duration to Infinity for a live broadcast. Useful, if you are building a player which relies
         * on native UI capabilities in modern browsers. If you want to have a native Live UI in environments like iOS Safari, Safari,
         * Android Google Chrome, etc. set this value to true.
         */
        liveDurationInfinity?: boolean;
        /**
         * (default: true)
         * Enable WebWorker (if available on browser) for TS demuxing/MP4 remuxing, to improve performance and avoid lag/frame drops.
         */
        enableWorker?: boolean;
        /**
         * (default: true)
         * Enable to use JavaScript version AES decryption for fallback of WebCrypto API.
         */
        enableSoftwareAES?: boolean;
        /**
         * (default: undefined)
         * When set, use this level as the default hls.startLevel. Keep in mind that the startLevel set with the API takes precedence over
         * config.startLevel configuration parameter.
         */
        startLevel?: number;
        /**
         * (default: 10000ms for level and manifest)
         * URL Loader timeout. A timeout callback will be triggered if loading duration exceeds this timeout. no further action will be done : the load operation will not be cancelled/aborted.
         * It is up to the application to catch this event and treat it as needed.
         */
        manifestLoadingTimeOut?: number;
        /**
         * (default: 3)
         * Max number of load retries.
         */
        manifestLoadingMaxRetry?: number;
        /**
         * (default: 1000 ms)
         * Initial delay between XMLHttpRequest error and first load retry (in ms).
         * Any I/O error will trigger retries every 500ms,1s,2s,4s,8s, ...
         * capped to fragLoadingMaxRetryTimeout / manifestLoadingMaxRetryTimeout / levelLoadingMaxRetryTimeout value (exponential backoff).
         * Prefetch start fragment although media not attached.
         */
        manifestLoadingRetryDelay?: number;
        /**
         * (default: 64000 ms)
         * Maximum frag/manifest/key retry timeout (in milliseconds) in case I/O errors are met.
         */
        manifestLoadingMaxRetryTimeout?: number;
        /**
         * (default: 60000ms for fragment)
         * URL Loader timeout. A timeout callback will be triggered if loading duration exceeds this timeout. no further action will be done : the load operation will not be cancelled/aborted.
         * It is up to the application to catch this event and treat it as needed.
         */
        levelLoadingTimeOut?: number;
        /**
         * (default: 3)
         * Max number of load retries.
         */
        levelLoadingMaxRetry?: number;
        /**
         * (default: 1000 ms)
         * Initial delay between XMLHttpRequest error and first load retry (in ms).
         * Any I/O error will trigger retries every 500ms,1s,2s,4s,8s, ...
         * capped to fragLoadingMaxRetryTimeout / manifestLoadingMaxRetryTimeout / levelLoadingMaxRetryTimeout value (exponential backoff).
         * Prefetch start fragment although media not attached.
         */
        levelLoadingRetryDelay?: number;
        /**
         * (default: 64000 ms)
         * Maximum frag/manifest/key retry timeout (in milliseconds) in case I/O errors are met.
         */
        levelLoadingMaxRetryTimeout?: number;
        /**
         * (default: 60000ms for fragment)
         * URL Loader timeout. A timeout callback will be triggered if loading duration exceeds this timeout. no further action will be done : the load operation will not be cancelled/aborted.
         * It is up to the application to catch this event and treat it as needed.
         */
        fragLoadingTimeOut?: number;
        /**
         * (default: 3)
         * Max number of load retries.
         */
        fragLoadingMaxRetry?: number;
        /**
         * (default: 1000 ms)
         * Initial delay between XMLHttpRequest error and first load retry (in ms).
         * Any I/O error will trigger retries every 500ms,1s,2s,4s,8s, ...
         * capped to fragLoadingMaxRetryTimeout / manifestLoadingMaxRetryTimeout / levelLoadingMaxRetryTimeout value (exponential backoff).
         * Prefetch start fragment although media not attached.
         */
        fragLoadingRetryDelay?: number;
        /**
         * (default: 64000 ms)
         * Maximum frag/manifest/key retry timeout (in milliseconds) in case I/O errors are met.
         */
        fragLoadingMaxRetryDelay?: number;
        /**
         * (default: false)
         * Start prefetching start fragment although media not attached yet. Max number of append retries.
         */
        startFragPrefetch?: boolean;
        /**
         * (default: 3)
         * Max number of sourceBuffer.appendBuffer() retry upon error. Such error could happen in loop with UHD streams, when internal buffer is full. (Quota Exceeding Error will be triggered).
         * In that case we need to wait for the browser to evict some data before being able to append buffer correctly.
         */
        appendErrorMaxRetry?: number;
        /**
         * (default: standard XMLHttpRequest-based URL loader)
         * Override standard URL loader by a custom one. Could be useful for P2P or stubbing (testing).
         * Use this, if you want to overwrite both the fragment and the playlist loader.
         * Note: If fLoader or pLoader are used, they overwrite loader!
         */
        loader?: typeof Loader;
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
        abrController?: AbrController;
        /**
         * (default: internal track timeline controller)
         * Customized text track syncronization controller.
         * Parameter should be a class with a destroy() method:
         * destroy() : should clean-up all used resources
         */
        timelineController?: TimelineController;
        /**
         * (default: true)
         * Whether or not to enable WebVTT captions on HLS
         */
        enableWebVTT?: boolean;
        /**
         * (default: true)
         * whether or not to enable CEA-708 captions
         */
        enableCEA708Captions?: boolean;
        /**
         * (default: English)
         * Label for the text track generated for CEA-708 captions track 1. This is how it will appear in the browser's native menu for subtitles and captions.
         */
        captionsTextTrack1Label?: string;
        /**
         * (default: en)
         * RFC 3066 language code for the text track generated for CEA-708 captions track 1.
         */
        captionsTextTrack1LanguagedCode?: string;
        /**
         * (default: Spanish)
         * Label for the text track generated for CEA-708 captions track 2. This is how it will appear in the browser's native menu for subtitles and captions.
         */
        captionsTextTrack2Label?: string;
        /**
         * (default: es)
         * RFC 3066 language code for the text track generated for CEA-708 captions track 2.
         */
        captionsTextTrack2LanguageCode?: string;
        /**
         * (default: false)
         * If a segment's video track is shorter than its audio track by > min(maxSeekHole, maxBufferHole), extend the final video frame's duration to match the audio track's duration.
         * This helps playback continue in certain cases that might otherwise get stuck.
         */
        stretchShortVideoTrack?: boolean;
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
        maxAudioFramesDrift?: number;
        /**
         * (default: true)
         * Whether or not to force having a key frame in the first AVC sample after a discontinuity.
         * If set to true, after a discontinuity, the AVC samples without any key frame will be dropped until finding one that contains a key frame.
         * If set to false, all AVC samples will be kept, which can help avoid holes in the stream.
         * Setting this parameter to false can also generate decoding weirdness when switching level or seeking.
         */
        forceKeyFrameOnDiscontinuity?: boolean;
        /**
         * (default: 5.0)
         * Fast bitrate Exponential moving average half-life, used to compute average bitrate for Live streams.
         * Half of the estimate is based on the last abrEwmaFastLive seconds of sample history. Each of the sample is weighted by the fragment loading duration.
         * parameter should be a float greater than 0
         */
        abrEwmaFastLive?: number;
        /**
         * (default: 9.0)
         * Slow bitrate Exponential moving average half-life, used to compute average bitrate for Live streams.
         * Half of the estimate is based on the last abrEwmaSlowLive seconds of sample history. Each of the sample is weighted by the fragment loading duration.
         * parameter should be a float greater than abrEwmaFastLive
         */
        abrEwmaSlowLive?: number;
        /**
         * (default: 4.0)
         * Fast bitrate Exponential moving average half-life, used to compute average bitrate for VoD streams.
         * Half of the estimate is based on the last abrEwmaFastVoD seconds of sample history. Each of the sample is weighted by the fragment loading duration.
         * parameter should be a float greater than 0
         */
        abrEwmaFastVod?: number;
        /**
         * (default: 15.0)
         * Slow bitrate Exponential moving average half-life, used to compute average bitrate for VoD streams.
         * Half of the estimate is based on the last abrEwmaSlowVoD seconds of sample history. Each of the sample is weighted by the fragment loading duration.
         * parameter should be a float greater than abrEwmaFastVoD
         */
        abrEwmaSlowVod?: number;
        /**
         * (default: 500000)
         * Default bandwidth estimate in bits/second prior to collecting fragment bandwidth samples.
         * parameter should be a float
         */
        abrEwmaDefaultEstimate?: number;
        /**
         * (default: 0.8)
         * Scale factor to be applied against measured bandwidth average, to determine whether we can stay on current or lower quality level.
         * If abrBandWidthFactor * bandwidth average < level.bitrate then ABR can switch to that level providing that it is equal or less than current level.
         */
        abrBandWidthFactor?: number;
        /**
         * (default: 0.7)
         * Scale factor to be applied against measured bandwidth average, to determine whether we can switch up to a higher quality level.
         * If abrBandWidthUpFactor * bandwidth average < level.bitrate then ABR can switch up to that quality level.
         */
        abrBandWidthUpFactor?: number;
        /**
         * (default: false)
         * max bitrate used in ABR by avg measured bitrate i.e. if bitrate signaled in variant manifest for a given level is 2Mb/s but average bitrate measured on this level is 2.5Mb/s,
         * then if config value is set to true, ABR will use 2.5 Mb/s for this quality level.
         */
        abrMaxWithRealBitrate?: boolean;
        /**
         * (default: 0)
         * Return the capping/min bandwidth value that could be used by automatic level selection algorithm.
         * Useful when browser or tab of the browser is not in the focus and bandwidth drops
         */
        minAutoBitrate?: number;
    }

    /**
     * a Level object represents a given quality level and contains quality level related info
     */
    interface Level {
        /**
         * level url. might contain sever items if failover/redundant streams are found in the manifest
         */
        url: string[];
        /**
         * level bitrate
         */
        bitrate: number;
        /**
         * level name
         */
        name: string;
        /**
         * used codecs
         */
        codecs: string;
        /**
         * video width
         */
        width: number;
        /**
         * video height
         */
        height: number;
        /**
         * level details
         */
        details: LevelDetails;
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

    interface Data {
        /**
         * videoElement
         */
        video?: HTMLVideoElement;
        /**
         * media source
         */
        mediaSource?: string;
        /**
         * manifest url
         */
        url?: string;
        /**
         * available quality levels
         */
        levels?: number[];
        /**
         * available audio tracks
         */
        audioTracks?: AudioTrack[];
        /**
         * XMLHttp request stats
         */
        stats?: HlsStats;
        /**
         * index of first quality level appearing in Manifest
         */
        firstLevel?: number;
        /**
         * id of updated level
         */
        level?: number;
        /**
         *  id of loaded level
         */
        levelId?: number;
        /**
         * ErrorDetails type or Level Details
         */
        details?: string | LevelDetails;
        /**
         * PTS drift observed when parsing last fragment
         */
        drift?: number;
        /**
         * fragment object with frag.loaded=stats.loaded
         */
        frag?: Fragment;
        /**
         * fragment payload
         */
        payload?: any; // TODO: what is the payload?
        /**
         * id of level or demuxer
         */
        id?: number;
        /**
         * moof MP4 box
         */
        moof?: any; // TODO: whats is the moof?
        /**
         * mdat MP4 box
         */
        mdat?: any; // TODO: what is mdat?
        /**
         * PTS of first sample
         */
        startPTS?: number;
        /**
         * PTS of last sample
         */
        endPTS?: number;
        /**
         * DTS of first sample
         */
        startDTS?: number;
        /**
         * DTS of last sample
         */
        endDTS?: number;
        /**
         * stream type (audio or video)
         */
        type?: string;
        /**
         * number of samples
         */
        nb?: number;
        /**
         * number of dropped frames in last monitoring period
         */
        currentDropped?: number;
        /**
         * number of decoded frames in last monitoring period
         */
        currentDecode?: number;
        /**
         * total dropped frames on this video element
         */
        totalDropped?: number;
        /**
         * level has to much dropped frame will be restricted
         */
        droppedLevel?: number;
        /**
         * is error fatal or not.
         * if error is not fatal, hls.js will try to recover it
         * if error is fatal, an action is required to (try to) recover it
         */
        fatal?: boolean;
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
        destory(): void;
    }

    interface LoaderResponse {
        url: string;
        data: string | ArrayBuffer;
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

    interface HlsStats {
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

    interface LoaderCallbacks {
        onSuccess(response: LoaderResponse, stats: LoaderStats, context: LoaderContext): void;
        onProgress(stats: LoaderStats, context: LoaderContext, data: string | ArrayBuffer): void;
        onError(error: LoaderError, context: LoaderContext): void;
        onTimeout(stats: LoaderStats, context: LoaderContext): void;
    }
}

declare class Hls {
    /**
     * Constructor. Can be provided an HlsConfig object as default properties and or overrides
     */
    constructor(config?: Hls.OptionalConfig)
    /**
     * return array of available quality levels
     */
    levels: Hls.Level[];
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
     * (default: true)
     * if set to true, start level playlist and first fragments will be loaded automatically, after triggering of Hls.Events.MANIFEST_PARSED event
     * if set to false, an explicit API call (hls.startLoad(startPosition=-1)) will be needed to start quality level/fragment loading.
     */
    autoStartLoad: boolean;
    /**
     * get: Return the bound videoElement from the hls instance
     */
    media: HTMLVideoElement;
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
    audioTracks: AudioTrack[];
    /**
     * get: returns audio track id
     * set: sets audio track id (returned by)
     */
    audioTrack: number;
    /**
     * position of live sync point (ie edge of live position minus safety delay defined by hls.config.liveSyncDuration)
     */
    liveSyncPosition: number;
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
    autoLevelEnabled(enabled: boolean): boolean;
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
    on(event: string, callback: (event: string, data: Hls.Data) => void): void;
    /**
     * remove hls.js event listener
     */
    off(event: string, callback: (event: string, data: Hls.Data) => void): void;
}

export as namespace Hls;
export = Hls;
