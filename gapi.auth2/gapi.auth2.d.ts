// Type definitions for Google Sign-In API
// Project: https://developers.google.com/identity/sign-in/web/
// Definitions by: Derek Lawless <https://github.com/flawless2011>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../gapi/gapi.d.ts" />

declare module gapi.auth2 {

  // TODO
  export class GoogleAuth {

  }

  // TODO
  export class GoogleUser {

  }

  export function init(params: {
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
       * as described in OpenID 2.0 (Migration) https://developers.google.com/accounts/docs/OpenID#openid-connect.
       */
      openid_realm?: string;
  }): GoogleAuth;

  // TODO
  export function getAuthInstance();
}

declare module gapi.signin {
  // TODO
  export function render(id: any, options: {
    /**
     * The auth scope or scopes to authorize. Auth scopes for individual APIs can be found in their documentation.
     */
    scope?: string;
    width?: number;
    height?: number;
    longtitle?: boolean;
    theme?: string;
    onsuccess?: any;
    onfailure?: any;
    app_package_name?: string;
  });
}
