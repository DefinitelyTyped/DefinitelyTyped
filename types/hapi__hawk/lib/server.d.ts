import * as http from 'http';
import * as request from 'request';

import * as Crypto from './crypto';
import * as Utils from './utils';
import { Message } from './client';

export type CredentialsFunc = (id: string) => Promise<Credentials> | Credentials;
export type NonceFunc = (key: string, nonce: string, ts: string) => Promise<void> | void;

export interface AuthenticateOptions {
    /**
     * optional header field name, used to override the default 'Host' header when used
     * behind a cache of a proxy. Apache2 changes the value of the 'Host' header while preserving
     * the original (which is what the module must verify) in the 'x-forwarded-host' header field.
     * Only used when passed a node `http.ServerRequest` object.
     */
    hostHeaderName?: string;
    /**
     * optional nonce validation function. The function signature is `async function(key, nonce, ts)`
     * and it must return no value for success or throw an error for invalid state.
     */
    nonceFunc?: NonceFunc;
    /**
     * optional number of seconds of permitted clock skew for incoming timestamps. Defaults to 60 seconds.
     * Provides a +/- skew which means actual allowed window is double the number of seconds.
     */
    timestampSkewSec?: number;
    /**
     * Optional local clock time offset express in a number of milliseconds (positive or negative).
     * Defaults to 0.
     */
    localtimeOffsetMsec?: number;
    /**
     * optional payload for validation. The client calculates the hash value and includes it via the 'hash'
     * header attribute. The server always ensures the value provided has been included in the request
     * MAC. When this option is provided, it validates the hash value itself. Validation is done by calculating
     * a hash value over the entire payload (assuming it has already be normalized to the same format and
     * encoding used by the client to calculate the hash on request). If the payload is not available at the time
     * of authentication, the `authenticatePayload()` method can be used by passing it the credentials and
     * `attributes.hash` returned from `authenticate()`.
     */
    payload?: string;
    /**
     * optional host name override. Only used when passed a node request object.
     */
    host?: string;
    /**
     * optional port override. Only used when passed a node request object.
     */
    port?: number;
}

export interface Credentials {
    algorithm: 'sha1' | 'sha256';
    key: string;
    user: string;
}

export interface Authentication {
    artifacts: Crypto.Artifacts;
    credentials: Credentials;
}

export interface HeaderOptions {
    /** Payload content-type (ignored if hash provided) */
    contentType?: string;
    /** Application specific data sent via the ext attribute */
    ext?: string;
    /** Pre-calculated payload hash */
    hash?: string;
    /** UTF-8 encoded string for body hash generation (ignored if hash provided) */
    payload?: string;
}

export type AuthenticateBewitOptions = Pick<
    AuthenticateOptions,
    'hostHeaderName' | 'localtimeOffsetMsec' | 'host' | 'port'
>;

export interface Bewit {
    id: string;
    exp: string;
    mac: string;
    ext: string;
}

export interface AuthenticatedBewit extends AuthenticatedMessage {
    bewit: Bewit;
}

export interface AuthenticatedMessage {
    credentials: Credentials;
}

export type AuthenticateMessageOptions = Pick<
    AuthenticateOptions,
    'nonceFunc' | 'timestampSkewSec' | 'localtimeOffsetMsec'
>;

export function authenticate(
    req: http.IncomingMessage,
    credentialsFunc: CredentialsFunc,
    options?: AuthenticateOptions,
): Promise<Authentication>;

export function authenticateBewit(
    req: http.IncomingMessage,
    credentialsFunc: CredentialsFunc,
    options?: AuthenticateBewitOptions,
): AuthenticatedBewit;

export function authenticateMessage(
    host: string,
    port: number,
    message: string,
    authorization: Message,
    credentialsFunc: CredentialsFunc,
    options: AuthenticateMessageOptions,
): Promise<AuthenticatedMessage>;

export function authenticatePayload(
    payload: string,
    credentials: Credentials,
    artifacts: Crypto.Artifacts,
    contentType: string,
): void;

export function authenticatePayloadHash(calculatedHash: string, artifacts: Crypto.Artifacts): void;

export function header(credentials: Credentials, artifacts: Crypto.Artifacts, options?: HeaderOptions): string;
