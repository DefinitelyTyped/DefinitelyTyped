// Type definitions for non-npm package Node.js 12.19
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ErrnoException } from 'node';

export {};

// Supported getaddrinfo flags.
export const ADDRCONFIG: number;
export const V4MAPPED: number;

export interface LookupOptions {
    family?: number;
    hints?: number;
    all?: boolean;
    verbatim?: boolean;
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

export function lookup(hostname: string, family: number, callback: (err: ErrnoException | null, address: string, family: number) => void): void;
export function lookup(hostname: string, options: LookupOneOptions, callback: (err: ErrnoException | null, address: string, family: number) => void): void;
export function lookup(hostname: string, options: LookupAllOptions, callback: (err: ErrnoException | null, addresses: LookupAddress[]) => void): void;
export function lookup(hostname: string, options: LookupOptions, callback: (err: ErrnoException | null, address: string | LookupAddress[], family: number) => void): void;
export function lookup(hostname: string, callback: (err: ErrnoException | null, address: string, family: number) => void): void;

// NOTE: This namespace provides design-time support for util.promisify. Exported members do not exist at runtime.
export namespace lookup {
    function __promisify__(hostname: string, options: LookupAllOptions): Promise<LookupAddress[]>;
    function __promisify__(hostname: string, options?: LookupOneOptions | number): Promise<LookupAddress>;
    function __promisify__(hostname: string, options: LookupOptions): Promise<LookupAddress | LookupAddress[]>;
}

export function lookupService(address: string, port: number, callback: (err: ErrnoException | null, hostname: string, service: string) => void): void;

export namespace lookupService {
    function __promisify__(address: string, port: number): Promise<{ hostname: string, service: string }>;
}

export interface ResolveOptions {
    ttl: boolean;
}

export interface ResolveWithTtlOptions extends ResolveOptions {
    ttl: true;
}

export interface RecordWithTtl {
    address: string;
    ttl: number;
}

/** @deprecated Use AnyARecord or AnyAaaaRecord instead. */
export type AnyRecordWithTtl = AnyARecord | AnyAaaaRecord;

export interface AnyARecord extends RecordWithTtl {
    type: "A";
}

export interface AnyAaaaRecord extends RecordWithTtl {
    type: "AAAA";
}

export interface MxRecord {
    priority: number;
    exchange: string;
}

export interface AnyMxRecord extends MxRecord {
    type: "MX";
}

export interface NaptrRecord {
    flags: string;
    service: string;
    regexp: string;
    replacement: string;
    order: number;
    preference: number;
}

export interface AnyNaptrRecord extends NaptrRecord {
    type: "NAPTR";
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

export interface AnySoaRecord extends SoaRecord {
    type: "SOA";
}

export interface SrvRecord {
    priority: number;
    weight: number;
    port: number;
    name: string;
}

export interface AnySrvRecord extends SrvRecord {
    type: "SRV";
}

export interface AnyTxtRecord {
    type: "TXT";
    entries: string[];
}

export interface AnyNsRecord {
    type: "NS";
    value: string;
}

export interface AnyPtrRecord {
    type: "PTR";
    value: string;
}

export interface AnyCnameRecord {
    type: "CNAME";
    value: string;
}

export type AnyRecord = AnyARecord |
    AnyAaaaRecord |
    AnyCnameRecord |
    AnyMxRecord |
    AnyNaptrRecord |
    AnyNsRecord |
    AnyPtrRecord |
    AnySoaRecord |
    AnySrvRecord |
    AnyTxtRecord;

export function resolve(hostname: string, callback: (err: ErrnoException | null, addresses: string[]) => void): void;
export function resolve(hostname: string, rrtype: "A", callback: (err: ErrnoException | null, addresses: string[]) => void): void;
export function resolve(hostname: string, rrtype: "AAAA", callback: (err: ErrnoException | null, addresses: string[]) => void): void;
export function resolve(hostname: string, rrtype: "ANY", callback: (err: ErrnoException | null, addresses: AnyRecord[]) => void): void;
export function resolve(hostname: string, rrtype: "CNAME", callback: (err: ErrnoException | null, addresses: string[]) => void): void;
export function resolve(hostname: string, rrtype: "MX", callback: (err: ErrnoException | null, addresses: MxRecord[]) => void): void;
export function resolve(hostname: string, rrtype: "NAPTR", callback: (err: ErrnoException | null, addresses: NaptrRecord[]) => void): void;
export function resolve(hostname: string, rrtype: "NS", callback: (err: ErrnoException | null, addresses: string[]) => void): void;
export function resolve(hostname: string, rrtype: "PTR", callback: (err: ErrnoException | null, addresses: string[]) => void): void;
export function resolve(hostname: string, rrtype: "SOA", callback: (err: ErrnoException | null, addresses: SoaRecord) => void): void;
export function resolve(hostname: string, rrtype: "SRV", callback: (err: ErrnoException | null, addresses: SrvRecord[]) => void): void;
export function resolve(hostname: string, rrtype: "TXT", callback: (err: ErrnoException | null, addresses: string[][]) => void): void;
export function resolve(
    hostname: string,
    rrtype: string,
    callback: (err: ErrnoException | null, addresses: string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][] | AnyRecord[]) => void,
): void;

// NOTE: This namespace provides design-time support for util.promisify. Exported members do not exist at runtime.
export namespace resolve {
    function __promisify__(hostname: string, rrtype?: "A" | "AAAA" | "CNAME" | "NS" | "PTR"): Promise<string[]>;
    function __promisify__(hostname: string, rrtype: "ANY"): Promise<AnyRecord[]>;
    function __promisify__(hostname: string, rrtype: "MX"): Promise<MxRecord[]>;
    function __promisify__(hostname: string, rrtype: "NAPTR"): Promise<NaptrRecord[]>;
    function __promisify__(hostname: string, rrtype: "SOA"): Promise<SoaRecord>;
    function __promisify__(hostname: string, rrtype: "SRV"): Promise<SrvRecord[]>;
    function __promisify__(hostname: string, rrtype: "TXT"): Promise<string[][]>;
    function __promisify__(hostname: string, rrtype: string): Promise<string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][] | AnyRecord[]>;
}

