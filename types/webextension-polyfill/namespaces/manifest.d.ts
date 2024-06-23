//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.manifest
 *
 * Permissions: -
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * Copyright 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 * Copyright 2013 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Experiments } from "./experiments";
import { ExtensionTypes } from "./extensionTypes";

export namespace Manifest {
    /**
     * Common properties for all manifest.json files
     */
    interface ManifestBase {
        manifest_version: number;

        /**
         * The applications property is deprecated, please use 'browser_specific_settings'
         * Optional.
         */
        applications?: DeprecatedApplications;

        /**
         * Optional.
         */
        browser_specific_settings?: BrowserSpecificSettings;

        name: string;

        /**
         * Optional.
         */
        short_name?: string;

        /**
         * Optional.
         */
        description?: string;

        /**
         * Optional.
         */
        author?: string;

        version: string;

        /**
         * Optional.
         */
        homepage_url?: string;

        /**
         * Optional.
         */
        install_origins?: string[];

        /**
         * Optional.
         */
        developer?: ManifestBaseDeveloperType;

        /**
         * In addition to the version field, which is used for update purposes, version_name can be set to a descriptive version
         * string and will be used for display purposes if present. If no version_name is present,
         * the version field will be used for display purposes as well.
         * Optional.
         */
        version_name?: string;
    }

    /**
     * Represents a WebExtension manifest.json file
     */
    interface WebExtensionManifest extends ManifestBase {
        /**
         * Optional.
         */
        minimum_chrome_version?: string;

        /**
         * Optional.
         */
        minimum_opera_version?: string;

        /**
         * Optional.
         */
        icons?: Record<string, ExtensionFileUrl>;

        /**
         * Optional.
         */
        incognito?: WebExtensionManifestIncognitoEnum;

        /**
         * Optional.
         */
        background?:
            | WebExtensionManifestBackgroundC1Type
            | WebExtensionManifestBackgroundC2Type
            | WebExtensionManifestBackgroundC3Type;

        /**
         * Optional.
         */
        options_ui?: WebExtensionManifestOptionsUiType;

        /**
         * Optional.
         */
        content_scripts?: ContentScript[];

        /**
         * Optional.
         */
        content_security_policy?: string | WebExtensionManifestContentSecurityPolicyC2Type;

        /**
         * Optional.
         */
        permissions?: PermissionOrOrigin[] | Permission[];

        /**
         * Optional.
         */
        granted_host_permissions?: boolean;

        /**
         * Optional.
         */
        host_permissions?: MatchPattern[];

        /**
         * Optional.
         */
        optional_permissions?: OptionalPermissionOrOrigin[];

        /**
         * Optional.
         */
        web_accessible_resources?: string[] | WebExtensionManifestWebAccessibleResourcesC2ItemType[];

        /**
         * Optional.
         */
        hidden?: boolean;

        /**
         * Optional.
         */
        action?: ActionManifest;

        /**
         * Optional.
         */
        browser_action?: ActionManifest;

        /**
         * Optional.
         */
        chrome_settings_overrides?: WebExtensionManifestChromeSettingsOverridesType;

        /**
         * Optional.
         */
        commands?: Record<string, WebExtensionManifestCommandsType>;

        /**
         * Optional.
         */
        declarative_net_request?: WebExtensionManifestDeclarativeNetRequestType;

        /**
         * Optional.
         */
        devtools_page?: ExtensionURL;

        /**
         * Optional.
         */
        experiment_apis?: WebExtensionManifestExperimentApisType;

        /**
         * A list of protocol handler definitions.
         * Optional.
         */
        protocol_handlers?: ProtocolHandler[];

        /**
         * Optional.
         */
        default_locale?: string;

        /**
         * Optional.
         */
        l10n_resources?: string[];

        /**
         * Optional.
         */
        omnibox?: WebExtensionManifestOmniboxType;

        /**
         * Optional.
         */
        page_action?: WebExtensionManifestPageActionType;

        /**
         * Optional.
         */
        sidebar_action?: WebExtensionManifestSidebarActionType;

        /**
         * Optional.
         */
        theme_experiment?: ThemeExperiment;

        /**
         * Optional.
         */
        chrome_url_overrides?: WebExtensionManifestChromeUrlOverridesType;

        /**
         * Optional.
         */
        user_scripts?: WebExtensionManifestUserScriptsType;
    }

