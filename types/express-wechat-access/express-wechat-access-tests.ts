import express = require('express');
import * as weAccessMiddleware from 'express-wechat-access';

const app: express.Application = express();

const options: weAccessMiddleware.WeAccessMidOption = {
    appId: 'xxxxx',
    appSecret: 'xxxxx'
};

app.use(
    weAccessMiddleware(
        options,
        e => {
            console.error(e);
        }
    )
);
