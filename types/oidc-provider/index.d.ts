// Type definitions for oidc-provider 7.2
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
    token?: AuthorizationCode | AccessToken | DeviceCode,
) => CanBePromise<Account | undefined>;
export type TokenFormat = 'opaque' | 'jwt' | 'paseto';

export type TTLFunction<T> = (ctx: KoaContextWithOIDC, token: T, client: Client) => number;

export interface UnknownObject {
    [key: string]: unknown;
}

export interface JWK {
    kid?: string;
    x5c?: string[];
    alg?: string;
    crv?: string;
    d?: string;
    dp?: string;
    dq?: string;
    e?: string;
    ext?: boolean;
    k?: string;
    key_ops?: string[];
    kty?: string;
    n?: string;
    p?: string;
    q?: string;
    qi?: string;
    use?: string;
    x?: string;
    y?: string;
}

export interface AllClientMetadata {
    client_id?: string;
    redirect_uris?: string[];
    grant_types?: string[];
    response_types?: ResponseType[];

    application_type?: 'web' | 'native';
    client_id_issued_at?: number;
    client_name?: string;
    client_secret_expires_at?: number;
    client_secret?: string;
    client_uri?: string;
    contacts?: string[];
    default_acr_values?: string[];
    default_max_age?: number;
    id_token_signed_response_alg?: SigningAlgorithmWithNone;
    initiate_login_uri?: string;
    jwks_uri?: string;
    jwks?: { keys: JWK[] };
    logo_uri?: string;
    policy_uri?: string;
    post_logout_redirect_uris?: string[];
    require_auth_time?: boolean;
    scope?: string;
    sector_identifier_uri?: string;
    subject_type?: SubjectTypes;
    token_endpoint_auth_method?: ClientAuthMethod;
    tos_uri?: string;

    tls_client_auth_subject_dn?: string;
    tls_client_auth_san_dns?: string;
    tls_client_auth_san_uri?: string;
    tls_client_auth_san_ip?: string;
    tls_client_auth_san_email?: string;
    token_endpoint_auth_signing_alg?: SigningAlgorithm;
    userinfo_signed_response_alg?: SigningAlgorithmWithNone;
    introspection_signed_response_alg?: SigningAlgorithmWithNone;
    introspection_encrypted_response_alg?: EncryptionAlgValues;
    introspection_encrypted_response_enc?: EncryptionEncValues;
    backchannel_logout_session_required?: boolean;
    backchannel_logout_uri?: string;
    request_object_signing_alg?: SigningAlgorithmWithNone;
    request_object_encryption_alg?: EncryptionAlgValues;
    request_object_encryption_enc?: EncryptionEncValues;
    request_uris?: string[];
    id_token_encrypted_response_alg?: EncryptionAlgValues;
    id_token_encrypted_response_enc?: EncryptionEncValues;
    userinfo_encrypted_response_alg?: EncryptionAlgValues;
    userinfo_encrypted_response_enc?: EncryptionEncValues;
    authorization_signed_response_alg?: SigningAlgorithm;
    authorization_encrypted_response_alg?: EncryptionAlgValues;
    authorization_encrypted_response_enc?: EncryptionEncValues;
    web_message_uris?: string[];
    tls_client_certificate_bound_access_tokens?: boolean;

    require_signed_request_object?: boolean;
    require_pushed_authorization_requests?: boolean;

    [key: string]: unknown;
}

export interface ClientMetadata extends AllClientMetadata {
    client_id: string;
    redirect_uris: string[];
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
    essential?: boolean;
    value?: string;
    values?: string[];

    [key: string]: unknown;
}

export interface ClaimsParameter {
    id_token?: {
        [key: string]: null | ClaimsParameterMember;
    };
    userinfo?: {
        [key: string]: null | ClaimsParameterMember;
    };
}

export interface ClientAuthorizationState {
    persistsLogout?: boolean;
    sid?: string;
    grantId?: string;
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
        acr?: string;
        amr?: string[];
    };
    params: UnknownObject;
    prompt: PromptDetail;
    result?: InteractionResults;
    returnTo: string;
    deviceCode?: string;
    trusted?: string[];
    uid: string;
    lastSubmission?: InteractionResults;
    grantId?: string;

    save(ttl: number): Promise<string>;
    persist(): Promise<string>;
}

