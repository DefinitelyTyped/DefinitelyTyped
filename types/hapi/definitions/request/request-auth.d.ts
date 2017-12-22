/**
 * Authentication information:
 * * artifacts - an artifact object received from the authentication strategy and used in authentication-related actions.
 * * credentials - the credential object received during the authentication process. The presence of an object does not mean successful authentication.
 * * error - the authentication error is failed and mode set to 'try'.
 * * isAuthenticated - true if the request has been successfully authenticated, otherwise false.
 * * isAuthorized - true is the request has been successfully authorized against the route authentication access configuration. If the route has not access rules defined or if the request failed authorization, set to false.
 * * mode - the route authentication mode.
 * * strategy - the name of the strategy used.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestauth)
 */
export interface RequestAuth {
    /** an artifact object received from the authentication strategy and used in authentication-related actions. */
    artifacts: object;
    /** the credential object received during the authentication process. The presence of an object does not mean successful authentication. */
    credentials: any;
    /** the authentication error is failed and mode set to 'try'. */
    error: Error;
    /** true if the request has been successfully authenticated, otherwise false. */
    isAuthenticated: boolean;
    /** true is the request has been successfully authorized against the route authentication access configuration. If the route has not access rules defined or if the request failed authorization, set to false. */
    isAuthorized: boolean;
    /** the route authentication mode. */
    mode: string;
    /** the name of the strategy used. */
    strategy: string;
}
