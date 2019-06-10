// Type definitions for react-native-mauron85-background-geolocation 0.5
// Project: https://github.com/mauron85/react-native-background-geolocation#readme
// Definitions by: Györög Norbert <https://github.com/djereg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export type Event = 'location' | 'stationary' | 'activity' | 'start' | 'stop' | 'error' | 'authorization' | 'foreground' | 'background' | 'abort_requested';
export type iOSActivityType = 'AutomotiveNavigation' | 'OtherNavigation' | 'Fitness' | 'Other';
export type Provider = 'gps' | 'network' | 'passive' | 'fused';
export type ActivityType = 'IN_VEHICLE' | 'ON_BICYCLE' | 'ON_FOOT' | 'RUNNING' | 'STILL' | 'TILTING' | 'UNKNOWN' | 'WALKING';
export type LogLevel = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';
export type HeadlessTaskEventName = 'location' | 'stationary' | 'activity';

export interface ConfigureOptions {
    /**
     * Set location provider
     * Platform: all
     * @default DISTANCE_FILTER_PROVIDER
     * @see {@link https://github.com/mauron85/react-native-background-geolocation/blob/master/PROVIDERS.md|PROVIDERS}
     */
    locationProvider?: number;

    /**
     * Desired accuracy in meters. Possible values [HIGH_ACCURACY, MEDIUM_ACCURACY, LOW_ACCURACY, PASSIVE_ACCURACY].
     * Accuracy has direct effect on power drain. Lower accuracy = lower power drain.
     * Platform: all
     * Provider: all
     * @default MEDIUM_ACCURACY
     */
    desiredAccuracy?: number;

    /**
     * Stationary radius in meters. When stopped, the minimum distance the device must move beyond the stationary location for aggressive background-tracking to engage.
     * Platform: all
     * Provider: DISTANCE_FILTER
     * @default 50
     */
    stationaryRadius?: number;

    /**
     * When enabled, the plugin will emit sounds for life-cycle events of background-geolocation! See debugging sounds table.
     * Platform: all
     * Provider: all
     * @default false
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#debugging-sounds|Debugging sounds}
     */
    debug?: boolean;

    /**
     * The minimum distance (measured in meters) a device must move horizontally before an update event is generated.
     * Platform: all
     * Provider: DISTANCE_FILTER, RAW
     * @default 500
     * @see {@link https://apple.co/2oHo2CV|Apple docs}
     */
    distanceFilter?: number;

    /**
     * Enable this in order to force a stop() when the application terminated (e.g. on iOS, double-tap home button, swipe away the app).
     * Platform: all
     * Provider: all
     * @default true
     */
    stopOnTerminate?: boolean;

    /**
     * Start background service on device boot.
     * Platform: Android
     * Provider: all
     * @default false
     */
    startOnBoot?: boolean;

    /**
     * The minimum time interval between location updates in milliseconds.
     * Platform: Android
     * Provider: all
     * @default 60000
     * @see {@link https://bit.ly/1x00RUu|Android docs}
     */
    interval?: number;

    /**
     * Fastest rate in milliseconds at which your app can handle location updates.
     * Platform: Android
     * Provider: ACTIVITY
     * @default 120000
     * @see {@link https://bit.ly/1x00RUu|Android docs}
     */
    fastestInterval?: number;

    /**
     * Rate in milliseconds at which activity recognition occurs. Larger values will result in fewer activity detections while improving battery life.
     * Platform: Android
     * Provider: ACTIVITY
     * @default 10000
     */
    activitiesInterval?: number;

    /**
     * DEPRECATED!
     * Stop location updates, when the STILL activity is detected.
     * Platform: Android
     * Provider: ACTIVITY
     * @default true
     */
    stopOnStillActivity?: boolean;

    /**
     * Enable/disable local notifications when tracking and syncing locations.
     * Platform: Android
     * Provider: all
     * @default true
     */
    notificationsEnabled?: boolean;

