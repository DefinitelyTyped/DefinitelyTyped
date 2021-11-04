import { DetailedErrorCode, Event } from './cast.framework.events';

export as namespace messages;

/**
 * Possible caption mimetype of text track.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.CaptionMimeType}
 */
export enum CaptionMimeType {
    CEA608 = 'text/cea608',
    TTML = 'application/ttml+xml',
    TTML_MP4 = 'application/mp4',
    VTT = 'text/vtt',
}

/**
 * Commands supported by {@link framework.messages.MediaStatus.supportedMediaCommands}.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.Command}
 */
export enum Command {
    PAUSE = 1,
    SEEK = 2,
    STREAM_VOLUME = 4,
    STREAM_MUTE = 8,
    QUEUE_NEXT = 64,
    QUEUE_PREV = 128,
    QUEUE_SHUFFLE = 256,
    SKIP_AD = 512,
    QUEUE_REPEAT_ALL = 1024,
    QUEUE_REPEAT_ONE = 2048,
    QUEUE_REPEAT = 3072,
    EDIT_TRACKS = 4096,
    PLAYBACK_RATE = 8192,
    ALL_BASIC_MEDIA = 12303,
    LIKE = 16384,
    DISLIKE = 32768,
    FOLLOW = 65536,
    UNFOLLOW = 131072,
    STREAM_TRANSFER = 262144,
}

/**
 * Possible types of container metadata.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.ContainerType}
 */
export enum ContainerType {
    GENERIC_CONTAINER = 0,
    AUDIOBOOK_CONTAINER = 1,
}

/**
 * Provides content filtering mode.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.ContentFilteringMode}
 */
export enum ContentFilteringMode {
    FILTER_EXPLICIT = 'FILTER_EXPLICIT',
}

/**
 * Represents media error message reasons.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.ErrorReason}
 */
export enum ErrorReason {
    APP_ERROR = 'APP_ERROR',
    AUTHENTICATION_EXPIRED = 'AUTHENTICATION_EXPIRED',
    CONCURRENT_STREAM_LIMIT = 'CONCURRENT_STREAM_LIMIT',
    CONTENT_ALREADY_PLAYING = 'CONTENT_ALREADY_PLAYING',
    CONTENT_FILTERED = 'CONTENT_FILTERED',
    DUPLICATE_REQUEST_ID = 'DUPLICATE_REQUEST_ID',
    END_OF_QUEUE = 'END_OF_QUEUE',
    GENERIC_LOAD_ERROR = 'GENERIC_LOAD_ERROR',
    INVALID_COMMAND = 'INVALID_COMMAND',
    INVALID_MEDIA_SESSION_ID = 'INVALID_MEDIA_SESSION_ID',
    INVALID_PARAMS = 'INVALID_PARAMS',
    INVALID_REQUEST = 'INVALID_REQUEST',
    LANGUAGE_NOT_SUPPORTED = 'LANGUAGE_NOT_SUPPORTED',
    NOT_AVAILABLE_IN_REGION = 'NOT_AVAILABLE_IN_REGION',
    NOT_SUPPORTED = 'NOT_SUPPORTED',
    PARENTAL_CONTROL_RESTRICTED = 'PARENTAL_CONTROL_RESTRICTED',
    PREMIUM_ACCOUNT_REQUIRED = 'PREMIUM_ACCOUNT_REQUIRED',
    SKIP_LIMIT_REACHED = 'SKIP_LIMIT_REACHED',
    VIDEO_DEVICE_REQUIRED = 'VIDEO_DEVICE_REQUIRED',
}

/**
 * Represents media error message types.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.ErrorType}
 */
export enum ErrorType {
    ERROR = 'ERROR',
    INVALID_PLAYER_STATE = 'INVALID_PLAYER_STATE',
    INVALID_REQUEST = 'INVALID_REQUEST',
    LOAD_CANCELLED = 'LOAD_CANCELLED',
    LOAD_FAILED = 'LOAD_FAILED',
}

/**
 * Extended player state information.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.ExtendedPlayerState}
 */
export enum ExtendedPlayerState {
    LOADING = 'LOADING',
}

/**
 * Focus states.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.FocusState}
 */
export enum FocusState {
    IN_FOCUS = 'IN_FOCUS',
    NOT_IN_FOCUS = 'NOT_IN_FOCUS',
}

/**
 * The Get Status flag options determine the amount of data that must be included in the media status response.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.GetStatusOptions}
 */
export enum GetStatusOptions {
    NO_METADATA = 1,
    NO_QUEUE_ITEMS = 2,
}

/**
 * Represents video High Dynamic Range (HDR) types.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.HdrType}
 */
export enum HdrType {
    DV = 'dv',
    HDR = 'hdr',
    SDR = 'sdr',
}

/**
 * Format of an HLS audio segment.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.HlsSegmentFormat}
 */
export enum HlsSegmentFormat {
    AAC = 'aac',
    AC3 = 'ac3',
    E_AC3 = 'e_ac3',
    FMP4 = 'fmp4',
    MP3 = 'mp3',
    TS = 'ts',
    TS_AAC = 'ts_aac',
}

/**
 * Format of an HLS audio segment.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.HlsSegmentFormat}
 */
export enum HlsVideoSegmentFormat {
    FMP4 = 'fmp4',
    MPEG2_TS = 'mpeg2_ts',
}

/**
 * The reason for the player to be in IDLE state.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.IdleReason}
 */
export enum IdleReason {
    CANCELLED = 'CANCELLED',
    ERROR = 'ERROR',
    FINISHED = 'FINISHED',
    INTERRUPTED = 'INTERRUPTED',
}

/**
 * The media category.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.MediaCategory}
 */
export enum MediaCategory {
    AUDIO = 'AUDIO',
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
}

/**
 * Represents media message types.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.MessageType}
 */
export enum MessageType {
    CLOUD_STATUS = 'CLOUD_STATUS',
    CUSTOM_COMMAND = 'CUSTOM_COMMAND',
    CUSTOM_STATE = 'CUSTOM_STATE',
    DISPLAY_STATUS = 'DISPLAY_STATUS',
    EDIT_AUDIO_TRACKS = 'EDIT_AUDIO_TRACKS',
    EDIT_TRACKS_INFO = 'EDIT_TRACKS_INFO',
    EXECUTE_ACTION_SCRIPT = 'EXECUTE_ACTION_SCRIPT',
    FOCUS_STATE = 'FOCUS_STATE',
    GET_STATUS = 'GET_STATUS',
    LOAD = 'LOAD',
    LOAD_BY_ENTITY = 'LOAD_BY_ENTITY',
    MEDIA_STATUS = 'MEDIA_STATUS',
    PAUSE = 'PAUSE',
    PLAY = 'PLAY',
    PLAY_AGAIN = 'PLAY_AGAIN',
    PLAY_STRING = 'PLAY_STRING',
    PRECACHE = 'PRECACHE',
    PRELOAD = 'PRELOAD',
    QUEUE_CHANGE = 'QUEUE_CHANGE',
    QUEUE_GET_ITEMS = 'QUEUE_GET_ITEMS',
    QUEUE_GET_ITEM_IDS = 'QUEUE_GET_ITEM_IDS',
    QUEUE_GET_ITEM_RANGE = 'QUEUE_GET_ITEM_RANGE',
    QUEUE_INSERT = 'QUEUE_INSERT',
    QUEUE_ITEMS = 'QUEUE_ITEMS',
    QUEUE_ITEM_IDS = 'QUEUE_ITEM_IDS',
    QUEUE_LOAD = 'QUEUE_LOAD',
    QUEUE_NEXT = 'QUEUE_NEXT',
    QUEUE_PREV = 'QUEUE_PREV',
    QUEUE_REMOVE = 'QUEUE_REMOVE',
    QUEUE_REORDER = 'QUEUE_REORDER',
    QUEUE_SHUFFLE = 'QUEUE_SHUFFLE',
    QUEUE_UPDATE = 'QUEUE_UPDATE',
    REFRESH_CREDENTIALS = 'REFRESH_CREDENTIALS',
    RESUME_SESSION = 'RESUME_SESSION',
    SEEK = 'SEEK',
    SESSION_STATE = 'SESSION_STATE',
    SET_CREDENTIALS = 'SET_CREDENTIALS',
    SET_PLAYBACK_RATE = 'SET_PLAYBACK_RATE',
    SET_VOLUME = 'SET_VOLUME',
    SHOW_REMOTE_CONTROL_OVERLAY = 'SHOW_REMOTE_CONTROL_OVERLAY',
    SKIP_AD = 'SKIP_AD',
    STOP = 'STOP',
    STORE_SESSION = 'STORE_SESSION',
    USER_ACTION = 'USER_ACTION',
}

