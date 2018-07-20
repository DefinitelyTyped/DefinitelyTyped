// off https://github.com/lelylan/simple-oauth2/blob/master/README.md
// slightly changed to remove external dependencies

// Initialize the OAuth2 Library
import * as oauth2lib from "simple-oauth2";

// Set the configuration settings
const credentials: oauth2lib.ModuleOptions = {
    client: {
        id: '<client-id>',
        secret: '<client-secret>'
    },
    auth: {
        tokenHost: 'https://api.oauth.com'
    }
};

const oauth2 = oauth2lib.create(credentials);

// #Authorization Code flow
(() => {
    // Authorization oauth2 URI
    const authorizationUri = oauth2.authorizationCode.authorizeURL({
        redirect_uri: 'http://localhost:3000/callback',
        scope: '<scope>',
        state: '<state>'
    });

    // Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
    // res.redirect(authorizationUri);

    // Get the access token object (the authorization code is given from the previous step).
    const tokenConfig = {
        code: '<code>',
        redirect_uri: 'http://localhost:3000/callback',
        scope: ['<scope1>', '<scope2>']
    };

    // Callbacks
    // Save the access token
    oauth2.authorizationCode.getToken(tokenConfig, (error, result) => {
        if (error) {
            console.log('Access Token Error', error.message);
            return;
        }

        const token = oauth2.accessToken.create(result);
    });

    // Promises
    // Save the access token
    oauth2.authorizationCode.getToken(tokenConfig)
        .then((result) => {
            const token = oauth2.accessToken.create(result);
        })
        .catch((error) => {
            console.log('Access Token Error', error.message);
        });
})();

// #Password Credentials Flow
(() => {
    const tokenConfig = {
        username: 'username',
        password: 'password',
        scope: [ '<scope1>', '<scope2>' ],
    };

    // Callbacks
    // Save the access token
    oauth2.ownerPassword.getToken(tokenConfig, (error, result) => {
        if (error) {
            console.log('Access Token Error', error.message);
            return;
        }

        const token = oauth2.accessToken.create(result);
    });

    // Promises
    // Save the access token
    oauth2.ownerPassword.getToken(tokenConfig)
        .then((result) => {
            const token = oauth2.accessToken.create(result);
        })
        .catch((error) => {
            console.log('Access Token Error', error.message);
        });
})();

// #Client Credentials Flow
(() => {
    const tokenConfig = {};

    // Callbacks
    // Get the access token object for the client
    oauth2.clientCredentials.getToken(tokenConfig, (error, result) => {
        if (error) {
            console.log('Access Token Error', error.message);
            return;
        }

        const token = oauth2.accessToken.create(result);
    });

    // Promises
    // Get the access token object for the client
    oauth2.clientCredentials.getToken(tokenConfig)
        .then((result) => {
            const token = oauth2.accessToken.create(result);
        })
        .catch((error) => {
            console.log('Access Token error', error.message);
        });
})();

// #Access Token object
(() => {
    // Sample of a JSON access token (you got it through previous steps)
    const tokenObject = {
        access_token: '<access-token>',
        refresh_token: '<refresh-token>',
        expires_in: '7200'
    };

    // Create the access token wrapper
    let accessToken = oauth2.accessToken.create(tokenObject);

    // Check if the token is expired. If expired it is refreshed.
    if (accessToken.expired()) {
        // Callbacks
        accessToken.refresh((error, result) => {
            accessToken = result;
        });

        // Promises
        accessToken.refresh()
            .then((result) => {
                accessToken = result;
            });
    }

    // Callbacks
    // Revoke only the access token
    accessToken.revoke('access_token', (error) => {
        // Session ended. But the refresh_token is still valid.

        // Revoke the refresh_token
        accessToken.revoke('refresh_token', (error) => {
            console.log('token revoked.');
        });
    });

    // Promises
    // Revoke only the access token
    accessToken.revoke('access_token')
        .then(() => {
            // Revoke the refresh token
            return accessToken.revoke('refresh_token');
        })
        .then(() => {
            console.log('Token revoked');
        })
        .catch((error) => {
            console.log('Error revoking token.', error.message);
        });
})();

// #Errors
// not applicable, as those errors about missing authentication codes are already found by the typescript compiler

// (function () {
//     // Callbacks
//     oauth2.authorizationCode.getToken({}, (error, token) => {
//         if (error) {
//             return console.log(error.message);
//         }
//     });

//     // Promises
//     oauth2.authorizationCode
//         .getToken({})
//         .catch((error) => {
//             console.log(error.message);
//         });

//     // => { "status": "401", "message": "Unauthorized" }
// })();
