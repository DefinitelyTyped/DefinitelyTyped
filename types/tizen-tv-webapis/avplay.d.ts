import { SuccessCallback, ErrorCallback } from './webapis';
/**
 * Specifies the player state.
 * - `NONE`- Player is not created
 * - `IDLE`- Player is created but not prepared
 * - `READY`- Player is ready to play media
 * - `PLAYING`- Player is playing media
 * - `PAUSED`- Player is paused
 * @since 2.3
 */
export enum AVPlayPlayerState {
    NONE = 'NONE',
    IDLE = 'IDLE',
    READY = 'READY',
    PLAYING = 'PLAYING',
    PAUSED = 'PAUSED',
}

/**
 * Specifies display modes.
 * - `PLAYER_DISPLAY_MODE_LETTER_BOX`- Letterbox mode
 * - `PLAYER_DISPLAY_MODE_FULL_SCREEN`- Full-screen mode
 * - `PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO`- Screen mode based on video dar/par info
 * @since 2.3
 */
export enum AVPlayDisplayMode {
    PLAYER_DISPLAY_MODE_LETTER_BOX = 'PLAYER_DISPLAY_MODE_LETTER_BOX',
    PLAYER_DISPLAY_MODE_FULL_SCREEN = 'PLAYER_DISPLAY_MODE_FULL_SCREEN',
    PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO = 'PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO',
}

/**
 * Specifies buffering scenarios.
 * - `PLAYER_BUFFER_FOR_PLAY`- Initial buffering scenario
 * - `PLAYER_BUFFER_FOR_RESUME`- Re-buffering which might be occured after initial buffering during the playback.
 * The onbufferingcomplete event would be triggered when the PLAYER_BUFFER_FOR_PLAY amount of data is buffered.
 * The actual buffering completion time may vary depending on the contents format, bitrate, network speed and so on.
 * @since 2.3
 */
export enum AVPlayBufferOption {
    PLAYER_BUFFER_FOR_PLAY = 'PLAYER_BUFFER_FOR_PLAY',
    PLAYER_BUFFER_FOR_RESUME = 'PLAYER_BUFFER_FOR_RESUME',
}

/**
 * Specifies buffer size units.
 * - `PLAYER_BUFFER_SIZE_IN_SECOND`- Buffer size in seconds
 * @since 2.3
 * @note "PLAYER_BUFFER_SIZE_IN_BYTE" property has been deprecated from Tizen version 5.0
 */
export enum AVPlayBufferSizeUnit {
    PLAYER_BUFFER_SIZE_IN_BYTE = 'PLAYER_BUFFER_SIZE_IN_BYTE',
    PLAYER_BUFFER_SIZE_IN_SECOND = 'PLAYER_BUFFER_SIZE_IN_SECOND',
}

/**
 * Specifies parameters for various streaming protocols, such as HTTP, MMS, and adaptive streaming (Smooth Streaming, HLS, and MPEG-DASH).
 * - `COOKIE`-              : HTTP request cookie used to establish the session with the HTTP server. (for setStreamingProperty)
 * - `USER_AGENT`-          : HTTP user agent, used in the HTTP request header. (for setStreamingProperty)
 * - `PREBUFFER_MODE`-      : Property to initiate prebuffering mode. The second parameter indicates start-time for prebuffered content, in milliseconds. (for setStreamingProperty)
 * - `ADAPTIVE_INFO`-       : Sets a custom streaming URL with various streaming parameters, such as "BITRATES", "STARTBITRATE", or "SKIPBITRATE" (for setStreamingProperty)
 *                              String containing custom attributes for adaptive streaming playback.
 *                              "STARTBITRATE=" Valid values are "LOWEST", "HIGHEST", and "AVERAGE". You can also define a specific bandwidth for the start of playback.
 *                              "BITRATES=" Use '~' to define a bandwidth range (5000 ~ 20000). You can also define a specific bandwidth for playback.
 *                              "SKIPBITRATE=" Defines the bandwidth to use after a skip operation.
 *                              "STARTFRAGMENT=" For live content playback, defines the start fragment number.
 *                              "FIXED_MAX_RESOLUTION=max_widthXmax_height". Only if the given media URI such as mpd in MPEG-DASH or m3u8 in HLS through open() method doesn't describe entire required video resolutions,
 *                              application should use this attribute to complete the resolution information for the player.
 * - `LISTEN_SPARSE_TRACK`- : For the Smooth Streaming case, configures the player to listen for a "Sparse name" configured through "propertyParam" . The sparse track name is a string. (for setStreamingProperty)
 * - `IS_LIVE`-             : Whether the stream is LIVE or VOD. Applicable to all streaming types. (for getStreamingProperty)
 * - `AVAILABLE_BITRATE`-   : String listing the available bit-rates for the currently-playing stream. (for getStreamingProperty)
 * - `GET_LIVE_DURATION`-   : String describing the duration of live content. (for getStreamingProperty)
 * - `CURRENT_BANDWIDTH`-   : String describing the current streaming bandwidth. (for getStreamingProperty)
 * - `USE_VIDEOMIXER`-      : Property used for enabling/initializing video mixer feature on B2B product only( for setStreamingProperty). It should be set before setting SET_MIXEDFRAME property on the player.
 * - `SET_MIXEDFRAME`-      : Property to set the position of mixed frame( for setStreamingProperty). setDisplayRect with required position on corresponding player instance to be called before setting this property.
 * - `PORTRAIT_MODE`-       : Property to force the playback the video in potrait mode on B2B proudct only( for setStreamingProperty).
 * @since 2.3
 * @note "GET_LIVE_DURATION" is available since Tizen version 2.4
 * @note "WIDEVINE" property has been deprecated from Tizen version 4.0
 * @note "PROPERTY_HD_AUDIO" property has been deprecated from Tizen version 2.4
 * @note "SET_VR360_MODE" property has been deprecated from Tizen version 5.0
 * @note "SET_MODE_4K" property has been deprecated from Tizen version 5.0. Property "ADAPTIVE_INFO" with attribute "FIXED_MAX_RESOLUTION=max_widthXmax_height" has been available since 5.0 as an alternative.
 * @note "ADAPTIVE_INFO" with attribute  "FIXED_MAX_RESOLUTION=max_widthXmax_height" is available since Tizen version 5.0 and API version 4.1
 */
