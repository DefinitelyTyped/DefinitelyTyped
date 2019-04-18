declare module "dns" {
    // Supported getaddrinfo flags.
    export const ADDRCONFIG: number;
    export const V4MAPPED: number;

    export interface LookupOptions {
        family?: number;
        hints?: number;
        all?: boolean;
    }

    export interface LookupOneOptions extends LookupOptions {
        all?: false;
    }

    export interface LookupAllOptions extends LookupOptions {
        all: true;
    }

    export interface LookupAddress {
        address: string;
        family: number;
    }

    export function lookup(hostname: string, family: number, callback: (err: NodeJS.ErrnoException, address: string, family: number) => void): void;
    export function lookup(hostname: string, options: LookupOneOptions, callback: (err: NodeJS.ErrnoException, address: string, family: number) => void): void;
    export function lookup(hostname: string, options: LookupAllOptions, callback: (err: NodeJS.ErrnoException, addresses: LookupAddress[]) => void): void;
    export function lookup(hostname: string, options: LookupOptions, callback: (err: NodeJS.ErrnoException, address: string | LookupAddress[], family: number) => void): void;
    export function lookup(hostname: string, callback: (err: NodeJS.ErrnoException, address: string, family: number) => void): void;

    export function lookupService(address: string, port: number, callback: (err: NodeJS.ErrnoException, hostname: string, service: string) => void): void;

    export interface MxRecord {
        priority: number;
        exchange: string;
    }

    export interface NaptrRecord {
        flags: string;
        service: string;
        regexp: string;
        replacement: string;
        order: number;
        preference: number;
    }

    export interface SoaRecord {
        nsname: string;
        hostmaster: string;
        serial: number;
        refresh: number;
        retry: number;
        expire: number;
        minttl: number;
    }

    export interface SrvRecord {
        priority: number;
        weight: number;
        port: number;
        name: string;
    }

    export function resolve(hostname: string, callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
    export function resolve(hostname: string, rrtype: "A", callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
    export function resolve(hostname: string, rrtype: "AAAA", callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
    export function resolve(hostname: string, rrtype: "CNAME", callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
    export function resolve(hostname: string, rrtype: "MX", callback: (err: NodeJS.ErrnoException, addresses: MxRecord[]) => void): void;
    export function resolve(hostname: string, rrtype: "NAPTR", callback: (err: NodeJS.ErrnoException, addresses: NaptrRecord[]) => void): void;
    export function resolve(hostname: string, rrtype: "NS", callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
    export function resolve(hostname: string, rrtype: "PTR", callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
    export function resolve(hostname: string, rrtype: "SOA", callback: (err: NodeJS.ErrnoException, addresses: SoaRecord) => void): void;
    export function resolve(hostname: string, rrtype: "SRV", callback: (err: NodeJS.ErrnoException, addresses: SrvRecord[]) => void): void;
    export function resolve(hostname: string, rrtype: "TXT", callback: (err: NodeJS.ErrnoException, addresses: string[][]) => void): void;
    export function resolve(hostname: string, rrtype: string, callback: (err: NodeJS.ErrnoException, addresses: string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][]) => void): void;

    export function resolve4(hostname: string, callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
    export function resolve6(hostname: string, callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
    export function resolveCname(hostname: string, callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
    export function resolveMx(hostname: string, callback: (err: NodeJS.ErrnoException, addresses: MxRecord[]) => void): void;
    export function resolveNaptr(hostname: string, callback: (err: NodeJS.ErrnoException, addresses: NaptrRecord[]) => void): void;
    export function resolveNs(hostname: string, callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
    export function resolvePtr(hostname: string, callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
    export function resolveSoa(hostname: string, callback: (err: NodeJS.ErrnoException, address: SoaRecord) => void): void;
    export function resolveSrv(hostname: string, callback: (err: NodeJS.ErrnoException, addresses: SrvRecord[]) => void): void;
    export function resolveTxt(hostname: string, callback: (err: NodeJS.ErrnoException, addresses: string[][]) => void): void;

    export function reverse(ip: string, callback: (err: NodeJS.ErrnoException, hostnames: string[]) => void): void;
    export function setServers(servers: string[]): void;

    //Error codes
    export var NODATA: string;
    export var FORMERR: string;
    export var SERVFAIL: string;
    export var NOTFOUND: string;
    export var NOTIMP: string;
    export var REFUSED: string;
    export var BADQUERY: string;
    export var BADNAME: string;
    export var BADFAMILY: string;
    export var BADRESP: string;
    export var CONNREFUSED: string;
    export var TIMEOUT: string;
    export var EOF: string;
    export var FILE: string;
    export var NOMEM: string;
    export var DESTRUCTION: string;
    export var BADSTR: string;
    export var BADFLAGS: string;
    export var NONAME: string;
    export var BADHINTS: string;
    export var NOTINITIALIZED: string;
    export var LOADIPHLPAPI: string;
    export var ADDRGETNETWORKPARAMS: string;
    export var CANCELLED: string;
}
