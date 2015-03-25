// Type definitions for Chrome Cast application development
// Project: https://developers.google.com/cast/
// Definitions by: Thomas Stig Jacobsen <https://github.com/eXeDK>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

////////////////////
// Cast
// @see https://code.google.com/p/chromium/codesearch#chromium/src/ui/file_manager/externs/chrome_cast.js
////////////////////
declare module chrome.cast {
    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.AutoJoinPolicy
     */
    interface AutoJoinPolicy {
        TAB_AND_ORIGIN_SCOPED: string;
        ORIGIN_SCOPED: string;
        PAGE_SCOPED: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.DefaultActionPolicy
     */
    interface DefaultActionPolicy {
        CREATE_SESSION: string;
        CAST_THIS_TAB: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Capability
     */
    interface Capability {
        VIDEO_OUT: string;
        AUDIO_OUT: string;
        VIDEO_IN: string;
        AUDIO_IN: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ErrorCode
     */
    interface ErrorCode {
        CANCEL: string;
        TIMEOUT: string;
        API_NOT_INITIALIZED: string;
        INVALID_PARAMETER: string;
        EXTENSION_NOT_COMPATIBLE: string;
        EXTENSION_MISSING: string;
        RECEIVER_UNAVAILABLE: string;
        SESSION_ERROR: string;
        CHANNEL_ERROR: string;
        LOAD_MEDIA_FAILED: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ReceiverAvailability
     */
    interface ReceiverAvailability {
        AVAILABLE: string;
        UNAVAILABLE: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.SenderPlatform
     */
    interface SenderPlatform {
        CHROME: string;
        IOS: string;
        ANDROID: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ReceiverType
     */
    interface ReceiverType {
        CAST: string;
        HANGOUT: string;
        CUSTOM: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ReceiverAction
     */
    interface ReceiverAction {
        CAST: string;
        STOP: string;
    }



    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.SessionStatus
     */
    interface SessionStatus {
        CONNECTED: string;
        DISCONNECTED: string;
        STOPPED: string;
    }

    /**
     * @const {!Array.<number>}
     * @see https://developers.google.com/cast/docs/reference/chrome/
     */
    var VERSION: Array<number>;

    /**
     * @type {boolean}
     */
    var isAvailable: boolean;

    /**
     * @param {!chrome.cast.ApiConfig} apiConfig
     * @param {function()} successCallback
     * @param {function(chrome.cast.Error)} errorCallback
     */
    export function initialize(
        apiConfig: chrome.cast.ApiConfig,
        successCallback: Function,
        errorCallback: (error: chrome.cast.Error) => void
    ): void;

    /**
     * @param {function(!chrome.cast.Session)} successCallback
     * @param {function(chrome.cast.Error)} errorCallback
     * @param {chrome.cast.SessionRequest=} opt_sessionRequest
     * @param {string=} opt_label
     */
    export function requestSession(
        successCallback: (session: chrome.cast.Session) => void,
        errorCallback: (error: chrome.cast.Error) => void,
        sessionRequest?: chrome.cast.SessionRequest,
        label?: string
    ): void

    /**
     * @param {string} sessionId The id of the session to join.
     */
    export function requestSessionById(
        sessionId: string
    ): void

    /**
     * @param {chrome.cast.ReceiverActionListener} listener
     */
    export function addReceiverActionListener(
        listener: (receiver: chrome.cast.Receiver, receiverAction: chrome.cast.ReceiverAction) => void
    ): void

    /**
     * @param {chrome.cast.ReceiverActionListener} listener
     */
    export function removeReceiverActionListener(
        listener: (receiver: chrome.cast.Receiver, receiverAction: chrome.cast.ReceiverAction) => void
    ): void

    /**
     * @param {string} message The message to log.
     */
    export function logMessage(
        message: string
    ): void

    /**
     * @param {!Array.<chrome.cast.Receiver>} receivers
     * @param {function()} successCallback
     * @param {function(chrome.cast.Error)} errorCallback
     */
    export function setCustomReceivers(
        receivers: Array<chrome.cast.Receiver>,
        successCallback: Function,
        errorCallback: (error: chrome.cast.Error) => void
    ): void