    /**
     * Allow location sync service to run in foreground state. Foreground state also requires a notification to be presented to the user.
     * Platform: Android
     * Provider: all
     * @default false
     */
    startForeground?: boolean;

    /**
     * Custom notification title in the drawer.
     * Platform: Android
     * Provider: all
     * @default "Background tracking"
     */
    notificationTitle?: string;

    /**
     * Custom notification text in the drawer.
     * Platform: Android
     * Provider: all
     * @default "ENABLED"
     */
    notificationText?: string;

    /**
     * The accent color to use for notification. Eg. <code>#4CAF50</code>.
     * Platform: Android
     * Provider: all
     */
    notificationIconColor?: string;

    /**
     * The filename of a custom notification icon.
     * Platform: Android
     * Provider: all
     */
    notificationIconLarge?: string;

    /**
     * The filename of a custom notification icon.
     * Platform: Android
     * Provider: all
     */
    notificationIconSmall?: string;

    /**
     * Presumably, this affects iOS GPS algorithm.
     * [AutomotiveNavigation, OtherNavigation, Fitness, Other]
     * Platform: iOS
     * Provider: all
     * @default "OtherNavigation"
     * @see {@link https://apple.co/2oHofpH|Apple docs}
     */
    activityType?: iOSActivityType;

    /**
     * Pauses location updates when app is paused.
     * Platform: iOS
     * Provider: all
     * @default false
     * @see {@link https://apple.co/2CbjEW2|Apple docs}
     */
    pauseLocationUpdates?: boolean;

    /**
     * Switch to less accurate significant changes and region monitory when in background.
     * Platform: iOS
     * Provider: all
     * @default false
     */
    saveBatteryOnBackground?: boolean;

    /**
     * Server url where to send HTTP POST with recorded locations
     * Platform: all
     * Provider: all
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#http-locations-posting|HTTP locations posting}
     */
    url?: string;

    /**
     * Server url where to send fail to post locations
     * Platform: all
     * Provider: all
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#http-locations-posting|HTTP locations posting}
     */
    syncUrl?: string;

    /**
     * Specifies how many previously failed locations will be sent to server at once.
     * Platform: all
     * Provider: all
     * @default 100
     */
    syncThreshold?: string;

    /**
     * Optional HTTP headers sent along in HTTP request.
     * Platform: all
     * Provider: all
     */
    httpHeaders?: any;

    /**
     * Limit maximum number of locations stored into db.
     * Platform: all
     * Provider: all
     * @default 10000
     */
    maxLocations?: number;

    /**
     * Customization post template.
     * Platform: all
     * Provider: all
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#custom-post-template|Custom post template}
     */
    postTemplate?: any;
}

export interface LocationOptions {
    /**
     * Maximum time in milliseconds device will wait for location.
     */
    timeout?: number;

    /**
     * Maximum age in milliseconds of a possible cached location that is acceptable to return.
     */
    maximumAge?: number;

    /**
     * If true and if the device is able to provide a more accurate position, it will do so.
     */
    enableHighAccuracy?: boolean;
}

export interface LocationError {
    /** Reason of an error occurring when using the geolocating device. */
    code: number;

    /** Message describing the details of the error */
    message: string;
}

export interface Location {
    /** ID of location as stored in DB (or null) */
    id: number;
    provider: Provider;
    locationProvider: number;
    /** UTC time of this fix, in milliseconds since January 1, 1970. */
    time: number;
    /** Latitude, in degrees. */
    latitude: number;
    /** Longitude, in degrees. */
    longitude: number;
    /** Estimated accuracy of this location, in meters. */
    accuracy: number;
    /** Speed if it is available, in meters/second over ground. */
    speed: number;
    /** Altitude if available, in meters above the WGS 84 reference ellipsoid. */
    altitude: number;
    /** Bearing, in degrees. */
    bearing: number;
    /** True if location was recorded by mock provider. (ANDROID ONLY) */
    isFromMockProvider?: boolean;
    /** True if device has mock locations enabled. (ANDROID ONLY) */
    mockLocationsEnabled?: boolean;
}

