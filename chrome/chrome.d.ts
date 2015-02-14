// Type definitions for Chrome extension development
// Project: http://developer.chrome.com/extensions/
// Definitions by: Matthew Kimber <https://github.com/matthewkimber>, otiai10 <https://github.com/otiai10>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../webrtc/MediaStream.d.ts'/>

////////////////////
// Alarms
////////////////////
declare module chrome.alarms {
    interface AlarmCreateInfo {
        delayInMinutes?: number;
        periodInMinutes?: number;
        when?: number;
    }

    interface Alarm {
        periodInMinutes?: number;
        scheduledTime: number;
        name: string;
    }

    interface AlarmEvent extends chrome.events.Event {
        addListener(callback: (alarm: Alarm) => void): void;
    }

    export function create(alarmInfo: AlarmCreateInfo): void;
    export function create(name: string, alarmInfo: AlarmCreateInfo): void;
    export function getAll(callback: (alarms: Alarm[]) => void): void;
    export function clearAll(): void;
    export function clear(name?: string): void;
    export function get(callback: (alarm: Alarm) => void): void;
    export function get(name: string, callback: (alarm: Alarm) => void): void;

    var onAlarm: AlarmEvent;
}

////////////////////
// Bookmarks
////////////////////
declare module chrome.bookmarks {
    interface BookmarkTreeNode {
        index?: number;
        dateAdded?: number;
        title: string;
        url?: string;
        dateGroupModified?: number;
        id: string;
        parentId?: string;
        children?: BookmarkTreeNode[];
    }

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

    var MAX_WRITE_OPERATIONS_PER_HOUR: number;
    var MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;