/**
 * Possible types of media metadata.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.MetadataType}
 */
export enum MetadataType {
    GENERIC = 0,
    MOVIE = 1,
    TV_SHOW = 2,
    MUSIC_TRACK = 3,
    PHOTO = 4,
    AUDIOBOOK_CHAPTER = 5,
}

/**
 * String IDs used by {@link framework.PlayerManager#playString}
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages#.PlayStringId
 */
export enum PlayStringId {
    FREE_TRIAL_ABOUT_TO_EXPIRE = 'FREE_TRIAL_ABOUT_TO_EXPIRE',
    PLAYING_ALTERNATE_MIX = 'PLAYING_ALTERNATE_MIX',
    STREAM_HIJACKED = 'STREAM_HIJACKED',
    SUBSCRIPTION_ABOUT_TO_EXPIRE = 'SUBSCRIPTION_ABOUT_TO_EXPIRE',
}

/**
 * Represents the player state.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.PlayerState}
 */
export enum PlayerState {
    BUFFERING = 'BUFFERING',
    IDLE = 'IDLE',
    PAUSED = 'PAUSED',
    PLAYING = 'PLAYING',
}

/**
 * Queue change types used by QUEUE_CHANGE outgoing message.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.QueueChangeType}
 */
export enum QueueChangeType {
    INSERT = 'INSERT',
    ITEMS_CHANGE = 'ITEMS_CHANGE',
    NO_CHANGE = 'NO_CHANGE',
    REMOVE = 'REMOVE',
    UPDATE = 'UPDATE',
}

/**
 * Types of media container/queue.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.QueueType}
 */
export enum QueueType {
    ALBUM = 'ALBUM',
    AUDIOBOOK = 'AUDIOBOOK',
    LIVE_TV = 'LIVE_TV',
    MOVIE = 'MOVIE',
    PLAYLIST = 'PLAYLIST',
    PODCAST_SERIES = 'PODCAST_SERIES',
    RADIO_STATION = 'RADIO_STATION',
    TV_SERIES = 'TV_SERIES',
    VIDEO_PLAYLIST = 'VIDEO_PLAYLIST',
}

/**
 * Behavior of the queue when all items have been played.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.RepeatMode}
 */
export enum RepeatMode {
    REPEAT_ALL = 'REPEAT_ALL',
    REPEAT_ALL_AND_SHUFFLE = 'REPEAT_ALL_AND_SHUFFLE',
    REPEAT_OFF = 'REPEAT_OFF',
    REPEAT_SINGLE = 'REPEAT_SINGLE',
}

/**
 * Represents the playback state after a SEEK request.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.SeekResumeState}
 */
export enum SeekResumeState {
    PLAYBACK_PAUSE = 'PLAYBACK_PAUSE',
    PLAYBACK_START = 'PLAYBACK_START',
}

/**
 * The streaming protocol types.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.StreamingProtocolType}
 */
export enum StreamingProtocolType {
    UNKNOWN = 0,
    MPEG_DASH = 1,
    HLS = 2,
    SMOOTH_STREAMING = 3,
}

/**
 * Represents the stream types.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.StreamType}
 */
export enum StreamType {
    BUFFERED = 'BUFFERED',
    LIVE = 'LIVE',
    NONE = 'NONE',
}

/**
 * Possible text track edge type.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.TextTrackEdgeType}
 */
export enum TextTrackEdgeType {
    DEPRESSED = 'DEPRESSED',
    DROP_SHADOW = 'DROP_SHADOW',
    NONE = 'NONE',
    OUTLINE = 'OUTLINE',
    RAISED = 'RAISED',
}

/**
 * Text track font generic family.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.TextTrackFontGenericFamily}
 */
export enum TextTrackFontGenericFamily {
    CASUAL = 'CASUAL',
    CURSIVE = 'CURSIVE',
    MONOSPACED_SANS_SERIF = 'MONOSPACED_SANS_SERIF',
    MONOSPACED_SERIF = 'MONOSPACED_SERIF',
    SANS_SERIF = 'SANS_SERIF',
    SERIF = 'SERIF',
    SMALL_CAPITALS = 'SMALL_CAPITALS',
}

/**
 * Possible text track font style.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.TextTrackFontStyle}
 */
export enum TextTrackFontStyle {
    BOLD = 'BOLD',
    BOLD_ITALIC = 'BOLD_ITALIC',
    ITALIC = 'ITALIC',
    NORMAL = 'NORMAL',
}

/**
 * Possible text track type (follows the HTML5 text track type definitions).
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.TextTrackType}
 */
export enum TextTrackType {
    CAPTIONS = 'CAPTIONS',
    CHAPTERS = 'CHAPTERS',
    DESCRIPTIONS = 'DESCRIPTIONS',
    METADATA = 'METADATA',
    SUBTITLES = 'SUBTITLES',
}

/**
 * Text track window type.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.TextTrackWindowType}
 */
export enum TextTrackWindowType {
    NONE = 'NONE',
    NORMAL = 'NORMAL',
    ROUNDED_CORNERS = 'ROUNDED_CORNERS',
}

/**
 * Possible media track type.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.TrackType}
 */
export enum TrackType {
    AUDIO = 'AUDIO',
    TEXT = 'TEXT',
    VIDEO = 'VIDEO',
}

/**
 * User actions.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.UserAction}
 */
export enum UserAction {
    DISLIKE = 'DISLIKE',
    FLAG = 'FLAG',
    FOLLOW = 'FOLLOW',
    LIKE = 'LIKE',
    SKIP_AD = 'SKIP_AD',
    UNFOLLOW = 'UNFOLLOW',
}

/**
 * Context information for the user action.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.UserActionContext}
 */
export enum UserActionContext {
    ALBUM = 'ALBUM',
    ARTIST = 'ARTIST',
    CHANNEL = 'CHANNEL',
    COACH = 'COACH',
    EPISODE = 'EPISODE',
    MOVIE = 'MOVIE',
    PLAYER = 'PLAYER',
    PLAYLIST = 'PLAYLIST',
    SERIES = 'SERIES',
    TEAM = 'TEAM',
    TRACK = 'TRACK',
    UNKNOWN_CONTEXT = 'UNKNOWN_CONTEXT',
}

