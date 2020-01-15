import { RequestData, MediaInformation, Track, MediaStatus, LiveSeekableRange } from './cast.framework.messages';
import * as category from './cast.framework.events.category';

export import category = category;

export as namespace events;

/**
 * Player event types for @see{@link framework.PlayerManager}.
 * https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events#.EventType
 */
export enum EventType {
    ALL = '*',
    ABORT = 'ABORT',
    CAN_PLAY = 'CAN_PLAY',
    CAN_PLAY_THROUGH = 'CAN_PLAY_THROUGH',
    DURATION_CHANGE = 'DURATION_CHANGE',
    EMPTIED = 'EMPTIED',
    ENDED = 'ENDED',
    LOADED_DATA = 'LOADED_DATA',
    LOADED_METADATA = 'LOADED_METADATA',
    LOAD_START = 'LOAD_START',
    PAUSE = 'PAUSE',
    PLAY = 'PLAY',
    PLAYING = 'PLAYING',
    PROGRESS = 'PROGRESS',
    RATE_CHANGE = 'RATE_CHANGE',
    SEEKED = 'SEEKED',
    SEEKING = 'SEEKING',
    STALLED = 'STALLED',
    TIME_UPDATE = 'TIME_UPDATE',
    SUSPEND = 'SUSPEND',
    WAITING = 'WAITING',
    BITRATE_CHANGED = 'BITRATE_CHANGED',
    BREAK_STARTED = 'BREAK_STARTED',
    BREAK_ENDED = 'BREAK_ENDED',
    BREAK_CLIP_LOADING = 'BREAK_CLIP_LOADING',
    BREAK_CLIP_STARTED = 'BREAK_CLIP_STARTED',
    BREAK_CLIP_ENDED = 'BREAK_CLIP_ENDED',
    BUFFERING = 'BUFFERING',
    CACHE_LOADED = 'CACHE_LOADED',
    CACHE_HIT = 'CACHE_HIT',
    CACHE_INSERTED = 'CACHE_INSERTED',
    CLIP_STARTED = 'CLIP_STARTED',
    CLIP_ENDED = 'CLIP_ENDED',
    EMSG = 'EMSG',
    ERROR = 'ERROR',
    ID3 = 'ID3',
    MEDIA_STATUS = 'MEDIA_STATUS',
    CUSTOM_STATE = 'CUSTOM_STATE',
    MEDIA_INFORMATION_CHANGED = 'MEDIA_INFORMATION_CHANGED',
    MEDIA_FINISHED = 'MEDIA_FINISHED',
    PLAYER_PRELOADING = 'PLAYER_PRELOADING',
    PLAYER_PRELOADING_CANCELLED = 'PLAYER_PRELOADING_CANCELLED',
    PLAYER_LOAD_COMPLETE = 'PLAYER_LOAD_COMPLETE',
    PLAYER_LOADING = 'PLAYER_LOADING',
    SEGMENT_DOWNLOADED = 'SEGMENT_DOWNLOADED',
    REQUEST_SEEK = 'REQUEST_SEEK',
    REQUEST_LOAD = 'REQUEST_LOAD',
    REQUEST_STOP = 'REQUEST_STOP',
    REQUEST_PAUSE = 'REQUEST_PAUSE',
    REQUEST_PLAY = 'REQUEST_PLAY',
    REQUEST_PLAY_AGAIN = 'REQUEST_PLAY_AGAIN',
    REQUEST_PLAYBACK_RATE_CHANGE = 'REQUEST_PLAYBACK_RATE_CHANGE',
    REQUEST_SKIP_AD = 'REQUEST_SKIP_AD',
    REQUEST_VOLUME_CHANGE = 'REQUEST_VOLUME_CHANGE',
    REQUEST_EDIT_TRACKS_INFO = 'REQUEST_EDIT_TRACKS_INFO',
    REQUEST_EDIT_AUDIO_TRACKS = 'REQUEST_EDIT_AUDIO_TRACKS',
    REQUEST_SET_CREDENTIALS = 'REQUEST_SET_CREDENTIALS',
    REQUEST_LOAD_BY_ENTITY = 'REQUEST_LOAD_BY_ENTITY',
    REQUEST_USER_ACTION = 'REQUEST_USER_ACTION',
    REQUEST_DISPLAY_STATUS = 'REQUEST_DISPLAY_STATUS',
    REQUEST_CUSTOM_COMMAND = 'REQUEST_CUSTOM_COMMAND',
    REQUEST_FOCUS_STATE = 'REQUEST_FOCUS_STATE',
    REQUEST_QUEUE_LOAD = 'REQUEST_QUEUE_LOAD',
    REQUEST_QUEUE_INSERT = 'REQUEST_QUEUE_INSERT',
    REQUEST_QUEUE_UPDATE = 'REQUEST_QUEUE_UPDATE',
    REQUEST_QUEUE_REMOVE = 'REQUEST_QUEUE_REMOVE',
    REQUEST_QUEUE_REORDER = 'REQUEST_QUEUE_REORDER',
    REQUEST_QUEUE_GET_ITEM_RANGE = 'REQUEST_QUEUE_GET_ITEM_RANGE',
    REQUEST_QUEUE_GET_ITEMS = 'REQUEST_QUEUE_GET_ITEMS',
    REQUEST_QUEUE_GET_ITEM_IDS = 'REQUEST_QUEUE_GET_ITEM_IDS',
    REQUEST_PRECACHE = 'REQUEST_PRECACHE',
    LIVE_IS_MOVING_WINDOW_CHANGED = 'LIVE_IS_MOVING_WINDOW_CHANGED',
    LIVE_ENDED = 'LIVE_ENDED',
}