    export function search(query: string, callback: (results: BookmarkTreeNode[]) => void): void;
    export function getTree(callback: (results: BookmarkTreeNode[]) => void): void;
    export function getRecent(numberOfItems: number, callback: (results: BookmarkTreeNode[]) => void): void;
    export function get(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
    export function get(idList: string[], callback: (results: BookmarkTreeNode[]) => void): void;
    export function create(bookmark: Object, callback?: (result: BookmarkTreeNode) => void): void;
    export function move(id: string, destination: Object, callback?: (result: BookmarkTreeNode) => void): void;
    export function update(id: string, changes: Object, callback?: (result: BookmarkTreeNode) => void): void;
    export function remove(id: string, callback?: Function): void;
    export function getChildren(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
    export function getSubTree(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
    export function removeTree(id: string, callback?: Function): void;

    var onRemoved: BookmarkRemovedEvent;
    var onImportEnded: BookmarkImportEndedEvent;
    var onImportBegan: BookmarkImportBeganEvent;
    var onChanged: BookmarkChangedEvent;
    var onCreated: BookmarkCreatedEvent;
    var onChildrenReordered: BookmarkChildrenReordered;
}

////////////////////
// Browser Action
////////////////////
declare module chrome.browserAction {
    interface BadgeBackgroundColorDetails {
        color: any;
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
        path?: any;
        tabId?: number;
        imageData?: ImageData;
    }

    interface PopupDetails {
        tabId?: number;
        popup: string;
    }

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
    export function getBadgeBackgroundColor(details: TabDetails, callback: (result: number[]) => void): void;
    export function getPopup(details: TabDetails, callback: (result: string) => void): void;
    export function setIcon(details: TabIconDetails, callback?: Function): void;

    var onClicked: BrowserClickedEvent;
}

////////////////////
// Browsing Data
////////////////////
declare module chrome.browsingData {
    interface OriginTypes {
        protectedWeb?: boolean;
        extension?: boolean;
        unprotectedWeb?: boolean;
    }

    interface RemovalOptions {
        originTypes?: OriginTypes;
        since?: number;
    }

    interface DataToRemove {
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
    }

    export function removePluginData(options: RemovalOptions, callback?: Function): void;
    export function removeFormData(options: RemovalOptions, callback?: Function): void;
    export function removeFileSystems(options: RemovalOptions, callback?: Function): void;
    export function remove(options: RemovalOptions, dataToRemove: DataToRemove, callback?: Function): void;
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

////////////////////
// Commands
////////////////////
declare module chrome.commands {
    interface CommandEvent extends chrome.events.Event {
        addListener(callback: (command: string) => void): void;
    }

    var onCommand: CommandEvent;
}

////////////////////
// Content Settings
////////////////////
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

    var cookies: ContentSetting;
    var popups: ContentSetting;
    var javascript: ContentSetting;
    var notifications: ContentSetting;
    var plugins: ContentSetting;
    var images: ContentSetting;
}

////////////////////
// Context Menus
////////////////////
declare module chrome.contextMenus {
    interface OnClickData {
        selectionText?: string;
        checked?: boolean;
        menuItemId: any;
        frameUrl?: string;
        editable: boolean;
        mediaType?: string;
        wasChecked?: boolean;
        pageUrl: string;
        linkUrl?: string;
        parentMenuItemId?: any;
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
        parentId?: any;
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
        onclick?: Function;
        parentId?: any;
        type?: string;
    }

    interface MenuClickedEvent extends chrome.events.Event {
        addListener(callback: (info: OnClickData, tab?: chrome.tabs.Tab) => void): void;
    }

    export function removeAll(callback?: Function): void;
    export function create(createProperties: CreateProperties, callback?: Function): void;
    export function update(id: any, updateProperties: UpdateProperties, callback?: Function): void;
    export function remove(menuItemId: any, callback?: Function): void;

    var onClicked: MenuClickedEvent;
}

////////////////////
// Cookies
////////////////////
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
    export function remove(details: Details, callback?: (details: Details) => void): void;
    export function get(details: Details, callback: (cookie?: Cookie) => void): void;

    var onChanged: CookieChangedEvent;
}

////////////////////
// Debugger
////////////////////
declare module "chrome.debugger" {
    interface Debuggee {
        tabId: number;
    }

    interface DebuggerDetachedEvent extends chrome.events.Event {
        addListener(callback: (source: Debuggee) => void): void;
    }

    interface DebuggerEventEvent extends chrome.events.Event {
        addListener(callback: (source: Debuggee, method: string, params?: Object) => void): void;
    }

    export function attach(target: Debuggee, requiredVersion: string, callback?: Function): void;
    export function detach(target: Debuggee, callback?: Function): void;
    export function sendCommand(target: Debuggee, method: string, commandParams?: Object, callback?: (result: Object) => void): void;

    var onDetach: DebuggerDetachedEvent;
    var onEvent: DebuggerEventEvent;
}

////////////////////
// Declarative Web Request
////////////////////
declare module chrome.declarativeWebRequest {
    interface HeaderFilter {
        nameEquals?: string;
        valueContains?: any;
        nameSuffix?: string;
        valueSuffix?: string;
        valuePrefix?: string;
        nameContains?: any;
        valueEquals?: string;
        namePrefix?: string;
    }

    interface AddResponseHeader {
        name: string;
        value: string;
    }

    interface RemoveResponseCookie {
        filter: ResponseCookie;
    }

    interface RemoveResponseHeader {
        name: string;
        value?: string;
    }

    interface RequestMatcher {
        contentType?: string[];
        url?: chrome.events.UrlFilter;
        excludeContentType?: string[];
        excludeResponseHeader?: HeaderFilter[];
        resourceType?: string;
        responseHeaders?: HeaderFilter[];
    }

    interface IgnoreRules {
        lowerPriorityThan: number;
    }

    interface RedirectToEmptyDocument { }

    interface RedirectRequest {
        redirectUrl: string;
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

    interface AddResponseCookie {
        cookie: ResponseCookie;
    }

    interface EditResponseCookie {
        filter: ResponseCookie;
        modification: ResponseCookie;
    }

    interface CancelRequest { }

    interface RemoveRequestHeader {
        name: string;
    }

    interface EditRequestCookie {
        filter: RequestCookie;
        modification: RequestCookie;
    }

    interface SetRequestHeader {
        name: string;
        value: string;
    }

    interface RequestCookie {
        name?: string;
        value?: string;
    }

    interface RedirectByRegEx {
        to: string;
        from: string;
    }

    interface RedirectToTransparentImage { }

    interface AddRequestCookie {
        cookie: RequestCookie;
    }

    interface RemoveRequestCookie {
        filter: RequestCookie;
    }

    interface RequestedEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    var onRequest: RequestedEvent;
}

////////////////////
// DesktopCapture
////////////////////
declare module chrome.desktopCapture {
    export function chooseDesktopMedia(sources: string[], targetTab?: chrome.tabs.Tab, callback?: (streamId: string) => void): void;
    export function cancelChooseDesktopMedia(desktopMediaRequestId: number): void;
}

////////////////////
// Dev Tools - Inspected Window
////////////////////
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

    interface ResourceAddedEvent extends chrome.events.Event {
        addListener(callback: (resource: Resource) => void): void;
    }

    interface ResourceContentCommittedEvent extends chrome.events.Event {
        addListener(callback: (resource: Resource, content: string) => void): void;
    }

    var tabId: number;

    export function reload(reloadOptions: ReloadOptions): void;
    export function eval(expression: string, callback?: (result: Object, isException: boolean) => void): void;
    export function getResources(callback: (resources: Resource[]) => void): void;

    var onResourceAdded: ResourceAddedEvent;
    var onResourceContentCommitted: ResourceContentCommittedEvent;
}

////////////////////
// Dev Tools - Network
////////////////////
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

////////////////////
// Dev Tools - Panels
////////////////////
declare module chrome.devtools.panels {
    interface PanelShownEvent extends chrome.events.Event {
        addListener(callback: (window: chrome.windows.Window) => void): void;
    }

    interface PanelHiddenEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface PanelSearchEvent extends chrome.events.Event {
        addListener(callback: (action: string, queryString?: string) => void): void;
    }

    interface ExtensionPanel {
        createStatusButton(iconPath: string, tooltipText: string, disabled: boolean): Button;
        onShown: PanelShownEvent;
        onHidden: PanelHiddenEvent;
        onSearch: PanelSearchEvent;
    }

    interface ButtonClickedEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface Button {
        update(iconPath?: string, tooltipText?: string, disabled?: boolean): void;
        onClicked: ButtonClickedEvent;
    }

    interface SelectionChangedEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface ElementsPanel {
        createSidebarPane(title: string, callback?: (result: ExtensionSidebarPane) => void): void;
        onSelectionChanged: SelectionChangedEvent;
    }

    interface ExtensionSidebarPaneShownEvent extends chrome.events.Event {
        addListener(callback: (window: chrome.windows.Window) => void): void;
    }

    interface ExtensionSidebarPaneHiddenEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface ExtensionSidebarPane {
        setHeight(height: string): void;
        setExpression(expression: string, rootTitle?: string, callback?: Function): void;
        setObject(jsonObject: string, rootTitle?: string, callback?: Function): void;
        setPage(path: string): void;
        onShown: ExtensionSidebarPaneShownEvent;
        onHidden: ExtensionSidebarPaneHiddenEvent;
    }

    var elements: ElementsPanel;

    export function create(title: string, iconPath: string, pagePath: string, callback?: (panel: ExtensionPanel) => void): void;
    export function setOpenResourceHandler(callback: (resource: chrome.devtools.inspectedWindow.Resource) => void): void;
}

////////////////////
// Dev Tools - Downloads
////////////////////
declare module chrome.downloads {
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
    }

    interface DownloadDelta {
        danger?: DownloadStringDiff;
        url?: DownloadStringDiff;
        totalBytes?: DownloadStringDiff;
        dangerAccepted?: DownloadBooleanDiff;
        filename?: DownloadStringDiff;
        paused?: DownloadBooleanDiff;
        state?: DownloadStringDiff;
        mime?: DownloadStringDiff;
        fileSize?: DownloadLongDiff;
        startTime?: DownloadLongDiff;
        error?: DownloadLongDiff;
        endTime?: DownloadLongDiff;
        id: number;
    }

    interface DownloadBooleanDiff {
        current?: boolean;
        previous?: boolean;
    }

    interface DownloadLongDiff {
        current?: number;
        previous?: number;
    }

    interface DownloadStringDiff {
        current?: string;
        previous?: string;
    }

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
        startTime: number;
        error?: number;
        endTime?: number;
        id: number;
        incognito: boolean;
    }

