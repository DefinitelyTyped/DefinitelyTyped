export interface Providers {
    Apple: Apple;
    Atlassian: Atlassian;
    Auth0: Auth0;
    Basecamp: Basecamp;
    BattleNet: BattleNet;
    Box: Box;
    Cognito: Cognito;
    Credentials: Credentials;
    Discord: Discord;
    Email: Email;
    Facebook: Facebook;
    FusionAuth: FusionAuth;
    GitHub: GitHub;
    GitLab: GitLab;
    Google: Google;
    IdentityServer4: IdentityServer4;
    LinkedIn: LinkedIn;
    Okta: Okta;
    Reddit: Reddit;
    Slack: Slack;
    Spotify: Spotify;
    Twitch: Twitch;
    Twitter: Twitter;
    Yandex: Yandex;
}

type PossibleProviders = Providers[keyof Providers];

// TODO: type return objects from providers properly
interface GenericReturnConfig extends Record<string, any> {}

// https://next-auth.js.org/configuration/providers
interface ProviderReturn {
    id: string;
    name: string;
    type: string;
    version: string;
    scope?: unknown[] | string;
    params?: Record<string, unknown>;
    accessTokenUrl: string;
    requestTokenUrl?: string;
    authorizationUrl: string;
    profileUrl?: string;
    profile?: string;
    clientId: string;
    clientSecret?: unknown;
    idToken?: boolean;
    state?: boolean;
}

declare const Providers: Providers;
export default Providers;
export { PossibleProviders };

interface CommonCredentialOptions<T = string> {
    name?: string;
    clientId: string;
    clientSecret: T;
}

type Provider<T> = (options: T) => ProviderReturn;

/**
 * Email
 */
type Email = Provider<ProviderEmailOptions>;

interface VerificationRequestParams {
    identifier: string;
    url: string;
    baseUrl: string;
    token: string;
    provider: ProviderEmailOptions;
}

interface ProviderEmailOptions {
    name?: string;
    server?: string | ProviderEmailServer;
    from?: string;
    maxAge?: number;
    sendVerificationRequest?: (options: VerificationRequestParams) => Promise<void>;
}

interface ProviderEmailServer {
    host: string;
    port: number;
    auth: ProviderEmailAuth;
}

interface ProviderEmailAuth {
    user: string;
    pass: string;
}

/**
 * Credentials
 */
type Credentials = Provider<ProviderCredentialsOptions>;

interface ProviderCredentialsOptions {
    id?: string;
    name: string;
    credentials: CredentialInput;
    authorize(credentials: Record<string, string>): Promise<GenericReturnConfig | null>;
}

interface CredentialInput {
    [key: string]: {
        label?: string;
        type?: string;
        value?: string;
        placeholder?: string;
    };
}

/**
 * Apple
 */
type Apple = Provider<CommonCredentialOptions<ProviderAppleSecret>>;

interface ProviderAppleSecret {
    appleId: string;
    teamId: string;
    privateKey: string;
    keyId: string;
}

/**
 * Twitter
 */
type Twitter = Provider<CommonCredentialOptions>;

/**
 * Facebook
 */
type Facebook = Provider<CommonCredentialOptions>;

/**
 * GitHub
 */
type GitHub = Provider<ProviderGitHubOptions>;

interface ProviderGitHubOptions extends CommonCredentialOptions {
    scope?: string;
}

/**
 * GitLab
 */
type GitLab = Provider<CommonCredentialOptions>;

/**
 * Slack
 */
type Slack = Provider<CommonCredentialOptions>;

/**
 * Google
 */
type Google = Provider<ProviderGoogleOptions>;

interface ProviderGoogleOptions extends CommonCredentialOptions {
    authorizationUrl?: string;
}

/**
 * Auth0
 */
type Auth0 = Provider<ProviderAuth0Options>;

interface ProviderAuth0Options extends CommonCredentialOptions {
    domain: string;
}

/**
 * IS4
 */

type IdentityServer4 = Provider<ProviderIS4Options>;

interface ProviderIS4Options {
    id: string;
    name: string;
    scope: string;
    domain: string;
    clientId: string;
    clientSecret: string;
}

/**
 * Discord
 */
type Discord = Provider<DiscordCredentialOptions>;

interface DiscordCredentialOptions extends CommonCredentialOptions {
    scope: string;
}

/**
 * Twitch
 */
type Twitch = Provider<CommonCredentialOptions>;

/**
 * Okta
 */
type Okta = Provider<ProviderOktaOptions>;

interface ProviderOktaOptions extends CommonCredentialOptions {
    domain: string;
}

/**
 * Battle.net
 */
type BattleNet = Provider<ProviderBattleNetOptions>;

interface ProviderBattleNetOptions extends CommonCredentialOptions {
    region: string;
}

/**
 * Box
 */
type Box = Provider<CommonCredentialOptions>;

/**
 * Cognito
 */
type Cognito = Provider<ProviderCognitoOptions>;

interface ProviderCognitoOptions extends CommonCredentialOptions {
    domain: string;
}

/**
 * Yandex
 */
type Yandex = Provider<CommonCredentialOptions>;

/**
 * LinkedIn
 */
type LinkedIn = Provider<ProviderLinkedInOptions>;

interface ProviderLinkedInOptions extends CommonCredentialOptions {
    scope?: string;
}

/**
 * Spotify
 */
type Spotify = Provider<ProviderSpotifyOptions>;

interface ProviderSpotifyOptions extends CommonCredentialOptions {
    scope?: string;
}

/**
 * Basecamp
 */
type Basecamp = Provider<CommonCredentialOptions>;

/**
 * Reddit
 */
type Reddit = Provider<CommonCredentialOptions>;

/**
 * Atlassian
 */
type Atlassian = Provider<AtlassianOptions>;

interface AtlassianOptions extends CommonCredentialOptions {
    scope: string;
}

/**
 * FusionAuth
 */
type FusionAuth = Provider<FusionAuthOptions>;

interface FusionAuthOptions extends CommonCredentialOptions {
    id:string,
    domain: string;
    tenentId?: string;
}
