import {
    AudiobookChapterMediaMetadata,
    GenericMediaMetadata,
    Image,
    LiveSeekableRange,
    MediaCategory,
    MediaInformation,
    MediaMetadata,
    MovieMediaMetadata,
    MusicTrackMediaMetadata,
    PhotoMediaMetadata,
    QueueData,
    TvShowMediaMetadata,
} from "./cast.framework.messages";

export as namespace ui;
export type ContentType = "video" | "audio" | "image";

/**
 * UI state of receiver application.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.State
 */
export const State: {
    readonly LAUNCHING: "launching";
    readonly IDLE: "idle";
    readonly LOADING: "loading";
    readonly BUFFERING: "buffering";
    readonly PAUSED: "paused";
    readonly PLAYING: "playing";
};
/**
 * UI state of receiver application.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.State
 */
export type State = (typeof State)[keyof typeof State];

/**
 * Player data changed event types.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.PlayerDataEventType
 */
export const PlayerDataEventType: {
    readonly ACTIVE_TRACK_IDS_CHANGED: "activeTrackIdsChanged";
    readonly ANY_CHANGE: "*";
    readonly APPLICATION_DATA_CHANGED: "applicationDataChanged";
    readonly BREAK_PERCENTAGE_POSITIONS_CHANGED: "breakPercentagePositionsChanged";
    readonly BREAK_TITLE_CHANGED: "breakTitleChanged";
    readonly CONTENT_TYPE_CHANGED: "contentTypeChanged";
    readonly CURRENT_BREAK_CLIP_NUMBER_CHANGED: "currentBreakClipNumberChanged";
    readonly CURRENT_TIME_CHANGED: "currentTimeChanged";
    readonly CUSTOM_STATE_CHANGED: "customStateChanged";
    readonly DISPLAY_STATUS_CHANGED: "displayStatusChanged";
    readonly DISPLAY_TYPE_CHANGED: "displayTypeChanged";
    readonly DURATION_CHANGED: "durationChanged";
    readonly IS_AT_LIVE_EDGE_CHANGED: "isAtLiveEdgeChanged";
    readonly IS_BREAK_SKIPPABLE_CHANGED: "isBreakSkippableChanged";
    readonly IS_LIVE_CHANGED: "isLiveChanged";
    readonly IS_PLAYING_BREAK_CHANGED: "isPlayingBreakChanged";
    readonly IS_SEEKING_CHANGED: "isSeekingChanged";
    readonly LIVE_SEEKABLE_RANGE_CHANGED: "liveSeekableRangeChanged";
    readonly MEDIA_CATEGORY_CHANGED: "mediaCategoryChanged";
    readonly MEDIA_CHANGED: "mediaChanged";
    readonly MEDIA_SESSION_ID_CHANGED: "mediaSessionIdChanged";
    readonly MEDIA_START_ABSOLUTE_TIME_CHANGED: "mediaStartAbsoluteTimeChanged";
    readonly METADATA_CHANGED: "metadataChanged";
    readonly NEXT_SUBTITLE_CHANGED: "nextSubtitleChanged";
    readonly NEXT_THUMBNAIL_URL_CHANGED: "nextThumbnailUrlChanged";
    readonly NEXT_TITLE_CHANGED: "nextTitleChanged";
    readonly NUMBER_BREAK_CLIPS_CHANGED: "numberBreakClipsChanged";
    readonly PLAYBACK_RATE_CHANGED: "playbackRateChanged";
    readonly PRELOADING_NEXT_CHANGED: "preloadingNextChanged";
    readonly PRESENTATION_CHANGED: "presentationChanged";
    readonly QUEUE_DATA_CHANGED: "queueDataChanged";
    readonly SECTION_DURATION_CHANGED: "sectionDurationChanged";
    readonly SECTION_START_TIME_IN_MEDIA_CHANGED: "sectionStartTimeInMediaChanged";
    readonly STATE_CHANGED: "stateChanged";
    readonly SUBTITLE_CHANGED: "subtitleChanged";
    readonly SUPPORTED_MEDIA_COMMANDS_CHANGED: "supportedMediaCommandsChanged";
    readonly THUMBNAIL_URL_CHANGED: "thumbnailUrlChanged";
    readonly TITLE_CHANGED: "titleChanged";
    readonly WHEN_SKIPPABLE_CHANGED: "whenSkippableChanged";
};
/**
 * Player data changed event types.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.PlayerDataEventType
 */
