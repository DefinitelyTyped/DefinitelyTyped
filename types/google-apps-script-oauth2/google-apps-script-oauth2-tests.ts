// Examples from https://github.com/googleworkspace/apps-script-oauth2

/**
 * Create the OAuth2 service.
 */
function getDriveService() {
    return OAuth2.createService("drive")
        .setAuthorizationBaseUrl("https://accounts.google.com/o/oauth2/auth")
        .setTokenUrl("https://accounts.google.com/o/oauth2/token")
        .setClientId("xxx")
        .setClientSecret("yyy")
        .setCallbackFunction("authCallback")
        .setPropertyStore(PropertiesService.getUserProperties())
        .setScope("https://www.googleapis.com/auth/drive")
        .setParam("login_hint", Session.getActiveUser().getEmail())
        .setParam("access_type", "offline")
        .setParam("approval_prompt", "force");
}

/**
 * Create sample service for Twitter.
 */
function getTwitterService() {
    const userProps = PropertiesService.getUserProperties();
    const clientId = "sampleClientId";
    const clientSecret = "sampleClientSecret";

    return OAuth2.createService("Twitter")
        .setAuthorizationBaseUrl("https://twitter.com/i/oauth2/authorize")
        .setTokenUrl("https://api.twitter.com/2/oauth2/token")
        .setClientId(clientId)
        .setClientSecret(clientSecret)
        .setCallbackFunction("authCallback")
        .setPropertyStore(userProps)
        .setScope("users.read tweet.read offline.access")
        .generateCodeVerifier()
        .setTokenHeaders({
            "Authorization": "Basic " + Utilities.base64Encode(clientId + ":" + clientSecret),
            "Content-Type": "application/x-www-form-urlencoded",
        });
}

/**
 * Create sample service with custom token method.
 */
function getTestClientWithCustomTokenMethod() {
    return OAuth2.createService("TestService")
        .setAuthorizationBaseUrl("https://example.com/auth")
        .setTokenUrl("https://example.com/token")
        .setClientId("sampleClientId")
        .setClientSecret("sampleClientSecret")
        .setCallbackFunction("authCallback")
        .setPropertyStore(PropertiesService.getUserProperties())
        .setTokenMethod("PUT");
}

/**
 * Create sample service with code verifier and S256 code challenge method.
 */
function getTestClientWithAutoCodeVerifierAndS256ChallengeMethod() {
    return OAuth2.createService("TestService")
        .setAuthorizationBaseUrl("https://example.com/auth")
        .setTokenUrl("https://example.com/token")
        .setClientId("sampleClientId")
        .setClientSecret("sampleClientSecret")
        .setCallbackFunction("authCallback")
        .setPropertyStore(PropertiesService.getUserProperties())
        .generateCodeVerifier()
        .setCodeChallengeMethod(GoogleAppsScriptOAuth2.CodeChallengeMethod.S256);
}

/**
 * Create sample service with code verifier and S256 code challenge method.
 */
function getTestClientWithManualCodeVerifierAndPlainChallengeMethod() {
    return OAuth2.createService("TestService")
        .setAuthorizationBaseUrl("https://example.com/auth")
        .setTokenUrl("https://example.com/token")
        .setClientId("sampleClientId")
        .setClientSecret("sampleClientSecret")
        .setCallbackFunction("authCallback")
        .setPropertyStore(PropertiesService.getUserProperties())
        .setCodeVerififer("sampleCodeVerifier")
        .setCodeChallengeMethod(GoogleAppsScriptOAuth2.CodeChallengeMethod.PLAIN);
}

/**
 * Handle the callback.
 */
function authCallback(request: any) {
    const driveService = getDriveService();
    const isAuthorized = driveService.handleCallback(request);
    const storage = driveService.getStorage();
    storage.setValue("isAuthorized", isAuthorized);
    Logger.log(isAuthorized ? "success" : "denied");
}
