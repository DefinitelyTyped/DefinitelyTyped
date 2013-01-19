// Type definitions for Chrome extension development.
// Project: http://developer.chrome.com/extensions/
// Definitions by: Matthew Kimber <https://github.com/matthewkimber>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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
        addListener(callback: (alarm: Alarm) => void);
    }

    export function create(alarmInfo: AlarmCreateInfo): void;
    export function create(name: string, alarmInfo: AlarmCreateInfo): void;
    export function getAll(callback: (alarms: Alarm[]) => void): void;
    export function clearAll(): void;
    export function clear(name?: string): void;
    export function get(callback: (alarm: Alarm) => void): void;
    export function get(name: string, callback: (alarm: Alarm) => void): void;
    
    declare var onAlarm: AlarmEvent;
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
        addListener(callback: (id: string, removeInfo: BookmarkRemoveInfo) => void);
    }

    interface BookmarkImportEndedEvent extends chrome.events.Event {
        addListener(callback: Function);
    }

    interface BookmarkMovedEvent extends chrome.events.Event {
        addListener(callback: (id: string, moveInfo: BookmarkMoveInfo) => void);
    }

    interface BookmarkImportBeganEvent extends chrome.events.Event {
        addListener(callback: Function);
    }

    interface BookmarkChangedEvent extends chrome.events.Event {
        addListener(callback: (id: string, changeInfo: BookmarkChangeInfo) => void);
    }

    interface BookmarkCreatedEvent extends chrome.events.Event {
        addListener(callback: (id: string, bookmark: BookmarkTreeNode) => void);
    }

    interface BookmarkChildrenReordered extends chrome.events.Event {
        addListener(callback: (id: string, reorderInfo: BookmarkReorderInfo) => void);
    }

    declare var MAX_WRITE_OPERATIONS_PER_HOUR: number;
    declare var MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;

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

    declare var onRemoved: chrome.alarms.AlarmEvent;
    declare var onImportEnded: BookmarkImportEndedEvent;
    declare var onImportBegan: BookmarkImportBeganEvent;
    declare var onChanged: BookmarkChangedEvent;
    declare var onCreated: BookmarkCreatedEvent;
    declare var onChildrenReordered: BookmarkChildrenReordered;
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
        addListener(callback: (tab: chrome.tabs.Tab) => void);
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

    declare var onClicked: BrowserClickedEvent;
}

////////////////////
// Browsing Data
////////////////////
declare module chrome.browsingData {
    interface OriginTypes {
        protectedWeb?: bool;
        extension?: bool;
        unprotectedWeb?: bool;
    }

    interface RemovalOptions {
        originTypes?: OriginTypes;
        since?: number;
    }

    interface DataToRemove {
        webSQL?: bool;
        indexedDB?: bool;
        cookies?: bool;
        passwords?: bool;
        serverBoundCertificates?: bool;
        downloads?: bool;
        cache?: bool;
        appcache?: bool;
        fileSystems?: bool;
        pluginData?: bool;
        localStorage?: bool;
        formData?: bool;
        history?: bool;
    }

    export function removePluginData(options: RemovalOptions, callback?: Function);
    export function removeFormData(options: RemovalOptions, callback?: Function);
    export function removeFileSystems(options: RemovalOptions, callback?: Function);
    export function remove(options: RemovalOptions, dataToRemove: DataToRemove, callback?: Function);
    export function removePasswords(options: RemovalOptions, callback?: Function);
    export function removeCookies(options: RemovalOptions, callback?: Function);
    export function removeWebSQL(options: RemovalOptions, callback?: Function);
    export function removeAppcache(options: RemovalOptions, callback?: Function);
    export function removeDownloads(options: RemovalOptions, callback?: Function);
    export function removeLocalStorage(options: RemovalOptions, callback?: Function);
    export function removeCache(options: RemovalOptions, callback?: Function);
    export function removeHistory(options: RemovalOptions, callback?: Function);
    export function removeIndexedDB(options: RemovalOptions, callback?: Function);
}