    /**
     * @param {!chrome.cast.Receiver} receiver
     * @param {function()} successCallback
     * @param {function(chrome.cast.Error)} errorCallback
     */
    export function setReceiverDisplayStatus(
        receiver: chrome.cast.Receiver,
        successCallback: Function,
        errorCallback: (error: chrome.cast.Error) => void
    )

    interface ApiConfig {
        /**
         * @param {!chrome.cast.SessionRequest} sessionRequest
         * @param {function(!chrome.cast.Session)} sessionListener
         * @param {function(!chrome.cast.ReceiverAvailability,Array.<Object>)}
         *     receiverListener
         * @param {chrome.cast.AutoJoinPolicy=} opt_autoJoinPolicy
         * @param {chrome.cast.DefaultActionPolicy=} opt_defaultActionPolicy
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ApiConfig
         */
        new(
            sessionRequest: chrome.cast.SessionRequest,
            sessionListener: (session: chrome.cast.Session) => void,
            receiverListener: (receiverAvailability: chrome.cast.ReceiverAvailability) => void,
            autoJoinPolicy?: chrome.cast.AutoJoinPolicy,
            defaultActionPolicy: chrome.cast.DefaultActionPolicy
        );

        sessionRequest: chrome.cast.SessionRequest;
        sessionListener: (session: chrome.cast.Session) => void;
        receiverListener: (receiverAvailability: chrome.cast.ReceiverAvailability) => void;
        autoJoinPolicy?: chrome.cast.AutoJoinPolicy;
        defaultActionPolicy: chrome.cast.DefaultActionPolicy;
    }

    /**
     * @param {!chrome.cast.ErrorCode} code
     * @param {string=} opt_description
     * @param {Object=} opt_details
     * @constructor
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Error
     */
    interface Error {
        new(
            code: chrome.cast.ErrorCode,
            description?: string,
            details?: Object
        );

        code: chrome.cast.ErrorCode;
        description?: string;
        details?: string;

    }

    interface Image {
        /**
         * @param {string} url
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Image
         */
        new(
            url: string
        );

        url: string;
        height?: number;
        width?: number;
    }

    interface SenderApplication {

        new(
            platform: chrome.cast.SenderPlatform
        );

        platform: chrome.cast.SenderPlatform;
        url?: string;
        packageId?: string;
    }

    interface SessionRequest {
        /**
         * @param {string} appId
         * @param {!Array.<chrome.cast.Capability>=} opt_capabilities
         * @param {number=} opt_timeout
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.SessionRequest
         */
        new(
            appId: string,
            capabilities?: Array<chrome.cast.Capability>,
            timeout?: number
        );

        appId: string;
        capabilities: Array<chrome.cast.Capability>;
        requestSessionTimeout: number;
        language?: string;
    }

    interface Session {
        /**
         * @param {string} sessionId
         * @param {string} appId
         * @param {string} displayName
         * @param {!Array.<chrome.cast.Image>} appImages
         * @param {!chrome.cast.Receiver} receiver
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session
         */
        new(
            sessionId: string,
            appId: string,
            displayName: string,
            appImages: Array<chrome.cast.Image>,
            receiver: chrome.cast.Receiver
        );

        sessionId: string;
        appId: string;
        displayName: string;
        appImages: Array<chrome.cast.Image>;
        receiver: chrome.cast.Receiver;
        senderApps: Array<chrome.cast.SenderApplication>;
        namespaces: Array<{name: string}>;
        media: Array<chrome.cast.media.Media>;
        status: chrome.cast.SessionStatus

        /**
         * @param {number} newLevel
         * @param {function()} successCallback
         * @param {function(chrome.cast.Error)} errorCallback
         */
        setReceiverVolumeLevel(
            newLevel: number,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        )

        /**
         * @param {boolean} muted
         * @param {function()} successCallback
         * @param {function(chrome.cast.Error)} errorCallback
         */
        setReceiverMuted(
            muted: boolean,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        )

        /**
         * @param {function()} successCallback
         * @param {function(chrome.cast.Error)} errorCallback
         */
        leave(
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        )

        /**
         * @param {function()} successCallback
         * @param {function(chrome.cast.Error)} errorCallback
         */
        stop(
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        )