    /**
     * Represents a WebExtension language pack manifest.json file
     */
    interface WebExtensionLangpackManifest extends ManifestBase {
        langpack_id: string;

        languages: Record<string, WebExtensionLangpackManifestLanguagesPatternType>;

        /**
         * Optional.
         */
        sources?: Record<string, WebExtensionLangpackManifestSourcesPatternType>;
    }

    /**
     * Represents a WebExtension dictionary manifest.json file
     */
    interface WebExtensionDictionaryManifest extends ManifestBase {
        dictionaries: Record<string, string>;
    }

    /**
     * Represents a WebExtension site permissions manifest.json file
     */
    interface WebExtensionSitePermissionsManifest extends ManifestBase {
        site_permissions: SitePermission[];

        install_origins: [string];
    }

    interface ThemeIcons {
        /**
         * A light icon to use for dark themes
         */
        light: ExtensionURL;

        /**
         * The dark icon to use for light themes
         */
        dark: ExtensionURL;

        /**
         * The size of the icons
         */
        size: number;
    }

    type OptionalPermissionNoPrompt =
        | "idle"
        | "cookies"
        | "menus.overrideContext"
        | "scripting"
        | "search"
        | "activeTab"
        | "webRequest"
        | "webRequestBlocking"
        | "webRequestFilterResponse"
        | "webRequestFilterResponse.serviceWorkerScript";

    type OptionalPermission =
        | OptionalPermissionNoPrompt
        | "clipboardRead"
        | "clipboardWrite"
        | "geolocation"
        | "notifications"
        | "bookmarks"
        | "browserSettings"
        | "browsingData"
        | "declarativeNetRequestFeedback"
        | "devtools"
        | "downloads"
        | "downloads.open"
        | "find"
        | "history"
        | "management"
        | "pkcs11"
        | "privacy"
        | "proxy"
        | "nativeMessaging"
        | "sessions"
        | "tabs"
        | "tabHide"
        | "topSites"
        | "webNavigation"
        | "identity.email";

    type OptionalPermissionOrOrigin = OptionalPermission | MatchPattern;

    type PermissionPrivileged = "mozillaAddons" | "activityLog" | "networkStatus" | "normandyAddonStudy" | "urlbar";

    type PermissionNoPrompt =
        | OptionalPermissionNoPrompt
        | PermissionPrivileged
        | "alarms"
        | "storage"
        | "unlimitedStorage"
        | "captivePortal"
        | "contextualIdentities"
        | "declarativeNetRequestWithHostAccess"
        | "dns"
        | "geckoProfiler"
        | "identity"
        | "menus"
        | "contextMenus"
        | "theme";

    type Permission = PermissionNoPrompt | OptionalPermission | "declarativeNetRequest" | string;

    type PermissionOrOrigin = Permission | MatchPattern;

    type SitePermission = "midi" | "midi-sysex";

    type HttpURL = string;

    type ExtensionURL = string;

    type ExtensionFileUrl = string;

    type ImageDataOrExtensionURL = string;

    type ExtensionID = string;

    interface FirefoxSpecificProperties {
        /**
         * Optional.
         */
        id?: ExtensionID;

        /**
         * Optional.
         */
        update_url?: string;

        /**
         * Optional.
         */
        strict_min_version?: string;

        /**
         * Optional.
         */
        strict_max_version?: string;
    }

    interface GeckoAndroidSpecificProperties {
        /**
         * Optional.
         */
        strict_min_version?: string;

        /**
         * Optional.
         */
        strict_max_version?: string;
    }

    interface DeprecatedApplications {
        /**
         * Optional.
         */
        gecko?: FirefoxSpecificProperties;
    }

    interface BrowserSpecificSettings {
        /**
         * Optional.
         */
        gecko?: FirefoxSpecificProperties;

        /**
         * Optional.
         */
        gecko_android?: GeckoAndroidSpecificProperties;
    }

    type MatchPattern = "<all_urls>" | MatchPatternRestricted | MatchPatternUnestricted;

    /**
     * Same as MatchPattern above, but excludes <all_urls>
     */
    type MatchPatternRestricted = string;

    /**
     * Mostly unrestricted match patterns for privileged add-ons. This should technically be rejected for unprivileged add-ons,
     * but, reasons. The MatchPattern class will still refuse privileged schemes for those extensions.
     */
    type MatchPatternUnestricted = string;