export interface Activity {
    /** Percentage indicating the likelihood user is performing this activity. */
    confidence: number;
    /** IN_VEHICLE, ON_BICYCLE, ON_FOOT, RUNNING, STILL, TILTING, UNKNOWN, WALKING */
    type: ActivityType;
}

export interface LogEntry {
    /** ID of log entry as stored in db. */
    id: number;
    /** Timestamp in milliseconds since beginning of UNIX epoch. */
    timestamp: number;
    level: string;
    message: string;
    /** Recorded stacktrace. (Android only, on iOS part of message) */
    stackTrace: string;
}

export interface ServiceStatus {
    isRunning: boolean;
    locationServicesEnabled: boolean;
    authorization: number;
    hasPermissions: boolean;
}

export interface EventSubscription {
    remove(): void;
}

export interface HeadlessTaskEvent {
    /** Name of the event [ "location", "stationary", "activity" ] */
    name: HeadlessTaskEventName;
    /**
     * Event parameters.
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#events|Events}
     */
    params: any;
}

export interface BackgroundGeolocationStatic {
    DISTANCE_FILTER_PROVIDER: 0;
    ACTIVITY_PROVIDER: 1;
    RAW_PROVIDER: 2;

    BACKGROUND_MODE: 0;
    FOREGROUND_MODE: 1;

    NOT_AUTHORIZED: 0;
    AUTHORIZED: 1;
    AUTHORIZED_FOREGROUND: 2;

    HIGH_ACCURACY: 0;
    MEDIUM_ACCURACY: 100;
    LOW_ACCURACY: 1000;
    PASSIVE_ACCURACY: 10000;

    LOG_ERROR: 'ERROR';
    LOG_WARN: 'WARN';
    LOG_INFO: 'INFO';
    LOG_DEBUG: 'DEBUG';
    LOG_TRACE: 'TRACE';

    PERMISSION_DENIED: 1;
    LOCATION_UNAVAILABLE: 2;
    TIMEOUT: 3;

    events: Event[];

    /**
     * Platform: iOS, Android
     * @param options
     * @param success
     * @param fail
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#configureoptions-success-fail|Docs}
     */
    configure(options: ConfigureOptions, success?: () => void, fail?: () => void): void;

    /**
     * Start background geolocation.
     * Platform: iOS, Android
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#start|Docs}
     */
    start(): void;

    /**
     * Stop background geolocation.
     * Platform: iOS, Android
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#stop|Docs}
     */
    stop(): void;

    /**
     * One time location check to get current location of the device.
     * Platform: iOS, Android
     * @param success
     * @param fail
     * @param options
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#getcurrentlocationsuccess-fail-options|Docs}
     */
    getCurrentLocation(success: (location: Location) => void, fail: (error: LocationError) => void, options: LocationOptions): void;

    /**
     * One time check for status of location services. In case of error, fail callback will be executed.
     * This method is deprecated and will be removed in next major version. Use <code>checkStatus<code> as replacement.
     * Platform: iOS, Android
     * @param success
     * @param fail
     * @deprecated
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#islocationenabledsuccess-fail|Docs}
     */
    isLocationEnabled(success: (enabled: boolean) => void, fail?: () => void): void;

    /**
     * Check status of the service.
     * @param success
     * @param fail
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#checkstatussuccess-fail|Docs}
     */
    checkStatus(success: (status: ServiceStatus) => void, fail?: () => void): void;

    /**
     * Show app settings to allow change of app location permissions.
     * Platform: Android >= 6, iOS >= 8.0
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#showappsettings|Docs}
     */
    showAppSettings(): void;

    /**
     * Show system settings to allow configuration of current location sources.
     * Platform: Android
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#showlocationsettings|Docs}
     */
    showLocationSettings(): void;

    /**
     * Method will return all stored locations. This method is useful for initial rendering of user location on a map just after application launch.
     * Platform: iOS, Android
     * @param success
     * @param fail
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#getlocationssuccess-fail|Docs}
     */
    getLocations(success: (locations: Location[]) => void, fail?: () => void): void;

