/**
 * Service Account credentials allow your application to call PDF Services API on behalf of the application itself,
 * or on behalf of an enterprise organization. For getting the credentials,
 * <a href="https://www.adobe.com/go/dcsdks_credentials?ref=getStartedWithServicesSdk">Click Here</a>
 */
export class ServiceAccountCredentials {
    constructor(client_id: any, client_secret: any, private_key: any, organization_id: any, account_id: any);
    clientId: any;
    clientSecret: any;
    privateKey: any;
    organizationId: any;
    accountId: any;
    /**
     * Client Id (API Key)
     */
    getClientId(): any;
    /**
     * Client Secret
     */
    getClientSecret(): any;
    /**
     * Content of the Private Key (PEM format)
     */
    getPrivateKey(): any;
    /**
     * Identifies the organization(format: org_ident@AdobeOrg) that has been configured for access to PDF Services API.
     */
    getOrganizationId(): any;
    /**
     * Account ID(format: id@techacct.adobe.com)
     */
    getAccountId(): any;
    validate(): void;
}
