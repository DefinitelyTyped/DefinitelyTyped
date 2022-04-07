import { APIStrategy, SelfServiceManager, TokenManager, WebAppStrategy } from 'ibmcloud-appid';
import express = require('express');
import passport = require('passport');

const app = express();

app.use(passport.initialize());

passport.use(
    new APIStrategy({
        oauthServerUrl: '{oauth-server-url}',
    }),
);

passport.use(
    new WebAppStrategy({
        tenantId: '{tenant-id}',
        clientId: '{client-id}',
        secret: '{secret}',
        oauthServerUrl: '{oauth-server-url}',
        redirectUri: '{app-url}' + 'CALLBACK_URL',
    }),
);

const config = {
    tenantId: '{tenant-id}',
    clientId: '{client-id}',
    secret: '{secret}',
    oauthServerUrl: '{oauth-server-url}',
};

const tokenManager = new TokenManager(config);
tokenManager.getApplicationIdentityToken().then(tokenResponse => {
    console.log('Token response : ' + JSON.stringify(tokenResponse));
});

const selfServiceManager = new SelfServiceManager({
    iamApiKey: '{iam-api-key}',
    managementUrl: '{management-url}',
});

const userData = { id: '2819c223-7f76-453a-919d-413861904646', externalId: '701984', userName: 'bjensen@example.com' };

selfServiceManager
    .signUp(userData, 'en', 'iamToken')
    .then(_user => {
        console.debug('user created successfully');
    })
    .catch(err => {
        console.error(err);
    });
