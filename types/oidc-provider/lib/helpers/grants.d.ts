import type * as crypto from "node:crypto";

import type Provider from "../../index.js";
import type {
    AccessToken,
    Account,
    AuthorizationDetail,
    ClaimsParameter,
    ClientCredentials,
    errors,
    Grant,
    RefreshToken,
    ResourceServerInstance,
    TokenEndpointGrantContext,
} from "../../index.js";

/**
 * This module is intended for custom grant implementations and is not covered
 * by semantic versioning conventions. Its exports, signatures, and behavior
 * may change in any release. Making this subpath an explicit package export
 * would only preserve access; it would not change this compatibility policy.
 */

/** @experimental Not covered by semantic versioning conventions. */
export interface ClientBoundGrantSource {
    clientId?: string | undefined;
}

/** @experimental Not covered by semantic versioning conventions. */
export interface ConsumableGrantSource {
    consumed?: unknown;
    grantId?: string | undefined;
    consume(): Promise<void>;
}

/** @experimental Not covered by semantic versioning conventions. */
export interface GrantSourceModel<Source extends ClientBoundGrantSource> {
    find(value: string, options: { ignoreExpiration: true }): Promise<Source | undefined>;
}

/** @experimental Not covered by semantic versioning conventions. */
export interface ResourceGrantSource {
    readonly scopes: Set<string>;
    claims?: ClaimsParameter | undefined;
    resource?: string | string[] | undefined;
}

/** @experimental Not covered by semantic versioning conventions. */
export interface AuthorizationDetailsSource {
    rar?: readonly AuthorizationDetail[] | undefined;
}

/** @experimental Not covered by semantic versioning conventions. */
export interface DPoPValidationResult {
    thumbprint: string;
    jti: string;
    iat: number;
}

/** @experimental Not covered by semantic versioning conventions. */
export type OIDCProviderErrorConstructor = new(...args: any[]) => errors.OIDCProviderError;

/** @experimental Not covered by semantic versioning conventions. */
export type ReservedTokenResponseParameter =
    | "access_token"
    | "authorization_details"
    | "expires_in"
    | "id_token"
    | "issued_token_type"
    | "refresh_token"
    | "scope"
    | "token_type";

/** @experimental Not covered by semantic versioning conventions. */
export interface TokenResponseInput<Parameters extends object = Record<never, never>> {
    accessToken: string;
    tokenType: string;
    authorizationDetails?: readonly AuthorizationDetail[] | undefined;
    expiresIn?: number | undefined;
    idToken?: string | undefined;
    issuedTokenType?: string | undefined;
    parameters?:
        | (Parameters & Partial<Record<ReservedTokenResponseParameter, never>>)
        | undefined;
    refreshToken?: string | undefined;
    scope?: string | undefined;
}

/** @experimental Not covered by semantic versioning conventions. */
export interface TokenResponse {
    access_token: string;
    token_type: string;
    authorization_details?: readonly AuthorizationDetail[] | undefined;
    expires_in?: number | undefined;
    id_token?: string | undefined;
    issued_token_type?: string | undefined;
    refresh_token?: string | undefined;
    scope?: string | undefined;
}

/** @experimental Not covered by semantic versioning conventions. */
export function findGrantSource<Source extends ClientBoundGrantSource>(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    Model: GrantSourceModel<Source>,
    value: string,
    label: string,
): Promise<Source>;

/** @experimental Not covered by semantic versioning conventions. */
export function consumeGrantSource<Source extends ConsumableGrantSource>(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    source: Source,
    label: string,
): Promise<void>;

/** @experimental Not covered by semantic versioning conventions. */
export function validateGrant(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    grantId: string,
): Promise<Grant>;

/** @experimental Not covered by semantic versioning conventions. */
export function findAccount(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    accountId: string,
    source?: object | undefined,
): Promise<Account | undefined>;

/** @experimental Not covered by semantic versioning conventions. */
export function validateDpop(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    accessToken?: string | undefined,
): Promise<DPoPValidationResult | undefined>;

/**
 * @experimental Not covered by semantic versioning conventions.
 * @param ErrorClass Defaults to errors.InvalidGrant.
 */
export function checkMtlsCert(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    ErrorClass?: OIDCProviderErrorConstructor,
): string | crypto.X509Certificate | undefined;

/**
 * @experimental Not covered by semantic versioning conventions.
 * @param ErrorClass Defaults to errors.InvalidGrant.
 */
export function checkDpopRequired(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    dPoP: DPoPValidationResult | undefined,
    ErrorClass?: OIDCProviderErrorConstructor,
): void;

/**
 * @experimental Not covered by semantic versioning conventions.
 * @param ErrorClass Defaults to errors.InvalidGrant.
 */
export function checkDpopReplay(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    dPoP: DPoPValidationResult | undefined,
    clientId: string,
    ErrorClass?: OIDCProviderErrorConstructor,
): Promise<void>;

/** @experimental Not covered by semantic versioning conventions. */
export function validateClientScope(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    scopes?: string | Iterable<string>,
): Set<string>;

/** @experimental Not covered by semantic versioning conventions. */
export function resolveRequestedResources(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
): Promise<ResourceServerInstance[]>;

/** @experimental Not covered by semantic versioning conventions. */
export function resolveAndApplyResource(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    source: ResourceGrantSource,
    token: AccessToken,
    grant: Grant,
    scope?: Set<string> | undefined,
): Promise<string | undefined>;

/** @experimental Not covered by semantic versioning conventions. */
export function applyAuthorizationDetails(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    token: AccessToken | ClientCredentials,
    source?: AuthorizationDetailsSource | undefined,
): Promise<void>;

/** @experimental Not covered by semantic versioning conventions. */
export function shouldIssueRefreshToken(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    source: object,
): Promise<boolean>;

/** @experimental Not covered by semantic versioning conventions. */
export function applyRefreshTokenBindings(
    provider: Provider,
    ctx: TokenEndpointGrantContext,
    accessToken: AccessToken,
    refreshToken: RefreshToken,
): Promise<void>;

/** @experimental Not covered by semantic versioning conventions. */
export function buildTokenResponse<Parameters extends object = Record<never, never>>(
    provider: Provider,
    input: TokenResponseInput<Parameters>,
): TokenResponse & Omit<Parameters, ReservedTokenResponseParameter>;