////////////////////
// Commands
////////////////////
declare module chrome.commands {
    interface CommandEvent extends chrome.events.Event { 
        addListener(callback: (command: string) => void);
    }
        
    declare var onCommand: CommandEvent;
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
        incognito?: bool;
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

    declare var cookies: ContentSetting;
    declare var popups: ContentSetting;
    declare var javascript: ContentSetting;
    declare var notifications: ContentSetting;
    declare var plugins: ContentSetting;
    declare var images: ContentSetting;
}

////////////////////
// Context Menus
////////////////////
declare module chrome.contextMenus {
    interface OnClickData {
        selectionText?: string;
        checked?: bool;
        menuItemId: any;
        frameUrl?: string;
        editable: bool;
        mediaType?: string;
        wasChecked?: bool;
        pageUrl: string;
        linkUrl?: string;
        parentMenuItemId?: any;
    }

    interface CreateProperties {
        documentUrlPatterns?: string[];
        checked?: bool;
        title?: string;
        contexts?: string[];
        enabled?: bool;
        targetUrlPatterns?: string[];
        onclick?: (info: OnClickData, tab: chrome.tabs.Tab) => void;
        parentId?: any;
        type?: string;
        id?: string;
    }

    interface UpdateProperties {
        documentUrlPatterns?: string[];
        checked?: bool;
        title?: string;
        contexts?: string[];
        enabled?: bool;
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

    declare var onClicked: MenuClickedEvent;
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
        session: bool;
        hostOnly: bool;
        expirationDate?: number;
        path: string;
        httpOnly: bool;
        secure: bool;
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
        session?: bool;
        path?: string;
        secure?: bool;
    }

    interface SetDetails {
        domain?: string;
        name?: string;
        url: string;
        storeId?: string;
        value?: string;
        expirationDate?: number;
        path?: string;
        httpOnly?: bool;
        secure?: bool;
    }

    interface Details {
        name: string;
        url: string;
        storeId?: string;
    }

    interface CookieChangeInfo {
        cookie: Cookie;
        removed: bool;
        cause: string;
    }

    interface CookieChangedEvent extends chrome.events.Event {
        addListener(callback: (changeInfo: CookieChangeInfo) => void): void;
    }

    export function getAllCookieStores(callback: (cookieStores: CookieStore[]) => void): void;
    export function getAll(details: GetAllDetails, callback: (cookies: Cookie) => void): void;
    export function set(details: SetDetails, callback?: (cookie?: Cookie) => void): void;
    export function remove(details: Details, callback?: (details: Details) => void): void;
    export function get(details: Details, callback: (cookie?: Cookie) => void): void;

    declare var onChanged: CookieChangedEvent;
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

    declare var onDetach: DebuggerDetachedEvent;
    declare var onEvent: DebuggerEventEvent;
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

    interface RedirectToEmptyDocument {}

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

    interface CancelRequest {}

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

    interface RedirectToTransparentImage {}

    interface AddRequestCookie {
        cookie: RequestCookie;
    }

    interface RemoveRequestCookie {
        filter: RequestCookie;
    }

    interface RequestedEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }    

    declare var onRequest: RequestedEvent;
}

////////////////////
// Dev Tools - Inspected Window
////////////////////
declare module chrome.devtools.inspectedWindow {
    interface Resource {
        url: string;
        getContent(callback: (content: string, encoding: string) => void): void;
        setContent(content: string, commit: bool, callback?: (error: Object) => void): void;
    }

    interface ReloadOptions {
        userAgent?: string;
        ignoreCache?: bool;
        injectedScript?: bool;
    }

    interface ResourceAddedEvent extends chrome.events.Event {
        addListener(callback: (resource: Resource) => void): void;
    }

    interface ResourceContentCommittedEvent extends chrome.events.Event {
        addListener(callback: (resource: Resource, content: string) => void): void;
    }

    declare var tabId: number;

    export function reload(reloadOptions: ReloadOptions): void;
    export function eval(expression: string, callback?: (result: Object, isException: bool) => void): void;
    export function getResources(callback: (resources: Resource[]) => void): void;