declare class Session extends BaseModel {
    readonly kind: 'Session';
    iat: number;
    exp: number;
    uid: string;
    jti: string;

    accountId?: string;
    acr?: string;
    amr?: string[];
    loginTs?: number;
    transient?: boolean;
    state?: UnknownObject;
    authorizations?: {
        [clientId: string]: ClientAuthorizationState;
    };

    authTime(): string | void;
    past(age: number): boolean;

    ensureClientContainer(clientId: string): void;
    loginAccount(details: {
        accountId: string;
        acr?: string;
        amr?: string[];
        loginTs?: number;
        transient?: boolean;
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
    accountId?: string;
    clientId?: string;
    openid?: {
        scope?: string;
        claims?: string[];
    };
    resources?: {
        [resource: string]: string;
    };
    rejected?: Pick<Grant, 'openid' | 'resources'>;

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
    iat?: number;
    exp?: number;
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
    exp?: number;
    jti: string;
    readonly kind: string;
    clientId?: string;
    client?: Client;
    readonly format?: string;
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
        options?: { ignoreExpiration?: boolean },
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
        acr?: string;
        amr?: string[];
        authTime?: number;
        claims?: ClaimsParameter;
        nonce?: string;
        resource?: string | string[];
        scope: string;
        sid?: string;
        sessionUid?: string;
        expiresWithSession?: boolean;
        'x5t#S256'?: string;
        jkt?: string;
        grantId: string;
        gty: string;
        [key: string]: unknown;
    });
    readonly kind: 'RefreshToken';
    rotations?: number;
    iiat?: number;
    accountId: string;
    acr?: string;
    amr?: string[];
    authTime?: number;
    claims?: ClaimsParameter;
    nonce?: string;
    resource?: string | string[];
    scope?: string;
    sid?: string;
    sessionUid?: string;
    expiresWithSession?: boolean;
    'x5t#S256'?: string;
    jkt?: string;
    grantId?: string;
    gty?: string;
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
        redirectUri?: string;
        acr?: string;
        amr?: string[];
        authTime?: number;
        claims?: ClaimsParameter;
        nonce?: string;
        resource?: string | string[];
        codeChallenge?: string;
        codeChallengeMethod?: string;
        scope: string;
        sid?: string;
        sessionUid?: string;
        expiresWithSession?: boolean;
        'x5t#S256'?: string;
        jkt?: string;
        grantId: string;
        gty: string;
        [key: string]: unknown;
    });
    readonly kind: 'AuthorizationCode';
    redirectUri?: string;
    codeChallenge?: string;
    codeChallengeMethod?: string;
    accountId?: string;
    acr?: string;
    amr?: string[];
    authTime?: number;
    claims?: ClaimsParameter;
    nonce?: string;
    resource?: string | string[];
    scope?: string;
    sid?: string;
    sessionUid?: string;
    expiresWithSession?: boolean;
    'x5t#S256'?: string;
    jkt?: string;
    grantId?: string;
    gty?: string;

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

    static findByUserCode(userCode: string, options?: { ignoreExpiration?: boolean }): Promise<DeviceCode | undefined>;

    readonly kind: 'DeviceCode';
    error?: string;
    errorDescription?: string;
    params?: UnknownObject;
    userCode: string;
    inFlight?: boolean;
    deviceInfo?: UnknownObject;
    codeChallenge?: string;
    codeChallengeMethod?: string;
    accountId?: string;
    acr?: string;
    amr?: string[];
    authTime?: number;
    claims?: ClaimsParameter;
    nonce?: string;
    resource?: string | string[];
    scope?: string;
    sid?: string;
    sessionUid?: string;
    expiresWithSession?: boolean;
    grantId: string;
    gty: string;
    consumed: unknown;

    consume(): Promise<void>;

    static revokeByGrantId(grantId: string): Promise<void>;
}

declare class ClientCredentials extends BaseToken {
    constructor(properties: { client: Client; resourceServer?: ResourceServer; scope: string; [key: string]: unknown });
    readonly kind: 'ClientCredentials';
    scope?: string;
    extra?: UnknownObject;
    aud: string | string[];
    readonly tokenType: string;
    'x5t#S256'?: string;
    jkt?: string;

