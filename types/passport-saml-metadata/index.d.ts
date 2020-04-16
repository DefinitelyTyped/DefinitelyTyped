// Type definitions for passport-saml-metadata 2.2
// Project: https://github.com/compwright/passport-saml-metadata#readme
// Definitions by: Gabriel Fournier <https://github.com/carboneater>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import { SamlConfig } from "passport-saml";

export function claimsToCamelCase(claims: any, claimSchema: any): any;

export interface FetchAxiosConfig {
    backupStore: Map<string, string>;
    responseType: string;
    timeout: number;
}
export function fetch(config: {
    client?: {get(url: string, params?: Partial<FetchAxiosConfig>): Promise<{data: string}>};
    url: string;
} & Partial<FetchAxiosConfig>): Promise<MetadataReader>;

export interface MetadataConstructorOptions {
    authnRequestBinding: string;
    throwExceptions: boolean;
}
export class MetadataReader {
    constructor(metadata: string, options?: Partial<MetadataConstructorOptions>);
    get claimSchema(): {[name: string]: { camelCase: string; description: string; name: string; }};
    get encryptionCert(): string|undefined;
    get encryptionCerts(): string[];
    get identifierFormat(): string|undefined;
    get identityProviderUrl(): string|undefined;
    get logoutUrl(): string|undefined;
    get signingCert(): string|undefined;
    get signingCerts(): string[];
}

export function metadata(config: SamlConfig): (() => void);

export function toPassportConfig(reader?: MetadataReader, options?: { multipleCerts: boolean }): SamlConfig;
