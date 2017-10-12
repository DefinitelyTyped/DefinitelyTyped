// Type definitions for cordova.plugins.diagnostic v3.4.x
// Project: https://github.com/dpa99c/cordova-diagnostic-plugin
// Definitions by: Dave Alden <https://github.com/dpa99c>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="cordova" />

/**
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 */
interface Diagnostic {

    /**
     * ANDROID ONLY
     * "Dangerous" permissions that need to be requested at run-time (Android 6.0/API 23 and above)
     * See http://developer.android.com/guide/topics/security/permissions.html#perm-groups
     * @type {Object}
     */
    permission?: any;

    /**
     * ANDROID ONLY
     * Permission groups indicate which associated permissions will also be requested if a given permission is requested.
     * See http://developer.android.com/guide/topics/security/permissions.html#perm-groups
     * @type {Object}
     */
    permissionGroups?: any;

    /**
     * ANDROID and iOS ONLY
     * Constants for requesting and reporting the various permission states.
     * @type {Object}
     */
    permissionStatus?: any;

    /**
     * iOS ONLY
     * Location authorization mode
     * @type {Object}
     */
    locationAuthorizationMode?: any;


    /**
     * ANDROID ONLY
     * Constants for the various location modes on Android.
     * @type {Object}
     */
    locationMode?: any;

    /**
     * ANDROID and iOS ONLY
     * Constants for the various Bluetooth hardware states.
     * @type {Object}
     */
    bluetoothState?: any;


    /**
     * ANDROID ONLY
     * Constants for the various NFC power states.
     * @type {Object}
     */
    NFCState?: any;


