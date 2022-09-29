// Type definitions for oidc-provider 7.12
// Project: https://github.com/panva/node-oidc-provider
// Definitions by: Filip Skokan <https://github.com/panva>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as events from 'events';
import * as url from 'url';
import * as dns from 'dns';
import * as http from 'http';
import * as https from 'https';
import * as http2 from 'http2';
import * as crypto from 'crypto';

import * as Koa from 'koa';

export {};

export type CanBePromise<T> = Promise<T> | T;
export type FindAccount = (
    ctx: KoaContextWithOIDC,
    sub: string,
    token?: AuthorizationCode | AccessToken | DeviceCode | BackchannelAuthenticationRequest,
) => CanBePromise<Account | undefined>;
export type TokenFormat = 'opaque' | 'jwt' | 'paseto';
export type FapiProfile = '1.0 ID2' | '1.0 Final';

export type TTLFunction<T> = (ctx: KoaContextWithOIDC, token: T, client: Client) => number;

export interface UnknownObject {
    [key: string]: unknown;
}

export interface JWK {
    kid?: string | undefined;
    x5c?: string[] | undefined;
    alg?: string | undefined;
    crv?: string | undefined;
    d?: string | undefined;
    dp?: string | undefined;
    dq?: string | undefined;
    e?: string | undefined;
    ext?: boolean | undefined;
    k?: string | undefined;
    key_ops?: string[] | undefined;
    kty?: string | undefined;
    n?: string | undefined;
    p?: string | undefined;
    q?: string | undefined;
    qi?: string | undefined;
    use?: string | undefined;
    x?: string | undefined;
    y?: string | undefined;
}

export interface JWKS {
    keys: JWK[];
}

export interface AllClientMetadata {
    client_id?: string | undefined;
    redirect_uris?: string[] | undefined;
    grant_types?: string[] | undefined;
    response_types?: ResponseType[] | undefined;

    application_type?: 'web' | 'native' | undefined;
    client_id_issued_at?: number | undefined;
    client_name?: string | undefined;
    client_secret_expires_at?: number | undefined;
    client_secret?: string | undefined;
    client_uri?: string | undefined;
    contacts?: string[] | undefined;
    default_acr_values?: string[] | undefined;
    default_max_age?: number | undefined;
    id_token_signed_response_alg?: SigningAlgorithmWithNone | undefined;
    initiate_login_uri?: string | undefined;
    jwks_uri?: string | undefined;
    jwks?: JWKS | undefined;
    logo_uri?: string | undefined;
    policy_uri?: string | undefined;
    post_logout_redirect_uris?: string[] | undefined;
    require_auth_time?: boolean | undefined;
    scope?: string | undefined;
    sector_identifier_uri?: string | undefined;
    subject_type?: SubjectTypes | undefined;
    token_endpoint_auth_method?: ClientAuthMethod | undefined;
    tos_uri?: string | undefined;

    tls_client_auth_subject_dn?: string | undefined;
    tls_client_auth_san_dns?: string | undefined;
    tls_client_auth_san_uri?: string | undefined;
    tls_client_auth_san_ip?: string | undefined;
    tls_client_auth_san_email?: string | undefined;
    token_endpoint_auth_signing_alg?: SigningAlgorithm | undefined;
    userinfo_signed_response_alg?: SigningAlgorithmWithNone | undefined;
    introspection_signed_response_alg?: SigningAlgorithmWithNone | undefined;
    introspection_encrypted_response_alg?: EncryptionAlgValues | undefined;
    introspection_encrypted_response_enc?: EncryptionEncValues | undefined;
    backchannel_logout_session_required?: boolean | undefined;
    backchannel_logout_uri?: string | undefined;
    request_object_signing_alg?: SigningAlgorithmWithNone | undefined;
    request_object_encryption_alg?: EncryptionAlgValues | undefined;
    request_object_encryption_enc?: EncryptionEncValues | undefined;
    request_uris?: string[] | undefined;
    id_token_encrypted_response_alg?: EncryptionAlgValues | undefined;
    id_token_encrypted_response_enc?: EncryptionEncValues | undefined;
    userinfo_encrypted_response_alg?: EncryptionAlgValues | undefined;
    userinfo_encrypted_response_enc?: EncryptionEncValues | undefined;
    authorization_signed_response_alg?: SigningAlgorithm | undefined;
    authorization_encrypted_response_alg?: EncryptionAlgValues | undefined;
    authorization_encrypted_response_enc?: EncryptionEncValues | undefined;
    web_message_uris?: string[] | undefined;
    tls_client_certificate_bound_access_tokens?: boolean | undefined;

    require_signed_request_object?: boolean | undefined;
    require_pushed_authorization_requests?: boolean | undefined;

    backchannel_user_code_parameter?: boolean | undefined;
    backchannel_authentication_request_signing_alg?: string | undefined;
    backchannel_client_notification_endpoint?: string | undefined;
    backchannel_token_delivery_mode?: CIBADeliveryMode | undefined;

    [key: string]: unknown;
}

export interface ClientMetadata extends AllClientMetadata {
    client_id: string;
}

export type ResponseType =
    | 'code'
    | 'id_token'
    | 'code id_token'
    | 'id_token token'
    | 'code token'
    | 'code id_token token'
    | 'none';
export type PKCEMethods = 'S256' | 'plain';
export type CIBADeliveryMode = 'poll' | 'ping';
export type SubjectTypes = 'public' | 'pairwise';
export type ClientAuthMethod =
    | 'client_secret_basic'
    | 'client_secret_post'
    | 'client_secret_jwt'
    | 'private_key_jwt'
    | 'tls_client_auth'
    | 'self_signed_tls_client_auth'
    | 'none';

export interface ClaimsParameterMember {
    essential?: boolean | undefined;
    value?: string | undefined;
    values?: string[] | undefined;

    [key: string]: unknown;
}

export interface ClaimsParameter {
    id_token?: {
        [key: string]: null | ClaimsParameterMember;
    } | undefined;
    userinfo?: {
        [key: string]: null | ClaimsParameterMember;
    } | undefined;
}

export interface ClientAuthorizationState {
    persistsLogout?: boolean | undefined;
    sid?: string | undefined;
    grantId?: string | undefined;
}

export interface PromptDetail {
    name: 'login' | 'consent' | string;
    reasons: string[];
    details: UnknownObject;
}

declare class Interaction extends BaseModel {
    readonly kind: 'Interaction';
    iat: number;
    exp: number;
    session?: {
        accountId: string;
        uid: string;
        cookie: string;
        acr?: string | undefined;
        amr?: string[] | undefined;
    } | undefined;
    params: UnknownObject;
    prompt: PromptDetail;
    result?: InteractionResults | undefined;
    returnTo: string;
    deviceCode?: string | undefined;
    trusted?: string[] | undefined;
    uid: string;
    lastSubmission?: InteractionResults | undefined;
    grantId?: string | undefined;

    save(ttl: number): Promise<string>;
    persist(): Promise<string>;
}

declare class Session extends BaseModel {
    readonly kind: 'Session';
    iat: number;
    exp: number;
    uid: string;
    jti: string;

    accountId?: string | undefined;
    acr?: string | undefined;
    amr?: string[] | undefined;
    loginTs?: number | undefined;
    transient?: boolean | undefined;
    state?: UnknownObject | undefined;
    authorizations?: {
        [clientId: string]: ClientAuthorizationState;
    } | undefined;

    authTime(): string | void;
    past(age: number): boolean;

    ensureClientContainer(clientId: string): void;
    loginAccount(details: {
        accountId: string;
        acr?: string | undefined;
        amr?: string[] | undefined;
        loginTs?: number | undefined;
        transient?: boolean | undefined;
    }): void;
    authorizationFor(clientId: string): ClientAuthorizationState | void;
    sidFor(clientId: string): string;
    sidFor(clientId: string, value: string): void;
    grantIdFor(clientId: string): string;
    grantIdFor(clientId: string, value: string): void;

    save(ttl: number): Promise<string>;
    persist(): Promise<string>;
    destroy(): Promise<void>;
    resetIdentifier(): void;
    static find<T>(this: { new (...args: any[]): T }, cookieId: string): Promise<T | undefined>;
    static findByUid(uid: string): Promise<Session | undefined>;
    static get(ctx: Koa.Context): Promise<Session>;
}

declare class Grant extends BaseModel {
    constructor(properties?: { clientId?: string | undefined; accountId?: string | undefined });

    accountId?: string | undefined;
    clientId?: string | undefined;
    openid?: {
        scope?: string | undefined;
        claims?: string[] | undefined;
    } | undefined;
    resources?: {
        [resource: string]: string;
    } | undefined;
    rejected?: Pick<Grant, 'openid' | 'resources'> | undefined;

    addOIDCScope(scope: string): undefined;
    rejectOIDCScope(scope: string): undefined;
    getOIDCScope(): string;
    getOIDCScopeEncountered(): string;
    getOIDCScopeFiltered(filter: Set<string>): string;

