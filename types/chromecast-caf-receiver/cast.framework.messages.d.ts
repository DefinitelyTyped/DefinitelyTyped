import { Event, DetailedErrorCode } from "./cast.framework.events";

export as namespace messages
export type UserAction =
    | "LIKE"
    | "DISLIKE"
    | "FOLLOW"
    | "UNFOLLOW"
    | "FLAG"
    | "SKIP_AD";

export type UserActionContext =
    | "UNKNOWN_CONTEXT"
    | "ALBUM"
    | "ARTIST"
    | "PLAYLIST"
    | "EPISODE"
    | "SERIES"
    | "MOVIE"
    | "CHANNEL"
    | "TEAM"
    | "PLAYER"
    | "COACH";

export type TextTrackType =
    | "SUBTITLES"
    | "CAPTIONS"
    | "DESCRIPTIONS"
    | "CHAPTERS"
    | "METADATA";

export type TextTrackWindowType = "NONE" | "NORMAL" | "ROUNDED_CORNERS";

export type TrackType = "TEXT" | "AUDIO" | "VIDEO";

export type TextTrackFontGenericFamily =
    | "SANS_SERIF"
    | "MONOSPACED_SANS_SERIF"
    | "SERIF"
    | "MONOSPACED_SERIF"
    | "CASUAL"
    | "CURSIVE"
    | "SMALL_CAPITALS";

export type TextTrackFontStyle = "NORMAL" | "BOLD" | "BOLD_ITALIC" | "ITALIC";

export type TextTrackEdgeType =
    | "NONE"
    | "OUTLINE"
    | "DROP_SHADOW"
    | "RAISED"
    | "DEPRESSED";

export type Command =
    | "PAUSE"
    | "SEEK"
    | "STREAM_VOLUME"
    | "STREAM_MUTE"
    | "ALL_BASIC_MEDIA"
    | "QUEUE_NEXT"
    | "QUEUE_PREV"
    | "QUEUE_SHUFFLE"
    | "SKIP_AD";

export type SeekResumeState = "PLAYBACK_START" | "PLAYBACK_PAUSE";

export type StreamingProtocolType =
    | "UNKNOWN"
    | "MPEG_DASH"
    | "HLS"
    | "SMOOTH_STREAMING";

export type StreamType = "BUFFERED" | "LIVE" | "NONE";

export type FocusState = "IN_FOCUS" | "NOT_IN_FOCUS";

export type ExtendedPlayerState = "LOADING";

export type ErrorType =
    | "INVALID_PLAYER_STATE"
    | "LOAD_FAILED"
    | "LOAD_CANCELLED"
    | "INVALID_REQUEST"
    | "ERROR";

export type ErrorReason =
    | "INVALID_COMMAND"
    | "INVALID_PARAMS"
    | "INVALID_MEDIA_SESSION_ID"
    | "SKIP_LIMIT_REACHED"
    | "NOT_SUPPORTED"
    | "LANGUAGE_NOT_SUPPORTED"
    | "END_OF_QUEUE"
    | "APP_ERROR"
    | "AUTHENTICATION_EXPIRED"
    | "PREMIUM_ACCOUNT_REQUIRED"
    | "CONCURRENT_STREAM_LIMIT"
    | "PARENTAL_CONTROL_RESTRICTED"
    | "NOT_AVAILABLE_IN_REGION"
    | "CONTENT_ALREADY_PLAYING"
    | "INVALID_REQUEST"
    | "GENERIC_LOAD_ERROR";

export type RepeatMode =
    | "REPEAT_OFF"
    | "REPEAT_ALL"
    | "REPEAT_SINGLE"
    | "REPEAT_ALL_AND_SHUFFLE";

export type IdleReason = "CANCELLED" | "INTERRUPTED" | "FINISHED" | "ERROR";

export type HlsSegmentFormat = "AAC" | "AC3" | "MP3" | "TS" | "TS_AAC";

export type HdrType = "SDR" | "HDR" | "DV";

export type PlayStringId =
    | "FREE_TRIAL_ABOUT_TO_EXPIRE"
    | "SUBSCRIPTION_ABOUT_TO_EXPIRE"
    | "STREAM_HIJACKED";

export type GetStatusOptions = "NO_METADATA" | "NO_QUEUE_ITEMS";

export type MessageType =
    | "MEDIA_STATUS"
    | "CLOUD_STATUS"
    | "QUEUE_CHANGE"
    | "QUEUE_ITEMS"
    | "QUEUE_ITEM_IDS"
    | "GET_STATUS"
    | "LOAD"
    | "PAUSE"
    | "STOP"
    | "PLAY"
    | "SKIP_AD"
    | "PLAY_AGAIN"
    | "SEEK"
    | "SET_PLAYBACK_RATE"
    | "SET_VOLUME"
    | "EDIT_TRACKS_INFO"
    | "EDIT_AUDIO_TRACKS"
    | "PRECACHE"
    | "PRELOAD"
    | "QUEUE_LOAD"
    | "QUEUE_INSERT"
    | "QUEUE_UPDATE"
    | "QUEUE_REMOVE"
    | "QUEUE_REORDER"
    | "QUEUE_NEXT"
    | "QUEUE_PREV"
    | "QUEUE_GET_ITEM_RANGE"
    | "QUEUE_GET_ITEMS"
    | "QUEUE_GET_ITEM_IDS"
    | "QUEUE_SHUFFLE"
    | "SET_CREDENTIALS"
    | "LOAD_BY_ENTITY"
    | "USER_ACTION"
    | "DISPLAY_STATUS"
    | "FOCUS_STATE"
    | "CUSTOM_COMMAND";

