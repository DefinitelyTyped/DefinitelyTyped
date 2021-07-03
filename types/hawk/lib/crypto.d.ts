import * as Crypto from 'crypto';
import * as Client from './client';

export interface Artifacts {
    app?: string;
    dlg?: string;
    ext?: string;
    hash?: string;
    host: string;
    method: string;
    nonce: string;
    port: number;
    resource: string;
    ts: string;
}

export interface TimestampMessage {
    ts: number;
    tsm: string;
}

export const headerVersion: string;

export const algorithms: string[];

export function calculateMac(type: string, credentials: Client.Credentials, options: Artifacts): string;

export function generateNormalizedString(type: string, options: Artifacts): string;

export function calculatePayloadHash(payload: string, algorithm: string, contentType: string): string;

export function initializePayloadHash(algorithm: string, contentType: string): string;

export function finalizePayloadHash(hash: Crypto.Hash): string;

export function calculateTsMac(ts: string, credentials: Client.Credentials): string;

export function timestampMessage(credentials: Client.Credentials, localtimeOffsetMsec: number): TimestampMessage;
