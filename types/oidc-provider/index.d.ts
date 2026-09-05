import * as crypto from "node:crypto";
import * as dns from "node:dns";
import * as http from "node:http";
import * as http2 from "node:http2";
import * as https from "node:https";

import KeyGrip = require("keygrip");
import Koa = require("koa");

export {};

export type CanBePromise<T> = Promise<T> | T;

export interface UnknownObject {
    [key: string]: unknown;
}

export interface JWK {
    kid?: string | undefined;
    x5c?: readonly string[] | undefined;
    alg?: string | undefined;
    crv?: string | undefined;
    d?: string | undefined;
    dp?: string | undefined;
    dq?: string | undefined;
    e?: string | undefined;
    ext?: boolean | undefined;
    k?: string | undefined;
    key_ops?: readonly string[] | undefined;
    kty?: string | undefined;
    n?: string | undefined;
    p?: string | undefined;
    q?: string | undefined;
    qi?: string | undefined;
    use?: string | undefined;
    pub?: string | undefined;
    priv?: string | undefined;
    x?: string | undefined;
    y?: string | undefined;
}

export interface JWKS {
    keys: ReadonlyArray<JWK | ExternalSigningKey>;
}

export interface AllClientMetadata {
    client_id?: string | undefined;
    redirect_uris?: readonly string[] | undefined;
    grant_types?: readonly string[] | undefined;
    response_types?: readonly ResponseType[] | undefined;
    response_modes?: readonly string[] | undefined;

    application_type?: "web" | "native" | undefined;
    client_id_issued_at?: number | undefined;
    client_name?: string | undefined;
    client_secret_expires_at?: number | undefined;
    client_secret?: string | undefined;
    client_uri?: string | undefined;
    contacts?: readonly string[] | undefined;
    default_acr_values?: readonly string[] | undefined;
    default_max_age?: number | undefined;
    id_token_signed_response_alg?: SigningAlgorithmWithNone | undefined;
    initiate_login_uri?: string | undefined;
    jwks_uri?: string | undefined;
    jwks?: JWKS | undefined;
    logo_uri?: string | undefined;
    policy_uri?: string | undefined;
    post_logout_redirect_uris?: readonly string[] | undefined;
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
    id_token_encrypted_response_alg?: EncryptionAlgValues | undefined;
    id_token_encrypted_response_enc?: EncryptionEncValues | undefined;
    userinfo_encrypted_response_alg?: EncryptionAlgValues | undefined;
    userinfo_encrypted_response_enc?: EncryptionEncValues | undefined;
    authorization_signed_response_alg?: SigningAlgorithm | undefined;
    authorization_encrypted_response_alg?: EncryptionAlgValues | undefined;
    authorization_encrypted_response_enc?: EncryptionEncValues | undefined;
    tls_client_certificate_bound_access_tokens?: boolean | undefined;
    use_mtls_endpoint_aliases?: boolean | undefined;
    dpop_bound_access_tokens?: boolean | undefined;
    authorization_details_types?: readonly string[] | undefined;

    require_signed_request_object?: boolean | undefined;
    require_pushed_authorization_requests?: boolean | undefined;

    backchannel_user_code_parameter?: boolean | undefined;
    backchannel_authentication_request_signing_alg?: string | undefined;
    backchannel_client_notification_endpoint?: string | undefined;
    backchannel_token_delivery_mode?: CIBADeliveryMode | undefined;

    authorization_encryption_alg_values_supported?: readonly EncryptionAlgValues[] | undefined;
    authorization_encryption_enc_values_supported?: readonly EncryptionEncValues[] | undefined;
    authorization_signing_alg_values_supported?: readonly SigningAlgorithm[] | undefined;
    backchannel_authentication_request_signing_alg_values_supported?: readonly SigningAlgorithm[] | undefined;
    id_token_encryption_alg_values_supported?: readonly EncryptionAlgValues[] | undefined;
    id_token_encryption_enc_values_supported?: readonly EncryptionEncValues[] | undefined;
    id_token_signing_alg_values_supported?: readonly SigningAlgorithmWithNone[] | undefined;
    introspection_encryption_alg_values_supported?: readonly EncryptionAlgValues[] | undefined;
    introspection_encryption_enc_values_supported?: readonly EncryptionEncValues[] | undefined;
    introspection_signing_alg_values_supported?: readonly SigningAlgorithmWithNone[] | undefined;
    request_object_encryption_alg_values_supported?: readonly EncryptionAlgValues[] | undefined;
    request_object_encryption_enc_values_supported?: readonly EncryptionEncValues[] | undefined;
    request_object_signing_alg_values_supported?: readonly SigningAlgorithmWithNone[] | undefined;
    subject_types_supported?: readonly SubjectTypes[] | undefined;
    token_endpoint_auth_methods_supported?: readonly ClientAuthMethod[] | undefined;
    token_endpoint_auth_signing_alg_values_supported?: readonly SigningAlgorithm[] | undefined;
    userinfo_encryption_alg_values_supported?: readonly EncryptionAlgValues[] | undefined;
    userinfo_encryption_enc_values_supported?: readonly EncryptionEncValues[] | undefined;
    userinfo_signing_alg_values_supported?: readonly SigningAlgorithmWithNone[] | undefined;

    [key: string]: unknown;
}

export interface ClientMetadata extends AllClientMetadata {
    client_id: string;
}

export type ResponseType =
    | "code"
    | "id_token"
    | "code id_token"
    | "id_token token"
    | "code token"
    | "code id_token token"
    | "none";
export type CIBADeliveryMode = "poll" | "ping";
export type SubjectTypes = "public" | "pairwise";
export type ClientAuthMethod =
    | "client_secret_basic"
    | "client_secret_post"
    | "client_secret_jwt"
    | "private_key_jwt"
    | "tls_client_auth"
    | "self_signed_tls_client_auth"
    | "attest_jwt_client_auth"
    | "none";

export interface ClaimsParameterMember {
    essential?: boolean | undefined;
    value?: string | undefined;
    values?: readonly string[] | undefined;

    [key: string]: unknown;
}

export interface ClaimsParameter {
    id_token?:
        | {
            [key: string]: null | ClaimsParameterMember;
        }
        | undefined;
    userinfo?:
        | {
            [key: string]: null | ClaimsParameterMember;
        }
        | undefined;
}

export interface ClientAuthorizationState {
    persistsLogout?: boolean | undefined;
    sid?: string | undefined;
    grantId?: string | undefined;
}

export interface PromptDetail {
    name: "login" | "consent" | string;
    reasons: string[];
    details: UnknownObject;
}

declare class Interaction extends BaseModel {
    readonly kind: "Interaction";
    iat: number;
    exp: number;
    session?:
        | {
            accountId: string;
            uid: string;
            cookie: string;
            acr?: string | undefined;
            amr?: string[] | undefined;
        }
        | undefined;
    params: UnknownObject;
    prompt: PromptDetail;
    result?: InteractionResults | undefined;
    returnTo: string;
    deviceCode?: string | undefined;
    trusted?: string[] | undefined;
    uid: string;
    lastSubmission?: InteractionResults | undefined;
    grantId?: string | undefined;
    cid: string;

    save(ttl: number): Promise<string>;
    persist(): Promise<string>;
}

declare class Session extends BaseModel {
    readonly kind: "Session";
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
    authorizations?:
        | {
            [clientId: string]: ClientAuthorizationState;
        }
        | undefined;

    authTime(): number | undefined;
    past(age: number): boolean;

    ensureClientContainer(clientId: string): void;
    loginAccount(details: {
        accountId: string;
        acr?: string | undefined;
        amr?: string[] | undefined;
        loginTs?: number | undefined;
        transient?: boolean | undefined;
    }): void;
    authorizationFor(clientId: string): ClientAuthorizationState;
    sidFor(clientId: string): string | undefined;
    sidFor(clientId: string, value: string): void;
    grantIdFor(clientId: string): string | undefined;
    grantIdFor(clientId: string, value: string): void;

    save(ttl: number): Promise<string>;
    persist(): Promise<string>;
    destroy(): Promise<void>;
    resetIdentifier(): void;
    static find<T>(this: { new(...args: any[]): T }, cookieId: string): Promise<T | undefined>;
    static findByUid(uid: string): Promise<Session | undefined>;
    static get(ctx: Koa.Context): Promise<Session>;
}

declare class Grant extends BaseToken {
    constructor(properties?: {
        clientId?: string | undefined;
        accountId?: string | undefined;
        rar?: AuthorizationDetail[] | undefined;
    });

    accountId?: string | undefined;
    clientId?: string | undefined;
    openid?:
        | {
            scope?: string | undefined;
            claims?: string[] | undefined;
        }
        | undefined;
    resources?:
        | {
            [resource: string]: string;
        }
        | undefined;
    rar?: AuthorizationDetail[] | undefined;
    rejected?: Pick<Grant, "openid" | "resources"> | undefined;

    addOIDCScope(scope: string | string[] | Set<string>): undefined;
    rejectOIDCScope(scope: string | string[] | Set<string>): undefined;
    getOIDCScope(): string;
    getRejectedOIDCScope(): string;
    getOIDCScopeEncountered(): string;
    getOIDCScopeFiltered(filter: string[] | Set<string>): string;

    addOIDCClaims(claims: string[] | Set<string>): undefined;
    rejectOIDCClaims(claims: string[] | Set<string>): undefined;
    getOIDCClaims(): string[];
    getRejectedOIDCClaims(): string[];
    getOIDCClaimsEncountered(): string[];
    getOIDCClaimsFiltered(filter: string[] | Set<string>): string[];

    addResourceScope(resource: string, scope: string | string[] | Set<string>): undefined;
    rejectResourceScope(resource: string, scope: string | string[] | Set<string>): undefined;
    getResourceScope(resource: string): string;
    getRejectedResourceScope(resource: string): string;
    getResourceScopeEncountered(resource: string): string;
    getResourceScopeFiltered(resource: string, filter: string[] | Set<string>): string;

    addRar(detail: AuthorizationDetail): undefined;
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
    ttlPercentagePassed(): number;

    readonly isValid: boolean;
    readonly isExpired: boolean;
    readonly remainingTTL: number;

    static readonly adapter: Adapter;

    static IN_PAYLOAD: string[];

    static find<T>(this: { new(...args: any[]): T }, id: string, options?: object): Promise<T | undefined>;
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
    readonly resourceIndicators: Set<string | undefined>;

    ttlPercentagePassed(): number;
    /**
     * Generates a new opaque token identifier for the model's configured format.
     * Used to mint a value without persisting the token via the adapter.
     */
    generateTokenId(): string;

    readonly isValid: boolean;
    readonly isExpired: boolean;
    readonly remainingTTL: number;
    readonly expiration: number;

    static IN_PAYLOAD: string[];

    static find<T>(
        this: { new(...args: any[]): T },
        jti: string,
        options?: { ignoreExpiration?: boolean | undefined },
    ): Promise<T | undefined>;
    save(): Promise<string>;

    readonly adapter: Adapter;
    static readonly adapter: Adapter;
}

declare class ReplayDetection extends BaseModel {
    readonly kind: "ReplayDetection";
    iss?: string | undefined;
    static unique(iss: string, jti: string, exp: number): Promise<boolean>;
}

declare class PushedAuthorizationRequest extends BaseModel {
    constructor(properties: {
        request: string;
        attestationJkt?: string | undefined;
        dpopJkt?: string | undefined;
        trusted?: string[] | undefined;
    });
    readonly kind: "PushedAuthorizationRequest";
    request: string;
    attestationJkt?: string | undefined;
    dpopJkt?: string | undefined;
    trusted?: string[] | undefined;
    consumed: unknown;

    consume(): Promise<void>;
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
        "x5t#S256"?: string | undefined;
        jkt?: string | undefined;
        grantId: string;
        gty: string;
        rar?: AuthorizationDetail[] | undefined;
        [key: string]: unknown;
    });
    readonly kind: "RefreshToken";
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
    "x5t#S256"?: string | undefined;
    jkt?: string | undefined;
    grantId?: string | undefined;
    gty?: string | undefined;
    rar?: AuthorizationDetail[] | undefined;
    attestationJkt?: string | undefined;
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
        "x5t#S256"?: string | undefined;
        dpopJkt?: string | undefined;
        grantId: string;
        gty: string;
        rar?: AuthorizationDetail[] | undefined;
        [key: string]: unknown;
    });
    readonly kind: "AuthorizationCode";
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
    "x5t#S256"?: string | undefined;
    dpopJkt?: string | undefined;
    grantId?: string | undefined;
    gty?: string | undefined;
    rar?: AuthorizationDetail[] | undefined;
    attestationJkt?: string | undefined;

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
        rar?: AuthorizationDetail[] | undefined;
        [key: string]: unknown;
    });

    static findByUserCode(
        userCode: string,
        options?: { ignoreExpiration?: boolean | undefined },
    ): Promise<DeviceCode | undefined>;

    readonly kind: "DeviceCode";
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
    rar?: AuthorizationDetail[] | undefined;
    attestationJkt?: string | undefined;
    consumed: unknown;

    consume(): Promise<void>;

    static revokeByGrantId(grantId: string): Promise<void>;
}

declare class BackchannelAuthenticationRequest extends BaseToken {
    constructor(properties?: { clientId?: string | undefined; accountId?: string | undefined });

    readonly kind: "BackchannelAuthenticationRequest";
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
    rar?: AuthorizationDetail[] | undefined;
    attestationJkt?: string | undefined;
    consumed: unknown;

    static revokeByGrantId(grantId: string): Promise<void>;
}

declare class PreAuthorizedCode extends BaseToken {
    constructor(properties: {
        accountId: string;
        clientId: string;
        grantId: string;
        claims?: ClaimsParameter | undefined;
        rar?: AuthorizationDetail[] | undefined;
        resource?: string | string[] | undefined;
        scope: string;
        txCode?: string | undefined;
        [key: string]: unknown;
    });

    readonly kind: "PreAuthorizedCode";
    accountId: string;
    grantId: string;
    claims?: ClaimsParameter | undefined;
    rar?: AuthorizationDetail[] | undefined;
    resource?: string | string[] | undefined;
    scope: string;
    txCode?: string | undefined;
    consumed: unknown;

    consume(): Promise<void>;

    static revokeByGrantId(grantId: string): Promise<void>;
}

declare class ClientCredentials extends BaseToken {
    constructor(properties: {
        client: Client;
        resourceServer?: ResourceServerInstance | undefined;
        aud?: string | string[] | undefined;
        scope?: string | undefined;
        rar?: AuthorizationDetail[] | undefined;
        [key: string]: unknown;
    });
    readonly kind: "ClientCredentials";
    scope?: string | undefined;
    extra?: UnknownObject | undefined;
    aud?: string | string[] | undefined;
    readonly tokenType: string;
    "x5t#S256"?: string | undefined;
    jkt?: string | undefined;
    resourceServer?: ResourceServerInstance | undefined;
    rar?: AuthorizationDetail[] | undefined;

    setAudience(audience: string | string[]): void;
    setThumbprint(prop: "x5t", input: string | crypto.X509Certificate): void;
    setThumbprint(prop: "jkt", input: string): void;
    isSenderConstrained(): boolean;
}

declare class InitialAccessToken extends BaseToken {
    constructor(properties?: {
        expiresIn?: number | undefined;
        policies?: string[] | undefined;
        [key: string]: unknown;
    });
    readonly kind: "InitialAccessToken";
    clientId: undefined;
    policies?: string[] | undefined;
}

declare class RegistrationAccessToken extends BaseToken {
    readonly kind: "RegistrationAccessToken";
    policies?: string[] | undefined;
}

declare class AccessToken extends BaseToken {
    constructor(properties: {
        client: Client;
        accountId: string;
        resourceServer?: ResourceServerInstance | undefined;
        claims?: ClaimsParameter | undefined;
        aud?: string | string[] | undefined;
        scope?: string | undefined;
        sid?: string | undefined;
        sessionUid?: string | undefined;
        expiresWithSession?: boolean | undefined;
        "x5t#S256"?: string | undefined;
        jkt?: string | undefined;
        grantId: string;
        gty: string;
        rar?: AuthorizationDetail[] | undefined;
        [key: string]: unknown;
    });
    readonly kind: "AccessToken";
    accountId: string;
    resourceServer?: ResourceServerInstance | undefined;
    aud?: string | string[] | undefined;
    claims?: ClaimsParameter | undefined;
    extra?: UnknownObject | undefined;
    grantId: string;
    scope?: string | undefined;
    gty: string;
    rar?: AuthorizationDetail[] | undefined;
    sid?: string | undefined;
    sessionUid?: string | undefined;
    expiresWithSession?: boolean | undefined;
    readonly tokenType: string;
    "x5t#S256"?: string | undefined;
    jkt?: string | undefined;

    setAudience(audience: string | string[]): void;
    setThumbprint(prop: "x5t", input: string | crypto.X509Certificate): void;
    setThumbprint(prop: "jkt", input: string): void;
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
        use: "idtoken" | "logout" | "userinfo" | "introspection" | "authorization";
        expiresAt?: number | undefined;
    }): Promise<string>;
    static validate(idToken: string, client: Client): Promise<{ header: UnknownObject; payload: UnknownObject }>;
}

declare class Claims {
    constructor(
        available: UnknownObject,
        context:
            | { ctx: KoaContextWithOIDC; client?: Client | undefined }
            | { ctx?: undefined; client: Client },
    );

    scope(value?: string): this;
    mask(value: UnknownObject): void;
    rejected(value?: readonly string[]): void;
    result(): Promise<UnknownObject>;
}

declare class Client {
    responseTypeAllowed(type: ResponseType): boolean;
    responseModeAllowed(type: string, responseType: ResponseType, fapiProfile: FapiProfile | undefined): boolean;
    grantTypeAllowed(type: string): boolean;
    redirectUriAllowed(redirectUri: string): boolean;
    postLogoutRedirectUriAllowed(postLogoutRedirectUri: string): boolean;
    includeSid(): boolean;
    compareClientSecret(actual: string): CanBePromise<boolean>;

    metadata(): ClientMetadata;

    backchannelPing(request: BackchannelAuthenticationRequest): Promise<void>;

    readonly clientId: string;

    readonly grantTypes?: readonly string[] | undefined;
    readonly redirectUris?: readonly string[] | undefined;
    readonly responseTypes?: readonly ResponseType[] | undefined;
    readonly responseModes?: readonly string[] | undefined;

    readonly applicationType?: "web" | "native" | undefined;
    readonly clientIdIssuedAt?: number | undefined;
    readonly clientName?: string | undefined;
    readonly clientSecretExpiresAt?: number | undefined;
    readonly clientSecret?: string | undefined;
    readonly clientUri?: string | undefined;
    readonly contacts?: readonly string[] | undefined;
    readonly defaultAcrValues?: readonly string[] | undefined;
    readonly defaultMaxAge?: number | undefined;
    readonly idTokenSignedResponseAlg?: string | undefined;
    readonly initiateLoginUri?: string | undefined;
    readonly jwksUri?: string | undefined;
    readonly jwks?: JWKS | undefined;
    readonly logoUri?: string | undefined;
    readonly policyUri?: string | undefined;
    readonly postLogoutRedirectUris?: readonly string[] | undefined;
    readonly requireAuthTime?: boolean | undefined;
    readonly scope?: string | undefined;
    readonly sectorIdentifierUri?: string | undefined;
    readonly subjectType?: SubjectTypes | undefined;
    readonly clientAuthMethod?: string | undefined;
    readonly tokenEndpointAuthMethod?: string | undefined;
    readonly tosUri?: string | undefined;

    readonly tlsClientAuthSubjectDn?: string | undefined;
    readonly tlsClientAuthSanDns?: string | undefined;
    readonly tlsClientAuthSanUri?: string | undefined;
    readonly tlsClientAuthSanIp?: string | undefined;
    readonly tlsClientAuthSanEmail?: string | undefined;
    readonly tokenEndpointAuthSigningAlg?: string | undefined;
    readonly clientAuthSigningAlg?: string | undefined;
    readonly userinfoSignedResponseAlg?: string | undefined;
    readonly introspectionSignedResponseAlg?: string | undefined;
    readonly introspectionEncryptedResponseAlg?: string | undefined;
    readonly introspectionEncryptedResponseEnc?: string | undefined;
    readonly backchannelLogoutSessionRequired?: boolean | undefined;
    readonly backchannelLogoutUri?: string | undefined;
    readonly requestObjectSigningAlg?: string | undefined;
    readonly requestObjectEncryptionAlg?: string | undefined;
    readonly requestObjectEncryptionEnc?: string | undefined;
    readonly idTokenEncryptedResponseAlg?: string | undefined;
    readonly idTokenEncryptedResponseEnc?: string | undefined;
    readonly userinfoEncryptedResponseAlg?: string | undefined;
    readonly userinfoEncryptedResponseEnc?: string | undefined;
    readonly authorizationSignedResponseAlg?: string | undefined;
    readonly authorizationEncryptedResponseAlg?: string | undefined;
    readonly authorizationEncryptedResponseEnc?: string | undefined;
    readonly tlsClientCertificateBoundAccessTokens?: boolean | undefined;
    readonly useMtlsEndpointAliases?: boolean | undefined;
    readonly dpopBoundAccessTokens?: boolean | undefined;
    readonly authorizationDetailsTypes?: readonly string[] | undefined;
    readonly requireSignedRequestObject?: boolean | undefined;
    readonly requirePushedAuthorizationRequests?: boolean | undefined;

    readonly backchannelUserCodeParameter?: boolean | undefined;
    readonly backchannelAuthenticationRequestSigningAlg?: string | undefined;
    readonly backchannelClientNotificationEndpoint?: string | undefined;
    readonly backchannelTokenDeliveryMode?: CIBADeliveryMode | undefined;

    readonly authorizationEncryptionAlgValuesSupported?: readonly EncryptionAlgValues[] | undefined;
    readonly authorizationEncryptionEncValuesSupported?: readonly EncryptionEncValues[] | undefined;
    readonly authorizationSigningAlgValuesSupported?: readonly SigningAlgorithm[] | undefined;
    readonly backchannelAuthenticationRequestSigningAlgValuesSupported?: readonly SigningAlgorithm[] | undefined;
    readonly idTokenEncryptionAlgValuesSupported?: readonly EncryptionAlgValues[] | undefined;
    readonly idTokenEncryptionEncValuesSupported?: readonly EncryptionEncValues[] | undefined;
    readonly idTokenSigningAlgValuesSupported?: readonly SigningAlgorithmWithNone[] | undefined;
    readonly introspectionEncryptionAlgValuesSupported?: readonly EncryptionAlgValues[] | undefined;
    readonly introspectionEncryptionEncValuesSupported?: readonly EncryptionEncValues[] | undefined;
    readonly introspectionSigningAlgValuesSupported?: readonly SigningAlgorithmWithNone[] | undefined;
    readonly requestObjectEncryptionAlgValuesSupported?: readonly EncryptionAlgValues[] | undefined;
    readonly requestObjectEncryptionEncValuesSupported?: readonly EncryptionEncValues[] | undefined;
    readonly requestObjectSigningAlgValuesSupported?: readonly SigningAlgorithmWithNone[] | undefined;
    readonly subjectTypesSupported?: readonly SubjectTypes[] | undefined;
    readonly tokenEndpointAuthMethodsSupported?: readonly ClientAuthMethod[] | undefined;
    readonly tokenEndpointAuthSigningAlgValuesSupported?: readonly SigningAlgorithm[] | undefined;
    readonly userinfoEncryptionAlgValuesSupported?: readonly EncryptionAlgValues[] | undefined;
    readonly userinfoEncryptionEncValuesSupported?: readonly EncryptionEncValues[] | undefined;
    readonly userinfoSigningAlgValuesSupported?: readonly SigningAlgorithmWithNone[] | undefined;