    declare var onResourceAdded: ResourceAddedEvent;
    declare var onResourceContentCommitted: ResourceContentCommittedEvent;
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

    declare var onRequestFinished: RequestFinishedEvent;
    declare var onNavigated: NavigatedEvent;
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
        createStatusButton(iconPath: string, tooltipText: string, disabled: bool): Button;
        onShown: PanelShownEvent;
        onHidden: PanelHiddenEvent;
        onSearch: PanelSearchEvent;
    }

    interface ButtonClickedEvent extends chrome.events.Event {
        addListener(callback: Function);
    }

    interface Button {
        update(iconPath?: string, tooltipText?: string, disabled?: bool);
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

    declare var elements: ElementsPanel;

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
        saveAs?: bool;
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
        current?: bool;
        previous?: bool;
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
        dangerAccepted?: bool;
        filename: string;
        paused: bool;
        state: string;
        mime: string;
        fileSize: number;
        startTime: number;
        error?: number;
        endTime?: number;
        id: number;
        incognito: bool;
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
        paused?: bool;
        filenameRegex?: string;
        query?: string;
        totalBytesLess?: number;
        id?: number;
        bytesReceived?: number;
        endedAfter?: number;
        filename?: string;
        state?: string;
        startedAfter?: number;
        dangerAccepted?: bool;
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

    declare var onChanged: DownloadChangedEvent;
    declare var onCreated: DownloadCreatedEvent;
    declare var onErased: DownloadErasedEvent;
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
        hasListeners(): bool;
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
    interface MessageSender {
        id: string;
        tab?: chrome.tabs.Tab;
    }

    interface Port {
        postMessage: Function;
        sender?: MessageSender;
        onDisconnect: chrome.events.Event;
        onMessage: chrome.events.Event;
        name: string;
    }

    interface FetchProperties {
        windowId?: number;
        type?: string;
    }

    interface ConnectInfo {
        name?: string;
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

    declare var inIncognitoContext: bool;
    declare var lastError: Object;

    export function getBackgroundPage(): Window;
    export function getURL(path: string): string;
    export function setUpdateUrlData(data: string): void;
    export function getViews(fetchProperties?: FetchProperties): Window[];
    export function isAllowedFileSchemeAccess(callback: (isAllowedAccess: bool) => void): void;
    export function sendMessage(message: any, responseCallback?: (response: any) => void): void;
    export function sendMessage(extensionId: string, message: any, responseCallback?: (response: any) => void): void;
    export function connect(extensionId?: string, connectInfo?: ConnectInfo): Port;
    export function isAllowedIncognitoAccess(callback: (isAllowedAccess) => void): void;

    declare var onMessage: ExtensionMessageEvent;
    declare var onMessageExternal: ExtensionMessageExternalEvent;
    declare var onConnect: ExtensionConnectEvent;
    declare var onConnectExternal: ExtensionConnectExternalEvent;
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
        success: bool;
    }

    interface FileHandlerExecuteEventDetails {
        tab_id?: number;
        entries: any[];
        selectFile(selectionParams: SelectionParams, callback:(result: SelectionResult) => void): void;
    }

    interface FileBrowserHandlerExecuteEvent extends chrome.events.Event {
        addListener(callback: (id: string, details: FileHandlerExecuteEventDetails) => void): void;
    }

    declare var onExecute: FileBrowserHandlerExecuteEvent;
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

    declare var onDefaultFixedFontSizeChanged: DefaultFixedFontSizeChangedEvent;
    declare var onDefaultFontSizeChanged: DefaultFontSizeChangedEvent;
    declare var onMinimumFontSizeChanged: MinimumFontSizeChangedEvent;
    declare var onFontChanged: FontChangedEvent;
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
        allHistory: bool;
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

    declare var onVisited: HistoryVisitedEvent;
    declare var onVisitRemoved: HistoryVisitRemovedEvent;
}

