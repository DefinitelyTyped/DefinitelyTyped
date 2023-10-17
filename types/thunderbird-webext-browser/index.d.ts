interface WebExtEvent<TCallback extends (...args: any[]) => any> {
    addListener(cb: TCallback): void;
    removeListener(cb: TCallback): void;
    hasListener(cb: TCallback): boolean;
}

/**
 * **The root object of the WebExtension API for Thunderbird**
 *
 * Also known as the `browser` object. There are differences between the Thunderbird,
 * Firefox, and generic WebExtension APIs.
 *
 * The Thunderbird API is documented at
 * [thunderbird.net](https://webextension-api.thunderbird.net/en/latest/).
 *
 * @version Thunderbird 109.0
 */
declare namespace messenger {
    /**
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json
     */
    export namespace _manifest {
        /* _manifest types */
        export type OptionalPermission = OptionalPermissionNoPrompt | _OptionalPermission;

        export interface ActionManifest {
            /**
             * The label of the action button, defaults to its title. Can be set to
             * an empty string to not display any label. If the containing toolbar is
             * configured to display text only, the title will be used as fallback.
             */
            default_label?: string | undefined;
            /**
             * The title of the action button. This shows up in the tooltip and the
             * label. Defaults to the add-on name.
             */
            default_title?: string | undefined;
            /** The paths to one or more icons for the action button. */
            default_icon?: IconPath | undefined;
            /**
             * Specifies dark and light icons to be used with themes. The `light`
             * icon is used on dark backgrounds and vice versa. **Note:** The default
             * theme uses the `default_icon` for light backgrounds (if specified).
             */
            theme_icons?: ThemeIcons[] | undefined;
            /**
             * The html document to be opened as a popup when the user clicks on the
             * action button.
             */
            default_popup?: string | undefined;
            /**
             * Enable browser styles. See the MDN documentation on browser styles for
             * more information.
             */
            browser_style?: boolean | undefined;
            /**
             * Defines the location the action button will appear. The default
             * location is `maintoolbar`.
             */
            default_area?: _ActionManifestDefaultArea | undefined;
            /**
             * Defines the windows, the action button should appear in. Defaults to
             * showing it only in the `normal` Thunderbird window, but can also be
             * shown in the `messageDisplay` window.
             */
            default_windows?: _ActionManifestDefaultWindows[] | undefined;
        }

        /** Represents a WebExtension manifest.json file */
        export interface WebExtensionManifest {
            /** Needs at least manifest version 3. */
            action?: ActionManifest | undefined;
            /** Not supported on manifest versions above 2. */
            browser_action?: ActionManifest | undefined;
            chrome_settings_overrides?: _WebExtensionManifestChromeSettingsOverrides | undefined;
            cloud_file?: _WebExtensionManifestCloudFile | undefined;
            /**
             * A _dictionary object_ defining one or more commands as _name-value_
             * pairs, the _name_ being the name of the command and the _value_ being
             * a {@link commands.CommandsShortcut}. The _name_ may also be one of the
             * following built-in special shortcuts:
             *
             * - `_execute_browser_action`
             * - `_execute_compose_action`
             * - `_execute_message_display_action`
             *   Example:
             *   [manifest.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/commands/manifest.json)
             */
            commands?: { [key: string]: _WebExtensionManifestCommands } | undefined;
            compose_action?: _WebExtensionManifestComposeAction | undefined;
            message_display_action?: _WebExtensionManifestMessageDisplayAction | undefined;
            /**
             * A theme experiment allows modifying the user interface of Thunderbird
             * beyond what is currently possible using the built-in color, image and
             * property keys of {@link theme.ThemeType}. These experiments are a
             * precursor to proposing new theme features for inclusion in
             * Thunderbird. Experimentation is done by mapping internal CSS color,
             * image and property variables to new theme keys and using them in
             * {@link theme.ThemeType} and by loading additional style sheets to add
             * new CSS variables, extending the theme-able areas of Thunderbird. Can
             * be used in static and dynamic themes.
             */
            theme_experiment?: ThemeExperiment | undefined;
            /** Needs at least manifest version 3. */
            declarative_net_request?: _WebExtensionManifestDeclarativeNetRequest | undefined;
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
                    /** Not supported on manifest versions above 2. */
                    persistent?: boolean | undefined;
                }
                | {
                    scripts: ExtensionURL[];
                    /** Not supported on manifest versions above 2. */
                    persistent?: boolean | undefined;
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
            granted_host_permissions?: boolean | undefined;
            /** Needs at least manifest version 3. */
            host_permissions?: MatchPattern[] | undefined;
            optional_permissions?: OptionalPermissionOrOrigin[] | undefined;
            web_accessible_resources?:
                | string[]
                | Array<{
                    resources: string[];
                    matches?: MatchPattern[] | undefined;
                    extension_ids?: Array<ExtensionID | "*"> | undefined;
                }>
                | undefined;
            hidden?: boolean | undefined;
            page_action?: _WebExtensionManifestPageAction | undefined;
            telemetry?: _WebExtensionManifestTelemetry | undefined;
            /** Not supported on manifest versions above 2. */
            user_scripts?: _WebExtensionManifestUserScripts | undefined;
            manifest_version: number;
            /**
             * The applications property is deprecated, please use
             * 'browser_specific_settings'
             *
             * Not supported on manifest versions above 2.
             */
            applications?: BrowserSpecificSettings | undefined;
            browser_specific_settings?: BrowserSpecificSettings | undefined;
            name: string;
            short_name?: string | undefined;
            description?: string | undefined;
            author?: string | undefined;
            version: string;
            homepage_url?: string | undefined;
            install_origins?: string[] | undefined;
            developer?: _WebExtensionManifestDeveloper | undefined;
        }

        /**
         * Definition of a shortcut, for example `Alt+F5`. The string must match
         * the shortcut format as defined by the MDN page of the commands API .
         */
        export type KeyName = string;

        export type PermissionNoPrompt = OptionalPermissionNoPrompt | PermissionPrivileged | _PermissionNoPrompt;

        export type OptionalPermissionNoPrompt = _OptionalPermissionNoPrompt;

        /** Defines a color value. */
        export type ThemeColor = string | [number, number, number] | [number, number, number, number];

        /**
         * Defines additional color, image and property keys to be used in {@link theme.ThemeType},
         *  extending the theme-able areas of Thunderbird.
         */
        export interface ThemeExperiment {
            /**
             * URL to a stylesheet introducing additional CSS variables, extending
             * the theme-able areas of Thunderbird.
             *
             * The `theme_experiment` add-on in our
             * [example repository](https://github.com/thundernest/sample-extensions/tree/master/theme_experiment)
             * is using the stylesheet shown below, to add the
             * `--chat-button-color`
             * CSS color variable:
             * [theme_experiment_style.css](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/theme/theme_experiment_style.css).
             *
             * The following _manifest.json_ file maps the `--chat-button-color`
             * CSS
             * color variable to the theme color key `exp_chat_button` and uses it
             * to
             * set a color for the chat button:
             * [theme_experiment_manifest.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/theme/theme_experiment_manifest.json)
             */
            stylesheet?: ExtensionURL | undefined;
            /**
             * A _dictionary object_ with one or more _key-value_ pairs to map new
             * theme image keys to internal Thunderbird CSS image variables. The new
             * image key is usable as an image reference in {@link theme.ThemeType}.
             * Example:
             * [theme_experiment_image.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/theme/theme_experiment_image.json)
             */
            images?: { [key: string]: string } | undefined;
            /**
             * A _dictionary object_ with one or more _key-value_ pairs to map new
             * theme color keys to internal Thunderbird CSS color variables. The
             * example shown below maps the theme color key `popup_affordance` to the
             * CSS color variable --arrowpanel-dimmed. The new color key is usable as
             * a color reference in {@link theme.ThemeType}.
             * [theme_experiment_color.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/theme/theme_experiment_color.json)
             */
            colors?: { [key: string]: string } | undefined;
            /**
             * A _dictionary object_ with one or more _key-value_ pairs to map new
             * theme property keys to internal Thunderbird CSS property variables.
             * The new property key is usable as a property reference in {@link theme.ThemeType}.
             *  Example:
             * [theme_experiment_property.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/theme/theme_experiment_property.json)
             */
            properties?: { [key: string]: string } | undefined;
        }

        /** Contains the color, image and property settings of a theme. */
        export interface ThemeType {
            /**
             * A _dictionary object_ with one or more _key-value_ pairs to map images
             * to theme image keys. The following built-in theme image keys are
             * supported:
             */
            images?: _ThemeTypeImages | undefined;
            /**
             * A _dictionary object_ with one or more _key-value_ pairs to map color
             * values to theme color keys. The following built-in theme color keys
             * are supported:
             */
            colors?: _ThemeTypeColors | undefined;
            /**
             * A _dictionary object_ with one or more _key-value_ pairs to map
             * property values to theme property keys. The following built-in theme
             * property keys are supported:
             */
            properties?: _ThemeType | undefined;
        }

        /** Contents of manifest.json for a static theme */
        export interface ThemeManifest {
            theme: ThemeType;
            /** Fallback properties for the dark system theme. */
            dark_theme?: ThemeType | undefined;
            default_locale?: string | undefined;
            /** CSS file with additional styles. */
            theme_experiment?: ThemeExperiment | undefined;
            /** Icons shown in the Add-ons Manager. */
            icons?: _ThemeManifestIcons | undefined;
        }

        export type PermissionPrivileged = _PermissionPrivileged;

        export type Permission = string | PermissionNoPrompt | OptionalPermission | "declarativeNetRequest";

        /** Represents a protocol handler definition. */
        export interface ProtocolHandler {
            /**
             * A user-readable title string for the protocol handler. This will be
             * displayed to the user in interface objects as needed.
             */
            name: string;
            /**
             * The protocol the site wishes to handle, specified as a string. For
             * example, you can register to handle SMS text message links by
             * registering to handle the "sms" scheme.
             */
            protocol: string | _ProtocolHandlerProtocol;
            /**
             * The URL of the handler, as a string. This string should include "%s"
             * as a placeholder which will be replaced with the escaped URL of the
             * document to be handled. This URL might be a true URL, or it could be a
             * phone number, email address, or so forth.
             */
            uriTemplate: ExtensionURL | HttpURL;
        }

        /** Common properties for all manifest.json files */
        export interface ManifestBase {
            manifest_version: number;
            /**
             * The applications property is deprecated, please use
             * 'browser_specific_settings'
             *
             * Not supported on manifest versions above 2.
             */
            applications?: BrowserSpecificSettings | undefined;
            browser_specific_settings?: BrowserSpecificSettings | undefined;
            name: string;
            short_name?: string | undefined;
            description?: string | undefined;
            author?: string | undefined;
            version: string;
            homepage_url?: string | undefined;
            install_origins?: string[] | undefined;
            developer?: _ManifestBaseDeveloper | undefined;
        }

        /** Represents a WebExtension language pack manifest.json file */
        export interface WebExtensionLangpackManifest {
            homepage_url?: string | undefined;
            langpack_id: string;
            languages: _WebExtensionLangpackManifestLanguages;
            sources?: _WebExtensionLangpackManifestSources | undefined;
            manifest_version: number;
            /**
             * The applications property is deprecated, please use
             * 'browser_specific_settings'
             *
             * Not supported on manifest versions above 2.
             */
            applications?: BrowserSpecificSettings | undefined;
            browser_specific_settings?: BrowserSpecificSettings | undefined;
            name: string;
            short_name?: string | undefined;
            description?: string | undefined;
            author?: string | undefined;
            version: string;
            install_origins?: string[] | undefined;
            developer?: _WebExtensionLangpackManifestDeveloper | undefined;
        }

        /** Represents a WebExtension dictionary manifest.json file */
        export interface WebExtensionDictionaryManifest {
            homepage_url?: string | undefined;
            dictionaries: _WebExtensionDictionaryManifestDictionaries;
            manifest_version: number;
            /**
             * The applications property is deprecated, please use
             * 'browser_specific_settings'
             *
             * Not supported on manifest versions above 2.
             */
            applications?: BrowserSpecificSettings | undefined;
            browser_specific_settings?: BrowserSpecificSettings | undefined;
            name: string;
            short_name?: string | undefined;
            description?: string | undefined;
            author?: string | undefined;
            version: string;
            install_origins?: string[] | undefined;
            developer?: _WebExtensionDictionaryManifestDeveloper | undefined;
        }

        /** Represents a WebExtension site permissions manifest.json file */
        export interface WebExtensionSitePermissionsManifest {
            site_permissions: SitePermission[];
            install_origins?: [string] | undefined;
            manifest_version: number;
            /**
             * The applications property is deprecated, please use
             * 'browser_specific_settings'
             *
             * Not supported on manifest versions above 2.
             */
            applications?: BrowserSpecificSettings | undefined;
            browser_specific_settings?: BrowserSpecificSettings | undefined;
            name: string;
            short_name?: string | undefined;
            description?: string | undefined;
            author?: string | undefined;
            version: string;
            homepage_url?: string | undefined;
            developer?: _WebExtensionSitePermissionsManifestDeveloper | undefined;
        }

        export interface ThemeIcons {
            /** A light icon to use for dark themes */
            light: ExtensionURL;
            /** The dark icon to use for light themes */
            dark: ExtensionURL;
            /** The size of the icons */
            size: number;
        }

        export type OptionalPermissionOrOrigin = OptionalPermission | MatchPattern;

        export type PermissionOrOrigin = Permission | MatchPattern;

        export type SitePermission = _SitePermission;

        export type HttpURL = string;

        export type ExtensionURL = string;

        export type ExtensionFileUrl = string;

        export type ImageDataOrExtensionURL = string;

        export type ExtensionID = string;

        export interface FirefoxSpecificProperties {
            id?: ExtensionID | undefined;
            update_url?: string | undefined;
            strict_min_version?: string | undefined;
            strict_max_version?: string | undefined;
        }

        export interface BrowserSpecificSettings {
            gecko?: FirefoxSpecificProperties | undefined;
        }

        export type MatchPattern = MatchPatternRestricted | MatchPatternUnestricted | "<all_urls>";

        /** Same as MatchPattern above, but excludes<all_urls></all_urls> */
        export type MatchPatternRestricted = string;

        /**
         * Mostly unrestricted match patterns for privileged add-ons. This should
         * technically be rejected for unprivileged add-ons, but, reasons. The
         * MatchPattern class will still refuse privileged schemes for those
         * extensions.
         */
        export type MatchPatternUnestricted = string;

        /**
         * Details of the script or CSS to inject. Either the code or the file
         * property must be set, but both may not be set at the same time. Based
         * on InjectDetails, but using underscore rather than camel case naming
         * conventions.
         */
        export interface ContentScript {
            matches: MatchPattern[];
            exclude_matches?: MatchPattern[] | undefined;
            include_globs?: string[] | undefined;
            exclude_globs?: string[] | undefined;
            /** The list of CSS files to inject */
            css?: ExtensionURL[] | undefined;
            /** The list of JS files to inject */
            js?: ExtensionURL[] | undefined;
            /**
             * If allFrames is `true`, implies that the JavaScript or CSS should be
             * injected into all frames of current page. By default, it's `false` and
             * is only injected into the top frame.
             */
            all_frames?: boolean | undefined;
            /**
             * If matchAboutBlank is true, then the code is also injected in
             * about:blank and about:srcdoc frames if your extension has access to
             * its parent document. Code cannot be inserted in top-level
             * about:-frames. By default it is `false`.
             */
            match_about_blank?: boolean | undefined;
            /**
             * The soonest that the JavaScript or CSS will be injected into the tab.
             * Defaults to "document_idle".
             */
            run_at?: extensionTypes.RunAt | undefined;
        }

        export type IconPath =
            | {
                [key: number]: ExtensionFileUrl;
            }
            | ExtensionFileUrl;

        export type IconImageData =
            | {
                [key: number]: ImageData;
            }
            | ImageData;

        export type ImageData = any;

        /**
         * @deprecated An unexpected property was found in the WebExtension
         * manifest.
         */
        export type UnrecognizedProperty = any;

        /** Represents a native manifest file */
        export type NativeManifest =
            | {
                name: string;
                description: string;
                path: string;
                type: "pkcs11" | "stdio";
                allowed_extensions: ExtensionID[];
            }
            | {
                name: ExtensionID;
                description: string;
                data: { [key: string]: any };
                type: "storage";
            };

        export type _OptionalPermission =
            | "accountsRead"
            | "addressBooks"
            | "compose"
            | "compose.save"
            | "compose.send"
            | "messagesModify"
            | "accountsFolders"
            | "accountsIdentities"
            | "messagesDelete"
            | "messagesImport"
            | "messagesMove"
            | "messagesRead"
            | "messagesTags"
            | "tabs"
            | "tabHide"
            | "browserSettings"
            | "browsingData"
            | "downloads"
            | "downloads.open"
            | "management"
            | "clipboardRead"
            | "clipboardWrite"
            | "geolocation"
            | "notifications"
            | "pkcs11"
            | "privacy"
            | "proxy"
            | "nativeMessaging"
            | "webNavigation";

        /**
         * Defines the location the action button will appear. The default
         * location is `maintoolbar`.
         */
        export type _ActionManifestDefaultArea = "maintoolbar" | "tabstoolbar";

        export type _ActionManifestDefaultWindows = "normal" | "messageDisplay";

        /** The type of param can be either "purpose" or "pref". */
        export type _WebExtensionManifestChromeSettingsOverridesSearchProviderParamsCondition = "purpose" | "pref";

        /**
         * The context that initiates a search, required if condition is
         * "purpose".
         */
        export type _WebExtensionManifestChromeSettingsOverridesSearchProviderParamsPurpose =
            | "contextmenu"
            | "searchbar"
            | "homepage"
            | "keyword"
            | "newtab";

        export interface _WebExtensionManifestChromeSettingsOverridesSearchProviderParams {
            /** A url parameter name */
            name: string;
            /** The type of param can be either "purpose" or "pref". */
            condition?: _WebExtensionManifestChromeSettingsOverridesSearchProviderParamsCondition | undefined;
            /** The preference to retrieve the value from. */
            pref?: string | undefined;
            /**
             * The context that initiates a search, required if condition is
             * "purpose".
             */
            purpose?: _WebExtensionManifestChromeSettingsOverridesSearchProviderParamsPurpose | undefined;
            /** A url parameter value. */
            value?: string | undefined;
        }

        export interface _WebExtensionManifestChromeSettingsOverridesSearchProvider {
            name: string;
            keyword?: string | string[] | undefined;
            search_url: string;
            favicon_url?: string | undefined;
            suggest_url?: string | undefined;
            /** @deprecated Unsupported on Thunderbird at this time. */
            instant_url?: string | undefined;
            /** @deprecated Unsupported on Thunderbird at this time. */
            image_url?: string | undefined;
            /** GET parameters to the search_url as a query string. */
            search_url_get_params?: string | undefined;
            /** POST parameters to the search_url as a query string. */
            search_url_post_params?: string | undefined;
            /** GET parameters to the suggest_url as a query string. */
            suggest_url_get_params?: string | undefined;
            /** POST parameters to the suggest_url as a query string. */
            suggest_url_post_params?: string | undefined;
            /** @deprecated Unsupported on Thunderbird at this time. */
            instant_url_post_params?: string | undefined;
            /** @deprecated Unsupported on Thunderbird at this time. */
            image_url_post_params?: string | undefined;
            search_form?: string | undefined;
            /** @deprecated Unsupported on Thunderbird at this time. */
            alternate_urls?: string[] | undefined;
            /** @deprecated Unsupported on Thunderbird. */
            prepopulated_id?: number | undefined;
            /** Encoding of the search term. */
            encoding?: string | undefined;
            /** Sets the default engine to a built-in engine only. */
            is_default?: boolean | undefined;
            /**
             * A list of optional search url parameters. This allows the addition of
             * search url parameters based on how the search is performed in
             * Thunderbird.
             */
            params?: _WebExtensionManifestChromeSettingsOverridesSearchProviderParams[] | undefined;
        }

        export interface _WebExtensionManifestChromeSettingsOverrides {
            search_provider?: _WebExtensionManifestChromeSettingsOverridesSearchProvider | undefined;
        }

        export interface _WebExtensionManifestCloudFile {
            /**
             * Enable browser styles in the `management_url` page. See the MDN
             * documentation on browser styles for more information.
             */
            browser_style?: boolean | undefined;
            /**
             * This property is no longer used. The only supported data format for
             * the `data` argument in {@link cloudFile.onFileUpload} is {@link File}.
             *
             * @deprecated This property is no longer used. The only supported data
             * format for the `data` argument in {@link cloudFile.onFileUpload} is
             * {@link File}.
             */
            data_format?: string | undefined;
            /**
             * If a previously uploaded cloud file attachment is reused at a later
             * time in a different message, Thunderbird may use the already known
             * `url` and `templateInfo` values without triggering the registered
             * {@link cloudFile.onFileUpload} listener again. Setting this option to
             * `false` will always trigger the registered listener, providing the
             * already known values through the `relatedFileInfo` parameter of the
             * {@link cloudFile.onFileUpload} event, to let the provider decide how
             * to handle these cases.
             */
            reuse_uploads?: boolean | undefined;
            /**
             * A page for configuring accounts, to be displayed in the preferences
             * UI. **Note:** Within this UI only a limited subset of the WebExtension
             * APIs is available: `cloudFile`, `extension`, `i18n`, `runtime`,
             * `storage`, `test`.
             */
            management_url: string;
            /** Name of the cloud file service. */
            name: string;
            /**
             * This property was never used.
             *
             * @deprecated This property was never used.
             */
            new_account_url?: string | undefined;
            /**
             * This property is no longer used. The `service_url` property of the
             * {@link cloudFile.CloudFileTemplateInfo} object returned by the {@link cloudFile.onFileUpload}
             * event can be used to add a _Learn more about_
             * link to the footer of the cloud file attachment element.
             *
             * @deprecated This property is no longer used. The `service_url`
             * property of the {@link cloudFile.CloudFileTemplateInfo} object
             * returned by the {@link cloudFile.onFileUpload} event can be used to
             * add a _Learn more about_ link to the footer of the cloud file
             * attachment element.
             */
            service_url?: string | undefined;
        }

        export interface _WebExtensionManifestCommandsSuggestedKey {
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

        export interface _WebExtensionManifestCommands {
            suggested_key?: _WebExtensionManifestCommandsSuggestedKey | undefined;
            description?: string | undefined;
        }

        /**
         * Defines the location the composeAction button will appear. The default
         * location is `maintoolbar`.
         */
        export type _WebExtensionManifestComposeActionDefaultArea = "maintoolbar" | "formattoolbar";

        export interface _WebExtensionManifestComposeAction {
            /**
             * The label of the composeAction button, defaults to its title. Can be
             * set to an empty string to not display any label. If the containing
             * toolbar is configured to display text only, the title will be used as
             * fallback.
             */
            default_label?: string | undefined;
            /**
             * The title of the composeAction button. This shows up in the tooltip
             * and the label. Defaults to the add-on name.
             */
            default_title?: string | undefined;
            /** The paths to one or more icons for the composeAction button. */
            default_icon?: IconPath | undefined;
            /**
             * Specifies dark and light icons to be used with themes. The `light`
             * icon is used on dark backgrounds and vice versa. **Note:** The default
             * theme uses the `default_icon` for light backgrounds (if specified).
             */
            theme_icons?: ThemeIcons[] | undefined;
            /**
             * The html document to be opened as a popup when the user clicks on the
             * composeAction button.
             */
            default_popup?: string | undefined;
            /**
             * Enable browser styles. See the MDN documentation on browser styles for
             * more information.
             */
            browser_style?: boolean | undefined;
            /**
             * Defines the location the composeAction button will appear. The default
             * location is `maintoolbar`.
             */
            default_area?: _WebExtensionManifestComposeActionDefaultArea | undefined;
        }

        export interface _WebExtensionManifestMessageDisplayAction {
            /**
             * The label of the messageDisplayAction button, defaults to its title.
             * Can be set to an empty string to not display any label. If the
             * containing toolbar is configured to display text only, the title will
             * be used as fallback.
             */
            default_label?: string | undefined;
            /**
             * The title of the messageDisplayAction button. This shows up in the
             * tooltip and the label. Defaults to the add-on name.
             */
            default_title?: string | undefined;
            /** The paths to one or more icons for the messageDisplayAction button. */
            default_icon?: IconPath | undefined;
            /**
             * Specifies dark and light icons to be used with themes. The `light`
             * icon is used on dark backgrounds and vice versa. **Note:** The default
             * theme uses the `default_icon` for light backgrounds (if specified).
             */
            theme_icons?: ThemeIcons[] | undefined;
            /**
             * The html document to be opened as a popup when the user clicks on the
             * messageDisplayAction button.
             */
            default_popup?: string | undefined;
            /**
             * Enable browser styles. See the MDN documentation on browser styles for
             * more information.
             */
            browser_style?: boolean | undefined;
            /** Currently unused. */
            default_area?: string | undefined;
        }

        export interface _WebExtensionManifestDeclarativeNetRequestRuleResources {
            /**
             * A non-empty string uniquely identifying the ruleset. IDs beginning
             * with '\_' are reserved for internal use.
             */
            id: string;
            /** Whether the ruleset is enabled by default. */
            enabled: boolean;
            /** The path of the JSON ruleset relative to the extension directory. */
            path: ExtensionURL;
        }

        /** Needs at least manifest version 3. */
        export interface _WebExtensionManifestDeclarativeNetRequest {
            rule_resources: _WebExtensionManifestDeclarativeNetRequestRuleResources[];
        }

        export interface _WebExtensionManifestIcons {
            [key: number]: ExtensionFileUrl;
        }

        export type _WebExtensionManifestIncognito = "not_allowed" | "spanning";

        export interface _WebExtensionManifestOptionsUi {
            page: ExtensionURL;
            browser_style?: boolean | undefined;
            chrome_style?: boolean | undefined;
            open_in_tab?: boolean | undefined;
        }

        export interface _WebExtensionManifestPageAction {
            default_title?: string | undefined;
            default_icon?: IconPath | undefined;
            default_popup?: string | undefined;
            browser_style?: boolean | undefined;
            show_matches?: MatchPattern[] | undefined;
            hide_matches?: MatchPatternRestricted[] | undefined;
            pinned?: boolean | undefined;
        }

        export interface _WebExtensionManifestTelemetryPublicKeyKey {
            crv?: string | undefined;
            kty?: string | undefined;
            x?: string | undefined;
            y?: string | undefined;
        }

        export interface _WebExtensionManifestTelemetryPublicKey {
            id: string;
            key: _WebExtensionManifestTelemetryPublicKeyKey;
        }

        export interface _WebExtensionManifestTelemetry {
            ping_type: string;
            schemaNamespace: string;
            public_key: _WebExtensionManifestTelemetryPublicKey;
            study_name?: string | undefined;
            pioneer_id?: boolean | undefined;
        }

        /** Not supported on manifest versions above 2. */
        export interface _WebExtensionManifestUserScripts {
            api_script?: ExtensionURL | undefined;
        }

        export interface _WebExtensionManifestDeveloper {
            name?: string | undefined;
            url?: string | undefined;
        }

        export type _PermissionNoPrompt =
            | "menus"
            | "theme"
            | "captivePortal"
            | "contextualIdentities"
            | "declarativeNetRequestFeedback"
            | "declarativeNetRequestWithHostAccess"
            | "dns"
            | "geckoProfiler"
            | "identity"
            | "alarms"
            | "storage"
            | "unlimitedStorage";

        export type _OptionalPermissionNoPrompt =
            | "menus.overrideContext"
            | "activeTab"
            | "cookies"
            | "idle"
            | "scripting"
            | "webRequest"
            | "webRequestBlocking"
            | "webRequestFilterResponse.serviceWorkerScript";

        /**
         * A _dictionary object_ with one or more _key-value_ pairs to map images
         * to theme image keys. The following built-in theme image keys are
         * supported:
         */
        export interface _ThemeTypeImages {
            /**
             * Additional images added to the header area and displayed behind the
             * `theme_frame` image.
             */
            additional_backgrounds?: ImageDataOrExtensionURL[] | undefined;
            /**
             * @deprecated Unsupported images property, use
             * `theme.images.theme_frame`, this alias is ignored in
             * Thunderbird >= 70.
             */
            headerURL?: ImageDataOrExtensionURL | undefined;
            /** Foreground image on the header area. */
            theme_frame?: ImageDataOrExtensionURL | undefined;
        }

        /**
         * A _dictionary object_ with one or more _key-value_ pairs to map color
         * values to theme color keys. The following built-in theme color keys
         * are supported:
         */
        export interface _ThemeTypeColors {
            /**
             * Background color of the selected tab. Defaults to the color specified
             * by `toolbar`.
             */
            tab_selected?: ThemeColor | undefined;
            /**
             * @deprecated Unsupported colors property, use `theme.colors.frame`,
             * this alias is ignored in Thunderbird >= 70.
             */
            accentcolor?: ThemeColor | undefined;
            /** The background color of the header area. */
            frame?: ThemeColor | undefined;
            /** The background color of the header area when the window is inactive. */
            frame_inactive?: ThemeColor | undefined;
            /**
             * @deprecated Unsupported color property, use
             * `theme.colors.tab_background_text`, this alias is ignored in
             * Thunderbird >= 70.
             */
            textcolor?: ThemeColor | undefined;
            /** The text color of the unselected tabs. */
            tab_background_text?: ThemeColor | undefined;
            /** The color of the vertical separator of the background tabs. */
            tab_background_separator?: ThemeColor | undefined;
            /** The color of the tab loading indicator. */
            tab_loading?: ThemeColor | undefined;
            /**
             * The text color for the selected tab. Defaults to the color specified
             * by `toolbar_text`.
             */
            tab_text?: ThemeColor | undefined;
            /** The color of the selected tab line. */
            tab_line?: ThemeColor | undefined;
            /**
             * The background color of the toolbars. Also used as default value for
             * `tab_selected`.
             */
            toolbar?: ThemeColor | undefined;
            /**
             * The text color in the main Thunderbird toolbar. Also used as default
             * value for `icons` and `tab_text`.
             */
            toolbar_text?: ThemeColor | undefined;
            /** Not used in Thunderbird. */
            bookmark_text?: ThemeColor | undefined;
            /**
             * The background color for fields in the toolbar, such as the search
             * field.
             */
            toolbar_field?: ThemeColor | undefined;
            /** The text color for fields in the toolbar. */
            toolbar_field_text?: ThemeColor | undefined;
            /** The border color for fields in the toolbar. */
            toolbar_field_border?: ThemeColor | undefined;
            /**
             * Not used in Thunderbird.
             *
             * @deprecated This color property is ignored in >= 89.
             */
            toolbar_field_separator?: ThemeColor | undefined;
            /**
             * The color of the line separating the top of the toolbar from the
             * region above.
             */
            toolbar_top_separator?: ThemeColor | undefined;
            /**
             * The color of the line separating the bottom of the toolbar from the
             * region below.
             */
            toolbar_bottom_separator?: ThemeColor | undefined;
            /** The color of the vertical separators on the toolbars. */
            toolbar_vertical_separator?: ThemeColor | undefined;
            /**
             * The color of the toolbar icons. Defaults to the color specified by
             * `toolbar_text`.
             */
            icons?: ThemeColor | undefined;
            /**
             * The color of the toolbar icons in attention state such as the chat
             * icon with new messages.
             */
            icons_attention?: ThemeColor | undefined;
            /** The color of the background of the toolbar buttons on hover. */
            button_background_hover?: ThemeColor | undefined;
            /** The color of the background of the pressed toolbar buttons. */
            button_background_active?: ThemeColor | undefined;
            /** The background color of popups such as the AppMenu. */
            popup?: ThemeColor | undefined;
            /** The text color of popups. */
            popup_text?: ThemeColor | undefined;
            /** The border color of popups. */
            popup_border?: ThemeColor | undefined;
            /** The focused background color for fields in the toolbar. */
            toolbar_field_focus?: ThemeColor | undefined;
            /** The text color in the focused fields in the toolbar. */
            toolbar_field_text_focus?: ThemeColor | undefined;
            /** The focused border color for fields in the toolbar. */
            toolbar_field_border_focus?: ThemeColor | undefined;
            /**
             * The background color of items highlighted using the keyboard inside
             * popups.
             */
            popup_highlight?: ThemeColor | undefined;
            /** The text color of items highlighted using the keyboard inside popups. */
            popup_highlight_text?: ThemeColor | undefined;
            /** Not used in Thunderbird. */
            ntp_background?: ThemeColor | undefined;
            /** Not used in Thunderbird. */
            ntp_text?: ThemeColor | undefined;
            /** The background color of the trees. */
            sidebar?: ThemeColor | undefined;
            /** The border color of the trees. */
            sidebar_border?: ThemeColor | undefined;
            /** The text color of the trees. Needed to enable the tree theming. */
            sidebar_text?: ThemeColor | undefined;
            /** The background color of highlighted rows in trees. */
            sidebar_highlight?: ThemeColor | undefined;
            /** The text color of highlighted rows in trees. */
            sidebar_highlight_text?: ThemeColor | undefined;
            /** The border color of highlighted rows in trees. */
            sidebar_highlight_border?: ThemeColor | undefined;
            /**
             * The background color used to indicate the current selection of text in
             * the search field.
             */
            toolbar_field_highlight?: ThemeColor | undefined;
            /**
             * The color used to draw text that's currently selected in the search
             * field.
             */
            toolbar_field_highlight_text?: ThemeColor | undefined;
        }

        export type _ThemeTypeAdditionalBackgroundsAlignment =
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

        export type _ThemeTypeAdditionalBackgroundsTiling = "no-repeat" | "repeat" | "repeat-x" | "repeat-y";

        /**
         * If set, overrides the general theme (context menus, toolbars, content
         * area).
         */
        export type _ThemeTypeColorScheme = "light" | "dark" | "auto";

        /** If set, overrides the color scheme for the content area. */
        export type _ThemeTypeContentColorScheme = "light" | "dark" | "auto";

        /**
         * A _dictionary object_ with one or more _key-value_ pairs to map
         * property values to theme property keys. The following built-in theme
         * property keys are supported:
         */
        export interface _ThemeType {
            additional_backgrounds_alignment?: _ThemeTypeAdditionalBackgroundsAlignment[] | undefined;
            additional_backgrounds_tiling?: _ThemeTypeAdditionalBackgroundsTiling[] | undefined;
            /**
             * If set, overrides the general theme (context menus, toolbars, content
             * area).
             */
            color_scheme?: _ThemeTypeColorScheme | undefined;
            /** If set, overrides the color scheme for the content area. */
            content_color_scheme?: _ThemeTypeContentColorScheme | undefined;
        }

        /** Icons shown in the Add-ons Manager. */
        export interface _ThemeManifestIcons {
            [key: number]: string;
        }

        export type _PermissionPrivileged = "activityLog" | "mozillaAddons" | "networkStatus" | "telemetry";

        export type _ProtocolHandlerProtocol =
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
            | "xmpp";

        export interface _ManifestBaseDeveloper {
            name?: string | undefined;
            url?: string | undefined;
        }

        export interface _UndefinedChromeResources {
            [key: string]:
                | ExtensionURL
                | {
                    [key: string]: ExtensionURL;
                };
        }

        export interface _WebExtensionLangpackManifestLanguages {
            [key: string]: {
                chrome_resources: _UndefinedChromeResources;
                version: string;
            };
        }

        export interface _WebExtensionLangpackManifestSources {
            [key: string]: {
                base_path: ExtensionURL;
                paths?: string[] | undefined;
            };
        }

        export interface _WebExtensionLangpackManifestDeveloper {
            name?: string | undefined;
            url?: string | undefined;
        }

        export interface _WebExtensionDictionaryManifestDictionaries {
            [key: string]: string;
        }

        export interface _WebExtensionDictionaryManifestDeveloper {
            name?: string | undefined;
            url?: string | undefined;
        }

        export interface _WebExtensionSitePermissionsManifestDeveloper {
            name?: string | undefined;
            url?: string | undefined;
        }

        export type _SitePermission = "midi" | "midi-sysex";
    }

    /**
     * Permissions: `accountsRead`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/accounts.html
     */
    export namespace accounts {
        /* accounts types */
        /**
         * An object describing a mail account, as returned for example by the
         * {@link accounts.list} and {@link accounts.get} methods. The `folders`
         * property is only included if requested.
         */
        export interface MailAccount {
            /** A unique identifier for this account. */
            id: string;
            /** The human-friendly name of this account. */
            name: string;
            /** What sort of account this is, e.g. `imap`, `nntp`, or `pop3`. */
            type: string;
            /** The folders for this account are only included if requested. */
            folders?: folders.MailFolder[] | undefined;
            /**
             * The identities associated with this account. The default identity is
             * listed first, others in no particular order.
             */
            identities: identities.MailIdentity[];
        }

        export interface _OnUpdatedChangedValues {
            /** The human-friendly name of this account. */
            name: string;
            /** The default identity of this account. */
            defaultIdentity: identities.MailIdentity;
        }

        /* accounts functions */
        /**
         * Returns all mail accounts. They will be returned in the same order as
         * used in Thunderbird's folder pane.
         *
         * @param [includeFolders] Specifies whether the returned {@link accounts.MailAccount}
         * objects should included their account's folders.
         * Defaults to `true`.
         */
        export function list(includeFolders?: boolean): Promise<MailAccount[]>;

        /**
         * Returns details of the requested account, or `null` if it doesn't
         * exist.
         *
         * @param [includeFolders] Specifies whether the returned {@link accounts.MailAccount}
         * object should included the account's folders.
         * Defaults to `true`.
         */
        export function get(accountId: string, includeFolders?: boolean): Promise<MailAccount>;

        /**
         * Returns the default account, or `null` if it is not defined.
         *
         * @param [includeFolders] Specifies whether the returned {@link accounts.MailAccount}
         * object should included the account's folders.
         * Defaults to `true`.
         */
        export function getDefault(includeFolders?: boolean): Promise<MailAccount>;

        /**
         * Sets the default identity for an account.
         *
         * @deprecated This will be removed. Use {@link identities.setDefault}
         * instead.
         */
        export function setDefaultIdentity(accountId: string, identityId: string): Promise<any>;

        /**
         * Returns the default identity for an account, or `null` if it is not
         * defined.
         *
         * @deprecated This will be removed. Use {@link identities.getDefault}
         * instead.
         */
        export function getDefaultIdentity(accountId: string): Promise<identities.MailIdentity>;

        /* accounts events */
        /** Fired when a new account has been created. */
        export const onCreated: WebExtEvent<(id: string, account: MailAccount) => void>;

        /** Fired when an account has been removed. */
        export const onDeleted: WebExtEvent<(id: string) => void>;

        /**
         * Fired when a property of an account has been modified. Folders and
         * identities of accounts are not monitored by this event, use the
         * dedicated folder and identity events instead. A changed
         * `defaultIdentity` is reported only after a different identity has been
         * assigned as default identity, but not after a property of the default
         * identity has been changed.
         */
        export const onUpdated: WebExtEvent<(id: string, changedValues: _OnUpdatedChangedValues) => void>;
    }

    /**
     * Permissions: `addressBooks`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/addressBooks.html
     */
    export namespace addressBooks {
        /* addressBooks types */
        /** Indicates the type of a Node. */
        export type NodeType = "addressBook" | "contact" | "mailingList";

        /** A node representing an address book. */
        export interface AddressBookNode {
            /**
             * The unique identifier for the node. IDs are unique within the current
             * profile, and they remain valid even after the program is restarted.
             */
            id: string;
            /** The `id` of the parent object. */
            parentId?: string | undefined;
            /** Always set to `addressBook`. */
            type: NodeType;
            /** Indicates if the object is read-only. */
            readOnly?: boolean | undefined;
            /** Indicates if the address book is accessed via remote look-up. */
            remote?: boolean | undefined;
            name: string;
            /** A list of contacts held by this node's address book or mailing list. */
            contacts?: contacts.ContactNode[] | undefined;
            /** A list of mailingLists in this node's address book. */
            mailingLists?: mailingLists.MailingListNode[] | undefined;
        }

        export interface _CreateProperties {
            name: string;
        }

        export interface _UpdateProperties {
            name: string;
        }

        export { _delete as delete };

        /* addressBooks functions */
        /** Opens the address book user interface. */
        export function openUI(): Promise<any>;

        /** Closes the address book user interface. */
        export function closeUI(): Promise<any>;

        /**
         * Gets a list of the user's address books, optionally including all
         * contacts and mailing lists.
         *
         * @param [complete] If set to true, results will include contacts and
         * mailing lists for each address book.
         */
        export function list(complete?: boolean): Promise<AddressBookNode[]>;

        /**
         * Gets a single address book, optionally including all contacts and
         * mailing lists.
         *
         * @param [complete] If set to true, results will include contacts and
         * mailing lists for this address book.
         */
        export function get(id: string, complete?: boolean): Promise<AddressBookNode>;

        /** Creates a new, empty address book. */
        export function create(properties: _CreateProperties): Promise<string>;

        /** Renames an address book. */
        export function update(id: string, properties: _UpdateProperties): Promise<any>;

        /**
         * Removes an address book, and all associated contacts and mailing
         * lists.
         */
        function _delete(id: string): Promise<any>;

        /* addressBooks events */
        /** Fired when an address book is created. */
        export const onCreated: WebExtEvent<(node: AddressBookNode) => void>;

        /** Fired when an address book is renamed. */
        export const onUpdated: WebExtEvent<(node: AddressBookNode) => void>;

        /** Fired when an addressBook is deleted. */
        export const onDeleted: WebExtEvent<(id: string) => void>;

        /**
         * Permissions: `addressBooks`
         *
         * Not allowed in: Content scripts, Devtools pages
         *
         * @see https://webextension-api.thunderbird.net/en/latest/addressBooks.provider.html
         */
        export namespace provider {
            /**
             * Descriptions for the address book created by registering this
             * listener.
             */
            export interface _OnSearchRequestParameters {
                /** The name of the created address book. */
                addressBookName?: string | undefined;
                /**
                 * Whether the address book search queries are using encrypted protocols
                 * like HTTPS.
                 */
                isSecure?: boolean | undefined;
                /**
                 * The unique ID of the created address book. If several listeners have
                 * been added, the `id` allows to identify which address book initiated
                 * the search request. If not provided, a unique ID will be generated for
                 * you.
                 */
                id?: string | undefined;
            }

            type AddressBookNode = any;

            export interface _AddressBooks_providerOnSearchRequestEvent<
                TCallback = (node: AddressBookNode, searchString: string, query?: string) => void,
            > {
                addListener(cb: TCallback, parameters: _OnSearchRequestParameters): void;
                removeListener(cb: TCallback): void;
                hasListener(cb: TCallback): boolean;
            }

            /* addressBooks.provider events */
            /**
             * Registering this listener will create and list a read-only address
             * book in Thunderbird's address book window, similar to LDAP address
             * books. When selecting this address book, users will first see no
             * contacts, but they can search for them, which will fire this event.
             * Contacts returned by the listener callback will be displayed as
             * contact cards in the address book. Several listeners can be
             * registered, to create multiple address books.
             *
             * The event also fires for each registered listener (for each created
             * read-only address book), when users type something into the mail
             * composer's _To:_ field, or into similar fields like the calendar
             * meeting attendees field. Contacts returned by the listener callback
             * will be added to the autocomplete results in the dropdown of that
             * field.
             *
             * Example:
             * [onSearchRequest.js](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/addressBooks/onSearchRequest.js)
             *
             * @param [searchString] The search text that the user entered. Not
             * available when invoked from the advanced address book search dialog.
             *
             * @param [query] The boolean query expression corresponding to the
             * search. **Note:** This parameter may change in future releases of
             * Thunderbird.
             */
            export const onSearchRequest: _AddressBooks_providerOnSearchRequestEvent;
        }
    }

    /**
     * Permissions: `addressBooks`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/contacts.html
     */
    export namespace contacts {
        /* contacts types */
        /** Object defining a query for {@link contacts.quickSearch}. */
        export interface QueryInfo {
            /** One or more space-separated terms to search for. */
            searchString?: string | undefined;
            /** Whether to include results from local address books. Defaults to true. */
            includeLocal?: boolean | undefined;
            /**
             * Whether to include results from remote address books. Defaults to
             * true.
             */
            includeRemote?: boolean | undefined;
            /**
             * Whether to include results from read-only address books. Defaults to
             * true.
             */
            includeReadOnly?: boolean | undefined;
            /**
             * Whether to include results from read-write address books. Defaults to
             * true.
             */
            includeReadWrite?: boolean | undefined;
        }

        /** A node representing a contact in an address book. */
        export interface ContactNode {
            /**
             * The unique identifier for the node. IDs are unique within the current
             * profile, and they remain valid even after the program is restarted.
             */
            id: string;
            /** The `id` of the parent object. */
            parentId?: string | undefined;
            /** Always set to `contact`. */
            type: addressBooks.NodeType;
            /** Indicates if the object is read-only. */
            readOnly?: boolean | undefined;
            /** Indicates if the object came from a remote address book. */
            remote?: boolean | undefined;
            properties: ContactProperties;
        }

        /**
         * A set of individual properties for a particular contact, and its vCard
         * string. Further information can be found in {@link howto_contacts}.
         */
        export interface ContactProperties {
            [key: string]: string | null;
        }

        /**
         * A dictionary of changed properties. Keys are the property name that
         * changed, values are an object containing `oldValue` and `newValue`.
         * Values can be either a string or `null`.
         */
        export interface PropertyChange {
            [key: string]: {
                oldValue: string | null;
                newValue: string | null;
            };
        }

        export { _delete as delete };

        /* contacts functions */
        /** Gets all the contacts in the address book with the id `parentId`. */
        export function list(parentId: string): Promise<ContactNode[]>;

        /**
         * Gets all contacts matching `queryInfo` in the address book with the id
         * `parentId`.
         *
         * @param parentId The id of the address book to search. If not
         * specified, all address books are searched.
         *
         * @param queryInfo Either a _string_ with one or more space-separated
         * terms to search for, or a complex {@link contacts.QueryInfo} search
         * query.
         */
        export function quickSearch(parentId: string, queryInfo: string | QueryInfo): Promise<ContactNode[]>;
        /**
         * Gets all contacts matching `queryInfo` in the address book with the id
         * `parentId`.
         *
         * @param queryInfo Either a _string_ with one or more space-separated
         * terms to search for, or a complex {@link contacts.QueryInfo} search
         * query.
         */
        export function quickSearch(queryInfo: string | QueryInfo): Promise<ContactNode[]>;

        /** Gets a single contact. */
        export function get(id: string): Promise<ContactNode>;

        /** Gets the photo associated with this contact, if any. */
        export function getPhoto(id: string): Promise<File>;

        /** Sets the photo associated with this contact. */
        export function setPhoto(id: string, file: File): Promise<any>;

        /**
         * Adds a new contact to the address book with the id `parentId`.
         *
         * @param id Assigns the contact an id. If an existing contact has this
         * id, an exception is thrown. **Note:** Deprecated, the card's id should
         * be specified in the vCard string instead.
         *
         * @param properties The properties object for the new contact. If it
         * includes a `vCard` member, all specified legacy properties are ignored
         * and the new contact will be based on the provided vCard string. If a
         * UID is specified in the vCard string, which is already used by another
         * contact, an exception is thrown. **Note:** Using individual properties
         * is deprecated, use the `vCard` member instead.
         */
        export function create(parentId: string, id: string, properties: ContactProperties): Promise<string>;
        /**
         * Adds a new contact to the address book with the id `parentId`.
         *
         * @param properties The properties object for the new contact. If it
         * includes a `vCard` member, all specified legacy properties are ignored
         * and the new contact will be based on the provided vCard string. If a
         * UID is specified in the vCard string, which is already used by another
         * contact, an exception is thrown. **Note:** Using individual properties
         * is deprecated, use the `vCard` member instead.
         */
        export function create(parentId: string, properties: ContactProperties): Promise<string>;

        /**
         * Updates a contact.
         *
         * @param properties An object with properties to update the specified
         * contact. Individual properties are removed, if they are set to `null`.
         * If the provided object includes a `vCard` member, all specified legacy
         * properties are ignored and the details of the contact will be replaced
         * by the provided vCard. Changes to the UID will be ignored. **Note:**
         * Using individual properties is deprecated, use the `vCard` member
         * instead.
         */
        export function update(id: string, properties: ContactProperties): Promise<any>;

        /**
         * Removes a contact from the address book. The contact is also removed
         * from any mailing lists it is a member of.
         */
        function _delete(id: string): Promise<any>;

        /* contacts events */
        /** Fired when a contact is created. */
        export const onCreated: WebExtEvent<(node: ContactNode) => void>;

        /** Fired when a contact is changed. */
        export const onUpdated: WebExtEvent<(node: ContactNode, changedProperties: PropertyChange) => void>;

        /** Fired when a contact is removed from an address book. */
        export const onDeleted: WebExtEvent<(parentId: string, id: string) => void>;
    }

    /**
     * Permissions: `addressBooks`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/mailingLists.html
     */
    export namespace mailingLists {
        /* mailingLists types */
        /** A node representing a mailing list. */
        export interface MailingListNode {
            /**
             * The unique identifier for the node. IDs are unique within the current
             * profile, and they remain valid even after the program is restarted.
             */
            id: string;
            /** The `id` of the parent object. */
            parentId?: string | undefined;
            /** Always set to `mailingList`. */
            type: addressBooks.NodeType;
            /** Indicates if the object is read-only. */
            readOnly?: boolean | undefined;
            /** Indicates if the object came from a remote address book. */
            remote?: boolean | undefined;
            name: string;
            nickName: string;
            description: string;
            /** A list of contacts held by this node's address book or mailing list. */
            contacts?: contacts.ContactNode[] | undefined;
        }

        export interface _CreateProperties {
            name: string;
            nickName?: string | undefined;
            description?: string | undefined;
        }

        export interface _UpdateProperties {
            name: string;
            nickName?: string | undefined;
            description?: string | undefined;
        }

        export { _delete as delete };

        /* mailingLists functions */
        /** Gets all the mailing lists in the address book with id `parentId`. */
        export function list(parentId: string): Promise<MailingListNode[]>;

        /** Gets a single mailing list. */
        export function get(id: string): Promise<MailingListNode>;

        /** Creates a new mailing list in the address book with id `parentId`. */
        export function create(parentId: string, properties: _CreateProperties): Promise<string>;

        /** Edits the properties of a mailing list. */
        export function update(id: string, properties: _UpdateProperties): Promise<any>;

        /** Removes the mailing list. */
        function _delete(id: string): Promise<any>;

        /**
         * Adds a contact to the mailing list with id `id`. If the contact and
         * mailing list are in different address books, the contact will also be
         * copied to the list's address book.
         */
        export function addMember(id: string, contactId: string): Promise<any>;

        /** Gets all contacts that are members of the mailing list with id `id`. */
        export function listMembers(id: string): Promise<contacts.ContactNode[]>;

        /**
         * Removes a contact from the mailing list with id `id`. This does not
         * delete the contact from the address book.
         */
        export function removeMember(id: string, contactId: string): Promise<any>;

        /* mailingLists events */
        /** Fired when a mailing list is created. */
        export const onCreated: WebExtEvent<(node: MailingListNode) => void>;

        /** Fired when a mailing list is changed. */
        export const onUpdated: WebExtEvent<(node: MailingListNode) => void>;

        /** Fired when a mailing list is deleted. */
        export const onDeleted: WebExtEvent<(parentId: string, id: string) => void>;

        /** Fired when a contact is added to the mailing list. */
        export const onMemberAdded: WebExtEvent<(node: contacts.ContactNode) => void>;

        /** Fired when a contact is removed from the mailing list. */
        export const onMemberRemoved: WebExtEvent<(parentId: string, id: string) => void>;
    }

    /**
     * Use an action to put a button in the mail window toolbar. In addition
     * to its icon, an action button can also have a tooltip, a badge, and a
     * popup.
     *
     * Manifest keys: `action`, `browser_action`
     *
     * Needs at least manifest version 3.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/browserAction.html
     */
    export namespace action {
        /* action types */
        /**
         * An array of four integers in the range [0,255] that make up the RGBA
         * color. For example, opaque red is `[255, 0, 0, 255]`.
         */
        export type ColorArray = [number, number, number, number];

        /**
         * Pixel data for an image. Must be an {@link ImageData} object (for
         * example, from a {@link Canvas} element).
         */
        export type ImageDataType = ImageData;

        /**
         * A _dictionary object_ to specify multiple {@link ImageData} objects in
         * different sizes, so the icon does not have to be scaled for a device
         * with a different pixel density. Each entry is a _name-value_ pair with
         * _value_ being an {@link ImageData} object, and _name_ its size.
         * Example:
         * [ImageDataDictionary.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/ImageDataDictionary.json)See
         * the MDN documentation about choosing icon sizes for more information
         * on this.
         */
        export interface ImageDataDictionary {
            [key: number]: ImageDataType;
        }

        /** Information sent when an action button is clicked. */
        export interface OnClickData {
            /**
             * An array of keyboard modifiers that were held while the menu item was
             * clicked.
             */
            modifiers: _OnClickDataModifiers[];
            /** An integer value of button by which menu item was clicked. */
            button?: number | undefined;
        }

        export type _OnClickDataModifiers = "Shift" | "Alt" | "Command" | "Ctrl" | "MacCtrl";

        export interface _SetTitleDetails {
            /**
             * A string the action button should display as its label and when moused
             * over. Cleared by setting it to `null` or an empty string (title
             * defined the manifest will be used).
             */
            title: string | null;
            /** Sets the title only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetTitleDetails {
            /**
             * Specifies for which tab the title should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetLabelDetails {
            /**
             * A string the action button should use as its label, overriding the
             * defined title. Can be set to an empty string to not display any label
             * at all. If the containing toolbar is configured to display text only,
             * its title will be used. Cleared by setting it to `null`.
             */
            label: string | null;
            /** Sets the label only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetLabelDetails {
            /**
             * Specifies for which tab the label should be retrieved. If no tab is
             * specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetIconDetails {
            /** The image data for one or more icons for the action button. */
            imageData?: ImageDataType | ImageDataDictionary | undefined;
            /** The paths to one or more icons for the action button. */
            path?: _manifest.IconPath | undefined;
            /** Sets the icon only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetPopupDetails {
            /**
             * The html file to show in a popup. Can be set to an empty string to not
             * open a popup. Cleared by setting it to `null` (popup value defined the
             * manifest will be used).
             */
            popup: string | null;
            /** Sets the popup only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetPopupDetails {
            /**
             * Specifies for which tab the popup document should be retrieved. If no
             * tab is specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeTextDetails {
            /**
             * Any number of characters can be passed, but only about four can fit in
             * the space. Cleared by setting it to `null` or an empty string.
             */
            text: string | null;
            /** Sets the badge text only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeTextDetails {
            /**
             * Specifies for which tab the badge text should be retrieved. If no tab
             * is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeBackgroundColorDetails {
            /**
             * The color to use as background in the badge. Cleared by setting it to
             * `null` or an empty string.
             */
            color: string | ColorArray | null;
            /** Sets the background color for the badge only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeBackgroundColorDetails {
            /**
             * Specifies for which tab the badge background color should be
             * retrieved. If no tab is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _IsEnabledDetails {
            /**
             * Specifies for which tab the state should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        /* action functions */
        /**
         * Sets the title of the action button. Is used as tooltip and as the
         * label.
         */
        export function setTitle(details: _SetTitleDetails): Promise<void>;

        /** Gets the title of the action button. */
        export function getTitle(details: _GetTitleDetails): Promise<string>;

        /**
         * Sets the label of the action button. Can be used to set different
         * values for the tooltip (defined by the title) and the label.
         * Additionally, the label can be set to an empty string, not showing any
         * label at all.
         */
        export function setLabel(details: _SetLabelDetails): Promise<void>;

        /** Gets the label of the action button. */
        export function getLabel(details: _GetLabelDetails): Promise<string>;

        /**
         * Sets the icon for the action button. Either the `path` or the
         * `imageData` property must be specified.
         */
        export function setIcon(details: _SetIconDetails): Promise<void>;

        /**
         * Sets the html document to be opened as a popup when the user clicks on
         * the action button.
         */
        export function setPopup(details: _SetPopupDetails): Promise<void>;

        /** Gets the html document set as the popup for this action button. */
        export function getPopup(details: _GetPopupDetails): Promise<string>;

        /**
         * Sets the badge text for the action button. The badge is displayed on
         * top of the icon.
         */
        export function setBadgeText(details: _SetBadgeTextDetails): Promise<void>;

        /** Gets the badge text of the action button. */
        export function getBadgeText(details: _GetBadgeTextDetails): Promise<string>;

        /** Sets the background color for the badge. */
        export function setBadgeBackgroundColor(details: _SetBadgeBackgroundColorDetails): Promise<void>;

        /** Gets the badge background color of the action button. */
        export function getBadgeBackgroundColor(details: _GetBadgeBackgroundColorDetails): Promise<ColorArray>;

        /**
         * Enables the action button for a tab. By default, an action button is
         * enabled.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * action button.
         */
        export function enable(tabId?: number): Promise<void>;

        /**
         * Disables the action button for a tab.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * action button.
         */
        export function disable(tabId?: number): Promise<void>;

        /** Checks whether the action button is enabled. */
        export function isEnabled(details: _IsEnabledDetails): Promise<boolean>;

        /** Opens the action's popup window in the active window. */
        export function openPopup(): Promise<boolean>;

        /* action events */
        /**
         * Fired when an action button is clicked. This event will not fire if
         * the action has a popup. This is a user input event handler. For
         * asynchronous listeners some restrictions apply.
         */
        export const onClicked: WebExtEvent<(tab: tabs.Tab, info?: OnClickData) => void>;
    }

    /**
     * Manifest keys: `action`, `browser_action`
     *
     * Not supported on manifest versions above 2.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/browserAction.html
     */
    export namespace browserAction {
        /* browserAction types */
        /**
         * An array of four integers in the range [0,255] that make up the RGBA
         * color. For example, opaque red is `[255, 0, 0, 255]`.
         */
        export type ColorArray = [number, number, number, number];

        /**
         * Pixel data for an image. Must be an {@link ImageData} object (for
         * example, from a {@link Canvas} element).
         */
        export type ImageDataType = ImageData;

        /**
         * A _dictionary object_ to specify multiple {@link ImageData} objects in
         * different sizes, so the icon does not have to be scaled for a device
         * with a different pixel density. Each entry is a _name-value_ pair with
         * _value_ being an {@link ImageData} object, and _name_ its size.
         * Example:
         * [ImageDataDictionary.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/ImageDataDictionary.json)See
         * the MDN documentation about choosing icon sizes for more information
         * on this.
         */
        export interface ImageDataDictionary {
            [key: number]: ImageDataType;
        }

        /** Information sent when an action button is clicked. */
        export interface OnClickData {
            /**
             * An array of keyboard modifiers that were held while the menu item was
             * clicked.
             */
            modifiers: _OnClickDataModifiers[];
            /** An integer value of button by which menu item was clicked. */
            button?: number | undefined;
        }

        export type _OnClickDataModifiers = "Shift" | "Alt" | "Command" | "Ctrl" | "MacCtrl";

        export interface _SetTitleDetails {
            /**
             * A string the action button should display as its label and when moused
             * over. Cleared by setting it to `null` or an empty string (title
             * defined the manifest will be used).
             */
            title: string | null;
            /** Sets the title only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetTitleDetails {
            /**
             * Specifies for which tab the title should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetLabelDetails {
            /**
             * A string the action button should use as its label, overriding the
             * defined title. Can be set to an empty string to not display any label
             * at all. If the containing toolbar is configured to display text only,
             * its title will be used. Cleared by setting it to `null`.
             */
            label: string | null;
            /** Sets the label only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetLabelDetails {
            /**
             * Specifies for which tab the label should be retrieved. If no tab is
             * specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetIconDetails {
            /** The image data for one or more icons for the action button. */
            imageData?: ImageDataType | ImageDataDictionary | undefined;
            /** The paths to one or more icons for the action button. */
            path?: _manifest.IconPath | undefined;
            /** Sets the icon only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetPopupDetails {
            /**
             * The html file to show in a popup. Can be set to an empty string to not
             * open a popup. Cleared by setting it to `null` (popup value defined the
             * manifest will be used).
             */
            popup: string | null;
            /** Sets the popup only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetPopupDetails {
            /**
             * Specifies for which tab the popup document should be retrieved. If no
             * tab is specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeTextDetails {
            /**
             * Any number of characters can be passed, but only about four can fit in
             * the space. Cleared by setting it to `null` or an empty string.
             */
            text: string | null;
            /** Sets the badge text only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeTextDetails {
            /**
             * Specifies for which tab the badge text should be retrieved. If no tab
             * is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeBackgroundColorDetails {
            /**
             * The color to use as background in the badge. Cleared by setting it to
             * `null` or an empty string.
             */
            color: string | ColorArray | null;
            /** Sets the background color for the badge only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeBackgroundColorDetails {
            /**
             * Specifies for which tab the badge background color should be
             * retrieved. If no tab is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _IsEnabledDetails {
            /**
             * Specifies for which tab the state should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        /* browserAction functions */
        /**
         * Sets the title of the action button. Is used as tooltip and as the
         * label.
         */
        export function setTitle(details: _SetTitleDetails): Promise<void>;

        /** Gets the title of the action button. */
        export function getTitle(details: _GetTitleDetails): Promise<string>;

        /**
         * Sets the label of the action button. Can be used to set different
         * values for the tooltip (defined by the title) and the label.
         * Additionally, the label can be set to an empty string, not showing any
         * label at all.
         */
        export function setLabel(details: _SetLabelDetails): Promise<void>;

        /** Gets the label of the action button. */
        export function getLabel(details: _GetLabelDetails): Promise<string>;

        /**
         * Sets the icon for the action button. Either the `path` or the
         * `imageData` property must be specified.
         */
        export function setIcon(details: _SetIconDetails): Promise<void>;

        /**
         * Sets the html document to be opened as a popup when the user clicks on
         * the action button.
         */
        export function setPopup(details: _SetPopupDetails): Promise<void>;

        /** Gets the html document set as the popup for this action button. */
        export function getPopup(details: _GetPopupDetails): Promise<string>;

        /**
         * Sets the badge text for the action button. The badge is displayed on
         * top of the icon.
         */
        export function setBadgeText(details: _SetBadgeTextDetails): Promise<void>;

        /** Gets the badge text of the action button. */
        export function getBadgeText(details: _GetBadgeTextDetails): Promise<string>;

        /** Sets the background color for the badge. */
        export function setBadgeBackgroundColor(details: _SetBadgeBackgroundColorDetails): Promise<void>;

        /** Gets the badge background color of the action button. */
        export function getBadgeBackgroundColor(details: _GetBadgeBackgroundColorDetails): Promise<ColorArray>;

        /**
         * Enables the action button for a tab. By default, an action button is
         * enabled.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * action button.
         */
        export function enable(tabId?: number): Promise<void>;

        /**
         * Disables the action button for a tab.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * action button.
         */
        export function disable(tabId?: number): Promise<void>;

        /** Checks whether the action button is enabled. */
        export function isEnabled(details: _IsEnabledDetails): Promise<boolean>;

        /** Opens the action's popup window in the active window. */
        export function openPopup(): Promise<boolean>;

        /* browserAction events */
        /**
         * Fired when an action button is clicked. This event will not fire if
         * the action has a popup. This is a user input event handler. For
         * asynchronous listeners some restrictions apply.
         */
        export const onClicked: WebExtEvent<(tab: tabs.Tab, info?: OnClickData) => void>;
    }

    /**
     * Manifest keys: `cloud_file`
     *
     * Not allowed in: Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/cloudFile.html
     */
    export namespace cloudFile {
        /* cloudFile types */
        /** Information about a cloud file account. */
        export interface CloudFileAccount {
            /** Unique identifier of the account. */
            id: string;
            /**
             * If true, the account is configured and ready to use. Only configured
             * accounts are offered to the user.
             */
            configured: boolean;
            /** A user-friendly name for this account. */
            name: string;
            /**
             * The maximum size in bytes for a single file to upload. Set to `-1` if
             * unlimited.
             */
            uploadSizeLimit?: number | undefined;
            /**
             * The amount of remaining space on the cloud provider, in bytes. Set to
             * `-1` if unsupported.
             */
            spaceRemaining?: number | undefined;
            /**
             * The amount of space already used on the cloud provider, in bytes. Set
             * to `-1` if unsupported.
             */
            spaceUsed?: number | undefined;
            /**
             * A page for configuring accounts, to be displayed in the preferences
             * UI.
             */
            managementUrl: string;
        }

        /**
         * Defines information to be used in the cloud file entry added to the
         * message.
         */
        export interface CloudFileTemplateInfo {
            /**
             * A URL pointing to an icon to represent the used cloud file service.
             * Defaults to the icon of the provider add-on.
             */
            service_icon?: string | undefined;
            /**
             * A name to represent the used cloud file service. Defaults to the
             * associated cloud file account name.
             */
            service_name?: string | undefined;
            /**
             * A URL pointing to a web page of the used cloud file service. Will be
             * used in a _Learn more about_ link in the footer of the cloud file
             * attachment element.
             */
            service_url?: string | undefined;
            /**
             * If set to true, the cloud file entry for this upload will include a
             * hint, that the download link is password protected.
             */
            download_password_protected?: boolean | undefined;
            /**
             * If set, the cloud file entry for this upload will include a hint, that
             * the file has a download limit.
             */
            download_limit?: number | undefined;
            /**
             * If set, the cloud file entry for this upload will include a hint, that
             * the link will only be available for a limited time.
             */
            download_expiry_date?: _CloudFileTemplateInfoDownloadExpiryDate | undefined;
        }

        /** Information about a cloud file. */
        export interface CloudFile {
            /** An identifier for this file. */
            id: number;
            /** Filename of the file to be transferred. */
            name: string;
            /** Contents of the file to be transferred. */
            data: File;
        }

        /**
         * Information about an already uploaded cloud file, which is related to
         * a new upload. For example if the content of a cloud attachment is
         * updated, if a repeatedly used cloud attachment is renamed (and
         * therefore should be re-uploaded to not invalidate existing links) or
         * if the provider has its manifest property `reuse_uploads` set to
         * `false`.
         */
        export interface RelatedCloudFile {
            /**
             * The identifier for the related file. In some circumstances, the id is
             * unavailable.
             */
            id?: number | undefined;
            /** The URL where the upload of the related file can be accessed. */
            url?: string | undefined;
            /**
             * Additional information of the related file, used in the cloud file
             * entry added to the message.
             */
            templateInfo?: CloudFileTemplateInfo | undefined;
            /** Filename of the related file. */
            name: string;
            /** The content of the new upload differs from the related file. */
            dataChanged: boolean;
        }

        /**
         * If set, the cloud file entry for this upload will include a hint, that
         * the link will only be available for a limited time.
         */
        export interface _CloudFileTemplateInfoDownloadExpiryDate {
            /**
             * The expiry date of the link as the number of milliseconds since the
             * UNIX epoch.
             */
            timestamp: number;
            /**
             * A format options object as used by {@link DateTimeFormat}. Defaults
             * to:
             * [defaultDateFormat.js](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/cloudFile/defaultDateFormat.js)
             */
            format?: { [key: string]: boolean } | undefined;
        }

        export interface _UpdateAccountUpdateProperties {
            /**
             * If true, the account is configured and ready to use. Only configured
             * accounts are offered to the user.
             */
            configured?: boolean | undefined;
            /**
             * The maximum size in bytes for a single file to upload. Set to `-1` if
             * unlimited.
             */
            uploadSizeLimit?: number | undefined;
            /**
             * The amount of remaining space on the cloud provider, in bytes. Set to
             * `-1` if unsupported.
             */
            spaceRemaining?: number | undefined;
            /**
             * The amount of space already used on the cloud provider, in bytes. Set
             * to `-1` if unsupported.
             */
            spaceUsed?: number | undefined;
            /**
             * A page for configuring accounts, to be displayed in the preferences
             * UI.
             */
            managementUrl?: string | undefined;
        }

        /* cloudFile functions */
        /**
         * Retrieve information about a single cloud file account.
         *
         * Not allowed in: Devtools pages
         *
         * @param accountId Unique identifier of the account.
         */
        export function getAccount(accountId: string): Promise<CloudFileAccount>;

        /**
         * Retrieve all cloud file accounts for the current add-on.
         *
         * Not allowed in: Devtools pages
         */
        export function getAllAccounts(): Promise<CloudFileAccount[]>;

        /**
         * Update a cloud file account.
         *
         * Not allowed in: Devtools pages
         *
         * @param accountId Unique identifier of the account.
         */
        export function updateAccount(
            accountId: string,
            updateProperties: _UpdateAccountUpdateProperties,
        ): Promise<CloudFileAccount>;

        /* cloudFile events */
        /**
         * Fired when a file should be uploaded to the cloud file provider.
         *
         * @param account The account used for the file upload.
         *
         * @param fileInfo The file to upload.
         *
         * @param tab The tab where the upload was initiated. Currently only
         * available for the message composer.
         *
         * @param [relatedFileInfo] Information about an already uploaded file,
         * which is related to this upload.
         */
        export const onFileUpload: WebExtEvent<
            (
                account: CloudFileAccount,
                fileInfo: CloudFile,
                tab: tabs.Tab,
                relatedFileInfo?: RelatedCloudFile,
            ) => {
                /**
                 * Set this to `true` if the file upload was aborted by the user and an
                 * {@link cloudFile.onFileUploadAbort} event has been received. No error
                 * message will be shown to the user.
                 */
                aborted?: boolean | undefined;
                /**
                 * Report an error to the user. Set this to `true` for showing a generic
                 * error message, or set a specific error message.
                 */
                error?: boolean | string | undefined;
                /** The URL where the uploaded file can be accessed. */
                url?: string | undefined;
                /**
                 * Additional file information used in the cloud file entry added to the
                 * message.
                 */
                templateInfo?: CloudFileTemplateInfo | undefined;
            }
        >;

        /**
         * @param account The account used for the file upload.
         *
         * @param fileId An identifier for this file.
         *
         * @param tab The tab where the upload was initiated. Currently only
         * available for the message composer.
         */
        export const onFileUploadAbort: WebExtEvent<(account: CloudFileAccount, fileId: number, tab: tabs.Tab) => void>;

        /**
         * Fired when a previously uploaded file should be renamed.
         *
         * @param account The account used for the file upload.
         *
         * @param fileId An identifier for the file which should be renamed.
         *
         * @param newName The new name of the file.
         *
         * @param tab The tab where the rename was initiated. Currently only
         * available for the message composer.
         */
        export const onFileRename: WebExtEvent<
            (
                account: CloudFileAccount,
                fileId: number,
                newName: string,
                tab: tabs.Tab,
            ) => {
                /**
                 * Report an error to the user. Set this to `true` for showing a generic
                 * error message, or set a specific error message.
                 */
                error?: boolean | string | undefined;
                /** The URL where the renamed file can be accessed. */
                url?: string | undefined;
            }
        >;

        /**
         * Fired when a previously uploaded file should be deleted.
         *
         * @param account The account used for the file upload.
         *
         * @param fileId An identifier for this file.
         *
         * @param tab The tab where the upload was initiated. Currently only
         * available for the message composer.
         */
        export const onFileDeleted: WebExtEvent<(account: CloudFileAccount, fileId: number, tab: tabs.Tab) => void>;

        /**
         * Fired when a cloud file account of this add-on was created.
         *
         * @param account The created account.
         */
        export const onAccountAdded: WebExtEvent<(account: CloudFileAccount) => void>;

        /**
         * Fired when a cloud file account of this add-on was deleted.
         *
         * @param accountId The id of the removed account.
         */
        export const onAccountDeleted: WebExtEvent<(accountId: string) => void>;
    }

    /**
     * Use the commands API to add keyboard shortcuts that trigger actions in
     * your extension, for example opening one of the action popups or
     * sending a command to the extension.
     *
     * Manifest keys: `commands`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/commands.html
     */
    export namespace commands {
        /* commands types */
        export interface Command {
            /** The name of the Extension Command */
            name?: string | undefined;
            /** The Extension Command description */
            description?: string | undefined;
            /** The shortcut active for this command, or blank if not active. */
            shortcut?: string | undefined;
        }

        /** The new details for the command. */
        export interface _UpdateDetail {
            /** The name of the command. */
            name: string;
            /** The description for the command. */
            description?: string | undefined;
            /**
             * An empty string to clear the shortcut, or a string matching the format
             * defined by the MDN page of the commands API to set a new shortcut key.
             * If the string does not match this format, the function throws an
             * error.
             */
            shortcut?: string | undefined;
        }

        /* commands functions */
        /**
         * Update the details of an already defined command.
         *
         * @param detail The new details for the command.
         */
        export function update(detail: _UpdateDetail): Promise<void>;

        /**
         * Reset a command's details to what is specified in the manifest.
         *
         * @param name The name of the command.
         */
        export function reset(name: string): Promise<void>;

        /**
         * Returns all the registered extension commands for this extension and
         * their shortcut (if active).
         */
        export function getAll(): Promise<Command[]>;

        /* commands events */
        /**
         * Fired when a registered command is activated using a keyboard
         * shortcut. This is a user input event handler. For asynchronous
         * listeners some restrictions apply.
         *
         * @param tab The details of the active tab while the command occurred.
         */
        export const onCommand: WebExtEvent<(command: string, tab: tabs.Tab) => void>;
    }

    /**
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/compose.html
     */
    export namespace compose {
        /* compose types */
        export type ComposeRecipient =
            | string
            | {
                /**
                 * The ID of a contact or mailing list from the
                 * [contacts](https://webextension-api.thunderbird.net/en/stable/contacts.html)
                 * and
                 * [mailingLists](https://webextension-api.thunderbird.net/en/stable/mailingLists.html)
                 * APIs.
                 */
                id: string;
                /** Which sort of object this ID is for. */
                type: _UndefinedType;
            };

        export type ComposeRecipientList = ComposeRecipient | ComposeRecipient[];

        /** Represent the state of the message composer. */
        export interface ComposeState {
            /** The message can be send now. */
            canSendNow: boolean;
            /** The message can be send later. */
            canSendLater: boolean;
        }

        /**
         * Used by various functions to represent the state of a message being
         * composed. Note that functions using this type may have a partial
         * implementation.
         */
        export interface ComposeDetails {
            /**
             * The ID of an identity from the
             * [accounts](https://webextension-api.thunderbird.net/en/stable/accounts.html)
             * API. The settings from the identity will be used in the composed
             * message. If `replyTo` is also specified, the `replyTo` property of the
             * identity is overridden. The permission
             * <permission>accountsRead</permission> is required to include the
             * `identityId`.
             */
            identityId?: string | undefined;
            /**
             * _Caution_: Setting a value for `from` does not change the used
             * identity, it overrides the FROM header. Many email servers do not
             * accept emails where the FROM header does not match the sender
             * identity. Must be set to exactly one valid email address.
             */
            from?: ComposeRecipient | undefined;
            to?: ComposeRecipientList | undefined;
            cc?: ComposeRecipientList | undefined;
            bcc?: ComposeRecipientList | undefined;
            /**
             * Indicates whether the default fcc setting (defined by the used
             * identity) is being overridden for this message. Setting `false` will
             * clear the override. Setting `true` will throw an _ExtensionError_, if
             * `overrideDefaultFccFolder` is not set as well.
             */
            overrideDefaultFcc?: boolean | undefined;
            /**
             * This value overrides the default fcc setting (defined by the used
             * identity) for this message only. Either a {@link folders.MailFolder}
             * specifying the folder for the copy of the sent message, or an empty
             * string to not save a copy at all.
             */
            overrideDefaultFccFolder?: folders.MailFolder | "" | undefined;
            /**
             * An additional fcc folder which can be selected while composing the
             * message, an empty string if not used.
             */
            additionalFccFolder?: folders.MailFolder | "" | undefined;
            replyTo?: ComposeRecipientList | undefined;
            followupTo?: ComposeRecipientList | undefined;
            newsgroups?: string | string[] | undefined;
            /**
             * The id of the original message (in case of draft, template, forward or
             * reply). Read-only. Is `null` in all other cases or if the original
             * message was opened from file.
             */
            relatedMessageId?: number | undefined;
            subject?: string | undefined;
            /**
             * Read-only. The type of the message being composed, depending on how
             * the compose window was opened by the user.
             */
            type?: _ComposeDetailsType | undefined;
            /** The HTML content of the message. */
            body?: string | undefined;
            /** The plain text content of the message. */
            plainTextBody?: string | undefined;
            /** Whether the message is an HTML message or a plain text message. */
            isPlainText?: boolean | undefined;
            /**
             * Defines the mime format of the sent message (ignored on plain text
             * messages). Defaults to `auto`, which will send html messages as plain
             * text, if they do not include any formatting, and as `both` otherwise
             * (a multipart/mixed message).
             */
            deliveryFormat?: _ComposeDetailsDeliveryFormat | undefined;
            /**
             * Array of custom headers. Headers will be returned in
             * _Http-Header-Case_ (a.k.a. _Train-Case_). Set an empty array to clear
             * all custom headers.
             */
            customHeaders?: CustomHeader[] | undefined;
            /** The priority of the message. */
            priority?: _ComposeDetailsPriority | undefined;
            /**
             * Add the _Disposition-Notification-To_ header to the message to
             * requests the recipients email client to send a reply once the message
             * has been received. Recipient server may strip the header and the
             * recipient might ignore the request.
             */
            returnReceipt?: boolean | undefined;
            /**
             * Let the sender know when the recipient's server received the message.
             * Not supported by all servers.
             */
            deliveryStatusNotification?: boolean | undefined;
            /**
             * Wether or not the vCard of the used identity will be attached to the
             * message during send. Note: If the value has not been modified,
             * selecting a different identity will load the default value of the new
             * identity.
             */
            attachVCard?: boolean | undefined;
            /** Only used in the begin\* functions. Attachments to add to the message. */
            attachments?: Array<FileAttachment | ComposeAttachment> | undefined;
        }

        /**
         * Object used to add, update or rename an attachment in a message being
         * composed.
         */
        export interface FileAttachment {
            /** The new content for the attachment. */
            file?: File | undefined;
            /**
             * The new name for the attachment, as displayed to the user. If not
             * specified, the name of the provided `file` object is used.
             */
            name?: string | undefined;
        }

        /** Represents an attachment in a message being composed. */
        export interface ComposeAttachment {
            /** A unique identifier for this attachment. */
            id: number;
            /** The name of this attachment, as displayed to the user. */
            name?: string | undefined;
            /** The size in bytes of this attachment. Read-only. */
            size?: number | undefined;
        }

        /** A custom header definition. */
        export interface CustomHeader {
            /** Name of a custom header, must have a `X-` prefix. */
            name: string;
            value: string;
        }

        /**
         * A _dictionary object_ with entries for all installed dictionaries,
         * having a language identifier as _key_ (for example `en-US`) and a
         * boolean expression as _value_, indicating whether that dictionary is
         * enabled for spellchecking or not.
         */
        export interface ComposeDictionaries {
            [key: string]: boolean;
        }

        /** Which sort of object this ID is for. */
        export type _UndefinedType = "contact" | "mailingList";

        /**
         * Read-only. The type of the message being composed, depending on how
         * the compose window was opened by the user.
         */
        export type _ComposeDetailsType = "draft" | "new" | "redirect" | "reply" | "forward";

        /**
         * Defines the mime format of the sent message (ignored on plain text
         * messages). Defaults to `auto`, which will send html messages as plain
         * text, if they do not include any formatting, and as `both` otherwise
         * (a multipart/mixed message).
         */
        export type _ComposeDetailsDeliveryFormat = "auto" | "plaintext" | "html" | "both";

        /** The priority of the message. */
        export type _ComposeDetailsPriority = "lowest" | "low" | "normal" | "high" | "highest";

        export type _BeginReplyReplyType = "replyToSender" | "replyToList" | "replyToAll";

        export type _BeginForwardForwardType = "forwardInline" | "forwardAsAttachment";

        /** The used send mode. */
        export type _SendMessageReturnReturnMode = "sendNow" | "sendLater";

        export interface _SendMessageReturnReturn {
            /** The used send mode. */
            mode: _SendMessageReturnReturnMode;
            /**
             * The header messageId of the outgoing message. Only included for
             * actually sent messages.
             */
            headerMessageId?: string | undefined;
            /**
             * Copies of the sent message. The number of created copies depends on
             * the applied file carbon copy configuration (fcc).
             */
            messages: messages.MessageHeader[];
        }

        export type _SendMessageOptionsMode = "default" | "sendNow" | "sendLater";

        export interface _SendMessageOptions {
            mode: _SendMessageOptionsMode;
        }

        /** The used save mode. */
        export type _SaveMessageReturnReturnMode = "draft" | "template";

        export interface _SaveMessageReturnReturn {
            /** The used save mode. */
            mode: _SaveMessageReturnReturnMode;
            /**
             * The saved message(s). The number of saved messages depends on the
             * applied file carbon copy configuration (fcc).
             */
            messages: messages.MessageHeader[];
        }

        export type _SaveMessageOptionsMode = "draft" | "template";

        export interface _SaveMessageOptions {
            mode: _SaveMessageOptionsMode;
        }

        /** The used send mode. */
        export type _OnAfterSendSendInfoMode = "sendNow" | "sendLater";

        export interface _OnAfterSendSendInfo {
            /** The used send mode. */
            mode: _OnAfterSendSendInfoMode;
            /** An error description, if sending the message failed. */
            error?: string | undefined;
            /**
             * The header messageId of the outgoing message. Only included for
             * actually sent messages.
             */
            headerMessageId?: string | undefined;
            /**
             * Copies of the sent message. The number of created copies depends on
             * the applied file carbon copy configuration (fcc).
             */
            messages: messages.MessageHeader[];
        }

        /** The used save mode. */
        export type _OnAfterSaveSaveInfoMode = "draft" | "template";

        export interface _OnAfterSaveSaveInfo {
            /** The used save mode. */
            mode: _OnAfterSaveSaveInfoMode;
            /** An error description, if saving the message failed. */
            error?: string | undefined;
            /**
             * The saved message(s). The number of saved messages depends on the
             * applied file carbon copy configuration (fcc).
             */
            messages: messages.MessageHeader[];
        }

        /* compose functions */
        /**
         * Open a new message compose window.
         *
         * **Note:** The compose format can be set by `details.isPlainText` or by
         * specifying only one of `details.body` or `details.plainTextBody`.
         * Otherwise the default compose format of the selected identity is used.
         *
         * **Note:** Specifying `details.body` and `details.plainTextBody`
         * without also specifying `details.isPlainText` threw an exception in
         * Thunderbird up to version 97\. Since Thunderbird 98, this combination
         * creates a compose window with the compose format of the selected
         * identity, using the matching `details.body` or `details.plainTextBody`
         * value.
         *
         * **Note:** If no identity is specified, this function is using the
         * default identity and not the identity of the referenced message.
         *
         * @param messageId If specified, the message or template to edit as a
         * new message.
         */
        export function beginNew(messageId: number, details?: ComposeDetails): Promise<tabs.Tab>;
        /**
         * Open a new message compose window.
         *
         * **Note:** The compose format can be set by `details.isPlainText` or by
         * specifying only one of `details.body` or `details.plainTextBody`.
         * Otherwise the default compose format of the selected identity is used.
         *
         * **Note:** Specifying `details.body` and `details.plainTextBody`
         * without also specifying `details.isPlainText` threw an exception in
         * Thunderbird up to version 97\. Since Thunderbird 98, this combination
         * creates a compose window with the compose format of the selected
         * identity, using the matching `details.body` or `details.plainTextBody`
         * value.
         *
         * **Note:** If no identity is specified, this function is using the
         * default identity and not the identity of the referenced message.
         */
        export function beginNew(details?: ComposeDetails): Promise<tabs.Tab>;

        /**
         * Open a new message compose window replying to a given message.
         *
         * **Note:** The compose format can be set by `details.isPlainText` or by
         * specifying only one of `details.body` or `details.plainTextBody`.
         * Otherwise the default compose format of the selected identity is used.
         *
         * **Note:** Specifying `details.body` and `details.plainTextBody`
         * without also specifying `details.isPlainText` threw an exception in
         * Thunderbird up to version 97\. Since Thunderbird 98, this combination
         * creates a compose window with the compose format of the selected
         * identity, using the matching `details.body` or `details.plainTextBody`
         * value.
         *
         * **Note:** If no identity is specified, this function is using the
         * default identity and not the identity of the referenced message.
         *
         * @param messageId The message to reply to, as retrieved using other
         * APIs.
         */
        export function beginReply(
            messageId: number,
            replyType: _BeginReplyReplyType,
            details?: ComposeDetails,
        ): Promise<tabs.Tab>;
        /**
         * Open a new message compose window replying to a given message.
         *
         * **Note:** The compose format can be set by `details.isPlainText` or by
         * specifying only one of `details.body` or `details.plainTextBody`.
         * Otherwise the default compose format of the selected identity is used.
         *
         * **Note:** Specifying `details.body` and `details.plainTextBody`
         * without also specifying `details.isPlainText` threw an exception in
         * Thunderbird up to version 97\. Since Thunderbird 98, this combination
         * creates a compose window with the compose format of the selected
         * identity, using the matching `details.body` or `details.plainTextBody`
         * value.
         *
         * **Note:** If no identity is specified, this function is using the
         * default identity and not the identity of the referenced message.
         *
         * @param messageId The message to reply to, as retrieved using other
         * APIs.
         */
        export function beginReply(messageId: number, details?: ComposeDetails): Promise<tabs.Tab>;

        /**
         * Open a new message compose window forwarding a given message.
         *
         * **Note:** The compose format can be set by `details.isPlainText` or by
         * specifying only one of `details.body` or `details.plainTextBody`.
         * Otherwise the default compose format of the selected identity is used.
         *
         * **Note:** Specifying `details.body` and `details.plainTextBody`
         * without also specifying `details.isPlainText` threw an exception in
         * Thunderbird up to version 97\. Since Thunderbird 98, this combination
         * creates a compose window with the compose format of the selected
         * identity, using the matching `details.body` or `details.plainTextBody`
         * value.
         *
         * **Note:** If no identity is specified, this function is using the
         * default identity and not the identity of the referenced message.
         *
         * @param messageId The message to forward, as retrieved using other
         * APIs.
         */
        export function beginForward(
            messageId: number,
            forwardType: _BeginForwardForwardType,
            details?: ComposeDetails,
        ): Promise<tabs.Tab>;
        /**
         * Open a new message compose window forwarding a given message.
         *
         * **Note:** The compose format can be set by `details.isPlainText` or by
         * specifying only one of `details.body` or `details.plainTextBody`.
         * Otherwise the default compose format of the selected identity is used.
         *
         * **Note:** Specifying `details.body` and `details.plainTextBody`
         * without also specifying `details.isPlainText` threw an exception in
         * Thunderbird up to version 97\. Since Thunderbird 98, this combination
         * creates a compose window with the compose format of the selected
         * identity, using the matching `details.body` or `details.plainTextBody`
         * value.
         *
         * **Note:** If no identity is specified, this function is using the
         * default identity and not the identity of the referenced message.
         *
         * @param messageId The message to forward, as retrieved using other
         * APIs.
         */
        export function beginForward(messageId: number, details?: ComposeDetails): Promise<tabs.Tab>;

        /**
         * Fetches the current state of a compose window. Currently only a
         * limited amount of information is available, more will be added in
         * later versions.
         */
        export function getComposeDetails(tabId: number): Promise<ComposeDetails>;

        /**
         * Updates the compose window. Only fields that are to be changed should
         * be specified. Currently only a limited amount of information can be
         * set, more will be added in later versions.
         *
         * **Note:** The compose format of an existing compose window cannot be
         * changed. Since Thunderbird 98, setting conflicting values for
         * `details.body`, `details.plainTextBody` or `details.isPlaintext` no
         * longer throw an exception, instead the compose window chooses the
         * matching `details.body` or `details.plainTextBody` value and ignores
         * the other.
         */
        export function setComposeDetails(tabId: number, details: ComposeDetails): Promise<any>;

        /**
         * Returns a {@link compose.ComposeDictionaries} object, listing all
         * installed dictionaries, including the information whether they are
         * currently enabled or not.
         */
        export function getActiveDictionaries(tabId: number): Promise<ComposeDictionaries>;

        /**
         * Updates the active dictionaries. Throws if the `activeDictionaries`
         * array contains unknown or invalid language identifiers.
         */
        export function setActiveDictionaries(tabId: number, activeDictionaries: string[]): Promise<any>;

        /**
         * Lists all of the attachments of the message being composed in the
         * specified tab.
         */
        export function listAttachments(tabId: number): Promise<ComposeAttachment[]>;

        /**
         * Gets the content of a {@link compose.ComposeAttachment} as a {@link File}
         * object.
         *
         * @param id The unique identifier for the attachment.
         */
        export function getAttachmentFile(id: number): Promise<File>;

        /** Adds an attachment to the message being composed in the specified tab. */
        export function addAttachment(
            tabId: number,
            attachment: FileAttachment | ComposeAttachment,
        ): Promise<ComposeAttachment>;

        /**
         * Updates the name and/or the content of an attachment in the message
         * being composed in the specified tab. If the specified attachment is a
         * cloud file attachment and the associated provider failed to update the
         * attachment, the function will throw an _ExtensionError_.
         */
        export function updateAttachment(
            tabId: number,
            attachmentId: number,
            attachment: FileAttachment,
        ): Promise<ComposeAttachment>;

        /**
         * Removes an attachment from the message being composed in the specified
         * tab.
         */
        export function removeAttachment(tabId: number, attachmentId: number): Promise<any>;

        /**
         * Sends the message currently being composed. If the send mode is not
         * specified or set to `default`, the message will be send directly if
         * the user is online and placed in the users outbox otherwise. The
         * returned Promise fulfills once the message has been successfully sent
         * or placed in the user's outbox. Throws when the send process has been
         * aborted by the user, by an {@link compose.onBeforeSend} event or if
         * there has been an error while sending the message to the outgoing mail
         * server.
         */
        export function sendMessage(tabId: number, options?: _SendMessageOptions): Promise<_SendMessageReturnReturn>;

        /**
         * Saves the message currently being composed as a draft or as a
         * template. If the save mode is not specified, the message will be saved
         * as a draft. The returned Promise fulfills once the message has been
         * successfully saved.
         */
        export function saveMessage(tabId: number, options?: _SaveMessageOptions): Promise<_SaveMessageReturnReturn>;

        /** Returns information about the current state of the message composer. */
        export function getComposeState(tabId: number): Promise<ComposeState>;

        /* compose events */
        /**
         * Fired when a message is about to be sent from the compose window. This
         * is a user input event handler. For asynchronous listeners some
         * restrictions apply.
         *
         * @param details The current state of the compose window. This is
         * functionally the same as calling the {@link compose.getComposeDetails}
         * function.
         */
        export const onBeforeSend: WebExtEvent<
            (
                tab: tabs.Tab,
                details: ComposeDetails,
            ) => {
                /** Cancels the send. */
                cancel?: boolean | undefined;
                /**
                 * Updates the compose window. This is functionally the same as calling
                 * the {@link compose.setComposeDetails} function.
                 */
                details?: ComposeDetails | undefined;
            }
        >;

        /** Fired when sending a message succeeded or failed. */
        export const onAfterSend: WebExtEvent<(tab: tabs.Tab, sendInfo: _OnAfterSendSendInfo) => void>;

        /** Fired when saving a message as draft or template succeeded or failed. */
        export const onAfterSave: WebExtEvent<(tab: tabs.Tab, saveInfo: _OnAfterSaveSaveInfo) => void>;

        /** Fired when an attachment is added to a message being composed. */
        export const onAttachmentAdded: WebExtEvent<(tab: tabs.Tab, attachment: ComposeAttachment) => void>;

        /** Fired when an attachment is removed from a message being composed. */
        export const onAttachmentRemoved: WebExtEvent<(tab: tabs.Tab, attachmentId: number) => void>;

        /**
         * Fired when the user changes the identity that will be used to send a
         * message being composed.
         */
        export const onIdentityChanged: WebExtEvent<(tab: tabs.Tab, identityId: string) => void>;

        /** Fired when the state of the message composer changed. */
        export const onComposeStateChanged: WebExtEvent<(tab: tabs.Tab, state: ComposeState) => void>;

        /**
         * Fired when one or more dictionaries have been activated or
         * deactivated.
         */
        export const onActiveDictionariesChanged: WebExtEvent<
            (tab: tabs.Tab, dictionaries: ComposeDictionaries) => void
        >;
    }

    /**
     * Use a composeAction to put a button in the message composition
     * toolbars. In addition to its icon, a composeAction button can also
     * have a tooltip, a badge, and a popup.
     *
     * Manifest keys: `compose_action`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/composeAction.html
     */
    export namespace composeAction {
        /* composeAction types */
        /**
         * An array of four integers in the range [0,255] that make up the RGBA
         * color. For example, opaque red is `[255, 0, 0, 255]`.
         */
        export type ColorArray = [number, number, number, number];

        /**
         * Pixel data for an image. Must be an {@link ImageData} object (for
         * example, from a {@link Canvas} element).
         */
        export type ImageDataType = ImageData;

        /**
         * A _dictionary object_ to specify multiple {@link ImageData} objects in
         * different sizes, so the icon does not have to be scaled for a device
         * with a different pixel density. Each entry is a _name-value_ pair with
         * _value_ being an {@link ImageData} object, and _name_ its size.
         * Example:
         * [ImageDataDictionary.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/ImageDataDictionary.json)See
         * the MDN documentation about choosing icon sizes for more information
         * on this.
         */
        export interface ImageDataDictionary {
            [key: number]: ImageDataType;
        }

        /** Information sent when a composeAction button is clicked. */
        export interface OnClickData {
            /**
             * An array of keyboard modifiers that were held while the menu item was
             * clicked.
             */
            modifiers: _OnClickDataModifiers[];
            /** An integer value of button by which menu item was clicked. */
            button?: number | undefined;
        }

        export type _OnClickDataModifiers = "Shift" | "Alt" | "Command" | "Ctrl" | "MacCtrl";

        export interface _SetTitleDetails {
            /**
             * A string the composeAction button should display as its label and when
             * moused over. Cleared by setting it to `null` or an empty string (title
             * defined the manifest will be used).
             */
            title: string | null;
            /** Sets the title only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetTitleDetails {
            /**
             * Specifies for which tab the title should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetLabelDetails {
            /**
             * A string the composeAction button should use as its label, overriding
             * the defined title. Can be set to an empty string to not display any
             * label at all. If the containing toolbar is configured to display text
             * only, its title will be used. Cleared by setting it to `null`.
             */
            label: string | null;
            /** Sets the label only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetLabelDetails {
            /**
             * Specifies for which tab the label should be retrieved. If no tab is
             * specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetIconDetails {
            /** The image data for one or more icons for the composeAction button. */
            imageData?: ImageDataType | ImageDataDictionary | undefined;
            /** The paths to one or more icons for the composeAction button. */
            path?: _manifest.IconPath | undefined;
            /** Sets the icon only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetPopupDetails {
            /**
             * The html file to show in a popup. Can be set to an empty string to not
             * open a popup. Cleared by setting it to `null` (action will use the
             * popup value defined in the manifest).
             */
            popup: string | null;
            /** Sets the popup only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetPopupDetails {
            /**
             * Specifies for which tab the popup document should be retrieved. If no
             * tab is specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeTextDetails {
            /**
             * Any number of characters can be passed, but only about four can fit in
             * the space. Cleared by setting it to `null` or an empty string.
             */
            text: string | null;
            /** Sets the badge text only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeTextDetails {
            /**
             * Specifies for which tab the badge text should be retrieved. If no tab
             * is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeBackgroundColorDetails {
            /**
             * The color to use as background in the badge. Cleared by setting it to
             * `null` or an empty string.
             */
            color: string | ColorArray | null;
            /** Sets the background color for the badge only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeBackgroundColorDetails {
            /**
             * Specifies for which tab the badge background color should be
             * retrieved. If no tab is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _IsEnabledDetails {
            /**
             * Specifies for which tab the state should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        /* composeAction functions */
        /**
         * Sets the title of the composeAction button. Is used as tooltip and as
         * the label.
         */
        export function setTitle(details: _SetTitleDetails): Promise<void>;

        /** Gets the title of the composeAction button. */
        export function getTitle(details: _GetTitleDetails): Promise<string>;

        /**
         * Sets the label of the composeAction button. Can be used to set
         * different values for the tooltip (defined by the title) and the label.
         * Additionally, the label can be set to an empty string, not showing any
         * label at all.
         */
        export function setLabel(details: _SetLabelDetails): Promise<void>;

        /** Gets the label of the composeAction button. */
        export function getLabel(details: _GetLabelDetails): Promise<string>;

        /**
         * Sets the icon for the composeAction button. Either the `path` or the
         * `imageData` property must be specified.
         */
        export function setIcon(details: _SetIconDetails): Promise<void>;

        /**
         * Sets the html document to be opened as a popup when the user clicks on
         * the composeAction button.
         */
        export function setPopup(details: _SetPopupDetails): Promise<void>;

        /** Gets the html document set as the popup for this composeAction button. */
        export function getPopup(details: _GetPopupDetails): Promise<string>;

        /**
         * Sets the badge text for the composeAction button. The badge is
         * displayed on top of the icon.
         */
        export function setBadgeText(details: _SetBadgeTextDetails): Promise<void>;

        /** Gets the badge text of the composeAction button. */
        export function getBadgeText(details: _GetBadgeTextDetails): Promise<string>;

        /** Sets the background color for the badge. */
        export function setBadgeBackgroundColor(details: _SetBadgeBackgroundColorDetails): Promise<void>;

        /** Gets the badge background color of the composeAction button. */
        export function getBadgeBackgroundColor(details: _GetBadgeBackgroundColorDetails): Promise<ColorArray>;

        /**
         * Enables the composeAction button for a tab. By default, a
         * composeAction button is enabled.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * composeAction button.
         */
        export function enable(tabId?: number): Promise<void>;

        /**
         * Disables the composeAction button for a tab.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * composeAction button.
         */
        export function disable(tabId?: number): Promise<void>;

        /** Checks whether the composeAction button is enabled. */
        export function isEnabled(details: _IsEnabledDetails): Promise<boolean>;

        /** Opens the action's popup window in the active window. */
        export function openPopup(): Promise<any>;

        /* composeAction events */
        /**
         * Fired when a composeAction button is clicked. This event will not fire
         * if the composeAction has a popup. This is a user input event handler.
         * For asynchronous listeners some restrictions apply.
         */
        export const onClicked: WebExtEvent<(tab: tabs.Tab, info?: OnClickData) => void>;
    }

    /**
     * Permissions: `compose`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/composeScripts.html
     */
    export namespace composeScripts {
        /* composeScripts types */
        /** Details of a compose script registered programmatically */
        export interface RegisteredComposeScriptOptions {
            /** The list of CSS files to inject */
            css?: extensionTypes.ExtensionFileOrCode[] | undefined;
            /** The list of JavaScript files to inject */
            js?: extensionTypes.ExtensionFileOrCode[] | undefined;
        }

        /** An object that represents a compose script registered programmatically */
        export interface RegisteredComposeScript {
            /** Unregister a compose script registered programmatically */
            unregister(): Promise<any>;
        }

        /* composeScripts functions */
        /** Register a compose script programmatically */
        export function register(composeScriptOptions: RegisteredComposeScriptOptions): Promise<any>;
    }

    /**
     * Permissions: `messagesModify`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/messageDisplayScripts.html
     */
    export namespace messageDisplayScripts {
        /* messageDisplayScripts types */
        /** Details of a message display script registered programmatically */
        export interface RegisteredMessageDisplayScriptOptions {
            /** The list of CSS files to inject */
            css?: extensionTypes.ExtensionFileOrCode[] | undefined;
            /** The list of JavaScript files to inject */
            js?: extensionTypes.ExtensionFileOrCode[] | undefined;
        }

        /**
         * An object that represents a message display script registered
         * programmatically
         */
        export interface RegisteredMessageDisplayScript {
            /** Unregister a message display script registered programmatically */
            unregister(): Promise<any>;
        }

        /* messageDisplayScripts functions */
        /** Register a message display script programmatically */
        export function register(messageDisplayScriptOptions: RegisteredMessageDisplayScriptOptions): Promise<any>;
    }

    /**
     * Permissions: `accountsRead`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/folders.html
     */
    export namespace folders {
        /* folders types */
        /**
         * An object describing a mail folder, as returned for example by the
         * {@link folders.getParentFolders} or {@link folders.getSubFolders}
         * methods, or part of a {@link accounts.MailAccount} object, which is
         * returned for example by the {@link accounts.list} and {@link accounts.get}
         * methods. The `subFolders` property is only included if
         * requested.
         */
        export interface MailFolder {
            /** The account this folder belongs to. */
            accountId: string;
            /** The human-friendly name of this folder. */
            name?: string | undefined;
            /**
             * Path to this folder in the account. Although paths look predictable,
             * never guess a folder's path, as there are a number of reasons why it
             * may not be what you think it is. Use {@link folders.getParentFolders}
             * or {@link folders.getSubFolders} to obtain hierarchy information.
             */
            path: string;
            /**
             * Subfolders are only included if requested. They will be returned in
             * the same order as used in Thunderbird's folder pane.
             */
            subFolders?: MailFolder[] | undefined;
            /** The type of folder, for several common types. */
            type?: _MailFolderType | undefined;
        }

        /** An object containing additional information about a mail folder. */
        export interface MailFolderInfo {
            /** Whether this folder is a favorite folder. */
            favorite?: boolean | undefined;
            /** Number of messages in this folder. */
            totalMessageCount?: number | undefined;
            /** Number of unread messages in this folder. */
            unreadMessageCount?: number | undefined;
        }

        /** The type of folder, for several common types. */
        export type _MailFolderType =
            | "inbox"
            | "drafts"
            | "sent"
            | "trash"
            | "templates"
            | "archives"
            | "junk"
            | "outbox";

        export { _delete as delete };

        /* folders functions */
        /**
         * Creates a new subfolder in the specified folder or at the root of the
         * specified account.
         */
        export function create(parent: MailFolder | accounts.MailAccount, childName: string): Promise<MailFolder>;

        /** Renames a folder. */
        export function rename(folder: MailFolder, newName: string): Promise<MailFolder>;

        /**
         * Moves the given `sourceFolder` into the given `destination`. Throws if
         * the destination already contains a folder with the name of the source
         * folder.
         */
        export function move(
            sourceFolder: MailFolder,
            destination: MailFolder | accounts.MailAccount,
        ): Promise<MailFolder>;

        /**
         * Copies the given `sourceFolder` into the given `destination`. Throws
         * if the destination already contains a folder with the name of the
         * source folder.
         */
        export function copy(
            sourceFolder: MailFolder,
            destination: MailFolder | accounts.MailAccount,
        ): Promise<MailFolder>;

        /** Deletes a folder. */
        function _delete(folder: MailFolder): Promise<any>;

        /** Get additional information about a mail folder. */
        export function getFolderInfo(folder: MailFolder): Promise<MailFolderInfo>;

        /**
         * Get all parent folders as a flat ordered array. The first array entry
         * is the direct parent.
         *
         * @param [includeSubFolders] Specifies whether the returned {@link folders.MailFolder}
         * object for each parent folder should include its
         * nested subfolders . Defaults to `false`.
         */
        export function getParentFolders(folder: MailFolder, includeSubFolders?: boolean): Promise<MailFolder[]>;

        /**
         * Get the subfolders of the specified folder or account.
         *
         * @param [includeSubFolders] Specifies whether the returned {@link folders.MailFolder}
         * object for each direct subfolder should also
         * include all its nested subfolders . Defaults to `true`.
         */
        export function getSubFolders(
            folderOrAccount: MailFolder | accounts.MailAccount,
            includeSubFolders?: boolean,
        ): Promise<MailFolder[]>;

        /* folders events */
        /** Fired when a folder has been created. */
        export const onCreated: WebExtEvent<(createdFolder: MailFolder) => void>;

        /** Fired when a folder has been renamed. */
        export const onRenamed: WebExtEvent<(originalFolder: MailFolder, renamedFolder: MailFolder) => void>;

        /** Fired when a folder has been moved. */
        export const onMoved: WebExtEvent<(originalFolder: MailFolder, movedFolder: MailFolder) => void>;

        /** Fired when a folder has been copied. */
        export const onCopied: WebExtEvent<(originalFolder: MailFolder, copiedFolder: MailFolder) => void>;

        /** Fired when a folder has been deleted. */
        export const onDeleted: WebExtEvent<(deletedFolder: MailFolder) => void>;

        /**
         * Fired when certain information of a folder have changed. Bursts of
         * message count changes are collapsed to a single event.
         */
        export const onFolderInfoChanged: WebExtEvent<(folder: MailFolder, folderInfo: MailFolderInfo) => void>;
    }

    /**
     * Permissions: `accountsRead`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/identities.html
     */
    export namespace identities {
        /* identities types */
        export interface MailIdentity {
            /**
             * The id of the {@link accounts.MailAccount} this identity belongs to.
             * The `accountId` property is read-only.
             */
            accountId?: string | undefined;
            /** If the identity uses HTML as the default compose format. */
            composeHtml?: boolean | undefined;
            /**
             * The user's email address as used when messages are sent from this
             * identity.
             */
            email?: string | undefined;
            /** A unique identifier for this identity. The `id` property is read-only. */
            id?: string | undefined;
            /** A user-defined label for this identity. */
            label?: string | undefined;
            /** The user's name as used when messages are sent from this identity. */
            name?: string | undefined;
            /** The reply-to email address associated with this identity. */
            replyTo?: string | undefined;
            /** The organization associated with this identity. */
            organization?: string | undefined;
            /** The signature of the identity. */
            signature?: string | undefined;
            /** If the signature should be interpreted as plain text or as HTML. */
            signatureIsPlainText?: boolean | undefined;
        }

        export { _delete as delete };

        /* identities functions */
        /**
         * Returns the identities of the specified account, or all identities if
         * no account is specified. Do not expect the returned identities to be
         * in any specific order. Use {@link identities.getDefault} to get the
         * default identity of an account.
         */
        export function list(accountId?: string): Promise<MailIdentity[]>;

        /**
         * Returns details of the requested identity, or `null` if it doesn't
         * exist.
         */
        export function get(identityId: string): Promise<MailIdentity>;

        /** Create a new identity in the specified account. */
        export function create(accountId: string, details: MailIdentity): Promise<MailIdentity>;

        /**
         * Attempts to delete the requested identity. Default identities cannot
         * be deleted.
         */
        function _delete(identityId: string): Promise<any>;

        /** Updates the details of an identity. */
        export function update(identityId: string, details: MailIdentity): Promise<MailIdentity>;

        /**
         * Returns the default identity for the requested account, or `null` if
         * it is not defined.
         */
        export function getDefault(accountId: string): Promise<MailIdentity>;

        /** Sets the default identity for the requested account. */
        export function setDefault(accountId: string, identityId: string): Promise<any>;

        /* identities events */
        /**
         * Fired when a new identity has been created and added to an account.
         * The event also fires for default identities that are created when a
         * new account is added.
         */
        export const onCreated: WebExtEvent<(identityId: string, identity: MailIdentity) => void>;

        /** Fired when an identity has been removed from an account. */
        export const onDeleted: WebExtEvent<(identityId: string) => void>;

        /**
         * Fired when one or more properties of an identity have been modified.
         * The returned {@link identities.MailIdentity} includes only the changed
         * values.
         */
        export const onUpdated: WebExtEvent<(identityId: string, changedValues: MailIdentity) => void>;
    }

    /**
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/mailTabs.html
     */
    export namespace mailTabs {
        /* mailTabs types */
        export interface MailTab {
            id: number;
            windowId: number;
            active: boolean;
            /**
             * **Note:** `sortType` and `sortOrder` depend on each other, so both
             * should be present, or neither.
             */
            sortType?: _MailTabSortType | undefined;
            /**
             * **Note:** `sortType` and `sortOrder` depend on each other, so both
             * should be present, or neither.
             */
            sortOrder?: _MailTabSortOrder | undefined;
            viewType?: _MailTabViewType | undefined;
            layout: _MailTabLayout;
            folderPaneVisible?: boolean | undefined;
            messagePaneVisible?: boolean | undefined;
            /**
             * The <permission>accountsRead</permission> permission is required for
             * this property to be included.
             */
            displayedFolder?: folders.MailFolder | undefined;
        }

        export interface QuickFilterTextDetail {
            /**
             * String to match against the `recipients`, `author`, `subject`, or
             * `body`.
             */
            text: string;
            /** Shows messages where `text` matches the recipients. */
            recipients?: boolean | undefined;
            /** Shows messages where `text` matches the author. */
            author?: boolean | undefined;
            /** Shows messages where `text` matches the subject. */
            subject?: boolean | undefined;
            /** Shows messages where `text` matches the message body. */
            body?: boolean | undefined;
        }

        /**
         * **Note:** `sortType` and `sortOrder` depend on each other, so both
         * should be present, or neither.
         */
        export type _MailTabSortType =
            | "none"
            | "date"
            | "subject"
            | "author"
            | "id"
            | "thread"
            | "priority"
            | "status"
            | "size"
            | "flagged"
            | "unread"
            | "recipient"
            | "location"
            | "tags"
            | "junkStatus"
            | "attachments"
            | "account"
            | "custom"
            | "received"
            | "correspondent";

        /**
         * **Note:** `sortType` and `sortOrder` depend on each other, so both
         * should be present, or neither.
         */
        export type _MailTabSortOrder = "none" | "ascending" | "descending";

        export type _MailTabViewType = "ungrouped" | "groupedByThread" | "groupedBySortType";

        export type _MailTabLayout = "standard" | "wide" | "vertical";

        export interface _QueryQueryInfo {
            /** Whether the tabs are active in their windows. */
            active?: boolean | undefined;
            /** Whether the tabs are in the current window. */
            currentWindow?: boolean | undefined;
            /** Whether the tabs are in the last focused window. */
            lastFocusedWindow?: boolean | undefined;
            /**
             * The ID of the parent window, or {@link windows.WINDOW_ID_CURRENT} for
             * the current window.
             */
            windowId?: number | undefined;
        }

        /** Sorts the list of messages. `sortOrder` must also be given. */
        export type _UpdateUpdatePropertiesSortType =
            | "none"
            | "date"
            | "subject"
            | "author"
            | "id"
            | "thread"
            | "priority"
            | "status"
            | "size"
            | "flagged"
            | "unread"
            | "recipient"
            | "location"
            | "tags"
            | "junkStatus"
            | "attachments"
            | "account"
            | "custom"
            | "received"
            | "correspondent";

        /** Sorts the list of messages. `sortType` must also be given. */
        export type _UpdateUpdatePropertiesSortOrder = "none" | "ascending" | "descending";

        export type _UpdateUpdatePropertiesViewType = "ungrouped" | "groupedByThread" | "groupedBySortType";

        /**
         * Sets the arrangement of the folder pane, message list pane, and
         * message display pane. Note that setting this applies it to all mail
         * tabs.
         */
        export type _UpdateUpdatePropertiesLayout = "standard" | "wide" | "vertical";

        export interface _UpdateUpdateProperties {
            /**
             * Sets the folder displayed in the tab. The extension must have the
             * <permission>accountsRead</permission> permission to do this.
             */
            displayedFolder?: folders.MailFolder | undefined;
            /** Sorts the list of messages. `sortOrder` must also be given. */
            sortType?: _UpdateUpdatePropertiesSortType | undefined;
            /** Sorts the list of messages. `sortType` must also be given. */
            sortOrder?: _UpdateUpdatePropertiesSortOrder | undefined;
            viewType?: _UpdateUpdatePropertiesViewType | undefined;
            /**
             * Sets the arrangement of the folder pane, message list pane, and
             * message display pane. Note that setting this applies it to all mail
             * tabs.
             */
            layout?: _UpdateUpdatePropertiesLayout | undefined;
            /** Shows or hides the folder pane. */
            folderPaneVisible?: boolean | undefined;
            /** Shows or hides the message display pane. */
            messagePaneVisible?: boolean | undefined;
        }

        export interface _SetQuickFilterProperties {
            /** Shows or hides the Quick Filter bar. */
            show?: boolean | undefined;
            /** Shows only unread messages. */
            unread?: boolean | undefined;
            /** Shows only flagged messages. */
            flagged?: boolean | undefined;
            /** Shows only messages from people in the address book. */
            contact?: boolean | undefined;
            /** Shows only messages with tags on them. */
            tags?: boolean | messages.TagsDetail | undefined;
            /** Shows only messages with attachments. */
            attachment?: boolean | undefined;
            /** Shows only messages matching the supplied text. */
            text?: QuickFilterTextDetail | undefined;
        }

        /* mailTabs functions */
        /**
         * Gets all mail tabs that have the specified properties, or all mail
         * tabs if no properties are specified.
         */
        export function query(queryInfo: _QueryQueryInfo): Promise<MailTab[]>;

        /**
         * Get the properties of a mail tab.
         *
         * @param tabId ID of the requested mail tab. Throws if the requested tab
         * is not a mail tab.
         */
        export function get(tabId: number): Promise<MailTab>;

        /**
         * Get the properties of the active mail tab, if the active tab is a mail
         * tab. Returns undefined otherwise.
         */
        export function getCurrent(): Promise<MailTab>;

        /**
         * Modifies the properties of a mail tab. Properties that are not
         * specified in `updateProperties` are not modified.
         *
         * @param tabId Defaults to the active tab of the current window.
         */
        export function update(tabId: number, updateProperties: _UpdateUpdateProperties): Promise<any>;
        /**
         * Modifies the properties of a mail tab. Properties that are not
         * specified in `updateProperties` are not modified.
         */
        export function update(updateProperties: _UpdateUpdateProperties): Promise<any>;

        /**
         * Lists the selected messages in the current folder.
         *
         * @param [tabId] Defaults to the active tab of the current window.
         */
        export function getSelectedMessages(tabId?: number): Promise<messages.MessageList>;

        /**
         * Selects none, one or multiple messages.
         *
         * @param tabId Defaults to the active tab of the current window.
         *
         * @param messageIds The IDs of the messages, which should be selected.
         * The mailTab will switch to the folder of the selected messages. Throws
         * if they belong to different folders. Array can be empty to deselect
         * any currently selected message.
         */
        export function setSelectedMessages(tabId: number, messageIds: number[]): Promise<any>;
        /**
         * Selects none, one or multiple messages.
         *
         * @param messageIds The IDs of the messages, which should be selected.
         * The mailTab will switch to the folder of the selected messages. Throws
         * if they belong to different folders. Array can be empty to deselect
         * any currently selected message.
         */
        export function setSelectedMessages(messageIds: number[]): Promise<any>;

        /**
         * Sets the Quick Filter user interface based on the options specified.
         *
         * @param tabId Defaults to the active tab of the current window.
         */
        export function setQuickFilter(
            tabId: number,
            properties: _SetQuickFilterProperties,
        ): Promise<any>; /** Sets the Quick Filter user interface based on the options specified. */
        export function setQuickFilter(properties: _SetQuickFilterProperties): Promise<any>;

        /* mailTabs events */
        /** Fired when the displayed folder changes in any mail tab. */
        export const onDisplayedFolderChanged: WebExtEvent<
            (tab: tabs.Tab, displayedFolder: folders.MailFolder) => void
        >;

        /** Fired when the selected messages change in any mail tab. */
        export const onSelectedMessagesChanged: WebExtEvent<
            (tab: tabs.Tab, selectedMessages: messages.MessageList) => void
        >;
    }

    /**
     * The menus API allows to add items to Thunderbirds menus. You can
     * choose what types of objects your context menu additions apply to,
     * such as images, hyperlinks, and pages.
     *
     * Permissions: `menus`, `menus`
     *
     * @see https://webextension-api.thunderbird.net/en/latest/menus.html
     */
    export namespace menus {
        /* menus types */
        /**
         * The different contexts a menu can appear in. Specifying `all` is
         * equivalent to the combination of all other contexts excluding `tab`
         * and `tools_menu`. More information about each context can be found in
         * the Supported UI Elements article on developer.thunderbird.net.
         */
        export type ContextType =
            | "all"
            | "page"
            | "frame"
            | "selection"
            | "link"
            | "editable"
            | "password"
            | "image"
            | "video"
            | "audio"
            | "browser_action"
            | "compose_action"
            | "message_display_action"
            | "tab"
            | "message_list"
            | "folder_pane"
            | "compose_attachments"
            | "message_attachments"
            | "all_message_attachments"
            | "tools_menu";

        /** The type of menu item. */
        export type ItemType = "normal" | "checkbox" | "radio" | "separator";

        /**
         * Information sent when a context menu is being shown. Some properties
         * are only included if the extension has host permission for the given
         * context, for example :permission:`activeTab` for content tabs,
         * :permission:`compose` for compose tabs and :permission:`messagesRead`
         * for message display tabs.
         */
        export interface OnShowData {
            /** A list of IDs of the menu items that were shown. */
            menuIds: Array<number | string>;
            /** A list of all contexts that apply to the menu. */
            contexts: ContextType[];
            /**
             * A flag indicating whether the element is editable (text input,
             * textarea, etc.).
             */
            editable: boolean;
            /**
             * One of `image`, `video`, or `audio` if the context menu was activated
             * on one of these types of elements.
             */
            mediaType?: string | undefined;
            /**
             * The type of view where the menu is shown. May be unset if the menu is
             * not associated with a view.
             */
            viewType?: extension.ViewType | undefined;
            /**
             * If the element is a link, the text of that link. **Note:** Host
             * permission is required.
             */
            linkText?: string | undefined;
            /**
             * If the element is a link, the URL it points to. **Note:** Host
             * permission is required.
             */
            linkUrl?: string | undefined;
            /**
             * Will be present for elements with a _src_ URL. **Note:** Host
             * permission is required.
             */
            srcUrl?: string | undefined;
            /**
             * The URL of the page where the menu item was clicked. This property is
             * not set if the click occurred in a context where there is no current
             * page, such as in a launcher context menu. **Note:** Host permission is
             * required.
             */
            pageUrl?: string | undefined;
            /**
             * The URL of the frame of the element where the context menu was
             * clicked, if it was in a frame. **Note:** Host permission is required.
             */
            frameUrl?: string | undefined;
            /**
             * The text for the context selection, if any. **Note:** Host permission
             * is required.
             */
            selectionText?: string | undefined;
            /**
             * An identifier of the clicked content element, if any. Use {@link menus.getTargetElement}
             * in the page to find the corresponding element.
             */
            targetElementId?: number | undefined;
            /** An identifier of the clicked Thunderbird UI element, if any. */
            fieldId?: _OnShowDataFieldId | undefined;
            /**
             * The selected messages, if the context menu was opened in the message
             * list. The <permission>messagesRead</permission> permission is
             * required.
             */
            selectedMessages?: messages.MessageList | undefined;
            /**
             * The displayed folder, if the context menu was opened in the message
             * list. The <permission>accountsRead</permission> permission is
             * required.
             */
            displayedFolder?: folders.MailFolder | undefined;
            /**
             * The selected folder, if the context menu was opened in the folder
             * pane. The <permission>accountsRead</permission> permission is
             * required.
             */
            selectedFolder?: folders.MailFolder | undefined;
            /**
             * The selected account, if the context menu was opened on an account
             * entry in the folder pane. The <permission>accountsRead</permission>
             * permission is required.
             */
            selectedAccount?: accounts.MailAccount | undefined;
            /**
             * The selected attachments. The <permission>compose</permission>
             * permission is required to return attachments of a message being
             * composed. The <permission>messagesRead</permission> permission is
             * required to return attachments of displayed messages.
             */
            attachments?: Array<compose.ComposeAttachment | messages.MessageAttachment> | undefined;
        }

        /** Information sent when a context menu item is clicked. */
        export interface OnClickData {
            /** The ID of the menu item that was clicked. */
            menuItemId: number | string;
            /** The parent ID, if any, for the item clicked. */
            parentMenuItemId?: number | string | undefined;
            /**
             * A flag indicating whether the element is editable (text input,
             * textarea, etc.).
             */
            editable: boolean;
            /**
             * One of `image`, `video`, or `audio` if the context menu was activated
             * on one of these types of elements.
             */
            mediaType?: string | undefined;
            /**
             * The type of view where the menu is clicked. May be unset if the menu
             * is not associated with a view.
             */
            viewType?: extension.ViewType | undefined;
            /** If the element is a link, the text of that link. */
            linkText?: string | undefined;
            /** If the element is a link, the URL it points to. */
            linkUrl?: string | undefined;
            /** Will be present for elements with a _src_ URL. */
            srcUrl?: string | undefined;
            /**
             * The URL of the page where the menu item was clicked. This property is
             * not set if the click occurred in a context where there is no current
             * page, such as in a launcher context menu.
             */
            pageUrl?: string | undefined;
            /** The id of the frame of the element where the context menu was clicked. */
            frameId?: number | undefined;
            /**
             * The URL of the frame of the element where the context menu was
             * clicked, if it was in a frame.
             */
            frameUrl?: string | undefined;
            /** The text for the context selection, if any. */
            selectionText?: string | undefined;
            /**
             * A flag indicating the state of a checkbox or radio item before it was
             * clicked.
             */
            wasChecked?: boolean | undefined;
            /**
             * A flag indicating the state of a checkbox or radio item after it is
             * clicked.
             */
            checked?: boolean | undefined;
            /**
             * An array of keyboard modifiers that were held while the menu item was
             * clicked.
             */
            modifiers: _OnClickDataModifiers[];
            /** An integer value of button by which menu item was clicked. */
            button?: number | undefined;
            /**
             * An identifier of the clicked content element, if any. Use {@link menus.getTargetElement}
             * in the page to find the corresponding element.
             */
            targetElementId?: number | undefined;
            /** An identifier of the clicked Thunderbird UI element, if any. */
            fieldId?: _OnClickDataFieldId | undefined;
            /**
             * The selected messages, if the context menu was opened in the message
             * list. The <permission>messagesRead</permission> permission is
             * required.
             */
            selectedMessages?: messages.MessageList | undefined;
            /**
             * The displayed folder, if the context menu was opened in the message
             * list. The <permission>accountsRead</permission> permission is
             * required.
             */
            displayedFolder?: folders.MailFolder | undefined;
            /**
             * The selected folder, if the context menu was opened in the folder
             * pane. The <permission>accountsRead</permission> permission is
             * required.
             */
            selectedFolder?: folders.MailFolder | undefined;
            /**
             * The selected account, if the context menu was opened on an account
             * entry in the folder pane. The <permission>accountsRead</permission>
             * permission is required.
             */
            selectedAccount?: accounts.MailAccount | undefined;
            /**
             * The selected attachments. The <permission>compose</permission>
             * permission is required to return attachments of a message being
             * composed. The <permission>messagesRead</permission> permission is
             * required to return attachments of displayed messages.
             */
            attachments?: Array<compose.ComposeAttachment | messages.MessageAttachment> | undefined;
        }

        /** An identifier of the clicked Thunderbird UI element, if any. */
        export type _OnShowDataFieldId =
            | "composeSubject"
            | "composeTo"
            | "composeCc"
            | "composeBcc"
            | "composeReplyTo"
            | "composeNewsgroupTo";

        export type _OnClickDataModifiers = "Shift" | "Alt" | "Command" | "Ctrl" | "MacCtrl";

        /** An identifier of the clicked Thunderbird UI element, if any. */
        export type _OnClickDataFieldId =
            | "composeSubject"
            | "composeTo"
            | "composeCc"
            | "composeBcc"
            | "composeReplyTo"
            | "composeNewsgroupTo";

        export interface _CreateCreateProperties {
            /** The type of menu item. Defaults to `normal` if not specified. */
            type?: ItemType | undefined;
            /**
             * The unique ID to assign to this item. Mandatory for event pages.
             * Cannot be the same as another ID for this extension.
             */
            id?: string | undefined;
            /**
             * Custom icons to display next to the menu item. Custom icons can only
             * be set for items appearing in submenus.
             */
            icons?: _manifest.IconPath | undefined;
            /**
             * The text to be displayed in the item; this is _required_ unless `type`
             * is `separator`. When the context is `selection`, you can use `%s`
             * within the string to show the selected text. For example, if this
             * parameter's value is `Translate '%s' to Latin` and the user selects
             * the word `cool`, the context menu item for the selection is
             * `Translate 'cool' to Latin`. To specify an access key for the new menu
             * entry, include a `&` before the desired letter in the title. For
             * example `&Help`.
             */
            title?: string | undefined;
            /**
             * The initial state of a checkbox or radio item: `true` for selected and
             * `false` for unselected. Only one radio item can be selected at a time
             * in a given group of radio items.
             */
            checked?: boolean | undefined;
            /**
             * List of contexts this menu item will appear in. Defaults to `['page']`
             * if not specified.
             */
            contexts?: ContextType[] | undefined;
            /**
             * List of view types where the menu item will be shown. Defaults to any
             * view, including those without a viewType.
             */
            viewTypes?: extension.ViewType[] | undefined;
            /** Whether the item is visible in the menu. */
            visible?: boolean | undefined;
            /**
             * A function that will be called back when the menu item is clicked.
             * Event pages cannot use this.
             *
             * @param info Information about the item clicked and the context where
             * the click happened.
             *
             * @param tab The details of the tab where the click took place.
             */
            onclick?: (info: OnClickData, tab: tabs.Tab) => void | undefined;
            /**
             * The ID of a parent menu item; this makes the item a child of a
             * previously added item.
             */
            parentId?: number | string | undefined;
            /**
             * Lets you restrict the item to apply only to documents whose URL
             * matches one of the given patterns. (This applies to frames as well.)
             * For details on the format of a pattern, see Match Patterns .
             */
            documentUrlPatterns?: string[] | undefined;
            /**
             * Similar to documentUrlPatterns, but lets you filter based on the src
             * attribute of img/audio/video tags and the href of anchor tags.
             */
            targetUrlPatterns?: string[] | undefined;
            /**
             * Whether this context menu item is enabled or disabled. Defaults to
             * true.
             */
            enabled?: boolean | undefined;
            /**
             * Specifies a command to issue for the context click. Currently supports
             * internal commands `_execute_browser_action`, `_execute_compose_action`
             * and `_execute_message_display_action`.
             */
            command?: string | undefined;
        }

        /**
         * The properties to update. Accepts the same values as the create
         * function.
         */
        export interface _UpdateUpdateProperties {
            type?: ItemType | undefined;
            icons?: _manifest.IconPath | undefined;
            title?: string | undefined;
            checked?: boolean | undefined;
            contexts?: ContextType[] | undefined;
            viewTypes?: extension.ViewType[] | undefined;
            /** Whether the item is visible in the menu. */
            visible?: boolean | undefined;
            /**
             * @param tab The details of the tab where the click took place.
             * **Note:** this parameter only present for extensions.
             */
            onclick?: (info: OnClickData, tab: tabs.Tab) => void | undefined;
            /**
             * **Note:** You cannot change an item to be a child of one of its own
             * descendants.
             */
            parentId?: number | string | undefined;
            documentUrlPatterns?: string[] | undefined;
            targetUrlPatterns?: string[] | undefined;
            enabled?: boolean | undefined;
        }

        export interface _OverrideContextContextOptions {
            /** Whether to also include default menu items in the menu. */
            showDefaults?: boolean | undefined;
            /**
             * ContextType to override, to allow menu items from other extensions in
             * the menu. Currently only `tab` is supported.
             * `contextOptions.showDefaults` cannot be used with this option.
             */
            context?: "tab" | undefined;
            /**
             * Required when context is `tab`. Requires the
             * <permission>tabs</permission> permission.
             */
            tabId?: number | undefined;
        }

        /* menus properties */
        /**
         * The maximum number of top level extension items that can be added to
         * an extension action context menu. Any items beyond this limit will be
         * ignored.
         */
        export const ACTION_MENU_TOP_LEVEL_LIMIT: number;

        /* menus functions */
        /**
         * Creates a new context menu item. Note that if an error occurs during
         * creation, you may not find out until the creation callback fires (the
         * details will be in runtime.lastError ).
         *
         * @param [callback] Called when the item has been created in the
         * browser. If there were any problems creating the item, details will be
         * available in runtime.lastError .
         *
         * @returns The ID of the newly created item.
         */
        export function create(createProperties: _CreateCreateProperties, callback?: () => void): number | string;

        /**
         * Updates a previously created context menu item.
         *
         * @param id The ID of the item to update.
         *
         * @param updateProperties The properties to update. Accepts the same
         * values as the create function.
         */
        export function update(id: number | string, updateProperties: _UpdateUpdateProperties): Promise<void>;

        /**
         * Removes a context menu item.
         *
         * @param menuItemId The ID of the context menu item to remove.
         */
        export function remove(menuItemId: number | string): Promise<void>;

        /** Removes all context menu items added by this extension. */
        export function removeAll(): Promise<void>;

        /**
         * Show the matching menu items from this extension instead of the
         * default menu. This should be called during a contextmenu event
         * handler, and only applies to the menu that opens after this event.
         */
        export function overrideContext(contextOptions: _OverrideContextContextOptions): void;

        /**
         * Updates the extension items in the shown menu, including changes that
         * have been made since the menu was shown. Has no effect if the menu is
         * hidden. Rebuilding a shown menu is an expensive operation, only invoke
         * this method when necessary.
         */
        export function refresh(): Promise<any>;

        /**
         * Retrieve the element that was associated with a recent contextmenu
         * event.
         *
         * @param targetElementId The identifier of the clicked element,
         * available as `info.targetElementId` in the {@link menus.onShown} and
         * {@link menus.onClicked} events.
         */
        export function getTargetElement(targetElementId: number): Element | void;

        /* menus events */
        /**
         * Fired when a context menu item is clicked. This is a user input event
         * handler. For asynchronous listeners some restrictions apply.
         *
         * @param info Information about the item clicked and the context where
         * the click happened.
         *
         * @param [tab] The details of the tab where the click took place. If the
         * click did not take place in a tab, this parameter will be missing.
         */
        export const onClicked: WebExtEvent<(info: OnClickData, tab?: tabs.Tab) => void>;

        /**
         * Fired when a menu is shown. The extension can add, modify or remove
         * menu items and call {@link menus.refresh} to update the menu.
         *
         * @param info Information about the context of the menu action and the
         * created menu items.
         *
         * @param tab The details of the tab where the menu was opened.
         */
        export const onShown: WebExtEvent<(info: OnShowData, tab: tabs.Tab) => void>;

        /**
         * Fired when a menu is hidden. This event is only fired if onShown has
         * fired before.
         */
        export const onHidden: WebExtEvent<() => void>;
    }

    /**
     * Permissions: `messagesRead`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/messageDisplay.html
     */
    export namespace messageDisplay {
        /**
         * Where to open the message. If not specified, the users preference is
         * honoured. Ignored for external messages, which are always opened in a
         * new window.
         */
        export type _OpenOpenPropertiesLocation = "tab" | "window";

        /**
         * Settings for opening the message. Exactly one of messageId or
         * headerMessageId must be specified.
         */
        export interface _OpenOpenProperties {
            /**
             * The id of a message to be opened. Will throw an _ExtensionError_, if
             * the provided `messageId` is unknown or invalid.
             */
            messageId?: number | undefined;
            /**
             * The headerMessageId of a message to be opened. Will throw an
             * _ExtensionError_, if the provided `headerMessageId` is unknown or
             * invalid. Not supported for external messages.
             */
            headerMessageId?: string | undefined;
            /**
             * Where to open the message. If not specified, the users preference is
             * honoured. Ignored for external messages, which are always opened in a
             * new window.
             */
            location?: _OpenOpenPropertiesLocation | undefined;
            /**
             * Whether the new tab should become the active tab in the window. Only
             * applicable to messages opened in tabs.
             */
            active?: boolean | undefined;
            /**
             * The id of the window, where the new tab should be created. Defaults to
             * the current window. Only applicable to messages opened in tabs.
             */
            windowId?: number | undefined;
        }

        /* messageDisplay functions */
        /**
         * Gets the currently displayed message in the specified tab (even if the
         * tab itself is currently not visible). It returns `null` if no messages
         * are displayed, or if multiple messages are displayed.
         */
        export function getDisplayedMessage(tabId: number): Promise<messages.MessageHeader | null>;

        /**
         * Gets an array of the currently displayed messages in the specified tab
         * (even if the tab itself is currently not visible). The array is empty
         * if no messages are displayed.
         */
        export function getDisplayedMessages(tabId: number): Promise<messages.MessageHeader[]>;

        /**
         * Opens a message in a new tab or in a new window.
         *
         * @param openProperties Settings for opening the message. Exactly one of
         * messageId or headerMessageId must be specified.
         */
        export function open(openProperties: _OpenOpenProperties): Promise<tabs.Tab>;

        /* messageDisplay events */
        /**
         * Fired when a message is displayed, whether in a 3-pane tab, a message
         * tab, or a message window.
         */
        export const onMessageDisplayed: WebExtEvent<(tab: tabs.Tab, message: messages.MessageHeader) => void>;

        /**
         * Fired when either a single message is displayed or when multiple
         * messages are displayed, whether in a 3-pane tab, a message tab, or a
         * message window.
         */
        export const onMessagesDisplayed: WebExtEvent<(tab: tabs.Tab, messages: messages.MessageHeader[]) => void>;
    }

    /**
     * Use a messageDisplayAction to put a button in the message display
     * toolbar. In addition to its icon, a messageDisplayAction button can
     * also have a tooltip, a badge, and a popup.
     *
     * Manifest keys: `message_display_action`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/messageDisplayAction.html
     */
    export namespace messageDisplayAction {
        /* messageDisplayAction types */
        /**
         * An array of four integers in the range [0,255] that make up the RGBA
         * color. For example, opaque red is `[255, 0, 0, 255]`.
         */
        export type ColorArray = [number, number, number, number];

        /**
         * Pixel data for an image. Must be an {@link ImageData} object (for
         * example, from a {@link Canvas} element).
         */
        export type ImageDataType = ImageData;

        /**
         * A _dictionary object_ to specify multiple {@link ImageData} objects in
         * different sizes, so the icon does not have to be scaled for a device
         * with a different pixel density. Each entry is a _name-value_ pair with
         * _value_ being an {@link ImageData} object, and _name_ its size.
         * Example:
         * [ImageDataDictionary.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/ImageDataDictionary.json)See
         * the MDN documentation about choosing icon sizes for more information
         * on this.
         */
        export interface ImageDataDictionary {
            [key: number]: ImageDataType;
        }

        /** Information sent when a messageDisplayAction button is clicked. */
        export interface OnClickData {
            /**
             * An array of keyboard modifiers that were held while the menu item was
             * clicked.
             */
            modifiers: _OnClickDataModifiers[];
            /** An integer value of button by which menu item was clicked. */
            button?: number | undefined;
        }

        export type _OnClickDataModifiers = "Shift" | "Alt" | "Command" | "Ctrl" | "MacCtrl";

        export interface _SetTitleDetails {
            /**
             * A string the messageDisplayAction button should display as its label
             * and when moused over. Cleared by setting it to `null` or an empty
             * string (title defined the manifest will be used).
             */
            title: string | null;
            /** Sets the title only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetTitleDetails {
            /**
             * Specifies for which tab the title should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetLabelDetails {
            /**
             * A string the messageDisplayAction button should use as its label,
             * overriding the defined title. Can be set to an empty string to not
             * display any label at all. If the containing toolbar is configured to
             * display text only, its title will be used. Cleared by setting it to
             * `null`.
             */
            label: string | null;
            /** Sets the label only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetLabelDetails {
            /**
             * Specifies for which tab the label should be retrieved. If no tab is
             * specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetIconDetails {
            /** The image data for one or more icons for the composeAction button. */
            imageData?: ImageDataType | ImageDataDictionary | undefined;
            /** The paths to one or more icons for the messageDisplayAction button. */
            path?: _manifest.IconPath | undefined;
            /** Sets the icon only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetPopupDetails {
            /**
             * The html file to show in a popup. Can be set to an empty string to not
             * open a popup. Cleared by setting it to `null` (action will use the
             * popup value defined in the manifest).
             */
            popup: string | null;
            /** Sets the popup only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetPopupDetails {
            /**
             * Specifies for which tab the popup document should be retrieved. If no
             * tab is specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeTextDetails {
            /**
             * Any number of characters can be passed, but only about four can fit in
             * the space. Cleared by setting it to `null` or an empty string.
             */
            text: string | null;
            /** Sets the badge text only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeTextDetails {
            /**
             * Specifies for which tab the badge text should be retrieved. If no tab
             * is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeBackgroundColorDetails {
            /**
             * The color to use as background in the badge. Cleared by setting it to
             * `null` or an empty string.
             */
            color: string | ColorArray | null;
            /** Sets the background color for the badge only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeBackgroundColorDetails {
            /**
             * Specifies for which tab the badge background color should be
             * retrieved. If no tab is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _IsEnabledDetails {
            /**
             * Specifies for which tab the state should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        /* messageDisplayAction functions */
        /**
         * Sets the title of the messageDisplayAction button. Is used as tooltip
         * and as the label.
         */
        export function setTitle(details: _SetTitleDetails): Promise<void>;

        /** Gets the title of the messageDisplayAction button. */
        export function getTitle(details: _GetTitleDetails): Promise<string>;

        /**
         * Sets the label of the messageDisplayAction button. Can be used to set
         * different values for the tooltip (defined by the title) and the label.
         * Additionally, the label can be set to an empty string, not showing any
         * label at all.
         */
        export function setLabel(details: _SetLabelDetails): Promise<void>;

        /** Gets the label of the messageDisplayAction button. */
        export function getLabel(details: _GetLabelDetails): Promise<string>;

        /**
         * Sets the icon for the messageDisplayAction button. Either the `path`
         * or the `imageData` property must be specified.
         */
        export function setIcon(details: _SetIconDetails): Promise<void>;

        /**
         * Sets the html document to be opened as a popup when the user clicks on
         * the messageDisplayAction button.
         */
        export function setPopup(details: _SetPopupDetails): Promise<void>;

        /**
         * Gets the html document set as the popup for this messageDisplayAction
         * button.
         */
        export function getPopup(details: _GetPopupDetails): Promise<string>;

        /**
         * Sets the badge text for the messageDisplayAction button. The badge is
         * displayed on top of the icon.
         */
        export function setBadgeText(details: _SetBadgeTextDetails): Promise<void>;

        /** Gets the badge text of the messageDisplayAction button. */
        export function getBadgeText(details: _GetBadgeTextDetails): Promise<string>;

        /** Sets the background color for the badge. */
        export function setBadgeBackgroundColor(details: _SetBadgeBackgroundColorDetails): Promise<void>;

        /** Gets the badge background color of the messageDisplayAction button. */
        export function getBadgeBackgroundColor(details: _GetBadgeBackgroundColorDetails): Promise<ColorArray>;

        /**
         * Enables the messageDisplayAction button for a tab. By default, a
         * messageDisplayAction button is enabled.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * messageDisplayAction button.
         */
        export function enable(tabId?: number): Promise<void>;

        /**
         * Disables the messageDisplayAction button for a tab.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * messageDisplayAction button.
         */
        export function disable(tabId?: number): Promise<void>;

        /** Checks whether the messageDisplayAction button is enabled. */
        export function isEnabled(details: _IsEnabledDetails): Promise<boolean>;

        /** Opens the action's popup window in the active window. */
        export function openPopup(): Promise<any>;

        /* messageDisplayAction events */
        /**
         * Fired when a messageDisplayAction button is clicked. This event will
         * not fire if the messageDisplayAction has a popup. This is a user input
         * event handler. For asynchronous listeners some restrictions apply.
         */
        export const onClicked: WebExtEvent<(tab: tabs.Tab, info?: OnClickData) => void>;
    }

    /**
     * Permissions: `messagesRead`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/messages.html
     */
    export namespace messages {
        /* messages types */
        /** Basic information about a message. */
        export interface MessageHeader {
            author: string;
            /** The Bcc recipients. Not populated for news/nntp messages. */
            bccList: string[];
            /** The Cc recipients. Not populated for news/nntp messages. */
            ccList: string[];
            date: extensionTypes.Date;
            /**
             * Whether this message is a real message or an external message (opened
             * from a file or from an attachment).
             */
            external: boolean;
            /** Whether this message is flagged (a.k.a. starred). */
            flagged: boolean;
            /**
             * The <permission>accountsRead</permission> permission is required for
             * this property to be included. Not available for external or attached
             * messages.
             */
            folder?: folders.MailFolder | undefined;
            /** The message-id header of the message. */
            headerMessageId: string;
            /**
             * Some account types (for example `pop3`) allow to download only the
             * headers of the message, but not its body. The body of such messages
             * will not be available.
             */
            headersOnly: boolean;
            id: number;
            /**
             * Whether the message has been marked as junk. Always `false` for
             * news/nntp messages and external messages.
             */
            junk: boolean;
            /**
             * The junk score associated with the message. Always `0` for news/nntp
             * messages and external messages.
             */
            junkScore: number;
            /**
             * Whether the message has been marked as read. Not available for
             * external or attached messages.
             */
            read?: boolean | undefined;
            /** Whether the message has been received recently and is marked as new. */
            new: boolean;
            /** The To recipients. Not populated for news/nntp messages. */
            recipients: string[];
            /** The total size of the message in bytes. */
            size: number;
            /** The subject of the message. */
            subject: string;
            /**
             * Tags associated with this message. For a list of available tags, call
             * the listTags method.
             */
            tags: string[];
        }

        /**
         * See
         * [how-to/messageLists](https://webextension-api.thunderbird.net/en/stable/how-to/messageLists.html)
         * for more information.
         */
        export interface MessageList {
            id?: string | undefined;
            messages: MessageHeader[];
        }

        /** Represents an email message "part", which could be the whole message */
        export interface MessagePart {
            /** The content of the part */
            body?: string | undefined;
            contentType?: string | undefined;
            /**
             * A _dictionary object_ of part headers as _key-value_ pairs, with the
             * header name as _key_, and an array of headers as _value_
             */
            headers?: { [key: string]: string[] } | undefined;
            /** Name of the part, if it is a file */
            name?: string | undefined;
            /**
             * The identifier of this part, used in {@link messages.getAttachmentFile}
             */
            partName?: string | undefined;
            /** Any sub-parts of this part */
            parts?: MessagePart[] | undefined;
            /**
             * The size of this part. The size of _message/\*_ parts is not the
             * actual message size (on disc), but the total size of its decoded body
             * parts, excluding headers.
             */
            size?: number | undefined;
        }

        /**
         * Message properties used in {@link messages.update} and {@link messages.import}.
         *  They can also be monitored by {@link messages.onUpdated}.
         */
        export interface MessageProperties {
            /** Whether the message is flagged (a.k.a starred). */
            flagged?: boolean | undefined;
            /**
             * Whether the message is marked as junk. Only supported in {@link messages.update}
             */
            junk?: boolean | undefined;
            /**
             * Whether the message is marked as new. Only supported in {@link messages.import}
             */
            new?: boolean | undefined;
            /** Whether the message is marked as read. */
            read?: boolean | undefined;
            /**
             * Tags associated with this message. For a list of available tags, call
             * the listTags method.
             */
            tags?: string[] | undefined;
        }

        export interface MessageTag {
            /** Unique tag identifier. */
            key: string;
            /** Human-readable tag name. */
            tag: string;
            /** Tag color. */
            color: string;
            /** Custom sort string (usually empty). */
            ordinal: string;
        }

        /**
         * Used for filtering messages by tag in various methods. Note that
         * functions using this type may have a partial implementation.
         */
        export interface TagsDetail {
            /**
             * A _dictionary object_ with one or more filter condition as _key-value_
             * pairs, the _key_ being the tag to filter on, and the _value_ being a
             * boolean expression, requesting whether a message must include (`true`)
             * or exclude (`false`) the tag. For a list of available tags, call the
             * {@link messages.listTags} method.
             */
            tags: _TagsDetailTags;
            /** Whether all of the tag filters must apply, or any of them. */
            mode: _TagsDetailMode;
        }

        /** Represents an attachment in a message. */
        export interface MessageAttachment {
            /** The content type of the attachment. */
            contentType: string;
            /**
             * The name, as displayed to the user, of this attachment. This is
             * usually but not always the filename of the attached file.
             */
            name: string;
            /**
             * Identifies the MIME part of the message associated with this
             * attachment.
             */
            partName: string;
            /** The size in bytes of this attachment. */
            size: number;
            /** A MessageHeader, if this attachment is a message. */
            message?: MessageHeader | undefined;
        }

        /**
         * A _dictionary object_ with one or more filter condition as _key-value_
         * pairs, the _key_ being the tag to filter on, and the _value_ being a
         * boolean expression, requesting whether a message must include (`true`)
         * or exclude (`false`) the tag. For a list of available tags, call the
         * {@link messages.listTags} method.
         */
        export interface _TagsDetailTags {
            [key: string]: boolean;
        }

        /** Whether all of the tag filters must apply, or any of them. */
        export type _TagsDetailMode = "all" | "any";

        export interface _QueryQueryInfo {
            /** If specified, returns only messages with or without attachments. */
            attachment?: boolean | undefined;
            /**
             * Returns only messages with this value matching the author. The search
             * value is a single email address, a name or a combination (e.g.:
             * `Name <user@domain.org></user@domain.org>`). The address part of the
             * search value (if provided) must match the author's address completely.
             * The name part of the search value (if provided) must match the
             * author's name partially. All matches are done case-insensitive.
             */
            author?: string | undefined;
            /** Returns only messages with this value in the body of the mail. */
            body?: string | undefined;
            /** Returns only flagged (or unflagged if false) messages. */
            flagged?: boolean | undefined;
            /**
             * Returns only messages from the specified folder. The
             * <permission>accountsRead</permission> permission is required.
             */
            folder?: folders.MailFolder | undefined;
            /** Returns only messages with a date after this value. */
            fromDate?: extensionTypes.Date | undefined;
            /**
             * Returns only messages with the author's address matching any
             * configured identity.
             */
            fromMe?: boolean | undefined;
            /**
             * Returns only messages with this value somewhere in the mail (subject,
             * body or author).
             */
            fullText?: string | undefined;
            /** Returns only messages with a Message-ID header matching this value. */
            headerMessageId?: string | undefined;
            /** Search the folder specified by `queryInfo.folder` recursively. */
            includeSubFolders?: boolean | undefined;
            /**
             * Returns only messages whose recipients match all specified addresses.
             * The search value is a semicolon separated list of email addresses,
             * names or combinations (e.g.:
             * `Name <user@domain.org></user@domain.org>`). For a match, all
             * specified addresses must equal a recipient's address completely and
             * all specified names must match a recipient's name partially. All
             * matches are done case-insensitive.
             */
            recipients?: string | undefined;
            /** Returns only messages with this value matching the subject. */
            subject?: string | undefined;
            /**
             * Returns only messages with the specified tags. For a list of available
             * tags, call the {@link messages.listTags} method.
             */
            tags?: TagsDetail | undefined;
            /** Returns only messages with a date before this value. */
            toDate?: extensionTypes.Date | undefined;
            /**
             * Returns only messages with at least one recipient address matching any
             * configured identity.
             */
            toMe?: boolean | undefined;
            /** Returns only unread (or read if false) messages. */
            unread?: boolean | undefined;
        }

        export { _delete as delete };

        export { _import as import };

        export interface _UpdateTagUpdateProperties {
            /** Human-readable tag name. */
            tag?: string | undefined;
            /** Tag color in hex format (i.e.: #000080 for navy blue). */
            color?: string | undefined;
        }

        /* messages functions */
        /** Gets all messages in a folder. */
        export function list(folder: folders.MailFolder): Promise<MessageList>;

        /**
         * Returns the next chunk of messages in a list. See
         * [how-to/messageLists](https://webextension-api.thunderbird.net/en/stable/how-to/messageLists.html)
         * for more information.
         */
        export function continueList(messageListId: string): Promise<MessageList>;

        /** Returns a specified message. */
        export function get(messageId: number): Promise<MessageHeader>;

        /**
         * Returns a specified message, including all headers and MIME parts.
         * Throws if the message could not be read, for example due to network
         * issues.
         */
        export function getFull(messageId: number): Promise<MessagePart>;

        /**
         * Returns the unmodified source of a message as a binary string , which
         * is a simple series of 8-bit values. Throws if the message could not be
         * read, for example due to network issues. If the message contains
         * non-ASCII characters, the body parts in the binary string cannot be
         * read directly and must be decoded according to their character sets.
         * Use {@link messages.getFull} to get the correctly decoded parts.
         * Manually decoding the raw message is probably too error-prone,
         * especially if the message contains MIME parts with different character
         * set encodings or attachments.
         *
         * To get a readable version of the raw message as it appears in
         * Thunderbird's message source view, it may be sufficient to decode the
         * message according to the character set specified in its main
         * content-type header (example: `text/html; charset=UTF-8`) using the
         * following function (see MDN for supported input encodings ):
         * [decodeBinaryString.js](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/messages/decodeBinaryString.js)
         */
        export function getRaw(messageId: number): Promise<string>;

        /** Lists the attachments of a message. */
        export function listAttachments(messageId: number): Promise<MessageAttachment[]>;

        /**
         * Gets the content of a {@link messages.MessageAttachment} as a {@link File}
         * object.
         */
        export function getAttachmentFile(messageId: number, partName: string): Promise<File>;

        /**
         * Gets all messages that have the specified properties, or all messages
         * if no properties are specified.
         */
        export function query(queryInfo: _QueryQueryInfo): Promise<MessageList>;

        /**
         * Marks or unmarks a message as junk, read, flagged, or tagged. Updating
         * external messages will throw an _ExtensionError_.
         */
        export function update(messageId: number, newProperties: MessageProperties): Promise<any>;

        /**
         * Moves messages to a specified folder. If the messages cannot be
         * removed from the source folder, they will be copied instead of moved.
         * Moving external messages will throw an _ExtensionError_.
         *
         * @param messageIds The IDs of the messages to move.
         *
         * @param destination The folder to move the messages to.
         */
        export function move(messageIds: number[], destination: folders.MailFolder): Promise<any>;

        /**
         * Copies messages to a specified folder.
         *
         * @param messageIds The IDs of the messages to copy.
         *
         * @param destination The folder to copy the messages to.
         */
        export function copy(messageIds: number[], destination: folders.MailFolder): Promise<any>;

        /**
         * Deletes messages permanently, or moves them to the trash folder
         * (honoring the account's deletion behavior settings). Deleting external
         * messages will throw an _ExtensionError_. The `skipTrash` parameter
         * allows immediate permanent deletion, bypassing the trash folder.
         * **Note**: Consider using {@link messages.move} to manually move
         * messages to the account's trash folder, instead of requesting the
         * overly powerful permission to actually delete messages. The account's
         * trash folder can be extracted as follows:
         * [getTrash.js](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/messages/getTrash.js)
         *
         * @param messageIds The IDs of the messages to delete.
         *
         * @param [skipTrash] If true, the message will be deleted permanently,
         * regardless of the account's deletion behavior settings.
         */
        function _delete(messageIds: number[], skipTrash?: boolean): Promise<any>;

        /**
         * Imports a message into a local Thunderbird folder. To import a message
         * into an IMAP folder, add it to a local folder first and then move it
         * to the IMAP folder.
         *
         * @param destination The folder to import the messages into.
         */
        function _import(
            file: File,
            destination: folders.MailFolder,
            properties?: MessageProperties,
        ): Promise<MessageHeader>;

        /**
         * Archives messages using the current settings. Archiving external
         * messages will throw an _ExtensionError_.
         *
         * @param messageIds The IDs of the messages to archive.
         */
        export function archive(messageIds: number[]): Promise<any>;

        /**
         * Returns a list of tags that can be set on messages, and their
         * human-friendly name, colour, and sort order.
         */
        export function listTags(): Promise<MessageTag[]>;

        /**
         * Creates a new message tag. Tagging a message will store the tag's key
         * in the user's message. Throws if the specified tag key is used
         * already.
         *
         * @param key Unique tag identifier (must use only alphanumeric
         * characters).
         *
         * @param tag Human-readable tag name.
         *
         * @param color Tag color in hex format (i.e.: #000080 for navy blue)
         */
        export function createTag(key: string, tag: string, color: string): Promise<any>;

        /**
         * Updates a message tag.
         *
         * @param key Unique tag identifier.
         */
        export function updateTag(key: string, updateProperties: _UpdateTagUpdateProperties): Promise<any>;

        /**
         * Deletes a message tag, removing it from the list of known tags. Its
         * key will not be removed from tagged messages, but they will appear
         * untagged. Recreating a deleted tag, will make all former tagged
         * messages appear tagged again.
         */
        export function deleteTag(key: string): Promise<any>;

        /* messages events */
        /** Fired when one or more properties of a message have been updated. */
        export const onUpdated: WebExtEvent<(message: MessageHeader, changedProperties: MessageProperties) => void>;

        /** Fired when messages have been moved. */
        export const onMoved: WebExtEvent<(originalMessages: MessageList, movedMessages: MessageList) => void>;

        /** Fired when messages have been copied. */
        export const onCopied: WebExtEvent<(originalMessages: MessageList, copiedMessages: MessageList) => void>;

        /** Fired when messages have been permanently deleted. */
        export const onDeleted: WebExtEvent<(messages: MessageList) => void>;

        /**
         * Fired when a new message is received, and has been through junk
         * classification and message filters.
         */
        export const onNewMailReceived: WebExtEvent<(folder: folders.MailFolder, messages: MessageList) => void>;
    }

    /**
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/spacesToolbar.html
     */
    export namespace spacesToolbar {
        /* spacesToolbar types */
        export interface ButtonProperties {
            /**
             * Sets the background color of the badge. Can be specified as an array
             * of four integers in the range [0,255] that make up the RGBA color of
             * the badge. For example, opaque red is `[255, 0, 0, 255]`. Can also be
             * a string with an HTML color name (`red`) or a HEX color value
             * (`#FF0000` or `#F00`). Reset when set to an empty string.
             */
            badgeBackgroundColor?: string | ColorArray | undefined;
            /**
             * Sets the badge text for the spaces toolbar button. The badge is
             * displayed on top of the icon. Any number of characters can be set, but
             * only about four can fit in the space. Removed when set to an empty
             * string.
             */
            badgeText?: string | undefined;
            /**
             * The paths to one or more icons for the button in the spaces toolbar.
             * Defaults to the extension icon, if set to an empty string.
             */
            defaultIcons?: string | _manifest.IconPath | undefined;
            /**
             * Specifies dark and light icons for the spaces toolbar button to be
             * used with themes: The `light` icons will be used on dark backgrounds
             * and vice versa. At least the set for _16px_ icons should be specified.
             * The set for _32px_ icons will be used on screens with a very high
             * pixel density, if specified.
             */
            themeIcons?: _manifest.ThemeIcons[] | undefined;
            /**
             * The title for the spaces toolbar button, used in the tooltip of the
             * button and as the displayed name in the overflow menu. Defaults to the
             * name of the extension, if set to an empty string.
             */
            title?: string | undefined;
            /**
             * The page url, loaded into a tab when the button is clicked. Supported
             * are `https://` and `http://` links, as well as links to WebExtension
             * pages.
             */
            url?: string | undefined;
        }

        /**
         * An array of four integers in the range [0,255] that make up the RGBA
         * color. For example, opaque red is `[255, 0, 0, 255]`.
         */
        export type ColorArray = [number, number, number, number];

        /* spacesToolbar functions */
        /**
         * Adds a new button to the spaces toolbar. Throws an exception, if the
         * used `id` is not unique within the extension.
         *
         * @param id The unique id to assign to this button. May only contain
         * alphanumeric characters and underscores.
         *
         * @param properties Properties of the new button. The `url` is
         * mandatory.
         */
        export function addButton(id: string, properties: ButtonProperties): Promise<any>;

        /**
         * Removes the specified button from the spaces toolbar. Throws an
         * exception if the requested spaces toolbar button does not exist. If
         * the tab of this button is currently open, it will be closed.
         *
         * @param id The id of the button which is to be removed. May only
         * contain alphanumeric characters and underscores.
         */
        export function removeButton(id: string): Promise<any>;

        /**
         * Updates properties of the specified spaces toolbar button. Throws an
         * exception if the requested spaces toolbar button does not exist.
         *
         * @param id The id of the button which is to be updated. May only
         * contain alphanumeric characters and underscores.
         *
         * @param properties Only specified properties will be updated.
         */
        export function updateButton(id: string, properties: ButtonProperties): Promise<any>;
    }

    /**
     * The tabs API supports creating, modifying and interacting with tabs in
     * Thunderbird windows.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/tabs.html
     */
    export namespace tabs {
        /* tabs types */
        export interface Tab {
            /**
             * The ID of the tab. Tab IDs are unique within a session. Under some
             * circumstances a Tab may not be assigned an ID. Tab ID can also be set
             * to {@link tabs.TAB_ID_NONE} for apps and devtools windows.
             */
            id?: number | undefined;
            /** The zero-based index of the tab within its window. */
            index: number;
            /** The ID of the window the tab is contained within. */
            windowId?: number | undefined;
            /**
             * Whether the tab is selected.
             *
             * @deprecated Please use {@link tabs.Tab.highlighted}.
             */
            selected?: boolean | undefined;
            /** Whether the tab is highlighted. Works as an alias of active */
            highlighted: boolean;
            /**
             * Whether the tab is active in its window. (Does not necessarily mean
             * the window is focused.)
             */
            active: boolean;
            /**
             * The URL the tab is displaying. This property is only present if the
             * extension's manifest includes the <permission>tabs</permission>
             * permission.
             */
            url?: string | undefined;
            /**
             * The title of the tab. This property is only present if the extension's
             * manifest includes the <permission>tabs</permission> permission.
             */
            title?: string | undefined;
            /**
             * The URL of the tab's favicon. This property is only present if the
             * extension's manifest includes the <permission>tabs</permission>
             * permission. It may also be an empty string if the tab is loading.
             */
            favIconUrl?: string | undefined;
            /** Either `loading` or `complete`. */
            status?: string | undefined;
            /** The width of the tab in pixels. */
            width?: number | undefined;
            /** The height of the tab in pixels. */
            height?: number | undefined;
            type?: _TabType | undefined;
            /** Whether the tab is a 3-pane tab. */
            mailTab?: boolean | undefined;
        }

        /** Whether the tabs have completed loading. */
        export type TabStatus = "loading" | "complete";

        /**
         * The type of a window. Under some circumstances a Window may not be
         * assigned a type property.
         */
        export type WindowType =
            | "normal"
            | "popup"
            | "panel"
            | "app"
            | "devtools"
            | "messageCompose"
            | "messageDisplay";

        /** Event names supported in onUpdated. */
        export type UpdatePropertyName = "favIconUrl" | "status" | "title";

        /** An object describing filters to apply to tabs.onUpdated events. */
        export interface UpdateFilter {
            /**
             * A list of URLs or URL patterns. Events that cannot match any of the
             * URLs will be filtered out. Filtering with urls requires the
             * <permission>tabs</permission> or <permission>activeTab</permission>
             * permission.
             */
            urls?: string[] | undefined;
            /**
             * A list of property names. Events that do not match any of the names
             * will be filtered out.
             */
            properties?: UpdatePropertyName[] | undefined;
            tabId?: number | undefined;
            windowId?: number | undefined;
        }

        export type _TabType =
            | "addressBook"
            | "calendar"
            | "calendarEvent"
            | "calendarTask"
            | "chat"
            | "content"
            | "mail"
            | "messageCompose"
            | "messageDisplay"
            | "special"
            | "tasks";

        export interface _ConnectConnectInfo {
            /**
             * Will be passed into onConnect for content scripts that are listening
             * for the connection event.
             */
            name?: string | undefined;
            /**
             * Open a port to a specific frame identified by `frameId` instead of all
             * frames in the tab.
             */
            frameId?: number | undefined;
        }

        export interface _SendMessageOptions {
            /**
             * Send a message to a specific frame identified by `frameId` instead of
             * all frames in the tab.
             */
            frameId?: number | undefined;
        }

        /**
         * Properties for the new tab. Defaults to an empty tab, if no `url` is
         * provided.
         */
        export interface _CreateCreateProperties {
            /** The window to create the new tab in. Defaults to the current window. */
            windowId?: number | undefined;
            /**
             * The position the tab should take in the window. The provided value
             * will be clamped to between zero and the number of tabs in the window.
             */
            index?: number | undefined;
            /**
             * The URL to navigate the tab to initially. Fully-qualified URLs must
             * include a scheme (i.e. `http://www.google.com`, not `www.google.com`).
             * Relative URLs will be relative to the current page within the
             * extension.
             */
            url?: string | undefined;
            /**
             * Whether the tab should become the active tab in the window. Does not
             * affect whether the window is focused (see {@link windows.update}).
             * Defaults to `true`.
             */
            active?: boolean | undefined;
            /**
             * Whether the tab should become the selected tab in the window. Defaults
             * to `true`
             *
             * @deprecated Please use `createProperties.active`.
             */
            selected?: boolean | undefined;
        }

        export interface _QueryQueryInfo {
            /** Whether the tab is a Thunderbird 3-pane tab. */
            mailTab?: boolean | undefined;
            /**
             * Match tabs against the given Tab.type (see {@link tabs.Tab}). Ignored
             * if `queryInfo.mailTab` is specified.
             */
            type?: string | undefined;
            /** Whether the tabs are active in their windows. */
            active?: boolean | undefined;
            /** Whether the tabs are highlighted. Works as an alias of active. */
            highlighted?: boolean | undefined;
            /** Whether the tabs are in the current window. */
            currentWindow?: boolean | undefined;
            /** Whether the tabs are in the last focused window. */
            lastFocusedWindow?: boolean | undefined;
            /** Whether the tabs have completed loading. */
            status?: TabStatus | undefined;
            /** Match page titles against a pattern. */
            title?: string | undefined;
            /**
             * Match tabs against one or more URL Patterns . Note that fragment
             * identifiers are not matched.
             */
            url?: string | string[] | undefined;
            /**
             * The ID of the parent window, or {@link windows.WINDOW_ID_CURRENT} for
             * the current window.
             */
            windowId?: number | undefined;
            /** The type of window the tabs are in. */
            windowType?: WindowType | undefined;
            /** The position of the tabs within their windows. */
            index?: number | undefined;
        }

        /** Properties which should to be updated. */
        export interface _UpdateUpdateProperties {
            /**
             * A URL to navigate the tab to. Only applicable for `content` tabs and
             * active `mail` tabs.
             */
            url?: string | undefined;
            /**
             * Set this to `true`, if the tab should be active. Does not affect
             * whether the window is focused (see {@link windows.update}). Setting
             * this to `false` has no effect.
             */
            active?: boolean | undefined;
        }

        export interface _MoveMoveProperties {
            /** Defaults to the window the tab is currently in. */
            windowId?: number | undefined;
            /**
             * The position to move the window to. `-1` will place the tab at the end
             * of the window.
             */
            index: number;
        }

        export interface _ReloadReloadProperties {
            /** Whether using any local cache. Default is false. */
            bypassCache?: boolean | undefined;
        }

        /** Lists the changes to the state of the tab that was updated. */
        export interface _OnUpdatedChangeInfo {
            /** The status of the tab. Can be either `loading` or `complete`. */
            status?: string | undefined;
            /** The tab's URL if it has changed. */
            url?: string | undefined;
            /** The tab's new favicon URL. */
            favIconUrl?: string | undefined;
        }

        export interface _TabsOnUpdatedEvent<
            TCallback = (tabId: number, changeInfo: _OnUpdatedChangeInfo, tab: Tab) => void,
        > {
            addListener(cb: TCallback, filter?: UpdateFilter): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnMovedMoveInfo {
            windowId: number;
            fromIndex: number;
            toIndex: number;
        }

        export interface _OnActivatedActiveInfo {
            /** The ID of the tab that has become active. */
            tabId: number;
            /** The ID of the window the active tab changed inside of. */
            windowId: number;
        }

        export interface _OnDetachedDetachInfo {
            oldWindowId: number;
            oldPosition: number;
        }

        export interface _OnAttachedAttachInfo {
            newWindowId: number;
            newPosition: number;
        }

        export interface _OnRemovedRemoveInfo {
            /** The window whose tab is closed. */
            windowId: number;
            /**
             * Is `true` when the tab is being closed because its window is being
             * closed.
             */
            isWindowClosing: boolean;
        }

        /* tabs properties */
        /** An ID which represents the absence of a tab. */
        export const TAB_ID_NONE: number;

        /* tabs functions */
        /** Retrieves details about the specified tab. */
        export function get(tabId: number): Promise<Tab>;

        /**
         * Gets the tab that this script call is being made from. May be
         * undefined if called from a non-tab context (for example: a background
         * page or popup view).
         */
        export function getCurrent(): Promise<Tab>;

        /**
         * Connects to the content script(s) in the specified tab. The
         * runtime.onConnect event is fired in each content script running in the
         * specified tab for the current extension. For more details, see Content
         * Script Messaging .
         *
         * @returns A port that can be used to communicate with the content
         * scripts running in the specified tab.
         */
        export function connect(tabId: number, connectInfo?: _ConnectConnectInfo): runtime.Port;

        /**
         * Sends a single message to the content script(s) in the specified tab,
         * with an optional callback to run when a response is sent back. The
         * runtime.onMessage event is fired in each content script running in the
         * specified tab for the current extension.
         */
        export function sendMessage(tabId: number, message: any, options?: _SendMessageOptions): Promise<any>;

        /**
         * Creates a new content tab. Use the {@link messageDisplay_api} to open
         * messages. Only supported in `normal` windows.
         *
         * @param createProperties Properties for the new tab. Defaults to an
         * empty tab, if no `url` is provided.
         */
        export function create(createProperties: _CreateCreateProperties): Promise<Tab>;

        /**
         * Duplicates a tab.
         *
         * @param tabId The ID of the tab which is to be duplicated.
         */
        export function duplicate(tabId: number): Promise<Tab>;

        /**
         * Gets all tabs that have the specified properties, or all tabs if no
         * properties are specified.
         */
        export function query(queryInfo: _QueryQueryInfo): Promise<Tab[]>;

        /**
         * Modifies the properties of a tab. Properties that are not specified in
         * `updateProperties` are not modified.
         *
         * @param tabId Defaults to the selected tab of the current window.
         *
         * @param updateProperties Properties which should to be updated.
         */
        export function update(tabId: number, updateProperties: _UpdateUpdateProperties): Promise<Tab>;
        /**
         * Modifies the properties of a tab. Properties that are not specified in
         * `updateProperties` are not modified.
         *
         * @param updateProperties Properties which should to be updated.
         */
        export function update(updateProperties: _UpdateUpdateProperties): Promise<Tab>;

        /**
         * Moves one or more tabs to a new position within its window, or to a
         * new window. Note that tabs can only be moved to and from windows of
         * type `normal`.
         *
         * @param tabIds The tab or list of tabs to move.
         */
        export function move(tabIds: number | number[], moveProperties: _MoveMoveProperties): Promise<Tab | Tab[]>;

        /**
         * Reload a tab.
         *
         * @param tabId The ID of the tab to reload; defaults to the selected tab
         * of the current window.
         */
        export function reload(
            tabId: number,
            reloadProperties?: _ReloadReloadProperties,
        ): Promise<void>; /** Reload a tab. */
        export function reload(reloadProperties?: _ReloadReloadProperties): Promise<void>;

        /**
         * Closes one or more tabs.
         *
         * @param tabIds The tab or list of tabs to close.
         */
        export function remove(tabIds: number | number[]): Promise<void>;

        /**
         * Injects JavaScript code into a page. For details, see the programmatic
         * injection section of the content scripts doc.
         *
         * @param tabId The ID of the tab in which to run the script; defaults to
         * the active tab of the current window.
         *
         * @param details Details of the script to run.
         */
        export function executeScript(tabId: number, details: extensionTypes.InjectDetails): Promise<any[]>;
        /**
         * Injects JavaScript code into a page. For details, see the programmatic
         * injection section of the content scripts doc.
         *
         * @param details Details of the script to run.
         */
        export function executeScript(details: extensionTypes.InjectDetails): Promise<any[]>;

        /**
         * Injects CSS into a page. For details, see the programmatic injection
         * section of the content scripts doc.
         *
         * @param tabId The ID of the tab in which to insert the CSS; defaults to
         * the active tab of the current window.
         *
         * @param details Details of the CSS text to insert.
         */
        export function insertCSS(tabId: number, details: extensionTypes.InjectDetails): Promise<void>;
        /**
         * Injects CSS into a page. For details, see the programmatic injection
         * section of the content scripts doc.
         *
         * @param details Details of the CSS text to insert.
         */
        export function insertCSS(details: extensionTypes.InjectDetails): Promise<void>;

        /**
         * Removes injected CSS from a page. For details, see the programmatic
         * injection section of the content scripts doc.
         *
         * @param tabId The ID of the tab from which to remove the injected CSS;
         * defaults to the active tab of the current window.
         *
         * @param details Details of the CSS text to remove.
         */
        export function removeCSS(tabId: number, details: extensionTypes.InjectDetails): Promise<void>;
        /**
         * Removes injected CSS from a page. For details, see the programmatic
         * injection section of the content scripts doc.
         *
         * @param details Details of the CSS text to remove.
         */
        export function removeCSS(details: extensionTypes.InjectDetails): Promise<void>;

        /* tabs events */
        /**
         * Fired when a tab is created. Note that the tab's URL may not be set at
         * the time this event fired, but you can listen to onUpdated events to
         * be notified when a URL is set.
         *
         * @param tab Details of the tab that was created.
         */
        export const onCreated: WebExtEvent<(tab: Tab) => void>;

        /**
         * Fired when a tab is updated.
         *
         * @param changeInfo Lists the changes to the state of the tab that was
         * updated.
         *
         * @param tab Gives the state of the tab that was updated.
         */
        export const onUpdated: _TabsOnUpdatedEvent;

        /**
         * Fired when a tab is moved within a window. Only one move event is
         * fired, representing the tab the user directly moved. Move events are
         * not fired for the other tabs that must move in response. This event is
         * not fired when a tab is moved between windows. For that, see {@link tabs.onDetached}.
         */
        export const onMoved: WebExtEvent<(tabId: number, moveInfo: _OnMovedMoveInfo) => void>;

        /**
         * Fires when the active tab in a window changes. Note that the tab's URL
         * may not be set at the time this event fired, but you can listen to
         * onUpdated events to be notified when a URL is set.
         */
        export const onActivated: WebExtEvent<(activeInfo: _OnActivatedActiveInfo) => void>;

        /**
         * Fired when a tab is detached from a window, for example because it is
         * being moved between windows.
         */
        export const onDetached: WebExtEvent<(tabId: number, detachInfo: _OnDetachedDetachInfo) => void>;

        /**
         * Fired when a tab is attached to a window, for example because it was
         * moved between windows.
         */
        export const onAttached: WebExtEvent<(tabId: number, attachInfo: _OnAttachedAttachInfo) => void>;

        /** Fired when a tab is closed. */
        export const onRemoved: WebExtEvent<(tabId: number, removeInfo: _OnRemovedRemoveInfo) => void>;
    }

    /**
     * The theme API allows for customization of Thunderbird's visual
     * elements.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/theme.html
     */
    export namespace theme {
        /* theme types */
        /** Info provided in the onUpdated listener. */
        export interface ThemeUpdateInfo {
            /** The new theme after update */
            theme: _manifest.ThemeType;
            /** The id of the window the theme has been applied to */
            windowId?: number | undefined;
        }

        /* theme functions */
        /**
         * Returns the current theme for the specified window or the last focused
         * window.
         *
         * @param [windowId] The window for which we want the theme.
         */
        export function getCurrent(windowId?: number): Promise<_manifest.ThemeType>;

        /**
         * Make complete updates to the theme. Resolves when the update has
         * completed.
         *
         * @param windowId The id of the window to update. No id updates all
         * windows.
         *
         * @param details The properties of the theme to update.
         */
        export function update(windowId: number, details: _manifest.ThemeType): void;
        /**
         * Make complete updates to the theme. Resolves when the update has
         * completed.
         *
         * @param details The properties of the theme to update.
         */
        export function update(details: _manifest.ThemeType): void;

        /**
         * Removes the updates made to the theme.
         *
         * @param [windowId] The id of the window to reset. No id resets all
         * windows.
         */
        export function reset(windowId?: number): void;

        /* theme events */
        /**
         * Fired when a new theme has been applied
         *
         * @param updateInfo Details of the theme update
         */
        export const onUpdated: WebExtEvent<(updateInfo: ThemeUpdateInfo) => void>;
    }

    /**
     * The windows API supports creating, modifying and interacting with
     * Thunderbird windows.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/windows.html
     */
    export namespace windows {
        /* windows types */
        /**
         * The type of a window. Under some circumstances a window may not be
         * assigned a type property.
         */
        export type WindowType =
            | "normal"
            | "popup"
            | "panel"
            | "app"
            | "devtools"
            | "messageCompose"
            | "messageDisplay";

        /** The state of this window. */
        export type WindowState = "normal" | "minimized" | "maximized" | "fullscreen" | "docked";

        export interface Window {
            /** The ID of the window. Window IDs are unique within a session. */
            id?: number | undefined;
            /** Whether the window is currently the focused window. */
            focused: boolean;
            /** The offset of the window from the top edge of the screen in pixels. */
            top?: number | undefined;
            /** The offset of the window from the left edge of the screen in pixels. */
            left?: number | undefined;
            /** The width of the window, including the frame, in pixels. */
            width?: number | undefined;
            /** The height of the window, including the frame, in pixels. */
            height?: number | undefined;
            /**
             * Array of {@link tabs.Tab} objects representing the current tabs in the
             * window. Only included if requested by {@link windows.get}, {@link windows.getCurrent},
             *  {@link windows.getAll} or {@link windows.getLastFocused},
             *  and the optional {@link windows.GetInfo}
             * parameter has its `populate` member set to `true`.
             */
            tabs?: tabs.Tab[] | undefined;
            /**
             * Whether the window is incognito. Since Thunderbird does not support
             * the incognito mode, this is always `false`.
             */
            incognito: boolean;
            /** The type of window this is. */
            type?: WindowType | undefined;
            /** The state of this window. */
            state?: WindowState | undefined;
            /** Whether the window is set to be always on top. */
            alwaysOnTop: boolean;
            /** The title of the window. Read-only. */
            title?: string | undefined;
        }

        /**
         * Specifies what type of window to create. Thunderbird does not support
         * `panel` and `detached_panel`, they are interpreted as `popup`.
         */
        export type CreateType = "normal" | "popup" | "panel" | "detached_panel";

        /** Specifies additional requirements for the returned windows. */
        export interface GetInfo {
            /**
             * If true, the {@link windows.Window} returned will have a `tabs`
             * property that contains an array of {@link tabs.Tab} objects
             * representing the tabs inside the window. The {@link tabs.Tab} objects
             * only contain the `url`, `title` and `favIconUrl` properties if the
             * extension's manifest file includes the <permission>tabs</permission>
             * permission.
             */
            populate?: boolean | undefined;
            /**
             * If set, the {@link windows.Window} returned will be filtered based on
             * its type. Supported by {@link windows.getAll} only, ignored in all
             * other functions.
             */
            windowTypes?: WindowType[] | undefined;
        }

        export interface _CreateCreateData {
            /**
             * A URL or array of URLs to open as tabs in the window. Fully-qualified
             * URLs must include a scheme (i.e. `http://www.google.com`, not
             * `www.google.com`). Relative URLs will be relative to the current page
             * within the extension. Defaults to the New Tab Page.
             */
            url?: string | string[] | undefined;
            /** The id of the tab for which you want to adopt to the new window. */
            tabId?: number | undefined;
            /**
             * The number of pixels to position the new window from the left edge of
             * the screen. If not specified, the new window is offset naturally from
             * the last focused window.
             */
            left?: number | undefined;
            /**
             * The number of pixels to position the new window from the top edge of
             * the screen. If not specified, the new window is offset naturally from
             * the last focused window.
             */
            top?: number | undefined;
            /**
             * The width in pixels of the new window, including the frame. If not
             * specified defaults to a natural width.
             */
            width?: number | undefined;
            /**
             * The height in pixels of the new window, including the frame. If not
             * specified defaults to a natural height.
             */
            height?: number | undefined;
            /**
             * If true, opens an active window. If false, opens an inactive window.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            focused?: boolean | undefined;
            /** @deprecated Unsupported on Firefox at this time. */
            incognito?: boolean | undefined;
            /**
             * Specifies what type of window to create. Thunderbird does not support
             * `panel` and `detached_panel`, they are interpreted as `popup`.
             */
            type?: CreateType | undefined;
            /**
             * The initial state of the window. The `minimized`, `maximized` and
             * `fullscreen` states cannot be combined with `left`, `top`, `width` or
             * `height`.
             */
            state?: WindowState | undefined;
            /**
             * Allow scripts running inside the window to close the window by calling
             * `window.close()`.
             */
            allowScriptsToClose?: boolean | undefined;
            /** A string to add to the beginning of the window title. */
            titlePreface?: string | undefined;
        }

        export interface _UpdateUpdateInfo {
            /**
             * The offset from the left edge of the screen to move the window to in
             * pixels. This value is ignored for panels.
             */
            left?: number | undefined;
            /**
             * The offset from the top edge of the screen to move the window to in
             * pixels. This value is ignored for panels.
             */
            top?: number | undefined;
            /** The width to resize the window to in pixels. */
            width?: number | undefined;
            /** The height to resize the window to in pixels. */
            height?: number | undefined;
            /**
             * If true, brings the window to the front. If false, brings the next
             * window in the z-order to the front.
             */
            focused?: boolean | undefined;
            /**
             * Setting this to `true` will cause the window to be displayed in a
             * manner that draws the user's attention to the window, without changing
             * the focused window. The effect lasts until the user changes focus to
             * the window. This option has no effect if the window already has focus.
             */
            drawAttention?: boolean | undefined;
            /**
             * The new state of the window. The `minimized`, `maximized` and
             * `fullscreen` states cannot be combined with `left`, `top`, `width` or
             * `height`.
             */
            state?: WindowState | undefined;
            /** A string to add to the beginning of the window title. */
            titlePreface?: string | undefined;
        }

        /* windows properties */
        /** The windowId value that represents the absence of a window. */
        export const WINDOW_ID_NONE: number;

        /** The windowId value that represents the current window. */
        export const WINDOW_ID_CURRENT: number;

        /* windows functions */
        /** Gets details about a window. */
        export function get(windowId: number, getInfo?: GetInfo): Promise<Window>;

        /** Gets the active or topmost window. */
        export function getCurrent(getInfo?: GetInfo): Promise<Window>;

        /**
         * Gets the window that was most recently focused — typically the window
         * 'on top'.
         */
        export function getLastFocused(getInfo?: GetInfo): Promise<Window>;

        /** Gets all windows. */
        export function getAll(getInfo?: GetInfo): Promise<Window[]>;

        /**
         * Creates (opens) a new window with any optional sizing, position or
         * default URL provided.
         */
        export function create(createData?: _CreateCreateData): Promise<Window>;

        /**
         * Updates the properties of a window. Specify only the properties that
         * you want to change; unspecified properties will be left unchanged.
         */
        export function update(windowId: number, updateInfo: _UpdateUpdateInfo): Promise<Window>;

        /** Removes (closes) a window, and all the tabs inside it. */
        export function remove(windowId: number): Promise<void>;

        /** Opens the provided URL in the default system browser. */
        export function openDefaultBrowser(url: string): Promise<any>;

        /* windows events */
        /**
         * Fired when a window is created.
         *
         * @param window Details of the window that was created.
         */
        export const onCreated: WebExtEvent<(window: Window) => void>;

        /**
         * Fired when a window is removed (closed).
         *
         * @param windowId ID of the removed window.
         */
        export const onRemoved: WebExtEvent<(windowId: number) => void>;

        /**
         * Fired when the currently focused window changes. Will be {@link windows.WINDOW_ID_NONE},
         *  if all windows have lost focus. **Note:** On
         * some Linux window managers, WINDOW_ID_NONE will always be sent
         * immediately preceding a switch from one window to another.
         *
         * @param windowId ID of the newly focused window.
         */
        export const onFocusChanged: WebExtEvent<(windowId: number) => void>;
    }

    /**
     * Use the `messenger.browserSettings` API to control global settings of
     * the browser.
     *
     * Permissions: `browserSettings`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings
     */
    export namespace browserSettings {
        /* browserSettings types */
        /** How images should be animated in the browser. */
        export type ImageAnimationBehavior = "normal" | "none" | "once";

        /** After which mouse event context menus should popup. */
        export type ContextMenuMouseEvent = "mouseup" | "mousedown";

        /** Color management mode. */
        export type ColorManagementMode = "off" | "full" | "tagged_only";

        /* browserSettings properties */
        /**
         * Allows or disallows pop-up windows from opening in response to user
         * events.
         */
        export const allowPopupsForUserEvents: types.Setting;

        /** Enables or disables the browser cache. */
        export const cacheEnabled: types.Setting;

        /**
         * This boolean setting controls whether the selected tab can be closed
         * with a double click.
         */
        export const closeTabsByDoubleClick: types.Setting;

        /**
         * Controls after which mouse event context menus popup. This setting's
         * value is of type ContextMenuMouseEvent, which has possible values of
         * `mouseup` and `mousedown`.
         */
        export const contextMenuShowEvent: types.Setting;

        /**
         * Returns whether the FTP protocol is enabled. Read-only.
         *
         * @deprecated FTP support was removed from Firefox in bug 1574475
         */
        export const ftpProtocolEnabled: types.Setting;

        /** Returns the value of the overridden home page. Read-only. */
        export const homepageOverride: types.Setting;

        /**
         * Controls the behaviour of image animation in the browser. This
         * setting's value is of type ImageAnimationBehavior, defaulting to
         * `normal`.
         */
        export const imageAnimationBehavior: types.Setting;

        /** Returns the value of the overridden new tab page. Read-only. */
        export const newTabPageOverride: types.Setting;

        /**
         * Controls where new tabs are opened. `afterCurrent` will open all new
         * tabs next to the current tab, `relatedAfterCurrent` will open only
         * related tabs next to the current tab, and `atEnd` will open all tabs
         * at the end of the tab strip. The default is `relatedAfterCurrent`.
         */
        export const newTabPosition: types.Setting;

        /**
         * This boolean setting controls whether bookmarks are opened in the
         * current tab or in a new tab.
         */
        export const openBookmarksInNewTabs: types.Setting;

        /**
         * This boolean setting controls whether search results are opened in the
         * current tab or in a new tab.
         */
        export const openSearchResultsInNewTabs: types.Setting;

        /**
         * This boolean setting controls whether urlbar results are opened in the
         * current tab or in a new tab.
         */
        export const openUrlbarResultsInNewTabs: types.Setting;

        /** Disables webAPI notifications. */
        export const webNotificationsDisabled: types.Setting;

        /**
         * This setting controls whether the user-chosen colors override the
         * page's colors.
         */
        export const overrideDocumentColors: types.Setting;

        /**
         * This setting controls whether a light or dark color scheme overrides
         * the page's preferred color scheme.
         */
        export const overrideContentColorScheme: types.Setting;

        /** This setting controls whether the document's fonts are used. */
        export const useDocumentFonts: types.Setting;

        /**
         * This boolean setting controls whether zoom is applied to the full page
         * or to text only.
         */
        export const zoomFullPage: types.Setting;

        /**
         * This boolean setting controls whether zoom is applied on a per-site
         * basis or to the current tab only. If privacy.resistFingerprinting is
         * true, this setting has no effect and zoom is applied to the current
         * tab only.
         */
        export const zoomSiteSpecific: types.Setting;
    }

    /**
     * Offers the ability to write to the clipboard. Reading is not supported
     * because the clipboard can already be read through the standard web
     * platform APIs.
     *
     * Permissions: `clipboardWrite`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/clipboard
     */
    export namespace clipboard {
        /** The type of imageData. */
        export type _SetImageDataImageType = "jpeg" | "png";

        /* clipboard functions */
        /**
         * Copy an image to the clipboard. The image is re-encoded before it is
         * written to the clipboard. If the image is invalid, the clipboard is
         * not modified.
         *
         * @param imageData The image data to be copied.
         *
         * @param imageType The type of imageData.
         */
        export function setImageData(imageData: ArrayBuffer, imageType: _SetImageDataImageType): Promise<void>;
    }

    /**
     * Not supported on manifest versions above 2.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts
     */
    export namespace contentScripts {
        /* contentScripts types */
        /** Details of a content script registered programmatically */
        export interface RegisteredContentScriptOptions {
            matches: _manifest.MatchPattern[];
            excludeMatches?: _manifest.MatchPattern[] | undefined;
            includeGlobs?: string[] | undefined;
            excludeGlobs?: string[] | undefined;
            /** The list of CSS files to inject */
            css?: extensionTypes.ExtensionFileOrCode[] | undefined;
            /** The list of JS files to inject */
            js?: extensionTypes.ExtensionFileOrCode[] | undefined;
            /**
             * If allFrames is `true`, implies that the JavaScript or CSS should be
             * injected into all frames of current page. By default, it's `false` and
             * is only injected into the top frame.
             */
            allFrames?: boolean | undefined;
            /**
             * If matchAboutBlank is true, then the code is also injected in
             * about:blank and about:srcdoc frames if your extension has access to
             * its parent document. Code cannot be inserted in top-level
             * about:-frames. By default it is `false`.
             */
            matchAboutBlank?: boolean | undefined;
            /**
             * The soonest that the JavaScript or CSS will be injected into the tab.
             * Defaults to "document_idle".
             */
            runAt?: extensionTypes.RunAt | undefined;
            /**
             * limit the set of matched tabs to those that belong to the given cookie
             * store id
             */
            cookieStoreId?: string[] | string | undefined;
        }

        /** An object that represents a content script registered programmatically */
        export interface RegisteredContentScript {
            /** Unregister a content script registered programmatically */
            unregister(): Promise<any>;
        }

        /* contentScripts functions */
        /** Register a content script programmatically */
        export function register(
            contentScriptOptions: RegisteredContentScriptOptions,
        ): Promise<RegisteredContentScript>;
    }

    /**
     * Use the `messenger.cookies` API to query and modify cookies, and to be
     * notified when they change.
     *
     * Permissions: `cookies`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies
     */
    export namespace cookies {
        /* cookies types */
        /**
         * A cookie's 'SameSite' state
         * (https://tools.ietf.org/html/draft-west-first-party-cookies).
         * 'no_restriction' corresponds to a cookie set without a 'SameSite'
         * attribute, 'lax' to 'SameSite=Lax', and 'strict' to 'SameSite=Strict'.
         */
        export type SameSiteStatus = "no_restriction" | "lax" | "strict";

        /**
         * The description of the storage partition of a cookie. This object may
         * be omitted (null) if a cookie is not partitioned.
         */
        export interface PartitionKey {
            /**
             * The first-party URL of the cookie, if the cookie is in storage
             * partitioned by the top-level site.
             */
            topLevelSite?: string | undefined;
        }

        /** Represents information about an HTTP cookie. */
        export interface Cookie {
            /** The name of the cookie. */
            name: string;
            /** The value of the cookie. */
            value: string;
            /** The domain of the cookie (e.g. "www.google.com", "example.com"). */
            domain: string;
            /**
             * True if the cookie is a host-only cookie (i.e. a request's host must
             * exactly match the domain of the cookie).
             */
            hostOnly: boolean;
            /** The path of the cookie. */
            path: string;
            /**
             * True if the cookie is marked as Secure (i.e. its scope is limited to
             * secure channels, typically HTTPS).
             */
            secure: boolean;
            /**
             * True if the cookie is marked as HttpOnly (i.e. the cookie is
             * inaccessible to client-side scripts).
             */
            httpOnly: boolean;
            /**
             * The cookie's same-site status (i.e. whether the cookie is sent with
             * cross-site requests).
             */
            sameSite: SameSiteStatus;
            /**
             * True if the cookie is a session cookie, as opposed to a persistent
             * cookie with an expiration date.
             */
            session: boolean;
            /**
             * The expiration date of the cookie as the number of seconds since the
             * UNIX epoch. Not provided for session cookies.
             */
            expirationDate?: number | undefined;
            /**
             * The ID of the cookie store containing this cookie, as provided in
             * getAllCookieStores().
             */
            storeId: string;
            /** The first-party domain of the cookie. */
            firstPartyDomain: string;
            /** The cookie's storage partition, if any. null if not partitioned. */
            partitionKey?: PartitionKey | undefined;
        }

        /**
         * Represents a cookie store in the browser. An incognito mode window,
         * for instance, uses a separate cookie store from a non-incognito
         * window.
         */
        export interface CookieStore {
            /** The unique identifier for the cookie store. */
            id: string;
            /** Identifiers of all the browser tabs that share this cookie store. */
            tabIds: number[];
            /** Indicates if this is an incognito cookie store */
            incognito: boolean;
        }

        /**
         * The underlying reason behind the cookie's change. If a cookie was
         * inserted, or removed via an explicit call to `cookies.remove`, "cause"
         * will be "explicit". If a cookie was automatically removed due to
         * expiry, "cause" will be "expired". If a cookie was removed due to
         * being overwritten with an already-expired expiration date, "cause"
         * will be set to "expired_overwrite". If a cookie was automatically
         * removed due to garbage collection, "cause" will be "evicted". If a
         * cookie was automatically removed due to a "set" call that overwrote
         * it, "cause" will be "overwrite". Plan your response accordingly.
         */
        export type OnChangedCause = "evicted" | "expired" | "explicit" | "expired_overwrite" | "overwrite";

        /** Details to identify the cookie being retrieved. */
        export interface _GetDetails {
            /**
             * The URL with which the cookie to retrieve is associated. This argument
             * may be a full URL, in which case any data following the URL path (e.g.
             * the query string) is simply ignored. If host permissions for this URL
             * are not specified in the manifest file, the API call will fail.
             */
            url: string;
            /** The name of the cookie to retrieve. */
            name: string;
            /**
             * The ID of the cookie store in which to look for the cookie. By
             * default, the current execution context's cookie store will be used.
             */
            storeId?: string | undefined;
            /**
             * The first-party domain which the cookie to retrieve is associated.
             * This attribute is required if First-Party Isolation is enabled.
             */
            firstPartyDomain?: string | undefined;
            /**
             * The storage partition, if the cookie is part of partitioned storage.
             * By default, only non-partitioned cookies are returned.
             */
            partitionKey?: PartitionKey | undefined;
        }

        /** Information to filter the cookies being retrieved. */
        export interface _GetAllDetails {
            /**
             * Restricts the retrieved cookies to those that would match the given
             * URL.
             */
            url?: string | undefined;
            /** Filters the cookies by name. */
            name?: string | undefined;
            /**
             * Restricts the retrieved cookies to those whose domains match or are
             * subdomains of this one.
             */
            domain?: string | undefined;
            /**
             * Restricts the retrieved cookies to those whose path exactly matches
             * this string.
             */
            path?: string | undefined;
            /** Filters the cookies by their Secure property. */
            secure?: boolean | undefined;
            /** Filters out session vs. persistent cookies. */
            session?: boolean | undefined;
            /**
             * The cookie store to retrieve cookies from. If omitted, the current
             * execution context's cookie store will be used.
             */
            storeId?: string | undefined;
            /**
             * Restricts the retrieved cookies to those whose first-party domains
             * match this one. This attribute is required if First-Party Isolation is
             * enabled. To not filter by a specific first-party domain, use `null` or
             * `undefined`.
             */
            firstPartyDomain?: string | undefined;
            /**
             * Selects a specific storage partition to look up cookies. Defaults to
             * null, in which case only non-partitioned cookies are retrieved. If an
             * object iis passed, partitioned cookies are also included, and filtered
             * based on the keys present in the given PartitionKey description. An
             * empty object ({}) returns all cookies (partitioned + unpartitioned), a
             * non-empty object (e.g. {topLevelSite: '...'}) only returns cookies
             * whose partition match all given attributes.
             */
            partitionKey?: PartitionKey | undefined;
        }

        /** Details about the cookie being set. */
        export interface _SetDetails {
            /**
             * The request-URI to associate with the setting of the cookie. This
             * value can affect the default domain and path values of the created
             * cookie. If host permissions for this URL are not specified in the
             * manifest file, the API call will fail.
             */
            url: string;
            /** The name of the cookie. Empty by default if omitted. */
            name?: string | undefined;
            /** The value of the cookie. Empty by default if omitted. */
            value?: string | undefined;
            /**
             * The domain of the cookie. If omitted, the cookie becomes a host-only
             * cookie.
             */
            domain?: string | undefined;
            /**
             * The path of the cookie. Defaults to the path portion of the url
             * parameter.
             */
            path?: string | undefined;
            /** Whether the cookie should be marked as Secure. Defaults to false. */
            secure?: boolean | undefined;
            /** Whether the cookie should be marked as HttpOnly. Defaults to false. */
            httpOnly?: boolean | undefined;
            /** The cookie's same-site status. */
            sameSite?: SameSiteStatus | undefined;
            /**
             * The expiration date of the cookie as the number of seconds since the
             * UNIX epoch. If omitted, the cookie becomes a session cookie.
             */
            expirationDate?: number | undefined;
            /**
             * The ID of the cookie store in which to set the cookie. By default, the
             * cookie is set in the current execution context's cookie store.
             */
            storeId?: string | undefined;
            /**
             * The first-party domain of the cookie. This attribute is required if
             * First-Party Isolation is enabled.
             */
            firstPartyDomain?: string | undefined;
            /**
             * The storage partition, if the cookie is part of partitioned storage.
             * By default, non-partitioned storage is used.
             */
            partitionKey?: PartitionKey | undefined;
        }

        /**
         * Contains details about the cookie that's been removed. If removal
         * failed for any reason, this will be "null", and `runtime.lastError`
         * will be set.
         */
        export interface _RemoveReturnDetails {
            /** The URL associated with the cookie that's been removed. */
            url: string;
            /** The name of the cookie that's been removed. */
            name: string;
            /** The ID of the cookie store from which the cookie was removed. */
            storeId: string;
            /** The first-party domain associated with the cookie that's been removed. */
            firstPartyDomain: string;
            /**
             * The storage partition, if the cookie is part of partitioned storage.
             * null if not partitioned.
             */
            partitionKey?: PartitionKey | undefined;
        }

        /** Information to identify the cookie to remove. */
        export interface _RemoveDetails {
            /**
             * The URL associated with the cookie. If host permissions for this URL
             * are not specified in the manifest file, the API call will fail.
             */
            url: string;
            /** The name of the cookie to remove. */
            name: string;
            /**
             * The ID of the cookie store to look in for the cookie. If unspecified,
             * the cookie is looked for by default in the current execution context's
             * cookie store.
             */
            storeId?: string | undefined;
            /**
             * The first-party domain associated with the cookie. This attribute is
             * required if First-Party Isolation is enabled.
             */
            firstPartyDomain?: string | undefined;
            /**
             * The storage partition, if the cookie is part of partitioned storage.
             * By default, non-partitioned storage is used.
             */
            partitionKey?: PartitionKey | undefined;
        }

        export interface _OnChangedChangeInfo {
            /** True if a cookie was removed. */
            removed: boolean;
            /** Information about the cookie that was set or removed. */
            cookie: Cookie;
            /** The underlying reason behind the cookie's change. */
            cause: OnChangedCause;
        }

        /* cookies functions */
        /**
         * Retrieves information about a single cookie. If more than one cookie
         * of the same name exists for the given URL, the one with the longest
         * path will be returned. For cookies with the same path length, the
         * cookie with the earliest creation time will be returned.
         *
         * @param details Details to identify the cookie being retrieved.
         */
        export function get(details: _GetDetails): Promise<Cookie | null>;

        /**
         * Retrieves all cookies from a single cookie store that match the given
         * information. The cookies returned will be sorted, with those with the
         * longest path first. If multiple cookies have the same path length,
         * those with the earliest creation time will be first.
         *
         * @param details Information to filter the cookies being retrieved.
         */
        export function getAll(details: _GetAllDetails): Promise<Cookie[]>;

        /**
         * Sets a cookie with the given cookie data; may overwrite equivalent
         * cookies if they exist.
         *
         * @param details Details about the cookie being set.
         */
        export function set(details: _SetDetails): Promise<Cookie>;

        /**
         * Deletes a cookie by name.
         *
         * @param details Information to identify the cookie to remove.
         */
        export function remove(details: _RemoveDetails): Promise<_RemoveReturnDetails | null>;

        /** Lists all existing cookie stores. */
        export function getAllCookieStores(): Promise<CookieStore[]>;

        /* cookies events */
        /**
         * Fired when a cookie is set or removed. As a special case, note that
         * updating a cookie's properties is implemented as a two step process:
         * the cookie to be updated is first removed entirely, generating a
         * notification with "cause" of "overwrite" . Afterwards, a new cookie is
         * written with the updated values, generating a second notification with
         * "cause" "explicit".
         */
        export const onChanged: WebExtEvent<(changeInfo: _OnChangedChangeInfo) => void>;
    }

    /**
     * Asynchronous DNS API
     *
     * Permissions: `dns`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/dns
     */
    export namespace dns {
        /* dns types */
        /** An object encapsulating a DNS Record. */
        export interface DNSRecord {
            /**
             * The canonical hostname for this record. this value is empty if the
             * record was not fetched with the 'canonical_name' flag.
             */
            canonicalName?: string | undefined;
            /** Record retreived with TRR. */
            isTRR: string;
            addresses: string[];
        }

        export type ResolveFlags = _ResolveFlags[];

        export type _ResolveFlags =
            | "allow_name_collisions"
            | "bypass_cache"
            | "canonical_name"
            | "disable_ipv4"
            | "disable_ipv6"
            | "disable_trr"
            | "offline"
            | "priority_low"
            | "priority_medium"
            | "speculate";

        /* dns functions */
        /** Resolves a hostname to a DNS record. */
        export function resolve(hostname: string, flags?: ResolveFlags): Promise<DNSRecord>;
    }

    /**
     * Permissions: `downloads`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads
     */
    export namespace downloads {
        /* downloads types */
        export type FilenameConflictAction = "uniquify" | "overwrite" | "prompt";

        export type InterruptReason =
            | "FILE_FAILED"
            | "FILE_ACCESS_DENIED"
            | "FILE_NO_SPACE"
            | "FILE_NAME_TOO_LONG"
            | "FILE_TOO_LARGE"
            | "FILE_VIRUS_INFECTED"
            | "FILE_TRANSIENT_ERROR"
            | "FILE_BLOCKED"
            | "FILE_SECURITY_CHECK_FAILED"
            | "FILE_TOO_SHORT"
            | "NETWORK_FAILED"
            | "NETWORK_TIMEOUT"
            | "NETWORK_DISCONNECTED"
            | "NETWORK_SERVER_DOWN"
            | "NETWORK_INVALID_REQUEST"
            | "SERVER_FAILED"
            | "SERVER_NO_RANGE"
            | "SERVER_BAD_CONTENT"
            | "SERVER_UNAUTHORIZED"
            | "SERVER_CERT_PROBLEM"
            | "SERVER_FORBIDDEN"
            | "USER_CANCELED"
            | "USER_SHUTDOWN"
            | "CRASH";

        /**
         * _file_: The download's filename is suspicious.
         * _url_: The download's URL is known to be malicious.
         * _content_: The downloaded file is known to be malicious.
         * _uncommon_: The download's URL is not commonly downloaded and could be
         * dangerous.
         * _safe_: The download presents no known danger to the user's computer.
         *
         * These string constants will never change, however the set of
         * DangerTypes may change.
         */
        export type DangerType = "file" | "url" | "content" | "uncommon" | "host" | "unwanted" | "safe" | "accepted";

        /**
         * _in_progress_: The download is currently receiving data from the
         * server.
         * _interrupted_: An error broke the connection with the file host.
         * _complete_: The download completed successfully.
         *
         * These string constants will never change, however the set of States
         * may change.
         */
        export type State = "in_progress" | "interrupted" | "complete";

        export interface DownloadItem {
            /** An identifier that is persistent across browser sessions. */
            id: number;
            /** Absolute URL. */
            url: string;
            referrer?: string | undefined;
            /** Absolute local path. */
            filename: string;
            /**
             * False if this download is recorded in the history, true if it is not
             * recorded.
             */
            incognito: boolean;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /**
             * Indication of whether this download is thought to be safe or known to
             * be suspicious.
             */
            danger: DangerType;
            /** The file's MIME type. */
            mime?: string | undefined;
            /**
             * Number of milliseconds between the unix epoch and when this download
             * began.
             */
            startTime: string;
            /**
             * Number of milliseconds between the unix epoch and when this download
             * ended.
             */
            endTime?: string | undefined;
            estimatedEndTime?: string | undefined;
            /**
             * Indicates whether the download is progressing, interrupted, or
             * complete.
             */
            state: State;
            /**
             * True if the download has stopped reading data from the host, but kept
             * the connection open.
             */
            paused: boolean;
            canResume: boolean;
            /** Number indicating why a download was interrupted. */
            error?: InterruptReason | undefined;
            /**
             * Number of bytes received so far from the host, without considering
             * file compression.
             */
            bytesReceived: number;
            /**
             * Number of bytes in the whole file, without considering file
             * compression, or -1 if unknown.
             */
            totalBytes: number;
            /**
             * Number of bytes in the whole file post-decompression, or -1 if
             * unknown.
             */
            fileSize: number;
            exists: boolean;
            byExtensionId?: string | undefined;
            byExtensionName?: string | undefined;
        }

        export interface StringDelta {
            current?: string | undefined;
            previous?: string | undefined;
        }

        export interface DoubleDelta {
            current?: number | undefined;
            previous?: number | undefined;
        }

        export interface BooleanDelta {
            current?: boolean | undefined;
            previous?: boolean | undefined;
        }

        /**
         * A time specified as a Date object, a number or string representing
         * milliseconds since the epoch, or an ISO 8601 string
         */
        export type DownloadTime = string | extensionTypes.Date;

        /**
         * Parameters that combine to specify a predicate that can be used to
         * select a set of downloads. Used for example in search() and erase()
         */
        export interface DownloadQuery {
            /**
             * This array of search terms limits results to DownloadItems whose
             * `filename` or `url` contain all of the search terms that do not begin
             * with a dash '-' and none of the search terms that do begin with a
             * dash.
             */
            query?: string[] | undefined;
            /**
             * Limits results to downloads that started before the given ms since the
             * epoch.
             */
            startedBefore?: DownloadTime | undefined;
            /**
             * Limits results to downloads that started after the given ms since the
             * epoch.
             */
            startedAfter?: DownloadTime | undefined;
            /**
             * Limits results to downloads that ended before the given ms since the
             * epoch.
             */
            endedBefore?: DownloadTime | undefined;
            /**
             * Limits results to downloads that ended after the given ms since the
             * epoch.
             */
            endedAfter?: DownloadTime | undefined;
            /**
             * Limits results to downloads whose totalBytes is greater than the given
             * integer.
             */
            totalBytesGreater?: number | undefined;
            /**
             * Limits results to downloads whose totalBytes is less than the given
             * integer.
             */
            totalBytesLess?: number | undefined;
            /**
             * Limits results to DownloadItems whose `filename` matches the given
             * regular expression.
             */
            filenameRegex?: string | undefined;
            /**
             * Limits results to DownloadItems whose `url` matches the given regular
             * expression.
             */
            urlRegex?: string | undefined;
            /**
             * Setting this integer limits the number of results. Otherwise, all
             * matching DownloadItems will be returned.
             */
            limit?: number | undefined;
            /**
             * Setting elements of this array to DownloadItem properties in order to
             * sort the search results. For example, setting `orderBy='startTime'`
             * sorts the DownloadItems by their start time in ascending order. To
             * specify descending order, prefix `orderBy` with a hyphen:
             * '-startTime'.
             */
            orderBy?: string[] | undefined;
            id?: number | undefined;
            /** Absolute URL. */
            url?: string | undefined;
            /** Absolute local path. */
            filename?: string | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /**
             * Indication of whether this download is thought to be safe or known to
             * be suspicious.
             */
            danger?: DangerType | undefined;
            /** The file's MIME type. */
            mime?: string | undefined;
            startTime?: string | undefined;
            endTime?: string | undefined;
            /**
             * Indicates whether the download is progressing, interrupted, or
             * complete.
             */
            state?: State | undefined;
            /**
             * True if the download has stopped reading data from the host, but kept
             * the connection open.
             */
            paused?: boolean | undefined;
            /** Why a download was interrupted. */
            error?: InterruptReason | undefined;
            /**
             * Number of bytes received so far from the host, without considering
             * file compression.
             */
            bytesReceived?: number | undefined;
            /**
             * Number of bytes in the whole file, without considering file
             * compression, or -1 if unknown.
             */
            totalBytes?: number | undefined;
            /**
             * Number of bytes in the whole file post-decompression, or -1 if
             * unknown.
             */
            fileSize?: number | undefined;
            exists?: boolean | undefined;
        }

        /** The HTTP method to use if the URL uses the HTTP[S] protocol. */
        export type _DownloadOptionsMethod = "GET" | "POST";

        export interface _DownloadOptionsHeaders {
            /** Name of the HTTP header. */
            name: string;
            /** Value of the HTTP header. */
            value: string;
        }

        /** What to download and how. */
        export interface _DownloadOptions {
            /** The URL to download. */
            url: string;
            /**
             * A file path relative to the Downloads directory to contain the
             * downloaded file.
             */
            filename?: string | undefined;
            /** Whether to associate the download with a private browsing session. */
            incognito?: boolean | undefined;
            /**
             * The cookie store ID of the contextual identity; requires "cookies"
             * permission.
             */
            cookieStoreId?: string | undefined;
            conflictAction?: FilenameConflictAction | undefined;
            /**
             * Use a file-chooser to allow the user to select a filename. If the
             * option is not specified, the file chooser will be shown only if the
             * Firefox "Always ask you where to save files" option is enabled (i.e.
             * the pref `messenger.download.useDownloadDir` is set to `false`).
             */
            saveAs?: boolean | undefined;
            /** The HTTP method to use if the URL uses the HTTP[S] protocol. */
            method?: _DownloadOptionsMethod | undefined;
            /**
             * Extra HTTP headers to send with the request if the URL uses the
             * HTTP[s] protocol. Each header is represented as a dictionary
             * containing the keys `name` and either `value` or `binaryValue`,
             * restricted to those allowed by XMLHttpRequest.
             */
            headers?: _DownloadOptionsHeaders[] | undefined;
            /** Post body. */
            body?: string | undefined;
            /**
             * When this flag is set to `true`, then the browser will allow downloads
             * to proceed after encountering HTTP errors such as `404 Not Found`.
             */
            allowHttpErrors?: boolean | undefined;
        }

        export interface _GetFileIconOptions {
            /**
             * The size of the icon. The returned icon will be square with dimensions
             * size \* size pixels. The default size for the icon is 32x32 pixels.
             */
            size?: number | undefined;
        }

        export interface _OnChangedDownloadDelta {
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
         * Download a URL. If the URL uses the HTTP[S] protocol, then the request
         * will include all cookies currently set for its hostname. If both
         * `filename` and `saveAs` are specified, then the Save As dialog will be
         * displayed, pre-populated with the specified `filename`. If the
         * download started successfully, `callback` will be called with the new
         * DownloadItem's `downloadId`. If there was an error starting the
         * download, then `callback` will be called with `downloadId=undefined`
         * and messenger.extension.lastError will contain a descriptive string.
         * The error strings are not guaranteed to remain backwards compatible
         * between releases. You must not parse it.
         *
         * @param options What to download and how.
         */
        export function download(options: _DownloadOptions): Promise<number>;

        /**
         * Find DownloadItems. Set `query` to the empty object to get all
         * DownloadItems. To get a specific DownloadItem, set only the `id`
         * field.
         */
        export function search(query: DownloadQuery): Promise<DownloadItem[]>;

        /**
         * Pause the download. If the request was successful the download is in a
         * paused state. Otherwise messenger.extension.lastError contains an
         * error message. The request will fail if the download is not active.
         *
         * @param downloadId The id of the download to pause.
         */
        export function pause(downloadId: number): Promise<void>;

        /**
         * Resume a paused download. If the request was successful the download
         * is in progress and unpaused. Otherwise messenger.extension.lastError
         * contains an error message. The request will fail if the download is
         * not active.
         *
         * @param downloadId The id of the download to resume.
         */
        export function resume(downloadId: number): Promise<void>;

        /**
         * Cancel a download. When `callback` is run, the download is cancelled,
         * completed, interrupted or doesn't exist anymore.
         *
         * @param downloadId The id of the download to cancel.
         */
        export function cancel(downloadId: number): Promise<void>;

        /**
         * Retrieve an icon for the specified download. For new downloads, file
         * icons are available after the onCreated event has been received. The
         * image returned by this function while a download is in progress may be
         * different from the image returned after the download is complete. Icon
         * retrieval is done by querying the underlying operating system or
         * toolkit depending on the platform. The icon that is returned will
         * therefore depend on a number of factors including state of the
         * download, platform, registered file types and visual theme. If a file
         * icon cannot be determined, messenger.extension.lastError will contain
         * an error message.
         *
         * @param downloadId The identifier for the download.
         */
        export function getFileIcon(downloadId: number, options?: _GetFileIconOptions): Promise<string>;

        /** Open the downloaded file. */
        export function open(downloadId: number): Promise<void>;

        /** Show the downloaded file in its folder in a file manager. */
        export function show(downloadId: number): Promise<boolean>;

        export function showDefaultFolder(): void;

        /** Erase matching DownloadItems from history */
        export function erase(query: DownloadQuery): Promise<number[]>;

        export function removeFile(downloadId: number): Promise<void>;

        /**
         * Prompt the user to either accept or cancel a dangerous download.
         * `acceptDanger()` does not automatically accept dangerous downloads.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function acceptDanger(downloadId: number): Promise<void>;

        /**
         * Initiate dragging the file to another application.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function drag(downloadId: number): void;

        /** @deprecated Unsupported on Firefox at this time. */
        export function setShelfEnabled(enabled: boolean): void;

        /* downloads events */
        /** This event fires with the DownloadItem object when a download begins. */
        export const onCreated: WebExtEvent<(downloadItem: DownloadItem) => void>;

        /**
         * Fires with the `downloadId` when a download is erased from history.
         *
         * @param downloadId The `id` of the DownloadItem that was erased.
         */
        export const onErased: WebExtEvent<(downloadId: number) => void>;

        /**
         * When any of a DownloadItem's properties except `bytesReceived`
         * changes, this event fires with the `downloadId` and an object
         * containing the properties that changed.
         */
        export const onChanged: WebExtEvent<(downloadDelta: _OnChangedDownloadDelta) => void>;
    }

    /**
     * The `messenger.events` namespace contains common types used by APIs
     * dispatching events to notify you when something interesting happens.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/events
     */
    export namespace events {
        /* events types */
        /** Description of a declarative rule for handling events. */
        export interface Rule {
            /** Optional identifier that allows referencing this rule. */
            id?: string | undefined;
            /**
             * Tags can be used to annotate rules and perform operations on sets of
             * rules.
             */
            tags?: string[] | undefined;
            /** List of conditions that can trigger the actions. */
            conditions: any[];
            /**
             * List of actions that are triggered if one of the condtions is
             * fulfilled.
             */
            actions: any[];
            /** Optional priority of this rule. Defaults to 100. */
            priority?: number | undefined;
        }

        /**
         * An object which allows the addition and removal of listeners for a
         * Chrome event.
         */
        export interface Event {
            /**
             * Registers an event listener _callback_ to an event.
             *
             * @param callback Called when an event occurs. The parameters of this
             * function depend on the type of event.
             */
            addListener(callback: () => void): void;
            /**
             * Deregisters an event listener _callback_ from an event.
             *
             * @param callback Listener that shall be unregistered.
             */
            removeListener(callback: () => void): void;
            /**
             * @param callback Listener whose registration status shall be tested.
             *
             * @returns True if _callback_ is registered to the event.
             */
            hasListener(callback: () => void): boolean;
            /** @returns True if any event listeners are registered to the event. */
            hasListeners(): boolean;
            /**
             * Registers rules to handle events.
             *
             * @param eventName Name of the event this function affects.
             *
             * @param webViewInstanceId If provided, this is an integer that uniquely
             * identfies the <webview> associated with this function call.
             *
             * @param rules Rules to be registered. These do not replace previously
             * registered rules.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            addRules?(eventName: string, webViewInstanceId: number, rules: Rule[]): Promise<Rule[]>;
            /**
             * Returns currently registered rules.
             *
             * @param eventName Name of the event this function affects.
             *
             * @param webViewInstanceId If provided, this is an integer that uniquely
             * identfies the <webview> associated with this function call.
             *
             * @param [ruleIdentifiers] If an array is passed, only rules with
             * identifiers contained in this array are returned.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            getRules?(eventName: string, webViewInstanceId: number, ruleIdentifiers?: string[]): Promise<Rule[]>;
            /**
             * Unregisters currently registered rules.
             *
             * @param eventName Name of the event this function affects.
             *
             * @param webViewInstanceId If provided, this is an integer that uniquely
             * identfies the <webview> associated with this function call.
             *
             * @param [ruleIdentifiers] If an array is passed, only rules with
             * identifiers contained in this array are unregistered.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            removeRules?(eventName: string, webViewInstanceId: number, ruleIdentifiers?: string[]): Promise<void>;
        }

        /**
         * Filters URLs for various criteria. See event filtering. All criteria
         * are case sensitive.
         */
        export interface UrlFilter {
            /**
             * Matches if the host name of the URL contains a specified string. To
             * test whether a host name component has a prefix 'foo', use
             * hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com',
             * because an implicit dot is added at the beginning of the host name.
             * Similarly, hostContains can be used to match against component suffix
             * ('foo.') and to exactly match against components ('.foo.'). Suffix-
             * and exact-matching for the last components need to be done separately
             * using hostSuffix, because no implicit dot is added at the end of the
             * host name.
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
            /**
             * Matches if the query segment of the URL is equal to a specified
             * string.
             */
            queryEquals?: string | undefined;
            /**
             * Matches if the query segment of the URL starts with a specified
             * string.
             */
            queryPrefix?: string | undefined;
            /** Matches if the query segment of the URL ends with a specified string. */
            querySuffix?: string | undefined;
            /**
             * Matches if the URL (without fragment identifier) contains a specified
             * string. Port numbers are stripped from the URL if they match the
             * default port number.
             */
            urlContains?: string | undefined;
            /**
             * Matches if the URL (without fragment identifier) is equal to a
             * specified string. Port numbers are stripped from the URL if they match
             * the default port number.
             */
            urlEquals?: string | undefined;
            /**
             * Matches if the URL (without fragment identifier) matches a specified
             * regular expression. Port numbers are stripped from the URL if they
             * match the default port number. The regular expressions use the
             * [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
             */
            urlMatches?: string | undefined;
            /**
             * Matches if the URL without query segment and fragment identifier
             * matches a specified regular expression. Port numbers are stripped from
             * the URL if they match the default port number. The regular expressions
             * use the
             * [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
             */
            originAndPathMatches?: string | undefined;
            /**
             * Matches if the URL (without fragment identifier) starts with a
             * specified string. Port numbers are stripped from the URL if they match
             * the default port number.
             */
            urlPrefix?: string | undefined;
            /**
             * Matches if the URL (without fragment identifier) ends with a specified
             * string. Port numbers are stripped from the URL if they match the
             * default port number.
             */
            urlSuffix?: string | undefined;
            /**
             * Matches if the scheme of the URL is equal to any of the schemes
             * specified in the array.
             */
            schemes?: string[] | undefined;
            /**
             * Matches if the port of the URL is contained in any of the specified
             * port lists. For example `[80, 443, [1000, 1200]]` matches all requests
             * on port 80, 443 and in the range 1000-1200.
             */
            ports?: Array<number | [number, number]> | undefined;
        }
    }

    /**
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/how-to/experiments.html
     */
    export namespace experiments {
        /* experiments types */
        export interface ExperimentAPI {
            schema: ExperimentURL;
            parent?: _ExperimentAPIParent | undefined;
            child?: _ExperimentAPIChild | undefined;
        }

        export type ExperimentURL = string;

        export type APIPaths = APIPath[];

        export type APIPath = string[];

        export type APIEvents = APIEvent[];

        export type APIEvent = "startup";

        export type APIParentScope = "addon_parent" | "content_parent" | "devtools_parent";

        export type APIChildScope = "addon_child" | "content_child" | "devtools_child";

        export interface _ExperimentAPIParent {
            events?: APIEvents | undefined;
            paths?: APIPaths | undefined;
            script: ExperimentURL;
            scopes?: APIParentScope[] | undefined;
        }

        export interface _ExperimentAPIChild {
            paths: APIPaths;
            script: ExperimentURL;
            scopes: APIChildScope[];
        }
    }

    /**
     * The `messenger.extension` API has utilities that can be used by any
     * extension page. It includes support for exchanging messages between an
     * extension and its content scripts or between extensions, as described
     * in detail in Message Passing.
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extension
     */
    export namespace extension {
        /* extension types */
        /** The type of extension view. */
        export type ViewType = "tab" | "popup" | "sidebar";

        /**
         * Set for the lifetime of a callback if an ansychronous extension api
         * has resulted in an error. If no error has occured lastError will be
         * `undefined`.
         *
         * @deprecated Please use `runtime.lastError`.
         *
         * Not supported on manifest versions above 2.
         */
        export interface _LastError {
            /** Description of the error that has taken place. */
            message: string;
        }

        export interface _GetViewsFetchProperties {
            /**
             * The type of view to get. If omitted, returns all views (including
             * background pages and tabs). Valid values: 'tab', 'popup', 'sidebar'.
             */
            type?: ViewType | undefined;
            /** The window to restrict the search to. If omitted, returns all views. */
            windowId?: number | undefined;
            /**
             * Find a view according to a tab id. If this field is omitted, returns
             * all views.
             */
            tabId?: number | undefined;
        }

        /* extension properties */
        /**
         * Set for the lifetime of a callback if an ansychronous extension api
         * has resulted in an error. If no error has occured lastError will be
         * `undefined`.
         *
         * @deprecated Please use `runtime.lastError`.
         *
         * Not supported on manifest versions above 2.
         */
        export const lastError: _LastError | undefined;

        /**
         * True for content scripts running inside incognito tabs, and for
         * extension pages running inside an incognito process. The latter only
         * applies to extensions with 'split' incognito_behavior.
         */
        export const inIncognitoContext: boolean | undefined;

        /* extension functions */
        /**
         * Converts a relative path within an extension install directory to a
         * fully-qualified URL.
         *
         * @param path A path to a resource within an extension expressed
         * relative to its install directory.
         *
         * @deprecated Please use `runtime.getURL`.
         *
         * Not supported on manifest versions above 2.
         *
         * @returns The fully-qualified URL to the resource.
         */
        export function getURL(path: string): string;

        /**
         * Returns an array of the JavaScript 'window' objects for each of the
         * pages running inside the current extension.
         *
         * @returns Array of global objects
         */
        export function getViews(fetchProperties?: _GetViewsFetchProperties): Window[];

        /**
         * Returns the JavaScript 'window' object for the background page running
         * inside the current extension. Returns null if the extension has no
         * background page.
         */
        export function getBackgroundPage(): Window | void;

        /**
         * Retrieves the state of the extension's access to Incognito-mode (as
         * determined by the user-controlled 'Allowed in Incognito' checkbox.
         */
        export function isAllowedIncognitoAccess(): Promise<boolean>;

        /**
         * Retrieves the state of the extension's access to the 'file://' scheme
         * (as determined by the user-controlled 'Allow access to File URLs'
         * checkbox.
         */
        export function isAllowedFileSchemeAccess(): Promise<boolean>;

        /**
         * Sets the value of the ap CGI parameter used in the extension's update
         * URL. This value is ignored for extensions that are hosted in the
         * browser vendor's store.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function setUpdateUrlData(data: string): void;

        /* extension events */
        /**
         * Fired when a request is sent from either an extension process or a
         * content script.
         *
         * @param request The request sent by the calling script.
         *
         * @param sendResponse Function to call (at most once) when you have a
         * response. The argument should be any JSON-ifiable object, or undefined
         * if there is no response. If you have more than one `onRequest`
         * listener in the same document, then only one may send a response.
         *
         * @deprecated Please use `runtime.onMessage`.
         */
        export const onRequest:
            | WebExtEvent<(request: any, sender: runtime.MessageSender, sendResponse: (response?: any) => void) => void>
            | undefined;

        /**
         * Fired when a request is sent from another extension.
         *
         * @param request The request sent by the calling script.
         *
         * @param sendResponse Function to call when you have a response. The
         * argument should be any JSON-ifiable object, or undefined if there is
         * no response.
         *
         * @deprecated Please use `runtime.onMessageExternal`.
         */
        export const onRequestExternal:
            | WebExtEvent<(request: any, sender: runtime.MessageSender, sendResponse: (response?: any) => void) => void>
            | undefined;
    }

    /**
     * The `messenger.extensionTypes` API contains type declarations for
     * WebExtensions.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes
     */
    export namespace extensionTypes {
        /* extensionTypes types */
        /** The format of an image. */
        export type ImageFormat = "jpeg" | "png";

        /** Details about the format, quality, area and scale of the capture. */
        export interface ImageDetails {
            /** The format of the resulting image. Default is `"jpeg"`. */
            format?: ImageFormat | undefined;
            /**
             * When format is `"jpeg"`, controls the quality of the resulting image.
             * This value is ignored for PNG images. As quality is decreased, the
             * resulting image will have more visual artifacts, and the number of
             * bytes needed to store it will decrease.
             */
            quality?: number | undefined;
            /**
             * The area of the document to capture, in CSS pixels, relative to the
             * page. If omitted, capture the visible viewport.
             */
            rect?: _ImageDetailsRect | undefined;
            /** The scale of the resulting image. Defaults to `devicePixelRatio`. */
            scale?: number | undefined;
            /**
             * If true, temporarily resets the scroll position of the document to 0\.
             * Only takes effect if rect is also specified.
             */
            resetScrollPosition?: boolean | undefined;
        }

        /** The soonest that the JavaScript or CSS will be injected into the tab. */
        export type RunAt = "document_start" | "document_end" | "document_idle";

        /**
         * The origin of the CSS to inject, this affects the cascading order
         * (priority) of the stylesheet.
         */
        export type CSSOrigin = "user" | "author";

        /**
         * Details of the script or CSS to inject. Either the code or the file
         * property must be set, but both may not be set at the same time.
         */
        export interface InjectDetails {
            /**
             * JavaScript or CSS code to inject.
             *
             * **Warning:**
             * Be careful using the `code` parameter. Incorrect use of it may open
             * your extension to
             * [cross site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)
             * attacks.
             */
            code?: string | undefined;
            /** JavaScript or CSS file to inject. */
            file?: string | undefined;
            /**
             * If allFrames is `true`, implies that the JavaScript or CSS should be
             * injected into all frames of current page. By default, it's `false` and
             * is only injected into the top frame.
             */
            allFrames?: boolean | undefined;
            /**
             * If matchAboutBlank is true, then the code is also injected in
             * about:blank and about:srcdoc frames if your extension has access to
             * its parent document. Code cannot be inserted in top-level
             * about:-frames. By default it is `false`.
             */
            matchAboutBlank?: boolean | undefined;
            /**
             * The ID of the frame to inject the script into. This may not be used in
             * combination with `allFrames`.
             */
            frameId?: number | undefined;
            /**
             * The soonest that the JavaScript or CSS will be injected into the tab.
             * Defaults to "document_idle".
             */
            runAt?: RunAt | undefined;
            /** The css origin of the stylesheet to inject. Defaults to "author". */
            cssOrigin?: CSSOrigin | undefined;
        }

        export type Date = string | number | globalThis.Date;

        export type ExtensionFileOrCode =
            | {
                file: _manifest.ExtensionURL;
            }
            | {
                code: string;
            };

        /** A plain JSON value */
        export type PlainJSONValue = null | string | number | boolean | _PlainJSONArray | _PlainJSONObject;

        /**
         * The area of the document to capture, in CSS pixels, relative to the
         * page. If omitted, capture the visible viewport.
         */
        export interface _ImageDetailsRect {
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
     * Use the `messenger.i18n` infrastructure to implement
     * internationalization across your whole app or extension.
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n
     */
    export namespace i18n {
        /* i18n types */
        /**
         * An ISO language code such as `en` or `fr`. For a complete list of
         * languages supported by this method, see
         * [kLanguageInfoTable](http://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc).
         * For an unknown language, `und` will be returned, which means that
         * [percentage] of the text is unknown to CLD
         */
        export type LanguageCode = string;

        /**
         * DetectedLanguage object that holds detected ISO language code and its
         * percentage in the input string
         */
        export interface _DetectLanguageReturnResultLanguages {
            language: LanguageCode;
            /** The percentage of the detected language */
            percentage: number;
        }

        /**
         * LanguageDetectionResult object that holds detected langugae
         * reliability and array of DetectedLanguage
         */
        export interface _DetectLanguageReturnResult {
            /** CLD detected language reliability */
            isReliable: boolean;
            /** array of detectedLanguage */
            languages: _DetectLanguageReturnResultLanguages[];
        }

        /* i18n functions */
        /**
         * Gets the accept-languages of the browser. This is different from the
         * locale used by the browser; to get the locale, use
         * `i18n.getUILanguage`.
         */
        export function getAcceptLanguages(): Promise<LanguageCode[]>;

        /**
         * Gets the localized string for the specified message. If the message is
         * missing, this method returns an empty string (''). If the format of
         * the `getMessage()` call is wrong — for example, _messageName_ is not a
         * string or the _substitutions_ array has more than 9 elements — this
         * method returns `undefined`.
         *
         * @param messageName The name of the message, as specified in the
         * `messages.json` file.
         *
         * @param [substitutions] Substitution strings, if the message requires
         * any.
         *
         * @returns Message localized for current locale.
         */
        export function getMessage(messageName: string, substitutions?: any): string;

        /**
         * Gets the browser UI language of the browser. This is different from
         * `i18n.getAcceptLanguages` which returns the preferred user languages.
         *
         * @returns The browser UI language code such as en-US or fr-FR.
         */
        export function getUILanguage(): string;

        /**
         * Detects the language of the provided text using CLD.
         *
         * @param text User input string to be translated.
         */
        export function detectLanguage(text: string): Promise<_DetectLanguageReturnResult>;
    }

    /**
     * Use the messenger.identity API to get OAuth2 access tokens.
     *
     * Permissions: `identity`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity
     */
    export namespace identity {
        /* identity types */
        /** An object encapsulating an OAuth account id. */
        export interface AccountInfo {
            /**
             * A unique identifier for the account. This ID will not change for the
             * lifetime of the account.
             */
            id: string;
        }

        export interface _GetAuthTokenDetails {
            interactive?: boolean | undefined;
            account?: AccountInfo | undefined;
            scopes?: string[] | undefined;
        }

        export interface _GetProfileUserInfoReturnUserinfo {
            email: string;
            id: string;
        }

        export interface _RemoveCachedAuthTokenReturnUserinfo {
            email: string;
            id: string;
        }

        export interface _RemoveCachedAuthTokenDetails {
            token: string;
        }

        export interface _LaunchWebAuthFlowDetails {
            url: _manifest.HttpURL;
            interactive?: boolean | undefined;
        }

        /* identity functions */
        /**
         * Retrieves a list of AccountInfo objects describing the accounts
         * present on the profile.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function getAccounts(): Promise<AccountInfo[]>;

        /**
         * Gets an OAuth2 access token using the client ID and scopes specified
         * in the oauth2 section of manifest.json.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function getAuthToken(details?: _GetAuthTokenDetails): Promise<string>;

        /**
         * Retrieves email address and obfuscated gaia id of the user signed into
         * a profile.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function getProfileUserInfo(): Promise<_GetProfileUserInfoReturnUserinfo>;

        /**
         * Removes an OAuth2 access token from the Identity API's token cache.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function removeCachedAuthToken(
            details: _RemoveCachedAuthTokenDetails,
        ): Promise<_RemoveCachedAuthTokenReturnUserinfo>;

        /** Starts an auth flow at the specified URL. */
        export function launchWebAuthFlow(details: _LaunchWebAuthFlowDetails): Promise<string>;

        /**
         * Generates a redirect URL to be used in {@link launchWebAuthFlow}.
         *
         * @param [path] The path appended to the end of the generated URL.
         */
        export function getRedirectURL(path?: string): string;

        /* identity events */
        /**
         * Fired when signin state changes for an account on the user's profile.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export const onSignInChanged: WebExtEvent<(account: AccountInfo, signedIn: boolean) => void> | undefined;
    }

    /**
     * Use the `messenger.idle` API to detect when the machine's idle state
     * changes.
     *
     * Permissions: `idle`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/idle
     */
    export namespace idle {
        /* idle types */
        export type IdleState = "active" | "idle";

        /* idle functions */
        /**
         * Returns "idle" if the user has not generated any input for a specified
         * number of seconds, or "active" otherwise.
         *
         * @param detectionIntervalInSeconds The system is considered idle if
         * detectionIntervalInSeconds seconds have elapsed since the last user
         * input detected.
         */
        export function queryState(detectionIntervalInSeconds: number): Promise<IdleState>;

        /**
         * Sets the interval, in seconds, used to determine when the system is in
         * an idle state for onStateChanged events. The default interval is 60
         * seconds.
         *
         * @param intervalInSeconds Threshold, in seconds, used to determine when
         * the system is in an idle state.
         */
        export function setDetectionInterval(intervalInSeconds: number): void;

        /* idle events */
        /**
         * Fired when the system changes to an active or idle state. The event
         * fires with "idle" if the the user has not generated any input for a
         * specified number of seconds, and "active" when the user generates
         * input on an idle system.
         */
        export const onStateChanged: WebExtEvent<(newState: IdleState) => void>;
    }

    /**
     * The `messenger.management` API provides ways to manage the list of
     * extensions that are installed and running.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/management
     */
    export namespace management {
        /* management types */
        /** Information about an icon belonging to an extension. */
        export interface IconInfo {
            /**
             * A number representing the width and height of the icon. Likely values
             * include (but are not limited to) 128, 48, 24, and 16.
             */
            size: number;
            /**
             * The URL for this icon image. To display a grayscale version of the
             * icon (to indicate that an extension is disabled, for example), append
             * `?grayscale=true` to the URL.
             */
            url: string;
        }

        /** A reason the item is disabled. */
        export type ExtensionDisabledReason = "unknown" | "permissions_increase";

        /** The type of this extension, 'extension' or 'theme'. */
        export type ExtensionType = "extension" | "theme";

        /**
         * How the extension was installed. One of
         * `development`: The extension was loaded unpacked in developer mode,
         * `normal`: The extension was installed normally via an .xpi file,
         * `sideload`: The extension was installed by other software on the
         * machine,
         * `other`: The extension was installed by other means.
         */
        export type ExtensionInstallType = "development" | "normal" | "sideload" | "other";

        /** Information about an installed extension. */
        export interface ExtensionInfo {
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
             * A list of icon information. Note that this just reflects what was
             * declared in the manifest, and the actual image at that url may be
             * larger or smaller than what was declared, so you might consider using
             * explicit width and height attributes on img tags referencing these
             * images. See the manifest documentation on icons for more details.
             */
            icons?: IconInfo[] | undefined;
            /** Returns a list of API based permissions. */
            permissions?: string[] | undefined;
            /** Returns a list of host based permissions. */
            hostPermissions?: string[] | undefined;
            /** How the extension was installed. */
            installType: ExtensionInstallType;
        }

        export interface _InstallReturnResult {
            id: _manifest.ExtensionID;
        }

        export interface _InstallOptions {
            /** URL pointing to the XPI file on addons.mozilla.org or similar. */
            url: _manifest.HttpURL;
            /** A hash of the XPI file, using sha256 or stronger. */
            hash?: string | undefined;
        }

        export interface _UninstallSelfOptions {
            /**
             * Whether or not a confirm-uninstall dialog should prompt the user.
             * Defaults to false.
             */
            showConfirmDialog?: boolean | undefined;
            /**
             * The message to display to a user when being asked to confirm removal
             * of the extension.
             */
            dialogMessage?: string | undefined;
        }

        /* management functions */
        /** Returns a list of information about installed extensions. */
        export function getAll(): Promise<ExtensionInfo[]>;

        /**
         * Returns information about the installed extension that has the given
         * ID.
         *
         * @param id The ID from an item of `management.ExtensionInfo`.
         */
        export function get(id: _manifest.ExtensionID): Promise<ExtensionInfo>;

        /** Installs and enables a theme extension from the given url. */
        export function install(options: _InstallOptions): Promise<_InstallReturnResult>;

        /**
         * Returns information about the calling extension. Note: This function
         * can be used without requesting the 'management' permission in the
         * manifest.
         */
        export function getSelf(): Promise<ExtensionInfo>;

        /**
         * Uninstalls the calling extension. Note: This function can be used
         * without requesting the 'management' permission in the manifest.
         */
        export function uninstallSelf(options?: _UninstallSelfOptions): Promise<void>;

        /**
         * Enables or disables the given add-on.
         *
         * @param id ID of the add-on to enable/disable.
         *
         * @param enabled Whether to enable or disable the add-on.
         */
        export function setEnabled(id: string, enabled: boolean): Promise<void>;

        /* management events */
        /** Fired when an addon has been disabled. */
        export const onDisabled: WebExtEvent<(info: ExtensionInfo) => void>;

        /** Fired when an addon has been enabled. */
        export const onEnabled: WebExtEvent<(info: ExtensionInfo) => void>;

        /** Fired when an addon has been installed. */
        export const onInstalled: WebExtEvent<(info: ExtensionInfo) => void>;

        /** Fired when an addon has been uninstalled. */
        export const onUninstalled: WebExtEvent<(info: ExtensionInfo) => void>;
    }

    /**
     * Permissions: `notifications`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications
     */
    export namespace notifications {
        /* notifications types */
        export type TemplateType = "basic" | "image" | "list" | "progress";

        export type PermissionLevel = "granted" | "denied";

        export interface NotificationItem {
            /** Title of one item of a list notification. */
            title: string;
            /** Additional details about this item. */
            message: string;
        }

        export interface CreateNotificationOptions {
            /** Which type of notification to display. */
            type: TemplateType;
            /**
             * A URL to the sender's avatar, app icon, or a thumbnail for image
             * notifications.
             */
            iconUrl?: string | undefined;
            /** A URL to the app icon mask. */
            appIconMaskUrl?: string | undefined;
            /** Title of the notification (e.g. sender name for email). */
            title: string;
            /** Main notification content. */
            message: string;
            /** Alternate notification content with a lower-weight font. */
            contextMessage?: string | undefined;
            /**
             * Priority ranges from -2 to 2\. -2 is lowest priority. 2 is highest.
             * Zero is default.
             */
            priority?: number | undefined;
            /**
             * A timestamp associated with the notification, in milliseconds past the
             * epoch.
             */
            eventTime?: number | undefined;
            /**
             * Text and icons for up to two notification action buttons.
             *
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
             * Whether to show UI indicating that the app will visibly respond to
             * clicks on the body of a notification.
             */
            isClickable?: boolean | undefined;
        }

        export interface UpdateNotificationOptions {
            /** Which type of notification to display. */
            type?: TemplateType | undefined;
            /**
             * A URL to the sender's avatar, app icon, or a thumbnail for image
             * notifications.
             */
            iconUrl?: string | undefined;
            /** A URL to the app icon mask. */
            appIconMaskUrl?: string | undefined;
            /** Title of the notification (e.g. sender name for email). */
            title?: string | undefined;
            /** Main notification content. */
            message?: string | undefined;
            /** Alternate notification content with a lower-weight font. */
            contextMessage?: string | undefined;
            /**
             * Priority ranges from -2 to 2\. -2 is lowest priority. 2 is highest.
             * Zero is default.
             */
            priority?: number | undefined;
            /**
             * A timestamp associated with the notification, in milliseconds past the
             * epoch.
             */
            eventTime?: number | undefined;
            /**
             * Text and icons for up to two notification action buttons.
             *
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
             * Whether to show UI indicating that the app will visibly respond to
             * clicks on the body of a notification.
             */
            isClickable?: boolean | undefined;
        }

        export interface _CreateNotificationOptionsButtons {
            title: string;
            iconUrl?: string | undefined;
        }

        export interface _UpdateNotificationOptionsButtons {
            title: string;
            iconUrl?: string | undefined;
        }

        /* notifications functions */
        /**
         * Creates and displays a notification.
         *
         * @param notificationId Identifier of the notification. If it is empty,
         * this method generates an id. If it matches an existing notification,
         * this method first clears that notification before proceeding with the
         * create operation.
         *
         * @param options Contents of the notification.
         */
        export function create(notificationId: string, options: CreateNotificationOptions): Promise<string>;
        /**
         * Creates and displays a notification.
         *
         * @param options Contents of the notification.
         */
        export function create(options: CreateNotificationOptions): Promise<string>;

        /**
         * Updates an existing notification.
         *
         * @param notificationId The id of the notification to be updated.
         *
         * @param options Contents of the notification to update to.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function update(notificationId: string, options: UpdateNotificationOptions): Promise<boolean>;

        /**
         * Clears an existing notification.
         *
         * @param notificationId The id of the notification to be updated.
         */
        export function clear(notificationId: string): Promise<boolean>;

        /** Retrieves all the notifications. */
        export function getAll(): Promise<{ [key: string]: CreateNotificationOptions }>;

        /**
         * Retrieves whether the user has enabled notifications from this app or
         * extension.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function getPermissionLevel(): Promise<PermissionLevel>;

        /* notifications events */
        /**
         * Fired when the notification closed, either by the system or by user
         * action.
         *
         * @param notificationId The notificationId of the closed notification.
         *
         * @param byUser True if the notification was closed by the user.
         */
        export const onClosed: WebExtEvent<(notificationId: string, byUser: boolean) => void>;

        /**
         * Fired when the user clicked in a non-button area of the notification.
         *
         * @param notificationId The notificationId of the clicked notification.
         */
        export const onClicked: WebExtEvent<(notificationId: string) => void>;

        /**
         * Fired when the user pressed a button in the notification.
         *
         * @param notificationId The notificationId of the clicked notification.
         *
         * @param buttonIndex The index of the button clicked by the user.
         */
        export const onButtonClicked: WebExtEvent<(notificationId: string, buttonIndex: number) => void>;

        /**
         * Fired when the user changes the permission level.
         *
         * @param level The new permission level.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export const onPermissionLevelChanged: WebExtEvent<(level: PermissionLevel) => void> | undefined;

        /**
         * Fired when the user clicked on a link for the app's notification
         * settings.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export const onShowSettings: WebExtEvent<() => void> | undefined;

        /**
         * Fired when the notification is shown.
         *
         * @param notificationId The notificationId of the shown notification.
         */
        export const onShown: WebExtEvent<(notificationId: string) => void>;
    }

    /**
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions
     */
    export namespace permissions {
        /* permissions types */
        export interface Permissions {
            permissions?: _manifest.OptionalPermission[] | undefined;
            origins?: _manifest.MatchPattern[] | undefined;
        }

        export interface AnyPermissions {
            permissions?: _manifest.Permission[] | undefined;
            origins?: _manifest.MatchPattern[] | undefined;
        }

        /* permissions functions */
        /** Get a list of all the extension's permissions. */
        export function getAll(): Promise<AnyPermissions>;

        /** Check if the extension has the given permissions. */
        export function contains(permissions: AnyPermissions): Promise<boolean>;

        /**
         * Request the given permissions.
         *
         * Not allowed in: Devtools pages
         */
        export function request(permissions: Permissions): Promise<boolean>;

        /** Relinquish the given permissions. */
        export function remove(permissions: Permissions): Promise<boolean>;

        /* permissions events */
        /** Fired when the extension acquires new permissions. */
        export const onAdded: WebExtEvent<(permissions: Permissions) => void>;

        /** Fired when permissions are removed from the extension. */
        export const onRemoved: WebExtEvent<(permissions: Permissions) => void>;
    }

    /**
     * PKCS#11 module management API
     *
     * Permissions: `pkcs11`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pkcs11
     */
    export namespace pkcs11 {
        /* pkcs11 functions */
        /** checks whether a PKCS#11 module, given by name, is installed */
        export function isModuleInstalled(name: string): Promise<boolean>;

        /** Install a PKCS#11 module with a given name */
        export function installModule(name: string, flags?: number): Promise<void>;

        /** Remove an installed PKCS#11 module from firefox */
        export function uninstallModule(name: string): Promise<void>;

        /**
         * Enumerate a module's slots, each with their name and whether a token
         * is present
         */
        export function getModuleSlots(name: string): Promise<{
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
     * Permissions: `privacy`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy
     */
    export namespace privacy {
        /**
         * Use the `messenger.privacy` API to control usage of the features in
         * the browser that can affect a user's privacy.
         *
         * Permissions: `privacy`
         *
         * Not allowed in: Content scripts, Devtools pages
         *
         * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network
         */
        export namespace network {
            /* privacy.network types */
            /** The IP handling policy of WebRTC. */
            export type IPHandlingPolicy =
                | "default"
                | "default_public_and_private_interfaces"
                | "default_public_interface_only"
                | "disable_non_proxied_udp"
                | "proxy_only";

            /** An object which describes TLS minimum and maximum versions. */
            export interface tlsVersionRestrictionConfig {
                /** The minimum TLS version supported. */
                minimum?: _TlsVersionRestrictionConfigMinimum | undefined;
                /** The maximum TLS version supported. */
                maximum?: _TlsVersionRestrictionConfigMaximum | undefined;
            }

            /** The mode for https-only mode. */
            export type HTTPSOnlyModeOption = "always" | "private_browsing" | "never";

            /** The minimum TLS version supported. */
            export type _TlsVersionRestrictionConfigMinimum = "TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | "unknown";

            /** The maximum TLS version supported. */
            export type _TlsVersionRestrictionConfigMaximum = "TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | "unknown";

            /* privacy.network properties */
            /**
             * If enabled, the browser attempts to speed up your web browsing
             * experience by pre-resolving DNS entries, prerendering sites
             * (`<link rel='prefetch' ...>`), and preemptively opening TCP and SSL
             * connections to servers. This preference's value is a boolean,
             * defaulting to `true`.
             */
            export const networkPredictionEnabled: types.Setting;

            /** Allow users to enable and disable RTCPeerConnections (aka WebRTC). */
            export const peerConnectionEnabled: types.Setting;

            /**
             * Allow users to specify the media performance/privacy tradeoffs which
             * impacts how WebRTC traffic will be routed and how much local address
             * information is exposed. This preference's value is of type
             * IPHandlingPolicy, defaulting to `default`.
             */
            export const webRTCIPHandlingPolicy: types.Setting;

            /**
             * This property controls the minimum and maximum TLS versions. This
             * setting's value is an object of `tlsVersionRestrictionConfig`.
             */
            export const tlsVersionRestriction: types.Setting;

            /**
             * Allow users to query the mode for 'HTTPS-Only Mode'. This setting's
             * value is of type HTTPSOnlyModeOption, defaulting to `never`.
             */
            export const httpsOnlyMode: types.Setting;

            /**
             * Allow users to query the status of 'Global Privacy Control'. This
             * setting's value is of type boolean, defaulting to `false`.
             */
            export const globalPrivacyControl: types.Setting;
        }

        /**
         * Use the `messenger.privacy` API to control usage of the features in
         * the browser that can affect a user's privacy.
         *
         * Permissions: `privacy`
         *
         * Not allowed in: Content scripts, Devtools pages
         *
         * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/services
         */
        export namespace services {
            /* privacy.services properties */
            /**
             * If enabled, the password manager will ask if you want to save
             * passwords. This preference's value is a boolean, defaulting to `true`.
             */
            export const passwordSavingEnabled: types.Setting;
        }

        /**
         * Use the `messenger.privacy` API to control usage of the features in
         * the browser that can affect a user's privacy.
         *
         * Permissions: `privacy`
         *
         * Not allowed in: Content scripts, Devtools pages
         *
         * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites
         */
        export namespace websites {
            /* privacy.websites types */
            /** The mode for tracking protection. */
            export type TrackingProtectionModeOption = "always" | "never" | "private_browsing";

            /** The settings for cookies. */
            export interface CookieConfig {
                /** The type of cookies to allow. */
                behavior?: _CookieConfigBehavior | undefined;
                /**
                 * Whether to create all cookies as nonPersistent (i.e., session)
                 * cookies.
                 *
                 * @deprecated This property has no effect anymore and its value is
                 * always `false`.``
                 */
                nonPersistentCookies?: boolean | undefined;
            }

            /** The type of cookies to allow. */
            export type _CookieConfigBehavior =
                | "allow_all"
                | "reject_all"
                | "reject_third_party"
                | "allow_visited"
                | "reject_trackers"
                | "reject_trackers_and_partition_foreign";

            /* privacy.websites properties */
            /**
             * If disabled, the browser blocks third-party sites from setting
             * cookies. The value of this preference is of type boolean, and the
             * default value is `true`.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            export const thirdPartyCookiesAllowed: types.Setting | undefined;

            /**
             * If enabled, the browser sends auditing pings when requested by a
             * website (`<a ping>`). The value of this preference is of type boolean,
             * and the default value is `true`.
             */
            export const hyperlinkAuditingEnabled: types.Setting;

            /**
             * If enabled, the browser sends `referer` headers with your requests.
             * Yes, the name of this preference doesn't match the misspelled header.
             * No, we're not going to change it. The value of this preference is of
             * type boolean, and the default value is `true`.
             */
            export const referrersEnabled: types.Setting;

            /**
             * If enabled, the browser attempts to appear similar to other users by
             * reporting generic information to websites. This can prevent websites
             * from uniquely identifying users. Examples of data that is spoofed
             * include number of CPU cores, precision of JavaScript timers, the local
             * timezone, and disabling features such as GamePad support, and the
             * WebSpeech and Navigator APIs. The value of this preference is of type
             * boolean, and the default value is `false`.
             */
            export const resistFingerprinting: types.Setting;

            /**
             * If enabled, the browser will associate all data (including cookies,
             * HSTS data, cached images, and more) for any third party domains with
             * the domain in the address bar. This prevents third party trackers from
             * using directly stored information to identify you across different
             * websites, but may break websites where you login with a third party
             * account (such as a Facebook or Google login.) The value of this
             * preference is of type boolean, and the default value is `false`.
             */
            export const firstPartyIsolate: types.Setting;

            /**
             * **Available on Windows and ChromeOS only**: If enabled, the browser
             * provides a unique ID to plugins in order to run protected content. The
             * value of this preference is of type boolean, and the default value is
             * `true`.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            export const protectedContentEnabled: types.Setting | undefined;

            /**
             * Allow users to specify the mode for tracking protection. This
             * setting's value is of type TrackingProtectionModeOption, defaulting to
             * `private_browsing_only`.
             */
            export const trackingProtectionMode: types.Setting;

            /**
             * Allow users to specify the default settings for allowing cookies, as
             * well as whether all cookies should be created as non-persistent
             * cookies. This setting's value is of type CookieConfig.
             */
            export const cookieConfig: types.Setting;
        }
    }

    /**
     * Provides access to global proxy settings for Firefox and proxy event
     * listeners to handle dynamic proxy implementations.
     *
     * Permissions: `proxy`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy
     */
    export namespace proxy {
        /* proxy types */
        /** An object which describes proxy settings. */
        export interface ProxyConfig {
            /** The type of proxy to use. */
            proxyType?: _ProxyConfigProxyType | undefined;
            /** The address of the http proxy, can include a port. */
            http?: string | undefined;
            /** Use the http proxy server for all protocols. */
            httpProxyAll?: boolean | undefined;
            /**
             * The address of the ftp proxy, can include a port. Deprecated since
             * Firefox 88.
             *
             * @deprecated The address of the ftp proxy, can include a port.
             * Deprecated since Firefox 88.
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
             * If true (the default value), do not use newer TLS protocol features
             * that might have interoperability problems on the Internet. This is
             * intended only for use with critical infrastructure like the updates,
             * and is only available to privileged addons.
             */
            respectBeConservative?: boolean | undefined;
        }

        /** The type of proxy to use. */
        export type _ProxyConfigProxyType = "none" | "autoDetect" | "system" | "manual" | "autoConfig";

        export interface _OnRequestDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: webRequest.ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /** Indicates if this response was fetched from disk cache. */
            fromCache: boolean;
            /**
             * The HTTP request headers that are going to be sent out with this
             * request.
             */
            requestHeaders?: webRequest.HttpHeaders | undefined;
            /** Url classification if the request has been classified. */
            urlClassification: webRequest.UrlClassification;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _ProxyOnRequestEvent<TCallback = (details: _OnRequestDetails) => void> {
            addListener(cb: TCallback, filter: webRequest.RequestFilter, extraInfoSpec?: Array<"requestHeaders">): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        /* proxy properties */
        /**
         * Configures proxy settings. This setting's value is an object of type
         * ProxyConfig.
         */
        export const settings: types.Setting;

        /* proxy events */
        /** Fired when proxy data is needed for a request. */
        export const onRequest: _ProxyOnRequestEvent;

        /** Notifies about errors caused by the invalid use of the proxy API. */
        export const onError: WebExtEvent<(error: Error) => void>;
    }

    /**
     * Use the `messenger.runtime` API to retrieve the background page,
     * return details about the manifest, and listen for and respond to
     * events in the app or extension lifecycle. You can also use this API to
     * convert the relative path of URLs to fully-qualified URLs.
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime
     */
    export namespace runtime {
        /* runtime types */
        /** An object which allows two way communication with other pages. */
        export interface Port {
            name: string;
            disconnect: () => void;
            postMessage: (message: object) => void;
            /**
             * This property will **only** be present on ports passed to
             * onConnect/onConnectExternal listeners.
             */
            sender?: MessageSender | undefined;
            error?: Error | undefined;
            onMessage: WebExtEvent<(response: object) => void>;
            onDisconnect: WebExtEvent<(port: Port) => void>;
        }

        /**
         * An object containing information about the script context that sent a
         * message or request.
         */
        export interface MessageSender {
            /**
             * The `tabs.Tab` which opened the connection, if any. This property will
             * **only** be present when the connection was opened from a tab
             * (including content scripts), and **only** if the receiver is an
             * extension, not an app.
             */
            tab?: tabs.Tab | undefined;
            /**
             * The frame that opened the connection. 0 for top-level frames, positive
             * for child frames. This will only be set when `tab` is set.
             */
            frameId?: number | undefined;
            /** The ID of the extension or app that opened the connection, if any. */
            id?: string | undefined;
            /**
             * The URL of the page or frame that opened the connection. If the sender
             * is in an iframe, it will be iframe's URL not the URL of the page which
             * hosts it.
             */
            url?: string | undefined;
            /**
             * The TLS channel ID of the page or frame that opened the connection, if
             * requested by the extension or app, and if available.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            tlsChannelId?: string | undefined;
        }

        /** The operating system the browser is running on. */
        export type PlatformOs = "mac" | "win" | "android" | "cros" | "linux" | "openbsd";

        /** The machine's processor architecture. */
        export type PlatformArch = "aarch64" | "arm" | "ppc64" | "s390x" | "sparc64" | "x86-32" | "x86-64" | "noarch";

        /** An object containing information about the current platform. */
        export interface PlatformInfo {
            /** The operating system the browser is running on. */
            os: PlatformOs;
            /** The machine's processor architecture. */
            arch: PlatformArch;
            /**
             * The native client architecture. This may be different from arch on
             * some platforms.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            nacl_arch?: PlatformNaclArch | undefined;
        }

        /** An object containing information about the current browser. */
        export interface BrowserInfo {
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
        export type RequestUpdateCheckStatus = "throttled" | "no_update" | "update_available";

        /** The reason that this event is being dispatched. */
        export type OnInstalledReason = "install" | "update" | "browser_update";

        /**
         * The reason that the event is being dispatched. 'app_update' is used
         * when the restart is needed because the application is updated to a
         * newer version. 'os_update' is used when the restart is needed because
         * the browser/OS is updated to a newer version. 'periodic' is used when
         * the system runs for more than the permitted uptime set in the
         * enterprise policy.
         */
        export type OnRestartRequiredReason = "app_update" | "os_update" | "periodic";

        export type PlatformNaclArch = "arm" | "x86-32" | "x86-64";

        /**
         * This will be defined during an API method callback if there was an
         * error
         */
        export interface _LastError {
            /** Details about the error which occurred. */
            message?: string | undefined;
        }

        /**
         * If an update is available, this contains more information about the
         * available update.
         */
        export interface _RequestUpdateCheckReturnDetails {
            /** The version of the available update. */
            version: string;
        }

        export interface _ConnectConnectInfo {
            /**
             * Will be passed into onConnect for processes that are listening for the
             * connection event.
             */
            name?: string | undefined;
            /**
             * Whether the TLS channel ID will be passed into onConnectExternal for
             * processes that are listening for the connection event.
             */
            includeTlsChannelId?: boolean | undefined;
        }

        export interface _SendMessageOptions {
            /**
             * Whether the TLS channel ID will be passed into onMessageExternal for
             * processes that are listening for the connection event.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            includeTlsChannelId?: boolean | undefined;
        }

        type DirectoryEntry = any;

        export interface _OnInstalledDetails {
            /** The reason that this event is being dispatched. */
            reason: OnInstalledReason;
            /**
             * Indicates the previous version of the extension, which has just been
             * updated. This is present only if 'reason' is 'update'.
             */
            previousVersion?: string | undefined;
            /** Indicates whether the addon is installed as a temporary extension. */
            temporary: boolean;
            /**
             * Indicates the ID of the imported shared module extension which
             * updated. This is present only if 'reason' is 'shared_module_update'.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            id?: string | undefined;
        }

        /** The manifest details of the available update. */
        export interface _OnUpdateAvailableDetails {
            /** The version number of the available update. */
            version: string;
        }

        /* runtime properties */
        /**
         * This will be defined during an API method callback if there was an
         * error
         */
        export const lastError: _LastError | undefined;

        /** The ID of the extension/app. */
        export const id: string;

        /* runtime functions */
        /**
         * Retrieves the JavaScript 'window' object for the background page
         * running inside the current extension/app. If the background page is an
         * event page, the system will ensure it is loaded before calling the
         * callback. If there is no background page, an error is set.
         */
        export function getBackgroundPage(): Promise<Window>;

        /**
         * Open your Extension's options page, if possible.
         *
         * The precise behavior may depend on your manifest's `options_ui` or
         * `options_page` key, or what the browser happens to support at the
         * time.
         *
         * If your Extension does not declare an options page, or the browser
         * failed to create one for some other reason, the callback will set
         * `lastError`.
         */
        export function openOptionsPage(): Promise<void>;

        /**
         * Returns details about the app or extension from the manifest. The
         * object returned is a serialization of the full manifest file.
         */
        export function getManifest(): _manifest.WebExtensionManifest;

        /**
         * Converts a relative path within an app/extension install directory to
         * a fully-qualified URL.
         *
         * @param path A path to a resource within an app/extension expressed
         * relative to its install directory.
         *
         * @returns The fully-qualified URL to the resource.
         */
        export function getURL(path: string): string;

        /**
         * Get the frameId of any window global or frame element.
         *
         * @param target A WindowProxy or a Browsing Context container element
         * (IFrame, Frame, Embed, Object) for the target frame.
         *
         * @returns The frameId of the target frame, or -1 if it doesn't exist.
         */
        export function getFrameId(target: any): number;

        /**
         * Sets the URL to be visited upon uninstallation. This may be used to
         * clean up server-side data, do analytics, and implement surveys.
         * Maximum 255 characters.
         *
         * @param [url] URL to be opened after the extension is uninstalled. This
         * URL must have an http: or https: scheme. Set an empty string to not
         * open a new tab upon uninstallation.
         */
        export function setUninstallURL(url?: string): Promise<void>;

        /** Reloads the app or extension. */
        export function reload(): void;

        /**
         * Requests an update check for this app/extension.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function requestUpdateCheck(): Promise<object>;

        /**
         * Restart the device when the app runs in kiosk mode. Otherwise, it's
         * no-op.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function restart(): void;

        /**
         * Attempts to connect to connect listeners within an extension/app (such
         * as the background page), or other extensions/apps. This is useful for
         * content scripts connecting to their extension processes,
         * inter-app/extension communication, and web messaging. Note that this
         * does not connect to any listeners in a content script. Extensions may
         * connect to content scripts embedded in tabs via `tabs.connect`.
         *
         * @param extensionId The ID of the extension or app to connect to. If
         * omitted, a connection will be attempted with your own extension.
         * Required if sending messages from a web page for web messaging.
         *
         * @returns Port through which messages can be sent and received. The
         * port's `runtime.Port onDisconnect` event is fired if the extension/app
         * does not exist.
         */
        export function connect(extensionId: string, connectInfo?: _ConnectConnectInfo): Port;
        /**
         * Attempts to connect to connect listeners within an extension/app (such
         * as the background page), or other extensions/apps. This is useful for
         * content scripts connecting to their extension processes,
         * inter-app/extension communication, and web messaging. Note that this
         * does not connect to any listeners in a content script. Extensions may
         * connect to content scripts embedded in tabs via `tabs.connect`.
         *
         * @returns Port through which messages can be sent and received. The
         * port's `runtime.Port onDisconnect` event is fired if the extension/app
         * does not exist.
         */
        export function connect(connectInfo?: _ConnectConnectInfo): Port;

        /**
         * Connects to a native application in the host machine.
         *
         * Not allowed in: Devtools pages
         *
         * @param application The name of the registered application to connect
         * to.
         *
         * @returns Port through which messages can be sent and received with the
         * application
         */
        export function connectNative(application: string): Port;

        /**
         * Sends a single message to event listeners within your extension/app or
         * a different extension/app. Similar to `runtime.connect` but only sends
         * a single message, with an optional response. If sending to your
         * extension, the `runtime.onMessage` event will be fired in each page,
         * or `runtime.onMessageExternal`, if a different extension. Note that
         * extensions cannot send messages to content scripts using this method.
         * To send messages to content scripts, use `tabs.sendMessage`.
         *
         * @param extensionId The ID of the extension/app to send the message to.
         * If omitted, the message will be sent to your own extension/app.
         * Required if sending messages from a web page for web messaging.
         */
        export function sendMessage(extensionId: string, message: any, options?: _SendMessageOptions): Promise<any>;
        /**
         * Sends a single message to event listeners within your extension/app or
         * a different extension/app. Similar to `runtime.connect` but only sends
         * a single message, with an optional response. If sending to your
         * extension, the `runtime.onMessage` event will be fired in each page,
         * or `runtime.onMessageExternal`, if a different extension. Note that
         * extensions cannot send messages to content scripts using this method.
         * To send messages to content scripts, use `tabs.sendMessage`.
         */
        export function sendMessage(message: any, options?: _SendMessageOptions): Promise<any>;

        /**
         * Send a single message to a native application.
         *
         * Not allowed in: Devtools pages
         *
         * @param application The name of the native messaging host.
         *
         * @param message The message that will be passed to the native messaging
         * host.
         */
        export function sendNativeMessage(application: string, message: any): Promise<any>;

        /** Returns information about the current browser. */
        export function getBrowserInfo(): Promise<BrowserInfo>;

        /** Returns information about the current platform. */
        export function getPlatformInfo(): Promise<PlatformInfo>;

        /**
         * Returns a DirectoryEntry for the package directory.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function getPackageDirectoryEntry(): Promise<DirectoryEntry>;

        /* runtime events */
        /**
         * Fired when a profile that has this extension installed first starts
         * up. This event is not fired for incognito profiles.
         */
        export const onStartup: WebExtEvent<() => void>;

        /**
         * Fired when the extension is first installed, when the extension is
         * updated to a new version, and when the browser is updated to a new
         * version.
         */
        export const onInstalled: WebExtEvent<(details: _OnInstalledDetails) => void>;

        /**
         * Sent to the event page just before it is unloaded. This gives the
         * extension opportunity to do some clean up. Note that since the page is
         * unloading, any asynchronous operations started while handling this
         * event are not guaranteed to complete. If more activity for the event
         * page occurs before it gets unloaded the onSuspendCanceled event will
         * be sent and the page won't be unloaded.
         */
        export const onSuspend: WebExtEvent<() => void>;

        /**
         * Sent after onSuspend to indicate that the app won't be unloaded after
         * all.
         */
        export const onSuspendCanceled: WebExtEvent<() => void>;

        /**
         * Fired when an update is available, but isn't installed immediately
         * because the app is currently running. If you do nothing, the update
         * will be installed the next time the background page gets unloaded, if
         * you want it to be installed sooner you can explicitly call
         * `runtime.reload`. If your extension is using a persistent background
         * page, the background page of course never gets unloaded, so unless you
         * call `runtime.reload` manually in response to this event the update
         * will not get installed until the next time the browser itself
         * restarts. If no handlers are listening for this event, and your
         * extension has a persistent background page, it behaves as if
         * `runtime.reload` is called in response to this event.
         *
         * @param details The manifest details of the available update.
         */
        export const onUpdateAvailable: WebExtEvent<(details: _OnUpdateAvailableDetails) => void>;

        /**
         * Fired when an update for the browser is available, but isn't installed
         * immediately because a browser restart is required.
         *
         * @deprecated Please use `runtime.onRestartRequired`.
         */
        export const onBrowserUpdateAvailable: WebExtEvent<() => void> | undefined;

        /**
         * Fired when a connection is made from either an extension process or a
         * content script.
         */
        export const onConnect: WebExtEvent<(port: Port) => void>;

        /** Fired when a connection is made from another extension. */
        export const onConnectExternal: WebExtEvent<(port: Port) => void>;

        /**
         * Fired when a message is sent from either an extension process or a
         * content script.
         *
         * @param message The message sent by the calling script.
         *
         * @param sendResponse Function to call (at most once) when you have a
         * response. The argument should be any JSON-ifiable object. If you have
         * more than one `onMessage` listener in the same document, then only one
         * may send a response. This function becomes invalid when the event
         * listener returns, unless you return true from the event listener to
         * indicate you wish to send a response asynchronously (this will keep
         * the message channel open to the other end until `sendResponse` is
         * called).
         *
         * @returns Return true from the event listener if you wish to call
         * `sendResponse` after the event listener returns.
         */
        export const onMessage: WebExtEvent<
            (
                message: any,
                sender: MessageSender,
                sendResponse: (response?: any) => void,
            ) => boolean | Promise<any> | void
        >;

        /**
         * Fired when a message is sent from another extension/app. Cannot be
         * used in a content script.
         *
         * @param message The message sent by the calling script.
         *
         * @param sendResponse Function to call (at most once) when you have a
         * response. The argument should be any JSON-ifiable object. If you have
         * more than one `onMessage` listener in the same document, then only one
         * may send a response. This function becomes invalid when the event
         * listener returns, unless you return true from the event listener to
         * indicate you wish to send a response asynchronously (this will keep
         * the message channel open to the other end until `sendResponse` is
         * called).
         *
         * @returns Return true from the event listener if you wish to call
         * `sendResponse` after the event listener returns.
         */
        export const onMessageExternal: WebExtEvent<
            (
                message: any,
                sender: MessageSender,
                sendResponse: (response?: any) => void,
            ) => boolean | Promise<any> | void
        >;

        /**
         * Fired when an app or the device that it runs on needs to be restarted.
         * The app should close all its windows at its earliest convenient time
         * to let the restart to happen. If the app does nothing, a restart will
         * be enforced after a 24-hour grace period has passed. Currently, this
         * event is only fired for Chrome OS kiosk apps.
         *
         * @param reason The reason that the event is being dispatched.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export const onRestartRequired: WebExtEvent<(reason: OnRestartRequiredReason) => void> | undefined;
    }

    /**
     * Use the `messenger.storage` API to store, retrieve, and track changes
     * to user data.
     *
     * Permissions: `storage`
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage
     */
    export namespace storage {
        /* storage types */
        export interface StorageChange {
            /** The old value of the item, if there was an old value. */
            oldValue?: any;
            /** The new value of the item, if there is a new value. */
            newValue?: any;
        }

        export interface StorageArea {
            /**
             * Gets one or more items from storage.
             *
             * @param [keys] A single key to get, list of keys to get, or a
             * dictionary specifying default values (see description of the object).
             * An empty list or object will return an empty result object. Pass in
             * `null` to get the entire contents of storage.
             */
            get(keys?: string | string[] | { [key: string]: any }): Promise<{ [key: string]: any }>;
            /**
             * Gets the amount of space (in bytes) being used by one or more items.
             *
             * @param [keys] A single key or list of keys to get the total usage for.
             * An empty list will return 0\. Pass in `null` to get the total usage of
             * all of storage.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            getBytesInUse?(keys?: string | string[]): Promise<number>;
            /**
             * Sets multiple items.
             *
             * @param items An object which gives each key/value pair to update
             * storage with. Any other key/value pairs in storage will not be
             * affected.
             *
             * Primitive values such as numbers will serialize as expected. Values
             * with a `typeof` `"object"` and `"function"` will typically serialize
             * to `{}`, with the exception of `Array` (serializes as expected),
             * `Date`, and `Regex` (serialize using their `String` representation).
             */
            set(items: { [key: string]: any }): Promise<void>;
            /**
             * Removes one or more items from storage.
             *
             * @param keys A single key or a list of keys for items to remove.
             */
            remove(keys: string | string[]): Promise<void>;
            /** Removes all items from storage. */
            clear(): Promise<void>;
            /**
             * Fired when one or more items change.
             *
             * @param changes Object mapping each key that changed to its
             * corresponding `storage.StorageChange` for that item.
             */
            onChanged: WebExtEvent<(changes: { [key: string]: StorageChange }) => void>;
        }

        export interface StorageAreaSync {
            /**
             * Gets one or more items from storage.
             *
             * @param [keys] A single key to get, list of keys to get, or a
             * dictionary specifying default values (see description of the object).
             * An empty list or object will return an empty result object. Pass in
             * `null` to get the entire contents of storage.
             */
            get(keys?: string | string[] | { [key: string]: any }): Promise<{ [key: string]: any }>;
            /**
             * Gets the amount of space (in bytes) being used by one or more items.
             *
             * @param [keys] A single key or list of keys to get the total usage for.
             * An empty list will return 0\. Pass in `null` to get the total usage of
             * all of storage.
             */
            getBytesInUse(keys?: string | string[]): Promise<number>;
            /**
             * Sets multiple items.
             *
             * @param items An object which gives each key/value pair to update
             * storage with. Any other key/value pairs in storage will not be
             * affected.
             *
             * Primitive values such as numbers will serialize as expected. Values
             * with a `typeof` `"object"` and `"function"` will typically serialize
             * to `{}`, with the exception of `Array` (serializes as expected),
             * `Date`, and `Regex` (serialize using their `String` representation).
             */
            set(items: { [key: string]: any }): Promise<void>;
            /**
             * Removes one or more items from storage.
             *
             * @param keys A single key or a list of keys for items to remove.
             */
            remove(keys: string | string[]): Promise<void>;
            /** Removes all items from storage. */
            clear(): Promise<void>;
            /**
             * Fired when one or more items change.
             *
             * @param changes Object mapping each key that changed to its
             * corresponding `storage.StorageChange` for that item.
             */
            onChanged: WebExtEvent<(changes: { [key: string]: StorageChange }) => void>;
        }

        /* storage properties */
        /** Items in the `sync` storage area are synced by the browser. */
        export const sync: StorageAreaSync;

        /** Items in the `local` storage area are local to each machine. */
        export const local: StorageArea;

        /**
         * Items in the `managed` storage area are set by administrators or
         * native applications, and are read-only for the extension; trying to
         * modify this namespace results in an error.
         */
        export const managed: StorageArea;

        /* storage events */
        /**
         * Fired when one or more items change.
         *
         * @param changes Object mapping each key that changed to its
         * corresponding `storage.StorageChange` for that item.
         *
         * @param areaName The name of the storage area (`"sync"`, `"local"` or
         * `"managed"`) the changes are for.
         */
        export const onChanged: WebExtEvent<(changes: { [key: string]: StorageChange }, areaName: string) => void>;
    }

    /**
     * Contains types used by other schemas.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/types
     */
    export namespace types {
        /* types types */
        /**
         * The scope of the Setting. One of
         *
         * - `regular`: setting for the regular profile (which is inherited by
         *   the incognito profile if not overridden elsewhere),
         * - `regular_only`: setting for the regular profile only (not inherited
         *   by the incognito profile),
         * - `incognito_persistent`: setting for the incognito profile that
         *   survives browser restarts (overrides regular preferences),
         * - `incognito_session_only`: setting for the incognito profile that can
         *   only be set during an incognito session and is deleted when the
         *   incognito session ends (overrides regular and incognito_persistent
         *   preferences).
         *
         * Only `regular` is supported by Firefox at this time.
         */
        export type SettingScope = "regular" | "regular_only" | "incognito_persistent" | "incognito_session_only";

        /**
         * One of
         *
         * - `not_controllable`: cannot be controlled by any extension
         * - `controlled_by_other_extensions`: controlled by extensions with
         *   higher precedence
         * - `controllable_by_this_extension`: can be controlled by this
         *   extension
         * - `controlled_by_this_extension`: controlled by this extension
         */
        export type LevelOfControl =
            | "not_controllable"
            | "controlled_by_other_extensions"
            | "controllable_by_this_extension"
            | "controlled_by_this_extension";

        export interface Setting {
            /**
             * Gets the value of a setting.
             *
             * @param details Which setting to consider.
             */
            get(details: _GetDetails): Promise<_GetReturnDetails>;
            /**
             * Sets the value of a setting.
             *
             * @param details Which setting to change.
             */
            set(details: _SetDetails): Promise<void>;
            /**
             * Clears the setting, restoring any default value.
             *
             * @param details Which setting to clear.
             */
            clear(details: _ClearDetails): Promise<void>;
            /** Fired after the setting changes. */
            onChange: WebExtEvent<(details: _OnChangeDetails) => void>;
        }

        /** Details of the currently effective value. */
        export interface _GetReturnDetails {
            /** The value of the setting. */
            value: any;
            /** The level of control of the setting. */
            levelOfControl: LevelOfControl;
            /**
             * Whether the effective value is specific to the incognito session.
             * This property will _only_ be present if the `incognito` property in
             * the `details` parameter of `get()` was true.
             */
            incognitoSpecific?: boolean | undefined;
        }

        /** Which setting to consider. */
        export interface _GetDetails {
            /**
             * Whether to return the value that applies to the incognito session
             * (default false).
             */
            incognito?: boolean | undefined;
        }

        /** Which setting to change. */
        export interface _SetDetails {
            /**
             * The value of the setting.
             * Note that every setting has a specific value type, which is described
             * together with the setting. An extension should _not_ set a value of a
             * different type.
             */
            value: any;
            /** Where to set the setting (default: regular). */
            scope?: SettingScope | undefined;
        }

        /** Which setting to clear. */
        export interface _ClearDetails {
            /** Where to clear the setting (default: regular). */
            scope?: SettingScope | undefined;
        }

        export interface _OnChangeDetails {
            /** The value of the setting after the change. */
            value: any;
            /** The level of control of the setting. */
            levelOfControl: LevelOfControl;
            /**
             * Whether the value that has changed is specific to the incognito
             * session.
             * This property will _only_ be present if the user has enabled the
             * extension in incognito mode.
             */
            incognitoSpecific?: boolean | undefined;
        }
    }

    /**
     * Manifest keys: `user_scripts`, `user_scripts`
     *
     * Not supported on manifest versions above 2.
     *
     * Not allowed in: Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts
     */
    export namespace userScripts {
        /* userScripts types */
        /** Details of a user script */
        export interface UserScriptOptions {
            /** The list of JS files to inject */
            js: extensionTypes.ExtensionFileOrCode[];
            /** An opaque user script metadata value */
            scriptMetadata?: extensionTypes.PlainJSONValue | undefined;
            matches: _manifest.MatchPattern[];
            excludeMatches?: _manifest.MatchPattern[] | undefined;
            includeGlobs?: string[] | undefined;
            excludeGlobs?: string[] | undefined;
            /**
             * If allFrames is `true`, implies that the JavaScript should be injected
             * into all frames of current page. By default, it's `false` and is only
             * injected into the top frame.
             */
            allFrames?: boolean | undefined;
            /**
             * If matchAboutBlank is true, then the code is also injected in
             * about:blank and about:srcdoc frames if your extension has access to
             * its parent document. Code cannot be inserted in top-level
             * about:-frames. By default it is `false`.
             */
            matchAboutBlank?: boolean | undefined;
            /**
             * The soonest that the JavaScript will be injected into the tab.
             * Defaults to "document_idle".
             */
            runAt?: extensionTypes.RunAt | undefined;
            /**
             * limit the set of matched tabs to those that belong to the given cookie
             * store id
             */
            cookieStoreId?: string[] | string | undefined;
        }

        /** An object that represents a user script registered programmatically */
        export interface RegisteredUserScript {
            /** Unregister a user script registered programmatically */
            unregister(): Promise<any>;
        }

        export interface _OnBeforeScriptUserScript {
            /** The userScript metadata (as set in userScripts.register) */
            metadata: any;
            /** The userScript global */
            global: any;
            /**
             * Exports all the properties of a given plain object as userScript
             * globals
             *
             * @param sourceObject A plain object whose properties are exported as
             * userScript globals
             */
            defineGlobals: (sourceObject: object) => void;
            /**
             * Convert a given value to make it accessible to the userScript code
             *
             * @param value A value to convert into an object accessible to the
             * userScript
             */
            export: (value: any) => any;
        }

        /* userScripts functions */
        /**
         * Register a user script programmatically given its
         * `userScripts.UserScriptOptions`, and resolves to a
         * `userScripts.RegisteredUserScript` instance
         */
        export function register(userScriptOptions: UserScriptOptions): Promise<RegisteredUserScript>;

        /* userScripts events */
        /**
         * Event called when a new userScript global has been created
         *
         * Allowed in: Content scripts only
         */
        export const onBeforeScript: WebExtEvent<(userScript: _OnBeforeScriptUserScript) => void>;
    }

    /**
     * Use the `messenger.webNavigation` API to receive notifications about
     * the status of navigation requests in-flight.
     *
     * Permissions: `webNavigation`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation
     */
    export namespace webNavigation {
        /* webNavigation types */
        /**
         * Cause of the navigation. The same transition types as defined in the
         * history API are used. These are the same transition types as defined
         * in the history API except with `"start_page"` in place of
         * `"auto_toplevel"` (for backwards compatibility).
         */
        export type TransitionType =
            | "link"
            | "typed"
            | "auto_bookmark"
            | "auto_subframe"
            | "manual_subframe"
            | "generated"
            | "start_page"
            | "form_submit"
            | "reload"
            | "keyword"
            | "keyword_generated";

        export type TransitionQualifier = "client_redirect" | "server_redirect" | "forward_back" | "from_address_bar";

        export interface EventUrlFilters {
            url: events.UrlFilter[];
        }

        /**
         * Information about the requested frame, null if the specified frame ID
         * and/or tab ID are invalid.
         */
        export interface _GetFrameReturnDetails {
            /**
             * True if the last navigation in this frame was interrupted by an error,
             * i.e. the onErrorOccurred event fired.
             */
            errorOccurred?: boolean | undefined;
            /**
             * The URL currently associated with this frame, if the frame identified
             * by the frameId existed at one point in the given tab. The fact that an
             * URL is associated with a given frameId does not imply that the
             * corresponding frame still exists.
             */
            url: string;
            /** The ID of the tab in which the frame is. */
            tabId: number;
            /**
             * The ID of the frame. 0 indicates that this is the main frame; a
             * positive value indicates the ID of a subframe.
             */
            frameId: number;
            /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
            parentFrameId: number;
        }

        /** Information about the frame to retrieve information about. */
        export interface _GetFrameDetails {
            /** The ID of the tab in which the frame is. */
            tabId: number;
            /** The ID of the process runs the renderer for this tab. */
            processId?: number | undefined;
            /** The ID of the frame in the given tab. */
            frameId: number;
        }

        export interface _GetAllFramesReturnDetails {
            /**
             * True if the last navigation in this frame was interrupted by an error,
             * i.e. the onErrorOccurred event fired.
             */
            errorOccurred?: boolean | undefined;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /** The ID of the tab in which the frame is. */
            tabId: number;
            /**
             * The ID of the frame. 0 indicates that this is the main frame; a
             * positive value indicates the ID of a subframe.
             */
            frameId: number;
            /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
            parentFrameId: number;
            /** The URL currently associated with this frame. */
            url: string;
        }

        /** Information about the tab to retrieve all frames from. */
        export interface _GetAllFramesDetails {
            /** The ID of the tab. */
            tabId: number;
        }

        export interface _OnBeforeNavigateDetails {
            /** The ID of the tab in which the navigation is about to occur. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique for a given tab and process.
             */
            frameId: number;
            /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
            parentFrameId: number;
            /**
             * The time when the browser was about to start the navigation, in
             * milliseconds since the epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnBeforeNavigateEvent<TCallback = (details: _OnBeforeNavigateDetails) => void> {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnCommittedDetails {
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique within a tab.
             */
            frameId: number;
            /**
             * Cause of the navigation.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            transitionType?: TransitionType | undefined;
            /**
             * A list of transition qualifiers.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            transitionQualifiers?: TransitionQualifier[] | undefined;
            /**
             * The time when the navigation was committed, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnCommittedEvent<TCallback = (details: _OnCommittedDetails) => void> {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnDOMContentLoadedDetails {
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique within a tab.
             */
            frameId: number;
            /**
             * The time when the page's DOM was fully constructed, in milliseconds
             * since the epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnDOMContentLoadedEvent<
            TCallback = (details: _OnDOMContentLoadedDetails) => void,
        > {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnCompletedDetails {
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique within a tab.
             */
            frameId: number;
            /**
             * The time when the document finished loading, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnCompletedEvent<TCallback = (details: _OnCompletedDetails) => void> {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnErrorOccurredDetails {
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique within a tab.
             */
            frameId: number;
            /**
             * The error description.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            error?: string | undefined;
            /** The time when the error occurred, in milliseconds since the epoch. */
            timeStamp: number;
        }

        export interface _WebNavigationOnErrorOccurredEvent<TCallback = (details: _OnErrorOccurredDetails) => void> {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnCreatedNavigationTargetDetails {
            /** The ID of the tab in which the navigation is triggered. */
            sourceTabId: number;
            /** The ID of the process runs the renderer for the source tab. */
            sourceProcessId: number;
            /**
             * The ID of the frame with sourceTabId in which the navigation is
             * triggered. 0 indicates the main frame.
             */
            sourceFrameId: number;
            /** The URL to be opened in the new window. */
            url: string;
            /** The ID of the tab in which the url is opened */
            tabId: number;
            /**
             * The time when the browser was about to create a new view, in
             * milliseconds since the epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnCreatedNavigationTargetEvent<
            TCallback = (details: _OnCreatedNavigationTargetDetails) => void,
        > {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnReferenceFragmentUpdatedDetails {
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique within a tab.
             */
            frameId: number;
            /**
             * Cause of the navigation.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            transitionType?: TransitionType | undefined;
            /**
             * A list of transition qualifiers.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            transitionQualifiers?: TransitionQualifier[] | undefined;
            /**
             * The time when the navigation was committed, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnReferenceFragmentUpdatedEvent<
            TCallback = (details: _OnReferenceFragmentUpdatedDetails) => void,
        > {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnTabReplacedDetails {
            /** The ID of the tab that was replaced. */
            replacedTabId: number;
            /** The ID of the tab that replaced the old tab. */
            tabId: number;
            /**
             * The time when the replacement happened, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
        }

        export interface _OnHistoryStateUpdatedDetails {
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique within a tab.
             */
            frameId: number;
            /**
             * Cause of the navigation.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            transitionType?: TransitionType | undefined;
            /**
             * A list of transition qualifiers.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            transitionQualifiers?: TransitionQualifier[] | undefined;
            /**
             * The time when the navigation was committed, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnHistoryStateUpdatedEvent<
            TCallback = (details: _OnHistoryStateUpdatedDetails) => void,
        > {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        /* webNavigation functions */
        /**
         * Retrieves information about the given frame. A frame refers to an
         * <iframe> or a <frame> of a web page and is identified by a tab ID and
         * a frame ID.
         *
         * @param details Information about the frame to retrieve information
         * about.
         */
        export function getFrame(details: _GetFrameDetails): Promise<_GetFrameReturnDetails>;

        /**
         * Retrieves information about all frames of a given tab.
         *
         * @param details Information about the tab to retrieve all frames from.
         */
        export function getAllFrames(details: _GetAllFramesDetails): Promise<_GetAllFramesReturnDetails[]>;

        /* webNavigation events */
        /** Fired when a navigation is about to occur. */
        export const onBeforeNavigate: _WebNavigationOnBeforeNavigateEvent;

        /**
         * Fired when a navigation is committed. The document (and the resources
         * it refers to, such as images and subframes) might still be
         * downloading, but at least part of the document has been received from
         * the server and the browser has decided to switch to the new document.
         */
        export const onCommitted: _WebNavigationOnCommittedEvent;

        /**
         * Fired when the page's DOM is fully constructed, but the referenced
         * resources may not finish loading.
         */
        export const onDOMContentLoaded: _WebNavigationOnDOMContentLoadedEvent;

        /**
         * Fired when a document, including the resources it refers to, is
         * completely loaded and initialized.
         */
        export const onCompleted: _WebNavigationOnCompletedEvent;

        /**
         * Fired when an error occurs and the navigation is aborted. This can
         * happen if either a network error occurred, or the user aborted the
         * navigation.
         */
        export const onErrorOccurred: _WebNavigationOnErrorOccurredEvent;

        /**
         * Fired when a new window, or a new tab in an existing window, is
         * created to host a navigation.
         */
        export const onCreatedNavigationTarget: _WebNavigationOnCreatedNavigationTargetEvent;

        /**
         * Fired when the reference fragment of a frame was updated. All future
         * events for that frame will use the updated URL.
         */
        export const onReferenceFragmentUpdated: _WebNavigationOnReferenceFragmentUpdatedEvent;

        /**
         * Fired when the contents of the tab is replaced by a different (usually
         * previously pre-rendered) tab.
         */
        export const onTabReplaced: WebExtEvent<(details: _OnTabReplacedDetails) => void>;

        /**
         * Fired when the frame's history was updated to a new URL. All future
         * events for that frame will use the updated URL.
         */
        export const onHistoryStateUpdated: _WebNavigationOnHistoryStateUpdatedEvent;
    }

    /**
     * Use the `messenger.webRequest` API to observe and analyze traffic and
     * to intercept, block, or modify requests in-flight.
     *
     * Permissions: `webRequest`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest
     */
    export namespace webRequest {
        /* webRequest types */
        export type ResourceType =
            | "main_frame"
            | "sub_frame"
            | "stylesheet"
            | "script"
            | "image"
            | "object"
            | "object_subrequest"
            | "xmlhttprequest"
            | "xslt"
            | "ping"
            | "beacon"
            | "xml_dtd"
            | "font"
            | "media"
            | "websocket"
            | "csp_report"
            | "imageset"
            | "web_manifest"
            | "speculative"
            | "other";

        export type OnBeforeRequestOptions = "blocking" | "requestBody";

        export type OnBeforeSendHeadersOptions = "requestHeaders" | "blocking";

        export type OnSendHeadersOptions = "requestHeaders";

        export type OnHeadersReceivedOptions = "blocking" | "responseHeaders";

        export type OnAuthRequiredOptions = "responseHeaders" | "blocking" | "asyncBlocking";

        export type OnResponseStartedOptions = "responseHeaders";

        export type OnBeforeRedirectOptions = "responseHeaders";

        export type OnCompletedOptions = "responseHeaders";

        /** An object describing filters to apply to webRequest events. */
        export interface RequestFilter {
            /**
             * A list of URLs or URL patterns. Requests that cannot match any of the
             * URLs will be filtered out.
             */
            urls: string[];
            /**
             * A list of request types. Requests that cannot match any of the types
             * will be filtered out.
             */
            types?: ResourceType[] | undefined;
            tabId?: number | undefined;
            windowId?: number | undefined;
            /**
             * If provided, requests that do not match the incognito state will be
             * filtered out.
             */
            incognito?: boolean | undefined;
        }

        /**
         * An array of HTTP headers. Each header is represented as a dictionary
         * containing the keys `name` and either `value` or `binaryValue`.
         */
        export type HttpHeaders = _HttpHeaders[];

        /**
         * Returns value for event handlers that have the 'blocking'
         * extraInfoSpec applied. Allows the event handler to modify network
         * requests.
         */
        export interface BlockingResponse {
            /**
             * If true, the request is cancelled. Used in onBeforeRequest, this
             * prevents the request from being sent.
             */
            cancel?: boolean | undefined;
            /**
             * Only used as a response to the onBeforeRequest and onHeadersReceived
             * events. If set, the original request is prevented from being
             * sent/completed and is instead redirected to the given URL.
             * Redirections to non-HTTP schemes such as data: are allowed. Redirects
             * initiated by a redirect action use the original request method for the
             * redirect, with one exception: If the redirect is initiated at the
             * onHeadersReceived stage, then the redirect will be issued using the
             * GET method.
             */
            redirectUrl?: string | undefined;
            /**
             * Only used as a response to the onBeforeRequest event. If set, the
             * original request is prevented from being sent/completed and is instead
             * upgraded to a secure request. If any extension returns `redirectUrl`
             * during onBeforeRequest, `upgradeToSecure` will have no affect.
             */
            upgradeToSecure?: boolean | undefined;
            /**
             * Only used as a response to the onBeforeSendHeaders event. If set, the
             * request is made with these request headers instead.
             */
            requestHeaders?: HttpHeaders | undefined;
            /**
             * Only used as a response to the onHeadersReceived event. If set, the
             * server is assumed to have responded with these response headers
             * instead. Only return `responseHeaders` if you really want to modify
             * the headers in order to limit the number of conflicts (only one
             * extension may modify `responseHeaders` for each request).
             */
            responseHeaders?: HttpHeaders | undefined;
            /**
             * Only used as a response to the onAuthRequired event. If set, the
             * request is made using the supplied credentials.
             */
            authCredentials?: _BlockingResponseAuthCredentials | undefined;
        }

        /**
         * Contains the certificate properties of the request if it is a secure
         * request.
         */
        export interface CertificateInfo {
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

        export type CertificateTransparencyStatus =
            | "not_applicable"
            | "policy_compliant"
            | "policy_not_enough_scts"
            | "policy_not_diverse_scts";

        export type TransportWeaknessReasons = "cipher";

        /**
         * Contains the security properties of the request (ie. SSL/TLS
         * information).
         */
        export interface SecurityInfo {
            state: _SecurityInfoState;
            /** Error message if state is "broken" */
            errorMessage?: string | undefined;
            /** Protocol version if state is "secure" */
            protocolVersion?: _SecurityInfoProtocolVersion | undefined;
            /** The cipher suite used in this request if state is "secure". */
            cipherSuite?: string | undefined;
            /** The key exchange algorithm used in this request if state is "secure". */
            keaGroupName?: string | undefined;
            /** The length (in bits) of the secret key. */
            secretKeyLength?: number | undefined;
            /** The signature scheme used in this request if state is "secure". */
            signatureSchemeName?: string | undefined;
            /**
             * Certificate data if state is "secure". Will only contain one entry
             * unless `certificateChain` is passed as an option.
             */
            certificates: CertificateInfo[];
            /**
             * The type of certificate error that was overridden for this connection,
             * if any.
             */
            overridableErrorCategory?: _SecurityInfoOverridableErrorCategory | undefined;
            /**
             * The domain name does not match the certificate domain.
             *
             * @deprecated Please use `SecurityInfo.overridableErrorCategory`.
             */
            isDomainMismatch?: boolean | undefined;
            /**
             * The certificate is either expired or is not yet valid. See
             * `CertificateInfo.validity` for start and end dates.
             *
             * @deprecated Please use `SecurityInfo.overridableErrorCategory`.
             */
            isNotValidAtThisTime?: boolean | undefined;
            /** @deprecated Please use `SecurityInfo.overridableErrorCategory`. */
            isUntrusted?: boolean | undefined;
            isExtendedValidation?: boolean | undefined;
            /**
             * Certificate transparency compliance per RFC 6962\. See
             * `https://www.certificate-transparency.org/what-is-ct` for more
             * information.
             */
            certificateTransparencyStatus?: CertificateTransparencyStatus | undefined;
            /** True if host uses Strict Transport Security and state is "secure". */
            hsts?: boolean | undefined;
            /** True if host uses Public Key Pinning and state is "secure". */
            hpkp?: string | undefined;
            /**
             * list of reasons that cause the request to be considered weak, if state
             * is "weak"
             */
            weaknessReasons?: TransportWeaknessReasons[] | undefined;
        }

        /** Contains data uploaded in a URL request. */
        export interface UploadData {
            /** An ArrayBuffer with a copy of the data. */
            bytes?: any;
            /** A string with the file's path and name. */
            file?: string | undefined;
        }

        /** Tracking flags that match our internal tracking classification */
        export type UrlClassificationFlags =
            | "fingerprinting"
            | "fingerprinting_content"
            | "cryptomining"
            | "cryptomining_content"
            | "emailtracking"
            | "emailtracking_content"
            | "tracking"
            | "tracking_ad"
            | "tracking_analytics"
            | "tracking_social"
            | "tracking_content"
            | "any_basic_tracking"
            | "any_strict_tracking"
            | "any_social_tracking";

        /**
         * If the request has been classified this is an array of
         * `UrlClassificationFlags`.
         */
        export type UrlClassificationParty = UrlClassificationFlags[];

        export interface UrlClassification {
            /**
             * Classification flags if the request has been classified and it is
             * first party.
             */
            firstParty: UrlClassificationParty;
            /**
             * Classification flags if the request has been classified and it or its
             * window hierarchy is third party.
             */
            thirdParty: UrlClassificationParty;
        }

        /** An object you can use to monitor and modify HTTP responses. */
        export interface StreamFilter {
            /** Describes the current status of the stream. */
            status: _StreamFilterStatus;
            /**
             * A string that will contain an error message after the onerror event
             * has fired.
             */
            error: string;
            /** Event handler which is called when an error has occurred. */
            onerror: ((event: Event) => void) | null;
            /**
             * Event handler which is called when the stream has no more data to
             * deliver and has closed.
             */
            onstop: ((event: Event) => void) | null;
            /**
             * Event handler which is called when the stream is about to start
             * receiving data.
             */
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

        export interface _HttpHeaders {
            /** Name of the HTTP header. */
            name: string;
            /** Value of the HTTP header if it can be represented by UTF-8. */
            value?: string | undefined;
            /**
             * Value of the HTTP header if it cannot be represented by UTF-8, stored
             * as individual byte values (0..255).
             */
            binaryValue?: number[] | undefined;
        }

        /**
         * Only used as a response to the onAuthRequired event. If set, the
         * request is made using the supplied credentials.
         */
        export interface _BlockingResponseAuthCredentials {
            username: string;
            password: string;
        }

        /** Contains start and end timestamps. */
        export interface _CertificateInfoValidity {
            start: number;
            end: number;
        }

        export interface _CertificateInfoFingerprint {
            sha1: string;
            sha256: string;
        }

        export interface _CertificateInfoSubjectPublicKeyInfoDigest {
            sha256: string;
        }

        export type _SecurityInfoState = "insecure" | "weak" | "broken" | "secure";

        /** Protocol version if state is "secure" */
        export type _SecurityInfoProtocolVersion = "TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | "unknown";

        /**
         * The type of certificate error that was overridden for this connection,
         * if any.
         */
        export type _SecurityInfoOverridableErrorCategory =
            | "trust_error"
            | "domain_mismatch"
            | "expired_or_not_yet_valid";

        /** Describes the current status of the stream. */
        export type _StreamFilterStatus =
            | "uninitialized"
            | "transferringdata"
            | "finishedtransferringdata"
            | "suspended"
            | "closed"
            | "disconnected"
            | "failed";

        interface _StreamFilterOndataEvent extends Event {
            data: ArrayBuffer;
        }

        export interface _GetSecurityInfoOptions {
            /** Include the entire certificate chain. */
            certificateChain?: boolean | undefined;
            /** Include raw certificate data for processing by the extension. */
            rawDER?: boolean | undefined;
        }

        /**
         * Contains the HTTP request body data. Only provided if extraInfoSpec
         * contains 'requestBody'.
         */
        export interface _OnBeforeRequestDetailsRequestBody {
            /** Errors when obtaining request body data. */
            error?: string | undefined;
            /**
             * If the request method is POST and the body is a sequence of key-value
             * pairs encoded in UTF8, encoded as either multipart/form-data, or
             * application/x-www-form-urlencoded, this dictionary is present and for
             * each key contains the list of all values for that key. If the data is
             * of another media type, or if it is malformed, the dictionary is not
             * present. An example value of this dictionary is {'key': ['value1',
             * 'value2']}.
             */
            formData?: object | undefined;
            /**
             * If the request method is PUT or POST, and the body is not already
             * parsed in formData, then the unparsed request body elements are
             * contained in this array.
             */
            raw?: UploadData[] | undefined;
        }

        export interface _OnBeforeRequestDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * Contains the HTTP request body data. Only provided if extraInfoSpec
             * contains 'requestBody'.
             */
            requestBody?: _OnBeforeRequestDetailsRequestBody | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnBeforeRequestEvent<
            TCallback = (details: _OnBeforeRequestDetails) => BlockingResponse | Promise<BlockingResponse> | void,
        > {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnBeforeRequestOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnBeforeSendHeadersDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /**
             * The HTTP request headers that are going to be sent out with this
             * request.
             */
            requestHeaders?: HttpHeaders | undefined;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnBeforeSendHeadersEvent<
            TCallback = (details: _OnBeforeSendHeadersDetails) => BlockingResponse | Promise<BlockingResponse> | void,
        > {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnBeforeSendHeadersOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnSendHeadersDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /** The HTTP request headers that have been sent out with this request. */
            requestHeaders?: HttpHeaders | undefined;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnSendHeadersEvent<TCallback = (details: _OnSendHeadersDetails) => void> {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnSendHeadersOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnHeadersReceivedDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /**
             * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for
             * HTTP/0.9 responses (i.e., responses that lack a status line).
             */
            statusLine: string;
            /** The HTTP response headers that have been received with this response. */
            responseHeaders?: HttpHeaders | undefined;
            /** Standard HTTP status code returned by the server. */
            statusCode: number;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnHeadersReceivedEvent<
            TCallback = (details: _OnHeadersReceivedDetails) => BlockingResponse | Promise<BlockingResponse> | void,
        > {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnHeadersReceivedOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        /** The server requesting authentication. */
        export interface _OnAuthRequiredDetailsChallenger {
            host: string;
            port: number;
        }

        export interface _OnAuthRequiredDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
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
             * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for
             * HTTP/0.9 responses (i.e., responses that lack a status line) or an
             * empty string if there are no headers.
             */
            statusLine: string;
            /** Standard HTTP status code returned by the server. */
            statusCode: number;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnAuthRequiredEvent<
            TCallback = (details: _OnAuthRequiredDetails) => BlockingResponse | Promise<BlockingResponse> | void,
        > {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnAuthRequiredOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnResponseStartedDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /**
             * The server IP address that the request was actually sent to. Note that
             * it may be a literal IPv6 address.
             */
            ip?: string | undefined;
            /** Indicates if this response was fetched from disk cache. */
            fromCache: boolean;
            /** Standard HTTP status code returned by the server. */
            statusCode: number;
            /** The HTTP response headers that were received along with this response. */
            responseHeaders?: HttpHeaders | undefined;
            /**
             * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for
             * HTTP/0.9 responses (i.e., responses that lack a status line) or an
             * empty string if there are no headers.
             */
            statusLine: string;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnResponseStartedEvent<TCallback = (details: _OnResponseStartedDetails) => void> {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnResponseStartedOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnBeforeRedirectDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /**
             * The server IP address that the request was actually sent to. Note that
             * it may be a literal IPv6 address.
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
             * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for
             * HTTP/0.9 responses (i.e., responses that lack a status line) or an
             * empty string if there are no headers.
             */
            statusLine: string;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnBeforeRedirectEvent<TCallback = (details: _OnBeforeRedirectDetails) => void> {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnBeforeRedirectOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnCompletedDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /**
             * The server IP address that the request was actually sent to. Note that
             * it may be a literal IPv6 address.
             */
            ip?: string | undefined;
            /** Indicates if this response was fetched from disk cache. */
            fromCache: boolean;
            /** Standard HTTP status code returned by the server. */
            statusCode: number;
            /** The HTTP response headers that were received along with this response. */
            responseHeaders?: HttpHeaders | undefined;
            /**
             * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for
             * HTTP/0.9 responses (i.e., responses that lack a status line) or an
             * empty string if there are no headers.
             */
            statusLine: string;
            /** Tracking classification if the request has been classified. */
            urlClassification: UrlClassification;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
            /**
             * For http requests, the bytes transferred in the request. Only
             * available in onCompleted.
             */
            requestSize: number;
            /**
             * For http requests, the bytes received in the request. Only available
             * in onCompleted.
             */
            responseSize: number;
        }

        export interface _WebRequestOnCompletedEvent<TCallback = (details: _OnCompletedDetails) => void> {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnCompletedOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnErrorOccurredDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /**
             * The server IP address that the request was actually sent to. Note that
             * it may be a literal IPv6 address.
             */
            ip?: string | undefined;
            /** Indicates if this response was fetched from disk cache. */
            fromCache: boolean;
            /**
             * The error description. This string is _not_ guaranteed to remain
             * backwards compatible between releases. You must not parse and act
             * based upon its content.
             */
            error: string;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnErrorOccurredEvent<TCallback = (details: _OnErrorOccurredDetails) => void> {
            addListener(cb: TCallback, filter: RequestFilter): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        /* webRequest properties */
        /**
         * The maximum number of times that `handlerBehaviorChanged` can be
         * called per 10 minute sustained interval. `handlerBehaviorChanged` is
         * an expensive function call that shouldn't be called often.
         */
        export const MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

        /* webRequest functions */
        /**
         * Needs to be called when the behavior of the webRequest handlers has
         * changed to prevent incorrect handling due to caching. This function
         * call is expensive. Don't call it often.
         */
        export function handlerBehaviorChanged(): Promise<void>;

        /** ... */
        export function filterResponseData(requestId: string): StreamFilter;

        /**
         * Retrieves the security information for the request. Returns a promise
         * that will resolve to a SecurityInfo object.
         */
        export function getSecurityInfo(requestId: string, options?: _GetSecurityInfoOptions): Promise<SecurityInfo>;

        /* webRequest events */
        /**
         * Fired when a request is about to occur.
         *
         * @returns If "blocking" is specified in the "extraInfoSpec" parameter,
         * the event listener should return an object of this type.
         */
        export const onBeforeRequest: _WebRequestOnBeforeRequestEvent;

        /**
         * Fired before sending an HTTP request, once the request headers are
         * available. This may occur after a TCP connection is made to the
         * server, but before any HTTP data is sent.
         *
         * @returns If "blocking" is specified in the "extraInfoSpec" parameter,
         * the event listener should return an object of this type.
         */
        export const onBeforeSendHeaders: _WebRequestOnBeforeSendHeadersEvent;

        /**
         * Fired just before a request is going to be sent to the server
         * (modifications of previous onBeforeSendHeaders callbacks are visible
         * by the time onSendHeaders is fired).
         */
        export const onSendHeaders: _WebRequestOnSendHeadersEvent;

        /**
         * Fired when HTTP response headers of a request have been received.
         *
         * @returns If "blocking" is specified in the "extraInfoSpec" parameter,
         * the event listener should return an object of this type.
         */
        export const onHeadersReceived: _WebRequestOnHeadersReceivedEvent;

        /**
         * Fired when an authentication failure is received. The listener has
         * three options: it can provide authentication credentials, it can
         * cancel the request and display the error page, or it can take no
         * action on the challenge. If bad user credentials are provided, this
         * may be called multiple times for the same request.
         *
         * @returns If "blocking" is specified in the "extraInfoSpec" parameter,
         * the event listener should return an object of this type.
         */
        export const onAuthRequired: _WebRequestOnAuthRequiredEvent;

        /**
         * Fired when the first byte of the response body is received. For HTTP
         * requests, this means that the status line and response headers are
         * available.
         */
        export const onResponseStarted: _WebRequestOnResponseStartedEvent;

        /** Fired when a server-initiated redirect is about to occur. */
        export const onBeforeRedirect: _WebRequestOnBeforeRedirectEvent;

        /** Fired when a request is completed. */
        export const onCompleted: _WebRequestOnCompletedEvent;

        /** Fired when an error occurs. */
        export const onErrorOccurred: _WebRequestOnErrorOccurredEvent;
    }
}

/**
 * **The root object of the WebExtension API**
 *
 * In Thunderbird extensions, it is
 * [recommended](https://webextension-api.thunderbird.net/en/latest/#thunderbird-webextension-api-documentation)
 * to use `messenger` instead of `browser`, to remind yourself of the subtle
 * differences between the Thunderbird, Firefox, and generic WebExtension APIs.
 *
 * @version Thunderbird 109.0
 */
declare namespace browser {
    /**
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json
     */
    export namespace _manifest {
        /* _manifest types */
        export type OptionalPermission = OptionalPermissionNoPrompt | _OptionalPermission;

        export interface ActionManifest {
            /**
             * The label of the action button, defaults to its title. Can be set to
             * an empty string to not display any label. If the containing toolbar is
             * configured to display text only, the title will be used as fallback.
             */
            default_label?: string | undefined;
            /**
             * The title of the action button. This shows up in the tooltip and the
             * label. Defaults to the add-on name.
             */
            default_title?: string | undefined;
            /** The paths to one or more icons for the action button. */
            default_icon?: IconPath | undefined;
            /**
             * Specifies dark and light icons to be used with themes. The `light`
             * icon is used on dark backgrounds and vice versa. **Note:** The default
             * theme uses the `default_icon` for light backgrounds (if specified).
             */
            theme_icons?: ThemeIcons[] | undefined;
            /**
             * The html document to be opened as a popup when the user clicks on the
             * action button.
             */
            default_popup?: string | undefined;
            /**
             * Enable browser styles. See the MDN documentation on browser styles for
             * more information.
             */
            browser_style?: boolean | undefined;
            /**
             * Defines the location the action button will appear. The default
             * location is `maintoolbar`.
             */
            default_area?: _ActionManifestDefaultArea | undefined;
            /**
             * Defines the windows, the action button should appear in. Defaults to
             * showing it only in the `normal` Thunderbird window, but can also be
             * shown in the `messageDisplay` window.
             */
            default_windows?: _ActionManifestDefaultWindows[] | undefined;
        }

        /** Represents a WebExtension manifest.json file */
        export interface WebExtensionManifest {
            /** Needs at least manifest version 3. */
            action?: ActionManifest | undefined;
            /** Not supported on manifest versions above 2. */
            browser_action?: ActionManifest | undefined;
            chrome_settings_overrides?: _WebExtensionManifestChromeSettingsOverrides | undefined;
            cloud_file?: _WebExtensionManifestCloudFile | undefined;
            /**
             * A _dictionary object_ defining one or more commands as _name-value_
             * pairs, the _name_ being the name of the command and the _value_ being
             * a {@link commands.CommandsShortcut}. The _name_ may also be one of the
             * following built-in special shortcuts:
             *
             * - `_execute_browser_action`
             * - `_execute_compose_action`
             * - `_execute_message_display_action`
             *   Example:
             *   [manifest.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/commands/manifest.json)
             */
            commands?: { [key: string]: _WebExtensionManifestCommands } | undefined;
            compose_action?: _WebExtensionManifestComposeAction | undefined;
            message_display_action?: _WebExtensionManifestMessageDisplayAction | undefined;
            /**
             * A theme experiment allows modifying the user interface of Thunderbird
             * beyond what is currently possible using the built-in color, image and
             * property keys of {@link theme.ThemeType}. These experiments are a
             * precursor to proposing new theme features for inclusion in
             * Thunderbird. Experimentation is done by mapping internal CSS color,
             * image and property variables to new theme keys and using them in
             * {@link theme.ThemeType} and by loading additional style sheets to add
             * new CSS variables, extending the theme-able areas of Thunderbird. Can
             * be used in static and dynamic themes.
             */
            theme_experiment?: ThemeExperiment | undefined;
            /** Needs at least manifest version 3. */
            declarative_net_request?: _WebExtensionManifestDeclarativeNetRequest | undefined;
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
                    /** Not supported on manifest versions above 2. */
                    persistent?: boolean | undefined;
                }
                | {
                    scripts: ExtensionURL[];
                    /** Not supported on manifest versions above 2. */
                    persistent?: boolean | undefined;
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
            granted_host_permissions?: boolean | undefined;
            /** Needs at least manifest version 3. */
            host_permissions?: MatchPattern[] | undefined;
            optional_permissions?: OptionalPermissionOrOrigin[] | undefined;
            web_accessible_resources?:
                | string[]
                | Array<{
                    resources: string[];
                    matches?: MatchPattern[] | undefined;
                    extension_ids?: Array<ExtensionID | "*"> | undefined;
                }>
                | undefined;
            hidden?: boolean | undefined;
            page_action?: _WebExtensionManifestPageAction | undefined;
            telemetry?: _WebExtensionManifestTelemetry | undefined;
            /** Not supported on manifest versions above 2. */
            user_scripts?: _WebExtensionManifestUserScripts | undefined;
            manifest_version: number;
            /**
             * The applications property is deprecated, please use
             * 'browser_specific_settings'
             *
             * Not supported on manifest versions above 2.
             */
            applications?: BrowserSpecificSettings | undefined;
            browser_specific_settings?: BrowserSpecificSettings | undefined;
            name: string;
            short_name?: string | undefined;
            description?: string | undefined;
            author?: string | undefined;
            version: string;
            homepage_url?: string | undefined;
            install_origins?: string[] | undefined;
            developer?: _WebExtensionManifestDeveloper | undefined;
        }

        /**
         * Definition of a shortcut, for example `Alt+F5`. The string must match
         * the shortcut format as defined by the MDN page of the commands API .
         */
        export type KeyName = string;

        export type PermissionNoPrompt = OptionalPermissionNoPrompt | PermissionPrivileged | _PermissionNoPrompt;

        export type OptionalPermissionNoPrompt = _OptionalPermissionNoPrompt;

        /** Defines a color value. */
        export type ThemeColor = string | [number, number, number] | [number, number, number, number];

        /**
         * Defines additional color, image and property keys to be used in {@link theme.ThemeType},
         *  extending the theme-able areas of Thunderbird.
         */
        export interface ThemeExperiment {
            /**
             * URL to a stylesheet introducing additional CSS variables, extending
             * the theme-able areas of Thunderbird.
             *
             * The `theme_experiment` add-on in our
             * [example repository](https://github.com/thundernest/sample-extensions/tree/master/theme_experiment)
             * is using the stylesheet shown below, to add the
             * `--chat-button-color`
             * CSS color variable:
             * [theme_experiment_style.css](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/theme/theme_experiment_style.css).
             *
             * The following _manifest.json_ file maps the `--chat-button-color`
             * CSS
             * color variable to the theme color key `exp_chat_button` and uses it
             * to
             * set a color for the chat button:
             * [theme_experiment_manifest.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/theme/theme_experiment_manifest.json)
             */
            stylesheet?: ExtensionURL | undefined;
            /**
             * A _dictionary object_ with one or more _key-value_ pairs to map new
             * theme image keys to internal Thunderbird CSS image variables. The new
             * image key is usable as an image reference in {@link theme.ThemeType}.
             * Example:
             * [theme_experiment_image.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/theme/theme_experiment_image.json)
             */
            images?: { [key: string]: string } | undefined;
            /**
             * A _dictionary object_ with one or more _key-value_ pairs to map new
             * theme color keys to internal Thunderbird CSS color variables. The
             * example shown below maps the theme color key `popup_affordance` to the
             * CSS color variable --arrowpanel-dimmed. The new color key is usable as
             * a color reference in {@link theme.ThemeType}.
             * [theme_experiment_color.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/theme/theme_experiment_color.json)
             */
            colors?: { [key: string]: string } | undefined;
            /**
             * A _dictionary object_ with one or more _key-value_ pairs to map new
             * theme property keys to internal Thunderbird CSS property variables.
             * The new property key is usable as a property reference in {@link theme.ThemeType}.
             *  Example:
             * [theme_experiment_property.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/theme/theme_experiment_property.json)
             */
            properties?: { [key: string]: string } | undefined;
        }

        /** Contains the color, image and property settings of a theme. */
        export interface ThemeType {
            /**
             * A _dictionary object_ with one or more _key-value_ pairs to map images
             * to theme image keys. The following built-in theme image keys are
             * supported:
             */
            images?: _ThemeTypeImages | undefined;
            /**
             * A _dictionary object_ with one or more _key-value_ pairs to map color
             * values to theme color keys. The following built-in theme color keys
             * are supported:
             */
            colors?: _ThemeTypeColors | undefined;
            /**
             * A _dictionary object_ with one or more _key-value_ pairs to map
             * property values to theme property keys. The following built-in theme
             * property keys are supported:
             */
            properties?: _ThemeType | undefined;
        }

        /** Contents of manifest.json for a static theme */
        export interface ThemeManifest {
            theme: ThemeType;
            /** Fallback properties for the dark system theme. */
            dark_theme?: ThemeType | undefined;
            default_locale?: string | undefined;
            /** CSS file with additional styles. */
            theme_experiment?: ThemeExperiment | undefined;
            /** Icons shown in the Add-ons Manager. */
            icons?: _ThemeManifestIcons | undefined;
        }

        export type PermissionPrivileged = _PermissionPrivileged;

        export type Permission = string | PermissionNoPrompt | OptionalPermission | "declarativeNetRequest";

        /** Represents a protocol handler definition. */
        export interface ProtocolHandler {
            /**
             * A user-readable title string for the protocol handler. This will be
             * displayed to the user in interface objects as needed.
             */
            name: string;
            /**
             * The protocol the site wishes to handle, specified as a string. For
             * example, you can register to handle SMS text message links by
             * registering to handle the "sms" scheme.
             */
            protocol: string | _ProtocolHandlerProtocol;
            /**
             * The URL of the handler, as a string. This string should include "%s"
             * as a placeholder which will be replaced with the escaped URL of the
             * document to be handled. This URL might be a true URL, or it could be a
             * phone number, email address, or so forth.
             */
            uriTemplate: ExtensionURL | HttpURL;
        }

        /** Common properties for all manifest.json files */
        export interface ManifestBase {
            manifest_version: number;
            /**
             * The applications property is deprecated, please use
             * 'browser_specific_settings'
             *
             * Not supported on manifest versions above 2.
             */
            applications?: BrowserSpecificSettings | undefined;
            browser_specific_settings?: BrowserSpecificSettings | undefined;
            name: string;
            short_name?: string | undefined;
            description?: string | undefined;
            author?: string | undefined;
            version: string;
            homepage_url?: string | undefined;
            install_origins?: string[] | undefined;
            developer?: _ManifestBaseDeveloper | undefined;
        }

        /** Represents a WebExtension language pack manifest.json file */
        export interface WebExtensionLangpackManifest {
            homepage_url?: string | undefined;
            langpack_id: string;
            languages: _WebExtensionLangpackManifestLanguages;
            sources?: _WebExtensionLangpackManifestSources | undefined;
            manifest_version: number;
            /**
             * The applications property is deprecated, please use
             * 'browser_specific_settings'
             *
             * Not supported on manifest versions above 2.
             */
            applications?: BrowserSpecificSettings | undefined;
            browser_specific_settings?: BrowserSpecificSettings | undefined;
            name: string;
            short_name?: string | undefined;
            description?: string | undefined;
            author?: string | undefined;
            version: string;
            install_origins?: string[] | undefined;
            developer?: _WebExtensionLangpackManifestDeveloper | undefined;
        }

        /** Represents a WebExtension dictionary manifest.json file */
        export interface WebExtensionDictionaryManifest {
            homepage_url?: string | undefined;
            dictionaries: _WebExtensionDictionaryManifestDictionaries;
            manifest_version: number;
            /**
             * The applications property is deprecated, please use
             * 'browser_specific_settings'
             *
             * Not supported on manifest versions above 2.
             */
            applications?: BrowserSpecificSettings | undefined;
            browser_specific_settings?: BrowserSpecificSettings | undefined;
            name: string;
            short_name?: string | undefined;
            description?: string | undefined;
            author?: string | undefined;
            version: string;
            install_origins?: string[] | undefined;
            developer?: _WebExtensionDictionaryManifestDeveloper | undefined;
        }

        /** Represents a WebExtension site permissions manifest.json file */
        export interface WebExtensionSitePermissionsManifest {
            site_permissions: SitePermission[];
            install_origins?: [string] | undefined;
            manifest_version: number;
            /**
             * The applications property is deprecated, please use
             * 'browser_specific_settings'
             *
             * Not supported on manifest versions above 2.
             */
            applications?: BrowserSpecificSettings | undefined;
            browser_specific_settings?: BrowserSpecificSettings | undefined;
            name: string;
            short_name?: string | undefined;
            description?: string | undefined;
            author?: string | undefined;
            version: string;
            homepage_url?: string | undefined;
            developer?: _WebExtensionSitePermissionsManifestDeveloper | undefined;
        }

        export interface ThemeIcons {
            /** A light icon to use for dark themes */
            light: ExtensionURL;
            /** The dark icon to use for light themes */
            dark: ExtensionURL;
            /** The size of the icons */
            size: number;
        }

        export type OptionalPermissionOrOrigin = OptionalPermission | MatchPattern;

        export type PermissionOrOrigin = Permission | MatchPattern;

        export type SitePermission = _SitePermission;

        export type HttpURL = string;

        export type ExtensionURL = string;

        export type ExtensionFileUrl = string;

        export type ImageDataOrExtensionURL = string;

        export type ExtensionID = string;

        export interface FirefoxSpecificProperties {
            id?: ExtensionID | undefined;
            update_url?: string | undefined;
            strict_min_version?: string | undefined;
            strict_max_version?: string | undefined;
        }

        export interface BrowserSpecificSettings {
            gecko?: FirefoxSpecificProperties | undefined;
        }

        export type MatchPattern = MatchPatternRestricted | MatchPatternUnestricted | "<all_urls>";

        /** Same as MatchPattern above, but excludes<all_urls></all_urls> */
        export type MatchPatternRestricted = string;

        /**
         * Mostly unrestricted match patterns for privileged add-ons. This should
         * technically be rejected for unprivileged add-ons, but, reasons. The
         * MatchPattern class will still refuse privileged schemes for those
         * extensions.
         */
        export type MatchPatternUnestricted = string;

        /**
         * Details of the script or CSS to inject. Either the code or the file
         * property must be set, but both may not be set at the same time. Based
         * on InjectDetails, but using underscore rather than camel case naming
         * conventions.
         */
        export interface ContentScript {
            matches: MatchPattern[];
            exclude_matches?: MatchPattern[] | undefined;
            include_globs?: string[] | undefined;
            exclude_globs?: string[] | undefined;
            /** The list of CSS files to inject */
            css?: ExtensionURL[] | undefined;
            /** The list of JS files to inject */
            js?: ExtensionURL[] | undefined;
            /**
             * If allFrames is `true`, implies that the JavaScript or CSS should be
             * injected into all frames of current page. By default, it's `false` and
             * is only injected into the top frame.
             */
            all_frames?: boolean | undefined;
            /**
             * If matchAboutBlank is true, then the code is also injected in
             * about:blank and about:srcdoc frames if your extension has access to
             * its parent document. Code cannot be inserted in top-level
             * about:-frames. By default it is `false`.
             */
            match_about_blank?: boolean | undefined;
            /**
             * The soonest that the JavaScript or CSS will be injected into the tab.
             * Defaults to "document_idle".
             */
            run_at?: extensionTypes.RunAt | undefined;
        }

        export type IconPath =
            | {
                [key: number]: ExtensionFileUrl;
            }
            | ExtensionFileUrl;

        export type IconImageData =
            | {
                [key: number]: ImageData;
            }
            | ImageData;

        export type ImageData = any;

        /**
         * @deprecated An unexpected property was found in the WebExtension
         * manifest.
         */
        export type UnrecognizedProperty = any;

        /** Represents a native manifest file */
        export type NativeManifest =
            | {
                name: string;
                description: string;
                path: string;
                type: "pkcs11" | "stdio";
                allowed_extensions: ExtensionID[];
            }
            | {
                name: ExtensionID;
                description: string;
                data: { [key: string]: any };
                type: "storage";
            };

        export type _OptionalPermission =
            | "accountsRead"
            | "addressBooks"
            | "compose"
            | "compose.save"
            | "compose.send"
            | "messagesModify"
            | "accountsFolders"
            | "accountsIdentities"
            | "messagesDelete"
            | "messagesImport"
            | "messagesMove"
            | "messagesRead"
            | "messagesTags"
            | "tabs"
            | "tabHide"
            | "browserSettings"
            | "browsingData"
            | "downloads"
            | "downloads.open"
            | "management"
            | "clipboardRead"
            | "clipboardWrite"
            | "geolocation"
            | "notifications"
            | "pkcs11"
            | "privacy"
            | "proxy"
            | "nativeMessaging"
            | "webNavigation";

        /**
         * Defines the location the action button will appear. The default
         * location is `maintoolbar`.
         */
        export type _ActionManifestDefaultArea = "maintoolbar" | "tabstoolbar";

        export type _ActionManifestDefaultWindows = "normal" | "messageDisplay";

        /** The type of param can be either "purpose" or "pref". */
        export type _WebExtensionManifestChromeSettingsOverridesSearchProviderParamsCondition = "purpose" | "pref";

        /**
         * The context that initiates a search, required if condition is
         * "purpose".
         */
        export type _WebExtensionManifestChromeSettingsOverridesSearchProviderParamsPurpose =
            | "contextmenu"
            | "searchbar"
            | "homepage"
            | "keyword"
            | "newtab";

        export interface _WebExtensionManifestChromeSettingsOverridesSearchProviderParams {
            /** A url parameter name */
            name: string;
            /** The type of param can be either "purpose" or "pref". */
            condition?: _WebExtensionManifestChromeSettingsOverridesSearchProviderParamsCondition | undefined;
            /** The preference to retrieve the value from. */
            pref?: string | undefined;
            /**
             * The context that initiates a search, required if condition is
             * "purpose".
             */
            purpose?: _WebExtensionManifestChromeSettingsOverridesSearchProviderParamsPurpose | undefined;
            /** A url parameter value. */
            value?: string | undefined;
        }

        export interface _WebExtensionManifestChromeSettingsOverridesSearchProvider {
            name: string;
            keyword?: string | string[] | undefined;
            search_url: string;
            favicon_url?: string | undefined;
            suggest_url?: string | undefined;
            /** @deprecated Unsupported on Thunderbird at this time. */
            instant_url?: string | undefined;
            /** @deprecated Unsupported on Thunderbird at this time. */
            image_url?: string | undefined;
            /** GET parameters to the search_url as a query string. */
            search_url_get_params?: string | undefined;
            /** POST parameters to the search_url as a query string. */
            search_url_post_params?: string | undefined;
            /** GET parameters to the suggest_url as a query string. */
            suggest_url_get_params?: string | undefined;
            /** POST parameters to the suggest_url as a query string. */
            suggest_url_post_params?: string | undefined;
            /** @deprecated Unsupported on Thunderbird at this time. */
            instant_url_post_params?: string | undefined;
            /** @deprecated Unsupported on Thunderbird at this time. */
            image_url_post_params?: string | undefined;
            search_form?: string | undefined;
            /** @deprecated Unsupported on Thunderbird at this time. */
            alternate_urls?: string[] | undefined;
            /** @deprecated Unsupported on Thunderbird. */
            prepopulated_id?: number | undefined;
            /** Encoding of the search term. */
            encoding?: string | undefined;
            /** Sets the default engine to a built-in engine only. */
            is_default?: boolean | undefined;
            /**
             * A list of optional search url parameters. This allows the addition of
             * search url parameters based on how the search is performed in
             * Thunderbird.
             */
            params?: _WebExtensionManifestChromeSettingsOverridesSearchProviderParams[] | undefined;
        }

        export interface _WebExtensionManifestChromeSettingsOverrides {
            search_provider?: _WebExtensionManifestChromeSettingsOverridesSearchProvider | undefined;
        }

        export interface _WebExtensionManifestCloudFile {
            /**
             * Enable browser styles in the `management_url` page. See the MDN
             * documentation on browser styles for more information.
             */
            browser_style?: boolean | undefined;
            /**
             * This property is no longer used. The only supported data format for
             * the `data` argument in {@link cloudFile.onFileUpload} is {@link File}.
             *
             * @deprecated This property is no longer used. The only supported data
             * format for the `data` argument in {@link cloudFile.onFileUpload} is
             * {@link File}.
             */
            data_format?: string | undefined;
            /**
             * If a previously uploaded cloud file attachment is reused at a later
             * time in a different message, Thunderbird may use the already known
             * `url` and `templateInfo` values without triggering the registered
             * {@link cloudFile.onFileUpload} listener again. Setting this option to
             * `false` will always trigger the registered listener, providing the
             * already known values through the `relatedFileInfo` parameter of the
             * {@link cloudFile.onFileUpload} event, to let the provider decide how
             * to handle these cases.
             */
            reuse_uploads?: boolean | undefined;
            /**
             * A page for configuring accounts, to be displayed in the preferences
             * UI. **Note:** Within this UI only a limited subset of the WebExtension
             * APIs is available: `cloudFile`, `extension`, `i18n`, `runtime`,
             * `storage`, `test`.
             */
            management_url: string;
            /** Name of the cloud file service. */
            name: string;
            /**
             * This property was never used.
             *
             * @deprecated This property was never used.
             */
            new_account_url?: string | undefined;
            /**
             * This property is no longer used. The `service_url` property of the
             * {@link cloudFile.CloudFileTemplateInfo} object returned by the {@link cloudFile.onFileUpload}
             * event can be used to add a _Learn more about_
             * link to the footer of the cloud file attachment element.
             *
             * @deprecated This property is no longer used. The `service_url`
             * property of the {@link cloudFile.CloudFileTemplateInfo} object
             * returned by the {@link cloudFile.onFileUpload} event can be used to
             * add a _Learn more about_ link to the footer of the cloud file
             * attachment element.
             */
            service_url?: string | undefined;
        }

        export interface _WebExtensionManifestCommandsSuggestedKey {
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

        export interface _WebExtensionManifestCommands {
            suggested_key?: _WebExtensionManifestCommandsSuggestedKey | undefined;
            description?: string | undefined;
        }

        /**
         * Defines the location the composeAction button will appear. The default
         * location is `maintoolbar`.
         */
        export type _WebExtensionManifestComposeActionDefaultArea = "maintoolbar" | "formattoolbar";

        export interface _WebExtensionManifestComposeAction {
            /**
             * The label of the composeAction button, defaults to its title. Can be
             * set to an empty string to not display any label. If the containing
             * toolbar is configured to display text only, the title will be used as
             * fallback.
             */
            default_label?: string | undefined;
            /**
             * The title of the composeAction button. This shows up in the tooltip
             * and the label. Defaults to the add-on name.
             */
            default_title?: string | undefined;
            /** The paths to one or more icons for the composeAction button. */
            default_icon?: IconPath | undefined;
            /**
             * Specifies dark and light icons to be used with themes. The `light`
             * icon is used on dark backgrounds and vice versa. **Note:** The default
             * theme uses the `default_icon` for light backgrounds (if specified).
             */
            theme_icons?: ThemeIcons[] | undefined;
            /**
             * The html document to be opened as a popup when the user clicks on the
             * composeAction button.
             */
            default_popup?: string | undefined;
            /**
             * Enable browser styles. See the MDN documentation on browser styles for
             * more information.
             */
            browser_style?: boolean | undefined;
            /**
             * Defines the location the composeAction button will appear. The default
             * location is `maintoolbar`.
             */
            default_area?: _WebExtensionManifestComposeActionDefaultArea | undefined;
        }

        export interface _WebExtensionManifestMessageDisplayAction {
            /**
             * The label of the messageDisplayAction button, defaults to its title.
             * Can be set to an empty string to not display any label. If the
             * containing toolbar is configured to display text only, the title will
             * be used as fallback.
             */
            default_label?: string | undefined;
            /**
             * The title of the messageDisplayAction button. This shows up in the
             * tooltip and the label. Defaults to the add-on name.
             */
            default_title?: string | undefined;
            /** The paths to one or more icons for the messageDisplayAction button. */
            default_icon?: IconPath | undefined;
            /**
             * Specifies dark and light icons to be used with themes. The `light`
             * icon is used on dark backgrounds and vice versa. **Note:** The default
             * theme uses the `default_icon` for light backgrounds (if specified).
             */
            theme_icons?: ThemeIcons[] | undefined;
            /**
             * The html document to be opened as a popup when the user clicks on the
             * messageDisplayAction button.
             */
            default_popup?: string | undefined;
            /**
             * Enable browser styles. See the MDN documentation on browser styles for
             * more information.
             */
            browser_style?: boolean | undefined;
            /** Currently unused. */
            default_area?: string | undefined;
        }

        export interface _WebExtensionManifestDeclarativeNetRequestRuleResources {
            /**
             * A non-empty string uniquely identifying the ruleset. IDs beginning
             * with '\_' are reserved for internal use.
             */
            id: string;
            /** Whether the ruleset is enabled by default. */
            enabled: boolean;
            /** The path of the JSON ruleset relative to the extension directory. */
            path: ExtensionURL;
        }

        /** Needs at least manifest version 3. */
        export interface _WebExtensionManifestDeclarativeNetRequest {
            rule_resources: _WebExtensionManifestDeclarativeNetRequestRuleResources[];
        }

        export interface _WebExtensionManifestIcons {
            [key: number]: ExtensionFileUrl;
        }

        export type _WebExtensionManifestIncognito = "not_allowed" | "spanning";

        export interface _WebExtensionManifestOptionsUi {
            page: ExtensionURL;
            browser_style?: boolean | undefined;
            chrome_style?: boolean | undefined;
            open_in_tab?: boolean | undefined;
        }

        export interface _WebExtensionManifestPageAction {
            default_title?: string | undefined;
            default_icon?: IconPath | undefined;
            default_popup?: string | undefined;
            browser_style?: boolean | undefined;
            show_matches?: MatchPattern[] | undefined;
            hide_matches?: MatchPatternRestricted[] | undefined;
            pinned?: boolean | undefined;
        }

        export interface _WebExtensionManifestTelemetryPublicKeyKey {
            crv?: string | undefined;
            kty?: string | undefined;
            x?: string | undefined;
            y?: string | undefined;
        }

        export interface _WebExtensionManifestTelemetryPublicKey {
            id: string;
            key: _WebExtensionManifestTelemetryPublicKeyKey;
        }

        export interface _WebExtensionManifestTelemetry {
            ping_type: string;
            schemaNamespace: string;
            public_key: _WebExtensionManifestTelemetryPublicKey;
            study_name?: string | undefined;
            pioneer_id?: boolean | undefined;
        }

        /** Not supported on manifest versions above 2. */
        export interface _WebExtensionManifestUserScripts {
            api_script?: ExtensionURL | undefined;
        }

        export interface _WebExtensionManifestDeveloper {
            name?: string | undefined;
            url?: string | undefined;
        }

        export type _PermissionNoPrompt =
            | "menus"
            | "theme"
            | "captivePortal"
            | "contextualIdentities"
            | "declarativeNetRequestFeedback"
            | "declarativeNetRequestWithHostAccess"
            | "dns"
            | "geckoProfiler"
            | "identity"
            | "alarms"
            | "storage"
            | "unlimitedStorage";

        export type _OptionalPermissionNoPrompt =
            | "menus.overrideContext"
            | "activeTab"
            | "cookies"
            | "idle"
            | "scripting"
            | "webRequest"
            | "webRequestBlocking"
            | "webRequestFilterResponse.serviceWorkerScript";

        /**
         * A _dictionary object_ with one or more _key-value_ pairs to map images
         * to theme image keys. The following built-in theme image keys are
         * supported:
         */
        export interface _ThemeTypeImages {
            /**
             * Additional images added to the header area and displayed behind the
             * `theme_frame` image.
             */
            additional_backgrounds?: ImageDataOrExtensionURL[] | undefined;
            /**
             * @deprecated Unsupported images property, use
             * `theme.images.theme_frame`, this alias is ignored in
             * Thunderbird >= 70.
             */
            headerURL?: ImageDataOrExtensionURL | undefined;
            /** Foreground image on the header area. */
            theme_frame?: ImageDataOrExtensionURL | undefined;
        }

        /**
         * A _dictionary object_ with one or more _key-value_ pairs to map color
         * values to theme color keys. The following built-in theme color keys
         * are supported:
         */
        export interface _ThemeTypeColors {
            /**
             * Background color of the selected tab. Defaults to the color specified
             * by `toolbar`.
             */
            tab_selected?: ThemeColor | undefined;
            /**
             * @deprecated Unsupported colors property, use `theme.colors.frame`,
             * this alias is ignored in Thunderbird >= 70.
             */
            accentcolor?: ThemeColor | undefined;
            /** The background color of the header area. */
            frame?: ThemeColor | undefined;
            /** The background color of the header area when the window is inactive. */
            frame_inactive?: ThemeColor | undefined;
            /**
             * @deprecated Unsupported color property, use
             * `theme.colors.tab_background_text`, this alias is ignored in
             * Thunderbird >= 70.
             */
            textcolor?: ThemeColor | undefined;
            /** The text color of the unselected tabs. */
            tab_background_text?: ThemeColor | undefined;
            /** The color of the vertical separator of the background tabs. */
            tab_background_separator?: ThemeColor | undefined;
            /** The color of the tab loading indicator. */
            tab_loading?: ThemeColor | undefined;
            /**
             * The text color for the selected tab. Defaults to the color specified
             * by `toolbar_text`.
             */
            tab_text?: ThemeColor | undefined;
            /** The color of the selected tab line. */
            tab_line?: ThemeColor | undefined;
            /**
             * The background color of the toolbars. Also used as default value for
             * `tab_selected`.
             */
            toolbar?: ThemeColor | undefined;
            /**
             * The text color in the main Thunderbird toolbar. Also used as default
             * value for `icons` and `tab_text`.
             */
            toolbar_text?: ThemeColor | undefined;
            /** Not used in Thunderbird. */
            bookmark_text?: ThemeColor | undefined;
            /**
             * The background color for fields in the toolbar, such as the search
             * field.
             */
            toolbar_field?: ThemeColor | undefined;
            /** The text color for fields in the toolbar. */
            toolbar_field_text?: ThemeColor | undefined;
            /** The border color for fields in the toolbar. */
            toolbar_field_border?: ThemeColor | undefined;
            /**
             * Not used in Thunderbird.
             *
             * @deprecated This color property is ignored in >= 89.
             */
            toolbar_field_separator?: ThemeColor | undefined;
            /**
             * The color of the line separating the top of the toolbar from the
             * region above.
             */
            toolbar_top_separator?: ThemeColor | undefined;
            /**
             * The color of the line separating the bottom of the toolbar from the
             * region below.
             */
            toolbar_bottom_separator?: ThemeColor | undefined;
            /** The color of the vertical separators on the toolbars. */
            toolbar_vertical_separator?: ThemeColor | undefined;
            /**
             * The color of the toolbar icons. Defaults to the color specified by
             * `toolbar_text`.
             */
            icons?: ThemeColor | undefined;
            /**
             * The color of the toolbar icons in attention state such as the chat
             * icon with new messages.
             */
            icons_attention?: ThemeColor | undefined;
            /** The color of the background of the toolbar buttons on hover. */
            button_background_hover?: ThemeColor | undefined;
            /** The color of the background of the pressed toolbar buttons. */
            button_background_active?: ThemeColor | undefined;
            /** The background color of popups such as the AppMenu. */
            popup?: ThemeColor | undefined;
            /** The text color of popups. */
            popup_text?: ThemeColor | undefined;
            /** The border color of popups. */
            popup_border?: ThemeColor | undefined;
            /** The focused background color for fields in the toolbar. */
            toolbar_field_focus?: ThemeColor | undefined;
            /** The text color in the focused fields in the toolbar. */
            toolbar_field_text_focus?: ThemeColor | undefined;
            /** The focused border color for fields in the toolbar. */
            toolbar_field_border_focus?: ThemeColor | undefined;
            /**
             * The background color of items highlighted using the keyboard inside
             * popups.
             */
            popup_highlight?: ThemeColor | undefined;
            /** The text color of items highlighted using the keyboard inside popups. */
            popup_highlight_text?: ThemeColor | undefined;
            /** Not used in Thunderbird. */
            ntp_background?: ThemeColor | undefined;
            /** Not used in Thunderbird. */
            ntp_text?: ThemeColor | undefined;
            /** The background color of the trees. */
            sidebar?: ThemeColor | undefined;
            /** The border color of the trees. */
            sidebar_border?: ThemeColor | undefined;
            /** The text color of the trees. Needed to enable the tree theming. */
            sidebar_text?: ThemeColor | undefined;
            /** The background color of highlighted rows in trees. */
            sidebar_highlight?: ThemeColor | undefined;
            /** The text color of highlighted rows in trees. */
            sidebar_highlight_text?: ThemeColor | undefined;
            /** The border color of highlighted rows in trees. */
            sidebar_highlight_border?: ThemeColor | undefined;
            /**
             * The background color used to indicate the current selection of text in
             * the search field.
             */
            toolbar_field_highlight?: ThemeColor | undefined;
            /**
             * The color used to draw text that's currently selected in the search
             * field.
             */
            toolbar_field_highlight_text?: ThemeColor | undefined;
        }

        export type _ThemeTypeAdditionalBackgroundsAlignment =
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

        export type _ThemeTypeAdditionalBackgroundsTiling = "no-repeat" | "repeat" | "repeat-x" | "repeat-y";

        /**
         * If set, overrides the general theme (context menus, toolbars, content
         * area).
         */
        export type _ThemeTypeColorScheme = "light" | "dark" | "auto";

        /** If set, overrides the color scheme for the content area. */
        export type _ThemeTypeContentColorScheme = "light" | "dark" | "auto";

        /**
         * A _dictionary object_ with one or more _key-value_ pairs to map
         * property values to theme property keys. The following built-in theme
         * property keys are supported:
         */
        export interface _ThemeType {
            additional_backgrounds_alignment?: _ThemeTypeAdditionalBackgroundsAlignment[] | undefined;
            additional_backgrounds_tiling?: _ThemeTypeAdditionalBackgroundsTiling[] | undefined;
            /**
             * If set, overrides the general theme (context menus, toolbars, content
             * area).
             */
            color_scheme?: _ThemeTypeColorScheme | undefined;
            /** If set, overrides the color scheme for the content area. */
            content_color_scheme?: _ThemeTypeContentColorScheme | undefined;
        }

        /** Icons shown in the Add-ons Manager. */
        export interface _ThemeManifestIcons {
            [key: number]: string;
        }

        export type _PermissionPrivileged = "activityLog" | "mozillaAddons" | "networkStatus" | "telemetry";

        export type _ProtocolHandlerProtocol =
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
            | "xmpp";

        export interface _ManifestBaseDeveloper {
            name?: string | undefined;
            url?: string | undefined;
        }

        export interface _UndefinedChromeResources {
            [key: string]:
                | ExtensionURL
                | {
                    [key: string]: ExtensionURL;
                };
        }

        export interface _WebExtensionLangpackManifestLanguages {
            [key: string]: {
                chrome_resources: _UndefinedChromeResources;
                version: string;
            };
        }

        export interface _WebExtensionLangpackManifestSources {
            [key: string]: {
                base_path: ExtensionURL;
                paths?: string[] | undefined;
            };
        }

        export interface _WebExtensionLangpackManifestDeveloper {
            name?: string | undefined;
            url?: string | undefined;
        }

        export interface _WebExtensionDictionaryManifestDictionaries {
            [key: string]: string;
        }

        export interface _WebExtensionDictionaryManifestDeveloper {
            name?: string | undefined;
            url?: string | undefined;
        }

        export interface _WebExtensionSitePermissionsManifestDeveloper {
            name?: string | undefined;
            url?: string | undefined;
        }

        export type _SitePermission = "midi" | "midi-sysex";
    }

    /**
     * Permissions: `accountsRead`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/accounts.html
     */
    export namespace accounts {
        /* accounts types */
        /**
         * An object describing a mail account, as returned for example by the
         * {@link accounts.list} and {@link accounts.get} methods. The `folders`
         * property is only included if requested.
         */
        export interface MailAccount {
            /** A unique identifier for this account. */
            id: string;
            /** The human-friendly name of this account. */
            name: string;
            /** What sort of account this is, e.g. `imap`, `nntp`, or `pop3`. */
            type: string;
            /** The folders for this account are only included if requested. */
            folders?: folders.MailFolder[] | undefined;
            /**
             * The identities associated with this account. The default identity is
             * listed first, others in no particular order.
             */
            identities: identities.MailIdentity[];
        }

        export interface _OnUpdatedChangedValues {
            /** The human-friendly name of this account. */
            name: string;
            /** The default identity of this account. */
            defaultIdentity: identities.MailIdentity;
        }

        /* accounts functions */
        /**
         * Returns all mail accounts. They will be returned in the same order as
         * used in Thunderbird's folder pane.
         *
         * @param [includeFolders] Specifies whether the returned {@link accounts.MailAccount}
         * objects should included their account's folders.
         * Defaults to `true`.
         */
        export function list(includeFolders?: boolean): Promise<MailAccount[]>;

        /**
         * Returns details of the requested account, or `null` if it doesn't
         * exist.
         *
         * @param [includeFolders] Specifies whether the returned {@link accounts.MailAccount}
         * object should included the account's folders.
         * Defaults to `true`.
         */
        export function get(accountId: string, includeFolders?: boolean): Promise<MailAccount>;

        /**
         * Returns the default account, or `null` if it is not defined.
         *
         * @param [includeFolders] Specifies whether the returned {@link accounts.MailAccount}
         * object should included the account's folders.
         * Defaults to `true`.
         */
        export function getDefault(includeFolders?: boolean): Promise<MailAccount>;

        /**
         * Sets the default identity for an account.
         *
         * @deprecated This will be removed. Use {@link identities.setDefault}
         * instead.
         */
        export function setDefaultIdentity(accountId: string, identityId: string): Promise<any>;

        /**
         * Returns the default identity for an account, or `null` if it is not
         * defined.
         *
         * @deprecated This will be removed. Use {@link identities.getDefault}
         * instead.
         */
        export function getDefaultIdentity(accountId: string): Promise<identities.MailIdentity>;

        /* accounts events */
        /** Fired when a new account has been created. */
        export const onCreated: WebExtEvent<(id: string, account: MailAccount) => void>;

        /** Fired when an account has been removed. */
        export const onDeleted: WebExtEvent<(id: string) => void>;

        /**
         * Fired when a property of an account has been modified. Folders and
         * identities of accounts are not monitored by this event, use the
         * dedicated folder and identity events instead. A changed
         * `defaultIdentity` is reported only after a different identity has been
         * assigned as default identity, but not after a property of the default
         * identity has been changed.
         */
        export const onUpdated: WebExtEvent<(id: string, changedValues: _OnUpdatedChangedValues) => void>;
    }

    /**
     * Permissions: `addressBooks`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/addressBooks.html
     */
    export namespace addressBooks {
        /* addressBooks types */
        /** Indicates the type of a Node. */
        export type NodeType = "addressBook" | "contact" | "mailingList";

        /** A node representing an address book. */
        export interface AddressBookNode {
            /**
             * The unique identifier for the node. IDs are unique within the current
             * profile, and they remain valid even after the program is restarted.
             */
            id: string;
            /** The `id` of the parent object. */
            parentId?: string | undefined;
            /** Always set to `addressBook`. */
            type: NodeType;
            /** Indicates if the object is read-only. */
            readOnly?: boolean | undefined;
            /** Indicates if the address book is accessed via remote look-up. */
            remote?: boolean | undefined;
            name: string;
            /** A list of contacts held by this node's address book or mailing list. */
            contacts?: contacts.ContactNode[] | undefined;
            /** A list of mailingLists in this node's address book. */
            mailingLists?: mailingLists.MailingListNode[] | undefined;
        }

        export interface _CreateProperties {
            name: string;
        }

        export interface _UpdateProperties {
            name: string;
        }

        export { _delete as delete };

        /* addressBooks functions */
        /** Opens the address book user interface. */
        export function openUI(): Promise<any>;

        /** Closes the address book user interface. */
        export function closeUI(): Promise<any>;

        /**
         * Gets a list of the user's address books, optionally including all
         * contacts and mailing lists.
         *
         * @param [complete] If set to true, results will include contacts and
         * mailing lists for each address book.
         */
        export function list(complete?: boolean): Promise<AddressBookNode[]>;

        /**
         * Gets a single address book, optionally including all contacts and
         * mailing lists.
         *
         * @param [complete] If set to true, results will include contacts and
         * mailing lists for this address book.
         */
        export function get(id: string, complete?: boolean): Promise<AddressBookNode>;

        /** Creates a new, empty address book. */
        export function create(properties: _CreateProperties): Promise<string>;

        /** Renames an address book. */
        export function update(id: string, properties: _UpdateProperties): Promise<any>;

        /**
         * Removes an address book, and all associated contacts and mailing
         * lists.
         */
        function _delete(id: string): Promise<any>;

        /* addressBooks events */
        /** Fired when an address book is created. */
        export const onCreated: WebExtEvent<(node: AddressBookNode) => void>;

        /** Fired when an address book is renamed. */
        export const onUpdated: WebExtEvent<(node: AddressBookNode) => void>;

        /** Fired when an addressBook is deleted. */
        export const onDeleted: WebExtEvent<(id: string) => void>;

        /**
         * Permissions: `addressBooks`
         *
         * Not allowed in: Content scripts, Devtools pages
         *
         * @see https://webextension-api.thunderbird.net/en/latest/addressBooks.provider.html
         */
        export namespace provider {
            /**
             * Descriptions for the address book created by registering this
             * listener.
             */
            export interface _OnSearchRequestParameters {
                /** The name of the created address book. */
                addressBookName?: string | undefined;
                /**
                 * Whether the address book search queries are using encrypted protocols
                 * like HTTPS.
                 */
                isSecure?: boolean | undefined;
                /**
                 * The unique ID of the created address book. If several listeners have
                 * been added, the `id` allows to identify which address book initiated
                 * the search request. If not provided, a unique ID will be generated for
                 * you.
                 */
                id?: string | undefined;
            }

            type AddressBookNode = any;

            export interface _AddressBooks_providerOnSearchRequestEvent<
                TCallback = (node: AddressBookNode, searchString: string, query?: string) => void,
            > {
                addListener(cb: TCallback, parameters: _OnSearchRequestParameters): void;
                removeListener(cb: TCallback): void;
                hasListener(cb: TCallback): boolean;
            }

            /* addressBooks.provider events */
            /**
             * Registering this listener will create and list a read-only address
             * book in Thunderbird's address book window, similar to LDAP address
             * books. When selecting this address book, users will first see no
             * contacts, but they can search for them, which will fire this event.
             * Contacts returned by the listener callback will be displayed as
             * contact cards in the address book. Several listeners can be
             * registered, to create multiple address books.
             *
             * The event also fires for each registered listener (for each created
             * read-only address book), when users type something into the mail
             * composer's _To:_ field, or into similar fields like the calendar
             * meeting attendees field. Contacts returned by the listener callback
             * will be added to the autocomplete results in the dropdown of that
             * field.
             *
             * Example:
             * [onSearchRequest.js](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/addressBooks/onSearchRequest.js)
             *
             * @param [searchString] The search text that the user entered. Not
             * available when invoked from the advanced address book search dialog.
             *
             * @param [query] The boolean query expression corresponding to the
             * search. **Note:** This parameter may change in future releases of
             * Thunderbird.
             */
            export const onSearchRequest: _AddressBooks_providerOnSearchRequestEvent;
        }
    }

    /**
     * Permissions: `addressBooks`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/contacts.html
     */
    export namespace contacts {
        /* contacts types */
        /** Object defining a query for {@link contacts.quickSearch}. */
        export interface QueryInfo {
            /** One or more space-separated terms to search for. */
            searchString?: string | undefined;
            /** Whether to include results from local address books. Defaults to true. */
            includeLocal?: boolean | undefined;
            /**
             * Whether to include results from remote address books. Defaults to
             * true.
             */
            includeRemote?: boolean | undefined;
            /**
             * Whether to include results from read-only address books. Defaults to
             * true.
             */
            includeReadOnly?: boolean | undefined;
            /**
             * Whether to include results from read-write address books. Defaults to
             * true.
             */
            includeReadWrite?: boolean | undefined;
        }

        /** A node representing a contact in an address book. */
        export interface ContactNode {
            /**
             * The unique identifier for the node. IDs are unique within the current
             * profile, and they remain valid even after the program is restarted.
             */
            id: string;
            /** The `id` of the parent object. */
            parentId?: string | undefined;
            /** Always set to `contact`. */
            type: addressBooks.NodeType;
            /** Indicates if the object is read-only. */
            readOnly?: boolean | undefined;
            /** Indicates if the object came from a remote address book. */
            remote?: boolean | undefined;
            properties: ContactProperties;
        }

        /**
         * A set of individual properties for a particular contact, and its vCard
         * string. Further information can be found in {@link howto_contacts}.
         */
        export interface ContactProperties {
            [key: string]: string | null;
        }

        /**
         * A dictionary of changed properties. Keys are the property name that
         * changed, values are an object containing `oldValue` and `newValue`.
         * Values can be either a string or `null`.
         */
        export interface PropertyChange {
            [key: string]: {
                oldValue: string | null;
                newValue: string | null;
            };
        }

        export { _delete as delete };

        /* contacts functions */
        /** Gets all the contacts in the address book with the id `parentId`. */
        export function list(parentId: string): Promise<ContactNode[]>;

        /**
         * Gets all contacts matching `queryInfo` in the address book with the id
         * `parentId`.
         *
         * @param parentId The id of the address book to search. If not
         * specified, all address books are searched.
         *
         * @param queryInfo Either a _string_ with one or more space-separated
         * terms to search for, or a complex {@link contacts.QueryInfo} search
         * query.
         */
        export function quickSearch(parentId: string, queryInfo: string | QueryInfo): Promise<ContactNode[]>;
        /**
         * Gets all contacts matching `queryInfo` in the address book with the id
         * `parentId`.
         *
         * @param queryInfo Either a _string_ with one or more space-separated
         * terms to search for, or a complex {@link contacts.QueryInfo} search
         * query.
         */
        export function quickSearch(queryInfo: string | QueryInfo): Promise<ContactNode[]>;

        /** Gets a single contact. */
        export function get(id: string): Promise<ContactNode>;

        /** Gets the photo associated with this contact, if any. */
        export function getPhoto(id: string): Promise<File>;

        /** Sets the photo associated with this contact. */
        export function setPhoto(id: string, file: File): Promise<any>;

        /**
         * Adds a new contact to the address book with the id `parentId`.
         *
         * @param id Assigns the contact an id. If an existing contact has this
         * id, an exception is thrown. **Note:** Deprecated, the card's id should
         * be specified in the vCard string instead.
         *
         * @param properties The properties object for the new contact. If it
         * includes a `vCard` member, all specified legacy properties are ignored
         * and the new contact will be based on the provided vCard string. If a
         * UID is specified in the vCard string, which is already used by another
         * contact, an exception is thrown. **Note:** Using individual properties
         * is deprecated, use the `vCard` member instead.
         */
        export function create(parentId: string, id: string, properties: ContactProperties): Promise<string>;
        /**
         * Adds a new contact to the address book with the id `parentId`.
         *
         * @param properties The properties object for the new contact. If it
         * includes a `vCard` member, all specified legacy properties are ignored
         * and the new contact will be based on the provided vCard string. If a
         * UID is specified in the vCard string, which is already used by another
         * contact, an exception is thrown. **Note:** Using individual properties
         * is deprecated, use the `vCard` member instead.
         */
        export function create(parentId: string, properties: ContactProperties): Promise<string>;

        /**
         * Updates a contact.
         *
         * @param properties An object with properties to update the specified
         * contact. Individual properties are removed, if they are set to `null`.
         * If the provided object includes a `vCard` member, all specified legacy
         * properties are ignored and the details of the contact will be replaced
         * by the provided vCard. Changes to the UID will be ignored. **Note:**
         * Using individual properties is deprecated, use the `vCard` member
         * instead.
         */
        export function update(id: string, properties: ContactProperties): Promise<any>;

        /**
         * Removes a contact from the address book. The contact is also removed
         * from any mailing lists it is a member of.
         */
        function _delete(id: string): Promise<any>;

        /* contacts events */
        /** Fired when a contact is created. */
        export const onCreated: WebExtEvent<(node: ContactNode) => void>;

        /** Fired when a contact is changed. */
        export const onUpdated: WebExtEvent<(node: ContactNode, changedProperties: PropertyChange) => void>;

        /** Fired when a contact is removed from an address book. */
        export const onDeleted: WebExtEvent<(parentId: string, id: string) => void>;
    }

    /**
     * Permissions: `addressBooks`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/mailingLists.html
     */
    export namespace mailingLists {
        /* mailingLists types */
        /** A node representing a mailing list. */
        export interface MailingListNode {
            /**
             * The unique identifier for the node. IDs are unique within the current
             * profile, and they remain valid even after the program is restarted.
             */
            id: string;
            /** The `id` of the parent object. */
            parentId?: string | undefined;
            /** Always set to `mailingList`. */
            type: addressBooks.NodeType;
            /** Indicates if the object is read-only. */
            readOnly?: boolean | undefined;
            /** Indicates if the object came from a remote address book. */
            remote?: boolean | undefined;
            name: string;
            nickName: string;
            description: string;
            /** A list of contacts held by this node's address book or mailing list. */
            contacts?: contacts.ContactNode[] | undefined;
        }

        export interface _CreateProperties {
            name: string;
            nickName?: string | undefined;
            description?: string | undefined;
        }

        export interface _UpdateProperties {
            name: string;
            nickName?: string | undefined;
            description?: string | undefined;
        }

        export { _delete as delete };

        /* mailingLists functions */
        /** Gets all the mailing lists in the address book with id `parentId`. */
        export function list(parentId: string): Promise<MailingListNode[]>;

        /** Gets a single mailing list. */
        export function get(id: string): Promise<MailingListNode>;

        /** Creates a new mailing list in the address book with id `parentId`. */
        export function create(parentId: string, properties: _CreateProperties): Promise<string>;

        /** Edits the properties of a mailing list. */
        export function update(id: string, properties: _UpdateProperties): Promise<any>;

        /** Removes the mailing list. */
        function _delete(id: string): Promise<any>;

        /**
         * Adds a contact to the mailing list with id `id`. If the contact and
         * mailing list are in different address books, the contact will also be
         * copied to the list's address book.
         */
        export function addMember(id: string, contactId: string): Promise<any>;

        /** Gets all contacts that are members of the mailing list with id `id`. */
        export function listMembers(id: string): Promise<contacts.ContactNode[]>;

        /**
         * Removes a contact from the mailing list with id `id`. This does not
         * delete the contact from the address book.
         */
        export function removeMember(id: string, contactId: string): Promise<any>;

        /* mailingLists events */
        /** Fired when a mailing list is created. */
        export const onCreated: WebExtEvent<(node: MailingListNode) => void>;

        /** Fired when a mailing list is changed. */
        export const onUpdated: WebExtEvent<(node: MailingListNode) => void>;

        /** Fired when a mailing list is deleted. */
        export const onDeleted: WebExtEvent<(parentId: string, id: string) => void>;

        /** Fired when a contact is added to the mailing list. */
        export const onMemberAdded: WebExtEvent<(node: contacts.ContactNode) => void>;

        /** Fired when a contact is removed from the mailing list. */
        export const onMemberRemoved: WebExtEvent<(parentId: string, id: string) => void>;
    }

    /**
     * Use an action to put a button in the mail window toolbar. In addition
     * to its icon, an action button can also have a tooltip, a badge, and a
     * popup.
     *
     * Manifest keys: `action`, `browser_action`
     *
     * Needs at least manifest version 3.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/browserAction.html
     */
    export namespace action {
        /* action types */
        /**
         * An array of four integers in the range [0,255] that make up the RGBA
         * color. For example, opaque red is `[255, 0, 0, 255]`.
         */
        export type ColorArray = [number, number, number, number];

        /**
         * Pixel data for an image. Must be an {@link ImageData} object (for
         * example, from a {@link Canvas} element).
         */
        export type ImageDataType = ImageData;

        /**
         * A _dictionary object_ to specify multiple {@link ImageData} objects in
         * different sizes, so the icon does not have to be scaled for a device
         * with a different pixel density. Each entry is a _name-value_ pair with
         * _value_ being an {@link ImageData} object, and _name_ its size.
         * Example:
         * [ImageDataDictionary.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/ImageDataDictionary.json)See
         * the MDN documentation about choosing icon sizes for more information
         * on this.
         */
        export interface ImageDataDictionary {
            [key: number]: ImageDataType;
        }

        /** Information sent when an action button is clicked. */
        export interface OnClickData {
            /**
             * An array of keyboard modifiers that were held while the menu item was
             * clicked.
             */
            modifiers: _OnClickDataModifiers[];
            /** An integer value of button by which menu item was clicked. */
            button?: number | undefined;
        }

        export type _OnClickDataModifiers = "Shift" | "Alt" | "Command" | "Ctrl" | "MacCtrl";

        export interface _SetTitleDetails {
            /**
             * A string the action button should display as its label and when moused
             * over. Cleared by setting it to `null` or an empty string (title
             * defined the manifest will be used).
             */
            title: string | null;
            /** Sets the title only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetTitleDetails {
            /**
             * Specifies for which tab the title should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetLabelDetails {
            /**
             * A string the action button should use as its label, overriding the
             * defined title. Can be set to an empty string to not display any label
             * at all. If the containing toolbar is configured to display text only,
             * its title will be used. Cleared by setting it to `null`.
             */
            label: string | null;
            /** Sets the label only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetLabelDetails {
            /**
             * Specifies for which tab the label should be retrieved. If no tab is
             * specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetIconDetails {
            /** The image data for one or more icons for the action button. */
            imageData?: ImageDataType | ImageDataDictionary | undefined;
            /** The paths to one or more icons for the action button. */
            path?: _manifest.IconPath | undefined;
            /** Sets the icon only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetPopupDetails {
            /**
             * The html file to show in a popup. Can be set to an empty string to not
             * open a popup. Cleared by setting it to `null` (popup value defined the
             * manifest will be used).
             */
            popup: string | null;
            /** Sets the popup only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetPopupDetails {
            /**
             * Specifies for which tab the popup document should be retrieved. If no
             * tab is specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeTextDetails {
            /**
             * Any number of characters can be passed, but only about four can fit in
             * the space. Cleared by setting it to `null` or an empty string.
             */
            text: string | null;
            /** Sets the badge text only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeTextDetails {
            /**
             * Specifies for which tab the badge text should be retrieved. If no tab
             * is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeBackgroundColorDetails {
            /**
             * The color to use as background in the badge. Cleared by setting it to
             * `null` or an empty string.
             */
            color: string | ColorArray | null;
            /** Sets the background color for the badge only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeBackgroundColorDetails {
            /**
             * Specifies for which tab the badge background color should be
             * retrieved. If no tab is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _IsEnabledDetails {
            /**
             * Specifies for which tab the state should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        /* action functions */
        /**
         * Sets the title of the action button. Is used as tooltip and as the
         * label.
         */
        export function setTitle(details: _SetTitleDetails): Promise<void>;

        /** Gets the title of the action button. */
        export function getTitle(details: _GetTitleDetails): Promise<string>;

        /**
         * Sets the label of the action button. Can be used to set different
         * values for the tooltip (defined by the title) and the label.
         * Additionally, the label can be set to an empty string, not showing any
         * label at all.
         */
        export function setLabel(details: _SetLabelDetails): Promise<void>;

        /** Gets the label of the action button. */
        export function getLabel(details: _GetLabelDetails): Promise<string>;

        /**
         * Sets the icon for the action button. Either the `path` or the
         * `imageData` property must be specified.
         */
        export function setIcon(details: _SetIconDetails): Promise<void>;

        /**
         * Sets the html document to be opened as a popup when the user clicks on
         * the action button.
         */
        export function setPopup(details: _SetPopupDetails): Promise<void>;

        /** Gets the html document set as the popup for this action button. */
        export function getPopup(details: _GetPopupDetails): Promise<string>;

        /**
         * Sets the badge text for the action button. The badge is displayed on
         * top of the icon.
         */
        export function setBadgeText(details: _SetBadgeTextDetails): Promise<void>;

        /** Gets the badge text of the action button. */
        export function getBadgeText(details: _GetBadgeTextDetails): Promise<string>;

        /** Sets the background color for the badge. */
        export function setBadgeBackgroundColor(details: _SetBadgeBackgroundColorDetails): Promise<void>;

        /** Gets the badge background color of the action button. */
        export function getBadgeBackgroundColor(details: _GetBadgeBackgroundColorDetails): Promise<ColorArray>;

        /**
         * Enables the action button for a tab. By default, an action button is
         * enabled.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * action button.
         */
        export function enable(tabId?: number): Promise<void>;

        /**
         * Disables the action button for a tab.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * action button.
         */
        export function disable(tabId?: number): Promise<void>;

        /** Checks whether the action button is enabled. */
        export function isEnabled(details: _IsEnabledDetails): Promise<boolean>;

        /** Opens the action's popup window in the active window. */
        export function openPopup(): Promise<boolean>;

        /* action events */
        /**
         * Fired when an action button is clicked. This event will not fire if
         * the action has a popup. This is a user input event handler. For
         * asynchronous listeners some restrictions apply.
         */
        export const onClicked: WebExtEvent<(tab: tabs.Tab, info?: OnClickData) => void>;
    }

    /**
     * Manifest keys: `action`, `browser_action`
     *
     * Not supported on manifest versions above 2.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/browserAction.html
     */
    export namespace browserAction {
        /* browserAction types */
        /**
         * An array of four integers in the range [0,255] that make up the RGBA
         * color. For example, opaque red is `[255, 0, 0, 255]`.
         */
        export type ColorArray = [number, number, number, number];

        /**
         * Pixel data for an image. Must be an {@link ImageData} object (for
         * example, from a {@link Canvas} element).
         */
        export type ImageDataType = ImageData;

        /**
         * A _dictionary object_ to specify multiple {@link ImageData} objects in
         * different sizes, so the icon does not have to be scaled for a device
         * with a different pixel density. Each entry is a _name-value_ pair with
         * _value_ being an {@link ImageData} object, and _name_ its size.
         * Example:
         * [ImageDataDictionary.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/ImageDataDictionary.json)See
         * the MDN documentation about choosing icon sizes for more information
         * on this.
         */
        export interface ImageDataDictionary {
            [key: number]: ImageDataType;
        }

        /** Information sent when an action button is clicked. */
        export interface OnClickData {
            /**
             * An array of keyboard modifiers that were held while the menu item was
             * clicked.
             */
            modifiers: _OnClickDataModifiers[];
            /** An integer value of button by which menu item was clicked. */
            button?: number | undefined;
        }

        export type _OnClickDataModifiers = "Shift" | "Alt" | "Command" | "Ctrl" | "MacCtrl";

        export interface _SetTitleDetails {
            /**
             * A string the action button should display as its label and when moused
             * over. Cleared by setting it to `null` or an empty string (title
             * defined the manifest will be used).
             */
            title: string | null;
            /** Sets the title only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetTitleDetails {
            /**
             * Specifies for which tab the title should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetLabelDetails {
            /**
             * A string the action button should use as its label, overriding the
             * defined title. Can be set to an empty string to not display any label
             * at all. If the containing toolbar is configured to display text only,
             * its title will be used. Cleared by setting it to `null`.
             */
            label: string | null;
            /** Sets the label only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetLabelDetails {
            /**
             * Specifies for which tab the label should be retrieved. If no tab is
             * specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetIconDetails {
            /** The image data for one or more icons for the action button. */
            imageData?: ImageDataType | ImageDataDictionary | undefined;
            /** The paths to one or more icons for the action button. */
            path?: _manifest.IconPath | undefined;
            /** Sets the icon only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetPopupDetails {
            /**
             * The html file to show in a popup. Can be set to an empty string to not
             * open a popup. Cleared by setting it to `null` (popup value defined the
             * manifest will be used).
             */
            popup: string | null;
            /** Sets the popup only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetPopupDetails {
            /**
             * Specifies for which tab the popup document should be retrieved. If no
             * tab is specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeTextDetails {
            /**
             * Any number of characters can be passed, but only about four can fit in
             * the space. Cleared by setting it to `null` or an empty string.
             */
            text: string | null;
            /** Sets the badge text only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeTextDetails {
            /**
             * Specifies for which tab the badge text should be retrieved. If no tab
             * is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeBackgroundColorDetails {
            /**
             * The color to use as background in the badge. Cleared by setting it to
             * `null` or an empty string.
             */
            color: string | ColorArray | null;
            /** Sets the background color for the badge only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeBackgroundColorDetails {
            /**
             * Specifies for which tab the badge background color should be
             * retrieved. If no tab is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _IsEnabledDetails {
            /**
             * Specifies for which tab the state should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        /* browserAction functions */
        /**
         * Sets the title of the action button. Is used as tooltip and as the
         * label.
         */
        export function setTitle(details: _SetTitleDetails): Promise<void>;

        /** Gets the title of the action button. */
        export function getTitle(details: _GetTitleDetails): Promise<string>;

        /**
         * Sets the label of the action button. Can be used to set different
         * values for the tooltip (defined by the title) and the label.
         * Additionally, the label can be set to an empty string, not showing any
         * label at all.
         */
        export function setLabel(details: _SetLabelDetails): Promise<void>;

        /** Gets the label of the action button. */
        export function getLabel(details: _GetLabelDetails): Promise<string>;

        /**
         * Sets the icon for the action button. Either the `path` or the
         * `imageData` property must be specified.
         */
        export function setIcon(details: _SetIconDetails): Promise<void>;

        /**
         * Sets the html document to be opened as a popup when the user clicks on
         * the action button.
         */
        export function setPopup(details: _SetPopupDetails): Promise<void>;

        /** Gets the html document set as the popup for this action button. */
        export function getPopup(details: _GetPopupDetails): Promise<string>;

        /**
         * Sets the badge text for the action button. The badge is displayed on
         * top of the icon.
         */
        export function setBadgeText(details: _SetBadgeTextDetails): Promise<void>;

        /** Gets the badge text of the action button. */
        export function getBadgeText(details: _GetBadgeTextDetails): Promise<string>;

        /** Sets the background color for the badge. */
        export function setBadgeBackgroundColor(details: _SetBadgeBackgroundColorDetails): Promise<void>;

        /** Gets the badge background color of the action button. */
        export function getBadgeBackgroundColor(details: _GetBadgeBackgroundColorDetails): Promise<ColorArray>;

        /**
         * Enables the action button for a tab. By default, an action button is
         * enabled.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * action button.
         */
        export function enable(tabId?: number): Promise<void>;

        /**
         * Disables the action button for a tab.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * action button.
         */
        export function disable(tabId?: number): Promise<void>;

        /** Checks whether the action button is enabled. */
        export function isEnabled(details: _IsEnabledDetails): Promise<boolean>;

        /** Opens the action's popup window in the active window. */
        export function openPopup(): Promise<boolean>;

        /* browserAction events */
        /**
         * Fired when an action button is clicked. This event will not fire if
         * the action has a popup. This is a user input event handler. For
         * asynchronous listeners some restrictions apply.
         */
        export const onClicked: WebExtEvent<(tab: tabs.Tab, info?: OnClickData) => void>;
    }

    /**
     * Manifest keys: `cloud_file`
     *
     * Not allowed in: Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/cloudFile.html
     */
    export namespace cloudFile {
        /* cloudFile types */
        /** Information about a cloud file account. */
        export interface CloudFileAccount {
            /** Unique identifier of the account. */
            id: string;
            /**
             * If true, the account is configured and ready to use. Only configured
             * accounts are offered to the user.
             */
            configured: boolean;
            /** A user-friendly name for this account. */
            name: string;
            /**
             * The maximum size in bytes for a single file to upload. Set to `-1` if
             * unlimited.
             */
            uploadSizeLimit?: number | undefined;
            /**
             * The amount of remaining space on the cloud provider, in bytes. Set to
             * `-1` if unsupported.
             */
            spaceRemaining?: number | undefined;
            /**
             * The amount of space already used on the cloud provider, in bytes. Set
             * to `-1` if unsupported.
             */
            spaceUsed?: number | undefined;
            /**
             * A page for configuring accounts, to be displayed in the preferences
             * UI.
             */
            managementUrl: string;
        }

        /**
         * Defines information to be used in the cloud file entry added to the
         * message.
         */
        export interface CloudFileTemplateInfo {
            /**
             * A URL pointing to an icon to represent the used cloud file service.
             * Defaults to the icon of the provider add-on.
             */
            service_icon?: string | undefined;
            /**
             * A name to represent the used cloud file service. Defaults to the
             * associated cloud file account name.
             */
            service_name?: string | undefined;
            /**
             * A URL pointing to a web page of the used cloud file service. Will be
             * used in a _Learn more about_ link in the footer of the cloud file
             * attachment element.
             */
            service_url?: string | undefined;
            /**
             * If set to true, the cloud file entry for this upload will include a
             * hint, that the download link is password protected.
             */
            download_password_protected?: boolean | undefined;
            /**
             * If set, the cloud file entry for this upload will include a hint, that
             * the file has a download limit.
             */
            download_limit?: number | undefined;
            /**
             * If set, the cloud file entry for this upload will include a hint, that
             * the link will only be available for a limited time.
             */
            download_expiry_date?: _CloudFileTemplateInfoDownloadExpiryDate | undefined;
        }

        /** Information about a cloud file. */
        export interface CloudFile {
            /** An identifier for this file. */
            id: number;
            /** Filename of the file to be transferred. */
            name: string;
            /** Contents of the file to be transferred. */
            data: File;
        }

        /**
         * Information about an already uploaded cloud file, which is related to
         * a new upload. For example if the content of a cloud attachment is
         * updated, if a repeatedly used cloud attachment is renamed (and
         * therefore should be re-uploaded to not invalidate existing links) or
         * if the provider has its manifest property `reuse_uploads` set to
         * `false`.
         */
        export interface RelatedCloudFile {
            /**
             * The identifier for the related file. In some circumstances, the id is
             * unavailable.
             */
            id?: number | undefined;
            /** The URL where the upload of the related file can be accessed. */
            url?: string | undefined;
            /**
             * Additional information of the related file, used in the cloud file
             * entry added to the message.
             */
            templateInfo?: CloudFileTemplateInfo | undefined;
            /** Filename of the related file. */
            name: string;
            /** The content of the new upload differs from the related file. */
            dataChanged: boolean;
        }

        /**
         * If set, the cloud file entry for this upload will include a hint, that
         * the link will only be available for a limited time.
         */
        export interface _CloudFileTemplateInfoDownloadExpiryDate {
            /**
             * The expiry date of the link as the number of milliseconds since the
             * UNIX epoch.
             */
            timestamp: number;
            /**
             * A format options object as used by {@link DateTimeFormat}. Defaults
             * to:
             * [defaultDateFormat.js](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/cloudFile/defaultDateFormat.js)
             */
            format?: { [key: string]: boolean } | undefined;
        }

        export interface _UpdateAccountUpdateProperties {
            /**
             * If true, the account is configured and ready to use. Only configured
             * accounts are offered to the user.
             */
            configured?: boolean | undefined;
            /**
             * The maximum size in bytes for a single file to upload. Set to `-1` if
             * unlimited.
             */
            uploadSizeLimit?: number | undefined;
            /**
             * The amount of remaining space on the cloud provider, in bytes. Set to
             * `-1` if unsupported.
             */
            spaceRemaining?: number | undefined;
            /**
             * The amount of space already used on the cloud provider, in bytes. Set
             * to `-1` if unsupported.
             */
            spaceUsed?: number | undefined;
            /**
             * A page for configuring accounts, to be displayed in the preferences
             * UI.
             */
            managementUrl?: string | undefined;
        }

        /* cloudFile functions */
        /**
         * Retrieve information about a single cloud file account.
         *
         * Not allowed in: Devtools pages
         *
         * @param accountId Unique identifier of the account.
         */
        export function getAccount(accountId: string): Promise<CloudFileAccount>;

        /**
         * Retrieve all cloud file accounts for the current add-on.
         *
         * Not allowed in: Devtools pages
         */
        export function getAllAccounts(): Promise<CloudFileAccount[]>;

        /**
         * Update a cloud file account.
         *
         * Not allowed in: Devtools pages
         *
         * @param accountId Unique identifier of the account.
         */
        export function updateAccount(
            accountId: string,
            updateProperties: _UpdateAccountUpdateProperties,
        ): Promise<CloudFileAccount>;

        /* cloudFile events */
        /**
         * Fired when a file should be uploaded to the cloud file provider.
         *
         * @param account The account used for the file upload.
         *
         * @param fileInfo The file to upload.
         *
         * @param tab The tab where the upload was initiated. Currently only
         * available for the message composer.
         *
         * @param [relatedFileInfo] Information about an already uploaded file,
         * which is related to this upload.
         */
        export const onFileUpload: WebExtEvent<
            (
                account: CloudFileAccount,
                fileInfo: CloudFile,
                tab: tabs.Tab,
                relatedFileInfo?: RelatedCloudFile,
            ) => {
                /**
                 * Set this to `true` if the file upload was aborted by the user and an
                 * {@link cloudFile.onFileUploadAbort} event has been received. No error
                 * message will be shown to the user.
                 */
                aborted?: boolean | undefined;
                /**
                 * Report an error to the user. Set this to `true` for showing a generic
                 * error message, or set a specific error message.
                 */
                error?: boolean | string | undefined;
                /** The URL where the uploaded file can be accessed. */
                url?: string | undefined;
                /**
                 * Additional file information used in the cloud file entry added to the
                 * message.
                 */
                templateInfo?: CloudFileTemplateInfo | undefined;
            }
        >;

        /**
         * @param account The account used for the file upload.
         *
         * @param fileId An identifier for this file.
         *
         * @param tab The tab where the upload was initiated. Currently only
         * available for the message composer.
         */
        export const onFileUploadAbort: WebExtEvent<(account: CloudFileAccount, fileId: number, tab: tabs.Tab) => void>;

        /**
         * Fired when a previously uploaded file should be renamed.
         *
         * @param account The account used for the file upload.
         *
         * @param fileId An identifier for the file which should be renamed.
         *
         * @param newName The new name of the file.
         *
         * @param tab The tab where the rename was initiated. Currently only
         * available for the message composer.
         */
        export const onFileRename: WebExtEvent<
            (
                account: CloudFileAccount,
                fileId: number,
                newName: string,
                tab: tabs.Tab,
            ) => {
                /**
                 * Report an error to the user. Set this to `true` for showing a generic
                 * error message, or set a specific error message.
                 */
                error?: boolean | string | undefined;
                /** The URL where the renamed file can be accessed. */
                url?: string | undefined;
            }
        >;

        /**
         * Fired when a previously uploaded file should be deleted.
         *
         * @param account The account used for the file upload.
         *
         * @param fileId An identifier for this file.
         *
         * @param tab The tab where the upload was initiated. Currently only
         * available for the message composer.
         */
        export const onFileDeleted: WebExtEvent<(account: CloudFileAccount, fileId: number, tab: tabs.Tab) => void>;

        /**
         * Fired when a cloud file account of this add-on was created.
         *
         * @param account The created account.
         */
        export const onAccountAdded: WebExtEvent<(account: CloudFileAccount) => void>;

        /**
         * Fired when a cloud file account of this add-on was deleted.
         *
         * @param accountId The id of the removed account.
         */
        export const onAccountDeleted: WebExtEvent<(accountId: string) => void>;
    }

    /**
     * Use the commands API to add keyboard shortcuts that trigger actions in
     * your extension, for example opening one of the action popups or
     * sending a command to the extension.
     *
     * Manifest keys: `commands`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/commands.html
     */
    export namespace commands {
        /* commands types */
        export interface Command {
            /** The name of the Extension Command */
            name?: string | undefined;
            /** The Extension Command description */
            description?: string | undefined;
            /** The shortcut active for this command, or blank if not active. */
            shortcut?: string | undefined;
        }

        /** The new details for the command. */
        export interface _UpdateDetail {
            /** The name of the command. */
            name: string;
            /** The description for the command. */
            description?: string | undefined;
            /**
             * An empty string to clear the shortcut, or a string matching the format
             * defined by the MDN page of the commands API to set a new shortcut key.
             * If the string does not match this format, the function throws an
             * error.
             */
            shortcut?: string | undefined;
        }

        /* commands functions */
        /**
         * Update the details of an already defined command.
         *
         * @param detail The new details for the command.
         */
        export function update(detail: _UpdateDetail): Promise<void>;

        /**
         * Reset a command's details to what is specified in the manifest.
         *
         * @param name The name of the command.
         */
        export function reset(name: string): Promise<void>;

        /**
         * Returns all the registered extension commands for this extension and
         * their shortcut (if active).
         */
        export function getAll(): Promise<Command[]>;

        /* commands events */
        /**
         * Fired when a registered command is activated using a keyboard
         * shortcut. This is a user input event handler. For asynchronous
         * listeners some restrictions apply.
         *
         * @param tab The details of the active tab while the command occurred.
         */
        export const onCommand: WebExtEvent<(command: string, tab: tabs.Tab) => void>;
    }

    /**
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/compose.html
     */
    export namespace compose {
        /* compose types */
        export type ComposeRecipient =
            | string
            | {
                /**
                 * The ID of a contact or mailing list from the
                 * [contacts](https://webextension-api.thunderbird.net/en/stable/contacts.html)
                 * and
                 * [mailingLists](https://webextension-api.thunderbird.net/en/stable/mailingLists.html)
                 * APIs.
                 */
                id: string;
                /** Which sort of object this ID is for. */
                type: _UndefinedType;
            };

        export type ComposeRecipientList = ComposeRecipient | ComposeRecipient[];

        /** Represent the state of the message composer. */
        export interface ComposeState {
            /** The message can be send now. */
            canSendNow: boolean;
            /** The message can be send later. */
            canSendLater: boolean;
        }

        /**
         * Used by various functions to represent the state of a message being
         * composed. Note that functions using this type may have a partial
         * implementation.
         */
        export interface ComposeDetails {
            /**
             * The ID of an identity from the
             * [accounts](https://webextension-api.thunderbird.net/en/stable/accounts.html)
             * API. The settings from the identity will be used in the composed
             * message. If `replyTo` is also specified, the `replyTo` property of the
             * identity is overridden. The permission
             * <permission>accountsRead</permission> is required to include the
             * `identityId`.
             */
            identityId?: string | undefined;
            /**
             * _Caution_: Setting a value for `from` does not change the used
             * identity, it overrides the FROM header. Many email servers do not
             * accept emails where the FROM header does not match the sender
             * identity. Must be set to exactly one valid email address.
             */
            from?: ComposeRecipient | undefined;
            to?: ComposeRecipientList | undefined;
            cc?: ComposeRecipientList | undefined;
            bcc?: ComposeRecipientList | undefined;
            /**
             * Indicates whether the default fcc setting (defined by the used
             * identity) is being overridden for this message. Setting `false` will
             * clear the override. Setting `true` will throw an _ExtensionError_, if
             * `overrideDefaultFccFolder` is not set as well.
             */
            overrideDefaultFcc?: boolean | undefined;
            /**
             * This value overrides the default fcc setting (defined by the used
             * identity) for this message only. Either a {@link folders.MailFolder}
             * specifying the folder for the copy of the sent message, or an empty
             * string to not save a copy at all.
             */
            overrideDefaultFccFolder?: folders.MailFolder | "" | undefined;
            /**
             * An additional fcc folder which can be selected while composing the
             * message, an empty string if not used.
             */
            additionalFccFolder?: folders.MailFolder | "" | undefined;
            replyTo?: ComposeRecipientList | undefined;
            followupTo?: ComposeRecipientList | undefined;
            newsgroups?: string | string[] | undefined;
            /**
             * The id of the original message (in case of draft, template, forward or
             * reply). Read-only. Is `null` in all other cases or if the original
             * message was opened from file.
             */
            relatedMessageId?: number | undefined;
            subject?: string | undefined;
            /**
             * Read-only. The type of the message being composed, depending on how
             * the compose window was opened by the user.
             */
            type?: _ComposeDetailsType | undefined;
            /** The HTML content of the message. */
            body?: string | undefined;
            /** The plain text content of the message. */
            plainTextBody?: string | undefined;
            /** Whether the message is an HTML message or a plain text message. */
            isPlainText?: boolean | undefined;
            /**
             * Defines the mime format of the sent message (ignored on plain text
             * messages). Defaults to `auto`, which will send html messages as plain
             * text, if they do not include any formatting, and as `both` otherwise
             * (a multipart/mixed message).
             */
            deliveryFormat?: _ComposeDetailsDeliveryFormat | undefined;
            /**
             * Array of custom headers. Headers will be returned in
             * _Http-Header-Case_ (a.k.a. _Train-Case_). Set an empty array to clear
             * all custom headers.
             */
            customHeaders?: CustomHeader[] | undefined;
            /** The priority of the message. */
            priority?: _ComposeDetailsPriority | undefined;
            /**
             * Add the _Disposition-Notification-To_ header to the message to
             * requests the recipients email client to send a reply once the message
             * has been received. Recipient server may strip the header and the
             * recipient might ignore the request.
             */
            returnReceipt?: boolean | undefined;
            /**
             * Let the sender know when the recipient's server received the message.
             * Not supported by all servers.
             */
            deliveryStatusNotification?: boolean | undefined;
            /**
             * Wether or not the vCard of the used identity will be attached to the
             * message during send. Note: If the value has not been modified,
             * selecting a different identity will load the default value of the new
             * identity.
             */
            attachVCard?: boolean | undefined;
            /** Only used in the begin\* functions. Attachments to add to the message. */
            attachments?: Array<FileAttachment | ComposeAttachment> | undefined;
        }

        /**
         * Object used to add, update or rename an attachment in a message being
         * composed.
         */
        export interface FileAttachment {
            /** The new content for the attachment. */
            file?: File | undefined;
            /**
             * The new name for the attachment, as displayed to the user. If not
             * specified, the name of the provided `file` object is used.
             */
            name?: string | undefined;
        }

        /** Represents an attachment in a message being composed. */
        export interface ComposeAttachment {
            /** A unique identifier for this attachment. */
            id: number;
            /** The name of this attachment, as displayed to the user. */
            name?: string | undefined;
            /** The size in bytes of this attachment. Read-only. */
            size?: number | undefined;
        }

        /** A custom header definition. */
        export interface CustomHeader {
            /** Name of a custom header, must have a `X-` prefix. */
            name: string;
            value: string;
        }

        /**
         * A _dictionary object_ with entries for all installed dictionaries,
         * having a language identifier as _key_ (for example `en-US`) and a
         * boolean expression as _value_, indicating whether that dictionary is
         * enabled for spellchecking or not.
         */
        export interface ComposeDictionaries {
            [key: string]: boolean;
        }

        /** Which sort of object this ID is for. */
        export type _UndefinedType = "contact" | "mailingList";

        /**
         * Read-only. The type of the message being composed, depending on how
         * the compose window was opened by the user.
         */
        export type _ComposeDetailsType = "draft" | "new" | "redirect" | "reply" | "forward";

        /**
         * Defines the mime format of the sent message (ignored on plain text
         * messages). Defaults to `auto`, which will send html messages as plain
         * text, if they do not include any formatting, and as `both` otherwise
         * (a multipart/mixed message).
         */
        export type _ComposeDetailsDeliveryFormat = "auto" | "plaintext" | "html" | "both";

        /** The priority of the message. */
        export type _ComposeDetailsPriority = "lowest" | "low" | "normal" | "high" | "highest";

        export type _BeginReplyReplyType = "replyToSender" | "replyToList" | "replyToAll";

        export type _BeginForwardForwardType = "forwardInline" | "forwardAsAttachment";

        /** The used send mode. */
        export type _SendMessageReturnReturnMode = "sendNow" | "sendLater";

        export interface _SendMessageReturnReturn {
            /** The used send mode. */
            mode: _SendMessageReturnReturnMode;
            /**
             * The header messageId of the outgoing message. Only included for
             * actually sent messages.
             */
            headerMessageId?: string | undefined;
            /**
             * Copies of the sent message. The number of created copies depends on
             * the applied file carbon copy configuration (fcc).
             */
            messages: messages.MessageHeader[];
        }

        export type _SendMessageOptionsMode = "default" | "sendNow" | "sendLater";

        export interface _SendMessageOptions {
            mode: _SendMessageOptionsMode;
        }

        /** The used save mode. */
        export type _SaveMessageReturnReturnMode = "draft" | "template";

        export interface _SaveMessageReturnReturn {
            /** The used save mode. */
            mode: _SaveMessageReturnReturnMode;
            /**
             * The saved message(s). The number of saved messages depends on the
             * applied file carbon copy configuration (fcc).
             */
            messages: messages.MessageHeader[];
        }

        export type _SaveMessageOptionsMode = "draft" | "template";

        export interface _SaveMessageOptions {
            mode: _SaveMessageOptionsMode;
        }

        /** The used send mode. */
        export type _OnAfterSendSendInfoMode = "sendNow" | "sendLater";

        export interface _OnAfterSendSendInfo {
            /** The used send mode. */
            mode: _OnAfterSendSendInfoMode;
            /** An error description, if sending the message failed. */
            error?: string | undefined;
            /**
             * The header messageId of the outgoing message. Only included for
             * actually sent messages.
             */
            headerMessageId?: string | undefined;
            /**
             * Copies of the sent message. The number of created copies depends on
             * the applied file carbon copy configuration (fcc).
             */
            messages: messages.MessageHeader[];
        }

        /** The used save mode. */
        export type _OnAfterSaveSaveInfoMode = "draft" | "template";

        export interface _OnAfterSaveSaveInfo {
            /** The used save mode. */
            mode: _OnAfterSaveSaveInfoMode;
            /** An error description, if saving the message failed. */
            error?: string | undefined;
            /**
             * The saved message(s). The number of saved messages depends on the
             * applied file carbon copy configuration (fcc).
             */
            messages: messages.MessageHeader[];
        }

        /* compose functions */
        /**
         * Open a new message compose window.
         *
         * **Note:** The compose format can be set by `details.isPlainText` or by
         * specifying only one of `details.body` or `details.plainTextBody`.
         * Otherwise the default compose format of the selected identity is used.
         *
         * **Note:** Specifying `details.body` and `details.plainTextBody`
         * without also specifying `details.isPlainText` threw an exception in
         * Thunderbird up to version 97\. Since Thunderbird 98, this combination
         * creates a compose window with the compose format of the selected
         * identity, using the matching `details.body` or `details.plainTextBody`
         * value.
         *
         * **Note:** If no identity is specified, this function is using the
         * default identity and not the identity of the referenced message.
         *
         * @param messageId If specified, the message or template to edit as a
         * new message.
         */
        export function beginNew(messageId: number, details?: ComposeDetails): Promise<tabs.Tab>;
        /**
         * Open a new message compose window.
         *
         * **Note:** The compose format can be set by `details.isPlainText` or by
         * specifying only one of `details.body` or `details.plainTextBody`.
         * Otherwise the default compose format of the selected identity is used.
         *
         * **Note:** Specifying `details.body` and `details.plainTextBody`
         * without also specifying `details.isPlainText` threw an exception in
         * Thunderbird up to version 97\. Since Thunderbird 98, this combination
         * creates a compose window with the compose format of the selected
         * identity, using the matching `details.body` or `details.plainTextBody`
         * value.
         *
         * **Note:** If no identity is specified, this function is using the
         * default identity and not the identity of the referenced message.
         */
        export function beginNew(details?: ComposeDetails): Promise<tabs.Tab>;

        /**
         * Open a new message compose window replying to a given message.
         *
         * **Note:** The compose format can be set by `details.isPlainText` or by
         * specifying only one of `details.body` or `details.plainTextBody`.
         * Otherwise the default compose format of the selected identity is used.
         *
         * **Note:** Specifying `details.body` and `details.plainTextBody`
         * without also specifying `details.isPlainText` threw an exception in
         * Thunderbird up to version 97\. Since Thunderbird 98, this combination
         * creates a compose window with the compose format of the selected
         * identity, using the matching `details.body` or `details.plainTextBody`
         * value.
         *
         * **Note:** If no identity is specified, this function is using the
         * default identity and not the identity of the referenced message.
         *
         * @param messageId The message to reply to, as retrieved using other
         * APIs.
         */
        export function beginReply(
            messageId: number,
            replyType: _BeginReplyReplyType,
            details?: ComposeDetails,
        ): Promise<tabs.Tab>;
        /**
         * Open a new message compose window replying to a given message.
         *
         * **Note:** The compose format can be set by `details.isPlainText` or by
         * specifying only one of `details.body` or `details.plainTextBody`.
         * Otherwise the default compose format of the selected identity is used.
         *
         * **Note:** Specifying `details.body` and `details.plainTextBody`
         * without also specifying `details.isPlainText` threw an exception in
         * Thunderbird up to version 97\. Since Thunderbird 98, this combination
         * creates a compose window with the compose format of the selected
         * identity, using the matching `details.body` or `details.plainTextBody`
         * value.
         *
         * **Note:** If no identity is specified, this function is using the
         * default identity and not the identity of the referenced message.
         *
         * @param messageId The message to reply to, as retrieved using other
         * APIs.
         */
        export function beginReply(messageId: number, details?: ComposeDetails): Promise<tabs.Tab>;

        /**
         * Open a new message compose window forwarding a given message.
         *
         * **Note:** The compose format can be set by `details.isPlainText` or by
         * specifying only one of `details.body` or `details.plainTextBody`.
         * Otherwise the default compose format of the selected identity is used.
         *
         * **Note:** Specifying `details.body` and `details.plainTextBody`
         * without also specifying `details.isPlainText` threw an exception in
         * Thunderbird up to version 97\. Since Thunderbird 98, this combination
         * creates a compose window with the compose format of the selected
         * identity, using the matching `details.body` or `details.plainTextBody`
         * value.
         *
         * **Note:** If no identity is specified, this function is using the
         * default identity and not the identity of the referenced message.
         *
         * @param messageId The message to forward, as retrieved using other
         * APIs.
         */
        export function beginForward(
            messageId: number,
            forwardType: _BeginForwardForwardType,
            details?: ComposeDetails,
        ): Promise<tabs.Tab>;
        /**
         * Open a new message compose window forwarding a given message.
         *
         * **Note:** The compose format can be set by `details.isPlainText` or by
         * specifying only one of `details.body` or `details.plainTextBody`.
         * Otherwise the default compose format of the selected identity is used.
         *
         * **Note:** Specifying `details.body` and `details.plainTextBody`
         * without also specifying `details.isPlainText` threw an exception in
         * Thunderbird up to version 97\. Since Thunderbird 98, this combination
         * creates a compose window with the compose format of the selected
         * identity, using the matching `details.body` or `details.plainTextBody`
         * value.
         *
         * **Note:** If no identity is specified, this function is using the
         * default identity and not the identity of the referenced message.
         *
         * @param messageId The message to forward, as retrieved using other
         * APIs.
         */
        export function beginForward(messageId: number, details?: ComposeDetails): Promise<tabs.Tab>;

        /**
         * Fetches the current state of a compose window. Currently only a
         * limited amount of information is available, more will be added in
         * later versions.
         */
        export function getComposeDetails(tabId: number): Promise<ComposeDetails>;

        /**
         * Updates the compose window. Only fields that are to be changed should
         * be specified. Currently only a limited amount of information can be
         * set, more will be added in later versions.
         *
         * **Note:** The compose format of an existing compose window cannot be
         * changed. Since Thunderbird 98, setting conflicting values for
         * `details.body`, `details.plainTextBody` or `details.isPlaintext` no
         * longer throw an exception, instead the compose window chooses the
         * matching `details.body` or `details.plainTextBody` value and ignores
         * the other.
         */
        export function setComposeDetails(tabId: number, details: ComposeDetails): Promise<any>;

        /**
         * Returns a {@link compose.ComposeDictionaries} object, listing all
         * installed dictionaries, including the information whether they are
         * currently enabled or not.
         */
        export function getActiveDictionaries(tabId: number): Promise<ComposeDictionaries>;

        /**
         * Updates the active dictionaries. Throws if the `activeDictionaries`
         * array contains unknown or invalid language identifiers.
         */
        export function setActiveDictionaries(tabId: number, activeDictionaries: string[]): Promise<any>;

        /**
         * Lists all of the attachments of the message being composed in the
         * specified tab.
         */
        export function listAttachments(tabId: number): Promise<ComposeAttachment[]>;

        /**
         * Gets the content of a {@link compose.ComposeAttachment} as a {@link File}
         * object.
         *
         * @param id The unique identifier for the attachment.
         */
        export function getAttachmentFile(id: number): Promise<File>;

        /** Adds an attachment to the message being composed in the specified tab. */
        export function addAttachment(
            tabId: number,
            attachment: FileAttachment | ComposeAttachment,
        ): Promise<ComposeAttachment>;

        /**
         * Updates the name and/or the content of an attachment in the message
         * being composed in the specified tab. If the specified attachment is a
         * cloud file attachment and the associated provider failed to update the
         * attachment, the function will throw an _ExtensionError_.
         */
        export function updateAttachment(
            tabId: number,
            attachmentId: number,
            attachment: FileAttachment,
        ): Promise<ComposeAttachment>;

        /**
         * Removes an attachment from the message being composed in the specified
         * tab.
         */
        export function removeAttachment(tabId: number, attachmentId: number): Promise<any>;

        /**
         * Sends the message currently being composed. If the send mode is not
         * specified or set to `default`, the message will be send directly if
         * the user is online and placed in the users outbox otherwise. The
         * returned Promise fulfills once the message has been successfully sent
         * or placed in the user's outbox. Throws when the send process has been
         * aborted by the user, by an {@link compose.onBeforeSend} event or if
         * there has been an error while sending the message to the outgoing mail
         * server.
         */
        export function sendMessage(tabId: number, options?: _SendMessageOptions): Promise<_SendMessageReturnReturn>;

        /**
         * Saves the message currently being composed as a draft or as a
         * template. If the save mode is not specified, the message will be saved
         * as a draft. The returned Promise fulfills once the message has been
         * successfully saved.
         */
        export function saveMessage(tabId: number, options?: _SaveMessageOptions): Promise<_SaveMessageReturnReturn>;

        /** Returns information about the current state of the message composer. */
        export function getComposeState(tabId: number): Promise<ComposeState>;

        /* compose events */
        /**
         * Fired when a message is about to be sent from the compose window. This
         * is a user input event handler. For asynchronous listeners some
         * restrictions apply.
         *
         * @param details The current state of the compose window. This is
         * functionally the same as calling the {@link compose.getComposeDetails}
         * function.
         */
        export const onBeforeSend: WebExtEvent<
            (
                tab: tabs.Tab,
                details: ComposeDetails,
            ) => {
                /** Cancels the send. */
                cancel?: boolean | undefined;
                /**
                 * Updates the compose window. This is functionally the same as calling
                 * the {@link compose.setComposeDetails} function.
                 */
                details?: ComposeDetails | undefined;
            }
        >;

        /** Fired when sending a message succeeded or failed. */
        export const onAfterSend: WebExtEvent<(tab: tabs.Tab, sendInfo: _OnAfterSendSendInfo) => void>;

        /** Fired when saving a message as draft or template succeeded or failed. */
        export const onAfterSave: WebExtEvent<(tab: tabs.Tab, saveInfo: _OnAfterSaveSaveInfo) => void>;

        /** Fired when an attachment is added to a message being composed. */
        export const onAttachmentAdded: WebExtEvent<(tab: tabs.Tab, attachment: ComposeAttachment) => void>;

        /** Fired when an attachment is removed from a message being composed. */
        export const onAttachmentRemoved: WebExtEvent<(tab: tabs.Tab, attachmentId: number) => void>;

        /**
         * Fired when the user changes the identity that will be used to send a
         * message being composed.
         */
        export const onIdentityChanged: WebExtEvent<(tab: tabs.Tab, identityId: string) => void>;

        /** Fired when the state of the message composer changed. */
        export const onComposeStateChanged: WebExtEvent<(tab: tabs.Tab, state: ComposeState) => void>;

        /**
         * Fired when one or more dictionaries have been activated or
         * deactivated.
         */
        export const onActiveDictionariesChanged: WebExtEvent<
            (tab: tabs.Tab, dictionaries: ComposeDictionaries) => void
        >;
    }

    /**
     * Use a composeAction to put a button in the message composition
     * toolbars. In addition to its icon, a composeAction button can also
     * have a tooltip, a badge, and a popup.
     *
     * Manifest keys: `compose_action`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/composeAction.html
     */
    export namespace composeAction {
        /* composeAction types */
        /**
         * An array of four integers in the range [0,255] that make up the RGBA
         * color. For example, opaque red is `[255, 0, 0, 255]`.
         */
        export type ColorArray = [number, number, number, number];

        /**
         * Pixel data for an image. Must be an {@link ImageData} object (for
         * example, from a {@link Canvas} element).
         */
        export type ImageDataType = ImageData;

        /**
         * A _dictionary object_ to specify multiple {@link ImageData} objects in
         * different sizes, so the icon does not have to be scaled for a device
         * with a different pixel density. Each entry is a _name-value_ pair with
         * _value_ being an {@link ImageData} object, and _name_ its size.
         * Example:
         * [ImageDataDictionary.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/ImageDataDictionary.json)See
         * the MDN documentation about choosing icon sizes for more information
         * on this.
         */
        export interface ImageDataDictionary {
            [key: number]: ImageDataType;
        }

        /** Information sent when a composeAction button is clicked. */
        export interface OnClickData {
            /**
             * An array of keyboard modifiers that were held while the menu item was
             * clicked.
             */
            modifiers: _OnClickDataModifiers[];
            /** An integer value of button by which menu item was clicked. */
            button?: number | undefined;
        }

        export type _OnClickDataModifiers = "Shift" | "Alt" | "Command" | "Ctrl" | "MacCtrl";

        export interface _SetTitleDetails {
            /**
             * A string the composeAction button should display as its label and when
             * moused over. Cleared by setting it to `null` or an empty string (title
             * defined the manifest will be used).
             */
            title: string | null;
            /** Sets the title only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetTitleDetails {
            /**
             * Specifies for which tab the title should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetLabelDetails {
            /**
             * A string the composeAction button should use as its label, overriding
             * the defined title. Can be set to an empty string to not display any
             * label at all. If the containing toolbar is configured to display text
             * only, its title will be used. Cleared by setting it to `null`.
             */
            label: string | null;
            /** Sets the label only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetLabelDetails {
            /**
             * Specifies for which tab the label should be retrieved. If no tab is
             * specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetIconDetails {
            /** The image data for one or more icons for the composeAction button. */
            imageData?: ImageDataType | ImageDataDictionary | undefined;
            /** The paths to one or more icons for the composeAction button. */
            path?: _manifest.IconPath | undefined;
            /** Sets the icon only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetPopupDetails {
            /**
             * The html file to show in a popup. Can be set to an empty string to not
             * open a popup. Cleared by setting it to `null` (action will use the
             * popup value defined in the manifest).
             */
            popup: string | null;
            /** Sets the popup only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetPopupDetails {
            /**
             * Specifies for which tab the popup document should be retrieved. If no
             * tab is specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeTextDetails {
            /**
             * Any number of characters can be passed, but only about four can fit in
             * the space. Cleared by setting it to `null` or an empty string.
             */
            text: string | null;
            /** Sets the badge text only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeTextDetails {
            /**
             * Specifies for which tab the badge text should be retrieved. If no tab
             * is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeBackgroundColorDetails {
            /**
             * The color to use as background in the badge. Cleared by setting it to
             * `null` or an empty string.
             */
            color: string | ColorArray | null;
            /** Sets the background color for the badge only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeBackgroundColorDetails {
            /**
             * Specifies for which tab the badge background color should be
             * retrieved. If no tab is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _IsEnabledDetails {
            /**
             * Specifies for which tab the state should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        /* composeAction functions */
        /**
         * Sets the title of the composeAction button. Is used as tooltip and as
         * the label.
         */
        export function setTitle(details: _SetTitleDetails): Promise<void>;

        /** Gets the title of the composeAction button. */
        export function getTitle(details: _GetTitleDetails): Promise<string>;

        /**
         * Sets the label of the composeAction button. Can be used to set
         * different values for the tooltip (defined by the title) and the label.
         * Additionally, the label can be set to an empty string, not showing any
         * label at all.
         */
        export function setLabel(details: _SetLabelDetails): Promise<void>;

        /** Gets the label of the composeAction button. */
        export function getLabel(details: _GetLabelDetails): Promise<string>;

        /**
         * Sets the icon for the composeAction button. Either the `path` or the
         * `imageData` property must be specified.
         */
        export function setIcon(details: _SetIconDetails): Promise<void>;

        /**
         * Sets the html document to be opened as a popup when the user clicks on
         * the composeAction button.
         */
        export function setPopup(details: _SetPopupDetails): Promise<void>;

        /** Gets the html document set as the popup for this composeAction button. */
        export function getPopup(details: _GetPopupDetails): Promise<string>;

        /**
         * Sets the badge text for the composeAction button. The badge is
         * displayed on top of the icon.
         */
        export function setBadgeText(details: _SetBadgeTextDetails): Promise<void>;

        /** Gets the badge text of the composeAction button. */
        export function getBadgeText(details: _GetBadgeTextDetails): Promise<string>;

        /** Sets the background color for the badge. */
        export function setBadgeBackgroundColor(details: _SetBadgeBackgroundColorDetails): Promise<void>;

        /** Gets the badge background color of the composeAction button. */
        export function getBadgeBackgroundColor(details: _GetBadgeBackgroundColorDetails): Promise<ColorArray>;

        /**
         * Enables the composeAction button for a tab. By default, a
         * composeAction button is enabled.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * composeAction button.
         */
        export function enable(tabId?: number): Promise<void>;

        /**
         * Disables the composeAction button for a tab.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * composeAction button.
         */
        export function disable(tabId?: number): Promise<void>;

        /** Checks whether the composeAction button is enabled. */
        export function isEnabled(details: _IsEnabledDetails): Promise<boolean>;

        /** Opens the action's popup window in the active window. */
        export function openPopup(): Promise<any>;

        /* composeAction events */
        /**
         * Fired when a composeAction button is clicked. This event will not fire
         * if the composeAction has a popup. This is a user input event handler.
         * For asynchronous listeners some restrictions apply.
         */
        export const onClicked: WebExtEvent<(tab: tabs.Tab, info?: OnClickData) => void>;
    }

    /**
     * Permissions: `compose`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/composeScripts.html
     */
    export namespace composeScripts {
        /* composeScripts types */
        /** Details of a compose script registered programmatically */
        export interface RegisteredComposeScriptOptions {
            /** The list of CSS files to inject */
            css?: extensionTypes.ExtensionFileOrCode[] | undefined;
            /** The list of JavaScript files to inject */
            js?: extensionTypes.ExtensionFileOrCode[] | undefined;
        }

        /** An object that represents a compose script registered programmatically */
        export interface RegisteredComposeScript {
            /** Unregister a compose script registered programmatically */
            unregister(): Promise<any>;
        }

        /* composeScripts functions */
        /** Register a compose script programmatically */
        export function register(composeScriptOptions: RegisteredComposeScriptOptions): Promise<any>;
    }

    /**
     * Permissions: `messagesModify`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/messageDisplayScripts.html
     */
    export namespace messageDisplayScripts {
        /* messageDisplayScripts types */
        /** Details of a message display script registered programmatically */
        export interface RegisteredMessageDisplayScriptOptions {
            /** The list of CSS files to inject */
            css?: extensionTypes.ExtensionFileOrCode[] | undefined;
            /** The list of JavaScript files to inject */
            js?: extensionTypes.ExtensionFileOrCode[] | undefined;
        }

        /**
         * An object that represents a message display script registered
         * programmatically
         */
        export interface RegisteredMessageDisplayScript {
            /** Unregister a message display script registered programmatically */
            unregister(): Promise<any>;
        }

        /* messageDisplayScripts functions */
        /** Register a message display script programmatically */
        export function register(messageDisplayScriptOptions: RegisteredMessageDisplayScriptOptions): Promise<any>;
    }

    /**
     * Permissions: `accountsRead`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/folders.html
     */
    export namespace folders {
        /* folders types */
        /**
         * An object describing a mail folder, as returned for example by the
         * {@link folders.getParentFolders} or {@link folders.getSubFolders}
         * methods, or part of a {@link accounts.MailAccount} object, which is
         * returned for example by the {@link accounts.list} and {@link accounts.get}
         * methods. The `subFolders` property is only included if
         * requested.
         */
        export interface MailFolder {
            /** The account this folder belongs to. */
            accountId: string;
            /** The human-friendly name of this folder. */
            name?: string | undefined;
            /**
             * Path to this folder in the account. Although paths look predictable,
             * never guess a folder's path, as there are a number of reasons why it
             * may not be what you think it is. Use {@link folders.getParentFolders}
             * or {@link folders.getSubFolders} to obtain hierarchy information.
             */
            path: string;
            /**
             * Subfolders are only included if requested. They will be returned in
             * the same order as used in Thunderbird's folder pane.
             */
            subFolders?: MailFolder[] | undefined;
            /** The type of folder, for several common types. */
            type?: _MailFolderType | undefined;
        }

        /** An object containing additional information about a mail folder. */
        export interface MailFolderInfo {
            /** Whether this folder is a favorite folder. */
            favorite?: boolean | undefined;
            /** Number of messages in this folder. */
            totalMessageCount?: number | undefined;
            /** Number of unread messages in this folder. */
            unreadMessageCount?: number | undefined;
        }

        /** The type of folder, for several common types. */
        export type _MailFolderType =
            | "inbox"
            | "drafts"
            | "sent"
            | "trash"
            | "templates"
            | "archives"
            | "junk"
            | "outbox";

        export { _delete as delete };

        /* folders functions */
        /**
         * Creates a new subfolder in the specified folder or at the root of the
         * specified account.
         */
        export function create(parent: MailFolder | accounts.MailAccount, childName: string): Promise<MailFolder>;

        /** Renames a folder. */
        export function rename(folder: MailFolder, newName: string): Promise<MailFolder>;

        /**
         * Moves the given `sourceFolder` into the given `destination`. Throws if
         * the destination already contains a folder with the name of the source
         * folder.
         */
        export function move(
            sourceFolder: MailFolder,
            destination: MailFolder | accounts.MailAccount,
        ): Promise<MailFolder>;

        /**
         * Copies the given `sourceFolder` into the given `destination`. Throws
         * if the destination already contains a folder with the name of the
         * source folder.
         */
        export function copy(
            sourceFolder: MailFolder,
            destination: MailFolder | accounts.MailAccount,
        ): Promise<MailFolder>;

        /** Deletes a folder. */
        function _delete(folder: MailFolder): Promise<any>;

        /** Get additional information about a mail folder. */
        export function getFolderInfo(folder: MailFolder): Promise<MailFolderInfo>;

        /**
         * Get all parent folders as a flat ordered array. The first array entry
         * is the direct parent.
         *
         * @param [includeSubFolders] Specifies whether the returned {@link folders.MailFolder}
         * object for each parent folder should include its
         * nested subfolders . Defaults to `false`.
         */
        export function getParentFolders(folder: MailFolder, includeSubFolders?: boolean): Promise<MailFolder[]>;

        /**
         * Get the subfolders of the specified folder or account.
         *
         * @param [includeSubFolders] Specifies whether the returned {@link folders.MailFolder}
         * object for each direct subfolder should also
         * include all its nested subfolders . Defaults to `true`.
         */
        export function getSubFolders(
            folderOrAccount: MailFolder | accounts.MailAccount,
            includeSubFolders?: boolean,
        ): Promise<MailFolder[]>;

        /* folders events */
        /** Fired when a folder has been created. */
        export const onCreated: WebExtEvent<(createdFolder: MailFolder) => void>;

        /** Fired when a folder has been renamed. */
        export const onRenamed: WebExtEvent<(originalFolder: MailFolder, renamedFolder: MailFolder) => void>;

        /** Fired when a folder has been moved. */
        export const onMoved: WebExtEvent<(originalFolder: MailFolder, movedFolder: MailFolder) => void>;

        /** Fired when a folder has been copied. */
        export const onCopied: WebExtEvent<(originalFolder: MailFolder, copiedFolder: MailFolder) => void>;

        /** Fired when a folder has been deleted. */
        export const onDeleted: WebExtEvent<(deletedFolder: MailFolder) => void>;

        /**
         * Fired when certain information of a folder have changed. Bursts of
         * message count changes are collapsed to a single event.
         */
        export const onFolderInfoChanged: WebExtEvent<(folder: MailFolder, folderInfo: MailFolderInfo) => void>;
    }

    /**
     * Permissions: `accountsRead`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/identities.html
     */
    export namespace identities {
        /* identities types */
        export interface MailIdentity {
            /**
             * The id of the {@link accounts.MailAccount} this identity belongs to.
             * The `accountId` property is read-only.
             */
            accountId?: string | undefined;
            /** If the identity uses HTML as the default compose format. */
            composeHtml?: boolean | undefined;
            /**
             * The user's email address as used when messages are sent from this
             * identity.
             */
            email?: string | undefined;
            /** A unique identifier for this identity. The `id` property is read-only. */
            id?: string | undefined;
            /** A user-defined label for this identity. */
            label?: string | undefined;
            /** The user's name as used when messages are sent from this identity. */
            name?: string | undefined;
            /** The reply-to email address associated with this identity. */
            replyTo?: string | undefined;
            /** The organization associated with this identity. */
            organization?: string | undefined;
            /** The signature of the identity. */
            signature?: string | undefined;
            /** If the signature should be interpreted as plain text or as HTML. */
            signatureIsPlainText?: boolean | undefined;
        }

        export { _delete as delete };

        /* identities functions */
        /**
         * Returns the identities of the specified account, or all identities if
         * no account is specified. Do not expect the returned identities to be
         * in any specific order. Use {@link identities.getDefault} to get the
         * default identity of an account.
         */
        export function list(accountId?: string): Promise<MailIdentity[]>;

        /**
         * Returns details of the requested identity, or `null` if it doesn't
         * exist.
         */
        export function get(identityId: string): Promise<MailIdentity>;

        /** Create a new identity in the specified account. */
        export function create(accountId: string, details: MailIdentity): Promise<MailIdentity>;

        /**
         * Attempts to delete the requested identity. Default identities cannot
         * be deleted.
         */
        function _delete(identityId: string): Promise<any>;

        /** Updates the details of an identity. */
        export function update(identityId: string, details: MailIdentity): Promise<MailIdentity>;

        /**
         * Returns the default identity for the requested account, or `null` if
         * it is not defined.
         */
        export function getDefault(accountId: string): Promise<MailIdentity>;

        /** Sets the default identity for the requested account. */
        export function setDefault(accountId: string, identityId: string): Promise<any>;

        /* identities events */
        /**
         * Fired when a new identity has been created and added to an account.
         * The event also fires for default identities that are created when a
         * new account is added.
         */
        export const onCreated: WebExtEvent<(identityId: string, identity: MailIdentity) => void>;

        /** Fired when an identity has been removed from an account. */
        export const onDeleted: WebExtEvent<(identityId: string) => void>;

        /**
         * Fired when one or more properties of an identity have been modified.
         * The returned {@link identities.MailIdentity} includes only the changed
         * values.
         */
        export const onUpdated: WebExtEvent<(identityId: string, changedValues: MailIdentity) => void>;
    }

    /**
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/mailTabs.html
     */
    export namespace mailTabs {
        /* mailTabs types */
        export interface MailTab {
            id: number;
            windowId: number;
            active: boolean;
            /**
             * **Note:** `sortType` and `sortOrder` depend on each other, so both
             * should be present, or neither.
             */
            sortType?: _MailTabSortType | undefined;
            /**
             * **Note:** `sortType` and `sortOrder` depend on each other, so both
             * should be present, or neither.
             */
            sortOrder?: _MailTabSortOrder | undefined;
            viewType?: _MailTabViewType | undefined;
            layout: _MailTabLayout;
            folderPaneVisible?: boolean | undefined;
            messagePaneVisible?: boolean | undefined;
            /**
             * The <permission>accountsRead</permission> permission is required for
             * this property to be included.
             */
            displayedFolder?: folders.MailFolder | undefined;
        }

        export interface QuickFilterTextDetail {
            /**
             * String to match against the `recipients`, `author`, `subject`, or
             * `body`.
             */
            text: string;
            /** Shows messages where `text` matches the recipients. */
            recipients?: boolean | undefined;
            /** Shows messages where `text` matches the author. */
            author?: boolean | undefined;
            /** Shows messages where `text` matches the subject. */
            subject?: boolean | undefined;
            /** Shows messages where `text` matches the message body. */
            body?: boolean | undefined;
        }

        /**
         * **Note:** `sortType` and `sortOrder` depend on each other, so both
         * should be present, or neither.
         */
        export type _MailTabSortType =
            | "none"
            | "date"
            | "subject"
            | "author"
            | "id"
            | "thread"
            | "priority"
            | "status"
            | "size"
            | "flagged"
            | "unread"
            | "recipient"
            | "location"
            | "tags"
            | "junkStatus"
            | "attachments"
            | "account"
            | "custom"
            | "received"
            | "correspondent";

        /**
         * **Note:** `sortType` and `sortOrder` depend on each other, so both
         * should be present, or neither.
         */
        export type _MailTabSortOrder = "none" | "ascending" | "descending";

        export type _MailTabViewType = "ungrouped" | "groupedByThread" | "groupedBySortType";

        export type _MailTabLayout = "standard" | "wide" | "vertical";

        export interface _QueryQueryInfo {
            /** Whether the tabs are active in their windows. */
            active?: boolean | undefined;
            /** Whether the tabs are in the current window. */
            currentWindow?: boolean | undefined;
            /** Whether the tabs are in the last focused window. */
            lastFocusedWindow?: boolean | undefined;
            /**
             * The ID of the parent window, or {@link windows.WINDOW_ID_CURRENT} for
             * the current window.
             */
            windowId?: number | undefined;
        }

        /** Sorts the list of messages. `sortOrder` must also be given. */
        export type _UpdateUpdatePropertiesSortType =
            | "none"
            | "date"
            | "subject"
            | "author"
            | "id"
            | "thread"
            | "priority"
            | "status"
            | "size"
            | "flagged"
            | "unread"
            | "recipient"
            | "location"
            | "tags"
            | "junkStatus"
            | "attachments"
            | "account"
            | "custom"
            | "received"
            | "correspondent";

        /** Sorts the list of messages. `sortType` must also be given. */
        export type _UpdateUpdatePropertiesSortOrder = "none" | "ascending" | "descending";

        export type _UpdateUpdatePropertiesViewType = "ungrouped" | "groupedByThread" | "groupedBySortType";

        /**
         * Sets the arrangement of the folder pane, message list pane, and
         * message display pane. Note that setting this applies it to all mail
         * tabs.
         */
        export type _UpdateUpdatePropertiesLayout = "standard" | "wide" | "vertical";

        export interface _UpdateUpdateProperties {
            /**
             * Sets the folder displayed in the tab. The extension must have the
             * <permission>accountsRead</permission> permission to do this.
             */
            displayedFolder?: folders.MailFolder | undefined;
            /** Sorts the list of messages. `sortOrder` must also be given. */
            sortType?: _UpdateUpdatePropertiesSortType | undefined;
            /** Sorts the list of messages. `sortType` must also be given. */
            sortOrder?: _UpdateUpdatePropertiesSortOrder | undefined;
            viewType?: _UpdateUpdatePropertiesViewType | undefined;
            /**
             * Sets the arrangement of the folder pane, message list pane, and
             * message display pane. Note that setting this applies it to all mail
             * tabs.
             */
            layout?: _UpdateUpdatePropertiesLayout | undefined;
            /** Shows or hides the folder pane. */
            folderPaneVisible?: boolean | undefined;
            /** Shows or hides the message display pane. */
            messagePaneVisible?: boolean | undefined;
        }

        export interface _SetQuickFilterProperties {
            /** Shows or hides the Quick Filter bar. */
            show?: boolean | undefined;
            /** Shows only unread messages. */
            unread?: boolean | undefined;
            /** Shows only flagged messages. */
            flagged?: boolean | undefined;
            /** Shows only messages from people in the address book. */
            contact?: boolean | undefined;
            /** Shows only messages with tags on them. */
            tags?: boolean | messages.TagsDetail | undefined;
            /** Shows only messages with attachments. */
            attachment?: boolean | undefined;
            /** Shows only messages matching the supplied text. */
            text?: QuickFilterTextDetail | undefined;
        }

        /* mailTabs functions */
        /**
         * Gets all mail tabs that have the specified properties, or all mail
         * tabs if no properties are specified.
         */
        export function query(queryInfo: _QueryQueryInfo): Promise<MailTab[]>;

        /**
         * Get the properties of a mail tab.
         *
         * @param tabId ID of the requested mail tab. Throws if the requested tab
         * is not a mail tab.
         */
        export function get(tabId: number): Promise<MailTab>;

        /**
         * Get the properties of the active mail tab, if the active tab is a mail
         * tab. Returns undefined otherwise.
         */
        export function getCurrent(): Promise<MailTab>;

        /**
         * Modifies the properties of a mail tab. Properties that are not
         * specified in `updateProperties` are not modified.
         *
         * @param tabId Defaults to the active tab of the current window.
         */
        export function update(tabId: number, updateProperties: _UpdateUpdateProperties): Promise<any>;
        /**
         * Modifies the properties of a mail tab. Properties that are not
         * specified in `updateProperties` are not modified.
         */
        export function update(updateProperties: _UpdateUpdateProperties): Promise<any>;

        /**
         * Lists the selected messages in the current folder.
         *
         * @param [tabId] Defaults to the active tab of the current window.
         */
        export function getSelectedMessages(tabId?: number): Promise<messages.MessageList>;

        /**
         * Selects none, one or multiple messages.
         *
         * @param tabId Defaults to the active tab of the current window.
         *
         * @param messageIds The IDs of the messages, which should be selected.
         * The mailTab will switch to the folder of the selected messages. Throws
         * if they belong to different folders. Array can be empty to deselect
         * any currently selected message.
         */
        export function setSelectedMessages(tabId: number, messageIds: number[]): Promise<any>;
        /**
         * Selects none, one or multiple messages.
         *
         * @param messageIds The IDs of the messages, which should be selected.
         * The mailTab will switch to the folder of the selected messages. Throws
         * if they belong to different folders. Array can be empty to deselect
         * any currently selected message.
         */
        export function setSelectedMessages(messageIds: number[]): Promise<any>;

        /**
         * Sets the Quick Filter user interface based on the options specified.
         *
         * @param tabId Defaults to the active tab of the current window.
         */
        export function setQuickFilter(
            tabId: number,
            properties: _SetQuickFilterProperties,
        ): Promise<any>; /** Sets the Quick Filter user interface based on the options specified. */
        export function setQuickFilter(properties: _SetQuickFilterProperties): Promise<any>;

        /* mailTabs events */
        /** Fired when the displayed folder changes in any mail tab. */
        export const onDisplayedFolderChanged: WebExtEvent<
            (tab: tabs.Tab, displayedFolder: folders.MailFolder) => void
        >;

        /** Fired when the selected messages change in any mail tab. */
        export const onSelectedMessagesChanged: WebExtEvent<
            (tab: tabs.Tab, selectedMessages: messages.MessageList) => void
        >;
    }

    /**
     * The menus API allows to add items to Thunderbirds menus. You can
     * choose what types of objects your context menu additions apply to,
     * such as images, hyperlinks, and pages.
     *
     * Permissions: `menus`, `menus`
     *
     * @see https://webextension-api.thunderbird.net/en/latest/menus.html
     */
    export namespace menus {
        /* menus types */
        /**
         * The different contexts a menu can appear in. Specifying `all` is
         * equivalent to the combination of all other contexts excluding `tab`
         * and `tools_menu`. More information about each context can be found in
         * the Supported UI Elements article on developer.thunderbird.net.
         */
        export type ContextType =
            | "all"
            | "page"
            | "frame"
            | "selection"
            | "link"
            | "editable"
            | "password"
            | "image"
            | "video"
            | "audio"
            | "browser_action"
            | "compose_action"
            | "message_display_action"
            | "tab"
            | "message_list"
            | "folder_pane"
            | "compose_attachments"
            | "message_attachments"
            | "all_message_attachments"
            | "tools_menu";

        /** The type of menu item. */
        export type ItemType = "normal" | "checkbox" | "radio" | "separator";

        /**
         * Information sent when a context menu is being shown. Some properties
         * are only included if the extension has host permission for the given
         * context, for example :permission:`activeTab` for content tabs,
         * :permission:`compose` for compose tabs and :permission:`messagesRead`
         * for message display tabs.
         */
        export interface OnShowData {
            /** A list of IDs of the menu items that were shown. */
            menuIds: Array<number | string>;
            /** A list of all contexts that apply to the menu. */
            contexts: ContextType[];
            /**
             * A flag indicating whether the element is editable (text input,
             * textarea, etc.).
             */
            editable: boolean;
            /**
             * One of `image`, `video`, or `audio` if the context menu was activated
             * on one of these types of elements.
             */
            mediaType?: string | undefined;
            /**
             * The type of view where the menu is shown. May be unset if the menu is
             * not associated with a view.
             */
            viewType?: extension.ViewType | undefined;
            /**
             * If the element is a link, the text of that link. **Note:** Host
             * permission is required.
             */
            linkText?: string | undefined;
            /**
             * If the element is a link, the URL it points to. **Note:** Host
             * permission is required.
             */
            linkUrl?: string | undefined;
            /**
             * Will be present for elements with a _src_ URL. **Note:** Host
             * permission is required.
             */
            srcUrl?: string | undefined;
            /**
             * The URL of the page where the menu item was clicked. This property is
             * not set if the click occurred in a context where there is no current
             * page, such as in a launcher context menu. **Note:** Host permission is
             * required.
             */
            pageUrl?: string | undefined;
            /**
             * The URL of the frame of the element where the context menu was
             * clicked, if it was in a frame. **Note:** Host permission is required.
             */
            frameUrl?: string | undefined;
            /**
             * The text for the context selection, if any. **Note:** Host permission
             * is required.
             */
            selectionText?: string | undefined;
            /**
             * An identifier of the clicked content element, if any. Use {@link menus.getTargetElement}
             * in the page to find the corresponding element.
             */
            targetElementId?: number | undefined;
            /** An identifier of the clicked Thunderbird UI element, if any. */
            fieldId?: _OnShowDataFieldId | undefined;
            /**
             * The selected messages, if the context menu was opened in the message
             * list. The <permission>messagesRead</permission> permission is
             * required.
             */
            selectedMessages?: messages.MessageList | undefined;
            /**
             * The displayed folder, if the context menu was opened in the message
             * list. The <permission>accountsRead</permission> permission is
             * required.
             */
            displayedFolder?: folders.MailFolder | undefined;
            /**
             * The selected folder, if the context menu was opened in the folder
             * pane. The <permission>accountsRead</permission> permission is
             * required.
             */
            selectedFolder?: folders.MailFolder | undefined;
            /**
             * The selected account, if the context menu was opened on an account
             * entry in the folder pane. The <permission>accountsRead</permission>
             * permission is required.
             */
            selectedAccount?: accounts.MailAccount | undefined;
            /**
             * The selected attachments. The <permission>compose</permission>
             * permission is required to return attachments of a message being
             * composed. The <permission>messagesRead</permission> permission is
             * required to return attachments of displayed messages.
             */
            attachments?: Array<compose.ComposeAttachment | messages.MessageAttachment> | undefined;
        }

        /** Information sent when a context menu item is clicked. */
        export interface OnClickData {
            /** The ID of the menu item that was clicked. */
            menuItemId: number | string;
            /** The parent ID, if any, for the item clicked. */
            parentMenuItemId?: number | string | undefined;
            /**
             * A flag indicating whether the element is editable (text input,
             * textarea, etc.).
             */
            editable: boolean;
            /**
             * One of `image`, `video`, or `audio` if the context menu was activated
             * on one of these types of elements.
             */
            mediaType?: string | undefined;
            /**
             * The type of view where the menu is clicked. May be unset if the menu
             * is not associated with a view.
             */
            viewType?: extension.ViewType | undefined;
            /** If the element is a link, the text of that link. */
            linkText?: string | undefined;
            /** If the element is a link, the URL it points to. */
            linkUrl?: string | undefined;
            /** Will be present for elements with a _src_ URL. */
            srcUrl?: string | undefined;
            /**
             * The URL of the page where the menu item was clicked. This property is
             * not set if the click occurred in a context where there is no current
             * page, such as in a launcher context menu.
             */
            pageUrl?: string | undefined;
            /** The id of the frame of the element where the context menu was clicked. */
            frameId?: number | undefined;
            /**
             * The URL of the frame of the element where the context menu was
             * clicked, if it was in a frame.
             */
            frameUrl?: string | undefined;
            /** The text for the context selection, if any. */
            selectionText?: string | undefined;
            /**
             * A flag indicating the state of a checkbox or radio item before it was
             * clicked.
             */
            wasChecked?: boolean | undefined;
            /**
             * A flag indicating the state of a checkbox or radio item after it is
             * clicked.
             */
            checked?: boolean | undefined;
            /**
             * An array of keyboard modifiers that were held while the menu item was
             * clicked.
             */
            modifiers: _OnClickDataModifiers[];
            /** An integer value of button by which menu item was clicked. */
            button?: number | undefined;
            /**
             * An identifier of the clicked content element, if any. Use {@link menus.getTargetElement}
             * in the page to find the corresponding element.
             */
            targetElementId?: number | undefined;
            /** An identifier of the clicked Thunderbird UI element, if any. */
            fieldId?: _OnClickDataFieldId | undefined;
            /**
             * The selected messages, if the context menu was opened in the message
             * list. The <permission>messagesRead</permission> permission is
             * required.
             */
            selectedMessages?: messages.MessageList | undefined;
            /**
             * The displayed folder, if the context menu was opened in the message
             * list. The <permission>accountsRead</permission> permission is
             * required.
             */
            displayedFolder?: folders.MailFolder | undefined;
            /**
             * The selected folder, if the context menu was opened in the folder
             * pane. The <permission>accountsRead</permission> permission is
             * required.
             */
            selectedFolder?: folders.MailFolder | undefined;
            /**
             * The selected account, if the context menu was opened on an account
             * entry in the folder pane. The <permission>accountsRead</permission>
             * permission is required.
             */
            selectedAccount?: accounts.MailAccount | undefined;
            /**
             * The selected attachments. The <permission>compose</permission>
             * permission is required to return attachments of a message being
             * composed. The <permission>messagesRead</permission> permission is
             * required to return attachments of displayed messages.
             */
            attachments?: Array<compose.ComposeAttachment | messages.MessageAttachment> | undefined;
        }

        /** An identifier of the clicked Thunderbird UI element, if any. */
        export type _OnShowDataFieldId =
            | "composeSubject"
            | "composeTo"
            | "composeCc"
            | "composeBcc"
            | "composeReplyTo"
            | "composeNewsgroupTo";

        export type _OnClickDataModifiers = "Shift" | "Alt" | "Command" | "Ctrl" | "MacCtrl";

        /** An identifier of the clicked Thunderbird UI element, if any. */
        export type _OnClickDataFieldId =
            | "composeSubject"
            | "composeTo"
            | "composeCc"
            | "composeBcc"
            | "composeReplyTo"
            | "composeNewsgroupTo";

        export interface _CreateCreateProperties {
            /** The type of menu item. Defaults to `normal` if not specified. */
            type?: ItemType | undefined;
            /**
             * The unique ID to assign to this item. Mandatory for event pages.
             * Cannot be the same as another ID for this extension.
             */
            id?: string | undefined;
            /**
             * Custom icons to display next to the menu item. Custom icons can only
             * be set for items appearing in submenus.
             */
            icons?: _manifest.IconPath | undefined;
            /**
             * The text to be displayed in the item; this is _required_ unless `type`
             * is `separator`. When the context is `selection`, you can use `%s`
             * within the string to show the selected text. For example, if this
             * parameter's value is `Translate '%s' to Latin` and the user selects
             * the word `cool`, the context menu item for the selection is
             * `Translate 'cool' to Latin`. To specify an access key for the new menu
             * entry, include a `&` before the desired letter in the title. For
             * example `&Help`.
             */
            title?: string | undefined;
            /**
             * The initial state of a checkbox or radio item: `true` for selected and
             * `false` for unselected. Only one radio item can be selected at a time
             * in a given group of radio items.
             */
            checked?: boolean | undefined;
            /**
             * List of contexts this menu item will appear in. Defaults to `['page']`
             * if not specified.
             */
            contexts?: ContextType[] | undefined;
            /**
             * List of view types where the menu item will be shown. Defaults to any
             * view, including those without a viewType.
             */
            viewTypes?: extension.ViewType[] | undefined;
            /** Whether the item is visible in the menu. */
            visible?: boolean | undefined;
            /**
             * A function that will be called back when the menu item is clicked.
             * Event pages cannot use this.
             *
             * @param info Information about the item clicked and the context where
             * the click happened.
             *
             * @param tab The details of the tab where the click took place.
             */
            onclick?: (info: OnClickData, tab: tabs.Tab) => void | undefined;
            /**
             * The ID of a parent menu item; this makes the item a child of a
             * previously added item.
             */
            parentId?: number | string | undefined;
            /**
             * Lets you restrict the item to apply only to documents whose URL
             * matches one of the given patterns. (This applies to frames as well.)
             * For details on the format of a pattern, see Match Patterns .
             */
            documentUrlPatterns?: string[] | undefined;
            /**
             * Similar to documentUrlPatterns, but lets you filter based on the src
             * attribute of img/audio/video tags and the href of anchor tags.
             */
            targetUrlPatterns?: string[] | undefined;
            /**
             * Whether this context menu item is enabled or disabled. Defaults to
             * true.
             */
            enabled?: boolean | undefined;
            /**
             * Specifies a command to issue for the context click. Currently supports
             * internal commands `_execute_browser_action`, `_execute_compose_action`
             * and `_execute_message_display_action`.
             */
            command?: string | undefined;
        }

        /**
         * The properties to update. Accepts the same values as the create
         * function.
         */
        export interface _UpdateUpdateProperties {
            type?: ItemType | undefined;
            icons?: _manifest.IconPath | undefined;
            title?: string | undefined;
            checked?: boolean | undefined;
            contexts?: ContextType[] | undefined;
            viewTypes?: extension.ViewType[] | undefined;
            /** Whether the item is visible in the menu. */
            visible?: boolean | undefined;
            /**
             * @param tab The details of the tab where the click took place.
             * **Note:** this parameter only present for extensions.
             */
            onclick?: (info: OnClickData, tab: tabs.Tab) => void | undefined;
            /**
             * **Note:** You cannot change an item to be a child of one of its own
             * descendants.
             */
            parentId?: number | string | undefined;
            documentUrlPatterns?: string[] | undefined;
            targetUrlPatterns?: string[] | undefined;
            enabled?: boolean | undefined;
        }

        export interface _OverrideContextContextOptions {
            /** Whether to also include default menu items in the menu. */
            showDefaults?: boolean | undefined;
            /**
             * ContextType to override, to allow menu items from other extensions in
             * the menu. Currently only `tab` is supported.
             * `contextOptions.showDefaults` cannot be used with this option.
             */
            context?: "tab" | undefined;
            /**
             * Required when context is `tab`. Requires the
             * <permission>tabs</permission> permission.
             */
            tabId?: number | undefined;
        }

        /* menus properties */
        /**
         * The maximum number of top level extension items that can be added to
         * an extension action context menu. Any items beyond this limit will be
         * ignored.
         */
        export const ACTION_MENU_TOP_LEVEL_LIMIT: number;

        /* menus functions */
        /**
         * Creates a new context menu item. Note that if an error occurs during
         * creation, you may not find out until the creation callback fires (the
         * details will be in runtime.lastError ).
         *
         * @param [callback] Called when the item has been created in the
         * browser. If there were any problems creating the item, details will be
         * available in runtime.lastError .
         *
         * @returns The ID of the newly created item.
         */
        export function create(createProperties: _CreateCreateProperties, callback?: () => void): number | string;

        /**
         * Updates a previously created context menu item.
         *
         * @param id The ID of the item to update.
         *
         * @param updateProperties The properties to update. Accepts the same
         * values as the create function.
         */
        export function update(id: number | string, updateProperties: _UpdateUpdateProperties): Promise<void>;

        /**
         * Removes a context menu item.
         *
         * @param menuItemId The ID of the context menu item to remove.
         */
        export function remove(menuItemId: number | string): Promise<void>;

        /** Removes all context menu items added by this extension. */
        export function removeAll(): Promise<void>;

        /**
         * Show the matching menu items from this extension instead of the
         * default menu. This should be called during a contextmenu event
         * handler, and only applies to the menu that opens after this event.
         */
        export function overrideContext(contextOptions: _OverrideContextContextOptions): void;

        /**
         * Updates the extension items in the shown menu, including changes that
         * have been made since the menu was shown. Has no effect if the menu is
         * hidden. Rebuilding a shown menu is an expensive operation, only invoke
         * this method when necessary.
         */
        export function refresh(): Promise<any>;

        /**
         * Retrieve the element that was associated with a recent contextmenu
         * event.
         *
         * @param targetElementId The identifier of the clicked element,
         * available as `info.targetElementId` in the {@link menus.onShown} and
         * {@link menus.onClicked} events.
         */
        export function getTargetElement(targetElementId: number): Element | void;

        /* menus events */
        /**
         * Fired when a context menu item is clicked. This is a user input event
         * handler. For asynchronous listeners some restrictions apply.
         *
         * @param info Information about the item clicked and the context where
         * the click happened.
         *
         * @param [tab] The details of the tab where the click took place. If the
         * click did not take place in a tab, this parameter will be missing.
         */
        export const onClicked: WebExtEvent<(info: OnClickData, tab?: tabs.Tab) => void>;

        /**
         * Fired when a menu is shown. The extension can add, modify or remove
         * menu items and call {@link menus.refresh} to update the menu.
         *
         * @param info Information about the context of the menu action and the
         * created menu items.
         *
         * @param tab The details of the tab where the menu was opened.
         */
        export const onShown: WebExtEvent<(info: OnShowData, tab: tabs.Tab) => void>;

        /**
         * Fired when a menu is hidden. This event is only fired if onShown has
         * fired before.
         */
        export const onHidden: WebExtEvent<() => void>;
    }

    /**
     * Permissions: `messagesRead`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/messageDisplay.html
     */
    export namespace messageDisplay {
        /**
         * Where to open the message. If not specified, the users preference is
         * honoured. Ignored for external messages, which are always opened in a
         * new window.
         */
        export type _OpenOpenPropertiesLocation = "tab" | "window";

        /**
         * Settings for opening the message. Exactly one of messageId or
         * headerMessageId must be specified.
         */
        export interface _OpenOpenProperties {
            /**
             * The id of a message to be opened. Will throw an _ExtensionError_, if
             * the provided `messageId` is unknown or invalid.
             */
            messageId?: number | undefined;
            /**
             * The headerMessageId of a message to be opened. Will throw an
             * _ExtensionError_, if the provided `headerMessageId` is unknown or
             * invalid. Not supported for external messages.
             */
            headerMessageId?: string | undefined;
            /**
             * Where to open the message. If not specified, the users preference is
             * honoured. Ignored for external messages, which are always opened in a
             * new window.
             */
            location?: _OpenOpenPropertiesLocation | undefined;
            /**
             * Whether the new tab should become the active tab in the window. Only
             * applicable to messages opened in tabs.
             */
            active?: boolean | undefined;
            /**
             * The id of the window, where the new tab should be created. Defaults to
             * the current window. Only applicable to messages opened in tabs.
             */
            windowId?: number | undefined;
        }

        /* messageDisplay functions */
        /**
         * Gets the currently displayed message in the specified tab (even if the
         * tab itself is currently not visible). It returns `null` if no messages
         * are displayed, or if multiple messages are displayed.
         */
        export function getDisplayedMessage(tabId: number): Promise<messages.MessageHeader | null>;

        /**
         * Gets an array of the currently displayed messages in the specified tab
         * (even if the tab itself is currently not visible). The array is empty
         * if no messages are displayed.
         */
        export function getDisplayedMessages(tabId: number): Promise<messages.MessageHeader[]>;

        /**
         * Opens a message in a new tab or in a new window.
         *
         * @param openProperties Settings for opening the message. Exactly one of
         * messageId or headerMessageId must be specified.
         */
        export function open(openProperties: _OpenOpenProperties): Promise<tabs.Tab>;

        /* messageDisplay events */
        /**
         * Fired when a message is displayed, whether in a 3-pane tab, a message
         * tab, or a message window.
         */
        export const onMessageDisplayed: WebExtEvent<(tab: tabs.Tab, message: messages.MessageHeader) => void>;

        /**
         * Fired when either a single message is displayed or when multiple
         * messages are displayed, whether in a 3-pane tab, a message tab, or a
         * message window.
         */
        export const onMessagesDisplayed: WebExtEvent<(tab: tabs.Tab, messages: messages.MessageHeader[]) => void>;
    }

    /**
     * Use a messageDisplayAction to put a button in the message display
     * toolbar. In addition to its icon, a messageDisplayAction button can
     * also have a tooltip, a badge, and a popup.
     *
     * Manifest keys: `message_display_action`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/messageDisplayAction.html
     */
    export namespace messageDisplayAction {
        /* messageDisplayAction types */
        /**
         * An array of four integers in the range [0,255] that make up the RGBA
         * color. For example, opaque red is `[255, 0, 0, 255]`.
         */
        export type ColorArray = [number, number, number, number];

        /**
         * Pixel data for an image. Must be an {@link ImageData} object (for
         * example, from a {@link Canvas} element).
         */
        export type ImageDataType = ImageData;

        /**
         * A _dictionary object_ to specify multiple {@link ImageData} objects in
         * different sizes, so the icon does not have to be scaled for a device
         * with a different pixel density. Each entry is a _name-value_ pair with
         * _value_ being an {@link ImageData} object, and _name_ its size.
         * Example:
         * [ImageDataDictionary.json](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/ImageDataDictionary.json)See
         * the MDN documentation about choosing icon sizes for more information
         * on this.
         */
        export interface ImageDataDictionary {
            [key: number]: ImageDataType;
        }

        /** Information sent when a messageDisplayAction button is clicked. */
        export interface OnClickData {
            /**
             * An array of keyboard modifiers that were held while the menu item was
             * clicked.
             */
            modifiers: _OnClickDataModifiers[];
            /** An integer value of button by which menu item was clicked. */
            button?: number | undefined;
        }

        export type _OnClickDataModifiers = "Shift" | "Alt" | "Command" | "Ctrl" | "MacCtrl";

        export interface _SetTitleDetails {
            /**
             * A string the messageDisplayAction button should display as its label
             * and when moused over. Cleared by setting it to `null` or an empty
             * string (title defined the manifest will be used).
             */
            title: string | null;
            /** Sets the title only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetTitleDetails {
            /**
             * Specifies for which tab the title should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetLabelDetails {
            /**
             * A string the messageDisplayAction button should use as its label,
             * overriding the defined title. Can be set to an empty string to not
             * display any label at all. If the containing toolbar is configured to
             * display text only, its title will be used. Cleared by setting it to
             * `null`.
             */
            label: string | null;
            /** Sets the label only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetLabelDetails {
            /**
             * Specifies for which tab the label should be retrieved. If no tab is
             * specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetIconDetails {
            /** The image data for one or more icons for the composeAction button. */
            imageData?: ImageDataType | ImageDataDictionary | undefined;
            /** The paths to one or more icons for the messageDisplayAction button. */
            path?: _manifest.IconPath | undefined;
            /** Sets the icon only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetPopupDetails {
            /**
             * The html file to show in a popup. Can be set to an empty string to not
             * open a popup. Cleared by setting it to `null` (action will use the
             * popup value defined in the manifest).
             */
            popup: string | null;
            /** Sets the popup only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetPopupDetails {
            /**
             * Specifies for which tab the popup document should be retrieved. If no
             * tab is specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeTextDetails {
            /**
             * Any number of characters can be passed, but only about four can fit in
             * the space. Cleared by setting it to `null` or an empty string.
             */
            text: string | null;
            /** Sets the badge text only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeTextDetails {
            /**
             * Specifies for which tab the badge text should be retrieved. If no tab
             * is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _SetBadgeBackgroundColorDetails {
            /**
             * The color to use as background in the badge. Cleared by setting it to
             * `null` or an empty string.
             */
            color: string | ColorArray | null;
            /** Sets the background color for the badge only for the given tab. */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _GetBadgeBackgroundColorDetails {
            /**
             * Specifies for which tab the badge background color should be
             * retrieved. If no tab is specified, the global label is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        export interface _IsEnabledDetails {
            /**
             * Specifies for which tab the state should be retrieved. If no tab is
             * specified, the global value is retrieved.
             */
            tabId?: number | undefined;
            /**
             * Will throw an error if used.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            windowId?: number | undefined;
        }

        /* messageDisplayAction functions */
        /**
         * Sets the title of the messageDisplayAction button. Is used as tooltip
         * and as the label.
         */
        export function setTitle(details: _SetTitleDetails): Promise<void>;

        /** Gets the title of the messageDisplayAction button. */
        export function getTitle(details: _GetTitleDetails): Promise<string>;

        /**
         * Sets the label of the messageDisplayAction button. Can be used to set
         * different values for the tooltip (defined by the title) and the label.
         * Additionally, the label can be set to an empty string, not showing any
         * label at all.
         */
        export function setLabel(details: _SetLabelDetails): Promise<void>;

        /** Gets the label of the messageDisplayAction button. */
        export function getLabel(details: _GetLabelDetails): Promise<string>;

        /**
         * Sets the icon for the messageDisplayAction button. Either the `path`
         * or the `imageData` property must be specified.
         */
        export function setIcon(details: _SetIconDetails): Promise<void>;

        /**
         * Sets the html document to be opened as a popup when the user clicks on
         * the messageDisplayAction button.
         */
        export function setPopup(details: _SetPopupDetails): Promise<void>;

        /**
         * Gets the html document set as the popup for this messageDisplayAction
         * button.
         */
        export function getPopup(details: _GetPopupDetails): Promise<string>;

        /**
         * Sets the badge text for the messageDisplayAction button. The badge is
         * displayed on top of the icon.
         */
        export function setBadgeText(details: _SetBadgeTextDetails): Promise<void>;

        /** Gets the badge text of the messageDisplayAction button. */
        export function getBadgeText(details: _GetBadgeTextDetails): Promise<string>;

        /** Sets the background color for the badge. */
        export function setBadgeBackgroundColor(details: _SetBadgeBackgroundColorDetails): Promise<void>;

        /** Gets the badge background color of the messageDisplayAction button. */
        export function getBadgeBackgroundColor(details: _GetBadgeBackgroundColorDetails): Promise<ColorArray>;

        /**
         * Enables the messageDisplayAction button for a tab. By default, a
         * messageDisplayAction button is enabled.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * messageDisplayAction button.
         */
        export function enable(tabId?: number): Promise<void>;

        /**
         * Disables the messageDisplayAction button for a tab.
         *
         * @param [tabId] The id of the tab for which you want to modify the
         * messageDisplayAction button.
         */
        export function disable(tabId?: number): Promise<void>;

        /** Checks whether the messageDisplayAction button is enabled. */
        export function isEnabled(details: _IsEnabledDetails): Promise<boolean>;

        /** Opens the action's popup window in the active window. */
        export function openPopup(): Promise<any>;

        /* messageDisplayAction events */
        /**
         * Fired when a messageDisplayAction button is clicked. This event will
         * not fire if the messageDisplayAction has a popup. This is a user input
         * event handler. For asynchronous listeners some restrictions apply.
         */
        export const onClicked: WebExtEvent<(tab: tabs.Tab, info?: OnClickData) => void>;
    }

    /**
     * Permissions: `messagesRead`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/messages.html
     */
    export namespace messages {
        /* messages types */
        /** Basic information about a message. */
        export interface MessageHeader {
            author: string;
            /** The Bcc recipients. Not populated for news/nntp messages. */
            bccList: string[];
            /** The Cc recipients. Not populated for news/nntp messages. */
            ccList: string[];
            date: extensionTypes.Date;
            /**
             * Whether this message is a real message or an external message (opened
             * from a file or from an attachment).
             */
            external: boolean;
            /** Whether this message is flagged (a.k.a. starred). */
            flagged: boolean;
            /**
             * The <permission>accountsRead</permission> permission is required for
             * this property to be included. Not available for external or attached
             * messages.
             */
            folder?: folders.MailFolder | undefined;
            /** The message-id header of the message. */
            headerMessageId: string;
            /**
             * Some account types (for example `pop3`) allow to download only the
             * headers of the message, but not its body. The body of such messages
             * will not be available.
             */
            headersOnly: boolean;
            id: number;
            /**
             * Whether the message has been marked as junk. Always `false` for
             * news/nntp messages and external messages.
             */
            junk: boolean;
            /**
             * The junk score associated with the message. Always `0` for news/nntp
             * messages and external messages.
             */
            junkScore: number;
            /**
             * Whether the message has been marked as read. Not available for
             * external or attached messages.
             */
            read?: boolean | undefined;
            /** Whether the message has been received recently and is marked as new. */
            new: boolean;
            /** The To recipients. Not populated for news/nntp messages. */
            recipients: string[];
            /** The total size of the message in bytes. */
            size: number;
            /** The subject of the message. */
            subject: string;
            /**
             * Tags associated with this message. For a list of available tags, call
             * the listTags method.
             */
            tags: string[];
        }

        /**
         * See
         * [how-to/messageLists](https://webextension-api.thunderbird.net/en/stable/how-to/messageLists.html)
         * for more information.
         */
        export interface MessageList {
            id?: string | undefined;
            messages: MessageHeader[];
        }

        /** Represents an email message "part", which could be the whole message */
        export interface MessagePart {
            /** The content of the part */
            body?: string | undefined;
            contentType?: string | undefined;
            /**
             * A _dictionary object_ of part headers as _key-value_ pairs, with the
             * header name as _key_, and an array of headers as _value_
             */
            headers?: { [key: string]: string[] } | undefined;
            /** Name of the part, if it is a file */
            name?: string | undefined;
            /**
             * The identifier of this part, used in {@link messages.getAttachmentFile}
             */
            partName?: string | undefined;
            /** Any sub-parts of this part */
            parts?: MessagePart[] | undefined;
            /**
             * The size of this part. The size of _message/\*_ parts is not the
             * actual message size (on disc), but the total size of its decoded body
             * parts, excluding headers.
             */
            size?: number | undefined;
        }

        /**
         * Message properties used in {@link messages.update} and {@link messages.import}.
         *  They can also be monitored by {@link messages.onUpdated}.
         */
        export interface MessageProperties {
            /** Whether the message is flagged (a.k.a starred). */
            flagged?: boolean | undefined;
            /**
             * Whether the message is marked as junk. Only supported in {@link messages.update}
             */
            junk?: boolean | undefined;
            /**
             * Whether the message is marked as new. Only supported in {@link messages.import}
             */
            new?: boolean | undefined;
            /** Whether the message is marked as read. */
            read?: boolean | undefined;
            /**
             * Tags associated with this message. For a list of available tags, call
             * the listTags method.
             */
            tags?: string[] | undefined;
        }

        export interface MessageTag {
            /** Unique tag identifier. */
            key: string;
            /** Human-readable tag name. */
            tag: string;
            /** Tag color. */
            color: string;
            /** Custom sort string (usually empty). */
            ordinal: string;
        }

        /**
         * Used for filtering messages by tag in various methods. Note that
         * functions using this type may have a partial implementation.
         */
        export interface TagsDetail {
            /**
             * A _dictionary object_ with one or more filter condition as _key-value_
             * pairs, the _key_ being the tag to filter on, and the _value_ being a
             * boolean expression, requesting whether a message must include (`true`)
             * or exclude (`false`) the tag. For a list of available tags, call the
             * {@link messages.listTags} method.
             */
            tags: _TagsDetailTags;
            /** Whether all of the tag filters must apply, or any of them. */
            mode: _TagsDetailMode;
        }

        /** Represents an attachment in a message. */
        export interface MessageAttachment {
            /** The content type of the attachment. */
            contentType: string;
            /**
             * The name, as displayed to the user, of this attachment. This is
             * usually but not always the filename of the attached file.
             */
            name: string;
            /**
             * Identifies the MIME part of the message associated with this
             * attachment.
             */
            partName: string;
            /** The size in bytes of this attachment. */
            size: number;
            /** A MessageHeader, if this attachment is a message. */
            message?: MessageHeader | undefined;
        }

        /**
         * A _dictionary object_ with one or more filter condition as _key-value_
         * pairs, the _key_ being the tag to filter on, and the _value_ being a
         * boolean expression, requesting whether a message must include (`true`)
         * or exclude (`false`) the tag. For a list of available tags, call the
         * {@link messages.listTags} method.
         */
        export interface _TagsDetailTags {
            [key: string]: boolean;
        }

        /** Whether all of the tag filters must apply, or any of them. */
        export type _TagsDetailMode = "all" | "any";

        export interface _QueryQueryInfo {
            /** If specified, returns only messages with or without attachments. */
            attachment?: boolean | undefined;
            /**
             * Returns only messages with this value matching the author. The search
             * value is a single email address, a name or a combination (e.g.:
             * `Name <user@domain.org></user@domain.org>`). The address part of the
             * search value (if provided) must match the author's address completely.
             * The name part of the search value (if provided) must match the
             * author's name partially. All matches are done case-insensitive.
             */
            author?: string | undefined;
            /** Returns only messages with this value in the body of the mail. */
            body?: string | undefined;
            /** Returns only flagged (or unflagged if false) messages. */
            flagged?: boolean | undefined;
            /**
             * Returns only messages from the specified folder. The
             * <permission>accountsRead</permission> permission is required.
             */
            folder?: folders.MailFolder | undefined;
            /** Returns only messages with a date after this value. */
            fromDate?: extensionTypes.Date | undefined;
            /**
             * Returns only messages with the author's address matching any
             * configured identity.
             */
            fromMe?: boolean | undefined;
            /**
             * Returns only messages with this value somewhere in the mail (subject,
             * body or author).
             */
            fullText?: string | undefined;
            /** Returns only messages with a Message-ID header matching this value. */
            headerMessageId?: string | undefined;
            /** Search the folder specified by `queryInfo.folder` recursively. */
            includeSubFolders?: boolean | undefined;
            /**
             * Returns only messages whose recipients match all specified addresses.
             * The search value is a semicolon separated list of email addresses,
             * names or combinations (e.g.:
             * `Name <user@domain.org></user@domain.org>`). For a match, all
             * specified addresses must equal a recipient's address completely and
             * all specified names must match a recipient's name partially. All
             * matches are done case-insensitive.
             */
            recipients?: string | undefined;
            /** Returns only messages with this value matching the subject. */
            subject?: string | undefined;
            /**
             * Returns only messages with the specified tags. For a list of available
             * tags, call the {@link messages.listTags} method.
             */
            tags?: TagsDetail | undefined;
            /** Returns only messages with a date before this value. */
            toDate?: extensionTypes.Date | undefined;
            /**
             * Returns only messages with at least one recipient address matching any
             * configured identity.
             */
            toMe?: boolean | undefined;
            /** Returns only unread (or read if false) messages. */
            unread?: boolean | undefined;
        }

        export { _delete as delete };

        export { _import as import };

        export interface _UpdateTagUpdateProperties {
            /** Human-readable tag name. */
            tag?: string | undefined;
            /** Tag color in hex format (i.e.: #000080 for navy blue). */
            color?: string | undefined;
        }

        /* messages functions */
        /** Gets all messages in a folder. */
        export function list(folder: folders.MailFolder): Promise<MessageList>;

        /**
         * Returns the next chunk of messages in a list. See
         * [how-to/messageLists](https://webextension-api.thunderbird.net/en/stable/how-to/messageLists.html)
         * for more information.
         */
        export function continueList(messageListId: string): Promise<MessageList>;

        /** Returns a specified message. */
        export function get(messageId: number): Promise<MessageHeader>;

        /**
         * Returns a specified message, including all headers and MIME parts.
         * Throws if the message could not be read, for example due to network
         * issues.
         */
        export function getFull(messageId: number): Promise<MessagePart>;

        /**
         * Returns the unmodified source of a message as a binary string , which
         * is a simple series of 8-bit values. Throws if the message could not be
         * read, for example due to network issues. If the message contains
         * non-ASCII characters, the body parts in the binary string cannot be
         * read directly and must be decoded according to their character sets.
         * Use {@link messages.getFull} to get the correctly decoded parts.
         * Manually decoding the raw message is probably too error-prone,
         * especially if the message contains MIME parts with different character
         * set encodings or attachments.
         *
         * To get a readable version of the raw message as it appears in
         * Thunderbird's message source view, it may be sufficient to decode the
         * message according to the character set specified in its main
         * content-type header (example: `text/html; charset=UTF-8`) using the
         * following function (see MDN for supported input encodings ):
         * [decodeBinaryString.js](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/messages/decodeBinaryString.js)
         */
        export function getRaw(messageId: number): Promise<string>;

        /** Lists the attachments of a message. */
        export function listAttachments(messageId: number): Promise<MessageAttachment[]>;

        /**
         * Gets the content of a {@link messages.MessageAttachment} as a {@link File}
         * object.
         */
        export function getAttachmentFile(messageId: number, partName: string): Promise<File>;

        /**
         * Gets all messages that have the specified properties, or all messages
         * if no properties are specified.
         */
        export function query(queryInfo: _QueryQueryInfo): Promise<MessageList>;

        /**
         * Marks or unmarks a message as junk, read, flagged, or tagged. Updating
         * external messages will throw an _ExtensionError_.
         */
        export function update(messageId: number, newProperties: MessageProperties): Promise<any>;

        /**
         * Moves messages to a specified folder. If the messages cannot be
         * removed from the source folder, they will be copied instead of moved.
         * Moving external messages will throw an _ExtensionError_.
         *
         * @param messageIds The IDs of the messages to move.
         *
         * @param destination The folder to move the messages to.
         */
        export function move(messageIds: number[], destination: folders.MailFolder): Promise<any>;

        /**
         * Copies messages to a specified folder.
         *
         * @param messageIds The IDs of the messages to copy.
         *
         * @param destination The folder to copy the messages to.
         */
        export function copy(messageIds: number[], destination: folders.MailFolder): Promise<any>;

        /**
         * Deletes messages permanently, or moves them to the trash folder
         * (honoring the account's deletion behavior settings). Deleting external
         * messages will throw an _ExtensionError_. The `skipTrash` parameter
         * allows immediate permanent deletion, bypassing the trash folder.
         * **Note**: Consider using {@link messages.move} to manually move
         * messages to the account's trash folder, instead of requesting the
         * overly powerful permission to actually delete messages. The account's
         * trash folder can be extracted as follows:
         * [getTrash.js](https://raw.githubusercontent.com/thundernest/webext-docs/latest-mv2/includes/messages/getTrash.js)
         *
         * @param messageIds The IDs of the messages to delete.
         *
         * @param [skipTrash] If true, the message will be deleted permanently,
         * regardless of the account's deletion behavior settings.
         */
        function _delete(messageIds: number[], skipTrash?: boolean): Promise<any>;

        /**
         * Imports a message into a local Thunderbird folder. To import a message
         * into an IMAP folder, add it to a local folder first and then move it
         * to the IMAP folder.
         *
         * @param destination The folder to import the messages into.
         */
        function _import(
            file: File,
            destination: folders.MailFolder,
            properties?: MessageProperties,
        ): Promise<MessageHeader>;

        /**
         * Archives messages using the current settings. Archiving external
         * messages will throw an _ExtensionError_.
         *
         * @param messageIds The IDs of the messages to archive.
         */
        export function archive(messageIds: number[]): Promise<any>;

        /**
         * Returns a list of tags that can be set on messages, and their
         * human-friendly name, colour, and sort order.
         */
        export function listTags(): Promise<MessageTag[]>;

        /**
         * Creates a new message tag. Tagging a message will store the tag's key
         * in the user's message. Throws if the specified tag key is used
         * already.
         *
         * @param key Unique tag identifier (must use only alphanumeric
         * characters).
         *
         * @param tag Human-readable tag name.
         *
         * @param color Tag color in hex format (i.e.: #000080 for navy blue)
         */
        export function createTag(key: string, tag: string, color: string): Promise<any>;

        /**
         * Updates a message tag.
         *
         * @param key Unique tag identifier.
         */
        export function updateTag(key: string, updateProperties: _UpdateTagUpdateProperties): Promise<any>;

        /**
         * Deletes a message tag, removing it from the list of known tags. Its
         * key will not be removed from tagged messages, but they will appear
         * untagged. Recreating a deleted tag, will make all former tagged
         * messages appear tagged again.
         */
        export function deleteTag(key: string): Promise<any>;

        /* messages events */
        /** Fired when one or more properties of a message have been updated. */
        export const onUpdated: WebExtEvent<(message: MessageHeader, changedProperties: MessageProperties) => void>;

        /** Fired when messages have been moved. */
        export const onMoved: WebExtEvent<(originalMessages: MessageList, movedMessages: MessageList) => void>;

        /** Fired when messages have been copied. */
        export const onCopied: WebExtEvent<(originalMessages: MessageList, copiedMessages: MessageList) => void>;

        /** Fired when messages have been permanently deleted. */
        export const onDeleted: WebExtEvent<(messages: MessageList) => void>;

        /**
         * Fired when a new message is received, and has been through junk
         * classification and message filters.
         */
        export const onNewMailReceived: WebExtEvent<(folder: folders.MailFolder, messages: MessageList) => void>;
    }

    /**
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/spacesToolbar.html
     */
    export namespace spacesToolbar {
        /* spacesToolbar types */
        export interface ButtonProperties {
            /**
             * Sets the background color of the badge. Can be specified as an array
             * of four integers in the range [0,255] that make up the RGBA color of
             * the badge. For example, opaque red is `[255, 0, 0, 255]`. Can also be
             * a string with an HTML color name (`red`) or a HEX color value
             * (`#FF0000` or `#F00`). Reset when set to an empty string.
             */
            badgeBackgroundColor?: string | ColorArray | undefined;
            /**
             * Sets the badge text for the spaces toolbar button. The badge is
             * displayed on top of the icon. Any number of characters can be set, but
             * only about four can fit in the space. Removed when set to an empty
             * string.
             */
            badgeText?: string | undefined;
            /**
             * The paths to one or more icons for the button in the spaces toolbar.
             * Defaults to the extension icon, if set to an empty string.
             */
            defaultIcons?: string | _manifest.IconPath | undefined;
            /**
             * Specifies dark and light icons for the spaces toolbar button to be
             * used with themes: The `light` icons will be used on dark backgrounds
             * and vice versa. At least the set for _16px_ icons should be specified.
             * The set for _32px_ icons will be used on screens with a very high
             * pixel density, if specified.
             */
            themeIcons?: _manifest.ThemeIcons[] | undefined;
            /**
             * The title for the spaces toolbar button, used in the tooltip of the
             * button and as the displayed name in the overflow menu. Defaults to the
             * name of the extension, if set to an empty string.
             */
            title?: string | undefined;
            /**
             * The page url, loaded into a tab when the button is clicked. Supported
             * are `https://` and `http://` links, as well as links to WebExtension
             * pages.
             */
            url?: string | undefined;
        }

        /**
         * An array of four integers in the range [0,255] that make up the RGBA
         * color. For example, opaque red is `[255, 0, 0, 255]`.
         */
        export type ColorArray = [number, number, number, number];

        /* spacesToolbar functions */
        /**
         * Adds a new button to the spaces toolbar. Throws an exception, if the
         * used `id` is not unique within the extension.
         *
         * @param id The unique id to assign to this button. May only contain
         * alphanumeric characters and underscores.
         *
         * @param properties Properties of the new button. The `url` is
         * mandatory.
         */
        export function addButton(id: string, properties: ButtonProperties): Promise<any>;

        /**
         * Removes the specified button from the spaces toolbar. Throws an
         * exception if the requested spaces toolbar button does not exist. If
         * the tab of this button is currently open, it will be closed.
         *
         * @param id The id of the button which is to be removed. May only
         * contain alphanumeric characters and underscores.
         */
        export function removeButton(id: string): Promise<any>;

        /**
         * Updates properties of the specified spaces toolbar button. Throws an
         * exception if the requested spaces toolbar button does not exist.
         *
         * @param id The id of the button which is to be updated. May only
         * contain alphanumeric characters and underscores.
         *
         * @param properties Only specified properties will be updated.
         */
        export function updateButton(id: string, properties: ButtonProperties): Promise<any>;
    }

    /**
     * The tabs API supports creating, modifying and interacting with tabs in
     * Thunderbird windows.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/tabs.html
     */
    export namespace tabs {
        /* tabs types */
        export interface Tab {
            /**
             * The ID of the tab. Tab IDs are unique within a session. Under some
             * circumstances a Tab may not be assigned an ID. Tab ID can also be set
             * to {@link tabs.TAB_ID_NONE} for apps and devtools windows.
             */
            id?: number | undefined;
            /** The zero-based index of the tab within its window. */
            index: number;
            /** The ID of the window the tab is contained within. */
            windowId?: number | undefined;
            /**
             * Whether the tab is selected.
             *
             * @deprecated Please use {@link tabs.Tab.highlighted}.
             */
            selected?: boolean | undefined;
            /** Whether the tab is highlighted. Works as an alias of active */
            highlighted: boolean;
            /**
             * Whether the tab is active in its window. (Does not necessarily mean
             * the window is focused.)
             */
            active: boolean;
            /**
             * The URL the tab is displaying. This property is only present if the
             * extension's manifest includes the <permission>tabs</permission>
             * permission.
             */
            url?: string | undefined;
            /**
             * The title of the tab. This property is only present if the extension's
             * manifest includes the <permission>tabs</permission> permission.
             */
            title?: string | undefined;
            /**
             * The URL of the tab's favicon. This property is only present if the
             * extension's manifest includes the <permission>tabs</permission>
             * permission. It may also be an empty string if the tab is loading.
             */
            favIconUrl?: string | undefined;
            /** Either `loading` or `complete`. */
            status?: string | undefined;
            /** The width of the tab in pixels. */
            width?: number | undefined;
            /** The height of the tab in pixels. */
            height?: number | undefined;
            type?: _TabType | undefined;
            /** Whether the tab is a 3-pane tab. */
            mailTab?: boolean | undefined;
        }

        /** Whether the tabs have completed loading. */
        export type TabStatus = "loading" | "complete";

        /**
         * The type of a window. Under some circumstances a Window may not be
         * assigned a type property.
         */
        export type WindowType =
            | "normal"
            | "popup"
            | "panel"
            | "app"
            | "devtools"
            | "messageCompose"
            | "messageDisplay";

        /** Event names supported in onUpdated. */
        export type UpdatePropertyName = "favIconUrl" | "status" | "title";

        /** An object describing filters to apply to tabs.onUpdated events. */
        export interface UpdateFilter {
            /**
             * A list of URLs or URL patterns. Events that cannot match any of the
             * URLs will be filtered out. Filtering with urls requires the
             * <permission>tabs</permission> or <permission>activeTab</permission>
             * permission.
             */
            urls?: string[] | undefined;
            /**
             * A list of property names. Events that do not match any of the names
             * will be filtered out.
             */
            properties?: UpdatePropertyName[] | undefined;
            tabId?: number | undefined;
            windowId?: number | undefined;
        }

        export type _TabType =
            | "addressBook"
            | "calendar"
            | "calendarEvent"
            | "calendarTask"
            | "chat"
            | "content"
            | "mail"
            | "messageCompose"
            | "messageDisplay"
            | "special"
            | "tasks";

        export interface _ConnectConnectInfo {
            /**
             * Will be passed into onConnect for content scripts that are listening
             * for the connection event.
             */
            name?: string | undefined;
            /**
             * Open a port to a specific frame identified by `frameId` instead of all
             * frames in the tab.
             */
            frameId?: number | undefined;
        }

        export interface _SendMessageOptions {
            /**
             * Send a message to a specific frame identified by `frameId` instead of
             * all frames in the tab.
             */
            frameId?: number | undefined;
        }

        /**
         * Properties for the new tab. Defaults to an empty tab, if no `url` is
         * provided.
         */
        export interface _CreateCreateProperties {
            /** The window to create the new tab in. Defaults to the current window. */
            windowId?: number | undefined;
            /**
             * The position the tab should take in the window. The provided value
             * will be clamped to between zero and the number of tabs in the window.
             */
            index?: number | undefined;
            /**
             * The URL to navigate the tab to initially. Fully-qualified URLs must
             * include a scheme (i.e. `http://www.google.com`, not `www.google.com`).
             * Relative URLs will be relative to the current page within the
             * extension.
             */
            url?: string | undefined;
            /**
             * Whether the tab should become the active tab in the window. Does not
             * affect whether the window is focused (see {@link windows.update}).
             * Defaults to `true`.
             */
            active?: boolean | undefined;
            /**
             * Whether the tab should become the selected tab in the window. Defaults
             * to `true`
             *
             * @deprecated Please use `createProperties.active`.
             */
            selected?: boolean | undefined;
        }

        export interface _QueryQueryInfo {
            /** Whether the tab is a Thunderbird 3-pane tab. */
            mailTab?: boolean | undefined;
            /**
             * Match tabs against the given Tab.type (see {@link tabs.Tab}). Ignored
             * if `queryInfo.mailTab` is specified.
             */
            type?: string | undefined;
            /** Whether the tabs are active in their windows. */
            active?: boolean | undefined;
            /** Whether the tabs are highlighted. Works as an alias of active. */
            highlighted?: boolean | undefined;
            /** Whether the tabs are in the current window. */
            currentWindow?: boolean | undefined;
            /** Whether the tabs are in the last focused window. */
            lastFocusedWindow?: boolean | undefined;
            /** Whether the tabs have completed loading. */
            status?: TabStatus | undefined;
            /** Match page titles against a pattern. */
            title?: string | undefined;
            /**
             * Match tabs against one or more URL Patterns . Note that fragment
             * identifiers are not matched.
             */
            url?: string | string[] | undefined;
            /**
             * The ID of the parent window, or {@link windows.WINDOW_ID_CURRENT} for
             * the current window.
             */
            windowId?: number | undefined;
            /** The type of window the tabs are in. */
            windowType?: WindowType | undefined;
            /** The position of the tabs within their windows. */
            index?: number | undefined;
        }

        /** Properties which should to be updated. */
        export interface _UpdateUpdateProperties {
            /**
             * A URL to navigate the tab to. Only applicable for `content` tabs and
             * active `mail` tabs.
             */
            url?: string | undefined;
            /**
             * Set this to `true`, if the tab should be active. Does not affect
             * whether the window is focused (see {@link windows.update}). Setting
             * this to `false` has no effect.
             */
            active?: boolean | undefined;
        }

        export interface _MoveMoveProperties {
            /** Defaults to the window the tab is currently in. */
            windowId?: number | undefined;
            /**
             * The position to move the window to. `-1` will place the tab at the end
             * of the window.
             */
            index: number;
        }

        export interface _ReloadReloadProperties {
            /** Whether using any local cache. Default is false. */
            bypassCache?: boolean | undefined;
        }

        /** Lists the changes to the state of the tab that was updated. */
        export interface _OnUpdatedChangeInfo {
            /** The status of the tab. Can be either `loading` or `complete`. */
            status?: string | undefined;
            /** The tab's URL if it has changed. */
            url?: string | undefined;
            /** The tab's new favicon URL. */
            favIconUrl?: string | undefined;
        }

        export interface _TabsOnUpdatedEvent<
            TCallback = (tabId: number, changeInfo: _OnUpdatedChangeInfo, tab: Tab) => void,
        > {
            addListener(cb: TCallback, filter?: UpdateFilter): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnMovedMoveInfo {
            windowId: number;
            fromIndex: number;
            toIndex: number;
        }

        export interface _OnActivatedActiveInfo {
            /** The ID of the tab that has become active. */
            tabId: number;
            /** The ID of the window the active tab changed inside of. */
            windowId: number;
        }

        export interface _OnDetachedDetachInfo {
            oldWindowId: number;
            oldPosition: number;
        }

        export interface _OnAttachedAttachInfo {
            newWindowId: number;
            newPosition: number;
        }

        export interface _OnRemovedRemoveInfo {
            /** The window whose tab is closed. */
            windowId: number;
            /**
             * Is `true` when the tab is being closed because its window is being
             * closed.
             */
            isWindowClosing: boolean;
        }

        /* tabs properties */
        /** An ID which represents the absence of a tab. */
        export const TAB_ID_NONE: number;

        /* tabs functions */
        /** Retrieves details about the specified tab. */
        export function get(tabId: number): Promise<Tab>;

        /**
         * Gets the tab that this script call is being made from. May be
         * undefined if called from a non-tab context (for example: a background
         * page or popup view).
         */
        export function getCurrent(): Promise<Tab>;

        /**
         * Connects to the content script(s) in the specified tab. The
         * runtime.onConnect event is fired in each content script running in the
         * specified tab for the current extension. For more details, see Content
         * Script Messaging .
         *
         * @returns A port that can be used to communicate with the content
         * scripts running in the specified tab.
         */
        export function connect(tabId: number, connectInfo?: _ConnectConnectInfo): runtime.Port;

        /**
         * Sends a single message to the content script(s) in the specified tab,
         * with an optional callback to run when a response is sent back. The
         * runtime.onMessage event is fired in each content script running in the
         * specified tab for the current extension.
         */
        export function sendMessage(tabId: number, message: any, options?: _SendMessageOptions): Promise<any>;

        /**
         * Creates a new content tab. Use the {@link messageDisplay_api} to open
         * messages. Only supported in `normal` windows.
         *
         * @param createProperties Properties for the new tab. Defaults to an
         * empty tab, if no `url` is provided.
         */
        export function create(createProperties: _CreateCreateProperties): Promise<Tab>;

        /**
         * Duplicates a tab.
         *
         * @param tabId The ID of the tab which is to be duplicated.
         */
        export function duplicate(tabId: number): Promise<Tab>;

        /**
         * Gets all tabs that have the specified properties, or all tabs if no
         * properties are specified.
         */
        export function query(queryInfo: _QueryQueryInfo): Promise<Tab[]>;

        /**
         * Modifies the properties of a tab. Properties that are not specified in
         * `updateProperties` are not modified.
         *
         * @param tabId Defaults to the selected tab of the current window.
         *
         * @param updateProperties Properties which should to be updated.
         */
        export function update(tabId: number, updateProperties: _UpdateUpdateProperties): Promise<Tab>;
        /**
         * Modifies the properties of a tab. Properties that are not specified in
         * `updateProperties` are not modified.
         *
         * @param updateProperties Properties which should to be updated.
         */
        export function update(updateProperties: _UpdateUpdateProperties): Promise<Tab>;

        /**
         * Moves one or more tabs to a new position within its window, or to a
         * new window. Note that tabs can only be moved to and from windows of
         * type `normal`.
         *
         * @param tabIds The tab or list of tabs to move.
         */
        export function move(tabIds: number | number[], moveProperties: _MoveMoveProperties): Promise<Tab | Tab[]>;

        /**
         * Reload a tab.
         *
         * @param tabId The ID of the tab to reload; defaults to the selected tab
         * of the current window.
         */
        export function reload(
            tabId: number,
            reloadProperties?: _ReloadReloadProperties,
        ): Promise<void>; /** Reload a tab. */
        export function reload(reloadProperties?: _ReloadReloadProperties): Promise<void>;

        /**
         * Closes one or more tabs.
         *
         * @param tabIds The tab or list of tabs to close.
         */
        export function remove(tabIds: number | number[]): Promise<void>;

        /**
         * Injects JavaScript code into a page. For details, see the programmatic
         * injection section of the content scripts doc.
         *
         * @param tabId The ID of the tab in which to run the script; defaults to
         * the active tab of the current window.
         *
         * @param details Details of the script to run.
         */
        export function executeScript(tabId: number, details: extensionTypes.InjectDetails): Promise<any[]>;
        /**
         * Injects JavaScript code into a page. For details, see the programmatic
         * injection section of the content scripts doc.
         *
         * @param details Details of the script to run.
         */
        export function executeScript(details: extensionTypes.InjectDetails): Promise<any[]>;

        /**
         * Injects CSS into a page. For details, see the programmatic injection
         * section of the content scripts doc.
         *
         * @param tabId The ID of the tab in which to insert the CSS; defaults to
         * the active tab of the current window.
         *
         * @param details Details of the CSS text to insert.
         */
        export function insertCSS(tabId: number, details: extensionTypes.InjectDetails): Promise<void>;
        /**
         * Injects CSS into a page. For details, see the programmatic injection
         * section of the content scripts doc.
         *
         * @param details Details of the CSS text to insert.
         */
        export function insertCSS(details: extensionTypes.InjectDetails): Promise<void>;

        /**
         * Removes injected CSS from a page. For details, see the programmatic
         * injection section of the content scripts doc.
         *
         * @param tabId The ID of the tab from which to remove the injected CSS;
         * defaults to the active tab of the current window.
         *
         * @param details Details of the CSS text to remove.
         */
        export function removeCSS(tabId: number, details: extensionTypes.InjectDetails): Promise<void>;
        /**
         * Removes injected CSS from a page. For details, see the programmatic
         * injection section of the content scripts doc.
         *
         * @param details Details of the CSS text to remove.
         */
        export function removeCSS(details: extensionTypes.InjectDetails): Promise<void>;

        /* tabs events */
        /**
         * Fired when a tab is created. Note that the tab's URL may not be set at
         * the time this event fired, but you can listen to onUpdated events to
         * be notified when a URL is set.
         *
         * @param tab Details of the tab that was created.
         */
        export const onCreated: WebExtEvent<(tab: Tab) => void>;

        /**
         * Fired when a tab is updated.
         *
         * @param changeInfo Lists the changes to the state of the tab that was
         * updated.
         *
         * @param tab Gives the state of the tab that was updated.
         */
        export const onUpdated: _TabsOnUpdatedEvent;

        /**
         * Fired when a tab is moved within a window. Only one move event is
         * fired, representing the tab the user directly moved. Move events are
         * not fired for the other tabs that must move in response. This event is
         * not fired when a tab is moved between windows. For that, see {@link tabs.onDetached}.
         */
        export const onMoved: WebExtEvent<(tabId: number, moveInfo: _OnMovedMoveInfo) => void>;

        /**
         * Fires when the active tab in a window changes. Note that the tab's URL
         * may not be set at the time this event fired, but you can listen to
         * onUpdated events to be notified when a URL is set.
         */
        export const onActivated: WebExtEvent<(activeInfo: _OnActivatedActiveInfo) => void>;

        /**
         * Fired when a tab is detached from a window, for example because it is
         * being moved between windows.
         */
        export const onDetached: WebExtEvent<(tabId: number, detachInfo: _OnDetachedDetachInfo) => void>;

        /**
         * Fired when a tab is attached to a window, for example because it was
         * moved between windows.
         */
        export const onAttached: WebExtEvent<(tabId: number, attachInfo: _OnAttachedAttachInfo) => void>;

        /** Fired when a tab is closed. */
        export const onRemoved: WebExtEvent<(tabId: number, removeInfo: _OnRemovedRemoveInfo) => void>;
    }

    /**
     * The theme API allows for customization of Thunderbird's visual
     * elements.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/theme.html
     */
    export namespace theme {
        /* theme types */
        /** Info provided in the onUpdated listener. */
        export interface ThemeUpdateInfo {
            /** The new theme after update */
            theme: _manifest.ThemeType;
            /** The id of the window the theme has been applied to */
            windowId?: number | undefined;
        }

        /* theme functions */
        /**
         * Returns the current theme for the specified window or the last focused
         * window.
         *
         * @param [windowId] The window for which we want the theme.
         */
        export function getCurrent(windowId?: number): Promise<_manifest.ThemeType>;

        /**
         * Make complete updates to the theme. Resolves when the update has
         * completed.
         *
         * @param windowId The id of the window to update. No id updates all
         * windows.
         *
         * @param details The properties of the theme to update.
         */
        export function update(windowId: number, details: _manifest.ThemeType): void;
        /**
         * Make complete updates to the theme. Resolves when the update has
         * completed.
         *
         * @param details The properties of the theme to update.
         */
        export function update(details: _manifest.ThemeType): void;

        /**
         * Removes the updates made to the theme.
         *
         * @param [windowId] The id of the window to reset. No id resets all
         * windows.
         */
        export function reset(windowId?: number): void;

        /* theme events */
        /**
         * Fired when a new theme has been applied
         *
         * @param updateInfo Details of the theme update
         */
        export const onUpdated: WebExtEvent<(updateInfo: ThemeUpdateInfo) => void>;
    }

    /**
     * The windows API supports creating, modifying and interacting with
     * Thunderbird windows.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/windows.html
     */
    export namespace windows {
        /* windows types */
        /**
         * The type of a window. Under some circumstances a window may not be
         * assigned a type property.
         */
        export type WindowType =
            | "normal"
            | "popup"
            | "panel"
            | "app"
            | "devtools"
            | "messageCompose"
            | "messageDisplay";

        /** The state of this window. */
        export type WindowState = "normal" | "minimized" | "maximized" | "fullscreen" | "docked";

        export interface Window {
            /** The ID of the window. Window IDs are unique within a session. */
            id?: number | undefined;
            /** Whether the window is currently the focused window. */
            focused: boolean;
            /** The offset of the window from the top edge of the screen in pixels. */
            top?: number | undefined;
            /** The offset of the window from the left edge of the screen in pixels. */
            left?: number | undefined;
            /** The width of the window, including the frame, in pixels. */
            width?: number | undefined;
            /** The height of the window, including the frame, in pixels. */
            height?: number | undefined;
            /**
             * Array of {@link tabs.Tab} objects representing the current tabs in the
             * window. Only included if requested by {@link windows.get}, {@link windows.getCurrent},
             *  {@link windows.getAll} or {@link windows.getLastFocused},
             *  and the optional {@link windows.GetInfo}
             * parameter has its `populate` member set to `true`.
             */
            tabs?: tabs.Tab[] | undefined;
            /**
             * Whether the window is incognito. Since Thunderbird does not support
             * the incognito mode, this is always `false`.
             */
            incognito: boolean;
            /** The type of window this is. */
            type?: WindowType | undefined;
            /** The state of this window. */
            state?: WindowState | undefined;
            /** Whether the window is set to be always on top. */
            alwaysOnTop: boolean;
            /** The title of the window. Read-only. */
            title?: string | undefined;
        }

        /**
         * Specifies what type of window to create. Thunderbird does not support
         * `panel` and `detached_panel`, they are interpreted as `popup`.
         */
        export type CreateType = "normal" | "popup" | "panel" | "detached_panel";

        /** Specifies additional requirements for the returned windows. */
        export interface GetInfo {
            /**
             * If true, the {@link windows.Window} returned will have a `tabs`
             * property that contains an array of {@link tabs.Tab} objects
             * representing the tabs inside the window. The {@link tabs.Tab} objects
             * only contain the `url`, `title` and `favIconUrl` properties if the
             * extension's manifest file includes the <permission>tabs</permission>
             * permission.
             */
            populate?: boolean | undefined;
            /**
             * If set, the {@link windows.Window} returned will be filtered based on
             * its type. Supported by {@link windows.getAll} only, ignored in all
             * other functions.
             */
            windowTypes?: WindowType[] | undefined;
        }

        export interface _CreateCreateData {
            /**
             * A URL or array of URLs to open as tabs in the window. Fully-qualified
             * URLs must include a scheme (i.e. `http://www.google.com`, not
             * `www.google.com`). Relative URLs will be relative to the current page
             * within the extension. Defaults to the New Tab Page.
             */
            url?: string | string[] | undefined;
            /** The id of the tab for which you want to adopt to the new window. */
            tabId?: number | undefined;
            /**
             * The number of pixels to position the new window from the left edge of
             * the screen. If not specified, the new window is offset naturally from
             * the last focused window.
             */
            left?: number | undefined;
            /**
             * The number of pixels to position the new window from the top edge of
             * the screen. If not specified, the new window is offset naturally from
             * the last focused window.
             */
            top?: number | undefined;
            /**
             * The width in pixels of the new window, including the frame. If not
             * specified defaults to a natural width.
             */
            width?: number | undefined;
            /**
             * The height in pixels of the new window, including the frame. If not
             * specified defaults to a natural height.
             */
            height?: number | undefined;
            /**
             * If true, opens an active window. If false, opens an inactive window.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            focused?: boolean | undefined;
            /** @deprecated Unsupported on Firefox at this time. */
            incognito?: boolean | undefined;
            /**
             * Specifies what type of window to create. Thunderbird does not support
             * `panel` and `detached_panel`, they are interpreted as `popup`.
             */
            type?: CreateType | undefined;
            /**
             * The initial state of the window. The `minimized`, `maximized` and
             * `fullscreen` states cannot be combined with `left`, `top`, `width` or
             * `height`.
             */
            state?: WindowState | undefined;
            /**
             * Allow scripts running inside the window to close the window by calling
             * `window.close()`.
             */
            allowScriptsToClose?: boolean | undefined;
            /** A string to add to the beginning of the window title. */
            titlePreface?: string | undefined;
        }

        export interface _UpdateUpdateInfo {
            /**
             * The offset from the left edge of the screen to move the window to in
             * pixels. This value is ignored for panels.
             */
            left?: number | undefined;
            /**
             * The offset from the top edge of the screen to move the window to in
             * pixels. This value is ignored for panels.
             */
            top?: number | undefined;
            /** The width to resize the window to in pixels. */
            width?: number | undefined;
            /** The height to resize the window to in pixels. */
            height?: number | undefined;
            /**
             * If true, brings the window to the front. If false, brings the next
             * window in the z-order to the front.
             */
            focused?: boolean | undefined;
            /**
             * Setting this to `true` will cause the window to be displayed in a
             * manner that draws the user's attention to the window, without changing
             * the focused window. The effect lasts until the user changes focus to
             * the window. This option has no effect if the window already has focus.
             */
            drawAttention?: boolean | undefined;
            /**
             * The new state of the window. The `minimized`, `maximized` and
             * `fullscreen` states cannot be combined with `left`, `top`, `width` or
             * `height`.
             */
            state?: WindowState | undefined;
            /** A string to add to the beginning of the window title. */
            titlePreface?: string | undefined;
        }

        /* windows properties */
        /** The windowId value that represents the absence of a window. */
        export const WINDOW_ID_NONE: number;

        /** The windowId value that represents the current window. */
        export const WINDOW_ID_CURRENT: number;

        /* windows functions */
        /** Gets details about a window. */
        export function get(windowId: number, getInfo?: GetInfo): Promise<Window>;

        /** Gets the active or topmost window. */
        export function getCurrent(getInfo?: GetInfo): Promise<Window>;

        /**
         * Gets the window that was most recently focused — typically the window
         * 'on top'.
         */
        export function getLastFocused(getInfo?: GetInfo): Promise<Window>;

        /** Gets all windows. */
        export function getAll(getInfo?: GetInfo): Promise<Window[]>;

        /**
         * Creates (opens) a new window with any optional sizing, position or
         * default URL provided.
         */
        export function create(createData?: _CreateCreateData): Promise<Window>;

        /**
         * Updates the properties of a window. Specify only the properties that
         * you want to change; unspecified properties will be left unchanged.
         */
        export function update(windowId: number, updateInfo: _UpdateUpdateInfo): Promise<Window>;

        /** Removes (closes) a window, and all the tabs inside it. */
        export function remove(windowId: number): Promise<void>;

        /** Opens the provided URL in the default system browser. */
        export function openDefaultBrowser(url: string): Promise<any>;

        /* windows events */
        /**
         * Fired when a window is created.
         *
         * @param window Details of the window that was created.
         */
        export const onCreated: WebExtEvent<(window: Window) => void>;

        /**
         * Fired when a window is removed (closed).
         *
         * @param windowId ID of the removed window.
         */
        export const onRemoved: WebExtEvent<(windowId: number) => void>;

        /**
         * Fired when the currently focused window changes. Will be {@link windows.WINDOW_ID_NONE},
         *  if all windows have lost focus. **Note:** On
         * some Linux window managers, WINDOW_ID_NONE will always be sent
         * immediately preceding a switch from one window to another.
         *
         * @param windowId ID of the newly focused window.
         */
        export const onFocusChanged: WebExtEvent<(windowId: number) => void>;
    }

    /**
     * Use the `browser.browserSettings` API to control global settings of
     * the browser.
     *
     * Permissions: `browserSettings`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings
     */
    export namespace browserSettings {
        /* browserSettings types */
        /** How images should be animated in the browser. */
        export type ImageAnimationBehavior = "normal" | "none" | "once";

        /** After which mouse event context menus should popup. */
        export type ContextMenuMouseEvent = "mouseup" | "mousedown";

        /** Color management mode. */
        export type ColorManagementMode = "off" | "full" | "tagged_only";

        /* browserSettings properties */
        /**
         * Allows or disallows pop-up windows from opening in response to user
         * events.
         */
        export const allowPopupsForUserEvents: types.Setting;

        /** Enables or disables the browser cache. */
        export const cacheEnabled: types.Setting;

        /**
         * This boolean setting controls whether the selected tab can be closed
         * with a double click.
         */
        export const closeTabsByDoubleClick: types.Setting;

        /**
         * Controls after which mouse event context menus popup. This setting's
         * value is of type ContextMenuMouseEvent, which has possible values of
         * `mouseup` and `mousedown`.
         */
        export const contextMenuShowEvent: types.Setting;

        /**
         * Returns whether the FTP protocol is enabled. Read-only.
         *
         * @deprecated FTP support was removed from Firefox in bug 1574475
         */
        export const ftpProtocolEnabled: types.Setting;

        /** Returns the value of the overridden home page. Read-only. */
        export const homepageOverride: types.Setting;

        /**
         * Controls the behaviour of image animation in the browser. This
         * setting's value is of type ImageAnimationBehavior, defaulting to
         * `normal`.
         */
        export const imageAnimationBehavior: types.Setting;

        /** Returns the value of the overridden new tab page. Read-only. */
        export const newTabPageOverride: types.Setting;

        /**
         * Controls where new tabs are opened. `afterCurrent` will open all new
         * tabs next to the current tab, `relatedAfterCurrent` will open only
         * related tabs next to the current tab, and `atEnd` will open all tabs
         * at the end of the tab strip. The default is `relatedAfterCurrent`.
         */
        export const newTabPosition: types.Setting;

        /**
         * This boolean setting controls whether bookmarks are opened in the
         * current tab or in a new tab.
         */
        export const openBookmarksInNewTabs: types.Setting;

        /**
         * This boolean setting controls whether search results are opened in the
         * current tab or in a new tab.
         */
        export const openSearchResultsInNewTabs: types.Setting;

        /**
         * This boolean setting controls whether urlbar results are opened in the
         * current tab or in a new tab.
         */
        export const openUrlbarResultsInNewTabs: types.Setting;

        /** Disables webAPI notifications. */
        export const webNotificationsDisabled: types.Setting;

        /**
         * This setting controls whether the user-chosen colors override the
         * page's colors.
         */
        export const overrideDocumentColors: types.Setting;

        /**
         * This setting controls whether a light or dark color scheme overrides
         * the page's preferred color scheme.
         */
        export const overrideContentColorScheme: types.Setting;

        /** This setting controls whether the document's fonts are used. */
        export const useDocumentFonts: types.Setting;

        /**
         * This boolean setting controls whether zoom is applied to the full page
         * or to text only.
         */
        export const zoomFullPage: types.Setting;

        /**
         * This boolean setting controls whether zoom is applied on a per-site
         * basis or to the current tab only. If privacy.resistFingerprinting is
         * true, this setting has no effect and zoom is applied to the current
         * tab only.
         */
        export const zoomSiteSpecific: types.Setting;
    }

    /**
     * Offers the ability to write to the clipboard. Reading is not supported
     * because the clipboard can already be read through the standard web
     * platform APIs.
     *
     * Permissions: `clipboardWrite`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/clipboard
     */
    export namespace clipboard {
        /** The type of imageData. */
        export type _SetImageDataImageType = "jpeg" | "png";

        /* clipboard functions */
        /**
         * Copy an image to the clipboard. The image is re-encoded before it is
         * written to the clipboard. If the image is invalid, the clipboard is
         * not modified.
         *
         * @param imageData The image data to be copied.
         *
         * @param imageType The type of imageData.
         */
        export function setImageData(imageData: ArrayBuffer, imageType: _SetImageDataImageType): Promise<void>;
    }

    /**
     * Not supported on manifest versions above 2.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/contentScripts
     */
    export namespace contentScripts {
        /* contentScripts types */
        /** Details of a content script registered programmatically */
        export interface RegisteredContentScriptOptions {
            matches: _manifest.MatchPattern[];
            excludeMatches?: _manifest.MatchPattern[] | undefined;
            includeGlobs?: string[] | undefined;
            excludeGlobs?: string[] | undefined;
            /** The list of CSS files to inject */
            css?: extensionTypes.ExtensionFileOrCode[] | undefined;
            /** The list of JS files to inject */
            js?: extensionTypes.ExtensionFileOrCode[] | undefined;
            /**
             * If allFrames is `true`, implies that the JavaScript or CSS should be
             * injected into all frames of current page. By default, it's `false` and
             * is only injected into the top frame.
             */
            allFrames?: boolean | undefined;
            /**
             * If matchAboutBlank is true, then the code is also injected in
             * about:blank and about:srcdoc frames if your extension has access to
             * its parent document. Code cannot be inserted in top-level
             * about:-frames. By default it is `false`.
             */
            matchAboutBlank?: boolean | undefined;
            /**
             * The soonest that the JavaScript or CSS will be injected into the tab.
             * Defaults to "document_idle".
             */
            runAt?: extensionTypes.RunAt | undefined;
            /**
             * limit the set of matched tabs to those that belong to the given cookie
             * store id
             */
            cookieStoreId?: string[] | string | undefined;
        }

        /** An object that represents a content script registered programmatically */
        export interface RegisteredContentScript {
            /** Unregister a content script registered programmatically */
            unregister(): Promise<any>;
        }

        /* contentScripts functions */
        /** Register a content script programmatically */
        export function register(
            contentScriptOptions: RegisteredContentScriptOptions,
        ): Promise<RegisteredContentScript>;
    }

    /**
     * Use the `browser.cookies` API to query and modify cookies, and to be
     * notified when they change.
     *
     * Permissions: `cookies`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies
     */
    export namespace cookies {
        /* cookies types */
        /**
         * A cookie's 'SameSite' state
         * (https://tools.ietf.org/html/draft-west-first-party-cookies).
         * 'no_restriction' corresponds to a cookie set without a 'SameSite'
         * attribute, 'lax' to 'SameSite=Lax', and 'strict' to 'SameSite=Strict'.
         */
        export type SameSiteStatus = "no_restriction" | "lax" | "strict";

        /**
         * The description of the storage partition of a cookie. This object may
         * be omitted (null) if a cookie is not partitioned.
         */
        export interface PartitionKey {
            /**
             * The first-party URL of the cookie, if the cookie is in storage
             * partitioned by the top-level site.
             */
            topLevelSite?: string | undefined;
        }

        /** Represents information about an HTTP cookie. */
        export interface Cookie {
            /** The name of the cookie. */
            name: string;
            /** The value of the cookie. */
            value: string;
            /** The domain of the cookie (e.g. "www.google.com", "example.com"). */
            domain: string;
            /**
             * True if the cookie is a host-only cookie (i.e. a request's host must
             * exactly match the domain of the cookie).
             */
            hostOnly: boolean;
            /** The path of the cookie. */
            path: string;
            /**
             * True if the cookie is marked as Secure (i.e. its scope is limited to
             * secure channels, typically HTTPS).
             */
            secure: boolean;
            /**
             * True if the cookie is marked as HttpOnly (i.e. the cookie is
             * inaccessible to client-side scripts).
             */
            httpOnly: boolean;
            /**
             * The cookie's same-site status (i.e. whether the cookie is sent with
             * cross-site requests).
             */
            sameSite: SameSiteStatus;
            /**
             * True if the cookie is a session cookie, as opposed to a persistent
             * cookie with an expiration date.
             */
            session: boolean;
            /**
             * The expiration date of the cookie as the number of seconds since the
             * UNIX epoch. Not provided for session cookies.
             */
            expirationDate?: number | undefined;
            /**
             * The ID of the cookie store containing this cookie, as provided in
             * getAllCookieStores().
             */
            storeId: string;
            /** The first-party domain of the cookie. */
            firstPartyDomain: string;
            /** The cookie's storage partition, if any. null if not partitioned. */
            partitionKey?: PartitionKey | undefined;
        }

        /**
         * Represents a cookie store in the browser. An incognito mode window,
         * for instance, uses a separate cookie store from a non-incognito
         * window.
         */
        export interface CookieStore {
            /** The unique identifier for the cookie store. */
            id: string;
            /** Identifiers of all the browser tabs that share this cookie store. */
            tabIds: number[];
            /** Indicates if this is an incognito cookie store */
            incognito: boolean;
        }

        /**
         * The underlying reason behind the cookie's change. If a cookie was
         * inserted, or removed via an explicit call to `cookies.remove`, "cause"
         * will be "explicit". If a cookie was automatically removed due to
         * expiry, "cause" will be "expired". If a cookie was removed due to
         * being overwritten with an already-expired expiration date, "cause"
         * will be set to "expired_overwrite". If a cookie was automatically
         * removed due to garbage collection, "cause" will be "evicted". If a
         * cookie was automatically removed due to a "set" call that overwrote
         * it, "cause" will be "overwrite". Plan your response accordingly.
         */
        export type OnChangedCause = "evicted" | "expired" | "explicit" | "expired_overwrite" | "overwrite";

        /** Details to identify the cookie being retrieved. */
        export interface _GetDetails {
            /**
             * The URL with which the cookie to retrieve is associated. This argument
             * may be a full URL, in which case any data following the URL path (e.g.
             * the query string) is simply ignored. If host permissions for this URL
             * are not specified in the manifest file, the API call will fail.
             */
            url: string;
            /** The name of the cookie to retrieve. */
            name: string;
            /**
             * The ID of the cookie store in which to look for the cookie. By
             * default, the current execution context's cookie store will be used.
             */
            storeId?: string | undefined;
            /**
             * The first-party domain which the cookie to retrieve is associated.
             * This attribute is required if First-Party Isolation is enabled.
             */
            firstPartyDomain?: string | undefined;
            /**
             * The storage partition, if the cookie is part of partitioned storage.
             * By default, only non-partitioned cookies are returned.
             */
            partitionKey?: PartitionKey | undefined;
        }

        /** Information to filter the cookies being retrieved. */
        export interface _GetAllDetails {
            /**
             * Restricts the retrieved cookies to those that would match the given
             * URL.
             */
            url?: string | undefined;
            /** Filters the cookies by name. */
            name?: string | undefined;
            /**
             * Restricts the retrieved cookies to those whose domains match or are
             * subdomains of this one.
             */
            domain?: string | undefined;
            /**
             * Restricts the retrieved cookies to those whose path exactly matches
             * this string.
             */
            path?: string | undefined;
            /** Filters the cookies by their Secure property. */
            secure?: boolean | undefined;
            /** Filters out session vs. persistent cookies. */
            session?: boolean | undefined;
            /**
             * The cookie store to retrieve cookies from. If omitted, the current
             * execution context's cookie store will be used.
             */
            storeId?: string | undefined;
            /**
             * Restricts the retrieved cookies to those whose first-party domains
             * match this one. This attribute is required if First-Party Isolation is
             * enabled. To not filter by a specific first-party domain, use `null` or
             * `undefined`.
             */
            firstPartyDomain?: string | undefined;
            /**
             * Selects a specific storage partition to look up cookies. Defaults to
             * null, in which case only non-partitioned cookies are retrieved. If an
             * object iis passed, partitioned cookies are also included, and filtered
             * based on the keys present in the given PartitionKey description. An
             * empty object ({}) returns all cookies (partitioned + unpartitioned), a
             * non-empty object (e.g. {topLevelSite: '...'}) only returns cookies
             * whose partition match all given attributes.
             */
            partitionKey?: PartitionKey | undefined;
        }

        /** Details about the cookie being set. */
        export interface _SetDetails {
            /**
             * The request-URI to associate with the setting of the cookie. This
             * value can affect the default domain and path values of the created
             * cookie. If host permissions for this URL are not specified in the
             * manifest file, the API call will fail.
             */
            url: string;
            /** The name of the cookie. Empty by default if omitted. */
            name?: string | undefined;
            /** The value of the cookie. Empty by default if omitted. */
            value?: string | undefined;
            /**
             * The domain of the cookie. If omitted, the cookie becomes a host-only
             * cookie.
             */
            domain?: string | undefined;
            /**
             * The path of the cookie. Defaults to the path portion of the url
             * parameter.
             */
            path?: string | undefined;
            /** Whether the cookie should be marked as Secure. Defaults to false. */
            secure?: boolean | undefined;
            /** Whether the cookie should be marked as HttpOnly. Defaults to false. */
            httpOnly?: boolean | undefined;
            /** The cookie's same-site status. */
            sameSite?: SameSiteStatus | undefined;
            /**
             * The expiration date of the cookie as the number of seconds since the
             * UNIX epoch. If omitted, the cookie becomes a session cookie.
             */
            expirationDate?: number | undefined;
            /**
             * The ID of the cookie store in which to set the cookie. By default, the
             * cookie is set in the current execution context's cookie store.
             */
            storeId?: string | undefined;
            /**
             * The first-party domain of the cookie. This attribute is required if
             * First-Party Isolation is enabled.
             */
            firstPartyDomain?: string | undefined;
            /**
             * The storage partition, if the cookie is part of partitioned storage.
             * By default, non-partitioned storage is used.
             */
            partitionKey?: PartitionKey | undefined;
        }

        /**
         * Contains details about the cookie that's been removed. If removal
         * failed for any reason, this will be "null", and `runtime.lastError`
         * will be set.
         */
        export interface _RemoveReturnDetails {
            /** The URL associated with the cookie that's been removed. */
            url: string;
            /** The name of the cookie that's been removed. */
            name: string;
            /** The ID of the cookie store from which the cookie was removed. */
            storeId: string;
            /** The first-party domain associated with the cookie that's been removed. */
            firstPartyDomain: string;
            /**
             * The storage partition, if the cookie is part of partitioned storage.
             * null if not partitioned.
             */
            partitionKey?: PartitionKey | undefined;
        }

        /** Information to identify the cookie to remove. */
        export interface _RemoveDetails {
            /**
             * The URL associated with the cookie. If host permissions for this URL
             * are not specified in the manifest file, the API call will fail.
             */
            url: string;
            /** The name of the cookie to remove. */
            name: string;
            /**
             * The ID of the cookie store to look in for the cookie. If unspecified,
             * the cookie is looked for by default in the current execution context's
             * cookie store.
             */
            storeId?: string | undefined;
            /**
             * The first-party domain associated with the cookie. This attribute is
             * required if First-Party Isolation is enabled.
             */
            firstPartyDomain?: string | undefined;
            /**
             * The storage partition, if the cookie is part of partitioned storage.
             * By default, non-partitioned storage is used.
             */
            partitionKey?: PartitionKey | undefined;
        }

        export interface _OnChangedChangeInfo {
            /** True if a cookie was removed. */
            removed: boolean;
            /** Information about the cookie that was set or removed. */
            cookie: Cookie;
            /** The underlying reason behind the cookie's change. */
            cause: OnChangedCause;
        }

        /* cookies functions */
        /**
         * Retrieves information about a single cookie. If more than one cookie
         * of the same name exists for the given URL, the one with the longest
         * path will be returned. For cookies with the same path length, the
         * cookie with the earliest creation time will be returned.
         *
         * @param details Details to identify the cookie being retrieved.
         */
        export function get(details: _GetDetails): Promise<Cookie | null>;

        /**
         * Retrieves all cookies from a single cookie store that match the given
         * information. The cookies returned will be sorted, with those with the
         * longest path first. If multiple cookies have the same path length,
         * those with the earliest creation time will be first.
         *
         * @param details Information to filter the cookies being retrieved.
         */
        export function getAll(details: _GetAllDetails): Promise<Cookie[]>;

        /**
         * Sets a cookie with the given cookie data; may overwrite equivalent
         * cookies if they exist.
         *
         * @param details Details about the cookie being set.
         */
        export function set(details: _SetDetails): Promise<Cookie>;

        /**
         * Deletes a cookie by name.
         *
         * @param details Information to identify the cookie to remove.
         */
        export function remove(details: _RemoveDetails): Promise<_RemoveReturnDetails | null>;

        /** Lists all existing cookie stores. */
        export function getAllCookieStores(): Promise<CookieStore[]>;

        /* cookies events */
        /**
         * Fired when a cookie is set or removed. As a special case, note that
         * updating a cookie's properties is implemented as a two step process:
         * the cookie to be updated is first removed entirely, generating a
         * notification with "cause" of "overwrite" . Afterwards, a new cookie is
         * written with the updated values, generating a second notification with
         * "cause" "explicit".
         */
        export const onChanged: WebExtEvent<(changeInfo: _OnChangedChangeInfo) => void>;
    }

    /**
     * Asynchronous DNS API
     *
     * Permissions: `dns`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/dns
     */
    export namespace dns {
        /* dns types */
        /** An object encapsulating a DNS Record. */
        export interface DNSRecord {
            /**
             * The canonical hostname for this record. this value is empty if the
             * record was not fetched with the 'canonical_name' flag.
             */
            canonicalName?: string | undefined;
            /** Record retreived with TRR. */
            isTRR: string;
            addresses: string[];
        }

        export type ResolveFlags = _ResolveFlags[];

        export type _ResolveFlags =
            | "allow_name_collisions"
            | "bypass_cache"
            | "canonical_name"
            | "disable_ipv4"
            | "disable_ipv6"
            | "disable_trr"
            | "offline"
            | "priority_low"
            | "priority_medium"
            | "speculate";

        /* dns functions */
        /** Resolves a hostname to a DNS record. */
        export function resolve(hostname: string, flags?: ResolveFlags): Promise<DNSRecord>;
    }

    /**
     * Permissions: `downloads`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/downloads
     */
    export namespace downloads {
        /* downloads types */
        export type FilenameConflictAction = "uniquify" | "overwrite" | "prompt";

        export type InterruptReason =
            | "FILE_FAILED"
            | "FILE_ACCESS_DENIED"
            | "FILE_NO_SPACE"
            | "FILE_NAME_TOO_LONG"
            | "FILE_TOO_LARGE"
            | "FILE_VIRUS_INFECTED"
            | "FILE_TRANSIENT_ERROR"
            | "FILE_BLOCKED"
            | "FILE_SECURITY_CHECK_FAILED"
            | "FILE_TOO_SHORT"
            | "NETWORK_FAILED"
            | "NETWORK_TIMEOUT"
            | "NETWORK_DISCONNECTED"
            | "NETWORK_SERVER_DOWN"
            | "NETWORK_INVALID_REQUEST"
            | "SERVER_FAILED"
            | "SERVER_NO_RANGE"
            | "SERVER_BAD_CONTENT"
            | "SERVER_UNAUTHORIZED"
            | "SERVER_CERT_PROBLEM"
            | "SERVER_FORBIDDEN"
            | "USER_CANCELED"
            | "USER_SHUTDOWN"
            | "CRASH";

        /**
         * _file_: The download's filename is suspicious.
         * _url_: The download's URL is known to be malicious.
         * _content_: The downloaded file is known to be malicious.
         * _uncommon_: The download's URL is not commonly downloaded and could be
         * dangerous.
         * _safe_: The download presents no known danger to the user's computer.
         *
         * These string constants will never change, however the set of
         * DangerTypes may change.
         */
        export type DangerType = "file" | "url" | "content" | "uncommon" | "host" | "unwanted" | "safe" | "accepted";

        /**
         * _in_progress_: The download is currently receiving data from the
         * server.
         * _interrupted_: An error broke the connection with the file host.
         * _complete_: The download completed successfully.
         *
         * These string constants will never change, however the set of States
         * may change.
         */
        export type State = "in_progress" | "interrupted" | "complete";

        export interface DownloadItem {
            /** An identifier that is persistent across browser sessions. */
            id: number;
            /** Absolute URL. */
            url: string;
            referrer?: string | undefined;
            /** Absolute local path. */
            filename: string;
            /**
             * False if this download is recorded in the history, true if it is not
             * recorded.
             */
            incognito: boolean;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /**
             * Indication of whether this download is thought to be safe or known to
             * be suspicious.
             */
            danger: DangerType;
            /** The file's MIME type. */
            mime?: string | undefined;
            /**
             * Number of milliseconds between the unix epoch and when this download
             * began.
             */
            startTime: string;
            /**
             * Number of milliseconds between the unix epoch and when this download
             * ended.
             */
            endTime?: string | undefined;
            estimatedEndTime?: string | undefined;
            /**
             * Indicates whether the download is progressing, interrupted, or
             * complete.
             */
            state: State;
            /**
             * True if the download has stopped reading data from the host, but kept
             * the connection open.
             */
            paused: boolean;
            canResume: boolean;
            /** Number indicating why a download was interrupted. */
            error?: InterruptReason | undefined;
            /**
             * Number of bytes received so far from the host, without considering
             * file compression.
             */
            bytesReceived: number;
            /**
             * Number of bytes in the whole file, without considering file
             * compression, or -1 if unknown.
             */
            totalBytes: number;
            /**
             * Number of bytes in the whole file post-decompression, or -1 if
             * unknown.
             */
            fileSize: number;
            exists: boolean;
            byExtensionId?: string | undefined;
            byExtensionName?: string | undefined;
        }

        export interface StringDelta {
            current?: string | undefined;
            previous?: string | undefined;
        }

        export interface DoubleDelta {
            current?: number | undefined;
            previous?: number | undefined;
        }

        export interface BooleanDelta {
            current?: boolean | undefined;
            previous?: boolean | undefined;
        }

        /**
         * A time specified as a Date object, a number or string representing
         * milliseconds since the epoch, or an ISO 8601 string
         */
        export type DownloadTime = string | extensionTypes.Date;

        /**
         * Parameters that combine to specify a predicate that can be used to
         * select a set of downloads. Used for example in search() and erase()
         */
        export interface DownloadQuery {
            /**
             * This array of search terms limits results to DownloadItems whose
             * `filename` or `url` contain all of the search terms that do not begin
             * with a dash '-' and none of the search terms that do begin with a
             * dash.
             */
            query?: string[] | undefined;
            /**
             * Limits results to downloads that started before the given ms since the
             * epoch.
             */
            startedBefore?: DownloadTime | undefined;
            /**
             * Limits results to downloads that started after the given ms since the
             * epoch.
             */
            startedAfter?: DownloadTime | undefined;
            /**
             * Limits results to downloads that ended before the given ms since the
             * epoch.
             */
            endedBefore?: DownloadTime | undefined;
            /**
             * Limits results to downloads that ended after the given ms since the
             * epoch.
             */
            endedAfter?: DownloadTime | undefined;
            /**
             * Limits results to downloads whose totalBytes is greater than the given
             * integer.
             */
            totalBytesGreater?: number | undefined;
            /**
             * Limits results to downloads whose totalBytes is less than the given
             * integer.
             */
            totalBytesLess?: number | undefined;
            /**
             * Limits results to DownloadItems whose `filename` matches the given
             * regular expression.
             */
            filenameRegex?: string | undefined;
            /**
             * Limits results to DownloadItems whose `url` matches the given regular
             * expression.
             */
            urlRegex?: string | undefined;
            /**
             * Setting this integer limits the number of results. Otherwise, all
             * matching DownloadItems will be returned.
             */
            limit?: number | undefined;
            /**
             * Setting elements of this array to DownloadItem properties in order to
             * sort the search results. For example, setting `orderBy='startTime'`
             * sorts the DownloadItems by their start time in ascending order. To
             * specify descending order, prefix `orderBy` with a hyphen:
             * '-startTime'.
             */
            orderBy?: string[] | undefined;
            id?: number | undefined;
            /** Absolute URL. */
            url?: string | undefined;
            /** Absolute local path. */
            filename?: string | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /**
             * Indication of whether this download is thought to be safe or known to
             * be suspicious.
             */
            danger?: DangerType | undefined;
            /** The file's MIME type. */
            mime?: string | undefined;
            startTime?: string | undefined;
            endTime?: string | undefined;
            /**
             * Indicates whether the download is progressing, interrupted, or
             * complete.
             */
            state?: State | undefined;
            /**
             * True if the download has stopped reading data from the host, but kept
             * the connection open.
             */
            paused?: boolean | undefined;
            /** Why a download was interrupted. */
            error?: InterruptReason | undefined;
            /**
             * Number of bytes received so far from the host, without considering
             * file compression.
             */
            bytesReceived?: number | undefined;
            /**
             * Number of bytes in the whole file, without considering file
             * compression, or -1 if unknown.
             */
            totalBytes?: number | undefined;
            /**
             * Number of bytes in the whole file post-decompression, or -1 if
             * unknown.
             */
            fileSize?: number | undefined;
            exists?: boolean | undefined;
        }

        /** The HTTP method to use if the URL uses the HTTP[S] protocol. */
        export type _DownloadOptionsMethod = "GET" | "POST";

        export interface _DownloadOptionsHeaders {
            /** Name of the HTTP header. */
            name: string;
            /** Value of the HTTP header. */
            value: string;
        }

        /** What to download and how. */
        export interface _DownloadOptions {
            /** The URL to download. */
            url: string;
            /**
             * A file path relative to the Downloads directory to contain the
             * downloaded file.
             */
            filename?: string | undefined;
            /** Whether to associate the download with a private browsing session. */
            incognito?: boolean | undefined;
            /**
             * The cookie store ID of the contextual identity; requires "cookies"
             * permission.
             */
            cookieStoreId?: string | undefined;
            conflictAction?: FilenameConflictAction | undefined;
            /**
             * Use a file-chooser to allow the user to select a filename. If the
             * option is not specified, the file chooser will be shown only if the
             * Firefox "Always ask you where to save files" option is enabled (i.e.
             * the pref `browser.download.useDownloadDir` is set to `false`).
             */
            saveAs?: boolean | undefined;
            /** The HTTP method to use if the URL uses the HTTP[S] protocol. */
            method?: _DownloadOptionsMethod | undefined;
            /**
             * Extra HTTP headers to send with the request if the URL uses the
             * HTTP[s] protocol. Each header is represented as a dictionary
             * containing the keys `name` and either `value` or `binaryValue`,
             * restricted to those allowed by XMLHttpRequest.
             */
            headers?: _DownloadOptionsHeaders[] | undefined;
            /** Post body. */
            body?: string | undefined;
            /**
             * When this flag is set to `true`, then the browser will allow downloads
             * to proceed after encountering HTTP errors such as `404 Not Found`.
             */
            allowHttpErrors?: boolean | undefined;
        }

        export interface _GetFileIconOptions {
            /**
             * The size of the icon. The returned icon will be square with dimensions
             * size \* size pixels. The default size for the icon is 32x32 pixels.
             */
            size?: number | undefined;
        }

        export interface _OnChangedDownloadDelta {
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
         * Download a URL. If the URL uses the HTTP[S] protocol, then the request
         * will include all cookies currently set for its hostname. If both
         * `filename` and `saveAs` are specified, then the Save As dialog will be
         * displayed, pre-populated with the specified `filename`. If the
         * download started successfully, `callback` will be called with the new
         * DownloadItem's `downloadId`. If there was an error starting the
         * download, then `callback` will be called with `downloadId=undefined`
         * and browser.extension.lastError will contain a descriptive string.
         * The error strings are not guaranteed to remain backwards compatible
         * between releases. You must not parse it.
         *
         * @param options What to download and how.
         */
        export function download(options: _DownloadOptions): Promise<number>;

        /**
         * Find DownloadItems. Set `query` to the empty object to get all
         * DownloadItems. To get a specific DownloadItem, set only the `id`
         * field.
         */
        export function search(query: DownloadQuery): Promise<DownloadItem[]>;

        /**
         * Pause the download. If the request was successful the download is in a
         * paused state. Otherwise browser.extension.lastError contains an
         * error message. The request will fail if the download is not active.
         *
         * @param downloadId The id of the download to pause.
         */
        export function pause(downloadId: number): Promise<void>;

        /**
         * Resume a paused download. If the request was successful the download
         * is in progress and unpaused. Otherwise browser.extension.lastError
         * contains an error message. The request will fail if the download is
         * not active.
         *
         * @param downloadId The id of the download to resume.
         */
        export function resume(downloadId: number): Promise<void>;

        /**
         * Cancel a download. When `callback` is run, the download is cancelled,
         * completed, interrupted or doesn't exist anymore.
         *
         * @param downloadId The id of the download to cancel.
         */
        export function cancel(downloadId: number): Promise<void>;

        /**
         * Retrieve an icon for the specified download. For new downloads, file
         * icons are available after the onCreated event has been received. The
         * image returned by this function while a download is in progress may be
         * different from the image returned after the download is complete. Icon
         * retrieval is done by querying the underlying operating system or
         * toolkit depending on the platform. The icon that is returned will
         * therefore depend on a number of factors including state of the
         * download, platform, registered file types and visual theme. If a file
         * icon cannot be determined, browser.extension.lastError will contain
         * an error message.
         *
         * @param downloadId The identifier for the download.
         */
        export function getFileIcon(downloadId: number, options?: _GetFileIconOptions): Promise<string>;

        /** Open the downloaded file. */
        export function open(downloadId: number): Promise<void>;

        /** Show the downloaded file in its folder in a file manager. */
        export function show(downloadId: number): Promise<boolean>;

        export function showDefaultFolder(): void;

        /** Erase matching DownloadItems from history */
        export function erase(query: DownloadQuery): Promise<number[]>;

        export function removeFile(downloadId: number): Promise<void>;

        /**
         * Prompt the user to either accept or cancel a dangerous download.
         * `acceptDanger()` does not automatically accept dangerous downloads.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function acceptDanger(downloadId: number): Promise<void>;

        /**
         * Initiate dragging the file to another application.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function drag(downloadId: number): void;

        /** @deprecated Unsupported on Firefox at this time. */
        export function setShelfEnabled(enabled: boolean): void;

        /* downloads events */
        /** This event fires with the DownloadItem object when a download begins. */
        export const onCreated: WebExtEvent<(downloadItem: DownloadItem) => void>;

        /**
         * Fires with the `downloadId` when a download is erased from history.
         *
         * @param downloadId The `id` of the DownloadItem that was erased.
         */
        export const onErased: WebExtEvent<(downloadId: number) => void>;

        /**
         * When any of a DownloadItem's properties except `bytesReceived`
         * changes, this event fires with the `downloadId` and an object
         * containing the properties that changed.
         */
        export const onChanged: WebExtEvent<(downloadDelta: _OnChangedDownloadDelta) => void>;
    }

    /**
     * The `browser.events` namespace contains common types used by APIs
     * dispatching events to notify you when something interesting happens.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/events
     */
    export namespace events {
        /* events types */
        /** Description of a declarative rule for handling events. */
        export interface Rule {
            /** Optional identifier that allows referencing this rule. */
            id?: string | undefined;
            /**
             * Tags can be used to annotate rules and perform operations on sets of
             * rules.
             */
            tags?: string[] | undefined;
            /** List of conditions that can trigger the actions. */
            conditions: any[];
            /**
             * List of actions that are triggered if one of the condtions is
             * fulfilled.
             */
            actions: any[];
            /** Optional priority of this rule. Defaults to 100. */
            priority?: number | undefined;
        }

        /**
         * An object which allows the addition and removal of listeners for a
         * Chrome event.
         */
        export interface Event {
            /**
             * Registers an event listener _callback_ to an event.
             *
             * @param callback Called when an event occurs. The parameters of this
             * function depend on the type of event.
             */
            addListener(callback: () => void): void;
            /**
             * Deregisters an event listener _callback_ from an event.
             *
             * @param callback Listener that shall be unregistered.
             */
            removeListener(callback: () => void): void;
            /**
             * @param callback Listener whose registration status shall be tested.
             *
             * @returns True if _callback_ is registered to the event.
             */
            hasListener(callback: () => void): boolean;
            /** @returns True if any event listeners are registered to the event. */
            hasListeners(): boolean;
            /**
             * Registers rules to handle events.
             *
             * @param eventName Name of the event this function affects.
             *
             * @param webViewInstanceId If provided, this is an integer that uniquely
             * identfies the <webview> associated with this function call.
             *
             * @param rules Rules to be registered. These do not replace previously
             * registered rules.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            addRules?(eventName: string, webViewInstanceId: number, rules: Rule[]): Promise<Rule[]>;
            /**
             * Returns currently registered rules.
             *
             * @param eventName Name of the event this function affects.
             *
             * @param webViewInstanceId If provided, this is an integer that uniquely
             * identfies the <webview> associated with this function call.
             *
             * @param [ruleIdentifiers] If an array is passed, only rules with
             * identifiers contained in this array are returned.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            getRules?(eventName: string, webViewInstanceId: number, ruleIdentifiers?: string[]): Promise<Rule[]>;
            /**
             * Unregisters currently registered rules.
             *
             * @param eventName Name of the event this function affects.
             *
             * @param webViewInstanceId If provided, this is an integer that uniquely
             * identfies the <webview> associated with this function call.
             *
             * @param [ruleIdentifiers] If an array is passed, only rules with
             * identifiers contained in this array are unregistered.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            removeRules?(eventName: string, webViewInstanceId: number, ruleIdentifiers?: string[]): Promise<void>;
        }

        /**
         * Filters URLs for various criteria. See event filtering. All criteria
         * are case sensitive.
         */
        export interface UrlFilter {
            /**
             * Matches if the host name of the URL contains a specified string. To
             * test whether a host name component has a prefix 'foo', use
             * hostContains: '.foo'. This matches 'www.foobar.com' and 'foo.com',
             * because an implicit dot is added at the beginning of the host name.
             * Similarly, hostContains can be used to match against component suffix
             * ('foo.') and to exactly match against components ('.foo.'). Suffix-
             * and exact-matching for the last components need to be done separately
             * using hostSuffix, because no implicit dot is added at the end of the
             * host name.
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
            /**
             * Matches if the query segment of the URL is equal to a specified
             * string.
             */
            queryEquals?: string | undefined;
            /**
             * Matches if the query segment of the URL starts with a specified
             * string.
             */
            queryPrefix?: string | undefined;
            /** Matches if the query segment of the URL ends with a specified string. */
            querySuffix?: string | undefined;
            /**
             * Matches if the URL (without fragment identifier) contains a specified
             * string. Port numbers are stripped from the URL if they match the
             * default port number.
             */
            urlContains?: string | undefined;
            /**
             * Matches if the URL (without fragment identifier) is equal to a
             * specified string. Port numbers are stripped from the URL if they match
             * the default port number.
             */
            urlEquals?: string | undefined;
            /**
             * Matches if the URL (without fragment identifier) matches a specified
             * regular expression. Port numbers are stripped from the URL if they
             * match the default port number. The regular expressions use the
             * [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
             */
            urlMatches?: string | undefined;
            /**
             * Matches if the URL without query segment and fragment identifier
             * matches a specified regular expression. Port numbers are stripped from
             * the URL if they match the default port number. The regular expressions
             * use the
             * [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
             */
            originAndPathMatches?: string | undefined;
            /**
             * Matches if the URL (without fragment identifier) starts with a
             * specified string. Port numbers are stripped from the URL if they match
             * the default port number.
             */
            urlPrefix?: string | undefined;
            /**
             * Matches if the URL (without fragment identifier) ends with a specified
             * string. Port numbers are stripped from the URL if they match the
             * default port number.
             */
            urlSuffix?: string | undefined;
            /**
             * Matches if the scheme of the URL is equal to any of the schemes
             * specified in the array.
             */
            schemes?: string[] | undefined;
            /**
             * Matches if the port of the URL is contained in any of the specified
             * port lists. For example `[80, 443, [1000, 1200]]` matches all requests
             * on port 80, 443 and in the range 1000-1200.
             */
            ports?: Array<number | [number, number]> | undefined;
        }
    }

    /**
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://webextension-api.thunderbird.net/en/latest/how-to/experiments.html
     */
    export namespace experiments {
        /* experiments types */
        export interface ExperimentAPI {
            schema: ExperimentURL;
            parent?: _ExperimentAPIParent | undefined;
            child?: _ExperimentAPIChild | undefined;
        }

        export type ExperimentURL = string;

        export type APIPaths = APIPath[];

        export type APIPath = string[];

        export type APIEvents = APIEvent[];

        export type APIEvent = "startup";

        export type APIParentScope = "addon_parent" | "content_parent" | "devtools_parent";

        export type APIChildScope = "addon_child" | "content_child" | "devtools_child";

        export interface _ExperimentAPIParent {
            events?: APIEvents | undefined;
            paths?: APIPaths | undefined;
            script: ExperimentURL;
            scopes?: APIParentScope[] | undefined;
        }

        export interface _ExperimentAPIChild {
            paths: APIPaths;
            script: ExperimentURL;
            scopes: APIChildScope[];
        }
    }

    /**
     * The `browser.extension` API has utilities that can be used by any
     * extension page. It includes support for exchanging messages between an
     * extension and its content scripts or between extensions, as described
     * in detail in Message Passing.
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extension
     */
    export namespace extension {
        /* extension types */
        /** The type of extension view. */
        export type ViewType = "tab" | "popup" | "sidebar";

        /**
         * Set for the lifetime of a callback if an ansychronous extension api
         * has resulted in an error. If no error has occured lastError will be
         * `undefined`.
         *
         * @deprecated Please use `runtime.lastError`.
         *
         * Not supported on manifest versions above 2.
         */
        export interface _LastError {
            /** Description of the error that has taken place. */
            message: string;
        }

        export interface _GetViewsFetchProperties {
            /**
             * The type of view to get. If omitted, returns all views (including
             * background pages and tabs). Valid values: 'tab', 'popup', 'sidebar'.
             */
            type?: ViewType | undefined;
            /** The window to restrict the search to. If omitted, returns all views. */
            windowId?: number | undefined;
            /**
             * Find a view according to a tab id. If this field is omitted, returns
             * all views.
             */
            tabId?: number | undefined;
        }

        /* extension properties */
        /**
         * Set for the lifetime of a callback if an ansychronous extension api
         * has resulted in an error. If no error has occured lastError will be
         * `undefined`.
         *
         * @deprecated Please use `runtime.lastError`.
         *
         * Not supported on manifest versions above 2.
         */
        export const lastError: _LastError | undefined;

        /**
         * True for content scripts running inside incognito tabs, and for
         * extension pages running inside an incognito process. The latter only
         * applies to extensions with 'split' incognito_behavior.
         */
        export const inIncognitoContext: boolean | undefined;

        /* extension functions */
        /**
         * Converts a relative path within an extension install directory to a
         * fully-qualified URL.
         *
         * @param path A path to a resource within an extension expressed
         * relative to its install directory.
         *
         * @deprecated Please use `runtime.getURL`.
         *
         * Not supported on manifest versions above 2.
         *
         * @returns The fully-qualified URL to the resource.
         */
        export function getURL(path: string): string;

        /**
         * Returns an array of the JavaScript 'window' objects for each of the
         * pages running inside the current extension.
         *
         * @returns Array of global objects
         */
        export function getViews(fetchProperties?: _GetViewsFetchProperties): Window[];

        /**
         * Returns the JavaScript 'window' object for the background page running
         * inside the current extension. Returns null if the extension has no
         * background page.
         */
        export function getBackgroundPage(): Window | void;

        /**
         * Retrieves the state of the extension's access to Incognito-mode (as
         * determined by the user-controlled 'Allowed in Incognito' checkbox.
         */
        export function isAllowedIncognitoAccess(): Promise<boolean>;

        /**
         * Retrieves the state of the extension's access to the 'file://' scheme
         * (as determined by the user-controlled 'Allow access to File URLs'
         * checkbox.
         */
        export function isAllowedFileSchemeAccess(): Promise<boolean>;

        /**
         * Sets the value of the ap CGI parameter used in the extension's update
         * URL. This value is ignored for extensions that are hosted in the
         * browser vendor's store.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function setUpdateUrlData(data: string): void;

        /* extension events */
        /**
         * Fired when a request is sent from either an extension process or a
         * content script.
         *
         * @param request The request sent by the calling script.
         *
         * @param sendResponse Function to call (at most once) when you have a
         * response. The argument should be any JSON-ifiable object, or undefined
         * if there is no response. If you have more than one `onRequest`
         * listener in the same document, then only one may send a response.
         *
         * @deprecated Please use `runtime.onMessage`.
         */
        export const onRequest:
            | WebExtEvent<(request: any, sender: runtime.MessageSender, sendResponse: (response?: any) => void) => void>
            | undefined;

        /**
         * Fired when a request is sent from another extension.
         *
         * @param request The request sent by the calling script.
         *
         * @param sendResponse Function to call when you have a response. The
         * argument should be any JSON-ifiable object, or undefined if there is
         * no response.
         *
         * @deprecated Please use `runtime.onMessageExternal`.
         */
        export const onRequestExternal:
            | WebExtEvent<(request: any, sender: runtime.MessageSender, sendResponse: (response?: any) => void) => void>
            | undefined;
    }

    /**
     * The `browser.extensionTypes` API contains type declarations for
     * WebExtensions.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/extensionTypes
     */
    export namespace extensionTypes {
        /* extensionTypes types */
        /** The format of an image. */
        export type ImageFormat = "jpeg" | "png";

        /** Details about the format, quality, area and scale of the capture. */
        export interface ImageDetails {
            /** The format of the resulting image. Default is `"jpeg"`. */
            format?: ImageFormat | undefined;
            /**
             * When format is `"jpeg"`, controls the quality of the resulting image.
             * This value is ignored for PNG images. As quality is decreased, the
             * resulting image will have more visual artifacts, and the number of
             * bytes needed to store it will decrease.
             */
            quality?: number | undefined;
            /**
             * The area of the document to capture, in CSS pixels, relative to the
             * page. If omitted, capture the visible viewport.
             */
            rect?: _ImageDetailsRect | undefined;
            /** The scale of the resulting image. Defaults to `devicePixelRatio`. */
            scale?: number | undefined;
            /**
             * If true, temporarily resets the scroll position of the document to 0\.
             * Only takes effect if rect is also specified.
             */
            resetScrollPosition?: boolean | undefined;
        }

        /** The soonest that the JavaScript or CSS will be injected into the tab. */
        export type RunAt = "document_start" | "document_end" | "document_idle";

        /**
         * The origin of the CSS to inject, this affects the cascading order
         * (priority) of the stylesheet.
         */
        export type CSSOrigin = "user" | "author";

        /**
         * Details of the script or CSS to inject. Either the code or the file
         * property must be set, but both may not be set at the same time.
         */
        export interface InjectDetails {
            /**
             * JavaScript or CSS code to inject.
             *
             * **Warning:**
             * Be careful using the `code` parameter. Incorrect use of it may open
             * your extension to
             * [cross site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting)
             * attacks.
             */
            code?: string | undefined;
            /** JavaScript or CSS file to inject. */
            file?: string | undefined;
            /**
             * If allFrames is `true`, implies that the JavaScript or CSS should be
             * injected into all frames of current page. By default, it's `false` and
             * is only injected into the top frame.
             */
            allFrames?: boolean | undefined;
            /**
             * If matchAboutBlank is true, then the code is also injected in
             * about:blank and about:srcdoc frames if your extension has access to
             * its parent document. Code cannot be inserted in top-level
             * about:-frames. By default it is `false`.
             */
            matchAboutBlank?: boolean | undefined;
            /**
             * The ID of the frame to inject the script into. This may not be used in
             * combination with `allFrames`.
             */
            frameId?: number | undefined;
            /**
             * The soonest that the JavaScript or CSS will be injected into the tab.
             * Defaults to "document_idle".
             */
            runAt?: RunAt | undefined;
            /** The css origin of the stylesheet to inject. Defaults to "author". */
            cssOrigin?: CSSOrigin | undefined;
        }

        export type Date = string | number | globalThis.Date;

        export type ExtensionFileOrCode =
            | {
                file: _manifest.ExtensionURL;
            }
            | {
                code: string;
            };

        /** A plain JSON value */
        export type PlainJSONValue = null | string | number | boolean | _PlainJSONArray | _PlainJSONObject;

        /**
         * The area of the document to capture, in CSS pixels, relative to the
         * page. If omitted, capture the visible viewport.
         */
        export interface _ImageDetailsRect {
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
     * Use the `browser.i18n` infrastructure to implement
     * internationalization across your whole app or extension.
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n
     */
    export namespace i18n {
        /* i18n types */
        /**
         * An ISO language code such as `en` or `fr`. For a complete list of
         * languages supported by this method, see
         * [kLanguageInfoTable](http://src.chromium.org/viewvc/chrome/trunk/src/third_party/cld/languages/internal/languages.cc).
         * For an unknown language, `und` will be returned, which means that
         * [percentage] of the text is unknown to CLD
         */
        export type LanguageCode = string;

        /**
         * DetectedLanguage object that holds detected ISO language code and its
         * percentage in the input string
         */
        export interface _DetectLanguageReturnResultLanguages {
            language: LanguageCode;
            /** The percentage of the detected language */
            percentage: number;
        }

        /**
         * LanguageDetectionResult object that holds detected langugae
         * reliability and array of DetectedLanguage
         */
        export interface _DetectLanguageReturnResult {
            /** CLD detected language reliability */
            isReliable: boolean;
            /** array of detectedLanguage */
            languages: _DetectLanguageReturnResultLanguages[];
        }

        /* i18n functions */
        /**
         * Gets the accept-languages of the browser. This is different from the
         * locale used by the browser; to get the locale, use
         * `i18n.getUILanguage`.
         */
        export function getAcceptLanguages(): Promise<LanguageCode[]>;

        /**
         * Gets the localized string for the specified message. If the message is
         * missing, this method returns an empty string (''). If the format of
         * the `getMessage()` call is wrong — for example, _messageName_ is not a
         * string or the _substitutions_ array has more than 9 elements — this
         * method returns `undefined`.
         *
         * @param messageName The name of the message, as specified in the
         * `messages.json` file.
         *
         * @param [substitutions] Substitution strings, if the message requires
         * any.
         *
         * @returns Message localized for current locale.
         */
        export function getMessage(messageName: string, substitutions?: any): string;

        /**
         * Gets the browser UI language of the browser. This is different from
         * `i18n.getAcceptLanguages` which returns the preferred user languages.
         *
         * @returns The browser UI language code such as en-US or fr-FR.
         */
        export function getUILanguage(): string;

        /**
         * Detects the language of the provided text using CLD.
         *
         * @param text User input string to be translated.
         */
        export function detectLanguage(text: string): Promise<_DetectLanguageReturnResult>;
    }

    /**
     * Use the browser.identity API to get OAuth2 access tokens.
     *
     * Permissions: `identity`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/identity
     */
    export namespace identity {
        /* identity types */
        /** An object encapsulating an OAuth account id. */
        export interface AccountInfo {
            /**
             * A unique identifier for the account. This ID will not change for the
             * lifetime of the account.
             */
            id: string;
        }

        export interface _GetAuthTokenDetails {
            interactive?: boolean | undefined;
            account?: AccountInfo | undefined;
            scopes?: string[] | undefined;
        }

        export interface _GetProfileUserInfoReturnUserinfo {
            email: string;
            id: string;
        }

        export interface _RemoveCachedAuthTokenReturnUserinfo {
            email: string;
            id: string;
        }

        export interface _RemoveCachedAuthTokenDetails {
            token: string;
        }

        export interface _LaunchWebAuthFlowDetails {
            url: _manifest.HttpURL;
            interactive?: boolean | undefined;
        }

        /* identity functions */
        /**
         * Retrieves a list of AccountInfo objects describing the accounts
         * present on the profile.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function getAccounts(): Promise<AccountInfo[]>;

        /**
         * Gets an OAuth2 access token using the client ID and scopes specified
         * in the oauth2 section of manifest.json.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function getAuthToken(details?: _GetAuthTokenDetails): Promise<string>;

        /**
         * Retrieves email address and obfuscated gaia id of the user signed into
         * a profile.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function getProfileUserInfo(): Promise<_GetProfileUserInfoReturnUserinfo>;

        /**
         * Removes an OAuth2 access token from the Identity API's token cache.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function removeCachedAuthToken(
            details: _RemoveCachedAuthTokenDetails,
        ): Promise<_RemoveCachedAuthTokenReturnUserinfo>;

        /** Starts an auth flow at the specified URL. */
        export function launchWebAuthFlow(details: _LaunchWebAuthFlowDetails): Promise<string>;

        /**
         * Generates a redirect URL to be used in {@link launchWebAuthFlow}.
         *
         * @param [path] The path appended to the end of the generated URL.
         */
        export function getRedirectURL(path?: string): string;

        /* identity events */
        /**
         * Fired when signin state changes for an account on the user's profile.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export const onSignInChanged: WebExtEvent<(account: AccountInfo, signedIn: boolean) => void> | undefined;
    }

    /**
     * Use the `browser.idle` API to detect when the machine's idle state
     * changes.
     *
     * Permissions: `idle`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/idle
     */
    export namespace idle {
        /* idle types */
        export type IdleState = "active" | "idle";

        /* idle functions */
        /**
         * Returns "idle" if the user has not generated any input for a specified
         * number of seconds, or "active" otherwise.
         *
         * @param detectionIntervalInSeconds The system is considered idle if
         * detectionIntervalInSeconds seconds have elapsed since the last user
         * input detected.
         */
        export function queryState(detectionIntervalInSeconds: number): Promise<IdleState>;

        /**
         * Sets the interval, in seconds, used to determine when the system is in
         * an idle state for onStateChanged events. The default interval is 60
         * seconds.
         *
         * @param intervalInSeconds Threshold, in seconds, used to determine when
         * the system is in an idle state.
         */
        export function setDetectionInterval(intervalInSeconds: number): void;

        /* idle events */
        /**
         * Fired when the system changes to an active or idle state. The event
         * fires with "idle" if the the user has not generated any input for a
         * specified number of seconds, and "active" when the user generates
         * input on an idle system.
         */
        export const onStateChanged: WebExtEvent<(newState: IdleState) => void>;
    }

    /**
     * The `browser.management` API provides ways to manage the list of
     * extensions that are installed and running.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/management
     */
    export namespace management {
        /* management types */
        /** Information about an icon belonging to an extension. */
        export interface IconInfo {
            /**
             * A number representing the width and height of the icon. Likely values
             * include (but are not limited to) 128, 48, 24, and 16.
             */
            size: number;
            /**
             * The URL for this icon image. To display a grayscale version of the
             * icon (to indicate that an extension is disabled, for example), append
             * `?grayscale=true` to the URL.
             */
            url: string;
        }

        /** A reason the item is disabled. */
        export type ExtensionDisabledReason = "unknown" | "permissions_increase";

        /** The type of this extension, 'extension' or 'theme'. */
        export type ExtensionType = "extension" | "theme";

        /**
         * How the extension was installed. One of
         * `development`: The extension was loaded unpacked in developer mode,
         * `normal`: The extension was installed normally via an .xpi file,
         * `sideload`: The extension was installed by other software on the
         * machine,
         * `other`: The extension was installed by other means.
         */
        export type ExtensionInstallType = "development" | "normal" | "sideload" | "other";

        /** Information about an installed extension. */
        export interface ExtensionInfo {
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
             * A list of icon information. Note that this just reflects what was
             * declared in the manifest, and the actual image at that url may be
             * larger or smaller than what was declared, so you might consider using
             * explicit width and height attributes on img tags referencing these
             * images. See the manifest documentation on icons for more details.
             */
            icons?: IconInfo[] | undefined;
            /** Returns a list of API based permissions. */
            permissions?: string[] | undefined;
            /** Returns a list of host based permissions. */
            hostPermissions?: string[] | undefined;
            /** How the extension was installed. */
            installType: ExtensionInstallType;
        }

        export interface _InstallReturnResult {
            id: _manifest.ExtensionID;
        }

        export interface _InstallOptions {
            /** URL pointing to the XPI file on addons.mozilla.org or similar. */
            url: _manifest.HttpURL;
            /** A hash of the XPI file, using sha256 or stronger. */
            hash?: string | undefined;
        }

        export interface _UninstallSelfOptions {
            /**
             * Whether or not a confirm-uninstall dialog should prompt the user.
             * Defaults to false.
             */
            showConfirmDialog?: boolean | undefined;
            /**
             * The message to display to a user when being asked to confirm removal
             * of the extension.
             */
            dialogMessage?: string | undefined;
        }

        /* management functions */
        /** Returns a list of information about installed extensions. */
        export function getAll(): Promise<ExtensionInfo[]>;

        /**
         * Returns information about the installed extension that has the given
         * ID.
         *
         * @param id The ID from an item of `management.ExtensionInfo`.
         */
        export function get(id: _manifest.ExtensionID): Promise<ExtensionInfo>;

        /** Installs and enables a theme extension from the given url. */
        export function install(options: _InstallOptions): Promise<_InstallReturnResult>;

        /**
         * Returns information about the calling extension. Note: This function
         * can be used without requesting the 'management' permission in the
         * manifest.
         */
        export function getSelf(): Promise<ExtensionInfo>;

        /**
         * Uninstalls the calling extension. Note: This function can be used
         * without requesting the 'management' permission in the manifest.
         */
        export function uninstallSelf(options?: _UninstallSelfOptions): Promise<void>;

        /**
         * Enables or disables the given add-on.
         *
         * @param id ID of the add-on to enable/disable.
         *
         * @param enabled Whether to enable or disable the add-on.
         */
        export function setEnabled(id: string, enabled: boolean): Promise<void>;

        /* management events */
        /** Fired when an addon has been disabled. */
        export const onDisabled: WebExtEvent<(info: ExtensionInfo) => void>;

        /** Fired when an addon has been enabled. */
        export const onEnabled: WebExtEvent<(info: ExtensionInfo) => void>;

        /** Fired when an addon has been installed. */
        export const onInstalled: WebExtEvent<(info: ExtensionInfo) => void>;

        /** Fired when an addon has been uninstalled. */
        export const onUninstalled: WebExtEvent<(info: ExtensionInfo) => void>;
    }

    /**
     * Permissions: `notifications`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications
     */
    export namespace notifications {
        /* notifications types */
        export type TemplateType = "basic" | "image" | "list" | "progress";

        export type PermissionLevel = "granted" | "denied";

        export interface NotificationItem {
            /** Title of one item of a list notification. */
            title: string;
            /** Additional details about this item. */
            message: string;
        }

        export interface CreateNotificationOptions {
            /** Which type of notification to display. */
            type: TemplateType;
            /**
             * A URL to the sender's avatar, app icon, or a thumbnail for image
             * notifications.
             */
            iconUrl?: string | undefined;
            /** A URL to the app icon mask. */
            appIconMaskUrl?: string | undefined;
            /** Title of the notification (e.g. sender name for email). */
            title: string;
            /** Main notification content. */
            message: string;
            /** Alternate notification content with a lower-weight font. */
            contextMessage?: string | undefined;
            /**
             * Priority ranges from -2 to 2\. -2 is lowest priority. 2 is highest.
             * Zero is default.
             */
            priority?: number | undefined;
            /**
             * A timestamp associated with the notification, in milliseconds past the
             * epoch.
             */
            eventTime?: number | undefined;
            /**
             * Text and icons for up to two notification action buttons.
             *
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
             * Whether to show UI indicating that the app will visibly respond to
             * clicks on the body of a notification.
             */
            isClickable?: boolean | undefined;
        }

        export interface UpdateNotificationOptions {
            /** Which type of notification to display. */
            type?: TemplateType | undefined;
            /**
             * A URL to the sender's avatar, app icon, or a thumbnail for image
             * notifications.
             */
            iconUrl?: string | undefined;
            /** A URL to the app icon mask. */
            appIconMaskUrl?: string | undefined;
            /** Title of the notification (e.g. sender name for email). */
            title?: string | undefined;
            /** Main notification content. */
            message?: string | undefined;
            /** Alternate notification content with a lower-weight font. */
            contextMessage?: string | undefined;
            /**
             * Priority ranges from -2 to 2\. -2 is lowest priority. 2 is highest.
             * Zero is default.
             */
            priority?: number | undefined;
            /**
             * A timestamp associated with the notification, in milliseconds past the
             * epoch.
             */
            eventTime?: number | undefined;
            /**
             * Text and icons for up to two notification action buttons.
             *
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
             * Whether to show UI indicating that the app will visibly respond to
             * clicks on the body of a notification.
             */
            isClickable?: boolean | undefined;
        }

        export interface _CreateNotificationOptionsButtons {
            title: string;
            iconUrl?: string | undefined;
        }

        export interface _UpdateNotificationOptionsButtons {
            title: string;
            iconUrl?: string | undefined;
        }

        /* notifications functions */
        /**
         * Creates and displays a notification.
         *
         * @param notificationId Identifier of the notification. If it is empty,
         * this method generates an id. If it matches an existing notification,
         * this method first clears that notification before proceeding with the
         * create operation.
         *
         * @param options Contents of the notification.
         */
        export function create(notificationId: string, options: CreateNotificationOptions): Promise<string>;
        /**
         * Creates and displays a notification.
         *
         * @param options Contents of the notification.
         */
        export function create(options: CreateNotificationOptions): Promise<string>;

        /**
         * Updates an existing notification.
         *
         * @param notificationId The id of the notification to be updated.
         *
         * @param options Contents of the notification to update to.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function update(notificationId: string, options: UpdateNotificationOptions): Promise<boolean>;

        /**
         * Clears an existing notification.
         *
         * @param notificationId The id of the notification to be updated.
         */
        export function clear(notificationId: string): Promise<boolean>;

        /** Retrieves all the notifications. */
        export function getAll(): Promise<{ [key: string]: CreateNotificationOptions }>;

        /**
         * Retrieves whether the user has enabled notifications from this app or
         * extension.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function getPermissionLevel(): Promise<PermissionLevel>;

        /* notifications events */
        /**
         * Fired when the notification closed, either by the system or by user
         * action.
         *
         * @param notificationId The notificationId of the closed notification.
         *
         * @param byUser True if the notification was closed by the user.
         */
        export const onClosed: WebExtEvent<(notificationId: string, byUser: boolean) => void>;

        /**
         * Fired when the user clicked in a non-button area of the notification.
         *
         * @param notificationId The notificationId of the clicked notification.
         */
        export const onClicked: WebExtEvent<(notificationId: string) => void>;

        /**
         * Fired when the user pressed a button in the notification.
         *
         * @param notificationId The notificationId of the clicked notification.
         *
         * @param buttonIndex The index of the button clicked by the user.
         */
        export const onButtonClicked: WebExtEvent<(notificationId: string, buttonIndex: number) => void>;

        /**
         * Fired when the user changes the permission level.
         *
         * @param level The new permission level.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export const onPermissionLevelChanged: WebExtEvent<(level: PermissionLevel) => void> | undefined;

        /**
         * Fired when the user clicked on a link for the app's notification
         * settings.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export const onShowSettings: WebExtEvent<() => void> | undefined;

        /**
         * Fired when the notification is shown.
         *
         * @param notificationId The notificationId of the shown notification.
         */
        export const onShown: WebExtEvent<(notificationId: string) => void>;
    }

    /**
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions
     */
    export namespace permissions {
        /* permissions types */
        export interface Permissions {
            permissions?: _manifest.OptionalPermission[] | undefined;
            origins?: _manifest.MatchPattern[] | undefined;
        }

        export interface AnyPermissions {
            permissions?: _manifest.Permission[] | undefined;
            origins?: _manifest.MatchPattern[] | undefined;
        }

        /* permissions functions */
        /** Get a list of all the extension's permissions. */
        export function getAll(): Promise<AnyPermissions>;

        /** Check if the extension has the given permissions. */
        export function contains(permissions: AnyPermissions): Promise<boolean>;

        /**
         * Request the given permissions.
         *
         * Not allowed in: Devtools pages
         */
        export function request(permissions: Permissions): Promise<boolean>;

        /** Relinquish the given permissions. */
        export function remove(permissions: Permissions): Promise<boolean>;

        /* permissions events */
        /** Fired when the extension acquires new permissions. */
        export const onAdded: WebExtEvent<(permissions: Permissions) => void>;

        /** Fired when permissions are removed from the extension. */
        export const onRemoved: WebExtEvent<(permissions: Permissions) => void>;
    }

    /**
     * PKCS#11 module management API
     *
     * Permissions: `pkcs11`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/pkcs11
     */
    export namespace pkcs11 {
        /* pkcs11 functions */
        /** checks whether a PKCS#11 module, given by name, is installed */
        export function isModuleInstalled(name: string): Promise<boolean>;

        /** Install a PKCS#11 module with a given name */
        export function installModule(name: string, flags?: number): Promise<void>;

        /** Remove an installed PKCS#11 module from firefox */
        export function uninstallModule(name: string): Promise<void>;

        /**
         * Enumerate a module's slots, each with their name and whether a token
         * is present
         */
        export function getModuleSlots(name: string): Promise<{
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
     * Permissions: `privacy`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy
     */
    export namespace privacy {
        /**
         * Use the `browser.privacy` API to control usage of the features in
         * the browser that can affect a user's privacy.
         *
         * Permissions: `privacy`
         *
         * Not allowed in: Content scripts, Devtools pages
         *
         * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network
         */
        export namespace network {
            /* privacy.network types */
            /** The IP handling policy of WebRTC. */
            export type IPHandlingPolicy =
                | "default"
                | "default_public_and_private_interfaces"
                | "default_public_interface_only"
                | "disable_non_proxied_udp"
                | "proxy_only";

            /** An object which describes TLS minimum and maximum versions. */
            export interface tlsVersionRestrictionConfig {
                /** The minimum TLS version supported. */
                minimum?: _TlsVersionRestrictionConfigMinimum | undefined;
                /** The maximum TLS version supported. */
                maximum?: _TlsVersionRestrictionConfigMaximum | undefined;
            }

            /** The mode for https-only mode. */
            export type HTTPSOnlyModeOption = "always" | "private_browsing" | "never";

            /** The minimum TLS version supported. */
            export type _TlsVersionRestrictionConfigMinimum = "TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | "unknown";

            /** The maximum TLS version supported. */
            export type _TlsVersionRestrictionConfigMaximum = "TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | "unknown";

            /* privacy.network properties */
            /**
             * If enabled, the browser attempts to speed up your web browsing
             * experience by pre-resolving DNS entries, prerendering sites
             * (`<link rel='prefetch' ...>`), and preemptively opening TCP and SSL
             * connections to servers. This preference's value is a boolean,
             * defaulting to `true`.
             */
            export const networkPredictionEnabled: types.Setting;

            /** Allow users to enable and disable RTCPeerConnections (aka WebRTC). */
            export const peerConnectionEnabled: types.Setting;

            /**
             * Allow users to specify the media performance/privacy tradeoffs which
             * impacts how WebRTC traffic will be routed and how much local address
             * information is exposed. This preference's value is of type
             * IPHandlingPolicy, defaulting to `default`.
             */
            export const webRTCIPHandlingPolicy: types.Setting;

            /**
             * This property controls the minimum and maximum TLS versions. This
             * setting's value is an object of `tlsVersionRestrictionConfig`.
             */
            export const tlsVersionRestriction: types.Setting;

            /**
             * Allow users to query the mode for 'HTTPS-Only Mode'. This setting's
             * value is of type HTTPSOnlyModeOption, defaulting to `never`.
             */
            export const httpsOnlyMode: types.Setting;

            /**
             * Allow users to query the status of 'Global Privacy Control'. This
             * setting's value is of type boolean, defaulting to `false`.
             */
            export const globalPrivacyControl: types.Setting;
        }

        /**
         * Use the `browser.privacy` API to control usage of the features in
         * the browser that can affect a user's privacy.
         *
         * Permissions: `privacy`
         *
         * Not allowed in: Content scripts, Devtools pages
         *
         * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/services
         */
        export namespace services {
            /* privacy.services properties */
            /**
             * If enabled, the password manager will ask if you want to save
             * passwords. This preference's value is a boolean, defaulting to `true`.
             */
            export const passwordSavingEnabled: types.Setting;
        }

        /**
         * Use the `browser.privacy` API to control usage of the features in
         * the browser that can affect a user's privacy.
         *
         * Permissions: `privacy`
         *
         * Not allowed in: Content scripts, Devtools pages
         *
         * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites
         */
        export namespace websites {
            /* privacy.websites types */
            /** The mode for tracking protection. */
            export type TrackingProtectionModeOption = "always" | "never" | "private_browsing";

            /** The settings for cookies. */
            export interface CookieConfig {
                /** The type of cookies to allow. */
                behavior?: _CookieConfigBehavior | undefined;
                /**
                 * Whether to create all cookies as nonPersistent (i.e., session)
                 * cookies.
                 *
                 * @deprecated This property has no effect anymore and its value is
                 * always `false`.``
                 */
                nonPersistentCookies?: boolean | undefined;
            }

            /** The type of cookies to allow. */
            export type _CookieConfigBehavior =
                | "allow_all"
                | "reject_all"
                | "reject_third_party"
                | "allow_visited"
                | "reject_trackers"
                | "reject_trackers_and_partition_foreign";

            /* privacy.websites properties */
            /**
             * If disabled, the browser blocks third-party sites from setting
             * cookies. The value of this preference is of type boolean, and the
             * default value is `true`.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            export const thirdPartyCookiesAllowed: types.Setting | undefined;

            /**
             * If enabled, the browser sends auditing pings when requested by a
             * website (`<a ping>`). The value of this preference is of type boolean,
             * and the default value is `true`.
             */
            export const hyperlinkAuditingEnabled: types.Setting;

            /**
             * If enabled, the browser sends `referer` headers with your requests.
             * Yes, the name of this preference doesn't match the misspelled header.
             * No, we're not going to change it. The value of this preference is of
             * type boolean, and the default value is `true`.
             */
            export const referrersEnabled: types.Setting;

            /**
             * If enabled, the browser attempts to appear similar to other users by
             * reporting generic information to websites. This can prevent websites
             * from uniquely identifying users. Examples of data that is spoofed
             * include number of CPU cores, precision of JavaScript timers, the local
             * timezone, and disabling features such as GamePad support, and the
             * WebSpeech and Navigator APIs. The value of this preference is of type
             * boolean, and the default value is `false`.
             */
            export const resistFingerprinting: types.Setting;

            /**
             * If enabled, the browser will associate all data (including cookies,
             * HSTS data, cached images, and more) for any third party domains with
             * the domain in the address bar. This prevents third party trackers from
             * using directly stored information to identify you across different
             * websites, but may break websites where you login with a third party
             * account (such as a Facebook or Google login.) The value of this
             * preference is of type boolean, and the default value is `false`.
             */
            export const firstPartyIsolate: types.Setting;

            /**
             * **Available on Windows and ChromeOS only**: If enabled, the browser
             * provides a unique ID to plugins in order to run protected content. The
             * value of this preference is of type boolean, and the default value is
             * `true`.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            export const protectedContentEnabled: types.Setting | undefined;

            /**
             * Allow users to specify the mode for tracking protection. This
             * setting's value is of type TrackingProtectionModeOption, defaulting to
             * `private_browsing_only`.
             */
            export const trackingProtectionMode: types.Setting;

            /**
             * Allow users to specify the default settings for allowing cookies, as
             * well as whether all cookies should be created as non-persistent
             * cookies. This setting's value is of type CookieConfig.
             */
            export const cookieConfig: types.Setting;
        }
    }

    /**
     * Provides access to global proxy settings for Firefox and proxy event
     * listeners to handle dynamic proxy implementations.
     *
     * Permissions: `proxy`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/proxy
     */
    export namespace proxy {
        /* proxy types */
        /** An object which describes proxy settings. */
        export interface ProxyConfig {
            /** The type of proxy to use. */
            proxyType?: _ProxyConfigProxyType | undefined;
            /** The address of the http proxy, can include a port. */
            http?: string | undefined;
            /** Use the http proxy server for all protocols. */
            httpProxyAll?: boolean | undefined;
            /**
             * The address of the ftp proxy, can include a port. Deprecated since
             * Firefox 88.
             *
             * @deprecated The address of the ftp proxy, can include a port.
             * Deprecated since Firefox 88.
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
             * If true (the default value), do not use newer TLS protocol features
             * that might have interoperability problems on the Internet. This is
             * intended only for use with critical infrastructure like the updates,
             * and is only available to privileged addons.
             */
            respectBeConservative?: boolean | undefined;
        }

        /** The type of proxy to use. */
        export type _ProxyConfigProxyType = "none" | "autoDetect" | "system" | "manual" | "autoConfig";

        export interface _OnRequestDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: webRequest.ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /** Indicates if this response was fetched from disk cache. */
            fromCache: boolean;
            /**
             * The HTTP request headers that are going to be sent out with this
             * request.
             */
            requestHeaders?: webRequest.HttpHeaders | undefined;
            /** Url classification if the request has been classified. */
            urlClassification: webRequest.UrlClassification;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _ProxyOnRequestEvent<TCallback = (details: _OnRequestDetails) => void> {
            addListener(cb: TCallback, filter: webRequest.RequestFilter, extraInfoSpec?: Array<"requestHeaders">): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        /* proxy properties */
        /**
         * Configures proxy settings. This setting's value is an object of type
         * ProxyConfig.
         */
        export const settings: types.Setting;

        /* proxy events */
        /** Fired when proxy data is needed for a request. */
        export const onRequest: _ProxyOnRequestEvent;

        /** Notifies about errors caused by the invalid use of the proxy API. */
        export const onError: WebExtEvent<(error: Error) => void>;
    }

    /**
     * Use the `browser.runtime` API to retrieve the background page,
     * return details about the manifest, and listen for and respond to
     * events in the app or extension lifecycle. You can also use this API to
     * convert the relative path of URLs to fully-qualified URLs.
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime
     */
    export namespace runtime {
        /* runtime types */
        /** An object which allows two way communication with other pages. */
        export interface Port {
            name: string;
            disconnect: () => void;
            postMessage: (message: object) => void;
            /**
             * This property will **only** be present on ports passed to
             * onConnect/onConnectExternal listeners.
             */
            sender?: MessageSender | undefined;
            error?: Error | undefined;
            onMessage: WebExtEvent<(response: object) => void>;
            onDisconnect: WebExtEvent<(port: Port) => void>;
        }

        /**
         * An object containing information about the script context that sent a
         * message or request.
         */
        export interface MessageSender {
            /**
             * The `tabs.Tab` which opened the connection, if any. This property will
             * **only** be present when the connection was opened from a tab
             * (including content scripts), and **only** if the receiver is an
             * extension, not an app.
             */
            tab?: tabs.Tab | undefined;
            /**
             * The frame that opened the connection. 0 for top-level frames, positive
             * for child frames. This will only be set when `tab` is set.
             */
            frameId?: number | undefined;
            /** The ID of the extension or app that opened the connection, if any. */
            id?: string | undefined;
            /**
             * The URL of the page or frame that opened the connection. If the sender
             * is in an iframe, it will be iframe's URL not the URL of the page which
             * hosts it.
             */
            url?: string | undefined;
            /**
             * The TLS channel ID of the page or frame that opened the connection, if
             * requested by the extension or app, and if available.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            tlsChannelId?: string | undefined;
        }

        /** The operating system the browser is running on. */
        export type PlatformOs = "mac" | "win" | "android" | "cros" | "linux" | "openbsd";

        /** The machine's processor architecture. */
        export type PlatformArch = "aarch64" | "arm" | "ppc64" | "s390x" | "sparc64" | "x86-32" | "x86-64" | "noarch";

        /** An object containing information about the current platform. */
        export interface PlatformInfo {
            /** The operating system the browser is running on. */
            os: PlatformOs;
            /** The machine's processor architecture. */
            arch: PlatformArch;
            /**
             * The native client architecture. This may be different from arch on
             * some platforms.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            nacl_arch?: PlatformNaclArch | undefined;
        }

        /** An object containing information about the current browser. */
        export interface BrowserInfo {
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
        export type RequestUpdateCheckStatus = "throttled" | "no_update" | "update_available";

        /** The reason that this event is being dispatched. */
        export type OnInstalledReason = "install" | "update" | "browser_update";

        /**
         * The reason that the event is being dispatched. 'app_update' is used
         * when the restart is needed because the application is updated to a
         * newer version. 'os_update' is used when the restart is needed because
         * the browser/OS is updated to a newer version. 'periodic' is used when
         * the system runs for more than the permitted uptime set in the
         * enterprise policy.
         */
        export type OnRestartRequiredReason = "app_update" | "os_update" | "periodic";

        export type PlatformNaclArch = "arm" | "x86-32" | "x86-64";

        /**
         * This will be defined during an API method callback if there was an
         * error
         */
        export interface _LastError {
            /** Details about the error which occurred. */
            message?: string | undefined;
        }

        /**
         * If an update is available, this contains more information about the
         * available update.
         */
        export interface _RequestUpdateCheckReturnDetails {
            /** The version of the available update. */
            version: string;
        }

        export interface _ConnectConnectInfo {
            /**
             * Will be passed into onConnect for processes that are listening for the
             * connection event.
             */
            name?: string | undefined;
            /**
             * Whether the TLS channel ID will be passed into onConnectExternal for
             * processes that are listening for the connection event.
             */
            includeTlsChannelId?: boolean | undefined;
        }

        export interface _SendMessageOptions {
            /**
             * Whether the TLS channel ID will be passed into onMessageExternal for
             * processes that are listening for the connection event.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            includeTlsChannelId?: boolean | undefined;
        }

        type DirectoryEntry = any;

        export interface _OnInstalledDetails {
            /** The reason that this event is being dispatched. */
            reason: OnInstalledReason;
            /**
             * Indicates the previous version of the extension, which has just been
             * updated. This is present only if 'reason' is 'update'.
             */
            previousVersion?: string | undefined;
            /** Indicates whether the addon is installed as a temporary extension. */
            temporary: boolean;
            /**
             * Indicates the ID of the imported shared module extension which
             * updated. This is present only if 'reason' is 'shared_module_update'.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            id?: string | undefined;
        }

        /** The manifest details of the available update. */
        export interface _OnUpdateAvailableDetails {
            /** The version number of the available update. */
            version: string;
        }

        /* runtime properties */
        /**
         * This will be defined during an API method callback if there was an
         * error
         */
        export const lastError: _LastError | undefined;

        /** The ID of the extension/app. */
        export const id: string;

        /* runtime functions */
        /**
         * Retrieves the JavaScript 'window' object for the background page
         * running inside the current extension/app. If the background page is an
         * event page, the system will ensure it is loaded before calling the
         * callback. If there is no background page, an error is set.
         */
        export function getBackgroundPage(): Promise<Window>;

        /**
         * Open your Extension's options page, if possible.
         *
         * The precise behavior may depend on your manifest's `options_ui` or
         * `options_page` key, or what the browser happens to support at the
         * time.
         *
         * If your Extension does not declare an options page, or the browser
         * failed to create one for some other reason, the callback will set
         * `lastError`.
         */
        export function openOptionsPage(): Promise<void>;

        /**
         * Returns details about the app or extension from the manifest. The
         * object returned is a serialization of the full manifest file.
         */
        export function getManifest(): _manifest.WebExtensionManifest;

        /**
         * Converts a relative path within an app/extension install directory to
         * a fully-qualified URL.
         *
         * @param path A path to a resource within an app/extension expressed
         * relative to its install directory.
         *
         * @returns The fully-qualified URL to the resource.
         */
        export function getURL(path: string): string;

        /**
         * Get the frameId of any window global or frame element.
         *
         * @param target A WindowProxy or a Browsing Context container element
         * (IFrame, Frame, Embed, Object) for the target frame.
         *
         * @returns The frameId of the target frame, or -1 if it doesn't exist.
         */
        export function getFrameId(target: any): number;

        /**
         * Sets the URL to be visited upon uninstallation. This may be used to
         * clean up server-side data, do analytics, and implement surveys.
         * Maximum 255 characters.
         *
         * @param [url] URL to be opened after the extension is uninstalled. This
         * URL must have an http: or https: scheme. Set an empty string to not
         * open a new tab upon uninstallation.
         */
        export function setUninstallURL(url?: string): Promise<void>;

        /** Reloads the app or extension. */
        export function reload(): void;

        /**
         * Requests an update check for this app/extension.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function requestUpdateCheck(): Promise<object>;

        /**
         * Restart the device when the app runs in kiosk mode. Otherwise, it's
         * no-op.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function restart(): void;

        /**
         * Attempts to connect to connect listeners within an extension/app (such
         * as the background page), or other extensions/apps. This is useful for
         * content scripts connecting to their extension processes,
         * inter-app/extension communication, and web messaging. Note that this
         * does not connect to any listeners in a content script. Extensions may
         * connect to content scripts embedded in tabs via `tabs.connect`.
         *
         * @param extensionId The ID of the extension or app to connect to. If
         * omitted, a connection will be attempted with your own extension.
         * Required if sending messages from a web page for web messaging.
         *
         * @returns Port through which messages can be sent and received. The
         * port's `runtime.Port onDisconnect` event is fired if the extension/app
         * does not exist.
         */
        export function connect(extensionId: string, connectInfo?: _ConnectConnectInfo): Port;
        /**
         * Attempts to connect to connect listeners within an extension/app (such
         * as the background page), or other extensions/apps. This is useful for
         * content scripts connecting to their extension processes,
         * inter-app/extension communication, and web messaging. Note that this
         * does not connect to any listeners in a content script. Extensions may
         * connect to content scripts embedded in tabs via `tabs.connect`.
         *
         * @returns Port through which messages can be sent and received. The
         * port's `runtime.Port onDisconnect` event is fired if the extension/app
         * does not exist.
         */
        export function connect(connectInfo?: _ConnectConnectInfo): Port;

        /**
         * Connects to a native application in the host machine.
         *
         * Not allowed in: Devtools pages
         *
         * @param application The name of the registered application to connect
         * to.
         *
         * @returns Port through which messages can be sent and received with the
         * application
         */
        export function connectNative(application: string): Port;

        /**
         * Sends a single message to event listeners within your extension/app or
         * a different extension/app. Similar to `runtime.connect` but only sends
         * a single message, with an optional response. If sending to your
         * extension, the `runtime.onMessage` event will be fired in each page,
         * or `runtime.onMessageExternal`, if a different extension. Note that
         * extensions cannot send messages to content scripts using this method.
         * To send messages to content scripts, use `tabs.sendMessage`.
         *
         * @param extensionId The ID of the extension/app to send the message to.
         * If omitted, the message will be sent to your own extension/app.
         * Required if sending messages from a web page for web messaging.
         */
        export function sendMessage(extensionId: string, message: any, options?: _SendMessageOptions): Promise<any>;
        /**
         * Sends a single message to event listeners within your extension/app or
         * a different extension/app. Similar to `runtime.connect` but only sends
         * a single message, with an optional response. If sending to your
         * extension, the `runtime.onMessage` event will be fired in each page,
         * or `runtime.onMessageExternal`, if a different extension. Note that
         * extensions cannot send messages to content scripts using this method.
         * To send messages to content scripts, use `tabs.sendMessage`.
         */
        export function sendMessage(message: any, options?: _SendMessageOptions): Promise<any>;

        /**
         * Send a single message to a native application.
         *
         * Not allowed in: Devtools pages
         *
         * @param application The name of the native messaging host.
         *
         * @param message The message that will be passed to the native messaging
         * host.
         */
        export function sendNativeMessage(application: string, message: any): Promise<any>;

        /** Returns information about the current browser. */
        export function getBrowserInfo(): Promise<BrowserInfo>;

        /** Returns information about the current platform. */
        export function getPlatformInfo(): Promise<PlatformInfo>;

        /**
         * Returns a DirectoryEntry for the package directory.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export function getPackageDirectoryEntry(): Promise<DirectoryEntry>;

        /* runtime events */
        /**
         * Fired when a profile that has this extension installed first starts
         * up. This event is not fired for incognito profiles.
         */
        export const onStartup: WebExtEvent<() => void>;

        /**
         * Fired when the extension is first installed, when the extension is
         * updated to a new version, and when the browser is updated to a new
         * version.
         */
        export const onInstalled: WebExtEvent<(details: _OnInstalledDetails) => void>;

        /**
         * Sent to the event page just before it is unloaded. This gives the
         * extension opportunity to do some clean up. Note that since the page is
         * unloading, any asynchronous operations started while handling this
         * event are not guaranteed to complete. If more activity for the event
         * page occurs before it gets unloaded the onSuspendCanceled event will
         * be sent and the page won't be unloaded.
         */
        export const onSuspend: WebExtEvent<() => void>;

        /**
         * Sent after onSuspend to indicate that the app won't be unloaded after
         * all.
         */
        export const onSuspendCanceled: WebExtEvent<() => void>;

        /**
         * Fired when an update is available, but isn't installed immediately
         * because the app is currently running. If you do nothing, the update
         * will be installed the next time the background page gets unloaded, if
         * you want it to be installed sooner you can explicitly call
         * `runtime.reload`. If your extension is using a persistent background
         * page, the background page of course never gets unloaded, so unless you
         * call `runtime.reload` manually in response to this event the update
         * will not get installed until the next time the browser itself
         * restarts. If no handlers are listening for this event, and your
         * extension has a persistent background page, it behaves as if
         * `runtime.reload` is called in response to this event.
         *
         * @param details The manifest details of the available update.
         */
        export const onUpdateAvailable: WebExtEvent<(details: _OnUpdateAvailableDetails) => void>;

        /**
         * Fired when an update for the browser is available, but isn't installed
         * immediately because a browser restart is required.
         *
         * @deprecated Please use `runtime.onRestartRequired`.
         */
        export const onBrowserUpdateAvailable: WebExtEvent<() => void> | undefined;

        /**
         * Fired when a connection is made from either an extension process or a
         * content script.
         */
        export const onConnect: WebExtEvent<(port: Port) => void>;

        /** Fired when a connection is made from another extension. */
        export const onConnectExternal: WebExtEvent<(port: Port) => void>;

        /**
         * Fired when a message is sent from either an extension process or a
         * content script.
         *
         * @param message The message sent by the calling script.
         *
         * @param sendResponse Function to call (at most once) when you have a
         * response. The argument should be any JSON-ifiable object. If you have
         * more than one `onMessage` listener in the same document, then only one
         * may send a response. This function becomes invalid when the event
         * listener returns, unless you return true from the event listener to
         * indicate you wish to send a response asynchronously (this will keep
         * the message channel open to the other end until `sendResponse` is
         * called).
         *
         * @returns Return true from the event listener if you wish to call
         * `sendResponse` after the event listener returns.
         */
        export const onMessage: WebExtEvent<
            (
                message: any,
                sender: MessageSender,
                sendResponse: (response?: any) => void,
            ) => boolean | Promise<any> | void
        >;

        /**
         * Fired when a message is sent from another extension/app. Cannot be
         * used in a content script.
         *
         * @param message The message sent by the calling script.
         *
         * @param sendResponse Function to call (at most once) when you have a
         * response. The argument should be any JSON-ifiable object. If you have
         * more than one `onMessage` listener in the same document, then only one
         * may send a response. This function becomes invalid when the event
         * listener returns, unless you return true from the event listener to
         * indicate you wish to send a response asynchronously (this will keep
         * the message channel open to the other end until `sendResponse` is
         * called).
         *
         * @returns Return true from the event listener if you wish to call
         * `sendResponse` after the event listener returns.
         */
        export const onMessageExternal: WebExtEvent<
            (
                message: any,
                sender: MessageSender,
                sendResponse: (response?: any) => void,
            ) => boolean | Promise<any> | void
        >;

        /**
         * Fired when an app or the device that it runs on needs to be restarted.
         * The app should close all its windows at its earliest convenient time
         * to let the restart to happen. If the app does nothing, a restart will
         * be enforced after a 24-hour grace period has passed. Currently, this
         * event is only fired for Chrome OS kiosk apps.
         *
         * @param reason The reason that the event is being dispatched.
         *
         * @deprecated Unsupported on Firefox at this time.
         */
        export const onRestartRequired: WebExtEvent<(reason: OnRestartRequiredReason) => void> | undefined;
    }

    /**
     * Use the `browser.storage` API to store, retrieve, and track changes
     * to user data.
     *
     * Permissions: `storage`
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage
     */
    export namespace storage {
        /* storage types */
        export interface StorageChange {
            /** The old value of the item, if there was an old value. */
            oldValue?: any;
            /** The new value of the item, if there is a new value. */
            newValue?: any;
        }

        export interface StorageArea {
            /**
             * Gets one or more items from storage.
             *
             * @param [keys] A single key to get, list of keys to get, or a
             * dictionary specifying default values (see description of the object).
             * An empty list or object will return an empty result object. Pass in
             * `null` to get the entire contents of storage.
             */
            get(keys?: string | string[] | { [key: string]: any }): Promise<{ [key: string]: any }>;
            /**
             * Gets the amount of space (in bytes) being used by one or more items.
             *
             * @param [keys] A single key or list of keys to get the total usage for.
             * An empty list will return 0\. Pass in `null` to get the total usage of
             * all of storage.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            getBytesInUse?(keys?: string | string[]): Promise<number>;
            /**
             * Sets multiple items.
             *
             * @param items An object which gives each key/value pair to update
             * storage with. Any other key/value pairs in storage will not be
             * affected.
             *
             * Primitive values such as numbers will serialize as expected. Values
             * with a `typeof` `"object"` and `"function"` will typically serialize
             * to `{}`, with the exception of `Array` (serializes as expected),
             * `Date`, and `Regex` (serialize using their `String` representation).
             */
            set(items: { [key: string]: any }): Promise<void>;
            /**
             * Removes one or more items from storage.
             *
             * @param keys A single key or a list of keys for items to remove.
             */
            remove(keys: string | string[]): Promise<void>;
            /** Removes all items from storage. */
            clear(): Promise<void>;
            /**
             * Fired when one or more items change.
             *
             * @param changes Object mapping each key that changed to its
             * corresponding `storage.StorageChange` for that item.
             */
            onChanged: WebExtEvent<(changes: { [key: string]: StorageChange }) => void>;
        }

        export interface StorageAreaSync {
            /**
             * Gets one or more items from storage.
             *
             * @param [keys] A single key to get, list of keys to get, or a
             * dictionary specifying default values (see description of the object).
             * An empty list or object will return an empty result object. Pass in
             * `null` to get the entire contents of storage.
             */
            get(keys?: string | string[] | { [key: string]: any }): Promise<{ [key: string]: any }>;
            /**
             * Gets the amount of space (in bytes) being used by one or more items.
             *
             * @param [keys] A single key or list of keys to get the total usage for.
             * An empty list will return 0\. Pass in `null` to get the total usage of
             * all of storage.
             */
            getBytesInUse(keys?: string | string[]): Promise<number>;
            /**
             * Sets multiple items.
             *
             * @param items An object which gives each key/value pair to update
             * storage with. Any other key/value pairs in storage will not be
             * affected.
             *
             * Primitive values such as numbers will serialize as expected. Values
             * with a `typeof` `"object"` and `"function"` will typically serialize
             * to `{}`, with the exception of `Array` (serializes as expected),
             * `Date`, and `Regex` (serialize using their `String` representation).
             */
            set(items: { [key: string]: any }): Promise<void>;
            /**
             * Removes one or more items from storage.
             *
             * @param keys A single key or a list of keys for items to remove.
             */
            remove(keys: string | string[]): Promise<void>;
            /** Removes all items from storage. */
            clear(): Promise<void>;
            /**
             * Fired when one or more items change.
             *
             * @param changes Object mapping each key that changed to its
             * corresponding `storage.StorageChange` for that item.
             */
            onChanged: WebExtEvent<(changes: { [key: string]: StorageChange }) => void>;
        }

        /* storage properties */
        /** Items in the `sync` storage area are synced by the browser. */
        export const sync: StorageAreaSync;

        /** Items in the `local` storage area are local to each machine. */
        export const local: StorageArea;

        /**
         * Items in the `managed` storage area are set by administrators or
         * native applications, and are read-only for the extension; trying to
         * modify this namespace results in an error.
         */
        export const managed: StorageArea;

        /* storage events */
        /**
         * Fired when one or more items change.
         *
         * @param changes Object mapping each key that changed to its
         * corresponding `storage.StorageChange` for that item.
         *
         * @param areaName The name of the storage area (`"sync"`, `"local"` or
         * `"managed"`) the changes are for.
         */
        export const onChanged: WebExtEvent<(changes: { [key: string]: StorageChange }, areaName: string) => void>;
    }

    /**
     * Contains types used by other schemas.
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/types
     */
    export namespace types {
        /* types types */
        /**
         * The scope of the Setting. One of
         *
         * - `regular`: setting for the regular profile (which is inherited by
         *   the incognito profile if not overridden elsewhere),
         * - `regular_only`: setting for the regular profile only (not inherited
         *   by the incognito profile),
         * - `incognito_persistent`: setting for the incognito profile that
         *   survives browser restarts (overrides regular preferences),
         * - `incognito_session_only`: setting for the incognito profile that can
         *   only be set during an incognito session and is deleted when the
         *   incognito session ends (overrides regular and incognito_persistent
         *   preferences).
         *
         * Only `regular` is supported by Firefox at this time.
         */
        export type SettingScope = "regular" | "regular_only" | "incognito_persistent" | "incognito_session_only";

        /**
         * One of
         *
         * - `not_controllable`: cannot be controlled by any extension
         * - `controlled_by_other_extensions`: controlled by extensions with
         *   higher precedence
         * - `controllable_by_this_extension`: can be controlled by this
         *   extension
         * - `controlled_by_this_extension`: controlled by this extension
         */
        export type LevelOfControl =
            | "not_controllable"
            | "controlled_by_other_extensions"
            | "controllable_by_this_extension"
            | "controlled_by_this_extension";

        export interface Setting {
            /**
             * Gets the value of a setting.
             *
             * @param details Which setting to consider.
             */
            get(details: _GetDetails): Promise<_GetReturnDetails>;
            /**
             * Sets the value of a setting.
             *
             * @param details Which setting to change.
             */
            set(details: _SetDetails): Promise<void>;
            /**
             * Clears the setting, restoring any default value.
             *
             * @param details Which setting to clear.
             */
            clear(details: _ClearDetails): Promise<void>;
            /** Fired after the setting changes. */
            onChange: WebExtEvent<(details: _OnChangeDetails) => void>;
        }

        /** Details of the currently effective value. */
        export interface _GetReturnDetails {
            /** The value of the setting. */
            value: any;
            /** The level of control of the setting. */
            levelOfControl: LevelOfControl;
            /**
             * Whether the effective value is specific to the incognito session.
             * This property will _only_ be present if the `incognito` property in
             * the `details` parameter of `get()` was true.
             */
            incognitoSpecific?: boolean | undefined;
        }

        /** Which setting to consider. */
        export interface _GetDetails {
            /**
             * Whether to return the value that applies to the incognito session
             * (default false).
             */
            incognito?: boolean | undefined;
        }

        /** Which setting to change. */
        export interface _SetDetails {
            /**
             * The value of the setting.
             * Note that every setting has a specific value type, which is described
             * together with the setting. An extension should _not_ set a value of a
             * different type.
             */
            value: any;
            /** Where to set the setting (default: regular). */
            scope?: SettingScope | undefined;
        }

        /** Which setting to clear. */
        export interface _ClearDetails {
            /** Where to clear the setting (default: regular). */
            scope?: SettingScope | undefined;
        }

        export interface _OnChangeDetails {
            /** The value of the setting after the change. */
            value: any;
            /** The level of control of the setting. */
            levelOfControl: LevelOfControl;
            /**
             * Whether the value that has changed is specific to the incognito
             * session.
             * This property will _only_ be present if the user has enabled the
             * extension in incognito mode.
             */
            incognitoSpecific?: boolean | undefined;
        }
    }

    /**
     * Manifest keys: `user_scripts`, `user_scripts`
     *
     * Not supported on manifest versions above 2.
     *
     * Not allowed in: Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/userScripts
     */
    export namespace userScripts {
        /* userScripts types */
        /** Details of a user script */
        export interface UserScriptOptions {
            /** The list of JS files to inject */
            js: extensionTypes.ExtensionFileOrCode[];
            /** An opaque user script metadata value */
            scriptMetadata?: extensionTypes.PlainJSONValue | undefined;
            matches: _manifest.MatchPattern[];
            excludeMatches?: _manifest.MatchPattern[] | undefined;
            includeGlobs?: string[] | undefined;
            excludeGlobs?: string[] | undefined;
            /**
             * If allFrames is `true`, implies that the JavaScript should be injected
             * into all frames of current page. By default, it's `false` and is only
             * injected into the top frame.
             */
            allFrames?: boolean | undefined;
            /**
             * If matchAboutBlank is true, then the code is also injected in
             * about:blank and about:srcdoc frames if your extension has access to
             * its parent document. Code cannot be inserted in top-level
             * about:-frames. By default it is `false`.
             */
            matchAboutBlank?: boolean | undefined;
            /**
             * The soonest that the JavaScript will be injected into the tab.
             * Defaults to "document_idle".
             */
            runAt?: extensionTypes.RunAt | undefined;
            /**
             * limit the set of matched tabs to those that belong to the given cookie
             * store id
             */
            cookieStoreId?: string[] | string | undefined;
        }

        /** An object that represents a user script registered programmatically */
        export interface RegisteredUserScript {
            /** Unregister a user script registered programmatically */
            unregister(): Promise<any>;
        }

        export interface _OnBeforeScriptUserScript {
            /** The userScript metadata (as set in userScripts.register) */
            metadata: any;
            /** The userScript global */
            global: any;
            /**
             * Exports all the properties of a given plain object as userScript
             * globals
             *
             * @param sourceObject A plain object whose properties are exported as
             * userScript globals
             */
            defineGlobals: (sourceObject: object) => void;
            /**
             * Convert a given value to make it accessible to the userScript code
             *
             * @param value A value to convert into an object accessible to the
             * userScript
             */
            export: (value: any) => any;
        }

        /* userScripts functions */
        /**
         * Register a user script programmatically given its
         * `userScripts.UserScriptOptions`, and resolves to a
         * `userScripts.RegisteredUserScript` instance
         */
        export function register(userScriptOptions: UserScriptOptions): Promise<RegisteredUserScript>;

        /* userScripts events */
        /**
         * Event called when a new userScript global has been created
         *
         * Allowed in: Content scripts only
         */
        export const onBeforeScript: WebExtEvent<(userScript: _OnBeforeScriptUserScript) => void>;
    }

    /**
     * Use the `browser.webNavigation` API to receive notifications about
     * the status of navigation requests in-flight.
     *
     * Permissions: `webNavigation`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webNavigation
     */
    export namespace webNavigation {
        /* webNavigation types */
        /**
         * Cause of the navigation. The same transition types as defined in the
         * history API are used. These are the same transition types as defined
         * in the history API except with `"start_page"` in place of
         * `"auto_toplevel"` (for backwards compatibility).
         */
        export type TransitionType =
            | "link"
            | "typed"
            | "auto_bookmark"
            | "auto_subframe"
            | "manual_subframe"
            | "generated"
            | "start_page"
            | "form_submit"
            | "reload"
            | "keyword"
            | "keyword_generated";

        export type TransitionQualifier = "client_redirect" | "server_redirect" | "forward_back" | "from_address_bar";

        export interface EventUrlFilters {
            url: events.UrlFilter[];
        }

        /**
         * Information about the requested frame, null if the specified frame ID
         * and/or tab ID are invalid.
         */
        export interface _GetFrameReturnDetails {
            /**
             * True if the last navigation in this frame was interrupted by an error,
             * i.e. the onErrorOccurred event fired.
             */
            errorOccurred?: boolean | undefined;
            /**
             * The URL currently associated with this frame, if the frame identified
             * by the frameId existed at one point in the given tab. The fact that an
             * URL is associated with a given frameId does not imply that the
             * corresponding frame still exists.
             */
            url: string;
            /** The ID of the tab in which the frame is. */
            tabId: number;
            /**
             * The ID of the frame. 0 indicates that this is the main frame; a
             * positive value indicates the ID of a subframe.
             */
            frameId: number;
            /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
            parentFrameId: number;
        }

        /** Information about the frame to retrieve information about. */
        export interface _GetFrameDetails {
            /** The ID of the tab in which the frame is. */
            tabId: number;
            /** The ID of the process runs the renderer for this tab. */
            processId?: number | undefined;
            /** The ID of the frame in the given tab. */
            frameId: number;
        }

        export interface _GetAllFramesReturnDetails {
            /**
             * True if the last navigation in this frame was interrupted by an error,
             * i.e. the onErrorOccurred event fired.
             */
            errorOccurred?: boolean | undefined;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /** The ID of the tab in which the frame is. */
            tabId: number;
            /**
             * The ID of the frame. 0 indicates that this is the main frame; a
             * positive value indicates the ID of a subframe.
             */
            frameId: number;
            /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
            parentFrameId: number;
            /** The URL currently associated with this frame. */
            url: string;
        }

        /** Information about the tab to retrieve all frames from. */
        export interface _GetAllFramesDetails {
            /** The ID of the tab. */
            tabId: number;
        }

        export interface _OnBeforeNavigateDetails {
            /** The ID of the tab in which the navigation is about to occur. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique for a given tab and process.
             */
            frameId: number;
            /** ID of frame that wraps the frame. Set to -1 of no parent frame exists. */
            parentFrameId: number;
            /**
             * The time when the browser was about to start the navigation, in
             * milliseconds since the epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnBeforeNavigateEvent<TCallback = (details: _OnBeforeNavigateDetails) => void> {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnCommittedDetails {
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique within a tab.
             */
            frameId: number;
            /**
             * Cause of the navigation.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            transitionType?: TransitionType | undefined;
            /**
             * A list of transition qualifiers.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            transitionQualifiers?: TransitionQualifier[] | undefined;
            /**
             * The time when the navigation was committed, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnCommittedEvent<TCallback = (details: _OnCommittedDetails) => void> {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnDOMContentLoadedDetails {
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique within a tab.
             */
            frameId: number;
            /**
             * The time when the page's DOM was fully constructed, in milliseconds
             * since the epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnDOMContentLoadedEvent<
            TCallback = (details: _OnDOMContentLoadedDetails) => void,
        > {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnCompletedDetails {
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique within a tab.
             */
            frameId: number;
            /**
             * The time when the document finished loading, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnCompletedEvent<TCallback = (details: _OnCompletedDetails) => void> {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnErrorOccurredDetails {
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique within a tab.
             */
            frameId: number;
            /**
             * The error description.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            error?: string | undefined;
            /** The time when the error occurred, in milliseconds since the epoch. */
            timeStamp: number;
        }

        export interface _WebNavigationOnErrorOccurredEvent<TCallback = (details: _OnErrorOccurredDetails) => void> {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnCreatedNavigationTargetDetails {
            /** The ID of the tab in which the navigation is triggered. */
            sourceTabId: number;
            /** The ID of the process runs the renderer for the source tab. */
            sourceProcessId: number;
            /**
             * The ID of the frame with sourceTabId in which the navigation is
             * triggered. 0 indicates the main frame.
             */
            sourceFrameId: number;
            /** The URL to be opened in the new window. */
            url: string;
            /** The ID of the tab in which the url is opened */
            tabId: number;
            /**
             * The time when the browser was about to create a new view, in
             * milliseconds since the epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnCreatedNavigationTargetEvent<
            TCallback = (details: _OnCreatedNavigationTargetDetails) => void,
        > {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnReferenceFragmentUpdatedDetails {
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique within a tab.
             */
            frameId: number;
            /**
             * Cause of the navigation.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            transitionType?: TransitionType | undefined;
            /**
             * A list of transition qualifiers.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            transitionQualifiers?: TransitionQualifier[] | undefined;
            /**
             * The time when the navigation was committed, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnReferenceFragmentUpdatedEvent<
            TCallback = (details: _OnReferenceFragmentUpdatedDetails) => void,
        > {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnTabReplacedDetails {
            /** The ID of the tab that was replaced. */
            replacedTabId: number;
            /** The ID of the tab that replaced the old tab. */
            tabId: number;
            /**
             * The time when the replacement happened, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
        }

        export interface _OnHistoryStateUpdatedDetails {
            /** The ID of the tab in which the navigation occurs. */
            tabId: number;
            url: string;
            /**
             * The ID of the process runs the renderer for this tab.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            processId?: number | undefined;
            /**
             * 0 indicates the navigation happens in the tab content window; a
             * positive value indicates navigation in a subframe. Frame IDs are
             * unique within a tab.
             */
            frameId: number;
            /**
             * Cause of the navigation.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            transitionType?: TransitionType | undefined;
            /**
             * A list of transition qualifiers.
             *
             * @deprecated Unsupported on Firefox at this time.
             */
            transitionQualifiers?: TransitionQualifier[] | undefined;
            /**
             * The time when the navigation was committed, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
        }

        export interface _WebNavigationOnHistoryStateUpdatedEvent<
            TCallback = (details: _OnHistoryStateUpdatedDetails) => void,
        > {
            addListener(cb: TCallback, filters?: EventUrlFilters): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        /* webNavigation functions */
        /**
         * Retrieves information about the given frame. A frame refers to an
         * <iframe> or a <frame> of a web page and is identified by a tab ID and
         * a frame ID.
         *
         * @param details Information about the frame to retrieve information
         * about.
         */
        export function getFrame(details: _GetFrameDetails): Promise<_GetFrameReturnDetails>;

        /**
         * Retrieves information about all frames of a given tab.
         *
         * @param details Information about the tab to retrieve all frames from.
         */
        export function getAllFrames(details: _GetAllFramesDetails): Promise<_GetAllFramesReturnDetails[]>;

        /* webNavigation events */
        /** Fired when a navigation is about to occur. */
        export const onBeforeNavigate: _WebNavigationOnBeforeNavigateEvent;

        /**
         * Fired when a navigation is committed. The document (and the resources
         * it refers to, such as images and subframes) might still be
         * downloading, but at least part of the document has been received from
         * the server and the browser has decided to switch to the new document.
         */
        export const onCommitted: _WebNavigationOnCommittedEvent;

        /**
         * Fired when the page's DOM is fully constructed, but the referenced
         * resources may not finish loading.
         */
        export const onDOMContentLoaded: _WebNavigationOnDOMContentLoadedEvent;

        /**
         * Fired when a document, including the resources it refers to, is
         * completely loaded and initialized.
         */
        export const onCompleted: _WebNavigationOnCompletedEvent;

        /**
         * Fired when an error occurs and the navigation is aborted. This can
         * happen if either a network error occurred, or the user aborted the
         * navigation.
         */
        export const onErrorOccurred: _WebNavigationOnErrorOccurredEvent;

        /**
         * Fired when a new window, or a new tab in an existing window, is
         * created to host a navigation.
         */
        export const onCreatedNavigationTarget: _WebNavigationOnCreatedNavigationTargetEvent;

        /**
         * Fired when the reference fragment of a frame was updated. All future
         * events for that frame will use the updated URL.
         */
        export const onReferenceFragmentUpdated: _WebNavigationOnReferenceFragmentUpdatedEvent;

        /**
         * Fired when the contents of the tab is replaced by a different (usually
         * previously pre-rendered) tab.
         */
        export const onTabReplaced: WebExtEvent<(details: _OnTabReplacedDetails) => void>;

        /**
         * Fired when the frame's history was updated to a new URL. All future
         * events for that frame will use the updated URL.
         */
        export const onHistoryStateUpdated: _WebNavigationOnHistoryStateUpdatedEvent;
    }

    /**
     * Use the `browser.webRequest` API to observe and analyze traffic and
     * to intercept, block, or modify requests in-flight.
     *
     * Permissions: `webRequest`
     *
     * Not allowed in: Content scripts, Devtools pages
     *
     * @see https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest
     */
    export namespace webRequest {
        /* webRequest types */
        export type ResourceType =
            | "main_frame"
            | "sub_frame"
            | "stylesheet"
            | "script"
            | "image"
            | "object"
            | "object_subrequest"
            | "xmlhttprequest"
            | "xslt"
            | "ping"
            | "beacon"
            | "xml_dtd"
            | "font"
            | "media"
            | "websocket"
            | "csp_report"
            | "imageset"
            | "web_manifest"
            | "speculative"
            | "other";

        export type OnBeforeRequestOptions = "blocking" | "requestBody";

        export type OnBeforeSendHeadersOptions = "requestHeaders" | "blocking";

        export type OnSendHeadersOptions = "requestHeaders";

        export type OnHeadersReceivedOptions = "blocking" | "responseHeaders";

        export type OnAuthRequiredOptions = "responseHeaders" | "blocking" | "asyncBlocking";

        export type OnResponseStartedOptions = "responseHeaders";

        export type OnBeforeRedirectOptions = "responseHeaders";

        export type OnCompletedOptions = "responseHeaders";

        /** An object describing filters to apply to webRequest events. */
        export interface RequestFilter {
            /**
             * A list of URLs or URL patterns. Requests that cannot match any of the
             * URLs will be filtered out.
             */
            urls: string[];
            /**
             * A list of request types. Requests that cannot match any of the types
             * will be filtered out.
             */
            types?: ResourceType[] | undefined;
            tabId?: number | undefined;
            windowId?: number | undefined;
            /**
             * If provided, requests that do not match the incognito state will be
             * filtered out.
             */
            incognito?: boolean | undefined;
        }

        /**
         * An array of HTTP headers. Each header is represented as a dictionary
         * containing the keys `name` and either `value` or `binaryValue`.
         */
        export type HttpHeaders = _HttpHeaders[];

        /**
         * Returns value for event handlers that have the 'blocking'
         * extraInfoSpec applied. Allows the event handler to modify network
         * requests.
         */
        export interface BlockingResponse {
            /**
             * If true, the request is cancelled. Used in onBeforeRequest, this
             * prevents the request from being sent.
             */
            cancel?: boolean | undefined;
            /**
             * Only used as a response to the onBeforeRequest and onHeadersReceived
             * events. If set, the original request is prevented from being
             * sent/completed and is instead redirected to the given URL.
             * Redirections to non-HTTP schemes such as data: are allowed. Redirects
             * initiated by a redirect action use the original request method for the
             * redirect, with one exception: If the redirect is initiated at the
             * onHeadersReceived stage, then the redirect will be issued using the
             * GET method.
             */
            redirectUrl?: string | undefined;
            /**
             * Only used as a response to the onBeforeRequest event. If set, the
             * original request is prevented from being sent/completed and is instead
             * upgraded to a secure request. If any extension returns `redirectUrl`
             * during onBeforeRequest, `upgradeToSecure` will have no affect.
             */
            upgradeToSecure?: boolean | undefined;
            /**
             * Only used as a response to the onBeforeSendHeaders event. If set, the
             * request is made with these request headers instead.
             */
            requestHeaders?: HttpHeaders | undefined;
            /**
             * Only used as a response to the onHeadersReceived event. If set, the
             * server is assumed to have responded with these response headers
             * instead. Only return `responseHeaders` if you really want to modify
             * the headers in order to limit the number of conflicts (only one
             * extension may modify `responseHeaders` for each request).
             */
            responseHeaders?: HttpHeaders | undefined;
            /**
             * Only used as a response to the onAuthRequired event. If set, the
             * request is made using the supplied credentials.
             */
            authCredentials?: _BlockingResponseAuthCredentials | undefined;
        }

        /**
         * Contains the certificate properties of the request if it is a secure
         * request.
         */
        export interface CertificateInfo {
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

        export type CertificateTransparencyStatus =
            | "not_applicable"
            | "policy_compliant"
            | "policy_not_enough_scts"
            | "policy_not_diverse_scts";

        export type TransportWeaknessReasons = "cipher";

        /**
         * Contains the security properties of the request (ie. SSL/TLS
         * information).
         */
        export interface SecurityInfo {
            state: _SecurityInfoState;
            /** Error message if state is "broken" */
            errorMessage?: string | undefined;
            /** Protocol version if state is "secure" */
            protocolVersion?: _SecurityInfoProtocolVersion | undefined;
            /** The cipher suite used in this request if state is "secure". */
            cipherSuite?: string | undefined;
            /** The key exchange algorithm used in this request if state is "secure". */
            keaGroupName?: string | undefined;
            /** The length (in bits) of the secret key. */
            secretKeyLength?: number | undefined;
            /** The signature scheme used in this request if state is "secure". */
            signatureSchemeName?: string | undefined;
            /**
             * Certificate data if state is "secure". Will only contain one entry
             * unless `certificateChain` is passed as an option.
             */
            certificates: CertificateInfo[];
            /**
             * The type of certificate error that was overridden for this connection,
             * if any.
             */
            overridableErrorCategory?: _SecurityInfoOverridableErrorCategory | undefined;
            /**
             * The domain name does not match the certificate domain.
             *
             * @deprecated Please use `SecurityInfo.overridableErrorCategory`.
             */
            isDomainMismatch?: boolean | undefined;
            /**
             * The certificate is either expired or is not yet valid. See
             * `CertificateInfo.validity` for start and end dates.
             *
             * @deprecated Please use `SecurityInfo.overridableErrorCategory`.
             */
            isNotValidAtThisTime?: boolean | undefined;
            /** @deprecated Please use `SecurityInfo.overridableErrorCategory`. */
            isUntrusted?: boolean | undefined;
            isExtendedValidation?: boolean | undefined;
            /**
             * Certificate transparency compliance per RFC 6962\. See
             * `https://www.certificate-transparency.org/what-is-ct` for more
             * information.
             */
            certificateTransparencyStatus?: CertificateTransparencyStatus | undefined;
            /** True if host uses Strict Transport Security and state is "secure". */
            hsts?: boolean | undefined;
            /** True if host uses Public Key Pinning and state is "secure". */
            hpkp?: string | undefined;
            /**
             * list of reasons that cause the request to be considered weak, if state
             * is "weak"
             */
            weaknessReasons?: TransportWeaknessReasons[] | undefined;
        }

        /** Contains data uploaded in a URL request. */
        export interface UploadData {
            /** An ArrayBuffer with a copy of the data. */
            bytes?: any;
            /** A string with the file's path and name. */
            file?: string | undefined;
        }

        /** Tracking flags that match our internal tracking classification */
        export type UrlClassificationFlags =
            | "fingerprinting"
            | "fingerprinting_content"
            | "cryptomining"
            | "cryptomining_content"
            | "emailtracking"
            | "emailtracking_content"
            | "tracking"
            | "tracking_ad"
            | "tracking_analytics"
            | "tracking_social"
            | "tracking_content"
            | "any_basic_tracking"
            | "any_strict_tracking"
            | "any_social_tracking";

        /**
         * If the request has been classified this is an array of
         * `UrlClassificationFlags`.
         */
        export type UrlClassificationParty = UrlClassificationFlags[];

        export interface UrlClassification {
            /**
             * Classification flags if the request has been classified and it is
             * first party.
             */
            firstParty: UrlClassificationParty;
            /**
             * Classification flags if the request has been classified and it or its
             * window hierarchy is third party.
             */
            thirdParty: UrlClassificationParty;
        }

        /** An object you can use to monitor and modify HTTP responses. */
        export interface StreamFilter {
            /** Describes the current status of the stream. */
            status: _StreamFilterStatus;
            /**
             * A string that will contain an error message after the onerror event
             * has fired.
             */
            error: string;
            /** Event handler which is called when an error has occurred. */
            onerror: ((event: Event) => void) | null;
            /**
             * Event handler which is called when the stream has no more data to
             * deliver and has closed.
             */
            onstop: ((event: Event) => void) | null;
            /**
             * Event handler which is called when the stream is about to start
             * receiving data.
             */
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

        export interface _HttpHeaders {
            /** Name of the HTTP header. */
            name: string;
            /** Value of the HTTP header if it can be represented by UTF-8. */
            value?: string | undefined;
            /**
             * Value of the HTTP header if it cannot be represented by UTF-8, stored
             * as individual byte values (0..255).
             */
            binaryValue?: number[] | undefined;
        }

        /**
         * Only used as a response to the onAuthRequired event. If set, the
         * request is made using the supplied credentials.
         */
        export interface _BlockingResponseAuthCredentials {
            username: string;
            password: string;
        }

        /** Contains start and end timestamps. */
        export interface _CertificateInfoValidity {
            start: number;
            end: number;
        }

        export interface _CertificateInfoFingerprint {
            sha1: string;
            sha256: string;
        }

        export interface _CertificateInfoSubjectPublicKeyInfoDigest {
            sha256: string;
        }

        export type _SecurityInfoState = "insecure" | "weak" | "broken" | "secure";

        /** Protocol version if state is "secure" */
        export type _SecurityInfoProtocolVersion = "TLSv1" | "TLSv1.1" | "TLSv1.2" | "TLSv1.3" | "unknown";

        /**
         * The type of certificate error that was overridden for this connection,
         * if any.
         */
        export type _SecurityInfoOverridableErrorCategory =
            | "trust_error"
            | "domain_mismatch"
            | "expired_or_not_yet_valid";

        /** Describes the current status of the stream. */
        export type _StreamFilterStatus =
            | "uninitialized"
            | "transferringdata"
            | "finishedtransferringdata"
            | "suspended"
            | "closed"
            | "disconnected"
            | "failed";

        interface _StreamFilterOndataEvent extends Event {
            data: ArrayBuffer;
        }

        export interface _GetSecurityInfoOptions {
            /** Include the entire certificate chain. */
            certificateChain?: boolean | undefined;
            /** Include raw certificate data for processing by the extension. */
            rawDER?: boolean | undefined;
        }

        /**
         * Contains the HTTP request body data. Only provided if extraInfoSpec
         * contains 'requestBody'.
         */
        export interface _OnBeforeRequestDetailsRequestBody {
            /** Errors when obtaining request body data. */
            error?: string | undefined;
            /**
             * If the request method is POST and the body is a sequence of key-value
             * pairs encoded in UTF8, encoded as either multipart/form-data, or
             * application/x-www-form-urlencoded, this dictionary is present and for
             * each key contains the list of all values for that key. If the data is
             * of another media type, or if it is malformed, the dictionary is not
             * present. An example value of this dictionary is {'key': ['value1',
             * 'value2']}.
             */
            formData?: object | undefined;
            /**
             * If the request method is PUT or POST, and the body is not already
             * parsed in formData, then the unparsed request body elements are
             * contained in this array.
             */
            raw?: UploadData[] | undefined;
        }

        export interface _OnBeforeRequestDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * Contains the HTTP request body data. Only provided if extraInfoSpec
             * contains 'requestBody'.
             */
            requestBody?: _OnBeforeRequestDetailsRequestBody | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnBeforeRequestEvent<
            TCallback = (details: _OnBeforeRequestDetails) => BlockingResponse | Promise<BlockingResponse> | void,
        > {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnBeforeRequestOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnBeforeSendHeadersDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /**
             * The HTTP request headers that are going to be sent out with this
             * request.
             */
            requestHeaders?: HttpHeaders | undefined;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnBeforeSendHeadersEvent<
            TCallback = (details: _OnBeforeSendHeadersDetails) => BlockingResponse | Promise<BlockingResponse> | void,
        > {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnBeforeSendHeadersOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnSendHeadersDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /** The HTTP request headers that have been sent out with this request. */
            requestHeaders?: HttpHeaders | undefined;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnSendHeadersEvent<TCallback = (details: _OnSendHeadersDetails) => void> {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnSendHeadersOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnHeadersReceivedDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /**
             * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for
             * HTTP/0.9 responses (i.e., responses that lack a status line).
             */
            statusLine: string;
            /** The HTTP response headers that have been received with this response. */
            responseHeaders?: HttpHeaders | undefined;
            /** Standard HTTP status code returned by the server. */
            statusCode: number;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnHeadersReceivedEvent<
            TCallback = (details: _OnHeadersReceivedDetails) => BlockingResponse | Promise<BlockingResponse> | void,
        > {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnHeadersReceivedOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        /** The server requesting authentication. */
        export interface _OnAuthRequiredDetailsChallenger {
            host: string;
            port: number;
        }

        export interface _OnAuthRequiredDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
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
             * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for
             * HTTP/0.9 responses (i.e., responses that lack a status line) or an
             * empty string if there are no headers.
             */
            statusLine: string;
            /** Standard HTTP status code returned by the server. */
            statusCode: number;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnAuthRequiredEvent<
            TCallback = (details: _OnAuthRequiredDetails) => BlockingResponse | Promise<BlockingResponse> | void,
        > {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnAuthRequiredOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnResponseStartedDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /**
             * The server IP address that the request was actually sent to. Note that
             * it may be a literal IPv6 address.
             */
            ip?: string | undefined;
            /** Indicates if this response was fetched from disk cache. */
            fromCache: boolean;
            /** Standard HTTP status code returned by the server. */
            statusCode: number;
            /** The HTTP response headers that were received along with this response. */
            responseHeaders?: HttpHeaders | undefined;
            /**
             * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for
             * HTTP/0.9 responses (i.e., responses that lack a status line) or an
             * empty string if there are no headers.
             */
            statusLine: string;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnResponseStartedEvent<TCallback = (details: _OnResponseStartedDetails) => void> {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnResponseStartedOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnBeforeRedirectDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /**
             * The server IP address that the request was actually sent to. Note that
             * it may be a literal IPv6 address.
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
             * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for
             * HTTP/0.9 responses (i.e., responses that lack a status line) or an
             * empty string if there are no headers.
             */
            statusLine: string;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnBeforeRedirectEvent<TCallback = (details: _OnBeforeRedirectDetails) => void> {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnBeforeRedirectOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnCompletedDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /**
             * The server IP address that the request was actually sent to. Note that
             * it may be a literal IPv6 address.
             */
            ip?: string | undefined;
            /** Indicates if this response was fetched from disk cache. */
            fromCache: boolean;
            /** Standard HTTP status code returned by the server. */
            statusCode: number;
            /** The HTTP response headers that were received along with this response. */
            responseHeaders?: HttpHeaders | undefined;
            /**
             * HTTP status line of the response or the 'HTTP/0.9 200 OK' string for
             * HTTP/0.9 responses (i.e., responses that lack a status line) or an
             * empty string if there are no headers.
             */
            statusLine: string;
            /** Tracking classification if the request has been classified. */
            urlClassification: UrlClassification;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
            /**
             * For http requests, the bytes transferred in the request. Only
             * available in onCompleted.
             */
            requestSize: number;
            /**
             * For http requests, the bytes received in the request. Only available
             * in onCompleted.
             */
            responseSize: number;
        }

        export interface _WebRequestOnCompletedEvent<TCallback = (details: _OnCompletedDetails) => void> {
            addListener(cb: TCallback, filter: RequestFilter, extraInfoSpec?: OnCompletedOptions[]): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        export interface _OnErrorOccurredDetails {
            /**
             * The ID of the request. Request IDs are unique within a browser
             * session. As a result, they could be used to relate different events of
             * the same request.
             */
            requestId: string;
            url: string;
            /** Standard HTTP method. */
            method: string;
            /**
             * The value 0 indicates that the request happens in the main frame; a
             * positive value indicates the ID of a subframe in which the request
             * happens. If the document of a (sub-)frame is loaded (`type` is
             * `main_frame` or `sub_frame`), `frameId` indicates the ID of this
             * frame, not the ID of the outer frame. Frame IDs are unique within a
             * tab.
             */
            frameId: number;
            /**
             * ID of frame that wraps the frame which sent the request. Set to -1 if
             * no parent frame exists.
             */
            parentFrameId: number;
            /** True for private browsing requests. */
            incognito?: boolean | undefined;
            /** The cookie store ID of the contextual identity. */
            cookieStoreId?: string | undefined;
            /** URL of the resource that triggered this request. */
            originUrl?: string | undefined;
            /** URL of the page into which the requested resource will be loaded. */
            documentUrl?: string | undefined;
            /**
             * The ID of the tab in which the request takes place. Set to -1 if the
             * request isn't related to a tab.
             */
            tabId: number;
            /** How the requested resource will be used. */
            type: ResourceType;
            /**
             * The time when this signal is triggered, in milliseconds since the
             * epoch.
             */
            timeStamp: number;
            /**
             * The server IP address that the request was actually sent to. Note that
             * it may be a literal IPv6 address.
             */
            ip?: string | undefined;
            /** Indicates if this response was fetched from disk cache. */
            fromCache: boolean;
            /**
             * The error description. This string is _not_ guaranteed to remain
             * backwards compatible between releases. You must not parse and act
             * based upon its content.
             */
            error: string;
            /** Tracking classification if the request has been classified. */
            urlClassification?: UrlClassification | undefined;
            /**
             * Indicates if this request and its content window hierarchy is third
             * party.
             */
            thirdParty: boolean;
        }

        export interface _WebRequestOnErrorOccurredEvent<TCallback = (details: _OnErrorOccurredDetails) => void> {
            addListener(cb: TCallback, filter: RequestFilter): void;
            removeListener(cb: TCallback): void;
            hasListener(cb: TCallback): boolean;
        }

        /* webRequest properties */
        /**
         * The maximum number of times that `handlerBehaviorChanged` can be
         * called per 10 minute sustained interval. `handlerBehaviorChanged` is
         * an expensive function call that shouldn't be called often.
         */
        export const MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

        /* webRequest functions */
        /**
         * Needs to be called when the behavior of the webRequest handlers has
         * changed to prevent incorrect handling due to caching. This function
         * call is expensive. Don't call it often.
         */
        export function handlerBehaviorChanged(): Promise<void>;

        /** ... */
        export function filterResponseData(requestId: string): StreamFilter;

        /**
         * Retrieves the security information for the request. Returns a promise
         * that will resolve to a SecurityInfo object.
         */
        export function getSecurityInfo(requestId: string, options?: _GetSecurityInfoOptions): Promise<SecurityInfo>;

        /* webRequest events */
        /**
         * Fired when a request is about to occur.
         *
         * @returns If "blocking" is specified in the "extraInfoSpec" parameter,
         * the event listener should return an object of this type.
         */
        export const onBeforeRequest: _WebRequestOnBeforeRequestEvent;

        /**
         * Fired before sending an HTTP request, once the request headers are
         * available. This may occur after a TCP connection is made to the
         * server, but before any HTTP data is sent.
         *
         * @returns If "blocking" is specified in the "extraInfoSpec" parameter,
         * the event listener should return an object of this type.
         */
        export const onBeforeSendHeaders: _WebRequestOnBeforeSendHeadersEvent;

        /**
         * Fired just before a request is going to be sent to the server
         * (modifications of previous onBeforeSendHeaders callbacks are visible
         * by the time onSendHeaders is fired).
         */
        export const onSendHeaders: _WebRequestOnSendHeadersEvent;

        /**
         * Fired when HTTP response headers of a request have been received.
         *
         * @returns If "blocking" is specified in the "extraInfoSpec" parameter,
         * the event listener should return an object of this type.
         */
        export const onHeadersReceived: _WebRequestOnHeadersReceivedEvent;

        /**
         * Fired when an authentication failure is received. The listener has
         * three options: it can provide authentication credentials, it can
         * cancel the request and display the error page, or it can take no
         * action on the challenge. If bad user credentials are provided, this
         * may be called multiple times for the same request.
         *
         * @returns If "blocking" is specified in the "extraInfoSpec" parameter,
         * the event listener should return an object of this type.
         */
        export const onAuthRequired: _WebRequestOnAuthRequiredEvent;

        /**
         * Fired when the first byte of the response body is received. For HTTP
         * requests, this means that the status line and response headers are
         * available.
         */
        export const onResponseStarted: _WebRequestOnResponseStartedEvent;

        /** Fired when a server-initiated redirect is about to occur. */
        export const onBeforeRedirect: _WebRequestOnBeforeRedirectEvent;

        /** Fired when a request is completed. */
        export const onCompleted: _WebRequestOnCompletedEvent;

        /** Fired when an error occurs. */
        export const onErrorOccurred: _WebRequestOnErrorOccurredEvent;
    }
}
