import * as breaks from './cast.framework.breaks';
import * as events from './cast.framework.events';
import * as messages from './cast.framework.messages';
import * as system from './cast.framework.system';
import * as ui from './cast.framework.ui';

export import breaks = breaks;
export import events = events;
export import ui = ui;
export import system = system;
export import messages = messages;

export type HTMLMediaElement = any;
export as namespace framework;
export enum LoggerLevel {
    DEBUG = 0,
    VERBOSE = 500,
    INFO = 800,
    WARNING = 900,
    ERROR = 1000,
    NONE = 1500
}

export enum ContentProtection {
    NONE = 'none',
    CLEARKEY = 'clearkey',
    PLAYREADY = 'playready',
    WIDEVINE = 'widevine',
    AES_128 = 'aes_128',
    AES_128_CKP = 'aes_128_ckp',
}

/**
 * Manages text tracks.
 */
export class TextTracksManager {
    constructor(params?: any);

    /**
     * Adds text tracks to the list.
     */
    addTracks(tracks: messages.Track[]): void;

    /**
     * Creates a text track.
     */
    createTrack(): messages.Track;

    /**
     * Gets all active text ids.
     */
    getActiveIds(): number[];

    /**
     * Gets all active text tracks.
     */
    getActiveTracks(): messages.Track[];

    /**
     * Returns the current text track style.
     */
    getTextTracksStyle(): messages.TextTrackStyle;

    /**
     * Gets text track by id.
     */
    getTrackById(id: number): messages.Track;

    /**
     * Returns all text tracks.
     */
    getTracks(): messages.Track[];

    /**
     * Gets text tracks by language.
     */
    getTracksByLanguage(language: string): messages.Track[];

    /**
     * Sets text tracks to be active by id.
     */
    setActiveByIds(newIds: number[]): void;

    /**
     * Sets text tracks to be active by language.
     */
    setActiveByLanguage(language: string): void;

    /**
     * Sets text track style.
     */
    setTextTrackStyle(style: messages.TextTrackStyle): void;
}

/**
 * QueueManager exposes several queue manipulation APIs to developers.
 */
export class QueueManager {
    constructor(params?: any);

    /**
     * Returns the current queue item.
     */
    getCurrentItem(): messages.QueueItem;

    /**
     * Returns the index of the current queue item.
     */
    getCurrentItemIndex(): number;

    /**
     * Returns the queue items.
     */
    getItems(): messages.QueueItem[];

    /**
     * Inserts items into the queue.
     */
    insertItems(items: messages.QueueItem[], insertBefore?: number): void;

    /**
     * Removes items from the queue.
     */
    removeItems(itemIds: number[]): void;

    /**
     * Sets whether to limit the number of queue items to be reported in Media Status (default is true).
     */
    setQueueStatusLimit(limitQueueItemsInStatus: boolean): void;

    /**
     * Updates existing queue items by matching itemId.
     */
    updateItems(items: messages.QueueItem[]): void;
}

/**
 * Base implementation of a queue.
 */
export class QueueBase {
    /**
     * Fetches a window of items using the specified item id as reference; called by the receiver MediaManager when it needs more queue items;
     *  often as a request from senders. If only one of nextCount and prevCount is non-zero; fetchItems should only return items after or before
     *  the reference item; if both nextCount and prevCount are non-zero; a window of items including the reference item should be returned.
     */
    fetchItems(
        itemId: number,
        nextCount: number,
        prevCount: number,
    ): messages.QueueItem[] | Promise<messages.QueueItem[]>;

    /**
     * Initializes the queue with the requestData. This is called when a new LOAD request comes in to the receiver.
     * If this returns or resolves to null; our default queueing implementation will create a queue based on queueData.items or the single media
     *  in the load request data.
     */
    initialize(requestData: messages.LoadRequestData): messages.QueueData | Promise<messages.QueueData>;

    /**
     * Returns next items after the reference item; often the end of the current queue; called by the receiver MediaManager.
     */
    nextItems(itemId?: number): messages.QueueItem[] | Promise<messages.QueueItem[]>;

    /**
     * Sets the current item with the itemId; called by the receiver MediaManager when it changes the current playing item.
     */
    onCurrentItemIdChanged(itemId: number): void;

    /**
     * A callback for informing the following items have been inserted into the receiver queue in this session.
     *  A cloud based implementation can optionally choose to update its queue based on the new information.
     */
    onItemsInserted(items: messages.QueueItem[], insertBefore?: number): void;

    /**
     * A callback for informing the following items have been removed from the receiver queue in this session.
     * A cloud based implementation can optionally choose to update its queue based on the new information.
     */
    onItemsRemoved(itemIds: number[]): void;

    /**
     * Returns previous items before the reference item; often at the beginning of the queue; called by the receiver MediaManager.
     */
    prevItems(itemId?: number): messages.QueueItem[] | Promise<messages.QueueItem[]>;

