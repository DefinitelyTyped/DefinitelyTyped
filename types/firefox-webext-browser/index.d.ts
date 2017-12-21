// Type definitions for WebExtension Development in FireFox 58.0
// Project: https://developer.mozilla.org/en-US/Add-ons/WebExtensions
// Definitions by: Jacob Bom <https://github.com/bomjacob>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
// Generated using script at github.com/bomjacob/definitelytyped-firefox-webext-browser

interface WebExtEventListener<T extends (...args: any[]) => any> {
    addListener: (callback: T) => void;
    removeListener: (listener: T) => void;
    hasListener: (listener: T) => boolean;
}

interface Window {
    browser: typeof browser;
}

declare namespace browser.alarms {
    /* alarms types */
    interface Alarm {
        name: string;
        scheduledTime: number;
        periodInMinutes?: number;
    }

    /* alarms functions */
    function create(alarmInfo: {
        when?: number;
        delayInMinutes?: number;
        periodInMinutes?: number;
    }): void;
    function create(name: string, alarmInfo: {
        when?: number;
        delayInMinutes?: number;
        periodInMinutes?: number;
    }): void;

    function get(name?: string): Promise<Alarm>;

    function getAll(): Promise<Alarm[]>;

    function clear(name?: string): Promise<boolean>;

    function clearAll(): Promise<boolean>;

    /* alarms events */
    const onAlarm: WebExtEventListener<(name: Alarm) => void>;
}

declare namespace browser._manifest {
    /* _manifest types */
    type OptionalPermission = _OptionalPermission;

    type Permission = string | OptionalPermission | _Permission;

    interface ProtocolHandler {
        name: string;
        protocol: string | _ProtocolHandlerProtocol;
        uriTemplate: ExtensionURL | HttpURL;
    }

    interface WebExtensionManifest {
        protocol_handlers?: ProtocolHandler[];
        default_locale?: string;
        manifest_version: number;
        minimum_chrome_version?: string;
        minimum_opera_version?: string;
        applications?: {
            gecko?: FirefoxSpecificProperties;
        };
        browser_specific_settings?: {
            gecko?: FirefoxSpecificProperties;
        };
        name: string;
        short_name?: string;
        description?: string;
        author?: string;
        version: string;
        homepage_url?: string;
        icons?: {
            [key: number]: string;
        };
        incognito?: _WebExtensionManifestIncognito;
        background?: {
            page: ExtensionURL;
            persistent?: PersistentBackgroundProperty;
        } | {
            scripts: ExtensionURL[];
            persistent?: PersistentBackgroundProperty;
        };
        options_ui?: {
            page: ExtensionURL;
            browser_style?: boolean;
            chrome_style?: boolean;
            open_in_tab?: boolean;
        };
        content_scripts?: ContentScript[];
        content_security_policy?: string;
        permissions?: PermissionOrOrigin[];
        optional_permissions?: OptionalPermissionOrOrigin[];
        web_accessible_resources?: string[];
        developer?: {
            name?: string;
            url?: string;
        };
        theme?: ThemeType;
        browser_action?: {
            default_title?: string;
            default_icon?: IconPath;
            theme_icons?: ThemeIcons[];
            default_popup?: string;
            browser_style?: boolean;
            default_area?: _WebExtensionManifestBrowserActionDefaultArea;
        };
        chrome_settings_overrides?: {
            homepage?: string;
            search_provider?: {
                name: string;
                keyword?: string;
                search_url: string;
                favicon_url?: string;
                suggest_url?: string;
                instant_url?: string;
                image_url?: string;
                search_url_post_params?: string;
                instant_url_post_params?: string;
                image_url_post_params?: string;
                alternate_urls?: string[];
                prepopulated_id?: number;
                is_default?: boolean;
            };
        };
        commands?: {
            suggested_key?: {
                default?: KeyName;
                mac?: KeyName;
                linux?: KeyName;
                windows?: KeyName;
                chromeos?: string;
                android?: string;
                ios?: string;
                additionalProperties?: string;
            };
            description?: string;
        };
        devtools_page?: ExtensionURL;
        omnibox?: {
            keyword: string;
        };
        page_action?: {
            default_title?: string;
            default_icon?: IconPath;
            default_popup?: string;
            browser_style?: boolean;
        };
        sidebar_action?: {
            default_title?: string;
            default_icon?: IconPath;
            browser_style?: boolean;
            default_panel: string;
        };
        chrome_url_overrides?: {
            newtab?: ExtensionURL;
            bookmarks?: ExtensionURL;
            history?: ExtensionURL;
        };
    }

    interface ThemeIcons {
        light: ExtensionURL;
        dark: ExtensionURL;
        size: number;
    }

    type OptionalPermissionOrOrigin = OptionalPermission | MatchPattern;

    type PermissionOrOrigin = Permission | MatchPattern;

    type HttpURL = string;

    type ExtensionURL = string;

    type ImageDataOrExtensionURL = string;

    type ExtensionID = string;

    interface FirefoxSpecificProperties {
        id?: ExtensionID;
        update_url?: string;
        strict_min_version?: string;
        strict_max_version?: string;
    }

    type MatchPattern = string | _MatchPattern;

    type MatchPatternInternal = string | _MatchPatternInternal;

    interface ContentScript {
        matches: MatchPattern[];
        exclude_matches?: MatchPattern[];
        include_globs?: string[];
        exclude_globs?: string[];
        css?: ExtensionURL[];
        js?: ExtensionURL[];
        all_frames?: boolean;
        match_about_blank?: boolean;
        run_at?: extensionTypes.RunAt;
    }

    type IconPath = {
        [key: number]: ExtensionURL;
    } | ExtensionURL;

    type IconImageData = {
        [key: number]: ImageData;
    } | ImageData;

    type ImageData = any;

    type UnrecognizedProperty = any;

    type PersistentBackgroundProperty = boolean;

    interface ThemeType {
        images?: {
            additional_backgrounds?: ImageDataOrExtensionURL[];
            headerURL?: ImageDataOrExtensionURL;
            theme_frame?: ImageDataOrExtensionURL;
        };
        colors?: {
            accentcolor?: string;
            frame?: number[];
            tab_text?: number[];
            textcolor?: string;
            toolbar?: string;
            toolbar_text?: string;
            bookmark_text?: string;
            toolbar_field?: string;
            toolbar_field_text?: string;
            toolbar_top_separator?: string;
            toolbar_bottom_separator?: string;
            toolbar_vertical_separator?: string;
        };
        icons?: {
            back?: ExtensionURL;
            forward?: ExtensionURL;
            reload?: ExtensionURL;
            stop?: ExtensionURL;
            bookmark_star?: ExtensionURL;
            bookmark_menu?: ExtensionURL;
            downloads?: ExtensionURL;
            home?: ExtensionURL;
            app_menu?: ExtensionURL;
            cut?: ExtensionURL;
            copy?: ExtensionURL;
            paste?: ExtensionURL;
            new_window?: ExtensionURL;
            new_private_window?: ExtensionURL;
            save_page?: ExtensionURL;
            print?: ExtensionURL;
            history?: ExtensionURL;
            full_screen?: ExtensionURL;
            find?: ExtensionURL;
            options?: ExtensionURL;
            addons?: ExtensionURL;
            developer?: ExtensionURL;
            synced_tabs?: ExtensionURL;
            open_file?: ExtensionURL;
            sidebars?: ExtensionURL;
            subscribe?: ExtensionURL;
            text_encoding?: ExtensionURL;
            email_link?: ExtensionURL;
            forget?: ExtensionURL;
            pocket?: ExtensionURL;
            getmsg?: ExtensionURL;
            newmsg?: ExtensionURL;
            address?: ExtensionURL;
            reply?: ExtensionURL;
            replyall?: ExtensionURL;
            replylist?: ExtensionURL;
            forwarding?: ExtensionURL;
            delete?: ExtensionURL;
            junk?: ExtensionURL;
            file?: ExtensionURL;
            nextUnread?: ExtensionURL;
            prevUnread?: ExtensionURL;
            mark?: ExtensionURL;
            tag?: ExtensionURL;
            compact?: ExtensionURL;
            archive?: ExtensionURL;
            chat?: ExtensionURL;
            nextMsg?: ExtensionURL;
            prevMsg?: ExtensionURL;
            QFB?: ExtensionURL;
            conversation?: ExtensionURL;
            newcard?: ExtensionURL;
            newlist?: ExtensionURL;
            editcard?: ExtensionURL;
            newim?: ExtensionURL;
            send?: ExtensionURL;
            spelling?: ExtensionURL;
            attach?: ExtensionURL;
            security?: ExtensionURL;
            save?: ExtensionURL;
            quote?: ExtensionURL;
            buddy?: ExtensionURL;
            join_chat?: ExtensionURL;
            chat_accounts?: ExtensionURL;
            calendar?: ExtensionURL;
            tasks?: ExtensionURL;
            synchronize?: ExtensionURL;
            newevent?: ExtensionURL;
            newtask?: ExtensionURL;
            editevent?: ExtensionURL;
            today?: ExtensionURL;
            category?: ExtensionURL;
            complete?: ExtensionURL;
            priority?: ExtensionURL;
            saveandclose?: ExtensionURL;
            attendees?: ExtensionURL;
            privacy?: ExtensionURL;
            status?: ExtensionURL;
            freebusy?: ExtensionURL;
            timezones?: ExtensionURL;
        };
        properties?: {
            additional_backgrounds_alignment?: _ThemeTypeAdditionalBackgroundsAlignment[];
            additional_backgrounds_tiling?: _ThemeTypeAdditionalBackgroundsTiling[];
        };
    }

    type KeyName = string;

    enum _OptionalPermission {
        browserSettings = "browserSettings",
        cookies = "cookies",
        clipboardRead = "clipboardRead",
        clipboardWrite = "clipboardWrite",
        geolocation = "geolocation",
        idle = "idle",
        notifications = "notifications",
        topSites = "topSites",
        webNavigation = "webNavigation",
        webRequest = "webRequest",
        webRequestBlocking = "webRequestBlocking",
        bookmarks = "bookmarks",
        find = "find",
        history = "history",
        activeTab = "activeTab",
        tabs = "tabs"
    }