    /**
     * Details of the script or CSS to inject. Either the code or the file property must be set,
     * but both may not be set at the same time. Based on InjectDetails, but using underscore rather than camel case naming
     * conventions.
     */
    interface ContentScript {
        matches: MatchPattern[];

        /**
         * Optional.
         */
        exclude_matches?: MatchPattern[];

        /**
         * Optional.
         */
        include_globs?: string[];

        /**
         * Optional.
         */
        exclude_globs?: string[];

        /**
         * The list of CSS files to inject
         * Optional.
         */
        css?: ExtensionURL[];

        /**
         * The list of JS files to inject
         * Optional.
         */
        js?: ExtensionURL[];

        /**
         * If allFrames is <code>true</code>, implies that the JavaScript or CSS should be injected into all frames of current page.
         * By default, it's <code>false</code> and is only injected into the top frame.
         * Optional.
         */
        all_frames?: boolean;

        /**
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has
         * access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is <code>false</code>.
         * Optional.
         */
        match_about_blank?: boolean;

        /**
         * The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle".
         * Optional.
         */
        run_at?: ExtensionTypes.RunAt;
    }

    type IconPath = Record<string, ExtensionFileUrl> | ExtensionFileUrl;

    type IconImageData = Record<string, ImageData> | ImageData;

    interface ActionManifest {
        /**
         * Optional.
         */
        default_title?: string;

        /**
         * Optional.
         */
        default_icon?: IconPath;

        /**
         * Specifies icons to use for dark and light themes
         * Optional.
         */
        theme_icons?: ThemeIcons[];

        /**
         * Optional.
         */
        default_popup?: string;

        /**
         * Deprecated in Manifest V3.
         * Optional.
         */
        browser_style?: boolean;

        /**
         * Defines the location the browserAction will appear by default.  The default location is navbar.
         * Optional.
         */
        default_area?: ActionManifestDefaultAreaEnum;
    }

    type KeyName = string;

    /**
     * Represents a protocol handler definition.
     */
    interface ProtocolHandler {
        /**
         * A user-readable title string for the protocol handler. This will be displayed to the user in interface objects as needed.
         */
        name: string;

        /**
         * The protocol the site wishes to handle, specified as a string. For example, you can register to handle SMS text message
         * links by registering to handle the "sms" scheme.
         */
        protocol:
            | "bitcoin"
            | "dat"
            | "dweb"
            | "ftp"
            | "geo"
            | "gopher"
            | "im"
            | "ipfs"
            | "ipns"
            | "irc"
            | "ircs"
            | "magnet"
            | "mailto"
            | "matrix"
            | "mms"
            | "news"
            | "nntp"
            | "sip"
            | "sms"
            | "smsto"
            | "ssb"
            | "ssh"
            | "tel"
            | "urn"
            | "webcal"
            | "wtai"
            | "xmpp"
            | string;

        /**
         * The URL of the handler, as a string. This string should include "%s" as a placeholder which will be replaced with the
         * escaped URL of the document to be handled. This URL might be a true URL, or it could be a phone number, email address,
         * or so forth.
         */
        uriTemplate: ExtensionURL | HttpURL;
    }

    type ThemeColor = string | [number, number, number] | [number, number, number, number];

    interface ThemeExperiment {
        /**
         * Optional.
         */
        stylesheet?: ExtensionURL;

        /**
         * Optional.
         */
        images?: ThemeExperimentImagesType;

        /**
         * Optional.
         */
        colors?: ThemeExperimentColorsType;

        /**
         * Optional.
         */
        properties?: ThemeExperimentPropertiesType;
    }

    interface ThemeType {
        /**
         * Optional.
         */
        images?: ThemeTypeImagesType;

        /**
         * Optional.
         */
        colors?: ThemeTypeColorsType;

        /**
         * Optional.
         */
        properties?: ThemeTypePropertiesType;
    }

    /**
     * Contents of manifest.json for a static theme
     */
    interface ThemeManifest extends ManifestBase {
        theme: ThemeType;

        /**
         * Optional.
         */
        dark_theme?: ThemeType;

        /**
         * Optional.
         */
        default_locale?: string;

        /**
         * Optional.
         */
        theme_experiment?: ThemeExperiment;

        /**
         * Optional.
         */
        icons?: Record<string, string>;
    }

