// Type definitions for hls.js 0.6
// Project: https://github.com/dailymotion/hls.js
// Definitions by: Connor Peet <https://github.com/connor4312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * This file contains a *non-comprehensive* list of typings for hls.js.
 * Some of the code is replicated in part or in whole from the hls.js
 * project, particularly event names and documentation to make it
 * Typescript-friendly.
 *
 * hls.js is copyright (c) 2015 Dailymotion (http://www.dailymotion.com)
 * It is made available under the following license:
 *
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS;
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * src/remux/mp4-generator.js and src/demux/exp-golomb.js implementation in this project
 * are derived from the HLS library for video.js (https://github.com/videojs/videojs-contrib-hls)
 *
 * That work is also covered by the Apache 2 License, following copyright:
 * Copyright (c) 2013-2015 Brightcove
 *
 *
 * THE SOFTWARE IS PROVIDED 'AS IS'; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY;
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM;
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

declare namespace HLS {
    export type ErrorType = 'networkError' | 'mediaError' | 'otherError';

    export type ErrorDetails = 'manifestLoadError'
        | 'manifestLoadTimeOut'
        | 'manifestParsingError'
        | 'manifestIncompatibleCodecsError'
        | 'levelLoadError'
        | 'levelLoadTimeOut'
        | 'levelSwitchError'
        | 'audioTrackLoadError'
        | 'audioTrackLoadTimeOut'
        | 'fragLoadError'
        | 'fragLoopLoadingError'
        | 'fragLoadTimeOut'
        | 'fragDecryptError'
        | 'fragParsingError'
        | 'keyLoadError'
        | 'keyLoadTimeOut'
        | 'bufferAddCodecError'
        | 'bufferAppendError'
        | 'bufferAppendingError'
        | 'bufferStalledError'
        | 'bufferFullError'
        | 'bufferSeekOverHole'
        | 'internalException';

    export type EventName = 'hlsMediaAttaching'
        | 'hlsMediaAttached'
        | 'hlsMediaDetaching'
        | 'hlsMediaDetached'
        | 'hlsBufferReset'
        | 'hlsBufferCodecs'
        | 'hlsBufferCreated'
        | 'hlsBufferAppending'
        | 'hlsBufferAppended'
        | 'hlsBufferEos'
        | 'hlsBufferFlushing'
        | 'hlsBufferFlushed'
        | 'hlsManifestLoading'
        | 'hlsManifestLoaded'
        | 'hlsManifestParsed'
        | 'hlsLevelLoading'
        | 'hlsLevelLoaded'
        | 'hlsLevelUpdated'
        | 'hlsLevelPtsUpdated'
        | 'hlsLevelSwitch'
        | 'hlsAudioTracksUpdated'
        | 'hlsAudioTrackSwitch'
        | 'hlsAudioTrackLoading'
        | 'hlsAudioTrackLoaded'
        | 'hlsFragLoading'
        | 'hlsFragLoadProgress'
        | 'hlsFragLoadEmergencyAborted'
        | 'hlsFragLoaded'
        | 'hlsFragParsingInitSegment'
        | 'hlsFragParsingUserdata'
        | 'hlsFragParsingMetadata'
        | 'hlsFragParsingData'
        | 'hlsFragParsed'
        | 'hlsFragBuffered'
        | 'hlsFragChanged'
        | 'hlsFpsDrop'
        | 'hlsFpsDropLevelCapping'
        | 'hlsError'
        | 'hlsDestroying'
        | 'hlsKeyLoading'
        | 'hlsKeyLoaded'
        | 'hlsStreamStateTransition';

    export interface ErrorDetailsEnum {
        // Identifier for a manifest load error - data: { url : faulty URL, response : { code: error code, text: error text }}
        MANIFEST_LOAD_ERROR: 'manifestLoadError';
        // Identifier for a manifest load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
        MANIFEST_LOAD_TIMEOUT: 'manifestLoadTimeOut';
        // Identifier for a manifest parsing error - data: { url : faulty URL, reason : error reason}
        MANIFEST_PARSING_ERROR: 'manifestParsingError';
        // Identifier for a manifest with only incompatible codecs error - data: { url : faulty URL, reason : error reason}
        MANIFEST_INCOMPATIBLE_CODECS_ERROR: 'manifestIncompatibleCodecsError';
        // Identifier for a level load error - data: { url : faulty URL, response : { code: error code, text: error text }}
        LEVEL_LOAD_ERROR: 'levelLoadError';
        // Identifier for a level load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
        LEVEL_LOAD_TIMEOUT: 'levelLoadTimeOut';
        // Identifier for a level switch error - data: { level : faulty level Id, event : error description}
        LEVEL_SWITCH_ERROR: 'levelSwitchError';
        // Identifier for an audio track load error - data: { url : faulty URL, response : { code: error code, text: error text }}
        AUDIO_TRACK_LOAD_ERROR: 'audioTrackLoadError';
        // Identifier for an audio track load timeout - data: { url : faulty URL, response : { code: error code, text: error text }}
        AUDIO_TRACK_LOAD_TIMEOUT: 'audioTrackLoadTimeOut';
        // Identifier for fragment load error - data: { frag : fragment object, response : { code: error code, text: error text }}
        FRAG_LOAD_ERROR: 'fragLoadError';
        // Identifier for fragment loop loading error - data: { frag : fragment object}
        FRAG_LOOP_LOADING_ERROR: 'fragLoopLoadingError';
        // Identifier for fragment load timeout error - data: { frag : fragment object}
        FRAG_LOAD_TIMEOUT: 'fragLoadTimeOut';
        // Identifier for a fragment decryption error event - data: parsing error description
        FRAG_DECRYPT_ERROR: 'fragDecryptError';
        // Identifier for a fragment parsing error event - data: parsing error description
        FRAG_PARSING_ERROR: 'fragParsingError';
        // Identifier for decrypt key load error - data: { frag : fragment object, response : { code: error code, text: error text }}
        KEY_LOAD_ERROR: 'keyLoadError';
        // Identifier for decrypt key load timeout error - data: { frag : fragment object}
        KEY_LOAD_TIMEOUT: 'keyLoadTimeOut';
        // Triggered when an exception occurs while adding a sourceBuffer to MediaSource - data : {  err : exception , mimeType : mimeType }
        BUFFER_ADD_CODEC_ERROR: 'bufferAddCodecError';
        // Identifier for a buffer append error - data: append error description
        BUFFER_APPEND_ERROR: 'bufferAppendError';
        // Identifier for a buffer appending error event - data: appending error description
        BUFFER_APPENDING_ERROR: 'bufferAppendingError';
        // Identifier for a buffer stalled error event
        BUFFER_STALLED_ERROR: 'bufferStalledError';
        // Identifier for a buffer full event
        BUFFER_FULL_ERROR: 'bufferFullError';
        // Identifier for a buffer seek over hole event
        BUFFER_SEEK_OVER_HOLE: 'bufferSeekOverHole';
        // Identifier for an internal exception happening inside hls.js while handling an event
        INTERNAL_EXCEPTION: 'internalException';
    }

    export interface ErrorTypesEnum {
        // Identifier for a network error (loading error / timeout ...)
        NETWORK_ERROR: 'networkError';
        // Identifier for a media Error (video/parsing/mediasource error)
        MEDIA_ERROR: 'mediaError';
        // Identifier for all other errors
        OTHER_ERROR: 'otherError';
    }

    export interface EventsEnum {
        // fired before MediaSource is attaching to media element - data: { media }
        MEDIA_ATTACHING: 'hlsMediaAttaching';
        // fired when MediaSource has been succesfully attached to media element - data: { }
        MEDIA_ATTACHED: 'hlsMediaAttached';
        // fired before detaching MediaSource from media element - data: { }
        MEDIA_DETACHING: 'hlsMediaDetaching';
        // fired when MediaSource has been detached from media element - data: { }
        MEDIA_DETACHED: 'hlsMediaDetached';
        // fired when we buffer is going to be resetted
        BUFFER_RESET: 'hlsBufferReset';
        // fired when we know about the codecs that we need buffers for to push into - data: {tracks : { container, codec, levelCodec, initSegment, metadata }}
        BUFFER_CODECS: 'hlsBufferCodecs';
        // fired when sourcebuffers have been created data: { tracks : tracks}
        BUFFER_CREATED: 'hlsBufferCreated';
        // fired when we append a segment to the buffer - data: { segment: segment object }
        BUFFER_APPENDING: 'hlsBufferAppending';
        // fired when we are done with appending a media segment to the buffer data : { parent : segment parent that triggered BUFFER_APPENDING }
        BUFFER_APPENDED: 'hlsBufferAppended';
        // fired when the stream is finished and we want to notify the media buffer that there will be no more data
        BUFFER_EOS: 'hlsBufferEos';
        // fired when the media buffer should be flushed - data {startOffset, endOffset}
        BUFFER_FLUSHING: 'hlsBufferFlushing';
        // fired when the media has been flushed
        BUFFER_FLUSHED: 'hlsBufferFlushed';
        // fired to signal that a manifest loading starts - data: { url : manifestURL}
        MANIFEST_LOADING: 'hlsManifestLoading';
        // fired after manifest has been loaded - data: { levels : [available quality levels] , audioTracks : [ available audio tracks], url : manifestURL, stats : { trequest, tfirst, tload, mtime}}
        MANIFEST_LOADED: 'hlsManifestLoaded';
        // fired after manifest has been parsed - data: { levels : [available quality levels] , firstLevel : index of first quality level appearing in Manifest}
        MANIFEST_PARSED: 'hlsManifestParsed';
        // fired when a level playlist loading starts - data: { url : level URL  level : id of level being loaded}
        LEVEL_LOADING: 'hlsLevelLoading';
        // fired when a level playlist loading finishes - data: { details : levelDetails object, level : id of loaded level, stats : { trequest, tfirst, tload, mtime} }
        LEVEL_LOADED: 'hlsLevelLoaded';
        // fired when a level's details have been updated based on previous details, after it has been loaded. - data: { details : levelDetails object, level : id of updated level }
        LEVEL_UPDATED: 'hlsLevelUpdated';
        // fired when a level's PTS information has been updated after parsing a fragment - data: { details : levelDetails object, level : id of updated level, drift: PTS drift observed when parsing last fragment }
        LEVEL_PTS_UPDATED: 'hlsLevelPtsUpdated';
        // fired when a level switch is requested - data: { level : id of new level }
        LEVEL_SWITCH: 'hlsLevelSwitch';
        // fired to notify that audio track lists has been updated data: { audioTracks : audioTracks}
        AUDIO_TRACKS_UPDATED: 'hlsAudioTracksUpdated';
        // fired when an audio track switch occurs - data: {  id : audio track id}
        AUDIO_TRACK_SWITCH: 'hlsAudioTrackSwitch';
        // fired when an audio track loading starts - data: { url : audio track URL  id : audio track id}
        AUDIO_TRACK_LOADING: 'hlsAudioTrackLoading';
        // fired when an audio track loading  finishes - data: { details : levelDetails object, id : audio track id, stats : { trequest, tfirst, tload, mtime} }
        AUDIO_TRACK_LOADED: 'hlsAudioTrackLoaded';
        // fired when a fragment loading starts - data: { frag : fragment object}
        FRAG_LOADING: 'hlsFragLoading';
        // fired when a fragment loading is progressing - data: { frag : fragment object, { trequest, tfirst, loaded}}
        FRAG_LOAD_PROGRESS: 'hlsFragLoadProgress';
        // Identifier for fragment load aborting for emergency switch down - data: {frag : fragment object}
        FRAG_LOAD_EMERGENCY_ABORTED: 'hlsFragLoadEmergencyAborted';
        // fired when a fragment loading is completed - data: { frag : fragment object, payload : fragment payload, stats : { trequest, tfirst, tload, length}}
        FRAG_LOADED: 'hlsFragLoaded';
        // fired when Init Segment has been extracted from fragment - data: { id : demuxer id, level : levelId, sn : sequence number, moov : moov MP4 box, codecs : codecs found while parsing fragment}
        FRAG_PARSING_INIT_SEGMENT: 'hlsFragParsingInitSegment';
        // fired when parsing sei text is completed - data: { id : demuxer id, , level : levelId, sn : sequence number, samples : [ sei samples pes ] }
        FRAG_PARSING_USERDATA: 'hlsFragParsingUserdata';
        // fired when parsing id3 is completed - data: { id : demuxer id, , level : levelId, sn : sequence number, samples : [ id3 samples pes ] }
        FRAG_PARSING_METADATA: 'hlsFragParsingMetadata';
        // fired when data have been extracted from fragment - data: { id : demuxer id, level : levelId, sn : sequence number, data1 : moof MP4 box or TS fragments, data2 : mdat MP4 box or null}
        FRAG_PARSING_DATA: 'hlsFragParsingData';
        // fired when fragment parsing is completed - data: { id : demuxer id; level : levelId, sn : sequence number, }
        FRAG_PARSED: 'hlsFragParsed';
        // fired when fragment remuxed MP4 boxes have all been appended into SourceBuffer - data: { id : demuxer id,frag : fragment object, stats : { trequest, tfirst, tload, tparsed, tbuffered, length} }
        FRAG_BUFFERED: 'hlsFragBuffered';
        // fired when fragment matching with current media position is changing - data : { id : demuxer id, frag : fragment object }
        FRAG_CHANGED: 'hlsFragChanged';
        // Identifier for a FPS drop event - data: {curentDropped, currentDecoded, totalDroppedFrames}
        FPS_DROP: 'hlsFpsDrop';
        //triggered when FPS drop triggers auto level capping - data: {level, droppedlevel}
        FPS_DROP_LEVEL_CAPPING: 'hlsFpsDropLevelCapping';
        // Identifier for an error event - data: { type : error type, details : error details, fatal : if true, hls.js cannot/will not try to recover, if false, hls.js will try to recover,other error specific data}
        ERROR: 'hlsError';
        // fired when hls.js instance starts destroying. Different from MEDIA_DETACHED as one could want to detach and reattach a media to the instance of hls.js to handle mid-rolls for example
        DESTROYING: 'hlsDestroying';
        // fired when a decrypt key loading starts - data: { frag : fragment object}
        KEY_LOADING: 'hlsKeyLoading';
        // fired when a decrypt key loading is completed - data: { frag : fragment object, payload : key payload, stats : { trequest, tfirst, tload, length}}
        KEY_LOADED: 'hlsKeyLoaded';
        // fired upon stream controller state transitions - data: {previousState, nextState}
        STREAM_STATE_TRANSITION: 'hlsStreamStateTransition';
    }

    export interface LoaderContext {
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
    }

    export interface LoaderStats {
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
         * download bandwidth in bits/s
         */
        bw?: number;
        /**
         * total number of bytes
         */
        total: number;
    }

    export interface Loader {
        /**
         * Calling load() will start retrieving content located at given URL (HTTP GET).
         */
        load(context: LoaderContext, config: {
            // Max number of load retries
            maxRetry: number;
            // Timeout after which `onTimeOut` callback will be triggered
            // (if loading is still not finished after that delay)
            timeout: number;
            // Delay between an I/O error and following connection retry (ms).
            // This to avoid spamming the server
            retryDelay: number;
            // max connection retry delay (ms)
            maxRetryDelay: number;
        }, callbacks: {
            // Callback triggered upon successful loading of URL.
            onSuccess: (response: { url: string, data: string | ArrayBuffer }, stats: LoaderStats, context: LoaderContext) => void;
            // Callback triggered while loading is in progress.
            onProgress: (stats: LoaderStats, context: LoaderContext, data: string | ArrayBuffer) => void;
            // Callback triggered if any I/O error is met while loading fragment.
            onError: (err: { code: number, text: string }, context: LoaderContext ) => void;
            // Callback triggered if loading is still not finished after a certain duration.
            onTimeout: (stats: LoaderStats, context: LoaderContext) => void;
        }): void;

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
     * Config that gets passed into the HLS constructor. See the documentation
     * for more details: https://github.com/dailymotion/hls.js/blob/master/API.md#fine-tuning
     */
    export interface Config {
        autoStartLoad?: boolean;
        startPosition ?: number;
        capLevelToPlayerSize?: boolean;
        debug?: boolean;
        defaultAudioCodec?: string;
        maxBufferLength?: number;
        maxMaxBufferLength?: number;
        maxBufferSize?: number;
        maxBufferHole?: number;
        maxSeekHole?: number;
        seekHoleNudgeDuration?: number;
        nudgeOffset?: number;
        nudgeMaxRetry?: number;
        maxFragLookUpTolerance?: number;
        liveSyncDurationCount?: number;
        liveMaxLatencyDurationCount?: number;
        enableWorker?: boolean;
        enableSoftwareAES?: boolean;
        manifestLoadingTimeOut?: number;
        manifestLoadingMaxRetry?: number;
        manifestLoadingRetryDelay?: number;
        manifestLoadingMaxRetryTimeout ?: number;
        levelLoadingTimeOut?: number;
        levelLoadingMaxRetry?: number;
        levelLoadingRetryDelay?: number;
        levelLoadingMaxRetryTimeout?: number;
        fragLoadingTimeOut?: number;
        fragLoadingMaxRetry?: number;
        fragLoadingRetryDelay?: number;
        fragLoadingMaxRetryTimeout?: number;
        fragLoadingLoopThreshold?: number;
        startFragPrefech?: boolean;
        appendErrorMaxRetry?: number;
        loader?: Loader;
        fLoader?: Loader;
        pLoader?: Loader;
        xhrSetup?: (xhr?: XMLHttpRequest, url?: string) => void;
        fetchSetup?: (context?: LoaderContext, params?: any) => void;
        abrController?: any;
        timelineController?: any;
        enableCEA708Captions?: boolean;
        stretchShortVideoTrack?: boolean;
        forceKeyFrameOnDiscontinuity?: boolean;
        abrEwmaFastLive?: number;
        abrEwmaSlowLive?: number;
        abrEwmaFastVoD?: number;
        abrEwmaSlowVoD?: number;
        abrEwmaDefaultEstimate?: number;
        abrBandWidthFactor?: number;
        abrBandWidthUpFactor?: number;
    }

    export interface ErrorEvent {
        type: ErrorType;
        details: ErrorDetails;
        fatal: boolean;
    }

    export interface QualityLevel {
        attrs: any; // todo
        details?: any; // todo

        audioCodec: string;
        videoCodec: string;
        bitrate: number;
        url: string[];
        urlId: number;
        name: string;
        width: number;
        height: number;
    }

    export interface Instance {
        /**
         * Calling this method will:
         *  - bind videoElement and hls instance;
         *  - create MediaSource and set it as video source
         *  - once MediaSource object is successfully created;
         *    MEDIA_ATTACHED event will be fired.
         */
        attachMedia(element: HTMLVideoElement): void;

        /**
         * Calling this method will:
         *  - unbind VideoElement from hls instance;
         *  - signal the end of the stream on MediaSource
         *  - reset video source (video.src = '')
         */
        detachMedia(): void;

        /**
         * Should be called to free used resources and destroy hls context.
         */
        destroy(): void;

        /**
         * Starts loading video data from the manifest URL.
         */
        loadSource(url: string): void;

        /**
         * on attaches a listener an en event.
         */
        on(event: 'hlsError', handler: (data: ErrorEvent) => void): Instance;
        on(event: EventName, handler: (...data: any[]) => void): Instance;

        /**
         * off removes a listener for an event.
         */
        off(event: EventName, handler: (...data: any[]) => void): Instance;

        /**
         * Returns an array of available quality levels.
         */
        readonly levels: QualityLevel[];

        /**
         * Returns the index of current playback quality level. When set;
         * it triggers an immediate quality level switch to new quality
         * level. This will pause the video if it was playing, flush the
         * whole buffer, and fetch fragment matching with current position
         * and requested quality level. Then resume the video if needed
         * once fetched fragment will have been buffered.
         */
        currentLevel: number;

        /**
         * Returns the index of next playback quality level, for the next
         * buffered segment. Returns -1 if the next fragment is not yet
         * buffered. This can be set to trigger a quality switch for the
         * next fragment, setting it to -1 triggers automatic quality
         * selection.
         */
        nextLevel: number;
    }

    export interface Constructor {
        /**
         * The hls.js version number.
         * @type {string}
         */
        version: string;

        /**
         * Returns events that can be fired on the instance.
         */
        Events: EventsEnum;

        /**
         * Returns possible error types.
         */
        ErrorTypes: ErrorTypesEnum;

        /**
         * Returns possible error details.
         */
        ErrorDetails: ErrorDetailsEnum;

        /**
         * Returns whether HLS playback is possible in this browser.
         */
        isSupported(): boolean;

        /**
         * Instantiates a new HLS instance.
         */
        new (config?: Config): Instance;
    }
}

declare const HLS: HLS.Constructor;

export = HLS;
