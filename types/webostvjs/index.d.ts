// Type definitions for webostvjs 1.2
// Project: https://webostv.developer.lge.com/api/webostvjs/intro-webostvjs/
// Definitions by: Denis Seleznev <https://github.com/hcodes>
//                 Ilya Istomin <https://github.com/procot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    interface Window {
        webOS: WebOS;
        webOSDev: WebOSDev;
    }
}

/**
 * The webOS API provides methods for retrieving TV-specific information and settings.
 * @see https://webostv.developer.lge.com/api/webostvjs/webos/
 */
export interface WebOS {
    /**
     * A member representing the build version of the webOSTV.js library
     */
    readonly libVersion: string;
    /**
     * A member representing the platform identification of webOS variants
     */
    readonly platform: {
        /**
         * Indicate whether the platform identification is webOS TV.
         * If the platform identification is not webOS TV, undefined is returned.
         */
        tv?: true | undefined;
    };
    readonly keyboard: {
        /**
         * Checks whether the virtual keyboard is visible.
         *
         * @returns Indicates whether the virtual keyboard is displayed or hidden
         * - true: the virtual keyboard is displayed
         * - false: the virtual keyboard is hidden
         */
        isShowing(): boolean;
    };
    readonly service: {
        /**
         * Creates and sends a service request to the system of the webOS TV
         *
         * @param uri
         * The service URI.
         * It accepts the normal service URI format, as well as the extended format with the service method included.
         *
         * @param parameters
         * Service request options.
         *
         * @returns Resulting request object. This object can be used to cancel subscriptions.
         */
        request<
            TParams extends Record<string, any> = Record<string, any>,
            TData extends OnCompleteSuccessResponse = OnCompleteSuccessResponse,
            TError extends OnCompleteFailureResponse = OnCompleteFailureResponse,
        >(
            uri: string,
            parameters?: {
                /**
                 * The service method being called.
                 */
                method?: string | undefined;
                /**
                 * The JSON object of the request parameters to send.
                 */
                parameters?: TParams | undefined;
                /**
                 * Indicates whether a subscription is desired for this request.
                 * - true: Request the subscription.
                 * - false: Not request the subscription.
                 */
                subscribe?: boolean | undefined;
                /**
                 * Indicates whether the request should resubscribe after a failure has occurred.
                 * - true: Request the re-subscription.
                 * - false: Not request the re-subscription.
                 */
                resubscribe?: boolean | undefined;
                /**
                 * The callback function called when a request is complete (regardless of success or failure).
                 */
                onComplete?: (response: TData | TError) => void;
                /**
                 * The callback function called when the method succeeds.
                 */
                onSuccess?: (response: TData) => void;
                /**
                 * The callback function called when the method fails.
                 */
                onFailure?: (error: TError) => void;
            }
        ): {
            /**
             * The full-service request URI, including method name.
             */
            uri: string;
            /**
             * The JSON object of the request parameters to send.
             */
            params: TParams;
            /**
             * Indicates whether a subscription is desired for this request.
             * - true: subscribed
             * - false: not subscribed
             */
            subscribe: boolean;
            /**
             * Indicates whether the request should resubscribe after a failure has occurred.
             * - true: resubscribed
             * - false: not resubscribed
             */
            resubscribe: boolean;
            /**
             * The callback function called when a request is complete (regardless of success or failure).
             */
            onComplete?: (response: TData | TError) => void;
            /**
             * The callback function called when the method succeeds.
             */
            onSuccess?: (response: TData) => void;
            /**
             * The callback function called when the method fails.
             */
            onFailure?: (error: TError) => void;
            /**
             * Sends the request. It is automatically called on creation. No argument is required.
             */
            send(): void;
            /**
             * Cancels the service request and any associated subscription. No argument is required.
             */
            cancel(): void;
        };
    };
    /**
     * Returns the device-specific information regarding the TV model,
     * OS version, SDK version, screen size, and resolution
     *
     * @returns JSON object containing the device information details
     */
    deviceInfo(callback: (deviceInfo: DeviceInfo) => void): void;
    /**
     * Returns an app ID of an app calling this method
     */
    fetchAppId(): string;
    /**
     * Returns the appinfo.json data of the caller app with a saved cache
     *
     * @param path An optional relative file path to read appinfo.json.
     * The file name (appinfo.json) must be included in the file path
     * - If your app is packaged into an IPK file, get the path using `fetchAppRootPath` method
     * - If your app is hosted by a server, the path will be the URL of the server
     * @returns The JSON object read from the app's appinfo.json file. If it is not found, undefined is returned.
     */
    fetchAppInfo(
        callback?: (appInfo?: AppInfo) => void,
        path?: string
    ): void;
    /**
     * Returns the full URI path of the caller app
     *
     * @returns The app's URI path where the app is located
     */
    fetchAppRootPath(): string;
    /**
     * Emulates the back key of the remote controller to move backward 1 level
     */
    platformBack(): void;
    /**
     * Returns the system-specific information regarding country, service country, and timezone
     */
    systemInfo(): SystemInfo;
}