    isSenderConstrained(): boolean;
}

declare class InitialAccessToken extends BaseToken {
    constructor(properties?: { expiresIn?: number; policies?: string[]; [key: string]: unknown });
    readonly kind: 'InitialAccessToken';
    clientId: undefined;
    policies?: string[];
}

declare class RegistrationAccessToken extends BaseToken {
    readonly kind: 'RegistrationAccessToken';
    policies?: string[];
}

declare class AccessToken extends BaseToken {
    constructor(properties: {
        client: Client;
        accountId: string;
        resourceServer?: ResourceServer;
        claims?: ClaimsParameter;
        aud?: string | string[];
        scope: string;
        sid?: string;
        sessionUid?: string;
        expiresWithSession?: boolean;
        'x5t#S256'?: string;
        jkt?: string;
        grantId: string;
        gty: string;
        [key: string]: unknown;
    });
    readonly kind: 'AccessToken';
    accountId: string;
    aud: string | string[];
    claims?: ClaimsParameter;
    extra?: UnknownObject;
    grantId: string;
    scope?: string;
    gty: string;
    sid?: string;
    sessionUid?: string;
    expiresWithSession?: boolean;
    readonly tokenType: string;
    'x5t#S256'?: string;
    jkt?: string;

    isSenderConstrained(): boolean;

    static revokeByGrantId(grantId: string): Promise<void>;
}

declare class IdToken {
    constructor(claims: UnknownObject, context?: { ctx?: KoaContextWithOIDC; client?: Client });

    readonly ctx: KoaContextWithOIDC;
    readonly client: Client;
    readonly available: UnknownObject;
    readonly extra: UnknownObject;

