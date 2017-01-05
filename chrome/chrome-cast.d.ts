// Type definitions for Chrome Cast application development
// Project: https://developers.google.com/cast/
// Definitions by: Thomas Stig Jacobsen <https://github.com/eXeDK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

////////////////////
// Cast
// @see https://code.google.com/p/chromium/codesearch#chromium/src/ui/file_manager/externs/chrome_cast.js
////////////////////
declare namespace chrome.cast {
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
     * @const {!Array<number>}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.VERSION
     */
    var VERSION: Array<number>;

    /**
     * @type {boolean}
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.isAvailable
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
     * @param {!Array<chrome.cast.Receiver>} receivers
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
    ): void

    interface ApiConfig {
        /**
         * @param {!chrome.cast.SessionRequest} sessionRequest
         * @param {function(!chrome.cast.Session)} sessionListener
         * @param {function(!chrome.cast.ReceiverAvailability,Array<Object>)}
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
            defaultActionPolicy?: chrome.cast.DefaultActionPolicy
        ):ApiConfig;

        sessionRequest: chrome.cast.SessionRequest;
        sessionListener: (session: chrome.cast.Session) => void;
        receiverListener: (receiverAvailability: chrome.cast.ReceiverAvailability) => void;
        autoJoinPolicy?: chrome.cast.AutoJoinPolicy;
        defaultActionPolicy: chrome.cast.DefaultActionPolicy;
    }

    interface Error {
        /**
         * @param {!chrome.cast.ErrorCode} code
         * @param {string=} opt_description
         * @param {Object=} opt_details
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Error
         */
        new(
            code: chrome.cast.ErrorCode,
            description?: string,
            details?: Object
        ):Error;

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
        ):Image;

        url: string;
        height?: number;
        width?: number;
    }

    interface SenderApplication {
        /**
         * @param {!chrome.cast.SenderPlatform} platform
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.SenderApplication
         */
        new(
            platform: chrome.cast.SenderPlatform
        ):SenderApplication;

        platform: chrome.cast.SenderPlatform;
        url?: string;
        packageId?: string;
    }

    interface SessionRequest {
        /**
         * @param {string} appId
         * @param {!Array<chrome.cast.Capability>=} opt_capabilities
         * @param {number=} opt_timeout
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.SessionRequest
         */
        new(
            appId: string,
            capabilities?: Array<chrome.cast.Capability>,
            timeout?: number
        ):SessionRequest;

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
         * @param {!Array<chrome.cast.Image>} appImages
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
        ):Session;

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
        ):void

        /**
         * @param {boolean} muted
         * @param {function()} successCallback
         * @param {function(chrome.cast.Error)} errorCallback
         */
        setReceiverMuted(
            muted: boolean,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ):void

        /**
         * @param {function()} successCallback
         * @param {function(chrome.cast.Error)} errorCallback
         */
        leave(
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ):void

        /**
         * @param {function()} successCallback
         * @param {function(chrome.cast.Error)} errorCallback
         */
        stop(
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ):void

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
        ):void

        /**
         * @param {function(boolean)} listener
         */
        addUpdateListener(
            listener: (isAlive:boolean) => void
        ):void

        /**
         * @param {function(boolean)} listener
         */
        removeUpdateListener(
            listener: (isAlive:boolean) => void
        ):void

        /**
         * @param {string} namespace
         * @param {function(string,string)} listener
         */
        addMessageListener(
            namespace: string,
            listener: (namespace: string, message: string) => void
        ):void

        /**
         * @param {string} namespace
         * @param {function(string,string)} listener
         */
        removeMessageListener(
            namespace: string,
            listener: (namespace:string, message:string) => void
        ):void

        /**
         * @param {function(!chrome.cast.media.Media)} listener
         */
        addMediaListener(
            listener: (media: chrome.cast.media.Media) => void
        ):void

        /**
         * @param {function(!chrome.cast.media.Media)} listener
         */
        removeMediaListener(
            listener: (media: chrome.cast.media.Media) => void
        ):void

        /**
         * @param {!chrome.cast.media.LoadRequest} loadRequest
         * @param {function(!chrome.cast.media.Media)} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        loadMedia(
            loadRequest: chrome.cast.media.LoadRequest,
            successCallback: (media: chrome.cast.media.Media) => void,
            errorCallback: (error: chrome.cast.Error) => void
        ):void

        /**
         * @param {!chrome.cast.media.QueueLoadRequest} queueLoadRequest
         * @param {function(!chrome.cast.media.Media)} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueLoad(
            queueLoadRequest: chrome.cast.media.QueueLoadRequest,
            successCallback: (media: chrome.cast.media.Media) => void,
            errorCallback: (error: chrome.cast.Error) => void
        ):void
    }

    interface Receiver {
        /**
         * @param {string} label
         * @param {string} friendlyName
         * @param {Array<chrome.cast.Capability>=} opt_capabilities
         * @param {chrome.cast.Volume=} opt_volume
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Receiver
         */
        new(
            label: string,
            friendlyName: string,
            capabilities?: Array<chrome.cast.Capability>,
            volume?: chrome.cast.Volume
        ):Receiver;

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
         * @param {!Array<chrome.cast.Image>} appImages
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ReceiverDisplayStatus
         */
        new(
            statusText: string,
            appImages: Array<chrome.cast.Image>
        ):ReceiverDisplayStatus;

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
        ):Volume;

        level?: number;
        muted?: boolean;
    }
}

