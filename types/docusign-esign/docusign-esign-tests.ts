import * as docusign from 'docusign-esign';

const oAuth = docusign.ApiClient.OAuth;
const scopes = [oAuth.Scope.SIGNATURE, oAuth.Scope.IMPERSONATION];

interface RequestParams {
    token: string;
    baseUrl: string;
    accountName: string;
    accountId: string;
}

interface AccessToken {
    jwtToken: string;
    tokenType: string;
    expiresIn: number;
}

const apiClient = () => {
    const basePath = 'base/path';
    const oAuthBasePath = 'oauth/path';
    return new docusign.ApiClient({ basePath, oAuthBasePath });
};

const apiClientWithOutConstructorParams = () => {
    return new docusign.ApiClient();
};

const getEnvelope = async (
    envelopeId: string,
    options: { advancedUpdate?: string | undefined; include?: string | undefined },
) => {
    const params = await getDsRequestParams();
    const client = await getClient(params.token);
    const envelopesApi = new docusign.EnvelopesApi(client);

    const results = await envelopesApi.getEnvelope(params.accountId, envelopeId, options);
    return results;
};

const getEnvelopeWithStoredConfiguredClient = async (
    envelopeId: string,
    options: { advancedUpdate?: string | undefined; include?: string | undefined },
) => {
    const params = await getDsRequestParams();
    const client = await getClient(params.token);
    docusign.Configuration.default.setDefaultApiClient(client);
    const envelopesApi = new docusign.EnvelopesApi();

    const results = await envelopesApi.getEnvelope(params.accountId, envelopeId, options);
    return results;
};

const getClient = async (token: string) => {
    const client = apiClient();
    client.addDefaultHeader('Authorization', `Bearer ${token}`);
    return client;
};

const getDsRequestParams = async (): Promise<RequestParams> => {
    const authToken = await getAccessToken();
    const { jwtToken, tokenType, expiresIn } = authToken;
    const cacheExpiration = expiresIn - 300;
    const userInfo = await getUserInfo(jwtToken);
    const { accountId, baseUri, accountName } = userInfo;

    return {
        token: jwtToken,
        baseUrl: baseUri,
        accountName,
        accountId,
    };
};

const getAccessToken = async (): Promise<AccessToken> => {
    const privateKey: Buffer = Buffer.from('read private key file');
    const integratorKey = 'integrator key';
    const apiUserGuid = 'api user id';
    const client = apiClient();
    const results = await client.requestJWTUserToken(integratorKey, apiUserGuid, scopes, privateKey, 3600);

    return {
        jwtToken: results.body.access_token,
        tokenType: results.body.token_type,
        expiresIn: results.body.expires_in,
    };
};

const getUserInfo = async (token: string) => {
    const client = apiClient();
    client.setOAuthBasePath('set oauth base path');
    const results = await client.getUserInfo(token);
    return results.accounts.find((account: { isDefault: string }) => account.isDefault === 'true');
};

const getDocument = async (envelopeId: string, documentId: string, options: docusign.DocumentOptions) => {
    const params = await getDsRequestParams();
    const client = apiClient();
    const envelopesApi = new docusign.EnvelopesApi(client);
    const results = await envelopesApi.getDocument(params.accountId, envelopeId, documentId, options);
    return results;
};