        /**
         * @param {string} namespace
         * @param {!Object|string} message
         * @param {!function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        sendMessage(
            namespace: string,
            message: string,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        )

        /**
         * @param {function(boolean)} listener
         */
        addUpdateListener(
            listener: (boolean) => void
        )

        /**
         * @param {function(boolean)} listener
         */
        removeUpdateListener(
            listener: (boolean) => void
        )

        /**
         * @param {string} namespace
         * @param {function(string,string)} listener
         */
        addMessageListener(
            namespace: string,
            listener: (string, string) => void
        )

        /**
         * @param {string} namespace
         * @param {function(string,string)} listener
         */
        removeMessageListener(
            namespace: string,
            listener: (string, string) => void
        )

        /**
         * @param {function(!chrome.cast.media.Media)} listener
         */
        addMediaListener(
            listener: (media: chrome.cast.media.Media) => void
        )

        /**
         * @param {function(!chrome.cast.media.Media)} listener
         */
        removeMediaListener(
            listener: (media: chrome.cast.media.Media) => void
        )

        /**
         * @param {!chrome.cast.media.LoadRequest} loadRequest
         * @param {function(!chrome.cast.media.Media)} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        loadMedia(
            loadRequest: chrome.cast.media.LoadRequest,
            successCallback: (media: chrome.cast.media.Media) => void,
            errorCallback: (error: chrome.cast.Error) => void
        )
    }

    interface Receiver {
        /**
         * @param {string} label
         * @param {string} friendlyName
         * @param {Array.<chrome.cast.Capability>=} opt_capabilities
         * @param {chrome.cast.Volume=} opt_volume
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Receiver
         */
        new(
            label: string,
            friendlyName: string,
            capabilities?: Array<chrome.cast.Capability>,
            volume?: chrome.cast.Volume
        );

        label: string;
        friendlyName: string;
        capabilities: Array<chrome.cast.Capability>;
        volume: chrome.cast.Volume;
        receiverType: chrome.cast.ReceiverType;
        displayStatus: chrome.cast.ReceiverDisplayStatus;
    }

    interface ReceiverDisplayStatus {
        /**
         * @param {string} statusText
         * @param {!Array.<chrome.cast.Image>} appImages
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ReceiverDisplayStatus
         */
        new(
            statusText: string,
            appImages: Array<chrome.cast.Image>
        );

        statusText: string;
        appImages: Array<chrome.cast.Image>;
    }

    interface Volume {
        /**
         * @param {?number=} opt_level
         * @param {?boolean=} opt_muted
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Volume
         */
        new(
            level?: number,
            muted?: boolean
        );

        level?: number;
        muted?: boolean;
    }
}

declare module chrome.cast.media {
    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MediaCommand
     */
    interface MediaCommand {
        PAUSE: string;
        SEEK: string;
        STREAM_VOLUME: string;
        STREAM_MUTE: string;
    }

    /**
     * @enum {number}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MetadataType
     */
    interface MetadataType {
        GENERIC: number;
        TV_SHOW: number;
        MOVIE: number;
        MUSIC_TRACK: number;
        PHOTO: number;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.PlayerState
     */
    interface PlayerState {
        IDLE: string;
        PLAYING: string;
        PAUSED: string;
        BUFFERING: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.ResumeState
     */
    interface ResumeState {
        PLAYBACK_START: string;
        PLAYBACK_PAUSE: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.StreamType
     */
    interface StreamType {
        BUFFERED: string;
        LIVE: string;
        OTHER: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.IdleReason
     */
    interface IdleReason {
        CANCELLED: string;
        INTERRUPTED: string;
        FINISHED: string;
        ERROR: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TrackType
     */
    interface TrackType {
        TEXT: string;
        AUDIO: string;
        VIDEO: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TextTrackType
     */
    interface TextTrackType {
        SUBTITLES: string;
        CAPTIONS: string;
        DESCRIPTIONS: string;
        CHAPTERS: string;
        METADATA: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TextTrackEdgeType
     */
    interface TextTrackEdgeType {
        NONE: string;
        OUTLINE: string;
        DROP_SHADOW: string;
        RAISED: string;
        DEPRESSED: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TextTrackWindowType
     */
    interface TextTrackWindowType {
        NONE: string;
        NORMAL: string;
        ROUNDED_CORNERS: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TextTrackFontGenericFamily
     */
    interface TextTrackFontGenericFamily {
        SANS_SERIF: string;
        MONOSPACED_SANS_SERIF: string;
        SERIF: string;
        MONOSPACED_SERIF: string;
        CASUAL: string;
        CURSIVE: string;
        SMALL_CAPITALS: string;
    }

