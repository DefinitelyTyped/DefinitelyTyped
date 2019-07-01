import { Application } from 'express';
import { HTTPS } from 'express-sslify';

declare const express: Application;
declare const booleanFlag: boolean;

express.use(HTTPS());
express.use(HTTPS({}));
express.use(HTTPS({ trustAzureHeader: booleanFlag }));
express.use(HTTPS({ trustProtoHeader: booleanFlag }));
express.use(HTTPS({ trustXForwardedHostHeader: booleanFlag }));
express.use(
    HTTPS({
        trustXForwardedHostHeader: booleanFlag,
        trustAzureHeader: booleanFlag,
        trustProtoHeader: booleanFlag,
    })
);
