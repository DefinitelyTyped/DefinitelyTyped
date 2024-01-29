declare const Liferay: {
    Language: LiferayLanguage;
    Util: LiferayUtil;
    ThemeDisplay: LiferayThemeDisplay;
    Loader: LiferayLoader;

    /**
     * Get the authentication token
     */
    authToken: string;

    /**
     * Call a Liferay service
     */
    Service: (service: string, params?: unknown, callback?: (obj: unknown) => void) => Promise<unknown>;
};

interface LiferayLanguage {
    /**
     * Get language property value by a specified key and replace placeholders
     * with values
     *
     * @param key
     * @param params
     */
    get: (key: string, params?: string[] | string) => string;

    /**
     * Get all available language keys
     */
    available: string[];
}

interface LiferayThemeDisplay {
    /**
     * Check if a user is currently impersonated
     */
    isImpersonated: () => boolean;

    /**
     * Get the encoded do as user id
     */
    getDoAsUserIdEncoded: () => string;

    /**
     * Check if the user is signed in
     */
    isSignedIn: () => boolean;

    /**
     * Get the current language id
     */
    getLanguageId: () => string;

    /**
     * Get the default language id
     */
    getDefaultLanguageId: () => string;

    /**
     * Get the current plid
     */
    getPlid: () => string;

    /**
     * Get the current group id
     */
    getScopeGroupId: () => string;

    /**
     * Get the relative url of the current layout
     */
    getLayoutRelativeURL: () => string;

    /**
     * Get the current company group id
     */
    getCompanyGroupId: () => string;

    /**
     * Get the current site group id
     */
    getSiteGroupId: () => string;

    /**
     * Get the current company id
     */
    getCompanyId: () => string;

    /**
     * Get the current layout id
     */
    getLayoutId: () => string;

    /**
     * Get the parent layout id of the current layout
     */
    getParentLayoutId: () => string;

    /**
     * Get the current user id
     */
    getUserId: () => string;

    /**
     * Get the current user email address
     */
    getUserEmailAddress: () => string;

    /**
     * Get the current username
     */
    getUserName: () => string;

    /**
     * Get the current user uuid
     */
    getPathThemeRoot: () => string;

    /**
     * Get the path to the theme images
     */
    getPathThemeImages: () => string;

    /**
     * Get the base url of the CDN
     */
    getCDNBaseURL: () => string;

    /**
     * Get the base url of the portal
     */
    getPortalURL: () => string;
}

interface LiferayUtil {
    /**
     * Open a liferay toast
     *
     * @param title the title of the toast
     * @param message the message of the toast
     * @param type the type of the toast
     * @param autoClose the time in milliseconds after which the toast should be closed
     */
    openToast: ({ title, message, type, autoClose }: ToastParams) => void;
}

interface ToastParams {
    /**
     * The title of the toast
     */
    title: string;

    /**
     * The message of the toast
     */
    message: string;

    /**
     * The type of the toast
     */
    type: "info" | "error" | "danger" | "success";

    /**
     * The time in milliseconds after which the toast should be closed
     * (default: 5000)
     *
     * Set false to disable auto close (default: true)
     */
    autoClose?: number | boolean;
}

interface LiferayLoader {
    /**
     * Load a Liferay module
     *
     * @param module the module to load
     * @param callback the callback function
     * @param error the error function
     */
    require: (module: string, callback?: (module: unknown) => void, error?: (error: unknown) => void) => void;
}