    /**
     * Shuffles the queue and returns new queue items. Returns null if the operation is not supported.
     */
    shuffle(): messages.QueueItem[] | Promise<messages.QueueItem[]>;
}

/**
 * Controls and monitors media playback.
 */
export class PlayerManager {
    constructor(params?: any);

    /**
     * Adds an event listener for events proxied from the @see{@link events.MediaElementEvent}.
     * See {@link https://dev.w3.org/html5/spec-preview/media-elements.html#mediaevents} for more information.
     */
    addEventListener(
        eventType:
            | events.EventType.ABORT
            | events.EventType.ABORT[]
            | events.EventType.CAN_PLAY
            | events.EventType.CAN_PLAY[]
            | events.EventType.CAN_PLAY_THROUGH
            | events.EventType.CAN_PLAY_THROUGH[]
            | events.EventType.DURATION_CHANGE
            | events.EventType.DURATION_CHANGE[]
            | events.EventType.EMPTIED
            | events.EventType.EMPTIED[]
            | events.EventType.ENDED
            | events.EventType.ENDED[]
            | events.EventType.LOADED_DATA
            | events.EventType.LOADED_DATA[]
            | events.EventType.LOADED_METADATA
            | events.EventType.LOADED_METADATA[]
            | events.EventType.LOAD_START
            | events.EventType.LOAD_START[]
            | events.EventType.PLAY
            | events.EventType.PLAY[]
            | events.EventType.PLAYING
            | events.EventType.PLAYING[]
            | events.EventType.PROGRESS
            | events.EventType.PROGRESS[]
            | events.EventType.RATE_CHANGE
            | events.EventType.RATE_CHANGE[]
            | events.EventType.SEEKED
            | events.EventType.SEEKED[]
            | events.EventType.SEEKING
            | events.EventType.SEEKING[]
            | events.EventType.STALLED
            | events.EventType.STALLED[]
            | events.EventType.TIME_UPDATE
            | events.EventType.TIME_UPDATE[]
            | events.EventType.SUSPEND
            | events.EventType.SUSPEND[]
            | events.EventType.WAITING
            | events.EventType.WAITING[],
        eventListener: MediaElementEventHandler,
    ): void;

    /**
     * Adds an event listener for the pause player event. Fired when playback is paused. This event is forwarded from the MediaElement.
     */
    addEventListener(
        eventType: events.EventType.PAUSE | events.EventType.PAUSE[],
        eventListener: PauseEventHandler,
    ): void;

    /**
     * Adds an event listener for the bitrate changed player event.
     * Fired when the bitrate of the playing media changes
     * (such as when an active track is changed,
     * or when a different bitrate is chosen in response to network conditions).
     */
    addEventListener(
        eventType: events.EventType.BITRATE_CHANGED | events.EventType.BITRATE_CHANGED[],
        eventListener: BitrateChangedEventHandler,
    ): void;

    /**
     * Adds an event listener for events related to breaks.
     */
    addEventListener(
        eventType:
            | events.EventType.BREAK_STARTED
            | events.EventType.BREAK_STARTED[]
            | events.EventType.BREAK_ENDED
            | events.EventType.BREAK_ENDED[]
            | events.EventType.BREAK_CLIP_LOADING
            | events.EventType.BREAK_CLIP_LOADING[]
            | events.EventType.BREAK_CLIP_STARTED
            | events.EventType.BREAK_CLIP_STARTED[]
            | events.EventType.BREAK_CLIP_ENDED
            | events.EventType.BREAK_CLIP_ENDED[],
        eventListener: BreaksEventHandler,
    ): void;

    /**
     * Adds an event listener for the buffering player event. Fired when playback has either stopped due to buffering, or started again after buffering has finished.
     */
    addEventListener(
        eventType: events.EventType.BUFFERING | events.EventType.BUFFERING[],
        eventListener: BufferingEventHandler,
    ): void;

    /**
     * Adds an event listener for the cache loaded player event. Fired when content pre-cached by fastplay has finished loading.
     */
    addEventListener(
        eventType: events.EventType.CACHE_LOADED | events.EventType.CACHE_LOADED[],
        eventListener: CacheLoadedEventHandler,
    ): void;

    /**
     * Adds an event listener for the cache hit and cache inserted player events.
     */
    addEventListener(
        eventType:
            | events.EventType.CACHE_HIT
            | events.EventType.CACHE_HIT[]
            | events.EventType.CACHE_INSERTED
            | events.EventType.CACHE_INSERTED[],
        eventListener: CacheItemEventHandler,
    ): void;

    /**
     * Adds an event listener for the clip ended player event. Fired when any clip ends.
     * This includes break clips and main content clips between break clips.
     * If you want to see when a break clip ends, you should use @see{@link events.EventType.BREAK_CLIP_ENDED}.
     * If you want to see when the media is completely done playing, you should use @see{@link events.EventType.MEDIA_FINISHED}.
     */
    addEventListener(
        eventType: events.EventType.CLIP_ENDED | events.EventType.CLIP_ENDED[],
        eventListener: ClipEndedEventHandler,
    ): void;

