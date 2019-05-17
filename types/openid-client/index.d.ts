// Type definitions for openid-client 3.1
// Project: https://github.com/panva/node-openid-client
// Definitions by: ulrichb <https://github.com/ulrichb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import { IncomingMessage } from "http";

// https://github.com/panva/node-openid-client/tree/master/docs#issuer

export interface IssuerMetadata {
    readonly issuer?: string;
}

export class Issuer {
    static discover(issuer: string): Promise<Issuer>;

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

export class Client {
    constructor(metadata: ClientMetadata);

    readonly metadata: ClientMetadata;

    authorizationUrl(parameters?: AuthorizationUrlParameters): string;

    endSessionUrl(parameters?: EndSessionUrlParameters): string;

    callbackParams(input: string | IncomingMessage): {};

    callback(redirectUri: string, parameters: {}, checks?: {
        readonly response_type?: string;
        readonly state?: string;
        readonly nonce?: string;
        readonly code_verifier?: string;
        readonly max_age?: number;
    }): Promise<TokenSet>;

    userinfo(accessToken: string | TokenSet): Promise<{ readonly [name: string]: {} | null | undefined }>;

    grant(body: {
        readonly grant_type: "authorization_code" | "client_credentials" | "password" | "refresh_token" | string;
        readonly [name: string]: string | undefined;
    }): Promise<TokenSet>;

    introspect(token: string, tokenTypeHint?: string, extras?: { readonly introspectBody?: {} }):
        Promise<{ readonly [name: string]: {} | null | undefined }>;
}

export class TokenSet {
    readonly access_token?: string;
    readonly token_type?: string;
    readonly id_token?: string;
    readonly refresh_token?: string;

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
