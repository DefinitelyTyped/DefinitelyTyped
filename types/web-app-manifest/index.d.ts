// Type definitions for non-npm package web-app-manifest 1.0
// Project: https://w3c.github.io/manifest/
// Definitions by: Yamagishi Kazutoshi <https://github.com/ykzts>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type TextDirectionType = 'ltr' | 'rtl' | 'auto';
type DisplayModeType = 'fullscreen' | 'standalone' | 'minimal-ui' | 'browser';

/**
 * Each `ImageResource` represents an image that is used as part of a web application, suitable to use in
 * various contexts depending on the semantics of the member that is using the object (e.g., an icon
 * that is part of an application menu, etc.).
 *
 * @see https://w3c.github.io/manifest/#imageresource-and-its-members
 */
interface ImageResource {
    /**
     * The `src` member of an `ImageResource` is a URL from which a user agent can fetch the image's data.
     *
     * @see https://w3c.github.io/manifest/#src-member
     */
    src: string;

    /**
     * The `sizes` member of an ImageResource is a string consisting of an unordered set of unique space-
     * separated tokens which are ASCII case-insensitive that represents the dimensions of an image.
     *
     * @see https://w3c.github.io/manifest/#sizes-member
     */
    sizes?: string;

    /**
     * The `type` member of an `ImageResource` is a hint as to the MIME type of the image.
     *
     * @see https://w3c.github.io/manifest/#type-member
     */
    type?: string;

    /**
     * The purpose member is an unordered set of unique space-separated tokens that are ASCII case-
     * insensitive.
     *
     * @see https://w3c.github.io/manifest/#purpose-member
     */
    purpose?: string;

    /**
     * The `platform` member represents the platform to which a containing object applies.
     *
     * @see https://w3c.github.io/manifest/#platform-member
     */
    platform?: string;
}

/**
 * Each `Fingerprints` represents a set of cryptographic fingerprints used for verifying the application. A
 * fingerprint has the following two properties: `type` and `value`.
 *
 * @see https://w3c.github.io/manifest/#fingerprints-member
 */
interface Fingerprint {
    type?: string;
    value?: string;
}

/**
 * Each `ExternalApplicationResources` represents an application related to the web application.
 *
 * @see https://w3c.github.io/manifest/#externalapplicationresource-and-its-members
 */
interface ExternalApplicationResource {
    /**
     * The `platform` member represents the platform to which a containing object applies.
     *
     * @see https://w3c.github.io/manifest/#platform-member-0
     */
    platform: string;

    /**
     * The `url` member of an ExternalApplicationResource dictionary represents the
     * URL at which the application can be found.
     *
     * @see https://w3c.github.io/manifest/#url-member-0
     */
    url?: string;

    /**
     * The `id` member of an ExternalApplicationResource dictionary represents the id which is used to
     * represent the application on the platform.
     *
     * @see https://w3c.github.io/manifest/#id-member
     */
    id?: string;

    /**
     * The `min_version` member of an `ExternalApplicationResource` dictionary represents the minimum version
     * of the application that is considered related to this web app.
     *
     * @see https://w3c.github.io/manifest/#min_version-member
     */
    min_version?: string;

    /**
     * The `fingerprints` member of an `ExternalApplicationResource` dictionary represents an array of
     * `Fingerprint`s.
     *
     * @see https://w3c.github.io/manifest/#fingerprints-member
     */
    fingerprints?: Fingerprint[];
}

/**
 * Each `ShortcutItem` represents a link to a key task or page within a web app.
 *
 * @see https://w3c.github.io/manifest/#shortcutitem-and-its-members
 */
interface ShortcutItem {
    /**
     * The `name` member of a `ShortcutItem` is a `string` that represents the name of the shortcut as it is usually
     * displayed to the user in a context menu.
     *
     * @see https://w3c.github.io/manifest/#name-member-0
     */
    name: string;

    /**
     * The `short_name` member of a `ShortcutItem` is a `string` that represents a short version of the name of
     * the shortcut.
     *
     * @see https://w3c.github.io/manifest/#short_name-member-0
     */
    short_name?: string;

    /**
     * The `description` member of a `ShortcutItem` is a `string` that allows the developer to describe the
     * purpose of the shortcut.
     *
     * @see https://w3c.github.io/manifest/#description-member-0
     */
    description?: string;

    /**
     * The `url` member of a `ShortcutItem` is the URL within the application's scope that opens when the
     * associated shortcut is activated.
     *
     * @see https://w3c.github.io/manifest/#url-member
     */
    url: string;

