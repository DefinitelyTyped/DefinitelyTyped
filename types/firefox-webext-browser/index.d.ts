// Type definitions for WebExtension Development in FireFox 58.0
// Project: https://developer.mozilla.org/en-US/Add-ons/WebExtensions
// Definitions by: Jacob Bom <https://github.com/bomjacob>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
// Generated using script at github.com/bomjacob/definitelytyped-firefox-webext-browser

interface WebExtEventBase<TAddListener extends (...args: any[]) => any, TCallback> {
    addListener: TAddListener;

    removeListener(cb: TCallback): void;

    hasListener(cb: TCallback): boolean;
}

type WebExtEvent<TCallback extends (...args: any[]) => any> = WebExtEventBase<(callback: TCallback) => void, TCallback>;

interface Window {
    browser: typeof browser;
}

/**
 * Permissions: `alarms`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.alarms {
    /* alarms types */
    interface Alarm {
        /** Name of this alarm. */
        name: string;
        /** Time when the alarm is scheduled to fire, in milliseconds past the epoch. */
        scheduledTime: number;
        /** When present, signals that the alarm triggers periodically after so many minutes. */
        periodInMinutes?: number;
    }

    /* alarms functions */
    /**
     * Creates an alarm. After the delay is expired, the onAlarm event is fired. If there is another alarm with the
     * same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
     * @param alarmInfo Details about the alarm. The alarm first fires either at 'when' milliseconds past the epoch (if
     *     'when' is provided), after 'delayInMinutes' minutes from the current time (if 'delayInMinutes' is provided
     *     instead), or after 'periodInMinutes' minutes from the current time (if only 'periodInMinutes' is provided).
     *     Users should never provide both 'when' and 'delayInMinutes'. If 'periodInMinutes' is provided, then the
     *     alarm recurs repeatedly after that many minutes.
     */
    function create(alarmInfo: {
        /** Time when the alarm is scheduled to first fire, in milliseconds past the epoch. */
        when?: number;
        /** Number of minutes from the current time after which the alarm should first fire. */
        delayInMinutes?: number;
        /** Number of minutes after which the alarm should recur repeatedly. */
        periodInMinutes?: number;
    }): void;
    /**
     * Creates an alarm. After the delay is expired, the onAlarm event is fired. If there is another alarm with the
     * same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
     * @param name Optional name to identify this alarm. Defaults to the empty string.
     * @param alarmInfo Details about the alarm. The alarm first fires either at 'when' milliseconds past the epoch (if
     *     'when' is provided), after 'delayInMinutes' minutes from the current time (if 'delayInMinutes' is provided
     *     instead), or after 'periodInMinutes' minutes from the current time (if only 'periodInMinutes' is provided).
     *     Users should never provide both 'when' and 'delayInMinutes'. If 'periodInMinutes' is provided, then the
     *     alarm recurs repeatedly after that many minutes.
     */
    function create(name: string, alarmInfo: {
        /** Time when the alarm is scheduled to first fire, in milliseconds past the epoch. */
        when?: number;
        /** Number of minutes from the current time after which the alarm should first fire. */
        delayInMinutes?: number;
        /** Number of minutes after which the alarm should recur repeatedly. */
        periodInMinutes?: number;
    }): void;

    /**
     * Retrieves details about the specified alarm.
     * @param [name] The name of the alarm to get. Defaults to the empty string.
     */
    function get(name?: string): Promise<Alarm>;

    /** Gets an array of all the alarms. */
    function getAll(): Promise<Alarm[]>;

    /**
     * Clears the alarm with the given name.
     * @param [name] The name of the alarm to clear. Defaults to the empty string.
     */
    function clear(name?: string): Promise<boolean>;

    /** Clears all alarms. */
    function clearAll(): Promise<boolean>;

    /* alarms events */
    /**
     * Fired when an alarm has expired. Useful for transient background pages.
     * @param name The alarm that has expired.
     */
    const onAlarm: WebExtEvent<(name: Alarm) => void>;
}

/** Not allowed in: Content scripts, Devtools pages */
declare namespace browser._manifest {
    /* _manifest types */
    type OptionalPermission = _OptionalPermission;

    type Permission = string | OptionalPermission | _Permission;

    /** Represents a protocol handler definition. */
    interface ProtocolHandler {
        /**
         * A user-readable title string for the protocol handler. This will be displayed to the user in interface
         * objects as needed.
         */
        name: string;
        /**
         * The protocol the site wishes to handle, specified as a string. For example, you can register to handle SMS
         * text message links by registering to handle the "sms" scheme.
         */
        protocol: string | _ProtocolHandlerProtocol;
        /**
         * The URL of the handler, as a string. This string should include "%s" as a placeholder which will be replaced
         * with the escaped URL of the document to be handled. This URL might be a true URL, or it could be a phone
         * number, email address, or so forth.
         */
        uriTemplate: ExtensionURL | HttpURL;
    }

    /** Represents a WebExtension manifest.json file */
    interface WebExtensionManifest {
        /** A list of protocol handler definitions. */
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
            /** Specifies icons to use for dark and light themes */
            theme_icons?: ThemeIcons[];
            default_popup?: string;
            browser_style?: boolean;
            /** Defines the location the browserAction will appear by default. The default location is navbar. */
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
                /** @deprecated Unsupported on Firefox at this time. */
                instant_url?: string;
                /** @deprecated Unsupported on Firefox at this time. */
                image_url?: string;
                /** @deprecated Unsupported on Firefox at this time. */
                search_url_post_params?: string;
                /** @deprecated Unsupported on Firefox at this time. */
                instant_url_post_params?: string;
                /** @deprecated Unsupported on Firefox at this time. */
                image_url_post_params?: string;
                /** @deprecated Unsupported on Firefox at this time. */
                alternate_urls?: string[];
                /** @deprecated Unsupported on Firefox. */
                prepopulated_id?: number;
                /** Sets the default engine to a built-in engine only. */
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
                /** @deprecated Unknown platform name */
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
            /** @deprecated Unsupported on Firefox at this time. */
            bookmarks?: ExtensionURL;
            /** @deprecated Unsupported on Firefox at this time. */
            history?: ExtensionURL;
        };
    }

    interface ThemeIcons {
        /** A light icon to use for dark themes */
        light: ExtensionURL;
        /** The dark icon to use for light themes */
        dark: ExtensionURL;
        /** The size of the icons */
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

    /** Same as MatchPattern above, but includes moz-extension protocol */
    type MatchPatternInternal = string | _MatchPatternInternal;

    /**
     * Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be
     * set at the same time. Based on InjectDetails, but using underscore rather than camel case naming conventions.
     */
    interface ContentScript {
        matches: MatchPattern[];
        exclude_matches?: MatchPattern[];
        include_globs?: string[];
        exclude_globs?: string[];
        /** The list of CSS files to inject */
        css?: ExtensionURL[];
        /** The list of CSS files to inject */
        js?: ExtensionURL[];
        /**
         * If allFrames is `true`, implies that the JavaScript or CSS should be injected into all frames of current
         * page. By default, it's `false` and is only injected into the top frame.
         */
        all_frames?: boolean;
        /**
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your
         * extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default
         * it is `false`.
         */
        match_about_blank?: boolean;
        /** The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle". */
        run_at?: extensionTypes.RunAt;
    }

    type IconPath = {
        [key: number]: ExtensionURL;
    } | ExtensionURL;

    type IconImageData = {
        [key: number]: ImageData;
    } | ImageData;

    type ImageData = any;

    /** @deprecated An unexpected property was found in the WebExtension manifest. */
    type UnrecognizedProperty = any;

    /** @deprecated Event pages are not currently supported. This will run as a persistent background page. */
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

    /** Defines the location the browserAction will appear by default. The default location is navbar. */
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

/**
 * Use the `browser.browserSettings` API to control global settings of the browser.
 *
 * Permissions: `browserSettings`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.browserSettings {
    /* browserSettings types */

    /** How images should be animated in the browser. */
    enum ImageAnimationBehavior {
        normal = "normal",
        none = "none",
        once = "once"
    }

    /* browserSettings properties */
    /** Allows or disallows pop-up windows from opening in response to user events. */
    const allowPopupsForUserEvents: types.Setting;

    /** Enables or disables the browser cache. */
    const cacheEnabled: types.Setting;

    /** Returns the value of the overridden home page. Read-only. */
    const homepageOverride: types.Setting;

    /**
     * Controls the behaviour of image animation in the browser. This setting's value is of type
     * ImageAnimationBehavior, defaulting to `normal`.
     */
    const imageAnimationBehavior: types.Setting;

    /** Returns the value of the overridden new tab page. Read-only. */
    const newTabPageOverride: types.Setting;

    /** Disables webAPI notifications. */
    const webNotificationsDisabled: types.Setting;
}

/**
 * Offers the ability to write to the clipboard. Reading is not supported because the clipboard can already be read
 * through the standard web platform APIs.
 *
 * Permissions: `clipboardWrite`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.clipboard {
    type ArrayBuffer = any;

    /** The type of imageData. */
    enum _SetImageData {
        jpeg = "jpeg",
        png = "png"
    }

    /* clipboard functions */
    /**
     * Copy an image to the clipboard. The image is re-encoded before it is written to the clipboard. If the image is
     * invalid, the clipboard is not modified.
     * @param imageData The image data to be copied.
     * @param imageType The type of imageData.
     */
    function setImageData(imageData: ArrayBuffer, imageType: _SetImageData): Promise<void>;
}

/**
 * Use the `browser.contextualIdentities` API to query and modify contextual identity, also called as containers.
 *
 * Permissions: `contextualIdentities`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.contextualIdentities {
    /* contextualIdentities types */
    /** Represents information about a contextual identity. */
    interface ContextualIdentity {
        /** The name of the contextual identity. */
        name: string;
        /** The icon name of the contextual identity. */
        icon: string;
        /** The icon url of the contextual identity. */
        iconUrl: string;
        /** The color name of the contextual identity. */
        color: string;
        /** The color hash of the contextual identity. */
        colorCode: string;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId: string;
    }

    /* contextualIdentities functions */
    /**
     * Retrieves information about a single contextual identity.
     * @param cookieStoreId The ID of the contextual identity cookie store.
     */
    function get(cookieStoreId: string): Promise<ContextualIdentity>;

    /**
     * Retrieves all contextual identities
     * @param details Information to filter the contextual identities being retrieved.
     */
    function query(details: {
        /** Filters the contextual identity by name. */
        name?: string;
    }): Promise<ContextualIdentity[]>;

    /**
     * Creates a contextual identity with the given data.
     * @param details Details about the contextual identity being created.
     */
    function create(details: {
        /** The name of the contextual identity. */
        name: string;
        /** The color of the contextual identity. */
        color: string;
        /** The icon of the contextual identity. */
        icon: string;
    }): Promise<ContextualIdentity>;

    /**
     * Updates a contextual identity with the given data.
     * @param cookieStoreId The ID of the contextual identity cookie store.
     * @param details Details about the contextual identity being created.
     */
    function update(cookieStoreId: string, details: {
        /** The name of the contextual identity. */
        name?: string;
        /** The color of the contextual identity. */
        color?: string;
        /** The icon of the contextual identity. */
        icon?: string;
    }): Promise<ContextualIdentity>;

    /**
     * Deletes a contetual identity by its cookie Store ID.
     * @param cookieStoreId The ID of the contextual identity cookie store.
     */
    function remove(cookieStoreId: string): Promise<ContextualIdentity>;

    /* contextualIdentities events */
    /** Fired when a container is updated. */
    const onUpdated: WebExtEvent<(changeInfo: {
        /** Contextual identity that has been updated */
        contextualIdentity: ContextualIdentity;
    }) => void>;

    /** Fired when a new container is created. */
    const onCreated: WebExtEvent<(changeInfo: {
        /** Contextual identity that has been created */
        contextualIdentity: ContextualIdentity;
    }) => void>;

    /** Fired when a container is removed. */
    const onRemoved: WebExtEvent<(changeInfo: {
        /** Contextual identity that has been removed */
        contextualIdentity: ContextualIdentity;
    }) => void>;
}

/**
 * Use the `browser.cookies` API to query and modify cookies, and to be notified when they change.
 *
 * Permissions: `cookies`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.cookies {
    /* cookies types */
    /** Represents information about an HTTP cookie. */
    interface Cookie {
        /** The name of the cookie. */
        name: string;
        /** The value of the cookie. */
        value: string;
        /** The domain of the cookie (e.g. "www.google.com", "example.com"). */
        domain: string;
        /**
         * True if the cookie is a host-only cookie (i.e. a request's host must exactly match the domain of the cookie).
         */
        hostOnly: boolean;
        /** The path of the cookie. */
        path: string;
        /**
         * True if the cookie is marked as Secure (i.e. its scope is limited to secure channels, typically HTTPS).
         */
        secure: boolean;
        /** True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts). */
        httpOnly: boolean;
        /** True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date. */
        session: boolean;
        /**
         * The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session
         * cookies.
         */
        expirationDate?: number;
        /** The ID of the cookie store containing this cookie, as provided in getAllCookieStores(). */
        storeId: string;
    }

    /**
     * Represents a cookie store in the browser. An incognito mode window, for instance, uses a separate cookie store
     * from a non-incognito window.
     */
    interface CookieStore {
        /** The unique identifier for the cookie store. */
        id: string;
        /** Identifiers of all the browser tabs that share this cookie store. */
        tabIds: number[];
        /** Indicates if this is an incognito cookie store */
        incognito: boolean;
    }

    /**
     * The underlying reason behind the cookie's change. If a cookie was inserted, or removed via an explicit call to
     * `cookies.remove`, "cause" will be "explicit". If a cookie was automatically removed due to expiry, "cause" will
     * be "expired". If a cookie was removed due to being overwritten with an already-expired expiration date, "cause"
     * will be set to "expired_overwrite". If a cookie was automatically removed due to garbage collection, "cause"
     * will be "evicted". If a cookie was automatically removed due to a "set" call that overwrote it, "cause" will be
     * "overwrite". Plan your response accordingly.
     */
    enum OnChangedCause {
        evicted = "evicted",
        expired = "expired",
        explicit = "explicit",
        expired_overwrite = "expired_overwrite",
        overwrite = "overwrite"
    }

    /* cookies functions */
    /**
     * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL,
     * the one with the longest path will be returned. For cookies with the same path length, the cookie with the
     * earliest creation time will be returned.
     * @param details Details to identify the cookie being retrieved.
     */
    function get(details: {
        /**
         * The URL with which the cookie to retrieve is associated. This argument may be a full URL, in which case any
         * data following the URL path (e.g. the query string) is simply ignored. If host permissions for this URL are
         * not specified in the manifest file, the API call will fail.
         */
        url: string;
        /** The name of the cookie to retrieve. */
        name: string;
        /**
         * The ID of the cookie store in which to look for the cookie. By default, the current execution context's
         * cookie store will be used.
         */
        storeId?: string;
    }): Promise<Cookie>;

    /**
     * Retrieves all cookies from a single cookie store that match the given information. The cookies returned will be
     * sorted, with those with the longest path first. If multiple cookies have the same path length, those with the
     * earliest creation time will be first.
     * @param details Information to filter the cookies being retrieved.
     */
    function getAll(details: {
        /** Restricts the retrieved cookies to those that would match the given URL. */
        url?: string;
        /** Filters the cookies by name. */
        name?: string;
        /** Restricts the retrieved cookies to those whose domains match or are subdomains of this one. */
        domain?: string;
        /** Restricts the retrieved cookies to those whose path exactly matches this string. */
        path?: string;
        /** Filters the cookies by their Secure property. */
        secure?: boolean;
        /** Filters out session vs. persistent cookies. */
        session?: boolean;
        /**
         * The cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be
         * used.
         */
        storeId?: string;
    }): Promise<Cookie[]>;

    /**
     * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
     * @param details Details about the cookie being set.
     */
    function set(details: {
        /**
         * The request-URI to associate with the setting of the cookie. This value can affect the default domain and
         * path values of the created cookie. If host permissions for this URL are not specified in the manifest file,
         * the API call will fail.
         */
        url: string;
        /** The name of the cookie. Empty by default if omitted. */
        name?: string;
        /** The value of the cookie. Empty by default if omitted. */
        value?: string;
        /** The domain of the cookie. If omitted, the cookie becomes a host-only cookie. */
        domain?: string;
        /** The path of the cookie. Defaults to the path portion of the url parameter. */
        path?: string;
        /** Whether the cookie should be marked as Secure. Defaults to false. */
        secure?: boolean;
        /** Whether the cookie should be marked as HttpOnly. Defaults to false. */
        httpOnly?: boolean;
        /**
         * The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie
         * becomes a session cookie.
         */
        expirationDate?: number;
        /**
         * The ID of the cookie store in which to set the cookie. By default, the cookie is set in the current
         * execution context's cookie store.
         */
        storeId?: string;
    }): Promise<Cookie | undefined>;

    /**
     * Deletes a cookie by name.
     * @param details Information to identify the cookie to remove.
     */
    function remove(details: {
        /**
         * The URL associated with the cookie. If host permissions for this URL are not specified in the manifest file,
         * the API call will fail.
         */
        url: string;
        /** The name of the cookie to remove. */
        name: string;
        /**
         * The ID of the cookie store to look in for the cookie. If unspecified, the cookie is looked for by default in
         * the current execution context's cookie store.
         */
        storeId?: string;
    }): Promise<{
        /** The URL associated with the cookie that's been removed. */
        url: string;
        /** The name of the cookie that's been removed. */
        name: string;
        /** The ID of the cookie store from which the cookie was removed. */
        storeId: string;
    } | undefined>;

    /** Lists all existing cookie stores. */
    function getAllCookieStores(): Promise<CookieStore[]>;

    /* cookies events */
    /**
     * Fired when a cookie is set or removed. As a special case, note that updating a cookie's properties is
     * implemented as a two step process: the cookie to be updated is first removed entirely, generating a notification
     * with "cause" of "overwrite" . Afterwards, a new cookie is written with the updated values, generating a second
     * notification with "cause" "explicit".
     */
    const onChanged: WebExtEvent<(changeInfo: {
        /** True if a cookie was removed. */
        removed: boolean;
        /** Information about the cookie that was set or removed. */
        cookie: Cookie;
        /** The underlying reason behind the cookie's change. */
        cause: OnChangedCause;
    }) => void>;
}

/**
 * Permissions: `downloads`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
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

    /**
     * *file*:
     *   The download's filename is suspicious.
     * *url*:
     *   The download's URL is known to be malicious.
     * *content*:
     *   The downloaded file is known to be malicious.
     * *uncommon*:
     *   The download's URL is not commonly downloaded and could be dangerous.
     * *safe*:
     *   The download presents no known danger to the user's computer.
     *
     * These string constants will never change, however the set of DangerTypes may change.
     */
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

    /**
     * *in_progress*:
     *   The download is currently receiving data from the server.
     * *interrupted*:
     *   An error broke the connection with the file host.
     * *complete*:
     *   The download completed successfully.
     *
     * These string constants will never change, however the set of States may change.
     */
    enum State {
        in_progress = "in_progress",
        interrupted = "interrupted",
        complete = "complete"
    }

    interface DownloadItem {
        /** An identifier that is persistent across browser sessions. */
        id: number;
        /** Absolute URL. */
        url: string;
        referrer?: string;
        /** Absolute local path. */
        filename: string;
        /** False if this download is recorded in the history, true if it is not recorded. */
        incognito: boolean;
        /** Indication of whether this download is thought to be safe or known to be suspicious. */
        danger: DangerType;
        /** The file's MIME type. */
        mime: string;
        /** Number of milliseconds between the unix epoch and when this download began. */
        startTime: string;
        /** Number of milliseconds between the unix epoch and when this download ended. */
        endTime?: string;
        estimatedEndTime?: string;
        /** Indicates whether the download is progressing, interrupted, or complete. */
        state: State;
        /** True if the download has stopped reading data from the host, but kept the connection open. */
        paused: boolean;
        canResume: boolean;
        /** Number indicating why a download was interrupted. */
        error?: InterruptReason;
        /** Number of bytes received so far from the host, without considering file compression. */
        bytesReceived: number;
        /** Number of bytes in the whole file, without considering file compression, or -1 if unknown. */
        totalBytes: number;
        /** Number of bytes in the whole file post-decompression, or -1 if unknown. */
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

    /**
     * A time specified as a Date object, a number or string representing milliseconds since the epoch, or an ISO 8601
     * string
     */
    type DownloadTime = string | extensionTypes.Date;

    /**
     * Parameters that combine to specify a predicate that can be used to select a set of downloads. Used for example
     * in search() and erase()
     */
    interface DownloadQuery {
        /**
         * This array of search terms limits results to DownloadItems whose `filename` or `url` contain all of the
         * search terms that do not begin with a dash '-' and none of the search terms that do begin with a dash.
         */
        query?: string[];
        /** Limits results to downloads that started before the given ms since the epoch. */
        startedBefore?: DownloadTime;
        /** Limits results to downloads that started after the given ms since the epoch. */
        startedAfter?: DownloadTime;
        /** Limits results to downloads that ended before the given ms since the epoch. */
        endedBefore?: DownloadTime;
        /** Limits results to downloads that ended after the given ms since the epoch. */
        endedAfter?: DownloadTime;
        /** Limits results to downloads whose totalBytes is greater than the given integer. */
        totalBytesGreater?: number;
        /** Limits results to downloads whose totalBytes is less than the given integer. */
        totalBytesLess?: number;
        /** Limits results to DownloadItems whose `filename` matches the given regular expression. */
        filenameRegex?: string;
        /** Limits results to DownloadItems whose `url` matches the given regular expression. */
        urlRegex?: string;
        /**
         * Setting this integer limits the number of results. Otherwise, all matching DownloadItems will be returned.
         */
        limit?: number;
        /**
         * Setting elements of this array to DownloadItem properties in order to sort the search results. For example,
         * setting `orderBy='startTime'` sorts the DownloadItems by their start time in ascending order. To specify
         * descending order, prefix `orderBy` with a hyphen: '-startTime'.
         */
        orderBy?: string[];
        id?: number;
        /** Absolute URL. */
        url?: string;
        /** Absolute local path. */
        filename?: string;
        /** Indication of whether this download is thought to be safe or known to be suspicious. */
        danger?: DangerType;
        /** The file's MIME type. */
        mime?: string;
        startTime?: string;
        endTime?: string;
        /** Indicates whether the download is progressing, interrupted, or complete. */
        state?: State;
        /** True if the download has stopped reading data from the host, but kept the connection open. */
        paused?: boolean;
        /** Why a download was interrupted. */
        error?: InterruptReason;
        /** Number of bytes received so far from the host, without considering file compression. */
        bytesReceived?: number;
        /** Number of bytes in the whole file, without considering file compression, or -1 if unknown. */
        totalBytes?: number;
        /** Number of bytes in the whole file post-decompression, or -1 if unknown. */
        fileSize?: number;
        exists?: boolean;
    }

    /** The HTTP method to use if the URL uses the HTTP[S] protocol. */
    enum _DownloadMethod {
        GET = "GET",
        POST = "POST"
    }

    /* downloads functions */
    /**
     * Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set
     * for its hostname. If both `filename` and `saveAs` are specified, then the Save As dialog will be displayed,
     * pre-populated with the specified `filename`. If the download started successfully, `callback` will be called
     * with the new DownloadItem's `downloadId`. If there was an error starting the download, then `callback` will be
     * called with `downloadId=undefined` and browser.extension.lastError will contain a descriptive string. The error
     * strings are not guaranteed to remain backwards compatible between releases. You must not parse it.
     * @param options What to download and how.
     */
    function download(options: {
        /** The URL to download. */
        url: string;
        /** A file path relative to the Downloads directory to contain the downloaded file. */
        filename?: string;
        /** Whether to associate the download with a private browsing session. */
        incognito?: boolean;
        conflictAction?: FilenameConflictAction;
        /**
         * Use a file-chooser to allow the user to select a filename. If the option is not specified, the file chooser
         * will be shown only if the Firefox "Always ask you where to save files" option is enabled (i.e. the pref
         * `browser.download.useDownloadDir` is set to `false`).
         */
        saveAs?: boolean;
        /** The HTTP method to use if the URL uses the HTTP[S] protocol. */
        method?: _DownloadMethod;
        /**
         * Extra HTTP headers to send with the request if the URL uses the HTTP[s] protocol. Each header is represented
         * as a dictionary containing the keys `name` and either `value` or `binaryValue`, restricted to those allowed
         * by XMLHttpRequest.
         */
        headers?: Array<{
            /** Name of the HTTP header. */
            name: string;
            /** Value of the HTTP header. */
            value: string;
        }>;
        /** Post body. */
        body?: string;
    }): Promise<number | undefined>;

    /**
     * Find DownloadItems. Set `query` to the empty object to get all DownloadItems. To get a specific DownloadItem,
     * set only the `id` field.
     */
    function search(query: DownloadQuery): Promise<DownloadItem[]>;

    /**
     * Pause the download. If the request was successful the download is in a paused state. Otherwise
     * browser.extension.lastError contains an error message. The request will fail if the download is not active.
     * @param downloadId The id of the download to pause.
     */
    function pause(downloadId: number): Promise<void>;

    /**
     * Resume a paused download. If the request was successful the download is in progress and unpaused. Otherwise
     * browser.extension.lastError contains an error message. The request will fail if the download is not active.
     * @param downloadId The id of the download to resume.
     */
    function resume(downloadId: number): Promise<void>;

    /**
     * Cancel a download. When `callback` is run, the download is cancelled, completed, interrupted or doesn't exist
     * anymore.
     * @param downloadId The id of the download to cancel.
     */
    function cancel(downloadId: number): Promise<void>;

    /**
     * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated
     * event has been received. The image returned by this function while a download is in progress may be different
     * from the image returned after the download is complete. Icon retrieval is done by querying the underlying
     * operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a
     * number of factors including state of the download, platform, registered file types and visual theme. If a file
     * icon cannot be determined, browser.extension.lastError will contain an error message.
     * @param downloadId The identifier for the download.
     */
    function getFileIcon(downloadId: number, options?: {
        /**
         * The size of the icon. The returned icon will be square with dimensions size * size pixels. The default size
         * for the icon is 32x32 pixels.
         */
        size?: number;
    }): Promise<string>;

    /** Open the downloaded file. */
    function open(downloadId: number): Promise<void>;

    /** Show the downloaded file in its folder in a file manager. */
    function show(downloadId: number): Promise<boolean | undefined>;

    function showDefaultFolder(): void;

    /** Erase matching DownloadItems from history */
    function erase(query: DownloadQuery): Promise<number[] | undefined>;

    function removeFile(downloadId: number): Promise<void>;

    /**
     * Prompt the user to either accept or cancel a dangerous download. `acceptDanger()` does not automatically accept
     * dangerous downloads.
     * @deprecated Unsupported on Firefox at this time.
     */
    function acceptDanger(downloadId: number): Promise<void>;

    /**
     * Initiate dragging the file to another application.
     * @deprecated Unsupported on Firefox at this time.
     */
    function drag(downloadId: number): void;

    /** @deprecated Unsupported on Firefox at this time. */
    function setShelfEnabled(enabled: boolean): void;

    /* downloads events */
    /** This event fires with the DownloadItem object when a download begins. */
    const onCreated: WebExtEvent<(downloadItem: DownloadItem) => void>;

    /**
     * Fires with the `downloadId` when a download is erased from history.
     * @param downloadId The `id` of the DownloadItem that was erased.
     */
    const onErased: WebExtEvent<(downloadId: number) => void>;

    /**
     * When any of a DownloadItem's properties except `bytesReceived` changes, this event fires with the `downloadId`
     * and an object containing the properties that changed.
     */
    const onChanged: WebExtEvent<(downloadDelta: {
        /** The `id` of the DownloadItem that changed. */
        id: number;
        /** Describes a change in a DownloadItem's `url`. */
        url?: StringDelta;
        /** Describes a change in a DownloadItem's `filename`. */
        filename?: StringDelta;
        /** Describes a change in a DownloadItem's `danger`. */
        danger?: StringDelta;
        /** Describes a change in a DownloadItem's `mime`. */
        mime?: StringDelta;
        /** Describes a change in a DownloadItem's `startTime`. */
        startTime?: StringDelta;
        /** Describes a change in a DownloadItem's `endTime`. */
        endTime?: StringDelta;
        /** Describes a change in a DownloadItem's `state`. */
        state?: StringDelta;
        canResume?: BooleanDelta;
        /** Describes a change in a DownloadItem's `paused`. */
        paused?: BooleanDelta;
        /** Describes a change in a DownloadItem's `error`. */
        error?: StringDelta;
        /** Describes a change in a DownloadItem's `totalBytes`. */
        totalBytes?: DoubleDelta;
        /** Describes a change in a DownloadItem's `fileSize`. */
        fileSize?: DoubleDelta;
        exists?: BooleanDelta;
    }) => void>;
}