/**
 * RefreshCredentials request data.
 * Note as of July 2021: Docs don't mention this extending RequestData.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.LoadByEntityRequestData
 */
export class RefreshCredentialsRequestData extends RequestData {}

/**
 * Media event SET_VOLUME request data.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.VolumeRequestData
 */
export class VolumeRequestData extends RequestData {
    constructor();

    /**
     * The media stream volume
     */
    volume: Volume;
}

/**
 * Represents the volume of a media session stream.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.Volume
 */
export class Volume {
    /**
     * Value from 0 to 1 that represents the current stream volume level.
     */
    level?: number | undefined;

    /**
     * Whether the stream is muted.
     */
    muted?: boolean | undefined;
}

/**
 * Video information such as video resolution and High Dynamic Range (HDR).
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.VideoInformation
 */
export class VideoInformation {
    constructor(width: number, height: number, hdrType: HdrType);

    width: number;

    height: number;

    hdrType: HdrType;
}

/**
 * VAST ad request configuration.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.VastAdsRequest
 */
export class VastAdsRequest {
    /**
     * Specifies a VAST document to be used as the ads response instead of making a
     * request via an ad tag url.
     * This can be useful for debugging and other situations where a VAST response is
     * already available.
     */
    adsResponse?: string | undefined;

    /**
     * URL for VAST file.
     */
    adTagUrl?: string | undefined;
}

/**
 * UserAction request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.UserActionRequestData
 */
export class UserActionRequestData extends RequestData {
    constructor();

    /**
     * Indicate request for clearing of a user action (i.e. undo like).
     */
    clear?: boolean | undefined;

    /**
     * Optional request source. It contain the assistent query that initiate the
     * request.
     */
    source?: string | undefined;

    /**
     * User action to be handled by the application.
     */
    userAction: UserAction;

    /**
     * Optional context information for the user action.
     */
    userActionContext?: UserActionContext | undefined;
}

/**
 * A TV episode media description.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.TvShowMediaMetadata
 */
export class TvShowMediaMetadata {
    /**
     * Content rating.
     */
    contentRating?: any;

    /**
     * TV episode number. A positive integer.
     */
    episode?: number | undefined;

    /**
     * @deprecated use episode instead
     */
    episodeNumber?: number | undefined;

    /**
     * @deprecated use title instead
     */
    episodeTitle?: string | undefined;

    /**
     * Content images. Examples would include cover art or a thumbnail of
     * the currently playing media.
     */
    images?: Image[] | undefined;

    /**
     * ISO 8601 date when the episode originally aired; e.g. 2014-02-10.
     */
    originalAirdate?: string | undefined;

    /**
     * @deprecated use originalAirdate instead.
     */
    releaseYear?: number | undefined;

    /**
     * TV episode season. A positive integer.
     */
    season?: number | undefined;

    /**
     * @deprecated use season instead.
     */
    seasonNumber?: number | undefined;

    /**
     * TV series title.
     */
    seriesTitle?: string | undefined;

    /**
     * TV episode title.
     */
    title?: string | undefined;
}
/**
 * Describes track metadata information.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.Track
 */
export class Track {
    constructor(trackId: number, trackType: TrackType);

    /**
     * Custom data set by the receiver application.
     */
    customData?: any;

    /**
     * Indicate track is in-band and not side-loaded track. Relevant only for text tracks.
     */
    isInband?: boolean | undefined;

    /**
     * Language tag as per RFC 5646 (If subtype is “SUBTITLES” it is mandatory).
     */
    language?: string | undefined;

    /**
     * A descriptive; human readable name for the track. For example "Spanish".
     */
    name?: string | undefined;

    /**
     * For text tracks; the type of text track.
     */
    subtype?: string | undefined;

    /**
     * It can be the url of the track or any other identifier that allows the receiver
     * to find the content (when the track is not inband or included in the manifest).
     * For example it can be the url of a vtt file.
     */
    trackContentId?: string | undefined;

    /**
     * It represents the MIME type of the track content. For example if the track
     * is a vtt file it will be ‘text/vtt’. This field is needed for out of band tracks,
     *  so it is usually provided if a trackContentId has also been provided.
     * It is not mandatory if the receiver has a way to identify the content from
     * the trackContentId, but recommended.
     * The track content type, if provided, must be consistent with the track type.
     */
    trackContentType?: string | CaptionMimeType | undefined;

    /**
     * Unique identifier of the track within the context of a MediaInformation object.
     */
    trackId: number;

    /**
     * The type of track.
     */
    type: TrackType;

    /**
     * For role(s) of the track; The following values for each media type are recognized, with value explanations described in ISO/IEC 23009-1, labeled "DASH role scheme":
     * VIDEO: caption, subtitle, main, alternate, supplementary, sign, emergency
     * AUDIO: main, alternate, supplementary, commentary, dub, emergency
     * TEXT: main, alternate, subtitle, supplementary, commentary, dub, description, forced_subtitle
     */
    roles?: string[] | undefined;
}

/**
 * Describes style information for a text track.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.TextTrackStyle
 */
export class TextTrackStyle {
    /**
     * The background 32 bit RGBA color. The alpha channel should be used for transparent backgrounds.
     */
    backgroundColor?: string | undefined;

    /**
     * Custom data set by the receiver application.
     */
    customData?: any;

    /**
     * RGBA color for the edge; this value will be ignored if edgeType is NONE.
     */
    edgeColor?: string | undefined;

    edgeType?: TextTrackEdgeType | undefined;

    /**
     * If the font is not available in the receiver the fontGenericFamily will be used.
     */
    fontFamily?: string | undefined;

    /**
     * The text track generic family.
     */
    fontGenericFamily?: TextTrackFontGenericFamily | undefined;

    /**
     * The font scaling factor for the text track (the default is 1).
     */
    fontScale?: number | undefined;

    /**
     * The text track font style.
     */
    fontStyle?: TextTrackFontStyle | undefined;

    /**
     * The foreground 32 bit RGBA color.
     */
    foregroundColor?: string | undefined;

    /**
     * 32 bit RGBA color for the window. This value will be ignored if windowType is NONE.
     */
    windowColor?: string | undefined;

    /**
     * Rounded corner radius absolute value in pixels (px). This value will be ignored
     * if windowType is not ROUNDED_CORNERS.
     */
    windowRoundedCornerRadius?: number | undefined;

    /**
     * The window concept is defined in CEA-608 and CEA-708. In WebVTT is called a region.
     */
    windowType?: TextTrackWindowType | undefined;
}

/**
 * Response data for SESSION_STATE command.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.StoreSessionResponseData
 */
export class StoreSessionResponseData extends RequestData {
    /**
     * @param sessionState The SessionState object to be returned.
     */
    constructor(sessionState: SessionState);

    /**
     * The SessionState object to be returned.
     */
    sessionState: SessionState;
}

/**
 * STORE_SESSION request data
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.StoreSessionRequestData
 */
export class StoreSessionRequestData extends RequestData {
    constructor();
}

/**
 * Media event playback rate request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.SetPlaybackRateRequestData
 */
export class SetPlaybackRateRequestData extends RequestData {
    constructor();

    /**
     * New playback rate (>0).
     */
    playbackRate?: number | undefined;

    /**
     * New playback rate relative to current playback rate. New rate will be the
     * result of multiplying the current rate with the value. For example a
     * value of 1.1 will increase rate by 10%. (Only used if the playbackRate
     * value is not provided).
     */
    relativePlaybackRate?: number | undefined;
}

