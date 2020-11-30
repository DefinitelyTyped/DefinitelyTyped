export interface ISPFXGraphHttpClient {
    fetch(url: string, configuration: any, options: any): Promise<Response>;
}
export interface ISPFXContext {
    aadTokenProviderFactory?: {
        getTokenProvider(): Promise<{
            getToken(resource: string): Promise<string>;
        }>;
    };
    msGraphClientFactory?: {
        getClient: () => Promise<any>;
    };
    pageContext: {
        web: {
            absoluteUrl: string;
        };
    };
}
//# sourceMappingURL=spfxcontextinterface.d.ts.map