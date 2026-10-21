import * as category from "./cast.framework.events.category";
import {
    ErrorReason,
    LiveSeekableRange,
    MediaInformation,
    MediaStatus,
    RequestData,
    Track,
} from "./cast.framework.messages";

export import category = category;
import { TimedMetadata } from "./cast.framework";

export as namespace events;

/**
 * Player event types for @see{@link framework.PlayerManager}.
 * https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events#.EventType
 */
export const EventType: {
    readonly ALL: "*";
    readonly ABORT: "ABORT";
    readonly CAN_PLAY: "CAN_PLAY";
    readonly CAN_PLAY_THROUGH: "CAN_PLAY_THROUGH";
    readonly DURATION_CHANGE: "DURATION_CHANGE";
    readonly EMPTIED: "EMPTIED";
    readonly ENDED: "ENDED";
    readonly LOADED_DATA: "LOADED_DATA";
    readonly LOADED_METADATA: "LOADED_METADATA";
    readonly LOAD_START: "LOAD_START";
    readonly PAUSE: "PAUSE";
    readonly PLAY: "PLAY";
    readonly PLAYING: "PLAYING";
    readonly PROGRESS: "PROGRESS";
    readonly RATE_CHANGE: "RATE_CHANGE";
    readonly SEEKED: "SEEKED";
    readonly SEEKING: "SEEKING";
    readonly STALLED: "STALLED";
    readonly TIME_UPDATE: "TIME_UPDATE";
    readonly SUSPEND: "SUSPEND";
    readonly WAITING: "WAITING";
    readonly BITRATE_CHANGED: "BITRATE_CHANGED";
    readonly BREAK_STARTED: "BREAK_STARTED";
    readonly BREAK_ENDED: "BREAK_ENDED";
    readonly BREAK_CLIP_LOADING: "BREAK_CLIP_LOADING";
    readonly BREAK_CLIP_STARTED: "BREAK_CLIP_STARTED";
    readonly BREAK_CLIP_ENDED: "BREAK_CLIP_ENDED";
    readonly BUFFERING: "BUFFERING";
    readonly CACHE_LOADED: "CACHE_LOADED";
    readonly CACHE_HIT: "CACHE_HIT";
    readonly CACHE_INSERTED: "CACHE_INSERTED";
    readonly CLIP_STARTED: "CLIP_STARTED";
    readonly CLIP_ENDED: "CLIP_ENDED";
    readonly EMSG: "EMSG";
    readonly ERROR: "ERROR";
    readonly ID3: "ID3";
    readonly MEDIA_STATUS: "MEDIA_STATUS";
    readonly CUSTOM_STATE: "CUSTOM_STATE";
    readonly MEDIA_INFORMATION_CHANGED: "MEDIA_INFORMATION_CHANGED";
    readonly MEDIA_FINISHED: "MEDIA_FINISHED";
    readonly PLAYER_PRELOADING: "PLAYER_PRELOADING";
    readonly PLAYER_PRELOADING_CANCELLED: "PLAYER_PRELOADING_CANCELLED";
    readonly PLAYER_LOAD_COMPLETE: "PLAYER_LOAD_COMPLETE";
    readonly PLAYER_LOADING: "PLAYER_LOADING";
    readonly SEGMENT_DOWNLOADED: "SEGMENT_DOWNLOADED";
    readonly REQUEST_SEEK: "REQUEST_SEEK";
    readonly REQUEST_LOAD: "REQUEST_LOAD";
    readonly REQUEST_STOP: "REQUEST_STOP";
    readonly REQUEST_PAUSE: "REQUEST_PAUSE";
    readonly REQUEST_PLAY: "REQUEST_PLAY";
    readonly REQUEST_PLAY_AGAIN: "REQUEST_PLAY_AGAIN";
    readonly REQUEST_PLAYBACK_RATE_CHANGE: "REQUEST_PLAYBACK_RATE_CHANGE";
    readonly REQUEST_SKIP_AD: "REQUEST_SKIP_AD";
    readonly REQUEST_VOLUME_CHANGE: "REQUEST_VOLUME_CHANGE";
    readonly REQUEST_EDIT_TRACKS_INFO: "REQUEST_EDIT_TRACKS_INFO";
    readonly REQUEST_EDIT_AUDIO_TRACKS: "REQUEST_EDIT_AUDIO_TRACKS";
    readonly REQUEST_SET_CREDENTIALS: "REQUEST_SET_CREDENTIALS";
    readonly REQUEST_LOAD_BY_ENTITY: "REQUEST_LOAD_BY_ENTITY";
    readonly REQUEST_USER_ACTION: "REQUEST_USER_ACTION";
    readonly REQUEST_DISPLAY_STATUS: "REQUEST_DISPLAY_STATUS";
    readonly REQUEST_CUSTOM_COMMAND: "REQUEST_CUSTOM_COMMAND";
    readonly REQUEST_FOCUS_STATE: "REQUEST_FOCUS_STATE";
    readonly REQUEST_QUEUE_LOAD: "REQUEST_QUEUE_LOAD";
    readonly REQUEST_QUEUE_INSERT: "REQUEST_QUEUE_INSERT";
    readonly REQUEST_QUEUE_UPDATE: "REQUEST_QUEUE_UPDATE";
    readonly REQUEST_QUEUE_REMOVE: "REQUEST_QUEUE_REMOVE";
    readonly REQUEST_QUEUE_REORDER: "REQUEST_QUEUE_REORDER";
    readonly REQUEST_QUEUE_GET_ITEM_RANGE: "REQUEST_QUEUE_GET_ITEM_RANGE";
    readonly REQUEST_QUEUE_GET_ITEMS: "REQUEST_QUEUE_GET_ITEMS";
    readonly REQUEST_QUEUE_GET_ITEM_IDS: "REQUEST_QUEUE_GET_ITEM_IDS";
    readonly REQUEST_PRECACHE: "REQUEST_PRECACHE";
    readonly TIMED_METADATA_CHANGED: "TIMED_METADATA_CHANGED";
    readonly TIMED_METADATA_ENTER: "TIMED_METADATA_ENTER";
    readonly TIMED_METADATA_EXIT: "TIMED_METADATA_EXIT";
    readonly LIVE_IS_MOVING_WINDOW_CHANGED: "LIVE_IS_MOVING_WINDOW_CHANGED";
    readonly LIVE_ENDED: "LIVE_ENDED";
    readonly TRACKS_CHANGED: "TRACKS_CHANGED";
};
/**
 * Player event types for @see{@link framework.PlayerManager}.
 * https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events#.EventType
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

export const DetailedErrorCode: {
    readonly MEDIA_UNKNOWN: 100;
    readonly MEDIA_ABORTED: 101;
    readonly MEDIA_DECODE: 102;
    readonly MEDIA_NETWORK: 103;
    readonly MEDIA_SRC_NOT_SUPPORTED: 104;
    readonly SOURCE_BUFFER_FAILURE: 110;
    readonly MEDIAKEYS_UNKNOWN: 200;
    readonly MEDIAKEYS_NETWORK: 201;
    readonly MEDIAKEYS_UNSUPPORTED: 202;
    readonly MEDIAKEYS_WEBCRYPTO: 203;
    readonly NETWORK_UNKNOWN: 300;
    readonly SEGMENT_NETWORK: 301;
    readonly HLS_NETWORK_MASTER_PLAYLIST: 311;
    readonly HLS_NETWORK_PLAYLIST: 312;
    readonly HLS_NETWORK_NO_KEY_RESPONSE: 313;
    readonly HLS_NETWORK_KEY_LOAD: 314;
    readonly HLS_NETWORK_INVALID_SEGMENT: 315;
    readonly HLS_SEGMENT_PARSING: 316;
    readonly DASH_NETWORK: 321;
    readonly DASH_NO_INIT: 322;
    readonly SMOOTH_NETWORK: 331;
    readonly SMOOTH_NO_MEDIA_DATA: 332;
    readonly MANIFEST_UNKNOWN: 400;
    readonly HLS_MANIFEST_MASTER: 411;
    readonly HLS_MANIFEST_PLAYLIST: 412;
    readonly DASH_MANIFEST_UNKNOWN: 420;
    readonly DASH_MANIFEST_NO_PERIODS: 421;
    readonly DASH_MANIFEST_NO_MIMETYPE: 422;
    readonly DASH_INVALID_SEGMENT_INFO: 423;
    readonly SMOOTH_MANIFEST: 431;
    readonly SEGMENT_UNKNOWN: 500;
    readonly TEXT_UNKNOWN: 600;
    readonly APP: 900;
    readonly BREAK_CLIP_LOADING_ERROR: 901;
    readonly BREAK_SEEK_INTERCEPTOR_ERROR: 902;
    readonly IMAGE_ERROR: 903;
    readonly LOAD_INTERRUPTED: 904;
    readonly LOAD_FAILED: 905;
    readonly MEDIA_ERROR_MESSAGE: 906;
    readonly GENERIC: 999;
};
export type DetailedErrorCode = (typeof DetailedErrorCode)[keyof typeof DetailedErrorCode];

/**
 * The error severity. Follows the same naming scheme and numbering as Shaka Player.
 * https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events#.EventType
 */
