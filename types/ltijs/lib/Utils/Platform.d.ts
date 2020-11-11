export interface PlatformInfo {
    family_code: string;
    version: string;
    name: string;
    description: string;
}

export interface PlatformAuthConfig {
    method: string;
    key: string;
}

export interface PlatformConfig {
    url: string;
    name: string;
    clientId: string;
    authenticationEndpoint: string;
    accesstokenEndpoint: string;
    authConfig: PlatformAuthConfig;
}

export interface PlatformContext {
    context: {
        id: string;
        label: string;
        title: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        type: any[];
    };
    resource: {
        title: string;
        id: string;
    };
    path: string;
    user: string;
    deploymentId: string;
    targetLinkUri: string;
    launchPresentation: {
        locale: string;
        document_target: string;
        return_url: string;
    };
    messageType: string;
    version: string;
    createdAt: Date;
    __v: number;
    __id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    custom: any;
}

export interface Platform {
    platformName(name?: string): Promise<string | boolean>;

    platformUrl(url?: string): Promise<string | boolean>;

    platformClientId(clientId?: string): Promise<string | boolean>;

    platformKid(): string;

    platformPublicKey(): Promise<string | false>;

    platformPrivateKey(): Promise<string | false>;

    platformAuthConfig(method: string, key: string): Promise<PlatformAuthConfig | boolean>;

    platformAuthEndpoint(authEndpoint?: string): Promise<string | boolean>;

    platformAccessTokenEndpoint(accesstokenEndpoint?: string): Promise<string | boolean>;

    platformAccessToken(scopes: string): Promise<string | false>;

    remove(): Promise<boolean>;
}