export enum DetailedErrorCode {
    MEDIA_UNKNOWN = 100,
    MEDIA_ABORTED = 101,
    MEDIA_DECODE = 102,
    MEDIA_NETWORK = 103,
    MEDIA_SRC_NOT_SUPPORTED = 104,
    SOURCE_BUFFER_FAILURE = 110,
    MEDIAKEYS_UNKNOWN = 200,
    MEDIAKEYS_NETWORK = 201,
    MEDIAKEYS_UNSUPPORTED = 202,
    MEDIAKEYS_WEBCRYPTO = 203,
    NETWORK_UNKNOWN = 300,
    SEGMENT_NETWORK = 301,
    HLS_NETWORK_MASTER_PLAYLIST = 311,
    HLS_NETWORK_PLAYLIST = 312,
    HLS_NETWORK_NO_KEY_RESPONSE = 313,
    HLS_NETWORK_KEY_LOAD = 314,
    HLS_NETWORK_INVALID_SEGMENT = 315,
    HLS_SEGMENT_PARSING = 316,
    DASH_NETWORK = 321,
    DASH_NO_INIT = 322,
    SMOOTH_NETWORK = 331,
    SMOOTH_NO_MEDIA_DATA = 332,
    MANIFEST_UNKNOWN = 400,
    HLS_MANIFEST_MASTER = 411,
    HLS_MANIFEST_PLAYLIST = 412,
    DASH_MANIFEST_UNKNOWN = 420,
    DASH_MANIFEST_NO_PERIODS = 421,
    DASH_MANIFEST_NO_MIMETYPE = 422,
    DASH_INVALID_SEGMENT_INFO = 423,
    SMOOTH_MANIFEST = 431,
    SEGMENT_UNKNOWN = 500,
    TEXT_UNKNOWN = 600,
    APP = 900,
    BREAK_CLIP_LOADING_ERROR = 901,
    BREAK_SEEK_INTERCEPTOR_ERROR = 902,
    IMAGE_ERROR = 903,
    LOAD_INTERRUPTED = 904,
    LOAD_FAILED = 905,
    MEDIA_ERROR_MESSAGE = 906,
    GENERIC = 999,
}

export type EndedReason = 'END_OF_STREAM' | 'ERROR' | 'STOPPED' | 'INTERRUPTED' | 'SKIPPED' | 'BREAK_SWITCH';