export enum AVPlayStreamingPropertyType {
    COOKIE = 'COOKIE',
    USER_AGENT = 'USER_AGENT',
    PREBUFFER_MODE = 'PREBUFFER_MODE',
    ADAPTIVE_INFO = 'ADAPTIVE_INFO',
    SET_MODE_4K = 'SET_MODE_4K',
    PROPERTY_HD_AUDIO = 'PROPERTY_HD_AUDIO',
    LISTEN_SPARSE_TRACK = 'LISTEN_SPARSE_TRACK',
    IS_LIVE = 'IS_LIVE',
    AVAILABLE_BITRATE = 'AVAILABLE_BITRATE',
    GET_LIVE_DURATION = 'GET_LIVE_DURATION',
    CURRENT_BANDWIDTH = 'CURRENT_BANDWIDTH',
    WIDEVINE = 'WIDEVINE',
    SET_VR360_MODE = 'SET_VR360_MODE',
    USE_VIDEOMIXER = 'USE_VIDEOMIXER',
    SET_MIXEDFRAME = 'SET_MIXEDFRAME',
    PORTRAIT_MODE = 'PORTRAIT_MODE',
}

/**
 * Specifies DRM systems supported by the player.
 * - `PLAYREADY`- PlayReady
 * - `EME_PLAYREADY`- PlayReady CDM (supported since Tizen 5.0)
 * - `VERIMATRIX`- Verimatrix
 * - `WIDEVINE_CDM`- Widevine Modular
 * - `EME_WIDEVINE_CDM`- Widevine Modular (supported since Tizen 5.0)
 * @since 2.3
 */
export enum AVPlayDrmType {
    PLAYREADY = 'PLAYREADY',
    EME_PLAYREADY = 'EME_PLAYREADY',
    VERIMATRIX = 'VERIMATRIX',
    WIDEVINE_CDM = 'WIDEVINE_CDM',
    EME_WIDEVINE_CDM = 'EME_WIDEVINE_CDM',
}

/**
 * Specifies various DRM operations.
 * - `SetProperties`-         : Sets DRM instance properties and initialize the DRM instance for PlayReady, Verimatrix, and Widevine CDM.
 * - `InstallLicense`-        : Base64-encoded license data for PlayReady. An application shall retrieve license data using challenge data received in ondrmevent() callback.
 * - `ProcessInitiator`-      : initialize the PlayReady DRM instance
 * - `widevine_license_data`- : Base64-encoded license data with given session id for Widevine CDM. An application shall retrieve license data using challenge data received in ondrmevent() callback.
 * @since 2.3
 * @note 'GetUID' operation has been deprecated from Tizen version 5.0, rather application should use getUID() API.
 * @note 'Initialize' and 'Finalize' operations have been deprecated from Tizen version 5.0. Because these are being executed by avplay itself.
 * @note 'widevine_app_session' and 'widevine_data_type' operations have been deprecated from Tizen version 5.0. Because these are merged into "SetProperties". Please refer to setDrm() example.
 */
export enum AVPlayDrmOperation {
    'SetProperties' = 'SetProperties',
    'InstallLicense' = 'InstallLicense',
    'ProcessInitiator' = 'ProcessInitiator',
    'GetUID' = 'GetUID',
    'Initialize' = 'Initialize',
    'Finalize' = 'Finalize',
    'widevine_license_data' = 'widevine_license_data',
    'widevine_app_session' = 'widevine_app_session',
    'widevine_data_type' = 'widevine_data_type',
}

/**
 * Specifies stream types supported by the player.
 * - `VIDEO`- Video track
 * - `AUDIO`- Audio track
 * - `TEXT`- Subtitle track
 * @since 2.3
 */
export enum AVPlayStreamType {
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO',
    TEXT = 'TEXT',
}

/**
 * Specifies the player error messages.
 * - `PLAYER_ERROR_NONE`- Operation has successfully completed; no error.
 * - `PLAYER_ERROR_INVALID_PARAMETER`- Unable to find the parameter
 * - `PLAYER_ERROR_NO_SUCH_FILE`- Unable to find the specified media content
 * - `PLAYER_ERROR_INVALID_OPERATION`- Invalid API Call at the moment
 * - `PLAYER_ERROR_SEEK_FAILED`- Failed to perform seek operation, or seek operation called during an invalid state
 * - `PLAYER_ERROR_INVALID_STATE`- AVPlay API method was called during an invalid state
 * - `PLAYER_ERROR_NOT_SUPPORTED_FILE`- Multimedia file type not supported
 * - `PLAYER_ERROR_NOT_SUPPORTED_FORMAT`- Multimedia file format not supported
 * - `PLAYER_ERROR_INVALID_URI`- Input URI is in an invalid format
 * - `PLAYER_ERROR_CONNECTION_FAILED`- Failed multiple attempts to connect to the specified content server
 * - `PLAYER_ERROR_GENEREIC`- Failed to create the display window
 * @since 2.3
 */