    /**
     * The `icons` member of an `ShortcutItem` member is an `array` of `ImageResource`s that can serve as iconic
     * representations of the shortcut in various contexts.
     *
     * @see https://w3c.github.io/manifest/#icons-member-0
     */
    icons?: ImageResource[];
}

/**
 * A `manifest` is a JSON document that contains startup parameters and application defaults for
 * when a web application is launched.
 *
 * @see https://w3c.github.io/manifest/#webappmanifest-dictionary
 */
interface WebAppManifest {
    /**
     * The `dir` member specifies the base direction for the directionality-capable members of the manifest.
     *
     * @see https://w3c.github.io/manifest/#dir-member
     */
    dir?: TextDirectionType;

    /**
     * The `lang` member is a language tag (`string`) that specifies the primary language for the values of
     * the manifest's directionality-capable members (as knowing the language can also help with directionality).
     *
     * @see https://w3c.github.io/manifest/#lang-member
     */
    lang?: string;

    /**
     * The `name` member is a `string` that represents the name of the web application as it is usually displayed
     * to the user (e.g., amongst a list of other applications, or as a label for an icon).
     *
     * @see https://w3c.github.io/manifest/#name-member
     */
    name?: string;

    /**
     * The `short_name` member is a `string` that represents a short version of the name of the web application.
     *
     * @see https://w3c.github.io/manifest/#short_name-member
     */
    short_name?: string;

    /**
     * The `description` member allows the developer to describe the purpose of the web application.
     *
     * @see https://w3c.github.io/manifest/#description-member
     */
    description?: string;

    /**
     * The `icons` member is an array of `ImageResource`s that can serve as iconic representations of the web
     * application in various contexts.
     *
     * @see https://w3c.github.io/manifest/#icons-member
     */
    icons?: ImageResource[];

    /**
     * The `screenshots` member is an array of `ImageResource`s, representing the web application in common
     * usage scenarios.
     *
     * @see https://w3c.github.io/manifest/#screenshots-member
     */
    screenshots?: ImageResource[];

    /**
     * The `categories` member describes the expected application categories to which the web application belongs.
     *
     * @see https://w3c.github.io/manifest/#categories-member
     */
    categories?: string[];

    /**
     * The `iarc_rating_id` member is a `string` that represents the International Age Rating Coalition (IARC)
     * certification code of the web application.
     *
     * @see https://w3c.github.io/manifest/#iarc_rating_id-member
     */
    iarc_rating_id?: string;

    /**
     * The `start_url` member is a `string` that represents the start URL , which is URL that the developer
     * would prefer the user agent load when the user launches the web application (e.g., when the user
     * clicks on the icon of the web application from a device's application menu or homescreen).
     *
     * @see https://w3c.github.io/manifest/#start_url-member
     */
    start_url?: string;

    /**
     * The `display` member is a `DisplayModeType`, whose value is one of display modes values.
     *
     * @see https://w3c.github.io/manifest/#display-member
     */
    display?: DisplayModeType;

    /**
     * The `orientation` member is a string that serves as the default screen orientation for all top-level
     * browsing contexts of the web application.
     *
     * @see https://w3c.github.io/manifest/#orientation-member
     */
    orientation?: OrientationLockType;

    /**
     * The `theme_color` member serves as the default theme color for an application context.
     *
     * @see https://w3c.github.io/manifest/#theme_color-member
     */
    theme_color?: string;

    /**
     * The `background_color` member describes the expected background color of the web application.
     *
     * @see https://w3c.github.io/manifest/#background_color-member
     */
    background_color?: string;

    /**
     * The `scope` member is a string that represents the navigation scope of this web application's
     * application context.
     *
     * @see https://w3c.github.io/manifest/#scope-member
     */
    scope?: string;

    /**
     * The `related_applications` member lists related applications and serves as an indication of such a
     * relationship between web application and related applications.
     *
     * @see https://w3c.github.io/manifest/#related_applications-member
     */
    related_applications?: ExternalApplicationResource[];

    /**
     * The `prefer_related_applications` member is a boolean value that is used as a hint for the user agent
     * to say that related applications should be preferred over the web application.
     *
     * @see https://w3c.github.io/manifest/#prefer_related_applications-member
     */
    prefer_related_applications?: boolean;

    /**
     * The `shortcuts` member is an `array` of `ShortcutItem`s that provide access to key tasks within a web application.
     *
     * @see https://w3c.github.io/manifest/#shortcuts-member
     */
    shortcuts?: ShortcutItem[];
}