    /**
     * Method will return locations which have not yet been posted to server.
     * Platform: iOS, Android
     * @param success
     * @param fail
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#getvalidlocationssuccess-fail|Docs}
     */
    getValidLocations(success: (location: Location[]) => void, fail?: () => void): void;

    /**
     * Delete location with locationId.
     * Platform: iOS, Android
     * @param locationId
     * @param success
     * @param fail
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#deletelocationlocationid-success-fail|Docs}
     */
    deleteLocation(locationId: number, success?: () => void, fail?: () => void): void;

    /**
     * Delete all stored locations.
     * Platform: iOS, Android
     * You don't need to delete all locations.
     * The plugin manages the number of stored locations automatically and the total count never exceeds the number as defined by <code>option.maxLocations</code>.
     * @param success
     * @param fail
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#deletealllocationssuccess-fail|Docs}
     */
    deleteAllLocations(success?: () => void, fail?: () => void): void;

    /**
     * Normally the plugin will handle switching between <b>BACKGROUND</b> and <b>FOREGROUND</b> mode itself.
     * Calling <code>switchMode</code> you can override plugin behavior and force it to switch into other mode.
     * Platform: iOS
     * @param modeId
     * @param success
     * @param fail
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#switchmodemodeid-success-fail|Docs}
     */
    switchMode(modeId: number, success?: () => void, fail?: () => void): void;

    /**
     * Force sync of pending locations.
     * Option <code>syncThreshold</code> will be ignored and all pending locations will be immediately posted to <code>syncUrl</code> in single batch.
     * Platform: Android, iOS
     * @param success
     * @param fail
     */
    forceSync(success?: () => void, fail?: () => void): void;

    /**
     * Return all logged events. Useful for plugin debugging.
     * Platform: Android, iOS
     * @param limit
     * @param fromId
     * @param minLevel
     * @param success
     * @param fail
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#getlogentrieslimit-fromid-minlevel-success-fail|Docs}
     */
    getLogEntries(limit: number, fromId: number, minLevel: LogLevel, success: (entries: LogEntry[]) => void, fail?: () => void): void;

    /**
     * Return all logged events. Useful for plugin debugging.
     * Platform: Android, iOS
     * @param limit
     * @param fromId
     * @param success
     * @param fail
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#getlogentrieslimit-fromid-minlevel-success-fail|Docs}
     */
    getLogEntries(limit: number, fromId: number, success: (entries: LogEntry[]) => void, fail?: () => void): void;

    /**
     * Return all logged events. Useful for plugin debugging.
     * Platform: Android, iOS
     * @param limit
     * @param success
     * @param fail
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#getlogentrieslimit-fromid-minlevel-success-fail|Docs}
     */
    getLogEntries(limit: number, success: (entries: LogEntry[]) => void, fail?: () => void): void;

    /**
     * Unregister all event listeners for given event.
     * @param event
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#removealllistenersevent|Docs}
     */
    removeAllListeners(event: Event): void;

    /**
     * Register event listener.
     * @param event
     * @param callbackfn
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#events|Docs}
     */
    on(event: Event, callbackfn: (...args: any[]) => void): EventSubscription;

    startTask(callbackfn: (taskKey: number) => void): void;

    endTask(taskKey: number): void;

    /**
     * A special task that gets executed when the app is terminated, but the plugin was configured to continue running in the background (option <code>stopOnTerminate: false</code>).
     * In this scenario the {@link https://bit.ly/2okJECK|Activity} was killed by the system and all registered event listeners will not be triggered until the app is relaunched.
     * @param callbackfn
     * @see {@link https://github.com/mauron85/react-native-background-geolocation#android-headless-task-experimental|Android Headless Task (Experimental)}
     */
    headlessTask(callbackfn: (event: HeadlessTaskEvent) => void): void;
}

declare const BackgroundGeolocation: BackgroundGeolocationStatic;

export default BackgroundGeolocation;