declare namespace chrome.cast.media {

    var DEFAULT_MEDIA_RECEIVER_APP_ID: string;

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
     * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media#.RepeatMode
     */
    interface RepeatMode {
        OFF:string;
        ALL:string;
        SINGLE:string;
        ALL_AND_SHUFFLE:string;
    }

    interface QueueItem {
        /**
         * @param {!chrome.cast.media.MediaInfo} mediaInfo
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueItem
         */
        new(
            mediaInfo: chrome.cast.media.MediaInfo
        ):QueueItem;

        activeTrackIds: Array<Number>;
        autoplay: boolean;
        customData: Object;
        itemId: number;
        media: chrome.cast.media.MediaInfo;
        preloadTime: number;
        startTime: number;
    }

    interface QueueLoadRequest {
        /**
         * @param {!Array<chrome.cast.media.QueueItem>} items
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueLoadRequest
         */
        new(
            items: Array<chrome.cast.media.QueueItem>
        ):QueueLoadRequest;

        customData: Object;
        items: Array<chrome.cast.media.QueueItem>;
        repeatMode: chrome.cast.media.RepeatMode;
        startIndex: number;
    }

    interface QueueInsertItemsRequest {
        /**
         * @param {!Array<chrome.cast.media.QueueItem>}
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueInsertItemsRequest
         */
        new(
            itemsToInsert: Array<chrome.cast.media.QueueItem>
        ):QueueInsertItemsRequest;

        customData: Object;
        insertBefore:number;
        items: Array<chrome.cast.media.QueueItem>;
    }

    interface QueueRemoveItemsRequest {
        /**
         * @param {!Array<number>}
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueRemoveItemsRequest
         */
        new(
            itemIdsToRemove: Array<number>
        ):QueueRemoveItemsRequest;

        customData: Object;
        itemIds: Array<number>;
    }

    interface QueueReorderItemsRequest {
        /**
         * @param {!Array<number>}
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueReorderItemsRequest
         */
        new(
            itemIdsToReorder: Array<number>
        ):QueueReorderItemsRequest;

        customData: Object;
        insertBefore: number;
        itemIds: Array<number>;
    }

    interface QueueUpdateItemsRequest {
        /**
         * @param {!Array<chrome.cast.media.QueueItem>}
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueUpdateItemsRequest
         */
        new(
            itemsToUpdate: Array<chrome.cast.media.QueueItem>
        ):QueueUpdateItemsRequest;

        customData: Object;
        item: Array<chrome.cast.media.QueueItem>;
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
        new():GetStatusRequest;

        customData: Object;
    }

    interface PauseRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.PauseRequest
         */
        new():PauseRequest;