/**
 * The `browser.events` namespace contains common types used by APIs dispatching events to notify you when something
 * interesting happens.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.events {
    /* events types */
    /** Description of a declarative rule for handling events. */
    interface Rule {
        /** Optional identifier that allows referencing this rule. */
        id?: string;
        /** Tags can be used to annotate rules and perform operations on sets of rules. */
        tags?: string[];
        /** List of conditions that can trigger the actions. */
        conditions: any[];
        /** List of actions that are triggered if one of the condtions is fulfilled. */
        actions: any[];
        /** Optional priority of this rule. Defaults to 100. */
        priority?: number;
    }

    /** An object which allows the addition and removal of listeners for a Chrome event. */
    interface Event {
        /**
         * Registers an event listener _callback_ to an event.
         * @param callback Called when an event occurs. The parameters of this function depend on the type of event.
         */
        addListener(callback: () => void): void;

        /**
         * Deregisters an event listener _callback_ from an event.
         * @param callback Listener that shall be unregistered.
         */
        removeListener(callback: () => void): void;

        /**
         * @param callback Listener whose registration status shall be tested.
         * @returns True if _callback_ is registered to the event.
         */
        hasListener(callback: () => void): boolean;

        /** @returns True if any event listeners are registered to the event. */
        hasListeners(): boolean;

        /**
         * Registers rules to handle events.
         * @param eventName Name of the event this function affects.
         * @param webViewInstanceId If provided, this is an integer that uniquely identfies the <webview> associated
         *     with this function call.
         * @param rules Rules to be registered. These do not replace previously registered rules.
         * @deprecated Unsupported on Firefox at this time.
         */
        addRules?(eventName: string, webViewInstanceId: number, rules: Rule[]): Promise<Rule[] | undefined>;

        /**
         * Returns currently registered rules.
         * @param eventName Name of the event this function affects.
         * @param webViewInstanceId If provided, this is an integer that uniquely identfies the <webview> associated
         *     with this function call.
         * @param [ruleIdentifiers] If an array is passed, only rules with identifiers contained in this array are
         *     returned.
         * @deprecated Unsupported on Firefox at this time.
         */
        getRules?(eventName: string, webViewInstanceId: number, ruleIdentifiers?: string[]): Promise<Rule[]>;

        /**
         * Unregisters currently registered rules.
         * @param eventName Name of the event this function affects.
         * @param webViewInstanceId If provided, this is an integer that uniquely identfies the <webview> associated
         *     with this function call.
         * @param [ruleIdentifiers] If an array is passed, only rules with identifiers contained in this array are
         *     unregistered.
         * @deprecated Unsupported on Firefox at this time.
         */
        removeRules?(eventName: string, webViewInstanceId: number, ruleIdentifiers?: string[]): Promise<void>;
    }

    /** Filters URLs for various criteria. See event filtering. All criteria are case sensitive. */
    interface UrlFilter {
        /**
         * Matches if the host name of the URL contains a specified string. To test whether a host name component has a
         * prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot
         * is added at the beginning of the host name. Similarly, hostContains can be used to match against component
         * suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last
         * components need to be done separately using hostSuffix, because no implicit dot is added at the end of the
         * host name.
         */
        hostContains?: string;
        /** Matches if the host name of the URL is equal to a specified string. */
        hostEquals?: string;
        /** Matches if the host name of the URL starts with a specified string. */
        hostPrefix?: string;
        /** Matches if the host name of the URL ends with a specified string. */
        hostSuffix?: string;
        /** Matches if the path segment of the URL contains a specified string. */
        pathContains?: string;
        /** Matches if the path segment of the URL is equal to a specified string. */
        pathEquals?: string;
        /** Matches if the path segment of the URL starts with a specified string. */
        pathPrefix?: string;
        /** Matches if the path segment of the URL ends with a specified string. */
        pathSuffix?: string;
        /** Matches if the query segment of the URL contains a specified string. */
        queryContains?: string;
        /** Matches if the query segment of the URL is equal to a specified string. */
        queryEquals?: string;
        /** Matches if the query segment of the URL starts with a specified string. */
        queryPrefix?: string;
        /** Matches if the query segment of the URL ends with a specified string. */
        querySuffix?: string;
        /**
         * Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from
         * the URL if they match the default port number.
         */
        urlContains?: string;
        /**
         * Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped
         * from the URL if they match the default port number.
         */
        urlEquals?: string;
        /**
         * Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are
         * stripped from the URL if they match the default port number. The regular expressions use the [RE2
         * syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
         */
        urlMatches?: string;
        /**
         * Matches if the URL without query segment and fragment identifier matches a specified regular expression.
         * Port numbers are stripped from the URL if they match the default port number. The regular expressions use
         * the [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
         */
        originAndPathMatches?: string;
        /**
         * Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped
         * from the URL if they match the default port number.
         */
        urlPrefix?: string;
        /**
         * Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped
         * from the URL if they match the default port number.
         */
        urlSuffix?: string;
        /** Matches if the scheme of the URL is equal to any of the schemes specified in the array. */
        schemes?: string[];
        /**
         * Matches if the port of the URL is contained in any of the specified port lists. For example `[80, 443,
         * [1000, 1200]]` matches all requests on port 80, 443 and in the range 1000-1200.
         */
        ports?: Array<number | [number, number]>;
    }
}

/**
 * The `browser.extension` API has utilities that can be used by any extension page. It includes support for exchanging
 * messages between an extension and its content scripts or between extensions, as described in detail in Message
 * Passing.
 */
declare namespace browser.extension {
    /* extension types */

    /** The type of extension view. */
    enum ViewType {
        tab = "tab",
        popup = "popup",
        sidebar = "sidebar"
    }

    /* extension properties */
    /**
     * Set for the lifetime of a callback if an ansychronous extension api has resulted in an error. If no error has
     * occured lastError will be `undefined`.
     */
    const lastError: {
        /** Description of the error that has taken place. */
        message: string;
    } | undefined;

    /**
     * True for content scripts running inside incognito tabs, and for extension pages running inside an incognito
     * process. The latter only applies to extensions with 'split' incognito_behavior.
     */
    const inIncognitoContext: boolean | undefined;

    /* extension functions */
    /**
     * Converts a relative path within an extension install directory to a fully-qualified URL.
     * @param path A path to a resource within an extension expressed relative to its install directory.
     * @returns The fully-qualified URL to the resource.
     */
    function getURL(path: string): string;

    /**
     * Returns an array of the JavaScript 'window' objects for each of the pages running inside the current extension.
     * @returns Array of global objects
     */
    function getViews(fetchProperties?: {
        /**
         * The type of view to get. If omitted, returns all views (including background pages and tabs). Valid values:
         * 'tab', 'popup', 'sidebar'.
         */
        type?: ViewType;
        /** The window to restrict the search to. If omitted, returns all views. */
        windowId?: number;
        /** Find a view according to a tab id. If this field is omitted, returns all views. */
        tabId?: number;
    }): Window[];

    /**
     * Returns the JavaScript 'window' object for the background page running inside the current extension. Returns
     * null if the extension has no background page.
     */
    function getBackgroundPage(): Window | void;

    /**
     * Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled 'Allowed
     * in Incognito' checkbox.
     */
    function isAllowedIncognitoAccess(): Promise<boolean>;

    /**
     * Retrieves the state of the extension's access to the 'file://' scheme (as determined by the user-controlled
     * 'Allow access to File URLs' checkbox.
     */
    function isAllowedFileSchemeAccess(): Promise<boolean>;

    /**
     * Sets the value of the ap CGI parameter used in the extension's update URL. This value is ignored for extensions
     * that are hosted in the browser vendor's store.
     * @deprecated Unsupported on Firefox at this time.
     */
    function setUpdateUrlData(data: string): void;

    /* extension events */
    /**
     * Fired when a request is sent from either an extension process or a content script.
     * @param request The request sent by the calling script.
     * @param sendResponse Function to call (at most once) when you have a response. The argument should be any
     *     JSON-ifiable object, or undefined if there is no response. If you have more than one `onRequest` listener in
     *     the same document, then only one may send a response.
     * @deprecated Please use `runtime.onMessage`.
     */
    const onRequest: WebExtEvent<(request: any, sender: runtime.MessageSender, sendResponse: (response?: any) => void) => void> | undefined;

    /**
     * Fired when a request is sent from another extension.
     * @param request The request sent by the calling script.
     * @param sendResponse Function to call when you have a response. The argument should be any JSON-ifiable object,
     *     or undefined if there is no response.
     * @deprecated Please use `runtime.onMessageExternal`.
     */
    const onRequestExternal: WebExtEvent<(request: any, sender: runtime.MessageSender, sendResponse: (response?: any) => void) => void> | undefined;
}

/**
 * The `browser.extensionTypes` API contains type declarations for WebExtensions.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.extensionTypes {
    /* extensionTypes types */

    /** The format of an image. */
    enum ImageFormat {
        jpeg = "jpeg",
        png = "png"
    }

    /** Details about the format and quality of an image. */
    interface ImageDetails {
        /** The format of the resulting image. Default is `"jpeg"`. */
        format?: ImageFormat;
        /**
         * When format is `"jpeg"`, controls the quality of the resulting image. This value is ignored for PNG images.
         * As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed
         * to store it will decrease.
         */
        quality?: number;
    }

    /** The soonest that the JavaScript or CSS will be injected into the tab. */
    enum RunAt {
        document_start = "document_start",
        document_end = "document_end",
        document_idle = "document_idle"
    }

    /** The origin of the CSS to inject, this affects the cascading order (priority) of the stylesheet. */
    enum CSSOrigin {
        user = "user",
        author = "author"
    }

    /**
     * Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be
     * set at the same time.
     */
    interface InjectDetails {
        /**
         * JavaScript or CSS code to inject.
         *
         * **Warning:**
         * Be careful using the `code` parameter. Incorrect use of it may open your extension to [cross site
         * scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.
         */
        code?: string;
        /** JavaScript or CSS file to inject. */
        file?: string;
        /**
         * If allFrames is `true`, implies that the JavaScript or CSS should be injected into all frames of current
         * page. By default, it's `false` and is only injected into the top frame.
         */
        allFrames?: boolean;
        /**
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your
         * extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default
         * it is `false`.
         */
        matchAboutBlank?: boolean;
        /** The ID of the frame to inject the script into. This may not be used in combination with `allFrames`. */
        frameId?: number;
        /** The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle". */
        runAt?: RunAt;
        /** The css origin of the stylesheet to inject. Defaults to "author". */
        cssOrigin?: CSSOrigin;
    }

    type Date = string | number | object/*Date*/;
}

/**
 * Use the `browser.i18n` infrastructure to implement internationalization across your whole app or extension.
 */
declare namespace browser.i18n {
    /* i18n types */
    /**
     * An ISO language code such as `en` or `fr`. For a complete list of languages supported by this method, see
     * [kLanguageInfoTable](http://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc).
     * For an unknown language, `und` will be returned, which means that [percentage] of the text is unknown to CLD
     */
    type LanguageCode = string;

    /* i18n functions */
    /**
     * Gets the accept-languages of the browser. This is different from the locale used by the browser; to get the
     * locale, use `i18n.getUILanguage`.
     */
    function getAcceptLanguages(): Promise<LanguageCode[]>;

    /**
     * Gets the localized string for the specified message. If the message is missing, this method returns an empty
     * string (''). If the format of the `getMessage()` call is wrong — for example, _messageName_ is not a string or
     * the _substitutions_ array has more than 9 elements — this method returns `undefined`.
     * @param messageName The name of the message, as specified in the `messages.json` file.
     * @param [substitutions] Substitution strings, if the message requires any.
     * @returns Message localized for current locale.
     */
    function getMessage(messageName: string, substitutions?: any): string;

    /**
     * Gets the browser UI language of the browser. This is different from `i18n.getAcceptLanguages` which returns the
     * preferred user languages.
     * @returns The browser UI language code such as en-US or fr-FR.
     */
    function getUILanguage(): string;

    /**
     * Detects the language of the provided text using CLD.
     * @param text User input string to be translated.
     */
    function detectLanguage(text: string): Promise<{
        /** CLD detected language reliability */
        isReliable: boolean;
        /** array of detectedLanguage */
        languages: Array<{
            language: LanguageCode;
            /** The percentage of the detected language */
            percentage: number;
        }>;
    }>;
}

/**
 * Use the browser.identity API to get OAuth2 access tokens.
 *
 * Permissions: `identity`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.identity {
    /* identity types */
    /** An object encapsulating an OAuth account id. */
    interface AccountInfo {
        /** A unique identifier for the account. This ID will not change for the lifetime of the account. */
        id: string;
    }

    /* identity functions */
    /**
     * Retrieves a list of AccountInfo objects describing the accounts present on the profile.
     * @deprecated Unsupported on Firefox at this time.
     */
    function getAccounts(): Promise<AccountInfo[]>;

    /**
     * Gets an OAuth2 access token using the client ID and scopes specified in the oauth2 section of manifest.json.
     * @deprecated Unsupported on Firefox at this time.
     */
    function getAuthToken(details?: {
        interactive?: boolean;
        account?: AccountInfo;
        scopes?: string[];
    }): Promise<AccountInfo[] | undefined>;

    /**
     * Retrieves email address and obfuscated gaia id of the user signed into a profile.
     * @deprecated Unsupported on Firefox at this time.
     */
    function getProfileUserInfo(): Promise<{
        email: string;
        id: string;
    }>;

    /**
     * Removes an OAuth2 access token from the Identity API's token cache.
     * @deprecated Unsupported on Firefox at this time.
     */
    function removeCachedAuthToken(details: {
        token: string;
    }): Promise<{
        email: string;
        id: string;
    } | undefined>;

    /** Starts an auth flow at the specified URL. */
    function launchWebAuthFlow(details: {
        url: string;
        interactive?: boolean;
    }): Promise<string>;

    /**
     * Generates a redirect URL to be used in |launchWebAuthFlow|.
     * @param [ path] The path appended to the end of the generated URL.
     */
    function getRedirectURL(path?: string): string;

    /* identity events */
    /**
     * Fired when signin state changes for an account on the user's profile.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onSignInChanged: WebExtEvent<(account: AccountInfo, signedIn: boolean) => void> | undefined;
}

/**
 * Use the `browser.idle` API to detect when the machine's idle state changes.
 *
 * Permissions: `idle`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.idle {
    /* idle types */
    enum IdleState {
        active = "active",
        idle = "idle"
    }

    /* idle functions */
    /**
     * Returns "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise.
     * @param detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have
     *     elapsed since the last user input detected.
     */
    function queryState(detectionIntervalInSeconds: number): Promise<IdleState>;

    /**
     * Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events.
     * The default interval is 60 seconds.
     * @param intervalInSeconds Threshold, in seconds, used to determine when the system is in an idle state.
     */
    function setDetectionInterval(intervalInSeconds: number): void;

    /* idle events */
    /**
     * Fired when the system changes to an active or idle state. The event fires with "idle" if the the user has not
     * generated any input for a specified number of seconds, and "active" when the user generates input on an idle
     * system.
     */
    const onStateChanged: WebExtEvent<(newState: IdleState) => void>;
}

/**
 * The `browser.management` API provides ways to manage the list of extensions that are installed and running.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.management {
    /* management types */
    /** Information about an icon belonging to an extension. */
    interface IconInfo {
        /**
         * A number representing the width and height of the icon. Likely values include (but are not limited to) 128,
         * 48, 24, and 16.
         */
        size: number;
        /**
         * The URL for this icon image. To display a grayscale version of the icon (to indicate that an extension is
         * disabled, for example), append `?grayscale=true` to the URL.
         */
        url: string;
    }

    /** A reason the item is disabled. */
    enum ExtensionDisabledReason {
        unknown = "unknown",
        permissions_increase = "permissions_increase"
    }

    /** The type of this extension. Will always be 'extension'. */
    enum ExtensionType {
        extension = "extension",
        theme = "theme"
    }

    /**
     * How the extension was installed. One of
     * `development`: The extension was loaded unpacked in developer mode,
     * `normal`: The extension was installed normally via an .xpi file,
     * `sideload`: The extension was installed by other software on the machine,
     * `other`: The extension was installed by other means.
     */
    enum ExtensionInstallType {
        development = "development",
        normal = "normal",
        sideload = "sideload",
        other = "other"
    }

    /** Information about an installed extension. */
    interface ExtensionInfo {
        /** The extension's unique identifier. */
        id: string;
        /** The name of this extension. */
        name: string;
        /** A short version of the name of this extension. */
        shortName?: string;
        /** The description of this extension. */
        description: string;
        /** The version of this extension. */
        version: string;
        /** The version name of this extension if the manifest specified one. */
        versionName?: string;
        /** Whether this extension can be disabled or uninstalled by the user. */
        mayDisable: boolean;
        /** Whether it is currently enabled or disabled. */
        enabled: boolean;
        /** A reason the item is disabled. */
        disabledReason?: ExtensionDisabledReason;
        /** The type of this extension. Will always return 'extension'. */
        type: ExtensionType;
        /** The URL of the homepage of this extension. */
        homepageUrl?: string;
        /** The update URL of this extension. */
        updateUrl?: string;
        /** The url for the item's options page, if it has one. */
        optionsUrl: string;
        /**
         * A list of icon information. Note that this just reflects what was declared in the manifest, and the actual
         * image at that url may be larger or smaller than what was declared, so you might consider using explicit
         * width and height attributes on img tags referencing these images. See the manifest documentation on icons
         * for more details.
         */
        icons?: IconInfo[];
        /** Returns a list of API based permissions. */
        permissions?: string[];
        /** Returns a list of host based permissions. */
        hostPermissions?: string[];
        /** How the extension was installed. */
        installType: ExtensionInstallType;
    }

    /* management functions */
    /** Returns a list of information about installed extensions. */
    function getAll(): Promise<ExtensionInfo[] | undefined>;

    /**
     * Returns information about the installed extension that has the given ID.
     * @param id The ID from an item of `management.ExtensionInfo`.
     */
    function get(id: _manifest.ExtensionID): Promise<ExtensionInfo | undefined>;

    /**
     * Returns information about the calling extension. Note: This function can be used without requesting the
     * 'management' permission in the manifest.
     */
    function getSelf(): Promise<ExtensionInfo | undefined>;

    /**
     * Uninstalls the calling extension. Note: This function can be used without requesting the 'management' permission
     * in the manifest.
     */
    function uninstallSelf(options?: {
        /** Whether or not a confirm-uninstall dialog should prompt the user. Defaults to false. */
        showConfirmDialog?: boolean;
        /** The message to display to a user when being asked to confirm removal of the extension. */
        dialogMessage?: string;
    }): Promise<void>;

    /**
     * Enables or disables the given add-on.
     * @param id ID of the add-on to enable/disable.
     * @param enabled Whether to enable or disable the add-on.
     */
    function setEnabled(id: string, enabled: boolean): Promise<void>;

    /* management events */
    /** Fired when an addon has been disabled. */
    const onDisabled: WebExtEvent<(info: ExtensionInfo) => void>;

    /** Fired when an addon has been enabled. */
    const onEnabled: WebExtEvent<(info: ExtensionInfo) => void>;

    /** Fired when an addon has been installed. */
    const onInstalled: WebExtEvent<(info: ExtensionInfo) => void>;

    /** Fired when an addon has been uninstalled. */
    const onUninstalled: WebExtEvent<(info: ExtensionInfo) => void>;
}