    /**
     * Adds an event listener for the EMSG player event. Fired when an emsg is found in a segment. This will only be fired for DASH content
     */
    addEventListener(eventType: events.EventType.EMSG | events.EventType.EMSG[], eventListener: EmsgEventHandler): void;

    /**
     * Adds an event listener for the pause player event. Fired when an error occurs.
     */
    addEventListener(
        eventType: events.EventType.ERROR | events.EventType.ERROR[],
        eventListener: ErrorEventHandler,
    ): void;

    /**
     * Adds an event listener for the ID3 player event. Fired when an ID3 tag is encountered. This will only be fired for HLS content.
     */
    addEventListener(eventType: events.EventType.ID3 | events.EventType.ID3[], eventListener: Id3EventHandler): void;

    /**
     * Adds an event listener for the media status player event. Fired before an outgoing message is sent containing current media status.
     */
    addEventListener(
        eventType: events.EventType.MEDIA_STATUS | events.EventType.MEDIA_STATUS[],
        eventListener: MediaStatusEventHandler,
    ): void;

    /**
     * Adds an event listener for the custom state player event. Fired when an outgoing custom state message is sent.
     */
    addEventListener(
        eventType: events.EventType.CUSTOM_STATE | events.EventType.CUSTOM_STATE[],
        eventListener: CustomStateEventHandler,
    ): void;

    /**
     * Adds an event listener for the media information changed player event. Fired if the media information is changed during playback.
     * For example when playing a live radio and the track metadata changed.
     */
    addEventListener(
        eventType: events.EventType.MEDIA_INFORMATION_CHANGED | events.EventType.MEDIA_INFORMATION_CHANGED[],
        eventListener: MediaInformationChangedEventHandler,
    ): void;

    /**
     * Adds an event listener for the media finished player event. Fired when the media has completely finished playing.
     * This includes the following cases: there is nothing left in the stream to play, user has requested a stop, or an error has occurred.
     * When queueing is used, this event will trigger once for each queue item that finishes.
     */
    addEventListener(
        eventType: events.EventType.MEDIA_FINISHED | events.EventType.MEDIA_FINISHED[],
        eventListener: MediaFinishedEventHandler,
    ): void;

    /**
     * Adds an event listener for loading player events.
     */
    addEventListener(
        eventType:
            | events.EventType.PLAYER_PRELOADING
            | events.EventType.PLAYER_PRELOADING[]
            | events.EventType.PLAYER_PRELOADING_CANCELLED
            | events.EventType.PLAYER_PRELOADING_CANCELLED[]
            | events.EventType.PLAYER_LOAD_COMPLETE
            | events.EventType.PLAYER_LOAD_COMPLETE[]
            | events.EventType.PLAYER_LOADING
            | events.EventType.PLAYER_LOADING[],
        eventListener: LoadEventHandler,
    ): void;

    /**
     * Adds an event listener for the media finished player event. Fired when the media has completely finished playing.
     * This includes the following cases: there is nothing left in the stream to play, user has requested a stop, or an error has occurred.
     * When queueing is used, this event will trigger once for each queue item that finishes.
     */
    addEventListener(
        eventType: events.EventType.SEGMENT_DOWNLOADED | events.EventType.SEGMENT_DOWNLOADED[],
        eventListener: SegmentDownloadedEventHandler,
    ): void;

