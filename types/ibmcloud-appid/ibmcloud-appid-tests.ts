import { APIStrategy, WebAppStrategy } from 'ibmcloud-appid';
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
