export = OpenIdProvider;
declare function OpenIdProvider(): void;
declare class OpenIdProvider {
    issuer: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userInfoEndpoint: string;
    introspectionEndpoint: string;
    revocationEndpoint: string;
    deviceAuthorizationEndpoint: string;
    grantTypesSupported: string[];
    claimsSupported: string[];
    responseTypesSupported: string[];
    responseModesSupported: string[];
    scopesSupported: string[];
    idTokenSigningAlgValuesSupported: string[];
    userInfoSigningAlgValuesSupported: string[];
    jwks: string;
    jwk(kid: string): string;
    getSigningKey(kid: string): CryptoPKey;
    newOpenIdClient(
        options?: import('./OpenIdClient').OpenIdClientConstructorOptions
    ): import('./OpenIdClient');
    newOAuth2Client(
        options?: import('../oauth2/OAuth2Client').OAuth2ClientConstructorOptions
    ): import('../oauth2/OAuth2Client');
}
declare namespace OpenIdProvider {
    export {
        discover,
        fromConfig,
        signSupportAccountProvider,
        verifySupportAccountProvider,
        CryptoPKey,
        DBKey,
        DataSet,
        ProviderMetadata,
    };
}
declare function discover(discoverUri: string): ProviderMetadata;
declare function fromConfig(key: DBKey): OpenIdProvider;
declare function signSupportAccountProvider(ds: DataSet, privateKey: string): string;
declare function verifySupportAccountProvider(ds: DataSet): boolean;
type CryptoPKey = import('../crypto/CryptoPKey');
type DBKey = import('../dbkey/DBKey');
type DataSet = import('../dataset/DataSet');
interface ProviderMetadata {
    issuer: string;
    authorizationEndpoint: string;
    userInfoEndpoint: string;
    tokenEndpoint: string;
    introspectionEndpoint: string;
    revocationEndpoint: string;
    deviceAuthorizationEndpoint: string;
    grantTypesSupported: string[];
    responseTypesSupported: string[];
    responseModesSupported: string[];
    scopesSupported: string[];
    idTokenSigningAlgValuesSupported: string[];
    userInfoSigningAlgValuesSupported: string[];
    claimsSupported: string[];
    jwks: string;
}
