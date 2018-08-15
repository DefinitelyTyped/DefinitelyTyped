// Type definitions for mz
// Project: https://github.com/normalize/mz
// Definitions by: Thomas Hickman <https://github.com/ThomasHickman>, Ron Buckton <https://github.com/rbuckton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Modified from the node.js definitions https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/node/node.d.ts

/// <reference types="node" />

import * as dns from "dns";
export * from "dns";

export function lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) => void): void;
export function lookup(domain: string, callback: (err: Error, address: string, family: number) => void): void;
export function lookup(domain: string, family?: number): Promise<[string, number]>;

export function resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) => void): void;
export function resolve(domain: string, callback: (err: Error, addresses: string[]) => void): void;
export function resolve(domain: string, rrtype?: string): Promise<string[]>;

export function resolve4(domain: string, callback: (err: Error, addresses: string[]) => void): void;
export function resolve4(domain: string): Promise<string[]>;

export function resolve6(domain: string, callback: (err: Error, addresses: string[]) => void): void;
export function resolve6(domain: string): Promise<string[]>;

export function resolveMx(domain: string, callback: (err: Error, addresses: dns.MxRecord[]) => void): void;
export function resolveMx(domain: string): Promise<dns.MxRecord[]>;

export function resolveTxt(domain: string, callback: (err: Error, addresses: string[]) => void): void;
export function resolveTxt(domain: string): Promise<string[]>;

export function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) => void): void;
export function resolveSrv(domain: string): Promise<string[]>;

export function resolveNs(domain: string, callback: (err: Error, addresses: string[]) => void): void;
export function resolveNs(domain: string): Promise<string[]>;

export function resolveCname(domain: string, callback: (err: Error, addresses: string[]) => void): void;
export function resolveCname(domain: string): Promise<string[]>;

export function reverse(ip: string, callback: (err: Error, domains: string[]) => void): void;
export function reverse(ip: string): Promise<string[]>;