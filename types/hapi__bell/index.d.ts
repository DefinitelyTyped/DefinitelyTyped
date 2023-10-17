import { AuthCredentials, Plugin, Request } from "@hapi/hapi";

declare module "@hapi/hapi" {
    interface ServerAuth {
        strategy(name: string, scheme: "bell", options: BellOptions): void;
    }
}

export interface StringLikeMap {
    [key: string]: string | number;
}
export type Provider =
    | "arcgisonline"
    | "auth0"
    | "azure"
    | "bitbucket"
    | "cognito"
    | "digitalocean"
    | "discord"
    | "dropbox"
    | "facebook"
    | "fitbit"
    | "foursquare"
    | "github"
    | "gitlab"
    | "google"
    | "googleplus"
    | "instagram"
    | "linkedin"
    | "live"
    | "medium"
    | "meetup"
    | "mixer"
    | "nest"
    | "okta"
    | "phabricator"
    | "pingfed"
    | "pinterest"
    | "reddit"
    | "salesforce"
    | "slack"
    | "spotify"
    | "stripe"
    | "trakt"
    | "tumblr"
    | "twitch"
    | "twitter"
    | "vk"
    | "wordpress"
    | "yahoo";

export type RequestPassThrough = (request: Request) => PromiseLike<AuthCredentials> | AuthCredentials;

export interface OptionalOptions {
    /**
     * the name of the cookie used to manage the temporary state.
     * Defaults to 'bell-provider' where 'provider' is the provider name (or 'custom' for custom providers).
     * For example, the Twitter cookie name defaults to 'bell-twitter'.
     */
    cookie?: string | undefined;
    /**
     * sets the cookie secure flag.
     * Defaults to true.
     */
    isSecure?: boolean | undefined;
    /**
     * sets the cookie HTTP only flag.
     * Defaults to true.
     */
    isHttpOnly?: boolean | undefined;
    /**
     * cookie time-to-live in milliseconds.
     * Defaults to null (session time-life - cookies are deleted when the browser is closed).
     */
    ttl?: number | undefined;
    /**
     * the domain scope.
     * Defaults to null (no domain).
     */
    domain?: string | undefined;
    /**
     * provider-specific query parameters for the authentication endpoint.
     * It may be passed either as an object to merge into the query string,
     * or a function which takes the client's request and returns an object.
     * Each provider supports its own set of parameters which customize the user's login experience.
     * For example:
     * * Facebook supports `display` ('page', 'popup', or 'touch'), `auth_type`, `auth_nonce`.
     * * Google supports `access_type`, `approval_prompt`, `prompt`, `login_hint`, `user_id`, `hd`.
     * * Twitter supports `force_login`, `screen_name`.
     * * Linkedin supports `fields`.
     */
    providerParams?: StringLikeMap | ((request: Request) => StringLikeMap) | undefined;
    /**
     * allows passing query parameters from a bell protected endpoint to the auth request.
     * It will merge the query params you pass along with the providerParams and any other predefined ones.
     * Be aware that this will override predefined query parameters!
     * Default to false.
     */
    allowRuntimeProviderParams?: StringLikeMap | boolean | undefined;
    /**
     * Each built-in vendor comes with the required scope for basic profile information.
     * Use scope to specify a different scope as required by your application.
     * It may be passed either as an object to merge into the query string,
     * or a function which takes the client's request and returns an object.
     * Consult the provider for their specific supported scopes.
     */
    scope?: string[] | ((request: Request) => string[]) | undefined;
    /**
     * skips obtaining a user profile from the provider.
     * Useful if you need specific scopes,
     * but not the user profile.
     * Defaults to false.
     */
    skipProfile?: boolean | undefined;
    /**
     * a configuration object used to customize the provider settings.
     * The built-in 'twitter' provider accepts the `extendedProfile` & `getMethod` options.
     * option which allows disabling the extra profile request when the provider
     * returns the user information in the callback (defaults to true).
     * The built-in 'github' and 'phabricator' providers accept the uri
     * option which allows pointing to a private enterprise installation (e.g. 'https://vpn.example.com').
     * See Providers documentation for more information.
     */
    config?:
        | { extendedProfile?: boolean | undefined; getMethod?: string | undefined }
        | { uri?: string | undefined }
        | undefined;
    /**
     * an object of key-value pairs that specify additional
     * URL query parameters to send with the profile request to the provider.
     * The built-in facebook provider,
     * for example, could have fields specified to determine the fields returned from the user's graph,
     * which would then be available to you in the auth.credentials.profile.raw object.
     */
    profileParams?: StringLikeMap | undefined;
    /**
     * allows passing additional OAuth state from initial request.
     * This must be a function returning a string,
     * which will be appended to the bell internal state parameter for OAuth code flow.
     */
    runtimeStateCallback?(req: Request): string;

