// Type definitions for keycloak-js 2.5
// Project: https://github.com/keycloak/keycloak
// Definitions by: Brett Epps <https://github.com/eppsilon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Keycloak;

export = Keycloak;

/**
 * Creates a new Keycloak client instance.
 * @param config Path to a JSON config file or a plain config object.
 */
declare function Keycloak(config?: string|{}): Keycloak.KeycloakInstance;

declare namespace Keycloak {
	type KeycloakAdapterName = 'cordova'|'default';
	type KeycloakOnLoad = 'login-required'|'check-sso';
	type KeycloakResponseMode = 'query'|'fragment';
	type KeycloakResponseType = 'code'|'id_token token'|'code id_token token';
	type KeycloakFlow = 'standard'|'implicit'|'hybrid';

	interface KeycloakInitOptions {
		/**
		 * @private Undocumented.
		 */
		adapter?: KeycloakAdapterName;

		/**
		 * Specifies an action to do on load.
		 */
		onLoad?: KeycloakOnLoad;

		/**
		 * Set an initial value for the token.
		 */
		token?: string;

		/**
		 * Set an initial value for the refresh token.
		 */
		refreshToken?: string;

		/**
		 * Set an initial value for the id token (only together with `token` or
		 * `refreshToken`).
		 */
		idToken?: string;

		/**
		 * Set an initial value for skew between local time and Keycloak server in
		 * seconds (only together with `token` or `refreshToken`).
		 */
		timeSkew?: number;

		/**
		 * Set to enable/disable monitoring login state.
		 * @default true
		 */
		checkLoginIframe?: boolean;

		/**
		 * Set the interval to check login state (in seconds).
		 * @default 5
		 */
		checkLoginIframeInterval?: boolean;

		/**
		 * Set the OpenID Connect response mode to send to Keycloak upon login.
		 * @default fragment After successful authentication Keycloak will redirect
		 *                   to JavaScript application with OpenID Connect parameters
		 *                   added in URL fragment. This is generally safer and
		 *                   recommended over query.
		 */
		responseMode?: KeycloakResponseMode;

		/**
		 * Set the OpenID Connect flow.
		 * @default standard
		 */
		flow?: KeycloakFlow;
	}

	interface KeycloakLoginOptions {
		/**
		 * @private Undocumented.
		 */
		scope?: string;

		/**
		 * Specifies the uri to redirect to after login.
		 */
		redirectUri?: string;

		/**
		 * By default the login screen is displayed if the user is not logged into
		 * Keycloak. To only authenticate to the application if the user is already
		 * logged in and not display the login page if the user is not logged in, set
		 * this option to `'none'`. To always require re-authentication and ignore
		 * SSO, set this option to `'login'`.
		 */
		prompt?: 'none'|'login';

		/**
		 * If value is `'register'` then user is redirected to registration page,
		 * otherwise to login page.
		 */
		action?: 'register';

		/**
		 * Used just if user is already authenticated. Specifies maximum time since
		 * the authentication of user happened. If user is already authenticated for
		 * longer time than `'maxAge'`, the SSO is ignored and he will need to
		 * authenticate again.
		 */
		maxAge?: number;

		/**
		 * Used to pre-fill the username/email field on the login form.
		 */
		loginHint?: string;

		/**
		 * Used to tell Keycloak which IDP the user wants to authenticate with.
		 */
		idpHint?: string;

		/**
		 * Specifies the desired locale for the UI.
		 */
		locale?: string;
	}

	type KeycloakPromiseCallback<T> = (result: T) => void;

	interface KeycloakPromise<TSuccess, TError> {
		/**
		 * Function to call if the promised action succeeds.
		 */
		success(callback: KeycloakPromiseCallback<TSuccess>): KeycloakPromise<TSuccess, TError>;

		/**
		 * Function to call if the promised action throws an error.
		 */
		error(callback: KeycloakPromiseCallback<TError>): KeycloakPromise<TSuccess, TError>;
	}

	interface KeycloakError {
		error: string;
		error_description: string;
	}

