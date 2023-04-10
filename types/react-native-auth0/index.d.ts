// Type definitions for react-native-auth0 2.17
// Project: https://github.com/auth0/react-native-auth0
// Definitions by: Andrea Ascari <https://github.com/ascariandrea>
//                 Mark Nelissen <https://github.com/marknelissen>
//                 Leo Farias <https://github.com/leoafarias>
//                 Will Dady <https://github.com/willdady>
//                 Bogdan Vitoc <https://github.com/bogidon>
//                 Yam Mesicka <https://github.com/yammesicka>
//                 Mathias Djärv <https://github.com/mdjarv>
//                 Greg Friedman <https://github.com/gfriedm4>
//                 Poovamraj T T <https://github.com/poovamraj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from 'react';

/**
 * Auth
 */

export interface AuthorizeUrlParams {
    responseType: string;
    redirectUri: string;
    state: string;
}

export interface CreateUserParams<T> {
    email: string;
    password: string;
    connection: string;
    username?: string;
    given_name?: string;
    family_name?: string;
    name?: string;
    nickname?: string;
    picture?: string;
    metadata?: T;
}

export interface CreateUserResponse {
    Id: string;
    emailVerified: boolean;
    email: string;
}

export interface ExchangeParams {
    code: string;
    redirectUri: string;
    verifier: string;
}

export interface ExchangeNativeSocialParams {
    subjectToken: string;
    subjectTokenType: string;
    audience?: string;
    scope?: string;
    userProfile?: any;
}

export interface LogoutParams {
    federated: boolean;
    clientId?: string;
    returnTo?: string;
}

export interface PasswordRealmParams {
    username: string;
    password: string;
    realm: string;
    audience?: string;
    scope?: string;
}

export interface RefreshTokenParams {
    refreshToken: string;
    scope?: string;
    [key: string]: string | undefined;
}

export interface RevokeParams {
    refreshToken: string;
}

export interface UserInfoParams {
    token: string;
}

export interface ResetPasswordParams {
    email: string;
    connection: string;
}

export interface AuthParams {
    [key: string]: string;
}

export interface PasswordlessWithEmailParams {
    email: string;
    send?: 'link' | 'code';
    authParams?: AuthParams;
}

export interface PasswordlessWithSMSParams {
    phoneNumber: string;
    send?: 'link' | 'code';
    authParams?: AuthParams;
}

export interface LoginWithEmailParams {
    email: string;
    code: string;
    audience?: string;
    scope?: string;
}

export interface LoginWithSMSParams {
    phoneNumber: string;
    code: string;
    audience?: string;
    scope?: string;
}

export interface LoginWithOTPParams {
    mfaToken: string;
    otp: string;
}

export interface LoginWithOOBParams {
    mfaToken: string;
    oobCode: string;
    bindingCode?: string;
}

export interface LoginWithRecoveryCodeParams {
    mfaToken: string;
    recoveryCode: string;
}

export interface MultiFactorChallengeParams {
    mfaToken: string;
    challengeType?: 'oob' | 'otp' | 'oob otp' | 'otp oob';
    authenticatorId?: string;
}

export interface MultiFactorChallengeResponse {
    challengeType?: 'oob' | 'otp' | 'oob otp' | 'otp oob';
    oobCode?: string;
    bindingMethod?: string;
}

export type UserInfo<CustomClaims = {}> = {
    email: string;
    emailVerified: boolean;
    familyName: string;
    givenName: string;
    name: string;
    nickname: string;
    picture: string;
    sub: string;
    updatedAt: string;
} & CustomClaims;

export class Auth {
    authorizeUrl(params: AuthorizeUrlParams): string;
    /* eslint-disable-next-line no-unnecessary-generics */
    createUser<T>(user: CreateUserParams<T>): Promise<CreateUserResponse>;
    exchange(params: ExchangeParams): Promise<Credentials>;
    exchangeNativeSocial(params: ExchangeNativeSocialParams): Promise<Credentials>;
    logoutUrl(params: LogoutParams): string;
    passwordRealm(params: PasswordRealmParams): Promise<Credentials>;
    refreshToken(params: RefreshTokenParams): Promise<Credentials>;
    resetPassword(params: ResetPasswordParams): Promise<any>;
    revoke(params: RevokeParams): Promise<any>;
    /* eslint-disable-next-line no-unnecessary-generics */
    userInfo<CustomClaims = {}>(params: UserInfoParams): Promise<UserInfo<CustomClaims>>;
    passwordlessWithEmail(params: PasswordlessWithEmailParams): Promise<any>;
    passwordlessWithSMS(params: PasswordlessWithSMSParams): Promise<any>;
    loginWithEmail(params: LoginWithEmailParams): Promise<Credentials>;
    loginWithSMS(params: LoginWithSMSParams): Promise<Credentials>;
    loginWithOTP(params: LoginWithOTPParams): Promise<Credentials>;
    loginWithOOB(params: LoginWithOOBParams): Promise<Credentials>;
    loginWithRecoveryCode(params: LoginWithRecoveryCodeParams): Promise<Credentials>;
    multifactorChallenge(params: MultiFactorChallengeParams): Promise<MultiFactorChallengeResponse>;
}

