// Type definitions for Gandi LiveDNS
// Project: http://doc.livedns.gandi.net/
// Definitions by: Xavier Stouder <https://github.com/xstoudi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Zone {
    uuid: string;
    name: string;
    primary_ns: string;
    apex_alias: string;
    email: string;
    serial: number;
    refresh: number;
    retry: number;
    expire: number;
    minimum: number;
}

interface ZoneRecord {
    rrset_name: string;
    /**
     * One of A, AAA, CNAME, MX, NS, TXT, WKS, SRV, LOC, SPF, SSHFP, DNAME
     */
    rrset_type: string;
    rrset_ttl: number;
    rrset_values: string[];
}

interface Domain {
    fqdn: string;
    zone_uuid: string;
}

interface Snapshot {
    serial: number;
    zone_uuid: string;
    /**
     * Can be used as a date with "new Date(change_time);"
     */
    change_time: string;
    zone_data: ZoneRecord[];
}