    [key: string]: unknown;

    static find(id: string): Promise<Client | undefined>;
    static validate(metadata: ClientMetadata): Promise<void>;
}

export type {
    AccessToken,
    AuthorizationCode,
    BackchannelAuthenticationRequest,
    Claims,
    Client,
    ClientCredentials,
    DeviceCode,
    Grant,
    IdToken,
    InitialAccessToken,
    Interaction,
    OIDCContext,
    PreAuthorizedCode,
    PushedAuthorizationRequest,
    RefreshToken,
    RegistrationAccessToken,
    ReplayDetection,
    Session,
};

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
        readonly PreAuthorizedCode?: PreAuthorizedCode | undefined;
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
    readonly resourceServers?: { [key: string]: ResourceServerInstance } | undefined;
    readonly fapiProfile?: FapiProfile | undefined;

    entity(key: string, value: any): void;

    urlFor(name: string, options?: UnknownObject): string;
    isFapi(...profiles: FapiProfile[]): FapiProfile | undefined;
    promptPending(name: string): boolean;

    readonly requestParamClaims: Set<string>;
    readonly requestParamScopes: Set<string>;
    readonly requestParamOIDCScopes: Set<string>;
    readonly prompts: Set<string>;
    readonly responseMode?: string | undefined;
    readonly result?: InteractionResults | undefined;

    readonly redirectUriCheckPerformed?: boolean | undefined;
    readonly trusted?: string[] | undefined;
    readonly registrationAccessToken?: RegistrationAccessToken | undefined;
    readonly deviceCode?: DeviceCode | undefined;
    readonly authorizationCode?: AuthorizationCode | undefined;
    readonly refreshToken?: RefreshToken | undefined;
    readonly accessToken?: AccessToken | undefined;
    readonly account?: Account | undefined;
    readonly client?: Client | undefined;
    readonly grant?: Grant | undefined;
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

export interface TokenEndpointGrantParameters extends UnknownObject {
    grant_type: string;
    scope?: string | undefined;
    resource?: string | string[] | undefined;
    authorization_details?: string | undefined;
}

/** Context passed to a handler registered with `Provider.registerGrantType()`. */
export type TokenEndpointGrantContext<Params extends object = UnknownObject> = KoaContextWithOIDC & {
    oidc: OIDCContext & {
        readonly provider: Provider;
        readonly client: Client;
        readonly params: TokenEndpointGrantParameters & Params;
        readonly resourceServers: { [identifier: string]: ResourceServerInstance };
    };
};

/* eslint-disable @typescript-eslint/no-invalid-void-type */
// BEGIN GENERATED OIDC-PROVIDER CONTRACTS
// oidc-provider types artifact "9.12.0"; schema 1; sha256 781afaad6598727ec6dbbfea7486752924eb51914dd4cac579f9244a84041e9a
export type FindAccount = (
    ctx: KoaContextWithOIDC,
    sub: string,
    token?:
        | AuthorizationCode
        | AccessToken
        | RefreshToken
        | DeviceCode
        | BackchannelAuthenticationRequest
        | PreAuthorizedCode,
) => CanBePromise<Account | undefined>;
export type TokenFormat = "opaque" | "jwt";
export type FapiProfile = "1.0 Final" | "2.0";

/**
 * A synchronous TTL policy callback. The returned number of seconds must be a
 * positive safe integer.
 */
export type TTLFunction<T, WithClient extends boolean = true> = WithClient extends true
    ? (ctx: KoaContextWithOIDC, token: T, client: Client) => number
    : (ctx: KoaContextWithOIDC, token: T) => number;

export interface AuthorizationDetail extends UnknownObject {
    type: string;
}

export interface JWTVerificationResult {
    protectedHeader: UnknownObject;
    payload: UnknownObject;
    key: crypto.KeyObject | crypto.webcrypto.CryptoKey;
}

export interface KeyAttestation {
    jwt: string;
    attestedKeys: readonly JWK[];
    payload: UnknownObject;
}

export interface OpenID4VCIProofType {
    proof_signing_alg_values_supported?: readonly string[] | undefined;
    key_attestations_required?:
        | {
            key_storage?: readonly string[] | undefined;
            user_authentication?: readonly string[] | undefined;
        }
        | undefined;
    [key: string]: unknown;
}

export interface OpenID4VCICredentialConfiguration {
    format: string;
    scope?: string | undefined;
    cryptographic_binding_methods_supported?: readonly "jwk"[] | undefined;
    proof_types_supported?:
        | {
            jwt?: OpenID4VCIProofType | undefined;
            attestation?: OpenID4VCIProofType | undefined;
        }
        | undefined;
    [key: string]: unknown;
}

export interface OpenID4VCIMetadata extends UnknownObject {
    batch_credential_issuance?:
        | {
            batch_size: number;
            [key: string]: unknown;
        }
        | undefined;
}

export type OpenID4VCIProofs =
    | {
        jwt: readonly string[];
        key_attestation?: KeyAttestation | undefined;
        attestation?: never;
    }
    | {
        attestation: KeyAttestation;
        jwt?: never;
        key_attestation?: never;
    };

export interface OpenID4VCICredentialContext {
    credentialConfigurationId: string;
    credentialConfiguration: OpenID4VCICredentialConfiguration;
    credentialIdentifier?: string | undefined;
    client: Client;
    account: Account;
    grant: Grant;
    accessToken: AccessToken;
}

export interface OpenID4VCIIssueCredentialContext extends OpenID4VCICredentialContext {
    body: UnknownObject;
    proofs?: OpenID4VCIProofs | undefined;
}

export interface OpenID4VCICredentialResponse extends UnknownObject {
    credentials: readonly unknown[];
    notification_id?: string | undefined;
}

export interface ResourceServer {
    scope: string;
    audience?: string | undefined;
    /** A positive safe integer number of seconds. */
    accessTokenTTL?: number | undefined;
    accessTokenFormat?: TokenFormat | undefined;
    jwt?:
        | {
            sign?:
                | false
                | {
                    alg?: AsymmetricSigningAlgorithm | undefined;
                    kid?: string | undefined;
                }
                | {
                    alg: SymmetricSigningAlgorithm;
                    key: crypto.KeyObject | crypto.webcrypto.CryptoKey | Buffer;
                    kid?: string | undefined;
                }
                | undefined;
            encrypt?:
                | false
                | {
                    alg: EncryptionAlgValues;
                    enc: EncryptionEncValues;
                    key: crypto.KeyObject | crypto.webcrypto.CryptoKey | Buffer;
                    kid?: string | undefined;
                }
                | undefined;
        }
        | undefined;
}

export interface ResourceServerInstance extends ResourceServer {
    readonly scopes: Set<string>;
    identifier(): string;
}

export type TLSClientAuthProperty =
    | "tls_client_auth_subject_dn"
    | "tls_client_auth_san_dns"
    | "tls_client_auth_san_uri"
    | "tls_client_auth_san_ip"
    | "tls_client_auth_san_email";

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

export type RotateRegistrationAccessTokenFunction = Exclude<
    (
        | boolean
        | ((ctx: KoaContextWithOIDC) => CanBePromise<boolean>)
    ),
    boolean
>;
export type IssueRegistrationAccessTokenFunction = Exclude<
    (
        | boolean
        | ((ctx: KoaContextWithOIDC) => CanBePromise<boolean>)
    ),
    boolean
>;

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
    aud?: string | string[] | undefined;
    authorizations?:
        | {
            [clientId: string]: ClientAuthorizationState;
        }
        | undefined;
    authTime?: number | undefined;
    claims?: ClaimsParameter | undefined;
    cid?: string | undefined;
    clientId?: string | undefined;
    codeChallenge?: string | undefined;
    codeChallengeMethod?: string | undefined;
    consumed?: any;
    deviceCode?: string | undefined;
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
    parJti?: string | undefined;
    params?: UnknownObject | undefined;
    policies?: string[] | undefined;
    prompt?: PromptDetail | undefined;
    redirectUri?: string | undefined;
    request?: string | undefined;
    rar?: AuthorizationDetail[] | undefined;
    resource?: string | string[] | undefined;
    result?: InteractionResults | undefined;
    returnTo?: string | undefined;
    rotations?: number | undefined;
    scope?: string | undefined;
    session?:
        | {
            accountId?: string | undefined;
            acr?: string | undefined;
            amr?: string[] | undefined;
            cookie?: string | undefined;
            uid?: string | undefined;
        }
        | undefined;
    sessionUid?: string | undefined;
    sid?: string | undefined;
    trusted?: string[] | undefined;
    attestationJkt?: string | undefined;
    dpopJkt?: string | undefined;
    iss?: string | undefined;
    state?: UnknownObject | undefined;
    transient?: boolean | undefined;
    uid?: string | undefined;
    userCode?: string | undefined;
    txCode?: string | undefined;
    jkt?: string | undefined;
    "x5t#S256"?: string | undefined;
}

export interface Adapter {
    upsert(id: string, payload: AdapterPayload, expiresIn?: number): Promise<undefined | void>; // eslint-disable-line @typescript-eslint/no-invalid-void-type
    find(id: string): Promise<AdapterPayload | undefined | void>; // eslint-disable-line @typescript-eslint/no-invalid-void-type
    findByUserCode(userCode: string): Promise<AdapterPayload | undefined | void>; // eslint-disable-line @typescript-eslint/no-invalid-void-type
    findByUid(uid: string): Promise<AdapterPayload | undefined | void>; // eslint-disable-line @typescript-eslint/no-invalid-void-type
    consume(id: string): Promise<undefined | void>; // eslint-disable-line @typescript-eslint/no-invalid-void-type
    destroy(id: string): Promise<undefined | void>; // eslint-disable-line @typescript-eslint/no-invalid-void-type
    revokeByGrantId(grantId: string): Promise<undefined | void>; // eslint-disable-line @typescript-eslint/no-invalid-void-type
}

export type AdapterFactory = (name: string) => Adapter;

export interface AdapterConstructor {
    new(name: string): Adapter;
}

export interface CookiesSetOptions {
    path?: string | undefined;
    domain?: string | undefined;
    secure?: boolean | undefined;
    httpOnly?: boolean | undefined;
    partitioned?: boolean | undefined;
    priority?: "low" | "medium" | "high" | undefined;
    sameSite?: boolean | "strict" | "lax" | "none" | undefined;
    signed?: boolean | undefined;
    overwrite?: boolean | undefined;
}

export interface JWTStructured {
    header?: UnknownObject | undefined;
    payload: UnknownObject;
}

export type JsonObject = { [Key in string]?: JsonValue };
export type JsonArray = JsonValue[];
export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

type RichAuthorizationRequestTypeBase = ({
    [type: string]: {
        validate: (
            ctx: KoaContextWithOIDC,
            detail: AuthorizationDetail,
            client: Client,
        ) => CanBePromise<void>;
    };
})[string];

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RichAuthorizationRequestType extends RichAuthorizationRequestTypeBase {}

export type AuthorizationDetailsForGrantSource = (
    ctx: KoaContextWithOIDC,
    source: AuthorizationCode | DeviceCode,
) => CanBePromise<readonly AuthorizationDetail[] | undefined>;

export type AuthorizationDetailsForAccessToken = (
    ctx: KoaContextWithOIDC,
    token: AccessToken | ClientCredentials,
    source:
        | AuthorizationCode
        | BackchannelAuthenticationRequest
        | DeviceCode
        | PreAuthorizedCode
        | RefreshToken
        | undefined,
    grantType: string,
) => CanBePromise<readonly AuthorizationDetail[] | undefined>;

export type AuthorizationDetailsForIntrospection = (
    ctx: KoaContextWithOIDC,
    token: AccessToken | ClientCredentials | RefreshToken,
) => CanBePromise<readonly AuthorizationDetail[] | undefined>;

export interface RichAuthorizationRequestsConfigurationBase {
    enabled?: boolean | undefined;
    /**
     * Specifies the authorization details type identifiers that shall be supported by the authorization server. Each
     * type identifier MUST have an associated validation function that defines the required structure and constraints
     * for authorization details of that specific type according to authorization server policy. The validation function
     * is responsible for rejecting unknown fields as well as missing or invalid type-specific fields with
     * `errors.InvalidAuthorizationDetails`.
     */
    types?: Readonly<Record<string, RichAuthorizationRequestType>> | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked before an AuthorizationCode or DeviceCode grant source is
     * persisted when Rich Authorization Request details were requested or granted. The function shall apply
     * authorization server policy to the requested and granted details and return the authorization details to store in
     * the grant source, or undefined. An empty array is treated as undefined.
     */
    authorizationDetailsForGrantSource?: AuthorizationDetailsForGrantSource | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked before an AccessToken or ClientCredentials token is persisted
     * whenever Rich Authorization Request details were requested or inherited from the grant source. The function shall
     * perform type-specific grant comparison, client policy enforcement, resource-specific filtering, and any response
     * enrichment. It shall return the exact authorization details assigned to the access token and returned from the
     * token endpoint, or undefined. An empty array is treated as undefined. `source` is the exchanged grant source, or
     * undefined for client credentials; `grantType` is the exact token request `grant_type` value, including full URN
     * values. To reject client-provided authorization details, throw `errors.InvalidAuthorizationDetails`.
     */
    authorizationDetailsForAccessToken?: AuthorizationDetailsForAccessToken | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked when a token containing Rich Authorization Request details is
     * introspected. It shall apply authorization server policy for the requesting party and return the authorization
     * details to include as the top-level `authorization_details` introspection response member, or undefined. An empty
     * array is treated as undefined.
     */
    authorizationDetailsForIntrospection?: AuthorizationDetailsForIntrospection | undefined;
}

export interface RichAuthorizationRequestsDisabledConfiguration extends RichAuthorizationRequestsConfigurationBase {
    enabled?: false | undefined;
}

export interface RichAuthorizationRequestsInactiveConfiguration extends RichAuthorizationRequestsConfigurationBase {
    enabled: boolean;
    /**
     * Specifies the authorization details type identifiers that shall be supported by the authorization server. Each
     * type identifier MUST have an associated validation function that defines the required structure and constraints
     * for authorization details of that specific type according to authorization server policy. The validation function
     * is responsible for rejecting unknown fields as well as missing or invalid type-specific fields with
     * `errors.InvalidAuthorizationDetails`.
     */
    types?: Readonly<Record<string, never>> | undefined;
}

export interface RichAuthorizationRequestsActiveConfiguration extends RichAuthorizationRequestsConfigurationBase {
    enabled: boolean;
    /**
     * Specifies the authorization details type identifiers that shall be supported by the authorization server. Each
     * type identifier MUST have an associated validation function that defines the required structure and constraints
     * for authorization details of that specific type according to authorization server policy. The validation function
     * is responsible for rejecting unknown fields as well as missing or invalid type-specific fields with
     * `errors.InvalidAuthorizationDetails`.
     */
    types: Readonly<Record<string, RichAuthorizationRequestType>>;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked before an AuthorizationCode or DeviceCode grant source is
     * persisted when Rich Authorization Request details were requested or granted. The function shall apply
     * authorization server policy to the requested and granted details and return the authorization details to store in
     * the grant source, or undefined. An empty array is treated as undefined.
     */
    authorizationDetailsForGrantSource: AuthorizationDetailsForGrantSource;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked before an AccessToken or ClientCredentials token is persisted
     * whenever Rich Authorization Request details were requested or inherited from the grant source. The function shall
     * perform type-specific grant comparison, client policy enforcement, resource-specific filtering, and any response
     * enrichment. It shall return the exact authorization details assigned to the access token and returned from the
     * token endpoint, or undefined. An empty array is treated as undefined. `source` is the exchanged grant source, or
     * undefined for client credentials; `grantType` is the exact token request `grant_type` value, including full URN
     * values. To reject client-provided authorization details, throw `errors.InvalidAuthorizationDetails`.
     */
    authorizationDetailsForAccessToken: AuthorizationDetailsForAccessToken;
}

export type RichAuthorizationRequestsConfiguration =
    | RichAuthorizationRequestsDisabledConfiguration
    | RichAuthorizationRequestsInactiveConfiguration
    | RichAuthorizationRequestsActiveConfiguration;

export interface FapiDisabledConfiguration {
    enabled?: false | undefined;
    /**
     * Specifies the FAPI profile version that shall be applied for security policy enforcement. The authorization
     * server shall implement the behaviors defined in the selected profile specification. Supported values include:
     *
     * - '2.0' - The authorization server shall implement behaviors from
     *   [FAPI 2.0 Security Profile](https://openid.net/specs/fapi-security-profile-2_0-final.html)
     * - '1.0 Final' - The authorization server shall implement behaviors from
     *   [FAPI 1.0 Security Profile - Part 2: Advanced](https://openid.net/specs/openid-financial-api-part-2-1_0-final.html)
     * - Function - A function that shall be invoked with arguments `(ctx, client)` to determine the profile
     *   contextually. The function shall return one of the supported profile values or undefined when FAPI behaviors
     *   should be ignored for the current request context.
     */
    profile?:
        | (
            | FapiProfile
            | ((
                ctx: KoaContextWithOIDC,
                client: Client,
            ) => FapiProfile | undefined)
        )
        | undefined;
}

export interface FapiEnabledConfiguration {
    enabled: boolean;
    /**
     * Specifies the FAPI profile version that shall be applied for security policy enforcement. The authorization
     * server shall implement the behaviors defined in the selected profile specification. Supported values include:
     *
     * - '2.0' - The authorization server shall implement behaviors from
     *   [FAPI 2.0 Security Profile](https://openid.net/specs/fapi-security-profile-2_0-final.html)
     * - '1.0 Final' - The authorization server shall implement behaviors from
     *   [FAPI 1.0 Security Profile - Part 2: Advanced](https://openid.net/specs/openid-financial-api-part-2-1_0-final.html)
     * - Function - A function that shall be invoked with arguments `(ctx, client)` to determine the profile
     *   contextually. The function shall return one of the supported profile values or undefined when FAPI behaviors
     *   should be ignored for the current request context.
     */
    profile:
        | FapiProfile
        | ((
            ctx: KoaContextWithOIDC,
            client: Client,
        ) => FapiProfile | undefined);
}

export type FapiConfiguration = FapiDisabledConfiguration | FapiEnabledConfiguration;

export type CIBATriggerAuthenticationDevice = (
    ctx: KoaContextWithOIDC,
    request: BackchannelAuthenticationRequest,
    account: Account,
    client: Client,
) => CanBePromise<void>;

export type CIBAValidateRequestContext = (
    ctx: KoaContextWithOIDC,
    requestContext?: string,
) => CanBePromise<void>;

export type CIBAVerifyUserCode = (
    ctx: KoaContextWithOIDC,
    account: Account,
    userCode?: string,
) => CanBePromise<void>;

export interface CIBAConfigurationBase {
    enabled?: boolean | undefined;
    /**
     * Specifies the token delivery modes supported by this authorization server. The following delivery modes are
     * defined:
     * - `poll` - Client polls the token endpoint for completion
     * - `ping` - Authorization server notifies client of completion via HTTP callback
     */
    deliveryModes?: readonly CIBADeliveryMode[] | ReadonlySet<CIBADeliveryMode> | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to initiate authentication and authorization processes on the
     * end-user's Authentication Device as defined in the CIBA specification. This function is executed after accepting
     * the backchannel authentication request but before transmitting the response to the requesting client.
     *
     * Upon successful end-user authentication, implementations shall use `provider.backchannelResult()` to complete the
     * Consumption Device login process.
     */
    triggerAuthenticationDevice?: CIBATriggerAuthenticationDevice | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is intended as a starting point and SHOULD be customized by a deployment.
     *
     * Specifies a helper function that shall be invoked to validate the `binding_message` parameter according to
     * authorization server policy. This function MUST reject invalid binding messages by throwing appropriate error
     * instances.
     *
     * **Recommendation:** Use `throw new errors.InvalidBindingMessage('validation error message')` when the
     * binding_message violates authorization server policy.
     *
     * **Recommendation:** Use `return undefined` when a binding_message is not required by policy and was not provided
     * in the request.
     */
    validateBindingMessage?:
        | ((
            ctx: KoaContextWithOIDC,
            bindingMessage?: string,
        ) => CanBePromise<void>)
        | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to validate the `request_context` parameter according to
     * authorization server policy. This function MUST enforce policy requirements for request context validation and
     * reject non-compliant requests.
     *
     * **Recommendation:** Use `throw new errors.InvalidRequest('validation error message')` when the request_context is
     * required by policy but missing or invalid.
     *
     * **Recommendation:** Use `return undefined` when a request_context is not required by policy and was not provided
     * in the request.
     */
    validateRequestContext?: CIBAValidateRequestContext | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to process the `login_hint_token` parameter and extract the
     * corresponding accountId value for request processing. This function MUST validate token expiration and format
     * according to authorization server policy. Returning `undefined` causes the request to fail because no end-user
     * could be identified.
     *
     * **Recommendation:** Use `throw new errors.ExpiredLoginHintToken('validation error message')` when the
     * login_hint_token has expired.
     *
     * **Recommendation:** Use `throw new errors.InvalidRequest('validation error message')` when the login_hint_token
     * format or content is invalid.
     *
     * **Recommendation:** Use `return undefined` when the accountId cannot be determined from the provided
     * login_hint_token.
     */
    processLoginHintToken?:
        | ((
            ctx: KoaContextWithOIDC,
            loginHintToken?: string,
        ) => CanBePromise<string | undefined>)
        | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to process the `login_hint` parameter and extract the
     * corresponding accountId value for request processing. This function MUST validate the hint format and content
     * according to authorization server policy. Returning `undefined` causes the request to fail because no end-user
     * could be identified.
     *
     * **Recommendation:** Use `throw new errors.InvalidRequest('validation error message')` when the login_hint format
     * or content is invalid.
     *
     * **Recommendation:** Use `return undefined` when the accountId cannot be determined from the provided login_hint.
     */
    processLoginHint?:
        | ((
            ctx: KoaContextWithOIDC,
            loginHint?: string,
        ) => CanBePromise<string | undefined>)
        | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to verify the presence and validity of the `user_code`
     * parameter when required by authorization server policy.
     *
     * **Recommendation:** Use `throw new errors.MissingUserCode('validation error message')` when user_code is required
     * by policy but was not provided.
     *
     * **Recommendation:** Use `throw new errors.InvalidUserCode('validation error message')` when the provided
     * user_code value is invalid or does not meet policy requirements.
     *
     * **Recommendation:** Use `return undefined` when no user_code was provided and it is not required by authorization
     * server policy.
     */
    verifyUserCode?: CIBAVerifyUserCode | undefined;
}