	interface KeycloakAdapter {
		login(options?: KeycloakLoginOptions): KeycloakPromise<void, void>;
		logout(options?: any): KeycloakPromise<void, void>;
		register(options?: KeycloakLoginOptions): KeycloakPromise<void, void>;
		accountManagement(): KeycloakPromise<void, void>;
		redirectUri(options: { redirectUri: string; }, encodeHash: boolean): string;
	}

	interface KeycloakProfile {
		id?: string;
		username?: string;
		email?: string;
		firstName?: string;
		lastName?: string;
		enabled?: boolean;
		emailVerified?: boolean;
		totp?: boolean;
		createdTimestamp?: number;
	}

	// export interface KeycloakUserInfo {}

	/**
	 * A client for the Keycloak authentication server.
	 * @see {@link https://keycloak.gitbooks.io/securing-client-applications-guide/content/topics/oidc/javascript-adapter.html|Keycloak JS adapter documentation}
	 */
	interface KeycloakInstance {
		/**
		 * Is true if the user is authenticated, false otherwise.
		 */
		authenticated?: boolean;

		/**
		 * The user id.
		 */
		subject?: string;

		/**
		 * Response mode passed in init (default value is `'fragment'`).
		 */
		responseMode?: KeycloakResponseMode;

		/**
		 * Response type sent to Keycloak with login requests. This is determined
		 * based on the flow value used during initialization, but can be overridden
		 * by setting this value.
		 */
		responseType?: KeycloakResponseType;

		/**
		 * Flow passed in init.
		 */
		flow?: KeycloakFlow;

		/**
		 * The realm roles associated with the token.
		 */
		realmAccess?: { roles: string[] };

		/**
		 * The resource roles associated with the token.
		 */
		resourceAccess?: string[];

		/**
		 * The base64 encoded token that can be sent in the Authorization header in
		 * requests to services.
		 */
		token?: string;

		/**
		 * The parsed token as a JavaScript object.
		 */
		tokenParsed?: {
			exp?: number;
			iat?: number;
			nonce?: string;
			sub?: string;
			session_state?: string;
			realm_access?: { roles: string[] };
			resource_access?: string[];
		};

		/**
		 * The base64 encoded refresh token that can be used to retrieve a new token.
		 */
		refreshToken?: string;

		/**
		 * The parsed refresh token as a JavaScript object.
		 */
		refreshTokenParsed?: { nonce?: string };

		/**
		 * The base64 encoded ID token.
		 */
		idToken?: string;

		/**
		 * The parsed id token as a JavaScript object.
		 */
		idTokenParsed?: { nonce?: string };

		/**
		 * The estimated time difference between the browser time and the Keycloak
		 * server in seconds. This value is just an estimation, but is accurate
		 * enough when determining if a token is expired or not.
		 */
		timeSkew?: number;

		/**
		 * @private Undocumented.
		 */
		loginRequired?: boolean;

		/**
		 * @private Undocumented.
		 */
		authServerUrl?: string;

		/**
		 * @private Undocumented.
		 */
		realm?: string;

		/**
		 * @private Undocumented.
		 */
		clientId?: string;

		/**
		 * @private Undocumented.
		 */
		clientSecret?: string;

		/**
		 * @private Undocumented.
		 */
		redirectUri?: string;

		/**
		 * @private Undocumented.
		 */
		sessionId?: string;

		/**
		 * @private Undocumented.
		 */
		profile?: KeycloakProfile;

		/**
		 * @private Undocumented.
		 */
		userInfo?: {}; // KeycloakUserInfo;

		/**
		 * Called when the adapter is initialized.
		 */
		onReady?(authenticated?: boolean): void;

		/**
		 * Called when a user is successfully authenticated.
		 */
		onAuthSuccess?(): void;

		/**
		 * Called if there was an error during authentication.
		 */
		onAuthError?(errorData: KeycloakError): void;

		/**
		 * Called when the token is refreshed.
		 */
		onAuthRefreshSuccess?(): void;

		/**
		 * Called if there was an error while trying to refresh the token.
		 */
		onAuthRefreshError?(): void;

