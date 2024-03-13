export interface ToStringOpts {
    format?: "auto" | "v4" | "v4-mapped" | "v6" | undefined;
    zeroElide?: boolean | undefined;
    zeroPad?: boolean | undefined;
}

export interface Addr {
    kind: () => "ipv4" | "ipv6";
    toString: (opts?: ToStringOpts) => string;
    toBuffer: (buff?: Uint8Array) => Uint8Array;
    toLong: () => number;
    offset: (num: number) => Addr | null;
    compare: (other: string | Addr) => number;
    clone: () => Addr;
    and: (input: string | Addr) => Addr;
    or: (input: string | Addr) => Addr;
    not: () => Addr;
}

export interface AddrRange {
    contains: (input: string | Addr) => boolean;
    first: () => Addr;
    last: () => Addr;
}

export interface CIDR extends AddrRange {
    broadcast: () => Addr;
    compare: (other: string | CIDR) => number;
    prefixLength: (format?: "auto" | "v4" | "v6") => number;
    address: () => Addr;
    toString: (opts?: ToStringOpts) => string;
}

export function compare(addr1: string | Addr, addr2: string | Addr): number;

export function compareCIDR(cidr1: string | CIDR, cidr2: string | CIDR): number;

export function createAddrRange(begin: string | Addr, end: string | Addr): AddrRange;

export function createCIDR(addr: string | Addr, len?: number): CIDR;

export function parse(input: string | number | Addr): Addr;