export interface CIBADisabledConfiguration extends CIBAConfigurationBase {
    enabled?: false | undefined;
}

export interface CIBAEnabledConfiguration extends CIBAConfigurationBase {
    enabled: boolean;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to initiate authentication and authorization processes on the
     * end-user's Authentication Device as defined in the CIBA specification. This function is executed after accepting
     * the backchannel authentication request but before transmitting the response to the requesting client.
     *
     * Upon successful end-user authentication, implementations shall use `provider.backchannelResult()` to complete the
     * Consumption Device login process.
     */
    triggerAuthenticationDevice: CIBATriggerAuthenticationDevice;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to validate the `request_context` parameter according to
     * authorization server policy. This function MUST enforce policy requirements for request context validation and
     * reject non-compliant requests.
     *
     * **Recommendation:** Use `throw new errors.InvalidRequest('validation error message')` when the request_context is
     * required by policy but missing or invalid.
     *
     * **Recommendation:** Use `return undefined` when a request_context is not required by policy and was not provided
     * in the request.
     */
    validateRequestContext: CIBAValidateRequestContext;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to verify the presence and validity of the `user_code`
     * parameter when required by authorization server policy.
     *
     * **Recommendation:** Use `throw new errors.MissingUserCode('validation error message')` when user_code is required
     * by policy but was not provided.
     *
     * **Recommendation:** Use `throw new errors.InvalidUserCode('validation error message')` when the provided
     * user_code value is invalid or does not meet policy requirements.
     *
     * **Recommendation:** Use `return undefined` when no user_code was provided and it is not required by authorization
     * server policy.
     */
    verifyUserCode: CIBAVerifyUserCode;
}

export type CIBAConfiguration = CIBADisabledConfiguration | CIBAEnabledConfiguration;

export type MTLSGetCertificate = (
    ctx: KoaContextWithOIDC,
) => crypto.X509Certificate | string | undefined;
export type MTLSCertificateAuthorized = (ctx: KoaContextWithOIDC) => boolean;
export type MTLSCertificateSubjectMatches = (
    ctx: KoaContextWithOIDC,
    property: TLSClientAuthProperty,
    expected: string,
) => boolean;

export interface MTLSConfigurationBase {
    enabled?: boolean | undefined;
    /**
     * Specifies whether Certificate-Bound Access Tokens shall be enabled as defined in RFC 8705 sections 3 and 4. When
     * enabled, the authorization server shall expose the client's `tls_client_certificate_bound_access_tokens` metadata
     * property for mutual TLS certificate binding functionality.
     */
    certificateBoundAccessTokens?: boolean | undefined;
    /**
     * Specifies whether Self-Signed Certificate Mutual TLS client authentication shall be enabled as defined in RFC
     * 8705 section 2.2. When enabled, the authorization server shall support the `self_signed_tls_client_auth`
     * authentication method within the server's `clientAuthMethods` configuration.
     */
    selfSignedTlsClientAuth?: boolean | undefined;
    /**
     * Specifies whether PKI Mutual TLS client authentication shall be enabled as defined in RFC 8705 section 2.1. When
     * enabled, the authorization server shall support the `tls_client_auth` authentication method within the server's
     * `clientAuthMethods` configuration.
     */
    tlsClientAuth?: boolean | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to retrieve the client certificate used in the current request.
     * Returning `undefined` causes authentication to fail wherever a certificate is required.
     */
    getCertificate?: MTLSGetCertificate | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to determine whether the client certificate used in the request
     * is verified and originates from a trusted Certificate Authority for the requesting client. This validation is
     * exclusively used for the `tls_client_auth` client authentication method.
     *
     * `true` accepts the certificate trust result; `false` rejects client authentication.
     */
    certificateAuthorized?: MTLSCertificateAuthorized | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to determine whether the client certificate subject used in the
     * request matches the registered client property according to authorization server policy. This validation is
     * exclusively used for the `tls_client_auth` client authentication method.
     *
     * `property` is the registered `tls_client_auth_*` metadata name and `expected` is its registered value. `true`
     * accepts the subject match; `false` rejects client authentication.
     */
    certificateSubjectMatches?: MTLSCertificateSubjectMatches | undefined;
}

export interface MTLSDisabledConfiguration extends MTLSConfigurationBase {
    enabled?: false | undefined;
}

export interface MTLSEnabledWithoutCertificateConfiguration extends MTLSConfigurationBase {
    enabled: boolean;
    /**
     * Specifies whether Certificate-Bound Access Tokens shall be enabled as defined in RFC 8705 sections 3 and 4. When
     * enabled, the authorization server shall expose the client's `tls_client_certificate_bound_access_tokens` metadata
     * property for mutual TLS certificate binding functionality.
     */
    certificateBoundAccessTokens?: false | undefined;
    /**
     * Specifies whether Self-Signed Certificate Mutual TLS client authentication shall be enabled as defined in RFC
     * 8705 section 2.2. When enabled, the authorization server shall support the `self_signed_tls_client_auth`
     * authentication method within the server's `clientAuthMethods` configuration.
     */
    selfSignedTlsClientAuth?: false | undefined;
    /**
     * Specifies whether PKI Mutual TLS client authentication shall be enabled as defined in RFC 8705 section 2.1. When
     * enabled, the authorization server shall support the `tls_client_auth` authentication method within the server's
     * `clientAuthMethods` configuration.
     */
    tlsClientAuth?: false | undefined;
}

export type MTLSEnabledCertificateConfiguration =
    & MTLSConfigurationBase
    & {
        enabled: boolean;
        /**
         * Specifies whether PKI Mutual TLS client authentication shall be enabled as defined in RFC 8705 section 2.1.
         * When enabled, the authorization server shall support the `tls_client_auth` authentication method within the
         * server's `clientAuthMethods` configuration.
         */
        tlsClientAuth?: false | undefined;
        /**
         * **Important:**
         *
         * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
         *
         * Specifies a helper function that shall be invoked to retrieve the client certificate used in the current
         * request. Returning `undefined` causes authentication to fail wherever a certificate is required.
         */
        getCertificate: MTLSGetCertificate;
    }
    & (
        | {
            /**
             * Specifies whether Certificate-Bound Access Tokens shall be enabled as defined in RFC 8705 sections 3 and
             * 4. When enabled, the authorization server shall expose the client's
             * `tls_client_certificate_bound_access_tokens` metadata property for mutual TLS certificate binding
             * functionality.
             */
            certificateBoundAccessTokens: true;
        }
        | {
            /**
             * Specifies whether Self-Signed Certificate Mutual TLS client authentication shall be enabled as defined in
             * RFC 8705 section 2.2. When enabled, the authorization server shall support the
             * `self_signed_tls_client_auth` authentication method within the server's `clientAuthMethods`
             * configuration.
             */
            selfSignedTlsClientAuth: true;
        }
    );

export interface MTLSEnabledClientAuthenticationConfiguration extends MTLSConfigurationBase {
    enabled: boolean;
    /**
     * Specifies whether PKI Mutual TLS client authentication shall be enabled as defined in RFC 8705 section 2.1. When
     * enabled, the authorization server shall support the `tls_client_auth` authentication method within the server's
     * `clientAuthMethods` configuration.
     */
    tlsClientAuth: true;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to retrieve the client certificate used in the current request.
     * Returning `undefined` causes authentication to fail wherever a certificate is required.
     */
    getCertificate: MTLSGetCertificate;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to determine whether the client certificate used in the request
     * is verified and originates from a trusted Certificate Authority for the requesting client. This validation is
     * exclusively used for the `tls_client_auth` client authentication method.
     *
     * `true` accepts the certificate trust result; `false` rejects client authentication.
     */
    certificateAuthorized: MTLSCertificateAuthorized;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to determine whether the client certificate subject used in the
     * request matches the registered client property according to authorization server policy. This validation is
     * exclusively used for the `tls_client_auth` client authentication method.
     *
     * `property` is the registered `tls_client_auth_*` metadata name and `expected` is its registered value. `true`
     * accepts the subject match; `false` rejects client authentication.
     */
    certificateSubjectMatches: MTLSCertificateSubjectMatches;
}

export type MTLSEnabledDynamicCertificateFlagsConfiguration =
    & MTLSConfigurationBase
    & {
        enabled: boolean;
        /**
         * **Important:**
         *
         * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
         *
         * Specifies a helper function that shall be invoked to retrieve the client certificate used in the current
         * request. Returning `undefined` causes authentication to fail wherever a certificate is required.
         */
        getCertificate: MTLSGetCertificate;
        /**
         * Specifies whether PKI Mutual TLS client authentication shall be enabled as defined in RFC 8705 section 2.1.
         * When enabled, the authorization server shall support the `tls_client_auth` authentication method within the
         * server's `clientAuthMethods` configuration.
         */
        tlsClientAuth?: false | undefined;
    }
    & (
        | {
            /**
             * Specifies whether Certificate-Bound Access Tokens shall be enabled as defined in RFC 8705 sections 3 and
             * 4. When enabled, the authorization server shall expose the client's
             * `tls_client_certificate_bound_access_tokens` metadata property for mutual TLS certificate binding
             * functionality.
             */
            certificateBoundAccessTokens: boolean;
        }
        | {
            /**
             * Specifies whether Self-Signed Certificate Mutual TLS client authentication shall be enabled as defined in
             * RFC 8705 section 2.2. When enabled, the authorization server shall support the
             * `self_signed_tls_client_auth` authentication method within the server's `clientAuthMethods`
             * configuration.
             */
            selfSignedTlsClientAuth: boolean;
        }
    );

export interface MTLSEnabledDynamicTlsClientAuthConfiguration extends MTLSConfigurationBase {
    enabled: boolean;
    /**
     * Specifies whether PKI Mutual TLS client authentication shall be enabled as defined in RFC 8705 section 2.1. When
     * enabled, the authorization server shall support the `tls_client_auth` authentication method within the server's
     * `clientAuthMethods` configuration.
     */
    tlsClientAuth: boolean;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to retrieve the client certificate used in the current request.
     * Returning `undefined` causes authentication to fail wherever a certificate is required.
     */
    getCertificate: MTLSGetCertificate;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to determine whether the client certificate used in the request
     * is verified and originates from a trusted Certificate Authority for the requesting client. This validation is
     * exclusively used for the `tls_client_auth` client authentication method.
     *
     * `true` accepts the certificate trust result; `false` rejects client authentication.
     */
    certificateAuthorized: MTLSCertificateAuthorized;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to determine whether the client certificate subject used in the
     * request matches the registered client property according to authorization server policy. This validation is
     * exclusively used for the `tls_client_auth` client authentication method.
     *
     * `property` is the registered `tls_client_auth_*` metadata name and `expected` is its registered value. `true`
     * accepts the subject match; `false` rejects client authentication.
     */
    certificateSubjectMatches: MTLSCertificateSubjectMatches;
}

export type MTLSConfiguration =
    | MTLSDisabledConfiguration
    | MTLSEnabledWithoutCertificateConfiguration
    | MTLSEnabledCertificateConfiguration
    | MTLSEnabledClientAuthenticationConfiguration
    | MTLSEnabledDynamicCertificateFlagsConfiguration
    | MTLSEnabledDynamicTlsClientAuthConfiguration;

export type AttestationSignaturePublicKey = (
    ctx: KoaContextWithOIDC,
    header: UnknownObject,
    payload: UnknownObject,
    client: Client,
) => CanBePromise<crypto.KeyObject | crypto.webcrypto.CryptoKey | JWK>;

export interface AttestClientAuthConfigurationBase {
    enabled?: boolean | undefined;
    ack?: string | undefined;
    /**
     * Specifies whether Client Attestation shall be accepted or required as an additional security signal alongside
     * regular client authentication. Use `optional` to validate the signal when it is present, or `required` to require
     * the OAuth-Client-Attestation and OAuth-Client-Attestation-PoP headers after the client is identified. This uses
     * the `attestation_pop_jwt` method and does not enable DPoP combined mode.
     */
    additionalSecuritySignal?: false | "optional" | "required" | undefined;
    /**
     * Specifies the cryptographic secret value used for generating server-provided challenges. This value MUST be a
     * 32-byte Buffer instance to ensure sufficient entropy for secure challenge generation. Challenges are derived from
     * this secret rather than stored; the same value MUST be configured on all instances of a deployment and kept
     * stable across restarts.
     */
    challengeSecret?: Buffer | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to retrieve the public key used for Client Attestation JWT
     * signature verification. At the point of this function's invocation, only the JWT format has been validated; no
     * cryptographic or claims verification has occurred.
     *
     * The authorization server uses the resolved key to verify the Client Attestation JWT signature. An unsupported or
     * invalid key rejects client authentication.
     */
    getAttestationSignaturePublicKey?: AttestationSignaturePublicKey | undefined;
    /**
     * Specifies a helper function that shall be invoked to perform additional validation of the Client Attestation JWT
     * and Client Attestation Proof-of-Possession JWT beyond the specification requirements. This enables enforcement of
     * extension profiles, deployment-specific policies, or additional security constraints.
     *
     * At the point of invocation, both JWTs have undergone signature verification and standard validity claim
     * validation. The function may throw errors to reject non-compliant attestations or return successfully to indicate
     * acceptance of the client authentication attempt or additional security signal.
     */
    assertAttestationJwtAndPop?:
        | ((
            ctx: KoaContextWithOIDC,
            attestation: JWTVerificationResult,
            pop: JWTVerificationResult,
            client: Client,
        ) => CanBePromise<void>)
        | undefined;
}

export interface AttestClientAuthDisabledConfiguration extends AttestClientAuthConfigurationBase {
    enabled?: false | undefined;
}

export interface AttestClientAuthEnabledConfiguration extends AttestClientAuthConfigurationBase {
    enabled: boolean;
    /**
     * Specifies the cryptographic secret value used for generating server-provided challenges. This value MUST be a
     * 32-byte Buffer instance to ensure sufficient entropy for secure challenge generation. Challenges are derived from
     * this secret rather than stored; the same value MUST be configured on all instances of a deployment and kept
     * stable across restarts.
     */
    challengeSecret: Buffer;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to retrieve the public key used for Client Attestation JWT
     * signature verification. At the point of this function's invocation, only the JWT format has been validated; no
     * cryptographic or claims verification has occurred.
     *
     * The authorization server uses the resolved key to verify the Client Attestation JWT signature. An unsupported or
     * invalid key rejects client authentication.
     */
    getAttestationSignaturePublicKey: AttestationSignaturePublicKey;
}

export type AttestClientAuthConfiguration =
    | AttestClientAuthDisabledConfiguration
    | AttestClientAuthEnabledConfiguration;

export type OpenID4VCIIssueCredential = (
    ctx: KoaContextWithOIDC,
    details: OpenID4VCIIssueCredentialContext,
) => CanBePromise<OpenID4VCICredentialResponse>;

export type OpenID4VCIKeyAttestationSignaturePublicKey = (
    ctx: KoaContextWithOIDC,
    issuer: string,
    header: UnknownObject,
    client: Client,
) => CanBePromise<crypto.KeyObject | crypto.webcrypto.CryptoKey | JWK>;

export interface OpenID4VCIConfigurationBase {
    enabled?: boolean | undefined;
    ack?: string | undefined;
    /**
     * Specifies the cryptographic secret used to generate and validate OpenID4VCI `c_nonce` challenges exposed by the
     * nonce endpoint. This value MUST be a 32-byte Buffer instance. `c_nonce` values are derived from this secret
     * rather than stored; the same value MUST be configured on all instances of a deployment and kept stable across
     * restarts.
     */
    nonceSecret?: Buffer | undefined;
    /**
     * Specifies whether the OpenID4VCI Pre-Authorized Code Flow shall be enabled. When enabled, the authorization
     * server shall accept `urn:ietf:params:oauth:grant-type:pre-authorized_code` grant type exchanges at the token
     * endpoint. Clients using this grant type must have it registered in their `grant_types` client metadata.
     *
     * Pre-authorized codes represent issuance authorization obtained through means outside of the protocol exchanges
     * defined by this framework. Creating them, together with their underlying Grant, is an application-level concern,
     * as is delivering them to the Wallet inside a Credential Offer.
     *
     * Pre-authorized codes are single-use. An optional Transaction Code (`txCode` property, a string) may be attached
     * to a pre-authorized code, in which case the Wallet-provided `tx_code` parameter presence is validated before the
     * code is consumed and its value is then compared in constant time, a failed comparison revokes the pre-authorized
     * code and its underlying Grant.
     *
     * No ID Token is issued as part of this grant type's token exchange.
     */
    preAuthorizedCodeGrant?: boolean | undefined;
    /**
     * Free-form object with additional top-level members to be merged into the Credential Issuer Metadata response.
     */
    metadata?: OpenID4VCIMetadata | undefined;
    /**
     * Specifies static Credential Issuer metadata values for `credential_configurations_supported`.
     */
    credentialConfigurationsSupported?:
        | Readonly<Record<string, OpenID4VCICredentialConfiguration>>
        | undefined;
    /**
     * Specifies a helper function that shall be invoked to resolve the value the Access Token's `aud` claim must equal
     * in order to access the Credential Endpoint. It shall return a non-empty string.
     *
     * The default derives the Credential Endpoint URL from the incoming request, which only resolves consistently when
     * the Credential Endpoint and the Token Endpoint are served on the same host. Deployments serving the Credential
     * Endpoint on another host, such as a mutual-TLS host, shall return a fixed absolute URL from this helper.
     *
     * Whatever this helper returns MUST equal the resource indicator the Access Token was issued for; this helper and
     * the `features.resourceIndicators` configuration are two halves of the same contract. Note that OpenID4VCI
     * recommends the Credential Issuer Identifier (`ctx.oidc.issuer`) as the `resource` parameter value, which is
     * another value that does not vary with the host serving the request.
     */
    credentialEndpointExpectedAudience?:
        | ((ctx: KoaContextWithOIDC) => CanBePromise<string>)
        | undefined;
    /**
     * Specifies a helper function that shall be invoked at runtime to decide whether a specific credential
     * configuration is currently issuable for the current request context.
     */
    credentialConfigurationPolicy?:
        | ((
            ctx: KoaContextWithOIDC,
            details: OpenID4VCICredentialContext,
        ) => CanBePromise<boolean>)
        | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to perform actual credential issuance and return credential
     * response payloads. By the time this function is called all proof signatures, algorithms, types, required claims
     * (`iat`, `nonce`, `aud`), and `c_nonce` challenges have already been validated.
     *
     * The returned object MUST contain a non-empty `credentials` array. The provider emits that array and the optional
     * string `notification_id`; a missing or empty credentials array is a contract error.
     *
     * When `proofs` is present it contains a single key whose name is the proof type:
     *
     * - `jwt` The value is the original array of compact JWS strings. When the JWT proof(s) contain a `key_attestation`
     *   JOSE header parameter, the pre-parsed key attestation data is available as `proofs.key_attestation` with:
     *   - `jwt` {string} The Key Attestation JWT compact serialization.
     *   - `attestedKeys` {Object[]} The `attested_keys` claim (array of JWK objects).
     *   - `payload` {Object} The full Key Attestation JWT payload, including optional claims such as `key_storage`,
     *     `user_authentication`, and `certification`.
     *
     * - `attestation` The value is a pre-parsed object with:
     *   - `jwt` {string} The original Key Attestation JWT compact serialization.
     *   - `attestedKeys` {Object[]} The `attested_keys` claim (array of JWK objects).
     *   - `payload` {Object} The full Key Attestation JWT payload, including optional claims such as `key_storage`,
     *     `user_authentication`, and `certification` when present. If `key_attestations_required` is configured for the
     *     credential configuration, the required claims have been validated to contain at least one matching value
     *     before this function is called.
     */
    issueCredential?: OpenID4VCIIssueCredential | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function used to resolve the public key for verifying Key Attestation JWT (typ
     * `key-attestation+jwt`) signatures when the `attestation` proof type is used. At the point of invocation the JWT
     * format and `iss` claim presence have been validated; no cryptographic or further claims verification has occurred
     * yet.
     *
     * An unsupported or invalid key causes the credential endpoint to respond with `invalid_proof`.
     */
    getKeyAttestationSignaturePublicKey?: OpenID4VCIKeyAttestationSignaturePublicKey | undefined;
}

export interface OpenID4VCIDisabledConfiguration extends OpenID4VCIConfigurationBase {
    enabled?: false | undefined;
}

export interface OpenID4VCIEnabledConfiguration extends OpenID4VCIConfigurationBase {
    enabled: boolean;
    /**
     * Specifies the cryptographic secret used to generate and validate OpenID4VCI `c_nonce` challenges exposed by the
     * nonce endpoint. This value MUST be a 32-byte Buffer instance. `c_nonce` values are derived from this secret
     * rather than stored; the same value MUST be configured on all instances of a deployment and kept stable across
     * restarts.
     */
    nonceSecret: Buffer;
    /**
     * Specifies static Credential Issuer metadata values for `credential_configurations_supported`.
     */
    credentialConfigurationsSupported: Readonly<Record<string, OpenID4VCICredentialConfiguration>>;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to perform actual credential issuance and return credential
     * response payloads. By the time this function is called all proof signatures, algorithms, types, required claims
     * (`iat`, `nonce`, `aud`), and `c_nonce` challenges have already been validated.
     *
     * The returned object MUST contain a non-empty `credentials` array. The provider emits that array and the optional
     * string `notification_id`; a missing or empty credentials array is a contract error.
     *
     * When `proofs` is present it contains a single key whose name is the proof type:
     *
     * - `jwt` The value is the original array of compact JWS strings. When the JWT proof(s) contain a `key_attestation`
     *   JOSE header parameter, the pre-parsed key attestation data is available as `proofs.key_attestation` with:
     *   - `jwt` {string} The Key Attestation JWT compact serialization.
     *   - `attestedKeys` {Object[]} The `attested_keys` claim (array of JWK objects).
     *   - `payload` {Object} The full Key Attestation JWT payload, including optional claims such as `key_storage`,
     *     `user_authentication`, and `certification`.
     *
     * - `attestation` The value is a pre-parsed object with:
     *   - `jwt` {string} The original Key Attestation JWT compact serialization.
     *   - `attestedKeys` {Object[]} The `attested_keys` claim (array of JWK objects).
     *   - `payload` {Object} The full Key Attestation JWT payload, including optional claims such as `key_storage`,
     *     `user_authentication`, and `certification` when present. If `key_attestations_required` is configured for the
     *     credential configuration, the required claims have been validated to contain at least one matching value
     *     before this function is called.
     */
    issueCredential: OpenID4VCIIssueCredential;
}

export type OpenID4VCIConfiguration = OpenID4VCIDisabledConfiguration | OpenID4VCIEnabledConfiguration;

interface IntrospectionFeatureBase {
    enabled?: boolean | undefined;
    /**
     * **Important:**
     *
     * The default helper implementation is intended as a starting point and SHOULD be customized by a deployment.
     *
     * Specifies a helper function that shall be invoked to determine whether the requesting client or resource server
     * is authorized to introspect the specified token. This function enables enforcement of fine-grained access control
     * policies for token introspection operations according to authorization server security requirements.
     *
     * `true` includes the token's active response; `false` returns the normal inactive response without revealing
     * whether the token exists. The default permits confidential clients and only permits public clients to introspect
     * their own tokens.
     */
    allowedPolicy?:
        | ((
            ctx: KoaContextWithOIDC,
            client: Client,
            token: AccessToken | ClientCredentials | RefreshToken,
        ) => CanBePromise<boolean>)
        | undefined;
}

