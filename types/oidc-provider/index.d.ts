import * as crypto from "node:crypto";
import * as dns from "node:dns";
import * as http from "node:http";
import * as http2 from "node:http2";
import * as https from "node:https";

import KeyGrip = require("keygrip");
import Koa = require("koa");

export {};

export type CanBePromise<T> = Promise<T> | T;
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

export type TTLFunction<T, WithClient extends boolean = true> = WithClient extends true
    ? (ctx: KoaContextWithOIDC, token: T, client: Client) => number
    : (ctx: KoaContextWithOIDC, token: T) => number;

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

export interface ResourceServer {
    scope: string;
    audience?: string | undefined;
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

export type RotateRegistrationAccessTokenFunction = (ctx: KoaContextWithOIDC) => CanBePromise<boolean>;
export type IssueRegistrationAccessTokenFunction = (ctx: KoaContextWithOIDC) => CanBePromise<boolean>;

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

export interface RichAuthorizationRequestType {
    validate: (
        ctx: KoaContextWithOIDC,
        detail: AuthorizationDetail,
        client: Client,
    ) => CanBePromise<void>;
}

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
    types?: Readonly<Record<string, RichAuthorizationRequestType>> | undefined;
    authorizationDetailsForGrantSource?: AuthorizationDetailsForGrantSource | undefined;
    authorizationDetailsForAccessToken?: AuthorizationDetailsForAccessToken | undefined;
    authorizationDetailsForIntrospection?: AuthorizationDetailsForIntrospection | undefined;
}

export interface RichAuthorizationRequestsDisabledConfiguration extends RichAuthorizationRequestsConfigurationBase {
    enabled?: false | undefined;
}

export interface RichAuthorizationRequestsInactiveConfiguration extends RichAuthorizationRequestsConfigurationBase {
    enabled: boolean;
    types?: Readonly<Record<string, never>> | undefined;
}

export interface RichAuthorizationRequestsActiveConfiguration extends RichAuthorizationRequestsConfigurationBase {
    enabled: boolean;
    types: Readonly<Record<string, RichAuthorizationRequestType>>;
    authorizationDetailsForGrantSource: AuthorizationDetailsForGrantSource;
    authorizationDetailsForAccessToken: AuthorizationDetailsForAccessToken;
}

export type RichAuthorizationRequestsConfiguration =
    | RichAuthorizationRequestsDisabledConfiguration
    | RichAuthorizationRequestsInactiveConfiguration
    | RichAuthorizationRequestsActiveConfiguration;

export interface FapiDisabledConfiguration {
    enabled?: false | undefined;
    profile?:
        | FapiProfile
        | ((ctx: KoaContextWithOIDC, client: Client) => FapiProfile | undefined)
        | undefined;
}

export interface FapiEnabledConfiguration {
    enabled: boolean;
    profile: FapiProfile | ((ctx: KoaContextWithOIDC, client: Client) => FapiProfile | undefined);
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
    deliveryModes?: readonly CIBADeliveryMode[] | ReadonlySet<CIBADeliveryMode> | undefined;
    triggerAuthenticationDevice?: CIBATriggerAuthenticationDevice | undefined;
    validateBindingMessage?:
        | ((ctx: KoaContextWithOIDC, bindingMessage?: string) => CanBePromise<void>)
        | undefined;
    validateRequestContext?: CIBAValidateRequestContext | undefined;
    processLoginHintToken?:
        | ((ctx: KoaContextWithOIDC, loginHintToken?: string) => CanBePromise<string | undefined>)
        | undefined;
    processLoginHint?:
        | ((ctx: KoaContextWithOIDC, loginHint?: string) => CanBePromise<string | undefined>)
        | undefined;
    verifyUserCode?: CIBAVerifyUserCode | undefined;
}

export interface CIBADisabledConfiguration extends CIBAConfigurationBase {
    enabled?: false | undefined;
}

export interface CIBAEnabledConfiguration extends CIBAConfigurationBase {
    enabled: boolean;
    triggerAuthenticationDevice: CIBATriggerAuthenticationDevice;
    validateRequestContext: CIBAValidateRequestContext;
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
    certificateBoundAccessTokens?: boolean | undefined;
    selfSignedTlsClientAuth?: boolean | undefined;
    tlsClientAuth?: boolean | undefined;
    getCertificate?: MTLSGetCertificate | undefined;
    certificateAuthorized?: MTLSCertificateAuthorized | undefined;
    certificateSubjectMatches?: MTLSCertificateSubjectMatches | undefined;
}

export interface MTLSDisabledConfiguration extends MTLSConfigurationBase {
    enabled?: false | undefined;
}

export interface MTLSEnabledWithoutCertificateConfiguration extends MTLSConfigurationBase {
    enabled: boolean;
    certificateBoundAccessTokens?: false | undefined;
    selfSignedTlsClientAuth?: false | undefined;
    tlsClientAuth?: false | undefined;
}

export type MTLSEnabledCertificateConfiguration =
    & MTLSConfigurationBase
    & {
        enabled: boolean;
        tlsClientAuth?: false | undefined;
        getCertificate: MTLSGetCertificate;
    }
    & (
        | { certificateBoundAccessTokens: true }
        | { selfSignedTlsClientAuth: true }
    );

export interface MTLSEnabledClientAuthenticationConfiguration extends MTLSConfigurationBase {
    enabled: boolean;
    tlsClientAuth: true;
    getCertificate: MTLSGetCertificate;
    certificateAuthorized: MTLSCertificateAuthorized;
    certificateSubjectMatches: MTLSCertificateSubjectMatches;
}

