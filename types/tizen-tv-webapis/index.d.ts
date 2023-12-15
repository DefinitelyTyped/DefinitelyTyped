declare global {
    const webapis: Webapis;
    interface Window {
        webapis: Webapis;
    }
}

export interface Webapis {
    adinfo: AdInfoManager;
    appcommon: AppCommonManager;
    avinfo: AvInfoManager;
    avplaystore: AVPlayStoreManager;
    avplay: AVPlayManager;
    billing: BillingManager;
    network: NetworkManager;
    productinfo: ProductInfoManager;
    sso: SsoManager;
    systeminfo: SystemInfoManager;
    tvinfo: TvInfoManager;
    widgetdata: WidgetDataManager;
    WebAPIException: WebAPIException;
}
export const WebAPIException: WebAPIException;

export const adinfo: AdInfoManager;

export const appcommon: AppCommonManager;

export const avplay: AVPlayManager;

export const avplaystore: AVPlayStoreManager;

export const avinfo: AvInfoManager;

export const billing: BillingManager;

export const network: NetworkManager;

export const productinfo: ProductInfoManager;

export const sso: SsoManager;

export const systeminfo: SystemInfoManager;

export const tvinfo: TvInfoManager;

export const widgetdata: WidgetDataManager;

/**
 * This module defines the identification information for advertising functionalities provided by the Tizen Samsung TV Product API.
 *
 * @privilegeLevel Public
 *
 * @privilegeName http://developer.samsung.com/privilege/adinfo
 *
 * @since 2.4
 */
export interface AdInfoManager {
    /**
     * Retrieves the plugin version number.
     *
     * @returns Plugin version
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/adinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @version 1.0
     *
     * @since 2.4
     */
    getVersion: () => string;

    /**
     * TIFA is a randomized, non-persistent, and resettable Samsung Smart TV device identifier.
     * The personal information collected for the purpose of providing advertisement is linked to TIFA (collectively "TIFA Information").
     * TIFA shall be collected and used only for the following purposes. Any other purpose is prohibited.
     * - In-app advertisements
     * - Installation of other applications through your in-app advertisement
     * - Running another application (including apps already installed on the Samsung Smart TV), web browser or video player through your in-app advertisement.
     * - Collecting the app usage data related to the in-app advertisement (e.g. in-app subscription, in-app contents purchasement, or etc.) for the purpose of analyzing in-app advertisement attribution.
     * TIFA will be newly generated whenever user resets the TIFA, and you shall agree not to map any previous TIFA with the newly generated TIFA ("mapping" means tracking and identifying any previous TIFA with the newly generated TIFA).
     * The encrypted protocol (e.g: https) shall be used when the TIFA is sent outside of the device.
     * TIFA shall not be connected to personally-identifiable information or associated with any persistent device identifier (e.g. DUID, MAC address, etc).
     * The collection and use of the TIFA Information shall be in compliance with all applicable privacy and data protection laws and regulations including getting prior consent from the user.
     *
     * @returns ID For Advertising
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/adinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, If the application call this method when the PSID is a null value.
     *
     * @version 1.0
     *
     * @since 2.4
     */
    getTIFA: () => string;

    /**
     * Checks whether the device has limited ad tracking.
     *
     * @returns boolean value value to indicate whether limited ad tracking is set.
     * - true: Limit Ad Tracking
     * - false: Not Limit Ad Tracking
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/adinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @version 1.0
     *
     * @since 2.4
     */
    isLATEnabled: () => boolean;
}
/**
 * Defines constants for screensaver states.
 *
 * @since 2.3
 */
export enum AppCommonScreenSaverState {
    /**
     * Screensaver off
     *
     * @since 2.3
     */
    SCREEN_SAVER_OFF = 0,
    /**
     * Screensaver on
     *
     * @since 2.3
     */
    SCREEN_SAVER_ON = 1,
}

/**
 * This module defines the application information retrieval functionalities provided by the Tizen Samsung TV Product API.
 *
 * @privilegeLevel non-privilege
 *
 * @privilegeName None
 *
 * @since 2.3
 */
export interface AppCommonManager {
    /**
     * Defines constants for screensaver states.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    AppCommonScreenSaverState: {
        /**
         * Screensaver off
         *
         * @version 1.0
         *
         * @since 2.3
         */
        SCREEN_SAVER_OFF: 0;
        /**
         * Screensaver on
         *
         * @version 1.0
         *
         * @since 2.3
         */
        SCREEN_SAVER_ON: 1;
    };

    /**
     * Retrieves the plugin version number.
     *
     * @returns DOMString Plugin version
     *
     * @throws None N/A
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getVersion: () => string;

    /**
     * Sets the screensaver.
     *
     * @param state Screensaver state
     *
     * @param onsuccess Callback method to invoke when the screensaver is set successfully
     *
     * @param onerror Callback method to invoke if an error occurs
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    setScreenSaver: (
        state: AppCommonScreenSaverState,
        onsuccess?: SuccessCallback,
        onerror?: ErrorCallback,
    ) => void;
}
/**
 * This interface defines the digital mode
 *
 * @since 2.3
 */
export enum AvInfoDigitalCompMode {
    /**
     * line mode
     *
     * @since 2.3
     */
    DOLBY_DIGITAL_COMP_MODE_LINE = 0,
    /**
     * rf mode
     *
     * @since 2.3
     */
    DOLBY_DIGITAL_COMP_MODE_RF = 1,
}

/**
 * This module defines the TV audio and video settings functionalities provided by the Tizen Samsung TV Product API.
 *
 * @privilegeLevel non-privilege
 *
 * @privilegeName None
 *
 * @since 2.3
 */
export interface AvInfoManager {
    /**
     * This interface defines the digital mode
     *
     * @version 1.0
     *
     * @since 2.3
     */
    AvInfoDigitalCompMode: {
        /**
         * line mode
         *
         * @version 1.0
         *
         * @since 2.3
         */
        DOLBY_DIGITAL_COMP_MODE_LINE: 0;
        /**
         * rf mode
         *
         * @version 1.0
         *
         * @since 2.3
         */
        DOLBY_DIGITAL_COMP_MODE_RF: 1;
    };

    /**
     * This method get the plugin's version number.
     *
     * @returns return value of plugin's version
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getVersion: () => string;

    /**
     * This method get dolby digital component mode.
     *
     * @returns dolby digital component mode
     *
     * @throws WebAPIException with error type NotSupportedError, this feature doesn't be supported since 2016
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note `deprecated` 4.0
     */
    getDolbyDigitalCompMode: () => AvInfoDigitalCompMode;

    /**
     * This method is to check whether the HDR is supported or not.
     *
     * @returns return value of boolean
     * - true is support
     * - false is not support
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method
     *
     * @since 2.3
     *
     * @version 1.0
     */
    isHdrTvSupport: () => boolean;
}

/**
 * This module defines the multimedia player functionalities provided by the Tizen Samsung TV Product API.
 *
 * @privilegeLevel Non-privilege
 *
 * @privilegeName None
 *
 * @since 2.3
 */
export interface AVPlayStoreManager {
    /**
     * Creates a player instance that can be used for parallel pre-buffering. Up to 4 player instances can exist simultaneously.
     *
     * @returns AVPlayManagerObject Created AVPlayManagerObject object
     *
     * @privilegeLevel Non-privilege
     *
     * @privilegeName None
     *
     * @throws WebAPIException with error type QUOTA_EXCEEDED_ERR (Max player count reached) if there is insufficient memory to create the instance, or the number of player instances exceeds 4.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    getPlayer: () => AVPlayManager;
}
/**
 * Specifies the player state.
 *
 * - `NONE`- Player is not created
 * - `IDLE`- Player is created but not prepared
 * - `READY`- Player is ready to play media
 * - `PLAYING`- Player is playing media
 * - `PAUSED`- Player is paused
 * @since 2.3
 */
export type AVPlayPlayerState =
    | "NONE"
    | "IDLE"
    | "READY"
    | "PLAYING"
    | "PAUSED";

/**
 * Specifies display modes.
 *
 * - `PLAYER_DISPLAY_MODE_LETTER_BOX`- Letterbox mode
 * - `PLAYER_DISPLAY_MODE_FULL_SCREEN`- Full-screen mode
 * - `PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO`- Screen mode based on video dar/par info
 * @since 2.3
 */
export type AVPlayDisplayMode =
    | "PLAYER_DISPLAY_MODE_LETTER_BOX"
    | "PLAYER_DISPLAY_MODE_FULL_SCREEN"
    | "PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO";

/**
 * Specifies buffering scenarios.
 *
 * - `PLAYER_BUFFER_FOR_PLAY`- Initial buffering scenario
 * - `PLAYER_BUFFER_FOR_RESUME`- Re-buffering which might be occured after initial buffering during the playback.
 * @since 2.3
 */
export type AVPlayBufferOption =
    | "PLAYER_BUFFER_FOR_PLAY"
    | "PLAYER_BUFFER_FOR_RESUME";

/**
 * Specifies buffer size units.
 *
 * - `PLAYER_BUFFER_SIZE_IN_SECOND`- Buffer size in seconds
 * @since 2.3
 */
export type AVPlayBufferSizeUnit =
    | "PLAYER_BUFFER_SIZE_IN_BYTE"
    | "PLAYER_BUFFER_SIZE_IN_SECOND";

/**
 * Specifies parameters for various streaming protocols, such as HTTP, MMS, and adaptive streaming (Smooth Streaming, HLS, and MPEG-DASH).
 *
 * - `COOKIE:`- HTTP request cookie used to establish the session with the HTTP server. (for setStreamingProperty)
 * - `USER_AGENT:`- HTTP user agent, used in the HTTP request header. (for setStreamingProperty)
 * - `PREBUFFER_MODE:`- Property to initiate prebuffering mode. The second parameter indicates start-time for prebuffered content, in milliseconds. (for setStreamingProperty)
 * - `ADAPTIVE_INFO:`- Sets a custom streaming URL with various streaming parameters, such as "BITRATES", "STARTBITRATE", or "SKIPBITRATE" (for setStreamingProperty)
 * - `LISTEN_SPARSE_TRACK`- : For the Smooth Streaming case, configures the player to listen for a "Sparse name" configured through "propertyParam" . The sparse track name is a string. (for setStreamingProperty)
 * - `IS_LIVE:`- Whether the stream is LIVE or VOD. Applicable to all streaming types. (for getStreamingProperty)
 * - `AVAILABLE_BITRATE:`- String listing the available bit-rates for the currently-playing stream. (for getStreamingProperty)
 * - `GET_LIVE_DURATION:`- String describing the duration of live content. (for getStreamingProperty)
 * - `CURRENT_BANDWIDTH:`- String describing the current streaming bandwidth. (for getStreamingProperty)
 * - `USE_VIDEOMIXER:`- Property used for enabling/initializing video mixer feature on B2B product only( for setStreamingProperty). It should be set before setting SET_MIXEDFRAME property on the player.
 * - `SET_MIXEDFRAME:`- Property to set the position of mixed frame( for setStreamingProperty). setDisplayRect with required position on corresponding player instance to be called before setting this property.
 * - `PORTRAIT_MODE:`- Property to force the playback the video in potrait mode on B2B proudct only( for setStreamingProperty).
 * - `"ADAPTIVE_INFO"`- with attribute"FIXED_MAX_RESOLUTION=max_widthXmax_height" is available since Tizen version 5.0 and API version 4.1
 * - `"GET_LIVE_DURATION"`- is available since Tizen version 2.4
 * - `"WIDEVINE"`- property has been deprecated from Tizen version 4.0
 * - `"PROPERTY_HD_AUDIO"`- property has been deprecated from Tizen version 2.4
 * - `"SET_VR360_MODE"`- property has been deprecated from Tizen version 5.0
 * - `"SET_MODE_4K"`- property has been deprecated from Tizen version 5.0. Property "ADAPTIVE_INFO" with attribute "FIXED_MAX_RESOLUTION=max_widthXmax_height" has been available since 5.0 as an alternative.
 * @since 2.3
 */
export type AVPlayStreamingPropertyType =
    | "COOKIE"
    | "USER_AGENT"
    | "PREBUFFER_MODE"
    | "ADAPTIVE_INFO"
    | "SET_MODE_4K"
    | "PROPERTY_HD_AUDIO"
    | "LISTEN_SPARSE_TRACK"
    | "IS_LIVE"
    | "AVAILABLE_BITRATE"
    | "GET_LIVE_DURATION"
    | "CURRENT_BANDWIDTH"
    | "WIDEVINE"
    | "SET_VR360_MODE"
    | "USE_VIDEOMIXER"
    | "SET_MIXEDFRAME"
    | "PORTRAIT_MODE";

/**
 * Specifies DRM systems supported by the player.
 *
 * - `PLAYREADY`- PlayReady
 * - `EME_PLAYREADY`- PlayReady CDM (supported since Tizen 5.0)
 * - `VERIMATRIX`- Verimatrix
 * - `WIDEVINE_CDM`- Widevine Modular
 * - `EME_WIDEVINE_CDM`- Widevine Modular (supported since Tizen 5.0)
 * @since 2.3
 */
export type AVPlayDrmType =
    | "PLAYREADY"
    | "EME_PLAYREADY"
    | "VERIMATRIX"
    | "WIDEVINE_CDM"
    | "EME_WIDEVINE_CDM";

/**
 * Specifies various DRM operations.
 *
 * - `SetProperties:`- Sets DRM instance properties and initialize the DRM instance for PlayReady, Verimatrix, and Widevine CDM.
 * - `InstallLicense:`- Base64-encoded license data for PlayReady. An application shall retrieve license data using challenge data received in ondrmevent() callback.
 * - `ProcessInitiator:`- initialize the PlayReady DRM instance
 * - `widevine_license_data`- : Base64-encoded license data with given session id for Widevine CDM. An application shall retrieve license data using challenge data received in ondrmevent() callback.
 * - `'GetUID'`- operation has been deprecated from Tizen version 5.0, rather application should use getUID() API.
 * - `'Initialize'`- and 'Finalize' operations have been deprecated from Tizen version 5.0. Because these are being executed by avplay itself.
 * - `'widevine_app_session'`- and 'widevine_data_type' operations have been deprecated from Tizen version 5.0. Because these are merged into "SetProperties". Please refer to setDrm() example.
 * @since 2.3
 */
export type AVPlayDrmOperation =
    | "SetProperties"
    | "InstallLicense"
    | "ProcessInitiator"
    | "GetUID"
    | "Initialize"
    | "Finalize"
    | "widevine_license_data"
    | "widevine_app_session"
    | "widevine_data_type";

/**
 * Specifies stream types supported by the player.
 *
 * - `VIDEO`- Video track
 * - `AUDIO`- Audio track
 * - `TEXT`- Subtitle track
 * @since 2.3
 */
export type AVPlayStreamType = "VIDEO" | "AUDIO" | "TEXT";

/**
 * Specifies the player error messages.
 *
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
export type AVPlayError =
    | "PLAYER_ERROR_NONE"
    | "PLAYER_ERROR_INVALID_PARAMETER"
    | "PLAYER_ERROR_NO_SUCH_FILE"
    | "PLAYER_ERROR_INVALID_OPERATION"
    | "PLAYER_ERROR_SEEK_FAILED"
    | "PLAYER_ERROR_INVALID_STATE"
    | "PLAYER_ERROR_NOT_SUPPORTED_FILE"
    | "PLAYER_ERROR_NOT_SUPPORTED_FORMAT"
    | "PLAYER_ERROR_INVALID_URI"
    | "PLAYER_ERROR_CONNECTION_FAILED"
    | "PLAYER_ERROR_GENEREIC";

/**
 * Specifies player events.
 *
 * - `PLAYER_MSG_NONE`- Notifies that a multimedia component message was not recognized by the player
 * - `PLAYER_MSG_RESOLUTION_CHANGED`- During adaptive streaming playback, notifies that the video resolution has changed
 * - `PLAYER_MSG_BITRATE_CHANGE`- During adaptive streaming playback, notifies of a change, based on network heuristics, in the bandwidth-specific URL. The current bandwidth value is also sent.
 * - `PLAYER_SPARSE_TRACK_DETECT`- During adaptive streaming playback, notifies that a sparse track was encountered
 * - `PLAYER_STREAMING_EVENT`- Posts required streaming data
 * - `PLAYER_MSG_HTTP_ERROR_CODE`- Describes the detailed HTTP network situation information
 * - `PLAYER_MSG_DRM_CHALLENGE_DATA`- For encrypted content playback, posts the DRM challenge data
 * - `'PLAYER_MSG_FRAGMENT_INFO'`- event has been deprecated from Tizen version 2.4, because it affects the application performance.
 * @since 2.3
 */
export type AVPlayEvent =
    | "PLAYER_MSG_NONE"
    | "PLAYER_MSG_RESOLUTION_CHANGED"
    | "PLAYER_MSG_BITRATE_CHANGE"
    | "PLAYER_MSG_FRAGMENT_INFO"
    | "PLAYER_SPARSE_TRACK_DETECT"
    | "PLAYER_STREAMING_EVENT"
    | "PLAYER_MSG_HTTP_ERROR_CODE"
    | "PLAYER_MSG_DRM_CHALLENGE_DATA";

/**
 * Defines a dictionary for streaming video, audio and subtitle information for various streaming scenarios.
 *
 * @param index unsigned long Index
 *
 * @param type Track type (audio, video, or text)
 *
 * @param extra_info DOMString JSON string containing all media-related info (such as height, width, and fourCC for a video stream, and bitrate, fourCC, language, and codec type for an audio stream)
 *
 * @since 2.3
 */
export type AVPlayStreamInfo = {
    index: number;
    type: AVPlayStreamType;
    extra_info: string;
};

/**
 * Defines a dictionary for subtitle attributes.
 *
 * @param attr_type Attribute type DOMString (json)
 *
 * @param start_pos Start position
 *
 * @param stop_pos Stop position
 *
 * @since 2.3
 */
export type AVPlaySubtitleAttribute = {
    attr_type: string;
    start_pos: number;
    stop_pos: number;
};

/**
 * Defines callbacks for buffering and playback notifications.
 *
 * @since 2.3
 */
export interface AVPlayPlaybackCallback {
    /**
     * Callback method for asynchronous buffering started notifications.
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    onbufferingstart?(): void;

    /**
     * Callback method for asynchronous buffering progress notifications.
     *
     * @param percent unsigned long
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    onbufferingprogress?(percent: number): void;

    /**
     * Callback method for asynchronous buffering complete notifications.
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    onbufferingcomplete?(): void;

    /**
     * Callback method for the current playback time.
     *
     * @param currentTime unsigned long
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    oncurrentplaytime?(currentTime: number): void;

    /**
     * Callback method for asynchronous playback finished notifications.
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    onstreamcompleted?(): void;

    /**
     * Callback method for asynchronous event notifications.
     *
     * @param eventid AVPlayEvent object
     *
     * @param data DOMString
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    onevent?(eventid: AVPlayEvent, data: string): void;

    /**
     * Callback method for AVPlay error notifications.
     *
     * @param eventid AVPlayError object
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    onerror?(eventid: AVPlayError): void;

    /**
     * Callback method for DRM information notifications.
     *
     * @param type AVPlayDrmType object
     *
     * @param data drmData
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    ondrmevent?(type: AVPlayDrmType, data: object): void;

    /**
     * Callback method for asynchronous subtitle change notifications.
     *
     * @param duration unsigned long
     *
     * @param subtitles DOMString
     *
     * @param type unsigned long
     *
     * @param attributes AVPlaySubtitleAttribute "attr_type": "AttributeType:value"; "start_pos": start position as long; "stop_pos": stop position as long
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    onsubtitlechange?(
        duration: string,
        subtitles: string,
        type: string,
        attributes: AVPlaySubtitleAttribute[],
    ): void;
}

/**
 * @since 2.3
 */
export interface AVPlaySoundAnalysisCallback {
    /**
     * Required forerror handling.
     *
     * @param err WebAPIError
     *
     * @returns void
     *
     * @version 1.0
     *
     * @note `deprecated` 2.4
     *
     * @since 2.3
     */
    ongetexception(err: WebAPIError): void;

    /**
     * set for error handling.
     *
     * @param err WebAPIError
     *
     * @returns void
     *
     * @version 1.0
     *
     * @note `deprecated` 2.4
     *
     * @since 2.3
     */
    onsetexception(err: WebAPIError): void;

    /**
     * Provide the Band Array[32] having sound effect information.
     *
     * @param band long Band Array[32] having sound effect information
     *
     * @returns void
     *
     * @version 1.0
     *
     * @note `deprecated` 2.4
     *
     * @since 2.3
     */
    ongetbandsarray(band: number[]): void;
}

/**
 * This module defines the multimedia player functionalities provided by the Tizen Samsung TV Product API.
 *
 * @privilegeLevel Non-privilege
 *
 * @privilegeName None
 *
 * @since 2.3
 */
export interface AVPlayManager {
    /**
     * Instantiates the player object with a content URL as the input parameter.
     *
     * @param url Content URL for playback. It can be an absolute local path or a remote URL from a network-based stream server.
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "NONE", "IDLE"
     *
     * @since 2.3
     */
    open: (url: string) => void;

    /**
     * Destroys the player object.
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "NONE", "IDLE", "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    close: () => void;

    /**
     * Prepares the media player for playback synchronously. The player must already be created with a valid URI.
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if given URL through open() is invalid. e.g., webapis.avplay.open("InvalidURL").
     *
     * @throws WebAPIException with error type InvalidAccessError, if given URL through open() is valid, but not exist or Network Issue. e.g., webapis.avplay.open("http://abc").
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "IDLE", "READY"
     *
     * @since 2.3
     */
    prepare: () => void;

    /**
     * Prepares the media player for playback asynchronously. This method is preferred over prepare because it returns immediately and does not block the application thread during preparation.
     * When preparation is successful, the success callback is returned and the player is in READY state. If preparation fails, the error callback returns the error value.
     * When prepareAsync is used with "PREBUFFER_MODE", successCallback is invoked when prebuffering is complete, instead of when preparation is complete.
     *
     * @param successCallback Callback method to invoke when the call is successful
     *
     * @param errorCallback Callback method to invoke when an error occurs
     *
     * @param errorCallback method, with error type NotSupportedError, if this feature is not supported.
     *
     * @param errorCallback method, with error type InvalidValuesError, if given URL through open() is invalid. e.g., webapis.avplay.open("InvalidURL").
     *
     * @param errorCallback method, with error type InvalidAccessError, if given URL through open() is valid, but not exist or Network Issue. e.g., webapis.avplay.open("http://abc").
     *
     * @param errorCallback method, with error type InvalidStateError, if it is called in an invalid state.
     *
     * @param errorCallback method, with error type UnknownError, for any other error.
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "IDLE", "READY"
     *
     * @since 2.3
     */
    prepareAsync: (
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback,
    ) => void;

    /**
     * Sets the display area for video content playback.
     * The 4 parameters specify the left side, top, window width, and window height based on a 1920 x 1080 resolution screen, regardless of the actual application resolution.
     *
     * @param x Display area top-left X-coordinate. Must be less than the TV screen width.
     *
     * @param y Display area top-left Y-coordinate. Must be less than the TV screen height.
     *
     * @param width Display area width. Must be less than the TV screen width.
     *
     * @param height Display area height from source image. Must be less than the source image height.
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states:"IDLE", "READY", "PLAYING", "PAUSED" (when APP is using normal calling sequence , OPEN+setDisplay+PREPARE etc).
     *
     * @since 2.3
     */
    setDisplayRect: (
        x: number,
        y: number,
        width: number,
        height: number,
    ) => void;