    enum _Permission {
        contextualIdentities = "contextualIdentities",
        downloads = "downloads",
        downloadsopen = "downloads.open",
        identity = "identity",
        management = "management",
        alarms = "alarms",
        mozillaAddons = "mozillaAddons",
        storage = "storage",
        unlimitedStorage = "unlimitedStorage",
        privacy = "privacy",
        proxy = "proxy",
        nativeMessaging = "nativeMessaging",
        theme = "theme",
        browsingData = "browsingData",
        devtools = "devtools",
        geckoProfiler = "geckoProfiler",
        menus = "menus",
        contextMenus = "contextMenus",
        pkcs11 = "pkcs11",
        sessions = "sessions"
    }

    enum _ProtocolHandlerProtocol {
        bitcoin = "bitcoin",
        geo = "geo",
        gopher = "gopher",
        im = "im",
        irc = "irc",
        ircs = "ircs",
        magnet = "magnet",
        mailto = "mailto",
        mms = "mms",
        news = "news",
        nntp = "nntp",
        sip = "sip",
        sms = "sms",
        smsto = "smsto",
        ssh = "ssh",
        tel = "tel",
        urn = "urn",
        webcal = "webcal",
        wtai = "wtai",
        xmpp = "xmpp"
    }

    enum _WebExtensionManifestIncognito {
        spanning = "spanning"
    }

    enum _WebExtensionManifestBrowserActionDefaultArea {
        navbar = "navbar",
        menupanel = "menupanel",
        tabstrip = "tabstrip",
        personaltoolbar = "personaltoolbar"
    }

    enum _MatchPattern {
        all_urls = "<all_urls>"
    }

    enum _MatchPatternInternal {
        all_urls = "<all_urls>"
    }

    enum _ThemeTypeAdditionalBackgroundsAlignment {
        bottom = "bottom",
        center = "center",
        left = "left",
        right = "right",
        top = "top",
        centerbottom = "center bottom",
        centercenter = "center center",
        centertop = "center top",
        leftbottom = "left bottom",
        leftcenter = "left center",
        lefttop = "left top",
        rightbottom = "right bottom",
        rightcenter = "right center",
        righttop = "right top"
    }

    enum _ThemeTypeAdditionalBackgroundsTiling {
        norepeat = "no-repeat",
        repeat = "repeat",
        repeatx = "repeat-x",
        repeaty = "repeat-y"
    }
}

declare namespace browser.browserSettings {
    /* browserSettings types */
    enum ImageAnimationBehavior {
        normal = "normal",
        none = "none",
        once = "once"
    }

    /* browserSettings properties */
    const allowPopupsForUserEvents: types.Setting;

    const cacheEnabled: types.Setting;

    const homepageOverride: types.Setting;

    const imageAnimationBehavior: types.Setting;

    const newTabPageOverride: types.Setting;

    const webNotificationsDisabled: types.Setting;
}

declare namespace browser.clipboard {
    type ArrayBuffer = any;

    enum _SetImageData {
        jpeg = "jpeg",
        png = "png"
    }

    /* clipboard functions */
    function setImageData(imageData: ArrayBuffer, imageType: _SetImageData): void;
}

declare namespace browser.contextualIdentities {
    /* contextualIdentities types */
    interface ContextualIdentity {
        name: string;
        icon: string;
        iconUrl: string;
        color: string;
        colorCode: string;
        cookieStoreId: string;
    }

    /* contextualIdentities functions */
    function get(cookieStoreId: string): void;

    function query(details: {
        name?: string;
    }): void;

    function create(details: {
        name: string;
        color: string;
        icon: string;
    }): void;

    function update(cookieStoreId: string, details: {
        name?: string;
        color?: string;
        icon?: string;
    }): void;

    function remove(cookieStoreId: string): void;

    /* contextualIdentities events */
    const onUpdated: WebExtEventListener<(changeInfo: {
        contextualIdentity: ContextualIdentity;
    }) => void>;

    const onCreated: WebExtEventListener<(changeInfo: {
        contextualIdentity: ContextualIdentity;
    }) => void>;

    const onRemoved: WebExtEventListener<(changeInfo: {
        contextualIdentity: ContextualIdentity;
    }) => void>;
}

declare namespace browser.cookies {
    /* cookies types */
    interface Cookie {
        name: string;
        value: string;
        domain: string;
        hostOnly: boolean;
        path: string;
        secure: boolean;
        httpOnly: boolean;
        session: boolean;
        expirationDate?: number;
        storeId: string;
    }

    interface CookieStore {
        id: string;
        tabIds: number[];
        incognito: boolean;
    }

    enum OnChangedCause {
        evicted = "evicted",
        expired = "expired",
        explicit = "explicit",
        expired_overwrite = "expired_overwrite",
        overwrite = "overwrite"
    }

    /* cookies functions */
    function get(details: {
        url: string;
        name: string;
        storeId?: string;
    }): Promise<Cookie>;

    function getAll(details: {
        url?: string;
        name?: string;
        domain?: string;
        path?: string;
        secure?: boolean;
        session?: boolean;
        storeId?: string;
    }): Promise<Cookie[]>;

    function set(details: {
        url: string;
        name?: string;
        value?: string;
        domain?: string;
        path?: string;
        secure?: boolean;
        httpOnly?: boolean;
        expirationDate?: number;
        storeId?: string;
    }): Promise<Cookie>;

    function remove(details: {
        url: string;
        name: string;
        storeId?: string;
    }): Promise<{
        url: string;
        name: string;
        storeId: string;
    }>;

    function getAllCookieStores(): Promise<CookieStore[]>;

    /* cookies events */
    const onChanged: WebExtEventListener<(changeInfo: {
        removed: boolean;
        cookie: Cookie;
        cause: OnChangedCause;
    }) => void>;
}

declare namespace browser.downloads {
    /* downloads types */
    enum FilenameConflictAction {
        uniquify = "uniquify",
        overwrite = "overwrite",
        prompt = "prompt"
    }

    enum InterruptReason {
        FILE_FAILED = "FILE_FAILED",
        FILE_ACCESS_DENIED = "FILE_ACCESS_DENIED",
        FILE_NO_SPACE = "FILE_NO_SPACE",
        FILE_NAME_TOO_LONG = "FILE_NAME_TOO_LONG",
        FILE_TOO_LARGE = "FILE_TOO_LARGE",
        FILE_VIRUS_INFECTED = "FILE_VIRUS_INFECTED",
        FILE_TRANSIENT_ERROR = "FILE_TRANSIENT_ERROR",
        FILE_BLOCKED = "FILE_BLOCKED",
        FILE_SECURITY_CHECK_FAILED = "FILE_SECURITY_CHECK_FAILED",
        FILE_TOO_SHORT = "FILE_TOO_SHORT",
        NETWORK_FAILED = "NETWORK_FAILED",
        NETWORK_TIMEOUT = "NETWORK_TIMEOUT",
        NETWORK_DISCONNECTED = "NETWORK_DISCONNECTED",
        NETWORK_SERVER_DOWN = "NETWORK_SERVER_DOWN",
        NETWORK_INVALID_REQUEST = "NETWORK_INVALID_REQUEST",
        SERVER_FAILED = "SERVER_FAILED",
        SERVER_NO_RANGE = "SERVER_NO_RANGE",
        SERVER_BAD_CONTENT = "SERVER_BAD_CONTENT",
        SERVER_UNAUTHORIZED = "SERVER_UNAUTHORIZED",
        SERVER_CERT_PROBLEM = "SERVER_CERT_PROBLEM",
        SERVER_FORBIDDEN = "SERVER_FORBIDDEN",
        USER_CANCELED = "USER_CANCELED",
        USER_SHUTDOWN = "USER_SHUTDOWN",
        CRASH = "CRASH"
    }

    enum DangerType {
        file = "file",
        url = "url",
        content = "content",
        uncommon = "uncommon",
        host = "host",
        unwanted = "unwanted",
        safe = "safe",
        accepted = "accepted"
    }

    enum State {
        in_progress = "in_progress",
        interrupted = "interrupted",
        complete = "complete"
    }

    interface DownloadItem {
        id: number;
        url: string;
        referrer?: string;
        filename: string;
        incognito: boolean;
        danger: DangerType;
        mime: string;
        startTime: string;
        endTime?: string;
        estimatedEndTime?: string;
        state: State;
        paused: boolean;
        canResume: boolean;
        error?: InterruptReason;
        bytesReceived: number;
        totalBytes: number;
        fileSize: number;
        exists: boolean;
        byExtensionId?: string;
        byExtensionName?: string;
    }

    interface StringDelta {
        current?: string;
        previous?: string;
    }

    interface DoubleDelta {
        current?: number;
        previous?: number;
    }

    interface BooleanDelta {
        current?: boolean;
        previous?: boolean;
    }

    type DownloadTime = string | extensionTypes.Date;

    interface DownloadQuery {
        query?: string[];
        startedBefore?: DownloadTime;
        startedAfter?: DownloadTime;
        endedBefore?: DownloadTime;
        endedAfter?: DownloadTime;
        totalBytesGreater?: number;
        totalBytesLess?: number;
        filenameRegex?: string;
        urlRegex?: string;
        limit?: number;
        orderBy?: string[];
        id?: number;
        url?: string;
        filename?: string;
        danger?: DangerType;
        mime?: string;
        startTime?: string;
        endTime?: string;
        state?: State;
        paused?: boolean;
        error?: InterruptReason;
        bytesReceived?: number;
        totalBytes?: number;
        fileSize?: number;
        exists?: boolean;
    }

    enum _DownloadMethod {
        GET = "GET",
        POST = "POST"
    }

    /* downloads functions */
    function download(options: {
        url: string;
        filename?: string;
        incognito?: boolean;
        conflictAction?: FilenameConflictAction;
        saveAs?: boolean;
        method?: _DownloadMethod;
        headers?: Array<{
            name: string;
            value: string;
        }>;
        body?: string;
    }): Promise<number>;

    function search(query: DownloadQuery): Promise<DownloadItem[]>;

