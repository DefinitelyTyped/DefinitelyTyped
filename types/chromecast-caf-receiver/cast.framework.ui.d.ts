import {
    MediaMetadata,
    LiveSeekableRange,
    MediaInformation,
    MediaCategory,
    QueueData,
    Image,
} from './cast.framework.messages';
import { CastReceiverContext } from './cast.framework';

export as namespace ui;
export type ContentType = 'video' | 'audio' | 'image';

/**
 * UI state of receiver application.
 */
export enum State {
    LAUNCHING = 'launching',
    IDLE = 'idle',
    LOADING = 'loading',
    BUFFERING = 'buffering',
    PAUSED = 'paused',
    PLAYING = 'playing',
}

export enum PlayerDataEventType {
    ACTIVE_TRACK_IDS_CHANGED = 'activeTrackIdsChanged',
    ANY_CHANGE = '*',
    APPLICATION_DATA_CHANGED = 'applicationDataChanged',
    BREAK_PERCENTAGE_POSITIONS_CHANGED = 'breakPercentagePositionsChanged',
    BREAK_TITLE_CHANGED = 'breakTitleChanged',
    CONTENT_TYPE_CHANGED = 'contentTypeChanged',
    CURRENT_BREAK_CLIP_NUMBER_CHANGED = 'currentBreakClipNumberChanged',
    CURRENT_TIME_CHANGED = 'currentTimeChanged',
    CUSTOM_STATE_CHANGED = 'customStateChanged',
    DISPLAY_STATUS_CHANGED = 'displayStatusChanged',
    DISPLAY_TYPE_CHANGED = 'displayTypeChanged',
    DURATION_CHANGED = 'durationChanged',
    IS_AT_LIVE_EDGE_CHANGED = 'isAtLiveEdgeChanged',
    IS_BREAK_SKIPPABLE_CHANGED = 'isBreakSkippableChanged',
    IS_LIVE_CHANGED = 'isLiveChanged',
    IS_PLAYING_BREAK_CHANGED = 'isPlayingBreakChanged',
    IS_SEEKING_CHANGED = 'isSeekingChanged',
    LIVE_SEEKABLE_RANGE_CHANGED = 'liveSeekableRangeChanged',
    MEDIA_CATEGORY_CHANGED = 'mediaCategoryChanged',
    MEDIA_CHANGED = 'mediaChanged',
    MEDIA_SESSION_ID_CHANGED = 'mediaSessionIdChanged',
    MEDIA_START_ABSOLUTE_TIME_CHANGED = 'mediaStartAbsoluteTimeChanged',
    METADATA_CHANGED = 'metadataChanged',
    NEXT_SUBTITLE_CHANGED = 'nextSubtitleChanged',
    NEXT_THUMBNAIL_URL_CHANGED = 'nextThumbnailUrlChanged',
    NEXT_TITLE_CHANGED = 'nextTitleChanged',
    NUMBER_BREAK_CLIPS_CHANGED = 'numberBreakClipsChanged',
    PLAYBACK_RATE_CHANGED = 'playbackRateChanged',
    PRELOADING_NEXT_CHANGED = 'preloadingNextChanged',
    PRESENTATION_CHANGED = 'presentationChanged',
    QUEUE_DATA_CHANGED = 'queueDataChanged',
    SECTION_DURATION_CHANGED = 'sectionDurationChanged',
    SECTION_START_TIME_IN_MEDIA_CHANGED = 'sectionStartTimeInMediaChanged',
    STATE_CHANGED = 'stateChanged',
    SUBTITLE_CHANGED = 'subtitleChanged',
    SUPPORTED_MEDIA_COMMANDS_CHANGED = 'supportedMediaCommandsChanged',
    THUMBNAIL_URL_CHANGED = 'thumbnailUrlChanged',
    TITLE_CHANGED = 'titleChanged',
    WHEN_SKIPPABLE_CHANGED = 'whenSkippableChanged',
}

/**
 * Data about running application or remote controlled application.
 */
export class ApplicationData {
    constructor(name: string, iconUrl: string, groupName?: string, isRemoteControl?: boolean);

    /**
     * Name of audio group for running app.
     */
    groupName: string;

    /**
     * Application icon URL
     */
    iconUrl: string;

    /**
     * Whether the application is running as a remote control to another playback receiver;
     */
    isRemoteControl: boolean;

    /**
     * Application name.
     */
    name: string;
}

/**
 * Player data changed event. Provides the changed field (type); and new value.
 */
