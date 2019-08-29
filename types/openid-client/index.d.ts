// Type definitions for openid-client 3.1
// Project: https://github.com/panva/node-openid-client
// Definitions by: ulrichb <https://github.com/ulrichb>
//                 Brandon Shelton <https://github.com/YangusKhan>
//                 Richard Honor <https://github.com/RMHonor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import { IncomingMessage } from 'http';
import { GotOptions } from 'got';

export {}; // Disable automatic export of all module members (make it explicit)

//

type HttpRequestOptions = GotOptions<null>;
type CustomHttpOptionsProvider = (options: HttpRequestOptions) => HttpRequestOptions;

export const custom: {
    readonly http_options: unique symbol;
};

// https://github.com/panva/node-openid-client/tree/master/docs#issuer

export interface IssuerMetadata {
    readonly issuer?: string;
    readonly authorization_endpoint?: string;
    readonly userinfo_endpoint?: string;
    readonly token_endpoint?: string;
    readonly jwks_uri?: string;
    readonly revocation_endpoint?: string;
    readonly introspection_endpoint?: string;
    readonly end_session_endpoint?: string;
    readonly registration_endpoint?: string;
    readonly token_endpoint_auth_methods_supported?: ReadonlyArray<string>;
    readonly token_endpoint_auth_signing_alg_values_supported?: ReadonlyArray<string>;
    readonly introspection_endpoint_auth_methods_supported?: ReadonlyArray<string>;
    readonly introspection_endpoint_auth_signing_alg_values_supported?: ReadonlyArray<string>;
    readonly revocation_endpoint_auth_methods_supported?: ReadonlyArray<string>;
    readonly revocation_endpoint_auth_signing_alg_values_supported?: ReadonlyArray<string>;
    readonly mtls_endpoint_aliases?: {
        token_endpoint?: string;
        userinfo_endpoint?: string;
        revocation_endpoint?: string;
        introspection_endpoint?: string;
    };
}

export class Issuer {
    static [custom.http_options]: CustomHttpOptionsProvider;

    constructor(metadata?: IssuerMetadata);

    static discover(issuer: string): Promise<Issuer>;

    [custom.http_options]: CustomHttpOptionsProvider;

    readonly metadata: IssuerMetadata;

    readonly Client: typeof Client;

    keystore(forceReload?: boolean): Promise<unknown>;
}

export interface ClientMetadata {
    readonly client_id?: string;
    readonly client_secret?: string;
    readonly redirect_uris?: ReadonlyArray<string>;
    readonly response_types?: ReadonlyArray<string>;
    readonly post_logout_redirect_uris?: ReadonlyArray<string>;
}

export interface AuthorizationUrlParameters {
    readonly redirect_uri?: string;
    readonly response_type?: string;
    readonly scope?: string;

    readonly response_mode?: string;
    readonly nonce?: string;
    readonly resource?: string;
    readonly code_challenge?: string;
    readonly code_challenge_method?: string;
}

export interface EndSessionUrlParameters {
    readonly id_token_hint?: string | TokenSet;
    readonly post_logout_redirect_uri?: string;
    readonly state?: string;
}

export interface IntrospectionResponse {
    readonly active: boolean;
    readonly scope?: string;
    readonly client_id?: string;
    readonly username?: string;
    readonly token_type?: string;
    readonly exp?: number;
    readonly iat?: number;
    readonly nbf?: number;
    readonly sub?: string;
    readonly aud?: string;
    readonly iss?: string;
    readonly jti?: string;
    readonly [key: string]: unknown;
}

export interface RevokeRequestOptions {
    /**
     * Extra request body properties to be sent to the revocation endpoint.
     */
    readonly revokeBody?: object;
    /**
     * extra client assertion payload parameters to be sent as part of a client JWT assertion.
     * This is only used when the client's `token_endpoint_auth_method` is either
     * `client_secret_jwt` or `private_key_jwt`.
     */
    readonly clientAssertionPayload?: object;
}

export interface RefreshRequestOptions {
    readonly exchangeBody?: { readonly [key: string]: string };
    readonly clientAssertionPayload?: { readonly [key: string]: string };
}

export class Client {
    static [custom.http_options]: CustomHttpOptionsProvider;

    constructor(metadata?: ClientMetadata);

    [custom.http_options]: CustomHttpOptionsProvider;

    readonly metadata: ClientMetadata;

    authorizationUrl(parameters?: AuthorizationUrlParameters): string;

    endSessionUrl(parameters?: EndSessionUrlParameters): string;

    callbackParams(input: string | IncomingMessage): {};

    callback(
        redirectUri: string,
        parameters: {},
        checks?: {
            readonly response_type?: string;
            readonly state?: string;
            readonly nonce?: string;
            readonly code_verifier?: string;
            readonly max_age?: number;
        },
    ): Promise<TokenSet>;

    userinfo(accessToken: string | TokenSet): Promise<{ readonly [name: string]: {} | null | undefined }>;

    grant(body: {
        readonly grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token' | string;
        readonly [name: string]: string | undefined;
    }): Promise<TokenSet>;

    introspect(
        token: string,
        tokenTypeHint?: string,
        extras?: { readonly introspectBody?: object },
    ): Promise<IntrospectionResponse>;

    /**
     * Revokes a token at the Authorization Server's `revocation_endpoint`.
     *
     * @param token Token to revoke
     * @param tokenTypeHint Hint the Authorization Server as to the token type
     * @param extras Additional revoke options
     */
    revoke(token: string, tokenTypeHint: string, extras?: RevokeRequestOptions): Promise<void>;

    /**
     * Refresh your active token
     * @param refreshToken The refresh token
     * @param opts Additional options
     */
    refresh(refreshToken: string, opts?: RefreshRequestOptions): Promise<TokenSet>;
}

export class TokenSet {
    readonly access_token?: string;
    readonly token_type?: string;
    readonly id_token?: string;
    readonly refresh_token?: string;
    readonly expires_at?: number;
    readonly expires_in?: number;
    readonly [key: string]: unknown;

    expired(): boolean;

    claims(): { readonly [name: string]: {} | null | undefined };
}

export namespace generators {
    // https://github.com/panva/node-openid-client/tree/master/docs#generators

    function random(bytes?: number): string;

    function state(bytes?: number): string;

    function nonce(bytes?: number): string;

    function codeVerifier(bytes?: number): string;

    function codeChallenge(verifier: string): string;
}