export type PlayerState = "IDLE" | "PLAYING" | "PAUSED" | "BUFFERING";

export type QueueChangeType =
    | "INSERT"
    | "REMOVE"
    | "ITEMS_CHANGE"
    | "UPDATE"
    | "NO_CHANGE";

export type QueueType =
    | "ALBUM"
    | "PLAYLIST"
    | "AUDIOBOOK"
    | "RADIO_STATION"
    | "PODCAST_SERIES"
    | "TV_SERIES"
    | "VIDEO_PLAYLIST"
    | "LIVE_TV"
    | "MOVIE";

export type MetadataType =
    | "GENERIC"
    | "MOVIE"
    | "TV_SHOW"
    | "MUSIC_TRACK"
    | "PHOTO";

/**
 * RefreshCredentials request data.
 */
export interface RefreshCredentialsRequestData {
    [key: string]: any;
}

/**
 * Media event SET_VOLUME request data.
 */
export interface VolumeRequestData extends RequestData {
    /**
     * The media stream volume
     */
    volume?: Volume;
}

/**
 * Represents the volume of a media session stream.
 */
export interface Volume {
    /**
     * Value from 0 to 1 that represents the current stream volume level.
     */
    level?: number;

    /**
     * Whether the stream is muted.
     */
    muted?: boolean;
}

/**
 * Video information such as video resolution and High Dynamic Range (HDR).
 */
export class VideoInformation {
    constructor(width: number, height: number, hdrType: HdrType);

    width: number;

    height: number;

    hdrType: HdrType;
}

/**
 * VAST ad request configuration.
 */
export interface VastAdsRequest {
    /**
     * Specifies a VAST document to be used as the ads response instead of making a
     * request via an ad tag url.
     * This can be useful for debugging and other situations where a VAST response is
     * already available.
     */
    adsResponse?: string;

    /**
     * URL for VAST file.
     */
    adTagUrl?: string;
}

/**
 * UserAction request data.
 */
export interface UserActionRequestData {
    /**
     * Optional request source.
     * It contain the assistent query that initiate the request.
     */
    source?: string;

    /**
     * User action to be handled by the application.
     */
    userAction?: UserAction;

    /**
     * Optional context information for the user action.
     */
    userActionContext?: UserActionContext;
}

/**
 * A TV episode media description.
 */
export interface TvShowMediaMetadata {
    /**
     * TV episode number. A positive integer.
     */
    episode?: number;

    /**
     * @deprecated use episode instead
     */
    episodeNumber?: number;

    /**
     * @deprecated use episode instead
     */
    episodeTitle?: string;

    /**
     * Content images. Examples would include cover art or a thumbnail of
     * the currently playing media.
     */
    images?: Image[];

    /**
     * ISO 8601 date when the episode originally aired; e.g. 2014-02-10.
     */
    originalAirdate?: string;

    /**
     * @deprecated use originalAirdate instead.
     */
    releaseYear?: number;

    /**
     * TV episode season. A positive integer.
     */
    season?: number;

    /**
     * @deprecated use season instead.
     */
    seasonNumber?: number;

    /**
     * TV series title.
     */
    seriesTitle?: string;

    /**
     * TV episode title.
     */
    title?: string;
}
/**
 * Describes track metadata information.
 */
export class Track {
    constructor(trackId: number, trackType: TrackType);

    /**
     * Custom data set by the receiver application.
     */
    customData?: string;

    /**
     * Language tag as per RFC 5646 (If subtype is “SUBTITLES” it is mandatory).
     */
    language?: string;

    /**
     * A descriptive; human readable name for the track. For example "Spanish".
     */
    name?: string;

    /**
     * For text tracks; the type of text track.
     */
    subtype?: string;

    /**
     * It can be the url of the track or any other identifier that allows the receiver
     * to find the content (when the track is not inband or included in the manifest).
     * For example it can be the url of a vtt file.
     */
    trackContentId?: string;

    /**
     * It represents the MIME type of the track content. For example if the track
     * is a vtt file it will be ‘text/vtt’. This field is needed for out of band tracks;
     *  so it is usually provided if a trackContentId has also been provided.
     * It is not mandatory if the receiver has a way to identify the content from
     * the trackContentId; but recommended.
     * The track content type; if provided; must be consistent with the track type.
     */
    trackContentType?: string;

    /**
     * Unique identifier of the track within the context of a MediaInformation object.
     */
    trackId?: number;

    /**
     * The type of track.
     */
    type: TrackType;
}
/**
 * Describes style information for a text track.
 */
export interface TextTrackStyle {
    /**
     * The background 32 bit RGBA color. The alpha channel should be used for transparent backgrounds.
     */
    backgroundColor?: string;

    /**
     * Custom data set by the receiver application.
     */
    customData?: any;

    /**
     * RGBA color for the edge; this value will be ignored if edgeType is NONE.
     */
    edgeColor?: string;

    edgeType?: TextTrackEdgeType;

    /**
     * If the font is not available in the receiver the fontGenericFamily will be used.
     */
    fontFamily?: string;

    /**
     * The text track generic family.
     */
    fontGenericFamily?: TextTrackFontGenericFamily;

    /**
     * The font scaling factor for the text track (the default is 1).
     */
    fontScale?: number;

    /**
     * The text track font style.
     */
    fontStyle?: TextTrackFontStyle;

    /**
     * The foreground 32 bit RGBA color.
     */
    foregroundColor?: string;

    /**
     * 32 bit RGBA color for the window. This value will be ignored if windowType is NONE.
     */
    windowColor?: string;

    /**
     * Rounded corner radius absolute value in pixels (px). This value will be ignored
     * if windowType is not ROUNDED_CORNERS.
     */
    windowRoundedCornerRadius?: number;