/**
 * Permissions: `notifications`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
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
        /** Title of one item of a list notification. */
        title: string;
        /** Additional details about this item. */
        message: string;
    }

    interface CreateNotificationOptions {
        /** Which type of notification to display. */
        type: TemplateType;
        /** A URL to the sender's avatar, app icon, or a thumbnail for image notifications. */
        iconUrl?: string;
        /** A URL to the app icon mask. */
        appIconMaskUrl?: string;
        /** Title of the notification (e.g. sender name for email). */
        title: string;
        /** Main notification content. */
        message: string;
        /** Alternate notification content with a lower-weight font. */
        contextMessage?: string;
        /** Priority ranges from -2 to 2\. -2 is lowest priority. 2 is highest. Zero is default. */
        priority?: number;
        /** A timestamp associated with the notification, in milliseconds past the epoch. */
        eventTime?: number;
        /**
         * Text and icons for up to two notification action buttons.
         * @deprecated Unsupported on Firefox at this time.
         */
        buttons?: Array<{
            title: string;
            iconUrl?: string;
        }>;
        /** A URL to the image thumbnail for image-type notifications. */
        imageUrl?: string;
        /** Items for multi-item notifications. */
        items?: NotificationItem[];
        /** Current progress ranges from 0 to 100. */
        progress?: number;
        /**
         * Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
         */
        isClickable?: boolean;
    }

    interface UpdateNotificationOptions {
        /** Which type of notification to display. */
        type?: TemplateType;
        /** A URL to the sender's avatar, app icon, or a thumbnail for image notifications. */
        iconUrl?: string;
        /** A URL to the app icon mask. */
        appIconMaskUrl?: string;
        /** Title of the notification (e.g. sender name for email). */
        title?: string;
        /** Main notification content. */
        message?: string;
        /** Alternate notification content with a lower-weight font. */
        contextMessage?: string;
        /** Priority ranges from -2 to 2\. -2 is lowest priority. 2 is highest. Zero is default. */
        priority?: number;
        /** A timestamp associated with the notification, in milliseconds past the epoch. */
        eventTime?: number;
        /**
         * Text and icons for up to two notification action buttons.
         * @deprecated Unsupported on Firefox at this time.
         */
        buttons?: Array<{
            title: string;
            iconUrl?: string;
        }>;
        /** A URL to the image thumbnail for image-type notifications. */
        imageUrl?: string;
        /** Items for multi-item notifications. */
        items?: NotificationItem[];
        /** Current progress ranges from 0 to 100. */
        progress?: number;
        /**
         * Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
         */
        isClickable?: boolean;
    }

    /* notifications functions */
    /**
     * Creates and displays a notification.
     * @param options Contents of the notification.
     */
    function create(options: CreateNotificationOptions): Promise<string | undefined>;
    /**
     * Creates and displays a notification.
     * @param notificationId Identifier of the notification. If it is empty, this method generates an id. If it matches
     *     an existing notification, this method first clears that notification before proceeding with the create
     *     operation.
     * @param options Contents of the notification.
     */
    function create(notificationId: string, options: CreateNotificationOptions): Promise<string | undefined>;

    /**
     * Updates an existing notification.
     * @param notificationId The id of the notification to be updated.
     * @param options Contents of the notification to update to.
     * @deprecated Unsupported on Firefox at this time.
     */
    function update(notificationId: string, options: UpdateNotificationOptions): Promise<boolean | undefined>;

    /**
     * Clears an existing notification.
     * @param notificationId The id of the notification to be updated.
     */
    function clear(notificationId: string): Promise<boolean | undefined>;

    /** Retrieves all the notifications. */
    function getAll(): Promise<CreateNotificationOptions>;

    /**
     * Retrieves whether the user has enabled notifications from this app or extension.
     * @deprecated Unsupported on Firefox at this time.
     */
    function getPermissionLevel(): Promise<PermissionLevel>;

    /* notifications events */
    /**
     * Fired when the notification closed, either by the system or by user action.
     * @param notificationId The notificationId of the closed notification.
     * @param byUser True if the notification was closed by the user.
     */
    const onClosed: WebExtEvent<(notificationId: string, byUser: boolean) => void>;

    /**
     * Fired when the user clicked in a non-button area of the notification.
     * @param notificationId The notificationId of the clicked notification.
     */
    const onClicked: WebExtEvent<(notificationId: string) => void>;

    /**
     * Fired when the user pressed a button in the notification.
     * @param notificationId The notificationId of the clicked notification.
     * @param buttonIndex The index of the button clicked by the user.
     */
    const onButtonClicked: WebExtEvent<(notificationId: string, buttonIndex: number) => void>;

    /**
     * Fired when the user changes the permission level.
     * @param level The new permission level.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onPermissionLevelChanged: WebExtEvent<(level: PermissionLevel) => void> | undefined;

    /**
     * Fired when the user clicked on a link for the app's notification settings.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onShowSettings: WebExtEvent<() => void> | undefined;

    /**
     * Fired when the notification is shown.
     * @param notificationId The notificationId of the shown notification.
     */
    const onShown: WebExtEvent<(notificationId: string) => void>;
}

/**
 * Manifest keys: `optional_permissions`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
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
    /** Get a list of all the extension's permissions. */
    function getAll(): Promise<AnyPermissions>;

    /** Check if the extension has the given permissions. */
    function contains(permissions: AnyPermissions): Promise<boolean>;

    /**
     * Request the given permissions.
     *
     * Not allowed in: Devtools pages
     */
    function request(permissions: Permissions): Promise<boolean>;

    /** Relinquish the given permissions. */
    function remove(permissions: Permissions): Promise<void>;

    /* permissions events */
    /**
     * Fired when the extension acquires new permissions.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onAdded: WebExtEvent<(permissions: Permissions) => void> | undefined;

    /**
     * Fired when permissions are removed from the extension.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onRemoved: WebExtEvent<(permissions: Permissions) => void> | undefined;
}

/**
 * Permissions: `privacy`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.privacy {
}

/**
 * Use the `browser.privacy` API to control usage of the features in the browser that can affect a user's privacy.
 *
 * Permissions: `privacy`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.privacy.network {
    /* privacy.network types */

    /** The IP handling policy of WebRTC. */
    enum IPHandlingPolicy {
        default = "default",
        default_public_and_private_interfaces = "default_public_and_private_interfaces",
        default_public_interface_only = "default_public_interface_only",
        disable_non_proxied_udp = "disable_non_proxied_udp"
    }

    /* privacy.network properties */
    /**
     * If enabled, the browser attempts to speed up your web browsing experience by pre-resolving DNS entries,
     * prerendering sites (`<link rel='prefetch' ...>`), and preemptively opening TCP and SSL connections to servers.
     * This preference's value is a boolean, defaulting to `true`.
     */
    const networkPredictionEnabled: types.Setting;

    /** Allow users to enable and disable RTCPeerConnections (aka WebRTC). */
    const peerConnectionEnabled: types.Setting;

    /**
     * Allow users to specify the media performance/privacy tradeoffs which impacts how WebRTC traffic will be routed
     * and how much local address information is exposed. This preference's value is of type IPHandlingPolicy,
     * defaulting to `default`.
     */
    const webRTCIPHandlingPolicy: types.Setting;
}

/**
 * Use the `browser.privacy` API to control usage of the features in the browser that can affect a user's privacy.
 *
 * Permissions: `privacy`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.privacy.services {
    /* privacy.services properties */
    /**
     * If enabled, the password manager will ask if you want to save passwords. This preference's value is a boolean,
     * defaulting to `true`.
     */
    const passwordSavingEnabled: types.Setting;
}

/**
 * Use the `browser.privacy` API to control usage of the features in the browser that can affect a user's privacy.
 *
 * Permissions: `privacy`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.privacy.websites {
    /* privacy.websites types */

    /** The mode for tracking protection. */
    enum TrackingProtectionModeOption {
        always = "always",
        never = "never",
        private_browsing = "private_browsing"
    }

    /* privacy.websites properties */
    /**
     * If disabled, the browser blocks third-party sites from setting cookies. The value of this preference is of type
     * boolean, and the default value is `true`.
     * @deprecated Unsupported on Firefox at this time.
     */
    const thirdPartyCookiesAllowed: types.Setting | undefined;

    /**
     * If enabled, the browser sends auditing pings when requested by a website (`<a ping>`). The value of this
     * preference is of type boolean, and the default value is `true`.
     */
    const hyperlinkAuditingEnabled: types.Setting;

    /**
     * If enabled, the browser sends `referer` headers with your requests. Yes, the name of this preference doesn't
     * match the misspelled header. No, we're not going to change it. The value of this preference is of type boolean,
     * and the default value is `true`.
     */
    const referrersEnabled: types.Setting;

    /**
     * If enabled, the browser attempts to appear similar to other users by reporting generic information to websites.
     * This can prevent websites from uniquely identifying users. Examples of data that is spoofed include number of
     * CPU cores, precision of JavaScript timers, the local timezone, and disabling features such as GamePad support,
     * and the WebSpeech and Navigator APIs. The value of this preference is of type boolean, and the default value is
     * `false`.
     */
    const resistFingerprinting: types.Setting;

    /**
     * If enabled, the browser will associate all data (including cookies, HSTS data, cached images, and more) for any
     * third party domains with the domain in the address bar. This prevents third party trackers from using directly
     * stored information to identify you across different websites, but may break websites where you login with a
     * third party account (such as a Facebook or Google login.) The value of this preference is of type boolean, and
     * the default value is `false`.
     */
    const firstPartyIsolate: types.Setting;

    /**
     * **Available on Windows and ChromeOS only**: If enabled, the browser provides a unique ID to plugins in order to
     * run protected content. The value of this preference is of type boolean, and the default value is `true`.
     * @deprecated Unsupported on Firefox at this time.
     */
    const protectedContentEnabled: types.Setting | undefined;

    /**
     * Allow users to specify the mode for tracking protection. This setting's value is of type
     * TrackingProtectionModeOption, defaulting to `private_browsing_only`.
     */
    const trackingProtectionMode: types.Setting;
}

/**
 * Use the browser.proxy API to register proxy scripts in Firefox. Proxy scripts in Firefox are proxy auto-config files
 * with extra contextual information and support for additional return types.
 *
 * Permissions: `proxy`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.proxy {
    /* proxy functions */
    /** Registers the proxy script for the extension. */
    function register(url: string): Promise<void>;

    /** Unregisters the proxy script for the extension. */
    function unregister(): Promise<void>;

    /**
     * Registers the proxy script for the extension.
     * @deprecated Please use `proxy.register`
     */
    function registerProxyScript(url: string): Promise<any>;

    /* proxy events */
    /** Notifies about proxy script errors. */
    const onProxyError: WebExtEvent<(error: object) => void>;
}

/**
 * Use the `browser.runtime` API to retrieve the background page, return details about the manifest, and listen for and
 * respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs
 * to fully-qualified URLs.
 *
 * Allowed in: Proxy scripts
 */
declare namespace browser.runtime {
    /* runtime types */
    /** An object which allows two way communication with other pages. */
    interface Port {
        name: string;
        disconnect: () => void;
        onDisconnect: events.Event;
        onMessage: events.Event;
        postMessage: () => void;
        /** This property will **only** be present on ports passed to onConnect/onConnectExternal listeners. */
        sender?: MessageSender;
    }

    /** An object containing information about the script context that sent a message or request. */
    interface MessageSender {
        /**
         * The `tabs.Tab` which opened the connection, if any. This property will **only** be present when the
         * connection was opened from a tab (including content scripts), and **only** if the receiver is an extension,
         * not an app.
         */
        tab?: tabs.Tab;
        /**
         * The frame that opened the connection. 0 for top-level frames, positive for child frames. This will only be
         * set when `tab` is set.
         */
        frameId?: number;
        /** The ID of the extension or app that opened the connection, if any. */
        id?: string;
        /**
         * The URL of the page or frame that opened the connection. If the sender is in an iframe, it will be iframe's
         * URL not the URL of the page which hosts it.
         */
        url?: string;
        /**
         * The TLS channel ID of the page or frame that opened the connection, if requested by the extension or app,
         * and if available.
         * @deprecated Unsupported on Firefox at this time.
         */
        tlsChannelId?: string;
    }

    /** The operating system the browser is running on. */
    enum PlatformOs {
        mac = "mac",
        win = "win",
        android = "android",
        cros = "cros",
        linux = "linux",
        openbsd = "openbsd"
    }

    /** The machine's processor architecture. */
    enum PlatformArch {
        arm = "arm",
        x8632 = "x86-32",
        x8664 = "x86-64"
    }

    /** An object containing information about the current platform. */
    interface PlatformInfo {
        /** The operating system the browser is running on. */
        os: PlatformOs;
        /** The machine's processor architecture. */
        arch: PlatformArch;
        /**
         * The native client architecture. This may be different from arch on some platforms.
         * @deprecated Unsupported on Firefox at this time.
         */
        nacl_arch?: PlatformNaclArch;
    }

    /** An object containing information about the current browser. */
    interface BrowserInfo {
        /** The name of the browser, for example 'Firefox'. */
        name: string;
        /** The name of the browser vendor, for example 'Mozilla'. */
        vendor: string;
        /** The browser's version, for example '42.0.0' or '0.8.1pre'. */
        version: string;
        /** The browser's build ID/date, for example '20160101'. */
        buildID: string;
    }

    /** Result of the update check. */
    enum RequestUpdateCheckStatus {
        throttled = "throttled",
        no_update = "no_update",
        update_available = "update_available"
    }

    /** The reason that this event is being dispatched. */
    enum OnInstalledReason {
        install = "install",
        update = "update",
        browser_update = "browser_update"
    }

    /**
     * The reason that the event is being dispatched. 'app_update' is used when the restart is needed because the
     * application is updated to a newer version. 'os_update' is used when the restart is needed because the browser/OS
     * is updated to a newer version. 'periodic' is used when the system runs for more than the permitted uptime set in
     * the enterprise policy.
     */
    enum OnRestartRequiredReason {
        app_update = "app_update",
        os_update = "os_update",
        periodic = "periodic"
    }

    type PlatformNaclArch = any;

    /* runtime properties */
    /** This will be defined during an API method callback if there was an error */
    const lastError: {
        /** Details about the error which occurred. */
        message?: string;
    } | undefined;

    /** The ID of the extension/app. */
    const id: string;

    /* runtime functions */
    /**
     * Retrieves the JavaScript 'window' object for the background page running inside the current extension/app. If
     * the background page is an event page, the system will ensure it is loaded before calling the callback. If there
     * is no background page, an error is set.
     */
    function getBackgroundPage(): Promise<Window>;

    /**
     * Open your Extension's options page, if possible.
     *
     * The precise behavior may depend on your manifest's `options_ui` or `options_page` key, or what the browser
     * happens to support at the time.
     *
     * If your Extension does not declare an options page, or the browser failed to create one for some other reason,
     * the callback will set `lastError`.
     */
    function openOptionsPage(): Promise<void>;

    /**
     * Returns details about the app or extension from the manifest. The object returned is a serialization of the full
     * manifest file.
     */
    function getManifest(): _manifest.WebExtensionManifest;

    /**
     * Converts a relative path within an app/extension install directory to a fully-qualified URL.
     * @param path A path to a resource within an app/extension expressed relative to its install directory.
     * @returns The fully-qualified URL to the resource.
     */
    function getURL(path: string): string;

    /**
     * Sets the URL to be visited upon uninstallation. This may be used to clean up server-side data, do analytics, and
     * implement surveys. Maximum 255 characters.
     * @param url URL to be opened after the extension is uninstalled. This URL must have an http: or https: scheme.
     *     Set an empty string to not open a new tab upon uninstallation.
     */
    function setUninstallURL(url: string): Promise<void>;

    /** Reloads the app or extension. */
    function reload(): void;

    /**
     * Requests an update check for this app/extension.
     * @deprecated Unsupported on Firefox at this time.
     */
    function requestUpdateCheck(): Promise<object>;

    /**
     * Restart the device when the app runs in kiosk mode. Otherwise, it's no-op.
     * @deprecated Unsupported on Firefox at this time.
     */
    function restart(): void;

    /**
     * Attempts to connect to connect listeners within an extension/app (such as the background page), or other
     * extensions/apps. This is useful for content scripts connecting to their extension processes, inter-app/extension
     * communication, and web messaging. Note that this does not connect to any listeners in a content script.
     * Extensions may connect to content scripts embedded in tabs via `tabs.connect`.
     * @param [extensionId] The ID of the extension or app to connect to. If omitted, a connection will be attempted
     *     with your own extension. Required if sending messages from a web page for web messaging.
     * @returns Port through which messages can be sent and received. The port's `runtime.Port onDisconnect` event is
     *     fired if the extension/app does not exist.
     */
    function connect(extensionId?: string, connectInfo?: {
        /** Will be passed into onConnect for processes that are listening for the connection event. */
        name?: string;
        /**
         * Whether the TLS channel ID will be passed into onConnectExternal for processes that are listening for the
         * connection event.
         */
        includeTlsChannelId?: boolean;
    }): Port;

    /**
     * Connects to a native application in the host machine.
     * @param application The name of the registered application to connect to.
     * @returns Port through which messages can be sent and received with the application
     */
    function connectNative(application: string): Port;

    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to
     * `runtime.connect` but only sends a single message, with an optional response. If sending to your extension, the
     * `runtime.onMessage` event will be fired in each page, or `runtime.onMessageExternal`, if a different extension.
     * Note that extensions cannot send messages to content scripts using this method. To send messages to content
     * scripts, use `tabs.sendMessage`.
     *
     * Allowed in: Proxy scripts
     */
    function sendMessage(message: any, options?: {
        /**
         * Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the
         * connection event.
         * @deprecated Unsupported on Firefox at this time.
         */
        includeTlsChannelId?: boolean;
        /** If true, the message will be directed to the extension's proxy sandbox. */
        toProxyScript?: boolean;
    }): Promise<any>;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to
     * `runtime.connect` but only sends a single message, with an optional response. If sending to your extension, the
     * `runtime.onMessage` event will be fired in each page, or `runtime.onMessageExternal`, if a different extension.
     * Note that extensions cannot send messages to content scripts using this method. To send messages to content
     * scripts, use `tabs.sendMessage`.
     *
     * Allowed in: Proxy scripts
     * @param extensionId The ID of the extension/app to send the message to. If omitted, the message will be sent to
     *     your own extension/app. Required if sending messages from a web page for web messaging.
     */
    function sendMessage(extensionId: string, message: any, options?: {
        /**
         * Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the
         * connection event.
         * @deprecated Unsupported on Firefox at this time.
         */
        includeTlsChannelId?: boolean;
        /** If true, the message will be directed to the extension's proxy sandbox. */
        toProxyScript?: boolean;
    }): Promise<any>;

    /**
     * Send a single message to a native application.
     * @param application The name of the native messaging host.
     * @param message The message that will be passed to the native messaging host.
     */
    function sendNativeMessage(application: string, message: any): Promise<any>;

    /** Returns information about the current browser. */
    function getBrowserInfo(): Promise<BrowserInfo>;

    /** Returns information about the current platform. */
    function getPlatformInfo(): Promise<PlatformInfo>;

    /**
     * Returns a DirectoryEntry for the package directory.
     * @deprecated Unsupported on Firefox at this time.
     */
    function getPackageDirectoryEntry(): Promise<object/*DirectoryEntry*/>;

    /* runtime events */
    /**
     * Fired when a profile that has this extension installed first starts up. This event is not fired for incognito
     * profiles.
     */
    const onStartup: WebExtEvent<() => void>;

    /**
     * Fired when the extension is first installed, when the extension is updated to a new version, and when the
     * browser is updated to a new version.
     */
    const onInstalled: WebExtEvent<(details: {
        /** The reason that this event is being dispatched. */
        reason: OnInstalledReason;
        /**
         * Indicates the previous version of the extension, which has just been updated. This is present only if
         * 'reason' is 'update'.
         */
        previousVersion?: string;
        /** Indicates whether the addon is installed as a temporary extension. */
        temporary: boolean;
        /**
         * Indicates the ID of the imported shared module extension which updated. This is present only if 'reason' is
         * 'shared_module_update'.
         * @deprecated Unsupported on Firefox at this time.
         */
        id?: string;
    }) => void>;

    /**
     * Sent to the event page just before it is unloaded. This gives the extension opportunity to do some clean up.
     * Note that since the page is unloading, any asynchronous operations started while handling this event are not
     * guaranteed to complete. If more activity for the event page occurs before it gets unloaded the onSuspendCanceled
     * event will be sent and the page won't be unloaded.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onSuspend: WebExtEvent<() => void> | undefined;

    /**
     * Sent after onSuspend to indicate that the app won't be unloaded after all.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onSuspendCanceled: WebExtEvent<() => void> | undefined;

    /**
     * Fired when an update is available, but isn't installed immediately because the app is currently running. If you
     * do nothing, the update will be installed the next time the background page gets unloaded, if you want it to be
     * installed sooner you can explicitly call `runtime.reload`. If your extension is using a persistent background
     * page, the background page of course never gets unloaded, so unless you call `runtime.reload` manually in
     * response to this event the update will not get installed until the next time the browser itself restarts. If no
     * handlers are listening for this event, and your extension has a persistent background page, it behaves as if
     * `runtime.reload` is called in response to this event.
     * @param details The manifest details of the available update.
     */
    const onUpdateAvailable: WebExtEvent<(details: {
        /** The version number of the available update. */
        version: string;
    }) => void>;

    /**
     * Fired when an update for the browser is available, but isn't installed immediately because a browser restart is
     * required.
     * @deprecated Please use `runtime.onRestartRequired`.
     */
    const onBrowserUpdateAvailable: WebExtEvent<() => void> | undefined;

    /** Fired when a connection is made from either an extension process or a content script. */
    const onConnect: WebExtEvent<(port: Port) => void>;

    /** Fired when a connection is made from another extension. */
    const onConnectExternal: WebExtEvent<(port: Port) => void>;

    /**
     * Fired when a message is sent from either an extension process or a content script.
     *
     * Allowed in: Proxy scripts
     * @param message The message sent by the calling script.
     * @param sendResponse Function to call (at most once) when you have a response. The argument should be any
     *     JSON-ifiable object. If you have more than one `onMessage` listener in the same document, then only one may
     *     send a response. This function becomes invalid when the event listener returns, unless you return true from
     *     the event listener to indicate you wish to send a response asynchronously (this will keep the message
     *     channel open to the other end until `sendResponse` is called).
     * @returns Return true from the event listener if you wish to call `sendResponse` after the event listener
     *     returns.
     */
    const onMessage: WebExtEvent<(message: any, sender: MessageSender, sendResponse: (response?: any) => void) => boolean | Promise<any> | void>;

    /**
     * Fired when a message is sent from another extension/app. Cannot be used in a content script.
     * @param message The message sent by the calling script.
     * @param sendResponse Function to call (at most once) when you have a response. The argument should be any
     *     JSON-ifiable object. If you have more than one `onMessage` listener in the same document, then only one may
     *     send a response. This function becomes invalid when the event listener returns, unless you return true from
     *     the event listener to indicate you wish to send a response asynchronously (this will keep the message
     *     channel open to the other end until `sendResponse` is called).
     * @returns Return true from the event listener if you wish to call `sendResponse` after the event listener
     *     returns.
     */
    const onMessageExternal: WebExtEvent<(message: any, sender: MessageSender, sendResponse: (response?: any) => void) => boolean | Promise<any> | void>;