/**
 * SetCredentials request data.
 * Note as of July 2021: Docs don't mention this extending RequestData.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.SetCredentialsRequestData}
 */
export class SetCredentialsRequestData extends RequestData {
    constructor();

    /**
     * Credentials to use by receiver.
     */
    credentials: string;

    /**
     * If it is a response for refresh credentials, it will indicate the request
     * id of the refresh credentials request.
     */
    forRequestId?: number | undefined;

    /**
     * Optional request source. It contain the assistent query that initiate the
     * request.
     */
    source?: string | undefined;
}

/**
 * A state object containing all data to be stored in StoreSession and to be
 * recovered in ResumeSession.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.SessionState
 */
export class SessionState {
    constructor();

    /**
     * Customizable object for storing the state.
     */
    customData?: any;

    loadRequestData?: LoadRequestData | undefined;
}

/**
 * Media event SEEK request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.SeekRequestData
 */
export class SeekRequestData extends RequestData {
    constructor();

    /**
     * Seconds since beginning of content.
     */
    currentTime?: number | undefined;

    /**
     * Seconds relative to the current playback position. If this field is
     * defined, the currentTime field will be ignored.
     */
    relativeTime?: number | undefined;

    /**
     * The playback state after a SEEK request.
     */
    resumeState?: SeekResumeState | undefined;
}

/**
 * Provides seekable range in seconds.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.SeekableRange
 */
export class SeekableRange {
    constructor(start?: number, end?: number);

    /**
     * End of the seekable range in seconds.
     */
    end?: number | undefined;

    /**
     * Start of the seekable range in seconds.
     */
    start?: number | undefined;
}

/**
 * RESUME_SESSION request data
 * Note as of July 2021: Docs don't mention this extending RequestData.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.ResumeSessionRequestData
 */
export class ResumeSessionRequestData extends RequestData {
    constructor();

    /**
     * The SessionState object returned by StoreSession command.
     */
    sessionState: SessionState;
}

/**
 * Media event request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.RequestData
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
    mediaSessionId?: number | undefined;

    /**
     * Id of the request; used to correlate request/response.
     */
    requestId: number;

    /**
     * Message type.
     */
    type: MessageType;
}

/**
 * Media event UPDATE queue request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueUpdateRequestData
 */
export class QueueUpdateRequestData extends RequestData {
    constructor();

    /**
     * ID of the current media Item after the changes (if not provided or not
     * found, the currentItem value will be the same as before the update).
     */
    currentItemId?: number | undefined;

    /**
     * Seconds since the beginning of content to start playback of the current
     * item. If provided, this value will take precedence over the startTime
     * value provided at the QueueItem level but only the first time the item is
     * played. This is to cover the common case where the user jumps to the
     * middle of an item so the currentTime does not apply to the item
     * permanently like the QueueItem startTime does. It avoids having to reset
     * the startTime dynamically (that may not be possible if the phone has gone
     * to sleep).
     */
    currentTime?: number | undefined;

    /**
     * List of queue items to be updated. No reordering will happen, the items
     * will retain the existing order.
     */
    items?: QueueItem[] | undefined;

    /**
     * Skip/Go back number of items with respect to the position of currentItem
     * (it can be negative). If it is out of boundaries, the currentItem will be
     * the next logical item in the queue wrapping around the boundaries. The
     * new currentItem position will follow the rules of the queue repeat
     * behavior.
     */
    jump?: number | undefined;

    /**
     * Behavior of the queue when all items have been played.
     */
    repeatMode?: RepeatMode | undefined;

    /**
     * Shuffle the queue items when the update is processed. After the queue
     * items are shuffled, the item at the currentItem position will be loaded.
     */
    shuffle?: boolean | undefined;
}

/**
 * Media event queue REORDER request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueReorderRequestData
 */
export class QueueReorderRequestData extends RequestData {
    constructor(itemIds: number[]);

    /**
     * ID of the current media Item after the deletion (if not provided;
     * the currentItem value will be the same as before the deletion;
     * if it does not exist because it has been deleted;
     * the currentItem will point to the next logical item in the list).
     */
    currentItemId?: number | undefined;

    /**
     * Seconds since the beginning of content to start playback of the current item.
     * If provided; this value will take precedence over the startTime value provided
     * at the QueueItem level but only the first time the item is played.
     * This is to cover the common case where the user jumps to the middle of an
     * item so the currentTime does not apply to the item permanently like
     * the QueueItem startTime does. It avoids having to reset the startTime dynamically
     * (that may not be possible if the phone has gone to sleep).
     */
    currentTime?: number | undefined;

    /**
     * ID of the item that will be located immediately after the reordered list.
     * If the ID is not found or it is not provided;
     * the reordered list will be appended at the end of the existing list.
     */
    insertBefore?: number | undefined;

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
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueRemoveRequestData
 */
export class QueueRemoveRequestData extends RequestData {
    /**
     * @param itemIds IDs of queue items to be deleted.
     */
    constructor(itemIds: number[]);

    /**
     * ID of the current media Item after the deletion (if not provided, the
     * currentItem value will be the same as before the deletion; if it does not
     * exist because it has been deleted, the currentItem will point to the next
     * logical item in the list).
     */
    currentItemId?: number | undefined;

    /**
     * Seconds since the beginning of content to start playback of the current
     * item. If provided, this value will take precedence over the startTime
     * value provided at the QueueItem level but only the first time the item is
     * played. This is to cover the common case where the user jumps to the
     * middle of an item so the currentTime does not apply to the item
     * permanently like the QueueItem startTime does. It avoids having to reset
     * the startTime dynamically (that may not be possible if the phone has gone
     * to sleep).
     */
    currentTime?: number | undefined;

    /**
     * IDs of queue items to be deleted.
     */
    itemIds: number[];
}
/**
 * Media event queue LOAD request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueLoadRequestData
 */
export class QueueLoadRequestData extends RequestData {
    /**
     * @param items List of queue items. The itemId field of the items should be
     * empty or the request will fail with an INVALID_PARAMS error. It is sorted
     * (first element will be played first).
     */
    constructor(items: QueueItem[]);

    /**
     * Seconds (since the beginning of content) to start playback of the first
     * item to be played. If provided, this value will take precedence over the
     * startTime value provided at the QueueItem level but only the first time
     * the item is played. This is to cover the common case where the user casts
     * the item that was playing locally so the currentTime does not apply to
     * the item permanently like the QueueItem startTime does. It avoids having
     * to reset the startTime dynamically (that may not be possible if the phone
     * has gone to sleep).
     */
    currentTime?: number | undefined;

    /**
     * Array of queue items. It is sorted (first element will be played first).
     */
    items: QueueItem[];

    /**
     * Behavior of the queue when all items have been played.
     */
    repeatMode?: RepeatMode | undefined;

    /**
     * The index of the item in the items array that must be the first
     * currentItem (the item that will be played first). Note this is the index
     * of the array (starts at 0) and not the itemId (as it is not known until
     * the queue is created). If repeatMode is REPEAT_OFF playback will end when
     * the last item in the array is played (elements before the startIndex will
     * not be played). This may be useful for continuation scenarios where the
     * user was already using the sender app and in the middle decides to cast.
     * In this way the sender app does not need to map between the local and
     * remote queue positions or saves one extra QUEUE_UPDATE request.
     */
    startIndex?: number | undefined;
}

/**
 * Queue item information. Application developers may need to create a QueueItem to
 * insert a queue element using InsertQueueItems. In this case they should not
 * provide an itemId (as the actual itemId will be assigned when the item is inserted
 * in the queue). This prevents ID collisions with items added from a sender app.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueItem
 */
export class QueueItem {
    constructor(opt_itemId?: number);