    /**
     * The window concept is defined in CEA-608 and CEA-708. In WebVTT is called a region.
     */
    windowType?: TextTrackWindowType;
}

/**
 * Media event playback rate request data.
 */
export interface SetPlaybackRateRequestData extends RequestData {
    /**
     * New playback rate (>0).
     */
    playbackRate?: number;

    /**
     * New playback rate relative to current playback rate.
     * New rate will be the result of multiplying the current rate with the value.
     * For example a value of 1.1 will increase rate by 10%.
     * (Only used if the playbackRate value is not provided).
     */
    relativePlaybackRate?: number;
}

/**
 * SetCredentials request data.
 */
export interface SetCredentialsRequestData {
    /**
     * Credentials to use by receiver.
     */
    credentials?: string;

    /**
     * If it is a response for refresh credentials; it will indicate the request id
     * of the refresh credentials request.
     */
    forRequestId?: number;

    /**
     * Optional request source. It contain the assistent query that initiate the request.
     */
    source?: string;
}

/**
 * Media event SEEK request data.
 */
export interface SeekRequestData extends RequestData {
    /**
     * Seconds since beginning of content.
     */
    currentTime?: number;

    /**
     * Seconds relative to the current playback position. If this field is defined;
     * the currentTime field will be ignored.
     */
    relativeTime?: number;

    /**
     * The playback state after a SEEK request.
     */
    resumeState?: SeekResumeState;
}

/**
 * Provides seekable range in seconds.
 */
export class SeekableRange {
    constructor(start?: number, end?: number);

    /**
     * End of the seekable range in seconds.
     */
    end?: number;

    /**
     * Start of the seekable range in seconds.
     */
    start?: number;
}

/**
 * Media event request data.
 */
export class RequestData {
    constructor(type: MessageType);

    /**
     * Application-specific data for this request.
     * It enables the sender and receiver to easily extend the media protocol
     * without having to use a new namespace with custom messages.
     */
    customData?: any;

    /**
     * Id of the media session that the request applies to.
     */
    mediaSessionId?: number;

    /**
     * Id of the request; used to correlate request/response.
     */
    requestId: number;
}

/**
 * Media event UPDATE queue request data.
 */
export interface QueueUpdateRequestData {
    /**
     * ID of the current media Item after the deletion
     * (if not provided; the currentItem value will be the same as before the deletion;
     *  if it does not exist because it has been deleted; the currentItem will point to
     * the next logical item in the list).
     */
    currentItemId?: number;

    /**
     * Seconds since the beginning of content to start playback of the current item.
     *  If provided; this value will take precedence over the startTime value provided
     * at the QueueItem level but only the first time the item is played.
     *  This is to cover the common case where the user jumps to the middle of an
     * item so the currentTime does not apply to the item permanently like the
     * QueueItem startTime does. It avoids having to reset the startTime dynamically
     *  (that may not be possible if the phone has gone to sleep).
     */
    currentTime?: number;

    /**
     * List of queue items to be updated. No reordering will happen; the items will
     * retain the existing order.
     */
    items?: QueueItem[];

    /**
     * Skip/Go back number of items with respect to the position of currentItem
     * (it can be negative). If it is out of boundaries; the currentItem will be the
     * next logical item in the queue wrapping around the boundaries.
     * The new currentItem position will follow the rules of the queue repeat behavior.
     */
    jump?: number;

    /**
     * Behavior of the queue when all items have been played.
     */
    repeatMode?: RepeatMode;

    /**
     * Shuffle the queue items when the update is processed.
     * After the queue items are shuffled; the item at the currentItem position will
     *  be loaded.
     */
    shuffle?: boolean;
}

/**
 * Media event queue REORDER request data.
 */
export class QueueReorderRequestData extends RequestData {
    constructor(itemIds: number[]);

    /**
     * ID of the current media Item after the deletion (if not provided;
     * the currentItem value will be the same as before the deletion;
     * if it does not exist because it has been deleted;
     * the currentItem will point to the next logical item in the list).
     */
    currentItemId?: number;

    /**
     * Seconds since the beginning of content to start playback of the current item.
     * If provided; this value will take precedence over the startTime value provided
     * at the QueueItem level but only the first time the item is played.
     * This is to cover the common case where the user jumps to the middle of an
     * item so the currentTime does not apply to the item permanently like
     * the QueueItem startTime does. It avoids having to reset the startTime dynamically
     * (that may not be possible if the phone has gone to sleep).
     */
    currentTime?: number;

    /**
     * ID of the item that will be located immediately after the reordered list.
     * If the ID is not found or it is not provided;
     * the reordered list will be appended at the end of the existing list.
     */
    insertBefore?: number;

    /**
     * IDs of the items to be reordered; in the new order.
     * Items not provided will keep their existing order.
     * The provided list will be inserted at the position determined by insertBefore.
     * For example:
     *  If insertBefore is not specified Existing queue: “A”;”D”;”G”;”H”;”B”;”E” itemIds:
     * “D”;”H”;”B” New Order: “A”;”G”;”E”;“D”;”H”;”B”
     *   If insertBefore is “A” Existing queue: “A”;”D”;”G”;”H”;”B” itemIds:
     *   “D”;”H”;”B” New Order: “D”;”H”;”B”;“A”;”G”;”E”
     *   If insertBefore is “G” Existing queue: “A”;”D”;”G”;”H”;”B” itemIds:
     *   “D”;”H”;”B” New Order: “A”;“D”;”H”;”B”;”G”;”E”
     */
    itemIds: number[];
}

/**
 * Media event queue REMOVE request data.
 */
