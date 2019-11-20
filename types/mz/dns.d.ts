// Modified from the node.js definitions.
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/dns.d.ts

import {
	LookupAddress,
	LookupAllOptions,
	LookupOneOptions,
	LookupOptions,
	ResolveOptions,
	ResolveWithTtlOptions,
	AnyRecord,
	MxRecord,
	NaptrRecord,
	SoaRecord,
	SrvRecord,
	RecordWithTtl,
} from "dns";
export * from "dns";

// lookup:
export function lookup(
	hostname: string,
	family: number,
	callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void
): void;
export function lookup(
	hostname: string,
	// `options` can't be mixed into `family`
	// tslint:disable-next-line: unified-signatures
	options: LookupOneOptions,
	callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void
): void;
export function lookup(
	hostname: string,
	options: LookupAllOptions,
	callback: (err: NodeJS.ErrnoException | null, addresses: LookupAddress[]) => void
): void;
export function lookup(
	hostname: string,
	options: LookupOptions,
	callback: (err: NodeJS.ErrnoException | null, address: string | LookupAddress[], family: number) => void
): void;
export function lookup(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void
): void;

export function lookup(hostname: string, options: LookupAllOptions): Promise<LookupAddress[]>;
export function lookup(hostname: string, options?: LookupOneOptions | number): Promise<[string, number]>;
export function lookup(hostname: string, options: LookupOptions): Promise<[string, number] | LookupAddress[]>;

export function lookupService(
	address: string,
	port: number,
	callback: (err: NodeJS.ErrnoException | null, hostname: string, service: string) => void
): void;
export function lookupService(address: string, port: number): Promise<[string, string]>;

// resolve:
export function resolve(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
): void;
export function resolve(
	hostname: string,
	rrtype: "A" | "AAAA" | "CNAME" | "NS" | "PTR",
	callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
): void;
export function resolve(
	hostname: string,
	rrtype: "ANY",
	callback: (err: NodeJS.ErrnoException | null, addresses: AnyRecord[]) => void
): void;
export function resolve(
	hostname: string,
	rrtype: "MX",
	callback: (err: NodeJS.ErrnoException | null, addresses: MxRecord[]) => void
): void;
export function resolve(
	hostname: string,
	rrtype: "NAPTR",
	callback: (err: NodeJS.ErrnoException | null, addresses: NaptrRecord[]) => void
): void;
export function resolve(
	hostname: string,
	rrtype: "SOA",
	callback: (err: NodeJS.ErrnoException | null, addresses: SoaRecord) => void
): void;
export function resolve(
	hostname: string,
	rrtype: "SRV",
	callback: (err: NodeJS.ErrnoException | null, addresses: SrvRecord[]) => void
): void;
export function resolve(
	hostname: string,
	rrtype: "TXT",
	callback: (err: NodeJS.ErrnoException | null, addresses: string[][]) => void
): void;
export function resolve(
	hostname: string,
	rrtype: string,
	callback: (
		err: NodeJS.ErrnoException | null,
		addresses: string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][] | AnyRecord[]
	) => void
): void;

export function resolve(hostname: string, rrtype?: "A" | "AAAA" | "CNAME" | "NS" | "PTR"): Promise<string[]>;
export function resolve(hostname: string, rrtype: "ANY"): Promise<AnyRecord[]>;
export function resolve(hostname: string, rrtype: "MX"): Promise<MxRecord[]>;
export function resolve(hostname: string, rrtype: "NAPTR"): Promise<NaptrRecord[]>;
export function resolve(hostname: string, rrtype: "SOA"): Promise<SoaRecord>;
export function resolve(hostname: string, rrtype: "SRV"): Promise<SrvRecord[]>;
export function resolve(hostname: string, rrtype: "TXT"): Promise<string[][]>;
export function resolve(
	hostname: string,
	rrtype: string
): Promise<string[] | MxRecord[] | NaptrRecord[] | SoaRecord | SrvRecord[] | string[][] | AnyRecord[]>;

// resolve4:
export function resolve4(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
): void;
export function resolve4(
	hostname: string,
	options: ResolveWithTtlOptions,
	callback: (err: NodeJS.ErrnoException | null, addresses: RecordWithTtl[]) => void
): void;
export function resolve4(
	hostname: string,
	options: ResolveOptions,
	callback: (err: NodeJS.ErrnoException | null, addresses: string[] | RecordWithTtl[]) => void
): void;

export function resolve4(hostname: string): Promise<string[]>;
export function resolve4(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>;
export function resolve4(hostname: string, options?: ResolveOptions): Promise<string[] | RecordWithTtl[]>;

// resolve6:
export function resolve6(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
): void;
export function resolve6(
	hostname: string,
	options: ResolveWithTtlOptions,
	callback: (err: NodeJS.ErrnoException | null, addresses: RecordWithTtl[]) => void
): void;
export function resolve6(
	hostname: string,
	options: ResolveOptions,
	callback: (err: NodeJS.ErrnoException | null, addresses: string[] | RecordWithTtl[]) => void
): void;

export function resolve6(hostname: string): Promise<string[]>;
export function resolve6(hostname: string, options: ResolveWithTtlOptions): Promise<RecordWithTtl[]>;
export function resolve6(hostname: string, options?: ResolveOptions): Promise<string[] | RecordWithTtl[]>;

export function resolveCname(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
): void;
export function resolveCname(hostname: string): Promise<string[]>;

export function resolveMx(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, addresses: MxRecord[]) => void
): void;
export function resolveMx(hostname: string): Promise<MxRecord[]>;

export function resolveNaptr(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, addresses: NaptrRecord[]) => void
): void;
export function resolveNaptr(hostname: string): Promise<NaptrRecord[]>;

export function resolveNs(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
): void;
export function resolveNs(hostname: string): Promise<string[]>;

export function resolvePtr(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, addresses: string[]) => void
): void;
export function resolvePtr(hostname: string): Promise<string[]>;

export function resolveSoa(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, address: SoaRecord) => void
): void;
export function resolveSoa(hostname: string): Promise<SoaRecord>;

export function resolveSrv(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, addresses: SrvRecord[]) => void
): void;
export function resolveSrv(hostname: string): Promise<SrvRecord[]>;

export function resolveTxt(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, addresses: string[][]) => void
): void;
export function resolveTxt(hostname: string): Promise<string[][]>;

export function resolveAny(
	hostname: string,
	callback: (err: NodeJS.ErrnoException | null, addresses: AnyRecord[]) => void
): void;
export function resolveAny(hostname: string): Promise<AnyRecord[]>;

export function reverse(ip: string, callback: (err: NodeJS.ErrnoException | null, domains: string[]) => void): void;
export function reverse(ip: string): Promise<string[]>;
