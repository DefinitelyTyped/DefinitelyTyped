declare namespace Cloudflare {
    type RecordTypes =
        | "A"
        | "AAAA"
        | "CNAME"
        | "HTTPS"
        | "TXT"
        | "SRV"
        | "LOC"
        | "MX"
        | "NS"
        | "SPF"
        | "CERT"
        | "DNSKEY"
        | "DS"
        | "NAPTR"
        | "SMIMEA"
        | "SSHFP"
        | "SVCB"
        | "TLSA"
        | "URI";

    type ResponseObjectPromise = Promise<object>;

    interface AuthObject {
        email?: string | undefined;
        key?: string | undefined;
        token?: string | undefined;
    }

    interface DnsRecordWithoutPriority {
        type: Exclude<RecordTypes, "MX" | "SRV" | "URI">;
        name: string;
        content: string;
        ttl: number;
        proxied?: boolean | undefined;
    }

    interface DnsRecordWithPriority {
        type: Extract<RecordTypes, "MX" | "URI">;
        name: string;
        content: string;
        ttl: number;
        proxied?: boolean | undefined;
        priority: number;
    }

    interface SrvDnsRecord {
        type: "SRV";
        data: {
            name: string;
            service: string;
            proto: string;
            ttl: number;
            proxied?: boolean | undefined;
            priority: number;
            weight: number;
            port: number;
            target: string;
        };
    }

    type DnsRecord = DnsRecordWithPriority | DnsRecordWithoutPriority | SrvDnsRecord;
    type DnsRecordByType<RecordType extends RecordTypes> = RecordType extends "MX" | "URI" ? DnsRecordWithPriority
        : RecordType extends "SRV" ? SrvDnsRecord
        : RecordType extends Exclude<RecordTypes, "MX" | "SRV" | "URI"> ? DnsRecordWithoutPriority
        : DnsRecord;

    interface DNSRecords {
        edit(zone_id: string, id: string, record: DnsRecord): ResponseObjectPromise;
        browse<RecordType extends RecordTypes = any>(
            zone_id: string,
            options?: DnsRecordsBrowseOptions<RecordType>,
        ): Promise<DnsRecordsBrowseResponse<RecordType>>;
        export(zone_id: string): ResponseObjectPromise;
        del(zone_id: string, id: string): ResponseObjectPromise;
        read(zone_id: string, id: string): ResponseObjectPromise;
        add(zone_id: string, record: DnsRecord): ResponseObjectPromise;
    }

    interface DnsRecordsBrowseOptions<RecordType extends RecordTypes> {
        page?: number;
        per_page?: number;
        name?: string;
        content?: string;
        type?: RecordType;
        order?: "type" | "name" | "content" | "ttl" | "proxied";
        direction?: "asc" | "desc";
        match?: "any" | "all";
        tag?: string;
        tag_match?: "any" | "all";
        search?: string;
        comment?: string;
        // TODO: support nested filters (for example tag.absent)
    }

    interface DnsRecordsBrowseResponse<RecordType extends RecordTypes> {
        result: Array<DnsRecordByType<RecordType>> | null;
        result_info: {
            page: number;
            per_page: number;
            count: number;
            total_count: number;
        };
        success: boolean;
        errors: ResponseMessageObject[];
        messages: ResponseMessageObject[];
    }

    interface ResponseMessageObject {
        code: number;
        message: string;
    }

    interface EnterpriseZoneWorkerScripts {
        read(account_id: string, name: string): ResponseObjectPromise;
        browse(account_id: string, name: string): ResponseObjectPromise;
        edit(account_id: string, name: string, script: string): ResponseObjectPromise;
        del(account_id: string, name: string): ResponseObjectPromise;
    }

    interface EnterpriseZoneWorkersRoutes {
        browse(zone_id: string): ResponseObjectPromise;
        del(zone_id: string, id: string): ResponseObjectPromise;
        add(zone_id: string, config: { pattern: string; script: string }): ResponseObjectPromise;
        edit(zone_id: string, id: string, config: { pattern: string; script: string }): ResponseObjectPromise;
        read(zone_id: string, id: string): ResponseObjectPromise;
    }

    interface EnterpriseZoneWorkersKVNamespaces {
        edit(account_id: string, id: string, config: { title: string }): ResponseObjectPromise;
        browse(account_id: string): ResponseObjectPromise;
        add(account_id: string, config: { title: string }): ResponseObjectPromise;
        del(account_id: string, id: string): ResponseObjectPromise;
    }

    interface EnterpriseZoneWorkersKV {
        browse(account_id: string, namespace_id: string): ResponseObjectPromise;
        add(account_id: string, namespace_id: string, key_name: string, value: string): ResponseObjectPromise;
        read(account_id: string, namespace_id: string, key_name: string): ResponseObjectPromise;
        del(account_id: string, namespace_id: string, key_name: string): ResponseObjectPromise;
        addMulti(
            account_id: string,
            namespace_id: string,
            data: Array<{
                key: string;
                value: string;
                expiration?: number;
                expiration_ttl?: number;
                metadata?: object;
                base64?: boolean;
            }>,
        ): ResponseObjectPromise;
        delMulti(account_id: string, namespace_id: string, data: string[]): ResponseObjectPromise;
    }

    interface CFIPs {
        browse(): ResponseObjectPromise;
    }

    interface PageRules {
        edit(
            id: string,
            page_rule: {
                targets: [
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
                priority?: number | undefined;
                status?: string | undefined;
            },
        ): ResponseObjectPromise;
        add(zone: {
            targets: [
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
            priority?: number | undefined;
            status?: string | undefined;
        }): ResponseObjectPromise;
        del(id: string): ResponseObjectPromise;
        browse(): ResponseObjectPromise;
        read(id: string): ResponseObjectPromise;
    }

    interface Zones {
        activationCheck(id: string): ResponseObjectPromise;
        del(id: string): ResponseObjectPromise;
        add(zone: {
            name: string;
            action: { id: string };
            jump_start?: boolean | undefined;
            type?: "full" | "partial" | undefined;
        }): ResponseObjectPromise;
        edit(
            id: string,
            zone: {
                name: string;
                action: { id: string };
                jump_start?: boolean | undefined;
                type?: "full" | "partial" | undefined;
            },
        ): ResponseObjectPromise;
        read(id: string): ResponseObjectPromise;
        purgeCache(
            id: string,
            params: {
                files?:
                    | string[]
                    | { url: string; headers: { Origin: string; "CF-IPCountry": string; "CF-Device-Type": string } }
                    | undefined;
                tags?: string[] | undefined;
                hosts?: string[] | undefined;
                prefixes?: string[] | undefined;
            },
        ): ResponseObjectPromise;
        browse(): ResponseObjectPromise;
    }

    interface ZoneSettings {
        read(id: string, setting: string): ResponseObjectPromise;
        edit(id: string, setting: string, value: string | Record<string, unknown>): ResponseObjectPromise;
        editAll(id: string, settings: any): ResponseObjectPromise;
        browse(id: string): ResponseObjectPromise;
    }

    interface ZoneCustomHostNames {
        browse(zone_id: string): ResponseObjectPromise;
        read(zone_id: string, id: string): ResponseObjectPromise;
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
        ): ResponseObjectPromise;
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
        ): ResponseObjectPromise;
        del(zone_id: string, id: string): ResponseObjectPromise;
    }

    interface ZoneWorkers {
        validate(zone_id: string, script: string): ResponseObjectPromise;
    }

    interface ZoneWorkersScript {
        read(zone_id: string, script?: string): ResponseObjectPromise;
        del(): ResponseObjectPromise;
    }

    interface ZoneWorkersRoutes {
        browse(zone_id: string): ResponseObjectPromise;
        edit(zone_id: string, id: string, config: { pattern: string; script: string }): ResponseObjectPromise;
        read(zone_id: string, id: string): ResponseObjectPromise;
        add(zone_id: string, config: { pattern: string; script: string }): ResponseObjectPromise;
        del(zone_id: string, id: string): ResponseObjectPromise;
    }

    interface User {
        read(): ResponseObjectPromise;
        edit(user: {
            first_name: string;
            last_name: string;
            telephone: string;
            country: string;
            zipcode: string;
        }): ResponseObjectPromise;
    }

    interface Stream {
        listVideos(accountId: string): ResponseObjectPromise;
        videoDetails(accountId: string, id: string): ResponseObjectPromise;
        deleteVideo(accountId: string, id: string): ResponseObjectPromise;
    }
}

declare class Cloudflare {
    constructor(auth: Cloudflare.AuthObject);

    dnsRecords: Cloudflare.DNSRecords;
    enterpriseZoneWorkersScripts: Cloudflare.EnterpriseZoneWorkerScripts;
    enterpriseZoneWorkersRoutes: Cloudflare.EnterpriseZoneWorkersRoutes;
    enterpriseZoneWorkersKVNamespaces: Cloudflare.EnterpriseZoneWorkersKVNamespaces;
    enterpriseZoneWorkersKV: Cloudflare.EnterpriseZoneWorkersKV;
    ips: Cloudflare.CFIPs;
    zones: Cloudflare.Zones;
    zoneSettings: Cloudflare.ZoneSettings;
    zoneCustomHostNames: Cloudflare.ZoneCustomHostNames;
    zoneWorkers: Cloudflare.ZoneWorkers;
    zoneWorkersScript: Cloudflare.ZoneWorkersScript;
    zoneWorkersRoutes: Cloudflare.ZoneWorkersRoutes;
    user: Cloudflare.User;
    stream: Cloudflare.Stream;
}

export = Cloudflare;