export class QueueRemoveRequestData extends RequestData {
    constructor(itemIds: number[]);

    /**
     * ID of the current media Item after the deletion
     * (if not provided; the currentItem value will be the same as before the deletion;
     * if it does not exist because it has been deleted;
     * the currentItem will point to the next logical item in the list).
     */
    currentItemId?: number;

    /**
     * Seconds since the beginning of content to start playback of the current item.
     *  If provided; this value will take precedence over the startTime value provided
     * at the QueueItem level but only the first time the item is played.
     * This is to cover the common case where the user jumps to the middle of an
     * item so the currentTime does not apply to the item permanently like the
     *  QueueItem startTime does. It avoids having to reset the startTime dynamically
     * (that may not be possible if the phone has gone to sleep).
     */
    currentTime?: number;

    /**
     * IDs of queue items to be deleted.
     */
    itemIds?: number[];
}
/**
 * Media event queue LOAD request data.
 */
export class QueueLoadRequestData extends RequestData {
    constructor(items: QueueItem[]);

    /**
     * Seconds (since the beginning of content) to start playback of the first item to
     *  be played. If provided; this value will take precedence over the
     * startTime value provided at the QueueItem level but only the first
     * time the item is played. This is to cover the common case where the user
     * casts the item that was playing locally so the currentTime does not apply
     * to the item permanently like the QueueItem startTime does.
     * It avoids having to reset the startTime dynamically
     * (that may not be possible if the phone has gone to sleep).
     */
    currentTime?: number;

    /**
     * Behavior of the queue when all items have been played.
     */
    items: QueueItem[];

    /**
     * Id of the request; used to correlate request/response.
     */
    repeatMode?: RepeatMode;

    /**
     * The index of the item in the items array that must be the first currentItem
     * (the item that will be played first). Note this is the index of the array
     *  (starts at 0) and not the itemId (as it is not known until the queue is created).
     * If repeatMode is REPEAT_OFF playback will end when the last item in the array is
     * played (elements before the startIndex will not be played).
     * This may be useful for continuation scenarios where the user was already
     * using the sender app and in the middle decides to cast.
     * In this way the sender app does not need to map between the local and remote queue
     * positions or saves one extra QUEUE_UPDATE request.
     */
    startIndex?: number;
}

/**
 * Queue item information. Application developers may need to create a QueueItem to
 * insert a queue element using InsertQueueItems. In this case they should not
 * provide an itemId (as the actual itemId will be assigned when the item is inserted
 * in the queue). This prevents ID collisions with items added from a sender app.
 */
export class QueueItem {
    constructor(opt_itemId?: number);

    /**
     * Array of Track trackIds that are active. If the array is not provided;
     * the default tracks will be active.
     */
    activeTrackIds?: number[];

    /**
     * If the autoplay parameter is not specified or is true; the media player
     *  will begin playing the element in the queue when the item becomes the currentItem.
     */
    autoplay?: boolean;

    /**
     * The application can define any extra queue item information needed.
     */
    customData?: any;

    /**
     * Unique identifier of the item in the queue.
     * The attribute is optional because for LOAD or INSERT should not be provided
     * (as it will be assigned by the receiver when an item is first created/inserted).
     */
    itemId?: number;

    /**
     * Metadata (including contentId) of the playlist element.
     */
    media?: MediaInformation;

    /**
     * Playback duration of the item; if it is larger than the actual duration -
     * startTime it will be ignored (default behavior).
     * It can be negative; in such case the duration will be the actual asset
     * duration minus the duration provided.
     * It can be used for photo slideshows to control the duration the item should
     * be presented or for live events to control the duration that the program
     * should be played. It may be useful for autoplay scenarios to avoid displaying all
     *  the credits after an episode has ended.
     */
    playbackDuration?: number;

    /**
     * This parameter is a hint for the receiver to preload this media
     * item before it is played. It allows for a smooth transition between items
     * played from the queue. The time is expressed in seconds; relative to
     * the beginning of this item playback (usually the end of the previous item playback).
     *  Only positive values are valid. For example; if the value is 10 seconds; this item
     * will be preloaded 10 seconds before the previous item has finished.
     * The receiver will try to honor this value but will not guarantee it;
     * for example if the value is larger than the previous item duration the
     * receiver may just preload this item shortly after the previous item has started playing
     * (there will never be two items being preloaded in parallel).
     * Also; if an item is inserted in the queue just after the currentItem and the time to preload is higher than the
     * time left on the currentItem; the preload will just happen as soon as possible.
     */
    preloadTime?: number;

    /**
     * Seconds since beginning of content. If the content is live content;
     * and startTime is not specified; the stream will start at the live position.
     */
    startTime?: number;
}

/**
 * Media event queue INSERT request data.
 */
export class QueueInsertRequestData extends RequestData {
    constructor(items: QueueItem[]);

    /**
     * ID of the current media Item after the insertion (if not provided;
     * the currentItem value will be the same as before the insertion).
     */
    currentItemId?: number;

    /**
     * Index (relative to the items array; starting with 0) of the new current media Item.
     *  For inserted items we use the index (similar to startIndex in QUEUE_LOAD) and not
     * currentItemId; because the itemId is unknown until the items are inserted.
     * If not provided; the currentItem value will be the same as before the insertion
     * (unless currentItemId is provided). This param allows to make atomic the common use
     * case of insert and play an item.
     */
    currentItemIndex?: number;

    /**
     * Seconds since the beginning of content to start playback of the current item.
     * If provided; this value will take precedence over the startTime value provided
     * at the QueueItem level but only the first time the item is played.
     * This is to cover the common case where the user jumps to the middle of an
     * item so the currentTime does not apply to the item permanently like the
     * QueueItem startTime does. It avoids having to reset the startTime dynamically
     * (that may not be possible if the phone has gone to sleep).
     */
    currentTime?: number;