    /**
     * Starts stream playback, or resumes stream playback after pause.
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @note Adaptive streaming using TS container (for e.g. HLS) with audio sample rate changing across variants may cause audio loss.
     *
     * @constraint Can be called in the following states: "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    play: () => void;

    /**
     * Skips playback to a specific timestamp.
     * For HTTP streaming, this method is successful even when the specified timestamp is invalid. The internal player automatically resets an out-of-range value to an in-range one.
     *
     * @param milliseconds Timestamp to skip to
     *
     * @param successCallback Callback method to invoke when the call is successful
     *
     * @param errorCallback Callback method to invoke when an error occurs
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "IDLE","READY", "PLAYING" (buffered data is flushed and buffering starts over), "PAUSED"
     * During this async operation, the other API would not be allowed. So, the application needs to wait for one of both callbacks( SuccessCallback, errorCallback) before any other API call.
     * For LIVE stream case, seek position must be within DVR range. DVR range could be retrieved using GET_LIVE_DURATION property in getStreamingProperty API.
     *
     * @since 2.3
     */
    seekTo: (
        milliseconds: number,
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback,
    ) => void;

    /**
     * Stops the player. Call this function after the video finishes playing.
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 3.0
     *
     * @constraint Can be called in the following states: "NONE", "IDLE", "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    stop: () => void;

    /**
     * Retrieves the current player state.
     *
     * @returns AVPlayPlayerState "NONE", "IDLE", "READY", "PLAYING", "PAUSED".
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "NONE", "IDLE", "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    getState: () => AVPlayPlayerState;

    /**
     * Pauses playback. If this method is called successfully, current time updates are stopped.
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type InvalidAccessError, if this API couldn't operate at the moment. (E.g. During the async operation such as seekTo, etc.)
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    pause: () => void;

    /**
     * Skips playback forward by a specific amount of time. The player state is unchanged.
     * Passing the optional callbacks is recommended. For best performance, ensure that the previous call to this API was successful.
     * For HTTP streaming, this method is successful even when the resulting timestamp is invalid. The internal player automatically resets an out-of-range value to an in-range one.
     *
     * @param milliseconds Time to skip forward, in milliseconds
     *
     * @param successCallback Callback method to invoke when the call is successful
     *
     * @param errorCallback Callback method to invoke when an error occurs
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "READY" (when using the synchronous prepare method), "PLAYING", "PAUSED"
     * During this async operation, the other API would not be allowed. So, the application needs to wait for one of both callbacks( SuccessCallback, errorCallback) before any other API call.
     *
     * @since 2.3
     */
    jumpForward: (
        milliseconds: number,
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback,
    ) => void;

    /**
     * Skips playback backward by a specific amount of time. The player state is unchanged.
     * For HTTP streaming, this method is successful even when the resulting timestamp is invalid. The internal player automatically resets an out-of-range value to an in-range one.
     *
     * @param milliseconds Time to skip backward, in milliseconds
     *
     * @param successCallback Callback method to invoke when the call is successful
     *
     * @param errorCallback Callback method to invoke when an error occurs
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "READY" (when using the synchronous prepare method), "PLAYING", "PAUSED"
     * During this async operation, the other API would not be allowed. So, the application needs to wait for one of both callbacks( SuccessCallback, errorCallback) before any other API call.
     *
     * @since 2.3
     */
    jumpBackward: (
        milliseconds: number,
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback,
    ) => void;

    /**
     * Retrieves the total media duration.
     *
     * @returns unsigned long number Duration, in milliseconds
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states:"NONE", "IDLE", "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    getDuration: () => number;

    /**
     * Retrieves the current playback time.
     *
     * @returns unsigned long number Current playback time, in milliseconds.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "NONE", "IDLE", "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    getCurrentTime: () => number;

    /**
     * Sets the stream buffering timeout. When the specified amount of time has passed, the onbufferingcomplete callback is invoked, irrespective of buffering progress.
     * If not set using this method, the default buffer size is 32MB or 10 seconds of playable data, and 20 seconds time-out.
     *
     * @param seconds Buffering timeout duration, in seconds. Depending on network conditions, 3 to 10 seconds is recommended.
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "IDLE", "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    setTimeoutForBuffering: (seconds: number) => void;

    /**
     * Sets the buffer size for the play and resume scenarios. The time buffer size must be at least 4 seconds.
     * For example, if a 10 second buffer size is set, playback can only start or resume after 10 seconds of media has accumulated in the buffer.
     * Play scenarios include user-initiated streaming playback and whenever media playback is starting for the first time.
     * Resume scenarios include resuming playback after pause or seek operations, or when lack of data causes playback rebuffering.
     *
     * @param option "PLAYER_BUFFER_FOR_PLAY" or "PLAYER_BUFFER_FOR_RESUME"
     *
     * @param unit "PLAYER_BUFFER_SIZE_IN_SECOND"
     *
     * @param amount Data amount to be buffered, in seconds as specified by the unit parameter
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 4.0
     *
     * @note unit "PLAYER_BUFFER_SIZE_IN_BYTE" has been deprecated from Tizen version 5.0
     *
     * @constraint Can be called in the following states: "IDLE"
     *
     * @since 2.3
     */
    setBufferingParam: (
        option: AVPlayBufferOption,
        unit: AVPlayBufferSizeUnit,
        amount: number,
    ) => void;

    /**
     * Sets the current playback rate. Positive parameter values play the media forwards, while negative values cause the media to play in reverse.
     * The range of valid playback rates depends on the streaming protocol. If the input parameter is out of range, the player returns the PLAYER_ERROR_INVALID_PARAMETER flag.
     *
     * @param playbackSpeed -16x, -8x, -4x, -2x, 1x, 2x, 4x, 8x, 16x
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "READY, "PLAYING", "PAUSED"
     * For the general HTTP and HTTPS, the supported playback rate is -8x ~ 8x. (Repeated seek)
     * Please refer to the specification (https://developer.samsung.com/tv/develop/specifications/general-specifications/#streaming-feature-support) for the supported range of other streaming types.
     *
     * @since 2.3
     */
    setSpeed: (playbackSpeed: number) => void;

    /**
     * Sets asynchronous callback methods for player information notifications, such as buffering progress, player information, playback mode, and DRM mode information.
     *
     * @param playbackCallback AVPlayPlaybackCallback
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "NONE", "IDLE" (recommended), "READY", "PLAYING", "PAUSED"
     * To avoid missing necessary information, the onbufferingstart, onbufferingprogress, onbufferingcomplete, onerror, onevent, and ondrmevent listeners must be set during the "IDLE" state.
     *
     * @since 2.3
     */
    setListener: (playbackCallback: AVPlayPlaybackCallback) => void;

    /**
     * Updates the DRM information, such as SetProperties. You can change the DRM mode and run the control feature. The AVPlayDrmOperation and jsonParam parameters depend on the DRM type.
     * Please refer to the specification (https://developer.samsung.com/tv/develop/specifications/general-specifications) for the supported DRM.
     *
     * @param drmType AVPlayDrmType {"PLAYREADY", "EME_PLAYREADY", "VERIMATRIX", "WIDEVINE_CDM", "EME_WIDEVINE_CDM"}
     *
     * @param drmOperation AVPlayDrmOperation : String specifying the DRM operation to be performed. The valid values are depending on the DRM Types.
     * This is mainly used for setting DRM information, such as the license server, application-specific custom data, SOAP or HTTP header, the genChallenge mode, and license usage.
     *
     * @param jsonParam DOMString DRM parameter represented by JSON string. You can use the JSON.stringify method to generate the JSON string.
     *
     * @returns DRMString
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/drmplay
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     * Examples of exception scenarios include an invalid DRM session, or failure to create the underlying DRM module or configuration. In these scenarios, an exception is thrown and the method call returns FALSE.
     *
     * @version 4.0
     *
     * @note 'GetUID' operation has been deprecated from Tizen version 5.0, rather application should use getUID() API.
     *
     * @note 'Initialize' and 'Finalize' operations have been deprecated from Tizen version 5.0. Because these are being executed by avplay itself.
     *
     * @note 'widevine_app_session' and 'widevine_data_type' operations have been deprecated from Tizen version 5.0. Because these are merged into "SetProperties". Please refer to setDrm() example.
     *
     * @constraint Can be called in the following states: "IDLE"
     *
     * @since 2.3
     */
    setDrm: (
        drmType: AVPlayDrmType,
        drmOperation: AVPlayDrmOperation,
        jsonParam: string,
    ) => string;

    /**
     * Gets the device UID. The input would be the drm type.
     *
     * @param drmType AVPlayDrmType {"VERIMATRIX"} // only VERIMATRIX is supported AVPlayDrmType for getUID interface.
     *
     * @returns DOMString
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/drmplay
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 4.0
     *
     * @constraint Can be called in the following states: "NONE", "IDLE", "READY", "PLAYING", "PAUSED".
     *
     * @since 2.3
     */
    getUID: (drmType: AVPlayDrmType) => string;

    /**
     * Retrieves the audio spectrum analysis result every 30 ms. You can use it for an equalizer effect video or in a PartyTV application. The spectrum is analyzed across an array of 31 bands, of which Bands[14] ~ Bands[18] generally have the largest values.
     *
     * @param soundAnalysisCallback AVPlaySoundAnalysisCallback
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @note `deprecated` 2.4
     *
     * @constraint Can be called in the following states: "IDLE"
     *
     * @since 2.3
     */
    setSoundAnalysisListener: (
        soundAnalysisCallback: AVPlaySoundAnalysisCallback,
    ) => void;

    /**
     * Unregisters the sound analysis listener.
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @note `deprecated` 2.4
     *
     * @constraint Can be called in the following states: "IDLE", "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    unsetSoundAnalysisListener: () => void;

    /**
     * Enables or disables external subtitles.
     *
     * @param onoff Boolean value:
     * - true: Subtitles are hidden
     * - false: Subtitles are shown. The application does not receive any subtitle-related events.
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "IDLE", "READY" (when using the synchronous prepare method), "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    setSilentSubtitle: (onoff: boolean) => void;

    /**
     * Sets the local path for the external subtitle file. Only absolute local paths are supported. If the subtitle file is stored remotely, you must first download the file to local storage, and pass the absolute local path.
     *
     * @param filePath Absolute local path
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "IDLE", "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    setExternalSubtitlePath: (filePath: string) => void;

    /**
     * Adjusts external subtitle synchronization with the audio and video.
     *
     * @param position Time delay in milliseconds. The duration can be a positive or negative number; a positive delay displays the subtitles later, while a negative delay displays the subtitles sooner.
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    setSubtitlePosition: (position: number) => void;

    /**
     * Sets the video screen mode in the specified display area.
     *
     * @param displayMode "PLAYER_DISPLAY_MODE_LETTER_BOX", "PLAYER_DISPLAY_MODE_FULL_SCREEN", or "PLAYER_DISPLAY_MODE_AUTO_ASPECT_RATIO"
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 4.0
     *
     * @constraint Can be called in the following states: "IDLE", "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    setDisplayMethod: (displayMode: AVPlayDisplayMode) => void;

    /**
     * Switches audio or subtitle tracks during playback.
     *
     * @param trackType "AUDIO" or "TEXT"
     *
     * @param trackIndex AVPlayStreamInfo index
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 4.0
     *
     * @note Since tizen version 5.0, the trackType "AUDIO" is supported for DASH streaming.
     *
     * @constraint The trackType "TEXT" is not supported for DASH streaming.
     *
     * @since 2.3
     */
    setSelectTrack: (trackType: AVPlayStreamType, trackIndex: number) => void;

    /**
     * Retrieves the currently-playing video, audio, or subtitle stream information, and notifies that a stream is playing.
     *
     * @returns AVPlayStreamInfo structure containing tracktype, extraInfo and index for the current stream
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @note For the adaptive streaming such as HLS, DASH and SmoothStreaming, the 'language' is same as what represented on given manifest file.
     *
     * @constraint Can be called in the following states: "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    getCurrentStreamInfo: () => AVPlayStreamInfo[];

    /**
     * Retrieves the currently-playing stream information.
     *
     * @returns AVPlayStreamInfo[] structure containing tracktype, extraInfo and Index of current stream
     * Returns information for the all available tracks in the stream. The information is returned in the following structure:
     * For video tracks:
     * "{"fourCC":"%s","Width":"%u","Height":"%u","Bit_rate":"%u"}"
     * For audio track:
     * "{"language":"%s","channels":"%d","sample_rate":"%d","bit_rate":"%d","fourCC":"%s"}"
     * For subtitle tracks:
     * "{"track_num":"%d","track_lang":"%s","subtitle_type":"%d","fourCC":"%s"}"
     * Some of them are not constant value(E.g. Video:Width, Height, and Bit_rate,Audio:channels, sample_rate, and bit_rate) for adaptive streaming such as HLS, DASH and SmoothStreaming.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @note For the adaptive streaming such as HLS, DASH and SmoothStreaming, the 'language' is same as what represented on given manifest file.
     *
     * @constraint Can be called in the following states: "READY" (when using the synchronous prepare method), "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    getTotalTrackInfo: () => AVPlayStreamInfo[];

    /**
     * Sets specific feature values for HTTP, MMS, or specific streaming engine (Smooth Streaming, HLS, DASH, DivX Plus Streaming, or Widevine). The available streaming properties depend on the streaming protocol or engine.
     * Use the CUSTOM_MESSAGE property for streaming engine or CP-specific settings.
     *
     * @param propertyType "COOKIE", "USER_AGENT", "PREBUFFER_MODE" , "ADAPTIVE_INFO", "SET_MODE_4K", "PROPERTY_HD_AUDIO", "LISTEN_SPARSE_TRACK", "WIDEVINE", "USE_VIDEOMIXER", "SET_MIXEDFRAME", "PORTRAIT_MODE"
     *
     * @param propertyParam Value according to the propertyType. e.g. "ADAPTIVE_INFO" PropetyTypes are "BITRATES", "STARTBITRATE", "SKIPBITRATE".
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 4.0
     *
     * @constraint "READY", "PLAYING", "PAUSED" is valid only for SET_MIXEDFRAME.
     *
     * @since 2.3
     */
    setStreamingProperty: (
        propertyType: AVPlayStreamingPropertyType,
        propertyParam: string,
    ) => void;

