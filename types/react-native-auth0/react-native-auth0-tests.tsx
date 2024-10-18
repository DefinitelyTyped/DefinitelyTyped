import Auth0, {
    Auth0Provider,
    AuthorizeOptions,
    AuthorizeParams,
    BaseError,
    ClearSessionParams,
    Credentials,
    LocalAuthenticationStrategy,
    useAuth0,
} from "react-native-auth0";

const auth0 = new Auth0({
    domain: "definitely-typed",
    clientId: "definitely-typed",
});

auth0.auth.createUser({
    email: "me@example.com",
    username: "johndoe",
    password: "password",
    connection: "db-connection",
});

auth0.auth.authorizeUrl({
    responseType: "json",
    redirectUri: "http://localhost:3000",
    state: "my-state",
});

auth0.auth.exchange({
    code: "my-code",
    redirectUri: "http://localhost:3000",
    verifier: "verifier",
});

auth0.auth.exchangeNativeSocial({
    subjectToken: "a subject token",
    subjectTokenType: "a subject token type",
});

auth0.auth.exchangeNativeSocial({
    subjectToken: "a subject token",
    subjectTokenType: "a subject token type",
    userProfile: {
        name: {
            firstName: "John",
            lastName: "Smith",
        },
    },
    audience: "http://myapi.com",
    scope: "openid",
});

auth0.auth.logoutUrl({
    federated: true,
    clientId: "client-id",
    returnTo: "http://localhost:3000",
});

auth0.auth
    .passwordRealm({
        username: "me@example.com",
        password: "password",
        realm: "realm",
        audience: "user-info",
    })
    .then(res => {
        if (res.refreshToken) {
            return res.refreshToken;
        }
        return res.accessToken;
    });

auth0.auth
    .refreshToken({
        refreshToken: "refresh-token",
        scope: "openid",
        appId: "Mobile",
    })
    .then(res => res);

auth0.auth.resetPassword({
    email: "me@example.com",
    connection: "db-connection",
});

auth0.auth.revoke({
    refreshToken: "refresh-token",
});

auth0.auth
    .userInfo({
        token: "token",
    })
    .then(userInfo => userInfo);

auth0.webAuth.authorize({
    state: "state",
    nonce: "nonce",
    scope: "openid",
    language: "en",
    prompt: "login",
    organization: "orgId",
});

auth0.webAuth.authorize({
    state: "state",
    nonce: "nonce",
    scope: "openid",
    max_age: 10,
});

// handle additional options object
auth0.webAuth.authorize(
    {
        state: "state",
        nonce: "nonce",
        scope: "openid",
        language: "en",
        prompt: "login",
    },
    {
        ephemeralSession: true,
        customScheme: "customUrlScheme",
    },
);

// additional options with incorrect values
auth0.webAuth.authorize(
    {
        state: "state",
        nonce: "nonce",
        scope: "openid",
        language: "en",
        prompt: "login",
    },
    {
        // @ts-expect-error
        incorrectValue: true,
    },
);

auth0.webAuth
    .authorize({
        state: "state",
        nonce: "nonce",
        scope: "openid",
        language: "en",
        prompt: "login",
    })
    .then(credentials => credentials.accessToken);

auth0.webAuth
    .authorize({
        state: "state",
        nonce: "nonce",
        scope: "openid",
        language: "en",
        prompt: "login",
    })
    // @ts-expect-error
    .then(credentials => credentials.doesNotExist);

auth0.webAuth.authorize({
    state: "state",
    nonce: "nonce",
    scope: "openid",
    language: "en",
    prompt: "login",
    customParam1: "MyValue", // User defined custom string parameter
    customParam2: 9001, // User defined custom number parameter
});

auth0.webAuth.clearSession({ federated: false });
auth0.webAuth.clearSession({ federated: true, customScheme: "customUrlScheme" }, { skipLegacyListener: false });
auth0.webAuth.clearSession();

auth0.users("token").getUser({ id: "userId" });

auth0.users("token").patchUser<{ firstName: string; lastName: string }>({
    id: "userId",
    metadata: { firstName: "John", lastName: "Dow" },
});

auth0.auth.passwordlessWithEmail({
    email: "info@auth0.com",
    send: "link",
});

auth0.auth.passwordlessWithEmail({
    email: "info@auth0.com",
    send: "link",
    authParams: {
        code_challenge: "12525653653653",
        code_challenge_method: "S256",
        scope: "openid email profile offline_access",
        response_type: "code",
        redirect_uri: "AUTH0_REDIRECT_URI",
    },
});

auth0.auth.passwordlessWithSMS({
    phoneNumber: "+5491159991000",
    send: "code",
    authParams: { scope: "openid offline_access" },
});

auth0.auth.loginWithEmail({
    email: "info@auth0.com",
    code: "123456",
});

auth0.auth.loginWithSMS({
    phoneNumber: "info@auth0.com",
    code: "123456",
});

auth0.auth.loginWithOTP({
    mfaToken: "1234",
    otp: "1234",
});

auth0.auth.loginWithOOB({
    mfaToken: "1234",
    oobCode: "123",
});

auth0.auth.loginWithOOB({
    mfaToken: "1234",
    oobCode: "123",
    bindingCode: "1234",
});

auth0.auth.loginWithRecoveryCode({
    mfaToken: "123",
    recoveryCode: "123",
});

auth0.auth.multifactorChallenge({
    mfaToken: "123",
});

auth0.auth.multifactorChallenge({
    mfaToken: "123",
    authenticatorId: "12345",
    challengeType: "oob otp",
});

auth0.credentialsManager.saveCredentials({
    accessToken: "an access token",
    expiresIn: 123,
    idToken: "an id token",
    tokenType: "a token type",
});

auth0.credentialsManager.saveCredentials({
    accessToken: "an access token",
    expiresIn: 123,
    idToken: "an id token",
    tokenType: "a token type",
    refreshToken: "a refresh token",
    scope: "a scope",
});

auth0.credentialsManager.clearCredentials();

auth0.credentialsManager.getCredentials();

auth0.credentialsManager.getCredentials("a scope", 0, {});

auth0.credentialsManager.requireLocalAuthentication();

auth0.credentialsManager.requireLocalAuthentication("a title", "a description", "a cancel title", "a fallback title");

auth0.credentialsManager.requireLocalAuthentication(
    "a title",
    "a description",
    "a cancel title",
    "a fallback title",
    LocalAuthenticationStrategy.deviceOwnerWithBiometrics,
);

auth0.credentialsManager.hasValidCredentials();

auth0.credentialsManager.hasValidCredentials(123);

function Test() {
    const {
        user,
        isLoading,
        error,
        authorize,
        clearSession,
        getCredentials,
        clearCredentials,
        requireLocalAuthentication,
    } = useAuth0();

    // can be used without args
    authorize();
    clearSession();
    getCredentials();
    clearCredentials();
    requireLocalAuthentication();

    return (
        <Auth0Provider domain={"type"} clientId={"type"}>
            {!!user && user.sub}
            {!!isLoading && "Loading"}
            {!!error && error.message}
        </Auth0Provider>
    );
}