    /**
     * ID of the item that will be located immediately after the inserted list.
     *  If the ID is not found or it is not provided; the list will be appended at
     *  the end of the existing list.
     */
    insertBefore?: number;

    /**
     * List of queue items. The itemId field of the items should be empty.
     *  It is sorted (first element will be played first).
     */
    items: QueueItem[];
}

/**
 * Represents a data message containing the full list of queue ids.
 */
export interface QueueIds {
    /**
     * List of queue item ids.
     */
    itemIds?: number[];

    /**
     * The corresponding request id.
     */
    requestId?: number;

    type: MessageType;
}

/**
 * Queue data as part of the LOAD request.
 */
export class QueueData {
    constructor(
        id?: string,
        name?: string,
        description?: string,
        repeatMode?: RepeatMode,
        items?: QueueItem[],
        startIndex?: number,
        startTime?: number
    );

    /**
     * Description of the queue.
     */
    description?: string;

    /**
     * Optional Queue entity id; provide Google Assistant deep link.
     */
    entity?: string;

    /**
     * Id of the queue.
     */
    id?: string;

    /**
     * Array of queue items. It is sorted (first element will be played first).
     */
    items?: QueueItem[];

    /**
     * Name of the queue.
     */
    name?: string;

    /**
     * Queue type; e.g. album; playlist; radio station; tv series; etc.
     */
    queueType?: QueueType;

    /**
     * Continuous playback behavior of the queue.
     */
    repeatMode?: RepeatMode;

    /**
     * The index of the item in the queue that should be used to start playback first.
     */
    startIndex?: number;

    /**
     * Seconds (since the beginning of content) to start playback of the first item.
     */
    startTime?: number;
}

/**
 * Represents a queue change message; such as insert; remove; and update.
 */
export interface QueueChange {
    /**
     * The actual queue change type.
     */
    changeType?: QueueChangeType;

    /**
     * The id to insert the list of itemIds before.
     */
    insertBefore?: number;

    /**
     * List of changed itemIds.
     */
    itemIds?: number[];

    /**
     * The corresponding request id.
     */
    requestId?: number;

    /**
     * The queue change sequence ID. Used to coordinate state sync between various
     * senders and the receiver.
     */
    sequenceNumber?: number;

    type: MessageType;
}

/**
 * Media event PRELOAD request data.
 */
export class PreloadRequestData implements LoadRequestData {
    /**
     * Array of trackIds that are active. If the array is not provided;
     *  the default tracks will be active.
     */
    activeTrackIds: number[];
    /**
     * If the autoplay parameter is specified; the media player will begin playing
     * the content when it is loaded. Even if autoplay is not specified;the media player
     *  implementation may choose to begin playback immediately.
     */
    autoplay?: boolean;
    /**
     * Optional user credentials.
     */
    credentials?: string;
    /**
     * Optional credentials type. The type 'cloud' is a reserved type used by load
     * requests that were originated by voice assistant commands.
     */
    credentialsType?: string;
    /**
     * Seconds since beginning of content. If the content is live content;
     * and currentTime is not specified; the stream will start at the live position.
     */
    currentTime?: number;
    /**
     * If the autoplay parameter is specified; the media player will begin playing
     * the content when it is loaded. Even if autoplay is not specified; the media
     *  player implementation may choose to begin playback immediately.
     */
    media: MediaInformation;
    /**
     * The media playback rate.
     */
    playbackRate?: number;
    /**
     * Queue data.
     */
    queueData: QueueData;
    /**
     * Application-specific data for this request.
     * It enables the sender and receiver to easily extend the media protocol
     * without having to use a new namespace with custom messages.
     */
    customData?: any;
    /**
     * Id of the media session that the request applies to.
     */
    mediaSessionId?: number;
    /**
     * Id of the request; used to correlate request/response.
     */
    requestId: number;
    constructor(itemId: number);

    /**
     * The ID of the queue item.
     */
    itemId: number;
}

/**
 * Media event PRECACHE request data. (Some fields of the load request;
 * like autoplay and queueData; are ignored).
 */
export class PrecacheRequestData implements LoadRequestData {
    /**
     * Array of trackIds that are active. If the array is not provided;
     * the default tracks will be active.
     */
    activeTrackIds: number[];
    /**
     * If the autoplay parameter is specified; the media player will begin playing
     * the content when it is loaded. Even if autoplay is not specified;the media player
     * implementation may choose to begin playback immediately.
     */
    autoplay?: boolean;
    /**
     * Optional user credentials.
     */
    credentials?: string;
    /**
     * Optional credentials type. The type 'cloud' is a reserved type used by load
     * requests that were originated by voice assistant commands.
     */
    credentialsType?: string;
    /**
     * Seconds since beginning of content. If the content is live content; and
     * currentTime is not specified; the stream will start at the live position.
     */
    currentTime?: number;
    /**
     * If the autoplay parameter is specified; the media player will begin playing
     * the content when it is loaded. Even if autoplay is not specified;
     * the media player implementation may choose to begin playback immediately.
     */
    media: MediaInformation;
    /**
     * The media playback rate.
     */
    playbackRate?: number;
    /**
     * Queue data.
     */
    queueData: QueueData;
    /**
     * Application-specific data for this request.
     * It enables the sender and receiver to easily extend the media protocol
     * without having to use a new namespace with custom messages.
     */
    customData?: any;
    /**
     * Id of the media session that the request applies to.
     */
    mediaSessionId?: number;
    /**
     * Id of the request; used to correlate request/response.
     */
    requestId: number;
    constructor(data?: string);

