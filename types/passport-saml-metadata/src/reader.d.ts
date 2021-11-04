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
