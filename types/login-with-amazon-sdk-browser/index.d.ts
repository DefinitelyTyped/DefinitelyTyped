// Type definitions for non-npm package login-with-amazon-sdk-browser 1.0
// Project: https://developer.amazon.com/login-with-amazon
// Definitions by: Jeff Held <https://github.com/solkaz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Option form to request an access token.
 */
interface AccessTokenAuthorizeOptions extends AuthorizeOptions {
    response_type?: "token";
}

/**
 * Option form to request a code.
 */
interface CodeAuthorizeOptions extends AuthorizeOptions {
    response_type: "code";
}

/**
 * Options that may be passed to `authorize`.
 */
interface AuthorizeOptions {
    /**
     * Specifies when to show a login screen to the user.
     * `"auto"` will attempt to use a cached token. If the cached token fails or does not exist, the user will be presented with a login screen.
     * `"always"` does not use the cached token and always presents a login screen.
     * `"never"` will used the cached token; if the token does not work, authorize will return `invalid_grant`.
     * Defaults to `"auto"`.
     */
    interactive?: AuthorizeInteractiveOption;
    /**
     * `true` to use a popup window for login, `false` to redirect the current browser window to the authorization dialog. Defaults to `true`. If `false`, the next parameter MUST be a redirect URL.
     */
    popup?: boolean;
    /**
     * The grant type requested. Specify `token` to request an Implicit grant or `code` to request an Authorization Code grant. Defaults to `token`.
     */
    response_type?: AuthorizeResponseType;
    /**
     * The access scope requested.
     */
    scope: AuthorizeScope;
    /**
     * An opaque value used by the client to maintain state between this request and the response. The Login with Amazon authorization service will include this value when redirecting the user back
     * to the client. It is also used to prevent cross-site request forgery.
     * For more information see [Cross-site Request Forgery](https://developer.amazon.com/docs/login-with-amazon/cross-site-request-forgery.html).
     *
     */
    state?: string;
    scope_data?: AuthorizeScopeData;
}

type AuthorizeScopeData = {
    [scope in AuthorizationScopeOptions]?: {
        essential: boolean;
    }
};

/**
 *
 * Accepted values for `scope` member of `authorize` options.
 */
type AuthorizationScopeOptions = "profile" | "profile:user_id" | "postal_code";

type AuthorizeResponseType = "token" | "code";

type AuthorizeScope = AuthorizationScopeOptions | AuthorizationScopeOptions[];

type AuthorizeInteractiveOption = "auto" | "always" | "never";

type AuthorizeRequest = CodeRequest | AccessTokenRequest;

interface CodeRequest extends AuthorizeRequestBase<CodeRequest> {
    /**
     * An authorization code that can be exchanged for an access token.
     */
    code: string;
    /**
     * The state value provided to authorize using the options object.
     */
    state: string;
}

interface AccessTokenRequest extends AuthorizeRequestBase<AccessTokenRequest> {
    /**
     * The type of token issued. Must be `"bearer"`.
     */
    token_type: "bearer";
    /**
     * The access token issued by the authorization server.
     */
    access_token: string;
    /**
     * The number of seconds until the access token expires.
     */
    expires_in: number;
}

/**
 * Base interface that contains common members to an `authorize` request (whether for token or code).
 * Contains optional error-related members; these will be defined if there was an error.
 */
interface AuthorizeRequestBase<T extends AuthorizeRequest> {
    /**
     * The current status of the request.
     */
    status: AuthorizeRequestStatus;
    /**
     * A short error code indicating why the authorization failed.
     */
    error?: AuthorizeRequestErrorType;
    /**
     * A human-readable description of the error.
     */
    error_description?: string;
    /**
     * A URI for a web page with more information on the error.
     */
    error_uri?: string;
    /**
     * Registers a callback function or sets a redirect URI to call when the
     * authorization request is complete. If this function is called after the
     * request is complete, the function or redirect will happen immediately.
     * If a callback function is used, the `AuthorizeRequest` will be the first
     * parameter. If a redirect URI is used, the browser will redirect to that
     * URI with the OAuth 2 response parameters included in the query string.
     * @param next A URI to redirect the browser response,or a JavaScript
     * function to call with the authorization response.
     */
    onComplete(next: string | NextCallback<T>): void;
}

type AuthorizeRequestErrorType =
    | "access_denied"
    | "invalid_grant"
    | "invalid_request"
    | "invalid_scope"
    | "server_error"
    | "temporarily_unavailable"
    | "unauthorized_client";

type AuthorizeRequestStatus = "queued" | "in_progress" | "complete";

/**
 * Type of callback invoked after `authorize` completes.
 */