    function pause(downloadId: number): Promise<void>;

    function resume(downloadId: number): Promise<void>;

    function cancel(downloadId: number): Promise<void>;

    function getFileIcon(downloadId: number, options?: {
        size?: number;
    }): Promise<string>;

    function open(downloadId: number): Promise<void>;

    function show(downloadId: number): Promise<boolean>;

    function showDefaultFolder(): void;

    function erase(query: DownloadQuery): Promise<number[]>;

    function removeFile(downloadId: number): Promise<void>;

    const acceptDanger: ((downloadId: number) => void) | undefined;

    const drag: ((downloadId: number) => void) | undefined;

    const setShelfEnabled: ((enabled: boolean) => void) | undefined;

    /* downloads events */
    const onCreated: WebExtEventListener<(downloadItem: DownloadItem) => void>;

    const onErased: WebExtEventListener<(downloadId: number) => void>;

    const onChanged: WebExtEventListener<(downloadDelta: {
        id: number;
        url?: StringDelta;
        filename?: StringDelta;
        danger?: StringDelta;
        mime?: StringDelta;
        startTime?: StringDelta;
        endTime?: StringDelta;
        state?: StringDelta;
        canResume?: BooleanDelta;
        paused?: BooleanDelta;
        error?: StringDelta;
        totalBytes?: DoubleDelta;
        fileSize?: DoubleDelta;
        exists?: BooleanDelta;
    }) => void>;
}

declare namespace browser.events {
    /* events types */
    interface Rule {
        id?: string;
        tags?: string[];
        conditions: any[];
        actions: any[];
        priority?: number;
    }

    class Event {
        addListener(): void;

        removeListener(): void;

        hasListener(): boolean;

        hasListeners(): boolean;

        addRules?(eventName: string, webViewInstanceId: number, rules: Rule[]): void;

        getRules?(eventName: string, webViewInstanceId: number, ruleIdentifiers?: string[]): void;

        removeRules?(eventName: string, webViewInstanceId: number, ruleIdentifiers?: string[]): void;
    }

    interface UrlFilter {
        hostContains?: string;
        hostEquals?: string;
        hostPrefix?: string;
        hostSuffix?: string;
        pathContains?: string;
        pathEquals?: string;
        pathPrefix?: string;
        pathSuffix?: string;
        queryContains?: string;
        queryEquals?: string;
        queryPrefix?: string;
        querySuffix?: string;
        urlContains?: string;
        urlEquals?: string;
        urlMatches?: string;
        originAndPathMatches?: string;
        urlPrefix?: string;
        urlSuffix?: string;
        schemes?: string[];
        ports?: Array<number | [number, number]>;
    }
}

declare namespace browser.extension {
    /* extension types */
    enum ViewType {
        tab = "tab",
        popup = "popup",
        sidebar = "sidebar"
    }

    /* extension properties */
    const lastError: {
        message: string;
    } | undefined;

    const inIncognitoContext: boolean | undefined;

    /* extension functions */
    function getURL(path: string): string;

    function getViews(fetchProperties?: {
        type?: ViewType;
        windowId?: number;
        tabId?: number;
    }): Window[];

    function getBackgroundPage(): Window;

    function isAllowedIncognitoAccess(): Promise<boolean>;

    function isAllowedFileSchemeAccess(): Promise<boolean>;

    const setUpdateUrlData: ((data: string) => void) | undefined;

    /* extension events */
    const onRequest: WebExtEventListener<(request: any, sender: runtime.MessageSender, sendResponse: () => void) => void>
        | WebExtEventListener<(sender: runtime.MessageSender, sendResponse: () => void) => void> | undefined;

    const onRequestExternal: WebExtEventListener<(request: any, sender: runtime.MessageSender, sendResponse: () => void) => void>
        | WebExtEventListener<(sender: runtime.MessageSender, sendResponse: () => void) => void> | undefined;
}

declare namespace browser.extensionTypes {
    /* extensionTypes types */
    enum ImageFormat {
        jpeg = "jpeg",
        png = "png"
    }

    interface ImageDetails {
        format?: ImageFormat;
        quality?: number;
    }

    enum RunAt {
        document_start = "document_start",
        document_end = "document_end",
        document_idle = "document_idle"
    }

    enum CSSOrigin {
        user = "user",
        author = "author"
    }

    interface InjectDetails {
        code?: string;
        file?: string;
        allFrames?: boolean;
        matchAboutBlank?: boolean;
        frameId?: number;
        runAt?: RunAt;
        cssOrigin?: CSSOrigin;
    }

    type Date = string | number | object/*Date*/;
}

declare namespace browser.i18n {
    /* i18n types */
    type LanguageCode = string;

    /* i18n functions */
    function getAcceptLanguages(): Promise<LanguageCode[]>;

    function getMessage(messageName: string, substitutions?: any): string;

    function getUILanguage(): string;

    function detectLanguage(text: string): Promise<{
        isReliable: boolean;
        languages: Array<{
            language: LanguageCode;
            percentage: number;
        }>;
    }>;
}

declare namespace browser.identity {
    /* identity types */
    interface AccountInfo {
        id: string;
    }

    /* identity functions */
    const getAccounts: (() => Promise<AccountInfo[]>) | undefined;

    const getAuthToken: ((details?: {
        interactive?: boolean;
        account?: AccountInfo;
        scopes?: string[];
    }) => Promise<AccountInfo[]>) | undefined;

    const getProfileUserInfo: (() => Promise<{
        email: string;
        id: string;
    }>) | undefined;

    const removeCachedAuthToken: ((details: {
        token: string;
    }) => Promise<{
        email: string;
        id: string;
    }>) | undefined;

    function launchWebAuthFlow(details: {
        url: string;
        interactive?: boolean;
    }): Promise<string>;

    function getRedirectURL(path?: string): string;

    /* identity events */
    const onSignInChanged: WebExtEventListener<(account: AccountInfo, signedIn: boolean) => void> | undefined;
}

declare namespace browser.idle {
    /* idle types */
    enum IdleState {
        active = "active",
        idle = "idle"
    }

    /* idle functions */
    function queryState(detectionIntervalInSeconds: number): Promise<IdleState>;

    function setDetectionInterval(intervalInSeconds: number): void;

    /* idle events */
    const onStateChanged: WebExtEventListener<(newState: IdleState) => void>;
}

declare namespace browser.management {
    /* management types */
    interface IconInfo {
        size: number;
        url: string;
    }

    enum ExtensionDisabledReason {
        unknown = "unknown",
        permissions_increase = "permissions_increase"
    }

    enum ExtensionType {
        extension = "extension",
        theme = "theme"
    }

    enum ExtensionInstallType {
        development = "development",
        normal = "normal",
        sideload = "sideload",
        other = "other"
    }

    interface ExtensionInfo {
        id: string;
        name: string;
        shortName?: string;
        description: string;
        version: string;
        versionName?: string;
        mayDisable: boolean;
        enabled: boolean;
        disabledReason?: ExtensionDisabledReason;
        type: ExtensionType;
        homepageUrl?: string;
        updateUrl?: string;
        optionsUrl: string;
        icons?: IconInfo[];
        permissions?: string[];
        hostPermissions?: string[];
        installType: ExtensionInstallType;
    }

    /* management functions */
    function getAll(): Promise<ExtensionInfo[]>;

    function get(id: _manifest.ExtensionID): Promise<ExtensionInfo>;

    function getSelf(): Promise<ExtensionInfo>;

    function uninstallSelf(options?: {
        showConfirmDialog?: boolean;
        dialogMessage?: string;
    }): Promise<void>;

    function setEnabled(id: string, enabled: boolean): Promise<void>;

    /* management events */
    const onDisabled: WebExtEventListener<(info: ExtensionInfo) => void>;

    const onEnabled: WebExtEventListener<(info: ExtensionInfo) => void>;

    const onInstalled: WebExtEventListener<(info: ExtensionInfo) => void>;

    const onUninstalled: WebExtEventListener<(info: ExtensionInfo) => void>;
}

declare namespace browser.notifications {
    /* notifications types */
    enum TemplateType {
        basic = "basic",
        image = "image",
        list = "list",
        progress = "progress"
    }

    enum PermissionLevel {
        granted = "granted",
        denied = "denied"
    }

    interface NotificationItem {
        title: string;
        message: string;
    }

    interface CreateNotificationOptions {
        type: TemplateType;
        iconUrl?: string;
        appIconMaskUrl?: string;
        title: string;
        message: string;
        contextMessage?: string;
        priority?: number;
        eventTime?: number;
        buttons?: Array<{
            title: string;
            iconUrl?: string;
        }>;
        imageUrl?: string;
        items?: NotificationItem[];
        progress?: number;
        isClickable?: boolean;
    }

    interface UpdateNotificationOptions {
        type?: TemplateType;
        iconUrl?: string;
        appIconMaskUrl?: string;
        title?: string;
        message?: string;
        contextMessage?: string;
        priority?: number;
        eventTime?: number;
        buttons?: Array<{
            title: string;
            iconUrl?: string;
        }>;
        imageUrl?: string;
        items?: NotificationItem[];
        progress?: number;
        isClickable?: boolean;
    }

    /* notifications functions */
    function create(options: CreateNotificationOptions): Promise<string>;
    function create(notificationId: string, options: CreateNotificationOptions): Promise<string>;

    const update: ((notificationId: string, options: UpdateNotificationOptions) => Promise<boolean>) | undefined;

    function clear(notificationId: string): Promise<boolean>;

    function getAll(): Promise<CreateNotificationOptions>;

    const getPermissionLevel: (() => Promise<PermissionLevel>) | undefined;

    /* notifications events */
    const onClosed: WebExtEventListener<(notificationId: string, byUser: boolean) => void>;

    const onClicked: WebExtEventListener<(notificationId: string) => void>;

    const onButtonClicked: WebExtEventListener<(notificationId: string, buttonIndex: number) => void>;

    const onPermissionLevelChanged: WebExtEventListener<(level: PermissionLevel) => void> | undefined;

    const onShowSettings: WebExtEventListener<() => void> | undefined;

    const onShown: WebExtEventListener<(notificationId: string) => void>;
}