    interface GetFileIconOptions {
        size?: number;
    }

    interface DownloadQuery {
        orderBy?: string;
        urlRegex?: string;
        endedBefore?: number;
        totalBytesGreater?: number;
        danger?: string;
        totalBytes?: number;
        paused?: boolean;
        filenameRegex?: string;
        query?: string;
        totalBytesLess?: number;
        id?: number;
        bytesReceived?: number;
        endedAfter?: number;
        filename?: string;
        state?: string;
        startedAfter?: number;
        dangerAccepted?: boolean;
        mime?: string;
        fileSize?: number;
        startTime?: number;
        url?: string;
        startedBefore?: number;
        limit?: number;
        error?: number;
        endTime?: number;
    }

    interface DownloadChangedEvent extends chrome.events.Event {
        addListener(callback: (downloadDelta: DownloadDelta) => void): void;
    }

    interface DownloadCreatedEvent extends chrome.events.Event {
        addListener(callback: (downloadItem: DownloadItem) => void): void;
    }

    interface DownloadErasedEvent extends chrome.events.Event {
        addListener(callback: (downloadId: number) => void): void;
    }

    export function search(query: DownloadQuery, callback: (results: DownloadItem[]) => void): void;
    export function pause(downloadId: number, callback?: Function): void;
    export function getFileIcon(downloadId: number, callback: (iconURL: string) => void): void;
    export function getFileIcon(downloadId: number, options: GetFileIconOptions, callback: (iconURL: string) => void): void;
    export function resume(downloadId: number, callback?: Function): void;
    export function cancel(downloadId: number, callback?: Function): void;
    export function download(options: DownloadOptions, callback?: (downloadId: number) => void): void;
    export function open(downloadId: number): void;
    export function show(downloadId: number): void;
    export function showDefaultFolder(): void;
    export function erase(query: DownloadQuery, callback: (results: DownloadItem[]) => void): void;
    export function removeFile(downloadId: number, callback: () => void): void;
    export function acceptDanger(downloadId: number, callback: () => void): void;
    export function drag(downloadId: number): void;
    export function setShelfEnabled(enabled: boolean): void;

    var onChanged: DownloadChangedEvent;
    var onCreated: DownloadCreatedEvent;
    var onErased: DownloadErasedEvent;
}

////////////////////
// Events
////////////////////
declare module chrome.events {
    interface UrlFilter {
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
        hasListener(callback: Function): void;
        removeRules(ruleIdentifiers?: string[], callback?: Function): void;
        addRules(rules: Rule[], callback?: (rules: Rule[]) => void): void;
        removeListener(callback: Function): void;
        hasListeners(): boolean;
    }

    interface Rule {
        priority?: number;
        conditions: any[];
        id?: string;
        actions: any[];
    }
}

////////////////////
// Extension
////////////////////
declare module chrome.extension {
    interface FetchProperties {
        windowId?: number;
        type?: string;
    }

    interface LastError {
        message?: string;
    }

    var inIncognitoContext: boolean;
    var lastError: LastError;

    export function getBackgroundPage(): Window;
    export function getURL(path: string): string;
    export function setUpdateUrlData(data: string): void;
    export function getViews(fetchProperties?: FetchProperties): Window[];
    export function isAllowedFileSchemeAccess(callback: (isAllowedAccess: boolean) => void): void;
    export function isAllowedIncognitoAccess(callback: (isAllowedAccess: boolean) => void): void;
}

////////////////////
// File Browser Handler
////////////////////
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
        selectFile(selectionParams: SelectionParams, callback: (result: SelectionResult) => void): void;
    }

    interface FileBrowserHandlerExecuteEvent extends chrome.events.Event {
        addListener(callback: (id: string, details: FileHandlerExecuteEventDetails) => void): void;
    }

    var onExecute: FileBrowserHandlerExecuteEvent;
}

////////////////////
// Font Settings
////////////////////
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

    interface DefaultFixedFontSizeChangedEvent extends chrome.events.Event {
        addListener(callback: (details: FontSizeDetails) => void): void;
    }

    interface DefaultFontSizeChangedEvent extends chrome.events.Event {
        addListener(callback: (details: FontSizeDetails) => void): void;
    }

    interface MinimumFontSizeChangedEvent extends chrome.events.Event {
        addListener(callback: (details: FontSizeDetails) => void): void;
    }

    interface FontChangedEvent extends chrome.events.Event {
        addListener(callback: (details: FullFontDetails) => void): void;
    }

    export function setDefaultFontSize(details: DefaultFontSizeDetails, callback?: Function): void;
    export function getFont(details: FontDetails, callback?: (details: FontDetailsResult) => void): void;
    export function getDefaultFontSize(details?: FontSizeDetails, callback?: (options: FontSizeDetails) => void): void;
    export function getMinimumFontSize(details?: FontSizeDetails, callback?: (options: FontSizeDetails) => void): void;
    export function setMinimumFontSize(details: SetFontSizeDetails, callback?: Function): void;
    export function getDefaultFixedFontSize(details?: Object, callback?: (details: FontSizeDetails) => void): void;
    export function clearDefaultFontSize(details?: Object, callback?: Function): void;
    export function setDefaultFixedFontSize(details: SetFontSizeDetails, callback?: Function): void;
    export function clearFont(details: FontDetails, callback?: Function): void;
    export function setFont(details: SetFontDetails, callback?: Function): void;
    export function clearMinimumFontSize(details?: Object, callback?: Function): void;
    export function getFontList(callback: (results: FontName[]) => void): void;
    export function clearDefaultFixedFontSize(details: Object, callback?: Function): void;

    var onDefaultFixedFontSizeChanged: DefaultFixedFontSizeChangedEvent;
    var onDefaultFontSizeChanged: DefaultFontSizeChangedEvent;
    var onMinimumFontSizeChanged: MinimumFontSizeChangedEvent;
    var onFontChanged: FontChangedEvent;
}

