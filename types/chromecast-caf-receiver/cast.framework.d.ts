import * as breaks from "./cast.framework.breaks";
import * as events from "./cast.framework.events";
import * as messages from "./cast.framework.messages";
import * as system from "./cast.framework.system";
import * as ui from "./cast.framework.ui";

export import breaks = breaks;
export import events = events;
export import ui = ui;
export import system = system;
export import messages = messages;

export type HTMLMediaElement = any;
export as namespace framework
export type LoggerLevel =
    | "DEBUG"
    | "VERBOSE"
    | "INFO"
    | "WARNING"
    | "ERROR"
    | "NONE";

export type ContentProtection = "NONE" | "CLEARKEY" | "PLAYREADY" | "WIDEVINE";

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
        prevCount: number
    ): messages.QueueItem[] | Promise<messages.QueueItem[]>;

    /**
     * Initializes the queue with the requestData. This is called when a new LOAD request comes in to the receiver.
     * If this returns or resolves to null; our default queueing implementation will create a queue based on queueData.items or the single media
     *  in the load request data.
     */
    initialize(
        requestData: messages.LoadRequestData
    ): messages.QueueData | Promise<messages.QueueData>;

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
     * Adds an event listener for player event.
     */
    addEventListener: (
        eventType: events.EventType | events.EventType[],
        eventListener: EventHandler
    ) => void;

    /**
     * Sends a media status message to all senders (broadcast). Applications use this to send a custom state change.
     */
    broadcastStatus(
        includeMedia?: boolean,
        requestId?: number,
        customData?: any,
        includeQueueItems?: boolean
    ): void;

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
    removeEventListener(
        eventType: events.EventType | events.EventType[],
        eventListener: EventHandler
    ): void;

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
        customData?: any
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
        includeQueueItems?: boolean
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
    setMediaInformation(
        mediaInformation: messages.MediaInformation,
        opt_broadcast?: boolean
    ): void;

    /**
     * Sets a handler to return or modify PlaybackConfig; for a specific load request. The handler paramaters are the load request data
     * and default playback config for the receiver (provided in the context options). The handler should returns a modified playback config;
     *  or null to prevent the media from playing. The return value can be a promise to allow waiting for data from the server.
     */
    setMediaPlaybackInfoHandler(
        handler: (
            loadRequestData: messages.LoadRequestData,
            playbackConfig: PlaybackConfig
        ) => void
    ): void;

    /**
     * Sets a handler to return the media url for a load request. This handler can be used to avoid having the media content url published as part
     * of the media status. By default the media contentId is used as the content url.
     */
    setMediaUrlResolver(
        resolver: (loadRequestData: messages.LoadRequestData) => void
    ): void;

    /**
     * Provide an interceptor of incoming and outgoing messages.
     * The interceptor can update the request data; and return updated data; a promise of
     * updated data if need to get more data from the server; or null if the request should not be handled.
     * Note that if load message interceptor is provided; and no interceptor is provided for preload -
     * the load interceptor will be called for preload messages.
     */
    setMessageInterceptor(
        type: messages.MessageType,
        interceptor: (requestData: messages.RequestData) => Promise<any>
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
    addCustomMessageListener(
        namespace: string,
        listener: EventHandler
    ): void;

    /**
     * Add listener to cast system events.
     */
    addEventListener(
        type: system.EventType | system.EventType[],
        handler: EventHandler
    ): void;

    /**
     * Checks if the given media params of video or audio streams are supported by the platform.
     */
    canDisplayType(
        mimeType: string,
        codecs?: string,
        width?: number,
        height?: number,
        framerate?: number
    ): boolean;

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
    removeCustomMessageListener(
        namespace: string,
        listener: EventHandler
    ): void;

    /**
     * Remove listener to cast system events.
     */
    removeEventListener(type: system.EventType, handler: EventHandler): void;

    /**
     * Sends a message to a specific sender.
     */
    sendCustomMessage(
        namespace: string,
        senderId: string,
        message: any
    ): void;

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
