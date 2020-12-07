import { IHttpClientImpl } from "../../common";
import { SPOAuthEnv, AuthToken } from "../types";
/**
 * Fetch client for use within nodejs, requires you register a client id and secret with app only permissions
 */
export declare class SPFetchClient implements IHttpClientImpl {
    siteUrl: string;
    protected _clientId: string;
    protected _clientSecret: string;
    authEnv: SPOAuthEnv;
    protected _realm: string;
    protected _fetchClient: IHttpClientImpl;
    protected token: AuthToken | null;
    constructor(siteUrl: string, _clientId: string, _clientSecret: string, authEnv?: SPOAuthEnv, _realm?: string, _fetchClient?: IHttpClientImpl);
    fetch(url: string, options?: any): Promise<Response>;
    getAuthHostUrl(env: SPOAuthEnv): string;
    private getRealm;
    private getAuthUrl;
}
//# sourceMappingURL=spfetchclient.d.ts.map