////////////////////
// Internationalization
////////////////////
declare module chrome.i18n {
    export function getMessage(messageName: string, substitutions?: any): string;
    export function getAcceptLanguages(callback: (languages: string[]) => void): void;
}

////////////////////
// Idle
////////////////////
declare module chrome.idle {
    interface IdleStateChangedEvent extends chrome.events.Event {
        addListener(callback: (newState: string) => void): void;
    }

    export function queryState(thresholdSeconds: number, callback: (newState: string) => void): void;

    declare var onStateChanged: IdleStateChangedEvent;
}

////////////////////
// Input - IME
////////////////////
declare module chrome.input.ime {
    interface KeyboardEvent {
        shiftKey?: bool;
        altKey?: bool;
        requestId: string;
        key: string;
        ctrlKey?: bool;
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
        cursorVisible?: bool;
        vertical?: bool;
        pageSize?: number;
        auxiliaryTextVisible?: bool;
        auxiliaryText?: string;
        visible?: bool;
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
    export function commitText(parameters: CommitTextParameters, callback?: (success: bool) => void): void;
    export function setCandidates(parameters: CandidatesParameters, callback?: (success: bool) => void): void;
    export function setComposition(parameters: CompositionParameters, callback?: (success: bool) => void): void;
    export function updateMenuItems(parameters: MenuItemParameters, callback?: Function): void;
    export function setCandidateWindowProperties(parameters: CandidateWindowPropertiesParameters, callback?: (success: bool) => void): void;
    export function clearComposition(parameters: ClearCompositionParameters, callback?: (success: bool) => void): void;
    export function setCursorPosition(parameters: CursorPositionParameters, callback?: (success: bool) => void): void;

    declare var onBlur: BlurEvent;
    declare var onCandidateClicked: CandidateClickedEvent;
    declare var onKeyEvent: KeyEventEvent;
    declare var onDeactivated: DeactivatedEvent;
    declare var onInputContextUpdate: InputContextUpdateEvent;
    declare var onActivate: ActivateEvent;
    declare var onFocus: FocusEvent;
    declare var onMenuItemActivated: MenuItemActivatedEvent;
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
        enabled: bool;
        homepageUrl?: string;
        mayDisable: bool;
        installType: string;
        version: string;
        id: string;
        offlineEnabled: bool;
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
        showConfirmDialog?: bool;
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

    export function setEnabled(id: string, enabled: bool, callback?: Function): void;
    export function getPermissionWarningsById(id: string, callback?: (permissionWarnings: string[]) => void): void;
    export function get(id: string, callback?: (result: ExtensionInfo) => void): void;
    export function getAll(callback?: (result: ExtensionInfo[]) => void): void;
    export function getPermissionWarningsByManifest(manifestStr: string, callback?: (permissionwarnings: string[]) => void): void;
    export function launchApp(id: string, callback?: Function): void;
    export function uninstall(id: string, options: UninstallOptions, callback?: Function): void;

    declare var onDisabled: ManagementDisabledEvent;
    declare var onUninstalled: ManagementUninstalledEvent;
    declare var onInstalled: ManagementInstalledEvent;
    declare var onEnabled: ManagementEnabledEvent;
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

    declare var onInputEntered: OmniboxInputEnteredEvent;
    declare var onInputChanged: OmniboxInputChangedEvent;
    declare var onInputStarted: OmniboxInputStartedEvent;
    declare var onInputCancelled: OmniboxInputCancelledEvent;
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

    declare var onClicked: PageActionClickedEvent;
}

////////////////////
// Page Capture
////////////////////
declare module chrome.pageCapture {
    interface SaveDetails {
        tabId: number;
    }

    export function saveAsMHTML(details: SaveDetails, callback: (mhtmlData?: any) => void): void;
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

    export function contains(permissions: Permissions, callback: (result: bool) => void): void;
    export function getAll(callback: (permissions: Permissions) => void): void;
    export function request(permissions: Permissions, callback?: (granted: bool) => void): void;
    export function remove(permissions: Permissions, callback?: (removed: bool) => void): void;