declare namespace browser.permissions {
    /* permissions types */
    interface Permissions {
        permissions?: _manifest.OptionalPermission[];
        origins?: _manifest.MatchPattern[];
    }

    interface AnyPermissions {
        permissions?: _manifest.Permission[];
        origins?: _manifest.MatchPatternInternal[];
    }

    /* permissions functions */
    function getAll(): Promise<AnyPermissions>;

    function contains(permissions: AnyPermissions): Promise<boolean>;

    function request(permissions: Permissions): Promise<boolean>;

    function remove(permissions: Permissions): Promise<void>;

    /* permissions events */
    const onAdded: WebExtEventListener<(permissions: Permissions) => void> | undefined;

    const onRemoved: WebExtEventListener<(permissions: Permissions) => void> | undefined;
}

declare namespace browser.privacy {
}

declare namespace browser.privacy.network {
    /* privacy.network types */
    enum IPHandlingPolicy {
        default = "default",
        default_public_and_private_interfaces = "default_public_and_private_interfaces",
        default_public_interface_only = "default_public_interface_only",
        disable_non_proxied_udp = "disable_non_proxied_udp"
    }

    /* privacy.network properties */
    const networkPredictionEnabled: types.Setting;

    const peerConnectionEnabled: types.Setting;

    const webRTCIPHandlingPolicy: types.Setting;
}

declare namespace browser.privacy.services {
    /* privacy.services properties */
    const passwordSavingEnabled: types.Setting;
}

declare namespace browser.privacy.websites {
    /* privacy.websites types */
    enum TrackingProtectionModeOption {
        always = "always",
        never = "never",
        private_browsing = "private_browsing"
    }

    /* privacy.websites properties */
    const thirdPartyCookiesAllowed: types.Setting | undefined;

    const hyperlinkAuditingEnabled: types.Setting;

    const referrersEnabled: types.Setting;

    const resistFingerprinting: types.Setting;

    const firstPartyIsolate: types.Setting;

    const protectedContentEnabled: types.Setting | undefined;

    const trackingProtectionMode: types.Setting;
}

declare namespace browser.proxy {
    /* proxy functions */
    function register(url: string): void;

    function unregister(): void;

    function registerProxyScript(url: string): void;

    /* proxy events */
    const onProxyError: WebExtEventListener<(error: object) => void>;
}

declare namespace browser.runtime {
    /* runtime types */
    interface Port {
        name: string;
        disconnect: () => void;
        onDisconnect: events.Event;
        onMessage: events.Event;
        postMessage: () => void;
        sender?: MessageSender;
    }

    interface MessageSender {
        tab?: tabs.Tab;
        frameId?: number;
        id?: string;
        url?: string;
        tlsChannelId?: string;
    }

    enum PlatformOs {
        mac = "mac",
        win = "win",
        android = "android",
        cros = "cros",
        linux = "linux",
        openbsd = "openbsd"
    }

    enum PlatformArch {
        arm = "arm",
        x8632 = "x86-32",
        x8664 = "x86-64"
    }

    interface PlatformInfo {
        os: PlatformOs;
        arch: PlatformArch;
        nacl_arch?: PlatformNaclArch;
    }

    interface BrowserInfo {
        name: string;
        vendor: string;
        version: string;
        buildID: string;
    }

    enum RequestUpdateCheckStatus {
        throttled = "throttled",
        no_update = "no_update",
        update_available = "update_available"
    }

    enum OnInstalledReason {
        install = "install",
        update = "update",
        browser_update = "browser_update"
    }

    enum OnRestartRequiredReason {
        app_update = "app_update",
        os_update = "os_update",
        periodic = "periodic"
    }

    type PlatformNaclArch = any;

    /* runtime properties */
    const lastError: {
        message?: string;
    } | undefined;

    const id: string;

    /* runtime functions */
    function getBackgroundPage(): Promise<Window>;

    function openOptionsPage(): Promise<void>;

    function getManifest(): _manifest.WebExtensionManifest;

    function getURL(path: string): string;

    function setUninstallURL(url: string): Promise<void>;

    function reload(): void;

    const requestUpdateCheck: (() => Promise<object>) | undefined;

    const restart: (() => void) | undefined;

    function connect(connectInfo?: {
        name?: string;
        includeTlsChannelId?: boolean;
    }): Port;
    function connect(extensionId: string, connectInfo?: {
        name?: string;
        includeTlsChannelId?: boolean;
    }): Port;

    function connectNative(application: string): Port;

    function sendMessage(message: any, options?: {
        includeTlsChannelId?: boolean;
        toProxyScript?: boolean;
    }, responseCallback?: (response: any) => void): void;
    function sendMessage(extensionId: string, message: any, options: {
        includeTlsChannelId?: boolean;
        toProxyScript?: boolean;
    }, responseCallback?: (response: any) => void): void;

    function sendNativeMessage(application: string, message: any, responseCallback?: (response: any) => void): void;

    function getBrowserInfo(): Promise<BrowserInfo>;

    function getPlatformInfo(): Promise<PlatformInfo>;

    const getPackageDirectoryEntry: (() => Promise<object/*DirectoryEntry*/>) | undefined;

    /* runtime events */
    const onStartup: WebExtEventListener<() => void>;

    const onInstalled: WebExtEventListener<(details: {
        reason: OnInstalledReason;
        previousVersion?: string;
        temporary: boolean;
        id?: string;
    }) => void>;

    const onSuspend: WebExtEventListener<() => void> | undefined;

    const onSuspendCanceled: WebExtEventListener<() => void> | undefined;

    const onUpdateAvailable: WebExtEventListener<(details: {
        version: string;
    }) => void>;

    const onBrowserUpdateAvailable: WebExtEventListener<() => void> | undefined;

    const onConnect: WebExtEventListener<(port: Port) => void>;

    const onConnectExternal: WebExtEventListener<(port: Port) => void>;

    const onMessage: WebExtEventListener<(message: any, sender: MessageSender, sendResponse: () => void) => boolean>
        | WebExtEventListener<(sender: MessageSender, sendResponse: () => void) => boolean>;

    const onMessageExternal: WebExtEventListener<(message: any, sender: MessageSender, sendResponse: () => void) => boolean>
        | WebExtEventListener<(sender: MessageSender, sendResponse: () => void) => boolean>;

    const onRestartRequired: WebExtEventListener<(reason: OnRestartRequiredReason) => void> | undefined;
}

declare namespace browser.storage {
    /* storage types */
    interface StorageChange {
        oldValue?: any;
        newValue?: any;
    }

    class StorageArea {
        get(keys?: string | string[] | object): Promise<any>;

        getBytesInUse?(keys?: string | string[]): Promise<number>;

        set(items: any): Promise<void>;

        remove(keys: string | string[]): Promise<void>;

        clear(): Promise<void>;
    }

    /* storage properties */
    const sync: StorageArea;

    const local: StorageArea;

    const managed: StorageArea;

    /* storage events */
    const onChanged: WebExtEventListener<(changes: StorageChange, areaName: string) => void>;
}

declare namespace browser.theme {
    /* theme types */
    interface ThemeUpdateInfo {
        theme: object;
        windowId?: number;
    }

    /* theme functions */
    function getCurrent(windowId?: number): void;

    function update(details: _manifest.ThemeType): void;
    function update(windowId: number, details: _manifest.ThemeType): void;

    function reset(windowId?: number): void;

    /* theme events */
    const onUpdated: WebExtEventListener<(updateInfo: ThemeUpdateInfo) => void>;
}

declare namespace browser.topSites {
    /* topSites types */
    interface MostVisitedURL {
        url: string;
        title?: string;
    }

    /* topSites functions */
    function get(options?: {
        providers?: string[];
    }): Promise<MostVisitedURL[]>;
}

declare namespace browser.types {
    /* types types */
    enum SettingScope {
        regular = "regular",
        regular_only = "regular_only",
        incognito_persistent = "incognito_persistent",
        incognito_session_only = "incognito_session_only"
    }

    enum LevelOfControl {
        not_controllable = "not_controllable",
        controlled_by_other_extensions = "controlled_by_other_extensions",
        controllable_by_this_extension = "controllable_by_this_extension",
        controlled_by_this_extension = "controlled_by_this_extension"
    }

    class Setting {
        get(details: {
            incognito?: boolean;
        }): Promise<{
            value: any;
            levelOfControl: LevelOfControl;
            incognitoSpecific?: boolean;
        }>;

        set(details: {
            value: any;
            scope?: SettingScope;
        }): Promise<void>;

        clear(details: {
            scope?: SettingScope;
        }): Promise<void>;

        onChange: WebExtEventListener<(details: {
            value: any;
            levelOfControl: LevelOfControl;
            incognitoSpecific?: boolean;
        }) => void>;
    }
}

declare namespace browser.webNavigation {
    /* webNavigation types */
    enum TransitionType {
        link = "link",
        typed = "typed",
        auto_bookmark = "auto_bookmark",
        auto_subframe = "auto_subframe",
        manual_subframe = "manual_subframe",
        generated = "generated",
        start_page = "start_page",
        form_submit = "form_submit",
        reload = "reload",
        keyword = "keyword",
        keyword_generated = "keyword_generated"
    }

    enum TransitionQualifier {
        client_redirect = "client_redirect",
        server_redirect = "server_redirect",
        forward_back = "forward_back",
        from_address_bar = "from_address_bar"
    }

    interface EventUrlFilters {
        url: events.UrlFilter[];
    }

    /* webNavigation functions */
    function getFrame(details: {
        tabId: number;
        processId?: number;
        frameId: number;
    }): Promise<{
        errorOccurred?: boolean;
        url: string;
        tabId: number;
        frameId: number;
        parentFrameId: number;
    }>;

    function getAllFrames(details: {
        tabId: number;
    }): Promise<Array<{
        errorOccurred?: boolean;
        processId?: number;
        tabId: number;
        frameId: number;
        parentFrameId: number;
        url: string;
    }>>;

    /* webNavigation events */
    const onBeforeNavigate: WebExtEventListener<(details: {
        tabId: number;
        url: string;
        processId?: number;
        frameId: number;
        parentFrameId: number;
        timeStamp: number;
    }) => void>;