export enum AVPlayError {
    PLAYER_ERROR_NONE = 'PLAYER_ERROR_NONE',
    PLAYER_ERROR_INVALID_PARAMETER = 'PLAYER_ERROR_INVALID_PARAMETER',
    PLAYER_ERROR_NO_SUCH_FILE = 'PLAYER_ERROR_NO_SUCH_FILE',
    PLAYER_ERROR_INVALID_OPERATION = 'PLAYER_ERROR_INVALID_OPERATION',
    PLAYER_ERROR_SEEK_FAILED = 'PLAYER_ERROR_SEEK_FAILED',
    PLAYER_ERROR_INVALID_STATE = 'PLAYER_ERROR_INVALID_STATE',
    PLAYER_ERROR_NOT_SUPPORTED_FILE = 'PLAYER_ERROR_NOT_SUPPORTED_FILE',
    PLAYER_ERROR_NOT_SUPPORTED_FORMAT = 'PLAYER_ERROR_NOT_SUPPORTED_FORMAT',
    PLAYER_ERROR_INVALID_URI = 'PLAYER_ERROR_INVALID_URI',
    PLAYER_ERROR_CONNECTION_FAILED = 'PLAYER_ERROR_CONNECTION_FAILED',
    PLAYER_ERROR_GENEREIC = 'PLAYER_ERROR_GENEREIC',
}

/**
 * Specifies player events.
 * - `PLAYER_MSG_NONE`- Notifies that a multimedia component message was not recognized by the player
 * - `PLAYER_MSG_RESOLUTION_CHANGED`- During adaptive streaming playback, notifies that the video resolution has changed
 * - `PLAYER_MSG_BITRATE_CHANGE`- During adaptive streaming playback, notifies of a change, based on network heuristics, in the bandwidth-specific URL. The current bandwidth value is also sent.
 * - `PLAYER_SPARSE_TRACK_DETECT`- During adaptive streaming playback, notifies that a sparse track was encountered
 * - `PLAYER_STREAMING_EVENT`- Posts required streaming data
 * - `PLAYER_MSG_HTTP_ERROR_CODE`- Describes the detailed HTTP network situation information
 * - `PLAYER_MSG_DRM_CHALLENGE_DATA`- For encrypted content playback, posts the DRM challenge data
 * @since 2.3
 * @note 'PLAYER_MSG_FRAGMENT_INFO' event has been deprecated from Tizen version 2.4, because it affects the application performance.
 */
export enum AVPlayEvent {
    PLAYER_MSG_NONE = 'PLAYER_MSG_NONE',
    PLAYER_MSG_RESOLUTION_CHANGED = 'PLAYER_MSG_RESOLUTION_CHANGED',
    PLAYER_MSG_BITRATE_CHANGE = 'PLAYER_MSG_BITRATE_CHANGE',
    PLAYER_MSG_FRAGMENT_INFO = 'PLAYER_MSG_FRAGMENT_INFO',
    PLAYER_SPARSE_TRACK_DETECT = 'PLAYER_SPARSE_TRACK_DETECT',
    PLAYER_STREAMING_EVENT = 'PLAYER_STREAMING_EVENT',
    PLAYER_MSG_HTTP_ERROR_CODE = 'PLAYER_MSG_HTTP_ERROR_CODE',
    PLAYER_MSG_DRM_CHALLENGE_DATA = 'PLAYER_MSG_DRM_CHALLENGE_DATA',
}

/**
 * Defines a dictionary for streaming video, audio and subtitle information for various streaming scenarios.
 * @param index unsigned long Index
 * @param type Track type (audio, video, or text)
 * @param extra_info string JSON string containing all media-related info (such as height, width, and fourCC for a video stream, and bitrate, fourCC, language, and codec type for an audio stream)
 * @since 2.3
 */
export type AVPlayStreamInfo = {
    index: number;
    type: AVPlayStreamType | 'VIDEO' | 'AUDIO' | 'TEXT';
    extra_info: string;
};

/**
 * Defines a dictionary for subtitle attributes.
 * @param attr_type Attribute type string (json)
 * @param start_pos Start position
 * @param stop_pos Stop position
 * @since 2.3
 */
export type AVPlaySubtitleAttribute = {
    attr_type: string;
    start_pos: number;
    stop_pos: number;
};

/**
 * Defines callbacks for buffering and playback notifications.
 * @since 2.3
 */
export interface AVPlayPlaybackCallback {
    /**
     * Callback method for asynchronous buffering started notifications.
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     */
    onbufferingstart?(): void;

    /**
     * Callback method for asynchronous buffering progress notifications.
     * @param percent unsigned long
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     */
    onbufferingprogress?(percent: number): void;

    /**
     * Callback method for asynchronous buffering complete notifications.
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     */
    onbufferingcomplete?(): void;

    /**
     * Callback method for the current playback time.
     * @param currentTime unsigned long
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     */
    oncurrentplaytime?(currentTime: number): void;

    /**
     * Callback method for asynchronous playback finished notifications.
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     */
    onstreamcompleted?(): void;

