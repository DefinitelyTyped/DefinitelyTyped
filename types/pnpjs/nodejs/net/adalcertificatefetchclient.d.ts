import { TokenResponse } from "adal-node";
import { IHttpClientImpl } from "../../common";
/**
 *
 * Creates a fetch client that will aquire an access token using the client credentials
 * flow with a certificate as the credentials.  Used for app only or server-to-server api
 * requests.
 *
 * See https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-oauth2-client-creds-grant-flow#service-to-service-access-token-request
 */
export declare class AdalCertificateFetchClient implements IHttpClientImpl {
    private _tenant;
    private _clientId;
    private _thumbprint;
    private _privateKey;
    private _resource;
    private _authority;
    protected _fetchClient: IHttpClientImpl;
    private _authContext;
    /**
     *
     * @param _tenant - Azure AD tenant id (guid)
     * @param _clientId - Client Id from Azure AD app registration
     * @param _thumbprint - Thumbprint of the client certificate
     * @param _privateKey - The private key for the client certificate used to sign requests
     * @param _resource - The resource the application is requesting access to i.e. https://graph.microsoft.com, https://<tenant>.sharepoint.com, etc
     * @param _authority - OAuth 2 authority.  Defaults to https://login.windows.net as is the authority in most cases
     * @param _fetchClient - The fetch client implementation to use when making HTTP request.  Defautls to NodeFetchClient to provide transient retries.
     */
    constructor(_tenant: string, _clientId: string, _thumbprint: string, _privateKey: string, _resource?: string, _authority?: string, _fetchClient?: IHttpClientImpl);
    fetch(url: string, options?: any): Promise<Response>;
    acquireToken(): Promise<TokenResponse>;
}
//# sourceMappingURL=adalcertificatefetchclient.d.ts.map