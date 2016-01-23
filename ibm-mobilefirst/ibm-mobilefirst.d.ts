// Type definitions for IBM MobileFirst Platform Foundation
// Project: http://www.ibm.com/software/products/en/mobilefirstfoundation
// Definitions by: Guillermo Ignacio Enriquez Gutierrez <https://github.com/nacho4d>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module WL.Events {
    var WORKLIGHT_IS_CONNECTED: string;
    var WORKLIGHT_IS_DISCONNECTED: string;
}
declare module WL.AppProperty {
    var AIR_ICON_16x16_PATH: string;
    var AIR_ICON_128x128_PATH: string;
    var DOWNLOAD_APP_LINK: string;
    var APP_DISPLAY_NAME: string;
    var APP_LOGIN_TYPE: string;
    var APP_VERSION: string;
    var LATEST_VERSION: string;
    var MAIN_FILE_PATH: string;
    var SHOW_IN_TASKBAR: string;
    var THUMBNAIL_IMAGE_URL: string;
}
declare module WL.Environment {
    var ADOBE_AIR: string;
    var ANDROID: string;
    var EMBEDDED: string;
    var IPAD: string;
    var IPHONE: string;
    var MOBILE_WEB: string;
    var PREVIEW: string;
    var WINDOWS_PHONE_8: string;
    var WINDOWS8: string;
}
declare module WL {
    interface IResponse {
        invocationContext?: any;
    }
    interface Headers {
        [key: string]: string;
    }
    class ResponseBase {
        invocationContext: any;
        headerJSON: {[key: string]: any}; // JSON Object
        readyState: number;
        request: any;
        responseJSON: {[key: string]: any}; // JSON Object
        responseText: string;
        responseXML: string;
        status: number;
        statusText: string;
        errorCode: number;
        errorMsg: string;
    }
    class FailureResponse extends ResponseBase {
    }
    class Response extends ResponseBase {
        getHeaderNames(): string[];
        getAllHeaders(): Headers;
        getHeader(name: any): string;
    }
    interface Options {
        onSuccess?: (response: IResponse) => void;
        onFailure?: (response: IResponse) => void;
        invocationContext?: any;
    }
    interface ResponseHandler<T> {
        (response: T): void;
    }
}
declare module WL.Analytics {
    function disable(): void;
    function enable(): void;
    function log(message: string, name: string): void;
    /**
     * @deprecated since version 6.2. WL.Analytics.restart is now a NOP.
     */
    function restart(): void;
    function send(): void;
    function state(): void;
}
declare module WL.App {
    interface ActionReceiverCallback {
        (action: any): void;
    }
    interface Callback {
        (): void;
    }
    interface OpenURLOptions {
        status?: number;
        toolbar?: number;
        location?: number;
        menubar?: number;
        directories?: number;
        resizable?: number;
        scrollbars?: number;
    }
    interface Data {
    }
    interface KeepAliveInBackgroundOptions {
        tickerText?: string;
        contentTitle?: string;
        contentTextText?: string;
        icon?: string;
        notificationId?: number;
        className?: string;
    }
    function addActionReceiver(id: string, callback: ActionReceiverCallback): void;
    /**
     * @deprecate Deprecated.
     */
    function close(): void;
    function copyToClipboard(stringToCopy: string, callback?: Callback): void;
    function getDeviceLanguage(): string;
    function getDeviceLocale(): string;
    /**
     * TODO: declare exception type. (Exceptions that are thrown by the IBM® Worklight® client runtime framework)
     */
    function getErrorMessage(exception: any): string;
    function hideSplashScreen(): void;
    function openURL(url: string, target?: string, options?: OpenURLOptions): void;
    function overrideBackButton(callback: Callback): void;
    function removeActionReceiver(id: string): void;
    /**
     * @deprecated since version 6.0.0
     */
    function resetBackButton(): void;
    function sendActionToNative(action: string, data?: Data): void;
    function setKeepAliveInBackground(enabled: boolean, options?: KeepAliveInBackgroundOptions): void;
    function showSplashScreen(): void;
}
declare module WL.App.BackgroundHandler {
    interface Handler {
        (): void;
    }
    function setOnAppEnteringBackground(handler: Handler): void;
    var hideView: Handler;
    var defaultIOSBehavior: Handler;
    /**
     * @deprecated since version 6.0.0
     */
    var hideElements: Handler;
}
declare module WL.Badge {
    function setNumber(badgeNumber: number): void;
}
declare module WL {
    interface BusyIndicatorOptions {
        tickerText?: string;
        contentTitle?: string;
        contentTextText?: string;
        icon?: string;
        notificationId?: number;
        className?: string;
    }
    class BusyIndicator {
        constructor(containerId?: string, options?: BusyIndicator);
        hide(): void;
        show(): void;
    }
}
declare module WL.Client {
    interface SharedTokenObject {
        key: string;
    }
    interface ConnectOptions {
        onSuccess: (response: ResponseBase) => void;
        onFailure: (response: FailureResponse) => void;
        timeout?: number;
    }
    interface ChallengehandlerInvocationData {
        adapter: string;
        procedure: string;
        parameters: any[];
    }
    interface ChallengeHandlerAuthenticationOptions {
    }
    interface ChallengeHandlerSubmitLoginFormOptions {
        timeout?: number;
        headers?: Object;
        parameters?: Object;
    }
    class AbstractChallengeHandler {
        handleChallenge(challenge: any): boolean;
        isCustomResponse(transport: any): boolean;
        submitAdapterAuthentication(invocationData: ChallengehandlerInvocationData, options: ChallengeHandlerAuthenticationOptions): void;
        submitFailure(error: string): void;
        submitLoginForm(reqURL: string, options: ChallengeHandlerSubmitLoginFormOptions, submitLoginFormCallback: (transport: any) => void): void;
        submitSuccess(): void;
    }
    interface InitOptions extends Options {
        timeout?: number;
        /**
         * @deprecated since version 6.2. Use WL.Logger.config function with an object specifying the level instead.
         */ 
        enableLogger?: boolean;
        messages?: string;
        authenticator?: Object;
        heartBeatIntervalInSecs?: number;
        /**
         * @deprecated. If you would like your application to connect to the Worklight Server, use WL.Client.connect().
         */
        connectOnStartup?: boolean;
        onConnectionFailure?: (response: WL.FailureResponse) => void;
        onUnsupportedVersion?: (response: WL.FailureResponse) => void;
        onRequestTimeout?: (response: WL.FailureResponse) => void;
        onUnsupportedBrowser?: (response: WL.FailureResponse) => void;
        onDisabledCookies?: (response: WL.FailureResponse) => void;
        onUserInstanceAccessViolation?: (response: WL.FailureResponse) => void;
        onErrorRemoteDisableDenial?: (response: WL.FailureResponse) => void;
        /**
         * @deprecated since version 5.0.6. Instead, use onErrorRemoteDisableDenial.
         */
        onErrorAppVersionAccessDenial?: (response: WL.FailureResponse) => void;
        validateArguments?: boolean;
        autoHideSplash?: boolean;
        onGetCustomDeviceProvisioningProperties: (resumeDeviceProvisioningProcess: (data: any) => void) => void;
    }
    interface ProcedureInvocationData {
        adapter: string;
        procedure: string;
        parameters?: any[];
        compressResponse?: boolean;
    }
    interface ProcedureInvocationResult {
        isSuccessful: boolean;
        errors?: string[];
    }
    interface ProcedureResponse extends ResponseBase {
        invocationResult?: ProcedureInvocationResult;
        parameters?: any[];
    }
    interface ProcedureInvocationOptions extends Options {
        timeout: number;
        onSuccess: (response: ProcedureResponse) => void;
    }
    function addGlobalHeader(headerName: string, headerValue: string): void;
    function checkForDirectUpdate(options: Options): void;
    function clearSharedToken(object: SharedTokenObject): JQueryDeferred<any>;
    function close(): void;
    function connect(options?: ConnectOptions): void;
    function createChallengeHandler(realmName: string): AbstractChallengeHandler;
    function createProvisioningChallengeHandler(realmName: string): AbstractChallengeHandler;
    function createWLChallengeHandler(realName: string): AbstractChallengeHandler;
    function deleteUserPref(key: string, options?: Options): void;
    /**
     * See WL.AppProperty for possible results
     */
    function getAppProperty(property: any): any;
    /**
     * See WL.Environment for possible results
     */
    function getEnvironment(): string;
    function getLanguage(): string;
    function getLastAccessToken(scope?: string): string;
    function getLoginName(realmName: string): string;
    /**
     * @deprecated since version 7.0
     */
    function getRequiredAccessTokenScope(status: number, header: string): string;
    function getSharedToken(object: SharedTokenObject): JQueryDeferred<any>;
    function getUserInfo(realm: string, key: string): any;
    function getUserName(realm: any): string;
    function getUserPref(key: any): any;
    function hasUserPref(key: any): boolean;
    function init(options: InitOptions): void;
    function invokeProcedure(invocationData: ProcedureInvocationData, options?: ProcedureInvocationOptions): JQueryDeferred<Response>;
    /**
     * @deprecated since version 4.1.3. Use WL.Device.getNetworkInfo instead.
     */
    function isConnected(): void;
    function isUserAuthenticated(realm: string): boolean;
    /**
     * @deprecated since version 7.0. Use WL.Logger instead.
     */
    function logActivity(activityType: string): void;
    function login(realm: string, options?: Options): void;
    function logout(realm: string, options?: Options): void;
    function minimize(): void;
    /**
     * @deprecated since version 7.0
     */
    function obtainAccessToken(scope: string, onSuccess: ResponseHandler<Response>, onFailure: ResponseHandler<FailureResponse>): void;
    function purgeEventTransmissionBuffer(): void;
    function reloadApp(): void;
    function removeGlobalHeader(headerName: string): void;
    interface EventTransmissionPolicy {
        eventStorageEnabled?: boolean;
        interval?: number;
    }
    function setEventTransmissionPolicy(policy: EventTransmissionPolicy): void;
    function setHeartBeatInterval(interval: number): void;
    function setSharedToken(token: SharedTokenObject): void;
    function setUserPref(key: string, value: string, options?: Options): void;
    interface UserPreferences {
        [key: string]: string;
    }
    function setUserPrefs(userPrefsHash: UserPreferences, options?: Options): void;
    function transmitEvent(event: any, immediate?: boolean): void;
    function updateUserInfo(options: Options): void;
}
declare module WL.Device {
    interface AddressPair {
        wifiAddress: string;
        "3GAddress": string;
    }
    interface NetworkInfo {
        isNetworkConnected?: boolean;
        isAirplaneMode?: boolean;
        isRoaming?: boolean;
        networkConnectionType?: string;
        wifiName?: string;
        telephonyNetworkType?: string;
        carrierName?: string;
        ipAddress?: string;
        Ipv4Addresses?: AddressPair[];
        Ipv6Addresses?: AddressPair[];
    }
    function getNetworkInfo(callback: (networkInfo: NetworkInfo) => void): void;
}
declare module WL.EncryptedCache {
    var OK: number;
    var ERROR_COULD_NOT_GENERATE_KEY: number;
    var ERROR_CREDENTIALS_MISMATCH: number;
    var ERROR_EOC_CLOSED: number;
    var ERROR_EOC_DELETED: number;
    var ERROR_EOC_TO_BE_DELETED: number;
    var ERROR_INVALID_PARAMETER: number;
    var ERROR_KEY_CREATION_IN_PROGRESS: number;
    var ERROR_LOCAL_STORAGE_NOT_SUPPORTED: number;
    var ERROR_MIGRATION: number;
    var ERROR_NO_EOC: number;
    var ERROR_NO_SUCH_KEY: number;
    var ERROR_SECURE_RANDOM_GENERATOR_UNAVAILABLE: number;
    var ERROR_UNKNOWN: number;
    var ERROR_UNSAFE_CREDENTIALS: number;
    /**
     * See above statuses for possible values
     */
    interface StatusHandler {
        (status: number): void;
    }
    function close(successHandler: StatusHandler, failureHandler: StatusHandler): void;
    function destroy(successHandler: StatusHandler, failureHandler: StatusHandler): void;
    function open(credentials: string, createIfNone: boolean, successHandler: StatusHandler, failureHandler: StatusHandler): void;
    function read(key: string, successHandler: StatusHandler, failureHandler: StatusHandler): void;
    function remove(key: string, successHandler: StatusHandler, failureHandler: StatusHandler): void;
    function write(key: string, value: string, successHandler: StatusHandler, failureHandler: StatusHandler): void;
}
declare module WL.Geo {
    interface Coordinate {
        latitute: number;
        longitude: number;
    }
    interface Circle extends Coordinate {
        radius: number;
    }
    interface DistanceOptions {
        bufferZoneWidth: number;
    }
    interface InsideOutsideOptions {
        /**
         * confidenceLevel can be 'low', 'medium', 'high'
         */
        confidenceLevel: string;
    }
    function getDistanceBetweenCoordinates(coordinate1: Coordinate, coordinate2: Coordinate): number;
    function getDistanceToCircle(coordinate: Coordinate, circle: Circle, options: DistanceOptions): number;
    function getDistanceToPolygon(coordinate: Coordinate, polygon: Coordinate[], options: DistanceOptions): number;
    function isInsideCircle(coordinate: Coordinate, circle: Circle, options: InsideOutsideOptions): boolean;
    function isInsidePolygon(coordinate: Coordinate, polygon: Coordinate[], options: InsideOutsideOptions): boolean;
    function isOutsideCircle(coordinate: Coordinate, circle: Circle, options: InsideOutsideOptions): boolean;
    function isOutsidePolygon(coordinate: Coordinate, polygon: Coordinate[], options: InsideOutsideOptions): boolean;
}
declare module WL {
    class Item {
        setEnabled(isEnable: string): void;
        setImagePath(imagePath: string): void;
        setTitle(title: string): void;
    }
}
declare module WL.JSONStore {
    /**
     * Changes the password for the internal storage. You must have an initialized collection before calling WL.JSONStore.changePassword.
     */
    function changePassword(oldPassword: string, newPassword: string, username: string, options: WL.Options): JQueryDeferred<any>;
    /**
     * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.init
     */
    function clearPassword(): boolean;
    /**
     * Locks access to all the collections until WL.JSONStore.init is called.
     */
    function closeAll(options?: WL.Options): JQueryDeferred<any>;
    /**
     * Commit a transaction.
     */
    function commitTransaction(): JQueryDeferred<number>;
    /**
     * Completely wipes data for all users, destroys the internal storage, and clears security artifacts.
     * @parameters options is @deprecated
     */
    function destroy(username: string, options?: WL.Options): JQueryDeferred<number>;
    /**
     * @deprecated since version 6.2.0.
     */
    function documentify(id: number, data: any): any;
    /**
     * Returns information about the file that is used to persist data in the store. The following key value pairs are returned:
     * name - name of the store
     * size - the total size, in bytes, of the store
     * isEncrypted - boolean that is true when encrypted and false otherwise.
     */
    function fileInfo(): JQueryDeferred<any>;
    /**
     * Provides an accessor to the collection if the collection exists, otherwise it returns undefined.
     */
    function get(collectionName: string): JSONStoreInstance;
    /**
     * Returns the message that is associated with a JSONStore error code.
     */
    function getErrorMessage(errorCode: number): string;
    interface InitOptions {
        username?: string;
        password?: string;
        clear?: boolean;
        localKeyGen?: boolean;
        analytics?: boolean;
    }
    function init(collections: any, options?: InitOptions): JQueryDeferred<any>;
    /**
     * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.init
     */
    function initCollection(name: string, searchFields: any, options?: InitOptions): WL.JSONStore.JSONStoreInstance;
    /**
     * Creates a query for advanced find. See WL.JSONStore.QueryPart for more information.
     */
    function QueryPart(): QueryPartObj;
    /**
     * Roll back a transaction
     */
    function rollbackTransaction(): JQueryDeferred<number>;
    /**
     * Initiates a transaction
     */
    function startTransaction(): JQueryDeferred<number>;
    /**
     * Sets the password that is used to generate keys to encrypt data that is stored locally on the device.
     * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.init
     */
    function usePassword(pwd: string): boolean;
    interface AddOptions extends WL.Options {
        additionalSearchFields?: any;
        markDirty?: boolean;
        /**
         * @deprecated
         */
        push?: boolean;
    }
    interface BasicFindOptions extends WL.Options {
        filter?: string[];
        sort?: string[];
    }
    interface AdvancedFindOptions extends BasicFindOptions {
        limit?: number;
        offset?: number;
    }
    interface FindOptions extends BasicFindOptions {
        exact?: boolean;
        limit?: number;
        offset?: number;
    }
    interface EraseOptions extends WL.Options {
        push?: boolean;
    }
    interface RefreshOptions extends WL.Options {
        push: boolean;
    }
    interface ChangeOptions extends WL.Options {
        addNew?: boolean;
        markDirty?: boolean;
        replaceCriteria?: string[];
    }
    interface RemoveOptions extends WL.Options {
        markDirty?: boolean;
        /**
         * @deprecated
         */
        push?: boolean;
        exact?: boolean;
    }
    interface ReplaceOptions extends WL.Options {
        markDirty?: boolean;
        /**
         * @deprecated
         */
        push?: boolean;
    }
    interface StoreOptions extends WL.Options {
        additionalSearchFields?: Object;
        push?: boolean;
    }
    class JSONStoreInstance {
        add(data: any, options?: AddOptions): JQueryDeferred<any>;
        advancedFind(query: any[], options?: AdvancedFindOptions): JQueryDeferred<any>;
        change(data: any, options?: ChangeOptions): JQueryDeferred<any>;
        clear(options?: WL.Options): JQueryDeferred<any>;
        count(query?: any, options?: WL.Options): JQueryDeferred<any>;
        countAllDirty(options?: WL.Options): JQueryDeferred<any>;
        enhance(name: string, fn: Function): number;
        /**
         * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.JSONStoreInstance.remove with {push: false}.
         */
        erase(doc: any, options?: EraseOptions): void;
        find(query: Object | Object[], options?: FindOptions): JQueryDeferred<any>;
        findAll(options?: BasicFindOptions): JQueryDeferred<any>;
        findById(options?: WL.Options): JQueryDeferred<any>;
        isDirty(doc: any, options?: WL.Options): JQueryDeferred<boolean>;
        /**
         * @deprecated since version 6.2.0.
         */
        load(options?: WL.Options): JQueryDeferred<any>;
        markClean(docs: any[], options?: WL.Options): JQueryDeferred<any>;
        /**
         * @deprecated since version 6.2.0.
         */
        push(options?: any): JQueryDeferred<any>;
        /**
         * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.JSONStoreInstance.push.
         */
        pushSelected(doc: any, options?: WL.Options): JQueryDeferred<any>;
        /**
         * @deprecated since version 5.0.6. It is no longer needed if you use WL.JSONStore.JSONStoreInstance.replace with {push: false}.
         */
        refresh(doc: any, options?: RefreshOptions): JQueryDeferred<any>;
        remove(doc: any, options?: RemoveOptions): JQueryDeferred<any>;
        /**
         * Deletes all the documents that are stored inside a collection.
         */
        removeCollection(options?: WL.Options): JQueryDeferred<any>;
        replace(doc: Object | Object[], options?: ReplaceOptions): JQueryDeferred<any>;
        /**
         * Writes data to a collection.
         * @deprecated since version 5.0.6, it is no longer needed if you use WL.JSONStore.JSONStoreInstance.add with {push: false}.
         */
        store(data: Object | Object[], options?: StoreOptions): void;
        toString(limit?: number, offset?: number): JQueryDeferred<number>;
    }
    class QueryPartObj {
        /**
         * Add a between clause to a query for advanced find.
         */
        between(searchField: any, value: any): any[];
        /**
         * Add an equal to clause to a query for advanced find.
         */
        equal(searchField: any, value: any): any[];
        /**
         * Add a greater or equal thanclause to a query for advanced find.
         */
        greaterOrEqualThan(searchField: any, value: any): any[];
        /**
         * Add a greater than clause to a query for advanced find.
         */
        greaterThan(searchField: any, value: any): any[];
        /**
         * Add an in clause to a query for advanced find.
         */
        inside(searchField: any, value: any): any[];
        /**
         * Add a left clause to a query for advanced find.
         */
        leftLike(searchField: any, value: any): any[];
        /**
         * Add a less or equal than clause to a query for advanced find.
         */
        lessOrEqualThan(searchField: any, value: any): any[];
        /**
         * Add a less than clause to a query for advanced find.
         */
        lessThan(searchField: any, value: any): any[];
        /**
         * Add a like clause to a query for advanced find.
         */
        like(searchField: any, value: any): any[];
        /**
         * Add a not between clause to a query for advanced find.
         */
        notBetween(searchField: any, value: any): any[];
        /**
         * Add a not equal to clause to a query for advanced find.
         */
        notEqual(searchField: any, value: any): any[];
        /**
         * Add a not in clause to a query for advanced find.
         */
        notInside(searchField: any, value: any): any[];
        /**
         * Add a not left clause to a query for advanced find.
         */
        notLeftLike(searchField: any, value: any): any[];
        /**
         * Add a not like clause to a query for advanced find.
         */
        notLike(searchField: any, value: any): any[];
        /**
         * Add a not right clause to a query for advanced find.
         */
        notRightLike(searchField: any, value: any): any[];
        /**
         * Add a right clause to a query for advanced find.
         */
        rightLike(searchField: any, value: any): any[];
    }
}
declare module WL.LocalStorage {
    function getValue(key: string): string;
    function setValue(key: string, value: string): void;
    function clear(key: string): void;
    function clearAll(): void;
}
declare module WL {
    var Logger: LoggerObject;
    interface LoggerCallback {
        (message: string | string[], level: string, package: string): void;
    }
    interface Tag {
        level?: boolean;
        tag?: boolean;
    }
    interface Filter {
        [name: string]: string;
    }
    interface LoggerOptions {
        stringify?: boolean;
        pretty?: boolean;
        stacktrace?: boolean;
        callback?: LoggerCallback;
        pkg?: string;
        tag?: Tag;
        /**
         * @deprecated since version 6.2. use filters instead.
         */
        whitelist?: string[];
        /**
         * @deprecated since version 6.2. use filters instead.
         */
        blacklist?: string[];
        filters?: Filter;
        capture?: boolean;
        autoSendLogs?: boolean;
        maxFileSize?: number;
        level?: string[] | string | number;
    }
    interface NativeOptions {
        maxFileSize?: number;
        level?: string;
        capture?: boolean;
        autoSendLogs?: boolean;
        autoUpdateConfig?: boolean;
        filters?: Filter;
    }
    /**
     * Artifact to allow chaining of Logger class as: WL.Logger.ctx({pkg: 'something'}).debug('Hello world');
     */
    class LoggerObject {
        /**
        * Configures the logger globally.
        */
        config(options?: LoggerOptions): LoggerObject;
        /**
         * Creates an instance of a logger with its own context (also called status or state).
         */
        create(options?: LoggerOptions): LogInstance;
        /**
         * Updates the state (also called context or status) of the logger.
         */
        ctx(options?: LoggerOptions): WL.LoggerObject;
        /**
         * Prints arguments to the console.
         */
        debug(message: string): void;
        /**
         * Prints arguments to the console.
         */
        error(message: string): void;
        /**
         * Prints arguments to the console.
         */
        fatal(message: string): void;
        /**
         * Prints arguments to the console.
         */
        info(message: string): void;
        /**
         * Prints arguments to the console.
         */
        log(message: string): void;
        /**
         * Attach additional metadata to the next logger instance call.
         */
        metadata(options: any): LoggerObject;
        /**
         * @deprecated since version 6.2. WL.Logger.on is now a no-op. WL.Logger is always enabled. Use WL.Logger.config with {'level': 'FATAL'} to reduce verbosity.
         */
        off(): WL.LoggerObject;
        /**
         * @deprecated since version 6.2. WL.Logger.on is now a no-op. WL.Logger is always enabled. Use WL.Logger.config with {'level': 'FATAL'} to reduce verbosity.
         */
        on(options: any): WL.LoggerObject;
        /**
         * Send any logs collected up to this point to the IBM® Worklight® server.
         */
        send(): JQueryDeferred<any>;
        /**
         * @deprecated since version 6.2. Use WL.Logger.config instead. Sets options in native application layer (iOS and Android only)
         */
        setNativeOptions(options?: NativeOptions): void;
        /**
         * Shows the status (current configuration) of the logger.
         */
        status(): JQueryDeferred<any>;
        /**
         * Prints arguments to the console.
         */
        trace(message: string): void;
        /**
         * Retrieves and applies any matching configuration profile from the IBM® Worklight® Server.
         */
        updateConfigFromServer(): JQueryDeferred<any>;
        /**
         * Prints arguments to the console.
         */
        warn(message: string): void;
    }
    /**
     * Class which defines instances created via:  WL.Logger.create({pkg: 'something'});
     * Actual definition is outside of WL namespace. For easier d.ts file compiling it is here
     */
    class LogInstance {
        debug(message: string): void;
        error(message: string): void;
        fatal(message: string): void;
        info(message: string): void;
        trace(message: string): void;
        warn(message: string): void;
    }
}
declare module WL.NativePage {
    function show(className: string, callback: (data: any) => void, data: any): void;
}
declare module WL.SecurityUtils {
    interface DecryptOptions {
        key: string;
        ct: string;
        lv: string;
        src: string;
        v: string;
    }
    interface EncryptOptions {
        key: string;
        text: string;
    }
    interface KeygenOptions {
        password: string;
        salt: string;
        iterations: number;
    }
    function base64Decode(input: string): JQueryDeferred<string>;
    function base64Encode(input: string): JQueryDeferred<string>;
    function decrypt(options: DecryptOptions): JQueryDeferred<string>;
    function encrypt(options: EncryptOptions): JQueryDeferred<string>;
    function keygen(options: KeygenOptions): JQueryDeferred<string>;
    function localRandomString(bytes?: number): JQueryDeferred<string>;
    function remoteRandomString(bytes?: number): JQueryDeferred<string>;
}
declare module WL.SimpleDialog {
    interface Button {
        text: string;
        handler?: Function;
    }
    interface Options {
        title: string;
        text: string;
    }
    function show(title: string, text: string, buttons: Button[], options?: Options): void;
}