export class PlayerDataChangedEvent {
    constructor(type: PlayerDataEventType, field: string, value: any);

    /**
     * The field name that was changed.
     */
    field: string;

    type: PlayerDataEventType;

    /**
     * The new field value.
     */
    value: any;
}
/**
 * Player data binder. Bind a player data object to the player state.
 * The player data will be updated to reflect correctly the current player state without firing any change event.
 */
export class PlayerDataBinder {
    constructor(playerData: object | PlayerData);

    /**
     * Add listener to player data changes.
     */
    addEventListener: (type: PlayerDataEventType, listener: PlayerDataChangedEventHandler) => void;

    /**
     * Remove listener to player data changes.
     */
    removeEventListener: (type: PlayerDataEventType, listener: PlayerDataChangedEventHandler) => void;
}
/**
 * Player data. Provide the player media and break state.
 */
export class PlayerData {
    constructor();

    /**
     * Active track ids of current media.
     */
    activeTrackIds: number[];

    /**
     * Application data.
     */
    applicationData?: ApplicationData;

    /**
     * Array of breaks positions in percentage.
     */
    breakPercentagePositions: number[];

    /**
     * Title of the current playing break;
     */
    breakTitle: string;

    /**
     * The number of the current playing break clip in the break.
     */
    currentBreakClipNumber: number;

    /**
     * Media current position in seconds; or break current position if playing break.
     */
    currentTime: number;

    /**
     * User custom state, Should be used to separate playback and UI logic, to allow
     * same UI code to run in a remote control. The state can be set by calling
     * cast.framework.PlayerManager#sendCustomState
     */
    customState?: object;

    /**
     * Whether the player metadata (ie: title; currentTime) should be displayed.
     *  This will be true if at least one field in the metadata should be displayed.
     *  In some cases; displayStatus will be true; but parts of the metadata should be hidden
     * (ie: the media title while media is seeking).
     * In these cases; additional css can be applied to hide those elements.
     * For cases where the media is audio-only; this will almost always be true.
     * In cases where the media is video; this will be true when:
     *   (1) the video is loading; buffering; or seeking
     *   (2) a play request was made in the last five seconds while media is already playing;
     *   (3) there is a request made to show the status in the last five seconds; or
     *   (4) the media was paused in the last five seconds.
     */
    displayStatus: boolean;

    /**
     * Property to differentiate between different screen types. TV is default.
     */
    displayType: string;

    /**
     * Media duration in seconds; Or break duration if playing break.
     */
    duration: number;

    /**
     * Indicate if the media stream is playing at live edge.
     */
    isAtLiveEdge: boolean;

    /**
     * Indicate break clip can be skipped.
     */
    isBreakSkippable: boolean;

    /**
     * Indicate if the content is a live stream.
     */
    isLive: boolean;

    /**
     * Indicate that the receiver is playing a break.
     */
    isPlayingBreak: boolean;

    /**
     * Indicate the player is seeking (can be either during playing or pausing).
     */
    isSeeking: boolean;

    /**
     * Indicate the seekable range of the content if it is a live stream.
     */
    liveSeekableRange?: LiveSeekableRange;

    /**
     * Current media information.
     */
    media?: MediaInformation;

    /**
     * The media category (video, audio, or image).
     */
    mediaCategory?: MediaCategory;

    /**
     * Unique id for media session. It is updated when a new load request is received.
     */
    mediaSessionId: number;

    /**
     * Indicates absolute time (Epoch time in seconds) for live streams. For live event
     * it would be the time the event started, otherwise it will be start of the
     * seekable range when the streaming started.
     */
    mediaStartAbsoluteTime?: number;

    /**
     * Media metadata.
     */
    metadata?: MediaMetadata | object;

    /**
     * Next Item subtitle.
     */
    nextSubtitle: string;

    /**
     * Next Item thumbnail url.
     */
    nextThumbnailUrl: string;

    /**
     * Next Item title.
     */
    nextTitle: string;

    /**
     * Number of break clips in current break.
     */
    numberBreakClips: number;

    /**
     * Media playback rate.
     */
    playbackRate: number;

    /**
     * Flag to show/hide next item metadata.
     */
    preloadingNext: boolean;

    /**
     * Queue data.
     */
    queueData?: QueueData;

    /**
     * Indicate the section duration in seconds.
     */
    sectionDuration?: number;

    /**
     * Indicate the section start time, in media time in seconds.
     */
    sectionStartTimeInMedia?: number;

    /**
     * Current player state.
     */
    state: State;

    /**
     * Content thumbnail url.
     */
    thumbnailUrl: string;

