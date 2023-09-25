// Examples from https://github.com/googlesamples/apps-script-oauth2

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
 * Handle the callback.
 */
function authCallback(request: any) {
    const driveService = getDriveService();
    const isAuthorized = driveService.handleCallback(request);
    const storage = driveService.getStorage();
    storage.setValue("isAuthorized", isAuthorized);
    Logger.log(isAuthorized ? "success" : "denied");
}