    addOIDCClaims(claims: string[]): undefined;
    rejectOIDCClaims(claims: string[]): undefined;
    getOIDCClaims(): string[];
    getOIDCClaimsEncountered(): string[];
    getOIDCClaimsFiltered(filter: Set<string>): string[];

    addResourceScope(resource: string, scope: string): undefined;
    rejectResourceScope(resource: string, scope: string): undefined;
    getResourceScope(resource: string): string;
    getResourceScopeEncountered(resource: string): string;
    getResourceScopeFiltered(resource: string, filter: Set<string>): string;
}

interface BaseModel {
    jti: string;
    kind: string;
    iat?: number | undefined;
    exp?: number | undefined;
}

declare class BaseModel {
    readonly adapter: Adapter;

    save(ttl?: number): Promise<string>;
    destroy(): Promise<void>;
    emit(eventName: string): void;

    static readonly adapter: Adapter;

    static IN_PAYLOAD: string[];

    static find<T>(this: { new (...args: any[]): T }, id: string, options?: object): Promise<T | undefined>;
}

declare class BaseToken extends BaseModel {
    iat: number;
    exp?: number | undefined;
    jti: string;
    readonly kind: string;
    clientId?: string | undefined;
    client?: Client | undefined;
    readonly format?: string | undefined;
    readonly scopes: Set<string>;

    ttlPercentagePassed(): number;

    readonly isValid: boolean;
    readonly isExpired: boolean;
    readonly remainingTTL: number;
    readonly expiration: number;

    static IN_PAYLOAD: string[];

    static find<T>(
        this: { new (...args: any[]): T },
        jti: string,
        options?: { ignoreExpiration?: boolean | undefined },
    ): Promise<T | undefined>;
    save(): Promise<string>;

    readonly adapter: Adapter;
    static readonly adapter: Adapter;
}

declare class ReplayDetection {
    readonly kind: 'ReplayDetection';
    unique(iss: string, jti: string, exp?: number): Promise<boolean>;

    readonly adapter: Adapter;
    static readonly adapter: Adapter;
}

declare class PushedAuthorizationRequest extends BaseToken {
    constructor(properties: { request: string });
    readonly kind: 'PushedAuthorizationRequest';
    request: string;
}

declare class RefreshToken extends BaseToken {
    constructor(properties: {
        client: Client;
        accountId: string;
        acr?: string | undefined;
        amr?: string[] | undefined;
        authTime?: number | undefined;
        claims?: ClaimsParameter | undefined;
        nonce?: string | undefined;
        resource?: string | string[] | undefined;
        scope: string;
        sid?: string | undefined;
        sessionUid?: string | undefined;
        expiresWithSession?: boolean | undefined;
        'x5t#S256'?: string | undefined;
        jkt?: string | undefined;
        grantId: string;
        gty: string;
        [key: string]: unknown;
    });
    readonly kind: 'RefreshToken';
    rotations?: number | undefined;
    iiat?: number | undefined;
    accountId: string;
    acr?: string | undefined;
    amr?: string[] | undefined;
    authTime?: number | undefined;
    claims?: ClaimsParameter | undefined;
    nonce?: string | undefined;
    resource?: string | string[] | undefined;
    scope?: string | undefined;
    sid?: string | undefined;
    sessionUid?: string | undefined;
    expiresWithSession?: boolean | undefined;
    'x5t#S256'?: string | undefined;
    jkt?: string | undefined;
    grantId?: string | undefined;
    gty?: string | undefined;
    consumed: unknown;

    totalLifetime(): number;
    isSenderConstrained(): boolean;
    consume(): Promise<void>;

    static revokeByGrantId(grantId: string): Promise<void>;
}

declare class AuthorizationCode extends BaseToken {
    constructor(properties: {
        client: Client;
        accountId: string;
        redirectUri?: string | undefined;
        acr?: string | undefined;
        amr?: string[] | undefined;
        authTime?: number | undefined;
        claims?: ClaimsParameter | undefined;
        nonce?: string | undefined;
        resource?: string | string[] | undefined;
        codeChallenge?: string | undefined;
        codeChallengeMethod?: string | undefined;
        scope: string;
        sid?: string | undefined;
        sessionUid?: string | undefined;
        expiresWithSession?: boolean | undefined;
        'x5t#S256'?: string | undefined;
        jkt?: string | undefined;
        grantId: string;
        gty: string;
        [key: string]: unknown;
    });
    readonly kind: 'AuthorizationCode';
    redirectUri?: string | undefined;
    codeChallenge?: string | undefined;
    codeChallengeMethod?: string | undefined;
    accountId?: string | undefined;
    acr?: string | undefined;
    amr?: string[] | undefined;
    authTime?: number | undefined;
    claims?: ClaimsParameter | undefined;
    nonce?: string | undefined;
    resource?: string | string[] | undefined;
    scope?: string | undefined;
    sid?: string | undefined;
    sessionUid?: string | undefined;
    expiresWithSession?: boolean | undefined;
    'x5t#S256'?: string | undefined;
    jkt?: string | undefined;
    grantId?: string | undefined;
    gty?: string | undefined;

    consume(): Promise<void>;

    static revokeByGrantId(grantId: string): Promise<void>;
}

declare class DeviceCode extends BaseToken {
    constructor(properties: {
        params: UnknownObject;
        userCode: string;
        grantId: string;
        client: Client;
        deviceInfo: UnknownObject;
        [key: string]: unknown;
    });

    static findByUserCode(userCode: string, options?: { ignoreExpiration?: boolean | undefined }): Promise<DeviceCode | undefined>;

    readonly kind: 'DeviceCode';
    error?: string | undefined;
    errorDescription?: string | undefined;
    params?: UnknownObject | undefined;
    userCode: string;
    inFlight?: boolean | undefined;
    deviceInfo?: UnknownObject | undefined;
    accountId?: string | undefined;
    acr?: string | undefined;
    amr?: string[] | undefined;
    authTime?: number | undefined;
    claims?: ClaimsParameter | undefined;
    nonce?: string | undefined;
    resource?: string | string[] | undefined;
    scope?: string | undefined;
    sid?: string | undefined;
    sessionUid?: string | undefined;
    expiresWithSession?: boolean | undefined;
    grantId: string;
    consumed: unknown;

    consume(): Promise<void>;

    static revokeByGrantId(grantId: string): Promise<void>;
}

declare class BackchannelAuthenticationRequest extends BaseToken {
    constructor(properties?: { clientId?: string | undefined; accountId?: string | undefined });

    readonly kind: 'BackchannelAuthenticationRequest';
    error?: string | undefined;
    errorDescription?: string | undefined;
    params?: UnknownObject | undefined;
    accountId?: string | undefined;
    acr?: string | undefined;
    amr?: string[] | undefined;
    authTime?: number | undefined;
    claims?: ClaimsParameter | undefined;
    nonce?: string | undefined;
    resource?: string | string[] | undefined;
    scope?: string | undefined;
    sid?: string | undefined;
    sessionUid?: string | undefined;
    expiresWithSession?: boolean | undefined;
    grantId: string;
    consumed: unknown;

    static revokeByGrantId(grantId: string): Promise<void>;
}

declare class ClientCredentials extends BaseToken {
    constructor(properties: { client: Client; resourceServer?: ResourceServer | undefined; scope: string; [key: string]: unknown });
    readonly kind: 'ClientCredentials';
    scope?: string | undefined;
    extra?: UnknownObject | undefined;
    aud: string | string[];
    readonly tokenType: string;
    'x5t#S256'?: string | undefined;
    jkt?: string | undefined;
    resourceServer?: ResourceServer | undefined;

    isSenderConstrained(): boolean;
}

declare class InitialAccessToken extends BaseToken {
    constructor(properties?: { expiresIn?: number | undefined; policies?: string[] | undefined; [key: string]: unknown });
    readonly kind: 'InitialAccessToken';
    clientId: undefined;
    policies?: string[] | undefined;
}

declare class RegistrationAccessToken extends BaseToken {
    readonly kind: 'RegistrationAccessToken';
    policies?: string[] | undefined;
}

declare class AccessToken extends BaseToken {
    constructor(properties: {
        client: Client;
        accountId: string;
        resourceServer?: ResourceServer | undefined;
        claims?: ClaimsParameter | undefined;
        aud?: string | string[] | undefined;
        scope: string;
        sid?: string | undefined;
        sessionUid?: string | undefined;
        expiresWithSession?: boolean | undefined;
        'x5t#S256'?: string | undefined;
        jkt?: string | undefined;
        grantId: string;
        gty: string;
        [key: string]: unknown;
    });
    readonly kind: 'AccessToken';
    accountId: string;
    resourceServer?: ResourceServer | undefined;
    aud: string | string[];
    claims?: ClaimsParameter | undefined;
    extra?: UnknownObject | undefined;
    grantId: string;
    scope?: string | undefined;
    gty: string;
    sid?: string | undefined;
    sessionUid?: string | undefined;
    expiresWithSession?: boolean | undefined;
    readonly tokenType: string;
    'x5t#S256'?: string | undefined;
    jkt?: string | undefined;

