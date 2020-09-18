import { OpenApi, OpenApiContact, OpenApiInfo, OpenApiLicense, OpenApiServer } from "openapi-v3";

const info: OpenApiInfo = {
    title: 'Sample Pet Store App',
    description: 'This is a sample server for a pet store.',
    termsOfService: 'http://example.com/terms/',
    contact: {
        name: 'API Support',
        url: 'http://www.example.com/support',
        email: 'support@example.com',
    },
    license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
    version: '1.0.1',
};

const contact: OpenApiContact = {
    name: 'API Support',
    url: 'http://www.example.com/support',
    email: 'support@example.com',
};

const licence: OpenApiLicense = {
    name: 'Apache 2.0',
    url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
};

const server: OpenApiServer = {
    url: 'https://development.gigantic-server.com/v1',
    description: 'Development server',
};

const openApi: OpenApi = {
    openapi: '3.0.2',
    servers: [
        {
            url: 'https://development.gigantic-server.com/v1',
            description: 'Development server',
        },
        {
            url: 'https://staging.gigantic-server.com/v1',
            description: 'Staging server',
        },
        {
            url: 'https://api.gigantic-server.com/v1',
            description: 'Production server',
        },
    ],
    info: {
        title: 'Sample Pet Store App',
        description: 'This is a sample server for a pet store.',
        termsOfService: 'http://example.com/terms/',
        contact: {
            name: 'API Support',
            url: 'http://www.example.com/support',
            email: 'support@example.com',
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
        version: '1.0.1',
    },
    paths: {
        '/pets': {
            get: {
                description: 'Returns all pets from the system that the user has access to',
                responses: {
                    200: {
                        description: 'A list of pets.',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        $ref: '#/components/schemas/pet',
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    components: {
        schemas: {
            GeneralError: {
                type: 'object',
                properties: {
                    code: {
                        type: 'integer',
                        format: 'int32',
                    },
                    message: {
                        type: 'string',
                    },
                },
            },
            Category: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        format: 'int64',
                    },
                    name: {
                        type: 'string',
                    },
                },
            },
            Tag: {
                type: 'object',
                properties: {
                    id: {
                        type: 'integer',
                        format: 'int64',
                    },
                    name: {
                        type: 'string',
                    },
                },
            },
        },

        parameters: {
            skipParam: {
                name: 'skip',
                in: 'query',
                description: 'number of items to skip',
                required: true,
                schema: {
                    type: 'integer',
                    format: 'int32',
                },
            },
            limitParam: {
                name: 'limit',
                in: 'query',
                description: 'max records to return',
                required: true,
                schema: {
                    type: 'integer',
                    format: 'int32',
                },
            },
            exampleParam: {
                name: 'token',
                in: 'header',
                description: 'token to be passed as a header',
                required: true,
                schema: {
                    type: 'array',
                    items: {
                        type: 'integer',
                        format: 'int64',
                    },
                },
                style: 'simple',
            },
        },
        responses: {
            NotFound: {
                description: 'Entity not found.',
            },
            IllegalInput: {
                description: 'Illegal input for operation.',
            },
            GeneralError: {
                description: 'General Error',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GeneralError',
                        },
                    },
                },
            },
            200: {
                description: 'a pet to be returned',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Pet',
                        },
                    },
                },
            },
            default: {
                description: 'Unexpected error',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/ErrorModel',
                        },
                    },
                },
            },
        },
        securitySchemes: {
            api_key: {
                type: 'apiKey',
                name: 'api_key',
                in: 'header',
            },
            auth: {
                type: 'oauth2',
                flows: {
                    implicit: {
                        authorizationUrl: 'https://example.com/api/oauth/dialog',
                        scopes: {
                            'write:pets': 'modify pets in your account',
                            'read:pets': 'read your pets',
                        },
                    },
                    authorizationCode: {
                        authorizationUrl: 'https://example.com/api/oauth/dialog',
                        tokenUrl: 'https://example.com/api/oauth/token',
                        scopes: {
                            'write:pets': 'modify pets in your account',
                            'read:pets': 'read your pets',
                        },
                    },
                },
            },
        },
    },
    security: [
        {
            petstore_auth: ['write:pets', 'read:pets'],
        },
    ],
    tags: [
        {
            name: 'pet',
            description: 'Pets operations',
        },
    ],
    externalDocs: {
        description: 'Find more info here',
        url: 'https://example.com',
    },
};