    const onCommitted: WebExtEventListener<(details: {
        tabId: number;
        url: string;
        processId?: number;
        frameId: number;
        transitionType?: TransitionType;
        transitionQualifiers?: TransitionQualifier[];
        timeStamp: number;
    }) => void>;

    const onDOMContentLoaded: WebExtEventListener<(details: {
        tabId: number;
        url: string;
        processId?: number;
        frameId: number;
        timeStamp: number;
    }) => void>;

    const onCompleted: WebExtEventListener<(details: {
        tabId: number;
        url: string;
        processId?: number;
        frameId: number;
        timeStamp: number;
    }) => void>;

    const onErrorOccurred: WebExtEventListener<(details: {
        tabId: number;
        url: string;
        processId?: number;
        frameId: number;
        error?: string;
        timeStamp: number;
    }) => void>;

    const onCreatedNavigationTarget: WebExtEventListener<(details: {
        sourceTabId: number;
        sourceProcessId: number;
        sourceFrameId: number;
        url: string;
        tabId: number;
        timeStamp: number;
    }) => void>;

    const onReferenceFragmentUpdated: WebExtEventListener<(details: {
        tabId: number;
        url: string;
        processId?: number;
        frameId: number;
        transitionType?: TransitionType;
        transitionQualifiers?: TransitionQualifier[];
        timeStamp: number;
    }) => void>;

    const onTabReplaced: WebExtEventListener<(details: {
        replacedTabId: number;
        tabId: number;
        timeStamp: number;
    }) => void>;

    const onHistoryStateUpdated: WebExtEventListener<(details: {
        tabId: number;
        url: string;
        processId?: number;
        frameId: number;
        transitionType?: TransitionType;
        transitionQualifiers?: TransitionQualifier[];
        timeStamp: number;
    }) => void>;
}

declare namespace browser.webRequest {
    /* webRequest types */
    enum ResourceType {
        main_frame = "main_frame",
        sub_frame = "sub_frame",
        stylesheet = "stylesheet",
        script = "script",
        image = "image",
        object = "object",
        object_subrequest = "object_subrequest",
        xmlhttprequest = "xmlhttprequest",
        xbl = "xbl",
        xslt = "xslt",
        ping = "ping",
        beacon = "beacon",
        xml_dtd = "xml_dtd",
        font = "font",
        media = "media",
        websocket = "websocket",
        csp_report = "csp_report",
        imageset = "imageset",
        web_manifest = "web_manifest",
        other = "other"
    }

    enum OnBeforeRequestOptions {
        blocking = "blocking",
        requestBody = "requestBody"
    }

    enum OnBeforeSendHeadersOptions {
        requestHeaders = "requestHeaders",
        blocking = "blocking"
    }

    enum OnSendHeadersOptions {
        requestHeaders = "requestHeaders"
    }

    enum OnHeadersReceivedOptions {
        blocking = "blocking",
        responseHeaders = "responseHeaders"
    }

    enum OnAuthRequiredOptions {
        responseHeaders = "responseHeaders",
        blocking = "blocking",
        asyncBlocking = "asyncBlocking"
    }

    enum OnResponseStartedOptions {
        responseHeaders = "responseHeaders"
    }

    enum OnBeforeRedirectOptions {
        responseHeaders = "responseHeaders"
    }

    enum OnCompletedOptions {
        responseHeaders = "responseHeaders"
    }

    interface RequestFilter {
        urls: string[];
        types?: ResourceType[];
        tabId?: number;
        windowId?: number;
    }

    type HttpHeaders = Array<{
        name: string;
        value?: string;
        binaryValue?: number[];
    }>;

    interface BlockingResponse {
        cancel?: boolean;
        redirectUrl?: string;
        requestHeaders?: HttpHeaders;
        responseHeaders?: HttpHeaders;
        authCredentials?: {
            username: string;
            password: string;
        };
    }

    interface UploadData {
        bytes?: any;
        file?: string;
    }

    /* webRequest properties */
    const MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

    /* webRequest functions */
    function handlerBehaviorChanged(): Promise<void>;

    function filterResponseData(requestId: string): object/*StreamFilter*/;

    /* webRequest events */
    const onBeforeRequest: WebExtEventListener<(details: {
        requestId: string;
        url: string;
        method: string;
        frameId: number;
        parentFrameId: number;
        originUrl?: string;
        documentUrl?: string;
        requestBody?: {
            error?: string;
            formData?: object;
            raw?: UploadData[];
        };
        tabId: number;
        type: ResourceType;
        timeStamp: number;
    }) => BlockingResponse>;

    const onBeforeSendHeaders: WebExtEventListener<(details: {
        requestId: string;
        url: string;
        method: string;
        frameId: number;
        parentFrameId: number;
        originUrl?: string;
        documentUrl?: string;
        tabId: number;
        type: ResourceType;
        timeStamp: number;
        requestHeaders?: HttpHeaders;
    }) => BlockingResponse>;

    const onSendHeaders: WebExtEventListener<(details: {
        requestId: string;
        url: string;
        method: string;
        frameId: number;
        parentFrameId: number;
        originUrl?: string;
        documentUrl?: string;
        tabId: number;
        type: ResourceType;
        timeStamp: number;
        requestHeaders?: HttpHeaders;
    }) => void>;

    const onHeadersReceived: WebExtEventListener<(details: {
        requestId: string;
        url: string;
        method: string;
        frameId: number;
        parentFrameId: number;
        originUrl?: string;
        documentUrl?: string;
        tabId: number;
        type: ResourceType;
        timeStamp: number;
        statusLine: string;
        responseHeaders?: HttpHeaders;
        statusCode: number;
    }) => BlockingResponse>;

    const onAuthRequired: WebExtEventListener<(details: {
        requestId: string;
        url: string;
        method: string;
        frameId: number;
        parentFrameId: number;
        originUrl?: string;
        documentUrl?: string;
        tabId: number;
        type: ResourceType;
        timeStamp: number;
        scheme: string;
        realm?: string;
        challenger: {
            host: string;
            port: number;
        };
        isProxy: boolean;
        responseHeaders?: HttpHeaders;
        statusLine: string;
        statusCode: number;
    }) => BlockingResponse>;

    const onResponseStarted: WebExtEventListener<(details: {
        requestId: string;
        url: string;
        method: string;
        frameId: number;
        parentFrameId: number;
        originUrl?: string;
        documentUrl?: string;
        tabId: number;
        type: ResourceType;
        timeStamp: number;
        ip?: string;
        fromCache: boolean;
        statusCode: number;
        responseHeaders?: HttpHeaders;
        statusLine: string;
    }) => void>;

    const onBeforeRedirect: WebExtEventListener<(details: {
        requestId: string;
        url: string;
        method: string;
        frameId: number;
        parentFrameId: number;
        originUrl?: string;
        documentUrl?: string;
        tabId: number;
        type: ResourceType;
        timeStamp: number;
        ip?: string;
        fromCache: boolean;
        statusCode: number;
        redirectUrl: string;
        responseHeaders?: HttpHeaders;
        statusLine: string;
    }) => void>;

    const onCompleted: WebExtEventListener<(details: {
        requestId: string;
        url: string;
        method: string;
        frameId: number;
        parentFrameId: number;
        originUrl?: string;
        documentUrl?: string;
        tabId: number;
        type: ResourceType;
        timeStamp: number;
        ip?: string;
        fromCache: boolean;
        statusCode: number;
        responseHeaders?: HttpHeaders;
        statusLine: string;
    }) => void>;

    const onErrorOccurred: WebExtEventListener<(details: {
        requestId: string;
        url: string;
        method: string;
        frameId: number;
        parentFrameId: number;
        originUrl?: string;
        documentUrl?: string;
        tabId: number;
        type: ResourceType;
        timeStamp: number;
        ip?: string;
        fromCache: boolean;
        error: string;
    }) => void>;
}

declare namespace browser.bookmarks {
    /* bookmarks types */
    enum BookmarkTreeNodeUnmodifiable {
        managed = "managed"
    }

    enum BookmarkTreeNodeType {
        bookmark = "bookmark",
        folder = "folder",
        separator = "separator"
    }

    interface BookmarkTreeNode {
        id: string;
        parentId?: string;
        index?: number;
        url?: string;
        title: string;
        dateAdded?: number;
        dateGroupModified?: number;
        unmodifiable?: BookmarkTreeNodeUnmodifiable;
        type?: BookmarkTreeNodeType;
        children?: BookmarkTreeNode[];
    }

    interface CreateDetails {
        parentId?: string;
        index?: number;
        title?: string;
        url?: string;
        type?: BookmarkTreeNodeType;
    }

    export {_import as import};

    export {_export as export};

    /* bookmarks functions */
    function get(idOrIdList: string | string[]): Promise<BookmarkTreeNode[]>;

    function getChildren(id: string): Promise<BookmarkTreeNode[]>;

    function getRecent(numberOfItems: number): Promise<BookmarkTreeNode[]>;

    function getTree(): Promise<BookmarkTreeNode[]>;

    function getSubTree(id: string): Promise<BookmarkTreeNode[]>;

    function search(query: string | {
        query?: string;
        url?: string;
        title?: string;
    }): Promise<BookmarkTreeNode[]>;

    function create(bookmark: CreateDetails): Promise<BookmarkTreeNode>;

    function move(id: string, destination: {
        parentId?: string;
        index?: number;
    }): Promise<BookmarkTreeNode>;

    function update(id: string, changes: {
        title?: string;
        url?: string;
    }): Promise<BookmarkTreeNode>;

    function remove(id: string): Promise<void>;

    function removeTree(id: string): Promise<void>;

    const _import: (() => Promise<void>) | undefined;

    const _export: (() => Promise<void>) | undefined;

    /* bookmarks events */
    const onCreated: WebExtEventListener<(id: string, bookmark: BookmarkTreeNode) => void>;

    const onRemoved: WebExtEventListener<(id: string, removeInfo: {
        parentId: string;
        index: number;
        node: BookmarkTreeNode;
    }) => void>;

