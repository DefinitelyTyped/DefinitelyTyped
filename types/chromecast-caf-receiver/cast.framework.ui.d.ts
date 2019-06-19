import { MediaMetadata } from './cast.framework.messages';

export as namespace ui;
export type ContentType = 'video' | 'audio' | 'image';

export type State = 'launching' | 'idle' | 'loading' | 'buffering' | 'paused' | 'playing';

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
     * Array of breaks positions in percentage.
     */
    breakPercentagePositions: number[];

    /**
     * Content Type.
     */
    contentType: ContentType;

    /**
     * The number of the current playing break clip in the break.
     */
    currentBreakClipNumber: number;

    /**
     * Media current position in seconds; or break current position if playing break.
     */
    currentTime: number;

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
     * Media duration in seconds; Or break duration if playing break.
     */
    duration: number;

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
     * Media metadata.
     */
    metadata: MediaMetadata;

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
     * Flag to show/hide next item metadata.
     */
    preloadingNext: boolean;

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
