import type {
    getPathFromState as getPathFromStateDefault,
    getStateFromPath as getStateFromPathDefault,
    PathConfigMap,
    Route,
} from "../core";
// tslint:disable:interface-over-type-literal
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type Theme = {
    dark: boolean;
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    };
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type LinkingOptions = {
    /**
     * Whether deep link handling should be enabled.
     * Defaults to true.
     */
    enabled?: boolean | undefined;
    /**
     * The prefixes are stripped from the URL before parsing them.
     * Usually they are the `scheme` + `host` (e.g. `myapp://chat?user=jane`)
     * Only applicable on Android and iOS.
     *
     * @example
     * ```js
     * {
     *    prefixes: [
     *      "myapp://", // App-specific scheme
     *      "https://example.com", // Prefix for universal links
     *      "https://*.example.com" // Prefix which matches any subdomain
     *    ]
     * }
     * ```
     */
    prefixes: string[];
    /**
     * Config to fine-tune how to parse the path.
     *
     * @example
     * ```js
     * {
     *   Chat: {
     *     path: 'chat/:author/:id',
     *     parse: { id: Number }
     *   }
     * }
     * ```
     */
    config?: {
        initialRouteName?: string | undefined;
        screens: PathConfigMap;
    } | undefined;
    /**
     * Custom function to get the initial URL used for linking.
     * Uses `Linking.getInitialURL()` by default.
     * Not supported on Web.
     *
     * @example
     * ```js
     * {
     *    getInitialURL () => Linking.getInitialURL(),
     * }
     * ```
     */
    getInitialURL?: (() => Promise<string | null | undefined>) | undefined;
    /**
     * Custom function to get subscribe to URL updates.
     * Uses `Linking.addEventListener('url', callback)` by default.
     * Not supported on Web.
     *
     * @example
     * ```js
     * {
     *    subscribe: (listener) => {
     *      const onReceiveURL = ({ url }) => listener(url);
     *
     *      Linking.addEventListener('url', onReceiveURL);
     *
     *      return () => Linking.removeEventListener('url', onReceiveURL);
     *   }
     * }
     * ```
     */
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    subscribe?: ((listener: (url: string) => void) => undefined | void | (() => void)) | undefined;
    /**
     * Custom function to parse the URL to a valid navigation state (advanced).
     */
    getStateFromPath?: typeof getStateFromPathDefault | undefined;
    /**
     * Custom function to convert the state object to a valid URL (advanced).
     * Only applicable on Web.
     */
    getPathFromState?: typeof getPathFromStateDefault | undefined;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type DocumentTitleOptions = {
    enabled?: boolean | undefined;
    formatter?: ((options: Record<string, any> | undefined, route: Route<string> | undefined) => string) | undefined;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type ServerContainerRef = {
    getCurrentOptions(): Record<string, any> | undefined;
};