export type MTLSEnabledDynamicCertificateFlagsConfiguration =
    & MTLSConfigurationBase
    & {
        enabled: boolean;
        getCertificate: MTLSGetCertificate;
        tlsClientAuth?: false | undefined;
    }
    & (
        | { certificateBoundAccessTokens: boolean }
        | { selfSignedTlsClientAuth: boolean }
    );

export interface MTLSEnabledDynamicTlsClientAuthConfiguration extends MTLSConfigurationBase {
    enabled: boolean;
    tlsClientAuth: boolean;
    getCertificate: MTLSGetCertificate;
    certificateAuthorized: MTLSCertificateAuthorized;
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
    additionalSecuritySignal?: false | "optional" | "required" | undefined;
    challengeSecret?: Buffer | undefined;
    getAttestationSignaturePublicKey?: AttestationSignaturePublicKey | undefined;
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
    challengeSecret: Buffer;
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
    nonceSecret?: Buffer | undefined;
    preAuthorizedCodeGrant?: boolean | undefined;
    metadata?: OpenID4VCIMetadata | undefined;
    credentialConfigurationsSupported?:
        | Readonly<Record<string, OpenID4VCICredentialConfiguration>>
        | undefined;
    credentialEndpointExpectedAudience?: ((ctx: KoaContextWithOIDC) => CanBePromise<string>) | undefined;
    credentialConfigurationPolicy?:
        | ((ctx: KoaContextWithOIDC, details: OpenID4VCICredentialContext) => CanBePromise<boolean>)
        | undefined;
    issueCredential?: OpenID4VCIIssueCredential | undefined;
    getKeyAttestationSignaturePublicKey?: OpenID4VCIKeyAttestationSignaturePublicKey | undefined;
}

export interface OpenID4VCIDisabledConfiguration extends OpenID4VCIConfigurationBase {
    enabled?: false | undefined;
}

export interface OpenID4VCIEnabledConfiguration extends OpenID4VCIConfigurationBase {
    enabled: boolean;
    nonceSecret: Buffer;
    credentialConfigurationsSupported: Readonly<Record<string, OpenID4VCICredentialConfiguration>>;
    issueCredential: OpenID4VCIIssueCredential;
}

export type OpenID4VCIConfiguration = OpenID4VCIDisabledConfiguration | OpenID4VCIEnabledConfiguration;

interface IntrospectionFeatureBase {
    enabled?: boolean | undefined;
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
    authorizationDetailsForIntrospection: AuthorizationDetailsForIntrospection;
};

type RichAuthorizationRequestsEnabledByOpenID4VCI = RichAuthorizationRequestsConfigurationBase & {
    enabled: boolean;
    authorizationDetailsForGrantSource: AuthorizationDetailsForGrantSource;
    authorizationDetailsForAccessToken: AuthorizationDetailsForAccessToken;
};

type RichAuthorizationRequestsEnabledByOpenID4VCIWithIntrospection = RichAuthorizationRequestsEnabledByOpenID4VCI & {
    authorizationDetailsForIntrospection: AuthorizationDetailsForIntrospection;
};

type ConditionalRichAuthorizationRequestFeatures =
    | {
        openid4vci: OpenID4VCIEnabledConfiguration;
        introspection: IntrospectionPossiblyEnabledFeature;
        richAuthorizationRequests?:
            | RichAuthorizationRequestsDisabledConfiguration
            | RichAuthorizationRequestsEnabledByOpenID4VCIWithIntrospection
            | undefined;
    }
    | {
        openid4vci: OpenID4VCIEnabledConfiguration;
        introspection?: IntrospectionDisabledFeature | undefined;
        richAuthorizationRequests?:
            | RichAuthorizationRequestsDisabledConfiguration
            | RichAuthorizationRequestsEnabledByOpenID4VCI
            | undefined;
    }
    | {
        openid4vci?: OpenID4VCIDisabledConfiguration | undefined;
        introspection: IntrospectionPossiblyEnabledFeature;
        richAuthorizationRequests?:
            | RichAuthorizationRequestsDisabledConfiguration
            | RichAuthorizationRequestsInactiveConfiguration
            | RichAuthorizationRequestsActiveWithIntrospection
            | undefined;
    }
    | {
        openid4vci?: OpenID4VCIDisabledConfiguration | undefined;
        introspection?: IntrospectionDisabledFeature | undefined;
        richAuthorizationRequests?: RichAuthorizationRequestsConfiguration | undefined;
    };

export interface Configuration {
    acrValues?: readonly string[] | ReadonlySet<string> | undefined;

    adapter?: AdapterConstructor | AdapterFactory | undefined;

    claims?:
        | {
            [key: string]: null | readonly string[] | Readonly<Record<string, null>>;
        }
        | undefined;

    clientBasedCORS?: ((ctx: KoaContextWithOIDC, origin: string, client: Client) => boolean) | undefined;

    clients?: readonly ClientMetadata[] | undefined;