    /**
     * Fired when an app or the device that it runs on needs to be restarted. The app should close all its windows at
     * its earliest convenient time to let the restart to happen. If the app does nothing, a restart will be enforced
     * after a 24-hour grace period has passed. Currently, this event is only fired for Chrome OS kiosk apps.
     * @param reason The reason that the event is being dispatched.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onRestartRequired: WebExtEvent<(reason: OnRestartRequiredReason) => void> | undefined;
}

/**
 * Use the `browser.storage` API to store, retrieve, and track changes to user data.
 *
 * Permissions: `storage`
 */
declare namespace browser.storage {
    /* storage types */
    interface StorageChange {
        /** The old value of the item, if there was an old value. */
        oldValue?: any;
        /** The new value of the item, if there is a new value. */
        newValue?: any;
    }

    interface StorageArea {
        /**
         * Gets one or more items from storage.
         * @param [keys] A single key to get, list of keys to get, or a dictionary specifying default values (see
         *     description of the object). An empty list or object will return an empty result object. Pass in `null`
         *     to get the entire contents of storage.
         */
        get(keys?: string | string[] | object): Promise<any>;

        /**
         * Gets the amount of space (in bytes) being used by one or more items.
         * @param [keys] A single key or list of keys to get the total usage for. An empty list will return 0\. Pass in
         *     `null` to get the total usage of all of storage.
         * @deprecated Unsupported on Firefox at this time.
         */
        getBytesInUse?(keys?: string | string[]): Promise<number>;

        /**
         * Sets multiple items.
         * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in
         *     storage will not be affected.
         *
         * Primitive values such as numbers will serialize as expected. Values with a `typeof` `"object"` and
         *     `"function"` will typically serialize to `{}`, with the exception of `Array` (serializes as expected),
         *     `Date`, and `Regex` (serialize using their `String` representation).
         */
        set(items: any): Promise<void>;

        /**
         * Removes one or more items from storage.
         * @param keys A single key or a list of keys for items to remove.
         */
        remove(keys: string | string[]): Promise<void>;

        /** Removes all items from storage. */
        clear(): Promise<void>;
    }

    /* storage properties */
    /** Items in the `sync` storage area are synced by the browser. */
    const sync: StorageArea;

    /** Items in the `local` storage area are local to each machine. */
    const local: StorageArea;

    /**
     * Items in the `managed` storage area are set by administrators or native applications, and are read-only for the
     * extension; trying to modify this namespace results in an error.
     */
    const managed: StorageArea;

    /* storage events */
    /**
     * Fired when one or more items change.
     * @param changes Object mapping each key that changed to its corresponding `storage.StorageChange` for that item.
     * @param areaName The name of the storage area (`"sync"`, `"local"` or `"managed"`) the changes are for.
     */
    const onChanged: WebExtEvent<(changes: StorageChange, areaName: string) => void>;
}

/**
 * The theme API allows customizing of visual elements of the browser.
 *
 * Permissions: `theme`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.theme {
    /* theme types */
    /** Info provided in the onUpdated listener. */
    interface ThemeUpdateInfo {
        /** The new theme after update */
        theme: object;
        /** The id of the window the theme has been applied to */
        windowId?: number;
    }

    /* theme functions */
    /**
     * Returns the current theme for the specified window or the last focused window.
     * @param [windowId] The window for which we want the theme.
     */
    function getCurrent(windowId?: number): Promise<_manifest.ThemeType>;

    /**
     * Make complete updates to the theme. Resolves when the update has completed.
     * @param details The properties of the theme to update.
     */
    function update(details: _manifest.ThemeType): void;
    /**
     * Make complete updates to the theme. Resolves when the update has completed.
     * @param windowId The id of the window to update. No id updates all windows.
     * @param details The properties of the theme to update.
     */
    function update(windowId: number, details: _manifest.ThemeType): void;

    /**
     * Removes the updates made to the theme.
     * @param [windowId] The id of the window to reset. No id resets all windows.
     */
    function reset(windowId?: number): void;

    /* theme events */
    /**
     * Fired when a new theme has been applied
     * @param updateInfo Details of the theme update
     */
    const onUpdated: WebExtEvent<(updateInfo: ThemeUpdateInfo) => void>;
}

/**
 * Use the browser.topSites API to access the top sites that are displayed on the new tab page.
 *
 * Permissions: `topSites`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.topSites {
    /* topSites types */
    /** An object encapsulating a most visited URL, such as the URLs on the new tab page. */
    interface MostVisitedURL {
        /** The most visited URL. */
        url: string;
        /** The title of the page. */
        title?: string;
    }

    /* topSites functions */
    /** Gets a list of top sites. */
    function get(options?: {
        /** Which providers to get top sites from. Possible values are "places" and "activityStream". */
        providers?: string[];
    }): Promise<MostVisitedURL[]>;
}

/**
 * Contains types used by other schemas.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.types {
    /* types types */

    /**
     * The scope of the Setting. One of
     *
     * *   `regular`: setting for the regular profile (which is inherited by the incognito profile if not overridden
     * elsewhere),
     * *   `regular_only`: setting for the regular profile only (not inherited by the incognito profile),
     * *   `incognito_persistent`: setting for the incognito profile that survives browser restarts (overrides regular
     * preferences),
     * *   `incognito_session_only`: setting for the incognito profile that can only be set during an incognito session
     * and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
     *
     * Only `regular` is supported by Firefox at this time.
     */
    enum SettingScope {
        regular = "regular",
        regular_only = "regular_only",
        incognito_persistent = "incognito_persistent",
        incognito_session_only = "incognito_session_only"
    }

    /**
     * One of
     *
     * *   `not_controllable`: cannot be controlled by any extension
     * *   `controlled_by_other_extensions`: controlled by extensions with higher precedence
     * *   `controllable_by_this_extension`: can be controlled by this extension
     * *   `controlled_by_this_extension`: controlled by this extension
     */
    enum LevelOfControl {
        not_controllable = "not_controllable",
        controlled_by_other_extensions = "controlled_by_other_extensions",
        controllable_by_this_extension = "controllable_by_this_extension",
        controlled_by_this_extension = "controlled_by_this_extension"
    }

    interface Setting {
        /**
         * Gets the value of a setting.
         * @param details Which setting to consider.
         */
        get(details: {
            /** Whether to return the value that applies to the incognito session (default false). */
            incognito?: boolean;
        }): Promise<{
            /** The value of the setting. */
            value: any;
            /** The level of control of the setting. */
            levelOfControl: LevelOfControl;
            /**
             * Whether the effective value is specific to the incognito session.
             * This property will _only_ be present if the `incognito` property in the `details` parameter of `get()`
             * was true.
             */
            incognitoSpecific?: boolean;
        }>;

        /**
         * Sets the value of a setting.
         * @param details Which setting to change.
         */
        set(details: {
            /**
             * The value of the setting.
             * Note that every setting has a specific value type, which is described together with the setting. An
             * extension should _not_ set a value of a different type.
             */
            value: any;
            /** Where to set the setting (default: regular). */
            scope?: SettingScope;
        }): Promise<void>;

        /**
         * Clears the setting, restoring any default value.
         * @param details Which setting to clear.
         */
        clear(details: {
            /** Where to clear the setting (default: regular). */
            scope?: SettingScope;
        }): Promise<void>;

        /**
         * Fired after the setting changes.
         * @deprecated Unsupported on Firefox at this time.
         */
        onChange: WebExtEvent<(details: {
            /** The value of the setting after the change. */
            value: any;
            /** The level of control of the setting. */
            levelOfControl: LevelOfControl;
            /**
             * Whether the value that has changed is specific to the incognito session.
             * This property will _only_ be present if the user has enabled the extension in incognito mode.
             */
            incognitoSpecific?: boolean;
        }) => void>;
    }
}

/**
 * Use the `browser.webNavigation` API to receive notifications about the status of navigation requests in-flight.
 *
 * Permissions: `webNavigation`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.webNavigation {
    /* webNavigation types */

    /**
     * Cause of the navigation. The same transition types as defined in the history API are used. These are the same
     * transition types as defined in the history API except with `"start_page"` in place of `"auto_toplevel"` (for
     * backwards compatibility).
     */
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

    type _WebNavigationOnBeforeNavigateEvent<T = (details: {
        /** The ID of the tab in which the navigation is about to occur. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
         * subframe. Frame IDs are unique for a given tab and process.
         */
        frameId: number;
        /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
        parentFrameId: number;
        /** The time when the browser was about to start the navigation, in milliseconds since the epoch. */
        timeStamp: number;
    }) => void> = WebExtEventBase<(callback: T, filters?: EventUrlFilters) => void, T>;

    type _WebNavigationOnCommittedEvent<T = (details: {
        /** The ID of the tab in which the navigation occurs. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
         * subframe. Frame IDs are unique within a tab.
         */
        frameId: number;
        /**
         * Cause of the navigation.
         * @deprecated Unsupported on Firefox at this time.
         */
        transitionType?: TransitionType;
        /**
         * A list of transition qualifiers.
         * @deprecated Unsupported on Firefox at this time.
         */
        transitionQualifiers?: TransitionQualifier[];
        /** The time when the navigation was committed, in milliseconds since the epoch. */
        timeStamp: number;
    }) => void> = WebExtEventBase<(callback: T, filters?: EventUrlFilters) => void, T>;

    type _WebNavigationOnDOMContentLoadedEvent<T = (details: {
        /** The ID of the tab in which the navigation occurs. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
         * subframe. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** The time when the page's DOM was fully constructed, in milliseconds since the epoch. */
        timeStamp: number;
    }) => void> = WebExtEventBase<(callback: T, filters?: EventUrlFilters) => void, T>;

    type _WebNavigationOnCompletedEvent<T = (details: {
        /** The ID of the tab in which the navigation occurs. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
         * subframe. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** The time when the document finished loading, in milliseconds since the epoch. */
        timeStamp: number;
    }) => void> = WebExtEventBase<(callback: T, filters?: EventUrlFilters) => void, T>;

    type _WebNavigationOnErrorOccurredEvent<T = (details: {
        /** The ID of the tab in which the navigation occurs. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
         * subframe. Frame IDs are unique within a tab.
         */
        frameId: number;
        /**
         * The error description.
         * @deprecated Unsupported on Firefox at this time.
         */
        error?: string;
        /** The time when the error occurred, in milliseconds since the epoch. */
        timeStamp: number;
    }) => void> = WebExtEventBase<(callback: T, filters?: EventUrlFilters) => void, T>;

    type _WebNavigationOnCreatedNavigationTargetEvent<T = (details: {
        /** The ID of the tab in which the navigation is triggered. */
        sourceTabId: number;
        /** The ID of the process runs the renderer for the source tab. */
        sourceProcessId: number;
        /**
         * The ID of the frame with sourceTabId in which the navigation is triggered. 0 indicates the main frame.
         */
        sourceFrameId: number;
        /** The URL to be opened in the new window. */
        url: string;
        /** The ID of the tab in which the url is opened */
        tabId: number;
        /** The time when the browser was about to create a new view, in milliseconds since the epoch. */
        timeStamp: number;
    }) => void> = WebExtEventBase<(callback: T, filters?: EventUrlFilters) => void, T>;

    type _WebNavigationOnReferenceFragmentUpdatedEvent<T = (details: {
        /** The ID of the tab in which the navigation occurs. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
         * subframe. Frame IDs are unique within a tab.
         */
        frameId: number;
        /**
         * Cause of the navigation.
         * @deprecated Unsupported on Firefox at this time.
         */
        transitionType?: TransitionType;
        /**
         * A list of transition qualifiers.
         * @deprecated Unsupported on Firefox at this time.
         */
        transitionQualifiers?: TransitionQualifier[];
        /** The time when the navigation was committed, in milliseconds since the epoch. */
        timeStamp: number;
    }) => void> = WebExtEventBase<(callback: T, filters?: EventUrlFilters) => void, T>;

    type _WebNavigationOnHistoryStateUpdatedEvent<T = (details: {
        /** The ID of the tab in which the navigation occurs. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a
         * subframe. Frame IDs are unique within a tab.
         */
        frameId: number;
        /**
         * Cause of the navigation.
         * @deprecated Unsupported on Firefox at this time.
         */
        transitionType?: TransitionType;
        /**
         * A list of transition qualifiers.
         * @deprecated Unsupported on Firefox at this time.
         */
        transitionQualifiers?: TransitionQualifier[];
        /** The time when the navigation was committed, in milliseconds since the epoch. */
        timeStamp: number;
    }) => void> = WebExtEventBase<(callback: T, filters?: EventUrlFilters) => void, T>;

    /* webNavigation functions */
    /**
     * Retrieves information about the given frame. A frame refers to an <iframe> or a <frame> of a web page and is
     * identified by a tab ID and a frame ID.
     * @param details Information about the frame to retrieve information about.
     */
    function getFrame(details: {
        /** The ID of the tab in which the frame is. */
        tabId: number;
        /** The ID of the process runs the renderer for this tab. */
        processId?: number;
        /** The ID of the frame in the given tab. */
        frameId: number;
    }): Promise<{
        /**
         * True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired.
         */
        errorOccurred?: boolean;
        /**
         * The URL currently associated with this frame, if the frame identified by the frameId existed at one point in
         * the given tab. The fact that an URL is associated with a given frameId does not imply that the corresponding
         * frame still exists.
         */
        url: string;
        /** The ID of the tab in which the frame is. */
        tabId: number;
        /**
         * The ID of the frame. 0 indicates that this is the main frame; a positive value indicates the ID of a
         * subframe.
         */
        frameId: number;
        /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
        parentFrameId: number;
    }>;

    /**
     * Retrieves information about all frames of a given tab.
     * @param details Information about the tab to retrieve all frames from.
     */
    function getAllFrames(details: {
        /** The ID of the tab. */
        tabId: number;
    }): Promise<Array<{
        /**
         * True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired.
         */
        errorOccurred?: boolean;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number;
        /** The ID of the tab in which the frame is. */
        tabId: number;
        /**
         * The ID of the frame. 0 indicates that this is the main frame; a positive value indicates the ID of a
         * subframe.
         */
        frameId: number;
        /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
        parentFrameId: number;
        /** The URL currently associated with this frame. */
        url: string;
    }>>;

    /* webNavigation events */
    /** Fired when a navigation is about to occur. */
    const onBeforeNavigate: _WebNavigationOnBeforeNavigateEvent;

    /**
     * Fired when a navigation is committed. The document (and the resources it refers to, such as images and
     * subframes) might still be downloading, but at least part of the document has been received from the server and
     * the browser has decided to switch to the new document.
     */
    const onCommitted: _WebNavigationOnCommittedEvent;

    /** Fired when the page's DOM is fully constructed, but the referenced resources may not finish loading. */
    const onDOMContentLoaded: _WebNavigationOnDOMContentLoadedEvent;

    /** Fired when a document, including the resources it refers to, is completely loaded and initialized. */
    const onCompleted: _WebNavigationOnCompletedEvent;

    /**
     * Fired when an error occurs and the navigation is aborted. This can happen if either a network error occurred, or
     * the user aborted the navigation.
     */
    const onErrorOccurred: _WebNavigationOnErrorOccurredEvent;

    /** Fired when a new window, or a new tab in an existing window, is created to host a navigation. */
    const onCreatedNavigationTarget: _WebNavigationOnCreatedNavigationTargetEvent;

    /**
     * Fired when the reference fragment of a frame was updated. All future events for that frame will use the updated
     * URL.
     */
    const onReferenceFragmentUpdated: _WebNavigationOnReferenceFragmentUpdatedEvent;

    /** Fired when the contents of the tab is replaced by a different (usually previously pre-rendered) tab. */
    const onTabReplaced: WebExtEvent<(details: {
        /** The ID of the tab that was replaced. */
        replacedTabId: number;
        /** The ID of the tab that replaced the old tab. */
        tabId: number;
        /** The time when the replacement happened, in milliseconds since the epoch. */
        timeStamp: number;
    }) => void>;

    /**
     * Fired when the frame's history was updated to a new URL. All future events for that frame will use the updated
     * URL.
     */
    const onHistoryStateUpdated: _WebNavigationOnHistoryStateUpdatedEvent;
}