    /**
     * Retrieves a specific property value obtained by the streaming engine (Smooth Streaming, HLS, DASH, or Widevine).
     *
     * @param propertyType AVPlayStreamingPropertyType { "IS_LIVE", "AVAILABLE_BITRATE", "GET_LIVE_DURATION","CURRENT_BANDWIDTH"};
     *
     * @returns DOMString Property value
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @note GET_SERVER_TIME_SCALE and GET_ABSOLUTE_SERVER_TIME: Supported for Smooth Streaming only.
     *
     * @constraint Can be called in the following states: "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    getStreamingProperty: (propertyType: AVPlayStreamingPropertyType) => string;

    /**
     * Retrieves the AVPlay version.
     *
     * @returns DOMString string current version
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 3.0
     *
     * @constraint Can be called in the following states: "NONE", "IDLE", "READY", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    getVersion: () => string;

    /**
     * Pauses the player state when the application is sent to the background. Saves the current statistics for the ongoing playback session.
     *
     * @returns void
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "READY, "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    suspend: () => void;

    /**
     * During multitasking, restores the player state when the application is resumed. For live streaming or DRM-encrypted content playback, you must check whether the streaming URL has changed or the DRM session or license has expired, and specify the new URL and DRM information as needed.
     *
     * @param URL updated URL after suspend. If null, the stored URL is used.
     * For live streaming or DRM-encrypted content playback, in case the URL has changed or the DRM license or session has expired, checking for and passing the newest URL is recommended.
     *
     * @param resumeTime (milliseconds) Optional. Position from which to resume playback. If 0, the stored position is used.
     * For live streaming, this parameter is not meaningful. Do not pass 0 for this parameter.
     * For DRM-encrypted content playback, if the DRM session has expired, to recreate the playback pipeline, pass 0 for this parameter.
     *
     * @param bPrepare Optional boolean. false (default): Player sets the resume behavior automatically. true: Player does not resume automatically. The application must invoke the prepare and play methods.
     * For live streaming, this parameter is not meaningful. Do not pass true for this parameter.
     * For DRM-encrypted content playback: if the DRM session has expired, pass true for this parameter.
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 1.0
     *
     * @constraint Can be called in the following states: "NONE", "PLAYING", "PAUSED"
     *
     * @since 2.3
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
     *
     * @param URL updated URL after suspend. If null, the stored URL is used.
     * For live streaming or DRM-encrypted content playback, in case the URL has changed or the DRM license or session has expired, checking for and passing the newest URL is recommended.
     *
     * @param resumeTime (milliseconds) Optional. Position from which to resume playback. If 0, the stored position is used.
     * For live streaming, this parameter is not meaningful. Do not pass 0 for this parameter.
     * For DRM-encrypted content playback, if the DRM session has expired, to recreate the playback pipeline, pass 0 for this parameter.
     *
     * @param bPrepare Optional boolean. false (default): Player sets the resume behavior automatically. true: Player does not resume automatically. The application must invoke the prepare and play methods.
     * For live streaming, this parameter is not meaningful. Do not pass true for this parameter.
     * For DRM-encrypted content playback: if the DRM session has expired, pass true for this parameter.
     *
     * @param successCallback Callback method to invoke when the call is successful
     *
     * @param errorCallback Callback method to invoke when an error occurs
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if it is called in an invalid state.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @version 4.0
     *
     * @constraint Can be called in the following states: "NONE", "PLAYING", "PAUSED"
     *
     * @since 2.3
     */
    restoreAsync: (
        URL: string,
        resumeTime?: number,
        bPrepare?: boolean,
        successCallback?: SuccessCallback,
        errorCallback?: ErrorCallback,
    ) => void;
}
/**
 * Specifies billing server types.
 *
 * - `DEV`- Staging server
 * - `PRD`- Operating server
 * @since 2.4
 */
export type TVServerType = "DEV" | "PRD";

/**
 * Specifies product types for the purchase history.
 *
 * - `ALL`- All product types. This type is not supported since 2019 product.
 * - `SUBSCRIPTION`- Subscription products only
 * - `NON-SUBSCRIPTION`- Non-subscription products only
 * @since 2.4
 */
export type HistoryType = "ALL" | "SUBSCRIPTION" | "NON-SUBSCRIPTION";

/**
 * Defines the payment result and information.
 *
 * @since 2.4
 */
export type BillingBuyData = {
    /**
     * Payment result
     *
     * @since 2.4
     */
    payResult: string;
    /**
     * Payment information. It is same with paymentDetails param of buyItem.
     *
     * @since 2.4
     */
    payDetail: string;
};
/**
 * Defines a dictionary for product list data returned by the getProductsList API.
 *
 * @param apiResult getProductsList API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in ProductsListAPIResult format at the below.
 *
 * @since 2.4
 */
export type ProductsListData = { apiResult: string };

/**
 * Defines a dictionary for the ProductsListData dictionary apiResult parameter.
 *
 * @param CPStatus DPI result code. Returns "100000" on success and other codes on failure.
 *
 * @param CPResult Optional additional message:
 * - "EOF" Last page of the product list
 * - "hasNext:TRUE" Product list has further pages
 * - Other error message, depending on the DPI result code
 *
 * @param TotalCount Total number of invoices
 *
 * @param CheckValue Security check value
 *
 * @param ItemDetails Optional dictionary in JSON format
 *
 * @since 2.4
 */
export type ProductsListAPIResult = {
    CPStatus: string;
    CPResult: string;
    TotalCount: number;
    CheckValue: string;
    ItemDetails: ItemDetails;
};

/**
 * Defines a dictionary for the ProductsListAPIResult dictionary 'ItemDetails' parameter.
 *
 * @param Seq Sequence number (1 ~ TotalCount).
 *
 * @param ItemID Product ID
 *
 * @param ItemTitle Product name
 *
 * @param ItemType Product type:
 * - "1": CONSUMABLE
 * - "2": NON-CONSUMABLE
 * - "3": LIMITED-PERIOD
 * - "4": SUBSCRIPTION
 *
 * @param Period Limited period product duration, in minutes
 *
 * @param Price Product price, in "xxxx.yy" format
 *
 * @param CurrencyID Currency code
 *
 * @param SubscriptionInfo Subscription information. Mandatory for subscription products.
 *
 * @since 2.4
 */
export type ItemDetails = {
    Seq: number;
    ItemID: string;
    ItemTitle: string;
    ItemType: number;
    Period: number;
    Price: number;
    CurrencyID: string;
    SubscriptionInfo: ProductSubscriptionInfo;
};

/**
 * Defines a dictionary for the ItemDetails dictionary 'SubscriptionInfo' parameter.
 *
 * @param PaymentCyclePeriod Subscription payment period:
 * - "D": Days
 * - "W": Weeks
 * - "M": Months
 *
 * @param PaymentCycleFrq Payment cycle frequency
 *
 * @param PaymentCycle Number of payment cycles
 *
 * @since 2.4
 */
export type ProductSubscriptionInfo = {
    PaymentCyclePeriod: string;
    PaymentCycleFrq: number;
    PaymentCycle: number;
};

/**
 * Defines a dictionary for data returned by the applyInvoice API.
 *
 * @param apiResult applyInvoice API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in ApplyInvoiceAPIResult format at the below.
 *
 * @since 2.4
 */
export type ApplyInvoiceData = { apiResult: string };

/**
 * Defines a dictionary for the ApplyInvoiceData dictionary 'apiResult' parameter.
 *
 * @param CPStatus DPI result code. Returns "100000" on success and other codes on failure.
 *
 * @param CPResult Optional additional message:
 * - "SUCCESS"
 * - Other error message, depending on the DPI result code
 *
 * @param AppliedTime Time product applied, in 14-digit UTC time
 *
 * @since 2.4
 */
export type ApplyInvoiceAPIResult = {
    CPStatus: string;
    CPResult: string;
    AppliedTime: string;
};

/**
 * Defines a dictionary for data returned by the verifyInvoice API.
 *
 * @param apiResult verifyInvoice API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in VerifyInvoiceAPIResult format at the below.
 *
 * @since 2.4
 */
export type VerifyInvoiceData = { apiResult: string };

/**
 * Defines a dictionary for the VerifyInvoiceData dictionary 'apiResult' parameter.
 *
 * @param CPStatus DPI result code. Returns "100000" on success and other codes on failure.
 *
 * @param CPResult Optional additional message:
 * - "SUCCESS"
 * - Other error message, depending on the DPI result code
 *
 * @param AppID Application ID
 *
 * @param InvoiceID Invoice ID that you want to verify whether a purchase was successful
 *
 * @since 2.4
 */
export type VerifyInvoiceAPIResult = {
    CPStatus: string;
    CPResult: string;
    AppID: string;
    InvoiceID: string;
};

/**
 * Defines a dictionary for data returned by the getUserPurchaseList API.
 *
 * @param apiResult getUserPurchaseList API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in GetUserPurchaseListAPIResult format at the below.
 *
 * @since 2.4
 */
export type UserPurchaseData = { apiResult: string };

/**
 * Defines a dictionary for the UserPurchaseData dictionary 'apiResult' parameter.
 *
 * @param CPStatus It returns "100000" in success, [ErrorCode] in failure. Refer to DPI Error Code.
 *
 * @param CPResult Optional additional message:
 * - "EOF" Last page of the product list
 * - "hasNext:TRUE" Product list has further pages
 * - Other error message, depending on the DPI result code
 *
 * @param TotalCount Total number of invoices
 *
 * @param CheckValue Security check value
 *
 * @param InvoiceDetails Optional dictionary in JSON format
 *
 * @since 2.4
 */
export type GetUserPurchaseListAPIResult = {
    CPStatus: string;
    CPResult: string;
    TotalCount: number;
    CheckValue: string;
    InvoiceDetails: InvoiceDetails;
};

/**
 * Defines a dictionary for the GetUserPurchaseListAPIResult dictionary 'InvoiceDetails' parameter.
 *
 * @param Seq Sequence number (1 ~ TotalCount).
 *
 * @param InvoiceID Invoice ID of this purchase history
 *
 * @param ItemID Product ID
 *
 * @param ItemTitle Product name
 *
 * @param ItemType Product type:
 * - "1": CONSUMABLE
 * - "2": NON-CONSUMABLE
 * - "3": LIMITED-PERIOD
 * - "4": SUBSCRIPTION
 *
 * @param OrderTime Payment time, in 14-digit UTC time
 *
 * @param Period Limited period product duration, in minutes
 *
 * @param Price Product price, in "xxxx.yy" format
 *
 * @param OrderCurrencyID Currency code
 *
 * @param CancelStatus Cancellation status:
 * - "true": Sale canceled
 * - "false" : Sale ongoing
 *
 * @param AppliedStatus Product application status:
 * - "true": Applied
 * - "false": Not applied
 *
 * @param AppliedTime Time product applied, in 14-digit UTC time
 *
 * @param LimitEndTime Limited period product end time, in 14-digit UTC time
 *
 * @param RemainTime Limited period product time remaining, in seconds
 *
 * @param SubscriptionInfo Subscription information. Mandatory for subscription products.
 *
 * @since 2.4
 */
export type InvoiceDetails = {
    Seq: number;
    InvoiceID: string;
    ItemID: string;
    ItemTitle: string;
    ItemType: number;
    OrderTime: string;
    Period: number;
    Price: number;
    OrderCurrencyID: string;
    CancelStatus: boolean;
    AppliedStatus: boolean;
    AppliedTime: string;
    LimitEndTime: string;
    RemainTime: string;
    SubscriptionInfo: PurchaseSubscriptionInfo;
};

/**
 * Defines a dictionary for the InvoiceDetails dictionary 'SubscriptionInfo' parameter.
 *
 * @param SubscriptionId ID of subscription history
 *
 * @param SubsStartTime Subscription start time, in 14-digit UTC time
 *
 * @param SubsEndTime Subscription expiry time, in 14-digit UTC time
 *
 * @param SubsStatus Subscription status:
 * - "00": Active
 * - "01": Subscription expired
 * - "02": Canceled by buyer
 * - "03": Canceled for payment failure
 * - "04": Canceled by CP
 * - "05": Canceled by admin
 *
 * @since 2.4
 */
export type PurchaseSubscriptionInfo = {
    SubscriptionId: string;
    SubsStartTime: string;
    SubsEndTime: string;
    SubsStatus: string;
};

/**
 * Defines a dictionary for data returned by the getServiceCountryAvailability API.
 *
 * @param apiResult getServiceCountryAvailability API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in GetUserPurchaseListAPIResult format at the below.
 *
 * @since 2.4
 */
export type ServiceCountryAvailabilityData = { apiResult: string };

/**
 * Defines a dictionary for the ServiceCountryAvailabilityData dictionary 'apiResult' parameter.
 *
 * @param CPStatus It returns "100000" in success, [ErrorCode] in failure. Refer to DPI Error Code.
 *
 * @param CPResult Returns "Success" on success
 *
 * @param CountryAvailability List of Countries with information of service availability
 *
 * @since 2.4
 */
export type GetServiceCountryAvailabilityAPIResult = {
    CPStatus: string;
    CPResult: string;
    CountryAvailability: Countries;
};

/**
 * Defines a dictionary for the GetServiceCountryAvailabilityAPIResult dictionary 'CountryAvailability' parameter.
 *
 * @param CountryCode CountryCode to check Service Availability
 *
 * @param IsBillingSupported status :
 * - "true": Service is available
 * - "false" : Service is not available
 *
 * @since 2.4
 */
export type Countries = { CountryCode: string; IsBillingSupported: boolean };

/**
 * Defines a dictionary for subscription cancellation data returned by the cancelSubscription API.
 *
 * @param apiResult cancelSubscription API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in CancelSubscriptionAPIResult format at the below.
 *
 * @since 2.4
 */
export type CancelSubscriptionData = { apiResult: string };

/**
 * Defines a dictionary for the CancelSubscriptionData dictionary apiResult parameter.
 *
 * @param CPStatus DPI result code. Returns "100000" on success and other codes on failure.
 *
 * @param CPResult Optional additional message:
 * - "SUCCESS"
 * - Other error message, depending on the DPI result code
 *
 * @param InvoiceID Invoice ID of subscription that you want to cancel
 *
 * @param SubsCancelTime Optional time subscription canceled, in 14-digit UTC time
 *
 * @param SubsStatus Optional subscription status:
 * - "00": Active
 * - "01": Subscription expired
 * - "02": Canceled by buyer
 * - "03": Canceled for payment failure
 * - "04": Canceled by CP
 * - "05": Canceled by admin
 *
 * @since 2.4
 */
export type CancelSubscriptionAPIResult = {
    CPStatus: string;
    CPResult: string;
    InvoiceID: string;
    SubsCancelTime: string;
    SubsStatus: string;
};

/**
 * This defines data set that is coming from showRegisterPromotionalCode API.
 *
 * @param openDeepLinkResult It returns "SUCCESS" in success, "FAIL" in failure.
 *
 * @param openDeepLinkDetail It returns the detail information of coupon or gift card. It is a dictionary in JSON format, so you have to parse it to use. For more information, please refer to "PromotionalCodeDetail" at the below.
 *
 * @since 2.4
 */
export type ShowRegisterPromotionalCodeData = {
    openDeepLinkResult: string;
    openDeepLinkDetail: string;
};

/**
 * This defines data set of PromotionalCodeDetail parameter that contains ShowRegisterPromotionalCodeData dictionary.
 *
 * @param AppliedCouponCount It returns the number of applied coupon count.
 *
 * @param AppliedCouponList It returns the list of applied coupon.
 *
 * @param RegistedBenefitCount It returns the number of benefit.
 *
 * @param RegistedBenefitList It returns the list of benefit code.
 *
 * @since 2.4
 */
export type PromotionalCodeDetail = {
    AppliedCouponCount: string;
    AppliedCouponList: string;
    RegistedBenefitCount: string;
    RegistedBenefitList: string;
};

/**
 * This defines data set that is coming from ShowRegisterCreditCard API.
 *
 * @param openDeepLinkResult It returns "SUCCESS" in success, "FAIL" in failure.
 *
 * @param openDeepLinkDetail It is optional and not used now.
 *
 * @since 2.4
 */
export type ShowRegisterCreditCardData = {
    openDeepLinkResult: string;
    openDeepLinkDetail: string;
};

/**
 * This defines data set that is coming from ShowPurchasesHistory API.
 *
 * @param openDeepLinkResult It returns "SUCCESS" in success, "FAIL" in failure.
 *
 * @param openDeepLinkDetail It returns the detail information of refund or cancel. It is a dictionary in JSON format, so you have to parse it to use. For more information, please refer to "PurchaseHistoryDetail" at the below.
 *
 * @since 2.4
 */
export type ShowPurchaseHistoryData = {
    openDeepLinkResult: string;
    openDeepLinkDetail: string;
};

/**
 * This defines data set of PurchaseHistoryDetail parameter that contains ShowPurchaseHistoryData dictionary.
 *
 * @param InvoiceRefundCount It returns the number of product that user make refunded.
 *
 * @param InvoiceRefundList It returns array that contains the list of refunded invoice ID.
 *
 * @param SubscriptionCancelCount It returns the number of subscription product that user make cancelled.
 *
 * @param SubscriptionCancelList It returns array that contains the list of cancelled subscription.
 *
 * @since 2.4
 */
export type PurchaseHistoryDetail = {
    InvoiceRefundCount: string;
    InvoiceRefundList: string;
    SubscriptionCancelCount: string;
    SubscriptionCancelList: string;
};

/**
 * Defines a dictionary for data returned by the IsServiceAvailable API.
 *
 * @param apiResult IsServiceAvailable API result dictionary in JSON format. This value is JSON string type data, so Please use it by JSON parsing. After you parse this value, you can use it in ServiceAvailableAPIResult format at the below.
 *
 * @since 2.4
 */
export type ServiceAvailableData = { apiResult: string };

/**
 * Defines a dictionary for the ServiceAvailableData dictionary 'apiResult' parameter.
 *
 * @param status Returns "100000" on success and other codes on failure
 *
 * @param result Returns "Success" on success
 *
 * @param serviceYn Returns "Y" if the service is available
 *
 * @since 2.4
 */
export type ServiceAvailableAPIResult = {
    status: string;
    result: string;
    serviceYn: string;
};

/**
 * Defines the payment success callback.
 *
 * @since 2.4
 */
export interface BillingBuyDataSuccessCallback {
    /**
     * Callback method returning the payment status.
     *
     * @param data Payment status
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @version 3.0
     *
     * @since 2.4
     */
    (data: BillingBuyData): void;
}

/**
 * Defines the product list success callback.
 *
 * @since 2.4
 */
export interface BillingProductsListCallback {
    /**
     * Callback method returning the product list request status.
     *
     * @param data It includes getProductList API result. but you can't use it as it is. you have to parse it as JSON format data.
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @version 3.0
     *
     * @since 2.4
     */
    (data: ProductsListData): void;
}

/**
 * Defines the apply invoice success callback.
 *
 * @since 2.4
 */
export interface BillingApplyInvoiceCallback {
    /**
     * Callback method returning the apply invoice request status.
     *
     * @param data It includes applyInvoice API result. but you can't use it as it is. you have to parse it as JSON format data.
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @version 3.0
     *
     * @since 2.4
     */
    (data: ApplyInvoiceData): void;
}

/**
 * Defines the payment verification success callback.
 *
 * @since 2.4
 */
export interface BillingVerifyInvoiceCallback {
    /**
     * Callback method returning the payment verification request status.
     *
     * @param data It includes verifyInvoice API result. but you can't use it as it is. you have to parse it as JSON format data.
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @version 3.0
     *
     * @since 2.4
     */
    (data: VerifyInvoiceData): void;
}

/**
 * Defines the purchase history success callback.
 *
 * @since 2.4
 */
export interface BillingGetUserPurchaseListCallback {
    /**
     * Callback method returning the purchase history request status.
     *
     * @param data It includes getUserPurchaseList API result. but you can't use it as it is. you have to parse it as JSON format data.
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @version 3.0
     *
     * @since 2.4
     */
    (data: UserPurchaseData): void;
}

/**
 * Defines the Get Service Country Availability callback.
 *
 * @since 2.4
 */
export interface BillingGetServiceCountryAvailabilityCallback {
    /**
     * Callback method returning availability of country list status.
     *
     * @param data It includes getServiceCountryAvailability API result. but you can't use it as it is. you have to parse it as JSON format data.
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @version 5.5
     *
     * @since 2.4
     */
    (data: ServiceCountryAvailabilityData): void;
}

/**
 * Defines the subscription cancel success callback.
 *
 * @since 2.4
 */
export interface BillingCancelSubscriptionCallback {
    /**
     * Callback method returning the subscription cancel request status.
     *
     * @param data It includes cancelSubscription API result. but you can't use it as it is. you have to parse it as JSON format data.
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @version 3.0
     *
     * @since 2.4
     */
    (data: CancelSubscriptionData): void;
}

/**
 * This callback interface defines coupon/gift card registration success callback.
 *
 * @since 2.4
 */
export interface BillingShowRegisterPromotionalCodeCallback {
    /**
     * This method is callback parameter.
     *
     * @param data provide status
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @version 3.0
     *
     * @since 2.4
     */
    (data: ShowRegisterPromotionalCodeData): void;
}

/**
 * This callback interface defines credit card registration success callback.
 *
 * @since 2.4
 */
export interface BillingShowRegisterCreditCardCallback {
    /**
     * This method is callback parameter.
     *
     * @param data provide status
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @version 3.0
     *
     * @since 2.4
     */
    (data: ShowRegisterCreditCardData): void;
}

/**
 * This callback interface defines purchase history success callback.
 *
 * @since 2.4
 */
export interface BillingShowPurchaseHistoryCallback {
    /**
     * This method is callback parameter.
     *
     * @param data provide status
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @version 3.0
     *
     * @since 2.4
     */
    (data: ShowPurchaseHistoryData): void;
}

/**
 * Defines the service availability check success callback.
 *
 * @since 2.4
 */
export interface BillingIsServiceAvailableCallback {
    /**
     * Callback method returning the service availability check status.
     *
     * @param data It includes isServiceAvailable API result. but you can't use it as it is. you have to parse it as JSON format data.
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @version 3.0
     *
     * @since 2.4
     */
    (data: ServiceAvailableData): void;
}

/**
 * This module defines the Billing (Samsung Checkout) functionalities provided by the Tizen Samsung TV Product API.
 *
 * @privilegeLevel Public
 *
 * @privilegeName http://developer.samsung.com/privilege/billing
 *
 * @since 2.4
 */
export interface BillingManager {
    /**
     * Enables implementing the Samsung Checkout Client module within the application. After authenticating the purchase information through the application, the user can proceed to purchase payment.
     *
     * @param appId Application ID
     *
     * @param serverType Billing server type
     *
     * @param paymentDetails Payment parameters
     * OrderItemID[MANDATORY]/OrderTitle[MANDATORY]/OrderTotal[MANDATORY]/OrderCurrencyID[MANDATORY]/OrderID[OPTIONAL]/OrderCustomID[MANDATORY]
     *
     * @param onsuccess Returns "payResult" and "payDetail" if there is no internal error occurs until client to server data communication.
     * payResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * payDetail, can have additional data when it's returned, such as InvoiceID. Please refer to the development guide of "buyItem" for details
     *
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method
     * UnknownError, if other error occur, such as internal error or "billing client already running" error
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/billing
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of input parameter is not compatible with its expected type
     *
     * @throws WebAPIException with error type InvalidValuesError, if serverType contains an invalid value
     *
     * @since 2.4
     *
     * @version 1.0
     *
     * @note Since tizen version 6.0, if serverType contains an invalid value, TypeMismatchError is thrown instead of InvalidValuesError.
     *
     * @note 서버 통신 시 필요한 Secret Key가 노출되면 안됨. (SDK제약사항)
     */
    buyItem: (
        appId: string,
        serverType: TVServerType,
        paymentDetails: string,
        onsuccess: BillingBuyDataSuccessCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Retrieves the list of products registered on the Billing (DPI) server.
     *
     * @param appId Application ID
     *
     * @param countryCode TV country code
     *
     * @param pageSize Number of products retrieved per page (maximum 100)
     *
     * @param pageNumber Requested page number (1 ~ N)
     *
     * @param checkValue Security check value. Required parameters = "appId" + "countryCode"
     * The check value is used by the DPI service to verify API requests. It is a Base64 hash generated by applying the HMAC SHA256 algorithm on a concatenated string of parameters using the DPI security key.
     * You can see the example how to generate checkValue from the following Code example.
     * You can use any open library to generate the HMAC SHA256 hash. The following example uses the CryptoJS library
     *
     * @param serverType Billing server type
     *
     * @param onsuccess Returns the product list if there is no internal error occurs until client to server data communication
     * apiResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * when CPStatus value from apiResult is "100000", it means server communication is done properly and other values are valid in returns
     *
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/billing
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of input parameter is not compatible with its expected type
     *
     * @throws WebAPIException with error type InvalidValuesError, if serverType contains an invalid value
     *
     * @since 4.0
     *
     * @version 3.0
     *
     * @note Since tizen version 6.0, if serverType contains an invalid value, TypeMismatchError is thrown instead of InvalidValuesError.
     *
     * @note 서버 통신 시 필요한 Secret Key가 노출되면 안됨. (SDK제약사항)
     */
    getProductsList: (
        appId: string,
        countryCode: string,
        pageSize: string,
        pageNumber: string,
        checkValue: string,
        serverType: TVServerType,
        onsuccess: BillingProductsListCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Updates the apply status of purchase item to DPI server.
     *
     * @param appId Application ID
     *
     * @param customId Same value as "OrderCustomID" parameter for the BuyItem API (Samsung Account UID)
     *
     * @param invoiceId Invoice ID of purchased Item that you want to update apply status
     *
     * @param countryCode TV country code
     *
     * @param serverType Billing server type
     *
     * @param onsuccess Returns purchase apply status if there is no internal error occurs until client to server data communication
     * apiResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * when CPStatus value from apiResult is "100000", it means server communication is done properly and other values are valid in returns
     *
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/billing
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of input parameter is not compatible with its expected type
     *
     * @throws WebAPIException with error type InvalidValuesError, if serverType contains an invalid value
     *
     * @since 4.0
     *
     * @version 3.0
     *
     * @note Since tizen version 6.0, if serverType contains an invalid value, TypeMismatchError is thrown instead of InvalidValuesError.
     *
     * @note 서버 통신 시 필요한 Secret Key가 노출되면 안됨. (SDK제약사항)
     */
    applyInvoice: (
        appId: string,
        customId: string,
        invoiceId: string,
        countryCode: string,
        serverType: TVServerType,
        onsuccess: BillingApplyInvoiceCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Checks whether a purchase, corresponding to a specific "InvoiceID", was successful.
     *
     * @param appId Application ID
     *
     * @param customId Same value as "OrderCustomID" parameter for the BuyItem API (Samsung Account UID)
     *
     * @param invoiceId Invoice ID that you want to verify whether a purchase was successful
     *
     * @param countryCode TV country code
     *
     * @param serverType Billing server type
     *
     * @param onsuccess Returns the payment status if there is no internal error occurs until client to server data communication.
     * apiResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * when CPStatus value from apiResult is "100000", it means server communication is done properly and other values are valid in returns
     *
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/billing
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of input parameter is not compatible with its expected type
     *
     * @throws WebAPIException with error type InvalidValuesError, if serverType contains an invalid value
     *
     * @since 4.0
     *
     * @version 3.0
     *
     * @note Since tizen version 6.0, if serverType contains an invalid value, TypeMismatchError is thrown instead of InvalidValuesError.
     *
     * @note 서버 통신 시 필요한 Secret Key가 노출되면 안됨. (SDK제약사항)
     */
    verifyInvoice: (
        appId: string,
        customId: string,
        invoiceId: string,
        countryCode: string,
        serverType: TVServerType,
        onsuccess: BillingVerifyInvoiceCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Get Service Country availability for Samsung Checkout
     *
     * @param appId Application ID
     *
     * @param countryCodes to check. Multiple countrycodes available. (Add as array, only Uppercase allowed) ex) countrycodes=["DE","US","KR"]
     *
     * @param checkValue Security check value. Required parameters = "appId" + "countryCodes"
     * The check value is used by the DPI service to verify API requests. It is a Base64 hash generated by applying the HMAC SHA256 algorithm on a concatenated string of parameters using the DPI security key.
     * You can see the example how to generate checkValue from the following Code example.
     * You can use any open library to generate the HMAC SHA256 hash. The following example uses the CryptoJS library
     *
     * @param serverType Billing server type
     *
     * @param onsuccess Returns the service availability status of each country if there is no internal error occurs until client to server data communication.
     * apiResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * when CPStatus value from apiResult is "100000", it means server communication is done properly and other values are valid in returns
     *
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/billing
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of input parameter is not compatible with its expected type
     *
     * @throws WebAPIException with error type InvalidValuesError, if serverType contains an invalid value
     *
     * @since 5.5
     *
     * @version 5.5
     *
     * @note Since tizen version 6.0, if serverType contains an invalid value, TypeMismatchError is thrown instead of InvalidValuesError.
     *
     * @note 서버 통신 시 필요한 Secret Key가 노출되면 안됨. (SDK제약사항)
     */
    getServiceCountryAvailability: (
        appId: string,
        countryCodes: string[],
        checkValue: string,
        serverType: TVServerType,
        onsuccess: BillingGetServiceCountryAvailabilityCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Retrieves the user's purchase list.
     *
     * @param appId Application ID
     *
     * @param customId Same value as "OrderCustomID" parameter for the BuyItem API (Samsung Account UID)
     *
     * @param countryCode TV country code
     *
     * @param pageNumber Requested page number (1 ~ N)
     *
     * @param checkValue Security check value. Required parameters = "appId" + "customId" + "countryCode" + "ItemType" + "pageNumber"
     * ItemType, MUST use 2 as value ("all items")
     * The check value is used by the DPI service to verify API requests. It is a Base64 hash generated by applying the HMAC SHA256 algorithm on a concatenated string of parameters using the DPI security key.
     * You can see the example how to generate checkValue from the following Code example.
     * You can use any open library to generate the HMAC SHA256 hash. The following example uses the CryptoJS library
     *
     * @param serverType Billing server type
     *
     * @param onsuccess Returns the purchase list if there is no internal error occurs until client to server data communication
     * apiResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * when CPStatus value from apiResult is "100000", it means server communication is done properly and other values are valid in returns
     *
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/billing
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of input parameter is not compatible with its expected type
     *
     * @throws WebAPIException with error type InvalidValuesError, if serverType contains an invalid value
     *
     * @since 4.0
     *
     * @version 3.0
     *
     * @note Since tizen version 6.0, if serverType contains an invalid value, TypeMismatchError is thrown instead of InvalidValuesError.
     *
     * @note 서버 통신 시 필요한 Secret Key가 노출되면 안됨. (SDK제약사항)
     */
    getUserPurchaseList: (
        appId: string,
        customId: string,
        countryCode: string,
        pageNumber: string,
        checkValue: string,
        serverType: TVServerType,
        onsuccess: BillingGetUserPurchaseListCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Cancels a subscription product.
     *
     * @param appId Application ID
     *
     * @param invoiceId Invoice ID of subscription that you want to cancel
     *
     * @param customId Same value as "OrderCustomID" parameter for the BuyItem API (Samsung Account UID)
     *
     * @param countryCode TV country code
     *
     * @param serverType Billing server type
     *
     * @param onsuccess Returns the subscription cancellation status if there is no internal error occurs until client to server data communication.
     * apiResult, can still contains error when billing server confirms that the given parameters does not have expected value or have problem while processing it
     * when CPStatus value from apiResult is "100000", it means server communication is done properly and other values are valid in returns
     *
     * @param onerror Optional callback method to invoke if an error occurs before the client to server data communication.
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/billing
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of input parameter is not compatible with its expected type
     *
     * @throws WebAPIException with error type InvalidValuesError, if serverType contains an invalid value
     *
     * @since 4.0
     *
     * @version 3.0
     *
     * @note Since tizen version 6.0, if serverType contains an invalid value, TypeMismatchError is thrown instead of InvalidValuesError.
     *
     * @note 서버 통신 시 필요한 Secret Key가 노출되면 안됨. (SDK제약사항)
     */
    cancelSubscription: (
        appId: string,
        invoiceId: string,
        customId: string,
        countryCode: string,
        serverType: TVServerType,
        onsuccess: BillingCancelSubscriptionCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Checks whether the Billing server is available. However, this api will be replaced by getServiceCountryAvailability after deprecation
     *
     * @param serverType Billing server
     *
     * @param onsuccess Returns the server availability
     *
     * @param onerror Optional callback method to invoke if an internal error occurs before the client to server data communication
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/billing
     *
     * @throws WebAPIException with error type TypeMismatchError, if any of input parameter is not compatible with its expected type
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @since 4.0
     *
     * @version 3.0
     *
     * @note `deprecated` 5.5
     *
     * @note 서버 통신 시 필요한 Secret Key가 노출되면 안됨. (SDK제약사항)
     */
    isServiceAvailable: (
        serverType: TVServerType,
        onsuccess: BillingIsServiceAvailableCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Retrieves the Billing API version.
     *
     * @returns Billing API version
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/billing
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @since 4.0
     *
     * @version 3.0
     *
     * @note 서버 통신 시 필요한 Secret Key가 노출되면 안됨. (SDK제약사항)
     */
    getVersion: () => string;
}
/**
 * Defines constants for network IP modes.
 *
 * @since 2.3
 */
export enum NetworkIpMode {
    /**
     * No network IP mode configured
     *
     * @since 2.3
     */
    NONE = 0,
    /**
     * Connected to wired or wireless IPv4 network through static IP configuration
     *
     * @since 2.3
     */
    STATIC = 1,
    /**
     * Connected to wired or wireless IPv6 network through dynamic IP configuration
     *
     * @since 2.3
     */
    DYNAMIC = 2,
    /**
     * @since 2.3
     */
    AUTO = 3,
    /**
     * Connected to cellular network through fixed IP configuration
     *
     * @since 2.3
     */
    FIXED = 4,
    /**
     * No wired or wireless connection
     *
     * @since 2.3
     */
    UNKNOWN = 5,
}
/**
 * Defines constants for network connection types.
 *
 * @since 2.3
 */
export enum NetworkActiveConnectionType {
    /**
     * No network configured
     *
     * @since 2.3
     */
    DISCONNECTED = 0,
    /**
     * Connected to a Wi-Fi network.
     *
     * @since 2.3
     */
    WIFI = 1,
    /**
     * Connected to a cellular network.
     *
     * @since 2.3
     */
    CELLULAR = 2,
    /**
     * Connected to an Ethernet network.
     *
     * @since 2.3
     */
    ETHERNET = 3,
}
/**
 * Defines constants for network states.
 *
 * @since 2.3
 */
export enum NetworkState {
    /**
     * LAN cable connected
     *
     * @since 2.3
     */
    LAN_CABLE_ATTACHED = 1,
    /**
     * LAN cable disconnected
     *
     * @since 2.3
     */
    LAN_CABLE_DETACHED = 2,
    /**
     * LAN cable connection state unknown
     *
     * @since 2.3
     */
    LAN_CABLE_STATE_UNKNOWN = 3,
    /**
     * Gateway connected
     *
     * @since 2.3
     */
    GATEWAY_CONNECTED = 4,
    /**
     * Gateway disconnected
     *
     * @since 2.3
     */
    GATEWAY_DISCONNECTED = 5,
    /**
     * Wi-Fi module connected
     *
     * @since 2.3
     */
    WIFI_MODULE_STATE_ATTACHED = 6,
    /**
     * Wi-Fi module disconnected
     *
     * @since 2.3
     */
    WIFI_MODULE_STATE_DETACHED = 7,
    /**
     * Wi-Fi module connection state unknown
     *
     * @since 2.3
     */
    WIFI_MODULE_STATE_UNKNOWN = 8,
}
/**
 * Defines constants for Wi-Fi network security modes.
 *
 * @since 2.3
 */
export enum NetworkWiFiSecurityMode {
    /**
     * WEP security mode
     *
     * @since 2.3
     */
    WEP = 1,
    /**
     * PSK security mode
     *
     * @since 2.3
     */
    WPA_PSK = 2,
    /**
     * WPA2_PSK security mode
     *
     * @since 2.3
     */
    WPA2_PSK = 3,
    /**
     * EAP security mode
     *
     * @since 2.3
     */
    EAP = 4,
    /**
     * Open security mode
     *
     * @since 2.3
     */
    NONE = 5,
    /**
     * Security mode unknown
     *
     * @since 2.3
     */
    UNKNOWN = 6,
}
/**
 * Defines constants for Wi-fi network encryption types.
 *
 * @since 2.3
 */
export enum NetworkWiFiEncryptionType {
    /**
     * WEP encryption
     *
     * @since 2.3
     */
    WEP = 1,
    /**
     * TKIP encryption
     *
     * @since 2.3
     */
    TKIP = 2,
    /**
     * AES encryption
     *
     * @since 2.3
     */
    AES = 3,
    /**
     * TKIP_AES_MIXED encryption
     *
     * @since 2.3
     */
    TKIP_AES_MIXED = 4,
    /**
     * No encryption
     *
     * @since 2.3
     */
    NONE = 5,
    /**
     * Encryption type unknown
     *
     * @since 2.3
     */
    UNKNOWN = 6,
}

/**
 * Defines a listener for gateway connection state change notifications.
 *
 * @since 2.3
 */
export interface NetworkStateChangedCallback {
    /**
     * Callback method for gateway connection state change notifications.
     *
     * @param state Connection state
     *
     * @returns void
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     *
     * @since 3.0
     *
     * @version 1.0
     */
    (state: NetworkState): void;
}

/**
 * This module defines the network information retrieval functionalities provided by the Tizen Samsung TV Product API.
 *
 * @privilegeLevel Public
 *
 * @privilegeName http://developer.samsung.com/privilege/network.public
 *
 * @since 2.3
 */
export interface NetworkManager {
    /**
     * Defines constants for network connection types.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    NetworkActiveConnectionType: {
        /**
         * No network configured
         *
         * @version 1.0
         *
         * @since 2.3
         */
        DISCONNECTED: 0;
        /**
         * Connected to a Wi-Fi network.
         *
         * @version 1.0
         *
         * @since 2.3
         */
        WIFI: 1;
        /**
         * Connected to a cellular network.
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CELLULAR: 2;
        /**
         * Connected to an Ethernet network.
         *
         * @version 1.0
         *
         * @since 2.3
         */
        ETHERNET: 3;
    };
    /**
     * Defines constants for network IP modes.
     *
     * @version 1
     *
     * @since 2.3
     */
    NetworkIpMode: {
        /**
         * No network IP mode configured
         *
         * @version 1.0
         *
         * @since 2.3
         */
        NONE: 0;
        /**
         * Connected to wired or wireless IPv4 network through static IP configuration
         *
         * @version 1.0
         *
         * @since 2.3
         */
        STATIC: 1;
        /**
         * Connected to wired or wireless IPv6 network through dynamic IP configuration
         *
         * @version 1.0
         *
         * @since 2.3
         */
        DYNAMIC: 2;
        /**
         * @version 1.0
         *
         * @since 2.3
         */
        AUTO: 3;
        /**
         * Connected to cellular network through fixed IP configuration
         *
         * @version 1.0
         *
         * @since 2.3
         */
        FIXED: 4;
        /**
         * No wired or wireless connection
         *
         * @version 1.0
         *
         * @since 2.3
         */
        UNKNOWN: 5;
    };
    /**
     * Defines constants for network states.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    NetworkState: {
        /**
         * LAN cable connected
         *
         * @version 1.0
         *
         * @since 2.3
         */
        LAN_CABLE_ATTACHED: 1;
        /**
         * LAN cable disconnected
         *
         * @version 1.0
         *
         * @since 2.3
         */
        LAN_CABLE_DETACHED: 2;
        /**
         * LAN cable connection state unknown
         *
         * @version 1.0
         *
         * @since 2.3
         */
        LAN_CABLE_STATE_UNKNOWN: 3;
        /**
         * Gateway connected
         *
         * @version 1.0
         *
         * @since 2.3
         */
        GATEWAY_CONNECTED: 4;
        /**
         * Gateway disconnected
         *
         * @version 1.0
         *
         * @since 2.3
         */
        GATEWAY_DISCONNECTED: 5;
        /**
         * Wi-Fi module connected
         *
         * @version 1.0
         *
         * @since 2.3
         */
        WIFI_MODULE_STATE_ATTACHED: 6;
        /**
         * Wi-Fi module disconnected
         *
         * @version 1.0
         *
         * @since 2.3
         */
        WIFI_MODULE_STATE_DETACHED: 7;
        /**
         * Wi-Fi module connection state unknown
         *
         * @version 1.0
         *
         * @since 2.3
         */
        WIFI_MODULE_STATE_UNKNOWN: 8;
    };
    /**
     * Defines constants for Wi-Fi network security modes.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    NetworkWiFiSecurityMode: {
        /**
         * WEP security mode
         *
         * @version 1.0
         *
         * @since 2.3
         */
        WEP: 1;
        /**
         * PSK security mode
         *
         * @version 1.0
         *
         * @since 2.3
         */
        WPA_PSK: 2;
        /**
         * WPA2_PSK security mode
         *
         * @version 1.0
         *
         * @since 2.3
         */
        WPA2_PSK: 3;
        /**
         * EAP security mode
         *
         * @version 1.0
         *
         * @since 2.3
         */
        EAP: 4;
        /**
         * Open security mode
         *
         * @version 1.0
         *
         * @since 2.3
         */
        NONE: 5;
        /**
         * Security mode unknown
         *
         * @version 1.0
         *
         * @since 2.3
         */
        UNKNOWN: 6;
    };
    /**
     * Defines constants for Wi-fi network encryption types.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    NetworkWiFiEncryptionType: {
        /**
         * WEP encryption
         *
         * @version 1.0
         *
         * @since 2.3
         */
        WEP: 1;
        /**
         * TKIP encryption
         *
         * @version 1.0
         *
         * @since 2.3
         */
        TKIP: 2;
        /**
         * AES encryption
         *
         * @version 1.0
         *
         * @since 2.3
         */
        AES: 3;
        /**
         * TKIP_AES_MIXED encryption
         *
         * @version 1.0
         *
         * @since 2.3
         */
        TKIP_AES_MIXED: 4;
        /**
         * No encryption
         *
         * @version 1.0
         *
         * @since 2.3
         */
        NONE: 5;
        /**
         * Encryption type unknown
         *
         * @version 1.0
         *
         * @since 2.3
         */
        UNKNOWN: 6;
    };

    /**
     * Retrieves the TV network module version.
     *
     * @returns DOMString Network plugin module version
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, the NotSupportedError exception has been removed.
     */
    getVersion: () => string;

    /**
     * Checks whether the TV is connected to a network gateway.
     *
     * @returns Boolean value:
     * true: Gateway connected
     * false: Gateway is not connected
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    isConnectedToGateway: () => boolean;

    /**
     * Retrieves the TV's IP configuration mode.
     *
     * @returns unsigned long Network IP mode
     * - "NONE":0
     * - "STATIC": 1
     * - "DYNAMIC": 2
     * - "AUTO": 3
     * - "FIXED": 4
     * - "UNKNOWN": 5
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, the NotSupportedError exception has been removed.
     */
    getIpMode: () => NetworkIpMode;

    /**
     * Retrieves the TV's configured subnet mask address.
     *
     * @returns DOMString Subnet mask address for the currently-configured network
     * - Example: 255.255.255.0
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getSubnetMask: () => string;

    /**
     * Retrieves the TV's configured gateway address.
     *
     * @returns DOMString Gateway address for the currently-configured network
     *
     * - Example: 192.168.0.1
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getGateway: () => string;

    /**
     * Retrieves the network device's MAC address.
     *
     * @returns DOMString MAC address for the currently-configured network
     * - Example: 50:B7:A3:C2:96:11
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getMac: () => string;

    /**
     * Retrieves the TV's configured DNS address.
     *
     * @returns DOMString DNS address for the currently-configured network
     * - Example: 192.168.0.1
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getDns: () => string;

    /**
     * Retrieves the TV's configured IP address.
     *
     * @returns DOMString IP address for the currently-configured network
     * - Example: 192.168.0.11
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getIp: () => string;

    /**
     * Retrieves the TV's configured name when TV is connected to a network.
     *
     * @returns DOMString TV Name for any connected network
     * - Example: Tizen_Device
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     *
     * @since 4.0
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getTVName: () => string;

    /**
     * Retrieves the TV's currently-active connection type.
     *
     * @returns unsigned long Currently-active network connection type:
     * - "DISCONNECTED": 0
     * - "WIFI": 1
     * - "CELLULAR": 2
     * - "ETHERNET": 3
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getActiveConnectionType: () => NetworkActiveConnectionType;

    /**
     * Registers an asynchronous event listener.
     *
     * @param listener Callback method. For example: listenerID = network.addNetworkStateChangeListener(onChange);
     *
     * @returns unsigned long Application async listener ID
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if an input parameter is not compatible with its expected type, TypeMismatchError is thrown instead of NotSupportedError.
     *
     * @note Since plugin version 3.0, the NotSupportedError exception has been removed.
     */
    addNetworkStateChangeListener: (
        listener: NetworkStateChangedCallback,
    ) => number;

    /**
     * Unregisters an asynchronous event listener.
     *
     * @param listenerId ListenerID to be removed
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type InvalidValuesError, if the listenerId value is not the same as the value generated by addNetworkStateChangeListener. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if the listenerId value is not the same as the value generated by addNetworkStateChangeListener, InvalidValuesError is thrown instead of NotSupportedError.
     */
    removeNetworkStateChangeListener: (listenerId: number) => void;

    /**
     * Retrieves the Wi-Fi network SSID. Works only when the active connection type is Wi-Fi.
     *
     * @returns DOMString Wi-Fi network SSID
     * - Example: Strawbarry
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a Wi-Fi connection is not available. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getWiFiSsid: () => string;

    /**
     * Retrieves the Wi-Fi signal strength. Works only when the active connection type is Wi-Fi.
     *
     * @returns long Signal strength level. Valid values are 1 to 5. Signal strength is strongest when the value is 5.
     * - 8dBm
     * - 8 ~ -77dBm
     * - 7 ~ -66dBm
     * - 6 ~ -55dBm
     * - 5dBm
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a Wi-Fi connection is not available. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getWiFiSignalStrengthLevel: () => number;

    /**
     * Retrieves the Wi-Fi security mode. Works only when the active connection type is Wi-Fi.
     *
     * @returns unsigned long Wi-Fi security mode
     * - "WEP": 1
     * - "WPA_PSK": 2
     * - "WPA2_PSK": 3
     * - "EAP": 4
     * - "NONE": 5
     * - "UNKNOWN": 6
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a Wi-Fi connection is not available. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getWiFiSecurityMode: () => NetworkWiFiSecurityMode;

    /**
     * Retrieves the Wi-Fi encryption type. Works only when the active connection type is Wi-Fi.
     *
     * @returns unsigned long Wi-Fi encryption type
     * - "WEP": 1
     * - "TKIP": 2
     * - "AES": 3
     * - "TKIP_AES_MIXED": 4
     * - "NONE": 5
     * - "UNKNOWN": 6
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a Wi-Fi connection is not available. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getWiFiEncryptionType: () => NetworkWiFiEncryptionType;

    /**
     * Retrieves the TV's configured secondary DNS address.
     *
     * @returns DOMString Secondary DNS address
     * - Example: 192.168.0.100
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/network.public
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.1
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getSecondaryDns: () => string;

    /**
     * Sets the DHCP option 60 vendor string. Works only when the active connection type is wired. The vendor string is updated when Udhcpc is restarted or relaunched.
     *
     * @param vendorName DHCP option 60 vendor name string
     *
     * @returns void
     *
     * @privilegeLevel Partner
     *
     * @privilegeName http://developer.samsung.com/privilege/network.dhcpoption60
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     *
     * @throws WebAPIException with error type InvalidStateError, if the active connection type is Wi-Fi. (Since plugin version 3.0)
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.1
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     *
     * @note Since plugin version 3.0, if an input parameter is not compatible with its expected type, TypeMismatchError is thrown instead of NotSupportedError.
     */
    setDhcpOption60Field: (vendorName: string) => void;

    /**
     * Sets the DHCP option 60 vendor string to the default value, "udhcpc1.21.1". Works only when the active connection type is wired. The vendor string is updated when Udhcpc is restarted or relaunched.
     *
     * @returns void
     *
     * @privilegeLevel Partner
     *
     * @privilegeName http://developer.samsung.com/privilege/network.dhcpoption60
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     *
     * @throws WebAPIException with error type InvalidStateError, if the active connection type is Wi-Fi. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.1
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    removeDhcpOption60Field: () => void;

    /**
     * Retrieves the DHCP option 60 vendor string. Works only when the active connection type is wired.
     *
     * @returns DOMString Vendor-specific string. Default value is "default".
     * Example: If setDhcpOption60Field = "cisco" then getCurrentDhcpOption60Field = "cisco".
     *
     * @privilegeLevel Partner
     *
     * @privilegeName http://developer.samsung.com/privilege/network.dhcpoption60
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     *
     * @throws WebAPIException with error type InvalidStateError, if the active connection type is Wi-Fi. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.1
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    getCurrentDhcpOption60Field: () => string;

    /**
     * Retrieves the DHCP option 60 vendor string currently used by Udhcp. Works only when the active connection type is wired.
     *
     * @returns DOMString Vendor string
     * Example: If Udhcpc is running with the default string "udhcpc1.21.1", after calling setDhcpOption60Field = "cisco", checkCurrentIpWith60Field= "udhcpc1.21.1"
     *
     * @privilegeLevel Partner
     *
     * @privilegeName http://developer.samsung.com/privilege/network.dhcpoption60
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type InvalidStateError, if a network connection is not available. (Since plugin version 3.0)
     *
     * @throws WebAPIException with error type InvalidStateError, if the active connection type is Wi-Fi. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.1
     *
     * @note Since plugin version 3.0, if a network connection is not available, InvalidStateError is thrown instead of NotSupportedError.
     */
    checkCurrentIpWith60Field: () => string;
}
/**
 * Defines constants for product info configuration keys.
 *
 * @since 2.3
 */
export enum ProductInfoConfigKey {
    /**
     * Data service configuration, it can be setted as string ype with numbers
     *
     * @since 2.3
     */
    CONFIG_KEY_DATA_SERVICE = 0,
    /**
     * Service country, readonly
     *
     * @since 2.3
     */
    CONFIG_KEY_SERVICE_COUNTRY = 1,
}
/**
 * Defines constants for glasses-free 3D support.
 *
 * @since 2.3
 */
export enum ProductInfoNoGlass3dSupport {
    /**
     * Glasses-free 3D is not supported
     *
     * @since 2.3
     */
    NO_GLASS_3D_NOT_SUPPORTED = 0,
    /**
     * Glasses-free 3D is supported
     *
     * @since 2.3
     */
    NO_GLASS_3D_SUPPORTED = 1,
}
/**
 * Defines constants for infolink server types.
 *
 * @since 2.3
 */
export enum ProductInfoSiServerType {
    /**
     * Operating
     *
     * @since 2.3
     */
    SI_TYPE_OPERATIING_SERVER = 0,
    /**
     * Development
     *
     * @since 2.3
     */
    SI_TYPE_DEVELOPMENT_SERVER = 1,
    /**
     * Developing
     *
     * @since 2.3
     */
    SI_TYPE_DEVELOPING_SERVER = 2,
}

/**
 * Defines the product info configuration change callback.
 *
 * @since 2.3
 */
export interface ProductInfoConfigChangeCallback {
    /**
     * Callback method for product info configuration changes.
     *
     * @param key Key of each ProductInfo config
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @since 2.3
     *
     * @version 1.0
     */
    (key: ProductInfoConfigKey): void;
}

/**
 * This module defines the product information functionalities provided by the Tizen Samsung TV Product API.
 *
 * @privilegeLevel Public
 *
 * @privilegeName http://developer.samsung.com/privilege/productinfo
 *
 * @since 2.3
 */
export interface ProductInfoManager {
    /**
     * Defines constants for product info configuration keys.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    ProductInfoConfigKey: {
        /**
         * Data service configuration, it can be setted as string ype with numbers
         *
         * @since 2.3
         *
         * @version 1.0
         */
        CONFIG_KEY_DATA_SERVICE: 0;
        /**
         * Service country, readonly
         *
         * @since 2.3
         *
         * @version 1.0
         */
        CONFIG_KEY_SERVICE_COUNTRY: 1;
    };
    /**
     * Defines constants for glasses-free 3D support.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    ProductInfoNoGlass3dSupport: {
        /**
         * Glasses-free 3D is not supported
         *
         * @since 2.3
         *
         * @version 1.0
         */
        NO_GLASS_3D_NOT_SUPPORTED: 0;
        /**
         * Glasses-free 3D is supported
         *
         * @since 2.3
         *
         * @version 1.0
         */
        NO_GLASS_3D_SUPPORTED: 1;
    };
    /**
     * Defines constants for infolink server types.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    ProductInfoSiServerType: {
        /**
         * Operating
         *
         * @since 2.3
         *
         * @version 1.0
         */
        SI_TYPE_OPERATIING_SERVER: 0;
        /**
         * Development
         *
         * @since 2.3
         *
         * @version 1.0
         */
        SI_TYPE_DEVELOPMENT_SERVER: 1;
        /**
         * Developing
         *
         * @since 2.3
         *
         * @version 1.0
         */
        SI_TYPE_DEVELOPING_SERVER: 2;
    };

