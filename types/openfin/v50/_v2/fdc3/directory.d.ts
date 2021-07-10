/**
 * TypeScript definitions for objects returned by the Application Directory.
 *
 * These structures are defined by the App-Directory FDC3 working group. The definitions here are based on the 1.0.0
 * specification which can be found [here](https://fdc3.finos.org/appd-spec).
 *
 * @module Directory
 */
/**
 * Type alias to indicate when an Application Identifier should be passed. Application Identifiers
 * are described [here](https://fdc3.finos.org/docs/1.0/appd-discovery#application-identifier).
 *
 * In the OpenFin implementation of FDC3, we expect this to be the same as the
 * [UUID in the manifest](https://developers.openfin.co/docs/application-configuration), but this can be configured
 * using [[Application.customConfig]].
 *
 * This type alias exists to disambiguate the raw string app identity from the [[AppName]].
 */
export declare type AppId = string;
/**
 * App Name is the machine-readable name of the app, but it may well be sufficiently
 * human-readable that it can be used in user interfaces. If it's not, please use the title.
 *
 * This type alias exists to disambiguate the raw string app name from the [[AppId]].
 */
export declare type AppName = string;
/**
 * An application in the app directory.
 */
export interface Application {
    /**
     * The Application Identifier. Please see https://fdc3.finos.org/docs/1.0/appd-discovery#application-identifier.
     * By convention this should be the same as your [OpenFin UUID](https://developers.openfin.co/docs/application-configuration).
     *
     * If you can't use your OpenFin UUID as the appId, then instead specify your application's UUID by adding an
     * `appUuid` property to the [[customConfig]] field.
     */
    appId: AppId;
    /**
     * The machine-readable app name, used to identify the application in various API calls to the application directory.
     * This may well be human-readable, too. If it's not, you can provide a title, and that will be used everywhere
     * a name needs to be rendered to a user.
     */
    name: AppName;
    /**
     * An application manifest, used to launch the app. This should be a URL that points to an OpenFin JSON manifest.
     */
    manifest: string;
    /**
     * The manifest type. Always `'openfin'`.
     */
    manifestType: string;
    /**
     * The version of the app. Please use [semantic versioning](https://semver.org/).
     */
    version?: string | undefined;
    /**
     * The human-readable title of the app, typically used by the launcher UI. If not provided, [[name]] is used.
     */
    title?: string | undefined;
    /**
     * A short explanatory text string. For use in tooltips shown by any UIs that display app information.
     */
    tooltip?: string | undefined;
    /**
     * Longer description of the app.
     */
    description?: string | undefined;
    /**
     * Images that can be displayed as part of the app directory entry. Use these for screenshots, previews or similar. These are not the
     * application icons - use [[icons]] for that.
     */
    images?: AppImage[] | undefined;
    /**
     * Contact email address.
     */
    contactEmail?: string | undefined;
    /**
     * The email address to send your support requests to.
     */
    supportEmail?: string | undefined;
    /**
     * Name of the publishing company, organization, or individual.
     */
    publisher?: string | undefined;
    /**
     * Icons used in the app directory display. A launcher may be able to use various sizes.
     */
    icons?: Icon[] | undefined;
    /**
     * Additional config.
     *
     * The OpenFin FDC3 service supports the following configuration values:
     * * `appUuid`: Informs the service that the application launched by this [[manifest]] will have this UUID. By
     * default, the service will expect the UUID of the application to match the [[appId]]. This configuration value
     * can be used to override this.
     *
     * Any additional fields will still be accessible to applications (via APIs such as [[findIntent]]), but will not
     * have any impact on the operation of the service.
     */
    customConfig?: NameValuePair[] | undefined;
    /**
     * The set of intents associated with this application directory entry.
     */
    intents?: AppDirIntent[] | undefined;
}
/**
 * An image for an app in the app directory.
 */
export interface AppImage {
    /**
     * A URL that points to an image.
     */
    url: string;
    /**
     * Alt text to be displayed with the image.
     */
    tooltip?: string | undefined;
    /**
     * Additional text description.
     */
    description?: string | undefined;
}
/**
 * An icon for an app in the app directory.
 */
export interface Icon {
    /**
     * A URL that points to an icon.
     */
    icon: string;
}
/**
 * A pair of name and values, that allows extra configuration to be passed in to an application.
 */
export interface NameValuePair {
    name: string;
    value: string;
}
/**
 * A representation of an [FDC3 Intent](https://fdc3.finos.org/docs/1.0/intents-intro) supported by the app in the app directory.
 */
export interface AppDirIntent {
    /**
     * The intent name.
     */
    name: string;
    /**
     * A short, human-readable description of this intent.
     */
    displayName?: string | undefined;
    /**
     * The context types that this intent supports. A context type is a namespaced name;
     * examples are given [here](https://fdc3.finos.org/docs/1.0/context-spec).
     */
    contexts?: string[] | undefined;
    /**
     * Custom configuration for the intent. Currently unused, reserved for future use.
     */
    customConfig?: any;
}