////////////////////
// History
////////////////////
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

    interface HistoryVisitedEvent extends chrome.events.Event {
        addListener(callback: (result: HistoryItem) => void): void;
    }

    interface HistoryVisitRemovedEvent extends chrome.events.Event {
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


////////////////////
// Identity
////////////////////
declare module chrome.identity {
    var getAuthToken: (options: any, cb: (token: {}) => void) => void;
}


////////////////////
// Internationalization
////////////////////
declare module chrome.i18n {
    export function getMessage(messageName: string, substitutions?: any): string;
    export function getAcceptLanguages(callback: (languages: string[]) => void): void;
    export function getUILanguage(): string;
}

////////////////////
// Idle
////////////////////
declare module chrome.idle {
    interface IdleStateChangedEvent extends chrome.events.Event {
        addListener(callback: (newState: string) => void): void;
    }

    export function queryState(thresholdSeconds: number, callback: (newState: string) => void): void;

    var onStateChanged: IdleStateChangedEvent;
}

////////////////////
// Input - IME
////////////////////
declare module chrome.input.ime {
    interface KeyboardEvent {
        shiftKey?: boolean;
        altKey?: boolean;
        requestId: string;
        key: string;
        ctrlKey?: boolean;
        type: string;
    }

    interface InputContext {
        contextID: number;
        type: string;
    }

    interface ImeParameters {
        items: Object[];
        engineID: string;
    }

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
        segments: Object[];
        cursor: number;
        selectionStart?: number;
        selectionEnd?: number;
    }

    interface MenuItemParameters {
        items: Object[];
        engineId: string;
    }

    interface CandidateWindowPropertiesParameters {
        cursorVisible?: boolean;
        vertical?: boolean;
        pageSize?: number;
        auxiliaryTextVisible?: boolean;
        auxiliaryText?: string;
        visible?: boolean;
    }

    interface ClearCompositionParameters {
        contextID: number;
    }

    interface CursorPositionParameters {
        candidateID: number;
        contextID: number;
    }

    interface BlurEvent extends chrome.events.Event {
        addListener(callback: (contextID: number) => void): void;
    }

    interface CandidateClickedEvent extends chrome.events.Event {
        addListener(callback: (engineID: string, candidateID: number, button: string) => void): void;
    }

    interface KeyEventEvent extends chrome.events.Event {
        addListener(callback: (engineID: string, keyData: KeyboardEvent) => void): void;
    }

    interface DeactivatedEvent extends chrome.events.Event {
        addListener(callback: (engineID: string) => void): void;
    }

    interface InputContextUpdateEvent extends chrome.events.Event {
        addListener(callback: (context: InputContext) => void): void;
    }

    interface ActivateEvent extends chrome.events.Event {
        addListener(callback: (engineID: string) => void): void;
    }

    interface FocusEvent extends chrome.events.Event {
        addListener(callback: (context: InputContext) => void): void;
    }

    interface MenuItemActivatedEvent extends chrome.events.Event {
        addListener(callback: (engineID: string, name: string) => void): void;
    }

    export function setMenuItems(parameters: ImeParameters, callback?: Function): void;
    export function commitText(parameters: CommitTextParameters, callback?: (success: boolean) => void): void;
    export function setCandidates(parameters: CandidatesParameters, callback?: (success: boolean) => void): void;
    export function setComposition(parameters: CompositionParameters, callback?: (success: boolean) => void): void;
    export function updateMenuItems(parameters: MenuItemParameters, callback?: Function): void;
    export function setCandidateWindowProperties(parameters: CandidateWindowPropertiesParameters, callback?: (success: boolean) => void): void;
    export function clearComposition(parameters: ClearCompositionParameters, callback?: (success: boolean) => void): void;
    export function setCursorPosition(parameters: CursorPositionParameters, callback?: (success: boolean) => void): void;

    var onBlur: BlurEvent;
    var onCandidateClicked: CandidateClickedEvent;
    var onKeyEvent: KeyEventEvent;
    var onDeactivated: DeactivatedEvent;
    var onInputContextUpdate: InputContextUpdateEvent;
    var onActivate: ActivateEvent;
    var onFocus: FocusEvent;
    var onMenuItemActivated: MenuItemActivatedEvent;
}

////////////////////
// Management
////////////////////
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
    }

    interface IconInfo {
        url: string;
        size: number;
    }

    interface UninstallOptions {
        showConfirmDialog?: boolean;
    }

    interface ManagementDisabledEvent extends chrome.events.Event {
        addListener(callback: (info: ExtensionInfo) => void): void;
    }

    interface ManagementUninstalledEvent extends chrome.events.Event {
        addListener(callback: (id: string) => void): void;
    }

    interface ManagementInstalledEvent extends chrome.events.Event {
        addListener(callback: (info: ExtensionInfo) => void): void;
    }

    interface ManagementEnabledEvent extends chrome.events.Event {
        addListener(callback: (info: ExtensionInfo) => void): void;
    }

    export function setEnabled(id: string, enabled: boolean, callback?: Function): void;
    export function getPermissionWarningsById(id: string, callback?: (permissionWarnings: string[]) => void): void;
    export function get(id: string, callback?: (result: ExtensionInfo) => void): void;
    export function getAll(callback?: (result: ExtensionInfo[]) => void): void;
    export function getPermissionWarningsByManifest(manifestStr: string, callback?: (permissionwarnings: string[]) => void): void;
    export function launchApp(id: string, callback?: Function): void;
    export function uninstall(id: string, options: UninstallOptions, callback?: Function): void;

    var onDisabled: ManagementDisabledEvent;
    var onUninstalled: ManagementUninstalledEvent;
    var onInstalled: ManagementInstalledEvent;
    var onEnabled: ManagementEnabledEvent;
}