    /**
     * Retrieves the plugin version number.
     *
     * @returns Plugin version
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getVersion: () => string;

    /**
     * Retrieves the firmware information.
     *
     * @returns Firmware version
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getFirmware: () => string;

    /**
     * Retrieves the DUID.
     *
     * @returns DUID
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getDuid: () => string;

    /**
     * Retrieves the model code, such as "15_HAWKP".
     *
     * @returns Model code
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getModelCode: () => string;

    /**
     * Retrieves the model name, such as "UJS9500".
     *
     * @returns Model name
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getModel: () => string;

    /**
     * Retrieves the infolink server type.
     *
     * @returns Infolink server type
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getSmartTVServerType: () => ProductInfoSiServerType;

    /**
     * Retrieves the infolink server version, such as "T-INFOLINK2014-1002".
     *
     * @returns Infolink server version
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getSmartTVServerVersion: () => string;

    /**
     * Retrieves the tuner value from factory information.
     *
     * @returns Tuner value
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type NotSupportedError, if the device is a BD device.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getTunerEpop: () => string;

    /**
     * Checks whether the TV Soccer Mode is enabled.
     *
     * @returns Boolean value:
     * true: Enabled
     * false: Disabled
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type NotSupportedError, if the device is a BD device.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    isSoccerModeEnabled: () => boolean;

    /**
     * Checks whether TTV is supported.
     *
     * @returns Boolean value:
     * true: Supported
     * false: Not supported
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    isTtvSupported: () => boolean;

    /**
     * Checks whether UdPanel is supported.
     *
     * @returns Boolean value:
     * true: Supported
     * false: Not supported
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    isUdPanelSupported: () => boolean;

    /**
     * Checks whether 8K panel is supported.
     *
     * @returns Boolean value:
     * true: Supported
     * false: Not supported
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 4.0
     *
     * @version 3.2
     */
    is8KPanelSupported: () => boolean;

    /**
     * Retrieves the full model name, such as UN65JS9500.
     *
     * @returns Model name
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getRealModel: () => string;

    /**
     * Checks whether the product model is WALL.
     *
     * @returns Boolean value:
     * true: Wall Model
     * false: Not Wall Model
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 5.0
     *
     * @version 3.1
     */
    isWallModel: () => boolean;

