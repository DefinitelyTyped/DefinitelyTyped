// Type definitions for dnscache 1.0
// Project: https://github.com/yahoo/dnscache#readme
// Definitions by: Chayapol Limanon <https://github.com/Nagato-Yuki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ErrnoException extends Error {
    errno?: number;
    code?: string;
    path?: string;
    syscall?: string;
    stack?: string;
}

interface DnsCacheOption {
    enable: boolean;
    ttl?: number;
    cachesize?: number;
    cache?: any;
}

interface LookupOptions {
    family?: number;
    hints?: number;
    all?: boolean;
}

interface LookupOneOptions extends LookupOptions {
    all?: false;
}

interface LookupAllOptions extends LookupOptions {
    all: true;
}

interface LookupAddress {
    address: string;
    family: number;
}

interface ResolveOptions {
    ttl: boolean;
}

interface ResolveWithTtlOptions extends ResolveOptions {
    ttl: true;
}

interface RecordWithTtl {
    address: string;
    ttl: number;
}

interface MxRecord {
    priority: number;
    exchange: string;
}

interface NaptrRecord {
    flags: string;
    service: string;
    regexp: string;
    replacement: string;
    order: number;
    preference: number;
}

interface SoaRecord {
    nsname: string;
    hostmaster: string;
    serial: number;
    refresh: number;
    retry: number;
    expire: number;
    minttl: number;
}

interface SrvRecord {
    priority: number;
    weight: number;
    port: number;
    name: string;
}

interface DnsCache {
    (dnsCacheOption: DnsCacheOption): DnsCache;

    lookup(hostname: string, family: number, callback: (err: ErrnoException, address: string, family: number) => void): void;
    // This line has to be leave as it is for readability
    // tslint:disable-next-line: unified-signatures
    lookup(hostname: string, options: LookupOneOptions, callback: (err: ErrnoException, address: string, family: number) => void): void;
    lookup(hostname: string, options: LookupAllOptions, callback: (err: ErrnoException, addresses: LookupAddress[]) => void): void;
    lookup(hostname: string, options: LookupOptions, callback: (err: ErrnoException, address: string | LookupAddress[], family: number) => void): void;
    lookup(hostname: string, callback: (err: ErrnoException, address: string, family: number) => void): void;

    resolve(hostname: string, callback: (err: ErrnoException, addresses: string[]) => void): void;
    resolve(hostname: string, rrtype: "A" | "AAAA" | "CNAME" | "NS" | "PTR", callback: (err: ErrnoException, addresses: string[]) => void): void;
    resolve(hostname: string, rrtype: "MX", callback: (err: ErrnoException, addresses: MxRecord[]) => void): void;
    resolve(hostname: string, rrtype: "NAPTR", callback: (err: ErrnoException, addresses: NaptrRecord[]) => void): void;
    resolve(hostname: string, rrtype: "SOA", callback: (err: ErrnoException, addresses: SoaRecord) => void): void;
    resolve(hostname: string, rrtype: "SRV", callback: (err: ErrnoException, addresses: SrvRecord[]) => void): void;
    resolve(hostname: string, rrtype: "TXT", callback: (err: ErrnoException, addresses: string[][]) => void): void;
    resolve(hostname: string, rrtype: string, callback: (err: ErrnoException, addresses: string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][]) => void): void;

    resolve4(hostname: string, callback: (err: ErrnoException, addresses: string[]) => void): void;
    resolve4(hostname: string, options: ResolveWithTtlOptions, callback: (err: ErrnoException, addresses: RecordWithTtl[]) => void): void;
    resolve4(hostname: string, options: ResolveOptions, callback: (err: ErrnoException, addresses: string[] | RecordWithTtl[]) => void): void;

    resolveCname(hostname: string, callback: (err: ErrnoException, addresses: string[]) => void): void;
    resolveMx(hostname: string, callback: (err: ErrnoException, addresses: MxRecord[]) => void): void;
    resolveNaptr(hostname: string, callback: (err: ErrnoException, addresses: NaptrRecord[]) => void): void;
    resolveNs(hostname: string, callback: (err: ErrnoException, addresses: string[]) => void): void;
    resolvePtr(hostname: string, callback: (err: ErrnoException, addresses: string[]) => void): void;
    resolveSoa(hostname: string, callback: (err: ErrnoException, address: SoaRecord) => void): void;
    resolveSrv(hostname: string, callback: (err: ErrnoException, addresses: SrvRecord[]) => void): void;
    resolveTxt(hostname: string, callback: (err: ErrnoException, addresses: string[][]) => void): void;

    reverse(ip: string, callback: (err: ErrnoException, hostnames: string[]) => void): void;
    setServers(servers: string[]): void;

    NODATA: string;
    FORMERR: string;
    SERVFAIL: string;
    NOTFOUND: string;
    NOTIMP: string;
    REFUSED: string;
    BADQUERY: string;
    BADNAME: string;
    BADFAMILY: string;
    BADRESP: string;
    CONNREFUSED: string;
    TIMEOUT: string;
    EOF: string;
    FILE: string;
    NOMEM: string;
    DESTRUCTION: string;
    BADSTR: string;
    BADFLAGS: string;
    NONAME: string;
    BADHINTS: string;
    NOTINITIALIZED: string;
    LOADIPHLPAPI: string;
    ADDRGETNETWORKPARAMS: string;
    CANCELLED: string;
}

declare var dnscache: DnsCache;

export = dnscache;