interface IntrospectionDisabledFeature extends IntrospectionFeatureBase {
    enabled?: false | undefined;
}

interface IntrospectionPossiblyEnabledFeature extends IntrospectionFeatureBase {
    enabled: boolean;
}

type RichAuthorizationRequestsActiveWithIntrospection = RichAuthorizationRequestsActiveConfiguration & {
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked when a token containing Rich Authorization Request details is
     * introspected. It shall apply authorization server policy for the requesting party and return the authorization
     * details to include as the top-level `authorization_details` introspection response member, or undefined. An empty
     * array is treated as undefined.
     */
    authorizationDetailsForIntrospection: AuthorizationDetailsForIntrospection;
};

type RichAuthorizationRequestsEnabledByOpenID4VCI = RichAuthorizationRequestsConfigurationBase & {
    enabled: boolean;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked before an AuthorizationCode or DeviceCode grant source is
     * persisted when Rich Authorization Request details were requested or granted. The function shall apply
     * authorization server policy to the requested and granted details and return the authorization details to store in
     * the grant source, or undefined. An empty array is treated as undefined.
     */
    authorizationDetailsForGrantSource: AuthorizationDetailsForGrantSource;
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked before an AccessToken or ClientCredentials token is persisted
     * whenever Rich Authorization Request details were requested or inherited from the grant source. The function shall
     * perform type-specific grant comparison, client policy enforcement, resource-specific filtering, and any response
     * enrichment. It shall return the exact authorization details assigned to the access token and returned from the
     * token endpoint, or undefined. An empty array is treated as undefined. `source` is the exchanged grant source, or
     * undefined for client credentials; `grantType` is the exact token request `grant_type` value, including full URN
     * values. To reject client-provided authorization details, throw `errors.InvalidAuthorizationDetails`.
     */
    authorizationDetailsForAccessToken: AuthorizationDetailsForAccessToken;
};

type RichAuthorizationRequestsEnabledByOpenID4VCIWithIntrospection = RichAuthorizationRequestsEnabledByOpenID4VCI & {
    /**
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked when a token containing Rich Authorization Request details is
     * introspected. It shall apply authorization server policy for the requesting party and return the authorization
     * details to include as the top-level `authorization_details` introspection response member, or undefined. An empty
     * array is treated as undefined.
     */
    authorizationDetailsForIntrospection: AuthorizationDetailsForIntrospection;
};

type ConditionalRichAuthorizationRequestFeatures =
    | {
        /**
         * [OpenID for Verifiable Credential Issuance 1.0](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0-final.html)
         *
         * This is an experimental feature.
         *
         * **Important:**
         *
         * The following default helper implementations in this option include placeholders and MUST be replaced by a
         * deployment before use.
         * - `issueCredential`
         * - `getKeyAttestationSignaturePublicKey`
         *
         * Specifies whether OpenID4VCI core capabilities shall be enabled. When enabled, the authorization server shall
         * expose the Credential Issuer Metadata, Credential Endpoint, and Nonce Endpoint routes, and perform protocol
         * validation for issuance requests. Supported proof types are `jwt` and `attestation`. The `attestation` proof
         * type relies on Key Attestation JWTs signed by a Wallet Provider; use `getKeyAttestationSignaturePublicKey` to
         * resolve the attester's public key.
         *
         * Credential Offer is an application-level concern outside the scope of the framework. The Issuer constructs
         * the Credential Offer JSON object (containing `credential_issuer`, `credential_configuration_ids`, and
         * `grants`) and delivers it to the Wallet via a custom URL scheme redirect (same-device) or QR code
         * (cross-device). The `issuer_state` authorization parameter, included in the offer's
         * `grants.authorization_code` object and sent back by the Wallet in the authorization request, should be
         * registered via `extraParams` with a validator callback. Once registered, it becomes available in
         * `ctx.oidc.params` and is included in the interaction session details automatically. The Wallet's
         * `credential_offer_endpoint` client metadata can be supported via `extraClientMetadata` if needed. The
         * `metadata` configuration property below can be used to add any additional Credential Issuer Metadata members.
         *
         * Access to the Credential Endpoint requires an Access Token issued through a user-facing authorization grant
         * (e.g. Authorization Code). The token MUST use the `opaque` format and its audience MUST equal the value
         * returned by the `credentialEndpointExpectedAudience` helper. Deployments shall use the
         * `features.resourceIndicators` mechanism to configure that same value as a resource indicator. Use the
         * `defaultResource` helper to detect credential-requesting authorization requests and return it as the resource
         * so that the client needs not to use the `resource` parameter. Use the `useGrantedResource` helper to return
         * `true` so that the issued Access Token targets the Credential Endpoint rather than the UserInfo Endpoint.
         */
        openid4vci: OpenID4VCIEnabledConfiguration;
        /**
         * [RFC7662](https://www.rfc-editor.org/info/rfc7662/) - OAuth 2.0 Token Introspection
         *
         * **Important:**
         *
         * The following default helper implementations in this option are intended as starting points and SHOULD be
         * customized by a deployment.
         * - `allowedPolicy`
         *
         * Specifies whether OAuth 2.0 Token Introspection capabilities shall be enabled. When enabled, the
         * authorization server shall expose a token introspection endpoint that allows authorized clients and resource
         * servers to query the metadata and status of the following token types:
         * - Opaque access tokens
         * - Refresh tokens
         */
        introspection: IntrospectionPossiblyEnabledFeature;
        /**
         * [RFC9396](https://www.rfc-editor.org/info/rfc9396/) - OAuth 2.0 Rich Authorization Requests
         *
         * **Important:**
         *
         * The following default helper implementations in this option include placeholders and MUST be replaced by a
         * deployment before use.
         * - `authorizationDetailsForGrantSource`
         * - `authorizationDetailsForAccessToken`
         * - `authorizationDetailsForIntrospection`
         *
         * Specifies whether Rich Authorization Request capabilities shall be enabled. When enabled, the authorization
         * server shall support the `authorization_details` parameter at the authorization and token endpoints to enable
         * issuing Access Tokens with fine-grained authorization data and enhanced authorization scope control.
         *
         * This provider profile requires `features.resourceIndicators` and supports authorization requests whose
         * response type contains `code` but not `token`. Deployments handling sensitive authorization details SHOULD
         * use JAR or PAR, sanitize all consent presentation, compare string values exactly without Unicode
         * normalization, and disclose details to clients and Resource Servers only as required by policy.
         */
        richAuthorizationRequests?:
            | RichAuthorizationRequestsDisabledConfiguration
            | RichAuthorizationRequestsEnabledByOpenID4VCIWithIntrospection
            | undefined;
    }
    | {
        /**
         * [OpenID for Verifiable Credential Issuance 1.0](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0-final.html)
         *
         * This is an experimental feature.
         *
         * **Important:**
         *
         * The following default helper implementations in this option include placeholders and MUST be replaced by a
         * deployment before use.
         * - `issueCredential`
         * - `getKeyAttestationSignaturePublicKey`
         *
         * Specifies whether OpenID4VCI core capabilities shall be enabled. When enabled, the authorization server shall
         * expose the Credential Issuer Metadata, Credential Endpoint, and Nonce Endpoint routes, and perform protocol
         * validation for issuance requests. Supported proof types are `jwt` and `attestation`. The `attestation` proof
         * type relies on Key Attestation JWTs signed by a Wallet Provider; use `getKeyAttestationSignaturePublicKey` to
         * resolve the attester's public key.
         *
         * Credential Offer is an application-level concern outside the scope of the framework. The Issuer constructs
         * the Credential Offer JSON object (containing `credential_issuer`, `credential_configuration_ids`, and
         * `grants`) and delivers it to the Wallet via a custom URL scheme redirect (same-device) or QR code
         * (cross-device). The `issuer_state` authorization parameter, included in the offer's
         * `grants.authorization_code` object and sent back by the Wallet in the authorization request, should be
         * registered via `extraParams` with a validator callback. Once registered, it becomes available in
         * `ctx.oidc.params` and is included in the interaction session details automatically. The Wallet's
         * `credential_offer_endpoint` client metadata can be supported via `extraClientMetadata` if needed. The
         * `metadata` configuration property below can be used to add any additional Credential Issuer Metadata members.
         *
         * Access to the Credential Endpoint requires an Access Token issued through a user-facing authorization grant
         * (e.g. Authorization Code). The token MUST use the `opaque` format and its audience MUST equal the value
         * returned by the `credentialEndpointExpectedAudience` helper. Deployments shall use the
         * `features.resourceIndicators` mechanism to configure that same value as a resource indicator. Use the
         * `defaultResource` helper to detect credential-requesting authorization requests and return it as the resource
         * so that the client needs not to use the `resource` parameter. Use the `useGrantedResource` helper to return
         * `true` so that the issued Access Token targets the Credential Endpoint rather than the UserInfo Endpoint.
         */
        openid4vci: OpenID4VCIEnabledConfiguration;
        /**
         * [RFC7662](https://www.rfc-editor.org/info/rfc7662/) - OAuth 2.0 Token Introspection
         *
         * **Important:**
         *
         * The following default helper implementations in this option are intended as starting points and SHOULD be
         * customized by a deployment.
         * - `allowedPolicy`
         *
         * Specifies whether OAuth 2.0 Token Introspection capabilities shall be enabled. When enabled, the
         * authorization server shall expose a token introspection endpoint that allows authorized clients and resource
         * servers to query the metadata and status of the following token types:
         * - Opaque access tokens
         * - Refresh tokens
         */
        introspection?: IntrospectionDisabledFeature | undefined;
        /**
         * [RFC9396](https://www.rfc-editor.org/info/rfc9396/) - OAuth 2.0 Rich Authorization Requests
         *
         * **Important:**
         *
         * The following default helper implementations in this option include placeholders and MUST be replaced by a
         * deployment before use.
         * - `authorizationDetailsForGrantSource`
         * - `authorizationDetailsForAccessToken`
         * - `authorizationDetailsForIntrospection`
         *
         * Specifies whether Rich Authorization Request capabilities shall be enabled. When enabled, the authorization
         * server shall support the `authorization_details` parameter at the authorization and token endpoints to enable
         * issuing Access Tokens with fine-grained authorization data and enhanced authorization scope control.
         *
         * This provider profile requires `features.resourceIndicators` and supports authorization requests whose
         * response type contains `code` but not `token`. Deployments handling sensitive authorization details SHOULD
         * use JAR or PAR, sanitize all consent presentation, compare string values exactly without Unicode
         * normalization, and disclose details to clients and Resource Servers only as required by policy.
         */
        richAuthorizationRequests?:
            | RichAuthorizationRequestsDisabledConfiguration
            | RichAuthorizationRequestsEnabledByOpenID4VCI
            | undefined;
    }
    | {
        /**
         * [OpenID for Verifiable Credential Issuance 1.0](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0-final.html)
         *
         * This is an experimental feature.
         *
         * **Important:**
         *
         * The following default helper implementations in this option include placeholders and MUST be replaced by a
         * deployment before use.
         * - `issueCredential`
         * - `getKeyAttestationSignaturePublicKey`
         *
         * Specifies whether OpenID4VCI core capabilities shall be enabled. When enabled, the authorization server shall
         * expose the Credential Issuer Metadata, Credential Endpoint, and Nonce Endpoint routes, and perform protocol
         * validation for issuance requests. Supported proof types are `jwt` and `attestation`. The `attestation` proof
         * type relies on Key Attestation JWTs signed by a Wallet Provider; use `getKeyAttestationSignaturePublicKey` to
         * resolve the attester's public key.
         *
         * Credential Offer is an application-level concern outside the scope of the framework. The Issuer constructs
         * the Credential Offer JSON object (containing `credential_issuer`, `credential_configuration_ids`, and
         * `grants`) and delivers it to the Wallet via a custom URL scheme redirect (same-device) or QR code
         * (cross-device). The `issuer_state` authorization parameter, included in the offer's
         * `grants.authorization_code` object and sent back by the Wallet in the authorization request, should be
         * registered via `extraParams` with a validator callback. Once registered, it becomes available in
         * `ctx.oidc.params` and is included in the interaction session details automatically. The Wallet's
         * `credential_offer_endpoint` client metadata can be supported via `extraClientMetadata` if needed. The
         * `metadata` configuration property below can be used to add any additional Credential Issuer Metadata members.
         *
         * Access to the Credential Endpoint requires an Access Token issued through a user-facing authorization grant
         * (e.g. Authorization Code). The token MUST use the `opaque` format and its audience MUST equal the value
         * returned by the `credentialEndpointExpectedAudience` helper. Deployments shall use the
         * `features.resourceIndicators` mechanism to configure that same value as a resource indicator. Use the
         * `defaultResource` helper to detect credential-requesting authorization requests and return it as the resource
         * so that the client needs not to use the `resource` parameter. Use the `useGrantedResource` helper to return
         * `true` so that the issued Access Token targets the Credential Endpoint rather than the UserInfo Endpoint.
         */
        openid4vci?: OpenID4VCIDisabledConfiguration | undefined;
        /**
         * [RFC7662](https://www.rfc-editor.org/info/rfc7662/) - OAuth 2.0 Token Introspection
         *
         * **Important:**
         *
         * The following default helper implementations in this option are intended as starting points and SHOULD be
         * customized by a deployment.
         * - `allowedPolicy`
         *
         * Specifies whether OAuth 2.0 Token Introspection capabilities shall be enabled. When enabled, the
         * authorization server shall expose a token introspection endpoint that allows authorized clients and resource
         * servers to query the metadata and status of the following token types:
         * - Opaque access tokens
         * - Refresh tokens
         */
        introspection: IntrospectionPossiblyEnabledFeature;
        /**
         * [RFC9396](https://www.rfc-editor.org/info/rfc9396/) - OAuth 2.0 Rich Authorization Requests
         *
         * **Important:**
         *
         * The following default helper implementations in this option include placeholders and MUST be replaced by a
         * deployment before use.
         * - `authorizationDetailsForGrantSource`
         * - `authorizationDetailsForAccessToken`
         * - `authorizationDetailsForIntrospection`
         *
         * Specifies whether Rich Authorization Request capabilities shall be enabled. When enabled, the authorization
         * server shall support the `authorization_details` parameter at the authorization and token endpoints to enable
         * issuing Access Tokens with fine-grained authorization data and enhanced authorization scope control.
         *
         * This provider profile requires `features.resourceIndicators` and supports authorization requests whose
         * response type contains `code` but not `token`. Deployments handling sensitive authorization details SHOULD
         * use JAR or PAR, sanitize all consent presentation, compare string values exactly without Unicode
         * normalization, and disclose details to clients and Resource Servers only as required by policy.
         */
        richAuthorizationRequests?:
            | RichAuthorizationRequestsDisabledConfiguration
            | RichAuthorizationRequestsInactiveConfiguration
            | RichAuthorizationRequestsActiveWithIntrospection
            | undefined;
    }
    | {
        /**
         * [OpenID for Verifiable Credential Issuance 1.0](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0-final.html)
         *
         * This is an experimental feature.
         *
         * **Important:**
         *
         * The following default helper implementations in this option include placeholders and MUST be replaced by a
         * deployment before use.
         * - `issueCredential`
         * - `getKeyAttestationSignaturePublicKey`
         *
         * Specifies whether OpenID4VCI core capabilities shall be enabled. When enabled, the authorization server shall
         * expose the Credential Issuer Metadata, Credential Endpoint, and Nonce Endpoint routes, and perform protocol
         * validation for issuance requests. Supported proof types are `jwt` and `attestation`. The `attestation` proof
         * type relies on Key Attestation JWTs signed by a Wallet Provider; use `getKeyAttestationSignaturePublicKey` to
         * resolve the attester's public key.
         *
         * Credential Offer is an application-level concern outside the scope of the framework. The Issuer constructs
         * the Credential Offer JSON object (containing `credential_issuer`, `credential_configuration_ids`, and
         * `grants`) and delivers it to the Wallet via a custom URL scheme redirect (same-device) or QR code
         * (cross-device). The `issuer_state` authorization parameter, included in the offer's
         * `grants.authorization_code` object and sent back by the Wallet in the authorization request, should be
         * registered via `extraParams` with a validator callback. Once registered, it becomes available in
         * `ctx.oidc.params` and is included in the interaction session details automatically. The Wallet's
         * `credential_offer_endpoint` client metadata can be supported via `extraClientMetadata` if needed. The
         * `metadata` configuration property below can be used to add any additional Credential Issuer Metadata members.
         *
         * Access to the Credential Endpoint requires an Access Token issued through a user-facing authorization grant
         * (e.g. Authorization Code). The token MUST use the `opaque` format and its audience MUST equal the value
         * returned by the `credentialEndpointExpectedAudience` helper. Deployments shall use the
         * `features.resourceIndicators` mechanism to configure that same value as a resource indicator. Use the
         * `defaultResource` helper to detect credential-requesting authorization requests and return it as the resource
         * so that the client needs not to use the `resource` parameter. Use the `useGrantedResource` helper to return
         * `true` so that the issued Access Token targets the Credential Endpoint rather than the UserInfo Endpoint.
         */
        openid4vci?: OpenID4VCIDisabledConfiguration | undefined;
        /**
         * [RFC7662](https://www.rfc-editor.org/info/rfc7662/) - OAuth 2.0 Token Introspection
         *
         * **Important:**
         *
         * The following default helper implementations in this option are intended as starting points and SHOULD be
         * customized by a deployment.
         * - `allowedPolicy`
         *
         * Specifies whether OAuth 2.0 Token Introspection capabilities shall be enabled. When enabled, the
         * authorization server shall expose a token introspection endpoint that allows authorized clients and resource
         * servers to query the metadata and status of the following token types:
         * - Opaque access tokens
         * - Refresh tokens
         */
        introspection?: IntrospectionDisabledFeature | undefined;
        /**
         * [RFC9396](https://www.rfc-editor.org/info/rfc9396/) - OAuth 2.0 Rich Authorization Requests
         *
         * **Important:**
         *
         * The following default helper implementations in this option include placeholders and MUST be replaced by a
         * deployment before use.
         * - `authorizationDetailsForGrantSource`
         * - `authorizationDetailsForAccessToken`
         * - `authorizationDetailsForIntrospection`
         *
         * Specifies whether Rich Authorization Request capabilities shall be enabled. When enabled, the authorization
         * server shall support the `authorization_details` parameter at the authorization and token endpoints to enable
         * issuing Access Tokens with fine-grained authorization data and enhanced authorization scope control.
         *
         * This provider profile requires `features.resourceIndicators` and supports authorization requests whose
         * response type contains `code` but not `token`. Deployments handling sensitive authorization details SHOULD
         * use JAR or PAR, sanitize all consent presentation, compare string values exactly without Unicode
         * normalization, and disclose details to clients and Resource Servers only as required by policy.
         */
        richAuthorizationRequests?: RichAuthorizationRequestsConfiguration | undefined;
    };

export interface Configuration {
    /**
     * Authentication Context Class References
     *
     * An array of strings representing the Authentication Context Class References that this authorization server
     * supports.
     */
    acrValues?: readonly string[] | ReadonlySet<string> | undefined;

    /**
     * Storage Adapter
     *
     * Specifies the storage adapter implementation for persisting authorization server state. The default
     * implementation provides a basic in-memory adapter suitable for development and testing purposes only. When this
     * process is restarted, all stored information will be lost. Production deployments MUST provide a custom adapter
     * implementation that persists data to external storage (e.g., database, Redis, etc.).
     *
     * The adapter constructor will be instantiated for each model type when first accessed.
     *
     * @see [The expected interface](https://github.com/panva/node-oidc-provider/blob/main/example/my_adapter.js)
     *
     * @see [Example MongoDB adapter implementation](https://github.com/panva/node-oidc-provider/discussions/1308)
     *
     * @see [Example Redis adapter implementation](https://github.com/panva/node-oidc-provider/discussions/1309)
     *
     * @see [Example Redis w/ JSON Adapter](https://github.com/panva/node-oidc-provider/discussions/1310)
     *
     * @see [Default in-memory adapter implementation](https://github.com/panva/node-oidc-provider/blob/main/lib/adapters/memory_adapter.js)
     *
     * @see [Community Contributed Adapter Archive](https://github.com/panva/node-oidc-provider/discussions/1311)
     */
    adapter?: AdapterConstructor | AdapterFactory | undefined;

    /**
     * Available Claims
     *
     * Describes the claims that this authorization server may be able to supply values for.
     *
     * It is used to achieve two different things related to claims:
     * - which additional claims are available to RPs (configure as `{ claimName: null }`)
     * - which claims fall under what scope (configure `{ scopeName: ['claim', 'another-claim'] }`)
     *
     * @see [Configuring OpenID Connect 1.0 Standard Claims](https://github.com/panva/node-oidc-provider/discussions/1299)
     */
    claims?:
        | {
            [key: string]: null | readonly string[] | Readonly<Record<string, null>>;
        }
        | undefined;

    /**
     * Cross-Origin Resource Sharing (CORS)
     *
     * **Important:**
     *
     * The default helper implementation is intended as a starting point and SHOULD be customized by a deployment.
     *
     * Specifies a function that determines whether Cross-Origin Resource Sharing (CORS) requests shall be permitted
     * based on the requesting client. This function is invoked for each actual CORS request to evaluate the client's
     * authorization to access the authorization server from the specified origin.
     *
     * @see [Configuring Client Metadata-based CORS Origin allow list](https://github.com/panva/node-oidc-provider/discussions/1298)
     */
    clientBasedCORS?: ((ctx: KoaContextWithOIDC, origin: string, client: Client) => boolean) | undefined;

    /**
     * Statically Configured Clients
     *
     * An array of client metadata objects representing statically configured OAuth 2.0 and OpenID Connect clients.
     * These clients are persistent, do not expire, and remain available throughout the authorization server's lifetime.
     * For dynamic client resolution, the authorization server will invoke the adapter's `find` method when encountering
     * unregistered client identifiers.
     *
     * To restrict the authorization server to only statically configured clients and disable dynamic registration,
     * configure the adapter to return falsy values for client lookup operations (e.g., `return Promise.resolve()`).
     *
     * Each client's metadata shall be validated according to the specifications in which the respective properties are
     * defined.
     */
    clients?: readonly ClientMetadata[] | undefined;

