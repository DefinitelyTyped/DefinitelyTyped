// Type definitions for non-npm package WebExtension Development in FireFox 94.0
// Project: https://developer.mozilla.org/en-US/Add-ons/WebExtensions
// Definitions by: Jasmin Bom <https://github.com/jsmnbom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4
// Generated using script at github.com/jsmnbom/definitelytyped-firefox-webext-browser

interface WebExtEvent<TCallback extends (...args: any[]) => any> {
    addListener(cb: TCallback): void;
    removeListener(cb: TCallback): void;
    hasListener(cb: TCallback): boolean;
}

/** Not allowed in: Content scripts, Devtools pages */
declare namespace browser._manifest {
    /* _manifest types */
    type PermissionNoPrompt = OptionalPermission | _PermissionNoPrompt;

    interface ActionManifest {
        default_title?: string | undefined;
        default_icon?: IconPath | undefined;
        /** Specifies icons to use for dark and light themes */
        theme_icons?: ThemeIcons[] | undefined;
        default_popup?: string | undefined;
        browser_style?: boolean | undefined;
        /** Defines the location the browserAction will appear by default. The default location is navbar. */
        default_area?: _ActionManifestDefaultArea | undefined;
    }

    /** Represents a WebExtension manifest.json file */
    interface WebExtensionManifest {
        /** Needs at least manifest version 3. */
        action?: ActionManifest | undefined;
        /** Not supported on manifest versions above 2. */
        browser_action?: ActionManifest | undefined;
        experiment_apis?: { [key: string]: experiments.ExperimentAPI } | undefined;
        /** A list of protocol handler definitions. */
        protocol_handlers?: ProtocolHandler[] | undefined;
        default_locale?: string | undefined;
        l10n_resources?: string[] | undefined;
        minimum_chrome_version?: string | undefined;
        minimum_opera_version?: string | undefined;
        icons?: _WebExtensionManifestIcons | undefined;
        incognito?: _WebExtensionManifestIncognito | undefined;
        background?:
            | {
                  page: ExtensionURL;
                  persistent?: PersistentBackgroundProperty | undefined;
              }
            | {
                  scripts: ExtensionURL[];
                  persistent?: PersistentBackgroundProperty | undefined;
              }
            | {
                  service_worker: ExtensionURL;
              }
            | undefined;
        options_ui?: _WebExtensionManifestOptionsUi | undefined;
        content_scripts?: ContentScript[] | undefined;
        content_security_policy?:
            | string
            | {
                  /** The Content Security Policy used for extension pages. */
                  extension_pages?: string | undefined;
              }
            | undefined;
        permissions?: PermissionOrOrigin[] | Permission[] | undefined;
        /** Needs at least manifest version 3. */
        host_permissions?: MatchPattern[] | undefined;
        optional_permissions?: OptionalPermissionOrOrigin[] | undefined;
        web_accessible_resources?:
            | string[]
            | Array<{
                  resources: string[];
                  matches: MatchPatternRestricted[];
              }>
            | undefined;
        developer?: _WebExtensionManifestDeveloper | undefined;
        hidden?: boolean | undefined;
        page_action?: _WebExtensionManifestPageAction | undefined;
        telemetry?: _WebExtensionManifestTelemetry | undefined;
        theme_experiment?: ThemeExperiment | undefined;
        user_scripts?: _WebExtensionManifestUserScripts | undefined;
        chrome_settings_overrides?: _WebExtensionManifestChromeSettingsOverrides | undefined;
        commands?: { [key: string]: _WebExtensionManifestCommands } | undefined;
        devtools_page?: ExtensionURL | undefined;
        omnibox?: _WebExtensionManifestOmnibox | undefined;
        sidebar_action?: _WebExtensionManifestSidebarAction | undefined;
        chrome_url_overrides?: _WebExtensionManifestChromeUrlOverrides | undefined;
        manifest_version: number;
        applications?: _WebExtensionManifestApplications | undefined;
        browser_specific_settings?: _WebExtensionManifestBrowserSpecificSettings | undefined;
        name: string;
        short_name?: string | undefined;
        description?: string | undefined;
        author?: string | undefined;
        version: string;
        homepage_url?: string | undefined;
    }

    type OptionalPermission = OptionalPermissionNoPrompt | _OptionalPermission;

    type OptionalPermissionNoPrompt = _OptionalPermissionNoPrompt;

    type Permission = string | PermissionNoPrompt | OptionalPermission;

    /** Represents a protocol handler definition. */
    interface ProtocolHandler {
        /**
         * A user-readable title string for the protocol handler. This will be displayed to the user in interface objects as needed.
         */
        name: string;
        /**
         * The protocol the site wishes to handle, specified as a string. For example, you can register to handle SMS text message links by registering to handle the "sms" scheme.
         */
        protocol: string | _ProtocolHandlerProtocol;
        /**
         * The URL of the handler, as a string. This string should include "%s" as a placeholder which will be replaced with the escaped URL of the document to be handled. This URL might be a true URL, or it could be a phone number, email address, or so forth.
         */
        uriTemplate: ExtensionURL | HttpURL;
    }

    /** Common properties for all manifest.json files */
    interface ManifestBase {
        manifest_version: number;
        applications?: _ManifestBaseApplications | undefined;
        browser_specific_settings?: _ManifestBaseBrowserSpecificSettings | undefined;
        name: string;
        short_name?: string | undefined;
        description?: string | undefined;
        author?: string | undefined;
        version: string;
        homepage_url?: string | undefined;
    }

    /** Represents a WebExtension language pack manifest.json file */
    interface WebExtensionLangpackManifest {
        homepage_url?: string | undefined;
        langpack_id: string;
        languages: _WebExtensionLangpackManifestLanguages;
        sources?: _WebExtensionLangpackManifestSources | undefined;
        manifest_version: number;
        applications?: _WebExtensionLangpackManifestApplications | undefined;
        browser_specific_settings?:
            | _WebExtensionLangpackManifestBrowserSpecificSettings
            | undefined;
        name: string;
        short_name?: string | undefined;
        description?: string | undefined;
        author?: string | undefined;
        version: string;
    }

    /** Represents a WebExtension dictionary manifest.json file */
    interface WebExtensionDictionaryManifest {
        homepage_url?: string | undefined;
        dictionaries: _WebExtensionDictionaryManifestDictionaries;
        manifest_version: number;
        applications?: _WebExtensionDictionaryManifestApplications | undefined;
        browser_specific_settings?:
            | _WebExtensionDictionaryManifestBrowserSpecificSettings
            | undefined;
        name: string;
        short_name?: string | undefined;
        description?: string | undefined;
        author?: string | undefined;
        version: string;
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

    type ExtensionFileUrl = string;

    type ImageDataOrExtensionURL = string;

    type ExtensionID = string;

    interface FirefoxSpecificProperties {
        id?: ExtensionID | undefined;
        update_url?: string | undefined;
        strict_min_version?: string | undefined;
        strict_max_version?: string | undefined;
    }

    type MatchPattern = MatchPatternRestricted | MatchPatternUnestricted | '<all_urls>';

    /** Same as MatchPattern above, but excludes<all_urls></all_urls> */
    type MatchPatternRestricted = string;

    /**
     * Mostly unrestricted match patterns for privileged add-ons. This should technically be rejected for unprivileged add-ons, but, reasons. The MatchPattern class will still refuse privileged schemes for those extensions.
     */
    type MatchPatternUnestricted = string;

    /**
     * Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time. Based on InjectDetails, but using underscore rather than camel case naming conventions.
     */
    interface ContentScript {
        matches: MatchPattern[];
        exclude_matches?: MatchPattern[] | undefined;
        include_globs?: string[] | undefined;
        exclude_globs?: string[] | undefined;
        /** The list of CSS files to inject */
        css?: ExtensionURL[] | undefined;
        /** The list of JS files to inject */
        js?: ExtensionURL[] | undefined;
        /**
         * If allFrames is `true`, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's `false` and is only injected into the top frame.
         */
        all_frames?: boolean | undefined;
        /**
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is `false`.
         */
        match_about_blank?: boolean | undefined;
        /** The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle". */
        run_at?: extensionTypes.RunAt | undefined;
    }

    type IconPath =
        | {
              [key: number]: ExtensionFileUrl;
          }
        | ExtensionFileUrl;

    type IconImageData =
        | {
              [key: number]: ImageData;
          }
        | ImageData;

    type ImageData = any;

    /** @deprecated An unexpected property was found in the WebExtension manifest. */
    type UnrecognizedProperty = any;

    type PersistentBackgroundProperty = boolean;

    /** Represents a native manifest file */
    type NativeManifest =
        | {
              name: string;
              description: string;
              path: string;
              type: 'pkcs11' | 'stdio';
              allowed_extensions: ExtensionID[];
          }
        | {
              name: ExtensionID;
              description: string;
              data: { [key: string]: any };
              type: 'storage';
          };

    type ThemeColor = string | [number, number, number] | [number, number, number, number];

    interface ThemeExperiment {
        stylesheet?: ExtensionURL | undefined;
        images?: { [key: string]: string } | undefined;
        colors?: { [key: string]: string } | undefined;
        properties?: { [key: string]: string } | undefined;
    }

    interface ThemeType {
        images?: _ThemeTypeImages | undefined;
        colors?: _ThemeTypeColors | undefined;
        properties?: _ThemeType | undefined;
    }

    /** Contents of manifest.json for a static theme */
    interface ThemeManifest {
        theme: ThemeType;
        dark_theme?: ThemeType | undefined;
        default_locale?: string | undefined;
        theme_experiment?: ThemeExperiment | undefined;
        icons?: _ThemeManifestIcons | undefined;
    }

    type KeyName = string;

    type _PermissionNoPrompt =
        | 'activityLog'
        | 'captivePortal'
        | 'contextualIdentities'
        | 'dns'
        | 'geckoProfiler'
        | 'identity'
        | 'alarms'
        | 'mozillaAddons'
        | 'storage'
        | 'unlimitedStorage'
        | 'networkStatus'
        | 'telemetry'
        | 'theme'
        | 'menus'
        | 'contextMenus'
        | 'normandyAddonStudy'
        | 'urlbar';

    /** Defines the location the browserAction will appear by default. The default location is navbar. */
    type _ActionManifestDefaultArea = 'navbar' | 'menupanel' | 'tabstrip' | 'personaltoolbar';

    interface _WebExtensionManifestIcons {
        [key: number]: ExtensionFileUrl;
    }

    type _WebExtensionManifestIncognito = 'not_allowed' | 'spanning';

    interface _WebExtensionManifestOptionsUi {
        page: ExtensionURL;
        browser_style?: boolean | undefined;
        chrome_style?: boolean | undefined;
        open_in_tab?: boolean | undefined;
    }

    interface _WebExtensionManifestDeveloper {
        name?: string | undefined;
        url?: string | undefined;
    }

    interface _WebExtensionManifestPageAction {
        default_title?: string | undefined;
        default_icon?: IconPath | undefined;
        default_popup?: string | undefined;
        browser_style?: boolean | undefined;
        show_matches?: MatchPattern[] | undefined;
        hide_matches?: MatchPatternRestricted[] | undefined;
        pinned?: boolean | undefined;
    }

    interface _WebExtensionManifestTelemetryPublicKeyKey {
        crv?: string | undefined;
        kty?: string | undefined;
        x?: string | undefined;
        y?: string | undefined;
    }

    interface _WebExtensionManifestTelemetryPublicKey {
        id: string;
        key: _WebExtensionManifestTelemetryPublicKeyKey;
    }

    interface _WebExtensionManifestTelemetry {
        ping_type: string;
        schemaNamespace: string;
        public_key: _WebExtensionManifestTelemetryPublicKey;
        study_name?: string | undefined;
        pioneer_id?: boolean | undefined;
    }

    interface _WebExtensionManifestUserScripts {
        api_script?: ExtensionURL | undefined;
    }

    /** The type of param can be either "purpose" or "pref". */
    type _WebExtensionManifestChromeSettingsOverridesSearchProviderParamsCondition =
        | 'purpose'
        | 'pref';

    /** The context that initiates a search, required if condition is "purpose". */
    type _WebExtensionManifestChromeSettingsOverridesSearchProviderParamsPurpose =
        | 'contextmenu'
        | 'searchbar'
        | 'homepage'
        | 'keyword'
        | 'newtab';

    interface _WebExtensionManifestChromeSettingsOverridesSearchProviderParams {
        /** A url parameter name */
        name: string;
        /** The type of param can be either "purpose" or "pref". */
        condition?:
            | _WebExtensionManifestChromeSettingsOverridesSearchProviderParamsCondition
            | undefined;
        /** The preference to retrieve the value from. */
        pref?: string | undefined;
        /** The context that initiates a search, required if condition is "purpose". */
        purpose?:
            | _WebExtensionManifestChromeSettingsOverridesSearchProviderParamsPurpose
            | undefined;
        /** A url parameter value. */
        value?: string | undefined;
    }

    interface _WebExtensionManifestChromeSettingsOverridesSearchProvider {
        name: string;
        keyword?: string | string[] | undefined;
        search_url: string;
        favicon_url?: string | undefined;
        suggest_url?: string | undefined;
        /** @deprecated Unsupported on Firefox at this time. */
        instant_url?: string | undefined;
        /** @deprecated Unsupported on Firefox at this time. */
        image_url?: string | undefined;
        /** GET parameters to the search_url as a query string. */
        search_url_get_params?: string | undefined;
        /** POST parameters to the search_url as a query string. */
        search_url_post_params?: string | undefined;
        /** GET parameters to the suggest_url as a query string. */
        suggest_url_get_params?: string | undefined;
        /** POST parameters to the suggest_url as a query string. */
        suggest_url_post_params?: string | undefined;
        /** @deprecated Unsupported on Firefox at this time. */
        instant_url_post_params?: string | undefined;
        /** @deprecated Unsupported on Firefox at this time. */
        image_url_post_params?: string | undefined;
        search_form?: string | undefined;
        /** @deprecated Unsupported on Firefox at this time. */
        alternate_urls?: string[] | undefined;
        /** @deprecated Unsupported on Firefox. */
        prepopulated_id?: number | undefined;
        /** Encoding of the search term. */
        encoding?: string | undefined;
        /** Sets the default engine to a built-in engine only. */
        is_default?: boolean | undefined;
        /**
         * A list of optional search url parameters. This allows the additon of search url parameters based on how the search is performed in Firefox.
         */
        params?: _WebExtensionManifestChromeSettingsOverridesSearchProviderParams[] | undefined;
    }

    interface _WebExtensionManifestChromeSettingsOverrides {
        homepage?: string | undefined;
        search_provider?: _WebExtensionManifestChromeSettingsOverridesSearchProvider | undefined;
    }

    interface _WebExtensionManifestCommandsSuggestedKey {
        default?: KeyName | undefined;
        mac?: KeyName | undefined;
        linux?: KeyName | undefined;
        windows?: KeyName | undefined;
        chromeos?: string | undefined;
        android?: string | undefined;
        ios?: string | undefined;
        /** @deprecated Unknown platform name */
        additionalProperties?: string | undefined;
    }

    interface _WebExtensionManifestCommands {
        suggested_key?: _WebExtensionManifestCommandsSuggestedKey | undefined;
        description?: string | undefined;
    }

    interface _WebExtensionManifestOmnibox {
        keyword: string;
    }

    interface _WebExtensionManifestSidebarAction {
        default_title?: string | undefined;
        default_icon?: IconPath | undefined;
        browser_style?: boolean | undefined;
        default_panel: string;
        /** Whether or not the sidebar is opened at install. Default is `true`. */
        open_at_install?: boolean | undefined;
    }

    interface _WebExtensionManifestChromeUrlOverrides {
        newtab?: ExtensionURL | undefined;
        /** @deprecated Unsupported on Firefox at this time. */
        bookmarks?: ExtensionURL | undefined;
        /** @deprecated Unsupported on Firefox at this time. */
        history?: ExtensionURL | undefined;
    }

    interface _WebExtensionManifestApplications {
        gecko?: FirefoxSpecificProperties | undefined;
    }

    interface _WebExtensionManifestBrowserSpecificSettings {
        gecko?: FirefoxSpecificProperties | undefined;
        edge?: { [key: string]: any } | undefined;
    }

    type _OptionalPermission =
        | 'browserSettings'
        | 'browsingData'
        | 'downloads'
        | 'downloads.open'
        | 'management'
        | 'clipboardRead'
        | 'clipboardWrite'
        | 'geolocation'
        | 'notifications'
        | 'privacy'
        | 'proxy'
        | 'nativeMessaging'
        | 'webNavigation'
        | 'bookmarks'
        | 'devtools'
        | 'find'
        | 'history'
        | 'pkcs11'
        | 'sessions'
        | 'tabs'
        | 'tabHide'
        | 'topSites';

    type _OptionalPermissionNoPrompt =
        | 'cookies'
        | 'idle'
        | 'webRequest'
        | 'webRequestBlocking'
        | 'menus.overrideContext'
        | 'search'
        | 'activeTab';

    type _ProtocolHandlerProtocol =
        | 'bitcoin'
        | 'dat'
        | 'dweb'
        | 'ftp'
        | 'geo'
        | 'gopher'
        | 'im'
        | 'ipfs'
        | 'ipns'
        | 'irc'
        | 'ircs'
        | 'magnet'
        | 'mailto'
        | 'matrix'
        | 'mms'
        | 'news'
        | 'nntp'
        | 'sip'
        | 'sms'
        | 'smsto'
        | 'ssb'
        | 'ssh'
        | 'tel'
        | 'urn'
        | 'webcal'
        | 'wtai'
        | 'xmpp';

    interface _ManifestBaseApplications {
        gecko?: FirefoxSpecificProperties | undefined;
    }

    interface _ManifestBaseBrowserSpecificSettings {
        gecko?: FirefoxSpecificProperties | undefined;
        edge?: { [key: string]: any } | undefined;
    }

    interface _UndefinedChromeResources {
        [key: string]:
            | ExtensionURL
            | {
                  [key: string]: ExtensionURL;
              };
    }

    interface _WebExtensionLangpackManifestLanguages {
        [key: string]: {
            chrome_resources: _UndefinedChromeResources;
            version: string;
        };
    }

    interface _WebExtensionLangpackManifestSources {
        [key: string]: {
            base_path: ExtensionURL;
            paths?: string[] | undefined;
        };
    }

    interface _WebExtensionLangpackManifestApplications {
        gecko?: FirefoxSpecificProperties | undefined;
    }

    interface _WebExtensionLangpackManifestBrowserSpecificSettings {
        gecko?: FirefoxSpecificProperties | undefined;
        edge?: { [key: string]: any } | undefined;
    }

    interface _WebExtensionDictionaryManifestDictionaries {
        [key: string]: string;
    }

    interface _WebExtensionDictionaryManifestApplications {
        gecko?: FirefoxSpecificProperties | undefined;
    }

    interface _WebExtensionDictionaryManifestBrowserSpecificSettings {
        gecko?: FirefoxSpecificProperties | undefined;
        edge?: { [key: string]: any } | undefined;
    }

    interface _ThemeTypeImages {
        additional_backgrounds?: ImageDataOrExtensionURL[] | undefined;
        /**
         * @deprecated Unsupported images property, use 'theme.images.theme_frame', this alias is ignored in Firefox >= 70.
         */
        headerURL?: ImageDataOrExtensionURL | undefined;
        theme_frame?: ImageDataOrExtensionURL | undefined;
    }

    interface _ThemeTypeColors {
        tab_selected?: ThemeColor | undefined;
        /**
         * @deprecated Unsupported colors property, use 'theme.colors.frame', this alias is ignored in Firefox >= 70.
         */
        accentcolor?: ThemeColor | undefined;
        frame?: ThemeColor | undefined;
        frame_inactive?: ThemeColor | undefined;
        /**
         * @deprecated Unsupported color property, use 'theme.colors.tab_background_text', this alias is ignored in Firefox >= 70.
         */
        textcolor?: ThemeColor | undefined;
        tab_background_text?: ThemeColor | undefined;
        tab_background_separator?: ThemeColor | undefined;
        tab_loading?: ThemeColor | undefined;
        tab_text?: ThemeColor | undefined;
        tab_line?: ThemeColor | undefined;
        toolbar?: ThemeColor | undefined;
        /** This color property is an alias of 'bookmark_text'. */
        toolbar_text?: ThemeColor | undefined;
        bookmark_text?: ThemeColor | undefined;
        toolbar_field?: ThemeColor | undefined;
        toolbar_field_text?: ThemeColor | undefined;
        toolbar_field_border?: ThemeColor | undefined;
        /** @deprecated This color property is ignored in Firefox >= 89. */
        toolbar_field_separator?: ThemeColor | undefined;
        toolbar_top_separator?: ThemeColor | undefined;
        toolbar_bottom_separator?: ThemeColor | undefined;
        toolbar_vertical_separator?: ThemeColor | undefined;
        icons?: ThemeColor | undefined;
        icons_attention?: ThemeColor | undefined;
        button_background_hover?: ThemeColor | undefined;
        button_background_active?: ThemeColor | undefined;
        popup?: ThemeColor | undefined;
        popup_text?: ThemeColor | undefined;
        popup_border?: ThemeColor | undefined;
        toolbar_field_focus?: ThemeColor | undefined;
        toolbar_field_text_focus?: ThemeColor | undefined;
        toolbar_field_border_focus?: ThemeColor | undefined;
        popup_highlight?: ThemeColor | undefined;
        popup_highlight_text?: ThemeColor | undefined;
        ntp_background?: ThemeColor | undefined;
        ntp_card_background?: ThemeColor | undefined;
        ntp_text?: ThemeColor | undefined;
        sidebar?: ThemeColor | undefined;
        sidebar_border?: ThemeColor | undefined;
        sidebar_text?: ThemeColor | undefined;
        sidebar_highlight?: ThemeColor | undefined;
        sidebar_highlight_text?: ThemeColor | undefined;
        toolbar_field_highlight?: ThemeColor | undefined;
        toolbar_field_highlight_text?: ThemeColor | undefined;
    }

    type _ThemeTypeAdditionalBackgroundsAlignment =
        | 'bottom'
        | 'center'
        | 'left'
        | 'right'
        | 'top'
        | 'center bottom'
        | 'center center'
        | 'center top'
        | 'left bottom'
        | 'left center'
        | 'left top'
        | 'right bottom'
        | 'right center'
        | 'right top';

    type _ThemeTypeAdditionalBackgroundsTiling = 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';

    interface _ThemeType {
        additional_backgrounds_alignment?: _ThemeTypeAdditionalBackgroundsAlignment[] | undefined;
        additional_backgrounds_tiling?: _ThemeTypeAdditionalBackgroundsTiling[] | undefined;
    }

    interface _ThemeManifestIcons {
        [key: number]: string;
    }
}

/**
 * Monitor extension activity
 *
 * Permissions: `activityLog`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.activityLog {
    /**
     * The type of log entry. api_call is a function call made by the extension and api_event is an event callback to the extension. content_script is logged when a content script is injected.
     */
    type _OnExtensionActivityDetailsType =
        | 'api_call'
        | 'api_event'
        | 'content_script'
        | 'user_script';

    /** The type of view where the activity occurred. Content scripts will not have a viewType. */
    type _OnExtensionActivityDetailsViewType =
        | 'background'
        | 'popup'
        | 'sidebar'
        | 'tab'
        | 'devtools_page'
        | 'devtools_panel';

    interface _OnExtensionActivityDetailsData {
        /** A list of arguments passed to the call. */
        args?: any[] | undefined;
        /** The result of the call. */
        result?: object | undefined;
        /** The tab associated with this event if it is a tab or content script. */
        tabId?: number | undefined;
        /** If the type is content_script, this is the url of the script that was injected. */
        url?: string | undefined;
    }

    interface _OnExtensionActivityDetails {
        /** The date string when this call is triggered. */
        timeStamp: extensionTypes.Date;
        /**
         * The type of log entry. api_call is a function call made by the extension and api_event is an event callback to the extension. content_script is logged when a content script is injected.
         */
        type: _OnExtensionActivityDetailsType;
        /** The type of view where the activity occurred. Content scripts will not have a viewType. */
        viewType?: _OnExtensionActivityDetailsViewType | undefined;
        /** The name of the api call or event, or the script url if this is a content or user script event. */
        name: string;
        data: _OnExtensionActivityDetailsData;
    }

    interface _ActivityLogOnExtensionActivityEvent<
        TCallback = (details: _OnExtensionActivityDetails) => void
    > {
        addListener(cb: TCallback, id: string): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    /* activityLog events */
    /** Receives an activityItem for each logging event. */
    const onExtensionActivity: _ActivityLogOnExtensionActivityEvent;
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
        periodInMinutes?: number | undefined;
    }

    /**
     * Details about the alarm. The alarm first fires either at 'when' milliseconds past the epoch (if 'when' is provided), after 'delayInMinutes' minutes from the current time (if 'delayInMinutes' is provided instead), or after 'periodInMinutes' minutes from the current time (if only 'periodInMinutes' is provided). Users should never provide both 'when' and 'delayInMinutes'. If 'periodInMinutes' is provided, then the alarm recurs repeatedly after that many minutes.
     */
    interface _CreateAlarmInfo {
        /** Time when the alarm is scheduled to first fire, in milliseconds past the epoch. */
        when?: number | undefined;
        /** Number of minutes from the current time after which the alarm should first fire. */
        delayInMinutes?: number | undefined;
        /** Number of minutes after which the alarm should recur repeatedly. */
        periodInMinutes?: number | undefined;
    }

    /* alarms functions */
    /**
     * Creates an alarm. After the delay is expired, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
     * @param alarmInfo Details about the alarm. The alarm first fires either at 'when' milliseconds past the epoch (if 'when' is provided), after 'delayInMinutes' minutes from the current time (if 'delayInMinutes' is provided instead), or after 'periodInMinutes' minutes from the current time (if only 'periodInMinutes' is provided). Users should never provide both 'when' and 'delayInMinutes'. If 'periodInMinutes' is provided, then the alarm recurs repeatedly after that many minutes.
     */
    function create(alarmInfo: _CreateAlarmInfo): void;
    /**
     * Creates an alarm. After the delay is expired, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
     * @param name Optional name to identify this alarm. Defaults to the empty string.
     * @param alarmInfo Details about the alarm. The alarm first fires either at 'when' milliseconds past the epoch (if 'when' is provided), after 'delayInMinutes' minutes from the current time (if 'delayInMinutes' is provided instead), or after 'periodInMinutes' minutes from the current time (if only 'periodInMinutes' is provided). Users should never provide both 'when' and 'delayInMinutes'. If 'periodInMinutes' is provided, then the alarm recurs repeatedly after that many minutes.
     */
    function create(name: string, alarmInfo: _CreateAlarmInfo): void;

