// Type definitions for non-npm package google-apps-script-oauth2 24.0
// Project: https://github.com/googlesamples/apps-script-oauth2
// Definitions by: dhayab <https://github.com/dhayab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="google-apps-script" />

declare namespace GoogleAppsScriptOAuth2 {
    interface OAuth2 {
        /**
         * The supported locations for passing the state parameter.
         */
        STATE_PARAMETER_LOCATION: typeof StateParameterLocation;
        /**
         * The supported formats for the returned OAuth2 token.
         */
        TOKEN_FORMAT: typeof TokenFormat;
        /**
         * Creates a new OAuth2 service with the name specified.
         * It's usually best to create and configure your service once at the start of your script,
         * and then reference them during the different phases of the authorization flow.
         */
        createService(serviceName: string): OAuth2Service;
        /**
         * Returns the redirect URI that will be used for a given script.
         * Often this URI needs to be entered into a configuration screen of your OAuth provider.
         */
        getRedirectUri(scriptId: string): string;
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
         */
        getAuthorizationUrl(): string;
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
         */
        getToken(): object | null;
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
         * Resets the service, removing access and requiring the service to be re-authorized.
         */
        reset(): void;
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
         * Sets the scope or scopes to request during the authorization flow (optional).
         * If the scope value is an array it will be joined using the separator before being sent to the server,
         * which is is a space character by default.
         */
        setScope(scope: string | string[], separator?: string): OAuth2Service;
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

    enum StateParameterLocation {
        /**
         * Pass the state parameter in the authorization URL.
         */
        AUTHORIZATION_URL,
        /**
         * Pass the state token in the redirect URL, as a workaround for APIs that don't support the state parameter.
         */
        REDIRECT_URL,
    }

    enum TokenFormat {
        /**
         * JSON format, for example `{"access_token": "..."}`.
         */
        JSON,
        /**
         * Form URL-encoded, for example `access_token=...`.
         */
        FORM_URL_ENCODED,
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