export interface AppInfo {
    /**
     * The small app icon displayed for your app, 80x80 pixels, in PNG format.
     *
     * The file path must be relative to the appinfo.json file.
     */
    icon: string;
    /**
     * The app ID, i.e., "com.newco.app.myapp".
     *
     * Every app MUST have a unique ID, formed from reverse DNS naming conventions.
     * The launcher uses the ID to uniquely identify your app and displays it with the title.
     * The app ID is set once and cannot be changed after publishing the app.
     *
     * - Must create the ID only with lowercase letters (a-z), digits (0-9), minus signs, and periods.
     * It must be at least two characters long and must start with an alphanumeric character.
     *
     * - Cannot start with the following reverse domain names:
     * com.palm, com.webos, com.lge, com.palmdts
     *
     * - Start the ID with a reverse domain of the company/institution. (Recommended)
     *
     * - Finish the ID with the subdomain app.app-name. (Recommended)
     */
    id: string;
    /**
     * The large app icon displayed for your app, 130x130 pixels and should be in PNG format.
     *
     * The file path must be relative to the appinfo.json file.
     */
    largeIcon: string;
    /**
     * The launch point for your app.
     *
     * The file path must be relative to the appinfo.json file and needs to point to an HTML file. The default is index.html.
     */
    main: string;
    /**
     * The background image path to be shown while your app is loading.
     *
     * The path must be relative to the appinfo.json file. The file must be in PNG format, and the resolution should be 1920 x 1080.
     */
    splashBackground: string;
    /**
     * The app title that is shown in the Launcher and the app window.
     */
    title: string;
    /**
     * The app type. Only "web" is allowed.
     */
    type: 'web';
    /**
     * The app owner that is used in the launcher and deviceinfo dialogs.
     */
    vendor: string;
    /**
     * The app version number, comprised of three non-negative integers in the format. The default value is "1.0.0"
     *
     * - DO NOT contain leading zeroes.
     * ```
     * ..
     * e.g. "2.1.0" (not "2.1")
     * ```
     *
     * - The major, minor, and revision numbers are all mandatory; otherwise, the app may not be installed.
     * Each number can have up to nine digits. For example, the maximum version is "999999999.999999999.999999999".
     *
     * - The major, minor, and revision numbers are discrete. For example, "1.5.3" is a lower version than "1.15.3".
     *
     * - After uploading your app on the LG Content Store, you cannot upload the same version of your app again.
     * To update and re-upload an app, you must increase the version number.
     */
    version: string;
    /**
     * The brief information about your app.
     *
     * Think of this as a short tagline for the app. It cannot exceed 60 characters.
     */
    appDescription?: string | undefined;
    /**
     * The color of the app background in the Launcher.
     *
     * It is displayed when the bgImage is not provided or unable to display.
     * You can specify the color as a hex value or as an HTML color name.
     * - `Example`: "bgColor":"#5e70a2, "bgColor":"#ffffff"
     *
     * This property is only available in webOS TV v1.x and v2.x. This property is ignored from webOS TV v3.0 or later.
     */
    bgColor?: string | undefined;
    /**
     * The background image displayed for your app when activated in the Launcher.
     *
     * The image must be in PNG format, and the image size must be 1920 x 1080 pixels. The file path must be relative to the appinfo.json file.
     * - `Example`: "image/myappbgimage.png"
     *
     * This property is only available in webOS TV v1.x and v2.x. This property is ignored in webOS TV v3.0 or later.
     */
    bgImage?: string | undefined;
    /**
     * Set whether your app needs to receive the back key event when the back button of the remote control unit is pressed.
     * For more information about this property, see Back Button.
     * - false (default) - Your app does not need to receive the back key event.
     * Instead, the webOS TV platform manages history using standard HTML history API such as history.pushState(), history.back(), and popState event.
     * - true - Your app needs to receive the back key event. You should implement the method of how to process the back key event in your app.
     */
    disableBackHistoryAPI?: boolean;
    /**
     * Determines how your web app handles the webOSRelaunch event.
     *
     * The webOSRelaunch event occurs whenever your web app is re-launched irrespective of handlesRelaunch property value.
     * webOS TV platform will pass the webOSRelaunch event to your app.
     * This value determines whether the app can take background action or not.
     *
     * If your app sets `handlesRelaunch` to:
     * - false (default) - Your app does not handle the webOSRelaunch event.
     * webOS TV platform will automatically display your app in the full-screen mode.
     * - true - Your app needs to handle the webOSRelaunch event in the background for a while.
     * Then, your app comes to the foreground by calling the PalmSystem.activate() method. See App Lifecycle for more details.
     */
    handlesRelaunch?: boolean | undefined;
    /*
     * The background color for your app tile.
     *
     * The app tile is displayed in the Home, the Launcher, and the Recent screen. The default value is white.
     */
    iconColor?: string | undefined;
    /**
     * The minimum amount of memory in megabytes required to run your app. This is not the same as the maximum memory usage while your app is running.
     */
    requiredMemory?: number | undefined;
    /**
     * The screen resolution of your app.
     *
     * webOS TV does not support UHD resolution for web apps. webOS TV supports the following resolutions:
     * - "1920x1080": FHD resolution (default)
     * - "1280x720": HD resolution
     */
    resolution?: string | undefined;
    /**
     * The app background that overlays the system background.
     *
     * This property configures the transparency of the app's background.
     * If you do not set the background color or background image, the system background (black color) is displayed.
     * - false (default) - The transparency rate of the app background is decreased and the system background is shown as a little grey color.
     * - true - The system background is displayed clearly.
     */
    transparent?: string | undefined;
}