    /**
     * Content title.
     */
    title: string;

    /**
     * Provide the time a break is skipable - relative to current playback time. Undefined if not skippable.
     */
    whenSkippable?: number;
}

/**
 * Touch Controls. Provides interface for configuring controls on
 * touch-enabled devices.
 */
export class Controls {
    static getInstance(): Controls;

    /**
     * Displays button in the specified slot.
     *
     * Throws `non-null Error` if slot or button name is incorrect.
     *
     * @param slot
     * @param button
     */
    assignButton(slot: ControlsSlot, button: ControlsButton): void;

    /**
     * Remove all buttons assigned by default from slots.
     */
    clearDefaultSlotAssignments(): void;

    /**
     * For audio applications only. Returns height in pixels of
     * the area above the controls where application can render
     * content without being overlapped by Cast SDK UI elements.
     * CSS variable `--cast-controls-safe-area-height` can be
     * used instead of this method.
     *
     * @returns height of safe area in px.
     */
    getSafeAreaHeight(): number;

    /**
     * Set Media Browse content for users to discover more
     * contents from your receiver.
     *
     * @param browseContent
     */
    setBrowseContent(browseContent?: BrowseContent): void;
}

export class BrowseContent {
    /**
     * @param browseItems Array of non-null cast.framework.ui.BrowseItem
     * List of browse items. Maximum items count is 30. Excess items will
     * be truncated. Value must not be null
     * @param title Title of the list
     */
    constructor(browseItems: BrowseItem[], title?: string);

    /**
     * List of browse items. Maximum items count is 30. Excess items will
     * be truncated.
     */
    items: BrowseItem[];

    /**
     * Aspect ratio of all images in the media browse carousel. It's highly
     * recommended to have browse item image provided in
     * BrowseContentItem#image matching targetAspectRatio value. If image
     * is too narrow/tall, it will be pillarboxed. If image is too wide/short,
     * it will be letterboxed.
     */
    targetAspectRation?: BrowseImageAspectRatio;

    /**
     * Title of the list.
     */
    title?: string;
}

export class BrowseItem {
    /**
     * @param entity Content entity information.
     * @param title Main text of the browse item.
     * @param subtitle Secondary text of the element. Both title and subtitle
     * can be provided, but at least one of them is required.
     * @param image Image displayed for browse item. Value must not be null.
     */
    constructor(entity: string, title?: string, subtitle?: string, image?: Image);

    /**
     * Content duration in seconds. If provided, duration indicator will be
     * displayed over media browse item image. For example, if duration = 150,
     * label will be 2:30. If duration is 0, no label will be displayed.
     */
    duration?: number;

    /**
     * Content entity information.
     */
    entity: string;

    /**
     * Image displayed for browse item. It's highly recommended to have image
     * aspect ratio matching BrowseContent#targetAspectRatio value. If image
     * is too narrow/tall, it will be pillarboxed. If image is too wide/short,
     * it will be letterboxed.
     */
    image?: Image;

    /**
     * Type of placeholder that will be used if image is not available for the
     * browse item.
     */
    imageType?: BrowseImageType;

    /**
     * Additional badge to be displayed over the browse item image.
     */
    mediaBadge?: BrowseMediaBadge;

    /**
     * Secondary text of the element. Both title and subtitle can be provided,
     * but at least one of them is required.
     */
    subtitle?: string;

    /**
     * Main text of the browse item.
     */
    title?: string;
}

/**
 * Aspect ratio of all images in the media browse carousel.
 */
export enum BrowseImageAspectRatio {
    /**
     * Square images.
     */
    SQUARE_1_TO_1 = 'SQUARE_1_TO_1',

    /**
     * Portrait orientation images with 2:3 aspect ratio. UI
     * for portrait orientation is not final and is a subject
     * to change.
     */
    PORTRAIT_2_TO_3 = 'PORTRAIT_2_TO_3',

    /**
     * Landscape orientation images with 16:9 aspect ratio.
     */
    LANDSCAPE_16_TO_9 = 'LANDSCAPE_16_TO_9',
}

/**
 * Type of placeholder that will be used if image is not
 * available for the browse item.
 */
export enum BrowseImageType {
    /**
     * A playlist that consists of songs by a specific
     * music artist or band, or radio seeded by an artist
     * or band.
     */
    ARTIST = 'ARTIST',

    /**
     * An audio book.
     */
    AUDIO_BOOK = 'AUDIO_BOOK',

    /**
     * Episode of a TV show.
     */
    EPISODE = 'EPISODE',

