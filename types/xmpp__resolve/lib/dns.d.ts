/// <reference types="node" />
import { LookupOptions as DnsLookupOptions, SrvRecord } from 'dns';

export function lookup(domain: string, options?: LookupOptions): Promise<ResolvedAddress[]>;

export type LookupOptions = Omit<DnsLookupOptions, 'all'>;

export interface ResolvedAddress {
    family: 4 | 6;
    address: string;
    uri: string;
}

export function resolveSrv(domain: string, entity: { service: string; protocol: string }): Promise<ResolvedSrvRecord[]>;

export interface ResolvedSrvRecord extends SrvRecord {
    service: string;
    protocol: string;
}

export function lookupSrvs(srvs: ResolvedSrvRecord[], options?: LookupOptions): Promise<LookedUpSrvRecord[]>;

export type LookedUpSrvRecord = ResolvedAddress & ResolvedSrvRecord;

export function resolve(domain: string, options?: ResolveOptions): Promise<ResolvedRecord[]>;

export interface ResolveOptions extends LookupOptions {
    srv?: Array<{ service: string; protocol: string }>;
    owner?: string;
}

export interface ResolvedTxtRecord {
    attribute: string;
    value: string;
    uri: string;
    method: string;
}

export type ResolvedRecord = ResolvedAddress | LookedUpSrvRecord | ResolvedTxtRecord;

export function sortSrv(records: ResolvedSrvRecord[]): ResolvedSrvRecord[];
