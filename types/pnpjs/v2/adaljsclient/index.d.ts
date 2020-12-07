import { BearerTokenFetchClient, IFetchOptions, ISPFXContext, SPFxAdalClient } from "../common";
/**
 * Azure AD Client for use in the browser
 */
export declare class AdalClient extends BearerTokenFetchClient {
    clientId: string;
    tenant: string;
    redirectUri: string;
    /**
     * Our auth context
     */
    private static _authContext;
    /**
     * Callback used by the adal auth system
     */
    private _displayCallback;
    /**
     * Promise used to ensure the user is logged in
     */
    private _loginPromise;
    /**
     * Creates a new instance of AdalClient
     * @param clientId Azure App Id
     * @param tenant Office 365 tenant (Ex: {tenant}.onmicrosoft.com)
     * @param redirectUri The redirect url used to authenticate the
     */
    constructor(clientId: string, tenant: string, redirectUri: string);
    /**
     * Creates a new AdalClient using the values of the supplied SPFx context (requires SPFx >= 1.6)
     *
     * @param spfxContext Current SPFx context
     * @description Using this method requires that the features described in this article
     * https://docs.microsoft.com/en-us/sharepoint/dev/spfx/use-aadhttpclient are activated in the tenant.
     */
    static fromSPFxContext(spfxContext: ISPFXContext | any): SPFxAdalClient;
    /**
     * Conducts the fetch opertation against the AAD secured resource
     *
     * @param url Absolute URL for the request
     * @param options Any fetch options passed to the underlying fetch implementation
     */
    fetch(url: string, options: IFetchOptions): Promise<Response>;
    /**
     * Gets a token based on the current user
     *
     * @param resource The resource for which we are requesting a token
     */
    getToken(resource: string): Promise<string>;
    /**
     * Ensures we have created and setup the adal AuthenticationContext instance
     */
    private ensureAuthContext;
    /**
     * Ensures the current user is logged in
     */
    private login;
}
//# sourceMappingURL=index.d.ts.map