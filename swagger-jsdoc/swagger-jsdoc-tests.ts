/// <reference path="swagger-jsdoc.d.ts" />
/// <reference path="../express/express.d.ts" />

import * as express from 'express';
const swaggerJsdoc = require('./swagger-jsdoc');
const app = express();

let options = {
    swaggerDefinition: {
        info: {
            title: 'A test api',
            version: '1.0.0'
        }
    }
};

let swaggerSpec = swaggerJsdoc(options);

app.get('/api-docs.json', function(req, res) {
    res.send(swaggerSpec);
})

app.listen(8888);