    formats?:
        | {
            bitsOfOpaqueRandomness?: number | ((ctx: KoaContextWithOIDC, model: BaseModel) => number) | undefined;
            customizers?:
                | {
                    jwt?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            token: AccessToken | ClientCredentials,
                            parts: JWTStructured,
                        ) => CanBePromise<void>)
                        | undefined;
                }
                | undefined;
        }
        | undefined;

    clientDefaults?: AllClientMetadata | undefined;

    clockTolerance?: number | undefined;

    conformIdTokenClaims?: boolean | undefined;

    cookies?:
        | {
            names?:
                | {
                    session?: string | undefined;
                    interaction?: string | undefined;
                    resume?: string | undefined;
                }
                | undefined;
            long?: CookiesSetOptions | undefined;
            short?: CookiesSetOptions | undefined;
            keys?: ReadonlyArray<string | Buffer> | undefined | KeyGrip;
        }
        | undefined;

    discovery?: UnknownObject | undefined;

    enableHttpPostMethods?: boolean | undefined;

    extraParams?:
        | readonly string[]
        | ReadonlySet<string>
        | {
            [param: string]:
                | null
                | ((ctx: KoaContextWithOIDC, value: string | undefined, client: Client) => CanBePromise<void>);
        }
        | undefined;

    assertJwtClientAuthClaimsAndHeader?: (
        ctx: KoaContextWithOIDC,
        claims: Record<string, JsonValue>,
        header: Record<string, JsonValue>,
        client: Client,
    ) => CanBePromise<void>;

    features?:
        | {
            devInteractions?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            claimsParameter?:
                | {
                    enabled?: boolean | undefined;
                    assertClaimsParameter?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            claims: ClaimsParameter,
                            client: Client,
                        ) => CanBePromise<void>)
                        | undefined;
                }
                | undefined;

            clientIdMetadataDocument?:
                | {
                    enabled?: boolean | undefined;
                    ack?: string | undefined;
                    allowFetch?:
                        | ((ctx: KoaContextWithOIDC, clientId: string) => CanBePromise<boolean>)
                        | undefined;
                    allowClient?: ((ctx: KoaContextWithOIDC, client: Client) => CanBePromise<boolean>) | undefined;
                    cacheDuration?:
                        | {
                            min?: number | undefined;
                            max?: number | undefined;
                        }
                        | undefined;
                }
                | undefined;

            clientCredentials?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            revocation?:
                | {
                    enabled?: boolean | undefined;
                    allowedPolicy?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            client: Client,
                            token: AccessToken | ClientCredentials | RefreshToken,
                        ) => CanBePromise<boolean>)
                        | undefined;
                }
                | undefined;

            userinfo?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            jwtUserinfo?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            encryption?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            registration?:
                | {
                    enabled?: boolean | undefined;
                    initialAccessToken?: boolean | string | undefined;
                    policies?:
                        | {
                            [key: string]: (
                                ctx: KoaContextWithOIDC,
                                metadata: ClientMetadata,
                            ) => CanBePromise<undefined | void>; // eslint-disable-line @typescript-eslint/no-invalid-void-type
                        }
                        | undefined;
                    idFactory?: ((ctx: KoaContextWithOIDC) => string) | undefined;
                    secretFactory?: ((ctx: KoaContextWithOIDC) => CanBePromise<string>) | undefined;
                    issueRegistrationAccessToken?: IssueRegistrationAccessTokenFunction | boolean | undefined;
                }
                | undefined;

            registrationManagement?:
                | {
                    enabled?: boolean | undefined;
                    rotateRegistrationAccessToken?: RotateRegistrationAccessTokenFunction | boolean | undefined;
                }
                | undefined;

            deviceFlow?:
                | {
                    enabled?: boolean | undefined;
                    charset?: "base-20" | "digits" | undefined;
                    mask?: string | undefined;
                    deviceInfo?: ((ctx: KoaContextWithOIDC) => UnknownObject) | undefined;
                    userCodeInputSource?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            form: string,
                            out?: ErrorOut,
                            err?: errors.OIDCProviderError | Error,
                        ) => CanBePromise<undefined | void>) // eslint-disable-line @typescript-eslint/no-invalid-void-type
                        | undefined;
                    userCodeConfirmSource?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            form: string,
                            client: Client,
                            deviceInfo: UnknownObject,
                            userCode: string,
                        ) => CanBePromise<undefined | void>) // eslint-disable-line @typescript-eslint/no-invalid-void-type
                        | undefined;
                    successSource?: ((ctx: KoaContextWithOIDC) => CanBePromise<undefined | void>) | undefined; // eslint-disable-line @typescript-eslint/no-invalid-void-type
                }
                | undefined;

            requestObjects?:
                | {
                    enabled?: boolean | undefined;
                    requireSignedRequestObject?: boolean | undefined;
                    assertJwtClaimsAndHeader?: (
                        ctx: KoaContextWithOIDC,
                        claims: Record<string, JsonValue>,
                        header: Record<string, JsonValue>,
                        client: Client,
                    ) => CanBePromise<void>;
                }
                | undefined;

            dPoP?:
                | {
                    enabled?: boolean | undefined;
                    nonceSecret?: Buffer | undefined;
                    requireNonce?: (ctx: KoaContextWithOIDC) => boolean;
                    allowReplay?: boolean;
                }
                | undefined;

            backchannelLogout?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            fapi?: FapiConfiguration | undefined;

            ciba?: CIBAConfiguration | undefined;

            webMessageResponseMode?:
                | {
                    enabled?: boolean | undefined;
                    ack?: string | undefined;
                }
                | undefined;

            jwtIntrospection?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            jwtResponseModes?:
                | {
                    enabled?: boolean | undefined;
                }
                | undefined;

            pushedAuthorizationRequests?:
                | {
                    requirePushedAuthorizationRequests?: boolean | undefined;
                    allowUnregisteredRedirectUris?: boolean | undefined;
                    enabled?: boolean | undefined;
                }
                | undefined;

            rpInitiatedLogout?:
                | {
                    enabled?: boolean | undefined;
                    postLogoutSuccessSource?:
                        | ((ctx: KoaContextWithOIDC) => CanBePromise<undefined | void>) // eslint-disable-line @typescript-eslint/no-invalid-void-type
                        | undefined;
                    logoutSource?:
                        | ((ctx: KoaContextWithOIDC, form: string) => CanBePromise<undefined | void>) // eslint-disable-line @typescript-eslint/no-invalid-void-type
                        | undefined;
                }
                | undefined;

            mTLS?: MTLSConfiguration | undefined;

            resourceIndicators?:
                | {
                    enabled?: boolean | undefined;
                    getResourceServerInfo?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            resourceIndicator: string,
                            client: Client,
                        ) => CanBePromise<ResourceServer>)
                        | undefined;
                    defaultResource?:
                        | ((
                            ctx: KoaContextWithOIDC,
                            client: Client,
                            oneOf?: readonly string[] | undefined,
                        ) => CanBePromise<string | readonly string[] | undefined>)
                        | undefined;
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

            rpMetadataChoices?: {
                enabled?: boolean | undefined;
            } | undefined;

            externalSigningSupport?: {
                enabled?: boolean | undefined;
                ack?: string | undefined;
            } | undefined;

            attestClientAuth?: AttestClientAuthConfiguration | undefined;
        } & ConditionalRichAuthorizationRequestFeatures
        | undefined;

    extraTokenClaims?:
        | ((ctx: KoaContextWithOIDC, token: AccessToken | ClientCredentials) => CanBePromise<UnknownObject | undefined>)
        | undefined;

    fetch?: typeof fetch;

    fetchResponseBodyLimits?:
        | {
            "client_id metadata document"?: number | undefined;
            jwks_uri?: number | undefined;
            sector_identifier_uri?: number | undefined;
            [purpose: string]: number | undefined;
        }
        | undefined;

    expiresWithSession?:
        | ((ctx: KoaContextWithOIDC, token: AccessToken | AuthorizationCode | DeviceCode) => CanBePromise<boolean>)
        | undefined;

    issueRefreshToken?:
        | ((
            ctx: KoaContextWithOIDC,
            client: Client,
            code: AuthorizationCode | DeviceCode | BackchannelAuthenticationRequest | PreAuthorizedCode,
        ) => CanBePromise<boolean>)
        | undefined;

    jwks?: JWKS | undefined;

    responseTypes?: readonly ResponseType[] | undefined;

    revokeGrantPolicy?: ((ctx: KoaContextWithOIDC) => CanBePromise<boolean>) | undefined;

    pkce?:
        | {
            required?: ((ctx: KoaContextWithOIDC, client: Client) => boolean) | undefined;
        }
        | undefined;

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

    scopes?: readonly string[] | ReadonlySet<string> | undefined;

    subjectTypes?: readonly SubjectTypes[] | ReadonlySet<SubjectTypes> | undefined;

    pairwiseIdentifier?:
        | ((ctx: KoaContextWithOIDC, accountId: string, client: Client) => CanBePromise<string>)
        | undefined;

    clientAuthMethods?: readonly ClientAuthMethod[] | ReadonlySet<ClientAuthMethod> | undefined;

    ttl?:
        | {
            AccessToken?: TTLFunction<AccessToken> | number | undefined;
            AuthorizationCode?: TTLFunction<AuthorizationCode> | number | undefined;
            ClientCredentials?: TTLFunction<ClientCredentials> | number | undefined;
            DeviceCode?: TTLFunction<DeviceCode> | number | undefined;
            BackchannelAuthenticationRequest?: TTLFunction<BackchannelAuthenticationRequest> | number | undefined;
            PreAuthorizedCode?: TTLFunction<PreAuthorizedCode, false> | number | undefined;
            IdToken?: TTLFunction<IdToken> | number | undefined;
            RefreshToken?: TTLFunction<RefreshToken> | number | undefined;
            Interaction?: TTLFunction<Interaction, false> | number | undefined;
            Session?: TTLFunction<Session, false> | number | undefined;
            Grant?: TTLFunction<Grant, false> | number | undefined;

            [key: string]: unknown;
        }
        | undefined;

    loadExistingGrant?: ((ctx: KoaContextWithOIDC) => CanBePromise<Grant | undefined>) | undefined;

    extraClientMetadata?:
        | {
            properties?: readonly string[] | undefined;

            validator?:
                | ((
                    ctx: KoaContextWithOIDC | undefined,
                    key: string,
                    value: unknown,
                    metadata: ClientMetadata,
                    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
                ) => void | undefined)
                | undefined;
        }
        | undefined;

    rotateRefreshToken?: ((ctx: KoaContextWithOIDC) => CanBePromise<boolean>) | boolean | undefined;

    renderError?:
        | ((
            ctx: KoaContextWithOIDC,
            out: ErrorOut,
            error: errors.OIDCProviderError | Error,
        ) => CanBePromise<undefined | void>) // eslint-disable-line @typescript-eslint/no-invalid-void-type
        | undefined;

    allowOmittingSingleRegisteredRedirectUri?: boolean | undefined;

    acceptQueryParamAccessTokens?: boolean | undefined;

    interactions?:
        | {
            policy?: readonly interactionPolicy.Prompt[] | undefined;
            url?: ((ctx: KoaContextWithOIDC, interaction: Interaction) => CanBePromise<string>) | undefined;
        }
        | undefined;

    findAccount?: FindAccount | undefined;

    sectorIdentifierUriValidate?: ((client: Client) => boolean) | undefined;

    enabledJWA?:
        | {
            authorizationEncryptionAlgValues?: readonly EncryptionAlgValues[] | undefined;
            authorizationEncryptionEncValues?: readonly EncryptionEncValues[] | undefined;
            authorizationSigningAlgValues?: readonly SigningAlgorithm[] | undefined;
            dPoPSigningAlgValues?: readonly AsymmetricSigningAlgorithm[] | undefined;
            attestSigningAlgValues?: readonly AsymmetricSigningAlgorithm[] | undefined;
            idTokenEncryptionAlgValues?: readonly EncryptionAlgValues[] | undefined;
            idTokenEncryptionEncValues?: readonly EncryptionEncValues[] | undefined;
            idTokenSigningAlgValues?: readonly SigningAlgorithmWithNone[] | undefined;
            introspectionEncryptionAlgValues?: readonly EncryptionAlgValues[] | undefined;
            introspectionEncryptionEncValues?: readonly EncryptionEncValues[] | undefined;
            introspectionSigningAlgValues?: readonly SigningAlgorithmWithNone[] | undefined;
            requestObjectEncryptionAlgValues?: readonly EncryptionAlgValues[] | undefined;
            requestObjectEncryptionEncValues?: readonly EncryptionEncValues[] | undefined;
            requestObjectSigningAlgValues?: readonly SigningAlgorithmWithNone[] | undefined;
            clientAuthSigningAlgValues?: readonly SigningAlgorithm[] | undefined;
            userinfoEncryptionAlgValues?: readonly EncryptionAlgValues[] | undefined;
            userinfoEncryptionEncValues?: readonly EncryptionEncValues[] | undefined;
            userinfoSigningAlgValues?: readonly SigningAlgorithmWithNone[] | undefined;
        }
        | undefined;
}

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