    /**
     * Retrieves details about the specified alarm.
     * @param [name] The name of the alarm to get. Defaults to the empty string.
     */
    function get(name?: string): Promise<Alarm | undefined>;

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

/**
 * Use browser actions to put icons in the main browser toolbar, to the right of the address bar. In addition to its icon, a browser action can also have a tooltip, a badge, and a popup.
 *
 * Manifest keys: `action`, `browser_action`
 *
 * Needs at least manifest version 3.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.action {
    /* action types */
    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface Details {
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    type ColorArray = [number, number, number, number];

    /** Pixel data for an image. Must be an ImageData object (for example, from a `canvas` element). */
    type ImageDataType = ImageData;

    /**
     * An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is `[255, 0, 0, 255]`. Can also be a string with a CSS value, with opaque red being `#FF0000` or `#F00`.
     */
    type ColorValue = string | ColorArray | null;

    /** Information sent when a browser action is clicked. */
    interface OnClickData {
        /** An array of keyboard modifiers that were held while the menu item was clicked. */
        modifiers: _OnClickDataModifiers[];
        /** An integer value of button by which menu item was clicked. */
        button?: number | undefined;
    }

    type _OnClickDataModifiers = 'Shift' | 'Alt' | 'Command' | 'Ctrl' | 'MacCtrl';

    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface _SetTitleDetails {
        /** The string the browser action should display when moused over. */
        title: string | null;
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface _SetIconDetails {
        /**
         * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        imageData?:
            | ImageDataType
            | {
                  [key: number]: ImageDataType;
              }
            | undefined;
        /**
         * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        path?:
            | string
            | {
                  [key: number]: string;
              }
            | undefined;
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface _SetPopupDetails {
        /** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string | null;
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface _SetBadgeTextDetails {
        /** Any number of characters can be passed, but only about four can fit in the space. */
        text: string | null;
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface _SetBadgeBackgroundColorDetails {
        color: ColorValue;
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface _SetBadgeTextColorDetails {
        color: ColorValue;
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    /* action functions */
    /**
     * Sets the title of the browser action. This shows up in the tooltip.
     * @param details Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    function setTitle(details: _SetTitleDetails): Promise<void>;

    /** Gets the title of the browser action. */
    function getTitle(details: Details): Promise<string>;

    /**
     * Sets the icon for the browser action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the **path** or the **imageData** property must be specified.
     * @param details Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    function setIcon(details: _SetIconDetails): Promise<void>;

    /**
     * Sets the html document to be opened as a popup when the user clicks on the browser action's icon.
     * @param details Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    function setPopup(details: _SetPopupDetails): Promise<void>;

    /** Gets the html document set as the popup for this browser action. */
    function getPopup(details: Details): Promise<string>;

    /**
     * Sets the badge text for the browser action. The badge is displayed on top of the icon.
     * @param details Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    function setBadgeText(details: _SetBadgeTextDetails): Promise<void>;

    /**
     * Gets the badge text of the browser action. If no tab nor window is specified is specified, the global badge text is returned.
     */
    function getBadgeText(details: Details): Promise<string>;

    /**
     * Sets the background color for the badge.
     * @param details Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    function setBadgeBackgroundColor(details: _SetBadgeBackgroundColorDetails): Promise<void>;

    /** Gets the background color of the browser action badge. */
    function getBadgeBackgroundColor(details: Details): Promise<ColorArray>;

    /**
     * Sets the text color for the badge.
     * @param details Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    function setBadgeTextColor(details: _SetBadgeTextColorDetails): Promise<any>;

    /** Gets the text color of the browser action badge. */
    function getBadgeTextColor(details: Details): Promise<any>;

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

    /** Checks whether the browser action is enabled. */
    function isEnabled(details: Details): Promise<any>;

    /** Opens the extension popup window in the active window. */
    function openPopup(): Promise<boolean>;

    /* action events */
    /**
     * Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup.
     */
    const onClicked: WebExtEvent<(tab: tabs.Tab, info?: OnClickData) => void>;
}

/**
 * Manifest keys: `action`, `browser_action`
 *
 * Not supported on manifest versions above 2.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.browserAction {
    /* browserAction types */
    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface Details {
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    type ColorArray = [number, number, number, number];

    /** Pixel data for an image. Must be an ImageData object (for example, from a `canvas` element). */
    type ImageDataType = ImageData;

    /**
     * An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is `[255, 0, 0, 255]`. Can also be a string with a CSS value, with opaque red being `#FF0000` or `#F00`.
     */
    type ColorValue = string | ColorArray | null;

    /** Information sent when a browser action is clicked. */
    interface OnClickData {
        /** An array of keyboard modifiers that were held while the menu item was clicked. */
        modifiers: _OnClickDataModifiers[];
        /** An integer value of button by which menu item was clicked. */
        button?: number | undefined;
    }

    type _OnClickDataModifiers = 'Shift' | 'Alt' | 'Command' | 'Ctrl' | 'MacCtrl';

    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface _SetTitleDetails {
        /** The string the browser action should display when moused over. */
        title: string | null;
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface _SetIconDetails {
        /**
         * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        imageData?:
            | ImageDataType
            | {
                  [key: number]: ImageDataType;
              }
            | undefined;
        /**
         * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        path?:
            | string
            | {
                  [key: number]: string;
              }
            | undefined;
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface _SetPopupDetails {
        /** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string | null;
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface _SetBadgeTextDetails {
        /** Any number of characters can be passed, but only about four can fit in the space. */
        text: string | null;
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface _SetBadgeBackgroundColorDetails {
        color: ColorValue;
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    /**
     * Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    interface _SetBadgeTextColorDetails {
        color: ColorValue;
        /**
         * When setting a value, it will be specific to the specified tab, and will automatically reset when the tab navigates. When getting, specifies the tab to get the value from; if there is no tab-specific value, the window one will be inherited.
         */
        tabId?: number | undefined;
        /**
         * When setting a value, it will be specific to the specified window. When getting, specifies the window to get the value from; if there is no window-specific value, the global one will be inherited.
         */
        windowId?: number | undefined;
    }

    /* browserAction functions */
    /**
     * Sets the title of the browser action. This shows up in the tooltip.
     * @param details Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    function setTitle(details: _SetTitleDetails): Promise<void>;

    /** Gets the title of the browser action. */
    function getTitle(details: Details): Promise<string>;

    /**
     * Sets the icon for the browser action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the **path** or the **imageData** property must be specified.
     * @param details Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    function setIcon(details: _SetIconDetails): Promise<void>;

    /**
     * Sets the html document to be opened as a popup when the user clicks on the browser action's icon.
     * @param details Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    function setPopup(details: _SetPopupDetails): Promise<void>;

    /** Gets the html document set as the popup for this browser action. */
    function getPopup(details: Details): Promise<string>;

    /**
     * Sets the badge text for the browser action. The badge is displayed on top of the icon.
     * @param details Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    function setBadgeText(details: _SetBadgeTextDetails): Promise<void>;

    /**
     * Gets the badge text of the browser action. If no tab nor window is specified is specified, the global badge text is returned.
     */
    function getBadgeText(details: Details): Promise<string>;

    /**
     * Sets the background color for the badge.
     * @param details Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    function setBadgeBackgroundColor(details: _SetBadgeBackgroundColorDetails): Promise<void>;

    /** Gets the background color of the browser action badge. */
    function getBadgeBackgroundColor(details: Details): Promise<ColorArray>;

    /**
     * Sets the text color for the badge.
     * @param details Specifies to which tab or window the value should be set, or from which one it should be retrieved. If no tab nor window is specified, the global value is set or retrieved.
     */
    function setBadgeTextColor(details: _SetBadgeTextColorDetails): Promise<any>;

    /** Gets the text color of the browser action badge. */
    function getBadgeTextColor(details: Details): Promise<any>;

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

    /** Checks whether the browser action is enabled. */
    function isEnabled(details: Details): Promise<any>;

    /** Opens the extension popup window in the active window. */
    function openPopup(): Promise<boolean>;

    /* browserAction events */
    /**
     * Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup.
     */
    const onClicked: WebExtEvent<(tab: tabs.Tab, info?: OnClickData) => void>;
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
    type ImageAnimationBehavior = 'normal' | 'none' | 'once';

    /** After which mouse event context menus should popup. */
    type ContextMenuMouseEvent = 'mouseup' | 'mousedown';

    /** Color management mode. */
    type ColorManagementMode = 'off' | 'full' | 'tagged_only';

    /* browserSettings properties */
    /** Allows or disallows pop-up windows from opening in response to user events. */
    const allowPopupsForUserEvents: types.Setting;

    /** Enables or disables the browser cache. */
    const cacheEnabled: types.Setting;

    /** This boolean setting controls whether the selected tab can be closed with a double click. */
    const closeTabsByDoubleClick: types.Setting;

    /**
     * Controls after which mouse event context menus popup. This setting's value is of type ContextMenuMouseEvent, which has possible values of `mouseup` and `mousedown`.
     */
    const contextMenuShowEvent: types.Setting;

    /**
     * Returns whether the FTP protocol is enabled. Read-only.
     * @deprecated FTP support was removed from Firefox in bug 1574475
     */
    const ftpProtocolEnabled: types.Setting;

    /** Returns the value of the overridden home page. Read-only. */
    const homepageOverride: types.Setting;

    /**
     * Controls the behaviour of image animation in the browser. This setting's value is of type ImageAnimationBehavior, defaulting to `normal`.
     */
    const imageAnimationBehavior: types.Setting;

    /** Returns the value of the overridden new tab page. Read-only. */
    const newTabPageOverride: types.Setting;

    /**
     * Controls where new tabs are opened. `afterCurrent` will open all new tabs next to the current tab, `relatedAfterCurrent` will open only related tabs next to the current tab, and `atEnd` will open all tabs at the end of the tab strip. The default is `relatedAfterCurrent`.
     */
    const newTabPosition: types.Setting;

    /** This boolean setting controls whether bookmarks are opened in the current tab or in a new tab. */
    const openBookmarksInNewTabs: types.Setting;

    /** This boolean setting controls whether search results are opened in the current tab or in a new tab. */
    const openSearchResultsInNewTabs: types.Setting;

    /** This boolean setting controls whether urlbar results are opened in the current tab or in a new tab. */
    const openUrlbarResultsInNewTabs: types.Setting;

    /** Disables webAPI notifications. */
    const webNotificationsDisabled: types.Setting;

    /** This setting controls whether the user-chosen colors override the page's colors. */
    const overrideDocumentColors: types.Setting;

    /** This setting controls whether the document's fonts are used. */
    const useDocumentFonts: types.Setting;

    /** This boolean setting controls whether zoom is applied to the full page or to text only. */
    const zoomFullPage: types.Setting;

    /**
     * This boolean setting controls whether zoom is applied on a per-site basis or to the current tab only. If privacy.resistFingerprinting is true, this setting has no effect and zoom is applied to the current tab only.
     */
    const zoomSiteSpecific: types.Setting;
}

/**
 * Use the `browserSettings.colorManagement` API to query and set items related to color management.
 *
 * Permissions: `browserSettings`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.browserSettings.colorManagement {
    /* browserSettings.colorManagement properties */
    /**
     * This setting controls the mode used for color management and must be a string from `browserSettings.ColorManagementMode`
     */
    const mode: types.Setting;

    /** This boolean setting controls whether or not native sRGB color management is used. */
    const useNativeSRGB: types.Setting;

    /** This boolean setting controls whether or not the WebRender compositor is used. */
    const useWebRenderCompositor: types.Setting;
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
         * Remove data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the `getTime` method of the JavaScript `Date` object). If absent, defaults to 0 (which would remove all browsing data).
         */
        since?: extensionTypes.Date | undefined;
        /** Only remove data associated with these hostnames (only applies to cookies and localStorage). */
        hostnames?: string[] | undefined;
        /** Only remove data associated with this specific cookieStoreId. */
        cookieStoreId?: string | undefined;
        /**
         * An object whose properties specify which origin types ought to be cleared. If this object isn't specified, it defaults to clearing only "unprotected" origins. Please ensure that you _really_ want to remove application data before adding 'protectedWeb' or 'extensions'.
         */
        originTypes?: _RemovalOptionsOriginTypes | undefined;
    }

    /** A set of data types. Missing data types are interpreted as `false`. */
    interface DataTypeSet {
        /**
         * The browser's cache. Note: when removing data, this clears the _entire_ cache: it is not limited to the range you specify.
         */
        cache?: boolean | undefined;
        /** The browser's cookies. */
        cookies?: boolean | undefined;
        /** The browser's download list. */
        downloads?: boolean | undefined;
        /** The browser's stored form data. */
        formData?: boolean | undefined;
        /** The browser's history. */
        history?: boolean | undefined;
        /** Websites' IndexedDB data. */
        indexedDB?: boolean | undefined;
        /** Websites' local storage data. */
        localStorage?: boolean | undefined;
        /** Server-bound certificates. */
        serverBoundCertificates?: boolean | undefined;
        /** Stored passwords. */
        passwords?: boolean | undefined;
        /** Plugins' data. */
        pluginData?: boolean | undefined;
        /** Service Workers. */
        serviceWorkers?: boolean | undefined;
    }

    /**
     * An object whose properties specify which origin types ought to be cleared. If this object isn't specified, it defaults to clearing only "unprotected" origins. Please ensure that you _really_ want to remove application data before adding 'protectedWeb' or 'extensions'.
     */
    interface _RemovalOptionsOriginTypes {
        /** Normal websites. */
        unprotectedWeb?: boolean | undefined;
        /** Websites that have been installed as hosted applications (be careful!). */
        protectedWeb?: boolean | undefined;
        /** Extensions and packaged applications a user has installed (be _really_ careful!). */
        extension?: boolean | undefined;
    }

    interface _SettingsReturnResult {
        options: RemovalOptions;
        /**
         * All of the types will be present in the result, with values of `true` if they are both selected to be removed and permitted to be removed, otherwise `false`.
         */
        dataToRemove: DataTypeSet;
        /**
         * All of the types will be present in the result, with values of `true` if they are permitted to be removed (e.g., by enterprise policy) and `false` if not.
         */
        dataRemovalPermitted: DataTypeSet;
    }

    /* browsingData functions */
    /**
     * Reports which types of data are currently selected in the 'Clear browsing data' settings UI. Note: some of the data types included in this API are not available in the settings UI, and some UI settings control more than one data type listed here.
     */
    function settings(): Promise<_SettingsReturnResult>;

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
 * This API provides the ability detect the captive portal state of the users connection.
 *
 * Permissions: `captivePortal`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.captivePortal {
    /** The current captive portal state. */
    type _OnStateChangedDetailsState =
        | 'unknown'
        | 'not_captive'
        | 'unlocked_portal'
        | 'locked_portal';

    interface _OnStateChangedDetails {
        /** The current captive portal state. */
        state: _OnStateChangedDetailsState;
    }

    type _OnConnectivityAvailableStatus = 'captive' | 'clear';

    /* captivePortal properties */
    /** Return the canonical captive-portal detection URL. Read-only. */
    const canonicalURL: types.Setting;

    /* captivePortal functions */
    /**
     * Returns the current portal state, one of `unknown`, `not_captive`, `unlocked_portal`, `locked_portal`.
     */
    function getState(): Promise<_OnStateChangedDetailsState>;

    /** Returns the time difference between NOW and the last time a request was completed in milliseconds. */
    function getLastChecked(): Promise<number>;

    /* captivePortal events */
    /** Fired when the captive portal state changes. */
    const onStateChanged: WebExtEvent<(details: _OnStateChangedDetails) => void>;

    /**
     * This notification will be emitted when the captive portal service has determined that we can connect to the internet. The service will pass either `captive` if there is an unlocked captive portal present, or `clear` if no captive portal was detected.
     */
    const onConnectivityAvailable: WebExtEvent<(status: _OnConnectivityAvailableStatus) => void>;
}

/**
 * Offers the ability to write to the clipboard. Reading is not supported because the clipboard can already be read through the standard web platform APIs.
 *
 * Permissions: `clipboardWrite`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.clipboard {
    /** The type of imageData. */
    type _SetImageDataImageType = 'jpeg' | 'png';

    /* clipboard functions */
    /**
     * Copy an image to the clipboard. The image is re-encoded before it is written to the clipboard. If the image is invalid, the clipboard is not modified.
     * @param imageData The image data to be copied.
     * @param imageType The type of imageData.
     */
    function setImageData(imageData: ArrayBuffer, imageType: _SetImageDataImageType): Promise<void>;
}

/** Not allowed in: Content scripts, Devtools pages */
declare namespace browser.contentScripts {
    /* contentScripts types */
    /** Details of a content script registered programmatically */
    interface RegisteredContentScriptOptions {
        matches: _manifest.MatchPattern[];
        excludeMatches?: _manifest.MatchPattern[] | undefined;
        includeGlobs?: string[] | undefined;
        excludeGlobs?: string[] | undefined;
        /** The list of CSS files to inject */
        css?: extensionTypes.ExtensionFileOrCode[] | undefined;
        /** The list of JS files to inject */
        js?: extensionTypes.ExtensionFileOrCode[] | undefined;
        /**
         * If allFrames is `true`, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's `false` and is only injected into the top frame.
         */
        allFrames?: boolean | undefined;
        /**
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is `false`.
         */
        matchAboutBlank?: boolean | undefined;
        /** The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle". */
        runAt?: extensionTypes.RunAt | undefined;
    }

    /** An object that represents a content script registered programmatically */
    interface RegisteredContentScript {
        /** Unregister a content script registered programmatically */
        unregister(): Promise<any>;
    }

    /* contentScripts functions */
    /** Register a content script programmatically */
    function register(
        contentScriptOptions: RegisteredContentScriptOptions
    ): Promise<RegisteredContentScript>;
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

    /** Information to filter the contextual identities being retrieved. */
    interface _QueryDetails {
        /** Filters the contextual identity by name. */
        name?: string | undefined;
    }

    /** Details about the contextual identity being created. */
    interface _CreateDetails {
        /** The name of the contextual identity. */
        name: string;
        /** The color of the contextual identity. */
        color: string;
        /** The icon of the contextual identity. */
        icon: string;
    }

    /** Details about the contextual identity being created. */
    interface _UpdateDetails {
        /** The name of the contextual identity. */
        name?: string | undefined;
        /** The color of the contextual identity. */
        color?: string | undefined;
        /** The icon of the contextual identity. */
        icon?: string | undefined;
    }

    interface _OnUpdatedChangeInfo {
        /** Contextual identity that has been updated */
        contextualIdentity: ContextualIdentity;
    }

    interface _OnCreatedChangeInfo {
        /** Contextual identity that has been created */
        contextualIdentity: ContextualIdentity;
    }

    interface _OnRemovedChangeInfo {
        /** Contextual identity that has been removed */
        contextualIdentity: ContextualIdentity;
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
    function query(details: _QueryDetails): Promise<ContextualIdentity[]>;

    /**
     * Creates a contextual identity with the given data.
     * @param details Details about the contextual identity being created.
     */
    function create(details: _CreateDetails): Promise<ContextualIdentity>;

    /**
     * Updates a contextual identity with the given data.
     * @param cookieStoreId The ID of the contextual identity cookie store.
     * @param details Details about the contextual identity being created.
     */
    function update(cookieStoreId: string, details: _UpdateDetails): Promise<ContextualIdentity>;

    /**
     * Deletes a contetual identity by its cookie Store ID.
     * @param cookieStoreId The ID of the contextual identity cookie store.
     */
    function remove(cookieStoreId: string): Promise<ContextualIdentity>;

    /* contextualIdentities events */
    /** Fired when a container is updated. */
    const onUpdated: WebExtEvent<(changeInfo: _OnUpdatedChangeInfo) => void>;

    /** Fired when a new container is created. */
    const onCreated: WebExtEvent<(changeInfo: _OnCreatedChangeInfo) => void>;

    /** Fired when a container is removed. */
    const onRemoved: WebExtEvent<(changeInfo: _OnRemovedChangeInfo) => void>;
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
    /**
     * A cookie's 'SameSite' state (https://tools.ietf.org/html/draft-west-first-party-cookies). 'no_restriction' corresponds to a cookie set without a 'SameSite' attribute, 'lax' to 'SameSite=Lax', and 'strict' to 'SameSite=Strict'.
     */
    type SameSiteStatus = 'no_restriction' | 'lax' | 'strict';

    /**
     * The description of the storage partition of a cookie. This object may be omitted (null) if a cookie is not partitioned.
     */
    interface PartitionKey {
        /** The first-party URL of the cookie, if the cookie is in storage partitioned by the top-level site. */
        topLevelSite?: string | undefined;
    }

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
        /** The cookie's same-site status (i.e. whether the cookie is sent with cross-site requests). */
        sameSite: SameSiteStatus;
        /** True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date. */
        session: boolean;
        /**
         * The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session cookies.
         */
        expirationDate?: number | undefined;
        /** The ID of the cookie store containing this cookie, as provided in getAllCookieStores(). */
        storeId: string;
        /** The first-party domain of the cookie. */
        firstPartyDomain: string;
        /** The cookie's storage partition, if any. null if not partitioned. */
        partitionKey?: PartitionKey | undefined;
    }

    /**
     * Represents a cookie store in the browser. An incognito mode window, for instance, uses a separate cookie store from a non-incognito window.
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
     * The underlying reason behind the cookie's change. If a cookie was inserted, or removed via an explicit call to `cookies.remove`, "cause" will be "explicit". If a cookie was automatically removed due to expiry, "cause" will be "expired". If a cookie was removed due to being overwritten with an already-expired expiration date, "cause" will be set to "expired_overwrite". If a cookie was automatically removed due to garbage collection, "cause" will be "evicted". If a cookie was automatically removed due to a "set" call that overwrote it, "cause" will be "overwrite". Plan your response accordingly.
     */
    type OnChangedCause = 'evicted' | 'expired' | 'explicit' | 'expired_overwrite' | 'overwrite';

    /** Details to identify the cookie being retrieved. */
    interface _GetDetails {
        /**
         * The URL with which the cookie to retrieve is associated. This argument may be a full URL, in which case any data following the URL path (e.g. the query string) is simply ignored. If host permissions for this URL are not specified in the manifest file, the API call will fail.
         */
        url: string;
        /** The name of the cookie to retrieve. */
        name: string;
        /**
         * The ID of the cookie store in which to look for the cookie. By default, the current execution context's cookie store will be used.
         */
        storeId?: string | undefined;
        /**
         * The first-party domain which the cookie to retrieve is associated. This attribute is required if First-Party Isolation is enabled.
         */
        firstPartyDomain?: string | undefined;
        /**
         * The storage partition, if the cookie is part of partitioned storage. By default, only non-partitioned cookies are returned.
         */
        partitionKey?: PartitionKey | undefined;
    }

    /** Information to filter the cookies being retrieved. */
    interface _GetAllDetails {
        /** Restricts the retrieved cookies to those that would match the given URL. */
        url?: string | undefined;
        /** Filters the cookies by name. */
        name?: string | undefined;
        /** Restricts the retrieved cookies to those whose domains match or are subdomains of this one. */
        domain?: string | undefined;
        /** Restricts the retrieved cookies to those whose path exactly matches this string. */
        path?: string | undefined;
        /** Filters the cookies by their Secure property. */
        secure?: boolean | undefined;
        /** Filters out session vs. persistent cookies. */
        session?: boolean | undefined;
        /**
         * The cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be used.
         */
        storeId?: string | undefined;
        /**
         * Restricts the retrieved cookies to those whose first-party domains match this one. This attribute is required if First-Party Isolation is enabled. To not filter by a specific first-party domain, use `null` or `undefined`.
         */
        firstPartyDomain?: string | undefined;
        /**
         * Selects a specific storage partition to look up cookies. Defaults to null, in which case only non-partitioned cookies are retrieved. If an object iis passed, partitioned cookies are also included, and filtered based on the keys present in the given PartitionKey description. An empty object ({}) returns all cookies (partitioned + unpartitioned), a non-empty object (e.g. {topLevelSite: '...'}) only returns cookies whose partition match all given attributes.
         */
        partitionKey?: PartitionKey | undefined;
    }

    /** Details about the cookie being set. */
    interface _SetDetails {
        /**
         * The request-URI to associate with the setting of the cookie. This value can affect the default domain and path values of the created cookie. If host permissions for this URL are not specified in the manifest file, the API call will fail.
         */
        url: string;
        /** The name of the cookie. Empty by default if omitted. */
        name?: string | undefined;
        /** The value of the cookie. Empty by default if omitted. */
        value?: string | undefined;
        /** The domain of the cookie. If omitted, the cookie becomes a host-only cookie. */
        domain?: string | undefined;
        /** The path of the cookie. Defaults to the path portion of the url parameter. */
        path?: string | undefined;
        /** Whether the cookie should be marked as Secure. Defaults to false. */
        secure?: boolean | undefined;
        /** Whether the cookie should be marked as HttpOnly. Defaults to false. */
        httpOnly?: boolean | undefined;
        /** The cookie's same-site status. */
        sameSite?: SameSiteStatus | undefined;
        /**
         * The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie becomes a session cookie.
         */
        expirationDate?: number | undefined;
        /**
         * The ID of the cookie store in which to set the cookie. By default, the cookie is set in the current execution context's cookie store.
         */
        storeId?: string | undefined;
        /**
         * The first-party domain of the cookie. This attribute is required if First-Party Isolation is enabled.
         */
        firstPartyDomain?: string | undefined;
        /**
         * The storage partition, if the cookie is part of partitioned storage. By default, non-partitioned storage is used.
         */
        partitionKey?: PartitionKey | undefined;
    }

    /**
     * Contains details about the cookie that's been removed. If removal failed for any reason, this will be "null", and `runtime.lastError` will be set.
     */
    interface _RemoveReturnDetails {
        /** The URL associated with the cookie that's been removed. */
        url: string;
        /** The name of the cookie that's been removed. */
        name: string;
        /** The ID of the cookie store from which the cookie was removed. */
        storeId: string;
        /** The first-party domain associated with the cookie that's been removed. */
        firstPartyDomain: string;
        /** The storage partition, if the cookie is part of partitioned storage. null if not partitioned. */
        partitionKey?: PartitionKey | undefined;
    }

    /** Information to identify the cookie to remove. */
    interface _RemoveDetails {
        /**
         * The URL associated with the cookie. If host permissions for this URL are not specified in the manifest file, the API call will fail.
         */
        url: string;
        /** The name of the cookie to remove. */
        name: string;
        /**
         * The ID of the cookie store to look in for the cookie. If unspecified, the cookie is looked for by default in the current execution context's cookie store.
         */
        storeId?: string | undefined;
        /**
         * The first-party domain associated with the cookie. This attribute is required if First-Party Isolation is enabled.
         */
        firstPartyDomain?: string | undefined;
        /**
         * The storage partition, if the cookie is part of partitioned storage. By default, non-partitioned storage is used.
         */
        partitionKey?: PartitionKey | undefined;
    }

    interface _OnChangedChangeInfo {
        /** True if a cookie was removed. */
        removed: boolean;
        /** Information about the cookie that was set or removed. */
        cookie: Cookie;
        /** The underlying reason behind the cookie's change. */
        cause: OnChangedCause;
    }

    /* cookies functions */
    /**
     * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL, the one with the longest path will be returned. For cookies with the same path length, the cookie with the earliest creation time will be returned.
     * @param details Details to identify the cookie being retrieved.
     */
    function get(details: _GetDetails): Promise<Cookie | null>;

    /**
     * Retrieves all cookies from a single cookie store that match the given information. The cookies returned will be sorted, with those with the longest path first. If multiple cookies have the same path length, those with the earliest creation time will be first.
     * @param details Information to filter the cookies being retrieved.
     */
    function getAll(details: _GetAllDetails): Promise<Cookie[]>;

    /**
     * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
     * @param details Details about the cookie being set.
     */
    function set(details: _SetDetails): Promise<Cookie>;

    /**
     * Deletes a cookie by name.
     * @param details Information to identify the cookie to remove.
     */
    function remove(details: _RemoveDetails): Promise<_RemoveReturnDetails | null>;

    /** Lists all existing cookie stores. */
    function getAllCookieStores(): Promise<CookieStore[]>;

    /* cookies events */
    /**
     * Fired when a cookie is set or removed. As a special case, note that updating a cookie's properties is implemented as a two step process: the cookie to be updated is first removed entirely, generating a notification with "cause" of "overwrite" . Afterwards, a new cookie is written with the updated values, generating a second notification with "cause" "explicit".
     */
    const onChanged: WebExtEvent<(changeInfo: _OnChangedChangeInfo) => void>;
}

/**
 * Asynchronous DNS API
 *
 * Permissions: `dns`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.dns {
    /* dns types */
    /** An object encapsulating a DNS Record. */
    interface DNSRecord {
        /**
         * The canonical hostname for this record. this value is empty if the record was not fetched with the 'canonical_name' flag.
         */
        canonicalName?: string | undefined;
        /** Record retreived with TRR. */
        isTRR: string;
        addresses: string[];
    }

    type ResolveFlags = _ResolveFlags[];

    type _ResolveFlags =
        | 'allow_name_collisions'
        | 'bypass_cache'
        | 'canonical_name'
        | 'disable_ipv4'
        | 'disable_ipv6'
        | 'disable_trr'
        | 'offline'
        | 'priority_low'
        | 'priority_medium'
        | 'speculate';

    /* dns functions */
    /** Resolves a hostname to a DNS record. */
    function resolve(hostname: string, flags?: ResolveFlags): Promise<DNSRecord>;
}

/**
 * Permissions: `downloads`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.downloads {
    /* downloads types */
    type FilenameConflictAction = 'uniquify' | 'overwrite' | 'prompt';

    type InterruptReason =
        | 'FILE_FAILED'
        | 'FILE_ACCESS_DENIED'
        | 'FILE_NO_SPACE'
        | 'FILE_NAME_TOO_LONG'
        | 'FILE_TOO_LARGE'
        | 'FILE_VIRUS_INFECTED'
        | 'FILE_TRANSIENT_ERROR'
        | 'FILE_BLOCKED'
        | 'FILE_SECURITY_CHECK_FAILED'
        | 'FILE_TOO_SHORT'
        | 'NETWORK_FAILED'
        | 'NETWORK_TIMEOUT'
        | 'NETWORK_DISCONNECTED'
        | 'NETWORK_SERVER_DOWN'
        | 'NETWORK_INVALID_REQUEST'
        | 'SERVER_FAILED'
        | 'SERVER_NO_RANGE'
        | 'SERVER_BAD_CONTENT'
        | 'SERVER_UNAUTHORIZED'
        | 'SERVER_CERT_PROBLEM'
        | 'SERVER_FORBIDDEN'
        | 'USER_CANCELED'
        | 'USER_SHUTDOWN'
        | 'CRASH';

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
    type DangerType =
        | 'file'
        | 'url'
        | 'content'
        | 'uncommon'
        | 'host'
        | 'unwanted'
        | 'safe'
        | 'accepted';

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
    type State = 'in_progress' | 'interrupted' | 'complete';

    interface DownloadItem {
        /** An identifier that is persistent across browser sessions. */
        id: number;
        /** Absolute URL. */
        url: string;
        referrer?: string | undefined;
        /** Absolute local path. */
        filename: string;
        /** False if this download is recorded in the history, true if it is not recorded. */
        incognito: boolean;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId?: string | undefined;
        /** Indication of whether this download is thought to be safe or known to be suspicious. */
        danger: DangerType;
        /** The file's MIME type. */
        mime?: string | undefined;
        /** Number of milliseconds between the unix epoch and when this download began. */
        startTime: string;
        /** Number of milliseconds between the unix epoch and when this download ended. */
        endTime?: string | undefined;
        estimatedEndTime?: string | undefined;
        /** Indicates whether the download is progressing, interrupted, or complete. */
        state: State;
        /** True if the download has stopped reading data from the host, but kept the connection open. */
        paused: boolean;
        canResume: boolean;
        /** Number indicating why a download was interrupted. */
        error?: InterruptReason | undefined;
        /** Number of bytes received so far from the host, without considering file compression. */
        bytesReceived: number;
        /** Number of bytes in the whole file, without considering file compression, or -1 if unknown. */
        totalBytes: number;
        /** Number of bytes in the whole file post-decompression, or -1 if unknown. */
        fileSize: number;
        exists: boolean;
        byExtensionId?: string | undefined;
        byExtensionName?: string | undefined;
    }

    interface StringDelta {
        current?: string | undefined;
        previous?: string | undefined;
    }

    interface DoubleDelta {
        current?: number | undefined;
        previous?: number | undefined;
    }

    interface BooleanDelta {
        current?: boolean | undefined;
        previous?: boolean | undefined;
    }

    /**
     * A time specified as a Date object, a number or string representing milliseconds since the epoch, or an ISO 8601 string
     */
    type DownloadTime = string | extensionTypes.Date;

    /**
     * Parameters that combine to specify a predicate that can be used to select a set of downloads. Used for example in search() and erase()
     */
    interface DownloadQuery {
        /**
         * This array of search terms limits results to DownloadItems whose `filename` or `url` contain all of the search terms that do not begin with a dash '-' and none of the search terms that do begin with a dash.
         */
        query?: string[] | undefined;
        /** Limits results to downloads that started before the given ms since the epoch. */
        startedBefore?: DownloadTime | undefined;
        /** Limits results to downloads that started after the given ms since the epoch. */
        startedAfter?: DownloadTime | undefined;
        /** Limits results to downloads that ended before the given ms since the epoch. */
        endedBefore?: DownloadTime | undefined;
        /** Limits results to downloads that ended after the given ms since the epoch. */
        endedAfter?: DownloadTime | undefined;
        /** Limits results to downloads whose totalBytes is greater than the given integer. */
        totalBytesGreater?: number | undefined;
        /** Limits results to downloads whose totalBytes is less than the given integer. */
        totalBytesLess?: number | undefined;
        /** Limits results to DownloadItems whose `filename` matches the given regular expression. */
        filenameRegex?: string | undefined;
        /** Limits results to DownloadItems whose `url` matches the given regular expression. */
        urlRegex?: string | undefined;
        /**
         * Setting this integer limits the number of results. Otherwise, all matching DownloadItems will be returned.
         */
        limit?: number | undefined;
        /**
         * Setting elements of this array to DownloadItem properties in order to sort the search results. For example, setting `orderBy='startTime'` sorts the DownloadItems by their start time in ascending order. To specify descending order, prefix `orderBy` with a hyphen: '-startTime'.
         */
        orderBy?: string[] | undefined;
        id?: number | undefined;
        /** Absolute URL. */
        url?: string | undefined;
        /** Absolute local path. */
        filename?: string | undefined;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId?: string | undefined;
        /** Indication of whether this download is thought to be safe or known to be suspicious. */
        danger?: DangerType | undefined;
        /** The file's MIME type. */
        mime?: string | undefined;
        startTime?: string | undefined;
        endTime?: string | undefined;
        /** Indicates whether the download is progressing, interrupted, or complete. */
        state?: State | undefined;
        /** True if the download has stopped reading data from the host, but kept the connection open. */
        paused?: boolean | undefined;
        /** Why a download was interrupted. */
        error?: InterruptReason | undefined;
        /** Number of bytes received so far from the host, without considering file compression. */
        bytesReceived?: number | undefined;
        /** Number of bytes in the whole file, without considering file compression, or -1 if unknown. */
        totalBytes?: number | undefined;
        /** Number of bytes in the whole file post-decompression, or -1 if unknown. */
        fileSize?: number | undefined;
        exists?: boolean | undefined;
    }

    /** The HTTP method to use if the URL uses the HTTP[S] protocol. */
    type _DownloadOptionsMethod = 'GET' | 'POST';

    interface _DownloadOptionsHeaders {
        /** Name of the HTTP header. */
        name: string;
        /** Value of the HTTP header. */
        value: string;
    }

    /** What to download and how. */
    interface _DownloadOptions {
        /** The URL to download. */
        url: string;
        /** A file path relative to the Downloads directory to contain the downloaded file. */
        filename?: string | undefined;
        /** Whether to associate the download with a private browsing session. */
        incognito?: boolean | undefined;
        /** The cookie store ID of the contextual identity; requires "cookies" permission. */
        cookieStoreId?: string | undefined;
        conflictAction?: FilenameConflictAction | undefined;
        /**
         * Use a file-chooser to allow the user to select a filename. If the option is not specified, the file chooser will be shown only if the Firefox "Always ask you where to save files" option is enabled (i.e. the pref `browser.download.useDownloadDir` is set to `false`).
         */
        saveAs?: boolean | undefined;
        /** The HTTP method to use if the URL uses the HTTP[S] protocol. */
        method?: _DownloadOptionsMethod | undefined;
        /**
         * Extra HTTP headers to send with the request if the URL uses the HTTP[s] protocol. Each header is represented as a dictionary containing the keys `name` and either `value` or `binaryValue`, restricted to those allowed by XMLHttpRequest.
         */
        headers?: _DownloadOptionsHeaders[] | undefined;
        /** Post body. */
        body?: string | undefined;
        /**
         * When this flag is set to `true`, then the browser will allow downloads to proceed after encountering HTTP errors such as `404 Not Found`.
         */
        allowHttpErrors?: boolean | undefined;
    }

    interface _GetFileIconOptions {
        /**
         * The size of the icon. The returned icon will be square with dimensions size * size pixels. The default size for the icon is 32x32 pixels.
         */
        size?: number | undefined;
    }

    interface _OnChangedDownloadDelta {
        /** The `id` of the DownloadItem that changed. */
        id: number;
        /** Describes a change in a DownloadItem's `url`. */
        url?: StringDelta | undefined;
        /** Describes a change in a DownloadItem's `filename`. */
        filename?: StringDelta | undefined;
        /** Describes a change in a DownloadItem's `danger`. */
        danger?: StringDelta | undefined;
        /** Describes a change in a DownloadItem's `mime`. */
        mime?: StringDelta | undefined;
        /** Describes a change in a DownloadItem's `startTime`. */
        startTime?: StringDelta | undefined;
        /** Describes a change in a DownloadItem's `endTime`. */
        endTime?: StringDelta | undefined;
        /** Describes a change in a DownloadItem's `state`. */
        state?: StringDelta | undefined;
        canResume?: BooleanDelta | undefined;
        /** Describes a change in a DownloadItem's `paused`. */
        paused?: BooleanDelta | undefined;
        /** Describes a change in a DownloadItem's `error`. */
        error?: StringDelta | undefined;
        /** Describes a change in a DownloadItem's `totalBytes`. */
        totalBytes?: DoubleDelta | undefined;
        /** Describes a change in a DownloadItem's `fileSize`. */
        fileSize?: DoubleDelta | undefined;
        exists?: BooleanDelta | undefined;
    }

    /* downloads functions */
    /**
     * Download a URL. If the URL uses the HTTP[S] protocol, then the request will include all cookies currently set for its hostname. If both `filename` and `saveAs` are specified, then the Save As dialog will be displayed, pre-populated with the specified `filename`. If the download started successfully, `callback` will be called with the new DownloadItem's `downloadId`. If there was an error starting the download, then `callback` will be called with `downloadId=undefined` and browser.extension.lastError will contain a descriptive string. The error strings are not guaranteed to remain backwards compatible between releases. You must not parse it.
     * @param options What to download and how.
     */
    function download(options: _DownloadOptions): Promise<number>;

    /**
     * Find DownloadItems. Set `query` to the empty object to get all DownloadItems. To get a specific DownloadItem, set only the `id` field.
     */
    function search(query: DownloadQuery): Promise<DownloadItem[]>;

    /**
     * Pause the download. If the request was successful the download is in a paused state. Otherwise browser.extension.lastError contains an error message. The request will fail if the download is not active.
     * @param downloadId The id of the download to pause.
     */
    function pause(downloadId: number): Promise<void>;

    /**
     * Resume a paused download. If the request was successful the download is in progress and unpaused. Otherwise browser.extension.lastError contains an error message. The request will fail if the download is not active.
     * @param downloadId The id of the download to resume.
     */
    function resume(downloadId: number): Promise<void>;

    /**
     * Cancel a download. When `callback` is run, the download is cancelled, completed, interrupted or doesn't exist anymore.
     * @param downloadId The id of the download to cancel.
     */
    function cancel(downloadId: number): Promise<void>;

    /**
     * Retrieve an icon for the specified download. For new downloads, file icons are available after the onCreated event has been received. The image returned by this function while a download is in progress may be different from the image returned after the download is complete. Icon retrieval is done by querying the underlying operating system or toolkit depending on the platform. The icon that is returned will therefore depend on a number of factors including state of the download, platform, registered file types and visual theme. If a file icon cannot be determined, browser.extension.lastError will contain an error message.
     * @param downloadId The identifier for the download.
     */
    function getFileIcon(downloadId: number, options?: _GetFileIconOptions): Promise<string>;

    /** Open the downloaded file. */
    function open(downloadId: number): Promise<void>;

    /** Show the downloaded file in its folder in a file manager. */
    function show(downloadId: number): Promise<boolean>;

    function showDefaultFolder(): void;

    /** Erase matching DownloadItems from history */
    function erase(query: DownloadQuery): Promise<number[]>;

    function removeFile(downloadId: number): Promise<void>;

    /**
     * Prompt the user to either accept or cancel a dangerous download. `acceptDanger()` does not automatically accept dangerous downloads.
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
     * When any of a DownloadItem's properties except `bytesReceived` changes, this event fires with the `downloadId` and an object containing the properties that changed.
     */
    const onChanged: WebExtEvent<(downloadDelta: _OnChangedDownloadDelta) => void>;
}

/**
 * The `browser.events` namespace contains common types used by APIs dispatching events to notify you when something interesting happens.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.events {
    /* events types */
    /** Description of a declarative rule for handling events. */
    interface Rule {
        /** Optional identifier that allows referencing this rule. */
        id?: string | undefined;
        /** Tags can be used to annotate rules and perform operations on sets of rules. */
        tags?: string[] | undefined;
        /** List of conditions that can trigger the actions. */
        conditions: any[];
        /** List of actions that are triggered if one of the condtions is fulfilled. */
        actions: any[];
        /** Optional priority of this rule. Defaults to 100. */
        priority?: number | undefined;
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
         * @param webViewInstanceId If provided, this is an integer that uniquely identfies the <webview> associated with this function call.
         * @param rules Rules to be registered. These do not replace previously registered rules.
         * @deprecated Unsupported on Firefox at this time.
         */
        addRules?(eventName: string, webViewInstanceId: number, rules: Rule[]): Promise<Rule[]>;
        /**
         * Returns currently registered rules.
         * @param eventName Name of the event this function affects.
         * @param webViewInstanceId If provided, this is an integer that uniquely identfies the <webview> associated with this function call.
         * @param [ruleIdentifiers] If an array is passed, only rules with identifiers contained in this array are returned.
         * @deprecated Unsupported on Firefox at this time.
         */
        getRules?(
            eventName: string,
            webViewInstanceId: number,
            ruleIdentifiers?: string[]
        ): Promise<Rule[]>;
        /**
         * Unregisters currently registered rules.
         * @param eventName Name of the event this function affects.
         * @param webViewInstanceId If provided, this is an integer that uniquely identfies the <webview> associated with this function call.
         * @param [ruleIdentifiers] If an array is passed, only rules with identifiers contained in this array are unregistered.
         * @deprecated Unsupported on Firefox at this time.
         */
        removeRules?(
            eventName: string,
            webViewInstanceId: number,
            ruleIdentifiers?: string[]
        ): Promise<void>;
    }

    /** Filters URLs for various criteria. See event filtering. All criteria are case sensitive. */
    interface UrlFilter {
        /**
         * Matches if the host name of the URL contains a specified string. To test whether a host name component has a prefix 'foo', use hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com', because an implicit dot is added at the beginning of the host name. Similarly, hostContains can be used to match against component suffix ('foo.') and to exactly match against components ('.foo.'). Suffix- and exact-matching for the last components need to be done separately using hostSuffix, because no implicit dot is added at the end of the host name.
         */
        hostContains?: string | undefined;
        /** Matches if the host name of the URL is equal to a specified string. */
        hostEquals?: string | undefined;
        /** Matches if the host name of the URL starts with a specified string. */
        hostPrefix?: string | undefined;
        /** Matches if the host name of the URL ends with a specified string. */
        hostSuffix?: string | undefined;
        /** Matches if the path segment of the URL contains a specified string. */
        pathContains?: string | undefined;
        /** Matches if the path segment of the URL is equal to a specified string. */
        pathEquals?: string | undefined;
        /** Matches if the path segment of the URL starts with a specified string. */
        pathPrefix?: string | undefined;
        /** Matches if the path segment of the URL ends with a specified string. */
        pathSuffix?: string | undefined;
        /** Matches if the query segment of the URL contains a specified string. */
        queryContains?: string | undefined;
        /** Matches if the query segment of the URL is equal to a specified string. */
        queryEquals?: string | undefined;
        /** Matches if the query segment of the URL starts with a specified string. */
        queryPrefix?: string | undefined;
        /** Matches if the query segment of the URL ends with a specified string. */
        querySuffix?: string | undefined;
        /**
         * Matches if the URL (without fragment identifier) contains a specified string. Port numbers are stripped from the URL if they match the default port number.
         */
        urlContains?: string | undefined;
        /**
         * Matches if the URL (without fragment identifier) is equal to a specified string. Port numbers are stripped from the URL if they match the default port number.
         */
        urlEquals?: string | undefined;
        /**
         * Matches if the URL (without fragment identifier) matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
         */
        urlMatches?: string | undefined;
        /**
         * Matches if the URL without query segment and fragment identifier matches a specified regular expression. Port numbers are stripped from the URL if they match the default port number. The regular expressions use the [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
         */
        originAndPathMatches?: string | undefined;
        /**
         * Matches if the URL (without fragment identifier) starts with a specified string. Port numbers are stripped from the URL if they match the default port number.
         */
        urlPrefix?: string | undefined;
        /**
         * Matches if the URL (without fragment identifier) ends with a specified string. Port numbers are stripped from the URL if they match the default port number.
         */
        urlSuffix?: string | undefined;
        /** Matches if the scheme of the URL is equal to any of the schemes specified in the array. */
        schemes?: string[] | undefined;
        /**
         * Matches if the port of the URL is contained in any of the specified port lists. For example `[80, 443, [1000, 1200]]` matches all requests on port 80, 443 and in the range 1000-1200.
         */
        ports?: Array<number | [number, number]> | undefined;
    }
}

/** Not allowed in: Content scripts, Devtools pages */
declare namespace browser.experiments {
    /* experiments types */
    interface ExperimentAPI {
        schema: ExperimentURL;
        parent?: _ExperimentAPIParent | undefined;
        child?: _ExperimentAPIChild | undefined;
    }