    formats?:
        | {
            /**
             * Specifies the entropy configuration for opaque token generation. The value shall be an integer (or a
             * function returning an integer) that determines the cryptographic strength of generated opaque tokens. The
             * resulting opaque token length shall be calculated as `Math.ceil(i / Math.log2(n))` where `i` is the
             * specified bit count and `n` is the number of symbols in the encoding alphabet (64 characters in the
             * base64url character set used by this implementation).
             */
            bitsOfOpaqueRandomness?: (number | ((ctx: KoaContextWithOIDC, model: BaseModel) => number)) | undefined;
            /**
             * Specifies customizer functions that shall be invoked immediately before issuing structured Access Tokens
             * to enable modification of token headers and payload claims according to authorization server policy.
             * These functions shall be called during the token formatting process to apply deployment-specific
             * customizations to the token structure before signing. Customize the supplied `jwt.header` and
             * `jwt.payload` objects in place; a customizer's return value is ignored.
             */
            customizers?:
                | ({
                    jwt?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            token: AccessToken | ClientCredentials,
                            parts: JWTStructured,
                        ) => CanBePromise<void>)
                        | undefined;
                })
                | undefined;
        }
        | undefined;

    /**
     * Default Client Metadata
     *
     * Specifies default client metadata values that shall be applied when properties are not explicitly provided during
     * Dynamic Client Registration or for statically configured clients. This configuration allows override of the
     * authorization server's built-in default values for any supported client metadata property.
     */
    clientDefaults?: AllClientMetadata | undefined;

    /**
     * Clock Skew Tolerance
     *
     * Specifies the maximum acceptable clock skew tolerance (in seconds) for validating time-sensitive operations,
     * including JWT validation for Request Objects and other timestamp-based security mechanisms.
     *
     * **Recommendation:** This value should be kept as small as possible while accommodating expected clock drift
     * between the authorization server and client systems.
     */
    clockTolerance?: number | undefined;

    /**
     * ID Token Claims Conformance
     *
     * [`OIDC Core 1.0` - Requesting Claims using Scope Values](https://openid.net/specs/openid-connect-core-1_0-errata2.html#ScopeClaims)
     * defines that claims requested using the `scope` parameter are only returned from the UserInfo Endpoint unless the
     * `response_type` is `id_token`.
     *
     * Despite this configuration, the ID Token always includes claims requested using the `scope` parameter when the
     * userinfo endpoint is disabled, or when issuing an Access Token not applicable for access to the userinfo
     * endpoint.
     */
    conformIdTokenClaims?: boolean | undefined;

    /**
     * HTTP Cookie Configuration
     *
     * Configuration for HTTP cookies used to maintain User-Agent state throughout the authorization flow. These
     * settings conform to the
     * [cookies module interface specification](https://github.com/pillarjs/cookies/tree/0.9.1?tab=readme-ov-file#cookiessetname--values--options)
     * . The `maxAge` and `expires` properties are ignored; cookie lifetimes are instead controlled via the
     * `ttl.Session` and `ttl.Interaction` configuration parameters.
     */
    cookies?:
        | {
            /**
             * Specifies the HTTP cookie names used for state management during the authorization flow.
             */
            names?:
                | {
                    session?: string | undefined;
                    interaction?: string | undefined;
                    resume?: string | undefined;
                }
                | undefined;
            /**
             * Options for long-term cookies.
             */
            long?: CookiesSetOptions | undefined;
            /**
             * Options for short-term cookies.
             */
            short?: CookiesSetOptions | undefined;
            /**
             * [Keygrip](https://www.npmjs.com/package/keygrip) signing keys used for cookie signing to prevent
             * tampering. You may also pass your own KeyGrip instance.
             *
             * **Recommendation:** Rotate regularly (by prepending new keys) with a reasonable interval and keep a
             * reasonable history of keys to allow for returning user session cookies to still be valid and re-signed.
             */
            keys?: ReadonlyArray<string | Buffer> | undefined | KeyGrip;
        }
        | undefined;

    /**
     * Extending the Discovery Document
     *
     * Pass additional properties to this object to extend the discovery document.
     *
     * Note: Standard discovery properties derived from the provider's configuration cannot be overridden through this
     * object.
     */
    discovery?: UnknownObject | undefined;

    /**
     * HTTP POST Method Support
     *
     * Specifies whether HTTP POST method support shall be enabled at the Authorization Endpoint and the Logout Endpoint
     * (if enabled). When enabled, the authorization server shall accept POST requests at these endpoints in addition to
     * the standard GET requests. This configuration may only be used when the `cookies.long.sameSite` configuration
     * value is `none`.
     */
    enableHttpPostMethods?: boolean | undefined;

    /**
     * Additional Authorization Request Parameters
     *
     * Specifies additional parameters that shall be recognized by the authorization, device authorization, backchannel
     * authentication, and pushed authorization request endpoints. These extended parameters become available in
     * `ctx.oidc.params` and are passed to interaction session details for processing.
     *
     * This configuration accepts either an iterable object (array or Set of strings) for simple parameter registration,
     * or a plain object with string properties representing parameter names and values being validation functions
     * (synchronous or asynchronous) for the corresponding parameter values.
     *
     * Parameter validators are executed regardless of the parameter's presence or value, enabling validation of
     * parameter presence as well as assignment of default values. When the value is `null` or `undefined`, the
     * parameter is registered without validation constraints.
     *
     * Note: These validators execute during the final phase of the request validation process. Modifications to other
     * parameters (such as assigning default values) will not trigger re-validation of the entire request.
     */
    extraParams?:
        | (readonly string[] | ReadonlySet<string> | {
            [name: string]:
                | null
                | ((
                    ctx: KoaContextWithOIDC,
                    value: string | undefined,
                    client: Client,
                ) => CanBePromise<void>);
        })
        | undefined;

    /**
     * JWT Client Authentication Assertion Validation
     *
     * Specifies a helper function that shall be invoked to perform additional validation of JWT Client Authentication
     * assertion Claims Set and Header beyond the requirements mandated by the specification. This function enables
     * enforcement of deployment-specific security policies and extended validation logic for `private_key_jwt` and
     * `client_secret_jwt` client authentication methods according to authorization server requirements.
     *
     * `claims` and `header` are structured clones of the verified assertion Claims Set and JOSE Header, so mutating
     * them does not alter the verified assertion. Throw an appropriate error to fail authentication. The default
     * additionally requires an exact issuer identifier audience when the FAPI 2.0 profile applies.
     */
    assertJwtClientAuthClaimsAndHeader?:
        | ((
            ctx: KoaContextWithOIDC,
            claims: Record<string, JsonValue>,
            header: Record<string, JsonValue>,
            client: Client,
        ) => CanBePromise<void>)
        | undefined;

    /**
     * Feature Configurations
     *
     * Specifies the authorization server feature capabilities that shall be enabled or disabled. This configuration
     * controls the availability of optional OAuth 2.0 and OpenID Connect extensions, experimental specifications, and
     * proprietary enhancements.
     *
     * Certain features may be designated as experimental implementations. When experimental features are enabled, the
     * authorization server will emit warnings to indicate that breaking changes may occur in future releases. These
     * changes will be published as minor version updates of the oidc-provider module.
     *
     * To suppress experimental feature warnings and ensure configuration validation against breaking changes,
     * implementations shall acknowledge the specific experimental feature version using the acknowledgment mechanism
     * demonstrated in the example below. When an unacknowledged breaking change is detected, the authorization server
     * configuration will throw an error during instantiation.
     */
    features?:
        | {
            /**
             * Development-only Interaction Views
             *
             * Enables development-only interaction views that provide pre-built user interface components for rapid
             * prototyping and testing of authorization flows. These views accept any username (used as the subject
             * claim value) and any password for authentication, bypassing production-grade security controls.
             *
             * Production deployments MUST disable this feature and implement proper end-user authentication and
             * authorization mechanisms. These development views MUST NOT be used in production environments as they
             * provide no security guarantees and accept arbitrary credentials.
             */
            devInteractions?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            /**
             * [OIDC Core 1.0](https://openid.net/specs/openid-connect-core-1_0-errata2.html#ClaimsParameter) -
             * Requesting Claims using the "claims" Request Parameter
             *
             * Specifies whether the `claims` request parameter shall be enabled for authorization requests. When
             * enabled, the authorization server shall accept and process the `claims` parameter to enable fine-grained
             * control over which claims are returned in ID Tokens and from the UserInfo Endpoint.
             */
            claimsParameter?:
                | {
                    enabled?: boolean | undefined;
                    /**
                     * Specifies a helper function that shall be invoked to perform additional validation of the
                     * `claims` parameter. This function enables enforcement of deployment-specific policies, security
                     * constraints, or extended claim validation logic according to authorization server requirements.
                     *
                     * The function may throw errors to reject non-compliant claims requests or return successfully to
                     * indicate acceptance of the claims parameter content.
                     */
                    assertClaimsParameter?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            claims: ClaimsParameter,
                            client: Client,
                        ) => CanBePromise<void>)
                        | undefined;
                }
                | undefined;

            /**
             * [draft-ietf-oauth-client-id-metadata-document-02](https://www.ietf.org/archive/id/draft-ietf-oauth-client-id-metadata-document-02.html)
             * - OAuth Client ID Metadata Document (CIMD)
             *
             * This is an experimental feature.
             *
             * Specifies whether the authorization server shall support resolving client metadata from Client Identifier
             * URLs used as `client_id` values. When enabled, if a `client_id` is an HTTPS URL conforming to the
             * specification's requirements, the authorization server shall fetch the Client ID Metadata Document from
             * that URL and use it as the client's registration data, without requiring prior client registration.
             */
            clientIdMetadataDocument?:
                | {
                    enabled?: boolean | undefined;
                    ack?: string | undefined;
                    /**
                     * Specifies a helper function that shall be invoked before fetching a Client ID Metadata Document
                     * from a Client Identifier URL. This function enables enforcement of domain allowlisting, rate
                     * limiting, or other security policies. Return `true` to allow the fetch, or `false` to reject the
                     * `client_id`.
                     */
                    allowFetch?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            clientId: string,
                        ) => CanBePromise<boolean>)
                        | undefined;
                    /**
                     * Specifies a helper function that shall be invoked every time a client resolved from a Client ID
                     * Metadata Document is about to be used, including when served from cache. This function enables
                     * per-request evaluation of trust and authorization policies for metadata-document-resolved
                     * clients. Return `true` to allow the client, or `false` to reject it.
                     */
                    allowClient?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            client: Client,
                        ) => CanBePromise<boolean>)
                        | undefined;
                    /**
                     * Specifies the minimum and maximum cache duration bounds (in seconds) applied to HTTP cache
                     * headers when caching fetched Client ID Metadata Documents. Cache-Control and Expires response
                     * headers are respected within these bounds.
                     */
                    cacheDuration?:
                        | {
                            min?: number | undefined;
                            max?: number | undefined;
                        }
                        | undefined;
                }
                | undefined;

            /**
             * [RFC6749](https://www.rfc-editor.org/info/rfc6749/#section-1.3.4) - Client Credentials
             *
             * Specifies whether the Client Credentials grant type shall be enabled. When enabled, the authorization
             * server shall accept `grant_type=client_credentials` requests at the token endpoint, allowing clients to
             * obtain access tokens.
             */
            clientCredentials?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            /**
             * [RFC7009](https://www.rfc-editor.org/info/rfc7009/) - OAuth 2.0 Token Revocation
             *
             * **Important:**
             *
             * The following default helper implementations in this option are intended as starting points and SHOULD be
             * customized by a deployment.
             * - `allowedPolicy`
             *
             * Specifies whether Token Revocation capabilities shall be enabled. When enabled, the authorization server
             * shall expose a token revocation endpoint that allows authorized clients to notify the authorization
             * server that a particular token is no longer needed. This feature supports revocation of the following
             * token types:
             * - Opaque access tokens
             * - Refresh tokens
             */
            revocation?:
                | {
                    enabled?: boolean | undefined;
                    /**
                     * **Important:**
                     *
                     * The default helper implementation is intended as a starting point and SHOULD be customized by a
                     * deployment.
                     *
                     * Specifies a helper function that shall be invoked to determine whether the requesting client or
                     * resource server is authorized to revoke the specified token. This function enables enforcement of
                     * fine-grained access control policies for token revocation operations according to authorization
                     * server security requirements.
                     *
                     * `true` permits revocation; `false` leaves the token unchanged and returns the normal revocation
                     * response. By default, a client may revoke its own tokens; a mismatched public client is denied
                     * without an error and a mismatched confidential client is rejected.
                     */
                    allowedPolicy?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            client: Client,
                            token: AccessToken | ClientCredentials | RefreshToken,
                        ) => CanBePromise<boolean>)
                        | undefined;
                }
                | undefined;

            /**
             * [OIDC Core 1.0](https://openid.net/specs/openid-connect-core-1_0-errata2.html#UserInfo) - UserInfo
             * Endpoint
             *
             * Specifies whether the UserInfo Endpoint shall be enabled. When enabled, the authorization server shall
             * expose a UserInfo endpoint that returns claims about the authenticated end-user. Access to this endpoint
             * requires an opaque Access Token with at least `openid` scope that does not have a Resource Server
             * audience.
             */
            userinfo?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            /**
             * [OIDC Core 1.0](https://openid.net/specs/openid-connect-core-1_0-errata2.html#UserInfo) - JWT UserInfo
             * Endpoint Responses
             *
             * Specifies whether JWT-formatted UserInfo endpoint responses shall be enabled. When enabled, the
             * authorization server shall support returning UserInfo responses as signed and/or encrypted JSON Web
             * Tokens, providing enhanced security and integrity protection for end-user claims transmission. This
             * feature shall also enable the relevant client metadata parameters for configuring JWT signing and/or
             * encryption algorithms according to client requirements.
             */
            jwtUserinfo?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            /**
             * JWE Encryption
             *
             * Specifies whether encryption capabilities shall be enabled. When enabled, the authorization server shall
             * support accepting and issuing encrypted tokens involved in its other enabled capabilities.
             */
            encryption?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            /**
             * [OIDC Dynamic Client Registration 1.0](https://openid.net/specs/openid-connect-registration-1_0-errata2.html)
             * and [RFC7591](https://www.rfc-editor.org/info/rfc7591/) - OAuth 2.0 Dynamic Client Registration Protocol
             *
             * Specifies whether Dynamic Client Registration capabilities shall be enabled. When enabled, the
             * authorization server shall expose a client registration endpoint that allows clients to dynamically
             * register themselves with the authorization server at runtime, enabling automated client onboarding and
             * configuration management.
             */
            registration?:
                | {
                    enabled?: boolean | undefined;
                    /**
                     * Specifies whether the registration endpoint shall require an initial access token as
                     * authorization for client registration requests. This configuration controls access to the dynamic
                     * registration functionality. Supported values include:
                     * - `string` - The authorization server shall validate the provided bearer token against this
                     *   static initial access token value
                     * - `boolean` - When true, the authorization server shall require adapter-backed initial access
                     *   tokens; when false, registration requests are processed without initial access tokens.
                     */
                    initialAccessToken?: boolean | string | undefined;
                    /**
                     * Specifies registration and registration management policies that shall be applied to client
                     * metadata properties during dynamic registration operations. Policies are synchronous or
                     * asynchronous functions assigned to Initial Access Tokens that execute before standard client
                     * property validations. Multiple policies may be assigned to an Initial Access Token, and by
                     * default, the same policies shall transfer to the Registration Access Token. Policy functions may
                     * throw errors to reject registration requests or modify the client properties object before
                     * validation.
                     *
                     * **Recommendation:** Referenced policies MUST always be present when encountered on a token; an
                     * AssertionError will be thrown inside the request context if a policy is not found, resulting in a
                     * 500 Server Error.
                     *
                     * **Recommendation:** The same policies will be assigned to the Registration Access Token after a
                     * successful validation. If you wish to assign different policies to the Registration Access Token:
                     * `` `js
                     * // inside your final ran policy
                     * ctx.oidc.entities.RegistrationAccessToken.policies = ['update-policy'];
                     * `` `
                     */
                    policies?:
                        | ({
                            [name: string]: (
                                ctx: KoaContextWithOIDC,
                                metadata: ClientMetadata,
                            ) => CanBePromise<undefined | void>;
                        })
                        | undefined;
                    /**
                     * Specifies a helper function that shall be invoked to generate random client identifiers during
                     * dynamic client registration operations. This function enables customization of client identifier
                     * generation according to authorization server requirements and conventions.
                     */
                    idFactory?: ((ctx: KoaContextWithOIDC) => string) | undefined;
                    /**
                     * Specifies a helper function that shall be invoked to generate random client secrets during
                     * dynamic client registration operations. This function enables customization of client secret
                     * generation according to authorization server security requirements and entropy specifications.
                     */
                    secretFactory?: ((ctx: KoaContextWithOIDC) => CanBePromise<string>) | undefined;
                    /**
                     * Specifies whether a registration access token shall be issued upon successful client
                     * registration. This configuration determines if clients receive tokens for subsequent registration
                     * management operations. Supported values include:
                     * - `true` - Registration access tokens shall be issued for all successful registrations
                     * - `false` - Registration access tokens shall not be issued
                     * - Function - A function that shall be invoked to dynamically determine token issuance based on
                     *   request context and authorization server policy
                     */
                    issueRegistrationAccessToken?:
                        | (
                            | boolean
                            | ((ctx: KoaContextWithOIDC) => CanBePromise<boolean>)
                        )
                        | undefined;
                }
                | undefined;

            /**
             * [RFC7592](https://www.rfc-editor.org/info/rfc7592/) - OAuth 2.0 Dynamic Client Registration Management
             * Protocol
             *
             * Specifies whether Dynamic Client Registration Management capabilities shall be enabled. When enabled, the
             * authorization server shall expose Update and Delete operations as defined in RFC 7592, allowing clients
             * to modify or remove their registration entries using Registration Access Tokens for client lifecycle
             * management operations.
             */
            registrationManagement?:
                | {
                    enabled?: boolean | undefined;
                    /**
                     * Specifies whether registration access token rotation shall be enabled as a security policy for
                     * client registration management operations. When token rotation is active, the authorization
                     * server shall discard the current Registration Access Token upon successful update operations and
                     * issue a new token, returning it to the client with the Registration Update Response.
                     *
                     * Supported values include:
                     * - `false` - Registration access tokens shall not be rotated and remain valid after use
                     * - `true` - Registration access tokens shall be rotated when used for management operations
                     * - Function - A function that shall be invoked to dynamically determine whether rotation should
                     *   occur based on request context and authorization server policy
                     */
                    rotateRegistrationAccessToken?:
                        | (
                            | boolean
                            | ((ctx: KoaContextWithOIDC) => CanBePromise<boolean>)
                        )
                        | undefined;
                }
                | undefined;

            /**
             * [RFC8628](https://www.rfc-editor.org/info/rfc8628/) - OAuth 2.0 Device Authorization Grant (Device Flow)
             *
             * **Important:**
             *
             * The following default helper implementations in this option are intended as starting points and SHOULD be
             * customized by a deployment.
             * - `userCodeInputSource`
             * - `userCodeConfirmSource`
             * - `successSource`
             *
             * Specifies whether the OAuth 2.0 Device Authorization Grant shall be enabled. When enabled, the
             * authorization server shall support the device authorization flow, enabling OAuth clients on
             * input-constrained devices to obtain user authorization by directing the user to perform the authorization
             * flow on a secondary device with richer input and display capabilities.
             */
            deviceFlow?:
                | {
                    enabled?: boolean | undefined;
                    /**
                     * Specifies the character set used for generating user codes in the device authorization flow. This
                     * configuration determines the alphabet from which user codes are constructed. Supported values
                     * include:
                     * - `base-20` - Uses characters BCDFGHJKLMNPQRSTVWXZ (excludes easily confused characters)
                     * - `digits` - Uses characters 0123456789 (numeric only)
                     */
                    charset?: "base-20" | "digits" | undefined;
                    /**
                     * Specifies the template pattern used for generating user codes in the device authorization flow.
                     * The authorization server shall replace `*` characters with random characters from the configured
                     * charset, while `-` (dash) and ` ` (space) characters may be included for enhanced readability.
                     * Refer to RFC 8628 for guidance on minimal recommended entropy requirements for user code
                     * generation.
                     */
                    mask?: string | undefined;
                    /**
                     * Specifies a helper function that shall be invoked to extract device-specific information from
                     * device authorization endpoint requests. The extracted information becomes available during the
                     * end-user confirmation screen to assist users in verifying that the authorization request
                     * originated from a device in their possession. This enhances security by enabling users to confirm
                     * device identity before granting authorization.
                     */
                    deviceInfo?: ((ctx: KoaContextWithOIDC) => UnknownObject) | undefined;
                    /**
                     * **Important:**
                     *
                     * The default helper implementation is intended as a starting point and SHOULD be customized by a
                     * deployment.
                     *
                     * Specifies the HTML source that shall be rendered when the device flow feature displays a user
                     * code input prompt to the User-Agent. This template is presented during the device authorization
                     * flow when the authorization server requires the end-user to enter a device-generated user code
                     * for verification.
                     */
                    userCodeInputSource?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            form: string,
                            out?: ErrorOut,
                            err?: errors.OIDCProviderError | Error,
                        ) => CanBePromise<undefined | void>)
                        | undefined;
                    /**
                     * **Important:**
                     *
                     * The default helper implementation is intended as a starting point and SHOULD be customized by a
                     * deployment.
                     *
                     * Specifies the HTML source that shall be rendered when the device flow feature displays a
                     * confirmation prompt to the User-Agent. This template is presented after successful user code
                     * validation to confirm the authorization request before proceeding with the device authorization
                     * flow.
                     */
                    userCodeConfirmSource?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            form: string,
                            client: Client,
                            deviceInfo: UnknownObject,
                            userCode: string,
                        ) => CanBePromise<undefined | void>)
                        | undefined;
                    /**
                     * **Important:**
                     *
                     * The default helper implementation is intended as a starting point and SHOULD be customized by a
                     * deployment.
                     *
                     * Specifies the HTML source that shall be rendered when the device flow feature displays a success
                     * page to the User-Agent. This template is presented upon successful completion of the device
                     * authorization flow to inform the end-user that authorization has been granted to the requesting
                     * device.
                     */
                    successSource?: ((ctx: KoaContextWithOIDC) => CanBePromise<undefined | void>) | undefined;
                }
                | undefined;

            /**
             * [OIDC Core 1.0](https://openid.net/specs/openid-connect-core-1_0-errata2.html#RequestObject) and
             * [RFC9101](https://www.rfc-editor.org/info/rfc9101/#name-passing-a-request-object-by) - Passing a Request
             * Object by Value (JAR)
             *
             * Specifies whether Request Object capabilities shall be enabled. When enabled, the authorization server
             * shall support the use and validation of the `request` parameter for conveying authorization request
             * parameters as JSON Web Tokens, providing enhanced security and integrity protection for authorization
             * requests.
             */
            requestObjects?:
                | {
                    enabled?: boolean | undefined;
                    /**
                     * Specifies whether the use of signed request objects shall be mandatory for all authorization
                     * requests as an authorization server security policy. When enabled, the authorization server shall
                     * reject authorization requests that do not include a signed Request Object JWT.
                     */
                    requireSignedRequestObject?: boolean | undefined;
                    /**
                     * Specifies a helper function that shall be invoked to perform additional validation of the Request
                     * Object JWT Claims Set and Header beyond the standard JAR specification requirements. This
                     * function enables enforcement of deployment-specific policies, security constraints, or extended
                     * validation logic according to authorization server requirements.
                     */
                    assertJwtClaimsAndHeader?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            claims: Record<string, JsonValue>,
                            header: Record<string, JsonValue>,
                            client: Client,
                        ) => CanBePromise<void>)
                        | undefined;
                }
                | undefined;

            /**
             * [RFC9449](https://www.rfc-editor.org/info/rfc9449/) - OAuth 2.0 Demonstration of Proof-of-Possession at
             * the Application Layer (DPoP)
             *
             * Specifies whether sender-constraining of OAuth 2.0 tokens through application-level proof-of-possession
             * mechanisms shall be enabled.
             */
            dPoP?:
                | {
                    enabled?: boolean | undefined;
                    /**
                     * Specifies the cryptographic secret value used for generating server-provided DPoP nonces. When
                     * provided, this value MUST be a 32-byte Buffer instance to ensure sufficient entropy for secure
                     * nonce generation. Nonces are derived from this secret rather than stored; the same value MUST be
                     * configured on all instances of a deployment and kept stable across restarts.
                     */
                    nonceSecret?: Buffer | undefined;
                    /**
                     * Specifies a function that determines whether a DPoP nonce shall be required for
                     * proof-of-possession validation in the current request context. This function is invoked during
                     * DPoP proof validation to enforce nonce requirements based on authorization server policy.
                     */
                    requireNonce?: ((ctx: KoaContextWithOIDC) => boolean) | undefined;
                    /**
                     * Specifies whether DPoP Proof replay shall be permitted by the authorization server. When set to
                     * false, the server enforces strict replay protection by rejecting previously used DPoP proofs,
                     * enhancing security against replay attacks.
                     */
                    allowReplay?: boolean;
                }
                | undefined;

            /**
             * [OIDC Back-Channel Logout 1.0](https://openid.net/specs/openid-connect-backchannel-1_0-final.html)
             *
             * Specifies whether Back-Channel Logout capabilities shall be enabled. When enabled, the authorization
             * server shall support propagating end-user logout events to clients that were involved throughout the
             * lifetime of the terminated session.
             */
            backchannelLogout?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            /**
             * FAPI Security Profiles
             *
             * Specifies whether FAPI Security Profile capabilities shall be enabled. When enabled, the authorization
             * server shall implement additional security behaviors defined in FAPI specifications that cannot be
             * achieved through other configuration options.
             */
            fapi?: FapiConfiguration | undefined;

            /**
             * [OIDC Client Initiated Backchannel Authentication Flow (CIBA)](https://openid.net/specs/openid-client-initiated-backchannel-authentication-core-1_0-final.html)
             *
             * **Important:**
             *
             * The following default helper implementations in this option include placeholders and MUST be replaced by
             * a deployment before use.
             * - `triggerAuthenticationDevice`
             * - `validateRequestContext`
             * - `processLoginHintToken`
             * - `processLoginHint`
             * - `verifyUserCode`
             *
             * The following default helper implementations in this option are intended as starting points and SHOULD be
             * customized by a deployment.
             * - `validateBindingMessage`
             *
             * Specifies whether Core `CIBA` Flow shall be enabled. When combined with `features.fapi` and
             * `features.requestObjects` this also enables
             * [Financial-grade API: Client Initiated Backchannel Authentication Profile - Implementers Draft 01](https://openid.net/specs/openid-financial-api-ciba-ID1.html)
             * as well.
             */
            ciba?: CIBAConfiguration | undefined;

            /**
             * [draft-sakimura-oauth-wmrm-01](https://tools.ietf.org/html/draft-sakimura-oauth-wmrm-01) - OAuth 2.0 Web
             * Message Response Mode
             *
             * This is an experimental feature.
             *
             * Specifies whether Web Message Response Mode capabilities shall be enabled. When enabled, the
             * authorization server shall support the `web_message` response mode for returning authorization responses
             * via HTML5 Web Messaging. The implementation shall support only Simple Mode operation; authorization
             * requests containing Relay Mode parameters will be rejected.
             *
             * **Recommendation:** Although a general advice to use a `helmet` (e.g. for
             * [express](https://www.npmjs.com/package/helmet), [koa](https://www.npmjs.com/package/koa-helmet)) it is
             * especially advised for your interaction views routes if Web Message Response Mode is enabled in your
             * deployment. You will have to experiment with removal of the Cross-Origin-Embedder-Policy and
             * Cross-Origin-Opener-Policy headers at various endpoints throughout the authorization request end-user
             * journey to finalize this feature.
             */
            webMessageResponseMode?:
                | {
                    enabled?: boolean | undefined;
                    ack?: string | undefined;
                }
                | undefined;

            /**
             * [RFC9701](https://www.rfc-editor.org/info/rfc9701/) - JWT Response for OAuth Token Introspection
             *
             * Specifies whether JWT-formatted token introspection responses shall be enabled. When enabled, the
             * authorization server shall support issuing introspection responses as JSON Web Tokens, providing enhanced
             * security and integrity protection for token metadata transmission between authorized parties.
             */
            jwtIntrospection?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            /**
             * [JWT Secured Authorization Response Mode (JARM)](https://openid.net/specs/oauth-v2-jarm-errata1.html)
             *
             * Specifies whether JWT Secured Authorization Response Mode capabilities shall be enabled. When enabled,
             * the authorization server shall support encoding authorization responses as JSON Web Tokens, providing
             * cryptographic protection and integrity assurance for authorization response parameters.
             */
            jwtResponseModes?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            /**
             * [RFC9126](https://www.rfc-editor.org/info/rfc9126/) - OAuth 2.0 Pushed Authorization Requests (PAR)
             *
             * Specifies whether Pushed Authorization Request capabilities shall be enabled. When enabled, the
             * authorization server shall expose a pushed authorization request endpoint that allows clients to lodge
             * authorization request parameters at the authorization server prior to redirecting end-users to the
             * authorization endpoint, enhancing security by removing the need to transmit parameters via query string
             * parameters.
             */
            pushedAuthorizationRequests?:
                | {
                    /**
                     * Specifies whether PAR usage shall be mandatory for all authorization requests as an authorization
                     * server security policy. When enabled, the authorization server shall reject authorization
                     * endpoint requests that do not utilize the pushed authorization request mechanism.
                     */
                    requirePushedAuthorizationRequests?: boolean | undefined;
                    /**
                     * Specifies whether unregistered redirect_uri values shall be permitted for authenticated clients
                     * using PAR that do not utilize a sector_identifier_uri. This configuration enables dynamic
                     * redirect URI specification within the security constraints of the pushed authorization request
                     * mechanism.
                     */
                    allowUnregisteredRedirectUris?: boolean | undefined;
                    enabled?: boolean | undefined;
                }
                | undefined;

            /**
             * [OIDC RP-Initiated Logout 1.0](https://openid.net/specs/openid-connect-rpinitiated-1_0-final.html)
             *
             * **Important:**
             *
             * The following default helper implementations in this option are intended as starting points and SHOULD be
             * customized by a deployment.
             * - `postLogoutSuccessSource`
             * - `logoutSource`
             *
             * Specifies whether RP-Initiated Logout capabilities shall be enabled. When enabled, the authorization
             * server shall support logout requests initiated by relying parties, allowing clients to request
             * termination of end-user sessions.
             */
            rpInitiatedLogout?:
                | {
                    enabled?: boolean | undefined;
                    /**
                     * **Important:**
                     *
                     * The default helper implementation is intended as a starting point and SHOULD be customized by a
                     * deployment.
                     *
                     * Specifies the HTML source that shall be rendered when an RP-Initiated Logout request concludes
                     * successfully but no `post_logout_redirect_uri` was provided by the requesting client. This
                     * template shall be presented to inform the end-user that the logout operation has completed
                     * successfully and provide appropriate post-logout guidance.
                     */
                    postLogoutSuccessSource?:
                        | ((ctx: KoaContextWithOIDC) => CanBePromise<undefined | void>)
                        | undefined;
                    /**
                     * **Important:**
                     *
                     * The default helper implementation is intended as a starting point and SHOULD be customized by a
                     * deployment.
                     *
                     * Specifies the HTML source that shall be rendered when RP-Initiated Logout displays a confirmation
                     * prompt to the User-Agent. This template shall be presented to request explicit end-user
                     * confirmation before proceeding with the logout operation, ensuring user awareness and consent for
                     * session termination.
                     */
                    logoutSource?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            form: string,
                        ) => CanBePromise<undefined | void>)
                        | undefined;
                }
                | undefined;

            /**
             * [RFC8705](https://www.rfc-editor.org/info/rfc8705/) - OAuth 2.0 Mutual TLS Client Authentication and
             * Certificate Bound Access Tokens (MTLS)
             *
             * **Important:**
             *
             * The following default helper implementations in this option include placeholders and MUST be replaced by
             * a deployment before use.
             * - `getCertificate`
             * - `certificateAuthorized`
             * - `certificateSubjectMatches`
             *
             * Specifies whether Mutual TLS capabilities shall be enabled. The authorization server supports three
             * distinct capabilities that require separate configuration settings within this feature's configuration
             * object. Implementations MUST provide deployment-specific helper functions for certificate validation and
             * processing operations.
             */
            mTLS?: MTLSConfiguration | undefined;

            /**
             * [RFC8707](https://www.rfc-editor.org/info/rfc8707/) - Resource Indicators for OAuth 2.0
             *
             * **Important:**
             *
             * The following default helper implementations in this option include placeholders and MUST be replaced by
             * a deployment before use.
             * - `getResourceServerInfo`
             *
             * Specifies whether Resource Indicator capabilities shall be enabled. When enabled, the authorization
             * server shall support the `resource` parameter at the authorization and token endpoints to enable issuing
             * Access Tokens for specific Resource Servers (APIs) with enhanced audience control and scope management.
             *
             * The authorization server implements the following resource indicator processing rules:
             * - Multiple resource parameters may be present during Authorization Code Flow, Device Authorization Grant,
             *   and Backchannel Authentication Requests, but only a single audience for an Access Token is permitted.
             * - Authorization and Authentication Requests that result in an Access Token being issued by the
             *   Authorization Endpoint MUST only contain a single resource (or one MUST be resolved using the
             *   `defaultResource` helper).
             * - Client Credentials grant MUST only contain a single resource parameter.
             * - During Authorization Code / Refresh Token / Device Code / Backchannel Authentication Request exchanges,
             *   if the exchanged code/token does not include the `'openid'` scope and only has a single resource then
             *   the resource parameter may be omitted - an Access Token for the single resource is returned.
             * - During Authorization Code / Refresh Token / Device Code / Backchannel Authentication Request exchanges,
             *   if the exchanged code/token does not include the `'openid'` scope and has multiple resources then the
             *   resource parameter MUST be provided (or one MUST be resolved using the `defaultResource` helper). An
             *   Access Token for the provided/resolved resource is returned.
             * - (with userinfo endpoint enabled and useGrantedResource helper returning falsy) During Authorization
             *   Code / Refresh Token / Device Code exchanges, if the exchanged code/token includes the `'openid'` scope
             *   and no resource parameter is present - an Access Token for the UserInfo Endpoint is returned.
             * - (with userinfo endpoint enabled and useGrantedResource helper returning truthy) During Authorization
             *   Code / Refresh Token / Device Code exchanges, even if the exchanged code/token includes the `'openid'`
             *   scope and only has a single resource then the resource parameter may be omitted - an Access Token for
             *   the single resource is returned.
             * - (with userinfo endpoint disabled) During Authorization Code / Refresh Token / Device Code exchanges, if
             *   the exchanged code/token includes the `'openid'` scope and only has a single resource then the resource
             *   parameter may be omitted - an Access Token for the single resource is returned.
             * - Issued Access Tokens shall always only contain scopes that are defined on the respective Resource
             *   Server (returned from `features.resourceIndicators.getResourceServerInfo`).
             */
            resourceIndicators?:
                | {
                    enabled?: boolean | undefined;
                    /**
                     * **Important:**
                     *
                     * The default helper implementation is a placeholder and MUST be replaced by a deployment before
                     * use.
                     *
                     * Specifies a helper function that shall be invoked to load information about a Resource Server
                     * (API) and determine whether the client is authorized to request scopes for that particular
                     * resource. This function enables resource-specific scope validation and Access Token configuration
                     * according to authorization server policy.
                     *
                     * A returned `accessTokenTTL` must be a positive safe integer number of seconds. Fractional,
                     * non-finite, non-positive, and unsafe integer values are rejected.
                     *
                     * Reject unauthorized resource indicators with `errors.InvalidTarget`.
                     *
                     * **Recommendation:** Only allow client's pre-registered resource values. To pre-register these you
                     * shall use the `extraClientMetadata` configuration option to define a custom metadata and use that
                     * to implement your policy using this function.
                     */
                    getResourceServerInfo?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            resourceIndicator: string,
                            client: Client,
                        ) => CanBePromise<ResourceServer>)
                        | undefined;
                    /**
                     * Specifies a helper function that shall be invoked to determine the default resource indicator for
                     * a request when none is provided by the client during the authorization request or when multiple
                     * resources are provided/resolved and only a single one is required during an Access Token Request.
                     * This function enables authorization server policy-based resource selection according to
                     * deployment requirements.
                     *
                     * `oneOf`, when present, contains the candidate resource indicators. Leaving that array unresolved
                     * causes a request that requires one target to fail with `invalid_target`.
                     */
                    defaultResource?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            client: Client,
                            oneOf?: readonly string[] | undefined,
                        ) => CanBePromise<string | readonly string[] | undefined>)
                        | undefined;
                    /**
                     * Specifies a helper function that shall be invoked to determine whether an already granted
                     * resource indicator should be used without being explicitly requested by the client during the
                     * Token Endpoint request. This function enables flexible resource selection policies for token
                     * issuance operations.
                     *
                     * `true` permits the already granted resource to be selected when the request omits `resource`;
                     * `false` does not.
                     *
                     * **Recommendation:** Use `return true` when it's allowed for a client to skip providing the
                     * "resource" parameter at the Token Endpoint.
                     *
                     * **Recommendation:** Use `return false` (default) when it's required for a client to explicitly
                     * provide a "resource" parameter at the Token Endpoint or when other indication dictates an Access
                     * Token for the UserInfo Endpoint should be returned.
                     */
                    useGrantedResource?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            model:
                                | AuthorizationCode
                                | RefreshToken
                                | DeviceCode
                                | BackchannelAuthenticationRequest
                                | PreAuthorizedCode,
                        ) => CanBePromise<boolean>)
                        | undefined;
                }
                | undefined;

            /**
             * [OIDC Relying Party Metadata Choices 1.0](https://openid.net/specs/openid-connect-rp-metadata-choices-1_0-final.html)
             *
             * Specifies whether Relying Party Metadata Choices capabilities shall be enabled. When enabled, the
             * authorization server shall support the following multi-valued input parameters metadata from the Relying
             * Party Metadata Choices draft, provided that their underlying feature is also enabled:
             *
             * - subject_types_supported
             * - id_token_signing_alg_values_supported
             * - id_token_encryption_alg_values_supported
             * - id_token_encryption_enc_values_supported
             * - userinfo_signing_alg_values_supported
             * - userinfo_encryption_alg_values_supported
             * - userinfo_encryption_enc_values_supported
             * - request_object_signing_alg_values_supported
             * - request_object_encryption_alg_values_supported
             * - request_object_encryption_enc_values_supported
             * - token_endpoint_auth_methods_supported
             * - token_endpoint_auth_signing_alg_values_supported
             * - introspection_signing_alg_values_supported
             * - introspection_encryption_alg_values_supported
             * - introspection_encryption_enc_values_supported
             * - authorization_signing_alg_values_supported
             * - authorization_encryption_alg_values_supported
             * - authorization_encryption_enc_values_supported
             * - backchannel_authentication_request_signing_alg_values_supported
             */
            rpMetadataChoices?: {
                enabled?: boolean | undefined;
            } | undefined;

            /**
             * External Signing Support
             *
             * This is an experimental feature.
             *
             * Specifies whether external signing capabilities shall be enabled. When enabled, the authorization server
             * shall support the use of `ExternalSigningKey` class instances in place of private JWK entries within the
             * `jwks.keys` configuration array. This feature enables Digital Signature Algorithm operations (such as
             * PS256, ES256, or other supported algorithms) to be performed by external cryptographic services,
             * including Key Management Services (KMS) and Hardware Security Modules (HSM), providing enhanced security
             * for private key material through externalized signing operations.
             *
             * @see [KMS integration with AWS Key Management Service](https://github.com/panva/node-oidc-provider/discussions/1316)
             */
            externalSigningSupport?: {
                enabled?: boolean | undefined;
                ack?: string | undefined;
            } | undefined;

            /**
             * [draft-ietf-oauth-attestation-based-client-auth-10](https://www.ietf.org/archive/id/draft-ietf-oauth-attestation-based-client-auth-10.html)
             * - OAuth 2.0 Attestation-Based Client Authentication
             *
             * This is an experimental feature.
             *
             * **Important:**
             *
             * The following default helper implementations in this option include placeholders and MUST be replaced by
             * a deployment before use.
             * - `getAttestationSignaturePublicKey`
             *
             * Specifies whether Attestation-Based Client Authentication capabilities shall be enabled. When enabled,
             * the authorization server shall support the `attest_jwt_client_auth` authentication method within the
             * server's `clientAuthMethods` configuration. This mechanism enables Client Instances to authenticate using
             * a Client Attestation JWT issued by a trusted Client Attester and a corresponding Client Attestation
             * Proof-of-Possession JWT generated by the Client Instance. It can also enable Client Attestation as an
             * additional security signal alongside existing Client Authentication methods using the
             * `attestation_pop_jwt` Proof-of-Possession method.
             */
            attestClientAuth?: AttestClientAuthConfiguration | undefined;
        } & ConditionalRichAuthorizationRequestFeatures
        | undefined;

    /**
     * Additional Access Token Claims
     *
     * Specifies a helper function that shall be invoked to add additional claims to Access Tokens during the token
     * issuance process. For opaque Access Tokens, the returned claims shall be stored in the authorization server
     * storage under the `extra` property and shall be returned by the introspection endpoint as top-level claims. For
     * JWT-formatted Access Tokens, the returned claims shall be included as top-level claims within the JWT payload.
     * Claims returned by this function will not overwrite pre-existing top-level claims in the token.
     */
    extraTokenClaims?:
        | ((
            ctx: KoaContextWithOIDC,
            token: AccessToken | ClientCredentials,
        ) => CanBePromise<UnknownObject | undefined>)
        | undefined;

    /**
     * Fetching External Resources
     *
     * Specifies a function that shall be invoked whenever the authorization server needs to make calls to external
     * HTTPS resources. The interface and expected return value shall conform to the
     * [Fetch API specification](https://fetch.spec.whatwg.org/)
     * [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch) standard.
     *
     * Before each invocation the authorization server sets the following fetch options:
     * - `signal` to `AbortSignal.timeout(2500)`
     * - `headers` to a new `Headers` instance with the `user-agent` header set to an empty string in order to remove
     *   the default one
     * - `dispatcher` to a custom `undici.Agent` that rejects connections to private, loopback, and other
     *   non-globally-routable IP addresses, preventing Server-Side Request Forgery (SSRF)
     */
    fetch?:
        | ((
            input: string | URL | Request,
            init?: RequestInit,
        ) => Promise<Response>)
        | undefined;

    /**
     * Fetch Response Body Size Limits
     *
     * Specifies per-purpose maximum response body size limits (in bytes) for external HTTPS resource fetches. When a
     * limit is defined for a given purpose, the authorization server will bail out early on `Content-Length` header
     * values exceeding the limit and will also abort reading the response body when the accumulated size exceeds the
     * limit. Purposes with a limit of `Infinity` will not enforce any size restriction.
     */
    fetchResponseBodyLimits?:
        | {
            "client_id metadata document"?: number | undefined;
            jwks_uri?: number | undefined;
            sector_identifier_uri?: number | undefined;
            [purpose: string]: number | undefined;
        }
        | undefined;

    /**
     * Session-Bound Token Expiration
     *
     * Specifies a helper function that shall be invoked to determine whether authorization codes, device codes, or
     * authorization-endpoint-returned opaque access tokens shall be bound to the end-user session. When session binding
     * is enabled, this policy shall be applied to all opaque tokens issued from the authorization code, device code, or
     * subsequent refresh token exchanges. When artifacts are session-bound, their originating session will be loaded by
     * its unique identifier every time the artifacts are encountered. Session-bound artifacts shall be effectively
     * revoked when the end-user logs out, providing automatic cleanup of token state upon session termination.
     *
     * `true` binds the artifact to the current session; `false` leaves it usable after logout and marks the client
     * authorization as persisting logout. The default returns `false` only when the source includes the
     * `offline_access` scope.
     */
    expiresWithSession?:
        | ((
            ctx: KoaContextWithOIDC,
            source: AccessToken | AuthorizationCode | DeviceCode,
        ) => CanBePromise<boolean>)
        | undefined;

    /**
     * Refresh Token Issuance Policy
     *
     * Specifies a helper function that shall be invoked to determine whether a refresh token shall be issued during
     * token endpoint operations. This function enables policy-based control over refresh token issuance according to
     * authorization server requirements, client capabilities, and granted scope values.
     *
     * `true` issues a refresh token and `false` does not. The default requires both the `refresh_token` grant type and
     * the `offline_access` scope.
     */
    issueRefreshToken?:
        | ((
            ctx: KoaContextWithOIDC,
            client: Client,
            source: AuthorizationCode | DeviceCode | BackchannelAuthenticationRequest | PreAuthorizedCode,
        ) => CanBePromise<boolean>)
        | undefined;

    /**
     * JSON Web Key Set (JWKS)
     *
     * Specifies the JSON Web Key Set that shall be used by the authorization server for cryptographic signing and
     * decryption operations. The key set MUST be provided in
     * [JWK Set format](https://www.rfc-editor.org/info/rfc7517/#section-5) as defined in RFC 7517. All keys within the
     * set MUST be private keys.
     *
     * Supported key types include:
     *
     * - RSA
     * - OKP (Ed25519 and X25519 subtypes)
     * - EC (P-256, P-384, and P-521 curves)
     *
     * **Recommendation:** Be sure to follow best practices for distributing private keying material and secrets for
     * your respective target deployment environment.
     *
     * **Recommendation:** The following action order is recommended when rotating signing keys on a distributed
     * deployment with rolling reloads in place.
     *
     * 1. push new keys at the very end of the "keys" array in your JWKS, this means the keys will become available for
     *    verification should they be encountered but not yet used for signing
     * 2. reload all your processes
     * 3. move your new key to the very front of the "keys" array in your JWKS, this means the key will be used for
     *    signing after reload
     * 4. reload all your processes
     */
    jwks?: JWKS | undefined;

    /**
     * Supported response_type Values
     *
     * Specifies the response_type values supported by this authorization server. In accordance with RFC 9700 (OAuth 2.0
     * Security Best Current Practice), the default configuration excludes response types that result in access tokens
     * being issued directly by the authorization endpoint.
     */
    responseTypes?: readonly ResponseType[] | undefined;

    /**
     * Grant Revocation Policy
     *
     * Specifies a helper function that shall be invoked to determine whether an underlying Grant entry shall be revoked
     * in addition to the specific token or code being processed. This function enables enforcement of grant revocation
     * policies according to authorization server security requirements. The function is invoked in the following
     * contexts:
     * - RP-Initiated Logout
     * - Opaque Access Token Revocation
     * - Refresh Token Revocation
     * - Authorization Code re-use
     * - Device Code re-use
     * - Backchannel Authentication Request re-use
     * - Rotated Refresh Token re-use
     *
     * The current route and token models are available from `ctx.oidc`. `true` destroys the underlying Grant after its
     * related token artifacts are revoked and emits `grant.revoked`; `false` preserves the Grant. The default preserves
     * the Grant only when revoking an AccessToken at the revocation endpoint.
     */
    revokeGrantPolicy?: ((ctx: KoaContextWithOIDC) => CanBePromise<boolean>) | undefined;

    /**
     * [RFC7636](https://www.rfc-editor.org/info/rfc7636/) - Proof Key for Code Exchange (PKCE)
     *
     * Specifies the PKCE configuration, such as a policy check on the required use of PKCE.
     */
    pkce?:
        | {
            /**
             * Configures if and when the authorization server requires clients to use `PKCE`. This helper is called
             * whenever an authorization request lacks the code_challenge parameter. `false` allows the request to
             * continue without PKCE, while `true` rejects it.
             */
            required?: ((ctx: KoaContextWithOIDC, client: Client) => boolean) | undefined;
        }
        | undefined;

    /**
     * Endpoint URL Paths
     *
     * Defines the URL path mappings for authorization server endpoints. All route values are relative and shall begin
     * with a forward slash ("/") character.
     */
    routes?:
        | {
            authorization?: string | undefined;
            code_verification?: string | undefined;
            device_authorization?: string | undefined;
            challenge?: string | undefined;
            credential?: string | undefined;
            end_session?: string | undefined;
            introspection?: string | undefined;
            jwks?: string | undefined;
            registration?: string | undefined;
            revocation?: string | undefined;
            token?: string | undefined;
            userinfo?: string | undefined;
            backchannel_authentication?: string | undefined;
            pushed_authorization_request?: string | undefined;
        }
        | undefined;

    /**
     * Supported OAuth 2.0 Scope Values
     *
     * Specifies additional OAuth 2.0 scope values that this authorization server shall support and advertise in its
     * discovery document. Resource Server-specific scopes shall be configured via the `features.resourceIndicators`
     * mechanism.
     */
    scopes?: readonly string[] | ReadonlySet<string> | undefined;

    /**
     * Subject Identifier Types
     *
     * Specifies the array of Subject Identifier types that this authorization server shall support for end-user
     * identification purposes. When only `pairwise` is supported, it shall become the default `subject_type` client
     * metadata value. Supported identifier types shall include:
     * - `public` - provides the same subject identifier value to all clients
     * - `pairwise` - provides a unique subject identifier value per client to enhance privacy
     */
    subjectTypes?: readonly SubjectTypes[] | ReadonlySet<SubjectTypes> | undefined;

    /**
     * Pairwise Subject Identifier Generation
     *
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a helper function that shall be invoked to generate pairwise subject identifier values for ID Tokens
     * and UserInfo responses, as specified in OpenID Connect Core 1.0. This function enables privacy-preserving subject
     * identifier generation that provides unique identifiers per client while maintaining consistent identification for
     * the same end-user across requests to the same client.
     *
     * The returned identifier MUST be a non-empty string that is stable for the same account and sector identifier
     * while remaining unlinkable across sectors.
     *
     * **Recommendation:** Implementations should employ memoization or caching mechanisms when this function may be
     * invoked multiple times with identical arguments within a single request.
     */
    pairwiseIdentifier?:
        | ((
            ctx: KoaContextWithOIDC,
            accountId: string,
            client: Client,
        ) => CanBePromise<string>)
        | undefined;

    /**
     * Supported Client Authentication Methods
     *
     * Specifies the client authentication methods that this authorization server shall support for authenticating
     * clients at the token endpoint and other authenticated endpoints.
     */
    clientAuthMethods?: readonly ClientAuthMethod[] | ReadonlySet<ClientAuthMethod> | undefined;

    /**
     * Artifact Expirations (TTL)
     *
     * **Important:**
     *
     * The following default helper implementations in this option are intended as starting points and SHOULD be
     * customized by a deployment.
     * - `AccessToken`
     * - `BackchannelAuthenticationRequest`
     * - `ClientCredentials`
     * - `DeviceCode`
     * - `Grant`
     * - `IdToken`
     * - `Interaction`
     * - `PreAuthorizedCode`
     * - `RefreshToken`
     * - `Session`
     *
     * Specifies the Time-To-Live (TTL) values that shall be applied to various artifacts within the authorization
     * server. Every static value and every synchronous callback result MUST be a positive safe integer number of
     * seconds (`Number.isSafeInteger(value) && value > 0`). Zero, negative, fractional, `NaN`, infinite, and unsafe
     * integer values are rejected. TypeScript represents this contract as `number`, so these constraints are enforced
     * when the Provider is constructed for static values and whenever a configured callback is evaluated for dynamic
     * values.
     *
     * **Recommendation:** Token TTL values should be set to the minimum duration necessary for the intended use case to
     * minimize security exposure.
     *
     * **Recommendation:** For refresh tokens requiring extended lifetimes, consider utilizing the `rotateRefreshToken`
     * configuration option, which extends effective token lifetime through rotation rather than extended initial TTL
     * values.
     */
    ttl?:
        | ({
            AccessToken?:
                | number
                | ((ctx: KoaContextWithOIDC, token: AccessToken, client: Client) => number)
                | undefined;
            AuthorizationCode?:
                | number
                | ((ctx: KoaContextWithOIDC, code: AuthorizationCode, client: Client) => number)
                | undefined;
            BackchannelAuthenticationRequest?:
                | number
                | ((ctx: KoaContextWithOIDC, request: BackchannelAuthenticationRequest, client: Client) => number)
                | undefined;
            ClientCredentials?:
                | number
                | ((ctx: KoaContextWithOIDC, token: ClientCredentials, client: Client) => number)
                | undefined;
            DeviceCode?: number | ((ctx: KoaContextWithOIDC, code: DeviceCode, client: Client) => number) | undefined;
            Grant?: number | ((ctx: KoaContextWithOIDC, grant: Grant) => number) | undefined;
            IdToken?: number | ((ctx: KoaContextWithOIDC, token: IdToken, client: Client) => number) | undefined;
            Interaction?: number | ((ctx: KoaContextWithOIDC, interaction: Interaction) => number) | undefined;
            PreAuthorizedCode?: number | ((ctx: KoaContextWithOIDC, code: PreAuthorizedCode) => number) | undefined;
            RefreshToken?:
                | number
                | ((ctx: KoaContextWithOIDC, token: RefreshToken, client: Client) => number)
                | undefined;
            Session?: number | ((ctx: KoaContextWithOIDC, session: Session) => number) | undefined;
            [key: string]: unknown;
        })
        | undefined;

    /**
     * Loading Existing Grants
     *
     * Helper function invoked to load existing authorization grants that may be used to resolve an Authorization
     * Request without requiring additional end-user interaction. The default implementation attempts to load grants
     * based on the interaction result's `consent.grantId` property, falling back to the existing grantId for the
     * requesting client in the current session.
     */
    loadExistingGrant?: ((ctx: KoaContextWithOIDC) => CanBePromise<Grant | undefined>) | undefined;

    /**
     * Custom Client Metadata Properties
     *
     * Specifies the configuration for custom client metadata properties that shall be supported by the authorization
     * server for client registration and metadata validation purposes. This configuration enables extension of standard
     * OAuth 2.0 and OpenID Connect client metadata with deployment-specific properties. Existing standards-defined
     * properties are snakeCased on a Client instance (e.g. `client.redirectUris`), while new properties defined by this
     * configuration shall be available with their names verbatim (e.g. `client['urn:example:client:my-property']`).
     */
    extraClientMetadata?:
        | {
            /**
             * Specifies an array of property names that clients shall be allowed to have defined within their client
             * metadata during registration and management operations. Each property name listed here extends the
             * standard client metadata schema according to authorization server policy.
             */
            properties?: readonly string[] | undefined;

            /**
             * Specifies a validator function that shall be executed in order once for every property defined in
             * `extraClientMetadata.properties`, regardless of its value or presence in the client metadata passed
             * during registration or update operations. The function MUST be synchronous; async validators and any
             * returned thenable are rejected during runtime. To modify the current client metadata values (for the
             * current key or any other) simply modify the passed in `metadata` argument within the validator function.
             * `ctx` is provided for registration and update requests and is `undefined` for other Client construction
             * paths.
             */
            validator?:
                | ((
                    ctx: KoaContextWithOIDC | undefined,
                    key: string,
                    value: unknown,
                    metadata: ClientMetadata,
                ) => void | undefined)
                | undefined;
        }
        | undefined;

    /**
     * Refresh Token Rotation Policy
     *
     * Specifies the refresh token rotation policy that shall be applied by the authorization server when refresh tokens
     * are used. This configuration determines whether and under what conditions refresh tokens shall be rotated.
     * Supported values include:
     * - `false` - refresh tokens shall not be rotated and their initial expiration date is final
     * - `true` - refresh tokens shall be rotated when used, with the current token marked as consumed and a new one
     *   issued with new TTL; when a consumed refresh token is encountered an error shall be returned and the whole
     *   token chain (grant) is revoked
     * - `function` - a function returning true/false that shall be invoked to determine whether rotation should occur
     *   based on request context and authorization server policy
     *
     * The default configuration value implements a sensible refresh token rotation policy that:
     * - only allows refresh tokens to be rotated (have their TTL prolonged by issuing a new one) for one year
     * - otherwise always rotates public client tokens that are not sender-constrained
     * - otherwise only rotates tokens if they're being used close to their expiration (>= 70% TTL passed)
     *
     * The RefreshToken and Client are available as `ctx.oidc.entities.RefreshToken` and `ctx.oidc.entities.Client`.
     * `true` consumes the presented token and issues a rotated refresh token; `false` continues without rotation. A
     * configured literal Boolean applies that decision without invoking a function.
     */
    rotateRefreshToken?: ((ctx: KoaContextWithOIDC) => CanBePromise<boolean>) | boolean | undefined;

    /**
     * Error Response Rendering
     *
     * **Important:**
     *
     * The default helper implementation is intended as a starting point and SHOULD be customized by a deployment.
     *
     * Specifies a function that shall be invoked to present error responses to the User-Agent during authorization
     * server operations. This function enables customization of error presentation according to deployment-specific
     * user interface requirements.
     */
    renderError?:
        | ((
            ctx: KoaContextWithOIDC,
            out: ErrorOut,
            error: errors.OIDCProviderError | Error,
        ) => CanBePromise<void | undefined>)
        | undefined;

    /**
     * Redirect URI Parameter Omission for Single Registered URI
     *
     * Specifies whether clients may omit the `redirect_uri` parameter in authorization requests when only a single
     * redirect URI is registered in their client metadata. When enabled, the authorization server shall automatically
     * use the sole registered redirect URI for clients that have exactly one URI configured.
     *
     * When disabled, all authorization requests MUST explicitly include the `redirect_uri` parameter regardless of the
     * number of registered redirect URIs.
     */
    allowOmittingSingleRegisteredRedirectUri?: boolean | undefined;

    /**
     * Query Parameter Access Tokens
     *
     * Controls whether access tokens may be transmitted via URI query parameters. Several OAuth 2.0 and OpenID Connect
     * profiles require that access tokens be transmitted exclusively via the Authorization header. When set to false,
     * the authorization server shall reject requests attempting to transmit access tokens via query parameters.
     */
    acceptQueryParamAccessTokens?: boolean | undefined;

    /**
     * End-User Interaction Policy
     *
     * Specifies the configuration for interaction policy and end-user redirection that shall be applied to determine
     * when user interaction is required during the authorization process. This configuration enables customization of
     * authentication and consent flows according to deployment-specific requirements.
     */
    interactions?:
        | {
            /**
             * Specifies the structure of Prompts and their associated checks that shall be applied during authorization
             * request processing. The policy is formed by Prompt and Check class instances that define the conditions
             * under which user interaction is required. The default policy implementation provides a fresh instance
             * that can be customized, and the relevant classes are exported for configuration purposes. All checks
             * belonging to a Prompt are evaluated concurrently. Checks within the same Prompt MUST NOT depend on
             * evaluation order or on mutations performed by another check.
             */
            policy?: (readonly interactionPolicy.Prompt[]) | undefined;
            /**
             * Specifies a function that shall be invoked to determine the destination URL for redirecting the
             * User-Agent when user interaction is required during authorization processing. This function enables
             * customization of the interaction endpoint location and may return both absolute and relative URLs
             * according to deployment requirements.
             */
            url?:
                | ((
                    ctx: KoaContextWithOIDC,
                    interaction: Interaction,
                ) => CanBePromise<string>)
                | undefined;
        }
        | undefined;

    /**
     * Account Loading and Claims Resolution
     *
     * **Important:**
     *
     * The default helper implementation is a placeholder and MUST be replaced by a deployment before use.
     *
     * Specifies a function that shall be invoked to load an account and retrieve its available claims during
     * authorization server operations. This function enables the authorization server to resolve end-user account
     * information based on the provided account identifier. The returned Account contains an `accountId` property and a
     * `claims()` method that returns the claims supported by the issuer; `claims()` may also be asynchronous. Return
     * `undefined` when the account cannot be loaded.
     */
    findAccount?: FindAccount | undefined;

    /**
     * Sector Identifier URI Validation
     *
     * Specifies a function that shall be invoked to determine whether the sectorIdentifierUri of a client being loaded,
     * registered, or updated should be fetched and its contents validated against the client metadata.
     */
    sectorIdentifierUriValidate?: ((client: Client) => boolean) | undefined;

    /**
     * Supported JSON Web Algorithms (JWA)
     *
     * Specifies the JSON Web Algorithm (JWA) values supported by this authorization server for various cryptographic
     * operations, as defined in RFC 7518 and related specifications.
     */
    enabledJWA?:
        | {
            /**
             * JWE "alg" Algorithm values the authorization server supports for JWT Authorization response (`JARM`)
             * encryption
             */
            authorizationEncryptionAlgValues?: readonly EncryptionAlgValues[] | undefined;
            /**
             * JWE "enc" Content Encryption Algorithm values the authorization server supports to encrypt JWT
             * Authorization Responses (`JARM`) with
             */
            authorizationEncryptionEncValues?: readonly EncryptionEncValues[] | undefined;
            /**
             * JWS "alg" Algorithm values the authorization server supports to sign JWT Authorization Responses (`JARM`)
             * with
             */
            authorizationSigningAlgValues?: readonly SigningAlgorithm[] | undefined;
            /**
             * JWS "alg" Algorithm values the authorization server supports to verify signed DPoP proof JWTs with
             */
            dPoPSigningAlgValues?: readonly AsymmetricSigningAlgorithm[] | undefined;
            /**
             * JWS "alg" Algorithm values the authorization server supports to verify signed Client Attestation and
             * Client Attestation PoP JWTs with
             */
            attestSigningAlgValues?: readonly AsymmetricSigningAlgorithm[] | undefined;
            /**
             * JWE "alg" Algorithm values the authorization server supports for ID Token encryption
             */
            idTokenEncryptionAlgValues?: readonly EncryptionAlgValues[] | undefined;
            /**
             * JWE "enc" Content Encryption Algorithm values the authorization server supports to encrypt ID Tokens with
             */
            idTokenEncryptionEncValues?: readonly EncryptionEncValues[] | undefined;
            /**
             * JWS "alg" Algorithm values the authorization server supports to sign ID Tokens with.
             */
            idTokenSigningAlgValues?: readonly SigningAlgorithmWithNone[] | undefined;
            /**
             * JWE "alg" Algorithm values the authorization server supports for JWT Introspection response encryption
             */
            introspectionEncryptionAlgValues?: readonly EncryptionAlgValues[] | undefined;
            /**
             * JWE "enc" Content Encryption Algorithm values the authorization server supports to encrypt JWT
             * Introspection responses with
             */
            introspectionEncryptionEncValues?: readonly EncryptionEncValues[] | undefined;
            /**
             * JWS "alg" Algorithm values the authorization server supports to sign JWT Introspection responses with
             */
            introspectionSigningAlgValues?: readonly SigningAlgorithmWithNone[] | undefined;
            /**
             * JWE "alg" Algorithm values the authorization server supports to receive encrypted Request Objects (`JAR`)
             * with
             */
            requestObjectEncryptionAlgValues?: readonly EncryptionAlgValues[] | undefined;
            /**
             * JWE "enc" Content Encryption Algorithm values the authorization server supports to decrypt Request
             * Objects (`JAR`) with
             */
            requestObjectEncryptionEncValues?: readonly EncryptionEncValues[] | undefined;
            /**
             * JWS "alg" Algorithm values the authorization server supports to receive signed Request Objects (`JAR`)
             * with
             */
            requestObjectSigningAlgValues?: readonly SigningAlgorithmWithNone[] | undefined;
            /**
             * JWS "alg" Algorithm values the authorization server supports for signed JWT Client Authentication
             * (`private_key_jwt` and `client_secret_jwt`)
             */
            clientAuthSigningAlgValues?: readonly SigningAlgorithm[] | undefined;
            /**
             * JWE "alg" Algorithm values the authorization server supports for UserInfo Response encryption
             */
            userinfoEncryptionAlgValues?: readonly EncryptionAlgValues[] | undefined;
            /**
             * JWE "enc" Content Encryption Algorithm values the authorization server supports to encrypt UserInfo
             * responses with
             */
            userinfoEncryptionEncValues?: readonly EncryptionEncValues[] | undefined;
            /**
             * JWS "alg" Algorithm values the authorization server supports to sign UserInfo responses with
             */
            userinfoSigningAlgValues?: readonly SigningAlgorithmWithNone[] | undefined;
        }
        | undefined;
}