    interface ManifestBaseDeveloperType {
        /**
         * Optional.
         */
        name?: string;

        /**
         * Optional.
         */
        url?: string;
    }

    type WebExtensionManifestIncognitoEnum = "not_allowed" | "spanning";

    interface WebExtensionManifestBackgroundC1Type {
        page: ExtensionURL;

        /**
         * Optional.
         */
        persistent?: boolean;
    }

    type WebExtensionManifestBackgroundC2TypeEnum = "module" | "classic";

    interface WebExtensionManifestBackgroundC2Type {
        scripts: ExtensionURL[];

        /**
         * Optional.
         */
        type?: WebExtensionManifestBackgroundC2TypeEnum;

        /**
         * Optional.
         */
        persistent?: boolean;
    }

    interface WebExtensionManifestBackgroundC3Type {
        service_worker: ExtensionURL;

        /**
         * Even though Manifest V3, does not support multiple background scripts, you can optionally declare the service worker as
         * an ES Module by specifying "type": "module", which allows you to import further code.
         * Optional.
         */
        type?: "module";
    }

    interface WebExtensionManifestOptionsUiType {
        page: ExtensionURL;

        /**
         * Defaults to true in Manifest V2; Deprecated in Manifest V3.
         * Optional.
         */
        browser_style?: boolean;

        /**
         * chrome_style is ignored in Firefox. Its replacement (browser_style) has been deprecated.
         * Optional.
         */
        chrome_style?: boolean;

        /**
         * Optional.
         */
        open_in_tab?: boolean;
    }

    interface WebExtensionManifestContentSecurityPolicyC2Type {
        /**
         * The Content Security Policy used for extension pages.
         * Optional.
         */
        extension_pages?: string;

        /**
         * In addition, Manifest V3 disallows certain CSP modifications for `extension_pages` that were permitted in Manifest V2.
         * The `script-src`, `object-src`, and `worker-src` directives may only have the following values:
         * - `self`
         * - `none` - Any localhost source, (`http://localhost`, `http://127.0.0.1`, or any port on those domains)
         * Optional.
         */
        sandbox?: string;
    }

    interface WebExtensionManifestWebAccessibleResourcesC2ItemType {
        resources: string[];

        /**
         * Optional.
         */
        matches?: MatchPattern[];

        /**
         * Optional.
         */
        extension_ids?: Array<ExtensionID | "*">;
    }

    interface WebExtensionManifestChromeSettingsOverridesSearchProviderParamsItemType {
        /**
         * A url parameter name
         */
        name: string;

        /**
         * The type of param can be either "purpose" or "pref".
         * Optional.
         */
        condition?: "purpose" | "pref";

        /**
         * The preference to retrieve the value from.
         * Optional.
         */
        pref?: string;

        /**
         * The context that initiates a search, required if condition is "purpose".
         * Optional.
         */
        purpose?: "contextmenu" | "searchbar" | "homepage" | "keyword" | "newtab";

        /**
         * A url parameter value.
         * Optional.
         */
        value?: string;
    }

    interface WebExtensionManifestChromeSettingsOverridesSearchProviderType {
        name: string;

        /**
         * Optional.
         */
        keyword?: string | string[];

        search_url: string;

        /**
         * Optional.
         */
        favicon_url?: string;

        /**
         * Optional.
         */
        suggest_url?: string;

        /**
         * GET parameters to the search_url as a query string.
         * Optional.
         */
        search_url_get_params?: string;

        /**
         * POST parameters to the search_url as a query string.
         * Optional.
         */
        search_url_post_params?: string;

        /**
         * GET parameters to the suggest_url as a query string.
         * Optional.
         */
        suggest_url_get_params?: string;

        /**
         * POST parameters to the suggest_url as a query string.
         * Optional.
         */
        suggest_url_post_params?: string;

        /**
         * Optional.
         */
        search_form?: string;

        /**
         * Encoding of the search term.
         * Optional.
         */
        encoding?: string;

        /**
         * Sets the default engine to a built-in engine only.
         * Optional.
         */
        is_default?: boolean;

        /**
         * A list of optional search url parameters. This allows the additon of search url parameters based on how the search is
         * performed in Firefox.
         * Optional.
         */
        params?: WebExtensionManifestChromeSettingsOverridesSearchProviderParamsItemType[];
    }