    type ExperimentURL = string;

    type APIPaths = APIPath[];

    type APIPath = string[];

    type APIEvents = APIEvent[];

    type APIEvent = 'startup';

    type APIParentScope = 'addon_parent' | 'content_parent' | 'devtools_parent';

    type APIChildScope = 'addon_child' | 'content_child' | 'devtools_child';

    interface _ExperimentAPIParent {
        events?: APIEvents | undefined;
        paths?: APIPaths | undefined;
        script: ExperimentURL;
        scopes?: APIParentScope[] | undefined;
    }

    interface _ExperimentAPIChild {
        paths: APIPaths;
        script: ExperimentURL;
        scopes: APIChildScope[];
    }
}

/**
 * The `browser.extension` API has utilities that can be used by any extension page. It includes support for exchanging messages between an extension and its content scripts or between extensions, as described in detail in Message Passing.
 */
declare namespace browser.extension {
    /* extension types */
    /** The type of extension view. */
    type ViewType = 'tab' | 'popup' | 'sidebar';

    /**
     * Set for the lifetime of a callback if an ansychronous extension api has resulted in an error. If no error has occured lastError will be `undefined`.
     * @deprecated Please use `runtime.lastError`.
     * Not supported on manifest versions above 2.
     */
    interface _LastError {
        /** Description of the error that has taken place. */
        message: string;
    }

    interface _GetViewsFetchProperties {
        /**
         * The type of view to get. If omitted, returns all views (including background pages and tabs). Valid values: 'tab', 'popup', 'sidebar'.
         */
        type?: ViewType | undefined;
        /** The window to restrict the search to. If omitted, returns all views. */
        windowId?: number | undefined;
        /** Find a view according to a tab id. If this field is omitted, returns all views. */
        tabId?: number | undefined;
    }

    /* extension properties */
    /**
     * Set for the lifetime of a callback if an ansychronous extension api has resulted in an error. If no error has occured lastError will be `undefined`.
     * @deprecated Please use `runtime.lastError`.
     * Not supported on manifest versions above 2.
     */
    const lastError: _LastError | undefined;

    /**
     * True for content scripts running inside incognito tabs, and for extension pages running inside an incognito process. The latter only applies to extensions with 'split' incognito_behavior.
     */
    const inIncognitoContext: boolean | undefined;

    /* extension functions */
    /**
     * Converts a relative path within an extension install directory to a fully-qualified URL.
     * @param path A path to a resource within an extension expressed relative to its install directory.
     * @deprecated Please use `runtime.getURL`.
     * Not supported on manifest versions above 2.
     * @returns The fully-qualified URL to the resource.
     */
    function getURL(path: string): string;

    /**
     * Returns an array of the JavaScript 'window' objects for each of the pages running inside the current extension.
     * @returns Array of global objects
     */
    function getViews(fetchProperties?: _GetViewsFetchProperties): Window[];

    /**
     * Returns the JavaScript 'window' object for the background page running inside the current extension. Returns null if the extension has no background page.
     * Not supported on manifest versions above 2.
     */
    function getBackgroundPage(): Window | void;

    /**
     * Retrieves the state of the extension's access to Incognito-mode (as determined by the user-controlled 'Allowed in Incognito' checkbox.
     */
    function isAllowedIncognitoAccess(): Promise<boolean>;

    /**
     * Retrieves the state of the extension's access to the 'file://' scheme (as determined by the user-controlled 'Allow access to File URLs' checkbox.
     */
    function isAllowedFileSchemeAccess(): Promise<boolean>;

    /**
     * Sets the value of the ap CGI parameter used in the extension's update URL. This value is ignored for extensions that are hosted in the browser vendor's store.
     * @deprecated Unsupported on Firefox at this time.
     */
    function setUpdateUrlData(data: string): void;

    /* extension events */
    /**
     * Fired when a request is sent from either an extension process or a content script.
     * @param request The request sent by the calling script.
     * @param sendResponse Function to call (at most once) when you have a response. The argument should be any JSON-ifiable object, or undefined if there is no response. If you have more than one `onRequest` listener in the same document, then only one may send a response.
     * @deprecated Please use `runtime.onMessage`.
     */
    const onRequest:
        | WebExtEvent<
              (
                  request: any,
                  sender: runtime.MessageSender,
                  sendResponse: (response?: any) => void
              ) => void
          >
        | undefined;

    /**
     * Fired when a request is sent from another extension.
     * @param request The request sent by the calling script.
     * @param sendResponse Function to call when you have a response. The argument should be any JSON-ifiable object, or undefined if there is no response.
     * @deprecated Please use `runtime.onMessageExternal`.
     */
    const onRequestExternal:
        | WebExtEvent<
              (
                  request: any,
                  sender: runtime.MessageSender,
                  sendResponse: (response?: any) => void
              ) => void
          >
        | undefined;
}

/**
 * The `browser.extensionTypes` API contains type declarations for WebExtensions.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.extensionTypes {
    /* extensionTypes types */
    /** The format of an image. */
    type ImageFormat = 'jpeg' | 'png';

    /** Details about the format, quality, area and scale of the capture. */
    interface ImageDetails {
        /** The format of the resulting image. Default is `"jpeg"`. */
        format?: ImageFormat | undefined;
        /**
         * When format is `"jpeg"`, controls the quality of the resulting image. This value is ignored for PNG images. As quality is decreased, the resulting image will have more visual artifacts, and the number of bytes needed to store it will decrease.
         */
        quality?: number | undefined;
        /**
         * The area of the document to capture, in CSS pixels, relative to the page. If omitted, capture the visible viewport.
         */
        rect?: _ImageDetailsRect | undefined;
        /** The scale of the resulting image. Defaults to `devicePixelRatio`. */
        scale?: number | undefined;
        /**
         * If true, temporarily resets the scroll position of the document to 0\. Only takes effect if rect is also specified.
         */
        resetScrollPosition?: boolean | undefined;
    }

    /** The soonest that the JavaScript or CSS will be injected into the tab. */
    type RunAt = 'document_start' | 'document_end' | 'document_idle';

    /** The origin of the CSS to inject, this affects the cascading order (priority) of the stylesheet. */
    type CSSOrigin = 'user' | 'author';

    /**
     * Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
     */
    interface InjectDetails {
        /**
         * JavaScript or CSS code to inject.
         *
         * **Warning:**
         * Be careful using the `code` parameter. Incorrect use of it may open your extension to [cross site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.
         */
        code?: string | undefined;
        /** JavaScript or CSS file to inject. */
        file?: string | undefined;
        /**
         * If allFrames is `true`, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's `false` and is only injected into the top frame.
         */
        allFrames?: boolean | undefined;
        /**
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is `false`.
         */
        matchAboutBlank?: boolean | undefined;
        /** The ID of the frame to inject the script into. This may not be used in combination with `allFrames`. */
        frameId?: number | undefined;
        /** The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle". */
        runAt?: RunAt | undefined;
        /** The css origin of the stylesheet to inject. Defaults to "author". */
        cssOrigin?: CSSOrigin | undefined;
    }

    type Date = string | number | globalThis.Date;

    type ExtensionFileOrCode =
        | {
              file: _manifest.ExtensionURL;
          }
        | {
              code: string;
          };

    /** A plain JSON value */
    type PlainJSONValue = null | string | number | boolean | _PlainJSONArray | _PlainJSONObject;

    /**
     * The area of the document to capture, in CSS pixels, relative to the page. If omitted, capture the visible viewport.
     */
    interface _ImageDetailsRect {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    interface _PlainJSONArray extends Array<PlainJSONValue> {}

    interface _PlainJSONObject {
        [key: string]: PlainJSONValue;
    }
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
    type ProfilerFeature =
        | 'java'
        | 'js'
        | 'leaf'
        | 'mainthreadio'
        | 'responsiveness'
        | 'screenshots'
        | 'seqstyle'
        | 'stackwalk'
        | 'threads'
        | 'jstracer'
        | 'jsallocations'
        | 'nostacksampling'
        | 'nativeallocations'
        | 'preferencereads'
        | 'ipcmessages'
        | 'fileio'
        | 'fileioall'
        | 'noiostacks'
        | 'audiocallbacktracing'
        | 'cpu'
        | 'notimerresolutionchange';

    type Supports = 'windowLength';

    interface _StartSettings {
        /**
         * The maximum size in bytes of the buffer used to store profiling data. A larger value allows capturing a profile that covers a greater amount of time.
         */
        bufferSize: number;
        /**
         * The length of the window of time that's kept in the buffer. Any collected samples are discarded as soon as they are older than the number of seconds specified in this setting. Zero means no duration restriction.
         */
        windowLength?: number | undefined;
        /**
         * Interval in milliseconds between samples of profiling data. A smaller value will increase the detail of the profiles captured.
         */
        interval: number;
        /** A list of active features for the profiler. */
        features: ProfilerFeature[];
        /** A list of thread names for which to capture profiles. */
        threads?: string[] | undefined;
    }

    /* geckoProfiler functions */
    /** Starts the profiler with the specified settings. */
    function start(settings: _StartSettings): Promise<any>;

    /** Stops the profiler and discards any captured profile data. */
    function stop(): Promise<any>;

    /** Pauses the profiler, keeping any profile data that is already written. */
    function pause(): Promise<any>;

    /** Resumes the profiler with the settings that were initially used to start it. */
    function resume(): Promise<any>;

    /**
     * Gathers the profile data from the current profiling session, and writes it to disk. The returned promise resolves to a path that locates the created file.
     * @param fileName The name of the file inside the profile/profiler directory
     */
    function dumpProfileToFile(fileName: string): Promise<any>;

    /** Gathers the profile data from the current profiling session. */
    function getProfile(): Promise<any>;

    /**
     * Gathers the profile data from the current profiling session. The returned promise resolves to an array buffer that contains a JSON string.
     */
    function getProfileAsArrayBuffer(): Promise<any>;

    /**
     * Gathers the profile data from the current profiling session. The returned promise resolves to an array buffer that contains a gzipped JSON string.
     */
    function getProfileAsGzippedArrayBuffer(): Promise<any>;

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
 * Use the `browser.i18n` infrastructure to implement internationalization across your whole app or extension.
 */
declare namespace browser.i18n {
    /* i18n types */
    /**
     * An ISO language code such as `en` or `fr`. For a complete list of languages supported by this method, see [kLanguageInfoTable](http://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc). For an unknown language, `und` will be returned, which means that [percentage] of the text is unknown to CLD
     */
    type LanguageCode = string;

    /** DetectedLanguage object that holds detected ISO language code and its percentage in the input string */
    interface _DetectLanguageReturnResultLanguages {
        language: LanguageCode;
        /** The percentage of the detected language */
        percentage: number;
    }

    /**
     * LanguageDetectionResult object that holds detected langugae reliability and array of DetectedLanguage
     */
    interface _DetectLanguageReturnResult {
        /** CLD detected language reliability */
        isReliable: boolean;
        /** array of detectedLanguage */
        languages: _DetectLanguageReturnResultLanguages[];
    }

    /* i18n functions */
    /**
     * Gets the accept-languages of the browser. This is different from the locale used by the browser; to get the locale, use `i18n.getUILanguage`.
     */
    function getAcceptLanguages(): Promise<LanguageCode[]>;

    /**
     * Gets the localized string for the specified message. If the message is missing, this method returns an empty string (''). If the format of the `getMessage()` call is wrong — for example, _messageName_ is not a string or the _substitutions_ array has more than 9 elements — this method returns `undefined`.
     * @param messageName The name of the message, as specified in the `messages.json` file.
     * @param [substitutions] Substitution strings, if the message requires any.
     * @returns Message localized for current locale.
     */
    function getMessage(messageName: string, substitutions?: any): string;

    /**
     * Gets the browser UI language of the browser. This is different from `i18n.getAcceptLanguages` which returns the preferred user languages.
     * @returns The browser UI language code such as en-US or fr-FR.
     */
    function getUILanguage(): string;

    /**
     * Detects the language of the provided text using CLD.
     * @param text User input string to be translated.
     */
    function detectLanguage(text: string): Promise<_DetectLanguageReturnResult>;
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

    interface _GetAuthTokenDetails {
        interactive?: boolean | undefined;
        account?: AccountInfo | undefined;
        scopes?: string[] | undefined;
    }

    interface _GetProfileUserInfoReturnUserinfo {
        email: string;
        id: string;
    }

    interface _RemoveCachedAuthTokenReturnUserinfo {
        email: string;
        id: string;
    }

    interface _RemoveCachedAuthTokenDetails {
        token: string;
    }

    interface _LaunchWebAuthFlowDetails {
        url: _manifest.HttpURL;
        interactive?: boolean | undefined;
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
    function getAuthToken(details?: _GetAuthTokenDetails): Promise<string>;

    /**
     * Retrieves email address and obfuscated gaia id of the user signed into a profile.
     * @deprecated Unsupported on Firefox at this time.
     */
    function getProfileUserInfo(): Promise<_GetProfileUserInfoReturnUserinfo>;

    /**
     * Removes an OAuth2 access token from the Identity API's token cache.
     * @deprecated Unsupported on Firefox at this time.
     */
    function removeCachedAuthToken(
        details: _RemoveCachedAuthTokenDetails
    ): Promise<_RemoveCachedAuthTokenReturnUserinfo>;

    /** Starts an auth flow at the specified URL. */
    function launchWebAuthFlow(details: _LaunchWebAuthFlowDetails): Promise<string>;

    /**
     * Generates a redirect URL to be used in |launchWebAuthFlow|.
     * @param [path] The path appended to the end of the generated URL.
     */
    function getRedirectURL(path?: string): string;

    /* identity events */
    /**
     * Fired when signin state changes for an account on the user's profile.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onSignInChanged:
        | WebExtEvent<(account: AccountInfo, signedIn: boolean) => void>
        | undefined;
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
    type IdleState = 'active' | 'idle';

    /* idle functions */
    /**
     * Returns "idle" if the user has not generated any input for a specified number of seconds, or "active" otherwise.
     * @param detectionIntervalInSeconds The system is considered idle if detectionIntervalInSeconds seconds have elapsed since the last user input detected.
     */
    function queryState(detectionIntervalInSeconds: number): Promise<IdleState>;

    /**
     * Sets the interval, in seconds, used to determine when the system is in an idle state for onStateChanged events. The default interval is 60 seconds.
     * @param intervalInSeconds Threshold, in seconds, used to determine when the system is in an idle state.
     */
    function setDetectionInterval(intervalInSeconds: number): void;

    /* idle events */
    /**
     * Fired when the system changes to an active or idle state. The event fires with "idle" if the the user has not generated any input for a specified number of seconds, and "active" when the user generates input on an idle system.
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
         * A number representing the width and height of the icon. Likely values include (but are not limited to) 128, 48, 24, and 16.
         */
        size: number;
        /**
         * The URL for this icon image. To display a grayscale version of the icon (to indicate that an extension is disabled, for example), append `?grayscale=true` to the URL.
         */
        url: string;
    }

    /** A reason the item is disabled. */
    type ExtensionDisabledReason = 'unknown' | 'permissions_increase';

    /** The type of this extension, 'extension' or 'theme'. */
    type ExtensionType = 'extension' | 'theme';

    /**
     * How the extension was installed. One of
     * `development`: The extension was loaded unpacked in developer mode,
     * `normal`: The extension was installed normally via an .xpi file,
     * `sideload`: The extension was installed by other software on the machine,
     * `other`: The extension was installed by other means.
     */
    type ExtensionInstallType = 'development' | 'normal' | 'sideload' | 'other';

    /** Information about an installed extension. */
    interface ExtensionInfo {
        /** The extension's unique identifier. */
        id: string;
        /** The name of this extension. */
        name: string;
        /** A short version of the name of this extension. */
        shortName?: string | undefined;
        /** The description of this extension. */
        description: string;
        /** The version of this extension. */
        version: string;
        /** The version name of this extension if the manifest specified one. */
        versionName?: string | undefined;
        /** Whether this extension can be disabled or uninstalled by the user. */
        mayDisable: boolean;
        /** Whether it is currently enabled or disabled. */
        enabled: boolean;
        /** A reason the item is disabled. */
        disabledReason?: ExtensionDisabledReason | undefined;
        /** The type of this extension, 'extension' or 'theme'. */
        type: ExtensionType;
        /** The URL of the homepage of this extension. */
        homepageUrl?: string | undefined;
        /** The update URL of this extension. */
        updateUrl?: string | undefined;
        /** The url for the item's options page, if it has one. */
        optionsUrl: string;
        /**
         * A list of icon information. Note that this just reflects what was declared in the manifest, and the actual image at that url may be larger or smaller than what was declared, so you might consider using explicit width and height attributes on img tags referencing these images. See the manifest documentation on icons for more details.
         */
        icons?: IconInfo[] | undefined;
        /** Returns a list of API based permissions. */
        permissions?: string[] | undefined;
        /** Returns a list of host based permissions. */
        hostPermissions?: string[] | undefined;
        /** How the extension was installed. */
        installType: ExtensionInstallType;
    }

    interface _InstallReturnResult {
        id: _manifest.ExtensionID;
    }

    interface _InstallOptions {
        /** URL pointing to the XPI file on addons.mozilla.org or similar. */
        url: _manifest.HttpURL;
        /** A hash of the XPI file, using sha256 or stronger. */
        hash?: string | undefined;
    }

    interface _UninstallSelfOptions {
        /** Whether or not a confirm-uninstall dialog should prompt the user. Defaults to false. */
        showConfirmDialog?: boolean | undefined;
        /** The message to display to a user when being asked to confirm removal of the extension. */
        dialogMessage?: string | undefined;
    }

    /* management functions */
    /** Returns a list of information about installed extensions. */
    function getAll(): Promise<ExtensionInfo[]>;

    /**
     * Returns information about the installed extension that has the given ID.
     * @param id The ID from an item of `management.ExtensionInfo`.
     */
    function get(id: _manifest.ExtensionID): Promise<ExtensionInfo>;

    /** Installs and enables a theme extension from the given url. */
    function install(options: _InstallOptions): Promise<_InstallReturnResult>;

    /**
     * Returns information about the calling extension. Note: This function can be used without requesting the 'management' permission in the manifest.
     */
    function getSelf(): Promise<ExtensionInfo>;

    /**
     * Uninstalls the calling extension. Note: This function can be used without requesting the 'management' permission in the manifest.
     */
    function uninstallSelf(options?: _UninstallSelfOptions): Promise<void>;

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
 * This API provides the ability to determine the status of and detect changes in the network connection. This API can only be used in privileged extensions.
 *
 * Permissions: `networkStatus`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.networkStatus {
    /* networkStatus types */
    interface NetworkLinkInfo {
        /** Status of the network link, if "unknown" then link is usually assumed to be "up" */
        status: _NetworkLinkInfoStatus;
        /** If known, the type of network connection that is avialable. */
        type: _NetworkLinkInfoType;
        /** If known, the network id or name. */
        id?: string | undefined;
    }

    /** Status of the network link, if "unknown" then link is usually assumed to be "up" */
    type _NetworkLinkInfoStatus = 'unknown' | 'up' | 'down';

    /** If known, the type of network connection that is avialable. */
    type _NetworkLinkInfoType = 'unknown' | 'ethernet' | 'usb' | 'wifi' | 'wimax' | 'mobile';

    /* networkStatus functions */
    /** Returns the $(ref:NetworkLinkInfo} of the current network connection. */
    function getLinkInfo(): Promise<NetworkLinkInfo>;

    /* networkStatus events */
    /** Fired when the network connection state changes. */
    const onConnectionChanged: WebExtEvent<(details: NetworkLinkInfo) => void>;
}

/**
 * Permissions: `notifications`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.notifications {
    /* notifications types */
    type TemplateType = 'basic' | 'image' | 'list' | 'progress';

    type PermissionLevel = 'granted' | 'denied';

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
        iconUrl?: string | undefined;
        /** A URL to the app icon mask. */
        appIconMaskUrl?: string | undefined;
        /** Title of the notification (e.g. sender name for email). */
        title: string;
        /** Main notification content. */
        message: string;
        /** Alternate notification content with a lower-weight font. */
        contextMessage?: string | undefined;
        /** Priority ranges from -2 to 2\. -2 is lowest priority. 2 is highest. Zero is default. */
        priority?: number | undefined;
        /** A timestamp associated with the notification, in milliseconds past the epoch. */
        eventTime?: number | undefined;
        /**
         * Text and icons for up to two notification action buttons.
         * @deprecated Unsupported on Firefox at this time.
         */
        buttons?: _CreateNotificationOptionsButtons[] | undefined;
        /** A URL to the image thumbnail for image-type notifications. */
        imageUrl?: string | undefined;
        /** Items for multi-item notifications. */
        items?: NotificationItem[] | undefined;
        /** Current progress ranges from 0 to 100. */
        progress?: number | undefined;
        /**
         * Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
         */
        isClickable?: boolean | undefined;
    }

    interface UpdateNotificationOptions {
        /** Which type of notification to display. */
        type?: TemplateType | undefined;
        /** A URL to the sender's avatar, app icon, or a thumbnail for image notifications. */
        iconUrl?: string | undefined;
        /** A URL to the app icon mask. */
        appIconMaskUrl?: string | undefined;
        /** Title of the notification (e.g. sender name for email). */
        title?: string | undefined;
        /** Main notification content. */
        message?: string | undefined;
        /** Alternate notification content with a lower-weight font. */
        contextMessage?: string | undefined;
        /** Priority ranges from -2 to 2\. -2 is lowest priority. 2 is highest. Zero is default. */
        priority?: number | undefined;
        /** A timestamp associated with the notification, in milliseconds past the epoch. */
        eventTime?: number | undefined;
        /**
         * Text and icons for up to two notification action buttons.
         * @deprecated Unsupported on Firefox at this time.
         */
        buttons?: _UpdateNotificationOptionsButtons[] | undefined;
        /** A URL to the image thumbnail for image-type notifications. */
        imageUrl?: string | undefined;
        /** Items for multi-item notifications. */
        items?: NotificationItem[] | undefined;
        /** Current progress ranges from 0 to 100. */
        progress?: number | undefined;
        /**
         * Whether to show UI indicating that the app will visibly respond to clicks on the body of a notification.
         */
        isClickable?: boolean | undefined;
    }

    interface _CreateNotificationOptionsButtons {
        title: string;
        iconUrl?: string | undefined;
    }

    interface _UpdateNotificationOptionsButtons {
        title: string;
        iconUrl?: string | undefined;
    }

    /* notifications functions */
    /**
     * Creates and displays a notification.
     * @param options Contents of the notification.
     */
    function create(options: CreateNotificationOptions): Promise<string>;
    /**
     * Creates and displays a notification.
     * @param notificationId Identifier of the notification. If it is empty, this method generates an id. If it matches an existing notification, this method first clears that notification before proceeding with the create operation.
     * @param options Contents of the notification.
     */
    function create(notificationId: string, options: CreateNotificationOptions): Promise<string>;

    /**
     * Updates an existing notification.
     * @param notificationId The id of the notification to be updated.
     * @param options Contents of the notification to update to.
     * @deprecated Unsupported on Firefox at this time.
     */
    function update(notificationId: string, options: UpdateNotificationOptions): Promise<boolean>;

    /**
     * Clears an existing notification.
     * @param notificationId The id of the notification to be updated.
     */
    function clear(notificationId: string): Promise<boolean>;

    /** Retrieves all the notifications. */
    function getAll(): Promise<{ [key: string]: CreateNotificationOptions }>;

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
 * Use the `browser.pageAction` API to put icons inside the address bar. Page actions represent actions that can be taken on the current page, but that aren't applicable to all pages.
 *
 * Manifest keys: `page_action`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.pageAction {
    /* pageAction types */
    /** Pixel data for an image. Must be an ImageData object (for example, from a `canvas` element). */
    type ImageDataType = ImageData;

    /** Information sent when a page action is clicked. */
    interface OnClickData {
        /** An array of keyboard modifiers that were held while the menu item was clicked. */
        modifiers: _OnClickDataModifiers[];
        /** An integer value of button by which menu item was clicked. */
        button?: number | undefined;
    }

    type _OnClickDataModifiers = 'Shift' | 'Alt' | 'Command' | 'Ctrl' | 'MacCtrl';

    interface _IsShownDetails {
        /** Specify the tab to get the shownness from. */
        tabId: number;
    }

    interface _SetTitleDetails {
        /** The id of the tab for which you want to modify the page action. */
        tabId: number;
        /** The tooltip string. */
        title: string | null;
    }

    interface _GetTitleDetails {
        /** Specify the tab to get the title from. */
        tabId: number;
    }

    interface _SetIconDetails {
        /** The id of the tab for which you want to modify the page action. */
        tabId: number;
        /**
         * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        imageData?:
            | ImageDataType
            | {
                  [key: number]: ImageDataType;
              }
            | undefined;
        /**
         * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        path?:
            | string
            | {
                  [key: number]: string;
              }
            | undefined;
    }

    interface _SetPopupDetails {
        /** The id of the tab for which you want to modify the page action. */
        tabId: number;
        /** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string | null;
    }

    interface _GetPopupDetails {
        /** Specify the tab to get the popup from. */
        tabId: number;
    }

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

    /** Checks whether the page action is shown. */
    function isShown(details: _IsShownDetails): Promise<boolean>;

    /** Sets the title of the page action. This is displayed in a tooltip over the page action. */
    function setTitle(details: _SetTitleDetails): void;

    /** Gets the title of the page action. */
    function getTitle(details: _GetTitleDetails): Promise<string>;

    /**
     * Sets the icon for the page action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the **path** or the **imageData** property must be specified.
     */
    function setIcon(details: _SetIconDetails): Promise<void>;

    /** Sets the html document to be opened as a popup when the user clicks on the page action's icon. */
    function setPopup(details: _SetPopupDetails): void;

    /** Gets the html document set as the popup for this page action. */
    function getPopup(details: _GetPopupDetails): Promise<string>;

    /** Opens the extension page action in the active window. */
    function openPopup(): Promise<void>;

    /* pageAction events */
    /** Fired when a page action icon is clicked. This event will not fire if the page action has a popup. */
    const onClicked: WebExtEvent<(tab: tabs.Tab, info?: OnClickData) => void>;
}

/**
 * Manifest keys: `optional_permissions`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.permissions {
    /* permissions types */
    interface Permissions {
        permissions?: _manifest.OptionalPermission[] | undefined;
        origins?: _manifest.MatchPattern[] | undefined;
    }

