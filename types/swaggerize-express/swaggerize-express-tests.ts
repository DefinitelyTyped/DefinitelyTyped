import http = require('http');
import express = require('express');
import swaggerize = require('swaggerize-express');
import { AddressInfo } from 'net';

const api = {
    swagger: "2.0",
    host: "localhost:8080",
    info: {
        title: "swaggerize-express.d.ts test",
        version: "1"
    },
    paths: {
    }
};

var app = express();
app.use(swaggerize({
    api,
    docspath: '/api-docs',
    handlers: './handlers'
} as swaggerize.Options));

app.use(swaggerize({
    api,
    docspath: '/api-docs',
    handlers: {
        'api': {
            'v1': {
                'version': {
                    '$get': (req: express.Request, res: express.Response) => res.send('v1')
                }
            }
        }
    }
} as swaggerize.Options));

app.use(swaggerize({
    api,
    docspath: '/api-docs',
    handlers: {
        'api': {
            'authenticated-path': {
                '$get': [
                    (req: express.Request, res: express.Response, next: express.NextFunction) => next(),
                    (req: express.Request, res: express.Response) => res.send('v1'),
                ]
            }
        }
    }
} as swaggerize.Options));

var server = app.listen(18888, 'localhost', function () {
    const addr = server.address() as AddressInfo;
    (app as swaggerize.SwaggerizedExpress).swagger.api.host = addr.address + ':' + addr.port;
});
