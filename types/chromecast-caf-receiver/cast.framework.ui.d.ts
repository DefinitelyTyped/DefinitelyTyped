import { PlayerDataEventType } from "./cast.framework.ui";
import { MediaMetadata } from "./cast.framework.messages";

export as namespace ui
export type ContentType = "video" | "audio" | "image";

export type State =
    | "launching"
    | "idle"
    | "loading"
    | "buffering"
    | "paused"
    | "playing";

export type PlayerDataEventType =
    | "ANY_CHANGE"
    | "STATE_CHANGED"
    | "IS_SEEKING_CHANGED"
    | "DURATION_CHANGED"
    | "CURRENT_TIME_CHANGED"
    | "METADATA_CHANGED"
    | "TITLE_CHANGED"
    | "SUBTITLE_CHANGED"
    | "THUMBNAIL_URL_CHANGED"
    | "NEXT_TITLE_CHANGED"
    | "NEXT_SUBTITLE_CHANGED"
    | "NEXT_THUMBNAIL_URL_CHANGED"
    | "PRELOADING_NEXT_CHANGED"
    | "CONTENT_TYPE_CHANGED"
    | "IS_LIVE_CHANGED"
    | "BREAK_PERCENTAGE_POSITIONS_CHANGED"
    | "IS_PLAYING_BREAK_CHANGED"
    | "IS_BREAK_SKIPPABLE_CHANGED"
    | "WHEN_SKIPPABLE_CHANGED"
    | "NUMBER_BREAK_CLIPS_CHANGED"
    | "CURRENT_BREAK_CLIP_NUMBER_CHANGED"
    | "DISPLAY_STATUS_CHANGED";

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
    constructor(playerData: PlayerData);

    /**
     * Add listener to player data changes.
     */
    addEventListener: (
        type: PlayerDataEventType,
        listener: PlayerDataChangedEventHandler
    ) => void;

    /**
     * Remove listener to player data changes.
     */
    removeEventListener: (
        type: PlayerDataEventType,
        listener: PlayerDataChangedEventHandler
    ) => void;
}
/**
 * Player data. Provide the player media and break state.
 */
export interface PlayerData {
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
