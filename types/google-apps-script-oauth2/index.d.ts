// Type definitions for non-npm package google-apps-script-oauth2 38.0
// Project: https://github.com/googlesamples/apps-script-oauth2
// Definitions by: dhayab <https://github.com/dhayab>, George Dietrich <https://github.com/blacksmoke16>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="google-apps-script" />

declare namespace GoogleAppsScriptOAuth2 {
    interface OAuth2 {
        /**
         * The supported formats for the returned OAuth2 token.
         */
        TOKEN_FORMAT: TokenFormat;
        /**
         * Creates a new OAuth2 service with the name specified.
         * It's usually best to create and configure your service once at the start of your script,
         * and then reference them during the different phases of the authorization flow.
         */
        createService(serviceName: string): OAuth2Service;
        /**
         * Returns the redirect URI that will be used for a given script.  Defaults to the scriptID of the script being executed.
         * Often this URI needs to be entered into a configuration screen of your OAuth provider.
         */
        getRedirectUri(scriptId?: string): string;
    }

    interface Storage {
        /**
         * Gets a stored value.
         * If optSkipMemoryCheck, bypass the local memory cache when fetching the token.
         */
        getValue(key: string, optSkipMemoryCheck?: boolean): any;
        /**
         * Stores value.
         */
        setValue(key: string, value: any): void;
        /**
         * Removes a stored value.
         */
        removeValue(key: string): void;
        /**
         * Resets the storage, removing all stored data.
         */
        reset(): void;
    }