/**
 * Use the `browser.webRequest` API to observe and analyze traffic and to intercept, block, or modify requests
 * in-flight.
 *
 * Permissions: `webRequest`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
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

    /** An object describing filters to apply to webRequest events. */
    interface RequestFilter {
        /** A list of URLs or URL patterns. Requests that cannot match any of the URLs will be filtered out. */
        urls: string[];
        /** A list of request types. Requests that cannot match any of the types will be filtered out. */
        types?: ResourceType[];
        tabId?: number;
        windowId?: number;
    }

    /**
     * An array of HTTP headers. Each header is represented as a dictionary containing the keys `name` and either
     * `value` or `binaryValue`.
     */
    type HttpHeaders = Array<{
        /** Name of the HTTP header. */
        name: string;
        /** Value of the HTTP header if it can be represented by UTF-8. */
        value?: string;
        /**
         * Value of the HTTP header if it cannot be represented by UTF-8, stored as individual byte values (0..255).
         */
        binaryValue?: number[];
    }>;

    /**
     * Returns value for event handlers that have the 'blocking' extraInfoSpec applied. Allows the event handler to
     * modify network requests.
     */
    interface BlockingResponse {
        /**
         * If true, the request is cancelled. Used in onBeforeRequest, this prevents the request from being sent.
         */
        cancel?: boolean;
        /**
         * Only used as a response to the onBeforeRequest and onHeadersReceived events. If set, the original request is
         * prevented from being sent/completed and is instead redirected to the given URL. Redirections to non-HTTP
         * schemes such as data: are allowed. Redirects initiated by a redirect action use the original request method
         * for the redirect, with one exception: If the redirect is initiated at the onHeadersReceived stage, then the
         * redirect will be issued using the GET method.
         */
        redirectUrl?: string;
        /**
         * Only used as a response to the onBeforeSendHeaders event. If set, the request is made with these request
         * headers instead.
         */
        requestHeaders?: HttpHeaders;
        /**
         * Only used as a response to the onHeadersReceived event. If set, the server is assumed to have responded with
         * these response headers instead. Only return `responseHeaders` if you really want to modify the headers in
         * order to limit the number of conflicts (only one extension may modify `responseHeaders` for each request).
         */
        responseHeaders?: HttpHeaders;
        /**
         * Only used as a response to the onAuthRequired event. If set, the request is made using the supplied
         * credentials.
         */
        authCredentials?: {
            username: string;
            password: string;
        };
    }

    /** Contains data uploaded in a URL request. */
    interface UploadData {
        /** An ArrayBuffer with a copy of the data. */
        bytes?: any;
        /** A string with the file's path and name. */
        file?: string;
    }

    type _WebRequestOnBeforeRequestEvent<T = (details: {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
         * relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
         * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
         * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
         * within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** URL of the resource that triggered this request. */
        originUrl?: string;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string;
        /** Contains the HTTP request body data. Only provided if extraInfoSpec contains 'requestBody'. */
        requestBody?: {
            /** Errors when obtaining request body data. */
            error?: string;
            /**
             * If the request method is POST and the body is a sequence of key-value pairs encoded in UTF8, encoded as
             * either multipart/form-data, or application/x-www-form-urlencoded, this dictionary is present and for
             * each key contains the list of all values for that key. If the data is of another media type, or if it is
             * malformed, the dictionary is not present. An example value of this dictionary is {'key': ['value1',
             * 'value2']}.
             */
            formData?: object;
            /**
             * If the request method is PUT or POST, and the body is not already parsed in formData, then the unparsed
             * request body elements are contained in this array.
             */
            raw?: UploadData[];
        };
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
    }) => BlockingResponse | Promise<BlockingResponse> | void> = WebExtEventBase<(callback: T, filter: RequestFilter, extraInfoSpec?: OnBeforeRequestOptions[]) => void, T>;

    type _WebRequestOnBeforeSendHeadersEvent<T = (details: {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
         * relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
         * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
         * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
         * within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** URL of the resource that triggered this request. */
        originUrl?: string;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /** The HTTP request headers that are going to be sent out with this request. */
        requestHeaders?: HttpHeaders;
    }) => BlockingResponse | Promise<BlockingResponse> | void> = WebExtEventBase<(callback: T, filter: RequestFilter, extraInfoSpec?: OnBeforeSendHeadersOptions[]) => void, T>;

    type _WebRequestOnSendHeadersEvent<T = (details: {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
         * relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
         * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
         * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
         * within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** URL of the resource that triggered this request. */
        originUrl?: string;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /** The HTTP request headers that have been sent out with this request. */
        requestHeaders?: HttpHeaders;
    }) => void> = WebExtEventBase<(callback: T, filter: RequestFilter, extraInfoSpec?: OnSendHeadersOptions[]) => void, T>;

    type _WebRequestOnHeadersReceivedEvent<T = (details: {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
         * relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
         * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
         * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
         * within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** URL of the resource that triggered this request. */
        originUrl?: string;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /**
         * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses
         * that lack a status line).
         */
        statusLine: string;
        /** The HTTP response headers that have been received with this response. */
        responseHeaders?: HttpHeaders;
        /** Standard HTTP status code returned by the server. */
        statusCode: number;
    }) => BlockingResponse | Promise<BlockingResponse> | void> = WebExtEventBase<(callback: T, filter: RequestFilter, extraInfoSpec?: OnHeadersReceivedOptions[]) => void, T>;

    type _WebRequestOnAuthRequiredEvent<T = (details: {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
         * relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
         * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
         * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
         * within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** URL of the resource that triggered this request. */
        originUrl?: string;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /** The authentication scheme, e.g. Basic or Digest. */
        scheme: string;
        /** The authentication realm provided by the server, if there is one. */
        realm?: string;
        /** The server requesting authentication. */
        challenger: {
            host: string;
            port: number;
        };
        /** True for Proxy-Authenticate, false for WWW-Authenticate. */
        isProxy: boolean;
        /** The HTTP response headers that were received along with this response. */
        responseHeaders?: HttpHeaders;
        /**
         * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses
         * that lack a status line) or an empty string if there are no headers.
         */
        statusLine: string;
        /** Standard HTTP status code returned by the server. */
        statusCode: number;
    }) => BlockingResponse | Promise<BlockingResponse> | void> = WebExtEventBase<(callback: T, filter: RequestFilter, extraInfoSpec?: OnAuthRequiredOptions[]) => void, T>;

    type _WebRequestOnResponseStartedEvent<T = (details: {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
         * relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
         * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
         * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
         * within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** URL of the resource that triggered this request. */
        originUrl?: string;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /**
         * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
         */
        ip?: string;
        /** Indicates if this response was fetched from disk cache. */
        fromCache: boolean;
        /** Standard HTTP status code returned by the server. */
        statusCode: number;
        /** The HTTP response headers that were received along with this response. */
        responseHeaders?: HttpHeaders;
        /**
         * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses
         * that lack a status line) or an empty string if there are no headers.
         */
        statusLine: string;
    }) => void> = WebExtEventBase<(callback: T, filter: RequestFilter, extraInfoSpec?: OnResponseStartedOptions[]) => void, T>;

    type _WebRequestOnBeforeRedirectEvent<T = (details: {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
         * relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
         * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
         * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
         * within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** URL of the resource that triggered this request. */
        originUrl?: string;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /**
         * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
         */
        ip?: string;
        /** Indicates if this response was fetched from disk cache. */
        fromCache: boolean;
        /** Standard HTTP status code returned by the server. */
        statusCode: number;
        /** The new URL. */
        redirectUrl: string;
        /** The HTTP response headers that were received along with this redirect. */
        responseHeaders?: HttpHeaders;
        /**
         * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses
         * that lack a status line) or an empty string if there are no headers.
         */
        statusLine: string;
    }) => void> = WebExtEventBase<(callback: T, filter: RequestFilter, extraInfoSpec?: OnBeforeRedirectOptions[]) => void, T>;

    type _WebRequestOnCompletedEvent<T = (details: {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
         * relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
         * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
         * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
         * within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** URL of the resource that triggered this request. */
        originUrl?: string;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /**
         * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
         */
        ip?: string;
        /** Indicates if this response was fetched from disk cache. */
        fromCache: boolean;
        /** Standard HTTP status code returned by the server. */
        statusCode: number;
        /** The HTTP response headers that were received along with this response. */
        responseHeaders?: HttpHeaders;
        /**
         * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses
         * that lack a status line) or an empty string if there are no headers.
         */
        statusLine: string;
    }) => void> = WebExtEventBase<(callback: T, filter: RequestFilter, extraInfoSpec?: OnCompletedOptions[]) => void, T>;

    type _WebRequestOnErrorOccurredEvent<T = (details: {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to
         * relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a
         * subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or
         * `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique
         * within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** URL of the resource that triggered this request. */
        originUrl?: string;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /**
         * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
         */
        ip?: string;
        /** Indicates if this response was fetched from disk cache. */
        fromCache: boolean;
        /**
         * The error description. This string is _not_ guaranteed to remain backwards compatible between releases. You
         * must not parse and act based upon its content.
         */
        error: string;
    }) => void> = WebExtEventBase<(callback: T, filter: RequestFilter) => void, T>;

    /* webRequest properties */
    /**
     * The maximum number of times that `handlerBehaviorChanged` can be called per 10 minute sustained interval.
     * `handlerBehaviorChanged` is an expensive function call that shouldn't be called often.
     */
    const MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

    /* webRequest functions */
    /**
     * Needs to be called when the behavior of the webRequest handlers has changed to prevent incorrect handling due to
     * caching. This function call is expensive. Don't call it often.
     */
    function handlerBehaviorChanged(): Promise<void>;

    /** ... */
    function filterResponseData(requestId: string): object/*StreamFilter*/;

    /* webRequest events */
    /**
     * Fired when a request is about to occur.
     * @returns If "blocking" is specified in the "extraInfoSpec" parameter, the event listener should return an object
     *     of this type.
     */
    const onBeforeRequest: _WebRequestOnBeforeRequestEvent;

    /**
     * Fired before sending an HTTP request, once the request headers are available. This may occur after a TCP
     * connection is made to the server, but before any HTTP data is sent.
     * @returns If "blocking" is specified in the "extraInfoSpec" parameter, the event listener should return an object
     *     of this type.
     */
    const onBeforeSendHeaders: _WebRequestOnBeforeSendHeadersEvent;

    /**
     * Fired just before a request is going to be sent to the server (modifications of previous onBeforeSendHeaders
     * callbacks are visible by the time onSendHeaders is fired).
     */
    const onSendHeaders: _WebRequestOnSendHeadersEvent;

    /**
     * Fired when HTTP response headers of a request have been received.
     * @returns If "blocking" is specified in the "extraInfoSpec" parameter, the event listener should return an object
     *     of this type.
     */
    const onHeadersReceived: _WebRequestOnHeadersReceivedEvent;

    /**
     * Fired when an authentication failure is received. The listener has three options: it can provide authentication
     * credentials, it can cancel the request and display the error page, or it can take no action on the challenge. If
     * bad user credentials are provided, this may be called multiple times for the same request.
     * @returns If "blocking" is specified in the "extraInfoSpec" parameter, the event listener should return an object
     *     of this type.
     */
    const onAuthRequired: _WebRequestOnAuthRequiredEvent;

    /**
     * Fired when the first byte of the response body is received. For HTTP requests, this means that the status line
     * and response headers are available.
     */
    const onResponseStarted: _WebRequestOnResponseStartedEvent;

    /** Fired when a server-initiated redirect is about to occur. */
    const onBeforeRedirect: _WebRequestOnBeforeRedirectEvent;

    /** Fired when a request is completed. */
    const onCompleted: _WebRequestOnCompletedEvent;

    /** Fired when an error occurs. */
    const onErrorOccurred: _WebRequestOnErrorOccurredEvent;
}

/**
 * Use the `browser.bookmarks` API to create, organize, and otherwise manipulate bookmarks. Also see Override Pages,
 * which you can use to create a custom Bookmark Manager page.
 *
 * Permissions: `bookmarks`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.bookmarks {
    /* bookmarks types */

    /**
     * Indicates the reason why this node is unmodifiable. The `managed` value indicates that this node was configured
     * by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the
     * user and the extension (default).
     */
    enum BookmarkTreeNodeUnmodifiable {
        managed = "managed"
    }

    /** Indicates the type of a BookmarkTreeNode, which can be one of bookmark, folder or separator. */
    enum BookmarkTreeNodeType {
        bookmark = "bookmark",
        folder = "folder",
        separator = "separator"
    }

    /**
     * A node (either a bookmark or a folder) in the bookmark tree. Child nodes are ordered within their parent folder.
     */
    interface BookmarkTreeNode {
        /**
         * The unique identifier for the node. IDs are unique within the current profile, and they remain valid even
         * after the browser is restarted.
         */
        id: string;
        /** The `id` of the parent folder. Omitted for the root node. */
        parentId?: string;
        /** The 0-based position of this node within its parent folder. */
        index?: number;
        /** The URL navigated to when a user clicks the bookmark. Omitted for folders. */
        url?: string;
        /** The text displayed for the node. */
        title: string;
        /** When this node was created, in milliseconds since the epoch (`new Date(dateAdded)`). */
        dateAdded?: number;
        /** When the contents of this folder last changed, in milliseconds since the epoch. */
        dateGroupModified?: number;
        /**
         * Indicates the reason why this node is unmodifiable. The `managed` value indicates that this node was
         * configured by the system administrator or by the custodian of a supervised user. Omitted if the node can be
         * modified by the user and the extension (default).
         */
        unmodifiable?: BookmarkTreeNodeUnmodifiable;
        /** Indicates the type of the BookmarkTreeNode, which can be one of bookmark, folder or separator. */
        type?: BookmarkTreeNodeType;
        /** An ordered list of children of this node. */
        children?: BookmarkTreeNode[];
    }

    /** Object passed to the create() function. */
    interface CreateDetails {
        /** Defaults to the Other Bookmarks folder. */
        parentId?: string;
        index?: number;
        title?: string;
        url?: string;
        /** Indicates the type of BookmarkTreeNode to create, which can be one of bookmark, folder or separator. */
        type?: BookmarkTreeNodeType;
    }

    export {_import as import};

    export {_export as export};

    /* bookmarks functions */
    /**
     * Retrieves the specified BookmarkTreeNode(s).
     * @param idOrIdList A single string-valued id, or an array of string-valued ids
     */
    function get(idOrIdList: string | string[]): Promise<BookmarkTreeNode[]>;

    /** Retrieves the children of the specified BookmarkTreeNode id. */
    function getChildren(id: string): Promise<BookmarkTreeNode[]>;

    /**
     * Retrieves the recently added bookmarks.
     * @param numberOfItems The maximum number of items to return.
     */
    function getRecent(numberOfItems: number): Promise<BookmarkTreeNode[]>;

    /** Retrieves the entire Bookmarks hierarchy. */
    function getTree(): Promise<BookmarkTreeNode[]>;

    /**
     * Retrieves part of the Bookmarks hierarchy, starting at the specified node.
     * @param id The ID of the root of the subtree to retrieve.
     */
    function getSubTree(id: string): Promise<BookmarkTreeNode[]>;

    /**
     * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce
     * BookmarkTreeNodes matching all specified properties.
     * @param query Either a string of words and quoted phrases that are matched against bookmark URLs and titles, or
     *     an object. If an object, the properties `query`, `url`, and `title` may be specified and bookmarks matching
     *     all specified properties will be produced.
     */
    function search(query: string | {
        /** A string of words and quoted phrases that are matched against bookmark URLs and titles. */
        query?: string;
        /** The URL of the bookmark; matches verbatim. Note that folders have no URL. */
        url?: string;
        /** The title of the bookmark; matches verbatim. */
        title?: string;
    }): Promise<BookmarkTreeNode[]>;

    /**
     * Creates a bookmark or folder under the specified parentId. If url is NULL or missing, it will be a folder.
     */
    function create(bookmark: CreateDetails): Promise<BookmarkTreeNode | undefined>;

    /** Moves the specified BookmarkTreeNode to the provided location. */
    function move(id: string, destination: {
        parentId?: string;
        index?: number;
    }): Promise<BookmarkTreeNode | undefined>;

    /**
     * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified
     * properties will be left unchanged. **Note:** Currently, only 'title' and 'url' are supported.
     */
    function update(id: string, changes: {
        title?: string;
        url?: string;
    }): Promise<BookmarkTreeNode | undefined>;

    /** Removes a bookmark or an empty bookmark folder. */
    function remove(id: string): Promise<void>;

    /** Recursively removes a bookmark folder. */
    function removeTree(id: string): Promise<void>;

    /**
     * Imports bookmarks from an html bookmark file
     * @deprecated Unsupported on Firefox at this time.
     */
    function _import(): Promise<void>;

    /**
     * Exports bookmarks to an html bookmark file
     * @deprecated Unsupported on Firefox at this time.
     */
    function _export(): Promise<void>;

    /* bookmarks events */
    /** Fired when a bookmark or folder is created. */
    const onCreated: WebExtEvent<(id: string, bookmark: BookmarkTreeNode) => void>;

    /**
     * Fired when a bookmark or folder is removed. When a folder is removed recursively, a single notification is fired
     * for the folder, and none for its contents.
     */
    const onRemoved: WebExtEvent<(id: string, removeInfo: {
        parentId: string;
        index: number;
        node: BookmarkTreeNode;
    }) => void>;

    /**
     * Fired when a bookmark or folder changes. **Note:** Currently, only title and url changes trigger this.
     */
    const onChanged: WebExtEvent<(id: string, changeInfo: {
        title: string;
        url?: string;
    }) => void>;

    /** Fired when a bookmark or folder is moved to a different parent folder. */
    const onMoved: WebExtEvent<(id: string, moveInfo: {
        parentId: string;
        index: number;
        oldParentId: string;
        oldIndex: number;
    }) => void>;

    /**
     * Fired when the children of a folder have changed their order due to the order being sorted in the UI. This is
     * not called as a result of a move().
     * @deprecated Unsupported on Firefox at this time.
     */
    const onChildrenReordered: WebExtEvent<(id: string, reorderInfo: {
        childIds: string[];
    }) => void> | undefined;

    /**
     * Fired when a bookmark import session is begun. Expensive observers should ignore onCreated updates until
     * onImportEnded is fired. Observers should still handle other notifications immediately.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onImportBegan: WebExtEvent<() => void> | undefined;

    /**
     * Fired when a bookmark import session is ended.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onImportEnded: WebExtEvent<() => void> | undefined;
}

/**
 * Use browser actions to put icons in the main browser toolbar, to the right of the address bar. In addition to its
 * icon, a browser action can also have a tooltip, a badge, and a popup.
 *
 * Manifest keys: `browser_action`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.browserAction {
    /* browserAction types */
    type ColorArray = [number, number, number, number];

    /** Pixel data for an image. Must be an ImageData object (for example, from a `canvas` element). */
    type ImageDataType = object/*ImageData*/;

    /* browserAction functions */
    /** Sets the title of the browser action. This shows up in the tooltip. */
    function setTitle(details: {
        /** The string the browser action should display when moused over. */
        title: string;
        /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
        tabId?: number;
    }): Promise<void>;

    /** Gets the title of the browser action. */
    function getTitle(details: {
        /**
         * Specify the tab to get the title from. If no tab is specified, the non-tab-specific title is returned.
         */
        tabId?: number;
    }): Promise<string>;

    /**
     * Sets the icon for the browser action. The icon can be specified either as the path to an image file or as the
     * pixel data from a canvas element, or as dictionary of either one of those. Either the **path** or the
     * **imageData** property must be specified.
     */
    function setIcon(details: {
        /**
         * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is
         * specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the
         * number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19
         * will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified.
         * Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        imageData?: ImageDataType | {
            [key: number]: ImageDataType;
        };
        /**
         * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If
         * the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel
         * density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with
         * size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must
         * be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        path?: string | {
            [key: number]: string;
        };
        /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
        tabId?: number;
    }): Promise<void>;

    /** Sets the html document to be opened as a popup when the user clicks on the browser action's icon. */
    function setPopup(details: {
        /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
        tabId?: number;
        /** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string;
    }): Promise<void>;

    /** Gets the html document set as the popup for this browser action. */
    function getPopup(details: {
        /**
         * Specify the tab to get the popup from. If no tab is specified, the non-tab-specific popup is returned.
         */
        tabId?: number;
    }): Promise<string>;

    /** Sets the badge text for the browser action. The badge is displayed on top of the icon. */
    function setBadgeText(details: {
        /** Any number of characters can be passed, but only about four can fit in the space. */
        text: string;
        /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
        tabId?: number;
    }): Promise<void>;

    /**
     * Gets the badge text of the browser action. If no tab is specified, the non-tab-specific badge text is returned.
     */
    function getBadgeText(details: {
        /**
         * Specify the tab to get the badge text from. If no tab is specified, the non-tab-specific badge text is
         * returned.
         */
        tabId?: number;
    }): Promise<string>;

    /** Sets the background color for the badge. */
    function setBadgeBackgroundColor(details: {
        /**
         * An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque
         * red is `[255, 0, 0, 255]`. Can also be a string with a CSS value, with opaque red being `#FF0000` or `#F00`.
         */
        color: string | ColorArray;
        /** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
        tabId?: number;
    }): Promise<void>;

    /** Gets the background color of the browser action. */
    function getBadgeBackgroundColor(details: {
        /**
         * Specify the tab to get the badge background color from. If no tab is specified, the non-tab-specific badge
         * background color is returned.
         */
        tabId?: number;
    }): Promise<ColorArray>;

    /**
     * Enables the browser action for a tab. By default, browser actions are enabled.
     * @param [tabId] The id of the tab for which you want to modify the browser action.
     */
    function enable(tabId?: number): Promise<void>;

    /**
     * Disables the browser action for a tab.
     * @param [tabId] The id of the tab for which you want to modify the browser action.
     */
    function disable(tabId?: number): Promise<void>;

    /** Opens the extension popup window in the active window. */
    function openPopup(): Promise<void>;

    /* browserAction events */
    /**
     * Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup.
     */
    const onClicked: WebExtEvent<(tab: tabs.Tab) => void>;
}

/**
 * Use the `browser.browsingData` API to remove browsing data from a user's local profile.
 *
 * Permissions: `browsingData`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.browsingData {
    /* browsingData types */
    /** Options that determine exactly what data will be removed. */
    interface RemovalOptions {
        /**
         * Remove data accumulated on or after this date, represented in milliseconds since the epoch (accessible via
         * the `getTime` method of the JavaScript `Date` object). If absent, defaults to 0 (which would remove all
         * browsing data).
         */
        since?: extensionTypes.Date;
        /** Only remove data associated with these hostnames (only applies to cookies and localStorage). */
        hostnames?: string[];
        /**
         * An object whose properties specify which origin types ought to be cleared. If this object isn't specified,
         * it defaults to clearing only "unprotected" origins. Please ensure that you _really_ want to remove
         * application data before adding 'protectedWeb' or 'extensions'.
         */
        originTypes?: {
            /** Normal websites. */
            unprotectedWeb?: boolean;
            /** Websites that have been installed as hosted applications (be careful!). */
            protectedWeb?: boolean;
            /** Extensions and packaged applications a user has installed (be _really_ careful!). */
            extension?: boolean;
        };
    }

    /** A set of data types. Missing data types are interpreted as `false`. */
    interface DataTypeSet {
        /**
         * The browser's cache. Note: when removing data, this clears the _entire_ cache: it is not limited to the
         * range you specify.
         */
        cache?: boolean;
        /** The browser's cookies. */
        cookies?: boolean;
        /** The browser's download list. */
        downloads?: boolean;
        /** The browser's stored form data. */
        formData?: boolean;
        /** The browser's history. */
        history?: boolean;
        /** Websites' IndexedDB data. */
        indexedDB?: boolean;
        /** Websites' local storage data. */
        localStorage?: boolean;
        /** Server-bound certificates. */
        serverBoundCertificates?: boolean;
        /** Stored passwords. */
        passwords?: boolean;
        /** Plugins' data. */
        pluginData?: boolean;
        /** Service Workers. */
        serviceWorkers?: boolean;
    }

    /* browsingData functions */
    /**
     * Reports which types of data are currently selected in the 'Clear browsing data' settings UI. Note: some of the
     * data types included in this API are not available in the settings UI, and some UI settings control more than one
     * data type listed here.
     */
    function settings(): Promise<{
        options: RemovalOptions;
        /**
         * All of the types will be present in the result, with values of `true` if they are both selected to be
         * removed and permitted to be removed, otherwise `false`.
         */
        dataToRemove: DataTypeSet;
        /**
         * All of the types will be present in the result, with values of `true` if they are permitted to be removed
         * (e.g., by enterprise policy) and `false` if not.
         */
        dataRemovalPermitted: DataTypeSet;
    }>;

    /**
     * Clears various types of browsing data stored in a user's profile.
     * @param dataToRemove The set of data types to remove.
     */
    function remove(options: RemovalOptions, dataToRemove: DataTypeSet): Promise<void>;

    /**
     * Clears websites' appcache data.
     * @deprecated Unsupported on Firefox at this time.
     */
    function removeAppcache(options: RemovalOptions): Promise<void>;

    /** Clears the browser's cache. */
    function removeCache(options: RemovalOptions): Promise<void>;

    /** Clears the browser's cookies and server-bound certificates modified within a particular timeframe. */
    function removeCookies(options: RemovalOptions): Promise<void>;

    /** Clears the browser's list of downloaded files (_not_ the downloaded files themselves). */
    function removeDownloads(options: RemovalOptions): Promise<void>;

    /**
     * Clears websites' file system data.
     * @deprecated Unsupported on Firefox at this time.
     */
    function removeFileSystems(options: RemovalOptions): Promise<void>;

    /** Clears the browser's stored form data (autofill). */
    function removeFormData(options: RemovalOptions): Promise<void>;

    /** Clears the browser's history. */
    function removeHistory(options: RemovalOptions): Promise<void>;

    /**
     * Clears websites' IndexedDB data.
     * @deprecated Unsupported on Firefox at this time.
     */
    function removeIndexedDB(options: RemovalOptions): Promise<void>;

    /** Clears websites' local storage data. */
    function removeLocalStorage(options: RemovalOptions): Promise<void>;

    /** Clears plugins' data. */
    function removePluginData(options: RemovalOptions): Promise<void>;

    /** Clears the browser's stored passwords. */
    function removePasswords(options: RemovalOptions): Promise<void>;

    /**
     * Clears websites' WebSQL data.
     * @deprecated Unsupported on Firefox at this time.
     */
    function removeWebSQL(options: RemovalOptions): Promise<void>;
}

/**
 * Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to
 * open the browser action or send a command to the xtension.
 *
 * Manifest keys: `commands`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.commands {
    /* commands types */
    interface Command {
        /** The name of the Extension Command */
        name?: string;
        /** The Extension Command description */
        description?: string;
        /** The shortcut active for this command, or blank if not active. */
        shortcut?: string;
    }

    /* commands functions */
    /** Returns all the registered extension commands for this extension and their shortcut (if active). */
    function getAll(): Promise<Command[] | undefined>;

    /* commands events */
    /** Fired when a registered command is activated using a keyboard shortcut. */
    const onCommand: WebExtEvent<(command: string) => void>;
}

/**
 * Permissions: `devtools`
 *
 * Allowed in: Devtools pages only
 */
declare namespace browser.devtools {
}

/**
 * Use the `browser.devtools.inspectedWindow` API to interact with the inspected window: obtain the tab ID for the
 * inspected page, evaluate the code in the context of the inspected window, reload the page, or obtain the list of
 * resources within the page.
 *
 * Allowed in: Devtools pages only
 */
declare namespace browser.devtools.inspectedWindow {
    /* devtools.inspectedWindow types */
    /** A resource within the inspected page, such as a document, a script, or an image. */
    interface Resource {
        /** The URL of the resource. */
        url: string;

        /**
         * Gets the content of the resource.
         * @deprecated Unsupported on Firefox at this time.
         */
        getContent?(): Promise<object>;

        /**
         * Sets the content of the resource.
         * @param content New content of the resource. Only resources with the text type are currently supported.
         * @param commit True if the user has finished editing the resource, and the new content of the resource should
         *     be persisted; false if this is a minor change sent in progress of the user editing the resource.
         * @deprecated Unsupported on Firefox at this time.
         */
        setContent?(content: string, commit: boolean): Promise<any>;
    }

    /* devtools.inspectedWindow properties */
    /** The ID of the tab being inspected. This ID may be used with browser.tabs.* API. */
    const tabId: number;

    /* devtools.inspectedWindow functions */
    /**
     * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must
     * evaluate to a JSON-compliant object, otherwise an exception is thrown. The eval function can report either a
     * DevTools-side error or a JavaScript exception that occurs during evaluation. In either case, the `result`
     * parameter of the callback is `undefined`. In the case of a DevTools-side error, the `isException` parameter is
     * non-null and has `isError` set to true and `code` set to an error code. In the case of a JavaScript error,
     * `isException` is set to true and `value` is set to the string value of thrown object.
     * @param expression An expression to evaluate.
     * @param [options] The options parameter can contain one or more options.
     */
    function eval(expression: string, options?: {
        /**
         * If specified, the expression is evaluated on the iframe whose URL matches the one specified. By default, the
         * expression is evaluated in the top frame of the inspected page.
         * @deprecated Unsupported on Firefox at this time.
         */
        frameURL?: string;
        /**
         * Evaluate the expression in the context of the content script of the calling extension, provided that the
         * content script is already injected into the inspected page. If not, the expression is not evaluated and the
         * callback is invoked with the exception parameter set to an object that has the `isError` field set to true
         * and the `code` field set to `E_NOTFOUND`.
         * @deprecated Unsupported on Firefox at this time.
         */
        useContentScriptContext?: boolean;
        /**
         * Evaluate the expression in the context of a content script of an extension that matches the specified
         * origin. If given, contextSecurityOrigin overrides the 'true' setting on userContentScriptContext.
         * @deprecated Unsupported on Firefox at this time.
         */
        contextSecurityOrigin?: string;
    }): Promise<object | undefined>;

    /** Reloads the inspected page. */
    function reload(reloadOptions?: {
        /**
         * When true, the loader will bypass the cache for all inspected page resources loaded before the `load` event
         * is fired. The effect is similar to pressing Ctrl+Shift+R in the inspected window or within the Developer
         * Tools window.
         */
        ignoreCache?: boolean;
        /**
         * If specified, the string will override the value of the `User-Agent` HTTP header that's sent while loading
         * the resources of the inspected page. The string will also override the value of the `navigator.userAgent`
         * property that's returned to any scripts that are running within the inspected page.
         */
        userAgent?: string;
        /**
         * If specified, the script will be injected into every frame of the inspected page immediately upon load,
         * before any of the frame's scripts. The script will not be injected after subsequent reloads—for example, if
         * the user presses Ctrl+R.
         */
        injectedScript?: string;
        /**
         * If specified, this script evaluates into a function that accepts three string arguments: the source to
         * preprocess, the URL of the source, and a function name if the source is an DOM event handler. The
         * preprocessorerScript function should return a string to be compiled by Chrome in place of the input source.
         * In the case that the source is a DOM event handler, the returned source must compile to a single JS
         * function.
         * @deprecated Please avoid using this parameter, it will be removed soon.
         */
        preprocessorScript?: string;
    }): void;

    /**
     * Retrieves the list of resources from the inspected page.
     * @deprecated Unsupported on Firefox at this time.
     */
    function getResources(): Promise<Resource[]>;

    /* devtools.inspectedWindow events */
    /**
     * Fired when a new resource is added to the inspected page.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onResourceAdded: WebExtEvent<(resource: Resource) => void> | undefined;

    /**
     * Fired when a new revision of the resource is committed (e.g. user saves an edited version of the resource in the
     * Developer Tools).
     * @param content New content of the resource.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onResourceContentCommitted: WebExtEvent<(resource: Resource, content: string) => void> | undefined;
}

/**
 * Use the `browser.devtools.network` API to retrieve the information about network requests displayed by the Developer
 * Tools in the Network panel.
 *
 * Allowed in: Devtools pages only
 */
declare namespace browser.devtools.network {
    /* devtools.network types */
    /**
     * Represents a network request for a document resource (script, image and so on). See HAR Specification for
     * reference.
     */
    interface Request {
        /** Returns content of the response body. */
        getContent(): Promise<object>;
    }

