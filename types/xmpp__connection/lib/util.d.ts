import { URL } from 'url';

export function parseURI(URI: string | URL): ParsedURI;
export function parseHost(host: string): ParsedHost;
export function parseService(service: string): ParsedService;

export interface ParsedHost {
    port: string;
    hostname: string;
}

export interface Protocol {
    protocol: string;
}

export type ParsedURI = ParsedHost & Protocol;
export type ParsedService = ParsedHost & Partial<Protocol>;