    /**
     * Callback method for asynchronous event notifications.
     * @param eventid AVPlayEvent object
     * @param data DOMString
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     */
    onevent?(
        eventid:
            | AVPlayEvent
            | 'PLAYER_MSG_NONE'
            | 'PLAYER_MSG_RESOLUTION_CHANGED'
            | 'PLAYER_MSG_BITRATE_CHANGE'
            | 'PLAYER_MSG_FRAGMENT_INFO'
            | 'PLAYER_SPARSE_TRACK_DETECT'
            | 'PLAYER_STREAMING_EVENT'
            | 'PLAYER_MSG_HTTP_ERROR_CODE'
            | 'PLAYER_MSG_DRM_CHALLENGE_DATA',
        data: string,
    ): void;

    /**
     * Callback method for AVPlay error notifications.
     * @param eventid AVPlayError object
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     */
    onerror?(
        eventid:
            | AVPlayError
            | 'PLAYER_ERROR_NONE'
            | 'PLAYER_ERROR_INVALID_PARAMETER'
            | 'PLAYER_ERROR_NO_SUCH_FILE'
            | 'PLAYER_ERROR_INVALID_OPERATION'
            | 'PLAYER_ERROR_SEEK_FAILED'
            | 'PLAYER_ERROR_INVALID_STATE'
            | 'PLAYER_ERROR_NOT_SUPPORTED_FILE'
            | 'PLAYER_ERROR_NOT_SUPPORTED_FORMAT'
            | 'PLAYER_ERROR_INVALID_URI'
            | 'PLAYER_ERROR_CONNECTION_FAILED'
            | 'PLAYER_ERROR_GENEREIC',
    ): void;

    /**
     * Callback method for DRM information notifications.
     * @param type AVPlayDrmType object
     * @param data drmData
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     */
    ondrmevent?(
        type: AVPlayDrmType | 'PLAYREADY' | 'EME_PLAYREADY' | 'VERIMATRIX' | 'WIDEVINE_CDM' | 'EME_WIDEVINE_CDM',
        data: object,
    ): void;

    /**
     * Callback method for asynchronous subtitle change notifications.
     * @param duration unsigned long
     * @param subtitles DOMString
     * @param type unsigned long
     * @param attributes AVPlaySubtitleAttribute "attr_type": "AttributeType:value"; "start_pos": start position as long; "stop_pos": stop position as long
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     */
    onsubtitlechange?(duration: number, subtitles: string, type: number, attributes: AVPlaySubtitleAttribute): void;
}

/**
 * AVPlay Sound Analysis Callback
 * @since 2.3
 * @note `deprecated` 2.4
 */
export interface AVPlaySoundAnalysisCallback {
    /**
     * AVPlay Sound Analysis data array
     * @since 2.3
     * @note `deprecated` 2.4
     */
    (data: number[]): void;
}

/**
 * This module defines the multimedia player functionalities provided by the Tizen Samsung TV Product API.
 * @since 2.3
 */
export interface AVPlayManager {
    /**
     * Instantiates the player object with a content URL as the input parameter.
     * @param url Content URL for playback. It can be an absolute local path or a remote URL from a network-based stream server.
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "NONE", "IDLE"
     */
    open: (url: string) => void;

    /**
     * Destroys the player object.
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "NONE", "IDLE", "READY", "PLAYING", "PAUSED"
     */
    close: () => void;

    /**
     * Prepares the media player for playback synchronously. The player must already be created with a valid URI.
     * @throw WebAPIException NotSupportedError, InvalidValuesError, InvalidAccessError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "IDLE", "READY"
     */
    prepare: () => void;