    /* devtools.network functions */
    /**
     * Returns HAR log that contains all known network requests.
     * @deprecated Unsupported on Firefox at this time.
     */
    function getHAR(): Promise<any>;

    /* devtools.network events */
    /**
     * Fired when a network request is finished and all request data are available.
     * @param request Description of a network request in the form of a HAR entry. See HAR specification for details.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onRequestFinished: WebExtEvent<(request: Request) => void> | undefined;

    /**
     * Fired when the inspected window navigates to a new page.
     * @param url URL of the new page.
     */
    const onNavigated: WebExtEvent<(url: string) => void>;
}

/**
 * Use the `browser.devtools.panels` API to integrate your extension into Developer Tools window UI: create your own
 * panels, access existing panels, and add sidebars.
 *
 * Allowed in: Devtools pages only
 */
declare namespace browser.devtools.panels {
    /* devtools.panels types */
    /** Represents the Elements panel. */
    interface ElementsPanel {
        /**
         * Creates a pane within panel's sidebar.
         * @param title Text that is displayed in sidebar caption.
         * @param [callback] A callback invoked when the sidebar is created.
         */
        createSidebarPane(title: string, callback?: (result: ExtensionSidebarPane) => void): void;

        /** Fired when an object is selected in the panel. */
        onSelectionChanged: WebExtEvent<() => void>;
    }

    /** Represents the Sources panel. */
    interface SourcesPanel {
        /**
         * Creates a pane within panel's sidebar.
         * @param title Text that is displayed in sidebar caption.
         * @deprecated Unsupported on Firefox at this time.
         */
        createSidebarPane?(title: string): Promise<ExtensionSidebarPane | undefined>;

        /**
         * Fired when an object is selected in the panel.
         * @deprecated Unsupported on Firefox at this time.
         */
        onSelectionChanged: WebExtEvent<() => void>;
    }

    /** Represents a panel created by extension. */
    interface ExtensionPanel {
        /**
         * Appends a button to the status bar of the panel.
         * @param iconPath Path to the icon of the button. The file should contain a 64x24-pixel image composed of two
         *     32x24 icons. The left icon is used when the button is inactive; the right icon is displayed when the
         *     button is pressed.
         * @param tooltipText Text shown as a tooltip when user hovers the mouse over the button.
         * @param disabled Whether the button is disabled.
         * @deprecated Unsupported on Firefox at this time.
         */
        createStatusBarButton?(iconPath: string, tooltipText: string, disabled: boolean): Button;

        /**
         * Fired upon a search action (start of a new search, search result navigation, or search being canceled).
         * @param action Type of search action being performed.
         * @param [queryString] Query string (only for 'performSearch').
         * @deprecated Unsupported on Firefox at this time.
         */
        onSearch: WebExtEvent<(action: string, queryString?: string) => void>;
        /**
         * Fired when the user switches to the panel.
         * @param window The JavaScript `window` object of panel's page.
         */
        onShown: WebExtEvent<(window: object/*global*/) => void>;
        /** Fired when the user switches away from the panel. */
        onHidden: WebExtEvent<() => void>;
    }

    /** A sidebar created by the extension. */
    interface ExtensionSidebarPane {
        /**
         * Sets the height of the sidebar.
         * @param height A CSS-like size specification, such as `'100px'` or `'12ex'`.
         * @deprecated Unsupported on Firefox at this time.
         */
        setHeight?(height: string): void;

        /**
         * Sets an expression that is evaluated within the inspected page. The result is displayed in the sidebar pane.
         * @param expression An expression to be evaluated in context of the inspected page. JavaScript objects and DOM
         *     nodes are displayed in an expandable tree similar to the console/watch.
         * @param [rootTitle] An optional title for the root of the expression tree.
         */
        setExpression(expression: string, rootTitle?: string): Promise<void>;

        /**
         * Sets a JSON-compliant object to be displayed in the sidebar pane.
         * @param jsonObject An object to be displayed in context of the inspected page. Evaluated in the context of
         *     the caller (API client).
         * @param [rootTitle] An optional title for the root of the expression tree.
         */
        setObject(jsonObject: string, rootTitle?: string): Promise<void>;

        /**
         * Sets an HTML page to be displayed in the sidebar pane.
         * @param path Relative path of an extension page to display within the sidebar.
         * @deprecated Unsupported on Firefox at this time.
         */
        setPage?(path: string): void;

        /**
         * Fired when the sidebar pane becomes visible as a result of user switching to the panel that hosts it.
         * @param window The JavaScript `window` object of the sidebar page, if one was set with the `setPage()` method.
         */
        onShown: WebExtEvent<(window: object/*global*/) => void>;
        /**
         * Fired when the sidebar pane becomes hidden as a result of the user switching away from the panel that hosts
         * the sidebar pane.
         */
        onHidden: WebExtEvent<() => void>;
    }

    /** A button created by the extension. */
    interface Button {
        /**
         * Updates the attributes of the button. If some of the arguments are omitted or `null`, the corresponding
         * attributes are not updated.
         * @param [iconPath] Path to the new icon of the button.
         * @param [tooltipText] Text shown as a tooltip when user hovers the mouse over the button.
         * @param [disabled] Whether the button is disabled.
         * @deprecated Unsupported on Firefox at this time.
         */
        update?(iconPath?: string, tooltipText?: string, disabled?: boolean): void;

        /**
         * Fired when the button is clicked.
         * @deprecated Unsupported on Firefox at this time.
         */
        onClicked: WebExtEvent<() => void>;
    }

    /* devtools.panels properties */
    /** Elements panel. */
    const elements: ElementsPanel;

    /** Sources panel. */
    const sources: SourcesPanel;

    /** The name of the current devtools theme. */
    const themeName: string;

    /* devtools.panels functions */
    /**
     * Creates an extension panel.
     * @param title Title that is displayed next to the extension icon in the Developer Tools toolbar.
     * @param iconPath Path of the panel's icon relative to the extension directory.
     * @param pagePath Path of the panel's HTML page relative to the extension directory.
     */
    function create(title: string, iconPath: string, pagePath: string): Promise<ExtensionPanel | undefined>;

    /**
     * Specifies the function to be called when the user clicks a resource link in the Developer Tools window. To unset
     * the handler, either call the method with no parameters or pass null as the parameter.
     * @deprecated Unsupported on Firefox at this time.
     */
    function setOpenResourceHandler(): Promise<devtools.inspectedWindow.Resource | undefined>;

    /**
     * Requests DevTools to open a URL in a Developer Tools panel.
     * @param url The URL of the resource to open.
     * @param lineNumber Specifies the line number to scroll to when the resource is loaded.
     * @deprecated Unsupported on Firefox at this time.
     */
    function openResource(url: string, lineNumber: number): Promise<void>;

    /* devtools.panels events */
    /**
     * Fired when the devtools theme changes.
     * @param themeName The name of the current devtools theme.
     */
    const onThemeChanged: WebExtEvent<(themeName: string) => void>;
}

/**
 * Use the `browser.find` API to interact with the browser's `Find` interface.
 *
 * Permissions: `find`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.find {
    /* find functions */
    /**
     * Search for text in document and store found ranges in array, in document order.
     * @param queryphrase The string to search for.
     * @param [params] Search parameters.
     */
    function find(queryphrase: string, params?: {
        /** Tab to query. Defaults to the active tab. */
        tabId?: number;
        /** Find only ranges with case sensitive match. */
        caseSensitive?: boolean;
        /** Find only ranges that match entire word. */
        entireWord?: boolean;
        /** Return rectangle data which describes visual position of search results. */
        includeRectData?: boolean;
        /** Return range data which provides range data in a serializable form. */
        includeRangeData?: boolean;
    }): Promise<{
        count: number;
        rangeData?: Array<{
            framePos: number;
            startTextNodePos: number;
            endTextNodePos: number;
            startOffset: number;
            endOffset: number;
        }>;
        rectData?: Array<{
            rectsAndTexts: {
                rectList: Array<{
                    top: number;
                    left: number;
                    bottom: number;
                    right: number;
                }>;
                textList: string[];
            };
            textList: string;
        }>;
    }>;

    /**
     * Highlight a range
     * @param [params] highlightResults parameters
     */
    function highlightResults(params?: {
        /** Found range to be highlighted. Default highlights all ranges. */
        rangeIndex?: number;
        /** Tab to highlight. Defaults to the active tab. */
        tabId?: number;
        /** Don't scroll to highlighted item. */
        noScroll?: boolean;
    }): void;

    /**
     * Remove all highlighting from previous searches.
     * @param [tabId] Tab to highlight. Defaults to the active tab.
     */
    function removeHighlighting(tabId?: number): void;
}

/**
 * Exposes the browser's profiler.
 *
 * Permissions: `geckoProfiler`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
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
    /** Starts the profiler with the specified settings. */
    function start(settings: {
        /**
         * The size in bytes of the buffer used to store profiling data. A larger value allows capturing a profile that
         * covers a greater amount of time.
         */
        bufferSize: number;
        /**
         * Interval in milliseconds between samples of profiling data. A smaller value will increase the detail of the
         * profiles captured.
         */
        interval: number;
        /** A list of active features for the profiler. */
        features: ProfilerFeature[];
        /** A list of thread names for which to capture profiles. */
        threads?: string[];
    }): Promise<any>;

    /** Stops the profiler and discards any captured profile data. */
    function stop(): Promise<any>;

    /** Pauses the profiler, keeping any profile data that is already written. */
    function pause(): Promise<any>;

    /** Resumes the profiler with the settings that were initially used to start it. */
    function resume(): Promise<any>;

    /** Gathers the profile data from the current profiling session. */
    function getProfile(): Promise<any>;

    /**
     * Gathers the profile data from the current profiling session. The returned promise resolves to an array buffer
     * that contains a JSON string.
     */
    function getProfileAsArrayBuffer(): Promise<any>;

    /**
     * Gets the debug symbols for a particular library.
     * @param debugName The name of the library's debug file. For example, 'xul.pdb
     * @param breakpadId The Breakpad ID of the library
     */
    function getSymbols(debugName: string, breakpadId: string): Promise<any>;

    /* geckoProfiler events */
    /**
     * Fires when the profiler starts/stops running.
     * @param isRunning Whether the profiler is running or not. Pausing the profiler will not affect this value.
     */
    const onRunning: WebExtEvent<(isRunning: boolean) => void>;
}

/**
 * Use the `browser.history` API to interact with the browser's record of visited pages. You can add, remove, and query
 * for URLs in the browser's history. To override the history page with your own version, see Override Pages.
 *
 * Permissions: `history`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.history {
    /* history types */

    /** The transition type for this visit from its referrer. */
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

    /** An object encapsulating one result of a history query. */
    interface HistoryItem {
        /** The unique identifier for the item. */
        id: string;
        /** The URL navigated to by a user. */
        url?: string;
        /** The title of the page when it was last loaded. */
        title?: string;
        /** When this page was last loaded, represented in milliseconds since the epoch. */
        lastVisitTime?: number;
        /** The number of times the user has navigated to this page. */
        visitCount?: number;
        /** The number of times the user has navigated to this page by typing in the address. */
        typedCount?: number;
    }

    /** An object encapsulating one visit to a URL. */
    interface VisitItem {
        /** The unique identifier for the item. */
        id: string;
        /** The unique identifier for this visit. */
        visitId: string;
        /** When this visit occurred, represented in milliseconds since the epoch. */
        visitTime?: number;
        /** The visit ID of the referrer. */
        referringVisitId: string;
        /** The transition type for this visit from its referrer. */
        transition: TransitionType;
    }

    /* history functions */
    /** Searches the history for the last visit time of each page matching the query. */
    function search(query: {
        /** A free-text query to the history service. Leave empty to retrieve all pages. */
        text: string;
        /**
         * Limit results to those visited after this date. If not specified, this defaults to 24 hours in the past.
         */
        startTime?: extensionTypes.Date;
        /** Limit results to those visited before this date. */
        endTime?: extensionTypes.Date;
        /** The maximum number of results to retrieve. Defaults to 100. */
        maxResults?: number;
    }): Promise<HistoryItem[]>;

    /** Retrieves information about visits to a URL. */
    function getVisits(details: {
        /**
         * The URL for which to retrieve visit information. It must be in the format as returned from a call to
         * history.search.
         */
        url: string;
    }): Promise<VisitItem[]>;

    /**
     * Adds a URL to the history with a default visitTime of the current time and a default transition type of "link".
     */
    function addUrl(details: {
        /** The URL to add. Must be a valid URL that can be added to history. */
        url: string;
        /** The title of the page. */
        title?: string;
        /** The transition type for this visit from its referrer. */
        transition?: TransitionType;
        /** The date when this visit occurred. */
        visitTime?: extensionTypes.Date;
    }): Promise<void>;

    /** Removes all occurrences of the given URL from the history. */
    function deleteUrl(details: {
        /** The URL to remove. */
        url: string;
    }): Promise<void>;

    /**
     * Removes all items within the specified date range from the history. Pages will not be removed from the history
     * unless all visits fall within the range.
     */
    function deleteRange(range: {
        /** Items added to history after this date. */
        startTime: extensionTypes.Date;
        /** Items added to history before this date. */
        endTime: extensionTypes.Date;
    }): Promise<void>;

    /** Deletes all items from the history. */
    function deleteAll(): Promise<void>;

    /* history events */
    /**
     * Fired when a URL is visited, providing the HistoryItem data for that URL. This event fires before the page has
     * loaded.
     */
    const onVisited: WebExtEvent<(result: HistoryItem) => void>;

    /**
     * Fired when one or more URLs are removed from the history service. When all visits have been removed the URL is
     * purged from history.
     */
    const onVisitRemoved: WebExtEvent<(removed: {
        /** True if all history was removed. If true, then urls will be empty. */
        allHistory: boolean;
        urls: string[];
    }) => void>;

    /** Fired when the title of a URL is changed in the browser history. */
    const onTitleChanged: WebExtEvent<(changed: {
        /** The URL for which the title has changed */
        url: string;
        /** The new title for the URL. */
        title: string;
    }) => void>;
}

/**
 * Use the browser.contextMenus API to add items to the browser's context menu. You can choose what types of objects
 * your context menu additions apply to, such as images, hyperlinks, and pages.
 *
 * Permissions: `contextMenus`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.contextMenus {
    /* contextMenus types */

    /**
     * The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other
     * contexts except for 'tab' and 'tools_menu'.
     */
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

    /** The type of menu item. */
    enum ItemType {
        normal = "normal",
        checkbox = "checkbox",
        radio = "radio",
        separator = "separator"
    }

    /** Information sent when a context menu item is clicked. */
    interface OnClickData {
        /** The ID of the menu item that was clicked. */
        menuItemId: number | string;
        /** The parent ID, if any, for the item clicked. */
        parentMenuItemId?: number | string;
        /**
         * One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
         */
        mediaType?: string;
        /** If the element is a link, the text of that link. */
        linkText?: string;
        /** If the element is a link, the URL it points to. */
        linkUrl?: string;
        /** Will be present for elements with a 'src' URL. */
        srcUrl?: string;
        /**
         * The URL of the page where the menu item was clicked. This property is not set if the click occured in a
         * context where there is no current page, such as in a launcher context menu.
         */
        pageUrl?: string;
        /** The URL of the frame of the element where the context menu was clicked, if it was in a frame. */
        frameUrl?: string;
        /** The text for the context selection, if any. */
        selectionText?: string;
        /** A flag indicating whether the element is editable (text input, textarea, etc.). */
        editable: boolean;
        /** A flag indicating the state of a checkbox or radio item before it was clicked. */
        wasChecked?: boolean;
        /** A flag indicating the state of a checkbox or radio item after it is clicked. */
        checked?: boolean;
        /** An array of keyboard modifiers that were held while the menu item was clicked. */
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
    /**
     * The maximum number of top level extension items that can be added to an extension action context menu. Any items
     * beyond this limit will be ignored.
     */
    const ACTION_MENU_TOP_LEVEL_LIMIT: number;

    /* contextMenus functions */
    /**
     * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the
     * creation callback fires (the details will be in `runtime.lastError`).
     * @param [callback] Called when the item has been created in the browser. If there were any problems creating the
     *     item, details will be available in `runtime.lastError`.
     * @returns The ID of the newly created item.
     */
    function create(createProperties: {
        /** The type of menu item. Defaults to 'normal' if not specified. */
        type?: ItemType;
        /**
         * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this
         * extension.
         */
        id?: string;
        icons?: {
            [key: number]: string;
        };
        /**
         * The text to be displayed in the item; this is _required_ unless `type` is 'separator'. When the context is
         * 'selection', you can use `%s` within the string to show the selected text. For example, if this parameter's
         * value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the
         * selection is "Translate 'cool' to Pig Latin".
         */
        title?: string;
        /**
         * The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio
         * item can be selected at a time in a given group of radio items.
         */
        checked?: boolean;
        /** List of contexts this menu item will appear in. Defaults to ['page'] if not specified. */
        contexts?: ContextType[];
        /**
         * A function that will be called back when the menu item is clicked. Event pages cannot use this; instead,
         * they should register a listener for `contextMenus.onClicked`.
         * @param info Information about the item clicked and the context where the click happened.
         * @param tab The details of the tab where the click took place. Note: this parameter only present for
         *     extensions.
         */
        onclick?: (info: menusInternal.OnClickData, tab: tabs.Tab) => void;
        /** The ID of a parent menu item; this makes the item a child of a previously added item. */
        parentId?: number | string;
        /**
         * Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This
         * applies to frames as well.) For details on the format of a pattern, see Match Patterns.
         */
        documentUrlPatterns?: string[];
        /**
         * Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and
         * the href of anchor tags.
         */
        targetUrlPatterns?: string[];
        /** Whether this context menu item is enabled or disabled. Defaults to true. */
        enabled?: boolean;
        /**
         * Specifies a command to issue for the context click. Currently supports internal commands
         * _execute_page_action, _execute_browser_action and _execute_sidebar_action.
         */
        command?: string;
    }, callback?: () => void): number | string;

    /**
     * Updates a previously created context menu item.
     * @param id The ID of the item to update.
     * @param updateProperties The properties to update. Accepts the same values as the create function.
     */
    function update(id: number | string, updateProperties: {
        type?: ItemType;
        title?: string;
        checked?: boolean;
        contexts?: ContextType[];
        /**
         * @param tab The details of the tab where the click took place. Note: this parameter only present for
         *     extensions.
         */
        onclick?: (info: menusInternal.OnClickData, tab: tabs.Tab) => void;
        /** Note: You cannot change an item to be a child of one of its own descendants. */
        parentId?: number | string;
        documentUrlPatterns?: string[];
        targetUrlPatterns?: string[];
        enabled?: boolean;
    }): Promise<void>;

    /**
     * Removes a context menu item.
     * @param menuItemId The ID of the context menu item to remove.
     */
    function remove(menuItemId: number | string): Promise<void>;

    /** Removes all context menu items added by this extension. */
    function removeAll(): Promise<void>;

    /* contextMenus events */
    /**
     * Fired when a context menu item is clicked.
     * @param info Information about the item clicked and the context where the click happened.
     * @param [tab] The details of the tab where the click took place. If the click did not take place in a tab, this
     *     parameter will be missing.
     */
    const onClicked: WebExtEvent<(info: OnClickData, tab?: tabs.Tab) => void>;
}

/**
 * Use the browser.menus API to add items to the browser's menus. You can choose what types of objects your context
 * menu additions apply to, such as images, hyperlinks, and pages.
 *
 * Permissions: `menus`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.menus {
    /* menus types */

    /**
     * The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other
     * contexts except for 'tab' and 'tools_menu'.
     */
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

    /** The type of menu item. */
    enum ItemType {
        normal = "normal",
        checkbox = "checkbox",
        radio = "radio",
        separator = "separator"
    }

    /** Information sent when a context menu item is clicked. */
    interface OnClickData {
        /** The ID of the menu item that was clicked. */
        menuItemId: number | string;
        /** The parent ID, if any, for the item clicked. */
        parentMenuItemId?: number | string;
        /**
         * One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
         */
        mediaType?: string;
        /** If the element is a link, the text of that link. */
        linkText?: string;
        /** If the element is a link, the URL it points to. */
        linkUrl?: string;
        /** Will be present for elements with a 'src' URL. */
        srcUrl?: string;
        /**
         * The URL of the page where the menu item was clicked. This property is not set if the click occured in a
         * context where there is no current page, such as in a launcher context menu.
         */
        pageUrl?: string;
        /** The URL of the frame of the element where the context menu was clicked, if it was in a frame. */
        frameUrl?: string;
        /** The text for the context selection, if any. */
        selectionText?: string;
        /** A flag indicating whether the element is editable (text input, textarea, etc.). */
        editable: boolean;
        /** A flag indicating the state of a checkbox or radio item before it was clicked. */
        wasChecked?: boolean;
        /** A flag indicating the state of a checkbox or radio item after it is clicked. */
        checked?: boolean;
        /** An array of keyboard modifiers that were held while the menu item was clicked. */
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
    /**
     * The maximum number of top level extension items that can be added to an extension action context menu. Any items
     * beyond this limit will be ignored.
     */
    const ACTION_MENU_TOP_LEVEL_LIMIT: number;

    /* menus functions */
    /**
     * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the
     * creation callback fires (the details will be in `runtime.lastError`).
     * @param [callback] Called when the item has been created in the browser. If there were any problems creating the
     *     item, details will be available in `runtime.lastError`.
     * @returns The ID of the newly created item.
     */
    function create(createProperties: {
        /** The type of menu item. Defaults to 'normal' if not specified. */
        type?: ItemType;
        /**
         * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this
         * extension.
         */
        id?: string;
        icons?: {
            [key: number]: string;
        };
        /**
         * The text to be displayed in the item; this is _required_ unless `type` is 'separator'. When the context is
         * 'selection', you can use `%s` within the string to show the selected text. For example, if this parameter's
         * value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the
         * selection is "Translate 'cool' to Pig Latin".
         */
        title?: string;
        /**
         * The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio
         * item can be selected at a time in a given group of radio items.
         */
        checked?: boolean;
        /** List of contexts this menu item will appear in. Defaults to ['page'] if not specified. */
        contexts?: ContextType[];
        /**
         * A function that will be called back when the menu item is clicked. Event pages cannot use this; instead,
         * they should register a listener for `contextMenus.onClicked`.
         * @param info Information about the item clicked and the context where the click happened.
         * @param tab The details of the tab where the click took place. Note: this parameter only present for
         *     extensions.
         */
        onclick?: (info: menusInternal.OnClickData, tab: tabs.Tab) => void;
        /** The ID of a parent menu item; this makes the item a child of a previously added item. */
        parentId?: number | string;
        /**
         * Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This
         * applies to frames as well.) For details on the format of a pattern, see Match Patterns.
         */
        documentUrlPatterns?: string[];
        /**
         * Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and
         * the href of anchor tags.
         */
        targetUrlPatterns?: string[];
        /** Whether this context menu item is enabled or disabled. Defaults to true. */
        enabled?: boolean;
        /**
         * Specifies a command to issue for the context click. Currently supports internal commands
         * _execute_page_action, _execute_browser_action and _execute_sidebar_action.
         */
        command?: string;
    }, callback?: () => void): number | string;

    /**
     * Updates a previously created context menu item.
     * @param id The ID of the item to update.
     * @param updateProperties The properties to update. Accepts the same values as the create function.
     */
    function update(id: number | string, updateProperties: {
        type?: ItemType;
        title?: string;
        checked?: boolean;
        contexts?: ContextType[];
        /**
         * @param tab The details of the tab where the click took place. Note: this parameter only present for
         *     extensions.
         */
        onclick?: (info: menusInternal.OnClickData, tab: tabs.Tab) => void;
        /** Note: You cannot change an item to be a child of one of its own descendants. */
        parentId?: number | string;
        documentUrlPatterns?: string[];
        targetUrlPatterns?: string[];
        enabled?: boolean;
    }): Promise<void>;

    /**
     * Removes a context menu item.
     * @param menuItemId The ID of the context menu item to remove.
     */
    function remove(menuItemId: number | string): Promise<void>;

    /** Removes all context menu items added by this extension. */
    function removeAll(): Promise<void>;

    /* menus events */
    /**
     * Fired when a context menu item is clicked.
     * @param info Information about the item clicked and the context where the click happened.
     * @param [tab] The details of the tab where the click took place. If the click did not take place in a tab, this
     *     parameter will be missing.
     */
    const onClicked: WebExtEvent<(info: OnClickData, tab?: tabs.Tab) => void>;
}

