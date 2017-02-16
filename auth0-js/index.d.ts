// Type definitions for Auth0.js 8.1
// Project: https://github.com/auth0/auth0.js
// Definitions by: Adrian Chia <https://github.com/adrianchia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace auth0 {

    export class Authentication {
        constructor(options: AuthOptions);

        passwordless: PasswordlessAuthentication;
        dbConnection: DBConnection;

        /**
         * Builds and returns the `/authorize` url in order to initialize a new authN/authZ transaction
         *
         * @method buildAuthorizeUrl
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#get--authorize_db
         */
        buildAuthorizeUrl(options: any): string;

        /**
         * Builds and returns the Logout url in order to initialize a new authN/authZ transaction
         *
         * @method buildLogoutUrl
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#get--v2-logout
         */
        buildLogoutUrl(options?: any): string;

        /**
         * Makes a call to the `oauth/token` endpoint with `password` grant type
         *
         * @method loginWithDefaultDirectory
         * @param {Object} options: https://auth0.com/docs/api-auth/grant/password
         * @param {Function} callback
         */
        loginWithDefaultDirectory(options: any, callback: (error?: Auth0Error, authResult?: any) => any): void;

        /**
         * Makes a call to the `/ro` endpoint
         * @param {any}      options
         * @param {Function} callback
         * @deprecated `loginWithResourceOwner` will be soon deprecated, user `login` instead.
         */
        loginWithResourceOwner(options: any, callback: (error?: Auth0Error, authResult?: any) => any): void;

        /**
         * Makes a call to the `oauth/token` endpoint with `password-realm` grant type
         * @param {any}     options
         * @param {Function} callback
         */
        login(options: any, callback: (error?: Auth0Error, authResult?: any) => any): void;

        /**
         * Makes a call to the `oauth/token` endpoint
         * @param {any}      options
         * @param {Function} callback
         */
        oauthToken(options: any, callback: (error?: Auth0Error, authResult?: any) => any): void;

        /**
         * Makes a call to the `/ssodata` endpoint
         *
         * @method getSSOData
         * @param {Boolean} withActiveDirectories
         * @param {Function} callback
         * @deprecated `getSSOData` will be soon deprecated.
         */
        getSSOData(callback?: (error?: Auth0Error, authResult?: any) => any): void;

        /**
         * Makes a call to the `/ssodata` endpoint
         *
         * @method getSSOData
         * @param {Boolean} withActiveDirectories
         * @param {Function} callback
         * @deprecated `getSSOData` will be soon deprecated.
         */
        getSSOData(withActiveDirectories: boolean, callback?: (error?: Auth0Error, authResult?: any) => any): void;

        /**
         * Makes a call to the `/userinfo` endpoint and returns the user profile
         *
         * @method userInfo
         * @param {String} accessToken
         * @param {Function} callback
         */
        userInfo(token: string, callback: (error?: Auth0Error, user?: any) => any): void;

        /**
         * Makes a call to the `/delegation` endpoint
         *
         * @method delegation
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#post--delegation
         * @param {Function} callback
         * @deprecated `delegation` will be soon deprecated.
         */
        delegation(options: any, callback: (error?: Auth0Error, authResult?: Auth0DelegationToken) => any): any;

        /**
         * Fetches the user country based on the ip.
         *
         * @method getUserCountry
         * @param {Function} callback
         */
        getUserCountry(callback: (error?: Auth0Error, result?: any) => any): void;
    }

    export class PasswordlessAuthentication {
        constructor(request: any, option: any);

        /**
         * Builds and returns the passwordless TOTP verify url in order to initialize a new authN/authZ transaction
         *
         * @method buildVerifyUrl
         * @param {Object} options
         * @param {Function} callback
         */
        buildVerifyUrl(options: any): string;

        /**
         * Initializes a new passwordless authN/authZ transaction
         *
         * @method start
         * @param {Object} options: https://auth0.com/docs/api/authentication#passwordless
         * @param {Function} callback
         */
        start(options: PasswordlessStartOptions, callback: any): void;

        /**
         * Verifies the passwordless TOTP and returns an error if any.
         *
         * @method buildVerifyUrl
         * @param {Object} options
         * @param {Function} callback
         */
        verify(options: any, callback: any): void;
    }

    export class DBConnection {
        constructor(request: any, option: any);

        /**
         * Signup a new user
         *
         * @method signup
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#post--dbconnections-signup
         * @param {Function} calback
         */
        signup(options: any, callback: any): void;

        /**
         * Initializes the change password flow
         *
         * @method signup
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#post--dbconnections-change_password
         * @param {Function} callback
         */
        changePassword(options: ChangePasswordOptions, callback: any): void;
    }

    export class Management {
        constructor(options: ManagementOptions);

        /**
         * Returns the user profile. https://auth0.com/docs/api/management/v2#!/Users/get_users_by_id
         *
         * @method getUser
         * @param {String} userId
         * @param {Function} callback
         */
        getUser(userId: string, callback: (error?: Auth0Error, user?: any) => any): void;

        /**
         * Updates the user metdata. It will patch the user metdata with the attributes sent.
         * https://auth0.com/docs/api/management/v2#!/Users/patch_users_by_id
         *
         * @method patchUserMetadata
         * @param {String} userId
         * @param {Object} userMetadata
         * @param {Function} callback
         */
        patchUserMetadata(userId: string, userMetadata: any, callback: (error?: Auth0Error, user?: any) => any): void;

        /**
         * Link two users. https://auth0.com/docs/api/management/v2#!/Users/post_identities
         *
         * @method linkUser
         * @param {String} userId
         * @param {String} secondaryUserToken
         * @param {Function} callback
         */
        linkUser(userId: string, secondaryUserToken: string, callback: (error?: Auth0Error, user?: any) => any): void;
    }

    export class WebAuth {
        constructor(options: AuthOptions);
        client: Authentication;
        popup: Popup;
        redirect: Redirect;

        /**
         * Redirects to the hosted login page (`/authorize`) in order to initialize a new authN/authZ transaction
         *
         * @method authorize
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#get--authorize_db
         */
        authorize(options: any): void;

        /**
         * Parse the url hash and extract the returned tokens depending on the transaction.
         *
         * Only validates id_tokens signed by Auth0 using the RS256 algorithm using the public key exposed
         * by the `/.well-known/jwks.json` endpoint. Id tokens signed with other algorithms will not be
         * accepted.
         *
         * @method parseHash
         * @param {Object} options:
         * @param {String} options.state [OPTIONAL] to verify the response
         * @param {String} options.nonce [OPTIONAL] to verify the id_token
         * @param {String} options.hash [OPTIONAL] the url hash. If not provided it will extract from window.location.hash
         * @param {Function} callback: any(err, token_payload)
         */
        parseHash(options: any, callback: (error?: Auth0Error, authResult?: any) => any): void;

        /**
         * Decodes the id_token and verifies  the nonce.
         *
         * @method validateToken
         * @param {String} token
         * @param {String} state
         * @param {String} nonce
         * @param {Function} callback: function(err, {payload, transaction})
         */
        validateToken(token: string, state: string, nonce: string, callback: any): void;

        /**
         * Executes a silent authentication transaction under the hood in order to fetch a new token.
         *
         * @method renewAuth
         * @param {Object} options: any valid oauth2 parameter to be sent to the `/authorize` endpoint
         * @param {Function} callback
         */
        renewAuth(options: any, callback: (error?: Auth0Error, authResult?: any) => any): void;

        /**
         * Initialices a change password transaction
         *
         * @method changePassword
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#post--dbconnections-change_password
         * @param {Function} callback
         */
        changePassword(options: any, callback: (error?: Auth0Error, authResult?: any) => any): void;

        /**
         * Signs up a new user
         *
         * @method signup
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#post--dbconnections-signup
         * @param {Function} callback
         */
        signup(options: any, callback: any): void;

        /**
         * Signs up a new user, automatically logs the user in after the signup and returns the user token.
         * The login will be done using /oauth/token with password-realm grant type.
         *
         * @method signupAndAuthorize
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#post--dbconnections-signup
         * @param {Function} callback
         */
        signupAndAuthorize(options: any, callback: (error?: Auth0Error, authResult?: any) => any): void;

        /**
         * Redirects to the auth0 logout page
         *
         * @method logout
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#get--v2-logout
         */
        logout(options: any): void;

        passwordlessStart(options: PasswordlessStartOptions, callback: (error?: Auth0Error, data?: any) => any): void;

        /**
         * Verifies the passwordless TOTP and redirects to finish the passwordless transaction
         *
         * @method passwordlessVerify
         * @param {Object} options:
         * @param {Object} options.type: `sms` or `email`
         * @param {Object} options.phoneNumber: only if type = sms
         * @param {Object} options.email: only if type = email
         * @param {Object} options.connection: the connection name
         * @param {Object} options.verificationCode: the TOTP code
         * @param {Function} callback
         */
        passwordlessVerify(options: any, callback: any): void;
    }

    export class Redirect {
        constructor(client: any, options: any);

        /**
         * Initializes the legacy Lock login flow in a popup
         *
         * @method loginWithCredentials
         * @param {Object} options
         * @param {Function} callback
         * @deprecated `webauth.popup.loginWithCredentials` will be soon deprecated, use `webauth.client.login` instead.
         */
        loginWithCredentials(options: any, callback: any): void;

        /**
         * Signs up a new user and automatically logs the user in after the signup.
         *
         * @method signupAndLogin
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#post--dbconnections-signup
         * @param {Function} callback
         */
        signupAndLogin(options: any, callback: any): void;
    }

    export class Popup {
        constructor(client: any, options: any);

        /**
         * Initializes the popup window and returns the instance to be used later in order to avoid being blocked by the browser.
         *
         * @method preload
         * @param {Object} options: receives the window height and width and any other window feature to be sent to window.open
         */
        preload(options: any): any;

        /**
         * Internal use.
         *
         * @method getPopupHandler
         */
        getPopupHandler(options: any, preload: boolean): any;
        /**
         * Opens in a popup the hosted login page (`/authorize`) in order to initialize a new authN/authZ transaction
         *
         * @method authorize
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#get--authorize_db
         * @param {Function} callback
         */
        authorize(options: any, callback: any): void;

        /**
         * Initializes the legacy Lock login flow in a popup
         *
         * @method loginWithCredentials
         * @param {Object} options
         * @param {Function} callback
         * @deprecated `webauth.popup.loginWithCredentials` will be soon deprecated, use `webauth.client.login` instead.
         */
        loginWithCredentials(options: any, callback: any): void;

        /**
         * Verifies the passwordless TOTP and returns the requested token
         *
         * @method passwordlessVerify
         * @param {Object} options:
         * @param {Object} options.type: `sms` or `email`
         * @param {Object} options.phoneNumber: only if type = sms
         * @param {Object} options.email: only if type = email
         * @param {Object} options.connection: the connection name
         * @param {Object} options.verificationCode: the TOTP code
         * @param {Function} callback
         */
        passwordlessVerify(options: any, callback: any): void;

        /**
         * Signs up a new user and automatically logs the user in after the signup.
         *
         * @method signupAndLogin
         * @param {Object} options: https://auth0.com/docs/api/authentication#!#post--dbconnections-signup
         * @param {Function} callback
         */
         signupAndLogin(options: any, callback: any): void;
    }

    interface ManagementOptions {
        domain: string;
        token: string;
        _sendTelemetry?: boolean;
        _telemetryInfo?: any;
    }

    interface AuthOptions {
        domain: string;
        clientID: string;
        responseType?: string;
        responseMode?: string;
        redirectUri?: string;
        scope?: string;
        audience?: string;
        leeway?: number;
        _disableDeprecationWarnings?: boolean;
        _sendTelemetry?: boolean;
        _telemetryInfo?: any;
    }

    interface PasswordlessAuthOptions {
        connection: string;
        verificationCode: string;
        phoneNumber: string;
        email: string;
    }

    interface Auth0Error {
        error: any;
        errorDescription: string;
    }

    interface Auth0DecodedHash {
        accessToken?: string;
        idToken?: string;
        idTokenPayload?: any;
        refreshToken?: string;
        state?: string;
        expiresIn?: number;
        tokenType?: string;
    }

    /** Represents the response from an API Token Delegation request. */
    interface Auth0DelegationToken {
        /** The length of time in seconds the token is valid for. */
        ExpiresIn: number;
        /** The JWT for delegated access.  */
        idToken: string;
        /** The type of token being returned. Possible values: "Bearer"  */
        tokenType: string;
    }

    interface ChangePasswordOptions {
        connection: string;
        email: string;
        password?: string;
    }

    interface PasswordlessStartOptions {
        connection: string;
        send: string;
        phoneNumber?: string;
        email?: string;
        authParams?: any;
    }

    interface PasswordlessVerifyOptions {
        connection: string;
        verificationCode: string;
        phoneNumber?: string;
        email?: string;
    }

}