    const onChanged: WebExtEventListener<(id: string, changeInfo: {
        title: string;
        url?: string;
    }) => void>;

    const onMoved: WebExtEventListener<(id: string, moveInfo: {
        parentId: string;
        index: number;
        oldParentId: string;
        oldIndex: number;
    }) => void>;

    const onChildrenReordered: WebExtEventListener<(id: string, reorderInfo: {
        childIds: string[];
    }) => void> | undefined;

    const onImportBegan: WebExtEventListener<() => void> | undefined;

    const onImportEnded: WebExtEventListener<() => void> | undefined;
}

declare namespace browser.browserAction {
    /* browserAction types */
    type ColorArray = [number, number, number, number];

    type ImageDataType = object/*ImageData*/;

    /* browserAction functions */
    function setTitle(details: {
        title: string;
        tabId?: number;
    }): Promise<void>;

    function getTitle(details: {
        tabId?: number;
    }): Promise<string>;

    function setIcon(details: {
        imageData?: ImageDataType | {
            [key: number]: ImageDataType;
        };
        path?: string | {
            [key: number]: string;
        };
        tabId?: number;
    }): Promise<void>;

    function setPopup(details: {
        tabId?: number;
        popup: string;
    }): Promise<void>;

    function getPopup(details: {
        tabId?: number;
    }): Promise<string>;

    function setBadgeText(details: {
        text: string;
        tabId?: number;
    }): Promise<void>;

    function getBadgeText(details: {
        tabId?: number;
    }): Promise<string>;

    function setBadgeBackgroundColor(details: {
        color: string | ColorArray;
        tabId?: number;
    }): Promise<void>;

    function getBadgeBackgroundColor(details: {
        tabId?: number;
    }): Promise<ColorArray>;

    function enable(tabId?: number): Promise<void>;

    function disable(tabId?: number): Promise<void>;

    function openPopup(): void;

    /* browserAction events */
    const onClicked: WebExtEventListener<(tab: tabs.Tab) => void>;
}

declare namespace browser.browsingData {
    /* browsingData types */
    interface RemovalOptions {
        since?: extensionTypes.Date;
        hostnames?: string[];
        originTypes?: {
            unprotectedWeb?: boolean;
            protectedWeb?: boolean;
            extension?: boolean;
        };
    }

    interface DataTypeSet {
        cache?: boolean;
        cookies?: boolean;
        downloads?: boolean;
        formData?: boolean;
        history?: boolean;
        indexedDB?: boolean;
        localStorage?: boolean;
        serverBoundCertificates?: boolean;
        passwords?: boolean;
        pluginData?: boolean;
        serviceWorkers?: boolean;
    }

    /* browsingData functions */
    function settings(): Promise<{
        options: RemovalOptions;
        dataToRemove: DataTypeSet;
        dataRemovalPermitted: DataTypeSet;
    }>;

    function remove(options: RemovalOptions, dataToRemove: DataTypeSet): Promise<void>;

    const removeAppcache: ((options: RemovalOptions) => Promise<void>) | undefined;

    function removeCache(options: RemovalOptions): Promise<void>;

    function removeCookies(options: RemovalOptions): Promise<void>;

    function removeDownloads(options: RemovalOptions): Promise<void>;

    const removeFileSystems: ((options: RemovalOptions) => Promise<void>) | undefined;

    function removeFormData(options: RemovalOptions): Promise<void>;

    function removeHistory(options: RemovalOptions): Promise<void>;

    const removeIndexedDB: ((options: RemovalOptions) => Promise<void>) | undefined;

    function removeLocalStorage(options: RemovalOptions): Promise<void>;

    function removePluginData(options: RemovalOptions): Promise<void>;

    function removePasswords(options: RemovalOptions): Promise<void>;

    const removeWebSQL: ((options: RemovalOptions) => Promise<void>) | undefined;
}

declare namespace browser.commands {
    /* commands types */
    interface Command {
        name?: string;
        description?: string;
        shortcut?: string;
    }

    /* commands functions */
    function getAll(): Promise<Command[]>;

    /* commands events */
    const onCommand: WebExtEventListener<(command: string) => void>;
}

declare namespace browser.devtools {
}

declare namespace browser.devtools.inspectedWindow {
    /* devtools.inspectedWindow types */
    class Resource {
        url: string;

        getContent?(): Promise<object>;

        setContent?(content: string, commit: boolean): Promise<any>;
    }

    /* devtools.inspectedWindow properties */
    const tabId: number;

    /* devtools.inspectedWindow functions */
    function eval(expression: string, options?: {
        frameURL?: string;
        useContentScriptContext?: boolean;
        contextSecurityOrigin?: string;
    }): Promise<object>;

    function reload(reloadOptions?: {
        ignoreCache?: boolean;
        userAgent?: string;
        injectedScript?: string;
        preprocessorScript?: string;
    }): void;

    const getResources: (() => Promise<Resource[]>) | undefined;

    /* devtools.inspectedWindow events */
    const onResourceAdded: WebExtEventListener<(resource: Resource) => void> | undefined;

    const onResourceContentCommitted: WebExtEventListener<(resource: Resource, content: string) => void> | undefined;
}

declare namespace browser.devtools.network {
    /* devtools.network types */
    class Request {
        getContent(): Promise<object>;
    }

    /* devtools.network functions */
    const getHAR: (() => Promise<any>) | undefined;

    /* devtools.network events */
    const onRequestFinished: WebExtEventListener<(request: Request) => void> | undefined;

    const onNavigated: WebExtEventListener<(url: string) => void>;
}

declare namespace browser.devtools.panels {
    /* devtools.panels types */
    class ElementsPanel {
        createSidebarPane(title: string): Promise<ExtensionSidebarPane>;

        onSelectionChanged: WebExtEventListener<() => void>;
    }

    class SourcesPanel {
        createSidebarPane?(title: string): void;

        onSelectionChanged: WebExtEventListener<() => void>;
    }

    class ExtensionPanel {
        createStatusBarButton?(iconPath: string, tooltipText: string, disabled: boolean): Button;

        onSearch: WebExtEventListener<(action: string, queryString?: string) => void>;
        onShown: WebExtEventListener<(window: object/*global*/) => void>;
        onHidden: WebExtEventListener<() => void>;
    }

    class ExtensionSidebarPane {
        setHeight?(height: string): void;

        setExpression(expression: string, rootTitle?: string): Promise<void>;

        setObject(jsonObject: string, rootTitle?: string): Promise<void>;

        setPage?(path: string): void;

        onShown: WebExtEventListener<(window: object/*global*/) => void>;
        onHidden: WebExtEventListener<() => void>;
    }

    class Button {
        update?(tooltipText?: string, disabled?: boolean): void;
        update?(disabled?: boolean): void;
        update?(iconPath: string, tooltipText: string, disabled?: boolean): void;

        onClicked: WebExtEventListener<() => void>;
    }

    /* devtools.panels properties */
    const elements: ElementsPanel;

    const sources: SourcesPanel;

    const themeName: string;

    /* devtools.panels functions */
    function create(title: string, iconPath: string, pagePath: string): Promise<ExtensionPanel>;

    const setOpenResourceHandler: (() => Promise<devtools.inspectedWindow.Resource>) | undefined;

    const openResource: ((url: string, lineNumber: number) => Promise<void>) | undefined;

    /* devtools.panels events */
    const onThemeChanged: WebExtEventListener<(themeName: string) => void>;
}

declare namespace browser.find {
    /* find functions */
    function find(queryphrase: string, params?: {
        tabId?: number;
        caseSensitive?: boolean;
        entireWord?: boolean;
        includeRectData?: boolean;
        includeRangeData?: boolean;
    }): void;

    function highlightResults(params?: {
        rangeIndex?: number;
        tabId?: number;
        noScroll?: boolean;
    }): void;

    function removeHighlighting(tabId?: number): void;
}

declare namespace browser.geckoProfiler {
    /* geckoProfiler types */
    enum ProfilerFeature {
        java = "java",
        js = "js",
        leaf = "leaf",
        mainthreadio = "mainthreadio",
        memory = "memory",
        privacy = "privacy",
        restyle = "restyle",
        stackwalk = "stackwalk",
        tasktracer = "tasktracer",
        threads = "threads"
    }

    /* geckoProfiler functions */
    function start(settings: {
        bufferSize: number;
        interval: number;
        features: ProfilerFeature[];
        threads?: string[];
    }): void;

    function stop(): void;

    function pause(): void;

    function resume(): void;

    function getProfile(): void;

    function getProfileAsArrayBuffer(): void;

    function getSymbols(debugName: string, breakpadId: string): void;

    /* geckoProfiler events */
    const onRunning: WebExtEventListener<(isRunning: boolean) => void>;
}

declare namespace browser.history {
    /* history types */
    enum TransitionType {
        link = "link",
        typed = "typed",
        auto_bookmark = "auto_bookmark",
        auto_subframe = "auto_subframe",
        manual_subframe = "manual_subframe",
        generated = "generated",
        auto_toplevel = "auto_toplevel",
        form_submit = "form_submit",
        reload = "reload",
        keyword = "keyword",
        keyword_generated = "keyword_generated"
    }

    interface HistoryItem {
        id: string;
        url?: string;
        title?: string;
        lastVisitTime?: number;
        visitCount?: number;
        typedCount?: number;
    }

    interface VisitItem {
        id: string;
        visitId: string;
        visitTime?: number;
        referringVisitId: string;
        transition: TransitionType;
    }

    /* history functions */
    function search(query: {
        text: string;
        startTime?: extensionTypes.Date;
        endTime?: extensionTypes.Date;
        maxResults?: number;
    }): Promise<HistoryItem[]>;

    function getVisits(details: {
        url: string;
    }): Promise<VisitItem[]>;

    function addUrl(details: {
        url: string;
        title?: string;
        transition?: TransitionType;
        visitTime?: extensionTypes.Date;
    }): Promise<void>;

    function deleteUrl(details: {
        url: string;
    }): Promise<void>;

    function deleteRange(range: {
        startTime: extensionTypes.Date;
        endTime: extensionTypes.Date;
    }): Promise<void>;

    function deleteAll(): Promise<void>;