    /**
     * Array of Track trackIds that are active. If the array is not provided;
     * the default tracks will be active.
     */
    activeTrackIds?: number[] | undefined;

    /**
     * If the autoplay parameter is not specified or is true; the media player
     *  will begin playing the element in the queue when the item becomes the currentItem.
     */
    autoplay?: boolean | undefined;

    /**
     * The application can define any extra queue item information needed.
     */
    customData?: any;

    /**
     * Unique identifier of the item in the queue.
     * The attribute is optional because for LOAD or INSERT should not be provided
     * (as it will be assigned by the receiver when an item is first created/inserted).
     */
    itemId?: number | undefined;

    /**
     * Metadata (including contentId) of the playlist element.
     */
    media?: MediaInformation | undefined;

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
    playbackDuration?: number | undefined;

    /**
     * Used to track original order of an item in the queue to undo shuffle.
     */
    orderId?: number | undefined;

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
    preloadTime?: number | undefined;

    /**
     * Seconds since beginning of content. If the content is live content;
     * and startTime is not specified; the stream will start at the live position.
     */
    startTime?: number | undefined;
}

/**
 * Media event queue INSERT request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueInsertRequestData
 */
export class QueueInsertRequestData extends RequestData {
    /**
     * @param items List of queue items. The itemId field of the items should be
     * empty or the request will fail with an INVALID_PARAMS error. It is sorted
     * (first element will be played first).
     */
    constructor(items: QueueItem[]);

    /**
     * ID of the current media Item after the insertion (if not provided, the
     * currentItem value will be the same as before the insertion).
     */
    currentItemId?: number | undefined;

    /**
     * Index (relative to the items array, starting with 0) of the new current
     * media Item. For inserted items we use the index (similar to startIndex in
     * QUEUE_LOAD) and not currentItemId, because the itemId is unknown until
     * the items are inserted. If not provided, the currentItem value will be
     * the same as before the insertion (unless currentItemId is provided). This
     * param allows to make atomic the common use case of insert and play an
     * item.
     */
    currentItemIndex?: number | undefined;

    /**
     * Seconds since the beginning of content to start playback of the current
     * item. If provided, this value will take precedence over the startTime
     * value provided at the QueueItem level but only the first time the item is
     * played. This is to cover the common case where the user jumps to the
     * middle of an item so the currentTime does not apply to the item
     * permanently like the QueueItem startTime does. It avoids having to reset
     * the startTime dynamically (that may not be possible if the phone has gone
     * to sleep).
     */
    currentTime?: number | undefined;

    /**
     * ID of the item that will be located immediately after the inserted list.
     * If the ID is not found or it is not provided, the list will be appended
     * at the end of the existing list.
     */
    insertBefore?: number | undefined;

    /**
     * List of queue items. The itemId field of the items should be empty. It is
     * sorted (first element will be played first).
     */
    items: QueueItem[];
}

/**
 * Represents a data message containing the full list of queue ids.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueIds
 */
export class QueueIds {
    constructor();

    /**
     * List of queue item ids.
     */
    itemIds?: number[] | undefined;

    /**
     * The corresponding request id.
     */
    requestId?: number | undefined;

    /**
     * Message type.
     */
    type: MessageType;
}

/**
 * Common container metadata used as part of QueueData.
 *
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.ContainerMetadata
 */
export class ContainerMetadata {
    constructor(type?: ContainerType);

    /**
     * Container duration in seconds. For example an audiobook playback time.
     */
    containerDuration?: number | undefined;

    /**
     * Container images. For example a live TV channel logo, audiobook cover,
     * album cover art, etc.
     */
    containerImages?: Image[] | undefined;

    /**
     * The type of container object.
     */
    containerType: ContainerType;

    /**
     * Array of media metadata objects to describe the media content sections.
     * Used to delineate live TV streams into programs and audiobooks into chapters.
     */
    sections?:
        | MediaMetadata[]
        | GenericMediaMetadata[]
        | MovieMediaMetadata[]
        | MusicTrackMediaMetadata[]
        | PhotoMediaMetadata[]
        | TvShowMediaMetadata[]
        | AudiobookChapterMediaMetadata[]
        | object[]
        | undefined;

    /**
     * The title of the container, for example an audiobook title, a TV channel name, etc.
     */
    title?: string | undefined;
}

/**
 * Queue data as part of the LOAD request.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueData
 */
export class QueueData {
    constructor(
        id?: string,
        name?: string,
        description?: string,
        repeatMode?: RepeatMode,
        items?: QueueItem[],
        startIndex?: number,
        startTime?: number,
    );

    /**
     * Metadata to describe the queue content, and optionally media sections.
     */
    containerMetadata?: ContainerMetadata | undefined;

    /**
     * Description of the queue.
     */
    description?: string | undefined;

    /**
     * Optional Queue entity id; provide Google Assistant deep link.
     */
    entity?: string | undefined;

    /**
     * Id of the queue.
     */
    id?: string | undefined;

    /**
     * Array of queue items. It is sorted (first element will be played first).
     */
    items?: QueueItem[] | undefined;

    /**
     * Name of the queue.
     */
    name?: string | undefined;

    /**
     * Queue type; e.g. album; playlist; radio station; tv series; etc.
     */
    queueType?: QueueType | undefined;

    /**
     * Continuous playback behavior of the queue.
     */
    repeatMode?: RepeatMode | undefined;

    /**
     * Indicate if the queue is shuffled.
     */
    shuffle?: boolean | undefined;

    /**
     * The index of the item in the queue that should be used to start playback first.
     */
    startIndex?: number | undefined;

    /**
     * Seconds (since the beginning of content) to start playback of the first item.
     */
    startTime?: number | undefined;
}

/**
 * Represents a queue change message, such as insert, remove, and update.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueChange
 */
export class QueueChange {
    constructor();

    /**
     * The actual queue change type.
     */
    changeType?: QueueChangeType | undefined;

    /**
     * The id to insert the list of itemIds before.
     */
    insertBefore?: number | undefined;

    /**
     * List of changed itemIds.
     */
    itemIds?: number[] | undefined;

    /**
     * The corresponding request id.
     */
    requestId?: number | undefined;

    /**
     * The queue change sequence ID. Used to coordinate state sync between various
     * senders and the receiver.
     */
    sequenceNumber?: number | undefined;

    /**
     * Message type.
     */
    type: MessageType;
}

/**
 * Media event PRELOAD request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.PreloadRequestData
 */
export class PreloadRequestData extends LoadRequestData {
    /**
     * @param itemId The ID of the queue item.
     */
    constructor(itemId: number);

    /**
     * The ID of the queue item.
     */
    itemId: number;
}

/**
 * Media event PRECACHE request data. (Some fields of the load request, like
 * autoplay and queueData, are ignored).
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.PrecacheRequestData
 */
export class PrecacheRequestData extends LoadRequestData {
    /**
     * @param data Application precache data.
     */
    constructor(data?: string);

    /**
     * Application precache data.
     */
    precacheData?: string | undefined;
}

/**
 * PlayString request data.
 * Note as of July 2021: Docs don't mention this extending RequestData.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.PlayStringRequestData
 */
export class PlayStringRequestData extends RequestData {
    constructor(stringId: PlayStringId, opt_arguments?: string[]);

