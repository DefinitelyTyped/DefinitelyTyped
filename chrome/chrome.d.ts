// Type definitions for Chrome extension development
// Project: http://developer.chrome.com/extensions/
// Definitions by: Matthew Kimber <https://github.com/matthewkimber>, otiai10 <https://github.com/otiai10>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../webrtc/MediaStream.d.ts'/>

/** Make chrome namespace available on global scope */
interface Window {
    chrome: typeof chrome;
}

/**
 * Use the chrome.accessibilityFeatures API to manage Chrome's accessibility features. This API relies on
 * the {@link https://developer.chrome.com/apps/types#ChromeSetting|ChromeSetting prototype of the type API} for getting
 * and setting individual accessibility features. In order to get feature states the extension must
 * request accessibilityFeatures.read permission. For modifying feature state, the extension needs
 * accessibilityFeatures.modify permission. Note that accessibilityFeatures.modify does not imply
 * accessibilityFeatures.read permission.
 */
declare module chrome.accessibilityFeatures {

    export const spokenFeedback: types.ChromeSetting;
    export const largeCursor: types.ChromeSetting;
    export const stickyKeys: types.ChromeSetting;
    export const highContrast: types.ChromeSetting;
    export const screenMagnifier: types.ChromeSetting;
    export const autoclick: types.ChromeSetting;
    export const virtualKeyboard: types.ChromeSetting;
    export const animationPolicy: types.ChromeSetting;
}

/**
 * Use the chrome.alarms API to schedule code to run periodically or at a specified time in the future.
 */
declare module chrome.alarms {

    // Types

    interface Alarm {
        periodInMinutes?: number;
        scheduledTime: number;
        name: string;
    }

    // Callbacks parameters

    interface AlarmCreation {
        delayInMinutes?: number;
        periodInMinutes?: number;
        when?: number;
    }

    // Events

    interface AlarmEvent extends events.Event {
        addListener(callback: (alarm: Alarm) => void): void;
    }

    export function create(alarmInfo: AlarmCreation): void;
    export function create(name: string, alarmInfo: AlarmCreation): void;
    export function getAll(callback: (alarms: Alarm[]) => void): void;
    export function clearAll(): void;
    export function clear(name?: string): void;
    export function get(callback: (alarm: Alarm) => void): void;
    export function get(name: string, callback: (alarm: Alarm) => void): void;

    var onAlarm: AlarmEvent;
}

/**
 * Use the chrome.bookmarks API to create, organize, and otherwise manipulate bookmarks.
 * Also see {@link https://developer.chrome.com/extensions/override|Override Pages},
 * which you can use to create a custom Bookmark Manager page.
 */
declare module chrome.bookmarks {

    // Types

    interface BookmarkTreeNode {
        index?: number;
        dateAdded?: number;
        title: string;
        url?: string;
        dateGroupModified?: number;
        id: string;
        parentId?: string;
        children?: BookmarkTreeNode[];
        unmodifiable?: string;
    }

    // Function parameters

    interface BookmarkCreation {
        parentId?: string;
        index?: number;
        title?: string;
        url?: string;
    }

    interface BookmarkSearchQuery {
        query?: string;
        url?: string;
        title?: string;
    }

    interface BookmarkMoveDestination {
        parentId?: string;
        index?: number;
    }

    interface BookmarkChanges {
        title?: string;
        url?: string;
    }

    // Callbacks parameters

    interface BookmarkRemoveInfo {
        index: number;
        parentId: string;
    }

    interface BookmarkMoveInfo {
        index: number;
        oldIndex: number;
        parentId: string;
        oldParentId: string;
    }

    interface BookmarkChangeInfo {
        url?: string;
        title: string;
    }

    interface BookmarkReorderInfo {
        childIds: string[];
    }

    // Events

    interface BookmarkRemovedEvent extends chrome.events.Event {
        addListener(callback: (id: string, removeInfo: BookmarkRemoveInfo) => void): void;
    }

    interface BookmarkImportEndedEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface BookmarkMovedEvent extends chrome.events.Event {
        addListener(callback: (id: string, moveInfo: BookmarkMoveInfo) => void): void;
    }

    interface BookmarkImportBeganEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface BookmarkChangedEvent extends chrome.events.Event {
        addListener(callback: (id: string, changeInfo: BookmarkChangeInfo) => void): void;
    }

    interface BookmarkCreatedEvent extends chrome.events.Event {
        addListener(callback: (id: string, bookmark: BookmarkTreeNode) => void): void;
    }

    interface BookmarkChildrenReordered extends chrome.events.Event {
        addListener(callback: (id: string, reorderInfo: BookmarkReorderInfo) => void): void;
    }