    /**
     * Checks whether glasses-free 3D is supported.
     *
     * @returns NoGlass3dSupport value
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type NotSupportedError, if the device is a BD device.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getNoGlass3dSupport: () => ProductInfoNoGlass3dSupport;

    /**
     * Retrieves the local set.
     *
     * @returns LocalSet value
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getLocalSet: () => string;

    /**
     * Retrieves the value for the specified system configuration key, such as service country code.
     *
     * @param key Product info configuration key
     *
     * @returns System configuration value
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value. (Since plugin version 3.0)
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    getSystemConfig: (key: ProductInfoConfigKey) => string;

    /**
     * Sets the value for the specified system configuration key.
     *
     * @param key Product info configuration key
     *
     * @param value Value to set
     *
     * @param onsuccess Callback method to invoke when the system configuration key value is successfully set
     *
     * @param onerror Callback method to invoke if an error has occurred
     * SecurityError, if the application does not have the privilege to call this method.
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value.
     * If only setSystemConfig can set CONFIG_KEY_DATA_SERVICE or CONFIG_KEY_ACTIVE_CATEGORY (Since plugin version 3.0)
     *
     * @throws WebAPIException with error type NotSupportedError, if 'CONFIG_KEY_SERVICE_COUNTRY' is readonly (Deprecated since plugin version 3.0)
     *
     * @throws WebAPIException with error type NotSupportedError, if 'CONFIG_KEY_SHOPLOGO' is readonly (Deprecated since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    setSystemConfig: (
        key: ProductInfoConfigKey,
        value: string,
        onsuccess?: SuccessCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Registers a system configuration change listener.
     *
     * @param key Productinfo configuration key
     *
     * @param listener ProductInfoConfigChangeCallback listener
     *
     * @returns Listener ID
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value. (Since plugin version 3.0)
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    addSystemConfigChangeListener: (
        key: ProductInfoConfigKey,
        listener: ProductInfoConfigChangeCallback,
    ) => number;

    /**
     * Unregisters a system configuration change listener.
     *
     * @param listenerId ProductInfoConfigChangeCallback ID
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value. (Since plugin version 3.0)
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    removeSystemConfigChangeListener: (listenerId: number) => void;

    /**
     * Checks whether the device supports Ultra HD Premium features.
     *
     * @returns Boolean value:
     * - true: Supported
     * - false: Not supported
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/productinfo
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 3.0
     *
     * @version 1.3
     */
    isUHDAModel: () => boolean;

    /**
     * This method check whether display rotator is supported or not.
     *
     * @returns true if display rotator is supported, else false
     *
     * @privilegeLevel non-privilege
     *
     * @privilegeName N
     *
     * @throws None N/A
     *
     * @since 5.5
     *
     * @version 3.3
     */
    isDisplayRotatorSupported: () => boolean;
}
/**
 * Defines constants for login status.
 *
 * @since 2.3
 */
export enum SsoLoginState {
    /**
     * Not logged in
     *
     * @since 2.3
     */
    SSO_NOT_LOGIN = 0,
    /**
     * Logged in
     *
     * @since 2.3
     */
    SSO_LOGIN = 1,
}
/**
 * Defines a dictionary for login data.
 *
 * @param bLogin Login status
 *
 * @param id Login ID
 *
 * @param authToken Login authentication token
 *
 * @param uid Login UID
 *
 * @param guid Login GUID
 *
 * @since 2.3
 */
export type SsoData = {
    bLogin: boolean;
    id: string;
    authToken: string;
    uid: string;
    guid: string;
};

/**
 * Defines a dictionary for call success data.
 *
 * @param status Login status
 *
 * @since 2.3
 */
export type SsoCallData = { status: string };

/**
 * Defines the login success callback.
 *
 * @since 2.3
 */
export interface SsoCallDataSuccessCallback {
    /**
     * Callback method returning the login success data.
     *
     * @param data Status
     *
     * @returns void
     *
     * @version 1.0
     *
     * @since 2.3
     */
    (data: SsoCallData): void;
}

/**
 * Defines the success callback for string data.
 *
 * @since 2.3
 */
export interface SsoStringSuccessCallback {
    /**
     * Callback method returning string data.
     *
     * @param data Status
     *
     * @returns void
     *
     * @version 1.0
     *
     * @since 2.3
     */
    (data: string): void;
}

/**
 * Defines the success callback for number data.
 *
 * @since 2.3
 */
export interface SsoNumSuccessCallback {
    /**
     * Callback method returning number data.
     *
     * @param data Status
     *
     * @returns void
     *
     * @version 1.0
     *
     * @since 2.3
     */
    (data: number): void;
}

/**
 * This module defines the SSO functionalities provided by the Tizen Samsung TV Product API.
 *
 * @privilegeLevel Partner
 *
 * @privilegeName http://developer.samsung.com/privilege/sso.partner
 *
 * @since 2.3
 */
export interface SsoManager {
    /**
     * Defines constants for login status.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    SsoLoginState: {
        /**
         * Not logged in
         *
         * @since 2.3
         */
        SSO_NOT_LOGIN: 0;
        /**
         * Logged in
         *
         * @since 2.3
         */
        SSO_LOGIN: 1;
    };

    /**
     * Shows the SSO login or logout page, and returns the SSO login or logout information.
     *
     * @param widgetName Widget name
     *
     * @param onsuccess Callback method to invoke when the account page is shown
     *
     * @param onerror Callback method to invoke if an error has occurred. It provides the status, error name, and error message.
     * SecurityError, if the application does not have the privilege to call this method
     *
     * @returns void
     *
     * @privilegeLevel Partner
     *
     * @privilegeName http://developer.samsung.com/privilege/sso.partner
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    showAccountView: (
        widgetName: string,
        onsuccess: SsoCallDataSuccessCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Retrieves the plugin version number.
     *
     * @returns DOMString Version
     *
     * @privilegeLevel Partner
     *
     * @privilegeName http://developer.samsung.com/privilege/sso.partner
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getVersion: () => string;

    /**
     * Retrieves the UID.
     *
     * The UID is considered personally-identifying information and must be handled according to the privacy regulations for each country.
     * It must not be used for any purpose other than as an input parameter for the Samsung Checkout API.
     * Whenever the UID value is sent outside the TV device, a secure protocol, such as HTTPS, must be used.
     *
     * @returns DOMString UID
     *
     * @privilegeLevel Partner
     *
     * @privilegeName http://developer.samsung.com/privilege/sso.partner
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type InvalidStateError, if the user is not signed in.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getLoginUid: () => string;

    /**
     * Retrieves the SSO login status.
     *
     * @returns SsoLoginState Login state
     *
     * @privilegeLevel Partner
     *
     * @privilegeName http://developer.samsung.com/privilege/sso.partner
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getLoginStatus: () => SsoLoginState;

    /**
     * Shows the SSO account creation screen.
     *
     * @param onsuccess Callback method to invoke when the CreateAccountPage was closed. User can get number data(0).
     *
     * @param onerror Callback method to invoke if an error has occurred. It provides the status, error name, and error message.
     * SecurityError, if the application does not have the privilege to call this method.
     *
     * @returns void
     *
     * @privilegeLevel Partner
     *
     * @privilegeName http://developer.samsung.com/privilege/sso.partner
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type NotSupportedError, if this feature is not supported.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value.
     *
     * @throws WebAPIException with error type UnknownError, for any other error.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    showCreateAccountView: (
        onsuccess: SsoNumSuccessCallback,
        onerror?: ErrorCallback,
    ) => void;
}
/**
 * Object of max video resolution
 * Definition of max resolution
 * - the meaning of 'Max resolution' is that the resolution which can be decoded by a video decoder, not video output resolution.
 * - In other words, if width and height is returned as '1920' and '1088' then it means the application is allowed to decode a content up to 19201088
 *
 * @since 6.0
 */
export type SystemInfoMaxVideoResolution = {
    /**
     * width of max video resolution
     *
     * @since 6.0
     */
    width: number;
    /**
     * height of max video resolution
     *
     * @since 6.0
     */
    height: number;
    /**
     * frame rate of max video resolution
     *
     * @since 6.0
     */
    frameRate: number;
};

/**
 * This module defines the TV System state and settings functionalities provided by the Tizen Samsung TV Product API.
 *
 * @privilegeLevel Non-privilege
 *
 * @privilegeName None
 *
 * @since 6.0
 */
export interface SystemInfoManager {
    /**
     * This method retrieves the plugin's version information
     *
     * @returns value of plugin's version
     *
     * @throws None N/A
     *
     * @since 6.0
     *
     * @version 1.0
     */
    getVersion: () => string;

    /**
     * This method check whether the audio codec is supported or not
     *
     * @param audiocodec audio codec type to check
     * - "MPEG" The audio codec type for MPEG
     * - "MPEG-H" The audio codec type for MPEG-H
     * - "AC3" The audio codec type for AC3
     * - "E-AC3" The audio codec type for E-AC3
     * - "AC4" The audio codec type for AC4
     * - "TrueHD" The audio codec type for TrueHD
     * - "Vorbis" The audio codec type for Vorbis
     * - "G2Cook" The audio codec type for G2Cook
     * - "AAC" The audio codec type for AAC
     * - "HE-AAC" The audio codec type for HE-AAC
     * - "WMA" The audio codec type for WMA
     * - "ADPCM" The audio codec type for ADPCM
     * - "OPUS" The audio codec type for OPUS
     * - "PCM" tHE audio codec type for PCM
     *
     * @returns value to indicate whether the audio codec is supported or not
     * - true: supported
     * - false: unsupported
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @since 6.0
     *
     * @version 1.0
     */
    isSupportedAudioCodec: (audiocodec: string) => boolean;