    /**
     * A movie.
     */
    MOVIE = 'MOVIE',

    /**
     * A playlist that consists of songs from a specific
     * music album or radio seeded by album.
     */
    MUSIC_ALBUM = 'MUSIC_ALBUM',

    /**
     * A music genre.
     */
    MUSIC_GENRE = 'MUSIC_GENRE',

    /**
     * A music mix seeded by genre.
     */
    MUSIC_MIX = 'MUSIC_MIX',

    /**
     * A song track or radio seeded by the track.
     */
    MUSIC_TRACK = 'MUSIC_TRACK',

    /**
     * News audio or video.
     */
    NEWS = 'NEWS',

    /**
     * An image.
     */
    PHOTO = 'PHOTO',

    /**
     * A playlist publicly available or radio seeded by playlist.
     * Playlists always contain a finite and defined set of songs.
     */
    PLAYLIST = 'PLAYLIST',

    /**
     * A podcast series.
     */
    PODCAST = 'PODCAST',

    /**
     * A radio station. This could be a terrestrial or an internet
     * radio station.
     */
    RADIO_STATION = 'RADIO_STATION',

    /**
     * A TV show.
     */
    TV_SHOW = 'TV_SHOW',

    /**
     * A single video.
     */
    VIDEO = 'VIDEO',
}

/**
 * Badge that will be displayed on top of the browse item image.
 */
export enum BrowseMediaBadge {
    /**
     * LIVE indicator badge. Should be used if stream is a live
     * content.
     */
    LIVE = 'LIVE',
}

/**
 * Predefined buttons for the Media Controls overlay
 */
export enum ControlsButton {
    /**
     * Turn on/off closed captions.
     */
    CAPTIONS = 'captions',

    /**
     * Dislike butoon.
     */
    DISLIKE = 'dislike',

    /**
     * Like button.
     */
    LIKE = 'like',

    /**
     * Clear slot from any buttons.
     */
    NO_BUTTON = 'no-button',

    /**
     * Go to the next item in queue.
     */
    QUEUE_NEXT = 'queue-next',

    /**
     * Go to the previous item in queue.
     */
    QUEUE_PREV = 'queue-prev',

    /**
     * Toggle repeat mode.
     */
    REPEAT = 'repeat',

    /**
     * Seek 10 seconds backward.
     */
    SEEK_BACKWARD_10 = 'seek-backward-10',

    /**
     * Seek 15 seconds backward.
     */
    SEEK_BACKWARD_15 = 'seek-backward-15',

    /**
     * Seek 30 seconds backward.
     */
    SEEK_BACKWARD_30 = 'seek-backward-30',

    /**
     * Seek 10 seconds forward.
     */
    SEEK_FORWARD_10 = 'seek-forward-10',

    /**
     * Seek 15 seconds forward.
     */
    SEEK_FORWARD_15 = 'seek-forward-15',

    /**
     * Seek 30 seconds forward.
     */
    SEEK_FORWARD_30 = 'seek-forward-30',

    /**
     * Toggle shuffle mode.
     */
    SHUFFLE = 'shuffle',

    /**
     * Undocumented
     */
    SLEEP_TIMER = 'sleep-timer',
}

export enum ControlsSlot {
    /**
     * Side left slot. Deprecated, use SLOT_SECONDARY_1 instead.
     *
     * @deprecated
     */
    SLOT_1 = 'slot-1',

    /**
     * Center left slot. Deprecated, use SLOT_PRIMARY_1 instead.
     *
     * @deprecated
     */
    SLOT_2 = 'slot-2',

    /**
     * Center right slot. Deprecated, use SLOT_PRIMARY_2 instead.
     *
     * @deprecated
     */
    SLOT_3 = 'slot-3',

    /**
     * Side right slot. Deprecated, use SLOT_SECONDARY_2 instead.
     *
     * @deprecated
     */
    SLOT_4 = 'slot-4',

    /**
     * Center left slot. Placed to the left of the play/pause button.
     */
    SLOT_PRIMARY_1 = 'slot-primary-1',

    /**
     * Center right slot. Placed to the right of the play/pause button.
     */
    SLOT_PRIMARY_2 = 'slot-primary-2',

    /**
     * Side left slot. Aligned to the left edge of the screen.
     */
    SLOT_SECONDARY_1 = 'slot-secondary-1',

    /**
     * Side right slot. Aligned to the right edge of the screen.
     */
    SLOT_SECONDARY_2 = 'slot-secondary-2',
}