export const ErrorSeverity: {
    readonly RECOVERABLE: 1;
    readonly CRITICAL: 2;
};
/**
 * The error severity. Follows the same naming scheme and numbering as Shaka Player.
 * https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.events#.EventType
 */
export type ErrorSeverity = (typeof ErrorSeverity)[keyof typeof ErrorSeverity];

export type EndedReason = "END_OF_STREAM" | "ERROR" | "STOPPED" | "INTERRUPTED" | "SKIPPED" | "BREAK_SWITCH";

/**
 * Event data for @see{@link EventType.SEGMENT_DOWNLOADED} event.
 */
export class SegmentDownloadedEvent extends Event {
    constructor(downloadTime?: number, size?: number);

    /**
     * The time it took to download the segment; in milliseconds.
     */
    downloadTime?: number | undefined;

    /**
     * The number of bytes in the segment.
     */
    size?: number | undefined;
}

/**
 * Event data for all events that represent requests made to the receiver.
 */
export class RequestEvent extends Event {
    constructor(type: EventType, requestData?: RequestData, senderId?: string);

    /**
     * The data that was sent with the request.
     */
    requestData?: RequestData | undefined;

    /**
     * The sender id the request came from.
     */
    senderId?: string | undefined;
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
    mediaStatus?: MediaStatus | undefined;
}
/**
 * Event data for pause events forwarded from the MediaElement.
 */