/**
 * Use the `browser.contextMenus` API to add items to the browser's context menu. You can choose what types of objects
 * your context menu additions apply to, such as images, hyperlinks, and pages.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.menusInternal {
    /* menusInternal types */
    /** Information sent when a context menu item is clicked. */
    interface OnClickData {
        /** The ID of the menu item that was clicked. */
        menuItemId: number | string;
        /** The parent ID, if any, for the item clicked. */
        parentMenuItemId?: number | string;
        /**
         * One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
         */
        mediaType?: string;
        /** If the element is a link, the URL it points to. */
        linkUrl?: string;
        /** Will be present for elements with a 'src' URL. */
        srcUrl?: string;
        /**
         * The URL of the page where the menu item was clicked. This property is not set if the click occured in a
         * context where there is no current page, such as in a launcher context menu.
         */
        pageUrl?: string;
        /** The URL of the frame of the element where the context menu was clicked, if it was in a frame. */
        frameUrl?: string;
        /** The text for the context selection, if any. */
        selectionText?: string;
        /** A flag indicating whether the element is editable (text input, textarea, etc.). */
        editable: boolean;
        /** A flag indicating the state of a checkbox or radio item before it was clicked. */
        wasChecked?: boolean;
        /** A flag indicating the state of a checkbox or radio item after it is clicked. */
        checked?: boolean;
    }
}

/**
 * The omnibox API allows you to register a keyword with Firefox's address bar.
 *
 * Manifest keys: `omnibox`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.omnibox {
    /* omnibox types */

    /** The style type. */
    enum DescriptionStyleType {
        url = "url",
        match = "match",
        dim = "dim"
    }

    /**
     * The window disposition for the omnibox query. This is the recommended context to display results. For example,
     * if the omnibox command is to navigate to a certain URL, a disposition of 'newForegroundTab' means the navigation
     * should take place in a new selected tab.
     */
    enum OnInputEnteredDisposition {
        currentTab = "currentTab",
        newForegroundTab = "newForegroundTab",
        newBackgroundTab = "newBackgroundTab"
    }

    /** A suggest result. */
    interface SuggestResult {
        /**
         * The text that is put into the URL bar, and that is sent to the extension when the user chooses this entry.
         */
        content: string;
        /**
         * The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags
         * are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim'
         * (for dim helper text). The styles can be nested, eg. <dim><match>dimmed match</match></dim>. You must escape
         * the five predefined entities to display them as text: stackoverflow.com/a/1091953/89484
         */
        description: string;
        /**
         * An array of style ranges for the description, as provided by the extension.
         * @deprecated Unsupported on Firefox at this time.
         */
        descriptionStyles?: Array<{
            offset: number;
            /** The style type */
            type: DescriptionStyleType;
            length?: number;
        }>;
        /**
         * An array of style ranges for the description, as provided by ToValue().
         * @deprecated Unsupported on Firefox at this time.
         */
        descriptionStylesRaw?: Array<{
            offset: number;
            type: number;
        }>;
    }

    /** A suggest result. */
    interface DefaultSuggestResult {
        /** The text that is displayed in the URL dropdown. */
        description: string;
        /**
         * An array of style ranges for the description, as provided by the extension.
         * @deprecated Unsupported on Firefox at this time.
         */
        descriptionStyles?: Array<{
            offset: number;
            /** The style type */
            type: DescriptionStyleType;
            length?: number;
        }>;
        /**
         * An array of style ranges for the description, as provided by ToValue().
         * @deprecated Unsupported on Firefox at this time.
         */
        descriptionStylesRaw?: Array<{
            offset: number;
            type: number;
        }>;
    }

    /* omnibox functions */
    /**
     * Sets the description and styling for the default suggestion. The default suggestion is the text that is
     * displayed in the first suggestion row underneath the URL bar.
     * @param suggestion A partial SuggestResult object, without the 'content' parameter.
     */
    function setDefaultSuggestion(suggestion: DefaultSuggestResult): void;

    /* omnibox events */
    /**
     * User has started a keyword input session by typing the extension's keyword. This is guaranteed to be sent
     * exactly once per input session, and before any onInputChanged events.
     */
    const onInputStarted: WebExtEvent<() => void>;

    /**
     * User has changed what is typed into the omnibox.
     * @param suggest A callback passed to the onInputChanged event used for sending suggestions back to the browser.
     */
    const onInputChanged: WebExtEvent<(text: string, suggest: (suggestResults: SuggestResult[]) => void) => void>;

    /** User has accepted what is typed into the omnibox. */
    const onInputEntered: WebExtEvent<(text: string, disposition: OnInputEnteredDisposition) => void>;

    /** User has ended the keyword input session without accepting the input. */
    const onInputCancelled: WebExtEvent<() => void>;
}

/**
 * Use the `browser.pageAction` API to put icons inside the address bar. Page actions represent actions that can be
 * taken on the current page, but that aren't applicable to all pages.
 *
 * Manifest keys: `page_action`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.pageAction {
    /* pageAction types */
    /** Pixel data for an image. Must be an ImageData object (for example, from a `canvas` element). */
    type ImageDataType = object/*ImageData*/;

    /* pageAction functions */
    /**
     * Shows the page action. The page action is shown whenever the tab is selected.
     * @param tabId The id of the tab for which you want to modify the page action.
     */
    function show(tabId: number): Promise<void>;

    /**
     * Hides the page action.
     * @param tabId The id of the tab for which you want to modify the page action.
     */
    function hide(tabId: number): Promise<void>;

    /** Sets the title of the page action. This is displayed in a tooltip over the page action. */
    function setTitle(details: {
        /** The id of the tab for which you want to modify the page action. */
        tabId: number;
        /** The tooltip string. */
        title: string;
    }): void;

    /** Gets the title of the page action. */
    function getTitle(details: {
        /** Specify the tab to get the title from. */
        tabId: number;
    }): Promise<string>;

    /**
     * Sets the icon for the page action. The icon can be specified either as the path to an image file or as the pixel
     * data from a canvas element, or as dictionary of either one of those. Either the **path** or the **imageData**
     * property must be specified.
     */
    function setIcon(details: {
        /** The id of the tab for which you want to modify the page action. */
        tabId: number;
        /**
         * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is
         * specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the
         * number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19
         * will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified.
         * Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        imageData?: ImageDataType | {
            [key: number]: ImageDataType;
        };
        /**
         * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If
         * the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel
         * density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with
         * size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must
         * be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        path?: string | {
            [key: number]: string;
        };
    }): Promise<void>;

    /** Sets the html document to be opened as a popup when the user clicks on the page action's icon. */
    function setPopup(details: {
        /** The id of the tab for which you want to modify the page action. */
        tabId: number;
        /** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string;
    }): void;

    /** Gets the html document set as the popup for this page action. */
    function getPopup(details: {
        /** Specify the tab to get the popup from. */
        tabId: number;
    }): Promise<string>;

    /** Opens the extension page action in the active window. */
    function openPopup(): Promise<void>;

    /* pageAction events */
    /** Fired when a page action icon is clicked. This event will not fire if the page action has a popup. */
    const onClicked: WebExtEvent<(tab: tabs.Tab) => void>;
}

/**
 * PKCS#11 module management API
 *
 * Permissions: `pkcs11`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.pkcs11 {
    /* pkcs11 functions */
    /** checks whether a PKCS#11 module, given by name, is installed */
    function isModuleInstalled(name: string): Promise<boolean>;

    /** Install a PKCS#11 module with a given name */
    function installModule(name: string, flags?: number): Promise<void>;

    /** Remove an installed PKCS#11 module from firefox */
    function uninstallModule(name: string): Promise<void>;

    /** Enumerate a module's slots, each with their name and whether a token is present */
    function getModuleSlots(name: string): Promise<{
        name: string;
        token?: {
            name: string;
            manufacturer: string;
            HWVersion: string;
            FWVersion: string;
            serial: string;
            isLoggedIn: string;
        };
    }>;
}

/**
 * Use the `browser.sessions` API to query and restore tabs and windows from a browsing session.
 *
 * Permissions: `sessions`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.sessions {
    /* sessions types */
    interface Filter {
        /**
         * The maximum number of entries to be fetched in the requested list. Omit this parameter to fetch the maximum
         * number of entries (`sessions.MAX_SESSION_RESULTS`).
         */
        maxResults?: number;
    }

    interface Session {
        /** The time when the window or tab was closed or modified, represented in milliseconds since the epoch. */
        lastModified: number;
        /** The `tabs.Tab`, if this entry describes a tab. Either this or `sessions.Session.window` will be set. */
        tab?: tabs.Tab;
        /**
         * The `windows.Window`, if this entry describes a window. Either this or `sessions.Session.tab` will be set.
         */
        window?: windows.Window;
    }

    interface Device {
        info: string;
        /** The name of the foreign device. */
        deviceName: string;
        /**
         * A list of open window sessions for the foreign device, sorted from most recently to least recently modified
         * session.
         */
        sessions: Session[];
    }

    /* sessions properties */
    /** The maximum number of `sessions.Session` that will be included in a requested list. */
    const MAX_SESSION_RESULTS: number;

    /* sessions functions */
    /**
     * Forget a recently closed tab.
     * @param windowId The windowId of the window to which the recently closed tab to be forgotten belongs.
     * @param sessionId The sessionId (closedId) of the recently closed tab to be forgotten.
     */
    function forgetClosedTab(windowId: number, sessionId: string): Promise<void>;

    /**
     * Forget a recently closed window.
     * @param sessionId The sessionId (closedId) of the recently closed window to be forgotten.
     */
    function forgetClosedWindow(sessionId: string): Promise<void>;

    /** Gets the list of recently closed tabs and/or windows. */
    function getRecentlyClosed(callback: (sessions: Session[]) => void): Promise<Session[]>;
    /** Gets the list of recently closed tabs and/or windows. */
    function getRecentlyClosed(filter: Filter, callback: (sessions: Session[]) => void): Promise<Session[]>;

    /**
     * Retrieves all devices with synced sessions.
     * @deprecated Unsupported on Firefox at this time.
     */
    function getDevices(filter?: Filter): Promise<Device[]>;

    /**
     * Reopens a `windows.Window` or `tabs.Tab`, with an optional callback to run when the entry has been restored.
     * @param [sessionId] The `windows.Window.sessionId`, or `tabs.Tab.sessionId` to restore. If this parameter is not
     *     specified, the most recently closed session is restored.
     */
    function restore(sessionId?: string, callback?: (restoredSession: Session) => void): Promise<Session>;

    /**
     * Set a key/value pair on a given tab.
     * @param tabId The id of the tab that the key/value pair is being set on.
     * @param key The key which corresponds to the value being set.
     * @param value The value being set.
     */
    function setTabValue(tabId: number, key: string, value: any): Promise<void>;

    /**
     * Retrieve a value that was set for a given key on a given tab.
     * @param tabId The id of the tab whose value is being retrieved from.
     * @param key The key which corresponds to the value.
     */
    function getTabValue(tabId: number, key: string): Promise<string | object | undefined>;

    /**
     * Remove a key/value pair that was set on a given tab.
     * @param tabId The id of the tab whose key/value pair is being removed.
     * @param key The key which corresponds to the value.
     */
    function removeTabValue(tabId: number, key: string): Promise<void>;

    /**
     * Set a key/value pair on a given window.
     * @param windowId The id of the window that the key/value pair is being set on.
     * @param key The key which corresponds to the value being set.
     * @param value The value being set.
     */
    function setWindowValue(windowId: number, key: string, value: any): Promise<void>;

    /**
     * Retrieve a value that was set for a given key on a given window.
     * @param windowId The id of the window whose value is being retrieved from.
     * @param key The key which corresponds to the value.
     */
    function getWindowValue(windowId: number, key: string): Promise<string | object | undefined>;

    /**
     * Remove a key/value pair that was set on a given window.
     * @param windowId The id of the window whose key/value pair is being removed.
     * @param key The key which corresponds to the value.
     */
    function removeWindowValue(windowId: number, key: string): Promise<void>;

    /* sessions events */
    /**
     * Fired when recently closed tabs and/or windows are changed. This event does not monitor synced sessions changes.
     */
    const onChanged: WebExtEvent<() => void>;
}

/**
 * Use sidebar actions to add a sidebar to Firefox.
 *
 * Manifest keys: `sidebar_action`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.sidebarAction {
    /* sidebarAction types */
    /** Pixel data for an image. Must be an ImageData object (for example, from a `canvas` element). */
    type ImageDataType = object/*ImageData*/;

    /* sidebarAction functions */
    /** Sets the title of the sidebar action. This shows up in the tooltip. */
    function setTitle(details: {
        /** The string the sidebar action should display when moused over. */
        title: string;
        /** Sets the sidebar title for the tab specified by tabId. Automatically resets when the tab is closed. */
        tabId?: number;
    }): Promise<void>;

    /** Gets the title of the sidebar action. */
    function getTitle(details: {
        /**
         * Specify the tab to get the title from. If no tab is specified, the non-tab-specific title is returned.
         */
        tabId?: number;
    }): Promise<string>;

    /**
     * Sets the icon for the sidebar action. The icon can be specified either as the path to an image file or as the
     * pixel data from a canvas element, or as dictionary of either one of those. Either the **path** or the
     * **imageData** property must be specified.
     */
    function setIcon(details: {
        /**
         * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is
         * specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the
         * number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19
         * will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified.
         * Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        imageData?: ImageDataType | {
            [key: number]: ImageDataType;
        };
        /**
         * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If
         * the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel
         * density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with
         * size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must
         * be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        path?: string;
        /** Sets the sidebar icon for the tab specified by tabId. Automatically resets when the tab is closed. */
        tabId?: number;
    }): Promise<void>;

    /**
     * Sets the url to the html document to be opened in the sidebar when the user clicks on the sidebar action's icon.
     */
    function setPanel(details: {
        /** Sets the sidebar url for the tab specified by tabId. Automatically resets when the tab is closed. */
        tabId?: number;
        /** The url to the html file to show in a sidebar. If set to the empty string (''), no sidebar is shown. */
        panel: string;
    }): Promise<void>;

    /** Gets the url to the html document set as the panel for this sidebar action. */
    function getPanel(details: {
        /**
         * Specify the tab to get the sidebar from. If no tab is specified, the non-tab-specific sidebar is returned.
         */
        tabId?: number;
    }): Promise<string>;

    /** Opens the extension sidebar in the active window. */
    function open(): Promise<void>;

    /** Closes the extension sidebar in the active window if the sidebar belongs to the extension. */
    function close(): Promise<void>;
}

