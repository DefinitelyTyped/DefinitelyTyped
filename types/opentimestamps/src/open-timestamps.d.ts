import DetachedTimestampFile = require("./detached-timestamp-file");
import Timestamp = require("./timestamp");
import { UrlWhitelist } from "./calendar";
import { EsploraOptions } from "./esplora";
import { VerificationError } from "./notary";

export interface InfoOptions {
    verbose?: boolean;
}

export interface StampOptions {
    calendars?: string[];
    m?: number;
}

export interface VerifyOptions {
    esplora?: EsploraOptions;
    calendars?: string[];
    whitelist?: UrlWhitelist;
    timeout?: number;
    ignoreBitcoinNode?: boolean;
}

export interface UpgradeOptions {
    calendars?: string[];
    whitelist?: UrlWhitelist;
}

export function info(detached: DetachedTimestampFile, options?: InfoOptions): string;
export function json(ots: ArrayBuffer | Timestamp): string;
export function stamp(
    detaches: DetachedTimestampFile | DetachedTimestampFile[],
    options?: StampOptions,
): Promise<void>;
export function createTimestamp(
    timestamp: Timestamp,
    calendars: string[],
    m: number,
): Promise<Timestamp>;
export function makeMerkleTree(fileTimestamps: DetachedTimestampFile[]): Timestamp;
export function verify(
    detachedStamped: DetachedTimestampFile,
    detachedOriginal: DetachedTimestampFile,
    options?: VerifyOptions,
): Promise<{ [chain: string]: { timestamp: number; height: number } }>;
export function verifyTimestamp(
    timestamp: Timestamp,
    options?: VerifyOptions,
): Promise<{ [chain: string]: { timestamp: number; height: number } }>;
export function verifyAttestation(
    attestation: any,
    msg: number[],
    options?: VerifyOptions,
): Promise<{ chain: string; attestedTime: number; height: number }>;
export function upgrade(detached: DetachedTimestampFile, options?: UpgradeOptions): Promise<boolean>;
export function upgradeTimestamp(timestamp: Timestamp, options?: UpgradeOptions): Promise<boolean>;
export function upgradeStamp(
    subStamp: Timestamp,
    calendar: any,
    commitment: number[],
    existingAttestations: Set<any>,
): Promise<{ subStamp: Timestamp; upgradedStamp: Timestamp } | {}>;