export function resolve4(hostname: string, callback: (err: ErrnoException | null, addresses: string[]) => void): void;
export function resolve4(hostname: string, options: ResolveWithTtlOptions, callback: (err: ErrnoException | null, addresses: RecordWithTtl[]) => void): void;
export function resolve4(hostname: string, options: ResolveOptions, callback: (err: ErrnoException | null, addresses: string[] | RecordWithTtl[]) => void): void;

// NOTE: This namespace provides design-time support for util.promisify. Exported members do not exist at runtime.
export namespace resolve4 {
    function __promisify__(hostname: string): Promise<string[]>;
    function __promisify__(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>;
    function __promisify__(hostname: string, options?: ResolveOptions): Promise<string[] | RecordWithTtl[]>;
}

export function resolve6(hostname: string, callback: (err: ErrnoException | null, addresses: string[]) => void): void;
export function resolve6(hostname: string, options: ResolveWithTtlOptions, callback: (err: ErrnoException | null, addresses: RecordWithTtl[]) => void): void;
export function resolve6(hostname: string, options: ResolveOptions, callback: (err: ErrnoException | null, addresses: string[] | RecordWithTtl[]) => void): void;

// NOTE: This namespace provides design-time support for util.promisify. Exported members do not exist at runtime.
export namespace resolve6 {
    function __promisify__(hostname: string): Promise<string[]>;
    function __promisify__(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>;
    function __promisify__(hostname: string, options?: ResolveOptions): Promise<string[] | RecordWithTtl[]>;
}

export function resolveCname(hostname: string, callback: (err: ErrnoException | null, addresses: string[]) => void): void;
export namespace resolveCname {
    function __promisify__(hostname: string): Promise<string[]>;
}

export function resolveMx(hostname: string, callback: (err: ErrnoException | null, addresses: MxRecord[]) => void): void;
export namespace resolveMx {
    function __promisify__(hostname: string): Promise<MxRecord[]>;
}

export function resolveNaptr(hostname: string, callback: (err: ErrnoException | null, addresses: NaptrRecord[]) => void): void;
export namespace resolveNaptr {
    function __promisify__(hostname: string): Promise<NaptrRecord[]>;
}

export function resolveNs(hostname: string, callback: (err: ErrnoException | null, addresses: string[]) => void): void;
export namespace resolveNs {
    function __promisify__(hostname: string): Promise<string[]>;
}

export function resolvePtr(hostname: string, callback: (err: ErrnoException | null, addresses: string[]) => void): void;
export namespace resolvePtr {
    function __promisify__(hostname: string): Promise<string[]>;
}

export function resolveSoa(hostname: string, callback: (err: ErrnoException | null, address: SoaRecord) => void): void;
export namespace resolveSoa {
    function __promisify__(hostname: string): Promise<SoaRecord>;
}

export function resolveSrv(hostname: string, callback: (err: ErrnoException | null, addresses: SrvRecord[]) => void): void;
export namespace resolveSrv {
    function __promisify__(hostname: string): Promise<SrvRecord[]>;
}

export function resolveTxt(hostname: string, callback: (err: ErrnoException | null, addresses: string[][]) => void): void;
export namespace resolveTxt {
    function __promisify__(hostname: string): Promise<string[][]>;
}

export function resolveAny(hostname: string, callback: (err: ErrnoException | null, addresses: AnyRecord[]) => void): void;
export namespace resolveAny {
    function __promisify__(hostname: string): Promise<AnyRecord[]>;
}

export function reverse(ip: string, callback: (err: ErrnoException | null, hostnames: string[]) => void): void;
export function setServers(servers: ReadonlyArray<string>): void;
export function getServers(): string[];

// Error codes
export const NODATA: string;
export const FORMERR: string;
export const SERVFAIL: string;
export const NOTFOUND: string;
export const NOTIMP: string;
export const REFUSED: string;
export const BADQUERY: string;
export const BADNAME: string;
export const BADFAMILY: string;
export const BADRESP: string;
export const CONNREFUSED: string;
export const TIMEOUT: string;
export const EOF: string;
export const FILE: string;
export const NOMEM: string;
export const DESTRUCTION: string;
export const BADSTR: string;
export const BADFLAGS: string;
export const NONAME: string;
export const BADHINTS: string;
export const NOTINITIALIZED: string;
export const LOADIPHLPAPI: string;
export const ADDRGETNETWORKPARAMS: string;
export const CANCELLED: string;

export class Resolver {
    getServers: typeof getServers;
    setServers: typeof setServers;
    resolve: typeof resolve;
    resolve4: typeof resolve4;
    resolve6: typeof resolve6;
    resolveAny: typeof resolveAny;
    resolveCname: typeof resolveCname;
    resolveMx: typeof resolveMx;
    resolveNaptr: typeof resolveNaptr;
    resolveNs: typeof resolveNs;
    resolvePtr: typeof resolvePtr;
    resolveSoa: typeof resolveSoa;
    resolveSrv: typeof resolveSrv;
    resolveTxt: typeof resolveTxt;
    reverse: typeof reverse;
    cancel(): void;
}

export namespace promises {
    function getServers(): string[];