export interface DeviceInfo {
    /**
     * The model name of the device in UTF-8 format.
     */
    modelName: string;
    /**
     * The model name of the device in ASCII format.
     */
    modelNameAscii: string;
    /**
     * The full name of OS firmware version.
     */
    version: string;
    /**
     * The subset of OS version: Major version number.
     */
    versionMajor: number;
    /**
     * The subset of OS version: Minor version number.
     */
    versionMinor: number;
    /**
     * The subset of OS version: Revision version number.
     */
    versionDot: number;
    /**
     * The webOS SDK version.
     */
    sdkVersion: string;
    /**
     * The screen width in pixels.
     */
    screenWidth: number;
    /**
     * The screen Height in pixels.
     */
    screenHeight: number;
    /**
     * Indicates whether the device supports Ultra HD resolution.
     * - true: The device supports Ultra HD resolution.
     * - false: The device does not support Ultra HD resolution.
     */
    uhd?: boolean | undefined;
    /**
     * Indicates whether the device supports 8K UHD resolution.
     * - true: The device supports 8K UHD resolution.
     * - false: The device does not support 8K UHD resolution.
     */
    uhd8K?: boolean | undefined;
    /**
     * Indicates whether the display type of device is OLED or not.
     * - true: The display type is OLED.
     * - false: The display type is LCD.
     * On the previous version of webOS TV that does not support this property, return undefined.
     */
    oled?: boolean | undefined;
    /**
     * The size of DDR DRAM in Bytes. For example, if the size of DDR DRAM is 3G, the return value is '3G'.
     * On the previous version of webOS TV that does not support this property, return undefined.
     */
    ddrSize?: string | undefined;
    /**
     * Indicate whether the device supports HDR10.
     * true: The device supports HDR10.
     * false: The device does not support HDR10.
     */
    hdr10?: boolean | undefined;
    /**
     * Indicate whether the device supports Dolby Vision.
     * true: The device supports Dolby Vision.
     * false: The device does not support Dolby Vision.
     */
    dolbyVision?: boolean | undefined;
    /**
     * Indicate whether the device supports Dolby Atmos.
     * true: The device supports Dolby Atmos.
     * false: The device does not support Dolby Atmos.
     */
    dolbyAtmos?: boolean | undefined;
}