    set(key: string, value: any): void;
    payload(): Promise<UnknownObject>;
    issue(context: {
        use: 'idtoken' | 'logout' | 'userinfo' | 'introspection' | 'authorization';
        expiresAt?: number;
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

    readonly clientId: string;

    readonly grantTypes?: string[];
    readonly redirectUris?: string[];
    readonly responseTypes?: ResponseType[];

    readonly applicationType?: 'web' | 'native';
    readonly clientIdIssuedAt?: number;
    readonly clientName?: string;
    readonly clientSecretExpiresAt?: number;
    readonly clientSecret?: string;
    readonly clientUri?: string;
    readonly contacts?: string[];
    readonly defaultAcrValues?: string[];
    readonly defaultMaxAge?: number;
    readonly idTokenSignedResponseAlg?: string;
    readonly initiateLoginUri?: string;
    readonly jwksUri?: string;
    readonly jwks?: { keys: JWK[] };
    readonly logoUri?: string;
    readonly policyUri?: string;
    readonly postLogoutRedirectUris?: string[];
    readonly requireAuthTime?: boolean;
    readonly scope?: string;
    readonly sectorIdentifierUri?: string;
    readonly subjectType?: SubjectTypes;
    readonly tokenEndpointAuthMethod?: string;
    readonly tosUri?: string;

    readonly tlsClientAuthSubjectDn?: string;
    readonly tlsClientAuthSanDns?: string;
    readonly tlsClientAuthSanUri?: string;
    readonly tlsClientAuthSanIp?: string;
    readonly tlsClientAuthSanEmail?: string;
    readonly tokenEndpointAuthSigningAlg?: string;
    readonly userinfoSignedResponseAlg?: string;
    readonly introspectionSignedResponseAlg?: string;
    readonly introspectionEncryptedResponseAlg?: string;
    readonly introspectionEncryptedResponseEnc?: string;
    readonly backchannelLogoutSessionRequired?: boolean;
    readonly backchannelLogoutUri?: string;
    readonly requestObjectSigningAlg?: string;
    readonly requestObjectEncryptionAlg?: string;
    readonly requestObjectEncryptionEnc?: string;
    readonly requestUris?: string[];
    readonly idTokenEncryptedResponseAlg?: string;
    readonly idTokenEncryptedResponseEnc?: string;
    readonly userinfoEncryptedResponseAlg?: string;
    readonly userinfoEncryptedResponseEnc?: string;
    readonly authorizationSignedResponseAlg?: string;
    readonly authorizationEncryptedResponseAlg?: string;
    readonly authorizationEncryptedResponseEnc?: string;
    readonly webMessageUris?: string[];
    readonly tlsClientCertificateBoundAccessTokens?: boolean;

    [key: string]: unknown;

    static find(id: string): Promise<Client | undefined>;
}

export interface ResourceServer {
    scope: string;
    audience?: string;
    accessTokenTTL?: number;
    accessTokenFormat?: TokenFormat;
    jwt?: {
        sign?:
            | {
                  alg?: AsymmetricSigningAlgorithm;
                  kid?: string;
              }
            | {
                  alg: SymmetricSigningAlgorithm;
                  key: crypto.KeyObject | Buffer;
                  kid?: string;
              };
        encrypt?: {
            alg: EncryptionAlgValues;
            enc: EncryptionEncValues;
            key: crypto.KeyObject | Buffer;
            kid?: string;
        };
    };
    paseto?: {
        version: 1 | 2;
        purpose: 'local' | 'public';
        key?: crypto.KeyObject | Buffer;
        kid?: string;
    };
}

declare class OIDCContext {
    constructor(ctx: Koa.Context);
    readonly route: string;

    readonly cookies: {
        get(name: string, opts?: { signed?: boolean }): string | undefined;
        set(name: string, value: string | null, opts?: CookiesSetOptions): undefined;
    };

    readonly entities: {
        readonly AccessToken?: AccessToken;
        readonly Account?: Account;
        readonly AuthorizationCode?: AuthorizationCode;
        readonly Client?: Client;
        readonly Grant?: Grant;
        readonly ClientCredentials?: ClientCredentials;
        readonly DeviceCode?: DeviceCode;
        readonly IdTokenHint?: { header: UnknownObject; payload: UnknownObject };
        readonly InitialAccessToken?: InitialAccessToken;
        readonly Interaction?: Interaction;
        readonly PushedAuthorizationRequest?: PushedAuthorizationRequest;
        readonly RefreshToken?: RefreshToken;
        readonly RegistrationAccessToken?: RegistrationAccessToken;
        readonly RotatedRefreshToken?: RefreshToken;
        readonly RotatedRegistrationAccessToken?: RegistrationAccessToken;
        readonly Session?: Session;
        readonly [key: string]: unknown;
    };
    readonly claims: ClaimsParameter;
    readonly issuer: string;
    readonly provider: Provider;
    readonly resourceServers?: { [key: string]: ResourceServer };

    entity(key: string, value: any): void;

    promptPending(name: string): boolean;

    readonly requestParamClaims: Set<string>;
    readonly requestParamScopes: Set<string>;
    readonly prompts: Set<string>;
    readonly result?: InteractionResults;

    readonly webMessageUriCheckPerformed?: boolean;
    readonly redirectUriCheckPerformed?: boolean;
    readonly trusted?: string[];
    readonly registrationAccessToken?: RegistrationAccessToken;
    readonly deviceCode?: DeviceCode;
    readonly accessToken?: AccessToken;
    readonly account?: Account;
    readonly client?: Client;
    readonly session?: Session;
    readonly acr: string;
    readonly amr: string[];
    readonly body?: UnknownObject;
    readonly params?: UnknownObject;

    getAccessToken(opts?: { acceptDPoP?: boolean; acceptQueryParam?: boolean }): string;

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
    error_description?: string;
    scope?: string;
    state?: string;
}

export interface AdapterPayload extends AllClientMetadata {
    accountId?: string;
    acr?: string;
    amr?: string[];
    aud?: string[];
    authorizations?: {
        [clientId: string]: ClientAuthorizationState;
    };
    authTime?: number;
    claims?: ClaimsParameter;
    clientId?: string;
    codeChallenge?: string;
    codeChallengeMethod?: string;
    consumed?: any;
    deviceInfo?: UnknownObject;
    error?: string;
    errorDescription?: string;
    exp?: number;
    expiresWithSession?: boolean;
    extra?: UnknownObject;
    format?: string;
    grantId?: string;
    gty?: string;
    iat?: number;
    iiat?: number;
    inFlight?: boolean;
    jti?: string;
    kind?: string;
    lastSubmission?: InteractionResults;
    loginTs?: number;
    nonce?: string;
    params?: UnknownObject;
    policies?: string[];
    redirectUri?: string;
    request?: string;
    resource?: string;
    result?: InteractionResults;
    returnTo?: string;
    rotations?: number;
    scope?: string;
    session?: {
        accountId?: string;
        acr?: string;
        amr?: string[];
        cookie?: string;
        uid?: string;
    };
    sessionUid?: string;
    sid?: string;
    trusted?: string[];
    state?: UnknownObject;
    transient?: boolean;
    uid?: string;
    userCode?: string;
    jkt?: string;
    'x5t#S256'?: string;
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
    path?: string;
    domain?: string;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
    signed?: boolean;
    overwrite?: boolean;
}

declare class JWTStructured {
    header?: UnknownObject;
    payload: UnknownObject;
}

declare class PASETOStructured {
    footer?: UnknownObject | Buffer | string;
    payload: UnknownObject;
}

export interface Configuration {
    acrValues?: string[] | Set<string>;

    adapter?: AdapterConstructor | AdapterFactory;

    claims?: {
        [key: string]: null | string[];
    };

    clientBasedCORS?: (ctx: KoaContextWithOIDC, origin: string, client: Client) => boolean;

    clients?: ClientMetadata[];

    formats?: {
        bitsOfOpaqueRandomness?: number | ((ctx: KoaContextWithOIDC, model: BaseModel) => number);
        customizers?: {
            jwt?: (
                ctx: KoaContextWithOIDC,
                token: AccessToken | ClientCredentials,
                parts: JWTStructured,
            ) => CanBePromise<JWTStructured>;
            paseto?: (
                ctx: KoaContextWithOIDC,
                token: AccessToken | ClientCredentials,
                parts: PASETOStructured,
            ) => CanBePromise<PASETOStructured>;
        };
    };

    clientDefaults?: AllClientMetadata;

    clockTolerance?: number;

    conformIdTokenClaims?: boolean;

    cookies?: {
        names?: {
            session?: string;
            interaction?: string;
            resume?: string;
            state?: string;
        };
        long?: CookiesSetOptions;
        short?: CookiesSetOptions;
        keys?: Array<string | Buffer>;
    };

    discovery?: UnknownObject;

    extraParams?: string[];

    features?: {
        devInteractions?: {
            enabled?: boolean;
        };

        claimsParameter?: {
            enabled?: boolean;
        };

        clientCredentials?: {
            enabled?: boolean;
        };

        introspection?: {
            enabled?: boolean;
            allowedPolicy?: (
                ctx: KoaContextWithOIDC,
                client: Client,
                token: AccessToken | ClientCredentials | RefreshToken,
            ) => CanBePromise<boolean>;
        };

        revocation?: {
            enabled?: boolean;
        };

        userinfo?: {
            enabled?: boolean;
        };

        jwtUserinfo?: {
            enabled?: boolean;
        };

        encryption?: {
            enabled?: boolean;
        };

        registration?: {
            enabled?: boolean;
            initialAccessToken?: boolean | string;
            policies?: {
                [key: string]: (ctx: KoaContextWithOIDC, metadata: ClientMetadata) => CanBePromise<undefined | void>; // tslint:disable-line:void-return
            };
            idFactory?: (ctx: KoaContextWithOIDC) => string;
            secretFactory?: (ctx: KoaContextWithOIDC) => string;
        };

        registrationManagement?: {
            enabled?: boolean;
            rotateRegistrationAccessToken?: RotateRegistrationAccessTokenFunction | boolean;
            issueRegistrationAccessToken?: IssueRegistrationAccessTokenFunction | boolean;
        };

        deviceFlow?: {
            enabled?: boolean;
            charset?: 'base-20' | 'digits';
            mask?: string;
            deviceInfo?: (ctx: KoaContextWithOIDC) => UnknownObject;
            userCodeInputSource?: (
                ctx: KoaContextWithOIDC,
                form: string,
                out?: ErrorOut,
                err?: errors.OIDCProviderError | Error,
            ) => CanBePromise<undefined | void>; // tslint:disable-line:void-return
            userCodeConfirmSource?: (
                ctx: KoaContextWithOIDC,
                form: string,
                client: Client,
                deviceInfo: UnknownObject,
                userCode: string,
            ) => CanBePromise<undefined | void>; // tslint:disable-line:void-return
            successSource?: (ctx: KoaContextWithOIDC) => CanBePromise<undefined | void>; // tslint:disable-line:void-return
        };

        requestObjects?: {
            request?: boolean;
            requestUri?: boolean;
            requireUriRegistration?: boolean;
            requireSignedRequestObject?: boolean;
            mode?: 'lax' | 'strict';
        };

        dPoP?: {
            enabled?: boolean;
            iatTolerance?: number;
            ack?: string;
        };

        backchannelLogout?: {
            enabled?: boolean;
            ack?: string;
        };

        fapiRW?: {
            enabled?: boolean;
            ack?: string;
        };

        webMessageResponseMode?: {
            enabled?: boolean;
            ack?: string;
        };

        jwtIntrospection?: {
            enabled?: boolean;
            ack?: string;
        };

        issAuthResp?: {
            enabled?: boolean;
            ack?: string;
        };

        jwtResponseModes?: {
            enabled?: boolean;
            ack?: string;
        };

        pushedAuthorizationRequests?: {
            requirePushedAuthorizationRequests?: boolean;
            enabled?: boolean;
            ack?: string;
        };

        rpInitiatedLogout?: {
            enabled?: boolean;
            postLogoutSuccessSource?: (ctx: KoaContextWithOIDC) => CanBePromise<undefined | void>; // tslint:disable-line:void-return
            logoutSource?: (ctx: KoaContextWithOIDC, form: string) => CanBePromise<undefined | void>; // tslint:disable-line:void-return
        };

        mTLS?: {
            enabled?: boolean;
            certificateBoundAccessTokens?: boolean;
            selfSignedTlsClientAuth?: boolean;
            tlsClientAuth?: boolean;
            getCertificate?: (ctx: KoaContextWithOIDC) => string;
            certificateAuthorized?: (ctx: KoaContextWithOIDC) => boolean;
            certificateSubjectMatches?: (
                ctx: KoaContextWithOIDC,
                property: TLSClientAuthProperty,
                expected: string,
            ) => boolean;
        };

        resourceIndicators?: {
            enabled?: boolean;
            getResourceServerInfo?: (
                ctx: KoaContextWithOIDC,
                resourceIndicator: string,
                client: Client,
            ) => CanBePromise<ResourceServer>;
            defaultResource?: (ctx: KoaContextWithOIDC) => CanBePromise<string | string[]>;
        };
    };

    extraTokenClaims?: (
        ctx: KoaContextWithOIDC,
        token: AccessToken | ClientCredentials,
    ) => CanBePromise<UnknownObject | undefined>;

    httpOptions?: (url: url.URL) => HttpOptions;

    expiresWithSession?: (
        ctx: KoaContextWithOIDC,
        token: AccessToken | AuthorizationCode | DeviceCode,
    ) => CanBePromise<boolean>;

    issueRefreshToken?: (
        ctx: KoaContextWithOIDC,
        client: Client,
        code: AuthorizationCode | DeviceCode,
    ) => CanBePromise<boolean>;

    jwks?: { keys: JWK[] };

    responseTypes?: ResponseType[];

    pkce?: {
        methods: PKCEMethods[];
        required?: (ctx: KoaContextWithOIDC, client: Client) => boolean;
    };

    routes?: {
        authorization?: string;
        code_verification?: string;
        device_authorization?: string;
        end_session?: string;
        introspection?: string;
        jwks?: string;
        registration?: string;
        revocation?: string;
        token?: string;
        userinfo?: string;
        pushed_authorization_request?: string;
    };

    scopes?: string[];

    subjectTypes?: SubjectTypes[];

    pairwiseIdentifier?: (ctx: KoaContextWithOIDC, accountId: string, client: Client) => CanBePromise<string>;

    tokenEndpointAuthMethods?: ClientAuthMethod[];

    ttl?: {
        AccessToken?: TTLFunction<AccessToken> | number;
        AuthorizationCode?: TTLFunction<AuthorizationCode> | number;
        ClientCredentials?: TTLFunction<ClientCredentials> | number;
        DeviceCode?: TTLFunction<DeviceCode> | number;
        IdToken?: TTLFunction<IdToken> | number;
        RefreshToken?: TTLFunction<RefreshToken> | number;
        Interaction?: TTLFunction<Interaction> | number;
        Session?: TTLFunction<Session> | number;
        Grant?: TTLFunction<Grant> | number;

        [key: string]: unknown;
    };

    loadExistingGrant?: (ctx: KoaContextWithOIDC) => CanBePromise<Grant | undefined>;

    extraClientMetadata?: {
        properties?: string[];

        validator?: (
            ctx: KoaContextWithOIDC,
            key: string,
            value: unknown,
            metadata: ClientMetadata,
        ) => void | undefined;
    };

    rotateRefreshToken?: ((ctx: KoaContextWithOIDC) => CanBePromise<boolean>) | boolean;

    renderError?: (
        ctx: KoaContextWithOIDC,
        out: ErrorOut,
        error: errors.OIDCProviderError | Error,
    ) => CanBePromise<undefined | void>; // tslint:disable-line:void-return

    allowOmittingSingleRegisteredRedirectUri?: boolean;

    interactions?: {
        policy?: interactionPolicy.Prompt[];
        url?: (ctx: KoaContextWithOIDC, interaction: Interaction) => CanBePromise<string>;
    };

    findAccount?: FindAccount;

    enabledJWA?: {
        authorizationEncryptionAlgValues?: EncryptionAlgValues[];
        authorizationEncryptionEncValues?: EncryptionEncValues[];
        authorizationSigningAlgValues?: SigningAlgorithm[];
        dPoPSigningAlgValues?: AsymmetricSigningAlgorithm[];
        idTokenEncryptionAlgValues?: EncryptionAlgValues[];
        idTokenEncryptionEncValues?: EncryptionEncValues[];
        idTokenSigningAlgValues?: SigningAlgorithmWithNone[];
        introspectionEncryptionAlgValues?: EncryptionAlgValues[];
        introspectionEncryptionEncValues?: EncryptionEncValues[];
        introspectionSigningAlgValues?: SigningAlgorithmWithNone[];
        requestObjectEncryptionAlgValues?: EncryptionAlgValues[];
        requestObjectEncryptionEncValues?: EncryptionEncValues[];
        requestObjectSigningAlgValues?: SigningAlgorithmWithNone[];
        tokenEndpointAuthSigningAlgValues?: SigningAlgorithm[];
        userinfoEncryptionAlgValues?: EncryptionAlgValues[];
        userinfoEncryptionEncValues?: EncryptionEncValues[];
        userinfoSigningAlgValues?: SigningAlgorithmWithNone[];
    };
}

export interface HttpOptions {
    timeout?: number;
    agent?: http.Agent | https.Agent;
    lookup?: typeof dns.lookup;
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
        remember?: boolean;
        accountId: string;
        ts?: number;
        amr?: string[];
        acr?: string;
    };

    consent?: {
        grantId?: string;
    };

    [key: string]: unknown;
}

export class Provider extends events.EventEmitter {
    constructor(issuer: string, configuration?: Configuration);

