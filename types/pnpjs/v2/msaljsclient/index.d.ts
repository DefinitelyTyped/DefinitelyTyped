import { Configuration, UserAgentApplication } from "msal";
import { BearerTokenFetchClient, IFetchOptions } from "../common";
/**
 * Modifies the msal libray type Configuration, omitting the "framework" property
 */
export declare type MsalConfiguration = Omit<Configuration, "framework">;
/**
 * Function Binder suitable for creating a factory function used in setup to create MsalClient instances
 *
 * @param config The MSAL configuration object
 * @param scopes The scope this client should request
 */
export declare function MsalClientSetup(config: MsalConfiguration, scopes: string[]): () => MsalClient;
/**
 * Wrapper for MSAL authentication for use in the browser
 */
export declare class MsalClient extends BearerTokenFetchClient {
    scopes: string[];
    app: UserAgentApplication;
    /**
     * Creates a new instance of the MsalClient
     *
     * @param config the MSAL configuration used to create the client. see: https://github.com/AzureAD/microsoft-authentication-library-for-js
     * @param scopes [optional] The AAD Permission scope names this client should request
     * @param app [optional] If supplied will be used instead of creating a new UserAgentApplication specific to this client
     */
    constructor(config: MsalConfiguration, scopes?: string[], app?: UserAgentApplication);
    /**
     * Conducts the fetch opertation against the AAD secured resource
     *
     * @param url Absolute URL for the request
     * @param options Any fetch options passed to the underlying fetch implementation
     */
    fetch(url: string, options: IFetchOptions): Promise<Response>;
    /**
     * Gets an authentication token from the UserAgentApplication
     *
     * @param scopes [optional] The AAD Permission scope names this client should request
     * @description You must define scopes when calling this method, or when constructing the MsalClient instance, or both
     * @todo a way to control the fall back behavior
     */
    getToken(scopes?: string[]): Promise<string>;
}
//# sourceMappingURL=index.d.ts.map