    /**
     * An optional array of string values to be filled into the text.
     */
    arguments?: string[] | undefined;

    /**
     * An identifier for the text to be played back.
     */
    stringId: PlayStringId;
}

/**
 * A photo media description.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.PhotoMediaMetadata
 */
export class PhotoMediaMetadata {
    /**
     * Name of the photographer.
     */
    artist?: string | undefined;

    /**
     * Content rating.
     */
    contentRating?: any;

    /**
     * ISO 8601 date and time the photo was taken; e.g. 2014-02-10T15:47:00Z.
     */
    creationDateTime?: string | undefined;

    /**
     * Photo height; in pixels.
     */
    height?: number | undefined;

    /**
     * Images associated with the content. Examples would include a photo thumbnail.
     */
    images?: Image[] | undefined;

    /**
     * Latitude.
     */
    latitude?: number | undefined;

    /**
     * Location where the photo was taken. For example; "Seattle; Washington; USA".
     */
    location?: string | undefined;

    /**
     * Longitude.
     */
    longitude?: number | undefined;

    /**
     * Photo title.
     */
    title?: string | undefined;

    /**
     * Photo width; in pixels.
     */
    width?: number | undefined;
}

/**
 * A music track media description.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.MusicTrackMediaMetadata
 */
export class MusicTrackMediaMetadata {
    /**
     * Album artist name.
     */
    albumArtist?: string | undefined;

    /**
     * Album name.
     */
    albumName?: string | undefined;

    /**
     * Track artist name.
     */
    artist?: string | undefined;

    /**
     * @deprecated use artist instead
     */
    artistName?: string | undefined;

    /**
     * Track composer name.
     */
    composer?: string | undefined;

    /**
     * Content rating.
     */
    contentRating?: any;

    /**
     * Disc number. A positive integer.
     */
    discNumber?: number | undefined;

    /**
     * Content images. Examples would include cover art or a thumbnail of the
     * currently playing media.
     */
    images?: Image[] | undefined;

    /**
     * ISO 8601 date when the track was released; e.g. 2014-02-10.
     */
    releaseDate?: string | undefined;

    /**
     * @deprecated use releaseDate instead
     */
    releaseYear?: string | undefined;

    /**
     * Track name.
     */
    songName?: string | undefined;

    /**
     * Track title.
     */
    title?: string | undefined;

    /**
     * Track number in album. A positive integer.
     */
    trackNumber?: number | undefined;
}

/**
 * A movie media description.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.MovieMediaMetadata
 */
export class MovieMediaMetadata {
    /**
     * Content rating.
     */
    contentRating?: any;

    /**
     * Content images. Examples would include cover art or a thumbnail of the
     * currently playing media.
     */
    images?: Image[] | undefined;

    /**
     * ISO 8601 date when the movie was released; e.g. 2014-02-10.
     */
    releaseDate?: string | undefined;

    /**
     * @deprecated use releaseDate instead
     */
    releaseYear?: number | undefined;

    /**
     * Movie studio.
     */
    studio?: string | undefined;

    /**
     * Movie subtitle.
     */
    subtitle?: string | undefined;

    /**
     * Movie title.
     */
    title?: string | undefined;
}

/**
 * Represents the status of a media session.
 * [Documentation]{@link https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.MediaStatus}
 */
export class MediaStatus {
    constructor();

    /**
     * List of IDs corresponding to the active tracks.
     */
    activeTrackIds?: number[] | undefined;

    /**
     * Status of break, if receiver is playing break. This field will be defined
     * only when receiver is playing break.
     */
    breakStatus?: BreakStatus | undefined;

    /**
     * ID of this media item (the item that originated the status change).
     */
    currentItemId?: number | undefined;

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
    extendedStatus?: ExtendedMediaStatus | undefined;

    /**
     * If the state is IDLE, the reason the player went to IDLE state.
     */
    idleReason?: IdleReason | undefined;

    /**
     * List of media queue items.
     */
    items?: QueueItem[] | undefined;

    /**
     * Seekable range of a live or event stream. It uses relative media time in
     * seconds. It will be undefined for VOD streams.
     */
    liveSeekableRange?: LiveSeekableRange | undefined;

    /**
     * ID of the media Item currently loading. If there is no item being loaded,
     * it will be undefined.
     */
    loadingItemId?: number | undefined;

    /**
     * The media information.
     */
    media?: MediaInformation | undefined;

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
     * ID of the next Item, only available if it has been preloaded. Media items
     * can be preloaded and cached temporarily in memory, so when they are
     * loaded later on, the process is faster (as the media does not have to be
     * fetched from the network).
     */
    preloadedItemId?: number | undefined;

    /**
     * Queue data.
     */
    queueData?: QueueData | undefined;

    /**
     * The behavior of the queue when all items have been played.
     */
    repeatMode?: RepeatMode | undefined;

    /**
     * The commands supported by this player.
     */
    supportedMediaCommands: number;

    /**
     * Message type.
     */
    type: MessageType;

    /**
     * The video information.
     */
    videoInfo?: VideoInformation | undefined;

    /**
     * The current stream volume.
     */
    volume: Volume;
}

/**
 * Common media metadata used as part of MediaInformation
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.MediaMetadata
 */
export class MediaMetadata {
    constructor(type: MetadataType);

    /**
     * The type of metadata
     */
    metadataType: MetadataType;

    /**
     * Optional image url to be shown when video is loading.
     */
    posterUrl?: string | undefined;

    /**
     * The queue item that include this media section. Only relevant if used in
     * container sections, and there are multiple media items for the container.
     */
    queueItemId?: number | undefined;

    /**
     * The media section duration in seconds. Only needed if the metadata describes
     * a section of the media file that has a different duration value.
     */
    sectionDuration?: number | undefined;

    /**
     * Alternative way to provide section start time for live media. Provides start
     * time in Epoch time in seconds.
     */
    sectionStartAbsoluteTime?: number | undefined;

    /**
     * The media section start time offset within the container in seconds. If
     * not provided it assumes it's the same as the offset witnin media.
     */
    sectionStartTimeInContainer?: number | undefined;

    /**
     * The media section start time within media file in seconds. This can be
     * negative if a section started in previous file.
     */
    sectionStartTimeInMedia?: number | undefined;
}

/**
 * Represents the media information.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.MediaInformation
 */
export class MediaInformation {
    /**
     * Partial list of break clips that includes current break clip that receiver
     * is playing or ones that receiver will play shortly after; instead of sending
     * whole list of clips. This is to avoid overflow of MediaStatus message.
     */
    breakClips?: BreakClip[] | undefined;

    /**
     * List of breaks.
     */
    breaks?: Break[] | undefined;

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
    contentUrl?: string | undefined;

    /**
     * Application-specific media information.
     */
    customData?: any;

    /**
     * The media duration.
     */
    duration?: number | undefined;

    /**
     * Optional Media entity; provide Google Assistant deep link.
     */
    entity?: string | undefined;

    /**
     * The format of the HLS media segment.
     */
    hlsSegmentFormat?: HlsSegmentFormat | undefined;

    /**
     * The format of the HLS video segment.
     */
    hlsVideoSegmentFormat?: HlsVideoSegmentFormat | undefined;

    /**
     * The media cateory (audio, video, picture).
     */
    mediaCategory?: MediaCategory | undefined;

    /**
     * The media metadata.
     */
    metadata?:
        | MediaMetadata
        | GenericMediaMetadata
        | MovieMediaMetadata
        | MusicTrackMediaMetadata
        | PhotoMediaMetadata
        | TvShowMediaMetadata
        | AudiobookChapterMediaMetadata
        | object
        | undefined;