export type PlayerDataEventType = (typeof PlayerDataEventType)[keyof typeof PlayerDataEventType];

/**
 * Data about running application or remote controlled application.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui.ApplicationData
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
     * Whether the application is running as a remote control to another playback receiver
     */
    isRemoteControl: boolean;

    /**
     * Application name.
     */
    name: string;
}

/**
 * Player data changed event. Provides the changed field (type), and new value.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui.PlayerDataChangedEvent
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
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui.PlayerDataBinder
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
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui.PlayerData
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
    applicationData?: ApplicationData | undefined;

    /**
     * Array of breaks positions in percentage.
     */
    breakPercentagePositions: number[];

    /**
     * Title of the current playing break
     */
    breakTitle: string;

    /**
     * The number of the current playing break clip in the break.
     */
    currentBreakClipNumber: number;

    /**
     * Media current position in seconds, or break current position if playing break.
     */
    currentTime: number;

    /**
     * User custom state, Should be used to separate playback and UI logic, to allow
     * same UI code to run in a remote control. The state can be set by calling
     * cast.framework.PlayerManager#sendCustomState
     */
    customState?: any;

    /**
     * Whether the player metadata (ie: title, currentTime) should be displayed.
     *  This will be true if at least one field in the metadata should be displayed.
     *  In some cases, displayStatus will be true, but parts of the metadata should be hidden
     * (ie: the media title while media is seeking).
     * In these cases, additional css can be applied to hide those elements.
     * For cases where the media is audio-only, this will almost always be true.
     * In cases where the media is video, this will be true when:
     *   (1) the video is loading, buffering, or seeking
     *   (2) a play request was made in the last five seconds while media is already playing
     *   (3) there is a request made to show the status in the last five seconds, or
     *   (4) the media was paused in the last five seconds.
     */
    displayStatus: boolean;

    /**
     * Property to differentiate between different screen types. TV is default.
     */
    displayType: string;

    /**
     * Media duration in seconds, or break duration if playing break.
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
    liveSeekableRange?: LiveSeekableRange | undefined;

    /**
     * Current media information.
     */
    media?: MediaInformation | undefined;

    /**
     * The media category (video, audio, or image).
     */
    mediaCategory?: MediaCategory | undefined;

    /**
     * Unique id for media session. It is updated when a new load request is received.
     */
    mediaSessionId: number;

    /**
     * Indicates absolute time (Epoch time in seconds) for live streams. For live event
     * it would be the time the event started, otherwise it will be start of the
     * seekable range when the streaming started.
     */
    mediaStartAbsoluteTime?: number | undefined;

    /**
     * Media metadata.
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

    /**
     * Next item metadata.
     */
    nextMetadata?:
        | MediaMetadata
        | GenericMediaMetadata
        | MovieMediaMetadata
        | MusicTrackMediaMetadata
        | PhotoMediaMetadata
        | TvShowMediaMetadata
        | AudiobookChapterMediaMetadata
        | object
        | undefined;

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
    queueData?: QueueData | undefined;

    /**
     * Indicate the section duration in seconds.
     */
    sectionDuration?: number | undefined;

    /**
     * Indicate the section start time, in media time in seconds.
     */
    sectionStartTimeInMedia?: number | undefined;

    /**
     * Current player state.
     */
    state: State;

    /**
     * The commands supported by this player
     * @see {@link messages.Command}
     */
    supportedMediaCommands: number;

    /**
     * Content thumbnail url.
     */
    thumbnailUrl: string;

    /**
     * Content title.
     */
    title: string;

    /**
     * Provide the time a break is skipable - relative to current playback time.
     * Undefined if not skippable.
     */
    whenSkippable?: number | undefined;
}

/**
 * Touch Controls. Provides interface for configuring controls on
 * touch-enabled devices.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui.Controls
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
    setBrowseContent(browseContent: BrowseContent | null): void;
}

/**
 * Content for the media browse carousel. This content should be used for both
 * media browse UI on IDLE screen and related content screen during playback.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui.BrowseContent
 */
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
    targetAspectRatio?: BrowseImageAspectRatio | undefined;

    /**
     * Title of the list.
     */
    title?: string | undefined;
}