    /**
     * Adds an event listener for request events made to the receiver.
     */
    addEventListener(
        eventType:
            | events.EventType.REQUEST_SEEK
            | events.EventType.REQUEST_SEEK[]
            | events.EventType.REQUEST_LOAD
            | events.EventType.REQUEST_LOAD[]
            | events.EventType.REQUEST_STOP
            | events.EventType.REQUEST_STOP[]
            | events.EventType.REQUEST_PAUSE
            | events.EventType.REQUEST_PAUSE[]
            | events.EventType.REQUEST_PRECACHE
            | events.EventType.REQUEST_PRECACHE[]
            | events.EventType.REQUEST_PLAY
            | events.EventType.REQUEST_PLAY[]
            | events.EventType.REQUEST_SKIP_AD
            | events.EventType.REQUEST_SKIP_AD[]
            | events.EventType.REQUEST_PLAY_AGAIN
            | events.EventType.REQUEST_PLAY_AGAIN[]
            | events.EventType.REQUEST_PLAYBACK_RATE_CHANGE
            | events.EventType.REQUEST_PLAYBACK_RATE_CHANGE[]
            | events.EventType.REQUEST_VOLUME_CHANGE
            | events.EventType.REQUEST_VOLUME_CHANGE[]
            | events.EventType.REQUEST_EDIT_TRACKS_INFO
            | events.EventType.REQUEST_EDIT_TRACKS_INFO[]
            | events.EventType.REQUEST_EDIT_AUDIO_TRACKS
            | events.EventType.REQUEST_EDIT_AUDIO_TRACKS[]
            | events.EventType.REQUEST_SET_CREDENTIALS
            | events.EventType.REQUEST_SET_CREDENTIALS[]
            | events.EventType.REQUEST_LOAD_BY_ENTITY
            | events.EventType.REQUEST_LOAD_BY_ENTITY[]
            | events.EventType.REQUEST_USER_ACTION
            | events.EventType.REQUEST_USER_ACTION[]
            | events.EventType.REQUEST_DISPLAY_STATUS
            | events.EventType.REQUEST_DISPLAY_STATUS[]
            | events.EventType.REQUEST_CUSTOM_COMMAND
            | events.EventType.REQUEST_CUSTOM_COMMAND[]
            | events.EventType.REQUEST_FOCUS_STATE
            | events.EventType.REQUEST_FOCUS_STATE[]
            | events.EventType.REQUEST_QUEUE_LOAD
            | events.EventType.REQUEST_QUEUE_LOAD[]
            | events.EventType.REQUEST_QUEUE_INSERT
            | events.EventType.REQUEST_QUEUE_INSERT[]
            | events.EventType.REQUEST_QUEUE_UPDATE
            | events.EventType.REQUEST_QUEUE_UPDATE[]
            | events.EventType.REQUEST_QUEUE_REMOVE
            | events.EventType.REQUEST_QUEUE_REMOVE[]
            | events.EventType.REQUEST_QUEUE_REORDER
            | events.EventType.REQUEST_QUEUE_REORDER[]
            | events.EventType.REQUEST_QUEUE_GET_ITEM_RANGE
            | events.EventType.REQUEST_QUEUE_GET_ITEM_RANGE[]
            | events.EventType.REQUEST_QUEUE_GET_ITEMS
            | events.EventType.REQUEST_QUEUE_GET_ITEMS[]
            | events.EventType.REQUEST_QUEUE_GET_ITEM_IDS
            | events.EventType.REQUEST_QUEUE_GET_ITEM_IDS[],
        eventListener: RequestEventHandler,
    ): void;

    /**
     * Adds an event listener for the live player events.
     */
    addEventListener(
        eventType:
            | events.EventType.LIVE_IS_MOVING_WINDOW_CHANGED
            | events.EventType.LIVE_IS_MOVING_WINDOW_CHANGED[]
            | events.EventType.LIVE_ENDED
            | events.EventType.LIVE_ENDED[],
        eventListener: LiveStatusEventHandler,
    ): void;

    /**
     * Adds an event listener for player events that get the base @see{@link events.Event} in the callback.
     * Includes ALL and CLIP_STARTED
     */
    addEventListener(eventType: events.EventType | events.EventType[], eventListener: EventHandler): void;

    /**
     * Sends a media status message to all senders (broadcast). Applications use this to send a custom state change.
     */
    broadcastStatus(includeMedia?: boolean, requestId?: number, customData?: any, includeQueueItems?: boolean): void;

    getAudioTracksManager(): AudioTracksManager;

    /**
     * Returns current time in sec in currently-playing break clip.
     */
    getBreakClipCurrentTimeSec(): number;

    /**
     * Returns duration in sec of currently-playing break clip.
     */
    getBreakClipDurationSec(): number;

    /**
     * Obtain the breaks (Ads) manager.
     */
    getBreakManager(): breaks.BreakManager;

    /**
     * Returns list of breaks.
     */
    getBreaks(): messages.Break[];

    /**
     * Gets current time in sec of current media.
     */
    getCurrentTimeSec(): number;

    /**
     * Gets duration in sec of currently playing media.
     */
    getDurationSec(): number;

    /**
     * Returns live seekable range with start and end time in seconds. The values are media time based.
     */
    getLiveSeekableRange(): messages.LiveSeekableRange;

    /**
     * Gets media information of current media.
     */
    getMediaInformation(): messages.MediaInformation;

    /**
     * Returns playback configuration.
     */
    getPlaybackConfig(): PlaybackConfig;

    /**
     * Returns current playback rate.
     */
    getPlaybackRate(): number;

    /**
     * Gets player state.
     */
    getPlayerState(): messages.PlayerState;

    /**
     * Get the preferred playback rate. (Can be used on shutdown event to save latest preferred playback rate to a persistent storage;
     *  so it can be used in next session in the cast options).
     */
    getPreferredPlaybackRate(): number;

    /**
     * Get the preferred text track language.
     */
    getPreferredTextLanguage(): string;

    /**
     * Obtain QueueManager API.
     */
    getQueueManager(): QueueManager;

    getTextTracksManager(): TextTracksManager;

    /**
     * Loads media.
     */
    load(loadRequest: messages.LoadRequestData): Promise<void>;

    /**
     * Pauses currently playing media.
     */
    pause(): void;

    /**
     * Plays currently paused media.
     */
    play(): void;

