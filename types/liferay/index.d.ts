declare const Liferay: {
    Language: LiferayLanguage;
    Util: LiferayUtil;
    ThemeDisplay: LiferayThemeDisplay;
    Loader: LiferayLoader;
    OAuth2: LiferayOAuth2;
    OAuth2Client: LiferayOAuth2ClientRetriever;

    /**
     * Get the authentication token
     */
    authToken: string;

    /**
     * Call a Liferay service
     */
    Service: (service: string, params?: unknown, callback?: (obj: unknown) => void) => Promise<unknown>;
};

interface UserAgentApplication {
    /**
     * Get the user agent client id
     */
    clientId: string;

    /**
     * Get the user agent home page URL
     */
    homePageURL: string;

    /**
     * Get the user agent redirect URIs
     */
    redirectURIs: Array<string>;
}

interface LiferayOAuth2 {
    /**
     * Get the authorize URL
     */
    getAuthorizeURL(): string;

    /**
     * Get the built-in redirect URL
     */
    getBuiltInRedirectURL(): string;

    /**
     * Get the introspect token URL
     */
    getTokenURL(): string;

    /**
     * Get the user agent application
     * @param externalReferenceCode
     */
    getUserAgentApplication(externalReferenceCode: string): UserAgentApplication;

    /**
     * All the user agent applications with their external reference codes as keys
     */
    _userAgentApplications: Record<string, UserAgentApplication>;
}

interface OAuth2ClientFromParametersOptions {
    /**
     * The authorize URL
     */
    authorizeURL?: string;

    /**
     * The client id
     */
    clientId: string;

    /**
     * The client secret
     */
    homePageURL: string;

    /**
     * The redirect URIs
     */
    redirectURIs?: Array<string>;

    /**
     * The token URL
     */
    tokenURL?: string;
}

interface LiferayOAuth2ClientRetriever {
    /**
     * Create a new OAuth2 client from parameters
     * @param options
     */
    FromParameters(options: OAuth2ClientFromParametersOptions): LiferayOAuth2Client;

    /**
     * Create a new OAuth2 client from user agent application
     * @param userAgentApplicationId
     */
    FromUserAgentApplication(userAgentApplicationId: string): LiferayOAuth2Client;
}

interface LiferayOAuth2Client {
    /**
     * Fetch the given URL
     * @param url
     * @param options
     */
    fetch(url: string, options?: any): Promise<any>;

    /**
     * Get the authorize URL
     */
    authorizeURL?: string;

    /**
     * Get the client id of the OAuth2 client
     */
    clientId: string;

    /**
     * Get the client home page URL
     */
    homePageURL?: string;

    /**
     * Get the redirect URIs
     */
    redirectURIs?: string[];

    /**
     * Get the token URL, which is used to exchange the authorization code for an access token
     */
    tokenURL?: string;

    /**
     * Get or request a valid access token
     * This method will check the local storage for a valid access token or requests a new one through the _createIframe function.
     */
    _getOrRequestToken(): Promise<LiferayTokenResponse>;
}

interface LiferayTokenResponse {
    /**
     * The access token that can be used to authenticate requests
     */
    access_token: string;

    /**
     * The type of the access token, usually "Bearer
     */
    token_type: string;

    /**
     * The time in seconds after which the access token expires
     */
    expires_in: number;

    /**
     * The scope of the access token, which defines the permissions granted
     */
    scope: string;

    /**
     * The refresh token that can be used to obtain a new access token
     */
    refresh_token?: string;

    /**
     * The time in milliseconds after which the access token expires
     */
    expires_after_ms: number;
}

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
