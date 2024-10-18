export function add(domain: string | RegExp, ip: string): void;
export function remove(domain: string | RegExp, ip?: string): void;
export function clear(): void;
export var domains: domainList;

export type domainList = Array<{ source: string | RegExp; domain: RegExp; ip: string }>;