    declare var onRemoved: PermissionsRemovedEvent;
    declare var onAdded: PermissionsAddedEvent;
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

    declare var services: Services;
    declare var network: Network;
    declare var websites: Websites;
}

////////////////////
// Proxy
////////////////////
declare module chrome.proxy {
    interface PacScript {
        url?: string;
        mandatory?: bool;
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
        fatal: bool;
    }

    interface ProxyErrorEvent extends chrome.events.Event {
        addListener(callback: (details: ErrorDetails) => void): void;
    }

    declare var settings: chrome.types.ChromeSetting;
    declare var onProxyError: ProxyErrorEvent;
}

////////////////////
// Runtime
////////////////////
declare module chrome.runtime {
    declare var lastError: Object;
    declare var id: string;

    interface InstalledDetails {
        reason: string;
        previousVersion?: string;
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
    
    export function getBackgroundPage(callback: (backgroundPage?: Window) => void): void;
    export function getManifest(): Object;
    export function getURL(path: string): string;
    
    declare var onSuspend: RuntimeSuspendEvent;
    declare var onStartup: RuntimeStartupEvent;
    declare var onInstalled: RuntimeInstalledEvent;
    declare var onSuspendCanceled: RuntimeSuspendCanceledEvent;
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

    declare var onClicked: ScriptBadgeClickedEvent;
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

    interface Local {
        QUOTA_BYTES: number;
    }

    interface Sync {
        MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;
        QUOTA_BYTES: number;
        QUOTA_BYTES_PER_ITEM: number;
        MAX_ITEMS: number;
        MAX_WRITE_OPERATIONS_PER_HOUR: number;
    }

    interface StorageChangedEvent extends chrome.events.Event {
        addListener(callback: (changes: Object, areaName: string) => void): void;
    }

    declare var local: Local;
    declare var sync: Sync;

    declare var onChanged: StorageChangedEvent;
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
        connected: bool;
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
    export function setKeepAlive(socketId: number, enable: bool, delay?: number, callback?: (result: bool) => void): void;
    export function setNoDelay(socketId: number, noDelay: bool, callback?: (result: bool) => void): void;
    export function getInfo(socketId: number, callback: (result: SocketInfo) => void): void;
    export function getNetworkList(callback: (result: NetworkInterface[]) => void): void;
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
        pinned: bool;
        highlighted: bool;
        windowId: number;
        active: bool;
        favIconUrl?: string;
        id: number;
        incognito: bool;
    }

    interface InjectDetails {
        allFrames?: bool;
        code?: string;
        runAt?: string;
        file?: string;
    }

    interface CreateProperties {
        index?: number;
        openerTabId?: number;
        url?: string;
        pinned?: bool;
        windowId?: number;
        active?: bool;
    }

    interface MoveProperties {
        index: number;
        windowId?: number;
    }

    interface UpdateProperties {
        pinned?: bool;
        openerTabId?: number;
        url?: string;
        highlighted?: bool;
        active?: bool;
    }

    interface CaptureVisibleTabOptions {
        quality?: number;
        format?: string;
    }

    interface ReloadProperties {
        bypassCache?: bool;
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
        lastFocusedWindow?: bool;
        windowId?: number;
        windowType?: string;
        active?: bool;
        index?: number;
        title?: string;
        url?: string;
        currentWindow?: bool;
        highlighted?: bool;
        pinned?: bool;
    }

    interface TabHighlightInfo {
        windowId: number;
        tabIds: number[];
    }

    interface TabRemoveInfo {
        isWindowClosing: bool;
    }

    interface TabAttachInfo {
        newPosition: number;
        newWindowId: number;
    }

    interface TabChangeInfo {
        status?: string;
        pinned?: bool;
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