export interface OnCompleteSuccessResponse {
    returnValue: true;
}

export interface OnCompleteFailureResponse {
    returnValue: false;
    errorCode: string;
    errorText: string;
}

export interface SystemInfo {
    /**
     * The country that TV broadcasts. If the value does not exist, undefined is returned
     */
    country?: string | undefined;
    /**
     * The country where the Smart service is provided. If the value does not exist, undefined is returned
     */
    smartServiceCountry?: string | undefined;
    /**
     * The time zone that TV broadcasts. If the value does not exist, undefined is returned
     */
    timezone?: string | undefined;
}

export interface DRMAgent {
    /**
     * Returns a client ID of DRM.
     */
    getClientId(): string;
    /**
     * Returns a DRM type to be set.
     */
    getDrmType(): DrmType;
    /**
     * Returns an error code from the DRM service.
     */
    getErrorCode(): number;
    /**
     * Returns a text represented by an error from the DRM service.
     */
    getErrorText(): string;
    /**
     * Returns error information when an error of the DRM license occurs during content playback.
     * This method is supported in the following DRM type only:
     * - PlayReady
     */
    getRightsError(params: GetRightsErrorParameters): void;
    /**
     * Checks whether a DRM client that corresponds to given application ID exists.
     */
    isLoaded(params: IsLoadedParameters): void;
    /**
     * Creates a client instance for a certain type of DRM.
     * The DRM type is specified when a DRM agent is created.
     */
    load(params: LoadParameters): void;
    /**
     * Sends a DRM message to a DRM service.
     * After receiving the message, the DRM service starts to parse the message and perform the DRM operation.
     */
    sendDrmMessage(params?: SendDrmMessageParameters): void;
    /**
     * Removes a DRM client instance and deallocates relevant resources.
     */
    unload(params: UnloadParameters): void;
}

export interface GetRightsErrorParameters {
    /**
     * The callback function called when the method succeeds.
     */
    onSuccess: (response: GetRightsErrorSuccessResponse) => void;
    /**
     * The callback function called when the method fails.
     */
    onFailure: (error: FailureResponse) => void;
}

export interface GetRightsErrorSuccessResponse {
    /**
     *  Flag that indicates success/failure of the request.
     * - true: Success
     * - false: Failure
     */
    returnValue: boolean;
    /**
     * Flag that indicates whether the subscription is enabled or not.
     * - true: Enabled
     * - false: Not enabled
     */
    subscribed: boolean;
    /**
     * `errorCode` contains the error code if the method fails. The method will return errorCode only if it fails.
     */
    errorCode?: number | undefined;
    /**
     * `errorText` contains the error text if the method fails. The method will return errorText only if it fails.
     */
    errorText?: string | undefined;
}

export interface IsLoadedParameters {
    /**
     * The callback function called when the method succeeds.
     */
    onSuccess: (response: IsLoadedSuccessResponse) => void;
    /**
     * The callback function called when the method fails.
     */
    onFailure: (error: FailureResponse) => void;
}

export interface IsLoadedSuccessResponse {
    /**
     * Indicates the DRM client is loaded.
     * - true: the DRM client is loaded.
     * - false: the DRM client is not loaded.
     */
    loadStatus: boolean;
    /**
     * Returns the loaded client ID when the DRM client is loaded successfully.
     */
    clientId: string;
    /**
     * Returns the client type of DRM when the DRM client is loaded successfully.
     */
    drmType: DrmType;
}

export interface FailureResponse {
    /**
     * The error code returned when the method fails.
     */
    errorCode: string | number;
    /**
     * The error text returned when the method fails.
     */
    errorText: string;
}

export interface LoadParameters {
    /**
     * The callback function called when the method succeeds.
     */
    onSuccess: (response: LoadSuccessResponse) => void;
    /**
     * The callback function called when the method fails.
     */
    onFailure: (error: FailureResponse) => void;
}

export interface LoadSuccessResponse {
    /**
     * If the DRM agent loaded the DRM client successfully, return its client ID.
     */
    clientId: string;
}

export interface SendDrmMessageParameters {
    /**
     * The message to be provided to the underlying DRM server, which is formatted according to the DRM type.
     */
    msg: string;
    /**
     * The callback function called when the method succeeds.
     */
    onSuccess: (response: SendDrmMessageSuccessResponse) => void;
    /**
     * The callback function called when the method fails.
     */
    onFailure: (error: FailureResponse) => void;
}