/**
 * Users
 */
export interface Auth0User<T> {
    created_at: string;
    email: string;
    emailVerified: boolean;
    identities: any[];
    last_ip?: string;
    last_login?: string;
    logins_count: number;
    name: string;
    nickname: string;
    picture?: string;
    updated_at: string;
    userId: string;
    userMetadata?: T;
}

export interface GetUserParams {
    id: string;
}

export interface PatchUserParams<T> {
    id: string;
    metadata: T;
}

export class Users {
    constructor(options: UsersOptions);
    /* eslint-disable-next-line no-unnecessary-generics */
    getUser<T>(parameters: GetUserParams): Promise<Auth0User<T>>;
    patchUser<T>(parameters: PatchUserParams<T>): Promise<Auth0User<T>>;
}

export const users: Users;

/**
 * Web Auth
 */
export interface AuthorizeParams {
    state?: string; // Random string to prevent CSRF attacks and used to discard unexpected results. By default it is a cryptographically secure random.
    nonce?: string; // Random string to prevent replay attacks of id_tokens.
    audience?: string; // Identifier of Resource Server (RS) to be included as the audience (aud claim) of the issued access token
    scope?: string; // Scopes requested for the issued tokens. e.g. `openid profile`
    connection?: string; // The name of the identity provider to use, e.g. "google-oauth2" or "facebook". When not set, it will display Auth0's Universal Login Page.
    language?: string;
    prompt?: string;
    max_age?: number; // The allowable elapsed time in seconds since the last time the user was authenticated (optional).
    organization?: string; // The ID of the organization to join
    invitationUrl?: string; // The invitation URL to join an organization. Takes precedence over the "organization" parameter.
    [key: string]: string | number | boolean | undefined; // Optional user-defined values appended to the auth page URL query parameters.
}

export interface AuthorizeOptions {
    ephemeralSession?: boolean; //  Disable Single-Sign-On (SSO). It only affects iOS with versions 13 and above. Defaults to `false`.
    customScheme?: string; //  Custom scheme to build the callback URL with.
    leeway?: number; // The amount of leeway, in seconds, to accommodate potential clock skew when validating an ID token's claims. Defaults to 60 seconds if not specified.
    skipLegacyListener?: string; // Whether to register the event listener necessary for the SDK to work on iOS <11 or not. Defaults to `false`.
}

export interface ClearSessionParams {
    federated?: boolean;
    customScheme?: string;
}

export interface Credentials {
    accessToken: string;
    idToken?: string;
    refreshToken?: string;
    scope?: string;
    expiresIn: number;
    tokenType: string;
}

export class WebAuth {
    authorize(parameters: AuthorizeParams, options?: AuthorizeOptions): Promise<Credentials>;
    clearSession(parameters?: ClearSessionParams): Promise<any>;
}

export interface UsersOptions {
    baseUrl: Options['domain'];
    token: string;
}

export interface Options {
    domain: string;
    clientId: string;
}

/**
 * Credentials Manager
 */

export interface SaveCredentialsParams {
    idToken: string;
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    refreshToken?: string;
    scope?: string;
}

export class CredentialsManager {
    constructor(domain: string, clientId: string);
    saveCredentials(params: SaveCredentialsParams): Promise<boolean>;
    getCredentials(scope?: string, minTtl?: number, parameters?: any): Promise<Credentials>;
    requireLocalAuthentication(
        title?: string,
        description?: string,
        cancelTitle?: string,
        fallbackTitle?: string,
        strategy?: LocalAuthenticationStrategy,
    ): Promise<void>;
    hasValidCredentials(minTtl?: number): Promise<boolean>;
    clearCredentials(): Promise<boolean>;
}

export enum LocalAuthenticationStrategy {
    deviceOwnerWithBiometrics = 1,
    deviceOwner = 2,
}

/**
 * Auth0
 */

export default class Auth0 {
    auth: Auth;
    webAuth: WebAuth;
    credentialsManager: CredentialsManager;
    constructor(options: Options);

    users(token: string): Users;
}

export class Auth0ContextInterface {
    user: any;
    error: BaseError | null;
    isLoading: boolean;
    authorize(parameters?: AuthorizeParams, options?: AuthorizeOptions): Promise<void>;
    clearSession(): Promise<void>;
    getCredentials(scope?: string, minTtl?: number, parameters?: any): Promise<Credentials>;
    clearCredentials(): Promise<void>;
    requireLocalAuthentication(
        title?: string,
        description?: string,
        cancelTitle?: string,
        fallbackTitle?: string,
        strategy?: LocalAuthenticationStrategy,
    ): Promise<void>;
}

export class Auth0Props {
    domain: string;
    clientId: string;
    children?: any;
}

export function useAuth0(): Auth0ContextInterface;

export const Auth0Provider: React.FC<Auth0Props>;

/**
 * Errors
 */

export interface BaseError extends Error {
    name: string;
    message: string;
}

export interface TimeoutError extends BaseError {
    name: 'TimeoutError';
    message: string;
}