    interface WebExtensionManifestChromeSettingsOverridesType {
        /**
         * Optional.
         */
        homepage?: string;

        /**
         * Optional.
         */
        search_provider?: WebExtensionManifestChromeSettingsOverridesSearchProviderType;
    }

    interface WebExtensionManifestCommandsSuggestedKeyType {
        /**
         * Optional.
         */
        default?: KeyName;

        /**
         * Optional.
         */
        mac?: KeyName;

        /**
         * Optional.
         */
        linux?: KeyName;

        /**
         * Optional.
         */
        windows?: KeyName;

        /**
         * Optional.
         */
        chromeos?: string;

        /**
         * Optional.
         */
        android?: string;

        /**
         * Optional.
         */
        ios?: string;
    }

    interface WebExtensionManifestCommandsType {
        /**
         * Optional.
         */
        suggested_key?: WebExtensionManifestCommandsSuggestedKeyType;

        /**
         * Optional.
         */
        description?: string;
    }

    interface WebExtensionManifestDeclarativeNetRequestRuleResourcesItemType {
        /**
         * A non-empty string uniquely identifying the ruleset. IDs beginning with '_' are reserved for internal use.
         */
        id: string;

        /**
         * Whether the ruleset is enabled by default.
         */
        enabled: boolean;

        /**
         * The path of the JSON ruleset relative to the extension directory.
         */
        path: ExtensionURL;
    }

    interface WebExtensionManifestDeclarativeNetRequestType {
        rule_resources: WebExtensionManifestDeclarativeNetRequestRuleResourcesItemType[];
    }

    interface WebExtensionManifestExperimentApisType {
        [s: string]: Experiments.ExperimentAPI;
    }

    interface WebExtensionManifestOmniboxType {
        keyword: string;
    }

    interface WebExtensionManifestPageActionType {
        /**
         * Optional.
         */
        default_title?: string;

        /**
         * Optional.
         */
        default_icon?: IconPath;

        /**
         * Optional.
         */
        default_popup?: string;

        /**
         * Deprecated in Manifest V3.
         * Optional.
         */
        browser_style?: boolean;

        /**
         * Optional.
         */
        show_matches?: MatchPattern[];

        /**
         * Optional.
         */
        hide_matches?: MatchPatternRestricted[];

        /**
         * Optional.
         */
        pinned?: boolean;
    }

    interface WebExtensionManifestSidebarActionType {
        /**
         * Optional.
         */
        default_title?: string;

        /**
         * Optional.
         */
        default_icon?: IconPath;

        /**
         * Defaults to true in Manifest V2; Deprecated in Manifest V3.
         * Optional.
         */
        browser_style?: boolean;

        default_panel: string;

        /**
         * Whether or not the sidebar is opened at install. Default is <code>true</code>.
         * Optional.
         */
        open_at_install?: boolean;
    }

    interface WebExtensionManifestChromeUrlOverridesType {
        /**
         * Optional.
         */
        newtab?: ExtensionURL;
    }

    interface WebExtensionManifestUserScriptsType {
        /**
         * Optional.
         */
        api_script?: ExtensionURL;
    }

    interface WebExtensionLangpackManifestLanguagesPatternType {
        chrome_resources: Record<string, ExtensionURL | Record<string, ExtensionURL>>;

        version: string;
    }

    interface WebExtensionLangpackManifestSourcesPatternType {
        base_path: ExtensionURL;

        /**
         * Optional.
         */
        paths?: string[];
    }

    /**
     * Defines the location the browserAction will appear by default.  The default location is navbar.
     */
    type ActionManifestDefaultAreaEnum = "navbar" | "menupanel" | "tabstrip" | "personaltoolbar";

    interface ThemeExperimentImagesType {
        [s: string]: unknown;
    }

    interface ThemeExperimentColorsType {
        [s: string]: unknown;
    }

    interface ThemeExperimentPropertiesType {
        [s: string]: unknown;
    }

    interface ThemeTypeImagesType {
        /**
         * Optional.
         */
        additional_backgrounds?: ImageDataOrExtensionURL[];

        /**
         * Optional.
         */
        theme_frame?: ImageDataOrExtensionURL;
    }

    interface ThemeTypeColorsType {
        /**
         * Optional.
         */
        tab_selected?: ThemeColor;

        /**
         * Optional.
         */
        frame?: ThemeColor;

        /**
         * Optional.
         */
        frame_inactive?: ThemeColor;