export interface SendDrmMessageSuccessResponse {
    /**
     * The unique ID of message which has led to this resulting message.
     */
    msgId?: string | undefined;
    /**
     * The result code only for PlayReady.
     */
    resultCode?: number | undefined;
    /**
     * The DRM system specific result message only for PlayReady.
     */
    resultMsg?: string | undefined;
}

export interface UnloadParameters {
    /**
     * The callback function called when the method succeeds.
     */
    onSuccess: (response: {}) => void;
    /**
     * The callback function called when the method fails.
     */
    onFailure: (error: FailureResponse) => void;
}

/**
 * The webOSDev API provides methods for device information, digital right management (DRM), and app launch.
 * @see https://webostv.developer.lge.com/api/webostvjs/webosdev/
 */
export interface WebOSDev {
    /**
     * A member representing the list of built-in apps on the webOS TV opened to external developers.
     */
    readonly APP: {
        /** The built-in browser on the webOS TV */
        BROWSER: string;
    };
    /**
     * An object containing properties that represent the DRM error number and the DRM type.
     */
    readonly DRM: {
        /** The error number from DRM service */
        Error: DRMError;
        /** The type of DRM */
        Type: DRMType;
    };
    readonly connection: {
        /**
         * Returns the network connection state.
         */
        getStatus(parameters: GetConnectionStatusParameters): void;
    };
    /**
     * Returns DRMAgent instance of a specific DRM type.
     * @param type The DRM type to be set to the DRMAgent instance.
     * The value of the DRM type must be taken from `DRM.Type` field (`DRM.Type.PLAYREADY` or `DRM.Type.WIDEVINE`)
     *
     * @example
     * const drmAgent = webOSDevPromised.drmAgent(webOSDevPromised.DRM.Type.PLAYREADY);
     */
    drmAgent(type: DrmType): DRMAgent;
    /**
     * Launches an application with parameters.
     * @param parameters The JSON object containing an app ID, parameters
     */
    launch(parameters: LaunchParameters): void;
    /**
     * Passes parameters of an app launched by the webOSDev.launch method.
     */
    launchParams(): Record<string, any>;
    /**
     * Returns a device ID provided by the webOS TV since webOS TV 3.0.
     */
    LGUDID(parameters: LGUDIDParameters): void;
}

export interface DRMError {
    /**
     * No error.
     */
    NOT_ERROR: number;
    /**
     * The DRM client is not loaded.
     */
    CLIENT_NOT_LOADED: number;
    /**
     * The vendor managed error.
     */
    VENDOR_ERROR: number;
    /**
     * This API is not supported in the activated DRM.
     */
    API_NOT_SUPPORTED: number;
    /**
     * There is no process matching to the client ID.
     */
    WRONG_CLIENT_ID: number;
    /**
     * It cannot find a key file in DRM store.
     */
    KEY_NOT_FOUND: number;
    /**
     * A part of parameters is not valid data or format.
     */
    INVALID_PARAMS: number;
    /**
     * It's not a supported DRM type.
     */
    UNSUPPORTED_DRM_TYPE: number;
    /**
     * The key file is not a valid format.
     */
    INVALID_KEY_FORMAT: number;
    /**
     * It cannot get the valid time information.
     */
    INVALID_TIME_INFO: number;
    /**
     * The DRM type of the currently loaded client is not matched with the DRM type
     * that was set when the DRM agent is created.
     */
    DRM_TYPE_UNMATCHED: number;
    /**
     * It's an unknown error.
     */
    UNKNOWN_ERROR: number;
}

export interface DRMType {
    PLAYREADY: 'PLAYREADY';
    WIDEVINE: 'WIDEVINE';
}

export type DrmType = 'PLAYREADY' | 'WIDEVINE';

export interface GetConnectionStatusParameters {
    /**
     * Indicates whether to subscribe the network connection status.
     * - true: Subscribe the network connection status.
     * - false: Not subscribe the network connection status.
     */
    subscribe: boolean;
    /**
     * The callback function called when the method succeeds.
     */
    onSuccess: (result: ConnectionStatus) => void;
    /**
     * The callback function called when the method fails.
     */
    onFailure: (error: FailureResponse) => void;
}