interface ProviderAdditionalEventMap {
    "backchannel_authentication.error": (
        ctx: KoaContextWithOIDC,
        err: errors.OIDCProviderError,
    ) => void;
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
    "openid_credential_issuer.error": (
        ctx: KoaContextWithOIDC,
        err: errors.OIDCProviderError,
    ) => void;
    "pre_authorized_code.consumed": (code: PreAuthorizedCode) => void;
    "pre_authorized_code.destroyed": (code: PreAuthorizedCode) => void;
    "pre_authorized_code.saved": (code: PreAuthorizedCode) => void;
}

export default class Provider extends Koa {
    constructor(issuer: string, configuration?: Configuration);

    readonly issuer: string;

    /**
     * @deprecated
     */
    readonly app: Koa;

    static get ctx(): KoaContextWithOIDC | undefined;

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
    addListener(event: "authorization_code.saved", listener: (authorizationCode: AuthorizationCode) => void): this;
    addListener(event: "authorization_code.destroyed", listener: (authorizationCode: AuthorizationCode) => void): this;
    addListener(event: "authorization_code.consumed", listener: (authorizationCode: AuthorizationCode) => void): this;
    addListener(event: "device_code.saved", listener: (deviceCode: DeviceCode) => void): this;
    addListener(event: "device_code.destroyed", listener: (deviceCode: DeviceCode) => void): this;
    addListener(event: "device_code.consumed", listener: (deviceCode: DeviceCode) => void): this;
    addListener(
        event: "backchannel_authentication_request.saved",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    addListener(
        event: "backchannel_authentication_request.destroyed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    addListener(
        event: "backchannel_authentication_request.consumed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    addListener(event: "client_credentials.destroyed", listener: (clientCredentials: ClientCredentials) => void): this;
    addListener(event: "client_credentials.saved", listener: (clientCredentials: ClientCredentials) => void): this;
    addListener(event: "client_credentials.issued", listener: (clientCredentials: ClientCredentials) => void): this;
    addListener(event: "interaction.destroyed", listener: (interaction: Interaction) => void): this;
    addListener(event: "interaction.saved", listener: (interaction: Interaction) => void): this;
    addListener(event: "session.destroyed", listener: (session: Session) => void): this;
    addListener(event: "session.saved", listener: (session: Session) => void): this;
    addListener(event: "grant.destroyed", listener: (grant: Grant) => void): this;
    addListener(event: "grant.saved", listener: (grant: Grant) => void): this;
    addListener(event: "replay_detection.destroyed", listener: (replayDetection: ReplayDetection) => void): this;
    addListener(event: "replay_detection.saved", listener: (replayDetection: ReplayDetection) => void): this;
    addListener(
        event: "pushed_authorization_request.destroyed",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    addListener(
        event: "pushed_authorization_request.saved",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    addListener(
        event: "registration_access_token.destroyed",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    addListener(
        event: "registration_access_token.saved",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    addListener(event: "refresh_token.destroyed", listener: (refreshToken: RefreshToken) => void): this;
    addListener(event: "refresh_token.saved", listener: (refreshToken: RefreshToken) => void): this;
    addListener(event: "refresh_token.consumed", listener: (refreshToken: RefreshToken) => void): this;
    addListener(event: "authorization.accepted", listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(
        event: "authorization.success",
        listener: (ctx: KoaContextWithOIDC, response?: UnknownObject) => void,
    ): this;
    addListener(
        event: "authorization.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(event: "end_session.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(
        event: "end_session.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(event: "grant.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(event: "interaction.ended", listener: (ctx: KoaContextWithOIDC) => void): this;
    addListener(
        event: "interaction.started",
        listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void,
    ): this;
    addListener(event: "grant.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    addListener(event: "grant.revoked", listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    addListener(
        event: "backchannel.success",
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    addListener(
        event: "backchannel.error",
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    addListener(
        event: "pushed_authorization_request.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    addListener(
        event: "pushed_authorization_request.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "registration_update.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    addListener(
        event: "registration_update.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "registration_delete.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    addListener(
        event: "registration_delete.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "registration_create.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    addListener(
        event: "registration_create.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "introspection.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "registration_read.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(event: "jwks.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    addListener(
        event: "discovery.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "userinfo.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener(
        event: "revocation.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    addListener<Event extends keyof ProviderAdditionalEventMap>(
        event: Event,
        listener: ProviderAdditionalEventMap[Event],
    ): this;
    addListener(event: "server_error", listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;

    on(event: "access_token.destroyed", listener: (accessToken: AccessToken) => void): this;
    on(event: "access_token.saved", listener: (accessToken: AccessToken) => void): this;
    on(event: "access_token.issued", listener: (accessToken: AccessToken) => void): this;
    on(event: "authorization_code.saved", listener: (authorizationCode: AuthorizationCode) => void): this;
    on(event: "authorization_code.destroyed", listener: (authorizationCode: AuthorizationCode) => void): this;
    on(event: "authorization_code.consumed", listener: (authorizationCode: AuthorizationCode) => void): this;
    on(event: "device_code.saved", listener: (deviceCode: DeviceCode) => void): this;
    on(event: "device_code.destroyed", listener: (deviceCode: DeviceCode) => void): this;
    on(event: "device_code.consumed", listener: (deviceCode: DeviceCode) => void): this;
    on(
        event: "backchannel_authentication_request.saved",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    on(
        event: "backchannel_authentication_request.destroyed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    on(
        event: "backchannel_authentication_request.consumed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    on(event: "client_credentials.destroyed", listener: (clientCredentials: ClientCredentials) => void): this;
    on(event: "client_credentials.saved", listener: (clientCredentials: ClientCredentials) => void): this;
    on(event: "client_credentials.issued", listener: (clientCredentials: ClientCredentials) => void): this;
    on(event: "interaction.destroyed", listener: (interaction: Interaction) => void): this;
    on(event: "interaction.saved", listener: (interaction: Interaction) => void): this;
    on(event: "session.destroyed", listener: (session: Session) => void): this;
    on(event: "session.saved", listener: (session: Session) => void): this;
    on(event: "grant.destroyed", listener: (grant: Grant) => void): this;
    on(event: "grant.saved", listener: (grant: Grant) => void): this;
    on(event: "replay_detection.destroyed", listener: (replayDetection: ReplayDetection) => void): this;
    on(event: "replay_detection.saved", listener: (replayDetection: ReplayDetection) => void): this;
    on(
        event: "pushed_authorization_request.destroyed",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    on(
        event: "pushed_authorization_request.saved",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    on(
        event: "registration_access_token.destroyed",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    on(
        event: "registration_access_token.saved",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    on(event: "refresh_token.destroyed", listener: (refreshToken: RefreshToken) => void): this;
    on(event: "refresh_token.saved", listener: (refreshToken: RefreshToken) => void): this;
    on(event: "refresh_token.consumed", listener: (refreshToken: RefreshToken) => void): this;
    on(event: "authorization.accepted", listener: (ctx: KoaContextWithOIDC) => void): this;
    on(
        event: "authorization.success",
        listener: (ctx: KoaContextWithOIDC, response?: UnknownObject) => void,
    ): this;
    on(event: "authorization.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "end_session.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    on(event: "end_session.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "grant.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    on(event: "interaction.ended", listener: (ctx: KoaContextWithOIDC) => void): this;
    on(event: "interaction.started", listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void): this;
    on(event: "grant.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "grant.revoked", listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    on(
        event: "backchannel.success",
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    on(
        event: "backchannel.error",
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    on(
        event: "pushed_authorization_request.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    on(
        event: "pushed_authorization_request.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: "registration_update.success", listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    on(
        event: "registration_update.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: "registration_delete.success", listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    on(
        event: "registration_delete.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: "registration_create.success", listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    on(
        event: "registration_create.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: "introspection.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(
        event: "registration_read.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    on(event: "jwks.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "discovery.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "userinfo.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on(event: "revocation.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    on<Event extends keyof ProviderAdditionalEventMap>(
        event: Event,
        listener: ProviderAdditionalEventMap[Event],
    ): this;
    on(event: "server_error", listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;

    once(event: "access_token.destroyed", listener: (accessToken: AccessToken) => void): this;
    once(event: "access_token.saved", listener: (accessToken: AccessToken) => void): this;
    once(event: "access_token.issued", listener: (accessToken: AccessToken) => void): this;
    once(event: "authorization_code.saved", listener: (authorizationCode: AuthorizationCode) => void): this;
    once(event: "authorization_code.destroyed", listener: (authorizationCode: AuthorizationCode) => void): this;
    once(event: "authorization_code.consumed", listener: (authorizationCode: AuthorizationCode) => void): this;
    once(event: "device_code.saved", listener: (deviceCode: DeviceCode) => void): this;
    once(event: "device_code.destroyed", listener: (deviceCode: DeviceCode) => void): this;
    once(event: "device_code.consumed", listener: (deviceCode: DeviceCode) => void): this;
    once(
        event: "backchannel_authentication_request.saved",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    once(
        event: "backchannel_authentication_request.destroyed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    once(
        event: "backchannel_authentication_request.consumed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    once(event: "client_credentials.destroyed", listener: (clientCredentials: ClientCredentials) => void): this;
    once(event: "client_credentials.saved", listener: (clientCredentials: ClientCredentials) => void): this;
    once(event: "client_credentials.issued", listener: (clientCredentials: ClientCredentials) => void): this;
    once(event: "interaction.destroyed", listener: (interaction: Interaction) => void): this;
    once(event: "interaction.saved", listener: (interaction: Interaction) => void): this;
    once(event: "session.destroyed", listener: (session: Session) => void): this;
    once(event: "session.saved", listener: (session: Session) => void): this;
    once(event: "grant.destroyed", listener: (grant: Grant) => void): this;
    once(event: "grant.saved", listener: (grant: Grant) => void): this;
    once(event: "replay_detection.destroyed", listener: (replayDetection: ReplayDetection) => void): this;
    once(event: "replay_detection.saved", listener: (replayDetection: ReplayDetection) => void): this;
    once(
        event: "pushed_authorization_request.destroyed",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    once(
        event: "pushed_authorization_request.saved",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    once(
        event: "registration_access_token.destroyed",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    once(
        event: "registration_access_token.saved",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    once(event: "refresh_token.destroyed", listener: (refreshToken: RefreshToken) => void): this;
    once(event: "refresh_token.saved", listener: (refreshToken: RefreshToken) => void): this;
    once(event: "refresh_token.consumed", listener: (refreshToken: RefreshToken) => void): this;
    once(event: "authorization.accepted", listener: (ctx: KoaContextWithOIDC) => void): this;
    once(
        event: "authorization.success",
        listener: (ctx: KoaContextWithOIDC, response?: UnknownObject) => void,
    ): this;
    once(
        event: "authorization.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: "end_session.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    once(event: "end_session.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: "grant.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    once(event: "interaction.ended", listener: (ctx: KoaContextWithOIDC) => void): this;
    once(event: "interaction.started", listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void): this;
    once(event: "grant.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: "grant.revoked", listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    once(
        event: "backchannel.success",
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    once(
        event: "backchannel.error",
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    once(
        event: "pushed_authorization_request.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    once(
        event: "pushed_authorization_request.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: "registration_update.success", listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    once(
        event: "registration_update.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: "registration_delete.success", listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    once(
        event: "registration_delete.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: "registration_create.success", listener: (ctx: KoaContextWithOIDC, client: Client) => void): this;
    once(
        event: "registration_create.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(
        event: "introspection.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(
        event: "registration_read.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    once(event: "jwks.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: "discovery.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: "userinfo.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once(event: "revocation.error", listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void): this;
    once<Event extends keyof ProviderAdditionalEventMap>(
        event: Event,
        listener: ProviderAdditionalEventMap[Event],
    ): this;
    once(event: "server_error", listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;

    prependListener(event: "access_token.destroyed", listener: (accessToken: AccessToken) => void): this;
    prependListener(event: "access_token.saved", listener: (accessToken: AccessToken) => void): this;
    prependListener(event: "access_token.issued", listener: (accessToken: AccessToken) => void): this;
    prependListener(event: "authorization_code.saved", listener: (authorizationCode: AuthorizationCode) => void): this;
    prependListener(
        event: "authorization_code.destroyed",
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependListener(
        event: "authorization_code.consumed",
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependListener(event: "device_code.saved", listener: (deviceCode: DeviceCode) => void): this;
    prependListener(event: "device_code.destroyed", listener: (deviceCode: DeviceCode) => void): this;
    prependListener(event: "device_code.consumed", listener: (deviceCode: DeviceCode) => void): this;
    prependListener(
        event: "backchannel_authentication_request.saved",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    prependListener(
        event: "backchannel_authentication_request.destroyed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    prependListener(
        event: "backchannel_authentication_request.consumed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    prependListener(
        event: "client_credentials.destroyed",
        listener: (clientCredentials: ClientCredentials) => void,
    ): this;
    prependListener(event: "client_credentials.saved", listener: (clientCredentials: ClientCredentials) => void): this;
    prependListener(event: "client_credentials.issued", listener: (clientCredentials: ClientCredentials) => void): this;
    prependListener(event: "interaction.destroyed", listener: (interaction: Interaction) => void): this;
    prependListener(event: "interaction.saved", listener: (interaction: Interaction) => void): this;
    prependListener(event: "session.destroyed", listener: (session: Session) => void): this;
    prependListener(event: "session.saved", listener: (session: Session) => void): this;
    prependListener(event: "grant.destroyed", listener: (grant: Grant) => void): this;
    prependListener(event: "grant.saved", listener: (grant: Grant) => void): this;
    prependListener(event: "replay_detection.destroyed", listener: (replayDetection: ReplayDetection) => void): this;
    prependListener(event: "replay_detection.saved", listener: (replayDetection: ReplayDetection) => void): this;
    prependListener(
        event: "pushed_authorization_request.destroyed",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    prependListener(
        event: "pushed_authorization_request.saved",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    prependListener(
        event: "registration_access_token.destroyed",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    prependListener(
        event: "registration_access_token.saved",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    prependListener(event: "refresh_token.destroyed", listener: (refreshToken: RefreshToken) => void): this;
    prependListener(event: "refresh_token.saved", listener: (refreshToken: RefreshToken) => void): this;
    prependListener(event: "refresh_token.consumed", listener: (refreshToken: RefreshToken) => void): this;
    prependListener(event: "authorization.accepted", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(
        event: "authorization.success",
        listener: (ctx: KoaContextWithOIDC, response?: UnknownObject) => void,
    ): this;
    prependListener(
        event: "authorization.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(event: "end_session.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(
        event: "end_session.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(event: "grant.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(event: "interaction.ended", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependListener(
        event: "interaction.started",
        listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void,
    ): this;
    prependListener(
        event: "grant.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(event: "grant.revoked", listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    prependListener(
        event: "backchannel.success",
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    prependListener(
        event: "backchannel.error",
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    prependListener(
        event: "pushed_authorization_request.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependListener(
        event: "pushed_authorization_request.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "registration_update.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependListener(
        event: "registration_update.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "registration_delete.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependListener(
        event: "registration_delete.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "registration_create.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependListener(
        event: "registration_create.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "introspection.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "registration_read.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "jwks.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "discovery.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "userinfo.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener(
        event: "revocation.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependListener<Event extends keyof ProviderAdditionalEventMap>(
        event: Event,
        listener: ProviderAdditionalEventMap[Event],
    ): this;
    prependListener(event: "server_error", listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;

    prependOnceListener(event: "access_token.destroyed", listener: (accessToken: AccessToken) => void): this;
    prependOnceListener(event: "access_token.saved", listener: (accessToken: AccessToken) => void): this;
    prependOnceListener(event: "access_token.issued", listener: (accessToken: AccessToken) => void): this;
    prependOnceListener(
        event: "authorization_code.saved",
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependOnceListener(
        event: "authorization_code.destroyed",
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependOnceListener(
        event: "authorization_code.consumed",
        listener: (authorizationCode: AuthorizationCode) => void,
    ): this;
    prependOnceListener(event: "device_code.saved", listener: (deviceCode: DeviceCode) => void): this;
    prependOnceListener(event: "device_code.destroyed", listener: (deviceCode: DeviceCode) => void): this;
    prependOnceListener(event: "device_code.consumed", listener: (deviceCode: DeviceCode) => void): this;
    prependOnceListener(
        event: "backchannel_authentication_request.saved",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    prependOnceListener(
        event: "backchannel_authentication_request.destroyed",
        listener: (request: BackchannelAuthenticationRequest) => void,
    ): this;
    prependOnceListener(
        event: "backchannel_authentication_request.consumed",
        listener: (request: BackchannelAuthenticationRequest) => void,
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
    prependOnceListener(event: "interaction.destroyed", listener: (interaction: Interaction) => void): this;
    prependOnceListener(event: "interaction.saved", listener: (interaction: Interaction) => void): this;
    prependOnceListener(event: "session.destroyed", listener: (session: Session) => void): this;
    prependOnceListener(event: "session.saved", listener: (session: Session) => void): this;
    prependOnceListener(event: "grant.destroyed", listener: (grant: Grant) => void): this;
    prependOnceListener(event: "grant.saved", listener: (grant: Grant) => void): this;
    prependOnceListener(
        event: "replay_detection.destroyed",
        listener: (replayDetection: ReplayDetection) => void,
    ): this;
    prependOnceListener(event: "replay_detection.saved", listener: (replayDetection: ReplayDetection) => void): this;
    prependOnceListener(
        event: "pushed_authorization_request.destroyed",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    prependOnceListener(
        event: "pushed_authorization_request.saved",
        listener: (pushedAuthorizationRequest: PushedAuthorizationRequest) => void,
    ): this;
    prependOnceListener(
        event: "registration_access_token.destroyed",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    prependOnceListener(
        event: "registration_access_token.saved",
        listener: (registrationAccessToken: RegistrationAccessToken) => void,
    ): this;
    prependOnceListener(event: "refresh_token.destroyed", listener: (refreshToken: RefreshToken) => void): this;
    prependOnceListener(event: "refresh_token.saved", listener: (refreshToken: RefreshToken) => void): this;
    prependOnceListener(event: "refresh_token.consumed", listener: (refreshToken: RefreshToken) => void): this;
    prependOnceListener(event: "authorization.accepted", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(
        event: "authorization.success",
        listener: (ctx: KoaContextWithOIDC, response?: UnknownObject) => void,
    ): this;
    prependOnceListener(
        event: "authorization.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(event: "end_session.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(
        event: "end_session.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(event: "grant.success", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(event: "interaction.ended", listener: (ctx: KoaContextWithOIDC) => void): this;
    prependOnceListener(
        event: "interaction.started",
        listener: (ctx: KoaContextWithOIDC, interaction: PromptDetail) => void,
    ): this;
    prependOnceListener(
        event: "grant.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(event: "grant.revoked", listener: (ctx: KoaContextWithOIDC, grantId: string) => void): this;
    prependOnceListener(
        event: "backchannel.success",
        listener: (ctx: KoaContextWithOIDC, client: Client, accountId: string, sid: string) => void,
    ): this;
    prependOnceListener(
        event: "backchannel.error",
        listener: (ctx: KoaContextWithOIDC, err: Error, client: Client, accountId: string, sid: string) => void,
    ): this;
    prependOnceListener(
        event: "pushed_authorization_request.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependOnceListener(
        event: "pushed_authorization_request.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "registration_update.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependOnceListener(
        event: "registration_update.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "registration_delete.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependOnceListener(
        event: "registration_delete.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "registration_create.success",
        listener: (ctx: KoaContextWithOIDC, client: Client) => void,
    ): this;
    prependOnceListener(
        event: "registration_create.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "introspection.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "registration_read.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "jwks.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "discovery.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "userinfo.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener(
        event: "revocation.error",
        listener: (ctx: KoaContextWithOIDC, err: errors.OIDCProviderError) => void,
    ): this;
    prependOnceListener<Event extends keyof ProviderAdditionalEventMap>(
        event: Event,
        listener: ProviderAdditionalEventMap[Event],
    ): this;
    prependOnceListener(event: "server_error", listener: (ctx: KoaContextWithOIDC, err: Error) => void): this;
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

export { Provider };