    export function search(query: string | BookmarkSearchQuery, callback: (results: BookmarkTreeNode[]) => void): void;
    export function getTree(callback: (results: BookmarkTreeNode[]) => void): void;
    export function getRecent(numberOfItems: number, callback: (results: BookmarkTreeNode[]) => void): void;
    export function get(ids: string | string[], callback: (results: BookmarkTreeNode[]) => void): void;
    export function create(bookmark: BookmarkCreation, callback?: (result: BookmarkTreeNode) => void): void;
    export function move(id: string, destination: BookmarkMoveDestination, callback?: (result: BookmarkTreeNode) => void): void;
    export function update(id: string, changes: BookmarkChanges, callback?: (result: BookmarkTreeNode) => void): void;
    export function remove(id: string, callback?: Function): void;
    export function getChildren(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
    export function getSubTree(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
    export function removeTree(id: string, callback?: Function): void;

    var onRemoved: BookmarkRemovedEvent;
    var onImportEnded: BookmarkImportEndedEvent;
    var onImportBegan: BookmarkImportBeganEvent;
    var onChanged: BookmarkChangedEvent;
    var onMoved: BookmarkMovedEvent;
    var onCreated: BookmarkCreatedEvent;
    var onChildrenReordered: BookmarkChildrenReordered;
}

/**
 * Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar.
 * In addition to its icon, a browser action can also have a tooltip, a badge, and a popup.
 */
declare module chrome.browserAction {

    // Types

    interface ColorArray extends Array<number> {
    }

    interface ImageDataType extends ImageData {
    }

    // Functions parameters

    interface BadgeBackgroundColorDetails {
        color: string | ColorArray;
        tabId?: number;
    }

    interface BadgeTextDetails {
        text: string;
        tabId?: number;
    }

    interface TitleDetails {
        title: string;
        tabId?: number;
    }

    interface TabDetails {
        tabId?: number;
    }

    interface TabIconDetails {
        tabId?: number;
        path?: string | TabIconPathDictionary;
        imageData?: ImageDataType | TabIconImageDataDictionary
    }

    interface TabIconPathDictionary {
        19: string;
        38: string;
    }

    interface TabIconImageDataDictionary {
        19: ImageDataType;
        38: ImageDataType;
    }

    interface PopupDetails {
        tabId?: number;
        popup: string;
    }

    // Events

    interface BrowserClickedEvent extends chrome.events.Event {
        addListener(callback: (tab: chrome.tabs.Tab) => void): void;
    }

    export function enable(tabId?: number): void;
    export function setBadgeBackgroundColor(details: BadgeBackgroundColorDetails): void;
    export function setBadgeText(details: BadgeTextDetails): void;
    export function setTitle(details: TitleDetails): void;
    export function getBadgeText(details: TabDetails, callback: (result: string) => void): void;
    export function setPopup(details: PopupDetails): void;
    export function disable(tabId?: number): void;
    export function getTitle(details: TabDetails, callback: (result: string) => void): void;
    export function getBadgeBackgroundColor(details: TabDetails, callback: (result: ColorArray) => void): void;
    export function getPopup(details: TabDetails, callback: (result: string) => void): void;
    export function setIcon(details: TabIconDetails, callback?: Function): void;

    var onClicked: BrowserClickedEvent;
}

/**
 * Use the chrome.browsingData API to remove browsing data from a user's local profile.
 */
declare module chrome.browsingData {

    // Types

    interface OriginTypes {
        protectedWeb?: boolean;
        extension?: boolean;
        unprotectedWeb?: boolean;
    }

    interface RemovalOptions {
        originTypes?: OriginTypes;
        since?: number;
    }

    interface DataTypeSet {
        webSQL?: boolean;
        indexedDB?: boolean;
        cookies?: boolean;
        passwords?: boolean;
        serverBoundCertificates?: boolean;
        downloads?: boolean;
        cache?: boolean;
        appcache?: boolean;
        fileSystems?: boolean;
        pluginData?: boolean;
        localStorage?: boolean;
        formData?: boolean;
        history?: boolean;
        serviceWorkers?: boolean;
    }

    // Callbacks parameters

    interface SettingsRequestResult {
        options: RemovalOptions;
        dataToRemove: DataTypeSet;
        dataRemovalPermitted: DataTypeSet;
    }

    export function settings(callback: (result: SettingsRequestResult) => void): void;
    export function removePluginData(options: RemovalOptions, callback?: Function): void;
    export function removeFormData(options: RemovalOptions, callback?: Function): void;
    export function removeFileSystems(options: RemovalOptions, callback?: Function): void;
    export function remove(options: RemovalOptions, dataToRemove: DataTypeSet, callback?: Function): void;
    export function removePasswords(options: RemovalOptions, callback?: Function): void;
    export function removeCookies(options: RemovalOptions, callback?: Function): void;
    export function removeWebSQL(options: RemovalOptions, callback?: Function): void;
    export function removeAppcache(options: RemovalOptions, callback?: Function): void;
    export function removeDownloads(options: RemovalOptions, callback?: Function): void;
    export function removeLocalStorage(options: RemovalOptions, callback?: Function): void;
    export function removeCache(options: RemovalOptions, callback?: Function): void;
    export function removeHistory(options: RemovalOptions, callback?: Function): void;
    export function removeIndexedDB(options: RemovalOptions, callback?: Function): void;
}

/**
 * Use the commands API to add keyboard shortcuts that trigger actions in your extension,
 * for example, an action to open the browser action or send a command to the extension.
 */
declare module chrome.commands {
    interface Command {
      name?: string;
      description?: string;
      shortcut?: string;
    }

    interface CommandEvent extends chrome.events.Event {
        addListener(callback: (command: string) => void): void;
    }

    export function getAll(callback: (commands: Command[]) => void): void;

    var onCommand: CommandEvent;
}

/**
 * Use the chrome.contentSettings API to change settings that control whether websites can use features such
 * as cookies, JavaScript, and plugins. More generally speaking, content settings allow you to customize Chrome's
 * behavior on a per-site basis instead of globally.
 */
declare module chrome.contentSettings {
    interface ClearDetails {
        scope?: string;
    }

    interface SetDetails {
        resourceIdentifier?: ResourceIdentifier;
        setting: any;
        secondaryPattern?: string;
        scope?: string;
        primaryPattern: string;
    }

    interface GetDetails {
        secondaryUrl?: string;
        resourceIdentifier?: ResourceIdentifier;
        incognito?: boolean;
        primaryUrl: string;
    }

    interface ReturnedDetails {
        setting: any;
    }

    interface ContentSetting {
        clear(details: ClearDetails, callback?: Function): void;
        set(details: SetDetails, callback?: Function): void;
        getResourceIdentifiers(callback: (resourceIdentifiers: ResourceIdentifier[]) => void): void;
        get(details: GetDetails, callback: (details: ReturnedDetails) => void): void;
    }

    interface ResourceIdentifier {
        id: string;
        description?: string;
    }

    export const cookies: ContentSetting;
    export const popups: ContentSetting;
    export const javascript: ContentSetting;
    export const notifications: ContentSetting;
    export const plugins: ContentSetting;
    export const images: ContentSetting;
}

/**
 * Use the chrome.contextMenus API to add items to Google Chrome's context menu.
 * You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.
 */
declare module chrome.contextMenus {

    interface OnClickData {
        selectionText?: string;
        checked?: boolean;
        menuItemId: number | string;
        frameUrl?: string;
        editable: boolean;
        mediaType?: string;
        wasChecked?: boolean;
        pageUrl?: string;
        linkUrl?: string;
        parentMenuItemId?: number | string;
        srcUrl?: string;
    }

    interface CreateProperties {
        documentUrlPatterns?: string[];
        checked?: boolean;
        title?: string;
        contexts?: string[];
        enabled?: boolean;
        targetUrlPatterns?: string[];
        onclick?: (info: OnClickData, tab: chrome.tabs.Tab) => void;
        parentId?: number | string;
        type?: string;
        id?: string;
    }

    interface UpdateProperties {
        documentUrlPatterns?: string[];
        checked?: boolean;
        title?: string;
        contexts?: string[];
        enabled?: boolean;
        targetUrlPatterns?: string[];
        onclick?: (info: OnClickData, tab: chrome.tabs.Tab) => void;
        parentId?: number | string;
        type?: string;
    }

    interface MenuClickedEvent extends chrome.events.Event {
        addListener(callback: (info: OnClickData, tab?: chrome.tabs.Tab) => void): void;
    }

    export function removeAll(callback?: Function): void;
    export function create(createProperties: CreateProperties, callback?: Function): void;
    export function update(id: number | string, updateProperties: UpdateProperties, callback?: Function): void;
    export function remove(menuItemId: number | string, callback?: Function): void;

    export const ACTION_MENU_TOP_LEVEL_LIMIT: number;

    var onClicked: MenuClickedEvent;
}

/**
 * Use the chrome.cookies API to query and modify cookies, and to be notified when they change.
 */
declare module chrome.cookies {
    interface Cookie {
        domain: string;
        name: string;
        storeId: string;
        value: string;
        session: boolean;
        hostOnly: boolean;
        expirationDate?: number;
        path: string;
        httpOnly: boolean;
        secure: boolean;
    }

    interface CookieStore {
        id: string;
        tabIds: number[];
    }

    interface GetAllDetails {
        domain?: string;
        name?: string;
        url?: string;
        storeId?: string;
        session?: boolean;
        path?: string;
        secure?: boolean;
    }

    interface SetDetails {
        domain?: string;
        name?: string;
        url: string;
        storeId?: string;
        value?: string;
        expirationDate?: number;
        path?: string;
        httpOnly?: boolean;
        secure?: boolean;
    }

    interface Details {
        name: string;
        url: string;
        storeId?: string;
    }

    interface CookieChangeInfo {
        cookie: Cookie;
        removed: boolean;
        cause: string;
    }

    interface CookieChangedEvent extends chrome.events.Event {
        addListener(callback: (changeInfo: CookieChangeInfo) => void): void;
    }

    export function getAllCookieStores(callback: (cookieStores: CookieStore[]) => void): void;
    export function getAll(details: GetAllDetails, callback: (cookies: Cookie[]) => void): void;
    export function set(details: SetDetails, callback?: (cookie?: Cookie) => void): void;
    export function remove(details: Details, callback?: (details?: Details) => void): void;
    export function get(details: Details, callback: (cookie?: Cookie) => void): void;

    var onChanged: CookieChangedEvent;
}

/**
 * The chrome.debugger API serves as an alternate transport for Chrome's
 * {@link https://developer.chrome.com/devtools/docs/debugger-protocol|remote debugging protocol}. Use
 * chrome.debugger to attach to one or more tabs to instrument network interaction, debug JavaScript, mutate
 * the DOM and CSS, etc. Use the Debuggee tabId to target tabs with sendCommand and route events by tabId
 * from onEvent callbacks.
 */
declare module "chrome.debugger" {
    interface Debuggee {
        tabId?: number;
        extensionId?: number;
        targetId?: number;
    }

    interface TargetInfo {
        type: string;
        id: string;
        tabId?: number;
        extensionId?: number;
        attached: boolean;
        title: string;
        url: string;
        faviconUrl: string;
    }

    interface DebuggerDetachedEvent extends chrome.events.Event {
        addListener(callback: (source: Debuggee, reason: string) => void): void;
    }

    interface DebuggerEventEvent extends chrome.events.Event {
        addListener(callback: (source: Debuggee, method: string, params?: Object) => void): void;
    }

    export function attach(target: Debuggee, requiredVersion: string, callback?: Function): void;
    export function detach(target: Debuggee, callback?: Function): void;
    export function sendCommand(target: Debuggee, method: string, commandParams?: Object, callback?: (result?: Object) => void): void;
    export function getTargets(callback: (result: TargetInfo[]) => void): void;

    var onDetach: DebuggerDetachedEvent;
    var onEvent: DebuggerEventEvent;
}

/**
 * Use the chrome.declarativeContent API to take actions depending on the content of a page,
 * without requiring permission to read the page's content.
 */
declare module chrome.declarativeContent {

    // types (conditions)

    interface PageStateMatcher extends events.BaseCondition {
        pageUrl?: events.UrlFilter;
        css?: string[];
        isBookmarked?: boolean;
    }

    // types (actions)

    interface SetIcon extends events.BaseAction {
        imageData?: ImageData | SetIconDictionary;
    }

    interface SetIconDictionary {
        19: ImageData;
        38: ImageData;
    }

    interface RequestContentScript extends events.BaseAction {
        css?: string[];
        js?: string[];
        allFrames?: string[];
        matchAboutBlank?: boolean;
    }

    interface ShowPageAction extends events.BaseAction {
    }

    interface PageChangedEvent extends events.Event {
    }

    var onPageChanged: PageChangedEvent;
}

/**
 * Use the chrome.declarativeWebRequest API to intercept, block, or modify requests in-flight. It is
 * significantly faster than the chrome.webRequest API because you can register rules that are evaluated
 * in the browser rather than the JavaScript engine with reduces roundtrip latencies and allows higher efficiency.
 */
declare module chrome.declarativeWebRequest {

    interface HeaderFilter {
        nameEquals?: string;
        valueContains?: string | string[];
        nameSuffix?: string;
        valueSuffix?: string;
        valuePrefix?: string;
        nameContains?: string | string[];
        valueEquals?: string;
        namePrefix?: string;
    }

    interface RequestCookie {
        name?: string;
        value?: string;
    }

    interface ResponseCookie {
        domain?: string;
        name?: string;
        expires?: string;
        maxAge?: number;
        value?: string;
        path?: string;
        httpOnly?: string;
        secure?: string;
    }

    interface FilterResponseCookie {
        domain?: string;
        name?: string;
        expires?: string;
        maxAge?: number;
        value?: string;
        path?: string;
        httpOnly?: string;
        secure?: string;
        ageUpperBound?: number;
        ageLowerBound?: number;
        sessionCookie?: boolean;
    }

    interface RequestMatcher extends events.BaseCondition {
        contentType?: string[];
        url?: events.UrlFilter;
        excludeContentType?: string[];
        excludeResponseHeader?: HeaderFilter[];
        resourceType?: string;
        responseHeaders?: HeaderFilter[];
        firstPartyForCookiesUrl?: events.UrlFilter;
        requestHeaders?: HeaderFilter[];
        excludeRequestHeaders?: HeaderFilter[];
        thirdPartyForCookies?: boolean;
        stages?: string;
    }

    interface AddResponseCookie extends events.BaseAction {
        cookie: ResponseCookie;
    }

    interface EditResponseCookie extends events.BaseAction {
        filter: FilterResponseCookie;
        modification: ResponseCookie;
    }

    interface RemoveRequestHeader extends events.BaseAction {
        name: string;
    }

    interface EditRequestCookie extends events.BaseAction {
        filter: RequestCookie;
        modification: RequestCookie;
    }

    interface SetRequestHeader extends events.BaseAction {
        name: string;
        value: string;
    }

    interface AddResponseHeader extends events.BaseAction {
        name: string;
        value: string;
    }

    interface RemoveResponseCookie extends events.BaseAction {
        filter: FilterResponseCookie;
    }

    interface RemoveResponseHeader extends events.BaseAction {
        name: string;
        value?: string;
    }

    interface RedirectByRegEx extends events.BaseAction {
        to: string;
        from: string;
    }

    interface AddRequestCookie extends events.BaseAction {
        cookie: RequestCookie;
    }

    interface RemoveRequestCookie extends events.BaseAction {
        filter: RequestCookie;
    }

    interface CancelRequest extends events.BaseAction {
    }

    interface RedirectRequest extends events.BaseAction {
        redirectUrl: string;
    }

    interface RedirectToTransparentImage extends events.BaseAction {
    }

    interface RedirectToEmptyDocument extends events.BaseAction {
    }

    interface SendMessageToExtension extends events.BaseAction {
        message: string;
    }

    interface IgnoreRules extends events.BaseAction {
        lowerPriorityThan?: number;
        hasTag?: string;
    }

    interface MessageDetails {
        message: string;
        stage: string;
        requestId: string;
        url: string;
        method: string;
        tabId: number;
        frameId: number;
        parentFrameId: number;
        timeStamp: number;
        type: string;
    }

    interface RequestedEvent extends events.Event {
    }

    interface MessageEvent extends events.Event {
        addListener(callback: (result: MessageDetails) => void): void;
    }

    var onRequest: RequestedEvent;
    var onMessage: MessageEvent;
}

/**
 * Desktop Capture API that can be used to capture content of screen, individual windows or tabs.
 */
declare module chrome.desktopCapture {
    export function chooseDesktopMedia(sources: string[], targetTab: tabs.Tab, callback: (streamId: string) => void): void;
    export function chooseDesktopMedia(sources: string[], callback?: (streamId: string) => void): void;
    export function cancelChooseDesktopMedia(desktopMediaRequestId: number): void;
}

/**
 * Use the chrome.devtools.inspectedWindow API to interact with the inspected window: obtain the tab ID
 * for the inspected page, evaluate the code in the context of the inspected window, reload the page, or
 * obtain the list of resources within the page.
 */
declare module chrome.devtools.inspectedWindow {
    interface Resource {
        url: string;
        getContent(callback: (content: string, encoding: string) => void): void;
        setContent(content: string, commit: boolean, callback?: (error: Object) => void): void;
    }

    interface ReloadOptions {
        userAgent?: string;
        ignoreCache?: boolean;
        injectedScript?: boolean;
    }

    interface EvalOptions {
        frameURL?: string;
        useContentScriptContext?: boolean;
        contextSecurityOrigin?: string;
    }

    interface ExceptionInfo {
        isError: boolean;
        code: string;
        description: string;
        details: any[];
        isException: boolean;
        value: string;
    }

    interface ResourceAddedEvent extends chrome.events.Event {
        addListener(callback: (resource: Resource) => void): void;
    }

    interface ResourceContentCommittedEvent extends chrome.events.Event {
        addListener(callback: (resource: Resource, content: string) => void): void;
    }

    export const tabId: number;

    export function reload(reloadOptions: ReloadOptions): void;
    export function eval(expression: string, options?: EvalOptions, callback?: (result: Object, exceptionInfo: ExceptionInfo) => void): void;
    export function getResources(callback: (resources: Resource[]) => void): void;

    var onResourceAdded: ResourceAddedEvent;
    var onResourceContentCommitted: ResourceContentCommittedEvent;
}

/**
 * Use the chrome.devtools.network API to retrieve the information about network requests
 * displayed by the Developer Tools in the Network panel.
 */
declare module chrome.devtools.network {
    interface Request {
        getContent(callback: (content: string, encoding: string) => void): void;
    }

    interface RequestFinishedEvent extends chrome.events.Event {
        addListener(callback: (request: Request) => void): void;
    }

    interface NavigatedEvent extends chrome.events.Event {
        addListener(callback: (url: string) => void): void;
    }

    export function getHAR(callback: (harLog: Object) => void): void;

    var onRequestFinished: RequestFinishedEvent;
    var onNavigated: NavigatedEvent;
}

/**
 * Use the chrome.devtools.panels API to integrate your extension into Developer Tools
 * window UI: create your own panels, access existing panels, and add sidebars.
 */
declare module chrome.devtools.panels {

    // ElementsPanel

    interface ElementsPanel {
        createSidebarPane(title: string, callback?: (result: ExtensionSidebarPane) => void): void;
        onSelectionChanged: SelectionChangedEvent;
    }

    interface SelectionChangedEvent {
        addListener(callback: Function): void;
    }

    // ExtensionPanel

    interface ExtensionPanel {
        createStatusButton(iconPath: string, tooltipText: string, disabled: boolean): Button;
        onShown: PanelShownEvent;
        onHidden: PanelHiddenEvent;
        onSearch: PanelSearchEvent;
    }

    interface PanelShownEvent {
        addListener(callback: (window: Window) => void): void;
    }

    interface PanelHiddenEvent {
        addListener(callback: Function): void;
    }

    interface PanelSearchEvent {
        addListener(callback: (action: string, queryString?: string) => void): void;
    }

    // ExtensionSidebarPane

    interface ExtensionSidebarPane {
        setHeight(height: string): void;
        setExpression(expression: string, rootTitle?: string, callback?: Function): void;
        setObject(jsonObject: string, rootTitle?: string, callback?: Function): void;
        setPage(path: string): void;
        onShown: ExtensionSidebarPaneShownEvent;
        onHidden: ExtensionSidebarPaneHiddenEvent;
    }

    interface ExtensionSidebarPaneShownEvent {
        addListener(callback: (window: Window) => void): void;
    }

    interface ExtensionSidebarPaneHiddenEvent {
        addListener(callback: Function): void;
    }

    // Button

    interface Button {
        update(iconPath?: string, tooltipText?: string, disabled?: boolean): void;
        onClicked: ButtonClickedEvent;
    }

    interface ButtonClickedEvent {
        addListener(callback: Function): void;
    }

    // SourcesPanel

    interface SourcesPanel {
        createSidebarPane(title: string, callback?: (result: ExtensionSidebarPane) => void): void;
        onSelectionChanged: SourcesPanelSelectionChangedEvent;
    }

    interface SourcesPanelSelectionChangedEvent {
        addListener(callback: Function): void;
    }

    // properties

    export const elements: ElementsPanel;
    export const sources: SourcesPanel;

    // methods

    export function create(title: string, iconPath: string, pagePath: string, callback?: (panel: ExtensionPanel) => void): void;
    export function setOpenResourceHandler(callback?: (resource: inspectedWindow.Resource) => void): void;
    export function openResource(url: string, lineNumber: number, callback?: Function): void;
}

/**
 * Use the chrome.documentScan API to discover and retrieve images from attached paper document scanners.
 */
declare module chrome.documentScan {

    interface ScanOptions {
        mimeTypes?: string[];
        maxImages?: number;
    }

    interface ScanResult {
        dataUrls: string[];
        mimeType: string;
    }

    export function scan(options: ScanOptions, callback: (result: ScanResult) => void): void;
}

/**
 * Use the chrome.downloads API to programmatically initiate, monitor, manipulate, and search for downloads.
 */
declare module chrome.downloads {

    // types
    interface DownloadItem {
        bytesReceived: number;
        danger: string;
        url: string;
        totalBytes: number;
        dangerAccepted?: boolean;
        filename: string;
        paused: boolean;
        state: string;
        mime: string;
        fileSize: number;
        startTime: string;
        error?: string;
        endTime?: string;
        estimatedEndTime?: string;
        id: number;
        incognito: boolean;
        referrer: string;
        canResume: boolean;
        exists: boolean;
        byExtensionId?: string;
        byExtensionName?: string;
    }

    interface StringDelta {
        previous?: string;
        current?: string;
    }

    interface DoubleDelta {
        previous?: number;
        current?: number;
    }

    interface BooleanDelta {
        previous?: boolean;
        current?: boolean;
    }

    // functions parameters

    interface HeaderNameValuePair {
        name: string;
        value: string;
    }

    interface DownloadOptions {
        body?: string;
        saveAs?: boolean;
        url: string;
        filename?: string;
        headers?: HeaderNameValuePair[];
        method?: string;
        conflictAction?: string;
    }

    interface DownloadDelta {
        danger?: StringDelta;
        url?: StringDelta;
        totalBytes?: DoubleDelta;
        filename?: StringDelta;
        paused?: BooleanDelta;
        state?: StringDelta;
        mime?: StringDelta;
        fileSize?: DoubleDelta;
        startTime?: StringDelta;
        error?: StringDelta;
        endTime?: StringDelta;
        canResume?: BooleanDelta;
        exists?: BooleanDelta;
        id: number;
    }

    interface GetFileIconOptions {
        size?: number;
    }

    interface DownloadQuery {
        orderBy?: string[];
        urlRegex?: string;
        endedBefore?: string;
        totalBytesGreater?: number;
        danger?: string;
        totalBytes?: number;
        paused?: boolean;
        filenameRegex?: string;
        query?: string[];
        totalBytesLess?: number;
        id?: number;
        bytesReceived?: number;
        endedAfter?: string;
        filename?: string;
        state?: string;
        startedAfter?: string;
        dangerAccepted?: boolean;
        mime?: string;
        fileSize?: number;
        startTime?: string;
        url?: string;
        startedBefore?: string;
        limit?: number;
        error?: string;
        endTime?: string;
        exists?: boolean;
    }

    interface DownloadChangedEvent extends events.Event {
        addListener(callback: (downloadDelta: DownloadDelta) => void): void;
    }

    interface DownloadCreatedEvent extends events.Event {
        addListener(callback: (downloadItem: DownloadItem) => void): void;
    }

    interface DownloadErasedEvent extends events.Event {
        addListener(callback: (downloadId: number) => void): void;
    }

    export function download(options: DownloadOptions, callback?: (downloadId: number) => void): void;
    export function search(query: DownloadQuery, callback: (results: DownloadItem[]) => void): void;
    export function pause(downloadId: number, callback?: Function): void;
    export function resume(downloadId: number, callback?: Function): void;
    export function cancel(downloadId: number, callback?: Function): void;
    export function getFileIcon(downloadId: number, callback: (iconURL: string) => void): void;
    export function getFileIcon(downloadId: number, options: GetFileIconOptions, callback: (iconURL: string) => void): void;
    export function open(downloadId: number): void;
    export function show(downloadId: number): void;
    export function showDefaultFolder(): void;
    export function erase(query: DownloadQuery, callback?: (erasedIds: number[]) => void): void;
    export function removeFile(downloadId: number, callback: Function): void;
    export function acceptDanger(downloadId: number, callback: Function): void;
    export function drag(downloadId: number): void;
    export function setShelfEnabled(enabled: boolean): void;

    var onChanged: DownloadChangedEvent;
    var onCreated: DownloadCreatedEvent;
    var onErased: DownloadErasedEvent;
}

/**
 * Use the chrome.enterprise.platformKeys API to generate hardware-backed keys and to install certificates for these
 * keys. The certificates will be managed by the platform and can be used for TLS authentication, network access or by
 * other extension through chrome.platformKeys.
 */
declare module chrome.enterprise.platformKeys {

    interface Token {
        id: string;
        subtleCrypto: SubtleCrypto;
    }

    export function getTokens(callback: (tokens: Token[]) => void): void;
    export function getCertificates(tokenId: string, callback: (certificates: ArrayBuffer[]) => void): void;
    export function importCertificate(tokenId: string, certificate: ArrayBuffer, callback?: Function): void;
    export function removeCertificate(tokenId: string, certificate: ArrayBuffer, callback?: Function): void;
}

/**
 * The chrome.events namespace contains common types used by APIs dispatching events
 * to notify you when something interesting happens.
 */
declare module chrome.events {

    export interface UrlFilter {
        schemes?: string[];
        urlMatches?: string;
        pathContains?: string;
        hostSuffix?: string;
        hostPrefix?: string;
        hostContains?: string;
        urlContains?: string;
        querySuffix?: string;
        urlPrefix?: string;
        hostEquals?: string;
        urlEquals?: string;
        queryContains?: string;
        pathPrefix?: string;
        pathEquals?: string;
        pathSuffix?: string;
        queryEquals?: string;
        queryPrefix?: string;
        urlSuffix?: string;
        ports?: any[];
    }

    interface Event {
        addListener(callback: Function): void;
        getRules(callback: (rules: Rule[]) => void): void;
        getRules(ruleIdentifiers: string[], callback: (rules: Rule[]) => void): void;
        hasListener(callback: Function): boolean;
        removeRules(ruleIdentifiers?: string[], callback?: Function): void;
        addRules(rules: Rule[], callback?: (rules: Rule[]) => void): void;
        removeListener(callback: Function): void;
        hasListeners(): boolean;
    }

    interface Rule {
        priority?: number;
        conditions: BaseCondition[];
        id?: string;
        tags?: string[];
        actions: BaseAction[];
    }

    interface BaseAction {
    }

    interface BaseCondition {
    }
}

/**
 * The chrome.extension API has utilities that can be used by any extension page. It includes support for
 * exchanging messages between an extension and its content scripts or between extensions, as described in detail
 * in {@link https://developer.chrome.com/extensions/messaging|in Message Passing}.
 */
declare module chrome.extension {
    interface FetchProperties {
        windowId?: number;
        type?: string;
    }

    interface LastError {
        message?: string;
    }

    export const inIncognitoContext: boolean;
    export const lastError: LastError;

    export function getBackgroundPage(): Window;
    export function getURL(path: string): string;
    export function setUpdateUrlData(data: string): void;
    export function getViews(fetchProperties?: FetchProperties): Window[];
    export function isAllowedFileSchemeAccess(callback: (isAllowedAccess: boolean) => void): void;
    export function isAllowedIncognitoAccess(callback: (isAllowedAccess: boolean) => void): void;
}

/**
 * The chrome.extensionTypes API contains type declarations for Chrome extensions.
 */
 declare module chrome.extensionTypes {

    interface ImageDetails {
        format?: string;
        quality?: number;
    }

    interface InjectDetails {
        code?: string;
        file?: string;
        allFrames?: boolean;
        matchAboutBlank?: boolean;
        runAt?: string;
    }
 }

/**
 * Use the chrome.fileBrowserHandler API to extend the Chrome OS file browser. For example, you can use
 * this API to enable users to upload files to your website.
 */
declare module chrome.fileBrowserHandler {

    interface SelectionParams {
        allowedFileExtensions?: string[];
        suggestedName: string;
    }

    interface SelectionResult {
        entry?: Object;
        success: boolean;
    }

    interface FileHandlerExecuteEventDetails {
        tab_id?: number;
        entries: any[];
    }

    interface FileBrowserHandlerExecuteEvent extends events.Event {
        addListener(callback: (id: string, details: FileHandlerExecuteEventDetails) => void): void;
    }

    export function selectFile(selectionParams: SelectionParams, callback: (result: SelectionResult) => void): void;

    var onExecute: FileBrowserHandlerExecuteEvent;
}

/**
 * Use the chrome.fileSystemProvider API to create file systems, that can be accessible from the file manager on Chrome OS.
 */
declare module chrome.fileSystemProvider {

    interface EntryMetadata {
        isDirectory: boolean;
        name: string;
        size: number;
        modificationTime: Date;
        mimeType?: string;
        thumbnail?: string;
    }

    interface FileSystemInfo {
        fileSystemId: string;
        displayName: string;
        writable: boolean;
        openedFilesLimit: number;
        openedFiles: File[];
        supportsNotifyTag?: boolean;
        watchers: Watcher[];
    }

    interface GetActionsRequestedOptions {
        fileSystemId: string;
        requestId: number;
        entryPath: string;
    }

    interface Action {
        id: string;
        title?: string;
    }

    interface ExecuteActionRequestedOptions {
        fileSystemId: string;
        requestId: number;
        entryPath: string;
        actionId: string;
    }

    interface File {
        openRequestId: number;
        filePath: string;
        mode: string;
    }

    interface Watcher {
        entryPath: string;
        recursive: boolean;
        lastTag?: string;
    }

    interface MountOptions {
        fileSystemId: string;
        displayName: string;
        writable?: boolean;
        openedFilesLimit?: number;
        supportsNotifyTag?: boolean;
    }

    interface UnmoutOptions {
        fileSystemId: string;
    }

    interface NotifyOptions {
        fileSystemId: string;
        observedPath: string;
        recursive: boolean;
        changeType: string;
        changes?: EntryChange[];
        tag?: string;
    }

    interface EntryChange {
        entryPath: string;
        changeType: string;
    }

    // events

    interface UnmountedRequestedEvent extends events.Event {
        addListener(callback: (options: UnmountedRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface UnmountedRequestedOptions {
        fileSystemId: string;
        requestId: number;
    }

    interface GetMetadataRequestedEvent extends events.Event {
        addListener(callback: (options: GetMetadataRequestedOptions, successCallback: (metadata: EntryMetadata) => void, errorCallback: (error: string) => void) => void): void;
    }

    interface GetMetadataRequestedOptions {
        fileSystemId: string;
        requestId: number;
        entryPath: string;
        thumbnail: boolean;
    }

    interface ReadDirectoryRequestedEvent extends events.Event {
        addListener(callback: (options: ReadDirectoryRequestedOptions, successCallback: (entries: EntryMetadata[], hasMore: boolean) => void, errorCallback: (error: string) => void) => void): void;
    }

    interface ReadDirectoryRequestedOptions {
        fileSystemId: string;
        requestId: number;
        directoryPath: string;
    }

    interface OpenFileRequestedEvent extends events.Event {
        addListener(callback: (options: OpenFileRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface OpenFileRequestedOptions {
        fileSystemId: string;
        requestId: number;
        filePath: string;
        mode: string;
    }

    interface CloseFileRequestedEvent extends events.Event {
        addListener(callback: (options: CloseFileRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface CloseFileRequestedOptions {
        fileSystemId: string;
        requestId: number;
        openRequestId: number;
    }

    interface ReadFileRequestedEvent extends events.Event {
        addListener(callback: (options: ReadFileRequestedOptions, successCallback: (data: ArrayBuffer, hasMore: boolean) => void, errorCallback: (error: string) => void) => void): void;
    }

    interface ReadFileRequestedOptions {
        fileSystemId: string;
        requestId: number;
        openRequestId: number;
        offset: number;
        length: number;
    }

    interface CreateDirectoryRequestedEvent extends events.Event {
        addListener(callback: (options: CreateDirectoryRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface CreateDirectoryRequestedOptions {
        fileSystemId: string;
        requestId: number;
        directoryPath: string;
        recursive: boolean;
    }

    interface DeleteEntryRequestedEvent extends events.Event {
        addListener(callback: (options: DeleteEntryRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface DeleteEntryRequestedOptions {
        fileSystemId: string;
        requestId: number;
        entryPath: string;
        recursive: boolean;
    }

    interface CreateFileRequestedEvent extends events.Event {
        addListener(callback: (options: CreateFileRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface CreateFileRequestedOptions {
        fileSystemId: string;
        requestId: number;
        filePath: string;
    }

    interface CopyEntryRequestedEvent extends events.Event {
        addListener(callback: (options: CopyEntryRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface CopyEntryRequestedOptions {
        fileSystemId: string;
        requestId: number;
        sourcePath: string;
        targetPath: string;
    }

    interface MoveEntryRequestedEvent extends events.Event {
        addListener(callback: (options: MoveEntryRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface MoveEntryRequestedOptions {
        fileSystemId: string;
        requestId: number;
        sourcePath: string;
        targetPath: string;
    }

    interface TruncateRequestedEvent extends events.Event {
        addListener(callback: (options: TruncateRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface TruncateRequestedOptions {
        fileSystemId: string;
        requestId: number;
        filePath: string;
        length: number;
    }

    interface WriteFileRequestedEvent extends events.Event {
        addListener(callback: (options: WriteFileRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface WriteFileRequestedOptions {
        fileSystemId: string;
        requestId: number;
        openRequestId: number;
        offset: number;
        data: ArrayBuffer;
    }

    interface AbortRequestedEvent extends events.Event {
        addListener(callback: (options: AbortRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface AbortRequestedOptions {
        fileSystemId: string;
        requestId: number;
        operationRequestId: number;
    }

    interface ConfigureRequestedEvent extends events.Event {
        addListener(callback: (options: ConfigureRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface ConfigureRequestedOptions {
        fileSystemId: string;
        requestId: number;
    }

    interface MountRequestedEvent extends events.Event {
        addListener(callback: (successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface AddWatcherRequestedEvent extends events.Event {
        addListener(callback: (options: AddWatcherRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface AddWatcherRequestedOptions {
        fileSystemId: string;
        requestId: number;
        entryPath: string;
        recursive: boolean;
    }

    interface RemoveWatcherRequestedEvent extends events.Event {
        addListener(callback: (options: RemoveWatcherRequestedOptions, successCallback: Function, errorCallback: (error: string) => void) => void): void;
    }

    interface RemoveWatcherRequestedOptions {
        fileSystemId: string;
        requestId: number;
        entryPath: string;
        recursive: boolean;
    }

    export function mount(options: MountOptions, callback?: Function): void;
    export function unmount(options: UnmoutOptions, callback?: Function): void;
    export function getAll(callback: (fileSystems: FileSystemInfo[]) => void): void;
    export function get(fileSystemId: string, callback: (fileSystem: FileSystemInfo) => void): void;
    export function notify(options: NotifyOptions, callback?: Function): void;

    var onUnmountRequested: UnmountedRequestedEvent;
    var onGetMetadataRequested: GetMetadataRequestedEvent;
    var onReadDirectoryRequested: ReadDirectoryRequestedEvent;
    var onOpenFileRequested: OpenFileRequestedEvent;
    var onCloseFileRequested: CloseFileRequestedEvent;
    var onReadFileRequested: ReadFileRequestedEvent;
    var onCreateDirectoryRequested: CreateDirectoryRequestedEvent;
    var onDeleteEntryRequested: DeleteEntryRequestedEvent;
    var onCreateFileRequested: CreateFileRequestedEvent;
    var onCopyEntryRequested: CopyEntryRequestedEvent;
    var onMoveEntryRequested: MoveEntryRequestedEvent;
    var onTruncateRequested: TruncateRequestedEvent;
    var onWriteFileRequested: WriteFileRequestedEvent;
    var onAbortRequested: AbortRequestedEvent;
    var onConfigureRequested: ConfigureRequestedEvent;
    var onMountRequested: MountRequestedEvent;
    var onAddWatcherRequested: AddWatcherRequestedEvent;
    var onRemoveWatcherRequested: RemoveWatcherRequestedEvent;
}

/**
 * Use the chrome.fontSettings API to manage Chrome's font settings.
 */
declare module chrome.fontSettings {
    interface FontName {
        displayName: string;
        fontId: string;
    }

    interface DefaultFontSizeDetails {
        pixelSize: number;
    }

    interface FontDetails {
        genericFamily: string;
        script?: string;
    }

    interface FullFontDetails {
        genericFamily: string;
        levelOfControl: string;
        script?: string;
        fontId: string;
    }

    interface FontDetailsResult {
        levelOfControl: string;
        fontId: string;
    }

    interface FontSizeDetails {
        pixelSize: number;
        levelOfControl: string;
    }

    interface SetFontSizeDetails {
        pixelSize: number;
    }

    interface SetFontDetails {
        genericFamily: string;
        script?: string;
        fontId: string;
    }

    interface DefaultFixedFontSizeChangedEvent extends events.Event {
        addListener(callback: (details: FontSizeDetails) => void): void;
    }

    interface DefaultFontSizeChangedEvent extends events.Event {
        addListener(callback: (details: FontSizeDetails) => void): void;
    }

    interface MinimumFontSizeChangedEvent extends events.Event {
        addListener(callback: (details: FontSizeDetails) => void): void;
    }

    interface FontChangedEvent extends events.Event {
        addListener(callback: (details: FullFontDetails) => void): void;
    }

    export function setDefaultFontSize(details: DefaultFontSizeDetails, callback?: Function): void;
    export function getFont(details: FontDetails, callback?: (details: FontDetailsResult) => void): void;
    export function getDefaultFontSize(details?: Object, callback?: (options: FontSizeDetails) => void): void;
    export function getMinimumFontSize(details?: Object, callback?: (options: FontSizeDetails) => void): void;
    export function setMinimumFontSize(details: SetFontSizeDetails, callback?: Function): void;
    export function getDefaultFixedFontSize(details?: Object, callback?: (details: FontSizeDetails) => void): void;
    export function clearDefaultFontSize(details?: Object, callback?: Function): void;
    export function setDefaultFixedFontSize(details: SetFontSizeDetails, callback?: Function): void;
    export function clearFont(details: FontDetails, callback?: Function): void;
    export function setFont(details: SetFontDetails, callback?: Function): void;
    export function clearMinimumFontSize(details?: Object, callback?: Function): void;
    export function getFontList(callback: (results: FontName[]) => void): void;
    export function clearDefaultFixedFontSize(details?: Object, callback?: Function): void;

    var onDefaultFixedFontSizeChanged: DefaultFixedFontSizeChangedEvent;
    var onDefaultFontSizeChanged: DefaultFontSizeChangedEvent;
    var onMinimumFontSizeChanged: MinimumFontSizeChangedEvent;
    var onFontChanged: FontChangedEvent;
}

/**
 * Use chrome.gcm to enable apps and extensions to send and receive messages through the
 * {@link http://developer.android.com/google/gcm/|Google Cloud Messaging Service}.
 */
declare module chrome.gcm {

    interface SendMessage {
        destinationId: string;
        messageId: string;
        timeToLive?: number;
        data: Object;
    }

    interface ReceivedMessage {
        data: Object;
        from?: string;
        collapseKey?: string;
    }

    interface ErrorMessage {
        errorMessage: string;
        messageId?: string;
        details: Object;
    }

    interface MessageEvent extends events.Event {
        addListener(callback: (message: ReceivedMessage) => void): void;
    }

    interface MessagesDeletedEvent extends events.Event {
        addListener(callback: Function): void;
    }

    interface SendErrorEvent extends events.Event {
        addListener(callback: (error: ErrorMessage) => void): void;
    }

    export const MAX_MESSAGE_SIZE: number;

    export function register(sendersIds: string[], callback: (registrationId: string) => void): void;
    export function unregister(callback: Function): void;
    export function send(message: SendMessage, callback: (messageId: string) => void): void;

    var onMessage: MessageEvent;
    var onMessagesDeleted: MessagesDeletedEvent;
    var onSendError: SendErrorEvent;
}

/**
 * Use the chrome.history API to interact with the browser's record of visited pages. You can add,
 * remove, and query for URLs in the browser's history. To override the history page with your own
 * version, see {@link https://developer.chrome.com/extensions/override|Override Pages}.
 */
declare module chrome.history {
    interface VisitItem {
        transition: string;
        visitTime?: number;
        visitId: string;
        referringVisitId: string;
        id: string;
    }

    interface HistoryItem {
        typedCount?: number;
        title?: string;
        url?: string;
        lastVisitTime?: number;
        visitCount?: number;
        id: string;
    }

    interface HistoryQuery {
        text: string;
        maxResults?: number;
        startTime?: number;
        endTime?: number;
    }

    interface Url {
        url: string;
    }

    interface Range {
        endTime: number;
        startTime: number;
    }

    interface RemovedResult {
        allHistory: boolean;
        urls?: string[];
    }

    interface HistoryVisitedEvent extends events.Event {
        addListener(callback: (result: HistoryItem) => void): void;
    }

    interface HistoryVisitRemovedEvent extends events.Event {
        addListener(callback: (removed: RemovedResult) => void): void;
    }

    export function search(query: HistoryQuery, callback: (results: HistoryItem[]) => void): void;
    export function addUrl(details: Url, callback?: Function): void;
    export function deleteRange(range: Range, callback: Function): void;
    export function deleteAll(callback: Function): void;
    export function getVisits(details: Url, callback: (results: VisitItem[]) => void): void;
    export function deleteUrl(details: Url, callback?: Function): void;

    var onVisited: HistoryVisitedEvent;
    var onVisitRemoved: HistoryVisitRemovedEvent;
}

/**
 * Use the chrome.i18n infrastructure to implement internationalization across your whole app or extension.
 */
declare module chrome.i18n {
    export function getMessage(messageName: string, substitutions?: any): string;
    export function getAcceptLanguages(callback: (languages: string[]) => void): void;
    export function getUILanguage(): string;
}

/**
 * Use the chrome.identity API to get OAuth2 access tokens.
 */
declare module chrome.identity {

    interface AccountInfo {
        id: string;
    }

    interface TokenDetails {
        interactive?: boolean;
        account?: AccountInfo;
        scopes?: string[];
    }

    interface TokenInfo {
        token: string;
    }

    interface UserInfo {
        email: string;
        id: string;
    }

    interface WebAuthFlowOptions {
        url: string;
        interactive?: boolean;
    }

    interface SignInChangedEvent extends events.Event {
        addListener(callback: (account: AccountInfo, signedIn: boolean) => void): void;
    }

    export function getAccounts(callback: (accounts: AccountInfo[]) => void): void;
    export function getAuthToken(details: TokenDetails, callback: (token: string) => void): void;
    export function getProfileUserInfo(callback: (userInfo: UserInfo) => void): void;
    export function removeCachedAuthToken(token: TokenInfo, callback: Function): void;
    export function launchWebAuthFlow(details: WebAuthFlowOptions, callback: (responseUrl: string) => void): void;
    export function getRedirectURL(path?: string): void;

    var onSignInChanged: SignInChangedEvent;
}

/**
 * Use the chrome.idle API to detect when the machine's idle state changes.
 */
declare module chrome.idle {

    interface IdleStateChangedEvent extends events.Event {
        addListener(callback: (newState: string) => void): void;
    }

    export function queryState(detectionIntervalInSeconds: number, callback: (newState: string) => void): void;
    export function setDetectionInterval(intervalInSeconds: number): void;

    var onStateChanged: IdleStateChangedEvent;
}

/**
 * Use the chrome.input.ime API to implement a custom IME for Chrome OS. This allows your extension
 * to handle keystrokes, set the composition, and manage the candidate window.
 */
declare module chrome.input.ime {

    // types

    interface KeyboardEvent {
        shiftKey?: boolean;
        altKey?: boolean;
        requestId: string;
        key: string;
        ctrlKey?: boolean;
        type: string;
        extensionId?: string;
        code: string;
        keyCode?: number;
        capsLock?: boolean;
    }

    interface InputContext {
        contextID: number;
        type: string;
        autoCorrect: boolean;
        autoComplete: boolean;
        spellCheck: boolean;
    }

    interface MenuItem {
        id: string;
        label?: string;
        style?: string;
        visible?: boolean;
        checked?: boolean;
        enabled?: boolean;
    }

    // functions parameters

    interface CommitTextParameters {
        text: string;
        contextID: number;
    }

    interface CandidatesParameters {
        contextID: number;
        candidates: Object[];
    }

    interface CompositionParameters {
        contextID: number;
        text: string;
        segments: Segment[];
        cursor: number;
        selectionStart?: number;
        selectionEnd?: number;
    }

    interface Segment {
        start: number;
        end: number;
        style: string;
    }

    interface MenuItemParameters {
        items: MenuItem[];
        engineId: string;
    }

    interface CandidateWindowPropertiesParameters {
        cursorVisible?: boolean;
        vertical?: boolean;
        pageSize?: number;
        auxiliaryTextVisible?: boolean;
        auxiliaryText?: string;
        visible?: boolean;
        windowPosition?: string;
    }

    interface ClearCompositionParameters {
        contextID: number;
    }

    interface CursorPositionParameters {
        candidateID: number;
        contextID: number;
    }

    interface SendKeysEventsParameters {
        contextID: number;
        keyData: KeyboardEvent[];
    }

    interface SurroundingTextParameters {
        engineID: string;
        contextID: number;
        offset: number;
        length: number;
    }

    interface SurroundingTextInfo {
        text: string;
        focus: number;
        anchor: number;
    }

    interface BlurEvent extends events.Event {
        addListener(callback: (contextID: number) => void): void;
    }

    interface CandidateClickedEvent extends events.Event {
        addListener(callback: (engineID: string, candidateID: number, button: string) => void): void;
    }

    interface KeyEventEvent extends events.Event {
        addListener(callback: (engineID: string, keyData: KeyboardEvent) => void): void;
    }

    interface DeactivatedEvent extends events.Event {
        addListener(callback: (engineID: string) => void): void;
    }

    interface InputContextUpdateEvent extends events.Event {
        addListener(callback: (context: InputContext) => void): void;
    }

    interface ActivateEvent extends events.Event {
        addListener(callback: (engineID: string, screen: string) => void): void;
    }

    interface FocusEvent extends events.Event {
        addListener(callback: (context: InputContext) => void): void;
    }

    interface MenuItemActivatedEvent extends events.Event {
        addListener(callback: (engineID: string, name: string) => void): void;
    }

    interface SurroundingTextChangedEvent extends events.Event {
        addListener(callback: (engineID: string, surroundingInfo: SurroundingTextInfo) => void): void;
    }

    interface ResetEvent extends events.Event {
        addListener(callback: (engineID: string) => void): void;
    }

    export function setMenuItems(parameters: MenuItemParameters, callback?: Function): void;
    export function commitText(parameters: CommitTextParameters, callback?: (success: boolean) => void): void;
    export function setCandidates(parameters: CandidatesParameters, callback?: (success: boolean) => void): void;
    export function setComposition(parameters: CompositionParameters, callback?: (success: boolean) => void): void;
    export function updateMenuItems(parameters: MenuItemParameters, callback?: Function): void;
    export function setCandidateWindowProperties(parameters: CandidateWindowPropertiesParameters, callback?: (success: boolean) => void): void;
    export function clearComposition(parameters: ClearCompositionParameters, callback?: (success: boolean) => void): void;
    export function setCursorPosition(parameters: CursorPositionParameters, callback?: (success: boolean) => void): void;
    export function sendKeyEvents(parameters: SendKeysEventsParameters, callback?: Function): void;
    export function hideInputView(): void;
    export function deleteSurroundingText(parameters: SurroundingTextParameters, callback: Function): void;
    export function keyEventHandled(requestId: string, response: boolean): void;

    var onBlur: BlurEvent;
    var onCandidateClicked: CandidateClickedEvent;
    var onKeyEvent: KeyEventEvent;
    var onDeactivated: DeactivatedEvent;
    var onInputContextUpdate: InputContextUpdateEvent;
    var onActivate: ActivateEvent;
    var onFocus: FocusEvent;
    var onMenuItemActivated: MenuItemActivatedEvent;
    var onSurroundingTextChanged: SurroundingTextChangedEvent;
    var onReset: ResetEvent;
}

/**
 * The chrome.management API provides ways to manage the list of extensions/apps that are installed and running. It is
 * particularly useful for extensions that {@link https://developer.chrome.com/extensions/override|override} the
 * built-in New Tab page.
 */
declare module chrome.management {
    interface ExtensionInfo {
        disabledReason?: string;
        appLaunchUrl?: string;
        description: string;
        permissions: string[];
        icons?: IconInfo[];
        hostPermissions: string[];
        enabled: boolean;
        homepageUrl?: string;
        mayDisable: boolean;
        installType: string;
        version: string;
        id: string;
        offlineEnabled: boolean;
        updateUrl?: string;
        type: string;
        optionsUrl: string;
        name: string;
        shortName: string;
        launchType?: string;
        availableLaunchTypes?: string[];
    }

    interface IconInfo {
        url: string;
        size: number;
    }

    interface UninstallOptions {
        showConfirmDialog?: boolean;
    }

    interface ManagementDisabledEvent extends events.Event {
        addListener(callback: (info: ExtensionInfo) => void): void;
    }

    interface ManagementUninstalledEvent extends events.Event {
        addListener(callback: (id: string) => void): void;
    }

    interface ManagementInstalledEvent extends events.Event {
        addListener(callback: (info: ExtensionInfo) => void): void;
    }

    interface ManagementEnabledEvent extends events.Event {
        addListener(callback: (info: ExtensionInfo) => void): void;
    }

    export function setEnabled(id: string, enabled: boolean, callback?: Function): void;
    export function getPermissionWarningsById(id: string, callback?: (permissionWarnings: string[]) => void): void;
    export function get(id: string, callback?: (result: ExtensionInfo) => void): void;
    export function getAll(callback?: (result: ExtensionInfo[]) => void): void;
    export function getPermissionWarningsByManifest(manifestStr: string, callback?: (permissionwarnings: string[]) => void): void;
    export function launchApp(id: string, callback?: Function): void;
    export function uninstall(id: string, options?: UninstallOptions, callback?: Function): void;
    export function getSelf(callback?: (result: ExtensionInfo) => void): void;
    export function uninstall(options?: UninstallOptions, callback?: Function): void;
    export function createAppShortcut(id: string, launchType: string, callback?: Function): void;
    export function generateAppForLink(url: string, title: string, callback?: (result: ExtensionInfo) => void): void;

    var onDisabled: ManagementDisabledEvent;
    var onUninstalled: ManagementUninstalledEvent;
    var onInstalled: ManagementInstalledEvent;
    var onEnabled: ManagementEnabledEvent;
}

/**
 * Use the networking.config API to authenticate to captive portals.
 */
declare module chrome.networking.config {

    interface NetworkInfo {
        Type: string;
        GUID?: string;
        HexSSID?: string;
        SSID?: string;
        BSSID?: string;
        Security?: string;
    }

    interface CaptivePortalDetectedEvent extends events.Event {
        addListener(callback: (networkInfo: NetworkInfo) => void): void;
    }

    export function setNetworkFilter(networks: NetworkInfo, callback: Function): void;
    export function finishAuthentication(GUID: string, result: string, callback?: Function): void;

    var onCaptivePortalDetected: CaptivePortalDetectedEvent;
}

/**
 * Use the chrome.notifications API to create rich notifications using templates and show these
 * notifications to users in the system tray.
 */
declare module chrome.notifications {

    interface ButtonOptions {
        title: string;
        iconUrl?: string;
    }

    interface ItemOptions {
        title: string;
        message: string;
    }

    interface NotificationOptions {
        type?: string;
        iconUrl?: string;
        title?: string;
        message?: string;
        contextMessage?: string;
        priority?: number;
        eventTime?: number;
        buttons?: ButtonOptions[];
        items?: ItemOptions[];
        progress?: number;
        isClickable?: boolean;
        appIconMaskUrl?: string;
        imageUrl?: string;
    }

    interface OnClosedEvent extends events.Event {
        addListener(callback: (notificationId: string, byUser: boolean) => void): void;
    }

    interface OnClickedEvent extends events.Event {
        addListener(callback: (notificationId: string) => void): void;
    }

    interface OnButtonClicked extends events.Event {
        addListener(callback: (notificationId: string, buttonIndex: number) => void): void;
    }

    interface OnPermissionLevelChangedEvent extends events.Event {
        addListener(callback: (level: string) => void): void;
    }

    interface OnShowSettingsEvent extends events.Event {
        addListener(callback: Function): void;
    }

    export function create(notificationId: string, options: NotificationOptions, callback?: (notificationId: string) => void): void;
    export function create(options: NotificationOptions, callback?: (notificationId: string) => void): void;
    export function update(notificationId: string, options: NotificationOptions, callback: (wasUpdated: boolean) => void): void;
    export function clear(notificationId: string, callback: (wasCleared: boolean) => void): void;
    export function getAll(callback: (notifications: Object) => void): void;
    export function getPermissionLevel(callback: (level: string) => void): void;

    var onClosed: OnClosedEvent;
    var onClicked: OnClickedEvent;
    var onButtonClicked: OnButtonClicked;
    var onPermissionLevelChanged: OnPermissionLevelChangedEvent;
    var onShowSettings: OnShowSettingsEvent;
}

/**
 * The omnibox API allows you to register a keyword with Google Chrome's address bar, which is also known as the omnibox.
 */
  declare module chrome.omnibox {
    interface SuggestResult {
        content: string;
        description: string;
    }

    interface Suggestion {
        description: string;
    }

    interface OmniboxInputEnteredEvent extends events.Event {
        addListener(callback: (text: string, disposition: string) => void): void;
    }

    interface OmniboxInputChangedEvent extends events.Event {
        addListener(callback: (text: string, suggest: (suggestResults: SuggestResult[]) => void) => void): void;
    }

    interface OmniboxInputStartedEvent extends events.Event {
        addListener(callback: Function): void;
    }

    interface OmniboxInputCancelledEvent extends events.Event {
        addListener(callback: Function): void;
    }

    export function setDefaultSuggestion(suggestion: Suggestion): void;

    var onInputEntered: OmniboxInputEnteredEvent;
    var onInputChanged: OmniboxInputChangedEvent;
    var onInputStarted: OmniboxInputStartedEvent;
    var onInputCancelled: OmniboxInputCancelledEvent;
}

/**
 * Use the chrome.pageAction API to put icons inside the address bar. Page actions represent actions that can be
 * taken on the current page, but that aren't applicable to all pages.
 */
declare module chrome.pageAction {

    interface ImageDataType extends ImageData {
    }

    interface ImageDataDictionary {
        19: ImageData;
        38: ImageData;
    }

    interface ImagePathDictionary {
        19: string;
        38: string;
    }

    interface PageActionClickedEvent extends events.Event {
        addListener(callback: (tab: tabs.Tab) => void): void;
    }

    interface TitleDetails {
        tabId: number;
        title: string;
    }

    interface GetDetails {
        tabId: number;
    }

    interface PopupDetails {
        tabId: number;
        popup: string;
    }

    interface IconDetails {
        tabId: number;
        imageData?: ImageDataType | ImageDataDictionary;
        path?: string | ImagePathDictionary;
    }

    export function hide(tabId: number): void;
    export function show(tabId: number): void;
    export function setTitle(details: TitleDetails): void;
    export function setPopup(details: PopupDetails): void;
    export function getTitle(details: GetDetails, callback: (result: string) => void): void;
    export function getPopup(details: GetDetails, callback: (result: string) => void): void;
    export function setIcon(details: IconDetails, callback?: Function): void;

    var onClicked: PageActionClickedEvent;
}

/**
 * Use the chrome.pageCapture API to save a tab as MHTML.
 */
declare module chrome.pageCapture {
    interface SaveDetails {
        tabId: number;
    }

    export function saveAsMHTML(details: SaveDetails, callback: (mhtmlData: any) => void): void;
}

/**
 * Use the chrome.permissions API to request {@link https://developer.chrome.com/extensions/permissions#manifest|declared optional permissions}
 * at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary.
 */
declare module chrome.permissions {
    interface Permissions {
        origins?: string[];
        permissions?: string[];
    }

    interface PermissionsRemovedEvent {
        addListener(callback: (permissions: Permissions) => void): void;
    }

    interface PermissionsAddedEvent {
        addListener(callback: (permissions: Permissions) => void): void;
    }

    export function contains(permissions: Permissions, callback: (result: boolean) => void): void;
    export function getAll(callback: (permissions: Permissions) => void): void;
    export function request(permissions: Permissions, callback?: (granted: boolean) => void): void;
    export function remove(permissions: Permissions, callback?: (removed: boolean) => void): void;

    var onRemoved: PermissionsRemovedEvent;
    var onAdded: PermissionsAddedEvent;
}

/**
 * Use the chrome.platformKeys API to access client certificates managed by the platform. If the user or policy grants
 * the permission, an extension can use such a certficate in its custom authentication protocol. E.g. this allows usage
 * of platform managed certificates in third party VPNs (see chrome.vpnProvider).
 */
declare module chrome.platformKeys {

    interface Match {
        certificate: ArrayBuffer;
        keyAlgorithm: KeyAlgorithm;
    }

    interface CertificatesSelectionDetails {
        request: CertificatesSelectionRequestDetails;
        clientCerts?: ArrayBuffer[];
        interactive: boolean;
    }

    interface CertificatesSelectionRequestDetails {
        certificateTypes: string[];
        certificateAuthorities: ArrayBuffer[];
    }

    interface TLSServerCertificateVerificationDetails {
        serverCertificateChain: ArrayBuffer[];
        hostname: string;
    }

    interface TLSServerCertificateVerificationResult {
        trusted: boolean;
        debug_errors: string[];
    }

    export function selectClientCertificates(details: CertificatesSelectionDetails, callback: (matches: Match[]) => void): void;
    export function getKeyPair(certificate: ArrayBuffer, parameters: Object, callback: (publicKey: CryptoKey, privateKey?: CryptoKey) => void): void;
    export function subtleCrypto(): void;
    export function verifyTLSServerCertificate(details: TLSServerCertificateVerificationDetails, callback: (result: TLSServerCertificateVerificationResult) => void): void;
}

/**
 * Use the chrome.power API to override the system's power management features.
 */
declare module chrome.power {
    export function requestKeepAwake(level: string): void;
    export function releaseKeepAwake(): void;
}

/**
 * The chrome.printerProvider API exposes events used by print manager to query printers controlled by extensions,
 * to query their capabilities and to submit print jobs to these printers.
 */
declare module chrome.printerProvider {

    interface PrinterInfo {
        id: string;
        name: string;
        description?: string;
    }

    interface PrintJob {
        printerId: string;
        title: string;
        ticket: Object;
        contentType: string;
        document: Blob;
    }

    interface OnGetPrintersRequestedEvent extends events.Event {
        addListener(callback: (resultCallback: (printerInfo: PrinterInfo[]) => void) => void): void;
    }

    interface OnGetCapabilityRequestedEvent extends events.Event {
        addListener(callback: (printerId: string, resultCallback: (capabilities: Object) => void) => void): void;
    }

    interface OnPrintRequestedEvent extends events.Event {
        addListener(callback: (printJob: PrintJob, resultCallback: (result: string) => void) => void): void;
    }

    var onGetPrintersRequested: OnGetPrintersRequestedEvent;
    var onGetCapabilityRequested: OnGetCapabilityRequestedEvent;
    var onPrintRequested: OnPrintRequestedEvent;
}

/**
 * Use the chrome.privacy API to control usage of the features in Chrome that can affect a user's privacy. This API
 * relies on the {@link https://developer.chrome.com/extensions/types#ChromeSetting|ChromeSetting prototype of the type API} for
 * getting and setting Chrome's configuration.
 */
declare module chrome.privacy {

    interface Services {
        spellingServiceEnabled: types.ChromeSetting;
        searchSuggestEnabled: types.ChromeSetting;
        instantEnabled: types.ChromeSetting;
        alternateErrorPagesEnabled: types.ChromeSetting;
        safeBrowsingEnabled: types.ChromeSetting;
        autofillEnabled: types.ChromeSetting;
        translationServiceEnabled: types.ChromeSetting;
        hotwordSearchEnabled: types.ChromeSetting;
        passwordSavingEnabled: types.ChromeSetting;
        safeBrowsingExtendedReportingEnabled: types.ChromeSetting;
    }

    interface Network {
        networkPredictionEnabled: types.ChromeSetting;
        webRTCMultipleRoutesEnabled: types.ChromeSetting;
    }

    interface Websites {
        thirdPartyCookiesAllowed: types.ChromeSetting;
        referrersEnabled: types.ChromeSetting;
        hyperlinkAuditingEnabled: types.ChromeSetting;
        protectedContentEnabled: types.ChromeSetting;
    }

    export const services: Services;
    export const network: Network;
    export const websites: Websites;
}

/**
 * Use the chrome.proxy API to manage Chrome's proxy settings. This API relies on the
 * {@link https://developer.chrome.com/extensions/types#ChromeSetting|ChromeSetting prototype of the type API} for
 * getting and setting the proxy configuration.
 */
declare module chrome.proxy {

    interface PacScript {
        url?: string;
        mandatory?: boolean;
        data?: string;
    }

    interface ProxyConfig {
        rules?: ProxyRules;
        pacScript?: PacScript;
        mode: string;
    }

    interface ProxyServer {
        host: string;
        scheme?: string;
        port?: number;
    }

    interface ProxyRules {
        proxyForFtp?: ProxyServer;
        proxyForHttp?: ProxyServer;
        facllbackProxy?: ProxyServer;
        singleProxy?: ProxyServer;
        proxyForHttps?: ProxyServer;
        bypassList?: string[];
    }

    interface ErrorDetails {
        details: string;
        error: string;
        fatal: boolean;
    }

    interface ProxyErrorEvent extends events.Event {
        addListener(callback: (details: ErrorDetails) => void): void;
    }

    export const settings: types.ChromeSetting;

    var onProxyError: ProxyErrorEvent;
}

/**
 * Use the chrome.runtime API to retrieve the background page, return details about the manifest, and listen for
 * and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path
 * of URLs to fully-qualified URLs.
 */
declare module chrome.runtime {

    export const lastError: LastError;
    export const id: string;

    interface LastError {
        message?: string;
    }

    interface ConnectInfo {
        name?: string;
        includeTlsChannelId?: boolean;
    }

    interface InstalledDetails {
        reason: string;
        previousVersion?: string;
        id?: string;
    }

    interface MessageOptions {
        includeTlsChannelId?: boolean;
    }

    interface MessageSender {
        id?: string;
        tab?: tabs.Tab;
        frameId?: number;
        url?: string;
        tlsChannelId?: string;
    }

    interface PlatformInfo {
        os: string;
        arch: string;
        nacl_arch: string;
    }

    interface Port {
        postMessage: (message: Object) => void;
        disconnect: Function;
        sender?: MessageSender;
        onDisconnect: events.Event;
        onMessage: events.Event;
        name: string;
    }

    interface UpdateAvailableDetails {
        version: string;
    }

    interface UpdateCheckDetails {
        version: string;
    }

    interface PortMessageEvent extends events.Event {
        addListener(callback: (message: Object, port: Port) => void): void;
    }

    interface ExtensionMessageEvent extends events.Event {
        addListener(callback: (message: any, sender: MessageSender, sendResponse: Function) => void): void;
    }

    interface ExtensionMessageExternalEvent extends events.Event {
        addListener(callback: (message: any, sender: MessageSender, sendResponse: Function) => void): void;
    }

    interface ExtensionConnectEvent extends events.Event {
        addListener(callback: (port: Port) => void): void;
    }

    interface ExtensionConnectExternalEvent extends events.Event {
        addListener(callback: (port: Port) => void): void;
    }

    interface RuntimeSuspendEvent extends events.Event {
        addListener(callback: Function): void;
    }

    interface RuntimeStartupEvent extends events.Event {
        addListener(callback: Function): void;
    }

    interface RuntimeInstalledEvent extends events.Event {
        addListener(callback: (details: InstalledDetails) => void): void;
    }

    interface RuntimeSuspendCanceledEvent extends events.Event {
        addListener(callback: Function): void;
    }
    interface RuntimeMessageEvent extends events.Event {
        addListener(callback: Function): void;
    }

    interface RuntimeRestartRequiredEvent extends events.Event {
        addListener(callback: (reason: string) => void): void;
    }

    interface RuntimeUpdateAvailableEvent extends events.Event {
        addListener(callback: (details: UpdateAvailableDetails) => void): void;
    }

    export function connect(extensionId?: string, connectInfo?: ConnectInfo): Port;
    export function connectNative(application: string): Port;
    export function getBackgroundPage(callback: (backgroundPage?: Window) => void): void;
    export function getManifest(): Object;
    export function getPackageDirectoryEntry(callback: (directoryEntry: any) => void): void;
    export function getPlatformInfo(callback: (platformInfo: PlatformInfo) => void): void;
    export function getURL(path: string): string;
    export function reload(): void;
    export function requestUpdateCheck(callback: (status: string, details?: UpdateCheckDetails) => void): void;
    export function restart(): void;
    export function sendMessage(message: any, options?: MessageOptions, responseCallback?: (response: any) => void): void;
    export function sendMessage(extensionId: string, message: any, options?: MessageOptions, responseCallback?: (response: any) => void): void;
    export function sendNativeMessage(application: string, message: Object, responseCallback?: (response: any) => void): void;
    export function setUninstallUrl(url: string): void;
    export function openOptionsPage(callback: Function): void;

    var onConnect: ExtensionConnectEvent;
    var onConnectExternal: ExtensionConnectExternalEvent;
    var onSuspend: RuntimeSuspendEvent;
    var onStartup: RuntimeStartupEvent;
    var onInstalled: RuntimeInstalledEvent;
    var onSuspendCanceled: RuntimeSuspendCanceledEvent;
    var onMessage: ExtensionMessageEvent;
    var onMessageExternal: ExtensionMessageExternalEvent;
    var onRestartRequired: RuntimeRestartRequiredEvent;
    var onUpdateAvailable: RuntimeUpdateAvailableEvent;
}

/**
 * Use the chrome.sessions API to query and restore tabs and windows from a browsing session.
 */
declare module chrome.sessions {

    interface Filter {
        maxResults?: number;
    }

    interface Session {
        lastModified: number;
        tab: tabs.Tab;
        window: windows.Window;
    }

    interface Device {
        deviceName: string;
        sessions: Session[];
    }

    interface ChangedEvent extends events.Event {
        addListener(callback: Function);
    }

    export function getRecentlyClosed(callback: (sessions: Session[]) => void): void;
    export function getRecentlyClosed(filter: Filter, callback: (sessions: Session[]) => void): void;
    export function getDevices(callback: (devices: Device[]) => void): void;
    export function getDevices(filter: Filter, callback: (devices: Device[]) => void): void;
    export function restore(sessionId?: string, callback?: (restoredSession: Session) => void): void;

    export const MAX_SESSION_RESULTS: number;

    var onChanged: ChangedEvent;
}

/**
 * Use the chrome.storage API to store, retrieve, and track changes to user data.
 */
declare module chrome.storage {

    interface StorageArea {
        getBytesInUse(callback: (bytesInUse: number) => void): void;
        getBytesInUse(keys: string | string[], callback: (bytesInUse: number) => void): void;
        clear(callback?: Function): void;
        set(items: Object, callback?: Function): void;
        remove(keys: string | string[], callback?: Function): void;
        get(callback: (items: Object) => void): void;
        get(keys: string | string[] | Object, callback: (items: Object) => void): void;
        get(callback: (items: Object) => void): void;
    }

    interface StorageChange {
        newValue?: any;
        oldValue?: any;
    }

    interface Local extends StorageArea {
        QUOTA_BYTES: number;
    }

    interface Sync extends StorageArea {
        QUOTA_BYTES: number;
        QUOTA_BYTES_PER_ITEM: number;
        MAX_ITEMS: number;
        MAX_WRITE_OPERATIONS_PER_HOUR: number;
        MAX_WRITE_OPERATIONS_PER_MINUTE: number;
    }

    interface StorageChangedEvent extends chrome.events.Event {
        addListener(callback: (changes: Object, areaName: string) => void): void;
    }

    export const local: Local;
    export const sync: Sync;
    export const managed: StorageArea;

    var onChanged: StorageChangedEvent;
}

/**
 * Use the system.cpu API to query CPU metadata.
 */
declare module chrome.system.cpu {

    interface CpuInformation {
        numOfProcessors: number;
        archName: string;
        modelName: string;
        features: string[];
        processors: ProcessorInformation[];
    }

    interface ProcessorInformation {
        usage: ProcessorCumulativeUsageInformation;
    }

    interface ProcessorCumulativeUsageInformation {
        user: number;
        kernel: number;
        idle: number;
        total: number;
    }

    export function getInfo(callback: (info: CpuInformation) => void): void;
}

/**
 * The chrome.system.memory API.
 */
declare module chrome.system.memory {

    interface MemoryInformation {
        capacity: number;
        availableCapacity: number;
    }

    export function getInfo(callback: (info: MemoryInformation) => void): void;
}

/**
 * Use the chrome.system.storage API to query storage device information and be notified when a
 * removable storage device is attached and detached.
 */
declare module chrome.system.storage {

    interface StorageUnitInfo {
        id: string;
        name: string;
        type: string;
        capacity: number;
    }

    interface StorageDeviceCapacityInformation {
        id: string;
        availableCapacity: number;
    }

    interface DeviceDetachedEvent extends events.Event {
        addListener(callback: (id: string) => void): void;
    }

    interface DeviceAttachedEvent extends events.Event {
        addListener(callback: (info: StorageUnitInfo) => void): void;
    }

    export function getInfo(callback: (info: StorageUnitInfo[]) => void): void;
    export function ejectDevice(id: string, callback: (result: string) => void): void;
    export function getAvailableCapacity(id: string, callback: (info: StorageDeviceCapacityInformation) => void): void;

    var onAttached: DeviceAttachedEvent;
    var onDetached: DeviceDetachedEvent;
}

/**
 * Use the chrome.tabCapture API to interact with tab media streams.
 */
declare module chrome.tabCapture {

    interface CaptureInfo {
        tabId: number;
        status: string;
        fullscreen: boolean;
    }

    interface CaptureOptions {
        audio?: boolean;
        video?: boolean;
        audioConstraints?: MediaTrackConstraints;
        videoConstraints?: MediaTrackConstraints;
    }

    interface StatusChangedEvent extends events.Event {
        addListener(callback: (info: CaptureInfo) => void): void;
    }

    export function capture(options: CaptureOptions, callback: (stream: MediaStream) => void): void;
    export function getCapturedTabs(callback: (result: CaptureInfo[]) => void): void;

    var onStatusChanged: StatusChangedEvent;
}

/**
 * Use the chrome.tabs API to interact with the browser's tab system. You can use this API to create,
 * modify, and rearrange tabs in the browser.
 */
declare module chrome.tabs {

    // types

    interface Tab {
        status?: string;
        index: number;
        openerTabId?: number;
        title?: string;
        url?: string;
        pinned: boolean;
        highlighted: boolean;
        windowId: number;
        active: boolean;
        favIconUrl?: string;
        id?: number;
        incognito: boolean;
        audible?: boolean;
        muted?: boolean;
        mutedCause?: boolean;
        width: number;
        height: number;
        sessionId: number;
    }

    interface ZoomSettings {
        mode?: string;
        scope?: string;
        defaultZoomFactor?: number;
    }

    // functions parameters

    interface InjectDetails {
        allFrames?: boolean;
        code?: string;
        runAt?: string;
        file?: string;
        matchAboutBlank?: boolean;
    }

    interface CreateProperties {
        index?: number;
        openerTabId?: number;
        url?: string;
        pinned?: boolean;
        windowId?: number;
        active?: boolean;
    }

    interface MoveProperties {
        index: number;
        windowId?: number;
    }

    interface UpdateProperties {
        pinned?: boolean;
        openerTabId?: number;
        url?: string;
        highlighted?: boolean;
        active?: boolean;
        muted?: boolean;
    }

    interface CaptureVisibleTabOptions {
        quality?: number;
        format?: string;
    }

    interface ReloadProperties {
        bypassCache?: boolean;
    }

    interface ConnectInfo {
        name?: string;
        frameId?: number;
    }

    interface HighlightInfo {
        tabIds: number | number[];
        windowId?: number;
    }

    interface QueryInfo {
        status?: string;
        lastFocusedWindow?: boolean;
        windowId?: number;
        windowType?: string;
        active?: boolean;
        index?: number;
        title?: string;
        url?: string | string[];
        currentWindow?: boolean;
        highlighted?: boolean;
        pinned?: boolean;
        audible?: boolean;
        muted?: boolean;
    }

    interface TabHighlightInfo {
        windowId: number;
        tabIds: number[];
    }

    interface TabRemoveInfo {
        windowId: number;
        isWindowClosing: boolean;
    }

    interface TabAttachInfo {
        newPosition: number;
        newWindowId: number;
    }

    interface TabChangeInfo {
        status?: string;
        pinned?: boolean;
        url?: string;
        audible?: boolean;
        muted?: boolean;
        mutedCause?: boolean;
        favIconUrl?: string;
    }

    interface TabMoveInfo {
        toIndex: number;
        windowId: number;
        fromIndex: number;
    }

    interface TabDetachInfo {
        oldWindowId: number;
        oldPosition: number;
    }

    interface TabActiveInfo {
        tabId: number;
        windowId: number;
    }

    interface SendMessageOptions {
        frameId?: number;
    }

    interface ZoomChangeInfo {
        tabId: number;
        oldZoomFactor: number;
        newZoomFactor: number;
        zoomSettings: ZoomSettings;
    }

    interface TabHighlightedEvent extends events.Event {
        addListener(callback: (highlightInfo: TabHighlightInfo) => void): void;
    }

    interface TabRemovedEvent extends events.Event {
        addListener(callback: (tabId: number, removeInfo: TabRemoveInfo) => void): void;
    }

    interface TabUpdatedEvent extends events.Event {
        addListener(callback: (tabId: number, changeInfo: TabChangeInfo, tab: Tab) => void): void;
    }

    interface TabAttachedEvent extends events.Event {
        addListener(callback: (tabId: number, attachInfo: TabAttachInfo) => void): void;
    }

    interface TabMovedEvent extends events.Event {
        addListener(callback: (tabId: number, moveInfo: TabMoveInfo) => void): void;
    }

    interface TabDetachedEvent extends events.Event {
        addListener(callback: (tabId: number, detachInfo: TabDetachInfo) => void): void;
    }

    interface TabCreatedEvent extends events.Event {
        addListener(callback: (tab: Tab) => void): void;
    }

    interface TabActivatedEvent extends events.Event {
        addListener(callback: (activeInfo: TabActiveInfo) => void): void;
    }

    interface TabReplacedEvent extends events.Event {
        addListener(callback: (addedTabId: number, removedTabId: number) => void): void;
    }

    interface TabZoomChangedEvent extends events.Event {
        addListener(callback: (ZoomChangeInfo: ZoomChangeInfo) => void): void;
    }

    export function executeScript(details: InjectDetails, callback?: (result: any[]) => void): void;
    export function executeScript(tabId: number, details: InjectDetails, callback?: (result: any[]) => void): void;
    export function get(tabId: number, callback: (tab: Tab) => void): void;
    export function getCurrent(callback: (tab?: Tab) => void): void;
    export function create(createProperties: CreateProperties, callback?: (tab: Tab) => void): void;
    export function move(tabId: number | number[], moveProperties: MoveProperties, callback?: (tabs: Tab | Tab[]) => void): void;
    export function update(updateProperties: UpdateProperties, callback?: (tab?: Tab) => void): void;
    export function update(tabId: number, updateProperties: UpdateProperties, callback?: (tab?: Tab) => void): void;
    export function remove(tabIds: number | number[], callback?: Function): void;
    export function captureVisibleTab(callback: (dataUrl: string) => void): void;
    export function captureVisibleTab(windowId: number, callback: (dataUrl: string) => void): void;
    export function captureVisibleTab(options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
    export function captureVisibleTab(windowId: number, options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
    export function reload(tabId?: number, reloadProperties?: ReloadProperties, callback?: Function): void;
    export function duplicate(tabId: number, callback?: (tab?: Tab) => void): void;
    export function sendMessage(tabId: number, message: any, options?: SendMessageOptions, responseCallback?: (response: any) => void): void;
    export function connect(tabId: number, connectInfo?: ConnectInfo): runtime.Port;
    export function insertCSS(details: InjectDetails, callback?: Function): void;
    export function insertCSS(tabId: number, details: InjectDetails, callback?: Function): void;
    export function highlight(highlightInfo: HighlightInfo, callback: (window: windows.Window) => void): void;
    export function query(queryInfo: QueryInfo, callback: (result: Tab[]) => void): void;
    export function detectLanguage(callback: (language: string) => void): void;
    export function detectLanguage(tabId: number, callback: (language: string) => void): void;
    export function setZoom(zoomFactor: number, callback?: Function): void;
    export function setZoom(tabId: number, zoomFactor: number, callback?: Function): void;
    export function getZoom(callback: (zoomFactor: number) => void): void;
    export function getZoom(tabId: number, callback: (zoomFactor: number) => void): void;
    export function setZoomSettings(zoomSettings: ZoomSettings, callback?: Function): void;
    export function setZoomSettings(tabId: number, zoomSettings: ZoomSettings, callback?: Function): void;
    export function getZoomSettings(callback: (zoomSettings: ZoomSettings) => void): void;
    export function getZoomSettings(tabId: number, callback: (zoomSettings: ZoomSettings) => void): void;

    var onHighlighted: TabHighlightedEvent;
    var onRemoved: TabRemovedEvent;
    var onUpdated: TabUpdatedEvent;
    var onAttached: TabAttachedEvent;
    var onMoved: TabMovedEvent;
    var onDetached: TabDetachedEvent;
    var onCreated: TabCreatedEvent;
    var onActivated: TabActivatedEvent;
    var onReplaced: TabReplacedEvent;
    var onZoomChange: TabZoomChangedEvent;
}

/**
 * Use the chrome.topSites API to access the top sites that are displayed on the new tab page.
 */
declare module chrome.topSites {
    interface MostVisitedURL {
        url: string;
        title: string;
    }

    export function get(callback: (data: MostVisitedURL[]) => void): void;
}

/**
 * Use the chrome.tts API to play synthesized text-to-speech (TTS). See also the related
 * {@link http://developer.chrome.com/extensions/ttsEngine|ttsEngine} API, which allows an extension to
 * implement a speech engine.
 */
declare module chrome.tts {
    interface TtsEvent {
        charIndex?: number;
        errorMessage?: string;
        type: string;
    }

    interface TtsVoice {
        lang?: string;
        gender?: string;
        voiceName?: string;
        extensionsId?: string;
        eventTypes?: string[];
        remote?: boolean;
    }

    interface SpeakOptions {
        volume?: number;
        enqueue?: boolean;
        rate?: number;
        onEvent?: (event: TtsEvent) => void;
        pitch?: number;
        lang?: string;
        voiceName?: string;
        extensionId?: string;
        gender?: string;
        requiredEventTypes?: string[];
        desiredEventTypes?: string[];
    }

    export function isSpeaking(callback?: (speaking: boolean) => void): void;
    export function stop(): void;
    export function resume(): void;
    export function getVoices(callback?: (voices: TtsVoice[]) => void): void;
    export function speak(utterance: string, options?: SpeakOptions, callback?: Function): void;
}

/**
 * Use the chrome.ttsEngine API to implement a text-to-speech(TTS) engine using an extension. If your extension registers
 * using this API, it will receive events containing an utterance to be spoken and other parameters when any extension or
 * Chrome App uses the {@link https://developer.chrome.com/extensions/tts|tts} API to generate speech. Your extension can
 * then use any available web technology to synthesize and output the speech, and send events back to the calling function
 * to report the status.
 */
declare module chrome.ttsEngine {
    interface SpeakOptions {
        lang?: string;
        voiceName?: string;
        gender?: string;
        volume?: number;
        rate?: number;
        pitch?: number;
    }

    interface TtsEngineSpeakEvent extends events.Event {
        addListener(callback: (utterance: string, options: SpeakOptions, sendTtsEvent: (event: chrome.tts.TtsEvent) => void) => void): void;
    }

    interface TtsEngineStopEvent extends events.Event {
        addListener(callback: Function): void;
    }

    interface TtsEnginePauseEvent extends events.Event {
        addListener(callback: Function);
    }

    interface TtsEngineResumeEvent extends events.Event {
        addListener(callback: Function);
    }

    var onSpeak: TtsEngineSpeakEvent;
    var onStop: TtsEngineStopEvent;
    var onPause: TtsEnginePauseEvent;
    var onResume: TtsEngineResumeEvent;
}

/**
 * The chrome.types API contains type declarations for Chrome.
 */
declare module chrome.types {

    interface ChromeSettingClearDetails {
        scope?: string;
    }

    interface ChromeSettingSetDetails {
        scope?: string;
        value: any;
    }

    interface ChromeSettingGetDetails {
        incognito?: boolean;
    }

    interface ChromeSettingDetailsResult {
        levelOfControl: string;
        value: any;
        incognitoSpecific?: boolean;
    }

    interface ChromeSettingChangedEvent extends events.Event {
        addListener(callback: (details: ChromeSettingDetailsResult) => void): void;
    }

    interface ChromeSetting {
        set(details: ChromeSettingSetDetails, callback?: Function): void;
        get(details: ChromeSettingGetDetails, callback?: (details: ChromeSettingDetailsResult) => void): void;
        clear(details: ChromeSettingClearDetails, callback?: Function): void;
        onChange: ChromeSettingChangedEvent;
    }
}

/**
 * Use the chrome.webNavigation API to receive notifications about the status of navigation requests in-flight.
 */
declare module chrome.webNavigation {

    interface GetFrameDetails {
        processId: number;
        tabId: number;
        frameId: number;
    }

    interface GetFrameResultDetails {
        url: string;
        errorOccurred: boolean;
        parentFrameId: number;
    }

    interface GetAllFrameDetails {
        tabId: number;
    }

    interface GetAllFrameResultDetails extends GetFrameResultDetails {
        processId: number;
        frameId: number;
    }

    interface CallbackBasicDetails {
        tabId: number;
        timeStamp: number;
    }

    interface CallbackDetails extends CallbackBasicDetails {
        processId: number;
        url: string;
        frameId: number;
    }

    interface CallbackTransitionDetails extends CallbackDetails {
        transitionType: string;
        transitionQualifiers: string[];
    }

    interface ReferenceFragmentUpdatedDetails extends CallbackTransitionDetails {
    }

    interface CompletedDetails extends CallbackDetails {
    }

    interface HistoryStateUpdatedDetails extends CallbackTransitionDetails {
    }

    interface CreatedNavigationTargetDetails extends CallbackBasicDetails {
        url: string;
        sourceTabId: number;
        sourceProcessId: number;
        sourceFrameId: number;
    }

    interface TabReplacedDetails extends CallbackBasicDetails {
        replacedTabId: number;
    }

    interface BeforeNavigateDetails extends CallbackDetails {
        parentFrameId: number;
    }

    interface CommittedDetails extends CallbackTransitionDetails {
    }

    interface DomContentLoadedDetails extends CallbackDetails {
    }

    interface ErrorOccurredDetails extends CallbackDetails {
        error: string;
    }

    interface WebNavigationEventFilters {
        url: events.UrlFilter[];
    }

    interface WebNavigationReferenceFragmentUpdatedEvent extends chrome.events.Event {
        addListener(callback: (details: ReferenceFragmentUpdatedDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationCompletedEvent extends chrome.events.Event {
        addListener(callback: (details: CompletedDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationHistoryStateUpdatedEvent extends chrome.events.Event {
        addListener(callback: (details: HistoryStateUpdatedDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationCreatedNavigationTargetEvent extends chrome.events.Event {
        addListener(callback: (details: CreatedNavigationTargetDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationTabReplacedEvent extends chrome.events.Event {
        addListener(callback: (details: TabReplacedDetails) => void): void;
    }

    interface WebNavigationBeforeNavigateEvent extends chrome.events.Event {
        addListener(callback: (details: BeforeNavigateDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationCommittedEvent extends chrome.events.Event {
        addListener(callback: (details: CommittedDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationDomContentLoadedEvent extends chrome.events.Event {
        addListener(callback: (details: DomContentLoadedDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationErrorOccurredEvent extends chrome.events.Event {
        addListener(callback: (details: ErrorOccurredDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    export function getFrame(details: GetFrameDetails, callback: (details?: GetFrameResultDetails) => void): void;
    export function getAllFrames(details: GetAllFrameDetails, callback: (details?: GetAllFrameResultDetails[]) => void): void;

    var onReferenceFragmentUpdated: WebNavigationReferenceFragmentUpdatedEvent;
    var onCompleted: WebNavigationCompletedEvent;
    var onHistoryStateUpdated: WebNavigationHistoryStateUpdatedEvent;
    var onCreatedNavigationTarget: WebNavigationCreatedNavigationTargetEvent;
    var onTabReplaced: WebNavigationTabReplacedEvent;
    var onBeforeNavigate: WebNavigationBeforeNavigateEvent;
    var onCommitted: WebNavigationCommittedEvent;
    var onDOMContentLoaded: WebNavigationDomContentLoadedEvent;
    var onErrorOccurred: WebNavigationErrorOccurredEvent;
}

/**
 * Use the chrome.webRequest API to observe and analyze traffic and to intercept, block, or modify requests in-flight.
 */
declare module chrome.webRequest {

    interface AuthCredentials {
        username: string;
        password: string;
    }

    interface HttpHeader {
        name: string;
        value?: string;
        binaryValue?: ArrayBuffer;
    }

    interface HttpHeaders extends Array<HttpHeader> {
    }

    interface BlockingResponse {
        cancel?: boolean;
        redirectUrl?: string;
        responseHeaders?: HttpHeaders;
        authCredentials?: AuthCredentials;
        requestHeaders?: HttpHeaders;
    }

    interface RequestFilter {
        tabId?: number;
        types?: string[];
        urls: string[];
        windowId?: number;
    }

    interface UploadData {
        bytes?: ArrayBuffer;
        file?: string;
    }

    interface CallbackDetails {
        requestId: string;
        url: string;
        method: string;
        tabId: number;
        frameId: number;
        parentFrameId: number;
        timeStamp: number;
        type: string;
    }

    interface OnCompletedDetails extends CallbackDetails {
        ip?: string;
        statusLine: string;
        responseHeaders?: HttpHeaders;
        fromCache: boolean;
        statusCode: number;
    }

    interface OnHeadersReceivedDetails extends CallbackDetails {
        statusLine: string;
        responseHeaders?: HttpHeaders;
    }

    interface OnBeforeRedirectDetails extends CallbackDetails {
        ip?: string;
        statusLine: string;
        responseHeaders?: HttpHeaders;
        fromCache: boolean;
        redirectUrl: string;
        statusCode: number;
    }

    interface Challenger {
        host: string;
        port: number;
    }

    interface OnAuthRequiredDetails extends CallbackDetails {
        statusLine: string;
        challenger: Challenger;
        responseHeaders?: HttpHeaders;
        isProxy: boolean;
        realm?: string;
        scheme: string;
    }

    interface OnBeforeSendHeadersDetails extends CallbackDetails {
        requestHeaders?: HttpHeaders;
    }

    interface OnErrorOccurredDetails extends CallbackDetails {
        ip?: string;
        fromCache: boolean;
        error: string;
    }

    interface OnResponseStartedDetails extends CallbackDetails {
        ip?: string;
        statusLine: string;
        responseHeaders?: HttpHeaders;
        fromCache: boolean;
        statusCode: number;
    }

    interface OnSendHeadersDetails extends CallbackDetails {
        requestHeaders?: HttpHeaders;
    }

    interface FormData {
        [key: string]: string[];
    }

    interface RequestBody {
        raw?: UploadData[];
        error?: string;
        formData?: FormData;
    }

    interface OnBeforeRequestDetails extends CallbackDetails {
        requestBody?: RequestBody;
    }

    interface WebRequestCompletedEvent extends events.Event {
        addListener(callback: (details: OnCompletedDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnCompletedDetails) => BlockingResponse): void;
    }

    interface WebRequestHeadersReceivedEvent extends events.Event {
        addListener(callback: (details: OnHeadersReceivedDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnHeadersReceivedDetails) => BlockingResponse): void;
    }

    interface WebRequestBeforeRedirectEvent extends events.Event {
        addListener(callback: (details: OnBeforeRedirectDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnBeforeRedirectDetails) => BlockingResponse): void;
    }

    interface WebRequestAuthRequiredEvent extends events.Event {
        addListener(callback: (details: OnAuthRequiredDetails, callback?: (response: BlockingResponse) => void) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnAuthRequiredDetails, callback?: (response: BlockingResponse) => void) => void): void;
    }

    interface WebRequestBeforeSendHeadersEvent extends events.Event {
        addListener(callback: (details: OnBeforeSendHeadersDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnBeforeSendHeadersDetails) => BlockingResponse): void;
    }

    interface WebRequestErrorOccurredEvent extends events.Event {
        addListener(callback: (details: OnErrorOccurredDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnErrorOccurredDetails) => BlockingResponse): void;
    }

    interface WebRequestResponseStartedEvent extends events.Event {
        addListener(callback: (details: OnResponseStartedDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnResponseStartedDetails) => BlockingResponse): void;
    }

    interface WebRequestSendHeadersEvent extends events.Event {
        addListener(callback: (details: OnSendHeadersDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnSendHeadersDetails) => BlockingResponse): void;
    }

    interface WebRequestBeforeRequestEvent extends events.Event {
        addListener(callback: (details: OnBeforeRequestDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnBeforeRequestDetails) => BlockingResponse): void;
    }

    export const MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

    export function handlerBehaviorChanged(callback?: Function): void;

    var onCompleted: WebRequestCompletedEvent;
    var onHeadersReceived: WebRequestHeadersReceivedEvent;
    var onBeforeRedirect: WebRequestBeforeRedirectEvent;
    var onAuthRequired: WebRequestAuthRequiredEvent;
    var onBeforeSendHeaders: WebRequestBeforeSendHeadersEvent;
    var onErrorOccurred: WebRequestErrorOccurredEvent;
    var onResponseStarted: WebRequestResponseStartedEvent;
    var onSendHeaders: WebRequestSendHeadersEvent;
    var onBeforeRequest: WebRequestBeforeRequestEvent;
}

/**
 * Use the chrome.webstore API to initiate app and extension installations "inline" from your site.
 */
declare module chrome.webstore {

    interface InstallStateChangedEvent extends events.Event {
        addListener(callback: (stage: string) => void): void;
    }

    interface DownloadProgressEvent extends events.Event {
        addListener(callback: (percentDownloaded: number) => void): void;
    }

    export function install(url?: string, successCallback?: Function, failureCallback?: (error: string, errorCode?: string) => void): void;

    var onInstallStageChanged: InstallStateChangedEvent;
    var onDownloadProgress: DownloadProgressEvent;
}

/**
 * Use the chrome.windows API to interact with browser windows. You can use this API to create, modify,
 * and rearrange windows in the browser.
 */
declare module chrome.windows {

    interface Window {
        tabs?: tabs.Tab[];
        top?: number;
        height?: number;
        width?: number;
        state?: string;
        focused: boolean;
        alwaysOnTop: boolean;
        incognito: boolean;
        type?: string;
        id?: number;
        left?: number;
        sessionId?: string;
    }

    interface GetInfo {
        populate?: boolean;
    }

    interface CreateData {
        tabId?: number;
        url?: string;
        top?: number;
        height?: number;
        width?: number;
        focused?: boolean;
        incognito?: boolean;
        type?: string;
        left?: number;
        state?: string;
    }

    interface UpdateInfo {
        top?: number;
        drawAttention?: boolean;
        height?: number;
        width?: number;
        state?: string;
        focused?: boolean;
        left?: number;
    }

    interface WindowRemovedEvent extends events.Event {
        addListener(callback: (windowId: number) => void): void;
    }

    interface WindowCreatedEvent extends events.Event {
        addListener(callback: (window: Window) => void): void;
    }

    interface WindowFocusChangedEvent extends events.Event {
        addListener(callback: (windowId: number) => void): void;
    }

    export const WINDOW_ID_CURRENT: number;
    export const WINDOW_ID_NONE: number;

    export function get(windowId: number, callback: (window: Window) => void): void;
    export function get(windowId: number, getInfo: GetInfo, callback: (window: Window) => void): void;
    export function getCurrent(callback: (window: Window) => void): void;
    export function getCurrent(getInfo: GetInfo, callback: (window: Window) => void): void;
    export function create(createData?: CreateData, callback?: (window: Window) => void): void;
    export function getAll(callback: (windows: Window[]) => void): void;
    export function getAll(getInfo: GetInfo, callback: (windows: Window[]) => void): void;
    export function update(windowId: number, updateInfo: UpdateInfo, callback?: (window: Window) => void): void;
    export function remove(windowId: number, callback?: Function): void;
    export function getLastFocused(callback: (window: Window) => void): void;
    export function getLastFocused(getInfo: GetInfo, callback: (window: Window) => void): void;

    var onRemoved: WindowRemovedEvent;
    var onCreated: WindowCreatedEvent;
    var onFocusChanged: WindowFocusChangedEvent;
}