export class MediaPauseEvent extends Event {
    constructor(currentMediaTime?: number, ended?: boolean);

    /**
     * Indicate if the media ended (indicates the pause was fired due to stream reached the end).
     */
    ended?: boolean | undefined;
}
/**
 * Event data for @see{@link EventType.MEDIA_FINISHED} event.
 */
export class MediaFinishedEvent extends Event {
    constructor(currentMediaTime?: number, endedReason?: EndedReason);

    /**
     * The time when the media finished (in seconds). For an item in a queue; this value represents the time in the currently playing queue item ( where 0 means the queue item has just started).
     */
    currentMediaTime?: number | undefined;

    /**
     * The reason the media finished.
     */
    endedReason?: EndedReason | undefined;
}
/**
 * Event data for all events forwarded from the MediaElement.
 */
export class MediaElementEvent extends Event {
    constructor(type: EventType, currentMediaTime?: number);

    /**
     * The time in the currently playing clip when the event was fired (in seconds). Undefined if playback has not started yet.
     */
    currentMediaTime?: number | undefined;
}
/**
 * Event data for all events pertaining to processing a load / preload request. made to the player.
 */
export class LoadEvent extends Event {
    constructor(type: EventType, media?: MediaInformation);

    /**
     * Information about the media being loaded.
     */
    media?: MediaInformation | undefined;
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
 * Event data for {@link EventType.EMSG} event.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.events.EmsgEvent
 */
export class EmsgEvent extends Event {
    constructor(emsgData: any);