export interface ConnectionStatus {
    /**
     * Indicates whether the internet connection is available.
     * - true: The internet connection is available.
     * - false: The internet connection is unavailable.
     */
    isInternetConnectionAvailable: boolean;
    /**
     * The object that contains information about the state of the wired connection.
     */
    wired: WiredStatus;
    /**
     * The object that contains information about the state of the WiFi connection.
     */
    wifi: WifiStatus;
    /**
     * The object that contains information about the state of the WiFi direct connection.
     */
    wifiDirect: WifiDirectStatus;
}

/**
 * The wired object provides details on the status of the wired connections.
 * Only if the wired connection is available will all the fields of this object contain the relevant information.
 * If the wired connection is not available, the state field of this object will be set to disconnected
 * and is the only value that is returned to the calling app.
 */
export interface WiredStatus {
    /**
     * If the wired connection is available it will be set to connected.
     * If the wired connection is not available, it will be set to disconnected .
     */
    state: ConnectionState;
    /**
     * Name of the wired Interface name in use. For example, ppp0.
     */
    interfaceName?: string | undefined;
    /**
     * The IP address associated with the wired connection.
     */
    ipAddress?: string | undefined;
    /**
     * The netmask value for the wired connection.
     */
    netmask?: string | undefined;
    /**
     * The IP address of the network gateway.
     */
    gateway?: string | undefined;
    /**
     * Primary DNS address for the wired connection.
     */
    dns1?: string | undefined;
    /**
     * Secondary DNS address for the wired connection.
     */
    dns2?: string | undefined;
    /**
     * Tertiary DNS address for the wired connection.
     */
    dns3?: string | undefined;
    /**
     * If the IP address was assigned using the manual mode, method will contain 'Manual'.
     * If the IP Address was assigned through DHCP, method will contain 'dhcp'.
     */
    method?: 'Manual' | 'dhcp' | undefined;
    /**
     * The captive portal technique forces an HTTP client on a network to see a special web page
     * (usually for authentication purposes) before using the Internet normally.
     * Captive portals are used at most Wi-Fi hotspots.
     * The onInternet will contain one of the following values:
     * - 'yes' - indicating the WiFi connection is connected to the Internet.
     * - 'no' - indicating the WiFi connection is not connected to the Internet.
     */
    onInternet?: 'yes' | 'no' | undefined;
}

/**
 * The wifi object provides details on the status of the WiFi connection.
 * Only if the WiFi connection is available all the fields of this object will contain the relevant information.
 * If the WiFi connection is not available, only the state field of this object will be set to disconnected,
 * and is the only value that is returned to the calling app.
 */
export interface WifiStatus {
    /**
     * If the Wi-Fi connection is available it will be set to 'connected'.
     * If the Wi-Fi connection is not available, it will be set to 'disconnected' .
     */
    state: ConnectionState;
    /**
     * Name of the Wi-Fi Interface name in use. For example, eth0.
     */
    interfaceName?: string | undefined;
    /**
     * The IP address associated with the Wi-Fi connection.
     */
    ipAddress?: string | undefined;
    /**
     * The netmask value for the Wi-Fi connection.
     */
    netmask?: string | undefined;
    /**
     * The IP address of the network gateway.
     */
    gateway?: string | undefined;
    /**
     * Primary DNS address for the Wi-Fi connection.
     */
    dns1?: string | undefined;
    /**
     * Secondary DNS address for the Wi-Fi connection.
     */
    dns2?: string | undefined;
    /**
     * Tertiary DNS address for the Wi-Fi connection.
     */
    dns3?: string | undefined;
    /**
     * If the IP address was assigned using the manual mode, method will contain 'Manual'.
     * If the IP Address was assigned through DHCP, method will contain 'dhcp'.
     */
    method?: 'Manual' | 'dhcp' | undefined;
    /**
     * The SSID of the connected service (if known).
     */
    ssid?: string | undefined;
    /**
     * If the Wi-Fi interface was set to stay up even when suspended, isWakeOnWiFiEnabled will contain true.
     * If the Wi-Fi interface was not set to stay up when suspended, isWakeOnWiFiEnabled will contain false.
     */
    isWakeOnWiFiEnabled?: boolean | undefined;
    /**
     * The captive portal technique forces an HTTP client on a network to see a special web page
     * (usually for authentication purposes) before using the Internet normally.
     * Captive portals are used at most Wi-Fi hotspots.
     * The onInternet will contain one of the following values:
     * - yes - indicating the Wi-Fi connection is connected to the Internet.
     * - no - indicating the Wi-Fi connection is not connected to the Internet.
     */
    onInternet?: 'yes' | 'no' | undefined;
}

