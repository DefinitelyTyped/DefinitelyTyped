import AuthenticationContext = require("adal-angular");

const onLogin: AuthenticationContext.TokenCallback = (errorDescription, idToken, error) => {
    if (error) {
        console.error(errorDescription, error);
        return;
    }
    if (config.popUp) {
        authenticationContext.getUser(onUser);
    }
};

const onToken: AuthenticationContext.TokenCallback = (errorDesc, token, error) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('Making request with token:', token);
};

const onUser: AuthenticationContext.UserCallback = (error, user) => {
    if (error) {
        console.error(error);
        return;
    }
    acquireAnAccessToken();
};

const acquireAnAccessToken = () => {
    const resourceId = "https://graph.microsoft.net";
    authenticationContext.acquireToken(
        resourceId,
        (errorDesc, token, error) => {
            if (error) {
                if (config.popUp) {
                    authenticationContext.acquireTokenPopup(
                        resourceId,
                        null,
                        null,
                        onToken
                    );
                } else {
                    authenticationContext.acquireTokenRedirect(
                        resourceId,
                        null,
                        null
                    );
                }
            } else {
                onToken(errorDesc, token, error);
            }
        }
    );
};

const config: AuthenticationContext.Options = {
    clientId: "7cee0f68-5051-41f6-9e45-80463d21d65d",
    redirectUri: "http://localhost:16969/",
    instance: "https://login.microsoftonline.com/",
    tenant: "contoso.onmicrosoft.com",
    extraQueryParameter: "nux=1",
    correlationId: "123",
    popUp: true,
    cacheLocation: "localStorage",
    callback: onLogin
};

const authenticationContext = new AuthenticationContext(config);
window.Logging.level = authenticationContext.CONSTANTS.LOGGING_LEVEL.ERROR;

if (authenticationContext.isCallback(window.location.hash)) {
    authenticationContext.handleWindowCallback();
} else if (authenticationContext.getCachedUser() == null) {
    authenticationContext.login();
} else {
    acquireAnAccessToken();
}

const injectedContext = AuthenticationContext.inject({
    clientId: "7cee0f68-5051-41f6-9e45-80463d21d65d",
});
injectedContext.handleWindowCallback();

setTimeout(() => {
    authenticationContext.logOut();
}, 60000);
