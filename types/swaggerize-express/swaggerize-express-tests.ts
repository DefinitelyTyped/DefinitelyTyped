import http = require('http');
import express = require('express');
import swaggerize = require('swaggerize-express');

var app = express();
app.use(swaggerize(<swaggerize.Options>{
    api: {
        swagger: "2.0",
        host: "localhost:8080",
        info: {
            title: "swaggerize-express.d.ts test",
            version: "1"
        },
        paths: {

        }
    },
    docspath: '/api-docs',
    handlers: './handlers'
}));

app.use(swaggerize(<swaggerize.Options>{
    api: {
        swagger: "2.0",
        host: "localhost:8080",
        info: {
            title: "swaggerize-express.d.ts test",
            version: "1"
        },
        paths: {

        }
    },
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
}));

var server = app.listen(18888, 'localhost', function () {
    (<swaggerize.SwaggerizedExpress>app).swagger.api.host = server.address().address + ':' + server.address().port;
});
