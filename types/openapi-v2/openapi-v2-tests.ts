import { OpenApi, OpenApiContact, OpenApiInfo, OpenApiLicense } from "openapi-v2";

const info: OpenApiInfo = {
    title: 'Swagger Sample App',
    description: 'This is a sample server Petstore server.',
    termsOfService: 'http://swagger.io/terms/',
    contact: {
        name: 'API Support',
        url: 'http://www.swagger.io/support',
        email: 'support@swagger.io',
    },
    license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
    version: '1.0.1',
};

const contact: OpenApiContact = {
    name: 'API Support',
    url: 'http://www.swagger.io/support',
    email: 'support@swagger.io',
};

const licence: OpenApiLicense = {
    name: 'Apache 2.0',
    url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
};

const openApi: OpenApi = {
    swagger: '2.0.0',
    info,
    host: 'http://...',
    paths: {
        '/pets': {
            get: {
                description: 'Returns all pets from the system that the user has access to',
                produces: ['application/json'],
                responses: {
                    200: {
                        description: 'A list of pets.',
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/pet',
                            },
                        },
                    },
                },
            },
        },
        '/pet': {
            get: {
                description: 'Returns pets based on ID',
                summary: 'Find pets by ID',
                operationId: 'getPetsById',
                produces: ['application/json', 'text/html'],
                responses: {
                    200: {
                        description: 'pet response',
                        schema: {
                            type: 'array',
                            items: {
                                $ref: '#/definitions/Pet',
                            },
                        },
                    },
                    default: {
                        description: 'error payload',
                        schema: {
                            $ref: '#/definitions/ErrorModel',
                        },
                    },
                },
            },
            post: {
                tags: ['pet'],
                summary: 'Updates a pet in the store with form data',
                description: '',
                operationId: 'updatePetWithForm',
                consumes: ['application/x-www-form-urlencoded'],
                produces: ['application/json', 'application/xml'],
                parameters: [
                    {
                        name: 'petId',
                        in: 'path',
                        description: 'ID of pet that needs to be updated',
                        required: true,
                        type: 'string',
                    },
                    {
                        name: 'name',
                        in: 'formData',
                        description: 'Updated name of the pet',
                        required: false,
                        type: 'string',
                    },
                    {
                        name: 'status',
                        in: 'formData',
                        description: 'Updated status of the pet',
                        required: false,
                        type: 'string',
                    },
                ],
                responses: {
                    200: {
                        description: 'Pet updated.',
                    },
                    405: {
                        description: 'Invalid input',
                    },
                },
                security: [
                    {
                        petstore_auth: ['write:pets', 'read:pets'],
                    },
                ],
            },
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    description: 'ID of pet to use',
                    required: true,
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                    collectionFormat: 'csv',
                },
                {
                    name: 'user',
                    in: 'body',
                    description: 'user to add to the system',
                    required: true,
                    schema: {
                        $ref: '#/definitions/User',
                    },
                },
                {
                    name: 'token',
                    in: 'header',
                    description: 'token to be passed as a header',
                    required: true,
                    type: 'array',
                    items: {
                        type: 'integer',
                        format: 'int64',
                    },
                    collectionFormat: 'csv',
                },
                {
                    name: 'username',
                    in: 'path',
                    description: 'username to fetch',
                    required: true,
                    type: 'string',
                },
                {
                    name: 'id',
                    in: 'query',
                    description: 'ID of the object to fetch',
                    required: false,
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                    collectionFormat: 'multi',
                },
            ],
        },
    },
    responses: {
        noResponse: {
            description: 'object created',
        },
        responseWithHeader: {
            description: 'A simple string response',
            schema: {
                type: 'string',
            },
            headers: {
                'X-Rate-Limit-Limit': {
                    description: 'The number of allowed requests in the current period',
                    type: 'integer',
                },
                'X-Rate-Limit-Remaining': {
                    description: 'The number of remaining requests in the current period',
                    type: 'integer',
                },
                'X-Rate-Limit-Reset': {
                    description: 'The number of seconds left in the current period',
                    type: 'integer',
                },
            },
        },
        200: {
            description: 'a pet to be returned',
            schema: {
                $ref: '#/definitions/Pet',
            },
        },
        default: {
            description: 'Unexpected error',
            schema: {
                $ref: '#/definitions/ErrorModel',
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
