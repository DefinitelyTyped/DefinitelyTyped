export interface Providers {
    Apple: Apple;
    Auth0: Auth0;
    Basecamp: Basecamp;
    BattleNet: BattleNet;
    Box: Box;
    Cognito: Cognito;
    Credentials: Credentials;
    Discord: Discord;
    Email: Email;
    Facebook: Facebook;
    GitHub: GitHub;
    GitLab: GitLab;
    Google: Google;
    IdentityServer4: IdentityServer4;
    LinkedIn: LinkedIn;
    Mixer: Mixer;
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
type Credentials = (options: ProviderCredentialsOptions) => GenericReturnConfig;

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
type Apple = (options: ProviderAppleOptions) => GenericReturnConfig;

interface ProviderAppleOptions {
    name?: string;
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
    name?: string;
    clientId: string;
    clientSecret: string;
}

/**
 * Facebook
 */
type Facebook = (options: ProviderFacebookOptions) => GenericReturnConfig;

interface ProviderFacebookOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
}

/**
 * GitHub
 */
type GitHub = (options: ProviderGitHubOptions) => GenericReturnConfig;

interface ProviderGitHubOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
    scope?: string;
}

/**
 * GitLab
 */
type GitLab = (options: ProviderGitLabOptions) => GenericReturnConfig;

interface ProviderGitLabOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
}

/**
 * Slack
 */
type Slack = (options: ProviderSlackOptions) => GenericReturnConfig;

interface ProviderSlackOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
}

/**
 * Google
 */
type Google = (options: ProviderGoogleOptions) => GenericReturnConfig;

interface ProviderGoogleOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
    authorizationUrl?: string;
}

/**
 * Auth0
 */
type Auth0 = (options: ProviderAuth0Options) => GenericReturnConfig;

interface ProviderAuth0Options {
    name?: string;
    clientId: string;
    clientSecret: string;
    domain: string;
}

/**
 * IS4
 */

type IdentityServer4 = (options: ProviderIS4Options) => GenericReturnConfig;

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
type Discord = (options: ProviderDiscordOptions) => GenericReturnConfig;

interface ProviderDiscordOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
}

/**
 * Twitch
 */
type Twitch = (options: ProviderTwitchOptions) => GenericReturnConfig;

interface ProviderTwitchOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
}

/**
 * Mixer
 */
type Mixer = (options: ProviderMixerOptions) => GenericReturnConfig;

interface ProviderMixerOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
}

/**
 * Okta
 */
type Okta = (options: ProviderOktaOptions) => GenericReturnConfig;

interface ProviderOktaOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
    domain: string;
}

/**
 * Battle.net
 */
type BattleNet = (options: ProviderBattleNetOptions) => GenericReturnConfig;

interface ProviderBattleNetOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
    region: string;
}

/**
 * Box
 */
type Box = (options: ProviderBoxOptions) => GenericReturnConfig;

interface ProviderBoxOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
}

/**
 * Cognito
 */
type Cognito = (options: ProviderCognitoOptions) => GenericReturnConfig;

interface ProviderCognitoOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
    domain: string;
}

/**
 * Yandex
 */
type Yandex = (options: ProviderYandexOptions) => GenericReturnConfig;

interface ProviderYandexOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
}

/**
 * LinkedIn
 */
type LinkedIn = (options: ProviderLinkedInOptions) => GenericReturnConfig;

interface ProviderLinkedInOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
    scope?: string;
}

/**
 * Spotify
 */
type Spotify = (options: ProviderSpotifyOptions) => GenericReturnConfig;

interface ProviderSpotifyOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
    scope?: string;
}

/**
 * Basecamp
 */
type Basecamp = (options: ProviderBasecampOptions) => GenericReturnConfig;

interface ProviderBasecampOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
}

/**
 * Reddit
 */
type Reddit = (options: ProviderRedditOptions) => GenericReturnConfig;

interface ProviderRedditOptions {
    name?: string;
    clientId: string;
    clientSecret: string;
}