/**
 * The wifidirect object provides details on the status of the Wi-Fi direct connection.
 * Only if the Wi-Fi direct connection is available all the fields of this object will contain the relevant information.
 * If the Wi-Fi direct connection is not available, only the state field of this object will be set to disconnected,
 * and is the only value that is returned to the calling app.
 */
export interface WifiDirectStatus {
    /**
     * If the Wi-Fi connection is available it will be set to 'connected'.
     * If the Wi-Fi connection is not available, it will be set to 'disconnected'.
     */
    state: ConnectionState;

    /**
     * The IP address of the local connection endpoint.
     */
    localIp?: string | undefined;

    /**
     * A list of objects that provides information about connected peers.
     */
    connectedPeers?: WifiPeerInfo[] | undefined;
}

export type ConnectionState = 'connected' | 'disconnected';

/**
 * This object contains information on a peer-to-peer client.
 */
export interface WifiPeerInfo {
    /**
     * Device name.
     */
    deviceName: string;
    /**
     * Device address.
     */
    deviceAddress?: string | undefined;
    /**
     * Group owner.
     */
    groupOwner: boolean;
    /**
     * Configuration method.
     */
    configMethod?: number | undefined;
    /**
     * Signal level.
     */
    signalLevel?: number | undefined;
    /**
     * WFD information.
     */
    wfdInfo?: WifiWfdInfo | undefined;
    /**
     * Connection status.
     */
    connected: boolean;
    /**
     * IPv4 address.
     */
    peerIp?: string | undefined;
    /**
     * If the connection is available, this property will be set to 'true'.
     * if the connection is not available, this property will be set to 'false'.
     */
    invited?: 'true' | 'false' | undefined;
    /**
     * Service discovery response. Only sent on the first inquiry and never again.
     */
    serviceDiscoveryResponse?: string | undefined;
}

/**
 * WifiWfdInfo Object (Wi-Fi Direct Info Object)
 *
 * This object contains information on the Wi-Fi Direct settings of a Wi-Fi Peer connection.
 * It is used in Wi-Fi Peer Info and is only present when the connection uses Wi-Fi Direct.
 */
export interface WifiWfdInfo {
    /**
     * The flag that indicates whether the Wi-Fi Direct content protection is supported:
     * - true: Supported.
     * - false: Not supported.
     */
    wfdCpSupport: boolean;
    /**
     * Wi-Fi Direct device type, one of:
     * - 'source'
     * - 'primary-sink'
     * - 'secondary-sink'
     */
    wfdDeviceType: WfdDeviceType;
    /**
     * Control port for Wi-Fi Direct session management.
     */
    wfdRtspPort: number;
    /**
     * The flag that indicates whether the session is available:
     * - true: Available.
     * - false: Not available.
     */
    wfdSessionAvail: boolean;
}

export type WfdDeviceType = 'source' | 'primary-sink' | 'secondary-sink';

export interface LaunchParameters {
    /**
     * The app ID or webOSDev.APP
     */
    id: string;
    /**
     * The JSON data object to pass when launching an app
     */
    params: Record<string, any>;
    /**
     * The callback function called when the method succeeds.
     */
    onSuccess: () => void;
    /**
     * The callback function called when the method fails.
     */
    onFailure: (error: FailureResponse) => void;
}

export interface LGUDIDParameters {
    /**
     * The callback function called when the method succeeds.
     */
    onSuccess: (result: LGUDIDResponse) => void;
    /**
     * The callback function called when the method fails.
     */
    onFailure: (error: FailureResponse) => void;
}

export interface LGUDIDResponse {
    /**
     * LG unique device ID.
     */
    id: string;
}

/**
 * Describes the properties of the mediaOption parameter.
 * @see http://webostv.developer.lge.com/api/web-api/mediaoption-parameter/
 */