        customData: Object;
    }

    interface PlayRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.PlayRequest
         */
        new():PlayRequest;

        customData: Object;
    }

    interface SeekRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.SeekRequest
         */
        new():SeekRequest;

        currentTime: number;
        resumeState: chrome.cast.media.ResumeState;
        customData: Object;
    }

    interface StopRequest {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.StopRequest
         */
        new():StopRequest;

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
        ):VolumeRequest;

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
        ):LoadRequest;

        activeTrackIds: Array<number>;
        autoplay: boolean;
        currentTime: number;
        customData: Object;
        media: chrome.cast.media.MediaInfo;
    }

    interface EditTracksInfoRequest {
        /**
         * @param {Array<number>=} opt_activeTrackIds
         * @param {chrome.cast.media.TextTrackStyle=} opt_textTrackStyle
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.EditTracksInfoRequest
         */
        new(
            activeTrackIds?: Array<number>,
            textTrackStyle?: chrome.cast.media.TextTrackStyle
        ):EditTracksInfoRequest;

        activeTrackIds: Array<number>;
        textTrackStyle: chrome.cast.media.TextTrackStyle;
    }

    interface GenericMediaMetadata {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.GenericMediaMetadata
         */
        new():GenericMediaMetadata;

        images: Array<chrome.cast.Image>;
        metadataType: chrome.cast.media.MetadataType;
        releaseDate: string;
        /** @deprecated. Use releaseDate instead. */
        releaseYear: number;
        subtitle: string;
        title: string;
        /** @deprecated. Use metadataType instead. */
        type: chrome.cast.media.MetadataType;
    }

    interface MovieMediaMetadata {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MovieMediaMetadata
         */
        new():MovieMediaMetadata;

        images: Array<chrome.cast.Image>;
        metadataType: chrome.cast.media.MetadataType;
        releaseDate: string;
        /** @deprecated. Use releaseDate instead. */
        releaseYear: number;
        subtitle: string;
        title: string;
        studio: string;
        /** @deprecated. Use metadataType instead. */
        type: chrome.cast.media.MetadataType;
    }

    interface TvShowMediaMetadata {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.TvShowMediaMetadata
         */
        new(): TvShowMediaMetadata;

        metadataType: chrome.cast.media.MetadataType;
        seriesTitle: string;
        title: string;
        season: number;
        episode: number;
        images: Array<chrome.cast.Image>;
        originalAirdate: string;

        /** @deprecated. Use metadataType instead. */
        type: chrome.cast.media.MetadataType;
        /** @deprecated. Use title instead. */
        episodeTitle: string;
        /** @deprecated. Use season instead. */
        seasonNumber: number;
        /** @deprecated. Use episode instead. */
        episodeNumber: number;
        /** @deprecated. Use originalAirdate instead. */
        releaseYear: number;
    }

    interface MusicTrackMediaMetadata  {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MusicTrackMediaMetadata
         */
        new(): MusicTrackMediaMetadata;

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

        /** @deprecated. Use metadataType instead. */
        type: chrome.cast.media.MetadataType;
        /** @deprecated. Use artist instead. */
        artistName: string;
        /** @deprecated. Use releaseDate instead. */
        releaseYear: number;
    }

    interface PhotoMediaMetadata {
        /**
         * @constructor
         * @see https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.PhotoMediaMetadata
         */
        new(): PhotoMediaMetadata;

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

        /** @deprecated. Use metadataType instead. */
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
        ): MediaInfo;

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
        ): Media;

        activeTrackIds: Array<number>;
        currentItemId: number;
        customData: Object;
        idleReason: chrome.cast.media.IdleReason;
        items: Array<chrome.cast.media.QueueItem>;
        loadingItemId: number;
        media: chrome.cast.media.MediaInfo;
        mediaSessionId: number;
        playbackRate: number;
        playerState: chrome.cast.media.PlayerState;
        preloadedItemId: number;
        repeatMode: chrome.cast.media.RepeatMode;
        sessionId: string;
        supportedMediaCommands: Array<chrome.cast.media.MediaCommand>;
        volume: chrome.cast.Volume;

        /** @deprecated. Use getEstimatedTime instead */
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
            listener: (isAlive:boolean) => void
        ): void

        /**
         * @param {function(boolean)} listener
         */
        removeUpdateListener(
            listener: (isAlive:boolean) => void
        ): void

        /**
         * @return {number}
         * @suppress {deprecated} Uses currentTime member to compute estimated time.
         */
        getEstimatedTime(): number

        /**
         * @param {!chrome.cast.media.QueueItem} item
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueAppendItem (
            item: chrome.cast.media.QueueItem,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.QueueInsertItemsRequest} queueInsertItemsRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueInsertItems (
            queueInsertItemsRequest: chrome.cast.media.QueueInsertItemsRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!number} itemId
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueJumpToItem (
            itemId: number,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!number} itemId
         * @param {!number} newIndex
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueMoveItemToNewIndex (
            itemId: number,
            newIndex: number,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueNext (
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queuePrev (
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!number} itemId
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueRemoveItem (
            itemId: number,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.QueueReorderItemsRequest} queueReorderItemsRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueReorderItems (
            queueReorderItemsRequest: chrome.cast.media.QueueReorderItemsRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.RepeatMode} repeatMode
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueSetRepeatMode (
            repeatMode: chrome.cast.media.RepeatMode,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

        /**
         * @param {!chrome.cast.media.QueueUpdateItemsRequest} queueUpdateItemsRequest
         * @param {function()} successCallback
         * @param {function(!chrome.cast.Error)} errorCallback
         */
        queueUpdateItems (
            queueUpdateItemsRequest: chrome.cast.media.QueueUpdateItemsRequest,
            successCallback: Function,
            errorCallback: (error: chrome.cast.Error) => void
        ): void

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
        ): Track;

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
        new(): TextTrackStyle;

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
declare namespace chrome.cast.media.timeout {
    var load: number;
    var getStatus: number;
    var play: number;
    var pause: number;
    var seek: number;
    var stop: number;
    var setVolume: number;
    var editTracksInfo: number;
    var queueInsert: number;
    var queueLoad: number;
    var queueRemove: number;
    var queueReorder: number;
    var queueUpdate: number;
}