    function lookup(hostname: string, family: number): Promise<LookupAddress>;
    function lookup(hostname: string, options: LookupOneOptions): Promise<LookupAddress>;
    function lookup(hostname: string, options: LookupAllOptions): Promise<LookupAddress[]>;
    function lookup(hostname: string, options: LookupOptions): Promise<LookupAddress | LookupAddress[]>;
    function lookup(hostname: string): Promise<LookupAddress>;

    function lookupService(address: string, port: number): Promise<{ hostname: string, service: string }>;

    function resolve(hostname: string): Promise<string[]>;
    function resolve(hostname: string, rrtype: "A"): Promise<string[]>;
    function resolve(hostname: string, rrtype: "AAAA"): Promise<string[]>;
    function resolve(hostname: string, rrtype: "ANY"): Promise<AnyRecord[]>;
    function resolve(hostname: string, rrtype: "CNAME"): Promise<string[]>;
    function resolve(hostname: string, rrtype: "MX"): Promise<MxRecord[]>;
    function resolve(hostname: string, rrtype: "NAPTR"): Promise<NaptrRecord[]>;
    function resolve(hostname: string, rrtype: "NS"): Promise<string[]>;
    function resolve(hostname: string, rrtype: "PTR"): Promise<string[]>;
    function resolve(hostname: string, rrtype: "SOA"): Promise<SoaRecord>;
    function resolve(hostname: string, rrtype: "SRV"): Promise<SrvRecord[]>;
    function resolve(hostname: string, rrtype: "TXT"): Promise<string[][]>;
    function resolve(hostname: string, rrtype: string): Promise<string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][] | AnyRecord[]>;

    function resolve4(hostname: string): Promise<string[]>;
    function resolve4(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>;
    function resolve4(hostname: string, options: ResolveOptions): Promise<string[] | RecordWithTtl[]>;

    function resolve6(hostname: string): Promise<string[]>;
    function resolve6(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>;
    function resolve6(hostname: string, options: ResolveOptions): Promise<string[] | RecordWithTtl[]>;

    function resolveAny(hostname: string): Promise<AnyRecord[]>;

    function resolveCname(hostname: string): Promise<string[]>;

    function resolveMx(hostname: string): Promise<MxRecord[]>;

    function resolveNaptr(hostname: string): Promise<NaptrRecord[]>;

    function resolveNs(hostname: string): Promise<string[]>;

    function resolvePtr(hostname: string): Promise<string[]>;

    function resolveSoa(hostname: string): Promise<SoaRecord>;

    function resolveSrv(hostname: string): Promise<SrvRecord[]>;

    function resolveTxt(hostname: string): Promise<string[][]>;

    function reverse(ip: string): Promise<string[]>;

    function setServers(servers: ReadonlyArray<string>): void;

    class Resolver {
        getServers: typeof getServers;
        resolve: typeof resolve;
        resolve4: typeof resolve4;
        resolve6: typeof resolve6;
        resolveAny: typeof resolveAny;
        resolveCname: typeof resolveCname;
        resolveMx: typeof resolveMx;
        resolveNaptr: typeof resolveNaptr;
        resolveNs: typeof resolveNs;
        resolvePtr: typeof resolvePtr;
        resolveSoa: typeof resolveSoa;
        resolveSrv: typeof resolveSrv;
        resolveTxt: typeof resolveTxt;
        reverse: typeof reverse;
        setServers: typeof setServers;
    }
}
