import { APIStrategy } from 'ibmcloud-appid';
import express = require('express');
import passport = require('passport');

const app = express();

app.use(passport.initialize());

passport.use(
    new APIStrategy({
        oauthServerUrl: '{oauth-server-url}',
    }),
);