    /**
     * This method check whether the video codec is supported or not
     *
     * @param videocodec video codec type to check
     * - "MPEG1" The video codec type for MPEG1
     * - "MPEG2" The video codec type for MPEG2
     * - "MPEG4" The video codec type for MPEG4
     * - "H263" The video codec type for H263
     * - "H264" The video codec type for H264
     * - "HEVC" The video codec type for HEVC
     * - "VP8" The video codec type for VP8
     * - "VP9" The video codec type for VP9
     * - "RV" The video codec type for RV
     * - "WMV" The video codec type for WMV
     * - "AVS" The video codec type for AVS
     * - "AVS_PLUS" The video codec type for AVS_PLUS
     * - "MJPEG" The video codec type for MJPEG
     * - "JPEG" The video codec type for JPEG
     * - "H264_MVC" The video codec type for H264
     * - "HEIC" The video codec type for HEIC
     * - "AVS2" The video codec type for AVS2
     * - "HEVC_VR360" The video codec type for HEVC_VR360
     * - "H264_VR360" The video codec type for H264_VR360
     * - "VP9_VR360" The video codec type for VP9_VR360
     * - "HEVC_SHVC" The video codec type for HEVC_SHVC
     * - "AV1" The video codec type for AV1
     * - "AV1_VR360" The video codec type for AV1_VR360
     *
     * @returns value to indicate whether the video codec is supported or not
     * true: supported
     * false: unsupported
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @since 6.0
     *
     * @version 1.0
     */
    isSupportedVideoCodec: (videocodec: string) => boolean;
}
/**
 * Defines constants for caption settings keys.
 *
 * @since 2.3
 */
export enum TvInfoMenuKey {
    /**
     * Caption On/Off
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_OFF = 0;
     * unsigned long CAPTION_ON = 1;
     *
     * @since 2.3
     */
    CAPTION_ONOFF_KEY = 0,
    /**
     * Caption mode. Default: Service 6
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_MODE_DEFAULT = 0;
     * unsigned long CAPTION_MODE_SERVICE1 = 1;
     * unsigned long CAPTION_MODE_SERVICE2 = 2;
     * unsigned long CAPTION_MODE_SERVICE3 = 3;
     * unsigned long CAPTION_MODE_SERVICE4 = 4;
     * unsigned long CAPTION_MODE_SERVICE5 = 5;
     * unsigned long CAPTION_MODE_SERVICE6 = 6;
     * unsigned long CAPTION_MODE_CC1 = 7;
     * unsigned long CAPTION_MODE_CC2 = 8;
     * unsigned long CAPTION_MODE_CC3 = 9;
     * unsigned long CAPTION_MODE_CC4 = 10;
     * unsigned long CAPTION_MODE_TEXT1 = 11;
     * unsigned long CAPTION_MODE_TEXT2 = 12;
     * unsigned long CAPTION_MODE_TEXT3 = 13;
     * unsigned long CAPTION_MODE_TEXT4 = 14;
     *
     * @since 2.3
     */
    CAPTION_MODE_KEY = 1,
    /**
     * Caption font size
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_SIZE_DEFAULT = 0;
     * unsigned long CAPTION_SIZE_SMALL = 1;
     * unsigned long CAPTION_SIZE_STANDARD = 2;
     * unsigned long CAPTION_SIZE_LARGE = 3;
     * unsigned long CAPTION_SIZE_EXTRA_LARGE = 4;
     *
     * @since 2.3
     */
    CAPTION_FONT_SIZE_KEY = 2,
    /**
     * Caption font style. Default: Style 6
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_FONT_DEFAULT = 0;
     * unsigned long CAPTION_FONT_STYLE0 = 1;
     * unsigned long CAPTION_FONT_STYLE1 = 2;
     * unsigned long CAPTION_FONT_STYLE2 = 3;
     * unsigned long CAPTION_FONT_STYLE3 = 4;
     * unsigned long CAPTION_FONT_STYLE4 = 5;
     * unsigned long CAPTION_FONT_STYLE5 = 6;
     * unsigned long CAPTION_FONT_STYLE6 = 7;
     *
     * @since 2.3
     */
    CAPTION_FONT_STYLE_KEY = 3,
    /**
     * Caption text foreground color
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_COLOR_DEFAULT = 0;
     * unsigned long CAPTION_COLOR_WHITE = 1;
     * unsigned long CAPTION_COLOR_BLACK = 2;
     * unsigned long CAPTION_COLOR_RED = 3;
     * unsigned long CAPTION_COLOR_GREEN = 4;
     * unsigned long CAPTION_COLOR_BLUE = 5;
     * unsigned long CAPTION_COLOR_YELLOW = 6;
     * unsigned long CAPTION_COLOR_MAGENTA = 7;
     * unsigned long CAPTION_COLOR_CYAN = 8;
     *
     * @since 2.3
     */
    CAPTION_FG_COLOR_KEY = 4,
    /**
     * Caption text foreground opacity
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_OPACITY_SOLID = 0;
     * unsigned long CAPTION_OPACITY_FLASH = 1;
     * unsigned long CAPTION_OPACITY_TRANSLUCENT = 2;
     * unsigned long CAPTION_OPACITY_TRANSPARENT = 3;
     * unsigned long CAPTION_OPACITY_DEFAULT = 4;
     * unsigned long CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5;
     * unsigned long CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6;
     *
     * @since 2.3
     */
    CAPTION_FG_OPACITY_KEY = 5,
    /**
     * Caption text background color
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_COLOR_DEFAULT = 0;
     * unsigned long CAPTION_COLOR_WHITE = 1;
     * unsigned long CAPTION_COLOR_BLACK = 2;
     * unsigned long CAPTION_COLOR_RED = 3;
     * unsigned long CAPTION_COLOR_GREEN = 4;
     * unsigned long CAPTION_COLOR_BLUE = 5;
     * unsigned long CAPTION_COLOR_YELLOW = 6;
     * unsigned long CAPTION_COLOR_MAGENTA = 7;
     * unsigned long CAPTION_COLOR_CYAN = 8;
     *
     * @since 2.3
     */
    CAPTION_BG_COLOR_KEY = 6,
    /**
     * Caption text background opacity
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_OPACITY_SOLID = 0;
     * unsigned long CAPTION_OPACITY_FLASH = 1;
     * unsigned long CAPTION_OPACITY_TRANSLUCENT = 2;
     * unsigned long CAPTION_OPACITY_TRANSPARENT = 3;
     * unsigned long CAPTION_OPACITY_DEFAULT = 4;
     * unsigned long CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5;
     * unsigned long CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6;
     *
     * @since 2.3
     */
    CAPTION_BG_OPACITY_KEY = 7,
    /**
     * Caption text edge type
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_EDGE_NONE = 0;
     * unsigned long CAPTION_EDGE_RAISED = 1;
     * unsigned long CAPTION_EDGE_DEPRESSED = 2;
     * unsigned long CAPTION_EDGE_UNIFORM = 3;
     * unsigned long CAPTION_EDGE_DROP_SHADOWED = 4;
     *
     * @since 2.3
     */
    CAPTION_EDGE_TYPE_KEY = 8,
    /**
     * Caption text edge color
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_COLOR_DEFAULT = 0;
     * unsigned long CAPTION_COLOR_WHITE = 1;
     * unsigned long CAPTION_COLOR_BLACK = 2;
     * unsigned long CAPTION_COLOR_RED = 3;
     * unsigned long CAPTION_COLOR_GREEN = 4;
     * unsigned long CAPTION_COLOR_BLUE = 5;
     * unsigned long CAPTION_COLOR_YELLOW = 6;
     * unsigned long CAPTION_COLOR_MAGENTA = 7;
     * unsigned long CAPTION_COLOR_CYAN = 8;
     *
     * @since 2.3
     */
    CAPTION_EDGE_COLOR_KEY = 9,
    /**
     * Caption text window color
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_COLOR_DEFAULT = 0;
     * unsigned long CAPTION_COLOR_WHITE = 1;
     * unsigned long CAPTION_COLOR_BLACK = 2;
     * unsigned long CAPTION_COLOR_RED = 3;
     * unsigned long CAPTION_COLOR_GREEN = 4;
     * unsigned long CAPTION_COLOR_BLUE = 5;
     * unsigned long CAPTION_COLOR_YELLOW = 6;
     * unsigned long CAPTION_COLOR_MAGENTA = 7;
     * unsigned long CAPTION_COLOR_CYAN = 8;
     *
     * @since 2.3
     */
    CAPTION_WINDOW_COLOR_KEY = 10,
    /**
     * Caption text window opacity
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_OPACITY_SOLID = 0;
     * unsigned long CAPTION_OPACITY_FLASH = 1;
     * unsigned long CAPTION_OPACITY_TRANSLUCENT = 2;
     * unsigned long CAPTION_OPACITY_TRANSPARENT = 3;
     * unsigned long CAPTION_OPACITY_DEFAULT = 4;
     * unsigned long CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5;
     * unsigned long CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6;
     *
     * @since 2.3
     */
    CAPTION_WINDOW_OPACITY_KEY = 11,
    /**
     * Focus zoom menu value
     * expected value TvInfoMenuValue
     * unsigned long OFF = 0;
     * unsigned long ON = 1;
     *
     * @since 2.3
     */
    ACCESSIBILITY_FOCUS_ZOOM = 12,
    /**
     * High Contrast menu value
     * expected value TvInfoMenuValue
     * unsigned long OFF = 0;
     * unsigned long ON = 1;
     *
     * @since 2.3
     */
    ACCESSIBILITY_HIGH_CONTRAST = 13,
    /**
     * Channel-bound apps ticker menu value
     * expected value DOMString
     * "OFF", "ON"
     *
     * @since 2.3
     */
    SMARTHUB_CHANNEL_BOUND_APPS_TICKER = 14,
    /**
     * Voice guide menu value
     * expected value TvInfoMenuValue
     * unsigned long OFF = 0;
     * unsigned long ON = 1;
     *
     * @since 2.3
     */
    VOICE_GUIDE_KEY = 15,
    /**
     * Subtitles On/Off
     * expected value TvInfoMenuValue
     * unsigned long OFF = 0;
     * unsigned long ON = 1;
     *
     * @since 2.3
     */
    SUBTITLE_ONOFF_KEY = 16,
    /**
     * Subtitle mode
     * expected value TvInfoMenuValue
     * unsigned long SUBTITLE_NORMAL = 0;
     * unsigned long SUBTITLE_HEARING_IMMPEARED = 1;
     *
     * @since 2.3
     */
    SUBTITLE_MODE_KEY = 17,
    /**
     * Primary Audio Language
     * expected value TvInfoMenuValue
     * DOMString AUDIO_LANGUAGE_CODE_AFR = "AFR";
     * DOMString AUDIO_LANGUAGE_CODE_AKA = "AKA";
     * DOMString AUDIO_LANGUAGE_CODE_AMH = "AMH";
     * DOMString AUDIO_LANGUAGE_CODE_ARA = "ARA";
     * DOMString AUDIO_LANGUAGE_CODE_ASM = "ASM";
     * DOMString AUDIO_LANGUAGE_CODE_BEN = "BEN";
     * DOMString AUDIO_LANGUAGE_CODE_BUL = "BUL";
     * DOMString AUDIO_LANGUAGE_CODE_CAT = "CAT";
     * DOMString AUDIO_LANGUAGE_CODE_CHI = "CHI";
     * DOMString AUDIO_LANGUAGE_CODE_CMN = "CMN";
     * DOMString AUDIO_LANGUAGE_CODE_CZE = "CZE";
     * DOMString AUDIO_LANGUAGE_CODE_DAG = "DAG";
     * DOMString AUDIO_LANGUAGE_CODE_DAN = "DAN";
     * DOMString AUDIO_LANGUAGE_CODE_DUT = "DUT";
     * DOMString AUDIO_LANGUAGE_CODE_ENG = "ENG";
     * DOMString AUDIO_LANGUAGE_CODE_EST = "EST";
     * DOMString AUDIO_LANGUAGE_CODE_EUS = "EUS";
     * DOMString AUDIO_LANGUAGE_CODE_EWE = "EWE";
     * DOMString AUDIO_LANGUAGE_CODE_FIN = "FIN";
     * DOMString AUDIO_LANGUAGE_CODE_FRE = "FRE";
     * DOMString AUDIO_LANGUAGE_CODE_GAA = "GAA";
     * DOMString AUDIO_LANGUAGE_CODE_GER = "GER";
     * DOMString AUDIO_LANGUAGE_CODE_GLA = "GLA";
     * DOMString AUDIO_LANGUAGE_CODE_GLG = "GLG";
     * DOMString AUDIO_LANGUAGE_CODE_GOS = "GOS";
     * DOMString AUDIO_LANGUAGE_CODE_GRE = "GRE";
     * DOMString AUDIO_LANGUAGE_CODE_GUJ = "GUJ";
     * DOMString AUDIO_LANGUAGE_CODE_HAU = "HAU";
     * DOMString AUDIO_LANGUAGE_CODE_HEB = "HEB";
     * DOMString AUDIO_LANGUAGE_CODE_HIN = "HIN";
     * DOMString AUDIO_LANGUAGE_CODE_HRV = "HRV";
     * DOMString AUDIO_LANGUAGE_CODE_HUN = "HUN";
     * DOMString AUDIO_LANGUAGE_CODE_IGB = "IGB";
     * DOMString AUDIO_LANGUAGE_CODE_IND = "IND";
     * DOMString AUDIO_LANGUAGE_CODE_IRI = "IRI";
     * DOMString AUDIO_LANGUAGE_CODE_ITA = "ITA";
     * DOMString AUDIO_LANGUAGE_CODE_JPN = "JPN";
     * DOMString AUDIO_LANGUAGE_CODE_KAN = "KAN";
     * DOMString AUDIO_LANGUAGE_CODE_KOK = "KOK";
     * DOMString AUDIO_LANGUAGE_CODE_KOR = "KOR";
     * DOMString AUDIO_LANGUAGE_CODE_LAV = "LAV";
     * DOMString AUDIO_LANGUAGE_CODE_LIT = "LIT";
     * DOMString AUDIO_LANGUAGE_CODE_MAL = "MAL";
     * DOMString AUDIO_LANGUAGE_CODE_MAO = "MAO";
     * DOMString AUDIO_LANGUAGE_CODE_MAR = "MAR";
     * DOMString AUDIO_LANGUAGE_CODE_MSA = "MSA";
     * DOMString AUDIO_LANGUAGE_CODE_NBL = "NBL";
     * DOMString AUDIO_LANGUAGE_CODE_NOR = "NOR";
     * DOMString AUDIO_LANGUAGE_CODE_NSO = "NSO";
     * DOMString AUDIO_LANGUAGE_CODE_NZI = "NZI";
     * DOMString AUDIO_LANGUAGE_CODE_ORI = "ORI";
     * DOMString AUDIO_LANGUAGE_CODE_PAN = "PAN";
     * DOMString AUDIO_LANGUAGE_CODE_PER = "PER";
     * DOMString AUDIO_LANGUAGE_CODE_POL = "POL";
     * DOMString AUDIO_LANGUAGE_CODE_POR = "POR";
     * DOMString AUDIO_LANGUAGE_CODE_QAA = "QAA";
     * DOMString AUDIO_LANGUAGE_CODE_QAB = "QAB";
     * DOMString AUDIO_LANGUAGE_CODE_QAC = "QAC";
     * DOMString AUDIO_LANGUAGE_CODE_ROM = "ROM";
     * DOMString AUDIO_LANGUAGE_CODE_RUS = "RUS";
     * DOMString AUDIO_LANGUAGE_CODE_SLK = "SLK";
     * DOMString AUDIO_LANGUAGE_CODE_SOT = "SOT";
     * DOMString AUDIO_LANGUAGE_CODE_SPA = "SPA";
     * DOMString AUDIO_LANGUAGE_CODE_SRP = "SRP";
     * DOMString AUDIO_LANGUAGE_CODE_SSW = "SSW";
     * DOMString AUDIO_LANGUAGE_CODE_SWA = "SWA";
     * DOMString AUDIO_LANGUAGE_CODE_SWE = "SWE";
     * DOMString AUDIO_LANGUAGE_CODE_TAM = "TAM";
     * DOMString AUDIO_LANGUAGE_CODE_TEL = "TEL";
     * DOMString AUDIO_LANGUAGE_CODE_THA = "THA";
     * DOMString AUDIO_LANGUAGE_CODE_TSN = "TSN";
     * DOMString AUDIO_LANGUAGE_CODE_TSO = "TSO";
     * DOMString AUDIO_LANGUAGE_CODE_TUR = "TUR";
     * DOMString AUDIO_LANGUAGE_CODE_TWI = "TWI";
     * DOMString AUDIO_LANGUAGE_CODE_UKR = "UKR";
     * DOMString AUDIO_LANGUAGE_CODE_VAL = "VAL";
     * DOMString AUDIO_LANGUAGE_CODE_VEN = "VEN";
     * DOMString AUDIO_LANGUAGE_CODE_VIE = "VIE";
     * DOMString AUDIO_LANGUAGE_CODE_WEL = "WEL";
     * DOMString AUDIO_LANGUAGE_CODE_XHO = "XHO";
     * DOMString AUDIO_LANGUAGE_CODE_XSM = "XSM";
     * DOMString AUDIO_LANGUAGE_CODE_YOR = "YOR";
     * DOMString AUDIO_LANGUAGE_CODE_YUE = "YUE";
     * DOMString AUDIO_LANGUAGE_CODE_ZHO = "ZHO";
     * DOMString AUDIO_LANGUAGE_CODE_ZUL = "ZUL";
     * Only the values that can be set in the menu can be set to webapi
     *
     * @since 2.3
     */
    PRIMARY_AUDIO_LANGUAGE_KEY = 18,
    /**
     * Secondary Audio Language
     * expected value TvInfoMenuValue
     * DOMString AUDIO_LANGUAGE_CODE_AFR = "AFR";
     * DOMString AUDIO_LANGUAGE_CODE_AKA = "AKA";
     * DOMString AUDIO_LANGUAGE_CODE_AMH = "AMH";
     * DOMString AUDIO_LANGUAGE_CODE_ARA = "ARA";
     * DOMString AUDIO_LANGUAGE_CODE_ASM = "ASM";
     * DOMString AUDIO_LANGUAGE_CODE_BEN = "BEN";
     * DOMString AUDIO_LANGUAGE_CODE_BUL = "BUL";
     * DOMString AUDIO_LANGUAGE_CODE_CAT = "CAT";
     * DOMString AUDIO_LANGUAGE_CODE_CHI = "CHI";
     * DOMString AUDIO_LANGUAGE_CODE_CMN = "CMN";
     * DOMString AUDIO_LANGUAGE_CODE_CZE = "CZE";
     * DOMString AUDIO_LANGUAGE_CODE_DAG = "DAG";
     * DOMString AUDIO_LANGUAGE_CODE_DAN = "DAN";
     * DOMString AUDIO_LANGUAGE_CODE_DUT = "DUT";
     * DOMString AUDIO_LANGUAGE_CODE_ENG = "ENG";
     * DOMString AUDIO_LANGUAGE_CODE_EST = "EST";
     * DOMString AUDIO_LANGUAGE_CODE_EUS = "EUS";
     * DOMString AUDIO_LANGUAGE_CODE_EWE = "EWE";
     * DOMString AUDIO_LANGUAGE_CODE_FIN = "FIN";
     * DOMString AUDIO_LANGUAGE_CODE_FRE = "FRE";
     * DOMString AUDIO_LANGUAGE_CODE_GAA = "GAA";
     * DOMString AUDIO_LANGUAGE_CODE_GER = "GER";
     * DOMString AUDIO_LANGUAGE_CODE_GLA = "GLA";
     * DOMString AUDIO_LANGUAGE_CODE_GLG = "GLG";
     * DOMString AUDIO_LANGUAGE_CODE_GOS = "GOS";
     * DOMString AUDIO_LANGUAGE_CODE_GRE = "GRE";
     * DOMString AUDIO_LANGUAGE_CODE_GUJ = "GUJ";
     * DOMString AUDIO_LANGUAGE_CODE_HAU = "HAU";
     * DOMString AUDIO_LANGUAGE_CODE_HEB = "HEB";
     * DOMString AUDIO_LANGUAGE_CODE_HIN = "HIN";
     * DOMString AUDIO_LANGUAGE_CODE_HRV = "HRV";
     * DOMString AUDIO_LANGUAGE_CODE_HUN = "HUN";
     * DOMString AUDIO_LANGUAGE_CODE_IGB = "IGB";
     * DOMString AUDIO_LANGUAGE_CODE_IND = "IND";
     * DOMString AUDIO_LANGUAGE_CODE_IRI = "IRI";
     * DOMString AUDIO_LANGUAGE_CODE_ITA = "ITA";
     * DOMString AUDIO_LANGUAGE_CODE_JPN = "JPN";
     * DOMString AUDIO_LANGUAGE_CODE_KAN = "KAN";
     * DOMString AUDIO_LANGUAGE_CODE_KOK = "KOK";
     * DOMString AUDIO_LANGUAGE_CODE_KOR = "KOR";
     * DOMString AUDIO_LANGUAGE_CODE_LAV = "LAV";
     * DOMString AUDIO_LANGUAGE_CODE_LIT = "LIT";
     * DOMString AUDIO_LANGUAGE_CODE_MAL = "MAL";
     * DOMString AUDIO_LANGUAGE_CODE_MAO = "MAO";
     * DOMString AUDIO_LANGUAGE_CODE_MAR = "MAR";
     * DOMString AUDIO_LANGUAGE_CODE_MSA = "MSA";
     * DOMString AUDIO_LANGUAGE_CODE_NBL = "NBL";
     * DOMString AUDIO_LANGUAGE_CODE_NOR = "NOR";
     * DOMString AUDIO_LANGUAGE_CODE_NSO = "NSO";
     * DOMString AUDIO_LANGUAGE_CODE_NZI = "NZI";
     * DOMString AUDIO_LANGUAGE_CODE_ORI = "ORI";
     * DOMString AUDIO_LANGUAGE_CODE_PAN = "PAN";
     * DOMString AUDIO_LANGUAGE_CODE_PER = "PER";
     * DOMString AUDIO_LANGUAGE_CODE_POL = "POL";
     * DOMString AUDIO_LANGUAGE_CODE_POR = "POR";
     * DOMString AUDIO_LANGUAGE_CODE_QAA = "QAA";
     * DOMString AUDIO_LANGUAGE_CODE_QAB = "QAB";
     * DOMString AUDIO_LANGUAGE_CODE_QAC = "QAC";
     * DOMString AUDIO_LANGUAGE_CODE_ROM = "ROM";
     * DOMString AUDIO_LANGUAGE_CODE_RUS = "RUS";
     * DOMString AUDIO_LANGUAGE_CODE_SLK = "SLK";
     * DOMString AUDIO_LANGUAGE_CODE_SOT = "SOT";
     * DOMString AUDIO_LANGUAGE_CODE_SPA = "SPA";
     * DOMString AUDIO_LANGUAGE_CODE_SRP = "SRP";
     * DOMString AUDIO_LANGUAGE_CODE_SSW = "SSW";
     * DOMString AUDIO_LANGUAGE_CODE_SWA = "SWA";
     * DOMString AUDIO_LANGUAGE_CODE_SWE = "SWE";
     * DOMString AUDIO_LANGUAGE_CODE_TAM = "TAM";
     * DOMString AUDIO_LANGUAGE_CODE_TEL = "TEL";
     * DOMString AUDIO_LANGUAGE_CODE_THA = "THA";
     * DOMString AUDIO_LANGUAGE_CODE_TSN = "TSN";
     * DOMString AUDIO_LANGUAGE_CODE_TSO = "TSO";
     * DOMString AUDIO_LANGUAGE_CODE_TUR = "TUR";
     * DOMString AUDIO_LANGUAGE_CODE_TWI = "TWI";
     * DOMString AUDIO_LANGUAGE_CODE_UKR = "UKR";
     * DOMString AUDIO_LANGUAGE_CODE_VAL = "VAL";
     * DOMString AUDIO_LANGUAGE_CODE_VEN = "VEN";
     * DOMString AUDIO_LANGUAGE_CODE_VIE = "VIE";
     * DOMString AUDIO_LANGUAGE_CODE_WEL = "WEL";
     * DOMString AUDIO_LANGUAGE_CODE_XHO = "XHO";
     * DOMString AUDIO_LANGUAGE_CODE_XSM = "XSM";
     * DOMString AUDIO_LANGUAGE_CODE_YOR = "YOR";
     * DOMString AUDIO_LANGUAGE_CODE_YUE = "YUE";
     * DOMString AUDIO_LANGUAGE_CODE_ZHO = "ZHO";
     * DOMString AUDIO_LANGUAGE_CODE_ZUL = "ZUL";
     * Only the values that can be set in the menu can be set to webapi
     *
     * @since 2.3
     */
    SECONDARY_AUDIO_LANGUAGE_KEY = 19,
    /**
     * voice guide speed
     * expected value TvInfoMenuValue
     * DOMString VOICEGUIDE_SPEED_VERY_FAST = "VERY_FAST";
     * DOMString VOICEGUIDE_SPEED_FAST = "FAST";
     * DOMString VOICEGUIDE_SPEED_NORMAL= "NORMAL";
     * DOMString VOICEGUIDE_SPEED_SLOW = "SLOW";
     * DOMString VOICEGUIDE_SPEED_VERY_SLOW= "VERY_SLOW";
     *
     * @since 2.3
     */
    ACCESSIBILITY_VOICE_GUIDE_SPEED = 20,
    /**
     * caption style
     * expected value TvInfoMenuValue
     * unsigned long CAPTION_STYLE_DEFAULT = 0;
     * unsigned long CAPTION_STYLE_BOLD = 1;
     * unsigned long CAPTION_STYLE_ITALIC = 2;
     *
     * @since 2.3
     */
    CAPTION_STYLE_KEY = 21,
}
/**
 * Defines constants for TV menu settings values.
 *
 * @since 2.3
 */
export enum TvInfoMenuValue {
    /**
     * MenuValue Off
     *
     * @since 2.3
     */
    OFF = 0,
    /**
     * MenuValue On
     *
     * @since 2.3
     */
    ON = 1,
    /**
     * Caption Off
     *
     * @since 2.3
     */
    CAPTION_OFF = 0,
    /**
     * Caption On
     *
     * @since 2.3
     */
    CAPTION_ON = 1,
    /**
     * Default Mode
     *
     * @since 2.3
     */
    CAPTION_MODE_DEFAULT = 0,
    /**
     * Service 1
     *
     * @since 2.3
     */
    CAPTION_MODE_SERVICE1 = 1,
    /**
     * Service 2
     *
     * @since 2.3
     */
    CAPTION_MODE_SERVICE2 = 2,
    /**
     * Service 3
     *
     * @since 2.3
     */
    CAPTION_MODE_SERVICE3 = 3,
    /**
     * Service 4
     *
     * @since 2.3
     */
    CAPTION_MODE_SERVICE4 = 4,
    /**
     * Service 5
     *
     * @since 2.3
     */
    CAPTION_MODE_SERVICE5 = 5,
    /**
     * Service 6
     *
     * @since 2.3
     */
    CAPTION_MODE_SERVICE6 = 6,
    /**
     * English (KOR Localset)
     *
     * @since 2.3
     */
    CAPTION_MODE_CC1 = 7,
    /**
     * Korean (KOR Localset)
     *
     * @since 2.3
     */
    CAPTION_MODE_CC2 = 8,
    /**
     * US Localset only
     *
     * @since 2.3
     */
    CAPTION_MODE_CC3 = 9,
    /**
     * US Localset only
     *
     * @since 2.3
     */
    CAPTION_MODE_CC4 = 10,
    /**
     * Text 1
     *
     * @since 2.3
     */
    CAPTION_MODE_TEXT1 = 11,
    /**
     * Text 2
     *
     * @since 2.3
     */
    CAPTION_MODE_TEXT2 = 12,
    /**
     * Text 3
     *
     * @since 2.3
     */
    CAPTION_MODE_TEXT3 = 13,
    /**
     * Text 4
     *
     * @since 2.3
     */
    CAPTION_MODE_TEXT4 = 14,
    /**
     * Default
     *
     * @since 2.3
     */
    CAPTION_SIZE_DEFAULT = 0,
    /**
     * Small
     *
     * @since 2.3
     */
    CAPTION_SIZE_SMALL = 1,
    /**
     * Standard
     *
     * @since 2.3
     */
    CAPTION_SIZE_STANDARD = 2,
    /**
     * Large
     *
     * @since 2.3
     */
    CAPTION_SIZE_LARGE = 3,
    /**
     * Extra large
     *
     * @since 2.3
     */
    CAPTION_SIZE_EXTRA_LARGE = 4,
    /**
     * Default
     *
     * @since 2.3
     */
    CAPTION_FONT_DEFAULT = 0,
    /**
     * Style 0
     *
     * @since 2.3
     */
    CAPTION_FONT_STYLE0 = 1,
    /**
     * Style 1
     *
     * @since 2.3
     */
    CAPTION_FONT_STYLE1 = 2,
    /**
     * Style 2
     *
     * @since 2.3
     */
    CAPTION_FONT_STYLE2 = 3,
    /**
     * Style 3
     *
     * @since 2.3
     */
    CAPTION_FONT_STYLE3 = 4,
    /**
     * Style 4
     *
     * @since 2.3
     */
    CAPTION_FONT_STYLE4 = 5,
    /**
     * Style 5
     *
     * @since 2.3
     */
    CAPTION_FONT_STYLE5 = 6,
    /**
     * Style 6
     *
     * @since 2.3
     */
    CAPTION_FONT_STYLE6 = 7,
    /**
     * Default
     *
     * @since 2.3
     */
    CAPTION_COLOR_DEFAULT = 0,
    /**
     * White
     *
     * @since 2.3
     */
    CAPTION_COLOR_WHITE = 1,
    /**
     * Black
     *
     * @since 2.3
     */
    CAPTION_COLOR_BLACK = 2,
    /**
     * Red
     *
     * @since 2.3
     */
    CAPTION_COLOR_RED = 3,
    /**
     * Green
     *
     * @since 2.3
     */
    CAPTION_COLOR_GREEN = 4,
    /**
     * Blue
     *
     * @since 2.3
     */
    CAPTION_COLOR_BLUE = 5,
    /**
     * Yellow
     *
     * @since 2.3
     */
    CAPTION_COLOR_YELLOW = 6,
    /**
     * Magenta
     *
     * @since 2.3
     */
    CAPTION_COLOR_MAGENTA = 7,
    /**
     * Cyan
     *
     * @since 2.3
     */
    CAPTION_COLOR_CYAN = 8,
    /**
     * Solid
     *
     * @since 2.3
     */
    CAPTION_OPACITY_SOLID = 0,
    /**
     * Flashing
     *
     * @since 2.3
     */
    CAPTION_OPACITY_FLASH = 1,
    /**
     * Translucent
     *
     * @since 2.3
     */
    CAPTION_OPACITY_TRANSLUCENT = 2,
    /**
     * Transparent
     *
     * @since 2.3
     */
    CAPTION_OPACITY_TRANSPARENT = 3,
    /**
     * Default
     *
     * @since 2.3
     */
    CAPTION_OPACITY_DEFAULT = 4,
    /**
     * Highly translucent
     *
     * @since 2.3
     */
    CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5,
    /**
     * Slightly translucent
     *
     * @since 2.3
     */
    CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6,
    /**
     * No edge
     *
     * @since 2.3
     */
    CAPTION_EDGE_NONE = 0,
    /**
     * Raised
     *
     * @since 2.3
     */
    CAPTION_EDGE_RAISED = 1,
    /**
     * Depressed
     *
     * @since 2.3
     */
    CAPTION_EDGE_DEPRESSED = 2,
    /**
     * Uniform
     *
     * @since 2.3
     */
    CAPTION_EDGE_UNIFORM = 3,
    /**
     * Drop shadow
     *
     * @since 2.3
     */
    CAPTION_EDGE_DROP_SHADOWED = 4,
    /**
     * Normal subtitles
     *
     * @since 2.3
     */
    SUBTITLE_NORMAL = 0,
    /**
     * Subtitles for the hearing-immpeared
     *
     * @since 2.3
     */
    SUBTITLE_HEARING_IMMPEARED = 1,
    /**
     * Afrikaans voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_AFR = "AFR",
    /**
     * Akan voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_AKA = "AKA",
    /**
     * Amharic voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_AMH = "AMH",
    /**
     * Arab voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_ARA = "ARA",
    /**
     * India-Assamese voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_ASM = "ASM",
    /**
     * India-Bengali voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_BEN = "BEN",
    /**
     * Bulgarian voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_BUL = "BUL",
    /**
     * catala voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_CAT = "CAT",
    /**
     * Chinese voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_CHI = "CHI",
    /**
     * Chinese (Mandarin) voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_CMN = "CMN",
    /**
     * Czech voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_CZE = "CZE",
    /**
     * Ghana-Dagbani voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_DAG = "DAG",
    /**
     * Danish voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_DAN = "DAN",
    /**
     * Dutch voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_DUT = "DUT",
    /**
     * English voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_ENG = "ENG",
    /**
     * Estonia voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_EST = "EST",
    /**
     * basque voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_EUS = "EUS",
    /**
     * Ewe voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_EWE = "EWE",
    /**
     * Finnish voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_FIN = "FIN",
    /**
     * French voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_FRE = "FRE",
    /**
     * Gaa voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_GAA = "GAA",
    /**
     * German voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_GER = "GER",
    /**
     * Gaelic voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_GLA = "GLA",
    /**
     * Galician voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_GLG = "GLG",
    /**
     * Netherlands private code
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_GOS = "GOS",
    /**
     * Greek voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_GRE = "GRE",
    /**
     * India-Gujarati voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_GUJ = "GUJ",
    /**
     * Hausa voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_HAU = "HAU",
    /**
     * Hebrew voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_HEB = "HEB",
    /**
     * Hindi voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_HIN = "HIN",
    /**
     * Croatian voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_HRV = "HRV",
    /**
     * Hungarian voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_HUN = "HUN",
    /**
     * Igbo voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_IGB = "IGB",
    /**
     * Indonesia voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_IND = "IND",
    /**
     * Irish voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_IRI = "IRI",
    /**
     * Italian voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_ITA = "ITA",
    /**
     * Japanes voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_JPN = "JPN",
    /**
     * India-Kannada voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_KAN = "KAN",
    /**
     * India-Kokani voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_KOK = "KOK",
    /**
     * Korean voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_KOR = "KOR",
    /**
     * Latvian voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_LAV = "LAV",
    /**
     * Lithuanian voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_LIT = "LIT",
    /**
     * India-Malayalam voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_MAL = "MAL",
    /**
     * Maori voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_MAO = "MAO",
    /**
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_MAR = "MAR",
    /**
     * India-Marathi voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_MSA = "MSA",
    /**
     * Ndebele voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_NBL = "NBL",
    /**
     * Norwegian voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_NOR = "NOR",
    /**
     * Sotho, Northern voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_NSO = "NSO",
    /**
     * Nzema voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_NZI = "NZI",
    /**
     * India-Oriya voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_ORI = "ORI",
    /**
     * India-Punjabi voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_PAN = "PAN",
    /**
     * Persisian voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_PER = "PER",
    /**
     * Polish voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_POL = "POL",
    /**
     * Portuguese voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_POR = "POR",
    /**
     * Singapore preffered audio.
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_QAA = "QAA",
    /**
     * Singapore secondary audio.
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_QAB = "QAB",
    /**
     * Singapore third audio
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_QAC = "QAC",
    /**
     * Rumanian voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_ROM = "ROM",
    /**
     * Russian voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_RUS = "RUS",
    /**
     * Slovakia voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_SLK = "SLK",
    /**
     * Sotho, Southern voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_SOT = "SOT",
    /**
     * Spanish voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_SPA = "SPA",
    /**
     * Serbian voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_SRP = "SRP",
    /**
     * Swati voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_SSW = "SSW",
    /**
     * Swahili voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_SWA = "SWA",
    /**
     * Swedish voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_SWE = "SWE",
    /**
     * tamil voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_TAM = "TAM",
    /**
     * India-Telugu voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_TEL = "TEL",
    /**
     * Thai voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_THA = "THA",
    /**
     * Thai voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_TSN = "TSN",
    /**
     * Tsonga voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_TSO = "TSO",
    /**
     * Turkish voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_TUR = "TUR",
    /**
     * Twi voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_TWI = "TWI",
    /**
     * Ukraine voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_UKR = "UKR",
    /**
     * valencia voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_VAL = "VAL",
    /**
     * Venda voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_VEN = "VEN",
    /**
     * Vietnamese voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_VIE = "VIE",
    /**
     * Welsh voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_WEL = "WEL",
    /**
     * Xhosa voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_XHO = "XHO",
    /**
     * Ghana-Kasem voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_XSM = "XSM",
    /**
     * Yoruba voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_YOR = "YOR",
    /**
     * Chinese (Cantonese) voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_YUE = "YUE",
    /**
     * Malaysia-Chinense voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_ZHO = "ZHO",
    /**
     * Zulu voice mode
     *
     * @since 2.3
     */
    AUDIO_LANGUAGE_CODE_ZUL = "ZUL",
    /**
     * voice guide speed
     *
     * @since 2.3
     */
    VOICEGUIDE_SPEED_VERY_FAST = "VERY_FAST",
    /**
     * voice guide speed
     *
     * @since 2.3
     */
    VOICEGUIDE_SPEED_FAST = "FAST",
    /**
     * voice guide speed
     *
     * @since 2.3
     */
    VOICEGUIDE_SPEED_NORMAL = "NORMAL",
    /**
     * voice guide speed
     *
     * @since 2.3
     */
    VOICEGUIDE_SPEED_SLOW = "SLOW",
    /**
     * voice guide speed
     *
     * @since 2.3
     */
    VOICEGUIDE_SPEED_VERY_SLOW = "VERY_SLOW",
    /**
     * caption style
     *
     * @since 2.3
     */
    CAPTION_STYLE_DEFAULT = 0,
    /**
     * caption style
     *
     * @since 2.3
     */
    CAPTION_STYLE_BOLD = 1,
    /**
     * caption style
     *
     * @since 2.3
     */
    CAPTION_STYLE_ITALIC = 2,
}
/**
 * Defines constants for TV information keys.
 *
 * @since 2.3
 */
export enum TvInfoKey {
    /**
     * Whether the application can be executed in the background
     *
     * @since 2.3
     */
    TV_VIEWER_BG_EXECUTABLE = 0,
}
/**
 * Defines constants for TV information values.
 *
 * @since 2.3
 */
export enum TvInfoValue {
    /**
     * Background execution is not supported
     *
     * @since 2.3
     */
    TV_VIEWER_BG_NOT_EXECUTABLE = 0,
    /**
     * Background execution is supported
     *
     * @since 2.3
     */
    TV_VIEWER_BG_EXECUTABLE = 1,
}

/**
 * Defines a listener for caption setting change notifications.
 *
 * @since 2.3
 */
export interface TvInfoCaptionChangeCallback {
    /**
     * Callback method for caption setting change notifications.
     *
     * @param key TvInfoMenuValue value
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @since 2.3
     *
     * @version 1.0
     */
    (key: TvInfoMenuKey): void;
}

/**
 * Defines a listener for TV setting change notifications.
 *
 * @since 2.3
 */
export interface TvInfoChangeCallback {
    /**
     * Callback method for TV setting change notifications.
     *
     * @param key TvInfoKey value
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @since 2.3
     *
     * @version 1.0
     */
    (key: TvInfoKey): void;
}

/**
 * This module defines the TV settings value functionalities provided by the Tizen Samsung TV Product API.
 *
 * @privilegeLevel non-privilege
 *
 * @privilegeName None
 *
 * @since 2.3
 */
export interface TvInfoManager {
    /**
     * Defines constants for caption settings keys.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    TvInfoMenuKey: {
        /**
         * Caption On/Off
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_OFF = 0;
         * unsigned long CAPTION_ON = 1;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_ONOFF_KEY: 0;
        /**
         * Caption mode. Default: Service 6
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_MODE_DEFAULT = 0;
         * unsigned long CAPTION_MODE_SERVICE1 = 1;
         * unsigned long CAPTION_MODE_SERVICE2 = 2;
         * unsigned long CAPTION_MODE_SERVICE3 = 3;
         * unsigned long CAPTION_MODE_SERVICE4 = 4;
         * unsigned long CAPTION_MODE_SERVICE5 = 5;
         * unsigned long CAPTION_MODE_SERVICE6 = 6;
         * unsigned long CAPTION_MODE_CC1 = 7;
         * unsigned long CAPTION_MODE_CC2 = 8;
         * unsigned long CAPTION_MODE_CC3 = 9;
         * unsigned long CAPTION_MODE_CC4 = 10;
         * unsigned long CAPTION_MODE_TEXT1 = 11;
         * unsigned long CAPTION_MODE_TEXT2 = 12;
         * unsigned long CAPTION_MODE_TEXT3 = 13;
         * unsigned long CAPTION_MODE_TEXT4 = 14;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_KEY: 1;
        /**
         * Caption font size
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_SIZE_DEFAULT = 0;
         * unsigned long CAPTION_SIZE_SMALL = 1;
         * unsigned long CAPTION_SIZE_STANDARD = 2;
         * unsigned long CAPTION_SIZE_LARGE = 3;
         * unsigned long CAPTION_SIZE_EXTRA_LARGE = 4;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_FONT_SIZE_KEY: 2;
        /**
         * Caption font style. Default: Style 6
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_FONT_DEFAULT = 0;
         * unsigned long CAPTION_FONT_STYLE0 = 1;
         * unsigned long CAPTION_FONT_STYLE1 = 2;
         * unsigned long CAPTION_FONT_STYLE2 = 3;
         * unsigned long CAPTION_FONT_STYLE3 = 4;
         * unsigned long CAPTION_FONT_STYLE4 = 5;
         * unsigned long CAPTION_FONT_STYLE5 = 6;
         * unsigned long CAPTION_FONT_STYLE6 = 7;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_FONT_STYLE_KEY: 3;
        /**
         * Caption text foreground color
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_COLOR_DEFAULT = 0;
         * unsigned long CAPTION_COLOR_WHITE = 1;
         * unsigned long CAPTION_COLOR_BLACK = 2;
         * unsigned long CAPTION_COLOR_RED = 3;
         * unsigned long CAPTION_COLOR_GREEN = 4;
         * unsigned long CAPTION_COLOR_BLUE = 5;
         * unsigned long CAPTION_COLOR_YELLOW = 6;
         * unsigned long CAPTION_COLOR_MAGENTA = 7;
         * unsigned long CAPTION_COLOR_CYAN = 8;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_FG_COLOR_KEY: 4;
        /**
         * Caption text foreground opacity
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_OPACITY_SOLID = 0;
         * unsigned long CAPTION_OPACITY_FLASH = 1;
         * unsigned long CAPTION_OPACITY_TRANSLUCENT = 2;
         * unsigned long CAPTION_OPACITY_TRANSPARENT = 3;
         * unsigned long CAPTION_OPACITY_DEFAULT = 4;
         * unsigned long CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5;
         * unsigned long CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_FG_OPACITY_KEY: 5;
        /**
         * Caption text background color
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_COLOR_DEFAULT = 0;
         * unsigned long CAPTION_COLOR_WHITE = 1;
         * unsigned long CAPTION_COLOR_BLACK = 2;
         * unsigned long CAPTION_COLOR_RED = 3;
         * unsigned long CAPTION_COLOR_GREEN = 4;
         * unsigned long CAPTION_COLOR_BLUE = 5;
         * unsigned long CAPTION_COLOR_YELLOW = 6;
         * unsigned long CAPTION_COLOR_MAGENTA = 7;
         * unsigned long CAPTION_COLOR_CYAN = 8;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_BG_COLOR_KEY: 6;
        /**
         * Caption text background opacity
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_OPACITY_SOLID = 0;
         * unsigned long CAPTION_OPACITY_FLASH = 1;
         * unsigned long CAPTION_OPACITY_TRANSLUCENT = 2;
         * unsigned long CAPTION_OPACITY_TRANSPARENT = 3;
         * unsigned long CAPTION_OPACITY_DEFAULT = 4;
         * unsigned long CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5;
         * unsigned long CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_BG_OPACITY_KEY: 7;
        /**
         * Caption text edge type
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_EDGE_NONE = 0;
         * unsigned long CAPTION_EDGE_RAISED = 1;
         * unsigned long CAPTION_EDGE_DEPRESSED = 2;
         * unsigned long CAPTION_EDGE_UNIFORM = 3;
         * unsigned long CAPTION_EDGE_DROP_SHADOWED = 4;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_EDGE_TYPE_KEY: 8;
        /**
         * Caption text edge color
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_COLOR_DEFAULT = 0;
         * unsigned long CAPTION_COLOR_WHITE = 1;
         * unsigned long CAPTION_COLOR_BLACK = 2;
         * unsigned long CAPTION_COLOR_RED = 3;
         * unsigned long CAPTION_COLOR_GREEN = 4;
         * unsigned long CAPTION_COLOR_BLUE = 5;
         * unsigned long CAPTION_COLOR_YELLOW = 6;
         * unsigned long CAPTION_COLOR_MAGENTA = 7;
         * unsigned long CAPTION_COLOR_CYAN = 8;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_EDGE_COLOR_KEY: 9;
        /**
         * Caption text window color
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_COLOR_DEFAULT = 0;
         * unsigned long CAPTION_COLOR_WHITE = 1;
         * unsigned long CAPTION_COLOR_BLACK = 2;
         * unsigned long CAPTION_COLOR_RED = 3;
         * unsigned long CAPTION_COLOR_GREEN = 4;
         * unsigned long CAPTION_COLOR_BLUE = 5;
         * unsigned long CAPTION_COLOR_YELLOW = 6;
         * unsigned long CAPTION_COLOR_MAGENTA = 7;
         * unsigned long CAPTION_COLOR_CYAN = 8;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_WINDOW_COLOR_KEY: 10;
        /**
         * Caption text window opacity
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_OPACITY_SOLID = 0;
         * unsigned long CAPTION_OPACITY_FLASH = 1;
         * unsigned long CAPTION_OPACITY_TRANSLUCENT = 2;
         * unsigned long CAPTION_OPACITY_TRANSPARENT = 3;
         * unsigned long CAPTION_OPACITY_DEFAULT = 4;
         * unsigned long CAPTION_OPACITY_HIGHLY_TRANSLUCENT = 5;
         * unsigned long CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT = 6;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_WINDOW_OPACITY_KEY: 11;
        /**
         * Focus zoom menu value
         * expected value TvInfoMenuValue
         * unsigned long OFF = 0;
         * unsigned long ON = 1;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        ACCESSIBILITY_FOCUS_ZOOM: 12;
        /**
         * High Contrast menu value
         * expected value TvInfoMenuValue
         * unsigned long OFF = 0;
         * unsigned long ON = 1;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        ACCESSIBILITY_HIGH_CONTRAST: 13;
        /**
         * Channel-bound apps ticker menu value
         * expected value DOMString
         * "OFF", "ON"
         *
         * @since 2.3
         *
         * @version 1.0
         */
        SMARTHUB_CHANNEL_BOUND_APPS_TICKER: 14;
        /**
         * Voice guide menu value
         * expected value TvInfoMenuValue
         * unsigned long OFF = 0;
         * unsigned long ON = 1;
         *
         * @version 1.0
         *
         * @since 2.3
         */
        VOICE_GUIDE_KEY: 15;
        /**
         * Subtitles On/Off
         * expected value TvInfoMenuValue
         * unsigned long OFF = 0;
         * unsigned long ON = 1;
         *
         * @version 1.2
         *
         * @since 2.3
         */
        SUBTITLE_ONOFF_KEY: 16;
        /**
         * Subtitle mode
         * expected value TvInfoMenuValue
         * unsigned long SUBTITLE_NORMAL = 0;
         * unsigned long SUBTITLE_HEARING_IMMPEARED = 1;
         *
         * @version 1.2
         *
         * @since 2.3
         */
        SUBTITLE_MODE_KEY: 17;
        /**
         * Primary Audio Language
         * expected value TvInfoMenuValue
         * DOMString AUDIO_LANGUAGE_CODE_AFR = "AFR";
         * DOMString AUDIO_LANGUAGE_CODE_AKA = "AKA";
         * DOMString AUDIO_LANGUAGE_CODE_AMH = "AMH";
         * DOMString AUDIO_LANGUAGE_CODE_ARA = "ARA";
         * DOMString AUDIO_LANGUAGE_CODE_ASM = "ASM";
         * DOMString AUDIO_LANGUAGE_CODE_BEN = "BEN";
         * DOMString AUDIO_LANGUAGE_CODE_BUL = "BUL";
         * DOMString AUDIO_LANGUAGE_CODE_CAT = "CAT";
         * DOMString AUDIO_LANGUAGE_CODE_CHI = "CHI";
         * DOMString AUDIO_LANGUAGE_CODE_CMN = "CMN";
         * DOMString AUDIO_LANGUAGE_CODE_CZE = "CZE";
         * DOMString AUDIO_LANGUAGE_CODE_DAG = "DAG";
         * DOMString AUDIO_LANGUAGE_CODE_DAN = "DAN";
         * DOMString AUDIO_LANGUAGE_CODE_DUT = "DUT";
         * DOMString AUDIO_LANGUAGE_CODE_ENG = "ENG";
         * DOMString AUDIO_LANGUAGE_CODE_EST = "EST";
         * DOMString AUDIO_LANGUAGE_CODE_EUS = "EUS";
         * DOMString AUDIO_LANGUAGE_CODE_EWE = "EWE";
         * DOMString AUDIO_LANGUAGE_CODE_FIN = "FIN";
         * DOMString AUDIO_LANGUAGE_CODE_FRE = "FRE";
         * DOMString AUDIO_LANGUAGE_CODE_GAA = "GAA";
         * DOMString AUDIO_LANGUAGE_CODE_GER = "GER";
         * DOMString AUDIO_LANGUAGE_CODE_GLA = "GLA";
         * DOMString AUDIO_LANGUAGE_CODE_GLG = "GLG";
         * DOMString AUDIO_LANGUAGE_CODE_GOS = "GOS";
         * DOMString AUDIO_LANGUAGE_CODE_GRE = "GRE";
         * DOMString AUDIO_LANGUAGE_CODE_GUJ = "GUJ";
         * DOMString AUDIO_LANGUAGE_CODE_HAU = "HAU";
         * DOMString AUDIO_LANGUAGE_CODE_HEB = "HEB";
         * DOMString AUDIO_LANGUAGE_CODE_HIN = "HIN";
         * DOMString AUDIO_LANGUAGE_CODE_HRV = "HRV";
         * DOMString AUDIO_LANGUAGE_CODE_HUN = "HUN";
         * DOMString AUDIO_LANGUAGE_CODE_IGB = "IGB";
         * DOMString AUDIO_LANGUAGE_CODE_IND = "IND";
         * DOMString AUDIO_LANGUAGE_CODE_IRI = "IRI";
         * DOMString AUDIO_LANGUAGE_CODE_ITA = "ITA";
         * DOMString AUDIO_LANGUAGE_CODE_JPN = "JPN";
         * DOMString AUDIO_LANGUAGE_CODE_KAN = "KAN";
         * DOMString AUDIO_LANGUAGE_CODE_KOK = "KOK";
         * DOMString AUDIO_LANGUAGE_CODE_KOR = "KOR";
         * DOMString AUDIO_LANGUAGE_CODE_LAV = "LAV";
         * DOMString AUDIO_LANGUAGE_CODE_LIT = "LIT";
         * DOMString AUDIO_LANGUAGE_CODE_MAL = "MAL";
         * DOMString AUDIO_LANGUAGE_CODE_MAO = "MAO";
         * DOMString AUDIO_LANGUAGE_CODE_MAR = "MAR";
         * DOMString AUDIO_LANGUAGE_CODE_MSA = "MSA";
         * DOMString AUDIO_LANGUAGE_CODE_NBL = "NBL";
         * DOMString AUDIO_LANGUAGE_CODE_NOR = "NOR";
         * DOMString AUDIO_LANGUAGE_CODE_NSO = "NSO";
         * DOMString AUDIO_LANGUAGE_CODE_NZI = "NZI";
         * DOMString AUDIO_LANGUAGE_CODE_ORI = "ORI";
         * DOMString AUDIO_LANGUAGE_CODE_PAN = "PAN";
         * DOMString AUDIO_LANGUAGE_CODE_PER = "PER";
         * DOMString AUDIO_LANGUAGE_CODE_POL = "POL";
         * DOMString AUDIO_LANGUAGE_CODE_POR = "POR";
         * DOMString AUDIO_LANGUAGE_CODE_QAA = "QAA";
         * DOMString AUDIO_LANGUAGE_CODE_QAB = "QAB";
         * DOMString AUDIO_LANGUAGE_CODE_QAC = "QAC";
         * DOMString AUDIO_LANGUAGE_CODE_ROM = "ROM";
         * DOMString AUDIO_LANGUAGE_CODE_RUS = "RUS";
         * DOMString AUDIO_LANGUAGE_CODE_SLK = "SLK";
         * DOMString AUDIO_LANGUAGE_CODE_SOT = "SOT";
         * DOMString AUDIO_LANGUAGE_CODE_SPA = "SPA";
         * DOMString AUDIO_LANGUAGE_CODE_SRP = "SRP";
         * DOMString AUDIO_LANGUAGE_CODE_SSW = "SSW";
         * DOMString AUDIO_LANGUAGE_CODE_SWA = "SWA";
         * DOMString AUDIO_LANGUAGE_CODE_SWE = "SWE";
         * DOMString AUDIO_LANGUAGE_CODE_TAM = "TAM";
         * DOMString AUDIO_LANGUAGE_CODE_TEL = "TEL";
         * DOMString AUDIO_LANGUAGE_CODE_THA = "THA";
         * DOMString AUDIO_LANGUAGE_CODE_TSN = "TSN";
         * DOMString AUDIO_LANGUAGE_CODE_TSO = "TSO";
         * DOMString AUDIO_LANGUAGE_CODE_TUR = "TUR";
         * DOMString AUDIO_LANGUAGE_CODE_TWI = "TWI";
         * DOMString AUDIO_LANGUAGE_CODE_UKR = "UKR";
         * DOMString AUDIO_LANGUAGE_CODE_VAL = "VAL";
         * DOMString AUDIO_LANGUAGE_CODE_VEN = "VEN";
         * DOMString AUDIO_LANGUAGE_CODE_VIE = "VIE";
         * DOMString AUDIO_LANGUAGE_CODE_WEL = "WEL";
         * DOMString AUDIO_LANGUAGE_CODE_XHO = "XHO";
         * DOMString AUDIO_LANGUAGE_CODE_XSM = "XSM";
         * DOMString AUDIO_LANGUAGE_CODE_YOR = "YOR";
         * DOMString AUDIO_LANGUAGE_CODE_YUE = "YUE";
         * DOMString AUDIO_LANGUAGE_CODE_ZHO = "ZHO";
         * DOMString AUDIO_LANGUAGE_CODE_ZUL = "ZUL";
         * Only the values that can be set in the menu can be set to webapi
         *
         * @version 3.1
         *
         * @since 2.3
         */
        PRIMARY_AUDIO_LANGUAGE_KEY: 18;
        /**
         * Secondary Audio Language
         * expected value TvInfoMenuValue
         * DOMString AUDIO_LANGUAGE_CODE_AFR = "AFR";
         * DOMString AUDIO_LANGUAGE_CODE_AKA = "AKA";
         * DOMString AUDIO_LANGUAGE_CODE_AMH = "AMH";
         * DOMString AUDIO_LANGUAGE_CODE_ARA = "ARA";
         * DOMString AUDIO_LANGUAGE_CODE_ASM = "ASM";
         * DOMString AUDIO_LANGUAGE_CODE_BEN = "BEN";
         * DOMString AUDIO_LANGUAGE_CODE_BUL = "BUL";
         * DOMString AUDIO_LANGUAGE_CODE_CAT = "CAT";
         * DOMString AUDIO_LANGUAGE_CODE_CHI = "CHI";
         * DOMString AUDIO_LANGUAGE_CODE_CMN = "CMN";
         * DOMString AUDIO_LANGUAGE_CODE_CZE = "CZE";
         * DOMString AUDIO_LANGUAGE_CODE_DAG = "DAG";
         * DOMString AUDIO_LANGUAGE_CODE_DAN = "DAN";
         * DOMString AUDIO_LANGUAGE_CODE_DUT = "DUT";
         * DOMString AUDIO_LANGUAGE_CODE_ENG = "ENG";
         * DOMString AUDIO_LANGUAGE_CODE_EST = "EST";
         * DOMString AUDIO_LANGUAGE_CODE_EUS = "EUS";
         * DOMString AUDIO_LANGUAGE_CODE_EWE = "EWE";
         * DOMString AUDIO_LANGUAGE_CODE_FIN = "FIN";
         * DOMString AUDIO_LANGUAGE_CODE_FRE = "FRE";
         * DOMString AUDIO_LANGUAGE_CODE_GAA = "GAA";
         * DOMString AUDIO_LANGUAGE_CODE_GER = "GER";
         * DOMString AUDIO_LANGUAGE_CODE_GLA = "GLA";
         * DOMString AUDIO_LANGUAGE_CODE_GLG = "GLG";
         * DOMString AUDIO_LANGUAGE_CODE_GOS = "GOS";
         * DOMString AUDIO_LANGUAGE_CODE_GRE = "GRE";
         * DOMString AUDIO_LANGUAGE_CODE_GUJ = "GUJ";
         * DOMString AUDIO_LANGUAGE_CODE_HAU = "HAU";
         * DOMString AUDIO_LANGUAGE_CODE_HEB = "HEB";
         * DOMString AUDIO_LANGUAGE_CODE_HIN = "HIN";
         * DOMString AUDIO_LANGUAGE_CODE_HRV = "HRV";
         * DOMString AUDIO_LANGUAGE_CODE_HUN = "HUN";
         * DOMString AUDIO_LANGUAGE_CODE_IGB = "IGB";
         * DOMString AUDIO_LANGUAGE_CODE_IND = "IND";
         * DOMString AUDIO_LANGUAGE_CODE_IRI = "IRI";
         * DOMString AUDIO_LANGUAGE_CODE_ITA = "ITA";
         * DOMString AUDIO_LANGUAGE_CODE_JPN = "JPN";
         * DOMString AUDIO_LANGUAGE_CODE_KAN = "KAN";
         * DOMString AUDIO_LANGUAGE_CODE_KOK = "KOK";
         * DOMString AUDIO_LANGUAGE_CODE_KOR = "KOR";
         * DOMString AUDIO_LANGUAGE_CODE_LAV = "LAV";
         * DOMString AUDIO_LANGUAGE_CODE_LIT = "LIT";
         * DOMString AUDIO_LANGUAGE_CODE_MAL = "MAL";
         * DOMString AUDIO_LANGUAGE_CODE_MAO = "MAO";
         * DOMString AUDIO_LANGUAGE_CODE_MAR = "MAR";
         * DOMString AUDIO_LANGUAGE_CODE_MSA = "MSA";
         * DOMString AUDIO_LANGUAGE_CODE_NBL = "NBL";
         * DOMString AUDIO_LANGUAGE_CODE_NOR = "NOR";
         * DOMString AUDIO_LANGUAGE_CODE_NSO = "NSO";
         * DOMString AUDIO_LANGUAGE_CODE_NZI = "NZI";
         * DOMString AUDIO_LANGUAGE_CODE_ORI = "ORI";
         * DOMString AUDIO_LANGUAGE_CODE_PAN = "PAN";
         * DOMString AUDIO_LANGUAGE_CODE_PER = "PER";
         * DOMString AUDIO_LANGUAGE_CODE_POL = "POL";
         * DOMString AUDIO_LANGUAGE_CODE_POR = "POR";
         * DOMString AUDIO_LANGUAGE_CODE_QAA = "QAA";
         * DOMString AUDIO_LANGUAGE_CODE_QAB = "QAB";
         * DOMString AUDIO_LANGUAGE_CODE_QAC = "QAC";
         * DOMString AUDIO_LANGUAGE_CODE_ROM = "ROM";
         * DOMString AUDIO_LANGUAGE_CODE_RUS = "RUS";
         * DOMString AUDIO_LANGUAGE_CODE_SLK = "SLK";
         * DOMString AUDIO_LANGUAGE_CODE_SOT = "SOT";
         * DOMString AUDIO_LANGUAGE_CODE_SPA = "SPA";
         * DOMString AUDIO_LANGUAGE_CODE_SRP = "SRP";
         * DOMString AUDIO_LANGUAGE_CODE_SSW = "SSW";
         * DOMString AUDIO_LANGUAGE_CODE_SWA = "SWA";
         * DOMString AUDIO_LANGUAGE_CODE_SWE = "SWE";
         * DOMString AUDIO_LANGUAGE_CODE_TAM = "TAM";
         * DOMString AUDIO_LANGUAGE_CODE_TEL = "TEL";
         * DOMString AUDIO_LANGUAGE_CODE_THA = "THA";
         * DOMString AUDIO_LANGUAGE_CODE_TSN = "TSN";
         * DOMString AUDIO_LANGUAGE_CODE_TSO = "TSO";
         * DOMString AUDIO_LANGUAGE_CODE_TUR = "TUR";
         * DOMString AUDIO_LANGUAGE_CODE_TWI = "TWI";
         * DOMString AUDIO_LANGUAGE_CODE_UKR = "UKR";
         * DOMString AUDIO_LANGUAGE_CODE_VAL = "VAL";
         * DOMString AUDIO_LANGUAGE_CODE_VEN = "VEN";
         * DOMString AUDIO_LANGUAGE_CODE_VIE = "VIE";
         * DOMString AUDIO_LANGUAGE_CODE_WEL = "WEL";
         * DOMString AUDIO_LANGUAGE_CODE_XHO = "XHO";
         * DOMString AUDIO_LANGUAGE_CODE_XSM = "XSM";
         * DOMString AUDIO_LANGUAGE_CODE_YOR = "YOR";
         * DOMString AUDIO_LANGUAGE_CODE_YUE = "YUE";
         * DOMString AUDIO_LANGUAGE_CODE_ZHO = "ZHO";
         * DOMString AUDIO_LANGUAGE_CODE_ZUL = "ZUL";
         * Only the values that can be set in the menu can be set to webapi
         *
         * @version 3.1
         *
         * @since 2.3
         */
        SECONDARY_AUDIO_LANGUAGE_KEY: 19;
        /**
         * voice guide speed
         * expected value TvInfoMenuValue
         * DOMString VOICEGUIDE_SPEED_VERY_FAST = "VERY_FAST";
         * DOMString VOICEGUIDE_SPEED_FAST = "FAST";
         * DOMString VOICEGUIDE_SPEED_NORMAL= "NORMAL";
         * DOMString VOICEGUIDE_SPEED_SLOW = "SLOW";
         * DOMString VOICEGUIDE_SPEED_VERY_SLOW= "VERY_SLOW";
         *
         * @version 3.3
         *
         * @since 2.3
         */
        ACCESSIBILITY_VOICE_GUIDE_SPEED: 20;
        /**
         * caption style
         * expected value TvInfoMenuValue
         * unsigned long CAPTION_STYLE_DEFAULT = 0;
         * unsigned long CAPTION_STYLE_BOLD = 1;
         * unsigned long CAPTION_STYLE_ITALIC = 2;
         *
         * @version 3.4
         *
         * @since 2.3
         */
        CAPTION_STYLE_KEY: 21;
    };
    /**
     * Defines constants for TV menu settings values.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    TvInfoMenuValue: {
        /**
         * MenuValue Off
         *
         * @version 1.0
         *
         * @since 2.3
         */
        OFF: 0;
        /**
         * MenuValue On
         *
         * @version 1.0
         *
         * @since 2.3
         */
        ON: 1;
        /**
         * Caption Off
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_OFF: 0;
        /**
         * Caption On
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_ON: 1;
        /**
         * Default Mode
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_DEFAULT: 0;
        /**
         * Service 1
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_SERVICE1: 1;
        /**
         * Service 2
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_SERVICE2: 2;
        /**
         * Service 3
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_SERVICE3: 3;
        /**
         * Service 4
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_SERVICE4: 4;
        /**
         * Service 5
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_SERVICE5: 5;
        /**
         * Service 6
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_SERVICE6: 6;
        /**
         * English (KOR Localset)
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_CC1: 7;
        /**
         * Korean (KOR Localset)
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_CC2: 8;
        /**
         * US Localset only
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_CC3: 9;
        /**
         * US Localset only
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_CC4: 10;
        /**
         * Text 1
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_TEXT1: 11;
        /**
         * Text 2
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_TEXT2: 12;
        /**
         * Text 3
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_TEXT3: 13;
        /**
         * Text 4
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_MODE_TEXT4: 14;
        /**
         * Default
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_SIZE_DEFAULT: 0;
        /**
         * Small
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_SIZE_SMALL: 1;
        /**
         * Standard
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_SIZE_STANDARD: 2;
        /**
         * Large
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_SIZE_LARGE: 3;
        /**
         * Extra large
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_SIZE_EXTRA_LARGE: 4;
        /**
         * Default
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_FONT_DEFAULT: 0;
        /**
         * Style 0
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_FONT_STYLE0: 1;
        /**
         * Style 1
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_FONT_STYLE1: 2;
        /**
         * Style 2
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_FONT_STYLE2: 3;
        /**
         * Style 3
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_FONT_STYLE3: 4;
        /**
         * Style 4
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_FONT_STYLE4: 5;
        /**
         * Style 5
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_FONT_STYLE5: 6;
        /**
         * Style 6
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_FONT_STYLE6: 7;
        /**
         * Default
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_COLOR_DEFAULT: 0;
        /**
         * White
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_COLOR_WHITE: 1;
        /**
         * Black
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_COLOR_BLACK: 2;
        /**
         * Red
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_COLOR_RED: 3;
        /**
         * Green
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_COLOR_GREEN: 4;
        /**
         * Blue
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_COLOR_BLUE: 5;
        /**
         * Yellow
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_COLOR_YELLOW: 6;
        /**
         * Magenta
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_COLOR_MAGENTA: 7;
        /**
         * Cyan
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_COLOR_CYAN: 8;
        /**
         * Solid
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_OPACITY_SOLID: 0;
        /**
         * Flashing
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_OPACITY_FLASH: 1;
        /**
         * Translucent
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_OPACITY_TRANSLUCENT: 2;
        /**
         * Transparent
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_OPACITY_TRANSPARENT: 3;
        /**
         * Default
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_OPACITY_DEFAULT: 4;
        /**
         * Highly translucent
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_OPACITY_HIGHLY_TRANSLUCENT: 5;
        /**
         * Slightly translucent
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_OPACITY_SLIGHTLY_TRANSLUCENT: 6;
        /**
         * No edge
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_EDGE_NONE: 0;
        /**
         * Raised
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_EDGE_RAISED: 1;
        /**
         * Depressed
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_EDGE_DEPRESSED: 2;
        /**
         * Uniform
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_EDGE_UNIFORM: 3;
        /**
         * Drop shadow
         *
         * @version 1.0
         *
         * @since 2.3
         */
        CAPTION_EDGE_DROP_SHADOWED: 4;
        /**
         * Normal subtitles
         *
         * @version 1.2
         *
         * @since 2.3
         */
        SUBTITLE_NORMAL: 0;
        /**
         * Subtitles for the hearing-immpeared
         *
         * @version 1.2
         *
         * @since 2.3
         */
        SUBTITLE_HEARING_IMMPEARED: 1;
        /**
         * Afrikaans voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_AFR: "AFR";
        /**
         * Akan voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_AKA: "AKA";
        /**
         * Amharic voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_AMH: "AMH";
        /**
         * Arab voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_ARA: "ARA";
        /**
         * India-Assamese voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_ASM: "ASM";
        /**
         * India-Bengali voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_BEN: "BEN";
        /**
         * Bulgarian voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_BUL: "BUL";
        /**
         * catala voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_CAT: "CAT";
        /**
         * Chinese voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_CHI: "CHI";
        /**
         * Chinese (Mandarin) voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_CMN: "CMN";
        /**
         * Czech voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_CZE: "CZE";
        /**
         * Ghana-Dagbani voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_DAG: "DAG";
        /**
         * Danish voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_DAN: "DAN";
        /**
         * Dutch voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_DUT: "DUT";
        /**
         * English voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_ENG: "ENG";
        /**
         * Estonia voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_EST: "EST";
        /**
         * basque voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_EUS: "EUS";
        /**
         * Ewe voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_EWE: "EWE";
        /**
         * Finnish voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_FIN: "FIN";
        /**
         * French voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_FRE: "FRE";
        /**
         * Gaa voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_GAA: "GAA";
        /**
         * German voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_GER: "GER";
        /**
         * Gaelic voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_GLA: "GLA";
        /**
         * Galician voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_GLG: "GLG";
        /**
         * Netherlands private code
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_GOS: "GOS";
        /**
         * Greek voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_GRE: "GRE";
        /**
         * India-Gujarati voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_GUJ: "GUJ";
        /**
         * Hausa voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_HAU: "HAU";
        /**
         * Hebrew voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_HEB: "HEB";
        /**
         * Hindi voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_HIN: "HIN";
        /**
         * Croatian voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_HRV: "HRV";
        /**
         * Hungarian voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_HUN: "HUN";
        /**
         * Igbo voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_IGB: "IGB";
        /**
         * Indonesia voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_IND: "IND";
        /**
         * Irish voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_IRI: "IRI";
        /**
         * Italian voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_ITA: "ITA";
        /**
         * Japanes voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_JPN: "JPN";
        /**
         * India-Kannada voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_KAN: "KAN";
        /**
         * India-Kokani voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_KOK: "KOK";
        /**
         * Korean voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_KOR: "KOR";
        /**
         * Latvian voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_LAV: "LAV";
        /**
         * Lithuanian voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_LIT: "LIT";
        /**
         * India-Malayalam voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_MAL: "MAL";
        /**
         * Maori voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_MAO: "MAO";
        /**
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_MAR: "MAR";
        /**
         * India-Marathi voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_MSA: "MSA";
        /**
         * Ndebele voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_NBL: "NBL";
        /**
         * Norwegian voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_NOR: "NOR";
        /**
         * Sotho, Northern voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_NSO: "NSO";
        /**
         * Nzema voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_NZI: "NZI";
        /**
         * India-Oriya voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_ORI: "ORI";
        /**
         * India-Punjabi voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_PAN: "PAN";
        /**
         * Persisian voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_PER: "PER";
        /**
         * Polish voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_POL: "POL";
        /**
         * Portuguese voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_POR: "POR";
        /**
         * Singapore preffered audio.
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_QAA: "QAA";
        /**
         * Singapore secondary audio.
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_QAB: "QAB";
        /**
         * Singapore third audio
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_QAC: "QAC";
        /**
         * Rumanian voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_ROM: "ROM";
        /**
         * Russian voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_RUS: "RUS";
        /**
         * Slovakia voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_SLK: "SLK";
        /**
         * Sotho, Southern voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_SOT: "SOT";
        /**
         * Spanish voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_SPA: "SPA";
        /**
         * Serbian voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_SRP: "SRP";
        /**
         * Swati voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_SSW: "SSW";
        /**
         * Swahili voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_SWA: "SWA";
        /**
         * Swedish voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_SWE: "SWE";
        /**
         * tamil voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_TAM: "TAM";
        /**
         * India-Telugu voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_TEL: "TEL";
        /**
         * Thai voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_THA: "THA";
        /**
         * Thai voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_TSN: "TSN";
        /**
         * Tsonga voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_TSO: "TSO";
        /**
         * Turkish voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_TUR: "TUR";
        /**
         * Twi voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_TWI: "TWI";
        /**
         * Ukraine voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_UKR: "UKR";
        /**
         * valencia voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_VAL: "VAL";
        /**
         * Venda voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_VEN: "VEN";
        /**
         * Vietnamese voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_VIE: "VIE";
        /**
         * Welsh voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_WEL: "WEL";
        /**
         * Xhosa voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_XHO: "XHO";
        /**
         * Ghana-Kasem voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_XSM: "XSM";
        /**
         * Yoruba voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_YOR: "YOR";
        /**
         * Chinese (Cantonese) voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_YUE: "YUE";
        /**
         * Malaysia-Chinense voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_ZHO: "ZHO";
        /**
         * Zulu voice mode
         *
         * @version 3.1
         *
         * @since 2.3
         */
        AUDIO_LANGUAGE_CODE_ZUL: "ZUL";
        /**
         * voice guide speed
         *
         * @version 3.3
         *
         * @since 2.3
         */
        VOICEGUIDE_SPEED_VERY_FAST: "VERY_FAST";
        /**
         * voice guide speed
         *
         * @version 3.3
         *
         * @since 2.3
         */
        VOICEGUIDE_SPEED_FAST: "FAST";
        /**
         * voice guide speed
         *
         * @version 3.3
         *
         * @since 2.3
         */
        VOICEGUIDE_SPEED_NORMAL: "NORMAL";
        /**
         * voice guide speed
         *
         * @version 3.3
         *
         * @since 2.3
         */
        VOICEGUIDE_SPEED_SLOW: "SLOW";
        /**
         * voice guide speed
         *
         * @version 3.3
         *
         * @since 2.3
         */
        VOICEGUIDE_SPEED_VERY_SLOW: "VERY_SLOW";
        /**
         * caption style
         *
         * @version 3.4
         *
         * @since 2.3
         */
        CAPTION_STYLE_DEFAULT: 0;
        /**
         * caption style
         *
         * @version 3.4
         *
         * @since 2.3
         */
        CAPTION_STYLE_BOLD: 1;
        /**
         * caption style
         *
         * @version 3.4
         *
         * @since 2.3
         */
        CAPTION_STYLE_ITALIC: 2;
    };
    /**
     * Defines constants for TV information keys.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    TvInfoKey: {
        /**
         * Whether the application can be executed in the background
         *
         * @version 1.0
         *
         * @since 2.3
         */
        TV_VIEWER_BG_EXECUTABLE: 0;
    };
    /**
     * Defines constants for TV information values.
     *
     * @version 1.0
     *
     * @since 2.3
     */
    TvInfoValue: {
        /**
         * Background execution is not supported
         *
         * @version 1.0
         *
         * @since 2.3
         */
        TV_VIEWER_BG_NOT_EXECUTABLE: 0;
        /**
         * Background execution is supported
         *
         * @version 1.0
         *
         * @since 2.3
         */
        TV_VIEWER_BG_EXECUTABLE: 1;
    };

    /**
     * Retrieves the plugin version number.
     *
     * @returns Plugin version
     *
     * @throws None N/A
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getVersion: () => string;

    /**
     * Retrieves the specified caption or subtitle menu key value.
     *
     * @param key Caption or subtitle menu key
     *
     * @returns Key value
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any of the input parameters contain an invalid value. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    getMenuValue: (key: TvInfoMenuKey) => TvInfoMenuValue;

    /**
     * Registers a caption menu change listener callback.
     *
     * @param listener TvInfoCaptionChangeCallback listener
     *
     * @param key Caption menu key
     *
     * @returns Listener ID
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    addCaptionChangeListener: (
        key: TvInfoMenuKey,
        listener: TvInfoCaptionChangeCallback,
    ) => number;

    /**
     * Unregisters a caption menu change listener callback.
     *
     * @param listenerId TvInfoCaptionChangeCallback ID
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @throws WebAPIException with error type InvalidValuesError, if any input parameter contains an invalid value. (Since plugin version 3.0)
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    removeCaptionChangeListener: (listenerId: number) => void;

    /**
     * Checks whether the picture size has been resized.
     *
     * @returns Boolean value:
     * - true: Yes
     * - false: No
     *
     * @throws WebAPIException with error type NotSupportedError, if the device is a BD device.
     *
     * @since 2.3
     *
     * @version 1.0
     *
     * @note Since plugin version 3.0, if a parameter value is out of range, InvalidValuesError is thrown instead of TypeMismatchError.
     */
    isTvsPicSizeResized: () => boolean;

    /**
     * If captions are switched on in the TV menu, controls the caption visibility state.
     * If captions are switched off in the TV menu, captions are not shown even if the application calls showCaption(true).
     *
     * @param show Boolean value
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    showCaption: (show: boolean) => void;

    /**
     * Enables controlling caption display dynamically from within the application.
     * The application gains full permission to show and hide the captions.
     * When the application launches or resumes, call registerInAppCaptionControl(true).
     * When the application is sent to the background or deactivated states, you must call registerInAppCaptionControl(false).
     *
     * @param status Enable or disable dynamic caption display control.
     *
     * @returns void
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    registerInAppCaptionControl: (status: boolean) => void;
}
export interface WebAPIException {
    /**
     * Error code
     *
     * @since 2.3
     */
    readonly code: number;
    /**
     * Error name. The attribute must return the value it was initialized with.
     *
     * @since 2.3
     */
    readonly name: string;
    /**
     * Detailed error message
     *
     * @since 2.3
     */
    readonly message: string;
    /**
     * Index is not in the allowed range
     *
     * @since 2.3
     */
    INDEX_SIZE_ERR: 1;
    /**
     * Specified text range is too large
     *
     * @since 2.3
     */
    DOMSTRING_SIZE_ERR: 2;
    /**
     * Operation yields an incorrect node tree
     *
     * @since 2.3
     */
    HIERARCHY_REQUEST_ERR: 3;
    /**
     * Object is in the wrong document
     *
     * @since 2.3
     */
    WRONG_DOCUMENT_ERR: 4;
    /**
     * String contains invalid characters
     *
     * @since 2.3
     */
    INVALID_CHARACTER_ERR: 5;
    /**
     * Data specified for a node that does not support it
     *
     * @since 2.3
     */
    NO_DATA_ALLOWED_ERR: 6;
    /**
     * Object cannot be modified
     *
     * @since 2.3
     */
    NO_MODIFICATION_ALLOWED_ERR: 7;
    /**
     * Object not found
     *
     * @since 2.3
     */
    NOT_FOUND_ERR: 8;
    /**
     * Operation not supported
     *
     * @since 2.3
     */
    NOT_SUPPORTED_ERR: 9;
    /**
     * Specified attribute already in use
     *
     * @since 2.3
     */
    INUSE_ATTRIBUTE_ERR: 10;
    /**
     * Object is in an invalid state
     *
     * @since 2.3
     */
    INVALID_STATE_ERR: 11;
    /**
     * String does not match the expected pattern
     *
     * @since 2.3
     */
    SYNTAX_ERR: 12;
    /**
     * Object cannot be modified in this way
     *
     * @since 2.3
     */
    INVALID_MODIFICATION_ERR: 13;
    /**
     * Operation not allowed in XML namespaces
     *
     * @since 2.3
     */
    NAMESPACE_ERR: 14;
    /**
     * Object does not support the operation or argument
     *
     * @since 2.3
     */
    INVALID_ACCESS_ERR: 15;
    /**
     * Operation causes the node to fail validation
     *
     * @since 2.3
     */
    VALIDATION_ERR: 16;
    /**
     * Object type does not match the expected type
     *
     * @since 2.3
     */
    TYPE_MISMATCH_ERR: 17;
    /**
     * Operation insecure
     *
     * @since 2.3
     */
    SECURITY_ERR: 18;
    /**
     * Network error occurred
     *
     * @since 2.3
     */
    NETWORK_ERR: 19;
    /**
     * Operation aborted
     *
     * @since 2.3
     */
    ABORT_ERR: 20;
    /**
     * URL provided does not match
     *
     * @since 2.3
     */
    URL_MISMATCH_ERR: 21;
    /**
     * Quota exceeded
     *
     * @since 2.3
     */
    QUOTA_EXCEEDED_ERR: 22;
    /**
     * Operation timed out
     *
     * @since 2.3
     */
    TIMEOUT_ERR: 23;
    /**
     * Supplied node is incorrect or has an incorrect ancestor for this operation
     *
     * @since 2.3
     */
    INVALID_NODE_TYPE_ERR: 24;
    /**
     * Object cannot be cloned
     *
     * @since 2.3
     */
    DATA_CLONE_ERR: 25;
    /**
     * Input parameter contains an invalid value
     *
     * @since 2.3
     */
    INVALID_VALUES_ERR: 26;
    /**
     * IO error
     *
     * @since 2.3
     */
    IO_ERR: 27;
    /**
     * Service not available
     *
     * @since 2.3
     */
    SERVICE_NOT_AVAILABLE_ERR: 28;
    /**
     * Unknown error
     *
     * @since 2.3
     */
    UNKNOWN_ERR: 9999;
}