    isSenderConstrained(): boolean;

    static revokeByGrantId(grantId: string): Promise<void>;
}

declare class IdToken {
    constructor(claims: UnknownObject, context?: { ctx?: KoaContextWithOIDC | undefined; client?: Client | undefined });

    readonly ctx: KoaContextWithOIDC;
    readonly client: Client;
    readonly available: UnknownObject;
    readonly extra: UnknownObject;

    set(key: string, value: any): void;
    payload(): Promise<UnknownObject>;
    issue(context: {
        use: 'idtoken' | 'logout' | 'userinfo' | 'introspection' | 'authorization';
        expiresAt?: number | undefined;
    }): Promise<string>;
    static validate(idToken: string, client: Client): Promise<{ header: UnknownObject; payload: UnknownObject }>;
}

declare class Client {
    responseTypeAllowed(type: ResponseType): boolean;
    grantTypeAllowed(type: string): boolean;
    redirectUriAllowed(redirectUri: string): boolean;
    webMessageUriAllowed(webMessageUri: string): boolean;
    requestUriAllowed(requestUri: string): boolean;
    postLogoutRedirectUriAllowed(postLogoutRedirectUri: string): boolean;
    includeSid(): boolean;
    compareClientSecret(actual: string): CanBePromise<boolean>;

    metadata(): ClientMetadata;

    backchannelPing(request: BackchannelAuthenticationRequest): Promise<void>;

    readonly clientId: string;

    readonly grantTypes?: string[] | undefined;
    readonly redirectUris?: string[] | undefined;
    readonly responseTypes?: ResponseType[] | undefined;

    readonly applicationType?: 'web' | 'native' | undefined;
    readonly clientIdIssuedAt?: number | undefined;
    readonly clientName?: string | undefined;
    readonly clientSecretExpiresAt?: number | undefined;
    readonly clientSecret?: string | undefined;
    readonly clientUri?: string | undefined;
    readonly contacts?: string[] | undefined;
    readonly defaultAcrValues?: string[] | undefined;
    readonly defaultMaxAge?: number | undefined;
    readonly idTokenSignedResponseAlg?: string | undefined;
    readonly initiateLoginUri?: string | undefined;
    readonly jwksUri?: string | undefined;
    readonly jwks?: JWKS | undefined;
    readonly logoUri?: string | undefined;
    readonly policyUri?: string | undefined;
    readonly postLogoutRedirectUris?: string[] | undefined;
    readonly requireAuthTime?: boolean | undefined;
    readonly scope?: string | undefined;
    readonly sectorIdentifierUri?: string | undefined;
    readonly subjectType?: SubjectTypes | undefined;
    readonly tokenEndpointAuthMethod?: string | undefined;
    readonly tosUri?: string | undefined;

    readonly tlsClientAuthSubjectDn?: string | undefined;
    readonly tlsClientAuthSanDns?: string | undefined;
    readonly tlsClientAuthSanUri?: string | undefined;
    readonly tlsClientAuthSanIp?: string | undefined;
    readonly tlsClientAuthSanEmail?: string | undefined;
    readonly tokenEndpointAuthSigningAlg?: string | undefined;
    readonly userinfoSignedResponseAlg?: string | undefined;
    readonly introspectionSignedResponseAlg?: string | undefined;
    readonly introspectionEncryptedResponseAlg?: string | undefined;
    readonly introspectionEncryptedResponseEnc?: string | undefined;
    readonly backchannelLogoutSessionRequired?: boolean | undefined;
    readonly backchannelLogoutUri?: string | undefined;
    readonly requestObjectSigningAlg?: string | undefined;
    readonly requestObjectEncryptionAlg?: string | undefined;
    readonly requestObjectEncryptionEnc?: string | undefined;
    readonly requestUris?: string[] | undefined;
    readonly idTokenEncryptedResponseAlg?: string | undefined;
    readonly idTokenEncryptedResponseEnc?: string | undefined;
    readonly userinfoEncryptedResponseAlg?: string | undefined;
    readonly userinfoEncryptedResponseEnc?: string | undefined;
    readonly authorizationSignedResponseAlg?: string | undefined;
    readonly authorizationEncryptedResponseAlg?: string | undefined;
    readonly authorizationEncryptedResponseEnc?: string | undefined;
    readonly webMessageUris?: string[] | undefined;
    readonly tlsClientCertificateBoundAccessTokens?: boolean | undefined;

    readonly backchannelUserCodeParameter?: boolean | undefined;
    readonly backchannelAuthenticationRequestSigningAlg?: string | undefined;
    readonly backchannelClientNotificationEndpoint?: string | undefined;
    readonly backchannelTokenDeliveryMode?: CIBADeliveryMode | undefined;

    [key: string]: unknown;

    static find(id: string): Promise<Client | undefined>;
}

export interface ResourceServer {
    scope: string;
    audience?: string | undefined;
    accessTokenTTL?: number | undefined;
    accessTokenFormat?: TokenFormat | undefined;
    jwt?: {
        sign?:
            | {
                  alg?: AsymmetricSigningAlgorithm | undefined;
                  kid?: string | undefined;
              }
            | {
                  alg: SymmetricSigningAlgorithm;
                  key: crypto.KeyObject | Buffer;
                  kid?: string | undefined;
              } | undefined;
        encrypt?: {
            alg: EncryptionAlgValues;
            enc: EncryptionEncValues;
            key: crypto.KeyObject | Buffer;
            kid?: string | undefined;
        } | undefined;
    } | undefined;
    paseto?: {
        version: 1 | 2 | 3 | 4;
        purpose: 'local' | 'public';
        key?: crypto.KeyObject | Buffer | undefined;
        kid?: string | undefined;
    } | undefined;
}

declare class OIDCContext {
    constructor(ctx: Koa.Context);
    readonly route: string;

    readonly cookies: {
        get(name: string, opts?: { signed?: boolean | undefined }): string | undefined;
        set(name: string, value: string | null, opts?: CookiesSetOptions): undefined;
    };

    readonly entities: {
        readonly AccessToken?: AccessToken | undefined;
        readonly Account?: Account | undefined;
        readonly AuthorizationCode?: AuthorizationCode | undefined;
        readonly Client?: Client | undefined;
        readonly Grant?: Grant | undefined;
        readonly ClientCredentials?: ClientCredentials | undefined;
        readonly DeviceCode?: DeviceCode | undefined;
        readonly IdTokenHint?: { header: UnknownObject; payload: UnknownObject } | undefined;
        readonly InitialAccessToken?: InitialAccessToken | undefined;
        readonly Interaction?: Interaction | undefined;
        readonly PushedAuthorizationRequest?: PushedAuthorizationRequest | undefined;
        readonly BackchannelAuthenticationRequest?: BackchannelAuthenticationRequest | undefined;
        readonly RefreshToken?: RefreshToken | undefined;
        readonly RegistrationAccessToken?: RegistrationAccessToken | undefined;
        readonly RotatedRefreshToken?: RefreshToken | undefined;
        readonly RotatedRegistrationAccessToken?: RegistrationAccessToken | undefined;
        readonly Session?: Session | undefined;
        readonly [key: string]: unknown;
    };
    readonly claims: ClaimsParameter;
    readonly issuer: string;
    readonly provider: Provider;
    readonly resourceServers?: { [key: string]: ResourceServer } | undefined;

    entity(key: string, value: any): void;

    promptPending(name: string): boolean;

    readonly requestParamClaims: Set<string>;
    readonly requestParamScopes: Set<string>;
    readonly prompts: Set<string>;
    readonly result?: InteractionResults | undefined;

    readonly webMessageUriCheckPerformed?: boolean | undefined;
    readonly redirectUriCheckPerformed?: boolean | undefined;
    readonly trusted?: string[] | undefined;
    readonly registrationAccessToken?: RegistrationAccessToken | undefined;
    readonly deviceCode?: DeviceCode | undefined;
    readonly accessToken?: AccessToken | undefined;
    readonly account?: Account | undefined;
    readonly client?: Client | undefined;
    readonly session?: Session | undefined;
    readonly acr: string;
    readonly amr: string[];
    readonly body?: UnknownObject | undefined;
    readonly params?: UnknownObject | undefined;

    getAccessToken(opts?: { acceptDPoP?: boolean | undefined; acceptQueryParam?: boolean | undefined }): string;

    clientJwtAuthExpectedAudience(): Set<string>;
}

export type KoaContextWithOIDC = Koa.ParameterizedContext<
    Koa.DefaultState,
    Koa.DefaultContext & {
        oidc: OIDCContext;
    }
>;

export type TLSClientAuthProperty =
    | 'tls_client_auth_subject_dn'
    | 'tls_client_auth_san_dns'
    | 'tls_client_auth_san_uri'
    | 'tls_client_auth_san_ip'
    | 'tls_client_auth_san_email';

export interface AccountClaims {
    sub: string;