    // THESE ARE IN THE *REQUIRED* section but are actually not...
    /**
     * A boolean indicating whether or not you want the redirect_uri to be forced to https.
     * Useful if your hapi application runs as http, but is accessed through https.
     */
    forceHttps?: boolean | undefined;
    /**
     * Set the base redirect_uri manually if it cannot be inferred properly from server settings.
     * Useful to override port, protocol, and host if proxied or forwarded.
     */
    location?: string | ((req: Request) => string) | undefined;
}

export interface RequiredProviderOptions {
    /**
     * the cookie encryption password.
     * Used to encrypt the temporary state cookie used by the module in
     * between the authorization protocol steps.
     */
    password: string;
    /**
     * the OAuth client identifier (consumer key).
     */
    clientId: string;
    /**
     * the OAuth client secret (consumer secret)
     */
    clientSecret: string;
}

export interface KnownProviderOptions extends RequiredProviderOptions, OptionalOptions {
    provider: Provider;
}

/**
 * @param uri the requested resource URI (bell will add the token or authentication header as needed).
 * @param params any URI query parameters (cannot include them in the URI due to signature requirements).
 */
export type AuthedRequest = (uri: string, params?: { [key: string]: string }) => Promise<object>;

export interface Credentials {
    provider: Provider | "custom";
    token: string;
    query: StringLikeMap;
    /**
     * Varying data depending on provider.
     */
    profile?: object | undefined;
}

export interface Credentials1 extends Credentials {
    secret: string;
}

export interface Credentials2 extends Credentials {
    refreshToken?: string | undefined;
    expiresIn?: number | undefined;
}

export interface CustomProtocol {
    /**
     * The name of the protocol.
     * @default custom
     */
    name?: string | undefined;
    /**
     * the authorization endpoint URI.
     */
    auth: string;
    /**
     * the access token endpoint URI.
     */
    token: string;
    /**
     * a headers object with additional headers required by the provider
     * (e.g. GitHub required the 'User-Agent' header which is set by default).
     */
    headers?: {
        [key: string]: string;
    } | undefined;
}

/**
 * a function used to obtain user profile information and normalize it.
 * @param credentials the credentials object.
 * Change the object directly within the function (profile information is typically stored under credentials.profile).
 * @param params the parsed information received from the provider (e.g. token, secret, and other custom fields).
 * @param get an OAuth helper function to make authenticated requests using the credentials received.
 */
export type ProfileGetter<C extends Credentials> = (
    this: CustomProviderOptions,
    credentials: C,
    params: { [key: string]: string },
    get: AuthedRequest,
) => Promise<void>;

export interface CustomProtocol1 extends CustomProtocol {
    /**
     * the authorization protocol used.
     */
    protocol: "oauth";

    /**
     * the OAuth signature method. Must be one of:
     * * 'HMAC-SHA1' - default
     * * 'RSA-SHA1' - in that case, the clientSecret is your RSA private key
     */
    signatureMethod?: "HMAC-SHA1" | "RSA-SHA1" | undefined;
    /**
     * the temporary credentials (request token) endpoint).
     */
    temporary?: string | undefined;

    profile: ProfileGetter<Credentials1>;
}

export type PkceSetting = "plain" | "S256";

export interface CustomProtocol2 extends CustomProtocol {
    /**
     * the authorization protocol used.
     */
    protocol: "oauth2";
    /**
     * an array of scope strings.
     */
    scope?: string[] | ((query: StringLikeMap) => string[]) | undefined;
    /**
     * boolean that determines if OAuth client id and client secret will be sent
     * as parameters as opposed to an Authorization header.
     * Defaults to false.
     */
    useParamsAuth?: boolean | undefined;

    /**
     * If specified, uses proof key exchange.
     */
    pkce?: PkceSetting | undefined;

    /**
     * the scope separator character. Only required when a provider has a broken OAuth 2.0 implementation. Defaults to space (Facebook and GitHub default to comma).
     */
    scopeSeparator?: string | undefined;

    profile: ProfileGetter<Credentials2>;
}

export interface CustomProviderOptions extends RequiredProviderOptions, OptionalOptions {
    provider: CustomProtocol1 | CustomProtocol2;
}

export type BellOptions = CustomProviderOptions | KnownProviderOptions;

export const plugin: Plugin<BellOptions>;
/**
 * Enables simulation mode.
 */
export function simulate(credentialsFunc: RequestPassThrough): void;
/**
 * [See docs](https://github.com/hapijs/bell/blob/master/API.md#simulated-authentication)
 * Disables simulation mode
 */
export function simulate(state: false): void;
