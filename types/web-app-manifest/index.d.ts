export type TextDirectionType = "ltr" | "rtl" | "auto";
export type DisplayModeType = "fullscreen" | "standalone" | "minimal-ui" | "browser";
export type LaunchHandlerClientModeType = "auto" | "focus-existing" | "navigate-existing" | "navigate-new";
export type ExtendedDisplayModeType = DisplayModeType | "borderless" | "window-controls-overlay" | "tabbed";
export type CategoriesType =
    | "beauty"
    | "books"
    | "books & reference"
    | "business"
    | "cars"
    | "dating"
    | "design"
    | "developer"
    | "developer tools"
    | "development"
    | "education"
    | "entertainment"
    | "events"
    | "fashion"
    | "finance"
    | "fitness"
    | "food"
    | "fundraising"
    | "games"
    | "government"
    | "graphics"
    | "graphics & design"
    | "health"
    | "health & fitness"
    | "kids"
    | "lifestyle"
    | "magazines"
    | "medical"
    | "multimedia"
    | "multimedia design"
    | "music"
    | "navigation"
    | "network"
    | "networking"
    | "news"
    | "parenting"
    | "personalization"
    | "pets"
    | "photo"
    | "photo & video"
    | "politics"
    | "productivity"
    | "reference"
    | "security"
    | "shopping"
    | "social"
    | "social networking"
    | "sports"
    | "transportation"
    | "travel"
    | "utilities"
    | "video"
    | "weather";

/**
 * Each `ImageResource` represents an image that is used as part of a web application, suitable to use in
 * various contexts depending on the semantics of the member that is using the object (e.g., an icon
 * that is part of an application menu, etc.).
 *
 * @see https://w3c.github.io/manifest/#manifest-image-resources
 */
export interface ImageResource {
    /**
     * The `src` of an `ImageResource` is a URL from which a user agent can fetch image data.
     *
     * @see https://www.w3.org/TR/image-resource/#src-member
     */
    src: string;

    /**
     * The `sizes` member is equivalent to a `link` element's `sizes` attribute, and is processed in the same manner.
     *
     * @see https://www.w3.org/TR/image-resource/#sizes-member
     */
    sizes?: string | undefined;

    /**
     * The `type` member represents an image MIME Type for the image resource.
     * A user agent MAY ignore media types it does not support.
     *
     * @see https://www.w3.org/TR/image-resource/#type-member
     */
    type?: string | undefined;

    /**
     * The `label` of an `ImageResource` is a string that provides the accessible name for the associated image.
     *
     * @see https://www.w3.org/TR/image-resource/#label-member
     */
    label?: string | undefined;

    /**
     * The `purpose` member is an unordered set of unique space-separated tokens.
     * The allowed values are the icon purposes.
     *
     * @see https://w3c.github.io/manifest/#purpose-member
     */
    purpose?: string | undefined;
}

/**
 * A `Fingerprint` represents a set of cryptographic fingerprints used for verifying the application.
 * A `Fingerprint` has the following two members: `type` and `value`.
 * Each of these are strings, but their syntax and semantics are platform-defined.
 *
 * @see https://wicg.github.io/manifest-incubations/#fingerprints-member
 */
export interface Fingerprint {
    type?: string | undefined;
    value?: string | undefined;
}

/**
 * Each `ExternalApplicationResources` represents an application related to the web application.
 *
 * @see https://wicg.github.io/manifest-incubations/#external-application-resource
 */
export interface ExternalApplicationResource {
    /**
     * The `platform` member represents the platform this external application resource is associated with.
     *
     * @see https://wicg.github.io/manifest-incubations/#platform-member
     */
    platform: "chrome_web_store" | "play" | "chromeos_play" | "webapp" | "windows" | "f-droid" | "amazon";

    /**
     * An external application resource's `url` member is the URL where the application can be found.
     *
     * @see https://wicg.github.io/manifest-incubations/#url-member-0
     */
    url?: string | undefined;

    /**
     * An external application resource's `id` member represents the id which is used to represent the application on the platform.
     *
     * @see https://wicg.github.io/manifest-incubations/#id-member
     */
    id?: string | undefined;

    /**
     * An external application resource's `min_version` member represents the minimum version of the application that is considered related to this web app.
     * This version is a string with platform-specific syntax and semantics.
     *
     * @see https://wicg.github.io/manifest-incubations/#min_version-member
     */
    min_version?: string | undefined;

    /**
     * An external application resource's `fingerprints` member represents an list of `Fingerprint`s.
     *
     * @see https://wicg.github.io/manifest-incubations/#fingerprints-member
     */
    fingerprints?: Fingerprint[] | undefined;
}

/**
 * Each `ShortcutItem` is an ordered map that represents a link to a key task or page within a web app.
 *
 * @see https://w3c.github.io/manifest/#shortcut-items
 */
