// Type definitions for non-npm package Google Sign-In API 0.0
// Project: https://developers.google.com/identity/sign-in/web/
// Definitions by: Derek Lawless <https://github.com/flawless2011>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="gapi" />

declare namespace gapi.auth2 {
  /**
   * GoogleAuth is a singleton class that provides methods to allow the user to sign in with a Google account,
   * get the user's current sign-in status, get specific data from the user's Google profile,
   * request additional scopes, and sign out from the current account.
   */
  class GoogleAuth {
    isSignedIn: IsSignedIn;

    currentUser: CurrentUser;

    /**
     * Calls the onInit function when the GoogleAuth object is fully initialized, or calls the onFailure function if
     * initialization fails.
     */
    then(onInit: (googleAuth: GoogleAuth) => any, onFailure?: (reason: {error: string, details: string}) => any): any;

    /**
     * Signs in the user using the specified options.
     * If no option specified here, fallback to the options specified to gapi.auth2.init().
     */
    signIn(options?: SigninOptions | SigninOptionsBuilder): Promise<GoogleUser>;

    /**
     * Signs out all accounts from the application.
     */
    signOut(): any;

    /**
     * Revokes all of the scopes that the user granted.
     */
    disconnect(): any;

    /**
     * Get permission from the user to access the specified scopes offline.
     */
    grantOfflineAccess(options?: OfflineAccessOptions): Promise<{code: string}>;

    /**
     * Attaches the sign-in flow to the specified container's click handler.
     */
    attachClickHandler(container: any, options: SigninOptions,
                       onsuccess: (googleUser: GoogleUser) => any, onfailure: (reason: string) => any): any;
  }

  interface IsSignedIn {
    /**
     * Returns whether the current user is currently signed in.
     */
    get(): boolean;

    /**
     * Listen for changes in the current user's sign-in state.
     */
    listen(listener: (signedIn: boolean) => any): void;
  }

  interface CurrentUser {
    /**
     * Returns a GoogleUser object that represents the current user. Note that in a newly-initialized
     * GoogleAuth instance, the current user has not been set. Use the currentUser.listen() method or the
     * GoogleAuth.then() to get an initialized GoogleAuth instance.
     */
    get(): GoogleUser;

    /**
     * Listen for changes in currentUser.
     */
    listen(listener: (user: GoogleUser) => any): void;
  }

  interface SigninOptions {
    /**
     * The package name of the Android app to install over the air.
     * See Android app installs from your web site:
     * https://developers.google.com/identity/sign-in/web/android-app-installs
     */
    app_package_name?: string;
    /**
     * 	Fetch users' basic profile information when they sign in.
     * 	Adds 'profile', 'email' and 'openid' to the requested scopes.
     * 	True if unspecified.
     */
    fetch_basic_profile?: boolean;
    /**
     * Specifies whether to prompt the user for re-authentication.
     * See OpenID Connect Request Parameters:
     * https://openid.net/specs/openid-connect-basic-1_0.html#RequestParameters
     */
    prompt?: string;
    /**
     * The scopes to request, as a space-delimited string.
     * Optional if fetch_basic_profile is not set to false.
     */
    scope?: string;
    /**
     * The UX mode to use for the sign-in flow.
     * By default, it will open the consent flow in a popup.
     */
    ux_mode?: "popup" | "redirect";
    /**
     * If using ux_mode='redirect', this parameter allows you to override the default redirect_uri that will be used at the end of the consent flow.
     * The default redirect_uri is the current URL stripped of query parameters and hash fragment.
     */
    redirect_uri?: string;
  }

  /**
   * Definitions by: John <https://github.com/jhcao23>
   * Interface that represents the different configuration parameters for the GoogleAuth.grantOfflineAccess(options) method.
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2offlineaccessoptions
   */
  interface OfflineAccessOptions {
    scope?: string;
    prompt?: "select_account" | "consent";
    app_package_name?: string;
  }

  /**
   * Interface that represents the different configuration parameters for the gapi.auth2.init method.
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
   */
  interface ClientConfig {
    /**
     * The app's client ID, found and created in the Google Developers Console.
     */
    client_id?: string;

    /**
     * The domains for which to create sign-in cookies. Either a URI, single_host_origin, or none.
     * Defaults to single_host_origin if unspecified.
     */
    cookie_policy?: string;

    /**
     * The scopes to request, as a space-delimited string. Optional if fetch_basic_profile is not set to false.
     */
    scope?: string;

    /**
     * Fetch users' basic profile information when they sign in. Adds 'profile' and 'email' to the requested scopes. True if unspecified.
     */
    fetch_basic_profile?: boolean;

    /**
     * The Google Apps domain to which users must belong to sign in. This is susceptible to modification by clients,
     * so be sure to verify the hosted domain property of the returned user. Use GoogleUser.getHostedDomain() on the client,
     * and the hd claim in the ID Token on the server to verify the domain is what you expected.
     */
    hosted_domain?: string;

    /**
     * Used only for OpenID 2.0 client migration. Set to the value of the realm that you are currently using for OpenID 2.0,
     * as described in <a href="https://developers.google.com/accounts/docs/OpenID#openid-connect">OpenID 2.0 (Migration)</a>.
     */
    openid_realm?: string;