    interface AnyPermissions {
        permissions?: _manifest.Permission[] | undefined;
        origins?: _manifest.MatchPattern[] | undefined;
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
    function remove(permissions: Permissions): Promise<boolean>;

    /* permissions events */
    /** Fired when the extension acquires new permissions. */
    const onAdded: WebExtEvent<(permissions: Permissions) => void>;

    /** Fired when permissions are removed from the extension. */
    const onRemoved: WebExtEvent<(permissions: Permissions) => void>;
}

/**
 * Permissions: `privacy`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.privacy {}

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
    type IPHandlingPolicy =
        | 'default'
        | 'default_public_and_private_interfaces'
        | 'default_public_interface_only'
        | 'disable_non_proxied_udp'
        | 'proxy_only';

    /** An object which describes TLS minimum and maximum versions. */
    interface tlsVersionRestrictionConfig {
        /** The minimum TLS version supported. */
        minimum?: _TlsVersionRestrictionConfigMinimum | undefined;
        /** The maximum TLS version supported. */
        maximum?: _TlsVersionRestrictionConfigMaximum | undefined;
    }

    /** The mode for https-only mode. */
    type HTTPSOnlyModeOption = 'always' | 'private_browsing' | 'never';

    /** The minimum TLS version supported. */
    type _TlsVersionRestrictionConfigMinimum =
        | 'TLSv1'
        | 'TLSv1.1'
        | 'TLSv1.2'
        | 'TLSv1.3'
        | 'unknown';

    /** The maximum TLS version supported. */
    type _TlsVersionRestrictionConfigMaximum =
        | 'TLSv1'
        | 'TLSv1.1'
        | 'TLSv1.2'
        | 'TLSv1.3'
        | 'unknown';

    /* privacy.network properties */
    /**
     * If enabled, the browser attempts to speed up your web browsing experience by pre-resolving DNS entries, prerendering sites (`<link rel='prefetch' ...>`), and preemptively opening TCP and SSL connections to servers. This preference's value is a boolean, defaulting to `true`.
     */
    const networkPredictionEnabled: types.Setting;

    /** Allow users to enable and disable RTCPeerConnections (aka WebRTC). */
    const peerConnectionEnabled: types.Setting;

    /**
     * Allow users to specify the media performance/privacy tradeoffs which impacts how WebRTC traffic will be routed and how much local address information is exposed. This preference's value is of type IPHandlingPolicy, defaulting to `default`.
     */
    const webRTCIPHandlingPolicy: types.Setting;

    /**
     * This property controls the minimum and maximum TLS versions. This setting's value is an object of `tlsVersionRestrictionConfig`.
     */
    const tlsVersionRestriction: types.Setting;

    /**
     * Allow users to query the mode for 'HTTPS-Only Mode'. This setting's value is of type HTTPSOnlyModeOption, defaulting to `never`.
     */
    const httpsOnlyMode: types.Setting;
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
     * If enabled, the password manager will ask if you want to save passwords. This preference's value is a boolean, defaulting to `true`.
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
    type TrackingProtectionModeOption = 'always' | 'never' | 'private_browsing';

    /** The settings for cookies. */
    interface CookieConfig {
        /** The type of cookies to allow. */
        behavior?: _CookieConfigBehavior | undefined;
        /** Whether to create all cookies as nonPersistent (i.e., session) cookies. */
        nonPersistentCookies?: boolean | undefined;
    }

    /** The type of cookies to allow. */
    type _CookieConfigBehavior =
        | 'allow_all'
        | 'reject_all'
        | 'reject_third_party'
        | 'allow_visited'
        | 'reject_trackers'
        | 'reject_trackers_and_partition_foreign';

    /* privacy.websites properties */
    /**
     * If disabled, the browser blocks third-party sites from setting cookies. The value of this preference is of type boolean, and the default value is `true`.
     * @deprecated Unsupported on Firefox at this time.
     */
    const thirdPartyCookiesAllowed: types.Setting | undefined;

    /**
     * If enabled, the browser sends auditing pings when requested by a website (`<a ping>`). The value of this preference is of type boolean, and the default value is `true`.
     */
    const hyperlinkAuditingEnabled: types.Setting;

    /**
     * If enabled, the browser sends `referer` headers with your requests. Yes, the name of this preference doesn't match the misspelled header. No, we're not going to change it. The value of this preference is of type boolean, and the default value is `true`.
     */
    const referrersEnabled: types.Setting;

    /**
     * If enabled, the browser attempts to appear similar to other users by reporting generic information to websites. This can prevent websites from uniquely identifying users. Examples of data that is spoofed include number of CPU cores, precision of JavaScript timers, the local timezone, and disabling features such as GamePad support, and the WebSpeech and Navigator APIs. The value of this preference is of type boolean, and the default value is `false`.
     */
    const resistFingerprinting: types.Setting;

    /**
     * If enabled, the browser will associate all data (including cookies, HSTS data, cached images, and more) for any third party domains with the domain in the address bar. This prevents third party trackers from using directly stored information to identify you across different websites, but may break websites where you login with a third party account (such as a Facebook or Google login.) The value of this preference is of type boolean, and the default value is `false`.
     */
    const firstPartyIsolate: types.Setting;

    /**
     * **Available on Windows and ChromeOS only**: If enabled, the browser provides a unique ID to plugins in order to run protected content. The value of this preference is of type boolean, and the default value is `true`.
     * @deprecated Unsupported on Firefox at this time.
     */
    const protectedContentEnabled: types.Setting | undefined;

    /**
     * Allow users to specify the mode for tracking protection. This setting's value is of type TrackingProtectionModeOption, defaulting to `private_browsing_only`.
     */
    const trackingProtectionMode: types.Setting;

    /**
     * Allow users to specify the default settings for allowing cookies, as well as whether all cookies should be created as non-persistent cookies. This setting's value is of type CookieConfig.
     */
    const cookieConfig: types.Setting;
}

/**
 * Provides access to global proxy settings for Firefox and proxy event listeners to handle dynamic proxy implementations.
 *
 * Permissions: `proxy`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.proxy {
    /* proxy types */
    /** An object which describes proxy settings. */
    interface ProxyConfig {
        /** The type of proxy to use. */
        proxyType?: _ProxyConfigProxyType | undefined;
        /** The address of the http proxy, can include a port. */
        http?: string | undefined;
        /** Use the http proxy server for all protocols. */
        httpProxyAll?: boolean | undefined;
        /**
         * The address of the ftp proxy, can include a port. Deprecated since Firefox 88.
         * @deprecated The address of the ftp proxy, can include a port. Deprecated since Firefox 88.
         */
        ftp?: string | undefined;
        /** The address of the ssl proxy, can include a port. */
        ssl?: string | undefined;
        /** The address of the socks proxy, can include a port. */
        socks?: string | undefined;
        /** The version of the socks proxy. */
        socksVersion?: number | undefined;
        /** A list of hosts which should not be proxied. */
        passthrough?: string | undefined;
        /** A URL to use to configure the proxy. */
        autoConfigUrl?: string | undefined;
        /** Do not prompt for authentication if password is saved. */
        autoLogin?: boolean | undefined;
        /** Proxy DNS when using SOCKS v5. */
        proxyDNS?: boolean | undefined;
        /**
         * If true (the default value), do not use newer TLS protocol features that might have interoperability problems on the Internet. This is intended only for use with critical infrastructure like the updates, and is only available to privileged addons.
         */
        respectBeConservative?: boolean | undefined;
    }

    /** The type of proxy to use. */
    type _ProxyConfigProxyType = 'none' | 'autoDetect' | 'system' | 'manual' | 'autoConfig';

    interface _OnRequestDetails {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** True for private browsing requests. */
        incognito?: boolean | undefined;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId?: string | undefined;
        /** URL of the resource that triggered this request. */
        originUrl?: string | undefined;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string | undefined;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: webRequest.ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /** Indicates if this response was fetched from disk cache. */
        fromCache: boolean;
        /** The HTTP request headers that are going to be sent out with this request. */
        requestHeaders?: webRequest.HttpHeaders | undefined;
        /** Url classification if the request has been classified. */
        urlClassification: webRequest.UrlClassification;
        /** Indicates if this request and its content window hierarchy is third party. */
        thirdParty: boolean;
    }

    interface _ProxyOnRequestEvent<TCallback = (details: _OnRequestDetails) => void> {
        addListener(
            cb: TCallback,
            filter: webRequest.RequestFilter,
            extraInfoSpec?: Array<'requestHeaders'>
        ): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    /* proxy properties */
    /** Configures proxy settings. This setting's value is an object of type ProxyConfig. */
    const settings: types.Setting;

    /* proxy events */
    /** Fired when proxy data is needed for a request. */
    const onRequest: _ProxyOnRequestEvent;

    /** Notifies about errors caused by the invalid use of the proxy API. */
    const onError: WebExtEvent<(error: Error) => void>;
}

/**
 * Use the `browser.runtime` API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs.
 */
declare namespace browser.runtime {
    /* runtime types */
    /** An object which allows two way communication with other pages. */
    interface Port {
        name: string;
        disconnect: () => void;
        postMessage: (message: object) => void;
        /** This property will **only** be present on ports passed to onConnect/onConnectExternal listeners. */
        sender?: MessageSender | undefined;
        error?: Error | undefined;
        onMessage: WebExtEvent<(response: object) => void>;
        onDisconnect: WebExtEvent<(port: Port) => void>;
    }

    /** An object containing information about the script context that sent a message or request. */
    interface MessageSender {
        /**
         * The `tabs.Tab` which opened the connection, if any. This property will **only** be present when the connection was opened from a tab (including content scripts), and **only** if the receiver is an extension, not an app.
         */
        tab?: tabs.Tab | undefined;
        /**
         * The frame that opened the connection. 0 for top-level frames, positive for child frames. This will only be set when `tab` is set.
         */
        frameId?: number | undefined;
        /** The ID of the extension or app that opened the connection, if any. */
        id?: string | undefined;
        /**
         * The URL of the page or frame that opened the connection. If the sender is in an iframe, it will be iframe's URL not the URL of the page which hosts it.
         */
        url?: string | undefined;
        /**
         * The TLS channel ID of the page or frame that opened the connection, if requested by the extension or app, and if available.
         * @deprecated Unsupported on Firefox at this time.
         */
        tlsChannelId?: string | undefined;
    }

    /** The operating system the browser is running on. */
    type PlatformOs = 'mac' | 'win' | 'android' | 'cros' | 'linux' | 'openbsd';

    /** The machine's processor architecture. */
    type PlatformArch = 'aarch64' | 'arm' | 'ppc64' | 's390x' | 'sparc64' | 'x86-32' | 'x86-64';

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
        nacl_arch?: PlatformNaclArch | undefined;
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
    type RequestUpdateCheckStatus = 'throttled' | 'no_update' | 'update_available';

    /** The reason that this event is being dispatched. */
    type OnInstalledReason = 'install' | 'update' | 'browser_update';

    /**
     * The reason that the event is being dispatched. 'app_update' is used when the restart is needed because the application is updated to a newer version. 'os_update' is used when the restart is needed because the browser/OS is updated to a newer version. 'periodic' is used when the system runs for more than the permitted uptime set in the enterprise policy.
     */
    type OnRestartRequiredReason = 'app_update' | 'os_update' | 'periodic';

    type PlatformNaclArch = 'arm' | 'x86-32' | 'x86-64';

    /** This will be defined during an API method callback if there was an error */
    interface _LastError {
        /** Details about the error which occurred. */
        message?: string | undefined;
    }

    /** If an update is available, this contains more information about the available update. */
    interface _RequestUpdateCheckReturnDetails {
        /** The version of the available update. */
        version: string;
    }

    interface _ConnectConnectInfo {
        /** Will be passed into onConnect for processes that are listening for the connection event. */
        name?: string | undefined;
        /**
         * Whether the TLS channel ID will be passed into onConnectExternal for processes that are listening for the connection event.
         */
        includeTlsChannelId?: boolean | undefined;
    }

    interface _SendMessageOptions {
        /**
         * Whether the TLS channel ID will be passed into onMessageExternal for processes that are listening for the connection event.
         * @deprecated Unsupported on Firefox at this time.
         */
        includeTlsChannelId?: boolean | undefined;
    }

    type DirectoryEntry = any;

    interface _OnInstalledDetails {
        /** The reason that this event is being dispatched. */
        reason: OnInstalledReason;
        /**
         * Indicates the previous version of the extension, which has just been updated. This is present only if 'reason' is 'update'.
         */
        previousVersion?: string | undefined;
        /** Indicates whether the addon is installed as a temporary extension. */
        temporary: boolean;
        /**
         * Indicates the ID of the imported shared module extension which updated. This is present only if 'reason' is 'shared_module_update'.
         * @deprecated Unsupported on Firefox at this time.
         */
        id?: string | undefined;
    }

    /** The manifest details of the available update. */
    interface _OnUpdateAvailableDetails {
        /** The version number of the available update. */
        version: string;
    }

    /* runtime properties */
    /** This will be defined during an API method callback if there was an error */
    const lastError: _LastError | undefined;

    /** The ID of the extension/app. */
    const id: string;

    /* runtime functions */
    /**
     * Retrieves the JavaScript 'window' object for the background page running inside the current extension/app. If the background page is an event page, the system will ensure it is loaded before calling the callback. If there is no background page, an error is set.
     * Not supported on manifest versions above 2.
     */
    function getBackgroundPage(): Promise<Window>;

    /**
     * Open your Extension's options page, if possible.
     *
     * The precise behavior may depend on your manifest's `options_ui` or `options_page` key, or what the browser happens to support at the time.
     *
     * If your Extension does not declare an options page, or the browser failed to create one for some other reason, the callback will set `lastError`.
     */
    function openOptionsPage(): Promise<void>;

    /**
     * Returns details about the app or extension from the manifest. The object returned is a serialization of the full manifest file.
     */
    function getManifest(): _manifest.WebExtensionManifest;

    /**
     * Converts a relative path within an app/extension install directory to a fully-qualified URL.
     * @param path A path to a resource within an app/extension expressed relative to its install directory.
     * @returns The fully-qualified URL to the resource.
     */
    function getURL(path: string): string;

    /**
     * Sets the URL to be visited upon uninstallation. This may be used to clean up server-side data, do analytics, and implement surveys. Maximum 255 characters.
     * @param [url] URL to be opened after the extension is uninstalled. This URL must have an http: or https: scheme. Set an empty string to not open a new tab upon uninstallation.
     */
    function setUninstallURL(url?: string): Promise<void>;

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
     * Attempts to connect to connect listeners within an extension/app (such as the background page), or other extensions/apps. This is useful for content scripts connecting to their extension processes, inter-app/extension communication, and web messaging. Note that this does not connect to any listeners in a content script. Extensions may connect to content scripts embedded in tabs via `tabs.connect`.
     * @returns Port through which messages can be sent and received. The port's `runtime.Port onDisconnect` event is fired if the extension/app does not exist.
     */
    function connect(): Port;
    /**
     * Attempts to connect to connect listeners within an extension/app (such as the background page), or other extensions/apps. This is useful for content scripts connecting to their extension processes, inter-app/extension communication, and web messaging. Note that this does not connect to any listeners in a content script. Extensions may connect to content scripts embedded in tabs via `tabs.connect`.
     * @param extensionId The ID of the extension or app to connect to. If omitted, a connection will be attempted with your own extension. Required if sending messages from a web page for web messaging.
     * @returns Port through which messages can be sent and received. The port's `runtime.Port onDisconnect` event is fired if the extension/app does not exist.
     */
    function connect(extensionId: string, connectInfo?: _ConnectConnectInfo): Port;
    /**
     * Attempts to connect to connect listeners within an extension/app (such as the background page), or other extensions/apps. This is useful for content scripts connecting to their extension processes, inter-app/extension communication, and web messaging. Note that this does not connect to any listeners in a content script. Extensions may connect to content scripts embedded in tabs via `tabs.connect`.
     * @returns Port through which messages can be sent and received. The port's `runtime.Port onDisconnect` event is fired if the extension/app does not exist.
     */
    function connect(connectInfo: _ConnectConnectInfo): Port;

    /**
     * Connects to a native application in the host machine.
     *
     * Not allowed in: Devtools pages
     * @param application The name of the registered application to connect to.
     * @returns Port through which messages can be sent and received with the application
     */
    function connectNative(application: string): Port;

    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to `runtime.connect` but only sends a single message, with an optional response. If sending to your extension, the `runtime.onMessage` event will be fired in each page, or `runtime.onMessageExternal`, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use `tabs.sendMessage`.
     */
    function sendMessage(message: any, options?: _SendMessageOptions): Promise<any>;
    /**
     * Sends a single message to event listeners within your extension/app or a different extension/app. Similar to `runtime.connect` but only sends a single message, with an optional response. If sending to your extension, the `runtime.onMessage` event will be fired in each page, or `runtime.onMessageExternal`, if a different extension. Note that extensions cannot send messages to content scripts using this method. To send messages to content scripts, use `tabs.sendMessage`.
     * @param extensionId The ID of the extension/app to send the message to. If omitted, the message will be sent to your own extension/app. Required if sending messages from a web page for web messaging.
     */
    function sendMessage(
        extensionId: string,
        message: any,
        options?: _SendMessageOptions
    ): Promise<any>;

    /**
     * Send a single message to a native application.
     *
     * Not allowed in: Devtools pages
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
    function getPackageDirectoryEntry(): Promise<DirectoryEntry>;

    /* runtime events */
    /**
     * Fired when a profile that has this extension installed first starts up. This event is not fired for incognito profiles.
     */
    const onStartup: WebExtEvent<() => void>;

    /**
     * Fired when the extension is first installed, when the extension is updated to a new version, and when the browser is updated to a new version.
     */
    const onInstalled: WebExtEvent<(details: _OnInstalledDetails) => void>;

    /**
     * Sent to the event page just before it is unloaded. This gives the extension opportunity to do some clean up. Note that since the page is unloading, any asynchronous operations started while handling this event are not guaranteed to complete. If more activity for the event page occurs before it gets unloaded the onSuspendCanceled event will be sent and the page won't be unloaded.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onSuspend: WebExtEvent<() => void> | undefined;

    /**
     * Sent after onSuspend to indicate that the app won't be unloaded after all.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onSuspendCanceled: WebExtEvent<() => void> | undefined;

    /**
     * Fired when an update is available, but isn't installed immediately because the app is currently running. If you do nothing, the update will be installed the next time the background page gets unloaded, if you want it to be installed sooner you can explicitly call `runtime.reload`. If your extension is using a persistent background page, the background page of course never gets unloaded, so unless you call `runtime.reload` manually in response to this event the update will not get installed until the next time the browser itself restarts. If no handlers are listening for this event, and your extension has a persistent background page, it behaves as if `runtime.reload` is called in response to this event.
     * @param details The manifest details of the available update.
     */
    const onUpdateAvailable: WebExtEvent<(details: _OnUpdateAvailableDetails) => void>;

    /**
     * Fired when an update for the browser is available, but isn't installed immediately because a browser restart is required.
     * @deprecated Please use `runtime.onRestartRequired`.
     */
    const onBrowserUpdateAvailable: WebExtEvent<() => void> | undefined;

    /** Fired when a connection is made from either an extension process or a content script. */
    const onConnect: WebExtEvent<(port: Port) => void>;

    /** Fired when a connection is made from another extension. */
    const onConnectExternal: WebExtEvent<(port: Port) => void>;

    /**
     * Fired when a message is sent from either an extension process or a content script.
     * @param message The message sent by the calling script.
     * @param sendResponse Function to call (at most once) when you have a response. The argument should be any JSON-ifiable object. If you have more than one `onMessage` listener in the same document, then only one may send a response. This function becomes invalid when the event listener returns, unless you return true from the event listener to indicate you wish to send a response asynchronously (this will keep the message channel open to the other end until `sendResponse` is called).
     * @returns Return true from the event listener if you wish to call `sendResponse` after the event listener returns.
     */
    const onMessage: WebExtEvent<
        (
            message: any,
            sender: MessageSender,
            sendResponse: (response?: any) => void
        ) => boolean | Promise<any> | void
    >;

    /**
     * Fired when a message is sent from another extension/app. Cannot be used in a content script.
     * @param message The message sent by the calling script.
     * @param sendResponse Function to call (at most once) when you have a response. The argument should be any JSON-ifiable object. If you have more than one `onMessage` listener in the same document, then only one may send a response. This function becomes invalid when the event listener returns, unless you return true from the event listener to indicate you wish to send a response asynchronously (this will keep the message channel open to the other end until `sendResponse` is called).
     * @returns Return true from the event listener if you wish to call `sendResponse` after the event listener returns.
     */
    const onMessageExternal: WebExtEvent<
        (
            message: any,
            sender: MessageSender,
            sendResponse: (response?: any) => void
        ) => boolean | Promise<any> | void
    >;

    /**
     * Fired when an app or the device that it runs on needs to be restarted. The app should close all its windows at its earliest convenient time to let the restart to happen. If the app does nothing, a restart will be enforced after a 24-hour grace period has passed. Currently, this event is only fired for Chrome OS kiosk apps.
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
         * @param [keys] A single key to get, list of keys to get, or a dictionary specifying default values (see description of the object). An empty list or object will return an empty result object. Pass in `null` to get the entire contents of storage.
         */
        get(keys?: string | string[] | { [key: string]: any }): Promise<{ [key: string]: any }>;
        /**
         * Gets the amount of space (in bytes) being used by one or more items.
         * @param [keys] A single key or list of keys to get the total usage for. An empty list will return 0\. Pass in `null` to get the total usage of all of storage.
         * @deprecated Unsupported on Firefox at this time.
         */
        getBytesInUse?(keys?: string | string[]): Promise<number>;
        /**
         * Sets multiple items.
         * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in storage will not be affected.
         *
         * Primitive values such as numbers will serialize as expected. Values with a `typeof` `"object"` and `"function"` will typically serialize to `{}`, with the exception of `Array` (serializes as expected), `Date`, and `Regex` (serialize using their `String` representation).
         */
        set(items: { [key: string]: any }): Promise<void>;
        /**
         * Removes one or more items from storage.
         * @param keys A single key or a list of keys for items to remove.
         */
        remove(keys: string | string[]): Promise<void>;
        /** Removes all items from storage. */
        clear(): Promise<void>;
    }

    interface StorageAreaSync {
        /**
         * Gets one or more items from storage.
         * @param [keys] A single key to get, list of keys to get, or a dictionary specifying default values (see description of the object). An empty list or object will return an empty result object. Pass in `null` to get the entire contents of storage.
         */
        get(keys?: string | string[] | { [key: string]: any }): Promise<{ [key: string]: any }>;
        /**
         * Gets the amount of space (in bytes) being used by one or more items.
         * @param [keys] A single key or list of keys to get the total usage for. An empty list will return 0\. Pass in `null` to get the total usage of all of storage.
         */
        getBytesInUse(keys?: string | string[]): Promise<number>;
        /**
         * Sets multiple items.
         * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in storage will not be affected.
         *
         * Primitive values such as numbers will serialize as expected. Values with a `typeof` `"object"` and `"function"` will typically serialize to `{}`, with the exception of `Array` (serializes as expected), `Date`, and `Regex` (serialize using their `String` representation).
         */
        set(items: { [key: string]: any }): Promise<void>;
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
    const sync: StorageAreaSync;

    /** Items in the `local` storage area are local to each machine. */
    const local: StorageArea;

    /**
     * Items in the `managed` storage area are set by administrators or native applications, and are read-only for the extension; trying to modify this namespace results in an error.
     */
    const managed: StorageArea;

    /* storage events */
    /**
     * Fired when one or more items change.
     * @param changes Object mapping each key that changed to its corresponding `storage.StorageChange` for that item.
     * @param areaName The name of the storage area (`"sync"`, `"local"` or `"managed"`) the changes are for.
     */
    const onChanged: WebExtEvent<
        (changes: { [key: string]: StorageChange }, areaName: string) => void
    >;
}

/**
 * Use the `browser.telemetry` API to send telemetry data to the Mozilla Telemetry service. Restricted to Mozilla privileged webextensions.
 *
 * Permissions: `telemetry`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.telemetry {
    /* telemetry types */
    /**
     * Type of scalar: 'count' for numeric values, 'string' for string values, 'boolean' for boolean values. Maps to `nsITelemetry.SCALAR_TYPE_*`.
     */
    type ScalarType = 'count' | 'string' | 'boolean';

    /** Represents registration data for a Telemetry scalar. */
    interface ScalarData {
        kind: ScalarType;
        /** True if this is a keyed scalar. */
        keyed?: boolean | undefined;
        /** True if this data should be recorded on release. */
        record_on_release?: boolean | undefined;
        /**
         * True if this scalar entry is expired. This allows recording it without error, but it will be discarded.
         */
        expired?: boolean | undefined;
    }

    /** Represents registration data for a Telemetry event. */
    interface EventData {
        /** List of methods for this event entry. */
        methods: string[];
        /** List of objects for this event entry. */
        objects: string[];
        /** List of allowed extra keys for this event entry. */
        extra_keys: string[];
        /** True if this data should be recorded on release. */
        record_on_release?: boolean | undefined;
        /**
         * True if this event entry is expired. This allows recording it without error, but it will be discarded.
         */
        expired?: boolean | undefined;
    }

    /** Options object. */
    interface _SubmitPingOptions {
        /** True if the ping should contain the client id. */
        addClientId?: boolean | undefined;
        /** True if the ping should contain the environment data. */
        addEnvironment?: boolean | undefined;
        /** Set to override the environment data. */
        overrideEnvironment?: { [key: string]: any } | undefined;
        /** If true, send the ping using the PingSender. */
        usePingSender?: boolean | undefined;
    }

    /** Options object. */
    interface _SubmitEncryptedPingOptions {
        /** Schema name used for payload. */
        schemaName: string;
        /** Schema version used for payload. */
        schemaVersion: number;
    }

    /* telemetry functions */
    /**
     * Submits a custom ping to the Telemetry back-end. See `submitExternalPing` inside TelemetryController.jsm for more details.
     * @param type The type of the ping.
     * @param message The data payload for the ping.
     * @param options Options object.
     */
    function submitPing(
        type: string,
        message: { [key: string]: any },
        options: _SubmitPingOptions
    ): Promise<any>;

    /**
     * Submits a custom ping to the Telemetry back-end, with an encrypted payload. Requires a telemetry entry in the manifest to be used.
     * @param message The data payload for the ping, which will be encrypted.
     * @param options Options object.
     */
    function submitEncryptedPing(
        message: { [key: string]: any },
        options: _SubmitEncryptedPingOptions
    ): Promise<any>;

    /** Checks if Telemetry upload is enabled. */
    function canUpload(): Promise<any>;

    /**
     * Adds the value to the given scalar.
     * @param name The scalar name.
     * @param value The numeric value to add to the scalar. Only unsigned integers supported.
     */
    function scalarAdd(name: string, value: number): Promise<any>;

    /**
     * Sets the named scalar to the given value. Throws if the value type doesn't match the scalar type.
     * @param name The scalar name
     * @param value The value to set the scalar to
     */
    function scalarSet(
        name: string,
        value: string | boolean | number | { [key: string]: any }
    ): Promise<any>;

    /**
     * Sets the scalar to the maximum of the current and the passed value
     * @param name The scalar name.
     * @param value The numeric value to set the scalar to. Only unsigned integers supported.
     */
    function scalarSetMaximum(name: string, value: number): Promise<any>;

    /**
     * Adds the value to the given keyed scalar.
     * @param name The scalar name
     * @param key The key name
     * @param value The numeric value to add to the scalar. Only unsigned integers supported.
     */
    function keyedScalarAdd(name: string, key: string, value: number): Promise<any>;

    /**
     * Sets the keyed scalar to the given value. Throws if the value type doesn't match the scalar type.
     * @param name The scalar name.
     * @param key The key name.
     * @param value The value to set the scalar to.
     */
    function keyedScalarSet(
        name: string,
        key: string,
        value: string | boolean | number | { [key: string]: any }
    ): Promise<any>;

    /**
     * Sets the keyed scalar to the maximum of the current and the passed value
     * @param name The scalar name.
     * @param key The key name.
     * @param value The numeric value to set the scalar to. Only unsigned integers supported.
     */
    function keyedScalarSetMaximum(name: string, key: string, value: number): Promise<any>;

    /**
     * Record an event in Telemetry. Throws when trying to record an unknown event.
     * @param category The category name.
     * @param method The method name.
     * @param object The object name.
     * @param [value] An optional string value to record.
     * @param [extra] An optional object of the form (string -> string). It should only contain registered extra keys.
     */
    function recordEvent(
        category: string,
        method: string,
        object: string,
        value?: string,
        extra?: { [key: string]: string }
    ): Promise<any>;

    /**
     * Register new scalars to record them from addons. See nsITelemetry.idl for more details.
     * @param category The unique category the scalars are registered in.
     * @param data An object that contains registration data for multiple scalars. Each property name is the scalar name, and the corresponding property value is an object of ScalarData type.
     */
    function registerScalars(category: string, data: { [key: string]: ScalarData }): Promise<any>;

    /**
     * Register new events to record them from addons. See nsITelemetry.idl for more details.
     * @param category The unique category the events are registered in.
     * @param data An object that contains registration data for 1+ events. Each property name is the category name, and the corresponding property value is an object of EventData type.
     */
    function registerEvents(category: string, data: { [key: string]: EventData }): Promise<any>;

    /**
     * Enable recording of events in a category. Events default to recording disabled. This allows to toggle recording for all events in the specified category.
     * @param category The category name.
     * @param enabled Whether recording is enabled for events in that category.
     */
    function setEventRecordingEnabled(category: string, enabled: boolean): Promise<any>;
}

/**
 * The theme API allows customizing of visual elements of the browser.
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
        windowId?: number | undefined;
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
 * Contains types used by other schemas.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.types {
    /* types types */
    /**
     * The scope of the Setting. One of
     *
     * *   `regular`: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
     * *   `regular_only`: setting for the regular profile only (not inherited by the incognito profile),
     * *   `incognito_persistent`: setting for the incognito profile that survives browser restarts (overrides regular preferences),
     * *   `incognito_session_only`: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
     *
     * Only `regular` is supported by Firefox at this time.
     */
    type SettingScope =
        | 'regular'
        | 'regular_only'
        | 'incognito_persistent'
        | 'incognito_session_only';

    /**
     * One of
     *
     * *   `not_controllable`: cannot be controlled by any extension
     * *   `controlled_by_other_extensions`: controlled by extensions with higher precedence
     * *   `controllable_by_this_extension`: can be controlled by this extension
     * *   `controlled_by_this_extension`: controlled by this extension
     */
    type LevelOfControl =
        | 'not_controllable'
        | 'controlled_by_other_extensions'
        | 'controllable_by_this_extension'
        | 'controlled_by_this_extension';

    interface Setting {
        /**
         * Gets the value of a setting.
         * @param details Which setting to consider.
         */
        get(details: _GetDetails): Promise<_GetReturnDetails>;
        /**
         * Sets the value of a setting.
         * @param details Which setting to change.
         */
        set(details: _SetDetails): Promise<void>;
        /**
         * Clears the setting, restoring any default value.
         * @param details Which setting to clear.
         */
        clear(details: _ClearDetails): Promise<void>;
        /** Fired after the setting changes. */
        onChange: WebExtEvent<(details: _OnChangeDetails) => void>;
    }

    /** Details of the currently effective value. */
    interface _GetReturnDetails {
        /** The value of the setting. */
        value: any;
        /** The level of control of the setting. */
        levelOfControl: LevelOfControl;
        /**
         * Whether the effective value is specific to the incognito session.
         * This property will _only_ be present if the `incognito` property in the `details` parameter of `get()` was true.
         */
        incognitoSpecific?: boolean | undefined;
    }

    /** Which setting to consider. */
    interface _GetDetails {
        /** Whether to return the value that applies to the incognito session (default false). */
        incognito?: boolean | undefined;
    }

    /** Which setting to change. */
    interface _SetDetails {
        /**
         * The value of the setting.
         * Note that every setting has a specific value type, which is described together with the setting. An extension should _not_ set a value of a different type.
         */
        value: any;
        /** Where to set the setting (default: regular). */
        scope?: SettingScope | undefined;
    }

    /** Which setting to clear. */
    interface _ClearDetails {
        /** Where to clear the setting (default: regular). */
        scope?: SettingScope | undefined;
    }

    interface _OnChangeDetails {
        /** The value of the setting after the change. */
        value: any;
        /** The level of control of the setting. */
        levelOfControl: LevelOfControl;
        /**
         * Whether the value that has changed is specific to the incognito session.
         * This property will _only_ be present if the user has enabled the extension in incognito mode.
         */
        incognitoSpecific?: boolean | undefined;
    }
}

/**
 * Manifest keys: `user_scripts`, `user_scripts`
 *
 * Not allowed in: Devtools pages
 */
