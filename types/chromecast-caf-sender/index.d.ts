/// <reference types="chrome/chrome-cast" />

////////////////////
// Global object
////////////////////
interface Window {
    cast: typeof cast;
    __onGCastApiAvailable(available: boolean, reason?: string): void;
}

////////////////////
// Framework
////////////////////
/**
 * Cast Application Framework
 * @see https://developers.google.com/cast/docs/reference/chrome/cast.framework
 */
declare namespace cast.framework {
    enum LoggerLevel {
        DEBUG,
        INFO,
        WARNING,
        ERROR,
        NONE,
    }

    enum CastState {
        NO_DEVICES_AVAILABLE = "NO_DEVICES_AVAILABLE",
        NOT_CONNECTED = "NOT_CONNECTED",
        CONNECTING = "CONNECTING",
        CONNECTED = "CONNECTED",
    }

    enum SessionState {
        NO_SESSION = "NO_SESSION",
        SESSION_STARTING = "SESSION_STARTING",
        SESSION_STARTED = "SESSION_STARTED",
        SESSION_START_FAILED = "SESSION_START_FAILED",
        SESSION_ENDING = "SESSION_ENDING",
        SESSION_ENDED = "SESSION_ENDED",
        SESSION_RESUMED = "SESSION_RESUMED",
    }
    enum CastContextEventType {
        CAST_STATE_CHANGED = "caststatechanged",
        SESSION_STATE_CHANGED = "sessionstatechanged",
    }
    enum SessionEventType {
        APPLICATION_STATUS_CHANGED = "applicationstatuschanged",
        APPLICATION_METADATA_CHANGED = "applicationmetadatachanged",
        ACTIVE_INPUT_STATE_CHANGED = "activeinputstatechanged",
        VOLUME_CHANGED = "volumechanged",
        MEDIA_SESSION = "mediasession",
    }
    enum RemotePlayerEventType {
        ANY_CHANGE = "anyChanged",
        IS_CONNECTED_CHANGED = "isConnectedChanged",
        IS_MEDIA_LOADED_CHANGED = "isMediaLoadedChanged",
        DURATION_CHANGED = "durationChanged",
        CURRENT_TIME_CHANGED = "currentTimeChanged",
        IS_PAUSED_CHANGED = "isPausedChanged",
        VOLUME_LEVEL_CHANGED = "volumeLevelChanged",
        CAN_CONTROL_VOLUME_CHANGED = "canControlVolumeChanged",
        IS_MUTED_CHANGED = "isMutedChanged",
        CAN_PAUSE_CHANGED = "canPauseChanged",
        CAN_SEEK_CHANGED = "canSeekChanged",
        DISPLAY_NAME_CHANGED = "displayNameChanged",
        STATUS_TEXT_CHANGED = "statusTextChanged",
        TITLE_CHANGED = "titleChanged",
        DISPLAY_STATUS_CHANGED = "displayStatusChanged",
        MEDIA_INFO_CHANGED = "mediaInfoChanged",
        IMAGE_URL_CHANGED = "imageUrlChanged",
        PLAYER_STATE_CHANGED = "playerStateChanged",
        LIVE_SEEKABLE_RANGE_CHANGED = "liveSeekableRange",
    }

    enum ActiveInputState {
        ACTIVE_INPUT_STATE_UNKNOWN = -1,
        ACTIVE_INPUT_STATE_NO = 0,
        ACTIVE_INPUT_STATE_YES = 1,
    }

    interface CastOptions {
        autoJoinPolicy: chrome.cast.AutoJoinPolicy;
        language?: string | undefined;
        receiverApplicationId?: string | undefined;
        resumeSavedSession?: boolean | undefined;
    }

    const VERSION: string;
    function setLoggerLevel(level: LoggerLevel): void;

    class CastContext {
        static getInstance(): CastContext;
        setOptions(options: CastOptions): void;
        getCastState(): CastState;
        getSessionState(): SessionState;
        requestSession(): Promise<chrome.cast.ErrorCode | undefined>;
        getCurrentSession(): CastSession | null;
        endCurrentSession(stopCasting: boolean): void;

        addEventListener(
            type: CastContextEventType.CAST_STATE_CHANGED,
            handler: (event: CastStateEventData) => void,
        ): void;
        addEventListener(
            type: CastContextEventType.SESSION_STATE_CHANGED,
            handler: (event: SessionStateEventData) => void,
        ): void;
        removeEventListener(
            type: CastContextEventType.CAST_STATE_CHANGED,
            handler: (event: CastStateEventData) => void,
        ): void;
        removeEventListener(
            type: CastContextEventType.SESSION_STATE_CHANGED,
            handler: (event: SessionStateEventData) => void,
        ): void;
    }