    /**
     * The time that the event ends (in presentation time). Undefined if using legacy Dash support.
     */
    endTime?: number | undefined;

    /**
     * The duration of the event (in units of timescale). Undefined if using legacy Dash support.
     */
    eventDuration?: number | undefined;

    /**
     * A field identifying this instance of the message. Undefined if using legacy Dash support.
     */
    id?: number | undefined;

    /**
     * Body of the message, which can contain ID3 metadata if signaled by the
     * schemeIdUri value. The schemeIdUri "https://aomedia.org/emsg/ID3" and
     * "https://developer.apple.com/streaming/emsg-id3" will always signal ID3 metadata.
     */
    messageData?: Uint8Array | undefined;

    /**
     * The offset that the event starts; relative to the start of the segment this is contained in (in units of timescale). Undefined if using legacy Dash support.
     */
    presentationTimeDelta?: number | undefined;

    /**
     * Identifies the message scheme. Undefined if using legacy Dash support.
     */
    schemeIdUri?: string | undefined;

    /**
     * The segment data. This is only defined if using legacy Dash support.
     */
    segmentData?: Uint8Array | undefined;

    /**
     * The time that the event starts (in presentation time). Undefined if using legacy Dash support.
     */
    startTime?: number | undefined;

    /**
     * Provides the timescale; in ticks per second. Undefined if using legacy Dash support.
     */
    timescale?: number | undefined;

    /**
     * Specifies the value for the event. Undefined if using legacy Dash support.
     */
    value?: string | undefined;
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
    endedReason?: EndedReason | undefined;
}

/**
 * Event data for {@link EventType.CACHE_LOADED} event.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.events.CacheLoadedEvent
 */
export class CacheLoadedEvent extends Event {
    constructor(media?: MediaInformation);

    /**
     * Information about the media being cached.
     */
    media?: MediaInformation | undefined;
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

/**
 * Event data for all events pertaining to breaks.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.events.BreaksEvent
 */
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
    breakId?: string | undefined;

    /**
     * The break clip's id. Refer to BreakClip.id
     */
    breakClipId?: string | undefined;

    /**
     * The time in the currently playing media when the break event occurred.
     */
    currentMediaTime?: number | undefined;

    /**
     * The reason the break clip ended.
     */
    endedReason?: EndedReason | undefined;

    /**
     * Index of break clip; which starts from 1.
     */
    index?: number | undefined;

    /**
     * Total number of break clips.
     */
    total?: number | undefined;

    /**
     * When to skip current break clip in sec; after break clip begins to play.
     */
    whenSkippable?: number | undefined;
}

/**
 * Event data for {@link EventType.BITRATE_CHANGED} event.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.events.BitrateChangedEvent
 */
export class BitrateChangedEvent extends Event {
    constructor(totalBitrate?: number);

    /** The bitrate of the media (audio and video) in bits per second. */
    totalBitrate?: number | undefined;
}

/**
 * Event data for @see{@link EventType.ERROR} event.
 */
export class ErrorEvent extends Event {
    constructor(detailedErrorCode?: DetailedErrorCode, error?: any, reason?: ErrorReason, severity?: ErrorSeverity);

    /**
     * An error code representing the cause of the error.
     */
    detailedErrorCode?: DetailedErrorCode | undefined;

    /**
     * The error object. This could be an Error object (e.g., if an Error was thrown in an event handler) or an object with error information (e.g., if the receiver received an invalid command).
     */
    error?: any;

    /**
     * Optional error reason.
     */
    reason?: ErrorReason | undefined;

    /**
     * Optional error severity.
     */
    severity?: ErrorSeverity | undefined;
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

    media?: MediaInformation | undefined;
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

/**
 * Event data for @see{@link EventType.TIMED_METADATA_CHANGED}, @see{@link EventType.TIMED_METADATA_ENTER} and @see{@link EventType.TIMED_METADATA_EXIT} events.
 */
export class TimedMetadataEvent extends Event {
    constructor(type: EventType, timedMetadataInfo: TimedMetadata);

    /**
     * The timed metadata.
     */
    timedMetadataInfo: TimedMetadata;
}
