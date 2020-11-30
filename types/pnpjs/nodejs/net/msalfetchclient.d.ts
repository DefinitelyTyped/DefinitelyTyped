import { AuthenticationResult, Configuration } from "@azure/msal-node";
import { IHttpClientImpl } from "../../common";
export declare class MsalFetchClient implements IHttpClientImpl {
    private _scopes;
    private confidentialClient;
    constructor(_config: Configuration, _scopes?: string[]);
    fetch(url: string, options: any): Promise<Response>;
    acquireToken(scopes?: string[]): Promise<AuthenticationResult>;
}
//# sourceMappingURL=msalfetchclient.d.ts.map