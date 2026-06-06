export interface ApiGatewayClientConfig {
    accessKey?: string | undefined;
    secretKey?: string | undefined;
    sessionToken?: string | undefined;
    region?: string | undefined;
    apiKey?: string | undefined;
    invokeUrl: string | undefined;
    service?: string | undefined;
    defaultContentType?: string | undefined;
    defaultAcceptType?: string | undefined;
    systemClockOffset?: number | undefined;
    headers?: Record<string, string | undefined>;
    host?: string | undefined;
}

export interface Response {
    data: unknown;
    status: number;
    statusText: string;
    headers: unknown;
    request?: unknown;
}

export interface ApiGatewayClient {
    invokeApi(
        params: Record<string, unknown>,
        pathTemplate: string,
        method: "GET" | "POST" | "DELETE" | "UPDATE",
        additionalParams?: {
            headers?: { [key: string]: unknown };
            queryParams?: { [key: string]: string | number | boolean };
            timeout?: number;
        },
        body?: string,
    ): Promise<Response>;
}

export const apigClientFactory: {
    newClient(apiGatewayClientConfig: ApiGatewayClientConfig): ApiGatewayClient;
};

export default apigClientFactory;
