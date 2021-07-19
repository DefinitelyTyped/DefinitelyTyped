// Type definitions for react-native-auth0 2.5
// Project: https://github.com/auth0/react-native-auth0
// Definitions by: Andrea Ascari <https://github.com/ascariandrea>
//                 Mark Nelissen <https://github.com/marknelissen>
//                 Leo Farias <https://github.com/leoafarias>
//                 Will Dady <https://github.com/willdady>
//                 Bogdan Vitoc <https://github.com/bogidon>
//                 Yam Mesicka <https://github.com/yammesicka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

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
    username?: string | undefined;
    password: string;
    connection: string;
    metadata?: T | undefined;
}

export interface CreateUserResponse {
    Id: string;
    emailVerified: boolean;
    email: string;
}

export interface ExchangeResponse {
    accessToken: string;
    expiresIn: number;
    idToken: string;
    refreshToken: string;
    scope?: string | undefined;
    tokenType: string;
}

export interface ExchangeParams {
    code: string;
    redirectUri: string;
    verifier: string;
}

export interface LogoutParams {
    federated: boolean;
    clientId?: string | undefined;
    returnTo?: string | undefined;
}

export interface PasswordRealmParams {
    username: string;
    password: string;
    realm: string;
    audience?: string | undefined;
    scope?: string | undefined;
}

export interface PasswordRealmResponse {
    accessToken: string;
    expiresIn: number;
    idToken: string;
    scope: string;
    tokenType: 'Bearer';
    refreshToken?: string | undefined;
}

export interface RefreshTokenResponse {
    accessToken: string;
    expiresIn: number;
    idToken: string;
    refreshToken?: string | undefined;
    scope?: string | undefined;
    tokenType: string;
}

export interface RefreshTokenParams {
    refreshToken: string;
    scope?: string | undefined;
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
    send?: 'link' | 'code' | undefined;
    authParams?: AuthParams | undefined;
}

export interface PasswordlessWithSMSParams {
    phoneNumber: string;
    send?: 'link' | 'code';
    authParams?: AuthParams;
}

export interface LoginWithEmailParams {
    email: string;
    code: string;
    audience?: string | undefined;
    scope?: string | undefined;
}

export interface LoginWithSMSParams {
    phoneNumber: string;
    code: string;
    audience?: string | undefined;
    scope?: string | undefined;
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
    /* tslint:disable-next-line no-unnecessary-generics */
    createUser<T>(user: CreateUserParams<T>): Promise<CreateUserResponse>;
    exchange(params: ExchangeParams): Promise<ExchangeResponse>;
    logoutUrl(params: LogoutParams): string;
    passwordRealm(params: PasswordRealmParams): Promise<PasswordRealmResponse>;
    refreshToken(params: RefreshTokenParams): Promise<RefreshTokenResponse>;
    resetPassword(params: ResetPasswordParams): Promise<any>;
    revoke(params: RevokeParams): Promise<any>;
    /* tslint:disable-next-line no-unnecessary-generics */
    userInfo<CustomClaims = {}>(params: UserInfoParams): Promise<UserInfo<CustomClaims>>;
    passwordlessWithEmail(params: PasswordlessWithEmailParams): Promise<any>;
    passwordlessWithSMS(params: PasswordlessWithSMSParams): Promise<any>;
    loginWithEmail(params: LoginWithEmailParams): Promise<any>;
    loginWithSMS(params: LoginWithSMSParams): Promise<any>;
}

/**
 * Users
 */
export interface Auth0User<T> {
    created_at: string;
    email: string;
    emailVerified: boolean;
    identities: any[];
    last_ip?: string | undefined;
    last_login?: string | undefined;
    logins_count: number;
    name: string;
    nickname: string;
    picture?: string | undefined;
    updated_at: string;
    userId: string;
    userMetadata?: T | undefined;
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
    /* tslint:disable-next-line no-unnecessary-generics */
    getUser<T>(parameters: GetUserParams): Promise<Auth0User<T>>;
    patchUser<T>(parameters: PatchUserParams<T>): Promise<Auth0User<T>>;
}

export const users: Users;

/**
 * Web Auth
 */
export interface AuthorizeParams {
    state?: string | undefined;
    nonce?: string | undefined;
    audience?: string | undefined;
    scope?: string | undefined;
    connection?: string | undefined;
    language?: string | undefined;
    prompt?: string | undefined;
    max_age?: number | undefined;
}

export interface AuthorizeOptions {
    ephemeralSession?: boolean | undefined;
}

export interface ClearSessionParams {
    federated: boolean;
}

export interface Credentials {
    accessToken: string;
    idToken: string;
    refreshToken?: string | undefined;
    expiresIn: number;
    scope: string;
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
 * Auth0
 */

export default class Auth0 {
    auth: Auth;
    webAuth: WebAuth;
    constructor(options: Options);

    users(token: string): Users;
}
