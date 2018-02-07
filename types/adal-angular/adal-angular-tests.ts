import AuthenticationContext, {
    AuthenticationContextOptions,
    TokenCallback,
    UserCallback
} from "adal-angular";

const onLogin: TokenCallback = (errorDescription, idToken, error) => {
    if (error) {
        console.error(errorDescription, error);
        return;
    }
    if (config.popUp) {
        authenticationContext.getUser(onUser);
    }
};

const onToken: TokenCallback = (errorDesc, token, error) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('Making request with token:', token);
};

const onUser: UserCallback = (error, user) => {
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

const config: AuthenticationContextOptions = {
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

if (authenticationContext.isCallback(window.location.hash)) {
    authenticationContext.handleWindowCallback();
} else if (authenticationContext.getCachedUser() == null) {
    authenticationContext.login();
} else {
    acquireAnAccessToken();
}

setTimeout(() => {
    authenticationContext.logOut();
}, 60000);