/**
 * Content for the individual browse item in the media browse list.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui.BrowseItem
 */
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
    duration?: number | undefined;

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
    image?: Image | undefined;

    /**
     * Type of placeholder that will be used if image is not available for the
     * browse item.
     */
    imageType?: BrowseImageType | undefined;

    /**
     * Additional badge to be displayed over the browse item image.
     */
    mediaBadge?: BrowseMediaBadge | undefined;

    /**
     * Secondary text of the element. Both title and subtitle can be provided,
     * but at least one of them is required.
     */
    subtitle?: string | undefined;

    /**
     * Main text of the browse item.
     */
    title?: string | undefined;
}

/**
 * UI Configuration.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui.UiConfig
 */
export class UiConfig {
    constructor();

    /**
     * If this is true, SDK will be notified that Application has touch-optimized
     * layout, so that SDK will not render opaque full-screen blocking overlay.
     */
    touchScreenOptimizedApp?: boolean | undefined;
}

/**
 * Aspect ratio of all images in the media browse carousel.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.BrowseImageAspectRatio
 */
export const BrowseImageAspectRatio: {
    /**
     * Square images.
     */
    readonly SQUARE_1_TO_1: "SQUARE_1_TO_1";

    /**
     * Portrait orientation images with 2:3 aspect ratio. UI
     * for portrait orientation is not final and is a subject
     * to change.
     */
    readonly PORTRAIT_2_TO_3: "PORTRAIT_2_TO_3";

    /**
     * Landscape orientation images with 16:9 aspect ratio.
     */
    readonly LANDSCAPE_16_TO_9: "LANDSCAPE_16_TO_9";
};
/**
 * Aspect ratio of all images in the media browse carousel.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.BrowseImageAspectRatio
 */
export type BrowseImageAspectRatio = (typeof BrowseImageAspectRatio)[keyof typeof BrowseImageAspectRatio];

/**
 * Type of placeholder that will be used if image is not
 * available for the browse item.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.BrowseImageType
 */
export const BrowseImageType: {
    /**
     * A playlist that consists of songs by a specific
     * music artist or band, or radio seeded by an artist
     * or band.
     */
    readonly ARTIST: "ARTIST";

    /**
     * An audio book.
     */
    readonly AUDIO_BOOK: "AUDIO_BOOK";

    /**
     * Episode of a TV show.
     */
    readonly EPISODE: "EPISODE";

    /**
     * A movie.
     */
    readonly MOVIE: "MOVIE";

    /**
     * A playlist that consists of songs from a specific
     * music album or radio seeded by album.
     */
    readonly MUSIC_ALBUM: "MUSIC_ALBUM";

    /**
     * A music genre.
     */
    readonly MUSIC_GENRE: "MUSIC_GENRE";

    /**
     * A music mix seeded by genre.
     */
    readonly MUSIC_MIX: "MUSIC_MIX";

    /**
     * A song track or radio seeded by the track.
     */
    readonly MUSIC_TRACK: "MUSIC_TRACK";

    /**
     * News audio or video.
     */
    readonly NEWS: "NEWS";

    /**
     * An image.
     */
    readonly PHOTO: "PHOTO";

    /**
     * A playlist publicly available or radio seeded by playlist.
     * Playlists always contain a finite and defined set of songs.
     */
    readonly PLAYLIST: "PLAYLIST";

    /**
     * A podcast series.
     */
    readonly PODCAST: "PODCAST";

    /**
     * A radio station. This could be a terrestrial or an internet
     * radio station.
     */
    readonly RADIO_STATION: "RADIO_STATION";

    /**
     * A TV show.
     */
    readonly TV_SHOW: "TV_SHOW";

    /**
     * A single video.
     */
    readonly VIDEO: "VIDEO";
};
/**
 * Type of placeholder that will be used if image is not
 * available for the browse item.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.BrowseImageType
 */
export type BrowseImageType = (typeof BrowseImageType)[keyof typeof BrowseImageType];

