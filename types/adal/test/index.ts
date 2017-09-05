

var endpoints = {
    "https://yourhost/api": "b6a68585-5287-45b2-ba82-383ba1f60932",
};

var config : adal.Config = {
    tenant: "52d4b072-9470-49fb-8721-bc3a1c9912a1", // Optional by default, it sends common
    clientId: "e9a5a8b6-8af7-4719-9821-0deef255f68e", // Required
    endpoints: endpoints  // If you need to send CORS api requests.
};

var auth = new AuthenticationContext(config);

Logging.log = (message: string) => {
    console.log(message);
}

Logging.level = 4;

auth.info("Logging message");

var userName: string = auth.getCachedUser().userName;var postLogoutRedirectUrl = auth.config.postLogoutRedirectUri;
var isValidRequest = auth.getRequestInfo('hash').valid;