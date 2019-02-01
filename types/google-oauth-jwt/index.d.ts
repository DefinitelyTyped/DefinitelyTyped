/// <reference types="node"/>

declare namespace googleAuthJWT {

  interface JWTParams {
    // the email address of the service account (required)
    // this information is obtained via the API console
    email: string,

    // an array of scopes uris to request access to (required)
    // different scopes are available for each application, refer to the app documentation
    // scopes are limitations applied to the API access
    scopes: [string],

    // the cryptographic key as a string, can be the contents of the PEM file
    // the key will be used to sign the JWT and validated by Google OAuth
    key?: Buffer,

    // the path to the PEM file to use for the cryptographic key (ignored if 'key' is also defined)
    // the key will be used to sign the JWT and validated by Google OAuth
    keyFile?: string,

    // the duration of the requested token in milliseconds (optional)
    // default is 1 hour (60 * 60 * 1000), which is the maximum allowed by Google
    expiration?: number,

    // if access is being granted on behalf of someone else, specifies who is impersonating the service account
    delegationEmail?: string
  }

  type TokenCallback = (error: any, token: string) => void;

  function authenticate(options: JWTParams, callback: TokenCallback): void;
  function encodeJWT(options: JWTParams, callback: TokenCallback): void;
  function TokenCache(): TokenCache;
  type TokenCache = {
    get: (options: JWTParams, callback: TokenCallback) => void,
    clear: () => void,
    authenticate: typeof authenticate,
  }
}

declare module 'google-oauth-jwt' {
}

export = googleAuthJWT
