// Type definitions for pinterest-sdk
// Project: https://assets.pinterest.com/sdk/sdk.js
// Definitions by: Adam Burmister <https://github.com/adamburmister>
// Definitions: https://github.com/adamburmister/DefinitelyTyped

export = PDK;
export as namespace PDK;

declare namespace PDK {

  enum OAuthScopes { 'read_public', 'write_public', 'read_relationships', 'write_relationships' }

  enum HttpMethod { 'get', 'put', 'post', 'delete' }

  type OauthSession = {
    accessToken?: string;
    scope?: string;
    error?: string;
  }

  interface LoginOptions {
    scope: string|OAuthScopes;
    method?: string;
    appId?: string;
    cookie?: boolean;
    logging?: boolean;
    session?: OauthSession;
  }

  interface OAuthRequestParams {
    accessToken?: string;
    data?: any;
  }

  interface InitOptions {
    /** Your application ID from developer.pinterest.com */
    appId?: string;
    cookie?: boolean;
    logging?: boolean;
    session?: OauthSession;
  }

  interface PinData {
    board: string;
    note: string;
    link: string;
    image_url: string;
  }

  /**
   * Get information on the currently authenticated user
   * @param cb     the callback export function to handle the response
   */
  export function me(callback: Function): void;

  /**
   * Get information on the currently authenticated user
   * @param path   the url path
   * @param cb     the callback export function to handle the response
   */
  export function me(path: string, callback: Function): void;

  /**
   * Get information on the currently authenticated user
   * @param path   the url path
   * @param params the parameters for the request
   * @param cb     the callback export function to handle the response
   */
  export function me(path: string, params: Object, callback: Function): void;

  /**
   * Make an API call to the server
   *
   * The path is the only required argument.
   *
   * @param path   URL path
   * @param httpMethod HTTP verb
   */
    export function request(path: string, httpMethod?: string|HttpMethod, data?: PinData, callback?: Function): void;

  /**
   * Show user login dialog, and save access token
   */
  export function login(options: LoginOptions, callback: Function): void;

  /**
   * Remove the session of the current user.
   *
   * Need to call login to re-connect, unless session is saved on server.
   */
  export function logout(callback?: (session: OauthSession) => any): void;

  /**
   * Get the active session for the current user
   */
  export function getSession(): OauthSession;

  /**
   * Save the user specified session
   */
  export function setSession(session: OauthSession, callback?: (session: OauthSession) => any): void;

  /**
   * Initialize the library.
   *
   * Typical initialization enabling all optional features:
   * ```
    *      <script src="pin-sdk.js"></script>
    *      <script>
    *        PDK.init({
    *          appId  : 'YOUR APP ID',
    *          cookie : true // enable cookies to allow the server to access the session
    *        });
    *      </script>
    * ```
    * The best place to put this code is right before the closing
    * `</body>` tag.
    *
    * - Asynchronous Loading -
    *
    * The library makes non-blocking loading of the script easy to use by
    * providing the `pAsyncInit` hook. If this global export function is defined, it
    * will be executed when the library is loaded:
    * ```
    *     <div id="p-root"></div>
    *     <script>
    *       window.pAsyncInit = function() {
    *         PDK.init({
    *           appId  : 'YOUR APP ID',
    *           cookie : true // enable cookies to allow the server to access the session
    *         });
    *       };
    *
    *       (function() {
    *         var e = document.createElement('script');
    *         e.src = 'pin-sdk.js';
    *         e.async = true;
    *         document.getElementById('p-root').appendChild(e);
    *       }());
    *     </script>
    * ```
    */
  export function init(options: InitOptions): void;

  /**
   * Allow an unauthenticated user to pin using a popup
   *
   * @param imageUrl URL for image that you want to Pin.
   * @param note     The Pin's description.
   * @param url      The URL the Pin will link to when you click through.
   */
  export function pin(imageUrl: string, note: string, url: string, callback: Function): void;
}