    export function executeScript(details: InjectDetails, callback?: (result: any[]) => void): void;
    export function executeScript(tabId: number, details: InjectDetails, callback?: (result: any[]) => void): void;
    export function get(tabId: number, callback: (tab: Tab) => void): void;
    export function getCurrent(callback: (tab?: Tab) => void): void;
    export function create(createProperties: CreateProperties, callback?: (tab: Tab) => void): void;
    export function move(tabId: number, moveProperties: MoveProperties, callback?: (tab: Tab) => void): void;
    export function move(tabIds: number[], moveProperties: MoveProperties, callback?: (tabs: Tab[]) => void): void;
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
    export function connect(tabId: number, connectInfo?: ConnectInfo): void;
    export function insertCSS(tabId: number, details: InjectDetails, callback?: Function): void;
    export function highlight(highlightInfo: HighlightInfo, callback: (window: chrome.windows.Window) => void): void;
    export function query(queryInfo: QueryInfo, callback: (result: Tab[]) => void): void;
    export function detectLanguage(callback: (language: string) => void): void;
    export function detectLanguage(tabId: number, callback: (language: string) => void): void;

    declare var onHighlighted: TabHighlightedEvent;
    declare var onRemoved: TabRemovedEvent;
    declare var onUpdated: TabUpdatedEvent;
    declare var onAttached: TabAttachedEvent;
    declare var onMoved: TabMovedEvent;
    declare var onDetached: TabDetachedEvent;
    declare var onCreated: TabCreatedEvent;
    declare var onActivated: TabActivatedEvent;
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
        enqueue?: bool;
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

    export function isSpeaking(callback?: (speaking: bool) => void): void;
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

    declare var onSpeak: TtsEngineSpeakEvent;
    declare var onStop: TtsEngineStopEvent;
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
        incognito?: bool;
    }

    interface ChromeSettingGetResultDetails {
        levelOfControl: string;
        value: any;
        incognitoSpecific?: bool;
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
        errorOccurred: bool;
    }

    interface GetAllFrameDetails {
        tabId: number;
    }

    interface ReferenceFragmentUpdatedDetails {
        processId: number;
        tabId: number;
        transitionType: string;
        url: string;
        timeStamp: number;
        frameId: number;
        transitionQualifiers: string;
    }

    interface CompletedDetails {
        processId: number;
        tabId: number;
        url: string;
        timeStamp: number;
        frameId: number;
    }

    interface HistoryStateUpdatedDetails {
        processId: number;
        tabId: number;
        transitionType: string;
        url: string;
        timeStamp: number;
        frameId: number;
        transitionQualifiers: string[];
    }

    interface CreatedNavigationTargetDetails {
        tabId: number;
        url: string;
        timeStamp: number;
        sourceTabId: number;
        sourceProcessId: number;
        sourceFrameId: number;
    }

    interface TabReplacedDetails {
        tabId: number;
        replacedTabId: number;
        timeStamp: number;
    }

    interface BeforeNavigateDetails {
        processId: number;
        tabId: number;
        url: string;
        timeStamp: number;
        frameId: number;
    }

    interface CommittedDetails {
        processId: number;
        tabId: number;
        transitionType: string;
        url: string;
        timeStamp: number;
        frameId: number;
        transitionQualifiers: string[];
    }

    interface DomContentLoadedDetails {
        processId: number;
        tabId: number;
        url: string;
        timeStamp: number;
        frameId: number;
    }

    interface ErrorOccurredDetails {
        processId: number;
        tabId: number;
        url: string;
        timeStamp: number;
        frameId: number;
        error: string;
    }

    interface WebNavigationReferenceFragmentUpdatedEvent extends chrome.events.Event {
        addListener(callback: (details: ReferenceFragmentUpdatedDetails) => void): void;
    }

    interface WebNavigationCompletedEvent extends chrome.events.Event {
        addListener(callback: (details: CompletedDetails) => void): void;
    }

    interface WebNavigationHistoryStateUpdatedEvent extends chrome.events.Event {
        addListener(callback: (details: HistoryStateUpdatedDetails) => void): void;
    }

    interface WebNavigationCreatedNavigationTargetEvent extends chrome.events.Event {
        addListener(callback: (details: CreatedNavigationTargetDetails) => void): void;
    }

    interface WebNavigationTabReplacedEvent extends chrome.events.Event {
        addListener(callback: (details: TabReplacedDetails) => void): void;
    }