export interface MediaOptions {
    mediaTransportType?: 'URI' | 'WIDEVINE' | 'HLS';
    option: {
        /**
         * The object that holds information of media format.
         */
         mediaFormat?: MediaOptionsMediaFormat | undefined;
        /**
         * Object that holds DRM information.
         */
        drm?: MediaOptionsDrm | undefined;
        /**
         * The object that holds information of media content which is specific
         * by server type and transmission protocol.
         * This object is sent to the media pipeline.
         */
        transmission?: MediaOptionsTransmission | undefined;
        /**
         * The object that holds information of network transmission status.
         */
        adaptiveStreaming?: MediaOptionsAdaptiveStreaming | undefined;
        /**
         * 3D Mode Type
         */
        '3dMode'?:
            // This format displays content with the 2 Dimensional mode.
            '2D' |
            // This format divides the screen lengthwise and puts two different frames for the left and right eyes top and down to create a single 3D frame image.
            'top_bottom' |
            // This format works in the same way as top_bottom, but the positions of the top and bottom frames are switched.
            'bottom_top' |
             // This format divides the screen widthwise and puts two different frames for the left and right eyes side by side to create a single 3D frame image.
            'side_by_side_LR' |
            // This format works in the same way as side_by_side_LR, but positions of the left and right frames are switched.
            'side_by_side_RL' |
            // In this format, a 3D frame image is created by arranging the left and right eye frames in a mosaic pattern like a checkerboard.
            'check_board' |
            // Left and right frames are sent alternately to the display and by diverse systems like shuttered glasses or polarized glasses are then shown to each eye.
            'frame-sequential' |
            // This format interleaves the left and right eye views on every other vertical column in the display window
            'column_interleave' |
            // Frame Packing refers to the combination of two frames,
            // one for the left eye and the other for the right eye,
            // into a single “packed” frame that consists of these two individual sub-frames.
            // The key difference of a Frame Packing signal is that each sub-frame for each eye is still at full resolution, i.e., 1920×1080 for a 1080p Frame Packing signal,
            // and 1280×720 for 720p Frame Packing 3D content.
            'frame_packing' |
            // Field Alternative is similar to Frame packing type. However, this type refers to the combination of more than 4 frames. This type breaks down each eye's frame to several field frames.
            'field_alternative' |
            // Line Alternative breaks down each eye's frame to the line by line.
            'line_alternative' |
            // This format encodes the screen framewise(L to R) and puts two different frames into each frame. for the left and right eyes side by side to create each frame.
            'side_by_side_full_LR' |
            // This format encodes the screen framewise(R to L) and puts two different frames into each frame. for the left and right eyes side by side to create each frame.
            'side_by_side_full_RL';
    };
}

export interface MediaOptionsDrm {
    clientId: string;
    type: 'widevine' | 'playready';
    widevine?: {
        seperatedStream: boolean;
    } | undefined;
}

export interface MediaOptionsTransmission {
    playTime?: {
        start?: number | undefined;
    } | undefined;
}

export interface MediaOptionsAdaptiveStreaming {
    /**
     * The flag that indicates streaming mode.
     * This property can be used when transmitting the audio-only streaming
     * (such as music service or radio service) with HLS protocol. The default value is false.
     * - true: audio only
     * - false: video/audio
     */
    audioOnly?: boolean | undefined;
    /**
     * The flag that indicates whether screen ratio can be changed by network status. The default value is false.
     * - true: changeable
     * - false: unchangeable
     */
    apativeResolution?: boolean | undefined;
    /**
     * Flag whether content supports seamless play. The default value is false.
     * - true: support seamless play
     * - false: not support
     */
    seamlessPlay?: boolean | undefined;
    /**
     * The maximum screen width of the content. The default value is 1920.
     */
    maxWidth?: number | undefined;
    /**
     * Maximum screen height of the content. The default value is 1080.
     */
    maxHeight?: number | undefined;
    /**
     * The object that holds information to control network transmit speed.
     */
    bps?: {
        /**
         * Minimum speed of network transmission. (bps)
         */
        minimum?: number | undefined;
        /**
         * Maximum speed of network transmission. (bps)
         */
        maximum?: number | undefined;
        /**
         * Starting speed of network transmission. (bps)
         */
        start?: number | undefined;
    } | undefined;
}

export interface MediaOptionsMediaFormat {
    /**
     * The string that sets media type. The default value is video.
     */
    type: 'audio' | 'video' | 'video_only' | 'audio_test';
}