////////////////////
// Notifications
// https://developer.chrome.com/extensions/notifications
////////////////////
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
        buttons?: Array<ButtonOptions>;
        items?: Array<ItemOptions>;
        progress?: number;
        isClickable?: boolean;
    }

    interface OnClosed {
        addListener(callback: (notificationId: string, byUser: boolean) => void): void;
    }

    interface OnClicked {
        addListener(callback: (notificationId: string) => void): void;
    }

    interface OnButtonClicked {
        addListener(callback: (notificationId: string, buttonIndex: number) => void): void;
    }

    interface OnPermissionLevelChanged {
        addListener(callback: (level: string) => void): void;
    }

    interface OnShowSettings {
        addListener(callback: Function): void;
    }

    export var onClosed: OnClosed;
    export var onClicked: OnClicked;
    export var onButtonClicked: OnButtonClicked;
    export var onPermissionLevelChanged: OnPermissionLevelChanged;
    export var onShowSettings: OnShowSettings;

    export function create(notificationId: string, options: NotificationOptions, callback: (notificationId: string) => void): void;
    export function update(notificationId: string, options: NotificationOptions, callback: (wasUpdated: boolean) => void): void;
    export function clear(notificationId: string, callback: (wasCleared: boolean) => void): void;
    export function getAll(callback: (notifications: any) => void): void;
    export function getPermissionLevel(callback: (level: string) => void): void;
}

////////////////////
// Omnibox
////////////////////
declare module chrome.omnibox {
    interface SuggestResult {
        content: string;
        description: string;
    }

    interface Suggestion {
        description: string;
    }

    interface OmniboxInputEnteredEvent extends chrome.events.Event {
        addListener(callback: (text: string) => void): void;
    }

    interface OmniboxInputChangedEvent extends chrome.events.Event {
        addListener(callback: (text: string, suggest: (suggestResults: SuggestResult[]) => void) => void): void;
    }

    interface OmniboxInputStartedEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface OmniboxInputCancelledEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    export function setDefaultSuggestion(suggestion: Suggestion): void;

    var onInputEntered: OmniboxInputEnteredEvent;
    var onInputChanged: OmniboxInputChangedEvent;
    var onInputStarted: OmniboxInputStartedEvent;
    var onInputCancelled: OmniboxInputCancelledEvent;
}

////////////////////
// Page Action
////////////////////
declare module chrome.pageAction {
    interface PageActionClickedEvent extends chrome.events.Event {
        addListener(callback: (tab: chrome.tabs.Tab) => void): void;
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
        iconIndex?: number;
        imageData?: ImageData;
        path?: any;
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

////////////////////
// Page Capture
////////////////////
declare module chrome.pageCapture {
    interface SaveDetails {
        tabId: number;
    }

    export function saveAsMHTML(details: SaveDetails, callback: (mhtmlData: any) => void): void;
}

////////////////////
// Permissions
////////////////////
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

////////////////////
// Privacy
////////////////////
declare module chrome.privacy {
    interface Services {
        spellingServiceEnabled: chrome.types.ChromeSetting;
        searchSuggestEnabled: chrome.types.ChromeSetting;
        instantEnabled: chrome.types.ChromeSetting;
        alternateErrorPagesEnabled: chrome.types.ChromeSetting;
        safeBrowsingEnabled: chrome.types.ChromeSetting;
        autofillEnabled: chrome.types.ChromeSetting;
        translationServiceEnabled: chrome.types.ChromeSetting;
    }

    interface Network {
        networkPredictionEnabled: chrome.types.ChromeSetting;
    }

    interface Websites {
        thirdPartyCookiesAllowed: chrome.types.ChromeSetting;
        referrersEnabled: chrome.types.ChromeSetting;
        hyperlinkAuditingEnabled: chrome.types.ChromeSetting;
        protectedContentEnabled: chrome.types.ChromeSetting;
    }

    var services: Services;
    var network: Network;
    var websites: Websites;
}

////////////////////
// Proxy
////////////////////
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

    interface ProxyErrorEvent extends chrome.events.Event {
        addListener(callback: (details: ErrorDetails) => void): void;
    }

    var settings: chrome.types.ChromeSetting;
    var onProxyError: ProxyErrorEvent;
}

////////////////////
// Runtime
////////////////////
declare module chrome.runtime {
    var lastError: LastError;
    var id: string;

    interface LastError {
        message?: string;
    }

    interface ConnectInfo {
        name?: string;
    }

    interface InstalledDetails {
        reason: string;
        previousVersion?: string;
    }

    interface MessageOptions {
        includeTlsChannelId?: boolean;
    }

    interface MessageSender {
        id: string;
        tab?: chrome.tabs.Tab;
    }

    interface PlatformInfo {
        os: string;
        arch: string;
        nacl_arch: string;
    }

    interface Port {
        postMessage: Function;
        sender?: MessageSender;
        onDisconnect: chrome.events.Event;
        onMessage: chrome.events.Event;
        name: string;
    }

    interface UpdateAvailableDetails {
        version: string;
    }

    interface UpdateCheckDetails {
        version: string;
    }

    interface ExtensionMessageEvent extends chrome.events.Event {
        addListener(callback: (message: any, sender: MessageSender, sendResponse: Function) => void): void;
    }

    interface ExtensionMessageExternalEvent extends chrome.events.Event {
        addListener(callback: (message: any, sender: MessageSender, sendResponse: Function) => void): void;
    }

    interface ExtensionConnectEvent extends chrome.events.Event {
        addListener(callback: (port: Port) => void): void;
    }

    interface ExtensionConnectExternalEvent extends chrome.events.Event {
        addListener(callback: (port: Port) => void): void;
    }

    interface RuntimeSuspendEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface RuntimeStartupEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface RuntimeInstalledEvent extends chrome.events.Event {
        addListener(callback: (details: InstalledDetails) => void): void;
    }

    interface RuntimeSuspendCanceledEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }
    interface RuntimeMessageEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface RuntimeRestartRequiredEvent extends chrome.events.Event {
        addListener(callback: (reason: string) => void): void;
    }