    /**
     * Checks if app is able to access device location.
     * @param successCallback
     * @param errorCallback
     */
    isLocationAvailable: (
        successCallback: (available: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * Checks if Wifi is available.
     * On iOS this returns true if the device is connected to a network by WiFi.
     * On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled, and is the same as isWifiEnabled()
     * @param successCallback
     * @param errorCallback
     */
    isWifiAvailable: (
        successCallback: (available: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * Checks if camera is available.
     * On Android & iOS this returns true if the device has a camera AND the application is authorized to use it.
     * On Windows 10 Mobile this returns true if the device has a rear-facing camera.
     * @param successCallback
     * @param errorCallback
     */
    isCameraAvailable: (
        successCallback: (available: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * Checks if Bluetooth is available to the app.
     * Returns true if the device has Bluetooth capabilities AND if Bluetooth setting is switched on (same on Android, iOS and Windows 10 Mobile)
     * @param successCallback
     * @param errorCallback
     */
    isBluetoothAvailable: (
        successCallback: (available: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and WINDOWS ONLY
     * Displays the device location settings to allow user to enable location services/change location mode.
     */
    switchToLocationSettings?: () => void;

    /**
     * ANDROID and WINDOWS ONLY
     * Displays mobile settings to allow user to enable mobile data.
     */
    switchToMobileDataSettings?: () => void;

    /**
     * ANDROID and WINDOWS ONLY
     * Displays Bluetooth settings to allow user to enable Bluetooth.
     */
    switchToBluetoothSettings?: () => void;

    /**
     * ANDROID and WINDOWS ONLY
     * Displays WiFi settings to allow user to enable WiFi.
     */
    switchToWifiSettings?: () => void;

    /**
     * ANDROID and WINDOWS ONLY
     * Returns true if the WiFi setting is set to enabled, and is the same as isWifiAvailable()
     * @param successCallback
     * @param errorCallback
     */
    isWifiEnabled?: (
        successCallback: (enabled: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and WINDOWS ONLY
     * Enables/disables WiFi on the device.
     * @param successCallback
     * @param errorCallback
     * @param state
     */
    setWifiState?: (
        successCallback: (enabled: boolean) => void,
        errorCallback: (error: string) => void,
        state: boolean
    ) => void;

    /**
     * ANDROID and WINDOWS ONLY
     * Enables/disables Bluetooth on the device.
     * @param successCallback
     * @param errorCallback
     * @param state
     */
    setBluetoothState?: (
        successCallback: (enabled: boolean) => void,
        errorCallback: (error: string) => void,
        state: boolean
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Returns true if the device setting for location is on. 
     * On Android this returns true if Location Mode is switched on. 
     * On iOS this returns true if Location Services is switched on.
     * @param successCallback
     * @param errorCallback
     */
    isLocationEnabled?: (
        successCallback: (enabled: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Checks if the application is authorized to use location.
     * @param successCallback
     * @param errorCallback
     */
    isLocationAuthorized?: (
        successCallback: (authorized: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Returns the location authorization status for the application.
     * @param successCallback
     * @param errorCallback
     */
    getLocationAuthorizationStatus?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Requests location authorization for the application.
     * @param successCallback
     * @param errorCallback
     * @param mode - (iOS-only / optional) location authorization mode specified as a locationAuthorizationMode constant. If not specified, defaults to WHEN_IN_USE.
     */
    requestLocationAuthorization?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void,
        mode?: string
    ) => void;


    /**
     * ANDROID and iOS ONLY
     * Checks if camera hardware is present on device.
     * @param successCallback
     * @param errorCallback
     */
    isCameraPresent?: (
        successCallback: (present: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Checks if the application is authorized to use the camera.
     * @param successCallback
     * @param errorCallback
     */
    isCameraAuthorized?: (
        successCallback: (authorized: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Returns the camera authorization status for the application.
     * @param successCallback
     * @param errorCallback
     */
    getCameraAuthorizationStatus?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Requests camera authorization for the application.
     * @param successCallback
     * @param errorCallback
     */
    requestCameraAuthorization?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Checks if the application is authorized to use the microphone.
     * @param successCallback
     * @param errorCallback
     */
    isMicrophoneAuthorized?: (
        successCallback: (authorized: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Returns the microphone authorization status for the application.
     * @param successCallback
     * @param errorCallback
     */
    getMicrophoneAuthorizationStatus?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Requests microphone authorization for the application.
     * @param successCallback
     * @param errorCallback
     */
    requestMicrophoneAuthorization?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Checks if the application is authorized to use contacts (address book).
     * @param successCallback
     * @param errorCallback
     */
    isContactsAuthorized?: (
        successCallback: (authorized: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Returns the contacts authorization status for the application.
     * @param successCallback
     * @param errorCallback
     */
    getContactsAuthorizationStatus?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Requests contacts authorization for the application.
     * @param successCallback
     * @param errorCallback
     */
    requestContactsAuthorization?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Checks if the application is authorized to use the calendar.
     * @param successCallback
     * @param errorCallback
     */
    isCalendarAuthorized?: (
        successCallback: (authorized: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Returns the calendar authorization status for the application.
     * @param successCallback
     * @param errorCallback
     */
    getCalendarAuthorizationStatus?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Requests calendar authorization for the application.
     * @param successCallback
     * @param errorCallback
     */
    requestCalendarAuthorization?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Opens settings page for this app.
     * On Android, this opens the "App Info" page in the Settings app.
     * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
     */
    switchToSettings?: (
        successCallback: () => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Returns the state of Bluetooth on the device.
     * @param successCallback
     * @param errorCallback
     */
    getBluetoothState?: (
        successCallback: (state: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Registers a function to be called when a change in Bluetooth state occurs. Pass in a falsey value to de-register the currently registered function.
     * @param successCallback
     */
    registerBluetoothStateChangeHandler?: (
        successCallback: (state: string) => void
    ) => void;

    /**
     * ANDROID and iOS ONLY
     * Registers a function to be called when a change in Location state occurs. Pass in a falsey value to de-register the currently registered function.
     * On Android, this occurs when the Location Mode is changed.
     * On iOS, this occurs when location authorization status is changed. This can be triggered either by the user's response to a location permission authorization dialog, by the user turning on/off Location Services, or by the user changing the Location authorization state specifically for your app.
     * @param successCallback
     */
    registerLocationStateChangeHandler?: (
        successCallback: (state: string) => void
    ) => void;


    /**
     * ANDROID ONLY
     * Checks if high-accuracy locations are available to the app from GPS hardware.
     * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorised to use location.
     * @param successCallback
     * @param errorCallback
     */
    isGpsLocationAvailable?: (
        successCallback: (available: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Checks if the device location setting is set to return high-accuracy locations from GPS hardware.
     * Returns true if Location mode is enabled and is set to either Device only or High accuracy
     * @param successCallback
     * @param errorCallback
     */
    isGpsLocationEnabled?: (
        successCallback: (enabled: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorised to use location.
     * @param successCallback
     * @param errorCallback
     */
    isNetworkLocationAvailable?: (
        successCallback: (available: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Checks if the device location setting is set to return high-accuracy locations from GPS hardware.
     * Returns true if Location mode is enabled and is set to either Battery saving or High accuracy
     * @param successCallback
     * @param errorCallback
     */
    isNetworkLocationEnabled?: (
        successCallback: (enabled: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Returns the current location mode setting for the device.
     * @param successCallback
     * @param errorCallback
     */
    getLocationMode?: (
        successCallback: (mode: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Returns the current authorisation status for a given permission.
     * @param successCallback
     * @param errorCallback
     * @param permission
     */
    getPermissionAuthorizationStatus?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void,
        permission: string
    ) => void;

    /**
     * ANDROID ONLY
     * Returns the current authorisation status for multiple permissions.
     * @param successCallback
     * @param errorCallback
     * @param permissions
     */
    getPermissionsAuthorizationStatus?: (
        successCallback: (status: string[]) => void,
        errorCallback: (error: string) => void,
        permissions: string[]
    ) => void;

    /**
     * ANDROID ONLY
     * Requests app to be granted authorisation for a runtime permission.
     * @param successCallback
     * @param errorCallback
     * @param permission
     */
    requestRuntimePermission?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void,
        permission: string
    ) => void;

    /**
     * ANDROID ONLY
     * Requests app to be granted authorisation for multiple runtime permissions.
     * @param successCallback
     * @param errorCallback
     * @param permissions
     */
    requestRuntimePermissions?: (
        successCallback: (status: string[]) => void,
        errorCallback: (error: string) => void,
        permissions: string[]
    ) => void;

    /**
     * ANDROID ONLY
     * Indicates if the plugin is currently requesting a runtime permission via the native API.
     */
    isRequestingPermission?: () => boolean;

    /**
     * ANDROID ONLY
     * Registers a function to be called when a runtime permission request has completed. Pass in a falsey value to de-register the currently registered function.
     * @param successCallback
     */
    registerPermissionRequestCompleteHandler?: (
        successCallback: (statuses: any) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Checks if the device setting for Bluetooth is switched on.
     * @param successCallback
     * @param errorCallback
     */
    isBluetoothEnabled?: (
        successCallback: (enabled: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Checks if the device has Bluetooth capabilities.
     * @param successCallback
     * @param errorCallback
     */
    hasBluetoothSupport?: (
        successCallback: (supported: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Checks if the device has Bluetooth Low Energy (LE) capabilities.
     * @param successCallback
     * @param errorCallback
     */
    hasBluetoothLESupport?: (
        successCallback: (supported: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
     * @param successCallback
     * @param errorCallback
     */
    hasBluetoothLEPeripheralSupport?: (
        successCallback: (supported: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Checks if the application is authorized to use external storage.
     * @param successCallback
     * @param errorCallback
     */
    isExternalStorageAuthorized?: (
        successCallback: (authorized: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Returns the authorisation status for runtime permission to use the external storage.
     * @param successCallback
     * @param errorCallback
     */
    getExternalStorageAuthorizationStatus?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Requests authorisation for runtime permission to use the external storage.
     * @param successCallback
     * @param errorCallback
     */
    requestExternalStorageAuthorization?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Returns details of external SD card(s): absolute path, is writable, free space
     * @param successCallback
     * @param errorCallback
     */
    getExternalSdCardDetails?: (
        successCallback: (status: any) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Checks if NFC hardware is present on device.
     * @param successCallback
     * @param errorCallback
     */
    isNFCPresent?: (
        successCallback: (present: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Checks if the device setting for NFC is switched on.
     * @param successCallback
     * @param errorCallback
     */
    isNFCEnabled?: (
        successCallback: (present: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     *  Checks if NFC is available to the app.
     * @param successCallback
     * @param errorCallback
     */
    isNFCAvailable?: (
        successCallback: (present: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * ANDROID ONLY
     * Registers a function to be called when a change in NFC state occurs.
     * Pass in a falsey value to de-register the currently registered function.
     * @param successCallback
     */
    registerNFCStateChangeHandler?: (
        successCallback: (state: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Checks if the application is authorized to use the Camera Roll in Photos app.
     * @param successCallback
     * @param errorCallback
     */
    isCameraRollAuthorized?: (
        successCallback: (authorized: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Returns the authorization status for the application to use the Camera Roll in Photos app.
     * @param successCallback
     * @param errorCallback
     */
    getCameraRollAuthorizationStatus?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Requests camera roll authorization for the application.
     * @param successCallback
     * @param errorCallback
     */
    requestCameraRollAuthorization?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Checks if remote (push) notifications are enabled.
     * @param successCallback
     * @param errorCallback
     */
    isRemoteNotificationsEnabled?: (
        successCallback: (enabled: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Indicates if the app is registered for remote (push) notifications on the device.
     * @param successCallback
     * @param errorCallback
     */
    isRegisteredForRemoteNotifications?: (
        successCallback: (registered: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Indicates the current setting of notification types for the app in the Settings app.
     * @param successCallback
     * @param errorCallback
     */
    getRemoteNotificationTypes?: (
        successCallback: (types: any) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Checks if the application is authorized to use reminders.
     * @param successCallback
     * @param errorCallback
     */
    isRemindersAuthorized?: (
        successCallback: (authorized: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Returns the reminders authorization status for the application.
     * @param successCallback
     * @param errorCallback
     */
    getRemindersAuthorizationStatus?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Requests reminders authorization for the application.
     * @param successCallback
     * @param errorCallback
     */
    requestRemindersAuthorization?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Checks if the application is authorized for background refresh.
     * @param successCallback
     * @param errorCallback
     */
    isBackgroundRefreshAuthorized?: (
        successCallback: (authorized: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Returns the background refresh authorization status for the application.
     * @param successCallback
     * @param errorCallback
     */
    getBackgroundRefreshStatus?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Requests Bluetooth authorization for the application.
     * @param successCallback
     * @param errorCallback
     */
    requestBluetoothAuthorization?: (
        successCallback: () => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Checks if motion tracking is available on the current device.
     * @param successCallback
     * @param errorCallback
     */
    isMotionAvailable?: (
        successCallback: (available: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Checks if it's possible to determine the outcome of a motion authorization request on the current device.
     * @param successCallback
     * @param errorCallback
     */
    isMotionRequestOutcomeAvailable?: (
        successCallback: (available: boolean) => void,
        errorCallback: (error: string) => void
    ) => void;

    /**
     * iOS ONLY
     * Requests and checks motion authorization for the application.
     * @param successCallback
     * @param errorCallback
     */
    requestAndCheckMotionAuthorization?: (
        successCallback: (status: string) => void,
        errorCallback: (error: string) => void
    ) => void;
}

interface CordovaPlugins {
    diagnostic: Diagnostic
}