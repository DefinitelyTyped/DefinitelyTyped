// Type definitions for cloudflare 2.7
// Project: https://github.com/cloudflare/node-cloudflare
// Definitions by: Samuel Corsi-House <https://github.com/Xenfo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type RecordTypes =
    | 'A'
    | 'AAAA'
    | 'CNAME'
    | 'HTTPS'
    | 'TXT'
    | 'SRV'
    | 'LOC'
    | 'MX'
    | 'NS'
    | 'SPF'
    | 'CERT'
    | 'DNSKEY'
    | 'DS'
    | 'NAPTR'
    | 'SMIMEA'
    | 'SSHFP'
    | 'SVCB'
    | 'TLSA'
    | 'URI read only';

export interface AuthObject {
    email?: string;
    key?: string;
    token?: string;
}

export interface DNSRecords {
    edit(
        zone_id: string,
        id: string,
        record: {
            type: RecordTypes;
            name: string;
            content: string;
            ttl: number;
            proxied?: boolean;
        },
    ): Promise<Record<string, unknown>>;
    browse(zone_id: string): Promise<Record<string, unknown>>;
    export(zone_id: string): Promise<Record<string, unknown>>;
    del(zone_id: string, id: string): Promise<Record<string, unknown>>;
    read(zone_id: string, id: string): Promise<Record<string, unknown>>;
    add(
        zone_id: string,
        record: {
            type: RecordTypes;
            name: string;
            content: string;
            ttl: number;
            priority: number;
            proxied?: boolean;
        },
    ): Promise<Record<string, unknown>>;
}

export interface EnterpriseZoneWorkerScripts {
    read(account_id: string, name: string): Promise<Record<string, unknown>>;
    browse(account_id: string, name: string): Promise<Record<string, unknown>>;
    edit(account_id: string, name: string, script: string): Promise<Record<string, unknown>>;
    del(account_id: string, name: string): Promise<Record<string, unknown>>;
}

export interface EnterpriseZoneWorkersRoutes {
    browse(zone_id: string): Promise<Record<string, unknown>>;
    del(zone_id: string, id: string): Promise<Record<string, unknown>>;
    add(zone_id: string, config: { pattern: string; script: string }): Promise<Record<string, unknown>>;
    edit(zone_id: string, id: string, config: { pattern: string; script: string }): Promise<Record<string, unknown>>;
    read(zone_id: string, id: string): Promise<Record<string, unknown>>;
}

export interface EnterpriseZoneWorkersKVNamespaces {
    edit(account_id: string, id: string, config: { title: string }): Promise<Record<string, unknown>>;
    browse(account_id: string): Promise<Record<string, unknown>>;
    add(account_id: string, config: { title: string }): Promise<Record<string, unknown>>;
    del(account_id: string, id: string): Promise<Record<string, unknown>>;
}

export interface EnterpriseZoneWorkersKV {
    browse(account_id: string, namespace_id: string): Promise<Record<string, unknown>>;
    add(account_id: string, namespace_id: string, value: string): Promise<Record<string, unknown>>;
    read(account_id: string, namespace_id: string, key_name: string): Promise<Record<string, unknown>>;
    del(account_id: string, namespace_id: string, key_name: string): Promise<Record<string, unknown>>;
    addMulti(
        account_id: string,
        namespace_id: string,
        data: Array<{ pattern: string; script: string }>,
    ): Promise<Record<string, unknown>>;
    delMulti(account_id: string, namespace_id: string, data: string[]): Promise<Record<string, unknown>>;
}

export interface CFIPs {
    browse(): Promise<Record<string, unknown>>;
}

export interface PageRules {
    edit(
        id: string,
        page_rule: {
            tragets: [
                {
                    target: string;
                    constraint: {
                        operator: string;
                        value: string;
                    };
                },
            ];
            actions: [
                {
                    id: string;
                    value: string;
                },
            ];
            priority?: number;
            status?: string;
        },
    ): Promise<Record<string, unknown>>;
    add(zone: {
        tragets: [
            {
                target: string;
                constraint: {
                    operator: string;
                    value: string;
                };
            },
        ];
        actions: [
            {
                id: string;
                value: string;
            },
        ];
        priority?: number;
        status?: string;
    }): Promise<Record<string, unknown>>;
    del(id: string): Promise<Record<string, unknown>>;
    browse(): Promise<Record<string, unknown>>;
    read(id: string): Promise<Record<string, unknown>>;
}