		/**
		 * Called if the user is logged out (will only be called if the session
		 * status iframe is enabled, or in Cordova mode).
		 */
		onAuthLogout?(): void;

		/**
		 * Called when the access token is expired. If a refresh token is available
		 * the token can be refreshed with Keycloak#updateToken, or in cases where
		 * it's not (ie. with implicit flow) you can redirect to login screen to
		 * obtain a new access token.
		 */
		onTokenExpired?(): void;

		/**
		 * Called to initialize the adapter.
		 * @param initOptions Initialization options.
		 * @returns A promise to set functions to be invoked on success or error.
		 */
		init(initOptions: KeycloakInitOptions): KeycloakPromise<boolean, KeycloakError>;

		/**
		 * Redirects to login form.
		 * @param options Login options.
		 */
		login(options?: KeycloakLoginOptions): KeycloakPromise<void, void>;

		/**
		 * Redirects to logout.
		 * @param options Logout options.
		 * @param options.redirectUri Specifies the uri to redirect to after logout.
		 */
		logout(options?: any): KeycloakPromise<void, void>;

		/**
		 * Redirects to registration form.
		 * @param options Supports same options as Keycloak#login but `action` is
		 *                set to `'register'`.
		 */
		register(options?: any): KeycloakPromise<void, void>;

		/**
		 * Redirects to the Account Management Console.
		 */
		accountManagement(): KeycloakPromise<void, void>;

		/**
		 * Returns the URL to login form.
		 * @param options Supports same options as Keycloak#login.
		 */
		createLoginUrl(options?: KeycloakLoginOptions): string;

		/**
		 * Returns the URL to logout the user.
		 * @param options Logout options.
		 * @param options.redirectUri Specifies the uri to redirect to after logout.
		 */
		createLogoutUrl(options?: any): string;

		/**
		 * Returns the URL to registration page.
		 * @param options Supports same options as Keycloak#createLoginUrl but
		 *                `action` is set to `'register'`.
		 */
		createRegisterUrl(options?: KeycloakLoginOptions): string;

		/**
		 * Returns the URL to the Account Management Console.
		 */
		createAccountUrl(): string;

		/**
		 * Returns true if the token has less than `minValidity` seconds left before
		 * it expires.
		 * @param minValidity If not specified, `0` is used.
		 */
		isTokenExpired(minValidity?: number): boolean;

		/**
		 * If the token expires within `minValidity` seconds, the token is refreshed.
		 * If the session status iframe is enabled, the session status is also
		 * checked.
		 * @returns A promise to set functions that can be invoked if the token is
		 *          still valid, or if the token is no longer valid.
		 * @example
		 * ```js
		 * keycloak.updateToken(5).success(function(refreshed) {
		 *   if (refreshed) {
		 *     alert('Token was successfully refreshed');
		 *   } else {
		 *     alert('Token is still valid');
		 *   }
		 * }).error(function() {
		 *   alert('Failed to refresh the token, or the session has expired');
		 * });
		 */
		updateToken(minValidity: number): KeycloakPromise<boolean, boolean>;

		/**
		 * Clears authentication state, including tokens. This can be useful if
		 * the application has detected the session was expired, for example if
		 * updating token fails. Invoking this results in Keycloak#onAuthLogout
		 * callback listener being invoked.
		 */
		clearToken(): void;

		/**
		 * Returns true if the token has the given realm role.
		 * @param role A realm role name.
		 */
		hasRealmRole(role: string): boolean;

		/**
		 * Returns true if the token has the given role for the resource.
		 * @param role A role name.
		 * @param resource If not specified, `clientId` is used.
		 */
		hasResourceRole(role: string, resource?: string): boolean;

		/**
		 * Loads the user's profile.
		 * @returns A promise to set functions to be invoked on success or error.
		 */
		loadUserProfile(): KeycloakPromise<KeycloakProfile, void>;

		/**
		 * @private Undocumented.
		 */
		loadUserInfo(): KeycloakPromise<{}, void>;
	}
}