    interface OAuth2Service {
        /**
         * Gets an access token for this service.
         * This token can be used in HTTP requests to the service's endpoint.
         * This method will throw an error if the user's access was not granted or has expired.
         */
        getAccessToken(): string;
        /**
         * Gets the authorization URL.
         * The first step in getting an OAuth2 token is to have the user visit this URL
         * and approve the authorization request. The user will then be redirected back to your
         * application using callback function name specified, so that the flow may continue.
         * Accepts an object of additional parameters that should be
         * stored in the state token and made available in the callback function.
         */
        getAuthorizationUrl(optAdditionalParameters?: object): string;
        /**
         * Gets an id token for this service if present. This token can be used in HTTP
         * requests to the service's endpoint. This method will throw an error if the
         * user's access was not granted or has expired.
         */
        getIdToken(): string | undefined;
        /**
         * Gets the storage layer for this service, used to persist tokens.
         * Custom values associated with the service can be stored here as well.
         * The key <code>null</code> is used to to store the token and should not be used.
         */
        getStorage(): Storage;
        /**
         * Gets the last error that occurred this execution when trying to
         * automatically refresh or generate an access token.
         */
        getLastError(): any;
        /**
         * Returns the redirect URI that will be used for this service.
         * Often this URI needs to be entered into a configuration screen of your OAuth provider.
         */
        getRedirectUri(): string;
        /**
         * Gets the token from the service's property store or cache.
         * If optSkipMemoryCheck, bypass the local memory cache when fetching the token.
         */
        getToken(optSkipMemoryCheck?: boolean): object | null;
        /**
         * Completes the OAuth2 flow using the request data passed in to the callback function.
         */
        handleCallback(callbackRequest: object): boolean;
        /**
         * Determines if the service has access (has been authorized and hasn't expired).
         * If offline access was granted and the previous token has expired this method attempts
         * to generate a new token.
         */
        hasAccess(): boolean;
        /**
         * Refreshes a token that has expired.
         * This is only possible if offline access was requested when the token was authorized.
         */
        refresh(): void;
        /**
         * Resets the service; removing access and requiring the service to be re-authorized.
         * Deletes any additional data related to the service that was stored in cache/properties.
         */
        reset(): void;
        /**
         * Sets additional JWT claims to use for Service Account authorization.
         */
        setAdditionalClaims(additionalClaims: { [key: string]: string }): OAuth2Service;
        /**
         * Sets the service's authorization base URL (required).
         * For Google services this URL should be `https://accounts.google.com/o/oauth2/auth`.
         */
        setAuthorizationBaseUrl(authorizationBaseUrl: string): OAuth2Service;
        /**
         * Sets the cache to use when persisting credentials (optional).
         * Using a cache will reduce the need to read from the property store and may increase
         * performance. In most cases this should be a private cache, but a public cache may be
         * appropriate if you want to share access across users.
         */
        setCache(cache: GoogleAppsScript.Cache.Cache): OAuth2Service;
        /**
         * Sets the lock to use when checking and refreshing credentials (optional).
         * Using a lock will ensure that only one execution will be able to access the
         * stored credentials at a time. This can prevent race conditions that arise
         * when two executions attempt to refresh an expired token.
         */
        setLock(lock: GoogleAppsScript.Lock.Lock): OAuth2Service;
        /**
         * Sets the name of the authorization callback function (required).
         * This is the function that will be called when the user completes the authorization flow
         * on the service provider's website. The callback accepts a request parameter, which
         * should be passed to this service's `handleCallback()` method to complete the process.
         */
        setCallbackFunction(callbackFunctionName: string): OAuth2Service;
        /**
         * Sets the client ID to use for the OAuth flow (required).
         * You can create client IDs in the "Credentials" section of a Google Developers Console
         * project. Although you can use any project with this library, it may be convinient to use
         * the project that was created for your script. These projects are not visible if you
         * visit the console directly, but you can access it by click on the menu item
         * "Resources > Advanced Google services" in the Script Editor, and then click on the link
         * "Google Developers Console" in the resulting dialog.
         */
        setClientId(clientId: string): OAuth2Service;
        /**
         * Sets the client secret to use for the OAuth flow (required).
         * See the documentation for `setClientId()` for more information on how to create client IDs and secrets.
         */
        setClientSecret(clientSecret: string): OAuth2Service;
        /**
         * Sets number of minutes that a token obtained through Service Account authorization should be valid. Default: 60 minutes.
         */
        setExpirationMinutes(expirationMinutes: string): OAuth2Service;
        /**
         * Sets the OAuth2 grant_type to use when obtaining an access token. This does
         * not need to be set when using either the authorization code flow (AKA
         * 3-legged OAuth) or the service account flow. The most common usage is to set
         * it to "client_credentials" and then also set the token headers to include
         * the Authorization header required by the OAuth2 provider.
         */
        setGrantType(grantType: string): OAuth2Service;
        /**
         * Sets the issuer (iss) value to use for Service Account authorization.
         * If not set the client ID will be used instead.
         */
        setIssuer(issuer: string): OAuth2Service;
        /**
         * Sets an additional parameter to use when constructing the authorization URL (optional).
         * See the documentation for your service provider for information on what parameter values they support.
         */
        setParam(name: string, value: string): OAuth2Service;
        /**
         * Sets the private key to use for Service Account authorization.
         */
        setPrivateKey(privateKey: string): OAuth2Service;
        /**
         * Sets the property store to use when persisting credentials (required).
         * In most cases this should be user properties, but document or script properties may be appropriate
         * if you want to share access across users.
         */
        setPropertyStore(propertyStore: GoogleAppsScript.Properties.Properties): OAuth2Service;
        /**
         * Sets the URI to redirect to when the OAuth flow has completed. By default the
         * library will provide this value automatically, but in some rare cases you may
         * need to override it.
         */
        setRedirectUri(redirectUri: string): OAuth2Service;
        /**
         * Sets the service's refresh URL. Some OAuth providers require a different URL
         * to be used when generating access tokens from a refresh token.
         */
        setRefreshUrl(refreshUrl: string): OAuth2Service;
        /**
         * Sets the scope or scopes to request during the authorization flow (optional).
         * If the scope value is an array it will be joined using the separator before being sent to the server,
         * which is is a space character by default.
         */
        setScope(scope: string | ReadonlyArray<string>, separator?: string): OAuth2Service;
        /**
         * Sets the subject (sub) value to use for Service Account authorization.
         */
        setSubject(subject: string): OAuth2Service;
        /**
         * Sets the format of the returned token. Default: `OAuth2.TOKEN_FORMAT.JSON`.
         */
        setTokenFormat(tokenFormat: TokenFormat): OAuth2Service;
        /**
         * Sets the additional HTTP headers that should be sent when retrieving or refreshing the access token.
         */
        setTokenHeaders(tokenHeaders: { [key: string]: string }): OAuth2Service;
        /**
         * Sets an additional function to invoke on the payload of the access token request.
         */
        setTokenPayloadHandler(tokenHandler: (tokenPayload: TokenPayload) => object): OAuth2Service;
        /**
         * Sets the service's token URL (required).
         * For Google services this URL should be `https://accounts.google.com/o/oauth2/token`.
         */
        setTokenUrl(tokenUrl: string): OAuth2Service;
    }

    enum TokenFormat {
        /**
         * JSON format, for example `{"access_token": "..."}`.
         */
        JSON = 'application/json',
        /**
         * Form URL-encoded, for example `access_token=...`.
         */
        FORM_URL_ENCODED = 'application/x-www-form-urlencoded',
    }

    interface TokenPayload {
        code: string;
        client_id: string;
        client_secret: string;
        redirect_uri: string;
        grant_type: string;
    }
}

declare var OAuth2: GoogleAppsScriptOAuth2.OAuth2;