/**
 * Event data for @see{@link EventType.SEGMENT_DOWNLOADED} event.
 */
export class SegmentDownloadedEvent extends Event {
    constructor(downloadTime?: number, size?: number);

    /**
     * The time it took to download the segment; in milliseconds.
     */
    downloadTime?: number;

    /**
     * The number of bytes in the segment.
     */
    size?: number;
}

/**
 * Event data for all events that represent requests made to the receiver.
 */
export class RequestEvent extends Event {
    constructor(type: EventType, requestData?: RequestData, senderId?: string);

    /**
     * The data that was sent with the request.
     */
    requestData?: RequestData;

    /**
     * The sender id the request came from.
     */
    senderId?: string;
}

/**
 * Event data superexport class for all events dispatched by @see{@link PlayerManager}
 */
export class Event {
    constructor(type: EventType);

    /**
     * Type of the event.
     */
    type: EventType;
}
/**
 * Event data for @see{@link EventType.MEDIA_STATUS} event.
 */
export class MediaStatusEvent extends Event {
    constructor(type: EventType, mediaStatus?: MediaStatus);

    /**
     * The media status that was sent.
     */
    mediaStatus?: MediaStatus;
}
/**
 * Event data for pause events forwarded from the MediaElement.
 */
export class MediaPauseEvent extends Event {
    constructor(currentMediaTime?: number, ended?: boolean);

    /**
     * Indicate if the media ended (indicates the pause was fired due to stream reached the end).
     */
    ended?: boolean;
}
/**
 * Event data for @see{@link EventType.MEDIA_FINISHED} event.
 */
export class MediaFinishedEvent extends Event {
    constructor(currentMediaTime?: number, endedReason?: EndedReason);

    /**
     * The time when the media finished (in seconds). For an item in a queue; this value represents the time in the currently playing queue item ( where 0 means the queue item has just started).
     */
    currentMediaTime?: number;

    /**
     * The reason the media finished.
     */
    endedReason?: EndedReason;
}
/**
 * Event data for all events forwarded from the MediaElement.
 */
export class MediaElementEvent extends Event {
    constructor(type: EventType, currentMediaTime?: number);

    /**
     * The time in the currently playing clip when the event was fired (in seconds). Undefined if playback has not started yet.
     */
    currentMediaTime?: number;
}
/**
 * Event data for all events pertaining to processing a load / preload request. made to the player.
 */
export class LoadEvent extends Event {
    constructor(type: EventType, media?: MediaInformation);

    /**
     * Information about the media being loaded.
     */
    media: MediaInformation;
}
/**
 * Event data for @see{@link EventType.INBAND_TRACK_ADDED} event.
 */
export class InbandTrackAddedEvent {
    constructor(track: Track);

    /**
     * Added track.
     */
    track: Track;
}

/** Event data for @see{@link EventType.ID3} event. */
export class Id3Event extends Event {
    constructor(segmentData: Uint8Array, timestamp: number);

    /**
     * The segment data.
     */
    segmentData: Uint8Array;

    /**
     * The timestamp in seconds.
     */
    timestamp: number;
}
/**
 * Event data for @see{@link EventType.EMSG} event.
 */
export class EmsgEvent extends Event {
    constructor(emsgData: any);

    /**
     * The time that the event ends (in presentation time). Undefined if using legacy Dash support.
     */
    endTime: any;

    /**
     * The duration of the event (in units of timescale). Undefined if using legacy Dash support.
     */
    eventDuration: any;

    /**
     * A field identifying this instance of the message. Undefined if using legacy Dash support.
     */
    id: any;

    /**
     * Body of the message. Undefined if using legacy Dash support.
     */
    messageData: any;

    /**
     * The offset that the event starts; relative to the start of the segment this is contained in (in units of timescale). Undefined if using legacy Dash support.
     */
    presentationTimeDelta: any;

    /**
     * Identifies the message scheme. Undefined if using legacy Dash support.
     */
    schemeIdUri: any;

