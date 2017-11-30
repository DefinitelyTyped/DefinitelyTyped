// 2.0 examples from https://github.com/apigee-127/swagger-tools/blob/master/examples/2.0/index.js

import * as connect from 'connect';
import { createServer } from 'http';
import * as swaggerTools from 'swagger-tools';

const app = connect();

const serverPort = 3000;

// swaggerRouter configuration
const options = {
    controllers: './controllers',
    useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

const swaggerUiOptions = {
    apiDocs: 'apiDocs',
    swaggerUi: 'swaggerUi',
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
// tslint:disable-next-line no-var-requires
const swaggerDoc20 = require('./api/swagger.json');

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc20, middleware => {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Test passing in the handlers directly
    app.use(middleware.swaggerRouter({
        controllers: {
            // These tests are based on tests here:
            // https://github.com/apigee-127/swagger-tools/blob/0cea535b122265c6d01546e199e2e8fda4c0f5da/test/2.0/test-middleware-swagger-metadata.js#L102-L138

            foo_bar: (req, res, next) => {
                req.swagger.swaggerVersion = '2.0';
                req.swagger.apiPath = '/pets/{id}';
                req.swagger.operation = {
                    security: [
                        {
                            oauth2: ["read"]
                        }
                    ],
                    tags: [ "Pet Operations" ],
                    operationId: "getPetById",
                    summary: "Finds the pet by id",
                    responses: {
                        200: {
                            description: "Pet response",
                            schema: {
                                $ref: "#/definitions/Pet"
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                $ref: "#/definitions/Error"
                            }
                        }
                    },
                    parameters: [
                        {
                            in: 'query',
                            name: 'mock',
                            description: 'Mock mode',
                            required: false,
                            type: 'boolean'
                        }
                    ]
                };

                req.swagger.operationParameters = [
                    {
                        path: ['paths', '/pets/{id}', 'get', 'parameters', '0'],
                        schema: {
                            in: 'query',
                            name: 'mock',
                            description: 'Mock mode',
                            required: false,
                            type: 'boolean'
                        },
                    },
                    {
                        path: ['paths', '/pets/{id}', 'parameters', '0'],
                        schema: {
                            name: "id",
                            in: "path",
                            description: "ID of pet",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    }
                ];
                req.swagger.operationPath = ['paths', '/pets/{id}', 'get'];
                req.swagger.security = [
                    {
                        oauth2: [ 'read' ]
                    }
                ];
                req.swagger.params = {
                    id: {
                        path: ['paths', '/pets/{id}', 'parameters', '0'],
                        schema: {
                            name: "id",
                            in: "path",
                            description: "ID of pet",
                            required: true,
                            type: "integer",
                            format: "int64"
                        },
                        originalValue: '1',
                        value: 1
                    },
                    mock: {
                        path: ['paths', '/pets/{id}', 'get', 'parameters', '0'],
                        schema: {
                            in: 'query',
                            name: 'mock',
                            description: 'Mock mode',
                            required: false,
                            type: 'boolean'
                        },
                        originalValue: 'false',
                        value: false
                    }
                };

                res.setHeader('Content-Type', 'application/json');
                res.end([ 'foo', 0 ]);
            },
        }
    }));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi(swaggerUiOptions));
    app.use(middleware.swaggerUi());

    // Start the server
    createServer(app).listen(serverPort, () => {
        console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    });
});

// 1.2 examples from https://github.com/apigee-127/swagger-tools/blob/master/examples/1.2/index.js

// The Swagger Resource Listing Document (require it, build it programmatically, fetch it from a URL, ...)
// tslint:disable-next-line no-var-requires
const apiDoc12 = require('./api/api-doc.json');
// The Swagger API Declaration Documents (require them, build them programmatically, fetch them from a URL, ...)
const apiDeclarations = [
    // tslint:disable-next-line no-var-requires
    require('./api/weather.json')
];

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(apiDoc12, apiDeclarations, middleware => {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Test passing in the handlers directly
    app.use(middleware.swaggerRouter({
        controllers: {
            // These tests are based on tests here:
            // https://github.com/apigee-127/swagger-tools/blob/0cea535b122265c6d01546e199e2e8fda4c0f5da/test/1.2/test-middleware-swagger-metadata.js#L72-L89

            foo_bar: (req, res, next) => {
                req.swagger.swaggerVersion = '1.2';
                req.swagger.api = {
                    operations: [
                        {
                            authorizations: {},
                            method: "GET",
                            nickname: "getPetById",
                            notes: "Returns a pet based on ID",
                            parameters: [
                                {
                                    allowMultiple: false,
                                    description: "ID of pet that needs to be fetched",
                                    format: "int64",
                                    maximum: "100000.0",
                                    minimum: "1.0",
                                    name: "petId",
                                    paramType: "path",
                                    required: true,
                                    type: "integer"
                                }
                            ],
                            responseMessages: [
                                {
                                    code: 400,
                                    message: "Invalid ID supplied"
                                },
                                {
                                    code: 404,
                                    message: "Pet not found"
                                }
                            ],
                            summary: "Find pet by ID",
                            type: "Pet"
                        },
                        {
                            authorizations: {
                                oauth2: [
                                    {
                                        description: "modify pets in your account",
                                        scope: "write:pets"
                                    }
                                ]
                            },
                            method: "DELETE",
                            nickname: "deletePet",
                            notes: "",
                            parameters: [
                                {
                                    allowMultiple: false,
                                    description: "Pet id to delete",
                                    name: "petId",
                                    paramType: "path",
                                    required: true,
                                    type: "string"
                                }
                            ],
                            responseMessages: [
                                {
                                    code: 400,
                                    message: "Invalid pet value"
                                }
                            ],
                            summary: "Deletes a pet",
                            type: "void"
                        },
                    ],
                    path: "/pet/{petId}"
                };

                req.swagger.apiDeclaration = {};
                req.swagger.apiIndex = 0;
                req.swagger.authorizations = {
                    oauth2: [
                        {
                            description: "modify pets in your account",
                            scope: "write:pets"
                        }
                    ]
                };
                req.swagger.operation = {
                    authorizations: {},
                    method: "GET",
                    nickname: "getPetById",
                    notes: "Returns a pet based on ID",
                    parameters: [
                        {
                            allowMultiple: false,
                            description: "ID of pet that needs to be fetched",
                            format: "int64",
                            maximum: "100000.0",
                            minimum: "1.0",
                            name: "petId",
                            paramType: "path",
                            required: true,
                            type: "integer"
                        }
                    ],
                    responseMessages: [
                        {
                            code: 400,
                            message: "Invalid ID supplied"
                        },
                        {
                            code: 404,
                            message: "Pet not found"
                        }
                    ],
                    summary: "Find pet by ID",
                    type: "Pet"
                };
                req.swagger.operationPath = ['apis', '0', 'operations', '0'];
                req.swagger.params = {
                    petId: {
                        path: ['apis', '0', 'operations', '0', 'parameters', '0'],
                        schema: {
                            allowMultiple: false,
                            description: "ID of pet that needs to be fetched",
                            format: "int64",
                            maximum: "100000.0",
                            minimum: "1.0",
                            name: "petId",
                            paramType: "path",
                            required: true,
                            type: "integer"
                        },
                        originalValue: '1',
                        value: 1
                    }
                };

                res.setHeader('Content-Type', 'application/json');
                res.end([ 'foo', 0 ]);
            },
        }
    }));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi({
        '/weather': apiDeclarations[0]
    }));

    // Start the server
    createServer(app).listen(serverPort, () => {
        console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    });
});