    startAbsoluteTime?: number | undefined;

    /**
     * The stream type.
     */
    streamType: StreamType;

    /**
     * The style of text track.
     */
    textTrackStyle?: TextTrackStyle | undefined;

    /**
     * The media tracks.
     */
    tracks?: Track[] | undefined;

    /**
     * Indicates the user action state for media. Indicate user like, dislike,
     * or follow actions for the media.
     */
    userActionStates?: UserActionState[] | undefined;

    /**
     * VMAP ad request configuration. Used if breaks and breakClips are not
     * provided.
     */
    vmapAdsRequest?: VastAdsRequest | undefined;
}

/**
 * Media event LOAD request data.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.LoadRequestData
 */
export class LoadRequestData extends RequestData {
    constructor();

    /**
     * Array of trackIds that are active. If the array is not provided, the
     * default tracks will be active.
     */
    activeTrackIds?: number[] | undefined;

    /**
     * If the autoplay parameter is specified, the media player will begin
     * playing the content when it is loaded. Even if autoplay is not specified,
     * the media player implementation may choose to begin playback immediately.
     */
    autoplay?: boolean | undefined;

    /**
     * Optional user credentials.
     */
    credentials?: string | undefined;

    /**
     * Optional credentials type. The type 'cloud' is a reserved type used by
     * load requests that were originated by voice assistant commands.
     */
    credentialsType?: string | undefined;

    /**
     * Seconds since beginning of content. If the content is live content, and
     * currentTime is not specified, the stream will start at the live position.
     */
    currentTime?: number | undefined;

    /**
     * Added load options.
     */
    loadOptions?: LoadOptions | undefined;

    /**
     * If the autoplay parameter is specified, the media player will begin
     * playing the content when it is loaded. Even if autoplay is not specified,
     * the media player implementation may choose to begin playback immediately.
     */
    media: MediaInformation;

    /**
     * The media playback rate.
     */
    playbackRate?: number | undefined;

    /**
     * Queue data.
     */
    queueData?: QueueData | undefined;
}

/**
 * Provides additional options for load requests.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.LoadOptions
 */
export class LoadOptions {
    constructor();

    /**
     * The content filtering mode to apply for which items to play.
     */
    contentFilteringMode?: ContentFilteringMode | undefined;
}

/**
 * LoadByEntity request data.
 * Note as of July 2021: Docs don't mention this extending RequestData.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.LoadByEntityRequestData
 */
export class LoadByEntityRequestData extends RequestData {
    /**
     * Content entity information, typically represented by a stringified JSON object
     */
    entity: string;

    /**
     * Added load options.
     */
    loadOptions: LoadOptions | undefined;

    /**
     *  Shuffle the items to play.
     */
    shuffle?: boolean | undefined;
}

/**
 * Provides live seekable range with start and end time in seconds and two more
 * attributes.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.LiveSeekableRange
 */
export class LiveSeekableRange {
    constructor(start?: number, end?: number, isMovingWindow?: boolean, isLiveDone?: boolean);

    /**
     * A boolean value indicates whether a live stream is ended. If it is done;
     * the end of live seekable range should stop updating.
     */
    isLiveDone?: boolean | undefined;

    /**
     * A boolean value indicates whether the live seekable range is a moving window.
     * If false; it will be either a expanding range or a fixed range meaning live
     * has ended.
     */
    isMovingWindow?: boolean | undefined;
}

/**
 * Represents a data message containing item information for each requested ids.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.ItemsInfo
 */
export class ItemsInfo {
    constructor();

    /**
     * List of changed itemIds.
     */
    items?: QueueItem[] | undefined;

    /**
     * The corresponding request id.
     */
    requestId?: number | undefined;

    /**
     * Message type.
     */
    type: MessageType;
}

/**
 * An image that describes a receiver application or media item.
 * This could be an application icon; cover art; or a thumbnail.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.Image
 */
export class Image {
    constructor(url: string);

    /**
     * The height of the image.
     */
    height?: number | undefined;

    /**
     * the URL to the image
     */
    url: string;

    /**
     * The width of the image
     */
    width?: number | undefined;
}
/**
 * Media event GET_STATUS request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.GetStatusRequestData
 */
export class GetStatusRequestData extends RequestData {
    constructor();

    /**
     * The options of a GET_STATUS request.
     */
    options?: GetStatusOptions | undefined;
}

/**
 * Get items info request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.GetItemsInfoRequestData
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
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.GenericMediaMetadata
 */
export class GenericMediaMetadata extends MediaMetadata {
    constructor();

    /**
     * Content rating.
     */
    contentRating?: any;

    /**
     * Content images. Examples would include cover art or a thumbnail of the
     * currently playing media.
     */
    images: Image[];

    /**
     * ISO 8601 date and/or time when the content was released; e.g. 2014-02-10.
     */
    releaseDate?: string | undefined;

    /**
     * @deprecated use releaseDate instead
     */
    releaseYear?: number | undefined;

    /**
     * Content subtitle.
     */
    subtitle?: string | undefined;

    /**
     * Content title.
     */
    title?: string | undefined;
}

/**
 * Focus state change message.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.FocusStateRequestData
 */
export class FocusStateRequestData extends RequestData {
    constructor();

    /**
     * The focus state of the app.
     */
    state?: FocusState | undefined;
}

/**
 * Fetch items request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.FetchItemsRequestData
 */
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
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.ExtendedMediaStatus
 */
export class ExtendedMediaStatus {
    constructor(playerState: MediaInformation, opt_media?: MediaInformation, opt_mediaSessionId?: number);

    media?: MediaInformation | undefined;

    mediaSessionId?: number | undefined;

    playerState: ExtendedPlayerState;
}

/**
 * Event data for {@link events.EventType.ERROR} event.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.events.ErrorEvent
 */
export class ErrorEvent extends Event {
    constructor(detailedErrorCode?: DetailedErrorCode, error?: any);

    /**
     * An error code representing the cause of the error.
     */
    detailedErrorCode?: DetailedErrorCode | undefined;

    /**
     * The error object.
     * This could be an Error object (e.g.; if an Error was thrown in an event handler)
     * or an object with error information (e.g.; if the receiver received an invalid
     * command).
     */
    error?: any;
}

/**
 * Represents error information
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.ErrorData
 */
export class ErrorData {
    constructor(type: ErrorType);

    /**
     * Application-specific data for this request.
     * It enables the sender and receiver to easily extend the media protocol
     * without having to use a new namespace with custom messages.
     */
    customData?: any;

    /**
     * Optional detailed error code from player.
     */
    detailedErrorCode?: DetailedErrorCode | undefined;

    /**
     * The error reason.
     */
    reason?: ErrorReason | undefined;

    /**
     * Id of the request; used to correlate request/response.
     */
    requestId?: number | undefined;

    type: ErrorType;
}

/**
 * Media event EDIT_TRACKS_INFO request data.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.EditTracksInfoRequestData
 */
export class EditTracksInfoRequestData extends RequestData {
    constructor();

    /**
     * Array of the `Track` `trackId`s that should be active. If it is not
     * provided, the active tracks will not change. If the array is empty, no
     * track will be active.
     */
    activeTrackIds?: number[] | undefined;

    /**
     * Flag to enable or disable text tracks. If `false` it will disable all
     * text tracks. If `true` it will enable the first text track, or the
     * previous active text tracks. This flag is ignored if `activeTrackIds` or
     * `language` is provided.
     */
    enableTextTracks?: boolean | undefined;