    [key: string]: unknown;
}

export interface Account {
    accountId: string;
    claims: (
        use: string,
        scope: string,
        claims: { [key: string]: null | ClaimsParameterMember },
        rejected: string[],
    ) => CanBePromise<AccountClaims>;
    [key: string]: unknown;
}

export type RotateRegistrationAccessTokenFunction = (ctx: KoaContextWithOIDC) => CanBePromise<boolean>;
export type IssueRegistrationAccessTokenFunction = (ctx: KoaContextWithOIDC, client: Client) => boolean;

export interface ErrorOut {
    error: string;
    error_description?: string | undefined;
    scope?: string | undefined;
    state?: string | undefined;
}

export interface AdapterPayload extends AllClientMetadata {
    accountId?: string | undefined;
    acr?: string | undefined;
    amr?: string[] | undefined;
    aud?: string[] | undefined;
    authorizations?: {
        [clientId: string]: ClientAuthorizationState;
    } | undefined;
    authTime?: number | undefined;
    claims?: ClaimsParameter | undefined;
    clientId?: string | undefined;
    codeChallenge?: string | undefined;
    codeChallengeMethod?: string | undefined;
    consumed?: any;
    deviceInfo?: UnknownObject | undefined;
    error?: string | undefined;
    errorDescription?: string | undefined;
    exp?: number | undefined;
    expiresWithSession?: boolean | undefined;
    extra?: UnknownObject | undefined;
    format?: string | undefined;
    grantId?: string | undefined;
    gty?: string | undefined;
    iat?: number | undefined;
    iiat?: number | undefined;
    inFlight?: boolean | undefined;
    jti?: string | undefined;
    kind?: string | undefined;
    lastSubmission?: InteractionResults | undefined;
    loginTs?: number | undefined;
    nonce?: string | undefined;
    params?: UnknownObject | undefined;
    policies?: string[] | undefined;
    redirectUri?: string | undefined;
    request?: string | undefined;
    resource?: string | undefined;
    result?: InteractionResults | undefined;
    returnTo?: string | undefined;
    rotations?: number | undefined;
    scope?: string | undefined;
    session?: {
        accountId?: string | undefined;
        acr?: string | undefined;
        amr?: string[] | undefined;
        cookie?: string | undefined;
        uid?: string | undefined;
    } | undefined;
    sessionUid?: string | undefined;
    sid?: string | undefined;
    trusted?: string[] | undefined;
    state?: UnknownObject | undefined;
    transient?: boolean | undefined;
    uid?: string | undefined;
    userCode?: string | undefined;
    jkt?: string | undefined;
    'x5t#S256'?: string | undefined;
}

export interface Adapter {
    upsert(id: string, payload: AdapterPayload, expiresIn: number): Promise<undefined | void>; // tslint:disable-line:void-return
    find(id: string): Promise<AdapterPayload | undefined | void>; // tslint:disable-line:void-return
    findByUserCode(userCode: string): Promise<AdapterPayload | undefined | void>; // tslint:disable-line:void-return
    findByUid(uid: string): Promise<AdapterPayload | undefined | void>; // tslint:disable-line:void-return
    consume(id: string): Promise<undefined | void>; // tslint:disable-line:void-return
    destroy(id: string): Promise<undefined | void>; // tslint:disable-line:void-return
    revokeByGrantId(grantId: string): Promise<undefined | void>; // tslint:disable-line:void-return
}

export type AdapterFactory = (name: string) => Adapter;

export interface AdapterConstructor {
    new (name: string): Adapter;
}

export interface CookiesSetOptions {
    path?: string | undefined;
    domain?: string | undefined;
    secure?: boolean | undefined;
    httpOnly?: boolean | undefined;
    sameSite?: 'strict' | 'lax' | 'none' | undefined;
    signed?: boolean | undefined;
    overwrite?: boolean | undefined;
}

declare class JWTStructured {
    header?: UnknownObject | undefined;
    payload: UnknownObject;
}

declare class PASETOStructured {
    footer?: UnknownObject | undefined;
    payload: UnknownObject;
    assertion?: string | Buffer | undefined;
}

export interface Configuration {
    acrValues?: string[] | Set<string> | undefined;

    adapter?: AdapterConstructor | AdapterFactory | undefined;

    claims?: {
        [key: string]: null | string[];
    } | undefined;

    clientBasedCORS?: ((ctx: KoaContextWithOIDC, origin: string, client: Client) => boolean) | undefined;

    clients?: ClientMetadata[] | undefined;

    formats?: {
        bitsOfOpaqueRandomness?: number | ((ctx: KoaContextWithOIDC, model: BaseModel) => number) | undefined;
        customizers?: {
            jwt?: ((
                ctx: KoaContextWithOIDC,
                token: AccessToken | ClientCredentials,
                parts: JWTStructured,
            ) => CanBePromise<JWTStructured>) | undefined;
            paseto?: ((
                ctx: KoaContextWithOIDC,
                token: AccessToken | ClientCredentials,
                parts: PASETOStructured,
            ) => CanBePromise<PASETOStructured>) | undefined;
        } | undefined;
    } | undefined;

    clientDefaults?: AllClientMetadata | undefined;

    clockTolerance?: number | undefined;

    conformIdTokenClaims?: boolean | undefined;

    cookies?: {
        names?: {
            session?: string | undefined;
            interaction?: string | undefined;
            resume?: string | undefined;
            state?: string | undefined;
        } | undefined;
        long?: CookiesSetOptions | undefined;
        short?: CookiesSetOptions | undefined;
        keys?: Array<string | Buffer> | undefined;
    } | undefined;

    discovery?: UnknownObject | undefined;

    extraParams?: string[] | undefined;

    features?: {
        devInteractions?: {
            enabled?: boolean | undefined;
        } | undefined;

        claimsParameter?: {
            enabled?: boolean | undefined;
        } | undefined;

        clientCredentials?: {
            enabled?: boolean | undefined;
        } | undefined;

        introspection?: {
            enabled?: boolean | undefined;
            allowedPolicy?: ((
                ctx: KoaContextWithOIDC,
                client: Client,
                token: AccessToken | ClientCredentials | RefreshToken,
            ) => CanBePromise<boolean>) | undefined;
        } | undefined;

        revocation?: {
            enabled?: boolean | undefined;
        } | undefined;

        userinfo?: {
            enabled?: boolean | undefined;
        } | undefined;

        jwtUserinfo?: {
            enabled?: boolean | undefined;
        } | undefined;

        encryption?: {
            enabled?: boolean | undefined;
        } | undefined;

        registration?: {
            enabled?: boolean | undefined;
            initialAccessToken?: boolean | string | undefined;
            policies?: {
                [key: string]: (ctx: KoaContextWithOIDC, metadata: ClientMetadata) => CanBePromise<undefined | void>; // tslint:disable-line:void-return
            } | undefined;
            idFactory?: ((ctx: KoaContextWithOIDC) => string) | undefined;
            secretFactory?: ((ctx: KoaContextWithOIDC) => string) | undefined;
        } | undefined;

        registrationManagement?: {
            enabled?: boolean | undefined;
            rotateRegistrationAccessToken?: RotateRegistrationAccessTokenFunction | boolean | undefined;
            issueRegistrationAccessToken?: IssueRegistrationAccessTokenFunction | boolean | undefined;
        } | undefined;

        deviceFlow?: {
            enabled?: boolean | undefined;
            charset?: 'base-20' | 'digits' | undefined;
            mask?: string | undefined;
            deviceInfo?: ((ctx: KoaContextWithOIDC) => UnknownObject) | undefined;
            userCodeInputSource?: ((
                ctx: KoaContextWithOIDC,
                form: string,
                out?: ErrorOut,
                err?: errors.OIDCProviderError | Error,
            ) => CanBePromise<undefined | void>) | undefined; // tslint:disable-line:void-return
            userCodeConfirmSource?: ((
                ctx: KoaContextWithOIDC,
                form: string,
                client: Client,
                deviceInfo: UnknownObject,
                userCode: string,
            ) => CanBePromise<undefined | void>) | undefined; // tslint:disable-line:void-return
            successSource?: ((ctx: KoaContextWithOIDC) => CanBePromise<undefined | void>) | undefined; // tslint:disable-line:void-return
        } | undefined;

        requestObjects?: {
            request?: boolean | undefined;
            requestUri?: boolean | undefined;
            requireUriRegistration?: boolean | undefined;
            requireSignedRequestObject?: boolean | undefined;
            mode?: 'lax' | 'strict' | undefined;
        } | undefined;

        dPoP?: {
            enabled?: boolean | undefined;
            iatTolerance?: number | undefined;
            ack?: string | undefined;
        } | undefined;

        backchannelLogout?: {
            enabled?: boolean | undefined;
        } | undefined;

        fapi?: {
            enabled?: boolean | undefined;
            profile?: FapiProfile | ((ctx: KoaContextWithOIDC, client: Client) => FapiProfile) | undefined
        } | undefined;

        ciba?: {
            enabled?: boolean | undefined;
            deliveryModes: CIBADeliveryMode[];
            triggerAuthenticationDevice?: ((ctx: KoaContextWithOIDC, request: BackchannelAuthenticationRequest, account: Account, client: Client) => CanBePromise<void>) | undefined;
            validateBindingMessage?: ((ctx: KoaContextWithOIDC, bindingMessage?: string) => CanBePromise<void>) | undefined;
            validateRequestContext?: ((ctx: KoaContextWithOIDC, requestContext?: string) => CanBePromise<void>) | undefined;
            processLoginHintToken?: ((ctx: KoaContextWithOIDC, loginHintToken?: string) => CanBePromise<string | undefined>) | undefined;
            processLoginHint?: ((ctx: KoaContextWithOIDC, loginHint?: string) => CanBePromise<string | undefined>) | undefined;
            verifyUserCode?: ((ctx: KoaContextWithOIDC, userCode?: string) => CanBePromise<void>) | undefined;
        } | undefined

        webMessageResponseMode?: {
            enabled?: boolean | undefined;
            ack?: string | undefined;
        } | undefined;

        jwtIntrospection?: {
            enabled?: boolean | undefined;
            ack?: string | undefined;
        } | undefined;

        jwtResponseModes?: {
            enabled?: boolean | undefined;
            ack?: string | undefined;
        } | undefined;

        pushedAuthorizationRequests?: {
            requirePushedAuthorizationRequests?: boolean | undefined;
            enabled?: boolean | undefined;
        } | undefined;

        rpInitiatedLogout?: {
            enabled?: boolean | undefined;
            postLogoutSuccessSource?: ((ctx: KoaContextWithOIDC) => CanBePromise<undefined | void>) | undefined; // tslint:disable-line:void-return
            logoutSource?: ((ctx: KoaContextWithOIDC, form: string) => CanBePromise<undefined | void>) | undefined; // tslint:disable-line:void-return
        } | undefined;

        mTLS?: {
            enabled?: boolean | undefined;
            certificateBoundAccessTokens?: boolean | undefined;
            selfSignedTlsClientAuth?: boolean | undefined;
            tlsClientAuth?: boolean | undefined;
            getCertificate?: ((ctx: KoaContextWithOIDC) => string) | undefined;
            certificateAuthorized?: ((ctx: KoaContextWithOIDC) => boolean) | undefined;
            certificateSubjectMatches?: ((
                ctx: KoaContextWithOIDC,
                property: TLSClientAuthProperty,
                expected: string,
            ) => boolean) | undefined;
        } | undefined;

        resourceIndicators?: {
            enabled?: boolean | undefined;
            getResourceServerInfo?: ((
                ctx: KoaContextWithOIDC,
                resourceIndicator: string,
                client: Client,
            ) => CanBePromise<ResourceServer>) | undefined;
            defaultResource?: ((ctx: KoaContextWithOIDC) => CanBePromise<string | string[]>) | undefined;
            useGrantedResource?: ((ctx: KoaContextWithOIDC, model: AuthorizationCode | RefreshToken | DeviceCode | BackchannelAuthenticationRequest) => CanBePromise<boolean>) | undefined;
        } | undefined;
    } | undefined;

