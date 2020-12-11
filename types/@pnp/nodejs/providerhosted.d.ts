import { ProviderHostedConfigurationOptions } from "./types";
export declare class ProviderHostedRequestContext {
    private siteUrl;
    private clientId;
    private clientSecret;
    private realm;
    private refreshToken;
    private stsUri;
    private cacheKey;
    constructor(siteUrl: string, clientId: string, clientSecret: string, realm: string, refreshToken: string, stsUri: string, cacheKey: string);
    static create(siteUrl: string, clientId: string, clientSecret: string, spAppToken: string): Promise<ProviderHostedRequestContext>;
    getAddInOnlyConfig(): Promise<ProviderHostedConfigurationOptions>;
    getUserConfig(): Promise<ProviderHostedConfigurationOptions>;
    private getConfigOptions;
}
//# sourceMappingURL=providerhosted.d.ts.map