declare module WL.TabBar {
    interface ItemOptions {
        image: string;
        badge?: string; // for iOS
        imageSelected?: string; // for Android
    }
    function addItem(id: string, callback: Function, title: string, options: ItemOptions): WL.TabBarItem;
    function init(): void;
    function isVisible(): boolean;
    function RemoveAllItems(): void;
    function setEnabled(isEnabled: boolean): void;
    /**
     * @deprecated
     */
    function setParentDivId(parentId: string): void;
    function setSelectedItem(id: string): void;
    function setVisible(isVisible: boolean): void;
}

declare module WL {
    class TabBarItem {
        setEnabled(isEnabled: boolean): void;
        updateBadge(badge?: string): void;
    }
}

declare module WL.Toast {
    function show(): void;
}
declare module WL.Trusteer {
    interface AssesmentRisk {
        value: number;
        additionalData: string;
        lastCalculated: number;
        name: string;
    }
    interface AssetmentRisks {
        device_key: string;
        'malware.any'?: AssesmentRisk;
        'network.wifi'?: AssesmentRisk;
        'os.rooted'?: AssesmentRisk;
        'os.rooted.native'?: AssesmentRisk;
        'os.rooted.hiders'?: AssesmentRisk;
        'os.ver_up_to_date'?: AssesmentRisk;
        'plat.android.dumpsys'?: AssesmentRisk;
        'plat.android.apprestrict'?: AssesmentRisk;
        'total.risk.generic'?: AssesmentRisk;
        'tas.config_update'?: AssesmentRisk;
    }
    function getRiskAssessment(onSuccess: ResponseHandler<Response>, onFailure: ResponseHandler<FailureResponse>): AssetmentRisks;
}
declare module WL.UserAuth {
    function deleteCertificate(provisioningEntity?: string): JQueryDeferred<void>;
}
declare module WLAuthorizationManager {
    /**
     * AuthorizationPersistencePolicy possible values
     */
    var ALWAYS: string;
    var NEVER: string;
    interface RequestObject {
        setRequestHeader: (header: string, value: string) => void;
    }
    function addCachedAuthorizationHeader(request: RequestObject): JQueryDeferred<RequestObject>;
    function getAppIdentity(): JQueryDeferred<any>;
    function getAuthorizationScope(responseAuthenticationHeader: string): string;
    /**
     * TODO: Set Promise types. Should be something like: JQueryDeferred<data, error>()
     */
    function getCachedAuthorizationHeader(): JQueryDeferred<any>;
    /**
     * TODO: Set Promise types. Should be something like: JQueryDeferred<data, error>()
     */
    function getDeviceIdentity(): JQueryDeferred<any>;
    /**
     * TODO: Set Promise types. Should be something like: JQueryDeferred<data, error>()
     */
    function getUserIdentity(): JQueryDeferred<any>;
    function isAuthorizationRequired(responseStatus: number, responseAuthenticationHeader: string): boolean;
    /**
     * TODO: Set Promise types. Should be something like: JQueryDeferred<header, error>()
     */
    function obtainAuthorizationHeader(scope: string): JQueryDeferred<any>;
    /**
     * See WLAuthorizarionManager.NEVER and WLAuthorizarionManager.ALWAYS
     */
    function setAuthorizationPersistencePolicy(authorizationPersistencePolicy: string): void;
}

declare module WL {
    var ClientMessages: { [name: string]: string };
}

declare class WLResourceRequest {
    constructor(url: string, method: string, timeout?: number);
    addHeader(name: string, value: string|number|boolean): void;
    getHeader(name: string): string;
    getHeaderNames(): string[];
    getHeaders(name: string): string[];
    getMethod(): string;
    getQueryParameters(): any; // JSON 
    getTimeout(): number;
    getUrl(): string;
    send(content?: any): JQueryDeferred<any>;
    sendFormParameters(json: Object): JQueryDeferred<any>;
    setHeader(name: string, value: string|number|boolean): void;
    setHeaders(requestHeaders?: { [name: string]: string|string[] }): void;
    setQueryParameter(name: string, value: string|number|boolean|Object): void;
    setQueryParameters(parameters?: { [name: string]: string|number|boolean|Object }): void;
    setTimeout(requestTimeout: number): void;

    static GET: string;
    static POST: string;
    static PUT: string;
    static DELETE: string;
    static HEAD: string;
    static OPTIONS: string;
    static TRACE: string;
    static CONNECT: string;
}