    class CastSession {
        constructor(sessionObj: chrome.cast.Session, state: SessionState);
        getSessionObj(): chrome.cast.Session;
        getSessionId(): string;
        getSessionState(): SessionState;
        getCastDevice(): chrome.cast.Receiver;
        getApplicationMetadata(): ApplicationMetadata;
        getApplicationStatus(): string;
        getActiveInputState(): ActiveInputState;
        endSession(stopCasting: boolean): void;
        setVolume(volume: number): Promise<chrome.cast.ErrorCode | undefined>;
        getVolume(): number;
        setMute(mute: boolean): Promise<chrome.cast.ErrorCode | undefined>;
        isMute(): boolean;
        sendMessage(
            namespace: string,
            data: any,
        ): Promise<chrome.cast.ErrorCode | undefined>;
        addMessageListener(
            namespace: string,
            listener: (namespace: string, message: string) => void,
        ): void;
        removeMessageListener(
            namespace: string,
            listener: (namespace: string, message: string) => void,
        ): void;
        loadMedia(
            request: chrome.cast.media.LoadRequest,
        ): Promise<chrome.cast.ErrorCode | undefined>;
        getMediaSession(): chrome.cast.media.Media | null;

        addEventListener(
            type: SessionEventType.ACTIVE_INPUT_STATE_CHANGED,
            handler: (event: ActiveInputStateEventData) => void,
        ): void;
        addEventListener(
            type: SessionEventType.APPLICATION_METADATA_CHANGED,
            handler: (event: ApplicationMetadataEventData) => void,
        ): void;
        addEventListener(
            type: SessionEventType.APPLICATION_STATUS_CHANGED,
            handler: (event: ApplicationStatusEventData) => void,
        ): void;
        addEventListener(
            type: SessionEventType.MEDIA_SESSION,
            handler: (event: MediaSessionEventData) => void,
        ): void;
        addEventListener(
            type: SessionEventType.VOLUME_CHANGED,
            handler: (event: VolumeEventData) => void,
        ): void;
        removeEventListener(
            type: SessionEventType.ACTIVE_INPUT_STATE_CHANGED,
            handler: (event: ActiveInputStateEventData) => void,
        ): void;
        removeEventListener(
            type: SessionEventType.APPLICATION_METADATA_CHANGED,
            handler: (event: ApplicationMetadataEventData) => void,
        ): void;
        removeEventListener(
            type: SessionEventType.APPLICATION_STATUS_CHANGED,
            handler: (event: ApplicationStatusEventData) => void,
        ): void;
        removeEventListener(
            type: SessionEventType.MEDIA_SESSION,
            handler: (event: MediaSessionEventData) => void,
        ): void;
        removeEventListener(
            type: SessionEventType.VOLUME_CHANGED,
            handler: (event: VolumeEventData) => void,
        ): void;
    }

    class RemotePlayerController {
        constructor(player: RemotePlayer);
        playOrPause(): void;
        stop(): void;
        seek(): void;
        muteOrUnmute(): void;
        setVolumeLevel(): void;
        getFormattedTime(timeInSec: number): string;
        getSeekPosition(currentTime: number, duration: number): number;
        getSeekTime(currentPosition: number, duration: number): number;

        addEventListener(
            type: RemotePlayerEventType,
            handler: (event: RemotePlayerChangedEvent) => void,
        ): void;
        removeEventListener(
            type: RemotePlayerEventType,
            handler: (event: RemotePlayerChangedEvent) => void,
        ): void;
    }

    interface SavedPlayerState {
        mediaInfo: chrome.cast.media.PlayerState | null;
        currentTime: number;
        isPaused: boolean;
    }

    class RemotePlayer {
        isConnected: boolean;
        isMediaLoaded: boolean;
        duration: number;
        currentTime: number;
        volumeLevel: number;
        canControlVolume: boolean;
        isPaused: boolean;
        isMuted: boolean;
        canPause: boolean;
        canSeek: boolean;
        displayName: string;
        statusText: string;
        title: string;
        displayStatus: string;
        liveSeekableRange?: chrome.cast.media.LiveSeekableRange | undefined;
        mediaInfo?: chrome.cast.media.MediaInfo | undefined;
        imageUrl: string | null;
        playerState: chrome.cast.media.PlayerState | null;
        savedPlayerState: SavedPlayerState | null;
        controller: RemotePlayerController | null;
    }

    class ApplicationMetadata {
        constructor(sessionObj: chrome.cast.Session);
        applicationId: string;
        images: chrome.cast.Image[];
        name: string;
        namespaces: string[];
    }

    abstract class EventData {
        constructor(type: string);
        type: string;
    }

    class ActiveInputStateEventData extends EventData {
        constructor(activeInputState: ActiveInputState);
        activeInputState: ActiveInputState;
    }

    class ApplicationMetadataEventData extends EventData {
        constructor(metadata: ApplicationMetadata);
        metadata: ApplicationMetadata;
    }

    class ApplicationStatusEventData extends EventData {
        constructor(status: string);
        status: string;
    }

    class CastStateEventData extends EventData {
        constructor(castState: CastState);
        castState: CastState;
    }

    class MediaSessionEventData extends EventData {
        constructor(mediaSession: chrome.cast.media.Media);
        mediaSession: chrome.cast.media.Media;
    }

    class RemotePlayerChangedEvent<T = any> extends EventData {
        constructor(type: RemotePlayerEventType, field: string, value: T);
        field: string;
        value: T;
    }

    class SessionStateEventData extends EventData {
        constructor(
            session: CastSession,
            sessionState: SessionState,
            opt_errorCode: chrome.cast.ErrorCode,
        );
        errorCode: chrome.cast.ErrorCode;
        session: CastSession;
        sessionState: SessionState;
    }

    class VolumeEventData extends EventData {
        constructor(volume: number, isMute: boolean);
        isMute: boolean;
        volume: number;
    }
}
