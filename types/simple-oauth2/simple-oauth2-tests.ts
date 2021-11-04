// off https://github.com/lelylan/simple-oauth2/blob/master/README.md
// slightly changed to remove external dependencies

// Initialize the OAuth2 Library
import * as oauth2lib from "simple-oauth2";

// Set the configuration settings
const credentials: oauth2lib.ModuleOptions = {
    client: {
        id: "<client-id>",
        secret: "<client-secret>",
    },
    auth: {
        tokenHost: "https://api.oauth.com",
    },
};

const oauth2AuthorizationCode = new oauth2lib.AuthorizationCode(credentials);
const oauth2ClientCredentials = new oauth2lib.ClientCredentials(credentials);
const oauth2ResourceOwnerPassword = new oauth2lib.ResourceOwnerPassword(
  credentials
);

// Test custom `idParamName`
{
    const oauth2AuthorizationCode = new oauth2lib.AuthorizationCode({
        client: { id: "x", secret: "x", idParamName: "foobar" },
        auth: { tokenHost: "x" },
    });
    oauth2AuthorizationCode.authorizeURL({ foobar: "x" });
}

// #Authorization Code flow
(async () => {
    // Authorization oauth2 URI
    const authorizationUri = oauth2AuthorizationCode.authorizeURL({
        redirect_uri: "http://localhost:3000/callback",
        scope: "<scope>",
        state: "<state>",
    });

    oauth2AuthorizationCode.authorizeURL({
        redirect_uri: "http://localhost:3000/callback",
        scope: ["<scope1>", "<scope2>"],
        state: "<state>",
    });

    // Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
    // res.redirect(authorizationUri);

    // Get the access token object (the authorization code is given from the previous step).
    const tokenConfig = {
        code: "<code>",
        redirect_uri: "http://localhost:3000/callback",
        scope: ["<scope1>", "<scope2>"],
    };

    // Save the access token
    try {
        const result = await oauth2AuthorizationCode.getToken(tokenConfig);
        const accessToken = oauth2AuthorizationCode.createToken(result.token);
    } catch (error) {
        console.log("Access Token Error", error.message);
    }
})();

// #Password Credentials Flow
(async () => {
    const tokenConfig = {
        username: "username",
        password: "password",
        scope: ["<scope1>", "<scope2>"],
    };

    // Save the access token
    try {
        const result = await oauth2ResourceOwnerPassword.getToken(tokenConfig);
        const accessToken = oauth2ResourceOwnerPassword.createToken(result.token);
    } catch (error) {
        console.log("Access Token Error", error.message);
    }
})();

// #Client Credentials Flow
(async () => {
    const tokenConfig = {};

    // Get the access token object for the client
    try {
        const result = await oauth2ClientCredentials.getToken(tokenConfig);
        const accessToken = oauth2ClientCredentials.createToken(result.token);
    } catch (error) {
        console.log("Access Token error", error.message);
    }
})();

// #Access Token object
async function TestFnAccessTokenObject(
  oauthSubject:
    | oauth2lib.AuthorizationCode
    | oauth2lib.ClientCredentials
    | oauth2lib.ResourceOwnerPassword
) {
    // Sample of a JSON access token (you got it through previous steps)
    const tokenObject = {
        access_token: "<access-token>",
        refresh_token: "<refresh-token>",
        expires_in: "7200",
    };

    // Create the access token wrapper
    let accessToken = oauthSubject.createToken(tokenObject);

    // Check if the token is expired. If expired it is refreshed.
    if (accessToken.expired()) {
        try {
            accessToken = await accessToken.refresh();
        } catch (error) {
            console.log("Error refreshing access token: ", error.message);
        }
    }

    // Revoke both access and refresh tokens
    try {
        // Revoke only the access token
        await accessToken.revoke("access_token");

        // Session ended. But the refresh_token is still valid.
        // Revoke the refresh token
        await accessToken.revoke("refresh_token");

        console.log("Token revoked");
    } catch (error) {
        console.log("Error revoking token: ", error.message);
    }

    // or...

    try {
        // Revokes both tokens, refresh token is only revoked if the access_token is properly revoked
        await accessToken.revokeAll();
    } catch (error) {
        console.log("Error revoking token: ", error.message);
    }
}

// #Run test `#Access Token object`
TestFnAccessTokenObject(oauth2AuthorizationCode);
TestFnAccessTokenObject(oauth2ClientCredentials);
TestFnAccessTokenObject(oauth2ResourceOwnerPassword);

// #Errors
// not applicable, as those errors about missing authentication codes are already found by the typescript compiler

// (function () {
//     oauth2AuthorizationCode.getToken({})
//         .catch((error) => {
//             console.log(error.message);
//         });

//     // => { "status": "401", "message": "Unauthorized" }
// })();

// #Custom Grant
(async () => {
    const tokenConfig = {
        username: "username",
        password: "password",
        scope: ["<scope1>", "<scope2>"],
        grant_type: "openapi_2lo",
    };

    // Save the access token
    try {
        const result = await oauth2ResourceOwnerPassword.getToken(tokenConfig);
        const accessToken = oauth2ResourceOwnerPassword.createToken(result.token);
    } catch (error) {
        console.log("Access Token Error", error.message);
    }
})();
