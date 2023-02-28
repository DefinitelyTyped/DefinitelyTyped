import { ServiceAccountCredentials } from './service-account-credentials';
export class ServiceAccountCredentialsBuilder {
    /**
     * Set Client ID (API Key)
     */
    withClientId(clientId: string): ServiceAccountCredentialsBuilder;
    clientId: any;
    /**
     * Set Client Secret
     */
    withClientSecret(clientSecret: string): ServiceAccountCredentialsBuilder;
    clientSecret: any;
    /**
     * Set private key
     */
    withPrivateKey(privateKey: string): ServiceAccountCredentialsBuilder;
    privateKey: string;
    /**
     * Set Organization Id (format: org_ident@AdobeOrg) that has been configured for access to PDF Services API
     */
    withOrganizationId(organizationId: string): ServiceAccountCredentialsBuilder;
    organizationId: any;
    /**
     * Set Account Id (format: id@techacct.adobe.com)
     */
    withAccountId(accountId: string): ServiceAccountCredentialsBuilder;
    accountId: any;
    /**
     * Sets Service Account Credentials using the JSON credentials file path. All the keys in the JSON
     * structure are optional.
     * <p>
     * JSON structure:
     * <pre>
     * {
     *   "client_credentials": {
     *     "client_id": "CLIENT_ID",
     *     "client_secret": "CLIENT_SECRET"
     *   },
     *   "service_account_credentials": {
     *     "organization_id": "org_ident@AdobeOrg",
     *     "account_id": "id@techacct.adobe.com",
     *     "private_key_file": "private.key"
     *   }
     * }
     * </pre>
     * private_key_file is the path of private key file. It will be looked up in the classpath and the
     * directory of JSON credentials file.
     */
    fromFile(credentialsFilePath: string): ServiceAccountCredentialsBuilder;
    imsBaseUri: any;
    claim: any;
    opsCreateUri: any;
    /**
     * Returns a new {@link ServiceAccountCredentials} instance built from the current state of this builder.
     */
    build(): ServiceAccountCredentials;
}
