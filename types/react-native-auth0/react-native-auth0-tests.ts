import Auth0, { UserInfo } from "react-native-auth0";

const auth0 = new Auth0({
    domain: "definitely-typed",
    clientId: "definitely-typed"
});

auth0.auth.createUser({
    email: "me@example.com",
    username: "johndoe",
    password: "password",
    connection: "db-connection"
});

auth0.auth.authorizationUrl({
    responseType: "json",
    redirectUri: "http://localhost:3000",
    state: "my-state"
});

auth0.auth.exchange({
    code: "my-code",
    redirectUri: "http://localhost:3000",
    verifier: "verifier"
});

auth0.auth.logoutUrl({
    federated: true,
    clientId: "client-id",
    returnTo: "http://localhost:3000"
});

auth0.auth
    .passwordRealm({
        username: "me@example.com",
        password: "password",
        realm: "realm",
        audience: "user-info"
    })
    .then(res => {
        if (res.refreshToken) {
            return res.refreshToken;
        }
        return res.accessToken;
    });

auth0.auth.refreshToken({
    refreshToken: "refresh-token",
    scope: "openid"
});

auth0.auth.resetPassword({
    email: "me@example.com",
    connection: "db-connection"
});

auth0.auth.revoke({
    refreshToken: "refresh-token"
});

auth0.auth.userInfo({
    token: "token"
});

auth0.webAuth.authorize({
    state: "state",
    nonce: "nonce",
    scope: "openid",
    language: "en",
    prompt: 'login'
});

auth0.webAuth.clearSession({ federated: false });
auth0.webAuth.clearSession();

auth0.users("token").getUser({ id: "userId" });

auth0.users("token").patchUser<{ firstName: string; lastName: string }>({
    id: "userId",
    metadata: { firstName: "John", lastName: "Dow" }
});