type NextCallback<T extends AuthorizeRequest> = (response: T) => void;

type RetrieveProfileResponse =
    | RetrieveProfileResponseError
    | RetrieveProfileResponseSuccess;

/**
 * Response type if `retrieveProfile` call failed.
 */
interface RetrieveProfileResponseError {
    /**
     * Indicates whether profile was successfully retrieved.
     * For this type, it is always false.
     */
    success: false;
    /**
     * The error message given with the response.
     */
    error: string;
}

/**
 * Response type if `retrieveProfile` call succeeded.
 */
interface RetrieveProfileResponseSuccess {
    /**
     * Indicates whether profile was successfully retrieved.
     * For this type, it is always true.
     */
    success: true;
    /**
     * Contains the user's profile information.
     */
    profile: UserProfile;
}

/**
 * Contains profile information.
 */
type UserProfile = Partial<{
    /**
     * An identifier that uniquely identifies the logged-in user for this caller. Only present if the `profile` or `profile:user_id` scopes are requested and granted.
     */
    CustomerId: string;
    /**
     * The customer's name. Only present if the `profile` scope is requested and granted.
     */
    Name: string;
    /**
     * The postal code of the customer's primary address. Only present if the `postal_code` scope is requested and granted.
     */
    PostalCode: string;
    /**
     * The primary email address for the customer. Only present if the `profile` scope is requested and granted.
     */
    PrimaryEmail: string;
}>;

type RetrieveProfileCallback = (response: RetrieveProfileResponse) => void;

declare namespace amazon {
    namespace Login {
        function authorize(
            options: AccessTokenAuthorizeOptions,
            next?: string | NextCallback<AccessTokenRequest>
        ): AccessTokenRequest;
        function authorize(
            options: CodeAuthorizeOptions,
            next?: string | NextCallback<CodeRequest>
        ): CodeRequest;
        function authorize(
            options: AuthorizeOptions,
            next?: string | NextCallback<AuthorizeRequest>
        ): AuthorizeRequest;

        /**
         * Retrieves the customer profile and passes it to a callback function.
         * Uses an access token provided by `authorize`.
         * @param accessToken An access token. If this parameter is omitted, retrieveProfile will call authorize, requesting the profile scope.
         * @param callback Called with the profile data or an error string
         */
        function retrieveProfile(
            accessToken: string,
            callback?: RetrieveProfileCallback
        ): void;
        /**
         * Retrieves the customer profile and passes it to a callback function.
         * If no `access_token` is provided, this function will call `authorize`
         * with a `profile` scope.
         * @param callback Called with the profile data or an error string
         */
        function retrieveProfile(callback: RetrieveProfileCallback): void;

        /**
         * Sets the client identifier that will be used to request authorization.
         * You must call this function before calling `authorize`.
         */
        function setClientId(clientId: string): void;

        /**
         * Gets the client identifier that will be used to request authorization.
         * You must call `setClientId` before calling this function.
         */
        function getClientId(): string;

        /**
         * Determines whether or not Login with Amazon should use the
         * Amazon Pay sandbox for requests. To use the Amazon Pay sandbox,
         * call `setSandboxMode(true)` before calling `authorize`.
         */
        function setSandboxMode(sandboxMode: boolean): void;

        /**
         * Sets the domain to use for saving cookies.
         * The domain must match the origin of the current page.
         * Defaults to the full domain for the current page. For example, if
         * you have two pages using the Login with Amazon SDK for JavaScript,
         * `site1.example.com` and `site2.example.com`, you would set the site
         * domain to `example.com` in the header of each site.
         * This will ensure that the cookies on both sites have access
         * to the same cached tokens.
         */
        function setSiteDomain(siteDomain: string): void;

        /**
         * Determines whether or not Login with Amazon should use access tokens
         * written to the `amazon_Login_accessToken` cookie. You can use this
         * value to share an access token with another page. Access tokens
         * will still only grant access to the registered account for whom they
         * were created. When `true`, the Login with Amazon SDK for JavaScript
         * will check this cookie for cached tokens, and store newly granted
         * tokens in that cookie.
         */
        function setUseCookie(useCookie: boolean): void;

        /**
         * Logs out the current user after a call to `authorize`.
         */
        function logout(): void;

        /**
         * Login With Amazon has multiple authorization and resource endpoints.
         * This API determines the region of the authorization and resource
         * endpoints Login with Amazon SDK should talk to. This needs to be
         * called before the authorize and retreiveProfile APIs.
         * When not set, it defaults to “NorthAmerica”
         */
        function setRegion(region: Region): void;

        enum Region {
            NorthAmerica,
            Europe,
            AsiaPacific
        }
    }
}
