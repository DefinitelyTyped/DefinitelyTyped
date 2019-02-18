import { ApiClient } from "purecloud-platform-client-v2";

async function run() {
  ApiClient.instance.setEnvironment('mypurecloud.ie')

  ApiClient.instance.setAccessToken('test-token')

  await ApiClient.instance.loginImplicitGrant('test-token', 'mypurecloud.ie/my-app/oauth-redirect', { state: 'my state' });
  await ApiClient.instance.loginImplicitGrant('test-token', 'mypurecloud.ie/my-app/oauth-redirect');

  await ApiClient.instance.loginClientCredentialsGrant('client-id', 'client-secret');

  ApiClient.instance.setDebugLog(() => {}, 25);

  ApiClient.instance.setReturnExtendedResponses(true);
}
