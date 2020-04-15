// Type definitions for passport-saml-metadata 2.2
// Project: https://github.com/compwright/passport-saml-metadata#readme
// Definitions by: Gabriel Fournier <https://github.com/carboneater>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import { SamlConfig } from "passport-saml";

export function claimsToCamelCase(claims: any, claimSchema: any): any;

interface FetchAxiosConfig {
    backupStore: Map<string, string>;
    responseType: string;
    timeout: number;
}
export function fetch<
    T extends FetchAxiosConfig = FetchAxiosConfig,
>(config: {
    client?: {get(url: string, params?: Partial<T>): Promise<{data: string}>};
    url: string;
} & Partial<T>): Promise<MetadataReaderInstance>;

interface MetadataReaderInstance {
    readonly claimSchema: {[name: string]: { camelCase: string; description: string; name: string; }};
    readonly encryptionCert?: string;
    readonly encryptionCerts?: string[];
    readonly identifierFormat?: string;
    readonly identityProviderUrl?: string;
    readonly logoutUrl?: string;
    readonly signingCert?: string;
    readonly signingCerts?: string[];
}

interface MetadataConstructorOptions {
    authnRequestBinding: string;
    throwExceptions: boolean;
}
declare class MetadataReader {
    constructor(metadata: string, options?: Partial<MetadataConstructorOptions>);
    get claimSchema(): {[name: string]: { camelCase: string; description: string; name: string; }};
}

export function metadata(config: SamlConfig): (() => void);

export function toPassportConfig(reader?: MetadataReaderInstance, options?: { multipleCerts: boolean }): SamlConfig;