    /**
     * Indicates that the provided language was not an explicit user request,
     * but rather inferred from used language in voice query. It allows receiver
     * apps to use user saved preference instead of spoken language.
     */
    isSuggestedLanguage?: boolean | undefined;

    /**
     * Language for the tracks that should be active. The language field will
     * take precedence over activeTrackIds if both are specified.
     */
    language?: string | undefined;

    /**
     * The requested text track style. If it is not provided the existing style
     * will be used (if no style was provided in previous calls, it will be the
     * default receiver style).
     */
    textTrackStyle?: TextTrackStyle | undefined;
}

/**
 * Media event EDIT_AUDIO_TRACKS request data. If language is not provided the
 * default audio track for the media will be enabled.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.EditAudioTracksRequestData
 */
export class EditAudioTracksRequestData extends RequestData {
    constructor();

    /**
     * Indicates that the provided language was not an explicit user request,
     * but rather inferred from used language in voice query. It allows receiver
     * apps to use user saved preference instead of spoken language.
     */
    isSuggestedLanguage?: boolean | undefined;

    /**
     * Language for the track that should be active.
     * The language field will take precedence over `activeTrackIds` if both are
     * specified.
     */
    language?: string | undefined;
}

/**
 * DisplayStatus request data.
 * Note as of November 2019: Docs don't mention this extending RequestData.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.DisplayStatusRequestData
 */
export class DisplayStatusRequestData extends RequestData {
    /**
     * Optional request source. It contains the assistant query that initiated
     * the request.
     */
    source?: string | undefined;
}

/**
 * CustomCommand request data.
 * Note as of November 2019: Docs don't mention this extending RequestData.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.CustomCommandRequestData
 */
export class CustomCommandRequestData extends RequestData {
    /**
     * Custom data typically represented by a stringified JSON object.
     */
    data: string;

    /**
     * Optional request source. It contains the assistant query that initiated
     * the request.
     */
    source?: string | undefined;
}

/**
 * Cloud media status. Media status that is only sent to the cloud sender.
 * Note as of November 2019: This message's `type` parameter shows as
 * `MEDIA_STATUS`, not `CLOUD_STATUS`.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.CloudMediaStatus
 */
export class CloudMediaStatus extends MediaStatus {}

/**
 * Represents current status of break.
 *
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.BreakStatus
 */
export class BreakStatus {
    constructor(currentBreakTime?: number, currentBreakClipTime?: number);

    /**
     * Id of current break clip.
     */
    breakClipId?: string | undefined;

    /**
     * Id of current break.
     */
    breakId?: string | undefined;

    /**
     * Time in sec elapsed after current break clip starts.
     */
    currentBreakClipTime?: number | undefined;

    /**
     * Time in sec elapsed after current break starts.
     */
    currentBreakTime?: number | undefined;

    /**
     * The time in sec when this break clip becomes skippable.
     * 5 means that end user can skip this break clip after 5 seconds.
     * If this field is not defined; it means that current break clip is not skippable.
     */
    whenSkippable?: number | undefined;
}

/**
 * Represents break clip (e.g. a clip of ad during ad break)
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.BreakClip
 */
export class BreakClip {
    constructor(id: string);

    /**
     * Url of page that sender will display; when end user clicks link on sender UI; while receiver is playing this clip.
     */
    clickThroughUrl?: string | undefined;
    /**
     * Typically the url of the break media (playing on the receiver).
     */
    contentId?: string | undefined;
    /**
     * The content MIME type.
     */
    contentType?: string | undefined;
    /**
     * Optional break media url; to allow using contentId for real id.
     * If contentUrl is provided; it will be used as media url;
     * otherwise the contentId will be used as the media url.
     */
    contentUrl?: string | undefined;
    /**
     * Application-specific break clip data.
     */
    customData?: any;
    /**
     * Duration of break clip in sec.
     */
    duration?: number | undefined;
    /**
     * The format of the HLS media segment.
     */
    hlsSegmentFormat?: HlsSegmentFormat | undefined;
    /**
     * Unique id of break clip.
     */
    id: string;
    /**
     * Url of content that sender will display while receiver is playing this clip.
     */
    posterUrl?: string | undefined;
    /**
     * Title of break clip. Sender might display this on its screen; if provided.
     */
    title?: string | undefined;
    /**
     * VAST ad request configuration. Used if contentId or contentUrl is not provided.
     */
    vastAdsRequest?: VastAdsRequest | undefined;
    /**
     * The time in sec when this break clip becomes skippable.
     * 5 means that end user can skip this break clip after 5 seconds.
     * If this field is not defined; it means that current break clip is not skippable.
     */
    whenSkippable?: number | undefined;
}

/**
 * Represents break (e.g. ad break) included in main video.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.Break
 */
export class Break {
    constructor(id: string, breakClipIds: string[], position: number);
    /**
     * List of ids of break clip that this break includes.
     */
    breakClipIds: string[];
    /**
     * Duration of break in sec.
     */
    duration?: number | undefined;
    /**
     * Unique id of break.
     */
    id: string;
    /**
     * If true; indicates this is embedded break in main stream.
     */

    isEmbedded?: boolean | undefined;
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

/**
 * Content rating (parental rating, maturity rating).
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.ContentRating
 */
export class ContentRating {
    /**
     * Content Rating icon. If provided, it will be displayed along with "Playing Next" preview.
     */
    ratingIcon?: any;
}

/**
 * Represent User Action state for media.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.UserActionState
 */
export class UserActionState {
    constructor(userAction: UserAction);

    /**
     * Optional app specific data.
     */
    customData?: any;

    /**
     * The user action.
     */
    userAction: UserAction;
}

/**
 * An audiobook chapter description.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.AudiobookChapterMediaMetadata
 */
export class AudiobookChapterMediaMetadata {
    constructor();
    /**
     * Audiobook title.
     */
    bookTitle?: string | undefined;

    /**
     * Chapter number, used for display purposes.
     */
    chapterNumber?: number | undefined;

    /**
     * Chapter title.
     */
    chapterTitle?: string | undefined;

    /**
     * Content rating.
     */
    contentRating?: any;

    /**
     * Chapter or book cover art.
     */
    images?: Image[] | undefined;

    /**
     * Audiobook title, for backward compatibility.
     */
    subtitle?: string | undefined;

    /**
     * Chapter title, for backward compatibility.
     */
    title?: string | undefined;
}

/**
 * An audiobook container description.
 * @see https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages.AudiobookContainerMetadata
 */
export class AudiobookContainerMetadata {
    constructor();
    /**
     * Book authors.
     */
    authors?: string[] | undefined;

    /**
     * Book narrators.
     */
    narrators?: string[] | undefined;

    /**
     * Book publisher.
     */
    publisher?: string | undefined;

    /**
     * ISO 8601 date when the book was released; e.g. 2014-02-10.
     */
    releaseDate?: string | undefined;
}

/**
 * Tracks information.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.TracksInfo
 */
export class TracksInfo {
    /**
     * The track Ids that should be active.
     */
    activeTrackIds?: number[] | undefined;

    /**
     * Language for the tracks that should be active. The language field will
     * take precedence over activeTrackIds if both are specified.
     */
    language?: string | undefined;

    /**
     * The text track style.
     */
    textTrackStyle?: TextTrackStyle | undefined;

    /**
     * The tracks information.
     */
    tracks?: Track[] | undefined;
}