export interface WebAPIError {
    /**
     * @since 2.3
     */
    readonly code: number;
    /**
     * @since 2.3
     */
    readonly name: string;
    /**
     * @since 2.3
     */
    readonly message: string;
}

/**
 * @since 2.3
 */
export interface SuccessCallback {
    /**
     * Callback method invoked when an asynchronous call completes successfully.
     *
     * @returns void
     *
     * @throws None N/A
     *
     * @since 2.3
     *
     * @version 1.0
     */
    (): void;
}

/**
 * @since 2.3
 */
export interface ErrorCallback {
    /**
     * Callback method invoked if an error occurs.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    (error: WebAPIError): void;
}

/**
 * This module defines the application secure storage functionalities provided by the Tizen Samsung TV Product API.
 *
 * @privilegeLevel Public
 *
 * @privilegeName http://developer.samsung.com/privilege/widgetdata
 *
 * @since 2.3
 */
export interface WidgetDataManager {
    /**
     * Retrieves the plugin version number.
     *
     * @returns DOMString Plugin version
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/widgetdata
     *
     * @throws WebAPIException with error type SecurityError, if the application does not have the privilege to call this method.
     *
     * @since 2.3
     *
     * @version 1.0
     */
    getVersion: () => string;

    /**
     * Reads encrypted data.
     *
     * @param onsuccess Callback method to invoke when the data is successfully read
     *
     * @param onerror Callback method to invoke if an error occurs
     * - NotFoundError, if no file was found in the local path.
     * - SecurityError, if the application does not have the privilege to call this method.
     * - UnknownError, if any other error occurs.
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/widgetdata
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @since 4.0
     *
     * @version 3.0
     *
     * @note If you need to share a file created by the widgetdata api with another c or c# app, you need to use one more privilege(http://tizen.org/privilege/appdir.shareddata)
     */
    read: (onsuccess: SuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Writes encrypted data.
     *
     * @param data Data, up to 20000 characters
     *
     * @param onsuccess Callback method to invoke when the data is successfully written
     *
     * @param onerror Callback method to invoke if an error occurs
     * DOMStringSizeError, if any of the input parameters exceeds the limited size.
     * SecurityError, if the application does not have the privilege to call this method.
     * UnknownError, if any other error occurs.
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/widgetdata
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @since 4.0
     *
     * @version 3.0
     *
     * @note If you need to share a file created by the widgetdata api with another c or c# app, you need to use one more privilege(http://tizen.org/privilege/appdir.shareddata)
     */
    write: (
        data: string,
        onsuccess?: SuccessCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Removes encrypted data.
     *
     * @param onsuccess Callback method to invoke when the data is successfully removed
     *
     * @param onerror Callback method to invoke if an error occurs
     * - NotFoundError, if no file was found in the local path.
     * - SecurityError, if the application does not have the privilege to call this method.
     * - UnknownError, if any other error occurs.
     *
     * @returns void
     *
     * @privilegeLevel Public
     *
     * @privilegeName http://developer.samsung.com/privilege/widgetdata
     *
     * @throws WebAPIException with error type TypeMismatchError, if an input parameter is not compatible with its expected type.
     *
     * @since 4.0
     *
     * @version 3.0
     *
     * @note If you need to share a file created by the widgetdata api with another c or c# app, you need to use one more privilege(http://tizen.org/privilege/appdir.shareddata)
     */
    remove: (onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;
}