    interface RuntimeUpdateAvailableEvent extends chrome.events.Event {
        addListener(callback: (details: UpdateAvailableDetails) => void): void;
    }

    export function connect(connectInfo?: ConnectInfo): Port;
    export function connect(extensionId: string, connectInfo?: ConnectInfo): Port;
    export function connectNative(application: string): Port;
    export function getBackgroundPage(callback: (backgroundPage?: Window) => void): void;
    export function getManifest(): Object;
    export function getPackageDirectoryEntry(callback: (directoryEntry: any) => void): void;
    export function getPlatformInfo(callback: (platformInfo: PlatformInfo) => void): void;
    export function getURL(path: string): string;
    export function reload(): void;
    export function requestUpdateCheck(callback: (status: string, details?: UpdateCheckDetails) => void): void;
    export function restart(): void;
    export function sendMessage(message: any, responseCallback?: (response: any) => void): void;
    export function sendMessage(message: any, options: MessageOptions, responseCallback?: (response: any) => void): void;
    export function sendMessage(extensionId: string, message: any, responseCallback?: (response: any) => void): void;
    export function sendMessage(extensionId: string, message: any, options: MessageOptions, responseCallback?: (response: any) => void): void;
    export function sendNativeMessage(application: string, message: any, responseCallback?: (response: any) => void): void;
    export function setUninstallUrl(url: string): void;

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

////////////////////
// Script Badge
////////////////////
declare module chrome.scriptBadge {
    interface GetPopupDetails {
        tabId: number;
    }

    interface AttentionDetails {
        tabId: number;
    }

    interface SetPopupDetails {
        tabId: number;
        popup: string;
    }

    interface ScriptBadgeClickedEvent extends chrome.events.Event {
        addListener(callback: (tab: chrome.tabs.Tab) => void): void;
    }

    export function getPopup(details: GetPopupDetails, callback: Function): void;
    export function getAttention(details: AttentionDetails): void;
    export function setPopup(details: SetPopupDetails): void;

    var onClicked: ScriptBadgeClickedEvent;
}

////////////////////
// Storage
////////////////////
declare module chrome.storage {
    interface StorageArea {
        getBytesInUse(callback: (bytesInUse: number) => void): void;
        getBytesInUse(keys: string, callback: (bytesInUse: number) => void): void;
        getBytesInUse(keys: string[], callback: (bytesInUse: number) => void): void;
        clear(callback?: Function): void;
        set(items: Object, callback?: Function): void;
        remove(keys: string, callback?: Function): void;
        remove(keys: string[], callback?: Function): void;
        get(callback: (items: Object) => void): void;
        get(keys: string, callback: (items: Object) => void): void;
        get(keys: string[], callback: (items: Object) => void): void;
        get(keys: Object, callback: (items: Object) => void): void;
    }

    interface StorageChange {
        newValue?: any;
        oldValue?: any;
    }

    interface Local extends StorageArea {
        QUOTA_BYTES: number;
    }

    interface Sync extends StorageArea {
        MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;
        QUOTA_BYTES: number;
        QUOTA_BYTES_PER_ITEM: number;
        MAX_ITEMS: number;
        MAX_WRITE_OPERATIONS_PER_HOUR: number;
    }

    interface StorageChangedEvent extends chrome.events.Event {
        addListener(callback: (changes: Object, areaName: string) => void): void;
    }

    var local: Local;
    var sync: Sync;

    var onChanged: StorageChangedEvent;
}

////////////////////
// Socket
////////////////////
declare module chrome.socket {
    interface CreateInfo {
        socketId: number;
    }

    interface AcceptInfo {
        resultCode: number;
        socketId?: number;
    }

    interface ReadInfo {
        resultCode: number;
        data: ArrayBuffer;
    }

    interface WriteInfo {
        bytesWritten: number;
    }

    interface RecvFromInfo {
        resultCode: number;
        data: ArrayBuffer;
        port: number;
        address: string;
    }

    interface SocketInfo {
        socketType: string;
        localPort?: number;
        peerAddress?: string;
        peerPort?: number;
        localAddress?: string;
        connected: boolean;
    }

    interface NetworkInterface {
        name: string;
        address: string;
    }

    export function create(type: string, options?: Object, callback?: (createInfo: CreateInfo) => void): void;
    export function destroy(socketId: number): void;
    export function connect(socketId: number, hostname: string, port: number, callback: (result: number) => void): void;
    export function bind(socketId: number, address: string, port: number, callback: (result: number) => void): void;
    export function disconnect(socketId: number): void;
    export function read(socketId: number, bufferSize?: number, callback?: (readInfo: ReadInfo) => void): void;
    export function write(socketId: number, data: ArrayBuffer, callback?: (writeInfo: WriteInfo) => void): void;
    export function recvFrom(socketId: number, bufferSize?: number, callback?: (recvFromInfo: RecvFromInfo) => void): void;
    export function sendTo(socketId: number, data: ArrayBuffer, address: string, port: number, callback?: (writeInfo: WriteInfo) => void): void;
    export function listen(socketId: number, address: string, port: number, backlog?: number, callback?: (result: number) => void): void;
    export function accept(socketId: number, callback?: (acceptInfo: AcceptInfo) => void): void;
    export function setKeepAlive(socketId: number, enable: boolean, delay?: number, callback?: (result: boolean) => void): void;
    export function setNoDelay(socketId: number, noDelay: boolean, callback?: (result: boolean) => void): void;
    export function getInfo(socketId: number, callback: (result: SocketInfo) => void): void;
    export function getNetworkList(callback: (result: NetworkInterface[]) => void): void;
}

////////////////////
// TabCapture
////////////////////
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

    export function capture(options: CaptureOptions, callback: (stream: LocalMediaStream) => void): void;
    export function getCapturedTabs(callback: (result: CaptureInfo[]) => void): void;
}

