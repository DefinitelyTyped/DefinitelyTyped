// Type definitions for Microsoft Visual Studio Services v82.20150430.0900
// Project: http://www.visualstudio.com/integrate/extensions/overview
// Definitions by: Microsoft <vsointegration@microsoft.com>

/// <reference path='knockout.d.ts' />
/// <reference path='jquery.d.ts' />
/// <reference path='q.d.ts' />
//----------------------------------------------------------
// Common interfaces specific to WebPlatform area
//----------------------------------------------------------

/**
* VSS-specific options for VSS ajax requests
*/
interface IVssAjaxOptions {

    /*
    * Auth token manager that can be used to get and attach auth tokens to requests
    */
    authTokenManager?: IAuthTokenManager<any>;

    /**
    * App id to use to scope the auth token to. An unscoped token is generated if no app id is provided.
    */
    appId?: string;

    /**
     * If true, textStatus and jqXHR are added to the success callback. In this case, spread (instead of then) needs to be used (default false).
     */
    useAjaxResult?: boolean;
}

/**
* Event listener for VSS ajax events. Gets notified before and after each request
*/
interface IVssAjaxEventListener {

    /**
    * Method invoked before a request is sent
    *
    * @param requestId A unique id that can be used to track this particular request (id is unique among all clients)
    * @param requestUrl Url of the request that is about to be issued
    * @param ajaxOptions Ajax settings/options for the request
    * @param vssRequestOptions Additional VSS-specific options supplied in the request
    */
    beforeRequest?: (requestId: number, requestUrl: string, ajaxOptions: JQueryAjaxSettings, vssRequestOptions: IVssAjaxOptions) => void;

    /**
    * Method invoked when a response has been received
    *
    * @param requestId A unique id that can be used to track this particular request (id is unique among all clients)
    * @param data The response data
    * @param textStatus A string indicating status of the request
    * @param jqXHR: The jQuery XHR object for the request
    * @param vssRequestOptions Additional VSS-specific options supplied in the request
    */
    responseReceived?: (requestId: number, data: any, textStatus: string, jqXHR: JQueryXHR, vssRequestOptions: IVssAjaxOptions) => void;
    
    /**
    * Method invoked after a response has been received and its callback/promise has been invoked
    *
    * @param requestId A unique id that can be used to track this particular request (id is unique among all clients)
    * @param data The response data
    * @param textStatus A string indicating status of the request
    * @param jqXHR: The jQuery XHR object for the request
    * @param vssRequestOptions Additional VSS-specific options supplied in the request
    */
    postResponseCallback?: (requestId: number, data: any, textStatus: string, jqXHR: JQueryXHR, vssRequestOptions: IVssAjaxOptions) => void;
}

/**
* Interface for a class that can fetch auth tokens to be used in AJAX requests.
*/
interface IAuthTokenManager<TToken> {
    /**
     * Issues an unscoped session token for the current user asynchronously. 
     *
     * @param name Metadata info to identify the token.
     * @param force Enables skipping cache and issue a brand new token.
     * @return Session token.
     */
    beginGetUnscopedToken(name?: string, force?: boolean): IPromise<TToken>;

    /**
     * Issues a session token using the specified appId for the current user asynchronously.
     *
     * @param appId Id of the application.
     * @param name Metadata info to identify the token.
     * @param force Enables skipping cache and issue a brand new token.
     * @return Session token.
     */
    beginGetAppToken(appId: string, name?: string, force?: boolean): IPromise<TToken>;

    /**
     * Gets the cached unscoped token.
     *
     * @return Session token.
     */
    getUnscopedToken(): TToken;

    /**
     * Gets the cached session token for the specified app.
     * 
     * @param Id of the application.
     * @return Session token.
     */
    getAppToken(appId: string): TToken;

    /**
     * Sets the authorization header of the specified request using Basic auth.
     *
     * @param request Request to set the authorization header.
     * @param sessionToken Used for token key.
     */
    setBasicAuthHeader(request: XMLHttpRequest, sessionToken: TToken): void;

    /**
     * Creates the authorization header of the specified request using Basic auth.
     *
     * @param sessionToken Used for token key.
     * @return the Basic Auth header for specified session token.
     */
    createBasicAuthHeader(sessionToken: TToken): string;
}

/**
* A promise represents the eventual result of an asynchronous operation. The primary way of interacting with a promise is through its then method,
* which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.
*/
interface IPromise<T> {
    then<U>(onFulfill: (value: T) => IPromise<U> | void, onReject?: (reason: any) => IPromise<U> | void): IPromise<U>;
    then<U>(onFulfill: (value: T) => IPromise<U> | void, onReject?: (reason: any) => U | void): IPromise<U>;
    then<U>(onFulfill: (value: T) => U | void, onReject?: (reason: any) => IPromise<U> | void): IPromise<U>;
    then<U>(onFulfill: (value: T) => U | void, onReject?: (reason: any) => U | void): IPromise<U>;
}

declare var Sys;

interface EventTarget {
    checked: boolean;
    nodeType: number;
}

interface Date {
    toGMTString(): string;
}

interface IErrorCallback {
    (error: any): void;
}

interface IResultCallback extends Function {
}

interface IArgsFunctionR<TResult> {
    (...args: any[]): TResult;
}

interface IFunctionPR<TParam, TResult> {
    (param: TParam): TResult;
}

interface IFunctionPPR<TParam1, TParam2, TResult> {
    (param1: TParam1, param2: TParam2): TResult;
}

interface IFunctionPPPR<TParam1, TParam2, TParam3, TResult> {
    (param1: TParam1, param2: TParam2, param3: TParam3): TResult;
}

interface IComparer<T> extends IFunctionPPR<T, T, number> {
}

interface IDictionaryStringTo<T> {
    [key: string]: T;
}

interface IDictionaryNumberTo<T> {
    [key: number]: T;
}

interface IEventHandler extends Function {
}

interface IWebApiArrayResult {
    count: number;
    value: any[];
}

interface Window {
    ActiveXObject: any;
    DOMParser: any;
    XSLTProcessor: any;
    vsSdkOnLoad:() => void;
}

interface MSAjaxError extends Error {
    popStackFrame: () => void;
}

interface TfsError extends Error {
    status?: string;
    stack?: string;
}

//These variables defined by server.
declare var exports: any;

declare var _disabledPlugins: string[];

interface IWebAccessPlugin {
    namespace: string;
    loadAfter: string;
}

declare var _plugins: IWebAccessPlugin[];
declare var _builtinPlugins: IWebAccessPlugin[];

interface IWebAccessPluginBase {
    namespace: string;
    base: string;
}

declare var _builtInBases: IWebAccessPluginBase[];
declare var _bases: IWebAccessPluginBase[];

interface IRequire {
    (moduleName: string): any;
    (moduleNames: string[], moduleFunc: Function): any;
    config: (config: any, shouldOverwrite?: boolean) => void;
}

interface IDefine {
    (moduleNames: string[], moduleFunc: Function): any;
    (id: string, moduleNames: string[], moduleFunc: Function): any;
}

interface IDisposable {
    dispose(): void;
}

interface IKeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
}

declare var require: IRequire;
declare var define: IDefine;
// defined in Loader.debug.js.  We need for config
// TODO - need to expose this in a better way
declare var __moduleManager: any;
//----------------------------------------------------------
// Common interfaces specific to WebPlatform area
//----------------------------------------------------------

/**
* Interface for a single XDM channel
*/
interface IXDMChannel {

    /**
    * Post a message to the other side of the XDM channel
    *
    * @param method Name of the method to invoke
    * @param params Arguments to the method to invoke
    * @return promise completed if/when the other endpoint replies
    */
    postMessage<T>(method: string, params?: any[]): IPromise<T>;

    /**
    * Get the object registry to handle messages from this specific channel.
    * Upon receiving a message, this channel registry will be used first, then
    * the global registry will be used if no handler is found here.
    */
    getObjectRegistry(): IXDMObjectRegistry;
}

/**
* Registry of XDM channels kept per target frame/window
*/
interface IXDMChannelManager {

    /**
    * Add an XDM channel for the given target window/iframe
    *
    * @param window Target iframe window to communicate with
    * @param targetOrigin Url of the target iframe (if known)
    */
    addChannel(window: Window, targetOrigin?: string): IXDMChannel;

    /**
    * Broadcast a message to all channels managed by this channel manager
    *
    * @param method Name of the method to invoke
    * @param params Arguments to the method to invoke
    * @param success Callback method to invoke when the remote procedure succeeds
    * @param error Callback method to invoke when the remote procedure fails
    */
    broadcastMessage(method: string, params?: any[]);
}

/**
* Registry of XDM objects that can be invoked by an XDM channel
*/
interface IXDMObjectRegistry {

    /**
    * Register an object so that its methods can be invoked in an XDM channel
    *
    * @param obj object to register. This object should have functions on it that can be invoked remotely
    * @param name Unique name of the object to register.
    */
    register(obj: any, name: string);
}

/**
* Data passed from the host to an extension frame via the initial handshake
*/
interface IHostHandshakeData {
    pageContext: PageContext;
    initialConfig?: any;
    appContext: IExtensionContext;
}

/**
* Data passed to the host from an extension frame via the initial handshake
*/
interface IAppHandshakeData {
    notifyLoadSucceeded: boolean;
}

/**
* Information about a control interface that is exposed across iframe boundaries
*/
interface IExternalControlInterfaceInfo {
    methodNames: string[];
}

/**
* Context about the app that owns the content that is being hosted
*/
interface IExtensionContext {
    id: string;
    name: string;
    namespace: string;
    version: string;
    baseUri: string;
}

/**
* Session token whose value can be added to the Authorization header in requests to VSO endpoints
*/
interface ISessionToken {
    appId: string;
    name: string;
    token: string;
}


/**
* Information about an individual contribution
*/
interface IContribution {

    /**
    * Id of the contribution (id property)
    */
    id: string;

    /**
    * Unique id of the extension that is contributing this contribution
    */
    extensionId: string;

    /**
    * Full contribution point id
    */
    pointId: string;

    /**
    * Contribution properties lookup
    */
    properties?: IDictionaryStringTo<any>;
}

/**
* Information about an individual contribution that contributes one or more services registered by id.
*/
interface IServiceContribution extends IContribution {
    
    /**
    * Get the instance of an object registered by this contribution
    *
    * @param objectId Id of the registered object (defaults to the id property of the contribution)
    * @param context Optional context to use when getting the object.
    */
    getInstance: <T>(objectId?: string, context?: any) => IPromise<T>;
}

interface IHostDialogOptions {

    height?: number;
    width?: number;
    draggable?: boolean;
    resizable?: boolean;
    title?: string;
    modal?: boolean;
    buttons?: IDictionaryStringTo<any>;
    open?: Function;
    close?: Function;
    getDialogResult?: () => any;
    okCallback?: (result: any) => void;
    cancelCallback?: Function;
    okText?: string;
    cancelText?: string;
}

interface IExternalDialog {
    
    /**
    * Gets an object registered in the dialog's contribution control.
    *
    * @param instanceId Id of the instance to get
    * @param contextData Optional data to pass to the extension for it to use when creating the instance
    * @return Promise that is resolved to the instance (a proxy object that talks to the instance)
    */
    getContributionInstance<T>(instanceId: string, contextData?: any): IPromise<T>;

    /**
    * Close the dialog
    */
    close();

    /**
    * Update the title of the dialog
    *
    * @param title New dialog title
    */
    setTitle(title: string);

    /**
    * Update the enablement of the OK button
    */
    updateOkButton(enabled: boolean);
}

/**
* Service which manages showing dialogs in the parent frame
*/
interface IHostDialogService {
    
    /**
    * Open a modal dialog in the host frame which will get its content from a contributed control.
    * 
    * @param contribution url for dialog contents
    * @param dialogOptions options.title - title of dialog
    * @param contributionConfig Initial configuration to pass to the contribution control.
    * @param postContent Optional data to post to the contribution endpoint. If not specified, a GET request will be performed.
    */
    openDialog(contribution: IContribution, dialogOptions: IHostDialogOptions, contributionConfig?: Object, postContent?: Object): IPromise<IExternalDialog>;
}

/**
* Service which allows interaction with the browser history of the host frame
*/
interface IHostHistoryService {
    
    /**
    * Add a callback to be invoked each time the hash navigation has changed
    *
    * @param callback Method invoked on each navigation hash change
    */
    onHashChanged(callback: (hash: string) => void);

    /**
    * Gets the current hash.
    *
    * @return Hash part of the host page's url (url following #)
    */
    getHash(): string;

    /**
    * Sets the provided hash from the hosted content.
    *
    * @param hash The new hash string to 
    */
    setHash(hash: string);
}

/**
* Iterface for a registered object that contributes menu item(s)
*/
interface IContributedMenuSource {

    /**
    * Get an array of menu items for the given context
    *
    * @param context Menu-specific context information
    * @return Array of menu items or a promise for the array
    */
    getMenuItems(context: any): IContributedMenuItem[] | IPromise<IContributedMenuItem[]>;

    /**
    * Handle a menu item from this menu source being clicked. This is only invoked when the
    * contributed menu item does not have an "action" method.
    *
    * @param actionContext Menu-specific context information
    */
    execute(actionContext: any);
}

/**
* An individual contributed menu item
*/
interface IContributedMenuItem {

    /**
    * Menu-item specific identifier
    */
    id?: string;

    /**
    * Text to display in the menu item
    */
    text?: string;

    /**
    * Tooltip to display for the menu item
    */
    title?: string;

    /**
    * Set to true if this menu item is just a separator
    */
    separator?: boolean;

    /**
    * Set to true if this menu item should be disabled
    */
    disabled?: boolean;

    /**
    * Url to an icon image or css class for the image cell
    */
    icon?: string;

    /**
    * If this menu item has a sub menu, these are the contributed child items
    */
    childItems?: IContributedMenuItem[];

    /**
    * Id of the menu group that this item should be placed in.
    */
    groupId?: string;

    /**
    * Method invoked when the menu item is clicked.
    *
    * @param actionContext Menu-specific context information
    */
    action?: (actionContext: any) => void;
}
//----------------------------------------------------------
// Copyright (C) Microsoft Corporation. All rights reserved.
//----------------------------------------------------------

//----------------------------------------------------------
// Generated file, DO NOT EDIT.

// Generated data for the following assemblies:
// Microsoft.TeamFoundation.Server.WebAccess.Platform
//----------------------------------------------------------


interface AccessPointModel {
    authority: string;
    scheme: string;
    uri: string;
}

interface AppInsightsConfiguration {
    autoTrackPage: boolean;
    customTrackPageData: AppInsightsCustomTrackPageData;
    enabled: boolean;
    insightsScriptUrl: string;
    instrumentationKey: string;
    trackProjectInfo: boolean;
}

interface AppInsightsCustomTrackPageData {
    alias: string;
    metrics: { [key: string]: number; };
    pageName: string;
    properties: { [key: string]: string; };
}

interface ConfigurationContext {
    api: ConfigurationContextApis;
    clientHost: string;
    isHosted: boolean;
    mailSettings: TfsMailSettings;
    paths: ConfigurationContextPaths;
}

interface ConfigurationContextApis {
    areaPrefix: string;
    controllerPrefix: string;
    webApiVersion: string;
}

interface ConfigurationContextPaths {
    resourcesPath: string;
    rootPath: string;
    staticRoot3rdParty: string;
    staticRootTfs: string;
}

declare enum ContextHostType {
    Unknown = 0,
    Deployment = 1,
    Application = 2,
    ProjectCollection = 4,
}

interface ContextIdentifier {
    id: string;
    name: string;
}

interface ContributionContext {
    containerCssClass: string;
    cssReferences: string[];
    moduleLoaderConfig: ModuleLoaderConfiguration;
    partialContent: boolean;
    scriptModules: string[];
    serviceUrl: string;
}

interface ContributionPath {
    pathType: ContributionPathType;
    value: string;
}

declare enum ContributionPathType {
    Default = 0,
    Resource = 1,
    Bundle = 2,
}

interface CoreReferencesContext {
    scripts: JavascriptFileReference[];
    stylesheets: StylesheetReference[];
}

interface DaylightSavingsAdjustmentEntry {
    offset: number;
    start: Date;
}

interface DiagnosticsContext {
    activityId: string;
    allowStatsCollection: boolean;
    debugMode: boolean;
    sessionId: string;
    tracePointCollectionEnabled: boolean;
    tracePointProfileEnd: string;
    tracePointProfileStart: string;
}

interface ExtendedHostContext {
    authority: string;
    hostType: ContextHostType;
    id: string;
    isAADAccount: boolean;
    name: string;
    relativeUri: string;
    scheme: string;
    uri: string;
}

interface FeatureAvailabilityContext {
    featureStates: { [key: string]: boolean; };
}

interface GlobalizationContext {
    culture: string;
    theme: string;
    timeZoneId: string;
    timezoneOffset: number;
}

interface HostContext {
    id: string;
    name: string;
    relativeUri: string;
    uri: string;
}

interface Hub {
    groupId: string;
    id: string;
    isSelected: boolean;
    name: string;
    order: any;
    uri: string;
}

interface HubGroup {
    hasHubs: boolean;
    id: string;
    name: string;
    order: any;
    uri: string;
}

interface HubsContext {
    hubGroups: HubGroup[];
    hubGroupsContributionPointId: string;
    hubs: Hub[];
    selectedHubGroupId: string;
}

interface IdentityModel {
    customDisplayName: string;
    displayName: string;
    email: string;
    id: string;
    isActive: boolean;
    isContainer: boolean;
    providerDisplayName: string;
    uniqueName: string;
}

interface JavascriptFileReference {
    fallbackCondition: string;
    fallbackUrl: string;
    identifier: string;
    isCoreModule: boolean;
    url: string;
}

interface JsonArrayWrapper {
    __wrappedArray: string;
}

interface MicrosoftAjaxConfig {
    cultureInfo: any;
}

interface ModuleLoaderConfiguration {
    baseUrl: string;
    contributionPaths: { [key: string]: ContributionPath; };
    paths: { [key: string]: string; };
    shim: { [key: string]: ModuleLoaderShimConfiguration; };
}

interface ModuleLoaderShimConfiguration {
    deps: string[];
    exports: string;
}

interface NavigationContext {
    area: string;
    currentAction: string;
    currentController: string;
    topMostLevel: NavigationContextLevels;
}

declare enum NavigationContextLevels {
    None = 0,
    Deployment = 1,
    Application = 2,
    Collection = 4,
    Project = 8,
    Team = 16,
    ApplicationAll = 30,
    All = 31,
}

interface PageContext {
    appInsightsConfiguration: AppInsightsConfiguration;
    coreReferences: CoreReferencesContext;
    diagnostics: DiagnosticsContext;
    featureAvailability: FeatureAvailabilityContext;
    globalization: GlobalizationContext;
    microsoftAjaxConfig: MicrosoftAjaxConfig;
    moduleLoaderConfig: ModuleLoaderConfiguration;
    navigation: NavigationContext;
    serviceInstanceId: string;
    serviceLocations: { [key: string]: { [key: number]: string; }; };
    timeZonesConfiguration: TimeZonesConfiguration;
    webAccessConfiguration: ConfigurationContext;
    webContext: WebContext;
}

interface StylesheetReference {
    highContrastUrl: string;
    isCoreStylesheet: boolean;
    url: string;
}

interface TeamContext {
    id: string;
    name: string;
    userIsAdmin: boolean;
    userIsMember: boolean;
}

interface TeamFoundationServiceHostModel {
    hostType: any;
    instanceId: string;
    name: string;
    relVDir: string;
    vDir: string;
}

interface TfsMailSettings {
    enabled: boolean;
    from: string;
}

interface TfsServiceHostDescriptor {
    hostType: any;
    id: string;
    name: string;
    vdir: string;
}

interface TimeZonesConfiguration {
    daylightSavingsAdjustments: DaylightSavingsAdjustmentEntry[];
}

interface UserContext {
    email: string;
    id: string;
    limitedAccess: boolean;
    name: string;
    uniqueName: string;
}

interface WebAccessConfiguration {
    clientHost: string;
    mailSettings: TfsMailSettings;
    resourcesPath: string;
    rootPath: string;
    staticRoot3rdParty: string;
    staticRootTfs: string;
    webApiVersion: string;
}

interface WebContext {
    account: HostContext;
    collection: HostContext;
    host: ExtendedHostContext;
    project: ContextIdentifier;
    team: TeamContext;
    user: UserContext;
}

declare module XDM {
    interface IDeferred<T> {
        resolve: (result: T) => void;
        reject: (reason: any) => void;
        promise: IPromise<T>;
    }
    interface IXDMMethodInfo {
        method: Function;
        thisObj: any;
    }
    /**
    * Create a new deferred object
    */
    function createDeferred<T>(): IDeferred<T>;
    /**
     * Catalog of objects exposed for XDM where the key is as follows:
     *
     * ClassName{[instanceId]}.method
     *
     * Examples:
     *     Access singleton Calculator's add function - Calculator.add(3,5)
     *     Key: "Calculator"
     *
     * XDMChannel looks up object from the IJsonRpcMessage passed into onMessage
     */
    class XDMObjectRegistry implements IXDMObjectRegistry {
        private _registeredObjects;
        /**
        * Lookup a method on a registered object. Returns null if the object is
        * not found or the method does not exist on the object.
        *
        * @param fullMethodPath The name of the registered object + '.' + the method name
        * @return XDM method info
        */
        getRegisteredMethodInfo(fullMethodPath: string): IXDMMethodInfo;
        /**
        * Register an object so that its methods can be invoked in an XDM channel
        *
        * @param obj object to register. This object should have functions on it that can be invoked remotely
        * @param name Unique name of the object to register.
        */
        register(obj: any, name: string): void;
    }
    /**
    * The registry of global XDM handlers
    */
    var globalObjectRegistry: XDMObjectRegistry;
    /**
     * Represents a channel of communication between frames\document
     * Stays "alive" across multiple funtion\method calls
     */
    class XDMChannel implements IXDMChannel {
        private static _nextChannelId;
        private static MAX_XDM_DEPTH;
        private static WINDOW_TYPES_TO_SKIP_SERIALIZATION;
        private static JQUERY_TYPES_TO_SKIP_SERIALIZATION;
        private _nextMessageId;
        private _deferreds;
        private _postToWindow;
        private _targetOrigin;
        private _handshakeToken;
        private _channelObjectRegistry;
        private _channelId;
        private _nextProxyFunctionId;
        private _proxyFunctions;
        constructor(postToWindow: Window, targetOrigin?: string);
        /**
        * Get the object registry to handle messages from this specific channel.
        * Upon receiving a message, this channel registry will be used first, then
        * the global registry will be used if no handler is found here.
        */
        getObjectRegistry(): IXDMObjectRegistry;
        /**
        * Post a message to the other side of the XDM channel
        *
        * @param method Name of the method to invoke
        * @param params Arguments to the method to invoke
        * @param success Callback method to invoke when the remote procedure succeeds
        * @param error Callback method to invoke when the remote procedure fails
        */
        postMessage<T>(method: string, params?: any[]): IPromise<T>;
        /**
        * Handle a received message on this channel. Dispatch to the appropriate object found via object registry
        *
        * @param data Message data
        * @param origin Origin of the frame that sent the message
        * @return True if the message was handled by this channel. Otherwise false.
        */
        onMessage(data: any, origin: string): boolean;
        owns(source: Window, origin: string, data: any): boolean;
        private _error(messageObj, errorObj, handshakeToken);
        private _success(messageObj, result, handshakeToken);
        private _sendRpcMessage(message);
        private _shouldSkipSerialization(obj);
        private _customSerializeObject(obj, parentObjects?, nextCircularRefId?, depth?);
        private _registerProxyFunction(func, context);
        private _customDeserializeObject(obj, circularRefs?);
    }
    /**
    * Registry of XDM channels kept per target frame/window
    */
    class XDMChannelManager implements IXDMChannelManager {
        private static _default;
        private _channels;
        constructor();
        static get(): XDMChannelManager;
        /**
        * Add an XDM channel for the given target window/iframe
        *
        * @param window Target iframe window to communicate with
        * @param targetOrigin Url of the target iframe (if known)
        */
        addChannel(window: Window, targetOrigin?: string): IXDMChannel;
        /**
        * Broadcast a message to all channels managed by this channel manager
        *
        * @param method Name of the method to invoke
        * @param params Arguments to the method to invoke
        * @param success Callback method to invoke when the remote procedure succeeds
        * @param error Callback method to invoke when the remote procedure fails
        */
        broadcastMessage(method: string, params?: any[]): void;
        private _handleMessageReceived(event);
        private _subscribe(windowObj);
    }
}
declare module VSS {
    /**
    * Options for the extension's initialization method
    */
    interface ExtensionInitializationOptions {
        /**
        * Set to true if the extension will explicitly call notifyLoadSucceeded or notifyLoadFailed
        * itself to indicate that the extension is done loading (stops UI loading indicator in the host).
        * If false (the default) the extension is considered ready as soon as init is called.
        */
        explicitNotifyLoaded?: boolean;
        /**
        * If true setup the AMD script module loader with the host's AMD configuration
        * so that 'require' statements can be used to load VSO modules.
        */
        setupModuleLoader?: boolean;
        /**
        * Extension-specific AMD module loader configuration. This configuration
        * will be merged with the VSO-specific configuration.
        */
        moduleLoaderConfig?: ModuleLoaderConfiguration;
    }
    /**
     * Initiates the handshake with the host window.
     *
     * @param options Initialization options for the extension.
     */
    function init(options: ExtensionInitializationOptions): void;
    /**
     * Ensures that the AMD loader from the host is configured and fetches a script (AMD) module
     * (and its dependencies). If no callback is supplied, this will still perform an asynchronous
     * fetch of the module (unlike AMD require which returns synchronously). This method has no return value.
     *
     * Usage:
     *
     * VSS.require(["VSS/Controls", "VSS/Controls/Grids", function(Controls, Grids) {
     *    ...
     * });
     *
     * @param modules A single module path (string) or array of paths (string[])
     * @param callback Method called once the modules have been loaded.
     */
    function require(modules: string[] | string, callback?: Function): void;
    function ready(callback: () => void): void;
    /**
    * Notifies the host that the extension successfully loaded (stop showing the loading indicator)
    */
    function notifyLoadSucceeded(): void;
    /**
    * Notifies the host that the extension failed to load
    */
    function notifyLoadFailed(e: any): void;
    /**
    * Get the web context from the parent host
    */
    function getWebContext(): WebContext;
    /**
    * Get the configuration data passed in the initial handshake from the parent frame
    */
    function getConfiguration(): any;
    /**
    * Get the context about the app that owns the content that is being hosted
    */
    function getExtensionContext(): IExtensionContext;
    /**
    * Get a contributed service from the parent host.
    *
    * @param serviceId Id of the vss.web#service contribution to get the instance of
    * @param context Optional context information to use when obtaining the service instance
    */
    function getService<T>(serviceId: string, context?: Object): IPromise<T>;
    /**
    * For a given contribution point id, get contributions which contribute background services.
    *
    * @param contributionPointId Contribution point id to query
    * @param contributionId Optional filter to only include contributions with the given id
    */
    function getServiceContributions<T>(contributionPointId: string, contributionId?: string): IPromise<IServiceContribution[]>;
    /**
    * Register an object (instance or factory method) that this extension exposes to the host frame.
    *
    * @param instanceId unique id of the registered object
    * @param instance Either: (1) an object instance, or (2) a function that takes optional context data and returns an object instance.
    */
    function register(instanceId: string, instance: Object | {
        (contextData?: any): Object;
    }): void;
    /**
    * Fetch an access token which will allow calls to be made to other VSO services
    */
    function getAccessToken(): IPromise<ISessionToken>;
    /**
    * Requests the parent window to resize the container for this extension based on the current extension size.
    */
    function resize(): void;
    function api(path: string, apiResourceScope: string, verb: string, headers: any, params: any, success?: (response: string) => void, error?: (exception) => void): void;
}
declare module "VSS/Adapters/Knockout" {
import Controls = require("VSS/Controls");
export interface ITemplateViewModel extends IDisposable {
    dispose(): void;
}
export class TemplateViewModel implements ITemplateViewModel, Controls.EnhancementOptions {
    /**
     * Manager for disposables.
     */
    private _disposalManager;
    constructor();
    /**
     * Disposes all disposables.
     */
    dispose(): void;
    /**
     * Proxy for a knockout subscription to keep track of it to ensure that when the control is disposed, subscription is also disposed.
     */
    subscribe(subscribable: KnockoutSubscribable<any>, callback: (newValue: any) => void): KnockoutSubscription<any>;
    /**
     * Proxy for a knockout computed to keep track of it to ensure that when the control is disposed, computed is also disposed.
     */
    computed(func: () => any): KnockoutComputed<any>;
    /**
     * Adds a disposable object to the list
     */
    _addDisposable(disposable: IDisposable): IDisposable;
}
export interface TemplateControlRegistration {
    /**
     * Type of the control to be registered.
     */
    controlType: any;
    /**
     * Delegate used to generate the view model for the registered control.
     */
    viewModelGenerator: (context?: any) => ITemplateViewModel;
}
export interface TemplateControlOptions {
    /**
     * Html template is going to be set as the html content for the element.
     */
    templateHtml?: string;
    /**
     * If templateId is used there needs to be a script element (with type="text/html")
     * in the DOM with the id equal to templateId.
     * This templateId will be used to get the template from the DOM.
     */
    templateId?: string;
}
export interface ITemplateControl {
    /**
     * Applies the template binding on the specified element.
     *
     * @param element Element owning the template and viewmodel to be bound.
     */
    applyBinding(element: JQuery): void;
    /**
     * Perform verious disposals for the control.
     */
    dispose(): void;
}
export class TemplateControl<TViewModel extends ITemplateViewModel> extends Controls.BaseControl implements ITemplateControl {
    /**
     * Registers a template control to be invoked later.
     *
     * @param templateId Id of the template.
     * @param controlType Type of the registered control.
     * @param viewModelGenerator Delegate to generate the viewmodel.
     */
    static registerBinding(templateId: string, controlType: any, viewModelGenerator: (context?: any) => ITemplateViewModel): void;
    /**
     * Creates a new template control using registered control specified by template id.
     *
     * @param templateId Id of the template.
     * @param element Element owning the template and viewmodel to be bound.
     * @param viewModelContext Context used to generate view model.
     * @return New instance of the control.
     */
    static applyRegisteredBinding<TControl extends ITemplateControl, TViewModel extends ITemplateViewModel>(templateId: string, element: JQuery, viewModelContext: any): TControl;
    /**
     * Creates a new template control using the specified type, element and options.
     *
     * @param controlType Type of the control.
     * @param element Element owning the template and viewmodel to be bound.
     * @param viewModel View model used for binding.
     * @param options Template options like templateHtml and templateId.
     * @return New instance of the control.
     */
    static applyBinding<TControl extends ITemplateControl, TViewModel>(controlType: any, element: JQuery, viewModel: TViewModel, options: TemplateControlOptions): TControl;
    /**
     * View model used for binding.
     */
    private _viewModel;
    /**
     * Manager for disposables.
     */
    private _disposalManager;
    /**
     * Do not use this! Instead, use TemplateControl.applyBinding.
     */
    constructor(viewModel: TViewModel, options?: TemplateControlOptions);
    /**
     * Gets the viewmodel bound to this control.
     */
    getViewModel(): TViewModel;
    /**
     * See interface.
     */
    applyBinding(element: JQuery): void;
    /**
     * Proxy for a knockout subscription to keep track of it to ensure that when the control is disposed, subscription is also disposed.
     */
    subscribe(subscribable: KnockoutSubscribable<any>, callback: (newValue: any) => void): KnockoutSubscription<any>;
    /**
     * Proxy for a knockout computed to keep track of it to ensure that when the control is disposed, computed is also disposed.
     */
    computed(func: () => any): KnockoutComputed<any>;
    /**
     * See base.
     */
    _cleanup(): void;
    /**
     * Default template binding which is knockout.
     * By overriding this method, a different binding pattern can be used.
     */
    _performBinding(element: JQuery, options: TemplateControlOptions): void;
}
}
declare module "VSS/Ajax" {
export interface JQueryAjaxResult {
    jqXHR: JQueryXHR;
    textStatus: string;
}
export interface JQueryAjaxSuccessResult extends JQueryAjaxResult {
    data: any;
}
export interface JQueryAjaxErrorResult extends JQueryAjaxResult {
    errorThrown: any;
}
/**
* Issue an AJAX request. This is a wrapper around jquery's ajax method that handles VSS authentication
* and triggers events that can be listened to by other modules.
*
* @param requestUrl Url to send the request to
* @param ajaxOptions jQuery.ajax options
* @param vssRequestOptions VSS specific request options
* @param useAjaxResult If true, textStatus and jqXHR are added to the success callback. In this case, spread (instead of then) needs to be used
*/
export function issueRequest(requestUrl: string, ajaxOptions: JQueryAjaxSettings, vssRequestOptions?: IVssAjaxOptions): IPromise<any>;
/**
* Add a listener that gets notified whenever requests from this client begin/end/etc.
*
* @param listener HttpClient listener to add
*/
export function addGlobalListener(listener: IVssAjaxEventListener): void;
/**
* Remove a listener that gets notified whenever requests from this client begin/end/etc.
*
* @param listener HttpClient listener to remove
*/
export function removeGlobalListener(listener: IVssAjaxEventListener): void;
}
declare module "VSS/Artifacts/Constants" {
export module ArtifactTypeNames {
    var TcmResult: string;
    var TcmResultAttachment: string;
    var Build: string;
    var VersionedItem: string;
    var LatestItemVersion: string;
    var Changeset: string;
    var Shelveset: string;
    var WorkItem: string;
    var Storyboard: string;
    var Commit: string;
    var CodeReviewId: string;
    var PullRequestId: string;
    var ProjectDownloadProject: string;
}
export module ToolNames {
    var VersionControl: string;
    var WorkItemTracking: string;
    var TeamBuild: string;
    var TestManagement: string;
    var Requirements: string;
    var Legacy: string;
    var CodeSense: string;
    var Git: string;
    var CodeReview: string;
    var ProjectDownload: string;
}
}
declare module "VSS/Artifacts/Services" {
import Contracts_Platform = require("VSS/Common/Contracts/Platform");
import Service = require("VSS/Service");
export interface IArtifactData {
    uri?: string;
    tool: string;
    type: string;
    id: string;
}
export class Artifact {
    static _execute(artifact: Artifact, webContext: Contracts_Platform.WebContext): void;
    static ACTION_ARTIFACT_EXECUTE: string;
    _data: any;
    _error: any;
    constructor(data: IArtifactData);
    getUri(): string;
    getTool(): string;
    getType(): string;
    getId(): string;
    /**
     * @return
     */
    getTitle(): string;
    setError(error: any): void;
    getError(): any;
    execute(webContext: Contracts_Platform.WebContext): any;
    /**
     * @return
     */
    getUrl(webContext: Contracts_Platform.WebContext): string;
}
export class LinkingUtilities {
    static VSTFS: string;
    static URI_SEPARATOR: string;
    /**
     * Creates an artifact URI using specified artifact.
     *
     * @param artifact Artifact should have the following properties:
     *     - tool: Artifact tool name
     *     - type: Artifact type
     *     - id: Artifact tool specific id
     * @return
     */
    static encodeUri(artifact: any): string;
    /**
     * Decodes the specified artifact URI and creates artifact object which has tool, type and id properties.
     *
     * @param artifactUri URI to decode
     * @return
     */
    static decodeUri(artifactUri: string): IArtifactData;
    /**
     * Decodes a uri component, maintaining backwards compatibility with how URIs were encoded
     * from the rich client and in VS2010 and earlier versions.
     *
     * @param encodedURIComponent URI component to decode
     * @return
     */
    static legacyDecodeURIComponent(encodedURIComponent: string): string;
}
export class ClientLinking extends Service.VssService {
    static MODE_TRANSLATEURL: string;
    static registerArtifactResolver(toolName: string, resolver: any): void;
    static getArtifactResolver(toolName: string): any;
    constructor();
    beginResolveArtifacts(artifactUris: string[], options?: any, callback?: IResultCallback, errorCallback?: IErrorCallback): void;
}
}
declare module "VSS/Authentication/Contracts" {
export interface CustomerIntelligenceEvent {
    area: string;
    feature: string;
    properties: {
        [key: string]: any;
    };
}
export interface WebSessionToken {
    appId: string;
    force: boolean;
    name: string;
    token: string;
}
export var TypeInfo: {
    CustomerIntelligenceEvent: {
        fields: any;
    };
    WebSessionToken: {
        fields: any;
    };
};
}
declare module "VSS/Authentication/RestClient" {
import Contracts = require("VSS/Authentication/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class AuthenticationHttpClient extends VSS_WebApi.VssHttpClient {
    constructor(rootRequestPath: string);
    /**
     * @param {Contracts.WebSessionToken} sessionToken
     * @return IPromise<Contracts.WebSessionToken>
     */
    createSessionToken(sessionToken: Contracts.WebSessionToken): IPromise<Contracts.WebSessionToken>;
}
}
declare module "VSS/Authentication/Services" {
import Authentication_Contracts = require("VSS/Authentication/Contracts");
export var authTokenManager: IAuthTokenManager<Authentication_Contracts.WebSessionToken>;
}
declare module "VSS/Common/Constants/Platform" {
export module WebAccessCustomerIntelligenceConstants {
    var Area: string;
    var WebSettingsStoreSettingFeature: string;
    var FullScreenModeFeature: string;
    var InvalidLicenseExceptionFeature: string;
}
export module WebPlatformFeatureFlags {
    var VisualStudioServicesContribution: string;
}
}
declare module "VSS/Common/Contracts/FormInput" {
export enum InputDataType {
    /**
    * No data type is specified.
    */
    None = 0,
    /**
    * Represents a textual value.
    */
    String = 10,
    /**
    * Represents a numberic value.
    */
    Number = 20,
    /**
    * Represents a value of true or false.
    */
    Boolean = 30,
    /**
    * Represents a Guid.
    */
    Guid = 40,
    /**
    * Represents a URI.
    */
    Uri = 50,
}
/**
* Describes an input for subscriptions.
*/
export interface InputDescriptor {
    /**
    * The ids of all inputs that the value of this input is dependent on.
    */
    dependencyInputIds: string[];
    /**
    * Description of what this input is used for
    */
    description: string;
    /**
    * The group localized name to which this input belongs and can be shown as a header for the container that will include all the inputs in the group.
    */
    groupName: string;
    /**
    * If true, the value information for this input is dynamic and should be fetched when the value of dependency inputs change.
    */
    hasDynamicValueInformation: boolean;
    /**
    * Identifier for the subscription input
    */
    id: string;
    /**
    * Mode in which the value of this input should be entered
    */
    inputMode: InputMode;
    /**
    * Gets whether this input is confidential, such as for a password or application key
    */
    isConfidential: boolean;
    /**
    * Localized name which can be shown as a label for the subscription input
    */
    name: string;
    /**
    * Gets whether this input is included in the default generated action description.
    */
    useInDefaultDescription: boolean;
    /**
    * Information to use to validate this input's value
    */
    validation: InputValidation;
    /**
    * A hint for input value. It can be used in the UI as the input placeholder.
    */
    valueHint: string;
    /**
    * Information about possible values for this input
    */
    values: InputValues;
}
/**
* Defines a filter for subscription inputs. The filter matches a set of inputs if any (one or more) of the groups evaluates to true.
*/
export interface InputFilter {
    /**
    * Groups of input filter expressions. This filter matches a set of inputs if any (one or more) of the groups evaluates to true.
    */
    conditions: InputFilterCondition[];
}
/**
* An expression which can be applied to filter a list of subscription inputs
*/
export interface InputFilterCondition {
    /**
    * Whether or not to do a case sensitive match
    */
    caseSensitive: boolean;
    /**
    * The Id of the input to filter on
    */
    inputId: string;
    /**
    * The &quot;expected&quot; input value to compare with the actual input value
    */
    inputValue: string;
    /**
    * The operator applied between the expected and actual input value
    */
    operator: InputFilterOperator;
}
export enum InputFilterOperator {
    Equals = 0,
    NotEquals = 1,
}
export enum InputMode {
    /**
    * This input should not be shown in the UI
    */
    None = 0,
    /**
    * An input text box should be shown
    */
    TextBox = 10,
    /**
    * An password input box should be shown
    */
    PasswordBox = 20,
    /**
    * A select/combo control should be shown
    */
    Combo = 30,
    /**
    * Radio buttons should be shown
    */
    RadioButtons = 40,
    /**
    * Checkbox should be shown(for true/false values)
    */
    CheckBox = 50,
    /**
    * A multi-line text area should be shown
    */
    TextArea = 60,
}
/**
* Describes what values are valid for a subscription input
*/
export interface InputValidation {
    dataType: InputDataType;
    isRequired: boolean;
    maxLength: number;
    maxValue: number;
    minLength: number;
    minValue: number;
    pattern: string;
    patternMismatchErrorMessage: string;
}
/**
* Information about a single value for an input
*/
export interface InputValue {
    /**
    * Any other data about this input
    */
    data: {
        [key: string]: any;
    };
    /**
    * The text to show for the display of this value
    */
    displayValue: string;
    /**
    * The value to store for this input
    */
    value: string;
}
/**
* Information about the possible/allowed values for a given subscription input
*/
export interface InputValues {
    /**
    * The default value to use for this input
    */
    defaultValue: string;
    /**
    * Errors encountered while computing dynamic values.
    */
    error: InputValuesError;
    /**
    * The id of the input
    */
    inputId: string;
    /**
    * Should this input be disabled
    */
    isDisabled: boolean;
    /**
    * Should the value be restricted to one of the values in the PossibleValues (True) or are the values in PossibleValues just a suggestion (False)
    */
    isLimitedToPossibleValues: boolean;
    /**
    * Should this input be made read-only
    */
    isReadOnly: boolean;
    /**
    * Possible values that this input can take
    */
    possibleValues: InputValue[];
}
/**
* Error information related to a subscription input value.
*/
export interface InputValuesError {
    /**
    * The error message.
    */
    message: string;
}
export interface InputValuesQuery {
    currentValues: {
        [key: string]: string;
    };
    /**
    * The input values to return on input, and the result from the consumer on output.
    */
    inputValues: InputValues[];
    /**
    * Subscription containing information about the publisher/consumer and the current input values
    */
    resource: any;
}
export var TypeInfo: {
    InputDataType: {
        enumValues: {
            "none": number;
            "string": number;
            "number": number;
            "boolean": number;
            "guid": number;
            "uri": number;
        };
    };
    InputDescriptor: {
        fields: any;
    };
    InputFilter: {
        fields: any;
    };
    InputFilterCondition: {
        fields: any;
    };
    InputFilterOperator: {
        enumValues: {
            "equals": number;
            "notEquals": number;
        };
    };
    InputMode: {
        enumValues: {
            "none": number;
            "textBox": number;
            "passwordBox": number;
            "combo": number;
            "radioButtons": number;
            "checkBox": number;
            "textArea": number;
        };
    };
    InputValidation: {
        fields: any;
    };
    InputValue: {
        fields: any;
    };
    InputValues: {
        fields: any;
    };
    InputValuesError: {
        fields: any;
    };
    InputValuesQuery: {
        fields: any;
    };
};
}
declare module "VSS/Common/Contracts/Platform" {
export interface AccessPointModel {
    authority: string;
    scheme: string;
    uri: string;
}
export interface AppInsightsConfiguration {
    autoTrackPage: boolean;
    customTrackPageData: AppInsightsCustomTrackPageData;
    enabled: boolean;
    insightsScriptUrl: string;
    instrumentationKey: string;
    trackProjectInfo: boolean;
}
export interface AppInsightsCustomTrackPageData {
    alias: string;
    metrics: {
        [key: string]: number;
    };
    pageName: string;
    properties: {
        [key: string]: string;
    };
}
export interface ConfigurationContext {
    api: ConfigurationContextApis;
    clientHost: string;
    isHosted: boolean;
    mailSettings: TfsMailSettings;
    paths: ConfigurationContextPaths;
}
export interface ConfigurationContextApis {
    areaPrefix: string;
    controllerPrefix: string;
    webApiVersion: string;
}
export interface ConfigurationContextPaths {
    resourcesPath: string;
    rootPath: string;
    staticRoot3rdParty: string;
    staticRootTfs: string;
}
export enum ContextHostType {
    Unknown = 0,
    Deployment = 1,
    Application = 2,
    ProjectCollection = 4,
}
export interface ContextIdentifier {
    id: string;
    name: string;
}
export interface ContributionContext {
    containerCssClass: string;
    cssReferences: string[];
    moduleLoaderConfig: ModuleLoaderConfiguration;
    partialContent: boolean;
    scriptModules: string[];
    serviceUrl: string;
}
export interface ContributionPath {
    pathType: ContributionPathType;
    value: string;
}
export enum ContributionPathType {
    Default = 0,
    Resource = 1,
    Bundle = 2,
}
export interface CoreReferencesContext {
    scripts: JavascriptFileReference[];
    stylesheets: StylesheetReference[];
}
export interface DaylightSavingsAdjustmentEntry {
    offset: number;
    start: Date;
}
export interface DiagnosticsContext {
    activityId: string;
    allowStatsCollection: boolean;
    debugMode: boolean;
    sessionId: string;
    tracePointCollectionEnabled: boolean;
    tracePointProfileEnd: string;
    tracePointProfileStart: string;
}
export interface ExtendedHostContext {
    authority: string;
    hostType: ContextHostType;
    id: string;
    isAADAccount: boolean;
    name: string;
    relativeUri: string;
    scheme: string;
    uri: string;
}
export interface FeatureAvailabilityContext {
    featureStates: {
        [key: string]: boolean;
    };
}
export interface GlobalizationContext {
    culture: string;
    theme: string;
    timeZoneId: string;
    timezoneOffset: number;
}
export interface HostContext {
    id: string;
    name: string;
    relativeUri: string;
    uri: string;
}
export interface Hub {
    groupId: string;
    id: string;
    isSelected: boolean;
    name: string;
    order: any;
    uri: string;
}
export interface HubGroup {
    hasHubs: boolean;
    id: string;
    name: string;
    order: any;
    uri: string;
}
export interface HubsContext {
    hubGroups: HubGroup[];
    hubGroupsContributionPointId: string;
    hubs: Hub[];
    selectedHubGroupId: string;
}
export interface IdentityModel {
    customDisplayName: string;
    displayName: string;
    email: string;
    id: string;
    isActive: boolean;
    isContainer: boolean;
    providerDisplayName: string;
    uniqueName: string;
}
export interface JavascriptFileReference {
    fallbackCondition: string;
    fallbackUrl: string;
    identifier: string;
    isCoreModule: boolean;
    url: string;
}
export interface JsonArrayWrapper {
    __wrappedArray: string;
}
export interface MicrosoftAjaxConfig {
    cultureInfo: any;
}
export interface ModuleLoaderConfiguration {
    baseUrl: string;
    contributionPaths: {
        [key: string]: ContributionPath;
    };
    paths: {
        [key: string]: string;
    };
    shim: {
        [key: string]: ModuleLoaderShimConfiguration;
    };
}
export interface ModuleLoaderShimConfiguration {
    deps: string[];
    exports: string;
}
export interface NavigationContext {
    area: string;
    currentAction: string;
    currentController: string;
    topMostLevel: NavigationContextLevels;
}
export enum NavigationContextLevels {
    None = 0,
    Deployment = 1,
    Application = 2,
    Collection = 4,
    Project = 8,
    Team = 16,
    ApplicationAll = 30,
    All = 31,
}
export interface PageContext {
    appInsightsConfiguration: AppInsightsConfiguration;
    coreReferences: CoreReferencesContext;
    diagnostics: DiagnosticsContext;
    featureAvailability: FeatureAvailabilityContext;
    globalization: GlobalizationContext;
    microsoftAjaxConfig: MicrosoftAjaxConfig;
    moduleLoaderConfig: ModuleLoaderConfiguration;
    navigation: NavigationContext;
    serviceInstanceId: string;
    serviceLocations: {
        [key: string]: {
            [key: number]: string;
        };
    };
    timeZonesConfiguration: TimeZonesConfiguration;
    webAccessConfiguration: ConfigurationContext;
    webContext: WebContext;
}
export interface StylesheetReference {
    highContrastUrl: string;
    isCoreStylesheet: boolean;
    url: string;
}
export interface TeamContext {
    id: string;
    name: string;
    userIsAdmin: boolean;
    userIsMember: boolean;
}
export interface TeamFoundationServiceHostModel {
    hostType: any;
    instanceId: string;
    name: string;
    relVDir: string;
    vDir: string;
}
export interface TfsMailSettings {
    enabled: boolean;
    from: string;
}
export interface TfsServiceHostDescriptor {
    hostType: any;
    id: string;
    name: string;
    vdir: string;
}
export interface TimeZonesConfiguration {
    daylightSavingsAdjustments: DaylightSavingsAdjustmentEntry[];
}
export interface UserContext {
    email: string;
    id: string;
    limitedAccess: boolean;
    name: string;
    uniqueName: string;
}
export interface WebAccessConfiguration {
    clientHost: string;
    mailSettings: TfsMailSettings;
    resourcesPath: string;
    rootPath: string;
    staticRoot3rdParty: string;
    staticRootTfs: string;
    webApiVersion: string;
}
export interface WebContext {
    account: HostContext;
    collection: HostContext;
    host: ExtendedHostContext;
    project: ContextIdentifier;
    team: TeamContext;
    user: UserContext;
}
export var TypeInfo: {
    AccessPointModel: {
        fields: any;
    };
    AppInsightsConfiguration: {
        fields: any;
    };
    AppInsightsCustomTrackPageData: {
        fields: any;
    };
    ConfigurationContext: {
        fields: any;
    };
    ConfigurationContextApis: {
        fields: any;
    };
    ConfigurationContextPaths: {
        fields: any;
    };
    ContextHostType: {
        enumValues: {
            "unknown": number;
            "deployment": number;
            "application": number;
            "projectCollection": number;
        };
    };
    ContextIdentifier: {
        fields: any;
    };
    ContributionContext: {
        fields: any;
    };
    ContributionPath: {
        fields: any;
    };
    ContributionPathType: {
        enumValues: {
            "default": number;
            "resource": number;
            "bundle": number;
        };
    };
    CoreReferencesContext: {
        fields: any;
    };
    DaylightSavingsAdjustmentEntry: {
        fields: any;
    };
    DiagnosticsContext: {
        fields: any;
    };
    ExtendedHostContext: {
        fields: any;
    };
    FeatureAvailabilityContext: {
        fields: any;
    };
    GlobalizationContext: {
        fields: any;
    };
    HostContext: {
        fields: any;
    };
    Hub: {
        fields: any;
    };
    HubGroup: {
        fields: any;
    };
    HubsContext: {
        fields: any;
    };
    IdentityModel: {
        fields: any;
    };
    JavascriptFileReference: {
        fields: any;
    };
    JsonArrayWrapper: {
        fields: any;
    };
    MicrosoftAjaxConfig: {
        fields: any;
    };
    ModuleLoaderConfiguration: {
        fields: any;
    };
    ModuleLoaderShimConfiguration: {
        fields: any;
    };
    NavigationContext: {
        fields: any;
    };
    NavigationContextLevels: {
        enumValues: {
            "none": number;
            "deployment": number;
            "application": number;
            "collection": number;
            "project": number;
            "team": number;
            "applicationAll": number;
            "all": number;
        };
    };
    PageContext: {
        fields: any;
    };
    StylesheetReference: {
        fields: any;
    };
    TeamContext: {
        fields: any;
    };
    TeamFoundationServiceHostModel: {
        fields: any;
    };
    TfsMailSettings: {
        fields: any;
    };
    TfsServiceHostDescriptor: {
        fields: any;
    };
    TimeZonesConfiguration: {
        fields: any;
    };
    UserContext: {
        fields: any;
    };
    WebAccessConfiguration: {
        fields: any;
    };
    WebContext: {
        fields: any;
    };
};
}
declare module "VSS/Common/Contracts/System" {
export enum DayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}
export var TypeInfo: {
    DayOfWeek: {
        enumValues: {
            "Sunday": number;
            "Monday": number;
            "Tuesday": number;
            "Wednesday": number;
            "Thursday": number;
            "Friday": number;
            "Saturday": number;
        };
    };
};
}
declare module "VSS/Context" {
import Contracts_Platform = require("VSS/Common/Contracts/Platform");
/**
 * Parse out the web context information found in JSON island data in the given element.
 */
export function parseWebContext($element: JQuery): Contracts_Platform.WebContext;
/**
 * Get the raw JSON of the global context of the current page.
 */
export function _getDefaultRawPageContext(): Contracts_Platform.PageContext;
/**
 * Get the default web context for the current page.
 */
export function getDefaultWebContext(): Contracts_Platform.WebContext;
/**
 * Get the global page context for the current page.
 */
export function getPageContext(): Contracts_Platform.PageContext;
}
declare module "VSS/Contributions/Contracts" {
/**
* Represents a VSO &quot;app&quot; which is a container for internal and 3rd party contributions and contribution points
*/
export interface App extends AppManifest {
    /**
    * Unique id for this app (the same id is used for all versions of a single app)
    */
    id: string;
    /**
    * Information about which store this app is published and when/by-whom it was published
    */
    publishInfo: AppPublishInfo;
}
/**
* The state of an installed app
*/
export interface AppInstallationState {
    /**
    * Whether or not the app is currently enabled in a particular app installation
    */
    enabled: boolean;
    /**
    * The time at which this installation was last updated
    */
    lastUpdated: Date;
    /**
    * Identifier of the user who last changed the installation state (install, enable, disable, etc.)
    */
    lastUpdatedBy: string;
}
/**
* Base class for app properties which are shared by the app manifest and the app model
*/
export interface AppManifest {
    /**
    * Uri used as base for other relative uri's defined in app
    */
    baseUri: string;
    /**
    * Dictionary of all contribution points keyed by contribution point id
    */
    contributionPoints: {
        [key: string]: ContributionPoint;
    };
    /**
    * Dictionary of all contributions (property bags) keyed by contribution point id
    */
    contributions: {
        [key: string]: any[];
    };
    /**
    * Dictionary of all contribution types keyed by contribution point type id
    */
    contributionTypes: {
        [key: string]: any;
    };
    /**
    * Description of the app
    */
    description: string;
    /**
    * Url to the icon to use when displaying this app
    */
    icon: string;
    /**
    * Friendly name of the app
    */
    name: string;
    /**
    * Namespace identifier for an app. For example, &quot;vss.web&quot;. This serves as a prefix in references to this app's contributions, contribution types, and contribution points.
    */
    namespace: string;
    /**
    * Information about the provider/owner of this app
    */
    provider: ContributionProvider;
    /**
    * Version of this app
    */
    version: string;
}
/**
* Publishing information about an app
*/
export interface AppPublishInfo {
    /**
    * When the app was last updated
    */
    lastUpdated: Date;
    /**
    * Id of the user who published the app
    */
    ownerId: string;
    /**
    * Store to which the app is published
    */
    store: AppStore;
}
export interface AppSetting {
    key: string;
    value: string;
}
/**
* Store into which apps can be published
*/
export interface AppStore {
    /**
    * Type of app store
    */
    appStoreType: AppStoreType;
    /**
    * Unique identifier for this store
    */
    id: number;
    /**
    * Identifier for the target of the app store. For a developer store, for example, this is the unique user id of the developer.
    */
    target: string;
}
export enum AppStoreType {
    /**
    * App store type is unknown
    */
    Unknown = 0,
    /**
    * Store for builtin VSO apps
    */
    BuiltIn = 1,
    /**
    * Store for an individual app developer
    */
    Developer = 2,
}
/**
* An individual contribution made by an app
*/
export interface Contribution {
    /**
    * The app which contributes this contribution
    */
    app: App;
    /**
    * The full contribution point id string
    */
    point: ContributionIdentifier;
    /**
    * Properties/attributes of this contribution
    */
    properties: any;
}
/**
* Identifier for contribution types and points
*/
export interface ContributionIdentifier {
    /**
    * The namespace of the app that is supplying the contribution point
    */
    appNamespace: string;
    /**
    * The app-relative contribution point id
    */
    appRelativeId: string;
    /**
    * The full/unique identifier of the contribution point (combines app namespace and point id)
    */
    id: string;
}
/**
* A point to which apps can make contributions
*/
export interface ContributionPoint extends ContributionIdentifier {
    /**
    * Description of this contribution point
    */
    description: string;
    /**
    * Id of the contribution type of this point
    */
    type: string;
}
/**
* Description about a property of a contribution type
*/
export interface ContributionPropertyDescription {
    /**
    * Description of the property
    */
    description: string;
    /**
    * Name of the property
    */
    name: string;
    /**
    * True if this property is required
    */
    required: boolean;
    /**
    * The type of value used for this property
    */
    type: ContributionPropertyType;
}
export enum ContributionPropertyType {
    /**
    * Contribution type is unknown (value may be anything)
    */
    Unknown = 0,
    /**
    * Value is a string
    */
    String = 1,
    /**
    * Value is a Uri
    */
    Uri = 2,
    /**
    * Value is a GUID
    */
    Guid = 4,
    /**
    * Value is True or False
    */
    Boolean = 8,
    /**
    * Value is an integer
    */
    Integer = 16,
    /**
    * Value is a double
    */
    Double = 32,
    /**
    * Value is a DateTime object
    */
    DateTime = 64,
    /**
    * Value is a generic Dictionary/JObject/property bag
    */
    Dictionary = 128,
    /**
    * Value is an array
    */
    Array = 256,
}
/**
* Information about the provider of an app
*/
export interface ContributionProvider {
    /**
    * Name of the app owner/provider
    */
    name: string;
    /**
    * Url of the app owner/provider's website
    */
    website: string;
}
/**
* A contribution type, given by a json schema
*/
export interface ContributionType {
    /**
    * The app which contributes this contribution type
    */
    app: App;
    /**
    * Schema of this contribution type
    */
    schema: any;
    /**
    * The full contribution type identifier
    */
    typeIdentifier: ContributionIdentifier;
}
/**
* Represents a VSO app along with its installation state
*/
export interface InstalledApp extends App {
    /**
    * Information about this particular installation of the app
    */
    installState: AppInstallationState;
}
export var TypeInfo: {
    App: {
        fields: any;
    };
    AppInstallationState: {
        fields: any;
    };
    AppManifest: {
        fields: any;
    };
    AppPublishInfo: {
        fields: any;
    };
    AppSetting: {
        fields: any;
    };
    AppStore: {
        fields: any;
    };
    AppStoreType: {
        enumValues: {
            "unknown": number;
            "builtIn": number;
            "developer": number;
        };
    };
    Contribution: {
        fields: any;
    };
    ContributionIdentifier: {
        fields: any;
    };
    ContributionPoint: {
        fields: any;
    };
    ContributionPropertyDescription: {
        fields: any;
    };
    ContributionPropertyType: {
        enumValues: {
            "unknown": number;
            "string": number;
            "uri": number;
            "guid": number;
            "boolean": number;
            "integer": number;
            "double": number;
            "dateTime": number;
            "dictionary": number;
            "array": number;
        };
    };
    ContributionProvider: {
        fields: any;
    };
    ContributionType: {
        fields: any;
    };
    InstalledApp: {
        fields: any;
    };
};
}
declare module "VSS/Contributions/Controls" {
import Contributions_Contracts = require("VSS/Contributions/Contracts");
import Contributions_Services = require("VSS/Contributions/Services");
import Controls = require("VSS/Controls");
/**
* Common interface between internal and external contribution hosts
*/
export interface IExtensionHost {
    /**
    * Get an instance of a registered object in an extension
    *
    * @param instanceId Id of the instance to get
    * @param contextData Optional data to pass to the extension for it to use when creating the instance
    * @return Promise that is resolved to the instance (or a proxy object that talks to the instance in the iframe case)
    */
    getRegisteredInstance<T>(instanceId: string, contextData?: any): IPromise<T>;
}
/**
* Options for contribution host controls
*/
export interface ContributionHostOptions {
    /**
    * Uri that the child frame points to
    */
    uri: string;
    /**
    * The app that is contributing the content
    */
    app: Contributions_Contracts.App;
    /**
    * If undefined, perform a GET request to obtain the iframe content. If postContent is specified it will be POST'ed to the child iframe url
    */
    postContent?: any;
    /**
    * Initial configuration/options to be passed to the content as part of the XDM handshake
    */
    initialConfig?: any;
}
/**
* Options for the external content host control
*/
export interface ExternalContentHostOptions extends ContributionHostOptions {
    /**
    * If true, setup an XDM channel with the child frame (this flag indicates that the child frame uses VSS.SDK).
    */
    interactive?: boolean;
    /**
    * The amount of time in milliseconds before showing a slow-loading message. The default is 10 seconds (10000). Set to 0 to turn this feature off.
    */
    slowLoadWarningDuration?: number;
}
/**
* A control that hosts external content via iframe
*/
export class ExternalContentHost extends Controls.Control<ExternalContentHostOptions> implements IExtensionHost {
    static DEFAULT_SLOW_LOAD_DURATION: number;
    static MAX_WAIT_FOR_LOADED_EVENT: number;
    static Events: {
        EXTENSION_LOAD_FAILED: string;
        SLOW_LOAD_WARNING: string;
        EXTENSION_MESSAGE_RESIZED: string;
    };
    private _xdmChannel;
    private _$container;
    private _$iframe;
    private _iframeId;
    private _receivedLoadedEvent;
    private _loadFailed;
    private _loadedDeferred;
    private _$statusContainer;
    private _statusControl;
    private _messageArea;
    constructor(options?: ExternalContentHostOptions);
    /**
    * Gets the jQuery element of the iframe being hosted
    */
    private getIFrame();
    /**
    * Gets the jQuery element of the iframe being hosted
    */
    private getWindow();
    /**
    * Gets the XDM channel used to communicate with the child iframe
    */
    private getXdmChannel();
    /**
    * Initialize the XDM channel if we haven't already done so
    */
    private ensureXdmChannelIntialized();
    initialize(): void;
    private _showExtensionMessage(messageType, messageTitle, messageContentHtml, messageIsFromExtension, expandDetails);
    private _handleLoadError(errorMessage);
    private _hideLoadingIndicator();
    private _handleLoaded();
    /**
    * Get an instance of a registered object in an extension
    *
    * @param instanceId Id of the instance to get
    * @param contextData Optional data to pass to the extension for it to use when creating the instance
    * @return Promise that is resolved to the instance (or a proxy object that talks to the instance in the iframe case)
    */
    getRegisteredInstance<T>(instanceId: string, contextData?: any): IPromise<T>;
    /**
    * Execute a method in the child iframe
    *
    * @param methodName Name of the RPC method to invoke via XDM
    * @param params Arguments to pass to the method
    */
    invokeMethod(methodName: string, params?: any[]): IPromise<any>;
    /**
     * Get the host control object which the VSS.SDK can interact with to
     * for initial handshake, resizinig, etc.
     */
    private getHostControl();
}
/**
* A control that hosts internal content by injecting it into the parent DOM
*/
export class InternalContentHost extends Controls.Control<ContributionHostOptions> implements IExtensionHost {
    private _$contentContainer;
    private _loadedDeferred;
    constructor(options?: ContributionHostOptions);
    initialize(): void;
    /**
    * Get an instance of a registered object in an extension
    *
    * @param instanceId Id of the instance to get
    * @param contextData Optional data to pass to the extension for it to use when creating the instance
    * @return Promise that is resolved to the instance (or a proxy object that talks to the instance in the iframe case)
    */
    getRegisteredInstance<T>(instanceId: string, contextData?: any): IPromise<T>;
    private handleContentReceived(content);
}
/**
* Instantiate a contributed control through an internal or external contribution host.
*
* @param $container The jQuery element to place the control in
* @param contribution The contribution which contains the details of the contributed control
* @param url The url of the contribution content
* @param initialConfig Initial configuration/options to pass to the control
* @param postContent: Optional data to post to the contribution url (if not specified, a GET is performed)
* @param usePooledBackgroundHost: Set to true if the host will not be shown in the UI and we want to re-use an existing pooled host that points to the same endpoint.
* @return IExtensionHost
*/
export function createExtensionHost<TControlInterface>($container: JQuery, uri: string, contribution: Contributions_Services.Contribution, initialConfig?: any, postContent?: any): IExtensionHost;
/**
* Instantiate a contributed control through an internal or external contribution host.
*
* @param contribution The contribution which contains the details of the contributed control
* @param url The url of the contribution content
* @return IExtensionHost
*/
export function getBackgroundHost<TControlInterface>(uri: string, contribution: Contributions_Services.Contribution): IExtensionHost;
/**
 * Manages a pool of hosts (iframes) used for making RPCs to various app implementations
 */
export class BackgroundHostPool {
    private _hostsContainer;
    private _hosts;
    constructor();
    /**
     * Retrieve the container that background host iframes live in
     * @return JQuery
     */
    private getHostsContainer();
    /**
    * Gets an AppHost for the given contribution. May re-use old hosts,
    * return an existing host for this contribution, or create a new one.
    *
    * @param Contribution_Services.Contribution
    * @param initialConfig Initial configuration/options to pass to the host control (ignored if using a cached host)
    * @param postContent: Optional data to post to the contribution url. If not specified, a GET is performed. (ignored if using a cached host)
    * @return AppHost
    */
    getHost(uri: string, contribution: Contributions_Services.Contribution, initialConfig?: any, postContent?: any): ExternalContentHost;
    /**
     * Creates a new host that is hidden in the UI (for RPCs)
     */
    private createBackgroundHost(uri, contribution, initialConfig?, postContent?);
}
/**
* Default pool of background (non-UI) external host/iframes used for communicating with extensions
*/
export var backgroundHostPool: BackgroundHostPool;
}
declare module "VSS/Contributions/RestClient" {
import Contracts = require("VSS/Contributions/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class ContributionsHttpClient extends VSS_WebApi.VssHttpClient {
    constructor(rootRequestPath: string);
    /**
     * @param {string} appStoreId
     * @param {string} appId
     * @return IPromise<Contracts.App>
     */
    getApp(appStoreId: string, appId: string): IPromise<Contracts.App>;
    /**
     * @param {string} appStoreId
     * @return IPromise<Contracts.App[]>
     */
    getApps(appStoreId: string): IPromise<Contracts.App[]>;
    /**
     * @param {Contracts.AppManifest} app
     * @param {string} appStoreId
     * @return IPromise<Contracts.App>
     */
    publishApp(app: Contracts.AppManifest, appStoreId: string): IPromise<Contracts.App>;
    /**
     * @param {string} appStoreId
     * @param {string} appId
     * @return IPromise<void>
     */
    removeApp(appStoreId: string, appId: string): IPromise<void>;
    /**
     * @param {string} appId
     * @return IPromise<Contracts.InstalledApp>
     */
    getInstalledApp(appId: string): IPromise<Contracts.InstalledApp>;
    /**
     * @param {string[]} contributionPointIdFilter
     * @param {boolean} includeDisabledApps
     * @return IPromise<Contracts.InstalledApp[]>
     */
    getInstalledApps(contributionPointIdFilter?: string[], includeDisabledApps?: boolean): IPromise<Contracts.InstalledApp[]>;
    /**
     * @param {Contracts.InstalledApp} appToInstall
     * @return IPromise<Contracts.InstalledApp>
     */
    installApp(appToInstall: Contracts.InstalledApp): IPromise<Contracts.InstalledApp>;
    /**
     * @param {string} appId
     * @return IPromise<void>
     */
    unInstallApp(appId: string): IPromise<void>;
    /**
     * @param {Contracts.InstalledApp} app
     * @param {string} appId
     * @return IPromise<Contracts.InstalledApp>
     */
    updateInstalledApp(app: Contracts.InstalledApp, appId?: string): IPromise<Contracts.InstalledApp>;
    /**
     * @param {string} appId
     * @param {string} key
     * @return IPromise<Contracts.AppSetting>
     */
    getAppData(appId: string, key: string): IPromise<Contracts.AppSetting>;
    /**
     * @param {Contracts.AppSetting} setting
     * @param {string} appId
     * @param {string} key
     * @return IPromise<Contracts.AppSetting>
     */
    updateAppData(setting: Contracts.AppSetting, appId: string, key: string): IPromise<Contracts.AppSetting>;
}
}
declare module "VSS/Contributions/Services" {
import Contributions_Contracts = require("VSS/Contributions/Contracts");
export module CustomerIntelligenceConstants {
    var CONTRIBUTIONS_AREA: string;
    var CONTRIBUTIONS_USAGE_FEATURE: string;
    var CONTRIBUTIONS_ACTION: string;
    var CONTRIBUTIONS_ACTION_EXECUTE: string;
}
export enum ContributionAttributeDataType {
    String = 0,
    Number = 1,
    Boolean = 2,
    Array = 3,
    Function = 4,
}
export interface IContributionPoint {
    description: string;
    type: string;
}
export interface IContributionTypes {
    [typeName: string]: IContributionType;
}
export interface IContributionType {
    description: string;
    parentType?: string;
    attributes: IContributionTypeAttribute[];
}
export interface IContributionTypeAttribute {
    name: string;
    description: string;
    required?: boolean;
    type: string;
    validValues?: IAttributeValidValue[];
    attributes?: IContributionTypeAttribute[];
}
export interface IAttributeValidValue {
    name: string;
}
/********************/
/*** Apps classes ***/
/********************/
/**
 * Represents a Registered App, which encapsulates contributions
 */
export class RegisteredApp {
    private _contributions;
    private _app;
    /**
     * Namespace of the app, e.g. vss.code.web
     */
    namespace: string;
    /**
     * Indicates if this app was generated from loading an app from the client's localhost
     */
    isDevApp: boolean;
    /**
     * Indicates this app has been initialized with data. The constructor doesn't require
     * all app info so that references can be made to this object before the data is loaded.
     */
    initialized: boolean;
    /**
     * Non-initializing constructor
     * @param namespace Namepsace of the app (e.g. vss.code.ui)
     * @param isDevApp True if this app is being created by dev mode.
     */
    constructor(namespace: string, isDevApp?: boolean);
    /**
     * Initialize this app with the given App object
     * @param Contributionscommon.App The app that is registered
     */
    initialize(app: Contributions_Contracts.App): void;
    /**
     * Returns the underlying app data structure
     * @returns Contributions_Contracts.App The underlying App iff this RegisteredApp has been initialize()'d
     * @throws Error if this RegisteredApp has not been initialized.
     */
    app(): Contributions_Contracts.App;
    /**
     * Add contributions for this app to previously unpopulated contribution point ids.
     *
     * @param contributions key-value-pair pointing contribution point id to the Contribution
     * @return Contribution[] flat list of contributions added
     */
    updateContributions(contributions: IDictionaryStringTo<IDictionaryStringTo<any>[]>): Contribution[];
    /**
     * Get the contributions from this app, optionally filtered by the given contribution point ids.
     * If no contributions are found, return an empty list.
     */
    getContributions(pointIds?: string[]): Contribution[];
}
/**
 * Manages all RegisteredApp instances and their contributions.
 */
export class AppRegistry {
    private _apps;
    private static _instance;
    private _contributionsClient;
    private _contributionsByPointId;
    private _contributionsByAppNamespace;
    private _loadedContributionPoints;
    private _loadedAppNamespaces;
    private _contributionQueryPromises;
    private static _featureEnabled;
    /**
     * Private constructor - do not call.
     */
    constructor();
    /**
     * Get the singleton instance (create if it doesn't exist) of this class
     * @return AppRegistry
     */
    static getInstance(): AppRegistry;
    private registerAppNamespace(namespace, isDevApp?);
    private addRegisteredApp(app);
    /**
     * Register an application so that its contributions can be queried
     * @param app Contributions_Contracts.AppManifest The manifest of the app to register (App may also be provided; it is type-compatible with AppManifest)
     * @return RegisteredApp The resulting app object
     */
    registerApp(app: Contributions_Contracts.App): RegisteredApp;
    /**
     * Gets a list of contributions (from all installed apps) to the given point names.
     * @param pointIds Contribution point ids
     * @param refresh (null) True to force re-fetch of contributions, false to ensure no server calls, null to make server calls for any unfulfilled point ids.
     * @return JQueryPromise<Contribution[]> Promise that is resolved when contributions are available.
     */
    beginGetContributions(pointIds: string[], refresh?: boolean): IPromise<Contribution[]>;
    /**
    * Fetch a contribution by metadata about the contribution to get (point id, contribution id, extension id).
    *
    * @param contributionInfo IContribution which specifies information about the Contribution to get
    * @param failOnDuplicateMatches If true, reject the promise if more than one contribution matches the given query. Otherwise the first match is returned.
    */
    getContribution(contributionInfo: IContribution, failOnDuplicateMatches?: boolean): IPromise<Contribution>;
    private _getUnqueriedContributionPoints(pointIds);
    private _getPendingLoadPromises(pointIds);
    private _getLoadedContributionsByPointId(pointIds);
    /**
     * Mark the given contribution point ids as already queried-for so that additional gets
     * for these contributions don't issue another REST call.
     * @param pointIds Contribution point ids
     */
    private _registerLoadedContributionIds(pointIds);
    /**
     * Check that an app exists with the given namespace
     * @param namespace The namespace of the app being searched for
     * @return boolean True if the registry contains this app, false otherwise.
     */
    containsApp(namespace: string): boolean;
    /**
     * Gets the app from the registry with the given name.
     * @param namespace Namespace of the app (e.g. vss.code.web)
     * @param createIfNotExists Only used if the app needs to be created: true to specify that it is a dev app (e.g. using dev mode)
     * @return RegisteredApp The app that was found matching the namespace, or the one that was just created.
     */
    getApp(namespace: string, createIfNotExists?: boolean): RegisteredApp;
    /**
     * Parse the apps in the JSON island given by the selector
     * @param selector Selector to match a script tag containing JSON
     */
    static processJsonIsland(selector: string): void;
    /**
     * Determines if the Contribution feature is enabled (lazy)
     * @return boolean
     */
    static featureEnabled(): boolean;
}
/************************************/
/*** Contribution-related classes ***/
/************************************/
/**
 * Represents a contributed unit to a single extensibility point
 */
export class Contribution {
    private static _httpUrlRegex;
    private static _handlebarHelpersRegistered;
    private static _asyncReplacementIndicator;
    private static _asyncReplacementCounter;
    private static _asyncReplacementPromises;
    /**
     * The properties that fulfill this contribution's type
     */
    /** PROTECTED **/
    _definition: IDictionaryStringTo<any>;
    _app: RegisteredApp;
    /**
     * The ContributionPoint this Contribution applies to
     */
    targetPoint: ContributionPoint;
    /**

     */
    constructor(contributionPoint: string, definition: IDictionaryStringTo<any>, app: string);
    /**
     * Get the specified property of this contribution
     * Optional type parameter to specify the output data type
     * @typeparam T
     * @param string Name of the property to get
     * @param T Default value in case property does not exist on this contribution.
     * @return T
     */
    getProperty<T>(propName: string, defaultValue?: T): T;
    /**
    * Get a lookup of all contribution properties
    */
    getProperties(): IDictionaryStringTo<any>;
    /**
    * Gets a non-templated uri property. It will be resolved with the base url of the extension.
    * @param propName Name of the property containing the uri
    */
    getUriProperty(propName: string): string;
    /**
     * Gets the requested property value with templated strings filled in by values in the given object
     * @param string The name of the property to get
     * @param any Object containing key-value pairs to replace the template strings
     * @return JQueryPromise<string> Promise that will be resolved with the value of the property after replacements are made.
     */
    beginGetTemplateProperty(propertyName: string, replacementObject: any): IPromise<string>;
    /**
     * Gets the requested property value with templated strings filled in by values in the given object.  It will
     * attempt to append on baseUrl property if it is available and it is needed.
     * @param string The name of the property to get
     * @param any Object containing key-value pairs to replace the template strings
     * @return JQueryPromise<string> Promise that will be resolved with the value of the property after replacements are made.
     */
    beginGetTemplateUriProperty(propertyName: string, replacementObject: any): IPromise<string>;
    private _processTemplate(propertyValue, replacementObject);
    private handleAsyncReplacements(value, asyncIndex, asyncStopIndex, deferred);
    /**
     * Returns
     * @return string
     */
    private _processUriProperty(path);
    /**
     * Returns whether or not this contribution comes from dev mode
     * @return boolean
     */
    isDevModeContribution(): boolean;
    /**
     * Gets the namespace of the app that contributed this contribution
     * @return string
     */
    getAppNamespace(): string;
    /**
     * Gets the RegisteredApp that contributed this contribution
     * @return RegisteredApp
     */
    getApp(): RegisteredApp;
    publishTraceData(data?: string): void;
    private static _registerHandlebarHelpers(handlebars);
}
/**
 * Represents a contribution point that will host other contributions
 */
export class ContributionPoint {
    /**
     * Name of this contribution point (without app name)
     */
    name: string;
    /**
     * Description of contribution point (optional)
     */
    description: string;
    /**
     * Type of contributions that are accepted here
     */
    contributionType: ContributionType;
    /**
     * Reference to the app that exposes this contribution point.
     */
    hostingApp: RegisteredApp;
    /**
     * ContributionPoint constructor
     * @param string Contribution point name, or, if appNamespace is not specified, contribution point id (app.namespace#point.name)
     * @param string Type of contribution (as string)
     * @param string app namespace, if not specified in the first parameter.
     */
    constructor(name: string, appNamespace?: string);
    /**
     * Gets the fullly qualified name of this contribution point (e.g. app.namespace#point.name)
     * @return string
     */
    getFullName(): string;
    /**
     * Gets the fully-qualified contribution point name
     * @param string Name of the contribution point
     * @param string Name of the app that is hosting it
     * @return string e.g. App.Name#Contribution.Point.Name
     */
    static composeContributionPointName(pointName: string, hostApp?: string): string;
    /**
     * Gets the raw point name from the given point name (either fully qualified or not)
     * @param string Point name
     * @return string e.g. Contribution.Point.Name
     */
    static stripAppNamespace(pointName: string): string;
    /**
     * Gets the name of the app from a full point name (app.namespace#point.name)
     * @param string Full point name
     * @return string e.g. App.namespace
     */
    static stripPointName(pointName: string): string;
}
/**
 * Manages all the instances of ContributionPoint
 */
export class ContributionPointRegistry {
    private static _instance;
    private _contributionPoints;
    /**
     * Private constructor - do not call.
     */
    constructor();
    /**
     * Get the singleton instance (create if it doesn't exist) of this class
     * @return ContributionPointRegistry
     */
    static getInstance(): ContributionPointRegistry;
    /**
     * Determines if the given point has been registered.
     * @param string Name of the contribution point (fully-qualified or just the point name)
     * @param string? Name of the host app if the first parameter is not the fully-qualified name
     */
    containsPoint(name: string, hostApp?: string): boolean;
    private registerContributionPointName(contributionPoint, appName);
    private addPointToRegistry(contributionPoint);
    /**
     * Register a contribution point.
     * The idea is to loop through all the JSON ContributionPoints and call ContributionPointRegistry.register...() on each.
     * @param IContributionPoint the point to register, lifted from the manifest file.
     * @param string the name of the app that is exposing this contribution point.
     * @return ContributionPoint The ContributionPoint that was registered, null if nothing got registered.
     */
    registerContributionPoint(name: string, contributionPoint: IContributionPoint, appName?: string): ContributionPoint;
    registerContributionPoints(fullPointNames: string[]): void;
    /**
     * Gets the contribution point for the given name and optionally hostapp.
     * @param string Name of the contribution point (fully qualified if hostApp not provided)
     * @param string? Name of the hosting app
     * @param boolean If true, create the point and register it.
     * @return ContributionPoint The point that was found (or just created)
     */
    getContributionPoint(name: string, hostApp?: string, createIfNotExists?: boolean): ContributionPoint;
}
/**
 * Represents a type of contribution, used for validation
 */
export class ContributionType {
    private _attributes;
    /**
     * Name of the contribution type
     */
    name: string;
    /**
     * Description of its purpose
     */
    description: string;
    /**
     * Type to extend (parent attributes are inherited)
     */
    parentType: ContributionType;
    /**
     * True iff this type is initialized and ready to be used for validation
     */
    initialized: boolean;
    /**
     * ContributionType constructor
     * @param string Name of the contribution type
     */
    constructor(name: string);
    /**
     * Initialize this contribution type
     * @param string Description of this type
     * @param string Reference to the parent type
     * @param IContributionAttribute[] List of unique attributes of this contribution type
     */
    initialize(description?: string, parentType?: string, attributes?: IContributionTypeAttribute[]): void;
    /**
     * Get the attributes on this contribution type
     * @param boolean (true) True to include attributes from inherited types
     * @return IDictionaryStringTo<ContributionTypeAttribute> Dictionary of attributes
     */
    getAttributes(includeInherited?: boolean): IDictionaryStringTo<ContributionTypeAttribute>;
    /**
     * Return the attribute with the given name. Looks through inherited types as well.
     * @param The name of the attribute to find
     * @return ContributionTypeAttribute The attribute with the given name. Null if not found.
     */
    getAttribute(attrName: string): ContributionTypeAttribute;
}
/**
 * Manages all the instances of ContributionType
 */
export class ContributionTypeRegistry {
    private static _instance;
    private _types;
    /**
     * Private constructor - do not call
     */
    constructor();
    /**
     * Get the singleton instance (create if it doesn't exist) of this class
     * @return ContributionTypeRegistry
     */
    static getInstance(): ContributionTypeRegistry;
    private registerContributionTypeName(contributionTypeName);
    private addTypeToRegistry(contributionType);
    /**
     * Create a ContributionType based on the given IContributionType and register it.
     * @param string Name of the contribution type
     * @param IContributionType Type from the manifest
     * @return ContributionType The object that was created/registered.
     */
    registerContributionType(name: string, contributionType: IContributionType): ContributionType;
    /**
     * Determines if the given type name is in the registry
     * @return boolean
     */
    containsType(typeName: string): boolean;
    /**
     * Gets the contribution type from the registry specified by the typeName
     * @param string Name of the contribution type
     * @param boolean True to create the type and register it if it is not already in the registry.
     */
    getType(typeName: string, createIfNotExists?: boolean): ContributionType;
}
/**
 * Represents a single attribute for a contribution type
 */
export class ContributionTypeAttribute {
    /**
     * Name of the attribute
     */
    name: string;
    /**
     * Description of the attribute's purpose
     */
    description: string;
    /**
     * Specifies whether or not the attribute is required or optional on contributions of this type
     */
    required: boolean;
    /**
     * Data type of the attribute's value
     */
    type: ContributionAttributeDataType;
    /**
     * Constructor
     * @param string Attribute name
     * @param string Attribute description
     * @param boolean Required attribute
     * @param string Attribute type
     */
    constructor(name: string, description: string, required: boolean, type: string);
    /**
     * Convert an attribute type string to the enum value
     * @param string Data type as a string
     * @return ContributionTypeAttribute
     */
    static stringToDataType(str: string): ContributionAttributeDataType;
}
export class ManifestManager {
    private static _instance;
    private _isDevMode;
    private _devport;
    constructor();
    static getInstance(): ManifestManager;
    isDevMode(): boolean;
    /**
     * Check to see if we should try and load a manifest from a local development server.  Two locations are checked.
     * First look for vsodevmode query string parameter.  If that is set to true we will attempt to load a local manifest.
     * If query string paramter does not exist, then look in session storage to see if has already been set for this session.
     */
    private checkDevMode();
    private _removeDevPort();
    private _storeDevPort(port);
    private _getDevPort();
    checkForContributions(): void;
    private beginGetDevelopmentIntegrations();
}
}
declare module "VSS/Controls" {
export function getId(): number;
export interface EnhancementOptions {
    earlyInitialize?: boolean;
    cssClass?: string;
    coreCssClass?: string;
    tagName?: string;
    width?: number | string;
    height?: number | string;
    title?: string;
    role?: string;
    id?: number | string;
    prepend?: boolean;
    change?: Function;
}
export class Enhancement<TOptions> {
    static ENHANCEMENTS_DATA_KEY: string;
    static ENHANCEMENT_OPTIONS_KEY: string;
    static ENHANCEMENT_OPTIONPREFIX_KEY: string;
    static optionsPrefix: string;
    private static enhancementList;
    private _id;
    private _typeName;
    private _eventNamespace;
    private _trackedElements;
    private _delayedFunctions;
    protected _enhancementOptions: EnhancementOptions;
    _options: TOptions;
    _initialized: boolean;
    _element: JQuery;
    _disposed: boolean;
    /**
     * @param options
     */
    constructor(options?: TOptions, enhancementOptions?: EnhancementOptions);
    /**
     * @param type
     * @return
     */
    static getTypeName(type?: any): string;
    /**
     * @return
     */
    static getOptionPrefix(type: any): string;
    /**
     * @param type
     * @param element
     */
    static getEnhancementOptions(type: any, element: any): any;
    /**
     * @param type
     * @param element
     * @param options
     * @return
     */
    static enhance<TOptions>(type: new (options: TOptions, enhancementOptions: EnhancementOptions) => Enhancement<TOptions>, element: Enhancement<any> | JQuery | Node | string, options?: ((element: JQuery) => TOptions) | TOptions, enhancementOptions?: EnhancementOptions): Enhancement<TOptions>;
    /**
     * @param type
     * @param element
     * @return
     */
    static getInstance(type?: any, element?: any): Enhancement<any>;
    static getInstanceO<TOptions>(type?: any, element?: any): Enhancement<TOptions>;
    /**
     * @param type
     * @param selector
     * @param options
     * @param errorCallback
     */
    static registerEnhancement<TOptions>(type?: {
        new (options: TOptions): Enhancement<TOptions>;
    }, selector?: string, options?: TOptions, errorCallback?: IErrorCallback, enhancementOptions?: EnhancementOptions): void;
    /**
     * @param type
     * @param context
     * @param errorCallback
     * @return
     */
    static ensureEnhancements(type?: any, context?: any, errorCallback?: any): Enhancement<any>[];
    /**
     * @param type
     * @param context
     * @param errorCallback
     * @return
     */
    static ensureEnhancement(type?: any, context?: any, errorCallback?: any): Enhancement<any>;
    /**
     * @param type
     * @param widgetName
     * @param widgetOptions
     */
    static registerJQueryWidget<TOptions>(type?: any, widgetName?: any, widgetOptions?: TOptions, enhancementOptions?: EnhancementOptions): void;
    /**
     * @return
     */
    protected _getUniqueId(): string;
    /**
     * @return
     */
    getId(): string;
    /**
     * @param id
     */
    protected _setId(id: string): void;
    /**
     * Sets options related to the creation of this control or enhancement of an element as this control.
     * Note: Options are merged.
     * @param EnhancementOptions
     */
    setEnhancementOptions(enhancementOptions: EnhancementOptions): void;
    /**
     * @return
     */
    getTypeName(): string;
    /**
     * @return
     */
    protected _getEventNameSpace(): string;
    getType(): Function;
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    initialize(): void;
    /**
     * @return
     */
    _ensureInitialized(): boolean;
    protected _attemptInitialize(): void;
    enhance($element: any): void;
    /**
     * @param element
     */
    protected _enhance(element: JQuery): void;
    /**
     * @param element
     */
    protected _setElement(element: JQuery): void;
    protected _setStyles(): void;
    /**
     * Gets the element associated with this control.
     *
     * @return
     */
    getElement(): JQuery;
    /**
     * @param element
     * @param eventType
     * @param args
     */
    _fire(element?: any, eventType?: any, args?: any): any;
    /**
     * @param element
     * @param eventType
     * @param handler
     * @param track
     */
    _bind(element?: any, eventType?: any, handler?: any, track?: any): Enhancement<TOptions>;
    /**
     * @param element
     * @param eventType
     * @param handler
     * @param track
     */
    _unbind(element?: any, eventType?: any, handler?: any, track?: any): Enhancement<TOptions>;
    /**
     * Executes the provided function after the specified amount of time
     *
     * @param name (Optional) Name for this operation. Allows subsequent calls to cancel this action.
     * @param msDelay Delay in milliseconds to wait before executing the Function
     * @param cancelPendingOps If true, cancel any pending requests with this name. If false, and there are outstanding requests with this name already in progress, then do nothing.
     * @param func Method to execute after the delay
     */
    delayExecute(name?: string, msDelay?: number, cancelPendingOps?: boolean, func?: Function): void;
    /**
     * Cancels any pending delayed functions (delayExecute calls) with the specified name
     *
     * @param name Name (supplied in the delayExecute call) of the operations to cancel
     * @return True if any operation was canceled. False if no operations with the specified name were in progress
     */
    cancelDelayedFunction(name: string): boolean;
    protected _cleanup(): void;
    protected _dispose(): void;
    dispose(): void;
    /**
     * @return
     */
    isDisposed(): boolean;
    protected _getEnhancementOption(key: string): any;
    private _trackElement(domElement);
    private _untrackElement(domElement);
}
/**
 * Creates a the control specified by TControl in the given container.
 * @typeparam TControl extends Control<TOptions> - a reference to the type of control to create. Should be the
 *            same type as the constructor function passed as the first parameter to this function. Note: TypeScript
 *            doesn't support the constraint of a type parameter referencing any other type parameter in the same
 *            list, but callers should ensure that TControl extends Control<TOptions>.
 * @typeparam TOptions - The type that is passed in as the options for this control. The instantiated control must
 *            an options parameter of this type.
 * @param controlType: new (options: TOptions) => TControl - the constructor function (ClassName) of this type.
 * @param container: JQuery - a JQuery element to place the control in.
 * @param controlOptions: TOptions - Options to pass in for this control. See the interface for the options type
 *        for more details.
 * @param enhancementOptions?: EnhancementOptions - Optional options for the control enhancement.
 * @return TControl - returns an instance of the controlType (first parameter), typed as a TControl (first type param).
 */
export function create<TControl extends Control<any>, TOptions>(controlType: new (options: TOptions) => TControl, container: JQuery, controlOptions: TOptions, enhancementOptions?: EnhancementOptions): TControl;
export class Control<TOptions> extends Enhancement<TOptions> {
    /**
     * Creates a the control specified by TControl in the given container.
     * @typeparam TControl extends Control<TOptions> - a reference to the type of control to create. Should be the
     *            same type as the constructor function passed as the first parameter to this function. Note: TypeScript
     *            doesn't support the constraint of a type parameter referencing any other type parameter in the same
     *            list, but callers should ensure that TControl extends Control<TOptions>.
     * @typeparam TOptions - The type that is passed in as the options for this control. The instantiated control must
     *            an options parameter of this type.
     * @param controlType: new (options: TOptions) => TControl - the constructor function (ClassName) of this type.
     * @param container: JQuery - a JQuery element to place the control in.
     * @param controlOptions: TOptions - Options to pass in for this control. See the interface for the options type
     *        for more details.
     * @param enhancementOptions?: EnhancementOptions - Optional options for the control enhancement.
     * @return TControl - returns an instance of the controlType (first parameter), typed as a TControl (first type param).
     */
    static create<TControl extends Control<any>, TOptions>(controlType: new (options: TOptions) => TControl, container: JQuery, controlOptions: TOptions, enhancementOptions?: EnhancementOptions): TControl;
    /**
     * @param type
     * @param container
     * @param options
     * @return
     */
    static createIn<TOptions>(type?: any, container?: any, options?: TOptions, koCompatable?: boolean): Control<any>;
    private _overlay;
    /**
     * @param options
     */
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    /**
     * @return
     */
    _getUniqueId(): string;
    /**
     * @param id
     */
    _setId(id: string): void;
    dispose(): void;
    showElement(): void;
    hideElement(): void;
    enableElement(enabled: any): void;
    showBusyOverlay(): JQuery;
    hideBusyOverlay(): void;
    _createElement(): void;
    _initializeElement(): void;
    _setStyles(): void;
    createIn(container: JQuery): void;
    protected _createIn(container: JQuery): void;
    /**
     * Set Focus to the control
     */
    focus(): void;
    /**
     * Fires the change event for the control immediately
     *
     * @param sender Source element of the event
     */
    protected _fireChange(sender?: any): any;
}
export class BaseControl extends Control<any> {
}
export class BaseDataSource {
    private _source;
    private _items;
    private _allItems;
    _options: any;
    constructor(options?: any);
    setSource(source: any): void;
    getSource(): any;
    /**
     * @param source
     */
    prepareSource(source?: any): void;
    getComparer(): any;
    ensureItems(): void;
    /**
     * @param all
     */
    getItems(all?: any): any;
    /**
     * @param allItems
     */
    setItems(items: any, allItems?: any): void;
    /**
     * @param all
     */
    getCount(all?: any): any;
    /**
     * @param all
     */
    getItem(index: any, all?: any): any;
    /**
     * @param all
     * @param textOnly
     * @return
     */
    getItemText(index: any, all?: any, textOnly?: any): string;
    /**
     * @param startsWith
     * @param all
     */
    getItemIndex(itemText: any, startsWith?: any, all?: any): any;
    nextIndex(selectedIndex: any, delta: any, all: any): number;
}
export class ListDataSource extends BaseDataSource {
    constructor(options?: any);
}
}
declare module "VSS/Controls/Common" {
import Controls = require("VSS/Controls");
import Utils_Core = require("VSS/Utils/Core");
import Validation = require("VSS/Controls/Validation");
export class ToastNotification extends Controls.BaseControl {
    private _messageArea;
    private _fadeInTime;
    private _fadeOutTime;
    private _toastTime;
    private _toasting;
    private _delayedFunction;
    constructor(options?: any);
    initialize(): void;
    initializeOptions(options?: any): void;
    private _processOptions();
    private _getOptions();
    private _getDefaultOptions();
    /**
     * Pop up a toast with the supplied message
     *
     * @param message This can be a string or JQuery object
     * @param messageType The type of message area you want displayed. Defaults to Info.
     */
    toast(message: any, messageType?: MessageAreaType): void;
    /**
     * If toasting ensure we cancel all in-progress toasting activities
     */
    private _ensureNoActiveToast();
}
export class BaseComboBehavior {
    private _onForceHideDropPopupDelegate;
    combo: any;
    _options: any;
    _dropPopup: any;
    _dataSource: Controls.BaseDataSource;
    constructor(combo: any, options?: any);
    initialize(): void;
    dispose(): void;
    isDropVisible(): any;
    setMode(value: any): void;
    canType(): boolean;
    getDataSource(): Controls.BaseDataSource;
    /**
     * @return
     */
    getDropOptions(): any;
    getDropWidth(): any;
    showDropPopup(): boolean;
    hideDropPopup(): boolean;
    toggleDropDown(): void;
    isDropPopupOpen(): boolean;
    setSource(source: any): void;
    /**
     * @return
     */
    getSelectedIndex(): number;
    setSelectedIndex(selectedIndex: any, fireEvent: any): void;
    /**
     * @return
     */
    getText(): string;
    /**
     * @param value
     * @param fireEvent
     */
    setText(value: string, fireEvent?: boolean): void;
    /**
     * @param e
     * @return
     */
    upKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    downKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    pageUpKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    pageDownKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    leftKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    rightKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    keyDown(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    keyPress(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    keyUp(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    onForceHideDropPopup(e?: JQueryEventObject): any;
    private _attachGlobalEvents();
    private _detachGlobalEvents();
}
export class BaseComboDropPopup extends Controls.BaseControl {
    combo: any;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    setPosition(): void;
    /**
     * @param e
     * @return
     */
    private _onMouseDown(e?);
}
export class Combo extends Controls.BaseControl {
    static enhancementTypeName: string;
    static registerBehavior(behaviorMode: any, behaviorType: any): void;
    static attachBehavior(combo: any, options?: any): any;
    _blockBlur: boolean;
    _dropPopup: any;
    _input: any;
    $dropButton: any;
    _behavior: any;
    _currentText: string;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    _dispose(): void;
    _createIn(container: any): void;
    /**
     * @param element
     */
    _enhance(element: JQuery): void;
    initialize(): void;
    getBehavior(): any;
    /**
     * @return
     */
    getText(): string;
    /**
     * @param value
     * @param fireEvent
     */
    setText(text: any, fireEvent?: boolean): any;
    /**
     * Gets the input element of combo
     *
     * @return
     */
    getInput(): any;
    getInputText(): any;
    setInputText(text: any, fireEvent: any): void;
    /**
     * @return
     */
    getSelectedIndex(): number;
    setSelectedIndex(selectedIndex: any, fireEvent: any): void;
    /**
     * @param newValue
     */
    fireChangeIfNecessary(newValue?: string): any;
    toggleDropDown(): void;
    /**
     * @param e
     * @return
     */
    showDropPopup(e?: JQueryEventObject): any;
    hideDropPopup(): any;
    isDropPopupOpen(): any;
    blockBlur(): void;
    cancelBlockBlur(): void;
    /**
     * @param e
     * @return
     */
    _onInputKeyDown(e?: JQueryEventObject): any;
    setTextSelection(selectionStart: any): void;
    setSource(source: any): void;
    getEnabled(): boolean;
    setEnabled(value: any): void;
    getMode(): any;
    setMode(value: any): void;
    setType(type: any): void;
    getComboType(): string;
    setInvalid(value: any): void;
    private _ensureBehavior();
    private _decorate();
    private _updateStyles();
    /**
     * @param e
     * @return
     */
    private _onDropButtonClick(e?);
    /**
     * @param e
     * @return
     */
    private _onInputClick(e?);
    /**
     * @param e
     * @return
     */
    private _onInputFocus(e?);
    /**
     * @param e
     * @return
     */
    private _onInputBlur(e?);
    /**
     * @param e
     * @return
     */
    private _onMouseDown(e?);
    /**
     * @param e
     * @return
     */
    private _onInputKeyPress(e?);
    /**
     * @param e
     * @return
     */
    private _onInputKeyUp(e?);
}
export class ComboListDropPopup extends BaseComboDropPopup {
    virtualizingListView: VirtualizingListView;
    dataSource: Controls.BaseDataSource;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    /**
     * @param page
     * @return
     */
    selectPrev(page?: boolean): boolean;
    /**
     * @param page
     * @return
     */
    selectNext(page?: boolean): boolean;
    /**
     * @return
     */
    getSelectedIndex(): number;
    getSelectedValue(): string;
    setSelectedValue(value: any): void;
}
export class ComboListBehavior extends BaseComboBehavior {
    private _enableAutoFill;
    private _maxItemLength;
    constructor(combo: any, options?: any);
    initialize(): void;
    setSource(source: any): void;
    /**
     * @return
     */
    getDropOptions(): any;
    /**
     * Finds the max item length inside the data source
     */
    getMaxItemLength(): any;
    /**
     * Gets the drop width of this behavior
     */
    getDropWidth(): number;
    /**
     * @param value
     * @return
     */
    getSelectedIndex(value?: string, all?: any): number;
    setSelectedIndex(selectedIndex: any, fireEvent: any): void;
    /**
     * @param value
     * @param fireEvent
     */
    setText(value: string, fireEvent?: boolean): void;
    /**
     * @param e
     * @return
     */
    upKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    downKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    pageUpKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    pageDownKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    keyDown(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    keyPress(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    keyUp(e?: JQueryEventObject): any;
    /**
     * @param page
     * @return
     */
    selectPrev(page?: boolean): boolean;
    /**
     * @param page
     * @return
     */
    selectNext(page?: boolean): any;
    _createDataSource(): Controls.BaseDataSource;
    _dropSelectionChanged(selectedIndex: any, accept: any): void;
    /**
     * Set selected index
     *
     * @param selectedIndex new selected index
     * @param fireEvent flag to whether to fire index changed
     */
    private _setSelectedIndex(selectedIndex, fireEvent);
    private _tryAutoFill();
}
export class ComboControlValidatior extends Validation.BaseValidator<Validation.BaseValidatorOptions> {
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    /**
     * @return
     */
    isValid(): boolean;
}
export class DatePanel extends Controls.BaseControl {
    private _date;
    private _selectedDate;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    prevMonth(): void;
    nextMonth(): void;
    prevYear(): void;
    nextYear(): void;
    selectDate(date: any): void;
    setSelectedDate(date: any): void;
    getSelectedDate(): any;
    private _draw(calendarDate, focusElementClass?);
    private _drawCalendarTable(date);
    /**
     * @param e
     * @return
     */
    private _onKeyDown(e?);
    /**
     * @param e
     * @return
     */
    private _onClick(e?);
}
export class ComboDateDropPopup extends BaseComboDropPopup {
    private _datePanel;
    private _selectedDate;
    constructor(options?: any);
    initialize(): void;
    getSelectedDate(): any;
    setSelectedDate(date: any): void;
    /**
     * @param e
     * @return
     */
    private _onChange(e?);
}
export class ComboDateBehavior extends BaseComboBehavior {
    private _timeValue;
    constructor(combo: any, options?: any);
    initialize(): void;
    canType(): boolean;
    /**
     * @return
     */
    getDropOptions(): any;
    getDropWidth(): any;
    /**
     * Get's the current value as a date or null if there is no (valid) date.
     *
     * @return
     */
    getSelectedDate(): Date;
    /**
     * Sets a date value on the combo using the behavior's dateTime format
     *
     * @param selectedDate The date value to set
     */
    setSelectedDate(selectedDate: Date, fireChange?: boolean): void;
    /**
     * @param e
     * @return
     */
    upKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    downKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    pageUpKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    pageDownKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    leftKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    rightKey(e?: JQueryEventObject): any;
    private _onChange();
    private _getSelectedDate();
    private _addDays(date, days);
    private _getMonthLength(month, year);
}
export class DatePicker extends Combo {
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
}
export class CollapsiblePanel extends Controls.BaseControl {
    static EVENT_CONTENT_EXPANDED: string;
    static EVENT_CONTENT_COLLAPSED: string;
    static enhancementTypeName: string;
    private _dynamicContents;
    private _header;
    private _content;
    private _$toggleIcon;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    _createIn(container: any): void;
    /**
     * @param element
     */
    _enhance(element: JQuery): void;
    /**
     * Appends the specified plain text to the header section of the CollapsiblePanel
     *
     * @param header Content to append to the header section
     * @return
     */
    replaceHeaderTextIfPresent(headerText: any): JQuery;
    /**
     * Appends the specified plain text to the header section of the CollapsiblePanel
     *
     * @param headerText Content to append to the header section
     * @return
     */
    appendHeaderText(headerText: any): CollapsiblePanel;
    /**
     * Appends the specified HTML, DOM element or jQuery object to the
     * header section of the CollapsiblePanel
     *
     * @param element Content to append to the header section
     * @return
     */
    appendHeader(element: any): CollapsiblePanel;
    /**
     * Appends the specified content to the display content of the control
     *
     * @param content This might be a jQuery selector or function.
     * If a function is provided, that function will be executed whenever collapse icon is clicked.
     * The function should return a content
     * @return
     */
    appendContent(element: any): CollapsiblePanel;
    isExpanded(): boolean;
    expand(): void;
    collapse(): void;
    toggleExpandedState(): boolean;
    private _createControl();
}
export class AjaxPanel extends Controls.BaseControl {
    static enhancementTypeName: string;
    private _cancelable;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    _dispose(): void;
    beginLoad(url: any, params?: any, callback?: any, errorcallback?: any): void;
    onLoadCompleted(content: any): void;
    onLoadError(error: any, handled: any): void;
    showError(error: any): void;
    private _cancelPendingLoad();
}
export class Dialog extends AjaxPanel {
    static enhancementTypeName: string;
    static _dialogActionInProgress: boolean;
    /**
     *     This should be used in cases where you don't want the user to execute more than 1 particular action involving a Dialog
     *     in parallel. For example, clicking a link that does some server processing before opening a dialog. On slow connections
     *     the user may be able to click the link several times before the first dialog ever opens.
     *
     * @param actionDelegate
     *     The function to execute which will involve initializing a Dialog. It takes a single optional
     *     paramater which is a cancellation routine. Call this when you encounter a situation (such as an error)
     *     where you wish to cancel the operation and have subsequent dialog actions execute without being blocked.
     *
     */
    static beginExecuteDialogAction(actionDelegate: Function): void;
    static create(dialogType: any, options?: any): Controls.Enhancement<any>;
    private static _getNextDialogZIndex();
    static show(dialogType: any, options?: any): Controls.Enhancement<any>;
    private _title;
    private _dialogResult;
    private _resizeDelegate;
    private _progressElement;
    /**
     * Creates a new dialog with the provided options
     */
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    onLoadCompleted(content: any): void;
    /**
     * Tries to set the focus using the specified or default selector
     */
    setInitialFocus(): void;
    /**
     * Sets focus on the first enabled input element in the dialog.
     *
     * @param field The field to set focus.
     */
    setFormFocusDelayed($field: any): void;
    setTitle(title: any): void;
    /**
     * @return
     */
    getTitle(): string;
    getDialogResult(): any;
    setDialogResult(dialogResult: any): void;
    show(): void;
    /**
     * @param e
     * @return
     */
    onOpen(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    onClose(e?: JQueryEventObject): any;
    close(): void;
    /**
     * @param e
     * @return
     */
    onDialogResize(e?: JQueryEventObject): any;
    private _updateTitle();
    /**
     * @param e
     * @return
     */
    private _onWindowResize(e?);
    /**
     * @param e
     * @return
     */
    private _onDialogResizing(e?, ui?);
}
export class ModalDialog extends Dialog {
    static enhancementTypeName: string;
    static EVENT_BUTTON_STATUS_CHANGE: string;
    /**
     * Creates a new modal dialog with specified options.By default, it has ok and cancel buttons
     */
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    updateOkButton(enabled: any): void;
    processResult(result: any): void;
    /**
     * @param e
     * @return
     */
    onOkClick(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    onResultReady(e?: JQueryEventObject, args?: any): any;
    /**
     * @param e
     * @return
     */
    onCancelClick(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    onButtonStatusChange(e?: JQueryEventObject, args?: any): any;
}
export class ConfirmationDialog extends ModalDialog {
    $errorContainer: any;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    _onSuccess(data: any): void;
    _onError(error: any): void;
    /**
     * @param e
     * @return
     */
    onOkClick(e?: JQueryEventObject): any;
}
export interface RichEditorAttachmentRequestData {
    fileName: string;
    binaryData: any;
}
export interface RichEditorAttachmentOperationResult {
    attachments: RichEditorAttachmentResult[];
}
export interface RichEditorAttachmentResult {
    Url: string;
}
export interface RichEditorAttachmentHandler {
    (attachment: RichEditorAttachmentRequestData): JQueryPromise<RichEditorAttachmentOperationResult>;
}
export class RichEditor extends Controls.BaseControl {
    static enhancementTypeName: string;
    static INSERT_IMAGE_COMMAND: string;
    static RESTORE_COMMAND: string;
    static MAXIMIZE_COMMAND: string;
    static IMAGE_AUTOFIT_SCALE_FACTOR: number;
    private _iframe;
    private _window;
    private _textArea;
    private _isReady;
    private _readyList;
    private _editable;
    private _toolbar;
    private _urlToolTip;
    private _editor;
    private _hasFocus;
    private _explicitFocus;
    private _keyDownInDocument;
    private _customCommandHandlersMap;
    private _originalValue;
    private _currentValue;
    private _textAreaId;
    private _hasWaterMark;
    private _fieldRequired;
    private _uploadAttachmentHandler;
    /**
     * Creates a new rich editor with the provided options
     */
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    _createIn(container: any): void;
    /**
     * @param element
     */
    _enhance(element: JQuery): void;
    ready(fn: any): void;
    setEnabled(value: any): void;
    getValue(): string;
    isEmpty(value: any): boolean;
    setValue(value: any): void;
    /**
     * Inserts an image tag pointing to the specified url at the current caret position if possible.
     * If the current caret position cannot be determined, the image tag is inserted at the editor root node.
     *
     * @param url The url containing an image in which to link to the document.
     */
    insertImage(url: string): void;
    focus(): void;
    selectText(collapseToEnd?: boolean): void;
    bindOnCopy(handler: any): void;
    private _resizeImageOnLoadComplete(url, loadCompleteCallback?);
    setFieldRequired(value: any): void;
    setUploadAttachmentHandler(handler: RichEditorAttachmentHandler): void;
    getTextAreaId(): any;
    private _pasteImage(url);
    private _getToolbar();
    private _createToolbar();
    /**
     * Creates a toolbar button group.
     *
     * @param customGroup An object representing a toolbar button group.
     */
    private _createToolbarButtonGroup(customGroup);
    /**
     * @param opacity
     */
    private _showPanel(panel, opacity?);
    /**
     * @param opacity
     */
    private _showToolbar(opacity?);
    private _getUrlToolTip();
    private _createUrlToolTip();
    private _showUrlToolTip(e?, doShow?);
    private _decorate();
    private _initialize();
    private _cleanUp();
    /**
     * Attaches necessary events to catch the changes if the control is enabled
     */
    private _attachEvents();
    private _detachEvents();
    /**
     * @param e
     * @return
     */
    private _onDblClick(e?);
    private _onDocumentReady();
    private _trySettingWaterMark(val);
    private _clearWaterMark();
    private _textAreaFocus();
    /**
     * @param e
     * @return
     */
    private _onFocusIn(e?);
    /**
     * @param e
     * @return
     */
    private _onFocusOut(e?);
    private _onPaste(e?);
    private _getImageItem(items);
    private _getRandomFileName(fileType?);
    private _onFileReadComplete(e, fileType?);
    private _uploadAttachment(attachment);
    private _onUploadComplete(result);
    private _onUploadError(error);
    /**
     * @param e
     * @return
     */
    private _onClick(e?);
    /**
     * @param e
     * @return
     */
    private _onMouseUp(e?);
    /**
     * @param e
     * @return
     */
    private _onMouseDown(e?);
    private _reTriggerEvent(e?);
    /**
     * @param e
     * @return
     */
    private _onKeyDown(e?);
    /**
     * @param e
     * @return
     */
    private _onKeyPress(e?);
    /**
     * @param e
     * @return
     */
    private _onKeyUp(e?);
    /**
     * @param e
     * @return
     */
    private _onInput(e?);
    /**
     * @param e
     * @return
     */
    private _onToolbarButtonClick(e?, args?);
    private _getNodeUnderCaret(tagName);
    /**
     * Finds the node in the ancestors with the specified tag name
     */
    private _getNodeAncestor(node, tagName);
    /**
     *  Gets a W3C Range or Microsoft TextRange object depending on the running browser.
     * These object types are completely incompatible, so the caller must branch
     * on platform or simply compare for equality.
     */
    private _getTextRange();
    /**
     * Checks whether clicked element is a link and launches url
     *
     * @param e
     */
    private _checkForCtrlClick(e?);
    /**
     * launch the Url associated with a linkNode
     */
    private _processAndLaunchHref(linkNode, e?);
    /**
     * Checks whether the value of the control is changed or not
     *
     * @param e
     * @return
     */
    private _checkModified(e?);
    private _executeCommand(commandInfo);
    /**
     * Creates a hyperlink in this window and selects the new link.
     *
     * @param args The new link address.
     */
    private _createHyperlink(args);
    private _setEditable(value);
    private _processReadyList();
    private _ensureControlReadiness();
    private _normalizeValue(value);
    private _setFieldRequiredStyle();
}
export class Splitter extends Controls.BaseControl {
    static enhancementTypeName: string;
    private static _noSplitCssClass;
    static CORE_CSS_CLASS: string;
    static HORIZONTAL_CLASS: string;
    static VERTICAL_CLASS: string;
    static TOGGLE_BUTTON_LENGTH: number;
    static TOGGLE_BUTTON_MARGIN: number;
    static COLLAPSED_CLASS_NAME: string;
    static TOGGLE_BUTTON_ENABLED_CLASS_NAME: string;
    static TOGGLE_BUTTON_HOTKEY_ENABLED_CLASS_NAME: string;
    static AUTO_COLLAPSE_THRESHOLD: number;
    static DEFAULT_ANIMATION_SPEED: number;
    static HANDLE_BAR_CLONE_SIZE: number;
    private _screenXY;
    private _cssPosProp;
    private _cssSizeProp;
    private _leftFix;
    private _fixedSide;
    private _fillSide;
    private _deltaMultiplier;
    private _dragStart;
    private _fixedSidePixels;
    private _splitterOverlay;
    private _$handleBarClone;
    private _ignoreWindowResize;
    private _$toggleButton;
    private _$toggleButtonIcon;
    private _minWidth;
    private _maxWidth;
    leftPane: JQuery;
    rightPane: JQuery;
    handleBar: JQuery;
    expandState: any;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    /**
     * @param element
     */
    _enhance(element: JQuery): void;
    initialize(): void;
    /**
     * Set's the minimum midth of the splitter's fixed side.
     *
     * @param minWidth minimum number of pixels the fixed side will fill.
     */
    setMinWidth(minWidth: number): void;
    /**
     * Set's the maximum midth of the splitter's fixed side.
     *
     * @param maxWidth maximum number of pixels the fixed side will fill.
     */
    setMaxWidth(maxWidth: number): void;
    /**
     * @param suppressFireResize
     * @param useAnimation
     */
    resize(newSize: any, suppressFireResize?: boolean, useAnimation?: boolean): void;
    /**
     * Expand or collapse the splitter.
     *
     * @param expanded [OPTIONAL]true to expand the splitter; false to collpase it.
     * If not provided, the expansion state toggles.
     */
    toggleExpanded(expanded?: boolean): void;
    isExpanded(): boolean;
    /**
     * @param suppressResize
     */
    removeExpand(suppressResize?: boolean): void;
    /**
     * @param side
     */
    expand(side?: string): void;
    /**
     * Gets the fixed-side pixels.
     *
     * @return
     */
    getFixedSidePixels(): number;
    /**
     * @param visible
     */
    toggleSplit(visible?: boolean, animate?: boolean, defaultExpandToPixels?: number): void;
    noSplit(): void;
    split(animate?: boolean, defaultExpandToPixels?: number): void;
    /**
     * @param newSize
     */
    toggleOrientation(vertical: any, newSize?: number): void;
    vertical(): void;
    horizontal(): void;
    /**
     * Sets the label that is shown when the splitter is collapsed
     *
     * @param labelText Text displayed when the splitter is collapsed (null/empty for none)
     */
    setCollapsedLabel(labelText: string): void;
    _createElement(): void;
    private _configureCssProps();
    private _attachEvents();
    /**
     * Gets the collapse/expand toggle button of this splitter control.
     */
    private _ensureToggleButton();
    /**
     * Re-position the toggle button.
     *
     * @param useAnimation true if the layout change is animated; false, otherwise.
     */
    private _layoutToggleButton(useAnimation?);
    /**
     * Set toggle button icon class for rendering
     *
     * @param isExpanded true if to show expanded icon; false, otherwise.
     */
    private _setToggleButtonIconClass(isExpanded);
    /**
     * Sets the tooltip for the toggle button.
     */
    private _setToggleButtonTooltip();
    /**
     * Measures the full size of the fixed side pane.
     */
    private _measureFixedSide();
    private _handleBarMouseDown(e?);
    /**
     * Checks if the toggle button is enabled.
     */
    private _isToggleButtonEnabled();
    /**
     * Checks if the toggle button hotkey is enabled.
     */
    private _isToggleButtonHotkeyEnabled();
    /**
     * Checks if the splitter is marked as collapsed.
     */
    private _isCollapsed();
    /**
     * Handles the keyup event for the toggle button.
     *
     * @param e
     * @return
     */
    private _onToggleButtonKeyup(e?);
    /**
     * Handles the keyup event for the document.
     *
     * @param e
     * @return
     */
    private _onDocumentKeyup(e?);
    /**
     * Handles the click event for the toggle button.
     *
     * @param e
     * @return
     */
    private _onToggleButtonClick(e?);
    /**
     * Ensures that a clone of the handlebar is available.
     */
    private _ensureHandleBarClone();
    /**
     * Removes the handlebar clone.
     */
    private _removeHandleBarClone();
    private _setupDragEvents();
    private _ensureOverlay();
    private _removeOverlay();
    private _clearDragEvents();
    /**
     * @param e
     * @return
     */
    private _documentMouseMove(e?);
    /**
     * @param e
     * @return
     */
    private _documentMouseUp(e?);
    private _onWindowResize();
    private _fireWindowResize();
    /**
     * Attaches the splitter to the window resize event, performing a resize immediately if specified
     * by the input parameter. This is primarily useful for attaching to the resize event after the
     * splitter has just been re-attached to the DOM and needs to see if the viewwport size has changed.
     *
     * @param resizeNow Whether or not the splitter should perform resize now.
     */
    attachResize(resizeNow?: boolean): void;
    /**
     * Detaches the splitter from the window resize event (tells it to ignore the event).
     */
    detachResize(): void;
    /**
     * Creates an option object to be used with $.animate().
     *
     * @param cssPropertyName The CSS property for the animation.
     * @param cssPropertyValue The target CSS property value for the animation.
     */
    private _createAnimationOption(cssPropertyName, cssPropertyValue);
    /**
     * @param e
     * @return
     */
    private _handleBarDoubleClick(e?);
    _dispose(): void;
}
/**
 * Recommended structure for an item in a CheckboxList control.
 * Not enforced - you may supply raw string items if preferred.
 */
export interface ICheckboxListItem {
    /**
     * The item's identifier or representative value.
     */
    value: any;
    /**
     * The item's display text. Ignored if 'content' is supplied.
     */
    text?: string;
    /**
     * Custom display element to render instead of 'text'.
     */
    content?: JQuery;
    /**
     * The item's tooltip.
     */
    title?: string;
    /**
     * Whether the item is checked.
     */
    checked: boolean;
}
/**
 * Presents a list view of items, with checkboxes for each item.
 */
export class CheckboxList extends Controls.BaseControl {
    static enhancementTypeName: string;
    private _items;
    private _checkedItems;
    private _idMap;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    enableElement(enabled: boolean): void;
    setItems(items: any[]): void;
    getCheckedValues(): any[];
    getCheckedItems(): any[];
    getUncheckedValues(): any[];
    getUncheckedItems(): any[];
    setCheckedValues(values: any[]): void;
    _initializeElement(): void;
    private _checkItemState(item, state);
    private _draw();
    /**
     * @param e
     * @return
     */
    private _onCheckClick(e?);
}
export class FilterControl extends Controls.BaseControl {
    static enhancementTypeName: string;
    private _clauseTable;
    private _groupHeaderCell;
    private _filter;
    constructor(options?: any);
    /**
     * Get the default clause for this filter.
     */
    _getDefaultClause(): void;
    /**
     * Update the and/or dropdown based on the given clause
     *
     * @param andOrControl The control to be updated.
     * @param clause The clause associated with the control.
     */
    _updateAndOrControl(andOrControl: any, clause: any): void;
    /**
     * Update the field dropdown based on the given clause
     *
     * @param fieldControl The control to be updated.
     * @param clause The clause associated with the control.
     */
    _updateFieldControl(fieldControl: any, clause: any): void;
    /**
     * Update the operator dropdown based on the given clause
     *
     * @param operatorControl The control to be updated.
     * @param clause The clause associated with the control.
     * @param updateClause True to update the clause with the new operator/value.
     */
    _updateOperatorControl(operatorControl: any, clause: any, updateClause?: boolean): void;
    /**
     * Update the value dropdown based on the given clause
     *
     * @param valueControl The control to be updated.
     * @param clause The clause associated with the control.
     */
    _updateValueControl(valueControl: any, clause: any): void;
    /**
     * Validate the given clause.
     *
     * @param clauseInfo The clause info.
     */
    _validateClause(clauseInfo: any): void;
    /**
     * Handler called when the field name control's value is changed.
     *
     * @param clauseInfo The clause info.
     * @param oldValue The old field name.
     */
    _handleFieldNameChanged(clauseInfo: any, oldValue: string): void;
    /**
     * Handler called when the operator control's value is changed.
     *
     * @param clauseInfo The clause info.
     * @param oldValue The old operator value.
     */
    _handleOperatorChanged(clauseInfo: any, oldValue: string): void;
    /**
     * Mark this filter as dirty.
     */
    _setDirty(): void;
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    setFilter(filter: any): void;
    private _createClauseTable();
    private _createHeaderRow();
    _getInsertClauseTooltipText(): string;
    _getRemoveClauseTooltipText(): string;
    private _createClauseRow(clause);
    createClauseValueControl(container: JQuery, options?: any): any;
    /**
     * Gets the string to be displayed in place of "add new clause" hyperlink.
     */
    _getAddNewClauseText(): string;
    private _createAddClauseRow();
    private _onClauseChange(change, clauseInfo);
    getClauseValue(valueControl: any, clause: any): string;
    /**
     * @param e
     * @return
     */
    private _addClauseClick(e?, clauseInfo?);
    /**
     * @param e
     * @return
     */
    private _removeClauseClick(e?, clauseInfo?);
    private _updateGroupLink();
    private _groupSelectedClauses();
    /**
     * @param e
     * @return
     */
    private _ungroupClick(e?, clauseInfo?);
    private _handleFilterModified();
}
export class StatusIndicator extends Controls.BaseControl {
    static enhancementTypeName: string;
    private _lastError;
    private _statusDiv;
    private _image;
    private _throttleMinTime;
    private _delayStart;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    _dispose(): void;
    /**
     * @param event
     */
    start(event?: any, options?: any): void;
    /**
     * @param delay
     */
    delayStart(delay: number): void;
    private _start();
    complete(): void;
    error(exception: any): void;
    setMessage(message: string): void;
    private _draw();
    private _onClick();
    private _setImageClass();
    private _bindEvents();
    private _show();
    private _hide();
    private _error(e?, xhr?, settings?, exception?);
    private _startHandler(event, options?);
    private _clearTimeout();
}
export class Histogram extends Controls.BaseControl {
    constructor(options?: any);
    _getBarCount(): any;
    initialize(): void;
    refresh(items: any): void;
    _clearBars(): void;
    private _getBarWidth();
    private _getBarSpacing();
    private _getBarMaxHeight();
    private _load(items);
    private _decorate();
    private _renderDefaultBars();
    private _renderBars(items);
    /**
     * @param index
     * @param item
     * @return
     */
    private _createBar(index, item?);
}
export class CommonMenuItems {
    static ADD_TO_MY_FAVORITES_ACTION: string;
    static ADD_TO_TEAM_FAVORITES_ACTION: string;
    static REMOVE_FROM_MY_FAVORITES_ACTION: string;
    static REMOVE_FROM_TEAM_FAVORITES_ACTION: string;
    static PIN_TO_HOMEPAGE_ACTION: string;
    static UNPIN_FROM_HOMEPAGE_ACTION: string;
    static ITEM_SECURITY_ACTION: string;
    static addToMyFavs(): {
        id: string;
        text: string;
        title: string;
        icon: string;
        groupName: string;
    };
    static addToTeamFavs(disabled?: boolean): {
        id: string;
        text: string;
        title: string;
        disabled: boolean;
        groupName: string;
    };
    static removeFromMyFavs(): {
        id: string;
        text: string;
        title: string;
        icon: string;
        groupName: string;
    };
    static removeFromTeamFavs(disabled?: boolean): {
        id: string;
        text: string;
        title: string;
        disabled: boolean;
        groupName: string;
    };
    static security(): {
        id: string;
        text: string;
        title: string;
        icon: string;
        groupName: string;
    };
    static pinToHomePage(disabled?: boolean): {
        id: string;
        text: string;
        title: string;
        icon: string;
        disabled: boolean;
        groupName: string;
    };
    static unpinFromHomePage(disabled?: boolean): {
        id: string;
        text: string;
        title: string;
        icon: string;
        disabled: boolean;
        groupName: string;
    };
    constructor();
}
export class LongRunningOperation {
    private _cancelable;
    private _options;
    private _$rootElement;
    private _waitControl;
    private _state;
    private _cancelled;
    /**
     * Creates a new long running operation, showing a blocking indicator in a cancellable means overtop the specified container until the operation has completed.
     *
     * @param container A DOM object that contains the control on the page in which to overlay the progress indicator.
     * @param options A collection of configuration name/value pairs.  The following are supported:
     *     Name                  Type        Value
     *     cancellable           boolean     Boolean value indicating whether the operation may be cancelled while it is running.
     *
     */
    constructor(container: any, options?: any);
    /**
     * Begins the long running operation, invoking the specified operationCallback when necessary.
     *
     * @param operationCallback An operation that may take a long time to complete.
     */
    beginOperation(operationCallback: IResultCallback): void;
    getCancellableOperation(): Utils_Core.Cancelable;
    getWaitControl(): WaitControl;
    /**
     * Signals the completion of a long running operation.
     */
    endOperation(): void;
    /**
     * Gets a boolean value indicating whether the current operation has a pending cancel request.
     */
    isCancelled(): boolean;
    /**
     * Cancels the current operation.
     */
    cancelOperation(): void;
    /**
     * Initializes the long running operation.
     */
    private _initialize();
    createWaitControl(state: any): WaitControl;
}
export class Clipboard {
    /**
     * Copies the specified data in the specified format to the clipboard using native clipboard support based on the W3C HTML5 clipboard interaction specification (http://www.w3.org/TR/clipboard-apis).
     *
     * @param data The data to copy.
     */
    private static _nativeCopy(data, options?);
    /**
     * Copies the specified data in HTML format using the old execCommand("copy") API
     *
     * @param data The HTML string to copy.
     */
    private static _nativeHtmlCopy(data);
    /**
     * To support non-IE browser copy, opens a new popup window and writes the table to the window allowing the user to copy manually.
     *
     * @param data The data to place on the clipboard (via a popup window).
     */
    private static _copyUsingNewWindow(data, options?);
    static FORMAT_TEXT: string;
    /**
     * Copies the specified data to the clipboard in the TEXT format using a progressively degrading experience.
     *
     * @param data The data to copy.
     */
    static copyToClipboard(data: string, options?: any): void;
    /**
     * Gets a boolean value indicating whether the current browser supports native clipboard access.
     */
    static supportsNativeCopy(): boolean;
    /**
     * Gets a boolean value indicating whether the current browser supports native clipboard access for HTML content.
     */
    static supportsNativeHtmlCopy(): boolean;
    constructor();
}
export class CopyContentDialog extends ModalDialog {
    static enhancementTypeName: string;
    private _$textArea;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    /**
     * Initializes the dialog.
     */
    initialize(): void;
    /**
     * Initializes the dialog UI.
     */
    private _decorate();
    private _initializeRichEditor($container);
    /**
     * Initializes the text area panel
     *
     * @param $container The text area panel container.
     */
    private _initializeTextPanel($container);
}
export class WaitControl {
    private static _instanceIdSeed;
    static DefaultShowDelay: number;
    static MinLifeTime: number;
    static WaitingState: any;
    private _options;
    private _waitContext;
    private _waitingState;
    private _keyDownEventHandler;
    /**
     * Constructs a WaitControl object.
     *
     * @param options The options to initialize the control. It has the following properties:
     *   {
     *       image: hostConfig.getResourcesFile('big-progress.gif'),   // optional
     *       message: "Please wait...",                                // optional
     *       target: $('.feedbackrequest-form-container')              // optional
     *       cancellable: true                                         // optional
     *       cancelCallback: function() { // do something }            // optional and only effective when cancellable is true
     *   }
     *
     * @return A WaitControl object.
     */
    constructor(options?: any);
    /**
     * Starts waiting.
     *
     * @param cancelable [optional] A VSS.Core.Cancelable object for additional cancel state signaling.
     */
    startWait(cancelable?: any): void;
    /**
     * Ends waiting.
     */
    endWait(): void;
    /**
     * Cancels waiting.
     */
    cancelWait(): void;
    /**
     * Determines if the current waiting session can be started.
     */
    private _canStartWait();
    /**
     * Determines if the current waiting session can be ended.
     */
    private _canEndWait();
    /**
     * Determines if the current waiting session can be cancelled.
     */
    private _canCancelWait();
    /**
     * Starts the waiting.
     */
    private _startWait();
    /**
     * Ends the waiting.
     */
    private _tryEndWait();
    /**
     * Cancels the waiting.
     */
    private _tryCancelWait();
    /**
     * Sets this wait control.
     */
    private _reset();
    updateWaitElements(wait: any): void;
    /**
     * Shows the wait control.
     */
    private _showWait();
    getWaitingState(): any;
    getWaitingContext(): any;
    /**
     * Resizes the waiting control.
     */
    private _resizeWait();
    /**
     * Handles the keydown event.
     *
     * @param e
     * @return
     */
    private _onKeyDown(e?);
    /**
     * Handles the events to cancel wait.
     *
     * @param e
     * @return
     */
    private _handleCancelEvent(e?);
    /**
     * Binds the keydown event
     *
     * @param cancelLinkId The id of the cancel hyperlink.
     */
    private _bindKeydownEvent(cancelLinkId);
    /**
     * Unbinds the keydown event
     */
    private _unbindKeydownEvent();
    /**
     * Removes the wait element.
     */
    private _removeWaitElement();
    /**
     * Removes the timers used by this controls.
     */
    private _removeShowTimer();
    /**
     * Gets the unique resize event id for the wait control.
     *
     * @return The resize event id.
     */
    private _getResizeEventId(instanceId);
    /**
     * Gets the text message to show in the wait control.
     *
     * @param wait The wait options.
     */
    private _getWaitMessage(wait);
    getWaitMessageFormatString(): string;
}
export enum MessageAreaType {
    None = 0,
    Info = 1,
    Warning = 2,
    Error = 3,
}
export class MessageAreaControl extends Controls.BaseControl {
    static EVENT_DISPLAY_COMPLETE: string;
    static EVENT_DISPLAY_CLEARED: string;
    static ERROR_DETAILS_TOGGLED: string;
    private _errorHeader;
    private _errorContent;
    private _messageType;
    private _showErrorLink;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    /**
     * Set the message
     *
     * @param message Message string (plain text), jQuery (html) or
     *     message = {
     *         type: MessageAreaType,
     *         header: String for plain text or jQuery for html,
     *         content: String for plain text or jQuery for html,
     *         click: function
     *     }
     *
     * @param messageType Type of message
     */
    setMessage(message: any, messageType?: MessageAreaType): void;
    /**
     * Set the error message
     *
     * @param message Message string (plain text), jQuery (html) or
     *     message = {
     *         type: MessageAreaType,
     *         header: String for plain text or jQuery for html,
     *         content: String for plain text or jQuery for html,
     *         click: function
     *     }
     *
     * @param clickCallback Click callback function
     */
    setError(message: any, clickCallback?: Function): void;
    /**
     * Gets the current message type.
     */
    getMessageType(): MessageAreaType;
    /**
     * Clear the shown message
     */
    clear(): void;
    /**
     * Set the display message
     *
     * @param message
     *     message = {
     *         type: MessageAreaType,
     *         header: String,
     *         content: html String OR jQuery,
     *         click: function
     *     }
     *
     */
    private _setDisplayMessage(message);
    private _toggle();
    setErrorDetailsVisibility(show: any): void;
    /**
     * Clear the shown message
     *
     * @param raiseDisplayCompleteEvent Indicates if the display complete event should be raised.
     */
    private _clear(raiseDisplayCompleteEvent);
    private _raiseDisplayComplete();
}
export class UnsupportedBrowserMessageControl extends Controls.BaseControl {
    private _messageArea;
    /**
     * A message area control that displays a message to a user until they dismiss it.
     */
    constructor(options?: any);
    /**
     * Initialize the control, creating the message area and binding to the dismiss event
     */
    initialize(): void;
}
export class InformationAreaControl extends Controls.BaseControl {
    private _$collapseIndicator;
    private _$content;
    private _$caption;
    private _collapsed;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    appendDetailHeaderContent($headerContent: JQuery): void;
    appendDetailContent($detailContent: JQuery): void;
    appendCodeContent($codeContent: JQuery): void;
    appendDetailHeaderHtml(headerHtml: string): void;
    appendDetailHtml(detailHtml: string): void;
    appendCodeHtml(codeHtml: string): void;
    _updateCollapsedState(collapsed: boolean): void;
}
export class IFrameControl extends Controls.BaseControl {
    static CORE_CSS_CLASS: string;
    constructor(options?: any);
    initialize(): void;
    private _getSandboxAttributes();
}
/**
 * The responsive grid is a layout control which changes its width depending on the screen of the user.
 * The responsive grid comprises of 3 sections.
 * Section 1 is a fix sized section of width 640px.
 * Section 2 is a grid of width 320px.
 * Section 3 is a grid of width 320px.
 * When the screen resolution is >= 1280 section 1, section2 and section 3 appear side by side on the same line.
 * When the screen resolution is > 960 and < 1280. Section 3 floats under section 1 or section 2 and wraps around.
 * When the screen resolution is < 960 section 2 and section 3 float under section 1.
 */
export class ResponsiveGrid {
    private _gridElement;
    private static _instance;
    private static cellSize;
    constructor();
    private _adjustGridSections();
    private _adjustGridWidth();
    private _adjustSection3Top();
    static GetInstance(): ResponsiveGrid;
    /**
     * Scans the html for grid items and adds them to the grid.
     */
    scanViewImports(): void;
    getElement(): any;
    /**
     * @param sectionNumber The section in grid.
     */
    getSection(sectionNumber: number): JQuery;
    /**
     * Adds the control in the grid.
     *
     * @param sectionNumber The section in which the control should be put.
     * @param rows The number of rows the control will use.
     * @param columns The number of columns the control will use.
     * @param adjustHeight A value indicating whether the height of the control in the grid
     * should be adjusted to fit the control.
     * @param control The control string or html element.
     * @return The container containing the control.
     */
    addControlInGrid(sectionNumber: number, rows: number, columns: number, adjustHeight: boolean, control?: any): JQuery;
    /**
     * Creates a container in the grid.
     *
     * @param sectionNumber The section in which the control should be put.
     * @param rows The number of rows the control will use.
     * @param columns The number of columns the control will use.
     */
    createContainer(sectionNumber: number, rows: number, columns: number): JQuery;
    /**
     * Creates the control in the grid.
     *
     * @param sectionNumber The section in which the control should be put.
     * @param rows The number of rows the control will use.
     * @param columns The number of columns the control will use.
     * @param type The control type.
     * @param options The options for the control.
     * @return
     */
    createInGrid(sectionNumber: number, rows: number, columns: number, type?: any, options?: any): Controls.BaseControl;
    /**
     * Expands or contracts the height of the control container inside the grid.
     *
     * @param controlElement The element containing the control.
     */
    adjustHeight(controlElement: any): void;
    removeContainer(controlElement: any): void;
    getContainer(controlElement: any): JQuery;
    private _getAdjustedContainerHeight(container);
}
export class VirtualizingListView extends Controls.BaseControl {
    static enhancementTypeName: string;
    private _itemsContainer;
    private _scrollContainer;
    private _scrollSpacer;
    private _dataSource;
    private _firstVisible;
    private _selectedIndex;
    private _ignoreScrollEvent;
    private _rowHeight;
    private _enableMouseOver;
    private _prevMousePos;
    visibleRowCount: number;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    update(): void;
    scrollItemIntoView(index: any): void;
    /**
     * @param page
     * @return
     */
    selectNext(page?: boolean): boolean;
    /**
     * @param page
     * @return
     */
    selectPrev(page?: boolean): boolean;
    getSelectedIndex(): number;
    /**
     * @param noScrollIntoView
     */
    setSelectedIndex(selectedIndex: any, noScrollIntoView?: any): void;
    private _setVisibleBounds(visibleItemIndex);
    private _createItem(index);
    private _drawItems();
    private _updateItemStyles();
    private _setupScrollbar(height);
    private _updateScrollbar();
    private _onScroll(e?);
    private _onMouseMove(e?);
    private _onMouseOver(e?);
    private _onMouseWheel(e?);
    private _onClick(e?);
    /**
     * @param accept
     */
    private _fireSelectionChanged(accept?);
}
}
declare module "VSS/Controls/Data" {
import Grids = require("VSS/Controls/Grids");
export class FieldDataProvider {
    static TREE_PATH_SEPERATER_CHAR: string;
    static EVENT_NEW_ITEM: string;
    static EVENT_REMOVED_ITEM: string;
    static EVENT_UPDATE_ITEM: string;
    private _events;
    private _nodes;
    private _idToNodeMap;
    private _pathToNodeMap;
    private _isTree;
    private _options;
    /**
     * Populates the provider with the given items (nodes).
     *
     * @param nodes A collection of nodes in the following format:
     *
     *    Every node of the tree has the following format:
     *    {
     *         id:       unique id, string, required
     *         parentId: parent id, string, required (may be null)
     *         text:     text for the node
     *         values:   node values, array, required
     *         children: array of nodes, node, optional
     *    }
     *
     *    Here is a sample declaration of grid items:
     *
     *    gridItems: [{
     *        id: 0,
     *        values: ["Root 1", "red", 100],
     *        children: [{
     *            id: 1,
     *            values: ["Node 1-2", "green", 10],
     *            children: [{
     *                id: 2,
     *                values: ["Leaf 1-2-1", "yellow", 70]
     *            },
     *            {
     *                id: 3,
     *                values: ["Leaf 1-2-2", "blue", 30]
     *            }]
     *        },
     *        {
     *            id: 4,
     *            values: ["Root 2", "white", 50]
     *        }]
     *
     *        "checked" is an array of tree item ids that must be initially checked in the grid.
     *        If this parameter is not provided nothing is checked.
     *
     *
     * @param options
     * OPTIONAL: Object with the following structure:
     *   {
     *     allowEmpty: boolean: Indicates if empty values should be treated as valid or not.
     *     sort: comparison function for nodes if sorting is required
     *   }
     *
     */
    constructor(nodes: any, options?: any);
    /**
     * Move the node to a new parent.
     *
     * @param node Node to be re-parented.
     * @param newParent The new parent for the node.
     */
    reparentNode(node: any, newParent: any): void;
    /**
     * Return true if the value is valid
     *
     * @param value The value to check
     * @return
     */
    isValidValue(value: string): boolean;
    /**
     * return true if the data represented is tree
     *
     * @return
     */
    isTree(): boolean;
    /**
     * get Nodes to use in the combo box
     *
     * @return
     */
    getNodes(): any;
    /**
     * Get a node by its text
     *
     * @param nodeText text of the node to lookup
     * @return
     */
    getNode(nodeText: string): any;
    /**
     * Get the node associated with the id provided.
     *
     * @param nodeId id of the node
     * @return
     */
    getNodeFromId(nodeId: string): any;
    /**
     * Update node in the tree.
     *
     * @param node Node to update.
     * @return The updated node data
     */
    updateNode(node: any): any;
    /**
     * Gets the first root node of the payload.
     */
    getRootNode(): any;
    /**
     * Get the previous sibling node of the node identified by "id"
     *
     * @param id The id (Guid string) for the node
     */
    getPreviousSiblingNode(id: string): any;
    /**
     * Deletes the specified node from the source list and all cached indexes.
     * Returns the removed node
     *
     * @param id The ID of the node in which to remove.
     * @return
     */
    removeNode(id: any): any;
    /**
     * Add the provided node to the tree.
     *
     * @param node New node to add.
     * @param parent The node to parent under
     */
    addNode(node: any, parent: any): any;
    /**
     * Returns a clone, or deep-copy, of the source collection.
     */
    cloneSource(): any[];
    /**
     *  Attach a handler for the EVENT_NEW_ITEM event.
     *
     * @param handler The handler to attach
     */
    attachNewItem(handler: IEventHandler): void;
    /**
     * Remove a handler for the EVENT_NEW_ITEM event
     *
     * @param handler The handler to remove
     */
    detachNewItem(handler: IEventHandler): void;
    /**
     * Attach a handler for the removed item event.
     *
     * @param handler
     * The handler to attach.  This will be invoked with an argument in the following format:
     *   {
     *     workItemIndex: index,
     *     treeSize: treeSize
     *   }
     *
     */
    attachRemovedItem(handler: IEventHandler): void;
    /**
     * Remove a handler for the removed item event.
     *
     * @param handler The handler to remove
     */
    detachRemovedItem(handler: IEventHandler): void;
    /**
     *  Attach a handler for the EVENT_UPDATE_ITEM event.
     *
     * @param handler The handler to attach
     */
    attachUpdateItem(handler: IEventHandler): void;
    /**
     * Remove a handler for the EVENT_UPDATE_ITEM event
     *
     * @param handler The handler to remove
     */
    detachUpdateItem(handler: IEventHandler): void;
    /**
     * Populate the mapping of path to associated node and id to node.
     */
    private _populateNodeMappings();
    /**
     * Sort the children of a node (possibly recursively)
     *
     * @param node The node whose children will be sorted
     * @param recursive (optional)If true, then the sort will proceed recursively through descendents
     * @param sort (optional) Comparison function for sorting the nodes.
     *     If not supplied, the sort function from the options will be used.
     */
    private _sortChildren(node, recursive?, sort?);
    /**
     * Adds the specified node to all cached indexes.
     *
     * @param node The node in which to add.
     * @param parent The parent of the node in which to add.
     */
    private _addNode(parent, node);
    private _clearCache(node);
    /**
     * Cleans up the path removing any trailing \'s
     *
     * @param path Path to be cleaned up.
     */
    private _cleanupPath(path);
    /**
     * Gets a count of all the specified nodes' children, recursively.
     *
     * @param node The node whose children to count.
     */
    private _getChildrenCount(node);
    /**
     * Notifies listeners of NewItem
     *
     * @param args args
     */
    private _raiseNewItem(args?);
    /**
     * Notifies listeners of that a work item was removed.
     *
     * @param args args
     */
    private _raiseRemovedItem(args?);
    /**
     * Notifies listeners of updateItem
     *
     * @param args args
     */
    private _raiseUpdateItem(args?);
}
export class HierarchicalGridDataAdapter {
    static _ITEM_ID_DATA_SOURCE_INDEX: number;
    /**
     * Binds a field data provider to a grid control.
     */
    static bindAdapter(adapterType: any, fieldDataProvider: any, grid: any, options?: any): any;
    /**
     * Clones the specified node and all its children, returning the cloned node.
     *
     * @param node The node to clone.
     */
    static cloneNode(node: any): any;
    private _options;
    private _expandStatesManager;
    _flattenedItems: any;
    _grid: Grids.Grid;
    _expandStates: any[];
    dataProvider: any;
    fieldDataHelper: any;
    /**
     * Creates an adapter to provide data from a field data provider to a grid control.
     *
     * @param fieldDataProvider The field data provider that represents a tree graph of data.
     * @param grid The grid control in which to bind to the data provider.
     * @param options Options that may be used to customize the behavior of this provider.
     */
    constructor(fieldDataProvider: any, grid: any, options?: any);
    /**
     * Gets the grid that this adapter is associated with
     *
     * @return
     */
    getGrid(): Grids.Grid;
    /**
     * Refreshes the contents of the grid with the current contents of the field data provider.
     *
     * @param calculateOnly Indicates whether the refresh should update the bound grids' data
     * source and expand states or should just rebuild all internal indexes.  When true, this function will
     * only rebuild the internal indexes and caches without updating the bound grid.  This is sometimes useful when
     * you need to recalculate indexes during a reparent but don't want to update the grid until the reparent has
     * completed.
     */
    refresh(calculateOnly?: boolean): void;
    /**
     * Gets the node associated with the data index.
     *
     * @param dataIndex Data index of the node to lookup.
     */
    getNodeForDataIndex(dataIndex: number): any;
    /**
     * Gets the parent of the node associated with the data index.
     *
     * @param dataIndex Data index of the node to lookup.
     * @return A grid row index for the parent node of the node in the specified dataIndex of the grid.
     */
    getParentNodeIndexForDataIndex(dataIndex: number): number;
    /**
     * Gets the data index for the specified node ID.
     *
     * @param node The node whose data index is to be retrieved.
     */
    getDataIndexFromNode(node: any): any;
    /**
     * Returns a clone, or deep-copy, of the source collection.
     */
    cloneSource(): any[];
    /**
     * Overridable wrapper for populateDataSource
     */
    _createDataSource(items: any, source: any, expandStates: any, level: any): void;
    /**
     * Constructs an array of values from the source row which is used
     * by the Checklist grid control to managed the items checked/unchecked.
     *
     * @param sourceRow A row from the source data set.
     */
    _constructRow(sourceRow: any): any[];
    /**
     * Creates source data for the given items.
     *
     * @param items The structure defining the tree for the grid.
     * See CheckboxSelectionGrid function for details about gridItems format.
     * @param source Array of grid rows where every row is an array of values.
     * @param expandStates Array of numbers of the same size as 'source' argument
     *     containing number of children in the tree under every row recursively.
     * @param checkedItems The table allows for fast lookup of checked item IDs.
     * @param level Current level of the tree (1 is for the roots).
     * @return Returns number of given items including their children recursively.
     */
    private _populateDataSource(items, source, expandStates, level);
    /**
     * Responds to a new item added to the data provider.
     *
     * @param node The node added to the data provider.
     * @param parent The parent the specified node was added to.
     */
    private _addNewItem(node, parent);
    /**
     * Remove a work item from the grid.
     *
     * @param node The node removed from the data provider.
     * @param parent The parent of the node removed.
     * @param treeSize The total number of children of the node removed (including the node itself).
     */
    private _removeItem(node, parent, treeSize);
    /**
     * Update a work item in the grid.
     *
     * @param node The edited node from the data provider.
     */
    private _updateItem(node);
    /**
     * Updates the expand states to account for changes in the grid data.
     *
     * @param itemIndex Index of the item to start updating at.
     * @param increment Number of items added or removed.  The expand states will be incremented by this value.
     */
    private _updateExpandStates(itemIndex, increment);
    /**
     * Moves the expand states for a node and all its children from oldNodeIndex to newNodeIndex.
     *
     * @param oldNodeIndex The source location of the node states to move.
     * @param newNodeIndex The destination location of the node states ot move.
     */
    private _moveExpandStatesForNode(oldNodeIndex, newNodeIndex);
}
export class ChecklistDataAdapter extends HierarchicalGridDataAdapter {
    static _CHECKBOX_COLUMN_INDEX: number;
    static _LABEL_COLUMN_INDEX: number;
    static _CHECK_CHANGED: string;
    static CHECK_COLUMN_NAME: string;
    private _checkedItems;
    private _itemStates;
    private _events;
    private _disabledTooltip;
    private _checkboxRangeRootId;
    private _checkboxRangeBegin;
    private _checkboxRangeEnd;
    private _allEnabled;
    private _blockedCheckIds;
    private _disableChildren;
    private _noCheckboxes;
    private _onBeforeCheckChanged;
    /**
     * Description
     *
     * @param fieldDataProvider field Data Provider
     * @param grid grid
     * @param option options that could include
     * allEnabled: if all checkboxes are enabled or disabled
     * rootNodeId: the root element to display checkboxes under
     * noColumn: whether to add the column for checkboxes to the grid
     * disabledTooltip: the tooltip text to show on disabled checkboxes
     *
     */
    constructor(fieldDataProvider: any, grid: any, options?: any);
    /**
     * Initializes the data provider and prepares it for use
     * by the checklist selection grid.
     *
     * @param checkedItemIds A collection of item IDs representing the checked
     * items.
     */
    initialize(checkedItemIds: any): void;
    /**
     * Determine if a row has a checkbox
     *
     * @param dataIndex index of the row to check
     * @return
     */
    hasCheckBox(dataIndex: number): boolean;
    /**
     * Updates the checkbox range
     *
     * @param expandStates The expand states
     */
    updateCheckboxesRange(expandStates: any[]): void;
    /**
     * Determines whether the node is a leaf node
     *
     * @param node A tree node
     * @return
     */
    isLeafNode(node: any): boolean;
    /**
     * Disables and blocks the checking operation for the provided data index
     *
     * @param id The id the row in the grid
     */
    blockCheck(id: string): void;
    /**
     * Ensures enablement of the checking operation for the provided data index
     *
     * @param id The id of the row in the grid
     */
    unblockCheck(id: string): void;
    /**
     * Sets the root of the check box range
     *
     * @param id Id of the node to be the root of check boxes
     */
    setCheckboxRangeRoot(id: string): void;
    /**
     * Gets the currently selected check boxes root id
     *
     * @return The id of the checkbox range root
     */
    getCheckboxRangeRoot(): number;
    /**
     * Attach a handler for the removed item event.
     *
     * @param handler function
     */
    attachCheckedItemsChanged(handler: IEventHandler): void;
    /**
     * Remove a handler for the removed item event.
     *
     * @param handler The handler to remove
     */
    detachCheckedItemsChanged(handler: IEventHandler): void;
    /**
     * OVERRIDE: create the datasource for the grid
     */
    _createDataSource(items: any, source: any, expandStates: any, level: any): void;
    /**
     * Sets the enabled state of the row
     *
     * @param id The item ID used to look up the item in the state cache.
     * @param enabled The new state of the row.
     */
    setItemState(id: string, enabled: boolean): void;
    /**
     * Return Whether the item at the dataIndex is checked
     *
     * @param dataIndex index of item to check if checked
     * @return
     */
    getItemChecked(dataIndex: number): boolean;
    /**
     * Set the title of the checkbox identified by a given item id
     *
     * @param id The item ID used to look up the item in the state cache.
     * @param title The title to set.
     */
    setItemTitle(id: string, title: string): void;
    /**
     * Reset the title of the checkbox identified by a given item id
     *
     * @param id The item ID used to look up the item in the state cache.
     */
    resetItemTitle(id: string): void;
    /**
     * Allows accessing the list of grid items that are currently checked.
     *
     * @return Returns array of checked item ids.
     */
    getCheckedItemIds(): any[];
    /**
     * Updates checkbox related data for grid row with the new state (without touching the actual checkbox element).
     *
     * @param dataIndex The row index.
     * @param state New state for the row's checkbox.
     */
    setCheckboxStateData(dataIndex: number, state: boolean): void;
    /**
     * Gets the checkbox state for the provided data index.
     *
     * @param dataIndex The data index to get the checkbox state for.
     * @return True when the checkbox is checked and false otherwise.
     */
    getCheckboxState(dataIndex: number): boolean;
    /**
     * Determine whether the checkbox at the specified dataIndex is enabled
     *
     * @return
     */
    getItemEnabled(dataIndex: any): boolean;
    /**
     * Gets the branch-level checked state based on the state grid items.
     *
     * @return
     */
    getBranchCheckedState(): boolean;
    /**
     * OVERRIDE: Constructs an array of values from the source row which is used
     * by the Checklist grid control to managed the items checked/unchecked.
     *
     * @param sourceRow A row from the source data set.
     */
    _constructRow(sourceRow: any): any[];
    /**
     * Gets the value used for the ID attribute of the checkbox DOM element at a given index
     *
     * @param dataIndex data index of the row
     * @return A (unique) id for the checkbox
     */
    private _getCheckboxCellId(dataIndex);
    /**
     * Attempts to find the checkbox associated with a given dataIndex
     *
     * @param dataIndex data index of the row
     * @return A jQuery object containing the checkbox for the given dataIndex (or an empty jQuery object if one doesn't exist.
     */
    private _findCheckbox(dataIndex);
    /**
     * create checkbox cell at specific row in a column
     *
     * @param dataIndex index of the row
     * @param column column object
     * @return The checkbox cell
     */
    private _createCheckboxCell(dataIndex, column);
    /**
     * The handler is invoked when a checkbox on a grid row is clicked.
     *
     * @param e jQuery event object.
     */
    private _onCheckboxClicked(e?);
    private _setCheckedState($checkbox, dataIndex, checked);
    /**
     * Notifies listeners of that a work item was removed.
     *
     * @param args args
     */
    private _raiseCheckedItemsChanged(args?);
    /**
     * Sets the title of the checkbox to the default value
     *
     * @param $checkbox The jQuery object for the checkbox
     */
    private _setCheckboxDefaultTitle($checkbox);
    /**
     * Get the id of the row at the specified dataIndex
     *
     * @return
     */
    private _getIdFromDataIndex(dataIndex);
    /**
     * Get the dataIndex of the row for the specified item id
     *
     * @param id The item ID used to look up the item in the state cache.
     * @return
     */
    private _getDataIndexFromId(id);
}
export interface ITableFormatter {
    getTableFromSelectedItems(): string;
}
export class TabDelimitedTableFormatter implements ITableFormatter {
    _options: any;
    _grid: Grids.Grid;
    constructor(grid: Grids.Grid, options?: any);
    /**
     * Iterates through the selected rows and builds a table containing the results.
     *
     * @return A tab-delimited plain-text table containing all rows and all columns in the current selection.
     */
    getTableFromSelectedItems(): string;
    getFormattedColumnValue(column: any, value: string): string;
}
export class HtmlTableFormatter implements ITableFormatter {
    private static HEADER_BACKGROUND_COLOR;
    private static HEADER_COLOR;
    private static FONT_SIZE;
    private static FONT_FAMILY;
    private static BORDER_COLLAPSE;
    private static COLUMN_BORDER;
    private static COLUMN_VERTICAL_ALIGN;
    private static COLUMN_PADDING;
    private static ROW_BACKGROUND_COLOR;
    private static ROW_ALT_BACKGROUND_COLOR;
    _options: any;
    _grid: Grids.Grid;
    constructor(grid: Grids.Grid, options?: any);
    processColumns(columns: any[]): any[];
    getTableFromSelectedItems(): string;
    getFormattedColumnValue(column: any, value: string): string;
    /**
     * Iterates through the selected rows and builds a HTML table containing the results.
     *
     * @return A HTML table containing all rows and all columns in the current selection.
     */
    _getJQTableFromSelectedItems(): JQuery;
}
}
declare module "VSS/Controls/EditableGrid" {
import CommonControls = require("VSS/Controls/Common");
import Controls = require("VSS/Controls");
import Grids = require("VSS/Controls/Grids");
export class CellEditor extends Controls.BaseControl {
    constructor(options: any);
    initialize(): void;
    getValue(): string;
    getDisplayValue(): string;
    setValue(value: string, doNotSavePrevious?: boolean): void;
    clearValue(setEmpty?: boolean): void;
    setSize($cellContext: JQuery): void;
    dispose(): void;
    setPosition(top: number, left: number): void;
    getHeight(): number;
    focus(): void;
    fireEndEdit(e?: JQueryEventObject): void;
    beginEdit(initValue: string): void;
    _attachEvents(): void;
    _detachEvents(): void;
    _fireChangedIfNeeded(): void;
    _handleKeydown(e: JQueryEventObject): boolean;
    _insertNewLineAtCursor(): void;
    _setCaretPositionToEnd($element: JQuery): void;
    _decorateElement(): void;
    _resetPosition(): void;
    valueChanged: () => void;
    endEdit: (e?: JQueryEventObject) => void;
    _prevValue: string;
    private _inEditMode;
    private _initValue;
}
export class TextCellEditor extends CellEditor {
    initialize(): void;
    setPosition(top: number, left: number): void;
    getHeight(): number;
    focus(): void;
    _attachEvents(): void;
    _detachEvents(): void;
    _handleKeydown(e: JQueryEventObject): boolean;
    _resetPosition(): void;
    _editableArea: JQuery;
}
export class RichTextCellEditor extends TextCellEditor {
    getValue(): string;
    private _getLastHtmlTag($searchElem?);
    private _hasNonbreakingSpaceAtEnd($element);
    setValue(htmlString: string, doNotSavePrevious?: boolean): void;
    clearValue(setEmpty?: boolean): void;
    setSize($cellContext: JQuery): void;
    _insertNewLineAtCursor(): void;
    _attachEvents(): void;
    _detachEvents(): void;
    _createElement(): void;
    _decorateElement(): void;
    _handleKeydown(e: JQueryEventObject): boolean;
    _setCaretPositionToEnd($element: JQuery): void;
}
export class PlainTextCellEditor extends TextCellEditor {
    constructor(options: any);
    getValue(): string;
    setValue(value: string, doNotSavePrevious?: boolean): void;
    clearValue(setEmpty?: boolean): void;
    setSize($cellContext: JQuery): void;
    _createElement(): void;
    _attachEvents(): void;
    _detachEvents(): void;
    _setCaretPositionToEnd($element: JQuery): void;
}
export class ComboCellEditor extends CellEditor {
    private _comboControl;
    initialize(): void;
    _populateUINodes(node: any, uiNode: any): any;
    _updateEditControl(values: string[], controlType: string): void;
    getComboControl(): CommonControls.Combo;
    createIn(container: any): void;
    _attachEvents(): void;
    _detachEvents(): void;
    setSize($cellContext: JQuery): void;
    setPosition(top: number, left: number): void;
    getHeight(): number;
    focus(): void;
    _resetPosition(): void;
    getValue(): string;
    setValue(value: string, doNotSavePrevious?: boolean): void;
    clearValue(setEmpty?: boolean): void;
    _createElement(): void;
}
export class CellInfo {
    constructor(rowInfo: any, dataIndex: number, columnInfo: any, columnOrder: number);
    rowInfo: any;
    columnInfo: any;
    dataIndex: number;
    columnOrder: number;
}
export class RowHeightInfo {
    constructor(height: number);
    height: number;
    isInvalid: boolean;
}
export class EditableGrid extends Grids.GridO<any> {
    static Commands: {
        CMD_APPEND: string;
        CMD_CUT: string;
        CMD_COPY: string;
        CMD_PASTE: string;
        CMD_INSERT_ROW: string;
        CMD_DELETE_ROWS: string;
        CMD_CLEAR_ROWS: string;
        CMD_INSERT_COLUMNS: string;
        CMD_DELETE_COLUMNS: string;
        CMD_RENAME_COLUMN: string;
    };
    constructor(options?: any);
    initialize(): void;
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    getPinAndFocusElementForContextMenu(eventArgs: any): {
        pinElement: JQuery;
        focusElement: JQuery;
    };
    _getClickedColumnIndex(e?: JQueryEventObject): number;
    _shouldAttachContextMenuEvents(): boolean;
    onContextMenu(eventArgs: any): any;
    /**
     * gets context menu items list
     *
     * @return new list of context menu items
     */
    _getContextMenuItems(): any;
    _updateContextMenuCommandStates(menu: any): void;
    _onContextMenuItemClick(e?: any): void;
    _onInsertRow(selectedDataIndices: number[], selectedRowIndices: number[]): void;
    _onDeleteRows(selectedDataIndices: number[], selectedRowIndices: number[]): void;
    _onClearRows(selectedDataIndices: number[], selectedRowIndices: number[]): void;
    getSelectedRowIndices(): number[];
    _drawCell(rowInfo: any, dataIndex: number, expandedState: number, level: number, column: any, indentIndex: number, columnOrder: number): any;
    onHyperLinkClick(dataIndex: number, columnIndex: string): void;
    onBeginCellEdit(dataIndex: number, columnIndex: string): void;
    onEndCellEdit(dataIndex: number, columnIndex: string, newValue: string, ignoreValueChange?: boolean): void;
    canEditCell(dataIndex: number, columnIndex: string): boolean;
    onCellChanged(dataIndex: number, columnIndex: string, newValue: string): void;
    _appendRow(): void;
    _applyColumnSizing(columnIndex: number, initialWidth?: number, finish?: boolean): void;
    _invalidateRowHeights(): void;
    ensureRowSelectionWhenLayoutComplete(command: any, indicesToSelect?: number[]): void;
    private _focusGrid();
    whenLayoutComplete(command: any, indicesToSelect?: number[]): void;
    private _setSelection(indicesToSelect);
    private _validateIndicesToSelect(indicesToSelect);
    onLayoutComplete(command: any, indicesToSelect?: number[]): void;
    _getRowHeightInfo(dataIndex: number): RowHeightInfo;
    _setRowHeight(dataIndex: number, height: number): void;
    private _setCellValue($cell, value, isRichText, title?);
    _setColumnInfo(column: any, index: number): void;
    getCellEditorForColumn(index: any): CellEditor;
    getCurrentEditRowIndex(): number;
    layout(): void;
    private _layoutInternal();
    _getSelectedCellInfo(): CellInfo;
    _onContainerMouseDown(e?: any): void;
    private _setCellEditor($currentCell, clearExisting);
    _handleEditorEndEdit(e?: JQueryEventObject, $currentCell?: JQuery): void;
    private _handleEndEdit($currentCell, ignoreValueChange?);
    private _allowCellResize($row);
    private _resizeCellsInRowToHeight($row, dataIndex);
    _onKeyDown(e?: JQueryEventObject): any;
    _createFocusElement(): JQuery;
    private _selectCellForSelectedRowIndex(delayEdit?);
    private _getCellForRow($row, columnIndex);
    _onUpKey(e?: JQueryEventObject, bounds?: any): void;
    _onDownKey(e?: JQueryEventObject, bounds?: any): void;
    _onRightKey(e?: JQueryEventObject): void;
    _onLeftKey(e?: JQueryEventObject): void;
    _selectNextOrPrevCell(next: boolean, doNotGetCellIntoView?: boolean): boolean;
    _getRowsPerPage(e?: JQueryEventObject): number;
    _onPageUpPageDownKey(e?: JQueryEventObject, bounds?: any): void;
    _onHomeKey(e?: JQueryEventObject, bounds?: any): void;
    _onEndKey(e?: JQueryEventObject, bounds?: any): void;
    _handleCellSelectionAfterViewPortUpdate(): void;
    handleHeaderSelectionAfterViewPortUpdate(): void;
    _onEnterKey(e?: JQueryEventObject, bounds?: any): any;
    _isHyperLinkCell(cellInfo: CellInfo): boolean;
    _onBackSpaceKey(e?: JQueryEventObject): void;
    _onDeleteKey(e?: JQueryEventObject): any;
    _onTabKey(e?: JQueryEventObject): void;
    cacheRows(aboveRange: any, visibleRange: any, belowRange: any): void;
    _drawRows(visibleRange: any, includeNonDirtyRows: any): void;
    setHeightForLowerContentSpacer(height: number): void;
    setHeightForUpperContentSpacer(height: number): void;
    _includeNewlyInsertedRowsInViewport(affectedIndices: number[]): void;
    _adjustContentSpacerHeightsPostDelete(): void;
    private _calculateHeightForUpperContentSpacer(firstVisibleIndex, firstVisibleIndexTop);
    private _calculateHeightForLowerContentSpacer(lastVisibleIndex, lastVisibleIndexTop, totalHeight);
    _getOuterRowHeight(index: number): number;
    _addSpacingElements(): void;
    getSelectedCellIntoView(): boolean;
    _getVisibleRowIndices(): {
        first: number;
        last: number;
    };
    _getVisibleRowIndicesAndDoCalculations(): {
        first: number;
        last: number;
    };
    _layoutContentSpacer(): void;
    _onCanvasScroll(e?: any): boolean;
    private _onScroll(e?);
    _onLastRowVisible(rowIndex: number): void;
    private _isScrolledIntoView($elem);
    _tryFinishColumnSizing(cancel: any): void;
    _onContainerResize(e?: JQueryEventObject): any;
    _selectRowAndCell($cell: JQuery, doNotGetCellIntoView?: boolean): void;
    getSelectedCell(): JQuery;
    selectSameRowNthCell(n: number, doNotGetCellIntoView?: boolean): boolean;
    _selectNextRowNthCell(n: number, doNotGetCellIntoView?: boolean): boolean;
    _selectPrevRowLastCell(doNotGetCellIntoView?: boolean): boolean;
    _selectNextRowFirstCell(doNotGetCellIntoView?: boolean): boolean;
    private _areEqual($cell1, $cell2);
    _onKeyPress(e?: JQueryEventObject): any;
    private _isChar(e?);
    _onRowDoubleClick(e?: JQueryEventObject): any;
    _cleanUpGrid(): void;
    private _deleteEditors();
    _editCell($cell: JQuery, delayEdit: boolean, clearExisting: boolean, charCode?: number): void;
    private _editCellInternal($cell, cellInfo, clearExisting, charCode?);
    _canEdit(cellInfo: CellInfo): boolean;
    _onRowMouseDown(e?: JQueryEventObject): any;
    _onRowClick(e?: JQueryEventObject): any;
    private _getRowFromCell($cell);
    private _getRowFromEvent(e?, selector?);
    private _areCellInfoEqual(cellInfo1, cellInfo2);
    onCellSelectionChanged($cell?: JQuery, delayEdit?: boolean): void;
    private _selectCell($cell, doNotBringRowToView?, doNotFireEndEdit?, doNotBringCellIntoView?, delayEdit?, preventEdit?);
    private _getCellFromEvent(e?, selector?);
    private _getCellInfoFromEvent(e?, selector?);
    _updateViewport(includeNonDirtyRows?: boolean): void;
    postUpdateViewPort(): void;
    _ensureRowDrawn(dataIndex: any): boolean;
    /**
     * @param rowIndex
     * @param force
     * @return
     */
    _getRowIntoView(rowIndex: number, force?: boolean): boolean;
    private _getRowHeightBetweenRows(startIndex, endIndex);
    private _scrollCanvasUp(startIndex, endIndex);
    private _scrollCanvasDown(startIndex, endIndex);
    updateRows(indices?: number[]): void;
    _updateRow(rowInfo: any, rowIndex: number, dataIndex: number, expandedState: any, level: number, columnsToUpdate?: {
        [id: number]: boolean;
    }, forceUpdateHeight?: boolean): void;
    _updateRowStyle(rowInfo: any): void;
    private _isCellEmpty($cell);
    private _getEmptyRowOuterHeight(dataIndex, $row);
    _updateRowAndCellHeights(dataIndex: number, $row: JQuery, forceUpdate?: boolean): void;
    _clearSelections(): void;
    _fireEndEdit(): void;
    _rowHeightsDifferencePostDelete: number;
    _emptyRowOuterHeight: number;
    _gettingRowIntoView: boolean;
    _inEditMode: boolean;
    _lastVisibleRange: any;
    private _currentCellEditor;
    private _editRowIndex;
    private _heightForUpperContentSpacer;
    private _heightForLowerContentSpacer;
    private _rowMaxHeight;
    private _$selectedCell;
    private _selectedCellInfo;
    private _columnIndexToEditorMap;
    private _columnResizeInProgress;
    private _gridRowHolder;
    private _belowContentSpacer;
    private _isLayoutInProgress;
    private _borderHeight;
    private _selectCellOnLayoutComplete;
}
}
declare module "VSS/Controls/FileInput" {
import Controls = require("VSS/Controls");
import Utils_Core = require("VSS/Utils/Core");
/**
* Options for the file input control.
*/
export interface FileInputControlOptions {
    initialFiles?: FileList;
    maximumNumberOfFiles?: number;
    maximumTotalFileSize?: number;
    maximumSingleFileSize?: number;
    detectEncoding?: boolean;
    fileNamesCaseSensitive?: boolean;
    resultContentType?: FileInputControlContentType;
    updateHandler: (updateEvent: FileInputControlUpdateEventData) => void;
}
/**
* File result from files uploaded to the FileInputControl.
*/
export interface FileInputControlResult {
    name: string;
    type: string;
    size: number;
    lastModifiedDate: Date;
    content?: string;
    encoding?: Utils_Core.FileUtils.FileEncoding;
}
export enum FileInputControlContentType {
    Base64EncodedText = 0,
    RawText = 1,
}
/**
* Event data passed to FileInputControl update events.
*/
export interface FileInputControlUpdateEventData {
    loading: boolean;
    files: FileInputControlResult[];
}
/**
* Information about a row in the file input control
*/
export interface FileInputControlRow {
    $listElement: JQuery;
    $statusElement: JQuery;
    $fileNameElement: JQuery;
    result: FileInputControlResult;
}
/**
* HTML5 based file input control which accepts one or multiple files with
* browse and drag/drop support. Reads content as a base64 encoded string.
*/
export class FileInputControl extends Controls.Control<FileInputControlOptions> {
    private _$fileInputContainer;
    private _$fileList;
    private _inputOptions;
    private _results;
    private _pendingResults;
    private _rows;
    private _$overallStatusContainer;
    private _$overallStatusText;
    private _$errorMessageContainer;
    static createControl($container: JQuery, options: FileInputControlOptions): FileInputControl;
    /**
    * Is this control supported on the current browser? Requires HTML5 FileReader support which
    * is present on all supported browsers except IE9.
    */
    static isSupported(): boolean;
    initializeOptions(options?: any): void;
    initialize(): void;
    private _triggerUpdateEvent();
    private _updateOverallStatus();
    private _getTotalFilesSize();
    private _addFiles(files);
    private _addFile(file);
    private _getFriendlySizeString(numBytes, decimalPlaces?);
    private _clearError();
    private _displayError(errorText);
    getFiles(): FileInputControlResult[];
    isLoadInProgress(): boolean;
    getRows(): FileInputControlRow[];
}
export interface FileDropTargetOptions {
    filesDroppedCallback: (fileList: FileList) => any;
    dragEnterCallback?: (e: JQueryEventObject) => boolean;
    dragLeaveCallback?: (e: JQueryEventObject) => boolean;
    dragOverCssClass?: string;
}
export class FileDropTarget extends Controls.Enhancement<FileDropTargetOptions> {
    static makeDropTarget($element: JQuery, options: FileDropTargetOptions): FileDropTarget;
    private _dropTargetOptions;
    private _dragEventDelegate;
    private _dragLeaveEventDelegate;
    private _dropEventDelegate;
    private _dragOverClassName;
    _enhance($element: JQuery): void;
    _dispose(): void;
    private _handleDragEvent(e);
    private _handleDragLeaveEvent(e);
    private _handleDropEvent(e);
}
}
declare module "VSS/Controls/Grids" {
import Controls = require("VSS/Controls");
import Data = require("VSS/Controls/Data");
import Menus = require("VSS/Controls/Menus");
import Search = require("VSS/Search");
/**
 * @publicapi
 */
export interface IGridOptions {
    /**
     * Data source of the grid. It can be array of arrays ([[], [], [], ...]),  array of objects ([{}, {}, {}, ...])
     * @defaultvalue "[]"
     */
    source?: any;
    /**
     * Specifies the expand states of each item in the source. If an item has a total of n descendants; -n makes the item collapsed, n makes the item expanded, 0 means no children and descendants.
     */
    expandStates?: number[];
    /**
     * Determines whether the header is displayed or not
     * @defaultvalue true
     */
    header?: boolean;
    /**
     * Height of the grid in px or %
     */
    height?: string;
    /**
     * Width of the grid in px or %
     */
    width?: string;
    /**
     * Determines whether multiple selection is allowed or not
     * @defaultvalue true
     */
    allowMultiSelect?: boolean;
    /**
     * Determines whether moving columns is allowed or not
     * @defaultvalue true
     */
    allowMoveColumns?: boolean;
    /**
     * Determines whether selecting text is allowed or not
     * @defaultvalue false
     */
    allowTextSelection?: boolean;
    /**
     * Determines whether the last cell should fill remaining content (if exists)
     * @defaultvalue false
     */
    lastCellFillsRemainingContent?: boolean;
    /**
     * List of columns to be displayed in the grid
     * @defaultvalue "[]"
     */
    columns?: IGridColumn[];
    /**
     * Options about the gutter. If specified false, gutter will be invisible
     * @defaultvalue false
     */
    gutter?: IGridGutterOptions;
    /**
     * Options about the context menu displayed when gutter clicked
     */
    contextMenu?: IGridContextMenu;
    /**
     * Initial sort info for the grid
     * @defaultvalue "[]"
     */
    sortOrder?: IGridSortOrder[];
    /**
     * Specifies whether grid should be sorted initially using the sortOrder option
     * @defaultvalue true
     */
    autoSort?: boolean;
    asyncInit?: boolean;
    initialSelection?: boolean;
    sharedMeasurements?: boolean;
    payloadSize?: number;
    extendViewportBy?: number;
    coreCssClass?: string;
    draggable?: any;
    droppable?: any;
    sort?: Function;
    enabledEvents?: any;
    openRowDetail?: any;
    suppressRedraw?: boolean;
    keepSelection?: boolean;
    /**
     * Type of the formatter which is used for retrieving the content from the grid
     * Used in beginTableFormat, called when triggering a copy action
     */
    formatterType?: new (grid: GridO<any>, options?: any) => Data.ITableFormatter;
}
export interface IGridContextMenu {
    /**
     * Menu items to be shown when gutter clicked. Value can be a list of menu items or a function which returns an a list of menu items
     */
    items?: any;
    /**
     * Execute action for the popup menu
     */
    executeAction?: (args: any) => any;
    contributionPoints?: any;
}
export interface IGridGutterOptions {
    /**
     * Determines whether a context menu is show in the gutter or not
     * @defaultValue false
     */
    contextMenu?: boolean;
    checkbox?: boolean;
    icon?: IGridGutterIconOptions;
}
export interface IGridGutterIconOptions {
    /**
     * String or number value to get the icon value from source item corresponding to current row
     */
    index?: any;
    /**
     * String or number value to get the icon tooltip value from source item corresponding to current row
     */
    tooltipIndex?: any;
}
export interface IGridColumn {
    /**
     * Index of the column which can be either number or string. If number specified, each item of the data source is expected to be an array. Then array[index] is displayed in the column. If string specified, each item if the data source is expected to be an object. Then object[index] is displayed in the column.
     * @defaultvalue "index in the columns array"
     */
    index?: any;
    /**
     * Name of the column used for identification purposes
     */
    name?: string;
    /**
     * Determines whether moving this column is enabled or not
     * @defaultvalue true
     */
    canSortBy?: boolean;
    /**
     * Determines whether sorting this column is enabled or not
     * @defaultvalue true
     */
    canMove?: boolean;
    /**
     * Width of the column in pixels
     * @defaultvalue 100
     */
    width?: number;
    /**
     * Css class to be added to the header cell
     */
    headerCss?: string;
    /**
     * Css class to be added to the cells under this column
     */
    rowCss?: string;
    /**
     * Display text of the column
     * @defaultvalue ""
     */
    text?: string;
    /**
     * Tooltip text of the column
     * @defaultvalue ""
     */
    tooltip?: string;
    /**
     * Specifies how ordering should be performed ("asc" or "desc")
     * @defaultvalue "asc"
     */
    order?: string;
    /**
     * Determines whether the column should be hidden or not
     * @defaultvalue false
     */
    hidden?: boolean;
    /**
     * Determines whether column moving effects this column or not
     * @defaultvalue false
     */
    fixed?: boolean;
    /**
     * If the value of cell is Date, format is used (like 'mm/dd/yyyy')
     */
    format?: string;
    hrefIndex?: number;
    indentOffset?: number;
    indent?: boolean;
    maxLength?: number;
    fieldId?: any;
    comparer?: (column: IGridColumn, order: number, rowA: any, rowB: any) => number;
    isSearchable?: boolean;
    getCellContents?: (rowInfo: any, dataIndex: number, expandedState: number, level: number, column: any, indentIndex: number, columnOrder: number) => void;
    getHeaderCellContents?: (IGridColumn) => JQuery;
    getColumnValue?: (dataIndex: number, columnIndex: number | string, columnOrder?: number) => any;
}
export interface IGridSortOrder {
    /**
     * Refers to column index
     */
    index: any;
    /**
     * Determines whether to sort ascending (default) or descending
     * @defaultvalue "asc"
     */
    order?: string;
}
export interface IGridRowInfo {
    dataIndex?: number;
    rowIndex?: number;
    row?: JQuery;
    dirty?: boolean;
    gutterRow?: any;
}
/**
 * @publicapi
 */
export class GridO<TOptions extends IGridOptions> extends Controls.Control<TOptions> {
    static enhancementTypeName: string;
    static MAX_COPY_SIZE: number;
    static PAYLOAD_SIZE: number;
    static EVENT_ROW_UPDATED: string;
    static EVENT_ROW_TOGGLED: string;
    static EVENT_SELECTED_INDEX_CHANGED: string;
    static DATA_DRAGGING_ROWINFO: string;
    static DATA_DROPPING_ROWINFO: string;
    private _selectionStart;
    private _header;
    private _gutterHeader;
    private _columnSizing;
    private _columnMoving;
    private _columnMovingElement;
    private _columnMovingPinElement;
    private _columnInsert;
    private _unitEx;
    private _sizingElement;
    private _ddRowAcceptStatus;
    private _ddRowOverStatus;
    private _ddDropStarted;
    private _activeAriaId;
    private _copyInProgress;
    private _previousCanvasHeight;
    private _previousCanvasWidth;
    /**
     *  Offset height, that shifts the row boundaries up and determines whether the pointer is over a particular row or not
     *  e.g. An offset percentage (passed in by the consumer of the grid) of 50 shifts each row boundary up half the row height for the purposes of calculating whether the mouse
     *  pointer is over the current row or not. The net effect of this is, if the pointer is in the top half of the current row/bottom half of the previous row,
     *  then the pointer is assumed to interesect with the current row.
     */
    private _rowOffsetHeight;
    private _isAboveFirstOrBelowLastRow;
    _contentSpacer: any;
    _dataSource: any[];
    _expandStates: any;
    _indentLevels: any;
    _columns: IGridColumn[];
    _sortOrder: any[];
    _visibleRange: any[];
    _count: number;
    _expandedCount: number;
    _selectedIndex: number;
    _indentIndex: number;
    _selectionCount: number;
    _selectedRows: any;
    _rowHeight: number;
    _cellOffset: number;
    _gutterWidth: number;
    _contentSize: any;
    _rows: any;
    _focus: any;
    _scroller: any;
    _canvasDroppable: any;
    _canvas: any;
    _canvasHeight: number;
    _canvasWidth: number;
    _headerCanvas: any;
    _gutter: any;
    _popupMenu: any;
    _resetScroll: boolean;
    _ignoreScroll: boolean;
    _scrollTop: number;
    _scrollLeft: number;
    _droppable: any;
    _draggable: any;
    _draggingRowInfo: any;
    _cancelable: any;
    _active: boolean;
    _cellMinWidth: number;
    private _draggableOverGrid;
    /**
     * Creates new Grid Control
     *
     * @param options The initialization options for the grid which have the following properties
     *
     *    "columns" is a required property containing the array of grid column descriptors that have the following structure:
     *    {
     *        index: The index for the
     *        text:      column header text, string, optional, default: "",
     *        width:     width in pixels of the column, number, optional, default: 100,
     *        canSortBy: true if the grid can be sorted by the column, boolean, optional, default: true
     *        canMove: true if this column can be moved (has effect only if allowMoveColumns is set to true for the grid as well), boolean, optional, default: true
     *        getCellContents: function that returns cell contents, function, optional, default: this._drawCell
     *            The function takes the same parameters as _drawCell and should return a jQuery object
     *            that represents the cell's contents. The first element will be appended to the row.
     *            If the function returns null or undefined nothing will be appended for that cell.
     *        getHeaderCellContents: function that returns column header cell contents, function, optional, default: this._drawHeaderCellValue
     *            The function takes the same parameters as _drawHeaderCellValue and should return a jQuery object
     *            that represents the cell's contents. The first element will be appended to the header cell's contents.
     *            If the function returns null or undefined nothing will be appended for that header cell.
     *        getColumnValue: function that returns the value for a cell contents, function, optional, default: this.getColumnValue;
     *            The return value of the function will be converted to a string an added as the cell contents.
     *    }
     *    "enabledEvents" is an optional property containing an object with properties for each of the enabled events.
     *    {
     *        GridO.EVENT_ROW_UPDATED: true
     *    }
     */
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    /**
     * Gets the number of selected items
     * @returns {number}
     * @publicapi
     */
    getSelectionCount(): number;
    /**
     * @param element
     */
    _enhance(element: JQuery): void;
    initialize(): void;
    /**
     * Gets the row information for the item currently being dragged.
     *
     * @return
     */
    getDraggingRowInfo(): any;
    /**
     * Get the rows that currently have a draggable item "over" them
     */
    _getDragOverRows(): any;
    _getAcceptStatus(dataIndex: number): any;
    /**
     * Clear the cached row acceptance map
     */
    _resetRowAcceptStatus(): void;
    /**
     * See if the row has accepted and activate if it has.
     */
    _rowDropTryActivate(droppingRowInfo: any, e?: any, ui?: any): any;
    _rowIntersect(draggable: any, targetRowInfo: any): any;
    initializeDataSource(suppressRedraw?: boolean): void;
    /**
     * Sets the data source, expands states, columns and sort order of the grid
     *
     * @param source New source for the grid (See grid options for details)
     * @param expandStates Expand states for the new source. If source is not in hierarchical structure, specify null (See grid options for details)
     * @param columns New columns for the grid (See grid options for details)
     * @param sortOrder New sort order for the grid (See grid options for details)
     * @param selectedIndex Index of the rows to be selected after new data source is set
     * @param suppressRedraw If true, grid is not redrawn after data source is set
     * @publicapi
     */
    setDataSource(source?: any[], expandStates?: any[], columns?: IGridColumn[], sortOrder?: IGridSortOrder[], selectedIndex?: number, suppressRedraw?: boolean): void;
    _setColumnInfo(column: IGridColumn, index: number): void;
    /**
     * Gets the information about a row associated with the given data index
     *
     * Returns a rowInfo object containing rowIndex, dataIndex and a jQuery wrapper for the actual row
     *
     * @param dataIndex The data index for the record to retrieve
     * @returns {IGridRowInfo}
     * @publicapi
     */
    getRowInfo(dataIndex: number): IGridRowInfo;
    /**
     * Gets the data being used to display the row at the provided data index.
     *
     * @param dataIndex The data index for the record to retrieve.
     * @return {any}
     * @publicapi
     */
    getRowData(dataIndex: number): any;
    /**
     * Gets the columns currently being displayed in the grid
     * @returns {IGridColumn[]}
     * @publicapi
     */
    getColumns(): IGridColumn[];
    /**
     * Gets the current sort order being used in the grid
     * @returns {IGridSortOrder[]}
     * @publicapi
     */
    getSortOrder(): IGridSortOrder[];
    /**
     * Set new column info for the column associated with the specified column name
     *
     * @param columnName Name of the column to change the options
     * @param options New column options
     * @publicapi
     */
    setColumnOptions(columnName: string, options?: IGridColumn): void;
    _getDataIndex(visibleIndex: any): any;
    _getRowIndex(dataIndex: any): number;
    expandNode(dataIndex: any): void;
    collapseNode(dataIndex: any): void;
    expandAllNodes(): boolean;
    collapseAllNodes(): boolean;
    expandAll(): void;
    collapseAll(): void;
    /**
     * Expand or collapse node(s), and set selection focus at a given target index or at the current selected index as default behavior
     *
     * @param expand If true, expands the node, otherwise collapsed
     * @param applyToAllRows True to expand or collapse all nodes, false to expand or collapse the node at a given target index, or at the current selected index as default behavior
     * @param targetIndex The node index to be expanded or collapsed, and get selection focus
     * @returns {boolean}
     * @publicapi
     */
    tryToggle(expand: boolean, applyToAllRows: boolean, targetIndex?: number): boolean;
    _getVisibleRowIndices(): {
        first: number;
        last: number;
    };
    /**
     * @param rowIndex
     * @param force
     * @return
     */
    _getRowIntoView(rowIndex: number, force?: boolean): boolean;
    /**
     * @param force
     */
    getSelectedRowIntoView(force?: boolean): boolean;
    cacheRows(aboveRange: any, visibleRange: any, belowRange: any): void;
    _drawRowsInternal(visibleRange: any, includeNonDirtyRows: any): {
        rowsFragment: any;
        gutterFragment: any;
    };
    _drawRows(visibleRange: any, includeNonDirtyRows: any): void;
    /**
     * Updates the row identified by the given rowIndex.
     *
     * @param rowIndex Index of row to be updated
     * @param dataIndex DataIndex of row to be updated
     * @param columnsToUpdate HashSet of column indices. If given,
     * only columns in this set will be updated.
     */
    updateRow(rowIndex: number, dataIndex?: number, columnsToUpdate?: {
        [id: number]: boolean;
    }): void;
    _updateRow(rowInfo: any, rowIndex: any, dataIndex: any, expandedState: any, level: any, columnsToUpdate?: {
        [id: number]: boolean;
    }): void;
    /**
     * Updates the container element for the row identified by rowIndex
     *
     * @param rowIndex Index of row to be updated
     * @param keepContent If set, the content of the container element (i.e.,
     * any column data) will not be removed
     * @return Returns DOM row container element
     */
    _updateRowSize(rowIndex: number, row: any, keepContent?: boolean): any;
    /**
     * Default implementation for creating the contents of a given cell.
     *
     * Custom Drawn Columns:
     * If you want a custom drawn column, then the preferred method is to set a "getCellContents" property
     * on the column to a function that takes the same parameters as this function and returns a jQuery
     * object that represents the contents.
     *
     * @param rowInfo The information about grid row that is being rendered.
     * @param dataIndex The index of the row.
     * @param expandedState Number of children in the tree under this row recursively.
     * @param level The hierarchy level of the row.
     * @param column Information about the column that is being rendered.
     * @param indentIndex Index of the column that is used for the indentation.
     * @param columnOrder The display order of the column.
     * @return Returns jQuery element representing the requested grid cell. The first returned element will be appended
     * to the row (unless the function returns null or undefined).
     */
    _drawCell(rowInfo: any, dataIndex: number, expandedState: number, level: number, column: any, indentIndex: number, columnOrder: number): any;
    /**
     * Default implementation for creating the element that represents content of a header cell.
     *
     * Custom Drawn Column Header:
     * If you want a custom drawn column header, then the preferred method is to set a "getHeaderCellContents" property
     * on the column to a function that takes the same parameters as this function and returns a jQuery
     * object that represents the contents.
     *
     * @param column Information about the header column that is being rendered.
     * @return Returns jQuery element representing the requested header cell contents.
     */
    _drawHeaderCellValue(column: any): JQuery;
    _layoutHeader(): void;
    layout(): void;
    redraw(): void;
    /**
     * Gets the value for a column. The default use of the return value is to
     * convert it to a string and set it as the cell's text value.
     *
     * @param dataIndex The index for the row data in the data source
     * @param columnIndex The index of the column's data in the row's data array
     * @param columnOrder The index of the column in the grid's column array. This is the current visible order of the column
     * @return
     */
    getColumnValue(dataIndex: number, columnIndex: number | string, columnOrder?: number): any;
    getColumnText(dataIndex: any, column: any, columnOrder?: any): any;
    _getExpandState(dataIndex: any): number;
    /**
     * @param rowIndex
     * @param dataIndex
     * @param options
     */
    _selectRow(rowIndex: number, dataIndex?: number, options?: any): void;
    /**
     * @return
     */
    getSelectedRowIndex(): number;
    setSelectedRowIndex(selectedRowIndex: any): void;
    /**
     * @return
     */
    getSelectedDataIndex(): number;
    /**
     * @return The last data index of the grid
     */
    getLastRowDataIndex(): number;
    /**
     * @return
     */
    getSelectedDataIndices(): number[];
    /**
     * Ensures that an item (identified by a data index) has an associated row by
     * expanding any enclosing collapsed rows. Returns the rowIndex of the associated row.
     *
     * @param dataIndex The data index of the item to ensure is expanded
     * @return
     */
    ensureDataIndexExpanded(dataIndex: number): number;
    /**
     * Sets the selected item in the grid by the data index.
     * Optionally ensure that the item is not hidden by collapsed rows.
     *
     * @param dataIndex The data index of item to show
     * @param expandNodes If true, all containing collapsed nodes will be expanded
     */
    setSelectedDataIndex(dataIndex: number, expandNodes?: boolean): void;
    selectionChanged(selectedIndex: any, selectedCount: any, selectedRows: any): void;
    selectedIndexChanged(selectedRowIndex: any, selectedDataIndex: any): void;
    _updateRowSelectionStyle(rowInfo: any, selectedRows: any, focusIndex: any): void;
    /**
     * @param timeout
     */
    focus(timeout?: number): void;
    /**
     * Gets info about the row on which context menu is opened
     *
     * If no context menu is open, returns null
     *
     * @returns {IGridRowInfo}
     * @publicapi
     */
    getContextMenuRowInfo(): IGridRowInfo;
    /**
     * Creates the context menu options. This function is intended to be overriden by derived objects.
     *
     * @param rowInfo The information about the row with context
     * @param menuOptions The menu information. See _createContextPopupMenuControl
     * @return
     */
    _createContextMenu(rowInfo: any, menuOptions: any): Menus.PopupMenu;
    /**
     *     Creates the PopupMenu control that houses the context menu items for the Grid. Note: this is intentionally
     *     abstracted from _createContextMenu to allow directly calling it from deep derivations and avoiding inheritance
     *     base propagation.
     *
     * @param menuOptions
     *     The menu information:
     *     {
     *         contextInfo: { item, rowInfo}
     *         items: the list of menu items
     *     }
     *
     * @return
     */
    _createContextPopupMenuControl(menuOptions: any): Menus.PopupMenu;
    /**
     * @param e
     * @return
     */
    _onContainerResize(e?: JQueryEventObject): any;
    /**
     * @return
     */
    _onColumnResize(column: any): any;
    /**
     * @return
     */
    _onColumnMove(sourceIndex: any, targetIndex: any): any;
    /**
     * @param column
     * @param add
     */
    _sortBy(column?: any, add?: boolean): void;
    /**
     * @param sortOrder
     * @param sortColumns
     * @return
     */
    onSort(sortOrder: any, sortColumns?: any): any;
    /**
     * @param sortOrder
     * @param sortColumns
     * @return
     */
    _trySorting(sortOrder: any, sortColumns?: any): any;
    /**
     * @param e
     * @param selector
     */
    _getRowInfoFromEvent(e?: JQueryEventObject, selector?: string): any;
    /**
     * @param e
     * @return
     */
    _onRowMouseDown(e?: JQueryEventObject): any;
    /**
     * @return
     */
    onRowMouseDown(eventArgs: any): any;
    /**
     * @return
     */
    onRowClick(eventArgs: any): any;
    /**
     * @return
     */
    onRowDoubleClick(eventArgs: any): any;
    /**
     * @return
     */
    onGutterClick(eventArgs: any): any;
    /**
     * @return
     */
    onEnterKey(eventArgs: any): any;
    /**
     * @return
     */
    onDeleteKey(eventArgs: any): any;
    _onOpenRowDetail(e?: any, eventArgs?: any): boolean;
    /**
     * @return
     */
    onOpenRowDetail(eventArgs: any): any;
    /**
     * @return
     */
    onContextMenu(eventArgs: any): any;
    /**
     * @param e
     * @return
     */
    _onBlur(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    _onFocus(e?: JQueryEventObject): any;
    _onKeyPress(e?: JQueryKeyEventObject): any;
    /**
     * @param e
     * @return
     */
    _onKeyDown(e?: JQueryKeyEventObject): any;
    _onBackSpaceKey(e?: JQueryKeyEventObject): void;
    _onUpKey(e?: JQueryKeyEventObject, bounds?: any): void;
    _onDownKey(e?: JQueryKeyEventObject, bounds?: any): void;
    _onRightKey(e?: JQueryKeyEventObject): void;
    _onLeftKey(e?: JQueryKeyEventObject): void;
    _onPageUpPageDownKey(e?: JQueryKeyEventObject, bounds?: any): void;
    _getRowsPerPage(e?: BaseJQueryEventObject): number;
    _onHomeKey(e?: JQueryKeyEventObject, bounds?: any): void;
    _onEndKey(e?: JQueryKeyEventObject, bounds?: any): void;
    _onTabKey(e?: JQueryKeyEventObject): void;
    _onEscapeKey(e?: JQueryKeyEventObject): void;
    /**
     * @param e
     * @return
     */
    _onKeyUp(e?: JQueryKeyEventObject): any;
    /**
     * Enables raising the custom event with the provided event name.
     *
     * @param eventName Name of the event to enable.
     */
    enableEvent(eventName: string): void;
    /**
     * Disables raising the custom event with the provided event name.
     *
     * @param eventName Name of the event to disable.
     */
    disableEvent(eventName: string): void;
    /**
     * Gets the collection of expand states for the grid.
     */
    getExpandStates(): any;
    /**
     * Generates a table of the selected items in the grid.
     *
     * @param operationCompleteCallback A callback function invoked when the
     * current selection is available to the client for processing.
     * @param errorCallback
     */
    beginFormatTable(operationCompleteCallback: IResultCallback, errorCallback?: IErrorCallback, formatterType?: new (grid: GridO<TOptions>, options?: any) => Data.ITableFormatter, options?: any): void;
    _createElement(): void;
    _addSpacingElements(): void;
    _createFocusElement(): JQuery;
    private _buildDom();
    _shouldAttachContextMenuEvents(): boolean;
    _attachEvents(): void;
    _getDraggedRowsInfo(e?: JQueryEventObject): any;
    private _setupDragDrop();
    /**
     * Setup the provided draggable and droppable options
     */
    setupDragDrop(draggableOptions: any, droppableOptions: any): void;
    disableDragDrop(): void;
    enableDragDrop(): void;
    /**
     * Delegate out to the row accept handlers to determine if the dragging item will be accepted.
     */
    private _droppableAcceptHandler($element, draggingRowInfo);
    private _droppableDropHandler(e, ui);
    /**
     * Called when an item is being dragged that will be accepted by rows in this grid.
     */
    private _droppableActivateHandler(e, ui);
    /**
     * Called when an item stops being dragged that will be accepted by rows in this grid.
     */
    private _droppableDeactivateHandler(e, ui);
    /**
     * Called when a draggable item is over the grid.
     */
    private _droppableOverHandler(e, ui);
    /**
     * Called when a draggable item is no longer over the grid.
     */
    private _droppableOutHandler(e, ui);
    /**
     * Called when the mouse moves while the draggable item is over the grid.
     *
     * @param outOfGrid Indicates if this move event is being triggered as the mouse is leaving the grid.
     */
    private _droppableOverMoveHandler(e, ui);
    /**
     * Gets the draggable instance from the element which is being dragged.
     */
    private _getDraggable($draggedElement);
    /**
     * Clean up all state stored during drag/drop operations.
     */
    private _cleanupDragDropState();
    /**
     * Unregister the mouse move event which is setup during drag/drop operations.
     */
    private _unregisterDragMouseMove();
    /**
     * Clear the record of which rows the draggable objects are "over"
     */
    private _resetRowOverStatus();
    private _rowDropAccept(droppingRowInfo, $element);
    private _rowDropActivate(droppingRowInfo, e?, ui?);
    private _rowDropDeactivate(droppingRowInfo, e?, ui?);
    private _rowDropOver(droppingRowInfo, e?, ui?);
    private _rowDropOut(droppingRowInfo, e?, ui?);
    private _rowDrop(droppingRowInfo, draggingRowInfo, e?, ui?);
    private _rowDragCreateHelper(draggingRowInfo, e?, ui?);
    /**
     * Invokes the provided handler
     */
    private _invokeDragHandler(e, ui, handlerCallback);
    private _takeMeasurements();
    /**
     *     Ensures that the selected index is correctly set. That is, it will be a noop if the index doesnt change
     *     and will handle indexes that are out of bounds.
     *
     * @param index OPTIONAL: The index to select
     */
    private _ensureSelectedIndex(index?);
    _determineIndentIndex(): void;
    private _updateRanges();
    private _updateExpansionStateAndRedraw(action);
    /**
     * @param includeNonDirtyRows
     */
    _updateViewport(includeNonDirtyRows?: boolean): void;
    _cleanUpRows(): void;
    private _getGutterIconClass(rowIndex, dataIndex, expandedState, level);
    private _drawGutterCell(rowInfo, rowIndex, dataIndex, expandedState, level);
    _drawHeader(): void;
    private _fixColumnsWidth(width);
    _layoutContentSpacer(): void;
    _fixScrollPos(): void;
    /**
     * @param includeNonDirtyRows
     */
    _redraw(includeNonDirtyRows?: boolean): void;
    selectAll(): void;
    _clearSelection(): void;
    /**
     * Highlights the row at the specified rowIndex
     *
     * @param rowIndex Index of the row in the visible source (taking the expand/collapse states into account)
     * @param dataIndex Index of the row in the overall source
     * @param options Specifies options such as:
     *     - keepSelectionStart: Keepd the rowIndex as the basis for range selection
     *     - doNotFireEvent: Prevents firing events
     *     - toggle: Toggles the row in the selection
     */
    _addSelection(rowIndex: number, dataIndex?: number, options?: any): void;
    /**
     * Highlights the rows beginning from the selection start until the row at the specified rowIndex
     *
     * @param rowIndex Index of the row in the visible source (taking the expand/collapse states into account)
     * @param dataIndex Index of the row in the overall source
     */
    private _addSelectionRange(rowIndex, dataIndex?, options?);
    /**
     * This is especially necessary for screen readers to read each
     * row when the selection changes.
     */
    private _updateAriaAttribute();
    private _updateSelectionStyles();
    private _selectionChanged();
    private _selectedIndexChanged(selectedRowIndex, selectedDataIndex);
    _showContextMenu(eventArgs: any): void;
    getPinAndFocusElementForContextMenu(eventArgs: any): {
        pinElement: JQuery;
        focusElement: JQuery;
    };
    /**
     * @param e
     * @return
     */
    _onContainerMouseDown(e?: JQueryEventObject): any;
    _measureCanvasSize(): void;
    private _setupDragEvents();
    private _clearDragEvents();
    /**
     * @param e
     * @return
     */
    private _onDocumentMouseMove(e?);
    /**
     * @param e
     * @return
     */
    private _onDocumentMouseUp(e?);
    /**
     * @param e
     * @return
     */
    private _onHeaderMouseDown(e?);
    /**
     * @param e
     * @return
     */
    private _onHeaderMouseUp(e?);
    /**
     * @param e
     * @return
     */
    _onHeaderClick(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    _onHeaderDblClick(e?: JQueryEventObject): any;
    private _moveSizingElement(columnIndex);
    /**
     *     Given a column index will provide the visible index of this column. That is, it will take in to consideration any
     *     hidden columns and omit them from the index count.
     *
     * @param columnIndex The 0-based global column index
     * @return The 0-based visible column index
     */
    private _getVisibleColumnIndex(columnIndex);
    /**
     * @param columnIndex
     * @param initialWidth
     * @param finish
     */
    _applyColumnSizing(columnIndex: number, initialWidth?: number, finish?: boolean): void;
    _tryFinishColumnSizing(cancel: any): void;
    /**
     * @param columnIndex
     * @param left
     */
    private _moveColumnMovingElement(columnIndex, left?);
    private _applyColumnMoving(sourceIndex, targetIndex);
    private _tryFinishColumnMoving(cancel);
    _getSortColumns(sortOrder: any): any[];
    /**
     * @param sortOrder
     * @param sortColumns
     * @return
     */
    private _onSort(sortOrder, sortColumns?);
    /**
     * @param e
     * @return
     */
    _onSelectStart(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    _onCanvasScroll(e?: JQueryEventObject): any;
    /**
     * @param e
     * @param handler
     * @param eventName
     * @param args
     */
    private _handleEvent(e?, handler?, eventName?, args?);
    /**
     * @param e
     * @return
     */
    _onRowClick(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    _onRowDoubleClick(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    private _onGutterClick(e?);
    /**
     * @param e
     * @return
     */
    _onEnterKey(e?: JQueryKeyEventObject, bounds?: any): any;
    /**
     * @param e
     * @return
     */
    _onDeleteKey(e?: JQueryKeyEventObject): any;
    /**
     * @param e
     * @return
     */
    private _onContextMenu(e?, args?);
    /**
     * @return
     */
    private _onToggle(rowInfo);
    private _isAncestorFolderToggled(rowInfo);
    ancestorFolderToggled(rowInfo: any): void;
    nonAncestorFolderToggled(rowInfo: any, currSelectedDataIndex: any): void;
    afterOnToggle(rowInfo: any): void;
    private _folderToggled(rowInfo);
    private _raiseToggleEvent(rowInfo, isExpanded);
    copySelectedItems(formatterType?: new (grid: GridO<TOptions>, options?: any) => Data.ITableFormatter, copyAsHtml?: boolean, options?: any): void;
    _ensureRowDrawn(dataIndex: any): boolean;
    /**
     * Ensures that all data objects in the selection have been downloaded and are available to process.
     *
     * @param itemsAvailableCallback
     * @param errorCallback
     */
    _beginEnsureSelectionIsAvailable(itemsAvailableCallback?: IResultCallback, errorCallback?: IErrorCallback): void;
    /**
     * Copies the selection into the clipboard.
     *
     * @param operationCompleteCallback
     * @param errorCallback
     */
    private _beginCopySelection(operationCompleteCallback?, errorCallback?, formatterType?, copyAsHtml?, options?);
    _dispose(): void;
}
export class Grid extends GridO<IGridOptions> {
}
export interface ICheckboxSelectionGridOptions extends IGridOptions {
    selectAllLabel: string;
    labelColumnIndex: number;
}
export class CheckboxSelectionGridO<TOptions extends ICheckboxSelectionGridOptions> extends GridO<TOptions> {
    static enhancementTypeName: string;
    static _DEFAULT_LABEL_COLUMN: number;
    static _HEADER_CHECKBOX_ID: string;
    private _labelColumnIndex;
    private _selectAllLabel;
    dataProvider: any;
    gridAdapter: any;
    /**
     * Creates new Checkbox Selection Grid Control
     *
     * @param options The initialization options for the grid which have the following properties
     *
     *    "columns" is a required property containing the array of grid column descriptors that have the following structure:
     *    {
     *        text:      column header text, string, optional, default: "",
     *        width:     width in pixels of the column, number, optional, default: 100,
     *        canSortBy: true if the grid can be sorted by the column, boolean, optional, default: true
     *    }
     *    "selectAllLabel" is the text used as a label for select all check box
     *    "labelColumnIndex" is the index of the column whose values to be used as labels for check boxes
     *    "sort" is an optional comparison function that will be used to sort the data.
     *         function (left, right) returns [0, 0, 0] depending on whether left is smaller, equal or larger than right.
     *
     *
     * @return Returns the new Checkbox Selection Grid object.
     */
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    /**
     * Populates the grid control with the given items
     *
     * @param gridItems This is an array of root nodes that recursively define the tree of the grid.
     *
     *    Every node of the tree has the following format:
     *    {
     *         id:       unique node id, number, required
     *         values:   node values, array, required
     *         children: array of nodes, node, optional
     *    }
     *
     *    Here is a sample declaration of grid items:
     *
     *    gridItems: [{
     *        id: 0,
     *        values: ["Root 1", "red", 100],
     *        children: [{
     *            id: 1,
     *            values: ["Node 1-2", "green", 10],
     *            children: [{
     *                id: 2,
     *                values: ["Leaf 1-2-1", "yellow", 70]
     *            },
     *            {
     *                id: 3,
     *                values: ["Leaf 1-2-2", "blue", 30]
     *            }]
     *        },
     *        {
     *            id: 4,
     *            values: ["Root 2", "white", 50]
     *        }]
     *
     *        "checked" is an array of tree item ids that must be initially checked in the grid.
     *        If this parameter is not provided nothing is checked.
     *
     *
     * @param checkedItemIds
     *     This is an array of tree item ids that must be initially checked in the grid.
     *     If this parameter is not provided nothing is checked.
     *
     */
    setGridItems(gridItems: any[], checkedItemIds: any[]): void;
    /**
     * Allows accessing the list of grid items that are currently checked.
     *
     * @return Returns array of checked item ids.
     */
    getCheckedItemIds(): any[];
    /**
     * OVERRIDE: Creates the element that represents content of a header cell.
     *
     * @param column Information about the header column that is being rendered.
     * @return Returns jQuery element representing the requested header cell.
     */
    _drawHeaderCellValue(column: any): JQuery;
    /**
     * Sets row checkbox into the given state.
     *
     * @param dataIndex The row index.
     * @param newState New state for the row's checkbox.
     */
    setCheckboxState(dataIndex: number, newState: boolean): void;
    /**
     * Updates checkbox related data for grid row with the new state (without touching the actual checkbox element).
     *
     * @param dataIndex The row index.
     * @param state New state for the row's checkbox.
     */
    _setCheckboxStateData(dataIndex: number, state: boolean): void;
    /**
     * Prepares options for the base grid control.
     *
     * @param options Original options passed into the control.
     * See CheckboxSelectionGrid function for details about options format.
     */
    private _updateOptions(options?);
    /**
     * OVERRIDE: Set the column that follows the checkbox one as the indent one.
     */
    _determineIndentIndex(): void;
    /**
     * Create a hidden Label to describe a control for screen readers
     *
     * @param controlId id of the control the label is attached to
     * @param text label text
     * @return
     */
    private _createLabel(controlId, text);
    /**
     * OVERRIDE: Creates the element that represents content of a content cell.
     */
    _drawCell(rowInfo: any, dataIndex: any, expandedState: any, level: any, column: any, indentIndex: any, columnOrder: any): any;
    /**
     * The handler is invoked when the header is checkbox is clicked.
     *
     * @param e
     * @return
     */
    private _onHeaderCheckboxClicked(e?);
    /**
     * The handler is invoked when a checkbox on a grid row is clicked.
     *
     * @param e
     * @return
     */
    private _onCheckboxClicked(e?);
    /**
     * Calculated the checkbox element ID used to locate individual checkboxes on the grid.
     *
     * @param dataIndex The row index of the grid cell.
     * @param columnIndex The column index of the grid cell.
     * @return Returns string representing a checkbox element ID.
     */
    private _createCheckboxId(dataIndex, columnIndex);
    /**
     * Sets header checkbox into the given state.
     *
     * @param checked The state to set for the header checkbox.
     */
    private _setHeaderCheckboxState(checked);
    /**
     * OVERRIDE: Calls the base method and checks for space bar key.
     *
     * @param e
     * @return
     */
    _onKeyDown(e?: JQueryEventObject): any;
    /**
     * Trigger the selection of the selected row.
     *
     * @param e
     * @return
     */
    private _onSpaceKey(e?);
}
export class CheckboxSelectionGrid extends CheckboxSelectionGridO<ICheckboxSelectionGridOptions> {
}
export class ListView extends Grid {
    static enhancementTypeName: string;
    constructor(options?: any);
}
export class GridSearchAdapter extends Search.SearchAdapter {
    private _grid;
    private _gridData;
    private _results;
    private _searchableColumns;
    constructor();
    /**
     *     Attaches the Grid to the filter provider to allow for retrieval of paged data.
     *     The grid is loaded asynchronously, so can't be attached on page load when initialized.
     *
     * @param grid The grid to get data from
     */
    attachGrid(grid: Grid): void;
    /**
     * Adds additional items to the search strategy
     *
     * @param addItemsCallback The function which adds items to the search strategy.
     * @param searchCallback The function which searches the newly updated strategy.
     */
    addMoreItems(addItemsCallback: Function, searchCallback: () => any): void;
    /**
     * Creates SearchableObjects for all available work items
     *
     * @return An array of SearchableObjects.
     */
    createSearchableObjects(): any[];
    /**
     *     Creates the SearchableObject for a row in the grid.
     *
     * @param dataIndex The data index for the item in the grid.
     * @return The SearchableObject representing the row in the grid.
     */
    private _createSearchableObject(dataIndex);
    /**
     *     Handles the results in the UI by filtering through all available items to the ones
     *     provided in the results array.
     *
     * @param results An array of items
     * @param finished Represents whether or not the search is finished
     */
    handleResults(results: any[], finished: boolean): void;
    /**
     *     Handles an error being thrown in the search process.
     *
     * @param message Specific error message if provided.
     */
    handleError(message: string): void;
    /**
     *     Handles the search results being cleared and the view resetting to normal.
     */
    handleClear(): void;
    /**
     *     Returns whether or not there is more data to be loaded.
     *
     * @return True if no more data needs to be loaded, false otherwise
     */
    isDataSetComplete(): boolean;
    /**
     *     Build the list of searchable columns.
     */
    private getSearchableColumns();
}
}
declare module "VSS/Controls/Hubs" {
import Controls = require("VSS/Controls");
/**
* Info for the hubs and hub groups applicable for a given context
*/
export interface HubsContext {
    hubGroupsContributionPointId: string;
    selectedHubGroupId: string;
    hubGroups: HubGroup[];
    hubs: Hub[];
}
/**
* Represents a hub group - the first level of navigation
*/
export interface HubGroup {
    id: string;
    name: string;
    uri: string;
    order: number;
    hasHubs: boolean;
}
/**
* Represents a hub - the second level of navigation
*/
export interface Hub {
    id: string;
    name: string;
    groupId: string;
    uri: string;
    order: number;
    isSelected: boolean;
}
/**
* Class to manage fetching hub context
*/
export module HubsContextManager {
    /**
    * Get the hub context information from the current page
    */
    function getHubsContext(): HubsContext;
    function getDefaultHubNavigationView(): HubNavigationView;
    function addHub(hub: Hub): void;
    function addHubGroup(hubGroup: HubGroup): void;
    function getSelectedHub(): IPromise<Hub>;
}
/**
* Control that renders the hubs/navigation area at the top of a page
*/
export class HubNavigationView extends Controls.BaseControl {
    private static EXTENSION_PATH;
    static MAIN_NAVIGATION_HUB_SELECTOR: string;
    private _$hubgroupSection;
    private _$hubgroupContainer;
    private _$hubContainer;
    private _$hubSection;
    private _hubGroupsInitialized;
    private _hubsInitialized;
    private _selectedHubGroupSet;
    initialize(): void;
    private _loadHubsFromDevModeContributions();
    private _setHubGroupUris(hub?);
    private _decorate();
    updateHubGroupLink(groupId: string, newUrl: string, clickHandler?: (eventObject: JQueryEventObject) => any): void;
    private _drawHubGroups();
    private _drawHubs();
    private _findHubGroup(id);
    private _doesHubGroupExist(id);
    private _doesHubExist(id);
}
/**
* ExternalHub inherits from ExternalPart to support new XDMChannel
*/
export class ExternalHub extends Controls.BaseControl {
    private _host;
    private createHost(contribution);
    private beginGetHubContentUri(contribution);
    initialize(): void;
}
}
declare module "VSS/Controls/Menus" {
import Controls = require("VSS/Controls");
export var menuManager: any;
export enum MenuItemState {
    None = 0,
    Disabled = 1,
    Hidden = 2,
    Toggled = 4,
}
export interface IMenuItemSpec {
    id?: string;
    contributionId?: string;
    rank?: number;
    text?: string;
    title?: string;
    separator?: boolean;
    disabled?: boolean;
    icon?: string;
    childItems?: any;
    group?: string;
    arguments?: any;
    action?: (commandArgs: any) => void;
}
export interface MenuBaseOptions {
    type: string;
    contextInfo: any;
    arguments: any;
    updateCommandStates: Function;
    getCommandState: Function;
    overflow: string;
    align: string;
    cssClass: string;
    cssCoreClass: string;
}
export class MenuBase<TOptions extends MenuBaseOptions> extends Controls.Control<TOptions> {
    _type: any;
    _parent: any;
    _children: any;
    _commandStates: any;
    actionArguments: any;
    /**
     * @param options
     */
    constructor(options?: any);
    getOwner(): any;
    getContextInfo(): any;
    /**
     * @return
     */
    getActionArguments(): any;
    /**
     * Returns the menu type. The values are outlines in the MenuType enumeration
     *
     * @return The menu type value
     */
    getMenuType(): number;
    updateCommandStates(commands: ICommand[]): void;
    isMenuBar(): boolean;
    _fireUpdateCommandStates(context: any): void;
    _clear(): void;
    private _updateCommandStates(commands);
}
export interface MenuItemOptions extends MenuBaseOptions {
    item: any;
    immediateShowHide: boolean;
    clickToggles: boolean;
}
export class MenuItem extends MenuBase<MenuItemOptions> {
    static enhancementTypeName: string;
    static getScopedCommandId(id: any, scope: any): any;
    private _highlightHover;
    private _highlightPressed;
    private _index;
    _item: any;
    _align: any;
    /**
     * @param options
     */
    constructor(options?: MenuItemOptions);
    /**
     * @param options
     */
    initializeOptions(options?: MenuItemOptions): void;
    getCommandId(): any;
    getAction(): any;
    hasAction(): boolean;
    hasSubMenu(): any;
    isDecorated(): boolean;
    isDefault(): boolean;
    isSeparator(): boolean;
    /**
     * Returns if this menu item is a label.  Labels are menu items that aren't actions, like separators, but contain content, such as text.
     *     NOTE: Currently, Labels are implemented using separators.  However, there are plans to revisit this.
     */
    isLabel(): any;
    isSelected(): boolean;
    getCommandState(commandId?: string, context?: any): MenuItemState;
    getIndex(): number;
    setIndex(value: number): void;
    isHidden(): boolean;
    isEnabled(): boolean;
    isToggled(): boolean;
    initialize(): void;
    update(item: any): void;
    updateItems(items: any): void;
    _decorate(): void;
    private _getExternalIcon(url);
    select(): void;
    deselect(): void;
    escaped(): void;
    /**
     * @param options
     */
    execute(options?: any): any;
    executeAction(args?: any): any;
    collapse(options?: any): void;
    setFocus(): void;
    removeFocus(): void;
    /**
     * Called to show the hover highlight the button
     */
    showHoverHighlight(): void;
    /**
     * Called to make the button appear to be 'pressed'
     */
    showPressedHighlight(): void;
    /**
     * Called to make the button appear to be 'pressed'
     */
    removePressedHighlight(): void;
    /**
     * Called to remove all highlighting on the button
     */
    removeHighlight(): void;
    /**
     * Updates the title of a menu item using either the specified text or
     * the function provided in the options
     *
     * @param text New title to be displayed
     */
    updateTitle(text: string): void;
    /**
     * Updates the text of a menu item using either the specified text or
     * the function provided in the options
     *
     * @param text New text to be displayed
     */
    updateText(text: string): void;
    getSubMenu(): any;
    tryShowSubMenu(options?: any): boolean;
    showSubMenu(options?: any): void;
    hideSubMenu(options?: any): void;
    hideSiblings(options?: any): void;
    private _attachMenuEvents();
    private _createIconElement();
    private _createTextElement();
    private _createDropElement();
    private _createSeparatorElement();
    private _updateState();
    private _onMouseOver(e?);
    private _onMouseOut(e?);
    private _onMouseDown(e?);
    private _onMouseUp(e?);
    private _onClick(e?);
    private _onDropClick(e?);
    private _onKeyDown(e);
}
export interface MenuContributionProviderOptions {
    defaultTextToTitle?: boolean;
}
export interface MenuOptions extends MenuBaseOptions {
    suppressInitContributions: boolean;
    contributionPoints: string[];
    items: IMenuItemSpec[];
    executeAction: Function;
    getContributionContext?: Function;
}
export class Menu<TOptions extends MenuOptions> extends MenuBase<TOptions> {
    static enhancementTypeName: string;
    private _items;
    private _itemsSource;
    private _defaultMenuItem;
    private _childrenCreated;
    private _popupElement;
    private _skipUpdateMenuItemStates;
    private _positioningRoutine;
    private _pinElement;
    private _menuContributionProvider;
    protected _contributedItems: IContributedMenuItem[];
    protected _contributionProviderOptions: MenuContributionProviderOptions;
    _menuItems: any;
    _selectedItem: any;
    _visible: boolean;
    _active: boolean;
    _blockBlur: boolean;
    _focusItem: any;
    /**
     * @param options
     */
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    private _initializeItemsSource();
    _decorate(): void;
    /**
     * Gets the item which has the specified id
     *
     * @param tag Associated with the menu item
     * @return
     */
    getItem(id: any): MenuItem;
    /**
     * Gets an array of all menu items.
     *
     * @return
     */
    getItems(): MenuItem[];
    /**
     * Gets the item which has the specified tag
     *
     * @param tag Associated with the menu item
     * @return
     */
    getItemByTag(tag: string): MenuItem;
    getCommandState(commandId: string, context: any): MenuItemState;
    updateCommandStates(commands: ICommand[]): void;
    updateItems(items: any): void;
    protected _updateItemsWithContributions(items: any, contributedMenuItems: IContributedMenuItem[]): void;
    protected _updateCombinedSource(items: any): void;
    /**
     * Create a list from itemsSource to reflect the order of items after grouping is done.
     * Groups of items come before all ungrouped items.
     * A separator goes between each group of items.
     * Ungrouped items remain at the end of the menu with their manually-specified separators still in tact.
     * If any groups are defined, separators are guaranteed not to be the first or last item in the menu.
     */
    getGroupedItems(): IMenuItemSpec[];
    appendItems(appendedItems: any): void;
    /**
     * @param element
     */
    _enhance(element: JQuery): void;
    /**
     * @return
     */
    _getMenuItemType(): any;
    /**
     * @param extraOptions
     * @return
     */
    _getMenuItemOptions(item: any, extraOptions?: any): any;
    _getFirstMenuItem(): any;
    /**
     * @param item
     * @param ignoreFocus
     */
    _selectItem(item?: any, ignoreFocus?: any): void;
    selectDefaultItem(ignoreFocus?: any): void;
    selectFirstItem(): boolean;
    selectNextItem(): boolean;
    selectPrevItem(): boolean;
    /**
     * @param options
     * @return
     */
    selectDown(options?: any): boolean;
    /**
     * @param options
     * @return
     */
    selectUp(options?: any): boolean;
    /**
     * @param options
     * @return
     */
    selectRight(options?: any): boolean;
    /**
     * @param options
     * @return
     */
    selectLeft(options?: any): boolean;
    show(options?: any): boolean;
    /**
     * @param options
     */
    hide(options?: any): void;
    hideChildren(excludedItem: MenuItem, options?: any): void;
    /**
     * @param options
     * @return
     */
    escape(options?: any): boolean;
    ownFocus(): void;
    attach(parent: any): void;
    /**
     * @return
     */
    _getMenuItemAlignment(): string;
    updateMenuItemStates(): void;
    executeAction(eventArgs: any): any;
    /**
     * Scrolls to ensure that the MenuItem is visible
     *
     * @param item MenuItem which is to be shown
     */
    private _ensureVisible(item);
    private _getItems();
    _clear(): void;
    /**
     * @param menuItemElement
     */
    private _createChildMenuItem(item, menuItemElement?);
    private _createSplitDropMenuItem(item, menuItem);
    private _ensureChildren();
    private _enhanceChildren();
    private _getDefaultMenuItem();
    /**
     * @param options
     */
    private _getNextEnabledItem(index, options?);
    /**
     * @param options
     */
    private _getPrevEnabledItem(index, options?);
    private _ensurePopup();
    private _getPopupAlign(align);
    private _showPopup(element, align);
    _hidePopup(): void;
    private _updateMenuItemStates();
    private _startShowTimeout(element, align);
    private _startHideTimeout();
    private _clearTimeouts();
    private _attachAncestorScroll(element);
    private _detachAncestorScroll(element);
    _onParentScroll(e?: any): void;
    private _onMouseDown(e?);
    private _blockBlurUntilTimeout();
    refreshContributedItems(): void;
    private _refreshContributedMenuItems();
    private _getContributionContext();
}
export interface MenuOwnerOptions extends MenuOptions {
    showIcon: boolean;
    markUnselectable: boolean;
    showTimeout: number;
    hideTimeout: number;
    popupAlign: string;
    onActivate: Function;
    onDeactivate: Function;
}
export class MenuOwner<TOptions extends MenuOwnerOptions> extends Menu<TOptions> {
    private _focusElement;
    private _activating;
    private _canBlur;
    private _immediateBlur;
    _subMenuVisible: boolean;
    _align: any;
    /**
     * @param options
     */
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    /**
     * Sets showIcon option.
     *
     * @param showIcon New state for the showIcon option.
     */
    setShowIcon(showIcon: boolean): void;
    initialize(): void;
    _decorate(): void;
    /**
     * @return
     */
    _getMenuItemAlignment(): string;
    /**
     * @param extraOptions
     */
    _getMenuItemOptions(item: any, extraOptions?: any): any;
    /**
     * @param options
     * @return
     */
    escape(options?: any): boolean;
    escaped(options?: any): void;
    isActive(): boolean;
    activate(): void;
    /**
     * This is especially necessary for screen readers to read each
     * row when the selection changes.
     */
    private _updateAriaAttribute(item);
    private _hide();
    private _blur();
    private _updateSubMenuVisibleState();
    private _onKeyDown(e?);
    private _onFocus(e?);
    /**
     * @param e
     * @return
     */
    private _onBlur(e?);
    private _proceedBlur();
    private _startBlurTimeout();
    private _clearBlurTimeout();
    _onParentScroll(e?: any): void;
    private _onResize(e?);
    private _onContextMenu(e?);
}
export interface MenuBarOptions extends MenuOwnerOptions {
    orientation: string;
}
export class MenuBarO<TOptions extends MenuBarOptions> extends MenuOwner<TOptions> {
    static enhancementTypeName: string;
    private _orientation;
    /**
     * @param options
     */
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    /**
     * @return
     */
    _getMenuItemAlignment(): string;
    /**
     * @param options
     * @return
     */
    selectUp(options?: any): boolean;
    /**
     * @param options
     * @return
     */
    selectDown(options?: any): boolean;
    /**
     * @param options
     * @return
     */
    selectLeft(options?: any): boolean;
    /**
     * @param options
     * @return
     */
    selectRight(options?: any): boolean;
}
export class MenuBar extends MenuBarO<MenuBarOptions> {
    /**
     * Tries to activate the menubar associated with the element matched by the selector.
     * @param selector Selector to match the element.
     * @returns Menu activated or not.
     */
    static tryActivate(selector: string): boolean;
    /**
     * Sets focus to the control
     */
    focus(): void;
}
export interface PopupMenuOptions extends MenuOwnerOptions {
    hidden: boolean;
    onPopupEscaped: Function;
    onHide: Function;
}
export class PopupMenuO<TOptions extends PopupMenuOptions> extends MenuOwner<TOptions> {
    static enhancementTypeName: string;
    private _floating;
    private _escapeFocusReceiver;
    private _popupPinElement;
    private _onHide;
    _hidden: boolean;
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    /**
     * @return
     */
    _getMenuItemType(): any;
    _decorate(): void;
    popup(focusElement: any, pinElement: any): void;
    private _showPopupMenu();
    protected _updateItemsWithContributions(items: any, contributedMenuItems: IContributedMenuItem[]): void;
    protected _updateCombinedSource(items: any): void;
    /**
     * @param options
     * @return
     */
    selectUp(options?: any): boolean;
    /**
     * @param options
     * @return
     */
    selectDown(options?: any): boolean;
    /**
     * @param options
     * @return
     */
    selectLeft(options?: any): boolean;
    /**
     * @param options
     * @return
     */
    selectRight(options?: any): boolean;
    escaped(): void;
    _hidePopup(): void;
}
export class PopupMenu extends PopupMenuO<PopupMenuOptions> {
}
/**
 * The command id.
 */
export interface ICommand {
    /**
     * Optional disabled state.  True makes it visible in the menu but not selectable or clickable.
     */
    id: string;
    /**
     * Optional hidden state.  True hides it from the menu.
     */
    disabled?: boolean;
    /**
     * Optional toggled state.  True shows the item as toggled.
     */
    hidden?: boolean;
    toggled?: boolean;
}
/**
 * Sort the menu items by rank, pushing those without a rank to the bottom of the list.
 */
/**
 * Sort the menu items by rank, pushing those without a rank to the bottom of the list.
 */
export function sortMenuItems(items: any): any;
}
declare module "VSS/Controls/Navigation" {
import CommonControls = require("VSS/Controls/Common");
import Controls = require("VSS/Controls");
import Menus = require("VSS/Controls/Menus");
/**
 * Creates a high-level view object for a given page which captures page/hash navigations,
 * handles setting page title, etc.
 */
export class NavigationView extends Controls.BaseControl {
    private _chromelessMode;
    private _leftPaneVisible;
    private _useHostedTitle;
    /**
     * Creates an instance of the object for the given page
     *
     * @param options
     *     attachNavigate: If true, listen for page/hash navigations
     *
     */
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    /**
     * Function invoked when a page/hash navigation has occurred
     *
     * @param state Hash object containing the hash-url parameters
     */
    onNavigate(state: any): void;
    /**
     * Get the element that holds the title
     */
    _getViewTitle(): JQuery;
    /**
     *     Sets the (text) title of the page
     *
     * @param title
     *     Title of the page
     *
     * @param tooltip
     *     Optional tooltip for the page's title element
     *
     */
    setViewTitle(title?: string, tooltip?: string): void;
    /**
     *     Sets the raw-html title element for the page
     *
     * @param title
     *     Text title of the page to be used as the document title
     *
     * @param titleContent
     *     Raw HTML to inject into the title element (will not be escaped)
     *
     */
    setViewTitleContent(title: string, titleContent: string): void;
    /**
     *     Sets the document's title
     *
     * @param title
     *     Title of the page (text)
     *
     */
    setWindowTitle(title: string): void;
    /**
     * Shows or hides the Left (tree) section of the explorer page
     *
     * @param visible If true, show the left side of the explorer page. False to hide it.
     */
    setLeftHubPaneVisibility(visible: boolean): void;
    /**
     *     Set full-screen mode. If true, hide the chrome (hubs, etc.) around the main hub content, hide the splitter, etc.
     *
     * @param fullScreenMode True to enter full screen mode. False to exit full screen mode.
     */
    setFullScreenMode(fullScreenMode: boolean, showLeftPaneInFullScreenMode?: boolean): void;
    /**
     * Set the desired title mode for the current page.
     * Callers must specify directly, as navigation cannot take dependency on TFSOM.
     */
    _setTitleMode(isHosted: boolean): void;
    /**
     * Protected API: returns the desired title format string for use by SetWindowTitle()
     */
    _getPageTitleString(): string;
    private _attachNavigate();
    _onNavigate(state: any): void;
}
/**
 * A high-level singleton wrapper class for a Tri-Split page, providing lightweight
 * functionality such as retrieving the left/right/center hub content, left/right
 * panes, setting the view title, etc.
 *
 * This class is designed to enhance the hub view of a Tri-Split page, and depends
 * on the structure defined in the HubPageExplorerTriSplitPivot.master page.
 */
export class TriSplitNavigationView extends NavigationView {
    private static _instance;
    private _leftPane;
    private _rightPane;
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    /**
     * Retrieve the singleton instance of the class for the current page.
     */
    static getInstance(): TriSplitNavigationView;
    /**
     * Retrieve the left pane element within the current backlog view
     */
    getLeftPane(): JQuery;
    /**
     * Retrieve the right pane element within the current backlog view.
     * NOTE: This retrieves the right pane of the left splitter, which has the center
     * hub content as well as the right hub content (e.g. the product backlog mapping pane).
     */
    getRightPane(): JQuery;
}
export interface IPivotFilterItem {
    encoded?: boolean;
    id?: string;
    selected?: boolean;
    text?: string;
    title?: string;
    value?: any;
}
export class PivotFilter extends Controls.BaseControl {
    static enhancementTypeName: string;
    private static _behaviors;
    /**
     * Registers a filter behavior for the pivot filter
     *
     * @param behaviorType Type of the registered behavior
     */
    static registerBehavior(behaviorType: any): void;
    /**
     * Creates a behavior using the specified names. First found behavior is used
     *
     * @param names Names of the behaviors to probe
     * @param options Options of the behavior
     * @return
     */
    static createBehavior(names: any[], options?: any): any;
    private _behavior;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    /**
     * @param element
     */
    _enhance(element: JQuery): void;
    initialize(): void;
    /**
     * Gets all selected items of the pivot filter
     *
     * @return items
     */
    getSelectedItems(): IPivotFilterItem[];
    /**
     * Gets the currently selected item
     *
     * @return item
     */
    getSelectedItem(): IPivotFilterItem;
    /**
     * Gets the item of the specified value
     *
     * @param value Value of the item (String or Number)
     * @return item
     */
    getItem(value: any): IPivotFilterItem;
    /**
     * Gets all of the items
     * @return the items
     */
    getItems(): IPivotFilterItem[];
    /**
     * Gets the specified item selected
     *
     * @param item Item to select
     * @param fireChange Determines whether the control shoudl fire the change event
     */
    setSelectedItem(item: IPivotFilterItem, fireChange?: boolean): void;
    /**
     * Updates the pivot filter using the specified items
     *
     * @param items New set of items for the pivot filter
     */
    updateItems(items: IPivotFilterItem[], options?: any): void;
    /**
     * Initializes behavior of this pivot filter using specified behavior names
     */
    private _initBehavior(behaviorNames);
    /**
     * This method is called when the control is created in the client using createIn.
     * DOM needs to be built by the control itself
     */
    _createElement(): void;
    private _buildDom();
    private _attachEvents();
    private _onFilterChanged(e?, item?);
}
export class PivotView extends Controls.BaseControl {
    static enhancementTypeName: string;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    /**
     * @param element
     */
    _enhance(element: JQuery): void;
    /**
     * @param selector
     * @return the array of items
     */
    getItems(selector?: any): any[];
    initialize(): void;
    updateItems(): void;
    /**
     * Set a particular view's link to a new link.
     *
     * @param id The view whose link needs an update.
     * @param link The new link for the specified view.
     */
    setViewLink(id: string, link: string): void;
    getSelectedView(): any;
    /**
     * Set a particular view to be enabled or disabled.
     */
    setViewEnabled(id: any, isEnabled: any): void;
    getView(id: any): any;
    setSelectedView(view: any): void;
    onChanged(view: any): void;
    _createElement(): void;
    private _buildDom();
    private _populateItems(ul);
    private _attachEvents();
    private _onClick(e?);
}
export class NavigationViewTab extends Controls.BaseControl {
    /**
     * Creates a control which is used to populate a navigation tab's content section
     */
    constructor(options?: any);
    /**
     * Called whenever navigation occurs with this tab as the selected tab
     *
     * @param rawState The raw/unprocessed hash/url state parameters (string key/value pairs)
     * @param parsedState Resolved state objects parsed by the view
     */
    onNavigate(rawState: any, parsedState: any): void;
    /**
     * Called whenever this tab is active and a navigation occurs that is switching to another tab
     */
    onNavigateAway(): void;
}
export class TabbedNavigationView extends NavigationView {
    private _hubContent;
    private _tabsControl;
    private _tabsMap;
    private _tabOptionsMap;
    private _tabs;
    private _currentTab;
    private _currentTabId;
    private _errorTab;
    private _infoTab;
    private _$infoContent;
    private _currentRawState;
    private _currentParsedState;
    private _currentNavigationContextId;
    private _lastParsedNavigationContextId;
    private _showingError;
    private _showingInfo;
    private _skipTabHideOnAsyncNavigate;
    /**
     * Creates a high-level view object for a given page that has different tabs which are
     * displayed based on the current hash/navigation.
     *
     * @param options
     *     tabs: (Object) Mapping of action id to a NavigationViewTab containing the contents of the tab
     *     hubContentSelector: (String) jQuery selector for the hub content div
     *     pivotTabsSelector: (String) jQuery selector for the hub tabs div
     *     hubSplitterSelector: (String) jQuery selector for the hub splitter control
     *
     */
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    getTab(tabId: string): NavigationViewTab;
    showError(error: any): void;
    showErrorContent(title: any, $contentHtml: any, messageType: any, expand: any): void;
    showInformationTab(title: string, description: string): void;
    appendInformationContent(caption: string, collapsed: boolean): CommonControls.InformationAreaControl;
    appendSectionTitle(content: string): void;
    appendSectionSummary(content: string): void;
    appendElement(element: JQuery): void;
    /**
     * Refresh the current tab (causes setState to be called on the currently visible tab)
     */
    refreshCurrentTab(): void;
    /**
     * Get the action/tab id for the current state
     *
     * @return Tab id, specified in the _a parameter
     */
    getCurrentAction(): string;
    /**
     * Get the current (parsed) state objects for the current navigation state
     *
     * @return State Object that was parsed by the view
     */
    getState(): any;
    /**
     * Set the current (parsed) state objects for the current navigation state
     */
    setState(parsedState: any): void;
    /**
     * Get a state hash with null entries for each hash key that exists in the current
     * url hash. This state can be extended and passed to VSS.Host.history.addHistoryPoint
     * so that existing hash parameters are NOT included in the new url.
     *
     * @return
     */
    getEmptyState(): any;
    /**
     * Get the raw (unparsed) state objects for the current navigation state (key/value pairs from the hash/url)
     *
     * @return Object with string values from the url hash portion
     */
    getRawState(): any;
    /**
     * Parse the state info and fetch any artificacts necessary to render the tab/view. Invoke the 'callback'
     * method with the new state info object when the state information has been successfully parsed.
     *
     * @param action The action parameter (_a) in the url hash
     * @param rawState The raw state info from the hash url for the new navigation
     * @param callback
     *    Callback that should be called when the state was successfully parsed. The callback takes 2 parameters: the tab id (typically
     *    the action), and the parsed state info object.
     *
     *    callback(tabId, parsedStateInfo);
     *
     *
     */
    parseStateInfo(action: string, rawState: any, callback: IResultCallback): void;
    /**
     * Get the visibility state of the specified tab based on the current tab/navigation state. True to show this tab. False to hide it.
     *
     * @param tabId The Id to get the visiblility state for
     * @param currentTabId Id of the currently selected tab
     * @param rawState The raw/unprocessed hash/url state parameters (string key/value pairs)
     * @param parsedState Resolved state objects parsed by the view
     * @return True to show the tab. False to hide it.
     */
    getTabVisibility(tabId: any, currentTabId: string, rawState: any, parsedState: any): boolean;
    /**
     * Get the updated tab label for the specified tab based on the current tab/navigation state. null/undefined to keep the existing label.
     *
     * @param tabId The Id to get the tab label for
     * @param currentTabId Id of the currently selected tab
     * @param rawState The raw/unprocessed hash/url state parameters (string key/value pairs)
     * @param parsedState Resolved state objects parsed by the view
     */
    getTabLabel(tabId: any, currentTabId: string, rawState: any, parsedState: any): void;
    /**
     * Shows or hides the Hub pivot section (navigation tab strip + filters)
     *
     * @param visible If true, show the hub pivot (tabs/filters). If false, hide them
     */
    setHubPivotVisibility(visible: boolean): void;
    private _getErrorTab();
    private _getInfoTab();
    _onNavigate(state: any): void;
    _redirectNavigation(action: string, state: any, replaceHistory?: boolean): void;
    private _onParseStateInfoSuccess(tabId, rawState, parsedState, navigationContextId);
    private _updateTabsControl(selectedTabId, rawState, parsedState);
    private _showTab(tab);
    private _getTab(tabId);
    private _createTab(tabControlType, tabOptions?);
}
export interface NavigationLinkOptions {
    state?: any;
    getUrl?: (state: any) => string;
    target?: string;
    text?: string;
    title?: string;
    $content: JQuery;
    initialState?: any;
}
export class NavigationLink extends Controls.BaseControl {
    private _navigateHandler;
    private _navigationLinkOptions;
    initializeOptions(options?: any): void;
    constructor(options: NavigationLinkOptions);
    initialize(): void;
    dispose(): void;
    private onNavigate(sender, state);
    private updateLink(state);
    getLocation(state: any): any;
}
export module FullScreenHelper {
    var FULLSCREEN_HASH_PARAMETER: string;
    var _events: any;
    /**
     * Initialize the full screen helper. Sets up event handlers.
     *
     * @param menuBar A toggle button for full screen mode will be added to the menu bar (if it does not already exist).
     */
    function initialize(menuBar: Menus.MenuBar, options?: any): void;
    /**
     * Gets a value indicating whether full screen mode is active.
     */
    function getFullScreen(): boolean;
    /**
     * Set full screen value. Update full screen view and button.
     * Update url with full screen tag if addHistoryPoint is true.
     *
     * @param value  The full screen value to set to.
     * @param addHistoryPoint  If true, update url with full screen tag.
     */
    function setFullScreen(value: boolean, addHistoryPoint?: boolean, showLeftLane?: boolean): void;
    /**
     * Get state object for the current full screen mode state.
     *
     * @param value Optional value to set for fullscreen mode.
     * If undefined will use current setting.
     */
    function getUrlData(value?: boolean): any;
    /**
     * Gets full screen icon.
     */
    function getFullScreenIcon(): string;
    /**
     * Gets full screen tooltip.
     */
    function getFullScreenTooltip(): string;
    /**
     * Attaches a fullscreen customer intelligence change event handler.
     * This event handler will be triggered for publishing full screen customer intelligence.
     *
     * @param handler Event handler callback.
     */
    function attachFullScreenCI(handler: IEventHandler): void;
    /**
     * Removes fullscreen customer intelligence change handler from the event handler list.
     *
     * @param handler Event handler callback.
     */
    function detachFullScreenCI(handler: IEventHandler): void;
    /**
     * Attaches a fullscreen customer intelligence change event handler.
     * This event handler will be triggered for publishing full screen customer intelligence.
     *
     * @param handler Event handler callback.
     */
    function attachFullScreenUrlUpdateEvent(handler: IEventHandler): void;
    /**
     * Removes fullscreen customer intelligence change handler from the event handler list.
     *
     * @param handler Event handler callback.
     */
    function detachFullScreenUrlUpdateEvent(handler: IEventHandler): void;
}
}
declare module "VSS/Controls/Search" {
import Controls = require("VSS/Controls");
import Search = require("VSS/Search");
/**
 * @interface
 * An interface for SearchBoxControl options
 */
export interface ISearchBoxControlOptions {
    /**
    * filterTitle: Optional: Tooltip for the control.
    */
    filterTitle?: string;
    /**
     * activateSearchHandler: Optional: Callback when the control is activated.
     */
    activateSearchHandler?: Function;
    /**
     * deactivateSearchHandler: Optional: Callback when the control is deactivated.
     */
    deactivateSearchHandler?: Function;
    /**
     * inputChangedEventHandler: Optional: When the control input changed.
     */
    inputChangedEventHandler?: Function;
    /**
     * hideWatermark: Optional: Set to true to hide watermark for the control.
     */
    hideWatermark?: boolean;
    /**
     * searchIconTooltip: Optional: Tooltip for the search icon of ToggleSearchBoxControl.
     */
    searchIconTooltip?: string;
}
/**
 * A input box control for search or filter.
 */
export class SearchBoxControl extends Controls.Control<ISearchBoxControlOptions> {
    private static inputChangedEventThrottlingInterval;
    private _$searchInputTextbox;
    private _$searchIcon;
    private _active;
    private _suppressBlur;
    private _activateSearchHandler;
    private _deactivateSearchHandler;
    private _inputChangedEventHandler;
    private _value;
    private _inputChangedEventHandlerReset;
    private _subsequentInputChange;
    constructor(options?: ISearchBoxControlOptions);
    initialize(): void;
    /**
     * Return the triming value of the input box.
     */
    getValue(): string;
    /**
     * Return the value of the input box.
     */
    private _getValue();
    /**
     * Displays the search box and hides the search button.
     */
    activateSearch(): void;
    /**
     * Removes the search box and shows the search button instead.
     */
    deactivateSearch(): void;
    protected _displaySearchInputBox(isVisible: boolean): void;
    private _clearInput();
    private _createSearchInput();
    private _searchIconClickHandler(e?);
    private _bindInputChangedEventHandler();
    private _keyDown(e?);
    private _keyUp(e?);
    private _mouseDown(e?);
    private _mouseUp();
    private _mouseOut();
    /**
     * Handle the blur which deactivates search
     */
    private _handleBlur();
    /**
     * Handle the focus which activates search
     */
    private _handleFocus(e?);
}
/**
 * A search icon control. When click, it expands to input box control for search or filter.
 */
export class ToggleSearchBoxControl extends SearchBoxControl {
    private _$searchIconContainer;
    initializeOptions(options?: any): void;
    initialize(): void;
    /**
     * Show the inputbox and hide the search icon.
     */
    activateSearch(): void;
    /**
     * Hide the inputbox and shows the search icon.
     */
    deactivateSearch(): void;
    private _addSearchToggleIcon();
    private _searchIconHoverIn();
    private _searchIconHoverOut();
    private _toggleSearchIcon(isVisible);
    private _searchIconKeyDownHandler(e?);
    private _searchIconkeyUpHandler(e?);
}
export interface ITextFilterControlOptions extends ISearchBoxControlOptions {
    adapter?: any;
}
export class TextFilterControl extends Controls.Control<ITextFilterControlOptions> {
    static tagName: string;
    static coreCssClass: string;
    _textFilterInput: SearchBoxControl;
    _searchCore: Search.SearchCore;
    private _active;
    private _suppressBlur;
    _searchAdapter: any;
    /**
     * Control for backlog search.
     *
     * @param options Options for the control
     */
    constructor(options?: ITextFilterControlOptions);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    isActive(): boolean;
    /**
     * Initializes the control. Creates the search box and initializes events.
     */
    initialize(): void;
    protected _createSearchStrategy(): Search.SearchStrategy;
    private _createSearchInputBox();
    /**
     * Displays the search box and hides the search button
     */
    activateSearch(): void;
    /**
     * Removes the search bar and shows the search button instead
     *
     * @param suppressClear Suppress the clearing event
     */
    deactivateSearch(suppressClear?: boolean): void;
    /**
     * Creates the index in the searchCore
     */
    createIndex(): void;
    /**
     * Clears the index in the Search Core
     */
    clearIndex(): void;
    /**
     * Clears the store and performs the search if search is active.
     */
    refreshResults(): void;
    /**
     * Handle input changed event.
     */
    attachEventOnKeyUp(e?: JQueryEventObject): void;
    /**
     * Perform the search.
     */
    _performSearch(): void;
}
}
declare module "VSS/Controls/TreeView" {
import CommonControls = require("VSS/Controls/Common");
import Controls = require("VSS/Controls");
export class TreeDataSource extends Controls.BaseDataSource {
    root: any;
    constructor(options?: any);
    setSource(source: any): void;
    /**
     * @param source
     */
    prepareSource(source?: any): void;
    /**
     * Update the flat content representation from the current tree
     */
    updateItemsFromSource(): void;
    /**
     * @param all
     * @param textOnly
     * @return
     */
    getItemText(index: any, all?: any, textOnly?: any): string;
    /**
     * @param startsWith
     * @param all
     */
    getItemIndex(itemText: any, startsWith?: any, all?: any): any;
    expandNode(node: any): void;
    collapseNode(node: any): void;
    _initRoot(): void;
    private _prepareCurrentItems();
}
export class TreeNode {
    /**
     * @param text
     * @param config
     * @param children
     * @return
     */
    static create(text: string, config?: any, children?: TreeNode[]): TreeNode;
    id: number;
    root: boolean;
    text: any;
    parent: TreeNode;
    children: TreeNode[];
    config: any;
    expanded: boolean;
    selected: boolean;
    icon: any;
    tag: any;
    noFocus: boolean;
    noContextMenu: boolean;
    noTreeIcon: boolean;
    folder: any;
    type: any;
    link: string;
    title: string;
    droppable: any;
    iterationPath: string;
    definition: any;
    linkDelegate: any;
    hasExpanded: boolean;
    owner: any;
    application: any;
    emptyFolderNodeText: string;
    isEmptyFolderChildNode: boolean;
    isSearchHit: boolean;
    /**
     * @param text
     * @param config
     * @param children
     */
    constructor(text: string, config?: any, children?: TreeNode[]);
    hasChildren(): boolean;
    clear(): void;
    remove(): void;
    add(node: TreeNode): void;
    /**
     *  Move this node to reside under the specified new parent.
     *
     * @param newParent The destination to reparent the source under.
     */
    moveTo(newParent: any): void;
    addRange(nodes: any): void;
    /**
     * Finds a node using the given path
     *
     * @param path Path to find
     * @param sepChar Path separator, if not given default will be used
     * @param comparer Comparer used to compare nodes in the path, if not given default will be used
     */
    findNode(path: string, sepChar?: string, comparer?: (a: string, b: string) => number): TreeNode;
    sort(recursive: any, treeNodeComparer: any): void;
    path(includeRoot: any, sepChar: any): any;
    level(noRoot: any): number;
    getContributionContext(): TreeNode;
    private _ensureNodeId();
    private _sort(recursive, treeNodeComparer);
}
export class TreeView extends Controls.BaseControl {
    static _typeName: string;
    static NODE_DATA_NAME: string;
    static LEVEL_DATA_NAME: string;
    static EXPANDED_CLASS: string;
    static COLLAPSED_CLASS: string;
    private _focusDelegate;
    private _blurDelegate;
    private _dragStartDelegate;
    private _hasFocus;
    private _draggable;
    private _droppable;
    _focusedNode: JQuery;
    private _popupMenu;
    rootNode: TreeNode;
    _selectedNode: any;
    /**
     * Creates new Grid Control
     */
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    initialize(): void;
    _draw(): void;
    _getNodeElement(node: any): JQuery;
    /**
     * Get the node associated with the element
     *
     * @param $element The jQuery object wrapping the tree node's DOM element
     * @return
     */
    _getNode($element: JQuery): TreeNode;
    getSelectedNode(): any;
    /**
     * @param suppressChangeEvent
     */
    setSelectedNode(node: any, suppressChangeEvent?: boolean): void;
    focus(): void;
    _expandNodeParents(node: any, suppressChangeEvent?: boolean): void;
    _updateSelections(): void;
    _updateNode(li: JQuery, node: TreeNode, level: number): any;
    /**
     * @param level
     */
    _drawChildren(node: any, nodeElement: any, level?: number): void;
    /**
     * @return
     */
    _toggle(node: any, nodeElement: any, suppressChangeEvent?: boolean): any;
    /**
     * Ensure the tree node's expansion state is set to a particular value
     *
     * @param node The tree node
     * @param nodeElement The element associated with the node
     * @param expand The desired expand state of the node - true = expanded, false = collapsed
     * @return true = the node's expansion state was changed, false otherwise
     */
    _setNodeExpansion(node: TreeNode, nodeElement: JQuery, expand: boolean): boolean;
    removeNode(node: any): void;
    updateNode(node: any): void;
    /**
     * @param e
     * @return
     */
    onItemClick(node: any, nodeElement: any, e?: JQueryEventObject): any;
    onShowPopupMenu(node: any, options?: any): void;
    /**
     * Indicate whether the element that has focus should be styled differently.
     * The current focus element will be updated to match the new preference
     *
     * @param enabled true, if focus element should be styled.
     */
    enableFocusStyling(enabled: boolean): void;
    _setFocusElement(element: JQuery): void;
    /**
     * Gets the node associated with the provided element.
     *
     * @param element Element to get the node for.
     * @return
     */
    getNodeFromElement(element: any): TreeNode;
    private _drawNode(node, parentElement, level);
    private _drawEmptyFolderNode(parentElement, level, text);
    /**
     * @param e
     * @return
     */
    private _click(e?);
    /**
     * Handle key down events (node selection & expansion)
     *
     * @param e
     * @return
     */
    _onInputKeyDown(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    private _onToggle(e?);
    /**
     * @param e
     * @return
     */
    private _itemClick(e?);
    /**
     * @param e
     * @return
     */
    private _onContextMenu(e?);
    private _showPopupMenu(node);
    /**
     * @param e
     * @return
     */
    private _onFocus(e?);
    /**
     * @param e
     * @return
     */
    _onBlur(e?: JQueryEventObject): any;
    _clearFocusOnElement(): void;
    /**
     * Suppress browser default drag behavior associated with the supplied element to prevent conflicting behavior (text selection/HTML5 default DnD) with JQuery Drag Drop.
     *
     * @param e
     * @return
     */
    private _onDragStart(e?);
    /**
     * Set the droppable
     *
     * @param droppable
     */
    setDroppable(droppable: any): void;
    private _getFirstTabbableChild(nodeElement);
    private _setNodeElementExpandState(nodeElement, expand, hasChildren?);
}
export class ComboTreeDropPopup extends CommonControls.ComboListDropPopup {
    dataSource: TreeDataSource;
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    expandNode(): boolean;
    collapseNode(): boolean;
    _createItem(index: any): any;
    _onItemClick(e?: any, itemIndex?: any, $target?: any, $li?: any): boolean;
    _getSelectedNode(): any;
}
export class ComboTreeBehavior extends CommonControls.ComboListBehavior {
    constructor(combo: any, options?: any);
    canType(): boolean;
    /**
     * @param e
     * @return
     */
    leftKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    rightKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    keyUp(e?: JQueryEventObject): any;
    _createDataSource(): Controls.BaseDataSource;
}
export class SearchComboTreeBehavior extends CommonControls.ComboListBehavior {
    private hitText;
    private selectedHitIndex;
    private originalNodes;
    private lastSearchText;
    private searchDebounceTimeout;
    private debounceWaitTime;
    private textHasChanged;
    constructor(combo: any, options?: any);
    initialize(): void;
    canType(): boolean;
    /**
     * @param e
     * @return
     */
    leftKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    rightKey(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    keyDown(e?: JQueryEventObject): any;
    /**
     * @param e
     * @return
     */
    keyUp(e?: JQueryEventObject): any;
    _createDataSource(): Controls.BaseDataSource;
    private mouseUp();
    private clearSearchDebounce();
    private debounceSearch(waitInMilliseconds);
    private isComboTextPath();
    private searchNodes();
    private _ensureOriginalNodesStored();
    private getNodesToSearch(searchText);
    private createCopyOfSubtreeWhichMatchesSearch(searchText, nodesToSearch);
    private stringContains(text, contains);
    private modifyDatasourceAndDropdownWithResults(searchHitsFound);
    private expandAncestors(node);
    private performSearchHitProcessing(alreadyCopiedNodes, node);
    private copyNodeToArray(array, node);
    private copyNodeAndAncestorsToArray(array, node);
    private copyDecendantsToArray(array, node);
    private setHit(index);
    private acceptSelectedIndex();
}
export function flatten(node: any, items: any, all: any): void;
}
declare module "VSS/Controls/Validation" {
import Controls = require("VSS/Controls");
export interface BaseValidatorOptions {
    bindtokeystrokes?: boolean;
    invalidCssClass?: string;
    message?: string | (() => string);
    group?: string;
    allowEmptyString?: boolean;
    testEmptyString?: boolean;
}
export class BaseValidator<TOptions extends BaseValidatorOptions> extends Controls.Enhancement<TOptions> {
    static optionsPrefix: string;
    static EVENT_VALIDATE: string;
    static EVENT_VALIDATE_STATUS: string;
    instanceId: any;
    /**
     * @param options
     */
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    initialize(): void;
    getValue(): any;
    /**
     * @return
     */
    isValid(): boolean;
    getValidationGroup(): string;
    getMessage(): string | (() => string);
    onKeyUp(): void;
    onChanged(): void;
    onValidationRequired(e?: any, group?: any): void;
    validate(): void;
    private _testEmptyString();
}
export class RequiredValidator<TOptions extends BaseValidatorOptions> extends BaseValidator<TOptions> {
    static optionsPrefix: string;
    /**
     * @param options
     */
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    /**
     * @return
     */
    isValid(): boolean;
}
export class RangeValidator<TOptions extends BaseValidatorOptions> extends BaseValidator<TOptions> {
    static optionsPrefix: string;
    /**
     * @param options
     */
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    /**
     * @return
     */
    isValid(): boolean;
    getMessage(): string;
}
export interface RegexValidatorOptions extends BaseValidatorOptions {
    regex?: string;
}
export class RegexValidator<TOptions extends RegexValidatorOptions> extends BaseValidator<TOptions> {
    static optionsPrefix: string;
    /**
     * @param options
     */
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    /**
     * @return
     */
    isValid(): boolean;
    getMessage(): any;
}
export interface CustomValidatorOptions extends BaseValidatorOptions {
    validate?: (val: any) => boolean;
}
export class CustomValidator<TOptions extends CustomValidatorOptions> extends BaseValidator<TOptions> {
    static optionsPrefix: string;
    /**
     *     A validator which checks the text in the input by passing it to a function,
     *     which then returns true if the input is valid, and false if it is invalid.
     *
     * @param options  Options to apply to the validator:
     *     message: A message logged by the validation summary if the input is invalid / string
     *     testEmptyString: A boolean which indicates whether or not to test the empty string / boolean
     *     validate: The function to validate the input against
     *
     */
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: any): void;
    /**
     * Tests if the current input satisfies the function
     *
     * @return True if the input does satisfy, false if it does not
     */
    isValid(): boolean;
    /**
     *  Set the function the validator tests
     *
     * @param newFxn  The new function to test against
     */
    setValidate(newValidateFunction: any): void;
    /**
     *  Gets the message that would be logged in the validation summary if the input were to be invalid
     *
     * @return  The message
     */
    getMessage(): string;
}
export interface DateValidatorOptions extends BaseValidatorOptions {
    parseFormat?: string;
}
export class DateValidator<TOptions extends DateValidatorOptions> extends BaseValidator<TOptions> {
    static optionsPrefix: string;
    /**
     * @param options
     */
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    /**
     * @return
     */
    isValid(): boolean;
    getMessage(): any;
}
export interface IntegerRangeValidatorOptions extends BaseValidatorOptions {
    minValue?: number;
    maxValue?: number;
}
export class IntegerRangeValidator<TOptions extends IntegerRangeValidatorOptions> extends BaseValidator<TOptions> {
    static optionsPrefix: string;
    /**
     *     A validator that ensures only whole integers between an upper and lower limit are entered.
     *
     * @param options  Options to apply to the validator:
     *     minValue: The minimum value (inclusive)
     *     maxValue: The maximum value (inclusive)
     *
     */
    constructor(options?: TOptions);
    /**
     * OVERRIDE: Determines whether the input control bound to this validator contains valid input
     *
     * @return True if valid, false otherwise
     */
    isValid(): boolean;
    /**
     * OVERRIDE: Gets the error message for display purposes
     *
     * @return The error message
     */
    getMessage(): string;
    /**
     * Gets the min and max boundaries of the validator
     *
     * @return {min, max}
     */
    private _getBounds();
}
export interface MaxLengthValidatorOptions extends BaseValidatorOptions {
    maxLength?: number;
}
export class MaxLengthValidator<TOptions extends MaxLengthValidatorOptions> extends BaseValidator<TOptions> {
    static optionsPrefix: string;
    /**
     * @param options
     */
    constructor(options?: TOptions);
    /**
     * @param options
     */
    initializeOptions(options?: TOptions): void;
    /**
     * @return
     */
    isValid(): boolean;
}
export interface ValidationSummaryOptions {
    context: Node;
    group: string;
}
export class ValidationSummary extends Controls.Control<ValidationSummaryOptions> {
    private _messages;
    private _ignoreUIUpdate;
    private _fixedHeight;
    private _singleMessage;
    private _showAsWarning;
    /**
     * @param options
     */
    constructor(options?: any);
    /**
     * @param options
     */
    initializeOptions(options?: ValidationSummaryOptions): void;
    initialize(): void;
    onValidationStatus(e?: any, validator?: any, group?: any, valid?: any): void;
    validate(): void;
    private _updateUI();
}
/**
 * @param validationResult
 * @param context
 * @return
 */
export function validateGroup(group: any, validationResult?: any[], context?: any): boolean;
}
declare module "VSS/DelegatedAuthorization/Contracts" {
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface AccessTokenResult {
    accessToken: VSS_Common_Contracts.JsonWebToken;
    accessTokenError: TokenError;
    authorizationId: string;
    hasError: boolean;
    refreshToken: RefreshTokenGrant;
    tokenType: string;
    validTo: Date;
}
export enum AppSessionTokenError {
    None = 0,
    UserIdRequired = 1,
    ClientIdRequired = 2,
    InvalidUserId = 3,
    InvalidUserType = 4,
    AccessDenied = 5,
    FailedToIssueAppSessionToken = 6,
    InvalidClientId = 7,
}
export interface AuthorizationGrant {
    grantType: GrantType;
}
export enum ClientType {
    Confidential = 0,
    Public = 1,
    MediumTrust = 2,
}
export enum GrantType {
    None = 0,
    JwtBearer = 1,
    RefreshToken = 2,
    Implicit = 3,
}
export enum HostAuthorizationError {
    None = 0,
    ClientIdRequired = 1,
    AccessDenied = 2,
    FailedToAuthorizeHost = 3,
    ClientIdNotFound = 4,
    InvalidClientId = 5,
}
export interface RefreshTokenGrant extends AuthorizationGrant {
    jwt: VSS_Common_Contracts.JsonWebToken;
}
export interface Registration {
    clientType: ClientType;
    identityId: string;
    isValid: boolean;
    isWellKnown: boolean;
    organizationLocation: string;
    organizationName: string;
    /**
    * Raw cert data string from public key. This will be used for authenticating medium trust clients.
    */
    publicKey: string;
    redirectUris: string[];
    registrationDescription: string;
    registrationId: string;
    registrationLocation: string;
    registrationLogoSecureLocation: string;
    registrationName: string;
    registrationPrivacyStatementLocation: string;
    registrationTermsOfServiceLocation: string;
    responseTypes: string;
    scopes: string;
    secrect: string;
    secretVersionId: string;
}
export enum SessionTokenError {
    None = 0,
    DisplayNameRequired = 1,
    InvalidDisplayName = 2,
    InvalidValidTo = 3,
    InvalidScope = 4,
    UserIdRequired = 5,
    InvalidUserId = 6,
    InvalidUserType = 7,
    AccessDenied = 8,
    FailedToIssueAccessToken = 9,
    InvalidClient = 10,
    InvalidClientType = 11,
    InvalidClientId = 12,
    InvalidTargetAccounts = 13,
    HostAuthorizationNotFound = 14,
    AuthorizationNotFound = 15,
    FailedToUpdateAccessToken = 16,
}
export enum SessionTokenType {
    SelfDescribing = 0,
    Compact = 1,
}
export enum TokenError {
    None = 0,
    GrantTypeRequired = 1,
    AuthorizationGrantRequired = 2,
    ClientSecretRequired = 3,
    RedirectUriRequired = 4,
    InvalidAuthorizationGrant = 5,
    InvalidAuthorizationScopes = 6,
    InvalidRefreshToken = 7,
    AuthorizationNotFound = 8,
    AuthorizationGrantExpired = 9,
    AccessAlreadyIssued = 10,
    InvalidRedirectUri = 11,
    AccessTokenNotFound = 12,
    InvalidAccessToken = 13,
    AccessTokenAlreadyRefreshed = 14,
    InvalidClientSecret = 15,
    ClientSecretExpired = 16,
    ServerError = 17,
    AccessDenied = 18,
    AccessTokenKeyRequired = 19,
    InvalidAccessTokenKey = 20,
    FailedToGetAccessToken = 21,
    InvalidClientId = 22,
    InvalidClient = 23,
    InvalidValidTo = 24,
    InvalidUserId = 25,
    FailedToIssueAccessToken = 26,
}
export interface TokenPairResult {
    accessToken: string;
    hasError: boolean;
    refreshToken: string;
    tokenError: TokenError;
}
export var TypeInfo: {
    AccessTokenResult: {
        fields: any;
    };
    AppSessionTokenError: {
        enumValues: {
            "none": number;
            "userIdRequired": number;
            "clientIdRequired": number;
            "invalidUserId": number;
            "invalidUserType": number;
            "accessDenied": number;
            "failedToIssueAppSessionToken": number;
            "invalidClientId": number;
        };
    };
    AuthorizationGrant: {
        fields: any;
    };
    ClientType: {
        enumValues: {
            "confidential": number;
            "public": number;
            "mediumTrust": number;
        };
    };
    GrantType: {
        enumValues: {
            "none": number;
            "jwtBearer": number;
            "refreshToken": number;
            "implicit": number;
        };
    };
    HostAuthorizationError: {
        enumValues: {
            "none": number;
            "clientIdRequired": number;
            "accessDenied": number;
            "failedToAuthorizeHost": number;
            "clientIdNotFound": number;
            "invalidClientId": number;
        };
    };
    RefreshTokenGrant: {
        fields: any;
    };
    Registration: {
        fields: any;
    };
    SessionTokenError: {
        enumValues: {
            "none": number;
            "displayNameRequired": number;
            "invalidDisplayName": number;
            "invalidValidTo": number;
            "invalidScope": number;
            "userIdRequired": number;
            "invalidUserId": number;
            "invalidUserType": number;
            "accessDenied": number;
            "failedToIssueAccessToken": number;
            "invalidClient": number;
            "invalidClientType": number;
            "invalidClientId": number;
            "invalidTargetAccounts": number;
            "hostAuthorizationNotFound": number;
            "authorizationNotFound": number;
            "failedToUpdateAccessToken": number;
        };
    };
    SessionTokenType: {
        enumValues: {
            "selfDescribing": number;
            "compact": number;
        };
    };
    TokenError: {
        enumValues: {
            "none": number;
            "grantTypeRequired": number;
            "authorizationGrantRequired": number;
            "clientSecretRequired": number;
            "redirectUriRequired": number;
            "invalidAuthorizationGrant": number;
            "invalidAuthorizationScopes": number;
            "invalidRefreshToken": number;
            "authorizationNotFound": number;
            "authorizationGrantExpired": number;
            "accessAlreadyIssued": number;
            "invalidRedirectUri": number;
            "accessTokenNotFound": number;
            "invalidAccessToken": number;
            "accessTokenAlreadyRefreshed": number;
            "invalidClientSecret": number;
            "clientSecretExpired": number;
            "serverError": number;
            "accessDenied": number;
            "accessTokenKeyRequired": number;
            "invalidAccessTokenKey": number;
            "failedToGetAccessToken": number;
            "invalidClientId": number;
            "invalidClient": number;
            "invalidValidTo": number;
            "invalidUserId": number;
            "failedToIssueAccessToken": number;
        };
    };
    TokenPairResult: {
        fields: any;
    };
};
}
declare module "VSS/Diag" {
export var perfCollector: PerfTracePointCollector;
export var logLevel: number;
export function getDebugMode(): boolean;
export function setDebugMode(debugModeEnabled: boolean): void;
export enum StampEvent {
    SinglePoint = 0,
    Enter = 1,
    Leave = 2,
}
export function timeStamp(label: string, event: StampEvent): void;
export class Measurement {
    private label;
    /**
     * Begin new measurement
     *
     * @param label Name of the measurement
     * @param callback Callback to end measurement
     */
    static start(label: string, callback: (measurement: Measurement) => void): void;
    constructor(label: string);
    /**
     * Ends this measurement
     */
    finish(): void;
}
export enum LogVerbosity {
    Off = 0,
    Error = 1,
    Warning = 2,
    Info = 3,
    Verbose = 4,
}
/**
 * Log a message to the debug output windows and all other trace listeners
 *
 * @param level A log verbosity value from VSS.Diag.logVerbosity
 * @param message Message to send to all trace listeners
 */
export function log(level: number, message: string): void;
export function logError(message: string): void;
export function logWarning(message: string): void;
export function logInfo(message: string): void;
export function logVerbose(message: string): void;
/**
 * Add a listener to listen for logged messages
 *
 * @param callback A callback method that gets called whenever something is logged
 */
export function listen(callback: IResultCallback): void;
/**
 * Remove a log message listener
 *
 * @param callback Listener to remove
 */
export function unlisten(callback: IResultCallback): void;
/**
 * Updates the start/end trace points used when creating a profile.
 *
 * @param startTracePointName The trace point to begin the profile.
 * @param endTracePointName The trace point that will ned the profile.
 */
export function profile(startTracePointName: string, endTracePointName: string): void;
/**
 * Explicitly end the profile.
 */
export function profileEnd(): void;
/**
 * Logs a trace point which can be consumed by a trace point collector for performance analysis.
 *
 * @param tracePointName Name of the trace point
 * @param data (Optional) Data corresponding to the event that occurred.
 */
export function logTracePoint(tracePointName: string, data?: any): void;
/**
 * Add a collector to handle trace points
 *
 * @param collector Method(tracePointName, data) called when trace points are logged.
 */
export function addTracePointCollector(collector: Function): void;
/**
 * Remove a trace point collector
 *
 * @param collector Collector to remove
 */
export function removeTracePointCollector(collector: Function): void;
/**
 * Sets the minimum level at which logged statements get captured and reported to the browser console.
 *
 * @param level Level which gets logged to the console
 */
export function setLogLevel(level: number): void;
export interface ITracePoint {
    name: string;
    time: number;
    data: any;
}
export class PerfTracePointCollector {
    private _tracePoints;
    private _overallCounts;
    private _activeCounts;
    private _moduleInitTime;
    private _lastResetTime;
    private _lastResetIndex;
    constructor();
    register(): void;
    getOverallCount(tracePointName: string): number;
    getActiveCount(tracePointName: string): number;
    getLastTracePoint(tracePointName: string): ITracePoint;
    getLastTracePointTime(tracePointName: string): number;
    resetActiveCount(tracePointName: string): void;
    resetActiveCounts(): void;
    getModuleInitTime(): number;
    getTracePoints(activeOnly: boolean): ITracePoint[];
    getTracePointCountData(tracePointNames: string[]): string;
    dumpTracePoints(activeOnly: boolean): string;
    private _updateCount(dictionary, eventName);
    private _handleTracePoint(tracePointName, tracePointData);
}
export function measurePerformance(action: Function, message: string, logLevel?: LogVerbosity): void;
/**
* Any function calls to any members of this class will be stripped out in minified version, see WebPlatform.targets file AjaxMin task call with -debug switch.
* NOTE: You must use Diag or VSS_Diag as alias for the import statment for it to work.
* e.g. import Diag = require("VSS/Diag")
* This will be useful as follows
* 1) We will not have overhead of extra function calls in release version specially in the functions that are called many-many times (e.g. event handlers/processors)
* 2) The size of minified version will not be bloated with the size of message strings and function names
* 3) While debugging will still have flexibility to see the logs depending on the Log level
*/
export class Debug {
    /**
     * Sets whether or not to display callers in the stack on assert failures.
     *
     * @param showCallers If true, display callers in the stack of assert failures.
     */
    static setDisplayCallers(showCallers: boolean): void;
    /**
     * Displays a message in the debugger's output window and breaks into the debugger
     *
     * @param message Message to display in the debugger's output window
     */
    static fail(message: string): void;
    /**
     * Checks for a condition, and if the condition is false, displays a message and prompts the user to break into the debuggeription
     *
     * @param condition true to continue to execute code; false to display message and break into the debugger
     * @param message (Optional) The message to display. The default is an empty string
     */
    static assert(condition: boolean, message?: string): void;
    /**
     * Assert that the value is an object and not null.
     *
     * @param value Value to ensure is an object.
     * @param message (Optional) The message to display. The default is an empty string
     */
    static assertIsObject(value: any, message?: string): void;
    /**
     * Assert that the value is an object and not null.
     *
     * @param value Value to ensure is an object.
     * @param paramName Name of the parameter that this value is associated with.
     * @param optional If true then the assert will accept falsy values
     */
    static assertParamIsObject(value: any, paramName: string, optional?: boolean): void;
    /**
     * Assert that the value is an array.
     *
     * @param value Value to ensure is an array.
     * @param message (Optional) The message to display. The default is an empty string
     * @param requireNotEmpty (Optional) If true the array will be checked to ensure it is not empty.
     */
    static assertIsArray(value: any, message?: string, requireNotEmpty?: boolean): void;
    /**
     * Assert that the value is an array.
     *
     * @param value Value to ensure is an array.
     * @param paramName (Optional) Name of the parameter that this value is associated with.
     * @param requireNotEmpty (Optional) If true the array will be checked to ensure it is not empty.
     */
    static assertParamIsArray(value: any, paramName?: string, requireNotEmpty?: boolean): void;
    /**
     * Assert that the value is a boolean.
     *
     * @param value Value to ensure is a boolean.
     * @param message (Optional) The message to display. The default is an empty string
     */
    static assertIsBool(value: boolean, message?: string): void;
    /**
     * Assert that the value is a boolean.
     *
     * @param value Value to ensure is a boolean.
     * @param paramName Name of the parameter that this value is associated with.
     */
    static assertParamIsBool(value: boolean, paramName: string): void;
    /**
     * Assert that the value is a number.
     *
     * @param value Value to ensure is a number.
     * @param message (Optional) The message to display. The default is an empty string
     */
    static assertIsNumber(value: number, message?: string): void;
    /**
     * Assert that the value is a number.
     *
     * @param value Value to ensure is a number.
     * @param paramName Name of the parameter that this value is associated with.
     */
    static assertParamIsNumber(value: number, paramName: string): void;
    /**
     * Assert that the value is an integer.
     *
     * @param value Value to ensure is an integer.
     * @param message (Optional) The message to display. The default is an empty string
     */
    static assertIsInteger(value: number, message?: string): void;
    /**
     * Assert that the value is an integer.
     *
     * @param value Value to ensure is an integer.
     * @param paramName Name of the parameter that this value is associated with.
     */
    static assertParamIsInteger(value: number, paramName: string): void;
    /**
     * Assert that the value is a string.
     *
     * @param value Value to ensure is a string.
     * @param message (Optional) The message to display. The default is an empty string
     */
    static assertIsString(value: string, message?: string): void;
    /**
     * Assert that the value is a string.
     *
     * @param value Value to ensure is a string.
     * @param paramName Name of the parameter that this value is associated with.
     */
    static assertParamIsString(value: string, paramName: string): void;
    /**
     * Assert that the value is a string and not empty.
     *
     * @param value Value to ensure is a string and not empty.
     * @param message (Optional) The message to display. The default is an empty string
     */
    static assertIsStringNotEmpty(value: string, message?: string): void;
    /**
     * Assert that the value is a string and not empty.
     *
     * @param value Value to ensure is a string and not empty.
     * @param paramName Name of the parameter that this value is associated with.
     */
    static assertParamIsStringNotEmpty(value: string, paramName: string): void;
    /**
     * Assert that the value is a function.
     *
     * @param value Value to ensure is a function.
     * @param message (Optional) The message to display. The default is an empty string
     */
    static assertIsFunction(value: any, message?: string): void;
    /**
     * Assert that the value is a function.
     *
     * @param value Value to ensure is a function.
     * @param paramName Name of the parameter that this value is associated with.
     */
    static assertParamIsFunction(value: any, paramName: string): void;
    /**
     * Assert that the value is a date.
     *
     * @param value Value to ensure is a date.
     * @param message (Optional) The message to display. The default is an empty string
     */
    static assertIsDate(value: any, message?: string): void;
    /**
     * Assert that the value is a date.
     *
     * @param value Value to ensure is a date.
     * @param paramName Name of the parameter that this value is associated with.
     */
    static assertParamIsDate(value: any, paramName: string): void;
    /**
     * Assert that the value is not null or undefined.
     *
     * @param value Value to ensure is not null or undefined.
     * @param message (Optional) The message to display. The default is an empty string
     */
    static assertIsNotNull(value: any, message?: string): void;
    /**
     * Assert that the value is not null or undefined.
     *
     * @param value Value to ensure is not null or undefined.
     * @param paramName Name of the parameter that this value is associated with.
     */
    static assertParamIsNotNull(value: any, paramName: string): void;
    /**
     * Assert that the value is not undefined.
     *
     * @param value Value to ensure is not undefined.
     * @param message (Optional) The message to display. The default is an empty string
     */
    static assertIsNotUndefined(value: any, message?: string): void;
    /**
     * Assert that the value is undefined.
     *
     * @param value Value to ensure is not undefined.
     * @param paramName Name of the parameter that this value is associated with.
     */
    static assertParamIsNotUndefined(value: any, paramName: string): void;
    /**
     * Assert that the value is a jQuery object.
     *
     * @param value Value to ensure is a jQuery object.
     * @param message (Optional) The message to display. The default is an empty string
     */
    static assertIsJQueryObject(value: any, message?: string): void;
    /**
     * Assert that the value is a jQuery object.
     *
     * @param value Value to ensure is a jQuery object.
     * @param paramName Name of the parameter that this value is associated with.
     */
    static assertParamIsJQueryObject(value: any, paramName: string): void;
    /**
     * Assert that the value is an instance of the expected type.
     *
     * @param value The value to test for the correct type
     * @param type Either the constructor function for a type,
     * or a string matching the return value of the typeof operator. This specified the type
     * to test for.
     * @param message The messge to display on Debug.failure.
     * @param optional Flag to determine whether null and undefined are accepted as values.
     */
    static assertIsType(value: any, type: any, message: string, optional?: boolean): void;
    /**
     * Gets the display name for a type.
     *
     * @param type The string value (from the typeof operator) or a constructor function.
     * @return
     */
    static getTypeName(type: any): string;
    /**
     * Assert that the parameter is an instance of the expected type.
     *
     * @param value The value to test for the correct type
     * @param type Either the constructor function for a type,
     * or a string matching the return value of the typeof operator. This specified the type
     * to test for.
     * @param paramName The name of the parameter.
     * @param optional Flag to determine whether null and undefined are accepted as values.
     */
    static assertParamIsType(value: any, type: any, paramName: string, optional?: boolean): void;
    static logInfo(message: string): void;
    static logVerbose(message: string): void;
}
}
declare module "VSS/FeatureAvailability/Contracts" {
export interface FeatureFlag {
    description: string;
    effectiveState: string;
    explicitState: string;
    name: string;
    uri: string;
}
/**
* This is passed to the FeatureFlagController to edit the status of a feature flag
*/
export interface FeatureFlagPatch {
    state: string;
}
export var TypeInfo: {
    FeatureFlag: {
        fields: any;
    };
    FeatureFlagPatch: {
        fields: any;
    };
};
}
declare module "VSS/FeatureAvailability/RestClient" {
import Contracts = require("VSS/FeatureAvailability/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class FeatureAvailabilityHttpClient extends VSS_WebApi.VssHttpClient {
    constructor(rootRequestPath: string);
    /**
     * Retrieve a listing of all feature flags and their current states for a user
     *
     * @param {string} userEmail - The email of the user to check
     * @return IPromise<Contracts.FeatureFlag[]>
     */
    getAllFeatureFlags(userEmail?: string): IPromise<Contracts.FeatureFlag[]>;
    /**
     * Retrieve information on a single feature flag and its current states
     *
     * @param {string} name - The name of the feature to retrieve
     * @return IPromise<Contracts.FeatureFlag>
     */
    getFeatureFlagByName(name: string): IPromise<Contracts.FeatureFlag>;
    /**
     * Retrieve information on a single feature flag and its current states for a user
     *
     * @param {string} name - The name of the feature to retrieve
     * @param {string} userEmail - The email of the user to check
     * @return IPromise<Contracts.FeatureFlag>
     */
    getFeatureFlagByNameAndUserEmail(name: string, userEmail: string): IPromise<Contracts.FeatureFlag>;
    /**
     * Retrieve information on a single feature flag and its current states for a user
     *
     * @param {string} name - The name of the feature to retrieve
     * @param {string} userId - The id of the user to check
     * @return IPromise<Contracts.FeatureFlag>
     */
    getFeatureFlagByNameAndUserId(name: string, userId: string): IPromise<Contracts.FeatureFlag>;
    /**
     * Change the state of an individual feature flag for a name
     *
     * @param {Contracts.FeatureFlagPatch} state - State that should be set
     * @param {string} name - The name of the feature to change
     * @param {string} userEmail
     * @return IPromise<Contracts.FeatureFlag>
     */
    updateFeatureFlag(state: Contracts.FeatureFlagPatch, name: string, userEmail?: string): IPromise<Contracts.FeatureFlag>;
}
}
declare module "VSS/FeatureAvailability/Services" {
import Service = require("VSS/Service");
/**
* Service to manage feature availability data
*/
export class FeatureAvailabilityService extends Service.VssService {
    private _featureStatesCache;
    private _checkedForDataIsland;
    private _httpClient;
    constructor();
    /**
     * Uses the default service to perform a local-only check to determine if the feature is enabled.
     * This requires the feature to be present on the the page scope feature-availability-data island.
     *
     * @param featureName Feature name
     * @param defaultValue Value to return if the feature is not present in page context data.
     */
    static isFeatureEnabled(featureName: string, defaultValue?: boolean): boolean;
    /**
     * Returns whether or not a feature is enabled.
     *
     * @param featureName Feature name
     * @param callback
     * Success callback, taking one parameter (boolean) - the feature availability state
     *
     * @param errorCallback Error callback
     */
    beginIsFeatureEnabled(featureName: string, callback: IResultCallback, errorCallback?: IErrorCallback): void;
    /**
     * Performs a local-only check to determine if the feature is enabled. This requires the feature to be present on the the page scope feature-availability-data island.
     *
     * @param featureName Feature name
     * @param defaultValue Value to return if the feature is not present in page context data.
     */
    isFeatureEnabledLocal(featureName: string, defaultValue?: boolean): boolean;
    /**
     * Returns the cache state for the supplied feature after ensuring the data island has been read.
     */
    private _readLocalState(featureName);
    /**
     * Checks the data island for feature availability data.
     */
    private _checkDataIsland();
}
}
declare module "VSS/FileContainer/Contracts" {
export enum ContainerItemStatus {
    /**
    * Item is created.
    */
    Created = 1,
    /**
    * Item is a file pending for upload.
    */
    PendingUpload = 2,
}
export enum ContainerItemType {
    /**
    * Any item type.
    */
    Any = 0,
    /**
    * Item is a folder which can have child items.
    */
    Folder = 1,
    /**
    * Item is a file which is stored in the file service.
    */
    File = 2,
}
export enum ContainerOptions {
    /**
    * No option.
    */
    None = 0,
}
/**
* Represents a container that encapsulates a hierarchical file system.
*/
export interface FileContainer {
    /**
    * Uri of the artifact associated with the container.
    */
    artifactUri: string;
    contentLocation: string;
    /**
    * Owner.
    */
    createdBy: string;
    /**
    * Creation date.
    */
    dateCreated: Date;
    /**
    * Description.
    */
    description: string;
    /**
    * Id.
    */
    id: number;
    /**
    * Location of the item resource.
    */
    itemLocation: string;
    /**
    * Name.
    */
    name: string;
    /**
    * Options the container can have.
    */
    options: ContainerOptions;
    /**
    * Project Id.
    */
    scopeIdentifier: string;
    /**
    * Security token of the artifact associated with the container.
    */
    securityToken: string;
    /**
    * Identifier of the optional encryption key.
    */
    signingKeyId: string;
    /**
    * Total size of the files in bytes.
    */
    size: number;
}
/**
* Represents an item in a container.
*/
export interface FileContainerItem {
    /**
    * Container Id.
    */
    containerId: number;
    contentId: number[];
    contentLocation: string;
    /**
    * Creator.
    */
    createdBy: string;
    /**
    * Creation date.
    */
    dateCreated: Date;
    /**
    * Last modified date.
    */
    dateLastModified: Date;
    /**
    * Encoding of the file. Zero if not a file.
    */
    fileEncoding: number;
    /**
    * Hash value of the file. Null if not a file.
    */
    fileHash: number[];
    /**
    * Length of the file. Zero if not of a file.
    */
    fileLength: number;
    /**
    * Type of the file. Zero if not a file.
    */
    fileType: number;
    /**
    * Location of the item resource.
    */
    itemLocation: string;
    /**
    * Type of the item: Folder, File or String.
    */
    itemType: ContainerItemType;
    /**
    * Modifier.
    */
    lastModifiedBy: string;
    /**
    * Unique path that identifies the item.
    */
    path: string;
    /**
    * Project Id.
    */
    scopeIdentifier: string;
    /**
    * Status of the item: Created or Pending Upload.
    */
    status: ContainerItemStatus;
    ticket: string;
}
export var TypeInfo: {
    ContainerItemStatus: {
        enumValues: {
            "created": number;
            "pendingUpload": number;
        };
    };
    ContainerItemType: {
        enumValues: {
            "any": number;
            "folder": number;
            "file": number;
        };
    };
    ContainerOptions: {
        enumValues: {
            "none": number;
        };
    };
    FileContainer: {
        fields: any;
    };
    FileContainerItem: {
        fields: any;
    };
};
}
declare module "VSS/FileContainer/RestClient" {
import Contracts = require("VSS/FileContainer/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class FileContainerHttpClient extends VSS_WebApi.VssHttpClient {
    constructor(rootRequestPath: string);
    /**
     * Creates the specified item in the container referenced container.
     *
     * @param {number} containerId
     * @param {string} itemPath
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @return IPromise<Contracts.FileContainerItem>
     */
    createItem(containerId: number, itemPath: string, scope?: string): IPromise<Contracts.FileContainerItem>;
    /**
     * Creates the specified items in in the referenced container.
     *
     * @param {VSS_Common_Contracts.VssJsonCollectionWrapperV<Contracts.FileContainerItem[]>} items
     * @param {number} containerId
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @return IPromise<Contracts.FileContainerItem[]>
     */
    createItems(items: VSS_Common_Contracts.VssJsonCollectionWrapperV<Contracts.FileContainerItem[]>, containerId: number, scope?: string): IPromise<Contracts.FileContainerItem[]>;
    /**
     * Deletes the specified items in a container.
     *
     * @param {number} containerId - Container Id.
     * @param {string} itemPath - Path to delete.
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @return IPromise<void>
     */
    deleteItem(containerId: number, itemPath: string, scope?: string): IPromise<void>;
    /**
     * Gets containers filtered by a comma separated list of artifact uris within the same scope, if not specified returns all containers
     *
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param {string} artifactUris
     * @return IPromise<Contracts.FileContainer[]>
     */
    getContainers(scope?: string, artifactUris?: string): IPromise<Contracts.FileContainer[]>;
    /**
     * Gets the specified file container object in a format dependent upon the given parameters or HTTP Accept request header
     *
     * @param {number} containerId - The requested container Id
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param {string} itemPath - The path to the item of interest
     * @param {boolean} metadata - If true, this overrides any specified format parameter or HTTP Accept request header to provide non-recursive information for the given itemPath
     * @param {string} format - If specified, this overrides the HTTP Accept request header to return either 'json' or 'zip'.  If $format is specified, then api-version should also be specified as a query parameter.
     * @param {string} downloadFileName - If specified and returning other than JSON format, then this download name will be used (else defaults to itemPath)
     * @param {boolean} includeDownloadTickets
     * @return IPromise<Contracts.FileContainerItem[]>
     */
    getItems(containerId: number, scope?: string, itemPath?: string, metadata?: boolean, format?: string, downloadFileName?: string, includeDownloadTickets?: boolean): IPromise<Contracts.FileContainerItem[]>;
}
}
declare module "VSS/FileContainer/Services" {
import FileContainer_Contracts = require("VSS/FileContainer/Contracts");
import Service = require("VSS/Service");
export interface FileContainerPathInfo {
    containerId: number;
    path: string;
}
/**
* Service to manage file container data
*/
export class FileContainerService extends Service.VssService {
    private _httpClient;
    /**
     * Returns a list of file container items
     *
     * @param containerId The id of the container
     * @param scope The scope of the items
     * @param itemPath The path of the item within the container
     */
    beginGetItems(containerId: number, scope: string, itemPath: string): IPromise<FileContainer_Contracts.FileContainerItem[]>;
    /**
     * Returns the file container info
     *
     * @param fileContainerPath The path of the container. For example, "#/12/drop".
     */
    parseContainerPath(fileContainerPath: string): FileContainerPathInfo;
}
}
declare module "VSS/Host" {
export var notificationService: EventManager;
export var history: History;
export var urlHelper: UrlHelper;
export var runningDocumentsTable: RunningDocumentsTable;
export var hostServiceManager: HostServiceManager;
/**
* A service available for host environment.
* A host can be the browser, an IDE (e.g. Eclipse, Visual Studio)
*/
export class HostService {
    /**
     * @param type
     */
    static getServiceName(type?: any): string;
    getServiceName(): string;
}
export class HostServiceManager {
    services: IDictionaryStringTo<any>;
    constructor();
    /**
     * Get the specified service.  Example: hostServiceManager.getService(DocumentService)
     *
     * @param serviceType Service object type name
     * @return
     */
    getService<T>(serviceType: any): T;
}
/**
* Represents a document to a host.
*  A host can be tha browser, an IDE (e.g. Eclipse, Visual Studio)
*/
export class Document {
    save(successCallback: IResultCallback, errorCallback?: IErrorCallback): void;
    getMoniker(): void;
}
/**
* Service for host environment to interact with documents in Web Access
*  A host environment can be tha browser, an IDE (e.g. Eclipse, Visual Studio)
*/
export class DocumentService extends HostService {
    addDeleteListener(callBack: Function): void;
    removeDeleteListener(callBack: IEventHandler): void;
    addBuildPropertyChangedListener(callBack: IEventHandler): void;
    removeBuildPropertyChangedListener(callBack: IEventHandler): void;
    addBuildStoppedListener(callBack: IEventHandler): void;
    removeBuildStoppedListener(callBack: IEventHandler): void;
    addModifiedChangedListener(callBack: IEventHandler): void;
    removeModifiedChangedListener(callBack: IEventHandler): void;
    isModified(args?: string): boolean;
    save(successCallback: IResultCallback, errorCallback?: IErrorCallback): void;
    getActiveDocument(): any;
    _setActiveDocument(activeDocument: any): void;
}
export enum NavigationContextLevels {
    None = 0,
    Deployment = 1,
    Application = 2,
    Collection = 4,
    Project = 8,
    Team = 16,
    ApplicationAll = 15,
    All = 31,
}
export enum TeamFoundationHostType {
    Parent = -1,
    Unknown = 0,
    Deployment = 1,
    Application = 2,
    ProjectCollection = 4,
}
export interface IContextIdentity {
    id: string;
    isContainer: boolean;
    isActive: boolean;
    displayName: string;
    uniqueName: string;
    email?: string;
}
export interface ITeam {
    identity: IContextIdentity;
    name: string;
}
export interface IServiceHost {
    instanceId: string;
    name: string;
    hostType: number;
    vDir: string;
    relVDir: string;
    uri?: string;
}
export interface INavigation {
    topMostLevel: number;
    area: string;
    areaPrefix: string;
    currentController: string;
    currentAction: string;
    controllerPrefix: string;
    serviceHost: IServiceHost;
    applicationServiceHost: IServiceHost;
    collection: IServiceHost;
    project: string;
    projectId: string;
    team: string;
    teamId: string;
    publicAccessPoint: {
        uri: string;
        scheme: string;
        authority: string;
    };
}
export class EventManager {
    private _events;
    fire(eventName: string, sender?: any, eventArgs?: any): boolean;
    /**
     * Invoke the specified event passing the specified arguments.
     *
     * @param eventName The event to invoke.
     * @param sender The sender of the event.
     * @param args The arguments to pass through to the specified event.
     */
    _fireEvent(eventName: string, sender?: any, args?: any): boolean;
    /**
     * Attatch a handler to an event.
     *
     * @param eventName The event name.
     * @param handler The handler to attach.
     */
    attachEvent(eventName: string, handler: IEventHandler): void;
    /**
     * Detatch a handler from an event.
     *
     * @param eventName The event name.
     * @param handler The handler to detach.
     */
    detachEvent(eventName: string, handler: IEventHandler): void;
}
export class History {
    private _events;
    private _suppressNavigate;
    private _initialized;
    _currentHashString: string;
    constructor();
    getCurrentFragment(): string;
    deSerializeState(state: string): any;
    getCurrentState(): any;
    checkCurrentState(): boolean;
    replaceHistoryPoint(action: string, data: any, windowTitle?: string, suppressNavigate?: boolean): void;
    addHistoryPoint(action: string, data?: any, windowTitle?: string, suppressNavigate?: boolean): void;
    attachNavigate(action: IFunctionPPR<any, any, void>, handler?: IFunctionPPR<any, any, void>, checkCurrentState?: boolean): void;
    attachNavigate(action: string, handler: IFunctionPPR<any, any, void>, checkCurrentState?: boolean): void;
    detachNavigate(action: IFunctionPPR<any, any, void>): void;
    detachNavigate(action: string, handler?: IFunctionPPR<any, any, void>): void;
    private _ensureInitialized();
    private _onNavigate();
}
export class UrlHelper {
    static SAFE_URI_SCHEME_LIST: string[];
    private _urlTranslators;
    constructor();
    /**
     * Creates a fragment url to be used in flight navigation.
     *
     * @param action The action name
     * @param data Action parameters
     * @return fragment URL in the form of #_a=[action]&routevalue1=routevalue2...
     */
    getFragmentActionLink(action: string, data?: any): string;
    /**
     * Return a new url that add (if the given parameter name does not exist in the url),
     * or replace the value of given parameter name with the given parameter value.
     *  The original url.  The parameter name to replace in the url.  The parameter value to replace in the url.
     */
    replaceUrlParam(url: string, paramName: string, paramValue: string): string;
    /**
     * Verifies that the given url is within the constraints of 2000 characters.
     *
     * @param url The url to verify.
     * @return Returns true if url is within constraints, false otherwise.
     */
    isUrlWithinConstraints(url: string): boolean;
    /**
     * Check if specified URL is safe - i.e. part of an approved list of URL schemes.
     *
     * @param url Url to check
     * @return
     */
    isSafeProtocol(url: string): boolean;
    /**
     * Registers a URL translator function.
     *
     * @param translatorFunction The translator function of the form function(url, options, successCallback, errorCallback, nextTranslator){}
     * @param order The order of the translator function.
     */
    registerUrlTranslator(translatorFunction: Function, order?: number): void;
    beginTranslateUrl(url: string, options?: any, callback?: IFunctionPR<string, any>, errorCallback?: IErrorCallback): void;
    /**
     * Remove the leading part of urlPath that identifies the team and return the rest of the url
     * e.g.  /tfs/collection/project/team/restOfTheUrl
     *       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     */
    getTeamRelativeUrl(navigation: INavigation, urlPath: string): string;
}
export interface IActionWorker {
    (actionArgs: any, next: (actionArgs: any) => any): any;
}
export class ActionManager {
    static MaxOrder: any;
    /**
     * Register a handler for an action. The handler participates in the Chain of Responsibility pattern.
     *
     * @param action The action to register
     * @param actionWorker Function(actionArgs, next), The handler to invoke for the given action when the performAction
     *     operation is called for the registered action.
     *     The function is passed the action arguments for next which it should call with the actionsArgs UNLESS
     *     it explicitly wants to be the end of the chain.
     *     e.g.
     *     registerActionWorker('some.action', function (actionArgs, next) {
     *         if (iCanHandle(actionArgs)) {
     *             return doProcessing(actionArgs);
     *         }
     *         else {
     *             return next(actionArgs);
     *         }
     *     }, 50);
     *
     * if ActionWorker functions are asynchronous they can still participate in the chain
     *
     *     registerActionWorker('some.async.action', function (actionArgs, next) {
     *         beginDoSomeStuff(function (result) {
     *             if (that.imDone(results)) {
     *                 actionArgs.onSuccess.call(this, results);
     *             }
     *             else {
     *                 next(actionArgs);
     *             }
     *         });
     *     }, 50);
     *
     * @param order The order of the action (default:100).
     *       Action workers are executed in increasing order. Order must be less than MaxOrder (inclusive)
     */
    static registerActionWorker(action: string, actionWorker: IActionWorker, order?: number): void;
    /**
     * Invoke the registered action workers for the an action
     *
     * @param action The action identifier
     * @param actionArgs An object passed to the registered action workers.
     */
    static performAction(action: string, actionArgs?: any): any;
    /**
     *  Clears all action workers
     */
    static clearActionWorkers(): void;
    /**
     * Manage actions and the workers that are invoked when those actions are performed.
     * Action workers register to handle specific actions. They take whatever action they desire
     * and usually call the "next" handler in the chain (see the Chain of Responsibility pattern).
     */
    constructor();
}
export module CommonActions {
    var ACTION_WINDOW_OPEN: string;
    var ACTION_WINDOW_NAVIGATE: string;
    var ACTION_WINDOW_RELOAD: string;
    var ACTION_WINDOW_UNLOAD: string;
}
export class RunningDocumentsTableEntry {
    document: any;
    moniker: string;
    constructor(moniker: string, document: any);
}
export class RunningDocumentsTable {
    rdt: RunningDocumentsTableEntry[];
    constructor();
    /**
     *   Add specified document to the running document table
     *   The document must have a method named isDirty that returns boolean
     *
     * @param moniker Name for this document type
     * @param document Object that will be called to determine state (e.g. dirty//modified)
     * @return A handle to the entry in the running document table. The handle can be used to remove the entry
     */
    add(moniker: string, document: any): RunningDocumentsTableEntry;
    /**
     *   Remove an entry from the running document table
     *
     * @param entry The handle to the entry that will be removed. The handle is returned from the add function
     */
    remove(entry: RunningDocumentsTableEntry): void;
    /**
     *   Check if the specified document is modified.  If specified moniker is null or undefined
     *   will return true if any currently opened documents are modified
     *
     * @param moniker Name for this document type
     * @return True if the specified moniker\document is modified, false otherwise.
     *   Null or undefined moniker will return true if any opened documents are modified
     */
    isModified(moniker?: string): boolean;
    beginSave(callback: IResultCallback, errorCallback?: IErrorCallback): void;
    getUnsavedItemsMessage(): string;
    private _isAnyModified();
}
}
declare module "VSS/Identities/Contracts" {
/**
* Container class for changed identities
*/
export interface ChangedIdentities {
    /**
    * Changed Identities
    */
    identities: Identity[];
    /**
    * Last Identity SequenceId
    */
    sequenceContext: ChangedIdentitiesContext;
}
/**
* Context class for changed identities
*/
export interface ChangedIdentitiesContext {
    /**
    * Last Group SequenceId
    */
    groupSequenceId: number;
    /**
    * Last Identity SequenceId
    */
    identitySequenceId: number;
}
export interface CreateGroupsInfo {
    groups: Identity[];
    scopeId: string;
}
export interface CreateScopeInfo {
    adminGroupDescription: string;
    adminGroupName: string;
    creatorId: string;
    parentScopeId: string;
    scopeName: string;
    scopeType: GroupScopeType;
}
export interface FrameworkIdentityInfo {
    displayName: string;
    identifier: string;
    identityType: FrameworkIdentityType;
    role: string;
}
export enum FrameworkIdentityType {
    None = 0,
    ServiceIdentity = 1,
    AggregateIdentity = 2,
}
export interface GroupMembership {
    active: boolean;
    descriptor: IdentityDescriptor;
    id: string;
    queriedId: string;
}
export enum GroupScopeType {
    Generic = 0,
    ServiceHost = 1,
    TeamProject = 2,
}
export interface Identity {
    /**
    * The custom display name for the identity (if any). Setting this property to an empty string will clear the existing custom display name. Setting this property to null will not affect the existing persisted value (since null values do not get sent over the wire or to the database)
    */
    customDisplayName: string;
    descriptor: IdentityDescriptor;
    id: string;
    isActive: boolean;
    isContainer: boolean;
    masterId: string;
    memberIds: string[];
    memberOf: IdentityDescriptor[];
    members: IdentityDescriptor[];
    metaTypeId: number;
    properties: any;
    /**
    * The display name for the identity as specified by the source identity provider.
    */
    providerDisplayName: string;
    resourceVersion: number;
    uniqueUserId: number;
}
export interface IdentityBatchInfo {
    descriptors: IdentityDescriptor[];
    identityIds: string[];
    includeRestrictedVisibility: boolean;
    propertyNames: string[];
    queryMembership: QueryMembership;
}
/**
* An Identity descriptor is a wrapper for the identity type (Windows SID, Passport) along with a unique identifier such as the SID or PUID.
*/
export interface IdentityDescriptor {
    /**
    * The unique identifier for this identity, not exceeding 256 chars, which will be persisted.
    */
    identifier: string;
    /**
    * Type of descriptor (for example, Windows, Passport, etc.).
    */
    identityType: string;
}
export enum IdentityMetaType {
    Member = 0,
    Guest = 1,
}
export interface IdentityScope {
    administrators: IdentityDescriptor;
    id: string;
    isActive: boolean;
    isGlobal: boolean;
    localScopeId: string;
    name: string;
    parentId: string;
    scopeType: GroupScopeType;
    securingHostId: string;
}
export enum IdentitySearchFilter {
    /**
    * NT account name (domain\alias)
    */
    AccountName = 0,
    /**
    * Display name
    */
    DisplayName = 1,
    /**
    * Find project admin group
    */
    AdministratorsGroup = 2,
    /**
    * Find the identity using the identifier
    */
    Identifier = 3,
    /**
    * Email address
    */
    MailAddress = 4,
    /**
    * A general search for an identity.
    */
    General = 5,
    /**
    * Alternate login username
    */
    Alias = 6,
    /**
    * Find identity using Domain/TenantId
    */
    Domain = 7,
}
export interface IdentitySelf {
    accountName: string;
    displayName: string;
    id: string;
    tenants: TenantInfo[];
}
export enum IdentityServiceBehavior {
    Default = 0,
    NoMapping = 1,
}
export interface IdentitySnapshot {
    groups: Identity[];
    identityIds: string[];
    memberships: GroupMembership[];
    scopeId: string;
    scopes: IdentityScope[];
}
export interface IdentityUpdateData {
    id: string;
    index: number;
    updated: boolean;
}
export interface JsonPatchOperationData<T> {
    op: string;
    path: string;
    value: T;
}
export interface MruIdentitiesUpdateData extends JsonPatchOperationData<string[]> {
}
export enum QueryMembership {
    /**
    * Query will not return any membership data
    */
    None = 0,
    /**
    * Query will return only direct membership data
    */
    Direct = 1,
    /**
    * Query will return expanded membership data
    */
    Expanded = 2,
    /**
    * Query will return expanded up membership data (parents only)
    */
    ExpandedUp = 3,
    /**
    * Query will return expanded down membership data (children only)
    */
    ExpandedDown = 4,
}
export enum ReadIdentitiesOptions {
    None = 0,
    FilterIllegalMemberships = 1,
}
export interface ReadOnlyIdentityDescriptor extends IdentityDescriptor {
    identifier: string;
    identityType: string;
}
export enum SpecialGroupType {
    Generic = 0,
    AdministrativeApplicationGroup = 1,
    ServiceApplicationGroup = 2,
    EveryoneApplicationGroup = 3,
    LicenseesApplicationGroup = 4,
    AzureActiveDirectoryApplicationGroup = 5,
}
export interface TenantInfo {
    homeTenant: boolean;
    tenantId: string;
    tenantName: string;
}
export var TypeInfo: {
    ChangedIdentities: {
        fields: any;
    };
    ChangedIdentitiesContext: {
        fields: any;
    };
    CreateGroupsInfo: {
        fields: any;
    };
    CreateScopeInfo: {
        fields: any;
    };
    FrameworkIdentityInfo: {
        fields: any;
    };
    FrameworkIdentityType: {
        enumValues: {
            "none": number;
            "serviceIdentity": number;
            "aggregateIdentity": number;
        };
    };
    GroupMembership: {
        fields: any;
    };
    GroupScopeType: {
        enumValues: {
            "generic": number;
            "serviceHost": number;
            "teamProject": number;
        };
    };
    Identity: {
        fields: any;
    };
    IdentityBatchInfo: {
        fields: any;
    };
    IdentityDescriptor: {
        fields: any;
    };
    IdentityMetaType: {
        enumValues: {
            "member": number;
            "guest": number;
        };
    };
    IdentityScope: {
        fields: any;
    };
    IdentitySearchFilter: {
        enumValues: {
            "accountName": number;
            "displayName": number;
            "administratorsGroup": number;
            "identifier": number;
            "mailAddress": number;
            "general": number;
            "alias": number;
            "domain": number;
        };
    };
    IdentitySelf: {
        fields: any;
    };
    IdentityServiceBehavior: {
        enumValues: {
            "default": number;
            "noMapping": number;
        };
    };
    IdentitySnapshot: {
        fields: any;
    };
    IdentityUpdateData: {
        fields: any;
    };
    JsonPatchOperationData: {
        fields: any;
    };
    MruIdentitiesUpdateData: {
        fields: any;
    };
    QueryMembership: {
        enumValues: {
            "none": number;
            "direct": number;
            "expanded": number;
            "expandedUp": number;
            "expandedDown": number;
        };
    };
    ReadIdentitiesOptions: {
        enumValues: {
            "none": number;
            "filterIllegalMemberships": number;
        };
    };
    ReadOnlyIdentityDescriptor: {
        fields: any;
    };
    SpecialGroupType: {
        enumValues: {
            "generic": number;
            "administrativeApplicationGroup": number;
            "serviceApplicationGroup": number;
            "everyoneApplicationGroup": number;
            "licenseesApplicationGroup": number;
            "azureActiveDirectoryApplicationGroup": number;
        };
    };
    TenantInfo: {
        fields: any;
    };
};
}
declare module "VSS/Identities/Picker/Controls" {
import CommonControls = require("VSS/Controls/Common");
import Controls = require("VSS/Controls");
import Identities_Picker_RestClient = require("VSS/Identities/Picker/RestClient");
import Identities_Picker_Services = require("VSS/Identities/Picker/Services");
export interface IIdentityPickerDropdownOptions extends Identities_Picker_Services.IIdentityServiceOptions {
    /**
    *   type of identities - one or more of User or Group
    **/
    identityType?: Identities_Picker_Services.IIdentityType;
    /**
    *   scope - one or more of AAD, Local
    **/
    operationScope?: Identities_Picker_Services.IOperationScope;
    /**
    *   default identities to initialize the dropdown with
    **/
    items?: Identities_Picker_RestClient.IIdentity[];
    /**
    *   restrict displayed identities in dropdown
    **/
    pageSize?: number;
    /**
    *   what action (usually in parent) should execute when an item in this dropdown is selected
    **/
    onItemSelect?: (identity: Identities_Picker_RestClient.IIdentity) => any;
    /**
    *   whether to display the contact card icon for each identity in the dropdown. Default false.
    **/
    showContactCard?: boolean;
    /**
    *   the width of the dropdown control. Default is max(positioningElement width, 400px)
    **/
    width?: number;
    /**
    *   the vertex of the dropdown which coincides with the baseAlign (horizontal-vertical). See UI.Positioning for details. Default is "left-top"
    **/
    elementAlign?: string;
    /**
    *   the vertex of the base element used as a reference for positioning (horizontal-vertical). See UI.Positioning for details. Default is "left-bottom"
    **/
    baseAlign?: string;
    tfsContext?: any;
    coreCssClass?: string;
    /**
    *   an element, or a function which returns an element, to be used for determining the alignment and width of the dropdown control.
    *   Refer to the width, elementAlign, and baseAlign options. Default is the container
    **/
    positioningElement?: JQuery | (() => JQuery);
}
export class IdentityPickerDropdownControl extends Controls.Control<IIdentityPickerDropdownOptions> {
    private static MIN_WIDTH;
    static UPDATE_THUMBNAILS_EVENT: string;
    private _identities;
    private _$itemsContainer;
    private _selectedIndex;
    private _numItemsDisplayed;
    private _scrollTimeout;
    private _$searchStatus;
    private _indexToItemMap;
    private _searchActive;
    private _prefix;
    private _isVisible;
    private _identityType;
    private _operationScope;
    constructor(options?: IIdentityPickerDropdownOptions);
    initializeOptions(options?: IIdentityPickerDropdownOptions): void;
    initialize(): void;
    /**
    * Set the prefix but do not expect an update to the list
    **/
    updatePrefix(prefix: string): void;
    /**
    * Returns true if the dropdown is currently being shown
    **/
    isVisible(): boolean;
    /**
    * Get Identities
    */
    getIdentities(prefix: string, successCallback?: (data?: Identities_Picker_RestClient.QueryTokenResultModel) => any, errorCallback?: (errorData?: any) => any): void;
    updateIdentities(items: Identities_Picker_RestClient.IIdentity[], keepIndex?: boolean): void;
    /**
    * Show the dropdown
    **/
    show(): void;
    /**
    * Hide the dropdown
    **/
    hide(): void;
    private updateDropdown(options);
    /**
    * Scroll to selected item
    **/
    private setSelectedIndex(selectedIndex, scrollIntoView, position?);
    private _scrollItemIntoView(index, position);
    /**
    * Set the position of this control with respect to its parent
    **/
    private setPosition();
    private getPositioningElement();
    /**
    * Show the status indicator till all users are loaded
    **/
    private showLoading();
    /**
    * Show error message in case of non-2xx response
    **/
    private _showError();
    handleKeyEvent(e: JQueryEventObject): boolean;
    private _nextPage();
    private _prevPage();
    private _nextItem();
    private _prevItem();
    getSelectedIndex(): number;
    getSelectedItem(): Identities_Picker_RestClient.IIdentity;
    private _highlightPrefix(textValue);
    /**
    * Create the li that shall represent an user item
    **/
    private _createItem(index);
    private _render();
    private _loadNextPage(force?);
}
export class IdCardDialog extends CommonControls.ModalDialog {
    static IDCARD_LOADED_EVENT: string;
    private _identityType;
    private _operationScope;
    private _$idCardDialog;
    constructor(options?: any);
    initializeOptions(options?: any): void;
    initialize(): void;
    private _getIdentitiesFailure(data);
    private _getIdentitiesSuccess(data);
    private _getThumbnailFailure(data);
    private _getThumbnailSuccess(thumbnails);
    private _orderAttributes(identity);
    private _displayIdCard(identity, attributes);
    private _onCloseClick(e?);
    private _onCancelClick(e?);
    private _createIdentityImageElement(tfsContext, identityId, size);
}
export interface IIdentityPickerSearchOptions extends Identities_Picker_Services.IIdentityServiceOptions {
    /**
    *   type of identities - one or more of User or Group
    **/
    identityType?: Identities_Picker_Services.IIdentityType;
    /**
    *   scope - one or more of AAD, Local
    **/
    operationScope?: Identities_Picker_Services.IOperationScope;
    /**
    *   default identities to initialise the dropdown with
    **/
    items?: Identities_Picker_RestClient.IIdentity[];
    /**
    *   parent Jquery object
    **/
    container?: JQuery;
    /**
    *   restrict displayed identities in dropdown
    **/
    pageSize?: number;
    /**
    *   whether the search and dropdown controls should handle multiple identities
    **/
    multiIdentitySearch?: boolean;
    /**
    *   what action (usually in parent) should execute when an item in this dropdown is selected
    **/
    onItemSelect?: any;
    /**
    *   whether to display the contact card icon for each identity in the dropdown. Default false.
    **/
    showContactCard?: boolean;
    /**
    *   whether to style the search control with a triangle that displays the MRU on click or not. Default false.
    **/
    showMruTriangle?: boolean;
    tfsContext?: any;
    coreCssClass?: string;
}
export class IdentityPickerSearchControl extends Controls.Control<IIdentityPickerSearchOptions> {
    static INVALID_INPUT_EVENT: string;
    static VALID_INPUT_EVENT: string;
    static DATA_SOURCE_FALLBACK_EVENT: string;
    static DATA_SOURCE_REEVALUATE_EVENT: string;
    static SEARCH_STARTED_EVENT: string;
    static SEARCH_FINISHED_EVENT: string;
    private _identityPickerDropdown;
    private _identityType;
    private _operationScope;
    private _selectedItems;
    private _unresolvedItems;
    private _$input;
    private _searchTerm;
    private _$focusedOn;
    private _typingTimer;
    private _doneTypingInterval;
    private _containerHeight;
    private _elementMargin;
    private _scrollBarWidth;
    private _triangleWidth;
    constructor(options?: IIdentityPickerSearchOptions);
    initialize(): void;
    getIdentitySearchResult(): IdentitySearchResult;
    clear(): void;
    isDropdownVisible(): boolean;
    private _showProgressCursor();
    private _stopProgressCursor();
    private _fireInvalidInput();
    private _fireValidInput();
    private _fireDataSourceFallback();
    private _fireDataSourceReevaluate();
    private _onInputChange(e?);
    private _onInputClick(e?);
    private _onDropClick(e?);
    private _onInputBlur(e?);
    private _onInputKeyDown(e?);
    private _onInputKeyUp(e?);
    private _removeFromUnresolved(item);
    private _removeFromResolved(item);
    private _getInputText();
    private _resolveInputToIdentities(input);
    private _getIdentities(searchTerm);
    private _updateThumbnail(data);
    private _recalculateInputWidth();
    private _replaceAndCleanup(email);
    private _findInSelectedItems(object);
    private _showUserIdCard(args);
    private _resolveItem(item, clearInput?, prefix?);
    private _getSearchPrefix(input);
    private _unresolveItem(token);
}
export interface IdentitySearchResult {
    resolvedIdentities: Identities_Picker_RestClient.IIdentity[];
    unresolvedIdentities: string[];
}
}
declare module "VSS/Identities/Picker/RestClient" {
import WebApi_RestClient = require("VSS/WebApi/RestClient");
export class AbstractIdentityPickerHttpClient extends WebApi_RestClient.VssHttpClient {
    beginGetIdentities(identitiesRequest: IdentitiesSearchRequestModel): IPromise<IdentitiesSearchResponseModel>;
    beginGetAvatar(objectId: string): IPromise<IdentitiesGetAvatarResponseModel>;
}
export class CommonIdentityPickerHttpClient extends AbstractIdentityPickerHttpClient {
    beginGetIdentities(identitiesRequest: IdentitiesSearchRequestModel): IPromise<IdentitiesSearchResponseModel>;
    beginGetAvatar(objectId: string): IPromise<IdentitiesGetAvatarResponseModel>;
}
export class AbstractMruServiceHttpClient extends WebApi_RestClient.VssHttpClient {
    beginGetIdentities(identitiesRequest: IdentitiesSearchRequestModel): IPromise<any>;
}
/**
 *   Identity Picker Models
**/
export interface IIdentity {
    objectId: string;
    objectType: string;
    originDirectory: string;
    originId: string;
    localDirectory: string;
    localId: string;
    displayName?: string;
    department?: string;
    jobTitle?: string;
    mail?: string;
    mailNickname?: string;
    physicalDeliveryOfficeName?: string;
    signInAddress?: string;
    surname?: string;
    guest?: boolean;
    description?: string;
    image?: string;
    manager?: string;
    isMru?: boolean;
}
export interface QueryTokenResultModel {
    queryToken: string;
    identities: IIdentity[];
    pagingToken?: string;
}
export interface IdentitiesSearchRequestModel {
    query: string;
    identityTypes: string[];
    operationScopes: string[];
    options?: any;
    pagingToken?: string;
    properties?: string[];
}
export interface IdentitiesSearchResponseModel {
    results: QueryTokenResultModel[];
}
export interface IdentitiesGetAvatarResponseModel {
    avatar: string;
}
}
declare module "VSS/Identities/Picker/Services" {
import Identities_Picker_RestClient = require("VSS/Identities/Picker/RestClient");
import Service = require("VSS/Service");
/**
*   Maps to static Directory in the DirectoryDiscoveryService
**/
export interface IOperationScope {
    /**
    *   Search the local directory - IMS (Identity service)
    **/
    Local?: boolean;
    /**
    *   Search the applicable source directory - AAD tenant-level for AAD-backed accounts or IMS account-level for MSA accounts/on-premise TFS
    **/
    Source?: boolean;
    AAD?: boolean;
    Mru?: boolean;
}
/**
*   Maps to static DirectoryObjectType in the DirectoryDiscoveryService
**/
export interface IIdentityType {
    User?: boolean;
    Group?: boolean;
}
export interface IIdentityServiceOptions {
    /**
    *   The httpClient that should be used instead of the CommonIdentityPickerHttpClient
    **/
    httpClient?: Identities_Picker_RestClient.AbstractIdentityPickerHttpClient;
}
export interface IIdentityService {
    getIdentities(prefix: string, operationScope: IOperationScope, identityType: IIdentityType, successCallback: (queryTokenResult: Identities_Picker_RestClient.QueryTokenResultModel) => void, errorCallback?: (errorData?: any) => void, options?: IIdentityServiceOptions): void;
    getIdentityImages(identities: Identities_Picker_RestClient.IIdentity[], operationScope: IOperationScope, identityType: IIdentityType, successCallback: (images: IDictionaryStringTo<string>) => void, errorCallback?: (errorData?: any) => void, options?: IIdentityServiceOptions): void;
}
export class IdentityService extends Service.VssService implements IIdentityService {
    private static _defaultProperties;
    private static _defaultUserProperties;
    private static _defaultGroupProperties;
    /**
    *   Get all users with specific properties starting with the prefix.
    *   @param  successCallback:    This is called independently for each semicolon separated queryToken that is parsed by the service and resolved to 0 or more identities
    *   @param  errorCallback:      This is called for each error received from either the controller or one of the federated services
    **/
    getIdentities(prefix: string, operationScope: IOperationScope, identityType: IIdentityType, successCallback: (queryTokenResult: Identities_Picker_RestClient.QueryTokenResultModel) => void, errorCallback?: (errorData?: any) => void, options?: IIdentityServiceOptions): void;
    /**
    *   Currently supports only AAD and Source (AAD for AAD-backed accounts, and IMS for MSA accounts/on-premise TFS)
    **/
    private static getOperationScopeList(operationScope);
    /**
    *   Currently supports only Users and Groups
    **/
    private static getIdentityTypeList(identityType);
    private static getQueryTokensForIdentitesWithImages(identities);
    /**
    *   Get images of identities asynchronously, if available. Currently only supports AAD and profile images.
    *   @param  successCallback:    This is called once all the images have been loaded for the identities supplied
    *   @param  errorCallback:      This is called for each error received from either the controller or one of the federated services
    **/
    getIdentityImages(identities: Identities_Picker_RestClient.IIdentity[], operationScope: IOperationScope, identityType: IIdentityType, successCallback: (images: IDictionaryStringTo<string>) => void, errorCallback?: (errorData?: any) => void, options?: IIdentityServiceOptions): void;
}
export interface IUserMruServiceOptions {
    /**
    *   The httpClient that should be used instead of the CommonIdentityPickerHttpClient
    **/
    httpClient?: Identities_Picker_RestClient.AbstractMruServiceHttpClient;
}
export interface MruScope {
    /**
    *   Identities in the current account that have been "bound" using the SPS Identity service
    **/
    AccountBound: string;
}
/**
*   Returns MRU identities (across all IdentityTypeFilters) for the querying user at the specified scope (currently IMS Account bind-pended identities only)
**/
export interface IUserMruService {
    getIdentities(prefix: string, operationScope: MruScope, options?: IUserMruServiceOptions): IPromise<Identities_Picker_RestClient.IIdentity[]>;
    getIdentity(objectId: string, operationScope: MruScope, options?: IUserMruServiceOptions): IPromise<Identities_Picker_RestClient.IIdentity>;
    removeIdentity(objectId: string, operationScope: MruScope, options?: IUserMruServiceOptions): IPromise<boolean>;
    addIdentity(identity: Identities_Picker_RestClient.IIdentity, operationScope: MruScope, options?: IUserMruServiceOptions): IPromise<boolean>;
}
export class UserMruService extends Service.VssService implements IUserMruService {
    getIdentities(prefix: string, operationScope: MruScope, options?: IUserMruServiceOptions): IPromise<Identities_Picker_RestClient.IIdentity[]>;
    getIdentity(objectId: string, operationScope: MruScope, options?: IUserMruServiceOptions): IPromise<Identities_Picker_RestClient.IIdentity>;
    removeIdentity(objectId: string, operationScope: MruScope, options?: IUserMruServiceOptions): IPromise<boolean>;
    addIdentity(identity: Identities_Picker_RestClient.IIdentity, operationScope: MruScope, options?: IUserMruServiceOptions): IPromise<boolean>;
}
}
declare module "VSS/Identities/RestClient" {
import Contracts = require("VSS/Identities/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_DelegatedAuthorization_Contracts = require("VSS/DelegatedAuthorization/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class IdentitiesHttpClient extends VSS_WebApi.VssHttpClient {
    constructor(rootRequestPath: string);
    /**
     * @param {any} container
     * @return IPromise<Contracts.Identity[]>
     */
    createGroups(container: any): IPromise<Contracts.Identity[]>;
    /**
     * @param {string} groupId
     * @return IPromise<void>
     */
    deleteGroup(groupId: string): IPromise<void>;
    /**
     * @param {string} scopeIds
     * @param {boolean} recurse
     * @param {boolean} deleted
     * @param {string} properties
     * @return IPromise<Contracts.Identity[]>
     */
    listGroups(scopeIds?: string, recurse?: boolean, deleted?: boolean, properties?: string): IPromise<Contracts.Identity[]>;
    /**
     * @param {number} identitySequenceId
     * @param {number} groupSequenceId
     * @param {string} scopeId
     * @return IPromise<Contracts.ChangedIdentities>
     */
    getIdentityChanges(identitySequenceId: number, groupSequenceId: number, scopeId?: string): IPromise<Contracts.ChangedIdentities>;
    /**
     * @param {string} descriptors
     * @param {string} identityIds
     * @param {string} searchFilter
     * @param {string} filterValue
     * @param {Contracts.QueryMembership} queryMembership
     * @param {string} properties
     * @param {boolean} includeRestrictedVisibility
     * @param {Contracts.ReadIdentitiesOptions} options
     * @return IPromise<Contracts.Identity[]>
     */
    readIdentities(descriptors?: string, identityIds?: string, searchFilter?: string, filterValue?: string, queryMembership?: Contracts.QueryMembership, properties?: string, includeRestrictedVisibility?: boolean, options?: Contracts.ReadIdentitiesOptions): IPromise<Contracts.Identity[]>;
    /**
     * @param {string} scopeId
     * @param {Contracts.QueryMembership} queryMembership
     * @param {string} properties
     * @return IPromise<Contracts.Identity[]>
     */
    readIdentitiesByScope(scopeId: string, queryMembership?: Contracts.QueryMembership, properties?: string): IPromise<Contracts.Identity[]>;
    /**
     * @param {string} identityId
     * @param {Contracts.QueryMembership} queryMembership
     * @param {string} properties
     * @return IPromise<Contracts.Identity>
     */
    readIdentity(identityId: string, queryMembership?: Contracts.QueryMembership, properties?: string): IPromise<Contracts.Identity>;
    /**
     * @param {VSS_Common_Contracts.VssJsonCollectionWrapperV<Contracts.Identity[]>} identities
     * @return IPromise<Contracts.IdentityUpdateData[]>
     */
    updateIdentities(identities: VSS_Common_Contracts.VssJsonCollectionWrapperV<Contracts.Identity[]>): IPromise<Contracts.IdentityUpdateData[]>;
    /**
     * @param {Contracts.Identity} identity
     * @param {string} identityId
     * @return IPromise<void>
     */
    updateIdentity(identity: Contracts.Identity, identityId: string): IPromise<void>;
    /**
     * @param {Contracts.FrameworkIdentityInfo} frameworkIdentityInfo
     * @return IPromise<Contracts.Identity>
     */
    createIdentity(frameworkIdentityInfo: Contracts.FrameworkIdentityInfo): IPromise<Contracts.Identity>;
    /**
     * @param {Contracts.IdentityBatchInfo} batchInfo
     * @return IPromise<Contracts.Identity[]>
     */
    readIdentityBatch(batchInfo: Contracts.IdentityBatchInfo): IPromise<Contracts.Identity[]>;
    /**
     * @param {string} scopeId
     * @return IPromise<Contracts.IdentitySnapshot>
     */
    getIdentitySnapshot(scopeId: string): IPromise<Contracts.IdentitySnapshot>;
    /**
     * @return IPromise<Contracts.IdentitySelf>
     */
    getSelf(): IPromise<Contracts.IdentitySelf>;
    /**
     * @param {string} containerId
     * @param {string} memberId
     * @return IPromise<boolean>
     */
    addMember(containerId: string, memberId: string): IPromise<boolean>;
    /**
     * @param {string} containerId
     * @param {string} memberId
     * @param {Contracts.QueryMembership} queryMembership
     * @return IPromise<Contracts.IdentityDescriptor>
     */
    readMember(containerId: string, memberId: string, queryMembership?: Contracts.QueryMembership): IPromise<Contracts.IdentityDescriptor>;
    /**
     * @param {string} containerId
     * @param {Contracts.QueryMembership} queryMembership
     * @return IPromise<Contracts.IdentityDescriptor[]>
     */
    readMembers(containerId: string, queryMembership?: Contracts.QueryMembership): IPromise<Contracts.IdentityDescriptor[]>;
    /**
     * @param {string} containerId
     * @param {string} memberId
     * @return IPromise<boolean>
     */
    removeMember(containerId: string, memberId: string): IPromise<boolean>;
    /**
     * @param {string} memberId
     * @param {string} containerId
     * @param {Contracts.QueryMembership} queryMembership
     * @return IPromise<Contracts.IdentityDescriptor>
     */
    readMemberOf(memberId: string, containerId: string, queryMembership?: Contracts.QueryMembership): IPromise<Contracts.IdentityDescriptor>;
    /**
     * @param {string} memberId
     * @param {Contracts.QueryMembership} queryMembership
     * @return IPromise<Contracts.IdentityDescriptor[]>
     */
    readMembersOf(memberId: string, queryMembership?: Contracts.QueryMembership): IPromise<Contracts.IdentityDescriptor[]>;
    /**
     * @param {Contracts.CreateScopeInfo} info
     * @param {string} scopeId
     * @return IPromise<Contracts.IdentityScope>
     */
    createScope(info: Contracts.CreateScopeInfo, scopeId: string): IPromise<Contracts.IdentityScope>;
    /**
     * @param {string} scopeId
     * @return IPromise<void>
     */
    deleteScope(scopeId: string): IPromise<void>;
    /**
     * @param {string} scopeId
     * @return IPromise<Contracts.IdentityScope>
     */
    getScopeById(scopeId: string): IPromise<Contracts.IdentityScope>;
    /**
     * @param {string} scopeName
     * @return IPromise<Contracts.IdentityScope>
     */
    getScopeByName(scopeName: string): IPromise<Contracts.IdentityScope>;
    /**
     * @param {Contracts.IdentityScope} renameScope
     * @param {string} scopeId
     * @return IPromise<void>
     */
    renameScope(renameScope: Contracts.IdentityScope, scopeId: string): IPromise<void>;
    /**
     * @return IPromise<VSS_DelegatedAuthorization_Contracts.AccessTokenResult>
     */
    getSignoutToken(): IPromise<VSS_DelegatedAuthorization_Contracts.AccessTokenResult>;
    /**
     * @param {string} tenantId
     * @return IPromise<Contracts.TenantInfo>
     */
    getTenant(tenantId: string): IPromise<Contracts.TenantInfo>;
}
}
declare module "VSS/Locations" {
import Contracts_Platform = require("VSS/Common/Contracts/Platform");
/**
* Options for generating content urls
*/
export interface ContentLocationOptions {
    /**
    * Unique id of the service to generate the url for
    */
    serviceInstanceId?: string;
    /**
    * Specific web context to use when generating the url
    */
    webContext?: Contracts_Platform.WebContext;
    /**
    * Host level to get the url of
    */
    hostType?: Contracts_Platform.ContextHostType;
    /**
    * Relative path to append to the url
    */
    relativePath?: string;
    /**
    * Query parameters to add to the url
    */
    queryParams?: IDictionaryStringTo<string>;
}
/**
* Options for generating MVC urls
*/
export interface MvcRouteOptions {
    /**
    * Unique id of the service to generate the url for
    */
    serviceInstanceId?: string;
    /**
    * Specific web context to use when generating the url
    */
    webContext?: Contracts_Platform.WebContext;
    /**
    * Navigation level at which to generate the url (Deployment, Account, Collection, Project, Team)
    */
    level?: Contracts_Platform.NavigationContextLevels;
    /**
    * Route Area (e.g. "admin") or null/undefined for the default
    */
    area?: string;
    /**
    * MVC controller name
    */
    controller?: string;
    /**
    * Controller action
    */
    action?: string;
    /**
    * Array of parameters (path parts) to append to the path (after controller and action)
    */
    parameters?: string[];
    /**
    * Override the project in the web context
    */
    project?: string;
    /**
    * Override the team in the web context
    */
    team?: string;
    /**
    * Query parameters to add to the url
    */
    queryParams?: IDictionaryStringTo<string>;
}
/**
* Helper class for generating urls
*/
export class UrlHelper {
    private static SAFE_URI_SCHEME_LIST;
    private _areaPrefix;
    private _controllerPrefix;
    constructor(areaPrefix?: string, controllerPrefix?: string);
    /**
    * Get the url of particular content. If a service id is specified, its url needs to already be in the cached locations.
    *
    * @param options Url generation options
    * @return The generated url string
    */
    getContentUrl(options: ContentLocationOptions): string;
    /**
    * Get the url of a versioned _content file from the hosting page's service.
    *
    * @param contentFileName filename relative to "/_static/tfs/{Version}/_content/"
    * @return The generated url string
    */
    getVersionedContentUrl(contentFileName: string): string;
    /**
    * Get the url of an MVC endpoint. If a service id is specified, its url needs to already be in the cached locations.
    *
    * @param options Url generation options
    * @return The generated url string
    */
    getMvcUrl(options: MvcRouteOptions): string;
    /**
     * Check if specified URL is safe - i.e. part of an approved list of URL schemes.
     *
     * @param url Url to check
     * @return
     */
    isSafeProtocol(url: string): boolean;
}
/**
* Url helper which provides methods for generating urls
*/
export var urlHelper: UrlHelper;
/**
* Get the url for the given service if its location has already been cached
*
* @param serviceInstanceId Unique id for the service
* @param hostType The host level to get the url for
* @param webContext The original context to get the url for
* @return Url if the location could be resolved
*/
export function getCachedServiceLocation(serviceInstanceId: string, hostType: Contracts_Platform.ContextHostType, webContext?: Contracts_Platform.WebContext): string;
/**
* Get the url for the given service
* @param serviceInstanceId Unique id for the service
* @param hostType The host level to get the url for
* @param webContext The original context to get the url for
* @return Promise that resolves to the location string
*/
export function beginGetServiceLocation(serviceInstanceId: string, hostType: Contracts_Platform.ContextHostType, webContext?: Contracts_Platform.WebContext): IPromise<string>;
}
declare module "VSS/Locations/Contracts" {
import VSS_Identities_Contracts = require("VSS/Identities/Contracts");
export interface AccessMapping {
    accessPoint: string;
    displayName: string;
    moniker: string;
}
/**
* Data transfer class that holds information needed to set up a connection with a VSS server.
*/
export interface ConnectionData {
    /**
    * The Id of the authenticated user who made this request. More information about the user can be obtained by passing this Id to the Identity service
    */
    authenticatedUser: VSS_Identities_Contracts.Identity;
    /**
    * The Id of the authorized user who made this request. More information about the user can be obtained by passing this Id to the Identity service
    */
    authorizedUser: VSS_Identities_Contracts.Identity;
    /**
    * The instance id for this server.
    */
    instanceId: string;
    /**
    * Data that the location service holds.
    */
    locationServiceData: LocationServiceData;
    /**
    * The virtual directory of the host we are talking to.
    */
    webApplicationRelativeDirectory: string;
}
export enum InheritLevel {
    None = 0,
    Deployment = 1,
    Account = 2,
    Collection = 4,
    All = 7,
}
export interface LocationMapping {
    accessMappingMoniker: string;
    location: string;
}
/**
* Data transfer class used to transfer data about the location service data over the web service.
*/
export interface LocationServiceData {
    /**
    * Data about the access mappings contained by this location service.
    */
    accessMappings: AccessMapping[];
    /**
    * Data that the location service holds.
    */
    clientCacheFresh: boolean;
    /**
    * The time to live on the location service cache.
    */
    clientCacheTimeToLive: number;
    /**
    * The default access mapping moniker for the server.
    */
    defaultAccessMappingMoniker: string;
    /**
    * The obsolete id for the last change that took place on the server (use LastChangeId64).
    */
    lastChangeId: number;
    /**
    * The non-truncated 64-bit id for the last change that took place on the server.
    */
    lastChangeId64: number;
    /**
    * Data about the service definitions contained by this location service.
    */
    serviceDefinitions: ServiceDefinition[];
    /**
    * The identifier of the deployment which is hosting this location data (e.g. SPS, TFS, ELS, Napa, etc.)
    */
    serviceOwner: string;
}
export enum RelativeToSetting {
    Context = 0,
    WebApplication = 2,
    FullyQualified = 3,
}
export interface ServiceDefinition {
    description: string;
    displayName: string;
    identifier: string;
    inheritLevel: InheritLevel;
    locationMappings: LocationMapping[];
    /**
    * Maximum api version that this resource supports (current server version for this resource). Copied from ApiResourceLocation.
    */
    maxVersion: string;
    /**
    * Minimum api version that this resource supports. Copied from ApiResourceLocation.
    */
    minVersion: string;
    parentIdentifier: string;
    parentServiceType: string;
    properties: any;
    relativePath: string;
    relativeToSetting: RelativeToSetting;
    /**
    * The latest version of this resource location that is in &quot;Release&quot; (non-preview) mode. Copied from ApiResourceLocation.
    */
    releasedVersion: string;
    /**
    * The current resource version supported by this resource location. Copied from ApiResourceLocation.
    */
    resourceVersion: number;
    serviceType: string;
    status: ServiceStatus;
}
export enum ServiceStatus {
    Assigned = 0,
    Active = 1,
    Moving = 2,
}
export var TypeInfo: {
    AccessMapping: {
        fields: any;
    };
    ConnectionData: {
        fields: any;
    };
    InheritLevel: {
        enumValues: {
            "none": number;
            "deployment": number;
            "account": number;
            "collection": number;
            "all": number;
        };
    };
    LocationMapping: {
        fields: any;
    };
    LocationServiceData: {
        fields: any;
    };
    RelativeToSetting: {
        enumValues: {
            "context": number;
            "webApplication": number;
            "fullyQualified": number;
        };
    };
    ServiceDefinition: {
        fields: any;
    };
    ServiceStatus: {
        enumValues: {
            "assigned": number;
            "active": number;
            "moving": number;
        };
    };
};
}
declare module "VSS/Locations/RestClient" {
import Contracts = require("VSS/Locations/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class LocationsHttpClient extends VSS_WebApi.VssHttpClient {
    constructor(rootRequestPath: string);
    /**
     * This was copied and adapted from TeamFoundationConnectionService.Connect()
     *
     * @param {VSS_Common_Contracts.ConnectOptions} connectOptions
     * @param {number} lastChangeId - Obsolete 32-bit LastChangeId
     * @param {number} lastChangeId64 - Non-truncated 64-bit LastChangeId
     * @return IPromise<Contracts.ConnectionData>
     */
    getConnectionData(connectOptions?: VSS_Common_Contracts.ConnectOptions, lastChangeId?: number, lastChangeId64?: number): IPromise<Contracts.ConnectionData>;
    /**
     * @param {string} serviceType
     * @param {string} identifier
     * @return IPromise<void>
     */
    deleteServiceDefinition(serviceType: string, identifier: string): IPromise<void>;
    /**
     * @param {string} serviceType
     * @param {string} identifier
     * @return IPromise<Contracts.ServiceDefinition>
     */
    getServiceDefinition(serviceType: string, identifier: string): IPromise<Contracts.ServiceDefinition>;
    /**
     * @param {string} serviceType
     * @return IPromise<Contracts.ServiceDefinition[]>
     */
    getServiceDefinitions(serviceType?: string): IPromise<Contracts.ServiceDefinition[]>;
    /**
     * @param {VSS_Common_Contracts.VssJsonCollectionWrapperV<Contracts.ServiceDefinition[]>} serviceDefinitions
     * @return IPromise<void>
     */
    updateServiceDefinitions(serviceDefinitions: VSS_Common_Contracts.VssJsonCollectionWrapperV<Contracts.ServiceDefinition[]>): IPromise<void>;
}
}
declare module "VSS/Operations/Contracts" {
/**
* Represents an async operation and its progress or result information.
*/
export interface Operation extends OperationReference {
    /**
    * The links to other objects related to this object.
    */
    _links: any;
}
/**
* Reference for an async operation.
*/
export interface OperationReference {
    /**
    * The identifier for this operation.
    */
    id: string;
    /**
    * The current status of the operation.
    */
    status: OperationStatus;
    /**
    * Url to get the full object.
    */
    url: string;
}
export enum OperationStatus {
    /**
    * The operation object does not have the status set.
    */
    NotSet = 0,
    /**
    * The operation has been queued.
    */
    Queued = 1,
    /**
    * The operation is in progress.
    */
    InProgress = 2,
    /**
    * The operation was cancelled by the user.
    */
    Cancelled = 3,
    /**
    * The operation completed successfully.
    */
    Succeeded = 4,
    /**
    * The operation completed with a failure.
    */
    Failed = 5,
}
export var TypeInfo: {
    Operation: {
        fields: any;
    };
    OperationReference: {
        fields: any;
    };
    OperationStatus: {
        enumValues: {
            "notSet": number;
            "queued": number;
            "inProgress": number;
            "cancelled": number;
            "succeeded": number;
            "failed": number;
        };
    };
};
}
declare module "VSS/Operations/RestClient" {
import Contracts = require("VSS/Operations/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class OperationsHttpClient extends VSS_WebApi.VssHttpClient {
    constructor(rootRequestPath: string);
    /**
     * Gets an operation from the the Id.
     *
     * @param {string} operationId - The id for the operation.
     * @return IPromise<Contracts.Operation>
     */
    getOperation(operationId: string): IPromise<Contracts.Operation>;
}
}
declare module "VSS/SDK.Host" {
import CommonControls = require("VSS/Controls/Common");
/**
* Class which manages showing dialogs in the parent frame
*/
export class HostDialogService implements IHostDialogService {
    /**
    * Open a modal dialog in the host frame which will get its content from a contributed control.
    *
    * @param contribution url for dialog contents
    * @param dialogOptions options.title - title of dialog
    * @param contributionConfig Initial configuration to pass to the contribution control.
    * @param postContent Optional data to post to the contribution endpoint. If not specified, a GET request will be performed.
    */
    openDialog(contribution: IContribution, dialogOptions: IHostDialogOptions, contributionConfig?: Object, postContent?: Object): IPromise<IExternalDialog>;
}
/**
* Represents a dialog which hosts an ExternalPart.
*/
export class ExternalDialog extends CommonControls.ModalDialog implements IExternalDialog {
    private _loadingPromise;
    private _contribution;
    initializeOptions(options?: any): void;
    initialize(): void;
    /**
    * Gets an object registered in the dialog's contribution control.
    *
    * @param instanceId Id of the instance to get
    * @param contextData Optional data to pass to the extension for it to use when creating the instance
    * @return Promise that is resolved to the instance (a proxy object that talks to the instance)
    */
    getContributionInstance<T>(instanceId: string, contextData?: any): IPromise<T>;
    onOkClick(e?: JQueryEventObject): any;
}
/**
* Class which manages history of the parent frame
*/
export class HostHistoryManager implements IHostHistoryService {
    /**
    * Add a callback to be invoked each time the hash navigation has changed
    *
    * @param callback Method invoked on each navigation hash change
    */
    onHashChanged(callback: (hash: string) => void): void;
    /**
    * Gets the current hash.
    */
    getHash(): any;
    /**
     * Reloads the parent frame
     */
    reload(): void;
    /**
    * Sets the provided hash from the hosted content.
    */
    setHash(hash: string): void;
    /**
    * Replace existing hash with the provided hash from the hosted content.
    */
    replaceHash(hash: string): void;
}
}
declare module "VSS/Search" {
export class SearchCore {
    private _strategy;
    private _adapter;
    /**
     * The search core, allows users to perform searches on data using a custom strategy.
     *
     * @param strategy The search strategy to use.
     * @param adapter The search adapter to use.
     */
    constructor(strategy: SearchStrategy, adapter: SearchAdapter);
    /**
     * Add items to the search strategy
     *
     * @param items Items to add
     */
    addItems(items: any[]): void;
    /**
     * Performs a search using the Indexer and then runs the adapter's resultHandler on the results
     *
     * @param query Query to run search on
     */
    beginSearch(query: string): void;
    /**
     * Returns the search strategy currently being used.
     *
     * @return The strategy in use
     */
    getStrategy(): SearchStrategy;
    /**
     * Clears the stored items in the strategy
     */
    clearStrategyStore(): void;
}
export interface ISearchStrategyOptions {
    specialCharacters?: string[];
    delimiter?: string;
}
export class SearchStrategy {
    /**
     * Tokenizes the searchText into separate words using a regex.
     *
     * @param searchText The searchText to split up.
     * @return An array of strings, the separate words.
     */
    static getTerms(searchText: string[], delimiter?: string): any[];
    private _options;
    private _specialCharactersHashSet;
    /**
     * Abstract Class to inherit from in order to implement the methods needed to store items and search on them.
     */
    constructor(options?: ISearchStrategyOptions);
    private _buildSpecialCharacterHashSet(specialCharacters);
    _getTerms(searchTerms: string[]): string[];
    /**
     *     Stores items and terms for each item in order to later retrieve
     *     and search upon.
     *
     * @param searchableObjects SearchableObjects to add
     */
    processItems(searchableObjects: any[]): void;
    /**
     * Clears the items stored in the strategy.
     */
    clearStrategyStore(): void;
    /**
     *     Searches the item store for the query given to it. Returns an
     *     array of documents representing the documents which match the query.
     *
     * @param query The query to search for
     * @return The list of items which match the query
     */
    search(query: string): any[];
    /**
     * Checks whether data exists in the search strategy
     *
     * @return True if data exists in the strategy, false if it doesn't.
     */
    dataExists(): boolean;
    /**
     * Return the total count of item indexed.
     */
    getIndexedItemsCount(): number;
    /**
     * Return the total size of the indexed store.
     */
    getIndexTotalSize(): number;
}
export class IndexedSearchStrategy extends SearchStrategy {
    private _searchStore;
    private _dataExists;
    private _indexedItems;
    constructor(store?: IndexedSearchStore, options?: ISearchStrategyOptions);
    getIndexTotalSize(): number;
    /**
     * Clears the items stored in the strategy.
     */
    clearStrategyStore(): void;
    /**
     * Return the total count of item indexed.
     */
    getIndexedItemsCount(): any;
    /**
     * Processes all SearchableObjects and adds them to the index
     *
     * @param searchableObjects SearchableObjects to add
     */
    processItems(searchableObjects: any[]): void;
    /**
     * Performs a search using the Indexer and then runs the resultHandler on the results.
     *
     * @param query Query to run search on
     * @return The search results
     */
    search(query: string): any[];
    /**
     * Checks whether data exists in the search strategy
     *
     * @return True if data exists in the strategy, false if it doesn't.
     */
    dataExists(): boolean;
}
export class IndexedSearchStore {
    /**
     *  Abstract function allowing for additional stores for an IndexedSearchStrategy
     */
    constructor();
    /**
     * Runs a query on the index.
     *
     * @param query The query to run.
     * @return An array of items, representing the results.
     */
    search(query: string): any[];
    /**
     * Adds an item to the index, under its token and its subparts.
     *
     * @param item The item to add to the index.
     * @param tokens The tokens to add the item under.
     */
    addToIndex(item: any, tokens: any[]): void;
    /**
     * Clears the items stored in the strategy.
     */
    clearStrategyStore(): void;
    /**
     * totalsize of the index store
     */
    getStoreTotalSize(): number;
}
export class TrieStore extends IndexedSearchStore {
    private _trie;
    constructor();
    search(query: string): any[];
    /**
     * Adds an item to the index, under its token and its subparts.
     *
     * @param item The item to add to the index.
     * @param tokens The tokens to add the item under.
     */
    addToIndex(item: any, tokens: any[]): void;
    clearStrategyStore(): void;
    getStoreTotalSize(): number;
}
export class InvertedIndexStore extends IndexedSearchStore {
    private _index;
    private _tokenCache;
    constructor();
    /**
     * Runs a query on the index.
     *
     * @param query The query to run.
     * @return An array of items, representing the results.
     */
    search(query: string): any[];
    /**
     * Adds an item to the index, under its token and its subparts.
     *
     * @param item The item to add to the index.
     * @param tokens The tokens to add the item under.
     */
    addToIndex(item: any, tokens: any[]): void;
    /**
     * Clears the items stored in the strategy.
     */
    clearStrategyStore(): void;
    /**
     * Adds a item to the index, under a single key's location.
     *
     * @param item The item to add.
     * @param key The key to add the item under
     */
    private _addItemToIndex(item, key);
}
export class SearchAdapter {
    /**
     * Abstract Class to inherit from in order to implement the UI methods for search.
     */
    constructor();
    /**
     * Adds additional items to the search strategy
     *
     * @param addItemsCallback The function which adds items to the search strategy.
     * @param searchCallback The function which searches the newly updated strategy.
     */
    addMoreItems(addItemsCallback: Function, searchCallback: () => any): void;
    /**
     * Creates SearchableObjects for all available work items
     *
     * @return An array of SearchableObjects.
     */
    createSearchableObjects(): any[];
    /**
     *     Handles the results in the UI by filtering through all available items to the ones
     *     provided in the results array.
     *
     * @param results An array of items
     * @param finished Represents whether or not the search is finished
     */
    handleResults(results: any[], finished: boolean): void;
    /**
     *     Handles an error being thrown in the search process.
     *
     * @param message Specific error message if provided.
     */
    handleError(message: string): void;
    /**
     *     Handles the search results being cleared and the view resetting to normal.
     */
    handleClear(): void;
    /**
     *     Returns whether or not there is more data to be loaded.
     *
     * @return True if no more data needs to be loaded, false otherwise
     */
    isDataSetComplete(): boolean;
}
export class SearchableObject {
    item: any;
    terms: any;
    /**
     * Represents a single item to be placed in the index.
     *
     * @param item The item to be added
     * @param terms The terms associated to the item.
     */
    constructor(item: any, terms: any[]);
    /**
     * Set the terms for this item
     *
     * @param terms The new terms
     */
    setTerms(terms: any[]): void;
    /**
     * Add a term to the item
     *
     * @param term The additional term
     */
    addTerm(term: string): void;
}
}
declare module "VSS/Serialization" {
/**
 * Metadata for deserializing an enum field on a contract/type
 */
export interface ContractEnumMetadata {
    enumValues?: {
        [name: string]: number;
    };
}
/**
 * Metadata for deserializing a particular field on a contract/type
 */
export interface ContractFieldMetadata {
    isArray?: boolean;
    isDate?: boolean;
    enumType?: ContractEnumMetadata;
    typeInfo?: ContractMetadata;
    isDictionary?: boolean;
    dictionaryKeyIsDate?: boolean;
    dictionaryValueIsDate?: boolean;
    dictionaryKeyEnumType?: ContractEnumMetadata;
    dictionaryValueEnumType?: ContractEnumMetadata;
    dictionaryValueTypeInfo?: ContractMetadata;
    dictionaryValueFieldInfo?: ContractFieldMetadata;
}
/**
 * Metadata required for deserializing a given type
 */
export interface ContractMetadata {
    fields?: {
        [fieldName: string]: ContractFieldMetadata;
    };
}
/**
 * Module for handling serialization and deserialization of data contracts
 * (contracts sent from the server using the VSO default REST api serialization settings)
 */
export module ContractSerializer {
    /**
     * Process a contract in its raw form (e.g. date fields are Dates, and Enums are numbers) and
     * return a pure JSON object that can be posted to REST endpoint.
     *
     * @param data The object to serialize
     * @param contractMetadata The type info/metadata for the contract type being serialized
     * @param preserveOriginal If true, don't modify the original object. False modifies the original object (the return value points to the data argument).
     */
    function serialize(data: any, contractMetadata: ContractMetadata, preserveOriginal?: boolean): any;
    /**
     * Process a pure JSON object (e.g. that came from a REST call) and transform it into a JS object
     * where date strings are converted to Date objects and enum values are converted from strings into
     * their numerical value.
     *
     * @param data The object to deserialize
     * @param contractMetadata The type info/metadata for the contract type being deserialize
     * @param preserveOriginal If true, don't modify the original object. False modifies the original object (the return value points to the data argument).
     * @param unwrapWrappedCollections If true check for wrapped arrays (REST apis will not return arrays directly as the root result but will instead wrap them in a { values: [], count: 0 } object.
     */
    function deserialize(data: any, contractMetadata: ContractMetadata, preserveOriginal?: boolean, unwrapWrappedCollections?: boolean): any;
}
/**
* Deserialize the JSON island data that is stored in the given element
*
* @param $element JQuery element containing the JSON to deserialize
* @param contractMetadata The type info/metadata for the contract type being deserialize
* @param removeElement If true remove the element from the DOM after deserializing the content
*/
export function deserializeJsonIsland<T>($element: JQuery, contractMetadata: ContractMetadata, removeElement?: boolean): T;
}
declare module "VSS/Service" {
import Contracts_Platform = require("VSS/Common/Contracts/Platform");
import WebApi_RestClient = require("VSS/WebApi/RestClient");
/**
* A connection to a particular TeamFoundation host
*/
export class VssConnection {
    private static _connectionsCache;
    private _webContext;
    private _hostType;
    private _hostContext;
    private _services;
    private _httpClients;
    /**
    * Get a (cached) VssConnection object of the given type
    *
    * @param webContext Specific web context to get the connection for
    * @param hostType Host type to scope the connection to
    */
    static getConnection(webContext?: Contracts_Platform.WebContext, hostType?: Contracts_Platform.ContextHostType): VssConnection;
    /**
    * Get the host context information given a web context and the desired host type
    */
    private static getHostContext(webContext, hostType);
    /**
    * Create a new connection object
    * @param webContext Specific web context to get the connection for
    * @param hostType Host type to scope the connection to
    */
    constructor(webContext: Contracts_Platform.WebContext, hostType?: Contracts_Platform.ContextHostType);
    getWebContext(): Contracts_Platform.WebContext;
    /**
    * Gets the host information that this service is scoped to
    */
    getHostContext(): Contracts_Platform.HostContext;
    /**
    * Gets the host type that this service is scoped to
    */
    getHostType(): Contracts_Platform.ContextHostType;
    /**
    * Gets the relative service host url for this connection
    */
    getHostUrl(): string;
    /**
    * Gets a (potentially-cached) service associated with this connection
    */
    getService<T extends VssService>(serviceType: {
        new (): T;
    }, useCached?: boolean): T;
    /**
     * Returns a new or a cached instance of an httpClient for the given type.
     *
     * @param httpClientType Type of requeested httpClient.
     * @param serviceInstanceId Unique id of the service to scope the http client to
     * @return http client of the specified type (clients are cached for this connection)
     */
    getHttpClient<T extends WebApi_RestClient.VssHttpClient>(httpClientType: {
        new (url: string): T;
    }, serviceInstanceId?: string): T;
    /**
    * Get the url for the given service
    *
    * @param serviceInstanceId Unique identifier of the VSO service to get the url for
    * @param hostType The type of host to get the url for
    */
    beginGetServiceUrl(serviceInstanceId: string, hostType?: Contracts_Platform.ContextHostType): IPromise<string>;
    private _isSameOrigin(serviceUrl);
}
/**
* A client service which can be cached per TFS connection.
*/
export class VssService {
    private _connection;
    /**
    * Gets the relative location for the service's connection
    */
    getConnection(): VssConnection;
    getWebContext(): Contracts_Platform.WebContext;
    /**
    * Sets the VssConnection to use for this service
    * @param connection VssConnection used by this service
    */
    initializeConnection(connection: VssConnection): void;
}
/**
* Get a collection-level service
* @param serviceType Type of service to get
* @param webContext optional web context to use for the connection
* @return Collection-level service
*/
export function getCollectionService<T extends VssService>(serviceType: {
    new (): T;
}, webContext?: Contracts_Platform.WebContext): T;
/**
* Get an application-level (Account) service
* @param serviceType Type of service to get
* @param webContext optional web context to use for the connection
* @return Application-level service
*/
export function getApplicationService<T extends VssService>(serviceType: {
    new (): T;
}, webContext?: Contracts_Platform.WebContext): T;
/**
* Get a service for the web context's default host type
* @param serviceType Type of service to get
* @param webContext optional web context to use for the connection
* @return Collection-level or Application-level service
*/
export function getService<T extends VssService>(serviceType: {
    new (): T;
}, webContext?: Contracts_Platform.WebContext): T;
/**
* Get a collection-level HTTP client
* @param httpClientType Type of http client to get
* @param webContext optional web context to use for the connection
* @return collection-level client
*/
export function getCollectionClient<T extends WebApi_RestClient.VssHttpClient>(httpClientType: {
    new (url: string): T;
}, webContext?: Contracts_Platform.WebContext): T;
/**
* Get an application-level (Account) HTTP client
* @param httpClientType Type of http client to get
* @param webContext optional web context to use for the connection
* @return application-level client
*/
export function getApplicationClient<T extends WebApi_RestClient.VssHttpClient>(httpClientType: {
    new (url: string): T;
}, webContext?: Contracts_Platform.WebContext): T;
/**
* Get an http client for the web context's default host type
* @param serviceType Type of http client to get
* @param webContext optional web context to use for the connection
* @return Collection-level or Application-level http client
*/
export function getClient<T extends WebApi_RestClient.VssHttpClient>(httpClientType: {
    new (url: string): T;
}, webContext?: Contracts_Platform.WebContext): T;
}
declare module "VSS/Settings" {
import Service = require("VSS/Service");
/**
* Scope at which the local user setting applies
*/
export enum LocalSettingsScope {
    /**
    * Global (account-specific) settings for a user
    */
    Global = 0,
    /**
    * Project-specific settings for a user
    */
    Project = 1,
    /**
    * Team-specific settings for a user
    */
    Team = 2,
}
/**
* Service for reading and writing to local storage
*/
export class LocalSettingsService extends Service.VssService {
    private static GLOBAL_SETTING_KEY;
    private static PROJECT_SETTING_KEY;
    private static TEAM_SETTING_KEY;
    /**
     * Write a settings value to browser local storage
     *
     * @param key Key for the setting to be written. This key will be prefixed with a scope.
     * @param value Value for the setting to be written
     * @param scope Scope for the setting to apply to. This will determine the prefix to use at the beginning of the setting key.
     */
    write(key: string, value: any, scope?: LocalSettingsScope): void;
    /**
     * Read a setting from browser local storage.
     *
     * @param key Key for the setting to be written. This key will be prefixed with a scope.
     * @param defaultValue The value to return in case no setting exists
     * @param scope Scope for the setting to apply to. This will determine the prefix to use at the beginning of the setting key.
     * @return Value read from the setting or undefined if no value stored
     */
    read<T>(key: string, defaultValue?: T, scope?: LocalSettingsScope): T;
    private _getScopedKey(key, scope);
}
}
declare module "VSS/Telemetry/Contracts" {
export interface CustomerIntelligenceEvent {
    area: string;
    feature: string;
    properties: {
        [key: string]: any;
    };
}
export interface WebSessionToken {
    appId: string;
    force: boolean;
    name: string;
    token: string;
}
export var TypeInfo: {
    CustomerIntelligenceEvent: {
        fields: any;
    };
    WebSessionToken: {
        fields: any;
    };
};
}
declare module "VSS/Telemetry/RestClient" {
import Contracts = require("VSS/Telemetry/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CustomerIntelligenceHttpClient extends VSS_WebApi.VssHttpClient {
    constructor(rootRequestPath: string);
    /**
     * @param {Contracts.CustomerIntelligenceEvent[]} events
     * @return IPromise<void>
     */
    publishEvents(events: Contracts.CustomerIntelligenceEvent[]): IPromise<void>;
}
}
declare module "VSS/Telemetry/Services" {
/**
* Event data that can be published
*/
export class TelemetryEventData {
    area: string;
    feature: string;
    properties: {
        [key: string]: any;
    };
    elapsedTime: number;
    /**
     * Constructor for CIPublishPropertiesOptions.
     *
     * @param area The Customer Intelligence Area to publish to.
     * @param feature The feature name.
     * @param properties The key:value list of event properties.
     * @param elapsedTime The elapsedTime for the event. Defaults to Date.now() - startTime if startTime is supplied.
     * @param startTime The Date.now() at the start of the event process.
     */
    constructor(area: string, feature: string, properties: {
        [key: string]: any;
    }, startTime?: number, elapsedTime?: number);
    /**
    * Create Telemetry event data from a single property
    */
    static fromProperty(area: string, feature: string, property: string, value: any, startTime?: number, elapsedTime?: number): TelemetryEventData;
}
/**
* Publish event data to the CustomerIntelligence service and App insights.
* (events are queued and sent in delayed batches unless immediate = true is supplied)
*
* @param eventData telemetry event to publish
* @param immediate If true, make ajax calls to publish the event immediately. Otherwise queue the event and send in delayed batches.
*/
export function publishEvent(eventData: TelemetryEventData, immediate?: boolean): void;
}
declare module "VSS/Utils/Core" {
import Contracts_Platform = require("VSS/Common/Contracts/Platform");
export var OperationCanceledException: string;
export var utcOffset: number;
export var timeZoneMap: Contracts_Platform.DaylightSavingsAdjustmentEntry[];
/**
 * @param parameters
 * @param expectedParameters
 * @param validateParameterCount
 * @return
 */
export function validateParameters(parameters: any, expectedParameters: any, validateParameterCount?: boolean): Error;
/**
 * Wrap a function to ensure that a specific value of 'this' is passed to the function when it is invoked (regardless of the caller).
 *
 * @param instance The object that will be set to the value of 'this' when the function is invoked.
 * @param method The function to wrap.
 * @param data Arguments that will be appended to the arguments passed when the delegate is invoked.
 * @return The wrapper function
 */
export function delegate(instance: any, method: Function, data?: any): IArgsFunctionR<any>;
/**
 *     Curries a function with a set of arguments and returns the resulting function.
 *     When eventually evaluated, the returned function will call the original function
 *     with the current arguments prepended to the list of arguments.
 *
 *     var add3, result;
 *     function add(x, y) {
 *         return x + y;
 *     }
 *     add3 = add.curry(3);
 *     results = add3(4); // result === 7
 *
 *     See http://en.wikipedia.org/wiki/Curry_function
 *
 * @param fn
 * @param args
 */
export function curry(fn: Function, ...args: any[]): IArgsFunctionR<any>;
export function transformError(errorCallback?: IErrorCallback, message?: string, errorInfo?: any): IFunctionPR<MSAjaxError, void>;
export function transformError(errorCallback?: IErrorCallback, transform?: Function, errorInfo?: any): IFunctionPR<MSAjaxError, void>;
export function keys(obj: IDictionaryStringTo<any>, all?: boolean): string[];
export class DelayedFunction {
    private _interval;
    private _func;
    private _timeoutHandle;
    private _name;
    /**
     * Creates an object that can be used to delay-execute the specified method.
     *
     * @param instance Context to use when calling the provided function
     * @param ms Delay in milliseconds to wait before executing the Function
     * @param name Name to use when tracing this delayed function
     * @param method Method to execute
     * @param data Arguments to pass to the method
     */
    constructor(instance: any, ms: number, name: string, method: Function, data?: any[]);
    /**
     * Starts the timer (if not already started) which will invoke the method once expired.
     */
    start(): void;
    /**
     * Resets the timer (cancel, then re-start) which will invoke the method once expired.
     */
    reset(): void;
    /**
     * Cancels any pending operation (stops the timer).
     */
    cancel(): void;
    /**
     * Invokes the method immediately (canceling an existing timer).
     */
    invokeNow(): void;
    /**
     * Modifies the length of the delay timer (for subsequent starts).
     *
     * @param ms Delay in milliseconds to wait before executing the Function
     */
    setDelay(ms: number): void;
    /**
     * Modify the method being executed.
     *
     * @param instance Context to use when calling the provided function
     * @param method Method to execute
     * @param data (Optional) arguments to pass to the method
     */
    setMethod(instance: any, method: Function, data?: any[]): void;
    /**
     * Is the timer currently running (operation in progress)
     *
     * @return True if this operation is already in progress
     */
    isPending(): boolean;
}
/**
 * Executes the provided function after the specified amount of time
 *
 * @param instance Context to use when calling the provided function
 * @param ms Delay in milliseconds to wait before executing the Function
 * @param method Method to execute
 * @param data Arguments to pass to the method
 * @return The delayed function that was started
 */
export function delay(instance: any, ms: number, method: Function, data?: any[]): DelayedFunction;
/**
 * Creates a delegate that is delayed for the specified interval when invoked. Subsequent calls to the returned delegate reset the timer.
 *
 * @param instance Context to use when calling the provided function
 * @param ms Delay in milliseconds to wait before executing the Function
 * @param method Method to execute
 * @param data Arguments to pass to the method
 * @return The delayed delegate function.
 */
export function throttledDelegate(instance: any, ms: number, method: Function, data?: any[]): Function;
/**
 * Executes the provided function after the specified amount of time
 *
 * @param callback Function to execute
 * @param delay Delay in milliseconds to wait before executing the Function
 * @param firstDelay Delay in milliseconds to wait before executing the Function for the first time (default 0)
 * @param method Method to execute
 */
export function poll(callback: IFunctionPR<IArgsFunctionR<any>, void>, delay: number, firstDelay?: number): void;
/**
 * Splits a string that contains a list of comma-separated (signed) integer values into an array
 *
 * @param stringRepresentation String representation of comma-separated integer array
 * @return Array of parsed integers
 */
export function parseIntArray(stringRepresentation: string): number[];
export class Cancelable {
    private _callbacks;
    canceled: boolean;
    context: any;
    /**
     * Manage cancellable operations.
     *
     * @param context The context for the cancellable operation.
     * The context is passed to actions when they are called.
     */
    constructor(context: any);
    /**
     * Perform the action if not cancelled.
     *
     * @param action The action to call if the current operation has not been cancelled.
     */
    perform(action: Function): void;
    /**
     * Wrap an action to make it cancellable.
     *
     * @param action The action to wrap.
     * @return The cancellable action.
     */
    wrap(action: Function): IFunctionPR<void, any>;
    /**
     * Cancel the operation.
     */
    cancel(): void;
    /**
     * Register a callback to be called when the object is cancelled.
     *
     * @param callback The callback function.
     */
    register(callback: Function): void;
}
export class TypeFactory {
    private _ctors;
    /**
     * An add-in object used to extend a constructor function's behavior to allow it to
     * act as a factory for registered sub-classes. Instances can be created by passing the appropriate
     * registration key and constructor arguments.
     *
     * Usage:
     *     function Foo() {... }
     *     Foo.extend(new TypeFactory());
     *
     *     function Bar(arg1, arg2) {...}
     *     Bar.inherit(Foo, { });
     *     Foo.registerConstructor("bar", Bar);
     *
     *     var bar = Foo.createInstance("bar", [arg1value, arg2value]);
     */
    constructor();
    /**
     * Register a constructor with the factory
     *
     * @param key The key for the constructor that is use later when creating instances.
     * @param ctor The constructor being registered.
     */
    registerConstructor(key: string, ctor: Function): void;
    /**
     * Get the constructor registered with the specified key.
     *
     * @param key The key to use when looking up the registered constructor.
     * @return Returns the constructor registered with the specified key, or undefined.
     */
    getConstructor(key: string): Function;
    /**
     * Create an instance of a registered type.
     *
     * @param key The key for the registered constructor function.
     * @param args Arguments to pass to the constructor function.
     * @return An instance of the type registered with the key.
     */
    createInstance(key: string, args?: any[]): any;
}
/**
 * Gets the anti-forgery token value.
 *
 * @return The INPUT element that holds the token value.
 */
export function getAntiForgeryTokenValue(): string;
/**
 * Get the anti-forgery token value (version 2).
 *
 * @return The INPUT element that holds the token value.
 */
export function getAntiForgeryTokenValue2(): string;
/**
 * Set a token on the specified to the current anti-forgery token. Expects an INPUT element with a specific name - __RequestVerificationToken
 *
 * @param form The form on which to look for the INPUT element.
 * @return The form value (if the token was set), otherwise undefined.
 */
export function setAntiForgeryToken(form: JQuery): JQuery;
export class StringBuilder {
    private _textBuilder;
    /**
     * Utility class for building strings - similar to the System.Text.StringBuilder .NET class.
     */
    constructor();
    /**
     * Appends the specified text to the end of the string buffer.
     *
     * @param text The text to append.
     */
    append(text: string): void;
    /**
     * Appends a new-line to the current text buffer.
     */
    appendNewLine(): void;
    /**
     * Concatenates all text in the string buffer into a single string value.
     *
     * @return The string version of the accumulated text.
     */
    toString(): string;
}
export class OperationQueue {
    private _operationQueue;
    private _isProcessingOperation;
    /**
     * Allows for sequential processing of asyncronous operations.
     */
    constructor();
    /**
     * Queues the provided operation.  Operations are processed sequentially.
     *
     * @param operation
     * Function for the operation to be performed.  The function should have the following signature:
     *         function operation(completedCallback)
     *
     * The completed callback needs to be invoked when the operation is completed in order to allow subsequent
     * operations to be performed.
     *
     */
    queueOperation(operation: IFunctionPR<Function, void>): void;
    /**
     * Begins processing the next operation in the queue if there is not one already in progress.
     */
    private _processQueue();
}
export module DateUtils {
    var MILLISECONDS_IN_MINUTE: number;
    var MILLISECONDS_IN_HOUR: number;
    var MILLISECONDS_IN_DAY: number;
    var MILLISECONDS_IN_WEEK: number;
    var DATETIME_MINDATE_UTC_MS: number;
    /**
     * Checks whether this date object corresponds to a min date or not
     *
     * @return
     */
    function isMinDate(date: Date): boolean;
    /**
     * Compares this date object with the given date object
     *
     * @param date1 Date object to compare
     * @param date2 Date object to compare
     * @return
     */
    function compare(date1: Date, date2: Date): number;
    /**
     * Compare two dates to see if they are equal - returning true if they are equal.
     *
     * @param date1 The first value to compare
     * @param date2 The second value to compare
     * @return
     */
    function equals(date1: Date, date2: Date): boolean;
    /**
     * Shifts the date to match the UTC date.  This is done by removing the timezone offset which is applied.
     *
     * @param date The date to be converted.
     * @return
     */
    function shiftToUTC(date: Date): Date;
    /**
     * Shifts the date to match the local date.  This is done by adding the timezone offset to the date.
     *
     * @param date The date to be converted.
     * @return
     */
    function shiftToLocal(date: Date): Date;
    /**
     * Parses the string into a date.
     *
     * @param dateString Date string to parse.
     * @param parseFormat Optional format string to use in parsing the date. May be null or undefined
     * @param ignoreTimeZone
     *     Optional value indicating to ignore the time zone set set in user preferences?
     *     Should be set to true when a Date string should be parsed irrespective of the user's time zone (e.g. calendar control).
     *
     * @return
     */
    function parseDateString(dateString: string, parseFormat?: string, ignoreTimeZone?: boolean): Date;
    /**
     * Returns the number of days between the two dates. Note that any time component is ignored and the dates
     * can be supplied in any order
     *
     * @param startDate The first date
     * @param endDate The second date
     * @param exclusive If true then the result is exclusive of the second date (Mon->Fri==4).
     * Otherwise the date includes the later date (Mon->Fri==5)
     */
    function daysBetweenDates(startDate: Date, endDate: Date, exclusive?: boolean): number;
    /**
     * @param value Date string
     * @param formats Date string formats
     * @param ignoreTimeZone
     * @return
     */
    function parseLocale(value: string, formats?: string[] | string, ignoreTimeZone?: boolean): Date;
    /**
     * @param date The Date object to format
     * @param format Date string format
     * @param ignoreTimeZone
     * @return
     */
    function localeFormat(date: Date, format?: string, ignoreTimeZone?: boolean): string;
    /**
     * Converts a time from the client (e.g. new Date()) to the user's preferred timezone
     *
     * @param date The Date object to convert
     * @param adjustOffset
     *     If true, consider the date portion when converting (get the timezone offset at that particular date).
     *     False indicates to use the current (today's) timezone offset regardless of the date given.
     *
     */
    function convertClientTimeToUserTimeZone(date: Date, adjustOffset?: boolean): Date;
    /**
     * Converts a time from the user's preferred timezone to the client (e.g. new Date()) timezone
     *
     * @param date The Date object to convert
     * @param adjustOffset
     *     If true, consider the date portion when converting (get the timezone offset at that particular date).
     *     False indicates to use the current (today's) timezone offset regardless of the date given.
     *
     */
    function convertUserTimeToClientTimeZone(date: Date, adjustOffset?: boolean): Date;
    /**
     * Strip the time from the given date (return a new date) such that the new date is of 12:00:00 AM
     */
    function stripTimeFromDate(date: Date): Date;
    /**
     * Get the equivalent of "Now" in the user's time zone.
     */
    function getNowInUserTimeZone(): Date;
    /**
     * Get the equivalent of "Today" (date as of midnight) in the user's time zone
     */
    function getTodayInUserTimeZone(): Date;
    /**
     * @param date The Date object to format
     * @param format Date string format
     * @return
     */
    function format(date: Date, format?: string): string;
    /**
     * Generate a string indicating how long ago the date is.
     *
     * @param date The Date object to format
     * @param now
     * @return A friendly string
     */
    function ago(date: Date, now?: Date): string;
    /**
     * Adds days to a given date
     *
     * @param date The Date object to add to
     * @param days Number of days to add
     * @param adjustOffset is true then the offset will be adjusted if the offset between the date passed
     * and the date obtained after adding days is different.
     *
     */
    function addDays(date: Date, days: number, adjustOffset?: boolean): Date;
    /**
     * Adds hours to a given date
     *
     * @param date The Date object to add to
     * @param hours Number of hours to add
     * @param adjustOffset is true then the offset will be adjusted if the offset between the date passed
     * and the date obtained after adding hours is different.
     *
     */
    function addHours(date: Date, hours: number, adjustOffset?: boolean): Date;
    /**
     * Adjusts the time zone offset by applying the time difference in the offsets.
     *
     * @param oldDate The Date object which was used before time zone changed.
     * @param newDate The Date object which was used after time zone changed.
     */
    function adjustOffsetForTimes(oldDate: Date, newDate: Date, applicationDate?: Date): Date;
    /**
     * Gets the offset of the date passed in.
     *
     * @param date The Date object for which the offset is required.
     * @param defaultToUtcOffset A value indicating whether the server side set utc offset should be returned if no offset for date is returned.
     */
    function getOffsetForDate(date: Date): number;
    /**
     * Checks whether given day is today in user timezone
     *
     * @param date The Date object to check
     */
    function isGivenDayToday(date: Date): boolean;
    /**
     * Checks whether given day is a day in past in user timezone
     *
     * @param date The Date object to check
     */
    function isGivenDayInPast(date: Date): boolean;
    /**
     * Checks whether given day is a day in future in user timezone
     *
     * @param date The Date object to check
     */
    function isGivenDayInFuture(date: Date): boolean;
    /**
     * Get a user friendly string for a date that indicates how long ago the date was. e.g. "4 hours ago", "Tuesday", "7/4/2012".
     *
     * @param date The Date object to format
     * @param now
     * @return A string version of the date.
     */
    function friendly(date: Date, now?: Date): string;
}
export module ArrayUtils {
    /**
     * Returns the first element of an array that matches the predicate.
     *
     * @param array Array used to perform predicate.
     * @param predicate The Predicate function.
     * @return The first element that matches the predicate.
     */
    function first<T>(array: T[], predicate?: (value: T) => boolean): T;
    function arrayContains<S, T>(value: S, target: T[], comparer?: (s: S, t: T) => boolean): boolean;
    function arrayEquals<S, T>(source: S[], target: T[], comparer?: (s: S, t: T) => boolean, nullResult?: boolean): boolean;
    /**
     * Take an array of values and convert it to a dictionary/lookup table.
     * @param array Values to convert
     * @param getKey Function to get the key for a given item
     * @param getValue Optional function to get teh value for a given item (defaults to the item itself)
     * @param throwOnDuplicateKeys Optional value indicating to throw an error when duplicate keys are present. Otherwise just overwrite any duplicates
     * @return
     */
    function toDictionary<TArray, TValue>(array: TArray[], getKey: (item: TArray, index: number) => string, getValue?: (item: TArray, index: number) => TValue, throwOnDuplicateKeys?: boolean): IDictionaryStringTo<TValue>;
    /**
     * @param array
     * @param value
     * @param comparer
     * @return
     */
    function contains<T>(array: T[], value: T, comparer?: IComparer<any>): boolean;
    /**
     * @param array
     * @param predicate
     * @return
     */
    function findIndex<T>(array: T[], predicate: IFunctionPR<T, boolean>): number;
    /**
     * @param arrayA
     * @param arrayB
     * @param comparer
     * @return
     */
    function intersect<T>(arrayA: T[], arrayB: T[], comparer?: IComparer<T>): T[];
    /**
     * Helper method used to intersect arrays of strings or numbers
     *
     * @param arrayA
     * @param arrayB
     * @param caseInsensitive
     * @return
     */
    function intersectPrimitives<T>(arrayA: T[], arrayB: T[], caseInsensitive?: boolean): T[];
    /**
     * @param arrayA
     * @param arrayB
     * @param comparer
     * @return
     */
    function union<T>(arrayA: T[], arrayB: T[], comparer?: IComparer<T>): T[];
    /**
     * Sorts and removes duplicate elements
     *
     * @param array
     * @param comparer
     * @return
     */
    function uniqueSort<T>(array: T[], comparer?: IComparer<T>): T[];
    /**
     * @param array
     * @param comparer
     * @return
     */
    function unique<T>(array: T[], comparer?: IComparer<T>): T[];
    /**
     * @param arrayA
     * @param arrayB
     * @param comparer
     * @return
     */
    function subtract<T>(arrayA: T[], arrayB: T[], comparer?: IComparer<T>): T[];
    /**
     * Reorders an array by moving oldIndex + the "count" next elements to the newIndex in the array
     *
     * @param array
     * @param oldIndex The index of the array element to move
     * @param newIndex The index of the array to insert the element at
     * @param count The number of subsequent, contiguous elements to take with the oldIndex in the reorder
     */
    function reorder<T>(array: T[], oldIndex: number, newIndex: number, count: number): T[];
    /**
     * @param array
     * @param comparer
     * @return
     */
    function flagSorted<T>(array: T[], comparer: IComparer<T>): void;
    /**
     * @param toArray
     * @param fromArray
     * @return
     */
    function copySortFlag<T>(toArray: T[], fromArray: T[]): void;
    /**
     * @param array
     * @param comparer
     * @return
     */
    function isSorted<T>(array: T[], comparer: IComparer<T>): boolean;
    /**
     * @param array
     * @param comparer
     * @return
     */
    function sortIfNotSorted<T>(array: T[], comparer: IComparer<T>): boolean;
    /**
     * @param array
     * @return
     */
    function clone<T>(array: T[]): T[];
    /**
     * @param array
     * @param item
     * @return
     */
    function indexOf<T>(array: T[], item: T): number;
    /**
     * @param array
     * @param item
     */
    function add<T>(array: T[], item: T): void;
    /**
     * @param array
     * @param items
     */
    function addRange<T>(array: T[], items: T[]): void;
    /**
     * @param array
     * @param item
     * @return
     */
    function remove<T>(array: T[], item: T): boolean;
    /**
     * @param array
     */
    function clear<T>(array: T[]): void;
}
export module StringUtils {
    var EmptyGuidString: string;
    var empty: string;
    var newLine: string;
    var tab: string;
    var lineFeed: string;
    /**
     * 		HTML Encodes the string. Use this method to help prevent cross site scripting attacks
     *     by cleaning text which may contain HTML elements before the string is display in a web page.
     *
     *
     * @param str The string to be encoded
     * @return A copy of the current string which has been HTML encoded
     */
    function htmlEncode(str: string): string;
    /**
     * 		HTML Encodes the string. Use this method to help prevent cross site scripting attacks
     *     by cleaning text which may contain HTML elements before the string is display in a web page.
     *     Does not encode single quotes.
     *
     *
     * @param str The string to be encoded
     * @return A copy of the current string which has been HTML encoded
     */
    function htmlEncodeJavascriptAttribute(str: string): string;
    /**
     * 		HTML Decodes the string.
     *
     *
     * @param str The string to be decoded
     * @return A copy of the current string which has been HTML decoded
     */
    function htmlDecode(str: string): string;
    /**
     * 		HTML Decodes the string.
     *
     *
     * @param str The string to be decoded
     * @return
     *    A copy of the current string which has been HTML decoded.
     *    > < etc are converted back to HTML form(<, > etc)
     *
     */
    function decodeHtmlSpecialChars(str: string): string;
    /**
     * 		HTML encodes the string and replaces newlines with HTML break tags.
     * 		Use this method to maintain line breaks when displaying strings.
     *
     *
     * @param str The string to be encoded.
     * @return A copy of the current string which has been HTML encoded
     */
    function nl2br(str: string): string;
    /**
    *	returns a string with the first letter as UpperCase and the rest lower case
    *   Assumes the string is trimmed (no leading white-space) and starts with a valid character
    *   if the first char is not an alphabet, no char will be made upper case
    * @param str  The string to be converted.</param>
    * @return A copy of the current string which has been sentence cased
    */
    function toSentenceCase(str: string): string;
    /**
     * @param a
     * @param b
     * @return
     */
    function defaultComparer(a: string, b: string): number;
    /**
     * @param a
     * @param b
     * @return
     */
    function ignoreCaseComparer(a: string, b: string): number;
    /**
     * @param a
     * @param b
     * @return
     */
    function localeComparer(a: string, b: string): number;
    /**
     * @param a
     * @param b
     * @return
     */
    function localeIgnoreCaseComparer(a: string, b: string): number;
    /**
    * Compares 2 strings for equality.
    *
    * @param a First string to compare
    * @param b Second string to compare
    * @param ignoreCase If true, do a case-insensitive comparison.
    */
    function equals(a: string, b: string, ignoreCase?: boolean): boolean;
    /**
     * @param str
     * @param prefix
     * @param comparer
     * @return
     */
    function startsWith(str: string, prefix: string, comparer?: IComparer<string>): boolean;
    /**
     * @param str
     * @param suffix
     * @param comparer
     * @return
     */
    function endsWith(str: string, suffix: string, comparer?: IComparer<string>): boolean;
    /**
     * @param str
     * @param subStr
     * @return
     */
    function caseInsensitiveContains(str: string, subStr: string): boolean;
    /**
     * @param format
     * @param args
     * @return
     */
    function format(format: string, ...args: any[]): string;
    /**
     * @param format
     * @param args
     * @return
     */
    function localeFormat(format: string, ...args: any[]): string;
    function containsControlChars(str: string): boolean;
    function containsMismatchedSurrogateChars(str: string): boolean;
    /**
     *  Base64 encodes the string. Uses the native version if available.
     *  @param s The string that should be encoded.
     *  @return The string in base64 encoding.
     */
    function base64Encode(s: string): string;
    function isGuid(str: string): boolean;
}
export module NumberUtils {
    /**
     * @param a
     * @param b
     * @return
     */
    function defaultComparer(a: any, b: any): number;
    /**
     * Converts this number to a string in the current culture's locale
     * without specifying a precision. So, for example, with Spanish culture,
     * (3) gets translated to "3", and (3.1416) becomes "3,1416". The jQuery's
     * localeFormat requires a precision (the default is "2" if not specified).
     * So 3.localeFormat("N") become "3,00".
     *
     * @param num  The Number to format
     * @param includeGroupSeparators If true, use locale-specific
     * group separators (i.e. 3,000) in the output
     * @param cultureInfo Culture info (CurrentCulture if not specified)
     * @return
     */
    function toDecimalLocaleString(num: number, includeGroupSeparators?: boolean, cultureInfo?: any): string;
    /**
     * @param value
     * @return
     */
    function parseLocale(value: string): number;
    /**
     * @param value
     * @return
     */
    function isPositiveNumber(value: any): boolean;
    /**
     * @param value
     * @return
     */
    function parseInvariant(value: string): number;
    /**
     * @param value
     * @param format
     * @return
     */
    function localeFormat(value: number, format: string): string;
}
/**
* Utility class for file-related operations.
*/
export module FileUtils {
    /**
    * File encoding values.
    */
    enum FileEncoding {
        Unknown = 0,
        Binary = 1,
        ASCII = 2,
        UTF8 = 3,
        UTF32_BE = 4,
        UTF32_LE = 5,
        UTF16_BE = 6,
        UTF16_LE = 7,
    }
    function tryDetectFileEncoding(base64Content: string): FileEncoding;
}
/**
* Path-related Utility methods
*/
export module PathUtils {
    /**
    * Combine 2 path segments using the given separator ("/" is the default)
    *
    * @param path1 First path segment
    * @param path2 Second path segment
    * @param pathSeparator Optional path separator ("/" is the default)
    * @return combined string
    */
    function combinePaths(path1: string, path2: string, pathSeparator?: string): string;
    /**
    * Ensure that the given path ends with a separator. If not, add the separator to the end.
    *
    * @param path Path to verify
    * @param pathSeparator Optional path separator ("/" is the default)
    * @return resulting string that ends with the separator
    */
    function ensureTrailingSeparator(path: string, pathSeparator?: string): string;
}
export module BoolUtils {
    /**
     * @param value
     * @return
     */
    function parse(value: string): boolean;
}
export module UserAgentUtils {
    function isWindowsClient(): boolean;
    function getUserAgent(): string;
}
export class DisposalManager implements IDisposable {
    /**
     * List of disposables.
     */
    private _disposables;
    constructor();
    /**
     * Add the specified disposable to the list.
     *
     * @param disposable Disposable to be added to the list.
     */
    addDisposable<TDisposable extends IDisposable>(disposable: TDisposable): TDisposable;
    /**
     * Disposes all disposables.
     */
    dispose(): void;
}
export module AnchorLinkUtils {
    /**
    * Finds an anchor according to HTML 5 Specifications - Navigating to a fragment identifier
    * Relevant parts:
    *  If there is an element in the DOM that has an ID exactly equal to decoded fragid, then the
    *    first such element in tree order is the indicated part of the document; stop the
    *    algorithm here.
    *  No decoded fragid: If there is an a element in the DOM that has a name attribute whose
    *    value is exactly equal to fragid (not decoded fragid), then the first such element in
    *    tree order is the indicated part of the document; stop the algorithm here.
    *  If fragid is an ASCII case-insensitive match for the string top, then the indicated part of
    *    the document is the top of the document; stop the algorithm here.
    *  Otherwise, there is no indicated part of the document.
    *
    * @param name The name of the anchor.
    * @param container The container in which to search for the anchor.
    * @return The element corresponding to the anchor or the container itself if the anchor refers
    *         to the top.
    */
    function findAnchorInContainer(name: string, container: JQuery): JQuery;
}
export module GUIDUtils {
    /**
     * Returns a GUID such as xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx.
     * @return New GUID.(UUID version 4 = xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx)
     * @notes This code is taken from \WebAccess\Search\Scripts\TFS.Search.Helpers.ts and \WebAccess\Build\Scripts\TFS.BuildvNext.WebApi.ts
     * @notes Disclaimer: This implementation uses non-cryptographic random number generator so absolute uniqueness is not guarantee.
     */
    function newGuid(): string;
}
export function unpackIntegerArray(array: number[]): number[];
export function getCookie(cookieName: string): string;
export function parseMSJSON(data: any, secure: boolean): any;
export function stringifyMSJSON(object: any): string;
/**
 * Parse data from a JSON Island into an object
 *
 * @param $context The context in which to search for the JSON data
 * @param selectionFilter An optional selector that will filter the selection of JSON islands found.
 * @param remove .
 * @return
 */
export function parseJsonIsland($context: JQuery, selectionFilter?: string, remove?: boolean): any;
export function findTreeNode(path: string, separator: string, comparer: IComparer<string>, textField: string): any;
export function calculateTreePath(includeRoot: boolean, separator: string, textField: string, rootField: string): string;
export function walkTree(f: IFunctionPPR<any, any, void>): void;
export interface IFilterGroup {
    start: number;
    end: number;
    level: number;
}
export function updateFilterGroups(groups: IFilterGroup[], clauseNumber: number, insert: boolean): IFilterGroup[];
export function updateFilterGroupLevels(groups: IFilterGroup[]): number;
/**
 * Converts the specified value to a display string.
 *
 * @param value The value to convert.
 * @param format The value to convert.
 */
export function convertValueToDisplayString(value: any, format?: string): string;
/**
 * Parses a comma and/or semicolumn delimited string of email addresses into an array of the addresses.
 *
 * @param emailAddressesString A comma and/or semicolumn delimited string of email addresses
 * @return The parsed array of email addresses.
 */
export function parseEmailAddressesStringToArray(emailAddressesString: string): string[];
export function domToXml(xmlNode: any): string;
export function parseXml(xml: string): any;
export class Dictionary {
    private _TKey;
    private _TValue;
    private _items;
    private _allowNullKey;
    private _throwOnKeyMissing;
    private _count;
    /**
     * A 'typed' dictionary that mirrors the .NET IDictionary interface.
     *
     * @param TKey The type for the dictionary keys.
     * @param TValue The type for the dictionary values.
     * @param options Options for controlling the dictionary:
     *    allowNullKey: if true, allows null values for the key. Default: false
     *    throwOnKeyMissing: if true, will throw when retrieving a value who's key does not exist in the dictionary. Default false.
     */
    constructor(TKey: any, TValue: any, options?: any);
    count(): number;
    /**
     * @param value
     */
    item(key: any, value?: any): any;
    keys(): any;
    values(): any;
    add(key: any, value: any): void;
    clear(): void;
    containsKey(key: any): any;
    get(key: any): any;
    remove(key: any): void;
    set(key: any, value: any): void;
    tryGetValue(key: any, out: any): boolean;
    private _checkKey(key);
    private _set(key, value);
}
}
declare module "VSS/Utils/Html" {
export module HtmlNormalizer {
    /**
     * Normalizes the given html by removing the attributes like script and fixing incomplete tags
     *
     * @param html Html to normalize
     * @return
     */
    function normalize(html: string): string;
    /**
     * Sanitizes the given html by fixing incomplete tags and encoding unsafe text
     *
     * @param html Html to sanitize
     * @return
     */
    function sanitize(html: string): string;
}
export class TemplateEngine {
    /**
     * Replaces simple tokens, such as ${Foo}, in the input HTML template.
     *
     * @param template The HTML markup or text to use as a a template.
     * @param data The data to render.
     * @return The HTML string with template replacements.
     */
    private static _replaceSimpleTemplateTokens(template, data);
    /**
     * Replaces simple tokens which will not be HTML encoded, such as {{html Foo}}, in the input HTML template.
     *
     * @param template The HTML markup or text to use as a a template.
     * @param data The data to render.
     * @return The HTML string with template replacements.
     */
    private static _replaceUnencodedTemplateTokens(template, data);
    /**
     * Replaces foreach style tokens, such as {{each Foo}}, in the input HTML template.
     *
     * @param template The HTML markup or text to use as a a template.
     * @param data The data to render.
     * @return The HTML string with template replacements.
     */
    private static _replaceForEachTemplateTokens(template, data);
    /**
     * Replaces a Regex match within some text with a replacement.
     *
     * @param text The original text.
     * @param match A regex match within that text.
     * @param replacement The replacement string.
     * @return The updated string.
     */
    private static _replaceMatch(text, match, replacement);
    private static _getEncodedTextPropertyValue(data, propertyPath);
    private static _getTextPropertyValue(data, propertyPath);
    /**
     * Obtains a value from a given data object using a string property path.
     *
     * @param data An object.
     * @param propertyPath A dot separrated property path. Undefined or empty string returns the plain data object.
     * @return The resolved data property value or undefined if property was not found.
     */
    private static _getPropertyValue(data, propertyPath);
    /**
     * A poor man's implementation of $.tmpl() from jquery templates. Renderes the
     * specified HTML content as a template, using the specified data.
     *
     * @param template The HTML markup or text to use as a a template.
     * @param data The data to render.
     * @return A jquery element.
     */
    static tmpl(template: string, data: any): string;
    /**
     * A static template engine for applying JS objects to a "jquery-tmpl" like template.
     */
    constructor();
}
}
declare module "VSS/Utils/UI" {
export function getWheelDelta(e?: any): number;
/**
 * @param element
 * @param enable
 */
export function enableElement(element: any, enable: boolean): void;
export function makeElementUnselectable(element: any): void;
/**
 * Best-effort attempt to set focus on the specified element. Exceptions will be caught and logged to console.
 *
 * @param element Element to set focus on (DomElement or jQuery element)
 * @param delay Optional delay in ms before calling focus
 */
export function tryFocus(element: any, delay?: number): void;
export function alignWidth(element: any, baseWidth: any): void;
export function isInDomTree(element: any): boolean;
export function getCustomData(element: any, key: any): any;
export enum KeyCode {
    ALT = 18,
    BACKSPACE = 8,
    CAPS_LOCK = 20,
    COMMA = 188,
    CONTROL = 17,
    DELETE = 46,
    DOWN = 40,
    END = 35,
    ENTER = 13,
    ESCAPE = 27,
    HOME = 36,
    INSERT = 45,
    LEFT = 37,
    PAGE_DOWN = 34,
    PAGE_UP = 33,
    PERIOD = 190,
    RIGHT = 39,
    SEMI_COLON = 186,
    FIREFOX_SEMI_COLON = 59,
    SHIFT = 16,
    SPACE = 32,
    TAB = 9,
    UP = 38,
    F1 = 112,
    F2 = 113,
    F10 = 121,
    IME_INPUT = 229,
    N = 78,
    P = 80,
    Q = 81,
    S = 83,
    A = 65,
    C = 67,
    H = 72,
    T = 84,
    QUESTION_MARK = 191,
}
/**
 * Check if only the ctrl key modifier was pressed.
 *
 * @param e The event object.
 */
export module KeyUtils {
    function isExclusivelyCtrl(e: JQueryKeyEventObject): boolean;
}
export module Constants {
    var HtmlNewLine: string;
    var BlurTimeout: any;
}
export module Measurement {
    var _PROBE_ID: string;
    function _createProbe($parent: any): JQuery;
    /**
     * Get a probe element to use to measure
     *
     * @param $parent Parent element to create a probe under (null for document body)
     * @return
     */
    function _getProbe($parent?: JQuery): JQuery;
    /**
     * Get the pixel equivalent for em's
     *
     * @return
     */
    function getUnitEm(): number;
    /**
     * Get the pixel equivalent for ex's
     *
     * @return
     */
    function getUnitEx(): number;
    /**
     * Get the pixel equivalent for inches
     *
     * @return
     */
    function getUnitIn(): number;
    /**
     * Get the scrollbar width in pixels
     *
     * @param $parent The element to measure
     * @return
     */
    function getScrollbarWidth($parent: JQuery): number;
    /**
     * Get the scrollbar height in pixels
     *
     * @param $parent The element to measure
     * @return
     */
    function getScrollbarHeight($parent: JQuery): number;
    /**
     * Get the number of pixels for the given measurement
     *
     * @param unit Measurement (e.g. "14.5 px" or "2 em")
     * @return
     */
    function getUnitAsPixel(unit: string): number;
}
/**
 * @param tagName
 * @param className
 */
export function domElem(tagName: string, className?: string): HTMLElement;
export function htmlEncode(input: any): any;
export module Positioning {
    enum VerticalScrollBehavior {
        Default = 0,
        Top = 1,
        Middle = 2,
        Bottom = 3,
    }
    function _topOverflow(top: any): number;
    function _bottomOverflow(bottom: any): number;
    function _fitHorizontal(position: any, data: any): void;
    function _flipHorizontal(position: any, data: any): void;
    /**
     * Tries to fit the positioned element by using the base element if any overflow exists.
     * If still overflow exists after flipping, it shrinks the element where it best fits.
     */
    function _fitVertical(position: any, data: any): {
        top: any;
        shrink: number;
    };
    /**
     * Tries to flip the positioned element by using the base element if any overflow exists.
     * If still overflow exists after flipping, it shrinks the element where it best fits.
     */
    function _flipVertical(position: any, data: any): {
        top: any;
        shrink: any;
    };
    /**
     * Positions the given element by taking the given base element
     * as a reference using the options provided
     *
     * @param element Element to position
     * @param baseElement Reference element for positioning
     * @param options The following options are supported:
     *
     *     - elementAlign: where to align the element (horizontal-vertical)
     *     - baseAlign: where to align the element against base element (horizontal-vertical)
     *     - overflow: behavior when the element overflows the window (horizontal-vertical)
     *     - alignToMarkerHorizontal: flag to specify that markers should be used to horizontally align the elements rather than the elements themselves.
     *     - alignToMarkerVertical: flag to specify that markers should be used to vertically align the elements rather than the elements themselves.
     *     - elementAlignmentMarker: jQuery object inside the element that should be aligned with the base
     *     - baseAlignmentMarker: jQuery object inside the base element that should be aligned with the element
     *     - leftOffsetPixels: how much extra left offset (if any) should be given to the target element versus the reference element.
     *     - topOffsetPixels: how much extra top offset (if any) should be given to the target element versus the reference element.
     *
     *     Example usage:
     *     VSS.UI.Positioning.position(element, baseElement, { elementAlign: "left-top", baseAlign: "left-bottom" });
     *
     */
    function position(element: any, baseElement: any, options?: any): void;
    /**
     * Get the first parent of the given element that allows scrolling
     *
     * @param $element Element to scroll into view
     */
    function getVerticalScrollContainer($element: JQuery): JQuery;
    /**
     * Sets the scroll (top) position of the $container element so that the $element is visible.
     * This is a no-op if the element is already visible.
     *
     * @param $element Element to scroll into view
     * @param position The destination position of the element after scrolling (top, middle, bottom)
     * @param scrollIfAlreadyVisible
     *    If true, perform the scroll even if the element is already in view
     *
     * @param scrollAnimationDuration
     *    If true, scroll with animation using the given animation time
     *
     */
    function scrollIntoViewVertical($element: JQuery, position?: Positioning.VerticalScrollBehavior, scrollIfAlreadyVisible?: boolean, scrollAnimationDuration?: number): void;
}
export function attachResize(element: any, handler: (e: JQueryEventObject, args?) => void): void;
export function detachResize(element: any): void;
export function clearResizeHandlers(): void;
export interface SelectionRange {
    $startNode: JQuery;
    $endNode: JQuery;
    startNodeOffset: number;
    endNodeOffset: number;
}
export interface IBrowserInformation {
    msie?: boolean;
    chrome?: boolean;
    safari?: boolean;
    mozilla?: boolean;
    webkit?: boolean;
    version?: string;
}
export module BrowserCheckUtils {
    function isFirefox(): boolean;
    function isChrome(): boolean;
    function isMozilla(): boolean;
    function isMsie(): boolean;
    function isIE(): boolean;
    function getVersion(): string;
    function isIEVersion(version: number): boolean;
    function isLessThanOrEqualToIE9(): boolean;
    function isLessThanOrEqualToIE8(): boolean;
}
export module SelectionUtils {
    function getSelection(): SelectionRange;
    function selectInputText($input: JQuery, startPosition: number, endPosition: number, focus: boolean): void;
}
export module HtmlInsertionUtils {
    function pasteHtmlAtCaret(html: string, parentWindow?: Window): void;
}
export enum HotKeyCombination {
    None = 0,
    Ctrl = 1,
    Alt = 2,
    Shift = 3,
    CtrlShift = 4,
    CtrlAlt = 5,
}
export interface HotKey {
    combination: HotKeyCombination;
    which: number;
    displayText: string;
    handler: () => boolean;
}
export interface IGlobalHotKeyManager {
    registerHotKey: (hotKey: HotKey) => void;
    registerCtrlAltHotkey: (which: number, text: string, handler: () => boolean) => void;
    dispose: () => void;
}
export var globalHotKeyManager: IGlobalHotKeyManager;
export interface ISectionManager {
    identifySections: () => void;
    nextSection: () => boolean;
    previousSection: () => boolean;
}
export var sectionManager: ISectionManager;
}
declare module "VSS/VSS" {
export var uiCulture: string;
export var errorHandler: ErrorHandler;
export var globalProgressIndicator: GlobalProgressIndicator;
export var activtyStatsCollector: ActivtyStatsCollector;
/**
 * @param data
 */
export function queueCallbacks(context: any, callback: IResultCallback, errorCallback: IErrorCallback, data?: any): IQueueCallbacksResult;
export interface IQueueCallbacksResult {
    cookie: number;
    count: IFunctionPR<void, number>;
    finish: IArgsFunctionR<void>;
    error: IArgsFunctionR<void>;
    register: (callback: IResultCallback, errorCallback: IErrorCallback, data: any) => number;
    unregister: (cookie: number) => void;
}
/**
 * Queues a request for a piece of data.  Handles situations where the data has already been
 * retrieved as well as when multiple requests are pending for the same data.  When the data has
 * already been retrieved, the successCallback will be invoked immediately.  When multiple
 * requests are pending for the same data, each of the callers will be notified when the data
 * request has been completed (worker will only be invoked once).
 *
 * Sample usage:  This will invoke the worker function using the current object as the context.  The "_teamSettings"
 *                property of the current object will be checked for a value before invoking the worker.  If the value
 *                needs to be looked up, the worker will be invoked and it will make a request for the data.  If the
 *                request is completed successfully the data is passed to the succeeded callback.  If there is an error
 *                with the request the failed callback is invoked.
 *
 *     queueRequest(this, this, "_teamSettings", successCallback, errorCallback,
 *         function (succeeded, failed) {
 *             Ajax.getMSJSON(url, null, function (teamSettings) {
 *                 succeeded(teamSettings);
 *             }, failed);
 *         });
 *
 * @param context The "this" that the worker and successCallback functions will be invoked with.
 * @param target
 * The object which the propName property should be checked on to see if the request has already been performed.
 * If the property has a value (that is not a function), then the success callback is invoked immediately with the properties value as the result.
 * If the property does not have a value, the request is processed and the result is stored in the property.
 *
 * @param propName Name of the property on the target to store the result in and check to see if the request is needed.
 * @param successCallback Function invoked when the request is completed.  The function should take the "result" as its first parameter.
 * @param errroCallback Function invoked when the request has completed with an error. The function should take the "error" as its first parameter.
 * @param worker
 * This is the which performs the work to retrieve the data.  The function should have the following signature:
 *     function worker(succeeded, failed)
 *
 * The worker should invoke the "succeeded" function that it is provided passing it the result.  If an error occurs the worker should invoke the
 * "failed" function with the error.
 *
 * NOTE: It is important to note that the "successCallback" is not the same as the "succeeded" callback provided to the worker
 *       function.  It is important for the worker to invoke the callbacks it is provided with rather than the callbacks which are
 *       provided to the queueRequest method.  The same holds true for the failed callback provided to the worker function.
 *
 */
export function queueRequest(context: any, target: any, propName: string, successCallback: IResultCallback, errorCallback: IErrorCallback, worker: IResultCallback): void;
/**
 * Checks if a queued request has been completed.
 *
 * @param cachedResult The property passed to queueRequest as target[propName]
 */
export function queuedRequestHasResult(cachedResult: any): boolean;
export function getErrorMessage(errorString: string): string;
export function getErrorMessage(errorFunction: Function): string;
export function getErrorMessage(error: Error): string;
export class ErrorHandler {
    $error: JQuery;
    visible: boolean;
    /**
     * Global error handler class which is attached to TFS
     */
    constructor();
    /**
     * (Internal function) Initializes error handler
     */
    initialize(): void;
    /**
     * (Internal function) Checks whether error container exists or not
     */
    exists(): boolean;
    /**
     * (Internal function) Shows error in the container
     */
    showError(message: string, status?: string, stackTrace?: string): void;
    /**
     * (Internal function) Hides the error when clicked
     */
    hideError(): void;
    /**
     * Displays error in a container. If no container is found, error
     * message is displayed in an alert dialog
     */
    show(error: TfsError): void;
}
/**
 * @param callback
 * @param context
 */
export function handleError(error: TfsError, callback?: IErrorCallback, context?: any): void;
export class ActivtyStatistic {
    name: string;
    id: string;
    parentId: string;
    status: number;
    actionDate: Date;
    constructor();
}
export interface ActivtyStatsCollectionAllowedCallback {
    (): boolean;
}
export class ActivtyStatsCollector {
    static ACTIVITY_COLLECTION_STATUS: string;
    static ACTIVITY_ID_STORAGE_ITEM: string;
    static CURRENT_PAGE: string;
    private _activtyIdHeader;
    private _progressPendingActions;
    private _progressPendingActionsNewId;
    private _activtyStatsCollectionAllowedCallbacks;
    /**
     * Global handler for logging activity data
     */
    constructor();
    addActivtyStatsCollectionAllowedCallback(activtyStatsCollectionAllowedCallback: ActivtyStatsCollectionAllowedCallback): void;
    actionStarted(name: string): number;
    actionCompleted(id: number, jqXHR: JQueryXHR): void;
    logActivity(activityId: string, page: string): void;
    getActivtyStatistics(): ActivtyStatistic[];
    clearStats(): void;
    collectStats(shouldCollect: boolean): void;
    getCurrentPage(): ActivtyStatistic;
    setCurrentPage(currentPage: ActivtyStatistic): void;
    isCollectingStats(): boolean;
    private _saveActivity(stat, isCurrentPage?);
    private _allowStatsCollection();
}
export class GlobalProgressIndicator {
    private _progressPendingActions;
    private _progressPendingActionsCount;
    private _progressPendingActionsNewId;
    private _pageProgressElements;
    private _pageProgressDelayShowTimeout;
    private _pageProgressMinShowTimeout;
    private _showingProgress;
    /**
     * Global handler for displaying progress during page loads, module_ loads, ajax requests, or any other registered long-running operations
     */
    constructor();
    getProgressElements(): JQuery[];
    registerProgressElement(element: JQuery): void;
    unRegisterProgressElement(element: JQuery): void;
    private _addProgressElement(element);
    private _showProgressElements();
    private _hideProgressElements();
    actionStarted(name: string, immediate?: boolean): number;
    actionCompleted(id: number): void;
    getPendingActions(): string[];
}
export function hasUnloadRequest(): boolean;
export function classExtend(ctor: any, members: any): any;
export function getTypeName(type: any): string;
export function initClassPrototype(ctor: Function, members: any): void;
export function getModuleBase(moduleName: string): string;
export function using(moduleNames: string[], moduleLoaded: any): void;
export function tfsModuleLoaded(moduleName: string, moduleExports: any): void;
}
declare module "VSS/WebApi/Constants" {
export module AppStoreNames {
    var BuiltIn: string;
    var Me: string;
}
export module AuthenticationResourceIds {
    var AuthenticationLocationId: string;
    var AreaId: string;
    var AuthenticationAreaName: string;
    var SessionTokenResource: string;
}
export module CommonIdentityPickerResourceIds {
    var IdentitiesLocationId: string;
    var IdentityAvatarLocationId: string;
    var ServiceArea: string;
    var IdentitiesResource: string;
}
export module ContributionsResourceIds {
    var AppsLocationId: string;
    var InstalledAppsLocationId: string;
    var AreaId: string;
    var ContributionsAreaName: string;
}
export module CustomerIntelligenceResourceIds {
    var EventsLocationId: string;
    var AreaId: string;
    var CustomerIntelligenceAreaName: string;
}
export module FeatureAvailabilityResourceIds {
    var FeatureFlagsLocationId: string;
    var AreaId: string;
    var FeatureAvailabilityAreaName: string;
}
export module LocationResourceIds {
    var ConnectionData: string;
    var ServiceDefinitions: string;
    var AccessMappings: string;
    var LocationServiceArea: string;
    var ConnectionDataResource: string;
    var ServiceDefinitionsResource: string;
    var AccessMappingsResource: string;
}
export module OperationsResourceIds {
    var OperationsLocationId: string;
    var AreaName: string;
    var OperationsResource: string;
    var OperationsRouteName: string;
    var OperationsApi: string;
}
export module ServiceInstanceTypes {
    var SPS: string;
    var TFS: string;
    var TFSOnPremises: string;
    var SpsExtension: string;
    var SDKSample: string;
    var ServiceHooks: string;
    var ServiceHooks: string;
    var Search: string;
    var CodeAnalysis: string;
    var DevTestLabs: string;
    var SPSString: string;
    var TFSString: string;
    var TFSOnPremisesString: string;
    var SpsExtensionString: string;
    var SDKSampleString: string;
}
}
declare module "VSS/WebApi/Contracts" {
/**
* Information about the location of a REST API resource
*/
export interface ApiResourceLocation {
    /**
    * Area name for this resource
    */
    area: string;
    /**
    * Unique Identifier for this location
    */
    id: string;
    /**
    * Maximum api version that this resource supports (current server version for this resource)
    */
    maxVersion: string;
    /**
    * Minimum api version that this resource supports
    */
    minVersion: string;
    /**
    * The latest version of this resource location that is in &quot;Release&quot; (non-preview) mode
    */
    releasedVersion: string;
    /**
    * Resource name
    */
    resourceName: string;
    /**
    * The current resource version supported by this resource location
    */
    resourceVersion: number;
    /**
    * This location's route template (templated relative path)
    */
    routeTemplate: string;
}
/**
* Represents version information for a REST Api resource
*/
export interface ApiResourceVersion {
    /**
    * String representation of the Public API version. This is the version that the public sees and is used for a large group of services (e.g. the TFS 1.0 API)
    */
    apiVersion: string;
    /**
    * Is the public API version in preview
    */
    isPreview: boolean;
    /**
    * Internal resource version. This is defined per-resource and is used to support build-to-build compatibility of API changes within a given (in-preview) public api version. For example, within the TFS 1.0 API release cycle, while it is still in preview, a resource's data structure may be changed. This resource can be versioned such that older clients will still work (requests will be sent to the older version) and new/upgraded clients will talk to the new version of the resource.
    */
    resourceVersion: number;
}
export enum ConnectOptions {
    /**
    * Retrieve no optional data.
    */
    None = 0,
    /**
    * Includes information about AccessMappings and ServiceDefinitions.
    */
    IncludeServices = 1,
}
export interface IdentityRef {
    displayName: string;
    id: string;
    imageUrl: string;
    isAadIdentity: boolean;
    isContainer: boolean;
    profileUrl: string;
    uniqueName: string;
    url: string;
}
/**
* The JSON model for JSON Patch Operations
*/
export interface JsonPatchDocument {
}
/**
* The JSON model for a JSON Patch operation
*/
export interface JsonPatchOperation {
    /**
    * The path to copy from for the Move/Copy operation.
    */
    from: string;
    /**
    * The patch operation
    */
    op: Operation;
    /**
    * The path for the operation
    */
    path: string;
    /**
    * The value for the operation. This is either a primitive or a JToken.
    */
    value: any;
}
export interface JsonWebToken {
}
export enum JWTAlgorithm {
    None = 0,
    HS256 = 1,
    RS256 = 2,
}
export enum Operation {
    Add = 0,
    Remove = 1,
    Replace = 2,
    Move = 3,
    Copy = 4,
    Test = 5,
}
export interface Publisher {
    /**
    * Name of the publishing service.
    */
    name: string;
    /**
    * Service Owner Guid Eg. Tfs : 00025394-6065-48CA-87D9-7F5672854EF7
    */
    serviceOwnerId: string;
}
/**
* The class to represent a REST reference link.  Example: { self: { href: &quot;http://localhost:8080/tfs/DefaultCollection/_apis/wit/workItems/1&quot; } }  RFC: http://tools.ietf.org/html/draft-kelly-json-hal-06  The RFC is not fully implemented, additional properties are allowed on the reference link but as of yet we don't have a need for them.
*/
export interface ReferenceLink {
    href: string;
}
export interface ResourceRef {
    id: string;
    url: string;
}
export interface ServiceEvent {
    /**
    * This is the id of the type. Constants that will be used by subscribers to identify/filter events being published on a topic.
    */
    eventType: string;
    /**
    * This is the service that published this event.
    */
    publisher: Publisher;
    /**
    * The resource object that carries specific information about the event. The object must have the ServiceEventObject applied for serialization/deserialization to work.
    */
    resource: any;
    /**
    * This dictionary carries the context descriptors along with their ids.
    */
    resourceContainers: {
        [key: string]: any;
    };
    /**
    * This is the version of the resource.
    */
    resourceVersion: string;
}
export interface VssJsonCollectionWrapper extends VssJsonCollectionWrapperBase {
    value: any[];
}
/**
* This class is used to serialized collections as a single JSON object on the wire, to avoid serializing JSON arrays directly to the client, which can be a security hole
*/
export interface VssJsonCollectionWrapperV<T> extends VssJsonCollectionWrapperBase {
    value: T;
}
export interface VssJsonCollectionWrapperBase {
    count: number;
}
export interface WrappedException {
    errorCode: number;
    eventId: number;
    helpLink: string;
    innerException: WrappedException;
    message: string;
    stackTrace: string;
    typeKey: string;
    typeName: string;
}
export var TypeInfo: {
    ApiResourceLocation: {
        fields: any;
    };
    ApiResourceVersion: {
        fields: any;
    };
    ConnectOptions: {
        enumValues: {
            "none": number;
            "includeServices": number;
        };
    };
    IdentityRef: {
        fields: any;
    };
    JsonPatchDocument: {
        fields: any;
    };
    JsonPatchOperation: {
        fields: any;
    };
    JsonWebToken: {
        fields: any;
    };
    JWTAlgorithm: {
        enumValues: {
            "none": number;
            "hS256": number;
            "rS256": number;
        };
    };
    Operation: {
        enumValues: {
            "add": number;
            "remove": number;
            "replace": number;
            "move": number;
            "copy": number;
            "test": number;
        };
    };
    Publisher: {
        fields: any;
    };
    ReferenceLink: {
        fields: any;
    };
    ResourceRef: {
        fields: any;
    };
    ServiceEvent: {
        fields: any;
    };
    VssJsonCollectionWrapper: {
        fields: any;
    };
    VssJsonCollectionWrapperV: {
        fields: any;
    };
    VssJsonCollectionWrapperBase: {
        fields: any;
    };
    WrappedException: {
        fields: any;
    };
};
}
declare module "VSS/WebApi/RestClient" {
import Q = require("q");
import Serialization = require("VSS/Serialization");
import WebApi_Contracts = require("VSS/WebApi/Contracts");
/**
* Parameters for sending a WebApi request
*/
export interface VssApiResourceRequestParams {
    /**
    * Name of the area for the resource
    */
    area: string;
    /**
    * Unique identifier for the resource's route to issue a request to
    */
    locationId: string;
    /**
    * Dictionary of route template replacement values
    */
    routeValues?: {
        [key: string]: any;
    };
    /**
    * Data to post. In this case of a GET, this indicates query parameters.
    * For other requests, this is the request body object (which will be serialized
    * into a JSON string unless isRawData is set to true).
    */
    data?: any;
    /**
    * Query parameters to add to the url. In the case of a GET, query parameters can
    * be supplied via 'data' or 'queryParams'. For other verbs such as POST, the
    * data object specifies the POST body, so queryParams is needed to indicate
    * parameters to add to the query string of the url (not included in the post body).
    */
    queryParams?: IDictionaryStringTo<any>;
    /**
    * HTTP verb (GET by default if not specified)
    */
    httpMethod?: string;
    /**
    * The http response (Accept) type. This is "json" (corresponds to application/json Accept header)
    * unless otherwise specified. Other possible values are "html" or "text".
    */
    httpResponseType?: string;
    /**
    * Contract metadata for the request body. This allows us to do the necessary serialization
    * for the provided 'data' object using VSS serialization settings.
    */
    requestType?: Serialization.ContractMetadata;
    /**
    * Contract metadata for the response. This allows us to do the necessary deserialization
    * for the response object using VSS serialization settings.
    */
    responseType?: Serialization.ContractMetadata;
    /**
    * Indicates that the response is expected to be a wrapped array, so unwrap the response to
    * a regular array.
    */
    responseIsCollection?: boolean;
    /**
    * Allows the caller to specify custom request headers.
    */
    customHeaders?: {
        [headerName: string]: any;
    };
    /**
    * Request timeout in milliseconds. The default is 5 minutes.
    */
    timeout?: number;
    /**
    * The api version string to send in the request (e.g. "1.0" or "2.0-preview.2")
    */
    apiVersion?: string;
    /**
    * If true, this indicates that no processing should be done on the 'data' object
    * before it is sent in the request. *This is rarely needed*. One case is when posting
    * an HTML5 File object.
    */
    isRawData?: boolean;
}
/**
* Base class that should be used (derived from) to make requests to VSS REST apis
*/
export class VssHttpClient {
    private static APIS_RELATIVE_PATH;
    private static DEFAULT_REQUEST_TIMEOUT;
    private static _legacyDateRegExp;
    private _locationsByAreaPromises;
    _rootRequestPath: string;
    authTokenManager: IAuthTokenManager<any>;
    private _initializationPromise;
    constructor(rootRequestPath: string);
    /**
     * Sets a promise that is waited on before any requests are issued. Can be used to asynchronously
     * set the request url and auth token manager.
     */
    _setInitializationPromise(promise: IPromise<any>): void;
    /**
    * Issue a request to a VSS REST endpoint.
    *
    * @param requestParams request options
    * @param useAjaxResult If true, textStatus and jqXHR are added to the success callback. In this case, spread (instead of then) needs to be used
    * @returns Q Promise for the response
    */
    _beginRequest<T>(requestParams: VssApiResourceRequestParams, useAjaxResult?: boolean): IPromise<T>;
    /**
    * Issue a request to a VSS REST endpoint and makes sure the result contains jqXHR. Use spread to access jqXHR.
    *
    * @param requestParams request options
    * @returns Q Promise for the response
    */
    _beginRequestWithAjaxResult<T>(requestParams: VssApiResourceRequestParams): Q.Promise<T>;
    /**
     * Issue an AJAX request. This is a wrapper around jquery's ajax method that handles VSS authentication
     * and triggers events that can be listened to by other modules.
     *
     * @param requestUrl Url to send the request to
     * @param ajaxOptions jQuery.ajax options
     * @param useAjaxResult If true, textStatus and jqXHR are added to the success callback. In this case, spread (instead of then) needs to be used.
     */
    _issueAjaxRequest(requestUrl: string, ajaxOptions: JQueryAjaxSettings, useAjaxResult?: boolean): IPromise<any>;
    /**
     * Gets information about an API resource location (route template, supported versions, etc.)
     *
     * @param area resource area name
     * @param locationId Guid of the location to get
     */
    _beginGetLocation(area: string, locationId: string): IPromise<WebApi_Contracts.ApiResourceLocation>;
    private beginGetAreaLocations(area);
    private getRequestUrl(location, routeValues, queryParams?);
    private replaceRouteValues(routeTemplate, routeValues);
    _getLinkResponseHeaders(xhr: XMLHttpRequest): {
        [relName: string]: string;
    };
}
}
declare module "VSS/XDM.Host" {
export function createChannel(targetWindow: Window): IXDMChannel;
/**
* Manages XDM channels per target window/frame
*/
export var channelManager: IXDMChannelManager;
/**
* Registered XDM objects
*/
export var globalObjectRegistry: IXDMObjectRegistry;
}
declare module "TFS/Build/Contracts" {
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface AgentPoolQueue extends ShallowReference {
    _links: any;
    /**
    * The pool used by this queue.
    */
    pool: TaskAgentPoolReference;
}
export enum AgentStatus {
    /**
    * Indicates that the build agent cannot be contacted.
    */
    Unavailable = 0,
    /**
    * Indicates that the build agent is currently available.
    */
    Available = 1,
    /**
    * Indicates that the build agent has taken itself offline.
    */
    Offline = 2,
}
export interface ArtifactResource {
    /**
    * The type-specific resource data. For example, &quot;#/10002/5/drop&quot;, &quot;$/drops/5&quot;, &quot;\\myshare\myfolder\mydrops\5&quot;
    */
    data: string;
    /**
    * Link to the resource. This might include things like query parameters to download as a zip file
    */
    downloadUrl: string;
    /**
    * The type of the resource: File container, version control folder, UNC path, etc.
    */
    type: string;
    /**
    * Link to the resource
    */
    url: string;
}
export enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
}
/**
* Data representation of a build
*/
export interface Build {
    _links: any;
    /**
    * Build number/name of the build
    */
    buildNumber: string;
    /**
    * The build controller. This should only be set if the definition type is Xaml.
    */
    controller: BuildController;
    /**
    * The definition associated with the build
    */
    definition: DefinitionReference;
    /**
    * Demands
    */
    demands: any[];
    /**
    * Time that the build was completed
    */
    finishTime: Date;
    /**
    * Id of the build
    */
    id: number;
    keepForever: boolean;
    /**
    * Process or person that last changed the build
    */
    lastChangedBy: VSS_Common_Contracts.IdentityRef;
    /**
    * Date the build was last changed
    */
    lastChangedDate: Date;
    /**
    * Log location of the build
    */
    logs: BuildLogReference;
    /**
    * Orchestration plan for the build
    */
    orchestrationPlan: TaskOrchestrationPlanReference;
    /**
    * Parameters for the build
    */
    parameters: string;
    /**
    * The build's priority
    */
    priority: QueuePriority;
    /**
    * The team project
    */
    project: TFS_Core_Contracts.TeamProjectReference;
    properties: any;
    /**
    * The queue. This should only be set if the definition type is Build.
    */
    queue: AgentPoolQueue;
    /**
    * Queue option of the build.
    */
    queueOptions: QueueOptions;
    /**
    * The current position of the build in the queue
    */
    queuePosition: number;
    /**
    * Time that the build was queued
    */
    queueTime: Date;
    /**
    * Reason that the build was created
    */
    reason: BuildReason;
    /**
    * The repository
    */
    repository: BuildRepository;
    /**
    * The identity that queued the build
    */
    requestedBy: VSS_Common_Contracts.IdentityRef;
    /**
    * The identity on whose behalf the build was queued
    */
    requestedFor: VSS_Common_Contracts.IdentityRef;
    /**
    * The build result
    */
    result: BuildResult;
    /**
    * Source branch
    */
    sourceBranch: string;
    /**
    * Source version
    */
    sourceVersion: string;
    /**
    * Time that the build was started
    */
    startTime: Date;
    /**
    * Status of the build
    */
    status: BuildStatus;
    tags: string[];
    /**
    * Uri of the build
    */
    uri: string;
    /**
    * REST url of the build
    */
    url: string;
    validationResults: BuildRequestValidationResult[];
}
export interface BuildAgent {
    buildDirectory: string;
    controller: ShallowReference;
    createdDate: Date;
    description: string;
    enabled: boolean;
    id: number;
    messageQueueUrl: string;
    name: string;
    reservedForBuild: string;
    server: ShallowReference;
    status: AgentStatus;
    statusMessage: string;
    updatedDate: Date;
    uri: string;
    url: string;
}
export interface BuildArtifact {
    /**
    * The artifact id
    */
    id: number;
    /**
    * The name of the artifact
    */
    name: string;
    /**
    * The actual resource
    */
    resource: ArtifactResource;
}
export enum BuildAuthorizationScope {
    /**
    * The identity used should have build service account permissions scoped to the project collection. This is useful when resources for a single build are spread across multiple projects.
    */
    ProjectCollection = 1,
    /**
    * The identity used should have build service account permissions scoped to the project in which the build definition resides. This is useful for isolation of build jobs to a particular team project to avoid any unintentional escalation of privilege attacks during a build.
    */
    Project = 2,
}
export interface BuildCompletedEvent extends BuildUpdatedEvent {
}
export interface BuildController extends ShallowReference {
    _links: any;
    /**
    * The date the controller was created.
    */
    createdDate: Date;
    /**
    * The description of the controller.
    */
    description: string;
    /**
    * Indicates whether the controller is enabled.
    */
    enabled: boolean;
    /**
    * The status of the controller.
    */
    status: ControllerStatus;
    /**
    * The date the controller was last updated.
    */
    updatedDate: Date;
    /**
    * The controller's URI.
    */
    uri: string;
}
export interface BuildDefinition extends BuildDefinitionReference {
    _links: any;
    /**
    * Indicates whether badges are enabled for this definition
    */
    badgeEnabled: boolean;
    build: BuildDefinitionStep[];
    /**
    * The build number format
    */
    buildNumberFormat: string;
    /**
    * The comment entered when saving the definition
    */
    comment: string;
    /**
    * The date the definition was created
    */
    createdDate: Date;
    demands: any[];
    /**
    * The description
    */
    description: string;
    /**
    * The drop location for the definition
    */
    dropLocation: string;
    /**
    * Gets or sets the job authorization scope for builds which are queued against this definition
    */
    jobAuthorizationScope: BuildAuthorizationScope;
    /**
    * Gets or sets the job execution timeout in minutes for builds which are queued against this definition
    */
    jobTimeoutInMinutes: number;
    options: BuildOption[];
    properties: any;
    /**
    * The repository
    */
    repository: BuildRepository;
    retentionRules: RetentionPolicy[];
    triggers: BuildTrigger[];
    variables: {
        [key: string]: BuildDefinitionVariable;
    };
}
export interface BuildDefinitionChangingEvent {
    changeType: AuditAction;
    newDefinition: BuildDefinition;
    originalDefinition: BuildDefinition;
}
export interface BuildDefinitionReference extends DefinitionReference {
    /**
    * The author of the definition.
    */
    authoredBy: VSS_Common_Contracts.IdentityRef;
    /**
    * If this is a draft definition, it might have a parent
    */
    draftOf: DefinitionReference;
    /**
    * The quality of the definition document (draft, etc.)
    */
    quality: DefinitionQuality;
    /**
    * The default queue which should be used for requests.
    */
    queue: AgentPoolQueue;
}
export interface BuildDefinitionRevision {
    changedBy: VSS_Common_Contracts.IdentityRef;
    changedDate: Date;
    changeType: AuditAction;
    comment: string;
    definitionUrl: string;
    name: string;
    revision: number;
}
export interface BuildDefinitionSourceProvider {
    /**
    * Uri of the associated definition
    */
    definitionUri: string;
    /**
    * fields associated with this build definition
    */
    fields: {
        [key: string]: string;
    };
    /**
    * Id of this source provider
    */
    id: number;
    /**
    * The lst time this source provider was modified
    */
    lastModified: Date;
    /**
    * Name of the source provider
    */
    name: string;
    /**
    * Which trigger types are supported by this definition source provider
    */
    supportedTriggerTypes: DefinitionTriggerType;
}
export interface BuildDefinitionStep {
    alwaysRun: boolean;
    continueOnError: boolean;
    displayName: string;
    enabled: boolean;
    inputs: {
        [key: string]: string;
    };
    task: TaskDefinitionReference;
}
export interface BuildDefinitionTemplate {
    canDelete: boolean;
    category: string;
    description: string;
    iconTaskId: string;
    id: string;
    name: string;
    template: BuildDefinition;
}
export interface BuildDefinitionVariable {
    allowOverride: boolean;
    isSecret: boolean;
    value: string;
}
export interface BuildDeployment {
    deployment: BuildSummary;
    sourceBuild: ShallowReference;
}
/**
* Represents a build log.
*/
export interface BuildLog extends BuildLogReference {
    /**
    * The date the log was created.
    */
    createdOn: Date;
    /**
    * The date the log was last changed.
    */
    lastChangedOn: Date;
    /**
    * The number of lines in the log.
    */
    lineCount: number;
}
/**
* Data representation of a build log reference
*/
export interface BuildLogReference {
    /**
    * The id of the log.
    */
    id: number;
    /**
    * The type of the log location.
    */
    type: string;
    /**
    * Full link to the log resource.
    */
    url: string;
}
export interface BuildOption {
    definition: BuildOptionDefinitionReference;
    enabled: boolean;
    inputs: {
        [key: string]: string;
    };
}
export interface BuildOptionDefinition extends BuildOptionDefinitionReference {
    description: string;
    groups: BuildOptionGroupDefinition[];
    inputs: BuildOptionInputDefinition[];
    name: string;
    ordinal: number;
}
export interface BuildOptionDefinitionReference {
    id: string;
}
export interface BuildOptionGroupDefinition {
    displayName: string;
    isExpanded: boolean;
    name: string;
}
export interface BuildOptionInputDefinition {
    defaultValue: string;
    groupName: string;
    help: {
        [key: string]: string;
    };
    label: string;
    name: string;
    options: {
        [key: string]: string;
    };
    required: boolean;
    type: BuildOptionInputType;
    visibleRule: string;
}
export enum BuildOptionInputType {
    String = 0,
    Boolean = 1,
    StringList = 2,
    Radio = 3,
    PickList = 4,
    MultiLine = 5,
}
export enum BuildPhaseStatus {
    /**
    * The state is not known.
    */
    Unknown = 0,
    /**
    * The build phase completed unsuccessfully.
    */
    Failed = 1,
    /**
    * The build phase completed successfully.
    */
    Succeeded = 2,
}
export interface BuildProcessTemplate {
    description: string;
    fileExists: boolean;
    id: number;
    parameters: string;
    serverPath: string;
    supportedReasons: BuildReason;
    teamProject: string;
    templateType: ProcessTemplateType;
    url: string;
    version: string;
}
export enum BuildReason {
    /**
    * No reason. This value should not be used.
    */
    None = 0,
    /**
    * The build was started manually.
    */
    Manual = 1,
    /**
    * The build was started for the trigger TriggerType.ContinuousIntegration.
    */
    IndividualCI = 2,
    /**
    * The build was started for the trigger TriggerType.BatchedContinuousIntegration.
    */
    BatchedCI = 4,
    /**
    * The build was started for the trigger TriggerType.Schedule.
    */
    Schedule = 8,
    /**
    * The build was created by a user.
    */
    UserCreated = 32,
    /**
    * The build was started manually for private validation.
    */
    ValidateShelveset = 64,
    /**
    * The build was started for the trigger ContinuousIntegrationType.Gated.
    */
    CheckInShelveset = 128,
    /**
    * The build was triggered for retention policy purposes.
    */
    Triggered = 175,
    /**
    * All reasons.
    */
    All = 239,
}
export interface BuildRepository {
    checkoutSubmodules: boolean;
    /**
    * Indicates whether to clean the target folder when getting code from the repository. This is a String so that it can reference variables.
    */
    clean: string;
    /**
    * Gets or sets the name of the default branch.
    */
    defaultBranch: string;
    id: string;
    /**
    * Gets or sets the friendly name of the repository.
    */
    name: string;
    properties: {
        [key: string]: string;
    };
    /**
    * Gets or sets the root folder.
    */
    rootFolder: string;
    /**
    * Gets or sets the type of the repository.
    */
    type: string;
    /**
    * Gets or sets the url of the repository.
    */
    url: string;
}
export interface BuildRequestValidationResult {
    message: string;
    result: ValidationResult;
}
export enum BuildResult {
    /**
    * No result
    */
    None = 0,
    /**
    * The build completed successfully.
    */
    Succeeded = 2,
    /**
    * The build completed compilation successfully but had other errors.
    */
    PartiallySucceeded = 4,
    /**
    * The build completed unsuccessfully.
    */
    Failed = 8,
    /**
    * The build was canceled before starting.
    */
    Canceled = 32,
}
export interface BuildsDeletedEvent {
}
export interface BuildServer {
    agents: ShallowReference[];
    controller: ShallowReference;
    id: number;
    isVirtual: boolean;
    messageQueueUrl: string;
    name: string;
    requireClientCertificates: boolean;
    status: ServiceHostStatus;
    statusChangedDate: Date;
    uri: string;
    url: string;
    version: number;
}
export interface BuildSettings {
    defaultRetentionPolicy: RetentionPolicy;
    maximumRetentionPolicy: RetentionPolicy;
}
export interface BuildStartedEvent extends BuildUpdatedEvent {
}
export enum BuildStatus {
    /**
    * No status.
    */
    None = 0,
    /**
    * The build is currently in progress.
    */
    InProgress = 1,
    /**
    * The build has completed.
    */
    Completed = 2,
    /**
    * The build is cancelling
    */
    Cancelling = 4,
    /**
    * The build is inactive in the queue.
    */
    Postponed = 8,
    /**
    * The build has not yet started.
    */
    NotStarted = 32,
    /**
    * All status.
    */
    All = 47,
}
export interface BuildSummary {
    build: ShallowReference;
    finishTime: Date;
    keepForever: boolean;
    quality: string;
    reason: BuildReason;
    requestedFor: VSS_Common_Contracts.IdentityRef;
    startTime: Date;
    status: BuildStatus;
}
export interface BuildTrigger {
    triggerType: DefinitionTriggerType;
}
export interface BuildUpdatedEvent extends RealtimeBuildEvent {
    build: Build;
}
export interface BuildWorkspace {
    mappings: MappingDetails[];
}
/**
* Represents a change associated with a build.
*/
export interface Change {
    /**
    * The author of the change.
    */
    author: VSS_Common_Contracts.IdentityRef;
    /**
    * The location of a user-friendly representation of the resource.
    */
    displayUri: string;
    /**
    * Something that identifies the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset id.
    */
    id: string;
    /**
    * The location of the full representation of the resource.
    */
    location: string;
    /**
    * A description of the change. This might be a commit message or changeset description.
    */
    message: string;
    /**
    * Indicates whether the message was truncated
    */
    messageTruncated: boolean;
    /**
    * A timestamp for the change.
    */
    timestamp: Date;
    /**
    * The type of change. &quot;commit&quot;, &quot;changeset&quot;, etc.
    */
    type: string;
}
export interface ConsoleLogEvent extends RealtimeBuildEvent {
    lines: string[];
    timelineId: string;
    timelineRecordId: string;
}
export interface ContinuousDeploymentDefinition {
    /**
    * The connected service associated with the continuous deployment
    */
    connectedService: TFS_Core_Contracts.WebApiConnectedServiceRef;
    /**
    * The definition associated with the continuous deployment
    */
    definition: ShallowReference;
    gitBranch: string;
    hostedServiceName: string;
    project: TFS_Core_Contracts.TeamProjectReference;
    repositoryId: string;
    storageAccountName: string;
    subscriptionId: string;
    website: string;
    webspace: string;
}
export interface ContinuousIntegrationTrigger extends BuildTrigger {
    batchChanges: boolean;
    branchFilters: string[];
}
export enum ControllerStatus {
    /**
    * Indicates that the build controller cannot be contacted.
    */
    Unavailable = 0,
    /**
    * Indicates that the build controller is currently available.
    */
    Available = 1,
    /**
    * Indicates that the build controller has taken itself offline.
    */
    Offline = 2,
}
export enum DefinitionQuality {
    Definition = 1,
    Draft = 2,
}
export enum DefinitionQueueStatus {
    /**
    * When enabled the definition queue allows builds to be queued by users, the system will queue scheduled, gated and continuous integration builds, and the queued builds will be started by the system.
    */
    Enabled = 0,
    /**
    * When paused the definition queue allows builds to be queued by users and the system will queue scheduled, gated and continuous integration builds. Builds in the queue will not be started by the system.
    */
    Paused = 1,
    /**
    * When disabled the definition queue will not allow builds to be queued by users and the system will not queue scheduled, gated or continuous integration builds. Builds already in the queue will not be started by the system.
    */
    Disabled = 2,
}
/**
* A reference to a definition.
*/
export interface DefinitionReference extends ShallowReference {
    /**
    * The project.
    */
    project: TFS_Core_Contracts.TeamProjectReference;
    /**
    * If builds can be queued from this definition
    */
    queueStatus: DefinitionQueueStatus;
    /**
    * The definition revision number.
    */
    revision: number;
    /**
    * The type of the definition.
    */
    type: DefinitionType;
    /**
    * The Uri of the definition
    */
    uri: string;
}
export enum DefinitionTriggerType {
    /**
    * Manual builds only.
    */
    None = 1,
    /**
    * A build should be started for each changeset.
    */
    ContinuousIntegration = 2,
    /**
    * A build should be started for multiple changesets at a time at a specified interval.
    */
    BatchedContinuousIntegration = 4,
    /**
    * A build should be started on a specified schedule whether or not changesets exist.
    */
    Schedule = 8,
    /**
    * A validation build should be started for each check-in.
    */
    GatedCheckIn = 16,
    /**
    * A validation build should be started for each batch of check-ins.
    */
    BatchedGatedCheckIn = 32,
    /**
    * All types.
    */
    All = 63,
}
export enum DefinitionType {
    Xaml = 1,
    Build = 2,
}
export enum DeleteOptions {
    /**
    * No data should be deleted. This value should not be used.
    */
    None = 0,
    /**
    * The drop location should be deleted.
    */
    DropLocation = 1,
    /**
    * The test results should be deleted.
    */
    TestResults = 2,
    /**
    * The version control label should be deleted.
    */
    Label = 4,
    /**
    * The build should be deleted.
    */
    Details = 8,
    /**
    * Published symbols should be deleted.
    */
    Symbols = 16,
    /**
    * All data should be deleted.
    */
    All = 31,
}
export enum GetOption {
    /**
    * Use the latest changeset at the time the build is queued.
    */
    LatestOnQueue = 0,
    /**
    * Use the latest changeset at the time the build is started.
    */
    LatestOnBuild = 1,
    /**
    * A user-specified version has been supplied.
    */
    Custom = 2,
}
/**
* Data representation of an information node associated with a build
*/
export interface InformationNode {
    /**
    * Fields of the information node
    */
    fields: {
        [key: string]: string;
    };
    /**
    * Process or person that last modified this node
    */
    lastModifiedBy: string;
    /**
    * Date this node was last modified
    */
    lastModifiedDate: Date;
    /**
    * Node Id of this information node
    */
    nodeId: number;
    /**
    * Id of parent node (xml tree)
    */
    parentId: number;
    /**
    * The type of the information node
    */
    type: string;
}
export interface Issue {
    category: string;
    data: {
        [key: string]: string;
    };
    message: string;
    type: IssueType;
}
export enum IssueType {
    Error = 1,
    Warning = 2,
}
export interface MappingDetails {
    mappingType: string;
    serverPath: string;
}
export enum ProcessTemplateType {
    /**
    * Indicates a custom template.
    */
    Custom = 0,
    /**
    * Indicates a default template.
    */
    Default = 1,
    /**
    * Indicates an upgrade template.
    */
    Upgrade = 2,
}
export interface PropertyValue {
    /**
    * Guid of identity that changed this property value
    */
    changedBy: string;
    /**
    * The date this property value was changed
    */
    changedDate: Date;
    /**
    * Name in the name value mapping
    */
    propertyName: string;
    /**
    * Value in the name value mapping
    */
    value: any;
}
export enum QueueOptions {
    /**
    * No queue options
    */
    None = 0,
    /**
    * Create a plan Id for the build, do not run it
    */
    DoNotRun = 1,
}
export enum QueuePriority {
    /**
    * Low priority.
    */
    Low = 5,
    /**
    * Below normal priority.
    */
    BelowNormal = 4,
    /**
    * Normal priority.
    */
    Normal = 3,
    /**
    * Above normal priority.
    */
    AboveNormal = 2,
    /**
    * High priority.
    */
    High = 1,
}
export interface RealtimeBuildEvent {
    buildId: number;
}
export interface RequestReference {
    /**
    * Id of the resource
    */
    id: number;
    /**
    * Name of the requestor
    */
    requestedFor: VSS_Common_Contracts.IdentityRef;
    /**
    * Full http link to the resource
    */
    url: string;
}
export interface RetentionPolicy {
    branches: string[];
    daysToKeep: number;
    deleteBuildRecord: boolean;
}
export interface Schedule {
    branchFilters: string[];
    /**
    * Days for a build (flags enum for days of the week)
    */
    daysToBuild: ScheduleDays;
    /**
    * The Job Id of the Scheduled job that will queue the scheduled build. Since a single trigger can have multiple schedules and we want a single job to process a single schedule (since each schedule has a list of branches to build), the schedule itself needs to define the Job Id. This value will be filled in when a definition is added or updated.  The UI does not provide it or use it.
    */
    scheduleJobId: string;
    /**
    * Local timezone hour to start
    */
    startHours: number;
    /**
    * Local timezone minute to start
    */
    startMinutes: number;
    /**
    * Time zone of the build schedule (string representation of the time zone id)
    */
    timeZoneId: string;
}
export enum ScheduleDays {
    /**
    * Do not run.
    */
    None = 0,
    /**
    * Run on Monday.
    */
    Monday = 1,
    /**
    * Run on Tuesday.
    */
    Tuesday = 2,
    /**
    * Run on Wednesday.
    */
    Wednesday = 4,
    /**
    * Run on Thursday.
    */
    Thursday = 8,
    /**
    * Run on Friday.
    */
    Friday = 16,
    /**
    * Run on Saturday.
    */
    Saturday = 32,
    /**
    * Run on Sunday.
    */
    Sunday = 64,
    /**
    * Run on all days of the week.
    */
    All = 127,
}
export interface ScheduleTrigger extends BuildTrigger {
    schedules: Schedule[];
}
export enum ServiceHostStatus {
    /**
    * The service host is currently connected and accepting commands.
    */
    Online = 1,
    /**
    * The service host is currently disconnected and not accepting commands.
    */
    Offline = 2,
}
/**
* An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
*/
export interface ShallowReference {
    /**
    * Id of the resource
    */
    id: number;
    /**
    * Name of the linked resource (definition name, controller name, etc.)
    */
    name: string;
    /**
    * Full http link to the resource
    */
    url: string;
}
export interface TaskAgentPoolReference {
    id: number;
    name: string;
}
export interface TaskDefinitionReference {
    id: string;
    versionSpec: string;
}
export interface TaskOrchestrationPlanReference {
    planId: string;
}
export enum TaskResult {
    Succeeded = 0,
    SucceededWithIssues = 1,
    Failed = 2,
    Canceled = 3,
    Skipped = 4,
    Abandoned = 5,
}
export interface Timeline extends TimelineReference {
    lastChangedBy: string;
    lastChangedOn: Date;
    records: TimelineRecord[];
}
export interface TimelineRecord {
    _links: any;
    changeId: number;
    currentOperation: string;
    details: TimelineReference;
    errorCount: number;
    finishTime: Date;
    id: string;
    issues: Issue[];
    lastModified: Date;
    log: BuildLogReference;
    name: string;
    order: number;
    parentId: string;
    percentComplete: number;
    result: TaskResult;
    resultCode: string;
    startTime: Date;
    state: TimelineRecordState;
    type: string;
    url: string;
    warningCount: number;
    workerName: string;
}
export enum TimelineRecordState {
    Pending = 0,
    InProgress = 1,
    Completed = 2,
}
export interface TimelineRecordsUpdatedEvent extends RealtimeBuildEvent {
    timelineRecords: TimelineRecord[];
}
export interface TimelineReference {
    changeId: number;
    id: string;
    url: string;
}
export enum ValidationResult {
    OK = 0,
    Warning = 1,
    Error = 2,
}
/**
* Mapping for a workspace
*/
export interface WorkspaceMapping {
    /**
    * Uri of the associated definition
    */
    definitionUri: string;
    /**
    * Depth of this mapping
    */
    depth: number;
    /**
    * local location of the definition
    */
    localItem: string;
    /**
    * type of workspace mapping
    */
    mappingType: WorkspaceMappingType;
    /**
    * Server location of the definition
    */
    serverItem: string;
    /**
    * Id of the workspace
    */
    workspaceId: number;
}
export enum WorkspaceMappingType {
    /**
    * The path is mapped in the workspace.
    */
    Map = 0,
    /**
    * The path is cloaked in the workspace.
    */
    Cloak = 1,
}
export interface WorkspaceTemplate {
    /**
    * Uri of the associated definition
    */
    definitionUri: string;
    /**
    * The identity that last modified this template
    */
    lastModifiedBy: string;
    /**
    * The last time this template was modified
    */
    lastModifiedDate: Date;
    /**
    * List of workspace mappings
    */
    mappings: WorkspaceMapping[];
    /**
    * Id of the workspace for this template
    */
    workspaceId: number;
}
export interface XamlBuildDefinition extends DefinitionReference {
    _links: any;
    /**
    * Batch size of the definition
    */
    batchSize: number;
    buildArgs: string;
    /**
    * The continuous integration quiet period
    */
    continuousIntegrationQuietPeriod: number;
    /**
    * The build controller
    */
    controller: BuildController;
    /**
    * The date this definition was created
    */
    createdOn: Date;
    /**
    * Default drop location for builds from this definition
    */
    defaultDropLocation: string;
    /**
    * Description of the definition
    */
    description: string;
    /**
    * The last build on this definition
    */
    lastBuild: ShallowReference;
    /**
    * The reasons supported by the template
    */
    supportedReasons: BuildReason;
    /**
    * How builds are triggered from this definition
    */
    triggerType: DefinitionTriggerType;
}
export var TypeInfo: {
    AgentPoolQueue: {
        fields: any;
    };
    AgentStatus: {
        enumValues: {
            "unavailable": number;
            "available": number;
            "offline": number;
        };
    };
    ArtifactResource: {
        fields: any;
    };
    AuditAction: {
        enumValues: {
            "add": number;
            "update": number;
            "delete": number;
        };
    };
    Build: {
        fields: any;
    };
    BuildAgent: {
        fields: any;
    };
    BuildArtifact: {
        fields: any;
    };
    BuildAuthorizationScope: {
        enumValues: {
            "projectCollection": number;
            "project": number;
        };
    };
    BuildCompletedEvent: {
        fields: any;
    };
    BuildController: {
        fields: any;
    };
    BuildDefinition: {
        fields: any;
    };
    BuildDefinitionChangingEvent: {
        fields: any;
    };
    BuildDefinitionReference: {
        fields: any;
    };
    BuildDefinitionRevision: {
        fields: any;
    };
    BuildDefinitionSourceProvider: {
        fields: any;
    };
    BuildDefinitionStep: {
        fields: any;
    };
    BuildDefinitionTemplate: {
        fields: any;
    };
    BuildDefinitionVariable: {
        fields: any;
    };
    BuildDeployment: {
        fields: any;
    };
    BuildLog: {
        fields: any;
    };
    BuildLogReference: {
        fields: any;
    };
    BuildOption: {
        fields: any;
    };
    BuildOptionDefinition: {
        fields: any;
    };
    BuildOptionDefinitionReference: {
        fields: any;
    };
    BuildOptionGroupDefinition: {
        fields: any;
    };
    BuildOptionInputDefinition: {
        fields: any;
    };
    BuildOptionInputType: {
        enumValues: {
            "string": number;
            "boolean": number;
            "stringList": number;
            "radio": number;
            "pickList": number;
            "multiLine": number;
        };
    };
    BuildPhaseStatus: {
        enumValues: {
            "unknown": number;
            "failed": number;
            "succeeded": number;
        };
    };
    BuildProcessTemplate: {
        fields: any;
    };
    BuildReason: {
        enumValues: {
            "none": number;
            "manual": number;
            "individualCI": number;
            "batchedCI": number;
            "schedule": number;
            "userCreated": number;
            "validateShelveset": number;
            "checkInShelveset": number;
            "triggered": number;
            "all": number;
        };
    };
    BuildRepository: {
        fields: any;
    };
    BuildRequestValidationResult: {
        fields: any;
    };
    BuildResult: {
        enumValues: {
            "none": number;
            "succeeded": number;
            "partiallySucceeded": number;
            "failed": number;
            "canceled": number;
        };
    };
    BuildsDeletedEvent: {
        fields: any;
    };
    BuildServer: {
        fields: any;
    };
    BuildSettings: {
        fields: any;
    };
    BuildStartedEvent: {
        fields: any;
    };
    BuildStatus: {
        enumValues: {
            "none": number;
            "inProgress": number;
            "completed": number;
            "cancelling": number;
            "postponed": number;
            "notStarted": number;
            "all": number;
        };
    };
    BuildSummary: {
        fields: any;
    };
    BuildTrigger: {
        fields: any;
    };
    BuildUpdatedEvent: {
        fields: any;
    };
    BuildWorkspace: {
        fields: any;
    };
    Change: {
        fields: any;
    };
    ConsoleLogEvent: {
        fields: any;
    };
    ContinuousDeploymentDefinition: {
        fields: any;
    };
    ContinuousIntegrationTrigger: {
        fields: any;
    };
    ControllerStatus: {
        enumValues: {
            "unavailable": number;
            "available": number;
            "offline": number;
        };
    };
    DefinitionQuality: {
        enumValues: {
            "definition": number;
            "draft": number;
        };
    };
    DefinitionQueueStatus: {
        enumValues: {
            "enabled": number;
            "paused": number;
            "disabled": number;
        };
    };
    DefinitionReference: {
        fields: any;
    };
    DefinitionTriggerType: {
        enumValues: {
            "none": number;
            "continuousIntegration": number;
            "batchedContinuousIntegration": number;
            "schedule": number;
            "gatedCheckIn": number;
            "batchedGatedCheckIn": number;
            "all": number;
        };
    };
    DefinitionType: {
        enumValues: {
            "xaml": number;
            "build": number;
        };
    };
    DeleteOptions: {
        enumValues: {
            "none": number;
            "dropLocation": number;
            "testResults": number;
            "label": number;
            "details": number;
            "symbols": number;
            "all": number;
        };
    };
    GetOption: {
        enumValues: {
            "latestOnQueue": number;
            "latestOnBuild": number;
            "custom": number;
        };
    };
    InformationNode: {
        fields: any;
    };
    Issue: {
        fields: any;
    };
    IssueType: {
        enumValues: {
            "error": number;
            "warning": number;
        };
    };
    MappingDetails: {
        fields: any;
    };
    ProcessTemplateType: {
        enumValues: {
            "custom": number;
            "default": number;
            "upgrade": number;
        };
    };
    PropertyValue: {
        fields: any;
    };
    QueueOptions: {
        enumValues: {
            "none": number;
            "doNotRun": number;
        };
    };
    QueuePriority: {
        enumValues: {
            "low": number;
            "belowNormal": number;
            "normal": number;
            "aboveNormal": number;
            "high": number;
        };
    };
    RealtimeBuildEvent: {
        fields: any;
    };
    RequestReference: {
        fields: any;
    };
    RetentionPolicy: {
        fields: any;
    };
    Schedule: {
        fields: any;
    };
    ScheduleDays: {
        enumValues: {
            "none": number;
            "monday": number;
            "tuesday": number;
            "wednesday": number;
            "thursday": number;
            "friday": number;
            "saturday": number;
            "sunday": number;
            "all": number;
        };
    };
    ScheduleTrigger: {
        fields: any;
    };
    ServiceHostStatus: {
        enumValues: {
            "online": number;
            "offline": number;
        };
    };
    ShallowReference: {
        fields: any;
    };
    TaskAgentPoolReference: {
        fields: any;
    };
    TaskDefinitionReference: {
        fields: any;
    };
    TaskOrchestrationPlanReference: {
        fields: any;
    };
    TaskResult: {
        enumValues: {
            "succeeded": number;
            "succeededWithIssues": number;
            "failed": number;
            "canceled": number;
            "skipped": number;
            "abandoned": number;
        };
    };
    Timeline: {
        fields: any;
    };
    TimelineRecord: {
        fields: any;
    };
    TimelineRecordState: {
        enumValues: {
            "pending": number;
            "inProgress": number;
            "completed": number;
        };
    };
    TimelineRecordsUpdatedEvent: {
        fields: any;
    };
    TimelineReference: {
        fields: any;
    };
    ValidationResult: {
        enumValues: {
            "oK": number;
            "warning": number;
            "error": number;
        };
    };
    WorkspaceMapping: {
        fields: any;
    };
    WorkspaceMappingType: {
        enumValues: {
            "map": number;
            "cloak": number;
        };
    };
    WorkspaceTemplate: {
        fields: any;
    };
    XamlBuildDefinition: {
        fields: any;
    };
};
}
declare module "TFS/Build/RestClient" {
import Contracts = require("TFS/Build/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class BuildHttpClient extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    constructor(rootRequestPath: string);
    /**
     * Associates an artifact with a build
     *
     * @param {Contracts.BuildArtifact} artifact
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact>
     */
    createArtifact(artifact: Contracts.BuildArtifact, buildId: number, project?: string): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact>
     */
    getArtifact(buildId: number, artifactName: string, project?: string): IPromise<Contracts.BuildArtifact>;
    /**
     * Gets all artifacts for a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildArtifact[]>
     */
    getArtifacts(buildId: number, project?: string): IPromise<Contracts.BuildArtifact[]>;
    /**
     * @param {string} project
     * @param {number} definitionId
     * @param {string} branchName
     * @return IPromise<string>
     */
    getBadge(project: string, definitionId: number, branchName?: string): IPromise<string>;
    /**
     * Deletes a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteBuild(buildId: number, project?: string): IPromise<void>;
    /**
     * Gets a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
     * @return IPromise<Contracts.Build>
     */
    getBuild(buildId: number, project?: string, propertyFilters?: string): IPromise<Contracts.Build>;
    /**
     * Gets builds
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition ids
     * @param {number[]} queues - A comma-delimited list of queue ids
     * @param {string} buildNumber
     * @param {Date} minFinishTime
     * @param {Date} maxFinishTime
     * @param {string} requestedFor
     * @param {Contracts.BuildReason} reasonFilter
     * @param {Contracts.BuildStatus} statusFilter
     * @param {Contracts.BuildResult} resultFilter
     * @param {string[]} tagFilters - A comma-delimited list of tags
     * @param {string[]} properties - A comma-delimited list of properties to include in the results
     * @param {Contracts.DefinitionType} type - The definition type
     * @param {number} top - The maximum number of builds to retrieve
     * @param {string} continuationToken
     * @return IPromise<Contracts.Build[]>
     */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: Contracts.BuildReason, statusFilter?: Contracts.BuildStatus, resultFilter?: Contracts.BuildResult, tagFilters?: string[], properties?: string[], type?: Contracts.DefinitionType, top?: number, continuationToken?: string): IPromise<Contracts.Build[]>;
    /**
     * Queues a build
     *
     * @param {Contracts.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @return IPromise<Contracts.Build>
     */
    queueBuild(build: Contracts.Build, project?: string, ignoreWarnings?: boolean): IPromise<Contracts.Build>;
    /**
     * Updates a build
     *
     * @param {Contracts.Build} build
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.Build>
     */
    updateBuild(build: Contracts.Build, buildId: number, project?: string): IPromise<Contracts.Build>;
    /**
     * Gets the changes associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of changes to return
     * @return IPromise<Contracts.Change[]>
     */
    getBuildCommits(project: string, buildId: number, top?: number): IPromise<Contracts.Change[]>;
    /**
     * Gets a controller
     *
     * @param {number} controllerId
     * @return IPromise<Contracts.BuildController>
     */
    getBuildController(controllerId: number): IPromise<Contracts.BuildController>;
    /**
     * Gets controller, optionally filtered by name
     *
     * @param {string} name
     * @return IPromise<Contracts.BuildController[]>
     */
    getBuildControllers(name?: string): IPromise<Contracts.BuildController[]>;
    /**
     * Creates a new definition
     *
     * @param {Contracts.BuildDefinition} definition
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     * @return IPromise<Contracts.BuildDefinition>
     */
    createDefinition(definition: Contracts.BuildDefinition, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): IPromise<Contracts.BuildDefinition>;
    /**
     * Deletes a definition
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteDefinition(definitionId: number, project?: string): IPromise<void>;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {string[]} propertyFilters
     * @return IPromise<Contracts.DefinitionReference>
     */
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[]): IPromise<Contracts.DefinitionReference>;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {Contracts.DefinitionType} type
     * @return IPromise<Contracts.DefinitionReference[]>
     */
    getDefinitions(project?: string, name?: string, type?: Contracts.DefinitionType): IPromise<Contracts.DefinitionReference[]>;
    /**
     * Updates an existing definition
     *
     * @param {Contracts.BuildDefinition} definition
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildDefinition>
     */
    updateDefinition(definition: Contracts.BuildDefinition, definitionId: number, project?: string): IPromise<Contracts.BuildDefinition>;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<Contracts.BuildLog[]>
     */
    getBuildLogs(project: string, buildId: number): IPromise<Contracts.BuildLog[]>;
    /**
     * @return IPromise<Contracts.BuildOptionDefinition[]>
     */
    getBuildOptionDefinitions(): IPromise<Contracts.BuildOptionDefinition[]>;
    /**
     * Creates a build queue
     *
     * @param {Contracts.AgentPoolQueue} queue
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    createQueue(queue: Contracts.AgentPoolQueue): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Deletes a build queue
     *
     * @param {number} id
     * @return IPromise<void>
     */
    deleteQueue(id: number): IPromise<void>;
    /**
     * Gets a queue
     *
     * @param {number} controllerId
     * @return IPromise<Contracts.AgentPoolQueue>
     */
    getAgentPoolQueue(controllerId: number): IPromise<Contracts.AgentPoolQueue>;
    /**
     * Gets queues, optionally filtered by name
     *
     * @param {string} name
     * @return IPromise<Contracts.AgentPoolQueue[]>
     */
    getQueues(name?: string): IPromise<Contracts.AgentPoolQueue[]>;
    /**
     * Gets revisions of a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @return IPromise<Contracts.BuildDefinitionRevision[]>
     */
    getDefinitionRevisions(project: string, definitionId: number): IPromise<Contracts.BuildDefinitionRevision[]>;
    /**
     * @return IPromise<Contracts.BuildSettings>
     */
    getBuildSettings(): IPromise<Contracts.BuildSettings>;
    /**
     * Updates the build settings
     *
     * @param {Contracts.BuildSettings} settings
     * @return IPromise<Contracts.BuildSettings>
     */
    updateBuildSettings(settings: Contracts.BuildSettings): IPromise<Contracts.BuildSettings>;
    /**
     * Adds a tag to a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    addBuildTag(project: string, buildId: number, tag: string): IPromise<string[]>;
    /**
     * Adds tag to a build
     *
     * @param {string[]} tags
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<string[]>
     */
    addBuildTags(tags: string[], project: string, buildId: number): IPromise<string[]>;
    /**
     * Deletes a tag from a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} tag
     * @return IPromise<string[]>
     */
    deleteBuildTag(project: string, buildId: number, tag: string): IPromise<string[]>;
    /**
     * Gets the tags for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @return IPromise<string[]>
     */
    getBuildTags(project: string, buildId: number): IPromise<string[]>;
    /**
     * @param {string} project - Project ID or project name
     * @return IPromise<string[]>
     */
    getTags(project: string): IPromise<string[]>;
    /**
     * Deletes a definition template
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<void>
     */
    deleteTemplate(project: string, templateId: string): IPromise<void>;
    /**
     * Gets definition template filtered by id
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.BuildDefinitionTemplate>
     */
    getTemplate(project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate>;
    /**
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.BuildDefinitionTemplate[]>
     */
    getTemplates(project: string): IPromise<Contracts.BuildDefinitionTemplate[]>;
    /**
     * Saves a definition template
     *
     * @param {Contracts.BuildDefinitionTemplate} template
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @return IPromise<Contracts.BuildDefinitionTemplate>
     */
    saveTemplate(template: Contracts.BuildDefinitionTemplate, project: string, templateId: string): IPromise<Contracts.BuildDefinitionTemplate>;
    /**
     * Gets details for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} timelineId
     * @return IPromise<Contracts.Timeline>
     */
    getBuildTimeline(project: string, buildId: number, timelineId?: string): IPromise<Contracts.Timeline>;
}
}
declare module "TFS/Core/Contracts" {
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export enum ConnectedServiceKind {
    /**
    * Custom or unknown service
    */
    Custom = 0,
    /**
    * Azure Subscription
    */
    AzureSubscription = 1,
    /**
    * Chef Connection
    */
    Chef = 2,
    /**
    * Generic Connection
    */
    Generic = 3,
}
export interface IdentityData {
    identityIds: string[];
}
export enum ProjectChangeType {
    Modified = 0,
    Deleted = 1,
    Added = 2,
}
/**
* Contains information of the project
*/
export interface ProjectInfo {
    abbreviation: string;
    description: string;
    id: string;
    lastUpdateTime: Date;
    name: string;
    properties: ProjectProperty[];
    /**
    * Current revision of the project
    */
    revision: number;
    state: any;
    uri: string;
    version: number;
}
export interface ProjectMessage {
    project: ProjectInfo;
    projectChangeType: ProjectChangeType;
}
export interface ProjectProperty {
    name: string;
    value: string;
}
export interface Proxy {
    /**
    * This is a description string
    */
    description: string;
    /**
    * The friendly name of the server
    */
    friendlyName: string;
    globalDefault: boolean;
    /**
    * This is a string representation of the site that the proxy server is located in (e.g. &quot;NA-WA-RED&quot;)
    */
    site: string;
    siteDefault: boolean;
    /**
    * The URL of the proxy server
    */
    url: string;
}
export enum SourceControlTypes {
    Tfvc = 1,
    Git = 2,
}
/**
* The Team Context for an operation.
*/
export interface TeamContext {
    /**
    * The team project Id or name.  Ignored if ProjectId is set.
    */
    project: string;
    /**
    * The Team Project ID.  Required if Project is not set.
    */
    projectId: string;
    /**
    * The Team Id or name.  Ignored if TeamId is set.
    */
    team: string;
    /**
    * The Team Id
    */
    teamId: string;
}
/**
* Represents a Team Project object.
*/
export interface TeamProject extends TeamProjectReference {
    /**
    * The links to other objects related to this object.
    */
    _links: any;
    capabilities: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
    * The shallow ref to the default team.
    */
    defaultTeam: WebApiTeamRef;
}
/**
* Data contract for a TeamProjectCollection.
*/
export interface TeamProjectCollection extends TeamProjectCollectionReference {
    /**
    * The links to other objects related to this object.
    */
    _links: any;
    /**
    * Project collection description.
    */
    description: string;
    /**
    * Project collection state.
    */
    state: string;
}
/**
* Reference object for a TeamProjectCollection.
*/
export interface TeamProjectCollectionReference {
    /**
    * Collection Id.
    */
    id: string;
    /**
    * Collection Name.
    */
    name: string;
    /**
    * Collection REST Url.
    */
    url: string;
}
/**
* Represents a shallow reference to a TeamProject.
*/
export interface TeamProjectReference {
    /**
    * Project abbreviation.
    */
    abbreviation: string;
    /**
    * The project's description (if any).
    */
    description: string;
    /**
    * Project identifier.
    */
    id: string;
    /**
    * Project name.
    */
    name: string;
    /**
    * Project revision.
    */
    revision: number;
    /**
    * Project state.
    */
    state: any;
    /**
    * Url to the full version of the object.
    */
    url: string;
}
export interface WebApiConnectedService extends WebApiConnectedServiceRef {
    /**
    * The user who did the OAuth authentication to created this service
    */
    authenticatedBy: VSS_Common_Contracts.IdentityRef;
    /**
    * Extra description on the service.
    */
    description: string;
    /**
    * Friendly Name of service connection
    */
    friendlyName: string;
    /**
    * Id/Name of the connection service. For Ex: Subscription Id for Azure Connection
    */
    id: string;
    /**
    * The kind of service.
    */
    kind: string;
    /**
    * The project associated with this service
    */
    project: TeamProjectReference;
    /**
    * Optional uri to connect directly to the service such as https://windows.azure.com
    */
    serviceUri: string;
}
export interface WebApiConnectedServiceDetails extends WebApiConnectedServiceRef {
    /**
    * Meta data for service connection
    */
    connectedServiceMetaData: WebApiConnectedService;
    /**
    * Credential info
    */
    credentialsXml: string;
    /**
    * Optional uri to connect directly to the service such as https://windows.azure.com
    */
    endPoint: string;
}
export interface WebApiConnectedServiceRef {
    id: string;
    url: string;
}
/**
* The representation of data needed to create a tag definition which is sent across the wire.
*/
export interface WebApiCreateTagRequestData {
    name: string;
}
export interface WebApiProject extends TeamProjectReference {
    /**
    * Set of capabilities this project has
    */
    capabilities: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
    * Reference to collection which contains this project
    */
    collection: WebApiProjectCollectionRef;
    /**
    * Default team for this project
    */
    defaultTeam: WebApiTeamRef;
}
export interface WebApiProjectCollection extends WebApiProjectCollectionRef {
    /**
    * Project collection description
    */
    description: string;
    /**
    * Project collection state
    */
    state: string;
}
export interface WebApiProjectCollectionRef {
    /**
    * Collection Tfs Url (Host Url)
    */
    collectionUrl: string;
    /**
    * Collection Guid
    */
    id: string;
    /**
    * Collection Name
    */
    name: string;
    /**
    * Collection REST Url
    */
    url: string;
}
/**
* The representation of a tag definition which is sent across the wire.
*/
export interface WebApiTagDefinition {
    active: boolean;
    id: string;
    name: string;
    url: string;
}
export interface WebApiTeam extends WebApiTeamRef {
    /**
    * Team description
    */
    description: string;
    /**
    * Identity REST API Url to this team
    */
    identityUrl: string;
}
export interface WebApiTeamRef {
    /**
    * Team (Identity) Guid. A Team Foundation ID.
    */
    id: string;
    /**
    * Team name
    */
    name: string;
    /**
    * Team REST API Url
    */
    url: string;
}
export var TypeInfo: {
    ConnectedServiceKind: {
        enumValues: {
            "custom": number;
            "azureSubscription": number;
            "chef": number;
            "generic": number;
        };
    };
    IdentityData: {
        fields: any;
    };
    ProjectChangeType: {
        enumValues: {
            "modified": number;
            "deleted": number;
            "added": number;
        };
    };
    ProjectInfo: {
        fields: any;
    };
    ProjectMessage: {
        fields: any;
    };
    ProjectProperty: {
        fields: any;
    };
    Proxy: {
        fields: any;
    };
    SourceControlTypes: {
        enumValues: {
            "tfvc": number;
            "git": number;
        };
    };
    TeamContext: {
        fields: any;
    };
    TeamProject: {
        fields: any;
    };
    TeamProjectCollection: {
        fields: any;
    };
    TeamProjectCollectionReference: {
        fields: any;
    };
    TeamProjectReference: {
        fields: any;
    };
    WebApiConnectedService: {
        fields: any;
    };
    WebApiConnectedServiceDetails: {
        fields: any;
    };
    WebApiConnectedServiceRef: {
        fields: any;
    };
    WebApiCreateTagRequestData: {
        fields: any;
    };
    WebApiProject: {
        fields: any;
    };
    WebApiProjectCollection: {
        fields: any;
    };
    WebApiProjectCollectionRef: {
        fields: any;
    };
    WebApiTagDefinition: {
        fields: any;
    };
    WebApiTeam: {
        fields: any;
    };
    WebApiTeamRef: {
        fields: any;
    };
};
}
declare module "TFS/Core/RestClient" {
import Contracts = require("TFS/Core/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_Operations_Contracts = require("VSS/Operations/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class CoreHttpClient extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    constructor(rootRequestPath: string);
    /**
     * @param {Contracts.WebApiConnectedServiceDetails} connectedServiceCreationData
     * @param {string} projectId
     * @return IPromise<Contracts.WebApiConnectedService>
     */
    createConnectedService(connectedServiceCreationData: Contracts.WebApiConnectedServiceDetails, projectId: string): IPromise<Contracts.WebApiConnectedService>;
    /**
     * @param {string} projectId
     * @param {string} name
     * @return IPromise<Contracts.WebApiConnectedServiceDetails>
     */
    getConnectedServiceDetails(projectId: string, name: string): IPromise<Contracts.WebApiConnectedServiceDetails>;
    /**
     * @param {string} projectId
     * @param {Contracts.ConnectedServiceKind} kind
     * @return IPromise<Contracts.WebApiConnectedService[]>
     */
    getConnectedServices(projectId: string, kind?: Contracts.ConnectedServiceKind): IPromise<Contracts.WebApiConnectedService[]>;
    /**
     * @param {Contracts.IdentityData} mruData
     * @param {string} mruName
     * @return IPromise<void>
     */
    createIdentityMru(mruData: Contracts.IdentityData, mruName: string): IPromise<void>;
    /**
     * @param {Contracts.IdentityData} mruData
     * @param {string} mruName
     * @return IPromise<void>
     */
    deleteIdentityMru(mruData: Contracts.IdentityData, mruName: string): IPromise<void>;
    /**
     * @param {string} mruName
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getIdentityMru(mruName: string): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * @param {Contracts.IdentityData} mruData
     * @param {string} mruName
     * @return IPromise<void>
     */
    updateIdentityMru(mruData: Contracts.IdentityData, mruName: string): IPromise<void>;
    /**
     * @param {string} projectId
     * @param {string} teamId
     * @param {number} top
     * @param {number} skip
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * Get project collection with the specified id or name.
     *
     * @param {string} collectionId
     * @return IPromise<Contracts.TeamProjectCollection>
     */
    getProjectCollection(collectionId: string): IPromise<Contracts.TeamProjectCollection>;
    /**
     * Get project collection references for this application.
     *
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.TeamProjectCollectionReference[]>
     */
    getProjectCollections(top?: number, skip?: number): IPromise<Contracts.TeamProjectCollectionReference[]>;
    /**
     * @param {number} minRevision
     * @return IPromise<Contracts.TeamProjectReference[]>
     */
    getProjectHistory(minRevision?: number): IPromise<Contracts.TeamProjectReference[]>;
    /**
     * Get project with the specified id or name, optionally including capabilities.
     *
     * @param {string} projectId
     * @param {boolean} includeCapabilities - Include capabilities (such as source control) in the team project result (default: false).
     * @param {boolean} includeHistory - Search within renamed projects (that had such name in the past).
     * @return IPromise<Contracts.TeamProject>
     */
    getProject(projectId: string, includeCapabilities?: boolean, includeHistory?: boolean): IPromise<Contracts.TeamProject>;
    /**
     * Get project references with the specified state
     *
     * @param {any} stateFilter - Filter on team projects in a specific team project state (default: WellFormed).
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.TeamProjectReference[]>
     */
    getProjects(stateFilter?: any, top?: number, skip?: number): IPromise<Contracts.TeamProjectReference[]>;
    /**
     * Queue a project creation.
     *
     * @param {Contracts.TeamProject} projectToCreate - The project to create.
     * @return IPromise<VSS_Operations_Contracts.OperationReference>
     */
    queueCreateProject(projectToCreate: Contracts.TeamProject): IPromise<VSS_Operations_Contracts.OperationReference>;
    /**
     * Queue a project deletion.
     *
     * @param {string} projectId - The project id of the project to delete.
     * @return IPromise<VSS_Operations_Contracts.OperationReference>
     */
    queueDeleteProject(projectId: string): IPromise<VSS_Operations_Contracts.OperationReference>;
    /**
     * Update an existing project's name, abbreviation, or description.
     *
     * @param {Contracts.TeamProject} projectUpdate - The updates for the project.
     * @param {string} projectId - The project id of the project to update.
     * @return IPromise<VSS_Operations_Contracts.OperationReference>
     */
    updateProject(projectUpdate: Contracts.TeamProject, projectId: string): IPromise<VSS_Operations_Contracts.OperationReference>;
    /**
     * @param {string} proxyUrl
     * @return IPromise<Contracts.Proxy[]>
     */
    getProxies(proxyUrl?: string): IPromise<Contracts.Proxy[]>;
    /**
     * @param {string} projectId
     * @param {string} teamId
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WebApiTeam>
     */
    getTeams(projectId: string, teamId?: string, top?: number, skip?: number): IPromise<Contracts.WebApiTeam>;
}
}
declare module "TFS/DistributedTask/Contracts" {
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface AgentPoolEvent {
    eventType: string;
    pool: TaskAgentPool;
}
export interface AgentRefreshMessage {
    agentId: number;
    timeout: any;
}
export enum ConnectedServiceKind {
    /**
    * Custom or unknown service
    */
    Custom = 0,
    /**
    * Azure Subscription
    */
    AzureSubscription = 1,
    /**
    * Chef Connection
    */
    Chef = 2,
    /**
    * Generic Connection
    */
    Generic = 3,
}
export interface EndpointAuthorization {
    parameters: {
        [key: string]: string;
    };
    scheme: string;
}
export interface Issue {
    category: string;
    data: {
        [key: string]: string;
    };
    message: string;
    type: IssueType;
}
export enum IssueType {
    Error = 1,
    Warning = 2,
}
export interface JobAssignedEvent extends JobEvent {
    request: TaskAgentJobRequest;
}
export interface JobCancelMessage {
    jobId: string;
    timeout: any;
}
export interface JobCompletedEvent extends JobEvent {
    result: TaskResult;
}
/**
* Represents the context of variables and vectors for a job request.
*/
export interface JobEnvironment {
    endpoints: ServiceEndpoint[];
    mask: MaskHint[];
    options: {
        [key: number]: JobOption;
    };
    /**
    * Gets or sets the endpoint used for communicating back to the calling service.
    */
    systemConnection: ServiceEndpoint;
    variables: {
        [key: string]: string;
    };
}
export interface JobEvent {
    jobId: string;
    name: string;
}
/**
* Represents an option that may affect the way an agent runs the job.
*/
export interface JobOption {
    data: {
        [key: string]: string;
    };
    /**
    * Gets the id of the option.
    */
    id: string;
}
export interface JobRequestMessage {
    endpoints: ServiceEndpoint[];
    environment: JobEnvironment;
    jobId: string;
    jobName: string;
    lockedUntil: Date;
    lockToken: string;
    options: JobOption[];
    plan: TaskOrchestrationPlanReference;
    requestId: number;
    tasks: TaskInstance[];
    timeline: TimelineReference;
}
export interface MaskHint {
    type: MaskType;
    value: string;
}
export enum MaskType {
    Variable = 1,
    Regex = 2,
}
export interface PlanEnvironment {
    mask: MaskHint[];
    options: {
        [key: number]: JobOption;
    };
    variables: {
        [key: string]: string;
    };
}
/**
* Represents an endpoint which may be used by an orchestration job.
*/
export interface ServiceEndpoint {
    /**
    * Gets or sets the authorization data for talking to the endpoint.
    */
    authorization: EndpointAuthorization;
    data: {
        [key: string]: string;
    };
    /**
    * Gets or sets the identifier of this endpoint.
    */
    id: string;
    /**
    * Gets or sets the friendly name of the endpoint.
    */
    name: string;
    /**
    * Gets or sets the type of the endpoint.
    */
    type: string;
    /**
    * Gets or sets the url of the endpoint.
    */
    url: string;
}
export interface TaskAgent extends TaskAgentReference {
    /**
    * Gets the date on which this agent was created.
    */
    createdOn: Date;
    /**
    * Gets or sets a value indicating whether or not this agent should be enabled for job execution.
    */
    enabled: boolean;
    /**
    * Gets or sets the maximum job parallelism allowed on this host.
    */
    maxParallelism: number;
    properties: any;
    /**
    * Gets the current connectivity status of the agent.
    */
    status: TaskAgentStatus;
    /**
    * Gets the date on which the last connectivity status change occurred.
    */
    statusChangedOn: Date;
    systemCapabilities: {
        [key: string]: string;
    };
    userCapabilities: {
        [key: string]: string;
    };
}
export interface TaskAgentJobRequest {
    assignTime: Date;
    demands: any[];
    finishTime: Date;
    hostId: string;
    jobId: string;
    lockedUntil: Date;
    planId: string;
    planType: string;
    queueTime: Date;
    receiveTime: Date;
    requestId: number;
    reservedAgent: TaskAgentReference;
    result: TaskResult;
    scopeId: string;
    serviceOwner: string;
}
export interface TaskAgentMessage {
    body: string;
    messageId: number;
    messageType: string;
}
export interface TaskAgentPool extends TaskAgentPoolReference {
    /**
    * Gets the administrators group for this agent pool.
    */
    administratorsGroup: VSS_Common_Contracts.IdentityRef;
    /**
    * Gets or sets a value indicating whether or not a queue should be automatically provisioned for each project collection or not.
    */
    autoProvision: boolean;
    /**
    * Gets the identity who created this pool. The creator of the pool is automatically added into the administrators group for the pool on creation.
    */
    createdBy: VSS_Common_Contracts.IdentityRef;
    /**
    * Gets the date/time of the pool creation.
    */
    createdOn: Date;
    /**
    * Gets the scope identifier for groups/roles which are owned by this pool.
    */
    groupScopeId: string;
    /**
    * Gets or sets a value indicating whether or not this pool is managed by the service.
    */
    isHosted: boolean;
    properties: any;
    /**
    * Gets the service accounts group for this agent pool.
    */
    serviceAccountsGroup: VSS_Common_Contracts.IdentityRef;
    /**
    * Gets the current size of the pool.
    */
    size: number;
}
export interface TaskAgentPoolReference {
    id: number;
    name: string;
    scope: string;
}
export interface TaskAgentReference {
    /**
    * Gets the identifier of the agent.
    */
    id: number;
    /**
    * Gets the name of the agent.
    */
    name: string;
    /**
    * Gets the version of the agent.
    */
    version: string;
}
export interface TaskAgentSession {
    agent: TaskAgentReference;
    ownerName: string;
    sessionId: string;
    systemCapabilities: {
        [key: string]: string;
    };
}
export enum TaskAgentStatus {
    Offline = 1,
    Online = 2,
}
export interface TaskDefinition {
    agentExecution: TaskExecution;
    author: string;
    category: string;
    contentsUploaded: boolean;
    demands: any[];
    description: string;
    friendlyName: string;
    groups: TaskGroupDefinition[];
    hostType: string;
    iconUrl: string;
    id: string;
    inputs: TaskInputDefinition[];
    instanceNameFormat: string;
    minimumAgentVersion: string;
    name: string;
    packageLocation: string;
    packageType: string;
    serverOwned: boolean;
    sourceDefinitions: TaskSourceDefinition[];
    sourceLocation: string;
    version: TaskVersion;
    visibility: string[];
}
export interface TaskDefinitionEndpoint {
    /**
    * An ID that identifies a service connection to be used for authenticating endpoint requests.
    */
    connectionId: string;
    /**
    * The scope as understood by Connected Services. Essentialy, a project-id for now.
    */
    scope: string;
    /**
    * An XPath/Json based selector to filter response returned by fetching the endpoint Url. An XPath based selector must be prefixed with the string &quot;xpath:&quot;. A Json based selector must be prefixed with &quot;json:&quot;.  The following selector defines an XPath for extracting nodes named 'ServiceName'.  endpoint.Selector = &quot;xpath://ServiceName&quot;;
    */
    selector: string;
    /**
    * TaskId that this endpoint belongs to.
    */
    taskId: string;
    /**
    * URL to GET.
    */
    url: string;
}
export interface TaskExecution {
    /**
    * The utility task to run.  Specifying this means that this task definition is simply a meta task to call another task. This is useful for tasks that call utility tasks like powershell and commandline
    */
    execTask: TaskReference;
    /**
    * If a task is going to run code, then this provides the type/script etc... information by platform. For example, it might look like. net45: { typeName: &quot;Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask&quot;, assemblyName: &quot;Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll&quot; } net20: { typeName: &quot;Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask&quot;, assemblyName: &quot;Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll&quot; } java: { jar: &quot;powershelltask.tasks.automation.teamfoundation.microsoft.com&quot;, } node: { script: &quot;powershellhost.js&quot;, }
    */
    platformInstructions: {
        [key: string]: {
            [key: string]: string;
        };
    };
}
export interface TaskGroupDefinition {
    displayName: string;
    isExpanded: boolean;
    name: string;
}
export interface TaskInputDefinition {
    defaultValue: string;
    groupName: string;
    helpMarkDown: string;
    label: string;
    name: string;
    options: {
        [key: string]: string;
    };
    properties: {
        [key: string]: string;
    };
    required: boolean;
    type: string;
    visibleRule: string;
}
export interface TaskInstance extends TaskReference {
    alwaysRun: boolean;
    continueOnError: boolean;
    displayName: string;
    enabled: boolean;
    instanceId: string;
}
export interface TaskLog extends TaskLogReference {
    createdOn: Date;
    indexLocation: string;
    lastChangedOn: Date;
    lineCount: number;
    path: string;
}
export interface TaskLogReference {
    id: number;
    location: string;
}
export interface TaskOrchestrationContainer extends TaskOrchestrationItem {
    children: TaskOrchestrationItem[];
    continueOnError: boolean;
    parallel: boolean;
    rollback: TaskOrchestrationContainer;
}
export interface TaskOrchestrationItem {
    itemType: TaskOrchestrationItemType;
}
export enum TaskOrchestrationItemType {
    Container = 0,
    Job = 1,
}
export interface TaskOrchestrationJob extends TaskOrchestrationItem {
    demands: any[];
    executeAs: VSS_Common_Contracts.IdentityRef;
    executionTimeout: any;
    instanceId: string;
    name: string;
    tasks: TaskInstance[];
    variables: {
        [key: string]: string;
    };
}
export interface TaskOrchestrationPlan extends TaskOrchestrationPlanReference {
    environment: PlanEnvironment;
    finishTime: Date;
    implementation: TaskOrchestrationContainer;
    result: TaskResult;
    resultCode: string;
    startTime: Date;
    state: TaskOrchestrationPlanState;
    timeline: TimelineReference;
}
export interface TaskOrchestrationPlanReference {
    artifactLocation: string;
    artifactUri: string;
    planId: string;
    planType: string;
    scopeIdentifier: string;
    version: number;
}
export enum TaskOrchestrationPlanState {
    InProgress = 1,
    Queued = 2,
    Completed = 4,
}
export interface TaskPackageMetadata {
    /**
    * Gets the name of the package.
    */
    type: string;
    /**
    * Gets the url of the package.
    */
    url: string;
    /**
    * Gets the version of the package.
    */
    version: string;
}
export interface TaskReference {
    id: string;
    inputs: {
        [key: string]: string;
    };
    name: string;
    version: string;
}
export enum TaskResult {
    Succeeded = 0,
    SucceededWithIssues = 1,
    Failed = 2,
    Canceled = 3,
    Skipped = 4,
    Abandoned = 5,
}
export interface TaskSourceDefinition {
    authKey: string;
    endpoint: string;
    selector: string;
    target: string;
}
export interface TaskVersion {
    isTest: boolean;
    major: number;
    minor: number;
    patch: number;
}
/**
* Represents a shallow reference to a TeamProject.
*/
export interface TeamProjectReference {
    /**
    * Project abbreviation.
    */
    abbreviation: string;
    /**
    * The project's description (if any).
    */
    description: string;
    /**
    * Project identifier.
    */
    id: string;
    /**
    * Project name.
    */
    name: string;
    /**
    * Project state.
    */
    state: any;
    /**
    * Url to the full version of the object.
    */
    url: string;
}
export interface Timeline extends TimelineReference {
    lastChangedBy: string;
    lastChangedOn: Date;
    records: TimelineRecord[];
}
export interface TimelineRecord {
    changeId: number;
    currentOperation: string;
    details: TimelineReference;
    errorCount: number;
    finishTime: Date;
    id: string;
    issues: Issue[];
    lastModified: Date;
    location: string;
    log: TaskLogReference;
    name: string;
    order: number;
    parentId: string;
    percentComplete: number;
    result: TaskResult;
    resultCode: string;
    startTime: Date;
    state: TimelineRecordState;
    type: string;
    warningCount: number;
    workerName: string;
}
export enum TimelineRecordState {
    Pending = 0,
    InProgress = 1,
    Completed = 2,
}
export interface TimelineReference {
    changeId: number;
    id: string;
    location: string;
}
export interface WebApiConnectedService extends WebApiConnectedServiceRef {
    /**
    * The user who did the OAuth authentication to created this service
    */
    authenticatedBy: VSS_Common_Contracts.IdentityRef;
    /**
    * Extra description on the service.
    */
    description: string;
    /**
    * Friendly Name of service connection
    */
    friendlyName: string;
    /**
    * Id/Name of the connection service. For Ex: Subscription Id for Azure Connection
    */
    id: string;
    /**
    * The kind of service.
    */
    kind: string;
    /**
    * The project associated with this service
    */
    project: TeamProjectReference;
    /**
    * Optional uri to connect directly to the service such as https://windows.azure.com
    */
    serviceUri: string;
}
export interface WebApiConnectedServiceDetails extends WebApiConnectedServiceRef {
    /**
    * Meta data for service connection
    */
    connectedServiceMetaData: WebApiConnectedService;
    /**
    * Credential info
    */
    credentialsXml: string;
    /**
    * Optional uri to connect directly to the service such as https://windows.azure.com
    */
    endPoint: string;
}
export interface WebApiConnectedServiceRef {
    id: string;
    url: string;
}
export var TypeInfo: {
    AgentPoolEvent: {
        fields: any;
    };
    AgentRefreshMessage: {
        fields: any;
    };
    ConnectedServiceKind: {
        enumValues: {
            "custom": number;
            "azureSubscription": number;
            "chef": number;
            "generic": number;
        };
    };
    EndpointAuthorization: {
        fields: any;
    };
    Issue: {
        fields: any;
    };
    IssueType: {
        enumValues: {
            "error": number;
            "warning": number;
        };
    };
    JobAssignedEvent: {
        fields: any;
    };
    JobCancelMessage: {
        fields: any;
    };
    JobCompletedEvent: {
        fields: any;
    };
    JobEnvironment: {
        fields: any;
    };
    JobEvent: {
        fields: any;
    };
    JobOption: {
        fields: any;
    };
    JobRequestMessage: {
        fields: any;
    };
    MaskHint: {
        fields: any;
    };
    MaskType: {
        enumValues: {
            "variable": number;
            "regex": number;
        };
    };
    PlanEnvironment: {
        fields: any;
    };
    ServiceEndpoint: {
        fields: any;
    };
    TaskAgent: {
        fields: any;
    };
    TaskAgentJobRequest: {
        fields: any;
    };
    TaskAgentMessage: {
        fields: any;
    };
    TaskAgentPool: {
        fields: any;
    };
    TaskAgentPoolReference: {
        fields: any;
    };
    TaskAgentReference: {
        fields: any;
    };
    TaskAgentSession: {
        fields: any;
    };
    TaskAgentStatus: {
        enumValues: {
            "offline": number;
            "online": number;
        };
    };
    TaskDefinition: {
        fields: any;
    };
    TaskDefinitionEndpoint: {
        fields: any;
    };
    TaskExecution: {
        fields: any;
    };
    TaskGroupDefinition: {
        fields: any;
    };
    TaskInputDefinition: {
        fields: any;
    };
    TaskInstance: {
        fields: any;
    };
    TaskLog: {
        fields: any;
    };
    TaskLogReference: {
        fields: any;
    };
    TaskOrchestrationContainer: {
        fields: any;
    };
    TaskOrchestrationItem: {
        fields: any;
    };
    TaskOrchestrationItemType: {
        enumValues: {
            "container": number;
            "job": number;
        };
    };
    TaskOrchestrationJob: {
        fields: any;
    };
    TaskOrchestrationPlan: {
        fields: any;
    };
    TaskOrchestrationPlanReference: {
        fields: any;
    };
    TaskOrchestrationPlanState: {
        enumValues: {
            "inProgress": number;
            "queued": number;
            "completed": number;
        };
    };
    TaskPackageMetadata: {
        fields: any;
    };
    TaskReference: {
        fields: any;
    };
    TaskResult: {
        enumValues: {
            "succeeded": number;
            "succeededWithIssues": number;
            "failed": number;
            "canceled": number;
            "skipped": number;
            "abandoned": number;
        };
    };
    TaskSourceDefinition: {
        fields: any;
    };
    TaskVersion: {
        fields: any;
    };
    TeamProjectReference: {
        fields: any;
    };
    Timeline: {
        fields: any;
    };
    TimelineRecord: {
        fields: any;
    };
    TimelineRecordState: {
        enumValues: {
            "pending": number;
            "inProgress": number;
            "completed": number;
        };
    };
    TimelineReference: {
        fields: any;
    };
    WebApiConnectedService: {
        fields: any;
    };
    WebApiConnectedServiceDetails: {
        fields: any;
    };
    WebApiConnectedServiceRef: {
        fields: any;
    };
};
}
declare module "TFS/DistributedTask/TaskAgentRestClient" {
import Contracts = require("TFS/DistributedTask/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class TaskAgentHttpClient extends VSS_WebApi.VssHttpClient {
    constructor(rootRequestPath: string);
    /**
     * @param {Contracts.TaskAgent} agent
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgent>
     */
    createAgent(agent: Contracts.TaskAgent, poolId: number): IPromise<Contracts.TaskAgent>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<void>
     */
    deleteAgent(poolId: number, agentId: number): IPromise<void>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {boolean} includeCapabilities
     * @param {string} propertyFilters
     * @return IPromise<Contracts.TaskAgent>
     */
    getAgent(poolId: number, agentId: number, includeCapabilities?: boolean, propertyFilters?: string): IPromise<Contracts.TaskAgent>;
    /**
     * @param {number} poolId
     * @param {string} agentName
     * @param {boolean} includeCapabilities
     * @param {string} propertyFilters
     * @param {string} demands
     * @return IPromise<Contracts.TaskAgent[]>
     */
    getAgents(poolId: number, agentName?: string, includeCapabilities?: boolean, propertyFilters?: string, demands?: string): IPromise<Contracts.TaskAgent[]>;
    /**
     * @param {Contracts.TaskAgent} agent
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<Contracts.TaskAgent>
     */
    replaceAgent(agent: Contracts.TaskAgent, poolId: number, agentId: number): IPromise<Contracts.TaskAgent>;
    /**
     * @param {Contracts.TaskAgent} agent
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<Contracts.TaskAgent>
     */
    updateAgent(agent: Contracts.TaskAgent, poolId: number, agentId: number): IPromise<Contracts.TaskAgent>;
    /**
     * Proxy for a GET request defined by an 'endpoint'. The request is authorized using a service connection. The response is filtered using an XPath/Json based selector.
     *
     * @param {Contracts.TaskDefinitionEndpoint} endpoint - Describes the URL to fetch.
     * @return IPromise<string[]>
     */
    queryEndpoint(endpoint: Contracts.TaskDefinitionEndpoint): IPromise<string[]>;
    /**
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @return IPromise<void>
     */
    deleteRequest(poolId: number, requestId: number, lockToken: string): IPromise<void>;
    /**
     * @param {number} poolId
     * @param {number} requestId
     * @return IPromise<Contracts.TaskAgentJobRequest>
     */
    getRequest(poolId: number, requestId: number): IPromise<Contracts.TaskAgentJobRequest>;
    /**
     * @param {Contracts.TaskAgentJobRequest} request
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgentJobRequest>
     */
    queueRequest(request: Contracts.TaskAgentJobRequest, poolId: number): IPromise<Contracts.TaskAgentJobRequest>;
    /**
     * @param {Contracts.TaskAgentJobRequest} request
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @return IPromise<Contracts.TaskAgentJobRequest>
     */
    updateRequest(request: Contracts.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): IPromise<Contracts.TaskAgentJobRequest>;
    /**
     * @param {number} poolId
     * @param {number} messageId
     * @param {string} sessionId
     * @return IPromise<void>
     */
    deleteMessage(poolId: number, messageId: number, sessionId: string): IPromise<void>;
    /**
     * @param {number} poolId
     * @param {string} sessionId
     * @param {number} lastMessageId
     * @return IPromise<Contracts.TaskAgentMessage>
     */
    getMessage(poolId: number, sessionId: string, lastMessageId?: number): IPromise<Contracts.TaskAgentMessage>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<void>
     */
    refreshAgent(poolId: number, agentId: number): IPromise<void>;
    /**
     * @param {number} poolId
     * @return IPromise<void>
     */
    refreshAgents(poolId: number): IPromise<void>;
    /**
     * @param {Contracts.TaskAgentMessage} message
     * @param {number} poolId
     * @param {number} requestId
     * @return IPromise<void>
     */
    sendMessage(message: Contracts.TaskAgentMessage, poolId: number, requestId: number): IPromise<void>;
    /**
     * @param {Contracts.TaskAgentPool} pool
     * @return IPromise<Contracts.TaskAgentPool>
     */
    createPool(pool: Contracts.TaskAgentPool): IPromise<Contracts.TaskAgentPool>;
    /**
     * @param {number} poolId
     * @return IPromise<void>
     */
    deletePool(poolId: number): IPromise<void>;
    /**
     * @param {number} poolId
     * @param {string} properties
     * @return IPromise<Contracts.TaskAgentPool>
     */
    getPool(poolId: number, properties?: string): IPromise<Contracts.TaskAgentPool>;
    /**
     * @param {string} poolName
     * @param {string} properties
     * @return IPromise<Contracts.TaskAgentPool[]>
     */
    getPools(poolName?: string, properties?: string): IPromise<Contracts.TaskAgentPool[]>;
    /**
     * @param {number} poolId
     * @return IPromise<VSS_Common_Contracts.IdentityRef[]>
     */
    getAgentPoolRoles(poolId?: number): IPromise<VSS_Common_Contracts.IdentityRef[]>;
    /**
     * @param {Contracts.TaskAgentSession} session
     * @param {number} poolId
     * @return IPromise<Contracts.TaskAgentSession>
     */
    createSession(session: Contracts.TaskAgentSession, poolId: number): IPromise<Contracts.TaskAgentSession>;
    /**
     * @param {number} poolId
     * @param {string} sessionId
     * @return IPromise<void>
     */
    deleteSession(poolId: number, sessionId: string): IPromise<void>;
    /**
     * @param {string} taskId
     * @param {string} versionString
     * @return IPromise<Contracts.TaskDefinition[]>
     */
    getTaskContent(taskId: string, versionString?: string): IPromise<Contracts.TaskDefinition[]>;
    /**
     * @param {string[]} visibility
     * @return IPromise<Contracts.TaskDefinition[]>
     */
    getTaskDefinitions(visibility: string[]): IPromise<Contracts.TaskDefinition[]>;
    /**
     * @param {string} taskId
     * @param {boolean} overwrite
     * @return IPromise<void>
     */
    uploadTaskDefinition(taskId: string, overwrite?: boolean): IPromise<void>;
    /**
     * @param {{ [key: string] : string; }} userCapabilities
     * @param {number} poolId
     * @param {number} agentId
     * @return IPromise<Contracts.TaskAgent>
     */
    updateUserCapabilities(userCapabilities: {
        [key: string]: string;
    }, poolId: number, agentId: number): IPromise<Contracts.TaskAgent>;
}
}
declare module "TFS/DistributedTask/TaskRestClient" {
import TFS_DistributedTask_Contracts = require("TFS/DistributedTask/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class TaskHttpClient extends VSS_WebApi.VssHttpClient {
    constructor(rootRequestPath: string);
    /**
     * @param {TFS_DistributedTask_Contracts.JobEvent} eventData
     * @param {string} planId
     * @return IPromise<void>
     */
    postEvent(eventData: TFS_DistributedTask_Contracts.JobEvent, planId: string): IPromise<void>;
    /**
     * @param {VSS_Common_Contracts.VssJsonCollectionWrapperV<string[]>} lines
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @return IPromise<void>
     */
    postLines(lines: VSS_Common_Contracts.VssJsonCollectionWrapperV<string[]>, planId: string, timelineId: string, recordId: string): IPromise<void>;
    /**
     * @param {TFS_DistributedTask_Contracts.TaskLog} log
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.TaskLog>
     */
    createLog(log: TFS_DistributedTask_Contracts.TaskLog, planId: string): IPromise<TFS_DistributedTask_Contracts.TaskLog>;
    /**
     * @param {string} planId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @return IPromise<string[]>
     */
    getLog(planId: string, logId: number, startLine?: number, endLine?: number): IPromise<string[]>;
    /**
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.TaskLog[]>
     */
    getLogs(planId: string): IPromise<TFS_DistributedTask_Contracts.TaskLog[]>;
    /**
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.TaskOrchestrationPlan>
     */
    getPlan(planId: string): IPromise<TFS_DistributedTask_Contracts.TaskOrchestrationPlan>;
    /**
     * @param {string} planId
     * @param {string} timelineId
     * @param {number} changeId
     * @return IPromise<TFS_DistributedTask_Contracts.TimelineRecord[]>
     */
    getRecords(planId: string, timelineId: string, changeId?: number): IPromise<TFS_DistributedTask_Contracts.TimelineRecord[]>;
    /**
     * @param {VSS_Common_Contracts.VssJsonCollectionWrapperV<TFS_DistributedTask_Contracts.TimelineRecord[]>} records
     * @param {string} planId
     * @param {string} timelineId
     * @return IPromise<TFS_DistributedTask_Contracts.TimelineRecord[]>
     */
    updateRecords(records: VSS_Common_Contracts.VssJsonCollectionWrapperV<TFS_DistributedTask_Contracts.TimelineRecord[]>, planId: string, timelineId: string): IPromise<TFS_DistributedTask_Contracts.TimelineRecord[]>;
    /**
     * @param {TFS_DistributedTask_Contracts.Timeline} timeline
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.Timeline>
     */
    createTimeline(timeline: TFS_DistributedTask_Contracts.Timeline, planId: string): IPromise<TFS_DistributedTask_Contracts.Timeline>;
    /**
     * @param {string} planId
     * @param {string} timelineId
     * @return IPromise<void>
     */
    deleteTimeline(planId: string, timelineId: string): IPromise<void>;
    /**
     * @param {string} planId
     * @param {string} timelineId
     * @param {number} changeId
     * @param {boolean} includeRecords
     * @return IPromise<TFS_DistributedTask_Contracts.Timeline>
     */
    getTimeline(planId: string, timelineId: string, changeId?: number, includeRecords?: boolean): IPromise<TFS_DistributedTask_Contracts.Timeline>;
    /**
     * @param {string} planId
     * @return IPromise<TFS_DistributedTask_Contracts.Timeline[]>
     */
    getTimelines(planId: string): IPromise<TFS_DistributedTask_Contracts.Timeline[]>;
}
}
declare module "TFS/TestManagement/Contracts" {
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export enum AttachmentType {
    GeneralAttachment = 0,
    AfnStrip = 1,
    BugFilingData = 2,
    CodeCoverage = 3,
    IntermediateCollectorData = 4,
    RunConfig = 5,
    TestImpactDetails = 6,
    TmiTestRunDeploymentFiles = 7,
    TmiTestRunReverseDeploymentFiles = 8,
    TmiTestResultDetail = 9,
    TmiTestRunSummary = 10,
}
export interface BatchResponse {
    error: string;
    responses: Response[];
    status: string;
}
export interface BuildConfiguration {
    flavor: string;
    id: number;
    platform: string;
    project: ShallowReference;
    uri: string;
}
export interface BuildCoverage {
    configuration: BuildConfiguration;
    lastError: string;
    modules: ModuleCoverage[];
    state: string;
}
export enum CoverageQueryFlags {
    /**
    * If set, the Coverage.Modules property will be populated.
    */
    Modules = 1,
    /**
    * If set, the ModuleCoverage.Functions properties will be populated.
    */
    Functions = 2,
    /**
    * If set, the ModuleCoverage.CoverageData field will be populated.
    */
    BlockData = 4,
}
export interface CoverageStatistics {
    blocksCovered: number;
    blocksNotCovered: number;
    linesCovered: number;
    linesNotCovered: number;
    linesPartiallyCovered: number;
}
/**
* This is a temporary class to provide the details for the test run environment.
*/
export interface DtlEnvironmentDetails {
    csmContent: string;
    csmParameters: string;
    subscriptionName: string;
}
export interface FunctionCoverage {
    class: string;
    name: string;
    namespace: string;
    sourceFile: string;
    statistics: CoverageStatistics;
}
export interface ModuleCoverage {
    blockCount: number;
    blockData: number[];
    functions: FunctionCoverage[];
    name: string;
    signature: string;
    signatureAge: number;
    statistics: CoverageStatistics;
}
export interface PlanUpdateModel {
    area: ShallowReference;
    automatedTestEnvironment: TestEnvironment;
    automatedTestSettings: TestSettings;
    build: ShallowReference;
    configurationIds: number[];
    description: string;
    endDate: string;
    iteration: string;
    manualTestEnvironment: TestEnvironment;
    manualTestSettings: TestSettings;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    startDate: string;
    state: string;
    status: string;
}
export interface PointAssignment {
    configuration: ShallowReference;
    tester: VSS_Common_Contracts.IdentityRef;
}
export interface PointUpdateModel {
}
export interface PointWorkItemProperty {
    workItem: {
        key: string;
        value: any;
    };
}
export interface QueryModel {
    query: string;
}
export interface Response {
    error: string;
    id: string;
    status: string;
    url: string;
}
export enum ResultOutcome {
    Pass = 1,
    Fail = 2,
    Pending = 3,
}
export interface ResultUpdateRequestModel {
    actionResultDeletes: TestActionResultModel[];
    actionResults: TestActionResultModel[];
    parameterDeletes: TestResultParameterModel[];
    parameters: TestResultParameterModel[];
    testCaseResult: TestCaseResultUpdateModel;
}
export interface ResultUpdateResponseModel {
    revision: number;
}
export interface RunCreateModel {
    automated: boolean;
    build: ShallowReference;
    buildDropLocation: string;
    buildFlavor: string;
    buildPlatform: string;
    comment: string;
    completeDate: string;
    configurationIds: number[];
    controller: string;
    dtlTestEnvironment: ShallowReference;
    dueDate: string;
    environmentDetails: DtlEnvironmentDetails;
    errorMessage: string;
    filter: RunFilter;
    iteration: string;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    plan: ShallowReference;
    pointIds: number[];
    releaseEnvironmentUri: string;
    releaseUri: string;
    runTimeout: any;
    startDate: string;
    state: string;
    testEnvironmentId: string;
    testSettings: ShallowReference;
    type: string;
}
/**
* This class is used to provide the filters used for discovery
*/
export interface RunFilter {
    /**
    * filter for the test case sources (test containers)
    */
    sourceFilter: string;
    /**
    * filter for the test cases
    */
    testCaseFilter: string;
}
export interface RunStatistic {
    count: number;
    outcome: string;
    resolutionState: TestResolutionState;
    state: string;
}
export interface RunUpdateModel {
    build: ShallowReference;
    comment: string;
    completedDate: string;
    controller: string;
    deleteInProgressResults: boolean;
    dtlEnvironment: ShallowReference;
    dtlEnvironmentDetails: DtlEnvironmentDetails;
    dueDate: string;
    errorMessage: string;
    iteration: string;
    logEntries: TestMessageLogDetails[];
    name: string;
    startedDate: string;
    state: string;
    substate: TestRunSubstate;
    testEnvironmentId: string;
    testSettings: ShallowReference;
}
/**
* An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
*/
export interface ShallowReference {
    /**
    * Id of the resource
    */
    id: string;
    /**
    * Name of the linked resource (definition name, controller name, etc.)
    */
    name: string;
    /**
    * Full http link to the resource
    */
    url: string;
}
export interface SharedStepModel {
    id: number;
    revision: number;
}
export interface SuiteCreateModel {
}
export interface SuiteTestCase {
    pointAssignments: PointAssignment[];
    testCase: WorkItemReference;
}
export interface SuiteUpdateModel {
}
export interface TestActionResultModel extends TestResultModelBase {
    actionPath: string;
    iterationId: number;
    sharedStepModel: SharedStepModel;
    url: string;
}
export interface TestAttachmentReference {
    id: number;
    url: string;
}
export interface TestAttachmentRequestModel {
    attachmentType: string;
    comment: string;
    fileName: string;
    stream: string;
}
export interface TestCaseResult {
    afnStripId: number;
    associatedBugs: ShallowReference[];
    automatedTestName: string;
    build: ShallowReference;
    comment: string;
    completedDate: Date;
    computerName: string;
    configuration: ShallowReference;
    createdDate: Date;
    durationInMs: number;
    errorMessage: string;
    failureType: string;
    id: number;
    iterationDetails: TestIterationDetailsModel[];
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    outcome: string;
    owner: VSS_Common_Contracts.IdentityRef;
    priority: number;
    project: ShallowReference;
    resetCount: number;
    resolutionStateId: number;
    revision: number;
    runBy: VSS_Common_Contracts.IdentityRef;
    startedDate: Date;
    state: string;
    testCase: ShallowReference;
    testPoint: ShallowReference;
    testRun: ShallowReference;
    url: string;
}
export interface TestCaseResult2 {
    componentId: string;
    custom: any;
    endTime: Date;
    exceptionStack: string;
    externalArtifacts: string[];
    externalRunId: string;
    externalSystem: string;
    externalTestId: string;
    failureReasons: string[];
    failureSummary: string;
    investigationNotes: string;
    isSuperseded: boolean;
    isValid: boolean;
    outcome: ResultOutcome;
    resultCustomPropertiesTypeName: string;
    resultId: string;
    resultName: string;
    runId: string;
    startTime: Date;
    testId: string;
    tfsSecurityKey: string;
}
export interface TestCaseResultAttachmentModel {
    id: number;
    iterationId: number;
    name: string;
    size: number;
    url: string;
}
export interface TestCaseResultIdentifier {
}
export interface TestCaseResultUpdateModel {
    associatedWorkItems: number[];
    automatedTestTypeId: string;
    comment: string;
    completedDate: string;
    computerName: string;
    durationInMs: string;
    errorMessage: string;
    failureType: string;
    outcome: string;
    owner: VSS_Common_Contracts.IdentityRef;
    resolutionState: string;
    runBy: VSS_Common_Contracts.IdentityRef;
    startedDate: string;
    state: string;
    testCasePriority: string;
    testResult: ShallowReference;
}
export interface TestEnvironment {
    environmentId: string;
    environmentName: string;
}
export interface TestIterationDetailsModel {
    actionResults: TestActionResultModel[];
    attachments: TestCaseResultAttachmentModel[];
    comment: string;
    completedDate: Date;
    durationInMs: number;
    errorMessage: string;
    id: number;
    outcome: string;
    parameters: TestResultParameterModel[];
    startedDate: Date;
    url: string;
}
/**
* An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
*/
export interface TestMessageLogDetails {
    /**
    * Date when the resource is created
    */
    dateCreated: Date;
    /**
    * Id of the resource
    */
    entryId: number;
    /**
    * Message of the resource
    */
    message: string;
}
export interface TestPlan {
    area: ShallowReference;
    automatedTestEnvironment: TestEnvironment;
    automatedTestSettings: TestSettings;
    build: ShallowReference;
    clientUrl: string;
    description: string;
    endDate: Date;
    id: number;
    iteration: string;
    manualTestEnvironment: TestEnvironment;
    manualTestSettings: TestSettings;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    previousBuild: ShallowReference;
    project: ShallowReference;
    revision: number;
    rootSuite: ShallowReference;
    startDate: Date;
    state: string;
    updatedBy: VSS_Common_Contracts.IdentityRef;
    updatedDate: Date;
    url: string;
}
export interface TestPlansWithSelection {
    lastSelectedPlan: number;
    lastSelectedSuite: number;
    plans: TestPlan[];
}
export interface TestPoint {
    assignedTo: VSS_Common_Contracts.IdentityRef;
    automated: boolean;
    comment: string;
    configuration: ShallowReference;
    failureType: string;
    id: number;
    lastResolutionStateId: number;
    lastResult: ShallowReference;
    lastTestRun: ShallowReference;
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    outcome: string;
    revision: number;
    state: string;
    suite: ShallowReference;
    testCase: WorkItemReference;
    testPlan: ShallowReference;
    url: string;
    workItemProperties: any[];
}
export interface TestResolutionState {
    id: number;
    name: string;
    project: ShallowReference;
}
export interface TestResultCreateModel {
    area: ShallowReference;
    associatedWorkItems: number[];
    automatedTestId: string;
    automatedTestName: string;
    automatedTestStorage: string;
    automatedTestType: string;
    automatedTestTypeId: string;
    comment: string;
    completedDate: string;
    computerName: string;
    configuration: ShallowReference;
    dataRowCount: number;
    durationInMs: string;
    errorMessage: string;
    failureType: string;
    outcome: string;
    owner: VSS_Common_Contracts.IdentityRef;
    resolutionState: string;
    revision: number;
    runBy: VSS_Common_Contracts.IdentityRef;
    startedDate: string;
    state: string;
    testCase: ShallowReference;
    testCasePriority: string;
    testCaseRevision: number;
    testCaseTitle: string;
    testPoint: ShallowReference;
}
export interface TestResultModelBase {
    comment: string;
    completedDate: Date;
    durationInMs: number;
    errorMessage: string;
    outcome: string;
    startedDate: Date;
}
export interface TestResultParameterModel {
    actionPath: string;
    iterationId: number;
    parameterName: string;
    url: string;
    value: string;
}
export interface TestRun {
    build: ShallowReference;
    buildConfiguration: BuildConfiguration;
    comment: string;
    completedDate: Date;
    controller: string;
    createdDate: Date;
    dropLocation: string;
    dtlEnvironment: ShallowReference;
    dtlEnvironmentCreationDetails: DtlEnvironmentDetails;
    dueDate: Date;
    errorMessage: string;
    filter: RunFilter;
    id: number;
    incompleteTests: number;
    isAutomated: boolean;
    iteration: string;
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    name: string;
    notApplicableTests: number;
    owner: VSS_Common_Contracts.IdentityRef;
    passedTests: number;
    phase: string;
    plan: ShallowReference;
    postProcessState: string;
    project: ShallowReference;
    releaseEnvironmentUri: string;
    releaseUri: string;
    revision: number;
    runStatistics: RunStatistic[];
    startedDate: Date;
    state: string;
    substate: TestRunSubstate;
    testEnvironment: TestEnvironment;
    testMessageLogId: number;
    testSettings: ShallowReference;
    totalTests: number;
    unanalyzedTests: number;
    url: string;
    webAccessUrl: string;
}
export interface TestRunCoverage {
    lastError: string;
    modules: ModuleCoverage[];
    state: string;
    testRun: ShallowReference;
}
export enum TestRunState {
    /**
    * Only used during an update to preserve the existing value.
    */
    Unspecified = 0,
    /**
    * The run is still being created.  No tests have started yet.
    */
    NotStarted = 1,
    /**
    * Tests are running.
    */
    InProgress = 2,
    /**
    * All tests have completed or been skipped.
    */
    Completed = 3,
    /**
    * Run is stopped and remaing tests have been aborted
    */
    Aborted = 4,
    /**
    * Run is currently initializing This is a legacy state and should not be used any more
    */
    Waiting = 5,
    /**
    * Run requires investigation because of a test point failure This is a legacy state and should not be used any more
    */
    NeedsInvestigation = 6,
}
export interface TestRunStatistic {
    run: ShallowReference;
    runStatistics: RunStatistic[];
}
export enum TestRunSubstate {
    None = 0,
    CreatingEnvironment = 1,
    RunningTests = 2,
    CanceledByUser = 3,
    AbortedBySystem = 4,
    TimedOut = 5,
    PendingAnalysis = 6,
    Analyzed = 7,
    CancellationInProgress = 8,
}
/**
* Represents the test settings of the run. Used to create test settings and fetch test settings
*/
export interface TestSettings {
    /**
    * Area path required to create test settings
    */
    areaPath: string;
    /**
    * Description of the test settings. Used in create test settings.
    */
    description: string;
    /**
    * Indicates if the tests settings is public or private.Used in create test settings.
    */
    isPublic: boolean;
    /**
    * Xml string of machine roles. Used in create test settings.
    */
    machineRoles: string;
    /**
    * Test settings content.
    */
    testSettingsContent: string;
    /**
    * Test settings id.
    */
    testSettingsId: number;
    /**
    * Test settings name.
    */
    testSettingsName: string;
}
export interface TestSuite {
    areaUri: string;
    defaultConfigurations: ShallowReference[];
    id: number;
    inheritDefaultConfigurations: boolean;
    lastError: string;
    lastPopulatedDate: Date;
    lastUpdatedBy: VSS_Common_Contracts.IdentityRef;
    lastUpdatedDate: Date;
    name: string;
    parent: ShallowReference;
    plan: ShallowReference;
    project: ShallowReference;
    queryString: string;
    requirementId: number;
    revision: number;
    state: string;
    suites: ShallowReference[];
    suiteType: string;
    testCaseCount: number;
    testCasesUrl: string;
    url: string;
}
export interface WorkItemReference {
    id: string;
    url: string;
    webUrl: string;
}
export var TypeInfo: {
    AttachmentType: {
        enumValues: {
            "generalAttachment": number;
            "afnStrip": number;
            "bugFilingData": number;
            "codeCoverage": number;
            "intermediateCollectorData": number;
            "runConfig": number;
            "testImpactDetails": number;
            "tmiTestRunDeploymentFiles": number;
            "tmiTestRunReverseDeploymentFiles": number;
            "tmiTestResultDetail": number;
            "tmiTestRunSummary": number;
        };
    };
    BatchResponse: {
        fields: any;
    };
    BuildConfiguration: {
        fields: any;
    };
    BuildCoverage: {
        fields: any;
    };
    CoverageQueryFlags: {
        enumValues: {
            "modules": number;
            "functions": number;
            "blockData": number;
        };
    };
    CoverageStatistics: {
        fields: any;
    };
    DtlEnvironmentDetails: {
        fields: any;
    };
    FunctionCoverage: {
        fields: any;
    };
    ModuleCoverage: {
        fields: any;
    };
    PlanUpdateModel: {
        fields: any;
    };
    PointAssignment: {
        fields: any;
    };
    PointUpdateModel: {
        fields: any;
    };
    PointWorkItemProperty: {
        fields: any;
    };
    QueryModel: {
        fields: any;
    };
    Response: {
        fields: any;
    };
    ResultOutcome: {
        enumValues: {
            "pass": number;
            "fail": number;
            "pending": number;
        };
    };
    ResultUpdateRequestModel: {
        fields: any;
    };
    ResultUpdateResponseModel: {
        fields: any;
    };
    RunCreateModel: {
        fields: any;
    };
    RunFilter: {
        fields: any;
    };
    RunStatistic: {
        fields: any;
    };
    RunUpdateModel: {
        fields: any;
    };
    ShallowReference: {
        fields: any;
    };
    SharedStepModel: {
        fields: any;
    };
    SuiteCreateModel: {
        fields: any;
    };
    SuiteTestCase: {
        fields: any;
    };
    SuiteUpdateModel: {
        fields: any;
    };
    TestActionResultModel: {
        fields: any;
    };
    TestAttachmentReference: {
        fields: any;
    };
    TestAttachmentRequestModel: {
        fields: any;
    };
    TestCaseResult: {
        fields: any;
    };
    TestCaseResult2: {
        fields: any;
    };
    TestCaseResultAttachmentModel: {
        fields: any;
    };
    TestCaseResultIdentifier: {
        fields: any;
    };
    TestCaseResultUpdateModel: {
        fields: any;
    };
    TestEnvironment: {
        fields: any;
    };
    TestIterationDetailsModel: {
        fields: any;
    };
    TestMessageLogDetails: {
        fields: any;
    };
    TestPlan: {
        fields: any;
    };
    TestPlansWithSelection: {
        fields: any;
    };
    TestPoint: {
        fields: any;
    };
    TestResolutionState: {
        fields: any;
    };
    TestResultCreateModel: {
        fields: any;
    };
    TestResultModelBase: {
        fields: any;
    };
    TestResultParameterModel: {
        fields: any;
    };
    TestRun: {
        fields: any;
    };
    TestRunCoverage: {
        fields: any;
    };
    TestRunState: {
        enumValues: {
            "unspecified": number;
            "notStarted": number;
            "inProgress": number;
            "completed": number;
            "aborted": number;
            "waiting": number;
            "needsInvestigation": number;
        };
    };
    TestRunStatistic: {
        fields: any;
    };
    TestRunSubstate: {
        enumValues: {
            "none": number;
            "creatingEnvironment": number;
            "runningTests": number;
            "canceledByUser": number;
            "abortedBySystem": number;
            "timedOut": number;
            "pendingAnalysis": number;
            "analyzed": number;
            "cancellationInProgress": number;
        };
    };
    TestSettings: {
        fields: any;
    };
    TestSuite: {
        fields: any;
    };
    WorkItemReference: {
        fields: any;
    };
};
}
declare module "TFS/TestManagement/RestClient" {
import Contracts = require("TFS/TestManagement/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class TestHttpClient extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    constructor(rootRequestPath: string);
    /**
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @return IPromise<Contracts.TestAttachmentReference>
     */
    createTestResultAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number): IPromise<Contracts.TestAttachmentReference>;
    /**
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestAttachmentReference>
     */
    createTestRunAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number): IPromise<Contracts.TestAttachmentReference>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} flags
     * @return IPromise<Contracts.BuildCoverage[]>
     */
    getBuildCodeCoverage(project: string, buildId: number, flags: number): IPromise<Contracts.BuildCoverage[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} flags
     * @return IPromise<Contracts.TestRunCoverage[]>
     */
    getTestRunCodeCoverage(project: string, runId: number, flags: number): IPromise<Contracts.TestRunCoverage[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestMessageLogDetails[]>
     */
    getTestRunLogs(project: string, runId: number): IPromise<Contracts.TestMessageLogDetails[]>;
    /**
     * @param {Contracts.PlanUpdateModel} testPlan
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestPlan>
     */
    createTestPlan(testPlan: Contracts.PlanUpdateModel, project: string): IPromise<Contracts.TestPlan>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @return IPromise<Contracts.TestPlan>
     */
    getPlanById(project: string, planId: number): IPromise<Contracts.TestPlan>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} owner
     * @param {number} skip
     * @param {number} top
     * @param {boolean} includePlanDetails
     * @param {boolean} filterActivePlans
     * @return IPromise<Contracts.TestPlan[]>
     */
    getPlans(project: string, owner?: string, skip?: number, top?: number, includePlanDetails?: boolean, filterActivePlans?: boolean): IPromise<Contracts.TestPlan[]>;
    /**
     * @param {Contracts.PlanUpdateModel} planUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @return IPromise<Contracts.TestPlan>
     */
    updateTestPlan(planUpdateModel: Contracts.PlanUpdateModel, project: string, planId: number): IPromise<Contracts.TestPlan>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {number} pointIds
     * @param {string} witFields
     * @return IPromise<Contracts.TestPoint>
     */
    getPoint(project: string, planId: number, suiteId: number, pointIds: number, witFields?: string): IPromise<Contracts.TestPoint>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} witFields
     * @param {string} configurationId
     * @param {string} testCaseId
     * @param {string} testPointIds
     * @param {boolean} includePointDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestPoint[]>
     */
    getPoints(project: string, planId: number, suiteId: number, witFields?: string, configurationId?: string, testCaseId?: string, testPointIds?: string, includePointDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestPoint[]>;
    /**
     * @param {Contracts.PointUpdateModel} pointUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} pointIds
     * @return IPromise<Contracts.TestPoint[]>
     */
    updateTestPoints(pointUpdateModel: Contracts.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string): IPromise<Contracts.TestPoint[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {boolean} includeActionResults
     * @return IPromise<Contracts.TestIterationDetailsModel>
     */
    getTestIteration(project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults?: boolean): IPromise<Contracts.TestIterationDetailsModel>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeActionResults
     * @return IPromise<Contracts.TestIterationDetailsModel[]>
     */
    getTestIterations(project: string, runId: number, testCaseResultId: number, includeActionResults?: boolean): IPromise<Contracts.TestIterationDetailsModel[]>;
    /**
     * @param {Contracts.TestResultCreateModel[]} resultCreateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    addTestResultsToTestRun(resultCreateModels: Contracts.TestResultCreateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel} resultUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number[]} resultIds
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    bulkUpdateTestResults(resultUpdateModel: Contracts.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeIterationDetails
     * @return IPromise<Contracts.TestCaseResult>
     */
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails?: boolean): IPromise<Contracts.TestCaseResult>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {boolean} includeIterationDetails
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestCaseResults(project: string, runId: number, includeIterationDetails?: boolean): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {Contracts.TestCaseResultUpdateModel[]} resultUpdateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    updateTestResults(resultUpdateModels: Contracts.TestCaseResultUpdateModel[], project: string, runId: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} actionPath
     * @return IPromise<Contracts.TestActionResultModel[]>
     */
    getActionResults(project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): IPromise<Contracts.TestActionResultModel[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @return IPromise<Contracts.TestCaseResultAttachmentModel[]>
     */
    getTestResultAttachments(project: string, runId: number, testCaseResultId: number, iterationId: number): IPromise<Contracts.TestCaseResultAttachmentModel[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} paramName
     * @return IPromise<Contracts.TestResultParameterModel[]>
     */
    getResultParameters(project: string, runId: number, testCaseResultId: number, iterationId: number, paramName?: string): IPromise<Contracts.TestResultParameterModel[]>;
    /**
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeResultDetails
     * @param {boolean} includeIterationDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestCaseResult[]>
     */
    getTestResultsByQuery(query: Contracts.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestCaseResult[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {string} buildUri
     * @param {number} flags
     * @return IPromise<Contracts.BuildCoverage[]>
     */
    getBuildCoverage(project: string, runId: number, buildUri: string, flags: number): IPromise<Contracts.BuildCoverage[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestRunStatistic>
     */
    getTestRunStatistics(project: string, runId: number): IPromise<Contracts.TestRunStatistic>;
    /**
     * @param {Contracts.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeRunDetails
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestRun[]>
     */
    getTestRunsByQuery(query: Contracts.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number): IPromise<Contracts.TestRun[]>;
    /**
     * @param {Contracts.RunCreateModel} testRun
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.TestRun>
     */
    createTestRun(testRun: Contracts.RunCreateModel, project: string): IPromise<Contracts.TestRun>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<void>
     */
    deleteTestRun(project: string, runId: number): IPromise<void>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestRun>
     */
    getTestRunById(project: string, runId: number): IPromise<Contracts.TestRun>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} buildUri
     * @param {string} owner
     * @param {string} tmiRunId
     * @param {number} planId
     * @param {boolean} includeRunDetails
     * @param {boolean} automated
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestRun[]>
     */
    getTestRuns(project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number): IPromise<Contracts.TestRun[]>;
    /**
     * @param {Contracts.RunUpdateModel} runUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @return IPromise<Contracts.TestRun>
     */
    updateTestRun(runUpdateModel: Contracts.RunUpdateModel, project: string, runId: number): IPromise<Contracts.TestRun>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} testCaseIds
     * @return IPromise<Contracts.SuiteTestCase[]>
     */
    addTestCasesToSuite(project: string, planId: number, suiteId: number, testCaseIds: string): IPromise<Contracts.SuiteTestCase[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {number} testCaseIds
     * @return IPromise<Contracts.SuiteTestCase>
     */
    getTestCaseById(project: string, planId: number, suiteId: number, testCaseIds: number): IPromise<Contracts.SuiteTestCase>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @return IPromise<Contracts.SuiteTestCase[]>
     */
    getTestCases(project: string, planId: number, suiteId: number): IPromise<Contracts.SuiteTestCase[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} testCaseIds
     * @return IPromise<void>
     */
    removeTestCasesFromSuiteUrl(project: string, planId: number, suiteId: number, testCaseIds: string): IPromise<void>;
    /**
     * @param {Contracts.SuiteCreateModel} testSuite
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @return IPromise<Contracts.TestSuite[]>
     */
    createTestSuite(testSuite: Contracts.SuiteCreateModel, project: string, planId: number, suiteId: number): IPromise<Contracts.TestSuite[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @return IPromise<void>
     */
    deleteTestSuite(project: string, planId: number, suiteId: number): IPromise<void>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {boolean} includeChildSuites
     * @return IPromise<Contracts.TestSuite>
     */
    getTestSuiteById(project: string, planId: number, suiteId: number, includeChildSuites?: boolean): IPromise<Contracts.TestSuite>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {boolean} includeSuites
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.TestSuite[]>
     */
    getTestSuitesForPlan(project: string, planId: number, includeSuites?: boolean, skip?: number, top?: number): IPromise<Contracts.TestSuite[]>;
    /**
     * @param {Contracts.SuiteUpdateModel} suiteUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @return IPromise<Contracts.TestSuite>
     */
    updateTestSuite(suiteUpdateModel: Contracts.SuiteUpdateModel, project: string, planId: number, suiteId: number): IPromise<Contracts.TestSuite>;
    /**
     * @param {number} testCaseId
     * @return IPromise<Contracts.TestSuite[]>
     */
    getSuitesByTestCaseId(testCaseId: number): IPromise<Contracts.TestSuite[]>;
    /**
     * @param {Contracts.TestSettings} testSettings
     * @param {string} project - Project ID or project name
     * @return IPromise<number>
     */
    createTestSettings(testSettings: Contracts.TestSettings, project: string): IPromise<number>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     * @return IPromise<void>
     */
    deleteTestSettings(project: string, testSettingsId: number): IPromise<void>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     * @return IPromise<Contracts.TestSettings>
     */
    getTestSettingsById(project: string, testSettingsId: number): IPromise<Contracts.TestSettings>;
}
}
declare module "TFS/VersionControl/Contracts" {
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
export interface AssociatedWorkItem {
    assignedTo: string;
    id: number;
    state: string;
    title: string;
    /**
    * REST url
    */
    url: string;
    webUrl: string;
    workItemType: string;
}
export interface Change<T> {
    changeType: VersionControlChangeType;
    item: T;
    newContent: ItemContent;
    sourceServerItem: string;
    url: string;
}
export interface ChangeCountDictionary {
}
export interface ChangeList<T> {
    allChangesIncluded: boolean;
    changeCounts: {
        [key: number]: number;
    };
    changes: Change<T>[];
    comment: string;
    commentTruncated: boolean;
    creationDate: Date;
    notes: CheckinNote[];
    owner: string;
    ownerDisplayName: string;
    ownerId: string;
    sortDate: Date;
    version: string;
}
/**
* Criteria used in a search for change lists
*/
export interface ChangeListSearchCriteria {
    /**
    * If provided, a version descriptor to compare against base
    */
    compareVersion: string;
    /**
    * If true, don't include delete history entries
    */
    excludeDeletes: boolean;
    /**
    * Whether or not to follow renames for the given item being queried
    */
    followRenames: boolean;
    /**
    * If provided, only include history entries created after this date (string)
    */
    fromDate: string;
    /**
    * If provided, a version descriptor for the earliest change list to include
    */
    fromVersion: string;
    /**
    * Path of item to search under
    */
    itemPath: string;
    /**
    * Version of the items to search
    */
    itemVersion: string;
    /**
    * Number of results to skip (used when clicking more...)
    */
    skip: number;
    /**
    * If provided, only include history entries created before this date (string)
    */
    toDate: string;
    /**
    * If provided, the maximum number of history entries to return
    */
    top: number;
    /**
    * If provided, a version descriptor for the latest change list to include
    */
    toVersion: string;
    /**
    * Alias or display name of user who made the changes
    */
    user: string;
}
export interface CheckinNote {
    name: string;
    value: string;
}
export interface FileContentMetadata {
    contentType: string;
    encoding: number;
    extension: string;
    fileName: string;
    isBinary: boolean;
    isImage: boolean;
    vsLink: string;
}
export interface GitBaseVersionDescriptor extends GitVersionDescriptor {
    /**
    * Version string identifier (name of tag/branch, SHA1 of commit)
    */
    baseVersion: string;
    /**
    * Version options - Specify additional modifiers to version (e.g Previous)
    */
    baseVersionOptions: GitVersionOptions;
    /**
    * Version type (branch, tag, or commit). Determines how Id is interpreted
    */
    baseVersionType: GitVersionType;
}
export interface GitBlobRef {
    _links: any;
    /**
    * SHA1 hash of git object
    */
    objectId: string;
    /**
    * Size of blob content (in bytes)
    */
    size: number;
    url: string;
}
export interface GitBranchStats {
    aheadCount: number;
    behindCount: number;
    commit: GitCommitRef;
    isBaseVersion: boolean;
    name: string;
}
export interface GitChange extends Change<GitItem> {
}
export interface GitCommit extends GitCommitRef {
    push: GitPushRef;
    treeId: string;
}
export interface GitCommitChanges {
    changeCounts: ChangeCountDictionary;
    changes: GitChange[];
}
export interface GitCommitDiffs {
    aheadCount: number;
    allChangesIncluded: boolean;
    behindCount: number;
    changeCounts: {
        [key: number]: number;
    };
    changes: GitChange[];
    commonCommit: string;
}
export interface GitCommitRef {
    _links: any;
    author: GitUserDate;
    changeCounts: ChangeCountDictionary;
    changes: GitChange[];
    comment: string;
    commentTruncated: boolean;
    commitId: string;
    committer: GitUserDate;
    parents: string[];
    remoteUrl: string;
    url: string;
}
export interface GitCommitToCreate {
    baseRef: GitRef;
    comment: string;
    pathActions: GitPathAction[];
}
export interface GitHistoryQueryResults extends HistoryQueryResults<GitItem> {
    /**
    * Seed commit used for querying history.  Used for skip feature.
    */
    startingCommitId: string;
    unpopulatedCount: number;
    unprocessedCount: number;
}
export interface GitItem extends ItemModel {
    /**
    * SHA1 of commit item was fetched at
    */
    commitId: string;
    /**
    * Type of object (Commit, Tree, Blob, Tag, ...)
    */
    gitObjectType: GitObjectType;
    /**
    * Shallow ref to commit that last changed this item Only populated if latestProcessedChange is requested May not be accurate if latest change is not yet cached
    */
    latestProcessedChange: GitCommitRef;
    /**
    * Git object id
    */
    objectId: string;
}
export interface GitItemDescriptor {
    /**
    * Path to item
    */
    path: string;
    /**
    * Specifies whether to include children (OneLevel), all descendants (Full), or None
    */
    recursionLevel: VersionControlRecursionType;
    /**
    * Version string (interpretation based on VersionType defined in subclass
    */
    version: string;
    /**
    * Version modifiers (e.g. previous)
    */
    versionOptions: GitVersionOptions;
    /**
    * How to interpret version (branch,tag,commit)
    */
    versionType: GitVersionType;
}
export interface GitItemRequestData {
    /**
    * Whether to include metadata for all items
    */
    includeContentMetadata: boolean;
    /**
    * Whether to include the _links field on the shallow references
    */
    includeLinks: boolean;
    /**
    * Collection of items to fetch, including path, version, and recursion level
    */
    itemDescriptors: GitItemDescriptor[];
    /**
    * Whether to include shallow ref to commit that last changed each item
    */
    latestProcessedChange: boolean;
}
/**
* Encapsulates the reference metadata of a Git media object.
*/
export interface GitMediaObjectRef {
    /**
    * Gets or sets the reference links of the Git media object.
    */
    _links: any;
    /**
    * Gets or sets the Git media object identifier. This Id property duplicates the Oid property, but is required by the VSO REST specification.
    */
    id: string;
    /**
    * Gets or sets the Git media object identifier. This property exists for adherence to the GitHub Git Media contract.
    */
    oid: string;
    /**
    * Gets or sets the size of the Git media object in bytes. This property exists for adherence to the GitHub Git Media contract.
    */
    size: number;
    /**
    * Gets or sets the URL for the Git media object.
    */
    url: string;
}
export enum GitObjectType {
    Bad = 0,
    Commit = 1,
    Tree = 2,
    Blob = 3,
    Tag = 4,
    Ext2 = 5,
    OfsDelta = 6,
    RefDelta = 7,
}
export interface GitPathAction {
    action: GitPathActions;
    base64Content: string;
    path: string;
    rawTextContent: string;
    targetPath: string;
}
export enum GitPathActions {
    None = 0,
    Edit = 1,
    Delete = 2,
    Add = 3,
    Rename = 4,
}
export interface GitPullRequest {
    _links: any;
    closedDate: Date;
    codeReview: any;
    createdBy: VSS_Common_Contracts.IdentityRef;
    creationDate: Date;
    description: string;
    lastMergeCommit: GitCommitRef;
    lastMergeSourceCommit: GitCommitRef;
    lastMergeTargetCommit: GitCommitRef;
    mergeId: string;
    mergeStatus: PullRequestAsyncStatus;
    pullRequestId: number;
    remoteUrl: string;
    repository: GitRepository;
    reviewers: IdentityRefWithVote[];
    sourceRefName: string;
    status: PullRequestStatus;
    targetRefName: string;
    title: string;
    url: string;
}
export interface GitPullRequestSearchCriteria {
    creatorId: string;
    /**
    * Whether to include the _links field on the shallow references
    */
    includeLinks: boolean;
    repositoryId: string;
    reviewerId: string;
    sourceRefName: string;
    status: PullRequestStatus;
    targetRefName: string;
}
export interface GitPush extends GitPushRef {
    commits: GitCommitRef[];
    refUpdates: GitRefUpdate[];
    repository: GitRepository;
}
export interface GitPushEventData {
    afterId: string;
    beforeId: string;
    branch: string;
    commits: GitCommit[];
    repository: GitRepository;
}
export interface GitPushRef {
    _links: any;
    date: Date;
    pushCorrelationId: string;
    pushedBy: VSS_Common_Contracts.IdentityRef;
    pushId: number;
    url: string;
}
export interface GitPushSearchCriteria {
    fromDate: Date;
    /**
    * Whether to include the _links field on the shallow references
    */
    includeLinks: boolean;
    includeRefUpdates: boolean;
    pusherId: string;
    refName: string;
    toDate: Date;
}
export interface GitQueryCommitsCriteria {
    /**
    * Number of entries to skip
    */
    $skip: number;
    /**
    * Maximum number of entries to retrieve
    */
    $top: number;
    /**
    * Alias or display name of the author
    */
    author: string;
    /**
    * If provided, the earliest commit in the graph to search
    */
    compareVersion: GitVersionDescriptor;
    /**
    * If true, don't include delete history entries
    */
    excludeDeletes: boolean;
    /**
    * If provided, a lower bound for filtering commits alphabetically
    */
    fromCommitId: string;
    /**
    * If provided, only include history entries created after this date (string)
    */
    fromDate: string;
    /**
    * If provided, specifies the exact commit ids of the commits to fetch. May not be combined with other parameters.
    */
    ids: string[];
    /**
    * Whether to include the _links field on the shallow references
    */
    includeLinks: boolean;
    /**
    * Path of item to search under
    */
    itemPath: string;
    /**
    * If provided, identifies the commit or branch to search
    */
    itemVersion: GitVersionDescriptor;
    /**
    * If provided, an upper bound for filtering commits alphabetically
    */
    toCommitId: string;
    /**
    * If provided, only include history entries created before this date (string)
    */
    toDate: string;
    /**
    * Alias or display name of the committer
    */
    user: string;
}
export interface GitRef {
    _links: any;
    isLockedBy: VSS_Common_Contracts.IdentityRef;
    name: string;
    objectId: string;
    url: string;
}
export interface GitRefUpdate {
    name: string;
    newObjectId: string;
    oldObjectId: string;
    repositoryId: string;
}
export enum GitRefUpdateMode {
    /**
    * Indicates the Git protocol model where any refs that can be updated will be updated, but any failures will not prevent other updates from succeeding.
    */
    BestEffort = 0,
    /**
    * Indicates that all ref updates must succeed or none will succeed. All ref updates will be atomically written. If any failure is encountered, previously successful updates will be rolled back and the entire operation will fail.
    */
    AllOrNone = 1,
}
export interface GitRefUpdateResult {
    /**
    * Custom message for the result object For instance, Reason for failing.
    */
    customMessage: string;
    /**
    * Ref name
    */
    name: string;
    /**
    * New object ID
    */
    newObjectId: string;
    /**
    * Old object ID
    */
    oldObjectId: string;
    /**
    * Name of the plugin that rejected the updated.
    */
    rejectedBy: string;
    /**
    * Repository ID
    */
    repositoryId: string;
    /**
    * True if the ref update succeeded, false otherwise
    */
    success: boolean;
    /**
    * Status of the update from the TFS server.
    */
    updateStatus: GitRefUpdateStatus;
}
export interface GitRefUpdateResultSet {
    countFailed: number;
    countSucceeded: number;
    pushCorrelationId: string;
    pushIds: {
        [key: number]: number;
    };
    pushTime: Date;
    results: GitRefUpdateResult[];
}
export enum GitRefUpdateStatus {
    /**
    * Indicates that the ref update request was completed successfully.
    */
    Succeeded = 0,
    /**
    * Indicates that the ref update request could not be completed because part of the graph would be disconnected by this change, and the caller does not have ForcePush permission on the repository.
    */
    ForcePushRequired = 1,
    /**
    * Indicates that the ref update request could not be completed because the old object ID presented in the request was not the object ID of the ref when the database attempted the update. The most likely scenario is that the caller lost a race to update the ref.
    */
    StaleOldObjectId = 2,
    /**
    * Indicates that the ref update request could not be completed because the ref name presented in the request was not valid.
    */
    InvalidRefName = 3,
    /**
    * The request was not processed
    */
    Unprocessed = 4,
    /**
    * The ref update request could not be completed because the new object ID for the ref could not be resolved to a commit object (potentially through any number of tags)
    */
    UnresolvableToCommit = 5,
    /**
    * The ref update request could not be completed because the user lacks write permissions required to write this ref
    */
    WritePermissionRequired = 6,
    /**
    * The ref update request could not be completed because the user lacks note creation permissions required to write this note
    */
    ManageNotePermissionRequired = 7,
    /**
    * The ref update request could not be completed because the user lacks the permission to create a branch
    */
    CreateBranchPermissionRequired = 8,
    /**
    * The ref update request could not be completed because the user lacks the permission to create a tag
    */
    CreateTagPermissionRequired = 9,
    /**
    * The ref update could not be completed because it was rejected by the plugin.
    */
    RejectedByPlugin = 10,
    /**
    * The ref update could not be completed because the ref is locked by another user.
    */
    Locked = 11,
    /**
    * The ref update could not be completed because, in case-insensitive mode, the ref name conflicts with an existing, differently-cased ref name.
    */
    RefNameConflict = 12,
    /**
    * The ref update could not be completed because it was rejected by policy.
    */
    RejectedByPolicy = 13,
    /**
    * Indicates that the ref update request was completed successfully, but the ref doesn't actually exist so no changes were made.  This should only happen during deletes.
    */
    SucceededNonExistentRef = 14,
    /**
    * Indicates that the ref update request was completed successfully, but the passed-in ref was corrupt - as in, the old object ID was bad.  This should only happen during deletes.
    */
    SucceededCorruptRef = 15,
}
export interface GitRepository {
    _links: any;
    defaultBranch: string;
    id: string;
    name: string;
    project: TFS_Core_Contracts.TeamProjectReference;
    remoteUrl: string;
    url: string;
}
export interface GitTargetVersionDescriptor extends GitVersionDescriptor {
    /**
    * Version string identifier (name of tag/branch, SHA1 of commit)
    */
    targetVersion: string;
    /**
    * Version options - Specify additional modifiers to version (e.g Previous)
    */
    targetVersionOptions: GitVersionOptions;
    /**
    * Version type (branch, tag, or commit). Determines how Id is interpreted
    */
    targetVersionType: GitVersionType;
}
export interface GitTreeEntryRef {
    /**
    * Blob or tree
    */
    gitObjectType: GitObjectType;
    /**
    * Mode represented as octal string
    */
    mode: string;
    /**
    * SHA1 hash of git object
    */
    objectId: string;
    /**
    * Path relative to parent tree object
    */
    relativePath: string;
    /**
    * Size of content
    */
    size: number;
    /**
    * url to retrieve tree or blob
    */
    url: string;
}
export interface GitTreeRef {
    _links: any;
    /**
    * SHA1 hash of git object
    */
    objectId: string;
    /**
    * Sum of sizes of all children
    */
    size: number;
    /**
    * Blobs and trees under this tree
    */
    treeEntries: GitTreeEntryRef[];
    /**
    * Url to tree
    */
    url: string;
}
export interface GitUserDate {
    date: Date;
    email: string;
    name: string;
}
export interface GitVersionDescriptor {
    /**
    * Version string identifier (name of tag/branch/index, SHA1 of commit)
    */
    version: string;
    /**
    * Version options - Specify additional modifiers to version (e.g Previous)
    */
    versionOptions: GitVersionOptions;
    /**
    * Version type (branch, tag, commit, or index). Determines how Id is interpreted
    */
    versionType: GitVersionType;
}
export enum GitVersionOptions {
    /**
    * Not specified
    */
    None = 0,
    /**
    * Commit that changed item prior to the current version
    */
    PreviousChange = 1,
    /**
    * First parent of commit (HEAD^)
    */
    FirstParent = 2,
}
export enum GitVersionType {
    /**
    * Interpret the version as a branch name
    */
    Branch = 0,
    /**
    * Interpret the version as a tag name
    */
    Tag = 1,
    /**
    * Interpret the version as a commit ID (SHA1)
    */
    Commit = 2,
    /**
    * Interpret the version as an index name
    */
    Index = 3,
}
export interface HistoryEntry<T> {
    /**
    * The Change list (changeset/commit/shelveset) for this point in history
    */
    changeList: ChangeList<T>;
    /**
    * The change made to the item from this change list (only relevant for File history, not folders)
    */
    itemChangeType: VersionControlChangeType;
    /**
    * The path of the item at this point in history (only relevant for File history, not folders)
    */
    serverItem: string;
}
export interface HistoryQueryResults<T> {
    /**
    * True if there are more results available to fetch (we're returning the max # of items requested) A more RESTy solution would be to include a Link header
    */
    moreResultsAvailable: boolean;
    /**
    * The history entries (results) from this query
    */
    results: HistoryEntry<T>[];
}
export interface IdentityRefWithVote extends VSS_Common_Contracts.IdentityRef {
    isRequired: boolean;
    reviewerUrl: string;
    vote: number;
    votedFor: IdentityRefWithVote[];
}
export interface IncludedGitCommit {
    commitId: string;
    commitTime: Date;
    parentCommitIds: string[];
    repositoryId: string;
}
export interface ItemContent {
    content: string;
    contentType: ItemContentType;
}
export enum ItemContentType {
    RawText = 0,
    Base64Encoded = 1,
}
/**
* Optional details to include when returning an item model
*/
export interface ItemDetailsOptions {
    /**
    * If true, include metadata about the file type
    */
    includeContentMetadata: boolean;
    /**
    * Specifies whether to include children (OneLevel), all descendants (Full) or None for folder items
    */
    recursionLevel: VersionControlRecursionType;
}
export interface ItemModel {
    _links: any;
    contentMetadata: FileContentMetadata;
    isFolder: boolean;
    isSymLink: boolean;
    path: string;
    url: string;
}
export enum PullRequestAsyncStatus {
    NotSet = 0,
    Queued = 1,
    Conflicts = 2,
    Succeeded = 3,
    RejectedByPolicy = 4,
    Failure = 5,
}
export enum PullRequestStatus {
    NotSet = 0,
    Active = 1,
    Abandoned = 2,
    Completed = 3,
}
export interface TfvcBranch extends TfvcBranchRef {
    children: TfvcBranch[];
    mappings: TfvcBranchMapping[];
    parent: TfvcShallowBranchRef;
    relatedBranches: TfvcShallowBranchRef[];
}
export interface TfvcBranchMapping {
    depth: string;
    serverItem: string;
    type: string;
}
export interface TfvcBranchRef extends TfvcShallowBranchRef {
    _links: any;
    createdDate: Date;
    description: string;
    isDeleted: boolean;
    owner: VSS_Common_Contracts.IdentityRef;
    url: string;
}
export interface TfvcChange extends Change<TfvcItem> {
    /**
    * List of merge sources in case of rename or branch creation.
    */
    mergeSources: TfvcMergeSource[];
    /**
    * Version at which a (shelved) change was pended against
    */
    pendingVersion: number;
}
export interface TfvcChangeset extends TfvcChangesetRef {
    accountId: string;
    changes: TfvcChange[];
    checkinNotes: CheckinNote[];
    collectionId: string;
    hasMoreChanges: boolean;
    policyOverride: TfvcPolicyOverrideInfo;
    workItems: AssociatedWorkItem[];
}
export interface TfvcChangesetRef {
    _links: any;
    author: VSS_Common_Contracts.IdentityRef;
    changesetId: number;
    checkedInBy: VSS_Common_Contracts.IdentityRef;
    comment: string;
    commentTruncated: boolean;
    createdDate: Date;
    url: string;
}
/**
* Criteria used in a search for change lists
*/
export interface TfvcChangesetSearchCriteria {
    /**
    * Alias or display name of user who made the changes
    */
    author: string;
    /**
    * Whether or not to follow renames for the given item being queried
    */
    followRenames: boolean;
    /**
    * If provided, only include changesets created after this date (string) Think of a better name for this.
    */
    fromDate: string;
    /**
    * If provided, only include changesets after this changesetID
    */
    fromId: number;
    /**
    * Whether to include the _links field on the shallow references
    */
    includeLinks: boolean;
    /**
    * Path of item to search under
    */
    path: string;
    /**
    * If provided, only include changesets created before this date (string) Think of a better name for this.
    */
    toDate: string;
    /**
    * If provided, a version descriptor for the latest change list to include
    */
    toId: number;
}
export interface TfvcChangesetsRequestData {
    changesetIds: number[];
    commentLength: number;
    /**
    * Whether to include the _links field on the shallow references
    */
    includeLinks: boolean;
}
export interface TfvcCheckinEventData {
    changeset: TfvcChangeset;
    project: TFS_Core_Contracts.TeamProjectReference;
}
export interface TfvcHistoryEntry extends HistoryEntry<TfvcItem> {
    /**
    * The encoding of the item at this point in history (only relevant for File history, not folders)
    */
    encoding: number;
    /**
    * The file id of the item at this point in history (only relevant for File history, not folders)
    */
    fileId: number;
}
export interface TfvcItem extends ItemModel {
    changeDate: Date;
    deletionId: number;
    isBranch: boolean;
    isPendingChange: boolean;
    version: number;
}
/**
* Item path and Version descriptor properties
*/
export interface TfvcItemDescriptor {
    path: string;
    recursionLevel: VersionControlRecursionType;
    version: string;
    versionOption: TfvcVersionOption;
    versionType: TfvcVersionType;
}
export interface TfvcItemRequestData {
    /**
    * If true, include metadata about the file type
    */
    includeContentMetadata: boolean;
    /**
    * Whether to include the _links field on the shallow references
    */
    includeLinks: boolean;
    itemDescriptors: TfvcItemDescriptor[];
}
export interface TfvcLabel extends TfvcLabelRef {
    items: TfvcItem[];
}
export interface TfvcLabelRef {
    _links: any;
    description: string;
    id: number;
    labelScope: string;
    modifiedDate: Date;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    url: string;
}
export interface TfvcLabelRequestData {
    /**
    * Whether to include the _links field on the shallow references
    */
    includeLinks: boolean;
    itemLabelFilter: string;
    labelScope: string;
    maxItemCount: number;
    name: string;
    owner: string;
}
export interface TfvcMergeSource {
    /**
    * Indicates if this a rename source. If false, it is a merge source.
    */
    isRename: boolean;
    /**
    * The server item of the merge source
    */
    serverItem: string;
    /**
    * Start of the version range
    */
    versionFrom: number;
    /**
    * End of the version range
    */
    versionTo: number;
}
export interface TfvcPolicyFailureInfo {
    message: string;
    policyName: string;
}
export interface TfvcPolicyOverrideInfo {
    comment: string;
    policyFailures: TfvcPolicyFailureInfo[];
}
export interface TfvcShallowBranchRef {
    path: string;
}
export interface TfvcShelveset extends TfvcShelvesetRef {
    changes: TfvcChange[];
    notes: CheckinNote[];
    policyOverride: TfvcPolicyOverrideInfo;
    workItems: AssociatedWorkItem[];
}
export interface TfvcShelvesetRef {
    _links: any;
    comment: string;
    commentTruncated: boolean;
    createdDate: Date;
    id: string;
    name: string;
    owner: VSS_Common_Contracts.IdentityRef;
    url: string;
}
export interface TfvcShelvesetRequestData {
    /**
    * Whether to include policyOverride and notes
    */
    includeDetails: boolean;
    /**
    * Whether to include the _links field on the shallow references
    */
    includeLinks: boolean;
    /**
    * Whether to include workItems
    */
    includeWorkItems: boolean;
    /**
    * Max number of changes to include
    */
    maxChangeCount: number;
    /**
    * Max length of comment
    */
    maxCommentLength: number;
    /**
    * Shelveset's name
    */
    name: string;
    /**
    * Owner's ID. Could be a name or a guid.
    */
    owner: string;
}
export interface TfvcVersionDescriptor {
    version: string;
    versionOption: TfvcVersionOption;
    versionType: TfvcVersionType;
}
export enum TfvcVersionOption {
    None = 0,
    Previous = 1,
    UseRename = 2,
}
export enum TfvcVersionType {
    None = 0,
    Changeset = 1,
    Shelveset = 2,
    Change = 3,
    Date = 4,
    Latest = 5,
    Tip = 6,
    MergeSource = 7,
}
export interface UpdateRefsRequest {
    refUpdateRequests: GitRefUpdate[];
    updateMode: GitRefUpdateMode;
}
export enum VersionControlChangeType {
    None = 0,
    Add = 1,
    Edit = 2,
    Encoding = 4,
    Rename = 8,
    Delete = 16,
    Undelete = 32,
    Branch = 64,
    Merge = 128,
    Lock = 256,
    Rollback = 512,
    SourceRename = 1024,
    TargetRename = 2048,
    Property = 4096,
    All = 8191,
}
export interface VersionControlProjectInfo {
    project: TFS_Core_Contracts.TeamProjectReference;
    supportsGit: boolean;
    supportsTFVC: boolean;
}
export enum VersionControlRecursionType {
    None = 0,
    OneLevel = 1,
    Full = 120,
}
export var TypeInfo: {
    AssociatedWorkItem: {
        fields: any;
    };
    Change: {
        fields: any;
    };
    ChangeCountDictionary: {
        fields: any;
    };
    ChangeList: {
        fields: any;
    };
    ChangeListSearchCriteria: {
        fields: any;
    };
    CheckinNote: {
        fields: any;
    };
    FileContentMetadata: {
        fields: any;
    };
    GitBaseVersionDescriptor: {
        fields: any;
    };
    GitBlobRef: {
        fields: any;
    };
    GitBranchStats: {
        fields: any;
    };
    GitChange: {
        fields: any;
    };
    GitCommit: {
        fields: any;
    };
    GitCommitChanges: {
        fields: any;
    };
    GitCommitDiffs: {
        fields: any;
    };
    GitCommitRef: {
        fields: any;
    };
    GitCommitToCreate: {
        fields: any;
    };
    GitHistoryQueryResults: {
        fields: any;
    };
    GitItem: {
        fields: any;
    };
    GitItemDescriptor: {
        fields: any;
    };
    GitItemRequestData: {
        fields: any;
    };
    GitMediaObjectRef: {
        fields: any;
    };
    GitObjectType: {
        enumValues: {
            "bad": number;
            "commit": number;
            "tree": number;
            "blob": number;
            "tag": number;
            "ext2": number;
            "ofsDelta": number;
            "refDelta": number;
        };
    };
    GitPathAction: {
        fields: any;
    };
    GitPathActions: {
        enumValues: {
            "none": number;
            "edit": number;
            "delete": number;
            "add": number;
            "rename": number;
        };
    };
    GitPullRequest: {
        fields: any;
    };
    GitPullRequestSearchCriteria: {
        fields: any;
    };
    GitPush: {
        fields: any;
    };
    GitPushEventData: {
        fields: any;
    };
    GitPushRef: {
        fields: any;
    };
    GitPushSearchCriteria: {
        fields: any;
    };
    GitQueryCommitsCriteria: {
        fields: any;
    };
    GitRef: {
        fields: any;
    };
    GitRefUpdate: {
        fields: any;
    };
    GitRefUpdateMode: {
        enumValues: {
            "bestEffort": number;
            "allOrNone": number;
        };
    };
    GitRefUpdateResult: {
        fields: any;
    };
    GitRefUpdateResultSet: {
        fields: any;
    };
    GitRefUpdateStatus: {
        enumValues: {
            "succeeded": number;
            "forcePushRequired": number;
            "staleOldObjectId": number;
            "invalidRefName": number;
            "unprocessed": number;
            "unresolvableToCommit": number;
            "writePermissionRequired": number;
            "manageNotePermissionRequired": number;
            "createBranchPermissionRequired": number;
            "createTagPermissionRequired": number;
            "rejectedByPlugin": number;
            "locked": number;
            "refNameConflict": number;
            "rejectedByPolicy": number;
            "succeededNonExistentRef": number;
            "succeededCorruptRef": number;
        };
    };
    GitRepository: {
        fields: any;
    };
    GitTargetVersionDescriptor: {
        fields: any;
    };
    GitTreeEntryRef: {
        fields: any;
    };
    GitTreeRef: {
        fields: any;
    };
    GitUserDate: {
        fields: any;
    };
    GitVersionDescriptor: {
        fields: any;
    };
    GitVersionOptions: {
        enumValues: {
            "none": number;
            "previousChange": number;
            "firstParent": number;
        };
    };
    GitVersionType: {
        enumValues: {
            "branch": number;
            "tag": number;
            "commit": number;
            "index": number;
        };
    };
    HistoryEntry: {
        fields: any;
    };
    HistoryQueryResults: {
        fields: any;
    };
    IdentityRefWithVote: {
        fields: any;
    };
    IncludedGitCommit: {
        fields: any;
    };
    ItemContent: {
        fields: any;
    };
    ItemContentType: {
        enumValues: {
            "rawText": number;
            "base64Encoded": number;
        };
    };
    ItemDetailsOptions: {
        fields: any;
    };
    ItemModel: {
        fields: any;
    };
    PullRequestAsyncStatus: {
        enumValues: {
            "notSet": number;
            "queued": number;
            "conflicts": number;
            "succeeded": number;
            "rejectedByPolicy": number;
            "failure": number;
        };
    };
    PullRequestStatus: {
        enumValues: {
            "notSet": number;
            "active": number;
            "abandoned": number;
            "completed": number;
        };
    };
    TfvcBranch: {
        fields: any;
    };
    TfvcBranchMapping: {
        fields: any;
    };
    TfvcBranchRef: {
        fields: any;
    };
    TfvcChange: {
        fields: any;
    };
    TfvcChangeset: {
        fields: any;
    };
    TfvcChangesetRef: {
        fields: any;
    };
    TfvcChangesetSearchCriteria: {
        fields: any;
    };
    TfvcChangesetsRequestData: {
        fields: any;
    };
    TfvcCheckinEventData: {
        fields: any;
    };
    TfvcHistoryEntry: {
        fields: any;
    };
    TfvcItem: {
        fields: any;
    };
    TfvcItemDescriptor: {
        fields: any;
    };
    TfvcItemRequestData: {
        fields: any;
    };
    TfvcLabel: {
        fields: any;
    };
    TfvcLabelRef: {
        fields: any;
    };
    TfvcLabelRequestData: {
        fields: any;
    };
    TfvcMergeSource: {
        fields: any;
    };
    TfvcPolicyFailureInfo: {
        fields: any;
    };
    TfvcPolicyOverrideInfo: {
        fields: any;
    };
    TfvcShallowBranchRef: {
        fields: any;
    };
    TfvcShelveset: {
        fields: any;
    };
    TfvcShelvesetRef: {
        fields: any;
    };
    TfvcShelvesetRequestData: {
        fields: any;
    };
    TfvcVersionDescriptor: {
        fields: any;
    };
    TfvcVersionOption: {
        enumValues: {
            "none": number;
            "previous": number;
            "useRename": number;
        };
    };
    TfvcVersionType: {
        enumValues: {
            "none": number;
            "changeset": number;
            "shelveset": number;
            "change": number;
            "date": number;
            "latest": number;
            "tip": number;
            "mergeSource": number;
        };
    };
    UpdateRefsRequest: {
        fields: any;
    };
    VersionControlChangeType: {
        enumValues: {
            "none": number;
            "add": number;
            "edit": number;
            "encoding": number;
            "rename": number;
            "delete": number;
            "undelete": number;
            "branch": number;
            "merge": number;
            "lock": number;
            "rollback": number;
            "sourceRename": number;
            "targetRename": number;
            "property": number;
            "all": number;
        };
    };
    VersionControlProjectInfo: {
        fields: any;
    };
    VersionControlRecursionType: {
        enumValues: {
            "none": number;
            "oneLevel": number;
            "full": number;
        };
    };
};
}
declare module "TFS/VersionControl/GitRestClient" {
import Contracts = require("TFS/VersionControl/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class GitHttpClient extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    constructor(rootRequestPath: string);
    /**
     * Gets a single blob.
     *
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     * @return IPromise<Contracts.GitBlobRef>
     */
    getBlob(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): IPromise<Contracts.GitBlobRef>;
    /**
     * Retrieve statistics about a single branch.
     *
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} name - Name of the branch
     * @param {string} project - Project ID or project name
     * @param {Contracts.GitVersionDescriptor} baseVersionDescriptor
     * @return IPromise<Contracts.GitBranchStats>
     */
    getBranch(repositoryId: string, name: string, project?: string, baseVersionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitBranchStats>;
    /**
     * Retrieve statistics about all branches within a repository.
     *
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} project - Project ID or project name
     * @param {Contracts.GitVersionDescriptor} baseVersionDescriptor
     * @return IPromise<Contracts.GitBranchStats[]>
     */
    getBranches(repositoryId: string, project?: string, baseVersionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitBranchStats[]>;
    /**
     * Retrieve changes for a particular commit.
     *
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} top - The maximum number of changes to return.
     * @param {number} skip - The number of changes to skip.
     * @return IPromise<Contracts.GitCommitChanges>
     */
    getChanges(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number): IPromise<Contracts.GitCommitChanges>;
    /**
     * Create a git commit for a project
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitCommit>
     */
    createCommit(repositoryId: string, project?: string): IPromise<Contracts.GitCommit>;
    /**
     * Retrieve a particular commit.
     *
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} changeCount - The number of changes to include in the result.
     * @return IPromise<Contracts.GitCommit>
     */
    getCommit(commitId: string, repositoryId: string, project?: string, changeCount?: number): IPromise<Contracts.GitCommit>;
    /**
     * Retrieve git commits for a project
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {Contracts.GitQueryCommitsCriteria} searchCriteria
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getCommits(repositoryId: string, searchCriteria: Contracts.GitQueryCommitsCriteria, project?: string, skip?: number, top?: number): IPromise<Contracts.GitCommitRef[]>;
    /**
     * Retrieve a list of commits associated with a particular push.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {number} pushId - The id of the push.
     * @param {string} project - Project ID or project name
     * @param {number} top - The maximum number of commits to return (&quot;get the top x commits&quot;).
     * @param {number} skip - The number of commits to skip.
     * @param {boolean} includeLinks
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getPushCommits(repositoryId: string, pushId: number, project?: string, top?: number, skip?: number, includeLinks?: boolean): IPromise<Contracts.GitCommitRef[]>;
    /**
     * Retrieve git commits for a project
     *
     * @param {Contracts.GitQueryCommitsCriteria} searchCriteria - Search options
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.GitCommitRef[]>
     */
    getCommitsBatch(searchCriteria: Contracts.GitQueryCommitsCriteria, repositoryId: string, project?: string, skip?: number, top?: number): IPromise<Contracts.GitCommitRef[]>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {Contracts.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {Contracts.GitVersionDescriptor} versionDescriptor
     * @return IPromise<Contracts.GitItem>
     */
    getItem(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Contracts.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitItem>;
    /**
     * Get Item Metadata and/or Content for a collection of items. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {Contracts.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {boolean} includeLinks
     * @param {Contracts.GitVersionDescriptor} versionDescriptor
     * @return IPromise<Contracts.GitItem[]>
     */
    getItems(repositoryId: string, project?: string, scopePath?: string, recursionLevel?: Contracts.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, includeLinks?: boolean, versionDescriptor?: Contracts.GitVersionDescriptor): IPromise<Contracts.GitItem[]>;
    /**
     * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
     *
     * @param {Contracts.GitItemRequestData} requestData
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitItem[][]>
     */
    getItemsBatch(requestData: Contracts.GitItemRequestData, repositoryId: string, project?: string): IPromise<Contracts.GitItem[][]>;
    /**
     * Adds a reviewer to a git pull request
     *
     * @param {Contracts.IdentityRefWithVote} reviewer
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.IdentityRefWithVote>
     */
    createPullRequestReviewer(reviewer: Contracts.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): IPromise<Contracts.IdentityRefWithVote>;
    /**
     * Adds reviewers to a git pull request
     *
     * @param {VSS_Common_Contracts.IdentityRef[]} reviewers
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.IdentityRefWithVote[]>
     */
    createPullRequestReviewers(reviewers: VSS_Common_Contracts.IdentityRef[], repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.IdentityRefWithVote[]>;
    /**
     * Adds reviewers to a git pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deletePullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): IPromise<void>;
    /**
     * Retrieve a reviewer from a pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.IdentityRefWithVote>
     */
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): IPromise<Contracts.IdentityRefWithVote>;
    /**
     * Retrieve a pull request reviewers
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.IdentityRefWithVote[]>
     */
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.IdentityRefWithVote[]>;
    /**
     * Create a git pull request
     *
     * @param {Contracts.GitPullRequest} gitPullRequestToCreate
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequest>
     */
    createPullRequest(gitPullRequestToCreate: Contracts.GitPullRequest, repositoryId: string, project?: string): IPromise<Contracts.GitPullRequest>;
    /**
     * Retrieve a pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.GitPullRequest>
     */
    getPullRequest(repositoryId: string, pullRequestId: number, project?: string, maxCommentLength?: number, skip?: number, top?: number): IPromise<Contracts.GitPullRequest>;
    /**
     * Query for pull requests
     *
     * @param {string} repositoryId
     * @param {Contracts.GitPullRequestSearchCriteria} searchCriteria
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     * @return IPromise<Contracts.GitPullRequest[]>
     */
    getPullRequests(repositoryId: string, searchCriteria: Contracts.GitPullRequestSearchCriteria, project?: string, maxCommentLength?: number, skip?: number, top?: number): IPromise<Contracts.GitPullRequest[]>;
    /**
     * Updates a pull request
     *
     * @param {Contracts.GitPullRequest} gitPullRequestToUpdate
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitPullRequest>
     */
    updatePullRequest(gitPullRequestToUpdate: Contracts.GitPullRequest, repositoryId: string, pullRequestId: number, project?: string): IPromise<Contracts.GitPullRequest>;
    /**
     * Retrieve a pull request work items
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} commitsTop
     * @param {number} commitsSkip
     * @return IPromise<Contracts.AssociatedWorkItem[]>
     */
    getPullRequestWorkItems(repositoryId: string, pullRequestId: number, project?: string, commitsTop?: number, commitsSkip?: number): IPromise<Contracts.AssociatedWorkItem[]>;
    /**
     * Retrieve a particular push.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {number} pushId - The id of the push.
     * @param {string} project - Project ID or project name
     * @param {number} includeCommits - The number of commits to include in the result.
     * @param {boolean} includeRefUpdates
     * @return IPromise<Contracts.GitPush>
     */
    getPush(repositoryId: string, pushId: number, project?: string, includeCommits?: number, includeRefUpdates?: boolean): IPromise<Contracts.GitPush>;
    /**
     * Retrieves pushes associated with the specified repository.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param {Contracts.GitPushSearchCriteria} searchCriteria
     * @return IPromise<Contracts.GitPush[]>
     */
    getPushes(repositoryId: string, project?: string, skip?: number, top?: number, searchCriteria?: Contracts.GitPushSearchCriteria): IPromise<Contracts.GitPush[]>;
    /**
     * Queries the provided repository for its refs and returns them.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {string} filter - [optional] A filter to apply to the refs.
     * @param {boolean} includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
     * @return IPromise<Contracts.GitRef[]>
     */
    getRefs(repositoryId: string, project?: string, filter?: string, includeLinks?: boolean): IPromise<Contracts.GitRef[]>;
    /**
     * Creates or updates refs with the given information
     *
     * @param {Contracts.GitRefUpdate[]} refUpdates - List of ref updates to attempt to perform
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - The id of the project.
     * @return IPromise<Contracts.GitRefUpdateResult[]>
     */
    updateRefs(refUpdates: Contracts.GitRefUpdate[], repositoryId: string, project?: string, projectId?: string): IPromise<Contracts.GitRefUpdateResult[]>;
    /**
     * Create a git repository
     *
     * @param {Contracts.GitRepository} gitRepositoryToCreate
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitRepository>
     */
    createRepository(gitRepositoryToCreate: Contracts.GitRepository, project?: string): IPromise<Contracts.GitRepository>;
    /**
     * Delete a git repository
     *
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<void>
     */
    deleteRepository(repositoryId: string, project?: string): IPromise<void>;
    /**
     * Retrieve git repositories.
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks
     * @return IPromise<Contracts.GitRepository[]>
     */
    getRepositories(project?: string, includeLinks?: boolean): IPromise<Contracts.GitRepository[]>;
    /**
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitRepository>
     */
    getRepository(repositoryId: string, project?: string): IPromise<Contracts.GitRepository>;
    /**
     * Updates the Git repository with the single populated change in the specified repository information.
     *
     * @param {Contracts.GitRepository} newRepositoryInfo
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.GitRepository>
     */
    updateRepository(newRepositoryInfo: Contracts.GitRepository, repositoryId: string, project?: string): IPromise<Contracts.GitRepository>;
    /**
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {string} projectId
     * @param {boolean} recursive
     * @param {string} fileName
     * @return IPromise<Contracts.GitTreeRef>
     */
    getTree(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): IPromise<Contracts.GitTreeRef>;
}
}
declare module "TFS/VersionControl/TfvcRestClient" {
import TFS_VersionControl_Contracts = require("TFS/VersionControl/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class TfvcHttpClient extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    constructor(rootRequestPath: string);
    /**
     * Get a single branch hierarchy at the given path with parents or children (if specified)
     *
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent
     * @param {boolean} includeChildren
     * @return IPromise<TFS_VersionControl_Contracts.TfvcBranch>
     */
    getBranch(path: string, project?: string, includeParent?: boolean, includeChildren?: boolean): IPromise<TFS_VersionControl_Contracts.TfvcBranch>;
    /**
     * Get a collection of branch roots -- first-level children, branches with no parents
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent
     * @param {boolean} includeChildren
     * @param {boolean} includeDeleted
     * @param {boolean} includeLinks
     * @return IPromise<TFS_VersionControl_Contracts.TfvcBranch[]>
     */
    getBranches(project?: string, includeParent?: boolean, includeChildren?: boolean, includeDeleted?: boolean, includeLinks?: boolean): IPromise<TFS_VersionControl_Contracts.TfvcBranch[]>;
    /**
     * Get branch hierarchies below the specified scopePath
     *
     * @param {string} scopePath
     * @param {string} project - Project ID or project name
     * @param {boolean} includeDeleted
     * @param {boolean} includeLinks
     * @return IPromise<TFS_VersionControl_Contracts.TfvcBranchRef[]>
     */
    getBranchRefs(scopePath: string, project?: string, includeDeleted?: boolean, includeLinks?: boolean): IPromise<TFS_VersionControl_Contracts.TfvcBranchRef[]>;
    /**
     * Retrieve Tfvc changes for a given changeset
     *
     * @param {number} id
     * @param {number} skip
     * @param {number} top
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChange[]>
     */
    getChangesetChanges(id?: number, skip?: number, top?: number): IPromise<TFS_VersionControl_Contracts.TfvcChange[]>;
    /**
     * Retrieve a Tfvc Changeset
     *
     * @param {number} id
     * @param {string} project - Project ID or project name
     * @param {number} maxChangeCount
     * @param {boolean} includeDetails
     * @param {boolean} includeWorkItems
     * @param {number} maxCommentLength
     * @param {boolean} includeSourceRename
     * @param {number} skip
     * @param {number} top
     * @param {string} orderby
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangeset>
     */
    getChangeset(id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangeset>;
    /**
     * Retrieve Tfvc changesets
     *
     * @param {string} project - Project ID or project name
     * @param {number} maxChangeCount
     * @param {boolean} includeDetails
     * @param {boolean} includeWorkItems
     * @param {number} maxCommentLength
     * @param {boolean} includeSourceRename
     * @param {number} skip
     * @param {number} top
     * @param {string} orderby
     * @param {TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria} searchCriteria
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>
     */
    getChangesets(project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TFS_VersionControl_Contracts.TfvcChangesetSearchCriteria): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>;
    /**
     * @param {TFS_VersionControl_Contracts.TfvcChangesetsRequestData} changesetsRequestData
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>
     */
    getBatchedChangesets(changesetsRequestData: TFS_VersionControl_Contracts.TfvcChangesetsRequestData): IPromise<TFS_VersionControl_Contracts.TfvcChangesetRef[]>;
    /**
     * @param {number} id
     * @return IPromise<TFS_VersionControl_Contracts.AssociatedWorkItem[]>
     */
    getChangesetWorkItems(id?: number): IPromise<TFS_VersionControl_Contracts.AssociatedWorkItem[]>;
    /**
     * Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.
     *
     * @param {TFS_VersionControl_Contracts.TfvcItemRequestData} itemRequestData
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.TfvcItem[][]>
     */
    getItemsBatch(itemRequestData: TFS_VersionControl_Contracts.TfvcItemRequestData, project?: string): IPromise<TFS_VersionControl_Contracts.TfvcItem[][]>;
    /**
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel
     * @param {TFS_VersionControl_Contracts.TfvcVersionDescriptor} versionDescriptor
     * @return IPromise<TFS_VersionControl_Contracts.TfvcItem>
     */
    getItem(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, versionDescriptor?: TFS_VersionControl_Contracts.TfvcVersionDescriptor): IPromise<TFS_VersionControl_Contracts.TfvcItem>;
    /**
     * Get a list of Tfvc items
     *
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {TFS_VersionControl_Contracts.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeLinks
     * @param {TFS_VersionControl_Contracts.TfvcVersionDescriptor} versionDescriptor
     * @return IPromise<TFS_VersionControl_Contracts.TfvcItem[]>
     */
    getItems(project?: string, scopePath?: string, recursionLevel?: TFS_VersionControl_Contracts.VersionControlRecursionType, includeLinks?: boolean, versionDescriptor?: TFS_VersionControl_Contracts.TfvcVersionDescriptor): IPromise<TFS_VersionControl_Contracts.TfvcItem[]>;
    /**
     * Get items under a label.
     *
     * @param {string} labelId - Unique identifier of label
     * @param {number} top - Max number of items to return
     * @param {number} skip - Number of items to skip
     * @return IPromise<TFS_VersionControl_Contracts.TfvcItem[]>
     */
    getLabelItems(labelId: string, top?: number, skip?: number): IPromise<TFS_VersionControl_Contracts.TfvcItem[]>;
    /**
     * Get a single deep label.
     *
     * @param {string} labelId - Unique identifier of label
     * @param {TFS_VersionControl_Contracts.TfvcLabelRequestData} requestData - maxItemCount
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.TfvcLabel>
     */
    getLabel(labelId: string, requestData: TFS_VersionControl_Contracts.TfvcLabelRequestData, project?: string): IPromise<TFS_VersionControl_Contracts.TfvcLabel>;
    /**
     * Get a collection of shallow label references.
     *
     * @param {TFS_VersionControl_Contracts.TfvcLabelRequestData} requestData - labelScope, name, owner, and itemLabelFilter
     * @param {string} project - Project ID or project name
     * @param {number} top - Max number of labels to return
     * @param {number} skip - Number of labels to skip
     * @return IPromise<TFS_VersionControl_Contracts.TfvcLabelRef[]>
     */
    getLabels(requestData: TFS_VersionControl_Contracts.TfvcLabelRequestData, project?: string, top?: number, skip?: number): IPromise<TFS_VersionControl_Contracts.TfvcLabelRef[]>;
    /**
     * Retrieve the version control information for a given Team Project
     *
     * @param {string} projectId - The id (or name) of the team project
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>
     */
    getProjectInfo(projectId: string, project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo>;
    /**
     * @param {string} project - Project ID or project name
     * @return IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>
     */
    getProjectInfos(project?: string): IPromise<TFS_VersionControl_Contracts.VersionControlProjectInfo[]>;
    /**
     * Get changes included in a shelveset.
     *
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param {number} top - Max number of changes to return
     * @param {number} skip - Number of changes to skip
     * @return IPromise<TFS_VersionControl_Contracts.TfvcChange[]>
     */
    getShelvesetChanges(shelvesetId: string, top?: number, skip?: number): IPromise<TFS_VersionControl_Contracts.TfvcChange[]>;
    /**
     * Get a single deep shelveset.
     *
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param {TFS_VersionControl_Contracts.TfvcShelvesetRequestData} requestData - includeDetails, includeWorkItems, maxChangeCount, and maxCommentLength
     * @return IPromise<TFS_VersionControl_Contracts.TfvcShelveset>
     */
    getShelveset(shelvesetId: string, requestData: TFS_VersionControl_Contracts.TfvcShelvesetRequestData): IPromise<TFS_VersionControl_Contracts.TfvcShelveset>;
    /**
     * Return a collection of shallow shelveset references.
     *
     * @param {TFS_VersionControl_Contracts.TfvcShelvesetRequestData} requestData - name, owner, and maxCommentLength
     * @param {number} top - Max number of shelvesets to return
     * @param {number} skip - Number of shelvesets to skip
     * @return IPromise<TFS_VersionControl_Contracts.TfvcShelvesetRef[]>
     */
    getShelvesets(requestData: TFS_VersionControl_Contracts.TfvcShelvesetRequestData, top?: number, skip?: number): IPromise<TFS_VersionControl_Contracts.TfvcShelvesetRef[]>;
    /**
     * Get work items associated with a shelveset.
     *
     * @param {string} shelvesetId - Shelveset's unique ID
     * @return IPromise<TFS_VersionControl_Contracts.AssociatedWorkItem[]>
     */
    getShelvesetWorkItems(shelvesetId: string): IPromise<TFS_VersionControl_Contracts.AssociatedWorkItem[]>;
}
}
declare module "TFS/WorkItemTracking/Contracts" {
export interface AttachmentReference {
    id: string;
    url: string;
}
export interface FieldDependentRule extends WorkItemTrackingResource {
    dependentFields: WorkItemFieldReference[];
}
export interface FieldsToEvaluate {
    fields: string[];
    fieldUpdates: {
        [key: string]: any;
    };
    fieldValues: {
        [key: string]: any;
    };
    rulesFrom: string[];
}
export enum FieldType {
    String = 0,
    Integer = 1,
    DateTime = 2,
    PlainText = 3,
    Html = 4,
    TreePath = 5,
    History = 6,
    Double = 7,
    Guid = 8,
    Boolean = 9,
}
export enum FieldUsage {
    None = 0,
    WorkItem = 1,
    WorkItemLink = 2,
    Tree = 3,
    WorkItemTypeExtension = 4,
}
export interface IdentityReference {
    id: string;
    name: string;
    url: string;
}
export interface Link {
    attributes: {
        [key: string]: any;
    };
    rel: string;
    title: string;
    url: string;
}
export enum LinkQueryMode {
    WorkItems = 0,
    LinksOneHopMustContain = 1,
    LinksOneHopMayContain = 2,
    LinksOneHopDoesNotContain = 3,
    LinksRecursiveMustContain = 4,
    LinksRecursiveMayContain = 5,
    LinksRecursiveDoesNotContain = 6,
}
export enum LogicalOperation {
    NONE = 0,
    AND = 1,
    OR = 2,
}
export interface ProjectReference {
    id: string;
    name: string;
    url: string;
}
export enum ProvisioningActionType {
    Import = 0,
    Validate = 1,
}
export interface ProvisioningResult {
    provisioningImportEvents: string[];
}
export enum QueryExpand {
    None = 0,
    Wiql = 1,
    Clauses = 2,
    All = 3,
}
export interface QueryHierarchyItem extends WorkItemTrackingResource {
    children: QueryHierarchyItem[];
    clauses: WorkItemQueryClause;
    columns: WorkItemFieldReference[];
    filterOptions: LinkQueryMode;
    hasChildren: boolean;
    id: string;
    isDeleted: boolean;
    isFolder: boolean;
    isInvalidSyntax: boolean;
    isPublic: boolean;
    linkClauses: WorkItemQueryClause;
    name: string;
    path: string;
    queryType: QueryType;
    sortColumns: WorkItemQuerySortColumn[];
    sourceClauses: WorkItemQueryClause;
    targetClauses: WorkItemQueryClause;
    wiql: string;
}
export enum QueryResultType {
    WorkItem = 1,
    WorkItemLink = 2,
}
export enum QueryType {
    Flat = 1,
    Tree = 2,
    OneHop = 3,
}
export enum TemplateType {
    WorkItemType = 0,
    GlobalWorkflow = 1,
}
export enum TreeNodeStructureType {
    Area = 0,
    Iteration = 1,
}
export enum TreeStructureGroup {
    Areas = 0,
    Iterations = 1,
}
export interface Wiql {
    query: string;
}
export interface WorkItem extends WorkItemTrackingResource {
    fields: {
        [key: string]: any;
    };
    id: number;
    relations: WorkItemRelation[];
    rev: number;
}
export interface WorkItemClassificationNode extends WorkItemTrackingResource {
    attributes: {
        [key: string]: any;
    };
    children: WorkItemClassificationNode[];
    id: number;
    name: string;
    structureType: TreeNodeStructureType;
}
export enum WorkItemExpand {
    None = 0,
    Relations = 1,
    Fields = 2,
    All = 3,
}
export interface WorkItemField extends WorkItemTrackingResource {
    name: string;
    readOnly: boolean;
    referenceName: string;
    supportedOperations: WorkItemFieldOperation[];
    type: FieldType;
}
export interface WorkItemFieldOperation {
    name: string;
    referenceName: string;
}
export interface WorkItemFieldReference {
    name: string;
    referenceName: string;
    url: string;
}
export interface WorkItemFieldUpdate {
    newValue: any;
    oldValue: any;
}
export interface WorkItemHistory extends WorkItemTrackingResource {
    rev: number;
    revisedBy: IdentityReference;
    revisedDate: Date;
    value: string;
}
export interface WorkItemLink {
    rel: string;
    source: WorkItemReference;
    target: WorkItemReference;
}
export interface WorkItemQueryClause {
    clauses: WorkItemQueryClause[];
    field: WorkItemFieldReference;
    fieldValue: WorkItemFieldReference;
    isFieldValue: boolean;
    logicalOperator: LogicalOperation;
    operator: WorkItemFieldOperation;
    value: string;
}
export interface WorkItemQueryResult {
    asOf: Date;
    columns: WorkItemFieldReference[];
    queryResultType: QueryResultType;
    queryType: QueryType;
    sortColumns: WorkItemQuerySortColumn[];
    workItemRelations: WorkItemLink[];
    workItems: WorkItemReference[];
}
export interface WorkItemQuerySortColumn {
    descending: boolean;
    field: WorkItemFieldReference;
}
export interface WorkItemReference {
    id: number;
    url: string;
}
export interface WorkItemRelation extends Link {
}
export interface WorkItemRelationType extends WorkItemTrackingReference {
    attributes: {
        [key: string]: any;
    };
}
export interface WorkItemRelationUpdates {
    added: WorkItemRelation[];
    removed: WorkItemRelation[];
    updated: WorkItemRelation[];
}
export interface WorkItemRevisionReference extends WorkItemReference {
    rev: number;
}
export interface WorkItemTrackingReference extends WorkItemTrackingResource {
    name: string;
    referenceName: string;
}
export interface WorkItemTrackingResource extends WorkItemTrackingResourceReference {
    _links: any;
}
export interface WorkItemTrackingResourceReference {
    url: string;
}
export interface WorkItemType extends WorkItemTrackingResource {
    description: string;
    fields: WorkItemTypeFieldInstance[];
    name: string;
    xmlForm: string;
}
export interface WorkItemTypeCategory extends WorkItemTrackingResource {
    defaultWorkItemType: WorkItemTypeReference;
    name: string;
    referenceName: string;
    workItemTypes: WorkItemTypeReference[];
}
export interface WorkItemTypeFieldInstance {
    field: WorkItemFieldReference;
    helpText: string;
}
export interface WorkItemTypeReference extends WorkItemTrackingResourceReference {
    name: string;
}
export interface WorkItemTypeTemplate {
    template: string;
}
export interface WorkItemTypeTemplateUpdateModel {
    actionType: ProvisioningActionType;
    methodology: string;
    template: string;
    templateType: TemplateType;
}
export interface WorkItemUpdate extends WorkItemTrackingResourceReference {
    fields: {
        [key: string]: WorkItemFieldUpdate;
    };
    id: number;
    relations: WorkItemRelationUpdates;
    rev: number;
    revisedBy: IdentityReference;
    revisedDate: Date;
}
export var TypeInfo: {
    AttachmentReference: {
        fields: any;
    };
    FieldDependentRule: {
        fields: any;
    };
    FieldsToEvaluate: {
        fields: any;
    };
    FieldType: {
        enumValues: {
            "string": number;
            "integer": number;
            "dateTime": number;
            "plainText": number;
            "html": number;
            "treePath": number;
            "history": number;
            "double": number;
            "guid": number;
            "boolean": number;
        };
    };
    FieldUsage: {
        enumValues: {
            "none": number;
            "workItem": number;
            "workItemLink": number;
            "tree": number;
            "workItemTypeExtension": number;
        };
    };
    IdentityReference: {
        fields: any;
    };
    Link: {
        fields: any;
    };
    LinkQueryMode: {
        enumValues: {
            "workItems": number;
            "linksOneHopMustContain": number;
            "linksOneHopMayContain": number;
            "linksOneHopDoesNotContain": number;
            "linksRecursiveMustContain": number;
            "linksRecursiveMayContain": number;
            "linksRecursiveDoesNotContain": number;
        };
    };
    LogicalOperation: {
        enumValues: {
            "nONE": number;
            "aND": number;
            "oR": number;
        };
    };
    ProjectReference: {
        fields: any;
    };
    ProvisioningActionType: {
        enumValues: {
            "import": number;
            "validate": number;
        };
    };
    ProvisioningResult: {
        fields: any;
    };
    QueryExpand: {
        enumValues: {
            "none": number;
            "wiql": number;
            "clauses": number;
            "all": number;
        };
    };
    QueryHierarchyItem: {
        fields: any;
    };
    QueryResultType: {
        enumValues: {
            "workItem": number;
            "workItemLink": number;
        };
    };
    QueryType: {
        enumValues: {
            "flat": number;
            "tree": number;
            "oneHop": number;
        };
    };
    TemplateType: {
        enumValues: {
            "workItemType": number;
            "globalWorkflow": number;
        };
    };
    TreeNodeStructureType: {
        enumValues: {
            "area": number;
            "iteration": number;
        };
    };
    TreeStructureGroup: {
        enumValues: {
            "areas": number;
            "iterations": number;
        };
    };
    Wiql: {
        fields: any;
    };
    WorkItem: {
        fields: any;
    };
    WorkItemClassificationNode: {
        fields: any;
    };
    WorkItemExpand: {
        enumValues: {
            "none": number;
            "relations": number;
            "fields": number;
            "all": number;
        };
    };
    WorkItemField: {
        fields: any;
    };
    WorkItemFieldOperation: {
        fields: any;
    };
    WorkItemFieldReference: {
        fields: any;
    };
    WorkItemFieldUpdate: {
        fields: any;
    };
    WorkItemHistory: {
        fields: any;
    };
    WorkItemLink: {
        fields: any;
    };
    WorkItemQueryClause: {
        fields: any;
    };
    WorkItemQueryResult: {
        fields: any;
    };
    WorkItemQuerySortColumn: {
        fields: any;
    };
    WorkItemReference: {
        fields: any;
    };
    WorkItemRelation: {
        fields: any;
    };
    WorkItemRelationType: {
        fields: any;
    };
    WorkItemRelationUpdates: {
        fields: any;
    };
    WorkItemRevisionReference: {
        fields: any;
    };
    WorkItemTrackingReference: {
        fields: any;
    };
    WorkItemTrackingResource: {
        fields: any;
    };
    WorkItemTrackingResourceReference: {
        fields: any;
    };
    WorkItemType: {
        fields: any;
    };
    WorkItemTypeCategory: {
        fields: any;
    };
    WorkItemTypeFieldInstance: {
        fields: any;
    };
    WorkItemTypeReference: {
        fields: any;
    };
    WorkItemTypeTemplate: {
        fields: any;
    };
    WorkItemTypeTemplateUpdateModel: {
        fields: any;
    };
    WorkItemUpdate: {
        fields: any;
    };
};
}
declare module "TFS/WorkItemTracking/RestClient" {
import Contracts = require("TFS/WorkItemTracking/Contracts");
import VSS_Common_Contracts = require("VSS/WebApi/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class WorkItemTrackingHttpClient extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    constructor(rootRequestPath: string);
    /**
     * @param {string} project - Project ID or project name
     * @param {number} depth
     * @return IPromise<Contracts.WorkItemClassificationNode[]>
     */
    getRootNodes(project: string, depth?: number): IPromise<Contracts.WorkItemClassificationNode[]>;
    /**
     * @param {Contracts.WorkItemClassificationNode} postedNode
     * @param {string} project - Project ID or project name
     * @param {Contracts.TreeStructureGroup} structureGroup
     * @param {string} path
     * @return IPromise<Contracts.WorkItemClassificationNode>
     */
    createOrUpdateClassificationNode(postedNode: Contracts.WorkItemClassificationNode, project: string, structureGroup: Contracts.TreeStructureGroup, path?: string): IPromise<Contracts.WorkItemClassificationNode>;
    /**
     * @param {string} project - Project ID or project name
     * @param {Contracts.TreeStructureGroup} structureGroup
     * @param {string} path
     * @param {number} reclassifyId
     * @return IPromise<void>
     */
    deleteClassificationNode(project: string, structureGroup: Contracts.TreeStructureGroup, path?: string, reclassifyId?: number): IPromise<void>;
    /**
     * @param {string} project - Project ID or project name
     * @param {Contracts.TreeStructureGroup} structureGroup
     * @param {string} path
     * @param {number} depth
     * @return IPromise<Contracts.WorkItemClassificationNode>
     */
    getClassificationNode(project: string, structureGroup: Contracts.TreeStructureGroup, path?: string, depth?: number): IPromise<Contracts.WorkItemClassificationNode>;
    /**
     * @param {Contracts.WorkItemClassificationNode} postedNode
     * @param {string} project - Project ID or project name
     * @param {Contracts.TreeStructureGroup} structureGroup
     * @param {string} path
     * @return IPromise<Contracts.WorkItemClassificationNode>
     */
    updateClassificationNode(postedNode: Contracts.WorkItemClassificationNode, project: string, structureGroup: Contracts.TreeStructureGroup, path?: string): IPromise<Contracts.WorkItemClassificationNode>;
    /**
     * @param {string} field
     * @return IPromise<Contracts.WorkItemField>
     */
    getField(field: string): IPromise<Contracts.WorkItemField>;
    /**
     * @return IPromise<Contracts.WorkItemField[]>
     */
    getFields(): IPromise<Contracts.WorkItemField[]>;
    /**
     * Returns history of all revision for a given work item ID
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemHistory[]>
     */
    getHistory(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemHistory[]>;
    /**
     * Returns the history value of particular revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @return IPromise<Contracts.WorkItemHistory>
     */
    getHistoryById(id: number, revisionNumber: number): IPromise<Contracts.WorkItemHistory>;
    /**
     * Creates a query, or moves a query.
     *
     * @param {Contracts.QueryHierarchyItem} postedQuery - The query to create.
     * @param {string} project - Project ID or project name
     * @param {string} query - The parent path for the query to create.
     * @return IPromise<Contracts.QueryHierarchyItem>
     */
    createQuery(postedQuery: Contracts.QueryHierarchyItem, project: string, query: string): IPromise<Contracts.QueryHierarchyItem>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @return IPromise<void>
     */
    deleteQuery(project: string, query: string): IPromise<void>;
    /**
     * Retrieves all queries the user has access to in the current project
     *
     * @param {string} project - Project ID or project name
     * @param {Contracts.QueryExpand} expand
     * @param {number} depth
     * @param {boolean} includeDeleted
     * @return IPromise<Contracts.QueryHierarchyItem[]>
     */
    getQueries(project: string, expand?: Contracts.QueryExpand, depth?: number, includeDeleted?: boolean): IPromise<Contracts.QueryHierarchyItem[]>;
    /**
     * Retrieves a single query by project and either id or path
     *
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @param {Contracts.QueryExpand} expand
     * @param {number} depth
     * @param {boolean} includeDeleted
     * @return IPromise<Contracts.QueryHierarchyItem>
     */
    getQuery(project: string, query: string, expand?: Contracts.QueryExpand, depth?: number, includeDeleted?: boolean): IPromise<Contracts.QueryHierarchyItem>;
    /**
     * @param {Contracts.QueryHierarchyItem} queryUpdate
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @param {boolean} undeleteDescendants
     * @return IPromise<Contracts.QueryHierarchyItem>
     */
    updateQuery(queryUpdate: Contracts.QueryHierarchyItem, project: string, query: string, undeleteDescendants?: boolean): IPromise<Contracts.QueryHierarchyItem>;
    /**
     * Returns a fully hydrated work item for the requested revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @param {Contracts.WorkItemExpand} expand
     * @return IPromise<Contracts.WorkItem>
     */
    getRevision(id: number, revisionNumber: number, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem>;
    /**
     * Returns the list of fully hydrated work item revisions, paged.
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @param {Contracts.WorkItemExpand} expand
     * @return IPromise<Contracts.WorkItem[]>
     */
    getRevisions(id: number, top?: number, skip?: number, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem[]>;
    /**
     * Validates the fields values.
     *
     * @param {Contracts.FieldsToEvaluate} ruleEngineInput
     * @return IPromise<void>
     */
    evaluateRulesOnField(ruleEngineInput: Contracts.FieldsToEvaluate): IPromise<void>;
    /**
     * Returns a single update for a work item
     *
     * @param {number} id
     * @param {number} updateNumber
     * @return IPromise<Contracts.WorkItemUpdate>
     */
    getUpdate(id: number, updateNumber: number): IPromise<Contracts.WorkItemUpdate>;
    /**
     * Returns a the deltas between work item revisions
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @return IPromise<Contracts.WorkItemUpdate[]>
     */
    getUpdates(id: number, top?: number, skip?: number): IPromise<Contracts.WorkItemUpdate[]>;
    /**
     * Gets the results of the query.
     *
     * @param {Contracts.Wiql} wiql - The query containing the wiql.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemQueryResult>
     */
    queryByWiql(wiql: Contracts.Wiql, project?: string): IPromise<Contracts.WorkItemQueryResult>;
    /**
     * Gets the results of the query by id.
     *
     * @param {string} id - The query id.
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemQueryResult>
     */
    queryById(id: string, project?: string): IPromise<Contracts.WorkItemQueryResult>;
    /**
     * Gets the work item relation types.
     *
     * @param {string} relation
     * @return IPromise<Contracts.WorkItemRelationType>
     */
    getRelationType(relation: string): IPromise<Contracts.WorkItemRelationType>;
    /**
     * @return IPromise<Contracts.WorkItemRelationType[]>
     */
    getRelationTypes(): IPromise<Contracts.WorkItemRelationType[]>;
    /**
     * Returns a single work item
     *
     * @param {number} id
     * @param {string[]} fields
     * @param {Date} asOf
     * @param {Contracts.WorkItemExpand} expand
     * @return IPromise<Contracts.WorkItem>
     */
    getWorkItem(id: number, fields?: string[], asOf?: Date, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem>;
    /**
     * Returns a list of work items
     *
     * @param {number[]} ids
     * @param {string[]} fields
     * @param {Date} asOf
     * @param {Contracts.WorkItemExpand} expand
     * @return IPromise<Contracts.WorkItem[]>
     */
    getWorkItems(ids: number[], fields?: string[], asOf?: Date, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem[]>;
    /**
     * @param {VSS_Common_Contracts.JsonPatchDocument} document
     * @param {number} id
     * @param {boolean} validateOnly
     * @param {boolean} bypassRules
     * @return IPromise<Contracts.WorkItem>
     */
    updateWorkItem(document: VSS_Common_Contracts.JsonPatchDocument, id: number, validateOnly?: boolean, bypassRules?: boolean): IPromise<Contracts.WorkItem>;
    /**
     * Returns a single work item from a template
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {string} fields
     * @param {Date} asOf
     * @param {Contracts.WorkItemExpand} expand
     * @return IPromise<Contracts.WorkItem>
     */
    getWorkItemTemplate(project: string, type: string, fields?: string, asOf?: Date, expand?: Contracts.WorkItemExpand): IPromise<Contracts.WorkItem>;
    /**
     * @param {VSS_Common_Contracts.JsonPatchDocument} document
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {boolean} validateOnly
     * @param {boolean} bypassRules
     * @return IPromise<Contracts.WorkItem>
     */
    updateWorkItemTemplate(document: VSS_Common_Contracts.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean): IPromise<Contracts.WorkItem>;
    /**
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemTypeCategory[]>
     */
    getWorkItemTypeCategories(project: string): IPromise<Contracts.WorkItemTypeCategory[]>;
    /**
     * Returns a the deltas between work item revisions
     *
     * @param {string} project - Project ID or project name
     * @param {string} category
     * @return IPromise<Contracts.WorkItemTypeCategory>
     */
    getWorkItemTypeCategory(project: string, category: string): IPromise<Contracts.WorkItemTypeCategory>;
    /**
     * Returns a the deltas between work item revisions
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @return IPromise<Contracts.WorkItemType>
     */
    getWorkItemType(project: string, type: string): IPromise<Contracts.WorkItemType>;
    /**
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.WorkItemType[]>
     */
    getWorkItemTypes(project: string): IPromise<Contracts.WorkItemType[]>;
    /**
     * Returns the dependent fields for the corresponding workitem type and fieldname
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {string} field
     * @return IPromise<Contracts.FieldDependentRule>
     */
    getDependentFields(project: string, type: string, field: string): IPromise<Contracts.FieldDependentRule>;
    /**
     * Export work item type
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {boolean} exportGlobalLists
     * @return IPromise<Contracts.WorkItemTypeTemplate>
     */
    exportWorkItemTypeDefinition(project?: string, type?: string, exportGlobalLists?: boolean): IPromise<Contracts.WorkItemTypeTemplate>;
    /**
     * Add/updates a work item type
     *
     * @param {Contracts.WorkItemTypeTemplateUpdateModel} updateModel
     * @param {string} project - Project ID or project name
     * @return IPromise<Contracts.ProvisioningResult>
     */
    updateWorkItemTypeDefinition(updateModel: Contracts.WorkItemTypeTemplateUpdateModel, project?: string): IPromise<Contracts.ProvisioningResult>;
}
}
declare module "TFS/Work/Contracts" {
import System_Contracts = require("VSS/Common/Contracts/System");
export interface Activity {
    capacityPerDay: number;
    name: string;
}
export interface Board extends ShallowReference {
    _links: any;
    allowedMappings: {
        [key: string]: {
            [key: string]: string[];
        };
    };
    canEdit: boolean;
    columns: BoardColumn[];
    isValid: boolean;
    revision: number;
    rows: BoardRow[];
}
export interface BoardCardSettings {
    value: CardTypeSetting[];
}
export interface BoardChart extends BoardChartReference {
    /**
    * The links for the resource
    */
    _links: any;
    /**
    * The settings for the resource
    */
    settings: {
        [key: string]: any;
    };
}
export interface BoardChartReference {
    /**
    * Name of the resource
    */
    name: string;
    /**
    * Full http link to the resource
    */
    url: string;
}
export interface BoardColumn {
    columnType: BoardColumnType;
    description: string;
    id: string;
    isSplit: boolean;
    itemLimit: number;
    name: string;
    stateMappings: {
        [key: string]: string;
    };
}
export enum BoardColumnType {
    Incoming = 0,
    InProgress = 1,
    Outgoing = 2,
}
export interface BoardReference extends ShallowReference {
}
export interface BoardRow {
    id: string;
    name: string;
}
export enum BugsBehavior {
    Off = 0,
    AsRequirements = 1,
    AsTasks = 2,
}
/**
* Collection of MemberCapacities
*/
export interface Capacities extends TeamSettingsDataContractBase {
    values: TeamMemberCapacity[];
}
/**
* Expected data from PATCH
*/
export interface CapacityPatch {
    activities: Activity[];
    daysOff: DateRange[];
}
export interface CardTypeSetting {
    fields: FieldSetting[];
    type: string;
}
export interface DateRange {
    /**
    * End of the date range.
    */
    end: Date;
    /**
    * Start of the date range.
    */
    start: Date;
}
/**
* An abstracted reference to a field
*/
export interface FieldReference {
    /**
    * fieldRefName for the field
    */
    referenceName: string;
    /**
    * Full http link to more information about the field
    */
    url: string;
}
export interface FieldSetting {
}
export interface Member {
    displayName: string;
    id: string;
    imageUrl: string;
    uniqueName: string;
    url: string;
}
/**
* An abstracted reference to some other resource. This class is used to provide the board data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
*/
export interface ShallowReference {
    /**
    * Id of the resource
    */
    id: string;
    /**
    * Name of the resource
    */
    name: string;
    /**
    * Full http link to the resource
    */
    url: string;
}
/**
* Represents a single TeamFieldValue
*/
export interface TeamFieldValue {
    includeChildren: boolean;
    value: string;
}
/**
* Essentially a collection of tem field values
*/
export interface TeamFieldValues extends TeamSettingsDataContractBase {
    /**
    * The default team field value
    */
    defaultValue: string;
    /**
    * Shallow ref to the field being used as a team field
    */
    field: FieldReference;
    /**
    * Collection of all valid team field values
    */
    values: TeamFieldValue[];
}
/**
* Expected data from PATCH
*/
export interface TeamFieldValuesPatch {
    defaultValue: string;
    values: TeamFieldValue[];
}
export interface TeamIterationAttributes {
    finishDate: Date;
    startDate: Date;
}
/**
* Represents capacity for a specific team member
*/
export interface TeamMemberCapacity extends TeamSettingsDataContractBase {
    /**
    * Collection of capacities associated with the team member
    */
    activities: Activity[];
    /**
    * The days off associated with the team member
    */
    daysOff: DateRange[];
    /**
    * Shallow Ref to the associated team member
    */
    teamMember: Member;
}
/**
* Data contract for TeamSettings
*/
export interface TeamSetting extends TeamSettingsDataContractBase {
    /**
    * Default Iteration
    */
    backlogIteration: TeamSettingsIteration;
    /**
    * Information about categories that are visible on the backlog.
    */
    backlogVisibilities: {
        [key: string]: boolean;
    };
    /**
    * BugsBehavior (Off, AsTasks, AsRequirements, ...)
    */
    bugsBehavior: BugsBehavior;
    /**
    * Days that the team is working
    */
    workingDays: System_Contracts.DayOfWeek[];
}
/**
* Base class for TeamSettings data contracts. Anything common goes here.
*/
export interface TeamSettingsDataContractBase {
    /**
    * Collection of links relevant to resource
    */
    _links: any;
    /**
    * Full http link to the resource
    */
    url: string;
}
export interface TeamSettingsDaysOff extends TeamSettingsDataContractBase {
    daysOff: DateRange[];
}
export interface TeamSettingsDaysOffPatch {
    daysOff: DateRange[];
}
/**
* Represents a shallow ref for a single iteration
*/
export interface TeamSettingsIteration extends TeamSettingsDataContractBase {
    /**
    * Attributes such as start and end date
    */
    attributes: TeamIterationAttributes;
    /**
    * Id of the resource
    */
    id: string;
    /**
    * Name of the resource
    */
    name: string;
    /**
    * Relative path of the iteration
    */
    path: string;
}
export interface TeamSettingsIterations extends TeamSettingsDataContractBase {
    values: TeamSettingsIteration[];
}
/**
* Data contract for what we expect to receive when PATCH
*/
export interface TeamSettingsPatch {
    backlogIteration: string;
    backlogVisibilities: {
        [key: string]: boolean;
    };
    bugsBehavior: BugsBehavior;
    workingDays: System_Contracts.DayOfWeek[];
}
export var TypeInfo: {
    Activity: {
        fields: any;
    };
    Board: {
        fields: any;
    };
    BoardCardSettings: {
        fields: any;
    };
    BoardChart: {
        fields: any;
    };
    BoardChartReference: {
        fields: any;
    };
    BoardColumn: {
        fields: any;
    };
    BoardColumnType: {
        enumValues: {
            "incoming": number;
            "inProgress": number;
            "outgoing": number;
        };
    };
    BoardReference: {
        fields: any;
    };
    BoardRow: {
        fields: any;
    };
    BugsBehavior: {
        enumValues: {
            "off": number;
            "asRequirements": number;
            "asTasks": number;
        };
    };
    Capacities: {
        fields: any;
    };
    CapacityPatch: {
        fields: any;
    };
    CardTypeSetting: {
        fields: any;
    };
    DateRange: {
        fields: any;
    };
    FieldReference: {
        fields: any;
    };
    FieldSetting: {
        fields: any;
    };
    Member: {
        fields: any;
    };
    ShallowReference: {
        fields: any;
    };
    TeamFieldValue: {
        fields: any;
    };
    TeamFieldValues: {
        fields: any;
    };
    TeamFieldValuesPatch: {
        fields: any;
    };
    TeamIterationAttributes: {
        fields: any;
    };
    TeamMemberCapacity: {
        fields: any;
    };
    TeamSetting: {
        fields: any;
    };
    TeamSettingsDataContractBase: {
        fields: any;
    };
    TeamSettingsDaysOff: {
        fields: any;
    };
    TeamSettingsDaysOffPatch: {
        fields: any;
    };
    TeamSettingsIteration: {
        fields: any;
    };
    TeamSettingsIterations: {
        fields: any;
    };
    TeamSettingsPatch: {
        fields: any;
    };
};
}
declare module "TFS/Work/RestClient" {
import Contracts = require("TFS/Work/Contracts");
import TFS_Core_Contracts = require("TFS/Core/Contracts");
import VSS_WebApi = require("VSS/WebApi/RestClient");
export class WorkHttpClient extends VSS_WebApi.VssHttpClient {
    static serviceInstanceId: string;
    constructor(rootRequestPath: string);
    /**
     * Get board API
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id - Identifier for board, either category plural name (Eg:&quot;Stories&quot;) or Guid
     * @return IPromise<Contracts.Board>
     */
    getBoard(teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<Contracts.Board>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.BoardReference[]>
     */
    getBoards(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.BoardReference[]>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId
     * @return IPromise<Contracts.Capacities>
     */
    getCapacities(teamContext: TFS_Core_Contracts.TeamContext, iterationId: string): IPromise<Contracts.Capacities>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId
     * @param {string} teamMemberId
     * @return IPromise<Contracts.TeamMemberCapacity>
     */
    getCapacity(teamContext: TFS_Core_Contracts.TeamContext, iterationId: string, teamMemberId: string): IPromise<Contracts.TeamMemberCapacity>;
    /**
     * @param {Contracts.CapacityPatch} patch
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId
     * @param {string} teamMemberId
     * @return IPromise<Contracts.TeamMemberCapacity>
     */
    updateCapacity(patch: Contracts.CapacityPatch, teamContext: TFS_Core_Contracts.TeamContext, iterationId: string, teamMemberId: string): IPromise<Contracts.TeamMemberCapacity>;
    /**
     * Get board card settings for the board id or board by name
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardCardSettings>
     */
    getBoardCardSettings(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardCardSettings>;
    /**
     * Update board card settings for the board id or board by name
     *
     * @param {Contracts.BoardCardSettings} boardCardSettingsToSave
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardCardSettings>
     */
    updateBoardCardSettings(boardCardSettingsToSave: Contracts.BoardCardSettings, teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardCardSettings>;
    /**
     * Get a board chart
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Identifier for board, either category plural name (Eg:&quot;Stories&quot;) or Guid
     * @param {string} name - The chart name
     * @return IPromise<Contracts.BoardChart>
     */
    getBoardChart(teamContext: TFS_Core_Contracts.TeamContext, board: string, name: string): IPromise<Contracts.BoardChart>;
    /**
     * Get board charts
     *
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Identifier for board, either category plural name (Eg:&quot;Stories&quot;) or Guid
     * @return IPromise<Contracts.BoardChartReference[]>
     */
    getBoardCharts(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardChartReference[]>;
    /**
     * Update a board chart
     *
     * @param {{ [key: string] : any; }} settings - The settings to to be updated for the chart
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Identifier for board, either category plural name (Eg:&quot;Stories&quot;) or Guid
     * @param {string} name - The chart name
     * @return IPromise<Contracts.BoardChart>
     */
    updateBoardChart(settings: {
        [key: string]: any;
    }, teamContext: TFS_Core_Contracts.TeamContext, board: string, name: string): IPromise<Contracts.BoardChart>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardColumn[]>
     */
    getBoardColumns(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardColumn[]>;
    /**
     * @param {Contracts.BoardColumn[]} boardColumns
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardColumn[]>
     */
    updateBoardColumns(boardColumns: Contracts.BoardColumn[], teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardColumn[]>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id
     * @return IPromise<void>
     */
    deleteTeamIteration(teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<void>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} id
     * @return IPromise<Contracts.TeamSettingsIteration>
     */
    getTeamIteration(teamContext: TFS_Core_Contracts.TeamContext, id: string): IPromise<Contracts.TeamSettingsIteration>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} timeframe
     * @return IPromise<Contracts.TeamSettingsIterations>
     */
    getTeamIterations(teamContext: TFS_Core_Contracts.TeamContext, timeframe?: string): IPromise<Contracts.TeamSettingsIterations>;
    /**
     * @param {string} iterationId
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamSettingsIteration>
     */
    postTeamIteration(iterationId: string, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamSettingsIteration>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardRow[]>
     */
    getBoardRows(teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardRow[]>;
    /**
     * @param {Contracts.BoardRow[]} boardRows
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     * @return IPromise<Contracts.BoardRow[]>
     */
    updateBoardRows(boardRows: Contracts.BoardRow[], teamContext: TFS_Core_Contracts.TeamContext, board: string): IPromise<Contracts.BoardRow[]>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId
     * @return IPromise<Contracts.TeamSettingsDaysOff>
     */
    getTeamDaysOff(teamContext: TFS_Core_Contracts.TeamContext, iterationId: string): IPromise<Contracts.TeamSettingsDaysOff>;
    /**
     * @param {Contracts.TeamSettingsDaysOffPatch} daysOffPatch
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId
     * @return IPromise<Contracts.TeamSettingsDaysOff>
     */
    updateTeamDaysOff(daysOffPatch: Contracts.TeamSettingsDaysOffPatch, teamContext: TFS_Core_Contracts.TeamContext, iterationId: string): IPromise<Contracts.TeamSettingsDaysOff>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamFieldValues>
     */
    getTeamFieldValues(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamFieldValues>;
    /**
     * @param {Contracts.TeamFieldValuesPatch} patch
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamFieldValues>
     */
    updateTeamFieldValues(patch: Contracts.TeamFieldValuesPatch, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamFieldValues>;
    /**
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamSetting>
     */
    getTeamSettings(teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamSetting>;
    /**
     * @param {Contracts.TeamSettingsPatch} teamSettingsPatch
     * @param {TFS_Core_Contracts.TeamContext} teamContext - The team context for the operation
     * @return IPromise<Contracts.TeamSetting>
     */
    updateTeamSettings(teamSettingsPatch: Contracts.TeamSettingsPatch, teamContext: TFS_Core_Contracts.TeamContext): IPromise<Contracts.TeamSetting>;
}
}