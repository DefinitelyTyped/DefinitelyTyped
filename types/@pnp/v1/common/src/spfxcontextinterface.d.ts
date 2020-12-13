export interface ISPFXGraphHttpClient {
    fetch(url: string, configuration: any, options: any): Promise<Response>;
}
export interface ISPFXContext {
    aadTokenProviderFactory: {
        getTokenProvider(): Promise<{
            getToken(resource: string): Promise<string>;
        }>;
    };
    graphHttpClient: ISPFXGraphHttpClient;
    pageContext: {
        aadInfo: {
            tenantId: {
                toString(): string;
            };
        };
        legacyPageContext: {
            aadTenantId: string;
            msGraphEndpointUrl: string;
        };
        web: {
            absoluteUrl: string;
        };
    };
}