export interface ShortcutItem {
    /**
     * The `ShortcutItem`'s `name` member is a string that represents the name of the shortcut as it is usually displayed to the user in a context menu.
     *
     * @see https://w3c.github.io/manifest/#name-member-0
     */
    name: string;

    /**
     * The `ShortcutItem`'s `short_name` member is a string that represents a short version of the name of the shortcut.
     * It is intended to be used where there is insufficient space to display the full name of the shortcut.
     *
     * @see https://w3c.github.io/manifest/#short_name-member-0
     */
    short_name?: string | undefined;

    /**
     * The `ShortcutItem`'s `description` member is a string that allows the developer to describe the purpose of the shortcut.
     * User agents MAY expose this information to assistive technology.
     *
     * @see https://w3c.github.io/manifest/#description-member
     */
    description?: string | undefined;

    /**
     * The `ShortcutItem`'s `url` member is a URL within scope of a processed manifest that opens when the associated shortcut is activated.
     *
     * @see https://w3c.github.io/manifest/#url-member
     */
    url: string;

    /**
     * The `ShortcutItem`'s `icons` member lists images that serve as iconic representations of the shortcut in various contexts.
     *
     * @see https://w3c.github.io/manifest/#icons-member-0
     */
    icons?: ImageResource[] | undefined;
}

/**
 * The `LaunchHandler` is a dictionary containing configurations for how web app launches should behave.
 *
 * @see https://wicg.github.io/web-app-launch/#launch_handler-member
 */
export interface LaunchHandler {
    /**
     * The `client_mode` member of the `LaunchHandler` is a `string` or list of `strings` that specify one or more client mode targets.
     *
     * @see https://wicg.github.io/web-app-launch/#client_mode-member
     */
    client_mode: LaunchHandlerClientModeType | LaunchHandlerClientModeType[];
}

/**
 * A screenshots object is a `ImageResource` object with some additional members.
 *
 * @see https://www.w3.org/TR/manifest-app-info/#dfn-screenshots-object
 */
export type Screenshot = ImageResource & {
    /**
     * The `label` member is a string that serves as the accessible name of that screenshots object.
     * For accessibility, authors are encouraged to provide a label for each screenshot.
     * This member can serve as alternative text for the rendered screenshot.
     *
     * @see https://www.w3.org/TR/manifest-app-info/#label-member
     */
    label?: string | undefined;

    /**
     * The `platform` member is a string that represents the distribution platform for which a given screenshot applies.
     * Authors are encouraged to only use this member when the screenshot is only applicable in a specific context.
     *
     * @see https://www.w3.org/TR/manifest-app-info/#platform-member
     */
    platform?:
        | "android"
        | "chromeos"
        | "ipados"
        | "ios"
        | "kaios"
        | "macos"
        | "windows"
        | "xbox"
        | "chrome_web_store"
        | "play"
        | "itunes"
        | "microsoft-inbox"
        | "microsoft-store"
        | undefined;

    /**
     * The `form_factor` member is a string that represents the screen shape of a broad class of devices for which a given screenshot applies.
     * Authors are encouraged to only use this member when the screenshot is only applicable in a specific context.
     *
     * @see https://www.w3.org/TR/manifest-app-info/#form_factor-member
     */
    form_factor?: "narrow" | "wide";
};

/**
 * A `manifest` is a JSON document that contains startup parameters and application defaults for
 * when a web application is launched.
 *
 * @see https://w3c.github.io/manifest/#web-application-manifest
 */
export interface WebAppManifest {
    /**
     * The `WebAppManifest`'s `dir` member specifies the default direction for the localizable members of the manifest.
     * The `dir` member's value can be set to a `TextDirectionType`.
     *
     * @see https://w3c.github.io/manifest/#dfn-dir
     */
    dir?: TextDirectionType | undefined;

    /**
     * The `WebAppManifest`'s `lang` member is a string in the form of a language tag that specifies the language for the values of the `WebAppManifest`'s localizable members.
     * If the `lang` member is not specified, the language is treated as unknown.
     *
     * @see https://w3c.github.io/manifest/#dfn-lang
     */
    lang?: string | undefined;

    /**
     * The `WebAppManifest`'s `name` member is a string that represents the name of the web application as it is usually displayed
     * to the user (e.g., amongst a list of other applications, or as a label for an icon).
     *
     * @see https://w3c.github.io/manifest/#dfn-name
     */
    name?: string | undefined;

    /**
     * The `WebAppManifest`'s `short_name` member is a string that represents a short version of the name of the web application.
     * It is intended to be used where there is insufficient space to display the full name of the web application.
     *
     * @see https://w3c.github.io/manifest/#dfn-short_name
     */
    short_name?: string | undefined;

