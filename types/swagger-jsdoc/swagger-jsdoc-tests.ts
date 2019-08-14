import * as express from 'express';
import * as swaggerJSDoc from 'swagger-jsdoc';

const app = express();

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        info: {
            title: 'A test api',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/',
        openapi: '3.0.0',
        servers: [{ url: '/api/v1' }, { url: '/api/v2' }],
    },
    apis: ['./example/routes*.js', './example/parameters.yaml'],
};

const swaggerSpec = swaggerJSDoc(options);

app.get('/api-docs.json', function(req, res) {
    res.send(swaggerSpec);
});

app.listen(8888);