////////////////////
// Tabs
////////////////////
declare module chrome.tabs {
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
        id: number;
        incognito: boolean;
    }

    interface InjectDetails {
        allFrames?: boolean;
        code?: string;
        runAt?: string;
        file?: string;
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
    }

    interface HighlightInfo {
        tabs: number[];
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
        url?: string;
        currentWindow?: boolean;
        highlighted?: boolean;
        pinned?: boolean;
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

    interface TabHighlightedEvent extends chrome.events.Event {
        addListener(callback: (highlightInfo: HighlightInfo) => void): void;
    }

    interface TabRemovedEvent extends chrome.events.Event {
        addListener(callback: (tabId: number, removeInfo: TabRemoveInfo) => void): void;
    }

    interface TabUpdatedEvent extends chrome.events.Event {
        addListener(callback: (tabId: number, changeInfo: TabChangeInfo, tab: Tab) => void): void;
    }

    interface TabAttachedEvent extends chrome.events.Event {
        addListener(callback: (tabId: number, attachInfo: TabAttachInfo) => void): void;
    }

    interface TabMovedEvent extends chrome.events.Event {
        addListener(callback: (tabId: number, moveInfo: TabMoveInfo) => void): void;
    }

    interface TabDetachedEvent extends chrome.events.Event {
        addListener(callback: (tabId: number, detachInfo: TabDetachInfo) => void): void;
    }

    interface TabCreatedEvent extends chrome.events.Event {
        addListener(callback: (tab: Tab) => void): void;
    }

    interface TabActivatedEvent extends chrome.events.Event {
        addListener(callback: (activeInfo: TabActiveInfo) => void): void;
    }

    interface TabReplacedEvent extends chrome.events.Event {
        addListener(callback: (addedTabId: number, removedTabId: number) => void): void;
    }

    export function executeScript(details: InjectDetails, callback?: (result: any[]) => void): void;
    export function executeScript(tabId: number, details: InjectDetails, callback?: (result: any[]) => void): void;
    export function get(tabId: number, callback: (tab: Tab) => void): void;
    export function getCurrent(callback: (tab?: Tab) => void): void;
    export function create(createProperties: CreateProperties, callback?: (tab: Tab) => void): void;
    export function move(tabId: number, moveProperties: MoveProperties, callback?: (tab: Tab) => void): void;
    export function move(tabIds: number[], moveProperties: MoveProperties, callback?: (tabs: Tab[]) => void): void;
    export function update(updateProperties: UpdateProperties, callback?: (tab?: Tab) => void): void;
    export function update(tabId: number, updateProperties: UpdateProperties, callback?: (tab?: Tab) => void): void;
    export function remove(tabId: number, callback?: Function): void;
    export function remove(tabIds: number[], callback?: Function): void;
    export function captureVisibleTab(callback: (dataUrl: string) => void): void;
    export function captureVisibleTab(windowId: number, callback: (dataUrl: string) => void): void;
    export function captureVisibleTab(options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
    export function captureVisibleTab(windowId: number, options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
    export function reload(tabId?: number, reloadProperties?: ReloadProperties, func?: Function): void;
    export function duplicate(tabId: number, callback?: (tab?: Tab) => void): void;
    export function sendMessage(tabId: number, message: any, responseCallback?: (response: any) => void): void;
    export function connect(tabId: number, connectInfo?: ConnectInfo): runtime.Port;
    export function insertCSS(tabId: number, details: InjectDetails, callback?: Function): void;
    export function highlight(highlightInfo: HighlightInfo, callback: (window: chrome.windows.Window) => void): void;
    export function query(queryInfo: QueryInfo, callback: (result: Tab[]) => void): void;
    export function detectLanguage(callback: (language: string) => void): void;
    export function detectLanguage(tabId: number, callback: (language: string) => void): void;

    var onHighlighted: TabHighlightedEvent;
    var onRemoved: TabRemovedEvent;
    var onUpdated: TabUpdatedEvent;
    var onAttached: TabAttachedEvent;
    var onMoved: TabMovedEvent;
    var onDetached: TabDetachedEvent;
    var onCreated: TabCreatedEvent;
    var onActivated: TabActivatedEvent;
    var onReplaced: TabReplacedEvent;
}

////////////////////
// Top Sites
////////////////////
declare module chrome.topSites {
    interface MostVisitedURL {
        url: string;
        title: string;
    }

    export function get(callback: (data: MostVisitedURL) => void): void;
}

////////////////////
// Text to Speech
////////////////////
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
    export function getVoices(callback?: (voices: TtsVoice[]) => void): void;
    export function speak(utterance: string, options?: SpeakOptions, callback?: Function): void;
}

////////////////////
// Text to Speech Engine
////////////////////
declare module chrome.ttsEngine {
    interface SpeakOptions {
        lang?: string;
        voiceName?: string;
        gender?: string;
        volume?: number;
        rate?: number;
        pitch?: number;
    }

    interface TtsEngineSpeakEvent extends chrome.events.Event {
        addListener(callback: (utterance: string, options: SpeakOptions, sendTtsEvent: (event: chrome.tts.TtsEvent) => void) => void): void;
    }

    interface TtsEngineStopEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    var onSpeak: TtsEngineSpeakEvent;
    var onStop: TtsEngineStopEvent;
}

////////////////////
// Types
////////////////////
declare module chrome.types {
    interface ChromeSettingSetDetails {
        scope?: string;
        value: any;
    }

    interface ChromeSettingGetDetails {
        incognito?: boolean;
    }

    interface ChromeSettingGetResultDetails {
        levelOfControl: string;
        value: any;
        incognitoSpecific?: boolean;
    }

    interface ChromeSettingChangedEvent extends chrome.events.Event {
        addListener(callback: (details: ChromeSettingGetResultDetails) => void): void;
    }

    interface ChromeSetting {
        details: {
            scope?: string;
            callback?: Function;
        };
        set(details: ChromeSettingSetDetails, callback?: Function): void;
        get(details: ChromeSettingGetDetails, callback?: ChromeSettingGetResultDetails): void;
        onChange: ChromeSettingChangedEvent;
    }
}

////////////////////
// Web Navigation
////////////////////
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
        url: chrome.events.UrlFilter[];
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

////////////////////
// Web Request
////////////////////
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

    interface BlockingResponse {
        cancel?: boolean;
        redirectUrl?: string;
        responseHeaders?: HttpHeader[];
        authCredentials?: AuthCredentials;
        requestHeaders?: HttpHeader[];
    }

    interface RequestFilter {
        tabId?: number;
        types?: string[];
        urls: string[];
        windowId?: number;
    }

    interface UploadData {
        bytes?: any[];
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
        statusLine?: string;
        responseHeaders?: HttpHeader[];
        fromCache: boolean;
        statusCode: number;
    }

    interface OnHeadersReceivedDetails extends CallbackDetails {
        statusLine?: string;
        responseHeaders?: HttpHeader[];
    }

    interface OnBeforeRedirectDetails extends CallbackDetails {
        ip?: string;
        statusLine?: string;
        responseHeaders?: HttpHeader[];
        fromCache: boolean;
        redirectUrl: string;
        statusCode: number;
    }

    interface Challenger {
        host: string;
        port: number;
    }

    interface OnAuthRequiredDetails extends CallbackDetails {
        statusLine?: string;
        challenger: Challenger;
        responseHeaders?: HttpHeader[];
        isProxy: boolean;
        realm?: string;
        scheme: string;
    }

    interface OnBeforeSendHeadersDetails extends CallbackDetails {
        requestHeaders?: HttpHeader[];
    }

    interface OnErrorOccurredDetails extends CallbackDetails {
        ip?: string;
        fromCache: boolean;
        error: string;
    }

    interface OnResponseStartedDetails extends CallbackDetails {
        ip?: string;
        statusLine?: string;
        responseHeaders?: HttpHeader[];
        fromCache: boolean;
        statusCode: number;
    }

    interface OnSendHeadersDetails extends CallbackDetails {
        requestHeaders?: HttpHeader[];
    }

    interface FormData {
        [key: string]: string[];
    }

    interface RequestBody {
        raw?: UploadData;
        error?: string;
        formData?: FormData;
    }

    interface OnBeforeRequestDetails extends CallbackDetails {
        requestBody?: RequestBody;
    }

    interface WebRequestCompletedEvent extends chrome.events.Event {
        addListener(callback: (details: OnCompletedDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnCompletedDetails) => BlockingResponse): void;
    }

    interface WebRequestHeadersReceivedEvent extends chrome.events.Event {
        addListener(callback: (details: OnHeadersReceivedDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnHeadersReceivedDetails) => BlockingResponse): void;
    }

    interface WebRequestBeforeRedirectEvent extends chrome.events.Event {
        addListener(callback: (details: OnBeforeRedirectDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnBeforeRedirectDetails) => BlockingResponse): void;
    }

    interface WebRequestAuthRequiredEvent extends chrome.events.Event {
        addListener(callback: (details: OnAuthRequiredDetails, callback?: (response: BlockingResponse) => void) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnAuthRequiredDetails, callback?: (response: BlockingResponse) => void) => void): void;
    }

    interface WebRequestBeforeSendHeadersEvent extends chrome.events.Event {
        addListener(callback: (details: OnBeforeSendHeadersDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnBeforeSendHeadersDetails) => BlockingResponse): void;
    }

    interface WebRequestErrorOccurredEvent extends chrome.events.Event {
        addListener(callback: (details: OnErrorOccurredDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnErrorOccurredDetails) => BlockingResponse): void;
    }

    interface WebRequestResponseStartedEvent extends chrome.events.Event {
        addListener(callback: (details: OnResponseStartedDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnResponseStartedDetails) => BlockingResponse): void;
    }

    interface WebRequestSendHeadersEvent extends chrome.events.Event {
        addListener(callback: (details: OnSendHeadersDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnSendHeadersDetails) => BlockingResponse): void;
    }

    interface WebRequestBeforeRequestEvent extends chrome.events.Event {
        addListener(callback: (details: OnBeforeRequestDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnBeforeRequestDetails) => BlockingResponse): void;
    }

    var MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

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