    /**
     * The `description` member is a string that allows the developer to describe the purpose of the web application.
     * It serves as the accessible description of an installed web application.
     *
     * @see https://w3c.github.io/manifest-app-info/#description-member
     */
    description?: string | undefined;

    /**
     * The `WebAppManifest`'s `icons` member are images that serve as iconic representations of the web
     * application in various contexts.
     *
     * @see https://w3c.github.io/manifest/#dfn-icons
     */
    icons?: ImageResource[] | undefined;

    /**
     * The `screenshots` member is an array of `Screenshot`, representing the web application in common
     * usage scenarios.
     *
     * @see https://w3c.github.io/manifest-app-info/#screenshots-member
     */
    screenshots?: Screenshot[] | undefined;

    /**
     * The `categories` member is an array of strings that describes the application categories to which the web application belongs.
     *
     * @see https://w3c.github.io/manifest-app-info/#categories-member
     */
    categories?: CategoriesType[] | undefined;

    /**
     * The `iarc_rating_id` member is a `string` that represents the International Age Rating Coalition (IARC)
     * certification code of the web application.
     *
     * @see https://w3c.github.io/manifest-app-info/#iarc_rating_id-member
     */
    iarc_rating_id?: string | undefined;

    /**
     * The `WebAppManifest`'s `start_url` member is a string that represents the start URL, which is URL that the developer
     * would prefer the user agent load when the user launches the web application (e.g., when the user
     * clicks on the icon of the web application from a device's application menu or homescreen).
     *
     * @see https://w3c.github.io/manifest/#dfn-start_url
     */
    start_url?: string | undefined;

    /**
     * The `WebAppManifest`'s `display` member represents the developer's preferred display mode for the web application.
     *
     * @see https://w3c.github.io/manifest/#dfn-display
     */
    display?: DisplayModeType | undefined;

    /**
     * The `WebAppManifest`'s `orientation` member is a string that serves as the default screen orientation for all top-level
     * browsing contexts of the web application.
     *
     * @see https://w3c.github.io/manifest/#dfn-orientation
     */
    orientation?:
        | "any"
        | "landscape"
        | "landscape-primary"
        | "landscape-secondary"
        | "natural"
        | "portrait"
        | "portrait-primary"
        | "portrait-secondary"
        | undefined;

    /**
     * The `WebAppManifest`'s `id` member is a string that represents the identity for the application.
     * The identity takes the form of a URL, which is same origin as the start URL.
     *
     * @see https://w3c.github.io/manifest/#dfn-identity
     */
    id?: string | undefined;

    /**
     * The `WebAppManifest`'s `theme_color` member serves as the default theme color for an application context.
     *
     * @see https://w3c.github.io/manifest/#dfn-theme_color
     */
    theme_color?: string | undefined;

    /**
     * The `WebAppManifest`'s `background_color` member describes the expected background color of the web application.
     *
     * @see https://w3c.github.io/manifest/#dfn-background_color
     */
    background_color?: string | undefined;

    /**
     * The `WebAppManifest`'s `scope` member is a string that represents the navigation scope of this web application's application context.
     *
     * @see https://w3c.github.io/manifest/#dfn-scope
     */
    scope?: string | undefined;

    /**
     * The `WebAppManifest`'s `related_applications` member lists related applications and serves as an indication of such a
     * relationship between web application and related applications.
     *
     * @see https://wicg.github.io/manifest-incubations/#related_applications-member
     */
    related_applications?: ExternalApplicationResource[] | undefined;

    /**
     * The `WebAppManifest`'s `prefer_related_applications` member is a boolean that is used as a hint for the user agent
     * to say that related applications should be preferred over the web application.
     *
     * @see https://wicg.github.io/manifest-incubations/#prefer_related_applications-member
     */
    prefer_related_applications?: boolean | undefined;

    /**
     * The `WebAppManifest`'s `shortcuts` member is an list of shortcut items that provide access to key tasks within a web application.
     *
     * @see https://w3c.github.io/manifest/#dfn-shortcuts
     */
    shortcuts?: ShortcutItem[] | undefined;

    /**
     * The `launch_handler` is a dictionary containing configurations for how web app launches should behave.
     *
     * @see https://wicg.github.io/web-app-launch/#launch_handler-member
     */
    launch_handler?: LaunchHandler | undefined;

    /**
     * For advanced usages, the `display_override` member can be used to specify a custom fallback order of display mode list values
     * for developers to choose their preferred display mode for the web application.
     * Its value is a display mode.
     *
     * @see https://wicg.github.io/manifest-incubations/#display_override-member
     * @see https://wicg.github.io/manifest-incubations/#display-mode-extensions
     */
    display_override?: ExtendedDisplayModeType[] | undefined;
}