declare namespace browser.userScripts {
    /* userScripts types */
    /** Details of a user script */
    interface UserScriptOptions {
        /** The list of JS files to inject */
        js: extensionTypes.ExtensionFileOrCode[];
        /** An opaque user script metadata value */
        scriptMetadata?: extensionTypes.PlainJSONValue | undefined;
        matches: _manifest.MatchPattern[];
        excludeMatches?: _manifest.MatchPattern[] | undefined;
        includeGlobs?: string[] | undefined;
        excludeGlobs?: string[] | undefined;
        /**
         * If allFrames is `true`, implies that the JavaScript should be injected into all frames of current page. By default, it's `false` and is only injected into the top frame.
         */
        allFrames?: boolean | undefined;
        /**
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is `false`.
         */
        matchAboutBlank?: boolean | undefined;
        /** The soonest that the JavaScript will be injected into the tab. Defaults to "document_idle". */
        runAt?: extensionTypes.RunAt | undefined;
    }

    /** An object that represents a user script registered programmatically */
    interface RegisteredUserScript {
        /** Unregister a user script registered programmatically */
        unregister(): Promise<any>;
    }

    interface _OnBeforeScriptUserScript {
        /** The userScript metadata (as set in userScripts.register) */
        metadata: any;
        /** The userScript global */
        global: any;
        /**
         * Exports all the properties of a given plain object as userScript globals
         * @param sourceObject A plain object whose properties are exported as userScript globals
         */
        defineGlobals: (sourceObject: object) => void;
        /**
         * Convert a given value to make it accessible to the userScript code
         * @param value A value to convert into an object accessible to the userScript
         */
        export: (value: any) => any;
    }

    /* userScripts functions */
    /**
     * Register a user script programmatically given its `userScripts.UserScriptOptions`, and resolves to a `userScripts.RegisteredUserScript` instance
     */
    function register(userScriptOptions: UserScriptOptions): Promise<RegisteredUserScript>;

    /* userScripts events */
    /**
     * Event called when a new userScript global has been created
     *
     * Allowed in: Content scripts only
     */
    const onBeforeScript: WebExtEvent<(userScript: _OnBeforeScriptUserScript) => void>;
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
     * Cause of the navigation. The same transition types as defined in the history API are used. These are the same transition types as defined in the history API except with `"start_page"` in place of `"auto_toplevel"` (for backwards compatibility).
     */
    type TransitionType =
        | 'link'
        | 'typed'
        | 'auto_bookmark'
        | 'auto_subframe'
        | 'manual_subframe'
        | 'generated'
        | 'start_page'
        | 'form_submit'
        | 'reload'
        | 'keyword'
        | 'keyword_generated';

    type TransitionQualifier =
        | 'client_redirect'
        | 'server_redirect'
        | 'forward_back'
        | 'from_address_bar';

    interface EventUrlFilters {
        url: events.UrlFilter[];
    }

    /** Information about the requested frame, null if the specified frame ID and/or tab ID are invalid. */
    interface _GetFrameReturnDetails {
        /**
         * True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired.
         */
        errorOccurred?: boolean | undefined;
        /**
         * The URL currently associated with this frame, if the frame identified by the frameId existed at one point in the given tab. The fact that an URL is associated with a given frameId does not imply that the corresponding frame still exists.
         */
        url: string;
        /** The ID of the tab in which the frame is. */
        tabId: number;
        /**
         * The ID of the frame. 0 indicates that this is the main frame; a positive value indicates the ID of a subframe.
         */
        frameId: number;
        /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
        parentFrameId: number;
    }

    /** Information about the frame to retrieve information about. */
    interface _GetFrameDetails {
        /** The ID of the tab in which the frame is. */
        tabId: number;
        /** The ID of the process runs the renderer for this tab. */
        processId?: number | undefined;
        /** The ID of the frame in the given tab. */
        frameId: number;
    }

    interface _GetAllFramesReturnDetails {
        /**
         * True if the last navigation in this frame was interrupted by an error, i.e. the onErrorOccurred event fired.
         */
        errorOccurred?: boolean | undefined;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number | undefined;
        /** The ID of the tab in which the frame is. */
        tabId: number;
        /**
         * The ID of the frame. 0 indicates that this is the main frame; a positive value indicates the ID of a subframe.
         */
        frameId: number;
        /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
        parentFrameId: number;
        /** The URL currently associated with this frame. */
        url: string;
    }

    /** Information about the tab to retrieve all frames from. */
    interface _GetAllFramesDetails {
        /** The ID of the tab. */
        tabId: number;
    }

    interface _OnBeforeNavigateDetails {
        /** The ID of the tab in which the navigation is about to occur. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number | undefined;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique for a given tab and process.
         */
        frameId: number;
        /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
        parentFrameId: number;
        /** The time when the browser was about to start the navigation, in milliseconds since the epoch. */
        timeStamp: number;
    }