    /* history events */
    const onVisited: WebExtEventListener<(result: HistoryItem) => void>;

    const onVisitRemoved: WebExtEventListener<(removed: {
        allHistory: boolean;
        urls: string[];
    }) => void>;

    const onTitleChanged: WebExtEventListener<(changed: {
        url: string;
        title: string;
    }) => void>;
}

declare namespace browser.contextMenus {
    /* contextMenus types */
    enum ContextType {
        all = "all",
        page = "page",
        frame = "frame",
        selection = "selection",
        link = "link",
        editable = "editable",
        password = "password",
        image = "image",
        video = "video",
        audio = "audio",
        launcher = "launcher",
        browser_action = "browser_action",
        page_action = "page_action",
        tab = "tab"
    }

    enum ItemType {
        normal = "normal",
        checkbox = "checkbox",
        radio = "radio",
        separator = "separator"
    }

    interface OnClickData {
        menuItemId: number | string;
        parentMenuItemId?: number | string;
        mediaType?: string;
        linkText?: string;
        linkUrl?: string;
        srcUrl?: string;
        pageUrl?: string;
        frameUrl?: string;
        selectionText?: string;
        editable: boolean;
        wasChecked?: boolean;
        checked?: boolean;
        modifiers: _OnClickDataModifiers[];
    }

    enum _OnClickDataModifiers {
        Shift = "Shift",
        Alt = "Alt",
        Command = "Command",
        Ctrl = "Ctrl",
        MacCtrl = "MacCtrl"
    }

    /* contextMenus properties */
    const ACTION_MENU_TOP_LEVEL_LIMIT: number;

    /* contextMenus functions */
    function create(createProperties: {
        type?: ItemType;
        id?: string;
        icons?: {
            [key: number]: string;
        };
        title?: string;
        checked?: boolean;
        contexts?: ContextType[];
        onclick?: (info: menusInternal.OnClickData, tab: tabs.Tab) => void;
        parentId?: number | string;
        documentUrlPatterns?: string[];
        targetUrlPatterns?: string[];
        enabled?: boolean;
        command?: string;
    }): number | string;

    function update(id: number | string, updateProperties: {
        type?: ItemType;
        title?: string;
        checked?: boolean;
        contexts?: ContextType[];
        onclick?: (info: menusInternal.OnClickData, tab: tabs.Tab) => void;
        parentId?: number | string;
        documentUrlPatterns?: string[];
        targetUrlPatterns?: string[];
        enabled?: boolean;
    }): Promise<void>;

    function remove(menuItemId: number | string): Promise<void>;

    function removeAll(): Promise<void>;

    /* contextMenus events */
    const onClicked: WebExtEventListener<(info: OnClickData, tab?: tabs.Tab) => void>;
}

declare namespace browser.menus {
    /* menus types */
    enum ContextType {
        all = "all",
        page = "page",
        frame = "frame",
        selection = "selection",
        link = "link",
        editable = "editable",
        password = "password",
        image = "image",
        video = "video",
        audio = "audio",
        launcher = "launcher",
        browser_action = "browser_action",
        page_action = "page_action",
        tab = "tab",
        tools_menu = "tools_menu"
    }

    enum ItemType {
        normal = "normal",
        checkbox = "checkbox",
        radio = "radio",
        separator = "separator"
    }

    interface OnClickData {
        menuItemId: number | string;
        parentMenuItemId?: number | string;
        mediaType?: string;
        linkText?: string;
        linkUrl?: string;
        srcUrl?: string;
        pageUrl?: string;
        frameUrl?: string;
        selectionText?: string;
        editable: boolean;
        wasChecked?: boolean;
        checked?: boolean;
        modifiers: _OnClickDataModifiers[];
    }

    enum _OnClickDataModifiers {
        Shift = "Shift",
        Alt = "Alt",
        Command = "Command",
        Ctrl = "Ctrl",
        MacCtrl = "MacCtrl"
    }

    /* menus properties */
    const ACTION_MENU_TOP_LEVEL_LIMIT: number;

    /* menus functions */
    function create(createProperties: {
        type?: ItemType;
        id?: string;
        icons?: {
            [key: number]: string;
        };
        title?: string;
        checked?: boolean;
        contexts?: ContextType[];
        onclick?: (info: menusInternal.OnClickData, tab: tabs.Tab) => void;
        parentId?: number | string;
        documentUrlPatterns?: string[];
        targetUrlPatterns?: string[];
        enabled?: boolean;
        command?: string;
    }): number | string;

    function update(id: number | string, updateProperties: {
        type?: ItemType;
        title?: string;
        checked?: boolean;
        contexts?: ContextType[];
        onclick?: (info: menusInternal.OnClickData, tab: tabs.Tab) => void;
        parentId?: number | string;
        documentUrlPatterns?: string[];
        targetUrlPatterns?: string[];
        enabled?: boolean;
    }): Promise<void>;

    function remove(menuItemId: number | string): Promise<void>;

    function removeAll(): Promise<void>;

    /* menus events */
    const onClicked: WebExtEventListener<(info: OnClickData, tab?: tabs.Tab) => void>;
}

declare namespace browser.menusInternal {
    /* menusInternal types */
    interface OnClickData {
        menuItemId: number | string;
        parentMenuItemId?: number | string;
        mediaType?: string;
        linkUrl?: string;
        srcUrl?: string;
        pageUrl?: string;
        frameUrl?: string;
        selectionText?: string;
        editable: boolean;
        wasChecked?: boolean;
        checked?: boolean;
    }
}

declare namespace browser.omnibox {
    /* omnibox types */
    enum DescriptionStyleType {
        url = "url",
        match = "match",
        dim = "dim"
    }

    enum OnInputEnteredDisposition {
        currentTab = "currentTab",
        newForegroundTab = "newForegroundTab",
        newBackgroundTab = "newBackgroundTab"
    }

    interface SuggestResult {
        content: string;
        description: string;
        descriptionStyles?: Array<{
            offset: number;
            type: DescriptionStyleType;
            length?: number;
        }>;
        descriptionStylesRaw?: Array<{
            offset: number;
            type: number;
        }>;
    }

    interface DefaultSuggestResult {
        description: string;
        descriptionStyles?: Array<{
            offset: number;
            type: DescriptionStyleType;
            length?: number;
        }>;
        descriptionStylesRaw?: Array<{
            offset: number;
            type: number;
        }>;
    }

    /* omnibox functions */
    function setDefaultSuggestion(suggestion: DefaultSuggestResult): void;

    /* omnibox events */
    const onInputStarted: WebExtEventListener<() => void>;

    const onInputChanged: WebExtEventListener<(text: string, suggest: (suggestResults: SuggestResult[]) => void) => void>;

    const onInputEntered: WebExtEventListener<(text: string, disposition: OnInputEnteredDisposition) => void>;

    const onInputCancelled: WebExtEventListener<() => void>;
}

declare namespace browser.pageAction {
    /* pageAction types */
    type ImageDataType = object/*ImageData*/;

    /* pageAction functions */
    function show(tabId: number): Promise<void>;

    function hide(tabId: number): Promise<void>;

    function setTitle(details: {
        tabId: number;
        title: string;
    }): void;

    function getTitle(details: {
        tabId: number;
    }): Promise<string>;

    function setIcon(details: {
        tabId: number;
        imageData?: ImageDataType | {
            [key: number]: ImageDataType;
        };
        path?: string | {
            [key: number]: string;
        };
    }): Promise<void>;

    function setPopup(details: {
        tabId: number;
        popup: string;
    }): void;

    function getPopup(details: {
        tabId: number;
    }): Promise<string>;

    function openPopup(): void;

    /* pageAction events */
    const onClicked: WebExtEventListener<(tab: tabs.Tab) => void>;
}

declare namespace browser.pkcs11 {
    /* pkcs11 functions */
    function isModuleInstalled(name: string): void;

    function installModule(name: string, flags?: number): void;

    function uninstallModule(name: string): void;

    function getModuleSlots(name: string): void;
}

declare namespace browser.sessions {
    /* sessions types */
    interface Filter {
        maxResults?: number;
    }

    interface Session {
        lastModified: number;
        tab?: tabs.Tab;
        window?: windows.Window;
    }

    interface Device {
        info: string;
        deviceName: string;
        sessions: Session[];
    }

    /* sessions properties */
    const MAX_SESSION_RESULTS: number;

    /* sessions functions */
    function forgetClosedTab(windowId: number, sessionId: string): void;

    function forgetClosedWindow(sessionId: string): void;

    function getRecentlyClosed(filter?: Filter): Promise<Session[]>;

    const getDevices: ((filter?: Filter) => Promise<Device[]>) | undefined;

    function restore(sessionId?: string): Promise<Session>;

    function setTabValue(tabId: number, key: string, value: any): void;

    function getTabValue(tabId: number, key: string): void;

    function removeTabValue(tabId: number, key: string): void;

    function setWindowValue(windowId: number, key: string, value: any): void;

    function getWindowValue(windowId: number, key: string): void;

    function removeWindowValue(windowId: number, key: string): void;

    /* sessions events */
    const onChanged: WebExtEventListener<() => void>;
}

declare namespace browser.sidebarAction {
    /* sidebarAction types */
    type ImageDataType = object/*ImageData*/;

    /* sidebarAction functions */
    function setTitle(details: {
        title: string;
        tabId?: number;
    }): void;

    function getTitle(details: {
        tabId?: number;
    }): void;

    function setIcon(details: {
        imageData?: ImageDataType | {
            [key: number]: ImageDataType;
        };
        path?: string;
        tabId?: number;
    }): void;

    function setPanel(details: {
        tabId?: number;
        panel: string;
    }): void;

    function getPanel(details: {
        tabId?: number;
    }): void;

    function open(): void;

    function close(): void;
}

declare namespace browser.tabs {
    /* tabs types */
    enum MutedInfoReason {
        user = "user",
        capture = "capture",
        extension = "extension"
    }

    interface MutedInfo {
        muted: boolean;
        reason?: MutedInfoReason;
        extensionId?: string;
    }