    interface WebNavigationBeforeNavigateEvent extends chrome.events.Event {
        addListener(callback: (details: BeforeNavigateDetails) => void): void;
    }

    interface WebNavigationCommittedEvent extends chrome.events.Event {
        addListener(callback: (details: CommittedDetails) => void): void;
    }

    interface WebNavigationDomContentLoadedEvent extends chrome.events.Event {
        addListener(callback: (details: DomContentLoadedDetails) => void): void;
    }

    interface WebNavigationErrorOccurredEvent extends chrome.events.Event {
        addListener(callback: (details: ErrorOccurredDetails) => void): void;
    }

    export function getFrame(details: GetFrameDetails, callback: (details?: GetFrameResultDetails) => void): void;
    export function getAllFrames(details: GetAllFrameDetails, callback: (details?: Object[]) => void): void;
    
    declare var onReferenceFragmentUpdated: WebNavigationReferenceFragmentUpdatedEvent;
    declare var onCompleted: WebNavigationCompletedEvent;
    declare var onHistoryStateUpdated: WebNavigationHistoryStateUpdatedEvent;
    declare var onCreatedNavigationTarget: WebNavigationCreatedNavigationTargetEvent;
    declare var onTabReplaced: WebNavigationTabReplacedEvent;
    declare var onBeforeNavigate: WebNavigationBeforeNavigateEvent;
    declare var onCommitted: WebNavigationCommittedEvent;
    declare var onDOMContentLoaded: WebNavigationDomContentLoadedEvent;
    declare var onErrorOccurred: WebNavigationErrorOccurredEvent;
}

////////////////////
// Web Request
////////////////////
declare module chrome.webRequest {
    interface AuthCredentials {
        username: string;
        password: string;
    }

    interface BlockingResponse {
        cancel?: bool;
        redirectUrl?: string;
        responseHeaders?: Object;
        authCredentials?: AuthCredentials;
        requestHeaders?: Object;
    }

    interface RequestFilter {
        tabId?: number;
        types?: string;
        urls: string[];
        windowId?: number;
    }

    interface UploadData {
        bytes?: any[];
        file?: string;
    }

    interface OnCompletedDetails {
        tabId: number;
        ip?: string;
        statusLine?: string;
        frameId: number;
        responseHeaders?: Object;
        parentFrameId: number;
        fromCache: bool;
        url: string;
        timeStamp: number;
        requestId: string;
        type: string;
        method: string;
        statusCode: number;
    }

    interface OnHeadersReceivedDetails {
        tabId: number;
        parentFrameId: number;
        url: string;
        timeStamp: number;
        statusLine?: string;
        frameId: number;
        requestId: string;
        responseHeaders: Object;
        type: string;
        method: string;
    }

    interface OnBeforeRedirectDetails {
        tabId: number;
        ip?: string;
        statusLine?: string;
        frameId: number;
        responseHeaders?: Object;
        parentFrameId: number;
        fromCache: bool;
        url: string;
        timeStamp: number;
        requestId: string;
        redirectUrl: string;
        type: string;
        method: string;
        statusCode: number;
    }

    interface Challenger {
        host: string;
        port: number;
    }

    interface OnAuthRequiredDetails {
        tabId: number;
        statusLine?: string;
        frameId: number;
        challenger: Challenger;
        responseHeaders: Object;
        isProxy: bool;
        realm?: string;
        parentFrameId: number;
        url: string;
        timeStamp: number;
        requestId: string;
        scheme: string;
        type: string;
        method: string;
    }

    interface OnBeforeSendHeadersDetails {
        tabId: number;
        parentFrameId: number;
        url: string;
        timeStamp: number;
        frameId: number;
        requestId: number;
        requestHeaders?: Object;
        type: string;
        method: string;
    }

    interface OnErrorOccurredDetails {
        tabId: number;
        ip?: string;
        frameId: number;
        parentFrameId: number;
        fromCache: bool;
        url: string;
        timeStamp: number;
        requestId: string;
        error: string;
        type: string;
        method: string;
    }