    /**
     * The segment data. This is only defined if using legacy Dash support.
     */
    segmentData: any;

    /**
     * The time that the event starts (in presentation time). Undefined if using legacy Dash support.
     */
    startTime: any;

    /**
     * Provides the timescale; in ticks per second. Undefined if using legacy Dash support.
     */
    timescale: any;

    /**
     * Specifies the value for the event. Undefined if using legacy Dash support.
     */
    value: any;
}
/**
 * Event data for @see{@link EventType.CLIP_ENDED} event.
 */
export class ClipEndedEvent extends Event {
    constructor(currentMediaTime: number, endedReason?: EndedReason);

    /**
     * The time in media (in seconds) when clip ended.
     */
    currentMediaTime: number;

    /**
     * The reason the clip ended.
     */
    endedReason?: EndedReason;
}

/**
 * Event data for @see{@link EventType.CACHE_LOADED} event.
 */
export class CacheLoadedEvent extends Event {
    constructor(media?: MediaInformation);

    /**
     * Information about the media being cached.
     */
    media: MediaInformation;
}

export class CacheItemEvent extends Event {
    constructor(type: EventType, url: string);

    /**
     * The URL of data fetched from cache
     */
    url: string;
}

export class BufferingEvent extends Event {
    constructor(isBuffering: boolean);

    /**
     * True if the player is entering a buffering state.
     */
    isBuffering: boolean;
}

export class BreaksEvent extends Event {
    constructor(
        type: EventType,
        currentMediaTime?: number,
        index?: number,
        total?: number,
        whenSkippable?: number,
        endedReason?: EndedReason,
        breakClipId?: string,
        breakId?: string,
    );

    /**
     * The break's id. Refer to Break.id
     */
    breakId?: string;

    /**
     * The break clip's id. Refer to BreakClip.id
     */
    breakClipId?: string;

    /**
     * The time in the currently playing media when the break event occurred.
     */
    currentMediaTime?: number;

    /**
     * The reason the break clip ended.
     */
    endedReason?: EndedReason;

    /**
     * Index of break clip; which starts from 1.
     */
    index: number;

    /**
     * Total number of break clips.
     */
    total: number;

    /**
     * When to skip current break clip in sec; after break clip begins to play.
     */
    whenSkippable?: number;
}

/**
 * Event data for @see {@link EventType.BITRATE_CHANGED} event.
 */
export class BitrateChangedEvent {
    constructor(totalBitrate?: number);

    /** The bitrate of the media (audio and video) in bits per second. */
    totalBitrate: number;
}

/**
 * Event data for @see{@link EventType.ERROR} event.
 */
export class ErrorEvent extends Event {
    constructor(detailedErrorCode?: DetailedErrorCode, error?: any, reason?: cast.framework.messages.ErrorReason);

    /**
     * An error code representing the cause of the error.
     */
    detailedErrorCode?: DetailedErrorCode;

    /**
     * The error object. This could be an Error object (e.g., if an Error was thrown in an event handler) or an object with error information (e.g., if the receiver received an invalid command).
     */
    error?: any;

    /**
     * Optional error reason.
     */
    reason?: cast.framework.messages.ErrorReason;
}

/**
 * Event data for @see{@link EventType.CUSTOM_STATE} event.
 */
export class CustomStateEvent extends Event {
    constructor(state: any);

    state: any;
}

/**
 * Event data for @see{@link EventType.MEDIA_INFORMATION_CHANGED} event.
 */
export class MediaInformationChangedEvent extends Event {
    constructor(media?: MediaInformation);

    media?: MediaInformation;
}

/**
 * Event data for @see{@link EventType.LIVE_ENDED} and @see{@link EventType.LIVE_IS_MOVING_WINDOW_CHANGED} events.
 */
export class LiveStatusEvent extends Event {
    constructor(type: EventType, liveSeekableRange: LiveSeekableRange);

    /**
     * Updated live status.
     */
    liveSeekableRange: LiveSeekableRange;
}
