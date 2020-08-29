export interface Providers {
    Email: Email;
    Credentials: Credentials;
    Apple: Apple;
    Twitter: Twitter;
    Facebook: Facebook;
    GitHub: GitHub;
    GitLab: GitLab;
    Slack: Slack;
    Google: Google;
    Auth0: Auth0;
    IdentityServer4: IdentityServer4;
    Discord: Discord;
    Twitch: Twitch;
    Mixer: Mixer;
    Okta: Okta;
    BattleNet: BattleNet;
    Box: Box;
    Cognito: Cognito;
    Yandex: Yandex;
    LinkedIn: LinkedIn;
    Spotify: Spotify;
    Basecamp: Basecamp;
    Reddit: Reddit;
}

type PossibleProviders =
    | Email
    | Credentials
    | Apple
    | Twitter
    | Facebook
    | GitHub
    | GitLab
    | Slack
    | Google
    | Auth0
    | IdentityServer4
    | Discord
    | Twitch
    | Mixer
    | Okta
    | BattleNet
    | Box
    | Cognito
    | Yandex
    | LinkedIn
    | Spotify
    | Basecamp
    | Reddit;

// TODO: type return objects from providers properly
interface GenericReturnConfig {
    [key: string]: any;
}

declare const Providers: Providers;
export default Providers;
export { PossibleProviders };

/**
 * Email
 */
type Email = (options: ProviderEmailOptions) => GenericReturnConfig;

interface VerificationRequestParams {
    identifier: string;
    url: string;
    baseUrl: string;
    provider: ProviderEmailOptions;
}

interface ProviderEmailOptions {
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
type Credentials = (options: ProviderCredentialsOptions) => GenericReturnConfig;

interface ProviderCredentialsOptions {
    id?: string;
    name: string;
    credentials: unknown;
    authorize(credentails: unknown): Promise<unknown | null>;
}

/**
 * Apple
 */
type Apple = (options: ProviderAppleOptions) => GenericReturnConfig;

interface ProviderAppleOptions {
    clientId: string;
    clientSecret: ProviderAppleSecret;
}

interface ProviderAppleSecret {
    appleId: string;
    teamId: string;
    privateKey: string;
    keyId: string;
}

/**
 * Twitter
 */
type Twitter = (options: ProviderTwitterOptions) => GenericReturnConfig;

interface ProviderTwitterOptions {
    clientId: string;
    clientSecret: string;
}

/**
 * Facebook
 */
type Facebook = (options: ProviderFacebookOptions) => GenericReturnConfig;

interface ProviderFacebookOptions {
    clientId: string;
    clientSecret: string;
}

/**
 * GitHub
 */
type GitHub = (options: ProviderGitHubOptions) => GenericReturnConfig;

interface ProviderGitHubOptions {
    clientId: string;
    clientSecret: string;
    scope?: string;
}

/**
 * GitLab
 */
type GitLab = (options: ProviderGitLabOptions) => GenericReturnConfig;

interface ProviderGitLabOptions {
    clientId: string;
    clientSecret: string;
}

/**
 * Slack
 */
type Slack = (options: ProviderSlackOptions) => GenericReturnConfig;

interface ProviderSlackOptions {
    clientId: string;
    clientSecret: string;
}

/**
 * Google
 */
type Google = (options: ProviderGoogleOptions) => GenericReturnConfig;

interface ProviderGoogleOptions {
    clientId: string;
    clientSecret: string;
}

/**
 * Auth0
 */
type Auth0 = (options: ProviderAuth0Options) => GenericReturnConfig;

interface ProviderAuth0Options {
    clientId: string;
    clientSecret: string;
    domain: string;
}

/**
 * IS4
 */

type IdentityServer4 = (options: ProviderIS4Options) => GenericReturnConfig;

interface ProviderIS4Options {
    id: 'identity-server4';
    name: 'IdentityServer4';
    scope: string;
    domain: string;
    clientId: string;
    clientSecret: string;
}

/**
 * Discord
 */
type Discord = (options: ProviderDiscordOptions) => GenericReturnConfig;

interface ProviderDiscordOptions {
    clientId: string;
    clientSecret: string;
}

/**
 * Twitch
 */
type Twitch = (options: ProviderTwitchOptions) => GenericReturnConfig;

interface ProviderTwitchOptions {
    clientId: string;
    clientSecret: string;
}

/**
 * Mixer
 */
type Mixer = (options: ProviderMixerOptions) => GenericReturnConfig;

interface ProviderMixerOptions {
    clientId: string;
    clientSecret: string;
}

/**
 * Okta
 */
type Okta = (options: ProviderOktaOptions) => GenericReturnConfig;

interface ProviderOktaOptions {
    clientId: string;
    clientSecret: string;
    domain: string;
}

/**
 * Battle.net
 */
type BattleNet = (options: ProviderBattleNetOptions) => GenericReturnConfig;

interface ProviderBattleNetOptions {
    clientId: string;
    clientSecret: string;
    region: string;
}

/**
 * Box
 */
type Box = (options: ProviderBoxOptions) => GenericReturnConfig;

interface ProviderBoxOptions {
    clientId: string;
    clientSecret: string;
}

/**
 * Cognito
 */
type Cognito = (options: ProviderCognitoOptions) => GenericReturnConfig;

interface ProviderCognitoOptions {
    clientId: string;
    clientSecret: string;
    domain: string;
}

/**
 * Yandex
 */
type Yandex = (options: ProviderYandexOptions) => GenericReturnConfig;

interface ProviderYandexOptions {
    clientId: string;
    clientSecret: string;
}

/**
 * LinkedIn
 */
type LinkedIn = (options: ProviderLinkedInOptions) => GenericReturnConfig;

interface ProviderLinkedInOptions {
    clientId: string;
    clientSecret: string;
}

/**
 * Spotify
 */
type Spotify = (options: ProviderSpotifyOptions) => GenericReturnConfig;

interface ProviderSpotifyOptions {
    clientId: string;
    clientSecret: string;
    scope?: string;
}

/**
 * Basecamp
 */
type Basecamp = (options: ProviderBasecampOptions) => GenericReturnConfig;

interface ProviderBasecampOptions {
    clientId: string;
    clientSecret: string;
}

/**
 * Reddit
 */
type Reddit = (options: ProviderRedditOptions) => GenericReturnConfig;

interface ProviderRedditOptions {
    clientId: string;
    clientSecret: string;
}