    /**
     * @enum {string}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TextTrackFontStyle
     */
    interface TextTrackFontStyle {
        NORMAL: string;
        BOLD: string;
        BOLD_ITALIC: string;
        ITALIC: string;
    }

    interface GetStatusRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.GetStatusRequest
         */
        new();

        customData: Object;
    }

    interface PauseRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.PauseRequest
         */
        new();

        customData: Object;
    }

    interface PlayRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.PlayRequest
         */
        new();

        customData: Object;
    }

    interface SeekRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.SeekRequest
         */
        new();

        currentTime: number;
        resumeState: chrome.cast.media.ResumeState;
        customData: Object;
    }

    interface StopRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.StopRequest
         */
        new();

        customData: Object;
    }

    interface VolumeRequest {
        /**
         * @param {!chrome.cast.Volume} volume
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.VolumeRequest
         */
        new(
            volume: chrome.cast.Volume
        );

        volume: chrome.cast.Volume;
        customData: Object;
    }

    interface LoadRequest {
        /**
         * @param {!chrome.cast.media.MediaInfo} mediaInfo
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.LoadRequest
         */
        new(
            mediaInfo: chrome.cast.media.MediaInfo
        );

        activeTrackIds: Array<number>;
        autoplay: boolean;
        currentTime: number;
        customData: Object;
        media: chrome.cast.media.MediaInfo;
    }

    interface EditTracksInfoRequest {
        /**
         * @param {Array.<number>=} opt_activeTrackIds
         * @param {chrome.cast.media.TextTrackStyle=} opt_textTrackStyle
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.EditTracksInfoRequest
         */
        new(
            activeTrackIds?: Array<number>,
            textTrackStyle?: chrome.cast.media.TextTrackStyle
        );

        activeTrackIds: Array<number>;
        textTrackStyle: chrome.cast.media.TextTrackStyle;
    }

    interface GenericMediaMetadata {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.GenericMediaMetadata
         */
        new();

        metadataType: chrome.cast.media.MetadataType;
        title: string;
        subtitle: string;
        images: Array<chrome.cast.Image>;
        releaseDate: string;

        // Deprecated
        type: chrome.cast.media.MetadataType;
        releaseYear: number;
    }

    interface MovieMediaMetadata {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MovieMediaMetadata
         */
        new();

        metadataType: chrome.cast.media.MetadataType;
        title: string;
        studio: string;
        subtitle: string;
        images: Array<chrome.cast.Image>;
        releaseDate: string;

        // Deprecated
        type: chrome.cast.media.MetadataType;
        releaseYear: number;
    }

    interface TvShowMediaMetadata {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TvShowMediaMetadata
         */
        new();

        metadataType: chrome.cast.media.MetadataType;
        seriesTitle: string;
        title: string;
        season: number;
        episode: number;
        images: Array<chrome.cast.Image>;
        originalAirdate: string;

        // Deprecated
        type: chrome.cast.media.MetadataType;
        episodeTitle: string;
        seasonNumber: number;
        episodeNumber: number;
        releaseYear: number;
    }

    interface MusicTrackMediaMetadata  {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MusicTrackMediaMetadata
         */
        new();

        metadataType: chrome.cast.media.MetadataType;
        albumName: string;
        title: string;
        albumArtist: string;
        artist: string;
        composer: string;
        songName: string;
        trackNumber: number;
        discNumber: number;
        images: Array<chrome.cast.Image>;
        releaseDate: string;

        // Deprecated
        type: chrome.cast.media.MetadataType;
        artistName: string;
        releaseYear: number;
    }

    interface PhotoMediaMetadata {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.PhotoMediaMetadata
         */
        new();