        /**
         * Optional.
         */
        tab_background_text?: ThemeColor;

        /**
         * Optional.
         */
        tab_background_separator?: ThemeColor;

        /**
         * Optional.
         */
        tab_loading?: ThemeColor;

        /**
         * Optional.
         */
        tab_text?: ThemeColor;

        /**
         * Optional.
         */
        tab_line?: ThemeColor;

        /**
         * Optional.
         */
        toolbar?: ThemeColor;

        /**
         * This color property is an alias of 'bookmark_text'.
         * Optional.
         */
        toolbar_text?: ThemeColor;

        /**
         * Optional.
         */
        bookmark_text?: ThemeColor;

        /**
         * Optional.
         */
        toolbar_field?: ThemeColor;

        /**
         * Optional.
         */
        toolbar_field_text?: ThemeColor;

        /**
         * Optional.
         */
        toolbar_field_border?: ThemeColor;

        /**
         * Optional.
         */
        toolbar_top_separator?: ThemeColor;

        /**
         * Optional.
         */
        toolbar_bottom_separator?: ThemeColor;

        /**
         * Optional.
         */
        toolbar_vertical_separator?: ThemeColor;

        /**
         * Optional.
         */
        icons?: ThemeColor;

        /**
         * Optional.
         */
        icons_attention?: ThemeColor;

        /**
         * Optional.
         */
        button_background_hover?: ThemeColor;

        /**
         * Optional.
         */
        button_background_active?: ThemeColor;

        /**
         * Optional.
         */
        popup?: ThemeColor;

        /**
         * Optional.
         */
        popup_text?: ThemeColor;

        /**
         * Optional.
         */
        popup_border?: ThemeColor;

        /**
         * Optional.
         */
        toolbar_field_focus?: ThemeColor;

        /**
         * Optional.
         */
        toolbar_field_text_focus?: ThemeColor;

        /**
         * Optional.
         */
        toolbar_field_border_focus?: ThemeColor;

        /**
         * Optional.
         */
        popup_highlight?: ThemeColor;

        /**
         * Optional.
         */
        popup_highlight_text?: ThemeColor;

        /**
         * Optional.
         */
        ntp_background?: ThemeColor;

        /**
         * Optional.
         */
        ntp_card_background?: ThemeColor;

        /**
         * Optional.
         */
        ntp_text?: ThemeColor;

        /**
         * Optional.
         */
        sidebar?: ThemeColor;

        /**
         * Optional.
         */
        sidebar_border?: ThemeColor;

        /**
         * Optional.
         */
        sidebar_text?: ThemeColor;

        /**
         * Optional.
         */
        sidebar_highlight?: ThemeColor;

        /**
         * Optional.
         */
        sidebar_highlight_text?: ThemeColor;

        /**
         * Optional.
         */
        toolbar_field_highlight?: ThemeColor;

        /**
         * Optional.
         */
        toolbar_field_highlight_text?: ThemeColor;
    }

    type ThemeTypePropertiesAdditionalBackgroundsAlignmentItemEnum =
        | "bottom"
        | "center"
        | "left"
        | "right"
        | "top"
        | "center bottom"
        | "center center"
        | "center top"
        | "left bottom"
        | "left center"
        | "left top"
        | "right bottom"
        | "right center"
        | "right top";

    type ThemeTypePropertiesAdditionalBackgroundsTilingItemEnum = "no-repeat" | "repeat" | "repeat-x" | "repeat-y";

    type ThemeTypePropertiesColorSchemeEnum = "auto" | "light" | "dark" | "system";

    type ThemeTypePropertiesContentColorSchemeEnum = "auto" | "light" | "dark" | "system";

    interface ThemeTypePropertiesType {
        /**
         * Optional.
         */
        additional_backgrounds_alignment?: ThemeTypePropertiesAdditionalBackgroundsAlignmentItemEnum[];

        /**
         * Optional.
         */
        additional_backgrounds_tiling?: ThemeTypePropertiesAdditionalBackgroundsTilingItemEnum[];

        /**
         * Optional.
         */
        color_scheme?: ThemeTypePropertiesColorSchemeEnum;

        /**
         * Optional.
         */
        content_color_scheme?: ThemeTypePropertiesContentColorSchemeEnum;
    }

    interface Static {
        [s: string]: unknown;
    }
}