    interface OnResponseStartedDetails {
        tabId: number;
        ip?: string;
        statusLine?: string;
        frameId: number;
        responseHeaders?: Object;
        parentFrameId: number;
        fromCache: bool;
        url: string;
        timeStamp: number;
        requestId: string;
        type: string;
        method: string;
        statusCode: number;
    }

    interface OnSendHeadersDetails {
        tabId: number;
        parentFrameId: number;
        url: string;
        timeStamp: number;
        frameId: number;
        requestId: string;
        requestHeaders: Object;
        type: string;
        method: string;
    }

    interface RequestBody {
        raw?: UploadData;
        error?: string;
        formData?: Object;
    }

    interface OnBeforeRequestDetails {
        tabId: number;
        parentFrameId: number;
        url: string;
        timeStamp: number;
        frameId: number;
        requestBody: RequestBody;
    }

    interface WebRequestCompletedEvent extends chrome.events.Event { 
        addListener(callback: (details: OnCompletedDetails) => void): void;
    }

    interface WebRequestHeadersReceivedEvent extends chrome.events.Event { 
        addListener(callback: (details: OnHeadersReceivedDetails) => void): void;
    }

    interface WebRequestBeforeRedirectEvent extends chrome.events.Event { 
        addListener(callback: (details: OnBeforeRedirectDetails) => void): void;
    }

    interface WebRequestAuthRequiredEvent extends chrome.events.Event { 
        addListener(callback: (details: OnAuthRequiredDetails, callback?: (response: BlockingResponse) => void) => void): void;
    }

    interface WebRequestBeforeSendHeadersEvent extends chrome.events.Event { 
        addListener(callback: (details: OnBeforeSendHeadersDetails) => void): void;
    }

    interface WebRequestErrorOccurredEvent extends chrome.events.Event { 
        addListener(callback: (details: OnErrorOccurredDetails) => void): void;
    }

    interface WebRequestResponseStartedEvent extends chrome.events.Event { 
        addListener(callback: (details: OnResponseStartedDetails) => void): void;
    }

    interface WebRequestSendHeadersEvent extends chrome.events.Event { 
        addListener(callback: (details: OnSendHeadersDetails) => void): void;
    }

    interface WebRequestBeforeRequestEvent extends chrome.events.Event { 
        addListener(callback: (details: OnBeforeRequestDetails) => void): void;
    }

    declare var MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

    export function handlerBehaviorChanged(callback?: Function): void;
    
    declare var onCompleted: WebRequestCompletedEvent;
    declare var onHeadersReceived: WebRequestHeadersReceivedEvent;
    declare var onBeforeRedirect: WebRequestBeforeRedirectEvent;
    declare var onAuthRequired: WebRequestAuthRequiredEvent;
    declare var onBeforeSendHeaders: WebRequestBeforeSendHeadersEvent;
    declare var onErrorOccurred: WebRequestErrorOccurredEvent;
    declare var onResponseStarted: WebRequestResponseStartedEvent;
    declare var onSendHeaders: WebRequestSendHeadersEvent;
    declare var onBeforeRequest: WebRequestBeforeRequestEvent;
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
        focused: bool;
        alwaysOnTop: bool;
        incognito: bool;
        type: string;
        id: number;
        left: number;
    }

    interface GetInfo {
        populate?: bool;
    }

    interface CreateData {
        tabId?: number;
        url?: string;
        top?: number;
        height?: number;
        width?: number;
        focused?: bool;
        incognito?: bool;
        type?: string;
        left?: number;
    }

    interface UpdateInfo {
        top?: number;
        drawAttention?: bool;
        height?: number;
        width?: number;
        state?: string;
        focused?: bool;
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

    declare var WINDOW_ID_CURRENT: number;
    declare var WINDOW_ID_NONE: number;

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

    declare var onRemoved: WindowRemovedEvent;
    declare var onCreated: WindowCreatedEvent;
    declare var onFocusChanged: WindowFocusChangedEvent;
}