    interface _WebNavigationOnBeforeNavigateEvent<
        TCallback = (details: _OnBeforeNavigateDetails) => void
    > {
        addListener(cb: TCallback, filters?: EventUrlFilters): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnCommittedDetails {
        /** The ID of the tab in which the navigation occurs. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number | undefined;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab.
         */
        frameId: number;
        /**
         * Cause of the navigation.
         * @deprecated Unsupported on Firefox at this time.
         */
        transitionType?: TransitionType | undefined;
        /**
         * A list of transition qualifiers.
         * @deprecated Unsupported on Firefox at this time.
         */
        transitionQualifiers?: TransitionQualifier[] | undefined;
        /** The time when the navigation was committed, in milliseconds since the epoch. */
        timeStamp: number;
    }

    interface _WebNavigationOnCommittedEvent<TCallback = (details: _OnCommittedDetails) => void> {
        addListener(cb: TCallback, filters?: EventUrlFilters): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnDOMContentLoadedDetails {
        /** The ID of the tab in which the navigation occurs. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number | undefined;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** The time when the page's DOM was fully constructed, in milliseconds since the epoch. */
        timeStamp: number;
    }

    interface _WebNavigationOnDOMContentLoadedEvent<
        TCallback = (details: _OnDOMContentLoadedDetails) => void
    > {
        addListener(cb: TCallback, filters?: EventUrlFilters): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnCompletedDetails {
        /** The ID of the tab in which the navigation occurs. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number | undefined;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** The time when the document finished loading, in milliseconds since the epoch. */
        timeStamp: number;
    }

    interface _WebNavigationOnCompletedEvent<TCallback = (details: _OnCompletedDetails) => void> {
        addListener(cb: TCallback, filters?: EventUrlFilters): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnErrorOccurredDetails {
        /** The ID of the tab in which the navigation occurs. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number | undefined;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab.
         */
        frameId: number;
        /**
         * The error description.
         * @deprecated Unsupported on Firefox at this time.
         */
        error?: string | undefined;
        /** The time when the error occurred, in milliseconds since the epoch. */
        timeStamp: number;
    }

    interface _WebNavigationOnErrorOccurredEvent<
        TCallback = (details: _OnErrorOccurredDetails) => void
    > {
        addListener(cb: TCallback, filters?: EventUrlFilters): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnCreatedNavigationTargetDetails {
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
    }

    interface _WebNavigationOnCreatedNavigationTargetEvent<
        TCallback = (details: _OnCreatedNavigationTargetDetails) => void
    > {
        addListener(cb: TCallback, filters?: EventUrlFilters): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnReferenceFragmentUpdatedDetails {
        /** The ID of the tab in which the navigation occurs. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number | undefined;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab.
         */
        frameId: number;
        /**
         * Cause of the navigation.
         * @deprecated Unsupported on Firefox at this time.
         */
        transitionType?: TransitionType | undefined;
        /**
         * A list of transition qualifiers.
         * @deprecated Unsupported on Firefox at this time.
         */
        transitionQualifiers?: TransitionQualifier[] | undefined;
        /** The time when the navigation was committed, in milliseconds since the epoch. */
        timeStamp: number;
    }

    interface _WebNavigationOnReferenceFragmentUpdatedEvent<
        TCallback = (details: _OnReferenceFragmentUpdatedDetails) => void
    > {
        addListener(cb: TCallback, filters?: EventUrlFilters): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnTabReplacedDetails {
        /** The ID of the tab that was replaced. */
        replacedTabId: number;
        /** The ID of the tab that replaced the old tab. */
        tabId: number;
        /** The time when the replacement happened, in milliseconds since the epoch. */
        timeStamp: number;
    }

    interface _OnHistoryStateUpdatedDetails {
        /** The ID of the tab in which the navigation occurs. */
        tabId: number;
        url: string;
        /**
         * The ID of the process runs the renderer for this tab.
         * @deprecated Unsupported on Firefox at this time.
         */
        processId?: number | undefined;
        /**
         * 0 indicates the navigation happens in the tab content window; a positive value indicates navigation in a subframe. Frame IDs are unique within a tab.
         */
        frameId: number;
        /**
         * Cause of the navigation.
         * @deprecated Unsupported on Firefox at this time.
         */
        transitionType?: TransitionType | undefined;
        /**
         * A list of transition qualifiers.
         * @deprecated Unsupported on Firefox at this time.
         */
        transitionQualifiers?: TransitionQualifier[] | undefined;
        /** The time when the navigation was committed, in milliseconds since the epoch. */
        timeStamp: number;
    }

    interface _WebNavigationOnHistoryStateUpdatedEvent<
        TCallback = (details: _OnHistoryStateUpdatedDetails) => void
    > {
        addListener(cb: TCallback, filters?: EventUrlFilters): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    /* webNavigation functions */
    /**
     * Retrieves information about the given frame. A frame refers to an <iframe> or a <frame> of a web page and is identified by a tab ID and a frame ID.
     * @param details Information about the frame to retrieve information about.
     */
    function getFrame(details: _GetFrameDetails): Promise<_GetFrameReturnDetails>;

    /**
     * Retrieves information about all frames of a given tab.
     * @param details Information about the tab to retrieve all frames from.
     */
    function getAllFrames(details: _GetAllFramesDetails): Promise<_GetAllFramesReturnDetails[]>;

    /* webNavigation events */
    /** Fired when a navigation is about to occur. */
    const onBeforeNavigate: _WebNavigationOnBeforeNavigateEvent;

    /**
     * Fired when a navigation is committed. The document (and the resources it refers to, such as images and subframes) might still be downloading, but at least part of the document has been received from the server and the browser has decided to switch to the new document.
     */
    const onCommitted: _WebNavigationOnCommittedEvent;

    /** Fired when the page's DOM is fully constructed, but the referenced resources may not finish loading. */
    const onDOMContentLoaded: _WebNavigationOnDOMContentLoadedEvent;

    /** Fired when a document, including the resources it refers to, is completely loaded and initialized. */
    const onCompleted: _WebNavigationOnCompletedEvent;

    /**
     * Fired when an error occurs and the navigation is aborted. This can happen if either a network error occurred, or the user aborted the navigation.
     */
    const onErrorOccurred: _WebNavigationOnErrorOccurredEvent;

    /** Fired when a new window, or a new tab in an existing window, is created to host a navigation. */
    const onCreatedNavigationTarget: _WebNavigationOnCreatedNavigationTargetEvent;

    /**
     * Fired when the reference fragment of a frame was updated. All future events for that frame will use the updated URL.
     */
    const onReferenceFragmentUpdated: _WebNavigationOnReferenceFragmentUpdatedEvent;

    /** Fired when the contents of the tab is replaced by a different (usually previously pre-rendered) tab. */
    const onTabReplaced: WebExtEvent<(details: _OnTabReplacedDetails) => void>;

    /**
     * Fired when the frame's history was updated to a new URL. All future events for that frame will use the updated URL.
     */
    const onHistoryStateUpdated: _WebNavigationOnHistoryStateUpdatedEvent;
}

/**
 * Use the `browser.webRequest` API to observe and analyze traffic and to intercept, block, or modify requests in-flight.
 *
 * Permissions: `webRequest`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.webRequest {
    /* webRequest types */
    type ResourceType =
        | 'main_frame'
        | 'sub_frame'
        | 'stylesheet'
        | 'script'
        | 'image'
        | 'object'
        | 'object_subrequest'
        | 'xmlhttprequest'
        | 'xslt'
        | 'ping'
        | 'beacon'
        | 'xml_dtd'
        | 'font'
        | 'media'
        | 'websocket'
        | 'csp_report'
        | 'imageset'
        | 'web_manifest'
        | 'speculative'
        | 'other';

    type OnBeforeRequestOptions = 'blocking' | 'requestBody';

    type OnBeforeSendHeadersOptions = 'requestHeaders' | 'blocking';

    type OnSendHeadersOptions = 'requestHeaders';

    type OnHeadersReceivedOptions = 'blocking' | 'responseHeaders';

    type OnAuthRequiredOptions = 'responseHeaders' | 'blocking' | 'asyncBlocking';

    type OnResponseStartedOptions = 'responseHeaders';

    type OnBeforeRedirectOptions = 'responseHeaders';

    type OnCompletedOptions = 'responseHeaders';

    /** An object describing filters to apply to webRequest events. */
    interface RequestFilter {
        /** A list of URLs or URL patterns. Requests that cannot match any of the URLs will be filtered out. */
        urls: string[];
        /** A list of request types. Requests that cannot match any of the types will be filtered out. */
        types?: ResourceType[] | undefined;
        tabId?: number | undefined;
        windowId?: number | undefined;
        /** If provided, requests that do not match the incognito state will be filtered out. */
        incognito?: boolean | undefined;
    }

    /**
     * An array of HTTP headers. Each header is represented as a dictionary containing the keys `name` and either `value` or `binaryValue`.
     */
    type HttpHeaders = _HttpHeaders[];

    /**
     * Returns value for event handlers that have the 'blocking' extraInfoSpec applied. Allows the event handler to modify network requests.
     */
    interface BlockingResponse {
        /**
         * If true, the request is cancelled. Used in onBeforeRequest, this prevents the request from being sent.
         */
        cancel?: boolean | undefined;
        /**
         * Only used as a response to the onBeforeRequest and onHeadersReceived events. If set, the original request is prevented from being sent/completed and is instead redirected to the given URL. Redirections to non-HTTP schemes such as data: are allowed. Redirects initiated by a redirect action use the original request method for the redirect, with one exception: If the redirect is initiated at the onHeadersReceived stage, then the redirect will be issued using the GET method.
         */
        redirectUrl?: string | undefined;
        /**
         * Only used as a response to the onBeforeRequest event. If set, the original request is prevented from being sent/completed and is instead upgraded to a secure request. If any extension returns `redirectUrl` during onBeforeRequest, `upgradeToSecure` will have no affect.
         */
        upgradeToSecure?: boolean | undefined;
        /**
         * Only used as a response to the onBeforeSendHeaders event. If set, the request is made with these request headers instead.
         */
        requestHeaders?: HttpHeaders | undefined;
        /**
         * Only used as a response to the onHeadersReceived event. If set, the server is assumed to have responded with these response headers instead. Only return `responseHeaders` if you really want to modify the headers in order to limit the number of conflicts (only one extension may modify `responseHeaders` for each request).
         */
        responseHeaders?: HttpHeaders | undefined;
        /**
         * Only used as a response to the onAuthRequired event. If set, the request is made using the supplied credentials.
         */
        authCredentials?: _BlockingResponseAuthCredentials | undefined;
    }

    /** Contains the certificate properties of the request if it is a secure request. */
    interface CertificateInfo {
        subject: string;
        issuer: string;
        /** Contains start and end timestamps. */
        validity: _CertificateInfoValidity;
        fingerprint: _CertificateInfoFingerprint;
        serialNumber: string;
        isBuiltInRoot: boolean;
        subjectPublicKeyInfoDigest: _CertificateInfoSubjectPublicKeyInfoDigest;
        rawDER?: number[] | undefined;
    }

    type CertificateTransparencyStatus =
        | 'not_applicable'
        | 'policy_compliant'
        | 'policy_not_enough_scts'
        | 'policy_not_diverse_scts';

    type TransportWeaknessReasons = 'cipher';

    /** Contains the security properties of the request (ie. SSL/TLS information). */
    interface SecurityInfo {
        state: _SecurityInfoState;
        /** Error message if state is "broken" */
        errorMessage?: string | undefined;
        /** Protocol version if state is "secure" */
        protocolVersion?: _SecurityInfoProtocolVersion | undefined;
        /** The cipher suite used in this request if state is "secure". */
        cipherSuite?: string | undefined;
        /** The key exchange algorithm used in this request if state is "secure". */
        keaGroupName?: string | undefined;
        /** The signature scheme used in this request if state is "secure". */
        signatureSchemeName?: string | undefined;
        /**
         * Certificate data if state is "secure". Will only contain one entry unless `certificateChain` is passed as an option.
         */
        certificates: CertificateInfo[];
        /** The domain name does not match the certificate domain. */
        isDomainMismatch?: boolean | undefined;
        isExtendedValidation?: boolean | undefined;
        /**
         * The certificate is either expired or is not yet valid. See `CertificateInfo.validity` for start and end dates.
         */
        isNotValidAtThisTime?: boolean | undefined;
        isUntrusted?: boolean | undefined;
        /**
         * Certificate transparency compliance per RFC 6962\. See `https://www.certificate-transparency.org/what-is-ct` for more information.
         */
        certificateTransparencyStatus?: CertificateTransparencyStatus | undefined;
        /** True if host uses Strict Transport Security and state is "secure". */
        hsts?: boolean | undefined;
        /** True if host uses Public Key Pinning and state is "secure". */
        hpkp?: string | undefined;
        /** list of reasons that cause the request to be considered weak, if state is "weak" */
        weaknessReasons?: TransportWeaknessReasons[] | undefined;
    }

    /** Contains data uploaded in a URL request. */
    interface UploadData {
        /** An ArrayBuffer with a copy of the data. */
        bytes?: any;
        /** A string with the file's path and name. */
        file?: string | undefined;
    }

    /** Tracking flags that match our internal tracking classification */
    type UrlClassificationFlags =
        | 'fingerprinting'
        | 'fingerprinting_content'
        | 'cryptomining'
        | 'cryptomining_content'
        | 'tracking'
        | 'tracking_ad'
        | 'tracking_analytics'
        | 'tracking_social'
        | 'tracking_content'
        | 'any_basic_tracking'
        | 'any_strict_tracking'
        | 'any_social_tracking';

    /** If the request has been classified this is an array of `UrlClassificationFlags`. */
    type UrlClassificationParty = UrlClassificationFlags[];

    interface UrlClassification {
        /** Classification flags if the request has been classified and it is first party. */
        firstParty: UrlClassificationParty;
        /**
         * Classification flags if the request has been classified and it or its window hierarchy is third party.
         */
        thirdParty: UrlClassificationParty;
    }

    /** An object you can use to monitor and modify HTTP responses. */
    interface StreamFilter {
        /** Describes the current status of the stream. */
        status: _StreamFilterStatus;
        /** A string that will contain an error message after the onerror event has fired. */
        error: string;
        /** Event handler which is called when an error has occurred. */
        onerror: ((event: Event) => void) | null;
        /** Event handler which is called when the stream has no more data to deliver and has closed. */
        onstop: ((event: Event) => void) | null;
        /** Event handler which is called when the stream is about to start receiving data. */
        onstart: ((event: Event) => void) | null;
        /** Event handler which is called when incoming data is available. */
        ondata: ((event: _StreamFilterOndataEvent) => void) | null;
        /** Closes the request. */
        close(): void;
        /** Disconnects the filter from the request. */
        disconnect(): void;
        /** Suspends processing of the request. */
        suspend(): void;
        /** Resumes processing of the request. */
        resume(): void;
        /** Writes some data to the output stream. */
        write(data: Uint8Array | ArrayBuffer): void;
    }

    interface _HttpHeaders {
        /** Name of the HTTP header. */
        name: string;
        /** Value of the HTTP header if it can be represented by UTF-8. */
        value?: string | undefined;
        /**
         * Value of the HTTP header if it cannot be represented by UTF-8, stored as individual byte values (0..255).
         */
        binaryValue?: number[] | undefined;
    }

    /**
     * Only used as a response to the onAuthRequired event. If set, the request is made using the supplied credentials.
     */
    interface _BlockingResponseAuthCredentials {
        username: string;
        password: string;
    }

    /** Contains start and end timestamps. */
    interface _CertificateInfoValidity {
        start: number;
        end: number;
    }

    interface _CertificateInfoFingerprint {
        sha1: string;
        sha256: string;
    }

    interface _CertificateInfoSubjectPublicKeyInfoDigest {
        sha256: string;
    }

    type _SecurityInfoState = 'insecure' | 'weak' | 'broken' | 'secure';

    /** Protocol version if state is "secure" */
    type _SecurityInfoProtocolVersion = 'TLSv1' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | 'unknown';

    /** Describes the current status of the stream. */
    type _StreamFilterStatus =
        | 'uninitialized'
        | 'transferringdata'
        | 'finishedtransferringdata'
        | 'suspended'
        | 'closed'
        | 'disconnected'
        | 'failed';

    interface _StreamFilterOndataEvent extends Event {
        data: ArrayBuffer;
    }

    interface _GetSecurityInfoOptions {
        /** Include the entire certificate chain. */
        certificateChain?: boolean | undefined;
        /** Include raw certificate data for processing by the extension. */
        rawDER?: boolean | undefined;
    }

    /** Contains the HTTP request body data. Only provided if extraInfoSpec contains 'requestBody'. */
    interface _OnBeforeRequestDetailsRequestBody {
        /** Errors when obtaining request body data. */
        error?: string | undefined;
        /**
         * If the request method is POST and the body is a sequence of key-value pairs encoded in UTF8, encoded as either multipart/form-data, or application/x-www-form-urlencoded, this dictionary is present and for each key contains the list of all values for that key. If the data is of another media type, or if it is malformed, the dictionary is not present. An example value of this dictionary is {'key': ['value1', 'value2']}.
         */
        formData?: object | undefined;
        /**
         * If the request method is PUT or POST, and the body is not already parsed in formData, then the unparsed request body elements are contained in this array.
         */
        raw?: UploadData[] | undefined;
    }

    interface _OnBeforeRequestDetails {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** True for private browsing requests. */
        incognito?: boolean | undefined;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId?: string | undefined;
        /** URL of the resource that triggered this request. */
        originUrl?: string | undefined;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string | undefined;
        /** Contains the HTTP request body data. Only provided if extraInfoSpec contains 'requestBody'. */
        requestBody?: _OnBeforeRequestDetailsRequestBody | undefined;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /** Tracking classification if the request has been classified. */
        urlClassification?: UrlClassification | undefined;
        /** Indicates if this request and its content window hierarchy is third party. */
        thirdParty: boolean;
    }

    interface _WebRequestOnBeforeRequestEvent<
        TCallback = (
            details: _OnBeforeRequestDetails
        ) => BlockingResponse | Promise<BlockingResponse> | void
    > {
        addListener(
            cb: TCallback,
            filter: RequestFilter,
            extraInfoSpec?: OnBeforeRequestOptions[]
        ): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnBeforeSendHeadersDetails {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** True for private browsing requests. */
        incognito?: boolean | undefined;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId?: string | undefined;
        /** URL of the resource that triggered this request. */
        originUrl?: string | undefined;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string | undefined;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /** The HTTP request headers that are going to be sent out with this request. */
        requestHeaders?: HttpHeaders | undefined;
        /** Tracking classification if the request has been classified. */
        urlClassification?: UrlClassification | undefined;
        /** Indicates if this request and its content window hierarchy is third party. */
        thirdParty: boolean;
    }

    interface _WebRequestOnBeforeSendHeadersEvent<
        TCallback = (
            details: _OnBeforeSendHeadersDetails
        ) => BlockingResponse | Promise<BlockingResponse> | void
    > {
        addListener(
            cb: TCallback,
            filter: RequestFilter,
            extraInfoSpec?: OnBeforeSendHeadersOptions[]
        ): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnSendHeadersDetails {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** True for private browsing requests. */
        incognito?: boolean | undefined;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId?: string | undefined;
        /** URL of the resource that triggered this request. */
        originUrl?: string | undefined;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string | undefined;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /** The HTTP request headers that have been sent out with this request. */
        requestHeaders?: HttpHeaders | undefined;
        /** Tracking classification if the request has been classified. */
        urlClassification?: UrlClassification | undefined;
        /** Indicates if this request and its content window hierarchy is third party. */
        thirdParty: boolean;
    }

    interface _WebRequestOnSendHeadersEvent<TCallback = (details: _OnSendHeadersDetails) => void> {
        addListener(
            cb: TCallback,
            filter: RequestFilter,
            extraInfoSpec?: OnSendHeadersOptions[]
        ): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnHeadersReceivedDetails {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** True for private browsing requests. */
        incognito?: boolean | undefined;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId?: string | undefined;
        /** URL of the resource that triggered this request. */
        originUrl?: string | undefined;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string | undefined;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /**
         * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line).
         */
        statusLine: string;
        /** The HTTP response headers that have been received with this response. */
        responseHeaders?: HttpHeaders | undefined;
        /** Standard HTTP status code returned by the server. */
        statusCode: number;
        /** Tracking classification if the request has been classified. */
        urlClassification?: UrlClassification | undefined;
        /** Indicates if this request and its content window hierarchy is third party. */
        thirdParty: boolean;
    }

    interface _WebRequestOnHeadersReceivedEvent<
        TCallback = (
            details: _OnHeadersReceivedDetails
        ) => BlockingResponse | Promise<BlockingResponse> | void
    > {
        addListener(
            cb: TCallback,
            filter: RequestFilter,
            extraInfoSpec?: OnHeadersReceivedOptions[]
        ): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    /** The server requesting authentication. */
    interface _OnAuthRequiredDetailsChallenger {
        host: string;
        port: number;
    }

    interface _OnAuthRequiredDetails {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** True for private browsing requests. */
        incognito?: boolean | undefined;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId?: string | undefined;
        /** URL of the resource that triggered this request. */
        originUrl?: string | undefined;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string | undefined;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /** The authentication scheme, e.g. Basic or Digest. */
        scheme: string;
        /** The authentication realm provided by the server, if there is one. */
        realm?: string | undefined;
        /** The server requesting authentication. */
        challenger: _OnAuthRequiredDetailsChallenger;
        /** True for Proxy-Authenticate, false for WWW-Authenticate. */
        isProxy: boolean;
        /** The HTTP response headers that were received along with this response. */
        responseHeaders?: HttpHeaders | undefined;
        /**
         * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers.
         */
        statusLine: string;
        /** Standard HTTP status code returned by the server. */
        statusCode: number;
        /** Tracking classification if the request has been classified. */
        urlClassification?: UrlClassification | undefined;
        /** Indicates if this request and its content window hierarchy is third party. */
        thirdParty: boolean;
    }

    interface _WebRequestOnAuthRequiredEvent<
        TCallback = (
            details: _OnAuthRequiredDetails
        ) => BlockingResponse | Promise<BlockingResponse> | void
    > {
        addListener(
            cb: TCallback,
            filter: RequestFilter,
            extraInfoSpec?: OnAuthRequiredOptions[]
        ): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnResponseStartedDetails {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** True for private browsing requests. */
        incognito?: boolean | undefined;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId?: string | undefined;
        /** URL of the resource that triggered this request. */
        originUrl?: string | undefined;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string | undefined;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /**
         * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
         */
        ip?: string | undefined;
        /** Indicates if this response was fetched from disk cache. */
        fromCache: boolean;
        /** Standard HTTP status code returned by the server. */
        statusCode: number;
        /** The HTTP response headers that were received along with this response. */
        responseHeaders?: HttpHeaders | undefined;
        /**
         * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers.
         */
        statusLine: string;
        /** Tracking classification if the request has been classified. */
        urlClassification?: UrlClassification | undefined;
        /** Indicates if this request and its content window hierarchy is third party. */
        thirdParty: boolean;
    }

    interface _WebRequestOnResponseStartedEvent<
        TCallback = (details: _OnResponseStartedDetails) => void
    > {
        addListener(
            cb: TCallback,
            filter: RequestFilter,
            extraInfoSpec?: OnResponseStartedOptions[]
        ): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnBeforeRedirectDetails {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** True for private browsing requests. */
        incognito?: boolean | undefined;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId?: string | undefined;
        /** URL of the resource that triggered this request. */
        originUrl?: string | undefined;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string | undefined;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /**
         * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
         */
        ip?: string | undefined;
        /** Indicates if this response was fetched from disk cache. */
        fromCache: boolean;
        /** Standard HTTP status code returned by the server. */
        statusCode: number;
        /** The new URL. */
        redirectUrl: string;
        /** The HTTP response headers that were received along with this redirect. */
        responseHeaders?: HttpHeaders | undefined;
        /**
         * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers.
         */
        statusLine: string;
        /** Tracking classification if the request has been classified. */
        urlClassification?: UrlClassification | undefined;
        /** Indicates if this request and its content window hierarchy is third party. */
        thirdParty: boolean;
    }

    interface _WebRequestOnBeforeRedirectEvent<
        TCallback = (details: _OnBeforeRedirectDetails) => void
    > {
        addListener(
            cb: TCallback,
            filter: RequestFilter,
            extraInfoSpec?: OnBeforeRedirectOptions[]
        ): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnCompletedDetails {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** True for private browsing requests. */
        incognito?: boolean | undefined;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId?: string | undefined;
        /** URL of the resource that triggered this request. */
        originUrl?: string | undefined;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string | undefined;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /**
         * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
         */
        ip?: string | undefined;
        /** Indicates if this response was fetched from disk cache. */
        fromCache: boolean;
        /** Standard HTTP status code returned by the server. */
        statusCode: number;
        /** The HTTP response headers that were received along with this response. */
        responseHeaders?: HttpHeaders | undefined;
        /**
         * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers.
         */
        statusLine: string;
        /** Tracking classification if the request has been classified. */
        urlClassification: UrlClassification;
        /** Indicates if this request and its content window hierarchy is third party. */
        thirdParty: boolean;
        /** For http requests, the bytes transferred in the request. Only available in onCompleted. */
        requestSize: number;
        /** For http requests, the bytes received in the request. Only available in onCompleted. */
        responseSize: number;
    }

    interface _WebRequestOnCompletedEvent<TCallback = (details: _OnCompletedDetails) => void> {
        addListener(
            cb: TCallback,
            filter: RequestFilter,
            extraInfoSpec?: OnCompletedOptions[]
        ): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnErrorOccurredDetails {
        /**
         * The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request.
         */
        requestId: string;
        url: string;
        /** Standard HTTP method. */
        method: string;
        /**
         * The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (`type` is `main_frame` or `sub_frame`), `frameId` indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab.
         */
        frameId: number;
        /** ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists. */
        parentFrameId: number;
        /** True for private browsing requests. */
        incognito?: boolean | undefined;
        /** The cookie store ID of the contextual identity. */
        cookieStoreId?: string | undefined;
        /** URL of the resource that triggered this request. */
        originUrl?: string | undefined;
        /** URL of the page into which the requested resource will be loaded. */
        documentUrl?: string | undefined;
        /** The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab. */
        tabId: number;
        /** How the requested resource will be used. */
        type: ResourceType;
        /** The time when this signal is triggered, in milliseconds since the epoch. */
        timeStamp: number;
        /**
         * The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address.
         */
        ip?: string | undefined;
        /** Indicates if this response was fetched from disk cache. */
        fromCache: boolean;
        /**
         * The error description. This string is _not_ guaranteed to remain backwards compatible between releases. You must not parse and act based upon its content.
         */
        error: string;
        /** Tracking classification if the request has been classified. */
        urlClassification?: UrlClassification | undefined;
        /** Indicates if this request and its content window hierarchy is third party. */
        thirdParty: boolean;
    }

    interface _WebRequestOnErrorOccurredEvent<
        TCallback = (details: _OnErrorOccurredDetails) => void
    > {
        addListener(cb: TCallback, filter: RequestFilter): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    /* webRequest properties */
    /**
     * The maximum number of times that `handlerBehaviorChanged` can be called per 10 minute sustained interval. `handlerBehaviorChanged` is an expensive function call that shouldn't be called often.
     */
    const MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

    /* webRequest functions */
    /**
     * Needs to be called when the behavior of the webRequest handlers has changed to prevent incorrect handling due to caching. This function call is expensive. Don't call it often.
     */
    function handlerBehaviorChanged(): Promise<void>;

    /** ... */
    function filterResponseData(requestId: string): StreamFilter;

    /**
     * Retrieves the security information for the request. Returns a promise that will resolve to a SecurityInfo object.
     */
    function getSecurityInfo(
        requestId: string,
        options?: _GetSecurityInfoOptions
    ): Promise<SecurityInfo>;

    /* webRequest events */
    /**
     * Fired when a request is about to occur.
     * @returns If "blocking" is specified in the "extraInfoSpec" parameter, the event listener should return an object of this type.
     */
    const onBeforeRequest: _WebRequestOnBeforeRequestEvent;

    /**
     * Fired before sending an HTTP request, once the request headers are available. This may occur after a TCP connection is made to the server, but before any HTTP data is sent.
     * @returns If "blocking" is specified in the "extraInfoSpec" parameter, the event listener should return an object of this type.
     */
    const onBeforeSendHeaders: _WebRequestOnBeforeSendHeadersEvent;

    /**
     * Fired just before a request is going to be sent to the server (modifications of previous onBeforeSendHeaders callbacks are visible by the time onSendHeaders is fired).
     */
    const onSendHeaders: _WebRequestOnSendHeadersEvent;

    /**
     * Fired when HTTP response headers of a request have been received.
     * @returns If "blocking" is specified in the "extraInfoSpec" parameter, the event listener should return an object of this type.
     */
    const onHeadersReceived: _WebRequestOnHeadersReceivedEvent;

    /**
     * Fired when an authentication failure is received. The listener has three options: it can provide authentication credentials, it can cancel the request and display the error page, or it can take no action on the challenge. If bad user credentials are provided, this may be called multiple times for the same request.
     * @returns If "blocking" is specified in the "extraInfoSpec" parameter, the event listener should return an object of this type.
     */
    const onAuthRequired: _WebRequestOnAuthRequiredEvent;

    /**
     * Fired when the first byte of the response body is received. For HTTP requests, this means that the status line and response headers are available.
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
 * Use the `browser.bookmarks` API to create, organize, and otherwise manipulate bookmarks. Also see Override Pages, which you can use to create a custom Bookmark Manager page.
 *
 * Permissions: `bookmarks`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.bookmarks {
    /* bookmarks types */
    /**
     * Indicates the reason why this node is unmodifiable. The `managed` value indicates that this node was configured by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the user and the extension (default).
     */
    type BookmarkTreeNodeUnmodifiable = 'managed';

    /** Indicates the type of a BookmarkTreeNode, which can be one of bookmark, folder or separator. */
    type BookmarkTreeNodeType = 'bookmark' | 'folder' | 'separator';

    /**
     * A node (either a bookmark or a folder) in the bookmark tree. Child nodes are ordered within their parent folder.
     */
    interface BookmarkTreeNode {
        /**
         * The unique identifier for the node. IDs are unique within the current profile, and they remain valid even after the browser is restarted.
         */
        id: string;
        /** The `id` of the parent folder. Omitted for the root node. */
        parentId?: string | undefined;
        /** The 0-based position of this node within its parent folder. */
        index?: number | undefined;
        /** The URL navigated to when a user clicks the bookmark. Omitted for folders. */
        url?: string | undefined;
        /** The text displayed for the node. */
        title: string;
        /** When this node was created, in milliseconds since the epoch (`new Date(dateAdded)`). */
        dateAdded?: number | undefined;
        /** When the contents of this folder last changed, in milliseconds since the epoch. */
        dateGroupModified?: number | undefined;
        /**
         * Indicates the reason why this node is unmodifiable. The `managed` value indicates that this node was configured by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the user and the extension (default).
         */
        unmodifiable?: BookmarkTreeNodeUnmodifiable | undefined;
        /** Indicates the type of the BookmarkTreeNode, which can be one of bookmark, folder or separator. */
        type?: BookmarkTreeNodeType | undefined;
        /** An ordered list of children of this node. */
        children?: BookmarkTreeNode[] | undefined;
    }

    /** Object passed to the create() function. */
    interface CreateDetails {
        /** Defaults to the Other Bookmarks folder. */
        parentId?: string | undefined;
        index?: number | undefined;
        title?: string | undefined;
        url?: string | undefined;
        /** Indicates the type of BookmarkTreeNode to create, which can be one of bookmark, folder or separator. */
        type?: BookmarkTreeNodeType | undefined;
    }

    interface _MoveDestination {
        parentId?: string | undefined;
        index?: number | undefined;
    }

    interface _UpdateChanges {
        title?: string | undefined;
        url?: string | undefined;
    }

    interface _OnRemovedRemoveInfo {
        parentId: string;
        index: number;
        node: BookmarkTreeNode;
    }

    interface _OnChangedChangeInfo {
        title: string;
        url?: string | undefined;
    }

    interface _OnMovedMoveInfo {
        parentId: string;
        index: number;
        oldParentId: string;
        oldIndex: number;
    }

    interface _OnChildrenReorderedReorderInfo {
        childIds: string[];
    }

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
     * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties.
     * @param query Either a string of words that are matched against bookmark URLs and titles, or an object. If an object, the properties `query`, `url`, and `title` may be specified and bookmarks matching all specified properties will be produced.
     */
    function search(
        query:
            | string
            | {
                  /** A string of words that are matched against bookmark URLs and titles. */
                  query?: string | undefined;
                  /** The URL of the bookmark; matches verbatim. Note that folders have no URL. */
                  url?: string | undefined;
                  /** The title of the bookmark; matches verbatim. */
                  title?: string | undefined;
              }
    ): Promise<BookmarkTreeNode[]>;

    /**
     * Creates a bookmark or folder under the specified parentId. If url is NULL or missing, it will be a folder.
     */
    function create(bookmark: CreateDetails): Promise<BookmarkTreeNode>;

    /** Moves the specified BookmarkTreeNode to the provided location. */
    function move(id: string, destination: _MoveDestination): Promise<BookmarkTreeNode>;

    /**
     * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified properties will be left unchanged. **Note:** Currently, only 'title' and 'url' are supported.
     */
    function update(id: string, changes: _UpdateChanges): Promise<BookmarkTreeNode>;

    /**
     * Removes a bookmark or an empty bookmark folder, given the node's ID.
     */
    function remove(id: string): Promise<BookmarkTreeNode>;

    /**
     * Recursively removes a bookmark folder; that is, given the ID of a folder node, removes that node and all its descendants.
     */
    function removeTree(id: string): Promise<BookmarkTreeNode>;

    /* bookmarks events */
    /** Fired when a bookmark or folder is created. */
    const onCreated: WebExtEvent<(id: string, bookmark: BookmarkTreeNode) => void>;

    /**
     * Fired when a bookmark or folder is removed. When a folder is removed recursively, a single notification is fired for the folder, and none for its contents.
     */
    const onRemoved: WebExtEvent<(id: string, removeInfo: _OnRemovedRemoveInfo) => void>;

    /**
     * Fired when a bookmark or folder changes. **Note:** Currently, only title and url changes trigger this.
     */
    const onChanged: WebExtEvent<(id: string, changeInfo: _OnChangedChangeInfo) => void>;

    /** Fired when a bookmark or folder is moved to a different parent folder. */
    const onMoved: WebExtEvent<(id: string, moveInfo: _OnMovedMoveInfo) => void>;

    /**
     * Fired when the children of a folder have changed their order due to the order being sorted in the UI. This is not called as a result of a move().
     * @deprecated Unsupported on Firefox at this time.
     */
    const onChildrenReordered:
        | WebExtEvent<(id: string, reorderInfo: _OnChildrenReorderedReorderInfo) => void>
        | undefined;
}

/**
 * Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to open the browser action or send a command to the xtension.
 *
 * Manifest keys: `commands`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.commands {
    /* commands types */
    interface Command {
        /** The name of the Extension Command */
        name?: string | undefined;
        /** The Extension Command description */
        description?: string | undefined;
        /** The shortcut active for this command, or blank if not active. */
        shortcut?: string | undefined;
    }

    /** The new description for the command. */
    interface _UpdateDetail {
        /** The name of the command. */
        name: string;
        /** The new description for the command. */
        description?: string | undefined;
        shortcut?: string | undefined;
    }

    /* commands functions */
    /**
     * Update the details of an already defined command.
     * @param detail The new description for the command.
     */
    function update(detail: _UpdateDetail): Promise<void>;

    /**
     * Reset a command's details to what is specified in the manifest.
     * @param name The name of the command.
     */
    function reset(name: string): Promise<void>;

    /** Returns all the registered extension commands for this extension and their shortcut (if active). */
    function getAll(): Promise<Command[]>;

    /* commands events */
    /** Fired when a registered command is activated using a keyboard shortcut. */
    const onCommand: WebExtEvent<(command: string) => void>;
}

/**
 * Manifest keys: `devtools_page`
 *
 * Allowed in: Devtools pages only
 */
declare namespace browser.devtools {}

/**
 * Use the `browser.devtools.inspectedWindow` API to interact with the inspected window: obtain the tab ID for the inspected page, evaluate the code in the context of the inspected window, reload the page, or obtain the list of resources within the page.
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
         * @param commit True if the user has finished editing the resource, and the new content of the resource should be persisted; false if this is a minor change sent in progress of the user editing the resource.
         * @deprecated Unsupported on Firefox at this time.
         */
        setContent?(content: string, commit: boolean): Promise<{ [key: string]: any }>;
    }

    /** An object providing details if an exception occurred while evaluating the expression. */
    interface _EvalReturnExceptionInfo {
        /** Set if the error occurred on the DevTools side before the expression is evaluated. */
        isError: boolean;
        /** Set if the error occurred on the DevTools side before the expression is evaluated. */
        code: string;
        /** Set if the error occurred on the DevTools side before the expression is evaluated. */
        description: string;
        /**
         * Set if the error occurred on the DevTools side before the expression is evaluated, contains the array of the values that may be substituted into the description string to provide more information about the cause of the error.
         */
        details: any[];
        /** Set if the evaluated code produces an unhandled exception. */
        isException: boolean;
        /** Set if the evaluated code produces an unhandled exception. */
        value: string;
    }

    /** The options parameter can contain one or more options. */
    interface _EvalOptions {
        /**
         * If specified, the expression is evaluated on the iframe whose URL matches the one specified. By default, the expression is evaluated in the top frame of the inspected page.
         * @deprecated Unsupported on Firefox at this time.
         */
        frameURL?: string | undefined;
        /**
         * Evaluate the expression in the context of the content script of the calling extension, provided that the content script is already injected into the inspected page. If not, the expression is not evaluated and the callback is invoked with the exception parameter set to an object that has the `isError` field set to true and the `code` field set to `E_NOTFOUND`.
         * @deprecated Unsupported on Firefox at this time.
         */
        useContentScriptContext?: boolean | undefined;
        /**
         * Evaluate the expression in the context of a content script of an extension that matches the specified origin. If given, contextSecurityOrigin overrides the 'true' setting on userContentScriptContext.
         * @deprecated Unsupported on Firefox at this time.
         */
        contextSecurityOrigin?: string | undefined;
    }

    interface _ReloadReloadOptions {
        /**
         * When true, the loader will bypass the cache for all inspected page resources loaded before the `load` event is fired. The effect is similar to pressing Ctrl+Shift+R in the inspected window or within the Developer Tools window.
         */
        ignoreCache?: boolean | undefined;
        /**
         * If specified, the string will override the value of the `User-Agent` HTTP header that's sent while loading the resources of the inspected page. The string will also override the value of the `navigator.userAgent` property that's returned to any scripts that are running within the inspected page.
         */
        userAgent?: string | undefined;
        /**
         * If specified, the script will be injected into every frame of the inspected page immediately upon load, before any of the frame's scripts. The script will not be injected after subsequent reloads—for example, if the user presses Ctrl+R.
         */
        injectedScript?: string | undefined;
        /**
         * If specified, this script evaluates into a function that accepts three string arguments: the source to preprocess, the URL of the source, and a function name if the source is an DOM event handler. The preprocessorerScript function should return a string to be compiled by Chrome in place of the input source. In the case that the source is a DOM event handler, the returned source must compile to a single JS function.
         * @deprecated Please avoid using this parameter, it will be removed soon.
         */
        preprocessorScript?: string | undefined;
    }

    /* devtools.inspectedWindow properties */
    /** The ID of the tab being inspected. This ID may be used with browser.tabs.* API. */
    const tabId: number;

    /* devtools.inspectedWindow functions */
    /**
     * Evaluates a JavaScript expression in the context of the main frame of the inspected page. The expression must evaluate to a JSON-compliant object, otherwise an exception is thrown. The eval function can report either a DevTools-side error or a JavaScript exception that occurs during evaluation. In either case, the `result` parameter of the callback is `undefined`. In the case of a DevTools-side error, the `isException` parameter is non-null and has `isError` set to true and `code` set to an error code. In the case of a JavaScript error, `isException` is set to true and `value` is set to the string value of thrown object.
     * @param expression An expression to evaluate.
     * @param [options] The options parameter can contain one or more options.
     */
    function eval(expression: string, options?: _EvalOptions): Promise<object>;

    /** Reloads the inspected page. */
    function reload(reloadOptions?: _ReloadReloadOptions): void;

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
     * Fired when a new revision of the resource is committed (e.g. user saves an edited version of the resource in the Developer Tools).
     * @param content New content of the resource.
     * @deprecated Unsupported on Firefox at this time.
     */
    const onResourceContentCommitted:
        | WebExtEvent<(resource: Resource, content: string) => void>
        | undefined;
}

/**
 * Use the `browser.devtools.network` API to retrieve the information about network requests displayed by the Developer Tools in the Network panel.
 *
 * Allowed in: Devtools pages only
 */
declare namespace browser.devtools.network {
    /* devtools.network types */
    /**
     * Represents a network request for a document resource (script, image and so on). See HAR Specification for reference.
     */
    interface Request {
        /** Returns content of the response body. */
        getContent(): Promise<object>;
    }

    /* devtools.network functions */
    /** Returns HAR log that contains all known network requests. */
    function getHAR(): Promise<{ [key: string]: any }>;

    /* devtools.network events */
    /**
     * Fired when a network request is finished and all request data are available.
     * @param request Description of a network request in the form of a HAR entry. See HAR specification for details.
     */
    const onRequestFinished: WebExtEvent<(request: Request) => void>;

    /**
     * Fired when the inspected window navigates to a new page.
     * @param url URL of the new page.
     */
    const onNavigated: WebExtEvent<(url: string) => void>;
}

/**
 * Use the `browser.devtools.panels` API to integrate your extension into Developer Tools window UI: create your own panels, access existing panels, and add sidebars.
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
         */
        createSidebarPane(title: string): Promise<ExtensionSidebarPane>;
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
        createSidebarPane?(title: string): Promise<ExtensionSidebarPane>;
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
         * @param iconPath Path to the icon of the button. The file should contain a 64x24-pixel image composed of two 32x24 icons. The left icon is used when the button is inactive; the right icon is displayed when the button is pressed.
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
        onShown: WebExtEvent<(window: Window) => void>;
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
         * @param expression An expression to be evaluated in context of the inspected page. JavaScript objects and DOM nodes are displayed in an expandable tree similar to the console/watch.
         * @param [rootTitle] An optional title for the root of the expression tree.
         */
        setExpression(expression: string, rootTitle?: string): Promise<void>;
        /**
         * Sets a JSON-compliant object to be displayed in the sidebar pane.
         * @param jsonObject An object to be displayed in context of the inspected page. Evaluated in the context of the caller (API client).
         * @param [rootTitle] An optional title for the root of the expression tree.
         */
        setObject(jsonObject: string, rootTitle?: string): Promise<void>;
        /**
         * Sets an HTML page to be displayed in the sidebar pane.
         * @param path Relative path of an extension page to display within the sidebar.
         */
        setPage(path: _manifest.ExtensionURL): Promise<any>;
        /**
         * Fired when the sidebar pane becomes visible as a result of user switching to the panel that hosts it.
         * @param window The JavaScript `window` object of the sidebar page, if one was set with the `setPage()` method.
         */
        onShown: WebExtEvent<(window: Window) => void>;
        /**
         * Fired when the sidebar pane becomes hidden as a result of the user switching away from the panel that hosts the sidebar pane.
         */
        onHidden: WebExtEvent<() => void>;
    }

    /** A button created by the extension. */
    interface Button {
        /**
         * Updates the attributes of the button. If some of the arguments are omitted or `null`, the corresponding attributes are not updated.
         * @deprecated Unsupported on Firefox at this time.
         */
        update?(): void;
        /**
         * Updates the attributes of the button. If some of the arguments are omitted or `null`, the corresponding attributes are not updated.
         * @param iconPath Path to the new icon of the button.
         * @param [tooltipText] Text shown as a tooltip when user hovers the mouse over the button.
         * @param [disabled] Whether the button is disabled.
         * @deprecated Unsupported on Firefox at this time.
         */
        update?(iconPath: string, tooltipText?: string, disabled?: boolean): void;

        /**
         * Updates the attributes of the button. If some of the arguments are omitted or `null`, the corresponding attributes are not updated.
         * @param tooltipText Text shown as a tooltip when user hovers the mouse over the button.
         * @param disabled Whether the button is disabled.
         * @deprecated Unsupported on Firefox at this time.
         */
        update?(tooltipText: string, disabled: boolean): void;

        /**
         * Updates the attributes of the button. If some of the arguments are omitted or `null`, the corresponding attributes are not updated.
         * @param disabled Whether the button is disabled.
         * @deprecated Unsupported on Firefox at this time.
         */
        update?(disabled: boolean): void;
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
     * @param iconPath Path of the panel's icon relative to the extension directory, or an empty string to use the default extension icon as the panel icon.
     * @param pagePath Path of the panel's HTML page relative to the extension directory.
     */
    function create(
        title: string,
        iconPath: _manifest.ExtensionURL | '',
        pagePath: _manifest.ExtensionURL
    ): Promise<ExtensionPanel>;

    /**
     * Specifies the function to be called when the user clicks a resource link in the Developer Tools window. To unset the handler, either call the method with no parameters or pass null as the parameter.
     * @deprecated Unsupported on Firefox at this time.
     */
    function setOpenResourceHandler(): Promise<devtools.inspectedWindow.Resource>;

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
    /** Search parameters. */
    interface _FindParams {
        /** Tab to query. Defaults to the active tab. */
        tabId?: number | undefined;
        /** Find only ranges with case sensitive match. */
        caseSensitive?: boolean | undefined;
        /** Find only ranges that match entire word. */
        entireWord?: boolean | undefined;
        /** Return rectangle data which describes visual position of search results. */
        includeRectData?: boolean | undefined;
        /** Return range data which provides range data in a serializable form. */
        includeRangeData?: boolean | undefined;
    }

    /** highlightResults parameters */
    interface _HighlightResultsParams {
        /** Found range to be highlighted. Default highlights all ranges. */
        rangeIndex?: number | undefined;
        /** Tab to highlight. Defaults to the active tab. */
        tabId?: number | undefined;
        /** Don't scroll to highlighted item. */
        noScroll?: boolean | undefined;
    }

    /* find functions */
    /**
     * Search for text in document and store found ranges in array, in document order.
     * @param queryphrase The string to search for.
     * @param [params] Search parameters.
     */
    function find(
        queryphrase: string,
        params?: _FindParams
    ): Promise<{
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
    function highlightResults(params?: _HighlightResultsParams): void;

    /**
     * Remove all highlighting from previous searches.
     * @param [tabId] Tab to highlight. Defaults to the active tab.
     */
    function removeHighlighting(tabId?: number): void;
}

/**
 * Use the `browser.history` API to interact with the browser's record of visited pages. You can add, remove, and query for URLs in the browser's history. To override the history page with your own version, see Override Pages.
 *
 * Permissions: `history`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.history {
    /* history types */
    /** The transition type for this visit from its referrer. */
    type TransitionType =
        | 'link'
        | 'typed'
        | 'auto_bookmark'
        | 'auto_subframe'
        | 'manual_subframe'
        | 'generated'
        | 'auto_toplevel'
        | 'form_submit'
        | 'reload'
        | 'keyword'
        | 'keyword_generated';

    /** An object encapsulating one result of a history query. */
    interface HistoryItem {
        /** The unique identifier for the item. */
        id: string;
        /** The URL navigated to by a user. */
        url?: string | undefined;
        /** The title of the page when it was last loaded. */
        title?: string | undefined;
        /** When this page was last loaded, represented in milliseconds since the epoch. */
        lastVisitTime?: number | undefined;
        /** The number of times the user has navigated to this page. */
        visitCount?: number | undefined;
        /** The number of times the user has navigated to this page by typing in the address. */
        typedCount?: number | undefined;
    }

    /** An object encapsulating one visit to a URL. */
    interface VisitItem {
        /** The unique identifier for the item. */
        id: string;
        /** The unique identifier for this visit. */
        visitId: string;
        /** When this visit occurred, represented in milliseconds since the epoch. */
        visitTime?: number | undefined;
        /** The visit ID of the referrer. */
        referringVisitId: string;
        /** The transition type for this visit from its referrer. */
        transition: TransitionType;
    }

    interface _SearchQuery {
        /** A free-text query to the history service. Leave empty to retrieve all pages. */
        text: string;
        /**
         * Limit results to those visited after this date. If not specified, this defaults to 24 hours in the past.
         */
        startTime?: extensionTypes.Date | undefined;
        /** Limit results to those visited before this date. */
        endTime?: extensionTypes.Date | undefined;
        /** The maximum number of results to retrieve. Defaults to 100. */
        maxResults?: number | undefined;
    }

    interface _GetVisitsDetails {
        /**
         * The URL for which to retrieve visit information. It must be in the format as returned from a call to history.search.
         */
        url: string;
    }

    interface _AddUrlDetails {
        /** The URL to add. Must be a valid URL that can be added to history. */
        url: string;
        /** The title of the page. */
        title?: string | undefined;
        /** The transition type for this visit from its referrer. */
        transition?: TransitionType | undefined;
        /** The date when this visit occurred. */
        visitTime?: extensionTypes.Date | undefined;
    }

    interface _DeleteUrlDetails {
        /** The URL to remove. */
        url: string;
    }

    interface _DeleteRangeRange {
        /** Items added to history after this date. */
        startTime: extensionTypes.Date;
        /** Items added to history before this date. */
        endTime: extensionTypes.Date;
    }

    interface _OnVisitRemovedRemoved {
        /** True if all history was removed. If true, then urls will be empty. */
        allHistory: boolean;
        urls: string[];
    }

    interface _OnTitleChangedChanged {
        /** The URL for which the title has changed */
        url: string;
        /** The new title for the URL. */
        title: string;
    }

    /* history functions */
    /** Searches the history for the last visit time of each page matching the query. */
    function search(query: _SearchQuery): Promise<HistoryItem[]>;

    /** Retrieves information about visits to a URL. */
    function getVisits(details: _GetVisitsDetails): Promise<VisitItem[]>;

    /**
     * Adds a URL to the history with a default visitTime of the current time and a default transition type of "link".
     */
    function addUrl(details: _AddUrlDetails): Promise<void>;

    /** Removes all occurrences of the given URL from the history. */
    function deleteUrl(details: _DeleteUrlDetails): Promise<void>;

    /**
     * Removes all items within the specified date range from the history. Pages will not be removed from the history unless all visits fall within the range.
     */
    function deleteRange(range: _DeleteRangeRange): Promise<void>;

    /** Deletes all items from the history. */
    function deleteAll(): Promise<void>;

    /* history events */
    /**
     * Fired when a URL is visited, providing the HistoryItem data for that URL. This event fires before the page has loaded.
     */
    const onVisited: WebExtEvent<(result: HistoryItem) => void>;

    /**
     * Fired when one or more URLs are removed from the history service. When all visits have been removed the URL is purged from history.
     */
    const onVisitRemoved: WebExtEvent<(removed: _OnVisitRemovedRemoved) => void>;

    /** Fired when the title of a URL is changed in the browser history. */
    const onTitleChanged: WebExtEvent<(changed: _OnTitleChangedChanged) => void>;
}

/**
 * Use the browser.contextMenus API to add items to the browser's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.
 *
 * Permissions: `contextMenus`
 */
declare namespace browser.contextMenus {
    /* contextMenus types */
    /**
     * The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other contexts except for 'tab' and 'tools_menu'.
     */
    type ContextType = _ContextType;

    /** The type of menu item. */
    type ItemType = 'normal' | 'checkbox' | 'radio' | 'separator';

    /** Information sent when a context menu item is clicked. */
    interface OnClickData {
        /** The ID of the menu item that was clicked. */
        menuItemId: number | string;
        /** The parent ID, if any, for the item clicked. */
        parentMenuItemId?: number | string | undefined;
        /** The type of view where the menu is clicked. May be unset if the menu is not associated with a view. */
        viewType?: extension.ViewType | undefined;
        /**
         * One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
         */
        mediaType?: string | undefined;
        /** If the element is a link, the text of that link. */
        linkText?: string | undefined;
        /** If the element is a link, the URL it points to. */
        linkUrl?: string | undefined;
        /** Will be present for elements with a 'src' URL. */
        srcUrl?: string | undefined;
        /**
         * The URL of the page where the menu item was clicked. This property is not set if the click occured in a context where there is no current page, such as in a launcher context menu.
         */
        pageUrl?: string | undefined;
        /** The id of the frame of the element where the context menu was clicked. */
        frameId?: number | undefined;
        /** The URL of the frame of the element where the context menu was clicked, if it was in a frame. */
        frameUrl?: string | undefined;
        /** The text for the context selection, if any. */
        selectionText?: string | undefined;
        /** A flag indicating whether the element is editable (text input, textarea, etc.). */
        editable: boolean;
        /** A flag indicating the state of a checkbox or radio item before it was clicked. */
        wasChecked?: boolean | undefined;
        /** A flag indicating the state of a checkbox or radio item after it is clicked. */
        checked?: boolean | undefined;
        /** The id of the bookmark where the context menu was clicked, if it was on a bookmark. */
        bookmarkId: string;
        /** An array of keyboard modifiers that were held while the menu item was clicked. */
        modifiers: _OnClickDataModifiers[];
        /** An integer value of button by which menu item was clicked. */
        button?: number | undefined;
        /**
         * An identifier of the clicked element, if any. Use menus.getTargetElement in the page to find the corresponding element.
         */
        targetElementId?: number | undefined;
    }

    type _ContextType =
        | 'all'
        | 'page'
        | 'frame'
        | 'selection'
        | 'link'
        | 'editable'
        | 'password'
        | 'image'
        | 'video'
        | 'audio'
        | 'launcher'
        | 'bookmark'
        | 'tab'
        | 'tools_menu'
        | 'browser_action'
        | 'page_action'
        | 'action';

    type _OnClickDataModifiers = 'Shift' | 'Alt' | 'Command' | 'Ctrl' | 'MacCtrl';

    interface _CreateCreatePropertiesIcons {
        [key: number]: string;
    }

    type _CreateCreatePropertiesCommand =
        | '_execute_browser_action'
        | '_execute_page_action'
        | '_execute_sidebar_action'
        | '_execute_action'
        | '_execute_page_action'
        | '_execute_sidebar_action';

    interface _CreateCreateProperties {
        /** The type of menu item. Defaults to 'normal' if not specified. */
        type?: ItemType | undefined;
        /**
         * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension.
         */
        id?: string | undefined;
        icons?: _CreateCreatePropertiesIcons | undefined;
        /**
         * The text to be displayed in the item; this is _required_ unless `type` is 'separator'. When the context is 'selection', you can use `%s` within the string to show the selected text. For example, if this parameter's value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the selection is "Translate 'cool' to Pig Latin".
         */
        title?: string | undefined;
        /**
         * The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items.
         */
        checked?: boolean | undefined;
        /** List of contexts this menu item will appear in. Defaults to ['page'] if not specified. */
        contexts?: ContextType[] | undefined;
        /**
         * List of view types where the menu item will be shown. Defaults to any view, including those without a viewType.
         */
        viewTypes?: extension.ViewType[] | undefined;
        /** Whether the item is visible in the menu. */
        visible?: boolean | undefined;
        /**
         * A function that will be called back when the menu item is clicked. Event pages cannot use this; instead, they should register a listener for `contextMenus.onClicked`.
         * @param info Information about the item clicked and the context where the click happened.
         * @param tab The details of the tab where the click took place. Note: this parameter only present for extensions.
         */
        onclick?: (info: OnClickData, tab: tabs.Tab) => void | undefined;
        /** The ID of a parent menu item; this makes the item a child of a previously added item. */
        parentId?: number | string | undefined;
        /**
         * Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see Match Patterns.
         */
        documentUrlPatterns?: string[] | undefined;
        /**
         * Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.
         */
        targetUrlPatterns?: string[] | undefined;
        /** Whether this context menu item is enabled or disabled. Defaults to true. */
        enabled?: boolean | undefined;
        /** Specifies a command to issue for the context click. */
        command?: string | _CreateCreatePropertiesCommand | undefined;
    }

    interface _UpdateUpdatePropertiesIcons {
        [key: number]: string;
    }

    /** The properties to update. Accepts the same values as the create function. */
    interface _UpdateUpdateProperties {
        type?: ItemType | undefined;
        icons?: _UpdateUpdatePropertiesIcons | undefined;
        title?: string | undefined;
        checked?: boolean | undefined;
        contexts?: ContextType[] | undefined;
        viewTypes?: extension.ViewType[] | undefined;
        /** Whether the item is visible in the menu. */
        visible?: boolean | undefined;
        /**
         * @param tab The details of the tab where the click took place. Note: this parameter only present for extensions.
         */
        onclick?: (info: OnClickData, tab: tabs.Tab) => void | undefined;
        /** Note: You cannot change an item to be a child of one of its own descendants. */
        parentId?: number | string | undefined;
        documentUrlPatterns?: string[] | undefined;
        targetUrlPatterns?: string[] | undefined;
        enabled?: boolean | undefined;
    }

    /**
     * ContextType to override, to allow menu items from other extensions in the menu. Currently only 'bookmark' and 'tab' are supported. showDefaults cannot be used with this option.
     */
    type _OverrideContextContextOptionsContext = 'bookmark' | 'tab';

    interface _OverrideContextContextOptions {
        /** Whether to also include default menu items in the menu. */
        showDefaults?: boolean | undefined;
        /**
         * ContextType to override, to allow menu items from other extensions in the menu. Currently only 'bookmark' and 'tab' are supported. showDefaults cannot be used with this option.
         */
        context?: _OverrideContextContextOptionsContext | undefined;
        /** Required when context is 'bookmark'. Requires 'bookmark' permission. */
        bookmarkId?: string | undefined;
        /** Required when context is 'tab'. Requires 'tabs' permission. */
        tabId?: number | undefined;
    }

    /**
     * Information about the context of the menu action and the created menu items. For more information about each property, see OnClickData. The following properties are only set if the extension has host permissions for the given context: linkUrl, linkText, srcUrl, pageUrl, frameUrl, selectionText.
     */
    interface _OnShownInfo {
        /** A list of IDs of the menu items that were shown. */
        menuIds: number | string[];
        /** A list of all contexts that apply to the menu. */
        contexts: ContextType[];
        viewType?: extension.ViewType | undefined;
        editable: boolean;
        mediaType?: string | undefined;
        linkUrl?: string | undefined;
        linkText?: string | undefined;
        srcUrl?: string | undefined;
        pageUrl?: string | undefined;
        frameUrl?: string | undefined;
        selectionText?: string | undefined;
        targetElementId?: number | undefined;
    }

    /* contextMenus properties */
    const ACTION_MENU_TOP_LEVEL_LIMIT: number;

    /* contextMenus functions */
    /**
     * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in `runtime.lastError`).
     * @param [callback] Called when the item has been created in the browser. If there were any problems creating the item, details will be available in `runtime.lastError`.
     * @returns The ID of the newly created item.
     */
    function create(
        createProperties: _CreateCreateProperties,
        callback?: () => void
    ): number | string;

    /**
     * Updates a previously created context menu item.
     * @param id The ID of the item to update.
     * @param updateProperties The properties to update. Accepts the same values as the create function.
     */
    function update(id: number | string, updateProperties: _UpdateUpdateProperties): Promise<void>;

    /**
     * Removes a context menu item.
     * @param menuItemId The ID of the context menu item to remove.
     */
    function remove(menuItemId: number | string): Promise<void>;

    /** Removes all context menu items added by this extension. */
    function removeAll(): Promise<void>;

    /**
     * Show the matching menu items from this extension instead of the default menu. This should be called during a 'contextmenu' DOM event handler, and only applies to the menu that opens after this event.
     */
    function overrideContext(contextOptions: _OverrideContextContextOptions): void;

    /**
     * Updates the extension items in the shown menu, including changes that have been made since the menu was shown. Has no effect if the menu is hidden. Rebuilding a shown menu is an expensive operation, only invoke this method when necessary.
     */
    function refresh(): Promise<any>;

    /**
     * Retrieve the element that was associated with a recent contextmenu event.
     * @param targetElementId The identifier of the clicked element, available as info.targetElementId in the menus.onShown, onClicked or onclick event.
     */
    function getTargetElement(targetElementId: number): Element | void;

    /* contextMenus events */
    /**
     * Fired when a context menu item is clicked.
     * @param info Information about the item clicked and the context where the click happened.
     * @param [tab] The details of the tab where the click took place. If the click did not take place in a tab, this parameter will be missing.
     */
    const onClicked: WebExtEvent<(info: OnClickData, tab?: tabs.Tab) => void>;

    /**
     * Fired when a menu is shown. The extension can add, modify or remove menu items and call menus.refresh() to update the menu.
     * @param info Information about the context of the menu action and the created menu items. For more information about each property, see OnClickData. The following properties are only set if the extension has host permissions for the given context: linkUrl, linkText, srcUrl, pageUrl, frameUrl, selectionText.
     * @param tab The details of the tab where the menu was opened.
     */
    const onShown: WebExtEvent<(info: _OnShownInfo, tab: tabs.Tab) => void>;

    /** Fired when a menu is hidden. This event is only fired if onShown has fired before. */
    const onHidden: WebExtEvent<() => void>;
}

/**
 * Use the browser.menus API to add items to the browser's menus. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.
 *
 * Permissions: `menus`, `menus`
 */
declare namespace browser.menus {
    /* menus types */
    /**
     * The different contexts a menu can appear in. Specifying 'all' is equivalent to the combination of all other contexts except for 'tab' and 'tools_menu'.
     */
    type ContextType = _ContextType;

    /** The type of menu item. */
    type ItemType = 'normal' | 'checkbox' | 'radio' | 'separator';

    /** Information sent when a context menu item is clicked. */
    interface OnClickData {
        /** The ID of the menu item that was clicked. */
        menuItemId: number | string;
        /** The parent ID, if any, for the item clicked. */
        parentMenuItemId?: number | string | undefined;
        /** The type of view where the menu is clicked. May be unset if the menu is not associated with a view. */
        viewType?: extension.ViewType | undefined;
        /**
         * One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
         */
        mediaType?: string | undefined;
        /** If the element is a link, the text of that link. */
        linkText?: string | undefined;
        /** If the element is a link, the URL it points to. */
        linkUrl?: string | undefined;
        /** Will be present for elements with a 'src' URL. */
        srcUrl?: string | undefined;
        /**
         * The URL of the page where the menu item was clicked. This property is not set if the click occured in a context where there is no current page, such as in a launcher context menu.
         */
        pageUrl?: string | undefined;
        /** The id of the frame of the element where the context menu was clicked. */
        frameId?: number | undefined;
        /** The URL of the frame of the element where the context menu was clicked, if it was in a frame. */
        frameUrl?: string | undefined;
        /** The text for the context selection, if any. */
        selectionText?: string | undefined;
        /** A flag indicating whether the element is editable (text input, textarea, etc.). */
        editable: boolean;
        /** A flag indicating the state of a checkbox or radio item before it was clicked. */
        wasChecked?: boolean | undefined;
        /** A flag indicating the state of a checkbox or radio item after it is clicked. */
        checked?: boolean | undefined;
        /** The id of the bookmark where the context menu was clicked, if it was on a bookmark. */
        bookmarkId: string;
        /** An array of keyboard modifiers that were held while the menu item was clicked. */
        modifiers: _OnClickDataModifiers[];
        /** An integer value of button by which menu item was clicked. */
        button?: number | undefined;
        /**
         * An identifier of the clicked element, if any. Use menus.getTargetElement in the page to find the corresponding element.
         */
        targetElementId?: number | undefined;
    }

    type _ContextType =
        | 'all'
        | 'page'
        | 'frame'
        | 'selection'
        | 'link'
        | 'editable'
        | 'password'
        | 'image'
        | 'video'
        | 'audio'
        | 'launcher'
        | 'bookmark'
        | 'tab'
        | 'tools_menu'
        | 'browser_action'
        | 'page_action'
        | 'action';

    type _OnClickDataModifiers = 'Shift' | 'Alt' | 'Command' | 'Ctrl' | 'MacCtrl';

    interface _CreateCreatePropertiesIcons {
        [key: number]: string;
    }

    type _CreateCreatePropertiesCommand =
        | '_execute_browser_action'
        | '_execute_page_action'
        | '_execute_sidebar_action'
        | '_execute_action'
        | '_execute_page_action'
        | '_execute_sidebar_action';

    interface _CreateCreateProperties {
        /** The type of menu item. Defaults to 'normal' if not specified. */
        type?: ItemType | undefined;
        /**
         * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension.
         */
        id?: string | undefined;
        icons?: _CreateCreatePropertiesIcons | undefined;
        /**
         * The text to be displayed in the item; this is _required_ unless `type` is 'separator'. When the context is 'selection', you can use `%s` within the string to show the selected text. For example, if this parameter's value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the selection is "Translate 'cool' to Pig Latin".
         */
        title?: string | undefined;
        /**
         * The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items.
         */
        checked?: boolean | undefined;
        /** List of contexts this menu item will appear in. Defaults to ['page'] if not specified. */
        contexts?: ContextType[] | undefined;
        /**
         * List of view types where the menu item will be shown. Defaults to any view, including those without a viewType.
         */
        viewTypes?: extension.ViewType[] | undefined;
        /** Whether the item is visible in the menu. */
        visible?: boolean | undefined;
        /**
         * A function that will be called back when the menu item is clicked. Event pages cannot use this; instead, they should register a listener for `contextMenus.onClicked`.
         * @param info Information about the item clicked and the context where the click happened.
         * @param tab The details of the tab where the click took place. Note: this parameter only present for extensions.
         */
        onclick?: (info: OnClickData, tab: tabs.Tab) => void | undefined;
        /** The ID of a parent menu item; this makes the item a child of a previously added item. */
        parentId?: number | string | undefined;
        /**
         * Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see Match Patterns.
         */
        documentUrlPatterns?: string[] | undefined;
        /**
         * Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags.
         */
        targetUrlPatterns?: string[] | undefined;
        /** Whether this context menu item is enabled or disabled. Defaults to true. */
        enabled?: boolean | undefined;
        /** Specifies a command to issue for the context click. */
        command?: string | _CreateCreatePropertiesCommand | undefined;
    }

    interface _UpdateUpdatePropertiesIcons {
        [key: number]: string;
    }

    /** The properties to update. Accepts the same values as the create function. */
    interface _UpdateUpdateProperties {
        type?: ItemType | undefined;
        icons?: _UpdateUpdatePropertiesIcons | undefined;
        title?: string | undefined;
        checked?: boolean | undefined;
        contexts?: ContextType[] | undefined;
        viewTypes?: extension.ViewType[] | undefined;
        /** Whether the item is visible in the menu. */
        visible?: boolean | undefined;
        /**
         * @param tab The details of the tab where the click took place. Note: this parameter only present for extensions.
         */
        onclick?: (info: OnClickData, tab: tabs.Tab) => void | undefined;
        /** Note: You cannot change an item to be a child of one of its own descendants. */
        parentId?: number | string | undefined;
        documentUrlPatterns?: string[] | undefined;
        targetUrlPatterns?: string[] | undefined;
        enabled?: boolean | undefined;
    }

    /**
     * ContextType to override, to allow menu items from other extensions in the menu. Currently only 'bookmark' and 'tab' are supported. showDefaults cannot be used with this option.
     */
    type _OverrideContextContextOptionsContext = 'bookmark' | 'tab';

    interface _OverrideContextContextOptions {
        /** Whether to also include default menu items in the menu. */
        showDefaults?: boolean | undefined;
        /**
         * ContextType to override, to allow menu items from other extensions in the menu. Currently only 'bookmark' and 'tab' are supported. showDefaults cannot be used with this option.
         */
        context?: _OverrideContextContextOptionsContext | undefined;
        /** Required when context is 'bookmark'. Requires 'bookmark' permission. */
        bookmarkId?: string | undefined;
        /** Required when context is 'tab'. Requires 'tabs' permission. */
        tabId?: number | undefined;
    }

    /**
     * Information about the context of the menu action and the created menu items. For more information about each property, see OnClickData. The following properties are only set if the extension has host permissions for the given context: linkUrl, linkText, srcUrl, pageUrl, frameUrl, selectionText.
     */
    interface _OnShownInfo {
        /** A list of IDs of the menu items that were shown. */
        menuIds: number | string[];
        /** A list of all contexts that apply to the menu. */
        contexts: ContextType[];
        viewType?: extension.ViewType | undefined;
        editable: boolean;
        mediaType?: string | undefined;
        linkUrl?: string | undefined;
        linkText?: string | undefined;
        srcUrl?: string | undefined;
        pageUrl?: string | undefined;
        frameUrl?: string | undefined;
        selectionText?: string | undefined;
        targetElementId?: number | undefined;
    }

    /* menus properties */
    /**
     * The maximum number of top level extension items that can be added to an extension action context menu. Any items beyond this limit will be ignored.
     */
    const ACTION_MENU_TOP_LEVEL_LIMIT: number;

    /* menus functions */
    /**
     * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in `runtime.lastError`).
     * @param [callback] Called when the item has been created in the browser. If there were any problems creating the item, details will be available in `runtime.lastError`.
     * @returns The ID of the newly created item.
     */
    function create(
        createProperties: _CreateCreateProperties,
        callback?: () => void
    ): number | string;

    /**
     * Updates a previously created context menu item.
     * @param id The ID of the item to update.
     * @param updateProperties The properties to update. Accepts the same values as the create function.
     */
    function update(id: number | string, updateProperties: _UpdateUpdateProperties): Promise<void>;

    /**
     * Removes a context menu item.
     * @param menuItemId The ID of the context menu item to remove.
     */
    function remove(menuItemId: number | string): Promise<void>;

    /** Removes all context menu items added by this extension. */
    function removeAll(): Promise<void>;

    /**
     * Show the matching menu items from this extension instead of the default menu. This should be called during a 'contextmenu' DOM event handler, and only applies to the menu that opens after this event.
     */
    function overrideContext(contextOptions: _OverrideContextContextOptions): void;

    /**
     * Updates the extension items in the shown menu, including changes that have been made since the menu was shown. Has no effect if the menu is hidden. Rebuilding a shown menu is an expensive operation, only invoke this method when necessary.
     */
    function refresh(): Promise<any>;

    /**
     * Retrieve the element that was associated with a recent contextmenu event.
     * @param targetElementId The identifier of the clicked element, available as info.targetElementId in the menus.onShown, onClicked or onclick event.
     */
    function getTargetElement(targetElementId: number): Element | void;

    /* menus events */
    /**
     * Fired when a context menu item is clicked.
     * @param info Information about the item clicked and the context where the click happened.
     * @param [tab] The details of the tab where the click took place. If the click did not take place in a tab, this parameter will be missing.
     */
    const onClicked: WebExtEvent<(info: OnClickData, tab?: tabs.Tab) => void>;

    /**
     * Fired when a menu is shown. The extension can add, modify or remove menu items and call menus.refresh() to update the menu.
     * @param info Information about the context of the menu action and the created menu items. For more information about each property, see OnClickData. The following properties are only set if the extension has host permissions for the given context: linkUrl, linkText, srcUrl, pageUrl, frameUrl, selectionText.
     * @param tab The details of the tab where the menu was opened.
     */
    const onShown: WebExtEvent<(info: _OnShownInfo, tab: tabs.Tab) => void>;

    /** Fired when a menu is hidden. This event is only fired if onShown has fired before. */
    const onHidden: WebExtEvent<() => void>;
}

/**
 * Normandy Study API
 *
 * Permissions: `normandyAddonStudy`
 */
declare namespace browser.normandyAddonStudy {
    /* normandyAddonStudy types */
    interface Study {
        /** The ID of the recipe for the study. */
        recipeId: number;
        /** A slug to identify the study. */
        slug: string;
        /** The name presented on about:studies. */
        userFacingName: string;
        /** The description presented on about:studies. */
        userFacingDescription: string;
        /** The study branch in which the user is enrolled. */
        branch: string;
        /** The state of the study. */
        active: boolean;
        /** The ID of the extension installed by the study. */
        addonId: string;
        /** The URL of the XPI that was downloaded and installed by the study. */
        addonUrl: string;
        /** The version of the extension installed by the study. */
        addonVersion: string;
        /** The start date for the study. */
        studyStartDate: extensionTypes.Date;
        /** The end date for the study. */
        studyEndDate: extensionTypes.Date;
        /** The record ID for the extension in Normandy server's database. */
        extensionApiId: number;
        /** A hash of the extension XPI file. */
        extensionHash: string;
        /** The algorithm used to hash the extension XPI file. */
        extensionHashAlgorithm: string;
    }

    /* normandyAddonStudy functions */
    /** Returns a study object for the current study. */
    function getStudy(): Promise<any>;

    /**
     * Marks the study as ended and then uninstalls the addon.
     * @param reason The reason why the study is ending.
     */
    function endStudy(reason: string): Promise<any>;

    /** Returns an object with metadata about the client which may be required for constructing survey URLs. */
    function getClientMetadata(): Promise<any>;

    /* normandyAddonStudy events */
    /**
     * Fired when a user unenrolls from a study but before the addon is uninstalled.
     * @param reason The reason why the study is ending.
     */
    const onUnenroll: WebExtEvent<(reason: string) => void>;
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
    type DescriptionStyleType = 'url' | 'match' | 'dim';

    /**
     * The window disposition for the omnibox query. This is the recommended context to display results. For example, if the omnibox command is to navigate to a certain URL, a disposition of 'newForegroundTab' means the navigation should take place in a new selected tab.
     */
    type OnInputEnteredDisposition = 'currentTab' | 'newForegroundTab' | 'newBackgroundTab';

    /** A suggest result. */
    interface SuggestResult {
        /**
         * The text that is put into the URL bar, and that is sent to the extension when the user chooses this entry.
         */
        content: string;
        /**
         * The text that is displayed in the URL dropdown. Can contain XML-style markup for styling. The supported tags are 'url' (for a literal URL), 'match' (for highlighting text that matched what the user's query), and 'dim' (for dim helper text). The styles can be nested, eg. <dim><match>dimmed match</match></dim>. You must escape the five predefined entities to display them as text: stackoverflow.com/a/1091953/89484
         */
        description: string;
        /**
         * An array of style ranges for the description, as provided by the extension.
         * @deprecated Unsupported on Firefox at this time.
         */
        descriptionStyles?: _SuggestResultDescriptionStyles[] | undefined;
        /**
         * An array of style ranges for the description, as provided by ToValue().
         * @deprecated Unsupported on Firefox at this time.
         */
        descriptionStylesRaw?: _SuggestResultDescriptionStylesRaw[] | undefined;
    }

    /** A suggest result. */
    interface DefaultSuggestResult {
        /** The text that is displayed in the URL dropdown. */
        description: string;
        /**
         * An array of style ranges for the description, as provided by the extension.
         * @deprecated Unsupported on Firefox at this time.
         */
        descriptionStyles?: _DefaultSuggestResultDescriptionStyles[] | undefined;
        /**
         * An array of style ranges for the description, as provided by ToValue().
         * @deprecated Unsupported on Firefox at this time.
         */
        descriptionStylesRaw?: _DefaultSuggestResultDescriptionStylesRaw[] | undefined;
    }

    /** The style ranges for the description, as provided by the extension. */
    interface _SuggestResultDescriptionStyles {
        offset: number;
        /** The style type */
        type: DescriptionStyleType;
        length?: number | undefined;
    }

    /** The style ranges for the description, as provided by ToValue(). */
    interface _SuggestResultDescriptionStylesRaw {
        offset: number;
        type: number;
    }

    /** The style ranges for the description, as provided by the extension. */
    interface _DefaultSuggestResultDescriptionStyles {
        offset: number;
        /** The style type */
        type: DescriptionStyleType;
        length?: number | undefined;
    }

    /** The style ranges for the description, as provided by ToValue(). */
    interface _DefaultSuggestResultDescriptionStylesRaw {
        offset: number;
        type: number;
    }

    /* omnibox functions */
    /**
     * Sets the description and styling for the default suggestion. The default suggestion is the text that is displayed in the first suggestion row underneath the URL bar.
     * @param suggestion A partial SuggestResult object, without the 'content' parameter.
     */
    function setDefaultSuggestion(suggestion: DefaultSuggestResult): void;

    /* omnibox events */
    /**
     * User has started a keyword input session by typing the extension's keyword. This is guaranteed to be sent exactly once per input session, and before any onInputChanged events.
     */
    const onInputStarted: WebExtEvent<() => void>;

    /**
     * User has changed what is typed into the omnibox.
     * @param suggest A callback passed to the onInputChanged event used for sending suggestions back to the browser.
     */
    const onInputChanged: WebExtEvent<
        (text: string, suggest: (suggestResults: SuggestResult[]) => void) => void
    >;

    /** User has accepted what is typed into the omnibox. */
    const onInputEntered: WebExtEvent<
        (text: string, disposition: OnInputEnteredDisposition) => void
    >;

    /** User has ended the keyword input session without accepting the input. */
    const onInputCancelled: WebExtEvent<() => void>;
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
 * Use browser.search to interact with search engines.
 *
 * Permissions: `search`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.search {
    /* search types */
    /** An object encapsulating a search engine */
    interface SearchEngine {
        name: string;
        isDefault: boolean;
        alias?: string | undefined;
        favIconUrl?: string | undefined;
    }

    interface _SearchSearchProperties {
        /** Terms to search for. */
        query: string;
        /** Search engine to use. Uses the default if not specified. */
        engine?: string | undefined;
        /** The ID of the tab for the search results. If not specified, a new tab is created. */
        tabId?: number | undefined;
    }

    /* search functions */
    /** Gets a list of search engines. */
    function get(): Promise<SearchEngine[]>;

    /** Perform a search. */
    function search(searchProperties: _SearchSearchProperties): Promise<any>;
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
         * The maximum number of entries to be fetched in the requested list. Omit this parameter to fetch the maximum number of entries (`sessions.MAX_SESSION_RESULTS`).
         */
        maxResults?: number | undefined;
    }

    interface Session {
        /** The time when the window or tab was closed or modified, represented in milliseconds since the epoch. */
        lastModified: number;
        /** The `tabs.Tab`, if this entry describes a tab. Either this or `sessions.Session.window` will be set. */
        tab?: tabs.Tab | undefined;
        /**
         * The `windows.Window`, if this entry describes a window. Either this or `sessions.Session.tab` will be set.
         */
        window?: windows.Window | undefined;
    }

    interface Device {
        info: string;
        /** The name of the foreign device. */
        deviceName: string;
        /**
         * A list of open window sessions for the foreign device, sorted from most recently to least recently modified session.
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
    function getRecentlyClosed(filter?: Filter): Promise<Session[]>;

    /**
     * Retrieves all devices with synced sessions.
     * @deprecated Unsupported on Firefox at this time.
     */
    function getDevices(filter?: Filter): Promise<Device[]>;

    /**
     * Reopens a `windows.Window` or `tabs.Tab`, with an optional callback to run when the entry has been restored.
     * @param [sessionId] The `windows.Window.sessionId`, or `tabs.Tab.sessionId` to restore. If this parameter is not specified, the most recently closed session is restored.
     */
    function restore(sessionId?: string): Promise<Session>;

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
    type ImageDataType = ImageData;

    interface _SetTitleDetails {
        /** The string the sidebar action should display when moused over. */
        title: string | null;
        /** Sets the sidebar title for the tab specified by tabId. Automatically resets when the tab is closed. */
        tabId?: number | undefined;
        /** Sets the sidebar title for the window specified by windowId. */
        windowId?: number | undefined;
    }

    interface _GetTitleDetails {
        /**
         * Specify the tab to get the title from. If no tab nor window is specified, the global title is returned.
         */
        tabId?: number | undefined;
        /**
         * Specify the window to get the title from. If no tab nor window is specified, the global title is returned.
         */
        windowId?: number | undefined;
    }

    interface _SetIconDetails {
        /**
         * Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        imageData?:
            | ImageDataType
            | {
                  [key: number]: ImageDataType;
              }
            | undefined;
        /**
         * Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals `scale`, then image with size `scale` * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}'
         */
        path?: string | { [key: string]: string } | undefined;
        /** Sets the sidebar icon for the tab specified by tabId. Automatically resets when the tab is closed. */
        tabId?: number | undefined;
        /** Sets the sidebar icon for the window specified by windowId. */
        windowId?: number | undefined;
    }

    interface _SetPanelDetails {
        /** Sets the sidebar url for the tab specified by tabId. Automatically resets when the tab is closed. */
        tabId?: number | undefined;
        /** Sets the sidebar url for the window specified by windowId. */
        windowId?: number | undefined;
        /** The url to the html file to show in a sidebar. If set to the empty string (''), no sidebar is shown. */
        panel: string | null;
    }

    interface _GetPanelDetails {
        /**
         * Specify the tab to get the panel from. If no tab nor window is specified, the global panel is returned.
         */
        tabId?: number | undefined;
        /**
         * Specify the window to get the panel from. If no tab nor window is specified, the global panel is returned.
         */
        windowId?: number | undefined;
    }

    interface _IsOpenDetails {
        /** Specify the window to get the openness from. */
        windowId?: number | undefined;
    }

    /* sidebarAction functions */
    /** Sets the title of the sidebar action. This shows up in the tooltip. */
    function setTitle(details: _SetTitleDetails): Promise<void>;

    /** Gets the title of the sidebar action. */
    function getTitle(details: _GetTitleDetails): Promise<string>;

    /**
     * Sets the icon for the sidebar action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the **path** or the **imageData** property must be specified.
     */
    function setIcon(details: _SetIconDetails): Promise<void>;

    /**
     * Sets the url to the html document to be opened in the sidebar when the user clicks on the sidebar action's icon.
     */
    function setPanel(details: _SetPanelDetails): Promise<void>;

    /** Gets the url to the html document set as the panel for this sidebar action. */
    function getPanel(details: _GetPanelDetails): Promise<string>;

    /** Opens the extension sidebar in the active window. */
    function open(): Promise<void>;

    /** Closes the extension sidebar in the active window if the sidebar belongs to the extension. */
    function close(): Promise<void>;

    /** Toggles the extension sidebar in the active window. */
    function toggle(): Promise<void>;

    /** Checks whether the sidebar action is open. */
    function isOpen(details: _IsOpenDetails): Promise<boolean>;
}

/**
 * Use the `browser.tabs` API to interact with the browser's tab system. You can use this API to create, modify, and rearrange tabs in the browser.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.tabs {
    /* tabs types */
    /** An event that caused a muted state change. */
    type MutedInfoReason =
        /** A user input action has set/overridden the muted state. */
        | 'user'
        /** Tab capture started, forcing a muted state change. */
        | 'capture'
        /** An extension, identified by the extensionId field, set the muted state. */
        | 'extension';

    /** Tab muted state and the reason for the last state change. */
    interface MutedInfo {
        /**
         * Whether the tab is prevented from playing sound (but hasn't necessarily recently produced sound). Equivalent to whether the muted audio indicator is showing.
         */
        muted: boolean;
        /** The reason the tab was muted or unmuted. Not set if the tab's mute state has never been changed. */
        reason?: MutedInfoReason | undefined;
        /**
         * The ID of the extension that changed the muted state. Not set if an extension was not the reason the muted state last changed.
         */
        extensionId?: string | undefined;
    }

    /** Tab sharing state for screen, microphone and camera. */
    interface SharingState {
        /**
         * If the tab is sharing the screen the value will be one of "Screen", "Window", or "Application", or undefined if not screen sharing.
         */
        screen?: string | undefined;
        /** True if the tab is using the camera. */
        camera: boolean;
        /** True if the tab is using the microphone. */
        microphone: boolean;
    }

    interface Tab {
        /**
         * The ID of the tab. Tab IDs are unique within a browser session. Under some circumstances a Tab may not be assigned an ID, for example when querying foreign tabs using the `sessions` API, in which case a session ID may be present. Tab ID can also be set to `tabs.TAB_ID_NONE` for apps and devtools windows.
         */
        id?: number | undefined;
        /** The zero-based index of the tab within its window. */
        index: number;
        /** The ID of the window the tab is contained within. */
        windowId?: number | undefined;
        /**
         * The ID of the tab that opened this tab, if any. This property is only present if the opener tab still exists.
         */
        openerTabId?: number | undefined;
        /**
         * Whether the tab is selected.
         * @deprecated Please use `tabs.Tab.highlighted`.
         */
        selected?: boolean | undefined;
        /** Whether the tab is highlighted. Works as an alias of active */
        highlighted: boolean;
        /** Whether the tab is active in its window. (Does not necessarily mean the window is focused.) */
        active: boolean;
        /** Whether the tab is pinned. */
        pinned: boolean;
        /** The last time the tab was accessed as the number of milliseconds since epoch. */
        lastAccessed?: number | undefined;
        /**
         * Whether the tab has produced sound over the past couple of seconds (but it might not be heard if also muted). Equivalent to whether the speaker audio indicator is showing.
         */
        audible?: boolean | undefined;
        /** Current tab muted state and the reason for the last state change. */
        mutedInfo?: MutedInfo | undefined;
        /**
         * The URL the tab is displaying. This property is only present if the extension's manifest includes the `"tabs"` permission.
         */
        url?: string | undefined;
        /**
         * The title of the tab. This property is only present if the extension's manifest includes the `"tabs"` permission.
         */
        title?: string | undefined;
        /**
         * The URL of the tab's favicon. This property is only present if the extension's manifest includes the `"tabs"` permission. It may also be an empty string if the tab is loading.
         */
        favIconUrl?: string | undefined;
        /** Either _loading_ or _complete_. */
        status?: string | undefined;
        /** True while the tab is not loaded with content. */
        discarded?: boolean | undefined;
        /** Whether the tab is in an incognito window. */
        incognito: boolean;
        /** The width of the tab in pixels. */
        width?: number | undefined;
        /** The height of the tab in pixels. */
        height?: number | undefined;
        /** True if the tab is hidden. */
        hidden?: boolean | undefined;
        /** The session ID used to uniquely identify a Tab obtained from the `sessions` API. */
        sessionId?: string | undefined;
        /** The CookieStoreId used for the tab. */
        cookieStoreId?: string | undefined;
        /** Whether the document in the tab can be rendered in reader mode. */
        isArticle?: boolean | undefined;
        /** Whether the document in the tab is being rendered in reader mode. */
        isInReaderMode?: boolean | undefined;
        /** Current tab sharing state for screen, microphone and camera. */
        sharingState?: SharingState | undefined;
        /** Whether the tab is drawing attention. */
        attention?: boolean | undefined;
        /** The ID of this tab's successor, if any; `tabs.TAB_ID_NONE` otherwise. */
        successorTabId?: number | undefined;
    }

    /**
     * Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page; defaults to `automatic`.
     */
    type ZoomSettingsMode =
        /** Zoom changes are handled automatically by the browser. */
        | 'automatic'
        /**
         * Overrides the automatic handling of zoom changes. The `onZoomChange` event will still be dispatched, and it is the responsibility of the extension to listen for this event and manually scale the page. This mode does not support `per-origin` zooming, and will thus ignore the `scope` zoom setting and assume `per-tab`.
         */
        | 'manual'
        /**
         * Disables all zooming in the tab. The tab will revert to the default zoom level, and all attempted zoom changes will be ignored.
         */
        | 'disabled';

    /**
     * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to `per-origin` when in `automatic` mode, and `per-tab` otherwise.
     */
    type ZoomSettingsScope =
        /**
         * Zoom changes will persist in the zoomed page's origin, i.e. all other tabs navigated to that same origin will be zoomed as well. Moreover, `per-origin` zoom changes are saved with the origin, meaning that when navigating to other pages in the same origin, they will all be zoomed to the same zoom factor. The `per-origin` scope is only available in the `automatic` mode.
         */
        | 'per-origin'
        /**
         * Zoom changes only take effect in this tab, and zoom changes in other tabs will not affect the zooming of this tab. Also, `per-tab` zoom changes are reset on navigation; navigating a tab will always load pages with their `per-origin` zoom factors.
         */
        | 'per-tab';

    /** Defines how zoom changes in a tab are handled and at what scope. */
    interface ZoomSettings {
        /**
         * Defines how zoom changes are handled, i.e. which entity is responsible for the actual scaling of the page; defaults to `automatic`.
         */
        mode?: ZoomSettingsMode | undefined;
        /**
         * Defines whether zoom changes will persist for the page's origin, or only take effect in this tab; defaults to `per-origin` when in `automatic` mode, and `per-tab` otherwise.
         */
        scope?: ZoomSettingsScope | undefined;
        /** Used to return the default zoom level for the current tab in calls to tabs.getZoomSettings. */
        defaultZoomFactor?: number | undefined;
    }

    /** Defines the page settings to be used when saving a page as a pdf file. */
    interface PageSettings {
        /** The name of the file. May include optional .pdf extension. */
        toFileName?: string | undefined;
        /** The page size unit: 0 = inches, 1 = millimeters. Default: 0. */
        paperSizeUnit?: number | undefined;
        /** The paper width in paper size units. Default: 8.5. */
        paperWidth?: number | undefined;
        /** The paper height in paper size units. Default: 11.0. */
        paperHeight?: number | undefined;
        /** The page content orientation: 0 = portrait, 1 = landscape. Default: 0. */
        orientation?: number | undefined;
        /** The page content scaling factor: 1.0 = 100% = normal size. Default: 1.0. */
        scaling?: number | undefined;
        /** Whether the page content should shrink to fit the page width (overrides scaling). Default: true. */
        shrinkToFit?: boolean | undefined;
        /** Whether the page background colors should be shown. Default: false. */
        showBackgroundColors?: boolean | undefined;
        /** Whether the page background images should be shown. Default: false. */
        showBackgroundImages?: boolean | undefined;
        /** The spacing between the left header/footer and the left edge of the paper (inches). Default: 0. */
        edgeLeft?: number | undefined;
        /** The spacing between the right header/footer and the right edge of the paper (inches). Default: 0. */
        edgeRight?: number | undefined;
        /** The spacing between the top of the headers and the top edge of the paper (inches). Default: 0 */
        edgeTop?: number | undefined;
        /** The spacing between the bottom of the footers and the bottom edge of the paper (inches). Default: 0. */
        edgeBottom?: number | undefined;
        /** The margin between the page content and the left edge of the paper (inches). Default: 0.5. */
        marginLeft?: number | undefined;
        /** The margin between the page content and the right edge of the paper (inches). Default: 0.5. */
        marginRight?: number | undefined;
        /** The margin between the page content and the top edge of the paper (inches). Default: 0.5. */
        marginTop?: number | undefined;
        /** The margin between the page content and the bottom edge of the paper (inches). Default: 0.5. */
        marginBottom?: number | undefined;
        /** The text for the page's left header. Default: '&T'. */
        headerLeft?: string | undefined;
        /** The text for the page's center header. Default: ''. */
        headerCenter?: string | undefined;
        /** The text for the page's right header. Default: '&U'. */
        headerRight?: string | undefined;
        /** The text for the page's left footer. Default: '&PT'. */
        footerLeft?: string | undefined;
        /** The text for the page's center footer. Default: ''. */
        footerCenter?: string | undefined;
        /** The text for the page's right footer. Default: '&D'. */
        footerRight?: string | undefined;
    }

    /** Whether the tabs have completed loading. */
    type TabStatus = 'loading' | 'complete';

    /** The type of window. */
    type WindowType = 'normal' | 'popup' | 'panel' | 'app' | 'devtools';

    /** Event names supported in onUpdated. */
    type UpdatePropertyName =
        | 'attention'
        | 'audible'
        | 'discarded'
        | 'favIconUrl'
        | 'hidden'
        | 'isArticle'
        | 'mutedInfo'
        | 'pinned'
        | 'sharingState'
        | 'status'
        | 'title'
        | 'url';

    /** An object describing filters to apply to tabs.onUpdated events. */
    interface UpdateFilter {
        /**
         * A list of URLs or URL patterns. Events that cannot match any of the URLs will be filtered out. Filtering with urls requires the `"tabs"` or `"activeTab"` permission.
         */
        urls?: string[] | undefined;
        /** A list of property names. Events that do not match any of the names will be filtered out. */
        properties?: UpdatePropertyName[] | undefined;
        tabId?: number | undefined;
        windowId?: number | undefined;
    }

    interface _ConnectConnectInfo {
        /** Will be passed into onConnect for content scripts that are listening for the connection event. */
        name?: string | undefined;
        /** Open a port to a specific frame identified by `frameId` instead of all frames in the tab. */
        frameId?: number | undefined;
    }

    interface _SendMessageOptions {
        /** Send a message to a specific frame identified by `frameId` instead of all frames in the tab. */
        frameId?: number | undefined;
    }

    interface _CreateCreateProperties {
        /** The window to create the new tab in. Defaults to the current window. */
        windowId?: number | undefined;
        /**
         * The position the tab should take in the window. The provided value will be clamped to between zero and the number of tabs in the window.
         */
        index?: number | undefined;
        /**
         * The URL to navigate the tab to initially. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page.
         */
        url?: string | undefined;
        /**
         * Whether the tab should become the active tab in the window. Does not affect whether the window is focused (see `windows.update`). Defaults to `true`.
         */
        active?: boolean | undefined;
        /**
         * Whether the tab should become the selected tab in the window. Defaults to `true`
         * @deprecated Please use _active_.
         */
        selected?: boolean | undefined;
        /** Whether the tab should be pinned. Defaults to `false` */
        pinned?: boolean | undefined;
        /**
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as the newly created tab.
         */
        openerTabId?: number | undefined;
        /** The CookieStoreId for the tab that opened this tab. */
        cookieStoreId?: string | undefined;
        /** Whether the document in the tab should be opened in reader mode. */
        openInReaderMode?: boolean | undefined;
        /** Whether the tab is marked as 'discarded' when created. */
        discarded?: boolean | undefined;
        /** The title used for display if the tab is created in discarded mode. */
        title?: string | undefined;
    }

    interface _DuplicateDuplicateProperties {
        /**
         * The position the new tab should take in the window. The provided value will be clamped to between zero and the number of tabs in the window.
         */
        index?: number | undefined;
        /**
         * Whether the tab should become the active tab in the window. Does not affect whether the window is focused (see `windows.update`). Defaults to `true`.
         */
        active?: boolean | undefined;
    }

    type _QueryQueryInfoScreen = 'Screen' | 'Window' | 'Application';

    interface _QueryQueryInfo {
        /** Whether the tabs are active in their windows. */
        active?: boolean | undefined;
        /** Whether the tabs are drawing attention. */
        attention?: boolean | undefined;
        /** Whether the tabs are pinned. */
        pinned?: boolean | undefined;
        /** Whether the tabs are audible. */
        audible?: boolean | undefined;
        /** Whether the tabs are muted. */
        muted?: boolean | undefined;
        /** Whether the tabs are highlighted. Works as an alias of active. */
        highlighted?: boolean | undefined;
        /** Whether the tabs are in the current window. */
        currentWindow?: boolean | undefined;
        /** Whether the tabs are in the last focused window. */
        lastFocusedWindow?: boolean | undefined;
        /** Whether the tabs have completed loading. */
        status?: TabStatus | undefined;
        /** True while the tabs are not loaded with content. */
        discarded?: boolean | undefined;
        /** True while the tabs are hidden. */
        hidden?: boolean | undefined;
        /** Match page titles against a pattern. */
        title?: string | undefined;
        /** Match tabs against one or more URL patterns. Note that fragment identifiers are not matched. */
        url?: string | string[] | undefined;
        /** The ID of the parent window, or `windows.WINDOW_ID_CURRENT` for the current window. */
        windowId?: number | undefined;
        /** The type of window the tabs are in. */
        windowType?: WindowType | undefined;
        /** The position of the tabs within their windows. */
        index?: number | undefined;
        /** The CookieStoreId used for the tab. */
        cookieStoreId?: string | undefined;
        /**
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
         */
        openerTabId?: number | undefined;
        /** True for any screen sharing, or a string to specify type of screen sharing. */
        screen?: boolean | _QueryQueryInfoScreen | undefined;
        /** True if the tab is using the camera. */
        camera?: boolean | undefined;
        /** True if the tab is using the microphone. */
        microphone?: boolean | undefined;
    }

    interface _HighlightHighlightInfo {
        /** The window that contains the tabs. */
        windowId?: number | undefined;
        /**
         * If true, the `windows.Window` returned will have a `tabs` property that contains a list of the `tabs.Tab` objects. The `Tab` objects only contain the `url`, `title` and `favIconUrl` properties if the extension's manifest file includes the `"tabs"` permission. If false, the `windows.Window` won't have the `tabs` property.
         */
        populate?: boolean | undefined;
        /** One or more tab indices to highlight. */
        tabs: number[] | number;
    }

    interface _UpdateUpdateProperties {
        /** A URL to navigate the tab to. */
        url?: string | undefined;
        /**
         * Whether the tab should be active. Does not affect whether the window is focused (see `windows.update`).
         */
        active?: boolean | undefined;
        /** Adds or removes the tab from the current selection. */
        highlighted?: boolean | undefined;
        /**
         * Whether the tab should be selected.
         * @deprecated Please use _highlighted_.
         */
        selected?: boolean | undefined;
        /** Whether the tab should be pinned. */
        pinned?: boolean | undefined;
        /** Whether the tab should be muted. */
        muted?: boolean | undefined;
        /**
         * The ID of the tab that opened this tab. If specified, the opener tab must be in the same window as this tab.
         */
        openerTabId?: number | undefined;
        /** Whether the load should replace the current history entry for the tab. */
        loadReplace?: boolean | undefined;
        /**
         * The ID of this tab's successor. If specified, the successor tab must be in the same window as this tab.
         */
        successorTabId?: number | undefined;
    }

    interface _MoveMoveProperties {
        /** Defaults to the window the tab is currently in. */
        windowId?: number | undefined;
        /** The position to move the window to. -1 will place the tab at the end of the window. */
        index: number;
    }

    interface _ReloadReloadProperties {
        /** Whether using any local cache. Default is false. */
        bypassCache?: boolean | undefined;
    }

    interface _MoveInSuccessionOptions {
        /** Whether to move the tabs before (false) or after (true) tabId in the succession. Defaults to false. */
        append?: boolean | undefined;
        /**
         * Whether to link up the current predecessors or successor (depending on options.append) of tabId to the other side of the chain after it is prepended or appended. If true, one of the following happens: if options.append is false, the first tab in the array is set as the successor of any current predecessors of tabId; if options.append is true, the current successor of tabId is set as the successor of the last tab in the array. Defaults to false.
         */
        insert?: boolean | undefined;
    }

    /** Lists the changes to the state of the tab that was updated. */
    interface _OnUpdatedChangeInfo {
        /** The tab's new attention state. */
        attention?: boolean | undefined;
        /** The tab's new audible state. */
        audible?: boolean | undefined;
        /** True while the tab is not loaded with content. */
        discarded?: boolean | undefined;
        /**
         * The tab's new favicon URL. This property is only present if the extension's manifest includes the `"tabs"` permission.
         */
        favIconUrl?: string | undefined;
        /** The tab's new hidden state. */
        hidden?: boolean | undefined;
        /** Whether the document in the tab can be rendered in reader mode. */
        isArticle?: boolean | undefined;
        /** The tab's new muted state and the reason for the change. */
        mutedInfo?: MutedInfo | undefined;
        /** The tab's new pinned state. */
        pinned?: boolean | undefined;
        /** The tab's new sharing state for screen, microphone and camera. */
        sharingState?: SharingState | undefined;
        /** The status of the tab. Can be either _loading_ or _complete_. */
        status?: string | undefined;
        /**
         * The title of the tab if it has changed. This property is only present if the extension's manifest includes the `"tabs"` permission.
         */
        title?: string | undefined;
        /**
         * The tab's URL if it has changed. This property is only present if the extension's manifest includes the `"tabs"` permission.
         */
        url?: string | undefined;
    }

    interface _TabsOnUpdatedEvent<
        TCallback = (tabId: number, changeInfo: _OnUpdatedChangeInfo, tab: Tab) => void
    > {
        addListener(cb: TCallback, filter?: UpdateFilter): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _OnMovedMoveInfo {
        windowId: number;
        fromIndex: number;
        toIndex: number;
    }

    interface _OnSelectionChangedSelectInfo {
        /** The ID of the window the selected tab changed inside of. */
        windowId: number;
    }

    interface _OnActiveChangedSelectInfo {
        /** The ID of the window the selected tab changed inside of. */
        windowId: number;
    }

    interface _OnActivatedActiveInfo {
        /** The ID of the tab that has become active. */
        tabId: number;
        /** The ID of the tab that was previously active, if that tab is still open. */
        previousTabId?: number | undefined;
        /** The ID of the window the active tab changed inside of. */
        windowId: number;
    }

    interface _OnHighlightChangedSelectInfo {
        /** The window whose tabs changed. */
        windowId: number;
        /** All highlighted tabs in the window. */
        tabIds: number[];
    }

    interface _OnHighlightedHighlightInfo {
        /** The window whose tabs changed. */
        windowId: number;
        /** All highlighted tabs in the window. */
        tabIds: number[];
    }

    interface _OnDetachedDetachInfo {
        oldWindowId: number;
        oldPosition: number;
    }

    interface _OnAttachedAttachInfo {
        newWindowId: number;
        newPosition: number;
    }

    interface _OnRemovedRemoveInfo {
        /** The window whose tab is closed. */
        windowId: number;
        /** True when the tab is being closed because its window is being closed. */
        isWindowClosing: boolean;
    }

    interface _OnZoomChangeZoomChangeInfo {
        tabId: number;
        oldZoomFactor: number;
        newZoomFactor: number;
        zoomSettings: ZoomSettings;
    }

    /* tabs properties */
    /** An ID which represents the absence of a browser tab. */
    const TAB_ID_NONE: number;

    /* tabs functions */
    /** Retrieves details about the specified tab. */
    function get(tabId: number): Promise<Tab>;

    /**
     * Gets the tab that this script call is being made from. May be undefined if called from a non-tab context (for example: a background page or popup view).
     */
    function getCurrent(): Promise<Tab>;

    /**
     * Connects to the content script(s) in the specified tab. The `runtime.onConnect` event is fired in each content script running in the specified tab for the current extension. For more details, see Content Script Messaging.
     * @returns A port that can be used to communicate with the content scripts running in the specified tab. The port's `runtime.Port` event is fired if the tab closes or does not exist.
     */
    function connect(tabId: number, connectInfo?: _ConnectConnectInfo): runtime.Port;

    /**
     * Sends a single request to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The `extension.onRequest` event is fired in each content script running in the specified tab for the current extension.
     * @deprecated Please use `runtime.sendMessage`.
     */
    function sendRequest(
        tabId: number,
        request: any,
        responseCallback?: (response: any) => void
    ): void;

    /**
     * Sends a single message to the content script(s) in the specified tab, with an optional callback to run when a response is sent back. The `runtime.onMessage` event is fired in each content script running in the specified tab for the current extension.
     */
    function sendMessage(tabId: number, message: any, options?: _SendMessageOptions): Promise<any>;

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
    function create(createProperties: _CreateCreateProperties): Promise<Tab>;

    /**
     * Duplicates a tab.
     * @param tabId The ID of the tab which is to be duplicated.
     */
    function duplicate(
        tabId: number,
        duplicateProperties?: _DuplicateDuplicateProperties
    ): Promise<Tab>;

    /** Gets all tabs that have the specified properties, or all tabs if no properties are specified. */
    function query(queryInfo: _QueryQueryInfo): Promise<Tab[]>;

    /** Highlights the given tabs. */
    function highlight(highlightInfo: _HighlightHighlightInfo): Promise<windows.Window>;

    /**
     * Modifies the properties of a tab. Properties that are not specified in `updateProperties` are not modified.
     */
    function update(updateProperties: _UpdateUpdateProperties): Promise<Tab>;
    /**
     * Modifies the properties of a tab. Properties that are not specified in `updateProperties` are not modified.
     * @param tabId Defaults to the selected tab of the current window.
     */
    function update(tabId: number, updateProperties: _UpdateUpdateProperties): Promise<Tab>;

    /**
     * Moves one or more tabs to a new position within its window, or to a new window. Note that tabs can only be moved to and from normal (window.type === "normal") windows.
     * @param tabIds The tab or list of tabs to move.
     */
    function move(
        tabIds: number | number[],
        moveProperties: _MoveMoveProperties
    ): Promise<Tab | Tab[]>;

    /** Reload a tab. */
    function reload(): Promise<void>;
    /**
     * Reload a tab.
     * @param tabId The ID of the tab to reload; defaults to the selected tab of the current window.
     */
    function reload(tabId: number, reloadProperties?: _ReloadReloadProperties): Promise<void>;
    /** Reload a tab. */
    function reload(reloadProperties: _ReloadReloadProperties): Promise<void>;

    /**
     * Warm up a tab
     * @param tabId The ID of the tab to warm up.
     */
    function warmup(tabId: number): Promise<any>;

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

    /** Captures an area of a specified tab. You must have <all_urls> permission to use this method. */
    function captureTab(): Promise<string>;
    /**
     * Captures an area of a specified tab. You must have <all_urls> permission to use this method.
     * @param tabId The tab to capture. Defaults to the active tab of the current window.
     */
    function captureTab(tabId: number, options?: extensionTypes.ImageDetails): Promise<string>;
    /** Captures an area of a specified tab. You must have <all_urls> permission to use this method. */
    function captureTab(options: extensionTypes.ImageDetails): Promise<string>;

    /**
     * Captures an area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     */
    function captureVisibleTab(): Promise<string>;
    /**
     * Captures an area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     * @param windowId The target window. Defaults to the current window.
     */
    function captureVisibleTab(
        windowId: number,
        options?: extensionTypes.ImageDetails
    ): Promise<string>;
    /**
     * Captures an area of the currently active tab in the specified window. You must have <all_urls> permission to use this method.
     */
    function captureVisibleTab(options: extensionTypes.ImageDetails): Promise<string>;

    /**
     * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param details Details of the script to run.
     */
    function executeScript(details: extensionTypes.InjectDetails): Promise<any[]>;
    /**
     * Injects JavaScript code into a page. For details, see the programmatic injection section of the content scripts doc.
     * @param tabId The ID of the tab in which to run the script; defaults to the active tab of the current window.
     * @param details Details of the script to run.
     */
    function executeScript(tabId: number, details: extensionTypes.InjectDetails): Promise<any[]>;

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
     * Removes injected CSS from a page. For details, see the programmatic injection section of the content scripts doc.
     * @param tabId The ID of the tab from which to remove the injected CSS; defaults to the active tab of the current window.
     * @param details Details of the CSS text to remove.
     */
    function removeCSS(tabId: number, details: extensionTypes.InjectDetails): Promise<void>;

    /**
     * Zooms a specified tab.
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     */
    function setZoom(zoomFactor: number): Promise<void>;
    /**
     * Zooms a specified tab.
     * @param tabId The ID of the tab to zoom; defaults to the active tab of the current window.
     * @param zoomFactor The new zoom factor. Use a value of 0 here to set the tab to its current default zoom factor. Values greater than zero specify a (possibly non-default) zoom factor for the tab.
     */
    function setZoom(tabId: number, zoomFactor: number): Promise<void>;

    /**
     * Gets the current zoom factor of a specified tab.
     * @param [tabId] The ID of the tab to get the current zoom factor from; defaults to the active tab of the current window.
     */
    function getZoom(tabId?: number): Promise<number>;

    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     */
    function setZoomSettings(zoomSettings: ZoomSettings): Promise<void>;
    /**
     * Sets the zoom settings for a specified tab, which define how zoom changes are handled. These settings are reset to defaults upon navigating the tab.
     * @param tabId The ID of the tab to change the zoom settings for; defaults to the active tab of the current window.
     * @param zoomSettings Defines how zoom changes are handled and at what scope.
     */
    function setZoomSettings(tabId: number, zoomSettings: ZoomSettings): Promise<void>;

    /**
     * Gets the current zoom settings of a specified tab.
     * @param [tabId] The ID of the tab to get the current zoom settings from; defaults to the active tab of the current window.
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
    function saveAsPDF(pageSettings: PageSettings): Promise<string>;

    /**
     * Shows one or more tabs.
     * @param tabIds The TAB ID or list of TAB IDs to show.
     */
    function show(tabIds: number | number[]): Promise<void>;

    /**
     * Hides one or more tabs. The `"tabHide"` permission is required to hide tabs. Not all tabs are hidable. Returns an array of hidden tabs.
     * @param tabIds The TAB ID or list of TAB IDs to hide.
     */
    function hide(tabIds: number | number[]): Promise<number[]>;

    /**
     * Removes an array of tabs from their lines of succession and prepends or appends them in a chain to another tab.
     * @param tabIds An array of tab IDs to move in the line of succession. For each tab in the array, the tab's current predecessors will have their successor set to the tab's current successor, and each tab will then be set to be the successor of the previous tab in the array. Any tabs not in the same window as the tab indicated by the second argument (or the first tab in the array, if no second argument) will be skipped.
     * @param [tabId] The ID of a tab to set as the successor of the last tab in the array, or `tabs.TAB_ID_NONE` to leave the last tab without a successor. If options.append is true, then this tab is made the predecessor of the first tab in the array instead.
     */
    function moveInSuccession(
        tabIds: number[],
        tabId?: number,
        options?: _MoveInSuccessionOptions
    ): Promise<any>;

    /**
     * Navigate to next page in tab's history, if available
     * @param [tabId] The ID of the tab to navigate forward.
     */
    function goForward(tabId?: number): Promise<void>;

    /**
     * Navigate to previous page in tab's history, if available.
     * @param [tabId] The ID of the tab to navigate backward.
     */
    function goBack(tabId?: number): Promise<void>;

    /* tabs events */
    /**
     * Fired when a tab is created. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events to be notified when a URL is set.
     * @param tab Details of the tab that was created.
     */
    const onCreated: WebExtEvent<(tab: Tab) => void>;

    /**
     * Fired when a tab is updated.
     * @param changeInfo Lists the changes to the state of the tab that was updated.
     * @param tab Gives the state of the tab that was updated.
     */
    const onUpdated: _TabsOnUpdatedEvent;

    /**
     * Fired when a tab is moved within a window. Only one move event is fired, representing the tab the user directly moved. Move events are not fired for the other tabs that must move in response. This event is not fired when a tab is moved between windows. For that, see `tabs.onDetached`.
     */
    const onMoved: WebExtEvent<(tabId: number, moveInfo: _OnMovedMoveInfo) => void>;

    /**
     * Fires when the selected tab in a window changes.
     * @param tabId The ID of the tab that has become active.
     * @deprecated Please use `tabs.onActivated`.
     */
    const onSelectionChanged:
        | WebExtEvent<(tabId: number, selectInfo: _OnSelectionChangedSelectInfo) => void>
        | undefined;

    /**
     * Fires when the selected tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to `tabs.onUpdated` events to be notified when a URL is set.
     * @param tabId The ID of the tab that has become active.
     * @deprecated Please use `tabs.onActivated`.
     */
    const onActiveChanged:
        | WebExtEvent<(tabId: number, selectInfo: _OnActiveChangedSelectInfo) => void>
        | undefined;

    /**
     * Fires when the active tab in a window changes. Note that the tab's URL may not be set at the time this event fired, but you can listen to onUpdated events to be notified when a URL is set.
     */
    const onActivated: WebExtEvent<(activeInfo: _OnActivatedActiveInfo) => void>;

    /**
     * Fired when the highlighted or selected tabs in a window changes.
     * @deprecated Please use `tabs.onHighlighted`.
     */
    const onHighlightChanged:
        | WebExtEvent<(selectInfo: _OnHighlightChangedSelectInfo) => void>
        | undefined;

    /** Fired when the highlighted or selected tabs in a window changes. */
    const onHighlighted: WebExtEvent<(highlightInfo: _OnHighlightedHighlightInfo) => void>;

    /** Fired when a tab is detached from a window, for example because it is being moved between windows. */
    const onDetached: WebExtEvent<(tabId: number, detachInfo: _OnDetachedDetachInfo) => void>;

    /** Fired when a tab is attached to a window, for example because it was moved between windows. */
    const onAttached: WebExtEvent<(tabId: number, attachInfo: _OnAttachedAttachInfo) => void>;

    /** Fired when a tab is closed. */
    const onRemoved: WebExtEvent<(tabId: number, removeInfo: _OnRemovedRemoveInfo) => void>;

    /** Fired when a tab is replaced with another tab due to prerendering or instant. */
    const onReplaced: WebExtEvent<(addedTabId: number, removedTabId: number) => void>;

    /** Fired when a tab is zoomed. */
    const onZoomChange: WebExtEvent<(ZoomChangeInfo: _OnZoomChangeZoomChangeInfo) => void>;
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
        title?: string | undefined;
        /** Data URL for the favicon, if available. */
        favicon?: string | undefined;
        /** The entry type, either `url` for a normal page link, or `search` for a search shortcut. */
        type?: _MostVisitedURLType | undefined;
    }

    /** The entry type, either `url` for a normal page link, or `search` for a search shortcut. */
    type _MostVisitedURLType = 'url' | 'search';

    interface _GetOptions {
        /** @deprecated Please use the other options to tune the results received from topSites. */
        providers?: string[] | undefined;
        /** The number of top sites to return, defaults to the value used by Firefox */
        limit?: number | undefined;
        /** Limit the result to a single top site link per domain */
        onePerDomain?: boolean | undefined;
        /** Include sites that the user has blocked from appearing on the Firefox new tab. */
        includeBlocked?: boolean | undefined;
        /** Include sites favicon if available. */
        includeFavicon?: boolean | undefined;
        /** Include sites that the user has pinned on the Firefox new tab. */
        includePinned?: boolean | undefined;
        /** Include search shortcuts appearing on the Firefox new tab. */
        includeSearchShortcuts?: boolean | undefined;
        /**
         * Return the sites that exactly appear on the user's new-tab page. When true, all other options are ignored except limit and includeFavicon. If the user disabled newtab Top Sites, the newtab parameter will be ignored.
         */
        newtab?: boolean | undefined;
    }

    /* topSites functions */
    /** Gets a list of top sites. */
    function get(options?: _GetOptions): Promise<MostVisitedURL[]>;
}

/**
 * Use the `browser.urlbar` API to experiment with new features in the URLBar. Restricted to Mozilla privileged WebExtensions.
 *
 * Permissions: `urlbar`
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.urlbar {
    /* urlbar types */
    /**
     * The state of an engagement made with the urlbar by the user. `start`: The user has started an engagement. `engagement`: The user has completed an engagement by picking a result. `abandonment`: The user has abandoned their engagement, for example by blurring the urlbar. `discard`: The engagement ended in a way that should be ignored by listeners.
     */
    type EngagementState = 'start' | 'engagement' | 'abandonment' | 'discard';

    /** A query performed in the urlbar. */
    interface Query {
        /** Whether the query's browser context is private. */
        isPrivate: boolean;
        /** The maximum number of results shown to the user. */
        maxResults: number;
        /** The query's search string. */
        searchString: string;
        /** List of acceptable source types to return. */
        sources: SourceType[];
    }

    /** A result of a query. Queries can have many results. Each result is created by a provider. */
    interface Result {
        /** An object with arbitrary properties depending on the result's type. */
        payload: object;
        /** The result's source. */
        source: SourceType;
        /** The result's type. */
        type: ResultType;
        /** Suggest a preferred position for this result within the result set. */
        suggestedIndex?: number | undefined;
    }

    /**
     * Possible types of results. `dynamic`: A result whose view and payload are specified by the extension. `remote_tab`: A synced tab from another device. `search`: A search suggestion from a search engine. `tab`: An open tab in the browser. `tip`: An actionable message to help the user with their query. `url`: A URL that's not one of the other types.
     */
    type ResultType = 'dynamic' | 'remote_tab' | 'search' | 'tab' | 'tip' | 'url';

    /** Options to the `search` function. */
    interface SearchOptions {
        /** Whether to focus the input field and select its contents. */
        focus?: boolean | undefined;
    }

    /**
     * Possible sources of results. `bookmarks`: The result comes from the user's bookmarks. `history`: The result comes from the user's history. `local`: The result comes from some local source not covered by another source type. `network`: The result comes from some network source not covered by another source type. `search`: The result comes from a search engine. `tabs`: The result is an open tab in the browser or a synced tab from another device.
     */
    type SourceType = 'bookmarks' | 'history' | 'local' | 'network' | 'search' | 'tabs';

    interface _UrlbarOnBehaviorRequestedEvent<
        TCallback = (query: Query) => 'active' | 'inactive' | 'restricting'
    > {
        addListener(cb: TCallback, providerName: string): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _UrlbarOnEngagementEvent<TCallback = (state: EngagementState) => void> {
        addListener(cb: TCallback, providerName: string): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _UrlbarOnQueryCanceledEvent<TCallback = (query: Query) => void> {
        addListener(cb: TCallback, providerName: string): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _UrlbarOnResultsRequestedEvent<TCallback = (query: Query) => Result[]> {
        addListener(cb: TCallback, providerName: string): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    interface _UrlbarOnResultPickedEvent<
        TCallback = (payload: object, elementName: string) => void
    > {
        addListener(cb: TCallback, providerName: string): void;
        removeListener(cb: TCallback): void;
        hasListener(cb: TCallback): boolean;
    }

    /* urlbar properties */
    /** Enables or disables the engagement telemetry. */
    const engagementTelemetry: types.Setting;

    /* urlbar functions */
    /** Closes the urlbar view in the current window. */
    function closeView(): Promise<any>;

    /**
     * Focuses the urlbar in the current window.
     * @param [select] If true, the text in the urlbar will also be selected.
     */
    function focus(select?: boolean): Promise<any>;

    /**
     * Starts a search in the urlbar in the current window.
     * @param searchString The search string.
     * @param [options] Options for the search.
     */
    function search(searchString: string, options?: SearchOptions): Promise<any>;

    /* urlbar events */
    /**
     * Before a query starts, this event is fired for the given provider. Its purpose is to request the provider's behavior for the query. The listener should return a behavior in response. By default, providers are inactive, so if your provider should always be inactive, you don't need to listen for this event.
     * @param query The query for which the behavior is requested.
     * @returns The behavior of the provider for the query.
     */
    const onBehaviorRequested: _UrlbarOnBehaviorRequestedEvent;

    /**
     * This event is fired when the user starts and ends an engagement with the urlbar.
     * @param state The state of the engagement.
     */
    const onEngagement: _UrlbarOnEngagementEvent;

    /**
     * This event is fired for the given provider when a query is canceled. The listener should stop any ongoing fetch or creation of results and clean up its resources.
     * @param query The query that was canceled.
     */
    const onQueryCanceled: _UrlbarOnQueryCanceledEvent;

    /**
     * When a query starts, this event is fired for the given provider if the provider is active for the query and there are no other providers that are restricting. Its purpose is to request the provider's results for the query. The listener should return a list of results in response.
     * @param query The query for which results are requested.
     * @returns The results that the provider fetched for the query.
     */
    const onResultsRequested: _UrlbarOnResultsRequestedEvent;

    /**
     * Typically, a provider includes a `url` property in its results' payloads. When the user picks a result with a URL, Firefox automatically loads the URL. URLs don't make sense for every result type, however. When the user picks a result without a URL, this event is fired. The provider should take an appropriate action in response. Currently the only applicable `ResultTypes` are `dynamic` and `tip`.
     * @param payload The payload of the result that was picked.
     * @param elementName If the result is a dynamic type, this is the name of the element in the result view that was picked. If the result is not a dynamic type, this is an empty string.
     */
    const onResultPicked: _UrlbarOnResultPickedEvent;
}

/**
 * Use the `browser.windows` API to interact with browser windows. You can use this API to create, modify, and rearrange windows in the browser.
 *
 * Not allowed in: Content scripts, Devtools pages
 */
declare namespace browser.windows {
    /* windows types */
    /**
     * The type of browser window this is. Under some circumstances a Window may not be assigned type property, for example when querying closed windows from the `sessions` API.
     */
    type WindowType = 'normal' | 'popup' | 'panel' | 'app' | 'devtools';

    /**
     * The state of this browser window. Under some circumstances a Window may not be assigned state property, for example when querying closed windows from the `sessions` API.
     */
    type WindowState = 'normal' | 'minimized' | 'maximized' | 'fullscreen' | 'docked';

    interface Window {
        /**
         * The ID of the window. Window IDs are unique within a browser session. Under some circumstances a Window may not be assigned an ID, for example when querying windows using the `sessions` API, in which case a session ID may be present.
         */
        id?: number | undefined;
        /** Whether the window is currently the focused window. */
        focused: boolean;
        /**
         * The offset of the window from the top edge of the screen in pixels. Under some circumstances a Window may not be assigned top property, for example when querying closed windows from the `sessions` API.
         */
        top?: number | undefined;
        /**
         * The offset of the window from the left edge of the screen in pixels. Under some circumstances a Window may not be assigned left property, for example when querying closed windows from the `sessions` API.
         */
        left?: number | undefined;
        /**
         * The width of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned width property, for example when querying closed windows from the `sessions` API.
         */
        width?: number | undefined;
        /**
         * The height of the window, including the frame, in pixels. Under some circumstances a Window may not be assigned height property, for example when querying closed windows from the `sessions` API.
         */
        height?: number | undefined;
        /** Array of `tabs.Tab` objects representing the current tabs in the window. */
        tabs?: tabs.Tab[] | undefined;
        /** Whether the window is incognito. */
        incognito: boolean;
        /** The type of browser window this is. */
        type?: WindowType | undefined;
        /** The state of this browser window. */
        state?: WindowState | undefined;
        /** Whether the window is set to be always on top. */
        alwaysOnTop: boolean;
        /** The session ID used to uniquely identify a Window obtained from the `sessions` API. */
        sessionId?: string | undefined;
        /** The title of the window. Read-only. */
        title?: string | undefined;
    }

    /**
     * Specifies what type of browser window to create. The 'panel' and 'detached_panel' types create a popup unless the '--enable-panels' flag is set.
     */
    type CreateType = 'normal' | 'popup' | 'panel' | 'detached_panel';

    /** Specifies whether the `windows.Window` returned should contain a list of the `tabs.Tab` objects. */
    interface GetInfo {
        /**
         * If true, the `windows.Window` returned will have a `tabs` property that contains a list of the `tabs.Tab` objects. The `Tab` objects only contain the `url`, `title` and `favIconUrl` properties if the extension's manifest file includes the `"tabs"` permission.
         */
        populate?: boolean | undefined;
        /**
         * `windowTypes` is deprecated and ignored on Firefox.
         * @deprecated `windowTypes` is deprecated and ignored on Firefox.
         */
        windowTypes?: WindowType[] | undefined;
    }

    /**
     * Specifies properties used to filter the `windows.Window` returned and to determine whether they should contain a list of the `tabs.Tab` objects.
     */
    interface _GetAllGetInfo {
        /**
         * If set, the `windows.Window` returned will be filtered based on its type. If unset the default filter is set to `['app', 'normal', 'panel', 'popup']`, with `'app'` and `'panel'` window types limited to the extension's own windows.
         * @deprecated If set, the `windows.Window` returned will be filtered based on its type. If unset the default filter is set to `['app', 'normal', 'panel', 'popup']`, with `'app'` and `'panel'` window types limited to the extension's own windows.
         */
        windowTypes?: WindowType[] | undefined;
        /**
         * If true, the `windows.Window` returned will have a `tabs` property that contains a list of the `tabs.Tab` objects. The `Tab` objects only contain the `url`, `title` and `favIconUrl` properties if the extension's manifest file includes the `"tabs"` permission.
         */
        populate?: boolean | undefined;
    }

    interface _CreateCreateData {
        /**
         * A URL or array of URLs to open as tabs in the window. Fully-qualified URLs must include a scheme (i.e. 'http://www.google.com', not 'www.google.com'). Relative URLs will be relative to the current page within the extension. Defaults to the New Tab Page.
         */
        url?: string | string[] | undefined;
        /** The id of the tab for which you want to adopt to the new window. */
        tabId?: number | undefined;
        /**
         * The number of pixels to position the new window from the left edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels.
         */
        left?: number | undefined;
        /**
         * The number of pixels to position the new window from the top edge of the screen. If not specified, the new window is offset naturally from the last focused window. This value is ignored for panels.
         */
        top?: number | undefined;
        /**
         * The width in pixels of the new window, including the frame. If not specified defaults to a natural width.
         */
        width?: number | undefined;
        /**
         * The height in pixels of the new window, including the frame. If not specified defaults to a natural height.
         */
        height?: number | undefined;
        /** If true, opens an active window. If false, opens an inactive window. */
        focused?: boolean | undefined;
        /** Whether the new window should be an incognito window. */
        incognito?: boolean | undefined;
        /**
         * Specifies what type of browser window to create. The 'panel' and 'detached_panel' types create a popup unless the '--enable-panels' flag is set.
         */
        type?: CreateType | undefined;
        /**
         * The initial state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left', 'top', 'width' or 'height'.
         */
        state?: WindowState | undefined;
        /** Allow scripts to close the window. */
        allowScriptsToClose?: boolean | undefined;
        /** The CookieStoreId to use for all tabs that were created when the window is opened. */
        cookieStoreId?: string | undefined;
        /** A string to add to the beginning of the window title. */
        titlePreface?: string | undefined;
    }

    interface _UpdateUpdateInfo {
        /**
         * The offset from the left edge of the screen to move the window to in pixels. This value is ignored for panels.
         */
        left?: number | undefined;
        /**
         * The offset from the top edge of the screen to move the window to in pixels. This value is ignored for panels.
         */
        top?: number | undefined;
        /** The width to resize the window to in pixels. This value is ignored for panels. */
        width?: number | undefined;
        /** The height to resize the window to in pixels. This value is ignored for panels. */
        height?: number | undefined;
        /**
         * If true, brings the window to the front. If false, brings the next window in the z-order to the front.
         */
        focused?: boolean | undefined;
        /**
         * If true, causes the window to be displayed in a manner that draws the user's attention to the window, without changing the focused window. The effect lasts until the user changes focus to the window. This option has no effect if the window already has focus. Set to false to cancel a previous draw attention request.
         */
        drawAttention?: boolean | undefined;
        /**
         * The new state of the window. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined with 'left', 'top', 'width' or 'height'.
         */
        state?: WindowState | undefined;
        /** A string to add to the beginning of the window title. */
        titlePreface?: string | undefined;
    }

    /* windows properties */
    /** The windowId value that represents the absence of a browser window. */
    const WINDOW_ID_NONE: number;

    /** The windowId value that represents the current window. */
    const WINDOW_ID_CURRENT: number;

    /* windows functions */
    /** Gets details about a window. */
    function get(windowId: number, getInfo?: GetInfo): Promise<Window>;

    /** Gets the current window. */
    function getCurrent(getInfo?: GetInfo): Promise<Window>;

    /** Gets the window that was most recently focused — typically the window 'on top'. */
    function getLastFocused(getInfo?: GetInfo): Promise<Window>;

    /**
     * Gets all windows.
     * @param [getInfo] Specifies properties used to filter the `windows.Window` returned and to determine whether they should contain a list of the `tabs.Tab` objects.
     */
    function getAll(getInfo?: _GetAllGetInfo): Promise<Window[]>;

    /** Creates (opens) a new browser with any optional sizing, position or default URL provided. */
    function create(createData?: _CreateCreateData): Promise<Window>;

    /**
     * Updates the properties of a window. Specify only the properties that you want to change; unspecified properties will be left unchanged.
     */
    function update(windowId: number, updateInfo: _UpdateUpdateInfo): Promise<Window>;

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
     * Fired when the currently focused window changes. Will be `windows.WINDOW_ID_NONE` if all browser windows have lost focus. Note: On some Linux window managers, WINDOW_ID_NONE will always be sent immediately preceding a switch from one browser window to another.
     * @param windowId ID of the newly focused window.
     */
    const onFocusChanged: WebExtEvent<(windowId: number) => void>;
}