        metadataType: chrome.cast.media.MetadataType;
        title: string;
        artist: string;
        location: string;
        images: Array<chrome.cast.Image>;
        latitude: number;
        longitude: number;
        width: number;
        height: number;
        creationDateTime: string;

        // Deprecated
        type: chrome.cast.media.MetadataType;
    }

    interface MediaInfo {
        /**
         * @param {string} contentId
         * @param {string} contentType
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MediaInfo
         */
        new(
            contentId: string,
            contentType: string
        );

        contentId: string;
        streamType: chrome.cast.media.StreamType;
        contentType: string;
        metadata: Object;
        duration: number;
        tracks: Array<chrome.cast.media.Track>;
        textTrackStyle: chrome.cast.media.TextTrackStyle;
        customData: Object;
    }

    interface Media {
        /**
         * @param {string} sessionId
         * @param {number} mediaSessionId
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media
         */
        new(
            sessionId: string,
            mediaSessionId: number
        );

        sessionId: string;
        mediaSessionId: number;
        media: chrome.cast.media.MediaInfo;
        playbackRate: number;
        playerState: chrome.cast.media.PlayerState;
        supportedMediaCommands: Array<chrome.cast.media.MediaCommand>;
        volume: chrome.cast.Volume;
        idleReason: chrome.cast.media.IdleReason;
        activeTrackIds: Array<number>;
        customData: Object;

        // Deprecated
        currentTime: number;

        /**
         * @param {chrome.cast.media.GetStatusRequest} getStatusRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        getStatus(
            getStatusRequest: chrome.cast.media.GetStatusRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {chrome.cast.media.PlayRequest} playRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        play(
            playRequest: chrome.cast.media.PlayRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {chrome.cast.media.PauseRequest} pauseRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        pause(
            pauseRequest: chrome.cast.media.PauseRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.SeekRequest} seekRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        seek(
            seekRequest: chrome.cast.media.SeekRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {chrome.cast.media.StopRequest} stopRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        stop(
            stopRequest: chrome.cast.media.StopRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.VolumeRequest} volumeRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        setVolume(
            volumeRequest: chrome.cast.media.VolumeRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.EditTracksInfoRequest} editTracksInfoRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        editTracksInfo(
            editTracksInfoRequest: chrome.cast.media.EditTracksInfoRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.MediaCommand} command
         * @return {boolean}
         */
        supportsCommand(
            command: chrome.cast.media.MediaCommand
        ): boolean

        /**
         * @param {function(boolean)} listener
         */
        addUpdateListener(
            listener: (boolean) => void
        )

        /**
         * @param {function(boolean)} listener
         */
        removeUpdateListener(
            listener: (boolean) => void
        )

        // Deprecated
        /**
         * @return {number}
         * @suppress {deprecated} Uses currentTime member to compute estimated time.
         */
        getEstimatedTime(): number
    }

    interface Track {
        /**
         * @param {number} trackId
         * @param {!chrome.cast.media.TrackType} trackType
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Track
         */
        new(
            trackId: number,
            trackType: chrome.cast.media.TrackType
        );

        trackId: number;
        trackContentId: string;
        trackContentType: string;
        type: chrome.cast.media.TrackType;
        name: string;
        language: string;
        subtype: chrome.cast.media.TextTrackType;
        customData: Object;
    }

    interface TextTrackStyle {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TextTrackStyle
         */
        new();

        foregroundColor: string;
        backgroundColor: string;
        edgeType: chrome.cast.media.TextTrackEdgeType;
        edgeColor: string;
        windowType: chrome.cast.media.TextTrackWindowType;
        windowColor: string;
        windowRoundedCornerRadius: number;
        fontScale: number;
        fontFamily: string;
        fontGenericFamily: chrome.cast.media.TextTrackFontGenericFamily;
        fontStyle: chrome.cast.media.TextTrackFontStyle;
        customData: Object;
    }
}

/**
 * @namespace
 * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.timeout
 */
declare module chrome.cast.media.timeout {
    var load: number;
    var getStatus: number;
    var play: number;
    var pause: number;
    var seek: number;
    var stop: number;
    var setVolume: number;
    var editTracksInfo: number;
}