    /**
     * The UX mode to use for the sign-in flow.
     * By default, it will open the consent flow in a popup.
     */
    ux_mode?: "popup" | "redirect";

    /**
     * If using ux_mode='redirect', this parameter allows you to override the default redirect_uri that will be used at the end of the consent flow.
     * The default redirect_uri is the current URL stripped of query parameters and hash fragment.
     */
    redirect_uri?: string;
  }

  class SigninOptionsBuilder {
    setAppPackageName(name: string): any;
    setFetchBasicProfile(fetch: boolean): any;
    setPrompt(prompt: string): any;
    setScope(scope: string): any;
  }

  interface BasicProfile {
    getId(): string;
    getName(): string;
    getGivenName(): string;
    getFamilyName(): string;
    getImageUrl(): string;
    getEmail(): string;
  }

  /**
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2authresponse
   */
  interface AuthResponse {
    access_token: string;
    id_token: string;
    login_hint: string;
    scope: string;
    expires_in: number;
    first_issued_at: number;
    expires_at: number;
  }

  /**
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2authorizeconfig
   */
  interface AuthorizeConfig {
    client_id: string;
    scope: string;
    response_type?: string;
    prompt?: string;
    cookie_policy?: string;
    hosted_domain?: string;
    login_hint?: string;
    app_package_name?: string;
    openid_realm?: string;
    include_granted_scopes?: boolean;
  }

  /**
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2authorizeresponse
   */
  interface AuthorizeResponse {
    access_token: string;
    id_token: string;
    code: string;
    scope: string;
    expires_in: number;
    first_issued_at: number;
    expires_at: number;
    error: string;
    error_subtype: string;
  }

  /**
   * A GoogleUser object represents one user account.
   */
  interface GoogleUser {
    /**
     * Get the user's unique ID string.
     */
    getId(): string;

    /**
     * Returns true if the user is signed in.
     */
    isSignedIn(): boolean;

    /**
     * Get the user's Google Apps domain if the user signed in with a Google Apps account.
     */
    getHostedDomain(): string;

    /**
     * Get the scopes that the user granted as a space-delimited string.
     */
    getGrantedScopes(): string;

    /**
     * Get the user's basic profile information.
     */
    getBasicProfile(): BasicProfile;

    /**
     * Get the response object from the user's auth session.
     */
    getAuthResponse(includeAuthorizationData?: boolean): AuthResponse;

    /**
     * Forces a refresh of the access token, and then returns a Promise for the new AuthResponse.
     */
    reloadAuthResponse(): Promise<AuthResponse>;

    /**
     * Returns true if the user granted the specified scopes.
     */
    hasGrantedScopes(scopes: string): boolean;

    /**
     * Signs in the user. Use this method to request additional scopes for incremental
     * authorization or to sign in a user after the user has signed out.
     * When you use GoogleUser.signIn(), the sign-in flow skips the account chooser step.
     * See GoogleAuth.signIn().
     */
    signIn(options?: SigninOptions | SigninOptionsBuilder): any;

    /**
     * See GoogleUser.signIn()
     */
    grant(options?: SigninOptions | SigninOptionsBuilder): any;

    /**
     * Get permission from the user to access the specified scopes offline.
     * When you use GoogleUser.grantOfflineAccess(), the sign-in flow skips the account chooser step.
     * See GoogleUser.grantOfflineAccess().
     */
    grantOfflineAccess(scopes: string): void;

    /**
     * Revokes all of the scopes that the user granted.
     */
    disconnect(): void;
  }

  /**
   * Initializes the GoogleAuth object.
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2initparams
   */
  function init(params: ClientConfig): GoogleAuth;

  /**
   * Returns the GoogleAuth object. You must initialize the GoogleAuth object with gapi.auth2.init() before calling this method.
   */
  function getAuthInstance(): GoogleAuth;

  /**
   * Performs a one time OAuth 2.0 authorization.
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2authorizeparams-callback
   */
  function authorize(params: AuthorizeConfig, callback: (response: AuthorizeResponse) => void): void;
}

declare namespace gapi.signin2 {
  function render(id: any, options: {
    /**
     * The auth scope or scopes to authorize. Auth scopes for individual APIs can be found in their documentation.
     */
    scope?: string;

    /**
     * The width of the button in pixels (default: 120).
     */
    width?: number;

    /**
     * The height of the button in pixels (default: 36).
     */
    height?: number;

    /**
     * Display long labels such as "Sign in with Google" rather than "Sign in" (default: false).
     */
    longtitle?: boolean;

    /**
     * The color theme of the button: either light or dark (default: light).
     */
    theme?: string;

    /**
     * The callback function to call when a user successfully signs in (default: none).
     */
    onsuccess?(user: auth2.GoogleUser): void;

    /**
     * The callback function to call when sign-in fails (default: none).
     */
    onfailure?(reason: { error: string }): void;

    /**
     * The package name of the Android app to install over the air. See
     * <a href="https://developers.google.com/identity/sign-in/web/android-app-installs">Android app installs from your web site</a>.
     * Optional. (default: none)
     */
    app_package_name?: string;
  }): void;
}
