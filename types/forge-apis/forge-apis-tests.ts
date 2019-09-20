import { AuthClientTwoLegged, AuthClientThreeLegged, BucketsApi, HubsApi, FoldersApi, DerivativesApi } from 'forge-apis';

const authClientTwoLegged: AuthClientTwoLegged = new AuthClientTwoLegged("", "", []);

const authClientThreeLegged: AuthClientThreeLegged = new AuthClientThreeLegged("", "", "", []);

const bucketsApi: BucketsApi = new BucketsApi();

const hubsApi: HubsApi = new HubsApi();

const foldersApi: FoldersApi = new FoldersApi();

const derivativesApi: DerivativesApi = new DerivativesApi();