/**
 * Use the `browser.tabs` API to interact with the browser's tab system. You can use this API to create, modify, and
 * rearrange tabs in the browser.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.tabs {
    /* tabs types */

    /** An event that caused a muted state change. */
    enum MutedInfoReason {
        /** A user input action has set/overridden the muted state. */
        user = "user",
        /** Tab capture started, forcing a muted state change. */
        capture = "capture",
        /** An extension, identified by the extensionId field, set the muted state. */
        extension = "extension"
    }

    /** Tab muted state and the reason for the last state change. */
    interface MutedInfo {
        /**
         * Whether the tab is prevented from playing sound (but hasn't necessarily recently produced sound). Equivalent
         * to whether the muted audio indicator is showing.
         */
        muted: boolean;
        /** The reason the tab was muted or unmuted. Not set if the tab's mute state has never been changed. */
        reason?: MutedInfoReason;
        /**
         * The ID of the extension that changed the muted state. Not set if an extension was not the reason the muted
         * state last changed.
         */
        extensionId?: string;
    }

    interface Tab {
        /**
         * The ID of the tab. Tab IDs are unique within a browser session. Under some circumstances a Tab may not be
         * assigned an ID, for example when querying foreign tabs using the `sessions` API, in which case a session ID
         * may be present. Tab ID can also be set to `tabs.TAB_ID_NONE` for apps and devtools windows.
         */
        id?: number;
        /** The zero-based index of the tab within its window. */
        index: number;
        /** The ID of the window the tab is contained within. */
        windowId?: number;
        /**
         * The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists.
         */
        openerTabId?: number;
        /**
         * Whether the tab is selected.
         * @deprecated Please use `tabs.Tab.highlighted`.
         */
        selected?: boolean;
        /** Whether the tab is highlighted. Works as an alias of active */
        highlighted: boolean;
        /** Whether the tab is active in its window. (Does not necessarily mean the window is focused.) */
        active: boolean;
        /** Whether the tab is pinned. */
        pinned: boolean;
        /** The last time the tab was accessed as the number of milliseconds since epoch. */
        lastAccessed?: number;
        /**
         * Whether the tab has produced sound over the past couple of seconds (but it might not be heard if also
         * muted). Equivalent to whether the speaker audio indicator is showing.
         */
        audible?: boolean;
        /** Current tab muted state and the reason for the last state change. */
        mutedInfo?: MutedInfo;
        /**
         * The URL the tab is displaying. This property is only present if the extension's manifest includes the
         * `"tabs"` permission.
         */
        url?: string;
        /**
         * The title of the tab. This property is only present if the extension's manifest includes the `"tabs"`
         * permission.
         */
        title?: string;
        /**
         * The URL of the tab's favicon. This property is only present if the extension's manifest includes the
         * `"tabs"` permission. It may also be an empty string if the tab is loading.
         */
        favIconUrl?: string;
        /** Either _loading_ or _complete_. */
        status?: string;
        /** True while the tab is not loaded with content. */
        discarded?: boolean;
        /** Whether the tab is in an incognito window. */
        incognito: boolean;
        /** The width of the tab in pixels. */
        width?: number;
        /** The height of the tab in pixels. */
        height?: number;
        /** The session ID used to uniquely identify a Tab obtained from the `sessions` API. */
        sessionId?: string;
        /** The CookieStoreId used for the tab. */
        cookieStoreId?: string;
        /** Whether the document in the tab can be rendered in reader mode. */
        isArticle?: boolean;
        /** Whether the document in the tab is being rendered in reader mode. */
        isInReaderMode?: boolean;
    }

    /**
     * Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page;
     * defaults to `automatic`.
     */
    enum ZoomSettingsMode {
        /** Zoom changes are handled automatically by the browser. */
        automatic = "automatic",
        /**
         * Overrides the automatic handling of zoom changes. The `onZoomChange` event will still be dispatched, and it
         * is the responsibility of the extension to listen for this event and manually scale the page. This mode does
         * not support `per-origin` zooming, and will thus ignore the `scope` zoom setting and assume `per-tab`.
         */
        manual = "manual",
        /**
         * Disables all zooming in the tab. The tab will revert to the default zoom level, and all attempted zoom
         * changes will be ignored.
         */
        disabled = "disabled"
    }

    /**
     * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to
     * `per-origin` when in `automatic` mode, and `per-tab` otherwise.
     */
    enum ZoomSettingsScope {
        /**
         * Zoom changes will persist in the zoomed page's origin, i.e. all other tabs navigated to that same origin
         * will be zoomed as well. Moreover, `per-origin` zoom changes are saved with the origin, meaning that when
         * navigating to other pages in the same origin, they will all be zoomed to the same zoom factor. The
         * `per-origin` scope is only available in the `automatic` mode.
         */
        perorigin = "per-origin",
        /**
         * Zoom changes only take effect in this tab, and zoom changes in other tabs will not affect the zooming of
         * this tab. Also, `per-tab` zoom changes are reset on navigation; navigating a tab will always load pages with
         * their `per-origin` zoom factors.
         */
        pertab = "per-tab"
    }

    /** Defines how zoom changes in a tab are handled and at what scope. */
    interface ZoomSettings {
        /**
         * Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page;
         * defaults to `automatic`.
         */
        mode?: ZoomSettingsMode;
        /**
         * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults
         * to `per-origin` when in `automatic` mode, and `per-tab` otherwise.
         */
        scope?: ZoomSettingsScope;
        /** Used to return the default zoom level for the current tab in calls to tabs.getZoomSettings. */
        defaultZoomFactor?: number;
    }

    /** The page settings including: orientation, scale, background, margins, headers, footers. */
    interface PageSettings {
        /** The page content orientation: 0 = portrait, 1 = landscape. Default: 0. */
        orientation?: number;
        /** The page content scaling factor: 1.0 = 100% = normal size. Default: 1.0. */
        scaling?: number;
        /** Whether the page content should shrink to fit the page width (overrides scaling). Default: true. */
        shrinkToFit?: boolean;
        /** Whether the page background colors should be shown. Default: false. */
        showBackgroundColors?: boolean;
        /** Whether the page background images should be shown. Default: false. */
        showBackgroundImages?: boolean;
        /** The page size unit: 0 = inches, 1 = millimeters. Default: 0. */
        paperSizeUnit?: number;
        /** The paper width in paper size units. Default: 8.5. */
        paperWidth?: number;
        /** The paper height in paper size units. Default: 11.0. */
        paperHeight?: number;
        /** The text for the page's left header. Default: '&T'. */
        headerLeft?: string;
        /** The text for the page's center header. Default: ''. */
        headerCenter?: string;
        /** The text for the page's right header. Default: '&U'. */
        headerRight?: string;
        /** The text for the page's left footer. Default: '&PT'. */
        footerLeft?: string;
        /** The text for the page's center footer. Default: ''. */
        footerCenter?: string;
        /** The text for the page's right footer. Default: '&D'. */
        footerRight?: string;
        /** The margin between the page content and the left edge of the paper (inches). Default: 0.5. */
        marginLeft?: number;
        /** The margin between the page content and the right edge of the paper (inches). Default: 0.5. */
        marginRight?: number;
        /** The margin between the page content and the top edge of the paper (inches). Default: 0.5. */
        marginTop?: number;
        /** The margin between the page content and the bottom edge of the paper (inches). Default: 0.5. */
        marginBottom?: number;
    }

    /** Whether the tabs have completed loading. */
    enum TabStatus {
        loading = "loading",
        complete = "complete"
    }

    /** The type of window. */
    enum WindowType {
        normal = "normal",
        popup = "popup",
        panel = "panel",
        app = "app",
        devtools = "devtools"
    }

    /* tabs properties */
    /** An ID which represents the absence of a browser tab. */
    const TAB_ID_NONE: number;

    /* tabs functions */
    /** Retrieves details about the specified tab. */
    function get(tabId: number): Promise<Tab>;

    /**
     * Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for
     * example: a background page or popup view).
     */
    function getCurrent(): Promise<Tab>;

    /**
     * Connects to the content script(s) in the specified tab. The `runtime.onConnect` event is fired in each content
     * script running in the specified tab for the current extension. For more details, see Content Script Messaging.
     * @returns A port that can be used to communicate with the content scripts running in the specified tab. The
     *     port's `runtime.Port` event is fired if the tab closes or does not exist.
     */
    function connect(tabId: number, connectInfo?: {
        /** Will be passed into onConnect for content scripts that are listening for the connection event. */
        name?: string;
        /** Open a port to a specific frame identified by `frameId` instead of all frames in the tab. */
        frameId?: number;
    }): runtime.Port;

    /**
     * Sends a single request to the content script(s) in the specified tab, with an optional callback to run when a
     * response is sent back. The `extension.onRequest` event is fired in each content script running in the specified
     * tab for the current extension.
     * @deprecated Please use `runtime.sendMessage`.
     */
    function sendRequest(tabId: number, request: any, responseCallback?: (response: any) => void): void;

    /**
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a
     * response is sent back. The `runtime.onMessage` event is fired in each content script running in the specified
     * tab for the current extension.
     */
    function sendMessage(tabId: number, message: any, options?: {
        /** Send a message to a specific frame identified by `frameId` instead of all frames in the tab. */
        frameId?: number;
    }): Promise<any>;

    /**
     * Gets the tab that is selected in the specified window.
     * @param [windowId] Defaults to the current window.
     * @deprecated Please use `tabs.query` `{active: true}`.
     */
    function getSelected(windowId?: number): Promise<Tab>;

    /**
     * Gets details about all tabs in the specified window.
     * @param [windowId] Defaults to the current window.
     * @deprecated Please use `tabs.query` `{windowId: windowId}`.
     */
    function getAllInWindow(windowId?: number): Promise<Tab[]>;

    /** Creates a new tab. */
    function create(createProperties: {
        /** The window to create the new tab in. Defaults to the current window. */
        windowId?: number;
        /**
         * The position the tab should take in the window. The provided value will be clamped to between zero and the
         * number of tabs in the window.
         */
        index?: number;
        /**
         * The URL to navigate the tab to initially. Fully-qualified URLs must include a scheme (i.e.
         * 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within
         * the extension. Defaults to the New Tab Page.
         */
        url?: string;
        /**
         * Whether the tab should become the active tab in the window. Does not affect whether the window is focused
         * (see `windows.update`). Defaults to `true`.
         */
        active?: boolean;
        /**
         * Whether the tab should become the selected tab in the window. Defaults to `true`
         * @deprecated Please use _active_.
         */
        selected?: boolean;
        /** Whether the tab should be pinned. Defaults to `false` */
        pinned?: boolean;
        /**
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly
         * created tab.
         */
        openerTabId?: number;
        /** The CookieStoreId for the tab that opened this tab. */
        cookieStoreId?: string;
        /** Whether the document in the tab should be opened in reader mode. */
        openInReaderMode?: boolean;
    }): Promise<Tab | undefined>;

    /**
     * Duplicates a tab.
     * @param tabId The ID of the tab which is to be duplicated.
     */
    function duplicate(tabId: number): Promise<Tab | undefined>;

    /** Gets all tabs that have the specified properties, or all tabs if no properties are specified. */
    function query(queryInfo: {
        /** Whether the tabs are active in their windows. */
        active?: boolean;
        /** Whether the tabs are pinned. */
        pinned?: boolean;
        /** Whether the tabs are audible. */
        audible?: boolean;
        /** Whether the tabs are muted. */
        muted?: boolean;
        /** Whether the tabs are highlighted. Works as an alias of active. */
        highlighted?: boolean;
        /** Whether the tabs are in the current window. */
        currentWindow?: boolean;
        /** Whether the tabs are in the last focused window. */
        lastFocusedWindow?: boolean;
        /** Whether the tabs have completed loading. */
        status?: TabStatus;
        /** True while the tabs are not loaded with content. */
        discarded?: boolean;
        /** Match page titles against a pattern. */
        title?: string;
        /** Match tabs against one or more URL patterns. Note that fragment identifiers are not matched. */
        url?: string | string[];
        /** The ID of the parent window, or `windows.WINDOW_ID_CURRENT` for the current window. */
        windowId?: number;
        /** The type of window the tabs are in. */
        windowType?: WindowType;
        /** The position of the tabs within their windows. */
        index?: number;
        /** The CookieStoreId used for the tab. */
        cookieStoreId?: string;
        /**
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
         */
        openerTabId?: number;
    }): Promise<Tab[]>;

    /**
     * Highlights the given tabs.
     * @deprecated Unsupported on Firefox at this time.
     */
    function highlight(highlightInfo: {
        /** The window that contains the tabs. */
        windowId?: number;
        /** One or more tab indices to highlight. */
        tabs: number[] | number;
    }): Promise<windows.Window | undefined>;

    /**
     * Modifies the properties of a tab. Properties that are not specified in `updateProperties` are not modified.
     */
    function update(updateProperties: {
        /** A URL to navigate the tab to. */
        url?: string;
        /**
         * Whether the tab should be active. Does not affect whether the window is focused (see `windows.update`).
         */
        active?: boolean;
        /**
         * Adds or removes the tab from the current selection.
         * @deprecated Unsupported on Firefox at this time.
         */
        highlighted?: boolean;
        /**
         * Whether the tab should be selected.
         * @deprecated Please use _highlighted_.
         */
        selected?: boolean;
        /** Whether the tab should be pinned. */
        pinned?: boolean;
        /** Whether the tab should be muted. */
        muted?: boolean;
        /**
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
         */
        openerTabId?: number;
        /** Whether the load should replace the current history entry for the tab. */
        loadReplace?: boolean;
    }): Promise<Tab | undefined>;
    /**
     * Modifies the properties of a tab. Properties that are not specified in `updateProperties` are not modified.
     * @param tabId Defaults to the selected tab of the current window.
     */
    function update(tabId: number, updateProperties: {
        /** A URL to navigate the tab to. */
        url?: string;
        /**
         * Whether the tab should be active. Does not affect whether the window is focused (see `windows.update`).
         */
        active?: boolean;
        /**
         * Adds or removes the tab from the current selection.
         * @deprecated Unsupported on Firefox at this time.
         */
        highlighted?: boolean;
        /**
         * Whether the tab should be selected.
         * @deprecated Please use _highlighted_.
         */
        selected?: boolean;
        /** Whether the tab should be pinned. */
        pinned?: boolean;
        /** Whether the tab should be muted. */
        muted?: boolean;
        /**
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
         */
        openerTabId?: number;
        /** Whether the load should replace the current history entry for the tab. */
        loadReplace?: boolean;
    }): Promise<Tab | undefined>;

    /**
     * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved
     * to and from normal (window.type === "normal") windows.
     * @param tabIds The tab or list of tabs to move.
     */
    function move(tabIds: number | number[], moveProperties: {
        /** Defaults to the window the tab is currently in. */
        windowId?: number;
        /** The position to move the window to. -1 will place the tab at the end of the window. */
        index: number;
    }): Promise<Tab | Tab[] | undefined>;

    /**
     * Reload a tab.
     * @param [tabId] The ID of the tab to reload; defaults to the selected tab of the current window.
     */
    function reload(tabId?: number, reloadProperties?: {
        /** Whether using any local cache. Default is false. */
        bypassCache?: boolean;
    }): Promise<void>;

    /**
     * Closes one or more tabs.
     * @param tabIds The tab or list of tabs to close.
     */
    function remove(tabIds: number | number[]): Promise<void>;

    /**
     * discards one or more tabs.
     * @param tabIds The tab or list of tabs to discard.
     */
    function discard(tabIds: number | number[]): Promise<void>;

    /**
     * Detects the primary language of the content in a tab.
     * @param [tabId] Defaults to the active tab of the current window.
     */
    function detectLanguage(tabId?: number): Promise<string>;

    /**
     * Toggles reader mode for the document in the tab.
     * @param [tabId] Defaults to the active tab of the current window.
     */
    function toggleReaderMode(tabId?: number): Promise<void>;

    /**
     * Captures the visible area of the currently active tab in the specified window. You must have <all_urls>
     * permission to use this method.
     * @param [windowId] The target window. Defaults to the current window.
     */
    function captureVisibleTab(windowId?: number, options?: extensionTypes.ImageDetails): Promise<string>;

    /**
     * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts
     * doc.
     * @param details Details of the script to run.
     */
    function executeScript(details: extensionTypes.InjectDetails): Promise<any[] | undefined>;
    /**
     * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts
     * doc.
     * @param tabId The ID of the tab in which to run the script; defaults to the active tab of the current window.
     * @param details Details of the script to run.
     */
    function executeScript(tabId: number, details: extensionTypes.InjectDetails): Promise<any[] | undefined>;

    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the CSS text to insert.
     */
    function insertCSS(details: extensionTypes.InjectDetails): Promise<void>;
    /**
     * Injects CSS into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param tabId The ID of the tab in which to insert the CSS; defaults to the active tab of the current window.
     * @param details Details of the CSS text to insert.
     */
    function insertCSS(tabId: number, details: extensionTypes.InjectDetails): Promise<void>;

    /**
     * Removes injected CSS from a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the CSS text to remove.
     */
    function removeCSS(details: extensionTypes.InjectDetails): Promise<void>;
    /**
     * Removes injected CSS from a page. For details, see the programmatic injection section of the content scripts
     * doc.
     * @param tabId The ID of the tab from which to remove the injected CSS; defaults to the active tab of the current
     *     window.
     * @param details Details of the CSS text to remove.
     */
    function removeCSS(tabId: number, details: extensionTypes.InjectDetails): Promise<void>;

    /**
     * Zooms a specified tab.
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor.
     *     Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     */
    function setZoom(zoomFactor: number): Promise<void>;
    /**
     * Zooms a specified tab.
     * @param tabId The ID of the tab to zoom; defaults to the active tab of the current window.
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor.
     *     Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     */
    function setZoom(tabId: number, zoomFactor: number): Promise<void>;

    /**
     * Gets the current zoom factor of a specified tab.
     * @param [tabId] The ID of the tab to get the current zoom factor from; defaults to the active tab of the current
     *     window.
     */
    function getZoom(tabId?: number): Promise<number>;

    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset
     * to defaults upon navigating the tab.
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     */
    function setZoomSettings(zoomSettings: ZoomSettings): Promise<void>;
    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset
     * to defaults upon navigating the tab.
     * @param tabId The ID of the tab to change the zoom settings for; defaults to the active tab of the current
     *     window.
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     */
    function setZoomSettings(tabId: number, zoomSettings: ZoomSettings): Promise<void>;

    /**
     * Gets the current zoom settings of a specified tab.
     * @param [tabId] The ID of the tab to get the current zoom settings from; defaults to the active tab of the
     *     current window.
     */
    function getZoomSettings(tabId?: number): Promise<ZoomSettings>;

    /** Prints page in active tab. */
    function print(): void;

    /** Shows print preview for page in active tab. */
    function printPreview(): Promise<void>;

    /**
     * Saves page in active tab as a PDF file.
     * @param pageSettings The page settings used to save the PDF file.
     */
    function saveAsPDF(pageSettings: PageSettings): Promise<string | undefined>;

    /* tabs events */
    /**
     * Fired when a tab is created. Note that the tab's URL may not be set at the time this event fired, but you can
     * listen to onUpdated events to be notified when a URL is set.
     * @param tab Details of the tab that was created.
     */
    const onCreated: WebExtEvent<(tab: Tab) => void>;

    /**
     * Fired when a tab is updated.
     * @param changeInfo Lists the changes to the state of the tab that was updated.
     * @param tab Gives the state of the tab that was updated.
     */
    const onUpdated: WebExtEvent<(tabId: number, changeInfo: {
        /** The status of the tab. Can be either _loading_ or _complete_. */
        status: string;
        /** True while the tab is not loaded with content. */
        discarded?: boolean;
        /** The tab's URL if it has changed. */
        url?: string;
        /** The tab's new pinned state. */
        pinned?: boolean;
        /** The tab's new audible state. */
        audible?: boolean;
        /** The tab's new muted state and the reason for the change. */
        mutedInfo?: MutedInfo;
        /** The tab's new favicon URL. */
        favIconUrl?: string;
    }, tab: Tab) => void>;

    /**
     * Fired when a tab is moved within a window. Only one move event is fired, representing the tab the user directly
     * moved. Move events are not fired for the other tabs that must move in response. This event is not fired when a
     * tab is moved between windows. For that, see `tabs.onDetached`.
     */
    const onMoved: WebExtEvent<(tabId: number, moveInfo: {
        windowId: number;
        fromIndex: number;
        toIndex: number;
    }) => void>;

    /**
     * Fires when the selected tab in a window changes.
     * @param tabId The ID of the tab that has become active.
     * @deprecated Please use `tabs.onActivated`.
     */
    const onSelectionChanged: WebExtEvent<(tabId: number, selectInfo: {
        /** The ID of the window the selected tab changed inside of. */
        windowId: number;
    }) => void> | undefined;

    /**
     * Fires when the selected tab in a window changes. Note that the tab's URL may not be set at the time this event
     * fired, but you can listen to `tabs.onUpdated` events to be notified when a URL is set.
     * @param tabId The ID of the tab that has become active.
     * @deprecated Please use `tabs.onActivated`.
     */
    const onActiveChanged: WebExtEvent<(tabId: number, selectInfo: {
        /** The ID of the window the selected tab changed inside of. */
        windowId: number;
    }) => void> | undefined;

    /**
     * Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event
     * fired, but you can listen to onUpdated events to be notified when a URL is set.
     */
    const onActivated: WebExtEvent<(activeInfo: {
        /** The ID of the tab that has become active. */
        tabId: number;
        /** The ID of the window the active tab changed inside of. */
        windowId: number;
    }) => void>;

    /**
     * Fired when the highlighted or selected tabs in a window changes.
     * @deprecated Please use `tabs.onHighlighted`.
     */
    const onHighlightChanged: WebExtEvent<(selectInfo: {
        /** The window whose tabs changed. */
        windowId: number;
        /** All highlighted tabs in the window. */
        tabIds: number[];
    }) => void> | undefined;

    /** Fired when the highlighted or selected tabs in a window changes. */
    const onHighlighted: WebExtEvent<(highlightInfo: {
        /** The window whose tabs changed. */
        windowId: number;
        /** All highlighted tabs in the window. */
        tabIds: number[];
    }) => void>;

    /** Fired when a tab is detached from a window, for example because it is being moved between windows. */
    const onDetached: WebExtEvent<(tabId: number, detachInfo: {
        oldWindowId: number;
        oldPosition: number;
    }) => void>;

    /** Fired when a tab is attached to a window, for example because it was moved between windows. */
    const onAttached: WebExtEvent<(tabId: number, attachInfo: {
        newWindowId: number;
        newPosition: number;
    }) => void>;

    /** Fired when a tab is closed. */
    const onRemoved: WebExtEvent<(tabId: number, removeInfo: {
        /** The window whose tab is closed. */
        windowId: number;
        /** True when the tab is being closed because its window is being closed. */
        isWindowClosing: boolean;
    }) => void>;

    /** Fired when a tab is replaced with another tab due to prerendering or instant. */
    const onReplaced: WebExtEvent<(addedTabId: number, removedTabId: number) => void>;

    /** Fired when a tab is zoomed. */
    const onZoomChange: WebExtEvent<(ZoomChangeInfo: {
        tabId: number;
        oldZoomFactor: number;
        newZoomFactor: number;
        zoomSettings: ZoomSettings;
    }) => void>;
}

/**
 * Use the `browser.windows` API to interact with browser windows. You can use this API to create, modify, and
 * rearrange windows in the browser.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.windows {
    /* windows types */

    /**
     * The type of browser window this is. Under some circumstances a Window may not be assigned type property, for
     * example when querying closed windows from the `sessions` API.
     */
    enum WindowType {
        normal = "normal",
        popup = "popup",
        panel = "panel",
        app = "app",
        devtools = "devtools"
    }

    /**
     * The state of this browser window. Under some circumstances a Window may not be assigned state property, for
     * example when querying closed windows from the `sessions` API.
     */
    enum WindowState {
        normal = "normal",
        minimized = "minimized",
        maximized = "maximized",
        fullscreen = "fullscreen",
        docked = "docked"
    }

    interface Window {
        /**
         * The ID of the window. Window IDs are unique within a browser session. Under some circumstances a Window may
         * not be assigned an ID, for example when querying windows using the `sessions` API, in which case a session
         * ID may be present.
         */
        id?: number;
        /** Whether the window is currently the focused window. */
        focused: boolean;
        /**
         * The offset of the window from the top edge of the screen in pixels. Under some circumstances a Window may
         * not be assigned top property, for example when querying closed windows from the `sessions` API.
         */
        top?: number;
        /**
         * The offset of the window from the left edge of the screen in pixels. Under some circumstances a Window may
         * not be assigned left property, for example when querying closed windows from the `sessions` API.
         */
        left?: number;
        /**
         * The width of the window, including the frame, in pixels. Under some circumstances a Window may not be
         * assigned width property, for example when querying closed windows from the `sessions` API.
         */
        width?: number;
        /**
         * The height of the window, including the frame, in pixels. Under some circumstances a Window may not be
         * assigned height property, for example when querying closed windows from the `sessions` API.
         */
        height?: number;
        /** Array of `tabs.Tab` objects representing the current tabs in the window. */
        tabs?: tabs.Tab[];
        /** Whether the window is incognito. */
        incognito: boolean;
        /** The type of browser window this is. */
        type?: WindowType;
        /** The state of this browser window. */
        state?: WindowState;
        /** Whether the window is set to be always on top. */
        alwaysOnTop: boolean;
        /** The session ID used to uniquely identify a Window obtained from the `sessions` API. */
        sessionId?: string;
        /** The title of the window. Read-only. */
        title?: string;
    }

    /**
     * Specifies what type of browser window to create. The 'panel' and 'detached_panel' types create a popup unless
     * the '--enable-panels' flag is set.
     */
    enum CreateType {
        normal = "normal",
        popup = "popup",
        panel = "panel",
        detached_panel = "detached_panel"
    }

    /* windows properties */
    /** The windowId value that represents the absence of a browser window. */
    const WINDOW_ID_NONE: number;

    /** The windowId value that represents the current window. */
    const WINDOW_ID_CURRENT: number;

    /* windows functions */
    /** Gets details about a window. */
    function get(windowId: number, getInfo?: {
        /**
         * If true, the `windows.Window` object will have a `tabs` property that contains a list of the `tabs.Tab`
         * objects. The `Tab` objects only contain the `url`, `title` and `favIconUrl` properties if the extension's
         * manifest file includes the `"tabs"` permission.
         */
        populate?: boolean;
        /**
         * If set, the `windows.Window` returned will be filtered based on its type. If unset the default filter is set
         * to `['app', 'normal', 'panel', 'popup']`, with `'app'` and `'panel'` window types limited to the extension's
         * own windows.
         */
        windowTypes?: WindowType[];
    }): Promise<Window>;

    /** Gets the current window. */
    function getCurrent(getInfo?: {
        /**
         * If true, the `windows.Window` object will have a `tabs` property that contains a list of the `tabs.Tab`
         * objects. The `Tab` objects only contain the `url`, `title` and `favIconUrl` properties if the extension's
         * manifest file includes the `"tabs"` permission.
         */
        populate?: boolean;
        /**
         * If set, the `windows.Window` returned will be filtered based on its type. If unset the default filter is set
         * to `['app', 'normal', 'panel', 'popup']`, with `'app'` and `'panel'` window types limited to the extension's
         * own windows.
         */
        windowTypes?: WindowType[];
    }): Promise<Window>;

    /** Gets the window that was most recently focused — typically the window 'on top'. */
    function getLastFocused(getInfo?: {
        /**
         * If true, the `windows.Window` object will have a `tabs` property that contains a list of the `tabs.Tab`
         * objects. The `Tab` objects only contain the `url`, `title` and `favIconUrl` properties if the extension's
         * manifest file includes the `"tabs"` permission.
         */
        populate?: boolean;
        /**
         * If set, the `windows.Window` returned will be filtered based on its type. If unset the default filter is set
         * to `['app', 'normal', 'panel', 'popup']`, with `'app'` and `'panel'` window types limited to the extension's
         * own windows.
         */
        windowTypes?: WindowType[];
    }): Promise<Window>;

    /** Gets all windows. */
    function getAll(getInfo?: {
        /**
         * If true, each `windows.Window` object will have a `tabs` property that contains a list of the `tabs.Tab`
         * objects for that window. The `Tab` objects only contain the `url`, `title` and `favIconUrl` properties if
         * the extension's manifest file includes the `"tabs"` permission.
         */
        populate?: boolean;
        /**
         * If set, the `windows.Window` returned will be filtered based on its type. If unset the default filter is set
         * to `['app', 'normal', 'panel', 'popup']`, with `'app'` and `'panel'` window types limited to the extension's
         * own windows.
         */
        windowTypes?: WindowType[];
    }): Promise<Window[]>;

    /** Creates (opens) a new browser with any optional sizing, position or default URL provided. */
    function create(createData?: {
        /**
         * A URL or array of URLs to open as tabs in the window. Fully-qualified URLs must include a scheme (i.e.
         * 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within
         * the extension. Defaults to the New Tab Page.
         */
        url?: string | string[];
        /** The id of the tab for which you want to adopt to the new window. */
        tabId?: number;
        /**
         * The number of pixels to position the new window from the left edge of the screen. If not specified, the new
         * window is offset naturally from the last focused window. This value is ignored for panels.
         */
        left?: number;
        /**
         * The number of pixels to position the new window from the top edge of the screen. If not specified, the new
         * window is offset naturally from the last focused window. This value is ignored for panels.
         */
        top?: number;
        /**
         * The width in pixels of the new window, including the frame. If not specified defaults to a natural width.
         */
        width?: number;
        /**
         * The height in pixels of the new window, including the frame. If not specified defaults to a natural height.
         */
        height?: number;
        /**
         * If true, opens an active window. If false, opens an inactive window.
         * @deprecated Unsupported on Firefox at this time.
         */
        focused?: boolean;
        /** Whether the new window should be an incognito window. */
        incognito?: boolean;
        /**
         * Specifies what type of browser window to create. The 'panel' and 'detached_panel' types create a popup
         * unless the '--enable-panels' flag is set.
         */
        type?: CreateType;
        /**
         * The initial state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined
         * with 'left', 'top', 'width' or 'height'.
         */
        state?: WindowState;
        /** Allow scripts to close the window. */
        allowScriptsToClose?: boolean;
        /** A string to add to the beginning of the window title. */
        titlePreface?: string;
    }): Promise<Window | undefined>;

    /**
     * Updates the properties of a window. Specify only the properties that you want to change; unspecified properties
     * will be left unchanged.
     */
    function update(windowId: number, updateInfo: {
        /**
         * The offset from the left edge of the screen to move the window to in pixels. This value is ignored for
         * panels.
         */
        left?: number;
        /**
         * The offset from the top edge of the screen to move the window to in pixels. This value is ignored for panels.
         */
        top?: number;
        /** The width to resize the window to in pixels. This value is ignored for panels. */
        width?: number;
        /** The height to resize the window to in pixels. This value is ignored for panels. */
        height?: number;
        /**
         * If true, brings the window to the front. If false, brings the next window in the z-order to the front.
         */
        focused?: boolean;
        /**
         * If true, causes the window to be displayed in a manner that draws the user's attention to the window,
         * without changing the focused window. The effect lasts until the user changes focus to the window. This
         * option has no effect if the window already has focus. Set to false to cancel a previous draw attention
         * request.
         */
        drawAttention?: boolean;
        /**
         * The new state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with
         * 'left', 'top', 'width' or 'height'.
         */
        state?: WindowState;
        /** A string to add to the beginning of the window title. */
        titlePreface?: string;
    }): Promise<Window | undefined>;

    /** Removes (closes) a window, and all the tabs inside it. */
    function remove(windowId: number): Promise<void>;

    /* windows events */
    /**
     * Fired when a window is created.
     * @param window Details of the window that was created.
     */
    const onCreated: WebExtEvent<(window: Window) => void>;

    /**
     * Fired when a window is removed (closed).
     * @param windowId ID of the removed window.
     */
    const onRemoved: WebExtEvent<(windowId: number) => void>;

    /**
     * Fired when the currently focused window changes. Will be `windows.WINDOW_ID_NONE` if all browser windows have
     * lost focus. Note: On some Linux window managers, WINDOW_ID_NONE will always be sent immediately preceding a
     * switch from one browser window to another.
     * @param windowId ID of the newly focused window.
     */
    const onFocusChanged: WebExtEvent<(windowId: number) => void>;
}