////////////////////
// Web Store
////////////////////
declare module chrome.webstore {
    export function install(url?: string, successCallback?: Function, failureCallback?: (error: string) => void): void;
}

////////////////////
// Windows
////////////////////
declare module chrome.windows {
    interface Window {
        tabs?: chrome.tabs.Tab[];
        top: number;
        height: number;
        width: number;
        state: string;
        focused: boolean;
        alwaysOnTop: boolean;
        incognito: boolean;
        type: string;
        id: number;
        left: number;
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

    interface WindowRemovedEvent extends chrome.events.Event {
        addListener(callback: (windowId: number) => void): void;
    }

    interface WindowCreatedEvent extends chrome.events.Event {
        addListener(callback: (window: Window) => void): void;
    }

    interface WindowFocusChangedEvent extends chrome.events.Event {
        addListener(callback: (windowId: number) => void): void;
    }

    var WINDOW_ID_CURRENT: number;
    var WINDOW_ID_NONE: number;

    export function get(windowId: number, callback: (window: chrome.windows.Window) => void): void;
    export function get(windowId: number, getInfo: GetInfo, callback: (window: chrome.windows.Window) => void): void;
    export function getCurrent(callback: (window: chrome.windows.Window) => void): void;
    export function getCurrent(getInfo: GetInfo, callback: (window: chrome.windows.Window) => void): void;
    export function create(createData?: CreateData, callback?: (window: chrome.windows.Window) => void): void;
    export function getAll(callback: (windows: chrome.windows.Window[]) => void): void;
    export function getAll(getInfo: GetInfo, callback: (windows: chrome.windows.Window[]) => void): void;
    export function update(windowId: number, updateInfo: UpdateInfo, callback?: (window: chrome.windows.Window) => void): void;
    export function remove(windowId: number, callback?: Function): void;
    export function getLastFocused(callback: (window: chrome.windows.Window) => void): void;
    export function getLastFocused(getInfo: GetInfo, callback: (window: chrome.windows.Window) => void): void;

    var onRemoved: WindowRemovedEvent;
    var onCreated: WindowCreatedEvent;
    var onFocusChanged: WindowFocusChangedEvent;
}
