

import express = require('express');
import openapi = require('express-openapi');

var app = express();

var api:openapi.InitializedApi;
api = openapi.initialize({
    apiDoc: require('./api-doc.js'),
    app: app,
    routes: './api-routes',
    docPath: '/doc',
    exposeApiDocs: true,
    validateApiDoc: true,
    errorTransformer: (openapiError, jsonschemaError) => {},
    customFormats: {
        myFormat: input => { return true; },
    }
});

app.listen(3000);

// "./api-routes/user/{id}.ts"
export var get: openapi.Operation = (req, res, next) => {
};

export var post: openapi.Operation = [(req, res, next) => {}];

export var parameters = [
    {
        name: 'id',
        in: 'path',
        type: 'string'
    }
];

get.apiDoc = {
    description: 'get user information',
    operationId: 'getUser',
    parameters: [
        {
            name: 'includeDetail',
            in: 'query',
            type: 'boolean'
        }
    ],
    responses: {
        200: {
            description: "valid user object",
            schema: {$ref: '#/definitions/user'}
        },
        default: {$ref: '#/definitions/error'}
    },
    "x-some-vendor-property": {}
};

post.apiDoc = {
    description: 'post to user',
    operationId: 'postToUser',
    responses: {
        default: {$ref: '#/definitions/error'}
    },
    "x-some-vendor-property": {}
}