    extraTokenClaims?: ((
        ctx: KoaContextWithOIDC,
        token: AccessToken | ClientCredentials,
    ) => CanBePromise<UnknownObject | undefined>) | undefined;

    httpOptions?: ((url: url.URL) => HttpOptions) | undefined;

    expiresWithSession?: ((
        ctx: KoaContextWithOIDC,
        token: AccessToken | AuthorizationCode | DeviceCode,
    ) => CanBePromise<boolean>) | undefined;

    issueRefreshToken?: ((
        ctx: KoaContextWithOIDC,
        client: Client,
        code: AuthorizationCode | DeviceCode | BackchannelAuthenticationRequest,
    ) => CanBePromise<boolean>) | undefined;

    jwks?: JWKS | undefined;

    responseTypes?: ResponseType[] | undefined;

    revokeGrantPolicy?: ((ctx: KoaContextWithOIDC) => boolean) | undefined;

    pkce?: {
        methods: PKCEMethods[];
        required?: ((ctx: KoaContextWithOIDC, client: Client) => boolean) | undefined;
    } | undefined;

    routes?: {
        authorization?: string | undefined;
        code_verification?: string | undefined;
        device_authorization?: string | undefined;
        end_session?: string | undefined;
        introspection?: string | undefined;
        jwks?: string | undefined;
        registration?: string | undefined;
        revocation?: string | undefined;
        token?: string | undefined;
        userinfo?: string | undefined;
        backchannel_authentication?: string | undefined;
        pushed_authorization_request?: string | undefined;
    } | undefined;

    scopes?: string[] | undefined;

    subjectTypes?: SubjectTypes[] | undefined;

    pairwiseIdentifier?: ((ctx: KoaContextWithOIDC, accountId: string, client: Client) => CanBePromise<string>) | undefined;

    tokenEndpointAuthMethods?: ClientAuthMethod[] | undefined;

    ttl?: {
        AccessToken?: TTLFunction<AccessToken> | number | undefined;
        AuthorizationCode?: TTLFunction<AuthorizationCode> | number | undefined;
        ClientCredentials?: TTLFunction<ClientCredentials> | number | undefined;
        DeviceCode?: TTLFunction<DeviceCode> | number | undefined;
        BackchannelAuthenticationRequest?: TTLFunction<BackchannelAuthenticationRequest> | number | undefined;
        IdToken?: TTLFunction<IdToken> | number | undefined;
        RefreshToken?: TTLFunction<RefreshToken> | number | undefined;
        Interaction?: TTLFunction<Interaction> | number | undefined;
        Session?: TTLFunction<Session> | number | undefined;
        Grant?: TTLFunction<Grant> | number | undefined;

        [key: string]: unknown;
    } | undefined;

    loadExistingGrant?: ((ctx: KoaContextWithOIDC) => CanBePromise<Grant | undefined>) | undefined;

    extraClientMetadata?: {
        properties?: string[] | undefined;

        validator?: ((
            ctx: KoaContextWithOIDC,
            key: string,
            value: unknown,
            metadata: ClientMetadata,
        ) => void | undefined) | undefined;
    } | undefined;

    rotateRefreshToken?: ((ctx: KoaContextWithOIDC) => CanBePromise<boolean>) | boolean | undefined;

    renderError?: ((
        ctx: KoaContextWithOIDC,
        out: ErrorOut,
        error: errors.OIDCProviderError | Error,
    ) => CanBePromise<undefined | void>) | undefined; // tslint:disable-line:void-return

    allowOmittingSingleRegisteredRedirectUri?: boolean | undefined;

    interactions?: {
        policy?: interactionPolicy.Prompt[] | undefined;
        url?: ((ctx: KoaContextWithOIDC, interaction: Interaction) => CanBePromise<string>) | undefined;
    } | undefined;

    findAccount?: FindAccount | undefined;

    enabledJWA?: {
        authorizationEncryptionAlgValues?: EncryptionAlgValues[] | undefined;
        authorizationEncryptionEncValues?: EncryptionEncValues[] | undefined;
        authorizationSigningAlgValues?: SigningAlgorithm[] | undefined;
        dPoPSigningAlgValues?: AsymmetricSigningAlgorithm[] | undefined;
        idTokenEncryptionAlgValues?: EncryptionAlgValues[] | undefined;
        idTokenEncryptionEncValues?: EncryptionEncValues[] | undefined;
        idTokenSigningAlgValues?: SigningAlgorithmWithNone[] | undefined;
        introspectionEncryptionAlgValues?: EncryptionAlgValues[] | undefined;
        introspectionEncryptionEncValues?: EncryptionEncValues[] | undefined;
        introspectionSigningAlgValues?: SigningAlgorithmWithNone[] | undefined;
        requestObjectEncryptionAlgValues?: EncryptionAlgValues[] | undefined;
        requestObjectEncryptionEncValues?: EncryptionEncValues[] | undefined;
        requestObjectSigningAlgValues?: SigningAlgorithmWithNone[] | undefined;
        tokenEndpointAuthSigningAlgValues?: SigningAlgorithm[] | undefined;
        userinfoEncryptionAlgValues?: EncryptionAlgValues[] | undefined;
        userinfoEncryptionEncValues?: EncryptionEncValues[] | undefined;
        userinfoSigningAlgValues?: SigningAlgorithmWithNone[] | undefined;
    } | undefined;
}

export interface HttpOptions {
    timeout?: number | undefined;
    agent?: http.Agent | https.Agent | undefined;
    lookup?: typeof dns.lookup | undefined;
}
export type NoneAlg = 'none';
export type AsymmetricSigningAlgorithm =
    | 'PS256'
    | 'PS384'
    | 'PS512'
    | 'ES256'
    | 'ES256K'
    | 'ES384'
    | 'ES512'
    | 'EdDSA'
    | 'RS256'
    | 'RS384'
    | 'RS512';