export interface Zones {
    activationCheck(id: string): Promise<Record<string, unknown>>;
    del(id: string): Promise<Record<string, unknown>>;
    add(zone: {
        name: string;
        action: { id: string };
        jump_start?: boolean;
        type?: 'full' | 'partial';
    }): Promise<Record<string, unknown>>;
    edit(
        id: string,
        zone: {
            name: string;
            action: { id: string };
            jump_start?: boolean;
            type?: 'full' | 'partial';
        },
    ): Promise<Record<string, unknown>>;
    read(id: string): Promise<Record<string, unknown>>;
    purgeCache(
        id: string,
        params: {
            files?:
                | string[]
                | { url: string; headers: { Origin: string; 'CF-IPCountry': string; 'CF-Device-Type': string } };
            tags?: string[];
            hosts: string[];
        },
    ): Promise<Record<string, unknown>>;
    browse(): Promise<Record<string, unknown>>;
}

export interface ZoneSettings {
    read(id: string, setting: string): Promise<Record<string, unknown>>;
    edit(id: string, setting: string, value: string | Record<string, unknown>): Promise<Record<string, unknown>>;
    editAll(id: string, settings: Record<string, unknown>): Promise<Record<string, unknown>>;
    browse(id: string): Promise<Record<string, unknown>>;
}

export interface ZoneCustomHostNames {
    browse(zone_id: string): Promise<Record<string, unknown>>;
    read(zone_id: string, id: string): Promise<Record<string, unknown>>;
    edit(
        zone_id: string,
        id: string,
        config: {
            hostname: string;
            ssl: {
                method: string;
                type: string;
                settings: {
                    http2: string;
                    http3: string;
                    min_tls_version: string;
                    tls_1_3: string;
                    ciphers: string[];
                };
                bundle_method: string;
                wildcard: boolean;
                custom_certificate: string;
                custom_key: string;
            };
        },
    ): Promise<Record<string, unknown>>;
    add(
        zone_id: string,
        config: {
            hostname: string;
            ssl: {
                method: string;
                type: string;
                settings: {
                    http2: string;
                    http3: string;
                    min_tls_version: string;
                    tls_1_3: string;
                    ciphers: string[];
                };
                bundle_method: string;
                wildcard: boolean;
                custom_certificate: string;
                custom_key: string;
            };
        },
    ): Promise<Record<string, unknown>>;
    del(zone_id: string, id: string): Promise<Record<string, unknown>>;
}

export interface ZoneWorkers {
    validate(zone_id: string, script: string): Promise<Record<string, unknown>>;
}

export interface ZoneWorkersScript {
    read(zone_id: string, script?: string): Promise<Record<string, unknown>>;
    del(): Promise<Record<string, unknown>>;
}

export interface ZoneWorkersRoutes {
    browse(zone_id: string): Promise<Record<string, unknown>>;
    edit(zone_id: string, id: string, config: { pattern: string; script: string }): Promise<Record<string, unknown>>;
    read(zone_id: string, id: string): Promise<Record<string, unknown>>;
    add(zone_id: string, config: { pattern: string; script: string }): Promise<Record<string, unknown>>;
    del(zone_id: string, id: string): Promise<Record<string, unknown>>;
}

export interface User {
    read(): Promise<Record<string, unknown>>;
    edit(user: {
        first_name: string;
        last_name: string;
        telephone: string;
        country: string;
        zipcode: string;
    }): Promise<Record<string, unknown>>;
}

export interface Stream {
    listVideos(accountId: string): Promise<Record<string, unknown>>;
    videoDetails(accountId: string, id: string): Promise<Record<string, unknown>>;
    deleteVideo(accountId: string, id: string): Promise<Record<string, unknown>>;
}

export class Cloudflare {
    constructor(auth: AuthObject);

    dnsRecords: DNSRecords;
    enterpriseZoneWorkersScripts: EnterpriseZoneWorkerScripts;
    enterpriseZoneWorkersRoutes: EnterpriseZoneWorkersRoutes;
    enterpriseZoneWorkersKVNamespaces: EnterpriseZoneWorkersKVNamespaces;
    enterpriseZoneWorkersKV: EnterpriseZoneWorkersKV;
    ips: CFIPs;
    zones: Zones;
    zoneSettings: ZoneSettings;
    zoneCustomHostNames: ZoneCustomHostNames;
    zoneWorkers: ZoneWorkers;
    zoneWorkersScript: ZoneWorkersScript;
    zoneWorkersRoutes: ZoneWorkersRoutes;
    user: User;
    stream: Stream;
}