    /**
     * Prepares the media player for playback asynchronously. This method is preferred over prepare because it returns immediately and does not block the application thread during preparation.
     * When preparation is successful, the success callback is returned and the player is in READY state. If preparation fails, the error callback returns the error value.
     * When prepareAsync is used with "PREBUFFER_MODE", successCallback is invoked when prebuffering is complete, instead of when preparation is complete.
     * @param successCallback Callback method to invoke when the call is successful
     * @param errorCallback WebAPIError error type NotSupportedError, InvalidStateError, UnknownError
     * with error type InvalidValuesError, if given URL through open() is invalid. e.g., webapis.avplay.open("InvalidURL").
     * with error type InvalidAccessError, if given URL through open() is valid, but not exist or Network Issue. e.g., webapis.avplay.open("http://abc").
     * @throw WebAPIException TypeMismatchError
     * @since 2.3
     * @constraint Can be called in the following states: "IDLE", "READY"
     */
    prepareAsync: (onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Sets the display area for video content playback.
     * The 4 parameters specify the left side, top, window width, and window height based on a 1920 x 1080 resolution screen, regardless of the actual application resolution.
     * @param x Display area top-left X-coordinate. Must be less than the TV screen width.
     * @param y Display area top-left Y-coordinate. Must be less than the TV screen height.
     * @param width Display area width. Must be less than the TV screen width.
     * @param height Display area height from source image. Must be less than the source image height.
     * @throw WebAPIException with error type TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states:"IDLE", "READY", "PLAYING", "PAUSED" (when APP is using normal calling sequence , OPEN+setDisplay+PREPARE etc).
     */
    setDisplayRect: (x: number, y: number, width: number, height: number) => void;

    /**
     * Starts stream playback, or resumes stream playback after pause.
     * @throw WebAPIException NotSupportedError, InvalidStateError, UnknownError
     * @since 2.3
     * @note Adaptive streaming using TS container (for e.g. HLS) with audio sample rate changing across variants may cause audio loss.
     * @constraint Can be called in the following states: "READY", "PLAYING", "PAUSED"
     */
    play: () => void;

    /**
     * Skips playback to a specific timestamp.
     * For HTTP streaming, this method is successful even when the specified timestamp is invalid. The internal player automatically resets an out-of-range value to an in-range one.
     * @param milliseconds Timestamp to skip to
     * @param successCallback Callback method to invoke when the call is successful
     * @param errorCallback Callback method to invoke when an error occurs
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "IDLE","READY", "PLAYING" (buffered data is flushed and buffering starts over), "PAUSED"
     * During this async operation, the other API would not be allowed. So, the application needs to wait for one of both callbacks( SuccessCallback, errorCallback) before any other API call.
     * For LIVE stream case, seek position must be within DVR range. DVR range could be retrieved using GET_LIVE_DURATION property in getStreamingProperty API.
     */
    seekTo: (milliseconds: number, onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Stops the player. Call this function after the video finishes playing.
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "NONE", "IDLE", "READY", "PLAYING", "PAUSED"
     */
    stop: () => void;

    /**
     * Retrieves the current player state.
     * @returns AVPlayPlayerState "NONE", "IDLE", "READY", "PLAYING", "PAUSED".
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "NONE", "IDLE", "READY", "PLAYING", "PAUSED"
     */
    getState: () => AVPlayPlayerState | 'NONE' | 'IDLE' | 'READY' | 'PLAYING' | 'PAUSED';

    /**
     * Pauses playback. If this method is called successfully, current time updates are stopped.
     * @throw WebAPIException with error type NotSupportedError, InvalidStateError, InvalidAccessError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "PLAYING", "PAUSED"
     */
    pause: () => void;

    /**
     * Skips playback forward by a specific amount of time. The player state is unchanged.
     * Passing the optional callbacks is recommended. For best performance, ensure that the previous call to this API was successful.
     * For HTTP streaming, this method is successful even when the resulting timestamp is invalid. The internal player automatically resets an out-of-range value to an in-range one.
     * @param milliseconds Time to skip forward, in milliseconds
     * @param successCallback Callback method to invoke when the call is successful
     * @param errorCallback Callback method to invoke when an error occurs
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "READY" (when using the synchronous prepare method), "PLAYING", "PAUSED"
     * During this async operation, the other API would not be allowed. So, the application needs to wait for one of both callbacks( SuccessCallback, errorCallback) before any other API call.
     */
    jumpForward: (milliseconds: number, onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Skips playback backward by a specific amount of time. The player state is unchanged.
     * For HTTP streaming, this method is successful even when the resulting timestamp is invalid. The internal player automatically resets an out-of-range value to an in-range one.
     * @param milliseconds Time to skip backward, in milliseconds
     * @param successCallback Callback method to invoke when the call is successful
     * @param errorCallback Callback method to invoke when an error occurs
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "READY" (when using the synchronous prepare method), "PLAYING", "PAUSED"
     * During this async operation, the other API would not be allowed. So, the application needs to wait for one of both callbacks( SuccessCallback, errorCallback) before any other API call.
     */
    jumpBackward: (milliseconds: number, onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Retrieves the total media duration.
     * @returns unsigned long number Duration, in milliseconds
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states:"NONE", "IDLE", "READY", "PLAYING", "PAUSED"
     */
    getDuration: () => number;

    /**
     * Retrieves the current playback time.
     * @returns unsigned long number Current playback time, in milliseconds.
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "NONE", "IDLE", "READY", "PLAYING", "PAUSED"
     */
    getCurrentTime: () => number;

    /**
     * Sets the stream buffering timeout. When the specified amount of time has passed, the onbufferingcomplete callback is invoked, irrespective of buffering progress.
     * If not set using this method, the default buffer size is 32MB or 10 seconds of playable data, and 20 seconds time-out.
     * @param seconds Buffering timeout duration, in seconds. Depending on network conditions, 3 to 10 seconds is recommended.
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "IDLE", "READY", "PLAYING", "PAUSED"
     */
    setTimeoutForBuffering: (seconds: number) => void;

    /**
     * Sets the buffer size for the play and resume scenarios. The time buffer size must be at least 4 seconds.
     * For example, if a 10 second buffer size is set, playback can only start or resume after 10 seconds of media has accumulated in the buffer.
     * Play scenarios include user-initiated streaming playback and whenever media playback is starting for the first time.
     * Resume scenarios include resuming playback after pause or seek operations, or when lack of data causes playback rebuffering.
     * @param option "PLAYER_BUFFER_FOR_PLAY" or "PLAYER_BUFFER_FOR_RESUME"
     * @param unit "PLAYER_BUFFER_SIZE_IN_SECOND"
     * @param amount Data amount to be buffered, in seconds as specified by the unit parameter
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @note unit "PLAYER_BUFFER_SIZE_IN_BYTE" has been deprecated from Tizen version 5.0
     * @constraint Can be called in the following states: "IDLE"
     */
    setBufferingParam: (
        option: AVPlayBufferOption | 'PLAYER_BUFFER_FOR_PLAY' | 'PLAYER_BUFFER_FOR_RESUME',
        unit: AVPlayBufferSizeUnit | 'PLAYER_BUFFER_SIZE_IN_BYTE' | 'PLAYER_BUFFER_SIZE_IN_SECOND',
        amount: number,
    ) => void;

    /**
     * Sets the current playback rate. Positive parameter values play the media forwards, while negative values cause the media to play in reverse.
     *
     * The range of valid playback rates depends on the streaming protocol. If the input parameter is out of range, the player returns the PLAYER_ERROR_INVALID_PARAMETER flag.
     * @param playbackSpeed -16x, -8x, -4x, -2x, 1x, 2x, 4x, 8x, 16x
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "READY, "PLAYING", "PAUSED"
     * For the general HTTP and HTTPS, the supported playback rate is -8x ~ 8x. (Repeated seek)
     * Please refer to the specification (https://developer.samsung.com/tv/develop/specifications/general-specifications/#streaming-feature-support) for the supported range of other streaming types.
     */
    setSpeed: (playbackSpeed: number) => void;

    /**
     * Sets asynchronous callback methods for player information notifications, such as buffering progress, player information, playback mode, and DRM mode information.
     * @param playbackCallback AVPlayPlaybackCallback
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "NONE", "IDLE" (recommended), "READY", "PLAYING", "PAUSED"
     * To avoid missing necessary information, the onbufferingstart, onbufferingprogress, onbufferingcomplete, onerror, onevent, and ondrmevent listeners must be set during the "IDLE" state.
     */
    setListener: (playbackCallback: AVPlayPlaybackCallback) => void;

    /**
     * Updates the DRM information, such as SetProperties. You can change the DRM mode and run the control feature. The AVPlayDrmOperation and jsonParam parameters depend on the DRM type.
     * Please refer to the specification (https://developer.samsung.com/tv/develop/specifications/general-specifications) for the supported DRM.
     * @param drmType AVPlayDrmType {"PLAYREADY", "EME_PLAYREADY", "VERIMATRIX", "WIDEVINE_CDM", "EME_WIDEVINE_CDM"}
     * @param drmOperation AVPlayDrmOperation : String specifying the DRM operation to be performed. The valid values are depending on the DRM Types.
     * This is mainly used for setting DRM information, such as the license server, application-specific custom data, SOAP or HTTP header, the genChallenge mode, and license usage.
     * @param jsonParam string DRM parameter represented by JSON string. You can use the JSON.stringify method to generate the JSON string.
     * @returns string
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/drmplay
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, SecurityError, InvalidStateError, UnknownError
     * @since 2.3
     * @note 'GetUID' operation has been deprecated from Tizen version 5.0, rather application should use getUID() API.
     * 'Initialize' and 'Finalize' operations have been deprecated from Tizen version 5.0. Because these are being executed by avplay itself.
     * 'widevine_app_session' and 'widevine_data_type' operations have been deprecated from Tizen version 5.0. Because these are merged into "SetProperties". Please refer to setDrm() example.
     * @constraint Can be called in the following states: "IDLE"
     */
    setDrm: (
        drmType: AVPlayDrmType | 'PLAYREADY' | 'EME_PLAYREADY' | 'VERIMATRIX' | 'WIDEVINE_CDM' | 'EME_WIDEVINE_CDM',
        drmOperation:
            | AVPlayDrmOperation
            | 'SetProperties'
            | 'InstallLicense'
            | 'ProcessInitiator'
            | 'GetUID'
            | 'Initialize'
            | 'Finalize'
            | 'widevine_license_data'
            | 'widevine_app_session'
            | 'widevine_data_type',
        jsonParam: string,
    ) => string;

    /**
     * Gets the device UID. The input would be the drm type.
     * @param drmType AVPlayDrmType {"VERIMATRIX"} // only VERIMATRIX is supported AVPlayDrmType for getUID interface.
     * @returns string
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/drmplay
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, SecurityError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "NONE", "IDLE", "READY", "PLAYING", "PAUSED".
     */
    getUID: (
        drmType: AVPlayDrmType | 'PLAYREADY' | 'EME_PLAYREADY' | 'VERIMATRIX' | 'WIDEVINE_CDM' | 'EME_WIDEVINE_CDM',
    ) => string;

    /**
     * Retrieves the audio spectrum analysis result every 30 ms. You can use it for an equalizer effect video or in a PartyTV application. The spectrum is analyzed across an array of 31 bands, of which Bands[14] ~ Bands[18] generally have the largest values.
     * @param soundAnalysisCallback AVPlaySoundAnalysisCallback
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @note `deprecated` 2.4
     * @constraint Can be called in the following states: "IDLE"
     */
    setSoundAnalysisListener: (soundAnalysisCallback: AVPlaySoundAnalysisCallback) => void;

    /**
     * Unregisters the sound analysis listener.
     * @throw WebAPIException NotSupportedError, InvalidStateError, UnknownError
     * @since 2.3
     * @note `deprecated` 2.4
     * @constraint Can be called in the following states: "IDLE", "READY", "PLAYING", "PAUSED"
     */
    unsetSoundAnalysisListener: () => void;

    /**
     * Enables or disables external subtitles.
     * @param onoff Boolean value:
     * true: Subtitles are hidden
     * false: Subtitles are shown. The application does not receive any subtitle-related events.
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "IDLE", "READY" (when using the synchronous prepare method), "PLAYING", "PAUSED"
     */
    setSilentSubtitle: (onoff: boolean) => void;

    /**
     * Sets the local path for the external subtitle file. Only absolute local paths are supported. If the subtitle file is stored remotely, you must first download the file to local storage, and pass the absolute local path.
     * @param filePath Absolute local path
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "IDLE", "READY", "PLAYING", "PAUSED"
     */
    setExternalSubtitlePath: (filePath: string) => void;

    /**
     * Adjusts external subtitle synchronization with the audio and video.
     * @param position Time delay in milliseconds. The duration can be a positive or negative number; a positive delay displays the subtitles later, while a negative delay displays the subtitles sooner.
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "PLAYING", "PAUSED"
     */
    setSubtitlePosition: (position: number) => void;

    /**
     * Sets the video screen mode in the specified display area.
     * @param displayMode "PLAYER_DISPLAY_MODE_LETTER_BOX", "PLAYER_DISPLAY_MODE_FULL_SCREEN", or "PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO"
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "IDLE", "READY", "PLAYING", "PAUSED"
     */
    setDisplayMethod: (
        displayMode:
            | AVPlayDisplayMode
            | 'PLAYER_DISPLAY_MODE_LETTER_BOX'
            | 'PLAYER_DISPLAY_MODE_FULL_SCREEN'
            | 'PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO',
    ) => void;

    /**
     * Switches audio or subtitle tracks during playback.
     * @param trackType "AUDIO" or "TEXT"
     * @param trackIndex AVPlayStreamInfo index
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @note Since tizen version 5.0, the trackType "AUDIO" is supported for DASH streaming.
     * @constraint Can be called in the following states: "READY" (for Smooth Streaming only), "PLAYING", "PAUSED" (for TEXT tracks only)
     * If buffering is not complete, calling this method for an AUDIO track returns an error.
     * The trackType "TEXT" is not supported for DASH streaming.
     */
    setSelectTrack: (trackType: AVPlayStreamType | 'VIDEO' | 'AUDIO' | 'TEXT', trackIndex: number) => void;

    /**
     * Retrieves the currently-playing video, audio, or subtitle stream information, and notifies that a stream is playing.
     * @returns AVPlayStreamInfo structure containing tracktype, extraInfo and index for the current stream
     * @throw WebAPIException NotSupportedError, InvalidStateError, UnknownError
     * @since 2.3
     * @note For the adaptive streaming such as HLS, DASH and SmoothStreaming, the 'language' is same as what represented on given manifest file.
     * @constraint Can be called in the following states: "READY", "PLAYING", "PAUSED"
     */
    getCurrentStreamInfo: () => AVPlayStreamInfo;

    /**
     * Retrieves the currently-playing stream information.
     * @returns AVPlayStreamInfo[] structure containing tracktype, extraInfo and Index of current stream
     * Returns information for the all available tracks in the stream. The information is returned in the following structure:
     * For video tracks:
     * "{"fourCC":"%s","Width":"%u","Height":"%u","Bit_rate":"%u"}"
     * For audio track:
     * "{"language":"%s","channels":"%d","sample_rate":"%d","bit_rate":"%d","fourCC":"%s"}"
     * For subtitle tracks:
     * "{"track_num":"%d","track_lang":"%s","subtitle_type":"%d","fourCC":"%s"}"
     * Some of them are not constant value(E.g. Video:Width, Height, and Bit_rate,  Audio:channels, sample_rate, and bit_rate) for adaptive streaming such as HLS, DASH and SmoothStreaming.
     * @throw WebAPIException NotSupportedError, InvalidStateError, UnknownError
     * @since 2.3
     * @note For the adaptive streaming such as HLS, DASH and SmoothStreaming, the 'language' is same as what represented on given manifest file.
     * @constraint Can be called in the following states: "READY" (when using the synchronous prepare method), "PLAYING", "PAUSED"
     */
    getTotalTrackInfo: () => AVPlayStreamInfo[];

    /**
     * Sets specific feature values for HTTP, MMS, or specific streaming engine (Smooth Streaming, HLS, DASH, DivX Plus Streaming, or Widevine). The available streaming properties depend on the streaming protocol or engine.
     * Use the CUSTOM_MESSAGE property for streaming engine or CP-specific settings.
     * @param propertyType "COOKIE", "USER_AGENT", "PREBUFFER_MODE" , "ADAPTIVE_INFO", "SET_MODE_4K", "PROPERTY_HD_AUDIO", "LISTEN_SPARSE_TRACK", "WIDEVINE", "USE_VIDEOMIXER", "SET_MIXEDFRAME", "PORTRAIT_MODE"
     * @param propertyParam Value according to the propertyType. e.g. "ADAPTIVE_INFO" PropetyTypes are "BITRATES", "STARTBITRATE", "SKIPBITRATE".
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @note "USE_VIDEOMIXER", "SET_MIXEDFRAME" are only for product B2B and available from Tizen 2.4 onwards.
     * "PORTRAIT_MODE" is only for product B2B and available from Tizen 3.0 onwards.
     * "WIDEVINE" unit has been deprecated from Tizen version 4.0
     * "PROPERTY_HD_AUDIO" unit has been deprecated from Tizen version 2.4
     * @constraint Can be called in the following states: "IDLE"
     * "READY", "PLAYING", "PAUSED" is valid only for SET_MIXEDFRAME.
     */
    setStreamingProperty: (
        propertyType:
            | AVPlayStreamingPropertyType
            | 'COOKIE'
            | 'USER_AGENT'
            | 'PREBUFFER_MODE'
            | 'ADAPTIVE_INFO'
            | 'SET_MODE_4K'
            | 'PROPERTY_HD_AUDIO'
            | 'LISTEN_SPARSE_TRACK'
            | 'IS_LIVE'
            | 'AVAILABLE_BITRATE'
            | 'GET_LIVE_DURATION'
            | 'CURRENT_BANDWIDTH'
            | 'WIDEVINE'
            | 'SET_VR360_MODE'
            | 'USE_VIDEOMIXER'
            | 'SET_MIXEDFRAME'
            | 'PORTRAIT_MODE',
        propertyParam: string,
    ) => void;

    /**
     * Retrieves a specific property value obtained by the streaming engine (Smooth Streaming, HLS, DASH, or Widevine).
     * @returns string Property value
     * @param propertyType AVPlayStreamingPropertyType { "IS_LIVE", "AVAILABLE_BITRATE", "GET_LIVE_DURATION","CURRENT_BANDWIDTH"};
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @note GET_SERVER_TIME_SCALE and GET_ABSOLUTE_SERVER_TIME: Supported for Smooth Streaming only.
     * @constraint Can be called in the following states: "READY", "PLAYING", "PAUSED"
     */
    getStreamingProperty: (
        propertyType:
            | AVPlayStreamingPropertyType
            | 'COOKIE'
            | 'USER_AGENT'
            | 'PREBUFFER_MODE'
            | 'ADAPTIVE_INFO'
            | 'SET_MODE_4K'
            | 'PROPERTY_HD_AUDIO'
            | 'LISTEN_SPARSE_TRACK'
            | 'IS_LIVE'
            | 'AVAILABLE_BITRATE'
            | 'GET_LIVE_DURATION'
            | 'CURRENT_BANDWIDTH'
            | 'WIDEVINE'
            | 'SET_VR360_MODE'
            | 'USE_VIDEOMIXER'
            | 'SET_MIXEDFRAME'
            | 'PORTRAIT_MODE',
    ) => string;

    /**
     * Retrieves the AVPlay version.
     * @returns string string current version
     * @throw WebAPIException NotSupportedError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "NONE", "IDLE", "READY", "PLAYING", "PAUSED"
     */
    getVersion: () => string;

    /**
     * Pauses the player state when the application is sent to the background. Saves the current statistics for the ongoing playback session.
     * @throw WebAPIException NotSupportedError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "READY, "PLAYING", "PAUSED"
     */
    suspend: () => void;

    /**
     * During multitasking, restores the player state when the application is resumed. For live streaming or DRM-encrypted content playback, you must check whether the streaming URL has changed or the DRM session or license has expired, and specify the new URL and DRM information as needed.
     * @param URL updated URL after suspend. If null, the stored URL is used.
     * For live streaming or DRM-encrypted content playback, in case the URL has changed or the DRM license or session has expired, checking for and passing the newest URL is recommended.
     * @param resumeTime (milliseconds) Optional. Position from which to resume playback. If 0, the stored position is used.
     * For live streaming, this parameter is not meaningful. Do not pass 0 for this parameter.
     * For DRM-encrypted content playback, if the DRM session has expired, to recreate the playback pipeline, pass 0 for this parameter.
     * @param bPrepare Optional boolean. false (default): Player sets the resume behavior automatically. true: Player does not resume automatically. The application must invoke the prepare and play methods.
     * For live streaming, this parameter is not meaningful. Do not pass true for this parameter.
     * For DRM-encrypted content playback: if the DRM session has expired, pass true for this parameter.
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "NONE", "PLAYING", "PAUSED"
     */
    restore: (URL: string, resumeTime?: number, bPrepare?: boolean) => void;

    /**
     * During multitasking, restores the player state when the application is resumed. restoreAsync is an asynchronous interface.
     * Other API, restore is a synchronous interface which blocks the application thread.
     * This method is preferred over restore because it returns immediately and does not block the application thread during its restoration.
     * When player is restored successful, the success callback is returned and player resumed the playback from the restored playback position, state, properties etc.
     * If restoration fails, the error callback returns the error value.
     * Application is required to make further calls to avplay on its success or failure callback happens.
     * For live streaming or DRM-encrypted content playback, you must check whether the streaming URL has changed or the DRM session or license has expired, and specify the new URL and DRM information as needed.
     * @param URL updated URL after suspend. If null, the stored URL is used.
     * For live streaming or DRM-encrypted content playback, in case the URL has changed or the DRM license or session has expired, checking for and passing the newest URL is recommended.
     * @param resumeTime (milliseconds) Optional. Position from which to resume playback. If 0, the stored position is used.
     * For live streaming, this parameter is not meaningful. Do not pass 0 for this parameter.
     * For DRM-encrypted content playback, if the DRM session has expired, to recreate the playback pipeline, pass 0 for this parameter.
     * @param bPrepare Optional boolean. false (default): Player sets the resume behavior automatically. true: Player does not resume automatically. The application must invoke the prepare and play methods.
     * For live streaming, this parameter is not meaningful. Do not pass true for this parameter.
     * For DRM-encrypted content playback: if the DRM session has expired, pass true for this parameter.
     * @param successCallback Callback method to invoke when the call is successful
     * @param errorCallback Callback method to invoke when an error occurs
     * @throw WebAPIException TypeMismatchError, NotSupportedError, InvalidValuesError, InvalidStateError, UnknownError
     * @since 2.3
     * @constraint Can be called in the following states: "NONE", "PLAYING", "PAUSED"
     */
    restoreAsync: (
        URL: string,
        resumeTime?: number,
        bPrepare?: boolean,
        onsuccess?: SuccessCallback,
        onerror?: ErrorCallback,
    ) => void;
}