export type SymmetricSigningAlgorithm = 'HS256' | 'HS384' | 'HS512';
export type SigningAlgorithm = AsymmetricSigningAlgorithm | SymmetricSigningAlgorithm;
export type SigningAlgorithmWithNone = AsymmetricSigningAlgorithm | SymmetricSigningAlgorithm | NoneAlg;
export type EncryptionAlgValues =
    | 'RSA-OAEP'
    | 'RSA-OAEP-256'
    | 'RSA-OAEP-384'
    | 'RSA-OAEP-512'
    | 'RSA1_5'
    | 'ECDH-ES'
    | 'ECDH-ES+A128KW'
    | 'ECDH-ES+A192KW'
    | 'ECDH-ES+A256KW'
    | 'A128KW'
    | 'A192KW'
    | 'A256KW'
    | 'A128GCMKW'
    | 'A192GCMKW'
    | 'A256GCMKW'
    | 'PBES2-HS256+A128KW'
    | 'PBES2-HS384+A192KW'
    | 'PBES2-HS512+A256KW'
    | 'dir';
export type EncryptionEncValues =
    | 'A128CBC-HS256'
    | 'A128GCM'
    | 'A192CBC-HS384'
    | 'A192GCM'
    | 'A256CBC-HS512'
    | 'A256GCM';

export interface InteractionResults {
    login?: {
        remember?: boolean | undefined;
        accountId: string;
        ts?: number | undefined;
        amr?: string[] | undefined;
        acr?: string | undefined;
        [key: string]: unknown;
    } | undefined;

    consent?: {
        grantId?: string | undefined;
        [key: string]: unknown;
    } | undefined;

    [key: string]: unknown;
}

export class Provider extends events.EventEmitter {
    constructor(issuer: string, configuration?: Configuration);

    readonly issuer: string;
    readonly app: Koa;

    proxy?: Koa['proxy'] | undefined;
    listen: Koa['listen'];
    callback: Koa['callback'];

    backchannelResult(
        request: BackchannelAuthenticationRequest | string,
        result: Grant | errors.OIDCProviderError | string,
        opts?: { acr?: string | undefined, amr?: string[] | undefined, authTime?: number | undefined }
    ): Promise<void>;

    interactionResult(
        req: http.IncomingMessage | http2.Http2ServerRequest,
        res: http.ServerResponse | http2.Http2ServerResponse,
        result: InteractionResults,
        options?: { mergeWithLastSubmission?: boolean | undefined },
    ): Promise<string>;

    interactionFinished(
        req: http.IncomingMessage | http2.Http2ServerRequest,
        res: http.ServerResponse | http2.Http2ServerResponse,
        result: InteractionResults,
        options?: { mergeWithLastSubmission?: boolean | undefined },
    ): Promise<void>;

    interactionDetails(
        req: http.IncomingMessage | http2.Http2ServerRequest,
        res: http.ServerResponse | http2.Http2ServerResponse,
    ): Promise<Interaction>;

    registerGrantType(
        name: string,
        handler: (ctx: KoaContextWithOIDC, next: () => Promise<void>) => CanBePromise<void>,
        params?: string | string[] | Set<string>,
        duplicates?: string | string[] | Set<string>,
    ): void;
    use: Koa['use'];

