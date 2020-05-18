// Type definitions for ip6addr 0.2
// Project: git@github.com:kryptoslogic/DefinitelyTyped.git
// Definitions by: Vít Stanislav <https://github.com/slaweet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface ToStringOpts {
  format?: 'auto' | 'v4' | 'v4-mapped' | 'v6';
  zeroElide?: boolean;
  zeroPad?: boolean;
}

export interface Addr {
  kind: () => 'ipv4' | 'ipv6';
  toString: (opts?: ToStringOpts) => string;
  toBuffer: (buff?: Uint8Array) => Uint8Array;
  toLong: () => number;
  offset: (num: number) => Addr | null;
  compare: (other: Addr) => number;
}

export interface AddrRange {
  contains: (input: string) => boolean;
  first: () => Addr;
  last: () => Addr;
}

export interface CIDR {
  contains: (input: string) => boolean;
  first: () => Addr;
  last: () => Addr;
  broadcast: () => Addr;
  compare: (other: CIDR) => number;
  prefixLength: () => number;
  address: () => Addr;
  toString: (opts?: ToStringOpts) => string;
}

export function parse(cidr: string): Addr;

export function createCIDR(cidr: string, plen?: number): CIDR;

export function createAddrRange(first: string, last: string): AddrRange;

export function compare(addr1: string, addr2: string): number;

export function compareCIDR(cidr1: string, cidr2: string): number;
