// Type definitions for cloudflare 2.7
// Project: https://github.com/cloudflare/node-cloudflare
// Definitions by: Samuel Corsi-House <https://github.com/Xenfo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type RecordTypes =
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

interface AuthObject {
    email?: string;
    key?: string;
    token?: string;
}

interface DNSRecords {
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
    ): Promise<any>;
    browse(zone_id: string): Promise<any>;
    export(zone_id: string): Promise<any>;
    del(zone_id: string, id: string): Promise<any>;
    read(zone_id: string, id: string): Promise<any>;
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
    ): Promise<any>;
}

interface EnterpriseZoneWorkerScripts {
    read(account_id: string, name: string): Promise<any>;
    browse(account_id: string, name: string): Promise<any>;
    edit(account_id: string, name: string, script: string): Promise<any>;
    del(account_id: string, name: string): Promise<any>;
}

interface EnterpriseZoneWorkersRoutes {
    browse(zone_id: string): Promise<any>;
    del(zone_id: string, id: string): Promise<any>;
    add(zone_id: string, config: { pattern: string; script: string }): Promise<any>;
    edit(zone_id: string, id: string, config: { pattern: string; script: string }): Promise<any>;
    read(zone_id: string, id: string): Promise<any>;
}

interface EnterpriseZoneWorkersKVNamespaces {
    edit(account_id: string, id: string, config: { title: string }): Promise<any>;
    browse(account_id: string): Promise<any>;
    add(account_id: string, config: { title: string }): Promise<any>;
    del(account_id: string, id: string): Promise<any>;
}

interface EnterpriseZoneWorkersKV {
    browse(account_id: string, namespace_id: string): Promise<any>;
    add(account_id: string, namespace_id: string, value: string): Promise<any>;
    read(account_id: string, namespace_id: string, key_name: string): Promise<any>;
    del(account_id: string, namespace_id: string, key_name: string): Promise<any>;
    addMulti(
        account_id: string,
        namespace_id: string,
        data: Array<{ pattern: string; script: string }>,
    ): Promise<any>;
    delMulti(account_id: string, namespace_id: string, data: string[]): Promise<any>;
}

interface CFIPs {
    browse(): Promise<any>;
}

interface PageRules {
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
    ): Promise<any>;
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
    }): Promise<any>;
    del(id: string): Promise<any>;
    browse(): Promise<any>;
    read(id: string): Promise<any>;
}

interface Zones {
    activationCheck(id: string): Promise<any>;
    del(id: string): Promise<any>;
    add(zone: {
        name: string;
        action: { id: string };
        jump_start?: boolean;
        type?: 'full' | 'partial';
    }): Promise<any>;
    edit(
        id: string,
        zone: {
            name: string;
            action: { id: string };
            jump_start?: boolean;
            type?: 'full' | 'partial';
        },
    ): Promise<any>;
    read(id: string): Promise<any>;
    purgeCache(
        id: string,
        params: {
            files?:
                | string[]
                | { url: string; headers: { Origin: string; 'CF-IPCountry': string; 'CF-Device-Type': string } };
            tags?: string[];
            hosts: string[];
        },
    ): Promise<any>;
    browse(): Promise<any>;
}

interface ZoneSettings {
    read(id: string, setting: string): Promise<any>;
    edit(id: string, setting: string, value: string | Record<string, unknown>): Promise<any>;
    editAll(id: string, settings: any): Promise<any>;
    browse(id: string): Promise<any>;
}

interface ZoneCustomHostNames {
    browse(zone_id: string): Promise<any>;
    read(zone_id: string, id: string): Promise<any>;
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
    ): Promise<any>;
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
    ): Promise<any>;
    del(zone_id: string, id: string): Promise<any>;
}

interface ZoneWorkers {
    validate(zone_id: string, script: string): Promise<any>;
}

interface ZoneWorkersScript {
    read(zone_id: string, script?: string): Promise<any>;
    del(): Promise<any>;
}

interface ZoneWorkersRoutes {
    browse(zone_id: string): Promise<any>;
    edit(zone_id: string, id: string, config: { pattern: string; script: string }): Promise<any>;
    read(zone_id: string, id: string): Promise<any>;
    add(zone_id: string, config: { pattern: string; script: string }): Promise<any>;
    del(zone_id: string, id: string): Promise<any>;
}

interface User {
    read(): Promise<any>;
    edit(user: {
        first_name: string;
        last_name: string;
        telephone: string;
        country: string;
        zipcode: string;
    }): Promise<any>;
}

interface Stream {
    listVideos(accountId: string): Promise<any>;
    videoDetails(accountId: string, id: string): Promise<any>;
    deleteVideo(accountId: string, id: string): Promise<any>;
}

declare class Cloudflare {
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

export = Cloudflare;