    readonly issuer: string;
    readonly app: Koa;

    proxy?: Koa['proxy'];
    listen: Koa['listen'];
    callback: Koa['callback'];

    interactionResult(
        req: http.IncomingMessage | http2.Http2ServerRequest,
        res: http.ServerResponse | http2.Http2ServerResponse,
        result: InteractionResults,
        options?: { mergeWithLastSubmission?: boolean },
    ): Promise<string>;

    interactionFinished(
        req: http.IncomingMessage | http2.Http2ServerRequest,
        res: http.ServerResponse | http2.Http2ServerResponse,
        result: InteractionResults,
        options?: { mergeWithLastSubmission?: boolean },
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
        constructor(info: { name: string; requestable?: boolean }, ...checks: Check[]);
        constructor(
            info: { name: string; requestable?: boolean },
            details: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject>,
            ...checks: Check[]
        );

        name: string;
        requestable: boolean;
        details?: (ctx: KoaContextWithOIDC) => Promise<UnknownObject>;
        checks: Checks;
    }

    function base(): DefaultPolicy;
}

export namespace errors {
    class OIDCProviderError extends Error {
        constructor(status: number, message: string);
        error: string;
        error_description?: string;
        error_detail?: string;
        expose: boolean;
        statusCode: number;
        status: number;
        allow_redirect: boolean;
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
}