export class ExternalSigningKey {
    get alg(): string | undefined;
    get crv(): string | undefined;
    get e(): string | undefined;
    get key_ops(): string[] | undefined;
    get kid(): string | undefined;
    get kty(): string;
    get n(): string | undefined;
    get pub(): string | undefined;
    get use(): "sig";
    get x(): string | undefined;
    get x5c(): string[] | undefined;
    get y(): string | undefined;

    keyObject(): Promise<crypto.KeyObject> | crypto.KeyObject;

    sign(data: Uint8Array): Promise<Uint8Array> | Uint8Array;
}

interface ProviderAdditionalEventMap {
    "backchannel_authentication.error": (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void;
    "challenge.error": (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void;
    "code_verification.error": (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void;
    "credential.error": (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void;
    "device_authorization.error": (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void;
    "device_authorization.success": (ctx: KoaContextWithOIDC, body: UnknownObject) => void;
    "device_resume.error": (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void;
    "end_session_confirm.error": (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void;
    "end_session_success.error": (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void;
    "initial_access_token.destroyed": (token: InitialAccessToken) => void;
    "initial_access_token.saved": (token: InitialAccessToken) => void;
    "openid_credential_issuer.error": (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void;
    "pre_authorized_code.consumed": (code: PreAuthorizedCode) => void;
    "pre_authorized_code.destroyed": (code: PreAuthorizedCode) => void;
    "pre_authorized_code.saved": (code: PreAuthorizedCode) => void;
}
// END GENERATED OIDC-PROVIDER CONTRACTS
/* eslint-enable @typescript-eslint/no-invalid-void-type */

export interface HttpOptions {
    signal?: AbortSignal | undefined;
    agent?: http.Agent | https.Agent | undefined;
    dnsLookup?: typeof dns.lookup | undefined;
    "user-agent"?: string | undefined;
}
export type AsymmetricSigningAlgorithm =
    | "PS256"
    | "PS384"
    | "PS512"
    | "Ed25519"
    | "ES256"
    | "ES384"
    | "ES512"
    | "RS256"
    | "RS384"
    | "RS512"
    | "ML-DSA-44"
    | "ML-DSA-65"
    | "ML-DSA-87"
    | "EdDSA";
export type SymmetricSigningAlgorithm = "HS256" | "HS384" | "HS512";
export type SigningAlgorithm = AsymmetricSigningAlgorithm | SymmetricSigningAlgorithm;
export type SigningAlgorithmWithNone = AsymmetricSigningAlgorithm | SymmetricSigningAlgorithm;
export type EncryptionAlgValues =
    | "RSA-OAEP"
    | "RSA-OAEP-256"
    | "RSA-OAEP-384"
    | "RSA-OAEP-512"
    | "ECDH-ES"
    | "ECDH-ES+A128KW"
    | "ECDH-ES+A192KW"
    | "ECDH-ES+A256KW"
    | "A128KW"
    | "A192KW"
    | "A256KW"
    | "A128GCMKW"
    | "A192GCMKW"
    | "A256GCMKW"
    | "dir";
export type EncryptionEncValues =
    | "A128CBC-HS256"
    | "A128GCM"
    | "A192CBC-HS384"
    | "A192GCM"
    | "A256CBC-HS512"
    | "A256GCM";

export interface InteractionResults {
    login?:
        | {
            remember?: boolean | undefined;
            accountId: string;
            ts?: number | undefined;
            amr?: string[] | undefined;
            acr?: string | undefined;
            [key: string]: unknown;
        }
        | undefined;

    consent?:
        | {
            grantId?: string | undefined;
            [key: string]: unknown;
        }
        | undefined;

    [key: string]: unknown;
}

export default class Provider extends Koa {
    constructor(issuer: string, configuration?: Configuration);

    readonly issuer: string;

    /**
     * @deprecated
     */
    readonly app: Koa;

    static get ctx(): KoaContextWithOIDC | undefined;

    // BEGIN GENERATED OIDC-PROVIDER MEMBERS
    urlFor(name: string, options?: UnknownObject): string;
    pathFor(name: string, options?: UnknownObject & { mountPath?: string | undefined }): string;
    cookieName(type: string): string;

    registerResponseMode(
        name: string,
        handler: (
            ctx: KoaContextWithOIDC,
            redirectUri: string,
            payload: UnknownObject,
        ) => CanBePromise<void>,
    ): void;

    backchannelResult(
        request: BackchannelAuthenticationRequest | string,
        result: Grant | errors.OIDCProviderError | string,
        opts?: {
            acr?: string | undefined;
            amr?: string[] | undefined;
            authTime?: number | undefined;
            sessionUid?: string | undefined;
            expiresWithSession?: boolean | undefined;
            sid?: string | undefined;
            rar?: AuthorizationDetail[] | undefined;
        },
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

    registerGrantType<Params extends object = UnknownObject>(
        name: string,
        handler: (ctx: TokenEndpointGrantContext<Params>) => CanBePromise<void>,
        params?: string | readonly string[] | ReadonlySet<string>,
        duplicates?: string | readonly string[] | ReadonlySet<string>,
    ): void;

    // tslint:disable:unified-signatures
    addListener(event: "access_token.destroyed", listener: (accessToken: AccessToken) => void): this;
    addListener(event: "access_token.saved", listener: (accessToken: AccessToken) => void): this;
    addListener(event: "access_token.issued", listener: (accessToken: AccessToken) => void): this;
    addListener(event: "authorization_code.consumed", listener: (authorizationCode: AuthorizationCode) => void): this;
    addListener(event: "authorization_code.destroyed", listener: (authorizationCode: AuthorizationCode) => void): this;
    addListener(event: "authorization_code.saved", listener: (authorizationCode: AuthorizationCode) => void): this;
    addListener(event: "authorization.accepted", listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(
        event: "authorization.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "authorization.success",
        listener: (ctx: KoaContextWithOIDC, response?: UnknownObject) => void,
    ): this;
    addListener(
        event: "backchannel.error",
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    addListener(
        event: "backchannel.success",
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    addListener(
        event: "backchannel_authentication_request.consumed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    addListener(
        event: "backchannel_authentication_request.destroyed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    addListener(
        event: "backchannel_authentication_request.saved",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    addListener(event: "jwks.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    addListener(event: "client_credentials.destroyed", listener: (clientCredentials: ClientCredentials) => void): this;
    addListener(event: "client_credentials.saved", listener: (clientCredentials: ClientCredentials) => void): this;
    addListener(event: "client_credentials.issued", listener: (clientCredentials: ClientCredentials) => void): this;
    addListener(event: "device_code.consumed", listener: (deviceCode: DeviceCode) => void): this;
    addListener(event: "device_code.destroyed", listener: (deviceCode: DeviceCode) => void): this;
    addListener(event: "device_code.saved", listener: (deviceCode: DeviceCode) => void): this;
    addListener(
        event: "discovery.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "end_session.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(event: "end_session.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(event: "grant.destroyed", listener: (grant: Grant) => void): this;
    addListener(event: "grant.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    addListener(event: "grant.revoked", listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    addListener(event: "grant.saved", listener: (grant: Grant) => void): this;
    addListener(event: "grant.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(event: "interaction.destroyed", listener: (interaction: Interaction) => void): this;
    addListener(event: "interaction.ended", listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(event: "interaction.saved", listener: (interaction: Interaction) => void): this;
    addListener(
        event: "interaction.started",
        listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void,
    ): this;
    addListener(
        event: "introspection.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(event: "replay_detection.destroyed", listener: (replayDetection: ReplayDetection) => void): this;
    addListener(event: "replay_detection.saved", listener: (replayDetection: ReplayDetection) => void): this;
    addListener(
        event: "pushed_authorization_request.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "pushed_authorization_request.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    addListener(
        event: "pushed_authorization_request.destroyed",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    addListener(
        event: "pushed_authorization_request.saved",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    addListener(event: "refresh_token.consumed", listener: (refreshToken: RefreshToken) => void): this;
    addListener(event: "refresh_token.destroyed", listener: (refreshToken: RefreshToken) => void): this;
    addListener(event: "refresh_token.saved", listener: (refreshToken: RefreshToken) => void): this;
    addListener(
        event: "registration_access_token.destroyed",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    addListener(
        event: "registration_access_token.saved",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    addListener(
        event: "registration_create.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "registration_create.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    addListener(
        event: "registration_delete.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "registration_delete.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    addListener(
        event: "registration_read.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "registration_update.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "registration_update.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    addListener(
        event: "revocation.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(event: "server_error", listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;
    addListener(event: "session.destroyed", listener: (session: Session) => void): this;
    addListener(event: "session.saved", listener: (session: Session) => void): this;
    addListener(
        event: "userinfo.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener<Event extends keyof ProviderAdditionalEventMap>(
        event: Event,
        listener: ProviderAdditionalEventMap[Event],
    ): this;
    on(event: "access_token.destroyed", listener: (accessToken: AccessToken) => void): this;
    on(event: "access_token.saved", listener: (accessToken: AccessToken) => void): this;
    on(event: "access_token.issued", listener: (accessToken: AccessToken) => void): this;
    on(event: "authorization_code.consumed", listener: (authorizationCode: AuthorizationCode) => void): this;
    on(event: "authorization_code.destroyed", listener: (authorizationCode: AuthorizationCode) => void): this;
    on(event: "authorization_code.saved", listener: (authorizationCode: AuthorizationCode) => void): this;
    on(event: "authorization.accepted", listener: (ctx: KoaContextWithOIDC) => void): this;
    on(event: "authorization.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "authorization.success", listener: (ctx: KoaContextWithOIDC, response?: UnknownObject) => void): this;
    on(
        event: "backchannel.error",
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    on(
        event: "backchannel.success",
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    on(
        event: "backchannel_authentication_request.consumed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    on(
        event: "backchannel_authentication_request.destroyed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    on(
        event: "backchannel_authentication_request.saved",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    on(event: "jwks.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "client_credentials.destroyed", listener: (clientCredentials: ClientCredentials) => void): this;
    on(event: "client_credentials.saved", listener: (clientCredentials: ClientCredentials) => void): this;
    on(event: "client_credentials.issued", listener: (clientCredentials: ClientCredentials) => void): this;
    on(event: "device_code.consumed", listener: (deviceCode: DeviceCode) => void): this;
    on(event: "device_code.destroyed", listener: (deviceCode: DeviceCode) => void): this;
    on(event: "device_code.saved", listener: (deviceCode: DeviceCode) => void): this;
    on(event: "discovery.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "end_session.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "end_session.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    on(event: "grant.destroyed", listener: (grant: Grant) => void): this;
    on(event: "grant.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "grant.revoked", listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    on(event: "grant.saved", listener: (grant: Grant) => void): this;
    on(event: "grant.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    on(event: "interaction.destroyed", listener: (interaction: Interaction) => void): this;
    on(event: "interaction.ended", listener: (ctx: KoaContextWithOIDC) => void): this;
    on(event: "interaction.saved", listener: (interaction: Interaction) => void): this;
    on(event: "interaction.started", listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void): this;
    on(event: "introspection.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "replay_detection.destroyed", listener: (replayDetection: ReplayDetection) => void): this;
    on(event: "replay_detection.saved", listener: (replayDetection: ReplayDetection) => void): this;
    on(
        event: "pushed_authorization_request.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(
        event: "pushed_authorization_request.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    on(
        event: "pushed_authorization_request.destroyed",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    on(
        event: "pushed_authorization_request.saved",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    on(event: "refresh_token.consumed", listener: (refreshToken: RefreshToken) => void): this;
    on(event: "refresh_token.destroyed", listener: (refreshToken: RefreshToken) => void): this;
    on(event: "refresh_token.saved", listener: (refreshToken: RefreshToken) => void): this;
    on(
        event: "registration_access_token.destroyed",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    on(
        event: "registration_access_token.saved",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    on(
        event: "registration_create.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: "registration_create.success", listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    on(
        event: "registration_delete.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: "registration_delete.success", listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    on(
        event: "registration_read.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(
        event: "registration_update.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: "registration_update.success", listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    on(event: "revocation.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "server_error", listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;
    on(event: "session.destroyed", listener: (session: Session) => void): this;
    on(event: "session.saved", listener: (session: Session) => void): this;
    on(event: "userinfo.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on<Event extends keyof ProviderAdditionalEventMap>(
        event: Event,
        listener: ProviderAdditionalEventMap[Event],
    ): this;
    once(event: "access_token.destroyed", listener: (accessToken: AccessToken) => void): this;
    once(event: "access_token.saved", listener: (accessToken: AccessToken) => void): this;
    once(event: "access_token.issued", listener: (accessToken: AccessToken) => void): this;
    once(event: "authorization_code.consumed", listener: (authorizationCode: AuthorizationCode) => void): this;
    once(event: "authorization_code.destroyed", listener: (authorizationCode: AuthorizationCode) => void): this;
    once(event: "authorization_code.saved", listener: (authorizationCode: AuthorizationCode) => void): this;
    once(event: "authorization.accepted", listener: (ctx: KoaContextWithOIDC) => void): this;
    once(
        event: "authorization.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: "authorization.success", listener: (ctx: KoaContextWithOIDC, response?: UnknownObject) => void): this;
    once(
        event: "backchannel.error",
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    once(
        event: "backchannel.success",
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    once(
        event: "backchannel_authentication_request.consumed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    once(
        event: "backchannel_authentication_request.destroyed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    once(
        event: "backchannel_authentication_request.saved",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    once(event: "jwks.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: "client_credentials.destroyed", listener: (clientCredentials: ClientCredentials) => void): this;
    once(event: "client_credentials.saved", listener: (clientCredentials: ClientCredentials) => void): this;
    once(event: "client_credentials.issued", listener: (clientCredentials: ClientCredentials) => void): this;
    once(event: "device_code.consumed", listener: (deviceCode: DeviceCode) => void): this;
    once(event: "device_code.destroyed", listener: (deviceCode: DeviceCode) => void): this;
    once(event: "device_code.saved", listener: (deviceCode: DeviceCode) => void): this;
    once(event: "discovery.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: "end_session.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: "end_session.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    once(event: "grant.destroyed", listener: (grant: Grant) => void): this;
    once(event: "grant.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: "grant.revoked", listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    once(event: "grant.saved", listener: (grant: Grant) => void): this;
    once(event: "grant.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    once(event: "interaction.destroyed", listener: (interaction: Interaction) => void): this;
    once(event: "interaction.ended", listener: (ctx: KoaContextWithOIDC) => void): this;
    once(event: "interaction.saved", listener: (interaction: Interaction) => void): this;
    once(event: "interaction.started", listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void): this;
    once(
        event: "introspection.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: "replay_detection.destroyed", listener: (replayDetection: ReplayDetection) => void): this;
    once(event: "replay_detection.saved", listener: (replayDetection: ReplayDetection) => void): this;
    once(
        event: "pushed_authorization_request.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(
        event: "pushed_authorization_request.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    once(
        event: "pushed_authorization_request.destroyed",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    once(
        event: "pushed_authorization_request.saved",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    once(event: "refresh_token.consumed", listener: (refreshToken: RefreshToken) => void): this;
    once(event: "refresh_token.destroyed", listener: (refreshToken: RefreshToken) => void): this;
    once(event: "refresh_token.saved", listener: (refreshToken: RefreshToken) => void): this;
    once(
        event: "registration_access_token.destroyed",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    once(
        event: "registration_access_token.saved",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    once(
        event: "registration_create.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: "registration_create.success", listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    once(
        event: "registration_delete.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: "registration_delete.success", listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    once(
        event: "registration_read.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(
        event: "registration_update.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: "registration_update.success", listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    once(event: "revocation.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: "server_error", listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;
    once(event: "session.destroyed", listener: (session: Session) => void): this;
    once(event: "session.saved", listener: (session: Session) => void): this;
    once(event: "userinfo.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once<Event extends keyof ProviderAdditionalEventMap>(
        event: Event,
        listener: ProviderAdditionalEventMap[Event],
    ): this;
    prependListener(event: "access_token.destroyed", listener: (accessToken: AccessToken) => void): this;
    prependListener(event: "access_token.saved", listener: (accessToken: AccessToken) => void): this;
    prependListener(event: "access_token.issued", listener: (accessToken: AccessToken) => void): this;
    prependListener(
        event: "authorization_code.consumed",
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependListener(
        event: "authorization_code.destroyed",
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependListener(event: "authorization_code.saved", listener: (authorizationCode: AuthorizationCode) => void): this;
    prependListener(event: "authorization.accepted", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(
        event: "authorization.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "authorization.success",
        listener: (ctx: KoaContextWithOIDC, response?: UnknownObject) => void,
    ): this;
    prependListener(
        event: "backchannel.error",
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    prependListener(
        event: "backchannel.success",
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    prependListener(
        event: "backchannel_authentication_request.consumed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    prependListener(
        event: "backchannel_authentication_request.destroyed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    prependListener(
        event: "backchannel_authentication_request.saved",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    prependListener(
        event: "jwks.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "client_credentials.destroyed",
        listener: (clientCredentials: ClientCredentials) => void,
    ): this;
    prependListener(event: "client_credentials.saved", listener: (clientCredentials: ClientCredentials) => void): this;
    prependListener(event: "client_credentials.issued", listener: (clientCredentials: ClientCredentials) => void): this;
    prependListener(event: "device_code.consumed", listener: (deviceCode: DeviceCode) => void): this;
    prependListener(event: "device_code.destroyed", listener: (deviceCode: DeviceCode) => void): this;
    prependListener(event: "device_code.saved", listener: (deviceCode: DeviceCode) => void): this;
    prependListener(
        event: "discovery.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "end_session.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(event: "end_session.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(event: "grant.destroyed", listener: (grant: Grant) => void): this;
    prependListener(
        event: "grant.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(event: "grant.revoked", listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    prependListener(event: "grant.saved", listener: (grant: Grant) => void): this;
    prependListener(event: "grant.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(event: "interaction.destroyed", listener: (interaction: Interaction) => void): this;
    prependListener(event: "interaction.ended", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(event: "interaction.saved", listener: (interaction: Interaction) => void): this;
    prependListener(
        event: "interaction.started",
        listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void,
    ): this;
    prependListener(
        event: "introspection.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(event: "replay_detection.destroyed", listener: (replayDetection: ReplayDetection) => void): this;
    prependListener(event: "replay_detection.saved", listener: (replayDetection: ReplayDetection) => void): this;
    prependListener(
        event: "pushed_authorization_request.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "pushed_authorization_request.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependListener(
        event: "pushed_authorization_request.destroyed",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    prependListener(
        event: "pushed_authorization_request.saved",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    prependListener(event: "refresh_token.consumed", listener: (refreshToken: RefreshToken) => void): this;
    prependListener(event: "refresh_token.destroyed", listener: (refreshToken: RefreshToken) => void): this;
    prependListener(event: "refresh_token.saved", listener: (refreshToken: RefreshToken) => void): this;
    prependListener(
        event: "registration_access_token.destroyed",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    prependListener(
        event: "registration_access_token.saved",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    prependListener(
        event: "registration_create.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "registration_create.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependListener(
        event: "registration_delete.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "registration_delete.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependListener(
        event: "registration_read.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "registration_update.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "registration_update.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependListener(
        event: "revocation.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(event: "server_error", listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;
    prependListener(event: "session.destroyed", listener: (session: Session) => void): this;
    prependListener(event: "session.saved", listener: (session: Session) => void): this;
    prependListener(
        event: "userinfo.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener<Event extends keyof ProviderAdditionalEventMap>(
        event: Event,
        listener: ProviderAdditionalEventMap[Event],
    ): this;
    prependOnceListener(event: "access_token.destroyed", listener: (accessToken: AccessToken) => void): this;
    prependOnceListener(event: "access_token.saved", listener: (accessToken: AccessToken) => void): this;
    prependOnceListener(event: "access_token.issued", listener: (accessToken: AccessToken) => void): this;
    prependOnceListener(
        event: "authorization_code.consumed",
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependOnceListener(
        event: "authorization_code.destroyed",
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependOnceListener(
        event: "authorization_code.saved",
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependOnceListener(event: "authorization.accepted", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(
        event: "authorization.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "authorization.success",
        listener: (ctx: KoaContextWithOIDC, response?: UnknownObject) => void,
    ): this;
    prependOnceListener(
        event: "backchannel.error",
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    prependOnceListener(
        event: "backchannel.success",
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    prependOnceListener(
        event: "backchannel_authentication_request.consumed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    prependOnceListener(
        event: "backchannel_authentication_request.destroyed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    prependOnceListener(
        event: "backchannel_authentication_request.saved",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    prependOnceListener(
        event: "jwks.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "client_credentials.destroyed",
        listener: (clientCredentials: ClientCredentials) => void,
    ): this;
    prependOnceListener(
        event: "client_credentials.saved",
        listener: (clientCredentials: ClientCredentials) => void,
    ): this;
    prependOnceListener(
        event: "client_credentials.issued",
        listener: (clientCredentials: ClientCredentials) => void,
    ): this;
    prependOnceListener(event: "device_code.consumed", listener: (deviceCode: DeviceCode) => void): this;
    prependOnceListener(event: "device_code.destroyed", listener: (deviceCode: DeviceCode) => void): this;
    prependOnceListener(event: "device_code.saved", listener: (deviceCode: DeviceCode) => void): this;
    prependOnceListener(
        event: "discovery.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "end_session.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(event: "end_session.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(event: "grant.destroyed", listener: (grant: Grant) => void): this;
    prependOnceListener(
        event: "grant.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(event: "grant.revoked", listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    prependOnceListener(event: "grant.saved", listener: (grant: Grant) => void): this;
    prependOnceListener(event: "grant.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(event: "interaction.destroyed", listener: (interaction: Interaction) => void): this;
    prependOnceListener(event: "interaction.ended", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(event: "interaction.saved", listener: (interaction: Interaction) => void): this;
    prependOnceListener(
        event: "interaction.started",
        listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void,
    ): this;
    prependOnceListener(
        event: "introspection.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "replay_detection.destroyed",
        listener: (replayDetection: ReplayDetection) => void,
    ): this;
    prependOnceListener(event: "replay_detection.saved", listener: (replayDetection: ReplayDetection) => void): this;
    prependOnceListener(
        event: "pushed_authorization_request.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "pushed_authorization_request.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependOnceListener(
        event: "pushed_authorization_request.destroyed",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    prependOnceListener(
        event: "pushed_authorization_request.saved",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    prependOnceListener(event: "refresh_token.consumed", listener: (refreshToken: RefreshToken) => void): this;
    prependOnceListener(event: "refresh_token.destroyed", listener: (refreshToken: RefreshToken) => void): this;
    prependOnceListener(event: "refresh_token.saved", listener: (refreshToken: RefreshToken) => void): this;
    prependOnceListener(
        event: "registration_access_token.destroyed",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    prependOnceListener(
        event: "registration_access_token.saved",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    prependOnceListener(
        event: "registration_create.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "registration_create.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependOnceListener(
        event: "registration_delete.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "registration_delete.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependOnceListener(
        event: "registration_read.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "registration_update.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "registration_update.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependOnceListener(
        event: "revocation.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(event: "server_error", listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;
    prependOnceListener(event: "session.destroyed", listener: (session: Session) => void): this;
    prependOnceListener(event: "session.saved", listener: (session: Session) => void): this;
    prependOnceListener(
        event: "userinfo.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener<Event extends keyof ProviderAdditionalEventMap>(
        event: Event,
        listener: ProviderAdditionalEventMap[Event],
    ): this;
    // tslint:enable:unified-signatures
    // END GENERATED OIDC-PROVIDER MEMBERS

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
    readonly PreAuthorizedCode: typeof PreAuthorizedCode;
    readonly BaseToken: typeof BaseToken;
    readonly IdToken: typeof IdToken;
    readonly Claims: typeof Claims;
    readonly ReplayDetection: typeof ReplayDetection;
    readonly ResourceServer: {
        new(identifier: string, data: ResourceServer): ResourceServerInstance;
    };
    readonly OIDCContext: typeof OIDCContext;
    readonly Session: typeof Session;
    readonly Interaction: typeof Interaction;
}

// BEGIN GENERATED OIDC-PROVIDER RELATED CONTRACTS
declare class Checks extends Array<interactionPolicy.Check> {
    get(reason: string): interactionPolicy.Check | undefined;
    remove(reason: string): void;
    clear(): void;
    add(check: interactionPolicy.Check, index?: number): void;
}

export namespace interactionPolicy {
    interface DefaultPolicy extends Array<Prompt> {
        get(name: string): Prompt | undefined;
        remove(name: string): void;
        clear(): void;
        add(prompt: Prompt, index?: number): void;
    }

    class Check {
        static readonly REQUEST_PROMPT: true;
        static readonly NO_NEED_TO_PROMPT: false;

        constructor(
            reason: string,
            description: string,
            error: string,
            check: (ctx: KoaContextWithOIDC) => CanBePromise<boolean>,
            details?: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject | undefined>,
        );
        constructor(
            reason: string,
            description: string,
            check: (ctx: KoaContextWithOIDC) => CanBePromise<boolean>,
            details?: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject | undefined>,
        );

        reason: string;
        description: string;
        error: string | undefined;
        details: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject | undefined>;
        check: (ctx: KoaContextWithOIDC) => CanBePromise<boolean>;
    }

    class Prompt {
        constructor(info: { name: string; requestable?: boolean | undefined }, ...checks: Check[]);
        constructor(
            info: { name: string; requestable?: boolean | undefined },
            details: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject | undefined>,
            ...checks: Check[]
        );

        name: string;
        requestable: boolean;
        details: (ctx: KoaContextWithOIDC) => CanBePromise<UnknownObject | undefined>;
        checks: Checks;
    }

    function base(): DefaultPolicy;
}

export namespace errors {
    interface OIDCProviderErrorOptions {
        cause?: unknown;
        detail?: string;
    }

    class OIDCProviderError extends Error {
        constructor(status: number, message: string, options?: OIDCProviderErrorOptions);
        cause?: unknown;
        error: string;
        error_description?: string | undefined;
        error_detail?: string | undefined;
        expose: boolean;
        statusCode: number;
        status: number;
        allow_redirect: boolean;
    }
    class ExpiredLoginHintToken extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidBindingMessage extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidAuthorizationDetails extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidCredentialRequest extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidNonce extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidUserCode extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class MissingUserCode extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class TransactionFailed extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UnknownUserId extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class AccessDenied extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class AuthorizationPending extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class ConsentRequired extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class ExpiredToken extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InteractionRequired extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidClient extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidDpopProof extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidClientAuth extends OIDCProviderError {
        constructor(options?: string | OIDCProviderErrorOptions);
    }
    class InvalidClientMetadata extends OIDCProviderError {
        constructor(description: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidGrant extends OIDCProviderError {
        constructor(options?: string | OIDCProviderErrorOptions);
    }
    class InvalidRequest extends OIDCProviderError {
        constructor(description: string, code?: number, options?: string | OIDCProviderErrorOptions);
    }
    class SessionNotFound extends InvalidRequest {}
    class InvalidRequestObject extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidRequestUri extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidProof extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidScope extends OIDCProviderError {
        constructor(description: string, scope: string, options?: string | OIDCProviderErrorOptions);
    }
    class InsufficientScope extends OIDCProviderError {
        constructor(description: string, scope: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidSoftwareStatement extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidTarget extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UnknownCredentialConfiguration extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UnknownCredentialIdentifier extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidToken extends OIDCProviderError {
        constructor(options?: string | OIDCProviderErrorOptions);
    }
    class LoginRequired extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidRedirectUri extends OIDCProviderError {
        constructor(options?: OIDCProviderErrorOptions);
        constructor(description?: string, detail?: string);
    }
    class RegistrationNotSupported extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class RequestNotSupported extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class RequestUriNotSupported extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class SlowDown extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class TemporarilyUnavailable extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UnapprovedSoftwareStatement extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UnauthorizedClient extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UnsupportedGrantType extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UnsupportedResponseMode extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UnsupportedResponseType extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class CustomOIDCProviderError extends OIDCProviderError {
        constructor(message: string, description?: string, options?: OIDCProviderErrorOptions);
    }
    class CredentialRequestDenied extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UseDpopNonce extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UnsupportedTokenType extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UseAttestationChallenge extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UseFreshAttestation extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class InvalidClientAttestation extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
    class UnmetAuthenticationRequirements extends OIDCProviderError {
        constructor(description?: string, options?: string | OIDCProviderErrorOptions);
    }
}
// END GENERATED OIDC-PROVIDER RELATED CONTRACTS

export { Provider };