    interface Tab {
        id?: number;
        index: number;
        windowId?: number;
        openerTabId?: number;
        selected?: boolean;
        highlighted: boolean;
        active: boolean;
        pinned: boolean;
        lastAccessed?: number;
        audible?: boolean;
        mutedInfo?: MutedInfo;
        url?: string;
        title?: string;
        favIconUrl?: string;
        status?: string;
        discarded?: boolean;
        incognito: boolean;
        width?: number;
        height?: number;
        sessionId?: string;
        cookieStoreId?: string;
        isArticle?: boolean;
        isInReaderMode?: boolean;
    }

    enum ZoomSettingsMode {
        automatic = "automatic",
        manual = "manual",
        disabled = "disabled"
    }

    enum ZoomSettingsScope {
        perorigin = "per-origin",
        pertab = "per-tab"
    }

    interface ZoomSettings {
        mode?: ZoomSettingsMode;
        scope?: ZoomSettingsScope;
        defaultZoomFactor?: number;
    }

    interface PageSettings {
        orientation?: number;
        scaling?: number;
        shrinkToFit?: boolean;
        showBackgroundColors?: boolean;
        showBackgroundImages?: boolean;
        paperSizeUnit?: number;
        paperWidth?: number;
        paperHeight?: number;
        headerLeft?: string;
        headerCenter?: string;
        headerRight?: string;
        footerLeft?: string;
        footerCenter?: string;
        footerRight?: string;
        marginLeft?: number;
        marginRight?: number;
        marginTop?: number;
        marginBottom?: number;
    }

    enum TabStatus {
        loading = "loading",
        complete = "complete"
    }

    enum WindowType {
        normal = "normal",
        popup = "popup",
        panel = "panel",
        app = "app",
        devtools = "devtools"
    }

    /* tabs properties */
    const TAB_ID_NONE: number;

    /* tabs functions */
    function get(tabId: number): Promise<Tab>;

    function getCurrent(): Promise<Tab>;

    function connect(tabId: number, connectInfo?: {
        name?: string;
        frameId?: number;
    }): runtime.Port;

    const sendRequest: ((tabId: number, request: any, responseCallback?: (response: any) => void) => void) | undefined;

    function sendMessage(tabId: number, message: any, options: {
        frameId?: number;
    }, responseCallback?: (response: any) => void): void;

    const getSelected: ((windowId?: number) => Promise<Tab>) | undefined;

    const getAllInWindow: ((windowId?: number) => Promise<Tab[]>) | undefined;

    function create(createProperties: {
        windowId?: number;
        index?: number;
        url?: string;
        active?: boolean;
        selected?: boolean;
        pinned?: boolean;
        openerTabId?: number;
        cookieStoreId?: string;
        openInReaderMode?: boolean;
    }): Promise<Tab>;

    function duplicate(tabId: number): Promise<Tab>;

    function query(queryInfo: {
        active?: boolean;
        pinned?: boolean;
        audible?: boolean;
        muted?: boolean;
        highlighted?: boolean;
        currentWindow?: boolean;
        lastFocusedWindow?: boolean;
        status?: TabStatus;
        discarded?: boolean;
        title?: string;
        url?: string | string[];
        windowId?: number;
        windowType?: WindowType;
        index?: number;
        cookieStoreId?: string;
        openerTabId?: number;
    }): Promise<Tab[]>;

    const highlight: ((highlightInfo: {
        windowId?: number;
        tabs: number[] | number;
    }) => Promise<windows.Window>) | undefined;

    function update(updateProperties: {
        url?: string;
        active?: boolean;
        highlighted?: boolean;
        selected?: boolean;
        pinned?: boolean;
        muted?: boolean;
        openerTabId?: number;
        loadReplace?: boolean;
    }): Promise<Tab>;
    function update(tabId: number, updateProperties: {
        url?: string;
        active?: boolean;
        highlighted?: boolean;
        selected?: boolean;
        pinned?: boolean;
        muted?: boolean;
        openerTabId?: number;
        loadReplace?: boolean;
    }): Promise<Tab>;

    function move(tabIds: number | number[], moveProperties: {
        windowId?: number;
        index: number;
    }): Promise<Tab | Tab[]>;

    function reload(reloadProperties?: {
        bypassCache?: boolean;
    }): Promise<void>;
    function reload(tabId: number, reloadProperties?: {
        bypassCache?: boolean;
    }): Promise<void>;

    function remove(tabIds: number | number[]): Promise<void>;

    function discard(tabIds: number | number[]): void;

    function detectLanguage(tabId?: number): Promise<string>;

    function toggleReaderMode(tabId?: number): void;

    function captureVisibleTab(options?: extensionTypes.ImageDetails): Promise<string>;
    function captureVisibleTab(windowId: number, options?: extensionTypes.ImageDetails): Promise<string>;

    function executeScript(details: extensionTypes.InjectDetails): Promise<any[]>;
    function executeScript(tabId: number, details: extensionTypes.InjectDetails): Promise<any[]>;

    function insertCSS(details: extensionTypes.InjectDetails): Promise<void>;
    function insertCSS(tabId: number, details: extensionTypes.InjectDetails): Promise<void>;

    function removeCSS(details: extensionTypes.InjectDetails): Promise<void>;
    function removeCSS(tabId: number, details: extensionTypes.InjectDetails): Promise<void>;

    function setZoom(zoomFactor: number): Promise<void>;
    function setZoom(tabId: number, zoomFactor: number): Promise<void>;

    function getZoom(tabId?: number): Promise<number>;

    function setZoomSettings(zoomSettings: ZoomSettings): Promise<void>;
    function setZoomSettings(tabId: number, zoomSettings: ZoomSettings): Promise<void>;

    function getZoomSettings(tabId?: number): Promise<ZoomSettings>;

    function print(): void;

    function printPreview(): Promise<void>;

    function saveAsPDF(pageSettings: PageSettings): Promise<string>;

    /* tabs events */
    const onCreated: WebExtEventListener<(tab: Tab) => void>;

    const onUpdated: WebExtEventListener<(tabId: number, changeInfo: {
        status: string;
        discarded?: boolean;
        url?: string;
        pinned?: boolean;
        audible?: boolean;
        mutedInfo?: MutedInfo;
        favIconUrl?: string;
    }, tab: Tab) => void>;

    const onMoved: WebExtEventListener<(tabId: number, moveInfo: {
        windowId: number;
        fromIndex: number;
        toIndex: number;
    }) => void>;

    const onSelectionChanged: WebExtEventListener<(tabId: number, selectInfo: {
        windowId: number;
    }) => void> | undefined;

    const onActiveChanged: WebExtEventListener<(tabId: number, selectInfo: {
        windowId: number;
    }) => void> | undefined;

    const onActivated: WebExtEventListener<(activeInfo: {
        tabId: number;
        windowId: number;
    }) => void>;

    const onHighlightChanged: WebExtEventListener<(selectInfo: {
        windowId: number;
        tabIds: number[];
    }) => void> | undefined;

    const onHighlighted: WebExtEventListener<(highlightInfo: {
        windowId: number;
        tabIds: number[];
    }) => void>;

    const onDetached: WebExtEventListener<(tabId: number, detachInfo: {
        oldWindowId: number;
        oldPosition: number;
    }) => void>;

    const onAttached: WebExtEventListener<(tabId: number, attachInfo: {
        newWindowId: number;
        newPosition: number;
    }) => void>;

    const onRemoved: WebExtEventListener<(tabId: number, removeInfo: {
        windowId: number;
        isWindowClosing: boolean;
    }) => void>;

    const onReplaced: WebExtEventListener<(addedTabId: number, removedTabId: number) => void>;

    const onZoomChange: WebExtEventListener<(ZoomChangeInfo: {
        tabId: number;
        oldZoomFactor: number;
        newZoomFactor: number;
        zoomSettings: ZoomSettings;
    }) => void>;
}

declare namespace browser.windows {
    /* windows types */
    enum WindowType {
        normal = "normal",
        popup = "popup",
        panel = "panel",
        app = "app",
        devtools = "devtools"
    }

    enum WindowState {
        normal = "normal",
        minimized = "minimized",
        maximized = "maximized",
        fullscreen = "fullscreen",
        docked = "docked"
    }

    interface Window {
        id?: number;
        focused: boolean;
        top?: number;
        left?: number;
        width?: number;
        height?: number;
        tabs?: tabs.Tab[];
        incognito: boolean;
        type?: WindowType;
        state?: WindowState;
        alwaysOnTop: boolean;
        sessionId?: string;
        title?: string;
    }

    enum CreateType {
        normal = "normal",
        popup = "popup",
        panel = "panel",
        detached_panel = "detached_panel"
    }

    /* windows properties */
    const WINDOW_ID_NONE: number;

    const WINDOW_ID_CURRENT: number;

    /* windows functions */
    function get(windowId: number, getInfo?: {
        populate?: boolean;
        windowTypes?: WindowType[];
    }): Promise<Window>;

    function getCurrent(getInfo?: {
        populate?: boolean;
        windowTypes?: WindowType[];
    }): Promise<Window>;

    function getLastFocused(getInfo?: {
        populate?: boolean;
        windowTypes?: WindowType[];
    }): Promise<Window>;

    function getAll(getInfo?: {
        populate?: boolean;
        windowTypes?: WindowType[];
    }): Promise<Window[]>;

    function create(createData?: {
        url?: string | string[];
        tabId?: number;
        left?: number;
        top?: number;
        width?: number;
        height?: number;
        focused?: boolean;
        incognito?: boolean;
        type?: CreateType;
        state?: WindowState;
        allowScriptsToClose?: boolean;
        titlePreface?: string;
    }): Promise<Window>;

    function update(windowId: number, updateInfo: {
        left?: number;
        top?: number;
        width?: number;
        height?: number;
        focused?: boolean;
        drawAttention?: boolean;
        state?: WindowState;
        titlePreface?: string;
    }): Promise<Window>;

    function remove(windowId: number): Promise<void>;

    /* windows events */
    const onCreated: WebExtEventListener<(window: Window) => void>;

    const onRemoved: WebExtEventListener<(windowId: number) => void>;

    const onFocusChanged: WebExtEventListener<(windowId: number) => void>;
}