    /**
     * Application precache data.
     */
    precacheData?: string;
}

/**
 * PlayString request data.
 */
export class PlayStringRequestData {
    constructor(stringId: PlayStringId, opt_arguments?: string[]);

    /**
     * An optional array of string values to be filled into the text.
     */
    arguments?: string[];

    /**
     * An identifier for the text to be played back.
     */
    stringId: PlayStringId;
}

/**
 * A photo media description.
 */
export interface PhotoMediaMetadata {
    /**
     * Name of the photographer.
     */
    artist?: string;

    /**
     * ISO 8601 date and time the photo was taken; e.g. 2014-02-10T15:47:00Z.
     */
    creationDateTime?: string;

    /**
     * Photo height; in pixels.
     */
    height?: number;

    /**
     * Images associated with the content. Examples would include a photo thumbnail.
     */
    images: Image[];

    /**
     * Latitude.
     */
    latitude?: number;

    /**
     * Location where the photo was taken. For example; "Seattle; Washington; USA".
     */
    location?: string;

    /**
     * Longitude.
     */
    longitude?: number;

    /**
     * Photo title.
     */
    title?: string;

    /**
     * Photo width; in pixels.
     */
    width?: number;
}

/**
 * A music track media description.
 */
export interface MusicTrackMediaMetadata {
    /**
     * Album artist name.
     */
    albumArtist?: string;

    /**
     * Album name.
     */
    albumName?: string;

    /**
     * Track artist name.
     */
    artist?: string;

    /**
     * @deprecated: use @see{@link artist} instead
     */
    artistName: string;

    /**
     * Track composer name.
     */
    composer?: string;

    /**
     * Disc number. A positive integer.
     */
    discNumber?: number;

    /**
     * Content images. Examples would include cover art or a thumbnail of the
     * currently playing media.
     */
    images: Image[];

    /**
     * ISO 8601 date when the track was released; e.g. 2014-02-10.
     */
    releaseDate?: string;

    /**
     * @deprecated: Use @see{@link releaseDate} instead
     */
    releaseYear?: string;

    /**
     * Track name.
     */
    songName?: string;

    /**
     * Track title.
     */
    title?: string;

    /**
     * Track number in album. A positive integer.
     */
    trackNumber?: number;
}

/**
 * A movie media description.
 */
export interface MovieMediaMetadata {
    /**
     * Content images. Examples would include cover art or a thumbnail of the
     * currently playing media.
     */
    images: Image[];

    /**
     * ISO 8601 date when the movie was released; e.g. 2014-02-10.
     */
    releaseDate?: string;

    /**
     * @deprecated: use @see{@link releaseDate} instead
     */
    releaseYear?: number;

    /**
     * Movie studio.
     */
    studio?: string;

    /**
     * Movie subtitle.
     */
    subtitle?: string;

    /**
     * Movie title.
     */
    title?: string;
}
/**
 * Represents the status of a media session.
 */
export interface MediaStatus {
    /**
     * List of IDs corresponding to the active tracks.
     */
    activeTrackIds: number[];

    /**
     * Status of break; if receiver is playing break.
     * This field will be defined only when receiver is playing break.
     */
    breakStatus: BreakStatus;

    /**
     * ID of this media item (the item that originated the status change).
     */
    currentItemId?: number;

    /**
     * The current playback position.
     */
    currentTime: number;

    /**
     * Application-specific media status.
     */
    customData?: any;

    /**
     * Extended media status information.
     */
    extendedStatus: ExtendedMediaStatus;

    /**
     * If the state is IDLE; the reason the player went to IDLE state.
     */
    idleReason: IdleReason;

    /**
     * List of media queue items.
     */
    items: QueueItem[];

    /**
     * Seekable range of a live or event stream. It uses relative media time in seconds.
     * It will be undefined for VOD streams.
     */
    liveSeekableRange: LiveSeekableRange;

    /**
     * ID of the media Item currently loading. If there is no item being loaded;
     * it will be undefined.
     */
    loadingItemId?: number;

    /**
     * The media information.
     */
    media: MediaInformation;

    /**
     * Unique id for the session.
     */
    mediaSessionId: number;

    /**
     * The playback rate.
     */
    playbackRate: number;

    /**
     * The playback state.
     */
    playerState: PlayerState;

    /**
     * ID of the next Item; only available if it has been preloaded.
     * Media items can be preloaded and cached temporarily in memory;
     * so when they are loaded later on; the process is faster
     * (as the media does not have to be fetched from the network).
     */
    preloadedItemId?: number;

    /**
     * Queue data.
     */
    queueData: QueueData;

    /**
     * The behavior of the queue when all items have been played.
     */
    repeatMode: RepeatMode;

    /**
     * The commands supported by this player.
     */
    supportedMediaCommands: number;

    type: MessageType;

    /**
     * The video information.
     */
    videoInfo: VideoInformation;

    /**
     * The current stream volume.
     */
    volume: Volume;
}
/**
 * Common media metadata used as part of MediaInformation
 */
export class MediaMetadata {
    constructor(type: MetadataType);

    /**
     * The type of metadata
     */
    metadataType: MetadataType;
}

/**
 * Represents the media information.
 */
export interface MediaInformation {
    /**
     * Partial list of break clips that includes current break clip that receiver
     * is playing or ones that receiver will play shortly after; instead of sending
     * whole list of clips. This is to avoid overflow of MediaStatus message.
     */
    breakClips?: BreakClip[];

    /**
     * List of breaks.
     */
    breaks?: Break[];

    /**
     * Typically the url of the media.
     */
    contentId: string;

