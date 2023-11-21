declare const Liferay: {
    Language: LiferayLanguage;
    Util: LiferayUtil;
    ThemeDisplay: LiferayThemeDisplay;

    /**
     * Get the authentication token
     */
    authToken: string;
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