    // tslint:disable:unified-signatures
    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: 'access_token.destroyed', listener: (accessToken: AccessToken) => void): this;
    addListener(event: 'access_token.saved', listener: (accessToken: AccessToken) => void): this;
    addListener(event: 'access_token.issued', listener: (accessToken: AccessToken) => void): this;
    addListener(event: 'authorization_code.saved', listener: (authorizationCode: AuthorizationCode) => void): this;
    addListener(event: 'authorization_code.destroyed', listener: (authorizationCode: AuthorizationCode) => void): this;
    addListener(event: 'authorization_code.consumed', listener: (authorizationCode: AuthorizationCode) => void): this;
    addListener(event: 'device_code.saved', listener: (deviceCode: DeviceCode) => void): this;
    addListener(event: 'device_code.destroyed', listener: (deviceCode: DeviceCode) => void): this;
    addListener(event: 'device_code.consumed', listener: (deviceCode: DeviceCode) => void): this;
    addListener(event: 'backchannel_authentication_request.saved', listener: (deviceCode: DeviceCode) => void): this;
    addListener(event: 'backchannel_authentication_request.destroyed', listener: (deviceCode: DeviceCode) => void): this;
    addListener(event: 'backchannel_authentication_request.consumed', listener: (deviceCode: DeviceCode) => void): this;
    addListener(event: 'client_credentials.destroyed', listener: (clientCredentials: ClientCredentials) => void): this;
    addListener(event: 'client_credentials.saved', listener: (clientCredentials: ClientCredentials) => void): this;
    addListener(event: 'client_credentials.issued', listener: (clientCredentials: ClientCredentials) => void): this;
    addListener(event: 'interaction.destroyed', listener: (interaction: Interaction) => void): this;
    addListener(event: 'interaction.saved', listener: (interaction: Interaction) => void): this;
    addListener(event: 'session.destroyed', listener: (session: Session) => void): this;
    addListener(event: 'session.saved', listener: (session: Session) => void): this;
    addListener(event: 'grant.destroyed', listener: (grant: Grant) => void): this;
    addListener(event: 'grant.saved', listener: (grant: Grant) => void): this;
    addListener(event: 'replay_detection.destroyed', listener: (replayDetection: ReplayDetection) => void): this;
    addListener(event: 'replay_detection.saved', listener: (replayDetection: ReplayDetection) => void): this;
    addListener(
        event: 'pushed_authorization_request.destroyed',
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    addListener(
        event: 'pushed_authorization_request.saved',
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    addListener(
        event: 'registration_access_token.destroyed',
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    addListener(
        event: 'registration_access_token.saved',
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    addListener(event: 'refresh_token.destroyed', listener: (refreshToken: RefreshToken) => void): this;
    addListener(event: 'refresh_token.saved', listener: (refreshToken: RefreshToken) => void): this;
    addListener(event: 'refresh_token.consumed', listener: (refreshToken: RefreshToken) => void): this;
    addListener(event: 'authorization.accepted', listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(event: 'authorization.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(
        event: 'authorization.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(event: 'end_session.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(
        event: 'end_session.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(event: 'grant.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(event: 'interaction.ended', listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(
        event: 'interaction.started',
        listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void,
    ): this;
    addListener(event: 'grant.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    addListener(event: 'grant.revoked', listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    addListener(
        event: 'backchannel.success',
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    addListener(
        event: 'backchannel.error',
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    addListener(event: 'pushed_authorization_request.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(
        event: 'pushed_authorization_request.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: 'registration_update.success',
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    addListener(
        event: 'registration_update.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: 'registration_delete.success',
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    addListener(
        event: 'registration_delete.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: 'registration_create.success',
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    addListener(
        event: 'registration_create.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: 'introspection.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: 'registration_read.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(event: 'jwks.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    addListener(
        event: 'discovery.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: 'userinfo.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: 'revocation.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(event: 'server_error', listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: 'access_token.destroyed', listener: (accessToken: AccessToken) => void): this;
    on(event: 'access_token.saved', listener: (accessToken: AccessToken) => void): this;
    on(event: 'access_token.issued', listener: (accessToken: AccessToken) => void): this;
    on(event: 'authorization_code.saved', listener: (authorizationCode: AuthorizationCode) => void): this;
    on(event: 'authorization_code.destroyed', listener: (authorizationCode: AuthorizationCode) => void): this;
    on(event: 'authorization_code.consumed', listener: (authorizationCode: AuthorizationCode) => void): this;
    on(event: 'device_code.saved', listener: (deviceCode: DeviceCode) => void): this;
    on(event: 'device_code.destroyed', listener: (deviceCode: DeviceCode) => void): this;
    on(event: 'device_code.consumed', listener: (deviceCode: DeviceCode) => void): this;
    on(event: 'backchannel_authentication_request.saved', listener: (deviceCode: DeviceCode) => void): this;
    on(event: 'backchannel_authentication_request.destroyed', listener: (deviceCode: DeviceCode) => void): this;
    on(event: 'backchannel_authentication_request.consumed', listener: (deviceCode: DeviceCode) => void): this;
    on(event: 'client_credentials.destroyed', listener: (clientCredentials: ClientCredentials) => void): this;
    on(event: 'client_credentials.saved', listener: (clientCredentials: ClientCredentials) => void): this;
    on(event: 'client_credentials.issued', listener: (clientCredentials: ClientCredentials) => void): this;
    on(event: 'interaction.destroyed', listener: (interaction: Interaction) => void): this;
    on(event: 'interaction.saved', listener: (interaction: Interaction) => void): this;
    on(event: 'session.destroyed', listener: (session: Session) => void): this;
    on(event: 'session.saved', listener: (session: Session) => void): this;
    on(event: 'grant.destroyed', listener: (grant: Grant) => void): this;
    on(event: 'grant.saved', listener: (grant: Grant) => void): this;
    on(event: 'replay_detection.destroyed', listener: (replayDetection: ReplayDetection) => void): this;
    on(event: 'replay_detection.saved', listener: (replayDetection: ReplayDetection) => void): this;
    on(
        event: 'pushed_authorization_request.destroyed',
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    on(
        event: 'pushed_authorization_request.saved',
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    on(
        event: 'registration_access_token.destroyed',
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    on(
        event: 'registration_access_token.saved',
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    on(event: 'refresh_token.destroyed', listener: (refreshToken: RefreshToken) => void): this;
    on(event: 'refresh_token.saved', listener: (refreshToken: RefreshToken) => void): this;
    on(event: 'refresh_token.consumed', listener: (refreshToken: RefreshToken) => void): this;
    on(event: 'authorization.accepted', listener: (ctx: KoaContextWithOIDC) => void): this;
    on(event: 'authorization.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    on(event: 'authorization.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: 'end_session.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    on(event: 'end_session.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: 'grant.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    on(event: 'interaction.ended', listener: (ctx: KoaContextWithOIDC) => void): this;
    on(event: 'interaction.started', listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void): this;
    on(event: 'grant.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: 'grant.revoked', listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    on(
        event: 'backchannel.success',
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    on(
        event: 'backchannel.error',
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    on(event: 'pushed_authorization_request.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    on(
        event: 'pushed_authorization_request.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: 'registration_update.success', listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    on(
        event: 'registration_update.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: 'registration_delete.success', listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    on(
        event: 'registration_delete.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: 'registration_create.success', listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    on(
        event: 'registration_create.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: 'introspection.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(
        event: 'registration_read.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: 'jwks.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: 'discovery.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: 'userinfo.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: 'revocation.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: 'server_error', listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: 'access_token.destroyed', listener: (accessToken: AccessToken) => void): this;
    once(event: 'access_token.saved', listener: (accessToken: AccessToken) => void): this;
    once(event: 'access_token.issued', listener: (accessToken: AccessToken) => void): this;
    once(event: 'authorization_code.saved', listener: (authorizationCode: AuthorizationCode) => void): this;
    once(event: 'authorization_code.destroyed', listener: (authorizationCode: AuthorizationCode) => void): this;
    once(event: 'authorization_code.consumed', listener: (authorizationCode: AuthorizationCode) => void): this;
    once(event: 'device_code.saved', listener: (deviceCode: DeviceCode) => void): this;
    once(event: 'device_code.destroyed', listener: (deviceCode: DeviceCode) => void): this;
    once(event: 'device_code.consumed', listener: (deviceCode: DeviceCode) => void): this;
    once(event: 'backchannel_authentication_request.saved', listener: (deviceCode: DeviceCode) => void): this;
    once(event: 'backchannel_authentication_request.destroyed', listener: (deviceCode: DeviceCode) => void): this;
    once(event: 'backchannel_authentication_request.consumed', listener: (deviceCode: DeviceCode) => void): this;
    once(event: 'client_credentials.destroyed', listener: (clientCredentials: ClientCredentials) => void): this;
    once(event: 'client_credentials.saved', listener: (clientCredentials: ClientCredentials) => void): this;
    once(event: 'client_credentials.issued', listener: (clientCredentials: ClientCredentials) => void): this;
    once(event: 'interaction.destroyed', listener: (interaction: Interaction) => void): this;
    once(event: 'interaction.saved', listener: (interaction: Interaction) => void): this;
    once(event: 'session.destroyed', listener: (session: Session) => void): this;
    once(event: 'session.saved', listener: (session: Session) => void): this;
    once(event: 'grant.destroyed', listener: (grant: Grant) => void): this;
    once(event: 'grant.saved', listener: (grant: Grant) => void): this;
    once(event: 'replay_detection.destroyed', listener: (replayDetection: ReplayDetection) => void): this;
    once(event: 'replay_detection.saved', listener: (replayDetection: ReplayDetection) => void): this;
    once(
        event: 'pushed_authorization_request.destroyed',
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    once(
        event: 'pushed_authorization_request.saved',
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    once(
        event: 'registration_access_token.destroyed',
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    once(
        event: 'registration_access_token.saved',
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    once(event: 'refresh_token.destroyed', listener: (refreshToken: RefreshToken) => void): this;
    once(event: 'refresh_token.saved', listener: (refreshToken: RefreshToken) => void): this;
    once(event: 'refresh_token.consumed', listener: (refreshToken: RefreshToken) => void): this;
    once(event: 'authorization.accepted', listener: (ctx: KoaContextWithOIDC) => void): this;
    once(event: 'authorization.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    once(
        event: 'authorization.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: 'end_session.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    once(event: 'end_session.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: 'grant.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    once(event: 'interaction.ended', listener: (ctx: KoaContextWithOIDC) => void): this;
    once(event: 'interaction.started', listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void): this;
    once(event: 'grant.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: 'grant.revoked', listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    once(
        event: 'backchannel.success',
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    once(
        event: 'backchannel.error',
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    once(event: 'pushed_authorization_request.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    once(
        event: 'pushed_authorization_request.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: 'registration_update.success', listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    once(
        event: 'registration_update.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: 'registration_delete.success', listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    once(
        event: 'registration_delete.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: 'registration_create.success', listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    once(
        event: 'registration_create.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(
        event: 'introspection.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(
        event: 'registration_read.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: 'jwks.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: 'discovery.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: 'userinfo.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: 'revocation.error', listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: 'server_error', listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: 'access_token.destroyed', listener: (accessToken: AccessToken) => void): this;
    prependListener(event: 'access_token.saved', listener: (accessToken: AccessToken) => void): this;
    prependListener(event: 'access_token.issued', listener: (accessToken: AccessToken) => void): this;
    prependListener(event: 'authorization_code.saved', listener: (authorizationCode: AuthorizationCode) => void): this;
    prependListener(
        event: 'authorization_code.destroyed',
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependListener(
        event: 'authorization_code.consumed',
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependListener(event: 'device_code.saved', listener: (deviceCode: DeviceCode) => void): this;
    prependListener(event: 'device_code.destroyed', listener: (deviceCode: DeviceCode) => void): this;
    prependListener(event: 'device_code.consumed', listener: (deviceCode: DeviceCode) => void): this;
    prependListener(event: 'backchannel_authentication_request.saved', listener: (deviceCode: DeviceCode) => void): this;
    prependListener(event: 'backchannel_authentication_request.destroyed', listener: (deviceCode: DeviceCode) => void): this;
    prependListener(event: 'backchannel_authentication_request.consumed', listener: (deviceCode: DeviceCode) => void): this;
    prependListener(
        event: 'client_credentials.destroyed',
        listener: (clientCredentials: ClientCredentials) => void,
    ): this;
    prependListener(event: 'client_credentials.saved', listener: (clientCredentials: ClientCredentials) => void): this;
    prependListener(event: 'client_credentials.issued', listener: (clientCredentials: ClientCredentials) => void): this;
    prependListener(event: 'interaction.destroyed', listener: (interaction: Interaction) => void): this;
    prependListener(event: 'interaction.saved', listener: (interaction: Interaction) => void): this;
    prependListener(event: 'session.destroyed', listener: (session: Session) => void): this;
    prependListener(event: 'session.saved', listener: (session: Session) => void): this;
    prependListener(event: 'grant.destroyed', listener: (grant: Grant) => void): this;
    prependListener(event: 'grant.saved', listener: (grant: Grant) => void): this;
    prependListener(event: 'replay_detection.destroyed', listener: (replayDetection: ReplayDetection) => void): this;
    prependListener(event: 'replay_detection.saved', listener: (replayDetection: ReplayDetection) => void): this;
    prependListener(
        event: 'pushed_authorization_request.destroyed',
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    prependListener(
        event: 'pushed_authorization_request.saved',
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    prependListener(
        event: 'registration_access_token.destroyed',
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    prependListener(
        event: 'registration_access_token.saved',
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    prependListener(event: 'refresh_token.destroyed', listener: (refreshToken: RefreshToken) => void): this;
    prependListener(event: 'refresh_token.saved', listener: (refreshToken: RefreshToken) => void): this;
    prependListener(event: 'refresh_token.consumed', listener: (refreshToken: RefreshToken) => void): this;
    prependListener(event: 'authorization.accepted', listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(event: 'authorization.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(
        event: 'authorization.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(event: 'end_session.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(
        event: 'end_session.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(event: 'grant.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(event: 'interaction.ended', listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(
        event: 'interaction.started',
        listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void,
    ): this;
    prependListener(
        event: 'grant.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(event: 'grant.revoked', listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    prependListener(
        event: 'backchannel.success',
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    prependListener(
        event: 'backchannel.error',
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    prependListener(event: 'pushed_authorization_request.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(
        event: 'pushed_authorization_request.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: 'registration_update.success',
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependListener(
        event: 'registration_update.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: 'registration_delete.success',
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependListener(
        event: 'registration_delete.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: 'registration_create.success',
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependListener(
        event: 'registration_create.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: 'introspection.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: 'registration_read.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: 'jwks.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: 'discovery.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: 'userinfo.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: 'revocation.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(event: 'server_error', listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: 'access_token.destroyed', listener: (accessToken: AccessToken) => void): this;
    prependOnceListener(event: 'access_token.saved', listener: (accessToken: AccessToken) => void): this;
    prependOnceListener(event: 'access_token.issued', listener: (accessToken: AccessToken) => void): this;
    prependOnceListener(
        event: 'authorization_code.saved',
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependOnceListener(
        event: 'authorization_code.destroyed',
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependOnceListener(
        event: 'authorization_code.consumed',
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependOnceListener(event: 'device_code.saved', listener: (deviceCode: DeviceCode) => void): this;
    prependOnceListener(event: 'device_code.destroyed', listener: (deviceCode: DeviceCode) => void): this;
    prependOnceListener(event: 'device_code.consumed', listener: (deviceCode: DeviceCode) => void): this;
    prependOnceListener(event: 'backchannel_authentication_request.saved', listener: (deviceCode: DeviceCode) => void): this;
    prependOnceListener(event: 'backchannel_authentication_request.destroyed', listener: (deviceCode: DeviceCode) => void): this;
    prependOnceListener(event: 'backchannel_authentication_request.consumed', listener: (deviceCode: DeviceCode) => void): this;
    prependOnceListener(
        event: 'client_credentials.destroyed',
        listener: (clientCredentials: ClientCredentials) => void,
    ): this;
    prependOnceListener(
        event: 'client_credentials.saved',
        listener: (clientCredentials: ClientCredentials) => void,
    ): this;
    prependOnceListener(
        event: 'client_credentials.issued',
        listener: (clientCredentials: ClientCredentials) => void,
    ): this;
    prependOnceListener(event: 'interaction.destroyed', listener: (interaction: Interaction) => void): this;
    prependOnceListener(event: 'interaction.saved', listener: (interaction: Interaction) => void): this;
    prependOnceListener(event: 'session.destroyed', listener: (session: Session) => void): this;
    prependOnceListener(event: 'session.saved', listener: (session: Session) => void): this;
    prependOnceListener(event: 'grant.destroyed', listener: (grant: Grant) => void): this;
    prependOnceListener(event: 'grant.saved', listener: (grant: Grant) => void): this;
    prependOnceListener(
        event: 'replay_detection.destroyed',
        listener: (replayDetection: ReplayDetection) => void,
    ): this;
    prependOnceListener(event: 'replay_detection.saved', listener: (replayDetection: ReplayDetection) => void): this;
    prependOnceListener(
        event: 'pushed_authorization_request.destroyed',
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    prependOnceListener(
        event: 'pushed_authorization_request.saved',
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    prependOnceListener(
        event: 'registration_access_token.destroyed',
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    prependOnceListener(
        event: 'registration_access_token.saved',
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    prependOnceListener(event: 'refresh_token.destroyed', listener: (refreshToken: RefreshToken) => void): this;
    prependOnceListener(event: 'refresh_token.saved', listener: (refreshToken: RefreshToken) => void): this;
    prependOnceListener(event: 'refresh_token.consumed', listener: (refreshToken: RefreshToken) => void): this;
    prependOnceListener(event: 'authorization.accepted', listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(event: 'authorization.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(
        event: 'authorization.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(event: 'end_session.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(
        event: 'end_session.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(event: 'grant.success', listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(event: 'interaction.ended', listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(
        event: 'interaction.started',
        listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void,
    ): this;
    prependOnceListener(
        event: 'grant.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(event: 'grant.revoked', listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    prependOnceListener(
        event: 'backchannel.success',
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    prependOnceListener(
        event: 'backchannel.error',
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    prependOnceListener(
        event: 'pushed_authorization_request.success',
        listener: (ctx: KoaContextWithOIDC) => void,
    ): this;
    prependOnceListener(
        event: 'pushed_authorization_request.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: 'registration_update.success',
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependOnceListener(
        event: 'registration_update.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: 'registration_delete.success',
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependOnceListener(
        event: 'registration_delete.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: 'registration_create.success',
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependOnceListener(
        event: 'registration_create.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: 'introspection.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: 'registration_read.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: 'jwks.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: 'discovery.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: 'userinfo.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: 'revocation.error',
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(event: 'server_error', listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;
    // tslint:enable:unified-signatures

    readonly Grant: typeof Grant;
    readonly Client: typeof Client;
    readonly AccessToken: typeof AccessToken;
    readonly InitialAccessToken: typeof InitialAccessToken;
    readonly RefreshToken: typeof RefreshToken;
    readonly AuthorizationCode: typeof AuthorizationCode;
    readonly RegistrationAccessToken: typeof RegistrationAccessToken;
    readonly PushedAuthorizationRequest: typeof PushedAuthorizationRequest;
    readonly ClientCredentials: typeof ClientCredentials;
    readonly DeviceCode: typeof DeviceCode;
    readonly BackchannelAuthenticationRequest: typeof BackchannelAuthenticationRequest;
    readonly BaseToken: typeof BaseToken;
    readonly Account: { findAccount: FindAccount };
    readonly IdToken: typeof IdToken;
    readonly ReplayDetection: typeof ReplayDetection;
    readonly OIDCContext: typeof OIDCContext;
    readonly Session: typeof Session;
    readonly Interaction: typeof Interaction;
}

declare class Checks extends Array<interactionPolicy.Check> {
    get(name: string): interactionPolicy.Check | undefined;
    remove(name: string): void;
    clear(): void;
    add(prompt: interactionPolicy.Check, index?: number): void;
}

export namespace interactionPolicy {
    interface DefaultPolicy extends Array<Prompt> {
        get(name: string): Prompt | undefined;
        remove(name: string): void;
        clear(): void;
        add(prompt: Prompt, index?: number): void;
    }

    class Check {
        constructor(
            reason: string,
            description: string,
            error: string,
            check: (ctx: KoaContextWithOIDC) => CanBePromise<boolean>,
            details?: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject>,
        );
        constructor(
            reason: string,
            description: string,
            check: (ctx: KoaContextWithOIDC) => CanBePromise<boolean>,
            details?: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject>,
        );

        reason: string;
        description: string;
        error: string;
        details: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject>;
        check: (ctx: KoaContextWithOIDC) => CanBePromise<boolean>;
    }

    class Prompt {
        constructor(info: { name: string; requestable?: boolean | undefined }, ...checks: Check[]);
        constructor(
            info: { name: string; requestable?: boolean | undefined },
            details: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject>,
            ...checks: Check[]
        );

        name: string;
        requestable: boolean;
        details?: ((ctx: KoaContextWithOIDC) => Promise<UnknownObject>) | undefined;
        checks: Checks;
    }

    function base(): DefaultPolicy;
}

export namespace errors {
    class OIDCProviderError extends Error {
        constructor(status: number, message: string);
        error: string;
        error_description?: string | undefined;
        error_detail?: string | undefined;
        expose: boolean;
        statusCode: number;
        status: number;
        allow_redirect: boolean;
    }
    class ExpiredLoginHintToken extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class InvalidBindingMessage extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class InvalidUserCode extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class MissingUserCode extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class TransactionFailed extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class UnknownUserId extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class AccessDenied extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class AuthorizationPending extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class ConsentRequired extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class ExpiredToken extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class InteractionRequired extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class InvalidClient extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class InvalidDpopProof extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class InvalidClientAuth extends OIDCProviderError {
        constructor(detail: string);
    }
    class InvalidClientMetadata extends OIDCProviderError {
        constructor(description: string);
    }
    class InvalidGrant extends OIDCProviderError {
        constructor(detail: string);
    }
    class InvalidRequest extends OIDCProviderError {
        constructor(description: string, code?: number);
    }
    class SessionNotFound extends InvalidRequest {}
    class InvalidRequestObject extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class InvalidRequestUri extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class InvalidScope extends OIDCProviderError {
        constructor(description: string, scope: string);
    }
    class InsufficientScope extends OIDCProviderError {
        constructor(description: string, scope: string);
    }
    class InvalidSoftwareStatement extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class InvalidTarget extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class InvalidToken extends OIDCProviderError {
        constructor(detail: string);
    }
    class LoginRequired extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class InvalidRedirectUri extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class RegistrationNotSupported extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class RequestNotSupported extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class RequestUriNotSupported extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class SlowDown extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class TemporarilyUnavailable extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class UnapprovedSoftwareStatement extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class UnauthorizedClient extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class UnsupportedGrantType extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class UnsupportedResponseMode extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class UnsupportedResponseType extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class WebMessageUriMismatch extends OIDCProviderError {
        constructor(description?: string, detail?: string);
    }
    class CustomOIDCProviderError extends OIDCProviderError {
        constructor(message: string, description?: string);
    }
}
