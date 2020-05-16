/**
 * Tests are taken from the module's repository at https://github.com/scottie1984/swagger-ui-express/blob/master/test/testapp/app.js
 */

import swaggerUi = require('swagger-ui-express');
import express = require('express');

const app = express();
const swaggerDocument = {
    swagger: '2.0',
    info: { version: '1.0.0', title: 'Example API' },
    paths: { '/user': { get: { responses: { 200: { description: 'all users' } } } } },
};
const swaggerDocumentSplit = swaggerDocument;

const options = {
    validatorUrl: null,
    oauth: {
        clientId: 'your-client-id1',
        clientSecret: 'your-client-secret-if-required1',
        realm: 'your-realms1',
        appName: 'your-app-name1',
        scopeSeparator: ',',
        additionalQueryStringParams: {},
    },
    docExpansion: 'full',
};

app.use('/api-docs', swaggerUi.serve);
app.get(
    '/api-docs',
    swaggerUi.setup(swaggerDocument, undefined, options, '.swagger-ui .topbar { background-color: red }'),
);

app.use('/api-docs-from-url', swaggerUi.serve);
app.get(
    '/api-docs-from-url',
    swaggerUi.setup(
        undefined,
        undefined,
        options,
        '.swagger-ui .topbar { background-color: red }',
        undefined,
        '/swagger.json',
    ),
);

const swaggerUiOpts = {
    explorer: false,
    swaggerOptions: options,
    customCss: '.swagger-ui .topbar { background-color: blue }',
};

app.use('/api-docs-using-object', swaggerUi.serve);
app.get('/api-docs-using-object', swaggerUi.setup(swaggerDocument, swaggerUiOpts));

const swaggerUiOpts2 = {
    explorer: false,
    swaggerOptions: options,
    customCss: '.swagger-ui .topbar { background-color: pink }',
    swaggerUrl: '/swagger.json',
    customJs: '/my-custom.js',
    operationsSorter: 'alpha',
};

app.use('/api-docs-from-url-using-object', swaggerUi.serve);
app.get('/api-docs-from-url-using-object', swaggerUi.setup(undefined, swaggerUiOpts2));

app.use('/api-docs-with-null', swaggerUi.serve);
app.get(
    '/api-docs-with-null',
    swaggerUi.setup(swaggerDocument, undefined, options, '.swagger-ui .topbar { background-color: orange }'),
);

app.use('/api-docs-split', swaggerUi.serve);
app.get(
    '/api-docs-split',
    swaggerUi.setup(swaggerDocumentSplit, undefined, options, '.swagger-ui .topbar { background-color: orange }'),
);

app.use('/api-docs-with-opts/', swaggerUi.serveWithOptions({ redirect: false }));
app.get(
    '/api-docs-with-opts/',
    swaggerUi.setup(swaggerDocumentSplit, undefined, options, '.swagger-ui .topbar { background-color: orange }'),
);

const swaggerHtml = swaggerUi.generateHTML(swaggerDocument, swaggerUiOpts);

app.use('/api-docs-html1', swaggerUi.serveFiles(swaggerDocument, swaggerUiOpts));

const uiOptsWithSwaggerOpts = {
    swaggerOptions: {
        validatorUrl: null
    }
};

swaggerUi.setup(swaggerDocument, uiOptsWithSwaggerOpts);