    /**
     * Requests a text string to be played back locally on the receiver device.
     */
    playString(stringId: messages.PlayStringId, args?: string[]): Promise<messages.ErrorData>;

    /**
     * Request Google Assistant to refresh the credentials. Only works if the original credentials came from the assistant.
     */
    refreshCredentials(): Promise<void>;

    /**
     * Removes the event listener added for given player event. If event listener is not added; it will be ignored.
     */
    removeEventListener(eventType: events.EventType | events.EventType[], eventListener: EventHandler): void;

    /**
     * Seeks in current media.
     */
    seek(seekTime: number): void;

    /**
     * Sends an error to a specific sender
     */
    sendError(
        senderId: string,
        requestId: number,
        type: messages.ErrorType,
        reason?: messages.ErrorReason,
        customData?: any,
    ): void;

    /**
     * Send local media request.
     */
    sendLocalMediaRequest(request: messages.RequestData): void;

    /**
     * Sends a media status message to a specific sender.
     */
    sendStatus(
        senderId: string,
        requestId: number,
        includeMedia?: boolean,
        customData?: any,
        includeQueueItems?: boolean,
    ): void;

    /**
     * Sets the IDLE reason. This allows applications that want to force the IDLE state to indicate the reason that made the player going to IDLE state
     * (a custom error; for example). The idle reason will be sent in the next status message. NOTE: Most applications do not need to set this value;
     * it is only needed if they want to make the player go to IDLE in special circumstances and the default idleReason does not reflect their intended
     * behavior.
     */
    setIdleReason(idleReason: messages.IdleReason): void;

    /**
     * Sets MediaElement to use. If Promise of MediaElement is set; media begins playback after Promise is resolved.
     */
    setMediaElement(mediaElement: HTMLMediaElement): void;

    /**
     * Sets media information.
     */
    setMediaInformation(mediaInformation: messages.MediaInformation, opt_broadcast?: boolean): void;

    /**
     * Sets a handler to return or modify PlaybackConfig; for a specific load request. The handler paramaters are the load request data
     * and default playback config for the receiver (provided in the context options). The handler should returns a modified playback config;
     *  or null to prevent the media from playing. The return value can be a promise to allow waiting for data from the server.
     */
    setMediaPlaybackInfoHandler(
        handler: (loadRequestData: messages.LoadRequestData, playbackConfig: PlaybackConfig) => void,
    ): void;

    /**
     * Sets a handler to return the media url for a load request. This handler can be used to avoid having the media content url published as part
     * of the media status. By default the media contentId is used as the content url.
     */
    setMediaUrlResolver(resolver: (loadRequestData: messages.LoadRequestData) => void): void;