    /**
     *  The content MIME type.
     */
    contentType: string;

    /**
     * Optional media url; to allow using contentId for real id. If contentUrl
     * is provided; it will be used as media url; otherwise the contentId will
     * be used as the media url.
     */
    contentUrl?: string;

    /**
     * Application-specific media information.
     */
    customData?: any;

    /**
     * The media duration.
     */
    duration?: number;

    /**
     * Optional Media entity; provide Google Assistant deep link.
     */
    entity?: string;

    /**
     * The format of the HLS media segment.
     */
    hlsSegmentFormat?: HlsSegmentFormat;

    /**
     * The media metadata.
     */
    metadata?:
    | MediaMetadata
    | GenericMediaMetadata
    | MovieMediaMetadata
    | MusicTrackMediaMetadata
    | PhotoMediaMetadata
    | TvShowMediaMetadata;

    /**
     * The stream type.
     */
    streamType: StreamType;

    /**
     * The style of text track.
     */
    textTrackStyle?: TextTrackStyle;

    /**
     * The media tracks.
     */
    tracks?: Track[];

    /**
     * VMAP ad request configuration. Used if breaks and breakClips are not
     * provided.
     */
    vmapAdsRequest?: VastAdsRequest;
}

/**
 * Media event LOAD request data.
 */
export interface LoadRequestData extends RequestData {
    /**
     * Array of trackIds that are active. If the array is not provided; the
     * default tracks will be active.
     */
    activeTrackIds: number[];

    /**
     * If the autoplay parameter is specified; the media player will begin
     * playing the content when it is loaded. Even if autoplay is not
     * specified;the media player implementation may choose to begin playback
     * immediately.
     */
    autoplay?: boolean;

    /**
     * Optional user credentials.
     */
    credentials?: string;

    /**
     * Optional credentials type. The type 'cloud' is a reserved type used by
     * load requests that were originated by voice assistant commands.
     */
    credentialsType?: string;

    /**
     * Seconds since beginning of content. If the content is live content;
     * and currentTime is not specified; the stream will start at the live position.
     */
    currentTime?: number;

    /**
     * If the autoplay parameter is specified; the media player will begin playing
     * the content when it is loaded. Even if autoplay is not specified; the media
     * player implementation may choose to begin playback immediately.
     */
    media: MediaInformation;

    /**
     * The media playback rate.
     */
    playbackRate?: number;

    /**
     * Queue data.
     */
    queueData: QueueData;
}

/**
 * LoadByEntity request data.
 */
export interface LoadByEntityRequestData {
    /**
     * Content entity information; typically represented by a stringified JSON object
     */
    entity: string;

    /**
     *  Shuffle the items to play.
     */
    shuffle?: boolean;

    /**
     * Optional request source. It contain the assistent query that initiate the request.
     */
    source?: string;
}

/**
 * Provides live seekable range with start and end time in seconds and two more
 * attributes.
 */
export class LiveSeekableRange {
    constructor(
        start?: number,
        end?: number,
        isMovingWindow?: boolean,
        isLiveDone?: boolean
    );

    /**
     * A boolean value indicates whether a live stream is ended. If it is done;
     * the end of live seekable range should stop updating.
     */
    isLiveDone?: boolean;

    /**
     * A boolean value indicates whether the live seekable range is a moving window.
     * If false; it will be either a expanding range or a fixed range meaning live
     * has ended.
     */
    isMovingWindow?: boolean;
}

/**
 * Represents a data message containing item information for each requested ids.
 */
export interface ItemsInfo {
    /**
     * List of changed itemIds.
     */
    items: QueueItem[];

    /**
     * The corresponding request id.
     */
    requestId?: number;

    type: MessageType;
}

/**
 * An image that describes a receiver application or media item.
 * This could be an application icon; cover art; or a thumbnail.
 */
export class Image {
    constructor(url: string);

    /**
     * The height of the image.
     */
    height?: number;

    /**
     * the URL to the image
     */
    url: string;

    /**
     * The width of the image
     */
    width?: number;
}
/** Media event GET_STATUS request data. */
export interface GetStatusRequestData extends RequestData {
    /**
     * The options of a GET_STATUS request.
     */
    options: GetStatusOptions;
}

/**
 * Get items info request data.
 */
export class GetItemsInfoRequestData extends RequestData {
    constructor(itemIds: number[]);

    /**
     * List of item ids to be requested.
     */
    itemIds: number[];
}
/**
 * A generic media description.
 */
export interface GenericMediaMetadata extends MediaMetadata {
    /**
     * Content images. Examples would include cover art or a thumbnail of the
     * currently playing media.
     */
    images: Image[];

    /**
     * ISO 8601 date and/or time when the content was released; e.g. 2014-02-10.
     */
    releaseDate?: string;

    /**
     * @deprecated - use @see{@link releaseDate} instead
     */
    releaseYear?: number;

    /**
     * Content subtitle.
     */
    subtitle?: string;

    /**
     * Content title.
     */
    title?: string;
}

/**
 * Focus state change message.
 */
export interface FocusStateRequestData {
    /**
     * The focus state of the app.
     */
    state: FocusState;
}

/** Fetch items request data. */
export class FetchItemsRequestData extends RequestData {
    constructor(itemId: number, nextCount: number, prevCount: number);

    /**
     * ID of the reference media item for fetching more items.
     */
    itemId: number;

    /**
     * Number of items after the reference item to be fetched.
     */
    nextCount: number;

    /**
     * Number of items before the reference item to be fetched.
     */
    prevCount: number;
}

/**
 * Extended media status information
 */
export class ExtendedMediaStatus {
    constructor(
        playerState: MediaInformation,
        opt_media?: MediaInformation
    );

