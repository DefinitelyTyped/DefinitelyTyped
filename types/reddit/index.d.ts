export = Reddit;

/**
 * Simple Reddit API client - Powered by the official Reddit API
 *
 * @see https://github.com/feross/reddit
 * @see https://github.com/reddit-archive/reddit/wiki/API
 * @see https://www.reddit.com/dev/api
 */
declare class Reddit {
    /**
     * Create a new Reddit API client.
     *
     * @param opts Credentials required for Reddit's API. Accepts the following properties:
     *
     * Required:
     * - `username` Username of the reddit user.
     * - `password` Password of the reddit user.
     * - `appId` Client ID of the application.
     * - `appSecret` Client Secret of the application.
     *
     * Optional:
     * - `userAgent` Used as the `User-Agent` header in http requests.
     *
     * @see https://github.com/reddit-archive/reddit/wiki/OAuth2 for more infromation on OAuth2.
     *
     * @example
     * import Reddit from 'reddit';
     *
     * const credentials: Reddit.Credentials = {
     *  username: "username",
     *  password: "password",
     *  appId: "appId",
     *  appSecret: "appSecret"
     * };
     *
     * const reddit = new Reddit(credentials);
     */
    constructor(opts: Reddit.Credentials);

    /**
     * Invoke the Reddit API using the GET HTTP method.
     *
     * @param url URL path of the API to invoke. For example, `/api/submit` or `/api/vote`.
     * @param data Optional. Data to provide to the selected API. Defaults to `{}`.
     *
     * @note
     * - `<T>` is the API response type. Defaults to `unknown`.
     * - `<D>` is the`data` type. Defaults to `Record<string, never>`.
     *
     * @see https://www.reddit.com/dev/api/ for a complete list of Reddit APIs and their parameters
     *
     * @example
     * import Reddit from 'reddit';
     *
     * const reddit = new Reddit({...credentials});
     *
     * interface AboutResponse {
     *  type: string;
     * }
     *
     * const type = (await reddit.get<AboutResponse>("/r/typescript/about.json")).type;
     */
    get<T = unknown, D = Record<string, never>>(url: string, data?: D): Promise<T>;

    /**
     * Invoke the Reddit API using the POST HTTP method.
     *
     * @param url URL path of the API to invoke. For example, `/api/submit` or `/api/vote`.
     * @param data Optional. Data to provide to the selected API. Defaults to `{}`.
     *
     * @note
     * - `<T>` is the API response type. Defaults to `unknown`.
     * - `<D>` is the`data` type. Defaults to `Record<string, never>`.
     *
     * @see https://www.reddit.com/dev/api/ for a complete list of Reddit APIs and their parameters
     *
     * @example
     * import Reddit from 'reddit';
     *
     * const reddit = new Reddit({...credentials});
     * const params: ParamType = {...data};
     *
     * await reddit.post<void,ParamType>("/api/save", params);
     */
    post<T = unknown, D = Record<string, never>>(url: string, data?: D): Promise<T>;

    /**
     * Invoke the Reddit API using the PATCH HTTP method.
     *
     * @param url URL path of the API to invoke. For example, `/api/submit` or `/api/vote`.
     * @param data Optional. Data to provide to the selected API. Defaults to `{}`.
     *
     * @note
     * - `<T>` is the API response type. Defaults to `unknown`.
     * - `<D>` is the`data` type. Defaults to `Record<string, never>`.
     *
     * @see https://www.reddit.com/dev/api/ for a complete list of Reddit APIs and their parameters
     *
     * @example
     * import Reddit from 'reddit';
     *
     * const reddit = new Reddit({...credentials});
     * const params: ParamType = {...data};
     *
     * await reddit.patch<void,ParamType>("/api/v1/me/prefs", params);
     */
    patch<T = unknown, D = Record<string, never>>(url: string, data?: D): Promise<T>;

    /**
     * Invoke the Reddit API using the PUT HTTP method.
     *
     * @param url URL path of the API to invoke. For example, `/api/submit` or `/api/vote`.
     * @param data Optional. Data to provide to the selected API. Defaults to `{}`.
     *
     * @note
     * - `<T>` is the API response type. Defaults to `unknown`.
     * - `<D>` is the`data` type. Defaults to `Record<string, never>`.
     *
     * @see https://www.reddit.com/dev/api/ for a complete list of Reddit APIs and their parameters.
     *
     * @example
     * import Reddit from 'reddit';
     *
     * const reddit = new Reddit({...credentials});
     * const params: ParamType = {...data};
     *
     * await reddit.put<void,ParamType>("/api/v1/me/friends/username", params);
     */
    put<T = unknown, D = Record<string, never>>(url: string, data?: D): Promise<T>;

    /**
     * Invoke the Reddit API using the DELETE HTTP method.
     *
     * @param url URL path of the API to invoke. For example, `/api/submit` or `/api/vote`.
     * @param data Optional. Data to provide to the selected API. Defaults to `{}`.
     *
     * @note
     * - `<T>` is the API response type. Defaults to `unknown`.
     * - `<D>` is the`data` type. Defaults to `Record<string, never>`.
     *
     * @see https://www.reddit.com/dev/api/ for a complete list of Reddit APIs and their parameters.
     *
     * @example
     * import Reddit from 'reddit';
     *
     * const reddit = new Reddit({...credentials});
     * const params: ParamType = {...data};
     *
     * await reddit.delete<void,ParamType>("/api/mod/notes", params);
     */
    delete<T = unknown, D = Record<string, never>>(url: string, data?: D): Promise<T>;
}

declare namespace Reddit {
    /**
     * Credentials to be passed to `Reddit`
     *
     * Required:
     * - `username` Username of the reddit user.
     * - `password` Password of the reddit user.
     * - `appId` Client ID of the application.
     * - `appSecret` Client Secret of the application.
     *
     * Optional:
     * - `userAgent` Used as the `User-Agent` header in http requests.
     *
     * @see https://www.reddit.com/prefs/apps for the client ID and secret.
     *
     * @example
     * import Reddit from 'reddit';
     *
     * const credentials: Reddit.Credentials = {
     *  username: "username",
     *  password: "password",
     *  appId: "appId",
     *  appSecret: "appSecret"
     * };
     */
    interface Credentials {
        username: string;
        password: string;
        appId: string;
        appSecret: string;
        userAgent?: string;
    }
}
