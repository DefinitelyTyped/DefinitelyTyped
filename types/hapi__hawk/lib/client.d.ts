import * as Crypto from './crypto';
import * as http from 'http';
import * as request from 'request';

export interface Credentials {
    algorithm: 'sha1' | 'sha256';
    id: string;
    key: string;
}

export interface HeaderOptions {
    /** Oz application id */
    app?: string;
    /** Payload content-type (ignored if hash provided) */
    contentType?: string;
    credentials: Credentials;
    /** Oz delegated-by application id */
    dlg?: string;
    /** Application specific data sent via the ext attribute */
    ext?: string;
    /** Pre-calculated payload hash */
    hash?: string;
    /** Time offset to sync with server time (ignored if timestamp provided) */
    localtimeOffsetMsec?: number;
    /** A pre-generated nonce */
    nonce?: string;
    /** UTF-8 encoded string for body hash generation (ignored if hash provided) */
    payload?: string;
    /** A pre-calculated timestamp in seconds */
    timestamp?: number;
}

export interface Header {
    header: string;
    artifacts: Crypto.Artifacts;
}

export interface AuthenticateOptions {
    /** optional payload received */
    payload?: string;
    /** specifies if a Server-Authorization header is required. Defaults to 'false' */
    required?: boolean;
}

export interface Authentication {
    headers: Record<string, string>;
}

export interface BewitOptions {
    credentials: Credentials;
    /** Application specific data sent via the ext attribute */
    ext?: string;
    /** Time offset to sync with server time */
    localtimeOffsetMsec: number;
    /** TTL in seconds */
    ttlSec: number;
}

export interface MessageOptions {
    credentials: Credentials;
    /** Time offset to sync with server time (ignored if timestamp provided) */
    localtimeOffsetMsec: number;
    /** A pre-generated nonce */
    nonce: string;
    /** A pre-calculated timestamp in seconds */
    timestamp: number;
}

export interface Message {
    hash: string;
    id: string;
    mac: string;
    nonce: string;
    ts: string;
}

export function authenticate(
    res: http.IncomingMessage | request.Response,
    credentials: Credentials,
    artifacts: Crypto.Artifacts,
    options?: AuthenticateOptions,
): Authentication;

export function getBewit(uri: string, options: BewitOptions): string;

export function header(uri: string, method: string, options?: HeaderOptions): Header;

export function message(host: string, port: number, message: string, options?: MessageOptions): Message;