/**
 * Badge that will be displayed on top of the browse item image.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.BrowseMediaBadge
 */
export const BrowseMediaBadge: {
    /**
     * LIVE indicator badge. Should be used if stream is a live
     * content.
     */
    readonly LIVE: "LIVE";
};
/**
 * Badge that will be displayed on top of the browse item image.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.BrowseMediaBadge
 */
export type BrowseMediaBadge = (typeof BrowseMediaBadge)[keyof typeof BrowseMediaBadge];

/**
 * Predefined buttons for the Media Controls overlay
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.ControlsButton
 */
export const ControlsButton: {
    /**
     * Turn on/off closed captions.
     */
    readonly CAPTIONS: "captions";

    /**
     * Dislike butoon.
     */
    readonly DISLIKE: "dislike";

    /**
     * Like button.
     */
    readonly LIKE: "like";

    /**
     * Clear slot from any buttons.
     */
    readonly NO_BUTTON: "no-button";

    /**
     * Go to the next item in queue.
     */
    readonly QUEUE_NEXT: "queue-next";

    /**
     * Go to the previous item in queue.
     */
    readonly QUEUE_PREV: "queue-prev";

    /**
     * Toggle repeat mode.
     */
    readonly REPEAT: "repeat";

    /**
     * Seek 10 seconds backward.
     */
    readonly SEEK_BACKWARD_10: "seek-backward-10";

    /**
     * Seek 15 seconds backward.
     */
    readonly SEEK_BACKWARD_15: "seek-backward-15";

    /**
     * Seek 30 seconds backward.
     */
    readonly SEEK_BACKWARD_30: "seek-backward-30";

    /**
     * Seek 10 seconds forward.
     */
    readonly SEEK_FORWARD_10: "seek-forward-10";

    /**
     * Seek 15 seconds forward.
     */
    readonly SEEK_FORWARD_15: "seek-forward-15";

    /**
     * Seek 30 seconds forward.
     */
    readonly SEEK_FORWARD_30: "seek-forward-30";

    /**
     * Toggle shuffle mode.
     */
    readonly SHUFFLE: "shuffle";

    /**
     * Undocumented
     */
    readonly SLEEP_TIMER: "sleep-timer";
};
/**
 * Predefined buttons for the Media Controls overlay
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.ControlsButton
 */
export type ControlsButton = (typeof ControlsButton)[keyof typeof ControlsButton];

/**
 * Touch Controls interface.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.ControlsSlot
 */
export const ControlsSlot: {
    /**
     * Side left slot. Deprecated, use SLOT_SECONDARY_1 instead.
     *
     * @deprecated
     */
    readonly SLOT_1: "slot-1";

    /**
     * Center left slot. Deprecated, use SLOT_PRIMARY_1 instead.
     *
     * @deprecated
     */
    readonly SLOT_2: "slot-2";

    /**
     * Center right slot. Deprecated, use SLOT_PRIMARY_2 instead.
     *
     * @deprecated
     */
    readonly SLOT_3: "slot-3";

    /**
     * Side right slot. Deprecated, use SLOT_SECONDARY_2 instead.
     *
     * @deprecated
     */
    readonly SLOT_4: "slot-4";

    /**
     * Center left slot. Placed to the left of the play/pause button.
     */
    readonly SLOT_PRIMARY_1: "slot-primary-1";

    /**
     * Center right slot. Placed to the right of the play/pause button.
     */
    readonly SLOT_PRIMARY_2: "slot-primary-2";

    /**
     * Side left slot. Aligned to the left edge of the screen.
     */
    readonly SLOT_SECONDARY_1: "slot-secondary-1";

    /**
     * Side right slot. Aligned to the right edge of the screen.
     */
    readonly SLOT_SECONDARY_2: "slot-secondary-2";
};
/**
 * Touch Controls interface.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.ControlsSlot
 */
export type ControlsSlot = (typeof ControlsSlot)[keyof typeof ControlsSlot];

/**
 * Device display type.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.DisplayType
 */
export const DisplayType: {
    readonly TV: "tv";
    readonly TOUCH: "touch";
};
/**
 * Device display type.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.ui#.DisplayType
 */
export type DisplayType = (typeof DisplayType)[keyof typeof DisplayType];