    /**
     * Provide an interceptor of incoming and outgoing messages. The interceptor
     * can update the request data, and return updated data, a promise of
     * updated data if need to get more data from the server, or null if the
     * request should not be handled. Note that if load message interceptor is
     * provided, and no interceptor is provided for preload - the load
     * interceptor will be called for preload messages.
     */
    setMessageInterceptor(
        type: messages.MessageType.CLOUD_STATUS,
        interceptor:
            | ((messageData: messages.CloudMediaStatus) => messages.CloudMediaStatus)
            | ((messageData: messages.CloudMediaStatus) => Promise<messages.CloudMediaStatus>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.CUSTOM_COMMAND,
        interceptor:
            | ((messageData: messages.CustomCommandRequestData) => messages.CustomCommandRequestData)
            | ((messageData: messages.CustomCommandRequestData) => Promise<messages.CustomCommandRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.DISPLAY_STATUS,
        interceptor:
            | ((messageData: messages.DisplayStatusRequestData) => messages.DisplayStatusRequestData)
            | ((messageData: messages.DisplayStatusRequestData) => Promise<messages.DisplayStatusRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.EDIT_AUDIO_TRACKS,
        interceptor:
            | ((messageData: messages.EditAudioTracksRequestData) => messages.EditAudioTracksRequestData)
            | ((messageData: messages.EditAudioTracksRequestData) => Promise<messages.EditAudioTracksRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.EDIT_TRACKS_INFO,
        interceptor:
            | ((messageData: messages.EditTracksInfoRequestData) => messages.EditTracksInfoRequestData)
            | ((messageData: messages.EditTracksInfoRequestData) => Promise<messages.EditTracksInfoRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.FOCUS_STATE,
        interceptor:
            | ((messageData: messages.FocusStateRequestData) => messages.FocusStateRequestData)
            | ((messageData: messages.FocusStateRequestData) => Promise<messages.FocusStateRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.GET_STATUS,
        interceptor:
            | ((messageData: messages.GetStatusRequestData) => messages.GetStatusRequestData)
            | ((messageData: messages.GetStatusRequestData) => Promise<messages.GetStatusRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.LOAD,
        interceptor:
            | ((messageData: messages.LoadRequestData) => messages.LoadRequestData)
            | ((messageData: messages.LoadRequestData) => Promise<messages.LoadRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.LOAD_BY_ENTITY,
        interceptor:
            | ((messageData: messages.LoadByEntityRequestData) => messages.LoadByEntityRequestData)
            | ((messageData: messages.LoadByEntityRequestData) => Promise<messages.LoadByEntityRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.MEDIA_STATUS,
        interceptor:
            | ((messageData: messages.MediaStatus) => messages.MediaStatus)
            | ((messageData: messages.MediaStatus) => Promise<messages.MediaStatus>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.PRECACHE,
        interceptor:
            | ((messageData: messages.PrecacheRequestData) => messages.PrecacheRequestData)
            | ((messageData: messages.PrecacheRequestData) => Promise<messages.PrecacheRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.PRELOAD,
        interceptor:
            | ((messageData: messages.PreloadRequestData) => messages.PreloadRequestData)
            | ((messageData: messages.PreloadRequestData) => Promise<messages.PreloadRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.QUEUE_CHANGE,
        interceptor:
            | ((messageData: messages.QueueChange) => messages.QueueChange)
            | ((messageData: messages.QueueChange) => Promise<messages.QueueChange>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.QUEUE_GET_ITEMS,
        interceptor:
            | ((messageData: messages.GetItemsInfoRequestData) => messages.GetItemsInfoRequestData)
            | ((messageData: messages.GetItemsInfoRequestData) => Promise<messages.GetItemsInfoRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.QUEUE_GET_ITEM_RANGE,
        interceptor:
            | ((messageData: messages.FetchItemsRequestData) => messages.FetchItemsRequestData)
            | ((messageData: messages.FetchItemsRequestData) => Promise<messages.FetchItemsRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.QUEUE_INSERT,
        interceptor:
            | ((messageData: messages.QueueInsertRequestData) => messages.QueueInsertRequestData)
            | ((messageData: messages.QueueInsertRequestData) => Promise<messages.QueueInsertRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.QUEUE_ITEMS,
        interceptor:
            | ((messageData: messages.ItemsInfo) => messages.ItemsInfo)
            | ((messageData: messages.ItemsInfo) => Promise<messages.ItemsInfo>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.QUEUE_ITEM_IDS,
        interceptor:
            | ((messageData: messages.QueueIds) => messages.QueueIds)
            | ((messageData: messages.QueueIds) => Promise<messages.QueueIds>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.QUEUE_LOAD,
        interceptor:
            | ((messageData: messages.QueueLoadRequestData) => messages.QueueLoadRequestData)
            | ((messageData: messages.QueueLoadRequestData) => Promise<messages.QueueLoadRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.QUEUE_REMOVE,
        interceptor:
            | ((messageData: messages.QueueRemoveRequestData) => messages.QueueRemoveRequestData)
            | ((messageData: messages.QueueRemoveRequestData) => Promise<messages.QueueRemoveRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.QUEUE_REORDER,
        interceptor:
            | ((messageData: messages.QueueReorderRequestData) => messages.QueueReorderRequestData)
            | ((messageData: messages.QueueReorderRequestData) => Promise<messages.QueueReorderRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.QUEUE_UPDATE,
        interceptor:
            | ((messageData: messages.QueueUpdateRequestData) => messages.QueueUpdateRequestData)
            | ((messageData: messages.QueueUpdateRequestData) => Promise<messages.QueueUpdateRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.RESUME_SESSION,
        interceptor:
            | ((messageData: messages.ResumeSessionRequestData) => messages.ResumeSessionRequestData)
            | ((messageData: messages.ResumeSessionRequestData) => Promise<messages.ResumeSessionRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.SEEK,
        interceptor:
            | ((messageData: messages.SeekRequestData) => messages.SeekRequestData)
            | ((messageData: messages.SeekRequestData) => Promise<messages.SeekRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.SESSION_STATE,
        interceptor:
            | ((messageData: messages.StoreSessionResponseData) => messages.StoreSessionResponseData)
            | ((messageData: messages.StoreSessionResponseData) => Promise<messages.StoreSessionResponseData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.SET_CREDENTIALS,
        interceptor:
            | ((messageData: messages.SetCredentialsRequestData) => messages.SetCredentialsRequestData)
            | ((messageData: messages.SetCredentialsRequestData) => Promise<messages.SetCredentialsRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.SET_PLAYBACK_RATE,
        interceptor:
            | ((messageData: messages.SetPlaybackRateRequestData) => messages.SetPlaybackRateRequestData)
            | ((messageData: messages.SetPlaybackRateRequestData) => Promise<messages.SetPlaybackRateRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.SET_VOLUME,
        interceptor:
            | ((messageData: messages.VolumeRequestData) => messages.VolumeRequestData)
            | ((messageData: messages.VolumeRequestData) => Promise<messages.VolumeRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.STORE_SESSION,
        interceptor:
            | ((messageData: messages.StoreSessionRequestData) => messages.StoreSessionRequestData)
            | ((messageData: messages.StoreSessionRequestData) => Promise<messages.StoreSessionRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType.USER_ACTION,
        interceptor:
            | ((messageData: messages.UserActionRequestData) => messages.UserActionRequestData)
            | ((messageData: messages.UserActionRequestData) => Promise<messages.UserActionRequestData>)
            | null,
    ): void;
    setMessageInterceptor(
        type: messages.MessageType,
        interceptor:
            | ((messageData: messages.RequestData) => messages.RequestData)
            | ((messageData: messages.RequestData) => Promise<messages.RequestData>)
            | null,
    ): void;

    /**
     * Sets playback configuration on the PlayerManager.
     */
    setPlaybackConfig(playbackConfig: PlaybackConfig): void;

    /**
     * Set the preferred playback rate for follow up load or media items. The preferred playback rate will be updated automatically to the latest
     * playback rate that was provided by a load request or explicit set of playback rate.
     */
    setPreferredPlaybackRate(preferredPlaybackRate: number): void;

    /**
     * Set the preferred text track language. The preferred text track language will be updated automatically to the latest enabled language
     * by a load request or explicit change to text tracks. (Should be called only in idle state; and Will only apply to next loaded media).
     */
    setPreferredTextLanguage(preferredTextLanguage: string): void;

    /**
     * Stops currently playing media.
     */
    stop(): void;
}

/**
 * Configuration to customize playback behavior.
 */
export class PlaybackConfig {
    /**
     * Duration of buffered media in seconds to start buffering.
     */
    autoPauseDuration?: number;

    /**
     * Duration of buffered media in seconds to start/resume playback after auto-paused due to buffering.
     */
    autoResumeDuration?: number;

    /**
     * Minimum number of buffered segments to start/resume playback.
     */
    autoResumeNumberOfSegments?: number;

    /**
     * A function to customize request to get a caption segment.
     */
    captionsRequestHandler?: RequestHandler;

    /**
     * Initial bandwidth in bits in per second.
     */
    initialBandwidth?: number;

    /**
     * Custom license data.
     */
    licenseCustomData?: string;

    /**
     * Handler to process license data. The handler is passed the license data; and returns the modified license data.
     */
    licenseHandler?: BinaryHandler;

    /**
     * A function to customize request to get a license.
     */
    licenseRequestHandler?: RequestHandler;

    /**
     * Url for acquiring the license.
     */
    licenseUrl?: string;

    /**
     * Handler to process manifest data. The handler is passed the manifest; and returns the modified manifest.
     */
    manifestHandler?: (manifest: string) => string;

    /**
     * A function to customize request to get a manifest.
     */
    manifestRequestHandler?: RequestHandler;

    /**
     * Preferred protection system to use for decrypting content.
     */
    protectionSystem: ContentProtection;

    /**
     * Handler to process segment data. The handler is passed the segment data; and returns the modified segment data.
     */
    segmentHandler?: BinaryHandler;

    /**
     * A function to customize request information to get a media segment.
     */
    segmentRequestHandler?: RequestHandler;

    /**
     * Maximum number of times to retry a network request for a segment.
     */
    segmentRequestRetryLimit?: number;
}
/**
 * HTTP(s) Request/Response information.
 */
export class NetworkRequestInfo {
    /**
     * The content of the request. Can be used to modify license request body.
     */
    content: Uint8Array;

    /**
     * An object containing properties that you would like to send in the header.
     */
    headers: any;

    /**
     * The URL requested.
     */
    url: string;

    /**
     * Indicates whether CORS Access-Control requests should be made using credentials such as cookies or authorization headers.
     */
    withCredentials: boolean;
}
/** Cast receiver context options. All options are optionals. */
export class CastReceiverOptions {
    /**
     * Optional map of custom messages namespaces to initialize and their types.
     * Custom messages namespaces need to be initiated before the application started;
     * so it is best to provide the namespaces in the receiver options.
     * (The default type of a message bus is JSON; if not provided here).
     */
    customNamespaces?: any;

    /**
     * If true, the receiver will not set an idle timeout to close receiver if there is no activity.
     * Should only be used for non media apps.
     */
    disableIdleTimeout?: boolean;

    /**
     * Sender id used for local requests. Default value is 'local'.
     */
    localSenderId?: string;

    /**
     * Maximum time in seconds before closing an idle sender connection.
     * Setting this value enables a heartbeat message to keep the connection alive.
     * Used to detect unresponsive senders faster than typical TCP timeouts.
     * The minimum value is 5 seconds; there is no upper bound enforced but practically it's minutes before platform TCP timeouts come into play.
     * Default value is 10 seconds.
     */
    maxInactivity?: number;

    /**
     * Optional media element to play content with. Default behavior is to use the first found media element in the page.
     */
    mediaElement?: HTMLMediaElement;

    /**
     * Optional playback configuration.
     */
    playbackConfig?: PlaybackConfig;

    /**
     * If this is true; the watched client stitching break will also be played.
     */
    playWatchedBreak?: boolean;

    /**
     * Preferred value for player playback rate. It is used if playback rate value is not provided in the load request.
     */
    preferredPlaybackRate?: number;

    /**
     * Preferred text track language. It is used if no active track is provided in the load request.
     */
    preferredTextLanguage?: string;

    /**
     * Optional queue implementation.
     */
    queue?: QueueBase;

    /**
     * Text that represents the application status.
     * It should meet internationalization rules as may be displayed by the sender application.
     */
    statusText?: string;

    /**
     * A bitmask of media commands supported by the application.
     * LOAD; PLAY; STOP; GET_STATUS must always be supported.
     * If this value is not provided; then PAUSE; SEEK; STREAM_VOLUME; STREAM_MUTE are assumed to be supported too.
     */
    supportedCommands?: number;

    /**
     * Indicate that MPL should be used for DASH content.
     */
    useLegacyDashSupport?: boolean;

    /**
     * An integer used as an internal version number.
     * This number is used only to distinguish between receiver releases and higher numbers do not necessarily have to represent newer releases.
     */
    versionCode?: number;
}

/** Manages loading of underlying libraries and initializes underlying cast receiver SDK. */
export class CastReceiverContext {
    /** Returns the CastReceiverContext singleton instance. */
    static getInstance(): CastReceiverContext;

    constructor(params: any);

    /**
     * Sets message listener on custom message channel.
     */
    addCustomMessageListener(namespace: string, listener: EventHandler): void;

    /**
     * Add listener to cast system events.
     */
    addEventListener(type: system.EventType | system.EventType[], handler: EventHandler): void;

    /**
     * Checks if the given media params of video or audio streams are supported by the platform.
     */
    canDisplayType(mimeType: string, codecs?: string, width?: number, height?: number, framerate?: number): boolean;

    /**
     * Provides application information once the system is ready; otherwise it will be null.
     */
    getApplicationData(): system.ApplicationData;

    /**
     * Provides device capabilities information once the system is ready; otherwise it will be null.
     * If an empty object is returned; the device does not expose any capabilities information.
     */
    getDeviceCapabilities(): any;

    /**
     * Get Player instance that can control and monitor media playback.
     */
    getPlayerManager(): PlayerManager;

    /**
     * Get a sender by sender id
     */
    getSender(senderId: string): system.Sender;

    /**
     * Gets a list of currently-connected senders.
     */
    getSenders(): system.Sender[];

    /**
     * Reports if the cast application's HDMI input is in standby.
     */
    getStandbyState(): system.StandbyState;

    /**
     * Provides application information about the system state.
     */
    getSystemState(): system.SystemState;

    /**
     * Reports if the cast application is the HDMI active input.
     */
    getVisibilityState(): any;

    /**
     * When the application calls start; the system will send the ready event to indicate
     * that the application information is ready and the application can send messages as soon as there is one sender connected.
     */
    isSystemReady(): boolean;

    /**
     * Start loading player js. This can be used to start loading the players js code in early stage of starting the receiver before calling start.
     * This function is a no-op if players were already loaded (start was called).
     */
    loadPlayerLibraries(useLegacyDashSupport?: boolean): void;

    /**
     * Remove a message listener on custom message channel.
     */
    removeCustomMessageListener(namespace: string, listener: EventHandler): void;

    /**
     * Remove listener to cast system events.
     */
    removeEventListener(type: system.EventType, handler: EventHandler): void;

    /**
     * Sends a message to a specific sender.
     */
    sendCustomMessage(namespace: string, senderId: string, message: any): void;

    /**
     * This function should be called in response to the feedbackstarted event if the application
     * add debug state information to log in the feedback report.
     * It takes in a parameter ‘message’ that is a string that represents the debug information that the application wants to log.
     */
    sendFeedbackMessage(feedbackMessage: string): void;

    /**
     * Sets the application state. The application should call this when its state changes.
     * If undefined or set to an empty string; the value of the Application Name established during application
     * registration is used for the application state by default.
     */
    setApplicationState(statusText: string): void;

    /**
     * Sets the receiver inactivity timeout.
     * It is recommended to set the maximum inactivity value when calling Start and not changing it.
     * This API is just provided for development/debugging purposes.
     */
    setInactivityTimeout(maxInactivity: number): void;

    /**
     * Sets the log verbosity level.
     */
    setLoggerLevel(level: LoggerLevel): void;

    /**
     * Initializes system manager and media manager; so that receiver app can receive requests from senders.
     */
    start(options?: CastReceiverOptions): CastReceiverContext;

    /**
     * Shutdown receiver application.
     */
    stop(): void;
}

/** Manages audio tracks. */
export class AudioTracksManager {
    constructor(params: any);
    getActiveId(): number;
    getActiveTrack(): messages.Track;
    getTrackById(id: number): messages.Track;
    getTracks(): messages.Track[];
    getTracksByLanguage(language: string): messages.Track[];
    setActiveById(id: number): void;
    setActiveByLanguage(language: string): void;
}