    media: MediaInformation;

    playerState: ExtendedPlayerState;
}

/** Event data for @see{@link EventType.ERROR} event. */
export class ErrorEvent extends Event {
    constructor(detailedErrorCode?: DetailedErrorCode, error?: any);

    /**
     * An error code representing the cause of the error.
     */
    detailedErrorCode?: DetailedErrorCode;

    /**
     * The error object.
     * This could be an Error object (e.g.; if an Error was thrown in an event handler)
     * or an object with error information (e.g.; if the receiver received an invalid
     * command).
     */
    error?: any;
}

export class ErrorData {
    constructor(type: ErrorType);

    /**
     * Application-specific data for this request.
     * It enables the sender and receiver to easily extend the media protocol
     * without having to use a new namespace with custom messages.
     */
    customData?: any;

    /**
     * Id of the request; used to correlate request/response.
     */
    requestId?: number;
}

/**  Media event EDIT_TRACKS_INFO request data. */
export interface EditTracksInfoRequestData extends RequestData {
    /**
     * Array of the Track trackIds that should be active.
     * If it is not provided; the active tracks will not change.
     * If the array is empty; no track will be active.
     */
    activeTrackIds?: number[];

    /**
     * Flag to enable or disable text tracks.
     * If false it will disable all text tracks;
     * if true it will enable the first text track; or the previous active text tracks.
     * This flag is ignored if activeTrackIds or language is provided.
     */
    enableTextTracks?: boolean;

    /**
     * Indicates that the provided language was not explicit user request; but rather
     * inferred from used language in voice query.
     * It allows receiver apps to use user saved preference instead of spoken language.
     */
    isSuggestedLanguage?: boolean;

    /**
     * Language for the tracks that should be active. The language field will take
     * precedence over activeTrackIds if both are specified.
     */
    language?: string;

    textTrackStyle?: TextTrackStyle;
}

/**
 * Media event EDIT_AUDIO_TRACKS request data. If language is not provided;
 * the default audio track for the media will be enabled.
 */
export interface EditAudioTracksRequestData extends RequestData {
    /**
     * Indicates that the provided language was not explicit user request;
     * but rather inferred from used language in voice query.
     * It allows receiver apps to use user saved preference instead of spoken language.
     */
    isSuggestedLanguage?: boolean;

    language?: string;
}

/** DisplayStatus request data. */
export interface DisplayStatusRequestData {
    /**
     * Optional request source. It contain the assistent query that initiate the request.
     */
    source: string;
}

/** CustomCommand request data. */
export interface CustomCommandRequestData {
    /**
     * Custom Data; typically represented by a stringified JSON object.
     */
    data: string;

    /**
     * Optional request source. It contain the assistent query that initiate the request.
     */
    source: string;
}

export class BreakStatus {
    constructor(currentBreakTime: number, currentBreakClipTime: number);

    /**
     * Id of current break clip.
     */
    breakClipId: string;

    /**
     * Id of current break.
     */
    breakId: string;

    /**
     * Time in sec elapsed after current break clip starts.
     */
    currentBreakClipTime: number;

    /**
     * Time in sec elapsed after current break starts.
     */
    currentBreakTime: number;

    /**
     * The time in sec when this break clip becomes skippable.
     * 5 means that end user can skip this break clip after 5 seconds.
     * If this field is not defined; it means that current break clip is not skippable.
     */
    whenSkippable: number;
}

/**
 * Represents break clip (e.g. a clip of ad during ad break)
 */
export class BreakClip {
    constructor(id: string);

    /**
     * Url of page that sender will display; when end user clicks link on sender UI; while receiver is playing this clip.
     */
    clickThroughUrl?: string;
    /**
     * Typically the url of the break media (playing on the receiver).
     */
    contentId?: string;
    /**
     * The content MIME type.
     */
    contentType?: string;
    /**
     * Optional break media url; to allow using contentId for real id.
     * If contentUrl is provided; it will be used as media url;
     * otherwise the contentId will be used as the media url.
     */
    contentUrl?: string;
    /**
     * Application-specific break clip data.
     */
    customData?: any;
    /**
     * Duration of break clip in sec.
     */
    duration?: number;
    /**
     * The format of the HLS media segment.
     */
    hlsSegmentFormat?: HlsSegmentFormat;
    /**
     * Unique id of break clip.
     */
    id: string;
    /**
     * Url of content that sender will display while receiver is playing this clip.
     */
    posterUrl?: string;
    /**
     * Title of break clip. Sender might display this on its screen; if provided.
     */
    title?: string;
    /**
     * VAST ad request configuration. Used if contentId or contentUrl is not provided.
     */
    vastAdsRequest?: VastAdsRequest;
    /**
     * The time in sec when this break clip becomes skippable.
     * 5 means that end user can skip this break clip after 5 seconds.
     * If this field is not defined; it means that current break clip is not skippable.
     */
    whenSkippable?: number;
}

/** Represents break (e.g. ad break) included in main video. */
export class Break {
    constructor(id: string, breakClipIds: string[], position: number);
    /**
     * List of ids of break clip that this break includes.
     */
    breakClipIds: string[];
    /**
     * Duration of break in sec.
     */
    duration?: number;
    /**
     * Unique id of break.
     */
    id: string;
    /**
     * If true; indicates this is embedded break in main stream.
     */

    isEmbedded?: boolean;
    /**
     * Whether break is watched.
     * Sender can change color of progress bar marker corresponding to this break once
     *  this field changes from false to true;
     *  denoting that the end-user already watched this break.
     */
    isWatched: boolean;

    /**
     * Where the break is located inside main video. -1 represents the end of main video.
     */
    position: number;
}
